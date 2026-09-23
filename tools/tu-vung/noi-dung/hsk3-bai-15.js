// Noi dung TU MOI HSK3 bai 15 (chu de: du hoc, len mang, le hoi va van hoa).
module.exports = {
  '留学': {
    collo: [['去留学', 'đi du học'], ['留学生活', 'cuộc sống du học'],
            ['留学生', 'du học sinh'], ['留了两年学', 'du học hai năm'],
            ['去中国留学', 'sang Trung Quốc du học']],
    patterns: [['留 + 了 + thời lượng + 学', '留学 là từ ly hợp: 留了两年学 ✓'],
               ['去 + nước + 留学', 'Sang nước nào du học']]
  },
  '水平': {
    collo: [['汉语水平', 'trình độ tiếng Trung'], ['提高水平', 'nâng cao trình độ'],
            ['水平不错', 'trình độ khá'], ['水平很高', 'trình độ cao'],
            ['水平考试', 'kỳ thi trình độ']],
    patterns: [['水平 + 高 / 低', 'Trình độ cao / thấp — không nói 水平大'],
               ['提高 + 水平', 'Nâng cao trình độ — kết hợp cố định']]
  },
  '提高': {
    collo: [['提高水平', 'nâng cao trình độ'], ['提高得快', 'tiến bộ nhanh'],
            ['提高成绩', 'nâng điểm số'], ['很难提高', 'khó nâng lên'],
            ['慢慢提高', 'nâng dần lên']],
    patterns: [['提高 + 水平 / 成绩', 'Nâng cao trình độ, thành tích'],
               ['提高 ↔ 降低', 'Nâng lên ↔ hạ xuống']]
  },
  '练习': {
    collo: [['做练习', 'làm bài tập'], ['练习汉语', 'luyện tiếng Trung'],
            ['努力练习', 'chăm chỉ luyện'], ['多练习', 'luyện nhiều'],
            ['今天的练习', 'bài tập hôm nay']],
    patterns: [['做 + 练习 (danh từ)', 'Làm bài tập'],
               ['练习 + V (động từ)', 'Luyện làm gì: 练习说汉语']]
  },
  '完成': {
    collo: [['完成作业', 'hoàn thành bài tập'], ['按时完成', 'hoàn thành đúng hạn'],
            ['完成任务', 'hoàn thành nhiệm vụ'], ['还没完成', 'vẫn chưa xong'],
            ['完成得很好', 'hoàn thành rất tốt']],
    patterns: [['完成 + N', 'Hoàn thành cái gì'],
               ['完成 (làm xong việc được giao) ≠ 结束 (sự việc kết thúc, bài 11)']]
  },
  '句子': {
    collo: [['这个句子', 'câu này'], ['写句子', 'viết câu'],
            ['句子的意思', 'nghĩa của câu'], ['一个句子', 'một câu'],
            ['句子很长', 'câu rất dài']],
    patterns: [['một + 个 + 句子', 'Một câu'],
               ['句 + 子', 'Đơn vị (子) lời nói (句)']]
  },
  '其他': {
    collo: [['其他人', 'người khác'], ['其他问题', 'vấn đề khác'],
            ['其他的', 'cái khác'], ['其他地方', 'nơi khác'],
            ['除了这个其他都行', 'trừ cái này ra cái khác đều được']],
    patterns: [['其他 + N', 'Cái khác, những cái còn lại'],
               ['其他 ≈ 别的', '其他 thiên văn viết hơn']]
  },
  '发': {
    collo: [['发电子邮件', 'gửi email'], ['发短信', 'gửi tin nhắn'],
            ['用手机发', 'gửi bằng điện thoại'], ['发给他', 'gửi cho anh ấy'],
            ['发过去', 'gửi đi']],
    patterns: [['发 + 给 + ai', 'Gửi cho ai'],
               ['发 (gửi đi) ↔ 收 (nhận)']]
  },
  '要求': {
    collo: [['比赛的要求', 'yêu cầu của cuộc thi'], ['有要求', 'có yêu cầu'],
            ['符合要求', 'đạt yêu cầu'], ['提出要求', 'đưa ra yêu cầu'],
            ['老师的要求', 'yêu cầu của thầy']],
    patterns: [['N + 的 + 要求 (danh từ)', 'Yêu cầu của cái gì'],
               ['要求 + ai + V (động từ)', 'Yêu cầu ai làm gì']]
  },
  '注意': {
    collo: [['注意安全', 'chú ý an toàn'], ['请注意', 'xin chú ý'],
            ['注意身体', 'giữ gìn sức khoẻ'], ['需要注意的地方', 'chỗ cần lưu ý'],
            ['没注意', 'không để ý']],
    patterns: [['注意 + N / V', 'Chú ý cái gì, chú ý làm gì'],
               ['注 + 意', 'Dồn (注) ý (意) vào — ghép nghĩa dễ nhớ']]
  },
  '上网': {
    collo: [['用电脑上网', 'dùng máy tính lên mạng'], ['在网上', 'trên mạng'],
            ['上网看电影', 'lên mạng xem phim'], ['上了一会儿网', 'lên mạng một lát'],
            ['上网真方便', 'lên mạng thật tiện']],
    patterns: [['上 + 了 + thời lượng + 网', '上网 là từ ly hợp'],
               ['在 + 网 + 上', 'Trên mạng']]
  },
  '除了': {
    collo: [['除了……以外', 'ngoài… ra'], ['除了……都……', 'ngoài… ra đều…'],
            ['除了……还……', 'ngoài… ra còn…'], ['除了他', 'ngoài anh ấy ra'],
            ['除了这个', 'ngoài cái này']],
    patterns: [['除了 A 以外，都 B', 'Trừ A ra, đều B — A KHÔNG thuộc nhóm'],
               ['除了 A 以外，还 B', 'Ngoài A ra còn B — A THUỘC nhóm']]
  },
  '新闻': {
    collo: [['看新闻', 'xem tin tức'], ['听新闻', 'nghe tin'],
            ['有意思的新闻', 'tin thú vị'], ['一条新闻', 'một bản tin'],
            ['网上的新闻', 'tin trên mạng']],
    patterns: [['看 / 听 + 新闻', 'Xem, nghe tin tức'],
               ['một + 条 + 新闻', 'Lượng từ 条 — giống 一条短信']]
  },
  '花': {
    collo: [['花钱', 'tiêu tiền'], ['花时间', 'tốn thời gian'],
            ['不用花钱', 'không tốn tiền'], ['花了很多钱', 'tiêu rất nhiều tiền'],
            ['花了两个小时', 'mất hai tiếng']],
    patterns: [['花 + 时间 / 钱 + V', 'Tốn bao nhiêu thời gian, tiền để làm gì'],
               ['花 (huā, tiêu tốn) ≠ 花 (huā, bông hoa — bài 3)']]
  },
  '极(了)': {
    collo: [['好极了', 'tốt cực kỳ'], ['可爱极了', 'đáng yêu cực'],
            ['满意极了', 'hài lòng vô cùng'], ['冷极了', 'lạnh khủng khiếp'],
            ['好吃极了', 'ngon cực kỳ']],
    patterns: [['Adj + 极了', 'Cực kỳ … — đặt SAU tính từ'],
               ['✗ 极了好 → ✓ 好极了', '极了 luôn đứng sau, khác 很 và 非常 đứng trước']]
  },
  '节日': {
    collo: [['重要的节日', 'ngày lễ quan trọng'], ['过节日', 'ăn mừng ngày lễ'],
            ['中国的节日', 'ngày lễ Trung Quốc'], ['节日快乐', 'chúc mừng ngày lễ'],
            ['最喜欢的节日', 'ngày lễ thích nhất']],
    patterns: [['过 + 节日', 'Đón, ăn mừng ngày lễ'],
               ['节日 (ngày lễ) ≠ 节目 (chương trình, bài 14)']]
  },
  '举行': {
    collo: [['举行比赛', 'tổ chức thi đấu'], ['举行会议', 'tổ chức cuộc họp'],
            ['举行啤酒节', 'tổ chức lễ hội bia'], ['每年举行', 'hằng năm tổ chức'],
            ['举行晚会', 'tổ chức dạ hội']],
    patterns: [['举行 + 比赛 / 会议 / 晚会', 'Tổ chức sự kiện có nghi thức'],
               ['举 + 行', 'Nâng lên (举) và tiến hành (行)']]
  },
  '世界': {
    collo: [['世界上', 'trên thế giới'], ['了解世界', 'hiểu về thế giới'],
            ['世界各地', 'khắp nơi trên thế giới'], ['全世界', 'toàn thế giới'],
            ['世界很大', 'thế giới rất rộng']],
    patterns: [['世界 + 上', 'Trên thế giới — 上 đứng sau'],
               ['世界 + 各地', 'Khắp nơi trên thế giới — 各 là từ cùng bài']]
  },
  '街道': {
    collo: [['街道两边', 'hai bên đường'], ['干净的街道', 'con phố sạch sẽ'],
            ['那条街道', 'con phố đó'], ['街道上', 'trên phố'],
            ['热闹的街道', 'phố xá nhộn nhịp']],
    patterns: [['một + 条 + 街道', 'Lượng từ 条 cho vật dài — như 一条路'],
               ['街道 ≈ 街', '街道 đầy đủ hơn, dùng trong văn viết']]
  },
  '各': {
    collo: [['各个地方', 'các nơi'], ['各种', 'các loại'],
            ['世界各地', 'khắp thế giới'], ['各个季节', 'các mùa'],
            ['各有各的好', 'mỗi cái có cái hay riêng']],
    patterns: [['各 + N (không có 的)', 'Các, mỗi: 各个地方, 各种'],
               ['各 ≈ 每', '各 nhấn sự khác nhau giữa các cái']]
  },
  '文化': {
    collo: [['中国文化', 'văn hoá Trung Quốc'], ['了解文化', 'tìm hiểu văn hoá'],
            ['啤酒文化', 'văn hoá bia'], ['文化不同', 'văn hoá khác nhau'],
            ['对文化感兴趣', 'thích tìm hiểu văn hoá']],
    patterns: [['了解 + 文化', 'Tìm hiểu văn hoá — 了解 là từ bài 9'],
               ['文 + 化', 'Sự thấm nhuần (化) của văn (文)']]
  }
};
