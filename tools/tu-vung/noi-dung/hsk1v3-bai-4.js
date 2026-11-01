// Noi dung TU MOI HSK1 3.0 bai 4 (chu de: gia dinh, so nguoi, tuoi tac).
module.exports = {
  '有': {
    collo: [['有姐姐', 'có chị gái'], ['有几口人', 'có mấy người'],
            ['有中国朋友', 'có bạn người Trung Quốc'], ['有工作', 'có việc làm']],
    patterns: [['Sub + 有 + danh từ', 'Câu chữ 有: 我家有五口人'],
               ['Phủ định LUÔN là 没有, KHÔNG nói 不有']]
  },
  '多少': {
    collo: [['多少人', 'bao nhiêu người'], ['多少个', 'bao nhiêu cái'],
            ['多少学生', 'bao nhiêu học sinh'], ['有多少', 'có bao nhiêu']],
    patterns: [['多少 + danh từ', 'Hỏi số lượng BẤT KỲ, có thể rất lớn'],
               ['多少 không cần lượng từ; 几 thì phải có: 多少人 ✓ / 几个人 ✓']]
  },
  '个': {
    collo: [['一个', 'một cái'], ['几个', 'mấy cái'],
            ['两个哥哥', 'hai người anh'], ['三个孩子', 'ba đứa trẻ']],
    patterns: [['số + 个 + danh từ', 'Lượng từ dùng được nhiều nhất: 两个哥哥'],
               ['Giữa số và danh từ BẮT BUỘC có lượng từ: ✗ 两哥哥 → ✓ 两个哥哥']]
  },
  '哥哥': {
    collo: [['我哥哥', 'anh trai tôi'], ['两个哥哥', 'hai người anh'],
            ['哥哥的工作', 'công việc của anh'], ['哥哥的名字', 'tên của anh']],
    patterns: [['ai + 哥哥', 'Anh của ai — người thân hay bỏ 的'],
               ['哥哥 (anh trai) ↔ 姐姐 (chị gái)']]
  },
  '呢': {
    collo: [['你呢', 'còn bạn thì sao'], ['我呢', 'còn tôi thì sao'],
            ['他呢', 'còn anh ấy thì sao'], ['你家呢', 'còn nhà bạn thì sao']],
    patterns: [['danh từ / đại từ + 呢？', 'Hỏi lại cùng một chuyện: 我家有五口人，你呢？'],
               ['呢 giúp khỏi phải lặp lại cả câu hỏi dài']]
  },
  '没有': {
    collo: [['没有哥哥', 'không có anh trai'], ['没有工作', 'không có việc làm'],
            ['没有人', 'không có ai'], ['家里没有', 'trong nhà không có']],
    patterns: [['没有 + danh từ', 'Phủ định của 有 LUÔN là 没有'],
               ['✗ 不有哥哥 → ✓ 没有哥哥']]
  },
  '家': {
    collo: [['我家', 'nhà tôi'], ['他家', 'nhà anh ấy'],
            ['老师家', 'nhà thầy'], ['我家有', 'nhà tôi có']],
    patterns: [['người + 家', 'Nhà của ai — nói 我家, ít khi nói 我的家'],
               ['家 vừa là ngôi nhà, vừa là gia đình']]
  },
  '几': {
    collo: [['几口人', 'mấy người'], ['几岁', 'mấy tuổi'],
            ['几个', 'mấy cái'], ['几个哥哥', 'mấy người anh']],
    patterns: [['几 + lượng từ + danh từ', 'Hỏi số lượng NHỎ, đoán dưới mười'],
               ['几 (số nhỏ) ≠ 多少 (số bất kỳ)']]
  },
  '口': {
    collo: [['几口人', 'mấy người'], ['五口人', 'năm người'],
            ['三口人', 'ba người'], ['四口人', 'bốn người']],
    patterns: [['số + 口 + 人', 'Lượng từ 口 chỉ dùng đếm NGƯỜI TRONG NHÀ'],
               ['口 không dùng để đếm người ở lớp hay ở cơ quan']]
  },
  '爸爸': {
    collo: [['我爸爸', 'bố tôi'], ['他爸爸', 'bố anh ấy'],
            ['爸爸的工作', 'công việc của bố'], ['爸爸和妈妈', 'bố và mẹ']],
    patterns: [['người + 爸爸', 'Bố của ai — nói 我爸爸, ít khi nói 我的爸爸'],
               ['爸爸 ↔ 妈妈', 'Hai chữ đều có phần chỉ âm ở dưới: 巴 và 马']]
  },
  '妈妈': {
    collo: [['我妈妈', 'mẹ tôi'], ['她妈妈', 'mẹ cô ấy'],
            ['妈妈的工作', 'công việc của mẹ'], ['爸爸和妈妈', 'bố và mẹ']],
    patterns: [['người + 妈妈', 'Mẹ của ai — người thân hay bỏ 的'],
               ['妈 = 女 + 马', 'Bộ 女 chỉ nghĩa, chữ 马 (mǎ) chỉ âm']]
  },
  '妹妹': {
    collo: [['我妹妹', 'em gái tôi'], ['两个妹妹', 'hai em gái'],
            ['妹妹的名字', 'tên của em gái'], ['妹妹几岁', 'em gái mấy tuổi']],
    patterns: [['ai + 妹妹', 'Em gái của ai'],
               ['姐姐 (chị) ↔ 妹妹 (em gái) — cùng một cặp trên dưới như 哥哥 với em trai']]
  },
  '和': {
    collo: [['爸爸和妈妈', 'bố và mẹ'], ['哥哥和姐姐', 'anh và chị'],
            ['我和你', 'tôi và bạn'], ['他和她', 'anh ấy và cô ấy']],
    patterns: [['danh từ + 和 + danh từ', '和 chỉ nối DANH TỪ, không nối hai câu'],
               ['✗ 我很忙和他很忙 → tiếng Trung không dùng 和 kiểu này']]
  },
  '儿子': {
    collo: [['我儿子', 'con trai tôi'], ['他的儿子', 'con trai của anh ấy'],
            ['有儿子', 'có con trai'], ['儿子几岁', 'con trai mấy tuổi']],
    patterns: [['người + 儿子', 'Con trai của ai'],
               ['儿子 (con trai) ↔ 女儿 (con gái)']]
  },
  '孩子': {
    collo: [['几个孩子', 'mấy đứa con'], ['我的孩子', 'con của tôi'],
            ['孩子们', 'bọn trẻ'], ['孩子几岁', 'đứa bé mấy tuổi']],
    patterns: [['số + 个 + 孩子', 'Lượng từ của 孩子 là 个'],
               ['孩子 nói chung cả con trai lẫn con gái']]
  },
  '女儿': {
    collo: [['我女儿', 'con gái tôi'], ['她的女儿', 'con gái của cô ấy'],
            ['有女儿', 'có con gái'], ['两个女儿', 'hai người con gái']],
    patterns: [['người + 女儿', 'Con gái của ai'],
               ['女 + 儿', 'Đứa con (儿) là nữ (女)']]
  },
  '岁': {
    collo: [['几岁', 'mấy tuổi'], ['五岁', 'năm tuổi'],
            ['十岁', 'mười tuổi'], ['今年几岁', 'năm nay mấy tuổi']],
    patterns: [['số + 岁', 'Bao nhiêu tuổi: 她六岁'],
               ['岁 tự làm lượng từ: ✗ 六个岁 → ✓ 六岁']]
  },
  '他': {
    collo: [['他是', 'anh ấy là'], ['他的名字', 'tên của anh ấy'],
            ['他家', 'nhà anh ấy'], ['他也是', 'anh ấy cũng vậy']],
    patterns: [['他 + 是 + danh từ', 'Anh ấy là …: 他是我哥哥'],
               ['他 (nam, bộ 亻) ≠ 她 (nữ, bộ 女) — nói giống nhau, viết khác nhau']]
  },
  '今年': {
    collo: [['今年几岁', 'năm nay mấy tuổi'], ['今年多大', 'năm nay bao nhiêu tuổi'],
            ['今年十岁', 'năm nay mười tuổi'], ['今年很忙', 'năm nay rất bận']],
    patterns: [['今年 + Sub + …', 'Từ chỉ thời gian đứng ĐẦU câu hoặc sau chủ ngữ'],
               ['今 + 年', 'Năm (年) này (今)']]
  },
  '多': {
    collo: [['多大', 'bao nhiêu tuổi'], ['多少', 'bao nhiêu'],
            ['很多', 'rất nhiều'], ['多大了', 'bao nhiêu tuổi rồi']],
    patterns: [['多 + tính từ', 'Hỏi mức độ: 多大 — lớn chừng nào'],
               ['多大 hỏi tuổi người lớn; trẻ nhỏ thì hỏi 几岁']]
  },
  '大': {
    collo: [['多大', 'bao nhiêu tuổi'], ['大学生', 'sinh viên'],
            ['不大', 'không lớn'], ['很大', 'rất lớn']],
    patterns: [['Sub + 多大？', 'Hỏi tuổi người lớn: 你今年多大？'],
               ['大 vừa là lớn về kích thước, vừa là lớn về tuổi']]
  }
};
