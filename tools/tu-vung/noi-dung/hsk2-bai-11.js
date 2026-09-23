// Noi dung TU MOI HSK2 (bo cu) bai 11 (chu de: so sanh, gia dinh, gioi thieu).
module.exports = {
  '唱歌': {
    collo: [['会唱歌', 'biết hát'], ['喜欢唱歌', 'thích hát'],
            ['一起唱歌', 'cùng hát'], ['唱歌跳舞', 'hát hò nhảy múa']],
    patterns: [['会 + 唱歌', 'Biết hát — 会 là kỹ năng học được'],
               ['唱歌 là từ ly hợp, giống 跳舞 · 上班']]
  },
  '男': {
    collo: [['男孩子', 'con trai'], ['男的', 'người nam'],
            ['男服务员', 'nhân viên nam'], ['男同学', 'bạn nam']],
    patterns: [['男 + danh từ', 'Người nam: 男孩子 · 男同学'],
               ['男 ↔ 女 — nam và nữ']]
  },
  '女': {
    collo: [['女孩子', 'con gái'], ['女的', 'người nữ'],
            ['女老师', 'cô giáo'], ['女同学', 'bạn nữ']],
    patterns: [['女 + danh từ', 'Người nữ: 女孩子 · 女老师'],
               ['女 là chữ tượng hình — vẽ người phụ nữ ngồi']]
  },
  '孩子': {
    collo: [['两个孩子', 'hai đứa con'], ['男孩子', 'con trai'],
            ['孩子们', 'các cháu'], ['孩子的房间', 'phòng của con']],
    patterns: [['số + 个 + 孩子', 'Lượng từ của 孩子 là 个'],
               ['孩子 (con, trẻ con) — 儿子 · 女儿 đều là 孩子']]
  },
  '右边': {
    collo: [['在右边', 'ở bên phải'], ['右边的门', 'cửa bên phải'],
            ['学校右边', 'bên phải trường'], ['我的右边', 'bên phải tôi']],
    patterns: [['danh từ + 右边', 'Bên phải cái gì: 学校右边'],
               ['右边 · 旁边 · 外面 — đều là từ chỉ vị trí']]
  },
  '比': {
    collo: [['比我高', 'cao hơn tôi'], ['比他快', 'nhanh hơn anh ấy'],
            ['比昨天冷', 'lạnh hơn hôm qua'], ['不比', 'không hơn']],
    patterns: [['A + 比 + B + tính từ', 'A hơn B: 我哥哥比我高'],
               ['✗ 我比他很高 → ✓ 我比他高 — sau 比 KHÔNG dùng 很']]
  },
  '便宜': {
    collo: [['很便宜', 'rất rẻ'], ['不便宜', 'không rẻ'],
            ['便宜一点儿', 'rẻ một chút'], ['比这个便宜', 'rẻ hơn cái này']],
    patterns: [['A + 比 + B + 便宜', 'A rẻ hơn B'],
               ['便宜 ↔ 贵 — rẻ và đắt']]
  },
  '说话': {
    collo: [['别说话', 'đừng nói chuyện'], ['和他说话', 'nói chuyện với anh ấy'],
            ['说话很快', 'nói rất nhanh'], ['爱说话', 'thích nói chuyện']],
    patterns: [['和 + người + 说话', 'Nói chuyện với ai'],
               ['说话 là từ ly hợp: 说了很长时间话']]
  },
  '可能': {
    collo: [['可能来', 'có thể đến'], ['可能不去', 'có thể không đi'],
            ['很可能', 'rất có thể'], ['可能在家', 'có thể ở nhà']],
    patterns: [['可能 + động từ', 'Có lẽ sẽ: 他可能不来了'],
               ['可能 (đoán) ≠ 可以 (được phép) — hai từ khác hẳn nhau']]
  },
  '去年': {
    collo: [['去年冬天', 'mùa đông năm ngoái'], ['去年来的', 'đến từ năm ngoái'],
            ['比去年', 'so với năm ngoái'], ['去年九月', 'tháng chín năm ngoái']],
    patterns: [['去年 + việc gì', 'Năm ngoái làm gì: 去年我去中国了'],
               ['去年 · 今年 · 明年 — ba mốc năm đi liền một bộ']]
  },
  '姓': {
    collo: [['我姓王', 'tôi họ Vương'], ['你姓什么', 'bạn họ gì'],
            ['姓什么', 'họ gì'], ['他姓李', 'anh ấy họ Lý']],
    patterns: [['Sub + 姓 + họ', '姓 là ĐỘNG TỪ: 我姓王 (không nói 我是姓王)'],
               ['姓 có bộ 女 — thời xưa họ truyền theo mẹ']]
  }
};
