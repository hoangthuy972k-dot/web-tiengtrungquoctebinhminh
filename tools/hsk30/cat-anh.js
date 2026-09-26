/* Cat anh cau hoi tu trang scan: node cat-anh.js cauhinh.json thuMucRa
   cauhinh: [{ trang: 'img/HSK1-0/007_....jpg', tiLe: 1.72, ten: 'l1-1A', hop: [x1,y1,x2,y2] (toa do hien thi) }]
   - cat theo hop (nhan ti le ve toa do goc), tu cat vien trang, thu nho toi da 640px, JPEG 82
   - tao them to-kiem-tra.jpg (luoi tat ca anh da cat) de xem lai mot lan */
const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');
const [, , CFG, OUT] = process.argv;
const ds = JSON.parse(fs.readFileSync(CFG, 'utf8'));
fs.mkdirSync(OUT, { recursive: true });
(async () => {
  const cache = {};
  const done = [];
  for (const c of ds) {
    if (!cache[c.trang]) cache[c.trang] = await Jimp.read(c.trang);
    const pg = cache[c.trang];
    const k = c.tiLe;
    let [x1, y1, x2, y2] = c.hop.map(v => Math.round(v * k));
    x1 = Math.max(0, x1); y1 = Math.max(0, y1);
    x2 = Math.min(pg.bitmap.width, x2); y2 = Math.min(pg.bitmap.height, y2);
    const im = pg.clone().crop(x1, y1, x2 - x1, y2 - y1);
    im.autocrop({ tolerance: 0.06, cropOnlyFrames: false, leaveBorder: 6 });
    if (im.bitmap.width > 640) im.resize(640, Jimp.AUTO);
    im.quality(82);
    const f = path.join(OUT, c.ten + '.jpg');
    await im.writeAsync(f);
    done.push({ ten: c.ten, im });
  }
  // to kiem tra: 6 cot, o 220x170
  const COT = 6, W = 220, H = 190;
  const hang = Math.ceil(done.length / COT);
  const sheet = new Jimp(COT * W, hang * H, 0xffffffff);
  const font = await Jimp.loadFont(Jimp.FONT_SANS_16_BLACK);
  done.forEach((d, i) => {
    const t = d.im.clone().scaleToFit(W - 10, H - 30);
    const x = (i % COT) * W + 5, y = Math.floor(i / COT) * H + 22;
    sheet.composite(t, x, y);
    sheet.print(font, x, y - 20, d.ten);
  });
  await sheet.writeAsync(path.join(OUT, '..', path.basename(OUT) + '-kiem-tra.jpg'));
  console.log('cat ' + done.length + ' anh');
})().catch(e => { console.error(e); process.exit(1); });
