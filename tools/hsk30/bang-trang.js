/* Ghep nhieu trang scan thanh mot bang anh nho de xem luot: node bang-trang.js thuMucTrang tu den ra.jpg [cot] [rong] */
const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');
const [, , DIR, TU, DEN, OUT, COT = 3, RONG = 560] = process.argv;
(async () => {
  const files = fs.readdirSync(DIR).filter(f => /\.jpg$/.test(f)).sort().slice(+TU, +DEN + 1);
  const cot = +COT, w = +RONG, h = Math.round(w * 1.42);
  const hang = Math.ceil(files.length / cot);
  const sheet = new Jimp(cot * w, hang * h, 0xffffffff);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_32_BLACK);
  for (let i = 0; i < files.length; i++) {
    const im = await Jimp.read(path.join(DIR, files[i]));
    im.resize(w - 8, Jimp.AUTO);
    const x = (i % cot) * w + 4, y = Math.floor(i / cot) * h + 4;
    sheet.composite(im, x, y);
    sheet.print(font, x + 6, y + 6, files[i].slice(0, 3));
  }
  await sheet.quality(80).writeAsync(OUT);
  console.log(OUT, files.length);
})();
