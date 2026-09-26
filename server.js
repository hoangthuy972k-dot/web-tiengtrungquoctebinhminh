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
// Giong doc va toc do doc doi duoc tu bien moi truong (hPanel), khong phai sua code.
// TTS_VOICE_FALLBACK la giong chac chan chay duoc: neu giong chinh bi tu choi
// (ten sai, chua mo cho khu vuc...) thi thu lai bang giong nay de hoc sinh
// khong mat tieng doc.
const TTS_VOICE = process.env.TTS_VOICE || 'cmn-CN-Wavenet-A';
const TTS_VOICE_FALLBACK = process.env.TTS_VOICE_FALLBACK || 'cmn-CN-Wavenet-A';
const TTS_SPEED = Number(process.env.TTS_SPEED || 0.9);
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
        imgSrc: ["'self'", 'data:', 'blob:'],
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
// Trang lop.html la man hinh chieu len lop — khong gan nut noi cho do roi mat.
const WIDGET_EXCLUDE_RE = /[\\/](exam[\\/]test[\\/]index\.html|admin\.html|lop\.html|hsk30\.html)$/;

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

// CDN cua Hostinger phuc vu thang cac duong dan co duoi .html nen chung khong di
// qua day, khong duoc dong dau ?v= va trinh duyet giu mai ban CSS/JS cu. Cac trang
// dung thuong xuyen co them duong dan khong duoi file de luon qua Node.
const CLEAN_PAGES = { '/lop': 'lop.html', '/game': 'game.html', '/bao-cao': 'admin.html', '/hsk30': 'hsk30.html' };

// Trang Phat am da bo: ai con giu duong dan cu thi dua ve trang chu
app.get(['/phat-am', '/phat-am.html'], (req, res) => res.redirect(301, '/'));

app.use((req, res, next) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') return next();
  let p = decodeURIComponent(req.path);
  if (CLEAN_PAGES[p]) {
    const f = path.join(PUBLIC_DIR, CLEAN_PAGES[p]);
    if (fs.existsSync(f)) return sendVersionedHtml(res, f);
  }
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
  try {
    await dbPool.query('ALTER TABLE scores ADD COLUMN srs LONGTEXT');
  } catch (err) {
    if (err.code !== 'ER_DUP_FIELDNAME') throw err;
  }
  await initExamAttemptsTable();
  await initDailyPointsTable();
  await initResumeTable();
  await initChatTables();
  await initGopYTable();
  await initStarsTable();
  await initClassTables();
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
      srs: JSON.parse(r.srs || '{}'),
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
      'INSERT INTO scores (user_id,name,level,total_correct,total_questions,streak,lessons_done,study_days,lesson_scores,review_wrong_words,srs,peak_correct,updated_at) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?) ' +
        'ON DUPLICATE KEY UPDATE name=VALUES(name), level=VALUES(level), total_correct=VALUES(total_correct), ' +
        'total_questions=VALUES(total_questions), streak=VALUES(streak), lessons_done=VALUES(lessons_done), ' +
        'study_days=VALUES(study_days), lesson_scores=VALUES(lesson_scores), review_wrong_words=VALUES(review_wrong_words), srs=VALUES(srs), peak_correct=VALUES(peak_correct), updated_at=VALUES(updated_at)',
      [
        userId, s.name, s.level, s.totalCorrect, s.totalQuestions, s.streak, s.lessonsDone,
        JSON.stringify(s.studyDays || []), JSON.stringify(s.lessonScores || {}), JSON.stringify(s.reviewWrongWords || {}), JSON.stringify(s.srs || {}),
        s.peakCorrect == null ? null : s.peakCorrect, s.updatedAt,
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
  const resumeState = await loadResume(userId);
  if (!sc) return { studyDays: [], lessonScores: {}, reviewWrongWords: {}, srs: {}, resumeState, streak: 0, totalCorrect: 0, totalQuestions: 0, lessonsDone: 0 };
  return {
    resumeState,
    studyDays: sc.studyDays || [],
    lessonScores: sc.lessonScores || {},
    reviewWrongWords: sc.reviewWrongWords || {},
    srs: sc.srs || {},
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
  // Lich on tap ngat quang: { "<chu Han>": { url, box, due, at } } — moi tu lay ban co "at" moi hon
  const incomingSrs = {};
  const srsIn = req.body?.srs;
  if (srsIn && typeof srsIn === 'object' && !Array.isArray(srsIn)) {
    Object.keys(srsIn).slice(0, 5000).forEach((k) => {
      const e = srsIn[k];
      if (typeof k !== 'string' || k.length > 24 || !e || typeof e !== 'object') return;
      const box = Math.max(0, Math.min(6, Math.round(Number(e.box) || 0)));
      const due = typeof e.due === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(e.due) ? e.due : null;
      const at = Math.round(Number(e.at) || 0);
      if (!due || !at) return;
      incomingSrs[k] = { url: typeof e.url === 'string' ? e.url.slice(0, 80) : '', box, due, at };
    });
  }
  const scores = await loadScores();
  const hadRecord = !!scores[req.user.id];
  const existing = scores[req.user.id] || {};
  const mergedSrs = Object.assign({}, existing.srs || {});
  Object.keys(incomingSrs).forEach((k) => { if (!mergedSrs[k] || (mergedSrs[k].at || 0) < incomingSrs[k].at) mergedSrs[k] = incomingSrs[k]; });
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
    srs: mergedSrs,
    peakCorrect: newPeak,
    updatedAt: new Date().toISOString(),
  };
  await saveScores(scores);
  // Bai nao da lam Kiem tra cuoi -> ghi thoi diem (de biet bai giao dung han hay nop muon)
  try { await recordPartsDone(req.user.id, mergedLessonScores); } catch (err) { console.error('recordLessonDone', err.message); }
  res.json({ ok: true, progress: await userProgress(req.user.id) });
}));

// Bai dang lam do: client gui len nhung bai vua thay doi (gop theo tung phan).
app.post('/api/resume/sync', requireAuth, asyncRoute(async (req, res) => {
  const incoming = req.body && req.body.resumeState;
  if (!incoming || typeof incoming !== 'object' || Array.isArray(incoming)) {
    return res.status(400).json({ error: 'Thiếu dữ liệu bài đang làm.' });
  }
  const merged = mergeResumeState(await loadResume(req.user.id), incoming);
  await saveResume(req.user.id, merged);
  res.json({ ok: true });
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

// ── Bai dang lam do (hoc sinh quay lai lam tiep, doi thiet bi van giu) ──
// Luu rieng 1 dong / hoc sinh (khong nhet vao bang scores) de bang xep hang
// khong phai doc them du lieu nay. Cau truc giong localStorage hyv_resume:
// { "<lessonUrl>": { "<phan>": { t: ms, v: trang thai | null } } }.
const RESUME_FILE = path.join(DATA_DIR, 'resume.json');
const RESUME_TTL_MS = 90 * 864e5;
const RESUME_TOMBSTONE_MS = 30 * 864e5;
const RESUME_MAX_BYTES = 400 * 1024;
const RESUME_ENTRY_MAX_BYTES = 24 * 1024;

async function initResumeTable() {
  if (!USE_DB) return;
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS resume_states (' +
      'user_id VARCHAR(36) PRIMARY KEY, ' +
      'data LONGTEXT, ' +
      'updated_ms BIGINT NOT NULL, ' +
      'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
    ')'
  );
}

async function loadResume(userId) {
  if (!USE_DB) {
    const all = readJsonFile(RESUME_FILE) || {};
    return all[userId] || {};
  }
  const [rows] = await dbPool.query('SELECT data FROM resume_states WHERE user_id = ?', [userId]);
  if (!rows.length) return {};
  try { return JSON.parse(rows[0].data || '{}') || {}; } catch (e) { return {}; }
}

async function saveResume(userId, data) {
  const now = Date.now();
  if (!USE_DB) {
    const all = readJsonFile(RESUME_FILE) || {};
    all[userId] = data;
    writeJsonFile(RESUME_FILE, all);
    return;
  }
  await dbPool.query(
    'INSERT INTO resume_states (user_id, data, updated_ms) VALUES (?,?,?) ON DUPLICATE KEY UPDATE data = VALUES(data), updated_ms = VALUES(updated_ms)',
    [userId, JSON.stringify(data), now]
  );
}

// Gop ban hoc sinh gui len vao ban dang luu: tung phan lay ban co moc thoi gian moi hon.
function mergeResumeState(existing, incoming) {
  const now = Date.now();
  const out = existing && typeof existing === 'object' ? existing : {};
  if (incoming && typeof incoming === 'object' && !Array.isArray(incoming)) {
    Object.keys(incoming).slice(0, 300).forEach((url) => {
      if (typeof url !== 'string' || url.length > 160 || !/^\/lessons\/[\w.-]+\.html$/.test(url)) return;
      const parts = incoming[url];
      if (!parts || typeof parts !== 'object' || Array.isArray(parts)) return;
      Object.keys(parts).slice(0, 60).forEach((key) => {
        if (typeof key !== 'string' || key.length > 60) return;
        const e = parts[key];
        if (!e || typeof e !== 'object' || typeof e.t !== 'number' || !isFinite(e.t)) return;
        const t = Math.min(Math.round(e.t), now + 5 * 60 * 1000);
        const v = e.v === undefined ? null : e.v;
        if (v !== null && Buffer.byteLength(JSON.stringify(v), 'utf8') > RESUME_ENTRY_MAX_BYTES) return;
        out[url] = out[url] || {};
        const cur = out[url][key];
        if (!cur || typeof cur.t !== 'number' || t > cur.t) out[url][key] = { t, v };
      });
    });
  }
  // Don dep: bo ban qua cu va dau "da xoa" qua 30 ngay
  Object.keys(out).forEach((url) => {
    const parts = out[url] || {};
    Object.keys(parts).forEach((key) => {
      const e = parts[key];
      if (!e || now - e.t > RESUME_TTL_MS || (e.v === null && now - e.t > RESUME_TOMBSTONE_MS)) delete parts[key];
    });
    if (!Object.keys(parts).length) delete out[url];
  });
  // Qua lon thi bo dan cac bai lau khong dong toi nhat
  let size = Buffer.byteLength(JSON.stringify(out), 'utf8');
  if (size > RESUME_MAX_BYTES) {
    const byAge = Object.keys(out).map((url) => ({
      url, last: Math.max.apply(null, Object.values(out[url]).map((e) => e.t)),
    })).sort((a, b) => a.last - b.last);
    for (const item of byAge) {
      if (size <= RESUME_MAX_BYTES) break;
      delete out[item.url];
      size = Buffer.byteLength(JSON.stringify(out), 'utf8');
    }
  }
  return out;
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
// Ngoi sao cham chi: +5 sao lan dau mo web moi ngay, +5 sao cho moi 5 phut
// hoc that (tab dang mo va co thao tac). May chu tu dem gio theo thoi gian
// thuc troi qua giua 2 lan client bao, nen khong gui gia gio hoc len duoc;
// mo 2 tab cung luc cung khong duoc tinh gap doi.
// ══════════════════════════════════════════════════════════════════
const STARS_FILE = path.join(DATA_DIR, 'stars.json');
const STAR_VISIT = 5;          // sao khi mo web, 1 lan / ngay (gio VN)
const STAR_BLOCK_SEC = 300;    // moi 5 phut hoc...
const STAR_PER_BLOCK = 5;      // ...duoc 5 sao
const STAR_DAY_CAP = 120;      // toi da 120 sao / ngay tu gio hoc (= 2 tieng)
const STAR_TICK_MAX_SEC = 90;  // moi lan client bao toi da 90 giay
// +1 sao ngay khi tra loi dung 1 cau. Moi cau co 1 khoa (bai + phan + so thu
// tu); may chu ghi nho khoa da thuong nen lam lai cau cu khong duoc them sao.
// Gioi han/ngay chan viec tu che khoa gia.
const STAR_ANSWER_DAY_CAP = 300;
const STAR_TASKS = 10;         // sao khi xong ca 3 "nhiem vu hom nay" (1 lan / ngay)
const STAR_ANSWERS_FILE = path.join(DATA_DIR, 'star_answers.json');
const STAR_KEY_RE = /^[\w\/.:|㐀-鿿-]{3,160}$/u;

async function initStarsTable() {
  if (!USE_DB) return;
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS stars (' +
      'user_id VARCHAR(36) PRIMARY KEY, ' +
      'total INT NOT NULL DEFAULT 0, ' +
      'carry_sec INT NOT NULL DEFAULT 0, ' +
      'day CHAR(10), ' +
      'day_visit TINYINT NOT NULL DEFAULT 0, ' +
      'day_stars INT NOT NULL DEFAULT 0, ' +
      'last_tick_ms BIGINT NOT NULL DEFAULT 0, ' +
      'updated_ms BIGINT NOT NULL, ' +
      'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
    ')'
  );
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS star_answers (' +
      'user_id VARCHAR(36) NOT NULL, ' +
      'qkey VARCHAR(160) NOT NULL, ' +
      'PRIMARY KEY (user_id, qkey), ' +
      'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
    ')'
  );
  for (const col of ['answer_peak INT NULL', 'day_answer INT NOT NULL DEFAULT 0', 'day_tasks TINYINT NOT NULL DEFAULT 0', 'day_sec INT NOT NULL DEFAULT 0',
    'week CHAR(10) NULL', 'week_stars INT NOT NULL DEFAULT 0']) {
    try {
      await dbPool.query('ALTER TABLE stars ADD COLUMN ' + col);
    } catch (err) {
      if (err.code !== 'ER_DUP_FIELDNAME') throw err;
    }
  }
}
function blankStar() {
  return { total: 0, carrySec: 0, day: '', dayVisit: 0, dayStars: 0, dayAnswer: 0, dayTasks: 0, daySec: 0, week: '', weekStars: 0, answerPeak: null, lastTickMs: 0, updatedMs: 0 };
}
async function loadStar(userId) {
  if (!USE_DB) {
    const all = readJsonFile(STARS_FILE) || {};
    return Object.assign(blankStar(), all[userId] || {});
  }
  const [rows] = await dbPool.query('SELECT * FROM stars WHERE user_id = ?', [userId]);
  if (!rows.length) return blankStar();
  const r = rows[0];
  return {
    total: r.total, carrySec: r.carry_sec, day: r.day || '', dayVisit: r.day_visit, dayStars: r.day_stars,
    dayAnswer: r.day_answer || 0, dayTasks: r.day_tasks || 0, daySec: r.day_sec || 0, week: r.week || '', weekStars: r.week_stars || 0,
    answerPeak: r.answer_peak == null ? null : r.answer_peak,
    lastTickMs: Number(r.last_tick_ms), updatedMs: Number(r.updated_ms),
  };
}
async function saveStar(userId, s) {
  s.updatedMs = Date.now();
  if (!USE_DB) {
    const all = readJsonFile(STARS_FILE) || {};
    all[userId] = s;
    writeJsonFile(STARS_FILE, all);
    return;
  }
  await dbPool.query(
    'INSERT INTO stars (user_id,total,carry_sec,day,day_visit,day_stars,day_answer,day_tasks,day_sec,week,week_stars,answer_peak,last_tick_ms,updated_ms) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?) ' +
      'ON DUPLICATE KEY UPDATE total=VALUES(total), carry_sec=VALUES(carry_sec), day=VALUES(day), day_visit=VALUES(day_visit), ' +
      'day_stars=VALUES(day_stars), day_answer=VALUES(day_answer), day_tasks=VALUES(day_tasks), day_sec=VALUES(day_sec), week=VALUES(week), week_stars=VALUES(week_stars), ' +
      'answer_peak=VALUES(answer_peak), last_tick_ms=VALUES(last_tick_ms), updated_ms=VALUES(updated_ms)',
    [userId, s.total, s.carrySec, s.day, s.dayVisit, s.dayStars, s.dayAnswer || 0, s.dayTasks || 0, s.daySec || 0, s.week || null, s.weekStars || 0,
      s.answerPeak == null ? null : s.answerPeak, s.lastTickMs, s.updatedMs]
  );
}
async function loadAllStars() {
  if (!USE_DB) {
    const all = readJsonFile(STARS_FILE) || {};
    return Object.keys(all).map((id) => Object.assign({ userId: id }, blankStar(), all[id]));
  }
  const [rows] = await dbPool.query('SELECT user_id, total, day, day_visit, day_stars, day_answer, day_tasks, week, week_stars, updated_ms FROM stars WHERE total > 0 ORDER BY total DESC, updated_ms ASC LIMIT 2000');
  return rows.map((r) => ({ userId: r.user_id, total: r.total, day: r.day || '', dayVisit: r.day_visit, dayStars: r.day_stars, dayAnswer: r.day_answer || 0,
    dayTasks: r.day_tasks || 0, week: r.week || '', weekStars: r.week_stars || 0, updatedMs: Number(r.updated_ms) }));
}
// Tuan tinh tu thu Hai (gio VN); khoa = ngay thu Hai dau tuan
function vnWeekKey(ms) {
  const d = new Date((ms || Date.now()) + VN_OFFSET_MS);
  const dow = (d.getUTCDay() + 6) % 7; // 0 = thu Hai
  return new Date(d.getTime() - dow * 86400000).toISOString().slice(0, 10);
}
function secondsToVnWeekEnd() {
  const monday = Date.parse(vnWeekKey() + 'T00:00:00Z') - VN_OFFSET_MS;
  return Math.max(0, Math.round((monday + 7 * 86400000 - Date.now()) / 1000));
}
// Sang ngay / tuan moi (gio VN) thi dat lai phan "hom nay" / "tuan nay"
function rollStarDay(s) {
  const day = vnDayKey();
  if (s.day !== day) { s.day = day; s.dayVisit = 0; s.dayStars = 0; s.dayAnswer = 0; s.dayTasks = 0; s.daySec = 0; }
  const week = vnWeekKey();
  if (s.week !== week) { s.week = week; s.weekStars = 0; }
}
// Moi lan cong sao deu cong ca vao tong va vao "tuan nay"
function addStars(s, n) {
  s.total += n;
  s.weekStars = (s.weekStars || 0) + n;
}
function starsToday(s) {
  return s.dayStars + (s.dayAnswer || 0) + (s.dayVisit ? STAR_VISIT : 0) + (s.dayTasks ? STAR_TASKS : 0);
}
function starView(s, awarded, answerAwarded) {
  return {
    total: s.total,
    secToNext: STAR_BLOCK_SEC - s.carrySec,
    today: starsToday(s),
    todayMin: Math.floor((s.daySec || 0) / 60),
    tasksDone: !!s.dayTasks,
    tasksStars: STAR_TASKS,
    answerAwarded: answerAwarded || 0,
    capped: s.dayStars >= STAR_DAY_CAP,
    awarded: awarded || 0,
    blockSec: STAR_BLOCK_SEC,
    perBlock: STAR_PER_BLOCK,
  };
}

app.get('/api/stars/me', requireAuth, asyncRoute(async (req, res) => {
  const s = await loadStar(req.user.id);
  rollStarDay(s);
  res.json(starView(s, 0));
}));

// Mo web: cong sao lan dau trong ngay, va lay moc bat dau dem gio cho phien nay.
app.post('/api/stars/visit', requireAuth, asyncRoute(async (req, res) => {
  const s = await loadStar(req.user.id);
  rollStarDay(s);
  let awarded = 0;
  if (!s.dayVisit) { s.dayVisit = 1; addStars(s, STAR_VISIT); awarded = STAR_VISIT; }
  s.lastTickMs = Date.now();
  await saveStar(req.user.id, s);
  res.json(starView(s, awarded));
}));

// Ghi cac khoa cau moi dung; tra ve so khoa CHUA tung duoc thuong.
async function addStarAnswerKeys(userId, keys) {
  if (!keys.length) return 0;
  if (!USE_DB) {
    const all = readJsonFile(STAR_ANSWERS_FILE) || {};
    const mine = all[userId] || (all[userId] = {});
    let fresh = 0;
    keys.forEach((k) => { if (!mine[k]) { mine[k] = 1; fresh++; } });
    if (fresh) writeJsonFile(STAR_ANSWERS_FILE, all);
    return fresh;
  }
  const [r] = await dbPool.query(
    'INSERT IGNORE INTO star_answers (user_id, qkey) VALUES ' + keys.map(() => '(?,?)').join(','),
    keys.flatMap((k) => [userId, k])
  );
  return r.affectedRows || 0;
}

// Hoc sinh vua tra loi dung: +1 sao cho moi cau dung lan dau.
app.post('/api/stars/correct', requireAuth, asyncRoute(async (req, res) => {
  const keys = Array.from(new Set(
    (Array.isArray(req.body?.keys) ? req.body.keys : [])
      .filter((k) => typeof k === 'string' && STAR_KEY_RE.test(k))
  )).slice(0, 50);
  const s = await loadStar(req.user.id);
  rollStarDay(s);
  const room = Math.max(0, STAR_ANSWER_DAY_CAP - (s.dayAnswer || 0));
  let gained = 0;
  if (room > 0 && keys.length) {
    // Da het han muc trong ngay thi khong ghi khoa, de hom sau lam lai van duoc sao
    const fresh = await addStarAnswerKeys(req.user.id, keys.slice(0, room));
    gained = Math.min(fresh, room);
    addStars(s, gained);
    s.dayAnswer = (s.dayAnswer || 0) + gained;
    if (gained) await saveStar(req.user.id, s);
  }
  res.json(starView(s, 0, gained));
}));

// Xong ca 3 "nhiem vu hom nay" (on tu cu + hoc tiep + doc thanh ngu): +10 sao, 1 lan / ngay.
app.post('/api/stars/tasks', requireAuth, asyncRoute(async (req, res) => {
  const s = await loadStar(req.user.id);
  rollStarDay(s);
  let awarded = 0;
  if (!s.dayTasks) { s.dayTasks = 1; addStars(s, STAR_TASKS); awarded = STAR_TASKS; await saveStar(req.user.id, s); }
  res.json(starView(s, awarded));
}));

// Client bao "toi vua hoc them N giay" (chi khi tab dang mo va co thao tac).
app.post('/api/stars/tick', requireAuth, asyncRoute(async (req, res) => {
  const s = await loadStar(req.user.id);
  rollStarDay(s);
  const now = Date.now();
  let sec = Math.min(STAR_TICK_MAX_SEC, Math.max(0, Math.round(Number(req.body?.seconds) || 0)));
  // Khong tin so giay client gui: toi da bang thoi gian thuc troi qua tu lan bao truoc.
  if (s.lastTickMs) sec = Math.min(sec, Math.floor((now - s.lastTickMs) / 1000));
  s.lastTickMs = now;
  let awarded = 0;
  if (sec > 0) s.daySec = (s.daySec || 0) + sec;
  if (sec > 0 && s.dayStars < STAR_DAY_CAP) {
    s.carrySec += sec;
    while (s.carrySec >= STAR_BLOCK_SEC && s.dayStars < STAR_DAY_CAP) {
      s.carrySec -= STAR_BLOCK_SEC;
      addStars(s, STAR_PER_BLOCK);
      s.dayStars += STAR_PER_BLOCK;
      awarded += STAR_PER_BLOCK;
    }
    if (s.dayStars >= STAR_DAY_CAP) s.carrySec = 0;
  }
  await saveStar(req.user.id, s);
  res.json(starView(s, awarded));
}));

// Bang xep hang "nguoi cham chi nhat": tong sao, kem so sao hom nay.
app.get('/api/leaderboard/stars', asyncRoute(async (req, res) => {
  const meId = await optionalUserId(req);
  const [all, users] = await Promise.all([loadAllStars(), loadUsers()]);
  const byId = {};
  users.forEach((u) => { byId[u.id] = u; });
  const today = vnDayKey();
  // ?period=week: chi tinh sao kiem duoc trong tuan nay (thu Hai → Chu nhat, gio VN)
  const weekly = req.query.period === 'week';
  const thisWeek = vnWeekKey();
  const score = (s) => (weekly ? (s.week === thisWeek ? s.weekStars || 0 : 0) : s.total);
  const board = all
    .filter((s) => byId[s.userId] && score(s) > 0)
    .sort((a, b) => score(b) - score(a) || a.updatedMs - b.updatedMs);
  const toRow = (s, i) => ({
    rank: i + 1, name: byId[s.userId].name, level: byId[s.userId].level, total: score(s),
    today: s.day === today ? starsToday(s) : 0, isMe: s.userId === meId,
  });
  const meIdx = meId ? board.findIndex((s) => s.userId === meId) : -1;
  res.json({
    period: weekly ? 'week' : 'all', week: thisWeek, resetInSec: weekly ? secondsToVnWeekEnd() : null,
    rows: board.slice(0, 50).map(toRow), me: meIdx >= 0 ? toRow(board[meIdx], meIdx) : null, count: board.length,
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
      // Cau tu viet (sap xep cau, viet chu Han) cham theo chu, bo khoang trang + dau cau
      const isText = part.type === 'arrange' || part.type === 'write';
      qs.forEach((q) => answers.push([String(q.n), isText ? [q.answer].concat(q.accept || []) : q.answer, isText]));
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
function normExamText(v) {
  return String(v == null ? '' : v).replace(/[\s，。！？、,.!?；;：:“”"'‘’（）()]/g, '');
}

function gradeExam(def, answers) {
  let correct = 0, score = 0;
  const perSection = def.maxScore / def.sections.length;
  def.sections.forEach((sec) => {
    let c = 0;
    sec.answers.forEach(([n, ans, isText]) => {
      if (!Object.prototype.hasOwnProperty.call(answers, n)) return;
      if (isText) {
        const got = typeof answers[n] === 'string' ? normExamText(answers[n]) : '';
        if (got !== '' && ans.some((a) => got === normExamText(a))) c++;
      }
      else if (answers[n] === ans) c++;
    });
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
    if (typeof v === 'boolean' || (typeof v === 'string' && v.length <= 60)) out[k] = v;
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


// ---------- Thi thu HSK 3.0 (bo de co ban quyen) ----------
// Noi dung de (cau hoi, anh, am thanh) nam trong protected/hsk30/<id>/, KHONG nam trong public/:
// chi hoc sinh da dang nhap moi tai duoc. Trang /hsk30 tai de.json + tung tep qua cac API duoi day.
const HSK30_DIR = path.join(__dirname, 'protected', 'hsk30');
const HSK30_ID_RE = /^hsk30-[1-9]-\d{1,2}$/;
const HSK30_FILE_RE = /^[a-zA-Z0-9-]{1,40}\.(jpg|png|mp3)$/;
let hsk30Cache = null;
function hsk30List() {
  if (hsk30Cache) return hsk30Cache;
  let ids = [];
  try { ids = fs.readdirSync(HSK30_DIR).filter((d) => HSK30_ID_RE.test(d)); } catch (err) { return []; }
  hsk30Cache = ids.map((id) => {
    try {
      const d = JSON.parse(fs.readFileSync(path.join(HSK30_DIR, id, 'de.json'), 'utf8'));
      return {
        id, capDo: d.capDo, de: d.de, ten: d.ten, tenZh: d.tenZh,
        phan: d.sections.map((s) => ({ ten: s.ten, soCau: s.parts.reduce((a, p) => a + p.cau.length, 0), phut: s.phut })),
      };
    } catch (err) { return null; }
  }).filter(Boolean).sort((a, b) => a.capDo - b.capDo || a.de - b.de);
  return hsk30Cache;
}
// Danh sach de (chi ten, so cau) — ai cung xem duoc de biet co de nao
app.get('/api/hsk30/list', (req, res) => { res.json({ items: hsk30List() }); });
app.get('/api/hsk30/de/:id', requireAuth, (req, res) => {
  const id = req.params.id;
  if (!HSK30_ID_RE.test(id) || !fs.existsSync(path.join(HSK30_DIR, id, 'de.json'))) return res.status(404).json({ error: 'Không tìm thấy đề thi.' });
  res.set('Cache-Control', 'private, no-store');
  res.sendFile(path.join(HSK30_DIR, id, 'de.json'));
});
app.get('/api/hsk30/tep/:id/:file', requireAuth, (req, res) => {
  const { id, file } = req.params;
  if (!HSK30_ID_RE.test(id) || !HSK30_FILE_RE.test(file)) return res.status(404).end();
  const p = path.join(HSK30_DIR, id, file);
  if (!fs.existsSync(p)) return res.status(404).end();
  res.set('Cache-Control', 'private, max-age=86400');
  res.sendFile(p);
});

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
// So cau hoi moi ngay cho moi nguoi: 0 = KHONG GIOI HAN (mac dinh). Muon gioi han lai thi
// dat AI_DAILY_LIMIT_GUEST / AI_DAILY_LIMIT_USER trong bien moi truong cua hPanel.
const AI_DAILY_LIMIT_GUEST = (Number.isFinite(parseInt(process.env.AI_DAILY_LIMIT_GUEST, 10)) ? Math.max(0, parseInt(process.env.AI_DAILY_LIMIT_GUEST, 10)) : 0);
const AI_DAILY_LIMIT_USER = (Number.isFinite(parseInt(process.env.AI_DAILY_LIMIT_USER, 10)) ? Math.max(0, parseInt(process.env.AI_DAILY_LIMIT_USER, 10)) : 0);
// Chong spam: toi da bao nhieu cau trong 1 phut cho moi nguoi (0 = tat), de mot nguoi
// hoac may tu dong khong dot het han muc mien phi chung cua ca website.
const AI_PER_MINUTE = (Number.isFinite(parseInt(process.env.AI_PER_MINUTE, 10)) ? Math.max(0, parseInt(process.env.AI_PER_MINUTE, 10)) : 10);
const aiBurst = new Map(); // "u:id" | "ip:addr" -> [ms cac cau hoi trong 60 giay qua]
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
// o (tuy chon): { sys, temperature } — dung khi goi AI cho viec khac tro chuyen
// (vd. cham cau). Bo trong thi giu nguyen hanh vi cua Tro ly AI.
async function* streamGroq(messages, signal, o) {
  const sys = (o && o.sys) || AI_SYSTEM_PROMPT;
  const recent = messages.slice(-6);
  while (recent.length && recent[0].role !== 'user') recent.shift();
  const msgs = recent.map((m, i) => ({
    role: m.role,
    content: i === 0 ? sys + '\n\n---\n\n' + (o && o.sys ? '' : 'Câu hỏi của học sinh:\n') + m.content : m.content,
  }));
  const res = await openStream('groq', GROQ_BASE_URL + '/chat/completions', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: 'Bearer ' + GROQ_API_KEY },
    body: JSON.stringify({
      model: GROQ_MODEL,
      messages: msgs,
      stream: true,
      temperature: o && o.temperature != null ? o.temperature : 0.6,
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
async function* streamGemini(messages, signal, o) {
  const url = GEMINI_BASE_URL + '/models/' + encodeURIComponent(GEMINI_MODEL) + ':streamGenerateContent?alt=sse';
  const res = await openStream('gemini', url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'x-goog-api-key': GEMINI_API_KEY },
    body: JSON.stringify({
      system_instruction: { parts: [{ text: (o && o.sys) || AI_SYSTEM_PROMPT }] },
      contents: messages.map((m) => ({ role: m.role === 'assistant' ? 'model' : 'user', parts: [{ text: m.content }] })),
      // du cho ca phan suy nghi noi bo cua mo hinh, tranh cau tra loi bi cat cut
      generationConfig: { maxOutputTokens: 8192, temperature: o && o.temperature != null ? o.temperature : 0.7 },
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
async function* streamAnthropic(messages, signal, o) {
  const stream = anthropic.beta.messages.stream({
    model: ANTHROPIC_MODEL,
    max_tokens: 16000,
    thinking: { type: 'adaptive' },
    output_config: { effort: 'low' },
    betas: ['server-side-fallback-2026-07-01'],
    fallbacks: 'default',
    system: ((o && o.sys) || AI_SYSTEM_PROMPT) + '\nLatency-sensitive; begin your visible answer immediately.',
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
  const unlimited = limit === 0;
  const mapKey = vnDayKey() + '|' + key;
  const used = aiUsage.get(mapKey) || 0;
  return { key, mapKey, limit, used, unlimited, remaining: unlimited ? null : Math.max(0, limit - used), loggedIn: !!userId };
}

app.get('/api/ai/quota', asyncRoute(async (req, res) => {
  const q = await aiQuotaFor(req);
  res.json({ enabled: aiProviders().length > 0, unlimited: q.unlimited, limit: q.unlimited ? null : q.limit, remaining: q.remaining, loggedIn: q.loggedIn });
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
  if (!q.unlimited && q.remaining <= 0) {
    return res.status(429).json({
      error: q.loggedIn
        ? 'Hôm nay bạn đã dùng hết ' + q.limit + ' câu hỏi. Mai quay lại nhé!'
        : 'Bạn đã dùng hết ' + q.limit + ' câu hỏi miễn phí hôm nay. Đăng nhập để được hỏi ' +
          (AI_DAILY_LIMIT_USER ? AI_DAILY_LIMIT_USER + ' câu mỗi ngày.' : 'không giới hạn.'),
      remaining: 0, limit: q.limit,
    });
  }
  // Chong spam: qua nhieu cau trong 1 phut thi nhac doi mot chut
  if (AI_PER_MINUTE > 0) {
    const now = Date.now();
    const recent = (aiBurst.get(q.key) || []).filter((t) => now - t < 60000);
    if (recent.length >= AI_PER_MINUTE) {
      return res.status(429).json({ error: 'Bạn hỏi nhanh quá, đợi khoảng một phút rồi hỏi tiếp nhé.', burst: true });
    }
    recent.push(now);
    aiBurst.set(q.key, recent);
    if (aiBurst.size > 5000) {
      aiBurst.forEach((list, k) => { if (!list.some((t) => now - t < 60000)) aiBurst.delete(k); });
    }
  }
  // Co gioi han theo ngay: tru luot truoc de request song song khong vuot; loi thi hoan lai.
  if (!q.unlimited) {
    aiUsage.set(q.mapKey, q.used + 1);
    if (aiUsage.size > 5000) {
      const today = vnDayKey() + '|';
      Array.from(aiUsage.keys()).forEach((k) => { if (!k.startsWith(today)) aiUsage.delete(k); });
    }
  }
  const refund = () => { if (!q.unlimited) aiUsage.set(q.mapKey, Math.max(0, (aiUsage.get(q.mapKey) || 1) - 1)); };

  res.status(200);
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');
  // no-transform: middleware compression khong gom lai, chu hien dan tren man hinh
  res.setHeader('Cache-Control', 'no-cache, no-transform');
  if (!q.unlimited) {
    res.setHeader('X-AI-Remaining', String(q.remaining - 1));
    res.setHeader('X-AI-Limit', String(q.limit));
  }

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
    // Phan biet ro tung loai loi — neu khong, thay/co cu doi mai ma khong biet
    // la khoa API het han muc chu khong phai may chu ban.
    let msg = 'Trợ lý AI đang bận, bạn thử lại sau ít phút nhé.';
    if (lastErr.status === 429) msg = 'Trợ lý AI đã dùng hết lượt miễn phí hoặc đang quá tải, bạn thử lại sau nhé.';
    else if (lastErr.status === 402) msg = 'Khoá AI của website đã hết hạn mức sử dụng. Báo thầy/cô nạp thêm hoặc đổi khoá mới nhé!';
    else if (lastErr.status === 401 || lastErr.status === 403) msg = 'Khoá AI của website chưa đúng hoặc đã bị thu hồi. Báo thầy/cô kiểm tra lại nhé!';
    res.write((wroteText ? '\n\n' : '') + '⚠️ ' + msg);
  }
  res.end();
}));

// ---------------- AI cham cau van dung ngu phap ----------------
// Hoc sinh viet cau dung mot diem ngu phap (HSK 4) -> AI cham thang 10, chi ra
// tung loi kem cach sua. Dung chung nha cung cap va han muc voi Tro ly AI.
const CHAM_CAU_SYS = [
  'Bạn là giáo viên tiếng Trung, chấm câu viết của học sinh Việt Nam trình độ HSK 4 để luyện một điểm ngữ pháp.',
  'Thang điểm 10:',
  '- 9–10: dùng đúng điểm ngữ pháp, câu đúng ngữ pháp, tự nhiên, đúng ý đề.',
  '- 7–8: dùng đúng điểm ngữ pháp nhưng còn lỗi nhỏ (chọn từ chưa hay, viết sai chữ, hơi thiếu tự nhiên).',
  '- 5–6: có dùng điểm ngữ pháp nhưng sai vị trí, sai từ hô ứng, hoặc còn lỗi ngữ pháp khác rõ ràng.',
  '- 3–4: không dùng điểm ngữ pháp được yêu cầu, hoặc câu sai nhiều chỗ.',
  '- 0–2: không phải câu tiếng Trung, lạc đề hoặc không hiểu được.',
  'Cách nói khác đáp án mẫu mà vẫn đúng ngữ pháp, đúng ý và dùng đúng điểm ngữ pháp thì vẫn được điểm tối đa. Không trừ điểm vì thiếu dấu câu cuối câu.',
  'Liệt kê TỪNG lỗi cụ thể: đoạn sai, sửa thành gì, giải thích ngắn gọn bằng tiếng Việt (một câu). Câu đã đúng thì "loi" là mảng rỗng — không bịa lỗi.',
  '"cauSua" là câu của học sinh sau khi sửa, giữ ý và cách nói của em nhiều nhất có thể; câu đã đúng thì chép lại nguyên câu.',
  '"nhanXet" là một câu tiếng Việt ngắn, khích lệ, nói rõ em làm tốt gì hoặc cần nhớ gì.',
  'Chỉ trả về DUY NHẤT một đối tượng JSON, không thêm chữ nào khác, không bọc trong ```:',
  '{"diem": 0-10, "dungCauTruc": true|false, "loi": [{"sai": "...", "sua": "...", "giai": "..."}], "cauSua": "...", "nhanXet": "..."}',
].join('\n');

function docKetQuaCham(text) {
  const t = String(text || '');
  const a = t.indexOf('{'), b = t.lastIndexOf('}');
  if (a < 0 || b <= a) return null;
  let j;
  try { j = JSON.parse(t.slice(a, b + 1)); } catch (e) { return null; }
  const diem = Math.round(Number(j.diem));
  if (!Number.isFinite(diem)) return null;
  const cat = (s, n) => String(s == null ? '' : s).trim().slice(0, n);
  return {
    diem: Math.max(0, Math.min(10, diem)),
    dungCauTruc: j.dungCauTruc === true || j.dungCauTruc === 'true',
    loi: (Array.isArray(j.loi) ? j.loi : []).slice(0, 6).map((l) => ({ sai: cat(l && l.sai, 120), sua: cat(l && l.sua, 120), giai: cat(l && l.giai, 240) }))
      .filter((l) => l.sai || l.sua || l.giai),
    cauSua: cat(j.cauSua, 300),
    nhanXet: cat(j.nhanXet, 300),
  };
}

app.post('/api/ai/cham-cau', asyncRoute(async (req, res) => {
  const b = req.body || {};
  const cat = (s, n) => String(s == null ? '' : s).trim().slice(0, n);
  const tra = cat(b.tra, 300);
  if (!tra) return res.status(400).json({ error: 'Em chưa viết câu trả lời.' });
  if (!/[㐀-鿿]/.test(tra)) return res.status(400).json({ error: 'Em hãy viết câu bằng chữ Hán nhé.' });
  const providers = aiProviders();
  if (!providers.length) return res.status(503).json({ error: 'AI chấm bài chưa được bật trên máy chủ.' });

  // Han muc: dung chung voi Tro ly AI (moi lan cham = 1 luot)
  const q = await aiQuotaFor(req);
  if (!q.unlimited && q.remaining <= 0) {
    return res.status(429).json({ error: 'Hôm nay em đã dùng hết lượt AI. Em so với đáp án mẫu nhé, mai AI chấm tiếp.' });
  }
  if (AI_PER_MINUTE > 0) {
    const now = Date.now();
    const recent = (aiBurst.get(q.key) || []).filter((t) => now - t < 60000);
    if (recent.length >= AI_PER_MINUTE) {
      return res.status(429).json({ error: 'Em bấm chấm nhanh quá, đợi khoảng một phút rồi chấm tiếp nhé.' });
    }
    recent.push(now);
    aiBurst.set(q.key, recent);
  }
  if (!q.unlimited) aiUsage.set(q.mapKey, q.used + 1);
  const refund = () => { if (!q.unlimited) aiUsage.set(q.mapKey, Math.max(0, (aiUsage.get(q.mapKey) || 1) - 1)); };

  const cauTruc = (Array.isArray(b.cauTruc) ? b.cauTruc : []).slice(0, 8).map((x) => cat(x, 200)).filter(Boolean);
  const de = cat(b.de, 300), goiY = cat(b.goiY, 300), mau = cat(b.mau, 300);
  const noiDung = [
    'ĐIỂM NGỮ PHÁP: ' + cat(b.diem, 200),
    cauTruc.length ? 'CẤU TRÚC: ' + cauTruc.join(' | ') : '',
    b.tuDo
      ? 'ĐỀ: Học sinh tự đặt một câu có dùng điểm ngữ pháp trên.' + (goiY ? ' (' + goiY + ')' : '')
      : 'ĐỀ: Hoàn thành câu 「' + de + '」' + (goiY ? ' — ý cần diễn đạt: ' + goiY : ''),
    mau ? 'ĐÁP ÁN MẪU (chỉ để tham khảo): ' + mau : '',
    'CÂU CỦA HỌC SINH: ' + tra,
  ].filter(Boolean).join('\n');
  const messages = [{ role: 'user', content: noiDung }];

  let lastErr = null;
  for (const p of providers) {
    const ctl = new AbortController();
    const timer = setTimeout(() => ctl.abort(), 30000);
    try {
      let text = '';
      for await (const t of p.stream(messages, ctl.signal, { sys: CHAM_CAU_SYS, temperature: 0.2 })) text += t;
      clearTimeout(timer);
      const kq = docKetQuaCham(text);
      if (kq) return res.json(Object.assign(kq, { nguon: p.name }));
      lastErr = new AiProviderError(p.name, 502, 'không đọc được JSON: ' + text.slice(0, 120));
      console.error('Cham cau AI: ' + p.name + ' tra loi sai dinh dang');
    } catch (err) {
      clearTimeout(timer);
      lastErr = err;
      console.error('Cham cau AI: ' + p.name + ' loi', err.status != null ? err.status : '', err.message);
    }
  }
  refund();
  let msg = 'AI chấm bài đang bận, em so với đáp án mẫu hoặc thử lại sau ít phút nhé.';
  if (lastErr && lastErr.status === 429) msg = 'AI đã dùng hết lượt miễn phí hoặc đang quá tải, em thử lại sau nhé.';
  else if (lastErr && lastErr.status === 402) msg = 'AI chấm bài đang tạm dừng vì khoá AI của website đã hết hạn mức. Báo thầy/cô nạp thêm hoặc đổi khoá nhé!';
  else if (lastErr && (lastErr.status === 401 || lastErr.status === 403)) msg = 'Khoá AI của website chưa đúng hoặc đã bị thu hồi. Báo thầy/cô kiểm tra lại nhé!';
  res.status(502).json({ error: msg });
}));

// ---------------- Gop y cua hoc sinh gui thay/co ----------------
// Hoc sinh gui tu nut "Tro giup" o moi trang (khong can dang nhap). Thay/co
// doc + tra loi o trang Bao cao; em nao dang nhap thi thay cau tra loi ngay
// trong muc Gop y. Noi dung nam trong CSDL / data/ — khong vao ma nguon.
const GOP_Y_FILE = path.join(DATA_DIR, 'gop-y.json');
const GOP_Y_LOAI = { noidung: 'Bài học có lỗi', web: 'Web bị lỗi', dexuat: 'Đề xuất', khac: 'Khác' };
const gopYLog = new Map(); // "u:id" | "ip:addr" -> [ms cac lan gui trong 10 phut]

async function initGopYTable() {
  if (!USE_DB) return;
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS gop_y (' +
      'id VARCHAR(16) PRIMARY KEY, ' +
      'user_id VARCHAR(36) NULL, ' +
      'ten VARCHAR(80) NULL, ' +
      'loai VARCHAR(16) NOT NULL, ' +
      'noi_dung TEXT NOT NULL, ' +
      'trang VARCHAR(300) NULL, ' +
      'created_ms BIGINT NOT NULL, ' +
      'doc_ms BIGINT NULL, ' +
      'tra_loi TEXT NULL, ' +
      'tra_loi_ms BIGINT NULL, ' +
      'INDEX idx_user (user_id, created_ms), ' +
      'INDEX idx_created (created_ms)' +
    ')'
  );
}
function gopYRow(r) {
  return {
    id: r.id, userId: r.user_id || null, ten: r.ten || '', loai: r.loai, noiDung: r.noi_dung,
    trang: r.trang || '', createdMs: Number(r.created_ms), docMs: r.doc_ms == null ? null : Number(r.doc_ms),
    traLoi: r.tra_loi || '', traLoiMs: r.tra_loi_ms == null ? null : Number(r.tra_loi_ms),
  };
}
async function docGopY(chiUser) {
  if (!USE_DB) {
    const ds = (readJsonFile(GOP_Y_FILE) || {}).items || [];
    return ds.filter((x) => !chiUser || x.userId === chiUser).sort((a, b) => b.createdMs - a.createdMs);
  }
  const [rows] = chiUser
    ? await dbPool.query('SELECT * FROM gop_y WHERE user_id = ? ORDER BY created_ms DESC LIMIT 30', [chiUser])
    : await dbPool.query('SELECT * FROM gop_y ORDER BY created_ms DESC LIMIT 500');
  return rows.map(gopYRow);
}

app.post('/api/gop-y', asyncRoute(async (req, res) => {
  const b = req.body || {};
  const loai = GOP_Y_LOAI[b.loai] ? b.loai : 'khac';
  const noiDung = String(b.noiDung || '').trim().slice(0, 1000);
  if (noiDung.length < 3) return res.status(400).json({ error: 'Em viết nội dung góp ý giúp cô nhé.' });
  const userId = await optionalUserId(req);
  const key = userId ? 'u:' + userId : 'ip:' + clientIp(req);
  const now = Date.now();
  const gan = (gopYLog.get(key) || []).filter((t) => now - t < 600000);
  if (gan.length >= 5) return res.status(429).json({ error: 'Em gửi nhiều quá rồi, đợi mười phút rồi gửi tiếp nhé.' });
  gan.push(now);
  gopYLog.set(key, gan);
  if (gopYLog.size > 5000) gopYLog.forEach((ds, k) => { if (!ds.some((t) => now - t < 600000)) gopYLog.delete(k); });

  const row = {
    id: newShortId(), userId: userId || null,
    ten: userId ? '' : String(b.ten || '').trim().slice(0, 60),
    loai, noiDung, trang: String(b.trang || '').slice(0, 300), createdMs: now,
    docMs: null, traLoi: '', traLoiMs: null,
  };
  if (!USE_DB) {
    const d = readJsonFile(GOP_Y_FILE) || {};
    d.items = (d.items || []).concat(row);
    writeJsonFile(GOP_Y_FILE, d);
  } else {
    await dbPool.query('INSERT INTO gop_y (id, user_id, ten, loai, noi_dung, trang, created_ms) VALUES (?,?,?,?,?,?,?)',
      [row.id, row.userId, row.ten || null, row.loai, row.noiDung, row.trang || null, row.createdMs]);
  }
  res.json({ ok: true, id: row.id });
}));

// Gop y cua chinh em (kem cau tra loi cua thay/co)
app.get('/api/gop-y/cua-toi', requireAuth, asyncRoute(async (req, res) => {
  const ds = (await docGopY(req.user.id)).slice(0, 30).map((x) => ({
    id: x.id, loai: x.loai, noiDung: x.noiDung, createdMs: x.createdMs, daDoc: !!x.docMs, traLoi: x.traLoi, traLoiMs: x.traLoiMs,
  }));
  res.json({ items: ds });
}));

app.get('/api/admin/gop-y', requireAdmin, asyncRoute(async (req, res) => {
  const ds = await docGopY(null);
  const ten = await loadUserNames();
  res.json({
    loai: GOP_Y_LOAI,
    chuaDoc: ds.filter((x) => !x.docMs).length,
    items: ds.map((x) => Object.assign({}, x, { ten: x.userId ? (ten[x.userId] || 'Học sinh') : (x.ten || 'Khách') })),
  });
}));

// Danh dau da doc / tra loi
app.post('/api/admin/gop-y/:id', requireAdmin, asyncRoute(async (req, res) => {
  const id = String(req.params.id || '');
  const now = Date.now();
  const traLoi = req.body && req.body.traLoi != null ? String(req.body.traLoi).trim().slice(0, 1000) : null;
  const daDoc = req.body && req.body.daDoc === false ? false : true;
  if (!USE_DB) {
    const d = readJsonFile(GOP_Y_FILE) || {};
    const x = (d.items || []).find((y) => y.id === id);
    if (!x) return res.status(404).json({ error: 'Không tìm thấy góp ý.' });
    x.docMs = daDoc ? (x.docMs || now) : null;
    if (traLoi != null) { x.traLoi = traLoi; x.traLoiMs = traLoi ? now : null; }
    writeJsonFile(GOP_Y_FILE, d);
  } else {
    const [r] = await dbPool.query('UPDATE gop_y SET doc_ms = ? WHERE id = ?', [daDoc ? now : null, id]);
    if (!r.affectedRows) return res.status(404).json({ error: 'Không tìm thấy góp ý.' });
    if (traLoi != null) await dbPool.query('UPDATE gop_y SET tra_loi = ?, tra_loi_ms = ? WHERE id = ?', [traLoi || null, traLoi ? now : null, id]);
  }
  res.json({ ok: true });
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

// ================================================================
// LOP HOC + BAI GIAO
// - Moi lop co 1 ma lop; hoc sinh nhap ma 1 lan la vao lop (moi hoc sinh 1 lop).
// - Giao vien (trang quan tri) giao bai: 1 bai hoc + han nop cho 1 hoac nhieu lop.
// - "Da lam" = da lam bai Kiem tra cuoi (phan "final") cua bai do. Thoi diem lam
//   lan dau duoc ghi lai (lesson_done) khi dong bo diem -> biet dung han hay nop muon.
// ================================================================
const CLASSES_FILE = path.join(DATA_DIR, 'classes.json');
const CLASS_CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'; // bo O/0/I/1 de khoi doc nham
const LESSON_URL_RE = /^\/lessons\/[a-z0-9-]+\.html$/;

function newClassCode() {
  let s = '';
  for (let i = 0; i < 6; i++) s += CLASS_CODE_CHARS[crypto.randomInt(CLASS_CODE_CHARS.length)];
  return s;
}
function newShortId() { return crypto.randomBytes(6).toString('hex'); }

async function initClassTables() {
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS class_roster (' +
      'id VARCHAR(16) PRIMARY KEY, class_id VARCHAR(16) NOT NULL, name VARCHAR(100) NOT NULL, ' +
      'user_id VARCHAR(36) NULL, sort INT NOT NULL DEFAULT 0, INDEX idx_class (class_id), INDEX idx_user (user_id)' +
    ')'
  );
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS classes (' +
      'id VARCHAR(16) PRIMARY KEY, name VARCHAR(100) NOT NULL, code VARCHAR(12) NOT NULL UNIQUE, created_ms BIGINT NOT NULL' +
    ')'
  );
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS class_members (' +
      'user_id VARCHAR(36) PRIMARY KEY, class_id VARCHAR(16) NOT NULL, joined_ms BIGINT NOT NULL, ' +
      'INDEX idx_class (class_id), ' +
      'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
    ')'
  );
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS assignments (' +
      'id VARCHAR(16) PRIMARY KEY, class_id VARCHAR(16) NOT NULL, lesson_url VARCHAR(120) NOT NULL, ' +
      'note VARCHAR(300) NULL, due_ms BIGINT NOT NULL, created_ms BIGINT NOT NULL, INDEX idx_class (class_id)' +
    ')'
  );
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS part_done (' +
      'user_id VARCHAR(36) NOT NULL, lesson_url VARCHAR(120) NOT NULL, part VARCHAR(20) NOT NULL, ' +
      'first_ms BIGINT NOT NULL, correct INT NOT NULL DEFAULT 0, total INT NOT NULL DEFAULT 0, last_ms BIGINT NOT NULL, ' +
      'PRIMARY KEY (user_id, lesson_url, part), ' +
      'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
    ')'
  );
  // Bai da lam truoc khi co tinh nang giao theo phan: giu nguyen moc thoi gian
  await dbPool.query(
    "INSERT IGNORE INTO part_done (user_id, lesson_url, part, first_ms, correct, total, last_ms) " +
      "SELECT user_id, lesson_url, 'final', first_ms, correct, total, last_ms FROM lesson_done"
  );
  try {
    await dbPool.query('ALTER TABLE assignments ADD COLUMN parts VARCHAR(200) NULL');
  } catch (err) {
    if (err.code !== 'ER_DUP_FIELDNAME') throw err;
  }
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS lesson_done (' +
      'user_id VARCHAR(36) NOT NULL, lesson_url VARCHAR(120) NOT NULL, first_ms BIGINT NOT NULL, ' +
      'correct INT NOT NULL DEFAULT 0, total INT NOT NULL DEFAULT 0, last_ms BIGINT NOT NULL, ' +
      'PRIMARY KEY (user_id, lesson_url), ' +
      'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
    ')'
  );
  // Kiem tra mieng dau gio: moi lan goi 1 em len bang ghi 1 dong
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS oral_checks (' +
      'id VARCHAR(16) PRIMARY KEY, class_id VARCHAR(16) NOT NULL, roster_id VARCHAR(16) NOT NULL, ' +
      'ms BIGINT NOT NULL, score INT NULL, ' +
      'INDEX idx_class (class_id), INDEX idx_roster (roster_id)' +
    ')'
  );
  // So diem thay/co cham tay: xay dung bai (cong tung diem mot khi em gio tay),
  // diem giua ki va cuoi ki. Diem chuyen can KHONG luu o day — no duoc tinh tu
  // so bai tap da hoan thanh nen luon tu khop voi thuc te.
  await dbPool.query(
    'CREATE TABLE IF NOT EXISTS class_points (' +
      'id VARCHAR(16) PRIMARY KEY, class_id VARCHAR(16) NOT NULL, roster_id VARCHAR(16) NOT NULL, ' +
      'kind VARCHAR(12) NOT NULL, value INT NOT NULL, ms BIGINT NOT NULL, note VARCHAR(200) NULL, ' +
      'INDEX idx_class (class_id), INDEX idx_roster (roster_id), INDEX idx_kind (kind)' +
    ')'
  );
}

function readClassFile() {
  const d = readJsonFile(CLASSES_FILE) || {};
  return { classes: d.classes || [], members: d.members || {}, assignments: d.assignments || [], roster: d.roster || [], done: d.done || {}, oral: d.oral || [], points: d.points || [] };
}

// Moi hoc sinh mo trang chu deu goi /api/class/me; 6 lop x 50 em co the doc lien
// tuc nen giu ket qua trong bo nho vai giay. Moi thay doi (tao lop, giao bai, vao
// lop, sua danh sach...) deu goi classChanged() nen giao vien bam xong la thay ngay.
const CLASS_CACHE_MS = 5000;
let classCache = null;
let classCacheAt = 0;
let userNameCache = null;
let userNameCacheAt = 0;
function classChanged() { classCache = null; }
function writeClassFile(d) {
  writeJsonFile(CLASSES_FILE, d);
  classChanged();
}
// Chi can id + ten de hien bang lop (khong doc ca bang users kem mat khau ma hoa)
async function loadUserNames() {
  if (userNameCache && Date.now() - userNameCacheAt < 60000) return userNameCache;
  const map = {};
  if (!USE_DB) (await loadUsers()).forEach((u) => { map[u.id] = u.name; });
  else {
    const [rows] = await dbPool.query('SELECT id, name FROM users');
    rows.forEach((r) => { map[r.id] = r.name; });
  }
  userNameCache = map;
  userNameCacheAt = Date.now();
  return map;
}

async function classDbWrite(sql, params) {
  const r = await dbPool.query(sql, params);
  classChanged();
  return r;
}

// Toan bo trang thai lop (du nho: vai lop, vai tram hoc sinh)
async function loadClassState() {
  if (classCache && Date.now() - classCacheAt < CLASS_CACHE_MS) return classCache;
  const st = await readClassState();
  classCache = st;
  classCacheAt = Date.now();
  return st;
}
async function readClassState() {
  if (!USE_DB) return readClassFile();
  const [c] = await dbPool.query('SELECT * FROM classes ORDER BY created_ms');
  const [m] = await dbPool.query('SELECT * FROM class_members');
  const [a] = await dbPool.query('SELECT * FROM assignments ORDER BY due_ms');
  const [ro] = await dbPool.query('SELECT * FROM class_roster ORDER BY sort');
  const members = {};
  m.forEach((r) => { members[r.user_id] = { classId: r.class_id, joinedMs: Number(r.joined_ms) }; });
  return {
    classes: c.map((r) => ({ id: r.id, name: r.name, code: r.code, createdMs: Number(r.created_ms) })),
    members,
    assignments: a.map((r) => ({ id: r.id, classId: r.class_id, lessonUrl: r.lesson_url, note: r.note || '', parts: r.parts ? String(r.parts).split(',') : [], dueMs: Number(r.due_ms), createdMs: Number(r.created_ms) })),
    roster: ro.map((r) => ({ id: r.id, classId: r.class_id, name: r.name, userId: r.user_id || null, sort: r.sort })),
  };
}
// Cac phan cua 1 bai hoc ma giao vien co the giao rieng (khoa = ten phan trong
// lessonScores cua hoc sinh). Giao "ca bai" = chi can lam Kiem tra cuoi ('final').
const LESSON_PARTS = ['warmup', 'vocab', 'flash', 'grammar', 'dialog', 'roleplay', 'listen', 'game', 'speak', 'translate', 'workbook', 'page', 'final'];

// 1 muc diem cua 1 phan -> { correct, total } hay null (phan chi danh dau da xem)
function partScore(v) {
  if (!v || typeof v !== 'object') return null;
  if (typeof v.correct === 'number' && typeof v.total === 'number') return { correct: v.correct, total: v.total };
  if (v.done) return { correct: 0, total: 0 };
  let c = 0, t = 0, any = false;
  Object.keys(v).forEach((k) => {
    const x = partScore(v[k]);
    if (!x) return;
    any = true; c += x.correct; t += x.total;
  });
  return any ? { correct: c, total: t } : null;
}
// Diem 1 bai cua hoc sinh -> { vocab: {correct,total}, game: {...}, ... }
function partsOfLesson(scores) {
  const out = {};
  Object.keys(scores || {}).forEach((k) => {
    let key = k;
    if (k.indexOf('page-') === 0) key = 'page';
    else if (k.indexOf('workbook') === 0) key = 'workbook';
    else if (k === 'quiz' || k === 'quick') key = 'final';
    if (LESSON_PARTS.indexOf(key) === -1) return;
    const x = partScore(scores[k]);
    if (!x) return;
    const cur = out[key];
    out[key] = cur ? { correct: cur.correct + x.correct, total: cur.total + x.total } : x;
  });
  return out;
}

// Hoc sinh da lam nhung phan nao, lan dau luc nao (de biet dung han hay nop muon)
async function loadPartDone(userIds) {
  if (!USE_DB) {
    const all = readClassFile().done;
    const out = {};
    (userIds || Object.keys(all)).forEach((id) => { if (all[id]) out[id] = all[id]; });
    return out;
  }
  let rows;
  if (userIds) {
    if (!userIds.length) return {};
    [rows] = await dbPool.query('SELECT * FROM part_done WHERE user_id IN (?)', [userIds]);
  } else {
    [rows] = await dbPool.query('SELECT * FROM part_done');
  }
  const out = {};
  rows.forEach((r) => {
    const byUrl = out[r.user_id] = out[r.user_id] || {};
    (byUrl[r.lesson_url] = byUrl[r.lesson_url] || {})[r.part] = {
      firstMs: Number(r.first_ms), correct: r.correct, total: r.total, lastMs: Number(r.last_ms),
    };
  });
  return out;
}

// Goi khi dong bo diem: ghi lai tung phan hoc sinh da lam (lan dau + diem moi nhat)
async function recordPartsDone(userId, lessonScores) {
  const now = Date.now();
  const items = [];
  Object.keys(lessonScores || {}).forEach((url) => {
    if (!LESSON_URL_RE.test(url)) return;
    const parts = partsOfLesson(lessonScores[url]);
    Object.keys(parts).forEach((part) => {
      items.push({
        url, part,
        correct: Math.max(0, Math.round(parts[part].correct || 0)),
        total: Math.max(0, Math.round(parts[part].total || 0)),
      });
    });
  });
  if (!items.length) return;
  if (!USE_DB) {
    const d = readClassFile();
    const mine = d.done[userId] || (d.done[userId] = {});
    let changed = false;
    items.forEach((it) => {
      const byUrl = mine[it.url] = mine[it.url] || {};
      const cur = byUrl[it.part];
      if (!cur) { byUrl[it.part] = { firstMs: now, correct: it.correct, total: it.total, lastMs: now }; changed = true; }
      else if (cur.correct !== it.correct || cur.total !== it.total) { cur.correct = it.correct; cur.total = it.total; cur.lastMs = now; changed = true; }
    });
    if (changed) writeClassFile(d);
    return;
  }
  for (const it of items) {
    await dbPool.query(
      'INSERT INTO part_done (user_id, lesson_url, part, first_ms, correct, total, last_ms) VALUES (?,?,?,?,?,?,?) ' +
        'ON DUPLICATE KEY UPDATE last_ms = IF(correct <> VALUES(correct) OR total <> VALUES(total), VALUES(last_ms), last_ms), ' +
        'correct = VALUES(correct), total = VALUES(total)',
      [userId, it.url, it.part, now, it.correct, it.total, now]
    );
  }
}

// Trang thai 1 bai giao voi 1 hoc sinh.
// a.parts rong = giao ca bai (chi tinh Kiem tra cuoi); co parts = phai lam du cac phan do.
function assignmentStatus(a, doneOfLesson, now) {
  const need = a.parts && a.parts.length ? a.parts : ['final'];
  const have = need.filter((p) => doneOfLesson && doneOfLesson[p]);
  const info = { need: need.length, doneParts: have.length };
  if (have.length < need.length) {
    return Object.assign(info, { status: now > a.dueMs ? 'overdue' : 'todo' });
  }
  // xong phan cuoi cung luc nao -> so voi han nop
  const doneMs = Math.max.apply(null, have.map((p) => doneOfLesson[p].firstMs));
  let correct = 0, total = 0;
  have.forEach((p) => { correct += doneOfLesson[p].correct || 0; total += doneOfLesson[p].total || 0; });
  return Object.assign(info, {
    status: doneMs <= a.dueMs ? 'done' : 'late',
    correct, total, doneMs,
  });
}

// Han nop: het ngay YYYY-MM-DD (23:59:59 gio VN)
function dueMsFromDate(s) {
  if (typeof s !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return null;
  const ms = Date.parse(s + 'T23:59:59Z') - VN_OFFSET_MS;
  return Number.isFinite(ms) ? ms : null;
}

// ---------- Phia hoc sinh ----------
const joinAttempts = new Map(); // userId -> [ms...] chong do ma lop

// Buoi 1, 2, 3... = thu tu giao bai cua lop
function numberedAssignments(st, classId) {
  return st.assignments.filter((a) => a.classId === classId)
    .sort((a, b) => a.createdMs - b.createdMs || a.dueMs - b.dueMs)
    .map((a, i) => Object.assign({ session: i + 1 }, a));
}

// Bang lop cho hoc sinh: danh sach lop (theo thu tu giao vien dan) + ai da lam bai nao.
// Chi tra ten va trang thai (khong tra email / diem cua ban khac).
async function classBoard(st, classId, meId) {
  const list = numberedAssignments(st, classId);
  const roster = st.roster.filter((r) => r.classId === classId).sort((a, b) => a.sort - b.sort);
  const memberIds = Object.keys(st.members).filter((u) => st.members[u].classId === classId);
  const linked = new Set(roster.map((r) => r.userId).filter(Boolean));
  const nameById = await loadUserNames();
  const done = await loadPartDone(memberIds);
  const now = Date.now();
  function marks(userId) {
    if (!userId || !st.members[userId] || st.members[userId].classId !== classId) return null;
    const d = done[userId] || {};
    // Tra ca SO CAU DUNG de bang lop hien duoc diem, khong chi hien dau tick.
    // Van khong tra email hay bat cu gi khac cua ban khac.
    return list.map((a) => {
      const s = assignmentStatus(a, d[a.lessonUrl], now);
      return { s: s.status, c: s.correct || 0, t: s.total || 0 };
    });
  }
  // So diem cua lop — de hoc sinh thay minh duoc cong bao nhieu
  const tongDiem = sumPoints(await readClassPoints(), classId);
  // Diem goi len bang dau gio — cham o che do lop thi len thang bang nay
  const tongMieng = sumOral(await readOralChecks(), classId);
  function diem(r) {
    const m = marks(r.userId);
    // Chuyen can = so bai tap da lam xong; tinh thang tu marks nen luon khop bang tren
    const chuyenCan = m ? m.filter((x) => x.s === 'done' || x.s === 'late').length : 0;
    const p = tongDiem[r.id] || { build: 0, mid: null, final: null };
    const o = tongMieng[r.id] || { mieng: null, so: 0, lan: null };
    return { chuyenCan, build: p.build, mid: p.mid, final: p.final,
      mieng: o.mieng, miengSo: o.so, miengLan: o.lan };
  }
  const rows = roster.map((r) => ({ name: r.name, me: !!meId && r.userId === meId, joined: !!(r.userId && st.members[r.userId] && st.members[r.userId].classId === classId), marks: marks(r.userId), diem: diem(r) }));
  // Hoc sinh da vao lop nhung chua co ten trong danh sach (hoac lop chua co danh sach)
  memberIds.filter((u) => !linked.has(u) && nameById[u]).sort((a, b) => nameById[a].localeCompare(nameById[b], 'vi'))
    .forEach((u) => {
      const m = marks(u);
      // Em nay chua co ten trong danh sach nen khong co so diem cham tay,
      // nhung chuyen can van tinh duoc tu bai da lam.
      rows.push({
        name: nameById[u], me: u === meId, joined: true, extra: roster.length > 0, marks: m,
        diem: { chuyenCan: m ? m.filter((x) => x.s === 'done' || x.s === 'late').length : 0, build: 0, mid: null, final: null, mieng: null, miengSo: 0, miengLan: null }
      });
    });
  return {
    sessions: list.map((a) => ({ id: a.id, session: a.session, lessonUrl: a.lessonUrl, dueMs: a.dueMs })),
    rows,
  };
}

app.get('/api/class/me', requireAuth, asyncRoute(async (req, res) => {
  const st = await loadClassState();
  const mem = st.members[req.user.id];
  const cls = mem && st.classes.find((c) => c.id === mem.classId);
  if (!cls) return res.json({ class: null, assignments: [] });
  const done = (await loadPartDone([req.user.id]))[req.user.id] || {};
  const now = Date.now();
  const list = numberedAssignments(st, cls.id).map((a) => Object.assign({
    id: a.id, session: a.session, lessonUrl: a.lessonUrl, note: a.note, parts: a.parts || [], dueMs: a.dueMs, createdMs: a.createdMs,
  }, assignmentStatus(a, done[a.lessonUrl], now)));
  const roster = st.roster.filter((r) => r.classId === cls.id);
  const mine = roster.find((r) => r.userId === req.user.id);
  const out = { class: { id: cls.id, name: cls.name }, assignments: list, board: await classBoard(st, cls.id, req.user.id) };
  // Lop co danh sach ma em chua chon ten minh -> hien o chon ten
  if (roster.length && !mine) {
    out.needPick = true;
    out.roster = roster.sort((a, b) => a.sort - b.sort).map((r) => ({ id: r.id, name: r.name, taken: !!r.userId }));
  }
  res.json(out);
}));

// Gan 1 ten trong danh sach lop cho tai khoan (ten da co nguoi chon thi khong chon duoc)
async function claimRoster(st, userId, classId, rosterId) {
  const r = st.roster.find((x) => x.id === rosterId && x.classId === classId);
  if (!r) return 'Không tìm thấy tên này trong danh sách lớp.';
  if (r.userId && r.userId !== userId) return 'Tên này đã có bạn khác chọn. Nếu đó là tên của em, báo thầy cô để gỡ nhé.';
  if (!USE_DB) {
    const d = readClassFile();
    d.roster.forEach((x) => { if (x.userId === userId) x.userId = null; });
    d.roster.find((x) => x.id === rosterId).userId = userId;
    writeClassFile(d);
  } else {
    await classDbWrite('UPDATE class_roster SET user_id = NULL WHERE user_id = ?', [userId]);
    const [r2] = await classDbWrite('UPDATE class_roster SET user_id = ? WHERE id = ? AND (user_id IS NULL OR user_id = ?)', [userId, rosterId, userId]);
    if (!r2.affectedRows) return 'Tên này vừa có bạn khác chọn.';
  }
  return null;
}

async function setMember(userId, classId) {
  const now = Date.now();
  if (!USE_DB) {
    const d = readClassFile();
    d.members[userId] = { classId, joinedMs: now };
    d.roster.forEach((x) => { if (x.userId === userId && x.classId !== classId) x.userId = null; });
    writeClassFile(d);
  } else {
    await classDbWrite('INSERT INTO class_members (user_id, class_id, joined_ms) VALUES (?,?,?) ON DUPLICATE KEY UPDATE class_id = VALUES(class_id), joined_ms = VALUES(joined_ms)',
      [userId, classId, now]);
    await classDbWrite('UPDATE class_roster SET user_id = NULL WHERE user_id = ? AND class_id <> ?', [userId, classId]);
  }
}

// B1: gui { code } -> lop co danh sach thi tra ve danh sach de chon ten (chua vao lop).
// B2: gui { code, rosterId } -> chon ten + vao lop. Lop khong co danh sach thi vao luon o B1.
app.post('/api/class/join', requireAuth, asyncRoute(async (req, res) => {
  const now = Date.now();
  const recent = (joinAttempts.get(req.user.id) || []).filter((t) => now - t < 10 * 60 * 1000);
  if (recent.length >= 10) return res.status(429).json({ error: 'Bạn nhập sai mã quá nhiều lần. Đợi 10 phút rồi thử lại nhé.' });
  const code = String(req.body?.code || '').toUpperCase().replace(/[^A-Z0-9]/g, '').slice(0, 12);
  const st = await loadClassState();
  const cls = code && st.classes.find((c) => c.code === code);
  if (!cls) {
    recent.push(now);
    joinAttempts.set(req.user.id, recent);
    return res.status(404).json({ error: 'Không tìm thấy lớp có mã này. Kiểm tra lại mã thầy cô đưa nhé.' });
  }
  const roster = st.roster.filter((r) => r.classId === cls.id).sort((a, b) => a.sort - b.sort);
  const rosterId = req.body?.rosterId ? String(req.body.rosterId) : '';
  if (roster.length && !rosterId) {
    return res.json({ needPick: true, class: { id: cls.id, name: cls.name },
      roster: roster.map((r) => ({ id: r.id, name: r.name, taken: !!r.userId && r.userId !== req.user.id })) });
  }
  if (roster.length) {
    const err = await claimRoster(st, req.user.id, cls.id, rosterId);
    if (err) return res.status(409).json({ error: err });
  }
  await setMember(req.user.id, cls.id);
  res.json({ ok: true, class: { id: cls.id, name: cls.name } });
}));

// Hoc sinh da o trong lop nhung chua chon ten (lop them danh sach sau)
app.post('/api/class/claim', requireAuth, asyncRoute(async (req, res) => {
  const st = await loadClassState();
  const mem = st.members[req.user.id];
  if (!mem) return res.status(400).json({ error: 'Em chưa vào lớp nào.' });
  const err = await claimRoster(st, req.user.id, mem.classId, String(req.body?.rosterId || ''));
  if (err) return res.status(409).json({ error: err });
  res.json({ ok: true });
}));

// ---------- Danh sach lop (giao vien dan tu Excel / Word) ----------
// Bo so thu tu, cot rong; dong copy tu Excel co nhieu cot thi lay cot dai nhat khong phai so.
function cleanRosterNames(raw) {
  const out = [];
  String(raw || '').split(/\r?\n/).forEach((line) => {
    const cells = line.split('\t').map((c) => c.trim()).filter(Boolean);
    let name = cells.length > 1
      ? cells.filter((c) => !/^[\d.,/\-\s]+$/.test(c) && !/@/.test(c)).sort((a, b) => b.length - a.length)[0] || ''
      : (cells[0] || '');
    name = name.replace(/^\s*\d+\s*[.)\-:]\s*/, '').replace(/\s+/g, ' ').trim().slice(0, 100);
    // Ten viet HOA toan bo (hay gap khi copy tu so diem) -> "Luong Kim Chi"
    if (name && name === name.toLocaleUpperCase('vi') && /[A-ZÀ-Ỹ]/.test(name)) {
      name = name.toLocaleLowerCase('vi').replace(/(^|\s)(\S)/g, (m, sp, ch) => sp + ch.toLocaleUpperCase('vi'));
    }
    if (name && !/^(stt|họ và tên|họ tên|ho va ten|tên|name)$/i.test(name)) out.push(name);
  });
  return out.slice(0, 300);
}

app.post('/api/admin/roster', requireAdmin, asyncRoute(async (req, res) => {
  const classId = String(req.body?.classId || '');
  const st = await loadClassState();
  if (!st.classes.some((c) => c.id === classId)) return res.status(404).json({ error: 'Không tìm thấy lớp.' });
  const names = cleanRosterNames(req.body?.text);
  if (!names.length) return res.status(400).json({ error: 'Không đọc được tên nào. Mỗi dòng 1 học sinh nhé.' });
  const existing = st.roster.filter((r) => r.classId === classId);
  const have = new Set(existing.map((r) => r.name.toLowerCase()));
  let sort = existing.reduce((m, r) => Math.max(m, r.sort), 0);
  const added = [];
  const skipped = [];
  names.forEach((n) => {
    if (have.has(n.toLowerCase())) { skipped.push(n); return; }
    have.add(n.toLowerCase());
    added.push({ id: newShortId(), classId, name: n, userId: null, sort: ++sort });
  });
  if (!USE_DB) {
    const d = readClassFile();
    d.roster = d.roster.concat(added);
    writeClassFile(d);
  } else {
    for (const r of added) {
      await classDbWrite('INSERT INTO class_roster (id, class_id, name, user_id, sort) VALUES (?,?,?,?,?)', [r.id, r.classId, r.name, null, r.sort]);
    }
  }
  res.json({ ok: true, added: added.length, skipped });
}));

// Sua ten / go lien ket tai khoan
app.post('/api/admin/roster/:id', requireAdmin, asyncRoute(async (req, res) => {
  const st = await loadClassState();
  const r = st.roster.find((x) => x.id === req.params.id);
  if (!r) return res.status(404).json({ error: 'Không tìm thấy tên này.' });
  const name = req.body?.name != null ? String(req.body.name).replace(/\s+/g, ' ').trim().slice(0, 100) : r.name;
  if (!name) return res.status(400).json({ error: 'Tên không được để trống.' });
  let userId = req.body?.unlink ? null : r.userId;
  if (req.body?.userId) {
    const users = await loadUsers();
    if (!users.some((u) => u.id === String(req.body.userId))) return res.status(404).json({ error: 'Không tìm thấy tài khoản.' });
    userId = String(req.body.userId);
    const other = st.roster.find((x) => x.userId === userId && x.id !== r.id);
    if (other) return res.status(409).json({ error: 'Tài khoản này đang gắn với tên "' + other.name + '". Gỡ ở đó trước nhé.' });
    await setMember(userId, r.classId);
  }
  if (!USE_DB) {
    const d = readClassFile();
    const x = d.roster.find((y) => y.id === r.id);
    x.name = name; x.userId = userId;
    writeClassFile(d);
  } else {
    await classDbWrite('UPDATE class_roster SET name = ?, user_id = ? WHERE id = ?', [name, userId, r.id]);
  }
  res.json({ ok: true });
}));

app.delete('/api/admin/roster/:id', requireAdmin, asyncRoute(async (req, res) => {
  if (!USE_DB) {
    const d = readClassFile();
    d.roster = d.roster.filter((x) => x.id !== req.params.id);
    writeClassFile(d);
  } else {
    await classDbWrite('DELETE FROM class_roster WHERE id = ?', [req.params.id]);
  }
  res.json({ ok: true });
}));

// ---------- Phia giao vien (trang quan tri) ----------
app.get('/api/admin/classes', requireAdmin, asyncRoute(async (req, res) => {
  const st = await loadClassState();
  const done = await loadPartDone(Object.keys(st.members));
  res.json(Object.assign({}, st, { done, now: Date.now() }));
}));

app.post('/api/admin/classes', requireAdmin, asyncRoute(async (req, res) => {
  const name = String(req.body?.name || '').trim().slice(0, 100);
  if (!name) return res.status(400).json({ error: 'Nhập tên lớp.' });
  const st = await loadClassState();
  const used = new Set(st.classes.map((c) => c.code));
  let code = newClassCode();
  while (used.has(code)) code = newClassCode();
  const cls = { id: newShortId(), name, code, createdMs: Date.now() };
  if (!USE_DB) {
    const d = readClassFile();
    d.classes.push(cls);
    writeClassFile(d);
  } else {
    await classDbWrite('INSERT INTO classes (id, name, code, created_ms) VALUES (?,?,?,?)', [cls.id, cls.name, cls.code, cls.createdMs]);
  }
  res.json({ ok: true, class: cls });
}));

// Doi ten / tao ma moi
app.post('/api/admin/classes/:id', requireAdmin, asyncRoute(async (req, res) => {
  const st = await loadClassState();
  const cls = st.classes.find((c) => c.id === req.params.id);
  if (!cls) return res.status(404).json({ error: 'Không tìm thấy lớp.' });
  const name = req.body?.name != null ? String(req.body.name).trim().slice(0, 100) : cls.name;
  if (!name) return res.status(400).json({ error: 'Tên lớp không được để trống.' });
  let code = cls.code;
  if (req.body?.newCode) {
    const used = new Set(st.classes.map((c) => c.code));
    do { code = newClassCode(); } while (used.has(code));
  }
  if (!USE_DB) {
    const d = readClassFile();
    const c = d.classes.find((x) => x.id === cls.id);
    c.name = name; c.code = code;
    writeClassFile(d);
  } else {
    await classDbWrite('UPDATE classes SET name = ?, code = ? WHERE id = ?', [name, code, cls.id]);
  }
  res.json({ ok: true, class: Object.assign({}, cls, { name, code }) });
}));

// Xoa lop: xoa ca bai giao cua lop; hoc sinh trong lop tro ve "chua vao lop"
app.delete('/api/admin/classes/:id', requireAdmin, asyncRoute(async (req, res) => {
  const id = req.params.id;
  if (!USE_DB) {
    const d = readClassFile();
    d.classes = d.classes.filter((c) => c.id !== id);
    d.assignments = d.assignments.filter((a) => a.classId !== id);
    d.roster = d.roster.filter((x) => x.classId !== id);
    Object.keys(d.members).forEach((u) => { if (d.members[u].classId === id) delete d.members[u]; });
    writeClassFile(d);
  } else {
    await classDbWrite('DELETE FROM assignments WHERE class_id = ?', [id]);
    await classDbWrite('DELETE FROM class_roster WHERE class_id = ?', [id]);
    await classDbWrite('DELETE FROM class_members WHERE class_id = ?', [id]);
    await classDbWrite('DELETE FROM classes WHERE id = ?', [id]);
  }
  res.json({ ok: true });
}));

// Chuyen hoc sinh sang lop khac (classId) hoac cho ra khoi lop (classId rong)
app.post('/api/admin/members', requireAdmin, asyncRoute(async (req, res) => {
  const userId = String(req.body?.userId || '');
  const classId = req.body?.classId ? String(req.body.classId) : '';
  const users = await loadUsers();
  if (!users.some((u) => u.id === userId)) return res.status(404).json({ error: 'Không tìm thấy học sinh.' });
  const st = await loadClassState();
  if (classId && !st.classes.some((c) => c.id === classId)) return res.status(404).json({ error: 'Không tìm thấy lớp.' });
  if (classId) {
    await setMember(userId, classId);
  } else if (!USE_DB) {
    const d = readClassFile();
    delete d.members[userId];
    d.roster.forEach((x) => { if (x.userId === userId) x.userId = null; });
    writeClassFile(d);
  } else {
    await classDbWrite('DELETE FROM class_members WHERE user_id = ?', [userId]);
    await classDbWrite('UPDATE class_roster SET user_id = NULL WHERE user_id = ?', [userId]);
  }
  res.json({ ok: true });
}));

// Chi nhan ten phan co that trong bai; rong = giao ca bai (Kiem tra cuoi)
function cleanParts(v) {
  if (!Array.isArray(v)) return [];
  const out = [];
  v.slice(0, 20).forEach((p) => {
    const k = String(p);
    if (LESSON_PARTS.indexOf(k) !== -1 && out.indexOf(k) === -1) out.push(k);
  });
  return out.length === 1 && out[0] === 'final' ? [] : out;
}

// Giao 1 bai cho 1 hoac nhieu lop
/* ---------- Kiem tra mieng dau gio ----------
   Che do lop hoc goi hai API nay: doc danh sach kem lan goi gan nhat de quay
   ten cong bang (uu tien em lau chua goi), va ghi diem ngay sau khi em tra loi. */
async function readOralChecks() {
  if (!USE_DB) return readClassFile().oral || [];
  const [rows] = await dbPool.query('SELECT * FROM oral_checks ORDER BY ms');
  return rows.map((r) => ({ id: r.id, classId: r.class_id, rosterId: r.roster_id, ms: Number(r.ms), score: r.score == null ? null : Number(r.score) }));
}

// ---------------- So diem cua lop ----------------
// build = xay dung bai (cong 1 diem moi lan gio tay), mid = giua ki, final = cuoi ki
const POINT_KINDS = ['build', 'mid', 'final'];

async function readClassPoints() {
  if (!USE_DB) return readClassFile().points || [];
  const [rows] = await dbPool.query('SELECT * FROM class_points ORDER BY ms');
  return rows.map((r) => ({
    id: r.id, classId: r.class_id, rosterId: r.roster_id,
    kind: r.kind, value: Number(r.value), ms: Number(r.ms), note: r.note || ''
  }));
}

// Gop so diem cua ca lop lai: { rosterId: {build, mid, final} }
// build cong don; mid/final lay ban ghi MOI NHAT vi thay/co co the sua lai diem.
function sumPoints(points, classId) {
  const out = {};
  points.filter((p) => p.classId === classId).forEach((p) => {
    const e = out[p.rosterId] = out[p.rosterId] || { build: 0, mid: null, final: null, midMs: 0, finalMs: 0 };
    if (p.kind === 'build') e.build += p.value;
    else if (p.kind === 'mid' && p.ms >= e.midMs) { e.mid = p.value; e.midMs = p.ms; }
    else if (p.kind === 'final' && p.ms >= e.finalMs) { e.final = p.value; e.finalMs = p.ms; }
  });
  return out;
}

// Diem kiem tra dau gio (goi ten len bang). Hoc sinh nhin thay diem TRUNG BINH
// va so lan da goi, khong hien tung lan mot de khong bien bang lop thanh so
// theo doi tung em.
function sumOral(checks, classId) {
  const out = {};
  checks.filter((c) => c.classId === classId && typeof c.score === 'number').forEach((c) => {
    const e = out[c.rosterId] = out[c.rosterId] || { so: 0, tong: 0, lan: null, lanMs: 0 };
    e.so++; e.tong += c.score;
    if (c.ms >= e.lanMs) { e.lan = c.score; e.lanMs = c.ms; }
  });
  Object.keys(out).forEach((k) => {
    out[k].mieng = Math.round((out[k].tong / out[k].so) * 10) / 10;
  });
  return out;
}

// ---------------- Kiem tra khoa AI (chi quan tri) ----------------
// De thay/co tu biet khoa con dung duoc khong, khong phai doan qua thong bao
// hien cho hoc sinh. KHONG bao gio tra ve gia tri khoa.
app.get('/api/admin/ai-status', requireAdmin, asyncRoute(async (req, res) => {
  const cauHinh = {
    groq: !!GROQ_API_KEY,
    gemini: !!GEMINI_API_KEY,
    anthropic: !!anthropic
  };
  const dangDung = aiProviders().map((p) => p.name);
  if (!dangDung.length) {
    return res.json({
      ok: false,
      cauHinh,
      dangDung,
      ketLuan: 'Chua co khoa AI nao tren may chu. Them GROQ_API_KEY (hoac GEMINI_API_KEY) vao bien moi truong roi khoi dong lai.'
    });
  }
  // Goi thu mot cau that ngan de biet khoa con han muc khong
  let ok = false; let loi = null;
  const thu = { write() {}, end() {}, headersSent: true };
  try {
    await aiProviders()[0].stream(thu, [{ role: 'user', content: 'ping' }]);
    ok = true;
  } catch (e) {
    loi = { status: e.status || null, message: String(e.message || e).slice(0, 300) };
  }
  res.json({
    ok,
    cauHinh,
    dangDung,
    loi,
    ketLuan: ok
      ? 'Khoa AI dang hoat dong binh thuong (' + dangDung[0] + ').'
      : (loi && loi.status === 402 ? 'Khoa ' + dangDung[0] + ' da HET TIN DUNG — can nap them hoac doi khoa khac.'
        : loi && (loi.status === 401 || loi.status === 403) ? 'Khoa ' + dangDung[0] + ' KHONG HOP LE hoac da bi thu hoi.'
        : 'Khoa ' + dangDung[0] + ' goi thu bi loi — xem phan loi ben duoi.')
  });
}));

app.get('/api/admin/oral', requireAdmin, asyncRoute(async (req, res) => {
  const st = await loadClassState();
  const checks = await readOralChecks();
  const classId = String(req.query.classId || '');
  const byRoster = {};
  checks.forEach((c) => {
    const k = byRoster[c.rosterId] || (byRoster[c.rosterId] = { times: 0, lastMs: 0, lastScore: null, scores: [] });
    k.times++;
    if (c.ms >= k.lastMs) { k.lastMs = c.ms; k.lastScore = c.score; }
    if (typeof c.score === 'number') k.scores.push(c.score);
  });
  const classes = st.classes.map((c) => ({ id: c.id, name: c.name, size: st.roster.filter((r) => r.classId === c.id).length }));
  const roster = !classId ? [] : st.roster
    .filter((r) => r.classId === classId)
    .sort((a, b) => a.sort - b.sort)
    .map((r) => {
      const k = byRoster[r.id] || { times: 0, lastMs: 0, lastScore: null, scores: [] };
      const avg = k.scores.length ? Math.round((k.scores.reduce((s, x) => s + x, 0) / k.scores.length) * 10) / 10 : null;
      return { id: r.id, name: r.name, no: r.sort, times: k.times, lastMs: k.lastMs, lastScore: k.lastScore, avg: avg };
    });
  res.json({ classes, roster });
}));

app.post('/api/admin/oral', requireAdmin, asyncRoute(async (req, res) => {
  const classId = String(req.body?.classId || '');
  const rosterId = String(req.body?.rosterId || '');
  const raw = req.body?.score;
  const score = raw === null || raw === undefined || raw === '' ? null : Math.max(0, Math.min(10, Math.round(Number(raw))));
  if (score !== null && !Number.isFinite(score)) return res.status(400).json({ error: 'Điểm không hợp lệ.' });
  const st = await loadClassState();
  const r = st.roster.find((x) => x.id === rosterId && x.classId === classId);
  if (!r) return res.status(404).json({ error: 'Không tìm thấy học sinh trong lớp này.' });
  const row = { id: newShortId(), classId, rosterId, ms: Date.now(), score };
  if (!USE_DB) {
    const d = readClassFile();
    d.oral = (d.oral || []).concat(row);
    writeClassFile(d);
  } else {
    await classDbWrite('INSERT INTO oral_checks (id, class_id, roster_id, ms, score) VALUES (?,?,?,?,?)',
      [row.id, row.classId, row.rosterId, row.ms, row.score]);
  }
  res.json({ ok: true });
}));

// ---------------- So diem lop (chi quan tri) ----------------
// Bon cot diem:
//   chuyenCan — TU DONG: moi bai tap duoc giao ma em hoan thanh = +1
//   build     — thay/co bam cong tay khi em gio tay xay dung bai
//   mid/final — diem kiem tra giua ki / cuoi ki, thay/co nhap
app.get('/api/admin/points', requireAdmin, asyncRoute(async (req, res) => {
  const st = await loadClassState();
  const classId = String(req.query.classId || (st.classes[0] && st.classes[0].id) || '');
  const classes = st.classes.map((c) => ({
    id: c.id, name: c.name,
    size: st.roster.filter((r) => r.classId === c.id).length
  }));
  if (!classId) return res.json({ classes, classId: '', sessions: 0, roster: [] });

  const list = numberedAssignments(st, classId);
  const roster = st.roster.filter((r) => r.classId === classId).sort((a, b) => a.sort - b.sort);
  const memberIds = Object.keys(st.members).filter((u) => st.members[u].classId === classId);
  const done = await loadPartDone(memberIds);
  const points = await readClassPoints();
  const tong = sumPoints(points, classId);
  const mieng = sumOral(await readOralChecks(), classId);
  const now = Date.now();

  const out = roster.map((r, i) => {
    const d = (r.userId && st.members[r.userId] && st.members[r.userId].classId === classId)
      ? (done[r.userId] || {}) : null;
    // Chuyen can = so bai tap da lam xong (dung han hoac muon deu tinh)
    let chuyenCan = 0;
    if (d) {
      list.forEach((a) => {
        const s = assignmentStatus(a, d[a.lessonUrl], now).status;
        if (s === 'done' || s === 'late') chuyenCan++;
      });
    }
    const p = tong[r.id] || { build: 0, mid: null, final: null };
    const o = mieng[r.id] || { mieng: null, so: 0, lan: null };
    return {
      id: r.id, no: i + 1, name: r.name,
      joined: !!d,
      chuyenCan, tongBai: list.length,
      build: p.build, mid: p.mid, final: p.final,
      mieng: o.mieng, miengSo: o.so, miengLan: o.lan
    };
  });
  res.json({ classes, classId, sessions: list.length, roster: out });
}));

app.post('/api/admin/points', requireAdmin, asyncRoute(async (req, res) => {
  const classId = String(req.body?.classId || '');
  const rosterId = String(req.body?.rosterId || '');
  const kind = String(req.body?.kind || '');
  if (POINT_KINDS.indexOf(kind) < 0) return res.status(400).json({ error: 'Loại điểm không hợp lệ.' });

  const st = await loadClassState();
  const r = st.roster.find((x) => x.id === rosterId && x.classId === classId);
  if (!r) return res.status(404).json({ error: 'Không tìm thấy học sinh trong lớp này.' });

  let value;
  if (kind === 'build') {
    // Cong (hoac tru) diem xay dung bai — moi lan ghi mot dong de con xem lai duoc
    value = Math.round(Number(req.body?.value));
    if (!Number.isFinite(value) || value === 0) value = 1;
    value = Math.max(-5, Math.min(5, value));
  } else {
    value = Math.round(Number(req.body?.value));
    if (!Number.isFinite(value)) return res.status(400).json({ error: 'Điểm không hợp lệ.' });
    value = Math.max(0, Math.min(10, value));
  }

  const row = {
    id: newShortId(), classId, rosterId, kind, value, ms: Date.now(),
    note: String(req.body?.note || '').trim().slice(0, 200)
  };
  if (!USE_DB) {
    const d = readClassFile();
    d.points = (d.points || []).concat(row);
    writeClassFile(d);
  } else {
    await classDbWrite(
      'INSERT INTO class_points (id, class_id, roster_id, kind, value, ms, note) VALUES (?,?,?,?,?,?,?)',
      [row.id, row.classId, row.rosterId, row.kind, row.value, row.ms, row.note]
    );
  }
  // Tra ve tong moi de giao dien cap nhat ngay, khong phai goi lai ca bang
  const tong = sumPoints(await readClassPoints(), classId)[rosterId] || { build: 0, mid: null, final: null };
  res.json({ ok: true, build: tong.build, mid: tong.mid, final: tong.final });
}));

app.post('/api/admin/assignments', requireAdmin, asyncRoute(async (req, res) => {
  const classIds = Array.isArray(req.body?.classIds) ? req.body.classIds.map(String).slice(0, 50) : [];
  const lessonUrl = String(req.body?.lessonUrl || '');
  const dueMs = dueMsFromDate(req.body?.dueDate);
  const note = String(req.body?.note || '').trim().slice(0, 300);
  const parts = cleanParts(req.body?.parts);
  if (!LESSON_URL_RE.test(lessonUrl)) return res.status(400).json({ error: 'Chọn bài học cần giao.' });
  if (!dueMs) return res.status(400).json({ error: 'Chọn hạn nộp.' });
  const st = await loadClassState();
  const valid = classIds.filter((id) => st.classes.some((c) => c.id === id));
  if (!valid.length) return res.status(400).json({ error: 'Chọn ít nhất 1 lớp.' });
  const now = Date.now();
  const created = valid.map((classId) => ({ id: newShortId(), classId, lessonUrl, note, parts, dueMs, createdMs: now }));
  if (!USE_DB) {
    const d = readClassFile();
    d.assignments = d.assignments.concat(created);
    writeClassFile(d);
  } else {
    for (const a of created) {
      await classDbWrite('INSERT INTO assignments (id, class_id, lesson_url, note, parts, due_ms, created_ms) VALUES (?,?,?,?,?,?,?)',
        [a.id, a.classId, a.lessonUrl, a.note || null, a.parts.length ? a.parts.join(',') : null, a.dueMs, a.createdMs]);
    }
  }
  res.json({ ok: true, assignments: created });
}));

// Sua han nop / ghi chu
app.post('/api/admin/assignments/:id', requireAdmin, asyncRoute(async (req, res) => {
  const st = await loadClassState();
  const a = st.assignments.find((x) => x.id === req.params.id);
  if (!a) return res.status(404).json({ error: 'Không tìm thấy bài giao.' });
  const dueMs = req.body?.dueDate != null ? dueMsFromDate(req.body.dueDate) : a.dueMs;
  if (!dueMs) return res.status(400).json({ error: 'Hạn nộp không hợp lệ.' });
  const note = req.body?.note != null ? String(req.body.note).trim().slice(0, 300) : a.note;
  const parts = req.body?.parts != null ? cleanParts(req.body.parts) : a.parts;
  if (!USE_DB) {
    const d = readClassFile();
    const x = d.assignments.find((y) => y.id === a.id);
    x.dueMs = dueMs; x.note = note; x.parts = parts;
    writeClassFile(d);
  } else {
    await classDbWrite('UPDATE assignments SET due_ms = ?, note = ?, parts = ? WHERE id = ?', [dueMs, note || null, parts.length ? parts.join(',') : null, a.id]);
  }
  res.json({ ok: true });
}));

app.delete('/api/admin/assignments/:id', requireAdmin, asyncRoute(async (req, res) => {
  if (!USE_DB) {
    const d = readClassFile();
    d.assignments = d.assignments.filter((a) => a.id !== req.params.id);
    writeClassFile(d);
  } else {
    await classDbWrite('DELETE FROM assignments WHERE id = ?', [req.params.id]);
  }
  res.json({ ok: true });
}));

// Bao cao hoc tap cho giao vien: moi hoc sinh kem diem tung bai, sao, ngay hoc,
// phut hoc 30 ngay gan nhat, bai thi thu va tu can on. Chi tra cac truong can
// thiet (khong tra mat khau / salt).
app.get('/api/admin/report', requireAdmin, asyncRoute(async (req, res) => {
  const users = await loadUsers();
  const scores = await loadScores();
  const studyTime = loadStudyTime();
  const starById = {};
  (await loadAllStars()).forEach((s) => { starById[s.userId] = s; });
  let attempts = [];
  try { attempts = await listRankedExamAttempts({}); } catch (err) { attempts = []; }
  const examTitle = {};
  function titleOf(id) {
    if (!(id in examTitle)) {
      let t = id;
      try { const def = loadExamDef(id); if (def && def.title) t = def.title; } catch (err) { /* giu id */ }
      examTitle[id] = t;
    }
    return examTitle[id];
  }
  const classSt = await loadClassState();
  const today = vnDayKey();
  const week = vnWeekKey();
  const days30 = [];
  for (let i = 29; i >= 0; i--) days30.push(new Date(Date.now() - i * 86400000).toISOString().slice(0, 10));
  const students = users.map((u) => {
    const sc = scores[u.id] || {};
    const st = studyTime['u:' + u.id] || {};
    const s = starById[u.id];
    const daily = st.daily || {};
    const minutes30 = {};
    days30.forEach((d) => { if (daily[d]) minutes30[d] = Math.round(daily[d]); });
    const srs = sc.srs || {};
    const srsKeys = Object.keys(srs);
    const wrong = new Set();
    Object.values(sc.reviewWrongWords || {}).forEach((arr) => (arr || []).forEach((w) => wrong.add(w)));
    const updatedIso = sc.updatedAt ? new Date(sc.updatedAt).toISOString() : null;
    const lastActive = [st.lastActive || null, updatedIso].filter(Boolean).sort().pop() || null;
    return {
      id: u.id,
      name: u.name,
      email: u.email,
      level: u.level,
      classId: classSt.members[u.id] ? classSt.members[u.id].classId : null,
      createdAt: u.createdAt,
      lastActive,
      totalMinutes: Math.round(st.totalMinutes || 0),
      minutes30,
      studyDays: (sc.studyDays || []).slice(-120),
      streak: sc.streak || 0,
      totalCorrect: sc.totalCorrect || 0,
      totalQuestions: sc.totalQuestions || 0,
      lessonScores: sc.lessonScores || {},
      wrongWords: Array.from(wrong).slice(0, 60),
      srsTotal: srsKeys.length,
      srsDue: srsKeys.filter((k) => srs[k].due <= today).length,
      stars: s ? {
        total: s.total || 0,
        week: s.week === week ? (s.weekStars || 0) : 0,
        today: s.day === today ? starsToday(s) : 0,
      } : { total: 0, week: 0, today: 0 },
      exams: attempts.filter((a) => a.userId === u.id && a.submittedMs).map((a) => ({
        examId: a.examId, title: titleOf(a.examId), level: a.level, score: a.score, maxScore: a.maxScore,
        correct: a.correct, total: a.total, usedSec: a.usedSec, submittedMs: a.submittedMs,
      })).sort((a, b) => b.submittedMs - a.submittedMs),
    };
  });
  res.json({ generatedAt: Date.now(), today, students });
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
  const synth = (voiceName) => fetch(
    `https://texttospeech.googleapis.com/v1/text:synthesize?key=${encodeURIComponent(GOOGLE_TTS_API_KEY)}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: { text },
        voice: { languageCode: 'cmn-CN', name: voiceName },
        audioConfig: { audioEncoding: 'MP3', speakingRate: TTS_SPEED },
      }),
    }
  );

  try {
    let googleRes = await synth(TTS_VOICE);
    let data = await googleRes.json();
    // Giong chinh bi tu choi (ten sai, chua mo cho khu vuc...) thi doc bang
    // giong du phong, hoc sinh van nghe duoc thay vi mat tieng.
    if (!googleRes.ok && TTS_VOICE_FALLBACK && TTS_VOICE_FALLBACK !== TTS_VOICE) {
      console.warn(`[tts] giong "${TTS_VOICE}" loi (${data?.error?.message || googleRes.status}), doc bang "${TTS_VOICE_FALLBACK}"`);
      googleRes = await synth(TTS_VOICE_FALLBACK);
      data = await googleRes.json();
    }
    if (!googleRes.ok) {
      return res.status(502).json({ error: data?.error?.message || 'Lỗi từ Google TTS.' });
    }
    res.json({ audioContent: data.audioContent });
  } catch (err) {
    res.status(502).json({ error: 'Không gọi được dịch vụ TTS.' });
  }
});

// Liet ke giong doc tieng Trung dang dung duoc voi khoa hien tai, kem giong
// nao dang chay. Dung de chon giong moi ma khong phai doan ten.
app.get('/api/tts/voices', async (req, res) => {
  if (!GOOGLE_TTS_API_KEY) {
    return res.status(503).json({ error: 'TTS chưa được cấu hình (thiếu GOOGLE_TTS_API_KEY).' });
  }
  try {
    const r = await fetch(
      `https://texttospeech.googleapis.com/v1/voices?languageCode=cmn-CN&key=${encodeURIComponent(GOOGLE_TTS_API_KEY)}`
    );
    const data = await r.json();
    if (!r.ok) return res.status(502).json({ error: data?.error?.message || 'Lỗi từ Google TTS.' });
    res.json({
      dangDung: TTS_VOICE,
      tocDo: TTS_SPEED,
      giong: (data.voices || []).map((v) => ({
        ten: v.name,
        gioiTinh: v.ssmlGender,
        tanSo: v.naturalSampleRateHertz,
      })),
    });
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
