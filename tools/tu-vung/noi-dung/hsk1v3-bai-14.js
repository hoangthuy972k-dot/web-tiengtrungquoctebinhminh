// Noi dung TU MOI HSK1 3.0 bai 14 (chu de: di tau, hoc hanh, nghe noi doc viet).
module.exports = {
  '上': {
    collo: [['上火车', 'lên tàu'], ['上车', 'lên xe'],
            ['上中学', 'học cấp hai'], ['上学', 'đi học']],
    patterns: [['上 + phương tiện', 'Lên tàu, lên xe: 上火车'],
               ['上 + bậc học', 'Theo học bậc nào: 上中学 · 上大学']]
  },
  '火车': {
    collo: [['坐火车', 'đi tàu hoả'], ['上火车', 'lên tàu'],
            ['火车上', 'trên tàu'], ['去西安的火车', 'chuyến tàu đi Tây An']],
    patterns: [['坐 + 火车', 'Đi tàu hoả — dùng 坐'],
               ['火 + 车', 'Xe (车) chạy bằng lửa (火) — tàu hơi nước ngày xưa']]
  },
  '中午': {
    collo: [['今天中午', 'trưa nay'], ['中午吃饭', 'trưa ăn cơm'],
            ['明天中午', 'trưa mai'], ['中午回家', 'trưa về nhà']],
    patterns: [['ngày + 中午', 'Buổi trưa của ngày nào: 今天中午'],
               ['早上 · 上午 · 中午 · 下午 · 晚上 — năm buổi trong ngày']]
  },
  '开': {
    collo: [['开车', 'lái xe'], ['开门', 'mở cửa'],
            ['开火车', 'lái tàu'], ['几点开', 'mấy giờ khởi hành']],
    patterns: [['火车 / 车 + 开 + 了', 'Tàu, xe khởi hành rồi'],
               ['开 vừa là lái, vừa là mở, vừa là khởi hành']]
  },
  '有些': {
    collo: [['有些人', 'có một số người'], ['有些学生', 'một số học sinh'],
            ['有些字', 'một số chữ'], ['有些东西', 'một số thứ']],
    patterns: [['有些 + danh từ', 'Có một số … — đứng ĐẦU câu làm chủ ngữ'],
               ['有些人 = 有的人 — hai cách nói cùng nghĩa']]
  },
  '有的': {
    collo: [['有的人', 'có người thì'], ['有的学生', 'có học sinh thì'],
            ['有的字', 'có chữ thì'], ['有的东西', 'có thứ thì']],
    patterns: [['有的 + N ……，有的 + N ……', 'Có cái thì …, có cái thì …'],
               ['有的 hay đi thành cặp để so sánh hai nhóm']]
  },
  '了': {
    collo: [['火车开了', 'tàu chạy rồi'], ['他来了', 'anh ấy đến rồi'],
            ['下课了', 'tan học rồi'], ['写了', 'viết rồi']],
    patterns: [['câu + 了', 'Chỉ sự thay đổi: 火车开了 — tàu vừa chạy'],
               ['了 đặt CUỐI câu, mang nghĩa trước chưa vậy nay đã vậy']]
  },
  '写': {
    collo: [['写字', 'viết chữ'], ['写汉字', 'viết chữ Hán'],
            ['会写', 'biết viết'], ['写名字', 'viết tên']],
    patterns: [['写 + 字 / 汉字', 'Viết chữ, viết chữ Hán'],
               ['写 là viết ra chữ; 说 là nói ra lời']]
  },
  '都': {
    collo: [['都是', 'đều là'], ['都很好', 'đều rất tốt'],
            ['都会写', 'đều biết viết'], ['都不是', 'đều không phải']],
    patterns: [['Sub (số nhiều) + 都 + động từ', '都 đứng SAU cái nó bao quát'],
               ['✗ 都他们是学生 → ✓ 他们都是学生']]
  },
  '听见': {
    collo: [['听见了', 'nghe thấy rồi'], ['没听见', 'không nghe thấy'],
            ['听见说话', 'nghe thấy tiếng nói'], ['听见歌', 'nghe thấy tiếng hát']],
    patterns: [['听见 + đối tượng', 'Nghe và THẤY được — 见 là kết quả của 听'],
               ['听 (nghe) là hành động; 听见 (nghe thấy) là kết quả — giống 看 / 看见']]
  },
  '不要': {
    collo: [['不要说话', 'đừng nói chuyện'], ['不要走', 'đừng đi'],
            ['不要问', 'đừng hỏi'], ['不要忘', 'đừng quên']],
    patterns: [['不要 + động từ', 'Đừng làm gì — câu cấm, nhắc nhở'],
               ['不要 (đừng) ≠ 不想 (không muốn)']]
  },
  '说话': {
    collo: [['不要说话', 'đừng nói chuyện'], ['和朋友说话', 'nói chuyện với bạn'],
            ['喜欢说话', 'thích nói chuyện'], ['正在说话', 'đang nói chuyện']],
    patterns: [['和 + ai + 说话', 'Nói chuyện với ai'],
               ['说 + 话', 'Nói (说) ra lời (话) — cùng chữ 话 với 电话']]
  },
  '听': {
    collo: [['听歌', 'nghe nhạc'], ['听老师说', 'nghe thầy nói'],
            ['不听', 'không nghe'], ['听一下', 'nghe thử một chút']],
    patterns: [['听 + 歌 / người + 说', 'Nghe nhạc, nghe ai nói'],
               ['听 (nghe bằng tai) ≠ 看 (nhìn bằng mắt)']]
  },
  '哪些': {
    collo: [['哪些字', 'những chữ nào'], ['哪些人', 'những người nào'],
            ['哪些东西', 'những thứ nào'], ['哪些学生', 'những học sinh nào']],
    patterns: [['哪些 + danh từ', 'Những cái nào — hỏi nhiều cái cùng lúc'],
               ['这些 · 那些 · 哪些 — bộ ba số nhiều']]
  },
  '字': {
    collo: [['汉字', 'chữ Hán'], ['写字', 'viết chữ'],
            ['名字', 'tên'], ['这个字', 'chữ này']],
    patterns: [['写 + 字', 'Viết chữ — 字 là từng con chữ'],
               ['字 nằm trong nhiều từ đã học: 汉字 · 名字']]
  },
  '汉语': {
    collo: [['学汉语', 'học tiếng Trung'], ['说汉语', 'nói tiếng Trung'],
            ['汉语老师', 'giáo viên tiếng Trung'], ['汉语书', 'sách tiếng Trung']],
    patterns: [['学 / 说 + 汉语', 'Học, nói tiếng Trung'],
               ['汉语 = 中文 — 汉语 nhấn tiếng nói, 中文 nhấn chữ nghĩa']]
  },
  '汉字': {
    collo: [['写汉字', 'viết chữ Hán'], ['会写汉字', 'biết viết chữ Hán'],
            ['很多汉字', 'rất nhiều chữ Hán'], ['哪些汉字', 'những chữ Hán nào']],
    patterns: [['写 + 汉字', 'Viết chữ Hán'],
               ['汉 + 字', 'Chữ (字) của người Hán (汉)']]
  },
  '明年': {
    collo: [['明年上大学', 'sang năm học đại học'], ['明年去中国', 'sang năm đi Trung Quốc'],
            ['明年几岁', 'sang năm mấy tuổi'], ['明年的时候', 'vào sang năm']],
    patterns: [['明年 + Sub + động từ', 'Sang năm làm gì'],
               ['今年 · 明年 · 去年 — ba mốc năm']]
  },
  '中学': {
    collo: [['上中学', 'học cấp hai'], ['中学的老师', 'giáo viên cấp hai'],
            ['去中学', 'đến trường cấp hai'], ['中学生', 'học sinh cấp hai']],
    patterns: [['上 + 中学', 'Theo học bậc trung học'],
               ['小学 → 中学 → 大学 — ba bậc học']]
  },
  '小学': {
    collo: [['上小学', 'học tiểu học'], ['小学的老师', 'giáo viên tiểu học'],
            ['去小学', 'đến trường tiểu học'], ['小学生', 'học sinh tiểu học']],
    patterns: [['上 + 小学', 'Theo học bậc tiểu học'],
               ['小 + 学', 'Trường (学) bậc nhỏ (小) — đối với 大学']]
  },
  '中学生': {
    collo: [['是中学生', 'là học sinh cấp hai'], ['很多中学生', 'rất nhiều học sinh cấp hai'],
            ['中学生的书', 'sách của học sinh cấp hai'], ['那些中学生', 'những học sinh cấp hai kia']],
    patterns: [['Sub + 是 + 中学生', 'Ai đó là học sinh cấp hai'],
               ['中学 + 生 — người học (生) ở cấp hai (中学)']]
  },
  '小学生': {
    collo: [['是小学生', 'là học sinh tiểu học'], ['很多小学生', 'rất nhiều học sinh tiểu học'],
            ['小学生的书', 'sách của học sinh tiểu học'], ['那些小学生', 'những em tiểu học kia']],
    patterns: [['Sub + 是 + 小学生', 'Ai đó là học sinh tiểu học'],
               ['小学生 · 中学生 · 大学生 — ba bậc người học']]
  },
  '上学': {
    collo: [['去上学', 'đi học'], ['上学的时候', 'lúc đi học'],
            ['不上学', 'không đi học'], ['几点上学', 'mấy giờ đi học']],
    patterns: [['thời gian + 上学', 'Mấy giờ đi học: 早上七点上学'],
               ['上学 (đi học nói chung) ≠ 上课 (vào tiết học)']]
  },
  '他们': {
    collo: [['他们是', 'họ là'], ['他们都', 'họ đều'],
            ['他们的老师', 'thầy của họ'], ['他们来了', 'họ đến rồi']],
    patterns: [['他 + 们', 'Số nhiều của 他 — nhóm toàn nam hoặc có cả nam lẫn nữ'],
               ['他们 · 她们 · 它们 — đọc giống nhau, viết khác nhau']]
  },
  '她们': {
    collo: [['她们是', 'các cô ấy là'], ['她们都', 'các cô ấy đều'],
            ['她们的老师', 'cô giáo của họ'], ['她们来了', 'các cô ấy đến rồi']],
    patterns: [['她 + 们', 'Số nhiều của 她 — nhóm TOÀN nữ'],
               ['Nhóm có cả nam lẫn nữ thì dùng 他们, không dùng 她们']]
  },
  '它们': {
    collo: [['它们是', 'chúng là'], ['它们都', 'chúng đều'],
            ['它们的名字', 'tên của chúng'], ['喜欢它们', 'thích chúng']],
    patterns: [['它 + 们', 'Số nhiều của 它 — chỉ ĐỒ VẬT hoặc con vật'],
               ['它们 không dùng cho người']]
  },
  '晚': {
    collo: [['晚上', 'buổi tối'], ['晚饭', 'cơm tối'],
            ['很晚', 'rất muộn'], ['太晚了', 'muộn quá rồi']],
    patterns: [['很 / 太 + 晚 + 了', 'Rất muộn, muộn quá rồi'],
               ['晚 ↔ 早', 'Muộn ↔ sớm']]
  }
};
