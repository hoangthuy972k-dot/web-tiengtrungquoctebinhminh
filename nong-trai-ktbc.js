// Kho cau hoi "Kiem tra bai cu" cho nong trai (thu thach chu Han -> hop qua, ho cau ca).
// Cung ngan hang voi man Kiem tra bai cu va tro choi dien thoai (public/js/lop-kiemtra.js _boCauDt):
//   tu vung  : public/js/<bai>-data.js (vocabData, giu ca cau vi du de ra cau "dien tu")
//   ngu phap : public/js/lop-<cap>.js (LOP_DATA[cap][i].mcs / .sorts) — giong lop.js pickedMcs / pickedSorts
// KHONG co cau dich (Viet->Trung / Trung->Viet). Cau tra ve theo dinh dang cau-hoi.js (may chu giu dap an).
// Moi file chi doc 1 lan, giu trong bo nho (lop-<cap>.js chi giu mcs + sorts).
const path = require('path');
const fs = require('fs');
const vm = require('vm');
const LOI = require('./public/js/lop-kiemtra.js');
const CauHoi = require('./cau-hoi');

const JS = path.join(__dirname, 'public', 'js');

/* ---- bo pinyin trong goi y / giai thich (chep tu lop.js boPinyin, khong co bang PhatAmDe) ---- */
const PY_RIENG = /[āǎēěīǐōǒūǔǖǘǚǜĀǍĒĚĪǏŌǑŪǓ]/;
const VIET_RIENG = /[ăâđêôơưạảãầấậẩẫằắặẳẵẹẻẽềếệểễịỉĩọỏõồốộổỗờớợởỡụủũừứựửữỳỷỹỵ]/i;
const KHONG_DAU_PY = { 'á': 'a', 'à': 'a', 'é': 'e', 'è': 'e', 'í': 'i', 'ì': 'i', 'ó': 'o', 'ò': 'o', 'ú': 'u', 'ù': 'u', 'ā': 'a', 'ǎ': 'a', 'ē': 'e', 'ě': 'e', 'ī': 'i', 'ǐ': 'i', 'ō': 'o', 'ǒ': 'o', 'ū': 'u', 'ǔ': 'u', 'ǖ': 'v', 'ǘ': 'v', 'ǚ': 'v', 'ǜ': 'v', 'ü': 'v' };
const AM_PY = /^(zh|ch|sh|[bpmfdtnlgkhjqxrzcsyw])?(iang|iong|uang|ueng|ang|eng|ing|ong|ian|iao|uai|uan|van|ai|ei|ao|ou|an|en|er|ia|ie|in|iu|ua|uo|ui|un|vn|ue|ve|a|o|e|i|u|v)r?$/;
function soAmPy(w) {
  const t = w.toLowerCase().replace(/[áàéèíìóòúùāǎēěīǐōǒūǔǖǘǚǜü]/g, (c) => KHONG_DAU_PY[c]).replace(/'/g, '');
  if (!/^[a-z]+$/.test(t)) return 0;
  const tot = new Array(t.length + 1); tot[0] = 0;
  for (let i = 1; i <= t.length; i++) {
    for (let k = Math.max(0, i - 6); k < i; k++) {
      if (tot[k] != null && AM_PY.test(t.slice(k, i)) && (tot[i] == null || tot[k] + 1 < tot[i])) tot[i] = tot[k] + 1;
    }
  }
  return tot[t.length] || 0;
}
function boPinyin(s) {
  if (!s) return s;
  const tok = String(s).split(/([A-Za-zÀ-ỹāǎēěīǐōǒūǔǖǘǚǜü']+)/);
  const la = tok.map((w, i) => {
    if (i % 2 !== 1 || VIET_RIENG.test(w)) return false;
    return (PY_RIENG.test(w) && soAmPy(w) > 0) || (/[áàéèíìóòúù]/i.test(w) && soAmPy(w) >= 2);
  });
  for (let lap = 0; lap < 4; lap++) {
    tok.forEach((w, i) => {
      if (i % 2 !== 1 || la[i] || VIET_RIENG.test(w) || !soAmPy(w)) return;
      const truoc = i >= 2 && la[i - 2] && /^ +$/.test(tok[i - 1]), sau = i + 2 < tok.length && la[i + 2] && /^ +$/.test(tok[i + 1]);
      if (truoc || sau) la[i] = true;
    });
  }
  return tok.map((w, i) => (la[i] ? '' : w)).join('')
    .replace(/[（(]\s*[,·\-–—\s]*[)）]/g, '').replace(/\s+([,.;:!?)）])/g, '$1').replace(/([(（])\s+/g, '$1')
    .replace(/\s{2,}/g, ' ').replace(/^[\s·,–—=-]+|[\s·,–—:=-]+$/g, '').trim();
}
function boPyMc(q) {
  const c = Object.assign({}, q);
  if (c.hint) c.hint = boPinyin(c.hint);
  if (c.why) c.why = boPinyin(c.why);
  if (c.context) c.context = boPinyin(c.context);
  return c;
}

/* ---- doc du lieu ---- */
// cap -> { url: { mcs, sorts } } (null neu cap khong co file lop-<cap>.js, vd YCT)
const capCache = new Map();
const SRC_BAI = { bai: 1, tu: 1, np: 1, hk: 1, noi: 1, sbt: 1 };
function baiCuaCap(lv) {
  if (capCache.has(lv)) return capCache.get(lv);
  let out = null;
  const file = /^[a-z0-9]+$/.test(String(lv || '')) && path.join(JS, 'lop-' + lv + '.js');
  if (file && fs.existsSync(file)) {
    try {
      const sb = { window: {} };
      vm.runInNewContext(fs.readFileSync(file, 'utf8'), sb, { timeout: 8000 });
      const ds = (sb.window.LOP_DATA && sb.window.LOP_DATA[lv]) || [];
      out = {};
      ds.forEach((l) => {
        if (!l || !l.url) return;
        // cau hoi ve phat am (dap an / de bai la pinyin) khong dung cho tro choi — nhu lop.js pickedMcs.
        // Chi lay cau lam tu NOI DUNG CUA CHINH BAI (src bai / tu / np / hk / noi / sbt); bo cau dich
        // (src dich, «…» — dịch sang tiếng Trung) va bai tap ngu phap chung cua ca cap (khong co src,
        // co the dung tu cua bai em chua hoc).
        const mcs = (Array.isArray(l.mcs) ? l.mcs : []).filter((q) => q && SRC_BAI[q.src] && !/dịch sang/i.test(q.pre || '') && q.context !== 'Dịch câu' &&
          !PY_RIENG.test((q.options || []).join(' ') + ' ' + (q.pre || '') + ' ' + (q.post || ''))).map(boPyMc);
        const sorts = (Array.isArray(l.sorts) ? l.sorts : []).filter((q) => q && SRC_BAI[q.src]);
        out[l.url] = { mcs, sorts };
      });
    } catch (err) { console.error('Khong doc duoc lop-' + lv + '.js:', err.message); out = null; }
  }
  capCache.set(lv, out);
  return out;
}
function capCuaUrl(url) {
  const m = /^\/lessons\/([a-z0-9]+)-bai-\d+\.html$/.exec(String(url || ''));
  if (m) return m[1];
  return /^\/lessons\/bai-\d+\.html$/.test(String(url || '')) ? 'hsk2' : '';
}
// Tu vung day du 1 bai (co cau vi du, Han Viet) — giong lop.js loadVocabOf
const tuCache = new Map();
function tuDayDu(url) {
  if (tuCache.has(url)) return tuCache.get(url);
  let ds = [];
  const m = /^\/lessons\/([a-z0-9-]+)\.html$/.exec(String(url || ''));
  const file = m && path.join(JS, m[1] + '-data.js');
  if (file && fs.existsSync(file)) {
    try {
      const sb = { window: {}, document: { addEventListener() {}, querySelector() { return null; } } };
      vm.runInNewContext(fs.readFileSync(file, 'utf8') + '\n;this.__tu = typeof vocabData !== "undefined" ? vocabData : null;', sb, { timeout: 2000 });
      ds = (sb.__tu || []).filter((v) => v && v.zh && v.vn).map((v) => ({
        zh: String(v.zh), py: String(v.py || ''), vn: String(v.vn), hv: String(v.hv || ''),
        ex_zh: String(v.ex_zh || ''), ex_py: String(v.ex_py || ''), ex_vn: String(v.ex_vn || ''),
      }));
    } catch (err) { ds = []; }
  }
  tuCache.set(url, ds);
  return ds;
}

// Nguon cau hoi cho cac bai: { vocab, mcs, sorts, tuMap }
// Moi cau / tu nho bai nguon (u) de kiem tra cau hoi chi thuoc cac bai em da hoc / duoc giao:
//   tuMap[zh].u, mcU[khoa(pre + post)], sortU[khoa(answer)]
const khoaZh = (s) => String(s == null ? '' : s).replace(/[\s，。？！、；：,.?!;:"'“”‘’「」『』《》（）()…—\-·~～＿]/g, '');
function nguonBai(urls, cap) {
  const vocab = [], mcs = [], sorts = [], tuMap = {}, thay = {}, mcU = {}, sortU = {};
  (urls || []).forEach((u) => {
    tuDayDu(u).forEach((v) => {
      if (thay[v.zh] || !/[㐀-鿿]/.test(v.zh)) return;
      thay[v.zh] = 1;
      const x = Object.assign({ u }, v);
      vocab.push(x); tuMap[v.zh] = x;
    });
    const bc = baiCuaCap(capCuaUrl(u) || cap);
    const b = bc && bc[u];
    if (b) {
      b.mcs.forEach((x) => { mcs.push(x); const k = khoaZh((x.pre || '') + (x.post || '')); if (!mcU[k]) mcU[k] = u; });
      b.sorts.forEach((x) => { sorts.push(x); const k = khoaZh(x.answer); if (!sortU[k]) sortU[k] = u; });
    }
  });
  return { vocab, mcs, sorts, tuMap, mcU, sortU, urls: (urls || []).slice() };
}
// Bai nguon cua 1 cau (dinh dang cau-hoi.js); '' neu khong tim duoc
function nguonCau(c, ng) {
  if (c.k === 'xep') return ng.sortU[khoaZh(c.dap)] || '';
  if (c.k === 'noi') { const t = ng.tuMap[c.trai[0]]; return t ? t.u : ''; }
  const m = /^«([^»]+)»/.exec(c.zh || ''), dung = c.opts[c.dung];
  const tu = ng.tuMap[c.zh] || (m && ng.tuMap[m[1]]) || ng.tuMap[dung];
  return ng.mcU[khoaZh(c.zh)] || (tu ? tu.u : '');
}

// Ban sao khong pinyin (nhu lop.js boPy) — de bai tro choi chi co chu Han + tieng Viet
const boPy = (v) => Object.assign({}, v, { py: '', ex_py: '' });

const LOAI_DT = ['nghia', 'viet', 'nguphap', 'dien', 'xepcau', 'noi'];
// n cau thuoc cac dang ds (deu la dang khong dich); coPy: giu pinyin tu vung (cau de)
function taoCau(ng, ds, n, coPy) {
  const loai = (ds || LOAI_DT).filter((l) => LOAI_DT.indexOf(l) >= 0);
  if (!loai.length || !n) return [];
  let ra = [];
  try {
    ra = LOI._boCauDt({ vocab: coPy ? ng.vocab : ng.vocab.map(boPy), mcs: ng.mcs, sorts: ng.sorts }, n, loai);
  } catch (err) { ra = []; }
  return ra.map(CauHoi.chuan).filter(Boolean);
}
// Dang co du lieu de ra cau
function coDang(ng, l) {
  switch (l) {
    case 'nghia': case 'viet': return ng.vocab.length >= 3;
    case 'noi': return ng.vocab.length >= 4;
    case 'dien': return ng.vocab.length >= 3 && ng.vocab.some((v) => v.ex_zh && v.ex_zh.indexOf(v.zh) >= 0 && v.ex_zh !== v.zh);
    case 'nguphap': return ng.mcs.length > 0;
    case 'xepcau': return ng.sorts.length > 0;
  }
  return false;
}

// Hoi thoai / bai khoa cua 1 bai (dialogData trong <bai>-data.js): [{ lines: [{ sp, zh, py, vn }] }]
// — cho Thanh Pho Giao Tiep tren Ban do phieu luu (chon cau dap, xep cau hoi thoai)
const htCache = new Map();
function hoiThoaiBai(url) {
  if (htCache.has(url)) return htCache.get(url);
  let ds = [];
  const m = /^\/lessons\/([a-z0-9-]+)\.html$/.exec(String(url || ''));
  const file = m && path.join(JS, m[1] + '-data.js');
  if (file && fs.existsSync(file)) {
    try {
      const sb = { window: {}, document: { addEventListener() {}, querySelector() { return null; } } };
      vm.runInNewContext(fs.readFileSync(file, 'utf8') + '\n;this.__ht = typeof dialogData !== "undefined" ? dialogData : null;', sb, { timeout: 2000 });
      ds = (Array.isArray(sb.__ht) ? sb.__ht : []).map((sc) => ({
        lines: (sc && Array.isArray(sc.lines) ? sc.lines : []).filter((l) => l && /[㐀-鿿]/.test(l.zh || ''))
          .map((l) => ({ sp: l.sp, zh: String(l.zh).trim(), py: String(l.py || ''), vn: String(l.vn || '') })),
      })).filter((sc) => sc.lines.length >= 2);
    } catch (err) { ds = []; }
  }
  htCache.set(url, ds);
  return ds;
}

module.exports = { nguonBai, nguonCau, taoCau, coDang, khoaZh, hoiThoaiBai, LOAI_DT, KHO: LOI._KHO, CauHoi };
