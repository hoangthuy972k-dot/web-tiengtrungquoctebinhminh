// Noi dung TU MOI bai 5 HSK4 (chu de: mua sam — gia ca, chat luong, quang cao).
module.exports = {
  '家具': {
    collo: [['买家具', 'mua đồ nội thất'], ['家具店', 'cửa hàng nội thất'],
            ['这些家具', 'những món nội thất này'], ['家具的样子', 'kiểu dáng nội thất'],
            ['一套家具', 'một bộ nội thất']],
    patterns: [['买 / 换 + 家具', 'Mua / đổi đồ nội thất'],
               ['一套 + 家具', 'Một bộ nội thất — dùng lượng từ 套']]
  },
  '沙发': {
    collo: [['买沙发', 'mua ghế sô pha'], ['这个沙发', 'chiếc sô pha này'],
            ['沙发的颜色', 'màu của sô pha'], ['坐在沙发上', 'ngồi trên sô pha'],
            ['蓝色的沙发', 'sô pha màu xanh']],
    patterns: [['坐在 + 沙发 + 上', 'Ngồi trên ghế sô pha'],
               ['sắc màu + 的 + 沙发', 'Sô pha màu gì']]
  },
  '打折': {
    collo: [['正在打折', 'đang giảm giá'], ['商场打折', 'trung tâm thương mại giảm giá'],
            ['打七五折', 'giảm 25% (còn 75%)'], ['打折活动', 'chương trình giảm giá'],
            ['不打折', 'không giảm giá']],
    patterns: [['打 + số + 折', 'Giảm còn bao nhiêu phần mười — 打八折 = còn 80%'],
               ['✗ 打折了20% → ✓ 打八折', 'Tiếng Trung nói phần CÒN LẠI, không nói phần giảm']]
  },
  '价格': {
    collo: [['价格合适', 'giá cả phù hợp'], ['价格太高', 'giá quá cao'],
            ['价格还可以', 'giá cũng được'], ['降低价格', 'hạ giá'],
            ['价格和质量', 'giá cả và chất lượng']],
    patterns: [['价格 + 高 / 低 / 合适', 'Giá cao / thấp / phải chăng'],
               ['降低 + 价格', 'Hạ giá xuống']]
  },
  '质量': {
    collo: [['质量好', 'chất lượng tốt'], ['质量不好', 'chất lượng kém'],
            ['质量有保证', 'chất lượng có bảo đảm'], ['保证质量', 'bảo đảm chất lượng'],
            ['质量和价格', 'chất lượng và giá cả']],
    patterns: [['质量 + 好 / 不好', 'Chất lượng tốt / kém'],
               ['质量 + 有保证', 'Chất lượng có bảo đảm — 保证 là từ bài 4']]
  },
  '肯定': {
    collo: [['肯定不会', 'chắc chắn sẽ không'], ['肯定的事', 'chuyện chắc chắn'],
            ['不能肯定', 'không thể khẳng định'], ['肯定不好', 'chắc chắn không tốt'],
            ['回答是肯定的', 'câu trả lời là khẳng định']],
    patterns: [['Sub + 肯定 + V (phó từ)', 'Ai đó chắc chắn sẽ làm gì'],
               ['不能 + 肯定 (động từ)', 'Không dám khẳng định']]
  },
  '流行': {
    collo: [['最流行', 'thịnh hành nhất'], ['流行的样子', 'kiểu dáng thịnh hành'],
            ['越来越流行', 'ngày càng thịnh hành'], ['流行音乐', 'nhạc thịnh hành'],
            ['很流行', 'rất được ưa chuộng']],
    patterns: [['N + 很 / 最 + 流行', 'Cái gì đó rất / thịnh hành nhất'],
               ['越来越 + 流行', 'Ngày càng được ưa chuộng']]
  },
  '顺便': {
    collo: [['顺便买', 'tiện thể mua'], ['顺便看看', 'tiện thể xem thử'],
            ['顺便问一下', 'tiện thể hỏi một chút'], ['顺便带给他', 'tiện thể mang cho anh ấy'],
            ['顺便去超市', 'tiện đường ghé siêu thị']],
    patterns: [['Sub + 顺便 + V', 'Nhân tiện làm gì (việc phụ, đi kèm việc chính)'],
               ['✗ 我顺便去买菜，别的事没做 → 顺便 phải có việc CHÍNH đi trước']]
  },
  '台': {
    collo: [['一台冰箱', 'một cái tủ lạnh'], ['一台电脑', 'một cái máy tính'],
            ['买一台', 'mua một cái'], ['两台空调', 'hai cái máy lạnh'],
            ['这台机器', 'cái máy này']],
    patterns: [['一 + 台 + máy móc', 'Lượng từ cho máy móc, thiết bị'],
               ['✗ 一个冰箱 → ✓ 一台冰箱', 'Đồ điện máy dùng lượng từ 台']]
  },
  '光': {
    collo: [['光买沙发就', 'chỉ riêng mua sô pha đã'], ['光是', 'chỉ riêng'],
            ['光说不做', 'chỉ nói không làm'], ['光……就……', 'chỉ riêng… đã…'],
            ['光看价格', 'chỉ nhìn giá']],
    patterns: [['光 + V + 就 + số lượng', 'Chỉ riêng … đã … (nhấn số lượng lớn)'],
               ['光 ≈ 只', '光 thiên khẩu ngữ hơn 只']]
  },
  '实在': {
    collo: [['实在太旧了', 'thật sự quá cũ'], ['实在不容易', 'quả thực không dễ'],
            ['实在对不起', 'thành thật xin lỗi'], ['实在没办法', 'thật sự không còn cách'],
            ['实在太贵', 'quả thực quá đắt']],
    patterns: [['实在 + Adj / V', 'Quả thực …, thật sự … (nhấn mạnh sự thật)'],
               ['实在 ≠ 实际上', '实在 nhấn mức độ; 实际上 nêu sự thật trái với điều tưởng']]
  },
  '制冷': {
    collo: [['制冷效果', 'hiệu quả làm lạnh'], ['制冷好不好', 'làm lạnh có tốt không'],
            ['制冷很快', 'làm lạnh rất nhanh'], ['空调制冷', 'máy lạnh làm lạnh'],
            ['制冷效果差', 'hiệu quả làm lạnh kém']],
    patterns: [['制冷 + 效果 + 好 / 差', 'Hiệu quả làm lạnh tốt / kém'],
               ['máy + 制冷', 'Tủ lạnh, máy lạnh làm lạnh']]
  },
  '效果': {
    collo: [['效果不错', 'hiệu quả khá tốt'], ['制冷效果', 'hiệu quả làm lạnh'],
            ['广告效果', 'hiệu quả quảng cáo'], ['效果很差', 'hiệu quả rất kém'],
            ['学习效果', 'hiệu quả học tập']],
    patterns: [['N + 的 + 效果 + 好 / 差', 'Hiệu quả của cái gì tốt / kém'],
               ['✗ 效果很多 → ✓ 效果很好', '效果 đi với 好 / 差, không đi với 多 / 少']]
  },
  '现金': {
    collo: [['带现金', 'mang tiền mặt'], ['现金不够', 'không đủ tiền mặt'],
            ['用现金', 'trả bằng tiền mặt'], ['不收现金', 'không nhận tiền mặt'],
            ['付现金', 'trả tiền mặt']],
    patterns: [['用 / 付 + 现金', 'Trả bằng tiền mặt'],
               ['收 / 不收 + 现金', 'Nhận / không nhận tiền mặt']]
  },
  '邀请': {
    collo: [['邀请咱们', 'mời chúng mình'], ['邀请去做客', 'mời đến nhà chơi'],
            ['受到邀请', 'được mời'], ['邀请朋友', 'mời bạn bè'],
            ['邀请别人吃饭', 'mời người khác ăn cơm']],
    patterns: [['邀请 + ai + V', 'Mời ai làm gì'],
               ['受到 + 邀请', 'Được mời — 受到 cũng là từ bài này']]
  },
  '葡萄': {
    collo: [['葡萄酒', 'rượu vang'], ['吃葡萄', 'ăn nho'],
            ['两瓶葡萄酒', 'hai chai rượu vang'], ['葡萄很甜', 'nho rất ngọt'],
            ['一串葡萄', 'một chùm nho']],
    patterns: [['葡萄 + 酒', 'Rượu làm từ nho = rượu vang'],
               ['số + 瓶 + 葡萄酒', 'Mấy chai rượu vang']]
  },
  '艺术': {
    collo: [['很艺术', 'rất nghệ thuật'], ['艺术品', 'tác phẩm nghệ thuật'],
            ['这么艺术', 'nghệ thuật đến vậy'], ['艺术家', 'nghệ sĩ'],
            ['设计得很艺术', 'thiết kế rất nghệ thuật']],
    patterns: [['V + 得 + 很艺术 (tính từ)', 'Làm rất có tính nghệ thuật'],
               ['艺术 + 品 / 家', 'Tác phẩm nghệ thuật / nghệ sĩ']]
  },
  '广告': {
    collo: [['电视上的广告', 'quảng cáo trên tivi'], ['相信广告', 'tin vào quảng cáo'],
            ['广告的影响', 'ảnh hưởng của quảng cáo'], ['看广告', 'xem quảng cáo'],
            ['做广告', 'làm quảng cáo']],
    patterns: [['给 + N + 做广告', 'Làm quảng cáo cho cái gì'],
               ['广告 + 上 + 说', 'Trên quảng cáo nói rằng…']]
  },
  '味道': {
    collo: [['味道不错', 'vị khá ngon'], ['味道很好', 'vị rất ngon'],
            ['味道怎么样', 'mùi vị thế nào'], ['味道太咸', 'vị quá mặn'],
            ['尝尝味道', 'nếm thử mùi vị']],
    patterns: [['N + 的 + 味道 + Adj', 'Mùi vị của cái gì thế nào'],
               ['味道 + 怎么样？', 'Mùi vị ra sao?']]
  },
  '优点': {
    collo: [['介绍优点', 'giới thiệu ưu điểm'], ['有优点', 'có ưu điểm'],
            ['优点和缺点', 'ưu điểm và khuyết điểm'], ['最大的优点', 'ưu điểm lớn nhất'],
            ['优点是……', 'ưu điểm là…']],
    patterns: [['N + 的优点 + 是 + …', 'Ưu điểm của cái gì là …'],
               ['优点 ↔ 缺点', 'Cặp từ trái nghĩa — thường đi cùng nhau']]
  },
  '实际': {
    collo: [['实际上', 'thực tế là'], ['联系实际', 'gắn với thực tế'],
            ['实际工作', 'công việc thực tế'], ['实际情况', 'tình hình thực tế'],
            ['不实际', 'không thực tế']],
    patterns: [['实际上，……', 'Thực tế thì … (trái với điều người ta tưởng)'],
               ['联系 + 实际', 'Gắn liền với thực tế']]
  },
  '考虑': {
    collo: [['认真考虑', 'cân nhắc nghiêm túc'], ['考虑一下', 'cân nhắc một chút'],
            ['只考虑价格', 'chỉ nghĩ đến giá'], ['值得考虑', 'đáng cân nhắc'],
            ['考虑清楚', 'cân nhắc cho rõ']],
    patterns: [['Sub + 考虑 + N / mệnh đề', 'Ai đó cân nhắc điều gì'],
               ['考虑 + 一下 / 清楚', 'Cân nhắc một chút / cho kỹ']]
  },
  '标准': {
    collo: [['买衣服的标准', 'tiêu chuẩn mua quần áo'], ['幸福的标准', 'tiêu chuẩn hạnh phúc'],
            ['符合标准', 'đạt tiêu chuẩn'], ['标准不一样', 'tiêu chuẩn khác nhau'],
            ['降低标准', 'hạ tiêu chuẩn']],
    patterns: [['V + 的 + 标准', 'Tiêu chuẩn để làm gì'],
               ['符合 + 标准', 'Đạt tiêu chuẩn — 符合 là từ bài 3']]
  },
  '样子': {
    collo: [['衣服的样子', 'kiểu dáng quần áo'], ['样子流行', 'kiểu dáng thịnh hành'],
            ['这个样子', 'dáng vẻ thế này'], ['样子好看', 'kiểu dáng đẹp'],
            ['看样子', 'xem chừng, có vẻ']],
    patterns: [['N + 的 + 样子', 'Kiểu dáng, dáng vẻ của cái gì'],
               ['看样子 + mệnh đề', 'Xem chừng … (phán đoán)']]
  },
  '年龄': {
    collo: [['年龄大', 'lớn tuổi'], ['不同年龄', 'độ tuổi khác nhau'],
            ['年龄小', 'ít tuổi'], ['年龄大的人', 'người lớn tuổi'],
            ['同年龄的人', 'người cùng tuổi']],
    patterns: [['年龄 + 大 / 小', 'Tuổi lớn / nhỏ — KHÔNG nói 年龄多 / 少'],
               ['不同 + 年龄 + 的人', 'Người ở các độ tuổi khác nhau']]
  },
  '浪费': {
    collo: [['浪费钱', 'lãng phí tiền'], ['浪费时间', 'lãng phí thời gian'],
            ['是一种浪费', 'là một sự lãng phí'], ['别浪费', 'đừng lãng phí'],
            ['浪费食物', 'lãng phí thức ăn']],
    patterns: [['浪费 + 钱 / 时间', 'Lãng phí tiền bạc, thời gian'],
               ['是一种 + 浪费 (danh từ)', 'Là một sự lãng phí']]
  },
  '购物': {
    collo: [['网上购物', 'mua sắm trên mạng'], ['喜欢购物', 'thích mua sắm'],
            ['购物变得流行', 'mua sắm trở nên thịnh hành'], ['去购物', 'đi mua sắm'],
            ['购物中心', 'trung tâm mua sắm']],
    patterns: [['在网上 + 购物', 'Mua sắm trên mạng'],
               ['购物 ≈ 买东西', '购物 thiên văn viết, 买东西 thiên khẩu ngữ']]
  },
  '尤其': {
    collo: [['尤其喜欢', 'đặc biệt thích'], ['尤其是', 'nhất là'],
            ['尤其是那些', 'nhất là những cái đó'], ['尤其重要', 'đặc biệt quan trọng'],
            ['尤其在夏天', 'nhất là vào mùa hè']],
    patterns: [['……，尤其是 + N', '…, đặc biệt là … (nêu cái nổi bật trong nhóm)'],
               ['✗ 尤其我喜欢 → ✓ 我尤其喜欢', '尤其 đứng sau chủ ngữ']]
  },
  '受到': {
    collo: [['受到欢迎', 'được hoan nghênh'], ['受到影响', 'chịu ảnh hưởng'],
            ['受到喜爱', 'được yêu thích'], ['受到邀请', 'được mời'],
            ['受到表扬', 'được khen']],
    patterns: [['受到 + danh từ hai âm tiết', 'Nhận được, chịu … (mang sắc thái bị động)'],
               ['✗ 受到高兴 → ✓ 受到欢迎', 'Sau 受到 phải là danh từ, không phải tính từ']]
  },
  '任何': {
    collo: [['任何时间', 'bất cứ lúc nào'], ['任何问题', 'bất cứ vấn đề gì'],
            ['任何东西', 'bất cứ thứ gì'], ['任何人', 'bất cứ ai'],
            ['任何地方', 'bất cứ nơi đâu']],
    patterns: [['任何 + N + 都 / 也 + V', 'Bất cứ … cũng …'],
               ['✗ 任何的人 → ✓ 任何人', 'Sau 任何 không dùng 的']]
  },
  '寄': {
    collo: [['寄到办公室', 'gửi đến văn phòng'], ['寄到家里', 'gửi về nhà'],
            ['寄快递', 'gửi chuyển phát nhanh'], ['寄给他', 'gửi cho anh ấy'],
            ['寄信', 'gửi thư']],
    patterns: [['把 + N + 寄到 + nơi chốn', 'Gửi cái gì đến đâu'],
               ['寄给 + ai', 'Gửi cho ai']]
  }
};
