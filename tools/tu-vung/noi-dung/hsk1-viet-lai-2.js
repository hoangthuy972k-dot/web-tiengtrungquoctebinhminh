// Cau luyen dich HSK1 bai 2 — chi dung tu bai 1 va bai 2.
module.exports = {
  '谢谢|0': { prompt: 'Cảm ơn bạn!', answer: '谢谢你！', pair: '谢谢 + người',
    note: 'Cảm ơn ai thì đặt người đó ngay sau 谢谢.' },
  '谢谢|1': { prompt: '— Cảm ơn ngài! — Không có gì!', answer: '谢谢您！——不客气！', pair: '谢谢 —— 不客气',
    note: 'Với người trên thì dùng 您 cho lễ phép.' },
  '不|0': { prompt: 'Không tốt.', answer: '不好。', pair: '不 + Adj',
    note: '不 đặt TRƯỚC tính từ để phủ định.' },
  '不|1': { prompt: 'Không có gì đâu!', answer: '不客气！', pair: '不客气！',
    note: 'Ở đây 不 đọc bú vì chữ sau (客) mang thanh 4.' },
  '不客气|0': { prompt: 'Không có gì!', answer: '不客气！', pair: '不客气！',
    note: 'Câu đáp khi ai đó nói 谢谢 với mình.' },
  '不客气|1': { prompt: '— Cảm ơn các bạn! — Không có gì!', answer: '谢谢你们！——不客气！', pair: '谢谢 —— 不客气',
    note: 'Cảm ơn nhiều người thì dùng 你们.' },
  '再见|0': { prompt: 'Tạm biệt!', answer: '再见！', pair: '再见！',
    note: 'Dùng khi chia tay, không phân biệt thân sơ.' },
  '再见|1': { prompt: '— Chào ngài, tạm biệt ạ! — Tạm biệt!', answer: '您好，再见！——再见！', pair: '……好 —— 再见',
    note: 'Người nghe đáp lại cũng bằng 再见.' }
};
