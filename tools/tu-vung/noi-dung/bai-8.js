// Noi dung TU MOI bai 8 HSK4 (chu de: mau sac, tam trang, thai do song).
module.exports = {
  '巧克力': {
    collo: [['吃巧克力', 'ăn sô cô la'], ['一块巧克力', 'một miếng sô cô la'],
            ['一盒巧克力', 'một hộp sô cô la'], ['喜欢吃巧克力', 'thích ăn sô cô la'],
            ['送巧克力', 'tặng sô cô la']],
    patterns: [['một + 块 / 盒 + 巧克力', 'Một miếng / một hộp sô cô la'],
               ['送 + ai + 巧克力', 'Tặng ai sô cô la']]
  },
  '亲戚': {
    collo: [['亲戚朋友', 'họ hàng bạn bè'], ['亲戚家', 'nhà họ hàng'],
            ['走亲戚', 'đi thăm họ hàng'], ['远房亲戚', 'họ hàng xa'],
            ['送给亲戚', 'tặng cho họ hàng']],
    patterns: [['走 + 亲戚', 'Đi thăm họ hàng (dịp lễ tết)'],
               ['亲戚 ≠ 朋友', '亲戚 là người cùng huyết thống hoặc hôn nhân']]
  },
  '伤心': {
    collo: [['很伤心', 'rất đau lòng'], ['伤心难过', 'buồn bã đau lòng'],
            ['感到伤心', 'cảm thấy đau lòng'], ['伤心地哭了', 'khóc đau đớn'],
            ['别伤心', 'đừng buồn']],
    patterns: [['Sub + 很 / 感到 + 伤心', 'Ai đó rất đau lòng'],
               ['伤 + 心', 'Tổn thương (伤) trái tim (心) — ghép nghĩa dễ nhớ']]
  },
  '使': {
    collo: [['使人愉快', 'khiến người ta vui'], ['使空气新鲜', 'làm không khí trong lành'],
            ['使他明白', 'khiến anh ấy hiểu ra'], ['使她喜欢我', 'khiến cô ấy thích tôi'],
            ['使生活更好', 'làm cuộc sống tốt hơn']],
    patterns: [['A + 使 + B + V / Adj', 'A khiến B thế nào (câu kiêm ngữ)'],
               ['✗ 听完这件事，使我明白 → ✓ 这件事使我明白', '使 phải có CHỦ NGỮ đứng trước']]
  },
  '心情': {
    collo: [['心情好', 'tâm trạng tốt'], ['心情不好', 'tâm trạng không tốt'],
            ['心情变得愉快', 'tâm trạng trở nên vui vẻ'], ['放松心情', 'thư giãn tâm trạng'],
            ['影响心情', 'ảnh hưởng tâm trạng']],
    patterns: [['心情 + 好 / 不好', 'Tâm trạng tốt / không tốt'],
               ['使 / 让 + 心情 + 变得 + Adj', 'Khiến tâm trạng trở nên thế nào']]
  },
  '愉快': {
    collo: [['心情愉快', 'tâm trạng vui vẻ'], ['感觉愉快', 'cảm thấy vui'],
            ['愉快的一天', 'một ngày vui vẻ'], ['过得愉快', 'sống vui vẻ'],
            ['合作愉快', 'hợp tác vui vẻ']],
    patterns: [['心情 / 生活 + 愉快', 'Tâm trạng, cuộc sống vui vẻ'],
               ['愉快 ≈ 高兴', '愉快 chỉ trạng thái kéo dài; 高兴 chỉ lúc đó']]
  },
  '景色': {
    collo: [['景色真美', 'phong cảnh thật đẹp'], ['这里的景色', 'phong cảnh nơi đây'],
            ['看景色', 'ngắm cảnh'], ['美丽的景色', 'cảnh đẹp'],
            ['山上的景色', 'cảnh trên núi']],
    patterns: [['nơi chốn + 的景色', 'Phong cảnh của nơi nào'],
               ['景色 + 美 / 漂亮', 'Cảnh đẹp — không nói 景色好看']]
  },
  '放松': {
    collo: [['放松一下', 'thư giãn một chút'], ['放松心情', 'thả lỏng tâm trạng'],
            ['放松自己', 'thư giãn bản thân'], ['好久没这么放松了', 'lâu rồi không thoải mái thế'],
            ['让身体放松', 'cho cơ thể thả lỏng']],
    patterns: [['放松 + 心情 / 自己 / 身体', 'Thư giãn tâm trạng, bản thân, cơ thể'],
               ['放松 ↔ 紧张', 'Thả lỏng ↔ căng thẳng (bài 3)']]
  },
  '压力': {
    collo: [['有压力', 'có áp lực'], ['压力很大', 'áp lực rất lớn'],
            ['工作压力', 'áp lực công việc'], ['减少压力', 'giảm áp lực'],
            ['没有压力', 'không có áp lực']],
    patterns: [['压力 + 大 / 小', 'Áp lực lớn / nhỏ — không nói 压力多'],
               ['给 + ai + 压力', 'Gây áp lực cho ai']]
  },
  '回忆': {
    collo: [['回忆过去', 'hồi tưởng quá khứ'], ['美好的回忆', 'kỷ niệm đẹp'],
            ['回忆那次比赛', 'nhớ lại trận đấu đó'], ['留下回忆', 'để lại kỷ niệm'],
            ['值得回忆', 'đáng để nhớ']],
    patterns: [['Sub + 回忆 + N (động từ)', 'Ai đó hồi tưởng về cái gì'],
               ['美好的 + 回忆 (danh từ)', 'Kỷ niệm đẹp']]
  },
  '发生': {
    collo: [['发生变化', 'xảy ra thay đổi'], ['发生什么事', 'xảy ra chuyện gì'],
            ['事情发生了', 'chuyện đã xảy ra'], ['发生意外', 'xảy ra bất trắc'],
            ['刚刚发生', 'vừa mới xảy ra']],
    patterns: [['N + 发生了 + 变化 / 事情', 'Cái gì đó xảy ra thay đổi, sự việc'],
               ['✗ 他发生了车祸 → ✓ 他出了车祸', '发生 dùng cho SỰ VIỆC, chủ ngữ không phải người']]
  },
  '成为': {
    collo: [['成为过去', 'trở thành quá khứ'], ['成为律师', 'trở thành luật sư'],
            ['成为好朋友', 'trở thành bạn tốt'], ['成为可能', 'trở nên khả thi'],
            ['终于成为', 'cuối cùng đã trở thành']],
    patterns: [['A + 成为 + B', 'A trở thành B'],
               ['成为 ≠ 变成', '成为 dùng cho thân phận, vai trò; 变成 cho hình thái']]
  },
  '只要': {
    collo: [['只要……就……', 'chỉ cần… thì…'], ['只要你好好儿准备', 'chỉ cần bạn chuẩn bị kỹ'],
            ['只要有心', 'chỉ cần có lòng'], ['只要努力', 'chỉ cần cố gắng'],
            ['只要不下雨', 'chỉ cần trời không mưa']],
    patterns: [['只要 + mệnh đề，就 + mệnh đề', 'Chỉ cần … thì … (điều kiện đủ)'],
               ['只要……就…… ≠ 只有……才……', '只要 là điều kiện ĐỦ, 只有 là điều kiện DUY NHẤT']]
  },
  '师傅': {
    collo: [['谢谢师傅', 'cảm ơn bác tài'], ['师傅，我去……', 'bác tài ơi, tôi đi…'],
            ['找师傅修理', 'tìm thợ đến sửa'], ['开车的师傅', 'bác tài xế'],
            ['问师傅', 'hỏi bác tài']],
    patterns: [['师傅', 'Cách gọi lịch sự người làm nghề: tài xế, thợ sửa…'],
               ['师傅 ≠ 老师', '师傅 là thợ, tài xế; 老师 là giáo viên']]
  },
  '大使馆': {
    collo: [['去大使馆', 'đến đại sứ quán'], ['中国大使馆', 'đại sứ quán Trung Quốc'],
            ['大使馆的工作人员', 'nhân viên đại sứ quán'], ['在大使馆办签证', 'làm visa ở sứ quán'],
            ['大使馆门口', 'trước cổng đại sứ quán']],
    patterns: [['nước + 大使馆', 'Đại sứ quán nước nào'],
               ['在 + 大使馆 + 办 + N', 'Làm thủ tục gì ở đại sứ quán']]
  },
  '堵车': {
    collo: [['遇到堵车', 'gặp kẹt xe'], ['前面堵车', 'phía trước kẹt xe'],
            ['堵车浪费时间', 'kẹt xe tốn thời gian'], ['堵了半个小时车', 'kẹt xe nửa tiếng'],
            ['下班时间堵车', 'giờ tan tầm kẹt xe']],
    patterns: [['堵 + 了 + thời lượng + 车', '堵车 là từ ly hợp: 堵了半小时车 ✓'],
               ['遇到 + 堵车', 'Gặp phải cảnh kẹt xe']]
  },
  '距离': {
    collo: [['距离很远', 'khoảng cách rất xa'], ['距离差不多', 'khoảng cách xấp xỉ'],
            ['拉近距离', 'kéo gần khoảng cách'], ['两地的距离', 'khoảng cách hai nơi'],
            ['保持距离', 'giữ khoảng cách']],
    patterns: [['A 和 B 的 + 距离', 'Khoảng cách giữa A và B'],
               ['距离 + 远 / 近', 'Khoảng cách xa / gần']]
  },
  '耐心': {
    collo: [['有耐心', 'có kiên nhẫn'], ['没有耐心', 'không kiên nhẫn'],
            ['耐心等消息', 'kiên nhẫn chờ tin'], ['很耐心', 'rất nhẫn nại'],
            ['耐心地听', 'kiên nhẫn lắng nghe']],
    patterns: [['有 / 没有 + 耐心 (danh từ)', 'Có / không có lòng kiên nhẫn'],
               ['耐心地 + V', 'Làm gì một cách kiên nhẫn']]
  },
  '生命': {
    collo: [['生命的颜色', 'màu của sự sống'], ['热爱生命', 'yêu quý sự sống'],
            ['珍惜生命', 'trân trọng sinh mệnh'], ['生命危险', 'nguy hiểm tính mạng'],
            ['新的生命', 'sinh mệnh mới']],
    patterns: [['珍惜 / 热爱 + 生命', 'Trân trọng, yêu quý sự sống'],
               ['生命 ≠ 生活', '生命 là sinh mệnh; 生活 là đời sống hằng ngày']]
  },
  '缺少': {
    collo: [['缺少锻炼', 'thiếu vận động'], ['不缺少美', 'không thiếu cái đẹp'],
            ['缺少材料', 'thiếu tài liệu'], ['缺少经验', 'thiếu kinh nghiệm'],
            ['缺少的是', 'cái thiếu là']],
    patterns: [['Sub + 缺少 + N', 'Ai / cái gì thiếu cái gì'],
               ['缺少 ≠ 缺点', '缺少 là động từ "thiếu"; 缺点 là danh từ "khuyết điểm"']]
  },
  '到处': {
    collo: [['到处都是', 'đâu đâu cũng có'], ['到处乱放', 'vứt bừa khắp nơi'],
            ['到处旅游', 'đi du lịch khắp nơi'], ['到处找', 'tìm khắp nơi'],
            ['到处都一样', 'đâu cũng như nhau']],
    patterns: [['到处 + 都 + V', 'Khắp nơi đều …'],
               ['✗ 到处的人 → ✓ 到处都是人', '到处 là phó từ, không làm định ngữ']]
  },
  '态度': {
    collo: [['生活的态度', 'thái độ sống'], ['态度积极', 'thái độ tích cực'],
            ['态度不好', 'thái độ không tốt'], ['改变态度', 'thay đổi thái độ'],
            ['对……的态度', 'thái độ đối với…']],
    patterns: [['对 + N + 的态度', 'Thái độ đối với cái gì'],
               ['态度 + 好 / 积极', 'Thái độ tốt / tích cực']]
  },
  '因此': {
    collo: [['因此，……', 'do đó,…'], ['因此我们', 'vì vậy chúng ta'],
            ['因此要注意', 'vì thế phải chú ý'], ['……，因此……', '…, do đó…'],
            ['因此变得', 'vì vậy trở nên']],
    patterns: [['mệnh đề 1，因此 + mệnh đề 2', '…, do đó …'],
               ['因此 ≈ 所以', '因此 thiên văn viết, không dùng chung với 因为']]
  },
  '科学': {
    collo: [['科学研究', 'nghiên cứu khoa học'], ['科学证明', 'khoa học chứng minh'],
            ['学习科学', 'học khoa học'], ['科学发展', 'khoa học phát triển'],
            ['科学的方法', 'phương pháp khoa học']],
    patterns: [['科学 + 研究 / 证明', 'Nghiên cứu khoa học, khoa học chứng minh'],
               ['科学的 + N (tính từ)', 'Mang tính khoa học, hợp lý']]
  },
  '证明': {
    collo: [['科学研究证明', 'nghiên cứu khoa học chứng minh'], ['证明自己', 'chứng minh bản thân'],
            ['向大家证明', 'chứng minh cho mọi người'], ['证明是对的', 'chứng minh là đúng'],
            ['需要证明', 'cần chứng minh']],
    patterns: [['Sub + 证明 + mệnh đề', 'Cái gì chứng minh rằng …'],
               ['向 + ai + 证明', 'Chứng minh cho ai thấy']]
  },
  '往往': {
    collo: [['往往与……有关', 'thường liên quan đến…'], ['往往只叫', 'thường chỉ gọi'],
            ['往往对……熟悉', 'thường quen thuộc với…'], ['往往这样', 'thường là như vậy'],
            ['往往不知道', 'thường không biết']],
    patterns: [['Sub + 往往 + V', 'Ai đó thường … (quy luật đã thấy trong quá khứ)'],
               ['往往 ≠ 常常', '往往 nêu quy luật có điều kiện; 常常 chỉ tần suất']]
  },
  '阳光': {
    collo: [['性格阳光', 'tính cách lạc quan'], ['阳光的人', 'người tươi sáng'],
            ['阳光女孩', 'cô gái tươi tắn'], ['很阳光', 'rất tươi sáng'],
            ['变得更阳光', 'trở nên tươi sáng hơn']],
    patterns: [['Sub + 很 + 阳光 (tính từ)', 'Ai đó rất lạc quan, tươi sáng'],
               ['阳光 ở bài này là TÍNH CÁCH, không phải "ánh nắng"']]
  },
  '积极': {
    collo: [['态度积极', 'thái độ tích cực'], ['积极参加', 'tích cực tham gia'],
            ['积极向上', 'tích cực vươn lên'], ['积极的人', 'người tích cực'],
            ['不太积极', 'không tích cực lắm']],
    patterns: [['积极 + V', 'Tích cực làm gì'],
               ['积极 ↔ 消极', 'Tích cực ↔ tiêu cực']]
  },
  '特点': {
    collo: [['共同特点', 'điểm chung'], ['有什么特点', 'có đặc điểm gì'],
            ['根据特点', 'căn cứ đặc điểm'], ['最大的特点', 'đặc điểm lớn nhất'],
            ['性格特点', 'đặc điểm tính cách']],
    patterns: [['N + 的 + 特点 + 是 + …', 'Đặc điểm của cái gì là …'],
               ['共同 + 特点', 'Điểm chung — 共同 là từ bài 1']]
  }
};
