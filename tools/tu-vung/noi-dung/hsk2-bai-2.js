// Noi dung TU MOI HSK2 (bo cu) bai 2 (chu de: suc khoe, sinh hoat hang ngay).
module.exports = {
  '生病': {
    collo: [['生病了', 'ốm rồi'], ['没生病', 'không ốm'],
            ['生病的时候', 'lúc bị ốm'], ['生病的人', 'người bị ốm']],
    patterns: [['Sub + 生病 + 了', 'Ai đó bị ốm rồi'],
               ['生病 (bị ốm) → 吃药 (uống thuốc) → 休息 (nghỉ ngơi)']]
  },
  '每': {
    collo: [['每天', 'mỗi ngày'], ['每个人', 'mỗi người'],
            ['每年', 'mỗi năm'], ['每个星期', 'mỗi tuần']],
    patterns: [['每 + lượng từ + danh từ', 'Mỗi …: 每个人 · 每天'],
               ['每 hay đi cùng 都 ở vế sau: 我每天都跑步']]
  },
  '早上': {
    collo: [['今天早上', 'sáng nay'], ['明天早上', 'sáng mai'],
            ['早上六点', 'sáu giờ sáng'], ['每天早上', 'sáng nào cũng']],
    patterns: [['ngày + 早上', 'Buổi sáng của ngày nào: 今天早上'],
               ['早上 · 上午 · 中午 · 下午 · 晚上 — năm buổi trong ngày']]
  },
  '跑步': {
    collo: [['去跑步', 'đi chạy bộ'], ['每天跑步', 'ngày nào cũng chạy'],
            ['喜欢跑步', 'thích chạy bộ'], ['早上跑步', 'sáng chạy bộ']],
    patterns: [['thời gian + 跑步', 'Chạy bộ vào lúc nào: 每天早上跑步'],
               ['跑 + 步', 'Chạy (跑) từng bước (步) — chạy bộ']]
  },
  '起床': {
    collo: [['几点起床', 'mấy giờ dậy'], ['早上起床', 'sáng dậy'],
            ['六点起床', 'sáu giờ dậy'], ['不想起床', 'không muốn dậy']],
    patterns: [['thời gian + 起床', 'Mấy giờ ngủ dậy: 六点起床'],
               ['起 + 床', 'Rời (起) khỏi giường (床)']]
  },
  '药': {
    collo: [['吃药', 'uống thuốc'], ['买药', 'mua thuốc'],
            ['一些药', 'một ít thuốc'], ['医生的药', 'thuốc của bác sĩ']],
    patterns: [['吃 + 药', 'Uống thuốc — tiếng Trung nói 吃药, không nói 喝药'],
               ['药 có bộ 艹 (cỏ) ở trên — thuốc xưa làm từ cây cỏ']]
  },
  '身体': {
    collo: [['身体怎么样', 'sức khoẻ thế nào'], ['好身体', 'sức khoẻ tốt'],
            ['我的身体', 'sức khoẻ của tôi'], ['身体不舒服', 'người khó chịu']],
    patterns: [['ai + 身体 + 怎么样？', 'Hỏi thăm sức khoẻ: 你爸爸身体怎么样？'],
               ['身 + 体', 'Thân (身) thể (体) — hai chữ cùng nghĩa ghép lại']]
  },
  '出院': {
    collo: [['出院了', 'ra viện rồi'], ['什么时候出院', 'khi nào ra viện'],
            ['可以出院', 'được ra viện'], ['出院回家', 'ra viện về nhà']],
    patterns: [['Sub + 出院 + 了', 'Ai đó ra viện rồi'],
               ['出 + 院', 'Ra (出) khỏi bệnh viện (医院)']]
  },
  '高': {
    collo: [['很高', 'rất cao'], ['一米八高', 'cao một mét tám'],
            ['不高', 'không cao'], ['高高的', 'cao cao']],
    patterns: [['số + 米 + 高', 'Cao bao nhiêu mét: 他一米八高'],
               ['高 (cao) ↔ 小 (nhỏ, thấp) — với người thì nói 个子高 hay 个子不高']]
  },
  '米': {
    collo: [['一米', 'một mét'], ['一米八', 'một mét tám'],
            ['两米', 'hai mét'], ['多少米', 'bao nhiêu mét']],
    patterns: [['số + 米', 'Bao nhiêu mét — 米 tự làm lượng từ'],
               ['米 (mét) và 米饭 (cơm) — cùng chữ, hai nghĩa']]
  },
  '知道': {
    collo: [['不知道', 'không biết'], ['知道了', 'biết rồi'],
            ['你知道吗', 'bạn có biết không'], ['知道他的名字', 'biết tên anh ấy']],
    patterns: [['知道 + mệnh đề', 'Biết một chuyện: 我知道他生病了'],
               ['知道 (biết một chuyện) khác 认识 (quen biết một người)']]
  },
  '休息': {
    collo: [['休息一下', 'nghỉ một chút'], ['在家休息', 'nghỉ ở nhà'],
            ['想休息', 'muốn nghỉ'], ['好好休息', 'nghỉ cho khoẻ']],
    patterns: [['休息 + 一下', 'Nghỉ một chút — 一下 làm ngữ khí nhẹ đi'],
               ['休 = 亻 + 木', 'Người (亻) tựa vào gốc cây (木) — nghỉ ngơi']]
  },
  '忙': {
    collo: [['很忙', 'rất bận'], ['不忙', 'không bận'],
            ['太忙了', 'bận quá'], ['忙什么', 'bận gì thế']],
    patterns: [['Sub + 很 + 忙', 'Câu vị ngữ tính từ: 我很忙'],
               ['忙 có bộ 忄 (tâm) — bận đến rối cả lòng']]
  },
  '时间': {
    collo: [['有时间', 'có thời gian'], ['没有时间', 'không có thời gian'],
            ['多少时间', 'bao nhiêu thời gian'], ['一些时间', 'một ít thời gian']],
    patterns: [['有 / 没有 + 时间', 'Có, không có thời gian'],
               ['时 + 间', 'Khoảng (间) thời (时) gian']]
  },
  '累': {
    collo: [['很累', 'rất mệt'], ['不累', 'không mệt'],
            ['太累了', 'mệt quá'], ['觉得累', 'thấy mệt']],
    patterns: [['很 / 太 + 累 + 了', 'Rất mệt, mệt quá'],
               ['累 (mệt vì làm nhiều) khác 生病 (mệt vì ốm)']]
  }
};
