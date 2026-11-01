// Noi dung TU MOI HSK1 3.0 bai 6 (chu de: dien thoai, di sieu thi, an uong).
module.exports = {
  '手机': {
    collo: [['新手机', 'điện thoại mới'], ['我的手机', 'điện thoại của tôi'],
            ['一个手机', 'một cái điện thoại'], ['手机号', 'số điện thoại']],
    patterns: [['手机 + 号', 'Số điện thoại di động'],
               ['手 + 机', 'Cái máy (机) cầm trên tay (手)']]
  },
  '电话': {
    collo: [['电话号', 'số điện thoại'], ['他的电话', 'điện thoại của anh ấy'],
            ['家里电话', 'điện thoại nhà'], ['电话号是多少', 'số điện thoại là bao nhiêu']],
    patterns: [['电话 + 号', 'Số điện thoại'],
               ['电 + 话', 'Lời nói (话) truyền bằng điện (电)']]
  },
  '号': {
    collo: [['手机号', 'số điện thoại di động'], ['电话号', 'số điện thoại'],
            ['多少号', 'số bao nhiêu'], ['我的号', 'số của tôi']],
    patterns: [['手机 / 电话 + 号 + 是多少？', 'Hỏi số điện thoại'],
               ['号 ở đây là SỐ HIỆU, khác 号 chỉ ngày trong tháng (bài 5)']]
  },
  '明天': {
    collo: [['明天去', 'mai đi'], ['明天休息', 'mai nghỉ'],
            ['明天见', 'mai gặp'], ['明天不去', 'mai không đi']],
    patterns: [['明天 + Sub + động từ', 'Việc sắp tới — động từ vẫn giữ nguyên hình thức'],
               ['今天 · 明天 — 明 nghĩa là sáng sau']]
  },
  '去': {
    collo: [['去超市', 'đi siêu thị'], ['去哪儿', 'đi đâu'],
            ['不去', 'không đi'], ['想去', 'muốn đi']],
    patterns: [['去 + nơi chốn', 'Đi đến đâu: 去超市 — không cần thêm giới từ'],
               ['去 + động từ', 'Đi làm gì: 去买东西']]
  },
  '哪儿': {
    collo: [['去哪儿', 'đi đâu'], ['在哪儿', 'ở đâu'],
            ['哪儿的', 'của nơi nào'], ['哪儿有', 'ở đâu có']],
    patterns: [['去 + 哪儿？', 'Hỏi nơi đến: 你明天去哪儿？'],
               ['Câu đã có 哪儿 thì KHÔNG thêm 吗']]
  },
  '想': {
    collo: [['想去', 'muốn đi'], ['想买', 'muốn mua'],
            ['想吃', 'muốn ăn'], ['不想', 'không muốn']],
    patterns: [['Sub + 想 + động từ', 'Muốn làm gì: 我想去超市'],
               ['想 (muốn) ≠ 会 (biết làm) — 我想做饭 / 我会做饭']]
  },
  '超市': {
    collo: [['去超市', 'đi siêu thị'], ['在超市', 'ở siêu thị'],
            ['超市的东西', 'đồ của siêu thị'], ['那边的超市', 'siêu thị đằng kia']],
    patterns: [['去 / 在 + 超市', 'Đi siêu thị, ở siêu thị'],
               ['超 + 市', 'Chợ (市) siêu lớn (超) — dịch từ "supermarket"']]
  },
  '买': {
    collo: [['买东西', 'mua đồ'], ['买牛奶', 'mua sữa'],
            ['想买', 'muốn mua'], ['买什么', 'mua gì']],
    patterns: [['买 + danh từ', 'Mua cái gì: 买东西'],
               ['买 (mǎi, mua) — chú ý thanh 3, đọc khác 卖 (mài, bán)']]
  },
  '东西': {
    collo: [['买东西', 'mua đồ'], ['一些东西', 'một ít đồ'],
            ['好东西', 'đồ tốt'], ['超市的东西', 'đồ của siêu thị']],
    patterns: [['买 + 东西', 'Mua đồ, đi chợ — cụm cố định'],
               ['东 + 西', 'Đông và tây ghép lại thành nghĩa đồ đạc']]
  },
  '些': {
    collo: [['一些东西', 'một ít đồ'], ['这些包子', 'những cái bánh bao này'],
            ['那些人', 'những người kia'], ['买一些', 'mua một ít']],
    patterns: [['一 / 这 / 那 + 些 + danh từ', 'Một vài, những — thay cho số cụ thể'],
               ['些 đã mang nghĩa nhiều, nên KHÔNG thêm lượng từ nữa']]
  },
  '牛奶': {
    collo: [['买牛奶', 'mua sữa'], ['喝牛奶', 'uống sữa'],
            ['一些牛奶', 'một ít sữa'], ['超市的牛奶', 'sữa của siêu thị']],
    patterns: [['买 / 喝 + 牛奶', 'Mua sữa, uống sữa'],
               ['牛 + 奶', 'Sữa (奶) của con bò (牛)']]
  },
  '吃': {
    collo: [['吃米饭', 'ăn cơm'], ['吃包子', 'ăn bánh bao'],
            ['吃晚饭', 'ăn cơm tối'], ['想吃', 'muốn ăn']],
    patterns: [['吃 + đồ ăn', 'Ăn cái gì: 吃米饭'],
               ['吃 có bộ 口 (miệng) bên trái — chữ liên quan đến miệng đều có bộ này']]
  },
  '晚饭': {
    collo: [['吃晚饭', 'ăn cơm tối'], ['做晚饭', 'nấu cơm tối'],
            ['在家吃晚饭', 'ăn tối ở nhà'], ['好吃的晚饭', 'bữa tối ngon']],
    patterns: [['吃 / 做 + 晚饭', 'Ăn cơm tối, nấu cơm tối'],
               ['晚 + 饭', 'Bữa cơm (饭) buổi tối (晚)']]
  },
  '那边': {
    collo: [['那边的超市', 'siêu thị đằng kia'], ['在那边', 'ở đằng kia'],
            ['去那边', 'đi đằng kia'], ['那边有', 'đằng kia có']],
    patterns: [['在 / 去 + 那边', 'Ở đằng kia, đi đằng kia'],
               ['那 + 边', 'Phía (边) kia (那) — vật ở xa người nói']]
  },
  '包子': {
    collo: [['吃包子', 'ăn bánh bao'], ['买包子', 'mua bánh bao'],
            ['这些包子', 'những cái bánh bao này'], ['非常好吃的包子', 'bánh bao cực ngon']],
    patterns: [['吃 / 买 + 包子', 'Ăn, mua bánh bao'],
               ['包 + 子', '子 là đuôi từ đọc nhẹ, giống 饺子']]
  },
  '非常': {
    collo: [['非常好吃', 'cực kỳ ngon'], ['非常好看', 'cực kỳ đẹp'],
            ['非常忙', 'cực kỳ bận'], ['非常喜欢', 'cực kỳ thích']],
    patterns: [['非常 + tính từ / động từ', 'Mức độ cao hơn 很: 非常好吃'],
               ['很 < 非常 < 太……了 — ba mức nhấn mạnh']]
  },
  '好吃': {
    collo: [['非常好吃', 'cực kỳ ngon'], ['很好吃', 'rất ngon'],
            ['不好吃', 'không ngon'], ['好吃的包子', 'bánh bao ngon']],
    patterns: [['很 / 非常 + 好吃', 'Ngon — nói về đồ ăn'],
               ['好 + 吃', 'Ăn (吃) thấy tốt (好) — cùng kiểu với 好看']]
  },
  '米饭': {
    collo: [['吃米饭', 'ăn cơm'], ['做米饭', 'nấu cơm'],
            ['一些米饭', 'một ít cơm'], ['好吃的米饭', 'cơm ngon']],
    patterns: [['吃 + 米饭', 'Ăn cơm'],
               ['米 + 饭', 'Cơm (饭) nấu từ gạo (米)']]
  },
  '怎么': {
    collo: [['怎么去', 'đi bằng cách nào'], ['怎么做', 'làm thế nào'],
            ['怎么说', 'nói thế nào'], ['怎么买', 'mua thế nào']],
    patterns: [['怎么 + động từ', 'Hỏi CÁCH làm: 你怎么去超市？'],
               ['怎么 (cách làm) ≠ 怎么样 (tình hình thế nào)']]
  },
  '坐': {
    collo: [['坐出租车', 'đi taxi'], ['坐这边', 'ngồi bên này'],
            ['请坐', 'mời ngồi'], ['坐车去', 'đi xe đến']],
    patterns: [['坐 + phương tiện', 'Đi bằng xe gì: 坐出租车'],
               ['坐 vừa là ngồi, vừa là đi bằng phương tiện']]
  },
  '出租车': {
    collo: [['坐出租车', 'đi taxi'], ['一个出租车', 'một chiếc taxi'],
            ['出租车上', 'trên taxi'], ['那边的出租车', 'chiếc taxi đằng kia']],
    patterns: [['坐 + 出租车', 'Đi taxi — dùng 坐'],
               ['出租 + 车', 'Xe (车) cho thuê (出租)']]
  },
  '西安饭店': {
    collo: [['去西安饭店', 'đến nhà hàng Tây An'], ['在西安饭店', 'ở nhà hàng Tây An'],
            ['西安饭店的菜', 'món của nhà hàng Tây An']],
    patterns: [['tên riêng + 饭店', 'Tên nhà hàng: 西安饭店'],
               ['西安 là một thành phố cổ nổi tiếng của Trung Quốc']]
  }
};
