// ══════════════════════════════════════════
// DATA — Bài 11: 他比我大三岁
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'唱歌',py:'chàng gē',pos:'Động từ',vn:'hát, ca hát',em:'🎤',lesson:1,
   ex_zh:'昨天和你一起唱歌的人是谁？',ex_py:'Zuótiān hé nǐ yìqǐ chàng gē de rén shì shéi?',ex_vn:'Người hôm qua cùng hát karaoke với bạn là ai thế?',
   exList:[
     {zh:'昨天和你一起唱歌的人是谁？',py:'Zuótiān hé nǐ yìqǐ chàng gē de rén shì shéi?',vn:'Người hôm qua cùng hát karaoke với bạn là ai thế?'},
     {zh:'她唱歌唱得非常好。',py:'Tā chàng gē chàng de fēicháng hǎo.',vn:'Cô ấy hát rất hay.'},
     {zh:'我们一起去唱歌吧。',py:'Wǒmen yìqǐ qù chàng gē ba.',vn:'Chúng ta cùng đi hát đi.'},
   ],
   hanzi:[
     {c:'唱',p:'chàng',type:'左右结构 · Trái-phải',st:11,ord:'口 (khẩu) trái → 昌 (xương) phải',rad:'口 (khẩu – miệng)',mean:'hát',
      tip:'Bộ 口 (miệng) → dùng miệng cất tiếng HÁT.',
      cf:'倡 (chàng – "đề xướng")',w:'唱歌 / 唱得好'},
     {c:'歌',p:'gē',type:'左右结构 · Trái-phải',st:14,ord:'哥 (ca) trái → 欠 (khiếm) phải',rad:'欠 (khiếm – ngáp/thở)',mean:'bài hát',
      tip:'哥 (âm thanh lặp) + 欠 (miệng mở ra) → cất tiếng ngân nga = BÀI HÁT.',
      cf:'哥 (gē – "anh trai", đã học Bài 10)',w:'唱歌 / 一首歌'},
   ]},
  {n:2,zh:'男',py:'nán',pos:'Danh từ / Tính từ',vn:'nam, con trai, bạn trai',em:'👦',lesson:1,
   ex_zh:'是不是男朋友？',ex_py:'Shìbushì nán péngyou?',ex_vn:'Có phải bạn trai không?',
   exList:[
     {zh:'是不是男朋友？',py:'Shìbushì nán péngyou?',vn:'Có phải bạn trai không?'},
     {zh:'这个班男学生比较多。',py:'Zhège bān nán xuésheng bǐjiào duō.',vn:'Lớp này học sinh nam khá nhiều.'},
     {zh:'他是我男朋友。',py:'Tā shì wǒ nán péngyou.',vn:'Anh ấy là bạn trai tôi.'},
   ],
   hanzi:[
     {c:'男',p:'nán',type:'上下结构 · Trên-dưới',st:7,ord:'田 (điền) trên → 力 (lực) dưới',rad:'田 (điền – ruộng)',mean:'nam, con trai',
      tip:'Ruộng 田 + sức lực 力 → người đàn ông ra đồng dùng sức cày cấy = NAM GIỚI.',
      cf:'画 (huà – "vẽ")',w:'男朋友 / 男人 / 男生'},
   ]},
  {n:3,zh:'女',py:'nǚ',pos:'Danh từ / Tính từ',vn:'nữ, con gái',em:'👧',lesson:2,
   ex_zh:'左边这个看报纸的女孩子是你姐姐吗？',ex_py:'Zuǒbiān zhège kàn bàozhǐ de nǚháizi shì nǐ jiějie ma?',ex_vn:'Cô gái xem báo ở bên trái có phải chị gái bạn không?',
   exList:[
     {zh:'左边这个看报纸的女孩子是你姐姐吗？',py:'Zuǒbiān zhège kàn bàozhǐ de nǚháizi shì nǐ jiějie ma?',vn:'Cô gái xem báo ở bên trái có phải chị gái bạn không?'},
     {zh:'她是一个女老师。',py:'Tā shì yí ge nǚ lǎoshī.',vn:'Cô ấy là một giáo viên nữ.'},
     {zh:'这个班女学生比较多。',py:'Zhège bān nǚ xuésheng bǐjiào duō.',vn:'Lớp này học sinh nữ khá nhiều.'},
   ],
   hanzi:[
     {c:'女',p:'nǚ',type:'独体字 · Tượng hình',st:3,ord:'ㄋ→一→一 (biến thể)',rad:'女 (nữ – tự thành bộ)',mean:'nữ, con gái',
      tip:'Hình người phụ nữ ngồi quỳ khoanh tay cách điệu → "NỮ".',
      cf:'安 (ān – "an", thêm mái nhà)',w:'女孩子 / 女儿 / 女朋友'},
   ]},
  {n:4,zh:'孩子',py:'háizi',pos:'Danh từ',vn:'trẻ em, đứa con',em:'🧒',lesson:2,
   ex_zh:'那个看报纸的女孩子是你姐姐吗？',ex_py:'Nàge kàn bàozhǐ de nǚháizi shì nǐ jiějie ma?',ex_vn:'Cô gái xem báo kia có phải chị gái bạn không?',
   exList:[
     {zh:'那个看报纸的女孩子是你姐姐吗？',py:'Nàge kàn bàozhǐ de nǚháizi shì nǐ jiějie ma?',vn:'Cô gái xem báo kia có phải chị gái bạn không?'},
     {zh:'我家有两个孩子。',py:'Wǒ jiā yǒu liǎng ge háizi.',vn:'Nhà tôi có hai đứa con.'},
     {zh:'这个孩子很聪明。',py:'Zhège háizi hěn cōngming.',vn:'Đứa trẻ này rất thông minh.'},
   ],
   hanzi:[
     {c:'孩',p:'hái',type:'左右结构 · Trái-phải',st:9,ord:'子 (tử) trái → 亥 (hợi) phải',rad:'子 (tử – con)',mean:'trẻ em',
      tip:'Bộ 子 (con) → chỉ chung TRẺ EM, con cái.',
      cf:'该 (gāi – "nên", bộ 讠)',w:'孩子 / 男孩 / 女孩'},
     {c:'子',p:'zi / zǐ',type:'独体字 · Chữ đơn',st:3,ord:'了→一',rad:'子 (tử – tự thành bộ)',mean:'con, hậu tố danh từ',
      tip:'Hình đứa trẻ quấn tã → "CON". Cũng dùng làm hậu tố danh từ: 桌子, 儿子.',
      cf:'孑 (jié – thiếu 1 nét)',w:'孩子 / 儿子 / 桌子'},
   ]},
  {n:5,zh:'右边',py:'yòubian',pos:'Danh từ chỉ phương vị',vn:'bên phải',em:'👉',lesson:2,
   ex_zh:'右边写字的那个人是我哥哥。',ex_py:'Yòubian xiě zì de nàge rén shì wǒ gēge.',ex_vn:'Người viết chữ bên phải là anh trai tớ.',
   exList:[
     {zh:'右边写字的那个人是我哥哥。',py:'Yòubian xiě zì de nàge rén shì wǒ gēge.',vn:'Người viết chữ bên phải là anh trai tớ.'},
     {zh:'银行在邮局右边。',py:'Yínháng zài yóujú yòubian.',vn:'Ngân hàng ở bên phải bưu điện.'},
     {zh:'请往右边看。',py:'Qǐng wǎng yòubian kàn.',vn:'Xin hãy nhìn về bên phải.'},
   ],
   hanzi:[
     {c:'右',p:'yòu',type:'半包围 · Bán bao',st:5,ord:'ノ→一→口',rad:'口 (khẩu – miệng)',mean:'bên phải',
      tip:'又 (bàn tay phải, đã gặp trong 对) + 口 → hướng tay phải hay dùng = BÊN PHẢI.',
      cf:'左 (zuǒ – trái nghĩa, đã học Bài 3)',w:'右边 / 左右'},
     {c:'边',p:'biān',type:'半包围 · Bán bao (辶)',st:5,ord:'力 → 辶 (viết sau cùng)',rad:'辶 (sước – đi)',mean:'bên, cạnh',
      tip:'Đã học ở Bài 2 (旁边) — chỉ vị trí ở một BÊN nào đó.',
      cf:'力 (lì – "sức lực")',w:'右边 / 左边 / 旁边'},
   ]},
  {n:6,zh:'比',py:'bǐ',pos:'Giới từ',vn:'so với',em:'⚖️',lesson:2,
   ex_zh:'他比我大三岁。',ex_py:'Tā bǐ wǒ dà sān suì.',ex_vn:'Anh ấy lớn hơn tớ 3 tuổi.',
   exList:[
     {zh:'他比我大三岁。',py:'Tā bǐ wǒ dà sān suì.',vn:'Anh ấy lớn hơn tớ 3 tuổi.'},
     {zh:'今天比昨天冷。',py:'Jīntiān bǐ zuótiān lěng.',vn:'Hôm nay lạnh hơn hôm qua.'},
     {zh:'弟弟比我矮一点儿。',py:'Dìdi bǐ wǒ ǎi yìdiǎnr.',vn:'Em trai thấp hơn tôi một chút.'},
   ],
   hanzi:[
     {c:'比',p:'bǐ',type:'独体字 · Chữ đơn',st:4,ord:'匕→匕 (hai chữ giống nhau đứng cạnh)',rad:'比 (tỉ – tự thành bộ)',mean:'so với',
      tip:'Hai người đứng cạnh nhau quay cùng hướng → đặt cạnh nhau để SO SÁNH.',
      cf:'北 (běi – "phía Bắc", hai người quay lưng)',w:'比较 / A比B / 对比'},
   ]},
  {n:7,zh:'便宜',py:'piányi',pos:'Tính từ',vn:'rẻ',em:'💰',lesson:3,
   ex_zh:'西瓜比昨天便宜。',ex_py:'Xīguā bǐ zuótiān piányi.',ex_vn:'Dưa hấu rẻ hơn hôm qua.',
   exList:[
     {zh:'西瓜比昨天便宜。',py:'Xīguā bǐ zuótiān piányi.',vn:'Dưa hấu rẻ hơn hôm qua.'},
     {zh:'这儿的东西很便宜。',py:'Zhèr de dōngxi hěn piányi.',vn:'Đồ ở đây rất rẻ.'},
     {zh:'能不能便宜一点儿？',py:'Néng bu néng piányi yìdiǎnr?',vn:'Có thể rẻ hơn một chút không?'},
   ],
   hanzi:[
     {c:'便',p:'pián / biàn',type:'左右结构 · Trái-phải',st:9,ord:'亻(nhân) trái → 更 (cánh) phải',rad:'亻(nhân – người)',mean:'rẻ (pián); tiện lợi (biàn)',
      tip:'Người 亻 + 更 (thay đổi cho tốt hơn) → mang lại sự THUẬN TIỆN, giá cả dễ chịu.',
      cf:'使 (shǐ – "khiến, sai")',w:'便宜 / 方便'},
     {c:'宜',p:'yí',type:'上下结构 · Trên-dưới',st:8,ord:'宀 (miên) → 且 (thả)',rad:'宀 (miên – mái nhà)',mean:'thích hợp, rẻ',
      tip:'便 + 宜 = vừa tiện lợi vừa hợp túi tiền = RẺ.',
      cf:'宣 (xuān – "tuyên bố")',w:'便宜 / 适宜'},
   ]},
  {n:8,zh:'说话',py:'shuōhuà',pos:'Động từ',vn:'nói chuyện',em:'💬',lesson:4,
   ex_zh:'前面说话的那个人就是我的汉语老师。',ex_py:'Qiánmiàn shuōhuà de nàge rén jiùshì wǒ de Hànyǔ lǎoshī.',ex_vn:'Người nói chuyện phía trước chính là giáo viên tiếng Trung của chúng tớ.',
   exList:[
     {zh:'前面说话的那个人就是我的汉语老师。',py:'Qiánmiàn shuōhuà de nàge rén jiùshì wǒ de Hànyǔ lǎoshī.',vn:'Người nói chuyện phía trước chính là giáo viên tiếng Trung của chúng tớ.'},
     {zh:'他正在跟朋友说话。',py:'Tā zhèngzài gēn péngyou shuōhuà.',vn:'Anh ấy đang nói chuyện với bạn.'},
     {zh:'请不要大声说话。',py:'Qǐng bú yào dàshēng shuōhuà.',vn:'Xin đừng nói chuyện to tiếng.'},
   ],
   hanzi:[
     {c:'说',p:'shuō',type:'左右结构 · Trái-phải',st:9,ord:'讠(ngôn) trái → 兑 (đoài) phải',rad:'讠(ngôn – lời nói)',mean:'nói',
      tip:'Bộ 讠(lời nói) → hành động dùng miệng phát ra lời = NÓI.',
      cf:'脱 (tuō – "cởi", bộ 月)',w:'说话 / 说汉语 / 听说'},
     {c:'话',p:'huà',type:'左右结构 · Trái-phải',st:8,ord:'讠(ngôn) trái → 舌 (thiệt) phải',rad:'讠(ngôn – lời nói)',mean:'lời nói',
      tip:'Lời nói 讠 phát ra từ lưỡi 舌 → LỜI NÓI, câu chuyện.',
      cf:'活 (huó – "sống", bộ 氵)',w:'说话 / 电话 / 对话'},
   ]},
  {n:9,zh:'可能',py:'kěnéng',pos:'Trợ động từ',vn:'có thể, có lẽ',em:'🤔',lesson:4,
   ex_zh:'你可能不认识他。',ex_py:'Nǐ kěnéng bú rènshi tā.',ex_vn:'Có thể bạn không quen thầy ấy đâu.',
   exList:[
     {zh:'你可能不认识他。',py:'Nǐ kěnéng bú rènshi tā.',vn:'Có thể bạn không quen thầy ấy đâu.'},
     {zh:'明天可能会下雨。',py:'Míngtiān kěnéng huì xià yǔ.',vn:'Ngày mai có lẽ sẽ mưa.'},
     {zh:'他可能已经到了。',py:'Tā kěnéng yǐjīng dào le.',vn:'Có lẽ anh ấy đã đến rồi.'},
   ],
   hanzi:[
     {c:'可',p:'kě',type:'独体字 · Chữ đơn',st:5,ord:'一→丨→乛→一→亅',rad:'口 (khẩu)',mean:'có thể, được',
      tip:'Đã học ở Bài 5 (可以) — miệng 口 nói lời chấp thuận.',
      cf:'河 (hé – "sông")',w:'可能 / 可以'},
     {c:'能',p:'néng',type:'左右结构 · Trái-phải',st:10,ord:'厶→月 trái → 匕匕 phải',rad:'月 (nhục – thịt, biến thể)',mean:'năng lực, có thể',
      tip:'可 (được phép) + 能 (năng lực) = có KHẢ NĂNG xảy ra = CÓ THỂ, CÓ LẼ.',
      cf:'态 (tài – "thái độ")',w:'可能 / 能不能 / 可能性'},
   ]},
  {n:10,zh:'去年',py:'qùnián',pos:'Danh từ chỉ thời gian',vn:'năm ngoái',em:'📅',lesson:4,
   ex_zh:'是去年来的。',ex_py:'Shì qùnián lái de.',ex_vn:'Đến từ năm ngoái.',
   exList:[
     {zh:'是去年来的。',py:'Shì qùnián lái de.',vn:'Đến từ năm ngoái.'},
     {zh:'我去年去过北京。',py:'Wǒ qùnián qùguo Běijīng.',vn:'Năm ngoái tôi đã đi Bắc Kinh.'},
     {zh:'去年这个时候很冷。',py:'Qùnián zhège shíhou hěn lěng.',vn:'Năm ngoái vào thời điểm này rất lạnh.'},
   ],
   hanzi:[
     {c:'去',p:'qù',type:'上下结构 · Trên-dưới',st:5,ord:'土→厶',rad:'厶 (mô – tự riêng)',mean:'đi, qua (thời gian)',
      tip:'Hình người bước ra khỏi cửa → nghĩa "ĐI"; ghép với 年 chỉ năm ĐÃ QUA.',
      cf:'丢 (diū – "làm mất")',w:'去年 / 去哪儿 / 出去'},
     {c:'年',p:'nián',type:'独体字 · Tượng hình',st:6,ord:'丿→一→一→一→丨→一',rad:'干 (can)',mean:'năm',
      tip:'Hình bó lúa chín được gánh trên vai → mỗi mùa lúa chín là một NĂM.',
      cf:'午 (wǔ – "buổi trưa")',w:'去年 / 今年 / 明年'},
   ]},
  {n:11,zh:'姓',py:'xìng',pos:'Động từ / Danh từ',vn:'họ, mang họ',em:'🪪',lesson:4,
   ex_zh:'他姓王。',ex_py:'Tā xìng Wáng.',ex_vn:'Thầy ấy họ Vương.',
   exList:[
     {zh:'他姓王。',py:'Tā xìng Wáng.',vn:'Thầy ấy họ Vương.'},
     {zh:'请问您贵姓？',py:'Qǐngwèn nín guìxìng?',vn:'Xin hỏi quý danh của ngài là gì ạ?'},
     {zh:'我姓阮，叫阮文。',py:'Wǒ xìng Ruǎn, jiào Ruǎn Wén.',vn:'Tôi họ Nguyễn, tên là Nguyễn Văn.'},
   ],
   hanzi:[
     {c:'姓',p:'xìng',type:'左右结构 · Trái-phải',st:8,ord:'女 (nữ) trái → 生 (sinh) phải',rad:'女 (nữ – phụ nữ)',mean:'họ',
      tip:'女 (mẹ) + 生 (sinh ra) → xưa con cái mang HỌ theo dòng mẹ.',
      cf:'性 (xìng – "tính cách", bộ 忄)',w:'姓王 / 贵姓 / 姓名'},
   ]},
];

const wuData = [
  {img:'🎤',label:'唱歌',py:'chàng gē',letter:'A'},
  {img:'👦',label:'男',py:'nán',letter:'B'},
  {img:'👧',label:'女',py:'nǚ',letter:'C'},
  {img:'🧒',label:'孩子',py:'háizi',letter:'D'},
  {img:'💬',label:'说话',py:'shuōhuà',letter:'E'},
  {img:'🪪',label:'姓',py:'xìng',letter:'F'},
];

const dialogData = [
  {scene:'在歌厅 · Trong phòng hát Karaoke',
   lines:[
     {sp:0,zh:'王方，昨天和你一起唱歌的人是谁？',py:'Wáng Fāng, zuótiān hé nǐ yìqǐ chàng gē de rén shì shéi?',vn:'Vương Phương, người hôm qua cùng hát karaoke với bạn là ai thế?'},
     {sp:1,zh:'一个朋友。',py:'Yí ge péngyou.',vn:'Một người bạn thôi.'},
     {sp:0,zh:'什么朋友？是不是男朋友？',py:'Shénme péngyou? Shìbushì nán péngyou?',vn:'Bạn gì thế? Có phải bạn trai không?'},
     {sp:1,zh:'不是不是，我同学介绍的，昨天第一次见。',py:'Bú shì bú shì, wǒ tóngxué jièshào de, zuótiān dì yī cì jiàn.',vn:'Không phải, không phải đâu, là bạn học tớ giới thiệu, hôm qua mới gặp lần đầu.'},
   ]},
  {scene:'在宿舍 · Trong phòng ký túc xá',
   lines:[
     {sp:0,zh:'左边这个看报纸的女孩子是你姐姐吗？',py:'Zuǒbiān zhège kàn bàozhǐ de nǚháizi shì nǐ jiějie ma?',vn:'Cô gái xem báo ở bên trái có phải chị gái bạn không?'},
     {sp:1,zh:'是，右边写字的那个人是我哥哥。',py:'Shì, yòubian xiě zì de nàge rén shì wǒ gēge.',vn:'Đúng vậy, còn người viết chữ bên phải là anh trai tớ.'},
     {sp:0,zh:'你哥哥多大？',py:'Nǐ gēge duō dà?',vn:'Anh trai bạn bao nhiêu tuổi rồi?'},
     {sp:1,zh:'25岁，他比我大三岁。',py:'Èrshíwǔ suì, tā bǐ wǒ dà sān suì.',vn:'25 tuổi, anh ấy lớn hơn tớ 3 tuổi.'},
   ]},
  {scene:'在商店 · Ở cửa hàng',
   lines:[
     {sp:0,zh:'今天的西瓜怎么卖？',py:'Jīntiān de xīguā zěnme mài?',vn:'Dưa hấu hôm nay bán thế nào vậy?'},
     {sp:1,zh:'三块五一斤，比昨天便宜。',py:'Sān kuài wǔ yì jīn, bǐ zuótiān piányi.',vn:'3 tệ rưỡi một cân, rẻ hơn hôm qua đấy.'},
     {sp:0,zh:'苹果也比昨天便宜一些，您来点儿吧。',py:'Píngguǒ yě bǐ zuótiān piányi yìxiē, nín lái diǎnr ba.',vn:'Táo cũng rẻ hơn hôm qua một chút, bạn mua một ít đi.'},
   ]},
  {scene:'在学校 · Ở trường học',
   lines:[
     {sp:0,zh:'前面说话的那个人就是我的汉语老师，你可能不认识他。',py:'Qiánmiàn shuōhuà de nàge rén jiùshì wǒ de Hànyǔ lǎoshī, nǐ kěnéng bú rènshi tā.',vn:'Người nói chuyện phía trước chính là giáo viên tiếng Trung của chúng tớ, có thể bạn không quen thầy ấy đâu.'},
     {sp:1,zh:'是新来的汉语老师吗？',py:'Shì xīn lái de Hànyǔ lǎoshī ma?',vn:'Là giáo viên tiếng Trung mới đến à?'},
     {sp:0,zh:'是去年来的，他姓王，28岁。他比我们老师小两岁。',py:'Shì qùnián lái de, tā xìng Wáng, èrshíbā suì. Tā bǐ wǒmen lǎoshī xiǎo liǎng suì.',vn:'Đến từ năm ngoái, thầy ấy họ Vương, 28 tuổi. Thầy ấy trẻ hơn giáo viên của các bạn 2 tuổi đấy.'},
   ]},
];

// Điền từ — cả 2 điểm ngữ pháp (định ngữ động từ + 比), có ôn 就(Bài 5) và 可能
const fillData = [
  {pre:'昨天和你一起唱歌的人是',blank:'谁',post:'？',hint:'(ai)',ans:'谁'},
  {pre:'是不是',blank:'男',post:'朋友？',hint:'(nam, con trai)',ans:'男'},
  {pre:'左边这个看报纸的',blank:'女',post:'孩子是你姐姐吗？',hint:'(nữ, con gái)',ans:'女'},
  {pre:'',blank:'右',post:'边写字的那个人是我哥哥。',hint:'(bên phải)',ans:'右'},
  {pre:'他',blank:'比',post:'我大三岁。',hint:'(so với)',ans:'比',exp:'A + 比 + B + Tính từ = A hơn B về mức độ nào đó'},
  {pre:'苹果也比昨天',blank:'便宜',post:'一些。',hint:'(rẻ)',ans:'便宜'},
  {pre:'前面说话的那个人',blank:'就',post:'是我的汉语老师。',hint:'(chính là — ôn từ Bài 5)',ans:'就',exp:'就 nhấn mạnh tính khẳng định'},
  {pre:'你',blank:'可能',post:'不认识他。',hint:'(có thể, có lẽ)',ans:'可能'},
];

// Sắp xếp — khác Điền từ, có câu ôn 姓/去年
const sortData = [
  {words:['一','个','朋友','，','我','同学','介绍','的','。'],ans:'一个朋友，我同学介绍的。',audio:'一个朋友，我同学介绍的。'},
  {words:['他','比','我','大','三','岁','。'],ans:'他比我大三岁。',audio:'他比我大三岁。'},
  {words:['你','可能','不','认识','他','。'],ans:'你可能不认识他。',audio:'你可能不认识他。'},
  {words:['他','姓','王','，','28','岁','。'],ans:'他姓王，28岁。',audio:'他姓王，28岁。'},
  {words:['他','比','我们','老师','小','两','岁','。'],ans:'他比我们老师小两岁。',audio:'他比我们老师小两岁。'},
  {words:['他','是','去年','来','的','。'],ans:'他是去年来的。',audio:'他是去年来的。'},
];

const matchData = [
  {left:'昨天和你一起唱歌的人是谁？',right:'一个朋友。'},
  {left:'左边这个看报纸的女孩子是你姐姐吗？',right:'右边写字的那个人是我哥哥。'},
  {left:'你哥哥多大？',right:'25岁，他比我大三岁。'},
  {left:'今天的西瓜怎么卖？',right:'三块五一斤，比昨天便宜。'},
  {left:'是新来的汉语老师吗？',right:'是去年来的，他姓王。'},
  {left:'前面说话的那个人是谁？',right:'就是我的汉语老师。'},
];

// Trắc nghiệm — không audio; trộn từ Bài 3/9/10 làm phương án nhiễu
const mcData = [
  {q:'昨天和你一起＿＿的人是谁？',opts:['唱歌','跳舞','说话','休息'],ans:0},
  {q:'是不是＿＿朋友？',opts:['男','女','好','小'],ans:0},
  {q:'＿＿边写字的那个人是我哥哥。',opts:['右','左','旁','外'],ans:0},
  {q:'他＿＿我大三岁。',opts:['比','从','对','离'],ans:0},
  {q:'西瓜比昨天＿＿。',opts:['便宜','贵','近','远'],ans:0},
  {q:'前面＿＿话的那个人是老师。',opts:['说','告诉','问','叫'],ans:0},
  {q:'你＿＿不认识他。',opts:['可能','已经','正在','非常'],ans:0},
  {q:'他是＿＿来的。',opts:['去年','昨天','以后','晚上'],ans:0},
  {q:'他＿＿王。',opts:['姓','叫','是','有'],ans:0},
  {q:'那个＿＿很可爱。',opts:['孩子','哥哥','朋友','同学'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý thanh điệu và nhịp câu. Có thể đọc phân vai theo cặp.',
    models:[
      {zh:'昨天和你一起唱歌的人是谁？',py:'Zuótiān hé nǐ yìqǐ chàng gē de rén shì shéi?',vn:'Người hôm qua cùng hát với bạn là ai?'},
      {zh:'他比我大三岁。',py:'Tā bǐ wǒ dà sān suì.',vn:'Anh ấy lớn hơn tôi 3 tuổi.'},
      {zh:'西瓜比昨天便宜。',py:'Xīguā bǐ zuótiān piányi.',vn:'Dưa hấu rẻ hơn hôm qua.'},
      {zh:'你可能不认识他。',py:'Nǐ kěnéng bú rènshi tā.',vn:'Có thể bạn không quen thầy ấy đâu.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu mới. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'他比我大＿＿岁。',frame_py:'Tā bǐ wǒ dà ___ suì.',vn:'Anh ấy lớn hơn tôi ＿＿ tuổi.',options:['一','两','三'],samples:['他比我大一岁。','他比我大两岁。','他比我大三岁。']},
      {frame:'这个比那个＿＿。',frame_py:'Zhège bǐ nàge ___.',vn:'Cái này ＿＿ hơn cái kia.',options:['便宜','贵','大'],samples:['这个比那个便宜。','这个比那个贵。','这个比那个大。']},
      {frame:'他姓＿＿。',frame_py:'Tā xìng ___.',vn:'Anh ấy họ ＿＿.',options:['王','李','张'],samples:['他姓王。','他姓李。','他姓张。']},
      {frame:'你可能不认识＿＿。',frame_py:'Nǐ kěnéng bú rènshi ___.',vn:'Có thể bạn không quen ＿＿.',options:['他','她','我朋友'],samples:['你可能不认识他。','你可能不认识她。','你可能不认识我朋友。']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Nói liền 2–3 câu. Ghi âm lại rồi nghe để tự sửa.',
    tasks:[
      {role:'🎤 Tình huống 1 — Hỏi về người bạn mới quen',
       guide:'Bạn hỏi ai đó về người đã đi hát cùng họ hôm qua, có phải bạn trai/gái không.',
       structure:['昨天和你一起＿＿的人是谁？','是＿＿介绍的。'],
       sample:'昨天和你一起唱歌的人是谁？是我同学介绍的。',
       sample_vn:'Người hôm qua cùng hát với bạn là ai? Là bạn học tớ giới thiệu.'},
      {role:'👨‍👩‍👧 Tình huống 2 — So sánh tuổi tác anh chị em',
       guide:'Bạn hỏi tuổi anh/chị của ai đó và so sánh với tuổi của họ.',
       structure:['你＿＿多大？','他比我大/小＿＿岁。'],
       sample:'你哥哥多大？他比我大三岁。',
       sample_vn:'Anh trai bạn bao nhiêu tuổi? Anh ấy lớn hơn tôi 3 tuổi.'},
      {role:'🛍️ Tình huống 3 — Mặc cả giá cả',
       guide:'Bạn hỏi giá một món đồ ở chợ và so sánh với giá hôm qua.',
       structure:['这个怎么卖？','比昨天＿＿一些。'],
       sample:'西瓜怎么卖？比昨天便宜一些。',
       sample_vn:'Dưa hấu bán thế nào? Rẻ hơn hôm qua một chút.'},
    ],
  },
};
