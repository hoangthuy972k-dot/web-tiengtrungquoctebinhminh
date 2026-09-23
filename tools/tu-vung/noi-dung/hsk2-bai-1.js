// Noi dung TU MOI HSK2 (bo cu) bai 1 (chu de: du lich, the thao, do vat).
module.exports = {
  '旅游': {
    collo: [['去旅游', 'đi du lịch'], ['去北京旅游', 'đi Bắc Kinh du lịch'],
            ['喜欢旅游', 'thích du lịch'], ['旅游的时候', 'lúc đi du lịch']],
    patterns: [['去 + nơi chốn + 旅游', 'Đi đâu du lịch: 去中国旅游'],
               ['旅 + 游', 'Đi xa (旅) và ngao du (游)']]
  },
  '觉得': {
    collo: [['觉得很好', 'thấy rất tốt'], ['觉得好吃', 'thấy ngon'],
            ['我觉得', 'tôi thấy rằng'], ['不觉得', 'không thấy']],
    patterns: [['Sub + 觉得 + mệnh đề', 'Ai đó cảm thấy …: 我觉得很好'],
               ['觉得 dùng để nêu cảm nhận, ý kiến của mình']]
  },
  '最': {
    collo: [['最好', 'tốt nhất'], ['最喜欢', 'thích nhất'],
            ['最大', 'lớn nhất'], ['最新的', 'mới nhất']],
    patterns: [['最 + tính từ / động từ', 'Nhất — mức cao nhất: 我最喜欢旅游'],
               ['很 < 最 — 最 là mức cao nhất, không thêm 很']]
  },
  '为什么': {
    collo: [['为什么不去', 'sao không đi'], ['为什么不来', 'sao không đến'],
            ['为什么喜欢', 'sao lại thích'], ['你为什么', 'sao bạn lại']],
    patterns: [['为什么 + động từ', 'Vì sao lại …: 你为什么不去？'],
               ['Câu đã có 为什么 thì KHÔNG thêm 吗']]
  },
  '也': {
    collo: [['也是', 'cũng là'], ['也去', 'cũng đi'],
            ['也很好', 'cũng rất tốt'], ['也喜欢', 'cũng thích']],
    patterns: [['Sub + 也 + động từ / tính từ', '也 đứng SAU chủ ngữ, TRƯỚC động từ'],
               ['✗ 也我去 → ✓ 我也去']]
  },
  '运动': {
    collo: [['喜欢运动', 'thích vận động'], ['做运动', 'tập thể thao'],
            ['运动的时候', 'lúc vận động'], ['每天运动', 'ngày nào cũng tập']],
    patterns: [['喜欢 / 做 + 运动', 'Thích vận động, tập thể thao'],
               ['运 + 动', 'Chuyển (运) động (动) — vận động cơ thể']]
  },
  '踢': {
    collo: [['踢足球', 'đá bóng'], ['喜欢踢', 'thích đá'],
            ['去踢球', 'đi đá bóng'], ['不会踢', 'không biết đá']],
    patterns: [['踢 + 足球', 'Đá bóng — môn dùng CHÂN thì dùng 踢'],
               ['踢 có bộ 足 (chân) bên trái — đá bằng chân']]
  },
  '足球': {
    collo: [['踢足球', 'đá bóng'], ['看足球', 'xem bóng đá'],
            ['一个足球', 'một quả bóng đá'], ['喜欢足球', 'thích bóng đá']],
    patterns: [['踢 + 足球', 'Đá bóng — dùng chân nên đi với 踢'],
               ['足 + 球', 'Quả bóng (球) đá bằng chân (足)']]
  },
  '一起': {
    collo: [['一起去', 'cùng đi'], ['和我一起', 'cùng với tôi'],
            ['一起运动', 'cùng tập thể thao'], ['一起吃饭', 'cùng ăn cơm']],
    patterns: [['和 + ai + 一起 + động từ', 'Cùng ai làm gì: 和我一起去'],
               ['一起 đứng TRƯỚC động từ, không đứng cuối câu']]
  },
  '要': {
    collo: [['要去', 'định đi'], ['要一个', 'lấy một cái'],
            ['不要', 'không cần'], ['要买', 'định mua']],
    patterns: [['要 + động từ', 'Định làm gì: 我要去旅游'],
               ['要 + danh từ', 'Cần, lấy cái gì: 我要一个椅子']]
  },
  '新': {
    collo: [['新椅子', 'cái ghế mới'], ['新同学', 'bạn học mới'],
            ['新的', 'cái mới'], ['很新', 'rất mới']],
    patterns: [['新 + danh từ', 'Cái gì mới: 新椅子'],
               ['新 cũng dùng cho người: 新同学 · 新老师']]
  },
  '椅子': {
    collo: [['一个椅子', 'một cái ghế'], ['买椅子', 'mua ghế'],
            ['椅子上', 'trên ghế'], ['新椅子', 'cái ghế mới']],
    patterns: [['một + 个 + 椅子', 'Lượng từ của 椅子 là 个'],
               ['椅 + 子', '子 là đuôi từ đọc nhẹ, giống 桌子 · 杯子']]
  },
  '它': {
    collo: [['喜欢它', 'thích nó'], ['它是', 'nó là'],
            ['它的名字', 'tên của nó'], ['给它', 'cho nó']],
    patterns: [['它 thay cho ĐỒ VẬT hoặc con vật, không thay cho người'],
               ['他 (nam) · 她 (nữ) · 它 (vật) — ba chữ đọc giống nhau là tā']]
  },
  '眼睛': {
    collo: [['大眼睛', 'đôi mắt to'], ['漂亮的眼睛', 'đôi mắt đẹp'],
            ['她的眼睛', 'đôi mắt cô ấy'], ['眼睛不舒服', 'mắt khó chịu']],
    patterns: [['ai + 的 + 眼睛', 'Đôi mắt của ai'],
               ['眼 + 睛', 'Hai chữ đều có bộ 目 (mắt)']]
  }
};
