// ══════════════════════════════════════════
// DATA — Bài 9: 题太多，我没做完
// ══════════════════════════════════════════
const vocabData = [
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

const dialogData = [
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

// Điền từ — có trộn từ vựng Bài 7 (到) để ôn tập bổ ngữ kết quả
const fillData = [
  {pre:'你打',blank:'错',post:'了。',hint:'(sai, nhầm)',ans:'错',exp:'错 làm bổ ngữ kết quả: 打错 = gọi nhầm'},
  {pre:'您',blank:'从',post:'几岁开始学习跳舞？',hint:'(từ — mốc thời gian)',ans:'从',exp:'从 + mốc thời gian/địa điểm = TỪ...'},
  {pre:'这是他的',blank:'第一',post:'个工作。',hint:'(đầu tiên, thứ nhất)',ans:'第一',exp:'第 + số = biểu thị thứ tự'},
  {pre:'你都听',blank:'懂',post:'了吗？',hint:'(hiểu — bổ ngữ kết quả)',ans:'懂',exp:'听 + 懂 = nghe HIỂU'},
  {pre:'题太多，我没做',blank:'完',post:'。',hint:'(xong)',ans:'完',exp:'做 + 完 = làm XONG'},
  {pre:'大卫找',blank:'到',post:'工作了。',hint:'(đạt được — ôn bổ ngữ kết quả Bài 7)',ans:'到',exp:'找 + 到 = tìm ĐƯỢC, đạt kết quả'},
  {pre:'我希望他能',blank:'喜欢',post:'这份工作。',hint:'(thích — ôn từ đã học)',ans:'喜欢',exp:'希望 + Chủ ngữ + Động từ = hy vọng ai đó làm gì'},
  {pre:'非常',blank:'欢迎',post:'你！',hint:'(hoan nghênh)',ans:'欢迎',exp:'欢迎 = chào mừng, hoan nghênh'},
];

// Sắp xếp — câu khác Điền từ/Trắc nghiệm
const sortData = [
  {words:['大卫','找到','工作','了','。'],ans:'大卫找到工作了。',audio:'大卫找到工作了。'},
  {words:['我','希望','他','能','喜欢','。'],ans:'我希望他能喜欢。',audio:'我希望他能喜欢。'},
  {words:['你','都','做','完','了','没有','？'],ans:'你都做完了没有？',audio:'你都做完了没有？'},
  {words:['从','下个','星期一','开始','。'],ans:'从下个星期一开始。',audio:'从下个星期一开始。'},
  {words:['这','是','他','的','第一','个','工作','。'],ans:'这是他的第一个工作。',audio:'这是他的第一个工作。'},
  {words:['我们','这儿','没有','叫','张欢','的','。'],ans:'我们这儿没有叫张欢的。',audio:'我们这儿没有叫张欢的。'},
];

const matchData = [
  {left:'你好，请问张欢在吗？',right:'你打错了。'},
  {left:'您从几岁开始学习跳舞？',right:'我第一次跳舞是七岁的时候。'},
  {left:'你知道吗？大卫找到工作了。',right:'太好了！'},
  {left:'他从什么时候开始上班？',right:'从下个星期一开始。'},
  {left:'昨天的考试怎么样？',right:'题太多，我没做完。'},
  {left:'你都听懂了吗？',right:'听懂了。'},
];

// Trắc nghiệm — không audio; có câu ôn từ Bài 4 (已经)/Bài 7 (到)
const mcData = [
  {q:'你打＿＿了。',opts:['错','对','懂','完'],ans:0},
  {q:'您＿＿几岁开始学习跳舞？',opts:['从','离','对','给'],ans:0},
  {q:'这是他的＿＿一个工作。',opts:['第','两','已经','非常'],ans:0},
  {q:'你都听＿＿了吗？',opts:['懂','完','错','到'],ans:0},
  {q:'题太多，我没做＿＿。',opts:['完','懂','错','到'],ans:0},
  {q:'大卫找＿＿工作了。',opts:['到','完','懂','错'],ans:0},
  {q:'我希望他能喜欢这个＿＿。',opts:['工作','问题','题','颜色'],ans:0},
  {q:'非常＿＿你！',opts:['欢迎','希望','准备','已经'],ans:0},
  {q:'他＿＿开始上班？',opts:['从什么时候','从哪儿','离哪儿','离多远'],ans:0},
  {q:'你有什么＿＿吗？',opts:['问题','题','答案','意思'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý thanh điệu và nhịp câu. Có thể đọc phân vai theo cặp.',
    models:[
      {zh:'你好，请问张欢在吗？',py:'Nǐ hǎo, qǐngwèn Zhāng Huān zài ma?',vn:'Xin chào, cho hỏi có Trương Hoan ở đó không ạ?'},
      {zh:'您从几岁开始学习跳舞？',py:'Nín cóng jǐ suì kāishǐ xuéxí tiàowǔ?',vn:'Cô bắt đầu học múa từ năm mấy tuổi vậy ạ?'},
      {zh:'大卫找到工作了。',py:'Dàwèi zhǎodào gōngzuò le.',vn:'David tìm được việc làm rồi.'},
      {zh:'题太多，我没做完。',py:'Tí tài duō, wǒ méi zuò wán.',vn:'Đề nhiều quá, tôi làm chưa xong.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu mới. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我＿＿岁的时候开始跳舞。',frame_py:'Wǒ ___ suì de shíhou kāishǐ tiàowǔ.',vn:'Tôi lúc ＿＿ tuổi bắt đầu múa.',options:['五','七','十'],samples:['我五岁的时候开始跳舞。','我七岁的时候开始跳舞。','我十岁的时候开始跳舞。']},
      {frame:'这是我的第＿＿个工作。',frame_py:'Zhè shì wǒ de dì ___ ge gōngzuò.',vn:'Đây là công việc thứ ＿＿ của tôi.',options:['一','二','三'],samples:['这是我的第一个工作。','这是我的第二个工作。','这是我的第三个工作。']},
      {frame:'我没有听＿＿。',frame_py:'Wǒ méiyǒu tīng ___.',vn:'Tôi không nghe ＿＿.',options:['懂','完','清楚'],samples:['我没有听懂。','我没有听完。','我没有听清楚。']},
      {frame:'从＿＿开始上班。',frame_py:'Cóng ___ kāishǐ shàngbān.',vn:'Bắt đầu đi làm từ ＿＿.',options:['明天','下个星期','下个月'],samples:['从明天开始上班。','从下个星期开始上班。','从下个月开始上班。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Nói liền 2–3 câu. Ghi âm lại rồi nghe để tự sửa.',
    tasks:[
      {role:'📞 Tình huống 1 — Gọi nhầm số điện thoại',
       guide:'Bạn gọi điện tìm một người nhưng gọi nhầm số, hãy hỏi rồi xin lỗi.',
       structure:['请问＿＿在吗？','对不起，我打＿＿了。'],
       sample:'请问张欢在吗？对不起，我打错了。',
       sample_vn:'Cho hỏi có Trương Hoan ở đó không? Xin lỗi, tôi gọi nhầm số rồi.'},
      {role:'💃 Tình huống 2 — Hỏi về sở thích từ nhỏ',
       guide:'Bạn hỏi ai đó bắt đầu học một môn năng khiếu (múa, hát...) từ khi nào.',
       structure:['你从几岁开始＿＿？','我第一次＿＿是＿＿岁的时候。'],
       sample:'你从几岁开始跳舞？我第一次跳舞是七岁的时候。',
       sample_vn:'Bạn bắt đầu múa từ mấy tuổi? Lần đầu tiên tôi múa là lúc 7 tuổi.'},
      {role:'💼 Tình huống 3 — Chúc mừng bạn có việc mới',
       guide:'Bạn nghe tin bạn mình tìm được việc, hãy chúc mừng và hỏi khi nào bắt đầu đi làm.',
       structure:['你知道吗？＿＿找到工作了！','他从什么时候开始＿＿？'],
       sample:'你知道吗？大卫找到工作了！他从什么时候开始上班？',
       sample_vn:'Bạn biết tin gì chưa? David tìm được việc rồi! Cậu ấy bắt đầu đi làm từ khi nào thế?'},
    ],
  },
};
