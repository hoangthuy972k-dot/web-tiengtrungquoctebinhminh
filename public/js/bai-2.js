// ══════════════════════════════════════════
// AUDIO (Web Speech API — không có file mp3 thật)
// ══════════════════════════════════════════
var zhVoice=null;
function pickZhVoice(){
  if(!window.speechSynthesis) return null;
  var vs=window.speechSynthesis.getVoices();
  return vs.filter(function(v){return /^zh/i.test(v.lang);})[0]||null;
}
if(window.speechSynthesis){
  zhVoice=pickZhVoice();
  window.speechSynthesis.onvoiceschanged=function(){zhVoice=pickZhVoice();};
}
function speakZh(text){
  if(!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  var u=new SpeechSynthesisUtterance(text);
  u.lang='zh-CN';u.rate=0.9;
  if(zhVoice)u.voice=zhVoice;
  window.speechSynthesis.speak(u);
}
function speakSeq(texts){
  if(!window.speechSynthesis) return;
  window.speechSynthesis.cancel();
  texts.forEach(function(t){
    var u=new SpeechSynthesisUtterance(t);
    u.lang='zh-CN';u.rate=0.9;
    if(zhVoice)u.voice=zhVoice;
    window.speechSynthesis.speak(u);
  });
}
function miniSpeakBtn(text){return '<button type="button" class="speak-mini" data-action="speak" data-text="'+text.replace(/"/g,'&quot;')+'">🔊</button>';}

// ══════════════════════════════════════════
// DATA
// ══════════════════════════════════════════
const vocabData = [
  {n:1,zh:'生病',py:'shēngbìng',pos:'Động từ',vn:'bị bệnh, sinh bệnh',em:'🤒',lesson:1,
   ex_zh:'他生病了，今天没有去上班。',ex_py:'Tā shēngbìng le, jīntiān méiyǒu qù shàngbān.',ex_vn:'Anh ấy bị bệnh rồi, hôm nay không đi làm.',
   exList:[
     {zh:'他生病了，今天没有去上班。',py:'Tā shēngbìng le, jīntiān méiyǒu qù shàngbān.',vn:'Anh ấy bị bệnh rồi, hôm nay không đi làm.'},
     {zh:'你生病了吗？',py:'Nǐ shēngbìng le ma?',vn:'Bạn bị ốm à?'},
     {zh:'妈妈生病了，我很担心。',py:'Māma shēngbìng le, wǒ hěn dānxīn.',vn:'Mẹ ốm rồi, tôi rất lo lắng.'},
   ],
   hanzi:[
     {c:'生',p:'shēng',type:'独体字 · Chữ đơn',st:5,ord:'丿→一→一→丨→一',rad:'生 (sinh – tự thành bộ)',mean:'sinh ra; sống; nảy mầm',
      tip:'Hình mầm cây mọc trên mặt đất → "sinh ra, nảy mầm". Gặp lại trong 学生, 医生.',
      cf:'牛 (niú – thiếu nét trên)',w:'生病 / 学生 / 医生'},
     {c:'病',p:'bìng',type:'半包围 · Bán bao (疒)',st:10,ord:'疒 (bộ bệnh) → 丙 bên trong',rad:'疒 (nạch – bệnh tật)',mean:'bệnh; ốm',
      tip:'Bộ 疒 = hình người nằm trên giường bệnh. Thấy 疒 → nghĩ ngay tới ỐM ĐAU.',
      cf:'痛 (tòng – cùng bộ 疒)',w:'生病 / 看病 / 病人'},
   ]},
  {n:2,zh:'每',py:'měi',pos:'Đại từ',vn:'mỗi',em:'🔁',lesson:1,
   ex_zh:'我每天都学习中文。',ex_py:'Wǒ měitiān dōu xuéxí Zhōngwén.',ex_vn:'Mỗi ngày tôi đều học tiếng Trung.',
   exList:[
     {zh:'我每天都学习中文。',py:'Wǒ měitiān dōu xuéxí Zhōngwén.',vn:'Mỗi ngày tôi đều học tiếng Trung.'},
     {zh:'每个人都喜欢他。',py:'Měige rén dōu xǐhuan tā.',vn:'Mỗi người đều thích anh ấy.'},
     {zh:'每次都是这样。',py:'Měicì dōu shì zhèyàng.',vn:'Lần nào cũng như vậy.'},
   ],
   hanzi:[
     {c:'每',p:'měi',type:'上下结构 · Trên-dưới',st:7,ord:'ノ→一→一→フ→一→ㄥ→丶',rad:'母 (mẫu – biến thể)',mean:'mỗi, từng',
      tip:'Gần giống chữ 母 (mẹ) thêm 1 nét trên đầu — mỗi bà mẹ đều có quy tắc riêng, hãy nhớ 每 hay đi cùng 都.',
      cf:'母 (mǔ – "mẹ", thiếu 1 nét)',w:'每天 / 每个 / 每次'},
   ]},
  {n:3,zh:'早上',py:'zǎoshang',pos:'Danh từ',vn:'buổi sáng',em:'🌅',lesson:1,
   ex_zh:'早上的天气很冷。',ex_py:'Zǎoshang de tiānqì hěn lěng.',ex_vn:'Thời tiết buổi sáng rất lạnh.',
   exList:[
     {zh:'早上的天气很冷。',py:'Zǎoshang de tiānqì hěn lěng.',vn:'Thời tiết buổi sáng rất lạnh.'},
     {zh:'我早上七点起床。',py:'Wǒ zǎoshang qī diǎn qǐchuáng.',vn:'Buổi sáng tôi thức dậy lúc 7 giờ.'},
     {zh:'早上好！',py:'Zǎoshang hǎo!',vn:'Chào buổi sáng!'},
   ],
   hanzi:[
     {c:'早',p:'zǎo',type:'上下结构 · Trên-dưới',st:6,ord:'日 (mặt trời) trên → 十 dưới',rad:'日 (nhật – mặt trời)',mean:'sớm',
      tip:'Mặt trời 日 mới nhô lên trên cây/giá 十 → trời còn SỚM.',
      cf:'旱 (hàn – "hạn hán", phần dưới khác)',w:'早上 / 早饭 / 早点'},
     {c:'上',p:'shàng',type:'独体字 · Chữ đơn',st:3,ord:'一 → 丨 → 一',rad:'一 (nhất)',mean:'trên; lên',
      tip:'Một nét ngắn phía TRÊN một nét ngang dài → chỉ hướng lên trên. 早上 = phần sớm của ngày.',
      cf:'下 (xià – trái nghĩa)',w:'早上 / 上班 / 上课'},
   ]},
  {n:4,zh:'跑步',py:'pǎobù',pos:'Động từ',vn:'chạy bộ',em:'🏃',lesson:1,
   ex_zh:'我去操场跑步。',ex_py:'Wǒ qù cāochǎng pǎobù.',ex_vn:'Tôi đi sân tập chạy bộ.',
   exList:[
     {zh:'我去操场跑步。',py:'Wǒ qù cāochǎng pǎobù.',vn:'Tôi đi sân tập chạy bộ.'},
     {zh:'他每天早上跑步。',py:'Tā měitiān zǎoshang pǎobù.',vn:'Mỗi sáng anh ấy đều chạy bộ.'},
     {zh:'跑步对身体很好。',py:'Pǎobù duì shēntǐ hěn hǎo.',vn:'Chạy bộ rất tốt cho sức khỏe.'},
   ],
   hanzi:[
     {c:'跑',p:'pǎo',type:'左右结构 · Trái-phải',st:12,ord:'足 (túc) trái → 包 (bao) phải',rad:'足 (túc – chân)',mean:'chạy',
      tip:'Bộ 足 (chân) bên trái → động tác liên quan tới chân. Chân + 包 (bọc/ôm lấy đất) → CHẠY.',
      cf:'饱 (bǎo – "no", bộ 饣")',w:'跑步 / 跑车 / 快跑'},
     {c:'步',p:'bù',type:'上下结构 · Trên-dưới',st:7,ord:'止 (chỉ) trên → 少 biến thể dưới',rad:'止 (chỉ – dừng/chân)',mean:'bước',
      tip:'Hai bàn chân nối tiếp nhau tạo thành BƯỚC đi.',
      cf:'涉 (shè – thêm bộ 氵)',w:'跑步 / 一步 / 步行'},
   ]},
  {n:5,zh:'起床',py:'qǐchuáng',pos:'Động từ',vn:'thức dậy',em:'⏰',lesson:1,
   ex_zh:'你每天几点起床？',ex_py:'Nǐ měitiān jǐ diǎn qǐchuáng?',ex_vn:'Mỗi ngày bạn thức dậy lúc mấy giờ?',
   exList:[
     {zh:'你每天几点起床？',py:'Nǐ měitiān jǐ diǎn qǐchuáng?',vn:'Mỗi ngày bạn thức dậy lúc mấy giờ?'},
     {zh:'我六点起床。',py:'Wǒ liù diǎn qǐchuáng.',vn:'Tôi thức dậy lúc 6 giờ.'},
     {zh:'弟弟还没起床。',py:'Dìdi hái méi qǐchuáng.',vn:'Em trai vẫn chưa thức dậy.'},
   ],
   hanzi:[
     {c:'起',p:'qǐ',type:'半包围 · Bán bao (走)',st:10,ord:'走 (tẩu) trái/dưới → 己 (kỷ) phải/trên',rad:'走 (tẩu – đi)',mean:'dậy; bắt đầu',
      tip:'Bộ 走 (đi) + 己 (bản thân) → tự mình đứng dậy và bước đi = THỨC DẬY, bắt đầu.',
      cf:'赶 (gǎn – "vội, đuổi kịp")',w:'起床 / 起来 / 早起'},
     {c:'床',p:'chuáng',type:'半包围 · Bán bao (广)',st:7,ord:'广 (mái nhà) → 木 (mộc) bên trong',rad:'广 (nghiễm – mái che)',mean:'giường',
      tip:'Mái nhà 广 che phía trên khung gỗ 木 → cái GIƯỜNG ở trong nhà.',
      cf:'庄 (zhuāng – "trang trại")',w:'起床 / 床上 / 一张床'},
   ]},
  {n:6,zh:'药',py:'yào',pos:'Danh từ',vn:'thuốc',em:'💊',lesson:2,
   ex_zh:'吃药以后要喝水。',ex_py:'Chī yào yǐhòu yào hē shuǐ.',ex_vn:'Sau khi uống thuốc phải uống nước.',
   exList:[
     {zh:'吃药以后要喝水。',py:'Chī yào yǐhòu yào hē shuǐ.',vn:'Sau khi uống thuốc phải uống nước.'},
     {zh:'你吃药了吗？',py:'Nǐ chī yào le ma?',vn:'Bạn uống thuốc chưa?'},
     {zh:'医生给了我一点儿药。',py:'Yīshēng gěile wǒ yìdiǎnr yào.',vn:'Bác sĩ đã cho tôi một ít thuốc.'},
   ],
   hanzi:[
     {c:'药',p:'yào',type:'上下结构 · Trên-dưới',st:9,ord:'艹 (thảo đầu) trên → 约 (ước) dưới',rad:'艹 (thảo – cỏ cây)',mean:'thuốc',
      tip:'Bộ 艹 (cỏ) ở trên → thuốc xưa làm từ cây cỏ, thảo dược. Thấy 艹 → nghĩ tới cây cỏ/thuốc men.',
      cf:'约 (yuē – "hẹn", thiếu 艹)',w:'吃药 / 买药 / 中药'},
   ]},
  {n:7,zh:'身体',py:'shēntǐ',pos:'Danh từ',vn:'cơ thể, sức khỏe',em:'💪',lesson:2,
   ex_zh:'爸爸的身体很好。',ex_py:'Bàba de shēntǐ hěn hǎo.',ex_vn:'Sức khỏe của bố rất tốt.',
   exList:[
     {zh:'爸爸的身体很好。',py:'Bàba de shēntǐ hěn hǎo.',vn:'Sức khỏe của bố rất tốt.'},
     {zh:'现在身体怎么样？',py:'Xiànzài shēntǐ zěnmeyàng?',vn:'Bây giờ sức khỏe thế nào rồi?'},
     {zh:'多运动对身体好。',py:'Duō yùndòng duì shēntǐ hǎo.',vn:'Vận động nhiều tốt cho sức khỏe.'},
   ],
   hanzi:[
     {c:'身',p:'shēn',type:'独体字 · Chữ đơn',st:7,ord:'丿→ 丨→ 一→ 一→ 一→ 一→ 一',rad:'身 (thân – tự thành bộ)',mean:'thân mình',
      tip:'Hình dáng người mang thai/thân người nhìn nghiêng → THÂN THỂ.',
      cf:'躬 (gōng – thêm bộ 弓)',w:'身体 / 全身 / 自身'},
     {c:'体',p:'tǐ',type:'左右结构 · Trái-phải',st:7,ord:'亻 (nhân) trái → 本 (bản) phải',rad:'亻 (nhân – người)',mean:'cơ thể',
      tip:'Người 亻 + 本 (gốc rễ) → cái GỐC của một con người = cơ thể.',
      cf:'休 (xiū – khác phần phải)',w:'身体 / 体育 / 体重'},
   ]},
  {n:8,zh:'出院',py:'chūyuàn',pos:'Động từ',vn:'xuất viện',em:'🚪',lesson:2,
   ex_zh:'他明天就可以出院了。',ex_py:'Tā míngtiān jiù kěyǐ chūyuàn le.',ex_vn:'Ngày mai anh ấy có thể xuất viện rồi.',
   exList:[
     {zh:'他明天就可以出院了。',py:'Tā míngtiān jiù kěyǐ chūyuàn le.',vn:'Ngày mai anh ấy có thể xuất viện rồi.'},
     {zh:'什么时候能出院？',py:'Shénme shíhou néng chūyuàn?',vn:'Khi nào thì có thể xuất viện?'},
     {zh:'医生说下星期出院。',py:'Yīshēng shuō xià xīngqī chūyuàn.',vn:'Bác sĩ nói tuần sau xuất viện.'},
   ],
   hanzi:[
     {c:'出',p:'chū',type:'独体字 · Chữ đơn',st:5,ord:'凵 → 山 chồng lên',rad:'凵 (khảm – hố)',mean:'ra, xuất',
      tip:'Hình một chân bước RA khỏi cái hố/hang → "đi ra, xuất hiện". Trái nghĩa với 进 (vào).',
      cf:'击 (jī)',w:'出院 / 出去 / 出发'},
     {c:'院',p:'yuàn',type:'左右结构 · Trái-phải',st:9,ord:'阝(phụ) trái → 完 (hoàn) phải',rad:'阝(phụ – đồi/khu vực)',mean:'viện, sân, khuôn viên',
      tip:'Bộ 阝 (khu vực có tường bao) + 完 → một khuôn viên khép kín = VIỆN (bệnh viện, học viện...).',
      cf:'完 (wán – thiếu bộ 阝)',w:'出院 / 医院 / 学院'},
   ]},
  {n:9,zh:'高',py:'gāo',pos:'Tính từ',vn:'cao',em:'📏',lesson:3,
   ex_zh:'他比我高一点儿。',ex_py:'Tā bǐ wǒ gāo yìdiǎnr.',ex_vn:'Anh ấy cao hơn tôi một chút.',
   exList:[
     {zh:'他比我高一点儿。',py:'Tā bǐ wǒ gāo yìdiǎnr.',vn:'Anh ấy cao hơn tôi một chút.'},
     {zh:'这座楼很高。',py:'Zhè zuò lóu hěn gāo.',vn:'Tòa nhà này rất cao.'},
     {zh:'他多高？',py:'Tā duō gāo?',vn:'Anh ấy cao bao nhiêu?'},
   ],
   hanzi:[
     {c:'高',p:'gāo',type:'独体字 · Tượng hình',st:10,ord:'亠 → 口 → 冂 → 口',rad:'高 (cao – tự thành bộ)',mean:'cao',
      tip:'Hình vẽ một tòa tháp nhiều tầng nhìn từ xa → "CAO". Nhớ theo hình dáng tháp canh cổ.',
      cf:'亭 (tíng – "đình", có 丁 dưới)',w:'高兴 / 高大 / 多高'},
   ]},
  {n:10,zh:'米',py:'mǐ',pos:'Lượng từ',vn:'mét',em:'📐',lesson:3,
   ex_zh:'他高一米八。',ex_py:'Tā gāo yì mǐ bā.',ex_vn:'Anh ấy cao 1 mét 8.',
   exList:[
     {zh:'他高一米八。',py:'Tā gāo yì mǐ bā.',vn:'Anh ấy cao 1 mét 8.'},
     {zh:'这条路有一千米长。',py:'Zhè tiáo lù yǒu yìqiān mǐ cháng.',vn:'Con đường này dài 1000 mét.'},
     {zh:'我一米六五。',py:'Wǒ yì mǐ liù wǔ.',vn:'Tôi cao 1 mét 65.'},
   ],
   hanzi:[
     {c:'米',p:'mǐ',type:'独体字 · Tượng hình',st:6,ord:'丶 → 一 → 十 → 丿 → 捺',rad:'米 (mễ – gạo)',mean:'gạo; (mượn âm) mét',
      tip:'Hình các hạt gạo tách ra từ bông lúa → nghĩa gốc là "GẠO". Do phiên âm gần giống "mètre" nên mượn làm đơn vị đo "MÉT".',
      cf:'来 (lái – gần giống nét trên)',w:'一米 / 大米 / 米饭'},
   ]},
  {n:11,zh:'知道',py:'zhīdào',pos:'Động từ',vn:'biết',em:'💡',lesson:3,
   ex_zh:'我知道这件事。',ex_py:'Wǒ zhīdào zhè jiàn shì.',ex_vn:'Tôi biết chuyện này.',
   exList:[
     {zh:'我知道这件事。',py:'Wǒ zhīdào zhè jiàn shì.',vn:'Tôi biết chuyện này.'},
     {zh:'你怎么知道的？',py:'Nǐ zěnme zhīdào de?',vn:'Sao bạn lại biết được?'},
     {zh:'我不知道他叫什么名字。',py:'Wǒ bù zhīdào tā jiào shénme míngzi.',vn:'Tôi không biết anh ấy tên gì.'},
   ],
   hanzi:[
     {c:'知',p:'zhī',type:'左右结构 · Trái-phải',st:8,ord:'矢 (thỉ) trái → 口 (khẩu) phải',rad:'矢 (thỉ – mũi tên)',mean:'biết',
      tip:'Mũi tên 矢 bắn trúng đích + miệng 口 nói ra → nói trúng, tức là BIẾT rõ.',
      cf:'智 (zhì – thêm bộ 日)',w:'知道 / 通知 / 知识'},
     {c:'道',p:'dào',type:'半包围 · Bán bao (辶)',st:12,ord:'首 (thủ) trước → 辶 sau cùng',rad:'辶 (sước – bước đi)',mean:'đường; đạo; nói',
      tip:'首 (đầu, hướng đi) + 辶 (đi) → con ĐƯỜNG dẫn tới đích. 知 + 道 = biết rõ đường đi = BIẾT.',
      cf:'导 (dǎo – "dẫn dắt")',w:'知道 / 道路 / 味道'},
   ]},
  {n:12,zh:'休息',py:'xiūxi',pos:'Động từ',vn:'nghỉ ngơi',em:'😴',lesson:3,
   ex_zh:'累了就休息一下吧。',ex_py:'Lèi le jiù xiūxi yíxià ba.',ex_vn:'Mệt thì nghỉ ngơi một chút đi.',
   exList:[
     {zh:'累了就休息一下吧。',py:'Lèi le jiù xiūxi yíxià ba.',vn:'Mệt thì nghỉ ngơi một chút đi.'},
     {zh:'我们休息十分钟。',py:'Wǒmen xiūxi shí fēnzhōng.',vn:'Chúng ta nghỉ 10 phút.'},
     {zh:'今天他在家休息。',py:'Jīntiān tā zài jiā xiūxi.',vn:'Hôm nay anh ấy ở nhà nghỉ ngơi.'},
   ],
   hanzi:[
     {c:'休',p:'xiū',type:'左右结构 · Trái-phải',st:6,ord:'亻 (nhân) trái → 木 (mộc) phải',rad:'亻 (nhân – người)',mean:'nghỉ',
      tip:'Người 亻 dựa vào cây 木 → hình ảnh một người ngồi tựa gốc cây để NGHỈ NGƠI.',
      cf:'体 (tǐ – khác phần phải)',w:'休息 / 休假 / 退休'},
     {c:'息',p:'xī',type:'上下结构 · Trên-dưới',st:10,ord:'自 (tự) trên → 心 (tâm) dưới',rad:'心 (tâm – trái tim)',mean:'hơi thở; ngừng lại',
      tip:'自 (mũi) trên 心 (tim) → hơi thở ra vào từ tim/mũi → nghĩa "thở, nghỉ".',
      cf:'鼻 (bí – "mũi")',w:'休息 / 消息 / 信息'},
   ]},
  {n:13,zh:'忙',py:'máng',pos:'Tính từ',vn:'bận',em:'😅',lesson:3,
   ex_zh:'老师最近很忙。',ex_py:'Lǎoshī zuìjìn hěn máng.',ex_vn:'Dạo này giáo viên rất bận.',
   exList:[
     {zh:'老师最近很忙。',py:'Lǎoshī zuìjìn hěn máng.',vn:'Dạo này giáo viên rất bận.'},
     {zh:'你在忙什么？',py:'Nǐ zài máng shénme?',vn:'Bạn đang bận gì vậy?'},
     {zh:'他工作很忙，没有时间休息。',py:'Tā gōngzuò hěn máng, méiyǒu shíjiān xiūxi.',vn:'Anh ấy làm việc rất bận, không có thời gian nghỉ.'},
   ],
   hanzi:[
     {c:'忙',p:'máng',type:'左右结构 · Trái-phải',st:6,ord:'忄 (tâm đứng) trái → 亡 (vong) phải',rad:'忄 (tâm – trái tim)',mean:'bận rộn',
      tip:'Trái tim 忄 + 亡 (mất, quên) → bận đến mức như "mất cả tâm trí", quay cuồng.',
      cf:'忘 (wàng – "quên", 忄 ở dưới)',w:'忙不忙 / 帮忙 / 很忙'},
   ]},
  {n:14,zh:'时间',py:'shíjiān',pos:'Danh từ',vn:'thời gian',em:'⏳',lesson:3,
   ex_zh:'我没有时间去玩。',ex_py:'Wǒ méiyǒu shíjiān qù wán.',ex_vn:'Tôi không có thời gian đi chơi.',
   exList:[
     {zh:'我没有时间去玩。',py:'Wǒ méiyǒu shíjiān qù wán.',vn:'Tôi không có thời gian đi chơi.'},
     {zh:'现在是什么时间？',py:'Xiànzài shì shénme shíjiān?',vn:'Bây giờ là mấy giờ?'},
     {zh:'时间过得真快。',py:'Shíjiān guò de zhēn kuài.',vn:'Thời gian trôi qua thật nhanh.'},
   ],
   hanzi:[
     {c:'时',p:'shí',type:'左右结构 · Trái-phải',st:7,ord:'日 (nhật) trái → 寸 (thốn) phải',rad:'日 (nhật – mặt trời)',mean:'thời gian, giờ',
      tip:'Mặt trời 日 di chuyển theo từng khoảng đo được 寸 (đơn vị đo) → chỉ THỜI GIAN.',
      cf:'待 (dài – "chờ đợi")',w:'时间 / 小时 / 有时'},
     {c:'间',p:'jiān',type:'半包围 · Bán bao (门)',st:7,ord:'门 (môn) bao ngoài → 日 bên trong',rad:'门 (môn – cửa)',mean:'khoảng, giữa',
      tip:'Ánh mặt trời 日 lọt qua khe cửa 门 → khoảng KHÔNG GIAN/THỜI GIAN ở giữa.',
      cf:'问 (wèn – thay 日 bằng 口)',w:'时间 / 中间 / 房间'},
   ]},
  {n:15,zh:'累',py:'lèi',pos:'Tính từ',vn:'mệt',em:'😩',lesson:3,
   ex_zh:'工作一天，我很累。',ex_py:'Gōngzuò yìtiān, wǒ hěn lèi.',ex_vn:'Làm việc một ngày, tôi rất mệt.',
   exList:[
     {zh:'工作一天，我很累。',py:'Gōngzuò yìtiān, wǒ hěn lèi.',vn:'Làm việc một ngày, tôi rất mệt.'},
     {zh:'你累不累？',py:'Nǐ lèi bu lèi?',vn:'Bạn có mệt không?'},
     {zh:'他每天回来都很累。',py:'Tā měitiān huílái dōu hěn lèi.',vn:'Mỗi ngày anh ấy về nhà đều rất mệt.'},
   ],
   hanzi:[
     {c:'累',p:'lèi',type:'上下结构 · Trên-dưới',st:11,ord:'田 (điền) trên → 糸 (mịch) dưới',rad:'糸 (mịch – tơ, sợi)',mean:'mệt mỏi; tích lũy',
      tip:'田 (ruộng, gánh nặng) đè lên trên bó tơ 糸 → gánh nhiều thứ chồng chất → MỆT MỎI.',
      cf:'螺 (luó – "ốc", thêm bộ 虫")',w:'很累 / 劳累 / 积累'},
   ]},
];

const wuData = [
  {img:'⏰',label:'起床',py:'qǐchuáng',letter:'A'},
  {img:'🤒',label:'生病',py:'shēngbìng',letter:'B'},
  {img:'😴',label:'休息',py:'xiūxi',letter:'C'},
  {img:'😅',label:'忙',py:'máng',letter:'D'},
  {img:'😩',label:'累',py:'lèi',letter:'E'},
  {img:'🏃',label:'跑步',py:'pǎobù',letter:'F'},
];

const dialogData = [
  {scene:'在运动场 · Trên sân vận động',
   lines:[
     {sp:0,zh:'你很少生病，是不是喜欢运动？',py:'Nǐ hěn shǎo shēngbìng, shìbushì xǐhuan yùndòng?',vn:'Bạn rất ít khi bị bệnh, có phải là vì thích vận động không?'},
     {sp:1,zh:'是啊，我每天早上都要出去跑步。',py:'Shì a, wǒ měitiān zǎoshang dōu yào chūqu pǎobù.',vn:'Đúng vậy, mỗi sáng tôi đều phải ra ngoài chạy bộ.'},
     {sp:0,zh:'你每天几点起床？',py:'Nǐ měitiān jǐ diǎn qǐchuáng?',vn:'Mỗi ngày bạn thức dậy lúc mấy giờ?'},
     {sp:1,zh:'我每天6点起床。',py:'Wǒ měitiān liù diǎn qǐchuáng.',vn:'Mỗi ngày tôi thức dậy lúc 6 giờ.'},
   ]},
  {scene:'在医院 · Trong bệnh viện',
   lines:[
     {sp:0,zh:'吃药了吗？现在身体怎么样？',py:'Chī yào le ma? Xiànzài shēntǐ zěnmeyàng?',vn:'Bạn uống thuốc chưa? Bây giờ sức khỏe thế nào rồi?'},
     {sp:1,zh:'吃了。现在好多了。',py:'Chī le. Xiànzài hǎo duō le.',vn:'Uống rồi. Bây giờ tốt hơn nhiều rồi.'},
     {sp:0,zh:'什么时候能出院？',py:'Shénme shíhou néng chūyuàn?',vn:'Khi nào thì có thể xuất viện?'},
     {sp:1,zh:'医生说下个星期。',py:'Yīshēng shuō xià ge xīngqī.',vn:'Bác sĩ nói là tuần sau.'},
   ]},
  {scene:'在操场 · Trên sân tập',
   lines:[
     {sp:0,zh:'大卫今年多大？',py:'Dàwèi jīnnián duō dà?',vn:'David năm nay bao nhiêu tuổi?'},
     {sp:1,zh:'20多岁。',py:'Èrshí duō suì.',vn:'Hơn 20 tuổi.'},
     {sp:0,zh:'他多高？',py:'Tā duō gāo?',vn:'Anh ấy cao bao nhiêu?'},
     {sp:1,zh:'一米8几。',py:'Yī mǐ bā jǐ.',vn:'Hơn 1 mét 8.'},
     {sp:0,zh:'你怎么知道这么多呀？',py:'Nǐ zěnme zhīdào zhème duō ya?',vn:'Sao bạn lại biết nhiều chuyện về anh ấy thế?'},
     {sp:1,zh:'他是我同学。',py:'Tā shì wǒ tóngxué.',vn:'Anh ấy là bạn học của tôi.'},
   ]},
  {scene:'在房间 · Trong phòng',
   lines:[
     {sp:0,zh:'张老师星期六也不休息啊。',py:'Zhāng lǎoshī xīngqīliù yě bù xiūxi a.',vn:'Thầy Trương thứ Bảy cũng không nghỉ ngơi à.'},
     {sp:1,zh:'是啊，他这几天很忙，没有时间休息。',py:'Shì a, tā zhè jǐ tiān hěn máng, méiyǒu shíjiān xiūxi.',vn:'Đúng vậy, mấy ngày nay thầy ấy rất bận, không có thời gian nghỉ ngơi.'},
     {sp:0,zh:'那会很累吧。',py:'Nà huì hěn lèi ba.',vn:'Như thế thì mệt lắm nhỉ.'},
     {sp:1,zh:'他每天回来都很累。',py:'Tā měitiān huílái dōu hěn lèi.',vn:'Mỗi ngày thầy ấy về nhà đều rất mệt.'},
   ]},
];

const fillData = [
  {pre:'你很少生病，',blank:'是不是',post:'喜欢运动？',hint:'(có phải... không?)',ans:'是不是',exp:'是不是 dùng để hỏi lại nhằm xác nhận điều đã đoán'},
  {pre:'我',blank:'每',post:'天早上都要出去跑步。',hint:'(mỗi)',ans:'每',exp:'每 + lượng từ/danh từ + 都 = mỗi... đều...'},
  {pre:'你',blank:'多',post:'大？',hint:'(hỏi mức độ)',ans:'多',exp:'多 + tính từ để hỏi mức độ: 多大, 多高'},
  {pre:'吃了。现在好',blank:'多',post:'了。',hint:'(nhiều hơn)',ans:'多',exp:'好多了 = tốt hơn nhiều rồi'},
  {pre:'医生说下个',blank:'星期',post:'。',hint:'(tuần)',ans:'星期',exp:'下个星期 = tuần sau'},
  {pre:'大卫今年多大？20',blank:'多',post:'岁。',hint:'(hơn — số ước lượng)',ans:'多',exp:'Số + 多 + 岁 = hơn ... tuổi'},
  {pre:'他这几天很忙，没有时间',blank:'休息',post:'。',hint:'(nghỉ ngơi)',ans:'休息',exp:'休息 = nghỉ ngơi'},
  {pre:'他每天回来都很',blank:'累',post:'。',hint:'(mệt)',ans:'累',exp:'累 = mệt, tính từ chỉ trạng thái'},
];

const sortData = [
  {words:['我','每天','六点','起床','。'],ans:'我每天六点起床。',audio:'我每天六点起床。'},
  {words:['我','每天','早上','都要','出去','跑步','。'],ans:'我每天早上都要出去跑步。',audio:'我每天早上都要出去跑步。'},
  {words:['他','这几天','很忙','。'],ans:'他这几天很忙。',audio:'他这几天很忙。'},
  {words:['你','每天','几点','起床','？'],ans:'你每天几点起床？',audio:'你每天几点起床？'},
  {words:['现在','身体','怎么样','？'],ans:'现在身体怎么样？',audio:'现在身体怎么样？'},
  {words:['他','多','高','？'],ans:'他多高？',audio:'他多高？'},
];

const matchData = [
  {left:'你很少生病，',right:'是不是喜欢运动？'},
  {left:'我每天早上',right:'都要出去跑步。'},
  {left:'吃药了吗？',right:'现在身体怎么样？'},
  {left:'什么时候',right:'能出院？'},
  {left:'他这几天很忙，',right:'没有时间休息。'},
  {left:'他每天回来',right:'都很累。'},
];

const mcData = [
  {q:'你很少生病，＿＿喜欢运动？',opts:['是不是','因为','所以','怎么'],ans:0},
  {q:'我＿＿天都要出去跑步。',opts:['是','每','多','几'],ans:1},
  {q:'你＿＿大？',opts:['多','几','是','很'],ans:0},
  {q:'吃了，现在好＿＿了。',opts:['多','很','太','都'],ans:0},
  {q:'医生说＿＿星期。',opts:['这个','下个','那个','每个'],ans:1},
  {q:'他今年20＿＿岁。',opts:['多','几','很','太'],ans:0},
  {q:'他这几天很忙，没有＿＿休息。',opts:['时间','身体','起床','知道'],ans:0},
  {q:'他每天回来都很＿＿。',opts:['忙','累','高','早'],ans:1},
  {q:'他＿＿我同学。',opts:['有','是','在','很'],ans:1},
  {q:'你怎么＿＿这么多呀？',opts:['知道','起床','休息','出院'],ans:0},
];

const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy. Chú ý thanh điệu và nhịp câu. Có thể đọc phân vai theo cặp.',
    models:[
      {zh:'你每天几点起床？',py:'Nǐ měitiān jǐ diǎn qǐchuáng?',vn:'Mỗi ngày bạn thức dậy lúc mấy giờ?'},
      {zh:'现在身体怎么样？',py:'Xiànzài shēntǐ zěnmeyàng?',vn:'Bây giờ sức khỏe thế nào rồi?'},
      {zh:'他多高？',py:'Tā duō gāo?',vn:'Anh ấy cao bao nhiêu?'},
      {zh:'他这几天很忙，没有时间休息。',py:'Tā zhè jǐ tiān hěn máng, méiyǒu shíjiān xiūxi.',vn:'Mấy ngày nay anh ấy rất bận, không có thời gian nghỉ ngơi.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý để tạo câu mới. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'我每天＿＿点起床。',frame_py:'Wǒ měitiān ___ diǎn qǐchuáng.',vn:'Mỗi ngày tôi thức dậy lúc ＿＿ giờ.',options:['六','七','八'],samples:['我每天六点起床。','我每天七点起床。','我每天八点起床。']},
      {frame:'我觉得有点儿＿＿。',frame_py:'Wǒ juéde yǒudiǎnr ___.',vn:'Tôi thấy hơi ＿＿.',options:['累','忙','不舒服'],samples:['我觉得有点儿累。','我觉得有点儿忙。','我觉得有点儿不舒服。']},
      {frame:'他每天回来都很＿＿。',frame_py:'Tā měitiān huílái dōu hěn ___.',vn:'Mỗi ngày anh ấy về nhà đều rất ＿＿.',options:['累','忙','高兴'],samples:['他每天回来都很累。','他每天回来都很忙。','他每天回来都很高兴。']},
      {frame:'你多＿＿？',frame_py:'Nǐ duō ___?',vn:'Bạn ＿＿ bao nhiêu?',options:['大','高'],samples:['你多大？','你多高？']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Nói liền 2–3 câu. Ghi âm lại rồi nghe để tự sửa.',
    tasks:[
      {role:'🏃 Tình huống 1 — Hỏi thăm thói quen tập thể dục',
       guide:'Bạn hỏi bạn mình có phải thích vận động không, và mỗi ngày thức dậy lúc mấy giờ.',
       structure:['你是不是＿＿？','你每天＿＿点起床？'],
       sample:'你是不是喜欢运动？你每天几点起床？',
       sample_vn:'Bạn có phải thích vận động không? Mỗi ngày bạn thức dậy lúc mấy giờ?'},
      {role:'🏥 Tình huống 2 — Hỏi thăm người vừa ốm dậy',
       guide:'Bạn hỏi thăm bạn mình vừa ốm dậy: hỏi sức khỏe thế nào, và khi nào có thể xuất viện.',
       structure:['现在身体＿＿？','什么时候能＿＿？'],
       sample:'现在身体怎么样？什么时候能出院？',
       sample_vn:'Bây giờ sức khỏe thế nào rồi? Khi nào thì có thể xuất viện?'},
      {role:'👥 Tình huống 3 — Giới thiệu về bạn mình',
       guide:'Bạn giới thiệu tuổi và chiều cao của một người bạn cho người khác nghe.',
       structure:['他今年多＿＿？','他多＿＿？'],
       sample:'他今年多大？他多高？他是我同学。',
       sample_vn:'Năm nay anh ấy bao nhiêu tuổi? Anh ấy cao bao nhiêu? Anh ấy là bạn học của tôi.'},
    ],
  },
};

// ══════════════════════════════════════════
// NAV
// ══════════════════════════════════════════
function showTab(id,btn){
  document.querySelectorAll('.section').forEach(function(s){s.classList.remove('active');});
  document.querySelectorAll('.tab-btn').forEach(function(b){b.classList.remove('active');});
  document.getElementById(id).classList.add('active');
  btn.classList.add('active');
}

// ══════════════════════════════════════════
// WARMUP
// ══════════════════════════════════════════
let wuCardSel=null,wuDone=new Set();
function buildWarmup(){
  const grid=document.getElementById('wu-grid');
  const opts=document.getElementById('wu-opts');
  grid.innerHTML='';opts.innerHTML='';
  const letters=wuData.map(function(w){return w.letter;});
  const shuffled=[...wuData].sort(function(){return Math.random()-0.5;});
  shuffled.forEach(function(w){
    const d=document.createElement('div');
    d.className='wu-card';d.id='wuc_'+w.letter;
    d.innerHTML='<div class="wu-emoji">'+w.img+'</div><div class="wu-label">（ ？ ）</div>';
    d.onclick=function(){selectWuCard(w.letter,d);};
    grid.appendChild(d);
  });
  const optLetters=[...letters].sort(function(){return Math.random()-0.5;});
  optLetters.forEach(function(l){
    const w=wuData.find(function(x){return x.letter===l;});
    const btn=document.createElement('button');
    btn.className='wu-opt';btn.id='wuopt_'+l;
    btn.textContent=l+'. '+w.label;
    btn.onclick=function(){selectWuOpt(l);};
    opts.appendChild(btn);
  });
}
function selectWuCard(letter,el){
  if(wuDone.has(letter))return;
  document.querySelectorAll('.wu-card').forEach(function(c){if(!c.classList.contains('matched'))c.style.borderColor='';});
  wuCardSel=letter;el.style.borderColor='var(--sky)';
  document.getElementById('wu-fb').innerHTML='<span style="color:var(--sky)">← Bây giờ chọn đáp án chữ!</span>';
}
function selectWuOpt(letter){
  if(!wuCardSel){document.getElementById('wu-fb').innerHTML='<span style="color:var(--warm)">Hãy chọn hình ảnh trước!</span>';return;}
  if(wuDone.has('O'+letter))return;
  const correct=wuCardSel===letter;
  const cardEl=document.querySelector('#wuc_'+wuCardSel);
  const optEl=document.getElementById('wuopt_'+letter);
  const w=wuData.find(function(x){return x.letter===wuCardSel;});
  if(correct){
    cardEl.classList.add('matched');
    cardEl.querySelector('.wu-label').innerHTML='<strong>'+w.label+'</strong><br><span class="wu-py">'+w.py+'</span>';
    cardEl.style.borderColor='';
    optEl.classList.add('sel-ok');
    wuDone.add(wuCardSel);wuDone.add('O'+letter);
    document.getElementById('wu-fb').innerHTML='<span style="color:var(--green)">✓ Đúng rồi!</span>';
    if(wuDone.size===wuData.length*2){
      const sb=document.getElementById('wu-score');
      sb.style.display='flex';
      document.getElementById('wu-score-n').textContent=wuData.length+'/'+wuData.length;
      document.getElementById('wu-score-m').textContent='🎉 Hoàn hảo! Bạn đã ghép đúng tất cả!';
    }
  } else {
    optEl.classList.add('sel-err');
    document.getElementById('wu-fb').innerHTML='<span style="color:var(--red)">✗ Chưa đúng, thử lại!</span>';
    setTimeout(function(){optEl.classList.remove('sel-err');},600);
  }
  wuCardSel=null;
  document.querySelectorAll('.wu-card').forEach(function(c){if(!c.classList.contains('matched'))c.style.borderColor='';});
}

// ══════════════════════════════════════════
// VOCAB
// ══════════════════════════════════════════
const posStyle={'Danh từ':'background:#dbeafe;color:#1d4ed8','Động từ':'background:#dcfce7;color:#16a34a','Tính từ':'background:#fef9c3;color:#b45309','Đại từ':'background:#fce7f3;color:#be185d','Lượng từ':'background:#f0fdf4;color:#15803d'};
function buildVocab(){
  const g=document.getElementById('vocab-grid');
  g.innerHTML='';
  vocabData.forEach(function(v,vi){
    const d=document.createElement('div');
    d.className='vocab-card';d.dataset.lesson=v.lesson;
    const exs=(v.exList||[{zh:v.ex_zh,py:v.ex_py,vn:v.ex_vn}]).map(function(e){
      return '<div class="vc-ex-item"><div class="vc-ex-zh">'+e.zh+'</div><div class="vc-ex-py">'+e.py+'</div><div class="vc-ex-vn">'+e.vn+'</div></div>';
    }).join('');
    const hzs=(v.hanzi||[]).map(function(h){
      return '<div class="hz-item"><div class="hz-big">'+h.c+'<span class="hz-big-py">'+h.p+'</span></div>'+
        '<div class="hz-info">'+
        '<div class="hz-row"><span class="hz-k">Loại:</span> '+h.type+' <span class="hz-strokes">'+h.st+' nét</span></div>'+
        '<div class="hz-row"><span class="hz-k">Bộ thủ:</span> <span class="hz-rad">'+h.rad+'</span></div>'+
        '<div class="hz-row"><span class="hz-k">Nghĩa:</span> '+h.mean+'</div>'+
        '<div class="hz-row"><span class="hz-k">Bút thuận:</span> '+h.ord+'</div>'+
        '<div class="hz-row"><span class="hz-k">Dễ nhầm:</span> '+h.cf+'</div>'+
        '</div><div class="hz-tip"><b>💡 Mẹo nhớ:</b> '+h.tip+'</div>'+
        '<div class="hz-words"><span class="hz-wl">Từ đại diện:</span> '+h.w+'</div></div>';
    }).join('');
    d.innerHTML='<div class="vc-img"><span class="vc-num">'+v.n+'</span><span>'+v.em+'</span>'+
      '<span class="vc-pos-badge" style="'+(posStyle[v.pos]||'')+'">'+v.pos+'</span></div>'+
      '<div class="vc-body">'+
      '<div class="vc-zh">'+v.zh+' '+miniSpeakBtn(v.zh)+'</div>'+
      '<div class="vc-py">'+v.py+'</div>'+
      '<div class="vc-vn">→ <strong>'+v.vn+'</strong></div>'+
      '<div class="vc-ex"><div class="vc-ex-label">📝 Ví dụ mở rộng</div>'+exs+'</div>'+
      (hzs?'<div class="vc-hz"><button class="hz-btn" data-action="toggle-hz" data-vi="'+vi+'">🀄 Xem Hán tự ('+v.hanzi.length+' chữ)</button><div class="hz-panel" id="hzp'+vi+'">'+hzs+'</div></div>':'')+
      '</div>';
    d.querySelector('.vc-img').onclick=function(){d.classList.toggle('flipped');};
    d.querySelector('.vc-py').onclick=function(){d.classList.toggle('flipped');};
    g.appendChild(d);
  });
}
function toggleHz(btn,vi){
  const p=document.getElementById('hzp'+vi);
  const open=!p.classList.contains('open');
  p.classList.toggle('open',open);
  btn.textContent=open?'🀄 Ẩn Hán tự':'🀄 Xem Hán tự ('+vocabData[vi].hanzi.length+' chữ)';
}
function buildVocabAudio(lesson){
  const box=document.getElementById('vocab-audio');
  const groups={1:'từ mới Bài khoá 1',2:'từ mới Bài khoá 2',3:'từ mới Bài khoá 3–4'};
  let items=lesson===0?[1,2,3]:[lesson];
  box.innerHTML=items.map(function(i){
    const words=vocabData.filter(function(v){return v.lesson===i;}).map(function(v){return v.zh;});
    return '<div class="audio-box"><span class="a-label"><span class="a-ico">🔊</span> Nghe '+groups[i]+'</span>'+
      '<button type="button" class="speak-box-btn" data-action="speak-seq" data-texts="'+JSON.stringify(words).replace(/"/g,'&quot;')+'">▶ Phát ('+words.length+' từ)</button>'+
      '<div class="audio-hint">Nghe – đọc theo – nhắc lại từng từ để chuẩn thanh điệu.</div></div>';
  }).join('');
}
function filterVocab(lesson,btn){
  document.querySelectorAll('.lesson-tab').forEach(function(t){t.classList.remove('active');});
  btn.classList.add('active');
  document.querySelectorAll('.vocab-card').forEach(function(c){
    c.style.display=(lesson===0||parseInt(c.dataset.lesson)===lesson)?'':'none';
  });
  buildVocabAudio(lesson);
}

// ══════════════════════════════════════════
// FLASH
// ══════════════════════════════════════════
let fIdx=0,fOrder=vocabData.map(function(_,i){return i;}),fFlip=false;
function updateFlash(){
  const v=vocabData[fOrder[fIdx]];
  document.getElementById('ff-em').textContent=v.em;
  document.getElementById('ff-zh').textContent=v.zh;
  document.getElementById('ff-py').textContent=v.py;
  document.getElementById('fb-vn').textContent=v.vn;
  document.getElementById('fb-py').textContent=v.py;
  document.getElementById('fb-ex').textContent=v.ex_zh+' — '+v.ex_vn;
  document.getElementById('flash-ctr').textContent=(fIdx+1)+' / '+fOrder.length;
  document.getElementById('flash-card').classList.remove('flipped');
  fFlip=false;
}
function flipFlash(){fFlip=!fFlip;document.getElementById('flash-card').classList.toggle('flipped',fFlip);if(fFlip)speakZh(vocabData[fOrder[fIdx]].zh);}
function flashNext(){fIdx=(fIdx+1)%fOrder.length;updateFlash();}
function flashPrev(){fIdx=(fIdx-1+fOrder.length)%fOrder.length;updateFlash();}
function shuffleFlash(){fOrder.sort(function(){return Math.random()-0.5;});fIdx=0;updateFlash();}

// ══════════════════════════════════════════
// DIALOGS
// ══════════════════════════════════════════
const spColors=[['sp1','bub1'],['sp2','bub2']];
function buildDialogs(){
  const w=document.getElementById('dlg-wrap');
  w.innerHTML='';
  dialogData.forEach(function(d,di){
    const div=document.createElement('div');
    div.className='dlg-card'+(di===0?' active':'');
    div.id='dlg'+di;
    const allZh=d.lines.map(function(l){return l.zh;});
    let h='<div class="dlg-scene">🎭 '+d.scene+'</div>'+
      '<div class="audio-box"><span class="a-label"><span class="a-ico">🎧</span> Nghe bài khoá '+(di+1)+'</span>'+
      '<button type="button" class="speak-box-btn" data-action="speak-seq" data-texts="'+JSON.stringify(allZh).replace(/"/g,'&quot;')+'">▶ Nghe toàn bộ</button>'+
      '<div class="audio-hint">Nghe từng câu, lặp lại theo (shadowing) — nghe 2 lượt trước khi luyện nói.</div></div>';
    d.lines.forEach(function(l){
      const isR=l.sp===1;
      const sc=spColors[l.sp]||spColors[0];
      h+='<div class="dlg-line'+(isR?' r':'')+'">'+
        '<div class="dlg-sp '+sc[0]+'">'+(l.sp===0?'A':'B')+'</div>'+
        '<div class="dlg-bub '+sc[1]+'">'+
        '<div class="dlg-zh">'+l.zh+' '+miniSpeakBtn(l.zh)+'</div>'+
        '<div class="dlg-py">'+l.py+'</div>'+
        '<div class="dlg-vn">'+l.vn+'</div></div></div>';
    });
    div.innerHTML=h;
    w.appendChild(div);
  });
}
function showDlg(i,btn){
  document.querySelectorAll('.dlg-card').forEach(function(c){c.classList.remove('active');});
  document.querySelectorAll('.dlg-tb').forEach(function(b){b.classList.remove('active');});
  document.getElementById('dlg'+i).classList.add('active');
  btn.classList.add('active');
}

// ══════════════════════════════════════════
// FILL BLANK
// ══════════════════════════════════════════
function buildFill(){
  const l=document.getElementById('fill-list');
  l.innerHTML='';
  fillData.forEach(function(q,i){
    l.innerHTML+='<div class="quiz-card" id="fq'+i+'">'+
      '<div class="q-text"><span class="q-num">'+(i+1)+'</span>'+
      '<span>'+q.pre+'</span>'+
      '<input class="q-inp" id="fi'+i+'" type="text" placeholder="___">'+
      '<span>'+q.post+'</span></div>'+
      '<div class="q-hint">'+q.hint+'</div>'+
      '<div class="q-fb" id="ff'+i+'"></div></div>';
  });
}
function checkFill(){
  let ok=0;
  fillData.forEach(function(q,i){
    const inp=document.getElementById('fi'+i),card=document.getElementById('fq'+i),fb=document.getElementById('ff'+i);
    const v=inp.value.trim().replace(/\s+/g,''),a=q.ans.replace(/\s+/g,'');
    const c=v===a;
    card.className='quiz-card '+(c?'ok':'err');
    inp.className='q-inp '+(c?'ok':'err');
    fb.className='q-fb '+(c?'ok':'err');
    fb.textContent=c?'✓ Đúng rồi!':'✗ Đáp án：「'+q.ans+'」— '+q.exp;
    if(c)ok++;
  });
  const pct=Math.round(ok/fillData.length*100);
  const sb=document.getElementById('fill-score');sb.style.display='flex';
  document.getElementById('fill-sn').textContent=ok+'/'+fillData.length;
  document.getElementById('fill-sm').textContent=pct===100?'🎉 Hoàn hảo!':pct>=70?'👍 Làm tốt!':'💪 Thử lại nhé!';
  document.getElementById('fill-prog').style.width=pct+'%';
}
function resetFill(){
  fillData.forEach(function(_,i){
    document.getElementById('fi'+i).value='';
    document.getElementById('fi'+i).className='q-inp';
    document.getElementById('fq'+i).className='quiz-card';
    document.getElementById('ff'+i).className='q-fb';
  });
  document.getElementById('fill-score').style.display='none';
  document.getElementById('fill-prog').style.width='0%';
}

// ══════════════════════════════════════════
// SORT
// ══════════════════════════════════════════
let sortState=[];
function buildSort(){
  const l=document.getElementById('sort-list');
  l.innerHTML='';sortState=[];
  sortData.forEach(function(s,i){
    const sh=[...s.words].sort(function(){return Math.random()-0.5;});
    sortState[i]={placed:[],words:sh};
    const chips=sh.map(function(w,j){
      const isPunc=/^[。！？，、；：]$/.test(w);
      return '<span class="w-chip'+(isPunc?' punc-chip':'')+'" id="wc'+i+'_'+j+'" data-action="place-word" data-si="'+i+'" data-wi="'+j+'" data-word="'+w+'">'+w+'</span>';
    }).join('');
    l.innerHTML+='<div class="sort-q">'+
      '<div class="sort-lbl">'+miniSpeakBtn(s.audio)+' <span>Nhấn 🔊 để nghe câu cần sắp xếp</span></div>'+
      '<div class="word-bank" id="wb'+i+'">'+chips+'</div>'+
      '<div class="ans-zone" id="az'+i+'"></div>'+
      '<div class="q-fb" id="sf'+i+'"></div></div>';
  });
}
function placeW(si,wi,word){
  const chip=document.getElementById('wc'+si+'_'+wi);
  if(chip.classList.contains('used'))return;
  chip.classList.add('used');
  sortState[si].placed.push({wi:wi,word:word});
  const az=document.getElementById('az'+si);
  const pc=document.createElement('span');
  pc.className='p-chip'+(/^[。！？，、；：]$/.test(word)?' punc-pchip':'');pc.textContent=word;
  pc.onclick=function(){
    sortState[si].placed=sortState[si].placed.filter(function(p){return p.wi!==wi;});
    pc.remove();chip.classList.remove('used');
    document.getElementById('az'+si).classList.remove('ok-z','err-z');
    document.getElementById('sf'+si).className='q-fb';
  };
  az.appendChild(pc);
}
function checkSort(){
  let ok=0;
  sortData.forEach(function(s,i){
    const placed=sortState[i].placed.map(function(p){return p.word;}).join('');
    const c=placed===s.ans;
    const az=document.getElementById('az'+i),fb=document.getElementById('sf'+i);
    az.classList.remove('ok-z','err-z');az.classList.add(c?'ok-z':'err-z');
    fb.className='q-fb '+(c?'ok':'err');
    fb.textContent=c?'✓ Đúng!':'✗ Đáp án：「'+s.ans+'」';
    if(c)ok++;
  });
  const pct=Math.round(ok/sortData.length*100);
  const sb=document.getElementById('sort-score');sb.style.display='flex';
  document.getElementById('sort-sn').textContent=ok+'/'+sortData.length;
  document.getElementById('sort-sm').textContent=pct===100?'🎉 Xuất sắc!':pct>=60?'👍 Làm tốt!':'💪 Xem lại và thử lại!';
}
function resetSort(){
  document.getElementById('sort-score').style.display='none';
  buildSort();
}

// ══════════════════════════════════════════
// MATCH
// ══════════════════════════════════════════
let mSel=null,mDone=new Set(),mOrder=[];
function buildMatch(){
  const lEl=document.getElementById('m-left'),rEl=document.getElementById('m-right');
  lEl.innerHTML='';rEl.innerHTML='';
  mOrder=matchData.map(function(_,i){return i;}).sort(function(){return Math.random()-0.5;});
  matchData.forEach(function(p,i){
    const d=document.createElement('div');
    d.className='m-item';d.id='ml'+i;
    d.textContent=p.left;d.onclick=function(){mClickL(i);};
    lEl.appendChild(d);
  });
  mOrder.forEach(function(ri){
    const d=document.createElement('div');
    d.className='m-item';d.id='mr'+ri;
    d.textContent=matchData[ri].right;d.onclick=function(){mClickR(ri);};
    rEl.appendChild(d);
  });
}
function mClickL(i){
  if(mDone.has('L'+i))return;
  document.querySelectorAll('#m-left .m-item').forEach(function(e){e.classList.remove('sel');});
  mSel=i;document.getElementById('ml'+i).classList.add('sel');
  document.getElementById('m-fb').textContent='';
}
function mClickR(i){
  if(mSel===null){document.getElementById('m-fb').innerHTML='<span style="color:var(--warm)">← Chọn vế trái trước</span>';return;}
  if(mDone.has('R'+i))return;
  const c=mSel===i;
  if(c){
    document.getElementById('ml'+mSel).classList.remove('sel');
    document.getElementById('ml'+mSel).classList.add('m-ok');
    document.getElementById('mr'+i).classList.add('m-ok');
    mDone.add('L'+mSel);mDone.add('R'+i);
    document.getElementById('m-fb').innerHTML='<span style="color:var(--green)">✓ Đúng rồi!</span>';
    if(mDone.size===matchData.length*2)setTimeout(function(){document.getElementById('m-fb').innerHTML='<span style="color:var(--sky-d);font-weight:700">🎉 Hoàn thành! Xuất sắc!</span>';},300);
  } else {
    document.getElementById('ml'+mSel).classList.remove('sel');
    const re=document.getElementById('mr'+i);
    re.classList.add('m-shake');
    document.getElementById('m-fb').innerHTML='<span style="color:var(--red)">✗ Chưa đúng, thử lại!</span>';
    setTimeout(function(){re.classList.remove('m-shake');},350);
  }
  mSel=null;
}
function resetMatch(){
  document.getElementById('m-fb').textContent='';
  mSel=null;mDone=new Set();buildMatch();
}

// ══════════════════════════════════════════
// MULTIPLE CHOICE
// ══════════════════════════════════════════
let mcAns=[];
function buildMC(){
  mcAns=Array(mcData.length).fill(false);
  const l=document.getElementById('mc-list');
  l.innerHTML='';
  mcData.forEach(function(q,i){
    const opts=q.opts.map(function(o,j){return '<button class="q-opt" id="mo'+i+'_'+j+'" data-action="check-mc" data-qi="'+i+'" data-ci="'+j+'">'+o+'</button>';}).join('');
    l.innerHTML+='<div class="quiz-card" id="mcq'+i+'">'+
      '<div class="q-text"><span class="q-num">'+(i+1)+'</span>'+q.q+' '+miniSpeakBtn(q.q.replace('＿＿',''))+'</div>'+
      '<div class="q-opts">'+opts+'</div>'+
      '<div class="q-fb" id="mf'+i+'"></div></div>';
  });
  document.getElementById('mc-score').style.display='none';
  document.getElementById('mc-prog').style.width='0%';
}
function checkMC(qi,chosen){
  if(mcAns[qi])return;mcAns[qi]=true;
  const q=mcData[qi],c=chosen===q.ans;
  const fb=document.getElementById('mf'+qi);
  q.opts.forEach(function(_,j){
    const b=document.getElementById('mo'+qi+'_'+j);
    b.style.pointerEvents='none';
    if(j===q.ans)b.classList.add('show-ok');
    else if(j===chosen&&!c)b.classList.add('sel-err');
  });
  fb.className='q-fb '+(c?'ok':'err');
  fb.textContent=c?'✓ Đúng rồi!':'✗ Đáp án：「'+q.opts[q.ans]+'」';
  const done=mcAns.filter(Boolean).length;
  let okC=0;mcData.forEach(function(_,i){if(mcAns[i]&&document.getElementById('mf'+i).classList.contains('ok'))okC++;});
  const sb=document.getElementById('mc-score');sb.style.display='flex';
  document.getElementById('mc-sn').textContent=okC+'/'+done;
  document.getElementById('mc-sm').textContent=done===mcData.length?(okC>=9?'🎉 Xuất sắc!':okC>=7?'👍 Giỏi lắm!':'💪 Xem lại và thử lại!'):'Đã trả lời '+done+'/'+mcData.length+' câu';
  document.getElementById('mc-prog').style.width=(done/mcData.length*100)+'%';
}

// ══ LUYỆN NÓI 3 TẦNG ══
function showSpeak(tier,btn){
  document.querySelectorAll('.speak-tb').forEach(function(b){b.classList.remove('active');});
  btn.classList.add('active');
  buildSpeaking(tier);
}
function buildSpeaking(tier){
  const w=document.getElementById('speak-wrap');
  if(tier===1){
    const d=speakingData.t1;
    const models=d.models.map(function(m){
      return '<div class="model-card"><div class="model-zh">'+m.zh+' '+miniSpeakBtn(m.zh)+'</div>'+
        '<div class="model-py">'+m.py+'</div><div class="model-vn">'+m.vn+'</div></div>';
    }).join('');
    w.innerHTML='<div class="tier-intro"><b>Tầng 1 · Mô phỏng:</b> '+d.intro+'</div><div class="speak-grid two">'+models+'</div>';
  } else if(tier===2){
    const d=speakingData.t2;
    const drills=d.drills.map(function(dr,i){
      const frame=dr.frame.replace('＿＿','<b>＿＿</b>');
      const opts=dr.options.map(function(o){return '<span class="drill-opt">'+o+'</span>';}).join('');
      const samples=dr.samples.map(function(s){return '<div class="ds">✓ '+s+' '+miniSpeakBtn(s)+'</div>';}).join('');
      return '<div class="drill-card"><div class="drill-frame">'+frame+'</div>'+
        '<div class="drill-py">'+dr.frame_py+'</div><div class="drill-vn">'+dr.vn+'</div>'+
        '<div style="font-size:0.78rem;color:var(--soft);margin-bottom:6px;">Thay bằng:</div>'+
        '<div class="drill-opts">'+opts+'</div>'+
        '<button class="show-ans-btn" data-action="toggle-show" data-target="ds'+i+'">Xem câu mẫu ▾</button>'+
        '<div class="drill-samples" id="ds'+i+'">'+samples+'</div></div>';
    }).join('');
    w.innerHTML='<div class="tier-intro"><b>Tầng 2 · Có hướng dẫn:</b> '+d.intro+'</div><div class="speak-grid two">'+drills+'</div>';
  } else {
    const d=speakingData.t3;
    const tasks=d.tasks.map(function(t,i){
      const chips=t.structure.map(function(s){return '<span class="task-chip">'+s+'</span>';}).join('');
      return '<div class="task-card"><div class="task-role">'+t.role+'</div>'+
        '<div class="task-guide">'+t.guide+'</div>'+
        '<div style="font-size:0.78rem;color:var(--soft);margin-bottom:6px;">Gợi ý cấu trúc để bám theo:</div>'+
        '<div class="task-struct">'+chips+'</div>'+
        '<button class="show-ans-btn" data-action="toggle-show" data-target="ts'+i+'">Xem đoạn nói mẫu ▾</button>'+
        '<div class="task-sample" id="ts'+i+'"><div class="ts-zh">'+t.sample+' '+miniSpeakBtn(t.sample)+'</div><div class="ts-vn">'+t.sample_vn+'</div></div></div>';
    }).join('');
    w.innerHTML='<div class="tier-intro"><b>Tầng 3 · Nói tự do:</b> '+d.intro+'</div><div class="speak-grid">'+tasks+'</div>';
  }
}

// ══════════════════════════════════════════
// EVENT DELEGATION (thay cho onclick="..." nội tuyến — bị CSP chặn)
// ══════════════════════════════════════════
document.addEventListener('click', function(e){
  const el = e.target.closest('[data-action]');
  if(!el) return;
  const action = el.dataset.action;
  if(action==='speak'){ e.stopPropagation(); speakZh(el.dataset.text); return; }
  if(action==='speak-seq'){ e.stopPropagation(); speakSeq(JSON.parse(el.dataset.texts)); return; }
  if(action==='show-tab'){ showTab(el.dataset.tab, el); return; }
  if(action==='filter-vocab'){ filterVocab(parseInt(el.dataset.lesson,10), el); return; }
  if(action==='show-dlg'){ showDlg(parseInt(el.dataset.idx,10), el); return; }
  if(action==='show-speak'){ showSpeak(parseInt(el.dataset.tier,10), el); return; }
  if(action==='flash-prev'){ flashPrev(); return; }
  if(action==='flash-next'){ flashNext(); return; }
  if(action==='flash-flip'){ flipFlash(); return; }
  if(action==='flash-shuffle'){ shuffleFlash(); return; }
  if(action==='check-fill'){ checkFill(); return; }
  if(action==='reset-fill'){ resetFill(); return; }
  if(action==='check-sort'){ checkSort(); return; }
  if(action==='reset-sort'){ resetSort(); return; }
  if(action==='reset-match'){ resetMatch(); return; }
  if(action==='toggle-hz'){ e.stopPropagation(); toggleHz(el, parseInt(el.dataset.vi,10)); return; }
  if(action==='place-word'){ placeW(parseInt(el.dataset.si,10), parseInt(el.dataset.wi,10), el.dataset.word); return; }
  if(action==='check-mc'){ checkMC(parseInt(el.dataset.qi,10), parseInt(el.dataset.ci,10)); return; }
  if(action==='toggle-show'){ document.getElementById(el.dataset.target).classList.toggle('show'); return; }
});

// ══════════════════════════════════════════
// INIT
// ══════════════════════════════════════════
buildWarmup();
buildVocab();
buildVocabAudio(0);
updateFlash();
buildDialogs();
buildFill();
buildSort();
buildMatch();
buildMC();
buildSpeaking(1);
