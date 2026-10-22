// Noi dung TU MOI HSK1 3.0 bai 13 (chu de: goi mon, hoi xin phep, bua sang).
module.exports = {
  '可以': {
    collo: [['可以吗', 'được không'], ['可以坐', 'có thể ngồi'],
            ['不可以', 'không được'], ['可以问问题', 'có thể hỏi']],
    patterns: [['Sub + 可以 + động từ', 'Được phép làm gì: 我可以坐这里吗？'],
               ['可以 (được phép) ≠ 能 (hoàn cảnh cho phép) ≠ 会 (học rồi nên biết)']]
  },
  '再': {
    collo: [['再来一个', 'lấy thêm một cái'], ['再说', 'nói lại'],
            ['再问一下', 'hỏi lại một chút'], ['再吃一点儿', 'ăn thêm chút nữa']],
    patterns: [['再 + động từ', 'Làm thêm lần nữa: 再来一个'],
               ['再来一个 là câu gọi thêm món rất hay dùng']]
  },
  '问题': {
    collo: [['有问题', 'có câu hỏi'], ['问问题', 'đặt câu hỏi'],
            ['没问题', 'không vấn đề gì'], ['一个问题', 'một câu hỏi']],
    patterns: [['有 / 问 + 问题', 'Có câu hỏi, đặt câu hỏi'],
               ['没问题 vừa là "không có câu hỏi", vừa là "được thôi"']]
  },
  '卖': {
    collo: [['卖东西', 'bán hàng'], ['卖水果', 'bán hoa quả'],
            ['卖多少钱', 'bán bao nhiêu tiền'], ['不卖', 'không bán']],
    patterns: [['卖 + danh từ', 'Bán cái gì: 卖水果'],
               ['卖 (mài, bán) ↔ 买 (mǎi, mua) — chú ý thanh điệu, dễ nhầm']]
  },
  '打电话': {
    collo: [['给我打电话', 'gọi điện cho tôi'], ['打电话问', 'gọi điện hỏi'],
            ['想打电话', 'muốn gọi điện'], ['几点打电话', 'mấy giờ gọi điện']],
    patterns: [['给 + người + 打电话', 'Gọi điện cho ai'],
               ['打 + 电话', 'Gọi điện dùng động từ 打, không dùng 做']]
  },
  '一下': {
    collo: [['问一下', 'hỏi một chút'], ['看一下', 'xem một chút'],
            ['说一下', 'nói một chút'], ['等一下', 'chờ một chút']],
    patterns: [['động từ + 一下', 'Làm nhẹ đi, nghe lịch sự hơn: 问一下'],
               ['一下 đứng SAU động từ, không đứng trước']]
  },
  '服务员': {
    collo: [['问服务员', 'hỏi nhân viên phục vụ'], ['饭店的服务员', 'nhân viên nhà hàng'],
            ['是服务员', 'là nhân viên phục vụ'], ['那个服务员', 'người phục vụ kia']],
    patterns: [['问 + 服务员', 'Hỏi nhân viên phục vụ'],
               ['服务 + 员', 'Người (员) phục vụ (服务) — cùng kiểu với 售货员']]
  },
  '女士': {
    collo: [['王女士', 'bà Vương'], ['那个女士', 'bà kia'],
            ['女士的杯子', 'cái cốc của bà ấy'], ['女士和先生', 'các quý bà và quý ông']],
    patterns: [['họ + 女士', 'Cách gọi trang trọng: 王女士'],
               ['女士 (quý bà) ↔ 先生 (quý ông) — dùng ở nơi trang trọng']]
  },
  '请': {
    collo: [['请坐', 'mời ngồi'], ['请问', 'xin hỏi'],
            ['请说', 'mời nói'], ['请喝茶', 'mời uống trà']],
    patterns: [['请 + động từ', 'Lời mời lịch sự: 请坐 · 请喝茶'],
               ['请问 đặt ở ĐẦU câu hỏi cho lễ phép']]
  },
  '坐': {
    collo: [['请坐', 'mời ngồi'], ['坐这里', 'ngồi đây'],
            ['可以坐吗', 'ngồi được không'], ['坐车', 'đi xe']],
    patterns: [['请 + 坐', 'Mời ngồi — câu lịch sự rất hay dùng'],
               ['坐 vừa là ngồi, vừa là đi bằng phương tiện']]
  },
  '给': {
    collo: [['给我', 'cho tôi'], ['给我一杯茶', 'cho tôi một cốc trà'],
            ['给他打电话', 'gọi điện cho anh ấy'], ['给你', 'cho bạn']],
    patterns: [['给 + người + danh từ', 'Đưa cho ai cái gì: 给我一杯茶'],
               ['给 + người + động từ', 'Làm gì cho ai: 给我打电话']]
  },
  '杯': {
    collo: [['一杯茶', 'một cốc trà'], ['两杯水', 'hai cốc nước'],
            ['一杯牛奶', 'một cốc sữa'], ['几杯', 'mấy cốc']],
    patterns: [['số + 杯 + đồ uống', 'Lượng từ 杯 cho đồ uống: 一杯茶'],
               ['杯 (lượng từ) và 杯子 (cái cốc) — cùng chữ 杯']]
  },
  '要': {
    collo: [['要一杯茶', 'lấy một cốc trà'], ['要什么', 'muốn gì'],
            ['不要', 'không cần'], ['要一个面包', 'lấy một cái bánh mì']],
    patterns: [['要 + danh từ', 'Gọi món, lấy cái gì: 我要一杯茶'],
               ['要 + động từ', 'Định làm gì: 我要去上课']]
  },
  '早饭': {
    collo: [['吃早饭', 'ăn sáng'], ['做早饭', 'nấu bữa sáng'],
            ['在家吃早饭', 'ăn sáng ở nhà'], ['早饭的面包', 'bánh mì bữa sáng']],
    patterns: [['吃 / 做 + 早饭', 'Ăn sáng, nấu bữa sáng'],
               ['早饭 · 午饭 · 晚饭 — ba bữa trong ngày']]
  },
  '这个': {
    collo: [['这个人', 'người này'], ['这个面包', 'cái bánh mì này'],
            ['这个多少钱', 'cái này bao nhiêu tiền'], ['这个怎么样', 'cái này thế nào']],
    patterns: [['这 + 个 + danh từ', 'Cái này — vật ở gần người nói'],
               ['这个 (gần) ↔ 那个 (xa)']]
  },
  '面包': {
    collo: [['吃面包', 'ăn bánh mì'], ['买面包', 'mua bánh mì'],
            ['一个面包', 'một cái bánh mì'], ['好吃的面包', 'bánh mì ngon']],
    patterns: [['吃 / 买 + 面包', 'Ăn, mua bánh mì'],
               ['面 + 包', 'Bọc (包) bột mì (面) — cùng chữ 面 với 面条儿']]
  },
  '鸡蛋': {
    collo: [['吃鸡蛋', 'ăn trứng'], ['买鸡蛋', 'mua trứng'],
            ['一个鸡蛋', 'một quả trứng'], ['鸡蛋和面包', 'trứng và bánh mì']],
    patterns: [['số + 个 + 鸡蛋', 'Lượng từ của 鸡蛋 là 个'],
               ['鸡 + 蛋', 'Trứng (蛋) gà (鸡)']]
  },
  '先生': {
    collo: [['王先生', 'ông Vương'], ['那个先生', 'ông kia'],
            ['先生的茶', 'trà của ông ấy'], ['先生和女士', 'quý ông và quý bà']],
    patterns: [['họ + 先生', 'Cách gọi trang trọng: 王先生'],
               ['先生 (quý ông) ↔ 女士 (quý bà)']]
  },
  '饺子': {
    collo: [['吃饺子', 'ăn sủi cảo'], ['做饺子', 'gói sủi cảo'],
            ['一些饺子', 'một ít sủi cảo'], ['要一半饺子', 'lấy một nửa phần sủi cảo']],
    patterns: [['吃 / 做 + 饺子', 'Ăn, gói sủi cảo'],
               ['饺子 là món người Trung Quốc hay làm vào dịp lễ']]
  },
  '一半': {
    collo: [['一半的钱', 'một nửa số tiền'], ['吃一半', 'ăn một nửa'],
            ['一半的饺子', 'một nửa phần sủi cảo'], ['给我一半', 'cho tôi một nửa']],
    patterns: [['一半 + 的 + danh từ', 'Một nửa cái gì: 一半的钱'],
               ['一 + 半', 'Một (一) nửa (半) — 半 cũng dùng cho giờ: 两点半']]
  },
  '茶': {
    collo: [['喝茶', 'uống trà'], ['一杯茶', 'một cốc trà'],
            ['中国茶', 'trà Trung Quốc'], ['请喝茶', 'mời uống trà']],
    patterns: [['喝 + 茶', 'Uống trà'],
               ['茶 có bộ 艹 (cỏ) ở trên — trà làm từ lá cây']]
  }
};
