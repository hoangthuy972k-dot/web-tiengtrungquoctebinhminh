// Noi dung TU MOI HSK2 (bo cu) bai 12 (chu de: thoi tiet, nhiet do, quan ao).
module.exports = {
  '得': {
    collo: [['说得很快', 'nói rất nhanh'], ['走得很慢', 'đi rất chậm'],
            ['做得不错', 'làm khá tốt'], ['唱得很好', 'hát rất hay']],
    patterns: [['động từ + 得 + tính từ', 'Làm việc gì ĐẾN MỨC nào: 他说得很快'],
               ['Sau 得 vẫn phải có 很: ✗ 说得快 → ✓ 说得很快']]
  },
  '妻子': {
    collo: [['我妻子', 'vợ tôi'], ['他的妻子', 'vợ anh ấy'],
            ['妻子和孩子', 'vợ và con'], ['妻子在家', 'vợ ở nhà']],
    patterns: [['ai + 妻子', 'Vợ của ai — người thân hay bỏ 的'],
               ['妻子 (vợ) ↔ 丈夫 (chồng)']]
  },
  '雪': {
    collo: [['下雪', 'có tuyết'], ['下雪了', 'tuyết rơi rồi'],
            ['大雪', 'tuyết lớn'], ['雪很大', 'tuyết rất to']],
    patterns: [['下 + 雪', 'Tuyết rơi — giống 下雨'],
               ['✗ 雪下 → ✓ 下雪了 — hiện tượng thời tiết đảo ngược trật tự']]
  },
  '零': {
    collo: [['零度', 'không độ'], ['零下', 'dưới không'],
            ['零下十度', 'âm mười độ'], ['零点', 'không giờ']],
    patterns: [['零下 + số + 度', 'Nhiệt độ âm: 零下十度'],
               ['零 là chữ viết đầy đủ của số 0']]
  },
  '度': {
    collo: [['十度', 'mười độ'], ['零下五度', 'âm năm độ'],
            ['多少度', 'bao nhiêu độ'], ['三十度', 'ba mươi độ']],
    patterns: [['số + 度', 'Nói nhiệt độ: 今天十五度'],
               ['多少度？ — khung hỏi nhiệt độ quen thuộc nhất']]
  },
  '穿': {
    collo: [['穿衣服', 'mặc quần áo'], ['穿得少', 'mặc ít'],
            ['穿白衣服', 'mặc áo trắng'], ['穿得多', 'mặc nhiều']],
    patterns: [['穿 + 衣服', 'Mặc quần áo'],
               ['穿 (mặc vào người) — quần áo, giày đều dùng 穿']]
  },
  '进': {
    collo: [['进来', 'vào đây'], ['进去', 'đi vào'],
            ['进教室', 'vào lớp'], ['请进', 'mời vào']],
    patterns: [['进 + nơi chốn', 'Vào chỗ nào: 进教室'],
               ['进来 (vào chỗ tôi) ↔ 进去 (vào chỗ kia)']]
  },
  '弟弟': {
    collo: [['我弟弟', 'em trai tôi'], ['弟弟的手机', 'điện thoại của em'],
            ['两个弟弟', 'hai đứa em trai'], ['弟弟上学', 'em đi học']],
    patterns: [['ai + 弟弟', 'Em trai của ai'],
               ['哥哥 · 弟弟 · 姐姐 — ba cách gọi anh chị em']]
  },
  '近': {
    collo: [['很近', 'rất gần'], ['不近', 'không gần'],
            ['离这儿很近', 'cách đây rất gần'], ['近一点儿', 'gần một chút']],
    patterns: [['A + 离 + B + 很近', 'A cách B rất gần'],
               ['近 ↔ 远 — gần và xa']]
  }
};
