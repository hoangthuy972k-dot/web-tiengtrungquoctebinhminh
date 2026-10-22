// Noi dung TU MOI HSK2 (bo cu) bai 14 (chu de: kinh nghiem, cau phuc nhuong bo).
module.exports = {
  '过': {
    collo: [['去过', 'đã từng đi'], ['吃过', 'đã từng ăn'],
            ['看过', 'đã từng xem'], ['没去过', 'chưa từng đi']],
    patterns: [['động từ + 过', 'Đã từng làm: 我去过北京'],
               ['没 + động từ + 过', 'Chưa từng làm: 我没去过 — KHÔNG bỏ 过']]
  },
  '有意思': {
    collo: [['很有意思', 'rất thú vị'], ['没有意思', 'không thú vị'],
            ['有意思的书', 'quyển sách hay'], ['最有意思', 'thú vị nhất']],
    patterns: [['很 + 有意思', 'Rất thú vị — 有意思 là một cụm cố định'],
               ['有意思 (thú vị) ≠ 意思 (ý nghĩa): 什么意思？']]
  },
  '但是': {
    collo: [['但是很贵', 'nhưng rất đắt'], ['但是没去', 'nhưng đã không đi'],
            ['但是不懂', 'nhưng không hiểu'], ['但是很累', 'nhưng rất mệt']],
    patterns: [['虽然……，但是……', 'Tuy … nhưng … — dùng CẢ HAI vế'],
               ['但是 đứng đầu vế sau, nói điều ngược lại']]
  },
  '虽然': {
    collo: [['虽然很贵', 'tuy rất đắt'], ['虽然很累', 'tuy rất mệt'],
            ['虽然下雨', 'tuy trời mưa'], ['虽然很远', 'tuy rất xa']],
    patterns: [['虽然 + vế 1，但是 + vế 2', 'Tuy … nhưng …'],
               ['Tiếng Việt chỉ cần một vế, tiếng Trung phải đủ hai']]
  },
  '次': {
    collo: [['一次', 'một lần'], ['第一次', 'lần đầu tiên'],
            ['去过两次', 'đã đi hai lần'], ['几次', 'mấy lần']],
    patterns: [['động từ + 过 + số + 次', 'Đã làm mấy lần: 我去过两次'],
               ['次 đếm SỐ LẦN; 个 đếm sự vật']]
  },
  '玩儿': {
    collo: [['去玩儿', 'đi chơi'], ['玩儿得很快乐', 'chơi rất vui'],
            ['来我家玩儿', 'đến nhà tôi chơi'], ['玩儿一天', 'chơi một ngày']],
    patterns: [['来 / 去 + nơi chốn + 玩儿', 'Đến đâu chơi: 欢迎你来我家玩儿'],
               ['玩儿 (chơi, giải trí) — khẩu ngữ luôn có 儿']]
  },
  '晴': {
    collo: [['晴天', 'trời nắng'], ['天晴了', 'trời hửng rồi'],
            ['今天很晴', 'hôm nay trời quang'], ['晴天去玩儿', 'ngày nắng đi chơi']],
    patterns: [['天 + 晴 + 了', 'Trời hửng rồi — tình hình đã đổi'],
               ['晴 có bộ 日 (mặt trời) — có nắng thì trời quang']]
  },
  '百': {
    collo: [['一百', 'một trăm'], ['两百', 'hai trăm'],
            ['一百块', 'một trăm đồng'], ['几百', 'mấy trăm']],
    patterns: [['số + 百', 'Đếm hàng trăm: 一百 · 两百'],
               ['一百 chứ không nói 百 trơ — trước 百 luôn có số']]
  }
};
