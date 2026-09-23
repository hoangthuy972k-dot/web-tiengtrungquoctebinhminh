// Noi dung TU MOI HSK3 bai 14 (chu de: viec nha, buoi toi, ke chuyen).
module.exports = {
  '打扫': {
    collo: [['打扫房间', 'dọn phòng'], ['打扫干净', 'dọn cho sạch'],
            ['打扫办公室', 'dọn văn phòng'], ['打扫厨房', 'dọn bếp'],
            ['帮忙打扫', 'giúp dọn dẹp']],
    patterns: [['把 + nơi chốn + 打扫干净', 'Dọn chỗ nào cho sạch'],
               ['打 + 扫', 'Quét (扫) dọn — 打 ở đây không có nghĩa "đánh"']]
  },
  '干净': {
    collo: [['很干净', 'rất sạch'], ['打扫干净', 'dọn cho sạch'],
            ['洗干净', 'rửa sạch'], ['擦干净', 'lau sạch'],
            ['不干净', 'không sạch']],
    patterns: [['V + 干净', 'Làm gì cho sạch — 干净 là bổ ngữ kết quả'],
               ['干净 ↔ 脏', 'Sạch ↔ bẩn']]
  },
  '然后': {
    collo: [['先……然后……', 'trước… sau đó…'], ['然后再', 'sau đó lại'],
            ['然后才', 'rồi mới'], ['然后去', 'sau đó đi'],
            ['吃完饭然后休息', 'ăn xong rồi nghỉ']],
    patterns: [['先 + V1，然后 + V2', 'Làm A trước, sau đó làm B'],
               ['然后 (sau đó, kể thứ tự) ≠ 以后 (sau khi)']]
  },
  '冰箱': {
    collo: [['冰箱里', 'trong tủ lạnh'], ['打开冰箱', 'mở tủ lạnh'],
            ['从冰箱里拿出来', 'lấy ra từ tủ lạnh'], ['冰箱坏了', 'tủ lạnh hỏng'],
            ['放进冰箱', 'cho vào tủ lạnh']],
    patterns: [['从 + 冰箱 + 里 + 拿出来', 'Lấy ra từ trong tủ lạnh'],
               ['冰 + 箱', 'Hòm (箱) lạnh (冰)']]
  },
  '洗澡': {
    collo: [['去洗澡', 'đi tắm'], ['洗了个澡', 'tắm một cái'],
            ['洗完澡', 'tắm xong'], ['洗个热水澡', 'tắm nước nóng'],
            ['每天洗澡', 'ngày nào cũng tắm']],
    patterns: [['洗 + 个 + 澡', '洗澡 là từ ly hợp: 洗了个澡 ✓ / 洗澡了一次 ✗'],
               ['洗 + 澡', 'Rửa (洗) toàn thân (澡)']]
  },
  '节目': {
    collo: [['电视节目', 'chương trình tivi'], ['看节目', 'xem chương trình'],
            ['节目开始', 'chương trình bắt đầu'], ['好看的节目', 'chương trình hay'],
            ['一个节目', 'một chương trình']],
    patterns: [['看 + 节目', 'Xem chương trình'],
               ['节目 (chương trình) ≠ 节日 (ngày lễ) — chỉ khác một chữ']]
  },
  '月亮': {
    collo: [['看月亮', 'ngắm trăng'], ['今晚的月亮', 'trăng tối nay'],
            ['月亮真漂亮', 'trăng đẹp thật'], ['月亮出来了', 'trăng lên rồi'],
            ['圆月亮', 'trăng tròn']],
    patterns: [['月亮 + 出来了', 'Trăng đã lên — như 太阳出来了 (bài 12)'],
               ['月 + 亮', 'Vầng sáng (亮) ban đêm (月)']]
  },
  '像': {
    collo: [['像……一样', 'giống như…'], ['很像', 'rất giống'],
            ['长得像', 'trông giống'], ['像妈妈', 'giống mẹ'],
            ['一点儿也不像', 'chẳng giống chút nào']],
    patterns: [['像 + N + 一样 + Adj', 'Giống như … vậy'],
               ['像 (giống) ≠ 一样 (như nhau, bài 9): 像他一样高']]
  },
  '盘子': {
    collo: [['洗盘子', 'rửa đĩa'], ['一个盘子', 'một cái đĩa'],
            ['白色的盘子', 'đĩa màu trắng'], ['把盘子放好', 'xếp đĩa cho gọn'],
            ['盘子里', 'trong đĩa']],
    patterns: [['把 + 盘子 + 洗干净', 'Rửa đĩa cho sạch'],
               ['一 + 盘 + 菜 (lượng từ) / 一 + 个 + 盘子 (danh từ)']]
  },
  '刮风': {
    collo: [['刮风了', 'nổi gió rồi'], ['刮大风', 'gió to'],
            ['不刮风', 'không có gió'], ['刮了一夜风', 'gió thổi cả đêm'],
            ['外边刮风', 'bên ngoài nổi gió']],
    patterns: [['刮 + 了 + thời lượng + 风', '刮风 là từ ly hợp'],
               ['刮风 · 下雨 · 下雪 — nhóm từ chỉ thời tiết']]
  },
  '叔叔': {
    collo: [['叔叔阿姨', 'chú và cô'], ['方叔叔', 'chú Phương'],
            ['听叔叔讲故事', 'nghe chú kể chuyện'], ['我叔叔', 'chú tôi'],
            ['叔叔来了', 'chú đến rồi']],
    patterns: [['họ + 叔叔', 'Cách gọi: chú Phương…'],
               ['叔叔 (chú) / 阿姨 (cô, dì) — cách trẻ em gọi người lớn']]
  },
  '阿姨': {
    collo: [['叔叔阿姨', 'chú và cô'], ['常阿姨', 'cô Thường'],
            ['谢谢阿姨', 'cảm ơn cô'], ['阿姨做的菜', 'món cô nấu'],
            ['问阿姨好', 'gửi lời hỏi thăm cô']],
    patterns: [['họ + 阿姨', 'Cách gọi: cô Thường…'],
               ['阿姨 cũng dùng gọi người giúp việc, người phục vụ nữ lớn tuổi']]
  },
  '故事': {
    collo: [['讲故事', 'kể chuyện'], ['听故事', 'nghe kể chuyện'],
            ['一个故事', 'một câu chuyện'], ['有意思的故事', 'câu chuyện thú vị'],
            ['年轻时候的故事', 'chuyện thời trẻ']],
    patterns: [['讲 + 故事', 'Kể chuyện — dùng 讲 (bài 6), không dùng 说'],
               ['故 + 事', 'Chuyện (事) đã qua (故)']]
  },
  '声音': {
    collo: [['声音很大', 'tiếng rất to'], ['把声音开大', 'vặn to tiếng'],
            ['声音很好听', 'giọng rất hay'], ['听到声音', 'nghe thấy tiếng'],
            ['小点儿声音', 'nhỏ tiếng chút']],
    patterns: [['把 + 声音 + 开大 / 开小', 'Vặn to / nhỏ tiếng'],
               ['声音 + 大 / 小', 'Tiếng to / nhỏ — không nói 声音高']]
  },
  '菜单': {
    collo: [['看菜单', 'xem thực đơn'], ['菜单上', 'trên thực đơn'],
            ['给我菜单', 'cho tôi thực đơn'], ['一张菜单', 'một tờ thực đơn'],
            ['中文菜单', 'thực đơn tiếng Trung']],
    patterns: [['看 + 菜单', 'Xem thực đơn'],
               ['菜 + 单', 'Tờ (单) ghi món ăn (菜)']]
  },
  '简单': {
    collo: [['很简单', 'rất đơn giản'], ['简单的问题', 'câu hỏi đơn giản'],
            ['做起来简单', 'làm thì đơn giản'], ['不太简单', 'không đơn giản lắm'],
            ['简单点儿', 'đơn giản chút']],
    patterns: [['N + 很 + 简单', 'Cái gì đó rất đơn giản'],
               ['简单 ↔ 复杂 / 难', 'Đơn giản ↔ phức tạp, khó']]
  },
  '香蕉': {
    collo: [['买香蕉', 'mua chuối'], ['吃香蕉', 'ăn chuối'],
            ['新鲜的香蕉', 'chuối tươi'], ['一个香蕉', 'một quả chuối'],
            ['香蕉很甜', 'chuối rất ngọt']],
    patterns: [['một + 个 + 香蕉', 'Một quả chuối'],
               ['香 + 蕉', 'Quả chuối (蕉) thơm (香)']]
  }
};
