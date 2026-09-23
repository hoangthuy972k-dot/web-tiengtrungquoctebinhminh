// Noi dung TU MOI HSK2 3.0 bai 4 (chu de: di trung tam thuong mai, mau sac, thu do).
module.exports = {
  '过': {
    collo: [['去过北京', 'đã từng đi Bắc Kinh'], ['吃过', 'đã từng ăn'],
            ['看过这个电影', 'đã xem bộ phim này'], ['没去过', 'chưa từng đi']],
    patterns: [['động từ + 过', 'Đã TỪNG làm gì — kinh nghiệm: 我去过北京'],
               ['Phủ định là 没 + V + 过: 我没去过北京']]
  },
  '商场': {
    collo: [['去商场', 'đi trung tâm thương mại'], ['在商场', 'ở trung tâm thương mại'],
            ['商场里', 'trong trung tâm thương mại'], ['商场的东西', 'đồ của trung tâm thương mại']],
    patterns: [['去 / 在 + 商场', 'Đi, ở trung tâm thương mại'],
               ['商场 lớn hơn 商店 — 商场 có nhiều gian hàng']]
  },
  '进去': {
    collo: [['进去看看', 'vào xem thử'], ['走进去', 'đi vào'],
            ['进去吧', 'vào đi'], ['别进去', 'đừng vào']],
    patterns: [['进去 + động từ', 'Vào trong làm gì: 进去看看'],
               ['进去 (vào, xa người nói) ↔ 进来 (vào, gần người nói)']]
  },
  '条': {
    collo: [['一条裤子', 'một cái quần'], ['两条鱼', 'hai con cá'],
            ['这条裤子', 'cái quần này'], ['几条', 'mấy cái']],
    patterns: [['số + 条 + vật dài', 'Lượng từ 条 cho vật dài: 裤子 · 鱼 · 路'],
               ['✗ 一个裤子 → ✓ 一条裤子']]
  },
  '裤子': {
    collo: [['一条裤子', 'một cái quần'], ['买裤子', 'mua quần'],
            ['穿裤子', 'mặc quần'], ['黑色的裤子', 'cái quần màu đen']],
    patterns: [['穿 + 裤子', 'Mặc quần — dùng 穿 như 穿衣服'],
               ['裤 + 子', '子 là đuôi từ đọc nhẹ, giống 桌子 · 包子']]
  },
  '白色': {
    collo: [['白色的衣服', 'quần áo màu trắng'], ['白色的裤子', 'quần màu trắng'],
            ['喜欢白色', 'thích màu trắng'], ['白色的书包', 'cặp sách màu trắng']],
    patterns: [['白色 + 的 + danh từ', 'Cái gì màu trắng'],
               ['白色 · 红色 · 绿色 · 黑色 — đều ghép với 色']]
  },
  '因为': {
    collo: [['因为下雨', 'vì trời mưa'], ['因为很忙', 'vì rất bận'],
            ['因为太贵', 'vì quá đắt'], ['因为……所以……', 'vì… nên…']],
    patterns: [['因为 A，所以 B', 'Vì A nên B — cặp liên từ nhân quả đầu tiên'],
               ['Tiếng Trung dùng CẢ HAI vế 因为 và 所以, khác tiếng Việt']]
  },
  '试': {
    collo: [['试一下', 'thử một chút'], ['试试', 'thử xem'],
            ['试试这条', 'thử cái này'], ['想试', 'muốn thử']],
    patterns: [['试 + 一下 / 试试', 'Thử một chút — dạng lặp làm ngữ khí nhẹ đi'],
               ['试 hay dùng khi mua quần áo: 我可以试一下吗？']]
  },
  '红色': {
    collo: [['红色的衣服', 'quần áo màu đỏ'], ['红色的书包', 'cặp sách màu đỏ'],
            ['喜欢红色', 'thích màu đỏ'], ['红色的裤子', 'quần màu đỏ']],
    patterns: [['红色 + 的 + danh từ', 'Cái gì màu đỏ'],
               ['红色 là màu may mắn trong văn hoá Trung Quốc']]
  },
  '所以': {
    collo: [['所以我不去', 'nên tôi không đi'], ['所以很累', 'nên rất mệt'],
            ['所以没买', 'nên đã không mua'], ['因为……所以……', 'vì… nên…']],
    patterns: [['因为 A，所以 B', 'Vì A nên B — 所以 mở đầu vế kết quả'],
               ['所以 luôn đứng ĐẦU vế thứ hai']]
  },
  '书包': {
    collo: [['一个书包', 'một cái cặp sách'], ['买书包', 'mua cặp sách'],
            ['红色的书包', 'cặp sách màu đỏ'], ['书包里', 'trong cặp sách']],
    patterns: [['một + 个 + 书包', 'Lượng từ của 书包 là 个'],
               ['书 + 包', 'Túi (包) đựng sách (书)']]
  },
  '过去': {
    collo: [['走过去', 'đi qua đó'], ['拿过去', 'mang qua đó'],
            ['过去看看', 'qua đó xem'], ['过去吧', 'qua đó đi']],
    patterns: [['động từ + 过去', 'Đi ra xa người nói: 走过去'],
               ['过去 (ra xa mình) ↔ 过来 (lại gần mình)']]
  },
  '绿色': {
    collo: [['绿色的衣服', 'quần áo màu xanh lá'], ['绿色的裤子', 'quần màu xanh lá'],
            ['喜欢绿色', 'thích màu xanh lá'], ['绿色的书包', 'cặp sách màu xanh lá']],
    patterns: [['绿色 + 的 + danh từ', 'Cái gì màu xanh lá'],
               ['绿 có bộ 纟 (sợi tơ) — màu vốn nói về màu vải nhuộm']]
  },
  '黑色': {
    collo: [['黑色的裤子', 'quần màu đen'], ['黑色的衣服', 'quần áo màu đen'],
            ['喜欢黑色', 'thích màu đen'], ['黑色的书包', 'cặp sách màu đen']],
    patterns: [['黑色 + 的 + danh từ', 'Cái gì màu đen'],
               ['黑色 ↔ 白色', 'Đen ↔ trắng']]
  },
  '更': {
    collo: [['更好', 'tốt hơn'], ['更贵', 'đắt hơn'],
            ['更喜欢', 'thích hơn'], ['更漂亮', 'đẹp hơn']],
    patterns: [['更 + tính từ', 'Hơn — so với cái vừa nhắc: 这条更好'],
               ['更 đứng TRƯỚC tính từ, không đứng sau']]
  },
  '颜色': {
    collo: [['什么颜色', 'màu gì'], ['喜欢的颜色', 'màu yêu thích'],
            ['这个颜色', 'màu này'], ['几种颜色', 'mấy màu']],
    patterns: [['什么 + 颜色？', 'Màu gì: 你喜欢什么颜色？'],
               ['颜 + 色', 'Sắc (色) diện (颜) — hai chữ cùng nghĩa ghép lại']]
  }
};
