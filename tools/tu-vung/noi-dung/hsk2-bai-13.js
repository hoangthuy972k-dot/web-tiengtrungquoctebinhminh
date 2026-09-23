// Noi dung TU MOI HSK2 (bo cu) bai 13 (chu de: ta nguoi, chi duong).
module.exports = {
  '着': {
    collo: [['拿着', 'đang cầm'], ['开着', 'đang mở'],
            ['坐着看', 'ngồi xem'], ['穿着白衣服', 'đang mặc áo trắng']],
    patterns: [['động từ + 着', 'Trạng thái đang duy trì: 门开着'],
               ['着 (trạng thái kéo dài) ≠ 正在 (việc đang diễn ra)']]
  },
  '手': {
    collo: [['洗手', 'rửa tay'], ['手里', 'trong tay'],
            ['手里拿着', 'trong tay cầm'], ['两只手', 'hai bàn tay']],
    patterns: [['手 + 里', 'Trong tay: 手里拿着铅笔'],
               ['手 là chữ tượng hình — vẽ bàn tay năm ngón']]
  },
  '拿': {
    collo: [['拿书', 'cầm sách'], ['拿着铅笔', 'cầm bút chì'],
            ['帮我拿', 'cầm giúp tôi'], ['拿一下', 'cầm một chút']],
    patterns: [['拿 + 着 + đồ vật', 'Đang cầm cái gì: 手里拿着书'],
               ['拿 có bộ 手 ở dưới — cầm bằng tay']]
  },
  '铅笔': {
    collo: [['一支铅笔', 'một cây bút chì'], ['用铅笔写', 'viết bằng bút chì'],
            ['拿着铅笔', 'cầm bút chì'], ['我的铅笔', 'bút chì của tôi']],
    patterns: [['một + 支 + 铅笔', 'Lượng từ của 铅笔 là 支'],
               ['铅 + 笔', 'Cây bút (笔) có ruột chì (铅)']]
  },
  '班': {
    collo: [['我们班', 'lớp chúng tôi'], ['一个班', 'một lớp'],
            ['班里', 'trong lớp'], ['同班同学', 'bạn cùng lớp']],
    patterns: [['ai + 班', 'Lớp của ai: 我们班'],
               ['班 (tập thể lớp) ≠ 教室 (căn phòng học)']]
  },
  '长': {
    collo: [['长得很高', 'người cao'], ['长着大眼睛', 'có đôi mắt to'],
            ['长大', 'lớn lên'], ['长得很快', 'lớn rất nhanh']],
    patterns: [['长 + 得 + tính từ', 'Trông như thế nào: 她长得很漂亮'],
               ['长 zhǎng (lớn lên) ≠ 长 cháng (dài) — một chữ, hai âm']]
  },
  '笑': {
    collo: [['爱笑', 'hay cười'], ['笑了', 'cười rồi'],
            ['笑着说', 'vừa cười vừa nói'], ['笑得很快乐', 'cười rất vui']],
    patterns: [['笑 + 着 + động từ', 'Vừa cười vừa làm gì: 笑着说'],
               ['爱笑 — hay cười, là nét tính cách']]
  },
  '宾馆': {
    collo: [['住宾馆', 'ở khách sạn'], ['一个宾馆', 'một khách sạn'],
            ['宾馆的服务员', 'nhân viên khách sạn'], ['到宾馆', 'đến khách sạn']],
    patterns: [['住 + 宾馆', 'Ở khách sạn'],
               ['宾 + 馆', 'Toà nhà (馆) đón khách (宾)']]
  },
  '一直': {
    collo: [['一直走', 'đi thẳng'], ['一直等', 'chờ mãi'],
            ['一直在家', 'luôn ở nhà'], ['一直往前', 'thẳng về phía trước']],
    patterns: [['一直 + động từ', 'Đi thẳng, làm mãi: 一直走'],
               ['一直 vừa nói HƯỚNG (đi thẳng), vừa nói THỜI GIAN (suốt)']]
  },
  '往': {
    collo: [['往前走', 'đi về phía trước'], ['往右', 'sang phải'],
            ['往学校走', 'đi về phía trường'], ['往那儿', 'về phía kia']],
    patterns: [['往 + hướng + 走', 'Đi về hướng nào: 往右走'],
               ['往 (hướng đi) ≠ 到 (đích đến)']]
  },
  '路口': {
    collo: [['第一个路口', 'ngã tư thứ nhất'], ['到路口', 'đến ngã tư'],
            ['路口右边', 'bên phải ngã tư'], ['在路口等', 'chờ ở ngã tư']],
    patterns: [['第 + số + 个 + 路口', 'Ngã tư thứ mấy: 第一个路口'],
               ['路 + 口', 'Cái miệng (口) của con đường (路)']]
  }
};
