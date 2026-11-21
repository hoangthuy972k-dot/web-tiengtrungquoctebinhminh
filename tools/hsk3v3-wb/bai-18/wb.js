// Bai 18 — 我学会了包饺子. Sach bai tap trang 157–165 = PDF trang 162–170.
// Dap an: HSK3--学练手册(习题答案).pdf trang 18 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 157–158) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1B 2C 3A 4B 5B 6B 7A 8B 9C 10C).
const IMG = '/images/hsk3v3-bai-18-wb/';
const B_GHEP = [
  { key: 'A', text: '希望你这次能坚持下去。' },
  { key: 'B', text: '谢谢你想着我，那我就收下了。', py: 'Xièxie nǐ xiǎngzhe wǒ, nà wǒ jiù shōuxià le.' },
  { key: 'C', text: '是的，她变得比以前更懂得关心别人了。' },
  { key: 'D', text: '这个星期我都有时间，可以带你到处看看。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '我的笔记本电脑坏了，里面有很重要的东西。' }
];
const B_TU = [
  { key: 'A', text: '学期' }, { key: 'B', text: '阿姨' }, { key: 'C', text: '完成' },
  { key: 'D', text: '节日' }, { key: 'E', text: '鞋' }, { key: 'F', text: '大概' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '我学会了包饺子',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 日 và 目', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['日 rì', '节日 jiérì — ngày lễ<br>工作日 gōngzuòrì — ngày làm việc', '春节是中国最重要的节日。<br>Tết Nguyên đán là ngày lễ quan trọng nhất của Trung Quốc.'],
        ['目 mù', '节目 jiémù — tiết mục, chương trình', '你要表演什么节目？<br>Bạn định biểu diễn tiết mục gì?']
      ],
        note: '日 bên trong có một nét ngang; 目 có hai nét ngang và dáng cao, hẹp hơn. 节日 (ngày lễ) và 节目 (tiết mục) chỉ khác nhau chữ này. Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 得', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['得到', 'dédào — nhận được, đạt được', '只要你努力，下次考试就一定能得到好成绩。<br>Chỉ cần bạn cố gắng, lần thi sau nhất định sẽ đạt kết quả tốt.'],
        ['懂得', 'dǒngde — hiểu được', '从那时起，我就懂得了帮助别人就是帮助自己。<br>Từ lúc đó, tôi đã hiểu rằng giúp người khác chính là giúp chính mình.'],
        ['得去', 'děi qù — phải đi', '因为工作的关系，我每年都得去上海住两三个月。<br>Vì công việc, năm nào tôi cũng phải đến Thượng Hải ở hai ba tháng.']
      ],
        note: '得 đọc <b>dé</b> khi nghĩa là "được, đạt" (得到); đọc nhẹ <b>de</b> trong 懂得, 觉得 và sau động từ (说得很好); đọc <b>děi</b> khi nghĩa là "phải" (得去).' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Đón ngày lễ<br>庆祝节日', '春节 Chūnjié (Tết Nguyên đán) · 新年 xīnnián (năm mới) · 过节 guòjié (đón lễ, ăn Tết) · 节日 jiérì (ngày lễ) · 收 shōu (nhận) · 总 zǒng (luôn luôn) · ' +
          '见面 jiànmiàn (gặp mặt) · 家人 jiārén (người nhà) · 饺子 jiǎozi (sủi cảo) · 饭馆 fànguǎn (quán ăn) · 请客 qǐngkè (mời, đãi) · 做客 zuòkè (làm khách) · ' +
          '聊天儿 liáotiānr (trò chuyện) · 花 huā (hoa) · 假期 jiàqī (kỳ nghỉ) · 晚会 wǎnhuì (dạ hội) · 节目 jiémù (tiết mục)'],
        ['Thời gian và số lượng<br>时间与数量', '前年 qiánnián (năm kia) · 去年 qùnián (năm ngoái) · 今年 jīnnián (năm nay) · 明年 míngnián (năm sau) · 后年 hòunián (năm sau nữa) · ' +
          '前天 qiántiān (hôm kia) · 昨天 zuótiān (hôm qua) · 今天 jīntiān (hôm nay) · 明天 míngtiān (ngày mai) · 后天 hòutiān (ngày kia)<br>' +
          '以上 yǐshàng (trở lên) · 以下 yǐxià (trở xuống)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['前年 qiánnián<br>năm kia', '前年冬天 — mùa đông năm kia<br>我是从前年开始学习中文的。<br>Tôi bắt đầu học tiếng Trung từ năm kia.', 'A：你是什么时候毕业的？<br>B：前年夏天，现在已经毕业两年多了。<br>A: Bạn tốt nghiệp khi nào? — B: Mùa hè năm kia, đến giờ đã tốt nghiệp hơn hai năm rồi.'],
        ['以下 yǐxià<br>trở xuống, dưới', '三个月以下 — dưới ba tháng<br>这家饭馆要找五名服务员，要求40岁以下。<br>Quán ăn này cần tuyển năm nhân viên phục vụ, yêu cầu dưới 40 tuổi.', 'A：你想买条什么样的裙子？<br>B：长裙，不要太贵，最好500元以下。<br>A: Bạn muốn mua chiếc váy thế nào? — B: Váy dài, đừng đắt quá, tốt nhất dưới 500 tệ.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['过春节<br>guò Chūnjié — ăn Tết', '过新年<br>guò xīnnián — đón năm mới'],
        ['新年晚会<br>xīnnián wǎnhuì — dạ hội năm mới', '送花<br>sòng huā — tặng hoa'],
        ['收下<br>shōuxià — nhận lấy', '收到礼物<br>shōudào lǐwù — nhận được quà'],
        ['跟家人见面<br>gēn jiārén jiànmiàn — gặp người nhà', '和朋友聊天儿<br>hé péngyou liáotiānr — trò chuyện với bạn bè'],
        ['包饺子<br>bāo jiǎozi — gói sủi cảo', '表演节目<br>biǎoyǎn jiémù — biểu diễn tiết mục'],
        ['看节目<br>kàn jiémù — xem chương trình', '一年以上<br>yì nián yǐshàng — từ một năm trở lên']
      ] },
      // TU GIAI (file dap an khong co phan nay): (1) 收 (收下了); (2) 春节 (bac Trung Quoc an tet thi an sui cao);
      // (3) 以下 (doi lai voi 六十岁以上); (4) 过节 (就要过春节了，打算怎样过节); (5) 见面 (跟…家人见面).
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '谢谢您的礼物，那我就', after: '下了。', answer: '收' },
          { before: '', after: '的时候，北方人都要吃饺子。', answer: '春节' },
          { before: '六岁', after: '的孩子和六十岁以上的老人都不用买票。', answer: '以下' },
          { before: '就要过春节了，你们打算怎样', after: '？', answer: '过节' },
          { before: '去年我去朋友家做客，那是我第一次跟他的家人', after: '。', answer: '见面' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '从明天起，我要每天出去跑步。', answer: 'A',
            vn: 'Từ ngày mai, tôi sẽ ra ngoài chạy bộ mỗi ngày. — A: Mong là lần này bạn kiên trì được.' },
          { n: 12, letters: L5, prompt: '你看起来很难过，发生什么事了？', answer: 'F',
            vn: 'Trông bạn buồn quá, có chuyện gì vậy? — F: Máy tính xách tay của tôi hỏng rồi, bên trong có đồ rất quan trọng.' },
          { n: 13, letters: L5, prompt: '新年快乐，这是我给你准备的礼物。', answer: 'B',
            vn: 'Chúc mừng năm mới, đây là quà mình chuẩn bị cho bạn. — B: Cảm ơn bạn đã nghĩ đến mình, vậy mình xin nhận nhé.' },
          { n: 14, letters: L5, prompt: '女儿上学后，老师和同学对她的影响很大。', answer: 'C',
            vn: 'Từ khi con gái đi học, thầy cô và bạn bè ảnh hưởng đến cháu rất nhiều. — C: Đúng vậy, cháu trở nên biết quan tâm đến người khác hơn trước.' },
          { n: 15, letters: L5, prompt: '我刚来留学不久，对这里的环境还不太了解。', answer: 'D',
            vn: 'Tôi mới sang du học chưa lâu, còn chưa hiểu lắm về môi trường ở đây. — D: Tuần này tôi đều rảnh, có thể dẫn bạn đi xem khắp nơi.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '黄叔叔和李（　）已经结婚15年了。', promptPy: 'Huáng shūshu hé Lǐ (　) yǐjīng jiéhūn 15 nián le.', answer: 'B',
            vn: 'Chú Hoàng và cô Lý đã kết hôn được 15 năm rồi. — 阿姨: cô, dì (gọi người phụ nữ lớn tuổi hơn).' },
          { n: 17, letters: L5, prompt: '经理说我们这个月的工作（　）得特别好。', answer: 'C',
            vn: 'Giám đốc nói công việc tháng này chúng ta hoàn thành đặc biệt tốt. — 完成得特别好: hoàn thành rất tốt.' },
          { n: 18, letters: L5, prompt: '今天是这个（　）的最后一天，明天就放假了。', answer: 'A',
            vn: 'Hôm nay là ngày cuối cùng của học kỳ này, mai là được nghỉ rồi. — 学期: học kỳ.' },
          { n: 19, letters: L5, prompt: 'A：你汉语说得真好，学了多长时间了？\nB：（　）有三年了吧。', answer: 'F',
            promptPy: 'A: Nǐ Hànyǔ shuō de zhēn hǎo, xuéle duō cháng shíjiān le?\nB: (　) yǒu sān nián le ba.',
            vn: 'A: Bạn nói tiếng Trung giỏi thật, học bao lâu rồi?\nB: Khoảng ba năm rồi. — 大概: khoảng, chừng.' },
          { n: 20, letters: L5, prompt: 'A：老师，（　）快乐！这是我们班同学送您的礼物。\nB：谢谢大家，我非常喜欢这个礼物。', answer: 'D',
            vn: 'A: Thưa thầy (cô), chúc thầy ngày lễ vui vẻ! Đây là quà các bạn lớp em tặng thầy.\nB: Cảm ơn các em, thầy rất thích món quà này. — 节日快乐: chúc ngày lễ vui vẻ.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '西瓜是夏天最常见的水果，这个季节的西瓜又大又甜，而且很便宜，一斤才一两块钱。\n问：一斤西瓜多少钱？',
            options: [{ key: 'A', text: '十块钱' }, { key: 'B', text: '一两块钱' }, { key: 'C', text: '十几块钱' }], answer: 'B',
            vn: 'Dưa hấu là loại quả thường gặp nhất vào mùa hè, dưa mùa này vừa to vừa ngọt, lại rất rẻ, một cân chỉ một hai đồng. — "一斤才一两块钱" → B. (斤: cân Trung Quốc = 0,5 kg.)' },
          { n: 22, prompt: '我女儿是去年冬天出生的，到今年12月9日就一岁了。到时候，我会请孩子的爷爷奶奶来家里吃饭，给她过第一个生日。\n★关于他女儿，可以知道什么？',
            promptPy: 'Wǒ nǚ\'ér shì qùnián dōngtiān chūshēng de, dào jīnnián 12 yuè 9 rì jiù yí suì le. Dào shíhou, wǒ huì qǐng háizi de yéye nǎinai lái jiāli chīfàn, gěi tā guò dì-yī gè shēngrì.\nGuānyú tā nǚ\'ér, kěyǐ zhīdao shénme?',
            options: [{ key: 'A', text: '已经一岁了' }, { key: 'B', text: '今天过生日' }, { key: 'C', text: '是12月出生的' }], answer: 'C',
            vn: 'Con gái tôi sinh vào mùa đông năm ngoái, đến ngày 9 tháng 12 năm nay là tròn một tuổi. Đến lúc đó, tôi sẽ mời ông bà nội của cháu đến nhà ăn cơm, tổ chức sinh nhật đầu tiên cho cháu. — Đến 12/9 năm nay mới tròn một tuổi → cháu sinh tháng 12 (C); bây giờ chưa đủ một tuổi (A sai).' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '张叔叔，我刚才给您打电话，您没接，是不是已经出发了？真不好意思，经理刚刚告诉我，公司要开一个重要的会议，我们都得参加，所以我会晚到一会儿。您到了的话，就先点杯饮料，等我一会儿。我一开完会就去找您。\n★他为什么现在不跟张叔叔见面？',
            promptPy: 'Zhāng shūshu, wǒ gāngcái gěi nín dǎ diànhuà, nín méi jiē, shì bu shì yǐjīng chūfā le? Zhēn bù hǎoyìsi, jīnglǐ gānggāng gàosu wǒ, gōngsī yào kāi yí gè zhòngyào de huìyì, wǒmen dōu děi cānjiā, suǒyǐ wǒ huì wǎn dào yíhuìr. Nín dàole de huà, jiù xiān diǎn bēi yǐnliào, děng wǒ yíhuìr. Wǒ yì kāiwán huì jiù qù zhǎo nín.\nTā wèishénme xiànzài bù gēn Zhāng shūshu jiànmiàn?',
            options: [{ key: 'A', text: '不想去' }, { key: 'B', text: '要开会' }, { key: 'C', text: '想喝饮料' }], answer: 'B',
            vn: 'Chú Trương ơi, vừa nãy cháu gọi điện cho chú mà chú không nghe máy, có phải chú đã đi rồi không ạ? Thật ngại quá, giám đốc vừa báo công ty có một cuộc họp quan trọng, tất cả đều phải dự, nên cháu sẽ đến muộn một chút. Nếu chú đến rồi thì cứ gọi cốc nước uống trước, đợi cháu một lát. Họp xong là cháu đến tìm chú ngay. — Phải dự cuộc họp quan trọng → B.' },
          { n: 24, prompt: '★他让张叔叔做什么？', promptPy: 'Tā ràng Zhāng shūshu zuò shénme?',
            options: [{ key: 'A', text: '回家' }, { key: 'B', text: '等等他', py: 'děngdeng tā' }, { key: 'C', text: '参加会议' }], answer: 'B',
            vn: '"就先点杯饮料，等我一会儿" — gọi đồ uống, đợi anh ấy một lát → B. Người đi họp là anh ấy, không phải chú Trương (C sai).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '这家公司（ fā ）展得很快，越来越有名了。', promptPy: 'Zhè jiā gōngsī fāzhǎn de hěn kuài, yuèláiyuè yǒumíng le.', answer: '发',
            vn: 'Công ty này phát triển rất nhanh, ngày càng nổi tiếng. — 发展 fāzhǎn: phát triển.' },
          { n: 26, input: true, maxlength: 2, prompt: '小李（ gāng ）毕业就得到了一个出国工作的机会。', promptPy: 'Xiǎo Lǐ gāng bìyè jiù dédàole yí gè chūguó gōngzuò de jīhuì.', answer: '刚',
            vn: 'Tiểu Lý vừa tốt nghiệp đã có được một cơ hội ra nước ngoài làm việc. — 刚 gāng: vừa mới.' },
          { n: 27, input: true, maxlength: 2, prompt: '妈妈（ zǒng ）为我结婚的事情着急，可对我来说，现在工作更重要。', answer: '总',
            promptPy: 'Māma zǒng wèi wǒ jiéhūn de shìqing zháojí, kě duì wǒ lái shuō, xiànzài gōngzuò gèng zhòngyào.',
            vn: 'Mẹ lúc nào cũng sốt ruột chuyện tôi kết hôn, nhưng với tôi, bây giờ công việc quan trọng hơn. — 总 zǒng: luôn, lúc nào cũng.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '出发',
            img: IMG + 'q28.webp', prompt: '出发', promptPy: 'chūfā', placeholder: 'Viết câu có từ 出发…',
            script: '他今天晚上出发去中国留学。', vn: 'Tối nay anh ấy lên đường sang Trung Quốc du học.' },
          { n: 29, free: true, must: '坚持', img: IMG + 'q29.webp', prompt: '坚持', promptPy: 'jiānchí', placeholder: 'Viết câu có từ 坚持…',
            script: '他每天都坚持锻炼身体，所以很少生病。', vn: 'Ngày nào anh ấy cũng kiên trì tập thể dục, nên rất ít khi ốm.' },
          { n: 30, free: true, must: '完成', img: IMG + 'q30.webp', prompt: '完成', promptPy: 'wánchéng', placeholder: 'Viết câu có từ 完成…',
            script: '他终于完成了工作。', vn: 'Cuối cùng anh ấy đã hoàn thành công việc.' }
        ] }
    ] }
  ]
};
