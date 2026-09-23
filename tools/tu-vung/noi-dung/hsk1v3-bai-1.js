// Noi dung TU MOI HSK1 3.0 bai 1 (chu de: chao hoi, cam on, tam biet).
module.exports = {
  '你好': {
    collo: [],
    patterns: [['你 + 好', 'Lời chào cơ bản nhất, dùng được với hầu hết mọi người'],
               ['你好 —— 你好', 'Người nghe đáp lại cũng bằng 你好']]
  },
  '大家': {
    collo: [['大家好', 'chào mọi người'], ['谢谢大家', 'cảm ơn mọi người']],
    patterns: [['大家 + 好', 'Chào cả nhóm: 大家好！'],
               ['大 + 家', 'Cả (大) nhà (家) — nghĩa mở rộng thành mọi người']]
  },
  '好': {
    collo: [['你好', 'chào bạn'], ['大家好', 'chào mọi người'], ['您好', 'chào ngài'],
            ['老师好', 'chào thầy cô'], ['你们好', 'chào các bạn']],
    patterns: [['đại từ / cách xưng hô + 好', 'Đổi phần trước là đổi người được chào'],
               ['好 nghĩa gốc là tốt, khoẻ; 你好 nghĩa đen là "bạn khoẻ chứ"']]
  },
  '学生': {
    collo: [['学生们', 'các học sinh'], ['好学生', 'học sinh giỏi'],
            ['我是学生', 'tôi là học sinh']],
    patterns: [['学生 + 们', 'Thêm 们 thành số nhiều'],
               ['学 + 生', 'Người (生) đi học (学)']]
  },
  '们': {
    collo: [['学生们', 'các học sinh'], ['老师们', 'các thầy cô'],
            ['同学们', 'các bạn học'], ['你们', 'các bạn']],
    patterns: [['danh từ / đại từ chỉ NGƯỜI + 们', 'Đuôi số nhiều: 学生们 · 同学们'],
               ['们 chỉ gắn với danh từ chỉ NGƯỜI, không gắn với đồ vật']]
  },
  '老师': {
    collo: [['王老师', 'thầy Vương'], ['老师好', 'chào thầy cô'],
            ['老师们', 'các thầy cô'], ['谢谢老师', 'cảm ơn thầy']],
    patterns: [['họ + 老师', 'Cách gọi thầy cô: 王老师'],
               ['老 + 师', '老 ở đây không mang nghĩa già, chỉ là tiếng đệm kính trọng']]
  },
  '您': {
    collo: [['您好', 'chào ngài'], ['谢谢您', 'cảm ơn ngài']],
    patterns: [['您 + 好', 'Chào người lớn tuổi, thầy cô, khách'],
               ['您 = 你 + 心 — thêm bộ Tâm (心) ở dưới cho lễ phép']]
  },
  '你们': {
    collo: [['你们好', 'chào các bạn'], ['谢谢你们', 'cảm ơn các bạn']],
    patterns: [['你 + 们', 'Số nhiều của 你'],
               ['Không có dạng 您们 — chào nhiều người lớn vẫn nói 你们好 hoặc 大家好']]
  },
  '谢谢': {
    collo: [['谢谢你', 'cảm ơn bạn'], ['谢谢您', 'cảm ơn ngài'],
            ['谢谢大家', 'cảm ơn mọi người'], ['谢谢老师', 'cảm ơn thầy']],
    patterns: [['谢谢 + người', 'Cảm ơn ai — người nhận đứng ngay sau'],
               ['谢谢 —— 不客气', 'Cặp đối đáp: cảm ơn — không có gì']]
  },
  '不客气': {
    collo: [],
    patterns: [['—— 不客气', 'Câu đáp khi người khác nói 谢谢'],
               ['不客气 nghĩa đen: đừng (不) khách sáo (客气)']]
  },
  '同学': {
    collo: [['同学们', 'các bạn học'], ['同学们好', 'chào các bạn'],
            ['好同学', 'bạn học tốt'], ['我同学', 'bạn cùng lớp của tôi']],
    patterns: [['同学 + 们 + 好', 'Thầy cô vào lớp hay chào 同学们好'],
               ['同 + 学', 'Cùng (同) học (学) một lớp']]
  },
  '再见': {
    collo: [],
    patterns: [['再 + 见', 'Nghĩa đen: gặp (见) lại (再)'],
               ['再见 —— 再见', 'Chia tay thì cả hai bên đều nói 再见']]
  },
  '王老师': {
    collo: [['王老师好', 'chào thầy Vương'], ['谢谢王老师', 'cảm ơn thầy Vương']],
    patterns: [['王 + 老师', 'Họ đứng trước chức danh — ngược với tiếng Việt'],
               ['王 là một trong những họ phổ biến nhất ở Trung Quốc']]
  }
};
