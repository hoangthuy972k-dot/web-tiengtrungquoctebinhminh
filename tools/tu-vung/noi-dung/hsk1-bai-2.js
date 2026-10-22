// Noi dung TU MOI HSK1 bai 2 (chu de: cam on, tam biet).
module.exports = {
  '谢谢': {
    collo: [['谢谢你', 'cảm ơn bạn'], ['谢谢您', 'cảm ơn ngài'], ['谢谢你们', 'cảm ơn các bạn']],
    patterns: [['谢谢 + người', 'Cảm ơn ai: 谢谢你 · 谢谢您 · 谢谢你们'],
               ['谢谢 —— 不客气', 'Cảm ơn — Không có gì: một cặp đối đáp']]
  },
  '不': {
    collo: [['不好', 'không tốt'], ['不客气', 'không có gì']],
    patterns: [['不 + tính từ / động từ', 'Phủ định: 不好 — không tốt'],
               ['不 đọc bú khi đứng trước thanh 4: 不客气 (bú kèqi)']]
  },
  '不客气': {
    collo: [],
    patterns: [['谢谢 —— 不客气', 'Câu đáp khi người khác cảm ơn mình'],
               ['不客气 nghĩa đen: đừng (不) khách sáo (客气)']]
  },
  '再见': {
    collo: [],
    patterns: [['再 + 见', 'Nghĩa đen: gặp (见) lại (再)'],
               ['Chia tay thì cả hai bên đều nói 再见']]
  }
};
