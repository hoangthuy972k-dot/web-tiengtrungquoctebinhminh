/* Ngữ pháp chia theo điểm — HSK5 (dùng với ngu-phap-tab.js)
   Lý thuyết: lấy từ thẻ ngữ pháp trên trang bài học. Bài tập 1–4 soạn riêng theo khuôn HSK4.
   Mỗi điểm: { so, ten, tenVn, cauTruc, giaiThich, viDu, loi, bt: [{ so, tieuDe, cap, cau }] } */
window.NGU_PHAP_TAB = window.NGU_PHAP_TAB || {};

/* ═════════════ HSK5 Bài 1 — 爱的细节 ═════════════ */
window.NGU_PHAP_TAB["/lessons/hsk5-bai-1.html"] = [
  {
    so: "1", ten: "「如何」", tenVn: "",
    cauTruc: ["(该) 如何 + Động từ", "…… 如何？(cuối câu)"],
    giaiThich: "如何 là đại từ, dùng để hỏi CÁCH THỨC, nghĩa gần với 怎么 / 怎么样 nhưng thiên về VĂN VIẾT. Ngoài ra 如何 còn đặt ở CUỐI câu để hỏi tình hình hoặc xin ý kiến — vị trí mà 怎么 không dùng được.",
    viDu: [
      { zh: "我们明天举行会议，讨论这个问题该如何解决。", py: "Wǒmen míngtiān jǔxíng huìyì, tǎolùn zhège wèntí gāi rúhé jiějué.", vn: "Ngày mai chúng ta họp, bàn xem vấn đề này nên giải quyết như thế nào." },
      { zh: "评委叫第一对夫妻说说他俩是如何恩爱的。", py: "Píngwěi jiào dì-yī duì fūqī shuōshuo tā liǎ shì rúhé ēn'ài de.", vn: "Giám khảo bảo cặp thứ nhất kể xem hai người đằm thắm ra sao." },
      { zh: "最近身体如何？", py: "Zuìjìn shēntǐ rúhé?", vn: "Dạo này sức khoẻ ra sao?" }
    ],
    loi: [
      { sai: "今天如何这么冷？", why: "如何 KHÔNG dùng để hỏi nguyên nhân, chỉ hỏi cách thức.", dung: "今天怎么这么冷？" },
      { sai: "最近身体怎么？", why: "怎么 không đứng cuối câu để hỏi tình hình — vị trí này phải dùng 如何.", dung: "最近身体如何？" }
    ],
    bt: [
      { so: 1, tieuDe: "Chọn / điền từ thích hợp", cap: "Cơ học", cau: [
        { kieu: "dien", phan: ["你们俩结婚这么多年了，最近生活", "？"], dap: [["如何"]], chon: ["如何", "怎么", "什么"],
          goiY: "Hỏi thăm TÌNH HÌNH, từ để hỏi đứng ở cuối câu.", giai: "Cuối câu hỏi tình hình dùng 如何; 怎么 không đứng cuối câu được." },
        { kieu: "dien", phan: ["半夜外面", "这么吵？"], dap: [["怎么"]], chon: ["怎么", "如何", "如何样"],
          goiY: "Hỏi NGUYÊN NHÂN: “Sao nửa đêm bên ngoài lại ồn thế?”", giai: "Hỏi nguyên nhân (sao lại…) dùng 怎么; 如何 chỉ hỏi cách thức. “如何样” không tồn tại." },
        { kieu: "dien", phan: ["评委请每对夫妻说说他们是", "爱护对方的。"], dap: [["如何"]], chon: ["如何", "如何样", "什么"],
          goiY: "“Giám khảo mời từng cặp kể xem họ yêu thương, chăm sóc nhau như thế nào.”", giai: "Hỏi cách thức trước động từ: 是如何 + V + 的. Không có từ “如何样”." },
        { kieu: "dien", phan: ["老师，我不知道该", "写好这篇文章。"], dap: [["如何"]], chon: ["如何", "为什么", "如何样"],
          goiY: "“Thưa thầy, em không biết nên viết bài văn này thế nào cho hay.”", giai: "该 + 如何 + động từ: hỏi cách làm. 为什么 hỏi lý do, không hợp nghĩa." },
        { kieu: "dien", phan: ["我们周末一起去看电影，你觉得", "？"], dap: [["如何"]], chon: ["如何", "怎么", "如何样"],
          goiY: "Xin ý kiến người nghe, từ để hỏi ở cuối câu.", giai: "Cuối câu xin ý kiến dùng 如何 (hoặc 怎么样); “你觉得怎么？” là sai." },
        { kieu: "dien", phan: ["这么小的细节你都注意到了，你是", "发现的？"], dap: [["如何"]], chon: ["如何", "为什么", "多少"],
          goiY: "“Chi tiết nhỏ thế mà cậu cũng để ý, cậu phát hiện ra bằng cách nào?”", giai: "Hỏi cách thức của một việc đã xảy ra: 是如何 + V + 的 (ôn 是……的)." }
      ] },
      { so: 2, tieuDe: "Sắp xếp câu · Câu đúng hay sai", cap: "Bán giao tiếp", cau: [
        { kieu: "xep", manh: ["大家", "都在讨论", "这个问题", "该如何", "解决"], dap: ["大家都在讨论这个问题该如何解决。"],
          goiY: "Mọi người đều đang bàn xem vấn đề này nên giải quyết thế nào.", giai: "该如何 đứng ngay trước động từ 解决." },
        { kieu: "xep", manh: ["评委", "请他们", "说说", "自己是如何", "相敬如宾的"], dap: ["评委请他们说说自己是如何相敬如宾的。"],
          goiY: "Giám khảo mời họ kể xem mình đã tôn trọng nhau như khách quý ra sao.", giai: "是 + 如何 + V + 的: hỏi cách thức của việc đã xảy ra." },
        { kieu: "xep", manh: ["他", "不知道", "如何", "把这件事", "告诉老婆"], dap: ["他不知道如何把这件事告诉老婆。"],
          goiY: "Anh ấy không biết nên nói chuyện này với vợ thế nào.", giai: "如何 đứng trước cả cụm 把 + tân ngữ + động từ." },
        { kieu: "dungsai", cau: "最近你们的婚姻生活如何？", dung: true,
          giai: "如何 đứng cuối câu hỏi tình hình — đúng." },
        { kieu: "dungsai", cau: "半夜外面如何这么吵？", dung: false, sua: "半夜外面怎么这么吵？",
          giai: "Đây là hỏi nguyên nhân (sao lại ồn thế) nên dùng 怎么, không dùng 如何." },
        { kieu: "dungsai", cau: "你觉得这个办法怎么？", dung: false, sua: "你觉得这个办法如何？",
          giai: "怎么 không đứng cuối câu để xin ý kiến — dùng 如何 (hoặc 怎么样)." }
      ] },
      { so: 3, tieuDe: "Dịch Việt – Trung", cap: "Giao tiếp", cau: [
        { kieu: "dich", vn: "Giám khảo hỏi họ đã yêu thương, chăm sóc nhau như thế nào.",
          dap: ["评委问他们是如何爱护对方的。", "评委问他们是如何爱护彼此的。"],
          py: "Píngwěi wèn tāmen shì rúhé àihù duìfāng de.", goiY: "Dịch sang tiếng Trung, dùng 是如何……的.",
          giai: "Hỏi cách thức của việc đã xảy ra: 是 + 如何 + V + 的." },
        { kieu: "dich", vn: "Dạo này việc học của bạn thế nào?",
          dap: ["你最近学习如何？", "最近你的学习如何？", "你最近的学习如何？"],
          py: "Nǐ zuìjìn xuéxí rúhé?", goiY: "Dịch sang tiếng Trung, đặt 如何 ở cuối câu.",
          giai: "Hỏi tình hình → 如何 cuối câu; không nói “学习怎么？”." }
      ] },
      { so: 4, tieuDe: "Dùng điểm ngữ pháp để hoàn thành câu", cap: "Vận dụng", cau: [
        { kieu: "vandung", de: "这对夫妻结婚三十年从来没吵过架，大家都想知道＿＿＿。",
          goiY: "họ đã làm được điều đó bằng cách nào (dùng 如何)",
          mau: "这对夫妻结婚三十年从来没吵过架，大家都想知道他们是如何做到的。", can: [["如何"]] },
        { kieu: "vandung", de: "你们结婚已经十年了，＿＿＿？",
          goiY: "hỏi thăm cuộc sống hôn nhân của họ dạo này ra sao — 如何 đặt ở cuối câu",
          mau: "你们结婚已经十年了，最近生活如何？", can: [["如何"]] },
        { kieu: "vandung", tuDo: true, de: "＿＿＿",
          goiY: "Tự đặt một câu có dùng 「如何」 (hỏi cách làm, hoặc đặt cuối câu hỏi tình hình), nói về em hoặc gia đình em",
          mau: "我们明天举行会议，讨论这个问题该如何解决。", can: [["如何"]] }
      ] }
    ]
  },
  {
    so: "2", ten: "「靠」", tenVn: "",
    cauTruc: ["靠着 / 靠在 + nơi chốn", "靠 + người (dựa vào)"],
    giaiThich: "靠 là động từ, nghĩa gốc: để một phần cơ thể tì lên người hoặc vật khác. Nghĩa mở rộng: nhờ vào, dựa vào ai đó.",
    viDu: [
      { zh: "王老师喜欢靠着桌子讲课。", py: "Wáng lǎoshī xǐhuan kàozhe zhuōzi jiǎngkè.", vn: "Thầy Vương thích tựa vào bàn để giảng bài." },
      { zh: "男人的头靠在女人的肩膀上，睡着了。", py: "Nánrén de tóu kào zài nǚrén de jiānbǎng shang, shuìzháo le.", vn: "Đầu người đàn ông tựa lên vai người phụ nữ, ngủ thiếp đi." },
      { zh: "在家靠父母，出门靠朋友。", py: "Zài jiā kào fùmǔ, chūmén kào péngyou.", vn: "Ở nhà nhờ cha mẹ, ra ngoài nhờ bạn bè." }
    ],
    loi: [
      { sai: "他的头靠女人的肩膀。", why: "thiếu 在……上 — chỉ vị trí tì lên phải có kết cấu đầy đủ.", dung: "他的头靠在女人的肩膀上。" }
    ],
    bt: [
      { so: 1, tieuDe: "Chọn / điền từ thích hợp", cap: "Cơ học", cau: [
        { kieu: "dien", phan: ["他的头靠", "女人的肩膀上，睡着了。"], dap: [["在"]], chon: ["在", "着", "了"],
          goiY: "Chỉ VỊ TRÍ tì lên, phía sau đã có 上.", giai: "靠在 + nơi chốn + 上. 靠着 không đi với ……上 phía sau." },
        { kieu: "dien", phan: ["他", "门站了很久，一句话也没说。"], dap: [["靠着"]], chon: ["靠着", "靠在", "靠到"],
          goiY: "“Anh ấy tựa vào cửa đứng rất lâu, không nói một câu nào.”", giai: "靠着 + vật + động từ khác: vừa tựa vừa làm việc khác. 靠在 phải đi với ……上." },
        { kieu: "dien", phan: ["她累了，把头靠在我的肩膀", "。"], dap: [["上"]], chon: ["上", "里", "下"],
          goiY: "“Cô ấy mệt rồi, tựa đầu lên vai tôi.”", giai: "Kết cấu đầy đủ: 靠在……上 (ôn câu chữ 把)." },
        { kieu: "dien", phan: ["他没有工作，每个月都", "父母给的钱生活。"], dap: [["靠"]], chon: ["靠", "靠在", "在"],
          goiY: "“Anh ta không có việc làm, tháng nào cũng sống nhờ tiền bố mẹ cho.”", giai: "Nghĩa mở rộng “dựa vào, nhờ vào” dùng 靠 + người/vật; không dùng 靠在." },
        { kieu: "dien", phan: ["这次比赛能入围，我", "的是自己的努力。"], dap: [["靠"]], chon: ["靠", "靠在", "靠上"],
          goiY: "“Lần này lọt được vào vòng trong, tôi dựa vào chính sự cố gắng của mình.”", giai: "靠的是……: cái mình dựa vào là…; nghĩa trừu tượng nên không có 在/上." },
        { kieu: "dien", phan: ["孩子把脑袋", "，很快就睡着了。"], dap: [["靠在妈妈的肩膀上"]], chon: ["靠在妈妈的肩膀上", "靠妈妈的肩膀", "靠在妈妈的肩膀"],
          goiY: "“Đứa bé tựa đầu lên vai mẹ, chẳng mấy chốc đã ngủ.”", giai: "Tì lên đâu phải đủ 靠在 + nơi chốn + 上; thiếu 在 hoặc thiếu 上 đều sai." }
      ] },
      { so: 2, tieuDe: "Sắp xếp câu · Câu đúng hay sai", cap: "Bán giao tiếp", cau: [
        { kieu: "xep", manh: ["奶奶", "靠着", "沙发", "睡着了"], dap: ["奶奶靠着沙发睡着了。"],
          goiY: "Bà tựa vào ghế sofa ngủ thiếp đi.", giai: "Chủ ngữ + 靠着 + vật + động từ." },
        { kieu: "xep", manh: ["女儿", "把头", "靠在", "我的", "肩膀上"], dap: ["女儿把头靠在我的肩膀上。"],
          goiY: "Con gái tựa đầu lên vai tôi.", giai: "把 + 头 + 靠在 + nơi chốn + 上." },
        { kieu: "xep", manh: ["他", "完全是", "靠", "自己的努力", "入围的"], dap: ["他完全是靠自己的努力入围的。"],
          goiY: "Anh ấy hoàn toàn nhờ vào sự cố gắng của bản thân mà lọt vào vòng trong.", giai: "靠 + danh từ (nghĩa “nhờ vào”), kết hợp 是……的 nhấn mạnh cách thức." },
        { kieu: "dungsai", cau: "他的头靠女人的肩膀，睡着了。", dung: false, sua: "他的头靠在女人的肩膀上，睡着了。",
          giai: "Chỉ vị trí tì lên phải có đủ 在……上." },
        { kieu: "dungsai", cau: "她从来没靠过父母，什么事都自己做。", dung: true,
          giai: "靠 nghĩa “dựa vào” + người, kết hợp 从来没……过 — đúng." },
        { kieu: "dungsai", cau: "老师靠在桌子讲课。", dung: false, sua: "老师靠在桌子上讲课。",
          giai: "Dùng 靠在 thì phải có 上 sau nơi chốn (hoặc đổi thành 靠着桌子)." }
      ] },
      { so: 3, tieuDe: "Dịch Việt – Trung", cap: "Giao tiếp", cau: [
        { kieu: "dich", vn: "Cô ấy tựa đầu lên vai chồng, ngủ thiếp đi.",
          dap: ["她把头靠在丈夫的肩膀上，睡着了。", "她的头靠在丈夫的肩膀上，睡着了。", "她把头靠在老公的肩膀上，睡着了。"],
          py: "Tā bǎ tóu kào zài zhàngfu de jiānbǎng shang, shuìzháo le.", goiY: "Dịch sang tiếng Trung, dùng 靠在……上.",
          giai: "Tì lên vai → 靠在 + 肩膀 + 上." },
        { kieu: "dich", vn: "Cuộc sống hạnh phúc phải dựa vào chính mình.",
          dap: ["幸福的生活要靠自己。", "幸福的生活得靠自己。", "幸福的生活要靠自己创造。"],
          py: "Xìngfú de shēnghuó yào kào zìjǐ.", goiY: "Dịch sang tiếng Trung, dùng 靠 nghĩa “dựa vào”.",
          giai: "Nghĩa trừu tượng “dựa vào” → 靠 + người, không cần 在/上." }
      ] },
      { so: 4, tieuDe: "Dùng điểm ngữ pháp để hoàn thành câu", cap: "Vận dụng", cau: [
        { kieu: "vandung", de: "女朋友累了，＿＿＿，很快就睡着了。",
          goiY: "cô ấy tựa đầu lên vai anh ấy (dùng 靠在……上)",
          mau: "女朋友累了，把头靠在他的肩膀上，很快就睡着了。", can: [["靠在"], ["上"]] },
        { kieu: "vandung", de: "这次能入围，＿＿＿。",
          goiY: "chúng tôi dựa vào sự cố gắng của cả nhóm (dùng 靠)",
          mau: "这次能入围，我们靠的是大家的努力。", can: [["靠"]] },
        { kieu: "vandung", tuDo: true, de: "＿＿＿",
          goiY: "Tự đặt một câu có dùng 「靠」 (tựa vào đâu, hoặc dựa vào ai), nói về em hoặc cuộc sống quanh em",
          mau: "在家靠父母，出门靠朋友。", can: [["靠"]] }
      ] }
    ]
  },
  {
    so: "3", ten: "「居然」", tenVn: "",
    cauTruc: ["Chủ ngữ + 居然 + Động từ / Cụm động từ"],
    giaiThich: "居然 là phó từ, biểu thị việc xảy ra NGOÀI DỰ LIỆU, không ngờ tới. Đứng sau chủ ngữ và trước động từ.",
    viDu: [
      { zh: "这么简单的题，你居然也不会做？", py: "Zhème jiǎndān de tí, nǐ jūrán yě bú huì zuò?", vn: "Bài dễ thế này mà bạn lại không làm được à?" },
      { zh: "这个女人为了不影响丈夫睡觉，居然放弃这次机会！", py: "Zhège nǚrén wèile bù yǐngxiǎng zhàngfu shuìjiào, jūrán fàngqì zhè cì jīhuì!", vn: "Người phụ nữ này vì không muốn ảnh hưởng giấc ngủ của chồng mà lại từ bỏ cơ hội này!" },
      { zh: "她每天都努力复习，居然没有通过考试。", py: "Tā měi tiān dōu nǔlì fùxí, jūrán méiyǒu tōngguò kǎoshì.", vn: "Cô ấy ngày nào cũng ôn chăm chỉ, vậy mà lại không qua được kỳ thi." }
    ],
    loi: [
      { sai: "居然他放弃了这次机会。", why: "居然 là phó từ, phải đứng SAU chủ ngữ.", dung: "他居然放弃了这次机会。" },
      { sai: "今天天气很好，我居然去公园了。", why: "đi công viên khi trời đẹp là chuyện bình thường — 居然 phải dùng cho việc TRÁI với dự đoán.", dung: "今天下大雨，他居然还去公园了。" }
    ],
    bt: [
      { so: 1, tieuDe: "Chọn / điền từ thích hợp", cap: "Cơ học", cau: [
        { kieu: "dien", phan: ["大家都以为他会参加比赛，没想到", "这次机会。"], dap: [["他居然放弃了"]], chon: ["他居然放弃了", "居然他放弃了", "他放弃了居然"],
          goiY: "Chú ý VỊ TRÍ của 居然.", giai: "居然 là phó từ: sau chủ ngữ, trước động từ." },
        { kieu: "dien", phan: ["大家都以为下这么大的雨他不会去，没想到他", "还是去跑步了。"], dap: [["居然"]], chon: ["居然", "果然", "当然"],
          goiY: "“Ai cũng tưởng mưa to thế anh ấy sẽ không đi, không ngờ anh ấy vẫn đi chạy bộ.”", giai: "Trái với dự đoán → 居然. 果然 = quả nhiên (đúng như dự đoán), trái với 没想到." },
        { kieu: "dien", phan: ["我们结婚十年了，没想到他", "忘了我的生日！"], dap: [["居然"]], chon: ["居然", "终于", "果然"],
          goiY: "“Chúng tôi cưới nhau mười năm rồi, không ngờ anh ấy lại quên sinh nhật tôi!”", giai: "Việc bất ngờ, ngoài dự liệu → 居然. 终于 dùng cho việc mong chờ cuối cùng đã đến." },
        { kieu: "dien", phan: ["他平时从来不看书，这次考试", "考了第一名。"], dap: [["居然"]], chon: ["居然", "果然", "一直"],
          goiY: "“Anh ta bình thường chẳng bao giờ đọc sách, thế mà kỳ thi này lại đứng nhất.”", giai: "Kết quả trái với điều bình thường → 居然 (ôn 从来不)." },
        { kieu: "dien", phan: ["", "。"], dap: [["今天下大雨，他居然还去公园了"]], chon: ["今天下大雨，他居然还去公园了", "今天天气很好，我居然去公园了", "今天下大雨，居然他还去公园了"],
          goiY: "Chọn câu dùng 居然 đúng cả NGHĨA lẫn VỊ TRÍ.", giai: "居然 dùng cho việc trái dự đoán (mưa to vẫn đi) và đứng sau chủ ngữ." },
        { kieu: "dien", phan: ["这么小的一只蚊子，", "把他叮醒了。"], dap: [["居然"]], chon: ["居然", "当然", "从来"],
          goiY: "“Con muỗi bé tí thế mà lại đốt anh ấy tỉnh giấc.”", giai: "Việc nhỏ gây kết quả bất ngờ → 居然 (ôn câu chữ 把)." }
      ] },
      { so: 2, tieuDe: "Sắp xếp câu · Câu đúng hay sai", cap: "Bán giao tiếp", cau: [
        { kieu: "xep", manh: ["他", "居然", "放弃了", "这次", "机会"], dap: ["他居然放弃了这次机会。"],
          goiY: "Anh ấy lại từ bỏ cơ hội lần này.", giai: "Chủ ngữ + 居然 + động từ." },
        { kieu: "xep", manh: ["那个", "平时很安静的", "女孩", "居然", "跟老师", "吵架了"], dap: ["那个平时很安静的女孩居然跟老师吵架了。"],
          goiY: "Cô bé bình thường rất trầm lặng ấy lại cãi nhau với cô giáo.", giai: "居然 đứng trước cụm giới từ 跟老师 + động từ." },
        { kieu: "xep", manh: ["半夜", "他", "居然", "被一只蚊子", "叮醒了"],
          dap: ["半夜他居然被一只蚊子叮醒了。", "他半夜居然被一只蚊子叮醒了。", "他居然半夜被一只蚊子叮醒了。"],
          goiY: "Nửa đêm anh ấy lại bị một con muỗi đốt tỉnh giấc.", giai: "居然 đứng sau chủ ngữ, trước cụm 被 (ôn câu bị động)." },
        { kieu: "dungsai", cau: "居然她忘了我的生日。", dung: false, sua: "她居然忘了我的生日。",
          giai: "居然 là phó từ, phải đứng sau chủ ngữ." },
        { kieu: "dungsai", cau: "周末天气很好，我们居然去公园玩了。", dung: false, sua: "周末下大雨，他们居然还去公园玩了。",
          giai: "Trời đẹp đi chơi công viên là chuyện bình thường, không dùng 居然." },
        { kieu: "dungsai", cau: "他平时那么爱抱怨，今天居然一句话也没说。", dung: true,
          giai: "Hay than phiền mà hôm nay không nói câu nào — trái dự đoán, dùng 居然 đúng." }
      ] },
      { so: 3, tieuDe: "Dịch Việt – Trung", cap: "Giao tiếp", cau: [
        { kieu: "dich", vn: "Bài dễ như thế mà cậu ấy lại không làm được.",
          dap: ["这么简单的题，他居然不会做。", "这么简单的题，他居然也不会做。", "这么简单的题目，他居然不会做。"],
          py: "Zhème jiǎndān de tí, tā jūrán bú huì zuò.", goiY: "Dịch sang tiếng Trung, dùng 居然.",
          giai: "居然 đứng sau chủ ngữ 他, trước 不会做." },
        { kieu: "dich", vn: "Hai vợ chồng họ trước giờ chưa từng cãi nhau, vậy mà lại ly hôn rồi.",
          dap: ["他们夫妻俩从来没吵过架，居然离婚了。", "他们夫妻俩从来没吵过架，居然离婚了！", "他们两口子从来没吵过架，居然离婚了。"],
          py: "Tāmen fūqī liǎ cónglái méi chǎoguo jià, jūrán líhūn le.", goiY: "Dịch sang tiếng Trung, dùng 从来没……过 và 居然.",
          giai: "Việc ngoài dự liệu → 居然; 吵架 là động từ li hợp: 吵过架." }
      ] },
      { so: 4, tieuDe: "Dùng điểm ngữ pháp để hoàn thành câu", cap: "Vận dụng", cau: [
        { kieu: "vandung", de: "我以为他会很生气，没想到他＿＿＿。",
          goiY: "anh ấy lại bật cười (việc bất ngờ — dùng 居然)",
          mau: "我以为他会很生气，没想到他居然笑了。", can: [["居然"]] },
        { kieu: "vandung", de: "这么小的一只蚊子，＿＿＿。",
          goiY: "vậy mà lại làm cả nhà thức giấc lúc nửa đêm (dùng 居然)",
          mau: "这么小的一只蚊子，居然把全家人都吵醒了。", can: [["居然"]] },
        { kieu: "vandung", tuDo: true, de: "＿＿＿",
          goiY: "Tự đặt một câu có dùng 「居然」 kể một chuyện bất ngờ, trái với dự đoán của em",
          mau: "她每天都努力复习，居然没有通过考试。", can: [["居然"]] }
      ] }
    ]
  }
];

/* ═════════════ HSK5 Bài 2 — 留串钥匙给父母 ═════════════ */
window.NGU_PHAP_TAB["/lessons/hsk5-bai-2.html"] = [
  {
    so: "1", ten: "「以来」", tenVn: "",
    cauTruc: ["[Mốc thời gian / Động từ] + 以来，…… 一直 ……"],
    giaiThich: "以来 chỉ khoảng thời gian tính từ một mốc trong quá khứ cho tới hiện tại. Luôn đứng SAU mốc thời gian hoặc sau động từ, không đứng trước. Vế sau thường có 一直.",
    viDu: [
      { zh: "毕业以来，他一直在北京工作。", py: "Bìyè yǐlái, tā yìzhí zài Běijīng gōngzuò.", vn: "Từ khi tốt nghiệp đến nay, anh ấy luôn làm việc ở Bắc Kinh." },
      { zh: "来到中国以来，我认识了很多朋友。", py: "Láidào Zhōngguó yǐlái, wǒ rènshile hěn duō péngyou.", vn: "Từ khi đến Trung Quốc, tôi đã quen nhiều bạn." },
      { zh: "长年以来，父母很少离开老屋。", py: "Chángnián yǐlái, fùmǔ hěn shǎo líkāi lǎowū.", vn: "Bao năm nay, bố mẹ rất ít khi rời ngôi nhà cũ." }
    ],
    loi: [
      { sai: "以来去年，我一直很忙。", why: "以来 phải đứng SAU mốc thời gian, không đứng trước như “từ” trong tiếng Việt.", dung: "去年以来，我一直很忙。" },
      { sai: "明年以来我会更努力。", why: "以来 chỉ tính từ QUÁ KHỨ đến nay, không dùng cho tương lai.", dung: "从明年起我会更努力。" }
    ],
    bt: [
      { so: 1, tieuDe: "Chọn / điền từ thích hợp", cap: "Cơ học", cau: [
        { kieu: "dien", phan: ["", "，我一直很忙。"], dap: [["去年以来"]], chon: ["去年以来", "以来去年", "明年以来"],
          goiY: "“Từ năm ngoái đến nay, tôi luôn rất bận.”", giai: "Mốc thời gian QUÁ KHỨ + 以来; 以来 không đứng trước mốc thời gian." },
        { kieu: "dien", phan: ["", "我会更努力。"], dap: [["从明年起"]], chon: ["从明年起", "明年以来", "以来明年"],
          goiY: "“Từ năm sau tôi sẽ cố gắng hơn.” — mốc ở TƯƠNG LAI.", giai: "以来 chỉ dùng từ quá khứ đến nay; tương lai dùng 从……起." },
        { kieu: "dien", phan: ["毕业", "，他一直在城市打工。"], dap: [["以来"]], chon: ["以来", "起来", "从来"],
          goiY: "“Từ khi tốt nghiệp đến nay, anh ấy vẫn luôn làm thuê ở thành phố.”", giai: "Động từ + 以来, vế sau có 一直." },
        { kieu: "dien", phan: ["搬到县城", "，父母一直很想念农村的老屋子。"], dap: [["以来"]], chon: ["以来", "将来", "后来"],
          goiY: "“Từ khi chuyển lên huyện, bố mẹ vẫn luôn nhớ căn nhà cũ ở quê.”", giai: "Cụm động từ + 以来: tính từ lúc đó đến nay." },
        { kieu: "dien", phan: ["多年", "，姥姥一直一个人住在农村。"], dap: [["以来"]], chon: ["以来", "从来", "未来"],
          goiY: "“Bao năm nay, bà ngoại vẫn sống một mình ở nông thôn.”", giai: "Khoảng thời gian + 以来 (多年以来 / 长年以来)." },
        { kieu: "dien", phan: ["上大学以来，他", "没回过家。"], dap: [["一直"]], chon: ["一直", "马上", "刚才"],
          goiY: "“Từ khi lên đại học đến nay, anh ấy chưa về nhà lần nào.”", giai: "Vế sau của ……以来 thường dùng 一直 (ôn 没……过)." }
      ] },
      { so: 2, tieuDe: "Sắp xếp câu · Câu đúng hay sai", cap: "Bán giao tiếp", cau: [
        { kieu: "xep", manh: ["进城打工", "以来", "舅舅", "每年只回", "一次老家"],
          dap: ["进城打工以来，舅舅每年只回一次老家。", "舅舅进城打工以来，每年只回一次老家。"],
          goiY: "Từ khi lên thành phố làm thuê, mỗi năm cậu chỉ về quê một lần.", giai: "Cụm động từ + 以来 đặt đầu câu; chủ ngữ có thể đứng trước hoặc sau." },
        { kieu: "xep", manh: ["搬进", "新房子", "以来", "爸妈", "一直", "很开心"],
          dap: ["搬进新房子以来，爸妈一直很开心。", "爸妈搬进新房子以来，一直很开心。"],
          goiY: "Từ khi dọn vào nhà mới, bố mẹ vẫn luôn rất vui.", giai: "Động từ + 以来，…… 一直 ……" },
        { kieu: "xep", manh: ["学习汉语", "以来", "我", "认识了", "很多", "中国朋友"],
          dap: ["学习汉语以来，我认识了很多中国朋友。", "我学习汉语以来，认识了很多中国朋友。"],
          goiY: "Từ khi học tiếng Trung, tôi đã quen rất nhiều bạn Trung Quốc.", giai: "以来 đứng SAU cụm động từ 学习汉语." },
        { kieu: "dungsai", cau: "以来上大学，她一直住在学校。", dung: false, sua: "上大学以来，她一直住在学校。",
          giai: "以来 phải đứng sau mốc thời gian / động từ." },
        { kieu: "dungsai", cau: "明年以来我要去城市打工。", dung: false, sua: "从明年起我要去城市打工。",
          giai: "Mốc ở tương lai không dùng 以来; dùng 从……起." },
        { kieu: "dungsai", cau: "今年以来，姥姥的身体一直不太好。", dung: true,
          giai: "Mốc trong quá khứ + 以来, vế sau có 一直 — đúng." }
      ] },
      { so: 3, tieuDe: "Dịch Việt – Trung", cap: "Giao tiếp", cau: [
        { kieu: "dich", vn: "Từ khi nghỉ hưu đến nay, bà ngoại vẫn luôn sống ở nông thôn.",
          dap: ["退休以来，姥姥一直住在农村。", "姥姥退休以来，一直住在农村。", "退休以来，姥姥一直在农村生活。"],
          py: "Tuìxiū yǐlái, lǎolao yìzhí zhù zài nóngcūn.", goiY: "Dịch sang tiếng Trung, dùng ……以来，……一直…….",
          giai: "Động từ 退休 + 以来; vế sau dùng 一直." },
        { kieu: "dich", vn: "Từ khi tốt nghiệp đại học, cậu tôi luôn làm việc ở Hà Nội.",
          dap: ["大学毕业以来，舅舅一直在河内工作。", "舅舅大学毕业以来，一直在河内工作。", "大学毕业以来，我舅舅一直在河内工作。"],
          py: "Dàxué bìyè yǐlái, jiùjiu yìzhí zài Hénèi gōngzuò.", goiY: "Dịch sang tiếng Trung, dùng 以来 (đứng SAU 毕业).",
          giai: "“Từ khi…” không dịch thành 以来 + động từ; phải là 毕业以来." }
      ] },
      { so: 4, tieuDe: "Dùng điểm ngữ pháp để hoàn thành câu", cap: "Vận dụng", cau: [
        { kieu: "vandung", de: "＿＿＿，舅舅一直很少回农村。",
          goiY: "Từ khi lên thành phố làm thuê — 以来 đứng SAU mốc thời gian / động từ",
          mau: "进城打工以来，舅舅一直很少回农村。", can: [["以来"]] },
        { kieu: "vandung", de: "上高中以来，＿＿＿。",
          goiY: "em vẫn luôn… (nói một việc kéo dài từ đó đến nay, dùng 一直)",
          mau: "上高中以来，我一直住在学校里。", can: [["一直"]] },
        { kieu: "vandung", tuDo: true, de: "＿＿＿",
          goiY: "Tự đặt một câu có dùng 「以来」 kể một việc kéo dài từ một mốc trong quá khứ đến nay",
          mau: "毕业以来，他一直在北京工作。", can: [["以来"]] }
      ] }
    ]
  },
  {
    so: "2", ten: "「临」", tenVn: "",
    cauTruc: ["临 + Động từ (1 âm tiết) + 前 / 的时候"],
    giaiThich: "临 chỉ thời điểm ngay sát TRƯỚC một việc sắp xảy ra. Đi với động từ một âm tiết, thường kèm 前 hoặc 的时候.",
    viDu: [
      { zh: "临走的时候，他给我打了电话。", py: "Lín zǒu de shíhou, tā gěi wǒ dǎle diànhuà.", vn: "Ngay trước lúc đi, anh ấy gọi điện cho tôi." },
      { zh: "临考试前，他每天学习到很晚。", py: "Lín kǎoshì qián, tā měi tiān xuéxí dào hěn wǎn.", vn: "Ngay trước kỳ thi, ngày nào anh ấy cũng học đến khuya." },
      { zh: "临走那天，父亲从老家赶来送我们。", py: "Lín zǒu nà tiān, fùqīn cóng lǎojiā gǎnlái sòng wǒmen.", vn: "Hôm sắp đi, bố từ quê vội lên tiễn chúng tôi." }
    ],
    loi: [
      { sai: "临睡觉前不应该看手机。", why: "临 đi với động từ MỘT âm tiết — 睡 chứ không phải 睡觉.", dung: "临睡前不应该看手机。" }
    ],
    bt: [
      { so: 1, tieuDe: "Chọn / điền từ thích hợp", cap: "Cơ học", cau: [
        { kieu: "dien", phan: ["", "不应该看手机。"], dap: [["临睡前"]], chon: ["临睡前", "临睡觉前", "睡觉临前"],
          goiY: "“Ngay trước khi ngủ không nên xem điện thoại.”", giai: "临 + động từ một âm tiết: 临睡前, không nói 临睡觉前." },
        { kieu: "dien", phan: ["", "那天，爸爸悄悄把一串钥匙放在我的包里。"], dap: [["临走"]], chon: ["临走", "走临", "临走以来"],
          goiY: "“Hôm sắp đi, bố lặng lẽ bỏ một chùm chìa khoá vào túi tôi.”", giai: "临 đứng TRƯỚC động từ: 临走那天. 以来 chỉ quá khứ đến nay, không hợp." },
        { kieu: "dien", phan: ["", "，爸爸又检查了一遍门有没有锁好。"], dap: [["临睡前"]], chon: ["临睡前", "睡临前", "临睡以来"],
          goiY: "“Ngay trước khi ngủ, bố lại kiểm tra một lượt xem cửa đã khoá chưa.”", giai: "临 + 睡 + 前: thời điểm ngay sát trước khi ngủ." },
        { kieu: "dien", phan: ["", "考试前，他每天都学习到很晚。"], dap: [["临"]], chon: ["临", "以来", "从来"],
          goiY: "“Ngay trước kỳ thi, ngày nào anh ấy cũng học đến khuya.”", giai: "临……前: ngay sát trước một việc." },
        { kieu: "dien", phan: ["临走", "，舅舅又回头看了看老屋子。"], dap: [["的时候"]], chon: ["的时候", "以来", "以后"],
          goiY: "“Lúc sắp đi, cậu lại ngoảnh đầu nhìn căn nhà cũ.”", giai: "临 + V + 的时候/前; 临 là “sắp”, không đi với 以后 hay 以来." },
        { kieu: "dien", phan: ["我们", "走的时候，姥姥又往我包里放了很多吃的。"], dap: [["临"]], chon: ["临", "立刻", "以来"],
          goiY: "“Lúc chúng tôi sắp đi, bà ngoại lại nhét thêm nhiều đồ ăn vào túi tôi.”", giai: "临走的时候: ngay trước lúc đi." }
      ] },
      { so: 2, tieuDe: "Sắp xếp câu · Câu đúng hay sai", cap: "Bán giao tiếp", cau: [
        { kieu: "xep", manh: ["临睡前", "你", "最好", "不要", "看手机"],
          dap: ["临睡前，你最好不要看手机。", "你临睡前最好不要看手机。"],
          goiY: "Ngay trước khi ngủ, tốt nhất bạn đừng xem điện thoại.", giai: "临睡前 làm trạng ngữ thời gian, đứng đầu câu hoặc sau chủ ngữ." },
        { kieu: "xep", manh: ["临走", "的时候", "爸爸", "把一串钥匙", "递给了我"],
          dap: ["临走的时候，爸爸把一串钥匙递给了我。", "爸爸临走的时候，把一串钥匙递给了我。"],
          goiY: "Lúc sắp đi, bố đưa cho tôi một chùm chìa khoá.", giai: "临走的时候 + câu chữ 把 (ôn 递 bài 1)." },
        { kieu: "xep", manh: ["临", "考试前", "她", "紧张得", "睡不着觉"],
          dap: ["临考试前，她紧张得睡不着觉。", "她临考试前紧张得睡不着觉。"],
          goiY: "Ngay trước kỳ thi, cô ấy căng thẳng đến mức không ngủ được.", giai: "临……前 + bổ ngữ trình độ 得." },
        { kieu: "dungsai", cau: "临睡觉前，他总是喝一杯牛奶。", dung: false, sua: "临睡前，他总是喝一杯牛奶。",
          giai: "临 đi với động từ một âm tiết: 临睡前." },
        { kieu: "dungsai", cau: "临走那天，姥姥悄悄地哭了。", dung: true,
          giai: "临走那天: hôm sắp đi — đúng." },
        { kieu: "dungsai", cau: "临走以后，他给我打了电话。", dung: false, sua: "临走的时候，他给我打了电话。",
          giai: "临 là ngay TRƯỚC khi, không đi với 以后; dùng 临走的时候 / 临走前." }
      ] },
      { so: 3, tieuDe: "Dịch Việt – Trung", cap: "Giao tiếp", cau: [
        { kieu: "dich", vn: "Ngay trước khi ngủ, mẹ thường kể chuyện cho em gái nghe.",
          dap: ["临睡前，妈妈常常给妹妹讲故事。", "临睡前，妈妈经常给妹妹讲故事。", "妈妈常常在妹妹临睡前给她讲故事。"],
          py: "Lín shuì qián, māma chángcháng gěi mèimei jiǎng gùshi.", goiY: "Dịch sang tiếng Trung, dùng 临睡前.",
          giai: "“Ngay trước khi ngủ” → 临睡前 (không nói 临睡觉前)." },
        { kieu: "dich", vn: "Hôm sắp đi, bà ngoại lặng lẽ bỏ tiền vào túi của tôi.",
          dap: ["临走那天，姥姥悄悄地把钱放进了我的包里。", "临走那天，姥姥悄悄把钱放在我的包里。", "临走那天，姥姥悄悄地把钱放在了我的包里。"],
          py: "Lín zǒu nà tiān, lǎolao qiāoqiāo de bǎ qián fàngjìnle wǒ de bāo li.", goiY: "Dịch sang tiếng Trung, dùng 临走那天 và câu chữ 把.",
          giai: "临走那天 làm trạng ngữ thời gian; 悄悄(地) + 把……放进……." }
      ] },
      { so: 4, tieuDe: "Dùng điểm ngữ pháp để hoàn thành câu", cap: "Vận dụng", cau: [
        { kieu: "vandung", de: "＿＿＿，爸爸把家里的门都锁好了。",
          goiY: "Ngay trước khi đi (dùng 临走前 / 临走的时候)",
          mau: "临走前，爸爸把家里的门都锁好了。", can: [["临"]] },
        { kieu: "vandung", de: "妈妈总是说，＿＿＿不要喝太多水。",
          goiY: "ngay trước khi ngủ (临 + động từ một âm tiết)",
          mau: "妈妈总是说，临睡前不要喝太多水。", can: [["临睡"]] },
        { kieu: "vandung", tuDo: true, de: "＿＿＿",
          goiY: "Tự đặt một câu có dùng 「临」 (临走 / 临睡前 / 临……的时候), kể việc em hoặc người thân làm ngay trước một việc",
          mau: "临走的时候，他给我打了电话。", can: [["临"]] }
      ] }
    ]
  },
  {
    so: "3", ten: "「立刻」", tenVn: "",
    cauTruc: ["Chủ ngữ + 立刻 + Động từ"],
    giaiThich: "立刻 là phó từ, chỉ việc xảy ra ngay lập tức sau một việc khác. Đứng SAU chủ ngữ, TRƯỚC động từ. Trang trọng hơn 马上 và không dùng cho việc sắp xảy ra trong tương lai.",
    viDu: [
      { zh: "温暖的气息立刻扑面而来。", py: "Wēnnuǎn de qìxī lìkè pū miàn ér lái.", vn: "Hơi ấm lập tức ùa vào mặt." },
      { zh: "老师一进教室，学生们立刻安静下来。", py: "Lǎoshī yí jìn jiàoshì, xuéshengmen lìkè ānjìng xiàlái.", vn: "Thầy vừa vào lớp, học sinh lập tức im lặng." },
      { zh: "听到这个消息，他立刻站了起来。", py: "Tīngdào zhège xiāoxi, tā lìkè zhànle qǐlái.", vn: "Nghe tin này, anh ấy lập tức đứng bật dậy." }
    ],
    loi: [
      { sai: "立刻他回答了我的问题。", why: "立刻 là phó từ, phải đứng SAU chủ ngữ.", dung: "他立刻回答了我的问题。" },
      { sai: "天阴了，立刻就要下雨了。", why: "việc SẮP xảy ra thì dùng 马上, không dùng 立刻.", dung: "天阴了，马上就要下雨了。" }
    ],
    bt: [
      { so: 1, tieuDe: "Chọn / điền từ thích hợp", cap: "Cơ học", cau: [
        { kieu: "dien", phan: ["听到有人喊他的名字，", "。"], dap: [["他立刻站了起来"]], chon: ["他立刻站了起来", "立刻他站了起来", "他站了起来立刻"],
          goiY: "Chú ý VỊ TRÍ của 立刻.", giai: "立刻 là phó từ: sau chủ ngữ, trước động từ." },
        { kieu: "dien", phan: ["天阴了，", "就要下雨了。"], dap: [["马上"]], chon: ["马上", "立刻", "以来"],
          goiY: "“Trời âm u rồi, sắp mưa rồi.” — việc SẮP xảy ra.", giai: "马上就要……了 cho việc sắp xảy ra; không nói 立刻就要……了." },
        { kieu: "dien", phan: ["客人一走进屋子，温暖的气息", "扑面而来。"], dap: [["立刻"]], chon: ["立刻", "从来", "以来"],
          goiY: "“Khách vừa bước vào nhà, hơi ấm lập tức ùa vào mặt.”", giai: "一……，(chủ ngữ) 立刻……: việc sau xảy ra ngay sau việc trước." },
        { kieu: "dien", phan: ["电影", "就要开始了，大家请关掉手机。"], dap: [["马上"]], chon: ["马上", "立刻", "刚才"],
          goiY: "“Phim sắp bắt đầu rồi, mọi người vui lòng tắt điện thoại.”", giai: "Việc sắp xảy ra → 马上就要……了." },
        { kieu: "dien", phan: ["看到儿子冻得脸都红了，", "。"], dap: [["妈妈立刻把他拉进了屋子"]], chon: ["妈妈立刻把他拉进了屋子", "立刻妈妈把他拉进了屋子", "妈妈把他立刻拉进了屋子"],
          goiY: "“Thấy con trai rét cóng đỏ cả mặt, mẹ lập tức kéo cậu vào nhà.”", giai: "Trong câu chữ 把, phó từ 立刻 đứng sau chủ ngữ và TRƯỚC 把." },
        { kieu: "dien", phan: ["接到姥姥的电话，舅舅", "坐长途汽车回了老家。"], dap: [["立刻"]], chon: ["立刻", "临", "就要"],
          goiY: "“Nhận được điện thoại của bà ngoại, cậu lập tức đi xe khách đường dài về quê.”", giai: "Hành động xảy ra ngay sau một việc đã xảy ra → 立刻." }
      ] },
      { so: 2, tieuDe: "Sắp xếp câu · Câu đúng hay sai", cap: "Bán giao tiếp", cau: [
        { kieu: "xep", manh: ["他", "立刻", "回答了", "我的", "问题"], dap: ["他立刻回答了我的问题。"],
          goiY: "Anh ấy lập tức trả lời câu hỏi của tôi.", giai: "Chủ ngữ + 立刻 + động từ." },
        { kieu: "xep", manh: ["听到", "这个消息", "她", "立刻", "给妈妈", "打了电话"],
          dap: ["听到这个消息，她立刻给妈妈打了电话。", "她听到这个消息，立刻给妈妈打了电话。"],
          goiY: "Nghe tin này, cô ấy lập tức gọi điện cho mẹ.", giai: "立刻 đứng trước cụm giới từ 给妈妈 + động từ." },
        { kieu: "xep", manh: ["我", "一打开门", "小狗", "立刻", "扑了过来"], dap: ["我一打开门，小狗立刻扑了过来。"],
          goiY: "Tôi vừa mở cửa, chú chó lập tức lao tới.", giai: "一……，Chủ ngữ + 立刻 + động từ." },
        { kieu: "dungsai", cau: "立刻她把窗户打开了。", dung: false, sua: "她立刻把窗户打开了。",
          giai: "立刻 là phó từ, phải đứng sau chủ ngữ." },
        { kieu: "dungsai", cau: "快点儿，电影立刻就要开始了。", dung: false, sua: "快点儿，电影马上就要开始了。",
          giai: "Việc sắp xảy ra → 马上就要……了, không dùng 立刻." },
        { kieu: "dungsai", cau: "妈妈一进门，孩子们立刻安静了下来。", dung: true,
          giai: "Việc xảy ra ngay sau một việc khác, 立刻 sau chủ ngữ — đúng." }
      ] },
      { so: 3, tieuDe: "Dịch Việt – Trung", cap: "Giao tiếp", cau: [
        { kieu: "dich", vn: "Nghe mẹ gọi, cậu bé lập tức chạy ra khỏi phòng.",
          dap: ["听到妈妈喊他，男孩立刻跑出了房间。", "听到妈妈叫他，男孩立刻跑出了房间。", "听到妈妈喊他，小男孩立刻跑出了房间。"],
          py: "Tīngdào māma hǎn tā, nánhái lìkè pǎochūle fángjiān.", goiY: "Dịch sang tiếng Trung, dùng 立刻.",
          giai: "立刻 đứng sau chủ ngữ 男孩, trước động từ 跑出." },
        { kieu: "dich", vn: "Vừa nhận được điện thoại của bà ngoại, bố lập tức lái xe về quê.",
          dap: ["一接到姥姥的电话，爸爸立刻开车回了老家。", "爸爸一接到姥姥的电话，就立刻开车回了老家。", "一接到姥姥的电话，爸爸立刻开车回老家了。"],
          py: "Yì jiēdào lǎolao de diànhuà, bàba lìkè kāichē huíle lǎojiā.", goiY: "Dịch sang tiếng Trung, dùng 一……，……立刻…….",
          giai: "Việc sau xảy ra ngay sau việc trước → 立刻." }
      ] },
      { so: 4, tieuDe: "Dùng điểm ngữ pháp để hoàn thành câu", cap: "Vận dụng", cau: [
        { kieu: "vandung", de: "听到姥姥生病的消息，＿＿＿。",
          goiY: "anh ấy lập tức mua vé xe đường dài về quê (dùng 立刻)",
          mau: "听到姥姥生病的消息，他立刻买了长途汽车票回老家。", can: [["立刻"]] },
        { kieu: "vandung", de: "一打开卧室的门，＿＿＿。",
          goiY: "mùi nắng (của chăn vừa phơi) lập tức ùa tới (dùng 立刻)",
          mau: "一打开卧室的门，阳光的味道立刻扑面而来。", can: [["立刻"]] },
        { kieu: "vandung", tuDo: true, de: "＿＿＿",
          goiY: "Tự đặt một câu có dùng 「立刻」 kể một việc xảy ra ngay sau một việc khác",
          mau: "听到这个消息，他立刻站了起来。", can: [["立刻"]] }
      ] }
    ]
  }
];
