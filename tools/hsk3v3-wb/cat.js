/* Cat mot vung cua anh trang.
   Toa do theo PHAN TRAM chieu rong / cao cua trang (0–100), de dung chung cho moi trang du kich thuoc khac nhau.

   Dung:  node cat.js <anh-trang.jpg> <x%> <y%> <rong%> <cao%> <ra.(jpg|webp)> [rongRa=0] [chatLuong=72]
          rongRa = 0: giu nguyen do phan giai (de xem/doc chu); >0: thu nho ve rong nay (anh cho web)
   Hoac:  node cat.js --lo <file-lo.json> <thu-muc-trang>
          nhieu vung mot lan: [{ "in": "p015.jpg", "x","y","w","h", "out": "public/images/...webp", "rong", "q" }]
          "in" tinh tu <thu-muc-trang> (anh ra tu trang.js), "out" tinh tu thu muc goc cua web  */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function cat1(job) {
  const meta = await sharp(job.in).metadata();
  const left = Math.max(0, Math.round(meta.width * job.x / 100));
  const top = Math.max(0, Math.round(meta.height * job.y / 100));
  const width = Math.min(meta.width - left, Math.round(meta.width * job.w / 100));
  const height = Math.min(meta.height - top, Math.round(meta.height * job.h / 100));
  let p = sharp(job.in).extract({ left, top, width, height });
  if (+job.rong) p = p.resize({ width: +job.rong, withoutEnlargement: true });
  const q = +(job.q || 72);
  p = /\.webp$/i.test(job.out) ? p.webp({ quality: q }) : p.jpeg({ quality: q, mozjpeg: true });
  fs.mkdirSync(path.dirname(job.out), { recursive: true });
  const info = await p.toFile(job.out);
  console.log(job.out, info.width + 'x' + info.height, Math.round(info.size / 1024) + ' KB');
}

(async function () {
  const a = process.argv.slice(2);
  if (a[0] === '--lo') {
    const jobs = JSON.parse(fs.readFileSync(a[1], 'utf8'));
    const trang = path.resolve(a[2] || '.');
    const goc = path.join(__dirname, '..', '..');
    for (const j of jobs) await cat1(Object.assign({}, j, { in: path.resolve(trang, j.in), out: path.resolve(goc, j.out) }));
    return;
  }
  const [IN, X, Y, W, H, OUT, RONG, Q] = a;
  await cat1({ in: IN, x: +X, y: +Y, w: +W, h: +H, out: OUT, rong: RONG, q: Q });
})();
