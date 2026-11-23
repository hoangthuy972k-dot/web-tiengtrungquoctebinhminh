#!/usr/bin/env node
/* Kiem tra "📚 Truyen song ngu" (/truyen) — chay: node tools/kiem-truyen.js
   ---------------------------------------------------------------------
   Moi truyen trong public/js/truyen-data.js gan voi 1 cap + 1 bai ("đọc được sau bài N").
   Script nay bao loi (exit 1) neu:
     1. Co TU nao khong nam trong tu vung da hoc toi bai do (vocabData cua public/js/<cap>-bai-K-data.js,
        cong don: HSK2 (3.0) duoc dung het tu HSK1 (3.0), HSK3 dung het HSK1+2, …). Ngoai le: so dem
        (一 二 … 十 百 两…), dau cau, ten rieng khai bao trong truyen.ten.
     2. Pinyin sai: khong tach duoc thanh dung so am tiet / dau thanh sai cho / khac pinyin trong tu dien bai
        hoc (bo qua thanh cua 一, 不) / sai bien dieu 一, 不 theo quy uoc cua web
        (不 truoc thanh 4 -> bú, 一 truoc thanh 4 -> yí, truoc thanh 1-3 -> yì, so thu tu 第一 -> yī,
         thanh nhe bu / yi trong A不A, V一V, 听不懂… luon duoc chap nhan).
     3. Thieu nghia tieng Viet, so cau ngoai 6–15, cau hoi / dap an (DAP_AN trong truyen-doc.js) khong khop.

   Goi y khi viet truyen moi (tach tu san, lay pinyin + nghia tu bai hoc):
     node tools/kiem-truyen.js --goi-y hsk2v3 5 "我/想/给/奶奶/准备/一/个/礼物/。"
   -> in mang tu dang [['我','wǒ','tôi, mình'], …] de dan vao truyen-data.js (nho xem lai nghia theo ngu canh).
*/
'use strict';
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const ROOT = path.join(__dirname, '..');
const JS_DIR = path.join(ROOT, 'public', 'js');
const CAP_THU_TU = ['hsk1v3', 'hsk2v3', 'hsk3v3', 'hsk4v3'];
const DAU_CAU = /^[，。！？：；、“”‘’（）《》…—·,.!?:;"'()\s-]+$/;
const SO = /^[零一二两三四五六七八九十百千万]+$/;
const SO_PY = { 零: 'líng', 一: 'yī', 二: 'èr', 两: 'liǎng', 三: 'sān', 四: 'sì', 五: 'wǔ', 六: 'liù', 七: 'qī', 八: 'bā', 九: 'jiǔ', 十: 'shí', 百: 'bǎi', 千: 'qiān', 万: 'wàn' };
const SO_VN = { 零: 0, 一: 1, 二: 2, 两: 2, 三: 3, 四: 4, 五: 5, 六: 6, 七: 7, 八: 8, 九: 9 };
const HAN = /[㐀-鿿]/g;

/* ======================= Pinyin ======================= */
const DAU = { ā: ['a', 1], á: ['a', 2], ǎ: ['a', 3], à: ['a', 4], ē: ['e', 1], é: ['e', 2], ě: ['e', 3], è: ['e', 4],
  ī: ['i', 1], í: ['i', 2], ǐ: ['i', 3], ì: ['i', 4], ō: ['o', 1], ó: ['o', 2], ǒ: ['o', 3], ò: ['o', 4],
  ū: ['u', 1], ú: ['u', 2], ǔ: ['u', 3], ù: ['u', 4], ǖ: ['ü', 1], ǘ: ['ü', 2], ǚ: ['ü', 3], ǜ: ['ü', 4],
  ń: ['n', 2], ň: ['n', 3], ǹ: ['n', 4] };
const CO_DAU = {};
Object.keys(DAU).forEach((k) => { CO_DAU[DAU[k][0] + DAU[k][1]] = k; });

// Bo am tiet hop le (rong rai: phu am dau x van — chi de tach am tiet)
const AM_TIET = (() => {
  const s = new Set();
  const dau = ['b', 'p', 'm', 'f', 'd', 't', 'n', 'l', 'g', 'k', 'h', 'j', 'q', 'x', 'zh', 'ch', 'sh', 'r', 'z', 'c', 's'];
  const van = ['a', 'o', 'e', 'ai', 'ei', 'ao', 'ou', 'an', 'en', 'ang', 'eng', 'ong', 'i', 'ia', 'ie', 'iao', 'iu', 'ian', 'in', 'iang', 'ing', 'iong',
    'u', 'ua', 'uo', 'uai', 'ui', 'uan', 'un', 'uang', 'ue', 'ü', 'üe', 'üan', 'ün'];
  dau.forEach((d) => van.forEach((v) => s.add(d + v)));
  ['a', 'o', 'e', 'ai', 'ei', 'ao', 'ou', 'an', 'en', 'ang', 'eng', 'er', 'ng', 'm', 'n',
    'yi', 'ya', 'yo', 'ye', 'yao', 'you', 'yan', 'yin', 'yang', 'ying', 'yong', 'yu', 'yue', 'yuan', 'yun',
    'wu', 'wa', 'wo', 'wai', 'wei', 'wan', 'wen', 'wang', 'weng'].forEach((x) => s.add(x));
  return s;
})();

// 'Xī’ān' -> [{ goc:'xi', thanh:1, chu:'xī' }, { goc:'an', thanh:1, … }]
function boDau(chu) {
  let goc = '', thanh = 0, soDau = 0;
  for (const c of chu.normalize('NFC')) {
    if (DAU[c]) { goc += DAU[c][0]; thanh = DAU[c][1]; soDau++; } else goc += c;
  }
  return { goc: goc.replace(/v/g, 'ü'), thanh, soDau };
}
// Tach 1 cum pinyin (khong co dau cach / nhay) thanh dung k am tiet. Tra ve null neu khong duoc.
function tachCum(cum, k, choEr) {
  const chu = Array.from(cum.normalize('NFC').toLowerCase());
  const n = chu.length;
  const goc = chu.map((c) => (DAU[c] ? DAU[c][0] : c === 'v' ? 'ü' : c));
  const nho = new Map();
  function di(i, con, er) {
    const khoa = i + '|' + con + '|' + er;
    if (nho.has(khoa)) return nho.get(khoa);
    let kq = null;
    if (i === n) kq = con === 0 && !er ? [] : null;
    else if (con > 0) {
      for (let j = Math.min(n, i + 7); j > i && !kq; j--) {
        const g = goc.slice(i, j).join('');
        // am tiet giua tu khong duoc bat dau bang a/o/e (phai co dau nhay)
        if (i > 0 && /^[aoe]/.test(g)) continue;
        if (AM_TIET.has(g)) {
          const sau = di(j, con - 1, er);
          if (sau) kq = [chu.slice(i, j).join('')].concat(sau);
        }
        // nhi hoa: am tiet + r (哪儿 nǎr, 一点儿 yìdiǎnr)
        if (!kq && er && goc[j - 1] === 'r' && j - 1 > i && AM_TIET.has(goc.slice(i, j - 1).join(''))) {
          const sau = di(j, con - 1, false);
          if (sau) kq = [chu.slice(i, j).join('')].concat(sau);
        }
      }
    }
    nho.set(khoa, kq);
    return kq;
  }
  return di(0, k, !!choEr);
}
// Tach pinyin cua 1 tu theo so chu Han. Tra ve { am: [...], loi } — am = mang am tiet (co dau)
function tachPinyin(py, soChu, coEr) {
  const cum = String(py).normalize('NFC').toLowerCase().replace(/[’']/g, ' ').split(/[\s-]+/).filter(Boolean);
  // chia so am tiet cho cac cum: thu moi cach chia (so cum nho)
  const soAm = coEr ? soChu - 1 : soChu;
  function chia(i, con) {
    if (i === cum.length) return con === 0 ? [] : null;
    for (let k = 1; k <= con - (cum.length - i - 1); k++) {
      for (const er of coEr ? [false, true] : [false]) {
        const t = tachCum(cum[i], k, er);
        if (t) { const sau = chia(i + 1, con - k); if (sau) return t.concat(sau); }
      }
    }
    return null;
  }
  const am = chia(0, soAm);
  if (!am) return { am: null, loi: 'không tách được "' + py + '" thành ' + soAm + ' âm tiết' };
  for (const a of am) {
    const b = boDau(a);
    if (b.soDau > 1) return { am, loi: 'âm tiết "' + a + '" có 2 dấu thanh' };
    if (b.soDau === 1) {
      // dau thanh dat dung cho: a/e truoc, roi o trong ou, con lai nguyen am cuoi
      const g = b.goc.replace(/r$/, b.goc === 'er' ? 'r' : '');
      const viTri = Array.from(a).findIndex((c) => DAU[c]);
      let dung;
      if (/a/.test(g)) dung = g.indexOf('a');
      else if (/e/.test(g)) dung = g.indexOf('e');
      else if (/ou/.test(g)) dung = g.indexOf('o');
      else { dung = -1; Array.from(g).forEach((c, i) => { if ('iouü'.indexOf(c) >= 0) dung = i; }); }
      if (dung >= 0 && /[aeiouü]/.test(g) && viTri !== dung) return { am, loi: 'dấu thanh đặt sai chỗ trong "' + a + '"' };
    }
  }
  return { am, loi: null };
}
function thanhCua(am) { return boDau(am).thanh; }
function datThanh(am, thanh) {
  const b = boDau(am);
  const g = b.goc;
  if (!thanh) return g;
  let vt;
  if (/a/.test(g)) vt = g.indexOf('a');
  else if (/e/.test(g)) vt = g.indexOf('e');
  else if (/ou/.test(g)) vt = g.indexOf('o');
  else { vt = -1; Array.from(g).forEach((c, i) => { if ('iouü'.indexOf(c) >= 0) vt = i; }); }
  const ds = Array.from(g);
  ds[vt] = CO_DAU[ds[vt] + thanh] || ds[vt];
  return ds.join('');
}
function soChuHan(zh) { return (String(zh).match(HAN) || []).length; }
function chuanPy(s) { return String(s).normalize('NFC').toLowerCase().replace(/[’'\s-]/g, '').replace(/v/g, 'ü'); }

// Pinyin + nghia cho 1 so: 一百二十 -> ['yìbǎi èrshí', '120']
function soSangPy(zh) {
  const chu = Array.from(zh);
  const am = chu.map((c) => SO_PY[c]);
  let gt = 0, tam = 0;
  chu.forEach((c, i) => {
    if (c in SO_VN) tam = SO_VN[c];
    else if (c === '十') { gt += (tam || (i === 0 ? 1 : 0)) * 10; tam = 0; }
    else if (c === '百') { gt += tam * 100; tam = 0; }
    else if (c === '千') { gt += tam * 1000; tam = 0; }
    else if (c === '万') { gt = (gt + tam) * 10000; tam = 0; }
  });
  gt += tam;
  return { am, vn: String(gt) };
}

/* ======================= Tu vung theo bai ======================= */
const tuCache = {};
function tuVungFile(cap, bai) {
  const k = cap + '-' + bai;
  if (k in tuCache) return tuCache[k];
  const f = path.join(JS_DIR, cap + '-bai-' + bai + '-data.js');
  let ds = null;
  if (fs.existsSync(f)) {
    const sb = { window: {}, document: { addEventListener() {}, querySelector() { return null; } } };
    vm.runInNewContext(fs.readFileSync(f, 'utf8') + '\n;this.__tu = typeof vocabData !== "undefined" ? vocabData : null;', sb, { timeout: 5000 });
    ds = (sb.__tu || []).filter((v) => v && v.zh).map((v) => ({ zh: String(v.zh).trim(), py: String(v.py || ''), vn: String(v.vn || ''), cap, bai }));
  }
  tuCache[k] = ds;
  return ds;
}
function soBaiCua(cap) { let n = 0; while (tuVungFile(cap, n + 1)) n++; return n; }
// Tu duoc phep dung cho truyen "doc sau bai N cua cap": zh -> [muc tu vung]
function tuDuocDung(cap, bai) {
  const vt = CAP_THU_TU.indexOf(cap);
  if (vt < 0) throw new Error('Cấp không hỗ trợ: ' + cap);
  const map = new Map();
  CAP_THU_TU.slice(0, vt + 1).forEach((c) => {
    const toi = c === cap ? bai : soBaiCua(c);
    for (let b = 1; b <= toi; b++) {
      (tuVungFile(c, b) || []).forEach((v) => {
        if (!map.has(v.zh)) map.set(v.zh, []);
        map.get(v.zh).push(v);
      });
    }
  });
  return map;
}

/* ======================= Doc du lieu truyen ======================= */
function docTruyen() {
  const f = path.join(JS_DIR, 'truyen-data.js');
  const sb = { window: {} };
  vm.runInNewContext(fs.readFileSync(f, 'utf8'), sb, { timeout: 5000 });
  return (sb.window.TRUYEN_DATA && sb.window.TRUYEN_DATA.truyen) || [];
}

/* ======================= Kiem tra ======================= */
function kiemTraBienDieu(cau, baoLoi) {
  // Danh sach am tiet phang cua ca cau: { chu, am, dauTu, tu, i }
  const phang = [];
  cau.w.forEach((t, ti) => {
    if (t.length < 2) { phang.push({ dauCau: true }); return; }
    const zh = t[0], py = t[1];
    if (!soChuHan(zh)) { phang.push({ chu: zh, am: py, dauTu: true, ti }); return; }
    const r = tachPinyin(py, soChuHan(zh), /儿$/.test(zh) && /r$/i.test(py) && !/er$/i.test(boDau(py).goc));
    if (!r.am) return;
    const chu = Array.from(zh).filter((c) => /[㐀-鿿]/.test(c));
    r.am.forEach((a, i) => phang.push({ chu: chu[i], am: a, dauTu: i === 0, cuoiTu: i === r.am.length - 1, ti, tu: zh }));
  });
  phang.forEach((x, i) => {
    if (x.dauCau || !x.dauTu || (x.chu !== '一' && x.chu !== '不')) return;
    const sau = phang[i + 1];
    const truoc = phang[i - 1];
    const thanh = thanhCua(x.am);
    const goc = boDau(x.am).goc;
    if (thanh === 0) return; // thanh nhe (A不A, V一V, 听不懂) — chap nhan
    const thanhSau = sau && !sau.dauCau ? thanhCua(sau.am) : -1;
    let mong;
    if (x.chu === '不') mong = thanhSau === 4 ? 2 : 4;
    else {
      const thuTu = truoc && !truoc.dauCau && truoc.chu === '第';
      // 一 dung sau so (十一) hoac cuoi cau / truoc dau cau / so thu tu -> yī
      if (thuTu || thanhSau === -1) mong = 1;
      else mong = thanhSau === 4 ? 2 : 1 <= thanhSau && thanhSau <= 3 ? 4 : thanh;
    }
    if (thanh !== mong) baoLoi('biến điệu "' + x.chu + '" trong "' + (x.tu || x.chu) + '": viết ' + x.am + ', đúng là ' + datThanh(goc, mong));
  });
}

function kiemTra() {
  const loi = [];
  const ds = docTruyen();
  let dapAn = {};
  try { dapAn = require(path.join(ROOT, 'truyen-doc.js')).DAP_AN || {}; } catch (e) { loi.push('Không đọc được DAP_AN trong truyen-doc.js: ' + e.message); }
  const daCoId = new Set();
  const theoCap = {};
  let soTu = 0, soCau = 0;
  ds.forEach((tr) => {
    const L = (m) => loi.push('[' + tr.id + '] ' + m);
    if (!tr.id || !/^[a-z0-9-]{2,32}$/.test(tr.id)) L('id không hợp lệ');
    if (daCoId.has(tr.id)) L('id bị trùng');
    daCoId.add(tr.id);
    if (CAP_THU_TU.indexOf(tr.cap) < 0) { L('cấp không hỗ trợ: ' + tr.cap); return; }
    if (!tuVungFile(tr.cap, tr.bai)) { L('không có bài ' + tr.bai + ' của ' + tr.cap); return; }
    (theoCap[tr.cap] = theoCap[tr.cap] || []).push(tr);
    if (!tr.tieuDe || !tr.tieuDe.zh || !tr.tieuDe.py || !tr.tieuDe.vn) L('thiếu tiêu đề zh/py/vn');
    if (!Array.isArray(tr.cau) || tr.cau.length < 6 || tr.cau.length > 15) L('số câu phải 6–15 (hiện ' + (tr.cau || []).length + ')');
    const tu = tuDuocDung(tr.cap, tr.bai);
    const ten = tr.ten || {};
    const kiemPyTu = (zh, py, noi) => {
      const coEr = /儿$/.test(zh) && /r$/i.test(py) && !/er$/i.test(boDau(py).goc);
      const r = tachPinyin(py, soChuHan(zh), coEr);
      if (r.loi) { L(noi + ': ' + r.loi); return null; }
      return r.am;
    };
    // tieu de cung chi dung tu da hoc
    (tr.cau || []).forEach((cau, ci) => {
      const noi = 'câu ' + (ci + 1);
      if (!cau || !Array.isArray(cau.w) || !cau.w.length) { L(noi + ': không có từ'); return; }
      if (!cau.vn || !String(cau.vn).trim()) L(noi + ': thiếu bản dịch tiếng Việt');
      soCau++;
      cau.w.forEach((t) => {
        if (!Array.isArray(t) || !t[0]) { L(noi + ': token rỗng'); return; }
        const zh = t[0];
        if (t.length === 1) { if (!DAU_CAU.test(zh)) L(noi + ': "' + zh + '" không phải dấu câu nhưng thiếu pinyin/nghĩa'); return; }
        const py = t[1], vn = t[2];
        if (!py || !vn || !String(vn).trim()) { L(noi + ': "' + zh + '" thiếu pinyin hoặc nghĩa'); return; }
        soTu++;
        if (ten[zh]) {
          if (ten[zh][0] !== py) L(noi + ': tên riêng "' + zh + '" pinyin khác khai báo (' + ten[zh][0] + ')');
          if (soChuHan(zh)) kiemPyTu(zh, py, noi + ' "' + zh + '"');
          return;
        }
        if (/[A-Za-z]/.test(zh)) { L(noi + ': "' + zh + '" chữ Latin phải khai báo trong truyen.ten'); return; }
        if (SO.test(zh)) {
          const am = kiemPyTu(zh, py, noi + ' "' + zh + '"');
          if (am) {
            const ky = soSangPy(zh).am;
            am.forEach((a, i) => {
              if (Array.from(zh)[i] === '一') { if (boDau(a).goc !== 'yi') L(noi + ': "' + zh + '" pinyin sai ở 一'); return; }
              if (a !== ky[i]) L(noi + ': số "' + zh + '" đọc là ' + ky.join(' ') + ', đang viết ' + py);
            });
          }
          return;
        }
        const muc = tu.get(zh);
        if (!muc) { L(noi + ': từ "' + zh + '" CHƯA HỌC tới bài ' + tr.bai + ' ' + tr.cap); return; }
        const am = kiemPyTu(zh, py, noi + ' "' + zh + '"');
        if (!am) return;
        // so voi pinyin tu dien (bo qua thanh cua 一/不 — da kiem bien dieu rieng)
        const chu = Array.from(zh).filter((c) => /[㐀-鿿]/.test(c));
        const viet = am.map((a, i) => (chu[i] === '一' || chu[i] === '不' ? boDau(a).goc : a)).join('');
        const hop = muc.some((m) => String(m.py).split('/').some((p) => {
          const coEr = /儿$/.test(zh) && /r$/i.test(p) && !/er$/i.test(boDau(p).goc);
          const r = tachPinyin(p.trim(), chu.length, coEr);
          if (!r.am) return chuanPy(p) === chuanPy(py);
          const goc = r.am.map((a, i) => (chu[i] === '一' || chu[i] === '不' ? boDau(a).goc : a)).join('');
          // thanh nhe (khong dau) trong tu dien hoac trong truyen deu chap nhan cho am tiet sau dau tu
          return chuanPy(goc) === chuanPy(viet) ||
            r.am.length === am.length && r.am.every((a, i) => {
              const b = am[i];
              if (chu[i] === '一' || chu[i] === '不') return boDau(a).goc === boDau(b).goc;
              return a.toLowerCase() === b.toLowerCase() || (i > 0 && boDau(a).goc === boDau(b).goc && (!thanhCua(a) || !thanhCua(b)));
            });
        }));
        if (!hop) L(noi + ': pinyin "' + py + '" của "' + zh + '" khác từ điển bài học (' + muc.map((m) => m.py).join(' / ') + ')');
      });
      kiemTraBienDieu(cau, (m) => L(noi + ': ' + m));
    });
    // cau hoi + dap an
    const hoi = tr.hoi || [];
    if (hoi.length !== 3) L('phải có đúng 3 câu hỏi (hiện ' + hoi.length + ')');
    const key = dapAn[tr.id];
    if (!Array.isArray(key) || key.length !== hoi.length) L('DAP_AN trong truyen-doc.js thiếu hoặc không đủ ' + hoi.length + ' câu');
    hoi.forEach((h, hi) => {
      if (!h.q || !Array.isArray(h.chon) || h.chon.length < 2 || h.chon.length > 4) L('câu hỏi ' + (hi + 1) + ': cần câu hỏi + 2–4 lựa chọn');
      const k = key && key[hi];
      if (!k || typeof k[0] !== 'number' || k[0] < 0 || k[0] >= (h.chon || []).length) L('câu hỏi ' + (hi + 1) + ': đáp án không hợp lệ');
      if (!k || !k[1] || !String(k[1]).trim()) L('câu hỏi ' + (hi + 1) + ': thiếu lời giải thích');
    });
    // tieu de zh cung phai dung tu da hoc (cho phep bo qua dau cau/ten/so)
    if (tr.tieuDe && Array.isArray(tr.tieuDe.w)) {
      tr.tieuDe.w.forEach((t) => {
        if (t.length < 2 || ten[t[0]] || SO.test(t[0])) return;
        if (!tu.get(t[0])) L('tiêu đề: từ "' + t[0] + '" chưa học');
      });
    }
  });
  Object.keys(dapAn).forEach((id) => { if (!daCoId.has(id)) loi.push('DAP_AN có truyện "' + id + '" không tồn tại trong truyen-data.js'); });
  return { loi, ds, theoCap, soTu, soCau };
}

/* ======================= Goi y tach tu ======================= */
function goiY(cap, bai, dong) {
  const tu = tuDuocDung(cap, Number(bai));
  const ds = String(dong).split('/').filter(Boolean).map((zh) => {
    if (DAU_CAU.test(zh)) return [zh];
    if (SO.test(zh)) { const s = soSangPy(zh); return [zh, s.am.join(''), s.vn]; }
    const m = tu.get(zh);
    if (!m) return [zh, '??', '?? CHƯA HỌC'];
    if (m.length > 1) return [zh, m[0].py, m.map((x) => x.vn).join(' | ') + '  <- chọn 1 nghĩa'];
    return [zh, m[0].py, m[0].vn];
  });
  console.log(JSON.stringify(ds));
}

module.exports = { tachPinyin, thanhCua, datThanh, boDau, soSangPy, tuDuocDung, tuVungFile, soChuHan, DAU_CAU, SO, CAP_THU_TU, kiemTra };

if (require.main === module) {
  const a = process.argv.slice(2);
  if (a[0] === '--goi-y') { goiY(a[1], a[2], a[3]); process.exit(0); }
  const { loi, theoCap, soTu, soCau } = kiemTra();
  CAP_THU_TU.forEach((c) => {
    const ds = theoCap[c] || [];
    console.log(c + ': ' + ds.length + ' truyện — ' + ds.map((t) => t.id + ' (sau bài ' + t.bai + ', ' + t.cau.length + ' câu)').join(', '));
  });
  console.log('Tổng: ' + Object.values(theoCap).reduce((s, d) => s + d.length, 0) + ' truyện, ' + soCau + ' câu, ' + soTu + ' lượt từ.');
  if (loi.length) {
    console.log('\n✗ ' + loi.length + ' lỗi:');
    loi.forEach((m) => console.log('  - ' + m));
    process.exit(1);
  }
  console.log('✓ Mọi từ đều nằm trong từ vựng đã học, pinyin + biến điệu 一/不 đúng, đáp án khớp.');
}
