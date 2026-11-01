// Noi dung TU MOI HSK3 bai 11 (chu de: thu vien, do dung, thoi quen).
module.exports = {
  '图书馆': {
    collo: [['去图书馆', 'đi thư viện'], ['在图书馆看书', 'đọc sách ở thư viện'],
            ['图书馆借书', 'mượn sách ở thư viện'], ['学校图书馆', 'thư viện trường'],
            ['图书馆很安静', 'thư viện rất yên tĩnh']],
    patterns: [['在 + 图书馆 + V', 'Làm gì ở thư viện'],
               ['图书 + 馆', 'Nhà (馆) chứa sách (图书)']]
  },
  '借': {
    collo: [['借书', 'mượn sách'], ['借钱', 'vay tiền'],
            ['借给他', 'cho anh ấy mượn'], ['跟他借', 'mượn của anh ấy'],
            ['借一下', 'mượn một chút']],
    patterns: [['跟 + ai + 借 + N', 'Mượn của ai cái gì'],
               ['借给 + ai + N', 'Cho ai mượn — 借 vừa là mượn vừa là cho mượn']]
  },
  '词典': {
    collo: [['一本词典', 'một quyển từ điển'], ['借词典', 'mượn từ điển'],
            ['查词典', 'tra từ điển'], ['还词典', 'trả từ điển'],
            ['汉语词典', 'từ điển tiếng Trung']],
    patterns: [['một + 本 + 词典', 'Lượng từ 本 cho sách vở'],
               ['查 + 词典', 'Tra từ điển']]
  },
  '还': {
    collo: [['还书', 'trả sách'], ['还钱', 'trả tiền'],
            ['把书还了', 'trả sách rồi'], ['还给他', 'trả lại cho anh ấy'],
            ['忘了还', 'quên trả']],
    patterns: [['把 + N + 还给 + ai', 'Trả lại cái gì cho ai'],
               ['还 (huán, trả) ≠ 还 (hái, vẫn còn) — cùng chữ, khác âm']]
  },
  '灯': {
    collo: [['开灯', 'bật đèn'], ['关灯', 'tắt đèn'],
            ['一盏灯', 'một ngọn đèn'], ['灯很亮', 'đèn rất sáng'],
            ['忘了关灯', 'quên tắt đèn']],
    patterns: [['开 / 关 + 灯', 'Bật / tắt đèn'],
               ['开 ↔ 关', 'Mở, bật ↔ đóng, tắt']]
  },
  '会议': {
    collo: [['开会议', 'họp'], ['参加会议', 'dự họp'],
            ['会议结束', 'cuộc họp kết thúc'], ['会议室', 'phòng họp'],
            ['会议什么时候开始', 'cuộc họp bắt đầu khi nào']],
    patterns: [['参加 + 会议', 'Dự cuộc họp — 参加 là từ bài 9'],
               ['会 + 议', 'Họp (会) bàn (议)']]
  },
  '结束': {
    collo: [['会议结束', 'cuộc họp kết thúc'], ['结束了', 'kết thúc rồi'],
            ['还没结束', 'vẫn chưa xong'], ['电影结束', 'phim hết rồi'],
            ['工作结束以后', 'sau khi làm việc xong']],
    patterns: [['N + 结束 + 了', 'Việc gì đó đã kết thúc'],
               ['结束 ↔ 开始', 'Kết thúc ↔ bắt đầu']]
  },
  '忘记': {
    collo: [['别忘记', 'đừng quên'], ['忘记了', 'quên mất rồi'],
            ['把……忘了', 'quên mất cái gì'], ['忘记带', 'quên mang'],
            ['忘记了名字', 'quên mất tên']],
    patterns: [['把 + N + 忘了', 'Quên mất cái gì — câu chữ 把'],
               ['忘记 ≈ 忘', '忘记 đầy đủ hơn, 忘 thiên khẩu ngữ']]
  },
  '空调': {
    collo: [['开空调', 'bật điều hoà'], ['关空调', 'tắt điều hoà'],
            ['空调坏了', 'điều hoà hỏng rồi'], ['空调很凉快', 'điều hoà rất mát'],
            ['房间有空调', 'phòng có điều hoà']],
    patterns: [['开 / 关 + 空调', 'Bật / tắt điều hoà'],
               ['空 + 调', 'Điều (调) hoà không khí (空)']]
  },
  '关': {
    collo: [['关灯', 'tắt đèn'], ['关门', 'đóng cửa'],
            ['关空调', 'tắt điều hoà'], ['关手机', 'tắt điện thoại'],
            ['把门关了', 'đóng cửa lại rồi']],
    patterns: [['把 + N + 关了', 'Tắt, đóng cái gì — câu chữ 把'],
               ['关 ↔ 开', 'Tắt, đóng ↔ bật, mở']]
  },
  '地铁': {
    collo: [['坐地铁', 'đi tàu điện ngầm'], ['地铁站', 'ga tàu điện ngầm'],
            ['地铁上', 'trên tàu điện'], ['地铁很快', 'tàu điện rất nhanh'],
            ['换地铁', 'đổi tuyến tàu điện']],
    patterns: [['坐 + 地铁', 'Đi tàu điện ngầm — dùng 坐, không dùng 骑'],
               ['地 + 铁', 'Đường sắt (铁) dưới đất (地)']]
  },
  '双': {
    collo: [['一双筷子', 'một đôi đũa'], ['一双鞋', 'một đôi giày'],
            ['两双', 'hai đôi'], ['一双手', 'một đôi tay'],
            ['一双手', 'đôi bàn tay']],
    patterns: [['số + 双 + vật đi thành đôi', 'Lượng từ 双: 筷子, 鞋, 手 — vật luôn có đôi'],
               ['双 (đôi có hai cái giống nhau) ≠ 副 (bộ, như 一副眼镜)']]
  },
  '筷子': {
    collo: [['一双筷子', 'một đôi đũa'], ['用筷子', 'dùng đũa'],
            ['拿筷子', 'cầm đũa'], ['学用筷子', 'học dùng đũa'],
            ['筷子和勺子', 'đũa và thìa']],
    patterns: [['用 + 筷子 + V', 'Dùng đũa để làm gì'],
               ['一 + 双 + 筷子', 'Đũa luôn đi thành đôi']]
  },
  '啤酒': {
    collo: [['喝啤酒', 'uống bia'], ['一瓶啤酒', 'một chai bia'],
            ['买啤酒', 'mua bia'], ['冰啤酒', 'bia lạnh'],
            ['不能喝啤酒', 'không uống được bia']],
    patterns: [['một + 瓶 + 啤酒', 'Lượng từ 瓶 cho chai'],
               ['啤 + 酒', 'Rượu (酒) bia — 啤 là dịch âm của "beer"']]
  },
  '口': {
    collo: [['一口水', 'một ngụm nước'], ['喝一口', 'uống một ngụm'],
            ['吃一口', 'ăn một miếng'], ['尝一口', 'nếm một miếng'],
            ['一口就喝完了', 'một ngụm là hết']],
    patterns: [['V + 一口', 'Làm gì một ngụm, một miếng'],
               ['口 (ngụm, miếng) — lượng từ cho lượng vào miệng một lần']]
  },
  '瓶子': {
    collo: [['一个瓶子', 'một cái chai'], ['空瓶子', 'chai rỗng'],
            ['酒瓶子', 'chai rượu'], ['打开瓶子', 'mở chai'],
            ['瓶子里', 'trong chai']],
    patterns: [['瓶子 (cái chai) ≠ 瓶 (lượng từ): 一个瓶子 / 一瓶水'],
               ['打开 + 瓶子', 'Mở nắp chai']]
  },
  '笔记本(电脑)': {
    collo: [['一个笔记本电脑', 'một cái laptop'], ['买笔记本电脑', 'mua laptop'],
            ['换笔记本电脑', 'đổi laptop'], ['用笔记本电脑', 'dùng laptop'],
            ['笔记本电脑很贵', 'laptop rất đắt']],
    patterns: [['笔记本 (sổ tay) + 电脑 = laptop', 'Máy tính mỏng như quyển sổ'],
               ['用 + 笔记本电脑 + V', 'Dùng laptop để làm gì']]
  },
  '电子邮件': {
    collo: [['发电子邮件', 'gửi email'], ['收电子邮件', 'nhận email'],
            ['看电子邮件', 'xem email'], ['收到电子邮件', 'nhận được email'],
            ['电子邮件地址', 'địa chỉ email']],
    patterns: [['发 / 收 + 电子邮件', 'Gửi / nhận email'],
               ['电子 + 邮件', 'Thư từ (邮件) điện tử (电子)']]
  },
  '习惯': {
    collo: [['好习惯', 'thói quen tốt'], ['习惯用', 'quen dùng'],
            ['还没习惯', 'vẫn chưa quen'], ['生活习惯', 'thói quen sinh hoạt'],
            ['养成习惯', 'hình thành thói quen']],
    patterns: [['Sub + 习惯 + V (động từ)', 'Ai đó quen làm gì'],
               ['好 / 坏 + 习惯 (danh từ)', 'Thói quen tốt / xấu']]
  }
};
