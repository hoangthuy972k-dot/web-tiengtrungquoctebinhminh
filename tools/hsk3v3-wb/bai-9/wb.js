// Bai 9 — 打不好没关系. Sach bai tap trang 075–084 = PDF trang 80–89.
// Dap an: HSK3--学练手册(习题答案).pdf trang 9 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 075–077) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1C 2A 3B 4B 5C 6A 7C 8A 9A 10C).
// 25–27: file dap an ghi ca tu (主要 / 参加 / 世界), o trong chi thieu 1 chu -> answer la 1 chu, accept ca tu.
const IMG = '/images/hsk3v3-bai-9-wb/';
const B_GHEP = [
  { key: 'A', text: '我有点儿不舒服，就先回来了。' },
  { key: 'B', text: '晚上还要开车呢，来杯饮料吧。' },
  { key: 'C', text: '他搬家了，现在住的地方离公司很远。' },
  { key: 'D', text: '真的吗？那我多做一些练习，希望能考好。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '是啊，从南边走到北边要一个小时呢。', py: 'Shì a, cóng nánbian zǒudào běibian yào yí gè xiǎoshí ne.' }
];
const B_TU = [
  { key: 'A', text: '卡' }, { key: 'B', text: '只是' }, { key: 'C', text: '网球' },
  { key: 'D', text: '练习' }, { key: 'E', text: '鞋' }, { key: 'F', text: '运动会' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '打不好没关系',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 爱 và 受', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['爱 ài', '爱好 àihào — sở thích<br>爱人 àiren — vợ / chồng', '你有什么爱好？<br>Bạn có sở thích gì?'],
        ['受 shòu', '受到 shòudào — chịu, nhận được', '我受到姐姐的影响，也喜欢拍照了。<br>Tôi chịu ảnh hưởng của chị gái, cũng thích chụp ảnh rồi.']
      ],
        note: 'Hai chữ có phần trên giống nhau (爫 + 冖). Phần dưới của 爱 là 友, của 受 là 又. Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 几', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['几个', 'jǐ gè — mấy (người, cái)', '为了准备篮球比赛，我们几个每天都练习。<br>Để chuẩn bị cho trận bóng rổ, mấy đứa chúng tôi ngày nào cũng tập.'],
        ['几乎', 'jīhū — gần như', '天太黑了，我几乎看不见前面的路。<br>Trời tối quá, tôi gần như không nhìn thấy đường phía trước.']
      ],
        note: '几 đọc <b>jǐ</b> khi hỏi số lượng / chỉ "mấy" (几个, 几天); đọc <b>jī</b> trong 几乎.' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Thi đấu & thành tích<br>比赛与成绩', '比赛 bǐsài (cuộc thi, trận đấu) · 奥运会 Àoyùnhuì (Thế vận hội) · 运动会 yùndònghuì (hội thao) · 运动员 yùndòngyuán (vận động viên) · 球场 qiúchǎng (sân bóng) · 体育馆 tǐyùguǎn (nhà thi đấu)<br>' +
          '练 liàn (luyện) · 练习 liànxí (luyện tập) · 参加 cānjiā (tham gia) · 受到 shòudào (chịu, nhận được) · 受 shòu (chịu) · 影响 yǐngxiǎng (ảnh hưởng) · 得到 dédào (đạt được) · 得 dé (được, giành) · 成绩 chéngjì (thành tích, điểm) · 得分 défēn (ghi điểm) · 分 fēn (chia; điểm) · 名单 míngdān (danh sách)'],
        ['Vận động & rèn luyện<br>运动与锻炼', '体育 tǐyù (thể dục, thể thao) · 运动 yùndòng (vận động, thể thao) · 锻炼 duànliàn (rèn luyện)<br>' +
          '网球 wǎngqiú (quần vợt) · 羽毛球 yǔmáoqiú (cầu lông) · 篮球 lánqiú (bóng rổ) · 足球 zúqiú (bóng đá) · 跑步 pǎobù (chạy bộ) · 跑 pǎo (chạy) · 跳舞 tiàowǔ (nhảy múa) · 爬山 páshān (leo núi)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['受 shòu<br>chịu, nhận', '受影响 — chịu ảnh hưởng<br>选择朋友很重要，因为我们会受他们的影响。<br>Chọn bạn rất quan trọng, vì chúng ta sẽ chịu ảnh hưởng của họ.', 'A：听说很多中国人都喜欢看这个电影。<br>B：对，这个电影在中国很受欢迎。<br>A: Nghe nói nhiều người Trung Quốc thích xem bộ phim này. — B: Đúng, bộ phim này rất được yêu thích ở Trung Quốc.'],
        ['得 dé<br>được, giành', '得第一 — giành giải nhất<br>为了得第一，她每天都练习很久。<br>Để giành giải nhất, ngày nào cô ấy cũng luyện tập rất lâu.', 'A：你怎么这么高兴？<br>B：今天上体育课，我跑得最快，得了第一名。<br>A: Sao bạn vui thế? — B: Hôm nay giờ thể dục, tôi chạy nhanh nhất, được hạng nhất.'],
        ['分 fēn<br>chia', '分给朋友 — chia cho bạn bè<br>这些东西，你打算怎么分给大家？<br>Chỗ đồ này bạn định chia cho mọi người thế nào?', 'A：这么多吃的，我一个人吃不完。<br>B：那咱们分一下吧，我拿走一半，可以吗？<br>A: Nhiều đồ ăn thế này, một mình tôi ăn không hết. — B: Vậy chúng ta chia nhau đi, tôi lấy một nửa được không?'],
        ['分 fēn<br>điểm', '100分 — 100 điểm<br>这次考试，你考了多少分？<br>Kỳ thi lần này bạn được bao nhiêu điểm?', 'A：我得了90分，你呢？<br>B：我跟你一样，也是90分。<br>A: Tôi được 90 điểm, còn bạn? — B: Tôi giống bạn, cũng 90 điểm.'],
        ['名单 míngdān<br>danh sách', '运动员名单 — danh sách vận động viên<br>这是参加这次运动会的学生名单。<br>Đây là danh sách học sinh tham gia hội thao lần này.', 'A：你有咱们班学生的名单吗？<br>B：有，我拿给您。<br>A: Em có danh sách học sinh lớp mình không? — B: Có ạ, em lấy cho thầy.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['参加比赛<br>cānjiā bǐsài — tham gia thi đấu', '看奥运会<br>kàn Àoyùnhuì — xem Thế vận hội'],
        ['学校运动会<br>xuéxiào yùndònghuì — hội thao của trường', '一名运动员<br>yì míng yùndòngyuán — một vận động viên'],
        ['受到影响<br>shòudào yǐngxiǎng — chịu ảnh hưởng', '得到好成绩<br>dédào hǎo chéngjì — đạt thành tích tốt'],
        ['做运动<br>zuò yùndòng — tập thể thao', '锻炼身体<br>duànliàn shēntǐ — rèn luyện sức khỏe'],
        ['练球<br>liàn qiú — tập bóng', '打网球<br>dǎ wǎngqiú — chơi quần vợt'],
        ['打羽毛球<br>dǎ yǔmáoqiú — đánh cầu lông', '踢足球<br>tī zúqiú — đá bóng']
      ] },
      // TU GIAI (file dap an khong co phan nay). (1) 羽毛球比赛 (dang chieu tren TV); (2) 我们班的成绩; (3) 那名运动员 (luong tu 名);
      // (4) 去球场练球 (cum 练球 o muc 2); (5) 什么体育比赛 — 运动 cung tam duoc nhung 体育比赛 la cum quen dung.
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '现在有羽毛球', after: '，快打开电视看看吧。', answer: '比赛' },
          { before: '运动会结束了吗？我们班的', after: '怎么样？', answer: '成绩' },
          { before: '那名', after: '觉得不舒服，现在要休息一下。', answer: '运动员' },
          { before: '下课以后我要去球场', after: '球，你也一起去吧。', answer: '练' },
          { before: '我最喜欢看网球比赛，你喜欢看什么', after: '比赛？', answer: '体育', accept: ['运动'] }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '你们的校园真大啊！', answer: 'F',
            vn: 'Khuôn viên trường các bạn rộng thật đấy! — F: Đúng vậy, đi từ phía nam sang phía bắc mất cả tiếng đồng hồ đấy.' },
          { n: 12, letters: L5, prompt: '大家都去上体育课了，你怎么没去？', answer: 'A',
            vn: 'Mọi người đều đi học thể dục rồi, sao bạn không đi? — A: Tôi hơi mệt nên về trước.' },
          { n: 13, letters: L5, prompt: '小李最近经常迟到，你知道怎么回事吗？', answer: 'C',
            vn: 'Dạo này Tiểu Lý hay đi muộn, bạn có biết là chuyện gì không? — C: Anh ấy chuyển nhà rồi, chỗ ở bây giờ cách công ty rất xa.' },
          { n: 14, letters: L5, prompt: '菜点好了，你想喝点儿什么？来瓶啤酒？', promptPy: 'Cài diǎnhǎo le, nǐ xiǎng hē diǎnr shénme? Lái píng píjiǔ?', answer: 'B',
            vn: 'Gọi món xong rồi, bạn muốn uống gì? Một chai bia nhé? — B: Tối còn phải lái xe, cho cốc nước ngọt thôi.' },
          { n: 15, letters: L5, prompt: '如果你这次考试能得到好成绩，我就送你一个相机。', answer: 'D',
            vn: 'Nếu kỳ thi này con đạt điểm tốt, bố (mẹ) sẽ tặng con một chiếc máy ảnh. — D: Thật ạ? Vậy con làm thêm bài tập, mong là thi tốt.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '老师让我们参加完（　）回教室。', promptPy: 'Lǎoshī ràng wǒmen cānjiāwán (　) huí jiàoshì.', answer: 'F',
            vn: 'Thầy bảo chúng tôi tham gia hội thao xong thì về lớp. — 参加运动会: tham gia hội thao.' },
          { n: 17, letters: L5, prompt: '我听得懂中国人说话，（　）看不懂汉字。', promptPy: 'Wǒ tīngdedǒng Zhōngguórén shuōhuà, (　) kànbudǒng Hànzì.', answer: 'B',
            vn: 'Tôi nghe hiểu người Trung Quốc nói, chỉ là đọc không hiểu chữ Hán. — 只是: chỉ là (nêu điểm hạn chế).' },
          { n: 18, letters: L5, prompt: '很多事情都是这样：（　）得越多，得到的成绩就会越好。', answer: 'D',
            vn: 'Nhiều việc đều như vậy: luyện tập càng nhiều thì thành tích đạt được càng tốt. — 练习: luyện tập.' },
          { n: 19, letters: L5, prompt: 'A：你会打（　）吗？\nB：我不会打，但是我经常去看比赛。', answer: 'C',
            vn: 'A: Bạn có biết chơi quần vợt không?\nB: Tôi không biết chơi, nhưng tôi hay đi xem thi đấu. — 打网球: chơi quần vợt.' },
          { n: 20, letters: L5, prompt: 'A：张老师，还您公交（　），谢谢您。\nB：别客气。我有两张，如果以后忘带了，就告诉我。', answer: 'A',
            vn: 'A: Thầy Trương, em trả thầy thẻ xe buýt, cảm ơn thầy.\nB: Không có gì. Thầy có hai thẻ, sau này nếu quên mang thì cứ nói với thầy. — 公交卡: thẻ xe buýt.' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '儿子最近天天上网看电影，影响了学习成绩，我和妻子都很着急。\n★关于儿子，可以知道什么？',
            promptPy: 'Érzi zuìjìn tiāntiān shàngwǎng kàn diànyǐng, yǐngxiǎngle xuéxí chéngjì, wǒ hé qīzi dōu hěn zháojí.\nGuānyú érzi, kěyǐ zhīdao shénme?',
            options: [{ key: 'A', text: '很着急' }, { key: 'B', text: '不喜欢看电影' }, { key: 'C', text: '最近总是上网' }], answer: 'C',
            vn: 'Dạo này ngày nào con trai cũng lên mạng xem phim, ảnh hưởng đến kết quả học tập, tôi và vợ đều rất sốt ruột. — "天天上网" → C. Người sốt ruột là bố mẹ (A sai).' },
          { n: 22, prompt: '大家注意，山路越来越难走，都小心一点儿。大家可以穿上大衣，因为越高越冷，别感冒了。\n★他们在做什么？',
            options: [{ key: 'A', text: '爬山' }, { key: 'B', text: '看病' }, { key: 'C', text: '买大衣' }], answer: 'A',
            vn: 'Mọi người chú ý, đường núi ngày càng khó đi, cẩn thận một chút nhé. Mọi người có thể mặc áo khoác vào, vì càng lên cao càng lạnh, đừng để bị cảm. — Đường núi, càng lên cao càng lạnh → đang leo núi → A.' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '为了参加唱歌比赛，妹妹准备了一个多月，每天晚饭后都给我们唱一个小时，我们觉得她唱得好极了。比赛那天，妹妹穿上漂亮的衣服，高高兴兴地去了。晚上我下课回到家，发现妹妹难过得很，我以为她没有得到好成绩，没想到她告诉我，她记错时间了，她到的时候，比赛早就结束了。\n★关于妹妹，可以知道什么？',
            promptPy: 'Wèile cānjiā chànggē bǐsài, mèimei zhǔnbèile yí gè duō yuè, měitiān wǎnfàn hòu dōu gěi wǒmen chàng yí gè xiǎoshí, wǒmen juéde tā chàng de hǎo jí le. Bǐsài nà tiān, mèimei chuānshang piàoliang de yīfu, gāogāoxìngxìng de qù le. Wǎnshang wǒ xiàkè huídào jiā, fāxiàn mèimei nánguò de hěn, wǒ yǐwéi tā méiyǒu dédào hǎo chéngjì, méi xiǎngdào tā gàosu wǒ, tā jìcuò shíjiān le, tā dào de shíhou, bǐsài zǎojiù jiéshù le.\nGuānyú mèimei, kěyǐ zhīdao shénme?',
            options: [{ key: 'A', text: '没有漂亮的衣服' }, { key: 'B', text: '没时间准备比赛' }, { key: 'C', text: '每天在家练习唱歌' }], answer: 'C',
            vn: 'Để tham gia cuộc thi hát, em gái chuẩn bị hơn một tháng, tối nào ăn cơm xong cũng hát cho cả nhà nghe một tiếng, chúng tôi thấy em hát hay vô cùng. Hôm thi, em mặc bộ quần áo đẹp, vui vẻ đi. Tối tôi tan học về nhà thấy em buồn lắm, tôi tưởng em không đạt thành tích tốt, không ngờ em bảo em nhớ nhầm giờ, lúc em đến thì cuộc thi đã kết thúc từ lâu. — Tối nào cũng hát ở nhà → C.' },
          { n: 24, prompt: '★妹妹为什么很难过？',
            options: [{ key: 'A', text: '她唱错了' }, { key: 'B', text: '比赛迟到了' }, { key: 'C', text: '比赛成绩不好' }], answer: 'B',
            vn: '"她记错时间了，她到的时候，比赛早就结束了" — nhớ nhầm giờ, đến muộn → B. "Không đạt thành tích tốt" chỉ là anh (chị) tưởng vậy (C sai).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 3,
            prompt: '这本书（ zhǔ ）要介绍了中国人的姓名。', promptPy: 'Zhè běn shū zhǔyào jièshàole Zhōngguórén de xìngmíng.', answer: '主', accept: ['主要'],
            vn: 'Cuốn sách này chủ yếu giới thiệu về họ tên của người Trung Quốc. — 主要 zhǔyào: chủ yếu.' },
          { n: 26, input: true, maxlength: 3, prompt: '你感冒好了吗？会不会影响你（ cān ）加比赛？', promptPy: 'Nǐ gǎnmào hǎo le ma? Huì bu huì yǐngxiǎng nǐ cānjiā bǐsài?', answer: '参', accept: ['参加'],
            vn: 'Bạn khỏi cảm chưa? Có ảnh hưởng đến việc bạn tham gia thi đấu không? — 参加 cānjiā: tham gia.' },
          { n: 27, input: true, maxlength: 3, prompt: '（ shì ）界很大，很多人都想走出去看看。', promptPy: 'Shìjiè hěn dà, hěn duō rén dōu xiǎng zǒu chūqu kànkan.', answer: '世', accept: ['世界'],
            vn: 'Thế giới rất rộng lớn, nhiều người đều muốn đi ra ngoài xem đây đó. — 世界 shìjiè: thế giới.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '校园',
            img: IMG + 'q28.webp', prompt: '校园', promptPy: 'xiàoyuán', placeholder: 'Viết câu có từ 校园…',
            script: '校园有很多人在看比赛。', vn: 'Trong sân trường có rất nhiều người đang xem thi đấu.' },
          { n: 29, free: true, must: '练习', img: IMG + 'q29.webp', prompt: '练习', promptPy: 'liànxí', placeholder: 'Viết câu có từ 练习…',
            script: '她每天都练习两个小时。', vn: 'Ngày nào cô ấy cũng luyện tập hai tiếng.' },
          { n: 30, free: true, must: '运动会', img: IMG + 'q30.webp', prompt: '运动会', promptPy: 'yùndònghuì', placeholder: 'Viết câu có từ 运动会…',
            script: '这个星期日学校有运动会。', vn: 'Chủ nhật tuần này trường có hội thao.' }
        ] }
    ] }
  ]
};
