// Noi dung TU MOI HSK2 (bo cu) bai 10 (chu de: lop hoc, giup do, viec nha).
module.exports = {
  '课': {
    collo: [['上课', 'lên lớp'], ['下课', 'tan học'],
            ['汉语课', 'tiết tiếng Trung'], ['上汉语课', 'học tiết tiếng Trung']],
    patterns: [['上 / 下 + 课', 'Vào học và tan học'],
               ['课 có bộ 讠 (lời nói) — lớp học là nơi nói và nghe']]
  },
  '帮助': {
    collo: [['帮助我', 'giúp đỡ tôi'], ['帮助同学', 'giúp bạn học'],
            ['帮助哥哥', 'giúp đỡ anh trai'], ['谢谢你的帮助', 'cảm ơn sự giúp đỡ']],
    patterns: [['帮助 + người', 'Giúp đỡ ai: 老师帮助我们'],
               ['帮助 (trang trọng hơn) và 帮 (khẩu ngữ): 帮我看一下']]
  },
  '别': {
    collo: [['别走', 'đừng đi'], ['别看电视', 'đừng xem tivi'],
            ['别问', 'đừng hỏi'], ['别太累', 'đừng quá mệt']],
    patterns: [['别 + động từ', 'Đừng làm gì: 别走'],
               ['别 (đừng) dùng khi khuyên; 不 chỉ là phủ định']]
  },
  '哥哥': {
    collo: [['我哥哥', 'anh trai tôi'], ['哥哥的手机', 'điện thoại của anh'],
            ['两个哥哥', 'hai người anh'], ['哥哥上班', 'anh đi làm']],
    patterns: [['ai + 哥哥', 'Anh của ai — người thân hay bỏ 的'],
               ['哥哥 (anh) · 姐姐 (chị) — đều nói hai lần']]
  },
  '鸡蛋': {
    collo: [['吃鸡蛋', 'ăn trứng'], ['买鸡蛋', 'mua trứng'],
            ['一个鸡蛋', 'một quả trứng'], ['鸡蛋面条', 'mì trứng']],
    patterns: [['吃 / 买 + 鸡蛋', 'Ăn trứng, mua trứng'],
               ['鸡 + 蛋', 'Quả trứng (蛋) của con gà (鸡)']]
  },
  '西瓜': {
    collo: [['吃西瓜', 'ăn dưa hấu'], ['买西瓜', 'mua dưa hấu'],
            ['一个西瓜', 'một quả dưa hấu'], ['西瓜很好吃', 'dưa hấu rất ngon']],
    patterns: [['吃 + 西瓜', 'Ăn dưa hấu'],
               ['西 + 瓜', 'Quả dưa (瓜) đến từ phía tây (西)']]
  },
  '正在': {
    collo: [['正在上课', 'đang trong giờ học'], ['正在吃饭', 'đang ăn cơm'],
            ['正在工作', 'đang làm việc'], ['正在洗', 'đang rửa']],
    patterns: [['正在 + động từ', 'Đang làm gì: 他正在上课'],
               ['正在 (ngay lúc này) mạnh hơn 在; cuối câu hay thêm 呢']]
  },
  '手机': {
    collo: [['我的手机', 'điện thoại của tôi'], ['买手机', 'mua điện thoại'],
            ['新手机', 'điện thoại mới'], ['手机在哪儿', 'điện thoại ở đâu']],
    patterns: [['một + 个 + 手机', 'Lượng từ của 手机 là 个'],
               ['手 + 机', 'Cái máy (机) cầm trên tay (手)']]
  },
  '洗': {
    collo: [['洗手', 'rửa tay'], ['洗衣服', 'giặt quần áo'],
            ['洗西瓜', 'rửa dưa hấu'], ['洗完了', 'rửa xong rồi']],
    patterns: [['洗 + đồ vật', 'Rửa, giặt cái gì: 洗衣服'],
               ['洗 có bộ 氵 (nước) — việc gì cũng cần nước']]
  }
};
