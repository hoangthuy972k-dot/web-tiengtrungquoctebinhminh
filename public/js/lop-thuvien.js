/* Thu vien tro choi gon hon — man chuan bi Che do lop hoc (/lop).
   · Thanh muc dich: Tat ca · On bai · Goi hoc sinh · Chia doi · Van dong · Thi dau dien thoai — loc the o muc 4 (kiem tra)
     va muc 5 (tro choi). Tro nao chua co trong bang LOAI duoi day thi tu xep theo nhom / nhan GAME_TAGS cua lop.js.
   · Sap xep "Hay dung": dem so lan mo moi tro (localStorage hyv_lop_dung, chi 30 ngay gan nhat, rieng tung may/thay co).
   · "▶ Xem nhanh" tren moi the: 3 buoc + hoc sinh lam gi.
   Chi doc / sap xep DOM sau khi lop.js da dung luoi (decorateSetup) — khong sua lop.js.                              */
(function () {
  'use strict';
  var DUNG_KEY = 'hyv_lop_dung', PREF_KEY = 'hyv_lop_tv', NGAY = 30 * 86400000;
  var TAB = [['tat', 'Tất cả'], ['on', 'Ôn bài'], ['goi', 'Gọi học sinh'], ['doi', 'Chia đội'], ['vd', 'Vận động'], ['dt', 'Thi đấu điện thoại']];
  // Muc dich cua tung the (khoa = data-game, t:data-test, hoac id the)
  var LOAI = {
    thilop: ['dt', 'on'], kiemtra: ['goi', 'on'], noi: ['goi', 'on'], ufo: ['goi'], goiten: ['goi', 'doi'], rong: [], the: ['on'],
    't:dictation': ['on'], 't:quiz': ['on'], 't:phatam': ['on', 'goi'], 't:paper': ['on'],
    nghieng: ['vd', 'goi'], chem: ['vd'], theduc: ['vd'], ngoisao: ['vd', 'goi'],
    zombie: ['on'], ghep: ['doi', 'on'], ochu: ['on'], luot: ['doi'], bay: ['on', 'dt', 'doi'], doantau: ['on', 'dt', 'doi'],
    doikhang: ['dt'], chuong: ['on', 'dt'], dua: ['dt'], nhip: ['dt', 'on'], tug: ['doi', 'dt'], train: ['doi'], mine: ['doi'],
    errfix: ['on', 'doi'], abc: ['on'], sort: ['on', 'vd', 'doi'], bingo: ['on'], guess: ['on', 'doi'], tiles: ['on', 'doi'],
    taboo: ['on', 'doi'], trans: ['on', 'doi'], listen: ['on', 'goi'], hanzi: ['on', 'doi'], role: ['on', 'goi'], hv: ['on', 'doi'],
    match: ['on', 'doi'], chain: ['on', 'doi'], write: ['on', 'doi'],
    gapthu: ['doi', 'on'], laudai: ['doi', 'on'], duongbang: ['doi', 'on']
  };
  // Xem nhanh: b = 3 buoc cua thay co, hs = hoc sinh lam gi
  var XN = {
    thilop: { b: ['Chọn cấp HSK và đề trong kho thi thử.', 'Chiếu mã QR, đợi học sinh vào phòng rồi bấm bắt đầu — phần Nghe phát qua loa máy cô.', 'Hết giờ xem bảng điểm, thống kê từng câu; cần thì in đề giấy.'], hs: 'Quét QR, làm bài trên điện thoại như phòng thi thật, nộp là biết điểm.' },
    kiemtra: { b: ['Chọn bài ở mục 2 rồi mở thẻ.', 'Chọn trò (Hộp quà, Leo thang, Ghế nóng, Bốc thăm) và gọi một bạn lên.', 'Bấm đúng / sai từng câu — web gợi ý điểm và lưu vào cột Miệng.'], hs: 'Một bạn lên trả lời câu hỏi lấy từ bài đã học, cả lớp theo dõi.' },
    noi: { b: ['Chọn bài ở mục 2 rồi mở thẻ.', 'Máy đọc câu hỏi, đồng hồ đếm ngược.', 'Nghe câu trả lời, chấm rồi chuyển câu tiếp.'], hs: 'Nghe câu hỏi tiếng Trung và trả lời bằng lời trước khi hết giờ.' },
    ufo: { b: ['Chọn lớp trên hệ thống hoặc danh sách nhanh.', 'Bấm 🛸 Gọi (phím cách) — đĩa bay hút một bạn, ưu tiên bạn lâu chưa gọi; bạn vắng tự bỏ qua.', 'Chấm điểm ngay, điểm lên cột Miệng.'], hs: 'Bạn bị “hút” lên bảng trả bài; cả lớp hồi hộp đoán xem là ai.' },
    goiten: { b: ['Chọn danh sách lớp, xem lại ai vắng.', 'Chọn kiểu: vòng quay, đua vịt, đua bi, ống kính, chia cặp hoặc chia nhóm.', 'Bấm bắt đầu — bạn được chọn lên trả lời; bấm lại để gọi tiếp.'], hs: 'Theo dõi vòng quay / cuộc đua để biết ai được gọi hoặc vào nhóm nào.' },
    rong: { b: ['Mở thẻ, cho phép dùng micro máy chiếu.', 'Chọn mức ồn cho phép và thời gian.', 'Lớp yên thì rồng ngủ và tích sao; ồn quá rồng thức dậy.'], hs: 'Giữ trật tự để rồng ngủ yên và cả lớp được sao.' },
    the: { b: ['In thẻ cho mỗi bạn (mỗi thẻ một mã riêng).', 'Chiếu câu hỏi, học sinh xoay thẻ chọn A/B/C/D rồi giơ lên.', 'Quét cả lớp bằng camera điện thoại — màn chiếu hiện ai đúng ai sai.'], hs: 'Xoay thẻ giấy theo đáp án mình chọn và giơ cao — không cần thiết bị.' },
    't:dictation': { b: ['Chọn bài ở mục 2.', 'Máy đọc từng từ kèm nghĩa tiếng Việt.', 'Đọc xong hiện bảng đáp án để đổi vở chấm chéo.'], hs: 'Nghe rồi viết chữ Hán + phiên âm vào vở.' },
    't:quiz': { b: ['Chọn bài ở mục 2.', 'Chiếu lần lượt 10 câu trắc nghiệm có đếm giờ.', 'Hết giờ hiện bảng đáp án để chấm chéo.'], hs: 'Ghi A/B/C vào vở, sau đó chấm bài bạn ngồi cạnh.' },
    't:phatam': { b: ['Chọn bài phát âm (1–13 hoặc cả khoá).', 'Chọn kiểu: nghe viết phiên âm, nghe chọn, hoặc gọi đọc to.', 'Chấm ✓ / ✗ từng từ rồi bấm “Em tiếp theo”.'], hs: 'Nghe và viết / chọn phiên âm, hoặc đọc to từ được chiếu.' },
    't:paper': { b: ['Chọn bài ở mục 2.', 'Chọn số câu — web ra 4 mã đề khác thứ tự.', 'Bấm In, kèm bảng đáp án cho thầy cô.'], hs: 'Làm đề giấy tại chỗ; hai bạn ngồi cạnh có mã đề khác nhau.' },
    nghieng: { b: ['Chọn bài, mở trò và cho phép webcam.', 'Mời từng bạn đứng trước webcam.', 'Máy tính điểm và chuỗi đúng; đổi bạn sau mỗi lượt.'], hs: 'Nghiêng đầu trái / phải (hoặc cười, há miệng) để chọn 1 trong 2 đáp án.' },
    chem: { b: ['Chọn bài, mở trò và cho phép webcam.', 'Mời một bạn đứng trước màn hình.', 'Theo dõi điểm, hết lượt thì đổi bạn.'], hs: 'Vung tay chém quả (hoặc chọc bóng) mang đáp án đúng.' },
    theduc: { b: ['Chọn bài, mở trò và cho phép webcam.', 'Giới thiệu 4 động tác ứng với A–D.', 'Câu hiện ra, học sinh làm động tác — máy chấm.'], hs: 'Làm đúng động tác (giơ hai tay, tay phải, tay trái, dang tay) để trả lời.' },
    ngoisao: { b: ['Chọn bài và danh sách lớp, mở trò.', 'Máy bốc hai bạn có mặt lên đấu trước webcam.', 'Ai đúng trước lấy sao, rồi bốc cặp mới.'], hs: 'Giơ 1–4 ngón tay để chọn A–D, nhanh hơn bạn đấu.' },
    zombie: { b: ['Chọn bài rồi mở trò.', 'Zombie mang đáp án tiến về hàng rào.', 'Cả lớp hô đáp án, cô bấm bắn zombie đúng.'], hs: 'Cùng hô to đáp án đúng trước khi zombie tràn qua.' },
    ghep: { b: ['Chọn bài và số tổ, mở trò.', 'Từng tổ chọn ô và trả lời câu hỏi.', 'Đúng thì lật mảnh ghép; đoán ra bức tranh được điểm lớn.'], hs: 'Bàn trong tổ để trả lời, rồi đoán bức tranh văn hoá phía sau.' },
    ochu: { b: ['Chọn bài, mở trò — web tự xếp ô chữ.', 'Chọn một hàng, đọc gợi ý nghĩa tiếng Việt.', 'Ai / tổ nào đúng thì điền chữ vào ô.'], hs: 'Đoán từ theo nghĩa, nói chữ Hán hoặc pinyin.' },
    luot: { b: ['Chọn bài và 2–4 tổ, mở trò.', 'Tổ tung xúc xắc, đến ô nào trả lời câu ô đó.', 'Có ô thưởng, ô thử thách — tổ về đích trước thắng.'], hs: 'Cả tổ cùng nghĩ đáp án khi đến lượt mình.' },
    bay: { b: ['Chọn bài, mở trò; chọn chơi trên bảng hoặc mã QR theo tổ.', 'Trên bảng: mời bạn lên bắt từ. QR: học sinh chọn tổ trên điện thoại.', 'Xem câu đúng / bảng xếp hạng các tổ.'], hs: 'Bắt các từ đang bay theo đúng thứ tự để ghép thành câu.' },
    doantau: { b: ['Chọn bài, mở trò; chọn chơi trên bảng hoặc mã QR theo tổ.', 'Kéo toa sao cho đáp án khớp câu hỏi ở toa trước.', 'Xem đoàn tàu hoàn chỉnh / bảng xếp hạng các tổ.'], hs: 'Nối toa đúng thứ tự, trên bảng hoặc trên điện thoại.' },
    doikhang: { b: ['Chọn bài, mở trò và chiếu mã QR.', 'Đợi học sinh vào — web ghép cặp ngẫu nhiên.', 'Bấm bắt đầu; màn chiếu hiện tất cả các cặp.'], hs: 'Quét QR, trả lời nhanh hơn bạn cùng cặp để kéo dây về phía mình.' },
    chuong: { b: ['Chọn bài, mở trò; chọn bảng con hoặc điện thoại.', 'Chiếu từng câu — ai sai rời sàn.', 'Dùng Cứu trợ / Phao khi cần, đến Câu Chuông Vàng.'], hs: 'Viết đáp án lên bảng con hoặc chọn trên điện thoại, cố trụ lại sàn.' },
    dua: { b: ['Chọn bài, mở trò và chiếu mã QR.', 'Học sinh chọn linh vật, tên; cô bấm xuất phát.', 'Theo dõi đường đua, cuối trận có bục trao giải.'], hs: 'Trả lời trên điện thoại — mỗi câu đúng linh vật chạy một bước.' },
    nhip: { b: ['Chọn bài, mở trò và chiếu mã QR.', 'Học sinh vào và tự làm lần lượt các câu.', 'Màn chiếu hiện bảng xếp hạng trực tiếp.'], hs: 'Làm câu theo tốc độ riêng, biết đúng sai ngay.' },
    tug: { b: ['Chọn bài, mở trò; chọn chơi trên bảng hoặc mã QR.', 'Hai tổ trả lời cùng câu, tổ đúng trước kéo một nấc.', 'Kéo đủ 5 nấc là thắng.'], hs: 'Cả tổ trả lời nhanh, đúng (trên bảng hoặc điện thoại) để kéo dây.' },
    train: { b: ['Chọn bài và số tổ, mở trò.', 'Chiếu câu, cả lớp viết vào bảng con.', 'Tổ đúng chạy thêm một ga; về đích trước được +3.'], hs: 'Viết đáp án vào bảng con và giơ lên cùng tổ.' },
    mine: { b: ['Chọn bài và số tổ, mở trò.', 'Các tổ lần lượt trả lời câu hỏi.', 'Đúng thì mở 1 trong 16 hộp: điểm, quà, thêm lượt… hoặc bom.'], hs: 'Trả lời khi đến lượt tổ mình rồi chọn hộp may mắn.' },
    errfix: { b: ['Chọn bài, mở trò — chiếu 5 câu.', 'Mỗi tổ cử 1 bạn lên bảng.', 'Khoanh câu sai, viết lại câu đúng; cô lật đáp án.'], hs: 'Tìm câu sai và sửa lại, tiếp sức theo tổ.' },
    abc: { b: ['Chọn bài rồi mở trò.', 'Chiếu câu có chỗ trống, đếm ngược 10 giây.', 'Lật đáp án, cộng điểm tổ đúng nhiều nhất.'], hs: 'Giơ thẻ A / B / C theo đáp án mình chọn.' },
    sort: { b: ['Chọn bài, mở trò — chiếu thẻ từ lộn xộn.', 'Mỗi tổ cử vài bạn lên, mỗi bạn cầm một thẻ.', 'Các bạn đứng xếp thành câu; cô lật đáp án.'], hs: 'Cầm thẻ từ và đứng đúng chỗ để tạo thành câu.' },
    bingo: { b: ['Chọn bài, mở trò — chiếu 15 từ.', 'Học sinh chọn 9 từ viết vào lưới 3×3.', 'Web gọi từng từ đến khi có bạn hô 中了!'], hs: 'Gạch từ nghe được, đủ 3 ô thẳng hàng thì hô 中了!' },
    guess: { b: ['Chọn bài rồi mở trò.', 'Chiếu hình minh hoạ.', 'Tổ giơ tay đoán chữ Hán + pinyin, cô lật đáp án.'], hs: 'Nhìn hình, đoán chữ Hán và đọc pinyin.' },
    tiles: { b: ['Chọn bài rồi mở trò.', 'Mỗi tổ mở một ô che hình rồi đoán.', 'Có ô thưởng +1 và ô mất lượt.'], hs: 'Mở ô và đoán từ khi đến lượt tổ mình.' },
    taboo: { b: ['Chọn bài rồi mở trò.', 'Một bạn quay lưng với màn hình.', 'Tổ mô tả bằng tiếng Trung; 60 giây đếm số từ đoán được.'], hs: 'Mô tả bằng tiếng Trung mà không nói chính từ đó; bạn quay lưng đoán.' },
    trans: { b: ['Chọn bài, mở trò — chiếu câu tiếng Việt.', 'Mỗi tổ cử 1 bạn lên bảng.', 'Viết câu tiếng Trung; cô lật câu mẫu và phiên âm.'], hs: 'Dịch nhanh câu tiếng Việt sang tiếng Trung.' },
    listen: { b: ['Chọn bài, mở trò — chiếu 9 chữ Hán.', 'Hai bạn đại diện hai tổ lên bảng.', 'Máy đọc một từ, ai chỉ đúng trước thắng.'], hs: 'Nghe và chỉ thật nhanh vào chữ vừa đọc.' },
    hanzi: { b: ['Chọn bài rồi mở trò.', 'Chiếu bộ thủ, số nét, cấu tạo, mẹo nhớ.', 'Tổ đoán ra chữ Hán thì được điểm.'], hs: 'Dựa vào gợi ý để đoán và viết chữ Hán.' },
    role: { b: ['Chọn bài, mở trò — hội thoại bị che lời một vai.', 'Mời hai bạn lên đóng vai.', 'Lật lời gốc để cả lớp so sánh.'], hs: 'Đóng vai; bạn giữ vai bị che tự nói dựa vào nghĩa tiếng Việt.' },
    hv: { b: ['Chọn bài rồi mở trò.', 'Chiếu âm Hán–Việt và nghĩa.', 'Tổ đoán chữ Hán, cô lật đáp án.'], hs: 'Dùng vốn từ Hán–Việt để đoán chữ Hán.' },
    match: { b: ['Chọn bài, mở trò — 6 chữ Hán, 6 nghĩa xáo trộn.', 'Tổ đọc từng cặp “1 – C”.', 'Cô bấm để kiểm tra từng cặp.'], hs: 'Nối chữ Hán với nghĩa đúng thật nhanh.' },
    chain: { b: ['Chọn bài rồi mở trò.', 'Chiếu chữ cuối của từ trước.', 'Tổ nói được từ bắt đầu bằng chữ đó thì được điểm.'], hs: 'Nghĩ nhanh từ nối tiếp (接龙).' },
    write: { b: ['Chọn bài rồi mở trò.', 'Máy đọc một từ hoặc cả câu.', 'Các tổ viết lên bảng, cô lật đáp án để chấm.'], hs: 'Nghe và viết chữ Hán lên bảng thật nhanh, thật đúng.' },
    gapthu: { b: ['Chọn bài và 2–6 tổ, mở trò.', 'Tổ trả lời đúng được điều khiển cần gắp, bấm THẢ đúng lúc.', 'Thú hiếm nhiều điểm, có bóng ⭐ x2 và 🎁 bất ngờ — tủ thú nhiều điểm nhất thắng.'], hs: 'Cả tổ trả lời, rồi một bạn canh lúc bấm THẢ để gắp thú.' },
    laudai: { b: ['Chọn bài và 2–6 tổ, mở trò.', 'Tổ trả lời đúng được chọn mảnh ghép (tường, tháp, cổng…); câu khó được mảnh lớn.', 'Coi chừng gió lớn — lâu đài hoàn chỉnh được thưởng.'], hs: 'Bàn trong tổ để trả lời và chọn mảnh ghép xây lâu đài.' },
    duongbang: { b: ['Chọn bài và 2–6 tổ, mở trò.', 'Tổ trả lời đúng được chọn một ô băng phía trước.', 'Ô an toàn, băng nứt (lùi 1) hoặc cá thưởng (+1) — tổ tới lâu đài trước thắng.'], hs: 'Trả lời đúng rồi đoán ô băng an toàn để chim cánh cụt của tổ đi tiếp.' }
  };
  var ID_KHOA = { lopKiemTraOpen: 'kiemtra', lopNoiOpen: 'noi', lopUfoOpen: 'ufo', lopGoiTenOpen: 'goiten', lopRongOpen: 'rong', lopTheOpen: 'the' };

  function $all(s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function docLS(k, d) { try { var v = localStorage.getItem(k); return v ? JSON.parse(v) : d; } catch (e) { return d; } }
  function ghiLS(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* bo qua */ } }
  function khoa(c) {
    if (c.hasAttribute('data-game')) return c.getAttribute('data-game');
    if (c.hasAttribute('data-test')) return 't:' + c.getAttribute('data-test');
    if (c.id && ID_KHOA[c.id]) return ID_KHOA[c.id];
    if (c.id) return c.id;
    if (c.classList.contains('lop-thi-card')) return 'thilop';
    return '';
  }
  // Tro moi (chua co trong LOAI): doan muc dich theo ten nhom + nhan thoi luong / cach choi
  function loaiCua(c, k, nhom) {
    if (LOAI[k]) return LOAI[k];
    var t = ((nhom || '') + ' ' + c.textContent).toLowerCase(), out = [];
    if (/qr|điện thoại/.test(t)) out.push('dt');
    if (/tổ|đội|nhóm/.test(t)) out.push('doi');
    if (/webcam|vận động|động tác/.test(t)) out.push('vd');
    if (/từng bạn|đại diện|2 em|gọi/.test(t)) out.push('goi');
    if (/ôn|từ vựng|câu|ngữ pháp|chữ hán|khởi động/.test(t) || !out.length) out.push('on');
    return out;
  }

  /* ---------------- dem lan mo ---------------- */
  function docDung() {
    var d = docLS(DUNG_KEY, {}) || {}, gioiHan = Date.now() - NGAY;
    Object.keys(d).forEach(function (k) {
      d[k] = (Array.isArray(d[k]) ? d[k] : []).filter(function (t) { return t > gioiHan; });
      if (!d[k].length) delete d[k];
    });
    return d;
  }
  function ghiMo(k) {
    if (!k) return;
    var d = docDung();
    d[k] = (d[k] || []).concat(Date.now()).slice(-200);
    ghiLS(DUNG_KEY, d);
    if (S.sx === 'hay') setTimeout(apDung, 0);
  }

  /* ---------------- thanh loc ---------------- */
  var S = { tab: 'tat', sx: 'nhom', the: [] };
  function the() {
    // the o muc 4 + muc 5, kem nhom (tieu de .lop-group gan nhat phia tren)
    var out = [];
    $all('.lop-tests > .lop-test-card').forEach(function (c, i) { out.push({ c: c, k: khoa(c), i: i, khu: 'tests', nhom: 'Kiểm tra đầu giờ' }); });
    var nhom = '';
    $all('.lop-games > *').forEach(function (c, i) {
      if (c.classList.contains('lop-group')) { nhom = c.textContent; return; }
      if (c.classList.contains('lop-game-card')) out.push({ c: c, k: khoa(c), i: 100 + i, khu: 'games', nhom: nhom });
    });
    out.forEach(function (x) { x.loai = loaiCua(x.c, x.k, x.nhom); });
    return out;
  }
  function dung() {
    var tests = document.querySelector('.lop-tests'), grid = document.querySelector('.lop-games');
    if (!tests || !grid || document.getElementById('lopTv')) return;
    var p = docLS(PREF_KEY, {}) || {};
    S.tab = TAB.some(function (t) { return t[0] === p.tab; }) ? p.tab : 'tat';
    S.sx = p.sx === 'hay' ? 'hay' : 'nhom';
    var bar = document.createElement('div');
    bar.className = 'lop-tv';
    bar.id = 'lopTv';
    bar.innerHTML = '<div class="lop-tv-tabs" role="tablist" aria-label="Lọc trò theo mục đích">' + TAB.map(function (t) {
      return '<button type="button" role="tab" data-tv="' + t[0] + '"><span>' + esc(t[1]) + '</span><i></i></button>';
    }).join('') + '</div>' +
      '<label class="lop-tv-sx">Thứ tự <select id="lopTvSx"><option value="nhom">Theo nhóm</option><option value="hay">Hay dùng (30 ngày)</option></select></label>';
    var field = tests.closest('.lop-field');
    field.parentNode.insertBefore(bar, field);
    bar.addEventListener('click', function (e) {
      var b = e.target.closest('[data-tv]');
      if (!b) return;
      S.tab = b.getAttribute('data-tv');
      luu(); ap();
    });
    bar.querySelector('#lopTvSx').value = S.sx;
    bar.querySelector('#lopTvSx').addEventListener('change', function () { S.sx = this.value; luu(); ap(); });
    // Nut "Xem nhanh" tren moi the (span, vi the la <button> / <a> — khong long nut trong nut)
    S.the = the();
    S.the.forEach(function (x) { ganXem(x); });
    // Dem lan mo (bat o pha capture de chay truoc trinh xu ly cua the)
    document.addEventListener('click', function (e) {
      if (e.target.closest('.lop-xn')) return;
      var c = e.target.closest('.lop-tests > .lop-test-card, .lop-games > .lop-game-card');
      if (c && !c.disabled) ghiMo(khoa(c));
    }, true);
    ap();
  }
  function luu() { ghiLS(PREF_KEY, { tab: S.tab, sx: S.sx }); }
  function ap() {
    S.the = the();
    var dem = {};
    TAB.forEach(function (t) { dem[t[0]] = 0; });
    S.the.forEach(function (x) { dem.tat++; x.loai.forEach(function (l) { if (dem[l] != null) dem[l]++; }); });
    $all('#lopTv [data-tv]').forEach(function (b) {
      var t = b.getAttribute('data-tv'), on = t === S.tab;
      b.classList.toggle('on', on);
      b.setAttribute('aria-selected', on);
      b.querySelector('i').textContent = dem[t];
    });
    S.the.forEach(function (x) {
      x.c.classList.toggle('lop-tv-an', S.tab !== 'tat' && x.loai.indexOf(S.tab) < 0);
    });
    // tieu de nhom khong con the nao -> an; khu khong con the nao -> an ca muc
    var grid = document.querySelector('.lop-games'), dau = null, co = false;
    $all('.lop-games > *').forEach(function (c) {
      if (c.classList.contains('lop-group')) { if (dau) dau.classList.toggle('lop-tv-an', !co); dau = c; co = false; return; }
      if (c.classList.contains('lop-game-card') && !c.classList.contains('lop-tv-an')) co = true;
    });
    if (dau) dau.classList.toggle('lop-tv-an', !co);
    ['.lop-tests', '.lop-games'].forEach(function (s) {
      var g = document.querySelector(s), f = g && g.closest('.lop-field');
      if (!f) return;
      var con = $all(s + ' > .lop-test-card, ' + s + ' > .lop-game-card', document).some(function (c) { return !c.classList.contains('lop-tv-an'); });
      f.classList.toggle('lop-tv-an', !con);
    });
    var show = document.getElementById('lopShow');
    if (show) show.classList.toggle('lop-tv-an', S.tab !== 'tat' && S.tab !== 'on');
    if (grid) grid.classList.toggle('lop-tv-hay', S.sx === 'hay');
    var tests = document.querySelector('.lop-tests');
    if (tests) tests.classList.toggle('lop-tv-hay', S.sx === 'hay');
    apDung();
  }
  function apDung() {
    var d = docDung(), hay = S.sx === 'hay';
    var xep = S.the.slice().sort(function (a, b) { return ((d[b.k] || []).length - (d[a.k] || []).length) || a.i - b.i; });
    xep.forEach(function (x, r) {
      var n = (d[x.k] || []).length;
      x.c.style.order = hay ? (n ? r : 1000 + x.i) : '';
      var bd = x.c.querySelector('.lop-tv-dem');
      if (hay && n) {
        if (!bd) { bd = document.createElement('span'); bd.className = 'lop-tv-dem'; x.c.appendChild(bd); }
        bd.textContent = '🔥 ' + n + ' lần';
      } else if (bd) bd.remove();
    });
  }

  /* ---------------- xem nhanh ---------------- */
  function ganXem(x) {
    if (x.c.querySelector('.lop-xn')) return;
    var s = document.createElement('span');
    s.className = 'lop-xn';
    s.setAttribute('role', 'button');
    s.setAttribute('tabindex', '0');
    s.textContent = '▶ Xem nhanh';
    var moXem = function (e) {
      e.preventDefault(); e.stopPropagation();
      xem(x.c, s);
    };
    s.addEventListener('click', moXem);
    s.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') moXem(e); });
    x.c.appendChild(s);
  }
  var pop = null;
  function xem(c, neo) {
    var k = khoa(c), ten = (c.querySelector('.lop-game-name') || {}).textContent || '', mo = (c.querySelector('.lop-game-desc') || {}).textContent || '';
    var x = XN[k];
    if (!x) {
      // tro moi chua co huong dan: lay tu mo ta cua the
      var cau = mo.split(/(?<=[.!?])\s+/).filter(Boolean);
      x = { b: ['Chọn bài ở mục 2 (nếu trò cần câu hỏi) rồi mở trò.', cau[0] || 'Làm theo hướng dẫn trên màn chiếu.', 'Cộng điểm cho tổ / bạn đúng; xong bấm 🏁 Trao giải.'], hs: cau.slice(1).join(' ') || 'Tham gia theo hướng dẫn trên màn chiếu.' };
    }
    if (!pop) {
      pop = document.createElement('div');
      pop.className = 'lop-xn-pop';
      pop.setAttribute('role', 'dialog');
      pop.hidden = true;
      document.body.appendChild(pop);
      pop.addEventListener('click', function (e) {
        var b = e.target.closest('[data-xn]');
        if (!b) return;
        var a = b.getAttribute('data-xn');
        dongXem();
        if (a === 'mo' && pop._the && !pop._the.disabled) pop._the.click();
      });
      document.addEventListener('mousedown', function (e) { if (pop && !pop.hidden && !pop.contains(e.target) && !e.target.closest('.lop-xn')) dongXem(); });
      document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && pop && !pop.hidden) dongXem(); });
      window.addEventListener('resize', dongXem);
    }
    pop._the = c;
    pop.setAttribute('aria-label', 'Xem nhanh: ' + ten);
    pop.innerHTML = '<h3>▶ ' + esc(ten) + '</h3><ol>' + x.b.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ol>' +
      '<p class="lop-xn-hs"><b>Học sinh làm gì:</b> ' + esc(x.hs) + '</p>' +
      (c.disabled ? '<p class="lop-xn-chua">Chọn bài ở mục 2 trước để mở trò này.</p>' : '') +
      '<div class="lop-xn-nut"><button type="button" data-xn="dong">Đóng</button>' + (c.disabled ? '' : '<button type="button" class="on" data-xn="mo">Mở trò ▶</button>') + '</div>';
    pop.hidden = false;
    // dat ngay duoi nut "Xem nhanh", giu trong khung nhin
    var r = neo.getBoundingClientRect(), w = Math.min(360, window.innerWidth - 24), h = pop.offsetHeight;
    var left = Math.max(12, Math.min(r.left, window.innerWidth - w - 12));
    var top = r.bottom + 8;
    if (top + h > window.innerHeight - 12) top = Math.max(12, r.top - h - 8);
    pop.style.width = w + 'px';
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
    var nut = pop.querySelector('[data-xn="mo"]') || pop.querySelector('[data-xn]');
    if (nut) nut.focus({ preventScroll: true });
  }
  function dongXem() { if (pop) pop.hidden = true; }

  // Doi lop.js dung xong luoi tro choi (decorateSetup gan data-ok) roi moi dung thanh loc
  function cho(n) {
    var g = document.querySelector('.lop-games');
    if (g && g.getAttribute('data-ok')) { dung(); return; }
    if (n > 80) { dung(); return; }
    setTimeout(function () { cho(n + 1); }, 50);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function () { cho(0); });
  else cho(0);
  window.LopThuVien = { ap: function () { if (document.getElementById('lopTv')) { S.the = the(); S.the.forEach(ganXem); ap(); } } };
})();
