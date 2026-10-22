// Noi dung TU MOI HSK1 bai 14 (chu de: mua do, lai xe, quan ao).
module.exports = {
  '东西': {
    collo: [['买东西', 'mua đồ'], ['好东西', 'đồ tốt'],
            ['这些东西', 'những thứ này'], ['很多东西', 'rất nhiều đồ']],
    patterns: [['买 + 东西', 'Mua đồ, đi chợ — cụm cố định'],
               ['东 + 西', 'Đông và tây ghép lại thành nghĩa đồ đạc']]
  },
  '一点儿': {
    collo: [['一点儿水', 'một chút nước'], ['吃一点儿', 'ăn một chút'],
            ['买一点儿', 'mua một ít'], ['冷一点儿', 'lạnh hơn chút']],
    patterns: [['一点儿 + danh từ', 'Một chút cái gì: 一点儿水'],
               ['tính từ + 一点儿', 'Hơn một chút: 冷一点儿']]
  },
  '苹果': {
    collo: [['买苹果', 'mua táo'], ['吃苹果', 'ăn táo'],
            ['一个苹果', 'một quả táo'], ['这些苹果', 'những quả táo này']],
    patterns: [['một + 个 + 苹果', 'Lượng từ của 苹果 là 个'],
               ['苹果 là một loại 水果 (bài 12)']]
  },
  '看见': {
    collo: [['看见他', 'nhìn thấy anh ấy'], ['没看见', 'không nhìn thấy'],
            ['看见车', 'nhìn thấy xe'], ['看见先生', 'nhìn thấy ông ấy']],
    patterns: [['看见 + đối tượng', 'Nhìn và THẤY được — 见 là kết quả của 看'],
               ['看 (nhìn) là hành động; 看见 (thấy) là kết quả']]
  },
  '先生': {
    collo: [['王先生', 'ông Vương'], ['先生好', 'chào ông'],
            ['先生的车', 'xe của ông ấy'], ['这个先生', 'ông này']],
    patterns: [['họ + 先生', 'Cách gọi: 王先生 — ông Vương'],
               ['先生 (ông) ↔ 小姐 (cô, bài 12)']]
  },
  '开': {
    collo: [['开车', 'lái xe'], ['开电脑', 'mở máy tính'],
            ['开电视', 'bật tivi'], ['会开车', 'biết lái xe']],
    patterns: [['开 + 车', 'Lái xe — cụm cố định'],
               ['开 vừa là lái, vừa là mở, bật: 开电视']]
  },
  '车': {
    collo: [['开车', 'lái xe'], ['坐车', 'đi xe'],
            ['我的车', 'xe của tôi'], ['车上', 'trên xe']],
    patterns: [['坐 / 开 + 车', 'Ngồi xe, lái xe'],
               ['车 là chữ tượng hình — nét ngang là trục và bánh xe']]
  },
  '回来': {
    collo: [['回来了', 'về rồi'], ['几点回来', 'mấy giờ về'],
            ['不回来', 'không về'], ['明天回来', 'mai về']],
    patterns: [['几点 + 回来', 'Mấy giờ quay về'],
               ['回来 (về chỗ người nói) ≠ 回去 (về chỗ khác)']]
  },
  '分钟': {
    collo: [['十分钟', 'mười phút'], ['几分钟', 'mấy phút'],
            ['五分钟', 'năm phút'], ['十分钟后', 'mười phút sau']],
    patterns: [['số + 分钟', 'Thời lượng bao nhiêu phút: 十分钟'],
               ['分钟 (thời lượng) ≠ 分 (điểm phút trên đồng hồ, bài 11)']]
  },
  '后': {
    collo: [['十分钟后', 'mười phút sau'], ['吃饭后', 'sau khi ăn'],
            ['睡觉后', 'sau khi ngủ'], ['六点后', 'sau sáu giờ']],
    patterns: [['thời gian / động từ + 后', 'Sau khi …: 吃饭后'],
               ['前 (trước) ↔ 后 (sau) — cả hai đều đứng SAU']]
  },
  '衣服': {
    collo: [['买衣服', 'mua quần áo'], ['漂亮的衣服', 'quần áo đẹp'],
            ['这些衣服', 'những bộ quần áo này'], ['一些衣服', 'một ít quần áo']],
    patterns: [['买 + 衣服', 'Mua quần áo'],
               ['衣 + 服', 'Hai chữ đều nghĩa là áo quần, ghép lại cho đủ từ']]
  },
  '漂亮': {
    collo: [['很漂亮', 'rất đẹp'], ['太漂亮了', 'đẹp quá'],
            ['漂亮的衣服', 'quần áo đẹp'], ['不漂亮', 'không đẹp']],
    patterns: [['很 / 太 + 漂亮 + 了', 'Rất đẹp, đẹp quá'],
               ['漂亮 nói về người và đồ vật; 好看 nói về cả phim và sách']]
  },
  '啊': {
    collo: [['太漂亮了啊', 'đẹp quá đi'], ['是啊', 'đúng vậy'],
            ['好啊', 'được đấy'], ['是他啊', 'hoá ra là anh ấy']],
    patterns: [['câu + 啊', 'Trợ từ cuối câu, nghe thân mật hơn'],
               ['是啊 là câu đáp đồng tình rất hay dùng']]
  },
  '少': {
    collo: [['很少', 'rất ít'], ['不少', 'không ít, khá nhiều'],
            ['少一点儿', 'ít đi một chút'], ['少吃', 'ăn ít lại']],
    patterns: [['不 + 少', '不少 KHÔNG phải "không ít" cho đủ, mà là "khá nhiều"'],
               ['少 ↔ 多', 'Ít ↔ nhiều']]
  },
  '这些': {
    collo: [['这些东西', 'những thứ này'], ['这些衣服', 'những bộ đồ này'],
            ['这些人', 'những người này'], ['这些苹果', 'những quả táo này']],
    patterns: [['这些 + danh từ', 'Những cái này — KHÔNG thêm lượng từ nữa'],
               ['这些 (những cái này) ↔ 那些 (những cái kia)']]
  },
  '都': {
    collo: [['都是', 'đều là'], ['都很好', 'đều rất tốt'],
            ['都去', 'đều đi'], ['都不是', 'đều không phải']],
    patterns: [['Sub (số nhiều) + 都 + động từ', '都 đứng SAU cái nó bao quát'],
               ['✗ 都这些书是我的 → ✓ 这些书都是我的']]
  }
};
