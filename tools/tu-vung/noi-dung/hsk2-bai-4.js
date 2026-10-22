// Noi dung TU MOI HSK2 (bo cu) bai 4 (chu de: sinh nhat, moi khach, giup do).
module.exports = {
  '生日': {
    collo: [['过生日', 'mừng sinh nhật'], ['生日快乐', 'chúc mừng sinh nhật'],
            ['生日的时候', 'dịp sinh nhật'], ['我的生日', 'sinh nhật của tôi']],
    patterns: [['过 + 生日', 'Mừng sinh nhật — dùng động từ 过'],
               ['生日快乐！là câu chúc quen thuộc nhất']]
  },
  '快乐': {
    collo: [['生日快乐', 'sinh nhật vui vẻ'], ['很快乐', 'rất vui'],
            ['快乐的一天', 'một ngày vui vẻ'], ['不快乐', 'không vui']],
    patterns: [['生日快乐！', 'Chúc mừng sinh nhật — câu chúc quen thuộc nhất'],
               ['快乐 (vui, hạnh phúc) và 高兴 (vui trong lúc này)']]
  },
  '给': {
    collo: [['给我', 'cho tôi'], ['给他打电话', 'gọi điện cho anh ấy'],
            ['给你介绍', 'giới thiệu cho bạn'], ['给妈妈买', 'mua cho mẹ']],
    patterns: [['给 + người + động từ', 'Làm gì cho ai — 给 đứng TRƯỚC động từ'],
               ['✗ 打电话给我 → ✓ 给我打电话']]
  },
  '接': {
    collo: [['接你', 'đón bạn'], ['去学校接', 'đến trường đón'],
            ['接电话', 'nghe điện thoại'], ['来接我', 'đến đón tôi']],
    patterns: [['接 + người', 'Đón ai: 我去接你'],
               ['接 + 电话', 'Nghe điện thoại — cũng dùng 接']]
  },
  '晚上': {
    collo: [['今天晚上', 'tối nay'], ['明天晚上', 'tối mai'],
            ['晚上八点', 'tám giờ tối'], ['晚上见', 'tối gặp']],
    patterns: [['ngày + 晚上', 'Buổi tối của ngày nào: 今天晚上'],
               ['早上 · 中午 · 晚上 — các buổi trong ngày']]
  },
  '问': {
    collo: [['问老师', 'hỏi thầy'], ['问什么', 'hỏi gì'],
            ['请问', 'xin hỏi'], ['问一下', 'hỏi một chút']],
    patterns: [['问 + người', 'Hỏi ai: 问老师'],
               ['问 (hỏi) ≠ 说 (nói) — 问 luôn chờ câu trả lời']]
  },
  '非常': {
    collo: [['非常好', 'rất tốt'], ['非常快乐', 'cực kỳ vui'],
            ['非常忙', 'cực kỳ bận'], ['非常喜欢', 'cực kỳ thích']],
    patterns: [['非常 + tính từ / động từ', 'Mức độ cao hơn 很: 非常快乐'],
               ['很 < 非常 < 最 — ba mức từ thấp lên cao']]
  },
  '开始': {
    collo: [['开始上课', 'bắt đầu vào học'], ['几点开始', 'mấy giờ bắt đầu'],
            ['开始了', 'bắt đầu rồi'], ['开始学习', 'bắt đầu học']],
    patterns: [['开始 + động từ', 'Bắt đầu làm gì: 开始上课'],
               ['thời gian + 开始', 'Bắt đầu từ lúc nào: 八点开始']]
  },
  '已经': {
    collo: [['已经来了', 'đã đến rồi'], ['已经知道', 'đã biết rồi'],
            ['已经开始了', 'đã bắt đầu rồi'], ['已经很晚了', 'đã muộn lắm rồi']],
    patterns: [['已经 + động từ + 了', 'Đã … rồi — hai vế thường đi cùng nhau'],
               ['已经 đứng TRƯỚC động từ, 了 đứng cuối câu']]
  },
  '长': {
    collo: [['很长', 'rất dài'], ['长时间', 'thời gian dài'],
            ['不长', 'không dài'], ['长长的', 'dài dài']],
    patterns: [['很 + 长', 'Rất dài — nói về vật, về thời gian'],
               ['长 (cháng, dài) và 长 (zhǎng, lớn lên) — cùng chữ, khác âm']]
  },
  '两': {
    collo: [['两个人', 'hai người'], ['两点', 'hai giờ'],
            ['两个小时', 'hai tiếng'], ['两天', 'hai ngày']],
    patterns: [['两 + lượng từ + danh từ', 'Hai cái gì: 两个人'],
               ['两 (đếm số lượng) ≠ 二 (đọc số, thứ tự): 两个 ✓ / 二个 ✗']]
  },
  '帮': {
    collo: [['帮我', 'giúp tôi'], ['帮你买', 'mua giúp bạn'],
            ['帮忙', 'giúp đỡ'], ['帮他接', 'đón giúp anh ấy']],
    patterns: [['帮 + người + động từ', 'Giúp ai làm gì: 帮我看一下'],
               ['帮 (giúp, có tân ngữ) và 帮忙 (giúp đỡ, từ ly hợp)']]
  },
  '介绍': {
    collo: [['介绍一下', 'giới thiệu một chút'], ['给你介绍', 'giới thiệu cho bạn'],
            ['介绍学校', 'giới thiệu trường'], ['介绍朋友', 'giới thiệu bạn']],
    patterns: [['给 + người + 介绍 + 一下', 'Giới thiệu cho ai một chút'],
               ['介 + 绍', 'Bắc cầu (介) nối (绍) hai bên lại với nhau']]
  }
};
