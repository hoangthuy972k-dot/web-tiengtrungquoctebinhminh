/* ══════════════════════════════════════════════════════════════════
   GIÁO TRÌNH PHÁT ÂM — 13 bài
   ------------------------------------------------------------------
   tu  — AM TIET DON, rut THANG tu slide cua 13 file bai giang:
         chu Han va phien am ghep theo TOA DO tren slide (doc theo thu
         tu XML thi lech cap), roi soat cheo voi kho tu vung cua site.
   tu2 — TU HAI AM TIET. Trong bo slide chi co vai tu (休息 va nhom
         轻声 / 儿化 o bai 13), nen phan con lai la soan them, moi bai
         dung dung thanh mau hoac van mau cua bai do.

   Dung cho phan "Kiem tra dau gio" o trang /lop — chon tung bai hoac
   ca 13 bai. Dap an nhieu KHONG viet tay ma may tu sinh (phat-am-de.js).
   ══════════════════════════════════════════════════════════════════ */
var PHAT_AM_BAI = [
  {
    so: 1,
    ten: 'Thanh điệu · a o e i u ü',
    am: 'a o e i u ü + 4 thanh',
    y: 'Bốn thanh và sáu nguyên âm đơn. Trọng tâm: nghe ra thanh 2 và thanh 3.',
    tu2: [
      { zh: '妈妈', py: 'māma', vn: 'mẹ' },
      { zh: '爸爸', py: 'bàba', vn: 'bố' },
      { zh: '骑马', py: 'qímǎ', vn: 'cưỡi ngựa' },
      { zh: '鸭子', py: 'yāzi', vn: 'con vịt' },
      { zh: '衣服', py: 'yīfu', vn: 'quần áo' },
      { zh: '雨衣', py: 'yǔyī', vn: 'áo mưa' }
    ],
    tu: [
      { zh: '妈', py: 'mā', vn: 'mẹ' },
      { zh: '麻', py: 'má', vn: 'cây gai; tê' },
      { zh: '马', py: 'mǎ', vn: 'con ngựa' },
      { zh: '骂', py: 'mà', vn: 'mắng' },
      { zh: '爸', py: 'bà', vn: 'bố' },
      { zh: '我', py: 'wǒ', vn: 'tôi' },
      { zh: '鹅', py: 'é', vn: 'con ngỗng' },
      { zh: '衣', py: 'yī', vn: 'áo' },
      { zh: '路', py: 'lù', vn: 'con đường' },
      { zh: '鱼', py: 'yú', vn: 'con cá' },
      { zh: '鸭', py: 'yā', vn: 'con vịt' },
      { zh: '挖', py: 'wā', vn: 'đào' },
      { zh: '窝', py: 'wō', vn: 'cái tổ' }
    ]
  },
  {
    so: 2,
    ten: 'b p m f',
    am: 'b p m f',
    y: 'Cặp dễ nhầm nhất: b – p (bật hơi hay không).',
    tu2: [
      { zh: '爸爸', py: 'bàba', vn: 'bố' },
      { zh: '妈妈', py: 'māma', vn: 'mẹ' },
      { zh: '米饭', py: 'mǐfàn', vn: 'cơm' },
      { zh: '面包', py: 'miànbāo', vn: 'bánh mì' },
      { zh: '朋友', py: 'péngyou', vn: 'bạn bè' },
      { zh: '毛笔', py: 'máobǐ', vn: 'bút lông' },
      { zh: '豆腐', py: 'dòufu', vn: 'đậu phụ' },
      { zh: '方便', py: 'fāngbiàn', vn: 'tiện lợi' }
    ],
    tu: [
      { zh: '笔', py: 'bǐ', vn: 'cây bút' },
      { zh: '八', py: 'bā', vn: 'số tám' },
      { zh: '拔', py: 'bá', vn: 'nhổ, rút' },
      { zh: '鼻', py: 'bí', vn: 'cái mũi' },
      { zh: '皮', py: 'pí', vn: 'da, vỏ' },
      { zh: '破', py: 'pò', vn: 'vỡ, rách' },
      { zh: '爬', py: 'pá', vn: 'bò, leo' },
      { zh: '妈', py: 'mā', vn: 'mẹ' },
      { zh: '马', py: 'mǎ', vn: 'con ngựa' },
      { zh: '木', py: 'mù', vn: 'gỗ, cây' },
      { zh: '米', py: 'mǐ', vn: 'gạo; mét' },
      { zh: '发', py: 'fà', vn: 'phát ra' },
      { zh: '斧', py: 'fǔ', vn: 'cái rìu' },
      { zh: '佛', py: 'fó', vn: 'Phật' }
    ]
  },
  {
    so: 3,
    ten: 'd t n l',
    am: 'd t n l',
    y: 'Cặp dễ nhầm: d – t, và n – l (học sinh Việt hay đọc lẫn).',
    tu2: [
      { zh: '弟弟', py: 'dìdi', vn: 'em trai' },
      { zh: '努力', py: 'nǔlì', vn: 'chăm chỉ' },
      { zh: '电脑', py: 'diànnǎo', vn: 'máy tính' },
      { zh: '你们', py: 'nǐmen', vn: 'các bạn' },
      { zh: '大家', py: 'dàjiā', vn: 'mọi người' },
      { zh: '旅游', py: 'lǚyóu', vn: 'du lịch' },
      { zh: '天天', py: 'tiāntiān', vn: 'ngày nào cũng' },
      { zh: '老师', py: 'lǎoshī', vn: 'giáo viên' }
    ],
    tu: [
      { zh: '大', py: 'dà', vn: 'to, lớn' },
      { zh: '读', py: 'dú', vn: 'đọc' },
      { zh: '多', py: 'duō', vn: 'nhiều' },
      { zh: '兔', py: 'tù', vn: 'con thỏ' },
      { zh: '特', py: 'tè', vn: 'đặc biệt' },
      { zh: '他', py: 'tā', vn: 'anh ấy' },
      { zh: '踢', py: 'tī', vn: 'đá (bóng)' },
      { zh: '女', py: 'nǚ', vn: 'nữ' },
      { zh: '拿', py: 'ná', vn: 'cầm, lấy' },
      { zh: '你', py: 'nǐ', vn: 'bạn' },
      { zh: '怒', py: 'nù', vn: 'giận dữ' },
      { zh: '辣', py: 'là', vn: 'cay' },
      { zh: '乐', py: 'lè', vn: 'vui' },
      { zh: '梨', py: 'lí', vn: 'quả lê' },
      { zh: '绿', py: 'lǜ', vn: 'màu xanh lá' }
    ]
  },
  {
    so: 4,
    ten: 'g k h',
    am: 'g k h',
    y: 'Cặp dễ nhầm: g – k. Chú ý h tiếng Trung xát mạnh hơn h tiếng Việt.',
    tu2: [
      { zh: '哥哥', py: 'gēge', vn: 'anh trai' },
      { zh: '高兴', py: 'gāoxìng', vn: 'vui' },
      { zh: '汉语', py: 'Hànyǔ', vn: 'tiếng Trung' },
      { zh: '开心', py: 'kāixīn', vn: 'vui vẻ' },
      { zh: '公司', py: 'gōngsī', vn: 'công ty' },
      { zh: '咖啡', py: 'kāfēi', vn: 'cà phê' },
      { zh: '回家', py: 'huí jiā', vn: 'về nhà' },
      { zh: '可乐', py: 'kělè', vn: 'nước ngọt' }
    ],
    tu: [
      { zh: '哥', py: 'gē', vn: 'anh trai' },
      { zh: '歌', py: 'gē', vn: 'bài hát' },
      { zh: '锅', py: 'guō', vn: 'cái nồi' },
      { zh: '瓜', py: 'guā', vn: 'quả dưa' },
      { zh: '渴', py: 'kě', vn: 'khát' },
      { zh: '跨', py: 'kuà', vn: 'bước qua' },
      { zh: '哭', py: 'kū', vn: 'khóc' },
      { zh: '卡', py: 'kǎ', vn: 'cái thẻ' },
      { zh: '喝', py: 'hē', vn: 'uống' },
      { zh: '画', py: 'huà', vn: 'vẽ; bức tranh' },
      { zh: '盒', py: 'hé', vn: 'cái hộp' },
      { zh: '湖', py: 'hú', vn: 'cái hồ' }
    ]
  },
  {
    so: 5,
    ten: 'j q x',
    am: 'j q x',
    y: 'Ba âm mặt lưỡi, luôn đi với i hoặc ü. Cặp dễ nhầm: j – q.',
    tu2: [
      { zh: '今天', py: 'jīntiān', vn: 'hôm nay' },
      { zh: '学习', py: 'xuéxí', vn: 'học tập' },
      { zh: '星期', py: 'xīngqī', vn: 'tuần lễ' },
      { zh: '现在', py: 'xiànzài', vn: 'bây giờ' },
      { zh: '姐姐', py: 'jiějie', vn: 'chị gái' },
      { zh: '起床', py: 'qǐchuáng', vn: 'ngủ dậy' },
      { zh: '喜欢', py: 'xǐhuan', vn: 'thích' },
      { zh: '谢谢', py: 'xièxie', vn: 'cảm ơn' }
    ],
    tu: [
      { zh: '鸡', py: 'jī', vn: 'con gà' },
      { zh: '挤', py: 'jǐ', vn: 'chen, bóp' },
      { zh: '家', py: 'jiā', vn: 'nhà' },
      { zh: '锯', py: 'jù', vn: 'cái cưa' },
      { zh: '七', py: 'qī', vn: 'số bảy' },
      { zh: '去', py: 'qù', vn: 'đi' },
      { zh: '掐', py: 'qiā', vn: 'véo, bấm' },
      { zh: '棋', py: 'qí', vn: 'cờ' },
      { zh: '洗', py: 'xǐ', vn: 'rửa, giặt' },
      { zh: '席', py: 'xí', vn: 'cái chiếu' },
      { zh: '嘘', py: 'xū', vn: 'suỵt (im lặng)' },
      { zh: '虾', py: 'xiā', vn: 'con tôm' }
    ]
  },
  {
    so: 6,
    ten: 'zh ch sh r',
    am: 'zh ch sh r',
    y: 'Bốn âm cuốn lưỡi — khó nhất với học sinh Việt vì tiếng Việt không có.',
    tu2: [
      { zh: '老师', py: 'lǎoshī', vn: 'giáo viên' },
      { zh: '中国', py: 'Zhōngguó', vn: 'Trung Quốc' },
      { zh: '吃饭', py: 'chīfàn', vn: 'ăn cơm' },
      { zh: '时间', py: 'shíjiān', vn: 'thời gian' },
      { zh: '认识', py: 'rènshi', vn: 'quen biết' },
      { zh: '知道', py: 'zhīdào', vn: 'biết' },
      { zh: '车站', py: 'chēzhàn', vn: 'bến xe' },
      { zh: '书包', py: 'shūbāo', vn: 'cặp sách' }
    ],
    tu: [
      { zh: '竹', py: 'zhú', vn: 'tre' },
      { zh: '桌', py: 'zhuō', vn: 'cái bàn' },
      { zh: '猪', py: 'zhū', vn: 'con lợn' },
      { zh: '纸', py: 'zhǐ', vn: 'giấy' },
      { zh: '车', py: 'chē', vn: 'xe' },
      { zh: '茶', py: 'chá', vn: 'trà' },
      { zh: '吃', py: 'chī', vn: 'ăn' },
      { zh: '出', py: 'chū', vn: 'ra' },
      { zh: '树', py: 'shù', vn: 'cái cây' },
      { zh: '沙', py: 'shā', vn: 'cát' },
      { zh: '蛇', py: 'shé', vn: 'con rắn' },
      { zh: '书', py: 'shū', vn: 'quyển sách' },
      { zh: '日', py: 'rì', vn: 'ngày; mặt trời' },
      { zh: '热', py: 'rè', vn: 'nóng' },
      { zh: '弱', py: 'ruò', vn: 'yếu' },
      { zh: '入', py: 'rù', vn: 'vào' }
    ]
  },
  {
    so: 7,
    ten: 'z c s y w',
    am: 'z c s y w',
    y: 'z c s (đầu lưỡi) đối lại zh ch sh (cuốn lưỡi) — trọng tâm phân biệt.',
    tu2: [
      { zh: '我们', py: 'wǒmen', vn: 'chúng tôi' },
      { zh: '再见', py: 'zàijiàn', vn: 'tạm biệt' },
      { zh: '工作', py: 'gōngzuò', vn: 'công việc' },
      { zh: '颜色', py: 'yánsè', vn: 'màu sắc' },
      { zh: '一起', py: 'yìqǐ', vn: 'cùng nhau' },
      { zh: '早上', py: 'zǎoshang', vn: 'buổi sáng' },
      { zh: '医院', py: 'yīyuàn', vn: 'bệnh viện' },
      { zh: '词典', py: 'cídiǎn', vn: 'từ điển' }
    ],
    tu: [
      { zh: '字', py: 'zì', vn: 'chữ' },
      { zh: '足', py: 'zú', vn: 'chân; đủ' },
      { zh: '坐', py: 'zuò', vn: 'ngồi' },
      { zh: '砸', py: 'zá', vn: 'đập, nện' },
      { zh: '擦', py: 'cā', vn: 'lau, chùi' },
      { zh: '醋', py: 'cù', vn: 'giấm' },
      { zh: '错', py: 'cuò', vn: 'sai' },
      { zh: '瓷', py: 'cí', vn: 'đồ sứ' },
      { zh: '色', py: 'sè', vn: 'màu sắc' },
      { zh: '洒', py: 'sǎ', vn: 'vãi, rắc' },
      { zh: '酥', py: 'sū', vn: 'giòn, xốp' },
      { zh: '四', py: 'sì', vn: 'số bốn' },
      { zh: '一', py: 'yī', vn: 'số một' },
      { zh: '牙', py: 'yá', vn: 'răng' },
      { zh: '爷', py: 'yé', vn: 'ông' },
      { zh: '雨', py: 'yǔ', vn: 'mưa' },
      { zh: '五', py: 'wǔ', vn: 'số năm' },
      { zh: '挖', py: 'wā', vn: 'đào' },
      { zh: '我', py: 'wǒ', vn: 'tôi' },
      { zh: '屋', py: 'wū', vn: 'căn nhà' }
    ]
  },
  {
    so: 8,
    ten: 'ai ei ui',
    am: 'ai ei ui',
    y: 'Ba vận mẫu kép. Chú ý ui đọc đầy đủ là u-e-i, dấu thanh đặt trên i.',
    tu2: [
      { zh: '爱好', py: 'àihào', vn: 'sở thích' },
      { zh: '北京', py: 'Běijīng', vn: 'Bắc Kinh' },
      { zh: '水果', py: 'shuǐguǒ', vn: 'hoa quả' },
      { zh: '快乐', py: 'kuàilè', vn: 'vui vẻ' },
      { zh: '回来', py: 'huílái', vn: 'trở về' },
      { zh: '明白', py: 'míngbai', vn: 'hiểu rõ' },
      { zh: '黑板', py: 'hēibǎn', vn: 'bảng đen' },
      { zh: '杯子', py: 'bēizi', vn: 'cái cốc' }
    ],
    tu: [
      { zh: '爱', py: 'ài', vn: 'yêu' },
      { zh: '海', py: 'hǎi', vn: 'biển' },
      { zh: '菜', py: 'cài', vn: 'rau; món ăn' },
      { zh: '奶', py: 'nǎi', vn: 'sữa' },
      { zh: '帅', py: 'shuài', vn: 'đẹp trai' },
      { zh: '快', py: 'kuài', vn: 'nhanh' },
      { zh: '坏', py: 'huài', vn: 'hỏng, xấu' },
      { zh: '摔', py: 'shuāi', vn: 'ngã' },
      { zh: '北', py: 'běi', vn: 'phía bắc' },
      { zh: '杯', py: 'bēi', vn: 'cái cốc' },
      { zh: '飞', py: 'fēi', vn: 'bay' },
      { zh: '黑', py: 'hēi', vn: 'màu đen' },
      { zh: '水', py: 'shuǐ', vn: 'nước' },
      { zh: '对', py: 'duì', vn: 'đúng' },
      { zh: '腿', py: 'tuǐ', vn: 'cái chân' },
      { zh: '睡', py: 'shuì', vn: 'ngủ' }
    ]
  },
  {
    so: 9,
    ten: 'ao ou iu',
    am: 'ao ou iu',
    y: 'Chú ý iu đọc đầy đủ là i-o-u, dấu thanh đặt trên u.',
    tu2: [
      { zh: '朋友', py: 'péngyou', vn: 'bạn bè' },
      { zh: '好吃', py: 'hǎochī', vn: 'ngon' },
      { zh: '手机', py: 'shǒujī', vn: 'điện thoại' },
      { zh: '小狗', py: 'xiǎogǒu', vn: 'con chó nhỏ' },
      { zh: '牛奶', py: 'niúnǎi', vn: 'sữa bò' },
      { zh: '跑步', py: 'pǎobù', vn: 'chạy bộ' },
      { zh: '休息', py: 'xiūxi', vn: 'nghỉ ngơi' },
      { zh: '报纸', py: 'bàozhǐ', vn: 'báo' }
    ],
    tu: [
      { zh: '猫', py: 'māo', vn: 'con mèo' },
      { zh: '抱', py: 'bào', vn: 'ôm' },
      { zh: '刀', py: 'dāo', vn: 'con dao' },
      { zh: '草', py: 'cǎo', vn: 'cỏ' },
      { zh: '头', py: 'tóu', vn: 'cái đầu' },
      { zh: '肉', py: 'ròu', vn: 'thịt' },
      { zh: '手', py: 'shǒu', vn: 'bàn tay' },
      { zh: '楼', py: 'lóu', vn: 'tầng, toà nhà' },
      { zh: '休息', py: 'xiūxi', vn: 'nghỉ ngơi' },
      { zh: '牛', py: 'niú', vn: 'con bò' },
      { zh: '六', py: 'liù', vn: 'số sáu' },
      { zh: '球', py: 'qiú', vn: 'quả bóng' },
      { zh: '鸟', py: 'niǎo', vn: 'con chim' },
      { zh: '表', py: 'biǎo', vn: 'đồng hồ đeo tay' },
      { zh: '庙', py: 'miào', vn: 'ngôi miếu' },
      { zh: '桥', py: 'qiáo', vn: 'cây cầu' }
    ]
  },
  {
    so: 10,
    ten: 'ie üe er',
    am: 'ie üe er',
    y: 'üe chỉ đi sau j q x y (viết thành ue) và n l. er là vận mẫu đứng riêng.',
    tu2: [
      { zh: '谢谢', py: 'xièxie', vn: 'cảm ơn' },
      { zh: '学习', py: 'xuéxí', vn: 'học tập' },
      { zh: '月亮', py: 'yuèliang', vn: 'mặt trăng' },
      { zh: '姐姐', py: 'jiějie', vn: 'chị gái' },
      { zh: '儿子', py: 'érzi', vn: 'con trai' },
      { zh: '写字', py: 'xiě zì', vn: 'viết chữ' },
      { zh: '音乐', py: 'yīnyuè', vn: 'âm nhạc' },
      { zh: '决定', py: 'juédìng', vn: 'quyết định' }
    ],
    tu: [
      { zh: '切', py: 'qiē', vn: 'cắt, thái' },
      { zh: '灭', py: 'miè', vn: 'dập tắt' },
      { zh: '贴', py: 'tiē', vn: 'dán' },
      { zh: '捏', py: 'niē', vn: 'bóp, nặn' },
      { zh: '月', py: 'yuè', vn: 'trăng; tháng' },
      { zh: '雪', py: 'xuě', vn: 'tuyết' },
      { zh: '学', py: 'xué', vn: 'học' },
      { zh: '跃', py: 'yuè', vn: 'nhảy vọt' },
      { zh: '二', py: 'èr', vn: 'số hai' },
      { zh: '儿', py: 'ér', vn: 'con, trẻ' },
      { zh: '耳', py: 'ěr', vn: 'cái tai' }
    ]
  },
  {
    so: 11,
    ten: 'an en in un ün',
    am: 'an en in un ün',
    y: 'Bốn vận mẫu đuôi -n. Trọng tâm: phân biệt với đuôi -ng ở bài 12.',
    tu2: [
      { zh: '现在', py: 'xiànzài', vn: 'bây giờ' },
      { zh: '银行', py: 'yínháng', vn: 'ngân hàng' },
      { zh: '春天', py: 'chūntiān', vn: 'mùa xuân' },
      { zh: '新闻', py: 'xīnwén', vn: 'tin tức' },
      { zh: '身体', py: 'shēntǐ', vn: 'sức khoẻ' },
      { zh: '晚饭', py: 'wǎnfàn', vn: 'cơm tối' },
      { zh: '裙子', py: 'qúnzi', vn: 'cái váy' },
      { zh: '分钟', py: 'fēnzhōng', vn: 'phút' }
    ],
    tu: [
      { zh: '男', py: 'nán', vn: 'nam, con trai' },
      { zh: '半', py: 'bàn', vn: 'một nửa' },
      { zh: '盘', py: 'pán', vn: 'cái đĩa' },
      { zh: '饭', py: 'fàn', vn: 'cơm' },
      { zh: '剑', py: 'jiàn', vn: 'thanh kiếm' },
      { zh: '片', py: 'piàn', vn: 'miếng, lát' },
      { zh: '面', py: 'miàn', vn: 'mặt; mì' },
      { zh: '电', py: 'diàn', vn: 'điện' },
      { zh: '砖', py: 'zhuān', vn: 'viên gạch' },
      { zh: '短', py: 'duǎn', vn: 'ngắn' },
      { zh: '暖', py: 'nuǎn', vn: 'ấm' },
      { zh: '穿', py: 'chuān', vn: 'mặc' },
      { zh: '圈', py: 'quān', vn: 'cái vòng' },
      { zh: '卷', py: 'juǎn', vn: 'cuộn, cuốn' },
      { zh: '泉', py: 'quán', vn: 'suối' },
      { zh: '圆', py: 'yuán', vn: 'tròn' },
      { zh: '门', py: 'mén', vn: 'cái cửa' },
      { zh: '盆', py: 'pén', vn: 'cái chậu' },
      { zh: '粉', py: 'fěn', vn: 'bột' },
      { zh: '针', py: 'zhēn', vn: 'cái kim' },
      { zh: '银', py: 'yín', vn: 'bạc' },
      { zh: '民', py: 'mín', vn: 'dân' },
      { zh: '心', py: 'xīn', vn: 'tim, lòng' },
      { zh: '林', py: 'lín', vn: 'rừng' },
      { zh: '春', py: 'chūn', vn: 'mùa xuân' },
      { zh: '笋', py: 'sǔn', vn: 'măng' },
      { zh: '棍', py: 'gùn', vn: 'cái gậy' },
      { zh: '云', py: 'yún', vn: 'mây' },
      { zh: '裙', py: 'qún', vn: 'cái váy' },
      { zh: '军', py: 'jūn', vn: 'quân đội' }
    ]
  },
  {
    so: 12,
    ten: 'ang eng ing ong',
    am: 'ang eng ing ong',
    y: 'Bốn vận mẫu đuôi -ng. Đây là chỗ học sinh Việt sai nhiều nhất: an/ang, in/ing.',
    tu2: [
      { zh: '中国', py: 'Zhōngguó', vn: 'Trung Quốc' },
      { zh: '房间', py: 'fángjiān', vn: 'căn phòng' },
      { zh: '电影', py: 'diànyǐng', vn: 'bộ phim' },
      { zh: '红色', py: 'hóngsè', vn: 'màu đỏ' },
      { zh: '上课', py: 'shàngkè', vn: 'vào học' },
      { zh: '名字', py: 'míngzi', vn: 'tên' },
      { zh: '东西', py: 'dōngxi', vn: 'đồ vật' },
      { zh: '朋友', py: 'péngyou', vn: 'bạn bè' }
    ],
    tu: [
      { zh: '昂', py: 'áng', vn: 'ngẩng cao' },
      { zh: '棒', py: 'bàng', vn: 'cái gậy; tuyệt' },
      { zh: '藏', py: 'cáng', vn: 'giấu' },
      { zh: '狼', py: 'láng', vn: 'con sói' },
      { zh: '想', py: 'xiǎng', vn: 'nghĩ, muốn' },
      { zh: '向', py: 'xiàng', vn: 'hướng về' },
      { zh: '凉', py: 'liáng', vn: 'mát' },
      { zh: '枪', py: 'qiāng', vn: 'khẩu súng' },
      { zh: '撞', py: 'zhuàng', vn: 'đâm, va' },
      { zh: '望', py: 'wàng', vn: 'nhìn xa' },
      { zh: '光', py: 'guāng', vn: 'ánh sáng' },
      { zh: '床', py: 'chuáng', vn: 'cái giường' },
      { zh: '橙', py: 'chéng', vn: 'quả cam' },
      { zh: '梦', py: 'mèng', vn: 'giấc mơ' },
      { zh: '风', py: 'fēng', vn: 'gió' },
      { zh: '灯', py: 'dēng', vn: 'cái đèn' },
      { zh: '鹰', py: 'yīng', vn: 'chim ưng' },
      { zh: '冰', py: 'bīng', vn: 'băng, đá' },
      { zh: '零', py: 'líng', vn: 'số không' },
      { zh: '瓶', py: 'píng', vn: 'cái chai' },
      { zh: '钟', py: 'zhōng', vn: 'đồng hồ; chuông' },
      { zh: '冬', py: 'dōng', vn: 'mùa đông' },
      { zh: '龙', py: 'lóng', vn: 'con rồng' },
      { zh: '红', py: 'hóng', vn: 'màu đỏ' },
      { zh: '熊', py: 'xióng', vn: 'con gấu' },
      { zh: '穷', py: 'qióng', vn: 'nghèo' },
      { zh: '兄', py: 'xiōng', vn: 'anh' }
    ]
  },
  {
    so: 13,
    ten: 'Ôn tập · thanh nhẹ, biến điệu, nhi hoá',
    am: '轻声 · 变调 · 儿化',
    y: 'Ba hiện tượng biến âm khi nói: thanh nhẹ, biến điệu của 不 / 一, và âm nhi hoá.',
    onTap: true,
    tu2: [
      { zh: '妈妈', py: 'māma', vn: 'mẹ (thanh nhẹ)' },
      { zh: '爷爷', py: 'yéye', vn: 'ông (thanh nhẹ)' },
      { zh: '奶奶', py: 'nǎinai', vn: 'bà (thanh nhẹ)' },
      { zh: '桌子', py: 'zhuōzi', vn: 'cái bàn (thanh nhẹ)' },
      { zh: '不是', py: 'bú shì', vn: 'không phải (biến điệu)' },
      { zh: '不好', py: 'bù hǎo', vn: 'không tốt (giữ nguyên)' },
      { zh: '一个', py: 'yí ge', vn: 'một cái (biến điệu)' },
      { zh: '一天', py: 'yì tiān', vn: 'một ngày (biến điệu)' },
      { zh: '小孩儿', py: 'xiǎoháir', vn: 'trẻ con (nhi hoá)' },
      { zh: '鸟儿', py: 'niǎor', vn: 'con chim (nhi hoá)' },
      { zh: '饭馆儿', py: 'fànguǎnr', vn: 'quán ăn (nhi hoá)' },
      { zh: '花儿', py: 'huār', vn: 'bông hoa (nhi hoá)' }
    ],
    tu: [
      { zh: '妈妈', py: 'māma', vn: 'mẹ (thanh nhẹ)' },
      { zh: '爷爷', py: 'yéye', vn: 'ông (thanh nhẹ)' },
      { zh: '奶奶', py: 'nǎinai', vn: 'bà (thanh nhẹ)' },
      { zh: '爸爸', py: 'bàba', vn: 'bố (thanh nhẹ)' },
      { zh: '桌子', py: 'zhuōzi', vn: 'cái bàn (thanh nhẹ)' },
      { zh: '不是', py: 'bú shì', vn: 'không phải (不 đổi thành bú)' },
      { zh: '不好', py: 'bù hǎo', vn: 'không tốt (不 giữ bù)' },
      { zh: '一个', py: 'yí ge', vn: 'một cái (一 đổi thành yí)' },
      { zh: '一天', py: 'yì tiān', vn: 'một ngày (一 đổi thành yì)' },
      { zh: '小孩儿', py: 'xiǎoháir', vn: 'trẻ con (nhi hoá)' },
      { zh: '鸟儿', py: 'niǎor', vn: 'con chim (nhi hoá)' },
      { zh: '饭馆儿', py: 'fànguǎnr', vn: 'quán ăn (nhi hoá)' },
      { zh: '面儿', py: 'miànr', vn: 'mặt ngoài (nhi hoá)' }
    ]
  }
];
