// Noi dung TU MOI HSK2 (bo cu) bai 7 (chu de: duong di, khoang cach, phuong tien).
module.exports = {
  '教室': {
    collo: [['在教室', 'ở trong lớp'], ['去教室', 'đến lớp học'],
            ['教室里', 'trong phòng học'], ['新教室', 'phòng học mới']],
    patterns: [['在 + 教室 + 里', 'Ở trong phòng học'],
               ['教 + 室', 'Căn phòng (室) để dạy (教)']]
  },
  '机场': {
    collo: [['去机场', 'ra sân bay'], ['在机场', 'ở sân bay'],
            ['到机场', 'đến sân bay'], ['机场很远', 'sân bay rất xa']],
    patterns: [['去 / 到 + 机场', 'Ra sân bay, đến sân bay'],
               ['机 + 场', 'Bãi (场) cho máy bay (飞机)']]
  },
  '路': {
    collo: [['走路', 'đi bộ'], ['这条路', 'con đường này'],
            ['路上', 'trên đường'], ['路很远', 'đường rất xa']],
    patterns: [['走 + 路', 'Đi bộ — 走路 là từ ly hợp'],
               ['một + 条 + 路', 'Lượng từ của 路 là 条']]
  },
  '离': {
    collo: [['离这儿', 'cách đây'], ['离学校', 'cách trường'],
            ['离家很远', 'cách nhà rất xa'], ['离机场很远', 'cách sân bay rất xa']],
    patterns: [['A + 离 + B + 远 / 近', 'A cách B xa hay gần'],
               ['离 nói KHOẢNG CÁCH; 从 nói ĐIỂM XUẤT PHÁT']]
  },
  '公司': {
    collo: [['去公司', 'đến công ty'], ['在公司工作', 'làm việc ở công ty'],
            ['公司很远', 'công ty rất xa'], ['到公司了', 'đã tới công ty']],
    patterns: [['在 + 公司 + 工作', 'Làm việc ở công ty — nơi chốn trước động từ'],
               ['公司 · 学校 · 医院 — ba nơi làm việc quen thuộc']]
  },
  '远': {
    collo: [['很远', 'rất xa'], ['不远', 'không xa'],
            ['太远了', 'xa quá'], ['离这儿远', 'cách đây xa']],
    patterns: [['A + 离 + B + 很远', 'A cách B rất xa'],
               ['太……了 phải đủ hai vế: 太远了']]
  },
  '公共汽车': {
    collo: [['坐公共汽车', 'đi xe buýt'], ['不坐公共汽车', 'không đi xe buýt'],
            ['公共汽车很慢', 'xe buýt rất chậm'], ['坐车去', 'đi xe đến']],
    patterns: [['坐 + 公共汽车', 'Ngồi xe thì 坐; xe đạp thì 骑'],
               ['公共 + 汽车', 'Xe hơi (汽车) dùng chung (公共)']]
  },
  '小时': {
    collo: [['一个小时', 'một tiếng'], ['两个小时', 'hai tiếng'],
            ['半个小时', 'nửa tiếng'], ['几个小时', 'mấy tiếng']],
    patterns: [['số + 个 + 小时', 'Đếm tiếng đồng hồ — luôn có 个'],
               ['小时 là ĐỘ DÀI; 点 là MỐC giờ: 两点 ≠ 两个小时']]
  },
  '慢': {
    collo: [['很慢', 'rất chậm'], ['太慢了', 'chậm quá'],
            ['慢慢来', 'từ từ thôi'], ['慢一点儿', 'chậm một chút']],
    patterns: [['很 / 太 + 慢', 'Rất chậm, chậm quá'],
               ['慢 ↔ 快 — chậm và nhanh']]
  },
  '快': {
    collo: [['很快', 'rất nhanh'], ['快一点儿', 'nhanh một chút'],
            ['快到了', 'sắp đến rồi'], ['快走', 'đi nhanh lên']],
    patterns: [['快 + động từ + 了', 'Sắp … rồi: 快到了'],
               ['快 (nhanh) và 快……了 (sắp) — hai cách dùng']]
  },
  '过': {
    collo: [['走过去', 'đi qua'], ['过来', 'lại đây'],
            ['过来看', 'qua đây xem'], ['过十分钟', 'qua mười phút']],
    patterns: [['过 + nơi chốn', 'Đi qua chỗ nào: 走过去'],
               ['过来 (đến chỗ tôi) ↔ 过去 (đi khỏi chỗ tôi)']]
  },
  '走': {
    collo: [['走路', 'đi bộ'], ['走过去', 'đi qua'],
            ['慢慢走', 'đi từ từ'], ['走了', 'đi rồi']],
    patterns: [['走 + 路', 'Đi bộ — không cần phương tiện'],
               ['走 (đi bộ, rời đi) ≠ 去 (đi đến đâu)']]
  },
  '到': {
    collo: [['到学校', 'đến trường'], ['到了', 'đến rồi'],
            ['到公司', 'đến công ty'], ['几点到', 'mấy giờ đến']],
    patterns: [['到 + nơi chốn', 'Đến nơi nào: 到机场'],
               ['到 nhấn vào KẾT QUẢ đã tới nơi; 去 chỉ nói hướng đi']]
  }
};
