// Noi dung TU MOI HSK3 bai 10 (chu de: so sanh, mon hoc, thue nha).
module.exports = {
  '个子': {
    collo: [['个子高', 'dáng cao'], ['个子矮', 'dáng thấp'],
            ['大个子', 'người cao lớn'], ['个子一样高', 'cao bằng nhau'],
            ['他个子很高', 'anh ấy rất cao']],
    patterns: [['Sub + 个子 + 高 / 矮', 'Ai đó cao / thấp'],
               ['✗ 他很高个子 → ✓ 他个子很高']]
  },
  '矮': {
    collo: [['比他矮', 'thấp hơn anh ấy'], ['矮一点儿', 'thấp hơn chút'],
            ['个子矮', 'dáng thấp'], ['很矮', 'rất thấp'],
            ['矮的桌子', 'cái bàn thấp']],
    patterns: [['A 比 B 矮', 'A thấp hơn B'],
               ['矮 ↔ 高', 'Thấp ↔ cao — dùng cho người và đồ vật']]
  },
  '历史': {
    collo: [['历史课', 'môn Lịch sử'], ['学历史', 'học Lịch sử'],
            ['中国历史', 'lịch sử Trung Quốc'], ['历史老师', 'giáo viên Lịch sử'],
            ['历史很有意思', 'Lịch sử rất thú vị']],
    patterns: [['môn học + 课', '历史课, 体育课, 数学课'],
               ['历 + 史', 'Ghi chép (史) những gì đã qua (历)']]
  },
  '体育': {
    collo: [['体育课', 'môn Thể dục'], ['喜欢体育', 'thích thể thao'],
            ['体育比赛', 'thi đấu thể thao'], ['体育老师', 'giáo viên Thể dục'],
            ['上体育课', 'học tiết Thể dục']],
    patterns: [['上 + 体育课', 'Học tiết Thể dục'],
               ['体育 (môn học, thể thao) ≠ 运动 (hoạt động vận động)']]
  },
  '数学': {
    collo: [['数学课', 'môn Toán'], ['学数学', 'học Toán'],
            ['数学老师', 'giáo viên Toán'], ['数学很难', 'Toán rất khó'],
            ['数学作业', 'bài tập Toán']],
    patterns: [['数学 + 课 / 老师 / 作业', 'Môn, thầy, bài tập Toán'],
               ['数 + 学', 'Môn học (学) về số (数)']]
  },
  '方便': {
    collo: [['很方便', 'rất tiện'], ['比较方便', 'khá tiện'],
            ['不方便', 'bất tiện'], ['方便的时候', 'lúc tiện'],
            ['交通方便', 'giao thông thuận tiện']],
    patterns: [['N + 很 + 方便', 'Cái gì đó rất tiện'],
               ['方便 ↔ 麻烦', 'Tiện lợi ↔ phiền phức']]
  },
  '自行车': {
    collo: [['一辆自行车', 'một chiếc xe đạp'], ['骑自行车', 'đi xe đạp'],
            ['买自行车', 'mua xe đạp'], ['旧自行车', 'xe đạp cũ'],
            ['自行车坏了', 'xe đạp hỏng rồi']],
    patterns: [['một + 辆 + 自行车', 'Lượng từ 辆 (bài 2) cho xe cộ'],
               ['自行 + 车', 'Xe (车) tự (自) chạy (行)']]
  },
  '骑': {
    collo: [['骑自行车', 'đi xe đạp'], ['骑车', 'đạp xe'],
            ['骑马', 'cưỡi ngựa'], ['骑车去', 'đạp xe đi'],
            ['骑了半个小时', 'đạp xe nửa tiếng']],
    patterns: [['骑 + 自行车 / 马', 'Dùng cho phương tiện NGỒI DẠNG CHÂN HAI BÊN'],
               ['骑 (xe đạp, ngựa) ≠ 坐 (ô tô, tàu, máy bay)']]
  },
  '旧': {
    collo: [['太旧了', 'cũ quá rồi'], ['旧车', 'xe cũ'],
            ['旧衣服', 'quần áo cũ'], ['又旧又小', 'vừa cũ vừa nhỏ'],
            ['旧的换新的', 'đổi cũ lấy mới']],
    patterns: [['N + 太旧了', 'Cái gì đó cũ quá rồi'],
               ['旧 ↔ 新', 'Cũ ↔ mới — 旧 dùng cho ĐỒ VẬT, 老 cho người']]
  },
  '换': {
    collo: [['换一辆', 'đổi chiếc khác'], ['换车', 'đổi xe'],
            ['换钱', 'đổi tiền'], ['换新的', 'đổi cái mới'],
            ['换个地方', 'đổi chỗ khác']],
    patterns: [['换 + 一 + lượng từ', 'Đổi lấy một cái khác'],
               ['把 + N + 换成 + N', 'Đổi cái này thành cái kia']]
  },
  '地方': {
    collo: [['这个地方', 'chỗ này'], ['找地方', 'tìm chỗ'],
            ['安静的地方', 'nơi yên tĩnh'], ['什么地方', 'chỗ nào'],
            ['好地方', 'chỗ tốt']],
    patterns: [['Adj + 的 + 地方', 'Nơi thế nào: 安静的地方'],
               ['地方 (nơi chốn) — 方 đọc nhẹ: dìfang']]
  },
  '中介': {
    collo: [['房屋中介', 'môi giới nhà đất'], ['中介公司', 'công ty môi giới'],
            ['找中介', 'tìm môi giới'], ['中介说', 'bên môi giới nói'],
            ['通过中介', 'qua môi giới']],
    patterns: [['找 + 中介', 'Tìm bên môi giới'],
               ['中 + 介', 'Người đứng giữa (中) giới thiệu (介)']]
  },
  '主要': {
    collo: [['主要是', 'chủ yếu là'], ['主要原因', 'nguyên nhân chính'],
            ['最主要', 'chủ yếu nhất'], ['主要问题', 'vấn đề chính'],
            ['主要看环境', 'chủ yếu xem môi trường']],
    patterns: [['主要 + 是 + …', 'Chủ yếu là …'],
               ['主要的 + N', 'Cái chính: 主要原因, 主要问题']]
  },
  '环境': {
    collo: [['环境好', 'môi trường tốt'], ['环境安静', 'môi trường yên tĩnh'],
            ['学校环境', 'môi trường trường học'], ['学习环境', 'môi trường học tập'],
            ['环境不太好', 'môi trường không tốt lắm']],
    patterns: [['环境 + 好 / 安静', 'Môi trường tốt, yên tĩnh'],
               ['环 + 境', 'Khung cảnh (境) bao quanh (环)']]
  },
  '附近': {
    collo: [['附近有', 'gần đây có'], ['学校附近', 'gần trường'],
            ['附近的超市', 'siêu thị gần đó'], ['住在附近', 'sống gần đây'],
            ['附近很方便', 'quanh đây rất tiện']],
    patterns: [['nơi chốn + 附近', 'Gần nơi nào — 附近 đứng SAU'],
               ['附近 + 有 + N', 'Gần đây có cái gì']]
  }
};
