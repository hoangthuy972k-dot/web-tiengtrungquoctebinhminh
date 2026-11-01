// Noi dung TU MOI bai 7 HSK4 (chu de: suc khoe the chat va tinh than).
module.exports = {
  '流血': {
    collo: [['鼻子流血了', 'mũi chảy máu rồi'], ['流了很多血', 'chảy rất nhiều máu'],
            ['伤口流血', 'vết thương chảy máu'], ['不流血了', 'không chảy máu nữa'],
            ['一直流血', 'chảy máu liên tục']],
    patterns: [['bộ phận + 流血 + 了', 'Chỗ nào đó chảy máu'],
               ['流 + 了 + lượng + 血', '流血 là từ ly hợp: 流了很多血 ✓ / 流血了很多 ✗']]
  },
  '擦': {
    collo: [['擦干净', 'lau sạch'], ['擦桌子', 'lau bàn'],
            ['用纸擦擦', 'dùng giấy lau lau'], ['擦窗户', 'lau cửa sổ'],
            ['擦一擦', 'lau qua một cái']],
    patterns: [['把 + N + 擦干净', 'Lau sạch cái gì (câu chữ 把)'],
               ['用 + dụng cụ + 擦', 'Dùng gì để lau']]
  },
  '气候': {
    collo: [['北方的气候', 'khí hậu miền Bắc'], ['不习惯气候', 'không quen khí hậu'],
            ['气候变化', 'biến đổi khí hậu'], ['气候很干', 'khí hậu rất khô'],
            ['适应气候', 'thích nghi khí hậu']],
    patterns: [['nơi chốn + 的气候', 'Khí hậu của nơi nào'],
               ['气候 ≠ 天气', '气候 là khí hậu lâu dài; 天气 là thời tiết hôm nay']]
  },
  '估计': {
    collo: [['估计是', 'đoán chừng là'], ['估计不错', 'đoán khá chuẩn'],
            ['估计他会来', 'đoán anh ấy sẽ đến'], ['估计一下', 'ước lượng một chút'],
            ['我估计', 'tôi đoán rằng']],
    patterns: [['Sub + 估计 + mệnh đề', 'Ai đó đoán rằng …'],
               ['估计 ≈ 可能', '估计 dựa trên căn cứ, 可能 chỉ là khả năng']]
  },
  '咳嗽': {
    collo: [['一直咳嗽', 'ho liên tục'], ['只是咳嗽', 'chỉ là ho thôi'],
            ['咳嗽得厉害', 'ho dữ dội'], ['咳嗽好点儿了', 'ho đỡ hơn rồi'],
            ['不咳嗽了', 'hết ho rồi']],
    patterns: [['Sub + 咳嗽 + 得 + Adj', 'Ai đó ho thế nào'],
               ['咳嗽 + 好点儿了', 'Ho đã đỡ hơn']]
  },
  '严重': {
    collo: [['不严重', 'không nghiêm trọng'], ['很严重', 'rất nghiêm trọng'],
            ['严重的问题', 'vấn đề nghiêm trọng'], ['越来越严重', 'ngày càng nghiêm trọng'],
            ['病得严重', 'ốm nặng']],
    patterns: [['N + 很 / 不 + 严重', 'Việc gì đó rất / không nghiêm trọng'],
               ['严重 dùng cho bệnh, vấn đề, hậu quả — không dùng cho người']]
  },
  '窗户': {
    collo: [['打开窗户', 'mở cửa sổ'], ['关窗户', 'đóng cửa sổ'],
            ['擦窗户', 'lau cửa sổ'], ['窗户开着', 'cửa sổ đang mở'],
            ['开窗户换空气', 'mở cửa sổ cho thoáng']],
    patterns: [['把 + 窗户 + 打开 / 关上', 'Mở / đóng cửa sổ (câu chữ 把)'],
               ['开窗户 + 换换空气', 'Mở cửa sổ cho thoáng khí']]
  },
  '空气': {
    collo: [['空气新鲜', 'không khí trong lành'], ['换换空气', 'thay đổi không khí'],
            ['空气好', 'không khí tốt'], ['空气很干', 'không khí khô'],
            ['新鲜空气', 'không khí tươi mới']],
    patterns: [['空气 + 新鲜 / 好 / 干', 'Không khí trong lành / tốt / khô'],
               ['换换 + 空气', 'Cho thoáng khí — động từ lặp làm nhẹ đi']]
  },
  '抽烟': {
    collo: [['别再抽烟了', 'đừng hút thuốc nữa'], ['抽烟对身体不好', 'hút thuốc hại sức khỏe'],
            ['反对抽烟', 'phản đối hút thuốc'], ['戒烟', 'cai thuốc'],
            ['抽了一根烟', 'hút một điếu thuốc']],
    patterns: [['抽 + 了 + lượng + 烟', '抽烟 là từ ly hợp: 抽了一根烟 ✓'],
               ['抽烟 + 对身体 + 不好', 'Hút thuốc không tốt cho sức khỏe']]
  },
  '动作': {
    collo: [['这个动作', 'động tác này'], ['每个动作', 'từng động tác'],
            ['动作很帅', 'động tác rất ngầu'], ['做动作', 'làm động tác'],
            ['动作很快', 'động tác rất nhanh']],
    patterns: [['做 + 动作', 'Thực hiện động tác'],
               ['动作 + 快 / 慢 / 帅', 'Động tác nhanh / chậm / đẹp']]
  },
  '帅': {
    collo: [['长得帅', 'trông đẹp trai'], ['看上去很帅', 'trông rất ngầu'],
            ['很帅气', 'rất phong độ'], ['帅哥', 'anh đẹp trai'],
            ['动作很帅', 'động tác rất ngầu']],
    patterns: [['长 / 看上去 + 得 + 帅', 'Trông đẹp trai, trông ngầu'],
               ['帅 dùng cho nam; nữ dùng 漂亮 / 美']]
  },
  '出现': {
    collo: [['出现问题', 'nảy sinh vấn đề'], ['出现情况', 'phát sinh tình huống'],
            ['出现在', 'xuất hiện ở'], ['很少出现', 'rất ít khi xuất hiện'],
            ['身体出现问题', 'cơ thể có vấn đề']],
    patterns: [['Sub + 出现 + 问题', 'Cái gì đó nảy sinh vấn đề'],
               ['✗ 出现了他 → ✓ 他出现了', '出现 không mang tân ngữ chỉ người']]
  },
  '后悔': {
    collo: [['别后悔', 'đừng hối hận'], ['让你后悔', 'khiến bạn hối hận'],
            ['后悔就来不及了', 'hối hận thì cũng muộn'], ['很后悔', 'rất hối hận'],
            ['后悔做了', 'hối hận vì đã làm']],
    patterns: [['Sub + 后悔 + V', 'Ai đó hối hận vì đã làm gì'],
               ['等……才后悔，就来不及了', 'Đợi đến khi … mới hối hận thì đã muộn']]
  },
  '来不及': {
    collo: [['来不及了', 'không kịp nữa rồi'], ['来不及做', 'không kịp làm'],
            ['来不及开会', 'không kịp họp'], ['已经来不及', 'đã không kịp'],
            ['后悔来不及', 'hối cũng không kịp']],
    patterns: [['来不及 + V', 'Không kịp làm gì'],
               ['来不及 ↔ 来得及', 'Không kịp ↔ còn kịp']]
  },
  '反对': {
    collo: [['反对我抽烟', 'phản đối tôi hút thuốc'], ['一直反对', 'luôn phản đối'],
            ['反对这个计划', 'phản đối kế hoạch này'], ['表示反对', 'tỏ ý phản đối'],
            ['没人反对', 'không ai phản đối']],
    patterns: [['Sub + 反对 + ai + V', 'Ai phản đối việc ai làm gì'],
               ['反对 ↔ 同意 / 支持', 'Phản đối ↔ đồng ý / ủng hộ']]
  },
  '大夫': {
    collo: [['看大夫', 'đi khám bác sĩ'], ['大夫说', 'bác sĩ nói'],
            ['王大夫', 'bác sĩ Vương'], ['问大夫', 'hỏi bác sĩ'],
            ['大夫告诉我', 'bác sĩ bảo tôi']],
    patterns: [['看 + 大夫', 'Đi khám bác sĩ'],
               ['大夫 ≈ 医生', '大夫 thiên khẩu ngữ, 医生 thiên văn viết']]
  },
  '植物': {
    collo: [['绿色的植物', 'cây xanh'], ['养植物', 'trồng cây'],
            ['多看看植物', 'nhìn cây nhiều hơn'], ['植物很多', 'cây cối rất nhiều'],
            ['给植物浇水', 'tưới nước cho cây']],
    patterns: [['养 + 植物', 'Trồng, chăm cây'],
               ['给 + 植物 + 浇水', 'Tưới nước cho cây']]
  },
  '研究': {
    collo: [['研究发现', 'nghiên cứu phát hiện'], ['做研究', 'làm nghiên cứu'],
            ['研究显示', 'nghiên cứu cho thấy'], ['研究生', 'nghiên cứu sinh'],
            ['研究问题', 'nghiên cứu vấn đề']],
    patterns: [['研究 + 发现 / 显示 + mệnh đề', 'Nghiên cứu cho thấy rằng …'],
               ['研究 + 生', 'Nghiên cứu sinh, học viên cao học']]
  },
  '超过': {
    collo: [['超过一半', 'vượt quá một nửa'], ['超过6小时', 'quá 6 tiếng'],
            ['超过三分之二', 'vượt quá hai phần ba'], ['不超过', 'không vượt quá'],
            ['超过他', 'vượt qua anh ấy']],
    patterns: [['超过 + số lượng', 'Vượt quá bao nhiêu'],
               ['不超过 + số lượng', 'Không quá bao nhiêu']]
  },
  '散步': {
    collo: [['去散散步', 'đi dạo một chút'], ['出去散步', 'ra ngoài đi dạo'],
            ['散步的时候', 'lúc đi dạo'], ['吃完饭散步', 'ăn xong đi dạo'],
            ['散了一会儿步', 'đi dạo một lát']],
    patterns: [['散 + 一会儿 + 步', '散步 là từ ly hợp: 散了一会儿步 ✓'],
               ['散散步', 'Động từ lặp — đi dạo một chút cho thư thái']]
  },
  '指': {
    collo: [['是指', 'là chỉ về'], ['指的是', 'cái được nói đến là'],
            ['还指', 'còn chỉ cả'], ['指这件事', 'nói đến chuyện này'],
            ['不是指', 'không phải chỉ về']],
    patterns: [['A + 是指 + B', 'A ở đây là nói đến B'],
               ['指 (nghĩa "chỉ về") ≠ 指 (chỉ tay)', 'Ở bài này là nghĩa "nói đến"']]
  },
  '精神': {
    collo: [['精神状态', 'trạng thái tinh thần'], ['精神上的健康', 'sức khỏe tinh thần'],
            ['精神愉快', 'tinh thần vui vẻ'], ['没精神', 'không có tinh thần'],
            ['精神好多了', 'tinh thần tốt hơn nhiều']],
    patterns: [['精神 + 上的 + N', 'Về mặt tinh thần'],
               ['有 / 没 + 精神', 'Có tinh thần / uể oải']]
  },
  '教授': {
    collo: [['一位教授', 'một vị giáo sư'], ['王教授', 'giáo sư Vương'],
            ['请教授来', 'mời giáo sư đến'], ['教授说', 'giáo sư nói'],
            ['大学教授', 'giáo sư đại học']],
    patterns: [['một + 位 + 教授', 'Lượng từ 位 dùng cho người đáng kính'],
               ['họ + 教授', 'Cách gọi: Giáo sư Vương…']]
  },
  '数字': {
    collo: [['用数字', 'dùng con số'], ['这个数字', 'con số này'],
            ['数字说明', 'con số cho thấy'], ['写数字', 'viết số'],
            ['一组数字', 'một dãy số']],
    patterns: [['用 + 数字 + 来说明', 'Dùng con số để chứng minh'],
               ['数字 ≠ 号码', '数字 là con số; 号码 là số hiệu (điện thoại, phòng)']]
  },
  '说明': {
    collo: [['说明问题', 'cho thấy vấn đề'], ['说明情况', 'trình bày tình hình'],
            ['用数字来说明', 'dùng số liệu để chứng minh'], ['说明一下', 'giải thích một chút'],
            ['这说明', 'điều này cho thấy']],
    patterns: [['用 + N + 来说明 + mệnh đề', 'Dùng cái gì để chứng minh điều gì'],
               ['这 + 说明 + mệnh đề', 'Điều này cho thấy rằng …']]
  },
  '要是': {
    collo: [['要是……就……', 'nếu… thì…'], ['要是……的话', 'nếu như…'],
            ['要是有时间', 'nếu có thời gian'], ['要是不行', 'nếu không được'],
            ['要是我', 'nếu là tôi']],
    patterns: [['要是 + mệnh đề，就 + mệnh đề', 'Nếu … thì …'],
               ['要是 ≈ 如果', '要是 thiên khẩu ngữ, 如果 trung tính hơn']]
  },
  '既': {
    collo: [['既……又……', 'vừa… vừa…'], ['既……也……', 'vừa… cũng…'],
            ['既……还……', 'vừa… lại còn…'], ['既可以……又可以……', 'vừa có thể… vừa có thể…'],
            ['既好看又便宜', 'vừa đẹp vừa rẻ']],
    patterns: [['既 + A + 又 + B', 'Vừa A vừa B — hai tính chất cùng có'],
               ['✗ 既高又聪明的他 → 既……又…… đứng trước VỊ NGỮ, không làm định ngữ']]
  },
  '减肥': {
    collo: [['可以减肥', 'có thể giảm cân'], ['减肥的目的', 'mục đích giảm cân'],
            ['开始减肥', 'bắt đầu giảm cân'], ['减肥成功', 'giảm cân thành công'],
            ['为了减肥', 'để giảm cân']],
    patterns: [['为了 + 减肥 + V', 'Vì muốn giảm cân mà làm gì'],
               ['减 + 了 + 五公斤 + 肥', '减肥 là từ ly hợp']]
  },
  '辛苦': {
    collo: [['辛苦了', 'vất vả rồi'], ['工作辛苦', 'công việc vất vả'],
            ['很辛苦', 'rất vất vả'], ['不太辛苦', 'không vất vả lắm'],
            ['辛苦一点儿', 'chịu khó một chút']],
    patterns: [['Sub + 很 / 不 + 辛苦', 'Ai đó rất / không vất vả'],
               ['辛苦了！', 'Lời cảm ơn khi ai đó đã bỏ công sức']]
  },
  '肚子': {
    collo: [['肚子疼', 'đau bụng'], ['肚子饿', 'bụng đói'],
            ['肚子吃饱了', 'bụng đã no'], ['摸摸肚子', 'xoa bụng'],
            ['肚子不舒服', 'bụng khó chịu']],
    patterns: [['肚子 + 疼 / 饿 / 饱', 'Đau bụng, đói bụng, no bụng'],
               ['✗ 我疼肚子 → ✓ 我肚子疼', 'Bộ phận cơ thể làm chủ ngữ của vị ngữ tính từ']]
  },
  '感情': {
    collo: [['加深感情', 'làm sâu sắc tình cảm'], ['夫妻感情', 'tình cảm vợ chồng'],
            ['有感情', 'có tình cảm'], ['感情很好', 'tình cảm rất tốt'],
            ['感情上', 'về mặt tình cảm']],
    patterns: [['加深 + 感情', 'Làm tình cảm sâu đậm hơn'],
               ['感情 + 好 / 深', 'Tình cảm tốt / sâu đậm']]
  },
  '烦恼': {
    collo: [['很烦恼', 'rất phiền muộn'], ['没有烦恼', 'không có phiền muộn'],
            ['一天的烦恼', 'nỗi phiền muộn cả ngày'], ['减少烦恼', 'bớt phiền muộn'],
            ['生活中的烦恼', 'phiền muộn trong cuộc sống']],
    patterns: [['Sub + 很 + 烦恼 (tính từ)', 'Ai đó rất phiền lòng'],
               ['减少 + 烦恼 (danh từ)', 'Giảm bớt nỗi phiền muộn']]
  },
  '掉': {
    collo: [['忘掉', 'quên mất'], ['扔掉', 'vứt đi'],
            ['跑掉了', 'chạy mất rồi'], ['卖掉', 'bán đi'],
            ['吃掉', 'ăn hết']],
    patterns: [['V + 掉', 'Bổ ngữ kết quả — làm gì đó cho mất đi, hết đi'],
               ['忘掉 ≈ 忘了', '掉 nhấn mạnh "mất hẳn đi"']]
  }
};
