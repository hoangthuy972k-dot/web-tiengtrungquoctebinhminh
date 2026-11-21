// Bai 17 — 我要多向认真的人学习. Sach bai tap trang 148–156 = PDF trang 153–161.
// Dap an: HSK3--学练手册(习题答案).pdf trang 17 (chi co phan 模拟测练: 1–30).
// Phan 小语讲堂 (trang 148–149) khong co dap an trong file -> tu giai (xem ghi chu "TU GIAI").
// Nghe 1–10: sach khong co file nghe, khong co loi ghi am -> chua dua len (dap an sach: 1B 2A 3C 4C 5C 6A 7A 8C 9B 10B).
const IMG = '/images/hsk3v3-bai-17-wb/';
const B_GHEP = [
  { key: 'A', text: '是的，大家都很喜欢她。' },
  { key: 'B', text: '公司遇到的难题终于被我解决了。' },
  { key: 'C', text: '对，前面过马路，马路西边就是。', py: 'Duì, qiánmian guò mǎlù, mǎlù xībian jiù shì.' },
  { key: 'D', text: '不好意思，我查对了，可写错了。' },
  { key: 'E', text: '当然。我们先坐公交车，然后换地铁。' },
  { key: 'F', text: '我同意。只有这样，才能把事情做好。', py: 'Wǒ tóngyì. Zhǐyǒu zhèyàng, cái néng bǎ shìqing zuòhǎo.' }
];
const B_TU = [
  { key: 'A', text: '前天' }, { key: 'B', text: '有关' }, { key: 'C', text: '常见' },
  { key: 'D', text: '国家' }, { key: 'E', text: '鞋' }, { key: 'F', text: '可' }
];
const L5 = ['A', 'B', 'C', 'D', 'F'];

module.exports = {
  title: '我要多向认真的人学习',
  sections: [
    { title: 'Hán tự & từ ngữ', blocks: [
      { type: 'table', caption: 'Chữ gần giống (形近字): 外 và 处', headers: ['Chữ', 'Từ', 'Câu'], rows: [
        ['外 wài<br>夕 + 卜', '外卖 wàimài — đồ ăn gọi mang đến<br>外地 wàidì — nơi khác, tỉnh khác', '我只有忙的时候才点外卖。<br>Chỉ khi bận tôi mới gọi đồ ăn ngoài.'],
        ['处 chù<br>夂 + 卜', '到处 dàochù — khắp nơi', '同学们正到处找工作呢。<br>Các bạn cùng lớp đang đi khắp nơi tìm việc.']
      ],
        note: 'Hai chữ đều có 卜 bên phải: 外 bên trái là 夕, còn 处 có 夂 ôm từ trái xuống dưới. Tập viết tay các từ và câu theo mẫu trong sách.' },
      { type: 'table', caption: 'Chữ đa âm (多音字): 为', headers: ['Từ', 'Âm đọc', 'Câu ví dụ'], rows: [
        ['为了', 'wèile — để, vì', '为了学好中文，更为了了解中国，她决定去中国留学。<br>Để học giỏi tiếng Trung, hơn nữa là để hiểu Trung Quốc, cô ấy quyết định sang Trung Quốc du học.'],
        ['认为', 'rènwéi — cho rằng', '你不是认为这个题很容易吗？怎么做错了？<br>Chẳng phải bạn cho rằng câu này rất dễ sao? Sao lại làm sai?']
      ],
        note: '为 đọc <b>wèi</b> khi nghĩa là "vì, để" (为了, 为什么); đọc <b>wéi</b> trong 认为, 以为 (cho rằng, tưởng là).' },
      { type: 'table', caption: 'Từ ngữ theo chủ đề (读一读，学一学)', headers: ['Chủ đề', 'Từ ngữ'], rows: [
        ['Cảm xúc và hành vi<br>情绪与行为', '害怕 hàipà (sợ) · 生气 shēngqì (tức giận) · 难过 nánguò (buồn) · 高兴 gāoxìng (vui) · 快乐 kuàilè (vui vẻ) · 开心 kāixīn (vui) · ' +
          '不好意思 bù hǎoyìsi (ngại, xin lỗi) · 着急 zháojí (sốt ruột) · 急 jí (gấp, sốt ruột) · 担心 dānxīn (lo lắng) · 满意 mǎnyì (hài lòng) · 紧张 jǐnzhāng (căng thẳng) · ' +
          '放心 fàngxīn (yên tâm) · 哭 kū (khóc) · 笑 xiào (cười)'],
        ['Vấn đề và gợi ý<br>问题与建议', '难题 nántí (vấn đề khó, bài khó) · 有关 yǒuguān (có liên quan) · 认为 rènwéi (cho rằng) · 以为 yǐwéi (tưởng) · 同意 tóngyì (đồng ý) · ' +
          '比如 bǐrú (ví dụ) · 查 chá (tra) · 回答 huídá (trả lời) · 方向 fāngxiàng (phương hướng) · 方法 fāngfǎ (phương pháp) · 办法 bànfǎ (cách) · ' +
          '怎么办 zěnme bàn (làm sao bây giờ) · 解决 jiějué (giải quyết)<br>' +
          '常见 chángjiàn (thường gặp) · 聪明 cōngming (thông minh) · 有用 yǒuyòng (có ích) · 容易 róngyì (dễ) · 简单 jiǎndān (đơn giản) · 难 nán (khó) · 最好 zuìhǎo (tốt nhất là)']
      ] },
      { type: 'table', caption: 'Từ mới trọng tâm', headers: ['Từ', 'Cụm từ & câu', 'Hội thoại'], rows: [
        ['哭 kū<br>khóc', '哭声 — tiếng khóc<br>妹妹一边哭，一边说她想妈妈了。<br>Em gái vừa khóc vừa nói là nhớ mẹ.', 'A：你怎么一会儿哭，一会儿笑？<br>B：这个电影太好看了，一会儿让你难过，一会儿让你开心。<br>A: Sao bạn lúc khóc lúc cười vậy? — B: Bộ phim này hay quá, lúc thì làm mình buồn, lúc lại làm mình vui.']
      ] },
      { type: 'table', caption: 'Cụm từ thường gặp (读一读词语的常用搭配)', rows: [
        ['感到害怕<br>gǎndào hàipà — cảm thấy sợ', '觉得生气<br>juéde shēngqì — thấy tức giận'],
        ['高兴地笑了<br>gāoxìng de xiào le — vui vẻ cười', '哭起来了<br>kū qǐlai le — òa khóc'],
        ['遇到难题<br>yùdào nántí — gặp vấn đề khó', '解决难题<br>jiějué nántí — giải quyết vấn đề khó'],
        ['回答问题<br>huídá wèntí — trả lời câu hỏi', '两种方法<br>liǎng zhǒng fāngfǎ — hai cách'],
        ['跟历史有关<br>gēn lìshǐ yǒuguān — liên quan đến lịch sử', '不同意<br>bù tóngyì — không đồng ý'],
        ['容易解决<br>róngyì jiějué — dễ giải quyết', '非常有用<br>fēicháng yǒuyòng — rất có ích']
      ] },
      // TU GIAI (file dap an khong co phan nay): (1) 害怕 (姐姐怕狗 -> khong nuoi); (2) 哭 (哭起来了);
      // (3) 难题 (帮我解决); (4) 容易 (容易做错); (5) 生气 (lay tu dien khong noi -> 让人生气).
      { type: 'blankdrill', caption: 'Chọn từ trong bảng "Từ ngữ theo chủ đề" điền vào chỗ trống', hint: 'Gõ từ (chữ Hán) vào ô trống — mỗi từ dùng một lần — rồi bấm "Xem đáp án" để đối chiếu.', maxlength: 4,
        items: [
          { before: '因为姐姐', after: '狗，所以我们家没有养狗。', answer: '害怕' },
          { before: '她打了妹妹几下，妹妹就', after: '起来了。', answer: '哭' },
          { before: '我遇到了一个', after: '，你能帮我解决一下吗？', answer: '难题' },
          { before: '这些题不难，但是', after: '做错，大家最好认真一些。', answer: '容易' },
          { before: '他把我的词典拿走了，也没有告诉我一声，真让人', after: '。', answer: '生气' }
        ] }
    ] },
    { title: 'Mô phỏng đề thi', blocks: [
      { type: 'mocktest',
        note: 'Sách chưa có file nghe nên phần Nghe (câu 1–10) tạm chưa đưa lên. Làm phần Đọc và Viết rồi bấm "Nộp bài".',
        listening: [],
        reading: [
          { n: 11, part: 'Phần 1 · Chọn câu đáp phù hợp (ví dụ: 你知道怎么去国家图书馆吗？→ E)', bank: B_GHEP, letters: L5,
            prompt: '你今天怎么这么高兴？', answer: 'B',
            vn: 'Hôm nay sao bạn vui thế? — B: Vấn đề khó công ty gặp phải cuối cùng đã được tôi giải quyết.' },
          { n: 12, letters: L5, prompt: '张先生做事很认真，我认为我们要向他学习。', answer: 'F',
            vn: 'Ông Trương làm việc rất nghiêm túc, tôi cho rằng chúng ta nên học hỏi ông ấy. — F: Tôi đồng ý. Chỉ có như vậy mới làm tốt mọi việc được.' },
          { n: 13, letters: L5, prompt: '那个小女孩儿真是又聪明又可爱！', promptPy: 'Nàge xiǎo nǚháir zhēn shì yòu cōngming yòu kě\'ài!', answer: 'A',
            vn: 'Cô bé ấy thật vừa thông minh vừa đáng yêu! — A: Đúng vậy, mọi người đều rất thích cô bé.' },
          { n: 14, letters: L5, prompt: '你不是查词典了吗？怎么还写错了？', answer: 'D',
            vn: 'Chẳng phải bạn đã tra từ điển rồi sao? Sao vẫn viết sai? — D: Xin lỗi, tôi tra đúng rồi nhưng lại viết sai.' },
          { n: 15, letters: L5, prompt: '您好，请问去动物园是往这个方向走吗？', answer: 'C',
            vn: 'Chào anh, xin hỏi đi vườn thú là đi theo hướng này phải không? — C: Đúng, phía trước qua đường, bên tây con đường là tới.' },
          { n: 16, part: 'Phần 2 · Chọn từ điền vào chỗ trống (ví dụ: 中间那双（E 鞋）是谁的？)', bank: B_TU, letters: L5,
            prompt: '这件衬衫大小合适，（　）颜色我不喜欢。', answer: 'F',
            vn: 'Chiếc áo sơ mi này vừa cỡ, nhưng màu thì tôi không thích. — 可 = 可是: nhưng.' },
          { n: 17, letters: L5, prompt: '虽然这些花很（　），但是我不知道它们的名字。', answer: 'C',
            vn: 'Tuy những bông hoa này rất thường gặp, nhưng tôi không biết tên chúng. — 常见: thường gặp, phổ biến.' },
          { n: 18, letters: L5, prompt: '现在很多人不常做饭了，这可能和人们工作越来越忙（　）。', answer: 'B',
            vn: 'Bây giờ nhiều người không hay nấu cơm nữa, điều này có lẽ liên quan đến việc công việc ngày càng bận. — 和……有关: có liên quan đến…' },
          { n: 19, letters: L5, prompt: 'A：你是来自哪个（　）的留学生？\nB：我是法国人，很高兴能来中国留学。', answer: 'D',
            promptPy: 'A: Nǐ shì láizì nǎge (　) de liúxuéshēng?\nB: Wǒ shì Fǎguórén, hěn gāoxìng néng lái Zhōngguó liúxué.',
            vn: 'A: Bạn là du học sinh đến từ nước nào?\nB: Tôi là người Pháp, rất vui được sang Trung Quốc du học. — 哪个国家: nước nào.' },
          { n: 20, letters: L5, prompt: 'A：不好意思，（　）借了你的伞，昨天忘记还给你了。\nB：没关系，你把伞放在我桌子上就行了。', answer: 'A',
            promptPy: 'A: Bù hǎoyìsi, (　) jièle nǐ de sǎn, zuótiān wàngjì huán gěi nǐ le.\nB: Méi guānxi, nǐ bǎ sǎn fàng zài wǒ zhuōzi shang jiù xíng le.',
            vn: 'A: Xin lỗi, hôm kia mượn ô của bạn, hôm qua quên trả.\nB: Không sao, bạn để ô lên bàn tôi là được. — 前天: hôm kia (trước 昨天).' },
          { n: 21, part: 'Phần 3 · Đọc đoạn văn, chọn đáp án đúng',
            prompt: '我认为，一个人做事的时候，虽然聪明和认真都很重要，但是只有相信自己，才能真正把事情做好。\n★他认为要想把事情做好，什么最重要？',
            promptPy: 'Wǒ rènwéi, yí gè rén zuòshì de shíhou, suīrán cōngming hé rènzhēn dōu hěn zhòngyào, dànshì zhǐyǒu xiāngxìn zìjǐ, cái néng zhēnzhèng bǎ shìqing zuòhǎo.\nTā rènwéi yào xiǎng bǎ shìqing zuòhǎo, shénme zuì zhòngyào?',
            options: [{ key: 'A', text: '聪明' }, { key: 'B', text: '认真' }, { key: 'C', text: '相信自己' }], answer: 'C',
            vn: 'Tôi cho rằng khi một người làm việc, tuy thông minh và chăm chỉ đều quan trọng, nhưng chỉ có tin vào bản thân mới thật sự làm tốt mọi việc được. — "只有相信自己，才能…" → C.' },
          { n: 22, prompt: '王老师告诉我一个学习汉语、了解中国的好办法，就是读中文报纸，这样能学到有用的句子，更能知道很多中国的新闻。\n★王老师介绍的方法是什么？',
            options: [{ key: 'A', text: '去中国旅游' }, { key: 'B', text: '读中文报纸' }, { key: 'C', text: '多写课本上的句子', py: 'duō xiě kèběn shang de jùzi' }], answer: 'B',
            vn: 'Thầy Vương chỉ cho tôi một cách hay để học tiếng Trung và hiểu Trung Quốc, đó là đọc báo tiếng Trung; như vậy vừa học được những câu có ích, lại biết được nhiều tin tức Trung Quốc. — "就是读中文报纸" → B.' },
          { n: 23, part: 'Câu 23–24 · Đọc đoạn văn, trả lời hai câu hỏi',
            prompt: '妈妈让我和弟弟学游泳。弟弟一个星期就能自己游了，可我一个月还没学会。我觉得很奇怪，妈妈告诉我：弟弟总是在水里玩，所以学得快；我因为害怕，只在旁边听别人讲、看别人游，那是学不会的。只有到水里多练习，才能真正学会游泳。\n★谁学会游泳了？',
            promptPy: 'Māma ràng wǒ hé dìdi xué yóuyǒng. Dìdi yí gè xīngqī jiù néng zìjǐ yóu le, kě wǒ yí gè yuè hái méi xuéhuì. Wǒ juéde hěn qíguài, māma gàosu wǒ: dìdi zǒngshì zài shuǐ li wán, suǒyǐ xué de kuài; wǒ yīnwèi hàipà, zhǐ zài pángbiān tīng biérén jiǎng, kàn biérén yóu, nà shì xué bu huì de. Zhǐyǒu dào shuǐ li duō liànxí, cái néng zhēnzhèng xuéhuì yóuyǒng.\nShéi xuéhuì yóuyǒng le?',
            options: [{ key: 'A', text: '我' }, { key: 'B', text: '妈妈' }, { key: 'C', text: '弟弟' }], answer: 'C',
            vn: 'Mẹ cho tôi và em trai đi học bơi. Em trai một tuần đã tự bơi được, còn tôi một tháng vẫn chưa biết bơi. Tôi thấy rất lạ, mẹ bảo: em trai lúc nào cũng chơi dưới nước nên học nhanh; còn tôi vì sợ, chỉ đứng bên cạnh nghe người ta giảng, xem người ta bơi, như thế thì không học được. Chỉ có xuống nước luyện tập nhiều mới thật sự biết bơi. — Em trai một tuần đã tự bơi được → C.' },
          { n: 24, prompt: '★妈妈认为学游泳什么最重要？',
            options: [{ key: 'A', text: '多练习' }, { key: 'B', text: '认真听别人讲' }, { key: 'C', text: '多看别人怎么游' }], answer: 'A',
            vn: '"只有到水里多练习，才能真正学会游泳" → A. Chỉ nghe giảng, xem người khác bơi thì "学不会" (B, C sai).' }
        ],
        writing: [
          { n: 25, part: 'Viết · Phần 1 · Viết chữ Hán theo pinyin (ví dụ: 咱们一会儿（dǎ → 打）车回家吧。)', input: true, maxlength: 2,
            prompt: '你先慢慢（ xiàng ）前走，我买好票就去找你。', promptPy: 'Nǐ xiān mànmàn xiàng qián zǒu, wǒ mǎihǎo piào jiù qù zhǎo nǐ.', answer: '向',
            vn: 'Bạn cứ đi chầm chậm về phía trước, tôi mua vé xong sẽ đi tìm bạn. — 向前走 xiàng qián zǒu: đi về phía trước.' },
          { n: 26, input: true, maxlength: 2, prompt: '年轻的时候，我一有机会就到（ chù ）旅游。', promptPy: 'Niánqīng de shíhou, wǒ yì yǒu jīhuì jiù dàochù lǚyóu.', answer: '处',
            vn: 'Hồi trẻ, hễ có cơ hội là tôi đi du lịch khắp nơi. — 到处 dàochù: khắp nơi.' },
          { n: 27, input: true, maxlength: 2, prompt: '这句话是什么意思？哪位同学来回（ dá ）一下？', promptPy: 'Zhè jù huà shì shénme yìsi? Nǎ wèi tóngxué lái huídá yíxià?', answer: '答',
            vn: 'Câu này có nghĩa là gì? Bạn nào trả lời thử xem? — 回答 huídá: trả lời.' },
          // 28–30: de mo (nhin tranh dat cau) — khong cham diem; script = cau trong file dap an.
          { n: 28, part: 'Viết · Phần 2 · Nhìn tranh, dùng từ cho sẵn viết một câu (ví dụ: 开心 → 他开心得跳起来了。)', free: true, must: '生气',
            img: IMG + 'q28.webp', prompt: '生气', promptPy: 'shēngqì', placeholder: 'Viết câu có từ 生气…',
            script: '她生气地看了男朋友一眼。', vn: 'Cô ấy tức giận liếc bạn trai một cái.' },
          { n: 29, free: true, must: '容易', img: IMG + 'q29.webp', prompt: '容易', promptPy: 'róngyì', placeholder: 'Viết câu có từ 容易…',
            script: '她很容易就得了满分。', vn: 'Cô ấy dễ dàng đạt điểm tuyệt đối.' },
          { n: 30, free: true, must: '留学', img: IMG + 'q30.webp', prompt: '留学', promptPy: 'liúxué', placeholder: 'Viết câu có từ 留学…',
            script: '他们都是来中国留学的。', vn: 'Họ đều là người đến Trung Quốc du học.' }
        ] }
    ] }
  ]
};
