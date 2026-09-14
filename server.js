const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const vm = require('vm');
const express = require('express');
const helmet = require('helmet');
const compression = require('compression');

// Minimal .env loader (no extra dependency) — only sets vars not already
// present in the environment, and never overwrites real env vars.
(function loadDotEnv() {
  const envPath = path.join(__dirname, '.env');
  if (!fs.existsSync(envPath)) return;
  const lines = fs.readFileSync(envPath, 'utf8').split('\n');
  lines.forEach((line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const eq = trimmed.indexOf('=');
    if (eq === -1) return;
    const key = trimmed.slice(0, eq).trim();
    let value = trimmed.slice(eq + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    }
    if (!(key in process.env)) process.env[key] = value;
  });
})();

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');
const GOOGLE_TTS_API_KEY = process.env.GOOGLE_TTS_API_KEY || '';
const AZURE_SPEECH_KEY = process.env.AZURE_SPEECH_KEY || '';
const AZURE_SPEECH_REGION = process.env.AZURE_SPEECH_REGION || '';

app.disable('x-powered-by');
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'],
        fontSrc: ["'self'", 'https://fonts.gstatic.com'],
        scriptSrc: ["'self'"],
        imgSrc: ["'self'", 'data:'],
        mediaSrc: ["'self'", 'data:', 'blob:'],
        connectSrc: ["'self'"],
      },
    },
  })
);
app.use(compression());
app.use(express.json({ limit: '10mb' }));
// Cache: HTML/CSS/JS phai luon kiem tra lai voi server truoc khi dung
// (no-cache = van luu tren may, nhung phai xac nhan bang ETag), nen sua
// code xong la reload thay ngay, khong bao gio dinh ban cu.
// Audio/anh thi cache dai 30 ngay vi gan nhu khong bao gio doi.
const REVALIDATE_EXT = new Set(['.html', '.css', '.js', '.json', '.webmanifest']);

// CDN cua Hostinger (hcdn) cache file .js/.css o edge va bo header Cache-Control,
// nen sau moi lan deploy hoc sinh van co the nhan ban cu (trinh duyet cache
// theo heuristic). Cach chac chan nhat: moi lan server khoi dong (= moi lan
// deploy) tao 1 ma phien ban moi va gan ?v=... vao MOI the <script>/<link>
// tro toi /js/ va /css/ trong HTML tra ve — URL moi thi CDN lan trinh duyet
// deu phai tai lai. HTML thi luon no-cache nen ban than trang khong bi cu.
const ASSET_VERSION = Date.now().toString(36);
const ASSET_REF_RE = /(<(?:script|link)\b[^>]*?\b(?:src|href)=")(\/(?:js|css|exam)\/[^"?#]+\.(?:js|css))(")/g;

// Hai nut noi (Tro ly AI + Tin nhan) duoc gan vao MOI trang HTML ngay tai may chu,
// nen khong phai sua tung file bai hoc. Bo qua phong thi HSK (/exam/test/) de hoc
// sinh khong hoi AI trong luc thi, va bo qua trang quan tri.
const WIDGET_TAGS = '<link rel="stylesheet" href="/css/widgets.css" />\n<script src="/js/widgets.js" defer></script>\n';
const WIDGET_EXCLUDE_RE = /[\\/](exam[\\/]test[\\/]index\.html|admin\.html)$/;

function sendVersionedHtml(res, filePath) {
  let html = fs.readFileSync(filePath, 'utf8');
  if (!WIDGET_EXCLUDE_RE.test(filePath) && html.indexOf('/js/widgets.js') === -1 && html.lastIndexOf('</body>') !== -1) {
    const at = html.lastIndexOf('</body>');
    html = html.slice(0, at) + WIDGET_TAGS + html.slice(at);
  }
  html = html.replace(ASSET_REF_RE, (m, before, url, after) => before + url + '?v=' + ASSET_VERSION + after);
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('X-Asset-Version', ASSET_VERSION);
  res.type('html').send(html);
}

app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();
  let p = decodeURIComponent(req.path);
  if (p.endsWith('/')) p += 'index.html';
  if (!p.endsWith('.html')) return next();
  const filePath = path.join(PUBLIC_DIR, p);
  if (!filePath.startsWith(PUBLIC_DIR) || !fs.existsSync(filePath)) return next();
  sendVersionedHtml(res, filePath);
});

app.use(
  express.static(PUBLIC_DIR, {
    extensions: ['html'],
    etag: true,
    lastModified: true,
    setHeaders(res, filePath) {
      const ext = path.extname(filePath).toLowerCase();
      if (REVALIDATE_EXT.has(ext)) {
        res.setHeader('Cache-Control', 'no-cache');
      } else {
        res.setHeader('Cache-Control', 'public, max-age=2592000');
      }
    },
  })
);

// Simple content API so lesson/vocab data can later move server-side
// without changing the frontend contract.
app.get('/api/health', asyncRoute(async (req, res) => {
  // storage + so luong tai khoan/phien (khong co du lieu ca nhan) — de kiem
  // tra nhanh production dang luu vao MySQL hay file JSON (file JSON bi xoa
  // moi lan deploy lai tu GitHub nen phien dang nhap se mat).
  let users = 0, sessions = 0, storage = USE_DB ? 'mysql' : 'json';
  try {
    if (USE_DB) {
      const [[u]] = await dbPool.query('SELECT COUNT(*) AS c FROM users');
      const [[s]] = await dbPool.query('SELECT COUNT(*) AS c FROM sessions');
      users = u.c; sessions = s.c;
    } else {
      users = (readJsonFile(USERS_FILE) || []).length;
      sessions = Object.keys(readJsonFile(SESSIONS_FILE) || {}).length;
    }
  } catch (err) {
    storage = storage + '-error:' + err.code;
  }
  res.json({ status: 'ok', time: new Date().toISOString(), storage, users, sessions });
}));

// ══════════════════════════════════════════════════════════════════
// Tai khoan hoc sinh THAT + Bang xep hang — luu vao file JSON tren
// server (khong co database rieng, day la giai phap don gian nhat
// khong can them dependency). KHONG chua du lieu gia — bang xep hang
// chi hien thi hoc sinh da that su dang ky va nop diem.
// ══════════════════════════════════════════════════════════════════
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const SCORES_FILE = path.join(DATA_DIR, 'scores.json');
const SESSIONS_FILE = path.join(DATA_DIR, 'sessions.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
}
function readJsonFile(file) {
  try {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
  } catch (e) {
    return null;
  }
}
function writeJsonFile(file, data) {
  ensureDataDir();
  fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
}

// ── Tai khoan hoc sinh + diem so: MySQL khi co cau hinh (production tren
// Hostinger, du lieu song song voi ma nguon nen KHONG mat khi deploy lai),
// hoac file JSON khi chay local (khong can cai MySQL de dev). Ca hai duong
// deu di qua cung 4 ham loadUsers/saveUsers/loadScores/saveScores ben duoi
// nen phan con lai cua server khong can biet dang dung backend nao.
const USE_DB = !!process.env.DB_HOST;
let dbPool = null;
if (USE_DB) {
  const mysql = require('mysql2/promise');
  dbPool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT) || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 5,
  });
}

async function initDb() {
  if (!USE_DB) return;
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS users (' +
      'id VARCHAR(36) PRIMARY KEY, ' +
      'name VARCHAR(255) NOT NULL, ' +
      'email VARCHAR(255) NOT NULL UNIQUE, ' +
      'level VARCHAR(32) NOT NULL, ' +
      'password_salt VARCHAR(64) NOT NULL, ' +
      'password_hash VARCHAR(255) NOT NULL, ' +
      'created_at DATETIME NOT NULL' +
    ')'
  );
  // Moi lan dang nhap tao 1 session RIENG thay vi ghi de 1 token duy nhat —
  // de hoc sinh dang nhap tren nhieu thiet bi (dien thoai + may tinh) cung
  // luc ma khong bi thiet bi kia tu dong dang xuat.
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS sessions (' +
      'token VARCHAR(64) PRIMARY KEY, ' +
      'user_id VARCHAR(36) NOT NULL, ' +
      'created_at DATETIME NOT NULL, ' +
      'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
    ')'
  );
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS scores (' +
      'user_id VARCHAR(36) PRIMARY KEY, ' +
      'name VARCHAR(255), ' +
      'level VARCHAR(32), ' +
      'total_correct INT DEFAULT 0, ' +
      'total_questions INT DEFAULT 0, ' +
      'streak INT DEFAULT 0, ' +
      'lessons_done INT DEFAULT 0, ' +
      'study_days LONGTEXT, ' +
      'lesson_scores LONGTEXT, ' +
      'review_wrong_words LONGTEXT, ' +
      'updated_at DATETIME, ' +
      'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
    ')'
  );
  // Bang scores co the da ton tai tu truoc khi co cot nay (deploy cu) —
  // ALTER them cot, bo qua loi "da co cot roi" de khong crash khi khoi dong lai.
  try {
    await dbPool.query('ALTER TABLE scores ADD COLUMN review_wrong_words LONGTEXT');
  } catch (err) {
    if (err.code !== 'ER_DUP_FIELDNAME') throw err;
  }
  try {
    await dbPool.query('ALTER TABLE scores ADD COLUMN peak_correct INT NULL');
  } catch (err) {
    if (err.code !== 'ER_DUP_FIELDNAME') throw err;
  }
  await initExamAttemptsTable();
  await initDailyPointsTable();
  await initChatTables();
  console.log('MySQL: da san sang (bang users/scores/exam_attempts).');
  await migrateJsonToDbIfNeeded();
}

// Chuyen du lieu tu file JSON (data/) sang MySQL DUY NHAT 1 LAN, khi vua
// cau hinh DB_HOST lan dau tren mot server truoc do chay bang file JSON —
// de tai khoan hoc sinh da dang ky khong bi mat, VA giu nguyen session
// token cu de thiet bi da dang nhap tu truoc khong bi dang xuat. Chi chay
// khi bang users con trong (chua tung migrate) VA file JSON co du lieu.
async function migrateJsonToDbIfNeeded() {
  const [[{ c }]] = await dbPool.query('SELECT COUNT(*) AS c FROM users');
  if (c > 0) return; // da co du lieu (migrate roi hoac da dang dung DB tu dau) — khong lam gi ca
  const oldUsers = readJsonFile(USERS_FILE);
  if (!Array.isArray(oldUsers) || oldUsers.length === 0) return; // khong co du lieu JSON cu de chuyen

  await saveUsers(oldUsers);

  const oldSessions = readJsonFile(SESSIONS_FILE) || {};
  for (const token of Object.keys(oldSessions)) {
    const s = oldSessions[token];
    if (!s || !s.userId) continue;
    await dbPool.query(
      'INSERT INTO sessions (token, user_id, created_at) VALUES (?,?,?) ON DUPLICATE KEY UPDATE user_id=VALUES(user_id)',
      [token, s.userId, s.createdAt || new Date()]
    );
  }

  const oldScores = readJsonFile(SCORES_FILE) || {};
  if (Object.keys(oldScores).length > 0) await saveScores(oldScores);

  console.log(
    'MySQL: da chuyen ' + oldUsers.length + ' tai khoan + ' + Object.keys(oldSessions).length +
    ' phien dang nhap + ' + Object.keys(oldScores).length + ' ban ghi diem tu file JSON sang MySQL.'
  );
}

async function loadUsers() {
  if (!USE_DB) return readJsonFile(USERS_FILE) || [];
  const [rows] = await dbPool.query('SELECT * FROM users');
  return rows.map((r) => ({
    id: r.id,
    name: r.name,
    email: r.email,
    level: r.level,
    passwordSalt: r.password_salt,
    passwordHash: r.password_hash,
    createdAt: r.created_at,
  }));
}
async function saveUsers(users) {
  if (!USE_DB) return writeJsonFile(USERS_FILE, users);
  for (const u of users) {
    await dbPool.query(
      'INSERT INTO users (id,name,email,level,password_salt,password_hash,created_at) VALUES (?,?,?,?,?,?,?) ' +
        'ON DUPLICATE KEY UPDATE name=VALUES(name), level=VALUES(level), password_salt=VALUES(password_salt), ' +
        'password_hash=VALUES(password_hash)',
      [u.id, u.name, u.email, u.level, u.passwordSalt, u.passwordHash, u.createdAt]
    );
  }
}

// Session rieng cho tung lan dang nhap (khong ghi de nhau) — dung chung
// cho ca che do file (local dev) va MySQL (production).
async function createSession(userId) {
  const token = makeToken();
  if (!USE_DB) {
    const sessions = readJsonFile(SESSIONS_FILE) || {};
    sessions[token] = { userId, createdAt: new Date().toISOString() };
    writeJsonFile(SESSIONS_FILE, sessions);
    return token;
  }
  await dbPool.query('INSERT INTO sessions (token, user_id, created_at) VALUES (?,?,?)', [token, userId, new Date()]);
  return token;
}
async function findUserIdBySession(token) {
  if (!USE_DB) {
    const sessions = readJsonFile(SESSIONS_FILE) || {};
    return sessions[token] ? sessions[token].userId : null;
  }
  const [rows] = await dbPool.query('SELECT user_id FROM sessions WHERE token = ? LIMIT 1', [token]);
  return rows[0] ? rows[0].user_id : null;
}
async function deleteSession(token) {
  if (!USE_DB) {
    const sessions = readJsonFile(SESSIONS_FILE) || {};
    delete sessions[token];
    writeJsonFile(SESSIONS_FILE, sessions);
    return;
  }
  await dbPool.query('DELETE FROM sessions WHERE token = ?', [token]);
}
async function loadScores() {
  if (!USE_DB) return readJsonFile(SCORES_FILE) || {};
  const [rows] = await dbPool.query('SELECT * FROM scores');
  const out = {};
  rows.forEach((r) => {
    out[r.user_id] = {
      name: r.name,
      level: r.level,
      totalCorrect: r.total_correct,
      totalQuestions: r.total_questions,
      streak: r.streak,
      lessonsDone: r.lessons_done,
      studyDays: JSON.parse(r.study_days || '[]'),
      lessonScores: JSON.parse(r.lesson_scores || '{}'),
      reviewWrongWords: JSON.parse(r.review_wrong_words || '{}'),
      peakCorrect: r.peak_correct == null ? null : r.peak_correct,
      updatedAt: r.updated_at,
    };
  });
  return out;
}
async function saveScores(scores) {
  if (!USE_DB) return writeJsonFile(SCORES_FILE, scores);
  for (const userId of Object.keys(scores)) {
    const s = scores[userId];
    await dbPool.query(
      'INSERT INTO scores (user_id,name,level,total_correct,total_questions,streak,lessons_done,study_days,lesson_scores,review_wrong_words,peak_correct,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?) ' +
        'ON DUPLICATE KEY UPDATE name=VALUES(name), level=VALUES(level), total_correct=VALUES(total_correct), ' +
        'total_questions=VALUES(total_questions), streak=VALUES(streak), lessons_done=VALUES(lessons_done), ' +
        'study_days=VALUES(study_days), lesson_scores=VALUES(lesson_scores), review_wrong_words=VALUES(review_wrong_words), peak_correct=VALUES(peak_correct), updated_at=VALUES(updated_at)',
      [
        userId, s.name, s.level, s.totalCorrect, s.totalQuestions, s.streak, s.lessonsDone,
        JSON.stringify(s.studyDays || []), JSON.stringify(s.lessonScores || {}), JSON.stringify(s.reviewWrongWords || {}), s.peakCorrect == null ? null : s.peakCorrect, s.updatedAt,
      ]
    );
  }
}

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString('hex');
}
function makeToken() {
  return crypto.randomBytes(24).toString('hex');
}

// Express 4 khong tu bat loi trong async handler — wrapper nho nay dam
// bao 1 loi DB bat ngo tra ve 500 gon gang thay vi treo request.
function asyncRoute(fn) {
  return (req, res, next) => Promise.resolve(fn(req, res, next)).catch(next);
}

const requireAuth = asyncRoute(async (req, res, next) => {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Chưa đăng nhập.' });
  const userId = await findUserIdBySession(token);
  if (!userId) return res.status(401).json({ error: 'Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại.' });
  const users = await loadUsers();
  const user = users.find((u) => u.id === userId);
  if (!user) return res.status(401).json({ error: 'Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại.' });
  req.user = user;
  req.sessionToken = token;
  next();
});

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email, level: user.level };
}

// Tra ve toan bo tien do da luu tren server cho 1 user — dung de dong bo
// lai xuong bat ky thiet bi nao dang nhap dung tai khoan (may tinh, dien
// thoai...), khong chi con so streak ma ca danh sach ngay hoc that va
// diem tung bai, de tai khoan dong nhat tren moi thiet bi.
async function userProgress(userId) {
  const scores = await loadScores();
  const sc = scores[userId];
  if (!sc) return { studyDays: [], lessonScores: {}, reviewWrongWords: {}, streak: 0, totalCorrect: 0, totalQuestions: 0, lessonsDone: 0 };
  return {
    studyDays: sc.studyDays || [],
    lessonScores: sc.lessonScores || {},
    reviewWrongWords: sc.reviewWrongWords || {},
    streak: sc.streak || 0,
    totalCorrect: sc.totalCorrect || 0,
    totalQuestions: sc.totalQuestions || 0,
    lessonsDone: sc.lessonsDone || 0,
  };
}

app.post('/api/auth/register', asyncRoute(async (req, res) => {
  const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  const password = typeof req.body?.password === 'string' ? req.body.password : '';
  const level = typeof req.body?.level === 'string' ? req.body.level : 'hsk1';
  if (!name || !email || !password || password.length < 4) {
    return res.status(400).json({ error: 'Thiếu họ tên, email hoặc mật khẩu (tối thiểu 4 ký tự).' });
  }
  const users = await loadUsers();
  if (users.some((u) => u.email === email)) {
    return res.status(409).json({ error: 'Email này đã được đăng ký.' });
  }
  const salt = crypto.randomBytes(16).toString('hex');
  const user = {
    id: crypto.randomUUID(),
    name,
    email,
    level,
    passwordSalt: salt,
    passwordHash: hashPassword(password, salt),
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  await saveUsers(users);
  const token = await createSession(user.id);
  res.json({ token, user: publicUser(user), progress: await userProgress(user.id) });
}));

app.post('/api/auth/login', asyncRoute(async (req, res) => {
  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  const password = typeof req.body?.password === 'string' ? req.body.password : '';
  if (!email || !password) return res.status(400).json({ error: 'Thiếu email hoặc mật khẩu.' });
  const users = await loadUsers();
  const user = users.find((u) => u.email === email);
  if (!user || hashPassword(password, user.passwordSalt) !== user.passwordHash) {
    return res.status(401).json({ error: 'Email hoặc mật khẩu không đúng.' });
  }
  const token = await createSession(user.id);
  res.json({ token, user: publicUser(user), progress: await userProgress(user.id) });
}));

app.post('/api/auth/logout', requireAuth, asyncRoute(async (req, res) => {
  await deleteSession(req.sessionToken);
  res.json({ ok: true });
}));

app.get('/api/auth/me', requireAuth, asyncRoute(async (req, res) => {
  res.json({ user: publicUser(req.user), progress: await userProgress(req.user.id) });
}));

// Hoc sinh gui len tong diem THAT (tinh san o client tu du lieu that da
// luu), server luu lai de xep hang VA de dong bo nguoc xuong bat ky
// thiet bi nao khac dang nhap cung tai khoan. studyDays va lessonScores
// duoc GOP (khong ghi de) voi du lieu da co tren server, vi 2 thiet bi
// co the co lich su khac nhau (vd hoc tren dien thoai hom qua, may tinh
// hom nay) — gop lai moi khong bi mat ngay hoc/diem da co.
app.post('/api/scores/sync', requireAuth, asyncRoute(async (req, res) => {
  const totalCorrect = Number(req.body?.totalCorrect) || 0;
  const totalQuestions = Number(req.body?.totalQuestions) || 0;
  const streak = Number(req.body?.streak) || 0;
  const lessonsDone = Number(req.body?.lessonsDone) || 0;
  const incomingDays = Array.isArray(req.body?.studyDays)
    ? req.body.studyDays.filter((d) => typeof d === 'string' && d.length === 10).slice(0, 3660)
    : [];
  const incomingLessonScores = req.body?.lessonScores && typeof req.body.lessonScores === 'object' && !Array.isArray(req.body.lessonScores)
    ? req.body.lessonScores
    : {};
  // reviewWrongWords: { "hsk3:1,2,3": ["词典", "腿", ...], ... } — moi nhom
  // bai la 1 khoa. Khac voi studyDays (chi cong don), tu sai co the duoc
  // XOA khoi mang khi hoc sinh tra loi dung lai, nen GHI DE theo tung khoa
  // nhom bai (nhu lessonScores) thay vi gop (union) tung tu — thiet bi vua
  // dong bo se thang cho dung nhom bai no vua sua, cac nhom khac giu nguyen.
  const incomingReviewWrongWords = {};
  if (req.body?.reviewWrongWords && typeof req.body.reviewWrongWords === 'object' && !Array.isArray(req.body.reviewWrongWords)) {
    Object.keys(req.body.reviewWrongWords).slice(0, 200).forEach((key) => {
      if (typeof key !== 'string' || key.length > 100) return;
      const val = req.body.reviewWrongWords[key];
      if (!Array.isArray(val)) return;
      incomingReviewWrongWords[key] = val.filter((w) => typeof w === 'string' && w.length <= 40).slice(0, 500);
    });
  }
  const scores = await loadScores();
  const hadRecord = !!scores[req.user.id];
  const existing = scores[req.user.id] || {};
  // Diem "hom nay" = so cau dung vuot qua MUC CAO NHAT tung dat (peakCorrect),
  // nen lam lai 1 bai cho diem tut roi lam lai cho diem len khong duoc cong 2 lan.
  // Lan dong bo dau tien cua tai khoan chi lay moc (tien do cu tu truoc khi dang
  // nhap khong tinh vao hom nay); moi lan chi nhan toi da 300 cau.
  const oldPeak = existing.peakCorrect == null ? (Number(existing.totalCorrect) || 0) : Number(existing.peakCorrect);
  const newPeak = Math.max(oldPeak, Math.max(0, Math.round(totalCorrect)));
  const gainedCorrect = Math.round(totalCorrect) - oldPeak;
  if (hadRecord && gainedCorrect > 0) {
    await addDailyPoints(req.user.id, vnDayKey(), { lessonCorrect: Math.min(gainedCorrect, 300) });
  }
  const mergedDays = Array.from(new Set((existing.studyDays || []).concat(incomingDays))).sort();
  const mergedLessonScores = Object.assign({}, existing.lessonScores || {}, incomingLessonScores);
  const mergedReviewWrongWords = Object.assign({}, existing.reviewWrongWords || {}, incomingReviewWrongWords);
  scores[req.user.id] = {
    name: req.user.name,
    level: req.user.level,
    totalCorrect: Math.max(0, Math.round(totalCorrect)),
    totalQuestions: Math.max(0, Math.round(totalQuestions)),
    streak: Math.max(0, Math.round(streak)),
    lessonsDone: Math.max(0, Math.round(lessonsDone)),
    studyDays: mergedDays,
    lessonScores: mergedLessonScores,
    reviewWrongWords: mergedReviewWrongWords,
    peakCorrect: newPeak,
    updatedAt: new Date().toISOString(),
  };
  await saveScores(scores);
  res.json({ ok: true, progress: await userProgress(req.user.id) });
}));

app.get('/api/leaderboard', asyncRoute(async (req, res) => {
  const scores = await loadScores();
  const rows = Object.keys(scores).map((userId) => scores[userId]);
  rows.sort((a, b) => b.totalCorrect - a.totalCorrect || b.streak - a.streak);
  const top = rows.slice(0, 50).map((row, i) => ({
    rank: i + 1,
    name: row.name,
    level: row.level,
    totalCorrect: row.totalCorrect,
    totalQuestions: row.totalQuestions,
    streak: row.streak,
  }));
  res.json({ leaderboard: top });
}));

// ══════════════════════════════════════════════════════════════════
// Bang vang hom nay (trang chu): vinh danh top 5 hoc sinh co nhieu cau tra
// loi dung nhat TRONG NGAY theo gio Viet Nam. Diem = cau dung khi hoc bai
// (phan tang them moi lan dong bo) + cau dung o luot thi thu dau tien.
// ══════════════════════════════════════════════════════════════════
const DAILY_POINTS_FILE = path.join(DATA_DIR, 'daily_points.json');
const VN_OFFSET_MS = 7 * 3600 * 1000;

function vnDayKey(ms) {
  return new Date((ms || Date.now()) + VN_OFFSET_MS).toISOString().slice(0, 10);
}
function secondsToVnMidnight() {
  const vnNow = Date.now() + VN_OFFSET_MS;
  const next = Math.floor(vnNow / 86400000 + 1) * 86400000;
  return Math.max(0, Math.round((next - vnNow) / 1000));
}

async function initDailyPointsTable() {
  if (!USE_DB) return;
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS daily_points (' +
      'user_id VARCHAR(36) NOT NULL, ' +
      'day CHAR(10) NOT NULL, ' +
      'lesson_correct INT NOT NULL DEFAULT 0, ' +
      'exam_correct INT NOT NULL DEFAULT 0, ' +
      'updated_ms BIGINT NOT NULL, ' +
      'PRIMARY KEY (user_id, day), ' +
      'INDEX idx_day (day), ' +
      'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
    ')'
  );
}

async function addDailyPoints(userId, day, add) {
  const lesson = Math.max(0, Math.round(add.lessonCorrect || 0));
  const exam = Math.max(0, Math.round(add.examCorrect || 0));
  if (!lesson && !exam) return;
  const now = Date.now();
  if (!USE_DB) {
    const all = readJsonFile(DAILY_POINTS_FILE) || {};
    const dayMap = all[day] || (all[day] = {});
    const rec = dayMap[userId] || (dayMap[userId] = { lessonCorrect: 0, examCorrect: 0, updatedMs: now });
    rec.lessonCorrect += lesson;
    rec.examCorrect += exam;
    rec.updatedMs = now;
    // chi giu 14 ngay gan nhat de file khong phinh ra
    Object.keys(all).sort().slice(0, -14).forEach((d) => { delete all[d]; });
    writeJsonFile(DAILY_POINTS_FILE, all);
    return;
  }
  await dbPool.query(
    'INSERT INTO daily_points (user_id, day, lesson_correct, exam_correct, updated_ms) VALUES (?,?,?,?,?) ' +
      'ON DUPLICATE KEY UPDATE lesson_correct = lesson_correct + VALUES(lesson_correct), ' +
      'exam_correct = exam_correct + VALUES(exam_correct), updated_ms = VALUES(updated_ms)',
    [userId, day, lesson, exam, now]
  );
}

async function loadDailyPoints(day) {
  if (!USE_DB) {
    const dayMap = (readJsonFile(DAILY_POINTS_FILE) || {})[day] || {};
    return Object.keys(dayMap).map((userId) => Object.assign({ userId }, dayMap[userId]));
  }
  const [rows] = await dbPool.query('SELECT * FROM daily_points WHERE day = ?', [day]);
  return rows.map((r) => ({ userId: r.user_id, lessonCorrect: r.lesson_correct, examCorrect: r.exam_correct, updatedMs: Number(r.updated_ms) }));
}

app.get('/api/leaderboard/today', asyncRoute(async (req, res) => {
  const day = vnDayKey();
  const meId = await optionalUserId(req);
  const [daily, users, scores] = await Promise.all([loadDailyPoints(day), loadUsers(), loadScores()]);
  const userById = {};
  users.forEach((u) => { userById[u.id] = u; });
  const board = daily
    .filter((d) => userById[d.userId])
    .map((d) => {
      const sc = scores[d.userId] || {};
      return {
        userId: d.userId,
        name: userById[d.userId].name,
        level: userById[d.userId].level,
        lessonCorrect: d.lessonCorrect,
        examCorrect: d.examCorrect,
        points: d.lessonCorrect + d.examCorrect,
        streak: sc.streak || 0,
        updatedMs: d.updatedMs,
      };
    })
    .filter((r) => r.points > 0)
    // bang diem thi chuoi ngay hoc dai hon dung tren, roi ai dat diem som hon
    .sort((a, b) => b.points - a.points || b.streak - a.streak || a.updatedMs - b.updatedMs);
  const toRow = (r, i) => ({
    rank: i + 1, name: r.name, level: r.level, points: r.points,
    lessonCorrect: r.lessonCorrect, examCorrect: r.examCorrect, streak: r.streak, isMe: r.userId === meId,
  });
  const meIdx = meId ? board.findIndex((r) => r.userId === meId) : -1;
  const fifth = board[4];
  res.json({
    date: day,
    resetInSec: secondsToVnMidnight(),
    count: board.length,
    top: board.slice(0, 5).map(toRow),
    me: meIdx >= 0 ? toRow(board[meIdx], meIdx) : null,
    // so diem con thieu de chen vao top 5 (neu minh dang dung ngoai top 5)
    toTop5: meIdx >= 5 && fifth ? fifth.points - board[meIdx].points + 1 : null,
  });
}));

// ══════════════════════════════════════════════════════════════════
// Bang xep hang Thi thu HSK. May chu tu cham bai (doc dap an tu chinh
// file de /exam/tests/<id>.js) va tu bam gio tu luc bat dau lam bai, nen
// hoc sinh khong the gui diem hay thoi gian gia len bang xep hang.
//
// Diem xep hang (toi da 1000) = diem bai thi x 800 + thuong thoi gian x 200,
// trong do thuong thoi gian = ti le diem x ti le thoi gian con thua. Nhan
// voi ti le diem de nop bai that nhanh ma lam sai thi gan nhu khong duoc
// thuong. Chi LUOT NOP DAU TIEN cua moi hoc sinh voi moi de duoc tinh xep
// hang: nop xong la thay dap an, lam lai se khong con cong bang.
// ══════════════════════════════════════════════════════════════════
const EXAM_ATTEMPTS_FILE = path.join(DATA_DIR, 'exam_attempts.json');
const EXAM_TESTS_DIR = path.join(PUBLIC_DIR, 'exam', 'tests');
const EXAM_ID_RE = /^[a-z0-9-]{1,40}$/;
const examDefCache = {};

function loadExamDef(examId) {
  if (typeof examId !== 'string' || !EXAM_ID_RE.test(examId)) return null;
  if (examDefCache[examId]) return examDefCache[examId];
  const file = path.join(EXAM_TESTS_DIR, examId + '.js');
  if (!fs.existsSync(file)) return null;
  const sandbox = { window: {} };
  try {
    vm.runInNewContext(fs.readFileSync(file, 'utf8'), sandbox, { timeout: 1000 });
  } catch (err) {
    return null;
  }
  const d = sandbox.window.EXAM_DATA;
  if (!d || !Array.isArray(d.sections) || !d.sections.length) return null;
  const sections = d.sections.map((sec) => {
    const answers = [];
    (sec.parts || []).forEach((part) => {
      const qs = part.groups ? [].concat(...part.groups.map((g) => g.questions || [])) : (part.questions || []);
      qs.forEach((q) => answers.push([String(q.n), q.answer]));
    });
    return { id: sec.id, name: sec.name, answers };
  });
  const def = {
    id: examId,
    level: examId.split('-')[0],
    title: d.title || examId,
    durationSec: Number(d.durationSec) || 0,
    maxScore: Number(d.maxScore) || 0,
    passScore: Number(d.passScore) || 0,
    sections,
    total: sections.reduce((a, s) => a + s.answers.length, 0),
  };
  examDefCache[examId] = def;
  return def;
}

function listExamDefs(level) {
  let files = [];
  try { files = fs.readdirSync(EXAM_TESTS_DIR); } catch (err) { return []; }
  return files
    .filter((f) => f.endsWith('.js'))
    .map((f) => loadExamDef(f.slice(0, -3)))
    .filter((def) => def && (!level || def.level === level))
    .sort((a, b) => a.id.localeCompare(b.id, 'en', { numeric: true }));
}

// Cung cach cham voi phong thi (exam.js): moi phan thi chia deu diem toi da.
function gradeExam(def, answers) {
  let correct = 0, score = 0;
  const perSection = def.maxScore / def.sections.length;
  def.sections.forEach((sec) => {
    let c = 0;
    sec.answers.forEach(([n, ans]) => { if (Object.prototype.hasOwnProperty.call(answers, n) && answers[n] === ans) c++; });
    correct += c;
    score += Math.round(sec.answers.length ? (c / sec.answers.length) * perSection : 0);
  });
  return { correct, total: def.total, score };
}

function examRankPoints(score, maxScore, usedSec, durationSec) {
  const acc = maxScore ? Math.max(0, Math.min(1, score / maxScore)) : 0;
  const timeLeft = durationSec ? Math.max(0, 1 - usedSec / durationSec) : 0;
  const base = Math.round(acc * 800);
  const bonus = Math.round(acc * timeLeft * 200);
  return { base, bonus, points: base + bonus };
}

// Chi nhan dap an dang {"12": "A"} / {"3": true}, bo moi thu khac.
function cleanExamAnswers(raw) {
  const out = {};
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) return out;
  Object.keys(raw).slice(0, 400).forEach((k) => {
    if (!/^\d{1,3}$/.test(k)) return;
    const v = raw[k];
    if (typeof v === 'boolean' || (typeof v === 'string' && v.length <= 4)) out[k] = v;
  });
  return out;
}

async function initExamAttemptsTable() {
  if (!USE_DB) return;
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS exam_attempts (' +
      'id VARCHAR(48) PRIMARY KEY, ' +
      'user_id VARCHAR(36) NOT NULL, ' +
      'exam_id VARCHAR(40) NOT NULL, ' +
      'level VARCHAR(16) NOT NULL, ' +
      'started_ms BIGINT NOT NULL, ' +
      'submitted_ms BIGINT NULL, ' +
      'used_sec INT NULL, ' +
      'correct INT NULL, ' +
      'total INT NULL, ' +
      'score INT NULL, ' +
      'max_score INT NULL, ' +
      'rank_points INT NULL, ' +
      'time_bonus INT NULL, ' +
      'is_ranked TINYINT(1) NOT NULL DEFAULT 0, ' +
      'auto_submit TINYINT(1) NOT NULL DEFAULT 0, ' +
      'INDEX idx_exam_ranked (exam_id, is_ranked), ' +
      'INDEX idx_level_ranked (level, is_ranked), ' +
      'INDEX idx_user_exam (user_id, exam_id), ' +
      'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
    ')'
  );
}

function attemptFromRow(r) {
  return {
    id: r.id, userId: r.user_id, examId: r.exam_id, level: r.level,
    startedMs: Number(r.started_ms), submittedMs: r.submitted_ms == null ? null : Number(r.submitted_ms),
    usedSec: r.used_sec, correct: r.correct, total: r.total, score: r.score, maxScore: r.max_score,
    rankPoints: r.rank_points, timeBonus: r.time_bonus, isRanked: !!r.is_ranked, autoSubmit: !!r.auto_submit,
  };
}

async function createExamAttempt(a) {
  if (!USE_DB) {
    const list = readJsonFile(EXAM_ATTEMPTS_FILE) || [];
    list.push(Object.assign({ submittedMs: null, isRanked: false }, a));
    writeJsonFile(EXAM_ATTEMPTS_FILE, list);
    return;
  }
  await dbPool.query(
    'INSERT INTO exam_attempts (id,user_id,exam_id,level,started_ms) VALUES (?,?,?,?,?)',
    [a.id, a.userId, a.examId, a.level, a.startedMs]
  );
}

async function getExamAttempt(id) {
  if (!USE_DB) return (readJsonFile(EXAM_ATTEMPTS_FILE) || []).find((a) => a.id === id) || null;
  const [rows] = await dbPool.query('SELECT * FROM exam_attempts WHERE id = ? LIMIT 1', [id]);
  return rows[0] ? attemptFromRow(rows[0]) : null;
}

async function getRankedExamAttempt(userId, examId) {
  if (!USE_DB) return (readJsonFile(EXAM_ATTEMPTS_FILE) || []).find((a) => a.userId === userId && a.examId === examId && a.isRanked) || null;
  const [rows] = await dbPool.query('SELECT * FROM exam_attempts WHERE user_id = ? AND exam_id = ? AND is_ranked = 1 LIMIT 1', [userId, examId]);
  return rows[0] ? attemptFromRow(rows[0]) : null;
}

// Ghi ket qua 1 lan duy nhat; tra ve false neu luot nay da nop truoc do.
async function finishExamAttempt(id, f) {
  if (!USE_DB) {
    const list = readJsonFile(EXAM_ATTEMPTS_FILE) || [];
    const a = list.find((x) => x.id === id);
    if (!a || a.submittedMs != null) return false;
    Object.assign(a, f);
    writeJsonFile(EXAM_ATTEMPTS_FILE, list);
    return true;
  }
  const [r] = await dbPool.query(
    'UPDATE exam_attempts SET submitted_ms=?, used_sec=?, correct=?, total=?, score=?, max_score=?, rank_points=?, time_bonus=?, is_ranked=?, auto_submit=? ' +
      'WHERE id = ? AND submitted_ms IS NULL',
    [f.submittedMs, f.usedSec, f.correct, f.total, f.score, f.maxScore, f.rankPoints, f.timeBonus, f.isRanked ? 1 : 0, f.autoSubmit ? 1 : 0, id]
  );
  return r.affectedRows === 1;
}

async function listRankedExamAttempts(filter) {
  let rows;
  if (!USE_DB) {
    rows = (readJsonFile(EXAM_ATTEMPTS_FILE) || []).filter((a) => a.isRanked &&
      (!filter.examId || a.examId === filter.examId) && (!filter.level || a.level === filter.level));
  } else {
    const where = ['is_ranked = 1'];
    const params = [];
    if (filter.examId) { where.push('exam_id = ?'); params.push(filter.examId); }
    if (filter.level) { where.push('level = ?'); params.push(filter.level); }
    const [r] = await dbPool.query('SELECT * FROM exam_attempts WHERE ' + where.join(' AND '), params);
    rows = r.map(attemptFromRow);
  }
  const users = await loadUsers();
  const nameById = {};
  users.forEach((u) => { nameById[u.id] = u.name; });
  return rows.filter((a) => nameById[a.userId]).map((a) => Object.assign({ name: nameById[a.userId] }, a));
}

// Bang theo 1 de: diem xep hang -> diem thi -> thoi gian ngan hon -> nop som hon
function sortExamRows(rows) {
  return rows.sort((a, b) =>
    b.rankPoints - a.rankPoints || b.score - a.score || a.usedSec - b.usedSec || a.submittedMs - b.submittedMs);
}

// Bang tong hop 1 cap do: cong diem xep hang cua moi de da thi.
function aggregateExamRows(rows) {
  const byUser = {};
  rows.forEach((a) => {
    const u = byUser[a.userId] || (byUser[a.userId] = { userId: a.userId, name: a.name, rankPoints: 0, exams: 0, score: 0, maxScore: 0, usedSec: 0, lastMs: 0 });
    u.rankPoints += a.rankPoints; u.exams += 1; u.score += a.score; u.maxScore += a.maxScore; u.usedSec += a.usedSec;
    u.lastMs = Math.max(u.lastMs, a.submittedMs);
  });
  return Object.values(byUser).sort((a, b) =>
    b.rankPoints - a.rankPoints || b.exams - a.exams || a.usedSec - b.usedSec || a.lastMs - b.lastMs);
}

async function optionalUserId(req) {
  const header = req.headers.authorization || '';
  if (!header.startsWith('Bearer ')) return null;
  try { return await findUserIdBySession(header.slice(7)); } catch (err) { return null; }
}

app.post('/api/exam/start', requireAuth, asyncRoute(async (req, res) => {
  const def = loadExamDef(req.body?.examId);
  if (!def) return res.status(404).json({ error: 'Không tìm thấy đề thi.' });
  const attempt = {
    id: crypto.randomBytes(18).toString('hex'),
    userId: req.user.id,
    examId: def.id,
    level: def.level,
    startedMs: Date.now(),
  };
  await createExamAttempt(attempt);
  const ranked = await getRankedExamAttempt(req.user.id, def.id);
  res.json({ attemptId: attempt.id, startedAt: attempt.startedMs, counts: !ranked });
}));

app.post('/api/exam/submit', requireAuth, asyncRoute(async (req, res) => {
  const attemptId = typeof req.body?.attemptId === 'string' ? req.body.attemptId.slice(0, 48) : '';
  const attempt = attemptId ? await getExamAttempt(attemptId) : null;
  if (!attempt || attempt.userId !== req.user.id) return res.status(404).json({ error: 'Không tìm thấy lượt thi.' });
  const def = loadExamDef(attempt.examId);
  if (!def) return res.status(404).json({ error: 'Không tìm thấy đề thi.' });

  if (attempt.submittedMs == null) {
    const now = Date.now();
    const usedSec = Math.max(0, Math.min(def.durationSec, Math.round((now - attempt.startedMs) / 1000)));
    const g = gradeExam(def, cleanExamAnswers(req.body?.answers));
    const rp = examRankPoints(g.score, def.maxScore, usedSec, def.durationSec);
    const already = await getRankedExamAttempt(req.user.id, def.id);
    const saved = await finishExamAttempt(attempt.id, {
      submittedMs: now, usedSec, correct: g.correct, total: g.total, score: g.score, maxScore: def.maxScore,
      rankPoints: rp.points, timeBonus: rp.bonus, isRanked: !already, autoSubmit: !!req.body?.auto,
    });
    // Chi luot thi dau tien moi cong vao Bang vang hom nay (lam lai da biet dap an)
    if (saved && !already) await addDailyPoints(req.user.id, vnDayKey(now), { examCorrect: g.correct });
  }

  const mine = await getExamAttempt(attempt.id);
  const rankedAttempt = await getRankedExamAttempt(req.user.id, def.id);
  const board = sortExamRows(await listRankedExamAttempts({ examId: def.id }));
  const pos = rankedAttempt ? board.findIndex((a) => a.id === rankedAttempt.id) + 1 : 0;
  res.json({
    ok: true,
    attempt: {
      score: mine.score, maxScore: mine.maxScore, correct: mine.correct, total: mine.total, usedSec: mine.usedSec,
      rankPoints: mine.rankPoints, timeBonus: mine.timeBonus, basePoints: mine.rankPoints - mine.timeBonus, isRanked: mine.isRanked,
    },
    ranked: rankedAttempt ? { rankPoints: rankedAttempt.rankPoints, score: rankedAttempt.score, usedSec: rankedAttempt.usedSec, rank: pos, of: board.length } : null,
  });
}));

app.get('/api/exam/leaderboard', asyncRoute(async (req, res) => {
  const meId = await optionalUserId(req);
  const examId = typeof req.query.exam === 'string' ? req.query.exam : '';
  if (examId) {
    const def = loadExamDef(examId);
    if (!def) return res.status(404).json({ error: 'Không tìm thấy đề thi.' });
    const board = sortExamRows(await listRankedExamAttempts({ examId: def.id }));
    const toRow = (a, i) => ({
      rank: i + 1, name: a.name, isMe: a.userId === meId, rankPoints: a.rankPoints, timeBonus: a.timeBonus,
      score: a.score, maxScore: a.maxScore, correct: a.correct, total: a.total, usedSec: a.usedSec,
      pass: a.score >= def.passScore, submittedAt: a.submittedMs,
    });
    const meIdx = meId ? board.findIndex((a) => a.userId === meId) : -1;
    return res.json({
      mode: 'exam', exam: { id: def.id, title: def.title, durationSec: def.durationSec, maxScore: def.maxScore, passScore: def.passScore },
      count: board.length, rows: board.slice(0, 50).map(toRow), me: meIdx >= 0 ? toRow(board[meIdx], meIdx) : null,
      exams: listExamDefs(def.level).map((d) => ({ id: d.id, title: d.title })),
    });
  }
  const level = typeof req.query.level === 'string' && EXAM_ID_RE.test(req.query.level) ? req.query.level : 'hsk2';
  const exams = listExamDefs(level);
  const board = aggregateExamRows(await listRankedExamAttempts({ level }));
  const toRow = (u, i) => ({
    rank: i + 1, name: u.name, isMe: u.userId === meId, rankPoints: u.rankPoints, exams: u.exams,
    score: u.score, maxScore: u.maxScore, usedSec: u.usedSec,
  });
  const meIdx = meId ? board.findIndex((u) => u.userId === meId) : -1;
  res.json({
    mode: 'level', level, examCount: exams.length, count: board.length,
    rows: board.slice(0, 50).map(toRow), me: meIdx >= 0 ? toRow(board[meIdx], meIdx) : null,
    exams: exams.map((d) => ({ id: d.id, title: d.title })),
  });
}));

// ══════════════════════════════════════════════════════════════════
// Tro ly AI + Tin nhan giua hoc sinh + trang thai truc tuyen.
// Hai nut noi o goc phai moi trang (tru phong thi HSK) goi cac API nay.
//
// Tro ly AI dung LAN LUOT nhieu nha cung cap, bat nha nao co khoa trong bien moi truong:
//   GROQ_API_KEY      -> Groq, mo hinh Qwen (goi mien phi co gioi han theo ngay)
//   GEMINI_API_KEY    -> Google Gemini (goi mien phi co gioi han)
//   ANTHROPIC_API_KEY -> Claude (tra phi, tuy chon)
// Thu tu mac dinh groq -> gemini -> anthropic, doi bang AI_PROVIDERS="gemini,groq".
// Nha dau het luot / loi truoc khi kip tra chu nao thi tu chuyen sang nha tiep theo.
// ══════════════════════════════════════════════════════════════════
const AI_DAILY_LIMIT_GUEST = 3;
const AI_DAILY_LIMIT_USER = 10;
const AI_FIRST_TOKEN_TIMEOUT_MS = 25000;
const aiUsage = new Map(); // "day|key" -> so cau da hoi (bo nho, tu reset moi ngay)

const GROQ_API_KEY = process.env.GROQ_API_KEY || '';
const GROQ_MODEL = process.env.GROQ_MODEL || 'qwen/qwen3.8-27b';
const GROQ_BASE_URL = (process.env.GROQ_BASE_URL || 'https://api.groq.com/openai/v1').replace(/\/+$/, '');
const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
const GEMINI_MODEL = process.env.GEMINI_MODEL || 'gemini-3.8-flash';
const GEMINI_BASE_URL = (process.env.GEMINI_BASE_URL || 'https://generativelanguage.googleapis.com/v1beta').replace(/\/+$/, '');

// Nap thu vien Claude trong try: thieu goi thi chi bo qua nha cung cap nay, khong sap website.
let Anthropic = null;
try { Anthropic = require('@anthropic-ai/sdk'); } catch (err) { console.error('Khong nap duoc @anthropic-ai/sdk, bo qua Claude:', err.message); }
const ANTHROPIC_API_KEY = process.env.ANTHROPIC_API_KEY || '';
const anthropic = Anthropic && ANTHROPIC_API_KEY ? new Anthropic({ apiKey: ANTHROPIC_API_KEY }) : null;
const ANTHROPIC_MODEL = 'claude-opus-5';

const AI_SYSTEM_PROMPT = [
  'Bạn là "Tiểu Hán", trợ lý học tiếng Trung của website Hi Hán 喜汉 dành cho học sinh Việt Nam (chủ yếu HSK 1-4 và YCT).',
  'Luôn trả lời bằng tiếng Việt. Khi đưa ra từ hoặc câu tiếng Trung, viết chữ Hán giản thể kèm pinyin có dấu thanh và nghĩa tiếng Việt.',
  'Việc bạn làm: tra cứu từ vựng và chữ Hán (nghĩa, bộ thủ, cách dùng, ví dụ), giải thích ngữ pháp ngắn gọn với ví dụ, dịch Việt-Trung và Trung-Việt tự nhiên, luyện hội thoại đơn giản (bạn đóng một vai, mỗi lượt chỉ vài câu, sửa lỗi nhẹ nhàng).',
  'Chọn từ và cấu trúc vừa trình độ người hỏi; nếu không rõ trình độ thì dùng từ HSK 1-3.',
  'Trả lời gọn, dễ đọc trên điện thoại: đoạn ngắn, gạch đầu dòng khi liệt kê, dùng **đậm** cho từ khoá. Không dùng bảng.',
  'Nếu câu hỏi không liên quan tới việc học tiếng Trung hoặc văn hoá Trung Quốc, nhẹ nhàng từ chối và gợi ý một câu hỏi về tiếng Trung.',
  'Người dùng là học sinh, có thể là trẻ vị thành niên: giữ nội dung lành mạnh, không hỏi thông tin cá nhân.',
].join('\n');
const AI_REFUSAL_TEXT = 'Xin lỗi, mình không thể trả lời câu này. Bạn thử hỏi một câu khác về tiếng Trung nhé.';
const AI_TRUNCATED_TEXT = '\n\n(Câu trả lời dài quá nên bị cắt bớt, bạn hỏi tiếp phần còn lại nhé.)';

class AiProviderError extends Error {
  constructor(provider, status, detail) {
    super(provider + ' ' + status + ': ' + String(detail || '').slice(0, 300));
    this.provider = provider;
    this.status = status;
  }
}

// Doc tung dong "data: ..." cua luong Server-Sent Events
async function* sseData(body) {
  const decoder = new TextDecoder();
  let buf = '';
  for await (const chunk of body) {
    buf += decoder.decode(chunk, { stream: true });
    let nl;
    while ((nl = buf.indexOf('\n')) !== -1) {
      const line = buf.slice(0, nl).replace(/\r$/, '');
      buf = buf.slice(nl + 1);
      if (line.startsWith('data:')) yield line.slice(5).trim();
    }
  }
  buf += decoder.decode();
  if (buf.startsWith('data:')) yield buf.slice(5).trim();
}

async function openStream(provider, url, init, signal) {
  let res;
  try {
    res = await fetch(url, Object.assign({}, init, { signal }));
  } catch (err) {
    throw new AiProviderError(provider, 0, err.message);
  }
  if (!res.ok) {
    const text = await res.text().catch(() => '');
    throw new AiProviderError(provider, res.status, text);
  }
  return res;
}

// Groq (API kieu OpenAI). Tai lieu Groq khuyen khong dung system prompt voi Qwen
// nen gop huong dan vao tin nhan dau; tat suy nghi (reasoning_effort none) de
// khong ton token cua goi mien phi.
async function* streamGroq(messages, signal) {
  const recent = messages.slice(-6);
  while (recent.length && recent[0].role !== 'user') recent.shift();
  const msgs = recent.map((m, i) => ({
    role: m.role,
    content: i === 0 ? AI_SYSTEM_PROMPT + '\n\n---\n\nCâu hỏi của học sinh:\n' + m.content : m.content,
  }));
  const res = await openStream('groq', GROQ_BASE_URL + '/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + GROQ_API_KEY },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: msgs,
      stream: true,
      temperature: 0.6,
      max_completion_tokens: 2048,
      reasoning_effort: 'none',
    }),
  }, signal);
  for await (const data of sseData(res.body)) {
    if (data === '[DONE]') return;
    let j;
    try { j = JSON.parse(data); } catch (e) { continue; }
    if (j.error) throw new AiProviderError('groq', 500, j.error.message || JSON.stringify(j.error));
    const choice = j.choices && j.choices[0];
    const text = choice && choice.delta && choice.delta.content;
    if (text) yield text;
    if (choice && choice.finish_reason === 'length') yield AI_TRUNCATED_TEXT;
  }
}

// Google Gemini qua generateContent (Google xac nhan API nay van duoc ho tro day du).
async function* streamGemini(messages, signal) {
  const url = GEMINI_BASE_URL + '/models/' + encodeURIComponent(GEMINI_MODEL) + ':streamGenerateContent?alt=sse';
  const res = await openStream('gemini', url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': GEMINI_API_KEY },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: AI_SYSTEM_PROMPT }] },
      contents: messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
      // du cho ca phan suy nghi noi bo cua mo hinh, tranh cau tra loi bi cat cut
      generationConfig: { maxOutputTokens: 8192, temperature: 0.7 },
    }),
  }, signal);
  let yielded = false;
  for await (const data of sseData(res.body)) {
    let j;
    try { j = JSON.parse(data); } catch (e) { continue; }
    if (j.error) throw new AiProviderError('gemini', j.error.code || 500, j.error.message);
    if (j.promptFeedback && j.promptFeedback.blockReason) { yield AI_REFUSAL_TEXT; return; }
    const cand = j.candidates && j.candidates[0];
    if (!cand) continue;
    const parts = (cand.content && cand.content.parts) || [];
    for (const p of parts) {
      if (p && typeof p.text === 'string' && p.text && !p.thought) { yielded = true; yield p.text; }
    }
    if (cand.finishReason === 'MAX_TOKENS') yield AI_TRUNCATED_TEXT;
    else if (!yielded && ['SAFETY', 'PROHIBITED_CONTENT', 'BLOCKLIST', 'SPII', 'RECITATION'].indexOf(cand.finishReason) !== -1) {
      yield AI_REFUSAL_TEXT;
      return;
    }
  }
}

// Claude qua thu vien chinh thuc @anthropic-ai/sdk (tuy chon, tra phi).
async function* streamAnthropic(messages, signal) {
  const stream = anthropic.beta.messages.stream({
    model: ANTHROPIC_MODEL,
    max_tokens: 16000,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'low' },
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system: AI_SYSTEM_PROMPT + '\nLatency-sensitive; begin your visible answer immediately.',
    messages,
  });
  const onAbort = () => stream.abort();
  signal.addEventListener('abort', onAbort);
  try {
    for await (const event of stream) {
      if (event.type === 'content_block_delta' && event.delta.type === 'text_delta') yield event.delta.text;
    }
    const final = await stream.finalMessage();
    if (final.stop_reason === 'refusal') yield AI_REFUSAL_TEXT;
    else if (final.stop_reason === 'max_tokens') yield AI_TRUNCATED_TEXT;
  } catch (err) {
    if (Anthropic && err instanceof Anthropic.APIError) throw new AiProviderError('anthropic', err.status || 500, err.message);
    throw new AiProviderError('anthropic', 0, err && err.message);
  } finally {
    signal.removeEventListener('abort', onAbort);
  }
}

const AI_PROVIDER_DEFS = {
  groq: { enabled: () => !!GROQ_API_KEY, stream: streamGroq },
  gemini: { enabled: () => !!GEMINI_API_KEY, stream: streamGemini },
  anthropic: { enabled: () => !!anthropic, stream: streamAnthropic },
};
function aiProviders() {
  const order = String(process.env.AI_PROVIDERS || 'groq,gemini,anthropic').split(',').map((s) => s.trim().toLowerCase());
  return order.filter((name, i) => AI_PROVIDER_DEFS[name] && order.indexOf(name) === i && AI_PROVIDER_DEFS[name].enabled())
    .map((name) => ({ name, stream: AI_PROVIDER_DEFS[name].stream }));
}

function clientIp(req) {
  // lay dia chi do proxy cua hosting them vao CUOI danh sach (phan dau do trinh duyet tu gui, gia duoc)
  const fwd = String(req.headers['x-forwarded-for'] || '').split(',').pop().trim();
  return fwd || req.socket.remoteAddress || 'unknown';
}

async function aiQuotaFor(req) {
  const userId = await optionalUserId(req);
  const key = userId ? 'u:' + userId : 'ip:' + clientIp(req);
  const limit = userId ? AI_DAILY_LIMIT_USER : AI_DAILY_LIMIT_GUEST;
  const mapKey = vnDayKey() + '|' + key;
  const used = aiUsage.get(mapKey) || 0;
  return { mapKey, limit, used, remaining: Math.max(0, limit - used), loggedIn: !!userId };
}

app.get('/api/ai/quota', asyncRoute(async (req, res) => {
  const q = await aiQuotaFor(req);
  res.json({ enabled: aiProviders().length > 0, limit: q.limit, remaining: q.remaining, loggedIn: q.loggedIn });
}));

app.post('/api/ai/chat', asyncRoute(async (req, res) => {
  const providers = aiProviders();
  if (!providers.length) return res.status(503).json({ error: 'Trợ lý AI chưa được bật trên máy chủ.' });
  const raw = Array.isArray(req.body?.messages) ? req.body.messages.slice(-12) : [];
  const messages = raw
    .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string' && m.content.trim())
    .map((m) => ({ role: m.role, content: m.content.slice(0, 2000) }));
  while (messages.length && messages[0].role !== 'user') messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== 'user') {
    return res.status(400).json({ error: 'Hãy nhập câu hỏi.' });
  }
  const q = await aiQuotaFor(req);
  if (q.remaining <= 0) {
    return res.status(429).json({
      error: q.loggedIn
        ? 'Hôm nay bạn đã dùng hết ' + q.limit + ' câu hỏi. Mai quay lại nhé!'
        : 'Bạn đã dùng hết ' + q.limit + ' câu hỏi miễn phí hôm nay. Đăng nhập để được hỏi ' + AI_DAILY_LIMIT_USER + ' câu mỗi ngày.',
      remaining: 0, limit: q.limit,
    });
  }
  // Tru luot truoc de nhieu request song song khong vuot han muc; loi thi hoan lai.
  aiUsage.set(q.mapKey, q.used + 1);
  if (aiUsage.size > 5000) {
    const today = vnDayKey() + '|';
    Array.from(aiUsage.keys()).forEach((k) => { if (!k.startsWith(today)) aiUsage.delete(k); });
  }
  const refund = () => aiUsage.set(q.mapKey, Math.max(0, (aiUsage.get(q.mapKey) || 1) - 1));

  res.status(200);
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  // no-transform: middleware compression khong gom lai, chu hien dan tren man hinh
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  res.setHeader('X-AI-Remaining', String(q.remaining - 1));
  res.setHeader('X-AI-Limit', String(q.limit));

  let clientGone = false;
  let current = null;
  res.on('close', () => {
    if (res.writableFinished) return;
    clientGone = true;
    if (current) current.abort();
  });

  let wroteText = false;
  let lastErr = null;
  for (const p of providers) {
    if (clientGone) break;
    current = new AbortController();
    const timer = setTimeout(() => current.abort(), AI_FIRST_TOKEN_TIMEOUT_MS);
    try {
      for await (const text of p.stream(messages, current.signal)) {
        clearTimeout(timer);
        if (clientGone) break;
        wroteText = true;
        res.write(text);
      }
      clearTimeout(timer);
      if (!wroteText && !clientGone) throw new AiProviderError(p.name, 502, 'empty response');
      lastErr = null;
      break;
    } catch (err) {
      clearTimeout(timer);
      if (clientGone) break;
      lastErr = err;
      console.error('Tro ly AI: ' + p.name + ' loi', err.status != null ? err.status : '', err.message);
      // da tra mot phan cau tra loi thi khong ghep them cau cua nha khac
      if (wroteText) break;
    }
  }

  if (!clientGone && lastErr) {
    if (!wroteText) refund();
    let msg = 'Trợ lý AI đang bận, bạn thử lại sau ít phút nhé.';
    if (lastErr.status === 429) msg = 'Trợ lý AI đã dùng hết lượt miễn phí hoặc đang quá tải, bạn thử lại sau nhé.';
    else if (lastErr.status === 401 || lastErr.status === 403) msg = 'Trợ lý AI chưa được cấu hình đúng trên máy chủ.';
    res.write((wroteText ? '\n\n' : '') + '⚠️ ' + msg);
  }
  res.end();
}));

// ---------------- Trang thai truc tuyen ----------------
const presence = new Map(); // userId -> lastSeenMs
const ONLINE_WINDOW_MS = 150 * 1000;
function isOnline(userId) { return Date.now() - (presence.get(userId) || 0) < ONLINE_WINDOW_MS; }

app.post('/api/presence', requireAuth, (req, res) => {
  presence.set(req.user.id, Date.now());
  res.json({ ok: true });
});

// ---------------- Tin nhan ----------------
const CHAT_FILE = path.join(DATA_DIR, 'chat.json');
const CHAT_BODY_MAX = 1000;
const chatSendLog = new Map(); // userId -> [ms...] de gioi han toc do gui

async function initChatTables() {
  if (!USE_DB) return;
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS chat_messages (' +
      'id BIGINT AUTO_INCREMENT PRIMARY KEY, ' +
      'from_id VARCHAR(36) NOT NULL, ' +
      'to_id VARCHAR(36) NOT NULL, ' +
      'body TEXT NOT NULL, ' +
      'created_ms BIGINT NOT NULL, ' +
      'read_ms BIGINT NULL, ' +
      'INDEX idx_pair (from_id, to_id, created_ms), ' +
      'INDEX idx_inbox (to_id, read_ms), ' +
      'FOREIGN KEY (from_id) REFERENCES users(id) ON DELETE CASCADE, ' +
      'FOREIGN KEY (to_id) REFERENCES users(id) ON DELETE CASCADE' +
    ')'
  );
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS chat_contacts (' +
      'user_id VARCHAR(36) NOT NULL, ' +
      'peer_id VARCHAR(36) NOT NULL, ' +
      "status VARCHAR(16) NOT NULL, " + // accepted | blocked
      'updated_ms BIGINT NOT NULL, ' +
      'PRIMARY KEY (user_id, peer_id), ' +
      'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE, ' +
      'FOREIGN KEY (peer_id) REFERENCES users(id) ON DELETE CASCADE' +
    ')'
  );
}

function readChatFile() {
  const d = readJsonFile(CHAT_FILE) || {};
  return { seq: d.seq || 0, messages: d.messages || [], contacts: d.contacts || [] };
}

// Moi tin nhan va trang thai lien quan toi 1 hoc sinh
async function chatStateFor(userId) {
  if (!USE_DB) {
    const d = readChatFile();
    return {
      messages: d.messages.filter((m) => m.fromId === userId || m.toId === userId),
      contacts: d.contacts.filter((c) => c.userId === userId || c.peerId === userId),
    };
  }
  const [msgs] = await dbPool.query(
    'SELECT id, from_id, to_id, body, created_ms, read_ms FROM chat_messages WHERE from_id = ? OR to_id = ? ORDER BY id',
    [userId, userId]
  );
  const [cts] = await dbPool.query('SELECT user_id, peer_id, status FROM chat_contacts WHERE user_id = ? OR peer_id = ?', [userId, userId]);
  return {
    messages: msgs.map((m) => ({ id: Number(m.id), fromId: m.from_id, toId: m.to_id, body: m.body, createdMs: Number(m.created_ms), readMs: m.read_ms == null ? null : Number(m.read_ms) })),
    contacts: cts.map((c) => ({ userId: c.user_id, peerId: c.peer_id, status: c.status })),
  };
}

async function setContact(userId, peerId, status) {
  if (!USE_DB) {
    const d = readChatFile();
    d.contacts = d.contacts.filter((c) => !(c.userId === userId && c.peerId === peerId));
    if (status) d.contacts.push({ userId, peerId, status, updatedMs: Date.now() });
    writeJsonFile(CHAT_FILE, d);
    return;
  }
  if (!status) {
    await dbPool.query('DELETE FROM chat_contacts WHERE user_id = ? AND peer_id = ?', [userId, peerId]);
    return;
  }
  await dbPool.query(
    'INSERT INTO chat_contacts (user_id, peer_id, status, updated_ms) VALUES (?,?,?,?) ON DUPLICATE KEY UPDATE status = VALUES(status), updated_ms = VALUES(updated_ms)',
    [userId, peerId, status, Date.now()]
  );
}

// Quan he giua "toi" va 1 nguoi: accepted (da ket noi) | request (ho gui loi moi) |
// pending (toi dang cho ho chap nhan) | blocked (toi da chan) | none
function relation(state, me, peer) {
  const mine = state.contacts.find((c) => c.userId === me && c.peerId === peer);
  const theirs = state.contacts.find((c) => c.userId === peer && c.peerId === me);
  if (mine && mine.status === 'blocked') return 'blocked';
  const iSent = state.messages.some((m) => m.fromId === me && m.toId === peer);
  const theySent = state.messages.some((m) => m.fromId === peer && m.toId === me);
  const iAccepted = (mine && mine.status === 'accepted') || iSent;
  const theyAccepted = (theirs && theirs.status === 'accepted') || theySent;
  if (iAccepted && theyAccepted) return 'accepted';
  if (theySent && !iAccepted) return 'request';
  if (iSent && !theyAccepted) return 'pending';
  return 'none';
}

function isBlockedBy(state, blocker, other) {
  return state.contacts.some((c) => c.userId === blocker && c.peerId === other && c.status === 'blocked');
}

// Bo dau tieng Viet de tim 'tran duc minh' van ra 'Trần Đức Minh'
function foldVi(s) {
  return String(s || '').trim().toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/đ/g, 'd');
}

function publicPeer(u) {
  return { id: u.id, name: u.name, level: u.level, online: isOnline(u.id) };
}

async function usersById() {
  const users = await loadUsers();
  const map = {};
  users.forEach((u) => { map[u.id] = u; });
  return { users, map };
}

app.get('/api/chat/online', requireAuth, asyncRoute(async (req, res) => {
  presence.set(req.user.id, Date.now());
  const [{ map }, state] = await Promise.all([usersById(), chatStateFor(req.user.id)]);
  const online = [];
  presence.forEach((seen, uid) => {
    if (uid === req.user.id || !map[uid] || Date.now() - seen >= ONLINE_WINDOW_MS) return;
    if (isBlockedBy(state, req.user.id, uid) || isBlockedBy(state, uid, req.user.id)) return;
    online.push({ user: publicPeer(map[uid]), seen });
  });
  online.sort((a, b) => b.seen - a.seen);
  res.json({ users: online.slice(0, 30).map((o) => o.user), count: online.length });
}));

app.get('/api/chat/users', requireAuth, asyncRoute(async (req, res) => {
  const q = foldVi(req.query.q);
  if (q.length < 2) return res.json({ users: [] });
  const [{ users }, state] = await Promise.all([usersById(), chatStateFor(req.user.id)]);
  const found = users
    .filter((u) => u.id !== req.user.id && !isBlockedBy(state, u.id, req.user.id))
    .filter((u) => foldVi(u.name).includes(q))
    .slice(0, 20)
    .map(publicPeer);
  res.json({ users: found });
}));

app.get('/api/chat/conversations', requireAuth, asyncRoute(async (req, res) => {
  const me = req.user.id;
  presence.set(me, Date.now());
  const [{ map }, state] = await Promise.all([usersById(), chatStateFor(me)]);
  const peers = new Set();
  state.messages.forEach((m) => peers.add(m.fromId === me ? m.toId : m.fromId));
  state.contacts.forEach((c) => { if (c.userId === me) peers.add(c.peerId); });
  const conversations = [];
  const blocked = [];
  peers.forEach((pid) => {
    const u = map[pid];
    if (!u) return;
    const rel = relation(state, me, pid);
    if (rel === 'blocked') { blocked.push(publicPeer(u)); return; }
    const thread = state.messages.filter((m) => (m.fromId === me && m.toId === pid) || (m.fromId === pid && m.toId === me));
    if (!thread.length) return;
    const last = thread[thread.length - 1];
    conversations.push({
      peer: publicPeer(u),
      status: rel,
      last: { body: last.body.slice(0, 120), mine: last.fromId === me, at: last.createdMs },
      unread: thread.filter((m) => m.toId === me && m.readMs == null).length,
    });
  });
  conversations.sort((a, b) => b.last.at - a.last.at);
  res.json({ conversations, blocked, unreadTotal: conversations.reduce((a, c) => a + c.unread, 0) });
}));

app.get('/api/chat/messages', requireAuth, asyncRoute(async (req, res) => {
  const me = req.user.id;
  const peerId = String(req.query.with || '');
  const [{ map }, state] = await Promise.all([usersById(), chatStateFor(me)]);
  if (!map[peerId] || peerId === me) return res.status(404).json({ error: 'Không tìm thấy người dùng.' });
  const rel = relation(state, me, peerId);
  const thread = state.messages
    .filter((m) => (m.fromId === me && m.toId === peerId) || (m.fromId === peerId && m.toId === me))
    .slice(-100);
  // Mo cuoc tro chuyen = da doc tin nhan cua nguoi kia gui cho minh
  const unreadIds = thread.filter((m) => m.toId === me && m.readMs == null).map((m) => m.id);
  if (unreadIds.length) {
    const now = Date.now();
    if (!USE_DB) {
      const d = readChatFile();
      d.messages.forEach((m) => { if (unreadIds.indexOf(m.id) !== -1) m.readMs = now; });
      writeJsonFile(CHAT_FILE, d);
    } else {
      await dbPool.query('UPDATE chat_messages SET read_ms = ? WHERE to_id = ? AND from_id = ? AND read_ms IS NULL', [now, me, peerId]);
    }
  }
  res.json({
    peer: publicPeer(map[peerId]),
    status: rel,
    blockedMe: isBlockedBy(state, peerId, me),
    messages: thread.map((m) => ({ id: m.id, mine: m.fromId === me, body: m.body, at: m.createdMs, read: m.readMs != null })),
  });
}));

app.post('/api/chat/send', requireAuth, asyncRoute(async (req, res) => {
  const me = req.user.id;
  const peerId = String(req.body?.to || '');
  const body = typeof req.body?.body === 'string' ? req.body.body.trim() : '';
  if (!body) return res.status(400).json({ error: 'Tin nhắn trống.' });
  if (body.length > CHAT_BODY_MAX) return res.status(400).json({ error: 'Tin nhắn tối đa ' + CHAT_BODY_MAX + ' ký tự.' });
  const now = Date.now();
  const recent = (chatSendLog.get(me) || []).filter((t) => now - t < 60000);
  if (recent.length >= 20) return res.status(429).json({ error: 'Bạn gửi nhanh quá, đợi một chút nhé.' });
  const [{ map }, state] = await Promise.all([usersById(), chatStateFor(me)]);
  if (!map[peerId] || peerId === me) return res.status(404).json({ error: 'Không tìm thấy người dùng.' });
  if (isBlockedBy(state, me, peerId)) return res.status(403).json({ error: 'Bạn đã chặn người này. Bỏ chặn để nhắn tin.' });
  if (isBlockedBy(state, peerId, me)) return res.status(403).json({ error: 'Không thể gửi tin nhắn cho người này.' });
  const rel = relation(state, me, peerId);
  // Chua ket noi: chi duoc gui 1 tin loi moi, doi nguoi kia chap nhan moi nhan tiep
  if (rel === 'pending') {
    return res.status(403).json({ error: 'Đã gửi lời mời. Đợi bạn ấy chấp nhận rồi mới nhắn tiếp được nhé.' });
  }
  recent.push(now);
  chatSendLog.set(me, recent);
  if (!USE_DB) {
    const d = readChatFile();
    d.seq += 1;
    d.messages.push({ id: d.seq, fromId: me, toId: peerId, body, createdMs: now, readMs: null });
    writeJsonFile(CHAT_FILE, d);
  } else {
    await dbPool.query('INSERT INTO chat_messages (from_id, to_id, body, created_ms) VALUES (?,?,?,?)', [me, peerId, body, now]);
  }
  // Tra loi mot loi moi = chap nhan
  if (rel === 'request') await setContact(me, peerId, 'accepted');
  presence.set(me, now);
  res.json({ ok: true, status: rel === 'request' || rel === 'accepted' ? 'accepted' : 'pending' });
}));

app.post('/api/chat/action', requireAuth, asyncRoute(async (req, res) => {
  const me = req.user.id;
  const peerId = String(req.body?.peer || '');
  const action = String(req.body?.action || '');
  const { map } = await usersById();
  if (!map[peerId] || peerId === me) return res.status(404).json({ error: 'Không tìm thấy người dùng.' });
  if (action === 'accept') {
    await setContact(me, peerId, 'accepted');
  } else if (action === 'block') {
    await setContact(me, peerId, 'blocked');
  } else if (action === 'unblock') {
    await setContact(me, peerId, null);
  } else if (action === 'decline') {
    // Tu choi loi moi: xoa tin nhan nguoi do da gui cho minh (chua ket noi)
    if (!USE_DB) {
      const d = readChatFile();
      d.messages = d.messages.filter((m) => !(m.fromId === peerId && m.toId === me));
      writeJsonFile(CHAT_FILE, d);
    } else {
      await dbPool.query('DELETE FROM chat_messages WHERE from_id = ? AND to_id = ?', [peerId, me]);
    }
  } else {
    return res.status(400).json({ error: 'Thao tác không hợp lệ.' });
  }
  res.json({ ok: true });
}));

// ══════════════════════════════════════════════════════════════════
// Thong ke truy cap + thoi gian hoc (Analytics) — luu vao file JSON
// tren server, khong dung dich vu ngoai. Chi xem duoc qua /admin,
// yeu cau mat khau quan tri (bien moi truong ADMIN_PASSWORD).
// ══════════════════════════════════════════════════════════════════
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || '';
const VISITS_FILE = path.join(DATA_DIR, 'visits.json');
const STUDYTIME_FILE = path.join(DATA_DIR, 'studytime.json');

function loadVisits() {
  return readJsonFile(VISITS_FILE) || { visitors: {}, dailyPageviews: {} };
}
function saveVisits(v) {
  writeJsonFile(VISITS_FILE, v);
}
function loadStudyTime() {
  return readJsonFile(STUDYTIME_FILE) || {};
}
function saveStudyTime(s) {
  writeJsonFile(STUDYTIME_FILE, s);
}
function todayKey() {
  return new Date().toISOString().slice(0, 10);
}

app.post('/api/track/visit', (req, res) => {
  const visitorId = typeof req.body?.visitorId === 'string' ? req.body.visitorId.slice(0, 64) : '';
  if (!visitorId) return res.status(400).json({ error: 'Thiếu visitorId.' });
  const visits = loadVisits();
  const now = new Date().toISOString();
  const day = todayKey();
  if (!visits.visitors[visitorId]) {
    visits.visitors[visitorId] = { firstSeen: now, lastSeen: now, visitCount: 1 };
  } else {
    visits.visitors[visitorId].lastSeen = now;
    visits.visitors[visitorId].visitCount++;
  }
  visits.dailyPageviews[day] = (visits.dailyPageviews[day] || 0) + 1;
  saveVisits(visits);
  res.json({ ok: true });
});

app.post('/api/track/heartbeat', (req, res) => {
  const visitorId = typeof req.body?.visitorId === 'string' ? req.body.visitorId.slice(0, 64) : '';
  const userId = typeof req.body?.userId === 'string' ? req.body.userId.slice(0, 64) : null;
  const seconds = Math.min(120, Math.max(0, Number(req.body?.seconds) || 0));
  if (!visitorId || !seconds) return res.status(400).json({ error: 'Thiếu visitorId hoặc seconds.' });
  const key = userId ? 'u:' + userId : 'v:' + visitorId;
  const studyTime = loadStudyTime();
  const now = new Date().toISOString();
  const day = todayKey();
  const minutes = seconds / 60;
  if (!studyTime[key]) {
    studyTime[key] = { userId: userId, visitorId: visitorId, totalMinutes: 0, lastActive: now, daily: {} };
  }
  const entry = studyTime[key];
  entry.userId = userId || entry.userId;
  entry.visitorId = visitorId;
  entry.totalMinutes += minutes;
  entry.lastActive = now;
  entry.daily[day] = (entry.daily[day] || 0) + minutes;
  saveStudyTime(studyTime);
  res.json({ ok: true });
});

function requireAdmin(req, res, next) {
  if (!ADMIN_PASSWORD) return res.status(503).json({ error: 'Trang quản trị chưa được cấu hình (thiếu ADMIN_PASSWORD trên server).' });
  const provided = req.headers['x-admin-password'] || '';
  if (provided !== ADMIN_PASSWORD) return res.status(401).json({ error: 'Sai mật khẩu quản trị.' });
  next();
}

app.post('/api/admin/login', (req, res) => {
  if (!ADMIN_PASSWORD) return res.status(503).json({ error: 'Trang quản trị chưa được cấu hình (thiếu ADMIN_PASSWORD trên server).' });
  const password = typeof req.body?.password === 'string' ? req.body.password : '';
  if (password !== ADMIN_PASSWORD) return res.status(401).json({ error: 'Sai mật khẩu quản trị.' });
  res.json({ ok: true });
});

app.get('/api/admin/stats', requireAdmin, asyncRoute(async (req, res) => {
  const visits = loadVisits();
  const studyTime = loadStudyTime();
  const users = await loadUsers();
  const scores = await loadScores();

  function daysAgoKey(n) {
    const d = new Date();
    d.setDate(d.getDate() - n);
    return d.toISOString().slice(0, 10);
  }
  const last7 = [];
  for (let i = 0; i < 7; i++) last7.push(daysAgoKey(i));
  const last30 = [];
  for (let i = 0; i < 30; i++) last30.push(daysAgoKey(i));

  const today = todayKey();
  const visitorList = Object.keys(visits.visitors).map((id) => visits.visitors[id]);
  const uniqueVisitorsAllTime = visitorList.length;
  const uniqueVisitorsToday = visitorList.filter((v) => v.lastSeen.slice(0, 10) === today).length;
  const uniqueVisitors7d = visitorList.filter((v) => last7.indexOf(v.lastSeen.slice(0, 10)) !== -1).length;

  const pageviewsToday = visits.dailyPageviews[today] || 0;
  const pageviews7d = last7.reduce((sum, d) => sum + (visits.dailyPageviews[d] || 0), 0);
  const pageviews30d = last30.reduce((sum, d) => sum + (visits.dailyPageviews[d] || 0), 0);
  const pageviewsAllTime = Object.keys(visits.dailyPageviews).reduce((sum, d) => sum + visits.dailyPageviews[d], 0);

  const students = users.map((u) => {
    const st = studyTime['u:' + u.id];
    const sc = scores[u.id];
    return {
      id: u.id,
      name: u.name,
      email: u.email,
      level: u.level,
      createdAt: u.createdAt,
      totalMinutes: st ? Math.round(st.totalMinutes) : 0,
      lastActive: st ? st.lastActive : null,
      totalCorrect: sc ? sc.totalCorrect : 0,
      totalQuestions: sc ? sc.totalQuestions : 0,
      streak: sc ? sc.streak : 0,
      lessonsDone: sc ? sc.lessonsDone : 0,
    };
  });
  students.sort((a, b) => (b.lastActive || '').localeCompare(a.lastActive || ''));

  res.json({
    traffic: {
      uniqueVisitorsAllTime,
      uniqueVisitorsToday,
      uniqueVisitors7d,
      pageviewsToday,
      pageviews7d,
      pageviews30d,
      pageviewsAllTime,
    },
    students,
    totalRegisteredStudents: users.length,
  });
}));

// Proxies Google Cloud Text-to-Speech so the API key never reaches the
// browser. Client sends { text }, gets back { audioContent } (base64 MP3).
app.post('/api/tts', async (req, res) => {
  if (!GOOGLE_TTS_API_KEY) {
    return res.status(503).json({ error: 'TTS chưa được cấu hình (thiếu GOOGLE_TTS_API_KEY).' });
  }
  const text = typeof req.body?.text === 'string' ? req.body.text.trim() : '';
  if (!text || text.length > 200) {
    return res.status(400).json({ error: 'Thiếu hoặc sai định dạng "text".' });
  }
  try {
    const googleRes = await fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${encodeURIComponent(GOOGLE_TTS_API_KEY)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: 'cmn-CN', name: 'cmn-CN-Wavenet-A' },
          audioConfig: { audioEncoding: 'MP3', speakingRate: 0.9 },
        }),
      }
    );
    const data = await googleRes.json();
    if (!googleRes.ok) {
      return res.status(502).json({ error: data?.error?.message || 'Lỗi từ Google TTS.' });
    }
    res.json({ audioContent: data.audioContent });
  } catch (err) {
    res.status(502).json({ error: 'Không gọi được dịch vụ TTS.' });
  }
});

// Proxies Azure Speech Pronunciation Assessment so the key never reaches
// the browser. Client sends { audioBase64, mimeType, referenceText },
// gets back { accuracy, fluency, completeness, pronunciation, recognizedText }.
app.post('/api/speech-assess', async (req, res) => {
  if (!AZURE_SPEECH_KEY || !AZURE_SPEECH_REGION) {
    return res.status(503).json({ error: 'Chấm điểm AI chưa được cấu hình (thiếu AZURE_SPEECH_KEY / AZURE_SPEECH_REGION).' });
  }
  const { audioBase64, mimeType, referenceText } = req.body || {};
  if (typeof audioBase64 !== 'string' || !audioBase64 || typeof referenceText !== 'string' || !referenceText.trim()) {
    return res.status(400).json({ error: 'Thiếu audioBase64 hoặc referenceText.' });
  }
  if (referenceText.length > 300) {
    return res.status(400).json({ error: 'referenceText quá dài.' });
  }
  let audioBuffer;
  try {
    audioBuffer = Buffer.from(audioBase64, 'base64');
  } catch (e) {
    return res.status(400).json({ error: 'audioBase64 không hợp lệ.' });
  }
  if (audioBuffer.length > 8 * 1024 * 1024) {
    return res.status(400).json({ error: 'File ghi âm quá lớn.' });
  }
  const assessConfig = Buffer.from(JSON.stringify({
    ReferenceText: referenceText,
    GradingSystem: 'HundredMark',
    Granularity: 'Phoneme',
    Dimension: 'Comprehensive',
    EnableMiscue: true,
  })).toString('base64');
  const contentType = mimeType && typeof mimeType === 'string' ? mimeType : 'audio/webm; codecs=opus';
  try {
    const azureRes = await fetch(
      `https://${AZURE_SPEECH_REGION}.stt.speech.microsoft.com/speech/recognition/conversation/cognitiveservices/v1?language=zh-CN&format=detailed`,
      {
        method: 'POST',
        headers: {
          'Ocp-Apim-Subscription-Key': AZURE_SPEECH_KEY,
          'Content-Type': contentType,
          Accept: 'application/json',
          'Pronunciation-Assessment': assessConfig,
        },
        body: audioBuffer,
      }
    );
    const data = await azureRes.json();
    if (!azureRes.ok) {
      return res.status(502).json({ error: data?.message || 'Lỗi từ dịch vụ chấm điểm.' });
    }
    const best = data?.NBest?.[0];
    const pa = best?.PronunciationAssessment;
    if (!pa) {
      return res.status(502).json({ error: 'Không nhận diện được giọng nói, hãy thử ghi âm lại rõ hơn.' });
    }
    res.json({
      recognizedText: data.DisplayText || best.Display || '',
      accuracy: pa.AccuracyScore,
      fluency: pa.FluencyScore,
      completeness: pa.CompletenessScore,
      pronunciation: pa.PronScore,
    });
  } catch (err) {
    res.status(502).json({ error: 'Không gọi được dịch vụ chấm điểm.' });
  }
});

app.get('*', (req, res) => {
  sendVersionedHtml(res, path.join(PUBLIC_DIR, 'index.html'));
});

initDb()
  .catch((err) => {
    console.error('Khong ket noi duoc MySQL, kiem tra lai DB_HOST/DB_USER/DB_PASSWORD/DB_NAME:', err.message);
  })
  .finally(() => {
    app.listen(PORT, () => {
      console.log(`Chinese learning website running on port ${PORT}`);
      console.log(USE_DB ? 'Tai khoan/diem so: MySQL (' + process.env.DB_NAME + '@' + process.env.DB_HOST + ')' : 'Tai khoan/diem so: file JSON (data/) — chi dung cho local dev.');
    });
  });
