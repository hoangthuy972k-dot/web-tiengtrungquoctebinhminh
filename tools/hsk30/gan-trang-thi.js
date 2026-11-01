/* Trang /exam/: nhom thu muc "De HSK 3.0" (cap 1–5), dung tu cac de co trong protected/hsk30.
   Chay lai moi khi them de: thay khoi cu (tu tieu de HSK 3.0 den truoc tieu de HSK 2.0). */
const fs = require('fs');
const F = 'C:/Users/Admin/Desktop/New folder/public/exam/index.html';
const PD = 'C:/Users/Admin/Desktop/New folder/protected/hsk30';
let s = fs.readFileSync(F, 'utf8');

const MOC_DAU = '    <h2 class="ex-nhom-de ex-h30">';
const MOC_CU = '    <h2 class="ex-nhom-de">Đề HSK 2.0';
const i0 = s.indexOf(MOC_DAU), i1 = s.indexOf(MOC_CU);
if (i0 >= 0 && i1 > i0) s = s.slice(0, i0) + s.slice(s.indexOf('\n', i1) + 1);

const IC = {
  folder: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
  chev: '<svg class="ex-folder-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M6 6l12 12M18 6 6 18"/></svg>',
  khoa: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="4" y="11" width="16" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>'
};

// De co san: doc tu protected/hsk30/<id>/de.json
const DE = {};
fs.readdirSync(PD).filter(d => /^hsk30-\d-\d+$/.test(d)).sort().forEach(d => {
  const x = JSON.parse(fs.readFileSync(PD + '/' + d + '/de.json', 'utf8'));
  const phut = x.sections.reduce((a, sec) => a + (sec.phut || 0), 0);
  (DE[x.capDo] = DE[x.capDo] || []).push({
    id: d, so: 'Đề ' + x.de, nguon: '全真模拟试卷 ' + x.de,
    chung: x.sections.map(sec => sec.ten + ' ' + sec.parts.reduce((a, p) => a + p.cau.length, 0)).join(' · ') + ' câu · khoảng ' + phut + ' phút'
  });
});

let h = MOC_DAU + 'Đề HSK 3.0 <span class="tag">Cấu trúc mới 2026</span><span class="ex-can-dn">' + IC.khoa + 'Cần đăng nhập</span></h2>\n' +
  '    <section class="ex-folders" aria-label="Đề HSK 3.0 theo cấp độ">\n';
for (let c = 1; c <= 5; c++) {
  const ds = DE[c] || [];
  if (!ds.length) {
    h += '      <div class="ex-folder is-soon" aria-disabled="true"><span class="ex-folder-ico">' + IC.folder + '</span><span class="ex-folder-t"><b>HSK ' + c + '</b><small>Sắp có</small></span></div>\n';
    continue;
  }
  h += '      <button type="button" class="ex-folder" data-folder="h30-' + c + '" aria-expanded="false" aria-controls="lv-h30-' + c + '">\n' +
    '        <span class="ex-folder-ico">' + IC.folder + '</span>\n' +
    '        <span class="ex-folder-t"><b>HSK ' + c + '</b><small>' + ds.length + ' đề thi</small></span>\n' +
    '        <span class="ex-folder-prog" data-prog30="' + c + '"><span class="ex-folder-bar"><i style="width:0%"></i></span><small>Chưa thi đề nào</small></span>\n' +
    '        ' + IC.chev + '\n      </button>\n';
}
h += '    </section>\n\n';
Object.keys(DE).forEach(c => {
  h += '    <section class="ex-level" id="lv-h30-' + c + '" data-level="h30-' + c + '" aria-labelledby="lvt-h30-' + c + '" hidden>\n' +
    '      <div class="ex-level-head">\n' +
    '        <div><h2 id="lvt-h30-' + c + '">HSK 3.0 · Cấp ' + c + ' <span class="tag">' + DE[c].length + ' đề</span></h2>\n' +
    '        <p class="ex-level-meta">Có 2 chế độ: Thi thật (mô phỏng thi trên máy) và Luyện tập (xem đáp án, giải thích).</p></div>\n' +
    '        <button type="button" class="ex-level-close" data-close-folder aria-label="Đóng danh sách HSK 3.0 cấp ' + c + '">' + IC.close + '</button>\n' +
    '      </div>\n      <ol class="ex-tests">\n';
  DE[c].forEach(d => {
    h += '        <li class="ex-test" data-h30="' + d.id + '">\n' +
      '          <div class="ex-test-name"><h3>' + d.so + '</h3><span>' + d.nguon + ' · ' + d.chung + '</span></div>\n' +
      '          <div class="last" data-last30="' + d.id + '"><span class="ex-st">Chưa thi</span></div>\n' +
      '          <div class="actions"><a class="ex-btn-link" href="/hsk30?id=' + d.id + '" data-start30="' + d.id + '">Vào phòng thi</a></div>\n' +
      '        </li>\n';
  });
  h += '      </ol>\n    </section>\n\n';
});
h += MOC_CU + ' <span class="tag">Cấu trúc cũ</span></h2>\n';

const moc = '    <section class="ex-folders" aria-label="Chọn cấp độ">';
if (!s.includes(moc)) throw new Error('khong thay nhom thu muc cu');
s = s.replace(moc, h + moc);
fs.writeFileSync(F, s);
console.log('ok: ' + Object.keys(DE).map(c => 'HSK' + c + ' ' + DE[c].length + ' de').join(', '));
