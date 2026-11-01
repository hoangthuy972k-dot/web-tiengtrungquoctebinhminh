// Noi dung TU MOI HSK3 bai 2 (chu de: co the, van phong, do vat).
module.exports = {
  '腿': {
    collo: [['腿疼', 'đau chân'], ['长腿', 'chân dài'],
            ['我的腿', 'chân tôi'], ['两条腿', 'hai chân'],
            ['腿不舒服', 'chân khó chịu']],
    patterns: [['腿 + 疼 / 长', 'Chân đau, chân dài — bộ phận cơ thể làm chủ ngữ nhỏ'],
               ['hai + 条 + 腿', 'Lượng từ 条 cho vật dài']]
  },
  '疼': {
    collo: [['头疼', 'đau đầu'], ['腿疼', 'đau chân'],
            ['肚子疼', 'đau bụng'], ['有点儿疼', 'hơi đau'],
            ['疼得厉害', 'đau dữ dội']],
    patterns: [['✗ 我疼头 → ✓ 我头疼', 'Bộ phận cơ thể đứng trước 疼'],
               ['有点儿 + 疼', 'Hơi đau — 有点儿 dùng cho điều không mong muốn']]
  },
  '脚': {
    collo: [['脚疼', 'đau chân'], ['左脚', 'chân trái'],
            ['右脚', 'chân phải'], ['一双脚', 'đôi bàn chân'],
            ['洗脚', 'rửa chân']],
    patterns: [['một + 双 + 脚', 'Lượng từ 双 cho vật đi thành đôi'],
               ['脚 (bàn chân) ≠ 腿 (cả chân)']]
  },
  '树': {
    collo: [['一棵树', 'một cái cây'], ['大树', 'cây to'],
            ['种树', 'trồng cây'], ['树下', 'dưới gốc cây'],
            ['树很高', 'cây rất cao']],
    patterns: [['một + 棵 + 树', 'Lượng từ 棵 cho cây cối'],
               ['在 + 树 + 下', 'Dưới gốc cây']]
  },
  '容易': {
    collo: [['很容易', 'rất dễ'], ['容易学', 'dễ học'],
            ['不容易', 'không dễ'], ['容易做', 'dễ làm'],
            ['太容易了', 'dễ quá']],
    patterns: [['容易 + V', 'Dễ làm gì'],
               ['容易 ↔ 难', 'Dễ ↔ khó']]
  },
  '难': {
    collo: [['很难', 'rất khó'], ['难写', 'khó viết'],
            ['难学', 'khó học'], ['不太难', 'không khó lắm'],
            ['难不难', 'khó hay không khó']],
    patterns: [['难 + V', 'Khó làm gì: 难写, 难学, 难做'],
               ['难不难？', 'Có khó không? — dạng hỏi chính phản']]
  },
  '太太': {
    collo: [['我太太', 'vợ tôi'], ['周太太', 'bà Chu'],
            ['他太太', 'vợ anh ấy'], ['太太和先生', 'bà và ông'],
            ['李太太很忙', 'bà Lý rất bận']],
    patterns: [['họ + 太太', 'Cách gọi: bà Chu, bà Lý…'],
               ['太太 (vợ, bà) ↔ 先生 (chồng, ông)']]
  },
  '秘书': {
    collo: [['王秘书', 'thư ký Vương'], ['我的秘书', 'thư ký của tôi'],
            ['当秘书', 'làm thư ký'], ['秘书在办公室', 'thư ký ở văn phòng'],
            ['经理的秘书', 'thư ký của giám đốc']],
    patterns: [['họ + 秘书', 'Cách gọi: thư ký Vương…'],
               ['当 + 秘书', 'Làm thư ký']]
  },
  '经理': {
    collo: [['张经理', 'giám đốc Trương'], ['我们经理', 'giám đốc của chúng tôi'],
            ['当经理', 'làm giám đốc'], ['经理很忙', 'giám đốc rất bận'],
            ['找经理', 'tìm giám đốc']],
    patterns: [['họ + 经理', 'Cách gọi: giám đốc Trương…'],
               ['当 + 经理', 'Làm giám đốc']]
  },
  '办公室': {
    collo: [['在办公室', 'ở văn phòng'], ['我的办公室', 'văn phòng của tôi'],
            ['去办公室', 'đến văn phòng'], ['办公室很大', 'văn phòng rất rộng'],
            ['办公室里', 'trong văn phòng']],
    patterns: [['在 + 办公室 + 里', 'Trong văn phòng'],
               ['办公 + 室', 'Phòng (室) làm việc (办公)']]
  },
  '辆': {
    collo: [['一辆车', 'một chiếc xe'], ['两辆自行车', 'hai chiếc xe đạp'],
            ['一辆出租车', 'một chiếc taxi'], ['几辆车', 'mấy chiếc xe'],
            ['那辆车', 'chiếc xe đó']],
    patterns: [['số + 辆 + 车', 'Lượng từ 辆 cho xe cộ'],
               ['✗ 一个车 → ✓ 一辆车', 'Xe cộ dùng 辆']]
  },
  '楼': {
    collo: [['上楼', 'lên lầu'], ['下楼', 'xuống lầu'],
            ['楼上', 'trên lầu'], ['楼下', 'dưới lầu'],
            ['几号楼', 'toà nhà số mấy']],
    patterns: [['上 / 下 + 楼', 'Lên / xuống lầu'],
               ['楼 + 上 / 下', 'Trên lầu / dưới lầu — 楼 đứng TRƯỚC']]
  },
  '拿': {
    collo: [['拿书', 'cầm sách'], ['拿钱', 'lấy tiền'],
            ['拿伞', 'cầm ô'], ['拿东西', 'lấy đồ'],
            ['帮我拿', 'cầm giúp tôi']],
    patterns: [['拿 + N', 'Cầm, lấy cái gì'],
               ['拿 (cầm bằng tay) ≠ 带 (mang theo)']]
  },
  '把': {
    collo: [['一把伞', 'một cái ô'], ['一把椅子', 'một cái ghế'],
            ['一把刀', 'một con dao'], ['两把伞', 'hai cái ô'],
            ['那把椅子', 'cái ghế đó']],
    patterns: [['số + 把 + đồ có tay cầm', 'Lượng từ 把: 伞, 椅子, 刀'],
               ['把 (lượng từ) khác 把 trong câu chữ 把 — nhận ra theo vị trí']]
  },
  '伞': {
    collo: [['一把伞', 'một cái ô'], ['雨伞', 'ô che mưa'],
            ['带伞', 'mang ô'], ['拿伞', 'cầm ô'],
            ['忘了带伞', 'quên mang ô']],
    patterns: [['带 / 拿 + 伞', 'Mang, cầm ô'],
               ['雨 + 伞 / 太阳 + 伞', 'Ô che mưa / ô che nắng']]
  },
  '胖': {
    collo: [['很胖', 'rất mập'], ['胖了', 'béo lên rồi'],
            ['有点儿胖', 'hơi mập'], ['这么胖', 'mập thế'],
            ['不胖不瘦', 'không mập không gầy']],
    patterns: [['Adj + 了', '胖了 — béo lên rồi, chỉ sự thay đổi'],
               ['胖 ↔ 瘦', 'Mập ↔ gầy']]
  },
  '其实': {
    collo: [['其实很容易', 'thực ra rất dễ'], ['其实不难', 'thật ra không khó'],
            ['他其实', 'thực ra anh ấy'], ['其实我知道', 'thật ra tôi biết'],
            ['但其实', 'nhưng thực ra']],
    patterns: [['……，其实 + mệnh đề', '…, thực ra … (trái với điều người ta tưởng)'],
               ['其实 đứng SAU chủ ngữ hoặc đầu vế sau']]
  },
  '瘦': {
    collo: [['很瘦', 'rất gầy'], ['瘦了', 'gầy đi rồi'],
            ['有点儿瘦', 'hơi gầy'], ['太瘦了', 'gầy quá'],
            ['想瘦一点儿', 'muốn gầy hơn chút']],
    patterns: [['Adj + 了', '瘦了 — gầy đi rồi'],
               ['瘦 ↔ 胖', 'Gầy ↔ mập']]
  }
};
