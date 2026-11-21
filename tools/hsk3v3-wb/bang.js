/* Ghep nhieu trang thanh mot anh luoi (xem luot de tim trang cua tung bai).
   Dung: node bang.js <thu-muc-trang> <tu> <den> <ra.jpg> [cot=5] [rongMoiTrang=360]   */
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const [, , DIR, TU, DEN, OUT, COT, RONG] = process.argv;
const cot = +(COT || 5), w = +(RONG || 360), h = Math.round(w * 1.42);
(async function () {
  const list = [];
  for (let p = +TU; p <= +DEN; p++) {
    const f = path.join(DIR, 'p' + String(p).padStart(3, '0') + '.jpg');
    if (fs.existsSync(f)) list.push({ p, f });
  }
  const hang = Math.ceil(list.length / cot);
  const parts = [];
  for (let i = 0; i < list.length; i++) {
    const img = await sharp(list[i].f).resize(w, h, { fit: 'contain', background: '#fff' }).jpeg().toBuffer();
    const x = (i % cot) * w, y = Math.floor(i / cot) * (h + 30);
    parts.push({ input: img, left: x, top: y + 30 });
    parts.push({ input: Buffer.from('<svg width="' + w + '" height="30"><text x="6" y="22" font-size="22" font-family="Arial" fill="red">p' + list[i].p + '</text></svg>'), left: x, top: y });
  }
  await sharp({ create: { width: cot * w, height: hang * (h + 30), channels: 3, background: '#fff' } })
    .composite(parts).jpeg({ quality: 70 }).toFile(OUT);
  console.log(OUT, list.length + ' trang');
})();
