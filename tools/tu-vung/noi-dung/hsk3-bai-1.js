// Noi dung TU MOI HSK3 bai 1 (chu de: ke hoach cuoi tuan).
// Chi dung tu trong pham vi HSK 1-3 — hoc sinh chua hoc tu HSK 4.
module.exports = {
  '周末': {
    collo: [['这个周末', 'cuối tuần này'], ['上个周末', 'cuối tuần trước'],
            ['周末愉快', 'cuối tuần vui vẻ'], ['周末的打算', 'kế hoạch cuối tuần'],
            ['周末休息', 'cuối tuần nghỉ ngơi']],
    patterns: [['这个 / 上个 + 周末', 'Cuối tuần này / cuối tuần trước'],
               ['周 + 末', 'Cuối (末) tuần (周) — ghép nghĩa dễ nhớ']]
  },
  '打算': {
    collo: [['有什么打算', 'có dự định gì'], ['打算去旅游', 'định đi du lịch'],
            ['我的打算', 'kế hoạch của tôi'], ['没有打算', 'chưa có dự định'],
            ['打算学汉语', 'định học tiếng Trung']],
    patterns: [['Sub + 打算 + V (động từ)', 'Ai đó dự định làm gì'],
               ['有 + 什么 + 打算 (danh từ)', 'Có dự định gì']]
  },
  '啊': {
    collo: [['是啊', 'đúng vậy'], ['好啊', 'được đấy'],
            ['太好了啊', 'hay quá đi'], ['你好啊', 'chào bạn nhé'],
            ['快来啊', 'mau đến đi']],
    patterns: [['câu + 啊', 'Trợ từ cuối câu — làm câu mềm và thân mật hơn'],
               ['是啊 / 好啊', 'Cách đáp lời đồng tình trong khẩu ngữ']]
  },
  '跟': {
    collo: [['跟朋友一起', 'cùng với bạn'], ['跟我去', 'đi cùng tôi'],
            ['跟他说', 'nói với anh ấy'], ['跟老师学', 'học với thầy'],
            ['跟你一样', 'giống như bạn']],
    patterns: [['跟 + ai + 一起 + V', 'Cùng ai làm gì'],
               ['跟 + ai + 一样', 'Giống như ai']]
  },
  '一直': {
    collo: [['一直想去', 'luôn muốn đi'], ['一直没有', 'mãi vẫn chưa có'],
            ['一直在家', 'suốt ở nhà'], ['一直下雨', 'mưa suốt'],
            ['一直往前走', 'đi thẳng về phía trước']],
    patterns: [['Sub + 一直 + V', 'Ai đó … suốt, liên tục'],
               ['一直 + 往前走', 'Đi thẳng — nghĩa chỉ phương hướng']]
  },
  '游戏': {
    collo: [['玩儿游戏', 'chơi trò chơi'], ['电脑游戏', 'trò chơi máy tính'],
            ['手机游戏', 'game điện thoại'], ['好玩儿的游戏', 'trò chơi hay'],
            ['做游戏', 'chơi trò chơi (cùng nhau)']],
    patterns: [['玩儿 + 游戏', 'Chơi game — dùng động từ 玩儿'],
               ['loại + 游戏', '电脑游戏, 手机游戏 — trò chơi loại gì']]
  },
  '作业': {
    collo: [['写作业', 'viết bài tập'], ['做作业', 'làm bài tập'],
            ['作业写完了', 'làm xong bài rồi'], ['很多作业', 'rất nhiều bài tập'],
            ['交作业', 'nộp bài']],
    patterns: [['写 / 做 + 作业', 'Làm bài tập về nhà'],
               ['作业 + 写完了', 'Bài tập đã làm xong — 完 là bổ ngữ kết quả']]
  },
  '着急': {
    collo: [['别着急', 'đừng vội'], ['很着急', 'rất sốt ruột'],
            ['不着急', 'không vội'], ['着急去', 'vội đi'],
            ['妈妈很着急', 'mẹ rất lo']],
    patterns: [['别 + 着急', 'Đừng vội, đừng lo — lời trấn an'],
               ['着急 (sốt ruột) khác 忙 (bận)']]
  },
  '复习': {
    collo: [['复习课文', 'ôn bài đọc'], ['复习好了', 'ôn xong rồi'],
            ['认真复习', 'ôn tập nghiêm túc'], ['复习汉语', 'ôn tiếng Trung'],
            ['复习一下', 'ôn lại một chút']],
    patterns: [['复习 + N', 'Ôn tập cái gì'],
               ['复习 ↔ 预习', 'Ôn lại bài cũ ↔ chuẩn bị bài mới']]
  },
  '南方': {
    collo: [['去南方', 'đi miền Nam'], ['南方人', 'người miền Nam'],
            ['南方的天气', 'thời tiết miền Nam'], ['在南方', 'ở miền Nam'],
            ['南方很热', 'miền Nam rất nóng']],
    patterns: [['南方 ↔ 北方', 'Miền Nam ↔ miền Bắc'],
               ['南方 + 人 / 菜 / 天气', 'Người, món ăn, thời tiết miền Nam']]
  },
  '北方': {
    collo: [['去北方', 'đi miền Bắc'], ['北方人', 'người miền Bắc'],
            ['北方很冷', 'miền Bắc rất lạnh'], ['北方的冬天', 'mùa đông miền Bắc'],
            ['在北方住', 'sống ở miền Bắc']],
    patterns: [['北方 + 冷 / 南方 + 热', 'Miền Bắc lạnh, miền Nam nóng'],
               ['北 (bắc) · 南 (nam) · 东 (đông) · 西 (tây)']]
  },
  '面包': {
    collo: [['买面包', 'mua bánh mì'], ['一个面包', 'một cái bánh mì'],
            ['吃面包', 'ăn bánh mì'], ['面包很好吃', 'bánh mì rất ngon'],
            ['面包和牛奶', 'bánh mì và sữa']],
    patterns: [['một + 个 + 面包', 'Một cái bánh mì'],
               ['面 + 包', 'Bọc (包) bột mì (面)']]
  },
  '带': {
    collo: [['带地图', 'mang bản đồ'], ['带钱', 'mang tiền'],
            ['带伞', 'mang ô'], ['忘了带', 'quên mang'],
            ['多带几件', 'mang thêm mấy cái']],
    patterns: [['带 + N', 'Mang theo cái gì'],
               ['忘了 + 带 + N', 'Quên mang cái gì']]
  },
  '地图': {
    collo: [['一张地图', 'một tấm bản đồ'], ['带地图', 'mang bản đồ'],
            ['看地图', 'xem bản đồ'], ['中国地图', 'bản đồ Trung Quốc'],
            ['地图上', 'trên bản đồ']],
    patterns: [['một + 张 + 地图', 'Lượng từ 张 cho vật phẳng mỏng'],
               ['地 + 图', 'Hình vẽ (图) mặt đất (地)']]
  },
  '搬': {
    collo: [['搬家', 'chuyển nhà'], ['搬东西', 'khiêng đồ'],
            ['搬桌子', 'khiêng bàn'], ['搬到北京', 'chuyển đến Bắc Kinh'],
            ['帮我搬', 'giúp tôi khiêng']],
    patterns: [['搬 + 家 / 东西', 'Chuyển nhà, khiêng đồ'],
               ['搬到 + nơi chốn', 'Chuyển đến đâu']]
  }
};
