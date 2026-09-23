// Noi dung TU MOI HSK2 (bo cu) bai 15 (chu de: nam moi, di lai, thoi tiet).
module.exports = {
  '新年': {
    collo: [['过新年', 'đón năm mới'], ['新年快乐', 'chúc mừng năm mới'],
            ['新年的时候', 'dịp năm mới'], ['新年回家', 'về nhà dịp năm mới']],
    patterns: [['过 + 新年', 'Đón năm mới — dùng động từ 过, giống 过生日'],
               ['新年快乐！— câu chúc quen thuộc nhất dịp đầu năm']]
  },
  '票': {
    collo: [['买票', 'mua vé'], ['一张票', 'một cái vé'],
            ['火车票', 'vé tàu'], ['票很贵', 'vé rất đắt']],
    patterns: [['một + 张 + 票', 'Lượng từ của 票 là 张, giống 报纸'],
               ['买 + 票', 'Mua vé — 火车票 · 飞机票']]
  },
  '火车站': {
    collo: [['去火车站', 'ra ga tàu'], ['在火车站等', 'đợi ở ga tàu'],
            ['火车站很远', 'ga tàu rất xa'], ['到火车站', 'đến ga tàu']],
    patterns: [['去 / 到 + 火车站', 'Ra ga, đến ga'],
               ['火车 + 站', 'Bến (站) của tàu hoả (火车)']]
  },
  '大家': {
    collo: [['大家好', 'chào mọi người'], ['大家都来了', 'mọi người đều đến rồi'],
            ['欢迎大家', 'chào mừng mọi người'], ['告诉大家', 'nói với mọi người']],
    patterns: [['大家 + 都 + động từ', 'Mọi người đều …: 大家都来了'],
               ['大家 (mọi người có mặt) — luôn đi với 都']]
  },
  '更': {
    collo: [['更好', 'tốt hơn'], ['更贵', 'đắt hơn'],
            ['更快', 'nhanh hơn'], ['比他更高', 'cao hơn anh ấy nữa']],
    patterns: [['A + 比 + B + 更 + tính từ', 'A còn hơn B: 他比我更高'],
               ['更 (hơn nữa, đã hơn sẵn) ≠ 最 (nhất)']]
  },
  '妹妹': {
    collo: [['我妹妹', 'em gái tôi'], ['妹妹的票', 'vé của em gái'],
            ['两个妹妹', 'hai đứa em gái'], ['妹妹上学', 'em gái đi học']],
    patterns: [['ai + 妹妹', 'Em gái của ai'],
               ['姐姐 · 妹妹 · 哥哥 · 弟弟 — bốn cách gọi anh chị em']]
  },
  '阴': {
    collo: [['阴天', 'trời âm u'], ['天阴了', 'trời râm rồi'],
            ['阴天很冷', 'trời râm rất lạnh'], ['今天阴', 'hôm nay trời âm u']],
    patterns: [['天 + 阴 + 了', 'Trời râm rồi — tình hình đã đổi'],
               ['阴 ↔ 晴 — trời râm và trời nắng']]
  },
  '公共汽车': {
    collo: [['坐公共汽车', 'đi xe buýt'], ['公共汽车站', 'bến xe buýt'],
            ['公共汽车票', 'vé xe buýt'], ['等公共汽车', 'chờ xe buýt']],
    patterns: [['坐 + 公共汽车 + 去', 'Đi xe buýt đến đâu: 坐公共汽车去火车站'],
               ['坐 dùng cho xe buýt, tàu, máy bay; 骑 dùng cho xe đạp']]
  }
};
