/* Tach anh nhung trong PDF scan (JPEG = DCTDecode, JPX, hoac Flate). Dung: node tach-anh.js file.pdf thu-muc-ra */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const [, , F, OUT] = process.argv;
fs.mkdirSync(OUT, { recursive: true });
const buf = fs.readFileSync(F);
const s = buf.toString('latin1');
let n = 0, i = 0, loai = {};
const re = /<<((?:[^<>]|<<(?:[^<>]|<<[^<>]*>>)*>>)*)>>\s*stream\r?\n/g;
let m;
while ((m = re.exec(s))) {
  const dict = m[1];
  if (!/\/Subtype\s*\/Image/.test(dict)) continue;
  const start = m.index + m[0].length;
  const lenM = dict.match(/\/Length\s+(\d+)(\s+0\s+R)?/);
  let end;
  if (lenM && !lenM[2]) end = start + parseInt(lenM[1], 10);
  else end = s.indexOf('endstream', start);
  const data = buf.slice(start, end);
  const w = (dict.match(/\/Width\s+(\d+)/) || [])[1], h = (dict.match(/\/Height\s+(\d+)/) || [])[1];
  let ext = 'bin';
  if (/DCTDecode/.test(dict)) ext = 'jpg';
  else if (/JPXDecode/.test(dict)) ext = 'jp2';
  else if (/FlateDecode/.test(dict)) ext = 'raw';
  loai[ext] = (loai[ext] || 0) + 1;
  const ten = String(n).padStart(3, '0') + '_' + w + 'x' + h + '.' + ext;
  fs.writeFileSync(path.join(OUT, ten), data);
  n++;
}
console.log(path.basename(F) + ': ' + n + ' anh ' + JSON.stringify(loai));
