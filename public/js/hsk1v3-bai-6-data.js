// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 6: 你的手机号是多少？
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'手机',py:'shǒujī',pos:'Danh từ',vn:'điện thoại di động',em:'📱',lesson:1,
   ex_zh:'你的手机号是多少？',ex_py:'Nǐ de shǒujīhào shì duōshao?',ex_vn:'Số điện thoại di động của bạn là bao nhiêu?',
   exList:[
     {zh:'你的手机号是多少？',py:'Nǐ de shǒujīhào shì duōshao?',vn:'Số điện thoại di động của bạn là bao nhiêu?'},
   ],
   hanzi:[
     {c:'手',p:'shǒu',type:'独体字 · Chữ đơn',st:4,ord:'丿(phẩy) → 一(ngang) → 一(ngang) → 亅(móc câu), viết liền một khối',rad:'手 (thủ – tự thành bộ)',mean:'tay',
      tip:'手 vẽ hình bàn TAY xoè ra với các ngón tay toả ra hai bên → nghĩa TAY.',
      cf:'毛 (máo – "lông", nét cong dưới dễ nhầm)',w:'手机 / 你的手 / 举手'},
     {c:'机',p:'jī',type:'左右结构 · Trái-phải',st:6,ord:'木(mộc) trái → 几(kỷ) phải',rad:'木 (mộc – gỗ, cây)',mean:'máy, cơ chế',
      tip:'木(gỗ, vật liệu làm máy móc xưa) + 几(cái bàn nhỏ, hình công cụ) → ghép thành MÁY MÓC.',
      cf:'几 (jǐ – "mấy, bao nhiêu", chính là phần bên phải của 机")',w:'手机 / 飞机 / 机场'},
   ]},
  {n:2,zh:'电话',py:'diànhuà',pos:'Danh từ',vn:'điện thoại (máy cố định)',em:'☎️',lesson:1,
   ex_zh:'现在人们有时也用电话指代手机。',ex_py:'Xiànzài rénmen yǒushí yě yòng diànhuà zhǐdài shǒujī.',ex_vn:'Hiện nay, đôi khi người ta cũng dùng từ điện thoại để thay cho điện thoại di động.',
   exList:[
     {zh:'现在人们有时也用电话指代手机。',py:'Xiànzài rénmen yǒushí yě yòng diànhuà zhǐdài shǒujī.',vn:'Hiện nay, đôi khi người ta cũng dùng từ điện thoại để thay cho điện thoại di động.'},
   ],
   hanzi:[
     {c:'电',p:'diàn',type:'独体字 · Chữ đơn',st:5,ord:'乙(gập khúc) liên tục, hình tia chớp ngoằn ngoèo từ trên xuống, viết liền một khối',rad:'电 (điện – tự thành bộ)',mean:'điện',
      tip:'电 là chữ giản thể của 電, hình cách điệu của một tia CHỚP loé giữa trời mưa → mang năng lượng ĐIỆN.',
      cf:'由 (yóu – "từ, bởi", nét ngang trên đầu khác vị trí)',w:'电话 / 电脑 / 电视'},
     {c:'话',p:'huà',type:'左右结构 · Trái-phải',st:8,ord:'讠(ngôn) trái → 舌(thiệt) phải',rad:'讠 (ngôn – lời nói)',mean:'lời nói, chuyện',
      tip:'讠(lời nói) + 舌(cái lưỡi, dùng để nói) → LỜI NÓI, câu chuyện.',
      cf:'活 (huó – "sống", bộ 氵thay vì 讠")',w:'电话 / 说话 / 汉语'},
   ]},
  {n:3,zh:'号',py:'hào',pos:'Danh từ',vn:'số',em:'🔢',lesson:1,
   ex_zh:'我的手机号是+86 13552721160。',ex_py:'Wǒ de shǒujīhào shì +86 13552721160.',ex_vn:'Số điện thoại di động của tôi là +86 13552721160.',
   exList:[
     {zh:'我的手机号是+86 13552721160。',py:'Wǒ de shǒujīhào shì +86 13552721160.',vn:'Số điện thoại di động của tôi là +86 13552721160.'},
   ],
   hanzi:[
     {c:'号',p:'hào',type:'上下结构 · Trên-dưới',st:5,ord:'口(khẩu) trên → 亏(khuy) dưới',rad:'口 (khẩu – miệng)',mean:'số, hiệu, ngày',
      tip:'口(miệng hô hào, gọi to) → mở rộng nghĩa thành SỐ HIỆU (số để gọi tên/định danh).',
      cf:'亏 (kuī – "thiếu hụt")',w:'手机号 / 几号'},
   ]},
  {n:4,zh:'明天',py:'míngtiān',pos:'Danh từ',vn:'ngày mai',em:'🌅',lesson:2,
   ex_zh:'家月，明天你去哪儿？',ex_py:'Jiāyuè, míngtiān nǐ qù nǎr?',ex_vn:'Gia Nguyệt, ngày mai bạn đi đâu?',
   exList:[
     {zh:'家月，明天你去哪儿？',py:'Jiāyuè, míngtiān nǐ qù nǎr?',vn:'Gia Nguyệt, ngày mai bạn đi đâu?'},
   ],
   hanzi:[
     {c:'明',p:'míng',type:'左右结构 · Trái-phải',st:8,ord:'日(nhật) trái → 月(nguyệt) phải',rad:'日 (nhật – mặt trời)',mean:'sáng, rõ, ngày (kế)',
      tip:'日(mặt trời) + 月(mặt trăng) cùng chiếu SÁNG → SÁNG RÕ, ánh sáng.',
      cf:'朋 (péng – "bạn bè", hai chữ 月 ghép lại)',w:'明天 / 明白 / 说明'},
     {c:'天',p:'tiān',type:'上下结构 · Trên-dưới',st:4,ord:'一(nhất, biểu thị bầu trời) trên → 大(đại) dưới',rad:'大 (đại – to lớn)',mean:'trời, ngày',
      tip:'一(nét ngang, biểu thị bầu trời) trên đầu chữ 大(người dang tay đứng) → cái ở TRÊN ĐẦU người chính là TRỜI.',
      cf:'夫 (fū – "chồng, đàn ông", nét ngang trên ở vị trí khác)',w:'明天 / 今天 / 天气'},
   ]},
  {n:5,zh:'去',py:'qù',pos:'Động từ',vn:'đi',em:'🚶',lesson:2,
   ex_zh:'我想去超市买东西。',ex_py:'Wǒ xiǎng qù chāoshì mǎi dōngxi.',ex_vn:'Mình muốn đi siêu thị mua đồ.',
   exList:[
     {zh:'我想去超市买东西。',py:'Wǒ xiǎng qù chāoshì mǎi dōngxi.',vn:'Mình muốn đi siêu thị mua đồ.'},
   ],
   hanzi:[
     {c:'去',p:'qù',type:'上下结构 · Trên-dưới',st:5,ord:'土(thổ, biến thể) trên → 厶(khư) dưới',rad:'厶 (khư – riêng, tự mình)',mean:'đi, rời khỏi',
      tip:'土(mặt đất) trên + 厶(người khom mình bước) dưới → hình ảnh rời mặt đất bước ĐI.',
      cf:'云 (yún – "mây", cũng có 厶 dưới nhưng phần trên khác)',w:'去超市 / 回去 / 出去'},
   ]},
  {n:6,zh:'哪儿',py:'nǎr',pos:'Đại từ',vn:'đâu, chỗ nào, nơi nào',em:'❓',lesson:2,
   ex_zh:'明天你去哪儿？',ex_py:'Míngtiān nǐ qù nǎr?',ex_vn:'Ngày mai bạn đi đâu?',
   exList:[
     {zh:'明天你去哪儿？',py:'Míngtiān nǐ qù nǎr?',vn:'Ngày mai bạn đi đâu?'},
   ],
   hanzi:[
     {c:'哪',p:'nǎ',type:'左右结构 · Trái-phải',st:9,ord:'口(khẩu) trái → 那(na) phải',rad:'口 (khẩu – miệng)',mean:'đâu, nào (nghi vấn)',
      tip:'口(miệng, dùng để HỎI) + 那(kia, chỉ nơi chốn) → hỏi "nơi NÀO, ĐÂU".',
      cf:'那 (nà – "đó, kia", không có bộ 口")',w:'哪儿 / 哪里 / 哪个'},
     {c:'儿',p:'r',type:'独体字 · Chữ đơn',st:2,ord:'丿(phẩy) → 乙(cong móc), tượng hình đôi chân',rad:'儿 (nhi – tự thành bộ)',mean:'trẻ em; (hậu tố nhi hoá "儿化")',
      tip:'儿 vẽ hình đôi CHÂN người đang bước, tượng trưng cho TRẺ NHỎ; khi ghép cuối từ tạo âm uốn lưỡi "nhi hoá".',
      cf:'几 (jǐ – "mấy, bao nhiêu", nét trên khác)',w:'哪儿 / 儿子 / 女儿'},
   ]},
  {n:7,zh:'想',py:'xiǎng',pos:'Động từ năng nguyện',vn:'muốn',em:'💭',lesson:2,
   ex_zh:'我想去超市买东西。',ex_py:'Wǒ xiǎng qù chāoshì mǎi dōngxi.',ex_vn:'Mình muốn đi siêu thị mua đồ.',
   exList:[
     {zh:'我想去超市买东西。',py:'Wǒ xiǎng qù chāoshì mǎi dōngxi.',vn:'Mình muốn đi siêu thị mua đồ.'},
     {zh:'我哥哥不想休息。',py:'Wǒ gēge bù xiǎng xiūxi.',vn:'Anh trai tôi không muốn nghỉ.'},
   ],
   hanzi:[
     {c:'想',p:'xiǎng',type:'上下结构 · Trên-dưới',st:13,ord:'相(tương) trên → 心(tâm) dưới',rad:'心 (tâm – trái tim, tấm lòng)',mean:'muốn, nghĩ, nhớ',
      tip:'相(nhìn, quan sát) trên + 心(trái tim) dưới → trong LÒNG suy NGHĨ, tưởng tượng, từ đó thành MUỐN.',
      cf:'相 (xiāng – "lẫn nhau", thiếu bộ 心 phía dưới)',w:'想去 / 我想 / 理想'},
   ]},
  {n:8,zh:'超市',py:'chāoshì',pos:'Danh từ',vn:'siêu thị',em:'🏪',lesson:2,
   ex_zh:'我想去超市买东西。',ex_py:'Wǒ xiǎng qù chāoshì mǎi dōngxi.',ex_vn:'Mình muốn đi siêu thị mua đồ.',
   exList:[
     {zh:'我想去超市买东西。',py:'Wǒ xiǎng qù chāoshì mǎi dōngxi.',vn:'Mình muốn đi siêu thị mua đồ.'},
   ],
   hanzi:[
     {c:'超',p:'chāo',type:'半包围结构 · Bán bao vây',st:12,ord:'走(tẩu) bao ngoài trái-dưới → 召(triệu) trong',rad:'走 (tẩu – đi, chạy)',mean:'vượt qua, siêu',
      tip:'走(chạy, đi) bao lấy 召(gọi, triệu tập) → chạy VƯỢT lên trước, ý SIÊU VIỆT.',
      cf:'起 (qǐ – "bắt đầu, dậy", cũng có bộ 走")',w:'超市 / 超过'},
     {c:'市',p:'shì',type:'上下结构 · Trên-dưới',st:5,ord:'亠 trên → 巾(cân) dưới',rad:'巾 (cân – khăn, vải)',mean:'chợ, thành phố',
      tip:'亠(mái che) trên + 巾(vải, hàng hoá) dưới → nơi bày VẢI VÓC hàng hoá để buôn bán, tức CHỢ.',
      cf:'布 (bù – "vải", cũng có bộ 巾 nhưng phần trên là 十")',w:'超市 / 市场 / 城市'},
   ]},
  {n:9,zh:'买',py:'mǎi',pos:'Động từ',vn:'mua',em:'🛒',lesson:2,
   ex_zh:'你去超市买什么？',ex_py:'Nǐ qù chāoshì mǎi shénme?',ex_vn:'Bạn đi siêu thị mua gì vậy?',
   exList:[
     {zh:'你去超市买什么？',py:'Nǐ qù chāoshì mǎi shénme?',vn:'Bạn đi siêu thị mua gì vậy?'},
     {zh:'我想买些牛奶。',py:'Wǒ xiǎng mǎi xiē niúnǎi.',vn:'Mình muốn mua ít sữa.'},
   ],
   hanzi:[
     {c:'买',p:'mǎi',type:'独体字 · Chữ đơn',st:6,ord:'丶丶(hai chấm) trên → 大(cách điệu) dưới, viết liền một khối',rad:'买 (mãi – tự thành bộ)',mean:'mua',
      tip:'买 là chữ giản thể của 買 (网+贝, lưới chụp lấy tiền), giữ lại nét trên như cái LƯỚI hạ xuống để THU vào → nghĩa MUA.',
      cf:'卖 (mài – "bán", thêm nét 十 trên đầu, rất dễ nhầm vì hình gần giống)',w:'买东西 / 买菜 / 买卖'},
   ]},
  {n:10,zh:'东西',py:'dōngxi',pos:'Danh từ',vn:'đồ, đồ đạc',em:'📦',lesson:2,
   ex_zh:'我想去超市买东西。',ex_py:'Wǒ xiǎng qù chāoshì mǎi dōngxi.',ex_vn:'Mình muốn đi siêu thị mua đồ.',
   exList:[
     {zh:'我想去超市买东西。',py:'Wǒ xiǎng qù chāoshì mǎi dōngxi.',vn:'Mình muốn đi siêu thị mua đồ.'},
   ],
   hanzi:[
     {c:'东',p:'dōng',type:'独体字 · Chữ đơn',st:5,ord:'一(ngang) → 七(cách điệu ở giữa) → 丨 xuyên giữa, viết liền một khối',rad:'东 (đông – tự thành bộ)',mean:'hướng đông; (trong 东西: đồ vật)',
      tip:'东 là hình cách điệu mặt trời 日 ló ra sau luỹ cây 木, hướng mặt trời MỌC chính là hướng ĐÔNG.',
      cf:'车 (chē – "xe", khung hình chữ nhật gần giống)',w:'东西 / 东边 / 山东'},
     {c:'西',p:'xi',type:'独体字 · Chữ đơn',st:6,ord:'一(ngang) trên → 口(cách điệu) dưới, viết liền một khối',rad:'西 (tây – tự thành bộ)',mean:'hướng tây; (trong 东西: đồ vật, đọc nhẹ)',
      tip:'西 vẽ hình một CHIẾC TỔ CHIM trên cành lúc mặt trời lặn về hướng TÂY, chim bay về tổ trú ngụ.',
      cf:'酉 (yǒu – "chi Dậu", hình gần giống nhưng có thêm nét ngang giữa)',w:'东西 / 西安 / 西边'},
   ]},
  {n:11,zh:'些',py:'xiē',pos:'Lượng từ',vn:'một ít, một vài',em:'🔸',lesson:2,
   ex_zh:'我想买些牛奶。',ex_py:'Wǒ xiǎng mǎi xiē niúnǎi.',ex_vn:'Mình muốn mua ít sữa.',
   exList:[
     {zh:'我想买些牛奶。',py:'Wǒ xiǎng mǎi xiē niúnǎi.',vn:'Mình muốn mua ít sữa.'},
   ],
   hanzi:[
     {c:'些',p:'xiē',type:'上下结构 · Trên-dưới',st:8,ord:'此(thử) trên → 二(nhị, biến thể) dưới',rad:'二 (nhị – hai)',mean:'một ít, vài (lượng từ)',
      tip:'此(cái này, ở đây) trên + 二(hai, số lượng nhỏ) dưới → chỉ MỘT VÀI cái ở ngay đây.',
      cf:'此 (cǐ – "này, đây", không có bộ 二 phía dưới)',w:'一些 / 有些 / 这些'},
   ]},
  {n:12,zh:'牛奶',py:'niúnǎi',pos:'Danh từ',vn:'sữa (bò)',em:'🥛',lesson:2,
   ex_zh:'我想买些牛奶。',ex_py:'Wǒ xiǎng mǎi xiē niúnǎi.',ex_vn:'Mình muốn mua ít sữa.',
   exList:[
     {zh:'我想买些牛奶。',py:'Wǒ xiǎng mǎi xiē niúnǎi.',vn:'Mình muốn mua ít sữa.'},
   ],
   hanzi:[
     {c:'牛',p:'niú',type:'独体字 · Chữ đơn',st:4,ord:'丿(phẩy) → 一 → 十(cách điệu, hai sừng và thân), viết liền một khối',rad:'牛 (ngưu – tự thành bộ)',mean:'trâu, bò',
      tip:'牛 vẽ hình đầu con TRÂU/BÒ nhìn từ phía trước với hai chiếc SỪNG cong lên trên.',
      cf:'午 (wǔ – "buổi trưa", nét trên không nhô lên như sừng)',w:'牛奶 / 牛肉 / 牛年'},
     {c:'奶',p:'nǎi',type:'左右结构 · Trái-phải',st:5,ord:'女(nữ) trái → 乃(nãi) phải',rad:'女 (nữ – phụ nữ)',mean:'sữa; bà (nội/ngoại)',
      tip:'女(người mẹ) + 乃(cho, ban cho) → người mẹ CHO con bú, nghĩa là SỮA.',
      cf:'奴 (nú – "nô lệ", cũng bộ 女 trái nhưng phải là 又")',w:'牛奶 / 奶奶 / 奶茶'},
   ]},
  {n:13,zh:'吃',py:'chī',pos:'Động từ',vn:'ăn',em:'🍽️',lesson:3,
   ex_zh:'星期天我们去哪儿吃晚饭？',ex_py:'Xīngqītiān wǒmen qù nǎr chī wǎnfàn?',ex_vn:'Chủ nhật này nhà mình đi đâu ăn tối nhỉ?',
   exList:[
     {zh:'星期天我们去哪儿吃晚饭？',py:'Xīngqītiān wǒmen qù nǎr chī wǎnfàn?',vn:'Chủ nhật này nhà mình đi đâu ăn tối nhỉ?'},
   ],
   hanzi:[
     {c:'吃',p:'chī',type:'左右结构 · Trái-phải',st:6,ord:'口(khẩu) trái → 乞(khất) phải',rad:'口 (khẩu – miệng)',mean:'ăn',
      tip:'口(miệng) + 乞(xin, cầu xin) → dùng MIỆNG để xin thức ĂN, nghĩa là ĂN.',
      cf:'吗 (ma – trợ từ nghi vấn, cũng bộ 口 trái nhưng phải là 马")',w:'吃饭 / 好吃 / 吃包子'},
   ]},
  {n:14,zh:'晚饭',py:'wǎnfàn',pos:'Danh từ',vn:'bữa tối',em:'🌃',lesson:3,
   ex_zh:'星期天我们去哪儿吃晚饭？',ex_py:'Xīngqītiān wǒmen qù nǎr chī wǎnfàn?',ex_vn:'Chủ nhật này nhà mình đi đâu ăn tối nhỉ?',
   exList:[
     {zh:'星期天我们去哪儿吃晚饭？',py:'Xīngqītiān wǒmen qù nǎr chī wǎnfàn?',vn:'Chủ nhật này nhà mình đi đâu ăn tối nhỉ?'},
   ],
   hanzi:[
     {c:'晚',p:'wǎn',type:'左右结构 · Trái-phải',st:11,ord:'日(nhật) trái → 免(miễn) phải',rad:'日 (nhật – mặt trời)',mean:'buổi tối, muộn',
      tip:'日(mặt trời) + 免(thoát khỏi, tránh) → khi mặt trời dần THOÁT khỏi bầu trời (lặn), trời về TỐI, MUỘN.',
      cf:'免 (miǎn – "miễn, tránh", thiếu bộ 日 bên trái)',w:'晚饭 / 晚上 / 昨晚'},
     {c:'饭',p:'fàn',type:'左右结构 · Trái-phải',st:7,ord:'饣(thực) trái → 反(phản) phải',rad:'饣 (thực – ăn, đồ ăn)',mean:'cơm, bữa ăn',
      tip:'饣(bộ ăn/thức ăn) + 反(lật qua lật lại) → hành động XỚI CƠM qua lại trong bát, nghĩa là CƠM.',
      cf:'反 (fǎn – "trái lại", thiếu bộ 饣 bên trái)',w:'晚饭 / 米饭 / 吃饭'},
   ]},
  {n:15,zh:'那边',py:'nàbiān',pos:'Đại từ',vn:'bên kia, chỗ đó',em:'👉',lesson:3,
   ex_zh:'那边的包子非常好吃。',ex_py:'Nàbiān de bāozi fēicháng hǎochī.',ex_vn:'Bánh bao ở đó rất ngon.',
   exList:[
     {zh:'那边的包子非常好吃。',py:'Nàbiān de bāozi fēicháng hǎochī.',vn:'Bánh bao ở đó rất ngon.'},
   ],
   hanzi:[
     {c:'那',p:'nà',type:'左右结构 · Trái-phải',st:6,ord:'冄(biến thể) trái → 阝(ấp) phải',rad:'阝 (ấp – vùng đất, thành ấp)',mean:'đó, kia (chỉ định)',
      tip:'阝(bên phải, biểu thị một vùng đất/nơi chốn) ghép với phần bên trái → CHỈ đến vật/nơi ở XA, tức "ĐÓ, KIA".',
      cf:'哪 (nǎ – "nào, đâu", thêm bộ 口 bên trái để thành từ hỏi)',w:'那边 / 那儿 / 那个'},
     {c:'边',p:'biān',type:'半包围结构 · Bán bao vây',st:5,ord:'辶(sước) bao ngoài dưới-trái → 力(lực, biến thể) trong',rad:'辶 (sước – đi, chuyển động)',mean:'bên, phía, cạnh',
      tip:'辶(đi, di chuyển) bao lấy phần trong → đi dọc theo RÌA, CẠNH của một khu vực, nghĩa là BÊN, PHÍA.',
      cf:'力 (lì – "sức lực", thành phần bên trong của 边 nhưng đứng độc lập)',w:'那边 / 边 / 旁边'},
   ]},
  {n:16,zh:'包子',py:'bāozi',pos:'Danh từ',vn:'bánh bao (có nhân)',em:'🥟',lesson:3,
   ex_zh:'我想吃包子。',ex_py:'Wǒ xiǎng chī bāozi.',ex_vn:'Con muốn ăn bánh bao.',
   exList:[
     {zh:'我想吃包子。',py:'Wǒ xiǎng chī bāozi.',vn:'Con muốn ăn bánh bao.'},
   ],
   hanzi:[
     {c:'包',p:'bāo',type:'半包围结构 · Bán bao vây',st:5,ord:'勹(bao) ngoài → 巳(tỵ, biến thể) trong',rad:'勹 (bao – bao bọc)',mean:'gói, bọc, cái túi',
      tip:'勹(hình người cong mình ôm lấy) bao lấy 巳(bào thai) → hình ảnh BỌC, GÓI một vật ở bên trong.',
      cf:'句 (jù – "câu", hình ngoài gần giống nhưng bên trong là 口")',w:'包子 / 面包 / 书包'},
     {c:'子',p:'zi',type:'独体字 · Chữ đơn',st:3,ord:'了(móc, đầu và tay) → 一(ngang, cánh tay quấn khăn)',rad:'子 (tử – tự thành bộ)',mean:'con, con trai; (hậu tố danh từ)',
      tip:'子 vẽ hình một ĐỨA TRẺ SƠ SINH đầu to, hai tay dang ra, được quấn trong khăn.',
      cf:'孑 (jié – "cô độc", thiếu một nét so với 子")',w:'包子 / 儿子 / 孩子'},
   ]},
  {n:17,zh:'非常',py:'fēicháng',pos:'Phó từ',vn:'rất, vô cùng, cực kỳ',em:'💯',lesson:3,
   ex_zh:'那边的包子非常好吃。',ex_py:'Nàbiān de bāozi fēicháng hǎochī.',ex_vn:'Bánh bao ở đó rất ngon.',
   exList:[
     {zh:'那边的包子非常好吃。',py:'Nàbiān de bāozi fēicháng hǎochī.',vn:'Bánh bao ở đó rất ngon.'},
   ],
   hanzi:[
     {c:'非',p:'fēi',type:'独体字 · Chữ đơn',st:8,ord:'丿丨(bên trái) → 丨三 ngang (bên phải), hai bên đối xứng ngược chiều',rad:'非 (phi – tự thành bộ)',mean:'không, sai, phi (phủ định)',
      tip:'非 vẽ hình hai CÁNH CHIM xoè ra ngược chiều nhau, ý chỉ sự TRÁI NGƯỢC, KHÔNG đúng.',
      cf:'韭 (jiǔ – "rau hẹ", hình gần giống nhưng thêm nét ngang trên cùng)',w:'非常 / 非法 / 除非'},
     {c:'常',p:'cháng',type:'上下结构 · Trên-dưới',st:11,ord:'尚(thượng, biến thể) trên → 巾(cân) dưới',rad:'巾 (cân – khăn, vải)',mean:'thường xuyên, bình thường',
      tip:'尚(còn, vẫn) trên + 巾(vải, dùng may y phục) dưới → y phục vẫn mặc THƯỜNG NGÀY, nghĩa là THƯỜNG XUYÊN.',
      cf:'堂 (táng – "nhà, sảnh đường", phần trên giống nhưng dưới là 土")',w:'非常 / 常常 / 平常'},
   ]},
  {n:18,zh:'好吃',py:'hǎochī',pos:'Tính từ',vn:'ngon',em:'😋',lesson:3,
   ex_zh:'那边的包子非常好吃。',ex_py:'Nàbiān de bāozi fēicháng hǎochī.',ex_vn:'Bánh bao ở đó rất ngon.',
   exList:[
     {zh:'那边的包子非常好吃。',py:'Nàbiān de bāozi fēicháng hǎochī.',vn:'Bánh bao ở đó rất ngon.'},
   ],
   hanzi:[
     {c:'好',p:'hǎo',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 子(tử) phải',rad:'女 (nữ – phụ nữ)',mean:'tốt, đẹp, ngon',
      tip:'女(người mẹ) + 子(đứa con) → hình ảnh MẸ bên CON là điều TỐT ĐẸP nhất.',
      cf:'如 (rú – "như, giống", cũng bộ 女 trái nhưng phải là 口")',w:'好吃 / 你好 / 好的'},
     {c:'吃',p:'chī',type:'左右结构 · Trái-phải',st:6,ord:'口(khẩu) trái → 乞(khất) phải',rad:'口 (khẩu – miệng)',mean:'ăn',
      tip:'口(miệng) + 乞(xin, cầu xin) → dùng MIỆNG để xin thức ĂN, nghĩa là ĂN.',
      cf:'吗 (ma – trợ từ nghi vấn, cũng bộ 口 trái nhưng phải là 马")',w:'好吃 / 吃饭 / 吃包子'},
   ]},
  {n:19,zh:'米饭',py:'mǐfàn',pos:'Danh từ',vn:'cơm (cơm trắng)',em:'🍚',lesson:3,
   ex_zh:'妈妈，我想吃米饭，不想吃包子。',ex_py:'Māma, wǒ xiǎng chī mǐfàn, bù xiǎng chī bāozi.',ex_vn:'Mẹ ơi, con muốn ăn cơm, không muốn ăn bánh bao đâu.',
   exList:[
     {zh:'妈妈，我想吃米饭，不想吃包子。',py:'Māma, wǒ xiǎng chī mǐfàn, bù xiǎng chī bāozi.',vn:'Mẹ ơi, con muốn ăn cơm, không muốn ăn bánh bao đâu.'},
   ],
   hanzi:[
     {c:'米',p:'mǐ',type:'独体字 · Chữ đơn',st:6,ord:'丶丿(hai nét chéo) → 十(chữ thập giữa) → 丶丶(hai chấm dưới)',rad:'米 (mễ – tự thành bộ)',mean:'gạo',
      tip:'米 vẽ hình các HẠT GẠO nhỏ rơi rải quanh một dấu thập, tượng trưng cho những hạt GẠO.',
      cf:'未 (wèi – "chưa", hình gần giống nhưng thiếu hai chấm hai bên)',w:'米饭 / 大米 / 玉米'},
     {c:'饭',p:'fàn',type:'左右结构 · Trái-phải',st:7,ord:'饣(thực) trái → 反(phản) phải',rad:'饣 (thực – ăn, đồ ăn)',mean:'cơm, bữa ăn',
      tip:'饣(bộ ăn/thức ăn) + 反(lật qua lật lại) → hành động XỚI CƠM qua lại trong bát, nghĩa là CƠM.',
      cf:'反 (fǎn – "trái lại", thiếu bộ 饣 bên trái)',w:'米饭 / 晚饭 / 吃饭'},
   ]},
  {n:20,zh:'怎么',py:'zěnme',pos:'Đại từ',vn:'thế nào, bằng cách nào',em:'🤔',lesson:3,
   ex_zh:'我们怎么去？',ex_py:'Wǒmen zěnme qù?',ex_vn:'Chúng ta đi thế nào nhỉ?',
   exList:[
     {zh:'我们怎么去？',py:'Wǒmen zěnme qù?',vn:'Chúng ta đi thế nào nhỉ?'},
   ],
   hanzi:[
     {c:'怎',p:'zěn',type:'上下结构 · Trên-dưới',st:9,ord:'乍(sạ) trên → 心(tâm) dưới',rad:'心 (tâm – trái tim, tấm lòng)',mean:'sao, thế nào (nghi vấn)',
      tip:'乍(bỗng nhiên) trên + 心(lòng, tâm trí) dưới → trong LÒNG bỗng thắc mắc không biết phải làm SAO.',
      cf:'作 (zuò – "làm", cũng có 乍 nhưng bộ trái là 亻")',w:'怎么 / 怎样 / 怎么样'},
     {c:'么',p:'me',type:'独体字 · Chữ đơn',st:3,ord:'丿(phẩy) → 乙(cong) → 丶(chấm), viết liền một khối nhỏ gọn',rad:'么 (ma – tự thành bộ)',mean:'(trợ từ nghi vấn, không mang nghĩa riêng)',
      tip:'么 là chữ nhẹ, thường đứng sau các từ hỏi như 怎么, 什么 để tạo thành TỪ NGHI VẤN, bản thân không mang nghĩa cụ thể.',
      cf:'幺 (yāo – "nhỏ, số 1 khi đọc số điện thoại", hình gần giống nhưng thêm nét)',w:'怎么 / 什么 / 那么'},
   ]},
  {n:21,zh:'坐',py:'zuò',pos:'Động từ',vn:'ngồi, đi (xe, tàu...)',em:'🚕',lesson:3,
   ex_zh:'坐出租车去。',ex_py:'Zuò chūzūchē qù.',ex_vn:'Đi taxi nhé.',
   exList:[
     {zh:'坐出租车去。',py:'Zuò chūzūchē qù.',vn:'Đi taxi nhé.'},
   ],
   hanzi:[
     {c:'坐',p:'zuò',type:'上下结构 · Trên-dưới',st:7,ord:'从(hai chữ 人) trên → 土(thổ) dưới',rad:'土 (thổ – đất)',mean:'ngồi',
      tip:'从(hai NGƯỜI) trên + 土(mặt ĐẤT) dưới → hình ảnh hai người NGỒI trên mặt đất.',
      cf:'座 (zuò – "chỗ ngồi, toà" (danh từ), thêm bộ 广 bao ngoài)',w:'坐出租车 / 坐下 / 请坐'},
   ]},
  {n:22,zh:'出租车',py:'chūzūchē',pos:'Danh từ',vn:'xe taxi',em:'🚖',lesson:3,
   ex_zh:'坐出租车去。',ex_py:'Zuò chūzūchē qù.',ex_vn:'Đi taxi nhé.',
   exList:[
     {zh:'坐出租车去。',py:'Zuò chūzūchē qù.',vn:'Đi taxi nhé.'},
   ],
   hanzi:[
     {c:'出',p:'chū',type:'独体字 · Chữ đơn',st:5,ord:'凵(hố) → 山(cách điệu bàn chân bước ra), viết liền một khối',rad:'凵 (khảm – hố, miệng hố)',mean:'ra, xuất hiện',
      tip:'出 vẽ hình một BÀN CHÂN bước RA khỏi hang/hố (凵), nghĩa là ĐI RA, XUẤT HIỆN.',
      cf:'山 (shān – "núi", hình dáng gần giống nhưng nét khác)',w:'出租车 / 出去 / 出来'},
     {c:'租',p:'zū',type:'左右结构 · Trái-phải',st:10,ord:'禾(hoà) trái → 且(thả) phải',rad:'禾 (hoà – lúa, thóc)',mean:'thuê, cho thuê',
      tip:'禾(lúa, thóc – dùng nộp làm tô thuế thời xưa) + 且(thêm vào, tích luỹ) → nộp THÓC để THUÊ đất, nghĩa là THUÊ.',
      cf:'组 (zǔ – "tổ, nhóm", bộ trái là 纟 thay vì 禾")',w:'出租车 / 租房 / 房租'},
     {c:'车',p:'chē',type:'独体字 · Chữ đơn',st:4,ord:'一(ngang trên) → 丨 xuyên giữa → 一(ngang dưới) → 一(đáy), cách điệu bánh xe và trục',rad:'车 (xa – tự thành bộ)',mean:'xe, xe cộ',
      tip:'车 là hình giản lược của một chiếc XE nhìn từ trên xuống với khung và trục bánh xe.',
      cf:'东 (dōng – "hướng đông", khung hình gần giống)',w:'出租车 / 汽车 / 公交车'},
   ]},
  {n:23,zh:'西安饭店',py:'Xī\'ān Fàndiàn',pos:'Danh từ riêng',vn:'nhà hàng Tây An',em:'🏮',lesson:3,
   ex_zh:'我还想去西安饭店。',ex_py:'Wǒ hái xiǎng qù Xī\'ān Fàndiàn.',ex_vn:'Bố vẫn muốn đến nhà hàng Tây An.',
   exList:[
     {zh:'我还想去西安饭店。',py:'Wǒ hái xiǎng qù Xī\'ān Fàndiàn.',vn:'Bố vẫn muốn đến nhà hàng Tây An.'},
   ],
   hanzi:[
     {c:'西',p:'xī',type:'独体字 · Chữ đơn',st:6,ord:'一(ngang) trên → 口(cách điệu) dưới, viết liền một khối',rad:'西 (tây – tự thành bộ)',mean:'hướng tây (trong 西安: tên riêng)',
      tip:'西 vẽ hình một CHIẾC TỔ CHIM trên cành lúc mặt trời lặn về hướng TÂY, chim bay về tổ trú ngụ.',
      cf:'酉 (yǒu – "chi Dậu", hình gần giống nhưng có thêm nét ngang giữa)',w:'西安 / 东西 / 西边'},
     {c:'安',p:'ān',type:'上下结构 · Trên-dưới',st:6,ord:'宀(miên) trên → 女(nữ) dưới',rad:'宀 (miên – mái nhà)',mean:'yên ổn, an toàn',
      tip:'宀(mái nhà) trên + 女(người phụ nữ) dưới → người phụ nữ ở trong NHÀ thì được AN TOÀN, YÊN ỔN.',
      cf:'案 (àn – "vụ án, bàn án", thêm bộ 木 phía dưới)',w:'西安 / 安全 / 平安'},
     {c:'饭',p:'fàn',type:'左右结构 · Trái-phải',st:7,ord:'饣(thực) trái → 反(phản) phải',rad:'饣 (thực – ăn, đồ ăn)',mean:'cơm, bữa ăn',
      tip:'饣(bộ ăn/thức ăn) + 反(lật qua lật lại) → hành động XỚI CƠM qua lại trong bát, nghĩa là CƠM.',
      cf:'反 (fǎn – "trái lại", thiếu bộ 饣 bên trái)',w:'饭店 / 米饭 / 晚饭'},
     {c:'店',p:'diàn',type:'半包围结构 · Bán bao vây',st:8,ord:'广(nghiễm) bao ngoài trên-trái → 占(chiếm) trong',rad:'广 (nghiễm – mái nhà, mái hiên)',mean:'cửa hàng, tiệm, quán',
      tip:'广(mái nhà, mái hiên rộng) bao lấy 占(chiếm giữ, đặt để) → nơi bày hàng CHIẾM một chỗ dưới mái hiên, tức CỬA HÀNG.',
      cf:'占 (zhàn – "chiếm giữ", thiếu bộ 广 bên ngoài)',w:'饭店 / 商店 / 店里'},
   ]},
];

var wuData = [
  {img:'📱',label:'手机',py:'shǒujī',letter:'A'},
  {img:'🍚',label:'晚饭',py:'wǎnfàn',letter:'B'},
  {img:'🏪',label:'超市',py:'chāoshì',letter:'C'},
  {img:'🥛',label:'牛奶',py:'niúnǎi',letter:'D'},
  {img:'🚖',label:'出租车',py:'chūzūchē',letter:'E'},
  {img:'🍙',label:'米饭',py:'mǐfàn',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 6: Ngữ âm + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-6/wb-yuyin.mp3',
      blocks: [
        { type: 'table', caption: '儿化 (Erhua) — biến âm thêm "儿" cuối từ',
          headers: ['Từ gốc', 'Từ loại', 'Đọc chuyển "儿"', 'Từ loại'],
          rows: [
            ['这 zhè', 'đại từ', '这儿 zhèr', 'đại từ'],
            ['哪 nǎ', 'đại từ', '哪儿 nǎr', 'đại từ'],
            ['画 huà', 'động từ', '画儿 huàr', 'danh từ'],
            ['盖 gài', 'động từ', '盖儿 gàir', 'danh từ'],
            ['个 gè', 'lượng từ', '个儿 gèr', 'danh từ'],
            ['眼 yǎn', 'danh từ', '眼儿 yǎnr', 'danh từ']
          ],
          note: 'Thêm "儿 (ér)" vào cuối một số từ mang sắc thái nhỏ nhắn, đáng yêu, đôi khi làm thay đổi nghĩa hoặc từ loại của từ đó.' },
        { type: 'photos', items: [
          {img:'/images/hsk1v3-bai-6-wb/miantiaor.jpg', py:'miàntiáor', hz:'面条儿'},
          {img:'/images/hsk1v3-bai-6-wb/haowanr.jpg', py:'hǎowánr', hz:'好玩儿'},
          {img:'/images/hsk1v3-bai-6-wb/yidianr.jpg', py:'yìdiǎnr', hz:'一点儿'},
          {img:'/images/hsk1v3-bai-6-wb/fangguanr.jpg', py:'fànguǎnr', hz:'饭馆（儿）'},
          {img:'/images/hsk1v3-bai-6-wb/nar.jpg', py:'nàr', hz:'那儿'},
          {img:'/images/hsk1v3-bai-6-wb/zher.jpg', py:'zhèr', hz:'这儿'},
          {img:'/images/hsk1v3-bai-6-wb/wanr.jpg', py:'wánr', hz:'玩（儿）'},
          {img:'/images/hsk1v3-bai-6-wb/ger.jpg', py:'gēr', hz:'歌（儿）'}
        ] },
        { type: 'table', caption: 'Quy tắc chính tả — dấu ngăn cách âm tiết ( \' )',
          rows: [
            ['shí\'èr (十二)', 'Xī\'ān (西安)', 'Tiān\'ān Mén (天安门)']
          ],
          note: 'Khi một âm tiết bắt đầu bằng "a, o, e" đứng liền sau âm tiết khác, dùng dấu ngăn cách ( \' ) ở giữa 2 âm tiết để tránh nhầm ranh giới âm tiết.' }
      ]
    },
    {
      title: 'Nghe và đọc luyện tập',
      audio: '/audio/hsk1v3-bai-6/wb-tingdu.mp3',
      blocks: [
        { type: 'tonemc', caption: 'Nghe và chọn song âm tiết nghe được, đọc to',
          items: [
            {before:'', after:'', answer:'nàbiān', options:['nàpiān','nàbiān']},
            {before:'', after:'', answer:'dōngxi', options:['dōngxi','dōngxī']},
            {before:'', after:'', answer:'chāoshì', options:['chāoshì','chāoshī']},
            {before:'', after:'', answer:'wǎnfàn', options:['wǎnfàn','wǎnfēng']},
            {before:'', after:'', answer:'shǒujī', options:['shǒují','shǒujī']},
            {before:'', after:'', answer:'diànhuà', options:['diànhuà','biànhuà']}
          ] },
        { type: 'wordlist', caption: 'Nghe và phân biệt phát âm儿化 với không儿化, đọc theo',
          items: [['nà', 'nàr'], ['cí', 'cír'], ['huàr', 'huà'], ['yíkuàir', 'yíkuài'], ['jiāyóu', 'jiāyóur'], ['chànggē', 'chànggēr']] }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-6/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-6-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-6-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-6-wb/q1c.jpg'}
            ], answer: 'B' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-6-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-6-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-6-wb/q2c.jpg'}
            ], answer: 'B' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-6-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-6-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-6-wb/q3c.jpg'}
            ], answer: 'C' },
            { n: 4, options: [
              {key:'A', text:'超市', py:'chāoshì'},
              {key:'B', text:'做饭', py:'zuò fàn'},
              {key:'C', text:'东西', py:'dōngxi'}
            ], answer: 'A' },
            { n: 5, options: [
              {key:'A', text:'去', py:'qù'},
              {key:'B', text:'西安饭店', py:'Xī\'ān Fàndiàn'},
              {key:'C', text:'坐出租车', py:'zuò chūzūchē'}
            ], answer: 'C' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-6-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-6-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-6-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-6-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-6-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-6-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-6-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-6-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-6-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-6-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-6-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-6-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 9, options: [
              {key:'A', text:'5362805', py:''},
              {key:'B', text:'5398205', py:''},
              {key:'C', text:'5326085', py:''}
            ], answer: 'A' },
            { n: 10, options: [
              {key:'A', text:'包子', py:'bāozi'},
              {key:'B', text:'饺子', py:'jiǎozi'},
              {key:'C', text:'面条儿', py:'miàntiáor'}
            ], answer: 'C' }
          ],
          reading: [
            { n: 11, prompt: '我有一个新电脑。', promptPy: 'Wǒ yǒu yí gè xīn diànnǎo.', options: [
              {key:'A', img:'/images/hsk1v3-bai-6-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-6-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-6-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-6-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 12, prompt: '今天星期二。', promptPy: 'Jīntiān Xīngqī\'èr.', options: [
              {key:'A', img:'/images/hsk1v3-bai-6-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-6-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-6-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-6-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 13, prompt: '我想去超市买东西。', promptPy: 'Wǒ xiǎng qù chāoshì mǎi dōngxi.', options: [
              {key:'A', img:'/images/hsk1v3-bai-6-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-6-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-6-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-6-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 14, prompt: '你吃什么？', promptPy: 'Nǐ chī shénme?', options: [
              {key:'A', text:'坐出租车。', py:'Zuò chūzūchē.'},
              {key:'B', text:'真好看！', py:'Zhēn hǎokàn!'},
              {key:'C', text:'包子。', py:'Bāozi.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'C' },
            { n: 15, prompt: '我们怎么去？', promptPy: 'Wǒmen zěnme qù?', options: [
              {key:'A', text:'坐出租车。', py:'Zuò chūzūchē.'},
              {key:'B', text:'真好看！', py:'Zhēn hǎokàn!'},
              {key:'C', text:'包子。', py:'Bāozi.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'A' },
            { n: 16, prompt: '这是老师的新电脑。', promptPy: 'Zhè shì lǎoshī de xīn diànnǎo.', options: [
              {key:'A', text:'坐出租车。', py:'Zuò chūzūchē.'},
              {key:'B', text:'真好看！', py:'Zhēn hǎokàn!'},
              {key:'C', text:'包子。', py:'Bāozi.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'B' },
            { n: 17, prompt: '我想买（　）。', promptPy: 'Wǒ xiǎng mǎi ( ).', options: [
              {key:'A', text:'有', py:'yǒu'},
              {key:'B', text:'牛奶', py:'niúnǎi'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：我的手机号是 +86 13552721160。\n女：我（　）你的手机号，你的电话号呢？', promptPy: 'Wǒ de shǒujīhào shì... / Wǒ ( ) nǐ de shǒujīhào, nǐ de diànhuàhào ne?', options: [
              {key:'A', text:'有', py:'yǒu'},
              {key:'B', text:'牛奶', py:'niúnǎi'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '我家有三口人：爸爸、妈妈和我。\n★说话人家里有几口人？', promptPy: 'Wǒ jiā yǒu sān kǒu rén: bàba, māma hé wǒ.', options: [
              {key:'A', text:'三口人', py:'sān kǒu rén'},
              {key:'B', text:'四口人', py:'sì kǒu rén'},
              {key:'C', text:'六口人', py:'liù kǒu rén'}
            ], answer: 'A' },
            { n: 20, prompt: '明天星期天，我休息，想去超市买牛奶。\n★说话人想买什么？', promptPy: 'Míngtiān Xīngqītiān, wǒ xiūxi, xiǎng qù chāoshì mǎi niúnǎi.', options: [
              {key:'A', text:'菜', py:'cài'},
              {key:'B', text:'牛奶', py:'niúnǎi'},
              {key:'C', text:'饺子', py:'jiǎozi'}
            ], answer: 'B' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'李文向白家月要手机号 · Hỏi xin số điện thoại',
   preQuiz:[
     {q:'白家月手机号前面的国家区号是多少？',opts:['+33','+86','+84'],ans:0},
     {q:'李文手机号前面的国家区号是多少？',opts:['+33','+86','+84'],ans:1},
   ],
   lines:[
     {sp:0,zh:'家月，你的手机号是多少？',py:'Jiāyuè, nǐ de shǒujīhào shì duōshao?',vn:'Gia Nguyệt, số điện thoại di động của bạn là bao nhiêu?'},
     {sp:1,zh:'我的手机号是+33 601493190。',py:'Wǒ de shǒujīhào shì +33 601493190.',vn:'Số điện thoại di động của mình là +33 601493190.'},
     {sp:0,zh:'我的手机号是+86 13552721160。',py:'Wǒ de shǒujīhào shì +86 13552721160.',vn:'Số của mình là +86 13552721160.'},
     {sp:1,zh:'好的。',py:'Hǎo de.',vn:'Ừ.'},
   ]},
  {scene:'白家月和陈天中聊天 · Kế hoạch đi siêu thị',
   preQuiz:[
     {q:'白家月明天想去哪儿？',opts:['超市','学校','饭店'],ans:0},
     {q:'她想买什么？',opts:['牛奶','面包','水果'],ans:0},
   ],
   lines:[
     {sp:0,zh:'家月，明天你去哪儿？',py:'Jiāyuè, míngtiān nǐ qù nǎr?',vn:'Gia Nguyệt, ngày mai bạn đi đâu?'},
     {sp:1,zh:'我想去超市买东西。',py:'Wǒ xiǎng qù chāoshì mǎi dōngxi.',vn:'Mình muốn đi siêu thị mua đồ.'},
     {sp:0,zh:'你去超市买什么？',py:'Nǐ qù chāoshì mǎi shénme?',vn:'Bạn đi siêu thị mua gì vậy?'},
     {sp:1,zh:'我想买些牛奶。',py:'Wǒ xiǎng mǎi xiē niúnǎi.',vn:'Mình muốn mua ít sữa.'},
   ]},
  {scene:'王一雪一家讨论bữa tối cuối tuần · Kế hoạch ăn tối',
   preQuiz:[
     {q:'星期天他们打算去哪儿吃饭？',opts:['西安饭店','家里','超市'],ans:0},
     {q:'孩子最后说自己想吃什么？',opts:['米饭','包子','面条'],ans:0},
     {q:'他们怎么去饭店？',opts:['坐出租车','走路','坐公交车'],ans:0},
   ],
   lines:[
     {sp:0,zh:'星期天我们去哪儿吃晚饭？',py:'Xīngqītiān wǒmen qù nǎr chī wǎnfàn?',vn:'Chủ nhật này nhà mình đi đâu ăn tối nhỉ?'},
     {sp:1,zh:'我还想去西安饭店。',py:'Wǒ hái xiǎng qù Xī\'ān Fàndiàn.',vn:'Bố vẫn muốn đến nhà hàng Tây An.'},
     {sp:2,zh:'那边的包子非常好吃，我想吃包子。',py:'Nàbiān de bāozi fēicháng hǎochī, wǒ xiǎng chī bāozi.',vn:'Bánh bao ở đó rất ngon, con muốn ăn bánh bao.'},
     {sp:2,zh:'妈妈，我想吃米饭，不想吃包子。',py:'Māma, wǒ xiǎng chī mǐfàn, bù xiǎng chī bāozi.',vn:'Mẹ ơi, con muốn ăn cơm, không muốn ăn bánh bao đâu.'},
     {sp:0,zh:'好的。我们怎么去？',py:'Hǎo de. Wǒmen zěnme qù?',vn:'Được thôi. Chúng ta đi thế nào nhỉ?'},
     {sp:1,zh:'坐出租车去。',py:'Zuò chūzūchē qù.',vn:'Đi taxi nhé.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'手', right:'机'},
  {left:'超', right:'市'},
  {left:'东', right:'西'},
  {left:'牛', right:'奶'},
  {left:'包', right:'子'},
  {left:'出租', right:'车'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ audio + tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ (dựa theo bài tập tổng hợp thật trong sách)
// ══════════════════════════════════════════
var fillData = [
  {pre:'我想', blank:'去', post:'超市买牛奶。', hint:'(đi)', ans:'去'},
  {pre:'我想去超市', blank:'买', post:'牛奶。', hint:'(mua)', ans:'买'},
  {pre:'我们', blank:'坐', post:'出租车去西安饭店吃晚饭。', hint:'(ngồi, đi bằng)', ans:'坐'},
  {pre:'妈妈：你想吃什么？孩子：我想吃', blank:'米饭', post:'。', hint:'(cơm)', ans:'米饭'},
  {pre:'老师：你的手机号是', blank:'多少', post:'？', hint:'(bao nhiêu)', ans:'多少'},
  {pre:'王一雪想', blank:'坐', post:'出租车去超市。', hint:'(ngồi, đi bằng)', ans:'坐'},
  {pre:'这些包子非常', blank:'好吃', post:'。', hint:'(ngon)', ans:'好吃'},
  {pre:'她的', blank:'手机', post:'号是多少？', hint:'(điện thoại di động)', ans:'手机'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你','的','手机','号','是','多少','？'], ans:'你的手机号是多少？', audio:'你的手机号是多少？'},
  {words:['我','想','去','超市','买','东西','。'], ans:'我想去超市买东西。', audio:'我想去超市买东西。'},
  {words:['你','去','超市','买','什么','？'], ans:'你去超市买什么？', audio:'你去超市买什么？'},
  {words:['我们','去','哪儿','吃','晚饭','？'], ans:'我们去哪儿吃晚饭？', audio:'我们去哪儿吃晚饭？'},
  {words:['那边','的','包子','非常','好吃','。'], ans:'那边的包子非常好吃。', audio:'那边的包子非常好吃。'},
  {words:['我们','坐','出租车','去','。'], ans:'我们坐出租车去。', audio:'我们坐出租车去。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'Khi đọc số điện thoại, số "1" phải đọc là gì?', opts:['yāo', 'yī', 'yì', 'yí'], ans:0},
  {q:'"你的手机号是多少？" — vì sao dùng "多少" mà không dùng "几"?', opts:['多少 dùng khi số lượng lớn/không giới hạn chữ số', '几 mới đúng ngữ pháp', 'Không có sự khác biệt', '多少 chỉ dùng cho tuổi tác'], ans:0},
  {q:'"想" (động từ năng nguyện) biểu thị điều gì?', opts:['Mong muốn, dự định', 'Khả năng do học tập (giống 会)', 'Sự sở hữu', 'Sự phủ định'], ans:0},
  {q:'"我想去超市买东西" là câu gì?', opts:['Câu liên động biểu thị mục đích', 'Câu liên động biểu thị phương thức', 'Câu chữ 是', 'Câu vị ngữ danh từ'], ans:0},
  {q:'"坐出租车去" là câu gì?', opts:['Câu liên động biểu thị phương thức (đi bằng cách nào)', 'Câu liên động biểu thị mục đích', 'Câu nghi vấn', 'Câu phủ định'], ans:0},
  {q:'"怎么" dùng để hỏi về điều gì?', opts:['Phương thức thực hiện hành động', 'Số lượng', 'Thời gian', 'Địa điểm cụ thể'], ans:0},
  {q:'"我们怎么去？" trả lời phù hợp là gì?', opts:['坐出租车去', '去超市', '想买东西', '很好吃'], ans:0},
  {q:'"那边的包子非常好吃" — "非常" bổ nghĩa cho từ nào?', opts:['好吃', '包子', '那边', '的'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："你的手机号是多少？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Số điện thoại di động của bạn là bao nhiêu?" Bạn trả lời thế nào?',
     hint: '我的手机号是……', sample: '我的手机号是13801234567。', sample_vn: 'Số điện thoại di động của tôi là 13801234567.',
     note: 'Khi đọc số điện thoại, đọc từng chữ số một, số "1" đọc là "yāo".'},
    {q_zh: '朋友问你明天想去哪儿，你怎么回答？', q_vn: 'Bạn của bạn hỏi ngày mai bạn muốn đi đâu, bạn trả lời thế nào?',
     hint: '我想去……买/吃……', sample: '我想去超市买东西。', sample_vn: 'Tôi muốn đi siêu thị mua đồ.',
     note: 'Câu liên động: 去 + địa điểm + động từ mục đích (买东西/吃晚饭...).'},
    {q_zh: '有人问你："我们怎么去？" 你怎么回答？', q_vn: 'Có người hỏi: "Chúng ta đi thế nào?" Bạn trả lời thế nào?',
     hint: '坐……去。', sample: '坐出租车去。', sample_vn: 'Đi taxi nhé.',
     note: '怎么 hỏi về phương thức; trả lời bằng 坐 + phương tiện + 去.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Số điện thoại di động của bạn là bao nhiêu? — Số của tôi là 13552721160.', zh:'你的手机号是多少？——我的号是13552721160。', py:'Nǐ de shǒujīhào shì duōshao? — Wǒ de hào shì yāo sān wǔ wǔ èr qī èr yāo yāo liù líng.'},
  {vi:'Tôi muốn đi siêu thị mua ít sữa.', zh:'我想去超市买些牛奶。', py:'Wǒ xiǎng qù chāoshì mǎi xiē niúnǎi.'},
  {vi:'Bánh bao ở đó rất ngon, tôi muốn ăn bánh bao.', zh:'那边的包子非常好吃，我想吃包子。', py:'Nàbiān de bāozi fēicháng hǎochī, wǒ xiǎng chī bāozi.'},
  {vi:'Chúng ta đi thế nào? — Đi taxi nhé.', zh:'我们怎么去？——坐出租车去。', py:'Wǒmen zěnme qù? — Zuò chūzūchē qù.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Ngày mai bạn muốn đi đâu? — Tôi muốn đi siêu thị mua ít đồ.', zh:'明天你想去哪儿？——我想去超市买些东西。', py:'Míngtiān nǐ xiǎng qù nǎr? — Wǒ xiǎng qù chāoshì mǎi xiē dōngxi.'},
  {vi:'Cơm ở nhà hàng này rất ngon, con tôi rất thích ăn.', zh:'这家饭店的米饭非常好吃，我的孩子很喜欢吃。', py:'Zhè jiā fàndiàn de mǐfàn fēicháng hǎochī, wǒ de háizi hěn xǐhuan chī.'},
  {vi:'Anh trai tôi không muốn nghỉ, anh ấy muốn đi làm.', zh:'我哥哥不想休息，他想去上班。', py:'Wǒ gēge bù xiǎng xiūxi, tā xiǎng qù shàngbān.'},
  {vi:'Chúng tôi ngồi taxi đi siêu thị mua sữa và bánh bao.', zh:'我们坐出租车去超市买牛奶和包子。', py:'Wǒmen zuò chūzūchē qù chāoshì mǎi niúnǎi hé bāozi.'},
];
