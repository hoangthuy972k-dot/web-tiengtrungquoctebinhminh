// Cau luyen dich HSK1 bai 1 — chi dung tu da hoc.
module.exports = {
  '你|0': { prompt: 'Chào bạn!', answer: '你好！', pair: '……好！',
    note: '你好 là lời chào dùng được với hầu hết mọi người.' },
  '好|0': { prompt: 'Chào ngài!', answer: '您好！', pair: '……好！',
    note: 'Gặp người lớn tuổi hoặc khách thì dùng 您 thay cho 你.' },
  '好|1': { prompt: 'Chào các bạn!', answer: '你们好！', pair: '……好！',
    note: 'Chào nhiều người thì dùng 你们.' },
  '您|0': { prompt: 'Chào bác ạ!', answer: '您好！', pair: '……好！',
    note: '您 mang sắc thái kính trọng — chữ 心 (tâm) nằm dưới chữ 你.' },
  '你们|0': { prompt: 'Chào các anh chị!', answer: '你们好！', pair: '……好！',
    note: '们 gắn sau đại từ chỉ người để thành số nhiều.' },
  '对不起|0': { prompt: 'Xin lỗi!', answer: '对不起！', pair: '对不起！',
    note: 'Ba chữ đi liền nhau, không tách rời.' },
  '对不起|1': { prompt: '— Xin lỗi! — Không sao đâu!', answer: '对不起！——没关系！', pair: '对不起 —— 没关系',
    note: 'Cặp đối đáp quen thuộc: một người xin lỗi, một người đáp lại.' },
  '没关系|0': { prompt: 'Không sao đâu!', answer: '没关系！', pair: '没关系！',
    note: 'Câu đáp lịch sự khi người khác xin lỗi mình.' }
};
