// "🗓 Mỗi ngày một câu 每日一句" (/moi-ngay): moi ngay (gio VN) moi hoc sinh nhan 1 CAU lay tu chinh
// cac bai em dang hoc (bai da hoc + bai thay co giao — d.baiOnCua), lam 3 buoc ngan (~2 phut):
//   1) Nghe 🎧  : nghe cau (giong doc chung cua web, doc-zh.js) roi chon nghia (3 lua chon = nghia cac cau khac cung bai)
//   2) Noi 🎤   : doc to; trinh duyet nhan giong (zh-CN), MAY CHU so tung chu voi cau goc (giong rpCompare cua app.js,
//                 dat >= 70%). Trinh duyet khong nhan giong -> "Tu cham" (ghi am / nghe lai) nen buoc nay khong bao gio ket.
//   3) Viet ✍️  : xep lai cac the tu thanh cau, roi go 1 chu then chot nhin pinyin (khong go duoc thi chon trong 4 chu)
// Moi dap an giu o may chu (client chi nhan de bai). Xong ca 3 buoc = giu chuoi 🔥 (so ngay lien tiep, gio VN).
// Thuong sao: KHONG tu cong sao — client goi POST /api/stars/game co san (tran sao tro choi moi ngay, 0,7 giay / sao)
// voi so sao may chu tinh o day (xong ngay +3, nghe dung +1, xep dung ngay lan dau +1, tron 7 ngay +5, tron 30 ngay +10).
//
// Chon cau: cau hoi thoai (dialogData) + cau vi du cua tu (vocabData exList / ex_zh) cua cac bai em dang hoc,
//   2–18 chu Han, co pinyin + nghia; uu tien cau co tu em hay sai (baiOnCua().sai) va bai em hoc gan nhat;
//   khong lap lai cau da gap trong 30 ngay. Chua hoc bai nao -> Bai 1 cua cap em chon / dang ky.
//
// Luu tru (giong hoc-choi.js): MySQL khi USE_DB (bang moi_ngay: 1 dong / em / ngay; moi_ngay_chuoi: chuoi + tuan),
// khong thi file JSON DATA_DIR/moi_ngay.json { uid: { tk: {...}, d: { 'YYYY-MM-DD': ban ghi } } }.
const path = require('path');
const fs = require('fs');
const vm = require('vm');
const crypto = require('crypto');

const JS_DIR = path.join(__dirname, 'public', 'js');
const NGAY_MS = 864e5;
const KHONG_LAP_NGAY = 30;   // khong gap lai 1 cau trong 30 ngay
const GIU_NGAY = 70;         // ban ghi tung ngay giu 70 ngay
const NOI_DAT = 70;          // diem noi dat (giong RP_PASS cua app.js)
const XEP_LAN = 3;           // so lan thu xep cau
const CHU_LAN = 2;           // so lan thu go chu
const BAI_THU = '/lessons/hsk1-bai-1.html'; // cau mau cho khach chua dang nhap
const THU = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];

const HAN_RE = /[㐀-鿿豈-﫿]/;
const HAN_G = /[㐀-鿿豈-﫿]/g;
const demHan = (s) => (String(s || '').match(HAN_G) || []).length;
// giu chu Han + chu cai + so (giong rpClean cua app.js): dung de so cau noi / cau xep
const sach = (s) => String(s || '').replace(/[^㐀-鿿豈-﫿A-Za-z0-9]/g, '');
const tron = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
const b64 = (s) => Buffer.from(encodeURIComponent(s || '')).toString('base64');
const idCau = (zh) => crypto.createHash('sha1').update(sach(zh)).digest('hex').slice(0, 12);
const ngayTruoc = (ngay, n) => new Date(Date.parse(ngay + 'T00:00:00Z') - (n == null ? 1 : n) * NGAY_MS).toISOString().slice(0, 10);
const catNgan = (s, n) => { s = String(s || '').trim(); return s.length > n ? s.slice(0, n - 1).trimEnd() + '…' : s; };

// So chu theo day con chung dai nhat (chep tu rpCompare cua public/js/app.js — cung cach cham phat am cua ca web)
function soPhatAm(goc, nghe) {
  const a = sach(goc), b = sach(nghe);
  const n = a.length, m = b.length;
  if (!n) return { diem: 0, trung: [] };
  const dp = [];
  for (let i = 0; i <= n; i++) dp.push(new Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) for (let j = m - 1; j >= 0; j--) {
    dp[i][j] = a[i] === b[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
  }
  const trung = new Array(n).fill(false);
  let i = 0, j = 0;
  while (i < n && j < m) {
    if (a[i] === b[j]) { trung[i] = true; i++; j++; } else if (dp[i + 1][j] >= dp[i][j + 1]) i++; else j++;
  }
  const thua = Math.max(0, m - dp[0][0]);
  const diem = Math.round(100 * dp[0][0] / (n + thua * 0.5));
  return { diem: Math.max(0, Math.min(100, diem)), trung };
}

/* ======================= doc du lieu bai hoc (chi doc, giu trong bo nho) ======================= */
// Muc luc bai: url -> { lv, so, ten }; cap -> [url]; ten cap
const MUC_LUC = (() => {
  const theoUrl = {}, theoCap = {}, tenCap = {};
  try {
    const d = vm.runInNewContext(fs.readFileSync(path.join(JS_DIR, 'data.js'), 'utf8') + '\n;({ levels: APP_DATA.levels, lessons: APP_DATA.lessons })', {}, { timeout: 2000 });
    (d.levels || []).forEach((l) => { tenCap[l.id] = l.name; });
    Object.keys(d.lessons || {}).forEach((lv) => {
      theoCap[lv] = (d.lessons[lv] || []).filter((b) => b && b.fullPageUrl).map((b) => {
        theoUrl[b.fullPageUrl] = { lv, so: b.number, ten: String(b.titleHanzi || b.title || '') };
        return b.fullPageUrl;
      });
    });
  } catch (err) { console.error('Moi ngay mot cau — khong doc duoc data.js:', err.message); }
  return { theoUrl, theoCap, tenCap };
})();
const capCuaUrl = (u) => (MUC_LUC.theoUrl[u] ? MUC_LUC.theoUrl[u].lv : '');

// Du lieu 1 bai: { ht: cau hoi thoai, tu: tu vung (kem cau vi du, mau cau), xep: sortData }
const baiCache = new Map();
function baiData(url) {
  if (baiCache.has(url)) return baiCache.get(url);
  let out = { ht: [], tu: [], xep: [] };
  const m = /^\/lessons\/([a-z0-9-]+)\.html$/.exec(String(url || ''));
  const file = m && path.join(JS_DIR, m[1] + '-data.js');
  if (file && fs.existsSync(file)) {
    try {
      const sb = { window: {}, document: { addEventListener() {}, querySelector() { return null; }, getElementById() { return null; } } };
      vm.runInNewContext(fs.readFileSync(file, 'utf8') +
        '\n;this.__ht = typeof dialogData !== "undefined" ? dialogData : null; this.__tu = typeof vocabData !== "undefined" ? vocabData : null;' +
        ' this.__xep = typeof sortData !== "undefined" ? sortData : null;', sb, { timeout: 3000 });
      const ht = [];
      (Array.isArray(sb.__ht) ? sb.__ht : []).forEach((sc) => (sc && Array.isArray(sc.lines) ? sc.lines : []).forEach((l) => {
        if (l && l.zh) ht.push({ zh: String(l.zh).trim(), py: String(l.py || '').trim(), vn: String(l.vn || '').trim() });
      }));
      const tu = (Array.isArray(sb.__tu) ? sb.__tu : []).filter((v) => v && v.zh && v.vn).map((v) => ({
        zh: String(v.zh).trim(), py: String(v.py || ''), vn: String(v.vn), hv: String(v.hv || ''), pos: String(v.pos || ''),
        giai: String(v.explain || v.usage || ''),
        mau: (Array.isArray(v.patterns) ? v.patterns : []).filter((p) => p && p.s).slice(0, 2).map((p) => ({ s: String(p.s), m: String(p.m || '') })),
        vd: (Array.isArray(v.exList) && v.exList.length ? v.exList : [{ zh: v.ex_zh, py: v.ex_py, vn: v.ex_vn }])
          .filter((x) => x && x.zh).map((x) => ({ zh: String(x.zh).trim(), py: String(x.py || '').trim(), vn: String(x.vn || '').trim() })),
      }));
      const xep = (Array.isArray(sb.__xep) ? sb.__xep : []).filter((x) => x && Array.isArray(x.words) && x.ans)
        .map((x) => ({ words: x.words.map(String), ans: String(x.ans) }));
      out = { ht, tu, xep };
    } catch (err) { out = { ht: [], tu: [], xep: [] }; }
  }
  baiCache.set(url, out);
  return out;
}

// Cac cau dung duoc cua 1 bai: { id, zh, py, vn, u, ht (cau hoi thoai), tu (tu vung ma cau la vi du) }
const cauCache = new Map();
function cauCuaBai(url) {
  if (cauCache.has(url)) return cauCache.get(url);
  const b = baiData(url), ds = [], thay = {};
  function them(x, nguon, tu) {
    const zh = x.zh, n = demHan(zh);
    if (n < 2 || n > 18 || !x.py || !x.vn || x.vn.length > 120 || /[\n_＿…]|\.\.\./.test(zh) || /[（(]/.test(zh) || /[0-9０-９]/.test(zh)) return; // so: may nghe ra 三千 / 3000 -> cham sai
    const id = idCau(zh);
    if (thay[id]) { if (nguon === 'ht') thay[id].ht = true; return; }
    thay[id] = { id, zh, py: x.py, vn: x.vn, u: url, ht: nguon === 'ht', tu: tu || '' };
    ds.push(thay[id]);
  }
  // cau vi du cua tu truoc: nghia dich doc lap; nghia cau hoi thoai hay phu thuoc cau truoc ("Để đọc sách.")
  b.tu.forEach((v) => v.vd.forEach((x) => them(x, 'tu', v.zh)));
  b.ht.forEach((l) => them(l, 'ht'));
  cauCache.set(url, ds);
  return ds;
}

// Tu dien de chia cau thanh the tu: tu vung + the xep cau cua MOI bai (dung 1 lan, ~1 giay, chay nen sau khi khoi dong)
// + vai tu chuc nang thong dung. Chua dung xong thi dung tu vung cac bai cung cap.
const TU_CHUNG = ('我们 你们 他们 她们 咱们 什么 怎么 怎么样 哪儿 那儿 这儿 哪里 这里 那里 这个 那个 哪个 一个 一下 一起 一点儿 有点儿 ' +
  '没有 不是 可以 现在 今天 明天 昨天 时候 知道 喜欢 认识 朋友 谢谢 不客气 对不起 没关系 再见 名字 因为 所以 但是 如果 已经 觉得 ' +
  '还是 或者 虽然 可是 非常 为什么 的话 是不是 好不好 多少 几个 东西 事情 地方 问题 自己 别人 大家 一定 可能 应该 需要 希望 ' +
  '爸爸 妈妈 哥哥 姐姐 弟弟 妹妹 爷爷 奶奶 儿子 女儿 海边 一些 那些 这些 怎么办 不错 好像 一样 一直 以后 以前 后来 然后').split(' ');
const TU_RE = /^[㐀-鿿]{2,5}$/;
let tuDienChung = null;
function xayTuDien() {
  if (tuDienChung) return tuDienChung;
  const s = new Set(TU_CHUNG);
  try {
    fs.readdirSync(JS_DIR).filter((f) => /-data\.js$/.test(f)).forEach((f) => {
      try {
        const sb = { window: {}, document: { addEventListener() {}, querySelector() { return null; }, getElementById() { return null; } } };
        vm.runInNewContext(fs.readFileSync(path.join(JS_DIR, f), 'utf8') +
          '\n;this.__tu = typeof vocabData !== "undefined" ? vocabData : null; this.__xep = typeof sortData !== "undefined" ? sortData : null;', sb, { timeout: 3000 });
        (Array.isArray(sb.__tu) ? sb.__tu : []).forEach((v) => { if (v && TU_RE.test(String(v.zh || '').trim())) s.add(String(v.zh).trim()); });
        (Array.isArray(sb.__xep) ? sb.__xep : []).forEach((x) => (x && Array.isArray(x.words) ? x.words : []).forEach((w) => { w = sach(w); if (TU_RE.test(w)) s.add(w); }));
      } catch (e) { /* bo qua file loi */ }
    });
  } catch (e) { /* khong doc duoc thu muc: dung tu dien cap */ }
  tuDienChung = s;
  return s;
}
setTimeout(xayTuDien, 4000).unref();
const tuDienCache = new Map();
function tuDienCua(u) {
  if (tuDienChung) return tuDienChung;
  const lv = capCuaUrl(u) || u;
  if (tuDienCache.has(lv)) return tuDienCache.get(lv);
  const s = new Set(TU_CHUNG);
  (MUC_LUC.theoCap[lv] || [u]).forEach((x) => baiData(x).tu.forEach((v) => { if (TU_RE.test(v.zh)) s.add(v.zh); }));
  tuDienCache.set(lv, s);
  return s;
}

// Chia cau thanh 2–8 the tu (bo dau cau). Uu tien cach chia cua bai tap Xep cau cua chinh bai (sortData)
const TRO_TU = /^[了的吧吗呢啊着过得地们呀啦嘛]$/;
function chiaTho(c) {
  const dich = sach(c.zh);
  const coSan = baiData(c.u).xep.find((x) => sach(x.ans) === dich);
  if (coSan) return coSan.words.map(sach).filter(Boolean);
  const td = tuDienCua(c.u);
  const the = [];
  const s = c.zh;
  let i = 0, vePhay = false;
  while (i < s.length) {
    const ch = s[i];
    if (!HAN_RE.test(ch)) {
      const m = /^[A-Za-z0-9]+/.exec(s.slice(i));
      if (m) { the.push({ t: m[0], dau: vePhay }); vePhay = false; i += m[0].length; } else { vePhay = true; i++; }
      continue;
    }
    let lay = 1;
    for (let k = Math.min(5, s.length - i); k >= 2; k--) { if (td.has(s.slice(i, i + k))) { lay = k; break; } }
    the.push({ t: s.slice(i, i + lay), dau: vePhay });
    vePhay = false;
    i += lay;
  }
  // dau: the dung ngay sau dau cau — khong gop qua dau cau
  while (the.length > 8) {
    let k = the.findIndex((x, j) => j > 0 && !x.dau && TRO_TU.test(x.t) && the[j - 1].t.length < 4);
    if (k > 0) { the.splice(k - 1, 2, { t: the[k - 1].t + the[k].t, dau: the[k - 1].dau }); continue; }
    // 2 the 1 chu ke nhau trong cung ve cau, roi cap ngan nhat
    let best = -1;
    for (let j = 0; j < the.length - 1; j++) {
      if (the[j + 1].dau) continue;
      const dd = the[j].t.length + the[j + 1].t.length;
      if (best < 0 || dd < the[best].t.length + the[best + 1].t.length) best = j;
    }
    if (best < 0) best = 0;
    the.splice(best, 2, { t: the[best].t + the[best + 1].t, dau: the[best].dau });
  }
  return the.map((x) => x.t);
}
function chiaThe(c) {
  const dich = sach(c.zh);
  const the = chiaTho(c);
  while (the.length < 3) {
    let dai = -1;
    the.forEach((t, k) => { if (t.length >= 2 && (dai < 0 || t.length > the[dai].length)) dai = k; });
    if (dai < 0) break;
    const t = the[dai];
    the.splice(dai, 1, t[0], t.slice(1));
  }
  return the.join('') === dich ? the : [];
}
function xaoThe(the) {
  let x = the.slice();
  for (let lan = 0; lan < 12; lan++) { x = tron(the); if (x.join('|') !== the.join('|')) break; }
  return x;
}

// Ngu phap cua bai (ngu-phap-tab-<cap>.js): chi giu ten / cau truc / giai thich / vi du
const npCache = new Map();
function nguPhapCap(lv) {
  if (npCache.has(lv)) return npCache.get(lv);
  let out = {};
  const file = /^[a-z0-9]+$/.test(String(lv || '')) && path.join(JS_DIR, 'ngu-phap-tab-' + lv + '.js');
  if (file && fs.existsSync(file)) {
    try {
      const sb = { window: {} };
      vm.runInNewContext(fs.readFileSync(file, 'utf8'), sb, { timeout: 8000 });
      const t = sb.window.NGU_PHAP_TAB || {};
      Object.keys(t).forEach((u) => {
        out[u] = (Array.isArray(t[u]) ? t[u] : []).map((p) => ({
          ten: String(p.ten || ''), cauTruc: (Array.isArray(p.cauTruc) ? p.cauTruc : []).slice(0, 2).map(String),
          giai: String(p.giaiThich || ''), viDu: (Array.isArray(p.viDu) ? p.viDu : []).map((v) => sach(v && v.zh)),
        }));
      });
    } catch (err) { out = {}; }
  }
  npCache.set(lv, out);
  return out;
}
// Diem ngu phap khop voi cau: cau nam trong vi du, hoac cau chua dau hieu 「…」 trong ten diem ngu phap
function nguPhapCho(c) {
  const ds = nguPhapCap(capCuaUrl(c.u))[c.u] || [];
  const s = sach(c.zh);
  let hop = ds.find((p) => p.viDu.indexOf(s) >= 0), dai = 0;
  if (!hop) {
    ds.forEach((p) => {
      const dau = (p.ten.match(/「([^」]+)」/g) || []).map((x) => x.slice(1, -1));
      dau.forEach((d) => {
        const phan = d.split(/[…\.~～+＋\s]+/).map(sach).filter((x) => x && HAN_RE.test(x));
        if (!phan.length) return;
        let vt = 0;
        const co = phan.every((x) => { const k = s.indexOf(x, vt); if (k < 0) return false; vt = k + x.length; return true; });
        const dd = phan.join('').length;
        if (co && dd > dai) { dai = dd; hop = p; }
      });
    });
  }
  return hop ? { ten: hop.ten, cauTruc: hop.cauTruc, giai: catNgan(hop.giai, 280) } : null;
}

// Tu then chot cua cau (de go chu + ghi chu): tu em hay sai > tu ma cau la vi du > tu dai nhat cua bai co trong cau
function tuThenChot(c, sai) {
  const trong = (ds) => ds.filter((v) => /^[㐀-鿿]{1,5}$/.test(v.zh) && v.py && c.zh.indexOf(v.zh) >= 0);
  let tuBai = trong(baiData(c.u).tu);
  if (!tuBai.length) tuBai = trong([].concat(...(MUC_LUC.theoCap[capCuaUrl(c.u)] || []).map((u) => baiData(u).tu)).filter((v) => v.zh.length >= 2));
  const chon = tuBai.find((v) => (sai || []).indexOf(v.zh) >= 0) || tuBai.find((v) => v.zh === c.tu) ||
    tuBai.slice().sort((a, b) => b.zh.length - a.zh.length)[0] || null;
  return chon;
}
// Bai tap go 1 chu: { mau (cau co ＿), py, vn, chu (dap an), lua (4 chu, chi gui khi em xin goi y) }
function baiGoChu(c, tu) {
  const han = [...c.zh].filter((ch) => HAN_RE.test(ch));
  let chu, py, vn, vt;
  if (tu) {
    const chs = [...tu.zh];
    chu = chs[Math.floor(Math.random() * chs.length)];
    vt = c.zh.indexOf(tu.zh) + tu.zh.indexOf(chu);
    py = tu.py; vn = tu.vn;
  } else {
    chu = han[Math.floor(Math.random() * han.length)];
    vt = c.zh.indexOf(chu);
    py = c.py; vn = c.vn;
  }
  const mau = c.zh.slice(0, vt) + '＿' + c.zh.slice(vt + 1);
  // 3 chu nhieu: chu trong tu vung cua bai / cung cap, khong nam trong tu then chot
  const kho = [];
  baiData(c.u).tu.concat(...(MUC_LUC.theoCap[capCuaUrl(c.u)] || []).slice(0, 12).map((u) => baiData(u).tu)).forEach((v) => {
    [...v.zh].forEach((ch) => { if (HAN_RE.test(ch) && ch !== chu && (!tu || tu.zh.indexOf(ch) < 0) && kho.indexOf(ch) < 0) kho.push(ch); });
  });
  const lua = tron([chu].concat(tron(kho).slice(0, 3)));
  return { mau, py, vn: catNgan(vn, 90), tuZh: tu ? tu.zh.replace(chu, '＿') : '', chu, lua };
}
function ghiChuTu(tu) {
  if (!tu) return null;
  return { zh: tu.zh, py: tu.py, vn: catNgan(tu.vn, 120), hv: tu.hv, pos: tu.pos, mau: tu.mau, giai: catNgan(tu.giai, 220) };
}
function tenNguon(u) {
  const b = MUC_LUC.theoUrl[u];
  if (!b) return '';
  return 'Bài ' + b.so + ' · ' + (MUC_LUC.tenCap[b.lv] || b.lv.toUpperCase()) + (b.ten ? ' — ' + b.ten : '');
}

// Dung ban ghi 1 ngay cho cau c (pool: cac cau cung bo bai de lay nghia nhieu)
function taoBanGhi(c, pool, sai, batDau) {
  const nhieu = [];
  const vnDa = { [c.vn.toLowerCase()]: 1 };
  const cungBai = tron(pool.filter((x) => x.u === c.u && x.id !== c.id));
  const khacBai = tron(pool.filter((x) => x.u !== c.u && x.id !== c.id));
  const thu = tron(cauCuaBai(BAI_THU));
  for (const x of cungBai.concat(khacBai, thu)) {
    if (nhieu.length >= 2) break;
    const k = x.vn.toLowerCase();
    if (vnDa[k] || x.id === c.id) continue;
    vnDa[k] = 1; nhieu.push(x.vn);
  }
  const lua = tron([c.vn].concat(nhieu));
  let the = chiaThe(c);
  if (the.length < 2) the = [...sach(c.zh)];
  const tu = tuThenChot(c, sai);
  const go = baiGoChu(c, tu);
  return {
    id: c.id, u: c.u, zh: c.zh, py: c.py, vn: c.vn, nguon: tenNguon(c.u), batDau: !!batDau,
    nghe: { lua, dap: lua.indexOf(c.vn), chon: null, dung: null },
    noi: { xong: false, diem: null, tu: false, lan: 0, nghe: '', trung: null },
    xep: { the: xaoThe(the), dap: the, lan: 0, xong: false, dungLan: 0, dungDau: null, cuoi: null },
    chu: { mau: go.mau, py: go.py, vn: go.vn, tuZh: go.tuZh, chu: go.chu, lua: go.lua, goiY: false, lan: 0, xong: false, dung: false, go: '' },
    ghiChu: { tu: ghiChuTu(tu), np: nguPhapCho(c) },
    xong: false, thuong: null, tMs: Date.now(),
  };
}

module.exports = function (app, d) {
  const FILE = path.join(d.DATA_DIR, 'moi_ngay.json');
  const homNay = () => d.vnDayKey();

  /* ======================= luu tru ======================= */
  const tkTrong = () => ({ streak: 0, best: 0, lastDone: '', week: '', weekDays: 0, total: 0 });
  async function docEm(uid, tuNgay) {
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      const x = all[uid] || {};
      const ngay = {};
      Object.keys(x.d || {}).forEach((k) => { if (k >= tuNgay) ngay[k] = x.d[k]; });
      return { tk: Object.assign(tkTrong(), x.tk || {}), d: ngay };
    }
    const [[r]] = await d.db().query('SELECT streak, best, last_done, week, week_days, total_days FROM moi_ngay_chuoi WHERE user_id = ?', [uid]);
    const [rows] = await d.db().query('SELECT day, data FROM moi_ngay WHERE user_id = ? AND day >= ?', [uid, tuNgay]);
    const ngay = {};
    rows.forEach((x) => { try { ngay[String(x.day)] = JSON.parse(x.data); } catch (e) { /* bo qua dong hong */ } });
    const tk = r ? { streak: r.streak || 0, best: r.best || 0, lastDone: r.last_done ? String(r.last_done) : '', week: r.week ? String(r.week) : '', weekDays: r.week_days || 0, total: r.total_days || 0 } : tkTrong();
    return { tk, d: ngay };
  }
  async function ghiNgay(uid, ngay, rec, tk) {
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      const x = all[uid] || (all[uid] = { tk: tkTrong(), d: {} });
      x.d = x.d || {};
      x.d[ngay] = rec;
      if (tk) x.tk = tk;
      const han = ngayTruoc(homNay(), GIU_NGAY);
      Object.keys(x.d).forEach((k) => { if (k < han) delete x.d[k]; });
      d.writeJsonFile(FILE, all);
      return;
    }
    await d.db().query(
      'INSERT INTO moi_ngay (user_id, day, sid, data, done, updated_ms) VALUES (?,?,?,?,?,?) ' +
        'ON DUPLICATE KEY UPDATE sid = VALUES(sid), data = VALUES(data), done = VALUES(done), updated_ms = VALUES(updated_ms)',
      [uid, ngay, rec.id, JSON.stringify(rec), rec.xong ? 1 : 0, Date.now()]
    );
    if (tk) {
      await d.db().query(
        'INSERT INTO moi_ngay_chuoi (user_id, streak, best, last_done, week, week_days, total_days, updated_ms) VALUES (?,?,?,?,?,?,?,?) ' +
          'ON DUPLICATE KEY UPDATE streak = VALUES(streak), best = VALUES(best), last_done = VALUES(last_done), week = VALUES(week), ' +
          'week_days = VALUES(week_days), total_days = VALUES(total_days), updated_ms = VALUES(updated_ms)',
        [uid, tk.streak, tk.best, tk.lastDone || null, tk.week || null, tk.weekDays, tk.total, Date.now()]
      );
    }
  }
  // Chuoi cua nhieu em (bang lop): uids = null -> cac em con giu chuoi tren ca web (toi da 40)
  async function dsTk(uids) {
    const out = {};
    const homQua = ngayTruoc(homNay(), 1);
    if (!d.USE_DB) {
      const all = d.readJsonFile(FILE) || {};
      Object.keys(all).forEach((uid) => {
        if (uids ? uids.indexOf(uid) < 0 : !(all[uid].tk && all[uid].tk.lastDone >= homQua)) return;
        out[uid] = Object.assign(tkTrong(), all[uid].tk || {});
      });
      return out;
    }
    if (uids && !uids.length) return out;
    const [rows] = uids
      ? await d.db().query('SELECT user_id, streak, best, last_done, week, week_days, total_days FROM moi_ngay_chuoi WHERE user_id IN (?)', [uids])
      : await d.db().query('SELECT user_id, streak, best, last_done, week, week_days, total_days FROM moi_ngay_chuoi WHERE last_done >= ? ORDER BY streak DESC LIMIT 40', [homQua]);
    rows.forEach((r) => {
      out[r.user_id] = { streak: r.streak || 0, best: r.best || 0, lastDone: r.last_done ? String(r.last_done) : '', week: r.week ? String(r.week) : '', weekDays: r.week_days || 0, total: r.total_days || 0 };
    });
    return out;
  }

  async function initTable() {
    if (!d.USE_DB) return;
    await d.db().query(
      'CREATE TABLE IF NOT EXISTS moi_ngay (' +
        'user_id VARCHAR(36) NOT NULL, day CHAR(10) NOT NULL, sid CHAR(12) NOT NULL, data MEDIUMTEXT NOT NULL, ' +
        'done TINYINT NOT NULL DEFAULT 0, updated_ms BIGINT NOT NULL DEFAULT 0, ' +
        'PRIMARY KEY (user_id, day), INDEX idx_day (day), ' +
        'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
      ')'
    );
    await d.db().query(
      'CREATE TABLE IF NOT EXISTS moi_ngay_chuoi (' +
        'user_id VARCHAR(36) NOT NULL PRIMARY KEY, streak INT NOT NULL DEFAULT 0, best INT NOT NULL DEFAULT 0, ' +
        'last_done CHAR(10) NULL, week CHAR(10) NULL, week_days INT NOT NULL DEFAULT 0, total_days INT NOT NULL DEFAULT 0, ' +
        'updated_ms BIGINT NOT NULL DEFAULT 0, INDEX idx_last (last_done), ' +
        'FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE' +
      ')'
    );
    await d.db().query('DELETE FROM moi_ngay WHERE day < ?', [ngayTruoc(homNay(), GIU_NGAY)]);
  }

  // Moi em 1 hang doi: 2 yeu cau cung luc (bam 2 lan, 2 tab) khong ghi de len nhau
  const hangDoi = new Map();
  function lanLuot(uid, fn) {
    const truoc = hangDoi.get(uid) || Promise.resolve();
    const p = truoc.then(fn, fn);
    const sau = p.catch(() => {});
    hangDoi.set(uid, sau);
    sau.then(() => { if (hangDoi.get(uid) === sau) hangDoi.delete(uid); });
    return p;
  }

  /* ======================= chon cau ======================= */
  async function chonCau(user, ganDay) {
    let on = { urls: [], sai: [], gan: '' };
    try { on = await d.baiOnCua(user); } catch (e) { /* van ra duoc cau Bai 1 */ }
    let urls = (on.urls || []).filter((u) => cauCuaBai(u).length);
    let batDau = false;
    if (!urls.length) {
      const lv = MUC_LUC.theoCap[user.capHoc] ? user.capHoc : MUC_LUC.theoCap[user.level] ? user.level : 'hsk1';
      urls = [(MUC_LUC.theoCap[lv] || [])[0] || BAI_THU];
      if (!cauCuaBai(urls[0]).length) urls = [BAI_THU];
      batDau = true;
    }
    const pool = [], thay = {};
    urls.forEach((u) => cauCuaBai(u).forEach((c) => { if (!thay[c.id]) { thay[c.id] = 1; pool.push(c); } }));
    const sai = (on.sai || []).filter((z) => typeof z === 'string' && z);
    let ung = pool.filter((c) => !ganDay[c.id]);
    if (!ung.length) {
      // da gap het trong 30 ngay: lay cau gap lau nhat
      const cu = pool.slice().sort((a, b) => (ganDay[a.id] < ganDay[b.id] ? -1 : 1));
      ung = cu.slice(0, Math.max(1, Math.ceil(cu.length / 3)));
    }
    const nang = ung.map((c) => {
      const n = demHan(c.zh);
      let w = 1;
      if (sai.some((z) => c.zh.indexOf(z) >= 0)) w += 4;
      if (c.u === on.gan) w += 1.5;
      if (n >= 4 && n <= 14) w += 1;
      if (c.ht) w += 0.5;
      if (chiaTho(c).length > 8) w *= 0.3; // cau dai qua phai gop the -> it chon
      return { c, w };
    });
    // bo cau chia the khong duoc (vd 谢谢 -> 2 the giong nhau) neu con cau khac
    const tot = nang.filter((x) => { const t = chiaThe(x.c); return t.length >= 2 && new Set(t).size >= 2; });
    const ds = tot.length ? tot : nang;
    let r = Math.random() * ds.reduce((s, x) => s + x.w, 0);
    let c = ds[ds.length - 1].c;
    for (const x of ds) { r -= x.w; if (r <= 0) { c = x.c; break; } }
    return taoBanGhi(c, pool, sai, batDau);
  }

  /* ======================= trang thai gui cho client ======================= */
  function lich7(em, ngay) {
    const out = [];
    for (let i = 6; i >= 0; i--) {
      const k = ngayTruoc(ngay, i);
      const r = em.d[k];
      out.push({ ngay: k, thu: THU[new Date(k + 'T00:00:00Z').getUTCDay()], xong: !!(r && r.xong), homNay: i === 0 });
    }
    return out;
  }
  function chuoiHienTai(tk, ngay) {
    return tk.lastDone === ngay || tk.lastDone === ngayTruoc(ngay, 1) ? tk.streak : 0;
  }
  function xem(rec, em, ngay) {
    const buoc = rec.xong ? 'xong' : rec.nghe.chon == null ? 'nghe' : !rec.noi.xong ? 'noi' : !rec.xep.xong ? 'xep' : 'chu';
    const daNghe = rec.nghe.chon != null;
    const v = {
      ngay, buoc, nguon: rec.nguon, batDau: rec.batDau, cap: capCuaUrl(rec.u), bai: rec.u,
      nghe: { am: b64(rec.zh), p: b64(rec.py), lua: rec.nghe.lua, chon: rec.nghe.chon, dung: rec.nghe.dung, dap: daNghe ? rec.nghe.dap : null },
      // cau day du: chi luc buoc Noi va khi da xong (buoc Viet chi thay nghia + pinyin)
      cau: daNghe && (buoc === 'noi' || buoc === 'xong') ? { zh: rec.zh, py: rec.py, vn: rec.vn } : null,
      goiY: daNghe ? { py: rec.py, vn: rec.vn } : null,
      noi: daNghe ? { xong: rec.noi.xong, diem: rec.noi.diem, tu: rec.noi.tu, lan: rec.noi.lan, nghe: rec.noi.nghe, trung: rec.noi.trung, dat: NOI_DAT } : null,
      xep: rec.noi.xong ? {
        the: rec.xep.the, lan: rec.xep.lan, conLan: Math.max(0, XEP_LAN - rec.xep.lan), xong: rec.xep.xong, dungLan: rec.xep.dungLan,
        dungDau: rec.xep.dungDau, cuoi: rec.xep.cuoi, dap: rec.xep.xong ? rec.xep.dap : null,
      } : null,
      chu: rec.xep.xong ? {
        mau: rec.chu.mau, py: rec.chu.py, vn: rec.chu.vn, tuZh: rec.chu.tuZh, lua: rec.chu.goiY ? rec.chu.lua : null, lan: rec.chu.lan,
        conLan: Math.max(0, CHU_LAN - rec.chu.lan), xong: rec.chu.xong, dung: rec.chu.dung, go: rec.chu.go, dap: rec.chu.xong ? rec.chu.chu : null,
      } : null,
      ghiChu: rec.xong ? rec.ghiChu : null,
      thuong: rec.xong ? rec.thuong : null,
      chuoi: { hienTai: chuoiHienTai(em.tk, ngay), best: em.tk.best, tong: em.tk.total, lich: lich7(em, ngay) },
    };
    return v;
  }

  // Doc (hoac tao) ban ghi hom nay cua em
  async function banGhiHomNay(user) {
    const ngay = homNay();
    const em = await docEm(user.id, ngayTruoc(ngay, KHONG_LAP_NGAY));
    let rec = em.d[ngay];
    if (!rec) {
      const ganDay = {};
      Object.keys(em.d).forEach((k) => { if (k !== ngay && em.d[k] && em.d[k].id) ganDay[em.d[k].id] = k; });
      rec = await chonCau(user, ganDay);
      em.d[ngay] = rec;
      await ghiNgay(user.id, ngay, rec);
    }
    return { ngay, em, rec };
  }

  // Xong ca 3 buoc: tinh chuoi + thuong (so sao client se xin qua /api/stars/game)
  function ketThucNgay(rec, em, ngay) {
    const tk = em.tk;
    if (tk.lastDone !== ngay) {
      tk.streak = tk.lastDone === ngayTruoc(ngay, 1) ? (tk.streak || 0) + 1 : 1;
      tk.best = Math.max(tk.best || 0, tk.streak);
      tk.lastDone = ngay;
      tk.total = (tk.total || 0) + 1;
      const tuan = d.vnWeekKey(Date.parse(ngay + 'T12:00:00Z') - d.VN_OFFSET_MS);
      if (tk.week !== tuan) { tk.week = tuan; tk.weekDays = 0; }
      tk.weekDays = (tk.weekDays || 0) + 1;
    }
    const ly = [{ t: 'Hoàn thành câu hôm nay', n: 3 }];
    if (rec.nghe.dung) ly.push({ t: 'Nghe hiểu đúng', n: 1 });
    if (rec.xep.dungLan === 1) ly.push({ t: 'Xếp câu đúng ngay lần đầu', n: 1 });
    if (tk.streak % 7 === 0) ly.push({ t: 'Tròn ' + tk.streak + ' ngày liên tiếp 🔥', n: 5 });
    if (tk.streak % 30 === 0) ly.push({ t: 'Chuỗi ' + tk.streak + ' ngày — siêu kiên trì 🏆', n: 10 });
    rec.thuong = { n: ly.reduce((s, x) => s + x.n, 0), ly, daNhan: null, chuoi: tk.streak };
    rec.xong = true;
    rec.xongMs = Date.now();
    return tk;
  }

  /* ======================= API ======================= */
  const R = '/api/moi-ngay';
  const xong = (res, x, them) => res.json(Object.assign(xem(x.rec, x.em, x.ngay), them || {}));

  app.get(R, d.requireAuth, d.asyncRoute(async (req, res) => {
    const x = await lanLuot(req.user.id, () => banGhiHomNay(req.user));
    xong(res, x);
  }));

  // Buoc 1 — chon nghia: { chon: 0..2 }
  app.post(R + '/nghe', d.requireAuth, d.asyncRoute(async (req, res) => {
    const x = await lanLuot(req.user.id, async () => {
      const x = await banGhiHomNay(req.user);
      const chon = Math.floor(Number(req.body && req.body.chon));
      if (x.rec.nghe.chon == null && chon >= 0 && chon < x.rec.nghe.lua.length) {
        x.rec.nghe.chon = chon;
        x.rec.nghe.dung = chon === x.rec.nghe.dap;
        await ghiNgay(req.user.id, x.ngay, x.rec);
      }
      return x;
    });
    xong(res, x);
  }));

  // Buoc 2 — noi: { nghe: chu trinh duyet nghe duoc } hoac { tu: true, tot: true|false } (tu cham)
  app.post(R + '/noi', d.requireAuth, d.asyncRoute(async (req, res) => {
    let kq = null;
    const x = await lanLuot(req.user.id, async () => {
      const x = await banGhiHomNay(req.user);
      const r = x.rec;
      if (r.nghe.chon == null || r.xong) return x;
      const b = req.body || {};
      if (r.noi.lan >= 12) return x;
      r.noi.lan++;
      if (b.tu) {
        r.noi.tu = true;
        kq = { tu: true, tot: !!b.tot };
      } else {
        const nghe = String(b.nghe || '').slice(0, 200);
        const s = soPhatAm(r.zh, nghe);
        kq = { diem: s.diem, trung: s.trung, nghe, dat: s.diem >= NOI_DAT };
        if (r.noi.diem == null || s.diem >= r.noi.diem) { r.noi.diem = s.diem; r.noi.nghe = nghe; r.noi.trung = s.trung; }
      }
      r.noi.xong = true; // da thu noi la qua buoc (khong bao gio bi ket)
      await ghiNgay(req.user.id, x.ngay, r);
      return x;
    });
    xong(res, x, { kq });
  }));

  // Buoc 3a — xep the: { thuTu: [chi so the theo thu tu em xep] }
  app.post(R + '/xep', d.requireAuth, d.asyncRoute(async (req, res) => {
    let kq = null;
    const x = await lanLuot(req.user.id, async () => {
      const x = await banGhiHomNay(req.user);
      const r = x.rec, t = r.xep;
      if (!r.noi.xong || t.xong) return x;
      const thuTu = Array.isArray(req.body && req.body.thuTu) ? req.body.thuTu.map((n) => Math.floor(Number(n))) : [];
      const hopLe = thuTu.length === t.the.length && new Set(thuTu).size === thuTu.length && thuTu.every((n) => n >= 0 && n < t.the.length);
      if (!hopLe) { kq = { loi: 'Em xếp hết các thẻ rồi bấm Kiểm tra nhé.' }; return x; }
      const cau = thuTu.map((n) => t.the[n]);
      const dich = t.dap.join('');
      t.lan++;
      const dung = cau.join('') === dich;
      // so the dau tien da dung vi tri (theo chu, the giong nhau doi cho van tinh dung)
      let dau = 0, noi = '';
      for (const w of cau) { if (dich.indexOf(noi + w) === 0) { noi += w; dau++; } else break; }
      t.dungDau = dau; t.cuoi = thuTu;
      if (dung) { t.xong = true; t.dungLan = t.lan; } else if (t.lan >= XEP_LAN) t.xong = true;
      kq = { dung, dungDau: dau };
      await ghiNgay(req.user.id, x.ngay, r);
      return x;
    });
    xong(res, x, { kq });
  }));

  // Buoc 3b — go chu: { chu: '好' } · { goiY: true } -> hien 4 chu de chon
  app.post(R + '/chu', d.requireAuth, d.asyncRoute(async (req, res) => {
    let kq = null;
    const x = await lanLuot(req.user.id, async () => {
      const x = await banGhiHomNay(req.user);
      const r = x.rec, c = r.chu;
      if (!r.xep.xong || c.xong) return x;
      const b = req.body || {};
      if (b.goiY) { c.goiY = true; await ghiNgay(req.user.id, x.ngay, r); return x; }
      const go = String(b.chu || '').trim();
      const han = (go.match(HAN_G) || [])[0] || '';
      if (!han) { kq = { loi: 'Em gõ một chữ Hán vào ô nhé.' }; return x; }
      c.lan++;
      c.go = han;
      const dung = han === c.chu;
      if (dung) { c.xong = true; c.dung = true; } else if (c.lan >= CHU_LAN) c.xong = true;
      kq = { dung };
      let tk = null;
      if (c.xong) tk = ketThucNgay(r, x.em, x.ngay);
      await ghiNgay(req.user.id, x.ngay, r, tk);
      return x;
    });
    xong(res, x, { kq });
  }));

  // Client bao so sao da nhan duoc tu /api/stars/game (chi de khong xin lai lan nua)
  app.post(R + '/nhan', d.requireAuth, d.asyncRoute(async (req, res) => {
    const x = await lanLuot(req.user.id, async () => {
      const x = await banGhiHomNay(req.user);
      const t = x.rec.thuong;
      if (x.rec.xong && t && t.daNhan == null) {
        t.daNhan = Math.max(0, Math.min(t.n, Math.floor(Number(req.body && req.body.duoc) || 0)));
        await ghiNgay(req.user.id, x.ngay, x.rec);
      }
      return x;
    });
    xong(res, x);
  }));

  // Bang tuan "Ai giu chuoi dai nhat": cac ban cung lop (ten day du — chi ban cung lop da dang nhap moi xem duoc);
  // chua vao lop -> cac ban dang giu chuoi tren ca web (ten an bot nhu tenCongKhai cua server.js)
  const tenAn = (name) => {
    const t = String(name || '').trim().split(/\s+/).filter(Boolean);
    if (t.length < 2) return String(name || '');
    return t[t.length - 1] + ' ' + t[0].charAt(0).toUpperCase() + '.';
  };
  app.get(R + '/bang', d.requireAuth, d.asyncRoute(async (req, res) => {
    const ngay = homNay(), uid = req.user.id;
    const tuan = d.vnWeekKey();
    const [st, ten] = await Promise.all([d.loadClassState(), d.loadUserNames()]);
    const mem = st && st.members ? st.members[uid] : null;
    let loai = 'chung', tenLop = '', ids = null;
    if (mem) {
      loai = 'lop';
      const lop = (st.classes || []).find((c) => c.id === mem.classId);
      tenLop = lop ? lop.name : '';
      ids = Object.keys(st.members).filter((k) => st.members[k].classId === mem.classId);
    }
    const tks = await dsTk(ids);
    if (!tks[uid]) {
      const em = await docEm(uid, ngay);
      tks[uid] = em.tk;
    }
    const ds = Object.keys(tks).filter((k) => ten[k]).map((k) => {
      const tk = tks[k];
      return { k, chuoi: chuoiHienTai(tk, ngay), tuan: tk.week === tuan ? tk.weekDays || 0 : 0, best: tk.best || 0, homNay: tk.lastDone === ngay };
    }).filter((r) => r.chuoi > 0 || r.tuan > 0 || r.k === uid)
      .sort((a, b) => b.chuoi - a.chuoi || b.tuan - a.tuan || b.best - a.best);
    let hang = 0, truoc = null;
    const rows = ds.map((r, i) => {
      if (!truoc || truoc.chuoi !== r.chuoi || truoc.tuan !== r.tuan) hang = i + 1;
      truoc = r;
      const laEm = r.k === uid;
      return { hang, ten: laEm ? String(ten[r.k]) : loai === 'lop' ? String(ten[r.k]) : tenAn(ten[r.k]), chuoi: r.chuoi, tuan: r.tuan, homNay: r.homNay, laEm };
    });
    const top = rows.slice(0, 10);
    const em = rows.find((r) => r.laEm);
    if (em && top.indexOf(em) < 0) top.push(em);
    res.json({ loai, tenLop, tuan, ds: top });
  }));

  // Khach chua dang nhap: 1 cau mau cua HSK1 Bai 1 (cham ngay tren may, khong luu gi)
  app.get(R + '/thu', d.asyncRoute(async (req, res) => {
    const pool = cauCuaBai(BAI_THU);
    if (!pool.length) return res.status(503).json({ error: 'Chưa có câu mẫu.' });
    const tot = pool.filter((c) => { const t = chiaThe(c); return t.length >= 3 && new Set(t).size >= 3; });
    const c = (tot.length ? tot : pool)[Math.floor(Math.random() * (tot.length || pool.length))];
    const r = taoBanGhi(c, pool, [], false);
    res.json({
      thu: true, nguon: r.nguon, cap: capCuaUrl(r.u), bai: r.u,
      cau: { zh: r.zh, py: r.py, vn: r.vn }, am: b64(r.zh),
      nghe: { lua: r.nghe.lua, dap: r.nghe.dap }, the: r.xep.the, dap: r.xep.dap,
      chu: { mau: r.chu.mau, py: r.chu.py, vn: r.chu.vn, tuZh: r.chu.tuZh, chu: r.chu.chu, lua: r.chu.lua },
      ghiChu: r.ghiChu, dat: NOI_DAT,
    });
  }));

  return { initTable, _thu: { soPhatAm, chiaThe, cauCuaBai, nguPhapCho, tuThenChot } };
};
