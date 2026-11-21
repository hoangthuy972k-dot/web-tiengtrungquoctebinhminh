/* Tach anh scan cua tung trang PDF THEO DUNG THU TU TRANG (khong render, khong can canvas).
   PDF scan: moi trang = 1 anh JPEG (/DCTDecode). Doc ca object nam trong /ObjStm (nen zlib),
   di cay trang tu /Root, lay XObject anh cua tung trang roi ghi nguyen byte JPEG ra file.

   Dung:  node trang.js "<file.pdf>" <thu-muc-ra> [tuTrang] [denTrang]
   Ra:    <thu-muc-ra>/p001.jpg, p002.jpg ...  (so trang PDF, bat dau tu 1)            */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const [, , F, OUT, TU, DEN] = process.argv;
if (!F || !OUT) { console.error('Dung: node trang.js file.pdf thu-muc-ra [tu] [den]'); process.exit(1); }
const buf = fs.readFileSync(F);
const s = buf.toString('latin1');

// 1) Object thuong:  "N 0 obj ... endobj"
const objs = {};          // so -> { dict: string, streamStart, streamEnd } hoac { text }
const reObj = /(\d+)\s+(\d+)\s+obj\b/g;
let m;
while ((m = reObj.exec(s))) {
  const num = +m[1];
  const start = m.index + m[0].length;
  const endObj = s.indexOf('endobj', start);
  const body = s.slice(start, endObj);
  const si = body.search(/stream\r?\n/);
  if (si > -1 && /^\s*<</.test(body)) {
    const dict = body.slice(0, si);
    const off = start + si + body.slice(si).match(/stream\r?\n/)[0].length;
    objs[num] = { dict, off };
  } else {
    objs[num] = { text: body };
  }
  reObj.lastIndex = endObj;
}

function soNguyen(dict, key) {
  const r = dict.match(new RegExp('/' + key + '\\s+(\\d+)(\\s+\\d+\\s+R)?'));
  if (!r) return null;
  if (r[2]) { const o = objs[+r[1]]; return o && o.text ? parseInt(o.text, 10) : null; }
  return +r[1];
}
function streamBytes(o) {
  const len = soNguyen(o.dict, 'Length');
  const end = len != null ? o.off + len : s.indexOf('endstream', o.off);
  return buf.slice(o.off, end);
}

// 2) Object nam trong /ObjStm
Object.keys(objs).forEach(function (k) {
  const o = objs[k];
  if (!o.dict || !/\/Type\s*\/ObjStm/.test(o.dict)) return;
  let data = streamBytes(o);
  if (/FlateDecode/.test(o.dict)) data = zlib.inflateSync(data);
  const t = data.toString('latin1');
  const n = soNguyen(o.dict, 'N'), first = soNguyen(o.dict, 'First');
  const head = t.slice(0, first).trim().split(/\s+/).map(Number);
  for (let i = 0; i < n; i++) {
    const num = head[2 * i], off = head[2 * i + 1];
    const next = i + 1 < n ? head[2 * i + 3] : t.length - first;
    if (!objs[num]) objs[num] = { text: t.slice(first + off, first + next) };
  }
});

const txt = function (num) { const o = objs[num]; return o ? (o.text || o.dict) : ''; };
const ref = function (str, key) { const r = str.match(new RegExp('/' + key + '\\s+(\\d+)\\s+\\d+\\s+R')); return r ? +r[1] : null; };

// 3) Cay trang
const rootNum = (s.match(/\/Root\s+(\d+)\s+\d+\s+R/g) || []).map(function (x) { return +x.match(/(\d+)/)[1]; }).pop();
const pagesNum = ref(txt(rootNum), 'Pages');
const pages = [];
(function di(num) {
  const t = txt(num);
  if (/\/Type\s*\/Pages/.test(t)) {
    const kids = (t.match(/\/Kids\s*\[([^\]]*)\]/) || [])[1] || '';
    (kids.match(/(\d+)\s+\d+\s+R/g) || []).forEach(function (k) { di(+k.match(/\d+/)[0]); });
  } else pages.push(num);
})(pagesNum);

// 4) Anh cua tung trang
function anhCuaTrang(num) {
  let t = txt(num);
  let res = t.match(/\/Resources\s*(<<(?:[^<>]|<<(?:[^<>]|<<[^<>]*>>)*>>)*>>)/);
  let resStr = res ? res[1] : (ref(t, 'Resources') ? txt(ref(t, 'Resources')) : '');
  let xo = resStr.match(/\/XObject\s*(<<[^>]*>>)/);
  let xoStr = xo ? xo[1] : (ref(resStr, 'XObject') ? txt(ref(resStr, 'XObject')) : '');
  return (xoStr.match(/\/[^\s/]+\s+(\d+)\s+\d+\s+R/g) || []).map(function (x) { return +x.match(/(\d+)\s+\d+\s+R/)[1]; })
    .filter(function (n) { return objs[n] && objs[n].dict && /\/Subtype\s*\/Image/.test(objs[n].dict); });
}

fs.mkdirSync(OUT, { recursive: true });
const tu = +(TU || 1), den = +(DEN || pages.length);
let ghi = 0;
pages.forEach(function (pn, i) {
  const p = i + 1;
  if (p < tu || p > den) return;
  anhCuaTrang(pn).forEach(function (im, j) {
    const o = objs[im];
    const ext = /DCTDecode/.test(o.dict) ? 'jpg' : /JPXDecode/.test(o.dict) ? 'jp2' : 'bin';
    const ten = 'p' + String(p).padStart(3, '0') + (j ? '-' + j : '') + '.' + ext;
    fs.writeFileSync(path.join(OUT, ten), streamBytes(o));
    ghi++;
  });
});
console.log(path.basename(F) + ': ' + pages.length + ' trang, ghi ' + ghi + ' anh vao ' + OUT);
