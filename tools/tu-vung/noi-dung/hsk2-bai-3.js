// Noi dung TU MOI HSK2 (bo cu) bai 3 (chu de: mua sam, do vat trong nha, mau sac).
module.exports = {
  '块': {
    collo: [['五块', 'năm đồng'], ['十块钱', 'mười đồng'],
            ['几块钱', 'mấy đồng'], ['一块', 'một đồng']],
    patterns: [['số + 块 + (钱)', 'Đơn vị tiền trong khẩu ngữ: 十块钱'],
               ['块 dùng khi nói; văn viết dùng 元']]
  },
  '手表': {
    collo: [['一个手表', 'một cái đồng hồ'], ['买手表', 'mua đồng hồ'],
            ['我的手表', 'đồng hồ của tôi'], ['新手表', 'đồng hồ mới']],
    patterns: [['một + 个 + 手表', 'Lượng từ của 手表 là 个'],
               ['手 + 表', 'Cái đồng hồ (表) đeo trên tay (手)']]
  },
  '钱': {
    collo: [['多少钱', 'bao nhiêu tiền'], ['十块钱', 'mười đồng'],
            ['有钱', 'có tiền'], ['没有钱', 'không có tiền']],
    patterns: [['多少 + 钱', 'Hỏi giá: 这个手表多少钱？'],
               ['钱 có bộ 钅 (kim loại) — tiền xưa đúc bằng kim loại']]
  },
  '买': {
    collo: [['买手表', 'mua đồng hồ'], ['买报纸', 'mua báo'],
            ['想买', 'muốn mua'], ['买什么', 'mua gì']],
    patterns: [['买 + danh từ', 'Mua cái gì: 买报纸'],
               ['买 (mǎi, mua) — chú ý thanh 3, khác 卖 (mài, bán)']]
  },
  '报纸': {
    collo: [['买报纸', 'mua báo'], ['看报纸', 'đọc báo'],
            ['今天的报纸', 'báo hôm nay'], ['一张报纸', 'một tờ báo']],
    patterns: [['看 + 报纸', 'Đọc báo — dùng 看, không dùng 读'],
               ['một + 张 + 报纸', 'Lượng từ của 报纸 là 张']]
  },
  '昨天': {
    collo: [['昨天晚上', 'tối qua'], ['昨天早上', 'sáng qua'],
            ['昨天买的', 'mua hôm qua'], ['昨天没去', 'hôm qua không đi']],
    patterns: [['昨天 + Sub + động từ', 'Việc đã qua — động từ vẫn giữ nguyên hình thức'],
               ['昨天 · 今天 · 明天 — ba mốc thời gian đi liền một bộ']]
  },
  '送': {
    collo: [['送礼物', 'tặng quà'], ['送给她', 'tặng cho cô ấy'],
            ['送你回家', 'đưa bạn về nhà'], ['想送', 'muốn tặng']],
    patterns: [['送 + 给 + người', 'Tặng cho ai: 送给她一个手表'],
               ['送 vừa là tặng, vừa là đưa tiễn: 送你回家']]
  },
  '牛奶': {
    collo: [['买牛奶', 'mua sữa'], ['喝牛奶', 'uống sữa'],
            ['一些牛奶', 'một ít sữa'], ['热牛奶', 'sữa nóng']],
    patterns: [['买 / 喝 + 牛奶', 'Mua sữa, uống sữa'],
               ['牛 + 奶', 'Sữa (奶) của con bò (牛)']]
  },
  '谁': {
    collo: [['是谁', 'là ai'], ['谁的', 'của ai'],
            ['送给谁', 'tặng cho ai'], ['谁买的', 'ai mua']],
    patterns: [['Sub + 是 + 谁？', 'Hỏi người nào: 他是谁？'],
               ['Câu đã có 谁 thì KHÔNG thêm 吗']]
  },
  '房间': {
    collo: [['我的房间', 'phòng của tôi'], ['房间里', 'trong phòng'],
            ['一个房间', 'một căn phòng'], ['漂亮的房间', 'căn phòng đẹp']],
    patterns: [['房间 + 里', 'Trong phòng — 里 đứng sau danh từ'],
               ['房 + 间', 'Gian (间) nhà (房)']]
  },
  '丈夫': {
    collo: [['我丈夫', 'chồng tôi'], ['她的丈夫', 'chồng cô ấy'],
            ['丈夫的手表', 'đồng hồ của chồng'], ['丈夫送的', 'chồng tặng']],
    patterns: [['ai + 丈夫', 'Chồng của ai — người thân hay bỏ 的'],
               ['丈夫 (chồng) ↔ 妻子 (vợ)']]
  },
  '旁边': {
    collo: [['我旁边', 'bên cạnh tôi'], ['房间旁边', 'bên cạnh phòng'],
            ['在旁边', 'ở bên cạnh'], ['旁边有', 'bên cạnh có']],
    patterns: [['danh từ + 旁边', 'Bên cạnh cái gì: 房间旁边'],
               ['旁边 (ngay cạnh) gần hơn 前面 · 后面']]
  },
  '女儿': {
    collo: [['我女儿', 'con gái tôi'], ['她的女儿', 'con gái của cô ấy'],
            ['有女儿', 'có con gái'], ['女儿的房间', 'phòng của con gái']],
    patterns: [['người + 女儿', 'Con gái của ai'],
               ['女 + 儿', 'Đứa con (儿) là nữ (女)']]
  },
  '漂亮': {
    collo: [['很漂亮', 'rất đẹp'], ['不漂亮', 'không đẹp'],
            ['漂亮的房间', 'căn phòng đẹp'], ['最漂亮', 'đẹp nhất']],
    patterns: [['很 / 最 + 漂亮', 'Rất đẹp, đẹp nhất'],
               ['漂亮 nói về người và đồ vật; 好看 nói được cả phim và sách']]
  },
  '颜色': {
    collo: [['什么颜色', 'màu gì'], ['这个颜色', 'màu này'],
            ['喜欢的颜色', 'màu yêu thích'], ['漂亮的颜色', 'màu đẹp']],
    patterns: [['什么 + 颜色？', 'Màu gì: 你喜欢什么颜色？'],
               ['颜 + 色', 'Sắc (色) diện (颜) — hai chữ cùng nghĩa ghép lại']]
  }
};
