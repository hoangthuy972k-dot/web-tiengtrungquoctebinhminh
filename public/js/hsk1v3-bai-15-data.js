// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 15: 大兴机场见！
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'爱',py:'ài',pos:'Động từ',vn:'thích, yêu thích',em:'❤️',lesson:1,
   ex_zh:'你们爱吃哪个菜？',ex_py:'Nǐmen ài chī nǎge cài?',ex_vn:'Các bạn thích món ăn nào?',
   exList:[{zh:'你们爱吃哪个菜？',py:'Nǐmen ài chī nǎge cài?',vn:'Các bạn thích món ăn nào?'}],
   hanzi:[
     {c:'爱',p:'ài',type:'上下结构 · Trên-dưới',st:10,ord:'爫(biến thể) trên → 友(biến thể) dưới',rad:'爫 (trảo – móng tay, biến thể)',mean:'yêu, thích',
      tip:'Hình bàn tay ôm lấy trái tim (chữ phồn thể 愛 có 心) → YÊU THƯƠNG.',
      cf:'受 (shòu – "nhận, chịu")',w:'爱吃 / 我爱你'},
   ]},
  {n:2,zh:'哪个',py:'nǎge',pos:'Đại từ',vn:'cái nào, nào',em:'❓',lesson:1,
   ex_zh:'你们爱吃哪个菜？',ex_py:'Nǐmen ài chī nǎge cài?',ex_vn:'Các bạn thích món ăn nào?',
   exList:[{zh:'你们爱吃哪个菜？',py:'Nǐmen ài chī nǎge cài?',vn:'Các bạn thích món ăn nào?'}],
   hanzi:[
     {c:'哪',p:'nǎ',type:'左右结构 · Trái-phải',st:9,ord:'口(khẩu) trái → 那(biến thể) phải',rad:'口 (khẩu – miệng)',mean:'đâu, nào (nghi vấn)',
      tip:'Bộ 口(miệng, dùng để hỏi) + 那(kia) → mở miệng hỏi "cái NÀO, ở ĐÂU".',
      cf:'那 (nà – "đó, kia", bỏ bộ 口 bên trái")',w:'哪个 / 哪里 / 哪儿'},
     {c:'个',p:'ge',type:'独体字 · Chữ đơn',st:3,ord:'丿→㇏→丨',rad:'人 (nhân – người)',mean:'cái, chiếc (lượng từ)',
      tip:'Chữ 人(người) thêm một nét sổ 丨 ở giữa như một que tính đếm → dùng làm LƯỢNG TỪ đếm người/vật chung chung.',
      cf:'介 (jiè – "giới thiệu", hình dáng gần giống")',w:'个人 / 一个 / 哪个'},
   ]},
  {n:3,zh:'去年',py:'qùnián',pos:'Danh từ',vn:'năm ngoái',em:'📅',lesson:2,
   ex_zh:'去年我和男朋友去了西安，今年我想去北京。',ex_py:'Qùnián wǒ hé nánpéngyou qùle Xī’ān, jīnnián wǒ xiǎng qù Běijīng.',ex_vn:'Năm ngoái mình và bạn trai đã đi Tây An, năm nay mình muốn đi Bắc Kinh.',
   exList:[{zh:'去年我和男朋友去了西安，今年我想去北京。',py:'Qùnián wǒ hé nánpéngyou qùle Xī’ān, jīnnián wǒ xiǎng qù Běijīng.',vn:'Năm ngoái mình và bạn trai đã đi Tây An, năm nay mình muốn đi Bắc Kinh.'}],
   hanzi:[
     {c:'去',p:'qù',type:'上下结构 · Trên-dưới',st:5,ord:'土(biến thể) trên → 厶(khư) dưới',rad:'厶 (khư – riêng tư)',mean:'đi, rời khỏi',
      tip:'Phần trên giống 土(mặt đất, nơi xuất phát), phần dưới 厶(người khom mình bước) → rời khỏi chỗ cũ để ĐI.',
      cf:'云 (yún – "mây, nói", phần trên dễ nhầm")',w:'去年 / 去哪儿 / 我去'},
     {c:'年',p:'nián',type:'独体字 · Tượng hình',st:6,ord:'丿→一→一→一→丨→一',rad:'干 (can)',mean:'năm',
      tip:'Hình bó lúa chín được gánh trên vai → mỗi mùa lúa chín là một NĂM.',
      cf:'午 (wǔ – "buổi trưa")',w:'去年 / 今年 / 明年'},
   ]},
  {n:4,zh:'男朋友',py:'nánpéngyou',pos:'Danh từ',vn:'bạn trai, người yêu',em:'💑',lesson:2,
   ex_zh:'去年我和男朋友去了西安，今年我想去北京。',ex_py:'Qùnián wǒ hé nánpéngyou qùle Xī’ān, jīnnián wǒ xiǎng qù Běijīng.',ex_vn:'Năm ngoái mình và bạn trai đã đi Tây An, năm nay mình muốn đi Bắc Kinh.',
   exList:[{zh:'去年我和男朋友去了西安，今年我想去北京。',py:'Qùnián wǒ hé nánpéngyou qùle Xī’ān, jīnnián wǒ xiǎng qù Běijīng.',vn:'Năm ngoái mình và bạn trai đã đi Tây An, năm nay mình muốn đi Bắc Kinh.'}],
   hanzi:[
     {c:'男',p:'nán',type:'上下结构 · Trên-dưới',st:7,ord:'田(điền) trên → 力(lực) dưới',rad:'田 (điền – ruộng)',mean:'nam, con trai',
      tip:'田(ruộng) + 力(sức lực) → người dùng SỨC LỰC cày RUỘNG là con trai, đàn ông (quan niệm thời xưa).',
      cf:'甲 (jiǎ – "giáp, hạng nhất", gần giống phần trên 田")',w:'男朋友 / 男人 / 男生'},
     {c:'朋',p:'péng',type:'左右结构 · Trái-phải',st:8,ord:'月(nguyệt) trái → 月(nguyệt) phải',rad:'月 (nguyệt – mặt trăng/thịt)',mean:'bạn bè',
      tip:'Hai chữ 月 đứng sát nhau như hai người bạn thân thiết, sánh vai nhau → BẠN BÈ.',
      cf:'明 (míng – "sáng", cũng có 月 nhưng ghép với 日")',w:'朋友 / 男朋友 / 女朋友'},
     {c:'友',p:'yǒu',type:'上下结构 · Trên-dưới',st:4,ord:'𠂇(tay, biến thể) trên → 又(hựu, tay) dưới',rad:'又 (hựu – tay phải, lại)',mean:'bạn, thân thiện',
      tip:'Hai bộ phận đều tượng hình bàn TAY nắm lấy nhau → hai người BẮT TAY nhau kết thành BẠN.',
      cf:'反 (fǎn – "trái, phản", cũng có 又ở dưới")',w:'朋友 / 友好 / 男朋友'},
   ]},
  {n:5,zh:'几',py:'jǐ',pos:'Số từ',vn:'vài, mấy',em:'🔢',lesson:2,
   ex_zh:'前几年我去了西安，非常好玩儿。',ex_py:'Qián jǐ nián wǒ qùle Xī’ān, fēicháng hǎowánr.',ex_vn:'Mấy năm trước mình đã đi Tây An, rất vui.',
   exList:[{zh:'前几年我去了西安，非常好玩儿。',py:'Qián jǐ nián wǒ qùle Xī’ān, fēicháng hǎowánr.',vn:'Mấy năm trước mình đã đi Tây An, rất vui.'}],
   hanzi:[
     {c:'几',p:'jǐ',type:'独体字 · Chữ đơn',st:2,ord:'丿→乚',rad:'几 (kỷ – tự thành bộ, cái ghế/bàn nhỏ)',mean:'mấy, vài, bao nhiêu (nghi vấn số ít)',
      tip:'Hình cái BÀN/GHẾ nhỏ có chân cong, mượn hình để hỏi số lượng còn chưa rõ, ước chừng ít → MẤY, VÀI.',
      cf:'儿 (ér – "con, trẻ con", hình gần giống nhưng nét cong khác hướng")',w:'几个 / 几点 / 好几'},
   ]},
  {n:6,zh:'年',py:'nián',pos:'Danh từ',vn:'năm',em:'🗓️',lesson:2,
   ex_zh:'前几年我去了西安，非常好玩儿。',ex_py:'Qián jǐ nián wǒ qùle Xī’ān, fēicháng hǎowánr.',ex_vn:'Mấy năm trước mình đã đi Tây An, rất vui.',
   exList:[{zh:'前几年我去了西安，非常好玩儿。',py:'Qián jǐ nián wǒ qùle Xī’ān, fēicháng hǎowánr.',vn:'Mấy năm trước mình đã đi Tây An, rất vui.'}],
   hanzi:[
     {c:'年',p:'nián',type:'独体字 · Tượng hình',st:6,ord:'丿→一→一→一→丨→一',rad:'干 (can)',mean:'năm',
      tip:'Hình bó lúa chín được gánh trên vai → mỗi mùa lúa chín là một NĂM.',
      cf:'午 (wǔ – "buổi trưa")',w:'去年 / 今年 / 明年'},
   ]},
  {n:7,zh:'好玩儿',py:'hǎowánr',pos:'Tính từ',vn:'vui, thích, thú vị',em:'🎉',lesson:2,
   ex_zh:'前几年我去了西安，非常好玩儿。',ex_py:'Qián jǐ nián wǒ qùle Xī’ān, fēicháng hǎowánr.',ex_vn:'Mấy năm trước mình đã đi Tây An, rất vui.',
   exList:[{zh:'前几年我去了西安，非常好玩儿。',py:'Qián jǐ nián wǒ qùle Xī’ān, fēicháng hǎowánr.',vn:'Mấy năm trước mình đã đi Tây An, rất vui.'}],
   hanzi:[
     {c:'好',p:'hǎo',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 子(tử) phải',rad:'女 (nữ – con gái, phụ nữ)',mean:'tốt, đẹp, giỏi',
      tip:'Người mẹ (女) bên cạnh đứa con (子) là hình ảnh TỐT ĐẸP, hạnh phúc nhất → TỐT, HAY.',
      cf:'如 (rú – "như, giống", cũng có bộ 女 bên trái")',w:'好玩儿 / 你好 / 好吃'},
     {c:'玩',p:'wán',type:'左右结构 · Trái-phải',st:8,ord:'王(斜玉旁, ngọc) trái → 元(nguyên) phải',rad:'王 (王字旁/斜玉旁 – ngọc, biến thể của 玉)',mean:'chơi, đùa',
      tip:'Bộ Ngọc 王(玉) + 元(âm đọc) → ngày xưa trẻ con thích cầm đồ NGỌC, trang sức đẹp để CHƠI ĐÙA.',
      cf:'完 (wán – "hoàn thành", bộ 宀 thay vì 王")',w:'好玩儿 / 玩儿 / 玩游戏'},
     {c:'儿',p:'r',type:'独体字 · Chữ đơn',st:2,ord:'丿→乚',rad:'儿 (nhân – chân người, tự thành bộ)',mean:'con, trẻ con; (hậu tố 儿化 tạo âm cong lưỡi)',
      tip:'Hình đôi CHÂN NGƯỜI đang bước, vốn tượng trưng cho TRẺ CON; khi đứng sau âm tiết khác (như 玩儿) chỉ làm hậu tố uốn lưỡi, không mang nghĩa riêng.',
      cf:'几 (jǐ – "mấy", hình gần giống nhưng nét cong ngược hướng")',w:'好玩儿 / 儿子 / 女儿'},
   ]},
  {n:8,zh:'西安',py:'Xī’ān',pos:'Danh từ riêng',vn:'Tây An',em:'🏯',lesson:2,
   ex_zh:'去年我和男朋友去了西安，今年我想去北京。',ex_py:'Qùnián wǒ hé nánpéngyou qùle Xī’ān, jīnnián wǒ xiǎng qù Běijīng.',ex_vn:'Năm ngoái mình và bạn trai đã đi Tây An, năm nay mình muốn đi Bắc Kinh.',
   exList:[{zh:'去年我和男朋友去了西安，今年我想去北京。',py:'Qùnián wǒ hé nánpéngyou qùle Xī’ān, jīnnián wǒ xiǎng qù Běijīng.',vn:'Năm ngoái mình và bạn trai đã đi Tây An, năm nay mình muốn đi Bắc Kinh.'}],
   hanzi:[
     {c:'西',p:'xī',type:'独体字 · Chữ đơn',st:6,ord:'一→丨→㇕→一→丨→一 (dạng tổ chim khép kín)',rad:'西 (tây – tự thành bộ)',mean:'phía tây',
      tip:'Hình chiếc TỔ CHIM lúc chim bay về đậu khi mặt trời lặn ở hướng TÂY → phương TÂY.',
      cf:'酉 (yǒu – "chi Dậu, rượu", gần giống nhưng có thêm nét ngang giữa")',w:'西安 / 西瓜 / 东西'},
     {c:'安',p:'ān',type:'上下结构 · Trên-dưới',st:6,ord:'宀(miên) trên → 女(nữ) dưới',rad:'宀 (miên – mái nhà)',mean:'yên ổn, an toàn',
      tip:'Người phụ nữ (女) ở trong nhà (宀) thì AN TOÀN, YÊN ỔN.',
      cf:'宁 (níng – "yên tĩnh", cũng có bộ 宀")',w:'西安 / 安全 / 平安'},
   ]},
  {n:9,zh:'北京',py:'Běijīng',pos:'Danh từ riêng',vn:'Bắc Kinh',em:'🏙️',lesson:2,
   ex_zh:'我和王老师都是北京人，北京非常漂亮。',ex_py:'Wǒ hé Wáng lǎoshī dōu shì Běijīng rén, Běijīng fēicháng piàoliang.',ex_vn:'Mình và cô Vương đều là người Bắc Kinh, Bắc Kinh rất đẹp.',
   exList:[{zh:'我和王老师都是北京人，北京非常漂亮。',py:'Wǒ hé Wáng lǎoshī dōu shì Běijīng rén, Běijīng fēicháng piàoliang.',vn:'Mình và cô Vương đều là người Bắc Kinh, Bắc Kinh rất đẹp.'}],
   hanzi:[
     {c:'北',p:'běi',type:'左右结构 · Trái-phải',st:5,ord:'丬(biến thể, người quay lưng) trái → 匕(biến thể) phải',rad:'匕 (chuỷ – tự thành bộ, gốc nghĩa "người")',mean:'phía bắc',
      tip:'Hình hai người quay LƯNG lại nhau (nghĩa gốc của 北 chính là "背") → hướng lưng ngoảnh về là hướng BẮC.',
      cf:'比 (bǐ – "so sánh", hình rất giống nhưng nét móc khác hướng")',w:'北京 / 北方 / 东北'},
     {c:'京',p:'jīng',type:'上中下结构 · Trên-giữa-dưới',st:8,ord:'亠(đầu) trên → 口(khẩu) giữa → 小(biến thể) dưới',rad:'亠 (đầu – nắp đậy)',mean:'kinh đô, thủ đô',
      tip:'Hình ngôi lầu cao xây trên nền đất vững (tượng hình kinh đô cổ) → nơi vua ở, KINH ĐÔ, thủ đô.',
      cf:'亮 (liàng – "sáng", cũng có 亠 trên và nét dưới phức tạp")',w:'北京 / 京剧 / 南京'},
   ]},
  {n:10,zh:'飞机',py:'fēijī',pos:'Danh từ',vn:'máy bay',em:'✈️',lesson:3,
   ex_zh:'你们的飞机到北京要几个小时？',ex_py:'Nǐmen de fēijī dào Běijīng yào jǐ gè xiǎoshí?',ex_vn:'Chuyến bay của các em đến Bắc Kinh mất mấy tiếng?',
   exList:[{zh:'你们的飞机到北京要几个小时？',py:'Nǐmen de fēijī dào Běijīng yào jǐ gè xiǎoshí?',vn:'Chuyến bay của các em đến Bắc Kinh mất mấy tiếng?'}],
   hanzi:[
     {c:'飞',p:'fēi',type:'独体字 · Tượng hình',st:3,ord:'飞(biến thể, 3 nét)',rad:'飞 (phi – tự thành bộ)',mean:'bay',
      tip:'Hình con chim đang dang cánh bay → BAY.',
      cf:'见 (jiàn – "nhìn thấy")',w:'飞机'},
     {c:'机',p:'jī',type:'左右结构 · Trái-phải',st:6,ord:'木(mộc) trái → 几(kỷ) phải',rad:'木 (mộc – gỗ)',mean:'máy móc',
      tip:'木(gỗ, vật liệu chế tạo máy móc thời xưa) + 几(mượn âm) → MÁY MÓC; 飞机 = "máy biết bay" = MÁY BAY.',
      cf:'几 (jǐ – "mấy")',w:'飞机 / 机场'},
   ]},
  {n:11,zh:'要',py:'yào',pos:'Động từ',vn:'cần, mất (thời gian)',em:'⏳',lesson:3,
   ex_zh:'你们的飞机到北京要几个小时？',ex_py:'Nǐmen de fēijī dào Běijīng yào jǐ gè xiǎoshí?',ex_vn:'Chuyến bay của các em đến Bắc Kinh mất mấy tiếng?',
   exList:[{zh:'你们的飞机到北京要几个小时？',py:'Nǐmen de fēijī dào Běijīng yào jǐ gè xiǎoshí?',vn:'Chuyến bay của các em đến Bắc Kinh mất mấy tiếng?'}],
   hanzi:[
     {c:'要',p:'yào',type:'上下结构 · Trên-dưới',st:9,ord:'覀(biến thể của 西) trên → 女(nữ) dưới',rad:'覀 (biến thể của 西 – phía tây)',mean:'cần, muốn, mất (thời gian)',
      tip:'Phần trên giống 西(cái giỏ đội đầu), phần dưới 女(người phụ nữ) đội giỏ lên đầu vì đó là thứ mình CẦN, MUỐN mang theo.',
      cf:'票 (piào – "vé, phiếu", phần trên cũng có nét giống 覀")',w:'要几个小时 / 不要 / 想要'},
   ]},
  {n:12,zh:'小时',py:'xiǎoshí',pos:'Danh từ',vn:'tiếng đồng hồ, giờ',em:'⏰',lesson:3,
   ex_zh:'九个小时。',ex_py:'Jiǔ gè xiǎoshí.',ex_vn:'9 tiếng ạ.',
   exList:[{zh:'九个小时。',py:'Jiǔ gè xiǎoshí.',vn:'9 tiếng ạ.'}],
   hanzi:[
     {c:'小',p:'xiǎo',type:'独体字 · Chữ đơn',st:3,ord:'丨(móc câu) giữa → 丿trái → 丶phải',rad:'小 (tiểu – tự thành bộ, nhỏ)',mean:'nhỏ, bé',
      tip:'Hình một vật bị tách làm đôi bởi một nét móc ở giữa, hai nét nhỏ hai bên → biểu thị sự NHỎ BÉ.',
      cf:'少 (shǎo – "ít", thêm một nét phẩy trên đầu")',w:'小时 / 小姐 / 多小'},
     {c:'时',p:'shí',type:'左右结构 · Trái-phải',st:7,ord:'日(nhật) trái → 寺(tự) phải',rad:'日 (nhật – mặt trời)',mean:'giờ, thời gian, lúc',
      tip:'日(mặt trời, biểu tượng thời gian trôi) + 寺(âm đọc, gốc nghĩa "cầm giữ") → chỉ THỜI GIAN, GIỜ khắc.',
      cf:'待 (dāi – "chờ đợi", cùng có 寺 bên phải")',w:'小时 / 时间 / 有时候'},
   ]},
  {n:13,zh:'家人',py:'jiārén',pos:'Danh từ',vn:'người nhà',em:'👨‍👩‍👧',lesson:3,
   ex_zh:'我家人都在北京。',ex_py:'Wǒ jiārén dōu zài Běijīng.',ex_vn:'Người nhà cô đều ở Bắc Kinh.',
   exList:[{zh:'我家人都在北京。',py:'Wǒ jiārén dōu zài Běijīng.',vn:'Người nhà cô đều ở Bắc Kinh.'}],
   hanzi:[
     {c:'家',p:'jiā',type:'上下结构 · Trên-dưới',st:10,ord:'宀(miên) trên → 豕(thỉ, lợn) dưới',rad:'宀 (miên – mái nhà)',mean:'nhà, gia đình',
      tip:'Mái nhà (宀) có nuôi con lợn (豕) bên trong → hình ảnh một GIA ĐÌNH, ngôi NHÀ sung túc thời xưa.',
      cf:'象 (xiàng – "con voi", phần dưới gần giống 豕")',w:'家人 / 大家 / 回家'},
     {c:'人',p:'rén',type:'独体字 · Chữ đơn',st:2,ord:'丿→㇏',rad:'人 (nhân – tự thành bộ, người)',mean:'người',
      tip:'Hình dáng một NGƯỜI đang đứng nghiêng, dang hai chân → NGƯỜI.',
      cf:'入 (rù – "vào", hình gần giống nhưng nét đầu ngắn và giao nhau khác vị trí")',w:'家人 / 中国人 / 大人'},
   ]},
  {n:14,zh:'时间',py:'shíjiān',pos:'Danh từ',vn:'thời gian',em:'🕐',lesson:3,
   ex_zh:'星期天我姐姐也有时间，她可以去机场接你们。',ex_py:'Xīngqītiān wǒ jiějie yě yǒu shíjiān, tā kěyǐ qù jīchǎng jiē nǐmen.',ex_vn:'Chủ nhật chị gái cô cũng có thời gian, chị ấy có thể đi sân bay đón các em.',
   exList:[{zh:'星期天我姐姐也有时间，她可以去机场接你们。',py:'Xīngqītiān wǒ jiějie yě yǒu shíjiān, tā kěyǐ qù jīchǎng jiē nǐmen.',vn:'Chủ nhật chị gái cô cũng có thời gian, chị ấy có thể đi sân bay đón các em.'}],
   hanzi:[
     {c:'时',p:'shí',type:'左右结构 · Trái-phải',st:7,ord:'日(nhật) trái → 寺(tự) phải',rad:'日 (nhật – mặt trời)',mean:'giờ, thời gian, lúc',
      tip:'日(mặt trời, biểu tượng thời gian trôi) + 寺(âm đọc, gốc nghĩa "cầm giữ") → chỉ THỜI GIAN, GIỜ khắc.',
      cf:'待 (dāi – "chờ đợi", cùng có 寺 bên phải")',w:'时间 / 小时 / 有时候'},
     {c:'间',p:'jiān',type:'半包围结构 · Bán bao vây',st:7,ord:'门(môn) bao ngoài → 日(nhật) bên trong',rad:'门 (môn – cửa)',mean:'khoảng, giữa, gian (không gian/thời gian)',
      tip:'Ánh mặt trời 日 lọt qua khe CỬA 门 → khoảng KHÔNG GIAN/THỜI GIAN ở GIỮA.',
      cf:'问 (wèn – "hỏi", cũng có bộ 门 nhưng bên trong là 口")',w:'时间 / 中间 / 房间'},
   ]},
  {n:15,zh:'机场',py:'jīchǎng',pos:'Danh từ',vn:'sân bay',em:'🛫',lesson:3,
   ex_zh:'她可以去机场接你们，你们也可以住我家。',ex_py:'Tā kěyǐ qù jīchǎng jiē nǐmen, nǐmen yě kěyǐ zhù wǒ jiā.',ex_vn:'Chị ấy có thể đi sân bay đón các em, các em cũng có thể ở nhà cô.',
   exList:[{zh:'她可以去机场接你们，你们也可以住我家。',py:'Tā kěyǐ qù jīchǎng jiē nǐmen, nǐmen yě kěyǐ zhù wǒ jiā.',vn:'Chị ấy có thể đi sân bay đón các em, các em cũng có thể ở nhà cô.'}],
   hanzi:[
     {c:'机',p:'jī',type:'左右结构 · Trái-phải',st:6,ord:'木(mộc) trái → 几(kỷ) phải',rad:'木 (mộc – gỗ)',mean:'máy móc',
      tip:'木(gỗ, vật liệu chế tạo máy móc thời xưa) + 几(mượn âm) → MÁY MÓC; 飞机 = "máy biết bay" = MÁY BAY.',
      cf:'几 (jǐ – "mấy")',w:'飞机 / 机场'},
     {c:'场',p:'chǎng',type:'左右结构 · Trái-phải',st:6,ord:'土(thổ) trái → 𠃌(biến thể giản thể của 昜) phải',rad:'土 (thổ – đất)',mean:'bãi, sân, trường (nơi diễn ra hoạt động)',
      tip:'Bộ Đất 土(mặt đất bằng phẳng) + phần bên phải (biến thể của 昜, chỉ ánh nắng rực rỡ) → khoảng ĐẤT trống rộng lớn, BÃI, SÂN, TRƯỜNG.',
      cf:'扬 (yáng – "giương lên", bộ 扌 nhưng phần phải giống hệt")',w:'机场 / 场地 / 市场'},
   ]},
  {n:16,zh:'接',py:'jiē',pos:'Động từ',vn:'đón, tiếp đón',em:'🤝',lesson:3,
   ex_zh:'她可以去机场接你们。',ex_py:'Tā kěyǐ qù jīchǎng jiē nǐmen.',ex_vn:'Chị ấy có thể đi sân bay đón các em.',
   exList:[{zh:'她可以去机场接你们。',py:'Tā kěyǐ qù jīchǎng jiē nǐmen.',vn:'Chị ấy có thể đi sân bay đón các em.'}],
   hanzi:[
     {c:'接',p:'jiē',type:'左右结构 · Trái-phải',st:11,ord:'扌(thủ) trái → 妾(thiếp) phải',rad:'扌 (thủ – tay)',mean:'nhận, đón, tiếp',
      tip:'Bộ 扌(tay) → dùng tay đưa ra ĐÓN NHẬN người/vật.',
      cf:'椄 (jiē – "ghép cây", bộ 木)',w:'接你们 / 接电话'},
   ]},
  {n:17,zh:'住',py:'zhù',pos:'Động từ',vn:'ở',em:'🏠',lesson:3,
   ex_zh:'你们也可以住我家。',ex_py:'Nǐmen yě kěyǐ zhù wǒ jiā.',ex_vn:'Các em cũng có thể ở nhà cô.',
   exList:[{zh:'你们也可以住我家。',py:'Nǐmen yě kěyǐ zhù wǒ jiā.',vn:'Các em cũng có thể ở nhà cô.'}],
   hanzi:[
     {c:'住',p:'zhù',type:'左右结构 · Trái-phải',st:7,ord:'亻(nhân) trái → 主(chủ) phải',rad:'亻 (nhân – người)',mean:'ở, trú ngụ',
      tip:'亻(người) + 主(làm chủ) → người làm chủ một nơi để Ở, TRÚ NGỤ.',
      cf:'往 (wǎng – "hướng về")',w:'住我家 / 住在'},
   ]},
  {n:18,zh:'早',py:'zǎo',pos:'Tính từ',vn:'sớm',em:'🌅',lesson:3,
   ex_zh:'我们星期日早上八点到大兴机场，早不早？',ex_py:'Wǒmen xīngqīrì zǎoshang bā diǎn dào Dàxīng Jīchǎng, zǎo bu zǎo?',ex_vn:'8 giờ sáng Chủ nhật chúng em đã đến sân bay Đại Hưng, có sớm không cô?',
   exList:[{zh:'我们星期日早上八点到大兴机场，早不早？',py:'Wǒmen xīngqīrì zǎoshang bā diǎn dào Dàxīng Jīchǎng, zǎo bu zǎo?',vn:'8 giờ sáng Chủ nhật chúng em đã đến sân bay Đại Hưng, có sớm không cô?'}],
   hanzi:[
     {c:'早',p:'zǎo',type:'上下结构 · Trên-dưới',st:6,ord:'日(nhật) trên → 十 dưới',rad:'日 (nhật – mặt trời)',mean:'sớm',
      tip:'Mặt trời 日 mới nhô lên trên cây/giá 十 → trời còn SỚM.',
      cf:'旱 (hàn – "hạn hán")',w:'早不早 / 早上'},
   ]},
  {n:19,zh:'那',py:'nà',pos:'Liên từ',vn:'vậy thì, thế thì',em:'➡️',lesson:3,
   ex_zh:'谢谢老师！那我们和您姐姐在大兴机场见！',ex_py:'Xièxie lǎoshī! Nà wǒmen hé nín jiějie zài Dàxīng Jīchǎng jiàn!',ex_vn:'Cảm ơn cô ạ! Vậy chúng em hẹn gặp chị cô ở sân bay Đại Hưng nhé!',
   exList:[{zh:'谢谢老师！那我们和您姐姐在大兴机场见！',py:'Xièxie lǎoshī! Nà wǒmen hé nín jiějie zài Dàxīng Jīchǎng jiàn!',vn:'Cảm ơn cô ạ! Vậy chúng em hẹn gặp chị cô ở sân bay Đại Hưng nhé!'}],
   hanzi:[
     {c:'那',p:'nà',type:'左右结构 · Trái-phải',st:6,ord:'⺕(biến thể) trái → 阝(ấp) phải',rad:'阝 (ấp – vùng đất, thành ấp, biến thể phải của 邑)',mean:'đó, kia; (làm liên từ: vậy thì, thế thì)',
      tip:'Bộ 阝(邑 – vùng đất) bên phải chỉ một nơi chốn ở xa → dùng để chỉ cái ĐÓ, KIA (xa người nói); đứng đầu câu thì chuyển thành liên từ "VẬY THÌ".',
      cf:'哪 (nǎ – "nào", thêm bộ 口 bên trái, dùng để hỏi thay vì chỉ định")',w:'那个 / 那里 / 那我们'},
   ]},
  {n:20,zh:'大兴机场',py:'Dàxīng Jīchǎng',pos:'Danh từ riêng',vn:'sân bay Đại Hưng',em:'🛬',lesson:3,
   ex_zh:'那我们和您姐姐在大兴机场见！',ex_py:'Nà wǒmen hé nín jiějie zài Dàxīng Jīchǎng jiàn!',ex_vn:'Vậy chúng em hẹn gặp chị cô ở sân bay Đại Hưng nhé!',
   exList:[{zh:'那我们和您姐姐在大兴机场见！',py:'Nà wǒmen hé nín jiějie zài Dàxīng Jīchǎng jiàn!',vn:'Vậy chúng em hẹn gặp chị cô ở sân bay Đại Hưng nhé!'}],
   hanzi:[
     {c:'大',p:'dà',type:'独体字 · Chữ đơn',st:3,ord:'一→丿→㇏',rad:'大 (đại – tự thành bộ, to lớn)',mean:'to, lớn',
      tip:'Hình một NGƯỜI dang rộng hai tay hai chân hết cỡ → biểu thị sự TO LỚN.',
      cf:'太 (tài – "quá", thêm một chấm nhỏ bên dưới")',w:'大兴机场 / 大家 / 长大'},
     {c:'兴',p:'xīng',type:'上下结构 · Trên-dưới',st:6,ord:'⺍(2 chấm, biến thể) trên → 一 giữa → 八(biến thể) dưới',rad:'八 (bát – chia ra, biến thể 丷)',mean:'thịnh vượng, hưng thịnh; hứng thú',
      tip:'Chữ phồn thể 興 vốn là hình nhiều bàn tay cùng nâng một vật lên cao → cùng nhau NÂNG DẬY, làm cho HƯNG THỊNH, dấy lên.',
      cf:'光 (guāng – "ánh sáng", phần dưới cũng có nét loe ra hai bên")',w:'大兴机场 / 高兴 / 兴趣'},
     {c:'机',p:'jī',type:'左右结构 · Trái-phải',st:6,ord:'木(mộc) trái → 几(kỷ) phải',rad:'木 (mộc – gỗ)',mean:'máy móc',
      tip:'木(gỗ, vật liệu chế tạo máy móc thời xưa) + 几(mượn âm) → MÁY MÓC; 飞机 = "máy biết bay" = MÁY BAY.',
      cf:'几 (jǐ – "mấy")',w:'飞机 / 机场'},
     {c:'场',p:'chǎng',type:'左右结构 · Trái-phải',st:6,ord:'土(thổ) trái → 𠃌(biến thể giản thể của 昜) phải',rad:'土 (thổ – đất)',mean:'bãi, sân, trường (nơi diễn ra hoạt động)',
      tip:'Bộ Đất 土(mặt đất bằng phẳng) + phần bên phải (biến thể của 昜, chỉ ánh nắng rực rỡ) → khoảng ĐẤT trống rộng lớn, BÃI, SÂN, TRƯỜNG.',
      cf:'扬 (yáng – "giương lên", bộ 扌 nhưng phần phải giống hệt")',w:'机场 / 场地 / 市场'},
   ]},
];

var wuData = [
  {img:'/images/hsk1v3-bai-15/beijing.jpg',label:'北京',py:'Běijīng',letter:'A'},
  {img:'/images/hsk1v3-bai-15/haowanr.jpg',label:'好玩儿',py:'hǎowánr',letter:'B'},
  {img:'/images/hsk1v3-bai-15/feiji.jpg',label:'飞机',py:'fēijī',letter:'C'},
  {img:'/images/hsk1v3-bai-15/zaofan.jpg',label:'早饭',py:'zǎofàn',letter:'D'},
  {img:'/images/hsk1v3-bai-15/zao.jpg',label:'早',py:'zǎo',letter:'E'},
  {img:'/images/hsk1v3-bai-15/nanpengyou.jpg',label:'男朋友',py:'nánpéngyou',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 15: Ngữ âm + Hán tự + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-15/wb-yuyin.mp3',
      blocks: [
        { type: 'pymatch', caption: 'Nghe âm tiết, ghép với từ đúng',
          items: [{py:'nǐ hǎo', hz:'你好'}, {py:'méi kànjiàn', hz:'没看见'}, {py:'nǎxiē rén', hz:'哪些人'}, {py:'shuōhuà', hz:'说话'}, {py:'shénme shíhou', hz:'什么时候'}, {py:'zuò fēijī', hz:'坐飞机'}] },
        { type: 'tonemc', noBlank: true, caption: 'Nghe câu, chọn đúng loại câu: trần thuật / nghi vấn / cảm thán / cầu khiến',
          items: [
            {before:'你是学生吗？', after:'', answer:'Câu nghi vấn', options:['Câu trần thuật','Câu nghi vấn','Câu cảm thán','Câu cầu khiến']},
            {before:'我爱吃水果。', after:'', answer:'Câu trần thuật', options:['Câu trần thuật','Câu nghi vấn','Câu cảm thán','Câu cầu khiến']},
            {before:'这件衣服真漂亮！', after:'', answer:'Câu cảm thán', options:['Câu trần thuật','Câu nghi vấn','Câu cảm thán','Câu cầu khiến']},
            {before:'你们去哪里？', after:'', answer:'Câu nghi vấn', options:['Câu trần thuật','Câu nghi vấn','Câu cảm thán','Câu cầu khiến']},
            {before:'请坐。', after:'', answer:'Câu cầu khiến', options:['Câu trần thuật','Câu nghi vấn','Câu cảm thán','Câu cầu khiến']},
            {before:'雨大吗？', after:'', answer:'Câu nghi vấn', options:['Câu trần thuật','Câu nghi vấn','Câu cảm thán','Câu cầu khiến']}
          ],
          note: 'Câu trần thuật kể sự việc; câu nghi vấn hỏi; câu cảm thán bộc lộ cảm xúc mạnh (thường có "真...!"); câu cầu khiến yêu cầu/ra lệnh (thường bắt đầu bằng "请").' },
        { type: 'table', caption: 'Chữ Hán (汉字) — Bộ thủ thường gặp',
          headers: ['Tên bộ thủ', 'Hình dạng', 'Ví dụ'],
          rows: [
            ['口字旁 (bộ khẩu)', '口', '喝 (hē)'],
            ['单人旁 (bộ nhân đứng)', '亻', '你 (nǐ)'],
            ['言字旁 (bộ ngôn)', '讠', '认 (rèn)'],
            ['日字旁 (bộ nhật)', '日', '明 (míng)'],
            ['木字旁 (bộ mộc)', '木', '杯 (bēi)'],
            ['女字旁 (bộ nữ)', '女', '姐 (jiě)']
          ] },
        { type: 'table', caption: 'Ví dụ luyện viết từ',
          rows: [
            ['喝 (hē) → 喝茶 (hē chá)', '你 (nǐ) → 你们 (nǐmen)'],
            ['认 (rèn) → 认识 (rènshi)', '明 (míng) → 明天 (míngtiān)'],
            ['杯 (bēi) → 杯子 (bēizi)', '姐 (jiě) → 姐姐 (jiějie)']
          ],
          note: 'Phần luyện viết tay theo từng nét cần thực hành trực tiếp trên giấy/vở theo mẫu trong sách.' }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-15/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-15-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-15-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-15-wb/q1c.jpg'}
            ], answer: 'A' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-15-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-15-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-15-wb/q2c.jpg'}
            ], answer: 'B' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-15-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-15-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-15-wb/q3c.jpg'}
            ], answer: 'C' },
            { n: 4, options: [
              {key:'A', text:'太早了', py:'tài zǎo le'},
              {key:'B', text:'没睡觉', py:'méi shuìjiào'},
              {key:'C', text:'不想去', py:'bù xiǎng qù'}
            ], answer: 'A' },
            { n: 5, options: [
              {key:'A', text:'很多', py:'hěn duō'},
              {key:'B', text:'也不贵', py:'yě bú guì'},
              {key:'C', text:'也很好看', py:'yě hěn hǎokàn'}
            ], answer: 'C' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-15-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-15-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-15-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-15-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-15-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-15-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-15-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-15-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-15-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-15-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-15-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-15-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 9, options: [
              {key:'A', text:'西安', py:'Xī\'ān'},
              {key:'B', text:'北京', py:'Běijīng'},
              {key:'C', text:'上海', py:'Shànghǎi'}
            ], answer: 'A' },
            { n: 10, options: [
              {key:'A', text:'坐飞机', py:'zuò fēijī'},
              {key:'B', text:'坐火车', py:'zuò huǒchē'},
              {key:'C', text:'坐出租车', py:'zuò chūzūchē'}
            ], answer: 'B' }
          ],
          reading: [
            { n: 11, prompt: '我家有五口人，我们现在住在北京。', promptPy: 'Wǒ jiā yǒu wǔ kǒu rén, wǒmen xiànzài zhù zài Běijīng.', options: [
              {key:'A', img:'/images/hsk1v3-bai-15-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-15-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-15-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-15-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 12, prompt: '这里有好吃的，还有好玩儿的。', promptPy: 'Zhèlǐ yǒu hǎochī de, hái yǒu hǎowánr de.', options: [
              {key:'A', img:'/images/hsk1v3-bai-15-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-15-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-15-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-15-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 13, prompt: '现在我会说一点儿汉语，也会写一些汉字了。', promptPy: 'Xiànzài wǒ huì shuō yìdiǎnr Hànyǔ, yě huì xiě yìxiē Hànzì le.', options: [
              {key:'A', img:'/images/hsk1v3-bai-15-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-15-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-15-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-15-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 14, prompt: '你会写几个汉字？', promptPy: 'Nǐ huì xiě jǐ gè Hànzì?', options: [
              {key:'A', text:'我女儿。', py:'Wǒ nǚ\'ér.'},
              {key:'B', text:'十个。', py:'Shí gè.'},
              {key:'C', text:'苹果。', py:'Píngguǒ.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'B' },
            { n: 15, prompt: '谁上中学了？', promptPy: 'Shéi shàng zhōngxué le?', options: [
              {key:'A', text:'我女儿。', py:'Wǒ nǚ\'ér.'},
              {key:'B', text:'十个。', py:'Shí gè.'},
              {key:'C', text:'苹果。', py:'Píngguǒ.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'A' },
            { n: 16, prompt: '你爱吃什么？', promptPy: 'Nǐ ài chī shénme?', options: [
              {key:'A', text:'我女儿。', py:'Wǒ nǚ\'ér.'},
              {key:'B', text:'十个。', py:'Shí gè.'},
              {key:'C', text:'苹果。', py:'Píngguǒ.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'C' },
            { n: 17, prompt: '今年我们都想去（　）。', promptPy: 'Jīnnián wǒmen dōu xiǎng qù ( ).', options: [
              {key:'A', text:'电视', py:'diànshì'},
              {key:'B', text:'北京', py:'Běijīng'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：我爱看电影，也爱唱歌。你呢？\n女：我喜欢看（　）。', promptPy: 'Wǒ ài kàn diànyǐng, yě ài chàng gē. Nǐ ne? / Wǒ xǐhuan kàn ( ).', options: [
              {key:'A', text:'电视', py:'diànshì'},
              {key:'B', text:'北京', py:'Běijīng'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '明天星期天，儿子想去看一个电影。\n★儿子明天想：', promptPy: 'Míngtiān Xīngqītiān, érzi xiǎng qù kàn yí gè diànyǐng.', options: [
              {key:'A', text:'买电脑', py:'mǎi diànnǎo'},
              {key:'B', text:'打电话', py:'dǎ diànhuà'},
              {key:'C', text:'看电影', py:'kàn diànyǐng'}
            ], answer: 'C' },
            { n: 20, prompt: '下小雨了，小狗非常高兴，它喜欢小雨。\n★小狗喜欢：', promptPy: 'Xià xiǎoyǔ le, xiǎo gǒu fēicháng gāoxìng, tā xǐhuan xiǎoyǔ.', options: [
              {key:'A', text:'下小雨', py:'xià xiǎoyǔ'},
              {key:'B', text:'下大雨', py:'xià dàyǔ'},
              {key:'C', text:'下小雪', py:'xià xiǎoxuě'}
            ], answer: 'A' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'李文邀请陈天中、白家月等朋友品尝中餐 · Mời ăn cơm',
   preQuiz:[
     {q:'李文问大家（　）吃哪个菜。',opts:['好','爱','不爱'],ans:1},
     {q:'李文说："大家（　）。"',opts:['吃点儿','少吃点儿','多吃点儿'],ans:2},
   ],
   lines:[
     {sp:0,zh:'你们爱吃哪个菜？',py:'Nǐmen ài chī nǎge cài?',vn:'Các bạn thích món ăn nào?'},
     {sp:1,zh:'我喜欢这个，也喜欢那个。',py:'Wǒ xǐhuan zhège, yě xǐhuan nàge.',vn:'Mình thích món này, cũng thích món kia nữa.'},
     {sp:2,zh:'这些菜都好吃，还很好看。',py:'Zhèxiē cài dōu hǎochī, hái hěn hǎokàn.',vn:'Những món ăn này đều ngon, còn rất đẹp mắt nữa.'},
     {sp:0,zh:'我爱吃中国菜，也喜欢做。大家多吃点儿。',py:'Wǒ ài chī Zhōngguó cài, yě xǐhuan zuò. Dàjiā duō chī diǎnr.',vn:'Mình thích ăn món Trung Quốc, cũng rất thích nấu nữa. Mọi người ăn nhiều một chút nhé.'},
   ]},
  {scene:'大家边吃饭边谈论假期计划 · Kế hoạch du lịch',
   preQuiz:[
     {q:'安妮和她男朋友去年去了（　）。',opts:['西安','北京','学校'],ans:0},
     {q:'王老师和李文都是（　）。',opts:['西安人','北京人','哪里人'],ans:1},
   ],
   lines:[
     {sp:0,zh:'你们都想去哪儿？',py:'Nǐmen dōu xiǎng qù nǎr?',vn:'Các bạn đều muốn đi đâu vậy?'},
     {sp:1,zh:'去年我和男朋友去了西安，今年我想去北京。',py:'Qùnián wǒ hé nánpéngyou qùle Xī’ān, jīnnián wǒ xiǎng qù Běijīng.',vn:'Năm ngoái mình và bạn trai đã đi Tây An, năm nay mình muốn đi Bắc Kinh.'},
     {sp:2,zh:'前几年我去了西安，非常好玩儿。今年我也想去北京。',py:'Qián jǐ nián wǒ qùle Xī’ān, fēicháng hǎowánr. Jīnnián wǒ yě xiǎng qù Běijīng.',vn:'Mấy năm trước mình đã đi Tây An, rất vui. Năm nay mình cũng muốn đi Bắc Kinh.'},
     {sp:0,zh:'我和王老师都是北京人，北京非常漂亮。',py:'Wǒ hé Wáng lǎoshī dōu shì Běijīng rén, Běijīng fēicháng piàoliang.',vn:'Mình và cô Vương đều là người Bắc Kinh, Bắc Kinh rất đẹp.'},
   ]},
  {scene:'白家月、安妮和王老师谈论去北京旅游的事 · Hẹn gặp ở sân bay',
   preQuiz:[
     {q:'白家月和安妮坐（　）去北京。',opts:['火车','飞机','出租车'],ans:1},
     {q:'王老师的（　）都在北京。',opts:['家人','朋友','学生'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你们的飞机到北京要几个小时？',py:'Nǐmen de fēijī dào Běijīng yào jǐ gè xiǎoshí?',vn:'Chuyến bay của các em đến Bắc Kinh mất mấy tiếng?'},
     {sp:1,zh:'九个小时。',py:'Jiǔ gè xiǎoshí.',vn:'9 tiếng ạ.'},
     {sp:0,zh:'我家人都在北京，星期天我姐姐也有时间，她可以去机场接你们，你们也可以住我家。',py:'Wǒ jiārén dōu zài Běijīng, xīngqītiān wǒ jiějie yě yǒu shíjiān, tā kěyǐ qù jīchǎng jiē nǐmen, nǐmen yě kěyǐ zhù wǒ jiā.',vn:'Người nhà cô đều ở Bắc Kinh, Chủ nhật chị gái cô cũng có thời gian, chị ấy có thể đi sân bay đón các em, các em cũng có thể ở nhà cô.'},
     {sp:2,zh:'我们星期日早上八点到大兴机场，早不早？',py:'Wǒmen xīngqīrì zǎoshang bā diǎn dào Dàxīng Jīchǎng, zǎo bu zǎo?',vn:'8 giờ sáng Chủ nhật chúng em đã đến sân bay Đại Hưng, có sớm không cô?'},
     {sp:0,zh:'不早。',py:'Bù zǎo.',vn:'Không sớm đâu.'},
     {sp:1,zh:'谢谢老师！那我们和您姐姐在大兴机场见！',py:'Xièxie lǎoshī! Nà wǒmen hé nín jiějie zài Dàxīng Jīchǎng jiàn!',vn:'Cảm ơn cô ạ! Vậy chúng em hẹn gặp chị cô ở sân bay Đại Hưng nhé!'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'男朋', right:'友'},
  {left:'好玩', right:'儿'},
  {left:'飞', right:'机'},
  {left:'小', right:'时'},
  {left:'家', right:'人'},
  {left:'时', right:'间'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'你们', blank:'爱吃哪个菜', post:'？', hint:'(thích ăn món nào)', ans:'爱吃哪个菜'},
  {pre:'我喜欢这个，', blank:'也喜欢那个', post:'。', hint:'(cũng thích cái kia)', ans:'也喜欢那个'},
  {pre:'去年我和男朋友', blank:'去了西安', post:'。', hint:'(đã đi Tây An)', ans:'去了西安'},
  {pre:'我和王老师都是', blank:'北京人', post:'。', hint:'(người Bắc Kinh)', ans:'北京人'},
  {pre:'你们的飞机到北京', blank:'要几个小时', post:'？', hint:'(mất mấy tiếng)', ans:'要几个小时'},
  {pre:'她可以去机场', blank:'接你们', post:'。', hint:'(đón các em)', ans:'接你们'},
  {pre:'我们星期日早上八点到大兴机场，', blank:'早不早', post:'？', hint:'(có sớm không)', ans:'早不早'},
  {pre:'那我们和您姐姐在大兴机场', blank:'见', post:'！', hint:'(gặp nhau)', ans:'见'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你们','爱','吃','哪个','菜','？'], ans:'你们爱吃哪个菜？', audio:'你们爱吃哪个菜？'},
  {words:['去年','我','和','男朋友','去','了','西安','。'], ans:'去年我和男朋友去了西安。', audio:'去年我和男朋友去了西安。'},
  {words:['我','和','王老师','都','是','北京人','。'], ans:'我和王老师都是北京人。', audio:'我和王老师都是北京人。'},
  {words:['你们','的','飞机','到','北京','要','几个','小时','？'], ans:'你们的飞机到北京要几个小时？', audio:'你们的飞机到北京要几个小时？'},
  {words:['她','可以','去','机场','接','你们','。'], ans:'她可以去机场接你们。', audio:'她可以去机场接你们。'},
  {words:['那','我们','和','您','姐姐','在','大兴机场','见','！'], ans:'那我们和您姐姐在大兴机场见！', audio:'那我们和您姐姐在大兴机场见！'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"你们爱吃哪个菜？" nghĩa là gì?', opts:['Các bạn thích ăn món nào?', 'Các bạn đã ăn chưa?', 'Món này có ngon không?', 'Ai nấu món này?'], ans:0},
  {q:'"我喜欢这个，也喜欢那个。" là ví dụ của cấu trúc nào?', opts:['câu ghép đẳng lập "……，还/也……"', 'câu hỏi chính phản', 'câu tồn hiện', 'câu có hai tân ngữ'], ans:0},
  {q:'"我和王老师都是北京人。" nghĩa là gì?', opts:['Tôi và cô Vương đều là người Bắc Kinh.', 'Tôi và cô Vương không quen nhau.', 'Cô Vương không phải người Bắc Kinh.', 'Chỉ có tôi là người Bắc Kinh.'], ans:0},
  {q:'"你们的飞机到北京要几个小时？" nghĩa là gì?', opts:['Chuyến bay của các bạn đến Bắc Kinh mất mấy tiếng?', 'Máy bay khởi hành lúc mấy giờ?', 'Vé máy bay giá bao nhiêu?', 'Các bạn có đi máy bay không?'], ans:0},
  {q:'"她可以去机场接你们。" nghĩa là gì?', opts:['Chị ấy có thể đi sân bay đón các bạn.', 'Chị ấy không thể đi đón.', 'Các bạn phải tự đi đến sân bay.', 'Chị ấy sẽ ở nhà.'], ans:0},
  {q:'Mời khách ăn nhiều hơn ("多吃点儿") thể hiện điều gì trong văn hoá Trung Quốc?', opts:['sự nhiệt tình, hiếu khách trên bàn ăn', 'phép lịch sự tối thiểu', 'yêu cầu bắt buộc phải ăn hết', 'không có ý nghĩa đặc biệt'], ans:0},
  {q:'"那我们在大兴机场见！" — từ "那" trong câu này có nghĩa gì?', opts:['vậy thì, thế thì', 'đó, kia (chỉ vị trí)', 'phủ định', 'nghi vấn'], ans:0},
  {q:'Bắc Kinh là gì của Trung Quốc?', opts:['thủ đô', 'thành phố cảng', 'tỉnh miền núi', 'đặc khu kinh tế'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '朋友问你："你爱吃哪个菜？" 你怎么回答？', q_vn: 'Bạn của bạn hỏi: "Bạn thích ăn món nào?" Bạn trả lời thế nào?',
     hint: '我喜欢……，也喜欢……', sample: '我喜欢这个，也喜欢那个。', sample_vn: 'Mình thích món này, cũng thích món kia nữa.',
     note: 'Câu ghép đẳng lập "……，也……" dùng để liệt kê hai điều tương tự nhau.'},
    {q_zh: '有人问你去年去了哪儿旅游，你怎么回答？', q_vn: 'Có người hỏi bạn năm ngoái đi du lịch ở đâu, bạn trả lời thế nào?',
     hint: '去年我去了……', sample: '去年我去了西安，非常好玩儿。', sample_vn: 'Năm ngoái mình đã đi Tây An, rất vui.',
     note: '"去年" (năm ngoái) đặt đầu câu làm trạng ngữ chỉ thời gian.'},
    {q_zh: '朋友问你飞机到目的地要多久，你怎么回答？', q_vn: 'Bạn của bạn hỏi máy bay đến nơi mất bao lâu, bạn trả lời thế nào?',
     hint: '要……个小时。', sample: '要九个小时。', sample_vn: 'Mất 9 tiếng.',
     note: 'Động từ "要" ở đây dùng để nói về thời gian cần thiết cho một việc.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Các bạn thích ăn món nào?', zh:'你们爱吃哪个菜？', py:'Nǐmen ài chī nǎge cài?'},
  {vi:'Năm ngoái mình và bạn trai đã đi Tây An.', zh:'去年我和男朋友去了西安。', py:'Qùnián wǒ hé nánpéngyou qùle Xī’ān.'},
  {vi:'Mình và cô Vương đều là người Bắc Kinh.', zh:'我和王老师都是北京人。', py:'Wǒ hé Wáng lǎoshī dōu shì Běijīng rén.'},
  {vi:'Chuyến bay của các em đến Bắc Kinh mất mấy tiếng?', zh:'你们的飞机到北京要几个小时？', py:'Nǐmen de fēijī dào Běijīng yào jǐ gè xiǎoshí?'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Những món ăn này đều ngon, còn rất đẹp mắt nữa.', zh:'这些菜都好吃，还很好看。', py:'Zhèxiē cài dōu hǎochī, hái hěn hǎokàn.'},
  {vi:'Mọi người ăn nhiều một chút nhé.', zh:'大家多吃点儿。', py:'Dàjiā duō chī diǎnr.'},
  {vi:'Người nhà cô đều ở Bắc Kinh.', zh:'我家人都在北京。', py:'Wǒ jiārén dōu zài Běijīng.'},
  {vi:'Có sớm không cô?', zh:'早不早？', py:'Zǎo bu zǎo?'},
];
