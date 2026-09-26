/* Dong dau phien ban len CSS/JS dung chung cua cac trang bai hoc.
   ------------------------------------------------------------------
   Vi sao can: CDN cua Hostinger phuc vu thang duong dan co duoi .html,
   khong qua may chu Node, nen trang bai KHONG duoc dong dau ?v= tu dong
   nhu trang chu. Neu duong dan CSS/JS khong co ?v=, trinh duyet giu ban
   cu hang thang — sua engine hay CSS xong ma hoc sinh khong thay doi gi.

   Dau duoc tinh tu NOI DUNG cac file dung chung, nen chi doi khi file
   that su doi. Chay lai sau moi lan sua lesson-engine.js / *.css.

   Cach dung:  node tools/stamp-assets.js          (chay thu)
               node tools/stamp-assets.js --that   (ghi de)             */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const DIR = path.join(ROOT, 'public', 'lessons');
const THAT = process.argv.includes('--that');

// Cac file dung chung cho moi trang bai
const SHARED = [
  'css/lesson-template.css',
  'css/widgets.css',
  'css/hsk5.css',
  'css/vocab-h4.css',
  'css/toi-bai.css',
  'js/lesson-engine.js',
  'js/widgets.js',
  'js/hsk5-extra.js',
  'js/theme.js',
  'css/luyen-viet.css',
  'js/luyen-viet.js',
  'js/ke-lai.js',
  'js/phan-biet.js',
  'js/khong-goi-y.js',
  'js/nghe-dien.js'
];

const h = crypto.createHash('sha1');
SHARED.forEach(function (rel) {
  const p = path.join(ROOT, 'public', rel);
  if (fs.existsSync(p)) h.update(fs.readFileSync(p));
});
const STAMP = 'rd' + h.digest('hex').slice(0, 10);
console.log('Dau phien ban: ' + STAMP);

let doi = 0, nguyen = 0;
fs.readdirSync(DIR).filter((f) => /\.html$/.test(f)).sort().forEach(function (f) {
  const p = path.join(DIR, f);
  const truoc = fs.readFileSync(p, 'utf8');
  let s = truoc;

  SHARED.forEach(function (rel) {
    // Bat ca ba kieu: khong co ?v=, co ?v= cu, va co tham so khac
    const re = new RegExp('(["\'])/' + rel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(\\?[^"\']*)?\\1', 'g');
    s = s.replace(re, function (_m, q) { return q + '/' + rel + '?v=' + STAMP + q; });
  });

  // File du lieu rieng cua tung bai: dong dau bang chinh noi dung file do,
  // de sua noi dung mot bai khong lam het han cache 112 bai con lai.
  const reData = new RegExp('(["\'])(/js/[a-z0-9-]+-data\\.js)(\\?[^"\']*)?\\1', 'g');
  s = s.replace(reData, function (m, q, duong) {
    const fp = path.join(ROOT, 'public', duong.replace(/^\//, ''));
    if (!fs.existsSync(fp)) return m;
    const dau = crypto.createHash('sha1').update(fs.readFileSync(fp)).digest('hex').slice(0, 10);
    return q + duong + '?v=rd' + dau + q;
  });

  if (s !== truoc) { if (THAT) fs.writeFileSync(p, s); doi++; } else nguyen++;
});

console.log(THAT ? '=== DA GHI ===' : '=== CHAY THU, khong ghi ===');
console.log('Trang duoc dong dau lai : ' + doi);
console.log('Trang da dung dau       : ' + nguyen);
