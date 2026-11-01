// Noi dung TU MOI bai 11 HSK4 (chu de: hoc tieng Trung, doc sach, thoi quen doc).
module.exports = {
  '流利': {
    collo: [['说得流利', 'nói lưu loát'], ['汉语流利', 'tiếng Trung lưu loát'],
            ['读得很流利', 'đọc rất trôi chảy'], ['不太流利', 'chưa lưu loát lắm'],
            ['流利地回答', 'trả lời trôi chảy']],
    patterns: [['V + 得 + 流利', 'Nói, đọc trôi chảy thế nào'],
               ['流利 dùng cho NÓI / ĐỌC, không dùng cho viết']]
  },
  '厉害': {
    collo: [['真厉害', 'giỏi thật'], ['疼得厉害', 'đau dữ dội'],
            ['厉害的人', 'người lợi hại'], ['咳嗽得厉害', 'ho dữ dội'],
            ['最厉害', 'lợi hại nhất']],
    patterns: [['Sub + 真 + 厉害 (khen)', 'Khen ai đó giỏi'],
               ['V + 得 + 厉害 (mức độ)', 'Đau, ho… đến mức dữ dội']]
  },
  '语法': {
    collo: [['学习语法', 'học ngữ pháp'], ['语法不太好', 'ngữ pháp chưa tốt'],
            ['语法知识', 'kiến thức ngữ pháp'], ['语法错误', 'lỗi ngữ pháp'],
            ['注意语法', 'chú ý ngữ pháp']],
    patterns: [['语法 + 好 / 不好', 'Ngữ pháp tốt / chưa tốt'],
               ['语法 + 知识 / 错误', 'Kiến thức / lỗi ngữ pháp']]
  },
  '准确': {
    collo: [['说得准确', 'nói chính xác'], ['准确的答案', 'đáp án chính xác'],
            ['消息准确', 'tin chính xác'], ['不太准确', 'chưa chuẩn lắm'],
            ['准确地表示', 'diễn đạt chính xác']],
    patterns: [['V + 得 + 准确', 'Làm gì một cách chính xác'],
               ['准确 ≠ 正确', '准确 là khớp chuẩn, sát; 正确 (bài 9) là đúng / sai']]
  },
  '词语': {
    collo: [['新词语', 'từ ngữ mới'], ['简单的词语', 'từ ngữ đơn giản'],
            ['学到新词语', 'học được từ mới'], ['词语增加了', 'vốn từ tăng lên'],
            ['常用词语', 'từ ngữ thường dùng']],
    patterns: [['学 / 记 + 词语', 'Học, nhớ từ ngữ'],
               ['词语 ≈ 生词', '词语 là từ ngữ nói chung; 生词 là từ mới của bài']]
  },
  '连': {
    collo: [['连……都……', 'ngay cả… cũng…'], ['连……也……', 'đến cả… cũng…'],
            ['连我都不知道', 'ngay cả tôi cũng không biết'], ['连报纸都看得懂', 'báo cũng đọc hiểu được'],
            ['连一个字都没写', 'một chữ cũng chưa viết']],
    patterns: [['连 + N + 都 / 也 + V', 'Ngay cả … cũng … (nhấn mức bất ngờ)'],
               ['✗ 连他来了 → ✓ 连他都来了', '连 bắt buộc có 都 / 也 ở vế sau']]
  },
  '阅读': {
    collo: [['坚持阅读', 'kiên trì đọc sách'], ['阅读考试', 'bài thi đọc hiểu'],
            ['阅读能力', 'năng lực đọc'], ['阅读习惯', 'thói quen đọc'],
            ['大量阅读', 'đọc nhiều']],
    patterns: [['坚持 + 阅读', 'Kiên trì đọc — 坚持 là từ bài 9'],
               ['阅读 ≈ 看书', '阅读 trang trọng, dùng cho sách báo và bài thi']]
  },
  '来得及': {
    collo: [['还来得及', 'vẫn còn kịp'], ['来得及吧', 'kịp chứ'],
            ['来不及做', 'làm không kịp'], ['时间来不及', 'thời gian không kịp'],
            ['来得及准备', 'kịp chuẩn bị']],
    patterns: [['来得及 + V', 'Còn kịp làm gì'],
               ['来得及 ↔ 来不及 (bài 7)', 'Kịp ↔ không kịp']]
  },
  '复杂': {
    collo: [['比较复杂', 'khá phức tạp'], ['复杂的题', 'câu hỏi phức tạp'],
            ['有点儿复杂', 'hơi rắc rối'], ['复杂的生活', 'cuộc sống phức tạp'],
            ['问题很复杂', 'vấn đề rất rắc rối']],
    patterns: [['N + 很 / 有点儿 + 复杂', 'Cái gì đó rất / hơi phức tạp'],
               ['复杂 ↔ 简单', 'Phức tạp ↔ đơn giản']]
  },
  '只好': {
    collo: [['只好放弃', 'đành phải bỏ cuộc'], ['只好这样了', 'đành vậy thôi'],
            ['只好等待', 'đành phải chờ'], ['只好明天再来', 'đành mai đến lại'],
            ['最后只好', 'cuối cùng đành phải']],
    patterns: [['Sub + 只好 + V', 'Ai đó đành phải làm gì (không còn lựa chọn)'],
               ['只好 ≈ 不得不 (bài 4)', 'Cả hai đều mang ý miễn cưỡng']]
  },
  '填空': {
    collo: [['填空题', 'câu điền chỗ trống'], ['选词填空', 'chọn từ điền vào chỗ trống'],
            ['做填空题', 'làm bài điền từ'], ['填空不会做', 'không làm được bài điền'],
            ['完成填空', 'hoàn thành phần điền từ']],
    patterns: [['填空 + 题', 'Dạng bài điền vào chỗ trống'],
               ['填 + 空', 'Điền (填) vào chỗ trống (空) — ghép nghĩa dễ nhớ']]
  },
  '猜': {
    collo: [['猜猜看', 'đoán thử xem'], ['随便猜', 'đoán bừa'],
            ['猜对了', 'đoán đúng rồi'], ['一个都没猜对', 'không đoán đúng cái nào'],
            ['猜答案', 'đoán đáp án']],
    patterns: [['猜 + 对 / 错', 'Đoán đúng / sai — bổ ngữ kết quả'],
               ['猜猜看', 'Đoán thử xem — động từ lặp + 看']]
  },
  '否则': {
    collo: [['否则会', 'nếu không sẽ'], ['否则就', 'bằng không thì'],
            ['否则不会', 'nếu không thì sẽ không'], ['……，否则……', '…, nếu không thì…'],
            ['快点儿，否则迟到', 'nhanh lên, kẻo muộn']],
    patterns: [['mệnh đề 1，否则 + hậu quả', 'Phải …, nếu không thì …'],
               ['否则 ≈ 不然', '否则 thiên văn viết hơn 不然']]
  },
  '客厅': {
    collo: [['在客厅', 'ở phòng khách'], ['客厅很大', 'phòng khách rất rộng'],
            ['客厅里到处是书', 'phòng khách đâu cũng là sách'], ['打扫客厅', 'dọn phòng khách'],
            ['客厅的沙发', 'sô pha phòng khách']],
    patterns: [['在 + 客厅 + 里', 'Trong phòng khách'],
               ['客 + 厅', 'Sảnh (厅) tiếp khách (客) — ghép nghĩa dễ nhớ']]
  },
  '无论': {
    collo: [['无论是……还是……', 'bất kể là… hay…'], ['无论怎么样', 'dù thế nào'],
            ['无论如何', 'dù sao đi nữa'], ['无论……都……', 'bất kể… đều…'],
            ['无论多难', 'dù khó đến đâu']],
    patterns: [['无论 + từ nghi vấn / A 还是 B，都 + V', 'Bất kể … đều …'],
               ['无论 ≈ 不管 (bài 3)', '无论 thiên văn viết, 不管 thiên khẩu ngữ']]
  },
  '杂志': {
    collo: [['一本杂志', 'một quyển tạp chí'], ['看杂志', 'đọc tạp chí'],
            ['普通杂志', 'tạp chí thường'], ['旅游杂志', 'tạp chí du lịch'],
            ['订杂志', 'đặt mua tạp chí']],
    patterns: [['một + 本 + 杂志', 'Lượng từ 本 cho sách, tạp chí'],
               ['loại + 杂志', '旅游杂志, 时尚杂志 — tạp chí về gì']]
  },
  '著名': {
    collo: [['著名的作家', 'nhà văn nổi tiếng'], ['著名小说', 'tiểu thuyết nổi tiếng'],
            ['世界著名', 'nổi tiếng thế giới'], ['著名的城市', 'thành phố nổi tiếng'],
            ['非常著名', 'vô cùng nổi tiếng']],
    patterns: [['著名的 + N', '… nổi tiếng — thường làm định ngữ'],
               ['著名 ≈ 有名', '著名 trang trọng hơn, dùng cho người và tác phẩm lớn']]
  },
  '页': {
    collo: [['一页书', 'một trang sách'], ['读10页', 'đọc 10 trang'],
            ['第五页', 'trang thứ năm'], ['每天读一页', 'mỗi ngày đọc một trang'],
            ['翻到下一页', 'lật sang trang sau']],
    patterns: [['số + 页', 'Mấy trang — 页 vừa là lượng từ vừa là danh từ'],
               ['第 + số + 页', 'Trang thứ mấy']]
  },
  '增加': {
    collo: [['增加知识', 'tăng thêm kiến thức'], ['增加收入', 'tăng thu nhập'],
            ['增加烦恼', 'thêm phiền muộn'], ['增加了一倍', 'tăng gấp đôi'],
            ['给……增加', 'làm tăng thêm cho…']],
    patterns: [['增加 + N', 'Tăng thêm cái gì'],
               ['增加 ↔ 减少', 'Tăng ↔ giảm']]
  },
  '文章': {
    collo: [['一篇文章', 'một bài viết'], ['写文章', 'viết bài'],
            ['看完一篇文章', 'đọc xong một bài'], ['文章的内容', 'nội dung bài viết'],
            ['好文章', 'bài viết hay']],
    patterns: [['một + 篇 + 文章', 'Lượng từ 篇 (bài 9) cho bài viết'],
               ['文章 ≠ 小说', '文章 là bài viết ngắn; 小说 là tiểu thuyết']]
  },
  '之': {
    collo: [['之后', 'sau đó'], ['之前', 'trước đó'],
            ['之一', 'một trong số'], ['之间', 'giữa'],
            ['三分之二', 'hai phần ba']],
    patterns: [['……之一', 'Một trong những … — 之 là 的 của văn viết cổ'],
               ['A 与 B 之间', 'Giữa A và B']]
  },
  '内容': {
    collo: [['主要内容', 'nội dung chính'], ['内容丰富', 'nội dung phong phú'],
            ['书上的内容', 'nội dung trong sách'], ['复习重要内容', 'ôn nội dung quan trọng'],
            ['内容很多', 'nội dung rất nhiều']],
    patterns: [['N + 的 + 内容', 'Nội dung của cái gì'],
               ['内容 + 丰富', 'Nội dung phong phú — 丰富 là từ bài 2']]
  },
  '然而': {
    collo: [['然而，……', 'tuy nhiên,…'], ['然而看法不同', 'song quan điểm khác nhau'],
            ['然而一直没放弃', 'nhưng vẫn chưa từ bỏ'], ['……，然而……', '…, thế nhưng…'],
            ['然而事实是', 'song sự thật là']],
    patterns: [['mệnh đề 1。然而，mệnh đề 2', '…. Tuy nhiên, …'],
               ['然而 ≈ 但是', '然而 chỉ dùng trong văn viết, thường đứng đầu câu mới']]
  },
  '看法': {
    collo: [['自己的看法', 'quan điểm của mình'], ['看法不同', 'cách nhìn khác nhau'],
            ['对……的看法', 'cách nhìn về…'], ['改变看法', 'thay đổi cách nhìn'],
            ['说说你的看法', 'nói thử quan điểm của bạn']],
    patterns: [['对 + N + 的看法', 'Cách nhìn về cái gì'],
               ['看法 ≈ 意见', '看法 trung tính; 意见 thường mang ý phê bình']]
  },
  '相同': {
    collo: [['完全相同', 'hoàn toàn giống nhau'], ['相同的汉字', 'chữ Hán giống nhau'],
            ['看法相同', 'quan điểm giống nhau'], ['不完全相同', 'không hoàn toàn giống'],
            ['相同年龄', 'cùng độ tuổi']],
    patterns: [['A 和 B + 相同', 'A và B giống nhau'],
               ['相同 ↔ 不同', 'Giống nhau ↔ khác nhau']]
  },
  '顺序': {
    collo: [['按照顺序', 'theo thứ tự'], ['不同的顺序', 'thứ tự khác nhau'],
            ['先下后上的顺序', 'thứ tự xuống trước lên sau'], ['顺序不对', 'sai thứ tự'],
            ['排顺序', 'sắp thứ tự']],
    patterns: [['按照 + 顺序', 'Theo thứ tự — 按照 là từ bài 4'],
               ['顺序 + 对 / 不对', 'Thứ tự đúng / sai']]
  },
  '表示': {
    collo: [['表示感谢', 'bày tỏ lòng cảm ơn'], ['表示同意', 'tỏ ý đồng ý'],
            ['表示不同的意思', 'biểu thị ý nghĩa khác nhau'], ['表示关心', 'thể hiện sự quan tâm'],
            ['表示反对', 'tỏ ý phản đối']],
    patterns: [['表示 + 感谢 / 同意 / 反对', 'Bày tỏ thái độ gì'],
               ['A + 表示 + ý nghĩa', 'A biểu thị nghĩa gì']]
  },
  '养成': {
    collo: [['养成习惯', 'tạo thói quen'], ['养成好习惯', 'hình thành thói quen tốt'],
            ['从小养成', 'hình thành từ nhỏ'], ['养成阅读的习惯', 'tạo thói quen đọc sách'],
            ['很难养成', 'rất khó hình thành']],
    patterns: [['养成 + … + 的习惯', 'Tạo thói quen làm gì'],
               ['养成 ≠ 养 (bài 7)', '养成 là hình thành thói quen; 养 là nuôi, trồng']]
  },
  '同时': {
    collo: [['同时，……也', 'đồng thời,… cũng'], ['在……的同时', 'trong lúc…'],
            ['同时还', 'đồng thời còn'], ['两件事同时发生', 'hai việc xảy ra cùng lúc'],
            ['同时进行', 'tiến hành cùng lúc']],
    patterns: [['在 + … + 的同时，还 / 也 + V', 'Trong khi làm A thì đồng thời cũng B'],
               ['……，同时…… (liên từ)', '…, hơn nữa … — nối hai vế cùng chiều']]
  },
  '精彩': {
    collo: [['精彩的比赛', 'trận đấu hay'], ['表演很精彩', 'màn biểu diễn đặc sắc'],
            ['生活更精彩', 'cuộc sống đặc sắc hơn'], ['非常精彩', 'vô cùng xuất sắc'],
            ['精彩的故事', 'câu chuyện hấp dẫn']],
    patterns: [['精彩的 + N', '… đặc sắc, … hay'],
               ['精彩 dùng cho trận đấu, biểu diễn, câu chuyện — không dùng cho người']]
  }
};
