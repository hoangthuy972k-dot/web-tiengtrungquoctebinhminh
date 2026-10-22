// Noi dung TU MOI HSK1 3.0 bai 8 (chu de: vi tri do vat, vat nuoi, nghe nghiep).
module.exports = {
  '房间': {
    collo: [['我的房间', 'phòng của tôi'], ['房间里', 'trong phòng'],
            ['一个房间', 'một căn phòng'], ['漂亮的房间', 'căn phòng đẹp']],
    patterns: [['房间 + 里', 'Trong phòng — 里 đứng sau danh từ'],
               ['房 + 间', 'Gian (间) nhà (房)']]
  },
  '外': {
    collo: [['房间外', 'ngoài phòng'], ['家外', 'ngoài nhà'],
            ['门外', 'ngoài cửa'], ['在外', 'ở bên ngoài']],
    patterns: [['danh từ + 外', 'Bên ngoài cái gì: 房间外'],
               ['外 ↔ 里', 'Ngoài ↔ trong — cả hai đều đứng SAU danh từ']]
  },
  '只': {
    collo: [['一只猫', 'một con mèo'], ['两只狗', 'hai con chó'],
            ['三只小猫', 'ba con mèo con'], ['那只猫', 'con mèo kia']],
    patterns: [['số + 只 + con vật', 'Lượng từ 只 dùng cho chim, mèo, chó'],
               ['Không nói 一个猫 — con vật nhỏ dùng 只']]
  },
  '小': {
    collo: [['小猫', 'mèo con'], ['小狗', 'chó con'],
            ['很小', 'rất nhỏ'], ['小房间', 'căn phòng nhỏ']],
    patterns: [['小 + danh từ', 'Nhỏ, bé: 小猫 · 小房间'],
               ['小 ↔ 大', 'Nhỏ ↔ lớn']]
  },
  '猫': {
    collo: [['一只猫', 'một con mèo'], ['小猫', 'mèo con'],
            ['我的猫', 'con mèo của tôi'], ['看见猫', 'nhìn thấy mèo']],
    patterns: [['một + 只 + 猫', 'Lượng từ của 猫 là 只'],
               ['猫 có bộ 犭 (thú) bên trái, giống chữ chỉ con vật khác']]
  },
  '没': {
    collo: [['没看见', 'không nhìn thấy'], ['没有', 'không có'],
            ['没事', 'không có việc gì'], ['没去', 'không đi']],
    patterns: [['没 + động từ', 'Phủ định việc ĐÃ QUA: 我没看见'],
               ['没 (việc đã qua không xảy ra) ≠ 不 (không muốn, không phải)']]
  },
  '看见': {
    collo: [['看见猫', 'nhìn thấy mèo'], ['没看见', 'không nhìn thấy'],
            ['看见老师', 'nhìn thấy thầy'], ['看见了', 'thấy rồi']],
    patterns: [['看见 + đối tượng', 'Nhìn và THẤY được — 见 là kết quả của 看'],
               ['看 (nhìn) là hành động; 看见 (thấy) là kết quả']]
  },
  '桌子': {
    collo: [['桌子下', 'dưới bàn'], ['一个桌子', 'một cái bàn'],
            ['桌子上', 'trên bàn'], ['这个桌子', 'cái bàn này']],
    patterns: [['桌子 + 上 / 下', 'Từ chỉ vị trí đứng SAU danh từ'],
               ['桌 + 子', '子 là đuôi từ đọc nhẹ, giống 饺子 · 包子']]
  },
  '下': {
    collo: [['桌子下', 'dưới bàn'], ['在桌子下', 'ở dưới bàn'],
            ['下面', 'phía dưới'], ['下有', 'phía dưới có']],
    patterns: [['danh từ + 下', 'Dưới cái gì: 桌子下'],
               ['下 ↔ 上', 'Dưới ↔ trên — cả hai đều đứng SAU danh từ']]
  },
  '漂亮': {
    collo: [['很漂亮', 'rất đẹp'], ['非常漂亮', 'cực kỳ đẹp'],
            ['漂亮的房间', 'căn phòng đẹp'], ['不漂亮', 'không đẹp']],
    patterns: [['很 / 非常 + 漂亮', 'Rất đẹp, cực kỳ đẹp'],
               ['漂亮 nói về người và đồ vật; 好看 nói được cả phim và sách']]
  },
  '在': {
    collo: [['在房间里', 'ở trong phòng'], ['在桌子下', 'ở dưới bàn'],
            ['在书店', 'ở hiệu sách'], ['在哪儿', 'ở đâu']],
    patterns: [['Sub + 在 + nơi chốn', 'Ai, cái gì ở đâu: 猫在桌子下'],
               ['Sau 在 phải là NƠI CHỐN, không phải đồ vật trơ']]
  },
  '学校': {
    collo: [['去学校', 'đến trường'], ['在学校', 'ở trường'],
            ['学校里', 'trong trường'], ['学校前', 'trước trường']],
    patterns: [['去 / 在 + 学校', 'Đi học, ở trường'],
               ['学 + 校', 'Nơi (校) để học (学)']]
  },
  '书店': {
    collo: [['去书店', 'đi hiệu sách'], ['在书店', 'ở hiệu sách'],
            ['书店里', 'trong hiệu sách'], ['学校前的书店', 'hiệu sách trước trường']],
    patterns: [['去 / 在 + 书店', 'Đi hiệu sách, ở hiệu sách'],
               ['书 + 店', 'Tiệm (店) bán sách (书) — cùng kiểu với 饭店']]
  },
  '前': {
    collo: [['学校前', 'trước trường'], ['房间前', 'trước phòng'],
            ['在前', 'ở phía trước'], ['前有', 'phía trước có']],
    patterns: [['danh từ + 前', 'Phía trước cái gì: 学校前'],
               ['前 (nơi chốn) và 前 (trước khi, thời gian) — cùng chữ, hai cách dùng']]
  },
  '能': {
    collo: [['能去', 'có thể đi'], ['不能', 'không thể'],
            ['能看见', 'có thể nhìn thấy'], ['能上班', 'có thể đi làm']],
    patterns: [['Sub + 能 + động từ', 'Có thể làm gì — do hoàn cảnh cho phép'],
               ['能 (hoàn cảnh cho phép) ≠ 会 (học rồi nên biết làm)']]
  },
  '到': {
    collo: [['到学校', 'đến trường'], ['到家', 'về đến nhà'],
            ['到书店', 'đến hiệu sách'], ['看到', 'nhìn thấy']],
    patterns: [['到 + nơi chốn', 'Đến nơi nào: 到学校'],
               ['到 nhấn việc ĐẾN NƠI; 去 nhấn việc đi khỏi đây']]
  },
  '午饭': {
    collo: [['吃午饭', 'ăn cơm trưa'], ['做午饭', 'nấu cơm trưa'],
            ['在家吃午饭', 'ăn trưa ở nhà'], ['好吃的午饭', 'bữa trưa ngon']],
    patterns: [['吃 / 做 + 午饭', 'Ăn cơm trưa, nấu cơm trưa'],
               ['午饭 · 晚饭 — bữa trưa và bữa tối']]
  },
  '饭': {
    collo: [['吃饭', 'ăn cơm'], ['做饭', 'nấu cơm'],
            ['午饭', 'cơm trưa'], ['晚饭', 'cơm tối']],
    patterns: [['吃 / 做 + 饭', 'Ăn cơm, nấu cơm'],
               ['饭 vừa là cơm, vừa là bữa ăn nói chung']]
  },
  '大': {
    collo: [['很大', 'rất lớn'], ['大房间', 'căn phòng lớn'],
            ['不大', 'không lớn'], ['非常大', 'cực kỳ lớn']],
    patterns: [['很 / 非常 + 大', 'Rất lớn, cực kỳ lớn'],
               ['大 ↔ 小', 'Lớn ↔ nhỏ']]
  },
  '病人': {
    collo: [['很多病人', 'rất nhiều bệnh nhân'], ['医院的病人', 'bệnh nhân của bệnh viện'],
            ['看病人', 'thăm bệnh nhân'], ['一个病人', 'một bệnh nhân']],
    patterns: [['số lượng + 病人', 'Bao nhiêu bệnh nhân: 很多病人'],
               ['病 + 人', 'Người (人) bị bệnh (病)']]
  },
  '多': {
    collo: [['很多', 'rất nhiều'], ['多少', 'bao nhiêu'],
            ['不多', 'không nhiều'], ['多少病人', 'bao nhiêu bệnh nhân']],
    patterns: [['很 + 多 + danh từ', 'Rất nhiều cái gì: 很多病人'],
               ['多 ↔ 少', 'Nhiều ↔ ít']]
  },
  '医生': {
    collo: [['是医生', 'là bác sĩ'], ['好医生', 'bác sĩ giỏi'],
            ['医院的医生', 'bác sĩ của bệnh viện'], ['中国医生', 'bác sĩ Trung Quốc']],
    patterns: [['Sub + 是 + 医生', 'Ai đó là bác sĩ'],
               ['医生 (bác sĩ) và 医院 (bệnh viện) dùng chung chữ 医']]
  },
  '工作': {
    collo: [['在医院工作', 'làm việc ở bệnh viện'], ['我的工作', 'công việc của tôi'],
            ['姐姐的工作', 'công việc của chị'], ['去工作', 'đi làm']],
    patterns: [['在 + nơi chốn + 工作', 'Làm việc ở đâu — nơi chốn đứng TRƯỚC'],
               ['工作 vừa là động từ (làm việc), vừa là danh từ (công việc)']]
  }
};
