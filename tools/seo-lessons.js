/* SEO + chia se (Facebook/Zalo) cho cac trang bai hoc, va sinh sitemap.xml.
   ------------------------------------------------------------------
   Moi trang public/lessons/*.html duoc gan (ngay sau <title>) mot khoi:
     <!-- seo:start --> ... <!-- seo:end -->
   gom <meta name="description">, <link rel="canonical"> va the Open Graph
   (og:title, og:description, og:type, og:url, og:site_name, og:locale).
   Noi dung lay tu chinh trang: <title>, .header-badge, .header-zh,
   .header-vn, chip "Chu de" va chip "N tu moi".
   Chua co anh chia se rieng (logo/anh bia) trong public/ nen CHUA gan og:image;
   khi co anh (>= 1200x630, .jpg/.png) thi dien duong dan vao OG_IMAGE ben duoi.

   Chay lai bat ky luc nao (them bai moi, doi ten bai): khoi seo cu bi thay
   the, khong nhan doi. Dong thoi ghi lai public/sitemap.xml gom trang chu,
   /game, /exam/ va tat ca trang bai hoc (KHONG co /bao-cao, /lop, /choi,
   /hsk30 va noi dung de thi bao ve).

   Cach dung:  node tools/seo-lessons.js          (chay thu, khong ghi)
               node tools/seo-lessons.js --that   (ghi de)             */
const fs = require('fs');
const path = require('path');

const SITE = 'https://hihanchinese.online';
const OG_IMAGE = '';   // vd '/images/og/hi-han.jpg' — de trong thi khong gan og:image
const ROOT = path.join(__dirname, '..');
const DIR = path.join(ROOT, 'public', 'lessons');
const THAT = process.argv.includes('--that');

function giaiMa(s) {
  return String(s)
    .replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, '&');
}
function boThe(s) { return giaiMa(String(s || '').replace(/<[^>]*>/g, '')).replace(/\s+/g, ' ').trim(); }
function maHoa(s) {
  return String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
// Bo emoji / ky hieu o dau chip ("🏠 Chu de: ...")
function boIcon(s) { return s.replace(/^[^\p{L}\p{N}]+/u, '').trim(); }
function lay(html, re) { const m = html.match(re); return m ? boThe(m[1]) : ''; }
function cat(s, n) {
  if (s.length <= n) return s;
  const c = s.slice(0, n - 1);
  const i = c.lastIndexOf(' ');
  return (i > n * 0.6 ? c.slice(0, i) : c).replace(/[\s,.;:·–-]+$/, '') + '…';
}

function khoiSeo(file, html) {
  let title = lay(html, /<title>([\s\S]*?)<\/title>/i);
  // HSK 2 bo cu nam o /lessons/bai-N.html, tieu de chi ghi "HSK · Bai N"
  if (/^bai-\d+\.html$/.test(file)) title = title.replace(/^HSK ·/, 'HSK2 ·');
  // Lay cap do tu <title> (co ca "(3.0 Mới)"), header-badge thi co trang thieu
  const badge = title.split(' · ').slice(0, 2).join(' · ') || lay(html, /class="header-badge">([\s\S]*?)<\/div>/);
  const zh = lay(html, /class="header-zh">([\s\S]*?)<\/div>/);
  const vn = lay(html, /class="header-vn">([\s\S]*?)<\/div>/);
  const chips = [];
  const reChip = /class="h-chip">([\s\S]*?)<\/span>/g; let m;
  while ((m = reChip.exec(html))) chips.push(boIcon(boThe(m[1])));
  let chuDe = chips.find((c) => /^Chủ đề\s*:/i.test(c)) || chips.find((c) => !/^\d/.test(c) && !/từ mới|hội thoại|ngữ pháp|bài khoá|cặp từ/i.test(c)) || '';
  chuDe = chuDe.replace(/^Chủ đề\s*:\s*/i, '');
  const soTu = (chips.find((c) => /\d+\s*từ mới/.test(c)) || '').match(/\d+\s*từ mới/);

  const cham = (s) => (/[.!?。！？…]$/.test(s) ? s : s + '.');
  const dau = cham(badge + ': ' + (zh || title) + (vn ? ' – ' + vn : ''));
  const giua = chuDe ? ' ' + cham('Chủ đề: ' + chuDe) : '';
  const cuoi = ' Học ' + (soTu ? soTu[0] : 'từ mới') + ', ngữ pháp, hội thoại có pinyin và nghĩa tiếng Việt, luyện nghe và bài tập tương tác.';
  const desc = cat(dau + giua + cuoi, 240);
  const ogTitle = (title || dau) + ' | Hi Hán 喜汉';
  const url = SITE + '/lessons/' + file;

  const dong = [
    '<!-- seo:start (tools/seo-lessons.js) -->',
    '<meta name="description" content="' + maHoa(desc) + '">',
    '<link rel="canonical" href="' + url + '">',
    '<meta property="og:type" content="article">',
    '<meta property="og:site_name" content="Hi Hán 喜汉">',
    '<meta property="og:locale" content="vi_VN">',
    '<meta property="og:title" content="' + maHoa(ogTitle) + '">',
    '<meta property="og:description" content="' + maHoa(desc) + '">',
    '<meta property="og:url" content="' + url + '">'
  ];
  if (OG_IMAGE) dong.push('<meta property="og:image" content="' + SITE + OG_IMAGE + '">');
  dong.push('<!-- seo:end -->');
  return dong;
}

let doi = 0, nguyen = 0, loi = 0;
const files = fs.readdirSync(DIR).filter((f) => /\.html$/.test(f)).sort((a, b) => a.localeCompare(b, 'en', { numeric: true }));
files.forEach(function (f) {
  const p = path.join(DIR, f);
  const truoc = fs.readFileSync(p, 'utf8');
  const eol = truoc.indexOf('\r\n') !== -1 ? '\r\n' : '\n';
  // Bo khoi cu (neu co) roi gan lai ngay sau </title>
  let s = truoc.replace(/<!-- seo:start[\s\S]*?<!-- seo:end -->\r?\n?/, '');
  const at = s.search(/<\/title>[^\n]*\n/);
  if (at === -1) { console.log('!! khong thay <title>: ' + f); loi++; return; }
  const het = s.indexOf('\n', at) + 1;
  s = s.slice(0, het) + khoiSeo(f, s).join(eol) + eol + s.slice(het);
  if (s !== truoc) { if (THAT) fs.writeFileSync(p, s); doi++; } else nguyen++;
});

// sitemap.xml — chi cac trang cong khai, co noi dung that
const urls = ['/', '/game', '/exam/'].concat(files.map((f) => '/lessons/' + f));
const xml = '<?xml version="1.0" encoding="UTF-8"?>\n' +
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  urls.map((u) => '  <url><loc>' + SITE + u + '</loc></url>').join('\n') + '\n</urlset>\n';
const smPath = path.join(ROOT, 'public', 'sitemap.xml');
const smCu = fs.existsSync(smPath) ? fs.readFileSync(smPath, 'utf8') : '';
if (THAT && smCu !== xml) fs.writeFileSync(smPath, xml);

console.log(THAT ? '=== DA GHI ===' : '=== CHAY THU, khong ghi ===');
console.log('Trang bai gan lai SEO : ' + doi);
console.log('Trang da dung         : ' + nguyen);
if (loi) console.log('Loi                   : ' + loi);
console.log('sitemap.xml           : ' + urls.length + ' URL' + (smCu === xml ? ' (khong doi)' : ''));
