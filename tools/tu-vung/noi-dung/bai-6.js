// Noi dung TU MOI bai 6 HSK4 (chu de: khuyen mai, mua ban, dich vu sau ban hang).
module.exports = {
  '果汁': {
    collo: [['买果汁', 'mua nước trái cây'], ['喝果汁', 'uống nước trái cây'],
            ['一瓶果汁', 'một chai nước trái cây'], ['苹果汁', 'nước táo'],
            ['新鲜果汁', 'nước ép tươi']],
    patterns: [['một + 瓶 / 杯 + 果汁', 'Một chai / cốc nước trái cây'],
               ['loại quả + 汁', '苹果汁, 西瓜汁 — nước ép của quả nào']]
  },
  '售货员': {
    collo: [['售货员介绍', 'nhân viên giới thiệu'], ['问售货员', 'hỏi nhân viên bán hàng'],
            ['热情的售货员', 'nhân viên nhiệt tình'], ['当售货员', 'làm nhân viên bán hàng'],
            ['售货员说', 'nhân viên bán hàng nói']],
    patterns: [['售 + 货 + 员', 'Người (员) bán (售) hàng (货) — ghép nghĩa dễ nhớ'],
               ['问 / 麻烦 + 售货员', 'Hỏi / nhờ nhân viên bán hàng']]
  },
  '袜子': {
    collo: [['两双袜子', 'hai đôi tất'], ['买袜子', 'mua tất'],
            ['穿袜子', 'đi tất'], ['一双袜子', 'một đôi tất'],
            ['袜子破了', 'tất rách rồi']],
    patterns: [['một + 双 + 袜子', 'Lượng từ 双 cho vật đi thành đôi'],
               ['✗ 一个袜子 → ✓ 一双袜子', 'Tất, giày, đũa, mắt đều dùng 双']]
  },
  '打扰': {
    collo: [['打扰您了', 'làm phiền anh/chị rồi'], ['被别人打扰', 'bị người khác làm phiền'],
            ['不希望被打扰', 'không muốn bị làm phiền'], ['打扰一下', 'làm phiền một chút'],
            ['不好意思打扰你', 'ngại làm phiền bạn']],
    patterns: [['打扰 + ai + 一下', 'Làm phiền ai một chút (mở đầu lời hỏi)'],
               ['被 + ai + 打扰', 'Bị ai đó làm phiền — câu bị động']]
  },
  '竟然': {
    collo: [['竟然忘了', 'không ngờ lại quên'], ['竟然没听过', 'không ngờ chưa từng nghe'],
            ['竟然这么多', 'không ngờ nhiều thế'], ['竟然听得懂', 'không ngờ lại nghe hiểu'],
            ['竟然是他', 'hóa ra lại là anh ta']],
    patterns: [['Sub + 竟然 + V', 'Ai đó lại … (ngoài dự đoán, hơi bất ngờ)'],
               ['✗ 竟然他来了 → ✓ 他竟然来了', '竟然 đứng SAU chủ ngữ']]
  },
  '西红柿': {
    collo: [['买西红柿', 'mua cà chua'], ['西红柿新鲜', 'cà chua tươi'],
            ['两斤西红柿', 'hai cân cà chua'], ['西红柿炒鸡蛋', 'trứng xào cà chua'],
            ['新鲜的西红柿', 'cà chua tươi']],
    patterns: [['số + 斤 + 西红柿', 'Mấy cân cà chua — 斤 = 500g'],
               ['西红柿 + 新鲜 / 不新鲜', 'Cà chua tươi / không tươi']]
  },
  '百分之': {
    collo: [['百分之百', 'một trăm phần trăm'], ['百分之六十', 'sáu mươi phần trăm'],
            ['百分之七十五', 'bảy mươi lăm phần trăm'], ['百分之几', 'bao nhiêu phần trăm'],
            ['百分之十的人', '10% số người']],
    patterns: [['百分之 + số', 'Phần trăm — số đứng SAU, ngược với tiếng Việt'],
               ['✗ 六十百分之 → ✓ 百分之六十', 'Luôn đọc "trăm phần của…" trước']]
  },
  '倍': {
    collo: [['两倍', 'gấp hai lần'], ['三倍', 'gấp ba lần'],
            ['提高了一倍', 'tăng lên gấp đôi'], ['是……的两倍', 'gấp hai lần…'],
            ['多一倍', 'nhiều gấp đôi']],
    patterns: [['A 是 B 的 + số + 倍', 'A gấp mấy lần B'],
               ['✗ 200是100的一倍 → ✓ 两倍', '200 so với 100 là 两倍, không phải 一倍']]
  },
  '皮肤': {
    collo: [['对皮肤有好处', 'có lợi cho da'], ['皮肤好', 'da đẹp'],
            ['皮肤白', 'da trắng'], ['保护皮肤', 'bảo vệ da'],
            ['皮肤很干', 'da rất khô']],
    patterns: [['对 + 皮肤 + 有好处', 'Có lợi cho da'],
               ['保护 + 皮肤', 'Bảo vệ làn da']]
  },
  '好处': {
    collo: [['有好处', 'có lợi ích'], ['没有好处', 'không có lợi'],
            ['对身体有好处', 'có lợi cho sức khỏe'], ['很多好处', 'rất nhiều cái lợi'],
            ['好处和坏处', 'lợi và hại']],
    patterns: [['对 + N + 有 / 没有好处', 'Có / không có lợi cho cái gì'],
               ['好处 ↔ 坏处', 'Cặp từ trái nghĩa']]
  },
  '尝': {
    collo: [['尝尝', 'nếm thử'], ['尝一下', 'nếm một chút'],
            ['尝味道', 'nếm mùi vị'], ['先买几个尝尝', 'mua vài quả nếm thử trước'],
            ['尝一口', 'nếm một miếng']],
    patterns: [['尝尝 / 尝一下', 'Động từ lặp — làm nhẹ đi, ý "thử một chút"'],
               ['尝 + 味道', 'Nếm mùi vị — 味道 là từ bài 5']]
  },
  '轻': {
    collo: [['轻一点儿', 'nhẹ tay một chút'], ['很轻', 'rất nhẹ'],
            ['又轻又好', 'vừa nhẹ vừa tốt'], ['搬得轻一点儿', 'khiêng nhẹ tay một chút'],
            ['轻声说话', 'nói khẽ']],
    patterns: [['V + 得 + 轻一点儿', 'Làm gì nhẹ tay hơn một chút'],
               ['轻 ↔ 重', 'Nhẹ ↔ nặng']]
  },
  '方面': {
    collo: [['各方面', 'mọi phương diện'], ['这方面', 'phương diện này'],
            ['从价格方面看', 'xét từ phương diện giá cả'], ['在这方面', 'về mặt này'],
            ['两方面', 'hai mặt']],
    patterns: [['从 + N + 方面 + 看', 'Xét từ phương diện nào'],
               ['各 + 方面', 'Các mặt, mọi phương diện']]
  },
  '值得': {
    collo: [['值得买', 'đáng mua'], ['值得考虑', 'đáng cân nhắc'],
            ['值得学习', 'đáng học hỏi'], ['不值得', 'không đáng'],
            ['值得高兴', 'đáng mừng']],
    patterns: [['值得 + V', 'Đáng để làm gì'],
               ['✗ 值得很好 → ✓ 值得买', 'Sau 值得 là ĐỘNG TỪ, không phải tính từ']]
  },
  '活动': {
    collo: [['打折活动', 'chương trình giảm giá'], ['参加活动', 'tham gia hoạt động'],
            ['举办活动', 'tổ chức hoạt động'], ['有意义的活动', 'hoạt động có ý nghĩa'],
            ['各种各样的活动', 'đủ loại hoạt động']],
    patterns: [['举办 / 参加 + 活动', 'Tổ chức / tham gia hoạt động'],
               ['loại + 活动', '打折活动, 体育活动 — hoạt động kiểu gì']]
  },
  '内': {
    collo: [['一年内', 'trong vòng một năm'], ['三日内', 'trong vòng ba ngày'],
            ['范围内', 'trong phạm vi'], ['一个星期内', 'trong vòng một tuần'],
            ['学校内', 'trong trường']],
    patterns: [['thời lượng + 内', 'Trong vòng bao lâu — 内 đứng SAU'],
               ['✗ 内一年 → ✓ 一年内', '内 là từ phương vị, luôn đứng sau']]
  },
  '免费': {
    collo: [['免费修理', 'sửa chữa miễn phí'], ['免费送货', 'giao hàng miễn phí'],
            ['免费获得', 'nhận miễn phí'], ['免费办卡', 'làm thẻ miễn phí'],
            ['免费送货上门', 'giao hàng tận nhà miễn phí']],
    patterns: [['免费 + V', 'Làm gì miễn phí'],
               ['免 + 费', 'Miễn (免) phí (费) — ghép nghĩa dễ nhớ']]
  },
  '修理': {
    collo: [['免费修理', 'sửa chữa miễn phí'], ['修理好', 'sửa xong'],
            ['找人修理', 'tìm người sửa'], ['修理东西', 'sửa đồ'],
            ['负责修理', 'chịu trách nhiệm sửa chữa']],
    patterns: [['修理 + N', 'Sửa chữa cái gì'],
               ['找 + ai + 来修理', 'Tìm ai đó đến sửa']]
  },
  '支持': {
    collo: [['感谢支持', 'cảm ơn sự ủng hộ'], ['得到支持', 'nhận được ủng hộ'],
            ['支持你', 'ủng hộ bạn'], ['大家的支持', 'sự ủng hộ của mọi người'],
            ['支持和帮助', 'ủng hộ và giúp đỡ']],
    patterns: [['Sub + 支持 + ai (động từ)', 'Ai đó ủng hộ ai'],
               ['对 + ai + 的支持 (danh từ)', 'Sự ủng hộ dành cho ai']]
  },
  '举行': {
    collo: [['举行活动', 'tổ chức hoạt động'], ['举行会议', 'tổ chức cuộc họp'],
            ['举行比赛', 'tổ chức thi đấu'], ['举行婚礼', 'tổ chức đám cưới'],
            ['正在举行', 'đang diễn ra']],
    patterns: [['举行 + 会议 / 比赛 / 婚礼', 'Tổ chức sự kiện có nghi thức'],
               ['举行 ≈ 举办', '举行 thiên về sự kiện diễn ra; 举办 thiên về đứng ra tổ chức']]
  },
  '满': {
    collo: [['满100元', 'đủ 100 tệ'], ['购书满500元', 'mua sách đủ 500 tệ'],
            ['满四百元', 'đủ bốn trăm tệ'], ['人满了', 'đã đủ người'],
            ['满一年', 'tròn một năm']],
    patterns: [['满 + số tiền / thời gian', 'Đủ, tròn bao nhiêu'],
               ['满……送……', 'Mua đủ … tặng … (kiểu khuyến mãi)']]
  },
  '其中': {
    collo: [['其中一个', 'một trong số đó'], ['其中最重要的', 'quan trọng nhất trong đó'],
            ['其中有', 'trong đó có'], ['其中我最喜欢', 'trong đó tôi thích nhất'],
            ['乐在其中', 'vui trong đó']],
    patterns: [['……，其中 + …', '…, trong số đó thì …'],
               ['✗ 其中三个人来了 (chưa nêu tổng) → phải có nhóm ở vế trước']]
  },
  '小说': {
    collo: [['一本小说', 'một quyển tiểu thuyết'], ['看小说', 'đọc tiểu thuyết'],
            ['写小说', 'viết tiểu thuyết'], ['爱情小说', 'tiểu thuyết tình cảm'],
            ['小说打七五折', 'tiểu thuyết giảm còn 75%']],
    patterns: [['một + 本 + 小说', 'Lượng từ 本 cho sách vở'],
               ['loại + 小说', '爱情小说, 侦探小说 — tiểu thuyết loại gì']]
  },
  '所有': {
    collo: [['所有人', 'tất cả mọi người'], ['所有东西', 'tất cả đồ đạc'],
            ['所有的小朋友', 'tất cả các bạn nhỏ'], ['所有问题', 'mọi vấn đề'],
            ['所有的书', 'tất cả sách']],
    patterns: [['所有 (的) + N + 都 + V', 'Tất cả … đều …'],
               ['所有 ≠ 有', '所有 = toàn bộ; 有 = có']]
  },
  '获得': {
    collo: [['获得礼物', 'nhận được quà'], ['获得成功', 'giành được thành công'],
            ['免费获得', 'nhận miễn phí'], ['获得帮助', 'nhận được giúp đỡ'],
            ['获得第一名', 'giành giải nhất']],
    patterns: [['获得 + danh từ trừu tượng', 'Giành được, nhận được (trang trọng)'],
               ['获得 ≠ 得到', '获得 dùng cho cái phải nỗ lực mới có']]
  },
  '情况': {
    collo: [['一般情况下', 'trong trường hợp thông thường'], ['什么情况', 'tình hình gì'],
            ['了解情况', 'nắm tình hình'], ['实际情况', 'tình hình thực tế'],
            ['这种情况', 'trường hợp này']],
    patterns: [['在 + … + 情况下', 'Trong trường hợp nào đó'],
               ['了解 + 情况', 'Tìm hiểu, nắm tình hình']]
  },
  '例如': {
    collo: [['例如……', 'ví dụ như…'], ['例如这个', 'ví dụ như cái này'],
            ['举例如下', 'nêu ví dụ như sau'], ['例如打折活动', 'ví dụ như chương trình giảm giá'],
            ['例如春天', 'ví dụ như mùa xuân']],
    patterns: [['……，例如 + N', '…, ví dụ như …'],
               ['例如 ≈ 比如', '例如 thiên văn viết, 比如 thiên khẩu ngữ']]
  },
  '举办': {
    collo: [['举办活动', 'tổ chức hoạt động'], ['举办比赛', 'tổ chức cuộc thi'],
            ['举办展览', 'tổ chức triển lãm'], ['学校举办', 'trường tổ chức'],
            ['举办各种活动', 'tổ chức đủ loại hoạt động']],
    patterns: [['Sub + 举办 + 活动', 'Ai đứng ra tổ chức hoạt động gì'],
               ['举办 ≈ 举行', '举办 nhấn người đứng ra làm; 举行 nhấn việc diễn ra']]
  },
  '各': {
    collo: [['各方面', 'các phương diện'], ['各种各样', 'đủ mọi loại'],
            ['各位', 'các vị'], ['各个国家', 'các nước'],
            ['各有优点', 'mỗi cái có ưu điểm riêng']],
    patterns: [['各 + N (không có 的)', 'Các, mỗi — 各方面, 各国, 各位'],
               ['各种各样的 + N', 'Đủ mọi loại …']]
  },
  '降低': {
    collo: [['降低价格', 'hạ giá'], ['降低标准', 'hạ tiêu chuẩn'],
            ['价格降低', 'giá hạ xuống'], ['降低要求', 'hạ yêu cầu'],
            ['降低一半', 'giảm một nửa']],
    patterns: [['降低 + 价格 / 标准 / 要求', 'Hạ giá, hạ chuẩn, hạ yêu cầu'],
               ['降低 ↔ 提高', 'Hạ xuống ↔ nâng lên']]
  }
};
