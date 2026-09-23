// Noi dung TU MOI HSK2 3.0 bai 2 (chu de: di lai, hoi duong, dat ve).
module.exports = {
  '公交车': {
    collo: [['坐公交车', 'đi xe buýt'], ['公交车站', 'bến xe buýt'],
            ['公交车上', 'trên xe buýt'], ['等公交车', 'đợi xe buýt']],
    patterns: [['坐 + 公交车', 'Đi xe buýt — dùng 坐'],
               ['公交 + 车', 'Xe (车) công cộng (公交)']]
  },
  '但': {
    collo: [['但是', 'nhưng mà'], ['远但方便', 'xa nhưng tiện'],
            ['但不贵', 'nhưng không đắt'], ['但我不去', 'nhưng tôi không đi']],
    patterns: [['câu 1，但 + câu 2', 'Nhưng — nối hai vế trái ngược nhau'],
               ['但 = 但是 — 但 ngắn gọn hơn, hay dùng khi nói']]
  },
  '车站': {
    collo: [['公交车站', 'bến xe buýt'], ['在车站等', 'đợi ở bến xe'],
            ['去车站', 'ra bến xe'], ['车站前面', 'trước bến xe']],
    patterns: [['在 / 去 + 车站', 'Ở bến xe, ra bến xe'],
               ['车 + 站', 'Chỗ dừng (站) của xe (车)']]
  },
  '远': {
    collo: [['很远', 'rất xa'], ['不远', 'không xa'],
            ['太远了', 'xa quá'], ['离这里很远', 'cách đây rất xa']],
    patterns: [['离 + nơi chốn + 很远', 'Cách nơi nào đó rất xa'],
               ['远 ↔ 近', 'Xa ↔ gần']]
  },
  '打车': {
    collo: [['打车去', 'bắt taxi đi'], ['打车来', 'bắt taxi đến'],
            ['想打车', 'muốn bắt taxi'], ['打车很快', 'bắt taxi rất nhanh']],
    patterns: [['打车 + 去 / 来 + nơi chốn', 'Bắt taxi đi đâu'],
               ['打车 = 坐出租车 — 打车 là cách nói khẩu ngữ, ngắn hơn']]
  },
  '还是': {
    collo: [['坐公交车还是打车', 'đi buýt hay bắt taxi'], ['你还是我', 'bạn hay tôi'],
            ['今天还是明天', 'hôm nay hay ngày mai'], ['还是这个好', 'vẫn là cái này tốt hơn']],
    patterns: [['A 还是 B？', 'Câu hỏi lựa chọn: 你坐公交车还是打车？'],
               ['Câu đã có 还是 thì KHÔNG thêm 吗']]
  },
  '啊': {
    collo: [['好啊', 'được đấy'], ['是啊', 'đúng vậy'],
            ['太远了啊', 'xa quá đi'], ['你来了啊', 'bạn đến rồi à']],
    patterns: [['câu + 啊', 'Trợ từ cuối câu, nghe thân mật hơn'],
               ['好啊 · 是啊 — hai câu đáp đồng tình rất hay dùng']]
  },
  '万': {
    collo: [['一万', 'một vạn'], ['两万', 'hai vạn'],
            ['一万块钱', 'một vạn tệ'], ['三万名学生', 'ba vạn học sinh']],
    patterns: [['số + 万', 'Bao nhiêu vạn: 一万 = 10.000'],
               ['百 → 千 → 万', 'Tiếng Trung đếm theo vạn, không theo "chục nghìn"']]
  },
  '名': {
    collo: [['一名学生', 'một học sinh'], ['三万名学生', 'ba vạn học sinh'],
            ['几名老师', 'mấy giáo viên'], ['一名医生', 'một bác sĩ']],
    patterns: [['số + 名 + người', 'Lượng từ 名 dùng cho người, trang trọng hơn 个'],
               ['名 (lượng từ) và 名字 (tên) — cùng chữ 名']]
  },
  '网上': {
    collo: [['在网上', 'trên mạng'], ['网上买票', 'mua vé trên mạng'],
            ['网上的东西', 'đồ trên mạng'], ['网上看电影', 'xem phim trên mạng']],
    patterns: [['在 + 网上 + động từ', 'Làm gì trên mạng: 在网上买票'],
               ['网 + 上', 'Trên (上) mạng (网) — 上 đứng sau như 桌子上']]
  },
  '外国': {
    collo: [['外国人', 'người nước ngoài'], ['外国学生', 'học sinh nước ngoài'],
            ['去外国', 'ra nước ngoài'], ['外国的东西', 'đồ nước ngoài']],
    patterns: [['外国 + 人 / 学生', 'Người, học sinh nước ngoài'],
               ['外 + 国', 'Nước (国) bên ngoài (外)']]
  },
  '间': {
    collo: [['一间教室', 'một phòng học'], ['两间房间', 'hai căn phòng'],
            ['几间', 'mấy gian'], ['这间教室', 'phòng học này']],
    patterns: [['số + 间 + phòng', 'Lượng từ 间 dùng cho phòng ốc'],
               ['✗ 一个教室 → ✓ 一间教室']]
  },
  '教室': {
    collo: [['一间教室', 'một phòng học'], ['在教室', 'ở phòng học'],
            ['教室里', 'trong phòng học'], ['去教室', 'đến phòng học']],
    patterns: [['在 + 教室 + 里', 'Ở trong phòng học'],
               ['教 + 室', 'Phòng (室) dạy học (教)']]
  },
  '票': {
    collo: [['买票', 'mua vé'], ['网上买票', 'mua vé trên mạng'],
            ['一张票', 'một cái vé'], ['飞机票', 'vé máy bay']],
    patterns: [['một + 张 + 票', 'Lượng từ của 票 là 张'],
               ['买 + 票', 'Mua vé — 飞机票 · 火车票 đều ghép với 票']]
  },
  '别': {
    collo: [['别去', 'đừng đi'], ['别说话', 'đừng nói chuyện'],
            ['别忘了', 'đừng quên'], ['别打车', 'đừng bắt taxi']],
    patterns: [['别 + động từ', 'Đừng làm gì — câu khuyên, ngăn lại'],
               ['别 = 不要 — 别 ngắn gọn hơn, hay dùng khi nói']]
  },
  '过来': {
    collo: [['过来看', 'lại đây xem'], ['走过来', 'đi lại đây'],
            ['请过来', 'mời lại đây'], ['过来吧', 'lại đây nào']],
    patterns: [['V + 过来', 'Tiến về phía người nói: 走过来'],
               ['过来 (lại gần mình) ↔ 过去 (đi ra xa mình)']]
  },
  '北京大学': {
    collo: [['去北京大学', 'đến Đại học Bắc Kinh'], ['在北京大学', 'ở Đại học Bắc Kinh'],
            ['北京大学的学生', 'sinh viên Đại học Bắc Kinh'], ['上北京大学', 'học Đại học Bắc Kinh']],
    patterns: [['上 / 去 + 北京大学', 'Học ở, đi đến Đại học Bắc Kinh'],
               ['北京大学 hay gọi tắt là 北大 — trường đại học nổi tiếng nhất Trung Quốc']]
  }
};
