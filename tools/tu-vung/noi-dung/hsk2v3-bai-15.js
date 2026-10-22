// Noi dung TU MOI HSK2 3.0 bai 15 (chu de: di nuoc ngoai, san bay, ve may bay).
module.exports = {
  '姓名': {
    collo: [['写姓名', 'viết họ tên'], ['你的姓名', 'họ tên của bạn'],
            ['姓名和电话', 'họ tên và điện thoại'], ['姓名是什么', 'họ tên là gì']],
    patterns: [['写 + 姓名', 'Viết họ tên — dùng trên giấy tờ'],
               ['姓名 (văn viết, giấy tờ) khác 名字 (khẩu ngữ, hỏi tên)']]
  },
  '出国': {
    collo: [['出国旅游', 'ra nước ngoài du lịch'], ['出国学习', 'đi du học'],
            ['想出国', 'muốn ra nước ngoài'], ['第一次出国', 'lần đầu ra nước ngoài']],
    patterns: [['出国 + động từ', 'Ra nước ngoài làm gì: 出国旅游'],
               ['出 + 国', 'Ra (出) khỏi nước (国)']]
  },
  '门票': {
    collo: [['买门票', 'mua vé vào cửa'], ['一张门票', 'một tấm vé vào cửa'],
            ['门票多少钱', 'vé vào cửa bao nhiêu tiền'], ['网上买门票', 'mua vé trên mạng']],
    patterns: [['một + 张 + 门票', 'Lượng từ của 门票 là 张'],
               ['门 + 票', 'Vé (票) vào cửa (门) — khác 机票 là vé máy bay']]
  },
  '高中': {
    collo: [['上高中', 'học cấp ba'], ['高中的同学', 'bạn cấp ba'],
            ['高中生', 'học sinh cấp ba'], ['高中的时候', 'hồi học cấp ba']],
    patterns: [['上 + 高中', 'Theo học bậc trung học phổ thông'],
               ['小学 → 中学 → 高中 → 大学 — các bậc học']]
  },
  '出门': {
    collo: [['出门旅游', 'đi xa du lịch'], ['出门的时候', 'lúc ra khỏi nhà'],
            ['早点儿出门', 'ra khỏi nhà sớm chút'], ['别出门', 'đừng ra ngoài']],
    patterns: [['出门 + động từ', 'Ra khỏi nhà làm gì: 出门旅游'],
               ['出 + 门', 'Ra (出) khỏi cửa (门) — tức là rời nhà']]
  },
  '路': {
    collo: [['路上', 'trên đường'], ['一条路', 'một con đường'],
            ['走路', 'đi bộ'], ['去机场的路', 'đường ra sân bay']],
    patterns: [['một + 条 + 路', 'Lượng từ của 路 là 条'],
               ['路 nằm trong 路上 · 走路 — cùng một chữ']]
  },
  '机场': {
    collo: [['去机场', 'ra sân bay'], ['在机场等', 'đợi ở sân bay'],
            ['机场里面', 'trong sân bay'], ['到机场接', 'ra sân bay đón']],
    patterns: [['去 / 到 + 机场', 'Ra, đến sân bay'],
               ['机 + 场', 'Bãi (场) cho máy bay (飞机)']]
  },
  '机票': {
    collo: [['买机票', 'mua vé máy bay'], ['一张机票', 'một vé máy bay'],
            ['网上买机票', 'mua vé máy bay trên mạng'], ['贵的机票', 'vé máy bay đắt']],
    patterns: [['một + 张 + 机票', 'Lượng từ của 机票 là 张'],
               ['机票 (vé máy bay) khác 门票 (vé vào cửa)']]
  },
  '飞': {
    collo: [['飞机', 'máy bay'], ['飞得很快', 'bay rất nhanh'],
            ['飞到北京', 'bay đến Bắc Kinh'], ['飞过来', 'bay lại đây']],
    patterns: [['飞 + 到 + nơi chốn', 'Bay đến đâu: 飞到北京'],
               ['飞 nằm trong 飞机 — cỗ máy biết bay']]
  },
  '好像': {
    collo: [['好像下雨了', 'hình như mưa rồi'], ['好像认识', 'hình như quen'],
            ['好像很累', 'trông có vẻ rất mệt'], ['好像是他', 'hình như là anh ấy']],
    patterns: [['好像 + mệnh đề', 'Hình như, trông có vẻ: 他好像很累'],
               ['好像 (phỏng đoán nhẹ) khác 可能 (phỏng đoán có căn cứ hơn)']]
  },
  '鸟': {
    collo: [['一只鸟', 'một con chim'], ['小鸟', 'chim nhỏ'],
            ['很多鸟', 'rất nhiều chim'], ['鸟的眼睛', 'mắt chim']],
    patterns: [['một + 只 + 鸟', 'Lượng từ của 鸟 là 只'],
               ['鸟 là chữ tượng hình — bốn chấm dưới là đuôi chim']]
  }
};
