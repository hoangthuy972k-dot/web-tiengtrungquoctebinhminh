// Noi dung TU MOI HSK1 bai 4 (chu de: gioi thieu nguoi khac, so huu).
module.exports = {
  '她': {
    collo: [['她是', 'cô ấy là'], ['她叫', 'cô ấy tên là'], ['她的名字', 'tên của cô ấy']],
    patterns: [['她 + 是 + danh từ', 'Cô ấy là …: 她是我的老师'],
               ['她 (nữ, bộ 女) ≠ 他 (nam, bộ 人) — nói thì giống nhau, viết thì khác']]
  },
  '谁': {
    collo: [['是谁', 'là ai'], ['谁的', 'của ai'], ['他是谁', 'anh ấy là ai']],
    patterns: [['Sub + 是 + 谁？', 'Hỏi người nào: 她是谁？'],
               ['Câu đã có 谁 thì KHÔNG thêm 吗: ✗ 她是谁吗？']]
  },
  '的': {
    collo: [['我的名字', 'tên của tôi'], ['她的汉语', 'tiếng Trung của cô ấy'],
            ['谁的', 'của ai'], ['老师的学生', 'học sinh của thầy']],
    patterns: [['người + 的 + danh từ', 'Sở hữu: 我的名字 — tên của tôi'],
               ['Người thân và nhóm gần gũi hay bỏ 的: 我同学, 我朋友']]
  },
  '汉语': {
    collo: [['汉语老师', 'giáo viên tiếng Trung'], ['我的汉语', 'tiếng Trung của tôi'],
            ['汉语名字', 'tên tiếng Trung']],
    patterns: [['汉语 + 老师 / 名字', 'Ghép thẳng phía trước danh từ'],
               ['汉 + 语', 'Tiếng nói (语) của người Hán (汉)']]
  },
  '哪': {
    collo: [['哪国人', 'người nước nào'], ['哪国', 'nước nào'], ['是哪国人', 'là người nước nào']],
    patterns: [['哪 + 国 + 人', 'Hỏi quốc tịch: 你是哪国人？'],
               ['哪 (nǎ, nào) ≠ 那 (nà, kia) — chỉ khác một nét và một dấu']]
  },
  '呢': {
    collo: [['你呢', 'còn bạn thì sao'], ['我呢', 'còn tôi thì sao'], ['他呢', 'còn anh ấy thì sao']],
    patterns: [['danh từ / đại từ + 呢？', 'Hỏi lại cùng một chuyện: 我是学生，你呢？'],
               ['呢 giúp khỏi lặp lại cả câu hỏi dài']]
  },
  '他': {
    collo: [['他是', 'anh ấy là'], ['他叫', 'anh ấy tên là'], ['他的名字', 'tên của anh ấy']],
    patterns: [['他 + 是 + danh từ', 'Anh ấy là …: 他是我朋友'],
               ['他 dùng cho nam; nhắc nhóm có cả nam lẫn nữ cũng dùng 他们']]
  },
  '同学': {
    collo: [['我的同学', 'bạn cùng lớp của tôi'], ['中国同学', 'bạn học người Trung Quốc'],
            ['同学们', 'các bạn học'], ['是同学', 'là bạn cùng lớp']],
    patterns: [['ai + 的 + 同学', 'Bạn học của ai'],
               ['同 + 学', 'Cùng (同) học (学) một lớp']]
  },
  '朋友': {
    collo: [['我的朋友', 'bạn của tôi'], ['中国朋友', 'bạn người Trung Quốc'],
            ['好朋友', 'bạn thân'], ['是朋友', 'là bạn bè']],
    patterns: [['好 + 朋友', 'Bạn thân — 好 ở đây nghĩa là thân thiết'],
               ['朋友 (bạn nói chung) ≠ 同学 (bạn cùng lớp)']]
  }
};
