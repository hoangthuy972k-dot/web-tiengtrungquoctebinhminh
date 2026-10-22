// Noi dung TU MOI bai 20 HSK4 (chu de: di lai, du lich, am thuc va van hoa vung mien).
module.exports = {
  '加油站': {
    collo: [['找加油站', 'tìm trạm xăng'], ['在加油站', 'ở trạm xăng'],
            ['路上有加油站', 'trên đường có trạm xăng'], ['去加油站加油', 'ra trạm đổ xăng'],
            ['加油站很近', 'trạm xăng rất gần']],
    patterns: [['去 + 加油站 + 加油', 'Ra trạm đổ xăng'],
               ['加油 + 站', 'Trạm (站) đổ xăng (加油) — 加油 cũng nghĩa "cố lên"']]
  },
  '航班': {
    collo: [['去北京的航班', 'chuyến bay đi Bắc Kinh'], ['航班推迟了', 'chuyến bay bị hoãn'],
            ['同一航班', 'cùng chuyến bay'], ['改签航班', 'đổi chuyến bay'],
            ['航班号', 'số hiệu chuyến bay']],
    patterns: [['去 + nơi chốn + 的 + 航班', 'Chuyến bay đi đâu'],
               ['航班 + 推迟 / 取消', 'Chuyến bay hoãn / huỷ']]
  },
  '推迟': {
    collo: [['推迟一个小时', 'hoãn một tiếng'], ['推迟起飞', 'hoãn cất cánh'],
            ['时间推迟了', 'thời gian bị lùi lại'], ['推迟到明天', 'hoãn đến mai'],
            ['会议推迟', 'cuộc họp bị hoãn']],
    patterns: [['推迟 + 到 + thời gian', 'Hoãn đến lúc nào'],
               ['推迟 ≈ 推 (bài 16)', '推迟 chỉ dùng cho thời gian, rõ nghĩa hơn']]
  },
  '高速公路': {
    collo: [['上高速公路', 'lên đường cao tốc'], ['走高速公路', 'đi đường cao tốc'],
            ['高速公路上', 'trên đường cao tốc'], ['高速公路不能停车', 'cao tốc không được đỗ xe'],
            ['离高速公路很近', 'gần đường cao tốc']],
    patterns: [['上 / 走 + 高速公路', 'Lên / đi đường cao tốc'],
               ['高速 + 公路', 'Đường (公路) tốc độ cao (高速) — 速度 là từ bài 14']]
  },
  '登机牌': {
    collo: [['换登机牌', 'đổi thẻ lên máy bay'], ['拿好登机牌', 'cầm chắc thẻ lên máy bay'],
            ['登机牌上的座位号', 'số ghế trên thẻ'], ['打印登机牌', 'in thẻ lên máy bay'],
            ['忘了登机牌', 'quên thẻ lên máy bay']],
    patterns: [['换 + 登机牌', 'Làm thủ tục lấy thẻ lên máy bay'],
               ['登机 + 牌', 'Thẻ (牌) lên máy bay (登机)']]
  },
  '首都': {
    collo: [['中国的首都', 'thủ đô Trung Quốc'], ['首都机场', 'sân bay Thủ Đô'],
            ['越南的首都', 'thủ đô Việt Nam'], ['首都北京', 'thủ đô Bắc Kinh'],
            ['去首都', 'đến thủ đô']],
    patterns: [['nước + 的首都 + 是 + …', 'Thủ đô của nước nào là …'],
               ['首 + 都', 'Thành đô (都) đứng đầu (首)']]
  },
  '旅行': {
    collo: [['去旅行', 'đi du lịch'], ['一次愉快的旅行', 'một chuyến đi vui vẻ'],
            ['旅行中', 'trong chuyến đi'], ['想去旅行', 'muốn đi du lịch'],
            ['旅行计划', 'kế hoạch du lịch']],
    patterns: [['一 + 次 + 旅行', 'Một chuyến du lịch — 愉快 là từ bài 8'],
               ['旅行 ≈ 旅游', '旅行 nhấn việc đi lại; 旅游 nhấn tham quan giải trí']]
  },
  '怪': {
    collo: [['怪可怜的', 'trông tội quá'], ['怪不好意思的', 'thật ngại quá'],
            ['怪累的', 'mệt phết'], ['怪冷的', 'lạnh ghê'],
            ['怪有意思的', 'thú vị ra phết']],
    patterns: [['怪 + Adj + 的', 'Rất … — khung cố định, vế sau bắt buộc có 的'],
               ['✗ 怪可怜 → ✓ 怪可怜的', '怪…的 phải đủ hai đầu']]
  },
  '可怜': {
    collo: [['太可怜了', 'tội quá'], ['怪可怜的', 'trông tội nghiệp'],
            ['可怜的小狗', 'con chó tội nghiệp'], ['觉得可怜', 'thấy tội'],
            ['可怜的孩子', 'đứa trẻ đáng thương']],
    patterns: [['Sub + 太 + 可怜 + 了', 'Ai đó thật đáng thương'],
               ['可怜 ≈ 同情 (bài 16)', '可怜 là tính từ; 同情 là động từ']]
  },
  '对面': {
    collo: [['马路对面', 'bên kia đường'], ['对面的饭店', 'nhà hàng đối diện'],
            ['对面那条街', 'con phố đối diện'], ['坐在对面', 'ngồi đối diện'],
            ['学校对面', 'đối diện trường học']],
    patterns: [['nơi chốn + 对面', 'Đối diện nơi nào — 对面 đứng SAU'],
               ['对 + 面', 'Mặt (面) đối (对) nhau']]
  },
  '烤鸭': {
    collo: [['北京烤鸭', 'vịt quay Bắc Kinh'], ['吃烤鸭', 'ăn vịt quay'],
            ['尝一尝烤鸭', 'nếm thử vịt quay'], ['烤鸭很有名', 'vịt quay rất nổi tiếng'],
            ['一只烤鸭', 'một con vịt quay']],
    patterns: [['烤 + 鸭', 'Vịt (鸭) nướng (烤)'],
               ['尝 + 一尝 + 烤鸭', 'Nếm thử vịt quay — 尝 là từ bài 6']]
  },
  '祝贺': {
    collo: [['祝贺你', 'chúc mừng bạn'], ['表示祝贺', 'gửi lời chúc mừng'],
            ['祝贺成绩合格', 'chúc mừng đạt kết quả'], ['向他祝贺', 'chúc mừng anh ấy'],
            ['热烈祝贺', 'nhiệt liệt chúc mừng']],
    patterns: [['祝贺 + ai (động từ)', 'Chúc mừng ai'],
               ['向 + ai + 表示祝贺', 'Gửi lời chúc mừng tới ai — 表示 là từ bài 11']]
  },
  '合格': {
    collo: [['成绩合格', 'kết quả đạt'], ['考试合格', 'thi đạt'],
            ['不合格', 'không đạt'], ['合格的现代人', 'một người hiện đại đủ tiêu chuẩn'],
            ['质量合格', 'chất lượng đạt chuẩn']],
    patterns: [['N + 合格 / 不合格', 'Cái gì đạt / không đạt chuẩn'],
               ['合格 ≈ 符合标准 (bài 3, 5)', 'Đạt tiêu chuẩn']]
  },
  '干杯': {
    collo: [['干一杯', 'cạn một ly'], ['为……干杯', 'nâng ly vì…'],
            ['跟你干杯', 'cạn ly với bạn'], ['干了杯', 'đã cạn ly'],
            ['大家干杯', 'mọi người cạn ly']],
    patterns: [['为 + N + 干杯', 'Nâng ly vì cái gì'],
               ['干 + 了 + 杯', '干杯 là từ ly hợp: 干了一杯 ✓']]
  },
  '民族': {
    collo: [['少数民族', 'dân tộc thiểu số'], ['民族文化', 'văn hoá dân tộc'],
            ['56个民族', '56 dân tộc'], ['每个民族', 'mỗi dân tộc'],
            ['民族传统', 'truyền thống dân tộc']],
    patterns: [['少数 + 民族', 'Dân tộc thiểu số'],
               ['民族 + 文化 / 传统', 'Văn hoá, truyền thống dân tộc']]
  },
  '打扮': {
    collo: [['打扮得很漂亮', 'trang điểm rất đẹp'], ['打扮一下', 'sửa soạn một chút'],
            ['这种打扮', 'kiểu ăn mặc này'], ['化妆打扮', 'trang điểm ăn diện'],
            ['不太会打扮', 'không biết ăn diện lắm']],
    patterns: [['打扮 + 得 + Adj (động từ)', 'Ăn diện, trang điểm thế nào'],
               ['这种 + 打扮 (danh từ)', 'Kiểu ăn mặc này']]
  },
  '笑话': {
    collo: [['讲笑话', 'kể chuyện cười'], ['有趣的笑话', 'truyện cười thú vị'],
            ['一个笑话', 'một chuyện cười'], ['别笑话我', 'đừng cười tôi'],
            ['一肚子笑话', 'đầy bụng chuyện cười']],
    patterns: [['讲 + 笑话 (danh từ)', 'Kể chuyện cười — 有趣 là từ bài 13'],
               ['笑话 + ai (động từ)', 'Chê cười ai']]
  },
  '存': {
    collo: [['存钱', 'gửi tiền'], ['存包', 'gửi túi'],
            ['存进银行', 'gửi vào ngân hàng'], ['存包的钥匙', 'chìa khoá tủ gửi đồ'],
            ['把包存在这里', 'gửi túi ở đây']],
    patterns: [['把 + N + 存 + 在 / 进 + nơi chốn', 'Gửi cái gì vào đâu'],
               ['存 ↔ 取 (bài 9)', 'Gửi vào ↔ rút ra']]
  },
  '钥匙': {
    collo: [['钥匙丢了', 'mất chìa khoá'], ['找到钥匙', 'tìm thấy chìa khoá'],
            ['一把钥匙', 'một chiếc chìa khoá'], ['存包的钥匙', 'chìa khoá tủ gửi đồ'],
            ['房间的钥匙', 'chìa khoá phòng']],
    patterns: [['một + 把 + 钥匙', 'Lượng từ 把 — cùng kiểu 一把刀 (bài 19)'],
               ['钥匙 (yàoshi) đồng âm với 要是 (nếu như)']]
  },
  '究竟': {
    collo: [['究竟是怎么回事', 'rốt cuộc là chuyện gì'], ['究竟哪个好', 'rốt cuộc cái nào tốt'],
            ['究竟从哪里来', 'rốt cuộc từ đâu tới'], ['究竟去不去', 'rốt cuộc có đi không'],
            ['想知道究竟', 'muốn biết ngọn ngành']],
    patterns: [['究竟 + câu hỏi？', 'Rốt cuộc … ? — 究竟 văn viết hơn 到底 (bài 16)'],
               ['✗ 究竟他来了吗？ → ✓ 究竟他来不来？', 'Cũng không đi với 吗']]
  },
  '棵': {
    collo: [['一棵树', 'một cái cây'], ['一棵大树', 'một cây to'],
            ['两棵植物', 'hai cây'], ['一棵一棵地', 'từng cây một'],
            ['几棵花', 'mấy cây hoa']],
    patterns: [['một + 棵 + cây cối', 'Lượng từ 棵 cho thực vật — 植物 là từ bài 7'],
               ['一棵一棵地 + V', 'Từng cây một — dạng lặp lượng từ']]
  },
  '汤': {
    collo: [['喝汤', 'uống canh'], ['鸡蛋汤', 'canh trứng'],
            ['一碗汤', 'một bát canh'], ['汤很鲜', 'canh rất ngọt'],
            ['做汤', 'nấu canh']],
    patterns: [['喝 + 汤', 'Uống canh — tiếng Trung dùng 喝 chứ không dùng 吃'],
               ['một + 碗 + 汤', 'Một bát canh']]
  },
  '对话': {
    collo: [['完成对话', 'hoàn thành đoạn hội thoại'], ['一段对话', 'một đoạn đối thoại'],
            ['跟他对话', 'đối thoại với anh ấy'], ['对话练习', 'luyện hội thoại'],
            ['听对话', 'nghe hội thoại']],
    patterns: [['跟 + ai + 对话', 'Đối thoại với ai'],
               ['一 + 段 + 对话', 'Một đoạn hội thoại']]
  },
  '普通话': {
    collo: [['讲普通话', 'nói tiếng phổ thông'], ['普通话很标准', 'tiếng phổ thông rất chuẩn'],
            ['普通话水平考试', 'kỳ thi trình độ tiếng phổ thông'], ['学普通话', 'học tiếng phổ thông'],
            ['听不懂普通话', 'không nghe hiểu tiếng phổ thông']],
    patterns: [['讲 / 说 + 普通话', 'Nói tiếng phổ thông'],
               ['普通 (bài 9) + 话', 'Tiếng nói (话) chung (普通)']]
  },
  '小吃': {
    collo: [['有名的小吃', 'món ăn vặt nổi tiếng'], ['尝小吃', 'nếm món ăn vặt'],
            ['小吃街', 'phố ăn vặt'], ['各地的小吃', 'món vặt các vùng'],
            ['美食小吃', 'ẩm thực đường phố']],
    patterns: [['尝 + 小吃', 'Nếm món ăn vặt'],
               ['小 + 吃', 'Món ăn (吃) nhỏ (小) — ăn chơi, không phải bữa chính']]
  },
  '收拾': {
    collo: [['收拾房间', 'dọn phòng'], ['收拾行李', 'thu xếp hành lý'],
            ['收拾好了', 'dọn xong rồi'], ['抽时间收拾', 'tranh thủ dọn'],
            ['收拾东西', 'dọn đồ']],
    patterns: [['收拾 + 房间 / 行李', 'Dọn phòng, xếp hành lý'],
               ['收拾 ≈ 整理 (bài 15)', '收拾 thiên khẩu ngữ, thường là dọn cho gọn']]
  },
  '出发': {
    collo: [['马上出发', 'xuất phát ngay'], ['准时出发', 'xuất phát đúng giờ'],
            ['向目的地出发', 'lên đường tới đích'], ['出发前', 'trước khi khởi hành'],
            ['一放假就出发', 'vừa nghỉ là lên đường']],
    patterns: [['向 + 目的地 + 出发', 'Lên đường tới đích — 目的 là từ bài 14'],
               ['出发 ↔ 到达', 'Khởi hành ↔ đến nơi']]
  },
  '辣': {
    collo: [['太辣了', 'cay quá'], ['不能吃辣', 'không ăn được cay'],
            ['香辣', 'thơm cay'], ['酸辣', 'chua cay'],
            ['湖南菜很辣', 'món Hồ Nam rất cay']],
    patterns: [['Sub + 能 / 不能 + 吃辣', 'Ăn được / không ăn được cay'],
               ['咸 (bài 18) · 苦 (bài 13) · 辣 · 酸 · 香 — nhóm từ chỉ vị']]
  },
  '香': {
    collo: [['很香', 'rất thơm'], ['饺子很香', 'sủi cảo rất thơm'],
            ['香辣', 'thơm cay'], ['花很香', 'hoa rất thơm'],
            ['闻起来很香', 'ngửi rất thơm']],
    patterns: [['N + 很 + 香', 'Cái gì đó rất thơm'],
               ['香 dùng cho cả mùi thức ăn và mùi hoa']]
  },
  '酸': {
    collo: [['太酸了', 'chua quá'], ['又酸又甜', 'vừa chua vừa ngọt'],
            ['酸辣', 'chua cay'], ['酸的味道', 'vị chua'],
            ['有点儿酸', 'hơi chua']],
    patterns: [['又 + 酸 + 又 + 甜', 'Vừa chua vừa ngọt — khung 又……又…… của bài 7'],
               ['酸 ↔ 甜', 'Chua ↔ ngọt']]
  }
};
