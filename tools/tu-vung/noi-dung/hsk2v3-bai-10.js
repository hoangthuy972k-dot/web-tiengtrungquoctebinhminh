// Noi dung TU MOI HSK2 3.0 bai 10 (chu de: khai giang, thi cu, do dung hoc tap).
module.exports = {
  '开学': {
    collo: [['快要开学了', 'sắp khai giảng rồi'], ['开学的时候', 'lúc khai giảng'],
            ['九月开学', 'tháng chín khai giảng'], ['开学了', 'khai giảng rồi']],
    patterns: [['快要 + 开学 + 了', 'Sắp khai giảng rồi'],
               ['开 + 学', 'Mở (开) việc học (学) — vào năm học mới']]
  },
  '门': {
    collo: [['打开门', 'mở cửa'], ['门口', 'cổng, cửa ra vào'],
            ['门前', 'trước cửa'], ['教室的门', 'cửa phòng học']],
    patterns: [['打开 + 门', 'Mở cửa'],
               ['门 là chữ tượng hình — hai nét dọc là hai cánh cửa']]
  },
  '后面': {
    collo: [['学校后面', 'sau trường'], ['在后面', 'ở phía sau'],
            ['我后面', 'phía sau tôi'], ['后面有', 'phía sau có']],
    patterns: [['danh từ + 后面', 'Phía sau cái gì: 学校后面'],
               ['后面 ↔ 前面', 'Sau ↔ trước']]
  },
  '笔': {
    collo: [['买笔', 'mua bút'], ['画笔', 'cọ vẽ'],
            ['用笔写', 'viết bằng bút'], ['我的笔', 'cây bút của tôi']],
    patterns: [['用 + 笔 + 写', 'Viết bằng bút'],
               ['笔 nằm trong 画笔 — cùng một chữ 笔']]
  },
  '帮': {
    collo: [['帮我', 'giúp tôi'], ['帮忙', 'giúp đỡ'],
            ['帮你做', 'giúp bạn làm'], ['帮他考试', 'giúp anh ấy ôn thi']],
    patterns: [['帮 + người + động từ', 'Giúp ai làm gì: 帮我看一下'],
               ['帮 (giúp, có tân ngữ) và 帮忙 (giúp đỡ, từ ly hợp)']]
  },
  '考试': {
    collo: [['准备考试', 'ôn thi'], ['考试的时候', 'lúc thi'],
            ['快要考试了', 'sắp thi rồi'], ['考完试', 'thi xong']],
    patterns: [['快要 + 考试 + 了', 'Sắp thi rồi'],
               ['考 + 试', 'Kiểm (考) tra (试) — 考试 là từ ly hợp: 考了一次试']]
  },
  '词': {
    collo: [['新词', 'từ mới'], ['这个词', 'từ này'],
            ['词的意思', 'nghĩa của từ'], ['很多词', 'rất nhiều từ']],
    patterns: [['……的意思', 'Nghĩa của từ nào: 这个词的意思'],
               ['词 (từ) khác 字 (chữ) — một 词 có thể gồm nhiều 字']]
  },
  '本子': {
    collo: [['一个本子', 'một quyển vở'], ['买本子', 'mua vở'],
            ['在本子上写', 'viết vào vở'], ['我的本子', 'quyển vở của tôi']],
    patterns: [['在 + 本子 + 上 + 写', 'Viết vào vở'],
               ['本 + 子', '子 là đuôi từ đọc nhẹ, giống 桌子 · 椅子']]
  },
  '错': {
    collo: [['写错了', 'viết sai rồi'], ['不错', 'khá tốt'],
            ['说错', 'nói sai'], ['做错题', 'làm sai bài']],
    patterns: [['động từ + 错 + 了', 'Làm sai việc gì: 我写错了'],
               ['错 (sai) nhưng 不错 lại là "khá tốt" — chú ý không nhầm']]
  },
  '题': {
    collo: [['做题', 'làm bài tập'], ['一个题', 'một câu hỏi'],
            ['这个题', 'câu hỏi này'], ['做错题', 'làm sai bài']],
    patterns: [['做 + 题', 'Làm bài tập, giải bài'],
               ['题 (câu hỏi, bài tập) và 问题 (vấn đề, câu hỏi)']]
  },
  '还是': {
    collo: [['考试还是休息', 'thi hay nghỉ'], ['还是这个好', 'vẫn là cái này tốt hơn'],
            ['你还是他', 'bạn hay anh ấy'], ['还是去吧', 'thôi thì cứ đi']],
    patterns: [['A 还是 B？', 'Câu hỏi lựa chọn: 你考试还是休息？'],
               ['还是 + động từ', 'Thôi thì … — nêu lựa chọn cuối cùng: 还是去吧']]
  },
  '考': {
    collo: [['考试', 'thi'], ['考得很好', 'thi rất tốt'],
            ['考大学', 'thi đại học'], ['考了一次', 'đã thi một lần']],
    patterns: [['考 + 大学', 'Thi đại học'],
               ['考 + 得 + tính từ', 'Thi thế nào: 考得很好']]
  },
  '快要': {
    collo: [['快要开学了', 'sắp khai giảng rồi'], ['快要考试了', 'sắp thi rồi'],
            ['快要下雨了', 'sắp mưa rồi'], ['快要到了', 'sắp đến rồi']],
    patterns: [['快要 + động từ + 了', 'Sắp … rồi — HAI vế phải đủ'],
               ['✗ 快要考试 → ✓ 快要考试了']]
  },
  '笑': {
    collo: [['笑了', 'cười rồi'], ['高兴地笑', 'vui vẻ cười'],
            ['别笑', 'đừng cười'], ['笑着说', 'vừa cười vừa nói']],
    patterns: [['tính từ + 地 + 笑', 'Cười một cách nào đó: 高兴地笑'],
               ['笑 ↔ 哭', 'Cười ↔ khóc']]
  }
};
