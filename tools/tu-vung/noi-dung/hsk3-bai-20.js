// Noi dung TU MOI HSK3 bai 20 (chu de: cau bi dong, giai quyet van de, quan tam nhau).
module.exports = {
  '照相机': {
    collo: [['一个照相机', 'một cái máy ảnh'], ['买照相机', 'mua máy ảnh'],
            ['用照相机', 'dùng máy ảnh'], ['新照相机', 'máy ảnh mới'],
            ['照相机坏了', 'máy ảnh hỏng rồi']],
    patterns: [['照相 + 机', 'Máy (机) chụp ảnh (照相)'],
               ['N + 坏了', 'Cái gì hỏng rồi — 坏 là từ bài 13']]
  },
  '被': {
    collo: [['被他拿走了', 'bị anh ấy lấy đi'], ['被哥哥用了', 'bị anh trai dùng mất'],
            ['被解决了', 'đã được giải quyết'], ['被妈妈看见了', 'bị mẹ nhìn thấy'],
            ['没被发现', 'chưa bị phát hiện']],
    patterns: [['Sub + 被 + (ai) + V + 了 / 过 / bổ ngữ', 'Câu bị động: động từ phải có thành phần đi kèm'],
               ['✗ 我的书被他拿 → ✓ 我的书被他拿走了', 'Sau 被 không được dừng ở động từ trần']]
  },
  '难过': {
    collo: [['很难过', 'rất buồn'], ['别难过', 'đừng buồn'],
            ['心里难过', 'trong lòng buồn'], ['难过得哭了', 'buồn đến phát khóc'],
            ['难过极了', 'buồn vô cùng']],
    patterns: [['别 + 难过 + 了', 'Đừng buồn nữa — lời an ủi'],
               ['难过 (buồn) ≠ 难 (khó) — 难过 nói về cảm xúc']]
  },
  '东': {
    collo: [['东边', 'phía đông'], ['往东走', 'đi về phía đông'],
            ['东面', 'mặt phía đông'], ['在城市的东边', 'ở phía đông thành phố'],
            ['东南西北', 'đông nam tây bắc']],
    patterns: [['往 + 东 + 走', 'Đi về phía đông — so với 向左走 (bài 18)'],
               ['东 · 南 · 西 · 北 — bốn phương, thêm 边 thành nơi chốn']]
  },
  '信用卡': {
    collo: [['用信用卡', 'dùng thẻ tín dụng'], ['一张信用卡', 'một chiếc thẻ tín dụng'],
            ['信用卡不见了', 'thẻ tín dụng không thấy đâu'], ['办信用卡', 'làm thẻ tín dụng'],
            ['这张信用卡', 'chiếc thẻ này']],
    patterns: [['một + 张 + 信用卡', 'Lượng từ 张 (bài 19) cho vật mặt phẳng'],
               ['信用 + 卡', 'Thẻ (卡) tín dụng (信用)']]
  },
  '关心': {
    collo: [['关心别人', 'quan tâm người khác'], ['关心孩子', 'quan tâm con cái'],
            ['很关心我', 'rất quan tâm tôi'], ['关心健康', 'quan tâm sức khoẻ'],
            ['谢谢你的关心', 'cảm ơn sự quan tâm của bạn']],
    patterns: [['关心 + ai / cái gì', 'Quan tâm ai, quan tâm việc gì'],
               ['关 + 心', 'Đặt lòng (心) mình vào (关) — ghép nghĩa dễ nhớ']]
  },
  '只有……才……': {
    collo: [['只有……才……', 'chỉ có… mới…'], ['只有努力才能成功', 'chỉ có nỗ lực mới thành công'],
            ['只有休息好才有精神', 'chỉ khi nghỉ đủ mới tỉnh táo'],
            ['只有你才能帮我', 'chỉ có bạn mới giúp được tôi'],
            ['只有这样才行', 'chỉ có thế mới được']],
    patterns: [['只有 A，才 B', 'Chỉ khi A thì mới B — A là điều kiện DUY NHẤT'],
               ['只有……才…… (duy nhất) ≠ 只要……就…… (đủ rồi) — so sánh kỹ hai khung']]
  },
  '成绩': {
    collo: [['考试成绩', 'kết quả thi'], ['成绩很好', 'kết quả tốt'],
            ['提高成绩', 'nâng cao thành tích'], ['成绩出来了', 'kết quả có rồi'],
            ['这次的成绩', 'kết quả lần này']],
    patterns: [['提高 + 成绩', 'Nâng cao thành tích — 提高 là từ bài 15'],
               ['成绩 + 出来了', 'Kết quả đã có — 出来 là bổ ngữ xu hướng']]
  },
  '碗': {
    collo: [['洗碗', 'rửa bát'], ['一个碗', 'một cái bát'],
            ['一碗面条', 'một bát mì'], ['把碗洗干净', 'rửa bát cho sạch'],
            ['碗里', 'trong bát']],
    patterns: [['把 + 碗 + 洗干净', 'Rửa bát cho sạch — 干净 là từ bài 14'],
               ['一 + 个 + 碗 (danh từ) / 一 + 碗 + 面条 (lượng từ)']]
  },
  '分': {
    collo: [['分不出来', 'không phân biệt được'], ['分开', 'tách ra'],
            ['分成两种', 'chia thành hai loại'], ['分清楚', 'phân biệt rõ'],
            ['很难分', 'rất khó phân biệt']],
    patterns: [['分 + 不 + 出来', 'Bổ ngữ khả năng phủ định: không phân biệt nổi'],
               ['分 (fēn, phân biệt) ≠ 分 (fēn, phút, điểm) — cùng chữ, nhiều nghĩa']]
  },
  '解决': {
    collo: [['解决问题', 'giải quyết vấn đề'], ['解决办法', 'cách giải quyết'],
            ['很难解决', 'rất khó giải quyết'], ['自己解决', 'tự giải quyết'],
            ['还没解决', 'vẫn chưa giải quyết']],
    patterns: [['解决 + 问题', 'Giải quyết vấn đề — kết hợp cố định'],
               ['想 + 办法 + 解决', 'Nghĩ cách giải quyết — 办法 là từ bài 17']]
  },
  '试': {
    collo: [['试一试', 'thử một chút'], ['试试看', 'thử xem'],
            ['穿着试试', 'mặc thử xem'], ['试着自己做', 'thử tự làm'],
            ['再试一次', 'thử lại một lần']],
    patterns: [['V + 一 + V / VV', 'Dạng lặp động từ: 试一试, 试试 — làm nhẹ đi'],
               ['试着 + V', 'Thử làm gì đó']]
  },
  '真正': {
    collo: [['真正的朋友', 'người bạn thật sự'], ['真正明白', 'thật sự hiểu'],
            ['真正喜欢', 'thật lòng thích'], ['真正的原因', 'nguyên nhân thật sự'],
            ['真正能帮你的人', 'người thật sự giúp được bạn']],
    patterns: [['真正 + 的 + N / 真正 + V', 'Đích thực, thật sự'],
               ['真正 (đích thực) ≠ 真 (rất, quả là) — 真好 ✓ / 真正好 ✗']]
  },
  '多么': {
    collo: [['多么漂亮', 'đẹp biết bao'], ['多么高兴', 'vui biết mấy'],
            ['多么大的雪', 'tuyết lớn biết bao'], ['多么好的机会', 'cơ hội tốt biết bao'],
            ['多么可爱', 'đáng yêu biết bao']],
    patterns: [['多么 + Adj + 啊', 'Câu cảm thán: … biết bao!'],
               ['多么 ≈ 多', 'Khẩu ngữ hay rút thành 多: 多好啊！']]
  }
};
