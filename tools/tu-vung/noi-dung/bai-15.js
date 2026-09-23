// Noi dung TU MOI bai 15 HSK4 (chu de: day con, khen che, tinh cach tre nho).
module.exports = {
  '弹钢琴': {
    collo: [['练习弹钢琴', 'luyện đàn dương cầm'], ['弹得很好', 'đàn rất hay'],
            ['一边弹钢琴一边唱歌', 'vừa đàn vừa hát'], ['学弹钢琴', 'học đàn piano'],
            ['弹了一个小时钢琴', 'đàn một tiếng']],
    patterns: [['弹 + 了 + thời lượng + 钢琴', '弹钢琴 là từ ly hợp: 弹了一小时钢琴 ✓'],
               ['弹 (đàn dây) ≠ 打 (đánh bóng) ≠ 吹 (thổi sáo)']]
  },
  '棒': {
    collo: [['太棒了', 'tuyệt quá'], ['你真棒', 'bạn giỏi thật'],
            ['表演得真棒', 'diễn hay thật'], ['棒极了', 'tuyệt cực'],
            ['成绩很棒', 'thành tích rất tốt']],
    patterns: [['太 + 棒 + 了', 'Tuyệt quá — lời khen khẩu ngữ'],
               ['棒 ≈ 好 / 厉害 (bài 11)', '棒 thiên khẩu ngữ, dùng khi khen']]
  },
  '孙子': {
    collo: [['我孙子', 'cháu nội tôi'], ['两个孙子', 'hai đứa cháu trai'],
            ['孙子孙女', 'cháu trai cháu gái'], ['带孙子', 'trông cháu'],
            ['孙子很可爱', 'cháu rất đáng yêu']],
    patterns: [['孙子 (cháu nội trai) / 孙女 (cháu nội gái)'],
               ['带 + 孙子', 'Trông cháu — việc của ông bà']]
  },
  '寒假': {
    collo: [['放寒假', 'nghỉ đông'], ['寒假去旅行', 'nghỉ đông đi du lịch'],
            ['寒假作业', 'bài tập nghỉ đông'], ['寒假前', 'trước kỳ nghỉ đông'],
            ['过寒假', 'nghỉ đông']],
    patterns: [['放 + 寒假 / 暑假', 'Nghỉ đông / nghỉ hè'],
               ['寒 + 假', 'Kỳ nghỉ (假) mùa lạnh (寒)']]
  },
  '父亲': {
    collo: [['我父亲', 'cha tôi'], ['父亲和母亲', 'cha và mẹ'],
            ['一位优秀的父亲', 'một người cha xuất sắc'], ['父亲节', 'ngày của cha'],
            ['像父亲一样', 'giống như cha']],
    patterns: [['父亲 ≈ 爸爸', '父亲 trang trọng, dùng khi viết; 母亲 là từ bài 10'],
               ['优秀 + 的 + 父亲', 'Người cha xuất sắc — 优秀 là từ bài 10']]
  },
  '闹钟': {
    collo: [['闹钟响了', 'báo thức reo'], ['定一个闹钟', 'đặt báo thức'],
            ['听不见闹钟', 'không nghe thấy báo thức'], ['关掉闹钟', 'tắt báo thức'],
            ['早上的闹钟', 'báo thức buổi sáng']],
    patterns: [['定 / 关 + 闹钟', 'Đặt / tắt báo thức'],
               ['闹 + 钟', 'Đồng hồ (钟) kêu (闹)']]
  },
  '响': {
    collo: [['闹钟响了', 'báo thức reo'], ['电话响了', 'điện thoại reo'],
            ['一直在响', 'cứ reo mãi'], ['响了好几遍', 'reo mấy lượt'],
            ['声音很响', 'tiếng rất to']],
    patterns: [['N + 响 + 了', 'Cái gì đó reo lên'],
               ['响 dùng cho tiếng chuông, điện thoại — không dùng cho người']]
  },
  '醒': {
    collo: [['睡醒', 'ngủ dậy'], ['把他叫醒', 'gọi anh ấy dậy'],
            ['醒得很早', 'tỉnh rất sớm'], ['还没醒', 'chưa tỉnh'],
            ['醒过来', 'tỉnh lại']],
    patterns: [['把 + ai + 叫醒', 'Gọi ai dậy — 醒 là bổ ngữ kết quả'],
               ['醒 ↔ 睡', 'Tỉnh ↔ ngủ']]
  },
  '赶': {
    collo: [['赶时间', 'gấp thời gian'], ['赶飞机', 'kịp chuyến bay'],
            ['赶回来', 'về kịp'], ['赶不上', 'không kịp'],
            ['赶作业', 'chạy đua làm bài']],
    patterns: [['赶 + 飞机 / 火车', 'Cho kịp chuyến bay, chuyến tàu'],
               ['赶得上 / 赶不上', 'Kịp / không kịp — bổ ngữ khả năng']]
  },
  '厕所': {
    collo: [['上厕所', 'đi vệ sinh'], ['公共厕所', 'nhà vệ sinh công cộng'],
            ['找厕所', 'tìm nhà vệ sinh'], ['厕所在哪儿', 'nhà vệ sinh ở đâu'],
            ['急着上厕所', 'mót đi vệ sinh']],
    patterns: [['上 + 厕所', 'Đi vệ sinh — dùng động từ 上'],
               ['厕所 ≈ 卫生间 (bài 14)', '卫生间 lịch sự hơn, dùng ở nhà và nơi sang']]
  },
  '批评': {
    collo: [['受到批评', 'bị phê bình'], ['批评他', 'phê bình anh ấy'],
            ['因为小事批评', 'vì việc nhỏ mà phê bình'], ['批评和表扬', 'phê bình và khen ngợi'],
            ['别批评孩子', 'đừng mắng con']],
    patterns: [['批评 + ai', 'Phê bình ai'],
               ['批评 ↔ 表扬', 'Phê bình ↔ khen ngợi']]
  },
  '弄': {
    collo: [['弄坏了', 'làm hỏng rồi'], ['弄清楚', 'làm cho rõ'],
            ['弄脏了', 'làm bẩn rồi'], ['弄得心情不好', 'làm cho tâm trạng xấu đi'],
            ['别乱弄', 'đừng nghịch bừa']],
    patterns: [['弄 + bổ ngữ kết quả', '弄坏, 弄脏 (bài 14), 弄清楚'],
               ['弄 thay được cho nhiều động từ cụ thể trong khẩu ngữ']]
  },
  '管理': {
    collo: [['管理时间', 'quản lý thời gian'], ['管理公司', 'quản lý công ty'],
            ['管理专业', 'chuyên ngành quản trị'], ['学会管理', 'học cách quản lý'],
            ['管理得很好', 'quản lý rất tốt']],
    patterns: [['管理 + N', 'Quản lý cái gì'],
               ['学会 + 管理 + 时间', 'Học cách quản lý thời gian']]
  },
  '打针': {
    collo: [['去医院打针', 'đến bệnh viện tiêm'], ['害怕打针', 'sợ tiêm'],
            ['不怕打针', 'không sợ tiêm'], ['打了一针', 'tiêm một mũi'],
            ['给孩子打针', 'tiêm cho trẻ']],
    patterns: [['打 + 了 + số + 针', '打针 là từ ly hợp: 打了一针 ✓'],
               ['害怕 + 打针', 'Sợ tiêm']]
  },
  '护士': {
    collo: [['一名护士', 'một y tá'], ['护士和医生', 'y tá và bác sĩ'],
            ['当护士', 'làm y tá'], ['成为护士', 'trở thành y tá'],
            ['和护士说', 'nói với y tá']],
    patterns: [['một + 名 + 护士', 'Lượng từ 名 cho người có nghề nghiệp'],
               ['当 / 成为 + 护士', 'Làm / trở thành y tá — 成为 là từ bài 8']]
  },
  '表扬': {
    collo: [['受到表扬', 'được khen'], ['表扬孩子', 'khen con'],
            ['鼓励和表扬', 'động viên và khen ngợi'], ['过多的表扬', 'khen quá nhiều'],
            ['表扬了他', 'đã khen anh ấy']],
    patterns: [['表扬 + ai (động từ)', 'Khen ngợi ai'],
               ['受到 + 表扬 (danh từ)', 'Được khen — 受到 là từ bài 5']]
  },
  '千万': {
    collo: [['千万别', 'tuyệt đối đừng'], ['千万不要', 'nhất thiết đừng'],
            ['千万小心', 'nhất định phải cẩn thận'], ['千万记住', 'nhớ cho kỹ'],
            ['千万别告诉她', 'tuyệt đối đừng nói cho cô ấy']],
    patterns: [['千万 + 别 / 不要 + V', 'Tuyệt đối đừng làm gì — lời dặn khẩn thiết'],
               ['✗ 千万去吧 → ✓ 千万别去', '千万 hầu như chỉ dùng trong câu phủ định, dặn dò']]
  },
  '怀疑': {
    collo: [['怀疑自己', 'nghi ngờ bản thân'], ['怀疑自己的能力', 'nghi ngờ năng lực mình'],
            ['不要怀疑', 'đừng nghi ngờ'], ['让人怀疑', 'khiến người ta nghi ngờ'],
            ['怀疑他说的话', 'nghi lời anh ta nói']],
    patterns: [['怀疑 + N / mệnh đề', 'Nghi ngờ cái gì / rằng…'],
               ['怀疑 ↔ 相信', 'Nghi ngờ ↔ tin tưởng']]
  },
  '故意': {
    collo: [['不是故意的', 'không phải cố ý'], ['故意让他生气', 'cố tình chọc anh ấy giận'],
            ['故意敲打', 'cố tình gõ'], ['故意不说', 'cố tình không nói'],
            ['故意的', 'cố ý đấy']],
    patterns: [['Sub + 故意 + V', 'Ai đó cố tình làm gì'],
               ['不是故意的', 'Không phải cố ý — câu xin lỗi thường dùng']]
  },
  '敲': {
    collo: [['敲门', 'gõ cửa'], ['敲了三下', 'gõ ba cái'],
            ['故意敲打', 'cố tình gõ'], ['轻轻地敲', 'gõ khẽ'],
            ['有人敲门', 'có người gõ cửa']],
    patterns: [['敲 + 门', 'Gõ cửa'],
               ['敲 + 了 + số + 下', 'Gõ mấy cái — 下 là lượng từ động tác']]
  },
  '整理': {
    collo: [['整理房间', 'dọn phòng'], ['整理材料', 'sắp xếp tài liệu'],
            ['整理东西', 'dọn đồ'], ['整理整理', 'dọn dẹp một chút'],
            ['整理得很干净', 'dọn rất sạch']],
    patterns: [['整理 + N', 'Dọn dẹp, sắp xếp cái gì'],
               ['整理整理', 'Dạng lặp ABAB — làm nhẹ đi, thân mật hơn']]
  },
  '合适': {
    collo: [['合适的公司', 'công ty phù hợp'], ['不太合适', 'không hợp lắm'],
            ['合适的方法', 'cách làm phù hợp'], ['大小合适', 'vừa cỡ'],
            ['很合适', 'rất hợp']],
    patterns: [['N + 对 + ai + 合适', 'Cái gì hợp với ai'],
               ['合适 ≠ 适合', '合适 là tính từ (很合适); 适合 là động từ (适合我)']]
  },
  '骗': {
    collo: [['骗人', 'lừa người'], ['别骗我', 'đừng lừa tôi'],
            ['骗孩子', 'lừa trẻ con'], ['被骗了', 'bị lừa'],
            ['骗钱', 'lừa tiền']],
    patterns: [['骗 + ai', 'Lừa ai'],
               ['被 + 骗 + 了', 'Bị lừa — câu bị động']]
  },
  '儿童': {
    collo: [['七岁左右的儿童', 'trẻ khoảng bảy tuổi'], ['儿童节', 'ngày thiếu nhi'],
            ['儿童缺少判断能力', 'trẻ thiếu năng lực phán đoán'], ['儿童读物', 'sách thiếu nhi'],
            ['儿童教育', 'giáo dục trẻ em']],
    patterns: [['儿童 ≈ 孩子', '儿童 trang trọng, dùng trong văn viết và tên gọi chính thức'],
               ['儿童 + 节 / 教育', 'Ngày thiếu nhi, giáo dục trẻ em']]
  },
  '假': {
    collo: [['说假话', 'nói dối'], ['是假的', 'là giả'],
            ['真的还是假的', 'thật hay giả'], ['假消息', 'tin giả'],
            ['假笑', 'cười giả tạo']],
    patterns: [['假 (jiǎ, giả) ↔ 真 (thật)'],
               ['假 (jiǎ, giả) ≠ 假 (jià, kỳ nghỉ — 寒假)']]
  },
  '左右': {
    collo: [['七岁左右', 'khoảng bảy tuổi'], ['三天左右', 'khoảng ba ngày'],
            ['500米左右', 'khoảng 500 mét'], ['一个星期左右', 'chừng một tuần'],
            ['十点左右', 'khoảng mười giờ']],
    patterns: [['số lượng + 左右', 'Khoảng chừng — 左右 đứng SAU số lượng'],
               ['✗ 左右三天 → ✓ 三天左右', 'Ngược với 大约 / 大概 đứng trước']]
  },
  '懒': {
    collo: [['太懒了', 'lười quá'], ['懒得做饭', 'lười nấu cơm'],
            ['很懒', 'rất lười'], ['别懒', 'đừng lười'],
            ['用"懒"批评他', 'lấy chữ "lười" mà mắng cậu ấy']],
    patterns: [['懒得 + V', 'Lười không muốn làm gì'],
               ['懒 ↔ 努力', 'Lười ↔ chăm chỉ']]
  },
  '笨': {
    collo: [['并不笨', 'không hề ngốc'], ['笨办法', 'cách vụng'],
            ['太笨了', 'ngốc quá'], ['觉得自己笨', 'thấy mình dốt'],
            ['笨孩子', 'đứa trẻ chậm']],
    patterns: [['并不 + 笨', 'Không hề ngốc — 并不 là từ bài 4'],
               ['笨 ↔ 聪明', 'Ngốc ↔ thông minh — tránh dùng để mắng trẻ']]
  },
  '粗心': {
    collo: [['太粗心了', 'cẩu thả quá'], ['粗心大意', 'cẩu thả đại khái'],
            ['做事粗心', 'làm việc cẩu thả'], ['因为粗心出错', 'sai vì cẩu thả'],
            ['别这么粗心', 'đừng cẩu thả thế']],
    patterns: [['Sub + 太 + 粗心 + 了', 'Ai đó quá cẩu thả'],
               ['粗心 ↔ 仔细 (bài 12)', 'Cẩu thả ↔ tỉ mỉ']]
  },
  '骄傲': {
    collo: [['为你骄傲', 'tự hào về bạn'], ['别骄傲', 'đừng kiêu'],
            ['比较骄傲', 'khá kiêu ngạo'], ['取得成绩别骄傲', 'có thành tích đừng kiêu'],
            ['骄傲的样子', 'vẻ kiêu ngạo']],
    patterns: [['为 + ai + 骄傲 (nghĩa tốt)', 'Tự hào về ai'],
               ['Sub + 很 + 骄傲 (nghĩa xấu)', 'Ai đó kiêu ngạo — hai nghĩa trái nhau']]
  },
  '害羞': {
    collo: [['有点儿害羞', 'hơi ngượng'], ['害羞的孩子', 'đứa trẻ nhút nhát'],
            ['别害羞', 'đừng ngại'], ['性格害羞', 'tính cách rụt rè'],
            ['害羞地笑', 'cười ngượng nghịu']],
    patterns: [['Sub + 有点儿 + 害羞', 'Ai đó hơi ngượng ngùng'],
               ['害 + 羞', 'Mắc (害) thẹn (羞) — ghép nghĩa dễ nhớ']]
  }
};
