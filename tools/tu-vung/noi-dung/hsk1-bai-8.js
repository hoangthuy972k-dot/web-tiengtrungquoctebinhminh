// Noi dung TU MOI HSK1 bai 8 (chu de: an uong, mua sam, hoi gia).
module.exports = {
  '想': {
    collo: [['想吃', 'muốn ăn'], ['想喝茶', 'muốn uống trà'],
            ['想去中国', 'muốn đi Trung Quốc'], ['不想', 'không muốn']],
    patterns: [['Sub + 想 + động từ', 'Muốn làm gì: 我想喝茶'],
               ['想 (muốn) ≠ 会 (biết làm) — 我想说汉语 / 我会说汉语']]
  },
  '喝': {
    collo: [['喝茶', 'uống trà'], ['想喝', 'muốn uống'],
            ['喝什么', 'uống gì'], ['不喝', 'không uống']],
    patterns: [['喝 + đồ uống', 'Uống cái gì: 喝茶'],
               ['喝 (uống) ≠ 吃 (ăn) — dùng sai là lỗi rất hay gặp']]
  },
  '茶': {
    collo: [['喝茶', 'uống trà'], ['中国茶', 'trà Trung Quốc'],
            ['喝中国茶', 'uống trà Trung Quốc'], ['想喝茶', 'muốn uống trà']],
    patterns: [['喝 + 茶', 'Uống trà'],
               ['茶 có bộ 艹 (cỏ) ở trên — trà làm từ lá cây']]
  },
  '吃': {
    collo: [['吃米饭', 'ăn cơm'], ['吃菜', 'ăn thức ăn'],
            ['吃什么', 'ăn gì'], ['想吃', 'muốn ăn']],
    patterns: [['吃 + đồ ăn', 'Ăn cái gì: 吃米饭'],
               ['吃 có bộ 口 (miệng) bên trái — mọi chữ liên quan đến miệng đều có bộ này']]
  },
  '米饭': {
    collo: [['吃米饭', 'ăn cơm'], ['做米饭', 'nấu cơm'],
            ['好吃的米饭', 'cơm ngon'], ['想吃米饭', 'muốn ăn cơm']],
    patterns: [['吃 + 米饭', 'Ăn cơm'],
               ['米 + 饭', 'Cơm (饭) nấu từ gạo (米)']]
  },
  '下午': {
    collo: [['下午去', 'chiều đi'], ['今天下午', 'chiều nay'],
            ['明天下午', 'chiều mai'], ['下午看书', 'chiều đọc sách']],
    patterns: [['ngày + 下午', 'Ghép với 今天, 明天, 昨天: 今天下午'],
               ['下 + 午', 'Sau (下) buổi trưa (午)']]
  },
  '商店': {
    collo: [['去商店', 'đi cửa hàng'], ['商店的书', 'sách của cửa hàng'],
            ['这个商店', 'cửa hàng này'], ['明天去商店', 'mai đi cửa hàng']],
    patterns: [['去 + 商店', 'Đi cửa hàng'],
               ['商 + 店', 'Tiệm (店) buôn bán (商)']]
  },
  '买': {
    collo: [['买书', 'mua sách'], ['买茶', 'mua trà'],
            ['想买', 'muốn mua'], ['买什么', 'mua gì']],
    patterns: [['买 + danh từ', 'Mua cái gì: 买书'],
               ['买 (mǎi, mua) ≠ 卖 (mài, bán) — chỉ khác một nét ở trên']]
  },
  '个': {
    collo: [['一个', 'một cái'], ['几个', 'mấy cái'],
            ['这个', 'cái này'], ['那个杯子', 'cái cốc kia']],
    patterns: [['số / chỉ định + 个 + danh từ', 'Lượng từ dùng được nhiều nhất: 一个杯子'],
               ['Không nói 一杯子 — giữa số và danh từ BẮT BUỘC có lượng từ']]
  },
  '杯子': {
    collo: [['一个杯子', 'một cái cốc'], ['买杯子', 'mua cốc'],
            ['这个杯子', 'cái cốc này'], ['多少钱一个杯子', 'cái cốc bao nhiêu tiền']],
    patterns: [['一 + 个 + 杯子', 'Một cái cốc — lượng từ của 杯子 là 个'],
               ['杯 + 子', '子 ở đây là đuôi từ, đọc nhẹ: bēizi']]
  },
  '这': {
    collo: [['这个', 'cái này'], ['这是', 'đây là'],
            ['这个杯子', 'cái cốc này'], ['这个商店', 'cửa hàng này']],
    patterns: [['这 + 个 + danh từ', 'Cái này — giữa 这 và danh từ phải có lượng từ'],
               ['这 (gần) ↔ 那 (xa) — cặp từ chỉ định cơ bản']]
  },
  '多少': {
    collo: [['多少钱', 'bao nhiêu tiền'], ['多少个', 'bao nhiêu cái'],
            ['多少人', 'bao nhiêu người'], ['多少书', 'bao nhiêu sách']],
    patterns: [['多少 + danh từ', 'Hỏi số lượng BẤT KỲ, có thể rất lớn'],
               ['多少 không cần lượng từ; 几 thì phải có: 多少人 ✓ / 几个人 ✓']]
  },
  '钱': {
    collo: [['多少钱', 'bao nhiêu tiền'], ['十块钱', 'mười đồng'],
            ['有钱', 'có tiền'], ['几块钱', 'mấy đồng']],
    patterns: [['多少 + 钱', 'Hỏi giá: 这个多少钱？'],
               ['钱 có bộ 钅 (kim loại) — tiền xưa đúc bằng kim loại']]
  },
  '块': {
    collo: [['五块', 'năm đồng'], ['十块钱', 'mười đồng'],
            ['几块钱', 'mấy đồng'], ['一块', 'một đồng']],
    patterns: [['số + 块 + (钱)', 'Đơn vị tiền trong khẩu ngữ: 十块钱'],
               ['块 dùng khi nói; văn viết dùng 元']]
  },
  '那': {
    collo: [['那个', 'cái kia'], ['那是', 'kia là'],
            ['那个杯子', 'cái cốc kia'], ['那个商店', 'cửa hàng kia']],
    patterns: [['那 + 个 + danh từ', 'Cái kia — vật ở xa người nói'],
               ['那 (nà, kia) ≠ 哪 (nǎ, nào) — 哪 có thêm bộ 口 bên trái']]
  }
};
