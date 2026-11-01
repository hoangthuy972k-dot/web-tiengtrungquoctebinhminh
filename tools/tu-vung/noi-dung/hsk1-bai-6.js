// Noi dung TU MOI HSK1 bai 6 (chu de: nau an, viet chu Han, kha nang).
module.exports = {
  '会': {
    collo: [['会说汉语', 'biết nói tiếng Trung'], ['会做菜', 'biết nấu ăn'],
            ['会写汉字', 'biết viết chữ Hán'], ['不会', 'không biết']],
    patterns: [['Sub + 会 + động từ', 'Biết làm gì nhờ học mà có: 我会说汉语'],
               ['Phủ định là 不会, KHÔNG nói 没会']]
  },
  '说': {
    collo: [['说汉语', 'nói tiếng Trung'], ['会说', 'biết nói'],
            ['说什么', 'nói gì'], ['说的名字', 'cái tên đã nói']],
    patterns: [['说 + ngôn ngữ', 'Nói thứ tiếng nào: 说汉语'],
               ['说 (nói ra lời) — muốn nói với ai thì cần thêm giới từ, học ở HSK 2']]
  },
  '妈妈': {
    collo: [['我妈妈', 'mẹ tôi'], ['他妈妈', 'mẹ anh ấy'],
            ['妈妈做的菜', 'món mẹ nấu'], ['妈妈会做菜', 'mẹ biết nấu ăn']],
    patterns: [['người + 妈妈', 'Mẹ của ai — nói 我妈妈, ít khi nói 我的妈妈'],
               ['妈 = 女 + 马', 'Bộ 女 chỉ nghĩa, chữ 马 (mǎ) chỉ âm']]
  },
  '菜': {
    collo: [['做菜', 'nấu ăn'], ['中国菜', 'món Trung Quốc'],
            ['好吃的菜', 'món ngon'], ['妈妈做的菜', 'món mẹ nấu']],
    patterns: [['做 + 菜', 'Nấu ăn — dùng 做, không dùng 写 hay 读'],
               ['菜 vừa là rau, vừa là món ăn nói chung']]
  },
  '很': {
    collo: [['很好', 'rất tốt'], ['很好吃', 'rất ngon'], ['很大', 'rất lớn'], ['很多', 'rất nhiều']],
    patterns: [['Sub + 很 + tính từ', 'Câu vị ngữ tính từ: 菜很好吃'],
               ['✗ 菜好吃 → ✓ 菜很好吃', 'Tính từ làm vị ngữ gần như luôn cần 很']]
  },
  '好吃': {
    collo: [['很好吃', 'rất ngon'], ['好吃的菜', 'món ngon'], ['不好吃', 'không ngon']],
    patterns: [['很 + 好吃', 'Rất ngon — nói về đồ ăn'],
               ['好 + 吃', 'Ăn (吃) thấy tốt (好) — ghép 好 với động từ là ra tính từ']]
  },
  '做': {
    collo: [['做菜', 'nấu ăn'], ['做什么', 'làm gì'], ['会做', 'biết làm'], ['妈妈做的', 'do mẹ làm']],
    patterns: [['做 + danh từ', 'Làm việc gì: 做菜'],
               ['做 (làm ra một thứ) ≠ 写 (viết) ≠ 读 (đọc)']]
  },
  '写': {
    collo: [['写汉字', 'viết chữ Hán'], ['会写', 'biết viết'],
            ['写名字', 'viết tên'], ['不会写', 'không biết viết']],
    patterns: [['写 + 汉字 / 名字', 'Viết chữ, viết tên'],
               ['写 là viết ra chữ; 说 là nói ra lời']]
  },
  '汉字': {
    collo: [['写汉字', 'viết chữ Hán'], ['会写汉字', 'biết viết chữ Hán'],
            ['中国汉字', 'chữ Hán Trung Quốc'], ['读汉字', 'đọc chữ Hán']],
    patterns: [['写 / 读 + 汉字', 'Viết, đọc chữ Hán'],
               ['汉 + 字', 'Chữ (字) của người Hán (汉)']]
  },
  '字': {
    collo: [['汉字', 'chữ Hán'], ['写字', 'viết chữ'], ['名字', 'tên'], ['读字', 'đọc chữ']],
    patterns: [['写 + 字', 'Viết chữ — 字 là từng con chữ'],
               ['字 nằm trong nhiều từ đã học: 汉字 · 名字']]
  },
  '怎么': {
    collo: [['怎么说', 'nói thế nào'], ['怎么写', 'viết thế nào'], ['怎么读', 'đọc thế nào']],
    patterns: [['怎么 + động từ', 'Hỏi cách làm: 这个字怎么读？'],
               ['Câu đã có 怎么 thì KHÔNG thêm 吗']]
  },
  '读': {
    collo: [['读汉字', 'đọc chữ Hán'], ['怎么读', 'đọc thế nào'],
            ['会读', 'biết đọc'], ['读名字', 'đọc tên']],
    patterns: [['读 + 汉字 / 字', 'Đọc chữ — đọc thành tiếng'],
               ['读 là đọc to thành tiếng cho người khác nghe']]
  }
};
