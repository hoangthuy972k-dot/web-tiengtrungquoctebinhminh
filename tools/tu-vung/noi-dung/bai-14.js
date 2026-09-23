// Noi dung TU MOI bai 14 HSK4 (chu de: bao ve moi truong, tiet kiem, song xanh).
module.exports = {
  '出差': {
    collo: [['明天出差', 'mai đi công tác'], ['去北京出差', 'đi Bắc Kinh công tác'],
            ['出差回来', 'đi công tác về'], ['出了三天差', 'đi công tác ba ngày'],
            ['经常出差', 'thường xuyên đi công tác']],
    patterns: [['出 + thời lượng + 差', '出差 là từ ly hợp: 出了三天差 ✓ / 出差了三天 ✗'],
               ['去 + nơi chốn + 出差', 'Đi đâu công tác']]
  },
  '毛巾': {
    collo: [['一条毛巾', 'một cái khăn'], ['带毛巾', 'mang khăn'],
            ['用毛巾擦', 'dùng khăn lau'], ['湿毛巾', 'khăn ướt'],
            ['洗毛巾', 'giặt khăn']],
    patterns: [['một + 条 + 毛巾', 'Lượng từ 条 cho vật dài mềm'],
               ['用 + 毛巾 + 擦', 'Dùng khăn lau — 擦 là từ bài 7']]
  },
  '牙膏': {
    collo: [['一支牙膏', 'một tuýp kem đánh răng'], ['牙膏和牙刷', 'kem và bàn chải'],
            ['牙膏用完了', 'kem đánh răng hết rồi'], ['挤牙膏', 'bóp kem đánh răng'],
            ['买牙膏', 'mua kem đánh răng']],
    patterns: [['một + 支 + 牙膏', 'Lượng từ 支 cho vật dài cứng'],
               ['牙 + 膏', 'Kem (膏) đánh răng (牙)']]
  },
  '重': {
    collo: [['箱子很重', 'vali rất nặng'], ['够重的了', 'nặng ra phết'],
            ['越来越重', 'ngày càng nặng'], ['太重了', 'nặng quá'],
            ['不太重', 'không nặng lắm']],
    patterns: [['N + 很 + 重', 'Cái gì đó rất nặng'],
               ['重 (zhòng, nặng) ≠ 重 (chóng, lặp lại — 重新 bài 2)']]
  },
  '行': {
    collo: [['行，没问题', 'được, không vấn đề gì'], ['这样不行', 'thế thì không được'],
            ['还行', 'cũng tạm'], ['行不行', 'được không'],
            ['不行就换', 'không được thì đổi']],
    patterns: [['行 / 不行', 'Được / không được — trả lời ngắn'],
               ['……就行了', 'Như vậy là được rồi']]
  },
  '省': {
    collo: [['省钱', 'tiết kiệm tiền'], ['省时间', 'tiết kiệm thời gian'],
            ['省力气', 'đỡ tốn sức'], ['省油钱', 'tiết kiệm tiền xăng'],
            ['省了不少', 'tiết kiệm được không ít']],
    patterns: [['省 + 钱 / 时间 / 力气', 'Tiết kiệm tiền, thời gian, sức'],
               ['省 (shěng, tiết kiệm) ≠ 省 (shěng, tỉnh — bài 13)']]
  },
  '污染': {
    collo: [['环境污染', 'ô nhiễm môi trường'], ['污染空气', 'làm ô nhiễm không khí'],
            ['减少污染', 'giảm ô nhiễm'], ['严重的污染', 'ô nhiễm nghiêm trọng'],
            ['水污染', 'ô nhiễm nguồn nước']],
    patterns: [['污染 + N (động từ)', 'Làm ô nhiễm cái gì'],
               ['环境 + 污染 (danh từ)', 'Sự ô nhiễm môi trường']]
  },
  '卫生间': {
    collo: [['打扫卫生间', 'dọn nhà vệ sinh'], ['卫生间很脏', 'nhà vệ sinh rất bẩn'],
            ['去卫生间', 'đi nhà vệ sinh'], ['卫生间在哪儿', 'nhà vệ sinh ở đâu'],
            ['干净的卫生间', 'nhà vệ sinh sạch']],
    patterns: [['打扫 + 卫生间', 'Dọn nhà vệ sinh'],
               ['卫生 + 间', 'Phòng (间) vệ sinh (卫生)']]
  },
  '脏': {
    collo: [['很脏', 'rất bẩn'], ['弄脏了', 'làm bẩn rồi'],
            ['又脏又乱', 'vừa bẩn vừa lộn xộn'], ['脏衣服', 'quần áo bẩn'],
            ['把手弄脏', 'làm bẩn tay']],
    patterns: [['把 + N + 弄脏', 'Làm bẩn cái gì — câu chữ 把'],
               ['脏 ↔ 干净', 'Bẩn ↔ sạch; 乱 là từ bài 4']]
  },
  '抱歉': {
    collo: [['实在抱歉', 'thật sự xin lỗi'], ['真抱歉', 'thành thật xin lỗi'],
            ['很抱歉', 'rất áy náy'], ['感到抱歉', 'cảm thấy áy náy'],
            ['抱歉，我来晚了', 'xin lỗi, tôi đến muộn']],
    patterns: [['实在 / 真 + 抱歉', 'Thật sự xin lỗi — 实在 là từ bài 5'],
               ['抱歉 ≈ 对不起', '抱歉 trang trọng hơn, dùng khi làm phiền người khác']]
  },
  '空': {
    collo: [['空瓶子', 'chai rỗng'], ['空盒子', 'hộp rỗng'],
            ['空房间', 'phòng trống'], ['空着', 'đang để trống'],
            ['空座位', 'chỗ trống']],
    patterns: [['空 + N', 'Cái gì đó rỗng, trống'],
               ['空 (kōng, trống) ≠ 空儿 (kòngr, thời gian rảnh — bài 10)']]
  },
  '盒子': {
    collo: [['一个盒子', 'một cái hộp'], ['打开盒子', 'mở hộp'],
            ['纸盒子', 'hộp giấy'], ['空盒子', 'hộp rỗng'],
            ['放进盒子里', 'cho vào hộp']],
    patterns: [['打开 + 盒子', 'Mở hộp'],
               ['一 + 盒 + N', '盒 cũng làm lượng từ: 一盒巧克力 (bài 8)']]
  },
  '扔': {
    collo: [['扔掉', 'vứt đi'], ['乱扔垃圾', 'vứt rác bừa bãi'],
            ['把……扔掉', 'vứt cái gì đi'], ['别乱扔', 'đừng vứt bừa'],
            ['扔进垃圾桶', 'ném vào thùng rác']],
    patterns: [['把 + N + 扔掉', 'Vứt cái gì đi — 掉 là từ bài 7'],
               ['乱 + V', 'Làm gì một cách bừa bãi: 乱扔, 乱放']]
  },
  '以': {
    collo: [['以最快的速度', 'với tốc độ nhanh nhất'], ['以严格的标准', 'với tiêu chuẩn nghiêm khắc'],
            ['以……为镜子', 'lấy… làm gương'], ['以胖为美', 'lấy béo làm đẹp'],
            ['以这种方法', 'bằng cách này']],
    patterns: [['以 + N + V', 'Bằng, với cái gì mà làm gì'],
               ['以 A 为 B', 'Lấy A làm B — 以瘦为美 (bài 13)']]
  },
  '速度': {
    collo: [['速度很快', 'tốc độ rất nhanh'], ['以最快的速度', 'với tốc độ nhanh nhất'],
            ['火车的速度', 'tốc độ tàu hoả'], ['提高速度', 'nâng tốc độ'],
            ['速度慢', 'tốc độ chậm']],
    patterns: [['以 + … + 的速度 + V', 'Làm gì với tốc độ thế nào'],
               ['速度 + 快 / 慢', 'Tốc độ nhanh / chậm — không nói 速度高']]
  },
  '地球': {
    collo: [['保护地球', 'bảo vệ Trái đất'], ['地球环境', 'môi trường Trái đất'],
            ['美丽的地球', 'Trái đất tươi đẹp'], ['地球变暖', 'Trái đất nóng lên'],
            ['地球一小时', 'Giờ Trái đất']],
    patterns: [['保护 + 地球', 'Bảo vệ Trái đất — 保护 là từ bài 12'],
               ['地 + 球', 'Quả cầu (球) đất (地)']]
  },
  '既然': {
    collo: [['既然这样，就……', 'đã vậy thì…'], ['既然……那么……', 'đã… thì…'],
            ['既然来了', 'đã đến rồi'], ['既然不愿意', 'đã không muốn'],
            ['既然明天有空', 'đã mai rảnh']],
    patterns: [['既然 + sự thật đã biết，就 / 那么 + kết luận', 'Đã … thì …'],
               ['既然 ≠ 因为', '既然 nêu điều CẢ HAI ĐÃ BIẾT; 因为 nêu nguyên nhân mới']]
  },
  '停': {
    collo: [['停车', 'đỗ xe'], ['关灯停电', 'tắt đèn cắt điện'],
            ['不停地变化', 'thay đổi không ngừng'], ['停下来', 'dừng lại'],
            ['雨停了', 'mưa tạnh rồi']],
    patterns: [['把 + 车 + 停到 + nơi chốn', 'Đỗ xe vào đâu'],
               ['不停地 + V', 'Làm gì không ngừng']]
  },
  '得意': {
    collo: [['得意的样子', 'vẻ đắc chí'], ['别太得意', 'đừng đắc ý quá'],
            ['很得意', 'rất hể hả'], ['得意地笑', 'cười đắc ý'],
            ['因成功而得意', 'đắc chí vì thành công']],
    patterns: [['得意的 + 样子', 'Dáng vẻ đắc chí — 样子 là từ bài 5'],
               ['得意 ≠ 满意', '得意 là tự mãn về mình; 满意 là hài lòng với cái gì']]
  },
  '目的': {
    collo: [['达到目的', 'đạt mục đích'], ['活动的目的', 'mục đích hoạt động'],
            ['目的很简单', 'mục đích rất đơn giản'], ['为了这个目的', 'vì mục đích này'],
            ['学习的目的', 'mục đích học tập']],
    patterns: [['达到 + 目的', 'Đạt được mục đích — 达到 là từ bài 12'],
               ['N + 的目的 + 是 + …', 'Mục đích của cái gì là …']]
  },
  '暖': {
    collo: [['天气变暖', 'thời tiết ấm lên'], ['气候变暖', 'khí hậu ấm lên'],
            ['暖和', 'ấm áp'], ['暖一点儿', 'ấm hơn chút'],
            ['房间很暖', 'phòng rất ấm']],
    patterns: [['变 + 暖', 'Ấm dần lên — 气候 là từ bài 7'],
               ['暖 ↔ 冷', 'Ấm ↔ lạnh']]
  },
  '塑料袋': {
    collo: [['免费塑料袋', 'túi nilông miễn phí'], ['使用塑料袋', 'dùng túi nilông'],
            ['拒绝使用塑料袋', 'từ chối dùng túi nilông'], ['一个塑料袋', 'một cái túi nilông'],
            ['少用塑料袋', 'dùng ít túi nilông']],
    patterns: [['塑料 + 袋', 'Túi (袋) bằng nhựa (塑料) — cùng kiểu 纸袋 bài 13'],
               ['拒绝 / 减少 + 使用 + 塑料袋', 'Từ chối / giảm dùng túi nilông']]
  },
  '于是': {
    collo: [['于是就', 'thế là liền'], ['于是，……', 'thế là,…'],
            ['于是有了', 'thế là có được'], ['于是大家', 'thế là mọi người'],
            ['于是决定', 'thế là quyết định']],
    patterns: [['mệnh đề 1，于是 + mệnh đề 2', '…, thế là … (việc sau nối tiếp việc trước)'],
               ['于是 ≠ 所以', '于是 nêu diễn biến tiếp theo; 所以 nêu kết quả do nguyên nhân']]
  },
  '鼓励': {
    collo: [['鼓励孩子', 'động viên con'], ['鼓励大家', 'khuyến khích mọi người'],
            ['老师的鼓励', 'sự động viên của thầy'], ['鼓励他努力', 'khích lệ anh ấy cố gắng'],
            ['受到鼓励', 'được động viên']],
    patterns: [['鼓励 + ai + V', 'Khuyến khích ai làm gì'],
               ['鼓励 ↔ 批评', 'Động viên ↔ phê bình']]
  },
  '拒绝': {
    collo: [['拒绝使用', 'từ chối sử dụng'], ['拒绝别人', 'từ chối người khác'],
            ['被拒绝了', 'bị từ chối'], ['不好意思拒绝', 'ngại từ chối'],
            ['拒绝要求', 'từ chối yêu cầu']],
    patterns: [['拒绝 + V / N', 'Từ chối làm gì, từ chối cái gì'],
               ['被 + 拒绝', 'Bị từ chối — câu bị động']]
  },
  '减少': {
    collo: [['减少污染', 'giảm ô nhiễm'], ['减少数量', 'giảm số lượng'],
            ['减少压力', 'giảm áp lực'], ['减少烦恼', 'bớt phiền muộn'],
            ['大大减少', 'giảm mạnh']],
    patterns: [['减少 + N', 'Giảm bớt cái gì'],
               ['减少 ↔ 增加 (bài 11)', 'Giảm ↔ tăng']]
  },
  '数量': {
    collo: [['使用数量', 'số lượng sử dụng'], ['数量不多', 'số lượng không nhiều'],
            ['增加数量', 'tăng số lượng'], ['减少数量', 'giảm số lượng'],
            ['数量和质量', 'số lượng và chất lượng']],
    patterns: [['数量 + 多 / 少', 'Số lượng nhiều / ít'],
               ['数量 ↔ 质量 (bài 5)', 'Số lượng ↔ chất lượng']]
  },
  '温度': {
    collo: [['空调的温度', 'nhiệt độ điều hoà'], ['温度很低', 'nhiệt độ rất thấp'],
            ['温度上升', 'nhiệt độ tăng'], ['温度开高一些', 'để nhiệt độ cao hơn'],
            ['今天的温度', 'nhiệt độ hôm nay']],
    patterns: [['温度 + 高 / 低', 'Nhiệt độ cao / thấp — 低 là từ bài 10'],
               ['把 + 温度 + 开高 / 调低', 'Chỉnh nhiệt độ lên / xuống']]
  },
  '乘坐': {
    collo: [['乘坐地铁', 'đi tàu điện ngầm'], ['乘坐飞机', 'đi máy bay'],
            ['乘坐火车', 'đi tàu hoả'], ['乘坐公共汽车', 'đi xe buýt'],
            ['欢迎乘坐', 'hoan nghênh quý khách']],
    patterns: [['乘坐 + phương tiện', 'Đi bằng phương tiện gì'],
               ['乘坐 ≈ 坐', '乘坐 trang trọng, dùng trong thông báo, biển báo']]
  },
  '丢': {
    collo: [['钥匙丢了', 'mất chìa khoá'], ['丢进垃圾桶', 'ném vào thùng rác'],
            ['别丢了', 'đừng làm mất'], ['丢东西', 'mất đồ'],
            ['把垃圾丢掉', 'vứt rác đi']],
    patterns: [['N + 丢了', 'Cái gì đó bị mất'],
               ['丢 vừa là "vứt" vừa là "mất" — phân biệt theo ngữ cảnh']]
  },
  '垃圾桶': {
    collo: [['丢进垃圾桶', 'bỏ vào thùng rác'], ['垃圾桶满了', 'thùng rác đầy rồi'],
            ['找垃圾桶', 'tìm thùng rác'], ['倒垃圾', 'đổ rác'],
            ['垃圾桶在门口', 'thùng rác ở cửa']],
    patterns: [['把 + 垃圾 + 丢进 + 垃圾桶', 'Bỏ rác vào thùng rác'],
               ['垃圾 + 桶', 'Thùng (桶) rác (垃圾)']]
  },
  '美丽': {
    collo: [['美丽的地球', 'Trái đất tươi đẹp'], ['美丽的风景', 'phong cảnh đẹp'],
            ['变得更美丽', 'trở nên đẹp hơn'], ['美丽的城市', 'thành phố xinh đẹp'],
            ['又年轻又美丽', 'vừa trẻ vừa đẹp']],
    patterns: [['美丽的 + N', '… tươi đẹp'],
               ['美丽 ≈ 漂亮', '美丽 trang trọng, dùng cho phong cảnh, thiên nhiên']]
  }
};
