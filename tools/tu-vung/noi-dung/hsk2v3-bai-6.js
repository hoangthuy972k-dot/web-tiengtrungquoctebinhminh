// Noi dung TU MOI HSK2 3.0 bai 6 (chu de: sinh nhat, ve tranh, do an).
module.exports = {
  '生日': {
    collo: [['过生日', 'mừng sinh nhật'], ['生日快乐', 'chúc mừng sinh nhật'],
            ['生日礼物', 'quà sinh nhật'], ['生日蛋糕', 'bánh sinh nhật']],
    patterns: [['过 + 生日', 'Mừng sinh nhật — dùng động từ 过'],
               ['生日快乐！là câu chúc quen thuộc nhất']]
  },
  '忘': {
    collo: [['别忘了', 'đừng quên'], ['忘了', 'quên rồi'],
            ['忘了带', 'quên mang'], ['我忘了', 'tôi quên rồi']],
    patterns: [['忘 + 了', 'Quên rồi — 了 cho thấy việc vừa xảy ra'],
               ['别忘了 + việc', 'Đừng quên việc gì: 别忘了带礼物']]
  },
  '画': {
    collo: [['画画儿', 'vẽ tranh'], ['喜欢画', 'thích vẽ'],
            ['画得很好', 'vẽ rất đẹp'], ['一张画儿', 'một bức tranh']],
    patterns: [['画 + 画儿', 'Vẽ tranh — 画 vừa là động từ vừa là danh từ'],
               ['画得 + Adj', 'Vẽ thế nào: 画得很好']]
  },
  '画笔': {
    collo: [['我的画笔', 'cọ vẽ của tôi'], ['买画笔', 'mua cọ vẽ'],
            ['用画笔画', 'dùng cọ để vẽ'], ['画笔和书包', 'cọ vẽ và cặp sách']],
    patterns: [['画 + 笔', 'Cây bút (笔) để vẽ (画)'],
               ['画 + 笔 — cùng chữ 笔 với các loại bút khác']]
  },
  '蛋糕': {
    collo: [['生日蛋糕', 'bánh sinh nhật'], ['吃蛋糕', 'ăn bánh ga-tô'],
            ['做蛋糕', 'làm bánh'], ['一个蛋糕', 'một cái bánh']],
    patterns: [['吃 / 做 + 蛋糕', 'Ăn, làm bánh ga-tô'],
               ['蛋 + 糕', 'Bánh (糕) làm từ trứng (蛋) — cùng chữ 蛋 với 鸡蛋']]
  },
  '快乐': {
    patterns: [['生日快乐！', 'Chúc mừng sinh nhật — câu chúc quen thuộc nhất'],
               ['快乐 (vui, hạnh phúc) và 高兴 (vui trong lúc này)']],
    collo: [['生日快乐', 'sinh nhật vui vẻ'], ['很快乐', 'rất vui'],
            ['快乐的一天', 'một ngày vui vẻ'], ['不快乐', 'không vui']]
  },
  '打开': {
    collo: [['打开礼物', 'mở quà'], ['打开门', 'mở cửa'],
            ['打开电脑', 'mở máy tính'], ['打开书', 'mở sách']],
    patterns: [['打开 + đồ vật', 'Mở cái gì ra: 打开礼物'],
               ['打 + 开', 'Dùng tay (打) làm cho mở ra (开)']]
  },
  '长': {
    collo: [['很长', 'rất dài'], ['长裤子', 'quần dài'],
            ['长时间', 'thời gian dài'], ['不长', 'không dài']],
    patterns: [['很 + 长', 'Rất dài — nói về vật, về thời gian'],
               ['长 ↔ 短', 'Dài ↔ ngắn']]
  },
  '鱼': {
    collo: [['一条鱼', 'một con cá'], ['吃鱼', 'ăn cá'],
            ['买鱼', 'mua cá'], ['做鱼', 'nấu cá']],
    patterns: [['một + 条 + 鱼', 'Lượng từ của 鱼 là 条'],
               ['鱼 là chữ tượng hình — bốn chấm dưới là đuôi cá']]
  },
  '肉': {
    collo: [['吃肉', 'ăn thịt'], ['买肉', 'mua thịt'],
            ['鱼和肉', 'cá và thịt'], ['不吃肉', 'không ăn thịt']],
    patterns: [['吃 / 买 + 肉', 'Ăn, mua thịt'],
               ['肉 là chữ tượng hình — các nét là thớ thịt']]
  },
  '过': {
    collo: [['过生日', 'mừng sinh nhật'], ['过新年', 'đón năm mới'],
            ['过得很好', 'sống rất tốt'], ['过一天', 'qua một ngày']],
    patterns: [['过 + 生日 / 新年', 'Mừng, đón một dịp — 过 là ĐỘNG TỪ ở đây'],
               ['过 (guò, trải qua) khác 过 (guo, đã từng — bài 4)']]
  },
  '地': {
    collo: [['高兴地说', 'vui vẻ nói'], ['快快地走', 'đi thật nhanh'],
            ['慢慢地吃', 'ăn từ từ'], ['认真地画', 'vẽ một cách nghiêm túc']],
    patterns: [['tính từ + 地 + động từ', 'Trạng ngữ cách thức: 高兴地说'],
               ['的 (trước danh từ) · 地 (trước động từ) · 得 (sau động từ)']]
  },
  '床': {
    collo: [['一张床', 'một cái giường'], ['床上', 'trên giường'],
            ['起床', 'ngủ dậy'], ['床下面', 'dưới giường']],
    patterns: [['một + 张 + 床', 'Lượng từ của 床 là 张'],
               ['起 + 床', 'Rời (起) khỏi giường (床) — tức là ngủ dậy']]
  },
  '舒服': {
    collo: [['很舒服', 'rất dễ chịu'], ['不舒服', 'khó chịu, mệt'],
            ['很不舒服', 'rất khó chịu'], ['舒服的床', 'cái giường êm']],
    patterns: [['很 + 舒服', 'Rất dễ chịu, rất thoải mái'],
               ['不舒服 thường có nghĩa là trong người khó chịu, hơi ốm']]
  }
};
