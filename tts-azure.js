/* Giong doc tieng Trung tren may chu: lop "nha cung cap" cho /api/tts.
   ------------------------------------------------------------------
   - google : y het truoc day (Google Cloud TTS, TTS_VOICE / TTS_SPEED, giong du phong).
   - azure  : giong neural cua Azure Speech (goi mien phi ~500k ky tu / thang), doc theo
              nhip cua skill "chi dan giong doc tieng Trung" (SSML prosody + break):
                tu   (tu vung, danh sach tu)  : rate -30%, nghi 800 ms giua cac tu
                cau  (cau)                    : rate -15%, nghi 1000 ms giua cac cau
                doan (doan van / hoi thoai)   : rate  -8%, khong them nghi ngoai dau cau
              HSK1-2 / YCT cham them 5 diem, HSK5+ nhanh hon 5 diem; co gioi han
              (khong cham qua -45%: cham qua nghe mat tu nhien).
   Mac dinh la google cho toi khi co giao bam "Dung giong nay cho ca web" o /admin (tab 🔊 Giong doc).
   Azure loi / het han muc thang / thieu khoa -> Google -> loi 503 {fallback:'browser'} de trinh
   duyet tu doc bang giong cua may.

   Bo nho dem: sha256(nha cung cap + giong + che do + cap + toc do + chu) -> file mp3 trong
   data/tts-cache/ab/cd/<hash>.mp3 (gioi han dung luong, xoa file lau khong dung nhat) +
   LRU trong RAM cho cau hay doc. GET /api/tts tra thang audio/mpeg, co ETag va
   Cache-Control dai (khi ?v= khop cau hinh hien tai) de trinh duyet cung giu lai.

   KHONG BAO GIO ghi / in khoa ra log hay file.

   Thu tren may (khong co khoa Azure): TTS_AZURE_GIA=1 -> tra mp3 im lang thay cho Azure
   (TTS_AZURE_GIA=loi -> gia lap Azure loi). Chi co tac dung khi KHONG co khoa that.   */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

// Giong nghe thu o trang quan tri (gt: gioi tinh, de chon giong "ban hoi thoai" khac gioi)
const GIONG_AZURE = [
  { ten: 'zh-CN-XiaoxiaoNeural', gt: 'nu', mo: 'Nữ, ấm và rõ — giọng phổ biến nhất' },
  { ten: 'zh-CN-XiaochenNeural', gt: 'nu', mo: 'Nữ, nhẹ nhàng, tự nhiên như trò chuyện' },
  { ten: 'zh-CN-XiaoyiNeural', gt: 'nu', mo: 'Nữ, trẻ, tươi vui (hợp YCT / thiếu nhi)' },
  { ten: 'zh-CN-XiaohanNeural', gt: 'nu', mo: 'Nữ, điềm đạm, chậm rãi — giống cô giáo' },
  { ten: 'zh-CN-YunxiNeural', gt: 'nam', mo: 'Nam, trẻ, sáng sủa' },
  { ten: 'zh-CN-YunjianNeural', gt: 'nam', mo: 'Nam, trầm, mạnh mẽ' },
  { ten: 'zh-CN-YunyangNeural', gt: 'nam', mo: 'Nam, chuẩn như phát thanh viên' },
];
const TEN_GIONG = new Set(GIONG_AZURE.map((g) => g.ten));
const NHIP = { tu: -30, cau: -15, doan: -8 };        // % toc do co ban theo che do
const NGHI = { tu: 800, cau: 1000 };                 // ms nghi giua cac tu / cac cau
const MAC_DINH = { provider: 'google', voice: 'zh-CN-XiaoxiaoNeural', tinh: { tu: 0, cau: 0, doan: 0 }, phatAm: {} };

// Chi cho chu Han, pinyin (chu Latin + dau thanh), so, dau cau, khoang trang
const CHU_HOP_LE = /^[\p{Script=Han}A-Za-z0-9À-ɏ̀-ͯ\s　-〿＀-￯.,!?;:'"()\-…·•—~/|]+$/u;
const LA_HAN = /\p{Script=Han}/u;
const DAU_CAU = /[。！？!?，,；;：:]/;

function demHan(s) { let n = 0; for (const ch of s) if (LA_HAN.test(ch)) n++; return n; }
// Azure tinh phi: moi chu Han tinh 2 ky tu (uoc luong than trong), con lai 1
function kyTuTinhPhi(s) { let n = 0; for (const ch of s) n += LA_HAN.test(ch) ? 2 : 1; return n; }
function chonCheDo(t) {
  if (t.length > 40) return 'doan';
  if (demHan(t) <= 4 && !DAU_CAU.test(t)) return 'tu';
  return 'cau';
}
function buocCap(cap) {
  if (!cap) return 0;
  if (/^(hsk[12]|yct\d?)$/.test(cap)) return -5;
  if (/^hsk[5-9]$/.test(cap)) return 5;
  return 0;
}
function escXml(s) { return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
function escAttr(s) { return escXml(s).replace(/"/g, '&quot;'); }
function kep(n, a, b) { return Math.max(a, Math.min(b, n)); }

// Chu -> SSML (da escape), boc cac tu co trong bang sua cach doc bang <phoneme alphabet="sapi">
function chuSsml(text, phatAm) {
  const tu = Object.keys(phatAm || {}).filter(Boolean).sort((a, b) => b.length - a.length);
  if (!tu.length) return escXml(text);
  let out = '', i = 0;
  while (i < text.length) {
    const w = tu.find((x) => text.startsWith(x, i));
    if (w) { out += '<phoneme alphabet="sapi" ph="' + escAttr(phatAm[w]) + '">' + escXml(w) + '</phoneme>'; i += w.length; }
    else { out += escXml(text[i]); i++; }
  }
  return out;
}
// Noi dung ben trong <prosody> theo che do
function thanSsml(text, m, phatAm) {
  if (m === 'tu') {
    const ds = text.split(/[\s·•,，、;；/|]+/).filter(Boolean);
    return ds.map((x) => chuSsml(x, phatAm)).join('<break time="' + NGHI.tu + 'ms"/>');
  }
  if (m === 'cau') {
    const ds = text.match(/[^。！？!?；;…]+[。！？!?；;…]*/g) || [text];
    return ds.map((x) => x.trim()).filter(Boolean).map((x) => chuSsml(x, phatAm)).join('<break time="' + NGHI.cau + 'ms"/>');
  }
  return chuSsml(text, phatAm);
}
function tocDo(m, cap, tinh) {
  const r = kep(NHIP[m] + buocCap(cap) + kep(Number((tinh || {})[m]) || 0, -10, 10), -45, 10);
  return (r >= 0 ? '+' : '') + r + '%';
}
// segs: [{ voice, text, m, cap }] -> mot tai lieu SSML (nhieu giong = hoi thoai)
function taoSsml(segs, cfg) {
  return '<speak version="1.0" xmlns="http://www.w3.org/2001/10/synthesis" xml:lang="zh-CN">' +
    segs.map((s) => '<voice name="' + escAttr(s.voice) + '"><prosody rate="' + tocDo(s.m, s.cap, cfg.tinh) + '">' +
      thanSsml(s.text, s.m, cfg.phatAm) + '</prosody></voice>').join('') + '</speak>';
}

// mp3 im lang hop le (khung MPEG1 Layer III 128 kbps 44,1 kHz mono, du lieu 0) — chi dung khi thu
function mp3Cam(ms) {
  const khung = Buffer.alloc(417);
  khung[0] = 0xFF; khung[1] = 0xFB; khung[2] = 0x90; khung[3] = 0xC4;
  const n = Math.max(16, Math.ceil(ms / 26.12));
  return Buffer.concat(Array.from({ length: n }, () => khung));
}

module.exports = function ganTts(app, d) {
  const AZ_KEY = d.AZURE_SPEECH_KEY || '';
  const AZ_REGION = /^[a-z0-9-]{2,40}$/i.test(d.AZURE_SPEECH_REGION || '') ? d.AZURE_SPEECH_REGION : '';
  const AZ_THAT = !!(AZ_KEY && AZ_REGION);
  const AZ_GIA = AZ_THAT ? '' : String(process.env.TTS_AZURE_GIA || '');
  const AZ_CO = AZ_THAT || AZ_GIA === '1' || AZ_GIA === 'loi';
  const GG_KEY = d.GOOGLE_TTS_API_KEY || '';
  const HAN_MUC = Math.max(0, Number(process.env.TTS_AZURE_THANG_MAX) || 450000); // dung goi Azure khi toi muc nay
  const GOI_FREE = 500000;
  const AZ_PHUT = Math.max(1, Number(process.env.TTS_AZURE_PHUT) || 18); // goi mien phi bi chan neu goi qua day (~20 / phut)
  const CACHE_DIR = path.join(d.DATA_DIR, 'tts-cache');
  const CACHE_MAX = Math.max(0.01, Number(process.env.TTS_CACHE_MB) || 300) * 1024 * 1024;
  const KV_FILE = path.join(d.DATA_DIR, 'cai_dat_web.json');

  /* ---------------- cai dat web (MySQL khi co, file JSON khi chay local) ---------------- */
  let cfg = JSON.parse(JSON.stringify(MAC_DINH));
  let thang = { k: '', kyTu: 0, lan: 0, loi: 0 };
  const thangNay = () => new Date().toISOString().slice(0, 7); // Azure tinh theo thang (UTC)
  async function docKv(k) {
    if (!d.USE_DB) return (d.readJsonFile(KV_FILE) || {})[k] || null;
    const [rows] = await d.db().query('SELECT data FROM cai_dat_web WHERE k = ?', [k]);
    if (!rows.length) return null;
    try { return JSON.parse(rows[0].data); } catch (e) { return null; }
  }
  async function ghiKv(k, v) {
    if (!d.USE_DB) { const all = d.readJsonFile(KV_FILE) || {}; all[k] = v; d.writeJsonFile(KV_FILE, all); return; }
    await d.db().query('INSERT INTO cai_dat_web (k, data, updated_ms) VALUES (?,?,?) ON DUPLICATE KEY UPDATE data=VALUES(data), updated_ms=VALUES(updated_ms)',
      [k, JSON.stringify(v), Date.now()]);
  }
  function chuanCfg(c) {
    c = c || {};
    const tinh = {};
    ['tu', 'cau', 'doan'].forEach((m) => { tinh[m] = kep(Math.round(Number((c.tinh || {})[m]) || 0), -10, 10); });
    const phatAm = {};
    Object.keys(c.phatAm || {}).slice(0, 200).forEach((w) => {
      const ph = String(c.phatAm[w] || '').trim().toLowerCase();
      if (w && w.length <= 8 && LA_HAN.test(w) && /^[a-z0-9 ]{1,60}$/.test(ph)) phatAm[w] = ph;
    });
    return {
      provider: c.provider === 'azure' ? 'azure' : 'google',
      voice: TEN_GIONG.has(c.voice) ? c.voice : MAC_DINH.voice,
      tinh, phatAm,
    };
  }
  const phienBan = () => crypto.createHash('sha256').update(JSON.stringify(cfg)).digest('hex').slice(0, 10);
  let san = (async () => {
    try {
      if (d.USE_DB) await d.db().query('CREATE TABLE IF NOT EXISTS cai_dat_web (k VARCHAR(80) PRIMARY KEY, data MEDIUMTEXT NOT NULL, updated_ms BIGINT NOT NULL)');
      cfg = chuanCfg(await docKv('tts'));
      const t = await docKv('tts-thang');
      if (t && t.k === thangNay()) thang = { k: t.k, kyTu: +t.kyTu || 0, lan: +t.lan || 0, loi: +t.loi || 0 };
    } catch (e) { console.error('[tts] khong doc duoc cai dat giong doc:', e.message); }
  })();
  let henGhiThang = null;
  function ghiThangSau() {
    if (henGhiThang) return;
    henGhiThang = setTimeout(() => { henGhiThang = null; ghiKv('tts-thang', thang).catch((e) => console.error('[tts] ghi bo dem thang:', e.message)); }, 5000);
    if (henGhiThang.unref) henGhiThang.unref();
  }
  function lamMoiThang() { const k = thangNay(); if (thang.k !== k) thang = { k, kyTu: 0, lan: 0, loi: 0 }; }
  const hetHanMuc = (them) => { lamMoiThang(); return thang.kyTu + (them || 0) > HAN_MUC; };

  /* ---------------- bo nho dem: RAM (LRU) + dia (gioi han dung luong) ---------------- */
  const ram = new Map(); let ramBytes = 0;
  const RAM_MAX_SO = 300, RAM_MAX_BYTES = 24 * 1024 * 1024;
  function ramLay(k) { const b = ram.get(k); if (b) { ram.delete(k); ram.set(k, b); } return b || null; }
  function ramDat(k, b) {
    if (ram.has(k)) { ramBytes -= ram.get(k).length; ram.delete(k); }
    ram.set(k, b); ramBytes += b.length;
    while (ram.size > RAM_MAX_SO || ramBytes > RAM_MAX_BYTES) { const [k0, b0] = ram.entries().next().value; ram.delete(k0); ramBytes -= b0.length; }
  }
  const dia = new Map(); let diaBytes = 0; // hash -> { size, t (lan dung cuoi) }
  const duongDan = (k) => path.join(CACHE_DIR, k.slice(0, 2), k.slice(2, 4), k + '.mp3');
  (async () => { // dem lai file da co khi khoi dong
    try {
      for (const a of await fs.promises.readdir(CACHE_DIR)) {
        for (const b of await fs.promises.readdir(path.join(CACHE_DIR, a)).catch(() => [])) {
          for (const f of await fs.promises.readdir(path.join(CACHE_DIR, a, b)).catch(() => [])) {
            if (!/^[0-9a-f]{64}\.mp3$/.test(f)) continue;
            const st = await fs.promises.stat(path.join(CACHE_DIR, a, b, f)).catch(() => null);
            if (!st || dia.has(f.slice(0, 64))) continue;
            dia.set(f.slice(0, 64), { size: st.size, t: st.mtimeMs }); diaBytes += st.size;
          }
        }
      }
      donDia();
    } catch (e) { /* chua co thu muc */ }
  })();
  function donDia() {
    if (diaBytes <= CACHE_MAX) return;
    const ds = Array.from(dia.entries()).sort((a, b) => a[1].t - b[1].t);
    for (const [k, v] of ds) {
      if (diaBytes <= CACHE_MAX * 0.9) break;
      dia.delete(k); diaBytes -= v.size;
      fs.promises.unlink(duongDan(k)).catch(() => {});
    }
  }
  async function diaLay(k) {
    const e = dia.get(k);
    if (!e) return null;
    try {
      const b = await fs.promises.readFile(duongDan(k));
      const now = Date.now();
      if (now - e.t > 86400000) fs.promises.utimes(duongDan(k), new Date(), new Date()).catch(() => {}); // giu "lan dung cuoi" qua lan khoi dong
      e.t = now;
      return b;
    } catch (err) { dia.delete(k); diaBytes -= e.size; return null; }
  }
  async function diaDat(k, b) {
    try {
      const p = duongDan(k), tam = p + '.' + process.pid + '.tmp';
      await fs.promises.mkdir(path.dirname(p), { recursive: true });
      await fs.promises.writeFile(tam, b);
      await fs.promises.rename(tam, p);
      if (dia.has(k)) diaBytes -= dia.get(k).size;
      dia.set(k, { size: b.length, t: Date.now() }); diaBytes += b.length;
      donDia();
    } catch (e) { console.warn('[tts] khong ghi duoc bo nho dem:', e.message); }
  }
  async function cacheLay(k) {
    const r = ramLay(k);
    if (r) return r;
    const b = await diaLay(k);
    if (b) ramDat(k, b);
    return b;
  }
  function cacheDat(k, b) { ramDat(k, b); return diaDat(k, b); }

  /* ---------------- goi nha cung cap ---------------- */
  const azPhut = [];
  function azQuaNhanh() { const now = Date.now(); while (azPhut.length && now - azPhut[0] > 60000) azPhut.shift(); return azPhut.length >= AZ_PHUT; }
  async function goiAzure(ssml, giaMs) {
    azPhut.push(Date.now());
    if (!AZ_THAT) {
      if (AZ_GIA === '1') return mp3Cam(giaMs);
      throw new Error('azure (gia lap) loi');
    }
    const r = await fetch(`https://${AZ_REGION}.tts.speech.microsoft.com/cognitiveservices/v1`, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': AZ_KEY,
        'Content-Type': 'application/ssml+xml',
        'X-Microsoft-OutputFormat': 'audio-24khz-48kbitrate-mono-mp3',
        'User-Agent': 'hihan-tts',
      },
      body: ssml,
      signal: AbortSignal.timeout(15000),
    });
    if (!r.ok) throw new Error('azure HTTP ' + r.status);
    const b = Buffer.from(await r.arrayBuffer());
    if (b.length < 200) throw new Error('azure tra am thanh rong');
    return b;
  }
  // Google: dung y het /api/tts truoc day (giong chinh -> giong du phong)
  async function goiGoogle(text) {
    const synth = (voiceName) => fetch(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=${encodeURIComponent(GG_KEY)}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          input: { text },
          voice: { languageCode: 'cmn-CN', name: voiceName },
          audioConfig: { audioEncoding: 'MP3', speakingRate: d.TTS_SPEED },
        }),
      }
    );
    let res = await synth(d.TTS_VOICE);
    let data = await res.json();
    if (!res.ok && d.TTS_VOICE_FALLBACK && d.TTS_VOICE_FALLBACK !== d.TTS_VOICE) {
      console.warn(`[tts] giong "${d.TTS_VOICE}" loi (${data?.error?.message || res.status}), doc bang "${d.TTS_VOICE_FALLBACK}"`);
      res = await synth(d.TTS_VOICE_FALLBACK);
      data = await res.json();
    }
    if (!res.ok || !data.audioContent) { const e = new Error(data?.error?.message || 'Lỗi từ Google TTS.'); e.google = true; throw e; }
    return Buffer.from(data.audioContent, 'base64');
  }
  const dangTao = new Map(); // cung mot khoa dang tao -> dung chung 1 lan goi (ca lop nghe cung luc)
  function motLan(k, fn) {
    if (dangTao.has(k)) return dangTao.get(k);
    const p = fn().finally(() => dangTao.delete(k));
    dangTao.set(k, p);
    return p;
  }
  const bam = (...a) => crypto.createHash('sha256').update(a.join('\u0001')).digest('hex');
  function loi(status, msg, them) { const e = new Error(msg); e.status = status; Object.assign(e, them || {}); return e; }

  function khoaAzure(segs, c) {
    return bam('azure', JSON.stringify(segs.map((s) => [s.voice, s.m, s.cap || '', tocDo(s.m, s.cap, c.tinh), s.text])),
      JSON.stringify(c.phatAm || {}));
  }
  const khoaGoogle = (text) => bam('google', d.TTS_VOICE, String(d.TTS_SPEED), text);

  // Lay am thanh. o: { text, m, cap, segs?, voice?, tinh?, chiAzure?, khongAzure?, demIp? (ham goi khi phai tao moi) }
  // -> { buf, khoa, nguon: 'azure' | 'google', moi: bool }
  async function layAm(o) {
    await san;
    if (o.demIp) { const dem = o.demIp; let da = false; o.demIp = () => { if (da) return false; da = true; return dem(); }; } // 1 yeu cau chi tinh 1 lan
    const c = o.tinh ? Object.assign({}, cfg, { tinh: chuanCfg({ tinh: o.tinh }).tinh }) : cfg;
    const dungAzure = o.chiAzure || (c.provider === 'azure' && !o.khongAzure);
    let lyDo = '';
    if (dungAzure) {
      const voice = TEN_GIONG.has(o.voice) ? o.voice : c.voice;
      const segs = o.segs || [{ voice, text: o.text, m: o.m || chonCheDo(o.text), cap: o.cap || '' }];
      const k = khoaAzure(segs, c);
      const co = await cacheLay(k);
      if (co) return { buf: co, khoa: k, nguon: 'azure', moi: false };
      const phi = segs.reduce((n, s) => n + kyTuTinhPhi(s.text), 0);
      if (!AZ_CO) lyDo = 'thieu-khoa';
      else if (hetHanMuc(phi)) lyDo = 'het-han-muc';
      else if (azQuaNhanh()) lyDo = 'qua-nhanh';
      else {
        if (o.demIp && o.demIp()) throw loi(429, 'Đọc mẫu nhiều quá, đợi một lúc rồi nghe tiếp nhé.');
        try {
          const buf = await motLan(k, async () => {
            const b = await goiAzure(taoSsml(segs, c), 400 + 120 * segs.reduce((n, s) => n + s.text.length, 0));
            lamMoiThang(); thang.kyTu += phi; thang.lan++; ghiThangSau();
            await cacheDat(k, b);
            return b;
          });
          return { buf, khoa: k, nguon: 'azure', moi: true };
        } catch (e) {
          if (e.status) throw e;
          lamMoiThang(); thang.loi++; ghiThangSau();
          console.warn('[tts] Azure loi, chuyen sang giong du phong:', e.message);
          lyDo = 'azure-loi';
        }
      }
      if (o.chiAzure) {
        throw loi(503, lyDo === 'thieu-khoa' ? 'Máy chủ chưa có khoá Azure — kiểm tra biến AZURE_SPEECH_KEY / AZURE_SPEECH_REGION trên Hostinger.'
          : lyDo === 'het-han-muc' ? 'Đã dùng hết hạn mức Azure của tháng này.'
          : lyDo === 'qua-nhanh' ? 'Azure đang bận (gói miễn phí giới hạn số lần mỗi phút) — thử lại sau ít giây.'
          : 'Azure không trả âm thanh — thử lại sau.', { lyDo });
      }
    }
    if (!GG_KEY) throw loi(503, 'TTS chưa được cấu hình (thiếu GOOGLE_TTS_API_KEY).', { fallback: 'browser', lyDo });
    const text = o.segs ? o.segs.map((s) => s.text).join('') : o.text;
    const k = khoaGoogle(text);
    const co = await cacheLay(k);
    if (co) return { buf: co, khoa: k, nguon: 'google', moi: false, duPhong: dungAzure };
    if (o.demIp && o.demIp()) throw loi(429, 'Đọc mẫu nhiều quá, đợi một lúc rồi nghe tiếp nhé.');
    try {
      const buf = await motLan(k, async () => { const b = await goiGoogle(text); await cacheDat(k, b); return b; });
      return { buf, khoa: k, nguon: 'google', moi: true, duPhong: dungAzure };
    } catch (e) {
      throw loi(502, e.google ? e.message : 'Không gọi được dịch vụ TTS.', { fallback: 'browser' });
    }
  }

  function kiemChu(t) { return typeof t === 'string' && (t = t.trim()) && t.length <= 200 && CHU_HOP_LE.test(t) ? t : ''; }
  const kiemM = (m) => (m === 'tu' || m === 'cau' || m === 'doan' ? m : '');
  const kiemCap = (c) => (typeof c === 'string' && /^(hsk[1-9]|yct[1-6]?)$/.test(c) ? c : '');
  const nhe = (req) => d.quaNhieu('ttsc', d.clientIp(req), 3000, 3600 * 1000); // lay tu bo nho dem: tinh nhe
  const nang = (req) => () => d.quaNhieu('tts', d.clientIp(req), 300, 3600 * 1000); // phai tao moi: 300 / gio / IP

  /* ---------------- API cong khai ---------------- */
  // Cau hinh cho trinh duyet (doc-zh.js): co dung giong may chu khong. Cache 10 phut.
  app.get('/api/tts/cauhinh', async (req, res) => {
    await san;
    // sap het han muc (con duoi ~400 ky tu) ma khong co Google du phong -> trinh duyet tu doc, khoi goi may chu
    const on = cfg.provider === 'azure' && AZ_CO && (!hetHanMuc(400) || !!GG_KEY);
    res.setHeader('Cache-Control', 'public, max-age=600');
    res.json({ p: cfg.provider, on, v: phienBan() });
  });

  // GET /api/tts?t=...&m=tu|cau|doan&cap=hsk1&v=<phien ban cau hinh> -> audio/mpeg
  app.get('/api/tts', async (req, res) => {
    const t = kiemChu(req.query.t);
    if (!t) return res.status(400).set('Cache-Control', 'no-store').json({ error: 'Chữ không hợp lệ (chỉ chữ Hán, pinyin, số, dấu câu; tối đa 200 ký tự).', fallback: 'browser' });
    if (nhe(req)) return res.status(429).set('Cache-Control', 'no-store').json({ error: 'Đọc mẫu nhiều quá, đợi một lúc rồi nghe tiếp nhé.', fallback: 'browser' });
    try {
      const r = await layAm({ text: t, m: kiemM(req.query.m), cap: kiemCap(req.query.cap), demIp: nang(req) });
      const dungPhienBan = req.query.v === phienBan() && !r.duPhong;
      res.setHeader('Cache-Control', dungPhienBan ? 'public, max-age=31536000, immutable' : 'public, max-age=3600');
      const etag = '"' + r.khoa.slice(0, 32) + '"';
      res.setHeader('ETag', etag);
      res.setHeader('X-TTS-Nguon', r.nguon + (r.moi ? '' : '-cache'));
      if (String(req.headers['if-none-match'] || '').split(/\s*,\s*/).some((x) => x.replace(/^W\//, '') === etag)) return res.status(304).end();
      res.type('audio/mpeg').send(r.buf);
    } catch (e) {
      res.status(e.status || 502).set('Cache-Control', 'no-store').json({ error: e.message, fallback: 'browser' });
    }
  });

  // POST /api/tts { text, m?, cap? } -> { audioContent } (base64) — cho cac trang dang goi kieu cu
  app.post('/api/tts', async (req, res) => {
    const text = typeof req.body?.text === 'string' ? req.body.text.trim() : '';
    if (cfg.provider !== 'azure' && !GG_KEY) return res.status(503).json({ error: 'TTS chưa được cấu hình (thiếu GOOGLE_TTS_API_KEY).' });
    if (nhe(req)) return res.status(429).json({ error: 'Đọc mẫu nhiều quá, đợi một lúc rồi nghe tiếp nhé.' });
    if (!text || text.length > 200) return res.status(400).json({ error: 'Thiếu hoặc sai định dạng "text".' });
    try {
      // chu ngoai bang chu hop le (vd. tieng Viet) khong gui Azure: di thang Google nhu truoc
      const r = await layAm({ text, m: kiemM(req.body.m), cap: kiemCap(req.body.cap), demIp: nang(req),
        khongAzure: !CHU_HOP_LE.test(text) });
      res.json({ audioContent: r.buf.toString('base64') });
    } catch (e) {
      res.status(e.status || 502).json({ error: e.message });
    }
  });

  /* ---------------- trang quan tri: tab 🔊 Giong doc ---------------- */
  function tinhTrang() {
    lamMoiThang();
    return {
      provider: cfg.provider, voice: cfg.voice, tinh: cfg.tinh, phatAm: cfg.phatAm, v: phienBan(),
      azureCoKhoa: AZ_CO, azureGia: !AZ_THAT && AZ_CO, googleCoKhoa: !!GG_KEY,
      thang: { k: thang.k, kyTu: thang.kyTu, lan: thang.lan, loi: thang.loi, hanMuc: HAN_MUC, goiFree: GOI_FREE },
      cache: { soFile: dia.size, bytes: diaBytes, max: CACHE_MAX, ram: ram.size },
      giong: GIONG_AZURE, nhip: NHIP, nghi: NGHI,
    };
  }
  app.get('/api/admin/tts', d.requireAdmin, d.asyncRoute(async (req, res) => { await san; res.json(tinhTrang()); }));
  app.post('/api/admin/tts', d.requireAdmin, d.asyncRoute(async (req, res) => {
    await san;
    const b = req.body || {};
    const moi = chuanCfg(Object.assign({}, cfg, {
      provider: b.provider !== undefined ? b.provider : cfg.provider,
      voice: b.voice !== undefined ? b.voice : cfg.voice,
      tinh: b.tinh !== undefined ? b.tinh : cfg.tinh,
      phatAm: b.phatAm !== undefined ? b.phatAm : cfg.phatAm,
    }));
    if (b.voice !== undefined && !TEN_GIONG.has(b.voice)) return res.status(400).json({ error: 'Giọng không có trong danh sách.' });
    if (moi.provider === 'azure' && !AZ_CO) return res.status(400).json({ error: 'Máy chủ chưa có khoá Azure — kiểm tra biến AZURE_SPEECH_KEY / AZURE_SPEECH_REGION trên Hostinger.' });
    await ghiKv('tts', moi);
    cfg = moi;
    res.json(tinhTrang());
  }));
  // Nghe thu: { voice, m, text } hoac { voice, doiThoai: [cau1, cau2, ...] } (2 giong xen ke), tinh: {tu,cau,doan}
  app.post('/api/admin/tts/thu', d.requireAdmin, d.asyncRoute(async (req, res) => {
    const b = req.body || {};
    if (!TEN_GIONG.has(b.voice)) return res.status(400).json({ error: 'Giọng không có trong danh sách.' });
    let segs;
    if (Array.isArray(b.doiThoai)) {
      const g = GIONG_AZURE.find((x) => x.ten === b.voice);
      const ban = g.gt === 'nu' ? (b.voice === 'zh-CN-YunxiNeural' ? 'zh-CN-YunjianNeural' : 'zh-CN-YunxiNeural') : 'zh-CN-XiaoxiaoNeural';
      const ds = b.doiThoai.slice(0, 8).map(kiemChu);
      if (!ds.length || ds.some((x) => !x)) return res.status(400).json({ error: 'Câu hội thoại không hợp lệ.' });
      segs = ds.map((x, i) => ({ voice: i % 2 ? ban : b.voice, text: x, m: 'doan', cap: kiemCap(b.cap) }));
    } else {
      const t = kiemChu(b.text);
      if (!t) return res.status(400).json({ error: 'Chữ không hợp lệ.' });
      segs = [{ voice: b.voice, text: t, m: kiemM(b.m) || chonCheDo(t), cap: kiemCap(b.cap) }];
    }
    try {
      const r = await layAm({ segs, chiAzure: true, tinh: b.tinh });
      res.setHeader('Cache-Control', 'no-store');
      res.setHeader('X-TTS-Nguon', r.nguon + (r.moi ? '' : '-cache'));
      res.type('audio/mpeg').send(r.buf);
    } catch (e) {
      res.status(e.status || 502).json({ error: e.message, lyDo: e.lyDo || '' });
    }
  }));

  return { layAm, taoSsml, chonCheDo, tinhTrang, _kyTuTinhPhi: kyTuTinhPhi };
};
module.exports.taoSsml = taoSsml;
module.exports.chonCheDo = chonCheDo;
