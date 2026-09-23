// Noi dung TU MOI HSK3 bai 3 (chu de: mua sam, do uong, lua chon).
module.exports = {
  '还是': {
    collo: [['去还是不去', 'đi hay không đi'], ['喝茶还是喝咖啡', 'uống trà hay cà phê'],
            ['红的还是绿的', 'cái đỏ hay cái xanh'], ['你还是我', 'bạn hay tôi'],
            ['今天还是明天', 'hôm nay hay ngày mai']],
    patterns: [['A 还是 B？', 'A hay B? — chỉ dùng trong câu HỎI'],
               ['✗ 我喝茶还是咖啡。 → ✓ 我喝茶或者咖啡。', 'Câu trần thuật dùng 或者']]
  },
  '爬山': {
    collo: [['去爬山', 'đi leo núi'], ['喜欢爬山', 'thích leo núi'],
            ['爬山的时候', 'lúc leo núi'], ['爬了一个小时山', 'leo núi một tiếng'],
            ['一起爬山', 'cùng leo núi']],
    patterns: [['爬 + 了 + thời lượng + 山', '爬山 là từ ly hợp: 爬了一小时山 ✓'],
               ['去 + 爬山', 'Đi leo núi']]
  },
  '小心': {
    collo: [['要小心', 'phải cẩn thận'], ['小心点儿', 'cẩn thận chút'],
            ['小心车', 'coi chừng xe'], ['小心一点儿', 'cẩn thận hơn chút'],
            ['很小心', 'rất cẩn thận']],
    patterns: [['小心 + N', 'Coi chừng cái gì: 小心车, 小心路滑'],
               ['小心点儿', 'Cẩn thận một chút — lời dặn quen thuộc']]
  },
  '条': {
    collo: [['一条裤子', 'một cái quần'], ['一条路', 'một con đường'],
            ['两条鱼', 'hai con cá'], ['一条裙子', 'một cái váy'],
            ['那条河', 'con sông đó']],
    patterns: [['số + 条 + vật dài', 'Lượng từ 条: 裤子, 路, 鱼, 裙子, 河'],
               ['✗ 一个裤子 → ✓ 一条裤子']]
  },
  '裤子': {
    collo: [['一条裤子', 'một cái quần'], ['穿裤子', 'mặc quần'],
            ['买裤子', 'mua quần'], ['洗裤子', 'giặt quần'],
            ['新裤子', 'quần mới']],
    patterns: [['穿 + 裤子', 'Mặc quần — 穿 dùng cho quần áo, giày'],
               ['一 + 条 + 裤子', 'Lượng từ 条']]
  },
  '记得': {
    collo: [['不记得', 'không nhớ'], ['记得带钱', 'nhớ mang tiền'],
            ['还记得吗', 'còn nhớ không'], ['记得很清楚', 'nhớ rất rõ'],
            ['记得他', 'nhớ anh ấy']],
    patterns: [['记得 + V', 'Nhớ làm gì (lời dặn)'],
               ['记得 ↔ 忘了', 'Nhớ ↔ quên']]
  },
  '衬衫': {
    collo: [['一件衬衫', 'một cái áo sơ mi'], ['穿衬衫', 'mặc áo sơ mi'],
            ['白衬衫', 'áo sơ mi trắng'], ['洗衬衫', 'giặt áo sơ mi'],
            ['买件衬衫', 'mua cái áo sơ mi']],
    patterns: [['một + 件 + 衬衫', 'Lượng từ 件 cho áo, sự việc'],
               ['件 (áo) ≠ 条 (quần) — hai loại quần áo, hai lượng từ']]
  },
  '元': {
    collo: [['320元', '320 đồng'], ['多少元', 'bao nhiêu đồng'],
            ['一元', 'một đồng'], ['几百元', 'mấy trăm đồng'],
            ['贵了100元', 'đắt hơn 100 đồng']],
    patterns: [['số + 元', 'Đơn vị tiền — 元 dùng khi viết'],
               ['元 (viết) ≈ 块 (nói)', 'Cùng một đơn vị, khác ngữ cảnh']]
  },
  '新鲜': {
    collo: [['很新鲜', 'rất tươi'], ['新鲜的鱼', 'cá tươi'],
            ['不新鲜', 'không tươi'], ['新鲜水果', 'trái cây tươi'],
            ['空气新鲜', 'không khí trong lành']],
    patterns: [['新鲜的 + N', '… tươi: 新鲜的鱼, 新鲜水果'],
               ['空气 + 新鲜', 'Không khí trong lành — nghĩa mở rộng']]
  },
  '甜': {
    collo: [['很甜', 'rất ngọt'], ['不甜', 'không ngọt'],
            ['有点儿甜', 'hơi ngọt'], ['甜的东西', 'đồ ngọt'],
            ['西瓜很甜', 'dưa hấu rất ngọt']],
    patterns: [['N + 很 + 甜', 'Cái gì đó rất ngọt'],
               ['甜 · 酸 · 苦 · 辣 — bốn vị cơ bản']]
  },
  '只': {
    collo: [['只吃水果', 'chỉ ăn trái cây'], ['只有一个', 'chỉ có một cái'],
            ['只学汉语', 'chỉ học tiếng Trung'], ['只要一杯', 'chỉ lấy một cốc'],
            ['只想休息', 'chỉ muốn nghỉ']],
    patterns: [['只 + V', 'Chỉ làm gì — 只 đứng trước động từ'],
               ['✗ 我买只一个 → ✓ 我只买一个']]
  },
  '放': {
    collo: [['放在桌子上', 'để trên bàn'], ['放好', 'để cho ngay ngắn'],
            ['放着', 'đang để đó'], ['放进包里', 'cho vào túi'],
            ['别乱放', 'đừng để bừa']],
    patterns: [['把 + N + 放在 + nơi chốn + 上 / 里', 'Đặt cái gì ở đâu'],
               ['放着', 'Đang để đó — 着 chỉ trạng thái kéo dài']]
  },
  '饮料': {
    collo: [['喝饮料', 'uống nước'], ['买饮料', 'mua đồ uống'],
            ['一瓶饮料', 'một chai nước'], ['水果饮料', 'nước trái cây'],
            ['冷饮料', 'đồ uống lạnh']],
    patterns: [['喝 + 饮料', 'Uống đồ uống'],
               ['饮 + 料', 'Thứ (料) để uống (饮)']]
  },
  '或者': {
    collo: [['茶或者咖啡', 'trà hoặc cà phê'], ['看书或者听音乐', 'đọc sách hoặc nghe nhạc'],
            ['今天或者明天', 'hôm nay hoặc ngày mai'], ['或者你来', 'hoặc là bạn đến'],
            ['我或者他', 'tôi hoặc anh ấy']],
    patterns: [['A 或者 B', 'A hoặc B — dùng trong câu TRẦN THUẬT'],
               ['或者 (kể) ≠ 还是 (hỏi)', 'Đây là chỗ học sinh Việt hay nhầm']]
  },
  '舒服': {
    collo: [['很舒服', 'rất dễ chịu'], ['不舒服', 'khó chịu, không khoẻ'],
            ['觉得舒服', 'thấy thoải mái'], ['坐着很舒服', 'ngồi rất thoải mái'],
            ['身体不舒服', 'người không khoẻ']],
    patterns: [['Sub + 不舒服', 'Ai đó thấy trong người không khoẻ'],
               ['V + 着 + 很舒服', 'Làm gì thấy thoải mái']]
  },
  '花': {
    collo: [['买花', 'mua hoa'], ['花茶', 'trà hoa'],
            ['很多花', 'rất nhiều hoa'], ['一朵花', 'một bông hoa'],
            ['花很香', 'hoa rất thơm']],
    patterns: [['một + 朵 + 花', 'Lượng từ 朵 cho hoa'],
               ['花 (hoa) ≠ 花 (tiêu tiền) — cùng chữ, khác nghĩa']]
  },
  '绿': {
    collo: [['绿茶', 'trà xanh'], ['绿色', 'màu xanh lá'],
            ['很绿', 'rất xanh'], ['绿的裤子', 'cái quần xanh'],
            ['草绿了', 'cỏ xanh rồi']],
    patterns: [['绿 + 色 / 茶', 'Màu xanh lá, trà xanh'],
               ['绿 (xanh lá) ≠ 蓝 (xanh dương)']]
  }
};
