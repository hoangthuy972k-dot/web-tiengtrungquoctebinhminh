// Noi dung TU MOI HSK3 bai 19 (chu de: ta nguoi, mua thu, di thuyen tren song).
module.exports = {
  '耳朵': {
    collo: [['耳朵很大', 'tai rất to'], ['大耳朵', 'tai to'],
            ['耳朵不舒服', 'tai khó chịu'], ['耳朵像爸爸', 'tai giống bố'],
            ['两只耳朵', 'hai cái tai']],
    patterns: [['bộ phận + 像 + ai', 'Bộ phận nào giống ai — 像 là từ bài 14'],
               ['两 + 只 + 耳朵', 'Lượng từ 只 (bài 18) dùng cho bộ phận đi thành đôi']]
  },
  '脸': {
    collo: [['洗脸', 'rửa mặt'], ['脸红了', 'mặt đỏ lên'],
            ['圆圆的脸', 'khuôn mặt tròn trịa'], ['脸小小的', 'mặt nho nhỏ'],
            ['脸上', 'trên mặt']],
    patterns: [['洗 + 脸', 'Rửa mặt — đi cặp với 刷牙 (bài 16)'],
               ['Adj + Adj + 的', 'Dạng lặp tính từ: 圆圆的, 小小的 — nghe mềm hơn']]
  },
  '短': {
    collo: [['短头发', 'tóc ngắn'], ['时间很短', 'thời gian rất ngắn'],
            ['短一点儿', 'ngắn hơn chút'], ['冬天很短', 'mùa đông rất ngắn'],
            ['短短的', 'ngăn ngắn']],
    patterns: [['短 ↔ 长', 'Ngắn ↔ dài — 头发很短 / 头发很长 (bài 16)'],
               ['Adj + 一点儿', 'So sánh nhẹ: ngắn hơn chút']]
  },
  '马': {
    collo: [['骑马去', 'cưỡi ngựa đi'], ['骑马', 'cưỡi ngựa'],
            ['白马', 'ngựa trắng'], ['马跑得很快', 'ngựa chạy rất nhanh'],
            ['马的耳朵', 'tai ngựa']],
    patterns: [['骑 + 马', 'Cưỡi ngựa — dùng 骑 như 骑自行车'],
               ['马 là chữ tượng hình: nét cong là bờm và bốn chân ngựa']]
  },
  '张': {
    collo: [['一张照片', 'một tấm ảnh'], ['一张地图', 'một tấm bản đồ'],
            ['一张桌子', 'một cái bàn'], ['一张菜单', 'một tờ thực đơn'],
            ['那张地图', 'tấm bản đồ đó']],
    patterns: [['số + 张 + vật mặt phẳng', 'Lượng từ 张: 照片, 纸, 桌子, 菜单 (bài 14)'],
               ['张 (lượng từ) — cũng là một họ người Trung Quốc: 张老师']]
  },
  '位': {
    collo: [['一位老师', 'một vị giáo viên'], ['这位画家', 'vị hoạ sĩ này'],
            ['几位客人', 'mấy vị khách'], ['那位阿姨', 'vị cô kia'],
            ['两位校长', 'hai vị hiệu trưởng']],
    patterns: [['số + 位 + người (kính trọng)', 'Lượng từ 位 trang trọng hơn 个'],
               ['✗ 一位小狗 → 位 chỉ dùng cho NGƯỜI, và có ý kính trọng']]
  },
  '蓝': {
    collo: [['蓝色', 'màu xanh da trời'], ['蓝天', 'trời xanh'],
            ['蓝色的裙子', 'chiếc váy xanh'], ['蓝蓝的', 'xanh biếc'],
            ['又蓝又干净', 'vừa xanh vừa sạch']],
    patterns: [['蓝 + 色 + 的 + N', 'Cái gì màu xanh da trời'],
               ['又 A 又 B', 'Vừa A vừa B — 又蓝又干净 (干净 là từ bài 14)']]
  },
  '秋(天)': {
    collo: [['秋天很美', 'mùa thu rất đẹp'], ['今年秋天', 'mùa thu năm nay'],
            ['秋天的黄河', 'Hoàng Hà mùa thu'], ['过秋天', 'trải qua mùa thu'],
            ['秋天不冷不热', 'mùa thu không lạnh không nóng']],
    patterns: [['春 · 夏 · 秋 · 冬 — bốn mùa đều thêm 天 (冬天 học ở bài 17)'],
               ['不 A 不 B', 'Không A cũng không B: 不冷不热 — vừa phải']]
  },
  '过': {
    collo: [['过生日', 'mừng sinh nhật'], ['过节日', 'ăn mừng ngày lễ'],
            ['过得很好', 'sống rất tốt'], ['过冬天', 'trải qua mùa đông'],
            ['过一个星期', 'qua một tuần']],
    patterns: [['过 + 生日 / 节日 (động từ)', 'Mừng, đón một dịp — 节日 là từ bài 15'],
               ['过 (guò, động từ: trải qua) ≠ 过 (guo, trợ từ: đã từng) — 我去过北京']]
  },
  '鸟': {
    collo: [['一只鸟', 'một con chim'], ['小鸟', 'chim nhỏ'],
            ['鸟的声音', 'tiếng chim'], ['看见很多鸟', 'nhìn thấy nhiều chim'],
            ['很多小鸟', 'rất nhiều chim nhỏ']],
    patterns: [['một + 只 + 鸟', 'Lượng từ 只 (bài 18) cho động vật nhỏ'],
               ['鸟 là chữ tượng hình: bốn chấm dưới là đuôi chim']]
  },
  '哭': {
    collo: [['哭起来', 'khóc oà lên'], ['别哭了', 'đừng khóc nữa'],
            ['哭了很长时间', 'khóc rất lâu'], ['孩子哭了', 'đứa bé khóc'],
            ['又哭又笑', 'vừa khóc vừa cười']],
    patterns: [['哭 + 起来', 'Bắt đầu khóc — 起来 là từ bài 13'],
               ['哭 ↔ 笑', 'Khóc ↔ cười']]
  },
  '黄河': {
    collo: [['黄河边', 'bên bờ Hoàng Hà'], ['黄河的水', 'nước sông Hoàng Hà'],
            ['坐船看黄河', 'đi thuyền ngắm Hoàng Hà'], ['秋天的黄河', 'Hoàng Hà mùa thu'],
            ['去黄河旅游', 'đi du lịch Hoàng Hà']],
    patterns: [['黄河 + 边', 'Bên bờ Hoàng Hà — 边 chỉ vị trí'],
               ['黄 + 河', 'Sông (河) màu vàng (黄) — vì nhiều phù sa']]
  },
  '船': {
    collo: [['坐船', 'đi thuyền'], ['一条船', 'một chiếc thuyền'],
            ['上船', 'lên thuyền'], ['船上', 'trên thuyền'],
            ['坐船去', 'đi bằng thuyền']],
    patterns: [['坐 + 船 / 车 / 飞机', 'Đi bằng phương tiện nào'],
               ['một + 条 + 船', 'Lượng từ 条 cho vật dài — như 一条街道 (bài 15)']]
  },
  '经过': {
    collo: [['经过一个公园', 'đi ngang một công viên'], ['经过学校', 'đi qua trường'],
            ['每天都经过', 'ngày nào cũng đi qua'], ['经过这里', 'đi qua đây'],
            ['经过的时候', 'lúc đi ngang qua']],
    patterns: [['经过 + nơi chốn', 'Đi ngang qua đâu — sau 经过 là NƠI CHỐN'],
               ['经过 (đi ngang qua) ≠ 过 (trải qua một dịp)']]
  }
};
