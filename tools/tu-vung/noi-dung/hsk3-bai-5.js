// Noi dung TU MOI HSK3 bai 5 (chu de: om dau, cham soc, bon mua).
module.exports = {
  '发烧': {
    collo: [['有点儿发烧', 'hơi sốt'], ['发高烧', 'sốt cao'],
            ['发烧了', 'sốt rồi'], ['发了两天烧', 'sốt hai ngày'],
            ['退烧', 'hạ sốt']],
    patterns: [['发 + 了 + thời lượng + 烧', '发烧 là từ ly hợp: 发了两天烧 ✓'],
               ['有点儿 + 发烧', 'Hơi sốt — 有点儿 dùng cho điều không mong muốn']]
  },
  '为': {
    collo: [['为你买', 'mua cho bạn'], ['为孩子做饭', 'nấu cơm cho con'],
            ['为朋友准备', 'chuẩn bị cho bạn'], ['为他高兴', 'mừng cho anh ấy'],
            ['为大家服务', 'phục vụ mọi người']],
    patterns: [['为 + ai + V', 'Làm gì cho ai'],
               ['为 (wèi, vì ai) ≠ 为 (wéi, là) — ở bài này đọc wèi']]
  },
  '照顾': {
    collo: [['照顾孩子', 'chăm sóc con'], ['照顾病人', 'chăm người ốm'],
            ['在家照顾', 'ở nhà chăm sóc'], ['互相照顾', 'chăm sóc lẫn nhau'],
            ['照顾好自己', 'tự chăm sóc mình cho tốt']],
    patterns: [['照顾 + ai', 'Chăm sóc ai'],
               ['照顾好 + ai', 'Chăm sóc ai cho chu đáo — 好 là bổ ngữ kết quả']]
  },
  '用': {
    collo: [['不用去', 'không cần đi'], ['不用谢', 'không có gì'],
            ['不用着急', 'không cần vội'], ['有用', 'có ích'],
            ['用不用', 'có cần không']],
    patterns: [['不用 + V', 'Không cần làm gì'],
               ['不用 là phủ định của 得 (děi, phải) — không nói 不得']]
  },
  '感冒': {
    collo: [['感冒了', 'bị cảm rồi'], ['感冒药', 'thuốc cảm'],
            ['没感冒', 'không bị cảm'], ['容易感冒', 'dễ bị cảm'],
            ['感冒好了', 'khỏi cảm rồi']],
    patterns: [['Sub + 感冒 + 了', 'Ai đó bị cảm rồi'],
               ['感冒 + 药', 'Thuốc cảm — bệnh + 药 = thuốc chữa bệnh đó']]
  },
  '季节': {
    collo: [['四个季节', 'bốn mùa'], ['哪个季节', 'mùa nào'],
            ['最喜欢的季节', 'mùa thích nhất'], ['这个季节', 'mùa này'],
            ['季节变了', 'mùa đã đổi']],
    patterns: [['四个 + 季节', 'Bốn mùa: 春天·夏天·秋天·冬天'],
               ['季 + 节', 'Chia (节) theo mùa (季)']]
  },
  '当然': {
    collo: [['当然可以', 'đương nhiên được'], ['当然是', 'đương nhiên là'],
            ['当然好', 'dĩ nhiên tốt'], ['当然知道', 'đương nhiên biết'],
            ['当然不行', 'đương nhiên không được']],
    patterns: [['当然 + V / Adj', 'Đương nhiên …'],
               ['当然可以 / 当然好', 'Cách đáp lời đồng ý dứt khoát']]
  },
  '春(天)': {
    collo: [['春天到了', 'mùa xuân đến rồi'], ['喜欢春天', 'thích mùa xuân'],
            ['春天的花', 'hoa mùa xuân'], ['春天很暖和', 'mùa xuân ấm áp'],
            ['去年春天', 'mùa xuân năm ngoái']],
    patterns: [['春天 + 到了', 'Mùa xuân đến rồi'],
               ['春 · 夏 · 秋 · 冬 + 天', 'Bốn mùa đều thêm 天']]
  },
  '草': {
    collo: [['草地', 'bãi cỏ'], ['绿草', 'cỏ xanh'],
            ['草绿了', 'cỏ xanh rồi'], ['草和树', 'cỏ và cây'],
            ['坐在草地上', 'ngồi trên bãi cỏ']],
    patterns: [['草 + 绿 + 了', 'Cỏ đã xanh — 了 chỉ sự thay đổi'],
               ['草 + 地', 'Đất (地) cỏ (草) = bãi cỏ']]
  },
  '夏(天)': {
    collo: [['夏天很热', 'mùa hè rất nóng'], ['喜欢夏天', 'thích mùa hè'],
            ['夏天到了', 'mùa hè đến rồi'], ['夏天穿裙子', 'mùa hè mặc váy'],
            ['今年夏天', 'mùa hè năm nay']],
    patterns: [['夏天 + 热 / 冬天 + 冷', 'Mùa hè nóng, mùa đông lạnh'],
               ['夏天 ↔ 冬天', 'Mùa hè ↔ mùa đông']]
  },
  '裙子': {
    collo: [['一条裙子', 'một cái váy'], ['穿裙子', 'mặc váy'],
            ['漂亮的裙子', 'cái váy đẹp'], ['新裙子', 'váy mới'],
            ['买条裙子', 'mua cái váy']],
    patterns: [['một + 条 + 裙子', 'Lượng từ 条 — giống 裤子 ở bài 3'],
               ['穿 + 裙子', 'Mặc váy']]
  },
  '最近': {
    collo: [['最近怎么样', 'dạo này thế nào'], ['最近很忙', 'dạo này rất bận'],
            ['最近越来越', 'gần đây ngày càng'], ['最近没见', 'dạo này không gặp'],
            ['最近的事', 'chuyện gần đây']],
    patterns: [['最近 + Sub + V', 'Dạo này ai đó …'],
               ['最近怎么样？', 'Dạo này thế nào? — câu hỏi thăm quen thuộc']]
  },
  '越': {
    collo: [['越来越漂亮', 'ngày càng đẹp'], ['越来越好', 'ngày càng tốt'],
            ['越来越难', 'ngày càng khó'], ['越吃越想吃', 'càng ăn càng muốn ăn'],
            ['越忙越累', 'càng bận càng mệt']],
    patterns: [['越来越 + Adj', 'Ngày càng … (thay đổi theo thời gian)'],
               ['越 A 越 B', 'Càng A càng B — hai vế biến đổi cùng chiều']]
  }
};
