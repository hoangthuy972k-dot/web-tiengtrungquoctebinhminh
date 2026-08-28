// ══════════════════════════════════════════
// DATA — Bài 9: 题太多，我没做完
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'错',py:'cuò',pos:'Tính từ',vn:'sai, nhầm',em:'❌',lesson:1,
   ex_zh:'你打错了。',ex_py:'Nǐ dǎ cuò le.',ex_vn:'Bạn gọi nhầm số rồi.',
   exList:[
     {zh:'你打错了。',py:'Nǐ dǎ cuò le.',vn:'Bạn gọi nhầm số rồi.'},
     {zh:'对不起，我说错了。',py:'Duìbuqǐ, wǒ shuō cuò le.',vn:'Xin lỗi, tôi nói sai rồi.'},
     {zh:'这个字你写错了。',py:'Zhège zì nǐ xiě cuò le.',vn:'Chữ này bạn viết sai rồi.'},
   ],
   hanzi:[
     {c:'错',p:'cuò',type:'左右结构 · Trái-phải',st:13,ord:'钅(kim) trái → 昔 (tích) phải',rad:'钅(kim – kim loại)',mean:'sai, nhầm',
      tip:'Đã gặp trong 不错 (Bài 5) — 钅 xưa liên quan tới việc mài giũa, sai lệch trong chế tác kim loại.',
      cf:'措 (cuò – "biện pháp")',w:'打错 / 不错 / 错了'},
   ]},
  {n:2,zh:'从',py:'cóng',pos:'Giới từ',vn:'từ (mốc thời gian, địa điểm)',em:'🚩',lesson:2,
   ex_zh:'从什么时候开始？',ex_py:'Cóng shénme shíhou kāishǐ?',ex_vn:'Bắt đầu từ khi nào?',
   exList:[
     {zh:'从什么时候开始？',py:'Cóng shénme shíhou kāishǐ?',vn:'Bắt đầu từ khi nào?'},
     {zh:'我从北京来。',py:'Wǒ cóng Běijīng lái.',vn:'Tôi đến từ Bắc Kinh.'},
     {zh:'从这儿到学校很近。',py:'Cóng zhèr dào xuéxiào hěn jìn.',vn:'Từ đây đến trường rất gần.'},
   ],
   hanzi:[
     {c:'从',p:'cóng',type:'独体字 · Chữ đơn',st:4,ord:'人→人 (hai người nối tiếp)',rad:'人 (nhân – người)',mean:'từ, theo',
      tip:'Hình hai người nối đuôi nhau đi cùng hướng → nghĩa "ĐI THEO, xuất phát TỪ".',
      cf:'丛 (cóng – "bụi cây", thêm nét dưới)',w:'从…开始 / 从来 / 自从'},
   ]},
  {n:3,zh:'跳舞',py:'tiàowǔ',pos:'Động từ',vn:'nhảy múa, khiêu vũ',em:'💃',lesson:2,
   ex_zh:'我第一次跳舞是在七岁的时候。',ex_py:'Wǒ dì yī cì tiàowǔ shì zài qī suì de shíhou.',ex_vn:'Lần đầu tiên tôi múa là lúc 7 tuổi.',
   exList:[
     {zh:'我第一次跳舞是在七岁的时候。',py:'Wǒ dì yī cì tiàowǔ shì zài qī suì de shíhou.',vn:'Lần đầu tiên tôi múa là lúc 7 tuổi.'},
     {zh:'她跳舞跳得很好。',py:'Tā tiàowǔ tiào de hěn hǎo.',vn:'Cô ấy múa rất đẹp.'},
     {zh:'晚上我们去跳舞吧。',py:'Wǎnshang wǒmen qù tiàowǔ ba.',vn:'Tối nay chúng ta đi khiêu vũ đi.'},
   ],
   hanzi:[
     {c:'跳',p:'tiào',type:'左右结构 · Trái-phải',st:13,ord:'足 (túc) trái → 兆 (triệu) phải',rad:'足 (túc – chân)',mean:'nhảy',
      tip:'Bộ 足 (chân, đã gặp ở 跑 Bài 2) → dùng chân bật lên = NHẢY.',
      cf:'桃 (táo – "quả đào", bộ 木)',w:'跳舞 / 跳高 / 心跳'},
     {c:'舞',p:'wǔ',type:'独体字 · Chữ đơn',st:14,ord:'一→一→夕→丨丨丨→一→丿→丨→一',rad:'舛 (suyễn)',mean:'múa',
      tip:'Hình người dang tay múa với dải lụa cách điệu → "MÚA".',
      cf:'午 (wǔ – "buổi trưa", ít nét hơn)',w:'跳舞 / 舞蹈'},
   ]},
  {n:4,zh:'第一',py:'dì-yī',pos:'Số từ',vn:'đầu tiên, thứ nhất',em:'🥇',lesson:2,
   ex_zh:'这是他的第一个工作。',ex_py:'Zhè shì tā de dì yī ge gōngzuò.',ex_vn:'Đây là công việc đầu tiên của cậu ấy.',
   exList:[
     {zh:'这是他的第一个工作。',py:'Zhè shì tā de dì yī ge gōngzuò.',vn:'Đây là công việc đầu tiên của cậu ấy.'},
     {zh:'这是我第一次来中国。',py:'Zhè shì wǒ dì yī cì lái Zhōngguó.',vn:'Đây là lần đầu tiên tôi đến Trung Quốc.'},
     {zh:'他考了第一名。',py:'Tā kǎole dì yī míng.',vn:'Cậu ấy thi được hạng nhất.'},
   ],
   hanzi:[
     {c:'第',p:'dì',type:'上下结构 · Trên-dưới',st:11,ord:'⺮ (trúc) → 弟 (đệ)',rad:'⺮ (trúc – tre)',mean:'thứ (số thứ tự)',
      tip:'Xưa khắc thứ tự lên thẻ tre 竹 → 第 + số = biểu thị THỨ TỰ.',
      cf:'弟 (dì – "em trai", thiếu bộ 竹)',w:'第一 / 第二 / 第几'},
   ]},
  {n:5,zh:'希望',py:'xīwàng',pos:'Động từ',vn:'hy vọng',em:'🌠',lesson:3,
   ex_zh:'希望他能喜欢。',ex_py:'Xīwàng tā néng xǐhuan.',ex_vn:'Hy vọng cậu ấy sẽ thích nó.',
   exList:[
     {zh:'希望他能喜欢。',py:'Xīwàng tā néng xǐhuan.',vn:'Hy vọng cậu ấy sẽ thích nó.'},
     {zh:'我希望明天天气好。',py:'Wǒ xīwàng míngtiān tiānqì hǎo.',vn:'Tôi hy vọng ngày mai thời tiết đẹp.'},
     {zh:'希望你早点儿回来。',py:'Xīwàng nǐ zǎodiǎnr huílái.',vn:'Hy vọng bạn về sớm một chút.'},
   ],
   hanzi:[
     {c:'希',p:'xī',type:'上下结构 · Trên-dưới',st:7,ord:'㐅→巾',rad:'巾 (cân – khăn)',mean:'mong, hiếm',
      tip:'Nghĩa gốc liên quan tới sự "hiếm, ít gặp" → mong muốn điều hiếm có = HY VỌNG.',
      cf:'稀 (xī – "hiếm", thêm bộ 禾)',w:'希望 / 希奇'},
     {c:'望',p:'wàng',type:'上下结构 · Trên-dưới',st:11,ord:'亡→月→王',rad:'月 (nguyệt – mặt trăng)',mean:'trông mong, nhìn xa',
      tip:'Người đứng nhìn 月 (trăng) từ xa → ánh mắt TRÔNG MONG, hy vọng.',
      cf:'忘 (wàng – "quên", bộ 心)',w:'希望 / 看望 / 望远镜'},
   ]},
  {n:6,zh:'问题',py:'wèntí',pos:'Danh từ',vn:'câu hỏi, vấn đề',em:'❓',lesson:3,
   ex_zh:'没问题！',ex_py:'Méi wèntí!',ex_vn:'Không thành vấn đề!',
   exList:[
     {zh:'没问题！',py:'Méi wèntí!',vn:'Không thành vấn đề!'},
     {zh:'我有一个问题想问你。',py:'Wǒ yǒu yí ge wèntí xiǎng wèn nǐ.',vn:'Tôi có một câu hỏi muốn hỏi bạn.'},
     {zh:'这是一个大问题。',py:'Zhè shì yí ge dà wèntí.',vn:'Đây là một vấn đề lớn.'},
   ],
   hanzi:[
     {c:'问',p:'wèn',type:'半包围 · Bán bao (门)',st:6,ord:'门 (môn) bao ngoài → 口 (khẩu) bên trong',rad:'门 (môn – cửa)',mean:'hỏi',
      tip:'Đã học ở Bài 4 — miệng 口 đứng ở cửa 门 cất tiếng HỎI.',
      cf:'间 (jiān)',w:'问题 / 问一下 / 请问'},
     {c:'题',p:'tí',type:'左右结构 · Trái-phải',st:15,ord:'是 (thị) trái → 页 (hiệt) phải',rad:'页 (hiệt – đầu, trang)',mean:'đề bài, chủ đề',
      tip:'Bộ 页 (trang giấy/tiêu đề) → phần đầu trang nêu ra ĐỀ BÀI, chủ đề.',
      cf:'提 (tí – "đề xuất", bộ 扌)',w:'问题 / 题目 / 考题'},
   ]},
  {n:7,zh:'欢迎',py:'huānyíng',pos:'Động từ',vn:'chào mừng, hoan nghênh',em:'🎉',lesson:3,
   ex_zh:'非常欢迎。',ex_py:'Fēicháng huānyíng.',ex_vn:'Vô cùng hoan nghênh.',
   exList:[
     {zh:'非常欢迎。',py:'Fēicháng huānyíng.',vn:'Vô cùng hoan nghênh.'},
     {zh:'欢迎来中国！',py:'Huānyíng lái Zhōngguó!',vn:'Chào mừng đến Trung Quốc!'},
     {zh:'我们都很欢迎他。',py:'Wǒmen dōu hěn huānyíng tā.',vn:'Chúng tôi đều rất hoan nghênh anh ấy.'},
   ],
   hanzi:[
     {c:'欢',p:'huān',type:'左右结构 · Trái-phải',st:6,ord:'又 (hựu) trái → 欠 (khiếm) phải',rad:'又 (hựu)',mean:'vui mừng',
      tip:'Nghĩa liên quan tới cảm xúc VUI MỪNG, phấn khởi khi gặp gỡ.',
      cf:'次 (cì – "lần", bộ khác trái)',w:'欢迎 / 喜欢 / 欢乐'},
     {c:'迎',p:'yíng',type:'半包围 · Bán bao (辶)',st:7,ord:'卬 → 辶 (viết sau cùng)',rad:'辶 (sước – đi)',mean:'đón, nghênh',
      tip:'Bộ 辶 (đi) → ra tận nơi để ĐÓN CHÀO ai đó.',
      cf:'仰 (yǎng – "ngửa lên")',w:'欢迎 / 迎接'},
   ]},
  {n:8,zh:'上班',py:'shàngbān',pos:'Động từ',vn:'đi làm, vào ca',em:'💼',lesson:3,
   ex_zh:'他从下个星期一开始上班。',ex_py:'Tā cóng xià ge xīngqīyī kāishǐ shàngbān.',ex_vn:'Cậu ấy bắt đầu đi làm từ thứ Hai tuần sau.',
   exList:[
     {zh:'他从下个星期一开始上班。',py:'Tā cóng xià ge xīngqīyī kāishǐ shàngbān.',vn:'Cậu ấy bắt đầu đi làm từ thứ Hai tuần sau.'},
     {zh:'我每天九点上班。',py:'Wǒ měitiān jiǔ diǎn shàngbān.',vn:'Mỗi ngày tôi đi làm lúc 9 giờ.'},
     {zh:'爸爸已经去上班了。',py:'Bàba yǐjīng qù shàngbān le.',vn:'Bố đã đi làm rồi.'},
   ],
   hanzi:[
     {c:'上',p:'shàng',type:'独体字 · Chữ đơn',st:3,ord:'一→丨→一',rad:'一 (nhất)',mean:'trên, lên',
      tip:'Đã học ở Bài 3/4 (早上, 晚上) — nét ngắn trên nét ngang dài = hướng lên.',
      cf:'下 (xià)',w:'上班 / 上课 / 早上'},
     {c:'班',p:'bān',type:'左右结构 · Trái-phải',st:10,ord:'王 (vương) trái → 刂 (đao) giữa → 王 phải',rad:'王 (vương – ngọc)',mean:'ca làm, nhóm, lớp',
      tip:'Hai miếng ngọc 王 được tách ra bởi dao 刂 → phân chia thành từng NHÓM/CA làm việc.',
      cf:'斑 (bān – "vết đốm")',w:'上班 / 班长 / 一班'},
   ]},
  {n:9,zh:'懂',py:'dǒng',pos:'Động từ',vn:'hiểu',em:'💡',lesson:4,
   ex_zh:'你听懂了吗？',ex_py:'Nǐ tīng dǒng le ma?',ex_vn:'Bạn nghe có hiểu không?',
   exList:[
     {zh:'你听懂了吗？',py:'Nǐ tīng dǒng le ma?',vn:'Bạn nghe có hiểu không?'},
     {zh:'我看懂了这本书。',py:'Wǒ kàn dǒngle zhè běn shū.',vn:'Tôi đọc hiểu quyển sách này rồi.'},
     {zh:'这个问题我不懂。',py:'Zhège wèntí wǒ bù dǒng.',vn:'Vấn đề này tôi không hiểu.'},
   ],
   hanzi:[
     {c:'懂',p:'dǒng',type:'左右结构 · Trái-phải',st:15,ord:'忄(tâm) trái → 董 (đổng) phải',rad:'忄(tâm – trái tim)',mean:'hiểu',
      tip:'Bộ 忄(tâm/trí) → dùng đầu óc nắm rõ được ý nghĩa = HIỂU.',
      cf:'董 (dǒng – "giám sát", thiếu bộ 忄)',w:'听懂 / 看懂 / 不懂'},
   ]},
  {n:10,zh:'完',py:'wán',pos:'Động từ',vn:'xong, hết',em:'✅',lesson:4,
   ex_zh:'题太多，我没做完。',ex_py:'Tí tài duō, wǒ méi zuò wán.',ex_vn:'Đề nhiều quá, tôi làm chưa xong.',
   exList:[
     {zh:'题太多，我没做完。',py:'Tí tài duō, wǒ méi zuò wán.',vn:'Đề nhiều quá, tôi làm chưa xong.'},
     {zh:'我吃完饭了。',py:'Wǒ chī wán fàn le.',vn:'Tôi ăn xong cơm rồi.'},
     {zh:'电影已经完了。',py:'Diànyǐng yǐjīng wán le.',vn:'Bộ phim đã kết thúc rồi.'},
   ],
   hanzi:[
     {c:'完',p:'wán',type:'上下结构 · Trên-dưới',st:7,ord:'宀 (miên) → 元 (nguyên)',rad:'宀 (miên – mái nhà)',mean:'hoàn thành, hết',
      tip:'Mái nhà 宀 che kín trọn vẹn 元 (đầu tiên/vẹn toàn) → mọi thứ đã trọn vẹn = XONG, HẾT.',
      cf:'院 (yuàn – đã học ở Bài 2, khác bộ)',w:'做完 / 吃完 / 用完'},
   ]},
  {n:11,zh:'题',py:'tí',pos:'Danh từ',vn:'câu hỏi, đề bài',em:'📄',lesson:4,
   ex_zh:'昨天的考试题很难。',ex_py:'Zuótiān de kǎoshì tí hěn nán.',ex_vn:'Đề thi hôm qua rất khó.',
   exList:[
     {zh:'昨天的考试题很难。',py:'Zuótiān de kǎoshì tí hěn nán.',vn:'Đề thi hôm qua rất khó.'},
     {zh:'这道题我不会。',py:'Zhè dào tí wǒ bú huì.',vn:'Câu hỏi này tôi không biết làm.'},
     {zh:'今天的题太多了。',py:'Jīntiān de tí tài duō le.',vn:'Đề bài hôm nay nhiều quá.'},
   ],
   hanzi:[
     {c:'题',p:'tí',type:'左右结构 · Trái-phải',st:15,ord:'是 (thị) trái → 页 (hiệt) phải',rad:'页 (hiệt – đầu, trang)',mean:'đề bài, câu hỏi',
      tip:'Ôn lại: 页 (trang) → phần nêu ra ĐỀ/CÂU HỎI cần trả lời.',
      cf:'提 (tí – "đề xuất")',w:'问题 / 考题 / 题目'},
   ]},
];

const wuData = [
  {img:'💃',label:'跳舞',py:'tiàowǔ',letter:'A'},
  {img:'💼',label:'上班',py:'shàngbān',letter:'B'},
  {img:'❓',label:'问题',py:'wèntí',letter:'C'},
  {img:'🎉',label:'欢迎',py:'huānyíng',letter:'D'},
  {img:'✅',label:'完',py:'wán',letter:'E'},
  {img:'💡',label:'懂',py:'dǒng',letter:'F'},
];

var dialogData = [
  {scene:'打电话 · Gọi điện thoại',
   lines:[
     {sp:0,zh:'你好，请问张欢在吗？',py:'Nǐ hǎo, qǐngwèn Zhāng Huān zài ma?',vn:'Xin chào, cho hỏi có Trương Hoan ở đó không ạ?'},
     {sp:1,zh:'你打错了，我们这儿没有叫张欢的。',py:'Nǐ dǎ cuò le, wǒmen zhèr méiyǒu jiào Zhāng Huān de.',vn:'Bạn gọi nhầm số rồi, ở đây chúng tôi không có ai tên là Trương Hoan cả.'},
     {sp:0,zh:'对不起。',py:'Duìbùqǐ.',vn:'Xin lỗi nhé.'},
   ]},
  {scene:'在学校 · Ở trường học',
   lines:[
     {sp:0,zh:'您从几岁开始学习跳舞？',py:'Nín cóng jǐ suì kāishǐ xuéxí tiàowǔ?',vn:'Cô bắt đầu học khiêu vũ/múa từ năm mấy tuổi vậy ạ?'},
     {sp:1,zh:'我第一次跳舞是在七岁的时候。',py:'Wǒ dì yī cì tiàowǔ shì zài qī suì de shíhou.',vn:'Lần đầu tiên tôi múa là lúc 7 tuổi.'},
     {sp:0,zh:'我女儿今年也七岁了，我希望她能跟您学跳舞，可以吗？',py:'Wǒ nǚ\'ér jīnnián yě qī suì le, wǒ xīwàng tā néng gēn nín xué tiàowǔ, kěyǐ ma?',vn:'Con gái tôi năm nay cũng 7 tuổi rồi, tôi hy vọng cháu có thể học múa với cô, được không ạ?'},
     {sp:1,zh:'没问题，非常欢迎。',py:'Méi wèntí, fēicháng huānyíng.',vn:'Không thành vấn đề, vô cùng hoan nghênh cháu.'},
   ]},
  {scene:'在家里 · Ở nhà',
   lines:[
     {sp:0,zh:'你知道吗？大卫找到工作了。',py:'Nǐ zhīdào ma? Dàwèi zhǎodào gōngzuò le.',vn:'Bạn biết tin gì chưa? David tìm được việc làm rồi đấy.'},
     {sp:1,zh:'太好了！他从什么时候开始上班？',py:'Tài hǎo le! Tā cóng shénme shíhou kāishǐ shàngbān?',vn:'Tuyệt vời quá! Cậu ấy bắt đầu đi làm từ khi nào thế?'},
     {sp:0,zh:'从下个星期一开始。这是他的第一个工作，希望他能喜欢。',py:'Cóng xià ge xīngqīyī kāishǐ. Zhè shì tā de dì yī ge gōngzuò, xīwàng tā néng xǐhuan.',vn:'Bắt đầu từ thứ Hai tuần sau. Đây là công việc đầu tiên của cậu ấy, hy vọng cậu ấy sẽ thích nó.'},
   ]},
  {scene:'在教室 · Trong lớp học',
   lines:[
     {sp:0,zh:'昨天的考试怎么样？你都听懂了吗？',py:'Zuótiān de kǎoshì zěnmeyàng? Nǐ dōu tīng dǒng le ma?',vn:'Bài thi hôm qua thế nào? Bạn nghe có hiểu hết không?'},
     {sp:1,zh:'听懂了。',py:'Tīng dǒng le.',vn:'Tôi nghe hiểu hết.'},
     {sp:0,zh:'你都做完了没有？',py:'Nǐ dōu zuò wán le méiyǒu?',vn:'Thế bạn đã làm xong hết chưa?'},
     {sp:1,zh:'题太多，我没做完。',py:'Tí tài duō, wǒ méi zuò wán.',vn:'Đề nhiều quá, tôi làm chưa xong.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'打',right:'错'},
  {left:'从',right:'开始'},
  {left:'第一',right:'次'},
  {left:'希望',right:'喜欢'},
  {left:'听',right:'懂'},
  {left:'做',right:'完'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: ngày đầu đi làm, kiểm tra hiểu bài.
// Ôn lại 已经 (Bài 4).
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/bai-9/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {pre:'我第一次跳舞', blank:'是在七岁的时候', post:'。', py:'Wǒ dì-yī cì tiàowǔ shì zài qī suì de shíhou.', vn:'Lần đầu tiên tôi múa là lúc 7 tuổi.'},
    ]},
    {num:2, lines:[
      {pre:'这是她的第一个工作，', blank:'她非常喜欢', post:'。', py:'Zhè shì tā de dì-yī gè gōngzuò, tā fēicháng xǐhuan.', vn:'Đây là công việc đầu tiên của cô ấy, cô ấy rất thích.'},
    ]},
    {num:3, lines:[
      {pre:'今天的汉语课我', blank:'都听懂了', post:'。', py:'Jīntiān de Hànyǔ kè wǒ dōu tīngdǒng le.', vn:'Bài học tiếng Trung hôm nay tôi đều nghe hiểu hết.'},
    ]},
    {num:4, lines:[
      {pre:'你看，衣服', blank:'都洗完了', post:'。', py:'Nǐ kàn, yīfu dōu xǐwán le.', vn:'Bạn xem, quần áo giặt xong hết rồi.'},
    ]},
    {num:5, lines:[
      {pre:'考试的题太多了，', blank:'我没有做完', post:'。', py:'Kǎoshì de tí tài duō le, wǒ méiyǒu zuòwán.', vn:'Đề thi nhiều quá, tôi chưa làm xong.'},
    ]},
    {num:6, lines:[
      {speaker:'男', pre:'你从几岁', blank:'开始学跳舞', post:'？', py:'Nǐ cóng jǐ suì kāishǐ xué tiàowǔ?', vn:'Bạn học múa từ mấy tuổi?'},
      {speaker:'女', pre:'我第一次跳舞', blank:'是在七岁的时候', post:'。', py:'Wǒ dì-yī cì tiàowǔ shì zài qī suì de shíhou.', vn:'Lần đầu tiên tôi múa là lúc 7 tuổi.'},
    ]},
    {num:7, lines:[
      {speaker:'女', pre:'今天的考试', blank:'怎么样', post:'？', py:'Jīntiān de kǎoshì zěnmeyàng?', vn:'Bài thi hôm nay thế nào?'},
      {speaker:'男', pre:'不太好，', blank:'有几个题没做完', post:'。', py:'Bú tài hǎo, yǒu jǐ gè tí méi zuòwán.', vn:'Không tốt lắm, có vài câu chưa làm xong.'},
    ]},
    {num:8, lines:[
      {speaker:'男', pre:'你看见我的', blank:'手机了吗', post:'？', py:'Nǐ kànjiàn wǒ de shǒujī le ma?', vn:'Bạn có thấy điện thoại của tôi không?'},
      {speaker:'女', pre:'就在', blank:'桌子上面，你看见了没有', post:'？', py:'Jiù zài zhuōzi shàngmian, nǐ kànjiàn le méiyǒu?', vn:'Ở ngay trên bàn kìa, bạn thấy chưa?'},
    ]},
    {num:9, lines:[
      {speaker:'女', pre:'这么多的衣服，你一个人', blank:'能洗完吗', post:'？', py:'Zhème duō de yīfu, nǐ yí gè rén néng xǐwán ma?', vn:'Nhiều quần áo thế này, một mình bạn giặt xong được không?'},
      {speaker:'男', pre:'你现在有时间吗？', blank:'帮我一起洗吧', post:'。', py:'Nǐ xiànzài yǒu shíjiān ma? Bāng wǒ yìqǐ xǐ ba.', vn:'Bạn có thời gian không? Giúp tôi giặt cùng đi.'},
    ]},
    {num:10, lines:[
      {speaker:'女', pre:'这是我第一次去大医院，', blank:'医院里人真多啊', post:'。', py:'Zhè shì wǒ dì-yī cì qù dà yīyuàn, yīyuàn lǐ rén zhēn duō a.', vn:'Đây là lần đầu tôi đến bệnh viện lớn, trong bệnh viện đông người thật.'},
      {speaker:'男', pre:'', blank:'是啊', post:'。', py:'Shì a.', vn:'Đúng vậy.'},
    ]},
  ],
  mc: [
    {num:11, options:['想找女的','想找张欢','想去看看张欢'], ans:1,
     explain:'男：您好，请问张欢在吗？女：对不起，我们这儿没有张欢，你打错电话了。问：男的为什么要打电话？ → 想找张欢。'},
    {num:12, options:['昨天','今天','明天'], ans:2,
     explain:'男：买到电影票了没有？今天晚上的。女：买到了，是明天的。今天的都卖完了。问：他们什么时候去看电影？ → 明天。'},
    {num:13, options:['医院','学校','公司'], ans:0,
     explain:'女：你真的认识去医院的路？是不是走错了？男：没错，就在那个公司的前面，学校的后面。问：他们想去哪儿？ → 医院。'},
    {num:14, options:['没看见','看见了','没有报纸'], ans:0,
     explain:'男：看见了没有？报纸就在电视的左边。女：等一下，你这儿的东西太多了。问：女的看见报纸了没有？ → 没看见。'},
    {num:15, options:['没听懂','不会做','没做完'], ans:2,
     explain:'男：昨天的考试怎么样？都做完了没有？女：题太多，我没做完。问：她昨天的考试怎么样？ → 没做完。'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: ngày đầu tiên đi làm
// ══════════════════════════════════════════
var fillData = [
  {pre:'你好，欢迎你来上班！这是你',blank:'第一',post:'次来吧？',hint:'(đầu tiên, thứ nhất)',ans:'第一'},
  {pre:'是的，谢谢，我',blank:'希望',post:'能在这儿工作得很好。',hint:'(hy vọng)',ans:'希望'},
  {pre:'你',blank:'从',post:'什么时候开始学习中文的？',hint:'(từ)',ans:'从'},
  {pre:'我从去年开始学的，现在',blank:'已经',post:'懂一点儿了。',hint:'(đã — ôn Bài 4)',ans:'已经'},
  {pre:'老师说的话你都听',blank:'懂',post:'了吗？',hint:'(hiểu — bổ ngữ kết quả)',ans:'懂',exp:'听懂 = nghe HIỂU (bổ ngữ kết quả chỉ kết quả của hành động nghe).'},
  {pre:'',blank:'懂',post:'了，可是题太多。',hint:'(hiểu)',ans:'懂'},
  {pre:'我没做',blank:'完',post:'。',hint:'(xong — bổ ngữ kết quả)',ans:'完',exp:'做完 = làm XONG.'},
  {pre:'对不起，你打',blank:'错',post:'电话了。',hint:'(nhầm — bổ ngữ kết quả)',ans:'错'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['这','是','你','第一','次','来','吧','？'],ans:'这是你第一次来吧？',audio:'这是你第一次来吧？'},
  {words:['我','希望','能','在','这儿','工作','得','很','好','。'],ans:'我希望能在这儿工作得很好。',audio:'我希望能在这儿工作得很好。'},
  {words:['你','从','什么','时候','开始','学习','中文','的','？'],ans:'你从什么时候开始学习中文的？',audio:'你从什么时候开始学习中文的？'},
  {words:['我','从','去年','开始','学','的','。'],ans:'我从去年开始学的。',audio:'我从去年开始学的。'},
  {words:['老师','说','的','话','我','都','听','懂','了','。'],ans:'老师说的话我都听懂了。',audio:'老师说的话我都听懂了。'},
  {words:['题','太','多','，','我','没','做','完','。'],ans:'题太多，我没做完。',audio:'题太多，我没做完。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'什么时候你从开始学习中文？',
   opts:['你从什么时候开始学习中文？','你什么时候从开始学习中文？','从你什么时候开始学习中文？','你从开始什么时候学习中文？'],ans:0,
   exp:'从 đứng NGAY TRƯỚC mốc thời gian: 从 + 什么时候/去年/七岁.'},
  {wrong:'这是一第次来吧？',
   opts:['这是第一次来吧？','这是一第次来吧？','这是次第一来吧？','第这是一次来吧？'],ans:0,
   exp:'第 đứng TRƯỚC số đếm để tạo số thứ tự: 第一, 第二, không đặt sau.'},
  {wrong:'我听这个话不。',
   opts:['我听不懂这句话。','我听这句话不懂。','我不听懂这句话。','我听懂不这句话。'],ans:0,
   exp:'Phủ định của bổ ngữ kết quả: Động từ + 不 + Bổ ngữ (听不懂), không dùng 不 + Động từ.'},
  {wrong:'我做题完了。',
   opts:['我做完题了。','我做题完了。','我完做题了。','做我完题了。'],ans:0,
   exp:'Bổ ngữ kết quả (完) phải đứng NGAY SAU động từ (做完), rồi mới đến tân ngữ (题).'},
  {wrong:'你打了错电话。',
   opts:['你打错电话了。','你打了错电话。','你错打电话了。','你打电话错了。'],ans:0,
   exp:'打错 (bổ ngữ kết quả) là một khối không tách rời, 了 đặt SAU cả cụm 打错 + tân ngữ.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm + chấm điểm AI)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn. Ghi âm xong mới nên xem gợi ý/câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'欢迎你来上班！这是你第一次来吧？',
     q_vn:'Chào mừng bạn đến làm việc! Đây là lần đầu tiên bạn đến phải không?',
     hint:'是的，我希望能在这儿＿＿。',
     sample:'是的，我希望能在这儿工作得很好。',
     sample_vn:'Vâng, tôi hy vọng có thể làm việc tốt ở đây.',
     note:'第 + Số đếm tạo THỨ TỰ (第一, 第二...); 次 là lượng từ đếm số LẦN.'},
    {q_zh:'你从什么时候开始学习中文的？',
     q_vn:'Bạn bắt đầu học tiếng Trung từ khi nào?',
     hint:'我从＿＿开始学的。',
     sample:'我从去年开始学的。',
     sample_vn:'Tôi bắt đầu học từ năm ngoái.',
     note:'从 luôn đi cùng một MỐC thời gian/địa điểm cụ thể, không dùng đứng một mình.'},
    {q_zh:'你都听懂了吗？',
     q_vn:'Bạn nghe hiểu hết chưa?',
     hint:'听懂了，可是＿＿太多，我没做完。',
     sample:'听懂了，可是题太多，我没做完。',
     sample_vn:'Hiểu rồi, nhưng đề nhiều quá, tôi làm chưa xong.',
     note:'懂/完/错 là các bổ ngữ kết quả thường gặp, đứng NGAY SAU động từ chính để chỉ KẾT QUẢ của hành động.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH — dùng từ bài 9 + ôn lại từ bài 1-8 và HSK1
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi đã nghe hiểu rồi.', zh:'我听懂了。', py:'Wǒ tīng dǒng le.'},
  {vi:'Bạn bắt đầu học múa từ năm mấy tuổi?', zh:'你从几岁开始学习跳舞？', py:'Nǐ cóng jǐ suì kāishǐ xuéxí tiàowǔ?'},
  {vi:'Đây là công việc đầu tiên của anh ấy.', zh:'这是他的第一个工作。', py:'Zhè shì tā de dì yī ge gōngzuò.'},
  {vi:'Hoan nghênh bạn đến công ty chúng tôi làm việc.', zh:'欢迎你来我们公司上班。', py:'Huānyíng nǐ lái wǒmen gōngsī shàngbān.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (chiều Trung→Việt) — noi dung KHAC voi chieu Viet->Trung o tren
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Câu hỏi của bạn tôi hiểu rồi, hoan nghênh bạn hỏi tiếp.', zh:'你的问题我懂了，欢迎你再问。', py:'Nǐ de wèntí wǒ dǒng le, huānyíng nǐ zài wèn.'},
  {vi:'Anh ấy từ nhỏ đã thích nhảy múa.', zh:'他从小就喜欢跳舞。', py:'Tā cóngxiǎo jiù xǐhuan tiàowǔ.'},
  {vi:'Đây là câu hỏi đầu tiên của tôi.', zh:'这是我的第一个问题。', py:'Zhè shì wǒ de dì yī ge wèntí.'},
  {vi:'Tôi hy vọng bạn hiểu câu hỏi của tôi.', zh:'我希望你懂我的问题。', py:'Wǒ xīwàng nǐ dǒng wǒ de wèntí.'},
];
