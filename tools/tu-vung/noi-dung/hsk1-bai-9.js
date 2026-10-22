// Noi dung TU MOI HSK1 bai 9 (chu de: vi tri, vat nuoi, nghe nghiep).
module.exports = {
  '小': {
    collo: [['小猫', 'mèo con'], ['小狗', 'chó con'],
            ['很小', 'rất nhỏ'], ['小杯子', 'cái cốc nhỏ']],
    patterns: [['小 + danh từ', 'Nhỏ, bé: 小猫 · 小狗'],
               ['小 ↔ 大', 'Nhỏ ↔ lớn — cặp tính từ đối nhau']]
  },
  '猫': {
    collo: [['小猫', 'mèo con'], ['我的猫', 'con mèo của tôi'],
            ['看猫', 'xem mèo'], ['她的小猫', 'mèo con của cô ấy']],
    patterns: [['小 + 猫', 'Mèo con — 小 đứng trước'],
               ['猫 có bộ 犭 (thú) bên trái, giống chữ 狗']]
  },
  '在': {
    collo: [['在学校', 'ở trường'], ['在家', 'ở nhà'],
            ['在商店', 'ở cửa hàng'], ['在哪儿', 'ở đâu']],
    patterns: [['Sub + 在 + nơi chốn', '在 làm ĐỘNG TỪ: 猫在椅子下面'],
               ['Sub + 在 + nơi chốn + động từ', '在 làm GIỚI TỪ: 我在医院工作']]
  },
  '那儿': {
    collo: [['在那儿', 'ở đằng kia'], ['去那儿', 'đến đằng kia'],
            ['那儿的商店', 'cửa hàng đằng kia'], ['那儿有', 'đằng kia có']],
    patterns: [['在 / 去 + 那儿', 'Ở, đi đằng kia'],
               ['这儿 (đây) ↔ 那儿 (kia) ↔ 哪儿 (đâu) — bộ ba nơi chốn']]
  },
  '狗': {
    collo: [['小狗', 'chó con'], ['我的狗', 'con chó của tôi'],
            ['看狗', 'xem chó'], ['他的小狗', 'chó con của anh ấy']],
    patterns: [['小 + 狗', 'Chó con'],
               ['狗 có bộ 犭 (thú) bên trái — chữ chỉ con vật hay có bộ này']]
  },
  '椅子': {
    collo: [['一个椅子', 'một cái ghế'], ['买椅子', 'mua ghế'],
            ['椅子下面', 'dưới ghế'], ['这个椅子', 'cái ghế này']],
    patterns: [['một + 个 + 椅子', 'Lượng từ của 椅子 là 个'],
               ['椅 + 子', '子 là đuôi từ đọc nhẹ, giống 杯子 · 儿子']]
  },
  '下面': {
    collo: [['椅子下面', 'dưới ghế'], ['书下面', 'dưới quyển sách'],
            ['在下面', 'ở phía dưới'], ['下面有', 'phía dưới có']],
    patterns: [['danh từ + 下面', 'Từ chỉ vị trí đứng SAU danh từ — ngược với tiếng Việt'],
               ['✗ 下面椅子 → ✓ 椅子下面']]
  },
  '哪儿': {
    collo: [['在哪儿', 'ở đâu'], ['去哪儿', 'đi đâu'],
            ['哪儿的', 'của nơi nào'], ['哪儿有', 'ở đâu có']],
    patterns: [['Sub + 在哪儿？', 'Hỏi vị trí: 你的猫在哪儿？'],
               ['Câu đã có 哪儿 thì KHÔNG thêm 吗']]
  },
  '工作': {
    collo: [['在医院工作', 'làm việc ở bệnh viện'], ['我的工作', 'công việc của tôi'],
            ['去工作', 'đi làm'], ['爸爸的工作', 'công việc của bố']],
    patterns: [['在 + nơi chốn + 工作', 'Làm việc ở đâu — nơi chốn đứng TRƯỚC động từ'],
               ['工作 vừa là động từ (làm việc), vừa là danh từ (công việc)']]
  },
  '儿子': {
    collo: [['我儿子', 'con trai tôi'], ['他的儿子', 'con trai của anh ấy'],
            ['有儿子', 'có con trai'], ['儿子的书', 'sách của con trai']],
    patterns: [['người + 儿子', 'Con trai của ai — người thân hay bỏ 的'],
               ['儿子 (con trai) ↔ 女儿 (con gái)']]
  },
  '医院': {
    collo: [['去医院', 'đi bệnh viện'], ['在医院', 'ở bệnh viện'],
            ['医院的医生', 'bác sĩ của bệnh viện'], ['这个医院', 'bệnh viện này']],
    patterns: [['去 / 在 + 医院', 'Đi, ở bệnh viện'],
               ['医 + 院', 'Khu nhà (院) chữa bệnh (医)']]
  },
  '医生': {
    collo: [['是医生', 'là bác sĩ'], ['中国医生', 'bác sĩ Trung Quốc'],
            ['医院的医生', 'bác sĩ của bệnh viện'], ['好医生', 'bác sĩ giỏi']],
    patterns: [['Sub + 是 + 医生', 'Ai đó là bác sĩ'],
               ['医生 (bác sĩ) và 医院 (bệnh viện) dùng chung chữ 医']]
  },
  '爸爸': {
    collo: [['我爸爸', 'bố tôi'], ['他爸爸', 'bố anh ấy'],
            ['爸爸的书', 'sách của bố'], ['爸爸的工作', 'công việc của bố']],
    patterns: [['người + 爸爸', 'Bố của ai — nói 我爸爸, ít khi nói 我的爸爸'],
               ['爸爸 ↔ 妈妈', 'Hai chữ đều có phần chỉ âm ở dưới: 巴 và 马']]
  }
};
