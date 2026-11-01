// Noi dung TU MOI bai 16 HSK4 (chu de: du hoc, thu tuc, giao tiep xa hoi).
module.exports = {
  '博士': {
    collo: [['读博士', 'học tiến sĩ'], ['博士毕业', 'tốt nghiệp tiến sĩ'],
            ['出国读博士', 'ra nước ngoài học tiến sĩ'], ['博士学位', 'học vị tiến sĩ'],
            ['一位博士', 'một vị tiến sĩ']],
    patterns: [['读 + 博士', 'Học tiến sĩ — cùng kiểu 读硕士 (bài 10)'],
               ['学士 → 硕士 → 博士', 'Cử nhân → thạc sĩ → tiến sĩ']]
  },
  '签证': {
    collo: [['办签证', 'làm visa'], ['签证材料', 'hồ sơ xin visa'],
            ['拿到签证', 'nhận được visa'], ['去使馆办签证', 'đến sứ quán làm visa'],
            ['签证下来了', 'visa đã có']],
    patterns: [['办 + 签证', 'Làm thủ tục visa — dùng động từ 办'],
               ['大使馆 (bài 8) + 办签证', 'Làm visa ở đại sứ quán']]
  },
  '报名': {
    collo: [['报名参加', 'đăng ký tham gia'], ['报名表格', 'mẫu đơn đăng ký'],
            ['报名的最后一天', 'ngày cuối đăng ký'], ['报了名', 'đã đăng ký'],
            ['网上报名', 'đăng ký trực tuyến']],
    patterns: [['报 + 了 + 名', '报名 là từ ly hợp: 报了名 ✓ / 报名了他 ✗'],
               ['报名 + 参加 + N', 'Đăng ký tham gia cái gì']]
  },
  '表格': {
    collo: [['填写表格', 'điền mẫu đơn'], ['一张表格', 'một tờ đơn'],
            ['报名表格', 'mẫu đơn đăng ký'], ['把表格填好', 'điền xong mẫu đơn'],
            ['交表格', 'nộp đơn']],
    patterns: [['填写 / 填 + 表格', 'Điền vào mẫu đơn'],
               ['một + 张 + 表格', 'Lượng từ 张 cho vật phẳng mỏng']]
  },
  '传真': {
    collo: [['发传真', 'gửi fax'], ['收到传真', 'nhận được fax'],
            ['传真给你', 'fax cho bạn'], ['传真号码', 'số fax'],
            ['把信传真过去', 'fax lá thư đi']],
    patterns: [['把 + N + 传真给 + ai', 'Fax cái gì cho ai'],
               ['发 / 收到 + 传真 (danh từ)', 'Gửi / nhận fax']]
  },
  '号码': {
    collo: [['电话号码', 'số điện thoại'], ['手机号码', 'số di động'],
            ['写下号码', 'ghi lại số'], ['号码错了', 'sai số rồi'],
            ['记住号码', 'nhớ số']],
    patterns: [['loại + 号码', '电话号码, 手机号码 — số của cái gì'],
               ['号码 ≠ 数字 (bài 7)', '号码 là số hiệu; 数字 là con số']]
  },
  '参观': {
    collo: [['参观公司', 'tham quan công ty'], ['参观博物馆', 'tham quan bảo tàng'],
            ['带大家参观', 'dẫn mọi người tham quan'], ['参观过程中', 'trong lúc tham quan'],
            ['欢迎参观', 'hoan nghênh tham quan']],
    patterns: [['参观 + nơi chốn', 'Tham quan nơi nào'],
               ['参观 ≠ 访问', '参观 là xem nơi chốn; 访问 là đến gặp người']]
  },
  '激动': {
    collo: [['很激动', 'rất xúc động'], ['激动得哭了', 'xúc động đến khóc'],
            ['感到激动', 'cảm thấy xúc động'], ['别激动', 'đừng kích động'],
            ['激动的心情', 'tâm trạng xúc động']],
    patterns: [['激动 + 得 + kết quả', 'Xúc động đến mức nào'],
               ['激动 ≠ 兴奋 (bài 10)', '激动 là xúc động sâu; 兴奋 là phấn khích']]
  },
  '小伙子': {
    collo: [['一个小伙子', 'một chàng trai'], ['年轻的小伙子', 'chàng trai trẻ'],
            ['这个小伙子很能干', 'cậu này giỏi lắm'], ['好啊，小伙子', 'được đấy, chàng trai'],
            ['小伙子和姑娘', 'chàng trai và cô gái']],
    patterns: [['小伙子 (nam trẻ) / 姑娘 (nữ trẻ)'],
               ['小伙子 thân mật, người lớn tuổi dùng gọi thanh niên']]
  },
  '记者': {
    collo: [['当记者', 'làm phóng viên'], ['著名的记者', 'nhà báo nổi tiếng'],
            ['一个记者问过我', 'một phóng viên từng hỏi tôi'], ['记者采访', 'phóng viên phỏng vấn'],
            ['报社记者', 'phóng viên toà báo']],
    patterns: [['当 + 记者', 'Làm phóng viên'],
               ['记 + 者', 'Người (者) ghi chép (记) — cùng kiểu 学者, 作者']]
  },
  '代表': {
    collo: [['代表公司', 'đại diện công ty'], ['代表大家发言', 'thay mặt mọi người phát biểu'],
            ['代表钱的多少', 'tượng trưng cho số tiền'], ['一位代表', 'một đại biểu'],
            ['代表学校参加', 'đại diện trường tham gia']],
    patterns: [['代表 + tổ chức + V (động từ)', 'Thay mặt ai đó làm gì'],
               ['A 代表 B', 'A tượng trưng cho B']]
  },
  '恐怕': {
    collo: [['恐怕不行', 'e là không được'], ['恐怕来不及了', 'e không kịp'],
            ['恐怕你已经知道', 'chắc bạn đã biết'], ['恐怕完成不了', 'e không làm nổi'],
            ['恐怕要下雨', 'e là sắp mưa']],
    patterns: [['恐怕 + mệnh đề (thường xấu)', 'E rằng … — phỏng đoán điều không mong muốn'],
               ['恐怕 ≠ 可能', '恐怕 luôn mang lo ngại; 可能 trung tính']]
  },
  '失望': {
    collo: [['很失望', 'rất thất vọng'], ['对他失望', 'thất vọng về anh ấy'],
            ['让人失望', 'khiến người ta thất vọng'], ['父母失望', 'bố mẹ thất vọng'],
            ['失望地走了', 'thất vọng bỏ đi']],
    patterns: [['对 + ai + 失望', 'Thất vọng về ai'],
               ['失 + 望', 'Mất (失) hy vọng (望) — ghép nghĩa dễ nhớ']]
  },
  '郊区': {
    collo: [['去郊区住', 'ra ngoại ô ở'], ['郊区的房子', 'nhà ở ngoại ô'],
            ['到郊区过周末', 'ra ngoại ô nghỉ cuối tuần'], ['住在郊区', 'sống ở ngoại ô'],
            ['郊区空气好', 'ngoại ô không khí tốt']],
    patterns: [['住 / 去 + 郊区', 'Sống ở / đi ngoại ô'],
               ['郊区 ↔ 市区', 'Ngoại ô ↔ nội thành']]
  },
  '到底': {
    collo: [['到底怎么回事', 'rốt cuộc là chuyện gì'], ['到底去不去', 'rốt cuộc có đi không'],
            ['你到底怎么打算', 'rốt cuộc bạn định thế nào'], ['坚持到底', 'kiên trì đến cùng'],
            ['到底是谁', 'rốt cuộc là ai']],
    patterns: [['到底 + câu hỏi？', 'Rốt cuộc … ? — thúc giục trả lời dứt khoát'],
               ['✗ 他到底来了吗？ → ✓ 他到底来不来？', '到底 không đi với 吗']]
  },
  '呀': {
    collo: [['是谁呀', 'là ai vậy'], ['快来呀', 'mau đến đi'],
            ['怎么打算的呀', 'định thế nào vậy'], ['好大呀', 'to thật đấy'],
            ['去哪儿呀', 'đi đâu vậy']],
    patterns: [['câu + 呀', 'Trợ từ cuối câu — biến âm của 啊 sau nguyên âm a/e/i/o/ü'],
               ['呀 làm câu nghe mềm và thân mật hơn']]
  },
  '导游': {
    collo: [['当导游', 'làm hướng dẫn viên'], ['让我当导游', 'nhờ tôi làm hướng dẫn'],
            ['导游带着大家', 'hướng dẫn viên dẫn mọi người'], ['一位导游', 'một hướng dẫn viên'],
            ['听导游介绍', 'nghe hướng dẫn viên giới thiệu']],
    patterns: [['当 + 导游', 'Làm hướng dẫn viên'],
               ['导 + 游', 'Dẫn (导) đi chơi (游)']]
  },
  '礼貌': {
    collo: [['有礼貌', 'lễ phép'], ['没礼貌', 'vô lễ'],
            ['很礼貌', 'rất lịch sự'], ['基本的礼貌', 'phép lịch sự cơ bản'],
            ['礼貌地说', 'nói một cách lịch sự']],
    patterns: [['有 / 没 + 礼貌', 'Có / không có lễ phép'],
               ['礼貌地 + V', 'Làm gì một cách lịch sự']]
  },
  '原谅': {
    collo: [['请原谅', 'xin thứ lỗi'], ['原谅我', 'tha lỗi cho tôi'],
            ['得到原谅', 'được tha thứ'], ['原谅他吧', 'tha cho anh ấy đi'],
            ['不能原谅', 'không thể tha thứ']],
    patterns: [['原谅 + ai', 'Tha thứ cho ai'],
               ['请 + 原谅', 'Xin thứ lỗi — lời xin lỗi trang trọng']]
  },
  '挂': {
    collo: [['挂在墙上', 'treo trên tường'], ['挂电话', 'cúp máy'],
            ['先别挂', 'đừng cúp vội'], ['把画挂起来', 'treo tranh lên'],
            ['挂在嘴边', 'suốt ngày nói mãi']],
    patterns: [['把 + N + 挂在 + nơi chốn + 上', 'Treo cái gì lên đâu'],
               ['挂 + 电话', 'Cúp điện thoại — nghĩa riêng cần nhớ']]
  },
  '同情': {
    collo: [['同情心', 'lòng thương người'], ['值得同情', 'đáng thương'],
            ['同情他', 'thông cảm cho anh ấy'], ['得不到同情', 'không được ai thông cảm'],
            ['有同情心', 'có lòng trắc ẩn']],
    patterns: [['同情 + ai (động từ)', 'Thông cảm, thương cho ai'],
               ['有 / 没有 + 同情心 (danh từ)', 'Có / không có lòng thương người']]
  },
  '推': {
    collo: [['推开门', 'đẩy cửa'], ['推到明天', 'hoãn sang mai'],
            ['推出活动', 'tung ra chương trình'], ['别推了', 'đừng hoãn nữa'],
            ['把事情推给别人', 'đùn việc cho người khác']],
    patterns: [['把 + N + 推到 + thời gian', 'Hoãn việc gì sang lúc nào'],
               ['推 vừa là "đẩy" vừa là "hoãn" — phân biệt theo ngữ cảnh']]
  },
  '预习': {
    collo: [['课前预习', 'chuẩn bị bài trước giờ học'], ['预习完课文', 'chuẩn bị xong bài đọc'],
            ['有预习的习惯', 'có thói quen chuẩn bị bài'], ['注意预习', 'chú ý chuẩn bị bài'],
            ['预习和复习', 'chuẩn bị bài và ôn bài']],
    patterns: [['预习 ↔ 复习', 'Chuẩn bị bài trước ↔ ôn lại bài sau'],
               ['预 + 习', 'Học (习) trước (预)']]
  },
  '重点': {
    collo: [['重点内容', 'nội dung trọng tâm'], ['找出重点', 'tìm ra trọng tâm'],
            ['讲重点', 'nói vào trọng tâm'], ['复习重点', 'ôn phần trọng tâm'],
            ['学习的重点', 'trọng tâm học tập']],
    patterns: [['找出 / 讲 + 重点', 'Tìm ra / trình bày trọng tâm'],
               ['重点 + 内容', 'Nội dung trọng tâm — 内容 là từ bài 11']]
  },
  '马虎': {
    collo: [['太马虎了', 'cẩu thả quá'], ['做事马虎', 'làm việc qua loa'],
            ['马马虎虎', 'làng nhàng, tàm tạm'], ['不能马虎', 'không được cẩu thả'],
            ['马虎的人', 'người qua loa']],
    patterns: [['马马虎虎', 'Dạng lặp AABB — nghĩa "tàm tạm" khi trả lời'],
               ['马虎 ≈ 粗心 (bài 15)', '马虎 nhấn qua loa; 粗心 nhấn không để ý']]
  },
  '自信': {
    collo: [['很自信', 'rất tự tin'], ['越说越自信', 'càng nói càng tự tin'],
            ['对自己有自信', 'tự tin vào bản thân'], ['自信的年轻人', 'người trẻ tự tin'],
            ['缺少自信', 'thiếu tự tin']],
    patterns: [['Sub + 很 + 自信 (tính từ)', 'Ai đó rất tự tin'],
               ['自信 ≈ 有信心 (bài 3)', '自信 là tính từ; 信心 là danh từ đi với 有']]
  },
  '冷静': {
    collo: [['冷静下来', 'bình tĩnh lại'], ['千万要冷静', 'nhất định phải bình tĩnh'],
            ['冷静地处理', 'xử lý bình tĩnh'], ['很冷静', 'rất điềm tĩnh'],
            ['保持冷静', 'giữ bình tĩnh']],
    patterns: [['冷静 + 下来', 'Bình tĩnh trở lại — bổ ngữ xu hướng 下来'],
               ['冷静地 + V', 'Làm gì một cách điềm tĩnh']]
  },
  '输': {
    collo: [['输了比赛', 'thua trận'], ['输给对手', 'thua đối thủ'],
            ['不管输赢', 'bất kể thắng thua'], ['没有人会永远输', 'không ai thua mãi'],
            ['输了也没关系', 'thua cũng không sao']],
    patterns: [['输 + 给 + ai', 'Thua ai'],
               ['输 ↔ 赢 (bài 9)', 'Thua ↔ thắng']]
  },
  '重视': {
    collo: [['重视教育', 'coi trọng giáo dục'], ['引起重视', 'được chú ý'],
            ['重视平时的积累', 'coi trọng tích luỹ hằng ngày'], ['很重视', 'rất coi trọng'],
            ['不够重视', 'chưa coi trọng đủ']],
    patterns: [['重视 + N', 'Coi trọng cái gì'],
               ['重视 (zhòngshì) — 重 ở đây đọc zhòng như 重要']]
  },
  '敢': {
    collo: [['不敢说', 'không dám nói'], ['敢说真话', 'dám nói thật'],
            ['你敢不敢', 'bạn có dám không'], ['不敢再躺着看书', 'không dám nằm đọc sách nữa'],
            ['敢试试', 'dám thử']],
    patterns: [['Sub + 敢 / 不敢 + V', 'Ai đó dám / không dám làm gì'],
               ['敢不敢 + V？', 'Có dám làm gì không? — hỏi chính phản']]
  },
  '尊重': {
    collo: [['尊重别人', 'tôn trọng người khác'], ['得到尊重', 'được tôn trọng'],
            ['互相尊重', 'tôn trọng lẫn nhau'], ['尊重别人的意见', 'tôn trọng ý kiến người khác'],
            ['尊重老人', 'kính trọng người già']],
    patterns: [['尊重 + ai / 意见', 'Tôn trọng ai, tôn trọng ý kiến'],
               ['互相 + 尊重', 'Tôn trọng lẫn nhau — 互相 là từ bài 1']]
  }
};
