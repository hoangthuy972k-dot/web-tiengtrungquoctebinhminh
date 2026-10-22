// Noi dung TU MOI HSK3 bai 17 (chu de: xin nghi, so thich, giu suc khoe).
module.exports = {
  '请假': {
    collo: [['请几天假', 'xin nghỉ mấy ngày'], ['请病假', 'xin nghỉ ốm'],
            ['请事假', 'xin nghỉ việc riêng'], ['请了三天假', 'đã xin nghỉ ba ngày'],
            ['跟老师请假', 'xin phép thầy']],
    patterns: [['请 + thời lượng + 假', '请假 là từ ly hợp: 请了三天假 ✓ / 请假了三天 ✗'],
               ['跟 + ai + 请假', 'Xin phép ai']]
  },
  '一共': {
    collo: [['一共12个人', 'tổng cộng 12 người'], ['一共多少钱', 'tổng cộng bao nhiêu tiền'],
            ['一共写100个', 'viết tổng cộng 100 chữ'], ['一共三天', 'tổng cộng ba ngày'],
            ['一共有', 'tổng cộng có']],
    patterns: [['一共 + số lượng', 'Tổng cộng bao nhiêu'],
               ['一共 (tổng số) ≠ 都 (đều) — 一共 đếm, 都 nói về từng cái']]
  },
  '邻居': {
    collo: [['新邻居', 'hàng xóm mới'], ['是邻居', 'là hàng xóm'],
            ['邻居家', 'nhà hàng xóm'], ['对面的邻居', 'hàng xóm đối diện'],
            ['跟邻居聊天儿', 'trò chuyện với hàng xóm']],
    patterns: [['对面的 + 邻居', 'Hàng xóm đối diện'],
               ['邻 + 居', 'Ở (居) gần bên (邻)']]
  },
  '后来': {
    collo: [['后来发现', 'sau đó phát hiện'], ['后来是', 'về sau là'],
            ['后来怎么样了', 'sau đó thế nào'], ['以前……后来……', 'trước đây… về sau…'],
            ['后来就搬走了', 'sau đó thì chuyển đi']],
    patterns: [['以前……，后来……', 'Trước đây …, về sau …'],
               ['后来 chỉ dùng cho việc ĐÃ QUA; việc sắp tới dùng 以后']]
  },
  '爱好': {
    collo: [['我的爱好', 'sở thích của tôi'], ['很多爱好', 'nhiều sở thích'],
            ['一个爱好', 'một sở thích'], ['适合自己的爱好', 'sở thích hợp với mình'],
            ['爱好是看书', 'sở thích là đọc sách']],
    patterns: [['Sub + 的爱好 + 是 + …', 'Sở thích của ai là gì'],
               ['爱好 (danh từ, sở thích) — khác 喜欢 (động từ, thích)']]
  },
  '办法': {
    collo: [['有办法', 'có cách'], ['想办法', 'nghĩ cách'],
            ['没办法', 'không còn cách nào'], ['好办法', 'cách hay'],
            ['这个办法不错', 'cách này khá ổn']],
    patterns: [['想 + 办法', 'Nghĩ cách — dùng 想, không dùng 做'],
               ['没办法 + V', 'Không có cách nào làm được gì']]
  },
  '饱': {
    collo: [['吃饱', 'ăn no'], ['吃不饱', 'ăn không no'],
            ['吃饱了', 'no rồi'], ['很饱', 'rất no'],
            ['吃饱了就睡', 'ăn no là ngủ']],
    patterns: [['吃 + 饱', 'Ăn no — 饱 là bổ ngữ kết quả'],
               ['饱 ↔ 饿', 'No ↔ đói (bài 4)']]
  },
  '为了': {
    collo: [['为了健康', 'vì sức khoẻ'], ['为了瘦一点儿', 'để gầy hơn chút'],
            ['为了照顾他', 'để chăm sóc anh ấy'], ['为了考试', 'vì kỳ thi'],
            ['为了学好汉语', 'để học tốt tiếng Trung']],
    patterns: [['为了 + mục đích，Sub + V', 'Vì, để … mà làm gì'],
               ['为了 (mục đích) ≠ 因为 (nguyên nhân)']]
  },
  '决定': {
    collo: [['做决定', 'đưa ra quyết định'], ['自己决定', 'tự quyết định'],
            ['决定每天跑步', 'quyết định chạy bộ mỗi ngày'], ['还没决定', 'vẫn chưa quyết'],
            ['决定去', 'quyết định đi']],
    patterns: [['Sub + 决定 + V (động từ)', 'Ai đó quyết định làm gì'],
               ['做 + 决定 (danh từ)', 'Đưa ra quyết định']]
  },
  '选择': {
    collo: [['选择时间', 'chọn thời gian'], ['选择地点', 'chọn địa điểm'],
            ['做选择', 'đưa ra lựa chọn'], ['选择适合自己的', 'chọn cái hợp với mình'],
            ['很难选择', 'rất khó chọn']],
    patterns: [['选择 + N (động từ)', 'Lựa chọn cái gì'],
               ['做 + 选择 (danh từ)', 'Đưa ra sự lựa chọn']]
  },
  '冬(天)': {
    collo: [['冬天很冷', 'mùa đông rất lạnh'], ['今年冬天', 'mùa đông năm nay'],
            ['冬天特别长', 'mùa đông đặc biệt dài'], ['过冬天', 'trải qua mùa đông'],
            ['冬天的衣服', 'quần áo mùa đông']],
    patterns: [['冬天 ↔ 夏天 (bài 5)', 'Mùa đông ↔ mùa hè'],
               ['春 · 夏 · 秋 · 冬 — bốn mùa đều thêm 天']]
  },
  '必须': {
    collo: [['必须要', 'nhất định phải'], ['必须少吃', 'buộc phải ăn ít'],
            ['必须根据情况', 'phải căn cứ tình hình'], ['必须做完', 'phải làm xong'],
            ['不必须', 'không bắt buộc']],
    patterns: [['Sub + 必须 + V', 'Ai đó bắt buộc phải làm gì'],
               ['必须 (yêu cầu khách quan) ≠ 应该 (nên, bài 13)']]
  },
  '根据': {
    collo: [['根据情况', 'căn cứ tình hình'], ['根据要求', 'theo yêu cầu'],
            ['根据自己的健康', 'dựa vào sức khoẻ của mình'], ['根据老师说的', 'theo lời thầy nói'],
            ['根据天气', 'tuỳ thời tiết']],
    patterns: [['根据 + N，Sub + V', 'Căn cứ vào cái gì mà làm gì'],
               ['根据 dẫn CĂN CỨ, không dẫn người: ✗ 根据他笑']]
  },
  '情况': {
    collo: [['健康情况', 'tình hình sức khoẻ'], ['根据情况', 'tuỳ tình hình'],
            ['生活情况', 'tình hình sinh hoạt'], ['了解情况', 'nắm tình hình'],
            ['情况不太好', 'tình hình không tốt lắm']],
    patterns: [['了解 + 情况', 'Tìm hiểu tình hình — 了解 là từ bài 9'],
               ['情 + 况', 'Tình (情) hình (况)']]
  },
  '口': {
    collo: [['口渴', 'khát nước'], ['一口水', 'một ngụm nước'],
            ['喝一口', 'uống một ngụm'], ['张开口', 'há miệng'],
            ['口很干', 'miệng rất khô']],
    patterns: [['口 + 渴', 'Khát — nghĩa đen là miệng khát'],
               ['口 (cái miệng, danh từ) và 口 (ngụm, lượng từ — bài 11)']]
  },
  '渴': {
    collo: [['口渴', 'khát nước'], ['渴了', 'khát rồi'],
            ['很渴', 'rất khát'], ['不渴', 'không khát'],
            ['渴得很', 'khát lắm']],
    patterns: [['Sub + 渴 + 了', 'Ai đó khát rồi'],
               ['渴 (khát) ≠ 饿 (đói) — 渴 uống, 饿 ăn']]
  }
};
