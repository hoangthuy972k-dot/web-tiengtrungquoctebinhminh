// Noi dung TU MOI HSK1 bai 12 (chu de: thoi tiet, suc khoe, hoa qua).
module.exports = {
  '天气': {
    collo: [['今天的天气', 'thời tiết hôm nay'], ['天气怎么样', 'thời tiết thế nào'],
            ['中国的天气', 'thời tiết Trung Quốc'], ['好天气', 'thời tiết đẹp']],
    patterns: [['天气 + 怎么样？', 'Hỏi thời tiết: 今天天气怎么样？'],
               ['天 + 气', 'Khí trời (气) của bầu trời (天)']]
  },
  '怎么样': {
    collo: [['天气怎么样', 'thời tiết thế nào'], ['身体怎么样', 'sức khoẻ thế nào'],
            ['这个怎么样', 'cái này thế nào'], ['汉语怎么样', 'tiếng Trung thế nào']],
    patterns: [['Sub + 怎么样？', 'Hỏi tình hình chung: 你身体怎么样？'],
               ['怎么样 (thế nào, tình hình) ≠ 怎么 (làm thế nào, cách làm)']]
  },
  '太': {
    collo: [['太热了', 'nóng quá'], ['太冷了', 'lạnh quá'],
            ['太好了', 'tốt quá'], ['太多了', 'nhiều quá']],
    patterns: [['太 + tính từ + 了', 'Quá … — hai vế phải đủ, không nói 太热 trơ'],
               ['太……了 mang cảm xúc mạnh hơn 很']]
  },
  '热': {
    collo: [['太热了', 'nóng quá'], ['很热', 'rất nóng'],
            ['不热', 'không nóng'], ['热水', 'nước nóng']],
    patterns: [['很 / 太 + 热', 'Nóng — nói về thời tiết hoặc đồ vật'],
               ['热 ↔ 冷', 'Nóng ↔ lạnh']]
  },
  '冷': {
    collo: [['太冷了', 'lạnh quá'], ['很冷', 'rất lạnh'],
            ['不冷', 'không lạnh'], ['冷水', 'nước lạnh']],
    patterns: [['很 / 太 + 冷', 'Lạnh — nói về thời tiết'],
               ['冷 có bộ 冫 (hai chấm băng) bên trái']]
  },
  '下雨': {
    collo: [['今天下雨', 'hôm nay mưa'], ['不下雨', 'không mưa'],
            ['下雨了', 'mưa rồi'], ['明天下雨', 'mai mưa']],
    patterns: [['下雨 + 了', 'Mưa rồi — 了 cho thấy trời vừa đổi'],
               ['下雨 không cần chủ ngữ: 下雨了 ✓']]
  },
  '小姐': {
    collo: [['王小姐', 'cô Vương'], ['小姐的书', 'sách của cô ấy'],
            ['小姐好', 'chào cô'], ['小姐的电脑', 'máy tính của cô ấy']],
    patterns: [['họ + 小姐', 'Cách gọi: 王小姐 — cô Vương'],
               ['小姐 (cô, phụ nữ trẻ) ↔ 先生 (ông, bài 14)']]
  },
  '来': {
    collo: [['来学校', 'đến trường'], ['来我家', 'đến nhà tôi'],
            ['不来', 'không đến'], ['明天来', 'mai đến']],
    patterns: [['来 + nơi chốn', 'Đến đâu — lại gần người nói'],
               ['来 (lại gần) ↔ 去 (rời xa) — nhìn từ chỗ người nói']]
  },
  '身体': {
    collo: [['身体怎么样', 'sức khoẻ thế nào'], ['我的身体', 'sức khoẻ của tôi'],
            ['爸爸的身体', 'sức khoẻ của bố'], ['学生的身体', 'sức khoẻ học sinh']],
    patterns: [['Sub + 身体 + 怎么样？', 'Hỏi thăm sức khoẻ: 你爸爸身体怎么样？'],
               ['身 + 体', 'Thân (身) thể (体) — hai chữ cùng nghĩa ghép lại']]
  },
  '爱': {
    collo: [['爱吃水果', 'thích ăn hoa quả'], ['爱喝茶', 'thích uống trà'],
            ['爱看电影', 'thích xem phim'], ['爱看书', 'thích đọc sách']],
    patterns: [['爱 + động từ', 'Thích làm gì thành thói quen: 我爱吃水果'],
               ['爱 (thích đến mức thành thói quen) mạnh hơn 喜欢 (bài 13)']]
  },
  '些': {
    collo: [['一些水果', 'một ít hoa quả'], ['这些书', 'những quyển sách này'],
            ['那些人', 'những người kia'], ['买一些', 'mua một ít']],
    patterns: [['一 / 这 / 那 + 些 + danh từ', 'Một vài, những — thay cho số cụ thể'],
               ['些 đã mang nghĩa nhiều, nên KHÔNG thêm lượng từ nữa']]
  },
  '水果': {
    collo: [['吃水果', 'ăn hoa quả'], ['买水果', 'mua hoa quả'],
            ['一些水果', 'một ít hoa quả'], ['爱吃水果', 'thích ăn hoa quả']],
    patterns: [['吃 / 买 + 水果', 'Ăn, mua hoa quả'],
               ['水 + 果', 'Quả (果) nhiều nước (水)']]
  },
  '水': {
    collo: [['喝水', 'uống nước'], ['热水', 'nước nóng'],
            ['冷水', 'nước lạnh'], ['一些水', 'một ít nước']],
    patterns: [['喝 + 水', 'Uống nước'],
               ['水 là chữ tượng hình — nét giữa là dòng chảy']]
  }
};
