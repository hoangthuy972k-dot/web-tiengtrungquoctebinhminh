// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 10: 这儿的苹果真便宜！
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'杯子',py:'bēizi',pos:'Danh từ',vn:'cốc, ly',em:'☕',lesson:1,
   ex_zh:'请问，有杯子吗？',ex_py:'Qǐngwèn, yǒu bēizi ma?',ex_vn:'Xin hỏi, ở đây có bán cốc không?',
   exList:[{zh:'请问，有杯子吗？',py:'Qǐngwèn, yǒu bēizi ma?',vn:'Xin hỏi, ở đây có bán cốc không?'}],
   hanzi:[
     {c:'杯',p:'bēi',type:'左右结构 · Trái-phải',st:8,ord:'木(mộc) trái → 不(bất, biến âm) phải',rad:'木 (mộc – gỗ, cây)',mean:'cốc, ly',
      tip:'木(gỗ, vật liệu làm đồ) + 不(âm đọc) → xưa cốc uống nước làm bằng GỖ → CỐC, LY.',
      cf:'坏 (huài – "xấu, hỏng", cũng có 不 làm thành phần âm)',w:'杯子 / 一杯茶 / 干杯'},
     {c:'子',p:'zi',type:'独体字 · Chữ đơn',st:3,ord:'𠃉(đầu, tay) → 一(chân quấn tã)',rad:'子 (tử – tự thành bộ, con)',mean:'con; hậu tố danh từ không mang nghĩa riêng',
      tip:'Hình đứa TRẺ sơ sinh đầu to, hai tay đưa lên, chân quấn tã → CON; khi đọc nhẹ (zi) thường làm hậu tố danh từ như 杯子, 桌子.',
      cf:'孑 (jié – "cô độc, lẻ loi", thiếu nét móc dưới)',w:'儿子 / 杯子 / 桌子'},
   ]},
  {n:2,zh:'售货员',py:'shòuhuòyuán',pos:'Danh từ',vn:'nhân viên bán hàng',em:'🧑‍💼',lesson:1,
   ex_zh:'有，杯子在这边。',ex_py:'Yǒu, bēizi zài zhèbiān.',ex_vn:'Có ạ, cốc ở phía bên này.',
   exList:[{zh:'有，杯子在这边。',py:'Yǒu, bēizi zài zhèbiān.',vn:'Có ạ, cốc ở phía bên này.'}],
   hanzi:[
     {c:'售',p:'shòu',type:'上下结构 · Trên-dưới',st:11,ord:'隹(chim, biến thể) trên → 口(khẩu) dưới',rad:'口 (khẩu – miệng)',mean:'bán',
      tip:'隹(chim, biến thể) kêu vang bằng 口(miệng) để rao mời → mở rộng nghĩa rao mời khách mua → BÁN.',
      cf:'焦 (jiāo – "cháy, sốt ruột", trên cũng có 隹 nhưng dưới là 灬")',w:'售货员 / 出售'},
     {c:'货',p:'huò',type:'上下结构 · Trên-dưới',st:8,ord:'化(hoá) trên → 贝(bối) dưới',rad:'贝 (bối – vỏ sò, tiền cổ)',mean:'hàng hoá',
      tip:'化(biến hoá, đổi) + 贝(tiền) → đổi tiền lấy vật → HÀNG HOÁ.',
      cf:'贷 (dài – "vay, cho vay", trên là 代 thay vì 化")',w:'售货员 / 货物 / 国货'},
     {c:'员',p:'yuán',type:'上下结构 · Trên-dưới',st:7,ord:'口(khẩu) trên → 贝(bối) dưới',rad:'口 (khẩu – miệng)',mean:'người (làm việc gì đó), thành viên',
      tip:'口(miệng, đại diện con người) + 贝(tiền, việc buôn bán) → NGƯỜI làm một công việc, nhân viên.',
      cf:'贝 (bèi – "vỏ sò, tiền cổ", thiếu 口 ở trên)',w:'售货员 / 服务员 / 演员'},
   ]},
  {n:3,zh:'这边',py:'zhèbiān',pos:'Danh từ',vn:'bên này, phía này',em:'👈',lesson:1,
   ex_zh:'有，杯子在这边。',ex_py:'Yǒu, bēizi zài zhèbiān.',ex_vn:'Có ạ, cốc ở phía bên này.',
   exList:[{zh:'有，杯子在这边。',py:'Yǒu, bēizi zài zhèbiān.',vn:'Có ạ, cốc ở phía bên này.'}],
   hanzi:[
     {c:'这',p:'zhè',type:'半包围结构 · Bán bao vây',st:7,ord:'文(văn) trong → 辶(sước) bao ngoài dưới-trái',rad:'辶 (sước – đi, chợt đi chợt dừng)',mean:'này, đây (chỉ thị gần)',
      tip:'辶(đi tới) bao lấy 文(chữ viết, sự việc) → chỉ vào sự việc/vật đang ở gần, vừa nhắc tới → NÀY, ĐÂY.',
      cf:'边 (biān – "bên, phía", cũng có bộ 辶")',w:'这个 / 这些 / 这儿'},
     {c:'边',p:'biān',type:'半包围结构 · Bán bao vây',st:5,ord:'力(biến thể) trên-phải → 辶(sước) bao ngoài',rad:'辶 (sước – đi)',mean:'bên, phía, cạnh',
      tip:'辶(đi dọc theo) + phần trên như đường viền/ranh giới → đi dọc theo MÉP, RANH GIỚI → BÊN, PHÍA.',
      cf:'这 (zhè – "này", cũng bộ 辶")',w:'这边 / 那边 / 旁边'},
   ]},
  {n:4,zh:'钱',py:'qián',pos:'Danh từ',vn:'tiền',em:'💰',lesson:1,
   ex_zh:'多少钱一个？',ex_py:'Duōshao qián yí gè?',ex_vn:'Bao nhiêu tiền một chiếc vậy?',
   exList:[{zh:'多少钱一个？',py:'Duōshao qián yí gè?',vn:'Bao nhiêu tiền một chiếc vậy?'}],
   hanzi:[
     {c:'钱',p:'qián',type:'左右结构 · Trái-phải',st:10,ord:'钅(kim) trái → 戋(biến thể) phải',rad:'钅 (kim – kim loại)',mean:'tiền',
      tip:'钅(kim loại, đúc tiền xu) → TIỀN.',
      cf:'浅 (qiǎn – "nông, cạn")',w:'多少钱 / 花钱'},
   ]},
  {n:5,zh:'这些',py:'zhèxiē',pos:'Đại từ',vn:'những cái này',em:'👉',lesson:1,
   ex_zh:'这些五块钱一个，那些十块钱一个。',ex_py:'Zhèxiē wǔ kuài qián yí gè, nàxiē shí kuài qián yí gè.',ex_vn:'Những chiếc này 5 đồng một chiếc, còn những chiếc kia 10 đồng một chiếc.',
   exList:[{zh:'这些五块钱一个，那些十块钱一个。',py:'Zhèxiē wǔ kuài qián yí gè, nàxiē shí kuài qián yí gè.',vn:'Những chiếc này 5 đồng một chiếc, còn những chiếc kia 10 đồng một chiếc.'}],
   hanzi:[
     {c:'这',p:'zhè',type:'半包围结构 · Bán bao vây',st:7,ord:'文(văn) trong → 辶(sước) bao ngoài dưới-trái',rad:'辶 (sước – đi, chợt đi chợt dừng)',mean:'này, đây (chỉ thị gần)',
      tip:'辶(đi tới) bao lấy 文(chữ viết, sự việc) → chỉ vào sự việc/vật đang ở gần, vừa nhắc tới → NÀY, ĐÂY.',
      cf:'边 (biān – "bên, phía", cũng có bộ 辶")',w:'这个 / 这边 / 这儿'},
     {c:'些',p:'xiē',type:'上下结构 · Trên-dưới',st:8,ord:'此(thử) trên → 二(nhị) dưới',rad:'二 (nhị – số hai)',mean:'một số, vài (lượng từ không xác định)',
      tip:'此(cái này) + 二(số nhiều, hơn một) → chỉ MỘT SỐ, VÀI cái không xác định số lượng chính xác.',
      cf:'此 (cǐ – "này, đây", thiếu 二 ở dưới)',w:'这些 / 那些 / 有些'},
   ]},
  {n:6,zh:'块',py:'kuài',pos:'Lượng từ',vn:'đồng (đơn vị tiền tệ)',em:'🪙',lesson:1,
   ex_zh:'这些五块钱一个。',ex_py:'Zhèxiē wǔ kuài qián yí gè.',ex_vn:'Những chiếc này 5 đồng một chiếc.',
   exList:[{zh:'这些五块钱一个。',py:'Zhèxiē wǔ kuài qián yí gè.',vn:'Những chiếc này 5 đồng một chiếc.'}],
   hanzi:[
     {c:'块',p:'kuài',type:'左右结构 · Trái-phải',st:7,ord:'土(thổ) trái → 夬(quyết, biến thể) phải',rad:'土 (thổ – đất)',mean:'đồng (tiền), miếng, cục',
      tip:'土(đất, vật rắn) + 夬(quyết định, dứt khoát cắt ra) → một CỤC, MIẾNG cắt ra từ khối lớn → đơn vị đếm tiền, vật.',
      cf:'快 (kuài – "nhanh", bộ 忄 thay vì 土")',w:'一块钱 / 一块蛋糕 / 三块'},
   ]},
  {n:7,zh:'那些',py:'nàxiē',pos:'Đại từ',vn:'những cái kia',em:'👉',lesson:1,
   ex_zh:'那些十块钱一个。',ex_py:'Nàxiē shí kuài qián yí gè.',ex_vn:'Những chiếc kia 10 đồng một chiếc.',
   exList:[{zh:'那些十块钱一个。',py:'Nàxiē shí kuài qián yí gè.',vn:'Những chiếc kia 10 đồng một chiếc.'}],
   hanzi:[
     {c:'那',p:'nà',type:'左右结构 · Trái-phải',st:6,ord:'刀+二(biến thể) trái → 阝(ấp) phải',rad:'阝(phải) (ấp – thành ấp, làng)',mean:'kia, đó (chỉ thị xa)',
      tip:'阝(ấp, một vùng đất/làng ở xa) → chỉ vào nơi/vật ở XA người nói → KIA, ĐÓ.',
      cf:'哪 (nǎ – "nào?", thêm bộ 口 bên trái)',w:'那个 / 那些 / 那儿'},
     {c:'些',p:'xiē',type:'上下结构 · Trên-dưới',st:8,ord:'此(thử) trên → 二(nhị) dưới',rad:'二 (nhị – số hai)',mean:'một số, vài (lượng từ không xác định)',
      tip:'此(cái này) + 二(số nhiều, hơn một) → chỉ MỘT SỐ, VÀI cái không xác định số lượng chính xác.',
      cf:'此 (cǐ – "này, đây", thiếu 二 ở dưới)',w:'那些 / 这些 / 有些'},
   ]},
  {n:8,zh:'这儿',py:'zhèr',pos:'Đại từ',vn:'ở đây, chỗ này',em:'📍',lesson:2,
   ex_zh:'这儿的水果真不少！',ex_py:'Zhèr de shuǐguǒ zhēn bù shǎo!',ex_vn:'Hoa quả ở đây nhiều nhỉ!',
   exList:[
     {zh:'这儿的水果真不少！',py:'Zhèr de shuǐguǒ zhēn bù shǎo!',vn:'Hoa quả ở đây nhiều nhỉ!'},
     {zh:'这儿的苹果真便宜！',py:'Zhèr de píngguǒ zhēn piányi!',vn:'Táo ở đây rẻ thật!'},
   ],
   hanzi:[
     {c:'这',p:'zhè',type:'半包围结构 · Bán bao vây',st:7,ord:'文(văn) trong → 辶(sước) bao ngoài dưới-trái',rad:'辶 (sước – đi, chợt đi chợt dừng)',mean:'này, đây (chỉ thị gần)',
      tip:'辶(đi tới) bao lấy 文(chữ viết, sự việc) → chỉ vào sự việc/vật đang ở gần, vừa nhắc tới → NÀY, ĐÂY.',
      cf:'边 (biān – "bên, phía", cũng có bộ 辶")',w:'这个 / 这些 / 这边'},
     {c:'儿',p:'r',type:'独体字 · Chữ đơn',st:2,ord:'丿→乚 (hai nét: phẩy và nét cong móc)',rad:'儿 (nhân – người, dạng chân đứng, tự thành bộ)',mean:'con, nhi (đứa trẻ); hậu tố tạo âm uốn lưỡi chỉ địa điểm',
      tip:'Hình đôi CHÂN của một đứa trẻ đang đứng → liên quan tới TRẺ EM; khi ghép sau 这/那 tạo âm uốn lưỡi "er" chỉ ĐỊA ĐIỂM (这儿, 那儿).',
      cf:'几 (jǐ – "mấy, bao nhiêu", hình dạng gần giống)',w:'这儿 / 那儿 / 儿子'},
   ]},
  {n:9,zh:'水果',py:'shuǐguǒ',pos:'Danh từ',vn:'hoa quả, trái cây',em:'🍇',lesson:2,
   ex_zh:'这儿的水果真不少！',ex_py:'Zhèr de shuǐguǒ zhēn bù shǎo!',ex_vn:'Hoa quả ở đây nhiều nhỉ!',
   exList:[{zh:'这儿的水果真不少！',py:'Zhèr de shuǐguǒ zhēn bù shǎo!',vn:'Hoa quả ở đây nhiều nhỉ!'}],
   hanzi:[
     {c:'水',p:'shuǐ',type:'独体字 · Chữ đơn',st:4,ord:'亅→丶→丿→丶 (nét thẳng giữa và các nhánh nước hai bên)',rad:'水 (thuỷ – nước, tự thành bộ)',mean:'nước',
      tip:'Hình dòng NƯỚC đang chảy, giữa thẳng, hai bên có các nhánh nhỏ toé ra → NƯỚC.',
      cf:'冰 (bīng – "băng, đá", thêm bộ 冫")',w:'水果 / 喝水 / 汽水'},
     {c:'果',p:'guǒ',type:'上下结构 · Trên-dưới',st:8,ord:'田(điền) trên → 木(mộc) dưới',rad:'木 (mộc – cây, gỗ)',mean:'quả, trái cây; kết quả',
      tip:'Hình quả 田(tròn, giống trái cây) mọc trên cây 木 → QUẢ, TRÁI CÂY.',
      cf:'采 (cǎi – "hái, thu hái", trên là 爪 thay vì 田")',w:'水果 / 苹果 / 结果'},
   ]},
  {n:10,zh:'少',py:'shǎo',pos:'Tính từ',vn:'ít',em:'➖',lesson:2,
   ex_zh:'这儿的水果真不少！',ex_py:'Zhèr de shuǐguǒ zhēn bù shǎo!',ex_vn:'Hoa quả ở đây nhiều nhỉ!',
   exList:[{zh:'这儿的水果真不少！',py:'Zhèr de shuǐguǒ zhēn bù shǎo!',vn:'Hoa quả ở đây nhiều nhỉ!'}],
   hanzi:[
     {c:'少',p:'shǎo',type:'独体字 · Chữ đơn',st:4,ord:'小(biến thể) → 丿',rad:'小 (tiểu – nhỏ, biến thể)',mean:'ít',
      tip:'小(nhỏ) thêm một nét phẩy → càng NHỎ, ÍT hơn nữa; ghép với 多(nhiều) để hỏi SỐ LƯỢNG.',
      cf:'小 (xiǎo – "nhỏ")',w:'不少 / 多少'},
   ]},
  {n:11,zh:'斤',py:'jīn',pos:'Lượng từ',vn:'cân (đơn vị đo lường của Trung Quốc, 1 cân = 0,5 kg)',em:'⚖️',lesson:2,
   ex_zh:'我想买两斤苹果。',ex_py:'Wǒ xiǎng mǎi liǎng jīn píngguǒ.',ex_vn:'Tôi muốn mua hai cân táo.',
   exList:[{zh:'我想买两斤苹果。',py:'Wǒ xiǎng mǎi liǎng jīn píngguǒ.',vn:'Tôi muốn mua hai cân táo.'}],
   hanzi:[
     {c:'斤',p:'jīn',type:'独体字 · Chữ đơn',st:4,ord:'丿→一→丨→丿 (hình lưỡi rìu và cán rìu)',rad:'斤 (cân – tự thành bộ, cái rìu)',mean:'cân (đơn vị đo, 1 cân = 0,5kg); nguyên nghĩa: cái rìu',
      tip:'Hình cái RÌU thời cổ (lưỡi rìu và cán) → mượn làm đơn vị đo trọng lượng CÂN.',
      cf:'斥 (chì – "trách mắng, xua đuổi", thêm một chấm")',w:'一斤 / 半斤 / 公斤'},
   ]},
  {n:12,zh:'苹果',py:'píngguǒ',pos:'Danh từ',vn:'táo',em:'🍎',lesson:2,
   ex_zh:'我想买两斤苹果。',ex_py:'Wǒ xiǎng mǎi liǎng jīn píngguǒ.',ex_vn:'Tôi muốn mua hai cân táo.',
   exList:[{zh:'我想买两斤苹果。',py:'Wǒ xiǎng mǎi liǎng jīn píngguǒ.',vn:'Tôi muốn mua hai cân táo.'}],
   hanzi:[
     {c:'苹',p:'píng',type:'上下结构 · Trên-dưới',st:8,ord:'艹(thảo) trên → 平(bình) dưới',rad:'艹 (thảo – cỏ, cây cối)',mean:'(trong 苹果: táo); nguyên nghĩa cây bình bồng',
      tip:'艹(cỏ cây) + 平(bình, âm đọc) → chỉ một loại CÂY, dùng trong từ 苹果 chỉ quả TÁO.',
      cf:'平 (píng – "bằng phẳng", thiếu bộ 艹 ở trên)',w:'苹果'},
     {c:'果',p:'guǒ',type:'上下结构 · Trên-dưới',st:8,ord:'田(điền) trên → 木(mộc) dưới',rad:'木 (mộc – cây, gỗ)',mean:'quả, trái cây; kết quả',
      tip:'Hình quả 田(tròn, giống trái cây) mọc trên cây 木 → QUẢ, TRÁI CÂY.',
      cf:'采 (cǎi – "hái, thu hái", trên là 爪 thay vì 田")',w:'苹果 / 水果 / 结果'},
   ]},
  {n:13,zh:'便宜',py:'piányi',pos:'Tính từ',vn:'rẻ',em:'🏷️',lesson:2,
   ex_zh:'这儿的苹果真便宜！',ex_py:'Zhèr de píngguǒ zhēn piányi!',ex_vn:'Táo ở đây rẻ thật!',
   exList:[{zh:'这儿的苹果真便宜！',py:'Zhèr de píngguǒ zhēn piányi!',vn:'Táo ở đây rẻ thật!'}],
   hanzi:[
     {c:'便',p:'pián',type:'左右结构 · Trái-phải',st:9,ord:'亻(nhân) trái → 更(canh, biến thể) phải',rad:'亻 (nhân – người)',mean:'tiện lợi; (trong 便宜: rẻ)',
      tip:'亻(người) + 更(thay đổi, sửa cho tốt hơn) → người tìm cách làm cho THUẬN TIỆN hơn; trong 便宜 nghĩa mở rộng thành RẺ (thuận tiện về giá cả).',
      cf:'使 (shǐ – "khiến, sai sử", cũng có 亻và nét dễ nhầm)',w:'便宜 / 方便 / 便利'},
     {c:'宜',p:'yí',type:'上下结构 · Trên-dưới',st:8,ord:'宀(miên) trên → 且(thả) dưới',rad:'宀 (miên – mái nhà)',mean:'thích hợp; (trong 便宜: rẻ)',
      tip:'宀(mái nhà, sự ổn định) + 且(thêm nữa, tích luỹ) → những gì THÍCH HỢP, vừa phải trong nhà → mở rộng thành RẺ, phải chăng.',
      cf:'且 (qiě – "hơn nữa, vả lại", thiếu bộ 宀 ở trên)',w:'便宜 / 适宜 / 不宜'},
   ]},
  {n:14,zh:'商店',py:'shāngdiàn',pos:'Danh từ',vn:'cửa hàng',em:'🏬',lesson:3,
   ex_zh:'这家商店衣服真多！',ex_py:'Zhè jiā shāngdiàn yīfu zhēn duō!',ex_vn:'Cửa hàng này nhiều quần áo thật đấy!',
   exList:[{zh:'这家商店衣服真多！',py:'Zhè jiā shāngdiàn yīfu zhēn duō!',vn:'Cửa hàng này nhiều quần áo thật đấy!'}],
   hanzi:[
     {c:'店',p:'diàn',type:'半包围结构 · Bán bao vây',st:8,ord:'广(nghiễm) ngoài → 占(chiếm) trong',rad:'广 (nghiễm – mái hiên)',mean:'cửa hàng, tiệm',
      tip:'广(mái nhà lớn) + 占(bày bán) → nơi bày bán hàng hoá = CỬA HÀNG.',
      cf:'点 (diǎn – "điểm, giờ")',w:'商店 / 书店'},
     {c:'商',p:'shāng',type:'上下结构 · Trên-dưới',st:11,ord:'亠→丷→冂→八 trên → 口(khẩu) dưới',rad:'口 (khẩu – miệng)',mean:'buôn bán, thương mại',
      tip:'Phần trên tượng trưng cửa hiệu nhiều tầng mái che, dưới cùng là 口(miệng, rao mời khách) → nơi diễn ra hoạt động BUÔN BÁN, THƯƠNG MẠI.',
      cf:'高 (gāo – "cao", cũng có 口 ở dưới, dễ nhầm phần trên)',w:'商店 / 商人 / 商量'},
   ]},
  {n:15,zh:'衣服',py:'yīfu',pos:'Danh từ',vn:'quần áo',em:'👕',lesson:3,
   ex_zh:'这家商店衣服真多！',ex_py:'Zhè jiā shāngdiàn yīfu zhēn duō!',ex_vn:'Cửa hàng này nhiều quần áo thật đấy!',
   exList:[{zh:'这家商店衣服真多！',py:'Zhè jiā shāngdiàn yīfu zhēn duō!',vn:'Cửa hàng này nhiều quần áo thật đấy!'}],
   hanzi:[
     {c:'衣',p:'yī',type:'独体字 · Tượng hình',st:6,ord:'亠→𧘇(biến thể)',rad:'衣 (y – tự thành bộ)',mean:'áo, quần áo',
      tip:'Hình chiếc áo có cổ và hai vạt xòe ra → ÁO, QUẦN ÁO.',
      cf:'农 (nóng – "nông nghiệp")',w:'衣服'},
     {c:'服',p:'fú',type:'左右结构 · Trái-phải',st:8,ord:'月(biến thể) trái → 𠬛(biến thể) phải',rad:'月 (nguyệt/nhục – biến thể của thịt/thuyền)',mean:'quần áo; phục tùng; uống (thuốc)',
      tip:'月(biến thể của 舟-thuyền) + phần phải tượng trưng bàn tay điều khiển → gốc nghĩa "chèo lái", mượn chỉ thứ khoác lên người → QUẦN ÁO.',
      cf:'报 (bào – "báo, báo cáo", dễ nhầm phần bên phải)',w:'衣服 / 校服 / 舒服'},
   ]},
  {n:16,zh:'件',py:'jiàn',pos:'Lượng từ',vn:'chiếc, cái (dùng cho quần áo)',em:'👔',lesson:3,
   ex_zh:'这件一百元，怎么样？',ex_py:'Zhè jiàn yìbǎi yuán, zěnmeyàng?',ex_vn:'Chiếc này 100 đồng, anh thấy thế nào?',
   exList:[{zh:'这件一百元，怎么样？',py:'Zhè jiàn yìbǎi yuán, zěnmeyàng?',vn:'Chiếc này 100 đồng, anh thấy thế nào?'}],
   hanzi:[
     {c:'件',p:'jiàn',type:'左右结构 · Trái-phải',st:6,ord:'亻(nhân) trái → 牛(ngưu) phải',rad:'亻 (nhân – người)',mean:'chiếc, cái, việc (lượng từ đồ vật/sự việc)',
      tip:'亻(người) + 牛(trâu bò, vật có giá trị) → người phân chia trâu bò thành từng PHẦN riêng lẻ → lượng từ đếm đồ vật, sự việc.',
      cf:'伟 (wěi – "vĩ đại", phải là 韦 thay vì 牛")',w:'一件衣服 / 一件事 / 件数'},
   ]},
  {n:17,zh:'元',py:'yuán',pos:'Lượng từ',vn:'đồng (nhân dân tệ)',em:'💴',lesson:3,
   ex_zh:'这件一百元，怎么样？',ex_py:'Zhè jiàn yìbǎi yuán, zěnmeyàng?',ex_vn:'Chiếc này 100 đồng, anh thấy thế nào?',
   exList:[{zh:'这件一百元，怎么样？',py:'Zhè jiàn yìbǎi yuán, zěnmeyàng?',vn:'Chiếc này 100 đồng, anh thấy thế nào?'}],
   hanzi:[
     {c:'元',p:'yuán',type:'独体字 · Chữ đơn',st:4,ord:'二(nhị) trên → 儿(nhân) dưới',rad:'儿 (nhân – người, chân đứng)',mean:'đồng (đơn vị tiền tệ); đầu tiên, gốc',
      tip:'二(số hai, tượng trưng phần trên) + 儿(người) → phần ĐẦU của con người, khởi đầu → nghĩa gốc "đầu tiên", mượn làm đơn vị tiền ĐỒNG (nhân dân tệ).',
      cf:'无 (wú – "không có", trên cũng có nét ngang dễ nhầm)',w:'一元 / 元旦 / 美元'},
   ]},
  {n:18,zh:'怎么样',py:'zěnmeyàng',pos:'Đại từ',vn:'thế nào, như thế nào',em:'❓',lesson:3,
   ex_zh:'这件一百元，怎么样？',ex_py:'Zhè jiàn yìbǎi yuán, zěnmeyàng?',ex_vn:'Chiếc này 100 đồng, anh thấy thế nào?',
   exList:[{zh:'这件一百元，怎么样？',py:'Zhè jiàn yìbǎi yuán, zěnmeyàng?',vn:'Chiếc này 100 đồng, anh thấy thế nào?'}],
   hanzi:[
     {c:'怎',p:'zěn',type:'上下结构 · Trên-dưới',st:9,ord:'乍(sạ) trên → 心(tâm) dưới',rad:'心 (tâm – trái tim, tấm lòng)',mean:'sao, thế nào',
      tip:'乍(chợt, bất chợt) + 心(tâm, suy nghĩ) → lòng CHỢT thắc mắc không hiểu → hỏi THẾ NÀO, SAO.',
      cf:'作 (zuò – "làm", bộ 亻 thay vì 心")',w:'怎么 / 怎么样 / 怎么了'},
     {c:'么',p:'me',type:'独体字 · Chữ đơn',st:3,ord:'丿→㇋→乙 (nét cong xoắn nhỏ, biến thể của 幺)',rad:'丿(phiệt)',mean:'trợ từ/hậu tố không mang nghĩa riêng (什么, 怎么, 那么)',
      tip:'Hình sợi TƠ nhỏ xoắn lại (biến thể của 幺) → nét chữ đơn giản, dùng làm hậu tố/trợ từ trong 什么, 怎么, 那么.',
      cf:'幺 (yāo – "nhỏ, số 1 trong đếm số", gần như đồng dạng, thêm 1 nét)',w:'怎么 / 什么 / 那么'},
     {c:'样',p:'yàng',type:'左右结构 · Trái-phải',st:10,ord:'木(mộc) trái → 羊(dương) phải',rad:'木 (mộc – cây, gỗ)',mean:'dáng vẻ, kiểu, cách thức',
      tip:'木(gỗ, dùng làm khuôn) + 羊(dê, âm đọc) → khuôn mẫu bằng gỗ để tạo hình → DÁNG VẺ, KIỂU CÁCH.',
      cf:'洋 (yáng – "đại dương", bộ 氵 thay vì 木")',w:'怎么样 / 一样 / 样子'},
   ]},
  {n:19,zh:'贵',py:'guì',pos:'Tính từ',vn:'đắt',em:'💎',lesson:3,
   ex_zh:'好看，也不贵。',ex_py:'Hǎokàn, yě bú guì.',ex_vn:'Đẹp đấy, mà cũng không đắt.',
   exList:[{zh:'好看，也不贵。',py:'Hǎokàn, yě bú guì.',vn:'Đẹp đấy, mà cũng không đắt.'}],
   hanzi:[
     {c:'贵',p:'guì',type:'上下结构 · Trên-dưới',st:9,ord:'中→一→贝(bối)',rad:'贝 (bối – vỏ sò, tiền cổ)',mean:'đắt, quý',
      tip:'Bộ 贝(tiền tệ cổ) → liên quan tới giá trị lớn = ĐẮT, QUÝ GIÁ.',
      cf:'柜 (guì – "tủ", bộ 木)',w:'很贵 / 不贵'},
   ]},
  {n:20,zh:'穿',py:'chuān',pos:'Động từ',vn:'mặc',em:'🧥',lesson:3,
   ex_zh:'小雪能穿，买一件吧。',ex_py:'Xiǎoxuě néng chuān, mǎi yí jiàn ba.',ex_vn:'Tiểu Tuyết mặc được đấy, mua một chiếc nhé.',
   exList:[{zh:'小雪能穿，买一件吧。',py:'Xiǎoxuě néng chuān, mǎi yí jiàn ba.',vn:'Tiểu Tuyết mặc được đấy, mua một chiếc nhé.'}],
   hanzi:[
     {c:'穿',p:'chuān',type:'上下结构 · Trên-dưới',st:9,ord:'穴(huyệt) → 牙(nha)',rad:'穴 (huyệt – hang, lỗ)',mean:'mặc, xỏ qua',
      tip:'穴(lỗ) + 牙(răng, vật nhọn) → xỏ vật nhọn XUYÊN QUA lỗ → MẶC, ĐI (giày/quần áo).',
      cf:'空 (kōng – "trống rỗng")',w:'能穿 / 穿衣服'},
   ]},
  {n:21,zh:'女',py:'nǚ',pos:'Tính từ',vn:'nữ, con gái',em:'👧',lesson:3,
   ex_zh:'这些是女孩子穿的衣服。',ex_py:'Zhèxiē shì nǚ háizi chuān de yīfu.',ex_vn:'Những cái này là quần áo dành cho bé gái.',
   exList:[{zh:'这些是女孩子穿的衣服。',py:'Zhèxiē shì nǚ háizi chuān de yīfu.',vn:'Những cái này là quần áo dành cho bé gái.'}],
   hanzi:[
     {c:'女',p:'nǚ',type:'独体字 · Chữ đơn',st:3,ord:'㇛(nét cong) → ノ → 一 (hình người phụ nữ quỳ, tay khoanh)',rad:'女 (nữ – tự thành bộ)',mean:'nữ, con gái, phụ nữ',
      tip:'Hình người phụ nữ thời xưa quỳ, hai tay khoanh trước ngực, dáng vẻ dịu dàng → NỮ, CON GÁI.',
      cf:'母 (mǔ – "mẹ", thêm hai chấm bên trong)',w:'女孩子 / 女儿 / 妇女'},
   ]},
  {n:22,zh:'男',py:'nán',pos:'Tính từ',vn:'nam, con trai',em:'👦',lesson:3,
   ex_zh:'男孩子的衣服在那儿。',ex_py:'Nán háizi de yīfu zài nàr.',ex_vn:'Quần áo dành cho bé trai ở đằng kia cơ.',
   exList:[{zh:'男孩子的衣服在那儿。',py:'Nán háizi de yīfu zài nàr.',vn:'Quần áo dành cho bé trai ở đằng kia cơ.'}],
   hanzi:[
     {c:'男',p:'nán',type:'上下结构 · Trên-dưới',st:7,ord:'田(điền) trên → 力(lực) dưới',rad:'田 (điền – ruộng)',mean:'nam, con trai',
      tip:'田(ruộng) + 力(sức lực, cái cày) → người dùng SỨC LỰC cày RUỘNG → chỉ đàn ông, NAM GIỚI.',
      cf:'田 (tián – "ruộng", thiếu bộ 力 ở dưới)',w:'男孩子 / 男人 / 男朋友'},
   ]},
  {n:23,zh:'那儿',py:'nàr',pos:'Đại từ',vn:'ở kia, chỗ đó',em:'👉',lesson:3,
   ex_zh:'男孩子的衣服在那儿。',ex_py:'Nán háizi de yīfu zài nàr.',ex_vn:'Quần áo dành cho bé trai ở đằng kia cơ.',
   exList:[{zh:'男孩子的衣服在那儿。',py:'Nán háizi de yīfu zài nàr.',vn:'Quần áo dành cho bé trai ở đằng kia cơ.'}],
   hanzi:[
     {c:'那',p:'nà',type:'左右结构 · Trái-phải',st:6,ord:'刀+二(biến thể) trái → 阝(ấp) phải',rad:'阝(phải) (ấp – thành ấp, làng)',mean:'kia, đó (chỉ thị xa)',
      tip:'阝(ấp, một vùng đất/làng ở xa) → chỉ vào nơi/vật ở XA người nói → KIA, ĐÓ.',
      cf:'哪 (nǎ – "nào?", thêm bộ 口 bên trái)',w:'那儿 / 那个 / 那些'},
     {c:'儿',p:'r',type:'独体字 · Chữ đơn',st:2,ord:'丿→乚 (hai nét: phẩy và nét cong móc)',rad:'儿 (nhân – người, dạng chân đứng, tự thành bộ)',mean:'con, nhi (đứa trẻ); hậu tố tạo âm uốn lưỡi chỉ địa điểm',
      tip:'Hình đôi CHÂN của một đứa trẻ đang đứng → liên quan tới TRẺ EM; khi ghép sau 这/那 tạo âm uốn lưỡi "er" chỉ ĐỊA ĐIỂM (这儿, 那儿).',
      cf:'几 (jǐ – "mấy, bao nhiêu", hình dạng gần giống)',w:'那儿 / 这儿 / 儿子'},
   ]},
];

var wuData = [
  {img:'/images/hsk1v3-bai-10/yifu.jpg',label:'衣服',py:'yīfu',letter:'A'},
  {img:'/images/hsk1v3-bai-10/pianyi.jpg',label:'便宜',py:'piányi',letter:'B'},
  {img:'/images/hsk1v3-bai-10/pingguo.jpg',label:'苹果',py:'píngguǒ',letter:'C'},
  {img:'/images/hsk1v3-bai-10/chuan.jpg',label:'穿',py:'chuān',letter:'D'},
  {img:'/images/hsk1v3-bai-10/beizi.jpg',label:'杯子',py:'bēizi',letter:'E'},
  {img:'/images/hsk1v3-bai-10/shangdian.jpg',label:'商店',py:'shāngdiàn',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 10: Ngữ âm + Hán tự + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-10/wb-yuyin.mp3',
      blocks: [
        { type: 'tonemc', caption: 'Đánh dấu thanh điệu — nghe và chọn thanh điệu đúng',
          items: [
            {before:'dui → ', after:'', answer:'duì', options:['duī','duí','duǐ','duì']},
            {before:'jia → ', after:'', answer:'jiā', options:['jiā','jiá','jiǎ','jià']},
            {before:'guo → ', after:'', answer:'guò', options:['guō','guó','guǒ','guò']},
            {before:'xiang → ', after:'', answer:'xiǎng', options:['xiāng','xiáng','xiǎng','xiàng']},
            {before:'chaoshi → ', after:'', answer:'chāoshì', options:['chāoshì','cháoshì','chāoshí','cháoshí']},
            {before:'niunai → ', after:'', answer:'niúnǎi', options:['niúnǎi','niūnǎi','niúnài','niūnài']},
            {before:'shangwu → ', after:'', answer:'shàngwǔ', options:['shàngwǔ','shāngwǔ','shàngwù','shāngwù']},
            {before:'dianying → ', after:'', answer:'diànyǐng', options:['diànyǐng','diānyǐng','diànyīng','diānyīng']}
          ] },
        { type: 'tonemc', caption: 'Phân biệt thanh điệu — chọn âm tiết có thanh điệu KHÁC trong nhóm',
          items: [
            {before:'', after:'', answer:'zhuō', options:['zuò','zì','zhuō']},
            {before:'', after:'', answer:'chá', options:['xiě','chá','jiě']},
            {before:'', after:'', answer:'qù', options:['chuān','qù','fēn']},
            {before:'', after:'', answer:'yǒu', options:['yǒu','shuí','rén']},
            {before:'', after:'', answer:'yīyuàn', options:['wàibian','zhège','yīyuàn']}
          ] },
        { type: 'table', caption: 'Chữ Hán (汉字) — Cấu tạo và bút thuận (tiếp)',
          rows: [
            ['Nét mới', '横折 héngzhé (ngang-gập), 横撇 héngpiě (ngang-phẩy), 竖折 shùzhé (sổ-gập), 竖提 shùtí (sổ-hất)'],
            ['Quy tắc bút thuận', '从左到右 (trái trước phải sau) — ví dụ: 的; 先外后里 (ngoài trước trong sau) — ví dụ: 月'],
            ['Ví dụ luyện viết', '日 (rì) → 星期日 (Xīngqīrì); 友 (yǒu) → 朋友 (péngyou); 医 (yī) → 医生 (yīshēng); 以 (yǐ) → 可以 (kěyǐ)']
          ],
          note: 'Phần luyện viết tay theo từng nét cần thực hành trực tiếp trên giấy/vở theo mẫu trong sách.' }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-10/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-10-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-10-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-10-wb/q1c.jpg'}
            ], answer: 'B' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-10-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-10-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-10-wb/q2c.jpg'}
            ], answer: 'C' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-10-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-10-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-10-wb/q3c.jpg'}
            ], answer: 'B' },
            { n: 4, options: [
              {key:'A', text:'10:00', py:''},
              {key:'B', text:'十块钱', py:'shí kuài qián'},
              {key:'C', text:'十本书', py:'shí běn shū'}
            ], answer: 'B' },
            { n: 5, options: [
              {key:'A', text:'不贵', py:'bú guì'},
              {key:'B', text:'很好看', py:'hěn hǎokàn'},
              {key:'C', text:'120元', py:'120 yuán'}
            ], answer: 'B' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-10-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-10-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-10-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-10-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-10-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-10-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-10-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-10-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-10-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-10-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-10-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-10-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 9, options: [
              {key:'A', text:'很多', py:'hěn duō'},
              {key:'B', text:'真贵', py:'zhēn guì'},
              {key:'C', text:'不好看', py:'bù hǎokàn'}
            ], answer: 'A' },
            { n: 10, options: [
              {key:'A', text:'很少', py:'hěn shǎo'},
              {key:'B', text:'很便宜', py:'hěn piányi'},
              {key:'C', text:'很漂亮', py:'hěn piàoliang'}
            ], answer: 'B' }
          ],
          reading: [
            { n: 11, prompt: '请问，包子多少钱一个？', promptPy: 'Qǐngwèn, bāozi duōshao qián yí gè?', options: [
              {key:'A', img:'/images/hsk1v3-bai-10-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-10-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-10-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-10-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 12, prompt: '这边的苹果真便宜。', promptPy: 'Zhèbiān de píngguǒ zhēn piányi.', options: [
              {key:'A', img:'/images/hsk1v3-bai-10-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-10-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-10-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-10-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 13, prompt: '这些是男孩子穿的衣服。', promptPy: 'Zhèxiē shì nán háizi chuān de yīfu.', options: [
              {key:'A', img:'/images/hsk1v3-bai-10-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-10-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-10-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-10-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 14, prompt: '女孩子的衣服在哪儿？', promptPy: 'Nǚ háizi de yīfu zài nǎr?', options: [
              {key:'A', text:'十块钱。', py:'Shí kuài qián.'},
              {key:'B', text:'对不起，没有。', py:'Duìbuqǐ, méiyǒu.'},
              {key:'C', text:'在那边。', py:'Zài nàbiān.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'C' },
            { n: 15, prompt: '杯子多少钱一个？', promptPy: 'Bēizi duōshao qián yí gè?', options: [
              {key:'A', text:'十块钱。', py:'Shí kuài qián.'},
              {key:'B', text:'对不起，没有。', py:'Duìbuqǐ, méiyǒu.'},
              {key:'C', text:'在那边。', py:'Zài nàbiān.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'A' },
            { n: 16, prompt: '请问这儿有牛奶吗？', promptPy: 'Qǐngwèn zhèr yǒu niúnǎi ma?', options: [
              {key:'A', text:'十块钱。', py:'Shí kuài qián.'},
              {key:'B', text:'对不起，没有。', py:'Duìbuqǐ, méiyǒu.'},
              {key:'C', text:'在那边。', py:'Zài nàbiān.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'B' },
            { n: 17, prompt: '那些苹果两（　）钱一斤，很便宜。', promptPy: 'Nàxiē píngguǒ liǎng ( ) qián yì jīn, hěn piányi.', options: [
              {key:'A', text:'穿', py:'chuān'},
              {key:'B', text:'块', py:'kuài'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：这件衣服怎么样？\n女：很好看，10岁的男孩子能（　）。', promptPy: 'Zhè jiàn yīfu zěnmeyàng? / Hěn hǎokàn, 10 suì de nán háizi néng ( ).', options: [
              {key:'A', text:'穿', py:'chuān'},
              {key:'B', text:'块', py:'kuài'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '我没有手机，今天想去商店买一个。\n★说话人想买什么？', promptPy: 'Wǒ méiyǒu shǒujī, jīntiān xiǎng qù shāngdiàn mǎi yí gè.', options: [
              {key:'A', text:'杯子', py:'bēizi'},
              {key:'B', text:'手机', py:'shǒujī'},
              {key:'C', text:'水果', py:'shuǐguǒ'}
            ], answer: 'B' },
            { n: 20, prompt: '这件衣服很好看，你也能穿，买一件吧。\n★那件衣服：', promptPy: 'Zhè jiàn yīfu hěn hǎokàn, nǐ yě néng chuān, mǎi yí jiàn ba.', options: [
              {key:'A', text:'好看', py:'hǎokàn'},
              {key:'B', text:'便宜', py:'piányi'},
              {key:'C', text:'很贵', py:'hěn guì'}
            ], answer: 'A' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'王一雪在一家小店买杯子 · Mua cốc',
   preQuiz:[
     {q:'王一雪想买什么？',opts:['杯子','衣服','水果'],ans:0},
     {q:'王一雪最后买了哪种杯子？',opts:['五块钱的','十块钱的','都没买'],ans:0},
   ],
   lines:[
     {sp:0,zh:'请问，有杯子吗？',py:'Qǐngwèn, yǒu bēizi ma?',vn:'Xin hỏi, ở đây có bán cốc không?'},
     {sp:1,zh:'有，杯子在这边。',py:'Yǒu, bēizi zài zhèbiān.',vn:'Có ạ, cốc ở phía bên này.'},
     {sp:0,zh:'多少钱一个？',py:'Duōshao qián yí gè?',vn:'Bao nhiêu tiền một chiếc vậy?'},
     {sp:1,zh:'这些五块钱一个，那些十块钱一个。',py:'Zhèxiē wǔ kuài qián yí gè, nàxiē shí kuài qián yí gè.',vn:'Những chiếc này 5 đồng một chiếc, còn những chiếc kia 10 đồng một chiếc.'},
     {sp:0,zh:'我买这个吧。',py:'Wǒ mǎi zhège ba.',vn:'Tôi lấy chiếc này.'},
   ]},
  {scene:'王一雪在菜市场买水果 · Mua táo',
   preQuiz:[
     {q:'这儿的水果（　）。',opts:['很少','真不少','真不多'],ans:1},
     {q:'苹果（　）一斤。',opts:['三块','三块五','七块二'],ans:1},
   ],
   lines:[
     {sp:0,zh:'这儿的水果真不少！',py:'Zhèr de shuǐguǒ zhēn bù shǎo!',vn:'Hoa quả ở đây nhiều nhỉ!'},
     {sp:1,zh:'您想买什么？',py:'Nín xiǎng mǎi shénme?',vn:'Chị muốn mua gì?'},
     {sp:0,zh:'我想买两斤苹果。',py:'Wǒ xiǎng mǎi liǎng jīn píngguǒ.',vn:'Tôi muốn mua hai cân táo.'},
     {sp:1,zh:'苹果三块五一斤。这些七块二，七块钱吧。',py:'Píngguǒ sān kuài wǔ yì jīn. Zhèxiē qī kuài èr, qī kuài qián ba.',vn:'Táo 3 đồng rưỡi một cân. Chỗ này 7,2 đồng, lấy chị 7 đồng nhé.'},
     {sp:0,zh:'好的，这儿的苹果真便宜！',py:'Hǎo de, zhèr de píngguǒ zhēn piányi!',vn:'Vâng, táo ở đây rẻ thật!'},
   ]},
  {scene:'刘明和王一雪在商场给孩子买衣服 · Mua quần áo cho con',
   preQuiz:[
     {q:'这件衣服（　）。',opts:['二十元','一百元','一百一十元'],ans:1},
     {q:'这件衣服（　）。',opts:['太贵','很贵','不贵'],ans:2},
   ],
   lines:[
     {sp:0,zh:'这家商店衣服真多！这件一百元，怎么样？',py:'Zhè jiā shāngdiàn yīfu zhēn duō! Zhè jiàn yìbǎi yuán, zěnmeyàng?',vn:'Cửa hàng này nhiều quần áo thật đấy! Chiếc này 100 đồng, anh thấy thế nào?'},
     {sp:1,zh:'好看，也不贵。',py:'Hǎokàn, yě bú guì.',vn:'Đẹp đấy, mà cũng không đắt.'},
     {sp:0,zh:'小雪能穿，买一件吧。',py:'Xiǎoxuě néng chuān, mǎi yí jiàn ba.',vn:'Tiểu Tuyết mặc được đấy, mua một chiếc nhé.'},
     {sp:1,zh:'好的。小明能穿吗？',py:'Hǎo de. Xiǎomíng néng chuān ma?',vn:'Ừ. Tiểu Minh có mặc được không?'},
     {sp:0,zh:'不能。这些是女孩子穿的衣服，男孩子的衣服在那儿。',py:'Bù néng. Zhèxiē shì nǚ háizi chuān de yīfu, nán háizi de yīfu zài nàr.',vn:'Không được đâu. Những cái này là quần áo dành cho bé gái. Quần áo dành cho bé trai ở đằng kia cơ.'},
     {sp:1,zh:'好的。',py:'Hǎo de.',vn:'Ừ nhỉ.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'杯', right:'子'},
  {left:'水', right:'果'},
  {left:'苹', right:'果'},
  {left:'商', right:'店'},
  {left:'衣', right:'服'},
  {left:'售货', right:'员'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'请问，有', blank:'杯子', post:'吗？', hint:'(cốc)', ans:'杯子'},
  {pre:'', blank:'多少钱', post:'一个？', hint:'(bao nhiêu tiền)', ans:'多少钱'},
  {pre:'这些', blank:'五块钱', post:'一个，那些十块钱一个。', hint:'(5 đồng)', ans:'五块钱'},
  {pre:'', blank:'这儿的水果', post:'真不少！', hint:'(hoa quả ở đây)', ans:'这儿的水果'},
  {pre:'我想买两斤', blank:'苹果', post:'。', hint:'(táo)', ans:'苹果'},
  {pre:'这儿的苹果真', blank:'便宜', post:'！', hint:'(rẻ)', ans:'便宜'},
  {pre:'这件一百元，', blank:'怎么样', post:'？', hint:'(thế nào)', ans:'怎么样'},
  {pre:'好看，也不', blank:'贵', post:'。', hint:'(đắt)', ans:'贵'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['请问','，','有','杯子','吗','？'], ans:'请问，有杯子吗？', audio:'请问，有杯子吗？'},
  {words:['这些','五块','钱','一个','，','那些','十块','钱','一个','。'], ans:'这些五块钱一个，那些十块钱一个。', audio:'这些五块钱一个，那些十块钱一个。'},
  {words:['这儿','的','水果','真','不少','！'], ans:'这儿的水果真不少！', audio:'这儿的水果真不少！'},
  {words:['我','想','买','两斤','苹果','。'], ans:'我想买两斤苹果。', audio:'我想买两斤苹果。'},
  {words:['这','家','商店','衣服','真','多','！'], ans:'这家商店衣服真多！', audio:'这家商店衣服真多！'},
  {words:['男孩子','的','衣服','在','那儿','。'], ans:'男孩子的衣服在那儿。', audio:'男孩子的衣服在那儿。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"多少钱一个？" nghĩa là gì?', opts:['Bao nhiêu tiền một cái?', 'Cái này màu gì?', 'Cái này ở đâu?', 'Còn cái nào không?'], ans:0},
  {q:'"这儿的水果真不少！" nghĩa là gì?', opts:['Hoa quả ở đây nhiều thật!', 'Hoa quả ở đây rất ít.', 'Hoa quả ở đây không tươi.', 'Ở đây không có hoa quả.'], ans:0},
  {q:'Lượng từ "斤" dùng để làm gì?', opts:['đo khối lượng (1 cân = 0,5kg)', 'đếm số người', 'đếm số quyển sách', 'đếm số chiếc áo'], ans:0},
  {q:'"这儿的苹果真便宜！" nghĩa là gì?', opts:['Táo ở đây rẻ thật!', 'Táo ở đây đắt thật!', 'Táo ở đây không ngon.', 'Ở đây không bán táo.'], ans:0},
  {q:'"好看，也不贵。" nghĩa là gì?', opts:['Đẹp, mà cũng không đắt.', 'Đẹp nhưng rất đắt.', 'Không đẹp, cũng không rẻ.', 'Xấu và đắt.'], ans:0},
  {q:'Đại từ nghi vấn "怎么样" dùng để hỏi điều gì?', opts:['ý kiến, tình hình như thế nào', 'số lượng bao nhiêu', 'vị trí ở đâu', 'thời gian khi nào'], ans:0},
  {q:'Câu vị ngữ tính từ có đặc điểm gì?', opts:['tính từ trực tiếp làm vị ngữ, không cần "是"', 'luôn cần động từ "是" đứng trước', 'luôn cần lượng từ đứng trước', 'chỉ dùng trong câu hỏi'], ans:0},
  {q:'"男孩子的衣服在那儿。" nghĩa là gì?', opts:['Quần áo bé trai ở đằng kia.', 'Quần áo bé gái ở đằng kia.', 'Không có quần áo bé trai.', 'Bé trai ở đằng kia.'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '售货员问："您想买什么？" 你怎么回答？', q_vn: 'Nhân viên bán hàng hỏi: "Chị muốn mua gì?" Bạn trả lời thế nào?',
     hint: '我想买……', sample: '我想买两斤苹果。', sample_vn: 'Tôi muốn mua hai cân táo.',
     note: '"想 + động từ" dùng để nói về mong muốn làm việc gì.'},
    {q_zh: '有人问你："这件衣服怎么样？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Chiếc áo này thế nào?" Bạn trả lời thế nào?',
     hint: '……，也不贵。', sample: '好看，也不贵。', sample_vn: 'Đẹp đấy, mà cũng không đắt.',
     note: 'Tính từ có thể trực tiếp làm vị ngữ, ví dụ 好看/贵/便宜.'},
    {q_zh: '有人问你："多少钱一个？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Bao nhiêu tiền một cái?" Bạn trả lời thế nào?',
     hint: '……块钱一个。', sample: '五块钱一个。', sample_vn: '5 đồng một cái.',
     note: 'Cách nói giá tiền: số tiền + 块/元 + (lượng từ) + 一 + lượng từ đồ vật.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Xin hỏi, ở đây có bán cốc không?', zh:'请问，有杯子吗？', py:'Qǐngwèn, yǒu bēizi ma?'},
  {vi:'Hoa quả ở đây nhiều nhỉ!', zh:'这儿的水果真不少！', py:'Zhèr de shuǐguǒ zhēn bù shǎo!'},
  {vi:'Tôi muốn mua hai cân táo.', zh:'我想买两斤苹果。', py:'Wǒ xiǎng mǎi liǎng jīn píngguǒ.'},
  {vi:'Chiếc này 100 đồng, anh thấy thế nào?', zh:'这件一百元，怎么样？', py:'Zhè jiàn yìbǎi yuán, zěnmeyàng?'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Cốc ở phía bên này.', zh:'杯子在这边。', py:'Bēizi zài zhèbiān.'},
  {vi:'Táo 3 đồng rưỡi một cân.', zh:'苹果三块五一斤。', py:'Píngguǒ sān kuài wǔ yì jīn.'},
  {vi:'Đây là quần áo dành cho bé gái.', zh:'这些是女孩子穿的衣服。', py:'Zhèxiē shì nǚ háizi chuān de yīfu.'},
  {vi:'Cửa hàng này nhiều quần áo thật đấy!', zh:'这家商店衣服真多！', py:'Zhè jiā shāngdiàn yīfu zhēn duō!'},
];
