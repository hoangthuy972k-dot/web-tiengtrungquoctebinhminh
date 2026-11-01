/* Dong dau phien ban len CSS/JS dung chung cua cac trang bai hoc.
   ------------------------------------------------------------------
   Vi sao can: CDN cua Hostinger phuc vu thang duong dan co duoi .html,
   khong qua may chu Node, nen trang bai KHONG duoc dong dau ?v= tu dong
   nhu trang chu. Neu duong dan CSS/JS khong co ?v=, trinh duyet giu ban
   cu hang thang — sua engine hay CSS xong ma hoc sinh khong thay doi gi.

   Dau duoc tinh tu NOI DUNG cac file dung chung, nen chi doi khi file
   that su doi. Chay lai sau moi lan sua lesson-engine.js / *.css / file
   du lieu bai (-data.js, -strokes.js).

   server.js dung lai chinh cac ham o day (dauChung, dauFile) de kiem tra:
   chi khi ?v= KHOP noi dung file hien tai thi moi cho trinh duyet cache
   1 nam (immutable). Quen chay lai script nay thi ?v= cu khong khop ->
   server tra no-cache (van dung, chi la khong duoc cache lau).

   Cach dung:  node tools/stamp-assets.js          (chay thu)
               node tools/stamp-assets.js --that   (ghi de)             */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const ROOT = path.join(__dirname, '..');
const DIR = path.join(ROOT, 'public', 'lessons');

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
  'js/nghe-dien.js',
  'js/bai-tap-sgk.js'
];

// Git luu file voi LF, may Windows checkout ra CRLF (core.autocrlf), con may chu
// Hostinger nhan LF. Doi CRLF -> LF truoc khi bam de dau tinh tren Windows KHOP
// voi dau server tinh lai tren Hostinger (neu khong, server se khong bao gio
// cong nhan ?v= cua trang bai va khong cho cache lau).
function boCRLF(buf) {
  return buf.indexOf(13) === -1 ? buf : Buffer.from(buf.toString('latin1').replace(/\r\n/g, '\n'), 'latin1');
}

// Dau chung cua ca bo file dung chung (thu muc public/ truyen vao de server dung lai)
function dauChung(publicDir) {
  const h = crypto.createHash('sha1');
  SHARED.forEach(function (rel) {
    const p = path.join(publicDir, rel);
    if (fs.existsSync(p)) h.update(boCRLF(fs.readFileSync(p)));
  });
  return 'rd' + h.digest('hex').slice(0, 10);
}

// Dau rieng cua mot file (file du lieu / net chu cua tung bai)
function dauFile(buf) {
  return 'rd' + crypto.createHash('sha1').update(boCRLF(buf)).digest('hex').slice(0, 10);
}

module.exports = { SHARED, dauChung, dauFile };

if (require.main === module) {
  const THAT = process.argv.includes('--that');
  const STAMP = dauChung(path.join(ROOT, 'public'));
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

    // File du lieu rieng cua tung bai (-data.js) va net chu (-strokes.js, nap
    // luc can): dong dau bang chinh noi dung file do, de sua noi dung mot bai
    // khong lam het han cache cac bai con lai.
    const reData = new RegExp('(["\'])(/js/[a-z0-9-]+-(?:data|strokes)\\.js)(\\?[^"\']*)?\\1', 'g');
    s = s.replace(reData, function (m, q, duong) {
      const fp = path.join(ROOT, 'public', duong.replace(/^\//, ''));
      if (!fs.existsSync(fp)) return m;
      return q + duong + '?v=' + dauFile(fs.readFileSync(fp)) + q;
    });

    if (s !== truoc) { if (THAT) fs.writeFileSync(p, s); doi++; } else nguyen++;
  });

  console.log(THAT ? '=== DA GHI ===' : '=== CHAY THU, khong ghi ===');
  console.log('Trang duoc dong dau lai : ' + doi);
  console.log('Trang da dung dau       : ' + nguyen);
}
