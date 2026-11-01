// Noi dung TU MOI HSK2 3.0 bai 1 (chu de: don tiep, gioi thieu, giup do).
module.exports = {
  '就': {
    collo: [['就来', 'đến ngay'], ['就在这里', 'ngay ở đây'],
            ['就是他', 'chính là anh ấy'], ['现在就去', 'bây giờ đi luôn']],
    patterns: [['就 + động từ', 'Ngay lập tức, không chần chừ: 我就来'],
               ['就 + 是', 'Chính là — nhấn mạnh: 他就是我的老师']]
  },
  '给': {
    collo: [['给我打电话', 'gọi điện cho tôi'], ['给他介绍', 'giới thiệu cho anh ấy'],
            ['给你介绍一下', 'giới thiệu cho bạn một chút'], ['给我帮忙', 'giúp đỡ tôi']],
    patterns: [['给 + người + động từ', 'Làm gì cho ai — 给 đứng TRƯỚC động từ'],
               ['✗ 打电话给我 → ✓ 给我打电话']]
  },
  '让': {
    collo: [['让我来', 'để tôi làm'], ['让他去', 'để anh ấy đi'],
            ['让我介绍一下', 'để tôi giới thiệu một chút'], ['不让', 'không cho phép']],
    patterns: [['让 + người + động từ', 'Để, bảo ai làm gì: 让我来'],
               ['让我来 là câu nói rất lịch sự khi muốn giúp ai đó']]
  },
  '接': {
    collo: [['接你', 'đón bạn'], ['去机场接', 'ra sân bay đón'],
            ['接电话', 'nghe điện thoại'], ['来接我', 'đến đón tôi']],
    patterns: [['接 + người', 'Đón ai: 去机场接你'],
               ['接 + 电话', 'Nghe điện thoại — cũng dùng 接']]
  },
  '次': {
    collo: [['一次', 'một lần'], ['第一次', 'lần đầu tiên'],
            ['来过一次', 'đã đến một lần'], ['下次', 'lần sau']],
    patterns: [['số + 次', 'Bao nhiêu lần: 去过三次'],
               ['第一次 + động từ', 'Lần đầu tiên làm gì: 我第一次来北京']]
  },
  '旅游': {
    collo: [['去旅游', 'đi du lịch'], ['来北京旅游', 'đến Bắc Kinh du lịch'],
            ['喜欢旅游', 'thích du lịch'], ['旅游的时候', 'lúc đi du lịch']],
    patterns: [['去 + nơi chốn + 旅游', 'Đi đâu du lịch: 去西安旅游'],
               ['旅 + 游', 'Đi xa (旅) và ngao du (游)']]
  },
  '帮忙': {
    collo: [['帮忙', 'giúp đỡ'], ['给我帮忙', 'giúp tôi'],
            ['请你帮忙', 'nhờ bạn giúp'], ['帮了一个忙', 'đã giúp một việc']],
    patterns: [['给 + người + 帮忙', 'Giúp ai — 帮忙 là từ ly hợp'],
               ['帮忙 tách ra được: 帮了一个忙 ✓ / 帮忙了一个 ✗']]
  },
  '不好意思': {
    collo: [['不好意思', 'ngại quá'], ['真不好意思', 'thật ngại quá'],
            ['不好意思问', 'ngại không dám hỏi'], ['有点儿不好意思', 'hơi ngại']],
    patterns: [['不好意思 + câu', 'Mở đầu khi làm phiền ai: 不好意思，请问……'],
               ['不好意思 nhẹ hơn 对不起 — dùng khi ngại, làm phiền nhẹ']]
  },
  '已经': {
    collo: [['已经来了', 'đã đến rồi'], ['已经知道', 'đã biết rồi'],
            ['已经三次了', 'đã ba lần rồi'], ['已经很晚了', 'đã muộn lắm rồi']],
    patterns: [['已经 + động từ + 了', 'Đã … rồi — hai vế thường đi cùng nhau'],
               ['已经 đứng TRƯỚC động từ, 了 đứng cuối câu']]
  },
  '那': {
    collo: [['那我们去吧', 'vậy thì chúng ta đi'], ['那好吧', 'vậy được thôi'],
            ['那你呢', 'vậy còn bạn'], ['那个人', 'người kia']],
    patterns: [['那 + câu', 'Nối câu, nghĩa là "vậy thì": 那我们走吧'],
               ['那 (vậy thì, nối câu) và 那 (kia, chỉ định) — cùng chữ, hai cách dùng']]
  },
  '介绍': {
    collo: [['介绍一下', 'giới thiệu một chút'], ['给你介绍', 'giới thiệu cho bạn'],
            ['自我介绍', 'tự giới thiệu'], ['介绍北京', 'giới thiệu Bắc Kinh']],
    patterns: [['给 + người + 介绍 + 一下', 'Giới thiệu cho ai một chút'],
               ['介 + 绍', 'Bắc cầu (介) nối (绍) hai bên lại với nhau']]
  },
  '有时': {
    collo: [['有时去', 'có lúc đi'], ['有时在家', 'có lúc ở nhà'],
            ['有时……有时……', 'lúc thì… lúc thì…'], ['有时很忙', 'có lúc rất bận']],
    patterns: [['有时 + V1，有时 + V2', 'Lúc thì …, lúc thì … — hai vế đối nhau'],
               ['有时 = 有时候 — cách nói ngắn hơn']]
  },
  '懂': {
    collo: [['听懂', 'nghe hiểu'], ['看懂', 'đọc hiểu'],
            ['不懂', 'không hiểu'], ['懂中文', 'hiểu tiếng Trung']],
    patterns: [['听 / 看 + 懂', 'Nghe hiểu, đọc hiểu — 懂 là kết quả'],
               ['懂 (hiểu ra) khác 知道 (biết một chuyện)']]
  },
  '意思': {
    collo: [['什么意思', 'nghĩa là gì'], ['有意思', 'thú vị'],
            ['这个字的意思', 'nghĩa của chữ này'], ['不好意思', 'ngại quá']],
    patterns: [['……的意思 + 是……', 'Nghĩa của … là …'],
               ['有意思 (thú vị) và 不好意思 (ngại) — hai cụm quen thuộc với 意思']]
  },
  '北京烤鸭': {
    collo: [['吃北京烤鸭', 'ăn vịt quay Bắc Kinh'], ['一只北京烤鸭', 'một con vịt quay Bắc Kinh'],
            ['好吃的北京烤鸭', 'vịt quay Bắc Kinh ngon'], ['请你吃北京烤鸭', 'mời bạn ăn vịt quay Bắc Kinh']],
    patterns: [['吃 + 北京烤鸭', 'Ăn vịt quay Bắc Kinh — món nổi tiếng nhất của Bắc Kinh'],
               ['北京 + 烤鸭', 'Vịt quay (烤鸭) kiểu Bắc Kinh (北京)']]
  }
};
