// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 13: 请给我一杯茶
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'可以',py:'kěyǐ',pos:'Động từ năng nguyện',vn:'có thể, được (cho phép làm gì)',em:'👍',lesson:1,
   ex_zh:'王老师，我可以再问您一个问题吗？',ex_py:'Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?',ex_vn:'Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?',
   exList:[{zh:'王老师，我可以再问您一个问题吗？',py:'Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?',vn:'Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?'}]},
  {n:2,zh:'再',py:'zài',pos:'Phó từ',vn:'lại, thêm lần nữa',em:'🔁',lesson:1,
   ex_zh:'王老师，我可以再问您一个问题吗？',ex_py:'Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?',ex_vn:'Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?',
   exList:[{zh:'王老师，我可以再问您一个问题吗？',py:'Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?',vn:'Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?'}]},
  {n:3,zh:'问题',py:'wèntí',pos:'Danh từ',vn:'câu hỏi, vấn đề',em:'❓',lesson:1,
   ex_zh:'可以。你有什么问题？',ex_py:'Kěyǐ. Nǐ yǒu shénme wèntí?',ex_vn:'Được chứ. Em có vấn đề gì nào?',
   exList:[{zh:'可以。你有什么问题？',py:'Kěyǐ. Nǐ yǒu shénme wèntí?',vn:'Được chứ. Em có vấn đề gì nào?'}]},
  {n:4,zh:'卖',py:'mài',pos:'Động từ',vn:'bán',em:'🏪',lesson:1,
   ex_zh:'那个小店卖不卖手机？',ex_py:'Nàge xiǎo diàn mài bu mài shǒujī?',ex_vn:'Cửa hàng nhỏ kia có bán điện thoại di động không ạ?',
   exList:[{zh:'那个小店卖不卖手机？',py:'Nàge xiǎo diàn mài bu mài shǒujī?',vn:'Cửa hàng nhỏ kia có bán điện thoại di động không ạ?'}]},
  {n:5,zh:'打电话',py:'dǎ diànhuà',pos:'Cụm động từ',vn:'gọi điện thoại',em:'📞',lesson:1,
   ex_zh:'我不知道。你可以打电话问一下。',ex_py:'Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.',ex_vn:'Cô không biết. Em có thể gọi điện thoại hỏi xem.',
   exList:[{zh:'我不知道。你可以打电话问一下。',py:'Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.',vn:'Cô không biết. Em có thể gọi điện thoại hỏi xem.'}]},
  {n:6,zh:'一下',py:'yíxià',pos:'Số lượng từ',vn:'một chút, thử (dùng sau động từ, biểu thị hành động xảy ra nhanh hoặc thử làm)',em:'⏱️',lesson:1,
   ex_zh:'我不知道。你可以打电话问一下。',ex_py:'Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.',ex_vn:'Cô không biết. Em có thể gọi điện thoại hỏi xem.',
   exList:[{zh:'我不知道。你可以打电话问一下。',py:'Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.',vn:'Cô không biết. Em có thể gọi điện thoại hỏi xem.'}]},
  {n:7,zh:'服务员',py:'fúwùyuán',pos:'Danh từ',vn:'nhân viên phục vụ, người phục vụ',em:'🧑‍🍳',lesson:2,
   ex_zh:'女士，请坐！您喝什么？',ex_py:'Nǚshì, qǐng zuò! Nín hē shénme?',ex_vn:'Mời cô ngồi! Cô uống gì ạ?',
   exList:[{zh:'女士，请坐！您喝什么？',py:'Nǚshì, qǐng zuò! Nín hē shénme?',vn:'Mời cô ngồi! Cô uống gì ạ?'}]},
  {n:8,zh:'女士',py:'nǚshì',pos:'Danh từ',vn:'bà, cô, quý bà, quý cô',em:'👩',lesson:2,
   ex_zh:'女士，请坐！您喝什么？',ex_py:'Nǚshì, qǐng zuò! Nín hē shénme?',ex_vn:'Mời cô ngồi! Cô uống gì ạ?',
   exList:[{zh:'女士，请坐！您喝什么？',py:'Nǚshì, qǐng zuò! Nín hē shénme?',vn:'Mời cô ngồi! Cô uống gì ạ?'}]},
  {n:9,zh:'请',py:'qǐng',pos:'Động từ',vn:'mời, xin, hãy',em:'🙏',lesson:2,
   ex_zh:'女士，请坐！您喝什么？',ex_py:'Nǚshì, qǐng zuò! Nín hē shénme?',ex_vn:'Mời cô ngồi! Cô uống gì ạ?',
   exList:[{zh:'女士，请坐！您喝什么？',py:'Nǚshì, qǐng zuò! Nín hē shénme?',vn:'Mời cô ngồi! Cô uống gì ạ?'}],
   hanzi:[
     {c:'请',p:'qǐng',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 青(thanh) phải',rad:'讠 (ngôn – lời nói)',mean:'mời, xin (lịch sự)',
      tip:'讠(lời nói) + 青(trong sáng, thanh nhã) → lời MỜI trang trọng, lịch sự.',
      cf:'情 (qíng – "tình cảm")',w:'请坐 / 请问'},
   ]},
  {n:10,zh:'坐',py:'zuò',pos:'Động từ',vn:'ngồi',em:'🪑',lesson:2,
   ex_zh:'女士，请坐！您喝什么？',ex_py:'Nǚshì, qǐng zuò! Nín hē shénme?',ex_vn:'Mời cô ngồi! Cô uống gì ạ?',
   exList:[{zh:'女士，请坐！您喝什么？',py:'Nǚshì, qǐng zuò! Nín hē shénme?',vn:'Mời cô ngồi! Cô uống gì ạ?'}],
   hanzi:[
     {c:'坐',p:'zuò',type:'上下结构 · Trên-dưới',st:7,ord:'从(biến thể) trên → 土(thổ) dưới',rad:'土 (thổ – đất)',mean:'ngồi',
      tip:'从(hai người) ngồi trên 土(đất/ghế) → NGỒI.',
      cf:'座 (zuò – "chỗ ngồi")',w:'请坐 / 坐这儿'},
   ]},
  {n:11,zh:'给',py:'gěi',pos:'Động từ',vn:'đưa cho, cho',em:'🤲',lesson:2,
   ex_zh:'我看一下。请给我一杯牛奶。',ex_py:'Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.',ex_vn:'Để tôi xem một chút. Cho tôi một cốc sữa.',
   exList:[{zh:'我看一下。请给我一杯牛奶。',py:'Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.',vn:'Để tôi xem một chút. Cho tôi một cốc sữa.'}],
   hanzi:[
     {c:'给',p:'gěi',type:'左右结构 · Trái-phải',st:9,ord:'纟(mịch) trái → 合(hợp) phải',rad:'纟 (mịch – tơ, sợi)',mean:'cho, tặng',
      tip:'Bộ 纟(tơ lụa) — xưa tặng nhau tơ lụa quý giá, sau mở rộng nghĩa CHO, TẶNG nói chung.',
      cf:'合 (hé – "hợp", thiếu bộ 纟)',w:'给我 / 请给我'},
   ]},
  {n:12,zh:'杯',py:'bēi',pos:'Danh từ',vn:'ly, cốc, tách',em:'🥛',lesson:2,
   ex_zh:'我看一下。请给我一杯牛奶。',ex_py:'Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.',ex_vn:'Để tôi xem một chút. Cho tôi một cốc sữa.',
   exList:[{zh:'我看一下。请给我一杯牛奶。',py:'Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.',vn:'Để tôi xem một chút. Cho tôi một cốc sữa.'}]},
  {n:13,zh:'要',py:'yào',pos:'Động từ',vn:'cần, muốn',em:'🙋',lesson:2,
   ex_zh:'好的。您还要什么？',ex_py:'Hǎo de. Nín hái yào shénme?',ex_vn:'Vâng. Cô còn dùng thêm gì nữa không?',
   exList:[{zh:'好的。您还要什么？',py:'Hǎo de. Nín hái yào shénme?',vn:'Vâng. Cô còn dùng thêm gì nữa không?'}]},
  {n:14,zh:'早饭',py:'zǎofàn',pos:'Danh từ',vn:'bữa sáng',em:'🍳',lesson:2,
   ex_zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',ex_py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',ex_vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.',
   exList:[{zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.'}]},
  {n:15,zh:'这个',py:'zhège',pos:'Đại từ',vn:'cái này',em:'👉',lesson:2,
   ex_zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',ex_py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',ex_vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.',
   exList:[{zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.'}]},
  {n:16,zh:'面包',py:'miànbāo',pos:'Danh từ',vn:'bánh mì',em:'🍞',lesson:2,
   ex_zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',ex_py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',ex_vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.',
   exList:[{zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.'}]},
  {n:17,zh:'鸡蛋',py:'jīdàn',pos:'Danh từ',vn:'trứng gà',em:'🥚',lesson:2,
   ex_zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',ex_py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',ex_vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.',
   exList:[{zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.'}],
   hanzi:[
     {c:'蛋',p:'dàn',type:'上下结构 · Trên-dưới',st:11,ord:'疋(sơ) → 虫(trùng)',rad:'疋 (sơ)',mean:'trứng',
      tip:'Hình quả trứng cách điệu bên trên phần thân → nghĩa TRỨNG nói chung.',
      cf:'蜑 (dàn – ít dùng)',w:'鸡蛋'},
   ]},
  {n:18,zh:'先生',py:'xiānsheng',pos:'Danh từ',vn:'anh, ông, ngài, quý ông',em:'🤵',lesson:3,
   ex_zh:'先生，请坐！您要什么？',ex_py:'Xiānsheng, qǐng zuò! Nín yào shénme?',ex_vn:'Mời anh ngồi! Anh cần gì ạ?',
   exList:[{zh:'先生，请坐！您要什么？',py:'Xiānsheng, qǐng zuò! Nín yào shénme?',vn:'Mời anh ngồi! Anh cần gì ạ?'}],
   hanzi:[
     {c:'先',p:'xiān',type:'上下结构 · Trên-dưới',st:6,ord:'丿(biến thể) trên → 儿(nhân) dưới',rad:'儿 (nhân – người, biến thể)',mean:'trước, đầu tiên; ông (kính ngữ)',
      tip:'Hình người bước ra TRƯỚC tiên → ĐẦU TIÊN; 先生 vốn nghĩa "người sinh ra trước", dùng gọi ÔNG một cách kính trọng.',
      cf:'洗 (xǐ – "rửa")',w:'先生'},
   ]},
  {n:19,zh:'饺子',py:'jiǎozi',pos:'Danh từ',vn:'sủi cảo, bánh chẻo',em:'🥟',lesson:3,
   ex_zh:'我要一斤饺子。',ex_py:'Wǒ yào yì jīn jiǎozi.',ex_vn:'Cho tôi một cân sủi cảo.',
   exList:[{zh:'我要一斤饺子。',py:'Wǒ yào yì jīn jiǎozi.',vn:'Cho tôi một cân sủi cảo.'}]},
  {n:20,zh:'一半',py:'yíbàn',pos:'Số từ',vn:'một nửa',em:'➗',lesson:3,
   ex_zh:'四十个太多了，我要一半吧。',ex_py:'Sìshí gè tài duō le, wǒ yào yíbàn ba.',ex_vn:'40 cái thì nhiều quá, tôi lấy nửa cân thôi nhé.',
   exList:[{zh:'四十个太多了，我要一半吧。',py:'Sìshí gè tài duō le, wǒ yào yíbàn ba.',vn:'40 cái thì nhiều quá, tôi lấy nửa cân thôi nhé.'}]},
  {n:21,zh:'茶',py:'chá',pos:'Danh từ',vn:'trà, chè',em:'🍵',lesson:3,
   ex_zh:'请给我一杯茶吧。',ex_py:'Qǐng gěi wǒ yì bēi chá ba.',ex_vn:'Cho tôi một cốc trà nhé.',
   exList:[{zh:'请给我一杯茶吧。',py:'Qǐng gěi wǒ yì bēi chá ba.',vn:'Cho tôi một cốc trà nhé.'}],
   hanzi:[
     {c:'茶',p:'chá',type:'上下结构 · Trên-dưới',st:9,ord:'艹(thảo) trên → 余(biến thể) dưới',rad:'艹 (thảo – cỏ cây)',mean:'trà',
      tip:'艹(lá cây) pha thành thức uống → TRÀ.',
      cf:'茶 dễ nhầm 荼 (tú – "cỏ đắng")',w:'喝茶 / 一杯茶'},
   ]},
];

var wuData = [
  {img:'/images/hsk1v3-bai-13/mianbao.jpg',label:'面包',py:'miànbāo',letter:'A'},
  {img:'/images/hsk1v3-bai-13/shuo.jpg',label:'说',py:'shuō',letter:'B'},
  {img:'/images/hsk1v3-bai-13/gei.jpg',label:'给',py:'gěi',letter:'C'},
  {img:'/images/hsk1v3-bai-13/cha.jpg',label:'茶',py:'chá',letter:'D'},
  {img:'/images/hsk1v3-bai-13/yiban.jpg',label:'一半',py:'yíbàn',letter:'E'},
  {img:'/images/hsk1v3-bai-13/qing.jpg',label:'请',py:'qǐng',letter:'F'},
];

var dialogData = [
  {scene:'白家月下课后问王老师问题 · Hỏi thêm một câu',
   preQuiz:[
     {q:'白家月想再问王老师（　）。',opts:['一个问题','两个问题','这个问题'],ans:0},
     {q:'王老师（　）那里卖不卖手机。',opts:['知道','不知道','也想知道'],ans:1},
   ],
   lines:[
     {sp:0,zh:'王老师，我可以再问您一个问题吗？',py:'Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?',vn:'Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?'},
     {sp:1,zh:'可以。你有什么问题？',py:'Kěyǐ. Nǐ yǒu shénme wèntí?',vn:'Được chứ. Em có vấn đề gì nào?'},
     {sp:0,zh:'那个小店卖不卖手机？',py:'Nàge xiǎo diàn mài bu mài shǒujī?',vn:'Cửa hàng nhỏ kia có bán điện thoại di động không ạ?'},
     {sp:1,zh:'我不知道。你可以打电话问一下。',py:'Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.',vn:'Cô không biết. Em có thể gọi điện thoại hỏi xem.'},
   ]},
  {scene:'王一雪在咖啡馆里点早餐 · Gọi đồ uống',
   preQuiz:[
     {q:'王一雪要喝（　）。',opts:['水','茶','牛奶'],ans:2},
     {q:'王一雪还想吃（　）。',opts:['包子','面条儿','面包和鸡蛋'],ans:2},
   ],
   lines:[
     {sp:0,zh:'女士，请坐！您喝什么？',py:'Nǚshì, qǐng zuò! Nín hē shénme?',vn:'Mời cô ngồi! Cô uống gì ạ?'},
     {sp:1,zh:'我看一下。请给我一杯牛奶。',py:'Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.',vn:'Để tôi xem một chút. Cho tôi một cốc sữa.'},
     {sp:0,zh:'好的。您还要什么？',py:'Hǎo de. Nín hái yào shénme?',vn:'Vâng. Cô còn dùng thêm gì nữa không?'},
     {sp:1,zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.'},
   ]},
  {scene:'刘明在餐馆点餐 · Gọi sủi cảo',
   preQuiz:[
     {q:'刘明想吃（　）。',opts:['米饭','饺子','米饭和饺子'],ans:1},
     {q:'刘明想喝（　）。',opts:['水','茶','牛奶'],ans:1},
   ],
   lines:[
     {sp:0,zh:'先生，请坐！您要什么？',py:'Xiānsheng, qǐng zuò! Nín yào shénme?',vn:'Mời anh ngồi! Anh cần gì ạ?'},
     {sp:1,zh:'我要一斤饺子。',py:'Wǒ yào yì jīn jiǎozi.',vn:'Cho tôi một cân sủi cảo.'},
     {sp:0,zh:'好的。一斤饺子四十个。',py:'Hǎo de. Yì jīn jiǎozi sìshí gè.',vn:'Vâng ạ. Một cân sủi cảo có 40 cái.'},
     {sp:1,zh:'四十个太多了，我要一半吧。',py:'Sìshí gè tài duō le, wǒ yào yíbàn ba.',vn:'40 cái thì nhiều quá, tôi lấy nửa cân thôi nhé.'},
     {sp:0,zh:'半斤20个。您想喝什么？',py:'Bàn jīn èrshí gè. Nín xiǎng hē shénme?',vn:'Nửa cân là 20 cái. Anh muốn uống gì không ạ?'},
     {sp:1,zh:'请给我一杯茶吧。',py:'Qǐng gěi wǒ yì bēi chá ba.',vn:'Cho tôi một cốc trà nhé.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'问', right:'题'},
  {left:'打电', right:'话'},
  {left:'服务', right:'员'},
  {left:'早', right:'饭'},
  {left:'面', right:'包'},
  {left:'鸡', right:'蛋'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'王老师，我', blank:'可以再问您', post:'一个问题吗？', hint:'(có thể hỏi thêm)', ans:'可以再问您'},
  {pre:'那个小店', blank:'卖不卖', post:'手机？', hint:'(có bán không)', ans:'卖不卖'},
  {pre:'你可以打电话', blank:'问一下', post:'。', hint:'(hỏi thử)', ans:'问一下'},
  {pre:'请', blank:'给我一杯', post:'牛奶。', hint:'(cho tôi một cốc)', ans:'给我一杯'},
  {pre:'我还没吃早饭，', blank:'再要这个面包和鸡蛋', post:'吧。', hint:'(lấy thêm bánh mì và trứng)', ans:'再要这个面包和鸡蛋'},
  {pre:'我要一斤', blank:'饺子', post:'。', hint:'(sủi cảo)', ans:'饺子'},
  {pre:'四十个太多了，我要', blank:'一半', post:'吧。', hint:'(một nửa)', ans:'一半'},
  {pre:'请给我一杯', blank:'茶', post:'吧。', hint:'(trà)', ans:'茶'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','可以','再','问','您','一个','问题','吗','？'], ans:'我可以再问您一个问题吗？', audio:'我可以再问您一个问题吗？'},
  {words:['那个','小店','卖','不','卖','手机','？'], ans:'那个小店卖不卖手机？', audio:'那个小店卖不卖手机？'},
  {words:['请','给','我','一杯','牛奶','。'], ans:'请给我一杯牛奶。', audio:'请给我一杯牛奶。'},
  {words:['我','还','没','吃','早饭','。'], ans:'我还没吃早饭。', audio:'我还没吃早饭。'},
  {words:['我','要','一斤','饺子','。'], ans:'我要一斤饺子。', audio:'我要一斤饺子。'},
  {words:['请','给','我','一杯','茶','吧','。'], ans:'请给我一杯茶吧。', audio:'请给我一杯茶吧。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"我可以再问您一个问题吗？" nghĩa là gì?', opts:['Em có thể hỏi thêm cô một câu nữa không ạ?', 'Em không hiểu câu hỏi này.', 'Cô có câu hỏi gì cho em không?', 'Em đã hỏi xong rồi.'], ans:0},
  {q:'Động từ năng nguyện "可以" biểu thị điều gì?', opts:['khả năng, năng lực hoặc sự cho phép', 'mong muốn, dự định', 'mệnh lệnh, bắt buộc', 'phủ định'], ans:0},
  {q:'"你可以打电话问一下。" — "一下" trong câu này biểu thị điều gì?', opts:['hành động thử làm/xảy ra trong thời gian ngắn', 'hành động lặp lại nhiều lần', 'hành động đã hoàn thành', 'hành động phủ định'], ans:0},
  {q:'"请给我一杯牛奶。" nghĩa là gì?', opts:['Cho tôi một cốc sữa.', 'Cho tôi một cốc trà.', 'Cho tôi một cốc nước.', 'Tôi không muốn uống sữa.'], ans:0},
  {q:'Câu "白家月给安妮一个苹果。" có mấy tân ngữ?', opts:['hai tân ngữ (安妮 và 苹果)', 'một tân ngữ', 'không có tân ngữ', 'ba tân ngữ'], ans:0},
  {q:'"四十个太多了，我要一半吧。" nghĩa là gì?', opts:['40 cái nhiều quá, tôi lấy một nửa thôi.', '40 cái vừa đủ, tôi lấy hết.', 'Tôi muốn thêm 40 cái nữa.', 'Tôi không muốn ăn cái nào.'], ans:0},
  {q:'"请给我一杯茶吧。" nghĩa là gì?', opts:['Cho tôi một cốc trà nhé.', 'Tôi không uống trà.', 'Trà này có ngon không?', 'Cho tôi xem thực đơn.'], ans:0},
  {q:'Câu có hai tân ngữ trong bài này được tạo bởi động từ nào?', opts:['给 và 问', '是 và 有', '去 và 来', '在 và 要'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '服务员问你："您喝什么？" 你怎么回答？', q_vn: 'Nhân viên phục vụ hỏi bạn: "Cô/anh uống gì ạ?" Bạn trả lời thế nào?',
     hint: '请给我一杯……', sample: '请给我一杯茶。', sample_vn: 'Cho tôi một cốc trà.',
     note: 'Cấu trúc câu hai tân ngữ với "给": 给 + người + vật.'},
    {q_zh: '你想向老师多问一个问题，你怎么说？', q_vn: 'Bạn muốn hỏi thêm cô giáo một câu, bạn nói thế nào?',
     hint: '我可以再问您……吗？', sample: '我可以再问您一个问题吗？', sample_vn: 'Em có thể hỏi thêm cô một câu nữa không ạ?',
     note: 'Động từ năng nguyện "可以" đặt trước động từ để xin phép.'},
    {q_zh: '有人问你："这个商店卖不卖手机？" 你不知道，你怎么回答？', q_vn: 'Có người hỏi bạn: "Cửa hàng này có bán điện thoại không?" Bạn không biết, bạn trả lời thế nào?',
     hint: '我不知道，你可以……一下。', sample: '我不知道，你可以打电话问一下。', sample_vn: 'Tôi không biết, bạn có thể gọi điện thoại hỏi thử.',
     note: 'Cấu trúc "động từ + 一下" dùng khi đề nghị ai đó thử làm việc gì.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Em có thể hỏi thêm cô một câu nữa không ạ?', zh:'我可以再问您一个问题吗？', py:'Wǒ kěyǐ zài wèn nín yí gè wèntí ma?'},
  {vi:'Cửa hàng nhỏ kia có bán điện thoại di động không ạ?', zh:'那个小店卖不卖手机？', py:'Nàge xiǎo diàn mài bu mài shǒujī?'},
  {vi:'Cho tôi một cốc sữa.', zh:'请给我一杯牛奶。', py:'Qǐng gěi wǒ yì bēi niúnǎi.'},
  {vi:'40 cái thì nhiều quá, tôi lấy nửa cân thôi nhé.', zh:'四十个太多了，我要一半吧。', py:'Sìshí gè tài duō le, wǒ yào yíbàn ba.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Cô có thể gọi điện thoại hỏi thử.', zh:'您可以打电话问一下。', py:'Nín kěyǐ dǎ diànhuà wèn yíxià.'},
  {vi:'Cô còn dùng thêm gì nữa không?', zh:'您还要什么？', py:'Nín hái yào shénme?'},
  {vi:'Tôi vẫn chưa ăn sáng.', zh:'我还没吃早饭。', py:'Wǒ hái méi chī zǎofàn.'},
  {vi:'Anh muốn uống gì không ạ?', zh:'您想喝什么？', py:'Nín xiǎng hē shénme?'},
];
