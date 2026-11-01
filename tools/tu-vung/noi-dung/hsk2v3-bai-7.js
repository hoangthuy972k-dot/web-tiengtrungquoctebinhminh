// Noi dung TU MOI HSK2 3.0 bai 7 (chu de: the thao, so thich, huong di).
module.exports = {
  '从': {
    collo: [['从这里', 'từ đây'], ['从家里出来', 'từ nhà đi ra'],
            ['从西安回来', 'từ Tây An về'], ['从八点开始', 'bắt đầu từ tám giờ']],
    patterns: [['从 + nơi chốn / thời gian', 'Từ đâu, từ lúc nào: 从八点开始'],
               ['从 + A + 到 + B', 'Từ A đến B: 从家到学校']]
  },
  '往': {
    collo: [['往前走', 'đi về phía trước'], ['往左走', 'rẽ trái'],
            ['往右走', 'rẽ phải'], ['往那边去', 'đi về phía kia']],
    patterns: [['往 + hướng + 走', 'Đi về hướng nào: 往前走'],
               ['往 (hướng di chuyển) — hay dùng khi chỉ đường']]
  },
  '跑': {
    collo: [['跑得很快', 'chạy rất nhanh'], ['跑过来', 'chạy lại đây'],
            ['跑步', 'chạy bộ'], ['别跑', 'đừng chạy']],
    patterns: [['跑 + 得 + tính từ', 'Chạy thế nào: 跑得很快'],
               ['跑 có bộ 足 (chân) bên trái — chạy bằng chân']]
  },
  '打': {
    collo: [['打篮球', 'chơi bóng rổ'], ['打电话', 'gọi điện'],
            ['打车', 'bắt taxi'], ['打开', 'mở ra']],
    patterns: [['打 + 篮球', 'Chơi bóng rổ — môn dùng TAY thì dùng 打'],
               ['打篮球 ✓ / 踢篮球 ✗ — 打 dùng tay, 踢 dùng chân']]
  },
  '篮球': {
    collo: [['打篮球', 'chơi bóng rổ'], ['喜欢篮球', 'thích bóng rổ'],
            ['一个篮球', 'một quả bóng rổ'], ['看篮球', 'xem bóng rổ']],
    patterns: [['打 + 篮球', 'Chơi bóng rổ — dùng tay nên đi với 打'],
               ['篮 + 球', 'Quả bóng (球) ném vào rổ (篮)']]
  },
  '运动': {
    collo: [['喜欢运动', 'thích vận động'], ['做运动', 'tập thể thao'],
            ['运动的时候', 'lúc vận động'], ['每天运动', 'ngày nào cũng tập']],
    patterns: [['喜欢 / 做 + 运动', 'Thích vận động, tập thể thao'],
               ['运 + 动', 'Chuyển (运) động (动) — vận động cơ thể']]
  },
  '踢': {
    collo: [['踢足球', 'đá bóng'], ['喜欢踢', 'thích đá'],
            ['踢得很好', 'đá rất hay'], ['去踢球', 'đi đá bóng']],
    patterns: [['踢 + 足球', 'Đá bóng — môn dùng CHÂN thì dùng 踢'],
               ['踢 có bộ 足 (chân) bên trái, giống chữ 跑']]
  },
  '足球': {
    collo: [['踢足球', 'đá bóng'], ['看足球', 'xem bóng đá'],
            ['一个足球', 'một quả bóng đá'], ['踢足球的人', 'người đá bóng']],
    patterns: [['踢 + 足球', 'Đá bóng — dùng chân nên đi với 踢'],
               ['足 + 球', 'Quả bóng (球) đá bằng chân (足)']]
  },
  '球': {
    collo: [['打球', 'chơi bóng'], ['踢球', 'đá bóng'],
            ['一个球', 'một quả bóng'], ['看球', 'xem bóng']],
    patterns: [['打 / 踢 + 球', 'Chơi bóng bằng tay, đá bóng bằng chân'],
               ['篮球 · 足球 — đều ghép với 球']]
  },
  '得': {
    collo: [['跑得很快', 'chạy rất nhanh'], ['踢得很好', 'đá rất hay'],
            ['画得不错', 'vẽ khá đẹp'], ['说得很慢', 'nói rất chậm']],
    patterns: [['động từ + 得 + tính từ', 'Làm việc đó THẾ NÀO: 他跑得很快'],
               ['的 (trước danh từ) · 地 (trước động từ) · 得 (sau động từ)']]
  },
  '跑步': {
    collo: [['去跑步', 'đi chạy bộ'], ['每天跑步', 'ngày nào cũng chạy'],
            ['喜欢跑步', 'thích chạy bộ'], ['早上跑步', 'sáng chạy bộ']],
    patterns: [['thời gian + 跑步', 'Chạy bộ vào lúc nào: 每天早上跑步'],
               ['跑 + 步', 'Chạy (跑) từng bước (步) — chạy bộ']]
  },
  '游泳': {
    collo: [['去游泳', 'đi bơi'], ['喜欢游泳', 'thích bơi'],
            ['会游泳', 'biết bơi'], ['游泳的时候', 'lúc đi bơi']],
    patterns: [['会 + 游泳', 'Biết bơi — kỹ năng học mà có'],
               ['游 + 泳', 'Hai chữ đều có bộ 氵 (nước)']]
  },
  '游': {
    collo: [['游泳', 'bơi lội'], ['游得很快', 'bơi rất nhanh'],
            ['旅游', 'du lịch'], ['会游', 'biết bơi']],
    patterns: [['游 + 得 + tính từ', 'Bơi thế nào: 他游得很快'],
               ['游 nằm trong 游泳 và 旅游 — cùng một chữ']]
  },
  '爱好': {
    collo: [['我的爱好', 'sở thích của tôi'], ['有爱好', 'có sở thích'],
            ['一个爱好', 'một sở thích'], ['爱好是运动', 'sở thích là thể thao']],
    patterns: [['ai + 的爱好 + 是 + …', 'Sở thích của ai là gì'],
               ['爱好 (danh từ, sở thích) khác 喜欢 (động từ, thích)']]
  },
  '开始': {
    collo: [['开始上课', 'bắt đầu vào học'], ['从八点开始', 'bắt đầu từ tám giờ'],
            ['开始了', 'bắt đầu rồi'], ['开始跑步', 'bắt đầu chạy bộ']],
    patterns: [['从 + thời gian + 开始', 'Bắt đầu từ lúc nào: 从八点开始'],
               ['开始 + động từ', 'Bắt đầu làm gì: 开始上课']]
  }
};
