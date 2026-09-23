// Noi dung TU MOI bai 18 HSK4 (chu de: khoa hoc ky thuat va cuoc song hien dai).
module.exports = {
  '降落': {
    collo: [['安全降落', 'hạ cánh an toàn'], ['飞机降落', 'máy bay hạ cánh'],
            ['降落在机场', 'hạ cánh xuống sân bay'], ['起飞和降落', 'cất cánh và hạ cánh'],
            ['准备降落', 'chuẩn bị hạ cánh']],
    patterns: [['降落 + 在 + nơi chốn', 'Hạ cánh xuống đâu'],
               ['降落 ↔ 起飞', 'Hạ cánh ↔ cất cánh']]
  },
  '火': {
    collo: [['卖得很火', 'bán rất chạy'], ['生意很火', 'làm ăn phát đạt'],
            ['最近很火', 'dạo này rất hot'], ['火起来了', 'nổi lên rồi'],
            ['火得不得了', 'hot khủng khiếp']],
    patterns: [['V + 得 + 很火', 'Bán chạy, ăn khách'],
               ['火 (hot, ăn khách) — nghĩa mở rộng từ "lửa"']]
  },
  '作者': {
    collo: [['小说的作者', 'tác giả tiểu thuyết'], ['作者是谁', 'tác giả là ai'],
            ['作者的名字', 'tên tác giả'], ['著名作者', 'tác giả nổi tiếng'],
            ['本文作者', 'tác giả bài này']],
    patterns: [['N + 的 + 作者', 'Tác giả của cái gì'],
               ['作 + 者', 'Người (者) sáng tác (作) — cùng kiểu 记者 (bài 16)']]
  },
  '交通': {
    collo: [['交通方便', 'giao thông thuận tiện'], ['公共交通', 'giao thông công cộng'],
            ['交通工具', 'phương tiện giao thông'], ['交通警察', 'cảnh sát giao thông'],
            ['交通很堵', 'giao thông tắc nghẽn']],
    patterns: [['交通 + 方便 / 不方便', 'Giao thông thuận tiện / bất tiện'],
               ['公共 + 交通', 'Giao thông công cộng']]
  },
  '技术': {
    collo: [['科学技术', 'khoa học kỹ thuật'], ['技术不错', 'tay nghề khá'],
            ['互联网技术', 'công nghệ Internet'], ['新技术', 'công nghệ mới'],
            ['技术的发展', 'sự phát triển công nghệ']],
    patterns: [['科学 + 技术', 'Khoa học kỹ thuật — 科学 là từ bài 8'],
               ['技术 + 好 / 不错', 'Tay nghề giỏi — dùng cho người làm nghề']]
  },
  '是否': {
    collo: [['是否喜欢', 'có thích hay không'], ['是否能读懂', 'có đọc hiểu được không'],
            ['是否幸福', 'có hạnh phúc hay không'], ['是否同意', 'có đồng ý không'],
            ['是否需要', 'có cần hay không']],
    patterns: [['Sub + 是否 + V', 'Có … hay không — dạng văn viết của 是不是'],
               ['✗ 他是否来吗？ → ✓ 他是否会来', '是否 không đi với 吗']]
  },
  '秒': {
    collo: [['几秒钟', 'mấy giây'], ['等几秒', 'đợi mấy giây'],
            ['跑了十秒', 'chạy mất mười giây'], ['一分六十秒', 'một phút sáu mươi giây'],
            ['几秒就好', 'mấy giây là xong']],
    patterns: [['số + 秒 (钟)', 'Mấy giây'],
               ['秒 → 分钟 → 小时', 'Giây → phút → giờ']]
  },
  '方式': {
    collo: [['生活方式', 'lối sống'], ['学习方式', 'cách học'],
            ['教育方式', 'cách giáo dục'], ['一种方式', 'một cách thức'],
            ['方式发生了变化', 'cách thức đã thay đổi']],
    patterns: [['N + 方式', 'Phương thức của cái gì: 生活方式, 学习方式'],
               ['方式 ≈ 方法 (bài 4)', '方式 là kiểu cách tổng thể; 方法 là cách làm cụ thể']]
  },
  '受不了': {
    collo: [['受不了你了', 'chịu không nổi bạn'], ['眼睛受不了', 'mắt chịu không nổi'],
            ['真受不了', 'thật hết chịu nổi'], ['热得受不了', 'nóng không chịu nổi'],
            ['受得了', 'chịu được']],
    patterns: [['Adj + 得 + 受不了', 'Đến mức không chịu nổi'],
               ['受不了 ↔ 受得了', 'Không chịu nổi ↔ chịu được']]
  },
  '日记': {
    collo: [['写日记', 'viết nhật ký'], ['一篇日记', 'một bài nhật ký'],
            ['在网上写日记', 'viết nhật ký trên mạng'], ['给日记加密码', 'đặt mật khẩu cho nhật ký'],
            ['看别人的日记', 'xem nhật ký người khác']],
    patterns: [['写 + 日记', 'Viết nhật ký'],
               ['一 + 篇 + 日记', 'Lượng từ 篇 (bài 9) cho bài viết']]
  },
  '安全': {
    collo: [['注意安全', 'chú ý an toàn'], ['很不安全', 'rất không an toàn'],
            ['安全降落', 'hạ cánh an toàn'], ['保护安全', 'bảo vệ an toàn'],
            ['安全问题', 'vấn đề an toàn']],
    patterns: [['注意 + 安全', 'Chú ý an toàn'],
               ['安全 ↔ 危险', 'An toàn ↔ nguy hiểm']]
  },
  '密码': {
    collo: [['忘了密码', 'quên mật khẩu'], ['加密码', 'đặt mật khẩu'],
            ['信用卡的密码', 'mật khẩu thẻ tín dụng'], ['输入密码', 'nhập mật khẩu'],
            ['改密码', 'đổi mật khẩu']],
    patterns: [['给 + N + 加密码', 'Đặt mật khẩu cho cái gì'],
               ['密 + 码', 'Con số (码) bí mật (密)']]
  },
  '允许': {
    collo: [['父母不允许', 'bố mẹ không cho phép'], ['得到允许', 'được cho phép'],
            ['允许学生……', 'cho phép học sinh…'], ['不允许抽烟', 'không cho hút thuốc'],
            ['时间允许的话', 'nếu thời gian cho phép']],
    patterns: [['允许 + ai + V', 'Cho phép ai làm gì'],
               ['得到 + 允许', 'Được sự cho phép']]
  },
  '座': {
    collo: [['一座桥', 'một cây cầu'], ['一座山', 'một ngọn núi'],
            ['一座大楼', 'một toà nhà'], ['一座城市', 'một thành phố'],
            ['两座桥', 'hai cây cầu']],
    patterns: [['một + 座 + công trình lớn', 'Lượng từ 座 cho cầu, núi, toà nhà'],
               ['✗ 一个桥 → ✓ 一座桥', 'Vật lớn cố định dùng 座']]
  },
  '桥': {
    collo: [['过桥', 'qua cầu'], ['一座桥', 'một cây cầu'],
            ['在桥上走', 'đi trên cầu'], ['桥下面', 'dưới cầu'],
            ['新建的桥', 'cây cầu mới xây']],
    patterns: [['过 + 桥', 'Qua cầu'],
               ['在 + 桥 + 上', 'Trên cầu']]
  },
  '危险': {
    collo: [['非常危险', 'vô cùng nguy hiểm'], ['太危险了', 'nguy hiểm quá'],
            ['危险的地方', 'nơi nguy hiểm'], ['有危险', 'có nguy hiểm'],
            ['生命危险', 'nguy hiểm tính mạng']],
    patterns: [['N + 很 + 危险', 'Cái gì đó rất nguy hiểm'],
               ['危险 ↔ 安全', 'Nguy hiểm ↔ an toàn — 生命 là từ bài 8']]
  },
  '接着': {
    collo: [['接着说', 'nói tiếp'], ['接着看', 'xem tiếp'],
            ['接着又梦见', 'tiếp đó lại mơ thấy'], ['接着做', 'làm tiếp'],
            ['你接着', 'bạn tiếp đi']],
    patterns: [['……，接着 + V', '…, ngay sau đó thì …'],
               ['接着 ≈ 然后', '接着 nhấn việc nối liền không ngắt quãng']]
  },
  '警察': {
    collo: [['当警察', 'làm cảnh sát'], ['交通警察', 'cảnh sát giao thông'],
            ['跟警察一起', 'cùng với cảnh sát'], ['叫警察', 'gọi cảnh sát'],
            ['一名警察', 'một cảnh sát']],
    patterns: [['当 + 警察', 'Làm cảnh sát'],
               ['một + 名 + 警察', 'Lượng từ 名 cho người có nghề nghiệp']]
  },
  '抓': {
    collo: [['抓住机会', 'nắm lấy cơ hội'], ['抓坏人', 'bắt kẻ xấu'],
            ['抓紧时间', 'tranh thủ thời gian'], ['抓住了', 'bắt được rồi'],
            ['抓住我的手', 'nắm lấy tay tôi']],
    patterns: [['抓 + 住', 'Bắt được, nắm được — 住 là bổ ngữ kết quả'],
               ['抓紧 + 时间', 'Tranh thủ thời gian']]
  },
  '咸': {
    collo: [['有点儿咸', 'hơi mặn'], ['太咸了', 'mặn quá'],
            ['吃得太咸', 'ăn mặn quá'], ['咸的', 'loại mặn'],
            ['不咸不淡', 'không mặn không nhạt']],
    patterns: [['稍微 + 有点儿 + 咸', 'Hơi mặn một chút — 稍微 là từ bài 13'],
               ['咸 ↔ 淡', 'Mặn ↔ nhạt; 苦 (bài 13) là đắng']]
  },
  '矿泉水': {
    collo: [['一瓶矿泉水', 'một chai nước suối'], ['买矿泉水', 'mua nước khoáng'],
            ['带瓶矿泉水', 'mang theo chai nước'], ['矿泉水和果汁', 'nước suối và nước ép'],
            ['喝矿泉水', 'uống nước khoáng']],
    patterns: [['một + 瓶 + 矿泉水', 'Lượng từ 瓶 cho chai'],
               ['矿泉 + 水', 'Nước (水) suối khoáng (矿泉)']]
  },
  '付款': {
    collo: [['用手机付款', 'thanh toán bằng điện thoại'], ['付款购物', 'trả tiền mua hàng'],
            ['付完款', 'trả tiền xong'], ['付了款', 'đã trả tiền'],
            ['付款方式', 'phương thức thanh toán']],
    patterns: [['付 + 了 + 款', '付款 là từ ly hợp: 付了款 ✓ / 付款了钱 ✗'],
               ['用 + 手机 + 付款', 'Thanh toán bằng điện thoại — 现金 là từ bài 5']]
  },
  '举': {
    collo: [['举例', 'nêu ví dụ'], ['举一个例子', 'nêu một ví dụ'],
            ['举例说明', 'nêu ví dụ minh hoạ'], ['举手回答', 'giơ tay trả lời'],
            ['举起来', 'giơ lên']],
    patterns: [['举 + 例子', 'Nêu ví dụ'],
               ['举 + 手', 'Giơ tay — 举 vừa là "nêu" vừa là "giơ"']]
  },
  '迷路': {
    collo: [['好像迷路了', 'hình như lạc đường'], ['在森林里迷路', 'lạc trong rừng'],
            ['迷路时', 'lúc lạc đường'], ['迷了路', 'đã lạc đường'],
            ['容易迷路', 'dễ lạc đường']],
    patterns: [['迷 + 了 + 路', '迷路 là từ ly hợp: 迷了路 ✓'],
               ['迷 + 路', 'Lạc (迷) đường (路)']]
  },
  '地址': {
    collo: [['邮箱地址', 'địa chỉ email'], ['把地址告诉我', 'cho tôi địa chỉ'],
            ['查地址', 'tra địa chỉ'], ['写下地址', 'ghi lại địa chỉ'],
            ['家庭地址', 'địa chỉ nhà']],
    patterns: [['把 + 地址 + 告诉 + ai', 'Cho ai biết địa chỉ'],
               ['地址 ≠ 地点', '地址 là số nhà, đường; 地点 là nơi diễn ra việc gì']]
  },
  '地点': {
    collo: [['会议地点', 'địa điểm cuộc họp'], ['地点改了', 'địa điểm đổi rồi'],
            ['时间和地点', 'thời gian và địa điểm'], ['见面地点', 'chỗ hẹn gặp'],
            ['那个地点', 'địa điểm đó']],
    patterns: [['时间 + 和 + 地点', 'Thời gian và địa điểm'],
               ['地点 + 改在 + nơi chốn', 'Địa điểm đổi sang đâu']]
  },
  '世纪': {
    collo: [['21世纪', 'thế kỷ 21'], ['上个世纪', 'thế kỷ trước'],
            ['半个世纪', 'nửa thế kỷ'], ['新世纪', 'thế kỷ mới'],
            ['一个世纪以前', 'một thế kỷ trước']],
    patterns: [['số + 世纪', 'Thế kỷ mấy — số đứng TRƯỚC'],
               ['上个 / 这个 + 世纪', 'Thế kỷ trước / thế kỷ này']]
  },
  '邮局': {
    collo: [['去邮局', 'đi bưu điện'], ['邮局寄信', 'gửi thư ở bưu điện'],
            ['邮局旁边', 'bên cạnh bưu điện'], ['不用去邮局', 'không cần ra bưu điện'],
            ['一家邮局', 'một bưu điện']],
    patterns: [['去 + 邮局 + 寄 + N', 'Ra bưu điện gửi cái gì — 寄 là từ bài 5'],
               ['邮 + 局', 'Cơ quan (局) bưu chính (邮)']]
  },
  '收': {
    collo: [['收到通知', 'nhận được thông báo'], ['收到信', 'nhận được thư'],
            ['很难收回', 'khó thu lại'], ['收钱', 'thu tiền'],
            ['不收现金', 'không nhận tiền mặt']],
    patterns: [['收到 + N', 'Nhận được cái gì — 到 là bổ ngữ kết quả'],
               ['收 ↔ 发', 'Nhận ↔ gửi']]
  },
  '信封': {
    collo: [['一个信封', 'một phong bì'], ['在信封上写地址', 'viết địa chỉ lên phong bì'],
            ['写信封', 'ghi phong bì'], ['信封和邮票', 'phong bì và tem'],
            ['打开信封', 'mở phong bì']],
    patterns: [['在 + 信封 + 上 + 写', 'Viết lên phong bì'],
               ['信 + 封', 'Bao (封) đựng thư (信)']]
  },
  '网站': {
    collo: [['打开网站', 'mở trang web'], ['购物网站', 'trang mua sắm'],
            ['学校的网站', 'trang web của trường'], ['在网站上查', 'tra trên trang web'],
            ['这个网站', 'trang web này']],
    patterns: [['在 + 网站 + 上 + V', 'Làm gì trên trang web'],
               ['网 + 站', 'Trạm (站) trên mạng (网) — 互联网 là từ bài 13']]
  },
  '信息': {
    collo: [['详细信息', 'thông tin chi tiết'], ['发信息', 'gửi tin nhắn'],
            ['获得信息', 'nhận được thông tin'], ['找到需要的信息', 'tìm thông tin cần'],
            ['信息很多', 'thông tin rất nhiều']],
    patterns: [['获得 / 找到 + 信息', 'Nhận được, tìm được thông tin — 获得 là từ bài 6'],
               ['信息 ≈ 消息 (bài 4)', '信息 là dữ liệu nói chung; 消息 là tin tức về sự việc']]
  }
};
