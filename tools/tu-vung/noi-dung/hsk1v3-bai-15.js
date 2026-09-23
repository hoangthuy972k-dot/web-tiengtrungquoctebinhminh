// Noi dung TU MOI HSK1 3.0 bai 15 (chu de: du lich, di may bay, don nguoi).
module.exports = {
  '爱': {
    collo: [['爱北京', 'yêu Bắc Kinh'], ['爱唱歌', 'thích hát'],
            ['爱吃饺子', 'thích ăn sủi cảo'], ['爱我的家人', 'yêu người nhà']],
    patterns: [['爱 + danh từ / động từ', 'Yêu, thích đến mức thành thói quen'],
               ['爱 mạnh hơn 喜欢 — 我爱吃饺子 / 我喜欢吃饺子']]
  },
  '哪个': {
    collo: [['哪个人', 'người nào'], ['哪个飞机', 'chuyến bay nào'],
            ['哪个机场', 'sân bay nào'], ['哪个好玩儿', 'cái nào thú vị']],
    patterns: [['哪 + 个 + danh từ', 'Cái nào — chọn ra một trong nhiều cái'],
               ['哪个 (chọn một) ≠ 哪些 (chọn nhiều)']]
  },
  '去年': {
    collo: [['去年去', 'năm ngoái đi'], ['去年的时候', 'hồi năm ngoái'],
            ['去年来', 'năm ngoái đến'], ['去年上大学', 'năm ngoái vào đại học']],
    patterns: [['去年 + Sub + động từ', 'Năm ngoái làm gì'],
               ['去年 · 今年 · 明年 — ba mốc năm']]
  },
  '男朋友': {
    collo: [['我男朋友', 'bạn trai tôi'], ['她的男朋友', 'bạn trai của cô ấy'],
            ['男朋友的家人', 'người nhà của bạn trai'], ['是男朋友', 'là bạn trai']],
    patterns: [['ai + 男朋友', 'Bạn trai của ai — hay bỏ 的'],
               ['男朋友 ↔ 女朋友', 'Bạn trai ↔ bạn gái']]
  },
  '几': {
    collo: [['几个', 'mấy cái'], ['几点', 'mấy giờ'],
            ['几个小时', 'mấy tiếng'], ['几年', 'mấy năm']],
    patterns: [['几 + lượng từ + danh từ', 'Hỏi số lượng NHỎ, đoán dưới mười'],
               ['几 (số nhỏ) ≠ 多少 (số bất kỳ)']]
  },
  '年': {
    collo: [['一年', 'một năm'], ['两年', 'hai năm'],
            ['几年', 'mấy năm'], ['学了三年', 'học ba năm']],
    patterns: [['số + 年', 'Bao nhiêu năm: 一年 — 年 tự làm lượng từ'],
               ['✗ 一个年 → ✓ 一年', '年 · 天 · 岁 đều không cần thêm 个']]
  },
  '好玩儿': {
    collo: [['很好玩儿', 'rất thú vị'], ['非常好玩儿', 'cực kỳ thú vị'],
            ['不好玩儿', 'không thú vị'], ['好玩儿的地方', 'chỗ thú vị']],
    patterns: [['很 / 非常 + 好玩儿', 'Thú vị — nói về nơi chốn, trò chơi'],
               ['好 + 玩儿', 'Chơi (玩儿) thấy vui (好) — cùng kiểu 好吃 · 好看 · 好听']]
  },
  '西安': {
    collo: [['去西安', 'đi Tây An'], ['在西安', 'ở Tây An'],
            ['西安的天气', 'thời tiết Tây An'], ['好玩儿的西安', 'Tây An thú vị']],
    patterns: [['去 / 在 + 西安', 'Đi Tây An, ở Tây An'],
               ['西安 là một thành phố cổ nổi tiếng của Trung Quốc']]
  },
  '北京': {
    collo: [['去北京', 'đi Bắc Kinh'], ['在北京', 'ở Bắc Kinh'],
            ['北京的天气', 'thời tiết Bắc Kinh'], ['北京的机场', 'sân bay Bắc Kinh']],
    patterns: [['去 / 在 + 北京', 'Đi Bắc Kinh, ở Bắc Kinh'],
               ['北 + 京', 'Kinh đô (京) phía bắc (北) — thủ đô Trung Quốc']]
  },
  '飞机': {
    collo: [['坐飞机', 'đi máy bay'], ['飞机上', 'trên máy bay'],
            ['去北京的飞机', 'chuyến bay đi Bắc Kinh'], ['飞机几点到', 'máy bay mấy giờ đến']],
    patterns: [['坐 + 飞机', 'Đi máy bay — cũng dùng 坐'],
               ['飞 + 机', 'Cỗ máy (机) biết bay (飞)']]
  },
  '要': {
    collo: [['要三个小时', 'mất ba tiếng'], ['要去', 'định đi'],
            ['要多少钱', 'cần bao nhiêu tiền'], ['要一天', 'mất một ngày']],
    patterns: [['要 + thời lượng', 'Mất bao lâu: 坐飞机要三个小时'],
               ['要 vừa là cần, vừa là định làm, vừa là mất bao lâu']]
  },
  '小时': {
    collo: [['一个小时', 'một tiếng'], ['三个小时', 'ba tiếng'],
            ['几个小时', 'mấy tiếng'], ['半个小时', 'nửa tiếng']],
    patterns: [['số + 个 + 小时', 'Lượng từ của 小时 là 个: 三个小时'],
               ['✗ 三小时 → ✓ 三个小时', '小时 khác 点: 三点 (3 giờ) / 三个小时 (3 tiếng)']]
  },
  '家人': {
    collo: [['我的家人', 'người nhà tôi'], ['他的家人', 'người nhà của anh ấy'],
            ['爱家人', 'yêu người nhà'], ['家人的照片', 'ảnh của người nhà']],
    patterns: [['ai + 的 + 家人', 'Người nhà của ai'],
               ['家 + 人', 'Người (人) trong nhà (家)']]
  },
  '时间': {
    collo: [['有时间', 'có thời gian'], ['没有时间', 'không có thời gian'],
            ['多少时间', 'bao nhiêu thời gian'], ['一些时间', 'một ít thời gian']],
    patterns: [['有 / 没有 + 时间', 'Có, không có thời gian'],
               ['时 + 间', 'Khoảng (间) thời (时) gian']]
  },
  '机场': {
    collo: [['去机场', 'ra sân bay'], ['在机场', 'ở sân bay'],
            ['机场里', 'trong sân bay'], ['到机场接', 'ra sân bay đón']],
    patterns: [['去 / 在 + 机场', 'Ra sân bay, ở sân bay'],
               ['机 + 场', 'Bãi (场) cho máy bay (飞机)']]
  },
  '接': {
    collo: [['接我', 'đón tôi'], ['去机场接', 'ra sân bay đón'],
            ['接家人', 'đón người nhà'], ['来接', 'đến đón']],
    patterns: [['接 + người', 'Đón ai: 去机场接我'],
               ['接 có bộ 扌 (tay) bên trái — đưa tay ra đón']]
  },
  '住': {
    collo: [['住在北京', 'sống ở Bắc Kinh'], ['住在西安', 'sống ở Tây An'],
            ['住哪里', 'ở chỗ nào'], ['住几天', 'ở mấy ngày']],
    patterns: [['住 + 在 + nơi chốn', 'Ở tại đâu — chỗ sinh sống lâu dài'],
               ['住 (sống lâu dài) ≠ 在 (có mặt lúc này)']]
  },
  '早': {
    collo: [['很早', 'rất sớm'], ['早上', 'buổi sáng'],
            ['早饭', 'bữa sáng'], ['早点儿来', 'đến sớm chút']],
    patterns: [['很 + 早', 'Rất sớm'],
               ['早 ↔ 晚', 'Sớm ↔ muộn']]
  },
  '那': {
    collo: [['那个人', 'người kia'], ['那些书', 'những quyển sách kia'],
            ['那是', 'kia là'], ['那边', 'đằng kia']],
    patterns: [['那 + lượng từ + danh từ', 'Cái kia: 那个人 · 那本书'],
               ['那 cũng dùng để nối câu: 那我们去吧 — vậy thì chúng ta đi thôi']]
  },
  '大兴机场': {
    collo: [['去大兴机场', 'đi sân bay Đại Hưng'], ['在大兴机场', 'ở sân bay Đại Hưng'],
            ['大兴机场的飞机', 'máy bay ở sân bay Đại Hưng'], ['到大兴机场', 'đến sân bay Đại Hưng']],
    patterns: [['tên riêng + 机场', 'Tên sân bay: 大兴机场'],
               ['大兴机场 là sân bay lớn ở Bắc Kinh, mở cửa năm 2019']]
  }
};
