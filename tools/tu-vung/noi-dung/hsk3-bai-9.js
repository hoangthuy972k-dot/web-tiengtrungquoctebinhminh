// Noi dung TU MOI HSK3 bai 9 (chu de: lop hoc, gioi thieu, dong vien nhau).
module.exports = {
  '中文': {
    collo: [['说中文', 'nói tiếng Trung'], ['学中文', 'học tiếng Trung'],
            ['中文老师', 'giáo viên tiếng Trung'], ['中文很好', 'tiếng Trung rất tốt'],
            ['中文名字', 'tên tiếng Trung']],
    patterns: [['中文 ≈ 汉语', '中文 nhấn chữ viết và ngôn ngữ nói chung; 汉语 nhấn tiếng nói'],
               ['中 + 文', 'Văn tự (文) Trung Hoa (中)']]
  },
  '班': {
    collo: [['我们班', 'lớp chúng tôi'], ['一班', 'lớp một'],
            ['同班同学', 'bạn cùng lớp'], ['班里', 'trong lớp'],
            ['班长', 'lớp trưởng']],
    patterns: [['班 (lớp cụ thể) ≠ 年级 (khối, bài 4)'],
               ['同班 + 同学', 'Bạn cùng lớp — 同 nghĩa là "cùng"']]
  },
  '一样': {
    collo: [['跟他一样', 'giống anh ấy'], ['不一样', 'không giống nhau'],
            ['一样好', 'tốt như nhau'], ['跟以前一样', 'như trước đây'],
            ['长得一样', 'trông giống nhau']],
    patterns: [['A 跟 B 一样', 'A giống B — bắt buộc có 跟'],
               ['跟 + N + 一样 + Adj', 'Giống như … và cùng mức độ ấy']]
  },
  '最后': {
    collo: [['最后一块', 'miếng cuối cùng'], ['最后一次', 'lần cuối cùng'],
            ['到最后', 'đến cuối cùng'], ['最后一个', 'cái cuối cùng'],
            ['最后才知道', 'cuối cùng mới biết']],
    patterns: [['最后 + 一 + lượng từ + N', 'Cái cuối cùng'],
               ['最后 ↔ 最先 / 首先', 'Cuối cùng ↔ đầu tiên']]
  },
  '放心': {
    collo: [['你放心', 'bạn yên tâm'], ['放心吧', 'cứ yên tâm'],
            ['不放心', 'không yên tâm'], ['让人放心', 'khiến người ta yên tâm'],
            ['放心地走', 'yên tâm mà đi']],
    patterns: [['放 + 心', 'Đặt (放) lòng (心) xuống — ghép nghĩa dễ nhớ'],
               ['放心 ↔ 担心', 'Yên tâm ↔ lo lắng']]
  },
  '一定': {
    collo: [['一定会', 'nhất định sẽ'], ['一定能', 'chắc chắn có thể'],
            ['一定不会', 'chắc chắn không'], ['一定要', 'nhất định phải'],
            ['不一定', 'chưa chắc']],
    patterns: [['一定 + 会 / 要 + V', 'Nhất định sẽ / phải làm gì'],
               ['不一定', 'Chưa chắc — phủ định đứng TRƯỚC 一定']]
  },
  '担心': {
    collo: [['不用担心', 'không cần lo'], ['别担心', 'đừng lo'],
            ['担心你', 'lo cho bạn'], ['很担心', 'rất lo lắng'],
            ['担心考试', 'lo chuyện thi cử']],
    patterns: [['担心 + ai / việc gì', 'Lo cho ai, lo việc gì'],
               ['不用 + 担心', 'Không cần lo — 不用 là từ bài 5']]
  },
  '比较': {
    collo: [['比较难', 'khá khó'], ['比较喜欢', 'khá thích'],
            ['比较了解', 'khá hiểu rõ'], ['比较安静', 'khá yên tĩnh'],
            ['比较方便', 'khá tiện']],
    patterns: [['比较 + Adj', 'Khá, tương đối … — nhẹ hơn 很'],
               ['比较 (khá) ≠ 比 (so sánh với ai): 比较高 / 比他高']]
  },
  '了解': {
    collo: [['了解情况', 'nắm tình hình'], ['比较了解', 'khá hiểu'],
            ['不了解', 'không hiểu rõ'], ['了解他', 'hiểu anh ấy'],
            ['互相了解', 'hiểu nhau']],
    patterns: [['对 + N + 比较了解', 'Khá hiểu rõ về cái gì'],
               ['了解 (hiểu rõ về người, việc) ≠ 知道 (biết có việc đó)']]
  },
  '先': {
    collo: [['先休息', 'nghỉ trước đã'], ['先……再……', 'trước… rồi…'],
            ['先看看', 'xem thử trước'], ['先吃饭', 'ăn cơm trước'],
            ['你先走', 'bạn đi trước']],
    patterns: [['先 + V1，再 / 然后 + V2', 'Làm việc này trước rồi làm việc kia'],
               ['先 ↔ 后', 'Trước ↔ sau']]
  },
  '中间': {
    collo: [['在中间', 'ở giữa'], ['从中间', 'từ giữa'],
            ['中间这个', 'cái ở giữa'], ['坐在中间', 'ngồi ở giữa'],
            ['两个中间', 'giữa hai cái']],
    patterns: [['在 + … + 中间', 'Ở giữa cái gì'],
               ['中间 (ở giữa) ≠ 里边 (bên trong)']]
  },
  '参加': {
    collo: [['参加比赛', 'tham gia thi đấu'], ['参加考试', 'dự thi'],
            ['不能参加', 'không tham gia được'], ['参加会议', 'dự họp'],
            ['一起参加', 'cùng tham gia']],
    patterns: [['参加 + hoạt động', 'Tham gia hoạt động gì'],
               ['参加 (dự vào) ≠ 加入 — HSK 3 chỉ cần 参加']]
  },
  '影响': {
    collo: [['有影响', 'có ảnh hưởng'], ['影响很大', 'ảnh hưởng rất lớn'],
            ['没有影响', 'không ảnh hưởng'], ['对……有影响', 'có ảnh hưởng đến…'],
            ['影响学习', 'ảnh hưởng việc học']],
    patterns: [['对 + N + 有影响 (danh từ)', 'Có ảnh hưởng đến cái gì'],
               ['影响 + N (động từ)', 'Ảnh hưởng đến cái gì: 影响学习']]
  }
};
