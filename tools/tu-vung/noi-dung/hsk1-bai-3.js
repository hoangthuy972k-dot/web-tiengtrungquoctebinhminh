// Noi dung TU MOI HSK1 bai 3 (chu de: hoi ten, gioi thieu quoc tich).
module.exports = {
  '叫': {
    collo: [['叫什么', 'gọi là gì'], ['叫什么名字', 'tên là gì'], ['我叫', 'tôi tên là']],
    patterns: [['Sub + 叫 + tên', 'Ai đó tên là gì: 我叫……'],
               ['叫 + 什么名字', 'Khung hỏi tên: 你叫什么名字？']]
  },
  '什么': {
    collo: [['什么名字', 'tên gì'], ['叫什么', 'gọi là gì'], ['是什么', 'là cái gì']],
    patterns: [['什么 + danh từ', '什么名字 — 什么 đứng trước danh từ'],
               ['Câu đã có 什么 thì KHÔNG thêm 吗: ✗ 你叫什么吗？']]
  },
  '名字': {
    collo: [['什么名字', 'tên gì'], ['叫什么名字', 'tên là gì']],
    patterns: [['叫 + 什么 + 名字', 'Khung hỏi tên đầy đủ'],
               ['名 + 字', 'Cả hai chữ đều mang nghĩa tên gọi']]
  },
  '我': {
    collo: [['我是', 'tôi là'], ['我叫', 'tôi tên là'], ['我不是', 'tôi không phải là']],
    patterns: [['我 + 是 + danh từ', 'Tôi là …: 我是学生'],
               ['我 (tôi) ↔ 你 (bạn) — cặp đại từ cơ bản nhất']]
  },
  '是': {
    collo: [['是学生', 'là học sinh'], ['是老师', 'là giáo viên'],
            ['是中国人', 'là người Trung Quốc'], ['不是', 'không phải']],
    patterns: [['Sub + 是 + danh từ', 'Câu chữ 是: 我是学生'],
               ['Phủ định là 不是, KHÔNG nói 没是']]
  },
  '老师': {
    collo: [['中国老师', 'giáo viên Trung Quốc'], ['美国老师', 'giáo viên Mỹ'],
            ['是老师', 'là giáo viên'], ['老师好', 'chào thầy cô']],
    patterns: [['老师 + 好', 'Lời chào thầy cô: 老师好！'],
               ['老 + 师', '老 ở đây không mang nghĩa già, chỉ là tiếng đệm kính trọng']]
  },
  '吗': {
    collo: [['是吗', 'phải không'], ['好吗', 'có khoẻ không'], ['是学生吗', 'là học sinh phải không']],
    patterns: [['câu kể + 吗？', 'Biến câu kể thành câu hỏi: 你是学生吗？'],
               ['吗 luôn đứng CUỐI câu, không đứng giữa']]
  },
  '学生': {
    collo: [['中国学生', 'học sinh Trung Quốc'], ['美国学生', 'học sinh Mỹ'],
            ['是学生', 'là học sinh'], ['学生们', 'các học sinh']],
    patterns: [['是 + 学生', 'Là học sinh'],
               ['学 + 生', 'Người (生) đi học (学)']]
  },
  '人': {
    collo: [['中国人', 'người Trung Quốc'], ['美国人', 'người Mỹ'], ['是中国人', 'là người Trung Quốc']],
    patterns: [['tên nước + 人', 'Người nước nào: 中国人 · 美国人'],
               ['人 là chữ tượng hình — hai nét là hai chân người đang bước']]
  },
  '中国': {
    collo: [['中国人', 'người Trung Quốc'], ['中国学生', 'học sinh Trung Quốc'],
            ['中国老师', 'giáo viên Trung Quốc']],
    patterns: [['中国 + 人 / 学生 / 老师', 'Ghép thẳng với danh từ chỉ người'],
               ['中 + 国', 'Nước (国) ở giữa (中) — cách người Trung Quốc tự gọi']]
  },
  '美国': {
    collo: [['美国人', 'người Mỹ'], ['美国学生', 'học sinh Mỹ'], ['美国老师', 'giáo viên Mỹ']],
    patterns: [['美国 + 人 / 学生 / 老师', 'Ghép thẳng với danh từ chỉ người'],
               ['美 + 国', 'Nước (国) đẹp (美) — phiên âm từ America']]
  }
};
