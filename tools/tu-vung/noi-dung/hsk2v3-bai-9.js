// Noi dung TU MOI HSK2 3.0 bai 9 (chu de: ta nguoi, khoang cach, quan ca phe).
module.exports = {
  '坏': {
    collo: [['坏了', 'hỏng rồi'], ['没坏', 'chưa hỏng'],
            ['坏的手表', 'cái đồng hồ hỏng'], ['坏的东西', 'đồ bị hỏng']],
    patterns: [['đồ vật + 坏了', 'Cái gì đó hỏng rồi: 我的手机坏了'],
               ['坏 ↔ 好', 'Hỏng ↔ tốt']]
  },
  '旁边': {
    collo: [['我旁边', 'bên cạnh tôi'], ['学校旁边', 'bên cạnh trường'],
            ['在旁边', 'ở bên cạnh'], ['旁边有', 'bên cạnh có']],
    patterns: [['danh từ + 旁边', 'Bên cạnh cái gì: 学校旁边'],
               ['旁边 (ngay cạnh) gần hơn 前面 · 后面 · 左边 · 右边']]
  },
  '男孩儿': {
    collo: [['一个男孩儿', 'một cậu bé'], ['那个男孩儿', 'cậu bé kia'],
            ['男孩儿的名字', 'tên cậu bé'], ['高个子的男孩儿', 'cậu bé cao']],
    patterns: [['số + 个 + 男孩儿', 'Lượng từ của 男孩儿 là 个'],
               ['男孩儿 (bé trai) ↔ 女孩儿 (bé gái)']]
  },
  '这样': {
    collo: [['这样做', 'làm thế này'], ['这样说', 'nói thế này'],
            ['这样的人', 'người như thế này'], ['就这样', 'cứ thế đi']],
    patterns: [['这样 + động từ', 'Làm như thế này: 你这样做吧'],
               ['这样 (như thế này, gần) ↔ 那样 (như thế kia, xa)']]
  },
  '个子': {
    collo: [['高个子', 'người cao'], ['个子高的人', 'người dáng cao'],
            ['他的个子', 'vóc dáng anh ấy'], ['问个子', 'hỏi về chiều cao']],
    patterns: [['ai + 个子 + 很高', 'Ai đó cao: 他个子很高'],
               ['个子 nói về chiều cao của NGƯỜI, không nói về vật']]
  },
  '那么': {
    collo: [['那么高', 'cao thế kia'], ['那么远', 'xa thế kia'],
            ['那么多', 'nhiều thế kia'], ['那么贵', 'đắt thế kia']],
    patterns: [['那么 + tính từ', 'Đến mức đó: 他个子那么高！'],
               ['这么 (cái đang thấy) ↔ 那么 (cái đã nhắc tới)']]
  },
  '高': {
    collo: [['很高', 'rất cao'], ['高个子', 'người cao'],
            ['比我高', 'cao hơn tôi'], ['不高', 'không cao']],
    patterns: [['A + 比 + B + 高', 'A cao hơn B: 他比我高'],
               ['高 ↔ 矮', 'Cao ↔ thấp']]
  },
  '门口': {
    collo: [['学校门口', 'cổng trường'], ['在门口等', 'đợi ở cổng'],
            ['门口有', 'ở cổng có'], ['酒店门口', 'cổng khách sạn']],
    patterns: [['danh từ + 门口', 'Cổng của nơi nào: 学校门口'],
               ['门 + 口', 'Chỗ ra vào (口) của cửa (门)']]
  },
  '咖啡': {
    collo: [['喝咖啡', 'uống cà phê'], ['一杯咖啡', 'một cốc cà phê'],
            ['买咖啡', 'mua cà phê'], ['咖啡店', 'quán cà phê']],
    patterns: [['một + 杯 + 咖啡', 'Lượng từ 杯 cho đồ uống'],
               ['咖啡 là từ phiên âm từ tiếng nước ngoài — "coffee"']]
  },
  '离': {
    collo: [['离这里很远', 'cách đây rất xa'], ['离学校很近', 'gần trường'],
            ['离机场不远', 'không xa sân bay'], ['离家多远', 'cách nhà bao xa']],
    patterns: [['A + 离 + B + 远 / 近', 'A cách B xa hay gần: 学校离我家很近'],
               ['离 chỉ KHOẢNG CÁCH; 从 chỉ ĐIỂM XUẤT PHÁT']]
  },
  '近': {
    collo: [['很近', 'rất gần'], ['离学校很近', 'gần trường'],
            ['不近', 'không gần'], ['近一点儿', 'gần hơn chút']],
    patterns: [['离 + nơi chốn + 很近', 'Cách nơi nào đó rất gần'],
               ['近 ↔ 远', 'Gần ↔ xa']]
  },
  '走路': {
    collo: [['走路去', 'đi bộ đến'], ['走路十分钟', 'đi bộ mười phút'],
            ['喜欢走路', 'thích đi bộ'], ['走路回家', 'đi bộ về nhà']],
    patterns: [['走路 + 去 / 回', 'Đi bộ đến, đi bộ về'],
               ['走 + 路', 'Đi (走) trên đường (路) — tức là đi bộ']]
  },
  '周': {
    collo: [['这周', 'tuần này'], ['下周', 'tuần sau'],
            ['上周', 'tuần trước'], ['一周', 'một tuần']],
    patterns: [['这 / 下 / 上 + 周', 'Tuần này, tuần sau, tuần trước'],
               ['周 = 星期 — 周 ngắn gọn hơn, hay dùng khi viết']]
  }
};
