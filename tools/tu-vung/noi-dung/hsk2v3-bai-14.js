// Noi dung TU MOI HSK2 3.0 bai 14 (chu de: an Tet, ta nguoi, nha cua).
module.exports = {
  '站': {
    collo: [['站起来', 'đứng dậy'], ['站在门口', 'đứng ở cổng'],
            ['别站着', 'đừng đứng'], ['地铁站', 'ga tàu điện ngầm']],
    patterns: [['站 + 在 + nơi chốn', 'Đứng ở đâu: 他站在门口'],
               ['站 (đứng, động từ) và 站 (bến, ga — danh từ) — cùng chữ']]
  },
  '包': {
    collo: [['一个包', 'một cái túi'], ['我的包', 'túi của tôi'],
            ['包里', 'trong túi'], ['书包', 'cặp sách']],
    patterns: [['một + 个 + 包', 'Lượng từ của 包 là 个'],
               ['包 nằm trong 书包 · 面包 · 包子 — cùng một chữ']]
  },
  '过年': {
    collo: [['回家过年', 'về nhà ăn Tết'], ['过年的时候', 'dịp Tết'],
            ['在西安过年', 'ăn Tết ở Tây An'], ['过年快乐', 'chúc Tết vui vẻ']],
    patterns: [['回 + nơi chốn + 过年', 'Về đâu ăn Tết: 回家过年'],
               ['过年 = 过新年 — 过年 ngắn gọn hơn, hay dùng khi nói']]
  },
  '没意思': {
    collo: [['很没意思', 'rất chán'], ['没意思的电影', 'bộ phim chán'],
            ['觉得没意思', 'thấy chán'], ['一点儿也没意思', 'chẳng thú vị chút nào']],
    patterns: [['Sub + 没意思', 'Chán, không thú vị: 这个电影没意思'],
               ['没意思 ↔ 有意思', 'Chán ↔ thú vị']]
  },
  '位': {
    collo: [['一位老师', 'một vị giáo viên'], ['这位女士', 'vị nữ này'],
            ['几位客人', 'mấy vị khách'], ['那位先生', 'vị ông kia']],
    patterns: [['số + 位 + người', 'Lượng từ 位 dùng cho người, có ý KÍNH TRỌNG'],
               ['✗ 一位小孩儿 → 位 chỉ dùng với người lớn, người cần tôn trọng']]
  },
  '前面': {
    collo: [['学校前面', 'trước trường'], ['在前面', 'ở phía trước'],
            ['我前面', 'phía trước tôi'], ['前面有', 'phía trước có']],
    patterns: [['danh từ + 前面', 'Phía trước cái gì: 学校前面'],
               ['前面 ↔ 后面', 'Trước ↔ sau']]
  },
  '房子': {
    collo: [['一个房子', 'một căn nhà'], ['买房子', 'mua nhà'],
            ['大房子', 'căn nhà lớn'], ['房子里面', 'trong nhà']],
    patterns: [['买 + 房子', 'Mua nhà'],
               ['房子 (căn nhà) và 房间 (căn phòng) — cùng chữ 房']]
  },
  '小孩儿': {
    collo: [['一个小孩儿', 'một đứa trẻ'], ['那个小孩儿', 'đứa trẻ kia'],
            ['小孩儿的名字', 'tên đứa trẻ'], ['很多小孩儿', 'rất nhiều trẻ con']],
    patterns: [['số + 个 + 小孩儿', 'Lượng từ của 小孩儿 là 个'],
               ['小孩儿 = 孩子 — 小孩儿 thiên khẩu ngữ hơn']]
  },
  '女孩儿': {
    collo: [['一个女孩儿', 'một bé gái'], ['那个女孩儿', 'cô bé kia'],
            ['女孩儿的眼睛', 'đôi mắt cô bé'], ['漂亮的女孩儿', 'cô bé xinh xắn']],
    patterns: [['số + 个 + 女孩儿', 'Lượng từ của 女孩儿 là 个'],
               ['女孩儿 (bé gái) ↔ 男孩儿 (bé trai)']]
  },
  '姓': {
    collo: [['姓王', 'họ Vương'], ['你姓什么', 'bạn họ gì'],
            ['我姓李', 'tôi họ Lý'], ['姓和名字', 'họ và tên']],
    patterns: [['Sub + 姓 + họ', 'Ai đó họ gì: 我姓王'],
               ['姓 (họ) khác 叫 (tên) — 我姓王，叫王方']]
  },
  '眼睛': {
    collo: [['大眼睛', 'đôi mắt to'], ['漂亮的眼睛', 'đôi mắt đẹp'],
            ['她的眼睛', 'đôi mắt cô ấy'], ['眼睛不舒服', 'mắt khó chịu']],
    patterns: [['ai + 的 + 眼睛', 'Đôi mắt của ai'],
               ['眼 + 睛', 'Hai chữ đều có bộ 目 (mắt)']]
  },
  '跳舞': {
    collo: [['喜欢跳舞', 'thích nhảy múa'], ['去跳舞', 'đi nhảy'],
            ['会跳舞', 'biết nhảy'], ['跳得很好', 'nhảy rất đẹp']],
    patterns: [['会 + 跳舞', 'Biết nhảy — kỹ năng học mà có'],
               ['跳舞 là từ ly hợp: 跳了一个舞 ✓ / 跳舞了一个 ✗']]
  }
};
