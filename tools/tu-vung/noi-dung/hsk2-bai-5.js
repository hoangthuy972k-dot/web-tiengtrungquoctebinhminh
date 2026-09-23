// Noi dung TU MOI HSK2 (bo cu) bai 5 (chu de: an uong, thi cu, du dinh).
module.exports = {
  '外面': {
    collo: [['外面很冷', 'bên ngoài rất lạnh'], ['在外面', 'ở bên ngoài'],
            ['外面下雨', 'bên ngoài mưa'], ['到外面去', 'ra bên ngoài']],
    patterns: [['在 + 外面', 'Ở bên ngoài: 他在外面'],
               ['外面 ↔ 里面 — ngoài và trong']]
  },
  '准备': {
    collo: [['准备考试', 'chuẩn bị thi'], ['准备好了', 'chuẩn bị xong rồi'],
            ['准备做菜', 'chuẩn bị nấu ăn'], ['准备一下', 'chuẩn bị một chút']],
    patterns: [['准备 + động từ', 'Chuẩn bị làm gì: 准备考试'],
               ['准备 vừa là chuẩn bị, vừa là dự định: 我准备明天去']]
  },
  '就': {
    collo: [['就来', 'đến ngay'], ['就在这儿', 'ngay ở đây'],
            ['吃了就去', 'ăn xong là đi'], ['就是他', 'chính là anh ấy']],
    patterns: [['Sub + 就 + động từ', 'Làm ngay, làm sớm: 我就来'],
               ['就 (sớm hơn nghĩ) — 他五点就来了 = anh ấy đến sớm']]
  },
  '鱼': {
    collo: [['吃鱼', 'ăn cá'], ['买鱼', 'mua cá'],
            ['一条鱼', 'một con cá'], ['做鱼', 'làm món cá']],
    patterns: [['một + 条 + 鱼', 'Lượng từ của 鱼 là 条'],
               ['鱼 là chữ tượng hình — vẽ hình con cá']]
  },
  '件': {
    collo: [['一件衣服', 'một bộ quần áo'], ['两件事', 'hai việc'],
            ['这件', 'cái này'], ['那件新的', 'cái mới kia']],
    patterns: [['số + 件 + danh từ', 'Lượng từ của quần áo và sự việc'],
               ['件 dùng cho 衣服 · 事; 个 dùng cho người và đồ vật thường']]
  },
  '还': {
    collo: [['还有', 'còn có'], ['还没有', 'vẫn chưa có'],
            ['还在休息', 'vẫn đang nghỉ'], ['还要', 'còn muốn']],
    patterns: [['还 + động từ', 'Vẫn còn, còn thêm: 我还要一个'],
               ['还没 + động từ', 'Vẫn chưa làm: 他还没来']]
  },
  '可以': {
    collo: [['可以吃', 'có thể ăn'], ['可以去', 'có thể đi'],
            ['不可以', 'không được'], ['可以吗', 'được không']],
    patterns: [['可以 + động từ', 'Được phép làm gì: 我可以问一下吗？'],
               ['可以 (được phép) ≠ 会 (biết làm) ≠ 能 (đủ sức làm)']]
  },
  '不错': {
    collo: [['很不错', 'khá tốt'], ['菜不错', 'món ăn ngon'],
            ['身体不错', 'sức khoẻ tốt'], ['考试不错', 'thi khá tốt']],
    patterns: [['Sub + 不错', 'Cách khen nhẹ nhàng: 这个菜不错'],
               ['不错 = không tệ = khá tốt — là lời khen, không phải chê']]
  },
  '考试': {
    collo: [['准备考试', 'chuẩn bị thi'], ['汉语考试', 'kỳ thi tiếng Trung'],
            ['考试的时候', 'lúc thi'], ['考试了', 'thi rồi']],
    patterns: [['准备 + 考试', 'Chuẩn bị cho kỳ thi'],
               ['考 + 试', 'Khảo (考) sát bằng cách thử (试)']]
  },
  '意思': {
    collo: [['什么意思', 'nghĩa là gì'], ['这个意思', 'ý này'],
            ['有意思', 'thú vị'], ['不好意思', 'ngại quá']],
    patterns: [['什么 + 意思？', 'Hỏi nghĩa: 这个字是什么意思？'],
               ['不好意思 — câu nói khi ngại, khi làm phiền người khác']]
  },
  '咖啡': {
    collo: [['喝咖啡', 'uống cà phê'], ['一杯咖啡', 'một cốc cà phê'],
            ['买咖啡', 'mua cà phê'], ['热咖啡', 'cà phê nóng']],
    patterns: [['喝 + 咖啡', 'Uống cà phê — 喝 dùng cho mọi đồ uống'],
               ['咖啡 là từ mượn — cả hai chữ đều có bộ 口']]
  },
  '对': {
    collo: [['对了', 'đúng rồi'], ['不对', 'không đúng'],
            ['对我说', 'nói với tôi'], ['对身体好', 'tốt cho sức khoẻ']],
    patterns: [['对 + người + 说', 'Nói với ai: 他对我说'],
               ['对 (đúng) và 对 (hướng về ai) — cùng chữ, hai nghĩa']]
  },
  '以后': {
    collo: [['以后再说', 'sau này nói tiếp'], ['吃了以后', 'sau khi ăn'],
            ['考试以后', 'sau kỳ thi'], ['以后见', 'sau này gặp lại']],
    patterns: [['việc gì + 以后', 'Sau khi làm gì: 考试以后我去旅游'],
               ['以后 đứng SAU mốc thời gian, khác tiếng Việt']]
  }
};
