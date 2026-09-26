/* Sinh protected/hsk30/<id>/ tu raw/<id>.json (ban go lai cua de) + am thanh.
   Dung: node gen-de.js <id> <tenAm>      vd: node gen-de.js hsk30-2-1 h2t1
   - Moc am thanh: moi khoang lang dai (> 8 giay) = giay lam bai sau mot cau Nghe (so khoang = so cau).
     Cau dau moi phan: uoc do dai bang trung vi cac cau con lai cua phan roi bam vao dau doan noi gan nhat.
     Cau dung chung doan nghe voi cau truoc (loiThoai giong nhau o dau): nghe lai ca doan, hien sau cau truoc.
   - Cat anh theo catAnh (toa do goc), chep am thanh da nen 48 kbps.
   - Kiem tra: so cau, dap an nam trong lua chon, anh/doan duoc dan toi phai co. */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');
const T = __dirname;
const [, , ID, AM] = process.argv;
const OUT = path.join('C:/Users/Admin/Desktop/New folder/protected/hsk30', ID);
const raw = JSON.parse(fs.readFileSync(path.join(T, 'raw', ID + '.json'), 'utf8'));
const loi = [];
const canhBao = [];

const CAP = raw.capDo, DE = raw.de;
const de = {
  id: ID, capDo: CAP, de: DE,
  ten: 'HSK 3.0 · Cấp ' + CAP + ' · Đề ' + DE,
  tenZh: raw.tenZh || ('HSK 3.0 全真模拟试卷 ' + DE),
  nguon: 'Bộ đề 《HSK 3.0 轻松过》· NXB ĐH Ngôn ngữ và Văn hóa Bắc Kinh',
  pinyin: !!raw.pinyin,
  sections: raw.sections
};

/* ---------- 1. chuan hoa + kiem tra ---------- */
const anhCan = new Set();
let dem = 0, truoc = 0;
de.sections.forEach(sec => {
  if (sec.id === 'viet' && CAP >= 4 && !sec.tenZh) sec.tenZh = '写作';
  sec.parts.forEach(p => {
    if (!p.kieu || /^(anh3|chu3|anh6|ghep6|dien6)$/.test(p.kieu)) p.kieu = 'chon';
    if (p.chungAnh) anhCan.add(p.chungAnh);
    if (p.chung) Object.keys(p.chung).forEach(k => { if (p.chung[k].anh) anhCan.add(p.chung[k].anh); });
    p.cau.forEach(q => {
      dem++;
      if (q.n !== truoc + 1) loi.push('so cau khong lien tuc: ' + truoc + ' -> ' + q.n);
      truoc = q.n;
      if (q.deAnh) anhCan.add(q.deAnh);
      if (q.chon) Object.keys(q.chon).forEach(k => { if (q.chon[k].anh) anhCan.add(q.chon[k].anh); });
      if (q.doanId && !(p.doan && p.doan[q.doanId])) loi.push('cau ' + q.n + ': khong co doan ' + q.doanId);
      if (p.kieu === 'chon' || p.kieu === 'bothu') {
        const chon = q.chon || p.chung;
        if (!chon) loi.push('cau ' + q.n + ': khong co lua chon');
        else if (!chon[q.dap]) loi.push('cau ' + q.n + ': dap an ' + q.dap + ' khong co trong lua chon');
        if (p.viDuDung && q.dap === p.viDuDung) loi.push('cau ' + q.n + ': trung dap an vi du');
      } else if (p.kieu === 'vietchu') {
        if (!q.dap) loi.push('cau ' + q.n + ': vietchu thieu dap');
      } else if (p.kieu === 'datcau' || p.kieu === 'vanngan') {
        if (!q.mau) canhBao.push('cau ' + q.n + ': chua co cau/bai mau');
      } else loi.push('cau ' + q.n + ': kieu la ' + p.kieu);
      if (!q.giai) canhBao.push('cau ' + q.n + ': chua co giai thich');
    });
  });
});

/* ---------- 2. moc am thanh ---------- */
const ngheI = de.sections.findIndex(s => s.id === 'nghe');
if (ngheI >= 0) {
  const sec = de.sections[ngheI];
  const moc = fs.readFileSync(path.join(T, 'am', 'moc-' + AM + '.txt'), 'utf8');
  const j = JSON.parse(moc.slice(moc.indexOf('{')));
  const dai = j.dai, noi = j.noi;
  const cauNghe = [].concat(...sec.parts.map(p => p.cau));
  // Nhom cau dung chung mot doan nghe (loiThoai giong nhau o dau)
  const chung = cauNghe.map(() => false);
  for (let i = 1; i < cauNghe.length; i++) {
    const a = (cauNghe[i - 1].loiThoai || '').slice(0, 24), b = (cauNghe[i].loiThoai || '').slice(0, 24);
    if (a && a.length >= 12 && a === b) chung[i] = true;
  }
  const nhom = []; // [dau, cuoi] cac nhom >= 2 cau
  for (let i = 0; i < cauNghe.length; i++) {
    if (chung[i]) nhom[nhom.length - 1][1] = i;
    else if (i + 1 < cauNghe.length && chung[i + 1]) nhom.push([i, i]);
  }
  // Doan chung duoc doc 2 luot, luot nao cung co khoang lam bai sau tung cau -> du (so cau cua nhom) khoang
  const du = nhom.reduce((a, g) => a + g[1] - g[0] + 1, 0);
  const coLuot2 = dai.length === cauNghe.length + du && du > 0;
  if (dai.length !== cauNghe.length && !coLuot2) loi.push('am thanh: ' + dai.length + ' khoang lang dai, can ' + cauNghe.length + (du ? ' (hoac ' + (cauNghe.length + du) + ' neu doan chung doc 2 luot)' : ''));
  else {
    // gan moi cau voi khoang lang cua no (bo qua cac khoang cua luot doc thu hai)
    const gan = [];
    let g = 0;
    for (let i = 0; i < cauNghe.length; i++) {
      gan.push(g); g++;
      const cuoiNhom = nhom.find(x => x[1] === i);
      if (coLuot2 && cuoiNhom) g += cuoiNhom[1] - cuoiNhom[0] + 1;
    }
    // ket thuc moi cau = dau khoang lang dai cua no; bat dau = het khoang lang lien truoc
    cauNghe.forEach((q, i) => {
      q._het = +(dai[gan[i]][0] + 0.25).toFixed(2);
      q._sau = gan[i] ? +(dai[gan[i] - 1][1] - 0.15).toFixed(2) : null;
      // cau cuoi nhom co luot 2: nghe lai den het luot doc thu hai
      const cuoiNhom = nhom.find(x => x[1] === i);
      if (coLuot2 && cuoiNhom) q._het2 = +(dai[gan[i] + (cuoiNhom[1] - cuoiNhom[0] + 1)][0] + 0.25).toFixed(2);
    });
    let idx = 0;
    sec.parts.forEach((p, pi) => {
      const ds = p.cau;
      const dauTien = idx;
      ds.forEach((q, k) => { if (k > 0) q.am = [q._sau, q._het]; });
      // cau dau phan: uoc tu do dai cac cau khac trong phan
      // lay rong: 1.25 x cau dai nhat cua phan — tha nghe thua cau 现在开始第X题 con hon cat mat dau cau
      const dl = ds.slice(1).map(q => q.am[1] - q.am[0]);
      const tv = dl.length ? Math.max.apply(null, dl) * 1.25 : 30;
      const q0 = ds[0];
      const uoc = q0._het - tv;
      // bam vao dau doan noi co thoi diem gan uoc nhat (sau khoang lang cua cau truoc)
      const moc0 = q0._sau != null ? q0._sau : 0;
      let tot = null;
      noi.forEach(n => { if (n[0] >= moc0 && n[0] < q0._het - 1 && (tot == null || Math.abs(n[0] - uoc) < Math.abs(tot - uoc))) tot = n[0]; });
      q0.am = [+(Math.max(moc0, (tot != null ? tot : uoc) - 0.2)).toFixed(2), q0._het];
      // luc hien gioi thieu phan: ngay sau cau cuoi phan truoc (phan dau: truoc cau 1 khoang 45 giay)
      p.batDau = pi === 0 ? Math.max(1, +(q0.am[0] - 45).toFixed(1)) : q0._sau;
      idx += ds.length;
    });
    // cau dung chung doan nghe voi cau truoc: hien sau khi cau truoc het, nghe lai tu dau doan
    for (let i = 1; i < cauNghe.length; i++) {
      if (!chung[i]) continue;
      cauNghe[i].hien = cauNghe[i].am[0];
      cauNghe[i].am = [cauNghe[i - 1].am[0], cauNghe[i]._het2 || cauNghe[i].am[1]];
      let k = i - 1; while (k > 0 && chung[k]) k--;
      cauNghe[i].am[0] = cauNghe[k].am[0];
    }
    cauNghe.forEach(q => { delete q._het; delete q._sau; delete q._het2; });
    const cuoi = noi.length ? noi[noi.length - 1][1] : dai[dai.length - 1][1];
    sec.audioHet = +(Math.max(cuoi, dai[dai.length - 1][1]) + 1).toFixed(1);
    sec.audio = 'nghe.mp3';
    if (!sec.gioiThieu) sec.gioiThieu = 'HSK（' + '一二三四五六'[CAP - 1] + '级）听力考试现在开始。';
  }
}

/* ---------- 3. anh ---------- */
const catAnh = (raw.catAnh || []).map(c => ({ trang: c.trang.replace(/\\/g, '/'), tiLe: 1, ten: c.ten, hop: c.hop }));
const coAnh = new Set(catAnh.map(c => c.ten + '.jpg'));
anhCan.forEach(f => { if (!coAnh.has(f)) loi.push('thieu hop cat anh: ' + f); });

if (loi.length) { console.log('LOI ' + ID + ':\n  ' + loi.join('\n  ')); process.exit(1); }

fs.mkdirSync(OUT, { recursive: true });
const cfg = path.join(T, 'cat-' + ID + '.json');
fs.writeFileSync(cfg, JSON.stringify(catAnh));
if (catAnh.length) execFileSync(process.execPath, [path.join(T, 'cat-anh.js'), cfg, path.join(T, 'anh', ID)], { cwd: T, stdio: 'inherit' });
fs.readdirSync(path.join(T, 'anh', ID)).forEach(f => { if (anhCan.has(f)) fs.copyFileSync(path.join(T, 'anh', ID, f), path.join(OUT, f)); });
if (ngheI >= 0) fs.copyFileSync(path.join(T, 'am', AM + '-48.mp3'), path.join(OUT, 'nghe.mp3'));

const toiDa = de.sections.length * 100;
de.diemDat = Math.round(toiDa * 0.6);
fs.writeFileSync(path.join(OUT, 'de.json'), JSON.stringify(de));
console.log(ID + ': ' + dem + ' cau · ' + anhCan.size + ' anh · phan: ' + de.sections.map(s => s.ten + ' ' + s.parts.reduce((a, p) => a + p.cau.length, 0)).join(', '));
if (canhBao.length) console.log('  canh bao: ' + canhBao.slice(0, 8).join('; ') + (canhBao.length > 8 ? ' …(+' + (canhBao.length - 8) + ')' : ''));
if (ngheI >= 0) console.log('  moc: ' + [].concat(...de.sections[ngheI].parts.map(p => p.cau)).map(q => q.n + ':' + q.am.map(x => Math.round(x)).join('-') + (q.hien ? '*' : '')).join(' '));
