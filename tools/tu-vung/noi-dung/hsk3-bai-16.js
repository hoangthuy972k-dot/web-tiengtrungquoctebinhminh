// Noi dung TU MOI HSK3 bai 16 (chu de: ta nguoi, so do, quan he).
module.exports = {
  '城市': {
    collo: [['大城市', 'thành phố lớn'], ['住在城市', 'sống ở thành phố'],
            ['其他城市', 'các thành phố khác'], ['漂亮的城市', 'thành phố đẹp'],
            ['城市生活', 'cuộc sống thành phố']],
    patterns: [['住在 + 城市', 'Sống ở thành phố'],
               ['城 + 市', 'Thành (城) và chợ (市) — nơi đông người']]
  },
  '如果': {
    collo: [['如果……就……', 'nếu… thì…'], ['如果有钱', 'nếu có tiền'],
            ['如果不舒服', 'nếu không khoẻ'], ['如果可以', 'nếu được'],
            ['如果……的话', 'nếu như…']],
    patterns: [['如果 + mệnh đề，就 + mệnh đề', 'Nếu … thì … — khung giả thiết cơ bản'],
               ['如果……的话', 'Thêm 的话 ở cuối vế đầu cho rõ ý giả thiết']]
  },
  '认为': {
    collo: [['我认为', 'tôi cho rằng'], ['大家都认为', 'mọi người đều cho rằng'],
            ['认为不可能', 'cho là không thể'], ['你认为呢', 'bạn nghĩ sao'],
            ['认为很重要', 'cho là rất quan trọng']],
    patterns: [['Sub + 认为 + mệnh đề', 'Ai đó cho rằng …'],
               ['认为 (quan điểm) ≠ 以为 (nghĩ sai) — HSK 4 sẽ học 以为']]
  },
  '皮鞋': {
    collo: [['一双皮鞋', 'một đôi giày da'], ['买皮鞋', 'mua giày da'],
            ['黑皮鞋', 'giày da đen'], ['穿皮鞋', 'đi giày da'],
            ['皮鞋很贵', 'giày da rất đắt']],
    patterns: [['một + 双 + 皮鞋', 'Lượng từ 双 (bài 11) cho vật đi thành đôi'],
               ['皮 + 鞋', 'Giày (鞋) bằng da (皮)']]
  },
  '帽子': {
    collo: [['戴帽子', 'đội mũ'], ['买帽子', 'mua mũ'],
            ['一个帽子', 'một cái mũ'], ['小帽子', 'cái mũ nhỏ'],
            ['别戴帽子了', 'đừng đội mũ nữa']],
    patterns: [['戴 + 帽子', 'Đội mũ — dùng 戴 như 戴眼镜 (bài 6)'],
               ['✗ 穿帽子 → ✓ 戴帽子']]
  },
  '长': {
    collo: [['长高了', 'cao lên rồi'], ['长大了', 'lớn rồi'],
            ['长得可爱', 'trông đáng yêu'], ['长得像妈妈', 'trông giống mẹ'],
            ['长得很快', 'lớn rất nhanh']],
    patterns: [['长 + 得 + Adj', 'Trông thế nào — 长得像, 长得可爱'],
               ['长 (zhǎng, lớn lên) ≠ 长 (cháng, dài) — cùng chữ, khác âm']]
  },
  '可爱': {
    collo: [['真可爱', 'đáng yêu thật'], ['可爱极了', 'đáng yêu cực kỳ'],
            ['长得可爱', 'trông đáng yêu'], ['可爱的孩子', 'đứa trẻ dễ thương'],
            ['很可爱', 'rất dễ thương']],
    patterns: [['Adj + 极了', 'Cực kỳ … — 极了 là từ bài 15'],
               ['可 + 爱', 'Đáng (可) yêu (爱) — ghép nghĩa dễ nhớ']]
  },
  '米': {
    collo: [['一米', 'một mét'], ['三百米', 'ba trăm mét'],
            ['一千米', 'một nghìn mét'], ['1米8', 'một mét tám'],
            ['离这儿五百米', 'cách đây năm trăm mét']],
    patterns: [['số + 米', 'Bao nhiêu mét'],
               ['米 (mét) ≠ 米 (gạo) — cùng chữ, hai nghĩa']]
  },
  '公斤': {
    collo: [['25公斤', 'hai lăm cân'], ['四公斤', 'bốn cân'],
            ['八十公斤', 'tám mươi cân'], ['重五公斤', 'nặng năm cân'],
            ['只有40公斤', 'chỉ có bốn mươi cân']],
    patterns: [['số + 公斤', 'Bao nhiêu ki-lô-gam'],
               ['公斤 (kg) — 1 公斤 = 2 斤']]
  },
  '鼻子': {
    collo: [['鼻子小小的', 'mũi nho nhỏ'], ['高高的鼻子', 'sống mũi cao'],
            ['鼻子像爸爸', 'mũi giống bố'], ['鼻子不舒服', 'mũi khó chịu'],
            ['大鼻子', 'mũi to']],
    patterns: [['Adj + Adj + 的', 'Dạng lặp tính từ: 小小的, 高高的 — nghe mềm và thân mật'],
               ['bộ phận + 像 + ai', 'Bộ phận nào giống ai — 像 là từ bài 14']]
  },
  '头发': {
    collo: [['长头发', 'tóc dài'], ['短头发', 'tóc ngắn'],
            ['头发黑黑的', 'tóc đen nhánh'], ['洗头发', 'gội đầu'],
            ['头发很长', 'tóc rất dài']],
    patterns: [['头发 + 长 / 短', 'Tóc dài / ngắn — 长 ở đây đọc cháng'],
               ['头 + 发', 'Tóc (发) trên đầu (头)']]
  },
  '检查': {
    collo: [['去医院检查', 'đi bệnh viện khám'], ['检查一下', 'kiểm tra một chút'],
            ['检查身体', 'khám sức khoẻ'], ['检查作业', 'kiểm tra bài tập'],
            ['检查好几次', 'kiểm tra mấy lần']],
    patterns: [['检查 + 身体 / 作业', 'Khám sức khoẻ, kiểm tra bài'],
               ['检 + 查', 'Xem xét (检) và tra (查)']]
  },
  '刷牙': {
    collo: [['好好儿刷牙', 'đánh răng cho kỹ'], ['早上刷牙', 'sáng đánh răng'],
            ['刷牙、洗脸', 'đánh răng rửa mặt'], ['刷了牙', 'đã đánh răng'],
            ['睡觉前刷牙', 'trước khi ngủ đánh răng']],
    patterns: [['刷 + 了 + 牙', '刷牙 là từ ly hợp: 刷了牙 ✓'],
               ['刷 + 牙', 'Chải (刷) răng (牙)']]
  },
  '关系': {
    collo: [['人和人的关系', 'quan hệ giữa người với người'], ['关系很好', 'quan hệ tốt'],
            ['关系变得更好', 'quan hệ tốt lên'], ['没关系', 'không sao'],
            ['跟他的关系', 'quan hệ với anh ấy']],
    patterns: [['跟 + ai + 的关系', 'Quan hệ với ai'],
               ['没关系', 'Không sao đâu — lời đáp khi người khác xin lỗi']]
  },
  '别人': {
    collo: [['对别人', 'đối với người khác'], ['问问别人', 'hỏi người khác'],
            ['帮助别人', 'giúp đỡ người khác'], ['别人的东西', 'đồ của người khác'],
            ['跟别人见面', 'gặp người khác']],
    patterns: [['帮助 + 别人', 'Giúp đỡ người khác'],
               ['别人 ≈ 其他人 (bài 15)', '别人 thiên khẩu ngữ hơn']]
  },
  '词语': {
    collo: [['用词语', 'dùng từ ngữ'], ['写对词语', 'viết đúng từ'],
            ['这样的词语', 'từ ngữ như vậy'], ['不懂的词语', 'từ không hiểu'],
            ['学新词语', 'học từ mới']],
    patterns: [['不懂的 + 词语', 'Từ ngữ không hiểu'],
               ['词 + 语', 'Từ (词) và lời (语)']]
  }
};
