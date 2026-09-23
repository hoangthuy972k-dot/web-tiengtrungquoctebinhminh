// Noi dung TU MOI HSK3 bai 12 (chu de: san bay, hanh ly, lop hoc ve).
module.exports = {
  '太阳': {
    collo: [['太阳出来了', 'mặt trời lên rồi'], ['晒太阳', 'phơi nắng'],
            ['太阳很大', 'nắng rất to'], ['太阳从东边出来', 'mặt trời mọc đằng đông'],
            ['太阳下山了', 'mặt trời lặn rồi']],
    patterns: [['太阳 + 出来 / 下山 + 了', 'Mặt trời mọc / lặn'],
               ['太 + 阳', 'Vầng dương (阳) lớn nhất (太)']]
  },
  '西': {
    collo: [['西边', 'phía tây'], ['西门', 'cổng tây'],
            ['从西边来', 'từ phía tây tới'], ['往西走', 'đi về phía tây'],
            ['西边的房子', 'ngôi nhà phía tây']],
    patterns: [['往 + 西 + 走', 'Đi về phía tây'],
               ['东 · 西 · 南 · 北 — bốn hướng; 南方 北方 là từ bài 1']]
  },
  '生气': {
    collo: [['很生气', 'rất tức giận'], ['别生气', 'đừng giận'],
            ['生我的气', 'giận tôi'], ['生了半天气', 'giận cả buổi'],
            ['经理生气了', 'giám đốc giận rồi']],
    patterns: [['生 + ai + 的气', '生气 là từ ly hợp: 生我的气 ✓ / 生气我 ✗'],
               ['别 + 生气', 'Đừng giận — lời làm lành']]
  },
  '行李箱': {
    collo: [['一个行李箱', 'một cái vali'], ['拿行李箱', 'xách vali'],
            ['放到行李箱里', 'cho vào vali'], ['行李箱很重', 'vali rất nặng'],
            ['打开行李箱', 'mở vali']],
    patterns: [['把 + N + 放到 + 行李箱 + 里', 'Cho cái gì vào vali'],
               ['行李 + 箱', 'Hòm (箱) đựng hành lý (行李)']]
  },
  '自己': {
    collo: [['自己去', 'tự đi'], ['自己做', 'tự làm'],
            ['自己的东西', 'đồ của mình'], ['照顾自己', 'tự chăm sóc mình'],
            ['让他自己来', 'để cậu ấy tự làm']],
    patterns: [['Sub + 自己 + V', 'Ai đó tự làm gì'],
               ['自己的 + N', 'Của chính mình']]
  },
  '包': {
    collo: [['一个包', 'một cái túi'], ['放在包里', 'để trong túi'],
            ['我的包', 'túi của tôi'], ['背包', 'balo'],
            ['包很重', 'túi rất nặng']],
    patterns: [['把 + N + 放在 + 包 + 里', 'Để cái gì trong túi'],
               ['包 (cái túi) ≠ 包子 (bánh bao)']]
  },
  '发现': {
    collo: [['才发现', 'lúc đó mới phát hiện'], ['发现问题', 'phát hiện vấn đề'],
            ['没有发现', 'không phát hiện'], ['突然发现', 'bỗng phát hiện'],
            ['发现忘带了', 'phát hiện quên mang']],
    patterns: [['才 + 发现', 'Mãi mới phát hiện — 才 nhấn việc muộn hơn mong đợi'],
               ['发现 (nhận ra điều chưa biết) ≠ 找到 (tìm ra vật)']]
  },
  '护照': {
    collo: [['带护照', 'mang hộ chiếu'], ['办护照', 'làm hộ chiếu'],
            ['忘带护照', 'quên mang hộ chiếu'], ['护照在包里', 'hộ chiếu trong túi'],
            ['护照号码', 'số hộ chiếu']],
    patterns: [['带 + 护照', 'Mang hộ chiếu — 带 là từ bài 1'],
               ['护 + 照', 'Giấy chứng (照) bảo hộ (护)']]
  },
  '起飞': {
    collo: [['飞机起飞', 'máy bay cất cánh'], ['就要起飞了', 'sắp cất cánh rồi'],
            ['马上起飞', 'cất cánh ngay'], ['起飞时间', 'giờ cất cánh'],
            ['准时起飞', 'cất cánh đúng giờ']],
    patterns: [['就要 + 起飞 + 了', 'Sắp cất cánh rồi'],
               ['起 + 飞', 'Bắt đầu (起) bay (飞)']]
  },
  '司机': {
    collo: [['出租车司机', 'tài xế taxi'], ['当司机', 'làm tài xế'],
            ['问司机', 'hỏi tài xế'], ['司机送我', 'tài xế chở tôi'],
            ['好司机', 'tài xế giỏi']],
    patterns: [['当 + 司机', 'Làm nghề lái xe'],
               ['司 + 机', 'Người điều khiển (司) máy móc (机)']]
  },
  '教': {
    collo: [['教学生', 'dạy học sinh'], ['教汉语', 'dạy tiếng Trung'],
            ['教画画儿', 'dạy vẽ'], ['教了十年', 'dạy mười năm rồi'],
            ['教我们数学', 'dạy chúng tôi môn Toán']],
    patterns: [['教 + ai + N', 'Dạy ai môn gì — có thể mang hai tân ngữ'],
               ['教 (jiāo, dạy) ≠ 教室 (jiàoshì) — hai âm khác nhau']]
  },
  '画': {
    collo: [['画画儿', 'vẽ tranh'], ['一张画', 'một bức tranh'],
            ['画得好', 'vẽ đẹp'], ['学画画儿', 'học vẽ'],
            ['画在纸上', 'vẽ lên giấy']],
    patterns: [['画 + 画儿', 'Vẽ tranh — động từ và danh từ cùng chữ'],
               ['một + 张 + 画', 'Lượng từ 张 cho vật phẳng mỏng']]
  },
  '需要': {
    collo: [['需要带', 'cần mang'], ['需要休息', 'cần nghỉ ngơi'],
            ['不需要', 'không cần'], ['需要帮忙吗', 'cần giúp không'],
            ['需要多长时间', 'cần bao lâu']],
    patterns: [['需要 + V / N', 'Cần làm gì, cần cái gì'],
               ['需要 (cần khách quan) ≠ 想 (muốn chủ quan)']]
  },
  '黑板': {
    collo: [['黑板上', 'trên bảng'], ['写在黑板上', 'viết lên bảng'],
            ['擦黑板', 'lau bảng'], ['看黑板', 'nhìn lên bảng'],
            ['黑板很大', 'bảng rất rộng']],
    patterns: [['把 + N + 写在 + 黑板 + 上', 'Viết cái gì lên bảng'],
               ['黑 + 板', 'Tấm ván (板) màu đen (黑)']]
  }
};
