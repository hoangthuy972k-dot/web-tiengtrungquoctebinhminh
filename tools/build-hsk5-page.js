/* Sinh trang bai hoc HSK 5 tu mot ban mo ta ngan.
   Moi bai chi khac nhau o phan dau trang va phan Ngu phap; con lai giong het,
   nen de mot cho de sau nay sua mot lan la ca 36 bai cung doi.

   Cach dung:  node tools/build-hsk5-page.js <so-bai>
               node tools/build-hsk5-page.js all                              */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const META = require('./hsk5-lessons.js');

function grammarCard(n, g) {
  const rows = g.examples.map((e) =>
    '        <tr><td style="font-family:\'Noto Serif SC\',serif;color:var(--sky-d)">' + e.zh + '</td>' +
    '<td style="color:var(--soft);font-size:0.82rem">' + e.py + '</td>' +
    '<td style="color:var(--mid);font-size:0.85rem">' + e.vn + '</td></tr>').join('\n');

  const errs = (g.errors || []).map((e) =>
    '      <div class="g-err"><div class="g-err-wrong">✗ ' + e.wrong + '</div>' +
    '<div class="g-err-why">' + e.why + '</div>' +
    '<div class="g-err-right">✓ ' + e.right + '</div></div>').join('\n');

  return '  <div class="grammar-card">\n' +
    '    <div class="g-title"><span class="g-num">' + n + '</span>「' + g.point + '」</div>\n' +
    '    <div class="g-sub">' + g.explain + '</div>\n' +
    '    <div class="g-rule"><strong>Cấu trúc：</strong> ' + g.rule + '</div>\n' +
    '    <table class="g-table">\n' +
    '      <thead><tr><th>Câu tiếng Trung</th><th>Phiên âm</th><th>Nghĩa tiếng Việt</th></tr></thead>\n' +
    '      <tbody>\n' + rows + '\n      </tbody>\n' +
    '    </table>\n' +
    (errs ? '    <div class="g-errors">\n      <div class="g-errors-title">⚠️ Lỗi học sinh Việt hay mắc</div>\n' + errs + '\n    </div>\n' : '') +
    '  </div>';
}

function page(m) {
  const tabs = [
    ['vocab', '📚 Từ mới'], ['hanviet', '🌉 Hán–Việt'], ['flash', '🃏 Thẻ nhớ'],
    ['grammar', '📐 Ngữ pháp'], ['synonym', '🔍 Phân biệt từ'], ['dialog', '📖 Bài đọc'],
    ['match', '1️⃣ Ghép cụm'], ['fill', '2️⃣ Điền từ'], ['sort', '2️⃣ Sắp xếp'],
    ['errfix', '2️⃣ Chọn từ'], ['writing', '✍️ Viết đoạn'], ['speak', '4️⃣ Luyện nói'],
    ['tongket', '5️⃣ Tổng kết']
  ].map((t, i) => '  <button class="tab-btn' + (i === 0 ? ' active' : '') +
    '" data-action="show-tab" data-tab="' + t[0] + '">' + t[1] + '</button>').join('\n');

  return `<!DOCTYPE html>
<html lang="vi">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>HSK5 · Bài ${m.n} · ${m.zh}</title>
<link href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@400;600;700;900&family=Noto+Sans+SC:wght@300;400;500;700&family=Be+Vietnam+Pro:wght@300;400;500;600;700&family=Newsreader:ital,wght@0,500;0,600;1,600&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/css/lesson-template.css">
<link rel="stylesheet" href="/css/hsk5.css">
</head>
<body>

<header class="site-header">
  <a class="back-link" href="/">← Về trang chủ Hi Hán 喜汉</a>
  <div class="header-badge">HSK5 · Bài ${m.n}</div>
  <div class="header-zh">${m.zh}</div>
  <div class="header-py">${m.py}</div>
  <div class="header-vn">${m.vn}</div>
  <div class="header-meta">
    <span class="h-chip">🏠 ${m.topic}</span>
    <span class="h-chip">📚 ${m.vocabCount} từ mới</span>
    <span class="h-chip">📖 ${m.dialogueCount} đoạn bài đọc</span>
    <span class="h-chip">📐 ${m.grammar.length} điểm ngữ pháp</span>
    <span class="h-chip">🔍 ${m.synonymCount} cặp từ gần nghĩa</span>
  </div>
</header>

<nav class="tab-nav">
${tabs}
</nav>

<div class="main">

<div id="vocab" class="section active">
  <div class="sec-head">
    <div class="sec-title">📚 Từ mới <span class="sec-badge">${m.vocabCount} từ</span></div>
    <div class="sec-sub">👆 Bấm thẻ để xem nghĩa, cách dùng &amp; ví dụ mở rộng — lấy đúng bảng 词汇拓展 của giáo trình</div>
  </div>
  <div class="flip-tip">👆 Bấm thẻ để lật xem nghĩa &amp; ví dụ · Bên dưới mỗi thẻ có khung luyện dịch riêng</div>
  <div class="vocab-grid" id="vocab-grid"></div>
</div>

<div id="hanviet" class="section">
  <div class="sec-head">
    <div class="sec-title">🌉 Bắc cầu Hán–Việt <span class="sec-badge">汉越词</span></div>
    <div class="sec-sub">Lợi thế riêng của người Việt — và những từ bẫy giống chữ mà khác nghĩa</div>
  </div>
  <div id="hanviet-wrap"></div>
</div>

<div id="flash" class="section">
  <div class="sec-head">
    <div class="sec-title">🃏 Thẻ nhớ <span class="sec-badge">闪卡</span></div>
    <div class="sec-sub">Bấm thẻ để lật · dùng để ôn nhanh trước giờ kiểm tra</div>
  </div>
  <div class="flash-nav">
    <button class="flash-btn" data-action="flash-prev">←</button>
    <span class="flash-ctr" id="flash-ctr">1 / ${m.vocabCount}</span>
    <button class="flash-btn" data-action="flash-next">→</button>
  </div>
  <div class="flash-wrap">
    <div class="flash-outer" id="flash-card" data-action="flash-flip">
      <div class="flash-face f-front">
        <div class="f-emoji" id="ff-em"></div>
        <div class="f-zh" id="ff-zh"></div>
        <div class="f-py" id="ff-py"></div>
        <div class="f-hint">Bấm để xem nghĩa</div>
      </div>
      <div class="flash-face f-back">
        <div class="f-vn" id="fb-vn"></div>
        <div class="f-py" id="fb-py" style="color:var(--teal)"></div>
        <div class="f-ex" id="fb-ex"></div>
      </div>
    </div>
  </div>
  <div style="text-align:center;margin-top:14px;">
    <button class="btn-s" data-action="flash-shuffle">🔀 Xáo trộn</button>
  </div>
</div>

<div id="grammar" class="section">
  <div class="sec-head">
    <div class="sec-title">📐 Ngữ pháp <span class="sec-badge">${m.grammar.length} điểm</span></div>
    <div class="sec-sub">Các điểm ngôn ngữ trọng tâm của bài, theo đúng phần 词语例释 của giáo trình</div>
  </div>

${m.grammar.map((g, i) => grammarCard(i + 1, g)).join('\n\n')}
</div>

<div id="synonym" class="section">
  <div class="sec-head">
    <div class="sec-title">🔍 Phân biệt từ gần nghĩa <span class="sec-badge">词语辨析</span></div>
    <div class="sec-sub">Lên HSK 5, cái khó không còn là cấu trúc mà là <b>chọn đúng từ trong mấy từ cùng nghĩa</b>. Đọc phần khác nhau rồi làm bài ngay bên dưới.</div>
  </div>
  <div id="synonym-wrap"></div>
</div>

<div id="dialog" class="section">
  <div class="sec-head">
    <div class="sec-title">📖 Bài đọc <span class="sec-badge">课文 · ${m.dialogueCount} đoạn</span></div>
    <div class="sec-sub">Trả lời câu hỏi TRƯỚC khi đọc lời dịch — đề HSK 5 không cho đủ thời gian để dịch từng chữ, phải tập đoán ý.</div>
  </div>
  <div id="dlg-wrap"></div>
</div>

<div id="match" class="section">
  <div class="sec-head">
    <div class="sec-title">1️⃣ Ghép cụm từ <span class="sec-badge">词语搭配</span></div>
    <div class="sec-sub">Bấm một ô bên trái rồi bấm ô bên phải để ghép thành cụm đúng — lấy từ bảng 搭配 của giáo trình</div>
  </div>
  <div class="match-wrap">
    <div class="m-col" id="m-left"></div>
    <div class="m-col" id="m-right"></div>
  </div>
  <div id="m-fb" style="min-height:26px;text-align:center;margin-top:10px;"></div>
</div>

<div id="fill" class="section">
  <div class="sec-head">
    <div class="sec-title">2️⃣ Điền từ vào chỗ trống <span class="sec-badge">填空</span></div>
    <div class="sec-sub">Gõ từ còn thiếu vào ô — gợi ý nghĩa tiếng Việt nằm ngay bên cạnh</div>
  </div>
  <div id="fill-list"></div>
  <div id="fill-prog"></div>
  <div class="score-box" id="fill-score">
    <div><div style="font-size:0.78rem;color:var(--mid)">Điểm số</div><div class="score-n" id="fill-sn"></div></div>
    <div class="score-m" id="fill-sm"></div>
  </div>
</div>

<div id="sort" class="section">
  <div class="sec-head">
    <div class="sec-title">2️⃣ Sắp xếp thành câu <span class="sec-badge">连词成句</span></div>
    <div class="sec-sub">Bấm lần lượt các thẻ từ theo đúng thứ tự để tạo thành câu hoàn chỉnh</div>
  </div>
  <div id="sort-list"></div>
  <div class="score-box" id="sort-score">
    <div><div style="font-size:0.78rem;color:var(--mid)">Điểm số</div><div class="score-n" id="sort-sn"></div></div>
    <div class="score-m" id="sort-sm"></div>
  </div>
</div>

<div id="errfix" class="section">
  <div class="sec-head">
    <div class="sec-title">2️⃣ Chọn từ phù hợp <span class="sec-badge">选词填空</span></div>
    <div class="sec-sub">Đọc kỹ nghĩa của câu rồi chọn từ phù hợp — phần lớn câu ở đây đánh vào chỗ dễ nhầm giữa các từ gần nghĩa.</div>
  </div>
  <div id="errfix-list"></div>
  <div class="score-box" id="errfix-score">
    <div><div style="font-size:0.78rem;color:var(--mid)">Điểm số</div><div class="score-n" id="errfix-sn"></div></div>
    <div class="score-m" id="errfix-sm"></div>
  </div>
</div>

<div id="writing" class="section">
  <div class="sec-head">
    <div class="sec-title">✍️ Viết đoạn <span class="sec-badge">书写 · 第二部分</span></div>
    <div class="sec-sub">Đúng dạng đề thi HSK 5 phần viết. Bài làm tự lưu trong máy, thầy/cô chấm sau.</div>
  </div>
  <div id="writing-wrap"></div>
</div>

<div id="speak" class="section">
  <div class="sec-head">
    <div class="sec-title">4️⃣ Luyện nói phản xạ</div>
    <div class="sec-sub">Nhấn 🔊 nghe câu hỏi, rồi <strong style="color:var(--teal)">tự ghi âm câu trả lời của bạn</strong> — không đọc theo câu mẫu.</div>
  </div>
  <div id="speak-wrap"></div>
</div>

<div id="tongket" class="section">
  <div class="sec-head">
    <div class="sec-title">5️⃣ Tổng kết bài học <span class="sec-badge">总结</span></div>
    <div class="sec-sub">Điểm tổng hợp từ các phần bài tập bên trên — hoàn thành hết rồi quay lại đây để xem điểm chính xác nhất!</div>
  </div>
  <div id="summary-wrap"></div>
</div>

</div>

<script src="/js/hsk5-bai-${m.n}-data.js"></script>
<script src="/js/lesson-engine.js"></script>
<script src="/js/hsk5-extra.js"></script>
<link rel="stylesheet" href="/css/widgets.css" />
<script src="/js/widgets.js" defer></script>
</body>
</html>
`;
}

const arg = process.argv[2];
const list = arg === 'all' ? Object.keys(META) : [arg];
list.forEach(function (n) {
  const m = META[n];
  if (!m) { console.log('Bo qua bai ' + n + ' — chua co mo ta trong tools/hsk5-lessons.js'); return; }
  m.n = Number(n);
  const out = path.join(ROOT, 'public', 'lessons', 'hsk5-bai-' + n + '.html');
  fs.writeFileSync(out, page(m));
  console.log('Da sinh  ' + path.relative(ROOT, out) + '  (' + m.zh + ')');
});
