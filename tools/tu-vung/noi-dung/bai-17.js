// Noi dung TU MOI bai 17 HSK4 (chu de: thien nhien, dong vat, rung va bien).
module.exports = {
  '凉快': {
    collo: [['凉快多了', 'mát hơn nhiều'], ['越来越凉快', 'ngày càng mát'],
            ['这儿很凉快', 'ở đây rất mát'], ['凉快一下', 'hóng mát một chút'],
            ['凉快的地方', 'chỗ mát mẻ']],
    patterns: [['Adj + 多了', 'Mát hơn nhiều — so sánh có mức độ'],
               ['凉快 ↔ 热', 'Mát mẻ ↔ nóng; 暖和 là ấm áp']]
  },
  '热闹': {
    collo: [['特别热闹', 'cực kỳ náo nhiệt'], ['热闹极了', 'náo nhiệt vô cùng'],
            ['不喜欢热闹', 'không thích ồn ào'], ['很热闹的地方', 'nơi nhộn nhịp'],
            ['热闹起来', 'nhộn nhịp hẳn lên']],
    patterns: [['Adj + 极了', 'Cực kỳ … — mức độ cao nhất'],
               ['热闹 ≠ 吵', '热闹 mang nghĩa tích cực, vui vẻ đông người']]
  },
  '云': {
    collo: [['天上的云', 'mây trên trời'], ['一朵白云', 'một đám mây trắng'],
            ['云越来越厚', 'mây ngày càng dày'], ['乌云', 'mây đen'],
            ['云很多', 'nhiều mây']],
    patterns: [['một + 朵 + 云', 'Lượng từ 朵 cho mây và hoa'],
               ['云 + 厚 / 多', 'Mây dày / nhiều — 厚 là từ bài 13']]
  },
  '广播': {
    collo: [['听广播', 'nghe đài'], ['广播里说', 'trên đài nói'],
            ['学校广播', 'loa phát thanh của trường'], ['广播节目', 'chương trình phát thanh'],
            ['刚才听广播说', 'vừa nghe đài nói']],
    patterns: [['听 + 广播', 'Nghe đài phát thanh'],
               ['广播里 + 说 + mệnh đề', 'Trên đài nói rằng…']]
  },
  '照': {
    collo: [['照照片', 'chụp ảnh'], ['多照点儿', 'chụp thêm chút'],
            ['给它们照照片', 'chụp ảnh cho chúng'], ['照镜子', 'soi gương'],
            ['灯光照到', 'ánh đèn chiếu tới']],
    patterns: [['给 + ai / cái gì + 照照片', 'Chụp ảnh cho ai'],
               ['照 vừa là "chụp" vừa là "chiếu, soi" — 照镜子 là từ bài 2']]
  },
  '倒': {
    collo: [['倒是一个好主意', 'lại là ý hay đấy'], ['倒比骑车还慢', 'lại còn chậm hơn đạp xe'],
            ['倒杯水', 'rót cốc nước'], ['倒垃圾', 'đổ rác'],
            ['你说得倒容易', 'anh nói thì dễ']],
    patterns: [['Sub + 倒 + V / Adj (dào)', 'Lại … — trái với điều người ta tưởng'],
               ['倒 (dào, lại) ≠ 倒 (dào, rót, đổ) — cùng âm, khác nghĩa']]
  },
  '毛': {
    collo: [['毛很漂亮', 'lông rất đẹp'], ['狗毛', 'lông chó'],
            ['皮毛', 'da lông'], ['白色的毛', 'lông trắng'],
            ['毛衣', 'áo len']],
    patterns: [['动物 + 的 + 毛', 'Lông của con vật nào'],
               ['毛 + 衣', 'Áo (衣) làm bằng lông (毛) = áo len']]
  },
  '抱': {
    collo: [['抱一抱它', 'ôm nó một cái'], ['抱着孩子', 'bế đứa bé'],
            ['紧紧地抱住', 'ôm chặt lấy'], ['抱在一起', 'ôm lấy nhau'],
            ['抱起来', 'bế lên']],
    patterns: [['抱 + 着 + ai', 'Đang bế, đang ôm ai'],
               ['抱一抱', 'Ôm một cái — động từ lặp làm nhẹ đi']]
  },
  '干': {
    collo: [['好好儿干', 'làm cho tốt'], ['干工作', 'làm việc'],
            ['干什么', 'làm gì'], ['干得不错', 'làm khá tốt'],
            ['让它干什么', 'bắt nó làm gì']],
    patterns: [['干 (gàn, làm) ≠ 干 (gān, khô)'],
               ['干 ≈ 做', '干 thiên khẩu ngữ, dùng cho việc chân tay']]
  },
  '严格': {
    collo: [['严格要求自己', 'nghiêm khắc với bản thân'], ['老师很严格', 'thầy rất nghiêm'],
            ['严格按照要求', 'nghiêm ngặt theo yêu cầu'], ['严格的标准', 'tiêu chuẩn nghiêm ngặt'],
            ['对他很严格', 'rất nghiêm với anh ấy']],
    patterns: [['对 + ai + 严格', 'Nghiêm khắc với ai'],
               ['严格 + 要求 + ai', 'Yêu cầu ai một cách nghiêm khắc']]
  },
  '难受': {
    collo: [['心里难受', 'trong lòng khó chịu'], ['有些难受', 'hơi khó chịu'],
            ['难受得吃不下饭', 'khó chịu đến không ăn nổi'], ['很难受', 'rất khó chịu'],
            ['坐久了难受', 'ngồi lâu thấy mỏi']],
    patterns: [['难受 + 得 + kết quả', 'Khó chịu đến mức nào'],
               ['难受 ≠ 难过', '难受 thiên về thân thể; 难过 thiên về tâm trạng']]
  },
  '趟': {
    collo: [['去一趟', 'đi một chuyến'], ['回一趟家', 'về nhà một chuyến'],
            ['出趟差', 'đi công tác một chuyến'], ['去了趟北京', 'đi Bắc Kinh một chuyến'],
            ['跑了三趟', 'chạy ba chuyến']],
    patterns: [['V + 一趟 + nơi chốn', 'Đi đâu một chuyến'],
               ['趟 ≠ 次', '趟 dùng cho việc ĐI LẠI; 次 đếm mọi hành động']]
  },
  '放暑假': {
    collo: [['放暑假', 'nghỉ hè'], ['去年放暑假的时候', 'hồi nghỉ hè năm ngoái'],
            ['马上就要放暑假了', 'sắp nghỉ hè rồi'], ['放暑假回家', 'nghỉ hè về nhà'],
            ['暑假作业', 'bài tập hè']],
    patterns: [['放 + 暑假 / 寒假 (bài 15)', 'Nghỉ hè / nghỉ đông'],
               ['马上就要……了', 'Sắp … rồi — 快要……了 cùng nghĩa']]
  },
  '老虎': {
    collo: [['一只老虎', 'một con hổ'], ['老虎和熊猫', 'hổ và gấu trúc'],
            ['动物园里的老虎', 'hổ trong sở thú'], ['怕老虎', 'sợ hổ'],
            ['老虎很厉害', 'hổ rất lợi hại']],
    patterns: [['một + 只 + 老虎', 'Lượng từ 只 cho con vật'],
               ['老虎 + 厉害 (bài 11)', 'Hổ lợi hại']]
  },
  '入口': {
    collo: [['在入口等', 'đợi ở cổng vào'], ['入口处', 'khu vực cổng vào'],
            ['找到入口', 'tìm thấy lối vào'], ['博物馆的入口', 'cổng vào bảo tàng'],
            ['入口排队', 'xếp hàng ở cổng vào']],
    patterns: [['入口 ↔ 出口', 'Lối vào ↔ lối ra'],
               ['在 + 入口 + 见面', 'Gặp nhau ở cổng vào']]
  },
  '排队': {
    collo: [['排队买票', 'xếp hàng mua vé'], ['排队的人很多', 'nhiều người xếp hàng'],
            ['排很长的队', 'xếp hàng rất dài'], ['排了半小时队', 'xếp hàng nửa tiếng'],
            ['不用排队', 'không phải xếp hàng']],
    patterns: [['排 + 了 + thời lượng + 队', '排队 là từ ly hợp: 排了半小时队 ✓'],
               ['排队 + V', 'Xếp hàng để làm gì']]
  },
  '活泼': {
    collo: [['性格活泼', 'tính cách hoạt bát'], ['活泼可爱', 'hoạt bát đáng yêu'],
            ['变得特别活泼', 'trở nên rất lanh lợi'], ['活泼的孩子', 'đứa trẻ hiếu động'],
            ['不太活泼', 'không lanh lợi lắm']],
    patterns: [['性格 + 活泼', 'Tính cách hoạt bát — 性格 là từ bài 1'],
               ['活泼 ↔ 害羞 (bài 15)', 'Hoạt bát ↔ rụt rè']]
  },
  '社会': {
    collo: [['社会的发展', 'sự phát triển xã hội'], ['进入社会', 'bước vào xã hội'],
            ['社会上的人', 'người trong xã hội'], ['社会问题', 'vấn đề xã hội'],
            ['适应社会', 'thích nghi với xã hội']],
    patterns: [['随着 + 社会 + 的发展', 'Cùng với sự phát triển xã hội — 随着 là từ bài 13'],
               ['进入 + 社会', 'Bước vào đời']]
  },
  '竞争': {
    collo: [['竞争很激烈', 'cạnh tranh gay gắt'], ['人与人之间有竞争', 'người với người có cạnh tranh'],
            ['为……而竞争', 'cạnh tranh vì cái gì'], ['市场竞争', 'cạnh tranh thị trường'],
            ['参加竞争', 'tham gia cạnh tranh']],
    patterns: [['为了 + N + 而 + 竞争', 'Cạnh tranh vì cái gì'],
               ['A 与 B 之间的竞争', 'Sự cạnh tranh giữa A và B — 之 là từ bài 11']]
  },
  '森林': {
    collo: [['保护森林', 'bảo vệ rừng'], ['森林里的植物', 'cây cối trong rừng'],
            ['一片森林', 'một khu rừng'], ['在森林里迷路', 'lạc trong rừng'],
            ['没有森林', 'không có rừng']],
    patterns: [['一 + 片 + 森林', 'Lượng từ 片 cho vùng rộng'],
               ['保护 + 森林', 'Bảo vệ rừng — 保护 là từ bài 12']]
  },
  '剩': {
    collo: [['剩下的', 'phần còn lại'], ['就剩十几页了', 'chỉ còn hơn chục trang'],
            ['剩了很多', 'thừa rất nhiều'], ['没剩多少', 'chẳng còn bao nhiêu'],
            ['把剩的菜带走', 'mang đồ ăn thừa về']],
    patterns: [['就 + 剩 + số lượng + 了', 'Chỉ còn lại bấy nhiêu'],
               ['剩 + 下', 'Còn lại — 下 là bổ ngữ xu hướng']]
  },
  '暖和': {
    collo: [['非常暖和', 'rất ấm áp'], ['越来越暖和', 'ngày càng ấm'],
            ['暖和的地方', 'nơi ấm áp'], ['天气暖和了', 'trời ấm lên rồi'],
            ['屋里很暖和', 'trong nhà rất ấm']],
    patterns: [['暖和 ↔ 凉快 / 冷', 'Ấm áp ↔ mát mẻ, lạnh'],
               ['暖 (bài 14) là gốc, 暖和 là dạng hai âm tiết hay dùng']]
  },
  '海洋': {
    collo: [['蓝色的海洋', 'đại dương xanh'], ['海洋底部', 'đáy đại dương'],
            ['保护海洋', 'bảo vệ biển'], ['海洋生物', 'sinh vật biển'],
            ['海洋跟生活', 'biển và cuộc sống']],
    patterns: [['海洋 ≈ 海', '海洋 trang trọng, dùng trong văn viết khoa học'],
               ['海洋 + 底部', 'Đáy đại dương']]
  },
  '底': {
    collo: [['海底', 'đáy biển'], ['桌子底下', 'dưới gầm bàn'],
            ['海洋底部', 'đáy đại dương'], ['沙发底下', 'dưới gầm sô pha'],
            ['月底', 'cuối tháng']],
    patterns: [['N + 底下', 'Phía dưới cái gì'],
             ['月 / 年 + 底', 'Cuối tháng, cuối năm']]
  },
  '美人鱼': {
    collo: [['美人鱼的故事', 'câu chuyện nàng tiên cá'], ['听过美人鱼', 'từng nghe nàng tiên cá'],
            ['像美人鱼一样', 'giống như nàng tiên cá'], ['《美人鱼》', 'truyện "Nàng tiên cá"'],
            ['海里的美人鱼', 'nàng tiên cá dưới biển']],
    patterns: [['美人 + 鱼', 'Cá (鱼) người đẹp (美人)'],
               ['像 + N + 一样', 'Giống như … — khung so sánh của bài 2']]
  },
  '公里': {
    collo: [['五公里', 'năm ki-lô-mét'], ['离学校两公里', 'cách trường hai cây số'],
            ['每小时120公里', '120 km một giờ'], ['几公里深', 'sâu mấy cây số'],
            ['走了十公里', 'đi bộ mười cây']],
    patterns: [['离 + nơi chốn + số + 公里', 'Cách nơi nào bao nhiêu km'],
               ['公里 (km) / 米 (m) / 厘米 (cm)']]
  },
  '仍然': {
    collo: [['仍然能看到', 'vẫn nhìn thấy được'], ['仍然是0比0', 'vẫn là 0-0'],
            ['仍然有很多', 'vẫn còn rất nhiều'], ['仍然不明白', 'vẫn không hiểu'],
            ['仍然没有变', 'vẫn chưa đổi']],
    patterns: [['Sub + 仍然 + V', 'Ai đó vẫn …'],
               ['仍然 ≈ 还是', '仍然 thiên văn viết hơn 还是']]
  },
  '排列': {
    collo: [['按顺序排列', 'xếp theo thứ tự'], ['排列整齐', 'xếp ngay ngắn'],
            ['排列起来', 'xếp thành hàng'], ['像灯一样排列', 'xếp như những ngọn đèn'],
            ['重新排列', 'xếp lại']],
    patterns: [['按照 + 顺序 + 排列', 'Xếp theo thứ tự — 顺序 là từ bài 11'],
               ['排列 ≠ 排队', '排列 là xếp đồ vật; 排队 là người xếp hàng']]
  },
  '梦': {
    collo: [['做了一个梦', 'nằm mơ một giấc'], ['像在梦里一样', 'như trong mơ'],
            ['做梦', 'nằm mơ'], ['美好的梦', 'giấc mơ đẹp'],
            ['有梦的人', 'người có ước mơ']],
    patterns: [['做 + 梦', 'Nằm mơ — dùng động từ 做'],
               ['梦 vừa là "giấc mơ" khi ngủ, vừa là "ước mơ"']]
  }
};
