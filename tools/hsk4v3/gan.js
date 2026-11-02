/* Dung HSK 4 (3.0) — giao trinh 新HSK教程4上 — tu nguon soan san trong tools/hsk4v3/bai-N/:
     tu.json   40-ish tu moi (nghia, Han Viet, vi du, cum tu, mau cau, cau tu kiem tra)
     bai.json  bai khoa (anh nhan vat, tranh), ngu phap chia theo diem, bai tap SGK, nghe, noi, dich, viet
   Sinh ra:
     public/js/hsk4v3-bai-N-data.js, public/js/hsk4v3-bai-N-strokes.js, public/lessons/hsk4v3-bai-N.html
     public/js/ngu-phap-tab-hsk4v3.js, data-grammar/hsk4v3/bai-N.json (-> tools/build-grammar.js)
     khoi hsk4v3 trong public/js/data.js
   Roi chay: build-grammar hsk4v3 · seo-lessons --that · build-lop hsk4v3 · stamp-assets --that
   Anh lay tu sach: public/images/hsk4v3/nv/<ten>.webp (mat nhan vat), public/images/hsk4v3/bai-N/*.webp
   Cai mot lan: cd tools/hsk4v3 && npm install   (pinyin-pro, hanzi-writer-data — chi dung luc soan)
   Chay: node tools/hsk4v3/gan.js --bai 1-6  (chi cac bai da duyet; bo --bai = moi bai co nguon)
         node tools/hsk4v3/gan.js --khong-chay (chi sinh file, khong chay cac cong cu phia sau) */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const { pinyin } = require('pinyin-pro');
const py = require('./py');

const ROOT = path.join(__dirname, '..', '..');
const PUB = path.join(ROOT, 'public');
const CAP = 'hsk4v3';
const TEN_CAP = 'HSK4 (3.0 Mới)';
const NV = { 小语: 'xiaoyu', 白家月: 'bai', 安妮: 'annie', 陈天中: 'chen', 李文: 'liwen', 王一飞: 'yifei', 王一雪: 'yixue',
  刘明: 'liuming', 刘小雪: 'xiaoxue', 刘小明: 'xiaoming', 杨同乐: 'tongle' };
const CHI_MUC = require('./chi-muc')();
const CHU_MOI = JSON.parse(fs.readFileSync(path.join(__dirname, 'chu-moi.json'), 'utf8'));

const HAN = /[㐀-鿿]/;
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const docJ = (f) => JSON.parse(fs.readFileSync(f, 'utf8'));
const loi = [];

function anh(x, so) {
  if (!x) return '';
  if (/^\//.test(x)) return x;
  if (/^nv:/.test(x)) return '/images/hsk4v3/nv/' + x.slice(3) + '.webp';
  return '/images/hsk4v3/bai-' + so + '/' + x + '.webp';
}
function nguoi(x, so) {
  if (typeof x === 'string') {
    if (!NV[x]) loi.push('Bai ' + so + ': chua co anh nhan vat ' + x);
    return { ten: x, anh: NV[x] ? anh('nv:' + NV[x]) : '' };
  }
  return { ten: x.ten, anh: anh(x.anh, so) };
}

// So net + du lieu net viet cua mot chu (hanzi-writer-data)
const netCache = {};
function net(c) {
  if (c in netCache) return netCache[c];
  try { netCache[c] = require('hanzi-writer-data/' + c + '.json'); } catch (e) { netCache[c] = null; }
  return netCache[c];
}

function chuHan(c, tu, so) {
  const goc = CHI_MUC.chu[c] || CHU_MOI[c];
  if (!goc) { loi.push('Bai ' + so + ': thieu phan tich chu ' + c + ' (them vao chu-moi.json)'); return null; }
  const i = [...tu.zh].indexOf(c);
  const am = pinyin(tu.zh, { type: 'array', toneSandhi: false })[i] || goc.p;
  const n = net(c);
  return { c, p: am, type: goc.type, st: n ? n.strokes.length : goc.st, ord: goc.ord, rad: goc.rad, mean: goc.mean, tip: goc.tip, cf: goc.cf, w: goc.w };
}

function dungBai(so) {
  const dir = path.join(__dirname, 'bai-' + so);
  const T = docJ(path.join(dir, 'tu.json'));
  const B = docJ(path.join(dir, 'bai.json'));
  const url = '/lessons/' + CAP + '-bai-' + so + '.html';
  // pinyin cua tu moi theo sach -> phien am cau dung dung tu do
  const them = {};
  T.forEach((w) => { them[w.zh] = w.py; });
  const P = (s) => py(s, them);
  const exObj = (e) => ({ zh: e[0], py: P(e[0]), vn: e[1] });

  const vocabData = T.map((w, i) => {
    const ex = (w.ex || []).map(exObj);
    return {
      n: i + 1, zh: w.zh, py: w.py, pos: w.pos, vn: w.vn, hv: w.hv, em: w.em, lesson: w.k,
      explain: w.explain || [], usage: w.usage || '',
      collo: (w.collo || []).map((c) => c[0]),
      colloFull: (w.collo || []).map((c) => ({ zh: c[0], py: P(c[0]), vn: c[1] })),
      patterns: (w.pat || []).map((p) => ({ s: p[0], m: p[1] })),
      ex_zh: ex[0] ? ex[0].zh : '', ex_py: ex[0] ? ex[0].py : '', ex_vn: ex[0] ? ex[0].vn : '', exList: ex,
      hanzi: [...w.zh].filter((c) => HAN.test(c)).map((c) => chuHan(c, w, so)).filter(Boolean),
      checkList: (w.check || []).map((c) => ({ promptLang: 'vi', prompt: c[0], answer: c[1], answerPy: P(c[1]), note: c[2], pair: c[3] })),
    };
  });

  const wuData = (B.wu || []).map((w) => ({ img: anh(w.img, so), label: w.label, py: w.py, letter: w.letter }));
  const dialogData = B.dialogs.map((d) => {
    const o = { scene: d.scene, anh: anh(d.anh, so), nguoi: (d.nguoi || []).map((x) => nguoi(x, so)), preQuiz: d.preQuiz || [],
      lines: d.lines.map((l) => ({ sp: l.sp || 0, zh: l.zh, py: P(l.zh), vn: l.vn })) };
    if (d.doan) o.doan = true;
    return o;
  });
  const listenData = B.listen || [];
  const matchData = B.match || [];
  const fillData = B.fill || [];
  const sortData = (B.sort || []).map((s) => ({ words: s.words, ans: s.ans, audio: s.ans }));
  const mcData = B.mc || [];
  const speakingData = B.speaking || null;
  const translateData = (B.translate || []).map((t) => ({ vi: t[0], zh: t[1], py: P(t[1]) }));
  const translateDataRev = (B.translateRev || []).map((t) => ({ vi: t[0], zh: t[1], py: P(t[1]) }));
  const sgkData = (B.sgk || []).map((p) => Object.assign({}, p, { cau: p.cau.map((c) => (c.anh ? Object.assign({}, c, { anh: anh(c.anh, so) }) : c)) }));
  let writingData = null;
  if (B.writing) {
    writingData = Object.assign({}, B.writing);
    if (typeof writingData.model === 'string') writingData.model = { zh: writingData.model, py: P(writingData.model) };
  }

  // Ngu phap chia theo diem
  const npt = (B.nguphap || []).map((g) => ({
    so: g.so, ten: g.ten, tenVn: g.tenVn, cauTruc: g.cauTruc, giaiThich: g.giaiThich,
    viDu: g.viDu.map((v) => ({ zh: v[0], py: P(v[0]), vn: v[1] })),
    loi: g.loi.map((x) => ({ sai: x[0], why: x[1], dung: x[2] })),
    bt: g.bt,
  }));
  // Bai tap ngu phap cho tro choi / che do lop hoc (data-grammar -> grammar-hsk4v3.js)
  const dg = { [url]: { points: npt.map((g) => {
    const items = [];
    g.bt.forEach((b) => b.cau.forEach((c) => {
      if (c.kieu === 'dien' && c.phan.length === 2 && c.dap.length === 1) {
        const dung = c.dap[0][0];
        items.push({ context: c.goiY || '', pre: c.phan[0], blank: dung, post: c.phan[1], options: c.chon, answer: Math.max(0, c.chon.indexOf(dung)), explanation: c.giai || '' });
      } else if (c.kieu === 'dungsai') {
        items.push({ type: 'judge', context: 'Xét câu sau đúng hay sai.', sentence: c.cau, isCorrect: !!c.dung, correctVersion: c.sua || '', explanation: c.giai || '' });
      } else if (c.kieu === 'xep') {
        items.push({ type: 'sort', context: 'Sắp xếp: “' + (c.goiY || '') + '”', words: c.manh, answer: c.dap[0], explanation: c.giai || '' });
      } else if (c.kieu === 'dich') {
        items.push({ type: 'translate', context: 'Dịch sang tiếng Trung.', promptLang: 'vi', prompt: c.vn, answer: c.dap[0], answerPy: P(c.dap[0]), explanation: c.giai || '' });
      }
    }));
    return { title: g.ten + ' — ' + g.tenVn.replace(/^.*?—\s*/, ''), errors: g.loi.map((x) => ({ wrong: x.sai, why: x.why, right: x.dung })), items };
  }) } };

  const data = { vocabData, wuData, dialogData, listenData, matchData, fillData, sortData, mcData, speakingData, translateData, translateDataRev, sgkData, writingData };
  return { so, url, T, B, data, npt, dg };
}

// ---------- ghi file du lieu ----------
function ghiData(L) {
  const out = ['// HSK 4 (3.0) · Bai ' + L.so + ' — sinh boi tools/hsk4v3/gan.js tu tools/hsk4v3/bai-' + L.so + '/ (dung sua tay).'];
  Object.keys(L.data).forEach((k) => out.push('var ' + k + ' = ' + JSON.stringify(L.data[k], null, 1) + ';'));
  fs.writeFileSync(path.join(PUB, 'js', CAP + '-bai-' + L.so + '-data.js'), out.join('\n') + '\n');
  const nets = {};
  L.data.vocabData.forEach((v) => [...v.zh].forEach((c) => { const n = HAN.test(c) && net(c); if (n) nets[c] = { strokes: n.strokes, medians: n.medians }; }));
  fs.writeFileSync(path.join(PUB, 'js', CAP + '-bai-' + L.so + '-strokes.js'), 'const STROKE_DATA = ' + JSON.stringify(nets) + ';\n');
}

// ---------- trang bai hoc (khuon: hsk3v3-bai-1.html) ----------
function cardNguPhap(g, i) {
  const rule = g.cauTruc.map((c) => '<strong style="color:var(--sky-d)">' + esc(c) + '</strong>').join('<br>');
  return '  <div class="grammar-card">\n' +
    '    <div class="g-title"><span class="g-num">' + (i + 1) + '</span>' + esc(g.ten) + '</div>\n' +
    '    <div class="g-sub">' + esc(g.tenVn) + '<br>' + esc(g.giaiThich) + '</div>\n' +
    '    <div class="g-rule"><strong>Cấu trúc：</strong> ' + rule + '</div>\n' +
    '    <table class="g-table">\n      <thead><tr><th>Câu tiếng Trung</th><th>Phiên âm</th><th>Nghĩa tiếng Việt</th></tr></thead>\n      <tbody>\n' +
    g.viDu.map((v) => '        <tr><td style="font-family: Be Vietnam Pro, Noto Serif SC, sans-serif;color:var(--sky-d)">' + esc(v.zh) +
      '</td><td style="color:var(--soft);font-size:0.82rem">' + esc(v.py) + '</td><td>' + esc(v.vn) + '</td></tr>').join('\n') +
    '\n      </tbody>\n    </table>\n  </div>\n';
}
function thay(html, re, moi, ten) {
  if (!re.test(html)) { loi.push('Khuon trang: khong thay ' + ten); return html; }
  return html.replace(re, moi);
}
function ghiTrang(L) {
  let h = fs.readFileSync(path.join(PUB, 'lessons', 'hsk3v3-bai-1.html'), 'utf8');
  const B = L.B, nTu = L.T.length, nBk = B.dialogs.length, nNp = L.npt.length;
  const nhan = TEN_CAP + ' · Bài ' + L.so;
  h = h.replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->\n?/, '');
  h = thay(h, /<title>[^<]*<\/title>/, '<title>' + esc(nhan + ' · ' + B.zh) + '</title>', 'title');
  h = thay(h, /<meta name="hz-strokes" content="[^"]*">/, '<meta name="hz-strokes" content="/js/' + CAP + '-bai-' + L.so + '-strokes.js">', 'strokes');
  h = thay(h, /<script src="\/js\/hsk3v3-bai-1-data\.js[^"]*"><\/script>/, '<script src="/js/' + CAP + '-bai-' + L.so + '-data.js"></script>', 'data');
  const header = '<header class="site-header">\n  <a class="back-link" href="/">← Về trang chủ Hi Hán 喜汉</a>\n' +
    '  <div class="header-badge">' + esc(nhan) + '</div>\n  <div class="header-zh">' + esc(B.zh) + '</div>\n' +
    '  <div class="header-py">' + esc(B.py) + '</div>\n  <div class="header-vn">' + esc(B.vn) + '</div>\n  <div class="header-meta">\n' +
    '    <span class="h-chip">' + (B.icon || '📘') + ' Chủ đề: ' + esc(B.chuDe) + '</span>\n' +
    '    <span class="h-chip">📚 ' + nTu + ' từ mới</span>\n    <span class="h-chip">💬 ' + nBk + ' bài khoá</span>\n' +
    '    <span class="h-chip">📐 ' + nNp + ' điểm ngữ pháp</span>\n  </div>\n</header>';
  h = thay(h, /<header class="site-header">[\s\S]*?<\/header>/, header, 'header');
  const tabTu = '  <div class="lesson-tabs">\n    <button class="lesson-tab active" data-action="filter-vocab" data-lesson="0">Tất cả (' + nTu + ')</button>\n' +
    B.dialogs.map((d, i) => '    <button class="lesson-tab" data-action="filter-vocab" data-lesson="' + (i + 1) + '">📖 Bài khoá ' + (i + 1) + ' · ' + esc(d.tab) + '</button>').join('\n') + '\n  </div>';
  h = thay(h, /  <div class="lesson-tabs">[\s\S]*?<\/div>/, tabTu, 'lesson-tabs');
  h = h.replace(/<span class="sec-badge">\d+ từ<\/span>/, '<span class="sec-badge">' + nTu + ' từ</span>');
  h = h.replace(/<span class="flash-ctr" id="flash-ctr">1 \/ \d+<\/span>/, '<span class="flash-ctr" id="flash-ctr">1 / ' + nTu + '</span>');
  const np = '<div id="grammar" class="section">\n  <div class="sec-head">\n    <div class="sec-title">📐 Ngữ pháp <span class="sec-badge">' + nNp + ' điểm</span></div>\n' +
    '    <div class="sec-sub">Lớp học của Tiểu Ngữ · 小语讲堂</div>\n  </div>\n\n' + L.npt.map(cardNguPhap).join('\n') + '</div>\n\n';
  h = thay(h, /<div id="grammar" class="section">[\s\S]*?(?=<div id="dialog" class="section">)/, np, 'grammar');
  const soHt = B.dialogs.filter((d) => !d.doan).length, soDoan = nBk - soHt;
  const bk = '<div id="dialog" class="section">\n  <div class="sec-head">\n    <div class="sec-title">💬 Bài khoá <span class="sec-badge">' + nBk + ' bài</span></div>\n' +
    '    <div class="sec-sub">' + nBk + ' bài khoá của bài học (' + soHt + ' hội thoại + ' + soDoan + ' bài đọc) — có ảnh nhân vật và tranh của sách</div>\n  </div>\n' +
    '  <div class="dlg-tabs">\n' + B.dialogs.map((d, i) => '    <button class="dlg-tb' + (i ? '' : ' active') + '" data-action="show-dlg" data-idx="' + i + '">' + (i + 1) + ' · ' + esc(d.tab) + '</button>').join('\n') +
    '\n  </div>\n  <div id="dlg-wrap"></div>\n</div>\n\n';
  h = thay(h, /<div id="dialog" class="section">[\s\S]*?(?=<div id="match" class="section">)/, bk, 'dialog');
  fs.writeFileSync(path.join(PUB, 'lessons', CAP + '-bai-' + L.so + '.html'), h);
}

// ---------- ngu phap chia theo diem (ca cap) ----------
function ghiNpt(ds) {
  const out = ['/* Ngữ pháp chia theo điểm — HSK4V3 (sinh tự động bởi tools/hsk4v3/gan.js, dùng với ngu-phap-tab.js)',
    '   Nguồn: tools/hsk4v3/bai-N/bai.json → nguphap. Bài tập 3 = đúng bài tập 小语讲堂 của sách.',
    '   Mỗi điểm: { so, ten, tenVn, cauTruc, giaiThich, viDu, loi, bt: [{ so, tieuDe, cap, cau }] } */',
    'window.NGU_PHAP_TAB = window.NGU_PHAP_TAB || {};'];
  ds.forEach((L) => out.push('window.NGU_PHAP_TAB[' + JSON.stringify(L.url) + '] = ' + JSON.stringify(L.npt) + ';'));
  fs.writeFileSync(path.join(PUB, 'js', 'ngu-phap-tab-' + CAP + '.js'), out.join('\n') + '\n');
  const dgDir = path.join(ROOT, 'data-grammar', CAP);
  fs.mkdirSync(dgDir, { recursive: true });
  ds.forEach((L) => fs.writeFileSync(path.join(dgDir, 'bai-' + L.so + '.json'), JSON.stringify(L.dg, null, 1) + '\n'));
}

// ---------- data.js (CRLF) ----------
function ghiDataJs(ds) {
  const f = path.join(PUB, 'js', 'data.js');
  let s = fs.readFileSync(f, 'utf8').replace(/\r\n/g, '\n');
  const tongTu = ds.reduce((a, L) => a + L.T.length, 0);
  const capObj = "    {\n      id: 'hsk4v3',\n      name: 'HSK 4 (3.0 Mới)',\n      subtitle: 'Giáo trình chuẩn mới · 新HSK教程4',\n" +
    "      description: 'Giáo trình 新HSK教程4 (chuẩn HSK 3.0), " + ds.length + " bài · " + tongTu + " từ mới, ảnh nhân vật và tranh của sách + audio gốc.',\n" +
    "      totalLessons: " + ds.length + ",\n      totalVocab: " + tongTu + ",\n      color: 'teal'\n    },\n";
  const moCap = "    // <hsk4v3-cap>\n", dongCap = "    // </hsk4v3-cap>\n";
  if (s.indexOf(moCap) >= 0) s = s.replace(new RegExp(moCap + '[\\s\\S]*?' + dongCap), moCap + capObj + dongCap);
  else {
    const m = s.match(/    \{\n      id: 'hsk3v3',[\s\S]*?\n    \},\n/);
    if (!m) { loi.push('data.js: khong thay cap hsk3v3'); return; }
    s = s.replace(m[0], m[0] + moCap + capObj + dongCap);
  }
  const bai = ds.map((L) => "      {\n        id: 'hsk4v3-l" + L.so + "',\n        number: " + L.so + ",\n        title: " + JSON.stringify(L.B.vn) +
    ",\n        titleHanzi: " + JSON.stringify(L.B.zh) + ",\n        titlePinyin: " + JSON.stringify(L.B.py) + ",\n        topic: " + JSON.stringify(L.B.chuDe) +
    ",\n        vocabCount: " + L.T.length + ",\n        dialogueCount: " + L.B.dialogs.length + ",\n        grammarCount: " + L.npt.length +
    ",\n        fullPageUrl: '" + L.url + "'\n      }").join(',\n');
  const mo = "    // <hsk4v3> HSK 4 (3.0 Moi) — sinh boi tools/hsk4v3/gan.js\n", dong = "    // </hsk4v3>\n";
  const khoi = mo + "    hsk4v3: [\n" + bai + "\n    ],\n" + dong;
  if (s.indexOf(mo) >= 0) s = s.replace(new RegExp(mo.replace(/[()]/g, '\\$&') + '[\\s\\S]*?' + dong), khoi);
  else {
    const i = s.indexOf('    hsk5: [');
    if (i < 0) { loi.push('data.js: khong thay hsk5'); return; }
    s = s.slice(0, i) + khoi + s.slice(i);
  }
  fs.writeFileSync(f, s.replace(/\n/g, '\r\n'));
}

// ---------- chay ----------
// --bai 1-6 : chi xuat ban cac bai nay (bai dang soan do khong len web); mac dinh moi bai co nguon
const iBai = process.argv.indexOf('--bai');
const pham = iBai >= 0 ? process.argv[iBai + 1].split('-').map(Number) : null;
const ds = fs.readdirSync(__dirname).filter((d) => /^bai-\d+$/.test(d) && fs.existsSync(path.join(__dirname, d, 'bai.json')))
  .map((d) => +d.slice(4)).sort((a, b) => a - b)
  .filter((n) => !pham || process.argv.indexOf('--kiem') >= 0 || (n >= pham[0] && n <= (pham[1] || pham[0])))
  .map((n) => { try { return dungBai(n); } catch (e) { loi.push('Bai ' + n + ': loi doc nguon — ' + e.message); return null; } })
  .filter(Boolean);
if (process.argv.indexOf('--kiem') < 0 && loi.some((x) => /loi doc nguon/.test(x))) { console.log(loi.join('\n')); process.exit(1); }
// --kiem N: chi dung bai N trong bo nho va bao loi (khong ghi file nao) — de soan song song nhieu bai
const iKiem = process.argv.indexOf('--kiem');
if (iKiem >= 0) {
  const L = ds.find((x) => x.so === +process.argv[iKiem + 1]);
  if (!L) { console.log('Khong dung duoc bai ' + process.argv[iKiem + 1] + '\n  ' + loi.join('\n  ')); process.exit(1); }
  const coAnh = (u) => { if (u && !fs.existsSync(path.join(PUB, u))) loi.push('Bai ' + L.so + ': thieu anh ' + u); };
  L.data.wuData.forEach((w) => coAnh(w.img));
  L.data.dialogData.forEach((d) => { coAnh(d.anh); d.nguoi.forEach((n) => coAnh(n.anh)); });
  L.data.sgkData.forEach((p) => p.cau.forEach((c) => coAnh(c.anh)));
  console.log('Bai ' + L.so + ': ' + L.T.length + ' tu, ' + L.data.dialogData.length + ' bai khoa, ' + L.npt.length + ' diem NP (' +
    L.npt.map((g) => g.bt.reduce((a, b) => a + b.cau.length, 0)).join('/') + ' cau), ' + L.data.sgkData.length + ' phan SGK, ' + L.data.mcData.length + ' trac nghiem');
  const cua = loi.filter((x) => x.indexOf('Bai ' + L.so + ':') === 0);
  console.log(cua.length ? 'CAN XEM:\n  ' + cua.join('\n  ') : 'Khong co loi.');
  process.exit(0);
}
ds.forEach((L) => { ghiData(L); ghiTrang(L); });
ghiNpt(ds);
ghiDataJs(ds);
console.log('HSK 4 (3.0): ' + ds.length + ' bai — ' + ds.map((L) => 'Bai ' + L.so + ': ' + L.T.length + ' tu, ' + L.npt.length + ' diem NP, ' + L.data.sgkData.length + ' phan SGK').join(' · '));
if (loi.length) { console.log('CAN XEM:\n  ' + loi.join('\n  ')); }
if (process.argv.indexOf('--khong-chay') < 0) {
  const chay = (f, ...a) => { console.log('> node ' + f + ' ' + a.join(' ')); console.log(String(execFileSync('node', [path.join(ROOT, f)].concat(a), { cwd: ROOT })).trim().split('\n').slice(-3).join('\n')); };
  chay('tools/build-grammar.js', CAP);
  chay('tools/seo-lessons.js', '--that');
  chay('tools/build-lop.js', CAP);
  chay('tools/stamp-assets.js', '--that');
}
