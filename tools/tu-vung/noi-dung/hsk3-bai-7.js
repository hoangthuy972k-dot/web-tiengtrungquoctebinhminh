// Noi dung TU MOI HSK3 bai 7 (chu de: dong nghiep, hen gio, don tiep).
module.exports = {
  '同事': {
    collo: [['新同事', 'đồng nghiệp mới'], ['老同事', 'đồng nghiệp cũ'],
            ['我的同事', 'đồng nghiệp của tôi'], ['跟同事一起', 'cùng với đồng nghiệp'],
            ['同事们', 'các đồng nghiệp']],
    patterns: [['同 + 事', 'Người cùng (同) làm việc (事)'],
               ['同事 (cùng làm) / 同学 (cùng học) / 同屋 (cùng phòng)']]
  },
  '以前': {
    collo: [['以前在哪儿', 'trước đây ở đâu'], ['以前没有', 'trước đây không có'],
            ['很久以前', 'rất lâu trước đây'], ['来中国以前', 'trước khi đến Trung Quốc'],
            ['跟以前一样', 'giống như trước']],
    patterns: [['V + 以前', 'Trước khi làm gì — 以前 đứng SAU'],
               ['以前 ↔ 以后', 'Trước đây ↔ sau này']]
  },
  '银行': {
    collo: [['去银行', 'đi ngân hàng'], ['在银行工作', 'làm ở ngân hàng'],
            ['银行经理', 'giám đốc ngân hàng'], ['银行门口', 'cửa ngân hàng'],
            ['银行开门了', 'ngân hàng mở cửa rồi']],
    patterns: [['在 + 银行 + 工作', 'Làm việc ở ngân hàng'],
               ['银 + 行', 'Nơi (行) giữ bạc (银)']]
  },
  '久': {
    collo: [['多久', 'bao lâu'], ['很久', 'rất lâu'],
            ['等了很久', 'đợi rất lâu'], ['好久不见', 'lâu rồi không gặp'],
            ['住了很久', 'sống rất lâu']],
    patterns: [['V + 了 + 很久', 'Làm gì đã lâu'],
               ['多久？', 'Bao lâu? — hỏi thời lượng']]
  },
  '感兴趣': {
    collo: [['对音乐感兴趣', 'thích âm nhạc'], ['很感兴趣', 'rất hứng thú'],
            ['不感兴趣', 'không hứng thú'], ['对什么感兴趣', 'thích cái gì'],
            ['越来越感兴趣', 'ngày càng thích']],
    patterns: [['对 + N + 感兴趣', 'Có hứng thú với cái gì — bắt buộc có 对'],
               ['✗ 我感兴趣音乐 → ✓ 我对音乐感兴趣']]
  },
  '结婚': {
    collo: [['跟她结婚', 'kết hôn với cô ấy'], ['下个月结婚', 'tháng sau cưới'],
            ['结婚了', 'đã kết hôn'], ['结了婚', 'đã lập gia đình'],
            ['结婚的时候', 'lúc kết hôn']],
    patterns: [['跟 + ai + 结婚', 'Kết hôn với ai'],
               ['结 + 了 + 婚', '结婚 là từ ly hợp: ✗ 结婚她 → ✓ 跟她结婚']]
  },
  '欢迎': {
    collo: [['欢迎你来', 'hoan nghênh bạn đến'], ['欢迎光临', 'hoan nghênh quý khách'],
            ['受欢迎', 'được ưa thích'], ['很受欢迎', 'rất được yêu thích'],
            ['欢迎新同事', 'chào mừng đồng nghiệp mới']],
    patterns: [['欢迎 + ai + V', 'Hoan nghênh ai làm gì'],
               ['受 + 欢迎', 'Được hoan nghênh, được ưa chuộng']]
  },
  '迟到': {
    collo: [['迟到了', 'đến muộn rồi'], ['没迟到', 'không muộn'],
            ['经常迟到', 'thường xuyên đi muộn'], ['迟到了十分钟', 'muộn mười phút'],
            ['别迟到', 'đừng đến muộn']],
    patterns: [['Sub + 迟到 + 了', 'Ai đó đến muộn rồi'],
               ['迟到 ↔ 准时', 'Đến muộn ↔ đúng giờ']]
  },
  '半': {
    collo: [['七点半', 'bảy giờ rưỡi'], ['半个小时', 'nửa tiếng'],
            ['一半', 'một nửa'], ['半年', 'nửa năm'],
            ['一个半小时', 'một tiếng rưỡi']],
    patterns: [['số giờ + 半', 'Mấy giờ rưỡi — 半 đứng SAU giờ'],
               ['半 + 个 + 小时', 'Nửa tiếng — 半 đứng TRƯỚC lượng từ']]
  },
  '接': {
    collo: [['来接我', 'đến đón tôi'], ['去机场接人', 'ra sân bay đón người'],
            ['接电话', 'nghe điện thoại'], ['接孩子', 'đón con'],
            ['谁来接你', 'ai đến đón bạn']],
    patterns: [['去 + nơi chốn + 接 + ai', 'Đi đâu đón ai'],
               ['接 + 电话', 'Nghe điện thoại — nghĩa riêng cần nhớ']]
  },
  '刻': {
    collo: [['一刻钟', 'mười lăm phút'], ['三刻', 'bốn lăm phút'],
            ['差一刻', 'kém mười lăm'], ['两点一刻', 'hai giờ mười lăm'],
            ['差一刻六点', 'kém mười lăm phút nữa sáu giờ']],
    patterns: [['giờ + 一刻 / 三刻', '2 giờ 15 = 两点一刻; 2 giờ 45 = 两点三刻'],
               ['差 + 一刻 + giờ', 'Kém 15 phút nữa tới mấy giờ']]
  },
  '差': {
    collo: [['差一刻', 'kém mười lăm phút'], ['差五分', 'kém năm phút'],
            ['差不多', 'gần như, xấp xỉ'], ['差一点儿', 'suýt nữa'],
            ['还差两个', 'còn thiếu hai cái']],
    patterns: [['差 + thời lượng + giờ', 'Kém bao nhiêu nữa tới mấy giờ'],
               ['差 (chà, kém) ≠ 差 (chāi, công tác — 出差)']]
  }
};
