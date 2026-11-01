// Noi dung TU MOI HSK1 bai 13 (chu de: goi dien, sinh hoat, so thich).
module.exports = {
  '喂': {
    collo: [['喂，你好', 'a lô, xin chào'], ['喂，是王小姐吗', 'a lô, cô Vương phải không'],
            ['喂，老师', 'a lô, thầy ạ']],
    patterns: [['喂 + lời chào', 'Câu mở đầu khi nghe điện thoại: 喂，你好！'],
               ['喂 chỉ dùng trong điện thoại, không dùng khi gặp mặt']]
  },
  '也': {
    collo: [['也是', 'cũng là'], ['也去', 'cũng đi'],
            ['也很好', 'cũng rất tốt'], ['也喜欢', 'cũng thích']],
    patterns: [['Sub + 也 + động từ / tính từ', '也 đứng TRƯỚC động từ, SAU chủ ngữ'],
               ['✗ 也我去 → ✓ 我也去']]
  },
  '学习': {
    collo: [['学习汉语', 'học tiếng Trung'], ['在学校学习', 'học ở trường'],
            ['学习汉字', 'học chữ Hán'], ['喜欢学习', 'thích học']],
    patterns: [['学习 + môn học', 'Học cái gì: 学习汉语'],
               ['学 + 习', 'Học (学) rồi ôn đi ôn lại (习)']]
  },
  '上午': {
    collo: [['今天上午', 'sáng nay'], ['明天上午', 'sáng mai'],
            ['上午学习', 'sáng học bài'], ['上午十点', 'mười giờ sáng']],
    patterns: [['ngày + 上午', 'Ghép với 今天, 明天, 昨天'],
               ['上午 · 中午 · 下午 — ba buổi trong ngày']]
  },
  '睡觉': {
    collo: [['去睡觉', 'đi ngủ'], ['睡觉前', 'trước khi ngủ'],
            ['想睡觉', 'muốn ngủ'], ['几点睡觉', 'mấy giờ ngủ']],
    patterns: [['几点 + 睡觉', 'Mấy giờ đi ngủ'],
               ['睡 + 觉', '睡觉 gồm hai chữ, nghĩa là ngủ một giấc']]
  },
  '电视': {
    collo: [['看电视', 'xem tivi'], ['一个电视', 'một cái tivi'],
            ['电视里', 'trong tivi'], ['喜欢看电视', 'thích xem tivi']],
    patterns: [['看 + 电视', 'Xem tivi — dùng 看'],
               ['电视 · 电影 · 电脑 — ba từ đều bắt đầu bằng 电']]
  },
  '喜欢': {
    collo: [['喜欢学习', 'thích học'], ['喜欢看电视', 'thích xem tivi'],
            ['很喜欢', 'rất thích'], ['不喜欢', 'không thích']],
    patterns: [['喜欢 + danh từ / động từ', 'Thích cái gì, thích làm gì'],
               ['喜欢 (thích) nhẹ hơn 爱 (yêu, thành thói quen — bài 12)']]
  },
  '给': {
    collo: [['给我打电话', 'gọi điện cho tôi'], ['给妈妈打电话', 'gọi điện cho mẹ'],
            ['给你', 'cho bạn'], ['给老师', 'cho thầy']],
    patterns: [['给 + người + động từ', 'Làm gì cho ai — 给 đứng TRƯỚC động từ'],
               ['✗ 打电话给我 → ✓ 给我打电话']]
  },
  '打电话': {
    collo: [['给我打电话', 'gọi điện cho tôi'], ['打电话回家', 'gọi điện về nhà'],
            ['想打电话', 'muốn gọi điện'], ['几点打电话', 'mấy giờ gọi điện']],
    patterns: [['给 + người + 打电话', 'Gọi điện cho ai'],
               ['打 + 电话', 'Gọi điện dùng động từ 打, không dùng 做']]
  },
  '吧': {
    collo: [['我们去吧', 'chúng ta đi nhé'], ['你说吧', 'bạn nói đi'],
            ['好吧', 'thôi được'], ['回家吧', 'về nhà thôi']],
    patterns: [['câu + 吧', 'Làm dịu giọng, thành lời đề nghị: 我们去吧'],
               ['吧 (đề nghị nhẹ nhàng) ≠ 吗 (câu hỏi)']]
  }
};
