// Noi dung TU MOI HSK2 3.0 bai 13 (chu de: nam moi, lop hoc, chuc mung).
module.exports = {
  '新年': {
    collo: [['过新年', 'đón năm mới'], ['新年快乐', 'chúc mừng năm mới'],
            ['新年的时候', 'dịp năm mới'], ['中国新年', 'Tết Trung Quốc']],
    patterns: [['过 + 新年', 'Đón năm mới — dùng động từ 过'],
               ['新年快乐！là câu chúc quen thuộc nhất dịp Tết']]
  },
  '教': {
    collo: [['教汉语', 'dạy tiếng Trung'], ['教我', 'dạy tôi'],
            ['教学生', 'dạy học sinh'], ['教他写字', 'dạy anh ấy viết chữ']],
    patterns: [['教 + người + việc', 'Dạy ai cái gì: 老师教我们汉语'],
               ['教 (dạy) ↔ 学 (học)']]
  },
  '花': {
    collo: [['一些花', 'một ít hoa'], ['买花', 'mua hoa'],
            ['送花', 'tặng hoa'], ['漂亮的花', 'bông hoa đẹp']],
    patterns: [['买 / 送 + 花', 'Mua hoa, tặng hoa'],
               ['花 (bông hoa) và 花 (tiêu tốn) — cùng chữ, hai nghĩa']]
  },
  '希望': {
    collo: [['希望你来', 'mong bạn đến'], ['希望考得好', 'mong thi tốt'],
            ['我希望', 'tôi mong rằng'], ['希望你们快乐', 'chúc các bạn vui vẻ']],
    patterns: [['希望 + mệnh đề', 'Mong rằng …: 我希望你新年快乐'],
               ['希望 (mong muốn điều tốt) khác 想 (muốn làm gì)']]
  },
  '上面': {
    collo: [['桌子上面', 'trên mặt bàn'], ['在上面', 'ở phía trên'],
            ['上面有', 'phía trên có'], ['本子上面', 'trên quyển vở']],
    patterns: [['danh từ + 上面', 'Phía trên cái gì: 桌子上面'],
               ['上面 ↔ 下面', 'Trên ↔ dưới — đều đứng SAU danh từ']]
  },
  '洗手间': {
    collo: [['去洗手间', 'đi nhà vệ sinh'], ['洗手间在哪里', 'nhà vệ sinh ở đâu'],
            ['洗手间里', 'trong nhà vệ sinh'], ['楼下的洗手间', 'nhà vệ sinh dưới lầu']],
    patterns: [['洗手间 + 在哪里？', 'Nhà vệ sinh ở đâu — câu rất hay dùng'],
               ['洗手 + 间', 'Gian (间) rửa tay (洗手) — cách nói lịch sự']]
  },
  '里面': {
    collo: [['房间里面', 'trong phòng'], ['在里面', 'ở bên trong'],
            ['里面有', 'bên trong có'], ['书包里面', 'trong cặp sách']],
    patterns: [['danh từ + 里面', 'Bên trong cái gì: 书包里面'],
               ['里面 ↔ 外面', 'Trong ↔ ngoài']]
  },
  '笔': {
    collo: [['买笔', 'mua bút'], ['用笔写', 'viết bằng bút'],
            ['我的笔', 'cây bút của tôi'], ['画笔', 'cọ vẽ']],
    patterns: [['用 + 笔 + 写', 'Viết bằng bút'],
               ['笔 nằm trong 画笔 — cùng một chữ 笔']]
  },
  '可能': {
    collo: [['可能来', 'có thể đến'], ['不可能', 'không thể nào'],
            ['可能下雨', 'có thể mưa'], ['可能很忙', 'chắc là rất bận']],
    patterns: [['可能 + động từ / tính từ', 'Có lẽ, chắc là: 他可能不来了'],
               ['可能 (phỏng đoán) khác 可以 (được phép)']]
  },
  '上网': {
    collo: [['上网买票', 'lên mạng mua vé'], ['在家上网', 'lên mạng ở nhà'],
            ['喜欢上网', 'thích lên mạng'], ['上网看电影', 'lên mạng xem phim']],
    patterns: [['上网 + động từ', 'Lên mạng làm gì: 上网买票'],
               ['上 + 网', 'Lên (上) mạng (网)']]
  },
  '那样': {
    collo: [['那样做', 'làm như thế kia'], ['那样说', 'nói như thế kia'],
            ['那样的人', 'người như thế kia'], ['别那样', 'đừng như thế']],
    patterns: [['那样 + động từ', 'Làm như thế kia: 别那样做'],
               ['这样 (như thế này, gần) ↔ 那样 (như thế kia, xa)']]
  },
  '告诉': {
    collo: [['告诉我', 'nói cho tôi biết'], ['告诉他', 'nói cho anh ấy'],
            ['告诉你一件事', 'nói với bạn một việc'], ['别告诉他', 'đừng nói với anh ấy']],
    patterns: [['告诉 + người + việc', 'Nói cho ai biết chuyện gì'],
               ['告诉 (báo tin) khác 说 (nói ra lời) và 问 (hỏi)']]
  },
  '班': {
    collo: [['我们班', 'lớp chúng tôi'], ['一个班', 'một lớp'],
            ['班里', 'trong lớp'], ['班里的同学', 'bạn cùng lớp']],
    patterns: [['ai + 班', 'Lớp của ai: 我们班'],
               ['班 (lớp học) khác 上班 (đi làm) — cùng chữ 班']]
  }
};
