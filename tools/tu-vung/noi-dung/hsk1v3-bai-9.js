// Noi dung TU MOI HSK1 3.0 bai 9 (chu de: vi tri, sach vo, so thich).
module.exports = {
  '前边': {
    collo: [['学校前边', 'trước trường'], ['在前边', 'ở phía trước'],
            ['前边有', 'phía trước có'], ['房间前边', 'trước phòng']],
    patterns: [['danh từ + 前边', 'Phía trước cái gì: 学校前边'],
               ['前边 = 前面 — hai cách nói cùng nghĩa']]
  },
  '边': {
    collo: [['前边', 'phía trước'], ['外边', 'bên ngoài'],
            ['那边', 'đằng kia'], ['这边', 'bên này']],
    patterns: [['hướng + 边', 'Ghép thành từ chỉ vị trí: 前边 · 外边 · 那边'],
               ['边 luôn đứng SAU, không đứng trước']]
  },
  '家': {
    collo: [['我家', 'nhà tôi'], ['回家', 'về nhà'],
            ['家里', 'trong nhà'], ['家外边', 'bên ngoài nhà']],
    patterns: [['người + 家', 'Nhà của ai — nói 我家, ít khi nói 我的家'],
               ['家 vừa là ngôi nhà, vừa là gia đình']]
  },
  '那个': {
    collo: [['那个人', 'người kia'], ['那个椅子', 'cái ghế kia'],
            ['那个书店', 'hiệu sách kia'], ['那个朋友', 'người bạn kia']],
    patterns: [['那 + 个 + danh từ', 'Cái kia — vật ở xa người nói'],
               ['那个 (xa) ↔ 这个 (gần)']]
  },
  '外边': {
    collo: [['家外边', 'bên ngoài nhà'], ['在外边', 'ở bên ngoài'],
            ['房间外边', 'ngoài phòng'], ['外边有', 'bên ngoài có']],
    patterns: [['danh từ + 外边', 'Bên ngoài cái gì: 房间外边'],
               ['外边 ↔ 里边', 'Ngoài ↔ trong']]
  },
  '椅子': {
    collo: [['一个椅子', 'một cái ghế'], ['椅子上', 'trên ghế'],
            ['椅子下', 'dưới ghế'], ['那个椅子', 'cái ghế kia']],
    patterns: [['một + 个 + 椅子', 'Lượng từ của 椅子 là 个'],
               ['椅 + 子', '子 là đuôi từ đọc nhẹ, giống 桌子 · 包子']]
  },
  '上': {
    collo: [['桌子上', 'trên bàn'], ['椅子上', 'trên ghế'],
            ['书上', 'trên sách'], ['上边', 'phía trên']],
    patterns: [['danh từ + 上', 'Trên cái gì: 桌子上'],
               ['上 ↔ 下', 'Trên ↔ dưới — cả hai đều đứng SAU danh từ']]
  },
  '本': {
    collo: [['一本书', 'một quyển sách'], ['几本书', 'mấy quyển sách'],
            ['这本书', 'quyển sách này'], ['那本中文书', 'quyển sách tiếng Trung kia']],
    patterns: [['số / chỉ định + 本 + 书', 'Lượng từ 本 dùng cho sách vở'],
               ['✗ 一个书 → ✓ 一本书']]
  },
  '书': {
    collo: [['一本书', 'một quyển sách'], ['读书', 'đọc sách'],
            ['中文书', 'sách tiếng Trung'], ['我的书', 'sách của tôi']],
    patterns: [['读 + 书', 'Đọc sách'],
               ['中文 + 书', 'Sách tiếng Trung — ghép thẳng, không cần 的']]
  },
  '那': {
    collo: [['那个人', 'người kia'], ['那本书', 'quyển sách kia'],
            ['那边', 'đằng kia'], ['那是', 'kia là']],
    patterns: [['那 + lượng từ + danh từ', 'Cái kia: 那本书 · 那个椅子'],
               ['那 (xa) ↔ 这 (gần) — cặp từ chỉ định cơ bản']]
  },
  '第': {
    collo: [['第一', 'thứ nhất'], ['第二', 'thứ hai'],
            ['第一本书', 'quyển sách thứ nhất'], ['第三个', 'cái thứ ba']],
    patterns: [['第 + số + lượng từ + danh từ', 'Thứ tự: 第一本书'],
               ['第 phải đi với số: ✗ 第本书 → ✓ 第一本书']]
  },
  '学习': {
    collo: [['学习中文', 'học tiếng Trung'], ['在学校学习', 'học ở trường'],
            ['喜欢学习', 'thích học'], ['学习什么', 'học cái gì']],
    patterns: [['学习 + môn học', 'Học cái gì: 学习中文'],
               ['学 + 习', 'Học (学) rồi ôn đi ôn lại (习)']]
  },
  '做': {
    collo: [['做饭', 'nấu cơm'], ['做什么', 'làm gì'],
            ['白天做什么', 'ban ngày làm gì'], ['会做', 'biết làm']],
    patterns: [['做 + danh từ', 'Làm việc gì: 做饭 · 做菜'],
               ['做什么 — câu hỏi rất hay dùng để hỏi ai đó đang làm gì']]
  },
  '白天': {
    collo: [['白天上课', 'ban ngày đi học'], ['白天工作', 'ban ngày làm việc'],
            ['白天做什么', 'ban ngày làm gì'], ['白天在家', 'ban ngày ở nhà']],
    patterns: [['白天 + Sub + động từ', 'Ban ngày làm gì'],
               ['白天 (ban ngày) ↔ 晚上 (buổi tối)']]
  },
  '读书': {
    collo: [['喜欢读书', 'thích đọc sách'], ['在家读书', 'đọc sách ở nhà'],
            ['读中文书', 'đọc sách tiếng Trung'], ['读什么书', 'đọc sách gì']],
    patterns: [['读 + 书', 'Đọc sách — cũng có nghĩa là đi học'],
               ['读书 vừa là đọc sách, vừa là chuyện học hành']]
  },
  '和': {
    collo: [['我和朋友', 'tôi và bạn'], ['书和电脑', 'sách và máy tính'],
            ['猫和狗', 'mèo và chó'], ['和朋友一起', 'cùng với bạn']],
    patterns: [['danh từ + 和 + danh từ', '和 chỉ nối DANH TỪ, không nối hai câu'],
               ['和 + ai + 一起 + động từ', 'Cùng ai làm gì']]
  },
  '朋友': {
    collo: [['我的朋友', 'bạn của tôi'], ['好朋友', 'bạn thân'],
            ['中国朋友', 'bạn người Trung Quốc'], ['和朋友一起', 'cùng với bạn']],
    patterns: [['好 + 朋友', 'Bạn thân — 好 ở đây nghĩa là thân thiết'],
               ['朋友 (bạn nói chung) ≠ 同学 (bạn cùng lớp)']]
  },
  '唱': {
    collo: [['唱歌', 'hát'], ['喜欢唱', 'thích hát'],
            ['会唱', 'biết hát'], ['唱中文歌', 'hát bài hát tiếng Trung']],
    patterns: [['唱 + 歌', 'Hát — luôn đi với 歌'],
               ['唱 có bộ 口 (miệng) bên trái — hát bằng miệng']]
  },
  '歌': {
    collo: [['唱歌', 'hát'], ['中文歌', 'bài hát tiếng Trung'],
            ['好听的歌', 'bài hát hay'], ['一个歌', 'một bài hát']],
    patterns: [['唱 + 歌', 'Hát một bài hát'],
               ['中文 + 歌', 'Bài hát tiếng Trung — ghép thẳng']]
  },
  '好听': {
    collo: [['很好听', 'rất hay'], ['非常好听', 'cực kỳ hay'],
            ['不好听', 'không hay'], ['好听的歌', 'bài hát hay']],
    patterns: [['很 / 非常 + 好听', 'Hay — nói về bài hát, giọng nói'],
               ['好 + 听', 'Nghe (听) thấy tốt (好) — cùng kiểu với 好看, 好吃']]
  },
  '电视': {
    collo: [['看电视', 'xem tivi'], ['一个电视', 'một cái tivi'],
            ['电视里', 'trong tivi'], ['喜欢看电视', 'thích xem tivi']],
    patterns: [['看 + 电视', 'Xem tivi — dùng 看'],
               ['电视 · 电影 · 电话 · 电脑 — đều bắt đầu bằng 电']]
  },
  '狗': {
    collo: [['一只狗', 'một con chó'], ['小狗', 'chó con'],
            ['我的狗', 'con chó của tôi'], ['和狗玩', 'chơi với chó']],
    patterns: [['một + 只 + 狗', 'Lượng từ của 狗 là 只'],
               ['狗 có bộ 犭 (thú) bên trái, giống chữ 猫']]
  },
  '玩': {
    collo: [['和朋友玩', 'chơi với bạn'], ['和狗玩', 'chơi với chó'],
            ['喜欢玩', 'thích chơi'], ['出去玩', 'ra ngoài chơi']],
    patterns: [['和 + ai + 玩', 'Chơi với ai: 和朋友玩'],
               ['玩 có bộ 王 bên trái — nghĩa gốc liên quan đến ngọc, sau thành "chơi"']]
  }
};
