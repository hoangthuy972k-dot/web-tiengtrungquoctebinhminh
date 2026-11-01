// Noi dung TU MOI HSK2 3.0 bai 12 (chu de: thoi tiet, ky uc tuoi tho, tau dien ngam).
module.exports = {
  '事情': {
    collo: [['一件事情', 'một chuyện'], ['有事情', 'có việc'],
            ['什么事情', 'chuyện gì'], ['很多事情', 'rất nhiều việc']],
    patterns: [['một + 件 + 事情', 'Lượng từ của 事情 là 件'],
               ['事情 = 事 — 事情 đầy đủ hơn, 事 ngắn gọn hơn']]
  },
  '晴': {
    collo: [['晴天', 'trời nắng'], ['天晴了', 'trời hửng nắng rồi'],
            ['晴天的时候', 'lúc trời nắng đẹp'], ['一个晴天', 'một ngày nắng đẹp']],
    patterns: [['晴 + 天', 'Trời nắng — 晴天 là một ngày đẹp trời'],
               ['晴 ↔ 阴', 'Trời nắng ↔ trời âm u']]
  },
  '正': {
    collo: [['正在上课', 'đang trong tiết học'], ['正下雨', 'đang mưa'],
            ['正吃饭', 'đang ăn cơm'], ['正说话', 'đang nói chuyện']],
    patterns: [['正 + động từ', 'Đang làm gì ngay lúc này'],
               ['正 = 正在 — 正 ngắn gọn hơn, hay dùng khi nói']]
  },
  '外面': {
    collo: [['在外面', 'ở bên ngoài'], ['外面的人', 'người bên ngoài'],
            ['去外面', 'ra bên ngoài'], ['房间外面', 'ngoài phòng']],
    patterns: [['danh từ + 外面', 'Bên ngoài cái gì: 房间外面'],
               ['外面 ↔ 里面', 'Ngoài ↔ trong']]
  },
  '阴': {
    collo: [['阴天', 'trời âm u'], ['天阴了', 'trời âm u rồi'],
            ['阴天的时候', 'lúc trời âm u'], ['一个阴天', 'một ngày âm u']],
    patterns: [['阴 + 天', 'Trời âm u — nhiều mây, không có nắng'],
               ['阴 ↔ 晴', 'Trời âm u ↔ trời nắng']]
  },
  '从小': {
    collo: [['从小就喜欢', 'từ nhỏ đã thích'], ['从小在北京', 'từ nhỏ ở Bắc Kinh'],
            ['从小学汉语', 'học tiếng Trung từ nhỏ'], ['从小到大', 'từ bé đến lớn']],
    patterns: [['从小 + 就 + động từ', 'Từ nhỏ đã …: 我从小就喜欢画画儿'],
               ['从小 hay đi cùng 就 để nhấn ý đã như thế từ lâu']]
  },
  '地铁': {
    collo: [['坐地铁', 'đi tàu điện ngầm'], ['地铁站', 'ga tàu điện ngầm'],
            ['地铁上', 'trên tàu điện ngầm'], ['坐地铁去', 'đi tàu điện ngầm đến']],
    patterns: [['坐 + 地铁', 'Đi tàu điện ngầm — dùng 坐'],
               ['地 + 铁', 'Đường sắt (铁) dưới lòng đất (地)']]
  },
  '楼': {
    collo: [['楼上', 'trên lầu'], ['楼下', 'dưới lầu'],
            ['一楼', 'tầng một'], ['这个楼', 'toà nhà này']],
    patterns: [['số + 楼', 'Tầng mấy: 三楼 — tầng ba'],
               ['楼上 ↔ 楼下', 'Trên lầu ↔ dưới lầu']]
  },
  '站': {
    collo: [['地铁站', 'ga tàu điện ngầm'], ['车站', 'bến xe'],
            ['站在门口', 'đứng ở cổng'], ['别站着', 'đừng đứng']],
    patterns: [['站 + 在 + nơi chốn', 'Đứng ở đâu: 他站在门口'],
               ['站 (đứng, động từ) và 站 (bến, ga — danh từ) — cùng chữ']]
  },
  '小时候': {
    collo: [['小时候的事情', 'chuyện hồi nhỏ'], ['小时候住在西安', 'hồi nhỏ sống ở Tây An'],
            ['我小时候', 'hồi tôi còn nhỏ'], ['小时候的朋友', 'bạn hồi nhỏ']],
    patterns: [['ai + 小时候 + …', 'Hồi ai đó còn nhỏ: 我小时候住在西安'],
               ['小时候 (hồi nhỏ) khác 小时 (tiếng đồng hồ) — chỉ khác một chữ']]
  },
  '好': {
    collo: [['准备好', 'chuẩn bị xong'], ['做好', 'làm xong'],
            ['写好', 'viết xong'], ['说好了', 'đã hẹn xong']],
    patterns: [['động từ + 好', 'Làm xong và làm tốt việc gì: 准备好了'],
               ['好 ở đây là KẾT QUẢ, khác 好 là "tốt"']]
  }
};
