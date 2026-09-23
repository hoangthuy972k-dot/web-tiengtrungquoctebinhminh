// Noi dung TU MOI HSK2 (bo cu) bai 8 (chu de: nha hang, mau sac, gia ca).
module.exports = {
  '让': {
    collo: [['让我去', 'để tôi đi'], ['让他来', 'cho anh ấy đến'],
            ['不让', 'không cho'], ['让我看看', 'cho tôi xem']],
    patterns: [['让 + người + động từ', 'Để ai làm gì: 让我看看'],
               ['让 (cho phép, sai ai làm) — người đứng giữa 让 và động từ']]
  },
  '告诉': {
    collo: [['告诉我', 'nói cho tôi'], ['告诉他', 'nói với anh ấy'],
            ['告诉老师', 'nói với thầy'], ['不告诉', 'không nói']],
    patterns: [['告诉 + người + việc gì', 'Cho ai biết việc gì: 告诉我你的名字'],
               ['告诉 phải có người nghe; 说 thì không cần']]
  },
  '等': {
    collo: [['等我', 'chờ tôi'], ['等一下', 'chờ một chút'],
            ['等公共汽车', 'chờ xe buýt'], ['在门外等', 'chờ ngoài cửa']],
    patterns: [['等 + người / vật', 'Chờ ai, chờ cái gì: 等公共汽车'],
               ['等一下 — câu nói lịch sự khi cần người khác chờ']]
  },
  '找': {
    collo: [['找我', 'tìm tôi'], ['找什么', 'tìm gì'],
            ['找到', 'tìm được'], ['找工作', 'tìm việc làm']],
    patterns: [['找 + người / vật', 'Tìm ai, tìm cái gì'],
               ['找 có bộ 扌 (tay) — tìm bằng tay']]
  },
  '事情': {
    collo: [['一件事情', 'một việc'], ['什么事情', 'việc gì'],
            ['很多事情', 'rất nhiều việc'], ['公司的事情', 'việc của công ty']],
    patterns: [['số + 件 + 事情', 'Lượng từ của 事情 là 件'],
               ['事 + 情', 'Hai chữ cùng nghĩa ghép lại thành một từ']]
  },
  '服务员': {
    collo: [['叫服务员', 'gọi nhân viên'], ['问服务员', 'hỏi nhân viên'],
            ['服务员来了', 'nhân viên đến rồi'], ['饭店的服务员', 'nhân viên nhà hàng']],
    patterns: [['问 / 叫 + 服务员', 'Hỏi, gọi nhân viên'],
               ['服务 + 员', 'Người (员) làm công việc phục vụ (服务)']]
  },
  '白': {
    collo: [['白的', 'cái màu trắng'], ['白衣服', 'áo trắng'],
            ['白猫', 'con mèo trắng'], ['白颜色', 'màu trắng']],
    patterns: [['白 + danh từ', 'Cái gì màu trắng: 白衣服'],
               ['白 ↔ 黑 — trắng và đen']]
  },
  '黑': {
    collo: [['黑的', 'cái màu đen'], ['黑衣服', 'áo đen'],
            ['黑颜色', 'màu đen'], ['天黑了', 'trời tối rồi']],
    patterns: [['黑 + danh từ', 'Cái gì màu đen: 黑衣服'],
               ['天黑了 — trời tối, cũng dùng chữ 黑']]
  },
  '贵': {
    collo: [['很贵', 'rất đắt'], ['不贵', 'không đắt'],
            ['太贵了', 'đắt quá'], ['贵的衣服', 'quần áo đắt']],
    patterns: [['太 + 贵 + 了', 'Đắt quá — hai vế đi liền nhau'],
               ['贵 ↔ 不贵 — 太贵了 là câu nói khi mặc cả']]
  }
};
