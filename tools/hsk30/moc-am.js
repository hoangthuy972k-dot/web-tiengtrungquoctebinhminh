/* Do moc thoi gian tung cau Nghe tu file mp3: khoang lang dai (> 8 giay) = giay lam bai sau moi cau.
   Dung: node moc-am.js file.mp3 soCau [cauDauMoiPhan,...]
   In ra: cac doan noi (speech) + moc [bat dau, ket thuc] tung cau. */
const { execFileSync } = require('child_process');
const FF = require('ffmpeg-static');
const [, , F, SO, DAU] = process.argv;
const r = require('child_process').spawnSync(FF, ['-hide_banner', '-i', F, '-af', 'silencedetect=noise=-38dB:d=0.35', '-f', 'null', '-'], { encoding: 'utf8' });
const txt = (r.stdout || '') + (r.stderr || '');
const lang = [];
let m, re = /silence_start: ([\d.]+)[\s\S]*?silence_end: ([\d.]+)/g;
while ((m = re.exec(txt))) lang.push([+m[1], +m[2]]);
// doan noi = giua hai khoang lang
const noi = [];
for (let i = 0; i < lang.length - 1; i++) noi.push([lang[i][1], lang[i + 1][0]]);
const dai = lang.filter(l => l[1] - l[0] > 8);
console.log('khoang lang dai: ' + dai.length + ' (can ' + SO + ')');
console.log(JSON.stringify({ noi: noi.map(n => [+n[0].toFixed(2), +n[1].toFixed(2)]), dai: dai.map(n => [+n[0].toFixed(2), +n[1].toFixed(2)]) }));
