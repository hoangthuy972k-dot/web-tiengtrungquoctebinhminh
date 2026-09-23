// Noi dung TU MOI HSK1 bai 1 (chu de: chao hoi, xin loi).
// Bai 1 chi co 6 tu nen mot so tu chua ghep duoc cum — de trong collo.
module.exports = {
  '你': {
    collo: [['你好', 'chào bạn']],
    patterns: [['你 + 好', 'Lời chào cơ bản nhất: 你好！'],
               ['你 (bạn, ngang hàng) ≠ 您 (ngài, kính trọng)']]
  },
  '好': {
    collo: [['你好', 'chào bạn'], ['您好', 'chào ngài'], ['你们好', 'chào các bạn']],
    patterns: [['đại từ + 好', '你好 · 您好 · 你们好 — đổi đại từ là đổi người được chào'],
               ['好 nghĩa gốc là "tốt, khoẻ"; 你好 nghĩa đen là "bạn khoẻ chứ"']]
  },
  '您': {
    collo: [['您好', 'chào ngài']],
    patterns: [['您 + 好', 'Chào người lớn tuổi, thầy cô, khách'],
               ['您 = 你 + 心 — thêm bộ Tâm (心) ở dưới cho lễ phép']]
  },
  '你们': {
    collo: [['你们好', 'chào các bạn']],
    patterns: [['你 + 们', '们 là đuôi chỉ số nhiều của người'],
               ['你们 (nhiều người) ≠ 你 (một người)']]
  },
  '对不起': {
    collo: [],
    patterns: [['对不起 —— 没关系', 'Xin lỗi — Không sao: một cặp đối đáp'],
               ['对不起 luôn dùng nguyên cụm ba chữ, không tách ra']]
  },
  '没关系': {
    collo: [],
    patterns: [['—— 没关系', 'Câu đáp khi người khác nói 对不起'],
               ['没关系 nghĩa đen: không (没) có liên quan (关系) gì']]
  }
};
