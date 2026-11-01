// Noi dung TU MOI HSK1 3.0 bai 3 (chu de: quoc tich, gia dinh, cong viec).
module.exports = {
  '人': {
    collo: [['中国人', 'người Trung Quốc'], ['法国人', 'người Pháp'],
            ['泰国人', 'người Thái Lan'], ['哪国人', 'người nước nào']],
    patterns: [['tên nước + 人', 'Người nước nào: 中国人 · 法国人'],
               ['人 là chữ tượng hình — hai nét là hai chân người đang bước']]
  },
  '的': {
    collo: [['我的名字', 'tên của tôi'], ['她的名字', 'tên của cô ấy'],
            ['谁的', 'của ai'], ['老师的名字', 'tên của thầy']],
    patterns: [['người + 的 + danh từ', 'Sở hữu: 我的名字 — tên của tôi'],
               ['Người thân và nhóm gần gũi hay bỏ 的: 我姐姐, 我同学']]
  },
  '这': {
    collo: [['这是', 'đây là'], ['这是谁', 'đây là ai'], ['这是我的', 'đây là của tôi']],
    patterns: [['这 + 是 + danh từ', 'Giới thiệu người, vật ở gần: 这是我姐姐'],
               ['这 (gần) — dùng khi người hoặc vật ở ngay bên cạnh']]
  },
  '谁': {
    collo: [['是谁', 'là ai'], ['谁的', 'của ai'], ['这是谁', 'đây là ai']],
    patterns: [['Sub + 是 + 谁？', 'Hỏi người nào: 这是谁？'],
               ['Câu đã có 谁 thì KHÔNG thêm 吗']]
  },
  '女朋友': {
    collo: [['我女朋友', 'bạn gái tôi'], ['女朋友的名字', 'tên bạn gái'],
            ['她是我女朋友', 'cô ấy là bạn gái tôi']],
    patterns: [['ai + 女朋友', 'Bạn gái của ai — hay bỏ 的: 我女朋友'],
               ['女 + 朋友', 'Người bạn (朋友) là nữ (女)']]
  },
  '哪': {
    collo: [['哪国', 'nước nào'], ['哪国人', 'người nước nào'], ['是哪国人', 'là người nước nào']],
    patterns: [['哪 + 国 + 人', 'Khung hỏi quốc tịch: 你是哪国人？'],
               ['哪 (nǎ, nào) — dùng để hỏi, luôn cần người nghe chọn ra một cái']]
  },
  '国': {
    collo: [['中国', 'Trung Quốc'], ['法国', 'nước Pháp'],
            ['泰国', 'Thái Lan'], ['哪国人', 'người nước nào']],
    patterns: [['国 ghép sau chữ chỉ tên nước: 中国 · 法国 · 泰国'],
               ['国 có bộ 囗 (vây quanh) — biên giới bao lấy đất nước']]
  },
  '她': {
    collo: [['她是', 'cô ấy là'], ['她的名字', 'tên của cô ấy'],
            ['她也是', 'cô ấy cũng vậy'], ['她姐姐', 'chị của cô ấy']],
    patterns: [['她 + 是 + danh từ', 'Cô ấy là …: 她是我姐姐'],
               ['她 viết bằng bộ 女, chỉ dùng cho người nữ']]
  },
  '喂': {
    collo: [],
    patterns: [['喂 + lời chào', 'Câu mở đầu khi nghe điện thoại: 喂，你好！'],
               ['喂 chỉ dùng trong điện thoại, không dùng khi gặp mặt']]
  },
  '姐姐': {
    collo: [['我姐姐', 'chị tôi'], ['她姐姐', 'chị của cô ấy'],
            ['姐姐的名字', 'tên của chị'], ['姐姐的工作', 'công việc của chị']],
    patterns: [['ai + 姐姐', 'Chị của ai — người thân hay bỏ 的'],
               ['姐姐 là chị gái ruột, không dùng để gọi người lạ']]
  },
  '工作': {
    collo: [['我的工作', 'công việc của tôi'], ['姐姐的工作', 'công việc của chị'],
            ['工作的人', 'người đi làm'], ['想工作', 'muốn đi làm']],
    patterns: [['Sub + 工作', 'Làm việc — 工作 vừa là động từ, vừa là danh từ'],
               ['工 + 作', 'Làm (作) việc (工)']]
  },
  '还': {
    collo: [['还好', 'vẫn ổn'], ['还忙', 'vẫn bận'],
            ['还是学生', 'vẫn là học sinh'], ['还不认识', 'vẫn chưa quen']],
    patterns: [['还 + động từ / tính từ', 'Vẫn còn như cũ: 她还忙'],
               ['还好 là câu trả lời rất hay dùng: cũng tạm, vẫn ổn']]
  },
  '忙': {
    collo: [['很忙', 'rất bận'], ['不忙', 'không bận'],
            ['太忙了', 'bận quá'], ['还忙', 'vẫn bận']],
    patterns: [['Sub + 很 + 忙', 'Câu vị ngữ tính từ: 我很忙'],
               ['忙 có bộ 忄 (tâm) — bận đến rối cả lòng']]
  },
  '吗': {
    collo: [['好吗', 'có khoẻ không'], ['忙吗', 'có bận không'],
            ['是吗', 'phải không'], ['认识吗', 'có quen không']],
    patterns: [['câu kể + 吗？', 'Biến câu kể thành câu hỏi: 你忙吗？'],
               ['吗 luôn đứng CUỐI câu; đã có 谁 · 什么 · 哪 thì không dùng 吗']]
  },
  '对': {
    collo: [['对了', 'đúng rồi'], ['不对', 'không đúng'],
            ['很对', 'rất đúng'], ['对，我是', 'đúng, tôi là']],
    patterns: [['对 / 不对', 'Đúng — không đúng: câu đáp ngắn rất hay dùng'],
               ['对 cũng là câu đáp khi ai đó đoán trúng']]
  },
  '太': {
    collo: [['太忙了', 'bận quá'], ['太好了', 'tốt quá'], ['太高兴了', 'vui quá']],
    patterns: [['太 + tính từ + 了', 'Quá … — hai vế phải đủ, không nói 太忙 trơ'],
               ['太……了 mang cảm xúc mạnh hơn 很']]
  },
  '我们': {
    collo: [['我们是', 'chúng tôi là'], ['我们的老师', 'giáo viên của chúng tôi'],
            ['我们也', 'chúng tôi cũng'], ['我们同学', 'các bạn cùng lớp chúng tôi']],
    patterns: [['我 + 们', 'Số nhiều của 我'],
               ['我们 vừa là "chúng tôi", vừa là "chúng ta"']]
  },
  '想': {
    collo: [['想认识', 'muốn làm quen'], ['不想', 'không muốn'],
            ['想工作', 'muốn đi làm'], ['我想', 'tôi muốn']],
    patterns: [['Sub + 想 + động từ', 'Muốn làm gì: 我想认识她'],
               ['Phủ định là 不想, đặt 不 trước 想']]
  },
  '中国': {
    collo: [['中国人', 'người Trung Quốc'], ['中国老师', 'giáo viên Trung Quốc'],
            ['中国学生', 'học sinh Trung Quốc']],
    patterns: [['中国 + người', 'Ghép thẳng phía trước danh từ chỉ người'],
               ['中 + 国', 'Nước (国) ở giữa (中) — cách người Trung Quốc tự gọi']]
  },
  '法国': {
    collo: [['法国人', 'người Pháp'], ['法国老师', 'giáo viên người Pháp'],
            ['法国学生', 'học sinh người Pháp']],
    patterns: [['法国 + người', 'Ghép thẳng phía trước danh từ chỉ người'],
               ['法 + 国', 'Phiên âm từ chữ đầu của "France"']]
  },
  '中文': {
    collo: [['中文名字', 'tên tiếng Trung'], ['中文老师', 'giáo viên tiếng Trung'],
            ['中文的名字', 'cái tên tiếng Trung']],
    patterns: [['中文 + danh từ', 'Ghép thẳng: 中文名字 · 中文老师'],
               ['中 + 文', 'Chữ nghĩa (文) của Trung Quốc (中)']]
  },
  '泰国': {
    collo: [['泰国人', 'người Thái Lan'], ['泰国老师', 'giáo viên người Thái'],
            ['泰国学生', 'học sinh người Thái']],
    patterns: [['泰国 + người', 'Ghép thẳng phía trước danh từ chỉ người'],
               ['中国 · 法国 · 泰国 — cùng một cách ghép với 国']]
  }
};
