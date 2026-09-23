// Noi dung TU MOI HSK2 (bo cu) bai 6 (chu de: the thao, an uong, nguyen nhan - ket qua).
module.exports = {
  '门': {
    collo: [['开门', 'mở cửa'], ['门外', 'ngoài cửa'],
            ['学校的门', 'cửa trường'], ['一个门', 'một cái cửa']],
    patterns: [['开 + 门', 'Mở cửa — 开门 là từ ly hợp: 请开门'],
               ['门 là chữ tượng hình — vẽ hai cánh cửa']]
  },
  '外': {
    collo: [['门外', 'ngoài cửa'], ['外面', 'bên ngoài'],
            ['在外', 'ở bên ngoài'], ['外边', 'phía ngoài']],
    patterns: [['danh từ + 外', 'Ngoài cái gì: 门外 · 学校外'],
               ['外 ↔ 里 — ngoài và trong']]
  },
  '自行车': {
    collo: [['骑自行车', 'đi xe đạp'], ['买自行车', 'mua xe đạp'],
            ['一个自行车', 'một chiếc xe đạp'], ['新自行车', 'xe đạp mới']],
    patterns: [['骑 + 自行车', 'Đi xe đạp — dùng 骑, không dùng 坐'],
               ['自行车 — cái xe (车) tự (自) chạy (行)']]
  },
  '羊肉': {
    collo: [['吃羊肉', 'ăn thịt cừu'], ['买羊肉', 'mua thịt cừu'],
            ['羊肉好吃', 'thịt cừu ngon'], ['一公斤羊肉', 'một cân thịt cừu']],
    patterns: [['吃 + 羊肉', 'Ăn thịt cừu'],
               ['羊 + 肉', 'Thịt (肉) của con dê, con cừu (羊)']]
  },
  '好吃': {
    collo: [['很好吃', 'rất ngon'], ['不好吃', 'không ngon'],
            ['好吃的面条', 'mì ngon'], ['最好吃', 'ngon nhất']],
    patterns: [['很 / 最 + 好吃', 'Rất ngon, ngon nhất'],
               ['好吃 (ăn ngon) · 好看 (nhìn đẹp) — 好 + động từ']]
  },
  '面条': {
    collo: [['吃面条', 'ăn mì'], ['做面条', 'làm mì'],
            ['爱吃面条', 'thích ăn mì'], ['羊肉面条', 'mì thịt cừu']],
    patterns: [['吃 + 面条', 'Ăn mì'],
               ['面 + 条', 'Bột mì (面) cắt thành sợi (条)']]
  },
  '打篮球': {
    collo: [['去打篮球', 'đi chơi bóng rổ'], ['喜欢打篮球', 'thích chơi bóng rổ'],
            ['经常打篮球', 'thường chơi bóng rổ'], ['一起打篮球', 'cùng chơi bóng rổ']],
    patterns: [['打 + 篮球', 'Bóng dùng tay thì 打; bóng dùng chân thì 踢'],
               ['打篮球 · 踢足球 — hai môn, hai động từ khác nhau']]
  },
  '因为': {
    collo: [['因为下雨', 'vì trời mưa'], ['因为忙', 'vì bận'],
            ['因为生病', 'vì bị ốm'], ['因为好吃', 'vì ngon']],
    patterns: [['因为 + lý do，所以 + kết quả', 'Vì … nên …'],
               ['Tiếng Trung dùng CẢ HAI vế, tiếng Việt chỉ dùng một']]
  },
  '所以': {
    collo: [['所以不去', 'nên không đi'], ['所以喜欢', 'nên thích'],
            ['所以休息', 'nên nghỉ'], ['所以来了', 'nên đã đến']],
    patterns: [['因为……，所以……', 'Cặp liên từ đi liền một bộ'],
               ['所以 đứng đầu vế sau, nói kết quả']]
  },
  '游泳': {
    collo: [['去游泳', 'đi bơi'], ['喜欢游泳', 'thích bơi'],
            ['会游泳', 'biết bơi'], ['经常游泳', 'thường đi bơi']],
    patterns: [['会 + 游泳', 'Biết bơi — 会 là kỹ năng học được'],
               ['游泳 là từ ly hợp — 游 và 泳 tách ra được']]
  },
  '经常': {
    collo: [['经常去', 'thường đi'], ['经常运动', 'thường vận động'],
            ['不经常', 'không thường xuyên'], ['经常吃', 'thường ăn']],
    patterns: [['经常 + động từ', 'Thường làm gì: 我经常游泳'],
               ['经常 (thường) mạnh hơn 常常; 经常 đứng TRƯỚC động từ']]
  },
  '公斤': {
    collo: [['一公斤', 'một cân'], ['两公斤羊肉', 'hai cân thịt cừu'],
            ['多少公斤', 'bao nhiêu cân'], ['五公斤', 'năm cân']],
    patterns: [['số + 公斤 + danh từ', 'Đơn vị cân nặng: 一公斤羊肉'],
               ['一公斤 = 1 kg; 米 đo dài, 公斤 đo nặng']]
  },
  '姐姐': {
    collo: [['我姐姐', 'chị tôi'], ['姐姐的房间', 'phòng của chị'],
            ['两个姐姐', 'hai người chị'], ['姐姐会游泳', 'chị biết bơi']],
    patterns: [['ai + 姐姐', 'Chị của ai — người thân hay bỏ 的'],
               ['姐姐 (chị) — cùng bộ 女 với 妈妈 · 女儿']]
  }
};
