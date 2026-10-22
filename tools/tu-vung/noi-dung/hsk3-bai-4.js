// Noi dung TU MOI HSK3 bai 4 (chu de: ta nguoi, tinh cach, sinh hoat).
module.exports = {
  '比赛': {
    collo: [['看比赛', 'xem thi đấu'], ['参加比赛', 'tham gia thi đấu'],
            ['篮球比赛', 'trận bóng rổ'], ['一场比赛', 'một trận đấu'],
            ['比赛开始了', 'trận đấu bắt đầu rồi']],
    patterns: [['看 / 参加 + 比赛', 'Xem / tham gia thi đấu'],
               ['một + 场 + 比赛', 'Lượng từ 场 cho trận đấu']]
  },
  '照片': {
    collo: [['一张照片', 'một tấm ảnh'], ['照照片', 'chụp ảnh'],
            ['看照片', 'xem ảnh'], ['照片上的人', 'người trong ảnh'],
            ['这张照片', 'tấm ảnh này']],
    patterns: [['một + 张 + 照片', 'Lượng từ 张 cho vật phẳng mỏng'],
               ['照 + 照片', 'Chụp ảnh — động từ và danh từ cùng chữ 照']]
  },
  '年级': {
    collo: [['一年级', 'lớp một'], ['三年级', 'lớp ba'],
            ['高年级', 'khối trên'], ['几年级', 'lớp mấy'],
            ['同年级的同学', 'bạn cùng khối']],
    patterns: [['số + 年级', 'Lớp mấy (khối) — 三年级'],
               ['年级 (khối lớp) ≠ 班 (lớp cụ thể)']]
  },
  '又': {
    collo: [['又高又漂亮', 'vừa cao vừa đẹp'], ['又聪明又热情', 'vừa thông minh vừa nhiệt tình'],
            ['又便宜又好吃', 'vừa rẻ vừa ngon'], ['又大又新', 'vừa to vừa mới'],
            ['又累又饿', 'vừa mệt vừa đói']],
    patterns: [['又 + A + 又 + B', 'Vừa A vừa B — hai tính chất cùng có'],
               ['✗ 又高又很漂亮 → ✓ 又高又漂亮', 'Sau 又 không dùng thêm 很']]
  },
  '聪明': {
    collo: [['很聪明', 'rất thông minh'], ['聪明的孩子', 'đứa trẻ thông minh'],
            ['又聪明又努力', 'vừa thông minh vừa chăm'], ['不太聪明', 'không thông minh lắm'],
            ['聪明极了', 'thông minh cực kỳ']],
    patterns: [['Sub + 很 + 聪明', 'Ai đó rất thông minh'],
               ['聪明 ↔ 笨', 'Thông minh ↔ ngốc']]
  },
  '热情': {
    collo: [['很热情', 'rất nhiệt tình'], ['对人热情', 'nhiệt tình với người khác'],
            ['热情地帮助', 'nhiệt tình giúp đỡ'], ['热情的服务员', 'nhân viên nhiệt tình'],
            ['不太热情', 'không nhiệt tình lắm']],
    patterns: [['对 + ai + 热情', 'Nhiệt tình với ai'],
               ['热情地 + V', 'Làm gì một cách nhiệt tình']]
  },
  '努力': {
    collo: [['很努力', 'rất chăm chỉ'], ['努力学习', 'cố gắng học'],
            ['努力工作', 'chăm chỉ làm việc'], ['一起努力', 'cùng cố gắng'],
            ['再努力一点儿', 'cố thêm chút nữa']],
    patterns: [['努力 + V', 'Cố gắng làm gì'],
               ['努力 ↔ 懒', 'Chăm chỉ ↔ lười']]
  },
  '总是': {
    collo: [['总是笑着', 'lúc nào cũng cười'], ['总是帮助人', 'luôn giúp đỡ người khác'],
            ['总是忘记', 'luôn quên'], ['总是很忙', 'lúc nào cũng bận'],
            ['总是迟到', 'lúc nào cũng đến muộn']],
    patterns: [['Sub + 总是 + V', 'Ai đó lúc nào cũng …'],
               ['总是 ≈ 常常', '总是 nhấn "không lúc nào không", mạnh hơn 常常']]
  },
  '回答': {
    collo: [['回答问题', 'trả lời câu hỏi'], ['认真回答', 'trả lời nghiêm túc'],
            ['不回答', 'không trả lời'], ['回答得很好', 'trả lời rất tốt'],
            ['请回答', 'mời trả lời']],
    patterns: [['回答 + 问题', 'Trả lời câu hỏi'],
               ['回答 + 得 + Adj', 'Trả lời thế nào — bổ ngữ trạng thái']]
  },
  '站': {
    collo: [['站着', 'đang đứng'], ['站在门口', 'đứng ở cửa'],
            ['站起来', 'đứng dậy'], ['站了很久', 'đứng rất lâu'],
            ['别站在这儿', 'đừng đứng ở đây']],
    patterns: [['站 + 在 + nơi chốn', 'Đứng ở đâu'],
               ['站着 + V', 'Vừa đứng vừa làm gì — 着 chỉ trạng thái']]
  },
  '饿': {
    collo: [['很饿', 'rất đói'], ['有点儿饿', 'hơi đói'],
            ['饿了', 'đói rồi'], ['饿得很', 'đói lắm'],
            ['不饿', 'không đói']],
    patterns: [['Sub + 饿 + 了', 'Ai đó đói rồi — 了 chỉ sự thay đổi'],
               ['饿 ↔ 饱', 'Đói ↔ no']]
  },
  '超市': {
    collo: [['去超市', 'đi siêu thị'], ['在超市买', 'mua ở siêu thị'],
            ['超市门口', 'cổng siêu thị'], ['大超市', 'siêu thị lớn'],
            ['超市很近', 'siêu thị rất gần']],
    patterns: [['去 + 超市 + V', 'Đi siêu thị làm gì'],
               ['超 + 市', 'Chợ (市) siêu (超) — dịch âm từ supermarket']]
  },
  '蛋糕': {
    collo: [['一块蛋糕', 'một miếng bánh kem'], ['吃蛋糕', 'ăn bánh kem'],
            ['买蛋糕', 'mua bánh kem'], ['生日蛋糕', 'bánh sinh nhật'],
            ['做蛋糕', 'làm bánh kem']],
    patterns: [['một + 块 + 蛋糕', 'Một miếng bánh — 块 cho vật dạng khối'],
               ['蛋 + 糕', 'Bánh (糕) làm từ trứng (蛋)']]
  },
  '年轻': {
    collo: [['很年轻', 'rất trẻ'], ['年轻人', 'người trẻ'],
            ['年轻的服务员', 'nhân viên trẻ'], ['看起来很年轻', 'trông rất trẻ'],
            ['比我年轻', 'trẻ hơn tôi']],
    patterns: [['Sub + 很 + 年轻', 'Ai đó rất trẻ'],
               ['年轻 (tuổi trẻ) ≠ 新 (mới) — người dùng 年轻, đồ dùng 新']]
  },
  '认真': {
    collo: [['很认真', 'rất nghiêm túc'], ['认真工作', 'làm việc nghiêm túc'],
            ['认真写', 'viết cẩn thận'], ['认真听', 'nghe chăm chú'],
            ['认真地回答', 'trả lời nghiêm túc']],
    patterns: [['认真 + V', 'Làm gì một cách nghiêm túc'],
               ['认真 (thái độ) ≠ 努力 (bỏ sức)']]
  },
  '客人': {
    collo: [['请客人', 'mời khách'], ['等客人', 'đợi khách'],
            ['跟客人说话', 'nói chuyện với khách'], ['家里来客人了', 'nhà có khách'],
            ['对客人很热情', 'rất nhiệt tình với khách']],
    patterns: [['请 / 等 + 客人', 'Mời khách, đợi khách'],
               ['客 + 人', 'Người (人) là khách (客)']]
  }
};
