// Noi dung TU MOI bai 19 HSK4 (chu de: thu tuc, sinh hoat hang ngay, the thao).
module.exports = {
  '学期': {
    collo: [['这个学期', 'học kỳ này'], ['下个学期', 'học kỳ sau'],
            ['新学期', 'học kỳ mới'], ['一个学期', 'một học kỳ'],
            ['学期开始', 'bắt đầu học kỳ']],
    patterns: [['这个 / 下个 + 学期', 'Học kỳ này / học kỳ sau'],
               ['学 + 期', 'Kỳ (期) học (学)']]
  },
  '出生': {
    collo: [['出生年月', 'ngày tháng năm sinh'], ['同一天出生', 'sinh cùng ngày'],
            ['出生地', 'nơi sinh'], ['出生在北京', 'sinh ra ở Bắc Kinh'],
            ['出生于1990年', 'sinh năm 1990']],
    patterns: [['出生 + 在 / 于 + nơi chốn, thời gian', 'Sinh ra ở đâu, năm nào'],
               ['出生 ≠ 生活', '出生 là sự kiện ra đời; 生活 là đời sống']]
  },
  '性别': {
    collo: [['填写性别', 'điền giới tính'], ['姓名、性别', 'họ tên, giới tính'],
            ['不管性别', 'bất kể giới tính'], ['性别不同', 'giới tính khác nhau'],
            ['出生年月、性别', 'ngày sinh, giới tính']],
    patterns: [['姓名、性别、年龄 + 等', 'Các mục trong mẫu đơn — 等 là từ bài 10'],
               ['性 + 别', 'Phân (别) theo giống (性)']]
  },
  '道歉': {
    collo: [['向他道歉', 'xin lỗi anh ấy'], ['不用道歉', 'không cần xin lỗi'],
            ['主动道歉', 'chủ động xin lỗi'], ['道了歉', 'đã xin lỗi'],
            ['应该道歉', 'nên xin lỗi']],
    patterns: [['向 + ai + 道歉', 'Xin lỗi ai — 道歉 là từ ly hợp: 道了歉 ✓'],
               ['道歉 ≈ 抱歉 (bài 14)', '道歉 là hành động; 抱歉 là cảm giác áy náy']]
  },
  '打印': {
    collo: [['打印一份', 'in một bản'], ['重新打印', 'in lại'],
            ['打印材料', 'in tài liệu'], ['打印出来', 'in ra'],
            ['负责打印', 'phụ trách việc in']],
    patterns: [['打印 + 一份 + N', 'In một bản cái gì — 份 là từ bài 4'],
               ['打印 ≠ 复印', '打印 là in từ máy tính; 复印 là photo bản có sẵn']]
  },
  '复印': {
    collo: [['复印一份', 'photo một bản'], ['把护照复印一下', 'photo hộ chiếu'],
            ['复印店', 'tiệm photocopy'], ['复印材料', 'photo hồ sơ'],
            ['复印好了', 'photo xong rồi']],
    patterns: [['把 + N + 复印 + 一下', 'Photo cái gì một bản'],
               ['复 + 印', 'In (印) lại (复)']]
  },
  '饺子': {
    collo: [['包饺子', 'gói sủi cảo'], ['吃饺子', 'ăn sủi cảo'],
            ['羊肉饺子', 'sủi cảo thịt dê'], ['一盘饺子', 'một đĩa sủi cảo'],
            ['饺子很香', 'sủi cảo rất thơm']],
    patterns: [['包 + 饺子', 'Gói sủi cảo — dùng động từ 包'],
               ['loại nhân + 饺子', '羊肉饺子, 白菜饺子 — sủi cảo nhân gì']]
  },
  '刀': {
    collo: [['一把刀', 'một con dao'], ['用刀切肉', 'dùng dao thái thịt'],
            ['刀很快', 'dao rất sắc'], ['小心刀', 'cẩn thận dao'],
            ['刀和叉', 'dao và nĩa']],
    patterns: [['một + 把 + 刀', 'Lượng từ 把 cho vật có cán — cùng kiểu 一把勺子 (bài 12)'],
               ['刀 + 快 / 钝', 'Dao sắc / cùn — 快 ở đây nghĩa "sắc"']]
  },
  '破': {
    collo: [['弄破了', 'làm rách, làm xước'], ['衣服破了', 'áo rách rồi'],
            ['打破杯子', 'làm vỡ cốc'], ['手破了', 'tay bị xước'],
            ['破的地方', 'chỗ rách']],
    patterns: [['把 + N + 弄破 / 打破', 'Làm rách, làm vỡ cái gì — 弄 là từ bài 15'],
               ['破 dùng cho đứt, rách, thủng, vỡ']]
  },
  '脱': {
    collo: [['脱衣服', 'cởi áo'], ['脱鞋', 'cởi giày'],
            ['把衣服脱下来', 'cởi áo ra'], ['脱掉一件', 'cởi bớt một cái'],
            ['脱了外套', 'đã cởi áo khoác']],
    patterns: [['把 + N + 脱下来', 'Cởi cái gì ra'],
               ['脱 ↔ 穿 / 戴', 'Cởi ↔ mặc / đeo']]
  },
  '理发': {
    collo: [['该理发了', 'đến lúc cắt tóc rồi'], ['理发店', 'tiệm cắt tóc'],
            ['理发师', 'thợ cắt tóc'], ['去理发', 'đi cắt tóc'],
            ['理了发', 'đã cắt tóc']],
    patterns: [['理 + 了 + 发', '理发 là từ ly hợp: 理了发 ✓ / 理发了头 ✗'],
               ['理发 + 店 / 师', 'Tiệm cắt tóc, thợ cắt tóc']]
  },
  '包子': {
    collo: [['买包子', 'mua bánh bao'], ['肉包子', 'bánh bao nhân thịt'],
            ['包子很好吃', 'bánh bao rất ngon'], ['一个包子', 'một cái bánh bao'],
            ['包子和饺子', 'bánh bao và sủi cảo']],
    patterns: [['loại nhân + 包子', '肉包子, 菜包子 — bánh bao nhân gì'],
               ['包子 (có vỏ dày, hấp) ≠ 饺子 (vỏ mỏng, luộc)']]
  },
  '零钱': {
    collo: [['带零钱', 'mang tiền lẻ'], ['换点儿零钱', 'đổi ít tiền lẻ'],
            ['十几块零钱', 'hơn chục đồng lẻ'], ['零钱够了', 'tiền lẻ đủ rồi'],
            ['没有零钱', 'không có tiền lẻ']],
    patterns: [['带 / 换 + 零钱', 'Mang / đổi tiền lẻ'],
               ['零钱 ≠ 现金 (bài 5)', '零钱 là tiền lẻ; 现金 là tiền mặt nói chung']]
  },
  '打招呼': {
    collo: [['跟你打招呼', 'chào bạn'], ['打个招呼', 'chào một tiếng'],
            ['和周围的人打招呼', 'chào hỏi những người xung quanh'], ['打了招呼', 'đã chào rồi'],
            ['主动打招呼', 'chủ động chào']],
    patterns: [['跟 / 和 + ai + 打招呼', 'Chào hỏi ai — 打招呼 là từ ly hợp: 打了招呼 ✓'],
               ['打 + 个 + 招呼', 'Chào một tiếng']]
  },
  '戴': {
    collo: [['戴眼镜', 'đeo kính'], ['戴帽子', 'đội mũ'],
            ['忘戴眼镜', 'quên đeo kính'], ['戴手表', 'đeo đồng hồ'],
            ['戴上', 'đeo vào']],
    patterns: [['戴 + 眼镜 / 帽子 / 手表', 'Dùng cho vật đeo trên người'],
               ['✗ 穿眼镜 → ✓ 戴眼镜', '穿 dùng cho quần áo, giày; 戴 cho phụ kiện']]
  },
  '眼镜': {
    collo: [['一副眼镜', 'một cặp kính'], ['戴眼镜', 'đeo kính'],
            ['戴眼镜的人', 'người đeo kính'], ['忘戴眼镜', 'quên đeo kính'],
            ['配眼镜', 'cắt kính']],
    patterns: [['một + 副 + 眼镜', 'Lượng từ 副 cho vật đi thành bộ'],
               ['眼 + 镜', 'Gương (镜) cho mắt (眼) — 镜子 là từ bài 2']]
  },
  '舞蹈': {
    collo: [['学舞蹈', 'học múa'], ['中国舞蹈', 'múa Trung Quốc'],
            ['舞蹈动作', 'động tác múa'], ['舞蹈是一门艺术', 'múa là một môn nghệ thuật'],
            ['跳舞蹈', 'biểu diễn múa']],
    patterns: [['学 + 舞蹈', 'Học múa — 动作 là từ bài 7, 艺术 là từ bài 5'],
               ['舞蹈 (danh từ, môn múa) ≠ 跳舞 (động từ, nhảy múa)']]
  },
  '国籍': {
    collo: [['你的国籍', 'quốc tịch của bạn'], ['不同国籍的人', 'người khác quốc tịch'],
            ['与国籍无关', 'không liên quan đến quốc tịch'], ['填国籍', 'điền quốc tịch'],
            ['改国籍', 'đổi quốc tịch']],
    patterns: [['与 + N + 无关', 'Không liên quan đến cái gì — 无 là từ bài 12'],
               ['国 + 籍', 'Hộ tịch (籍) nước nào (国)']]
  },
  '抬': {
    collo: [['抬起头', 'ngẩng đầu lên'], ['抬胳膊', 'giơ cánh tay'],
            ['一起抬', 'cùng khiêng'], ['抬不起来', 'không giơ nổi'],
            ['抬高一点儿', 'nâng cao chút']],
    patterns: [['抬 + 起 + bộ phận cơ thể', 'Giơ, ngẩng bộ phận nào lên'],
               ['抬 + 不起来', 'Không nhấc nổi — bổ ngữ khả năng']]
  },
  '胳膊': {
    collo: [['两只胳膊', 'hai cánh tay'], ['胳膊很疼', 'cánh tay rất đau'],
            ['抬胳膊', 'giơ cánh tay'], ['胳膊受伤了', 'cánh tay bị thương'],
            ['胳膊和腿', 'tay và chân']],
    patterns: [['胳膊 + 疼', 'Đau cánh tay — như 肚子疼 (bài 7)'],
               ['một + 只 + 胳膊', 'Lượng từ 只 cho bộ phận thành đôi']]
  },
  '转': {
    collo: [['向右转', 'rẽ phải'], ['左转', 'rẽ trái'],
            ['转过身', 'quay người lại'], ['转一下', 'xoay một chút'],
            ['头向右转', 'đầu quay sang phải']],
    patterns: [['向 + hướng + 转', 'Quay, rẽ về phía nào'],
               ['转 (zhuǎn, quay) ≠ 转 (zhuàn, xoay tròn)']]
  },
  '租': {
    collo: [['租房子', 'thuê nhà'], ['租一辆车', 'thuê một chiếc xe'],
            ['租房广告', 'quảng cáo cho thuê nhà'], ['去年租的房子', 'căn nhà thuê năm ngoái'],
            ['房租', 'tiền thuê nhà']],
    patterns: [['租 + N', 'Thuê cái gì — vừa nghĩa thuê vừa nghĩa cho thuê'],
               ['房 + 租', 'Tiền thuê (租) nhà (房)']]
  },
  '吵': {
    collo: [['太吵了', 'ồn quá'], ['非常吵', 'rất ồn'],
            ['吵得睡不着', 'ồn đến mất ngủ'], ['环境很吵', 'môi trường ồn ào'],
            ['别吵', 'đừng ồn']],
    patterns: [['吵 + 得 + kết quả', 'Ồn đến mức nào'],
               ['吵 (ồn) ≠ 吵架 (cãi nhau, bài 1)']]
  },
  '厨房': {
    collo: [['在厨房里', 'trong bếp'], ['厨房很大', 'bếp rất rộng'],
            ['厨房和卫生间', 'bếp và nhà vệ sinh'], ['打扫厨房', 'dọn bếp'],
            ['新厨房', 'bếp mới']],
    patterns: [['在 + 厨房 + 里', 'Trong bếp'],
               ['厨 + 房', 'Phòng (房) nấu ăn (厨)']]
  },
  '房东': {
    collo: [['我的房东', 'chủ nhà của tôi'], ['联系房东', 'liên hệ chủ nhà'],
            ['房东的手机号码', 'số điện thoại chủ nhà'], ['跟房东商量', 'bàn với chủ nhà'],
            ['房东很好', 'chủ nhà rất tốt']],
    patterns: [['房 + 东', 'Chủ (东) nhà (房)'],
               ['联系 + 房东', 'Liên hệ chủ nhà — 联系 là từ bài 2']]
  },
  '占线': {
    collo: [['电话占线', 'điện thoại bận'], ['一直占线', 'cứ bận máy'],
            ['总是占线', 'lúc nào cũng bận'], ['打不通，占线', 'không gọi được, máy bận'],
            ['占线了', 'đang bận máy']],
    patterns: [['电话 + 占线', 'Điện thoại đang bận'],
               ['占 + 线', 'Chiếm (占) đường dây (线)']]
  },
  '功夫': {
    collo: [['中国功夫', 'võ Trung Quốc'], ['练功夫', 'luyện võ'],
            ['功夫很厉害', 'võ rất lợi hại'], ['会功夫', 'biết võ'],
            ['表演功夫', 'biểu diễn võ thuật']],
    patterns: [['中国 + 功夫', 'Võ thuật Trung Hoa — 表演 là từ bài 13'],
               ['功夫 cũng có nghĩa "công sức, thời gian bỏ ra"']]
  },
  '乒乓球': {
    collo: [['打乒乓球', 'chơi bóng bàn'], ['乒乓球桌', 'bàn bóng bàn'],
            ['乒乓球比赛', 'giải bóng bàn'], ['喜欢打乒乓球', 'thích chơi bóng bàn'],
            ['乒乓球和羽毛球', 'bóng bàn và cầu lông']],
    patterns: [['打 + 乒乓球', 'Chơi bóng bàn — môn dùng tay thì dùng 打'],
               ['乒乓 mô phỏng tiếng bóng đập — chữ tượng thanh']]
  },
  '羽毛球': {
    collo: [['打羽毛球', 'chơi cầu lông'], ['羽毛球比赛', 'giải cầu lông'],
            ['羽毛球拍', 'vợt cầu lông'], ['去打羽毛球', 'đi chơi cầu lông'],
            ['羽毛球运动', 'môn cầu lông']],
    patterns: [['打 + 羽毛球', 'Chơi cầu lông'],
               ['羽毛 + 球', 'Quả cầu (球) bằng lông vũ (羽毛) — 毛 là từ bài 17']]
  },
  '场': {
    collo: [['一场比赛', 'một trận đấu'], ['最后一场演出', 'buổi diễn cuối'],
            ['打几场球', 'đánh mấy trận'], ['一场大雪', 'một trận tuyết lớn'],
            ['看了两场电影', 'xem hai suất phim']],
    patterns: [['một + 场 + 比赛 / 演出 / 雨雪', 'Lượng từ 场 cho trận đấu, buổi diễn, cơn mưa'],
               ['场 (chǎng) ≠ 常 (cháng)']]
  },
  '禁止': {
    collo: [['禁止抽烟', 'cấm hút thuốc'], ['禁止停车', 'cấm đỗ xe'],
            ['禁止大声讲话', 'cấm nói to'], ['禁止入内', 'cấm vào'],
            ['被禁止了', 'bị cấm rồi']],
    patterns: [['禁止 + V', 'Cấm làm gì — dùng trên biển báo'],
               ['禁止 ≈ 不允许 (bài 18)', '禁止 mạnh và chính thức hơn']]
  },
  '座位': {
    collo: [['找个座位', 'tìm chỗ ngồi'], ['座位不够', 'không đủ chỗ ngồi'],
            ['离开座位', 'rời chỗ ngồi'], ['安静的座位', 'chỗ ngồi yên tĩnh'],
            ['座位号', 'số ghế']],
    patterns: [['找 + 个 + 座位', 'Tìm một chỗ ngồi'],
               ['座 + 位', 'Chỗ (位) để ngồi (座) — 座 cũng là lượng từ ở bài 18']]
  }
};
