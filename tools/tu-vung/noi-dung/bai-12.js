// Noi dung TU MOI bai 12 HSK4 (chu de: phuong phap, kinh nghiem, cach day va hoc).
module.exports = {
  '规定': {
    collo: [['按照规定', 'theo quy định'], ['公司规定', 'quy định công ty'],
            ['规定时间', 'thời gian quy định'], ['规定是死的', 'quy định là cứng nhắc'],
            ['改变规定', 'thay đổi quy định']],
    patterns: [['按照 + 规定 + V', 'Làm theo quy định — 按照 là từ bài 4'],
               ['Sub + 规定 + mệnh đề (động từ)', 'Ai đó quy định rằng…']]
  },
  '死': {
    collo: [['规定是死的', 'quy định thì cứng nhắc'], ['死记', 'học vẹt'],
            ['想法太死', 'suy nghĩ cứng nhắc'], ['死的规定', 'quy định chết cứng'],
            ['人是活的', 'con người thì linh hoạt']],
    patterns: [['N + 是死的，人是活的', 'Quy định thì cứng, con người thì linh hoạt'],
               ['死 (cứng nhắc) ≠ 死 (chết)', 'Ở bài này là nghĩa "cứng nhắc"']]
  },
  '可惜': {
    collo: [['太可惜了', 'tiếc quá'], ['觉得可惜', 'thấy đáng tiếc'],
            ['真可惜', 'thật đáng tiếc'], ['可惜的是', 'điều đáng tiếc là'],
            ['有点儿可惜', 'hơi tiếc']],
    patterns: [['太 + 可惜 + 了', 'Tiếc quá đi mất'],
               ['可惜，……', 'Tiếc là … — mở đầu vế nói điều đáng tiếc']]
  },
  '全部': {
    collo: [['全部完成', 'hoàn thành toàn bộ'], ['不是全部', 'không phải tất cả'],
            ['全部的时间', 'toàn bộ thời gian'], ['全部内容', 'toàn bộ nội dung'],
            ['全部卖完了', 'bán hết sạch']],
    patterns: [['全部 + V / N', 'Toàn bộ, tất cả'],
               ['全部 ≈ 所有 (bài 6)', '全部 nhấn khối lượng; 所有 nhấn từng cái một']]
  },
  '也许': {
    collo: [['也许会', 'có lẽ sẽ'], ['也许是', 'có lẽ là'],
            ['也许这样就能', 'có lẽ như vậy là được'], ['也许很有效', 'chắc là khá hiệu quả'],
            ['也许你是对的', 'có lẽ bạn đúng']],
    patterns: [['也许 + mệnh đề', 'Có lẽ … (không chắc chắn)'],
               ['也许 ≈ 可能', '也许 thiên phán đoán chủ quan hơn 可能']]
  },
  '商量': {
    collo: [['跟他商量', 'bàn với anh ấy'], ['商量一下', 'bàn một chút'],
            ['商量商量', 'bàn bạc chút xem'], ['跟父母商量', 'bàn với bố mẹ'],
            ['开会商量', 'họp bàn']],
    patterns: [['跟 + ai + 商量 + N', 'Bàn với ai về việc gì'],
               ['商量商量', 'Dạng lặp ABAB của từ hai âm tiết']]
  },
  '并且': {
    collo: [['并且有经验', 'hơn nữa có kinh nghiệm'], ['并且价格便宜', 'hơn nữa giá lại rẻ'],
            ['……，并且……', '…, và hơn nữa…'], ['并且准确', 'hơn nữa lại chính xác'],
            ['不但……并且……', 'không những… mà còn…']],
    patterns: [['mệnh đề 1，并且 + mệnh đề 2', '…, hơn nữa … — nối hai vế cùng chiều'],
               ['并且 ≈ 而且', '并且 thiên văn viết, hay nối hai động tác']]
  },
  '盐': {
    collo: [['放盐', 'cho muối'], ['加点儿盐', 'thêm chút muối'],
            ['用盐水洗', 'giặt bằng nước muối'], ['一勺盐', 'một thìa muối'],
            ['盐太多了', 'nhiều muối quá']],
    patterns: [['在 + N + 里 + 加 + 盐', 'Cho muối vào cái gì'],
               ['一 + 勺 + 盐', 'Một thìa muối']]
  },
  '勺子': {
    collo: [['一把勺子', 'một cái thìa'], ['用勺子', 'dùng thìa'],
            ['一勺盐', 'một thìa muối'], ['勺子和筷子', 'thìa và đũa'],
            ['小勺子', 'thìa nhỏ']],
    patterns: [['一 + 把 + 勺子', 'Lượng từ 把 cho đồ có cán'],
               ['用 + 勺子 + V', 'Dùng thìa để làm gì']]
  },
  '保护': {
    collo: [['保护环境', 'bảo vệ môi trường'], ['保护自己', 'bảo vệ bản thân'],
            ['保护皮肤', 'bảo vệ da'], ['保护颜色', 'giữ màu'],
            ['保护动物', 'bảo vệ động vật']],
    patterns: [['保护 + N', 'Bảo vệ cái gì'],
               ['有 + 保护 + N + 的作用', 'Có tác dụng bảo vệ cái gì']]
  },
  '作用': {
    collo: [['起作用', 'phát huy tác dụng'], ['有作用', 'có tác dụng'],
            ['作用很大', 'tác dụng rất lớn'], ['没什么作用', 'chẳng tác dụng gì'],
            ['起到重要作用', 'đóng vai trò quan trọng']],
    patterns: [['对 + N + 有 + 作用', 'Có tác dụng đối với cái gì'],
               ['起 + 作用', 'Phát huy tác dụng — dùng động từ 起, không phải 做']]
  },
  '无法': {
    collo: [['无法改变', 'không thể thay đổi'], ['无法解决', 'không giải quyết được'],
            ['无法学到', 'không học được'], ['无法按时', 'không kịp đúng hạn'],
            ['无法理解', 'không thể hiểu nổi']],
    patterns: [['无法 + V', 'Không có cách nào làm được gì'],
               ['无法 ≈ 没办法', '无法 thiên văn viết; sau 无法 là động từ']]
  },
  '节': {
    collo: [['一节课', 'một tiết học'], ['这节课', 'tiết học này'],
            ['每天四节课', 'mỗi ngày bốn tiết'], ['上一节课', 'tiết trước'],
            ['一节一节地学', 'học từng tiết một']],
    patterns: [['số + 节 + 课', 'Lượng từ 节 cho tiết học'],
               ['✗ 一个课 → ✓ 一节课', 'Tiết học dùng 节']]
  },
  '详细': {
    collo: [['详细谈谈', 'nói chi tiết'], ['不够详细', 'chưa đủ chi tiết'],
            ['详细的计划', 'kế hoạch chi tiết'], ['详细地解释', 'giải thích tỉ mỉ'],
            ['详细介绍', 'giới thiệu chi tiết']],
    patterns: [['详细地 + V', 'Làm gì một cách tỉ mỉ'],
               ['详细的 + N', 'Cái gì đó chi tiết: 详细的计划']]
  },
  '解释': {
    collo: [['解释一下', 'giải thích một chút'], ['向顾客解释', 'giải thích với khách'],
            ['解释清楚', 'giải thích cho rõ'], ['解释原因', 'giải thích nguyên nhân'],
            ['不用解释', 'khỏi cần giải thích']],
    patterns: [['向 + ai + 解释 + N', 'Giải thích với ai điều gì'],
               ['把 + N + 解释清楚', 'Giải thích cái gì cho rõ — câu chữ 把']]
  },
  '对于': {
    collo: [['对于这件事', 'đối với việc này'], ['对于老师来说', 'đối với giáo viên mà nói'],
            ['对于我', 'đối với tôi'], ['对于这个问题', 'về vấn đề này'],
            ['对于环境', 'đối với môi trường']],
    patterns: [['对于 + N，Sub + V', 'Đối với cái gì thì …'],
               ['对于 ≈ 对', '对于 chỉ dẫn sự việc, không dẫn người: ✗ 对于他笑']]
  },
  '叶子': {
    collo: [['一片叶子', 'một chiếc lá'], ['叶子红了', 'lá đỏ rồi'],
            ['树上的叶子', 'lá trên cây'], ['相同的叶子', 'chiếc lá giống nhau'],
            ['叶子掉了', 'lá rụng rồi']],
    patterns: [['một + 片 + 叶子', 'Lượng từ 片 cho vật mỏng dẹt'],
               ['叶子 + 红 / 掉 + 了', 'Lá đỏ, lá rụng']]
  },
  '教育': {
    collo: [['教育孩子', 'dạy dỗ con cái'], ['教育方法', 'phương pháp giáo dục'],
            ['教育学生', 'giáo dục học sinh'], ['受教育', 'được đi học'],
            ['学校教育', 'giáo dục nhà trường']],
    patterns: [['教育 + ai (động từ)', 'Dạy dỗ, giáo dục ai'],
               ['受 + 教育 (danh từ)', 'Được nhận nền giáo dục']]
  },
  '使用': {
    collo: [['使用语言', 'sử dụng ngôn ngữ'], ['使用方法', 'cách sử dụng'],
            ['正确使用', 'sử dụng đúng cách'], ['使用手机', 'dùng điện thoại'],
            ['免费使用', 'dùng miễn phí']],
    patterns: [['使用 + N', 'Sử dụng cái gì'],
               ['使用 ≈ 用', '使用 trang trọng hơn, dùng cho công cụ, ngôn ngữ, phương pháp']]
  },
  '语言': {
    collo: [['学一门语言', 'học một ngôn ngữ'], ['使用语言', 'sử dụng ngôn ngữ'],
            ['语言幽默', 'ngôn ngữ hài hước'], ['几种语言', 'mấy thứ tiếng'],
            ['语言学习', 'việc học ngôn ngữ']],
    patterns: [['一 + 门 + 语言', 'Lượng từ 门 cho môn học, ngôn ngữ'],
               ['语言 ≠ 话', '语言 là hệ thống ngôn ngữ; 话 là lời nói cụ thể']]
  },
  '直接': {
    collo: [['直接说出来', 'nói thẳng ra'], ['直接跟他联系', 'liên hệ thẳng với anh ấy'],
            ['直接指出来', 'chỉ thẳng ra'], ['直接回家', 'về thẳng nhà'],
            ['太直接了', 'thẳng quá']],
    patterns: [['直接 + V', 'Trực tiếp làm gì'],
               ['直接 ↔ 间接', 'Trực tiếp ↔ gián tiếp']]
  },
  '引起': {
    collo: [['引起注意', 'gây chú ý'], ['引起误会', 'gây hiểu lầm'],
            ['引起兴趣', 'khơi dậy hứng thú'], ['引起一定的结果', 'dẫn đến kết quả nhất định'],
            ['引起重视', 'được coi trọng']],
    patterns: [['引起 + 注意 / 误会 / 兴趣', 'Gây ra, khơi dậy cái gì'],
               ['引起 thường dẫn KẾT QUẢ, không dẫn người']]
  },
  '误会': {
    collo: [['引起误会', 'gây hiểu lầm'], ['产生误会', 'nảy sinh hiểu lầm'],
            ['你误会我了', 'bạn hiểu lầm tôi rồi'], ['解释误会', 'giải thích hiểu lầm'],
            ['一场误会', 'một sự hiểu lầm']],
    patterns: [['Sub + 误会 + ai (động từ)', 'Ai đó hiểu lầm ai'],
               ['引起 + 误会 (danh từ)', 'Gây ra sự hiểu lầm']]
  },
  '友好': {
    collo: [['友好的态度', 'thái độ thân thiện'], ['对客人友好', 'thân thiện với khách'],
            ['很友好', 'rất thân thiện'], ['更友好', 'thân thiện hơn'],
            ['友好地说', 'nói một cách thân thiện']],
    patterns: [['对 + ai + 友好', 'Thân thiện với ai'],
               ['友好的 + 态度', 'Thái độ thân thiện — 态度 là từ bài 8']]
  },
  '事半功倍': {
    collo: [['事半功倍', 'ít công nhiều kết quả'], ['事半功倍的方法', 'cách làm ít được nhiều'],
            ['做起事来事半功倍', 'làm việc đạt hiệu quả gấp bội'], ['事倍功半', 'nhiều công ít kết quả'],
            ['达到事半功倍', 'đạt hiệu quả gấp bội']],
    patterns: [['事半功倍 ↔ 事倍功半', 'Ít công nhiều quả ↔ nhiều công ít quả'],
               ['Thành ngữ bốn chữ — dùng nguyên khối, không tách rời']]
  },
  '节约': {
    collo: [['节约时间', 'tiết kiệm thời gian'], ['节约用水', 'tiết kiệm nước'],
            ['节约力气', 'đỡ tốn sức'], ['节约钱', 'tiết kiệm tiền'],
            ['学会节约', 'học cách tiết kiệm']],
    patterns: [['节约 + 时间 / 钱 / 力气', 'Tiết kiệm thời gian, tiền, sức'],
               ['节约 ↔ 浪费 (bài 5)', 'Tiết kiệm ↔ lãng phí']]
  },
  '力气': {
    collo: [['没力气', 'không còn sức'], ['用较少的力气', 'dùng ít sức hơn'],
            ['花很多力气', 'tốn nhiều sức'], ['力气很大', 'sức rất khoẻ'],
            ['省力气', 'đỡ tốn sức']],
    patterns: [['有 / 没 + 力气 + V', 'Còn / không còn sức làm gì'],
               ['力气 + 大 / 小', 'Sức khoẻ / yếu — không nói 力气高']]
  },
  '相反': {
    collo: [['相反的方向', 'hướng ngược lại'], ['完全相反', 'hoàn toàn trái ngược'],
            ['相反，……', 'ngược lại,…'], ['跟……相反', 'trái ngược với…'],
            ['相反的看法', 'quan điểm trái ngược']],
    patterns: [['A 跟 B + 相反 (tính từ)', 'A trái ngược với B'],
               ['……。相反，…… (liên từ)', '…. Ngược lại, …']]
  },
  '任务': {
    collo: [['完成任务', 'hoàn thành nhiệm vụ'], ['按时完成任务', 'hoàn thành nhiệm vụ đúng hạn'],
            ['任务很重', 'nhiệm vụ nặng'], ['接受任务', 'nhận nhiệm vụ'],
            ['这个月的任务', 'nhiệm vụ tháng này']],
    patterns: [['完成 + 任务', 'Hoàn thành nhiệm vụ'],
               ['任务 + 重 / 轻', 'Nhiệm vụ nặng / nhẹ — không nói 任务大']]
  },
  '意见': {
    collo: [['提意见', 'góp ý'], ['听取意见', 'lắng nghe ý kiến'],
            ['不同的意见', 'ý kiến khác nhau'], ['有意见', 'có ý kiến, có điều chưa hài lòng'],
            ['接受意见', 'tiếp thu ý kiến']],
    patterns: [['提 / 听取 + 意见', 'Đưa ra / lắng nghe ý kiến'],
               ['意见 ≠ 看法 (bài 11)', '意见 thường mang ý phê bình, góp ý']]
  },
  '仔细': {
    collo: [['仔细考虑', 'cân nhắc kỹ'], ['仔细看看', 'xem kỹ'],
            ['仔细听', 'nghe kỹ'], ['很仔细', 'rất tỉ mỉ'],
            ['仔细检查', 'kiểm tra kỹ']],
    patterns: [['仔细 + V', 'Làm gì một cách kỹ lưỡng'],
               ['仔细 ≈ 认真', '仔细 nhấn tỉ mỉ từng chi tiết; 认真 nhấn thái độ nghiêm túc']]
  },
  '达到': {
    collo: [['达到目的', 'đạt mục đích'], ['达到要求', 'đạt yêu cầu'],
            ['达到最好的效果', 'đạt hiệu quả tốt nhất'], ['达到标准', 'đạt tiêu chuẩn'],
            ['达不到', 'không đạt được']],
    patterns: [['达到 + 目的 / 要求 / 效果', 'Đạt được mục đích, yêu cầu, hiệu quả'],
               ['达到 ≠ 到达', '达到 là đạt tới mức; 到达 là đến nơi']]
  },
  '无': {
    collo: [['无法', 'không có cách nào'], ['无论', 'bất kể'],
            ['无处不在', 'đâu đâu cũng có'], ['无人知道', 'không ai biết'],
            ['毫无办法', 'chẳng có cách nào']],
    patterns: [['无 + N / V', '无 = 没有 của văn viết: 无法, 无人, 无论'],
               ['无 ↔ 有', 'Không có ↔ có']]
  }
};
