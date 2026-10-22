// Noi dung TU MOI bai 3 HSK4 (chu de: xin viec — phong van).
module.exports = {
  '挺': {
    collo: [['挺好的', 'khá tốt'], ['挺容易的', 'khá dễ'], ['挺喜欢', 'khá thích'],
            ['挺忙的', 'khá bận'], ['挺有意思的', 'khá thú vị']],
    patterns: [['挺 + Adj + 的', 'Rất / khá … (khẩu ngữ, thường có 的 ở cuối)'],
               ['✗ 挺非常好 → ✓ 挺好的', '挺 không dùng chung với phó từ mức độ khác']]
  },
  '紧张': {
    collo: [['有点儿紧张', 'hơi hồi hộp'], ['别紧张', 'đừng căng thẳng'], ['很紧张', 'rất hồi hộp'],
            ['时间很紧张', 'thời gian rất gấp'], ['工作紧张', 'công việc căng thẳng']],
    patterns: [['Sub + (有点儿) 紧张', 'Ai đó (hơi) hồi hộp'],
               ['时间 / 工作 + 紧张', 'Thời gian, công việc gấp gáp — không phải cảm xúc']]
  },
  '信心': {
    collo: [['有信心', 'có lòng tin'], ['没信心', 'không tự tin'], ['对自己有信心', 'tự tin vào bản thân'],
            ['对工作有信心', 'tự tin vào công việc'], ['增加信心', 'tăng thêm tự tin']],
    patterns: [['对 + N + 有/没有信心', 'Có / không có lòng tin vào cái gì'],
               ['✗ 我很信心 → ✓ 我很有信心', '信心 là danh từ, phải đi với 有']]
  },
  '能力': {
    collo: [['有能力', 'có năng lực'], ['能力强', 'năng lực giỏi'], ['工作能力', 'năng lực làm việc'],
            ['提高能力', 'nâng cao năng lực'], ['相信自己的能力', 'tin vào năng lực của mình']],
    patterns: [['Sub + 有 / 没有 + 能力', 'Ai đó có / không có năng lực'],
               ['提高 + 能力', 'Nâng cao năng lực']]
  },
  '招聘': {
    collo: [['招聘会', 'hội chợ tuyển dụng'], ['负责招聘', 'phụ trách tuyển dụng'],
            ['这次招聘', 'đợt tuyển dụng này'], ['招聘新人', 'tuyển người mới'],
            ['招聘广告', 'quảng cáo tuyển dụng']],
    patterns: [['招聘 + N (người)', 'Tuyển dụng ai'],
               ['负责 + 招聘', 'Phụ trách việc tuyển dụng']]
  },
  '提供': {
    collo: [['提供帮助', 'cung cấp sự giúp đỡ'], ['提供材料', 'cung cấp tài liệu'],
            ['提供机会', 'tạo cơ hội'], ['提供工作机会', 'tạo cơ hội việc làm'],
            ['为大家提供', 'cung cấp cho mọi người']],
    patterns: [['Sub + 提供 + N', 'Ai đó cung cấp cái gì'],
               ['为 + ai + 提供 + N', 'Cung cấp cái gì cho ai']]
  },
  '负责': {
    collo: [['负责招聘', 'phụ trách tuyển dụng'], ['负责这件事', 'phụ trách việc này'],
            ['由他负责', 'do anh ấy phụ trách'], ['负责人', 'người phụ trách'],
            ['很负责', 'rất có trách nhiệm']],
    patterns: [['Sub + 负责 + N/V', 'Ai đó phụ trách việc gì'],
               ['由 + ai + 负责', 'Do ai đó phụ trách']]
  },
  '本来': {
    collo: [['本来想', 'vốn định'], ['本来不会', 'vốn không biết'], ['本来应该', 'lẽ ra phải'],
            ['本来就', 'vốn dĩ đã'], ['本来是……的', 'vốn là…']],
    patterns: [['本来 + V，后来 + V', 'Lúc đầu …, về sau …'],
               ['本来 + 就 + Adj', 'Vốn dĩ đã …']]
  },
  '应聘': {
    collo: [['来应聘', 'đến ứng tuyển'], ['应聘的人', 'người ứng tuyển'], ['应聘时', 'khi ứng tuyển'],
            ['应聘这个工作', 'ứng tuyển công việc này'], ['应聘成功', 'ứng tuyển thành công']],
    patterns: [['Sub + 应聘 + (vị trí)', 'Ai đó ứng tuyển vị trí nào'],
               ['应聘 ≠ 招聘', '应聘 là người XIN việc, 招聘 là công ty TUYỂN người']]
  },
  '材料': {
    collo: [['准备材料', 'chuẩn bị hồ sơ'], ['提供材料', 'cung cấp tài liệu'],
            ['这些材料', 'những tài liệu này'], ['申请材料', 'hồ sơ xin việc'],
            ['交材料', 'nộp hồ sơ']],
    patterns: [['准备 / 交 + 材料', 'Chuẩn bị / nộp hồ sơ'],
               ['申请 + 材料', 'Hồ sơ xin việc, hồ sơ đăng ký']]
  },
  '符合': {
    collo: [['符合要求', 'phù hợp yêu cầu'], ['符合条件', 'đủ điều kiện'], ['符合标准', 'đạt tiêu chuẩn'],
            ['比较符合', 'khá phù hợp'], ['不符合', 'không phù hợp']],
    patterns: [['Sub + 符合 + 要求 / 条件', 'Cái gì đó phù hợp với yêu cầu, điều kiện'],
               ['✗ 符合于要求 → ✓ 符合要求', '符合 mang tân ngữ trực tiếp, không cần giới từ']]
  },
  '通知': {
    collo: [['通知他们', 'báo cho họ'], ['发通知', 'gửi thông báo'], ['收到通知', 'nhận được thông báo'],
            ['通知一下', 'báo một tiếng'], ['邮件通知', 'thông báo qua email']],
    patterns: [['通知 + ai + (V)', 'Báo cho ai (làm gì)'],
               ['发 / 收到 + 通知 (danh từ)', 'Gửi / nhận được thông báo']]
  },
  '律师': {
    collo: [['当律师', 'làm luật sư'], ['做律师', 'làm nghề luật sư'], ['王律师', 'luật sư Vương'],
            ['律师专业', 'chuyên ngành luật sư'], ['找律师', 'tìm luật sư']],
    patterns: [['当 / 做 + 律师', 'Làm luật sư'],
               ['họ + 律师', 'Cách xưng hô: Luật sư Vương, Luật sư Lý…']]
  },
  '专业': {
    collo: [['法律专业', 'chuyên ngành luật'], ['学的专业', 'chuyên ngành đã học'],
            ['专业不一样', 'chuyên ngành khác nhau'], ['选专业', 'chọn chuyên ngành'],
            ['专业知识', 'kiến thức chuyên môn']],
    patterns: [['Sub + 学 + N + 专业', 'Ai đó học chuyên ngành gì'],
               ['专业 + 知识 / 水平', 'Kiến thức / trình độ chuyên môn']]
  },
  '另外': {
    collo: [['另外一条', 'một cái khác'], ['另外一个人', 'một người khác'],
            ['另外提供', 'cung cấp thêm'], ['另外的', 'cái khác'],
            ['另外准备', 'chuẩn bị thêm']],
    patterns: [['另外 + 一 + lượng từ + N', 'Một … khác'],
               ['……。另外，……', '…. Ngoài ra, … (nối câu)']]
  },
  '收入': {
    collo: [['收入不错', 'thu nhập khá'], ['月收入', 'thu nhập hằng tháng'], ['收入高', 'thu nhập cao'],
            ['增加收入', 'tăng thu nhập'], ['一年的收入', 'thu nhập một năm']],
    patterns: [['Sub 的 + 收入 + 高 / 不错', 'Thu nhập của ai cao / khá'],
               ['增加 + 收入', 'Tăng thu nhập']]
  },
  '咱们': {
    collo: [['咱们一起', 'chúng mình cùng'], ['咱们走吧', 'chúng mình đi thôi'],
            ['咱们俩', 'hai chúng mình'], ['咱们班', 'lớp mình'],
            ['咱们同学聚会', 'buổi họp lớp của chúng mình']],
    patterns: [['咱们 = 我 + 你(们)', 'Bao gồm cả người nghe — khác 我们 (có thể không gồm người nghe)'],
               ['咱们 + 一起 + V', 'Chúng mình cùng làm gì']]
  },
  '安排': {
    collo: [['安排时间', 'sắp xếp thời gian'], ['安排工作', 'sắp xếp công việc'],
            ['重新安排', 'sắp xếp lại'], ['安排得很好', 'sắp xếp rất tốt'],
            ['安排得很紧张', 'sắp xếp rất sát sao']],
    patterns: [['Sub + 安排 + N', 'Ai đó sắp xếp cái gì'],
               ['安排 + 得 + Adj', 'Sắp xếp thế nào (bổ ngữ trạng thái)']]
  },
  '首先': {
    collo: [['首先要', 'trước hết phải'], ['首先想到', 'nghĩ đến đầu tiên'],
            ['首先介绍', 'trước tiên giới thiệu'], ['首先应该', 'trước hết nên'],
            ['首先……其次……', 'trước hết… thứ hai…']],
    patterns: [['首先……，其次……，最后……', 'Trước hết…, thứ hai…, cuối cùng…'],
               ['首先 + V', 'Trước tiên làm gì']]
  },
  '正式': {
    collo: [['正式的衣服', 'trang phục trang trọng'], ['正式上班', 'chính thức đi làm'],
            ['穿得正式', 'ăn mặc trang trọng'], ['正式通知', 'thông báo chính thức'],
            ['正式开始', 'chính thức bắt đầu']],
    patterns: [['正式的 + N', '… chính thức, … trang trọng'],
               ['V + 得 + 正式', 'Ăn mặc / cư xử một cách trang trọng']]
  },
  '留': {
    collo: [['留下印象', 'để lại ấn tượng'], ['留下好印象', 'để lại ấn tượng tốt'],
            ['留在家里', 'ở lại nhà'], ['留给你', 'để lại cho bạn'],
            ['留时间', 'dành thời gian']],
    patterns: [['给 + ai + 留下 + 印象', 'Để lại ấn tượng cho ai'],
               ['留 + 给 + ai', 'Để lại cho ai']]
  },
  '其次': {
    collo: [['其次才', 'sau đó mới'], ['其次要', 'tiếp theo phải'], ['其次是', 'tiếp theo là'],
            ['其次考虑', 'cân nhắc sau'], ['首先……其次……', 'trước hết… tiếp theo…']],
    patterns: [['首先……，其次……', 'Trước hết…, tiếp theo…'],
               ['其次 + 才 + V', 'Sau đó mới làm gì']]
  },
  '诚实': {
    collo: [['很诚实', 'rất thành thật'], ['诚实的人', 'người thành thật'],
            ['对人诚实', 'thành thật với người khác'], ['不诚实', 'không thành thật'],
            ['回答要诚实', 'trả lời phải thành thật']],
    patterns: [['Sub + 很 / 不 + 诚实', 'Ai đó rất / không thành thật'],
               ['诚实地 + V', 'Làm việc gì một cách thành thật']]
  },
  '改变': {
    collo: [['改变看法', 'thay đổi cách nhìn'], ['改变主意', 'đổi ý'], ['很难改变', 'rất khó thay đổi'],
            ['改变计划', 'thay đổi kế hoạch'], ['改变自己', 'thay đổi bản thân']],
    patterns: [['Sub + 改变 + N', 'Ai đó thay đổi cái gì'],
               ['很难 + 改变', 'Rất khó thay đổi']]
  },
  '感觉': {
    collo: [['感觉怎么样', 'cảm thấy thế nào'], ['感觉不错', 'cảm thấy khá ổn'],
            ['感觉和判断', 'cảm nhận và đánh giá'], ['有一种感觉', 'có một cảm giác'],
            ['感觉不是很难', 'cảm thấy không khó lắm']],
    patterns: [['Sub + 感觉 + Adj / mệnh đề (động từ)', 'Ai đó cảm thấy thế nào'],
               ['……的 + 感觉 (danh từ)', 'Cảm giác …']]
  },
  '判断': {
    collo: [['做判断', 'đưa ra nhận định'], ['判断对错', 'phán đoán đúng sai'],
            ['容易判断', 'dễ phán đoán'], ['判断得很准', 'phán đoán rất chuẩn'],
            ['感觉和判断', 'cảm nhận và đánh giá']],
    patterns: [['Sub + 判断 + mệnh đề', 'Ai đó phán đoán rằng…'],
               ['做 + 判断 (danh từ)', 'Đưa ra nhận định']]
  },
  '顾客': {
    collo: [['老顾客', 'khách quen'], ['顾客满意', 'khách hàng hài lòng'],
            ['顾客的要求', 'yêu cầu của khách'], ['为顾客服务', 'phục vụ khách hàng'],
            ['给顾客留下印象', 'để lại ấn tượng cho khách']],
    patterns: [['为 + 顾客 + 服务', 'Phục vụ khách hàng'],
               ['给 + 顾客 + 留下印象', 'Để lại ấn tượng cho khách']]
  },
  '准时': {
    collo: [['准时到', 'đến đúng giờ'], ['准时上班', 'đi làm đúng giờ'], ['特别准时', 'cực kỳ đúng giờ'],
            ['很准时', 'rất đúng giờ'], ['准时出发', 'xuất phát đúng giờ']],
    patterns: [['Sub + 准时 + V', 'Ai đó làm gì đúng giờ'],
               ['Sub + 很 / 特别 + 准时', 'Ai đó rất đúng giờ']]
  },
  '不管': {
    collo: [['不管做什么', 'bất kể làm gì'], ['不管怎么样', 'dù thế nào'],
            ['不管多忙', 'dù bận đến mấy'], ['不管……都……', 'bất kể… đều…'],
            ['不管是……还是……', 'bất kể là… hay là…']],
    patterns: [['不管 + từ nghi vấn / A 还是 B，都 / 也 + V', 'Bất kể … đều …'],
               ['✗ 不管很忙，都…… → ✓ 不管多忙，都……', 'Vế trước 不管 phải mang ý "không xác định"']]
  },
  '与': {
    collo: [['与别人约会', 'hẹn gặp người khác'], ['与工作有关', 'liên quan đến công việc'],
            ['与朋友', 'với bạn bè'], ['与此同时', 'đồng thời với việc đó'],
            ['与……有关', 'có liên quan đến…']],
    patterns: [['A 与 B', 'A và B (văn viết, trang trọng hơn 和 / 跟)'],
               ['与 + N + 有关', 'Có liên quan đến cái gì']]
  },
  '约会': {
    collo: [['有约会', 'có hẹn'], ['与别人约会', 'hẹn gặp người khác'],
            ['约会时间', 'thời gian hẹn'], ['去约会', 'đi hẹn hò'],
            ['又有约会', 'lại có hẹn']],
    patterns: [['跟 / 与 + ai + 约会', 'Hẹn gặp, hẹn hò với ai'],
               ['有 + 约会 (danh từ)', 'Có hẹn']]
  }
};
