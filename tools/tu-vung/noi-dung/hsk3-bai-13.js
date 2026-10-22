// Noi dung TU MOI HSK3 bai 13 (chu de: gia dinh, gap go, thoi quen sinh hoat).
module.exports = {
  '终于': {
    collo: [['终于到了', 'cuối cùng cũng tới'], ['终于回来了', 'cuối cùng đã về'],
            ['终于成功了', 'cuối cùng đã thành công'], ['终于找到了', 'cuối cùng cũng tìm thấy'],
            ['等了很久终于来了', 'đợi lâu cuối cùng cũng đến']],
    patterns: [['终于 + V + 了', 'Cuối cùng cũng … — sau một quá trình chờ đợi'],
               ['终于 (sau chờ đợi, kết quả tốt) ≠ 最后 (chỉ thứ tự cuối, bài 9)']]
  },
  '爷爷': {
    collo: [['爷爷奶奶', 'ông bà nội'], ['看看爷爷', 'thăm ông'],
            ['爷爷的礼物', 'quà của ông'], ['我爷爷', 'ông nội tôi'],
            ['爷爷八十岁了', 'ông tám mươi tuổi rồi']],
    patterns: [['爷爷 (ông nội) / 奶奶 (bà nội)', 'Bên nội — bên ngoại là 外公 外婆'],
               ['爷爷奶奶', 'Ông bà — hay đi thành cặp']]
  },
  '礼物': {
    collo: [['送礼物', 'tặng quà'], ['买礼物', 'mua quà'],
            ['收到礼物', 'nhận được quà'], ['生日礼物', 'quà sinh nhật'],
            ['一个礼物', 'một món quà']],
    patterns: [['送 + ai + 礼物', 'Tặng quà cho ai'],
               ['礼 + 物', 'Đồ vật (物) dùng làm lễ (礼)']]
  },
  '奶奶': {
    collo: [['奶奶做的菜', 'món bà nấu'], ['看看奶奶', 'thăm bà'],
            ['我奶奶', 'bà nội tôi'], ['跟奶奶聊天儿', 'trò chuyện với bà'],
            ['奶奶很喜欢', 'bà rất thích']],
    patterns: [['奶奶 + 做的 + N', 'Món bà làm'],
               ['跟 + 奶奶 + 聊天儿', 'Trò chuyện với bà — 聊天儿 là từ bài 6']]
  },
  '遇到': {
    collo: [['在路上遇到', 'gặp trên đường'], ['遇到老同学', 'gặp bạn học cũ'],
            ['遇到问题', 'gặp vấn đề'], ['没想到遇到你', 'không ngờ gặp bạn'],
            ['经常遇到', 'thường gặp']],
    patterns: [['在 + nơi chốn + 遇到 + ai', 'Tình cờ gặp ai ở đâu'],
               ['遇到 (tình cờ gặp) ≠ 见面 (hẹn gặp, bài 8)']]
  },
  '一边': {
    collo: [['一边吃一边看', 'vừa ăn vừa xem'], ['一边走一边聊', 'vừa đi vừa nói'],
            ['边说边笑', 'vừa nói vừa cười'], ['一边听一边写', 'vừa nghe vừa viết'],
            ['一边工作一边学习', 'vừa làm vừa học']],
    patterns: [['一边 + V1 + 一边 + V2', 'Vừa làm A vừa làm B — cùng lúc'],
               ['边……边…… là dạng rút gọn của 一边……一边……']]
  },
  '过去': {
    collo: [['过去的事', 'chuyện quá khứ'], ['说过去的事', 'kể chuyện xưa'],
            ['五年过去了', 'năm năm trôi qua'], ['过去的时候', 'lúc trước'],
            ['忘了过去', 'quên đi quá khứ']],
    patterns: [['thời lượng + 过去了', 'Bao lâu đã trôi qua'],
               ['过去 (quá khứ) ≠ 以前 (trước đây, bài 7) — 过去 nhấn khoảng thời gian đã qua']]
  },
  '一般': {
    collo: [['一般来说', 'nói chung thì'], ['一般在家', 'thường ở nhà'],
            ['周末一般', 'cuối tuần thường'], ['一般的东西', 'đồ bình thường'],
            ['成绩一般', 'thành tích bình thường']],
    patterns: [['一般 + Sub + V (phó từ)', 'Thường thì ai đó …'],
               ['一般 (bình thường, tính từ)', '成绩一般 — kết quả tàm tạm']]
  },
  '愿意': {
    collo: [['愿意帮忙', 'sẵn lòng giúp'], ['不愿意', 'không muốn'],
            ['更愿意', 'thích hơn'], ['愿意去', 'muốn đi'],
            ['你愿意吗', 'bạn có muốn không']],
    patterns: [['Sub + 愿意 + V', 'Ai đó bằng lòng, sẵn sàng làm gì'],
               ['愿意 (bằng lòng) ≠ 想 (muốn) — 愿意 nhấn sự đồng ý']]
  },
  '起来': {
    collo: [['站起来', 'đứng dậy'], ['坐起来', 'ngồi dậy'],
            ['拿起来', 'cầm lên'], ['早点儿起来', 'dậy sớm chút'],
            ['看起来很好', 'trông rất tốt']],
    patterns: [['V + 起来', 'Bổ ngữ xu hướng — hướng lên: 站起来, 拿起来'],
               ['看起来 + Adj', 'Nhìn thì có vẻ … — nghĩa mở rộng']]
  },
  '应该': {
    collo: [['应该休息', 'nên nghỉ ngơi'], ['不应该', 'không nên'],
            ['应该多出去', 'nên ra ngoài nhiều hơn'], ['应该到了', 'lẽ ra đã đến rồi'],
            ['你应该知道', 'bạn nên biết']],
    patterns: [['Sub + 应该 + V', 'Ai đó nên làm gì'],
               ['应该 vừa là "nên", vừa là "chắc là": 他应该到了']]
  },
  '生活': {
    collo: [['生活很有意思', 'cuộc sống rất thú vị'], ['生活习惯', 'thói quen sinh hoạt'],
            ['美好的生活', 'cuộc sống tốt đẹp'], ['生活在北京', 'sống ở Bắc Kinh'],
            ['生活很快乐', 'cuộc sống vui vẻ']],
    patterns: [['生活 + 在 + nơi chốn (động từ)', 'Sống ở đâu'],
               ['……的 + 生活 (danh từ)', 'Cuộc sống thế nào']]
  },
  '校长': {
    collo: [['方校长', 'hiệu trưởng Phương'], ['当校长', 'làm hiệu trưởng'],
            ['校长的办公室', 'văn phòng hiệu trưởng'], ['找校长', 'tìm hiệu trưởng'],
            ['校长说', 'hiệu trưởng nói']],
    patterns: [['họ + 校长', 'Cách gọi: hiệu trưởng Phương…'],
               ['校 + 长', 'Người đứng đầu (长) trường (校) — cùng kiểu 班长']]
  },
  '坏': {
    collo: [['累坏了', 'mệt lả'], ['忙坏了', 'bận tối mắt'],
            ['电视坏了', 'tivi hỏng rồi'], ['饿坏了', 'đói lả'],
            ['坏习惯', 'thói quen xấu']],
    patterns: [['Adj + 坏了', 'Đến mức … quá: 累坏了, 饿坏了'],
               ['N + 坏了', 'Cái gì đó hỏng rồi: 电视坏了']]
  },
  '经常': {
    collo: [['经常来', 'thường đến'], ['经常锻炼', 'thường tập thể dục'],
            ['经常在一起', 'thường ở bên nhau'], ['经常迟到', 'hay đến muộn'],
            ['不经常', 'không thường xuyên']],
    patterns: [['Sub + 经常 + V', 'Ai đó thường xuyên làm gì'],
               ['经常 ≈ 总是 (bài 4)', '总是 mạnh hơn: không lúc nào không']]
  }
};
