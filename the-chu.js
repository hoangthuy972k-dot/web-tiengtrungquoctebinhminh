// Bo suu tap the chu Han 汉字卡 (/the-chu) — moi chu Han trong bai em DA HOC / duoc GIAO thanh 1 the.
// Hang the theo do thuan thuc (diem m): thuong (0) → bac (>= 20) → vang (>= 60) → kim cuong (>= 120).
// Diem chi tang khi em tra loi dung cau "Luyen the" (may chu ra cau + cham), co tran moi ngay:
//   +10 / cau dung · toi da 20 diem / chu / ngay · toi da 400 diem / ngay  → kim cuong can it nhat 6 ngay on.
// Quy tac du lieu: the chi lay tu bai d.baiOnCua(user) (bai da hoc + bai thay co giao) → d.tuVungBai(url);
//   chu da thu vao bo suu tap thi giu mai (ke ca khi bai do roi khoi 6 bai gan nhat). Dap an nhieu chi lay tu the cua em.
//   Thong tin chu (pinyin, Han Viet, bo thu, so net, phan tich) lay tu du lieu bai hoc co san tren web
//   (vocabData[].hanzi / .hv, *-strokes.js, tools/hsk4v3/chu-moi.json) — khong co thi bo trong, khong tu viet.
// Luu: MySQL bang the_chu (1 dong / hoc sinh, JSON) hoac file DATA_DIR/the-chu.json.
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const HANG = [
  { k: 'thuong', ten: 'Thường', tu: 0 },
  { k: 'bac', ten: 'Bạc', tu: 20 },
  { k: 'vang', ten: 'Vàng', tu: 60 },
  { k: 'kc', ten: 'Kim cương', tu: 120 },
];
const DIEM_CAU = 10;          // moi cau dung
const TRAN_CHU_NGAY = 20;     // toi da / chu / ngay
const TRAN_NGAY = 400;        // toi da / hoc sinh / ngay
const SO_CAU = 8;             // so cau 1 luot luyen
const MIN_MS_CAU = 600;       // nhanh hon thi khong tinh diem
const PHIEN_MS = 30 * 60 * 1000;
const HAN = /[㐀-鿿豈-﫿]/;
const HAN_G = /[㐀-鿿豈-﫿]/g;
const KHONG_THANH = { '一': 1, '不': 1 }; // bien am theo tu — khong hoi thanh dieu

// Bang am tiet pinyin (giong public/js/phat-am-de.js) — de tach pinyin cua tu ra tung chu
const AM_TIET = new Set((
  'a ai an ang ao e ei en eng er o ou ' +
  'ba bo bai bei bao ban ben bang beng bi bie biao bian bin bing bu ' +
  'pa po pai pei pao pou pan pen pang peng pi pie piao pian pin ping pu ' +
  'ma mo me mai mei mao mou man men mang meng mi mie miao miu mian min ming mu ' +
  'fa fo fei fou fan fen fang feng fu ' +
  'da de dai dei dao dou dan den dang deng dong di die diao diu dian ding du duo dui duan dun ' +
  'ta te tai tao tou tan tang teng tong ti tie tiao tian ting tu tuo tui tuan tun ' +
  'na ne nai nei nao nou nan nen nang neng nong ni nie niao niu nian nin niang ning nu nuo nuan nun nv nve ' +
  'la le lai lei lao lou lan lang leng long li lia lie liao liu lian lin liang ling lu luo luan lun lv lve ' +
  'ga ge gai gei gao gou gan gen gang geng gong gu gua guo guai gui guan gun guang ' +
  'ka ke kai kei kao kou kan ken kang keng kong ku kua kuo kuai kui kuan kun kuang ' +
  'ha he hai hei hao hou han hen hang heng hong hu hua huo huai hui huan hun huang ' +
  'ji jia jie jiao jiu jian jin jiang jing jiong ju jue juan jun ' +
  'qi qia qie qiao qiu qian qin qiang qing qiong qu que quan qun ' +
  'xi xia xie xiao xiu xian xin xiang xing xiong xu xue xuan xun ' +
  'zha zhe zhi zhai zhei zhao zhou zhan zhen zhang zheng zhong zhu zhua zhuo zhuai zhui zhuan zhun zhuang ' +
  'cha che chi chai chao chou chan chen chang cheng chong chu chuo chuai chui chuan chun chuang ' +
  'sha she shi shai shei shao shou shan shen shang sheng shu shua shuo shuai shui shuan shun shuang ' +
  're ri rao rou ran ren rang reng rong ru rua ruo rui ruan run ' +
  'za ze zi zai zei zao zou zan zen zang zeng zong zu zuo zui zuan zun ' +
  'ca ce ci cai cao cou can cen cang ceng cong cu cuo cui cuan cun ' +
  'sa se si sai sao sou san sen sang seng song su suo sui suan sun ' +
  'ya yao you yan yang ye yi yin ying yo yong yu yuan yue yun ' +
  'wa wo wai wei wan wen wang weng wu'
).split(' '));

function tronMang(a) {
  a = a.slice();
  for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
function hangCua(m) { let h = HANG[0]; HANG.forEach((x) => { if (m >= x.tu) h = x; }); return h; }
// 1 ky tu pinyin (NFC) -> chu cai goc (bo dau thanh; ü -> v)
function goc(ch) {
  const n = ch.normalize('NFD');
  if (/^[uU]̈/.test(n)) return 'v';
  return n.replace(/[̀-ͯ]/g, '').toLowerCase();
}
// Thanh dieu cua 1 am tiet: 1-4, 0 = thanh nhe
function thanhCua(py) {
  const n = String(py || '').normalize('NFD');
  if (/̄/.test(n)) return 1;
  if (/́/.test(n)) return 2;
  if (/̌/.test(n)) return 3;
  if (/̀/.test(n)) return 4;
  return 0;
}
function boThanh(py) {
  return String(py || '').normalize('NFD').replace(/[̀-̄̌]/g, '').normalize('NFC');
}
// Tach pinyin cua tu (vd 'lǚyóu', "nǚ'ér", 'Běijīng') thanh dung n am tiet; khong tach duoc -> null
function tachPinyin(py, n) {
  const chars = [...String(py || '').normalize('NFC')];
  const base = [], goc0 = []; // base: chu cai goc hoac '|' (ranh gioi); goc0: ky tu goc tuong ung
  chars.forEach((c) => {
    if (/[\s'’\-·]/.test(c)) { if (base.length && base[base.length - 1] !== '|') { base.push('|'); goc0.push(''); } return; }
    const g = goc(c);
    if (!/^[a-zv]$/.test(g)) return;
    base.push(g); goc0.push(c);
  });
  const L = base.length, memo = new Map();
  function di(p, k) {
    while (p < L && base[p] === '|') p++;
    if (p === L) return k === 0 ? [] : null;
    if (k === 0) return null;
    const key = p * 64 + k;
    if (memo.has(key)) return memo.get(key);
    let kq = null;
    for (let len = Math.min(6, L - p); len >= 1 && !kq; len--) {
      const s = base.slice(p, p + len);
      if (s.indexOf('|') >= 0 || !AM_TIET.has(s.join(''))) continue;
      // am tiet bat dau bang a/e/o giua tu phai co dau ' (xi'an) → shēngāo = shēn|gāo, khong phai shēng|āo
      if (/[aeo]/.test(s[0]) && p > 0 && base[p - 1] !== '|') continue;
      const sau = di(p + len, k - 1);
      if (sau) kq = [[p, p + len]].concat(sau);
    }
    memo.set(key, kq);
    return kq;
  }
  const cat = di(0, n);
  if (!cat) return null;
  return cat.map(([a, b]) => goc0.slice(a, b).join('').toLowerCase());
}
// JSON chi con ky tu ASCII (an toan voi moi bang ma MySQL)
function jsonAscii(o) {
  return JSON.stringify(o).replace(/[\u007f-￿]/g, (c) => '\\u' + c.charCodeAt(0).toString(16).padStart(4, '0'));
}
function ngan(s, max) {
  s = String(s || '').split(/[;；]/)[0].trim();
  max = max || 48;
  return s.length > max ? s.slice(0, max - 1) + '…' : s;
}
// "口 (khẩu – miệng)" -> { k: '口', ten: '口 khẩu' }
function boThuCua(rad) {
  const s = String(rad || '').trim();
  const m = /^([⺀-⿟㐀-鿿豈-﫿])/.exec(s);
  if (!m) return null;
  const am = /\(\s*([^–\-—)/]+)/.exec(s);
  return { k: m[1], ten: m[1] + (am ? ' ' + am[1].trim() : '') };
}

module.exports = function (app, d) {
  const PUBLIC = path.join(__dirname, 'public');
  const FILE = path.join(d.DATA_DIR, 'the-chu.json');

  /* ---------------- muc luc bai (public/js/data.js) ---------------- */
  let mucLuc = null;
  function mlBai() {
    if (mucLuc) return mucLuc;
    const theoUrl = {}, theoCap = {}, tenCap = {}, thuTuCap = [];
    try {
      const x = vm.runInNewContext(
        fs.readFileSync(path.join(PUBLIC, 'js', 'data.js'), 'utf8') + '\n;({ levels: APP_DATA.levels, lessons: APP_DATA.lessons })', {}, { timeout: 3000 });
      (x.levels || []).forEach((l) => { tenCap[l.id] = l.name; thuTuCap.push(l.id); });
      Object.keys(x.lessons || {}).forEach((lv) => {
        theoCap[lv] = (x.lessons[lv] || []).filter((b) => b && b.fullPageUrl).map((b, i) => {
          theoUrl[b.fullPageUrl] = { u: b.fullPageUrl, lv, i, so: b.number, ten: b.title || '', zh: b.titleHanzi || '' };
          return b.fullPageUrl;
        });
      });
    } catch (e) { console.error('The chu: khong doc duoc data.js:', e.message); }
    mucLuc = { theoUrl, theoCap, tenCap, thuTuCap };
    return mucLuc;
  }

  /* ---------------- du lieu day du cua 1 bai (vocabData: hv, hanzi, cau vi du) ---------------- */
  const bdCache = new Map();
  function tenFile(url, duoi) {
    const m = /^\/lessons\/([a-z0-9-]+)\.html$/.exec(String(url || ''));
    return m ? path.join(PUBLIC, 'js', m[1] + duoi) : null;
  }
  function vocabDayDu(url) {
    if (bdCache.has(url)) return bdCache.get(url);
    let ds = [];
    const f = tenFile(url, '-data.js');
    if (f && fs.existsSync(f)) {
      try {
        const sb = { window: {}, document: { addEventListener() {}, querySelector() { return null; } } };
        vm.runInNewContext(fs.readFileSync(f, 'utf8') + '\n;this.__tu = typeof vocabData !== "undefined" ? vocabData : null;', sb, { timeout: 3000 });
        ds = Array.isArray(sb.__tu) ? sb.__tu.filter((v) => v && v.zh) : [];
      } catch (e) { ds = []; }
    }
    bdCache.set(url, ds);
    return ds;
  }

  /* ---------------- chi muc chu Han toan web (dung 1 lan, lazy) ---------------- */
  let CM = null;
  function chiMuc() {
    if (CM) return CM;
    const ml = mlBai();
    const pt = {};        // phan tich chu: vocabData[].hanzi { c, p, type, st, ord, rad, mean, tip, cf, w }
    const hv = {};        // hv[c][doc] = so lan
    const py = {};        // py[c][am] = so lan (tach tu pinyin cua tu)
    const tuCo = new Set(); // moi tu co tren web (chong dap an nhieu cung dung)
    const net = {};       // du lieu net viet (STROKE_DATA cac bai)
    ml.thuTuCap.forEach((lv) => (ml.theoCap[lv] || []).forEach((u) => {
      vocabDayDu(u).forEach((v) => {
        const zh = String(v.zh);
        tuCo.add(zh);
        const chs = [...zh];
        (Array.isArray(v.hanzi) ? v.hanzi : []).forEach((h) => { if (h && h.c && !pt[h.c] && (h.rad || h.tip || h.mean)) pt[h.c] = h; });
        if (chs.every((c) => HAN.test(c))) {
          const hs = String(v.hv || '').trim().split(/\s+/).filter(Boolean);
          if (hs.length === chs.length) chs.forEach((c, j) => { const o = hv[c] || (hv[c] = {}); const r = hs[j].toLowerCase(); o[r] = (o[r] || 0) + 1; });
          const ps = tachPinyin(v.py, chs.length);
          if (ps) chs.forEach((c, j) => { const o = py[c] || (py[c] = {}); o[ps[j]] = (o[ps[j]] || 0) + 1; });
        }
      });
      const f = tenFile(u, '-strokes.js');
      if (f && fs.existsSync(f)) {
        try {
          const sb = {};
          vm.runInNewContext(fs.readFileSync(f, 'utf8') + '\n;this.__n = typeof STROKE_DATA !== "undefined" ? STROKE_DATA : null;', sb, { timeout: 3000 });
          Object.keys(sb.__n || {}).forEach((c) => { if (!net[c] && sb.__n[c] && Array.isArray(sb.__n[c].strokes)) net[c] = sb.__n[c]; });
        } catch (e) { /* bo qua */ }
      }
    }));
    // phan tich chu moi HSK 4 (3.0) da duyet
    try {
      const cm = JSON.parse(fs.readFileSync(path.join(__dirname, 'tools', 'hsk4v3', 'chu-moi.json'), 'utf8'));
      Object.keys(cm).forEach((c) => { if (!pt[c] && cm[c] && (cm[c].rad || cm[c].tip)) pt[c] = Object.assign({ c }, cm[c]); });
    } catch (e) { /* khong co file thi thoi */ }
    CM = { pt, hv, py, tuCo, net };
    return CM;
  }
  const nhieuNhat = (o) => (o ? Object.keys(o).sort((a, b) => o[b] - o[a])[0] || '' : '');

  // Chu c trong tu w cua bai u: pinyin + Han Viet theo dung tu do (da am)
  function docTrongTu(c, w, u) {
    const v = vocabDayDu(u).find((x) => String(x.zh) === w) || d.tuVungBai(u).find((x) => x.zh === w);
    const chs = [...w], j = chs.indexOf(c);
    let p = '', h = '';
    if (v && j >= 0) {
      const ht = (Array.isArray(v.hanzi) ? v.hanzi : []).find((x) => x && x.c === c);
      if (ht && ht.p) p = String(ht.p);
      if (chs.every((x) => HAN.test(x))) {
        if (!p) { const ps = tachPinyin(v.py, chs.length); if (ps) p = ps[j]; }
        const hs = String(v.hv || '').trim().split(/\s+/).filter(Boolean);
        if (hs.length === chs.length) h = hs[j].toLowerCase();
      }
    }
    return { p, h, v };
  }

  /* ---------------- luu tru ---------------- */
  async function initTable() {
    if (!d.USE_DB) return;
    await d.db().query(
      'CREATE TABLE IF NOT EXISTS the_chu (' +
        'user_id VARCHAR(36) PRIMARY KEY, ' +
        'data MEDIUMTEXT NOT NULL, ' +
        'so_the INT NOT NULL DEFAULT 0, ' +
        'updated_ms BIGINT NOT NULL, ' +
        'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
      ')'
    );
  }
  // ban ghi: { c: { 字: { m, t, u, w, n, dd, dp } }, ng: ngay, np: diem hom nay }
  async function doc(uid) {
    let raw = null;
    if (!d.USE_DB) raw = (d.readJsonFile(FILE) || {})[uid] || null;
    else {
      const [rows] = await d.db().query('SELECT data FROM the_chu WHERE user_id = ?', [uid]);
      if (rows.length) { try { raw = JSON.parse(rows[0].data); } catch (e) { raw = null; } }
    }
    const r = Object.assign({ c: {}, ng: '', np: 0 }, raw || {});
    if (!r.c || typeof r.c !== 'object') r.c = {};
    return r;
  }
  async function ghi(uid, r) {
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      all[uid] = r;
      d.writeJsonFile(FILE, all);
      return;
    }
    await d.db().query(
      'INSERT INTO the_chu (user_id, data, so_the, updated_ms) VALUES (?,?,?,?) ' +
        'ON DUPLICATE KEY UPDATE data=VALUES(data), so_the=VALUES(so_the), updated_ms=VALUES(updated_ms)',
      [uid, jsonAscii(r), Object.keys(r.c).length, Date.now()]
    );
  }
  // moi hoc sinh 1 hang doi (tra loi lien tiep khong de len nhau)
  const khoa = new Map();
  function tuanTu(uid, fn) {
    const truoc = khoa.get(uid) || Promise.resolve();
    const p = truoc.catch(() => {}).then(fn);
    khoa.set(uid, p);
    p.catch(() => {}).then(() => { if (khoa.get(uid) === p) khoa.delete(uid); });
    return p;
  }
  function lanNgay(r) {
    const hom = d.vnDayKey();
    if (r.ng !== hom) { r.ng = hom; r.np = 0; }
    return hom;
  }

  // Thu them the tu cac bai em dang hoc / duoc giao. Tra ve { r, on, moi }
  async function thuThe(user) {
    const on = await d.baiOnCua(user);
    const r = await doc(user.id);
    let moi = 0;
    const bay = Date.now();
    (on.urls || []).forEach((u) => d.tuVungBai(u).forEach((v) => {
      [...v.zh].forEach((c) => {
        if (!HAN.test(c) || r.c[c]) return;
        r.c[c] = { m: 0, t: bay, u, w: v.zh, n: 1 };
        moi++;
      });
    }));
    if (moi) await ghi(user.id, r);
    return { r, on, moi };
  }

  // Thong tin hien thi cua 1 the
  function theNgan(c, x) {
    const cm = chiMuc(), pt = cm.pt[c] || null;
    const o = docTrongTu(c, x.w, x.u);
    const p = o.p || (pt && pt.p) || nhieuNhat(cm.py[c]);
    const h = o.h || nhieuNhat(cm.hv[c]);
    const bt = pt ? boThuCua(pt.rad) : null;
    const st = (pt && Number(pt.st)) || (cm.net[c] ? cm.net[c].strokes.length : 0);
    const hg = hangCua(x.m || 0);
    return { c, p, h, r: bt ? bt.k : '', rn: bt ? bt.ten : '', s: st || 0, m: x.m || 0, hg: hg.k, u: x.u, t: x.t || 0, n: x.n ? 1 : 0 };
  }
  // nghia rieng cua chu: phan tich chu, hoac tu 1 chu trong bai cua the em
  function nghiaChu(c, r) {
    const pt = chiMuc().pt[c];
    if (pt && pt.mean) return String(pt.mean);
    const x = r.c[c];
    if (!x) return '';
    const v = d.tuVungBai(x.u).find((y) => y.zh === c);
    if (v) return v.vn;
    // bai khac cua bo suu tap
    const bai = [...new Set(Object.values(r.c).map((y) => y.u))];
    for (const u of bai) { const y = d.tuVungBai(u).find((z) => z.zh === c); if (y) return y.vn; }
    return '';
  }
  function theDayDu(c, r) {
    const x = r.c[c], ml = mlBai(), cm = chiMuc();
    const co = theNgan(c, x), pt = cm.pt[c] || null;
    // tu vi du: cac tu cua bai do co chu nay (uu tien tu nhieu chu)
    const tu = d.tuVungBai(x.u).filter((v) => v.zh.indexOf(c) >= 0)
      .sort((a, b) => (b.zh.length > 1) - (a.zh.length > 1)).slice(0, 3)
      .map((v) => ({ zh: v.zh, py: v.py, vn: v.vn }));
    const v0 = docTrongTu(c, x.w, x.u).v;
    const cau = v0 && v0.ex_zh ? { zh: String(v0.ex_zh), py: String(v0.ex_py || ''), vn: String(v0.ex_vn || '') } : null;
    const b = ml.theoUrl[x.u] || null;
    return Object.assign(co, {
      nghia: nghiaChu(c, r),
      bai: b ? { u: b.u, cap: ml.tenCap[b.lv] || b.lv, so: b.so, ten: b.ten, zh: b.zh } : null,
      tu, cau,
      pt: pt && pt.tip ? { loai: String(pt.type || ''), meo: String(pt.tip || ''), thuTu: String(pt.ord || ''), nham: String(pt.cf || '') } : null,
      boThu: pt && pt.rad ? String(pt.rad) : '',
      net: cm.net[c] || null, // net viet (HanziWriter) — xem cach viet
      con: Math.max(0, TRAN_CHU_NGAY - (x.dd === d.vnDayKey() ? x.dp || 0 : 0)),
      hangSau: (HANG[HANG.findIndex((h) => h.k === co.hg) + 1] || null),
    });
  }

  function tongQuan(r, on) {
    const ml = mlBai(), hom = d.vnDayKey();
    const the = Object.keys(r.c).map((c) => theNgan(c, r.c[c]));
    const dem = { thuong: 0, bac: 0, vang: 0, kc: 0 };
    the.forEach((t) => { dem[t.hg]++; });
    // ca cap em dang hoc: tong so chu + tung bai (chi dem, khong lo chu cua bai chua hoc)
    const cap = on.cap || '';
    const baiCap = (ml.theoCap[cap] || []).map((u) => {
      const chs = new Set();
      d.tuVungBai(u).forEach((v) => (v.zh.match(HAN_G) || []).forEach((c) => chs.add(c)));
      const b = ml.theoUrl[u];
      return { u, so: b.so, ten: b.ten, zh: b.zh, tong: chs.size, co: [...chs].filter((c) => r.c[c]).length, chs };
    });
    const tatCa = new Set();
    baiCap.forEach((b) => b.chs.forEach((c) => tatCa.add(c)));
    // cac bai co trong bo suu tap (de nhom theo bai)
    const baiDung = [...new Set(the.map((t) => t.u))].map((u) => ml.theoUrl[u] || { u, lv: '', i: 999, so: null, ten: '' })
      .sort((a, b) => (ml.thuTuCap.indexOf(a.lv) - ml.thuTuCap.indexOf(b.lv)) || a.i - b.i)
      .map((b) => ({ u: b.u, cap: ml.tenCap[b.lv] || b.lv || '', lv: b.lv, so: b.so, ten: b.ten, zh: b.zh }));
    return {
      the,
      bai: baiDung,
      cap: { id: cap, ten: ml.tenCap[cap] || cap, tong: tatCa.size, co: [...tatCa].filter((c) => r.c[c]).length,
        bai: baiCap.map((b) => ({ u: b.u, so: b.so, ten: b.ten, zh: b.zh, tong: b.tong, co: b.co })) },
      dem,
      hang: HANG,
      ngay: { diem: r.ng === hom ? r.np || 0 : 0, tran: TRAN_NGAY, chu: TRAN_CHU_NGAY, cau: DIEM_CAU },
      nguon: on.nguon || '',
    };
  }

  /* ---------------- luyen the: ra cau + cham ---------------- */
  const phien = new Map(); // uid -> { id, cau: [...], xong: {}, luc }
  setInterval(() => {
    const bay = Date.now();
    phien.forEach((p, k) => { if (bay - p.tao > PHIEN_MS) phien.delete(k); });
  }, 5 * 60 * 1000).unref();

  const THANH = ['Thanh 1  ˉ', 'Thanh 2  ˊ', 'Thanh 3  ˇ', 'Thanh 4  ˋ'];
  function taoLuot(r, chiChu) {
    const cm = chiMuc(), hom = lanNgay(r);
    const ds = Object.keys(r.c).map((c) => {
      const x = r.c[c], tt = theNgan(c, x);
      return Object.assign(tt, { nghia: ngan(nghiaChu(c, r)), con: TRAN_CHU_NGAY - (x.dd === hom ? x.dp || 0 : 0), w: x.w });
    });
    if (ds.length < 4) return null;
    const conNgay = TRAN_NGAY - (r.np || 0);
    // uu tien: the con duoc cong diem hom nay, diem thap, chu moi
    let chon = tronMang(ds).map((t) => ({ t, k: (t.con > 0 && conNgay > 0 ? 0 : 1000) + t.m + Math.random() * 25 }))
      .sort((a, b) => a.k - b.k).slice(0, SO_CAU).map((x) => x.t);
    if (chiChu && r.c[chiChu]) {
      const t = ds.find((y) => y.c === chiChu);
      chon = [t].concat(chon.filter((y) => y.c !== chiChu)).slice(0, Math.min(SO_CAU, 4));
    }
    let soViet = 0;
    const cau = [];
    chon.forEach((t, idx) => {
      const khac = ds.filter((y) => y.c !== t.c);
      const loai = [];
      if (t.nghia && khac.filter((y) => y.nghia && y.nghia !== t.nghia).length >= 3) loai.push('nghia', 'nghia');
      if (t.p && khac.filter((y) => y.p && y.p.toLowerCase() !== t.p.toLowerCase()).length >= 3) loai.push('chu', 'chu');
      if (t.p && thanhCua(t.p) > 0 && !KHONG_THANH[t.c]) loai.push('thanh');
      if ([...t.w].length > 1 && [...t.w].every((c) => HAN.test(c))) loai.push('tu', 'tu');
      if (cm.net[t.c] && soViet < 2) loai.push('viet');
      if (!loai.length) return;
      // luot chi 1 chu: moi cau 1 kieu khac nhau
      let k = loai[Math.floor(Math.random() * loai.length)];
      if (chiChu && t.c === chiChu) {
        const da = cau.map((q) => q.k);
        k = tronMang([...new Set(loai)]).find((x) => da.indexOf(x) < 0) || k;
      }
      let hoi, lua, dap;
      if (k === 'nghia') {
        const nhieu = tronMang(khac.filter((y) => y.nghia && y.nghia !== t.nghia)).map((y) => y.nghia).filter((v, i, a) => a.indexOf(v) === i).slice(0, 3);
        lua = tronMang([t.nghia].concat(nhieu)); dap = lua.indexOf(t.nghia);
        hoi = { zh: t.c };
      } else if (k === 'chu') {
        const pl = t.p.toLowerCase();
        const nhieu = tronMang(khac.filter((y) => y.p && y.p.toLowerCase() !== pl)).map((y) => y.c).slice(0, 3);
        lua = tronMang([t.c].concat(nhieu)); dap = lua.indexOf(t.c);
        hoi = { py: t.p };
      } else if (k === 'thanh') {
        lua = THANH.slice(); dap = thanhCua(t.p) - 1;
        hoi = { zh: t.c, py0: boThanh(t.p).toLowerCase() };
      } else if (k === 'tu' || k === 'viet') {
        const chs = [...t.w], vt = chs.indexOf(t.c);
        const tuVn = (d.tuVungBai(r.c[t.c].u).find((v) => v.zh === t.w) || {}).vn || '';
        const trong = chs.map((c, j) => (j === vt ? '＿' : c)).join('');
        if (k === 'tu') {
          // dap an nhieu: chu cua em, khong nam trong tu, va dien vao khong thanh mot tu co that
          const nhieu = tronMang(khac).map((y) => y.c)
            .filter((c) => chs.indexOf(c) < 0 && !cm.tuCo.has(chs.map((z, j) => (j === vt ? c : z)).join(''))).slice(0, 3);
          if (nhieu.length < 3) { k = t.nghia ? 'nghia' : 'chu'; }
          else { lua = tronMang([t.c].concat(nhieu)); dap = lua.indexOf(t.c); hoi = { tu: trong, vn: tuVn }; }
        } else {
          soViet++;
          hoi = { tu: chs.length > 1 ? trong : '', vn: chs.length > 1 ? tuVn || t.nghia : t.nghia || tuVn, py: t.p, net: cm.net[t.c] };
          lua = ['✓']; dap = 0;
        }
        if (k === 'nghia' && !lua) {
          const nhieu = tronMang(khac.filter((y) => y.nghia && y.nghia !== t.nghia)).map((y) => y.nghia).filter((v, i, a) => a.indexOf(v) === i).slice(0, 3);
          if (nhieu.length < 3) return;
          lua = tronMang([t.nghia].concat(nhieu)); dap = lua.indexOf(t.nghia); hoi = { zh: t.c };
        } else if (k === 'chu' && !lua) {
          if (!t.p) return;
          const nhieu = tronMang(khac.filter((y) => y.p && y.p.toLowerCase() !== t.p.toLowerCase())).map((y) => y.c).slice(0, 3);
          if (nhieu.length < 3) return;
          lua = tronMang([t.c].concat(nhieu)); dap = lua.indexOf(t.c); hoi = { py: t.p };
        }
      }
      if (!lua || dap < 0 || (k !== 'viet' && lua.length < 2)) return;
      cau.push({ k, c: t.c, hoi, lua, dap, nNet: k === 'viet' ? (cm.net[t.c].strokes || []).length : 0, idx });
    });
    return cau.length ? cau : null;
  }

  /* ---------------- API ---------------- */
  // Bo suu tap cua em (+ thu them the moi tu bai vua hoc)
  app.get('/api/the-chu', d.requireAuth, d.asyncRoute(async (req, res) => {
    const kq = await tuanTu(req.user.id, () => thuThe(req.user));
    lanNgay(kq.r);
    res.json(Object.assign(tongQuan(kq.r, kq.on), { moi: kq.moi }));
  }));
  // Chi tiet 1 the (chi the em da co)
  app.get('/api/the-chu/chu/:c', d.requireAuth, d.asyncRoute(async (req, res) => {
    const c = String(req.params.c || '');
    const r = await doc(req.user.id);
    if (!r.c[c]) return res.status(404).json({ error: 'Em chưa có thẻ chữ này.' });
    res.json(theDayDu(c, r));
  }));
  // Da xem hoat canh mo the moi
  app.post('/api/the-chu/da-xem', d.requireAuth, d.asyncRoute(async (req, res) => {
    await tuanTu(req.user.id, async () => {
      const r = await doc(req.user.id);
      let doi = 0;
      Object.values(r.c).forEach((x) => { if (x.n) { delete x.n; doi++; } });
      if (doi) await ghi(req.user.id, r);
    });
    res.json({ ok: true });
  }));
  // Bat dau 1 luot luyen: { chu?: 'X' } -> cau hoi (khong kem dap an)
  app.post('/api/the-chu/luyen', d.requireAuth, d.asyncRoute(async (req, res) => {
    const r = await doc(req.user.id);
    const chiChu = typeof req.body?.chu === 'string' && r.c[req.body.chu] ? req.body.chu : '';
    const cau = taoLuot(r, chiChu);
    if (!cau) return res.status(400).json({ error: 'Em cần ít nhất 4 thẻ chữ để luyện — học thêm 1 bài nhé!', it: true });
    const id = Math.random().toString(36).slice(2, 10);
    phien.set(req.user.id, { id, cau, xong: {}, tao: Date.now(), truoc: Date.now() });
    res.json({
      id,
      cau: cau.map((q) => ({ k: q.k, hoi: q.hoi, lua: q.lua })),
      ngay: { diem: r.ng === d.vnDayKey() ? r.np || 0 : 0, tran: TRAN_NGAY },
    });
  }));
  // Tra loi: { id, i, chon } — may chu cham, cong diem thuan thuc (co tran)
  app.post('/api/the-chu/tra-loi', d.requireAuth, d.asyncRoute(async (req, res) => {
    const p = phien.get(req.user.id);
    const i = Math.floor(Number(req.body?.i));
    if (!p || p.id !== req.body?.id) return res.status(410).json({ error: 'Lượt luyện đã hết hạn — bắt đầu lượt mới nhé.', het: true });
    const q = p.cau[i];
    if (!q) return res.status(400).json({ error: 'Câu hỏi không hợp lệ.' });
    if (p.xong[i]) return res.status(409).json({ error: 'Câu này em trả lời rồi.' });
    p.xong[i] = 1;
    const chon = Math.floor(Number(req.body?.chon));
    const bay = Date.now(), cach = bay - p.truoc;
    p.truoc = bay;
    const dung = chon === q.dap;
    // viet chu phai mat it nhat ~0,3 giay / net; trac nghiem it nhat 0,6 giay
    const duThoiGian = q.k === 'viet' ? cach >= Math.max(1500, q.nNet * 300) : cach >= MIN_MS_CAU;
    const kq = await tuanTu(req.user.id, async () => {
      const r = await doc(req.user.id);
      const x = r.c[q.c];
      const hom = lanNgay(r);
      let diem = 0, ly = '';
      if (x && dung) {
        if (x.dd !== hom) { x.dd = hom; x.dp = 0; }
        if (!duThoiGian) ly = 'nhanh';
        else {
          diem = Math.max(0, Math.min(DIEM_CAU, TRAN_CHU_NGAY - (x.dp || 0), TRAN_NGAY - (r.np || 0)));
          if (!diem) ly = (r.np || 0) >= TRAN_NGAY ? 'ngay' : 'chu';
        }
        if (diem) {
          const truoc = hangCua(x.m || 0);
          x.m = (x.m || 0) + diem; x.dp = (x.dp || 0) + diem; r.np = (r.np || 0) + diem;
          await ghi(req.user.id, r);
          return { diem, ly, m: x.m, hg: hangCua(x.m).k, lenHang: hangCua(x.m).k !== truoc.k, np: r.np };
        }
      }
      return { diem, ly, m: x ? x.m || 0 : 0, hg: hangCua(x ? x.m || 0 : 0).k, lenHang: false, np: r.np || 0 };
    });
    res.json(Object.assign({ dung, dap: q.dap, c: q.c, tran: TRAN_NGAY }, kq));
  }));

  return { initTable };
};
