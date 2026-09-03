// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 13: 请给我一杯茶
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'可以',py:'kěyǐ',pos:'Động từ năng nguyện',vn:'có thể, được (cho phép làm gì)',em:'👍',lesson:1,
   ex_zh:'王老师，我可以再问您一个问题吗？',ex_py:'Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?',ex_vn:'Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?',
   exList:[{zh:'王老师，我可以再问您一个问题吗？',py:'Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?',vn:'Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?'}],
   hanzi:[
     {c:'可',p:'kě',type:'半包围结构 · Bán bao vây',st:5,ord:'丂(bao trên-trái) → 口(khẩu) trong',rad:'口 (khẩu – miệng)',mean:'có thể, được phép',
      tip:'丂(hình miệng há ra ngập ngừng) ôm lấy 口(miệng) → gật đầu mở miệng ưng thuận, cho phép làm gì → CÓ THỂ, ĐƯỢC.',
      cf:'何 (hé – "cái gì, sao", thêm bộ 亻 bên trái")',w:'可以 / 可是 / 可爱'},
     {c:'以',p:'yǐ',type:'左右结构 · Trái-phải',st:4,ord:'㇒㇙(chấm-phẩy) trái → 人(nhân) phải',rad:'人 (nhân – người)',mean:'dùng, bằng, để; (trong 可以: có thể)',
      tip:'亻(người) cầm công cụ (nét chấm-phẩy bên trái) để làm việc gì → nghĩa DÙNG, mở rộng thành ĐỂ, BẰNG.',
      cf:'似 (sì – "giống như", chính là 亻 + 以 ghép lại")',w:'可以 / 所以 / 以为'},
   ]},
  {n:2,zh:'再',py:'zài',pos:'Phó từ',vn:'lại, thêm lần nữa',em:'🔁',lesson:1,
   ex_zh:'王老师，我可以再问您一个问题吗？',ex_py:'Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?',ex_vn:'Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?',
   exList:[{zh:'王老师，我可以再问您一个问题吗？',py:'Wáng lǎoshī, wǒ kěyǐ zài wèn nín yí gè wèntí ma?',vn:'Thưa cô Vương, em có thể hỏi thêm cô một câu nữa không ạ?'}],
   hanzi:[
     {c:'再',p:'zài',type:'独体字 · Chữ đơn',st:6,ord:'一(nét ngang trên) → 冉(thân dưới, giống chồng thêm một lớp)',rad:'再 (tái – tự thành bộ)',mean:'lại, thêm một lần nữa',
      tip:'Hình ảnh một vật được xếp CHỒNG thêm một lớp nữa lên trên lớp cũ → biểu thị lặp LẠI, làm THÊM một lần nữa.',
      cf:'冉 (rǎn – ít dùng, thiếu nét ngang trên đầu")',w:'再见 / 再问 / 再来'},
   ]},
  {n:3,zh:'问题',py:'wèntí',pos:'Danh từ',vn:'câu hỏi, vấn đề',em:'❓',lesson:1,
   ex_zh:'可以。你有什么问题？',ex_py:'Kěyǐ. Nǐ yǒu shénme wèntí?',ex_vn:'Được chứ. Em có vấn đề gì nào?',
   exList:[{zh:'可以。你有什么问题？',py:'Kěyǐ. Nǐ yǒu shénme wèntí?',vn:'Được chứ. Em có vấn đề gì nào?'}],
   hanzi:[
     {c:'问',p:'wèn',type:'半包围结构 · Bán bao vây',st:6,ord:'门(môn) bao ngoài → 口(khẩu) trong',rad:'门 (môn – cửa)',mean:'hỏi',
      tip:'门(cửa) + 口(miệng) → đứng ở CỬA mở miệng ra HỎI thăm.',
      cf:'闻 (wén – "nghe", có 耳 thay vì 口 bên trong")',w:'问题 / 请问 / 问一下'},
     {c:'题',p:'tí',type:'左右结构 · Trái-phải',st:15,ord:'是(thị) trái → 页(hiệt) phải',rad:'页 (hiệt – đầu, trang)',mean:'đề, vấn đề, chủ đề',
      tip:'页(cái đầu/trang giấy) đi cùng 是(là, khẳng định) → nội dung được ghi ra để hỏi "là" gì, tức ĐỀ BÀI, VẤN ĐỀ.',
      cf:'提 (tí – "nêu ra", bộ 扌thay vì 页")',w:'问题 / 题目'},
   ]},
  {n:4,zh:'卖',py:'mài',pos:'Động từ',vn:'bán',em:'🏪',lesson:1,
   ex_zh:'那个小店卖不卖手机？',ex_py:'Nàge xiǎo diàn mài bu mài shǒujī?',ex_vn:'Cửa hàng nhỏ kia có bán điện thoại di động không ạ?',
   exList:[{zh:'那个小店卖不卖手机？',py:'Nàge xiǎo diàn mài bu mài shǒujī?',vn:'Cửa hàng nhỏ kia có bán điện thoại di động không ạ?'}],
   hanzi:[
     {c:'卖',p:'mài',type:'上下结构 · Trên-dưới',st:8,ord:'十(thập) trên → 买(mãi) dưới',rad:'十 (thập – số mười)',mean:'bán',
      tip:'十(nhiều, đầy đủ) trên + 买(mua) dưới → có nhiều hàng đưa ra cho người MUA, tức là BÁN.',
      cf:'买 (mǎi – "mua", nghĩa ngược lại, thiếu nét 十 ở trên")',w:'卖不卖 / 买卖'},
   ]},
  {n:5,zh:'打电话',py:'dǎ diànhuà',pos:'Cụm động từ',vn:'gọi điện thoại',em:'📞',lesson:1,
   ex_zh:'我不知道。你可以打电话问一下。',ex_py:'Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.',ex_vn:'Cô không biết. Em có thể gọi điện thoại hỏi xem.',
   exList:[{zh:'我不知道。你可以打电话问一下。',py:'Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.',vn:'Cô không biết. Em có thể gọi điện thoại hỏi xem.'}],
   hanzi:[
     {c:'打',p:'dǎ',type:'左右结构 · Trái-phải',st:5,ord:'扌(thủ) trái → 丁(đinh) phải',rad:'扌 (thủ – tay)',mean:'đánh, gọi (điện thoại), làm',
      tip:'扌(bàn tay) + 丁(cái đinh, gợi âm "dīng~dǎ") → dùng TAY gõ, ĐÁNH; mở rộng nghĩa "gọi" trong 打电话.',
      cf:'扛 (káng – "vác", bộ 扌+ 工")',w:'打电话 / 打字'},
     {c:'电',p:'diàn',type:'独体字 · Chữ đơn',st:5,ord:'冂(khung ngoài) → 乚(nét gấp khúc như tia chớp) giữa',rad:'电 (điện – tự thành bộ)',mean:'điện, sấm chớp',
      tip:'Hình ảnh TIA CHỚP lóe sáng ngoằn ngoèo trong không trung → nghĩa ĐIỆN (hiện tượng phóng điện tự nhiên), mở rộng thành điện thoại, điện lực.',
      cf:'由 (yóu – "từ, bởi", thiếu nét ngoặc phía dưới")',w:'电话 / 电脑 / 打电话'},
     {c:'话',p:'huà',type:'左右结构 · Trái-phải',st:8,ord:'讠(ngôn) trái → 舌(thiệt) phải',rad:'讠 (ngôn – lời nói)',mean:'lời nói, chuyện',
      tip:'讠(lời nói) + 舌(cái lưỡi) → dùng LƯỠI để NÓI CHUYỆN, phát ra LỜI.',
      cf:'活 (huó – "sống", bộ 氵thay vì 讠")',w:'电话 / 说话 / 汉语'},
   ]},
  {n:6,zh:'一下',py:'yíxià',pos:'Số lượng từ',vn:'một chút, thử (dùng sau động từ, biểu thị hành động xảy ra nhanh hoặc thử làm)',em:'⏱️',lesson:1,
   ex_zh:'我不知道。你可以打电话问一下。',ex_py:'Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.',ex_vn:'Cô không biết. Em có thể gọi điện thoại hỏi xem.',
   exList:[{zh:'我不知道。你可以打电话问一下。',py:'Wǒ bù zhīdào. Nǐ kěyǐ dǎ diànhuà wèn yíxià.',vn:'Cô không biết. Em có thể gọi điện thoại hỏi xem.'}],
   hanzi:[
     {c:'一',p:'yí',type:'独体字 · Chữ đơn',st:1,ord:'một nét ngang duy nhất',rad:'一 (nhất – tự thành bộ)',mean:'một, số 1',
      tip:'Một nét NGANG duy nhất tượng trưng cho số MỘT — số đầu tiên, đơn giản nhất trong hệ đếm.',
      cf:'乙 (yǐ – nét gập, khác hẳn hình dáng")',w:'一下 / 一个 / 一半'},
     {c:'下',p:'xià',type:'独体字 · Chữ đơn',st:3,ord:'一(đường ngang, mốc) → 卜(nét chỉ xuống dưới)',rad:'一 (nhất – tự thành bộ)',mean:'dưới, xuống',
      tip:'Một nét NGANG làm mốc, nét chấm/móc bên dưới chỉ vị trí THẤP hơn mốc đó → nghĩa DƯỚI, XUỐNG.',
      cf:'卡 (kǎ – "thẻ", ghép 上 + 下")',w:'一下 / 下午 / 楼下'},
   ]},
  {n:7,zh:'服务员',py:'fúwùyuán',pos:'Danh từ',vn:'nhân viên phục vụ, người phục vụ',em:'🧑‍🍳',lesson:2,
   ex_zh:'女士，请坐！您喝什么？',ex_py:'Nǚshì, qǐng zuò! Nín hē shénme?',ex_vn:'Mời cô ngồi! Cô uống gì ạ?',
   exList:[{zh:'女士，请坐！您喝什么？',py:'Nǚshì, qǐng zuò! Nín hē shénme?',vn:'Mời cô ngồi! Cô uống gì ạ?'}],
   hanzi:[
     {c:'服',p:'fú',type:'左右结构 · Trái-phải',st:8,ord:'月(biến thể của 舟) trái → 𠬝(bàn tay điều khiển) phải',rad:'月 (nguyệt – biến thể của 舟/nhục)',mean:'phục vụ, quần áo, uống (thuốc)',
      tip:'月(thân thuyền/thân người) + phần phải như bàn tay điều khiển, khuất phục → PHỤC VỤ, khiến người khác thuận theo; cũng chỉ trang PHỤC.',
      cf:'朋 (péng – "bạn", cũng có bộ 月 nhưng lặp lại 月 ở bên phải")',w:'服务员 / 衣服'},
     {c:'务',p:'wù',type:'上下结构 · Trên-dưới',st:5,ord:'夂(biến thể) trên → 力(lực) dưới',rad:'力 (lực – sức mạnh)',mean:'công việc, nhiệm vụ, phải làm',
      tip:'力(sức lực) ở dưới gánh vác phần việc phía trên → NHIỆM VỤ, công VIỆC cần dốc sức làm.',
      cf:'各 (gè – "mỗi", phần trên giống nhưng dưới là 口")',w:'服务员 / 服务 / 任务'},
     {c:'员',p:'yuán',type:'上下结构 · Trên-dưới',st:7,ord:'口(khẩu) trên → 贝(bối) dưới',rad:'口 (khẩu – miệng)',mean:'người (làm việc trong một tổ chức/nhóm)',
      tip:'口(miệng, chỉ số đếm người) trên 贝(tiền của, công ty) dưới → chỉ một THÀNH VIÊN, NHÂN VIÊN làm việc hưởng lương.',
      cf:'贝 (bèi – "vật báu, tiền", thiếu phần 口 phía trên")',w:'服务员 / 学员 / 演员'},
   ]},
  {n:8,zh:'女士',py:'nǚshì',pos:'Danh từ',vn:'bà, cô, quý bà, quý cô',em:'👩',lesson:2,
   ex_zh:'女士，请坐！您喝什么？',ex_py:'Nǚshì, qǐng zuò! Nín hē shénme?',ex_vn:'Mời cô ngồi! Cô uống gì ạ?',
   exList:[{zh:'女士，请坐！您喝什么？',py:'Nǚshì, qǐng zuò! Nín hē shénme?',vn:'Mời cô ngồi! Cô uống gì ạ?'}],
   hanzi:[
     {c:'女',p:'nǚ',type:'独体字 · Chữ đơn',st:3,ord:'hình người phụ nữ khoanh tay quỳ, cách điệu thành 3 nét',rad:'女 (nữ – tự thành bộ)',mean:'phụ nữ, con gái',
      tip:'Chữ tượng hình mô phỏng dáng người PHỤ NỮ ngồi quỳ, hai tay khoanh trước ngực thời cổ → nghĩa NỮ GIỚI.',
      cf:'安 (ān – "an toàn", có 女 dưới mái nhà 宀")',w:'女士 / 女儿 / 女朋友'},
     {c:'士',p:'shì',type:'独体字 · Chữ đơn',st:3,ord:'一(nét ngang dài) trên → 十 dưới',rad:'士 (sĩ – tự thành bộ)',mean:'người có học vấn/địa vị, chiến sĩ, học vị',
      tip:'Nét ngang trên DÀI hơn nét dưới, tượng trưng người có ĐỊA VỊ vững vàng, đứng thẳng → dùng làm kính ngữ như trong 女士, tương tự 先生.',
      cf:'土 (tǔ – "đất", nét ngang trên NGẮN hơn nét dưới, ngược với 士")',w:'女士 / 士兵 / 博士'},
   ]},
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
   exList:[{zh:'我看一下。请给我一杯牛奶。',py:'Wǒ kàn yíxià. Qǐng gěi wǒ yì bēi niúnǎi.',vn:'Để tôi xem một chút. Cho tôi một cốc sữa.'}],
   hanzi:[
     {c:'杯',p:'bēi',type:'左右结构 · Trái-phải',st:8,ord:'木(mộc) trái → 不(bất) phải',rad:'木 (mộc – cây, gỗ)',mean:'cái ly, cốc, tách',
      tip:'木(gỗ, vật liệu làm đồ đựng thời xưa) + 不(gợi âm đọc "bēi") → dụng cụ đựng nước làm từ gỗ/sứ: CÁI CỐC.',
      cf:'杜 (dù – "họ Đỗ; ngăn chặn", phải là 土 chứ không phải 不")',w:'一杯 / 杯子 / 茶杯'},
   ]},
  {n:13,zh:'要',py:'yào',pos:'Động từ',vn:'cần, muốn',em:'🙋',lesson:2,
   ex_zh:'好的。您还要什么？',ex_py:'Hǎo de. Nín hái yào shénme?',ex_vn:'Vâng. Cô còn dùng thêm gì nữa không?',
   exList:[{zh:'好的。您还要什么？',py:'Hǎo de. Nín hái yào shénme?',vn:'Vâng. Cô còn dùng thêm gì nữa không?'}],
   hanzi:[
     {c:'要',p:'yào',type:'上下结构 · Trên-dưới',st:9,ord:'覀(biến thể của 西) trên → 女(nữ) dưới',rad:'覀 (biến thể của 西 – phía tây)',mean:'cần, muốn, sẽ, quan trọng',
      tip:'覀(giống mái che/nắp đậy) trên 女(người) dưới — hình ảnh gợi điều gì đó được che chở, giữ gìn cẩn thận vì QUAN TRỌNG → mở rộng thành CẦN, MUỐN có được.',
      cf:'腰 (yāo – "eo lưng", thêm bộ 月")',w:'要什么 / 不要 / 要是'},
   ]},
  {n:14,zh:'早饭',py:'zǎofàn',pos:'Danh từ',vn:'bữa sáng',em:'🍳',lesson:2,
   ex_zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',ex_py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',ex_vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.',
   exList:[{zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.'}],
   hanzi:[
     {c:'早',p:'zǎo',type:'上下结构 · Trên-dưới',st:6,ord:'日(nhật) trên → 十(thập) dưới',rad:'日 (nhật – mặt trời)',mean:'sớm, buổi sáng',
      tip:'日(mặt trời) mọc lên trên đầu ngọn cây/vạch 十 → chỉ thời điểm SỚM trong ngày.',
      cf:'旱 (hàn – "hạn hán", dưới là 干 chứ không phải 十")',w:'早饭 / 早上 / 早安'},
     {c:'饭',p:'fàn',type:'左右结构 · Trái-phải',st:7,ord:'饣(thực) trái → 反(phản) phải',rad:'饣 (thực – ăn uống)',mean:'cơm, bữa ăn',
      tip:'饣(bộ ăn uống) + 反(gợi âm đọc "fàn") → chỉ CƠM, bữa ĂN nói chung.',
      cf:'饱 (bǎo – "no", bộ 饣+ 包")',w:'早饭 / 米饭 / 吃饭'},
   ]},
  {n:15,zh:'这个',py:'zhège',pos:'Đại từ',vn:'cái này',em:'👉',lesson:2,
   ex_zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',ex_py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',ex_vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.',
   exList:[{zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.'}],
   hanzi:[
     {c:'这',p:'zhè',type:'半包围结构 · Bán bao vây',st:7,ord:'文(văn) trong → 辶(sước) bao ngoài dưới-trái',rad:'辶 (sước – đi, chợt bước)',mean:'này, cái này',
      tip:'辶(đi, di chuyển lại gần) + 文(chỉ sự vật/lời nói) → chỉ vào sự vật đang ở NGAY GẦN: cái NÀY.',
      cf:'达 (dá – "đạt tới", cũng có 辶nhưng phần trong là 大")',w:'这个 / 这里 / 这是'},
     {c:'个',p:'ge',type:'独体字 · Chữ đơn',st:3,ord:'𠆢(nhân, biến thể mái) trên → 丨(nét sổ) dưới',rad:'人 (nhân – người, biến thể phía trên)',mean:'cái, chiếc (lượng từ phổ biến nhất)',
      tip:'Hình dáng giống một NGƯỜI (𠆢) đứng cùng một nét thẳng đứng — dùng làm LƯỢNG TỪ đếm đồ vật/người phổ biến nhất trong tiếng Hán.',
      cf:'介 (jiè – "giới thiệu", thêm hai nét 丿丶 ở giữa")',w:'这个 / 一个 / 那个'},
   ]},
  {n:16,zh:'面包',py:'miànbāo',pos:'Danh từ',vn:'bánh mì',em:'🍞',lesson:2,
   ex_zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',ex_py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',ex_vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.',
   exList:[{zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.'}],
   hanzi:[
     {c:'面',p:'miàn',type:'独体字 · Chữ đơn',st:9,ord:'一(đỉnh) trên → 囗(khung ngoài) → 三(nét ngang trong)',rad:'面 (diện – tự thành bộ)',mean:'mặt, bề mặt; mì, bột mì',
      tip:'Hình khuôn MẶT người cách điệu (khung ngoài là đường viền mặt, các nét ngang trong là mắt/mũi) → nghĩa MẶT, bề mặt; mở rộng chỉ bột MÌ được cán phẳng như mặt bàn.',
      cf:'而 (ér – "mà, nhưng", chỉ giống phần dưới của 面")',w:'面包 / 面条 / 见面'},
     {c:'包',p:'bāo',type:'半包围结构 · Bán bao vây',st:5,ord:'勹(bao) ngoài → 巳(biến thể) trong',rad:'勹 (bao – bọc)',mean:'gói, bọc, cái túi; bánh bao',
      tip:'勹(hình người cúi khom ôm bọc) ôm lấy 巳(vật nhỏ bên trong) → nghĩa BỌC, GÓI lại; mở rộng chỉ bánh mì/bánh BAO.',
      cf:'饱 (bǎo – "no", thêm bộ 饣")',w:'面包 / 书包 / 包子'},
   ]},
  {n:17,zh:'鸡蛋',py:'jīdàn',pos:'Danh từ',vn:'trứng gà',em:'🥚',lesson:2,
   ex_zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',ex_py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',ex_vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.',
   exList:[{zh:'我还没吃早饭，再要这个面包和鸡蛋吧。',py:'Wǒ hái méi chī zǎofàn, zài yào zhège miànbāo hé jīdàn ba.',vn:'Tôi vẫn chưa ăn sáng, cho tôi cái bánh mì này và trứng nhé.'}],
   hanzi:[
     {c:'蛋',p:'dàn',type:'上下结构 · Trên-dưới',st:11,ord:'疋(sơ) → 虫(trùng)',rad:'疋 (sơ)',mean:'trứng',
      tip:'Hình quả trứng cách điệu bên trên phần thân → nghĩa TRỨNG nói chung.',
      cf:'蜑 (dàn – ít dùng)',w:'鸡蛋'},
     {c:'鸡',p:'jī',type:'左右结构 · Trái-phải',st:7,ord:'又(hựu, giản hoá) trái → 鸟(điểu) phải',rad:'鸟 (điểu – chim)',mean:'con gà',
      tip:'鸟(bộ chim) bên phải cho biết đây là loài CHIM; phần trái 又 là ký hiệu giản hoá từ chữ phồn thể (gợi âm đọc "jī") → chỉ con GÀ.',
      cf:'鸦 (yā – "quạ", cũng có bộ 鸟")',w:'鸡蛋 / 公鸡 / 小鸡'},
   ]},
  {n:18,zh:'先生',py:'xiānsheng',pos:'Danh từ',vn:'anh, ông, ngài, quý ông',em:'🤵',lesson:3,
   ex_zh:'先生，请坐！您要什么？',ex_py:'Xiānsheng, qǐng zuò! Nín yào shénme?',ex_vn:'Mời anh ngồi! Anh cần gì ạ?',
   exList:[{zh:'先生，请坐！您要什么？',py:'Xiānsheng, qǐng zuò! Nín yào shénme?',vn:'Mời anh ngồi! Anh cần gì ạ?'}],
   hanzi:[
     {c:'先',p:'xiān',type:'上下结构 · Trên-dưới',st:6,ord:'丿(biến thể) trên → 儿(nhân) dưới',rad:'儿 (nhân – người, biến thể)',mean:'trước, đầu tiên; ông (kính ngữ)',
      tip:'Hình người bước ra TRƯỚC tiên → ĐẦU TIÊN; 先生 vốn nghĩa "người sinh ra trước", dùng gọi ÔNG một cách kính trọng.',
      cf:'洗 (xǐ – "rửa")',w:'先生'},
     {c:'生',p:'sheng',type:'独体字 · Chữ đơn',st:5,ord:'丿(mầm cây) trên → 土(thổ) dưới',rad:'生 (sinh – tự thành bộ)',mean:'sinh ra, sống; sinh viên/tiên sinh',
      tip:'Hình mầm cây (丿) nhú lên khỏi mặt ĐẤT (土) → nghĩa SINH RA, sự SỐNG; 先生 nghĩa gốc "người sinh trước", dùng làm kính ngữ.',
      cf:'牛 (niú – "con bò", thiếu nét sổ xuyên suốt phía trên")',w:'先生 / 学生 / 生日'},
   ]},
  {n:19,zh:'饺子',py:'jiǎozi',pos:'Danh từ',vn:'sủi cảo, bánh chẻo',em:'🥟',lesson:3,
   ex_zh:'我要一斤饺子。',ex_py:'Wǒ yào yì jīn jiǎozi.',ex_vn:'Cho tôi một cân sủi cảo.',
   exList:[{zh:'我要一斤饺子。',py:'Wǒ yào yì jīn jiǎozi.',vn:'Cho tôi một cân sủi cảo.'}],
   hanzi:[
     {c:'饺',p:'jiǎo',type:'左右结构 · Trái-phải',st:9,ord:'饣(thực) trái → 交(giao) phải',rad:'饣 (thực – ăn uống)',mean:'sủi cảo, bánh chẻo',
      tip:'饣(bộ ăn uống) + 交(giao, gấp bắt chéo mép bột lại) → chỉ loại bánh bột gấp MÉP rồi luộc/hấp: SỦI CẢO.',
      cf:'较 (jiào – "so sánh", bộ 车thay vì 饣")',w:'饺子 / 水饺'},
     {c:'子',p:'zi',type:'独体字 · Chữ đơn',st:3,ord:'hình đứa trẻ đầu to, hai tay dang ngang, thân quấn',rad:'子 (tử – tự thành bộ)',mean:'con, con trai / hậu tố danh từ',
      tip:'Hình tượng một ĐỨA TRẺ SƠ SINH quấn tã, đầu to, tay dang ngang → nghĩa CON; khi làm hậu tố (như 饺子, 桌子) mất nghĩa gốc, chỉ đọc nhẹ "zi".',
      cf:'孑 (jié – "cô độc", thiếu một nét ngang bên phải")',w:'饺子 / 儿子 / 桌子'},
   ]},
  {n:20,zh:'一半',py:'yíbàn',pos:'Số từ',vn:'một nửa',em:'➗',lesson:3,
   ex_zh:'四十个太多了，我要一半吧。',ex_py:'Sìshí gè tài duō le, wǒ yào yíbàn ba.',ex_vn:'40 cái thì nhiều quá, tôi lấy nửa cân thôi nhé.',
   exList:[{zh:'四十个太多了，我要一半吧。',py:'Sìshí gè tài duō le, wǒ yào yíbàn ba.',vn:'40 cái thì nhiều quá, tôi lấy nửa cân thôi nhé.'}],
   hanzi:[
     {c:'一',p:'yí',type:'独体字 · Chữ đơn',st:1,ord:'một nét ngang duy nhất',rad:'一 (nhất – tự thành bộ)',mean:'một, số 1',
      tip:'Một nét NGANG duy nhất tượng trưng cho số MỘT — số đầu tiên, đơn giản nhất trong hệ đếm.',
      cf:'乙 (yǐ – nét gập, khác hẳn hình dáng")',w:'一半 / 一个 / 一下'},
     {c:'半',p:'bàn',type:'独体字 · Chữ đơn',st:5,ord:'八(chia đôi) trên → 十(thập) dưới, nét sổ giữa xuyên suốt cả hai phần',rad:'十 (thập – số mười)',mean:'nửa, một nửa',
      tip:'八(chia làm đôi) trên vật được một nét sổ dọc xuyên suốt cắt đôi ở giữa → nghĩa MỘT NỬA.',
      cf:'华 (huá – "hoa lệ, Trung Hoa", có 十 ở giữa nhưng thêm nét khác")',w:'一半 / 半年 / 半个'},
   ]},
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

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 13: Ngữ âm + Hán tự + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-13/wb-yuyin.mp3',
      blocks: [
        { type: 'tonemc', caption: 'Phân biệt thanh điệu — chọn âm tiết có thanh điệu KHÁC trong nhóm',
          items: [
            {before:'', after:'', answer:'shuǐguǒ', options:['jiǎozi','shuǐguǒ','zǎoshang']},
            {before:'', after:'', answer:'xuéxí', options:['xuéxí','fángjiān','míngtiān']},
            {before:'', after:'', answer:'xiěHànzì', options:['mǎibāozi','xiěHànzì','yǒubēizi']},
            {before:'', after:'', answer:'zhǎotóngxué', options:['mánggōngzuò','láishūdiàn','zhǎotóngxué']}
          ] },
        { type: 'pymatch', caption: 'Nghe âm tiết, ghép với từ đúng',
          items: [{py:'nǐ hǎo', hz:'你好'}, {py:'gōngsī', hz:'公司'}, {py:'xiānsheng', hz:'先生'}, {py:'gōngzuò', hz:'工作'}, {py:'jiǎozi', hz:'饺子'}, {py:'péngyou', hz:'朋友'}] },
        { type: 'table', caption: 'Chữ Hán (汉字) — Cấu trúc độc thể/hợp thể, chữ hình thanh',
          rows: [
            ['独体字 (chữ độc thể)', 'Không thể tách thành 2 bộ phận trở lên — ví dụ: 口, 上, 下'],
            ['合体字 (chữ hợp thể)', 'Gồm 2 bộ phận/bộ thủ trở lên — ví dụ: 和, 认, 什'],
            ['形声字 (chữ hình thanh)', 'Hợp thể gồm hình bàng (gợi nghĩa) + thanh bàng (gợi âm) — ví dụ: 奶/姥/妈/姐/妹 đều có bộ "女" (gợi nghĩa liên quan nữ giới) ghép với 乃/老/马/且/未 (gợi âm đọc)']
          ] },
        { type: 'table', caption: 'Cấu trúc chữ hợp thể — luyện viết',
          rows: [
            ['左右结构 (trái-phải)', '和 (hé)'],
            ['左中右结构 (trái-giữa-phải)', '做 (zuò)']
          ] },
        { type: 'table', caption: 'Ví dụ luyện viết từ',
          rows: [
            ['儿 (ér) → 女儿 (nǚ\'ér)', '弟 (dì) → 弟弟 (dìdi)'],
            ['汉 (Hàn) → 汉语 (Hànyǔ)', '谢 (xiè) → 谢谢 (xièxie)']
          ],
          note: 'Phần luyện viết tay theo từng nét cần thực hành trực tiếp trên giấy/vở theo mẫu trong sách.' }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-13/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q1c.jpg'}
            ], answer: 'C' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q2c.jpg'}
            ], answer: 'A' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q3c.jpg'}
            ], answer: 'C' },
            { n: 4, options: [
              {key:'A', text:'给你', py:'gěi nǐ'},
              {key:'B', text:'吃早饭', py:'chī zǎofàn'},
              {key:'C', text:'要一杯茶', py:'yào yì bēi chá'}
            ], answer: 'C' },
            { n: 5, options: [
              {key:'A', text:'学习', py:'xuéxí'},
              {key:'B', text:'不对', py:'bú duì'},
              {key:'C', text:'没问题', py:'méi wèntí'}
            ], answer: 'C' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-13-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-13-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-13-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 9, options: [
              {key:'A', text:'问问题', py:'wèn wèntí'},
              {key:'B', text:'找人玩', py:'zhǎo rén wán'},
              {key:'C', text:'看医生', py:'kàn yīshēng'}
            ], answer: 'B' },
            { n: 10, options: [
              {key:'A', text:'饭店', py:'fàndiàn'},
              {key:'B', text:'学校', py:'xuéxiào'},
              {key:'C', text:'朋友家', py:'péngyou jiā'}
            ], answer: 'A' }
          ],
          reading: [
            { n: 11, prompt: '她太小了，这个苹果给她一半吧。', promptPy: 'Tā tài xiǎo le, zhège píngguǒ gěi tā yíbàn ba.', options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-13-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 12, prompt: '请给我一杯牛奶，谢谢。', promptPy: 'Qǐng gěi wǒ yì bēi niúnǎi, xièxie.', options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-13-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 13, prompt: '我打电话问一下吧。', promptPy: 'Wǒ dǎ diànhuà wèn yíxià ba.', options: [
              {key:'A', img:'/images/hsk1v3-bai-13-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-13-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-13-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-13-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 14, prompt: '那里卖不卖手机？', promptPy: 'Nàlǐ mài bu mài shǒujī?', options: [
              {key:'A', text:'不客气。', py:'Bú kèqi.'},
              {key:'B', text:'一个面包。', py:'Yí gè miànbāo.'},
              {key:'C', text:'不知道。', py:'Bù zhīdào.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'C' },
            { n: 15, prompt: '我会写了，谢谢老师。', promptPy: 'Wǒ huì xiě le, xièxie lǎoshī.', options: [
              {key:'A', text:'不客气。', py:'Bú kèqi.'},
              {key:'B', text:'一个面包。', py:'Yí gè miànbāo.'},
              {key:'C', text:'不知道。', py:'Bù zhīdào.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'A' },
            { n: 16, prompt: '你要什么？', promptPy: 'Nǐ yào shénme?', options: [
              {key:'A', text:'不客气。', py:'Bú kèqi.'},
              {key:'B', text:'一个面包。', py:'Yí gè miànbāo.'},
              {key:'C', text:'不知道。', py:'Bù zhīdào.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'B' },
            { n: 17, prompt: '你看（　），你要什么？', promptPy: 'Nǐ kàn ( ), nǐ yào shénme?', options: [
              {key:'A', text:'给', py:'gěi'},
              {key:'B', text:'一下', py:'yíxià'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：请坐，您要什么？\n女：请（　）我一杯茶。', promptPy: 'Qǐng zuò, nín yào shénme? / Qǐng ( ) wǒ yì bēi chá.', options: [
              {key:'A', text:'给', py:'gěi'},
              {key:'B', text:'一下', py:'yíxià'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '明天星期天，我们可以去饭店吃饺子吗？\n★明天是：', promptPy: 'Míngtiān Xīngqītiān, wǒmen kěyǐ qù fàndiàn chī jiǎozi ma?', options: [
              {key:'A', text:'星期五', py:'Xīngqīwǔ'},
              {key:'B', text:'星期六', py:'Xīngqīliù'},
              {key:'C', text:'星期日', py:'Xīngqīrì'}
            ], answer: 'C' },
            { n: 20, prompt: '爸爸今天在家里工作，我们不要去他的房间。\n★爸爸今天：', promptPy: 'Bàba jīntiān zài jiā li gōngzuò, wǒmen búyào qù tā de fángjiān.', options: [
              {key:'A', text:'在家里工作', py:'zài jiā li gōngzuò'},
              {key:'B', text:'做了面条儿', py:'zuòle miàntiáor'},
              {key:'C', text:'不能去公司', py:'bù néng qù gōngsī'}
            ], answer: 'A' }
          ]
        }
      ]
    }
  ]
};

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
