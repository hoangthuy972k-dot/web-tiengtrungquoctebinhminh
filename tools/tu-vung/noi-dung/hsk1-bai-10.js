// Noi dung TU MOI HSK1 bai 10 (chu de: do vat trong phong, vi tri truoc sau).
module.exports = {
  '桌子': {
    collo: [['一个桌子', 'một cái bàn'], ['桌子上', 'trên bàn'],
            ['桌子下面', 'dưới bàn'], ['这个桌子', 'cái bàn này']],
    patterns: [['桌子 + 上 / 下面 / 前面', 'Từ chỉ vị trí đứng SAU danh từ'],
               ['桌 + 子', '子 là đuôi từ đọc nhẹ, giống 椅子 · 杯子']]
  },
  '上': {
    collo: [['桌子上', 'trên bàn'], ['椅子上', 'trên ghế'],
            ['书上', 'trên sách'], ['桌子上有', 'trên bàn có']],
    patterns: [['danh từ + 上', 'Trên cái gì: 桌子上'],
               ['上 ↔ 下面', 'Trên ↔ dưới — 上 thường đi một mình, không cần 面']]
  },
  '电脑': {
    collo: [['一个电脑', 'một cái máy tính'], ['买电脑', 'mua máy tính'],
            ['电脑上', 'trên máy tính'], ['我的电脑', 'máy tính của tôi']],
    patterns: [['桌子上有 + 电脑', 'Trên bàn có máy tính'],
               ['电 + 脑', 'Bộ óc (脑) chạy bằng điện (电)']]
  },
  '和': {
    collo: [['我和你', 'tôi và bạn'], ['书和电脑', 'sách và máy tính'],
            ['爸爸和妈妈', 'bố và mẹ'], ['猫和狗', 'mèo và chó']],
    patterns: [['danh từ + 和 + danh từ', '和 chỉ nối DANH TỪ, không nối hai câu'],
               ['✗ 我很好和他很好 → tiếng Trung không dùng 和 kiểu này']]
  },
  '本': {
    collo: [['一本书', 'một quyển sách'], ['几本书', 'mấy quyển sách'],
            ['这本书', 'quyển sách này'], ['那本汉语书', 'quyển sách tiếng Trung kia']],
    patterns: [['số / chỉ định + 本 + 书', 'Lượng từ 本 dùng cho sách vở'],
               ['✗ 一个书 → ✓ 一本书']]
  },
  '里': {
    collo: [['家里', 'trong nhà'], ['学校里', 'trong trường'],
            ['商店里', 'trong cửa hàng'], ['医院里', 'trong bệnh viện']],
    patterns: [['danh từ + 里', 'Bên trong cái gì: 家里 · 商店里'],
               ['里 ↔ 上', 'Trong ↔ trên — đều đứng sau danh từ']]
  },
  '前面': {
    collo: [['学校前面', 'trước trường'], ['商店前面', 'trước cửa hàng'],
            ['在前面', 'ở phía trước'], ['前面有', 'phía trước có']],
    patterns: [['danh từ + 前面', 'Phía trước cái gì'],
               ['前面 ↔ 后面', 'Trước ↔ sau']]
  },
  '后面': {
    collo: [['学校后面', 'sau trường'], ['医院后面', 'sau bệnh viện'],
            ['在后面', 'ở phía sau'], ['后面有', 'phía sau có']],
    patterns: [['danh từ + 后面', 'Phía sau cái gì'],
               ['前面 · 后面 · 上 · 里 · 下面 — nhóm từ chỉ vị trí, đều đứng SAU danh từ']]
  },
  '这儿': {
    collo: [['在这儿', 'ở đây'], ['这儿的人', 'người ở đây'],
            ['这儿有', 'ở đây có'], ['这儿的商店', 'cửa hàng ở đây']],
    patterns: [['在 + 这儿', 'Ở đây'],
               ['这儿 (đây) ↔ 那儿 (kia) ↔ 哪儿 (đâu)']]
  },
  '没有': {
    collo: [['没有电脑', 'không có máy tính'], ['没有钱', 'không có tiền'],
            ['没有人', 'không có ai'], ['家里没有', 'trong nhà không có']],
    patterns: [['没有 + danh từ', 'Phủ định của 有 LUÔN là 没有'],
               ['✗ 不有电脑 → ✓ 没有电脑']]
  },
  '能': {
    collo: [['能坐', 'có thể ngồi'], ['能去', 'có thể đi'],
            ['不能', 'không thể'], ['能看书', 'có thể đọc sách']],
    patterns: [['Sub + 能 + động từ', 'Có thể làm gì — do hoàn cảnh cho phép'],
               ['能 (hoàn cảnh cho phép) ≠ 会 (học rồi nên biết làm)']]
  },
  '坐': {
    collo: [['坐这儿', 'ngồi đây'], ['坐椅子', 'ngồi ghế'],
            ['请坐', 'mời ngồi'], ['能坐', 'có thể ngồi']],
    patterns: [['请 + 坐', 'Mời ngồi — câu lịch sự rất hay dùng'],
               ['坐 gồm hai chữ 人 ngồi trên mặt đất (土)']]
  }
};
