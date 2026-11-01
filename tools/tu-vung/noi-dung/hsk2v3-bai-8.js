// Noi dung TU MOI HSK2 3.0 bai 8 (chu de: so sanh, vi tri trai phai, vo chong).
module.exports = {
  '手表': {
    collo: [['一个手表', 'một cái đồng hồ'], ['买手表', 'mua đồng hồ'],
            ['我的手表', 'đồng hồ của tôi'], ['贵的手表', 'cái đồng hồ đắt tiền']],
    patterns: [['một + 个 + 手表', 'Lượng từ của 手表 là 个'],
               ['手 + 表', 'Cái đồng hồ (表) đeo trên tay (手)']]
  },
  '左边': {
    collo: [['在左边', 'ở bên trái'], ['左边的房间', 'căn phòng bên trái'],
            ['我的左边', 'bên trái tôi'], ['左边有', 'bên trái có']],
    patterns: [['danh từ + 左边', 'Bên trái cái gì: 我的左边'],
               ['左边 ↔ 右边', 'Bên trái ↔ bên phải']]
  },
  '左': {
    collo: [['往左走', 'rẽ trái'], ['左边', 'bên trái'],
            ['左手', 'tay trái'], ['左右', 'khoảng, trái phải']],
    patterns: [['往 + 左 + 走', 'Rẽ trái — hay dùng khi chỉ đường'],
               ['左 ↔ 右', 'Trái ↔ phải']]
  },
  '比': {
    collo: [['比我高', 'cao hơn tôi'], ['比昨天冷', 'lạnh hơn hôm qua'],
            ['比这个贵', 'đắt hơn cái này'], ['比他跑得快', 'chạy nhanh hơn anh ấy']],
    patterns: [['A + 比 + B + tính từ', 'A hơn B: 他比我高'],
               ['✗ 他比我很高 → ✓ 他比我高', 'Câu 比 KHÔNG dùng 很']]
  },
  '右边': {
    collo: [['在右边', 'ở bên phải'], ['右边的房间', 'căn phòng bên phải'],
            ['我的右边', 'bên phải tôi'], ['右边有', 'bên phải có']],
    patterns: [['danh từ + 右边', 'Bên phải cái gì: 学校的右边'],
               ['右边 ↔ 左边', 'Bên phải ↔ bên trái']]
  },
  '右': {
    collo: [['往右走', 'rẽ phải'], ['右边', 'bên phải'],
            ['右手', 'tay phải'], ['左右', 'khoảng, trái phải']],
    patterns: [['往 + 右 + 走', 'Rẽ phải — hay dùng khi chỉ đường'],
               ['右 ↔ 左', 'Phải ↔ trái']]
  },
  '记得': {
    collo: [['记得他', 'nhớ anh ấy'], ['不记得', 'không nhớ'],
            ['记得带', 'nhớ mang theo'], ['你记得吗', 'bạn có nhớ không']],
    patterns: [['记得 + mệnh đề', 'Nhớ chuyện gì: 我记得他的名字'],
               ['记得 (nhớ được) ↔ 忘了 (quên mất)']]
  },
  '爱情片': {
    collo: [['看爱情片', 'xem phim tình cảm'], ['一个爱情片', 'một bộ phim tình cảm'],
            ['喜欢爱情片', 'thích phim tình cảm'], ['有意思的爱情片', 'phim tình cảm hay']],
    patterns: [['看 + 爱情片', 'Xem phim tình cảm'],
               ['爱情 + 片', 'Bộ phim (片) về tình yêu (爱情)']]
  },
  '有意思': {
    collo: [['很有意思', 'rất thú vị'], ['非常有意思', 'cực kỳ thú vị'],
            ['没意思', 'chán'], ['有意思的书', 'quyển sách hay']],
    patterns: [['很 / 非常 + 有意思', 'Rất, cực kỳ thú vị'],
               ['有意思 ↔ 没意思', 'Thú vị ↔ chán']]
  },
  '点': {
    collo: [['点菜', 'gọi món'], ['点一个菜', 'gọi một món'],
            ['点什么', 'gọi món gì'], ['给我点', 'gọi giúp tôi']],
    patterns: [['点 + 菜', 'Gọi món trong nhà hàng'],
               ['点 (gọi món) khác 点 (giờ) — cùng chữ, hai nghĩa']]
  },
  '虽然': {
    collo: [['虽然很贵', 'tuy rất đắt'], ['虽然很累', 'tuy rất mệt'],
            ['虽然下雨', 'tuy trời mưa'], ['虽然……但是……', 'tuy… nhưng…']],
    patterns: [['虽然 A，但是 B', 'Tuy A nhưng B — cặp liên từ nhượng bộ'],
               ['Tiếng Trung dùng CẢ HAI vế 虽然 và 但是, khác tiếng Việt']]
  },
  '但是': {
    collo: [['但是很贵', 'nhưng rất đắt'], ['但是我不去', 'nhưng tôi không đi'],
            ['但是没买', 'nhưng đã không mua'], ['虽然……但是……', 'tuy… nhưng…']],
    patterns: [['虽然 A，但是 B', 'Tuy A nhưng B — 但是 mở đầu vế sau'],
               ['但是 = 但 — 但是 đầy đủ hơn, 但 ngắn gọn hơn']]
  },
  '花': {
    collo: [['花钱', 'tiêu tiền'], ['花时间', 'tốn thời gian'],
            ['花了很多钱', 'tiêu rất nhiều tiền'], ['不花钱', 'không tốn tiền']],
    patterns: [['花 + 钱 / 时间', 'Tốn tiền, tốn thời gian'],
               ['花 (tiêu tốn) và 花 (bông hoa) — cùng chữ, hai nghĩa']]
  },
  '妻子': {
    collo: [['我妻子', 'vợ tôi'], ['他的妻子', 'vợ anh ấy'],
            ['妻子和丈夫', 'vợ và chồng'], ['妻子的手表', 'đồng hồ của vợ']],
    patterns: [['ai + 妻子', 'Vợ của ai — người thân hay bỏ 的'],
               ['妻子 (vợ) ↔ 丈夫 (chồng)']]
  },
  '丈夫': {
    collo: [['我丈夫', 'chồng tôi'], ['她的丈夫', 'chồng cô ấy'],
            ['丈夫和妻子', 'chồng và vợ'], ['丈夫的工作', 'công việc của chồng']],
    patterns: [['ai + 丈夫', 'Chồng của ai — người thân hay bỏ 的'],
               ['丈夫 (chồng) ↔ 妻子 (vợ)']]
  },
  '饭馆': {
    collo: [['去饭馆', 'đến quán ăn'], ['在饭馆吃饭', 'ăn ở quán'],
            ['这家饭馆', 'quán ăn này'], ['饭馆的菜', 'món của quán']],
    patterns: [['在 + 饭馆 + 吃饭', 'Ăn cơm ở quán'],
               ['饭馆 nhỏ hơn 饭店 — 饭馆 là quán ăn bình dân']]
  }
};
