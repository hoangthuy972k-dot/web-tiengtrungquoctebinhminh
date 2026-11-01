// Noi dung TU MOI HSK1 bai 5 (chu de: gia dinh, tuoi tac).
module.exports = {
  '家': {
    collo: [['我家', 'nhà tôi'], ['他家', 'nhà anh ấy'], ['老师家', 'nhà thầy'], ['她家', 'nhà cô ấy']],
    patterns: [['người + 家', 'Nhà của ai — nói 我家, ít khi nói 我的家'],
               ['家 vừa là ngôi nhà, vừa là gia đình']]
  },
  '有': {
    collo: [['有女儿', 'có con gái'], ['有几口人', 'có mấy người'],
            ['有中国朋友', 'có bạn người Trung Quốc'], ['有汉语老师', 'có giáo viên tiếng Trung']],
    patterns: [['Sub + 有 + danh từ', 'Câu chữ 有: 我家有五口人'],
               ['有 chỉ sở hữu; phủ định dùng 没有, KHÔNG dùng 不有']]
  },
  '口': {
    collo: [['几口人', 'mấy người'], ['五口人', 'năm người'], ['三口人', 'ba người']],
    patterns: [['số + 口 + 人', 'Lượng từ 口 chỉ dùng để đếm NGƯỜI TRONG NHÀ'],
               ['口 chỉ đếm người trong gia đình, không dùng để đếm người ở lớp hay ở cơ quan']]
  },
  '女儿': {
    collo: [['我的女儿', 'con gái tôi'], ['有女儿', 'có con gái'],
            ['她的女儿', 'con gái của cô ấy'], ['老师的女儿', 'con gái của thầy']],
    patterns: [['ai + 的 + 女儿', 'Con gái của ai'],
               ['女 + 儿', 'Đứa con (儿) là nữ (女)']]
  },
  '几': {
    collo: [['几口人', 'mấy người'], ['几岁', 'mấy tuổi'], ['今年几岁', 'năm nay mấy tuổi']],
    patterns: [['几 + lượng từ + danh từ', 'Hỏi số lượng NHỎ, đoán dưới mười'],
               ['几 (số nhỏ) ≠ 多少 (số bất kỳ, bài 8)']]
  },
  '岁': {
    collo: [['几岁', 'mấy tuổi'], ['六岁', 'sáu tuổi'], ['五岁', 'năm tuổi'], ['十岁', 'mười tuổi']],
    patterns: [['số + 岁', 'Bao nhiêu tuổi: 她六岁'],
               ['Hỏi trẻ con dùng 几岁, hỏi người lớn dùng 多大']]
  },
  '了': {
    collo: [['十岁了', 'mười tuổi rồi'], ['大了', 'lớn rồi'], ['是学生了', 'đã là học sinh rồi']],
    patterns: [['câu + 了', 'Chỉ sự thay đổi: 她六岁了 — cô bé đã sáu tuổi'],
               ['了 đặt CUỐI câu, mang nghĩa trước chưa vậy nay đã vậy']]
  },
  '今年': {
    collo: [['今年几岁', 'năm nay mấy tuổi'], ['今年多大', 'năm nay bao nhiêu tuổi'],
            ['今年十岁', 'năm nay mười tuổi']],
    patterns: [['今年 + Sub + …', 'Từ chỉ thời gian đứng ĐẦU câu hoặc sau chủ ngữ'],
               ['今 + 年', 'Năm (年) này (今)']]
  },
  '多': {
    collo: [['多大', 'bao nhiêu tuổi'], ['多大了', 'bao nhiêu tuổi rồi']],
    patterns: [['多 + tính từ', 'Hỏi mức độ: 多大 — lớn chừng nào'],
               ['多大 hỏi tuổi người lớn; trẻ nhỏ thì hỏi 几岁']]
  },
  '大': {
    collo: [['多大', 'bao nhiêu tuổi'], ['大了', 'lớn rồi'], ['不大', 'không lớn']],
    patterns: [['Sub + 多大？', 'Hỏi tuổi: 你今年多大？'],
               ['大 vừa là lớn về kích thước, vừa là lớn về tuổi']]
  }
};
