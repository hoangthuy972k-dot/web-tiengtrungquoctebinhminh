// Game doi khang (keo co 1-1): giao vien mo phong tren man chieu, hoc sinh vao /dk
// bang ma phong tren dien thoai. May ghep cap ngau nhien; hai ban trong cap nhan
// cung bo cau theo cung thu tu, moi em tu lam theo nhip cua minh. Dung 1 cau = keo
// day 1 nac ve phia minh (vi tri day -5..+5), sai = khoa 1.5 giay (day khong doi).
// Keo toi +-5 la thang ngay; het gio / het cau thi ben nao keo duoc nhieu hon thang.
// Le mot ban thi ghep voi "Ro-bot" (dung ~60%, tra loi sau 2.5-5.5 giay ngau nhien).
// Phong chi luu trong bo nho — tat may chu la mat, du cho mot tiet hoc.
const crypto = require('crypto');

const MAX_PHONG = 200;
const MAX_HS = 80;
const MAX_CAU = 200;
const HET_HAN_MS = 4 * 60 * 60 * 1000;   // phong bo khong qua 4 tieng thi xoa
const TAO_MOI_GIO = 12;                   // moi IP tao toi da 12 phong / gio
const DAY_THANG = 5;                      // keo toi +-5 la thang
const KHOA_SAI_MS = 1500;                 // tra loi sai: khoa 1.5 giay
const BOT_DUNG = 0.6;
const BOT_CHAM = [2500, 5500];            // ro-bot tra loi sau 2.5..5.5 giay
const TEN_BOT = 'Rô-bốt 🤖';

const phong = new Map();     // ma -> phong
const taoTheoIp = new Map(); // ip -> [thoi diem tao]

function token() { return crypto.randomBytes(12).toString('hex'); }
function maMoi() {
  for (let i = 0; i < 50; i++) {
    const ma = String(crypto.randomInt(100000, 1000000));
    if (!phong.has(ma)) return ma;
  }
  return null;
}
function donPhong() {
  const now = Date.now();
  for (const [ma, p] of phong) if (now - p.cham > HET_HAN_MS) phong.delete(ma);
  for (const [ip, ds] of taoTheoIp) {
    const con = ds.filter((t) => now - t < 3600000);
    if (con.length) taoTheoIp.set(ip, con); else taoTheoIp.delete(ip);
  }
}
setInterval(donPhong, 10 * 60 * 1000).unref();

function sachTen(s) {
  return String(s || '').replace(/[\u0000-\u001f<>]/g, '').replace(/\s+/g, ' ').trim().slice(0, 20);
}
function chuoi(s, n) { return String(s == null ? '' : s).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').slice(0, n); }
function tron(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = crypto.randomInt(0, i + 1); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function ngauNhien(a, b) { return a + Math.floor(Math.random() * (b - a)); }
function soGiay(v, mac) { const n = Number(v); return Number.isFinite(n) ? Math.max(30, Math.min(600, Math.round(n))) : mac; }

// Kiem tra bo cau giao vien gui len: { zh, ctx, why, opts[2..4], dung }
function chuanBoCau(ds) {
  return (Array.isArray(ds) ? ds : []).slice(0, MAX_CAU).map((c) => {
    c = c || {};
    const opts = Array.isArray(c.opts) ? c.opts.slice(0, 4).map((o) => chuoi(o, 120)) : [];
    const dung = Number(c.dung);
    return { zh: chuoi(c.zh, 300), ctx: chuoi(c.ctx, 200), why: chuoi(c.why, 300), opts, dung: Number.isInteger(dung) && dung >= 0 && dung < opts.length ? dung : -1 };
  }).filter((c) => c.opts.length >= 2 && c.dung >= 0 && c.opts.every((o) => o.trim()));
}

/* ---------------- cap dau ---------------- */
// cap = { id, vong, pid: [pidA, pidB|null], ten: [..], day (+ ve phia A), i, keo, sai, khoa, thuTu, bot, kq, lyDo }
// kq: 'a' | 'b' | 'hoa' | null (dang dau)
function taoCap(p, hA, hB) {
  const c = {
    id: ++p.capId, vong: p.vong,
    pid: [hA.pid, hB ? hB.pid : null], ten: [hA.ten, hB ? hB.ten : TEN_BOT],
    day: 0, i: [0, 0], keo: [0, 0], sai: [0, 0], khoa: [0, 0],
    thuTu: tron([...Array(p.ds.length).keys()]),
    bot: hB ? null : { next: Date.now() + ngauNhien(BOT_CHAM[0] + 1000, BOT_CHAM[1] + 1000) },
    kq: null, lyDo: '', xongLuc: 0,
  };
  hA.cap = c.id; hA.doiCu = c.pid[1] || 'bot';
  if (hB) { hB.cap = c.id; hB.doiCu = hA.pid; }
  p.cap.push(c);
  return c;
}
function capCua(p, h) { return h.cap ? p.cap.find((c) => c.id === h.cap) || null : null; }
function benCua(c, h) { return c.pid[0] === h.pid ? 0 : c.pid[1] === h.pid ? 1 : -1; }

function ketCap(p, c, kq, lyDo) {
  if (c.kq) return;
  c.kq = kq; c.lyDo = lyDo; c.xongLuc = Date.now();
  [0, 1].forEach((s) => {
    const h = c.pid[s] && p.hs.get(c.pid[s]);
    if (!h) return;
    h.tran++;
    if (kq === 'hoa') h.hoa++;
    else if (kq === 'ab'[s]) h.thang++;
  });
}
function theoDay(c) { return c.day > 0 ? 'a' : c.day < 0 ? 'b' : 'hoa'; }
function hetCau(p, c, s) { return c.i[s] >= p.ds.length; }

// Ghi mot cau tra loi cua ben s (nguoi hoac ro-bot)
function traLoi(p, c, s, dung, now) {
  if (dung) {
    c.keo[s]++;
    c.day += s === 0 ? 1 : -1;
  } else {
    c.sai[s]++;
    c.khoa[s] = now + KHOA_SAI_MS;
  }
  c.i[s]++;
  if (Math.abs(c.day) >= DAY_THANG) ketCap(p, c, theoDay(c), 'keo');
  else if (hetCau(p, c, 0) && hetCau(p, c, 1)) ketCap(p, c, theoDay(c), 'hetcau');
}

// Cap nhat phong theo dong ho (goi moi lan co yeu cau): ro-bot tra loi, het gio
function chay(p) {
  if (p.pha !== 'choi') return;
  const now = Date.now();
  for (const c of p.cap) {
    if (c.kq || c.vong !== p.vong) continue;
    // ro-bot: xu ly lan luot cac lan tra loi da den han
    while (c.bot && !c.kq && !hetCau(p, c, 1) && c.bot.next <= Math.min(now, p.hetLuc)) {
      const luc = c.bot.next;
      const dung = Math.random() < BOT_DUNG;
      traLoi(p, c, 1, dung, luc);
      c.bot.next = luc + (dung ? 0 : KHOA_SAI_MS) + ngauNhien(BOT_CHAM[0], BOT_CHAM[1]);
    }
    if (!c.kq && now >= p.hetLuc) ketCap(p, c, theoDay(c), 'gio');
  }
  xemHetVong(p);
}
function xemHetVong(p) {
  if (p.pha === 'choi' && p.cap.every((c) => c.vong !== p.vong || c.kq)) { p.pha = 'nghi'; p.nghiLuc = Date.now(); }
}
function dungVong(p, lyDo) {
  for (const c of p.cap) if (c.vong === p.vong && !c.kq) ketCap(p, c, theoDay(c), lyDo);
  xemHetVong(p);
}

// Ghep cap: 'ngaunhien' (thu vai cach tron, tranh gap lai doi cu / gap ro-bot 2 lan lien)
// hoac 'thang' (xep theo so tran thang, keo — thang gap thang)
function ghepCap(p, xep) {
  const hs = [...p.hs.values()];
  let ds;
  if (xep === 'thang') {
    ds = tron(hs).sort((a, b) => b.thang - a.thang || b.keo - a.keo);
  } else {
    let tot = null, diemTot = Infinity;
    for (let k = 0; k < 24 && diemTot > 0; k++) {
      const thu = tron(hs);
      let d = 0;
      for (let j = 0; j + 1 < thu.length; j += 2) if (thu[j].doiCu === thu[j + 1].pid || thu[j + 1].doiCu === thu[j].pid) d++;
      if (thu.length % 2 && thu[thu.length - 1].doiCu === 'bot') d++;
      if (d < diemTot) { diemTot = d; tot = thu; }
    }
    ds = tot || hs;
  }
  p.cap = []; // chi giu cac cap cua vong hien tai
  for (const h of hs) h.cap = null;
  for (let j = 0; j < ds.length; j += 2) taoCap(p, ds[j], ds[j + 1] || null);
}

/* ---------------- bang xep hang ---------------- */
function bangXepHang(p) {
  return [...p.hs.values()]
    .sort((a, b) => b.thang - a.thang || b.keo - a.keo || a.sai - b.sai || a.vao - b.vao)
    .map((h, i) => ({ pid: h.pid, ten: h.ten, hang: i + 1, thang: h.thang, hoa: h.hoa, tran: h.tran, keo: h.keo, dung: h.dung, sai: h.sai }));
}

// Trang thai cho dien thoai hoc sinh (dap an dung KHONG gui o day)
function trangThaiHs(p, h) {
  const out = { pha: p.pha, vong: p.vong, ten: h.ten, thang: h.thang, keo: h.keo, soHs: p.hs.size, cap: null };
  const c = capCua(p, h);
  if (c && c.vong === p.vong && p.pha !== 'cho') {
    const s = benCua(c, h), d = 1 - s;
    const now = Date.now();
    const o = {
      id: c.id, doi: c.ten[d], doiBot: !c.pid[d],
      day: s === 0 ? c.day : -c.day,           // duong = ve phia em
      toi: c.keo[s], ban: c.keo[d], i: c.i[s], tong: p.ds.length, banI: c.i[d],
      khoa: Math.max(0, c.khoa[s] - now),
      conLai: p.pha === 'choi' ? Math.max(0, p.hetLuc - now) : 0,
      kq: c.kq ? (c.kq === 'hoa' ? 'hoa' : c.kq === 'ab'[s] ? 'thang' : 'thua') : null,
      lyDo: c.lyDo, cau: null,
    };
    if (!c.kq && !hetCau(p, c, s)) {
      const q = p.ds[c.thuTu[c.i[s]]];
      o.cau = { zh: q.zh, ctx: q.ctx, opts: q.opts };
    }
    out.cap = o;
  }
  if (p.pha === 'het') {
    const bxh = bangXepHang(p);
    out.hang = bxh.findIndex((r) => r.pid === h.pid) + 1;
    out.bxh = bxh.slice(0, 5).map((r) => ({ ten: r.ten, thang: r.thang, keo: r.keo }));
  }
  return out;
}

module.exports = function gan(app) {
  function layPhong(req, res) {
    const p = phong.get(String(req.params.ma || ''));
    if (!p) { res.status(404).json({ error: 'Không tìm thấy phòng. Em kiểm tra lại mã trên bảng nhé.' }); return null; }
    p.cham = Date.now();
    chay(p);
    return p;
  }
  function laGv(p, req, res) {
    const k = (req.body && req.body.khoa) || req.query.khoa;
    if (typeof k !== 'string' || k !== p.khoa) { res.status(403).json({ error: 'Không có quyền điều khiển phòng này.' }); return false; }
    return true;
  }
  function layHs(p, src, res) {
    const h = p.hs.get(String(src.pid || ''));
    if (!h || h.tok !== src.tok) { res.status(403).json({ error: 'Em chưa vào phòng hoặc đã bị mời ra.', raKhoi: true }); return null; }
    return h;
  }

  // ---- giao vien ----
  app.post('/api/dk/tao', (req, res) => {
    donPhong();
    // dia chi do proxy cua hosting them vao CUOI x-forwarded-for (giong live.js)
    const ip = String(req.headers['x-forwarded-for'] || '').split(',').pop().trim() || req.socket.remoteAddress || 'x';
    const dsIp = taoTheoIp.get(ip) || [];
    if (dsIp.length >= TAO_MOI_GIO) return res.status(429).json({ error: 'Tạo phòng nhiều quá, đợi một lúc rồi thử lại nhé.' });
    if (phong.size >= MAX_PHONG) return res.status(503).json({ error: 'Máy chủ đang có quá nhiều phòng, thử lại sau nhé.' });
    const b = req.body || {};
    const ds = chuanBoCau(b.cau);
    if (!ds.length) return res.status(400).json({ error: 'Chưa có câu hỏi trắc nghiệm nào hợp lệ.' });
    const ma = maMoi();
    if (!ma) return res.status(503).json({ error: 'Chưa tạo được mã phòng, thử lại nhé.' });
    dsIp.push(Date.now()); taoTheoIp.set(ip, dsIp);
    const p = {
      ma, khoa: token(), tao: Date.now(), cham: Date.now(), nhan: chuoi(b.nhan, 80),
      pha: 'cho', vong: 0, giay: soGiay(b.giay, 120), batDau: 0, hetLuc: 0, nghiLuc: 0,
      ds, hs: new Map(), soVao: 0, cap: [], capId: 0,
    };
    phong.set(ma, p);
    res.json({ ma, khoa: p.khoa, tong: ds.length });
  });

  app.get('/api/dk/:ma/gv', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    const now = Date.now();
    const trongVong = new Set();
    const cap = p.cap.filter((c) => c.vong === p.vong).map((c) => {
      c.pid.forEach((x) => { if (x) trongVong.add(x); });
      const ben = (s) => ({ pid: c.pid[s], ten: c.ten[s], bot: !c.pid[s], keo: c.keo[s], sai: c.sai[s], i: c.i[s], roi: !!c.pid[s] && !p.hs.has(c.pid[s]) });
      return { id: c.id, a: ben(0), b: ben(1), day: c.day, thang: c.kq, lyDo: c.lyDo };
    });
    res.json({
      pha: p.pha, vong: p.vong, nhan: p.nhan, tong: p.ds.length, giay: p.giay, soHs: p.hs.size,
      conLai: p.pha === 'choi' ? Math.max(0, p.hetLuc - now) : 0,
      ds: [...p.hs.values()].sort((a, b) => a.vao - b.vao).map((h) => ({ pid: h.pid, ten: h.ten, cho: p.pha !== 'cho' && !trongVong.has(h.pid) })),
      cap, bxh: bangXepHang(p),
    });
  });

  // Bat dau (hoac bat dau vong moi): { khoa, xep: 'ngaunhien' | 'thang', giay }
  app.post('/api/dk/:ma/batdau', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.pha === 'het') return res.status(410).json({ error: 'Phòng đã kết thúc.' });
    if (!p.hs.size) return res.status(400).json({ error: 'Chưa có bạn nào vào phòng.' });
    const b = req.body || {};
    if (p.pha === 'choi') dungVong(p, 'dung');
    p.giay = soGiay(b.giay, p.giay);
    p.vong++;
    ghepCap(p, b.xep === 'thang' ? 'thang' : 'ngaunhien');
    p.pha = 'choi';
    p.batDau = Date.now();
    p.hetLuc = p.batDau + p.giay * 1000;
    res.json({ ok: true, vong: p.vong, soCap: p.cap.length });
  });

  // Dung vong dang dau: cham ngay theo vi tri day
  app.post('/api/dk/:ma/dungvong', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.pha === 'choi') dungVong(p, 'dung');
    res.json({ ok: true, pha: p.pha });
  });

  app.post('/api/dk/:ma/duoi', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    const h = p.hs.get(String((req.body || {}).pid || ''));
    if (h) {
      const c = capCua(p, h);
      if (c && !c.kq && c.vong === p.vong) {
        const s = benCua(c, h);
        p.hs.delete(h.pid);
        ketCap(p, c, 'ab'[1 - s], 'bocuoc');  // ban con lai thang
        xemHetVong(p);
      } else p.hs.delete(h.pid);
    }
    res.json({ ok: true });
  });

  app.post('/api/dk/:ma/xong', (req, res) => {
    const p = layPhong(req, res); if (!p || !laGv(p, req, res)) return;
    if (p.pha === 'choi') dungVong(p, 'dung');
    p.pha = 'het';
    res.json({ ok: true, bxh: bangXepHang(p) });
  });

  // ---- hoc sinh ----
  app.post('/api/dk/:ma/vao', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    if (p.pha === 'het') return res.status(410).json({ error: 'Phòng này đã kết thúc.' });
    let ten = sachTen((req.body || {}).ten);
    if (!ten) return res.status(400).json({ error: 'Em nhập tên trước nhé.' });
    if (p.hs.size >= MAX_HS) return res.status(409).json({ error: 'Phòng đã đủ ' + MAX_HS + ' bạn.' });
    const trung = new Set([...p.hs.values()].map((h) => h.ten.toLowerCase()).concat([TEN_BOT.toLowerCase()]));
    if (trung.has(ten.toLowerCase())) {
      let n = 2;
      while (trung.has((ten.slice(0, 17) + ' ' + n).toLowerCase())) n++;
      ten = ten.slice(0, 17) + ' ' + n;
    }
    const h = { pid: token().slice(0, 10), tok: token(), ten, vao: ++p.soVao, cap: null, doiCu: '', thang: 0, hoa: 0, tran: 0, keo: 0, dung: 0, sai: 0 };
    p.hs.set(h.pid, h);
    res.json({ pid: h.pid, tok: h.tok, ten: h.ten });
  });

  app.get('/api/dk/:ma/hs', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    const h = layHs(p, req.query, res); if (!h) return;
    res.json(trangThaiHs(p, h));
  });

  // Tra loi: { pid, tok, i, chon }
  app.post('/api/dk/:ma/tl', (req, res) => {
    const p = layPhong(req, res); if (!p) return;
    const b = req.body || {};
    const h = layHs(p, b, res); if (!h) return;
    const c = capCua(p, h);
    if (p.pha !== 'choi' || !c || c.vong !== p.vong || c.kq) {
      return res.status(409).json({ error: 'Trận đấu đã dừng.', tt: trangThaiHs(p, h) });
    }
    const s = benCua(c, h);
    if (s < 0 || Number(b.i) !== c.i[s] || hetCau(p, c, s)) return res.status(409).json({ error: 'Câu này em làm rồi.', lech: true, tt: trangThaiHs(p, h) });
    const now = Date.now();
    if (now < c.khoa[s]) return res.status(429).json({ error: 'Đợi một chút rồi chọn tiếp nhé.', khoa: c.khoa[s] - now });
    const q = p.ds[c.thuTu[c.i[s]]];
    const chon = Number(b.chon);
    if (!Number.isInteger(chon) || chon < 0 || chon >= q.opts.length) return res.status(400).json({ error: 'Đáp án không hợp lệ.' });
    const dung = chon === q.dung;
    if (dung) { h.keo++; h.dung++; } else h.sai++;
    traLoi(p, c, s, dung, now);
    xemHetVong(p);
    res.json({ dung, dap: q.dung, why: q.why, tt: trangThaiHs(p, h) });
  });
};

// Cho bai kiem thu (khong dung trong may chu)
module.exports._phong = phong;
module.exports._hang = { DAY_THANG, KHOA_SAI_MS, TEN_BOT };
