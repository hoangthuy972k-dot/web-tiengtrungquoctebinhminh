// Noi dung TU MOI HSK1 3.0 bai 5 (chu de: ngay thang, nghi ngoi, nau an).
module.exports = {
  '今天': {
    collo: [['今天几号', 'hôm nay ngày mấy'], ['今天星期几', 'hôm nay thứ mấy'],
            ['今天休息', 'hôm nay nghỉ'], ['今天很忙', 'hôm nay rất bận']],
    patterns: [['今天 + Sub + động từ', 'Từ chỉ thời gian đứng TRƯỚC động từ'],
               ['今 + 天', 'Ngày (天) này (今)']]
  },
  '号': {
    collo: [['几号', 'ngày mấy'], ['五号', 'ngày mùng năm'],
            ['今天几号', 'hôm nay ngày mấy'], ['十号', 'ngày mười']],
    patterns: [['số + 号', 'Ngày bao nhiêu: 五号 — ngày mùng 5'],
               ['号 dùng khi nói; văn viết dùng 日']]
  },
  '月': {
    collo: [['几月', 'tháng mấy'], ['五月', 'tháng năm'],
            ['六月十号', 'ngày mười tháng sáu'], ['今年五月', 'tháng năm năm nay']],
    patterns: [['số + 月 + số + 号', 'Thứ tự: lớn trước nhỏ sau — 六月十号'],
               ['Tiếng Trung nói năm → tháng → ngày, ngược với tiếng Việt']]
  },
  '日': {
    collo: [['五月一日', 'ngày 1 tháng 5'], ['星期日', 'chủ nhật'],
            ['几月几日', 'ngày mấy tháng mấy'], ['生日', 'sinh nhật']],
    patterns: [['số + 日', 'Ngày — dùng trong văn viết, giấy tờ'],
               ['日 (văn viết) ≠ 号 (khẩu ngữ) — cùng nghĩa là ngày']]
  },
  '星期': {
    collo: [['星期几', 'thứ mấy'], ['星期一', 'thứ hai'],
            ['星期三', 'thứ tư'], ['今天星期几', 'hôm nay thứ mấy']],
    patterns: [['星期 + số', 'Thứ trong tuần: 星期一 là THỨ HAI, không phải thứ nhất'],
               ['Chủ nhật gọi riêng là 星期日 hoặc 星期天, không đánh số']]
  },
  '星期日': {
    collo: [['今天星期日', 'hôm nay chủ nhật'], ['星期日休息', 'chủ nhật nghỉ'],
            ['这个星期日', 'chủ nhật này']],
    patterns: [['星期 + 日', 'Chủ nhật — cách nói thiên văn viết'],
               ['星期日 = 星期天, chỉ khác sắc thái trang trọng']]
  },
  '星期天': {
    collo: [['今天星期天', 'hôm nay chủ nhật'], ['星期天休息', 'chủ nhật nghỉ'],
            ['星期天做饭', 'chủ nhật nấu cơm']],
    patterns: [['星期 + 天', 'Chủ nhật — cách nói khẩu ngữ, hay dùng hơn'],
               ['星期天 nghe gần gũi; 星期日 nghe trang trọng']]
  },
  '休息': {
    collo: [['星期天休息', 'chủ nhật nghỉ'], ['想休息', 'muốn nghỉ'],
            ['不休息', 'không nghỉ'], ['在家休息', 'nghỉ ở nhà']],
    patterns: [['thời gian + 休息', 'Nghỉ vào lúc nào: 星期天休息'],
               ['休 = 亻 + 木', 'Người (亻) tựa vào gốc cây (木) — nghỉ ngơi']]
  },
  '会': {
    collo: [['会做饭', 'biết nấu ăn'], ['不会', 'không biết'],
            ['会做菜', 'biết nấu món ăn'], ['会说中文', 'biết nói tiếng Trung']],
    patterns: [['Sub + 会 + động từ', 'Biết làm gì nhờ học mà có: 我会做饭'],
               ['Phủ định là 不会, KHÔNG nói 没会']]
  },
  '做饭': {
    collo: [['会做饭', 'biết nấu ăn'], ['想做饭', 'muốn nấu ăn'],
            ['在家做饭', 'nấu ăn ở nhà'], ['不会做饭', 'không biết nấu ăn']],
    patterns: [['会 / 想 + 做饭', 'Biết nấu ăn, muốn nấu ăn'],
               ['做 + 饭', 'Làm (做) cơm (饭) — nấu ăn nói chung']]
  },
  '做': {
    collo: [['做饭', 'nấu ăn'], ['做菜', 'nấu món ăn'],
            ['做什么', 'làm gì'], ['会做', 'biết làm']],
    patterns: [['做 + danh từ', 'Làm việc gì: 做饭 · 做菜'],
               ['做 là làm ra một thứ gì đó, khác 工作 (đi làm việc)']]
  },
  '面条儿': {
    collo: [['做面条儿', 'làm mì'], ['吃面条儿', 'ăn mì'],
            ['一些面条儿', 'một ít mì'], ['好吃的面条儿', 'mì ngon']],
    patterns: [['做 / 吃 + 面条儿', 'Làm mì, ăn mì'],
               ['面 + 条 + 儿', 'Sợi (条) bột mì (面) — 儿 là đuôi uốn lưỡi']]
  },
  '饺子': {
    collo: [['做饺子', 'gói sủi cảo'], ['吃饺子', 'ăn sủi cảo'],
            ['一些饺子', 'một ít sủi cảo'], ['中国饺子', 'sủi cảo Trung Quốc']],
    patterns: [['做 / 吃 + 饺子', 'Gói sủi cảo, ăn sủi cảo'],
               ['饺子 là món người Trung Quốc hay làm vào dịp lễ']]
  },
  '一些': {
    collo: [['一些菜', 'một ít thức ăn'], ['一些饺子', 'một ít sủi cảo'],
            ['一些人', 'một vài người'], ['做一些', 'làm một ít']],
    patterns: [['一些 + danh từ', 'Một vài, một ít — thay cho số cụ thể'],
               ['些 đã mang nghĩa nhiều, nên KHÔNG thêm lượng từ nữa']]
  },
  '菜': {
    collo: [['做菜', 'nấu món ăn'], ['中国菜', 'món Trung Quốc'],
            ['一些菜', 'một ít thức ăn'], ['好吃的菜', 'món ngon']],
    patterns: [['做 + 菜', 'Nấu món ăn — dùng 做'],
               ['菜 vừa là rau, vừa là món ăn nói chung']]
  },
  '下班': {
    collo: [['下班休息', 'tan làm rồi nghỉ'], ['几点下班', 'mấy giờ tan làm'],
            ['下班做饭', 'tan làm về nấu cơm'], ['不下班', 'chưa tan làm']],
    patterns: [['下班 + động từ', 'Tan làm rồi làm gì: 下班做饭'],
               ['下班 (tan làm) ↔ 上班 (đi làm)']]
  },
  '新': {
    collo: [['新电脑', 'máy tính mới'], ['新同学', 'bạn học mới'],
            ['新老师', 'giáo viên mới'], ['很新', 'rất mới']],
    patterns: [['新 + danh từ', 'Cái gì mới: 新电脑'],
               ['新 + danh từ chỉ người', 'Cũng dùng được cho người: 新同学, 新老师']]
  },
  '电脑': {
    collo: [['新电脑', 'máy tính mới'], ['我的电脑', 'máy tính của tôi'],
            ['一个电脑', 'một cái máy tính'], ['他的电脑', 'máy tính của anh ấy']],
    patterns: [['新 + 电脑', 'Máy tính mới'],
               ['电 + 脑', 'Bộ óc (脑) chạy bằng điện (电)']]
  },
  '真': {
    collo: [['真好', 'tốt thật'], ['真好看', 'đẹp thật'],
            ['真忙', 'bận thật'], ['真高兴', 'vui thật']],
    patterns: [['真 + tính từ', 'Cảm thán, không cần 了: 真好看！'],
               ['真 (cảm thán) ≠ 很 (kể lại) — 真好看！/ 很好看。']]
  },
  '好看': {
    collo: [['真好看', 'đẹp thật'], ['很好看', 'rất đẹp'],
            ['不好看', 'không đẹp'], ['好看的电脑', 'cái máy tính đẹp']],
    patterns: [['真 / 很 + 好看', 'Đẹp — nói về vật, người, phim, sách'],
               ['好 + 看', 'Nhìn (看) thấy tốt (好) — cùng kiểu với 好吃']]
  },
  '喜欢': {
    collo: [['喜欢做饭', 'thích nấu ăn'], ['喜欢中国菜', 'thích món Trung Quốc'],
            ['很喜欢', 'rất thích'], ['不喜欢', 'không thích']],
    patterns: [['喜欢 + danh từ / động từ', 'Thích cái gì, thích làm gì'],
               ['喜 + 欢', 'Hai chữ đều mang nghĩa vui thích']]
  },
  '它': {
    collo: [['喜欢它', 'thích nó'], ['它是', 'nó là'], ['它的名字', 'tên của nó']],
    patterns: [['它 thay cho ĐỒ VẬT hoặc con vật, không thay cho người'],
               ['他 (nam) · 她 (nữ) · 它 (vật) — ba chữ đọc giống nhau là tā']]
  }
};
