// Noi dung TU MOI HSK1 3.0 bai 2 (chu de: hoi ten, lam quen, xin loi).
module.exports = {
  '请问': {
    collo: [],
    patterns: [['请问 + câu hỏi', 'Đặt ở ĐẦU câu hỏi cho lễ phép: 请问，你叫什么名字？'],
               ['请 + 问', 'Xin (请) được hỏi (问) — dùng nguyên cụm']]
  },
  '你': {
    collo: [['你好', 'chào bạn'], ['你们', 'các bạn'],
            ['谢谢你', 'cảm ơn bạn'], ['你叫什么', 'bạn tên là gì']],
    patterns: [['你 + động từ', 'Chủ ngữ ngôi thứ hai: 你叫什么名字？'],
               ['你 (ngang hàng) ≠ 您 (kính trọng)']]
  },
  '叫': {
    collo: [['叫什么', 'gọi là gì'], ['叫什么名字', 'tên là gì'],
            ['我叫', 'tôi tên là'], ['你叫', 'bạn tên là']],
    patterns: [['Sub + 叫 + tên', 'Ai đó tên là gì: 我叫……'],
               ['叫 + 什么名字', 'Khung hỏi tên: 你叫什么名字？']]
  },
  '什么': {
    collo: [['什么名字', 'tên gì'], ['叫什么', 'gọi là gì'], ['是什么', 'là cái gì']],
    patterns: [['什么 + danh từ', '什么 đứng trước danh từ: 什么名字'],
               ['Câu đã có 什么 thì KHÔNG thêm 吗']]
  },
  '名字': {
    collo: [['什么名字', 'tên gì'], ['叫什么名字', 'tên là gì']],
    patterns: [['叫 + 什么 + 名字', 'Khung hỏi tên đầy đủ'],
               ['名 + 字', 'Cả hai chữ đều mang nghĩa tên gọi']]
  },
  '我': {
    collo: [['我是', 'tôi là'], ['我叫', 'tôi tên là'],
            ['我不是', 'tôi không phải là'], ['我也是', 'tôi cũng vậy']],
    patterns: [['我 + 是 + danh từ', 'Tôi là …: 我是学生'],
               ['我 (tôi) ↔ 你 (bạn) — cặp đại từ cơ bản nhất']]
  },
  '不': {
    collo: [['不是', 'không phải'], ['不好', 'không tốt'],
            ['不客气', 'không có gì'], ['不认识', 'không quen']],
    patterns: [['不 + động từ / tính từ', 'Phủ định đặt TRƯỚC: 不是 · 不好'],
               ['不 đọc bú khi đứng trước thanh 4: 不是 (bú shì), 不客气 (bú kèqi)']]
  },
  '是': {
    collo: [['是学生', 'là học sinh'], ['是老师', 'là giáo viên'],
            ['是同学', 'là bạn cùng lớp'], ['不是', 'không phải']],
    patterns: [['Sub + 是 + danh từ', 'Câu chữ 是: 我是学生'],
               ['Phủ định là 不是, KHÔNG nói 没是']]
  },
  '对不起': {
    collo: [],
    patterns: [['对不起 —— 没关系 / 没事', 'Xin lỗi — Không sao: cặp đối đáp'],
               ['对不起 luôn dùng nguyên cụm ba chữ, không tách ra']]
  },
  '没关系': {
    collo: [],
    patterns: [['—— 没关系', 'Câu đáp khi người khác nói 对不起'],
               ['没关系 nghĩa đen: không (没) có liên quan (关系) gì']]
  },
  '没事': {
    collo: [],
    patterns: [['—— 没事', 'Câu đáp nhẹ nhàng hơn 没关系, nghe rất thân mật'],
               ['没 + 事', 'Không (没) có chuyện gì (事)']]
  },
  '很': {
    collo: [['很好', 'rất tốt'], ['很高兴', 'rất vui']],
    patterns: [['Sub + 很 + tính từ', 'Câu vị ngữ tính từ: 我很高兴'],
               ['Tính từ làm vị ngữ gần như luôn cần 很 đứng trước']]
  },
  '高兴': {
    collo: [['很高兴', 'rất vui'], ['不高兴', 'không vui'],
            ['很高兴认识你', 'rất vui được làm quen']],
    patterns: [['很高兴 + 认识你', 'Rất vui được làm quen — câu chào hỏi kinh điển'],
               ['高 + 兴', 'Hứng (兴) lên cao (高)']]
  },
  '认识': {
    collo: [['认识你', 'quen bạn'], ['不认识', 'không quen'],
            ['认识老师', 'quen thầy'], ['认识同学', 'quen bạn cùng lớp']],
    patterns: [['认识 + người', 'Quen ai, biết mặt ai'],
               ['认 + 识', 'Nhận ra (认) và biết (识)']]
  },
  '也': {
    collo: [['也是', 'cũng là'], ['也不是', 'cũng không phải'],
            ['我也是', 'tôi cũng vậy'], ['也很高兴', 'cũng rất vui']],
    patterns: [['Sub + 也 + động từ / tính từ', '也 đứng SAU chủ ngữ, TRƯỚC động từ'],
               ['✗ 也我是学生 → ✓ 我也是学生']]
  }
};
