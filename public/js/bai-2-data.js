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


// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
const matchData = [
  {left:'吃',right:'药'},
  {left:'每天',right:'跑步'},
  {left:'身体',right:'好'},
  {left:'没有',right:'时间'},
  {left:'很',right:'忙'},
  {left:'早上',right:'起床'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI: hỏi thăm sức khỏe đồng nghiệp,
// khám sức khỏe định kỳ. Ôn lại 为什么/觉得/要 (Bài 1).
// ══════════════════════════════════════════
const listenData = [
  {audio:'小李每天早上都跑步，是不是身体很好？他说：是啊，我很少生病。',
   questions:[
     {q:'小李是不是身体很好？',opts:['是','不是','不知道','他没说'],ans:0},
     {q:'小李每天什么时候跑步？',opts:['早上','晚上','中午','他没有时间跑步'],ans:0},
   ]},
  {audio:'王老师这几天很忙，没有时间休息，他觉得很累。',
   questions:[
     {q:'王老师为什么很累？',opts:['因为很忙，没有时间休息','因为生病了','因为要去旅游','因为在跑步'],ans:0},
     {q:'王老师现在怎么样？',opts:['很忙很累','很高兴','身体很好','要出院了'],ans:0},
   ]},
  {audio:'他今年20多岁，一米8多高，医生说他身体很好。',
   questions:[
     {q:'"20多岁"是什么意思？',opts:['超过20岁','正好20岁','不到20岁','不知道'],ans:0},
     {q:'医生说他身体怎么样？',opts:['很好','生病了','很忙','很累'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ — hội thoại MỚI: hỏi thăm đồng nghiệp mới ốm dậy
// ══════════════════════════════════════════
const fillData = [
  {pre:'你',blank:'是不是',post:'生病了？',hint:'(có phải... không — câu hỏi Có/Không)',ans:'是不是',exp:'是不是 đặt sau chủ ngữ, trước phần muốn hỏi.'},
  {pre:'是啊，我',blank:'每',post:'天都要吃药。',hint:'(mỗi)',ans:'每',exp:'每 luôn cần 都 đi kèm ở vị ngữ phía sau.'},
  {pre:'你',blank:'多',post:'高？',hint:'(bao nhiêu — hỏi mức độ, đứng trước tính từ)',ans:'多',exp:'多 + Tính từ dùng để hỏi mức độ: 多高/多大/多重.'},
  {pre:'我一米七',blank:'多',post:'。',hint:'(hơn — ôn lại Bài 1)',ans:'多'},
  {pre:'你每天',blank:'几',post:'点起床？',hint:'(mấy — ôn lại Bài 1)',ans:'几'},
  {pre:'我每天六点起床，可是身体还是很',blank:'累',post:'。',hint:'(mệt)',ans:'累'},
  {pre:'你',blank:'为什么',post:'这么忙？',hint:'(tại sao — ôn lại Bài 1)',ans:'为什么'},
  {pre:'因为我没有',blank:'时间',post:'休息。',hint:'(thời gian)',ans:'时间'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
const sortData = [
  {words:['你','是不是','很','忙','？'],ans:'你是不是很忙？',audio:'你是不是很忙？'},
  {words:['他','每天','都','跑步','。'],ans:'他每天都跑步。',audio:'他每天都跑步。'},
  {words:['你','朋友','多','高','？'],ans:'你朋友多高？',audio:'你朋友多高？'},
  {words:['我','每天','七','点','起床','。'],ans:'我每天七点起床。',audio:'我每天七点起床。'},
  {words:['医生','说','我','身体','很','好','。'],ans:'医生说我身体很好。',audio:'医生说我身体很好。'},
  {words:['我','很','累','，','也','很','忙','。'],ans:'我很累，也很忙。',audio:'我很累，也很忙。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
const errorFixData = [
  {wrong:'他每天跑步。',
   opts:['他每天都跑步。','他每都天跑步。','都他每天跑步。','他都每天跑步。'],ans:0,
   exp:'每 luôn cần 都 đi kèm ở vị ngữ: 每 + Danh từ + 都 + Động từ.'},
  {wrong:'你高多？',
   opts:['你多高？','你多么高？','高你多？','多你高？'],ans:0,
   exp:'多 đứng NGAY TRƯỚC tính từ khi hỏi mức độ, không đặt sau như "cao bao nhiêu" trong tiếng Việt.'},
  {wrong:'你生病是不是了？',
   opts:['你是不是生病了？','你是不是了生病？','是不是你了生病？','你了是不是生病？'],ans:0,
   exp:'是不是 đứng NGAY SAU chủ ngữ, TRƯỚC toàn bộ phần vị ngữ muốn hỏi.'},
  {wrong:'我很没有时间。',
   opts:['我没有时间。','我时间很没有。','很我没有时间。','我没有很时间。'],ans:0,
   exp:'没有 (phủ định của 有) KHÔNG dùng 很 phía trước — đây là lỗi thường gặp do ảnh hưởng "rất không có" trong tiếng Việt.'},
  {wrong:'他身体好很。',
   opts:['他身体很好。','他身体很好很。','很他身体好。','他很身体好。'],ans:0,
   exp:'很 phải đứng TRƯỚC tính từ, không đặt sau.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI 3 TẦNG (tầng 3 có ghi âm + chấm điểm AI)
// ══════════════════════════════════════════
const speakingData = {
  t1:{
    intro:'Nhấn 🔊 nghe từng câu mẫu, đọc to theo cho tới khi trôi chảy.',
    models:[
      {zh:'你是不是每天都跑步？',py:'Nǐ shìbushì měitiān dōu pǎobù?',vn:'Có phải bạn ngày nào cũng chạy bộ không?'},
      {zh:'我每天六点起床。',py:'Wǒ měitiān liù diǎn qǐchuáng.',vn:'Mỗi ngày tôi thức dậy lúc 6 giờ.'},
      {zh:'你多高？我一米七多。',py:'Nǐ duō gāo? Wǒ yì mǐ qī duō.',vn:'Bạn cao bao nhiêu? Tôi hơn 1 mét 7.'},
      {zh:'医生说我身体很好。',py:'Yīshēng shuō wǒ shēntǐ hěn hǎo.',vn:'Bác sĩ nói sức khỏe tôi rất tốt.'},
      {zh:'我很忙，也很累。',py:'Wǒ hěn máng, yě hěn lèi.',vn:'Tôi rất bận, cũng rất mệt.'},
    ],
  },
  t2:{
    intro:'Dùng khung câu cho sẵn, thay thế phần gạch chân bằng từ trong ô gợi ý. Nhấn 🔊 để nghe rồi nói to mỗi câu bạn tạo được.',
    drills:[
      {frame:'你是不是＿＿？',frame_py:'Nǐ shìbushì ___?',vn:'Có phải bạn ＿＿ không?',options:['很忙','生病了','很累'],samples:['你是不是很忙？','你是不是生病了？','你是不是很累？']},
      {frame:'我每天＿＿点起床。',frame_py:'Wǒ měitiān ___ diǎn qǐchuáng.',vn:'Mỗi ngày tôi thức dậy lúc ＿＿ giờ.',options:['六','七','八'],samples:['我每天六点起床。','我每天七点起床。','我每天八点起床。']},
      {frame:'你多＿＿？',frame_py:'Nǐ duō ___?',vn:'Bạn ＿＿ bao nhiêu?',options:['高','大'],samples:['你多高？','你多大？']},
    ],
  },
  t3:{
    intro:'Không nhìn câu mẫu, tự dùng từ đã học để nói theo tình huống. Ghi âm lại để nghe hoặc gửi chấm điểm AI, rồi đối chiếu với câu mẫu.',
    tasks:[
      {role:'🏥 Tình huống 1 — Hỏi thăm đồng nghiệp mới ốm dậy',
       guide:'Đồng nghiệp bạn vừa nghỉ ốm, hôm nay đi làm lại. Bạn hỏi thăm sức khỏe của họ.',
       structure:['你是不是生病了？现在身体怎么样？','吃药了，现在好多了。'],
       sample:'你是不是生病了？现在身体怎么样？吃药了，现在好多了。',
       sample_vn:'Có phải bạn bị ốm không? Bây giờ sức khỏe thế nào rồi? Uống thuốc rồi, bây giờ đỡ nhiều rồi.',
       note:'是不是 là cách hỏi lịch sự, nhẹ nhàng hơn khi quan tâm đến ai đó, thay vì hỏi thẳng.'},
      {role:'🙋 Tình huống 2 — Hỏi thông tin bạn mới quen',
       guide:'Bạn hỏi một người bạn mới quen về chiều cao và tuổi của họ.',
       structure:['你多高？你多大？'],
       sample:'你多高？我一米七多。你多大？我20多岁。',
       sample_vn:'Bạn cao bao nhiêu? Tôi hơn 1 mét 7. Bạn bao nhiêu tuổi? Tôi hơn 20 tuổi.',
       note:'多 + Tính từ dùng để hỏi mức độ chưa biết; trả lời có thể dùng 多 (ôn Bài 1) để nói số ước lượng.'},
      {role:'💼 Tình huống 3 — Giải thích vì sao dạo này bận rộn',
       guide:'Bạn giải thích cho bạn bè vì sao dạo này mình bận và mệt, không có thời gian nghỉ ngơi.',
       structure:['我每天都很忙，也很累。','为什么？','因为我没有时间休息。'],
       sample:'我每天都很忙，也很累。为什么？因为我没有时间休息。',
       sample_vn:'Ngày nào tôi cũng rất bận, cũng rất mệt. Tại sao vậy? Vì tôi không có thời gian nghỉ ngơi.',
       note:'也 (ôn Bài 1) dùng để nối thêm một trạng thái tương tự — 很忙，也很累 = vừa bận vừa mệt.'},
    ],
  },
};
