// Noi dung TU MOI HSK1 3.0 bai 10 (chu de: mua sam, gia ca, quan ao).
module.exports = {
  '杯子': {
    collo: [['一个杯子', 'một cái cốc'], ['买杯子', 'mua cốc'],
            ['这个杯子', 'cái cốc này'], ['漂亮的杯子', 'cái cốc đẹp']],
    patterns: [['một + 个 + 杯子', 'Lượng từ của 杯子 là 个'],
               ['杯 + 子', '子 là đuôi từ đọc nhẹ, giống 桌子 · 椅子']]
  },
  '售货员': {
    collo: [['问售货员', 'hỏi nhân viên bán hàng'], ['商店的售货员', 'nhân viên của cửa hàng'],
            ['是售货员', 'là nhân viên bán hàng'], ['那个售货员', 'người bán hàng kia']],
    patterns: [['问 + 售货员', 'Hỏi nhân viên bán hàng'],
               ['售货 + 员', 'Người (员) bán hàng (售货)']]
  },
  '这边': {
    collo: [['在这边', 'ở bên này'], ['这边的水果', 'hoa quả bên này'],
            ['来这边', 'lại đây'], ['这边有', 'bên này có']],
    patterns: [['在 / 来 + 这边', 'Ở bên này, lại bên này'],
               ['这边 (gần) ↔ 那边 (xa)']]
  },
  '钱': {
    collo: [['多少钱', 'bao nhiêu tiền'], ['十块钱', 'mười đồng'],
            ['有钱', 'có tiền'], ['几块钱', 'mấy đồng']],
    patterns: [['多少 + 钱', 'Hỏi giá: 这个多少钱？'],
               ['钱 có bộ 钅 (kim loại) — tiền xưa đúc bằng kim loại']]
  },
  '这些': {
    collo: [['这些苹果', 'những quả táo này'], ['这些衣服', 'những bộ đồ này'],
            ['这些钱', 'số tiền này'], ['这些人', 'những người này']],
    patterns: [['这些 + danh từ', 'Những cái này — KHÔNG thêm lượng từ nữa'],
               ['这些 (những cái này) ↔ 那些 (những cái kia)']]
  },
  '块': {
    collo: [['五块', 'năm đồng'], ['十块钱', 'mười đồng'],
            ['几块钱', 'mấy đồng'], ['一块', 'một đồng']],
    patterns: [['số + 块 + (钱)', 'Đơn vị tiền trong khẩu ngữ: 十块钱'],
               ['块 dùng khi nói; văn viết dùng 元']]
  },
  '那些': {
    collo: [['那些苹果', 'những quả táo kia'], ['那些衣服', 'những bộ đồ kia'],
            ['那些人', 'những người kia'], ['那些书', 'những quyển sách kia']],
    patterns: [['那些 + danh từ', 'Những cái kia — vật ở xa người nói'],
               ['这些 ↔ 那些 — đều không thêm lượng từ']]
  },
  '这儿': {
    collo: [['在这儿', 'ở đây'], ['这儿的东西', 'đồ ở đây'],
            ['这儿有', 'ở đây có'], ['这儿的水果', 'hoa quả ở đây']],
    patterns: [['在 + 这儿', 'Ở đây'],
               ['这儿 (đây) ↔ 那儿 (kia) ↔ 哪儿 (đâu)']]
  },
  '水果': {
    collo: [['买水果', 'mua hoa quả'], ['吃水果', 'ăn hoa quả'],
            ['这儿的水果', 'hoa quả ở đây'], ['一些水果', 'một ít hoa quả']],
    patterns: [['买 / 吃 + 水果', 'Mua, ăn hoa quả'],
               ['苹果 là một loại 水果']]
  },
  '少': {
    collo: [['很少', 'rất ít'], ['不少', 'không ít, khá nhiều'],
            ['少一点儿', 'ít đi một chút'], ['很少人', 'rất ít người']],
    patterns: [['不 + 少', '不少 KHÔNG phải "không ít" cho đủ, mà là "khá nhiều"'],
               ['少 ↔ 多', 'Ít ↔ nhiều']]
  },
  '斤': {
    collo: [['一斤', 'một cân'], ['三斤苹果', 'ba cân táo'],
            ['多少钱一斤', 'bao nhiêu tiền một cân'], ['几斤', 'mấy cân']],
    patterns: [['số + 斤 + danh từ', 'Bao nhiêu cân: 三斤苹果'],
               ['1 斤 = 500 gam — đơn vị cân của Trung Quốc']]
  },
  '苹果': {
    collo: [['买苹果', 'mua táo'], ['吃苹果', 'ăn táo'],
            ['一斤苹果', 'một cân táo'], ['这些苹果', 'những quả táo này']],
    patterns: [['số + 斤 / 个 + 苹果', 'Mua theo cân hoặc theo quả'],
               ['苹果 là một loại 水果']]
  },
  '便宜': {
    collo: [['很便宜', 'rất rẻ'], ['非常便宜', 'cực kỳ rẻ'],
            ['便宜一点儿', 'rẻ hơn chút'], ['不便宜', 'không rẻ']],
    patterns: [['很 / 非常 + 便宜', 'Rất rẻ, cực kỳ rẻ'],
               ['便宜 ↔ 贵', 'Rẻ ↔ đắt']]
  },
  '商店': {
    collo: [['去商店', 'đi cửa hàng'], ['在商店', 'ở cửa hàng'],
            ['商店的东西', 'đồ của cửa hàng'], ['这个商店', 'cửa hàng này']],
    patterns: [['去 / 在 + 商店', 'Đi cửa hàng, ở cửa hàng'],
               ['商 + 店', 'Tiệm (店) buôn bán (商)']]
  },
  '衣服': {
    collo: [['买衣服', 'mua quần áo'], ['穿衣服', 'mặc quần áo'],
            ['一件衣服', 'một bộ quần áo'], ['漂亮的衣服', 'quần áo đẹp']],
    patterns: [['một + 件 + 衣服', 'Lượng từ của 衣服 là 件'],
               ['衣 + 服', 'Hai chữ đều nghĩa là áo quần, ghép lại cho đủ từ']]
  },
  '件': {
    collo: [['一件衣服', 'một bộ quần áo'], ['几件', 'mấy cái'],
            ['这件衣服', 'bộ quần áo này'], ['那件', 'cái kia']],
    patterns: [['số / chỉ định + 件 + 衣服', 'Lượng từ 件 dùng cho quần áo'],
               ['✗ 一个衣服 → ✓ 一件衣服']]
  },
  '元': {
    collo: [['五元', 'năm tệ'], ['十元', 'mười tệ'],
            ['多少元', 'bao nhiêu tệ'], ['一元', 'một tệ']],
    patterns: [['số + 元', 'Đơn vị tiền trong văn viết: 十元'],
               ['元 (văn viết) = 块 (khẩu ngữ) — cùng một đơn vị tiền']]
  },
  '怎么样': {
    collo: [['这个怎么样', 'cái này thế nào'], ['衣服怎么样', 'quần áo thế nào'],
            ['那些怎么样', 'những cái kia thế nào'], ['你怎么样', 'bạn thế nào']],
    patterns: [['Sub + 怎么样？', 'Hỏi tình hình chung: 这件衣服怎么样？'],
               ['怎么样 (thế nào, tình hình) ≠ 怎么 (làm thế nào, cách làm)']]
  },
  '贵': {
    collo: [['很贵', 'rất đắt'], ['非常贵', 'cực kỳ đắt'],
            ['不贵', 'không đắt'], ['太贵了', 'đắt quá']],
    patterns: [['很 / 太 + 贵 + 了', 'Rất đắt, đắt quá'],
               ['贵 ↔ 便宜', 'Đắt ↔ rẻ']]
  },
  '穿': {
    collo: [['穿衣服', 'mặc quần áo'], ['喜欢穿', 'thích mặc'],
            ['穿这件', 'mặc cái này'], ['不穿', 'không mặc']],
    patterns: [['穿 + 衣服', 'Mặc quần áo'],
               ['穿 dùng cho quần áo, giày dép — không dùng cho mũ']]
  },
  '女': {
    collo: [['女朋友', 'bạn gái'], ['女医生', 'bác sĩ nữ'],
            ['女老师', 'cô giáo'], ['女学生', 'nữ sinh']],
    patterns: [['女 + danh từ chỉ người', 'Nữ: 女医生 · 女老师'],
               ['女 ↔ 男', 'Nữ ↔ nam']]
  },
  '男': {
    collo: [['男朋友', 'bạn trai'], ['男医生', 'bác sĩ nam'],
            ['男老师', 'thầy giáo'], ['男学生', 'nam sinh']],
    patterns: [['男 + danh từ chỉ người', 'Nam: 男医生 · 男老师'],
               ['男 = 田 + 力', 'Sức (力) làm ruộng (田) — chữ hội ý']]
  },
  '那儿': {
    collo: [['在那儿', 'ở đằng kia'], ['去那儿', 'đến đằng kia'],
            ['那儿的商店', 'cửa hàng đằng kia'], ['那儿有', 'đằng kia có']],
    patterns: [['在 / 去 + 那儿', 'Ở đằng kia, đi đằng kia'],
               ['这儿 (đây) ↔ 那儿 (kia) ↔ 哪儿 (đâu)']]
  }
};
