const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
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
app.use(express.static(PUBLIC_DIR, { extensions: ['html'] }));

// Simple content API so lesson/vocab data can later move server-side
// without changing the frontend contract.
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', time: new Date().toISOString() });
});

// ══════════════════════════════════════════════════════════════════
// Tai khoan hoc sinh THAT + Bang xep hang — luu vao file JSON tren
// server (khong co database rieng, day la giai phap don gian nhat
// khong can them dependency). KHONG chua du lieu gia — bang xep hang
// chi hien thi hoc sinh da that su dang ky va nop diem.
// ══════════════════════════════════════════════════════════════════
const DATA_DIR = path.join(__dirname, 'data');
const USERS_FILE = path.join(DATA_DIR, 'users.json');
const SCORES_FILE = path.join(DATA_DIR, 'scores.json');

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
function loadUsers() {
  return readJsonFile(USERS_FILE) || [];
}
function saveUsers(users) {
  writeJsonFile(USERS_FILE, users);
}
function loadScores() {
  return readJsonFile(SCORES_FILE) || {};
}
function saveScores(scores) {
  writeJsonFile(SCORES_FILE, scores);
}

function hashPassword(password, salt) {
  return crypto.scryptSync(password, salt, 64).toString('hex');
}
function makeToken() {
  return crypto.randomBytes(24).toString('hex');
}

function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Chưa đăng nhập.' });
  const users = loadUsers();
  const user = users.find((u) => u.sessionToken === token);
  if (!user) return res.status(401).json({ error: 'Phiên đăng nhập đã hết hạn, vui lòng đăng nhập lại.' });
  req.user = user;
  next();
}

function publicUser(user) {
  return { id: user.id, name: user.name, email: user.email, level: user.level };
}

app.post('/api/auth/register', (req, res) => {
  const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  const password = typeof req.body?.password === 'string' ? req.body.password : '';
  const level = typeof req.body?.level === 'string' ? req.body.level : 'hsk1';
  if (!name || !email || !password || password.length < 4) {
    return res.status(400).json({ error: 'Thiếu họ tên, email hoặc mật khẩu (tối thiểu 4 ký tự).' });
  }
  const users = loadUsers();
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
    sessionToken: makeToken(),
    createdAt: new Date().toISOString(),
  };
  users.push(user);
  saveUsers(users);
  res.json({ token: user.sessionToken, user: publicUser(user) });
});

app.post('/api/auth/login', (req, res) => {
  const email = typeof req.body?.email === 'string' ? req.body.email.trim().toLowerCase() : '';
  const password = typeof req.body?.password === 'string' ? req.body.password : '';
  if (!email || !password) return res.status(400).json({ error: 'Thiếu email hoặc mật khẩu.' });
  const users = loadUsers();
  const user = users.find((u) => u.email === email);
  if (!user || hashPassword(password, user.passwordSalt) !== user.passwordHash) {
    return res.status(401).json({ error: 'Email hoặc mật khẩu không đúng.' });
  }
  user.sessionToken = makeToken();
  saveUsers(users);
  res.json({ token: user.sessionToken, user: publicUser(user) });
});

app.get('/api/auth/me', requireAuth, (req, res) => {
  res.json({ user: publicUser(req.user) });
});

// Hoc sinh gui len tong diem THAT (tinh san o client tu du lieu that
// da luu), server chi luu lai de xep hang — khong tinh toan lai tu dau.
app.post('/api/scores/sync', requireAuth, (req, res) => {
  const totalCorrect = Number(req.body?.totalCorrect) || 0;
  const totalQuestions = Number(req.body?.totalQuestions) || 0;
  const streak = Number(req.body?.streak) || 0;
  const lessonsDone = Number(req.body?.lessonsDone) || 0;
  const scores = loadScores();
  scores[req.user.id] = {
    name: req.user.name,
    level: req.user.level,
    totalCorrect: Math.max(0, Math.round(totalCorrect)),
    totalQuestions: Math.max(0, Math.round(totalQuestions)),
    streak: Math.max(0, Math.round(streak)),
    lessonsDone: Math.max(0, Math.round(lessonsDone)),
    updatedAt: new Date().toISOString(),
  };
  saveScores(scores);
  res.json({ ok: true });
});

app.get('/api/leaderboard', (req, res) => {
  const scores = loadScores();
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
});

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
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Chinese learning website running on port ${PORT}`);
});
