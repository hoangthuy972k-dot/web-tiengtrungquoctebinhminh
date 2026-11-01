// Noi dung TU MOI bai 9 HSK4 (chu de: kien tri, that bai va thanh cong).
module.exports = {
  '饼干': {
    collo: [['买饼干', 'mua bánh quy'], ['一块饼干', 'một cái bánh quy'],
            ['一包饼干', 'một gói bánh quy'], ['饼干和巧克力', 'bánh quy và sô cô la'],
            ['吃饼干', 'ăn bánh quy']],
    patterns: [['một + 块 / 包 + 饼干', 'Một cái / một gói bánh quy'],
               ['饼 + 干', 'Bánh (饼) khô (干) — ghép nghĩa dễ nhớ']]
  },
  '难道': {
    collo: [['难道……吗', 'chẳng lẽ… sao'], ['难道你不知道', 'chẳng lẽ bạn không biết'],
            ['难道没有', 'lẽ nào không có'], ['难道忘了', 'chẳng lẽ quên rồi'],
            ['难道不对吗', 'lẽ nào không đúng sao']],
    patterns: [['难道 + mệnh đề + 吗？', 'Chẳng lẽ …? — câu hỏi tu từ, không cần trả lời'],
               ['✗ 难道你来了。 → ✓ 难道你来了吗？', '难道 bắt buộc đi với 吗 / 不成']]
  },
  '得': {
    collo: [['我得走了', 'tôi phải đi rồi'], ['就得少吃', 'thì phải ăn ít'],
            ['还得去', 'còn phải đi'], ['得在……之前', 'phải trước khi…'],
            ['不用', 'không cần']],
    patterns: [['Sub + 得 (děi) + V', 'Ai đó phải làm gì'],
               ['✗ 不得去 → ✓ 不用去', 'Phủ định của 得 là 不用, không phải 不得']]
  },
  '坚持': {
    collo: [['坚持练习', 'kiên trì luyện tập'], ['坚持下来', 'kiên trì đến cùng'],
            ['坚持自己的选择', 'giữ vững lựa chọn của mình'], ['只能坚持', 'chỉ có thể kiên trì'],
            ['坚持每天跑步', 'kiên trì chạy bộ mỗi ngày']],
    patterns: [['坚持 + V', 'Kiên trì làm gì (lâu dài, không bỏ)'],
               ['坚持 + 下来', 'Trụ được đến cùng — bổ ngữ xu hướng 下来']]
  },
  '放弃': {
    collo: [['放弃工作', 'từ bỏ công việc'], ['打算放弃', 'định bỏ cuộc'],
            ['不要放弃', 'đừng bỏ cuộc'], ['放弃机会', 'bỏ lỡ cơ hội'],
            ['放弃是一种选择', 'từ bỏ cũng là một lựa chọn']],
    patterns: [['Sub + 放弃 + N / V', 'Ai đó từ bỏ cái gì'],
               ['放弃 ↔ 坚持', 'Từ bỏ ↔ kiên trì']]
  },
  '主意': {
    collo: [['改变主意', 'đổi ý'], ['拿主意', 'quyết định'],
            ['好主意', 'ý hay'], ['想个主意', 'nghĩ ra một ý'],
            ['没主意', 'không có ý gì']],
    patterns: [['改变 / 拿 + 主意', 'Đổi ý / đưa ra quyết định'],
               ['主意 (zhǔyi) — âm thứ hai đọc nhẹ']]
  },
  '网球': {
    collo: [['打网球', 'chơi quần vợt'], ['网球打得好', 'đánh quần vợt giỏi'],
            ['网球比赛', 'trận quần vợt'], ['对网球感兴趣', 'hứng thú với quần vợt'],
            ['学打网球', 'học đánh quần vợt']],
    patterns: [['打 + 网球', 'Môn dùng tay thì dùng 打; môn dùng chân dùng 踢'],
               ['网球 + 打得 + Adj', 'Đánh quần vợt thế nào — lặp động từ']]
  },
  '国际': {
    collo: [['国际比赛', 'thi đấu quốc tế'], ['国际大奖', 'giải thưởng quốc tế'],
            ['国际学生', 'sinh viên quốc tế'], ['国际机场', 'sân bay quốc tế'],
            ['国际新闻', 'tin quốc tế']],
    patterns: [['国际 + N', 'Mang tính quốc tế: 国际比赛, 国际机场'],
               ['✗ 很国际 → ✓ 国际比赛', '国际 chỉ làm định ngữ, không làm vị ngữ']]
  },
  '轻松': {
    collo: [['很轻松', 'rất nhẹ nhàng'], ['轻轻松松', 'nhẹ tênh'],
            ['轻松地完成', 'hoàn thành nhẹ nhàng'], ['感觉轻松', 'cảm thấy thoải mái'],
            ['工作轻松', 'công việc nhàn']],
    patterns: [['轻轻松松 + 就 + V', 'Nhẹ nhàng là đã … (dạng lặp AABB nhấn mức độ)'],
               ['轻松 ≈ 放松', '轻松 là trạng thái; 放松 là hành động thả lỏng']]
  },
  '赢': {
    collo: [['赢了比赛', 'thắng trận'], ['赢得比赛', 'giành chiến thắng'],
            ['轻松就赢了', 'thắng nhẹ nhàng'], ['赢了他', 'thắng anh ta'],
            ['想赢', 'muốn thắng']],
    patterns: [['Sub + 赢 + (了) + ai / 比赛', 'Ai đó thắng ai / thắng trận'],
               ['赢 ↔ 输', 'Thắng ↔ thua']]
  },
  '随便': {
    collo: [['随便说说', 'nói chơi thôi'], ['随便看看', 'xem qua thôi'],
            ['随随便便', 'tùy tiện, qua loa'], ['别随便决定', 'đừng quyết định bừa'],
            ['随便你', 'tùy bạn']],
    patterns: [['随随便便 + 就 + V', 'Cứ qua loa là đã … (thường dùng trong câu phủ định)'],
               ['随便 + V', 'Làm gì một cách tùy ý, qua loa']]
  },
  '汗': {
    collo: [['出汗', 'ra mồ hôi'], ['满头大汗', 'mồ hôi đầm đìa'],
            ['流下的汗水', 'những giọt mồ hôi đổ xuống'], ['擦汗', 'lau mồ hôi'],
            ['一身汗', 'người đầy mồ hôi']],
    patterns: [['出 + 汗', 'Ra mồ hôi'],
               ['满头大汗 (thành ngữ)', 'Mồ hôi nhễ nhại đầy đầu']]
  },
  '通过': {
    collo: [['通过努力', 'nhờ nỗ lực'], ['通过考试', 'đỗ kỳ thi'],
            ['通过面试', 'qua vòng phỏng vấn'], ['通过这次活动', 'thông qua hoạt động này'],
            ['步行通过', 'đi bộ qua']],
    patterns: [['通过 + N，Sub + V (giới từ)', 'Nhờ vào cái gì mà làm được gì'],
               ['通过 + 考试 / 面试 (động từ)', 'Vượt qua kỳ thi, vòng phỏng vấn']]
  },
  '篇': {
    collo: [['一篇文章', 'một bài văn'], ['一篇新闻', 'một bản tin'],
            ['一篇报道', 'một bài phóng sự'], ['这篇小说', 'bài / truyện này'],
            ['写了三篇', 'viết được ba bài']],
    patterns: [['một + 篇 + 文章 / 新闻', 'Lượng từ 篇 cho bài viết'],
               ['✗ 一本文章 → ✓ 一篇文章', '本 dùng cho sách, 篇 dùng cho bài']]
  },
  '作家': {
    collo: [['有名的作家', 'nhà văn nổi tiếng'], ['成为作家', 'trở thành nhà văn'],
            ['当作家', 'làm nhà văn'], ['一位作家', 'một nhà văn'],
            ['作家的作品', 'tác phẩm của nhà văn']],
    patterns: [['成为 / 当 + 作家', 'Trở thành / làm nhà văn'],
               ['V + 家', '作家, 画家, 科学家 — người chuyên làm nghề đó']]
  },
  '当时': {
    collo: [['当时的情况', 'tình hình lúc đó'], ['在当时', 'vào lúc bấy giờ'],
            ['当时她的父母', 'bố mẹ cô ấy lúc đó'], ['当时我还小', 'lúc đó tôi còn nhỏ'],
            ['当时不知道', 'lúc đó không biết']],
    patterns: [['当时，Sub + V', 'Lúc đó (một thời điểm trong quá khứ)'],
               ['当时 ≠ 当……的时候', '当时 là danh từ đứng riêng; 当……的时候 là khung câu']]
  },
  '可是': {
    collo: [['虽然……可是……', 'tuy… nhưng…'], ['可是她坚持', 'nhưng cô ấy kiên trì'],
            ['可是没想到', 'nhưng không ngờ'], ['可是我不同意', 'nhưng tôi không đồng ý'],
            ['……，可是……', '…, nhưng…']],
    patterns: [['虽然 + mệnh đề 1，可是 + mệnh đề 2', 'Tuy … nhưng …'],
               ['可是 ≈ 但是', '可是 thiên khẩu ngữ hơn 但是']]
  },
  '正确': {
    collo: [['正确的选择', 'lựa chọn đúng đắn'], ['正确的方法', 'phương pháp đúng'],
            ['正确回答', 'trả lời đúng'], ['不正确', 'không chính xác'],
            ['是正确的', 'là đúng']],
    patterns: [['N + 是正确的', 'Cái gì đó là đúng đắn'],
               ['正确 ≈ 对', '正确 trang trọng hơn, dùng cho lựa chọn, phương pháp']]
  },
  '理想': {
    collo: [['实现理想', 'thực hiện lý tưởng'], ['为了理想', 'vì lý tưởng'],
            ['考得不太理想', 'thi không được như ý'], ['理想的工作', 'công việc lý tưởng'],
            ['我的理想', 'lý tưởng của tôi']],
    patterns: [['实现 + 理想 (danh từ)', 'Thực hiện ước mơ, lý tưởng'],
               ['V + 得 + 不太理想 (tính từ)', 'Làm gì không được như ý']]
  },
  '勇敢': {
    collo: [['很勇敢', 'rất dũng cảm'], ['勇敢地去做', 'dũng cảm làm'],
            ['勇敢地面对', 'dũng cảm đối mặt'], ['勇敢的人', 'người dũng cảm'],
            ['变得勇敢', 'trở nên dũng cảm']],
    patterns: [['勇敢地 + V', 'Dũng cảm làm gì'],
               ['勇敢地 + 面对 + 困难', 'Dũng cảm đối mặt với khó khăn']]
  },
  '结果': {
    collo: [['担心结果', 'lo lắng kết quả'], ['调查结果', 'kết quả khảo sát'],
            ['结果怎么样', 'kết quả thế nào'], ['结果竟然', 'rốt cuộc lại'],
            ['好结果', 'kết quả tốt']],
    patterns: [['N + 的 + 结果 (danh từ)', 'Kết quả của cái gì'],
               ['……，结果 + mệnh đề (liên từ)', '…, rốt cuộc thì … (thường ngoài dự tính)']]
  },
  '失败': {
    collo: [['经历失败', 'trải qua thất bại'], ['害怕失败', 'sợ thất bại'],
            ['从失败中总结', 'tổng kết từ thất bại'], ['失败了', 'đã thất bại'],
            ['一次失败', 'một lần thất bại']],
    patterns: [['即使 + 失败了，也 + V', 'Cho dù thất bại thì vẫn …'],
               ['失败 ↔ 成功', 'Thất bại ↔ thành công (bài 4)']]
  },
  '过程': {
    collo: [['努力的过程', 'quá trình nỗ lực'], ['成长的过程', 'quá trình trưởng thành'],
            ['做事的过程', 'quá trình làm việc'], ['在……过程中', 'trong quá trình…'],
            ['整个过程', 'toàn bộ quá trình']],
    patterns: [['在 + … + 过程中', 'Trong quá trình làm gì'],
               ['过程 ≠ 结果', '过程 là chặng đường; 结果 là cái đạt được cuối cùng']]
  },
  '至少': {
    collo: [['至少要', 'ít nhất phải'], ['至少睡7个小时', 'ngủ ít nhất 7 tiếng'],
            ['至少你努力过', 'ít ra bạn đã cố'], ['至少一半', 'ít nhất một nửa'],
            ['至少三次', 'ít nhất ba lần']],
    patterns: [['至少 + số lượng', 'Ít nhất bao nhiêu'],
               ['至少 ↔ 最多', 'Ít nhất ↔ nhiều nhất']]
  },
  '总结': {
    collo: [['总结经验', 'tổng kết kinh nghiệm'], ['做一个总结', 'làm một bản tổng kết'],
            ['总结出经验', 'rút ra kinh nghiệm'], ['从失败中总结', 'tổng kết từ thất bại'],
            ['总结一下', 'tổng kết một chút']],
    patterns: [['总结 + 经验 (động từ)', 'Tổng kết kinh nghiệm'],
               ['做 + 一个总结 (danh từ)', 'Làm một bản tổng kết']]
  },
  '取': {
    collo: [['取得成功', 'đạt được thành công'], ['取得好成绩', 'đạt thành tích tốt'],
            ['取行李箱', 'lấy vali'], ['取钱', 'rút tiền'],
            ['去取东西', 'đi lấy đồ']],
    patterns: [['取得 + 成功 / 成绩', 'Đạt được thành công, thành tích'],
               ['取 + đồ vật', 'Đi lấy cái gì — 取钱, 取行李']]
  },
  '经历': {
    collo: [['经历过失败', 'từng trải qua thất bại'], ['成功经历', 'trải nghiệm thành công'],
            ['经历过困难', 'từng qua khó khăn'], ['难忘的经历', 'trải nghiệm khó quên'],
            ['经历了很多', 'đã trải qua nhiều']],
    patterns: [['经历 + 过 + N (động từ)', 'Đã từng trải qua cái gì'],
               ['……的 + 经历 (danh từ)', 'Trải nghiệm về cái gì']]
  },
  '许多': {
    collo: [['许多失败', 'rất nhiều thất bại'], ['许多困难', 'rất nhiều khó khăn'],
            ['许多东西', 'rất nhiều thứ'], ['许多人', 'rất nhiều người'],
            ['学到许多', 'học được rất nhiều']],
    patterns: [['许多 + N', 'Rất nhiều … — không cần thêm 的'],
               ['许多 ≈ 很多', '许多 thiên văn viết hơn 很多']]
  },
  '区别': {
    collo: [['有什么区别', 'có gì khác nhau'], ['……的区别是', 'điểm khác nhau là'],
            ['分不清区别', 'không phân biệt được'], ['很大的区别', 'khác biệt lớn'],
            ['没有区别', 'không có khác biệt']],
    patterns: [['A 和 B 的区别 + 是 + …', 'Điểm khác nhau giữa A và B là …'],
               ['A 和 B 有什么区别？', 'A với B khác nhau chỗ nào?']]
  },
  '暂时': {
    collo: [['暂时的困难', 'khó khăn tạm thời'], ['暂时不能', 'tạm thời chưa thể'],
            ['只是暂时的', 'chỉ là nhất thời'], ['暂时住这儿', 'tạm ở đây'],
            ['暂时的问题', 'vấn đề trước mắt']],
    patterns: [['N + 只是暂时的', 'Cái gì đó chỉ là tạm thời'],
               ['暂时 + 不 + V', 'Tạm thời chưa làm gì']]
  },
  '面对': {
    collo: [['面对困难', 'đối mặt khó khăn'], ['面对失败', 'đối diện thất bại'],
            ['勇敢地面对', 'dũng cảm đối mặt'], ['面对问题', 'đối mặt vấn đề'],
            ['不敢面对', 'không dám đối mặt']],
    patterns: [['面对 + 困难 / 失败', 'Đối mặt với khó khăn, thất bại'],
               ['面 + 对', 'Quay mặt (面) về phía (对) — ghép nghĩa dễ nhớ']]
  }
};
