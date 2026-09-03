// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 14: 我看了一个电影
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'上',py:'shàng',pos:'Động từ',vn:'lên (xe, tàu...)',em:'🚉',lesson:1,
   ex_zh:'你们上火车后看见王老师了吗？',ex_py:'Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?',ex_vn:'Sau khi lên tàu các bạn có nhìn thấy cô Vương không?',
   exList:[{zh:'你们上火车后看见王老师了吗？',py:'Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?',vn:'Sau khi lên tàu các bạn có nhìn thấy cô Vương không?'}],
   hanzi:[
     {c:'上',p:'shàng',type:'独体字 · Chữ đơn',st:3,ord:'丨(sổ) → 一(ngang ngắn) → 一(ngang dài)',rad:'一 (nhất – nét ngang)',mean:'lên, trên',
      tip:'Một vật được đặt phía TRÊN một đường ngang (mặt đất) → chỉ vị trí Ở TRÊN, hướng đi LÊN.',
      cf:'下 (xià – "xuống", trái nghĩa, dễ nhầm vì hình đối xứng)',w:'上车 / 上学 / 上午'},
   ]},
  {n:2,zh:'火车',py:'huǒchē',pos:'Danh từ',vn:'tàu, tàu hoả, xe lửa',em:'🚂',lesson:1,
   ex_zh:'你们上火车后看见王老师了吗？',ex_py:'Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?',ex_vn:'Sau khi lên tàu các bạn có nhìn thấy cô Vương không?',
   exList:[{zh:'你们上火车后看见王老师了吗？',py:'Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?',vn:'Sau khi lên tàu các bạn có nhìn thấy cô Vương không?'}],
   hanzi:[
     {c:'火',p:'huǒ',type:'独体字 · Chữ đơn',st:4,ord:'丶(chấm) → ノ(phẩy) → 丿(phẩy) → 乀(mác)',rad:'火 (hoả – tự thành bộ, lửa)',mean:'lửa',
      tip:'Hình vẽ cách điệu NGỌN LỬA đang bốc cháy, hai bên là tia lửa toé ra → nghĩa LỬA.',
      cf:'大 (dà – "to lớn", dễ nhầm vì các nét phẩy-mác gần giống")',w:'火车 / 开火 / 火气'},
     {c:'车',p:'chē',type:'独体字 · Chữ đơn',st:4,ord:'一(ngang) → 车字框 → 丨(sổ xuyên giữa thân xe)',rad:'车 (xa – tự thành bộ, xe cộ)',mean:'xe, tàu',
      tip:'Hình vẽ cách điệu bánh xe và trục xe nhìn từ trên xuống → nghĩa XE, phương tiện có bánh.',
      cf:'东 (dōng – "phía đông", nét dọc xuyên giữa gần giống")',w:'火车 / 汽车 / 开车'},
   ]},
  {n:3,zh:'中午',py:'zhōngwǔ',pos:'Danh từ',vn:'buổi trưa',em:'🕛',lesson:1,
   ex_zh:'中午车开后，有些人在看书，有些人睡觉了。',ex_py:'Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kànshū, yǒuxiē rén shuìjiào le.',ex_vn:'Buổi trưa, sau khi tàu chạy, có một số người đọc sách, một số người ngủ.',
   exList:[{zh:'中午车开后，有些人在看书，有些人睡觉了。',py:'Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kànshū, yǒuxiē rén shuìjiào le.',vn:'Buổi trưa, sau khi tàu chạy, có một số người đọc sách, một số người ngủ.'}],
   hanzi:[
     {c:'中',p:'zhōng',type:'独体字 · Chữ đơn',st:4,ord:'丨(cổn) xuyên qua giữa 口(khẩu)',rad:'丨 (cổn – nét sổ)',mean:'giữa, trung tâm',
      tip:'Một nét thẳng xuyên qua giữa ô vuông → chỉ vị trí TRUNG TÂM, Ở GIỮA.',
      cf:'冲 (chōng – "xông tới")',w:'中午 / 中国'},
     {c:'午',p:'wǔ',type:'独体字 · Chữ đơn',st:4,ord:'丿(phẩy) → 一(ngang) → 十(chữ thập ở dưới)',rad:'十 (thập – chữ thập, số mười)',mean:'giữa trưa, ngọ',
      tip:'Mặt trời lên đến đỉnh, kẹp giữa hai nét ngang trên một nét sổ đứng → chỉ giờ NGỌ, buổi TRƯA.',
      cf:'牛 (niú – "con bò", dễ nhầm vì hình dáng gần giống")',w:'中午 / 上午 / 下午'},
   ]},
  {n:4,zh:'开',py:'kāi',pos:'Động từ',vn:'lái, chạy, khởi hành (phương tiện giao thông)',em:'🚦',lesson:1,
   ex_zh:'中午车开后，有些人在看书，有些人睡觉了。',ex_py:'Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kànshū, yǒuxiē rén shuìjiào le.',ex_vn:'Buổi trưa, sau khi tàu chạy, có một số người đọc sách, một số người ngủ.',
   exList:[{zh:'中午车开后，有些人在看书，有些人睡觉了。',py:'Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kànshū, yǒuxiē rén shuìjiào le.',vn:'Buổi trưa, sau khi tàu chạy, có một số người đọc sách, một số người ngủ.'}],
   hanzi:[
     {c:'开',p:'kāi',type:'独体字 · Chữ đơn',st:4,ord:'一→丨→一→丨',rad:'廾 (củng)',mean:'mở, bắt đầu, lái',
      tip:'Hình then cài cửa được kéo mở ra → MỞ, khởi đầu; mở rộng nghĩa "vận hành, lái xe".',
      cf:'关 (guān – "đóng", trái nghĩa)',w:'开车 / 车开了'},
   ]},
  {n:5,zh:'有些',py:'yǒuxiē',pos:'Đại từ',vn:'có một số, có một vài',em:'🔹',lesson:1,
   ex_zh:'中午车开后，有些人在看书，有些人睡觉了。',ex_py:'Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kànshū, yǒuxiē rén shuìjiào le.',ex_vn:'Buổi trưa, sau khi tàu chạy, có một số người đọc sách, một số người ngủ.',
   exList:[{zh:'中午车开后，有些人在看书，有些人睡觉了。',py:'Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kànshū, yǒuxiē rén shuìjiào le.',vn:'Buổi trưa, sau khi tàu chạy, có một số người đọc sách, một số người ngủ.'}],
   hanzi:[
     {c:'有',p:'yǒu',type:'上下结构 · Trên-dưới',st:6,ord:'ナ(biến thể) trên → 月(nguyệt) dưới',rad:'月 (nguyệt – mặt trăng/thịt)',mean:'có',
      tip:'ナ(bàn tay cách điệu) cầm lấy 月(miếng thịt) → tay CÓ được vật gì đó → nghĩa CÓ.',
      cf:'育 (yù – "nuôi dưỡng", cũng chứa 月 bên dưới")',w:'有些 / 有的 / 没有'},
     {c:'些',p:'xiē',type:'上下结构 · Trên-dưới',st:8,ord:'此(chỉ) trên → 二(nhị) dưới',rad:'二 (nhị – số hai)',mean:'một số, vài (lượng từ bất định)',
      tip:'此(chỉ định "này") trên + 二(số nhiều, hai nét ngang) dưới → chỉ một số lượng KHÔNG XÁC ĐỊNH, VÀI, MỘT SỐ.',
      cf:'此 (cǐ – "này", thiếu bộ 二 phía dưới")',w:'有些 / 哪些 / 这些'},
   ]},
  {n:6,zh:'有的',py:'yǒude',pos:'Đại từ',vn:'có người, có cái',em:'▪️',lesson:1,
   ex_zh:'有的人在看书，有的人睡觉了。',ex_py:'Yǒude rén zài kànshū, yǒude rén shuìjiào le.',ex_vn:'Có người đọc sách, có người ngủ.',
   exList:[{zh:'有的人在看书，有的人睡觉了。',py:'Yǒude rén zài kànshū, yǒude rén shuìjiào le.',vn:'Có người đọc sách, có người ngủ.'}],
   hanzi:[
     {c:'有',p:'yǒu',type:'上下结构 · Trên-dưới',st:6,ord:'ナ(biến thể) trên → 月(nguyệt) dưới',rad:'月 (nguyệt – mặt trăng/thịt)',mean:'có',
      tip:'ナ(bàn tay cách điệu) cầm lấy 月(miếng thịt) → tay CÓ được vật gì đó → nghĩa CÓ.',
      cf:'育 (yù – "nuôi dưỡng", cũng chứa 月 bên dưới")',w:'有的 / 有些 / 没有'},
     {c:'的',p:'de',type:'左右结构 · Trái-phải',st:8,ord:'白(bạch) trái → 勺(chước) phải',rad:'白 (bạch – trắng)',mean:'trợ từ định ngữ/sở hữu (của)',
      tip:'白(rõ ràng, trắng) ghép với 勺(cái muỗng, mượn âm "dí") → tạo trợ từ CỦA để nối định ngữ, không mang nghĩa gốc.',
      cf:'白 (bái – "trắng", thiếu bộ 勺 bên phải")',w:'我的 / 有的 / 你的'},
   ]},
  {n:7,zh:'了',py:'le',pos:'Trợ từ',vn:'(dùng sau động từ chỉ sự hoàn thành của động tác)',em:'✅',lesson:1,
   ex_zh:'我看了一个电影。',ex_py:'Wǒ kànle yí gè diànyǐng.',ex_vn:'Mình đã xem một bộ phim.',
   exList:[{zh:'我看了一个电影。',py:'Wǒ kànle yí gè diànyǐng.',vn:'Mình đã xem một bộ phim.'}],
   hanzi:[
     {c:'了',p:'le',type:'独体字 · Chữ đơn',st:2,ord:'𠃌(hoành chiết) → 亅(sổ móc)',rad:'乙 (ất – nét cong, tự thành bộ)',mean:'trợ từ hoàn thành động tác / trạng thái mới',
      tip:'Chữ 了 vốn là hình đứa trẻ (子) cuộn tay lại, ý ĐÃ XONG việc, hết cựa quậy → mượn làm trợ từ chỉ hành động ĐÃ HOÀN THÀNH.',
      cf:'子 (zǐ – "con", gần giống nếu thiếu nét ngang trên đầu")',w:'看了 / 写了 / 有了'},
   ]},
  {n:8,zh:'写',py:'xiě',pos:'Động từ',vn:'viết',em:'✍️',lesson:2,
   ex_zh:'你们会说汉语了，也会写汉字了吗？',ex_py:'Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?',ex_vn:'Các em đã biết nói tiếng Trung Quốc rồi, cũng đã biết viết chữ Hán rồi phải không?',
   exList:[{zh:'你们会说汉语了，也会写汉字了吗？',py:'Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?',vn:'Các em đã biết nói tiếng Trung Quốc rồi, cũng đã biết viết chữ Hán rồi phải không?'}],
   hanzi:[
     {c:'写',p:'xiě',type:'上下结构 · Trên-dưới',st:5,ord:'冖(mịch) trên → 与(biến thể) dưới',rad:'冖 (mịch – trùm khăn)',mean:'viết',
      tip:'冖(gói ghém ý tưởng) → dùng bút để VIẾT ra thành chữ.',
      cf:'冠 (guān – "vương miện")',w:'写汉字 / 会写'},
   ]},
  {n:9,zh:'都',py:'dōu',pos:'Phó từ',vn:'đều',em:'🟰',lesson:2,
   ex_zh:'我们都会写了。',ex_py:'Wǒmen dōu huì xiě le.',ex_vn:'Chúng em đều biết viết rồi ạ.',
   exList:[{zh:'我们都会写了。',py:'Wǒmen dōu huì xiě le.',vn:'Chúng em đều biết viết rồi ạ.'}],
   hanzi:[
     {c:'都',p:'dōu',type:'左右结构 · Trái-phải',st:10,ord:'者(giả) trái → 阝(ấp) phải',rad:'阝 (ấp – thành ấp, phần phải)',mean:'đều',
      tip:'者(nhiều người) + 阝(cùng một vùng đất) → mọi người trong một nơi ĐỀU như nhau.',
      cf:'着 (zhe – "trợ từ động thái")',w:'都会 / 都去'},
   ]},
  {n:10,zh:'听见',py:'tīngjiàn',pos:'Động từ',vn:'nghe thấy',em:'👂',lesson:2,
   ex_zh:'老师，我听不见。',ex_py:'Lǎoshī, wǒ tīng bú jiàn.',ex_vn:'Thưa cô, em không nghe thấy ạ.',
   exList:[{zh:'老师，我听不见。',py:'Lǎoshī, wǒ tīng bú jiàn.',vn:'Thưa cô, em không nghe thấy ạ.'}],
   hanzi:[
     {c:'听',p:'tīng',type:'左右结构 · Trái-phải',st:7,ord:'口(khẩu) trái → 斤(biến thể) phải',rad:'口 (khẩu – miệng)',mean:'nghe, nghe thấy',
      tip:'口(miệng nói) được tai TIẾP NHẬN → NGHE.',
      cf:'厅 (tīng – "sảnh, phòng")',w:'听见 / 听说 / 请听'},
     {c:'见',p:'jiàn',type:'上下结构 · Trên-dưới',st:4,ord:'目(biến thể) trên → 儿(nhân) dưới',rad:'见 (kiến – tự thành bộ, nhìn thấy)',mean:'thấy, nhìn thấy',
      tip:'目(con mắt) đặt trên đôi chân 儿(người) → người dùng mắt để NHÌN THẤY, TRÔNG THẤY.',
      cf:'贝 (bèi – "vỏ sò, tiền", dễ nhầm phần dưới")',w:'听见 / 看见 / 见面'},
   ]},
  {n:11,zh:'不要',py:'búyào',pos:'Phó từ',vn:'đừng, không được',em:'🚫',lesson:2,
   ex_zh:'请大家不要说话！',ex_py:'Qǐng dàjiā búyào shuōhuà!',ex_vn:'Mọi người đừng nói chuyện!',
   exList:[{zh:'请大家不要说话！',py:'Qǐng dàjiā búyào shuōhuà!',vn:'Mọi người đừng nói chuyện!'}],
   hanzi:[
     {c:'不',p:'bú',type:'独体字 · Chữ đơn',st:4,ord:'一(ngang) → 丿(phẩy) → 丨(sổ) → 丶(chấm)',rad:'一 (nhất – nét ngang)',mean:'không, chẳng',
      tip:'Hình chim bay lên trời rồi khuất bóng (nét ngang là bầu trời, các nét dưới là đôi cánh) → mượn nghĩa PHỦ ĐỊNH, KHÔNG.',
      cf:'木 (mù – "cây, gỗ", dễ nhầm vì nét cuối gần giống")',w:'不要 / 不是 / 不好'},
     {c:'要',p:'yào',type:'上下结构 · Trên-dưới',st:9,ord:'覀(biến thể của 西) trên → 女(nữ) dưới',rad:'西 (tây – phương Tây, che đậy)',mean:'muốn, cần, phải',
      tip:'覀(nắp đậy, biến thể của 西) trên + 女(người) dưới → hình ảnh giữ lấy, đòi lấy điều mình MUỐN, CẦN.',
      cf:'西 (xī – "phương tây", thiếu bộ 女 ở dưới")',w:'不要 / 要去 / 想要'},
   ]},
  {n:12,zh:'说话',py:'shuōhuà',pos:'Động từ',vn:'nói chuyện',em:'💬',lesson:2,
   ex_zh:'请大家不要说话！',ex_py:'Qǐng dàjiā búyào shuōhuà!',ex_vn:'Mọi người đừng nói chuyện!',
   exList:[{zh:'请大家不要说话！',py:'Qǐng dàjiā búyào shuōhuà!',vn:'Mọi người đừng nói chuyện!'}],
   hanzi:[
     {c:'说',p:'shuō',type:'左右结构 · Trái-phải',st:9,ord:'讠(ngôn) trái → 兑(đoài) phải',rad:'讠 (ngôn – lời nói)',mean:'nói',
      tip:'讠(bộ lời nói) + 兑(trao đổi, vui vẻ) → dùng LỜI để trao đổi, diễn đạt → NÓI.',
      cf:'悦 (yuè – "vui vẻ", bộ 忄 thay vì 讠")',w:'说话 / 说汉语 / 听说'},
     {c:'话',p:'huà',type:'左右结构 · Trái-phải',st:8,ord:'讠(ngôn) trái → 舌(thiệt) phải',rad:'讠 (ngôn – lời nói)',mean:'lời nói, chuyện',
      tip:'讠(lời nói) + 舌(cái lưỡi) → dùng LƯỠI phát ra LỜI NÓI → CÂU CHUYỆN, LỜI.',
      cf:'活 (huó – "sống", bộ 氵 thay vì 讠")',w:'说话 / 电话 / 听话'},
   ]},
  {n:13,zh:'听',py:'tīng',pos:'Động từ',vn:'nghe',em:'👂',lesson:2,
   ex_zh:'请听老师的问题。',ex_py:'Qǐng tīng lǎoshī de wèntí.',ex_vn:'Hãy lắng nghe câu hỏi của cô.',
   exList:[{zh:'请听老师的问题。',py:'Qǐng tīng lǎoshī de wèntí.',vn:'Hãy lắng nghe câu hỏi của cô.'}],
   hanzi:[
     {c:'听',p:'tīng',type:'左右结构 · Trái-phải',st:7,ord:'口(khẩu) trái → 斤(biến thể) phải',rad:'口 (khẩu – miệng)',mean:'nghe, nghe thấy',
      tip:'口(miệng nói) được tai TIẾP NHẬN → NGHE.',
      cf:'厅 (tīng – "sảnh, phòng")',w:'听见 / 请听'},
   ]},
  {n:14,zh:'哪些',py:'nǎxiē',pos:'Đại từ',vn:'những... nào',em:'❓',lesson:2,
   ex_zh:'你们都会写哪些汉字了？',ex_py:'Nǐmen dōu huì xiě nǎxiē Hànzì le?',ex_vn:'Các em đã biết viết những chữ Hán nào rồi?',
   exList:[{zh:'你们都会写哪些汉字了？',py:'Nǐmen dōu huì xiě nǎxiē Hànzì le?',vn:'Các em đã biết viết những chữ Hán nào rồi?'}],
   hanzi:[
     {c:'哪',p:'nǎ',type:'左右结构 · Trái-phải',st:9,ord:'口(khẩu) trái → 那(biến thể) phải',rad:'口 (khẩu – miệng)',mean:'nào, đâu (nghi vấn)',
      tip:'口(miệng hỏi) + 那(kia, chỉ định) → dùng miệng để HỎI chỉ định đối tượng NÀO.',
      cf:'那 (nà – "đó, kia", thiếu bộ 口 bên trái")',w:'哪些 / 哪里 / 哪个'},
     {c:'些',p:'xiē',type:'上下结构 · Trên-dưới',st:8,ord:'此(chỉ) trên → 二(nhị) dưới',rad:'二 (nhị – số hai)',mean:'một số, vài (lượng từ bất định)',
      tip:'此(chỉ định "này") trên + 二(số nhiều, hai nét ngang) dưới → chỉ một số lượng KHÔNG XÁC ĐỊNH, VÀI, MỘT SỐ.',
      cf:'此 (cǐ – "này", thiếu bộ 二 phía dưới")',w:'哪些 / 有些 / 这些'},
   ]},
  {n:15,zh:'字',py:'zì',pos:'Danh từ',vn:'chữ',em:'🈶',lesson:2,
   ex_zh:'我会写这些字了，您看！',ex_py:'Wǒ huì xiě zhèxiē zì le, nín kàn!',ex_vn:'Em đã biết viết những chữ này rồi, cô xem này!',
   exList:[{zh:'我会写这些字了，您看！',py:'Wǒ huì xiě zhèxiē zì le, nín kàn!',vn:'Em đã biết viết những chữ này rồi, cô xem này!'}],
   hanzi:[
     {c:'字',p:'zì',type:'上下结构 · Trên-dưới',st:6,ord:'宀(miên) trên → 子(tử) dưới',rad:'宀 (miên – mái nhà)',mean:'chữ, tên',
      tip:'宀(mái nhà) + 子(con) → con cái sinh ra trong nhà được đặt CHỮ, TÊN.',
      cf:'子 (zǐ – "con")',w:'汉字 / 写字'},
   ]},
  {n:16,zh:'汉语',py:'Hànyǔ',pos:'Danh từ riêng',vn:'tiếng Trung Quốc, tiếng Hán',em:'🇨🇳',lesson:2,
   ex_zh:'你们会说汉语了，也会写汉字了吗？',ex_py:'Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?',ex_vn:'Các em đã biết nói tiếng Trung Quốc rồi, cũng đã biết viết chữ Hán rồi phải không?',
   exList:[{zh:'你们会说汉语了，也会写汉字了吗？',py:'Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?',vn:'Các em đã biết nói tiếng Trung Quốc rồi, cũng đã biết viết chữ Hán rồi phải không?'}],
   hanzi:[
     {c:'汉',p:'Hàn',type:'左右结构 · Trái-phải',st:5,ord:'氵(thuỷ) trái → 又(hựu) phải',rad:'氵 (thuỷ – nước)',mean:'(dân tộc/triều đại) Hán',
      tip:'氵(dòng nước, gợi sông Hán Thuỷ) + 又(bàn tay/lặp lại) → tên vùng đất ven sông, về sau trở thành tên dân tộc HÁN.',
      cf:'双 (shuāng – "đôi, cặp", cũng có 又ở phần dưới nhưng khác bộ")',w:'汉语 / 汉字 / 汉族'},
     {c:'语',p:'yǔ',type:'左右结构 · Trái-phải',st:9,ord:'讠(ngôn) trái → 吾(ngô) phải',rad:'讠 (ngôn – lời nói)',mean:'ngôn ngữ, tiếng nói',
      tip:'讠(lời nói) + 吾(ta, tôi) → LỜI NÓI mà TA dùng để giao tiếp → NGÔN NGỮ.',
      cf:'话 (huà – "lời nói", bộ 舌 thay vì cấu tạo với 吾")',w:'汉语 / 语言 / 英语'},
   ]},
  {n:17,zh:'汉字',py:'Hànzì',pos:'Danh từ riêng',vn:'chữ Hán',em:'漢',lesson:2,
   ex_zh:'你们会说汉语了，也会写汉字了吗？',ex_py:'Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?',ex_vn:'Các em đã biết nói tiếng Trung Quốc rồi, cũng đã biết viết chữ Hán rồi phải không?',
   exList:[{zh:'你们会说汉语了，也会写汉字了吗？',py:'Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?',vn:'Các em đã biết nói tiếng Trung Quốc rồi, cũng đã biết viết chữ Hán rồi phải không?'}],
   hanzi:[
     {c:'汉',p:'Hàn',type:'左右结构 · Trái-phải',st:5,ord:'氵(thuỷ) trái → 又(hựu) phải',rad:'氵 (thuỷ – nước)',mean:'(dân tộc/triều đại) Hán',
      tip:'氵(dòng nước, gợi sông Hán Thuỷ) + 又(bàn tay/lặp lại) → tên vùng đất ven sông, về sau trở thành tên dân tộc HÁN.',
      cf:'双 (shuāng – "đôi, cặp", cũng có 又ở phần dưới nhưng khác bộ")',w:'汉字 / 汉语 / 汉族'},
     {c:'字',p:'zì',type:'上下结构 · Trên-dưới',st:6,ord:'宀(miên) trên → 子(tử) dưới',rad:'宀 (miên – mái nhà)',mean:'chữ, tên',
      tip:'宀(mái nhà) + 子(con) → con cái sinh ra trong nhà được đặt CHỮ, TÊN.',
      cf:'子 (zǐ – "con")',w:'汉字 / 写字 / 名字'},
   ]},
  {n:18,zh:'明年',py:'míngnián',pos:'Danh từ',vn:'sang năm, năm tới',em:'📆',lesson:3,
   ex_zh:'明年女儿上中学。',ex_py:'Míngnián nǚ’ér shàng zhōngxué.',ex_vn:'Sang năm con gái lên trung học.',
   exList:[{zh:'明年女儿上中学。',py:'Míngnián nǚ’ér shàng zhōngxué.',vn:'Sang năm con gái lên trung học.'}],
   hanzi:[
     {c:'明',p:'míng',type:'左右结构 · Trái-phải',st:8,ord:'日(nhật) trái → 月(nguyệt) phải',rad:'日 (nhật – mặt trời)',mean:'sáng, rõ, sang (năm)',
      tip:'日(mặt trời) + 月(mặt trăng) → hai nguồn sáng lớn nhất hợp lại → SÁNG RÕ; dùng chỉ mốc thời gian sắp tới như "ngày mai, năm sau".',
      cf:'朋 (péng – "bạn bè", ghép đôi hai chữ 月")',w:'明年 / 明天 / 说明'},
     {c:'年',p:'nián',type:'独体字 · Chữ đơn',st:6,ord:'丿(phẩy) → 一 → 一 → 丨 → 一 (nét sổ xuyên giữa các nét ngang)',rad:'干 (can – can dự)',mean:'năm',
      tip:'Hình ảnh cây lúa trĩu hạt được gánh về sau một mùa vụ, một chu kỳ canh tác → tượng trưng cho một NĂM.',
      cf:'午 (wǔ – "buổi trưa, giờ ngọ", dễ nhầm vì nét ngang gần giống")',w:'明年 / 今年 / 去年'},
   ]},
  {n:19,zh:'上',py:'shàng',pos:'Động từ',vn:'lên, bắt đầu (làm gì đó vào thời gian cố định)',em:'⬆️',lesson:3,
   ex_zh:'明年女儿上中学。',ex_py:'Míngnián nǚ’ér shàng zhōngxué.',ex_vn:'Sang năm con gái lên trung học.',
   exList:[
     {zh:'明年女儿上中学。',py:'Míngnián nǚ’ér shàng zhōngxué.',vn:'Sang năm con gái lên trung học.'},
     {zh:'儿子也上小学了。',py:'Érzi yě shàng xiǎoxué le.',vn:'Con trai cũng lên tiểu học.'},
   ],
   hanzi:[
     {c:'上',p:'shàng',type:'独体字 · Chữ đơn',st:3,ord:'丨(sổ) → 一(ngang ngắn) → 一(ngang dài)',rad:'一 (nhất – nét ngang)',mean:'lên, bắt đầu (vào thời điểm cố định)',
      tip:'Một vật được đặt phía TRÊN một đường ngang (mặt đất) → chỉ vị trí Ở TRÊN, hướng đi LÊN; mở rộng nghĩa "bắt đầu vào (học, làm việc...)".',
      cf:'下 (xià – "xuống", trái nghĩa, dễ nhầm vì hình đối xứng)',w:'上学 / 上课 / 上班'},
   ]},
  {n:20,zh:'中学',py:'zhōngxué',pos:'Danh từ',vn:'trường trung học, trung học',em:'🏫',lesson:3,
   ex_zh:'明年女儿上中学。',ex_py:'Míngnián nǚ’ér shàng zhōngxué.',ex_vn:'Sang năm con gái lên trung học.',
   exList:[{zh:'明年女儿上中学。',py:'Míngnián nǚ’ér shàng zhōngxué.',vn:'Sang năm con gái lên trung học.'}],
   hanzi:[
     {c:'中',p:'zhōng',type:'独体字 · Chữ đơn',st:4,ord:'丨(cổn) xuyên qua giữa 口(khẩu)',rad:'丨 (cổn – nét sổ)',mean:'giữa, trung tâm',
      tip:'Một nét thẳng xuyên qua giữa ô vuông → chỉ vị trí TRUNG TÂM, Ở GIỮA.',
      cf:'冲 (chōng – "xông tới")',w:'中学 / 中国 / 中午'},
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'⺍(ba chấm) → 冖(mịch) trên → 子(tử) dưới',rad:'子 (tử – con)',mean:'học',
      tip:'⺍(ánh sáng tri thức) + 冖(mái che, trường lớp) + 子(đứa trẻ) → đứa trẻ ở trong mái trường tiếp thu tri thức → HỌC.',
      cf:'觉 (jué/jiào – "cảm giác, ngủ", phần trên giống nhau nhưng dưới là 见")',w:'中学 / 学生 / 上学'},
   ]},
  {n:21,zh:'小学',py:'xiǎoxué',pos:'Danh từ',vn:'trường tiểu học, tiểu học',em:'🏫',lesson:3,
   ex_zh:'儿子也上小学了。',ex_py:'Érzi yě shàng xiǎoxué le.',ex_vn:'Con trai cũng lên tiểu học.',
   exList:[{zh:'儿子也上小学了。',py:'Érzi yě shàng xiǎoxué le.',vn:'Con trai cũng lên tiểu học.'}],
   hanzi:[
     {c:'小',p:'xiǎo',type:'独体字 · Chữ đơn',st:3,ord:'丨(sổ móc) giữa → 丿(phẩy) trái → 丶(chấm) phải',rad:'小 (tiểu – tự thành bộ, nhỏ)',mean:'nhỏ, bé',
      tip:'Một vật bị chia tách thành ba mảnh nhỏ bởi một nét sổ giữa và hai nét chấm hai bên → nghĩa NHỎ, BÉ.',
      cf:'少 (shǎo – "ít", thêm một nét phẩy trên đầu")',w:'小学 / 小学生 / 小狗'},
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'⺍(ba chấm) → 冖(mịch) trên → 子(tử) dưới',rad:'子 (tử – con)',mean:'học',
      tip:'⺍(ánh sáng tri thức) + 冖(mái che, trường lớp) + 子(đứa trẻ) → đứa trẻ ở trong mái trường tiếp thu tri thức → HỌC.',
      cf:'觉 (jué/jiào – "cảm giác, ngủ", phần trên giống nhau nhưng dưới là 见")',w:'小学 / 学生 / 上学'},
   ]},
  {n:22,zh:'中学生',py:'zhōngxuéshēng',pos:'Danh từ',vn:'học sinh trung học, học sinh cấp hai',em:'🧑‍🎓',lesson:3,
   ex_zh:'我们家有了一个中学生。',ex_py:'Wǒmen jiā yǒule yí gè zhōngxuéshēng.',ex_vn:'Nhà mình có một học sinh trung học rồi.',
   exList:[{zh:'我们家有了一个中学生。',py:'Wǒmen jiā yǒule yí gè zhōngxuéshēng.',vn:'Nhà mình có một học sinh trung học rồi.'}],
   hanzi:[
     {c:'中',p:'zhōng',type:'独体字 · Chữ đơn',st:4,ord:'丨(cổn) xuyên qua giữa 口(khẩu)',rad:'丨 (cổn – nét sổ)',mean:'giữa, trung tâm',
      tip:'Một nét thẳng xuyên qua giữa ô vuông → chỉ vị trí TRUNG TÂM, Ở GIỮA.',
      cf:'冲 (chōng – "xông tới")',w:'中学生 / 中学 / 中国'},
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'⺍(ba chấm) → 冖(mịch) trên → 子(tử) dưới',rad:'子 (tử – con)',mean:'học',
      tip:'⺍(ánh sáng tri thức) + 冖(mái che, trường lớp) + 子(đứa trẻ) → đứa trẻ ở trong mái trường tiếp thu tri thức → HỌC.',
      cf:'觉 (jué/jiào – "cảm giác, ngủ", phần trên giống nhau nhưng dưới là 见")',w:'中学生 / 学生 / 上学'},
     {c:'生',p:'shēng',type:'独体字 · Chữ đơn',st:5,ord:'丿(phẩy) → 一 → 一 → 丨 → 一 (nét mọc lên từ mặt đất)',rad:'生 (sinh – tự thành bộ)',mean:'sinh ra, sống, (hậu tố) học sinh',
      tip:'Hình cây cỏ mọc lên khỏi mặt đất (nét ngang dưới cùng là mặt đất) → nghĩa SINH RA, MỌC LÊN, SỐNG.',
      cf:'主 (zhǔ – "chủ", dễ nhầm vì nét trên gần giống")',w:'中学生 / 学生 / 出生'},
   ]},
  {n:23,zh:'小学生',py:'xiǎoxuéshēng',pos:'Danh từ',vn:'học sinh tiểu học, học sinh cấp một',em:'🧒',lesson:3,
   ex_zh:'还有了一个小学生。',ex_py:'Hái yǒule yí gè xiǎoxuéshēng.',ex_vn:'Còn có thêm một học sinh tiểu học nữa.',
   exList:[{zh:'还有了一个小学生。',py:'Hái yǒule yí gè xiǎoxuéshēng.',vn:'Còn có thêm một học sinh tiểu học nữa.'}],
   hanzi:[
     {c:'小',p:'xiǎo',type:'独体字 · Chữ đơn',st:3,ord:'丨(sổ móc) giữa → 丿(phẩy) trái → 丶(chấm) phải',rad:'小 (tiểu – tự thành bộ, nhỏ)',mean:'nhỏ, bé',
      tip:'Một vật bị chia tách thành ba mảnh nhỏ bởi một nét sổ giữa và hai nét chấm hai bên → nghĩa NHỎ, BÉ.',
      cf:'少 (shǎo – "ít", thêm một nét phẩy trên đầu")',w:'小学生 / 小学 / 小狗'},
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'⺍(ba chấm) → 冖(mịch) trên → 子(tử) dưới',rad:'子 (tử – con)',mean:'học',
      tip:'⺍(ánh sáng tri thức) + 冖(mái che, trường lớp) + 子(đứa trẻ) → đứa trẻ ở trong mái trường tiếp thu tri thức → HỌC.',
      cf:'觉 (jué/jiào – "cảm giác, ngủ", phần trên giống nhau nhưng dưới là 见")',w:'小学生 / 学生 / 上学'},
     {c:'生',p:'shēng',type:'独体字 · Chữ đơn',st:5,ord:'丿(phẩy) → 一 → 一 → 丨 → 一 (nét mọc lên từ mặt đất)',rad:'生 (sinh – tự thành bộ)',mean:'sinh ra, sống, (hậu tố) học sinh',
      tip:'Hình cây cỏ mọc lên khỏi mặt đất (nét ngang dưới cùng là mặt đất) → nghĩa SINH RA, MỌC LÊN, SỐNG.',
      cf:'主 (zhǔ – "chủ", dễ nhầm vì nét trên gần giống")',w:'小学生 / 学生 / 出生'},
   ]},
  {n:24,zh:'上学',py:'shàngxué',pos:'Động từ',vn:'đi học, bắt đầu đi học',em:'🎒',lesson:3,
   ex_zh:'上学后，他们都忙了。',ex_py:'Shàngxué hòu, tāmen dōu máng le.',ex_vn:'Sau khi vào học, các con đều bận rộn cả.',
   exList:[{zh:'上学后，他们都忙了。',py:'Shàngxué hòu, tāmen dōu máng le.',vn:'Sau khi vào học, các con đều bận rộn cả.'}],
   hanzi:[
     {c:'上',p:'shàng',type:'独体字 · Chữ đơn',st:3,ord:'丨(sổ) → 一(ngang ngắn) → 一(ngang dài)',rad:'一 (nhất – nét ngang)',mean:'lên, bắt đầu (vào thời điểm cố định)',
      tip:'Một vật được đặt phía TRÊN một đường ngang (mặt đất) → chỉ vị trí Ở TRÊN, hướng đi LÊN; mở rộng nghĩa "bắt đầu vào (học, làm việc...)".',
      cf:'下 (xià – "xuống", trái nghĩa, dễ nhầm vì hình đối xứng)',w:'上学 / 上课 / 上班'},
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'⺍(ba chấm) → 冖(mịch) trên → 子(tử) dưới',rad:'子 (tử – con)',mean:'học',
      tip:'⺍(ánh sáng tri thức) + 冖(mái che, trường lớp) + 子(đứa trẻ) → đứa trẻ ở trong mái trường tiếp thu tri thức → HỌC.',
      cf:'觉 (jué/jiào – "cảm giác, ngủ", phần trên giống nhau nhưng dưới là 见")',w:'上学 / 学生 / 中学'},
   ]},
  {n:25,zh:'他们',py:'tāmen',pos:'Đại từ',vn:'họ, chúng, bọn họ, các anh ấy, các em ấy...',em:'👬',lesson:3,
   ex_zh:'上学后，他们都忙了。',ex_py:'Shàngxué hòu, tāmen dōu máng le.',ex_vn:'Sau khi vào học, các con đều bận rộn cả.',
   exList:[{zh:'上学后，他们都忙了。',py:'Shàngxué hòu, tāmen dōu máng le.',vn:'Sau khi vào học, các con đều bận rộn cả.'}],
   hanzi:[
     {c:'他',p:'tā',type:'左右结构 · Trái-phải',st:5,ord:'亻(nhân) trái → 也(dã) phải',rad:'亻 (nhân – người)',mean:'anh ấy, nó, hắn (ngôi thứ 3 nam)',
      tip:'亻(người) + 也(cũng) → "người kia CŨNG NHƯ VẬY" → dùng chỉ NGƯỜI KHÁC, ngôi thứ ba (nam).',
      cf:'她 (tā – "cô ấy", bộ 女 thay vì 亻")',w:'他们 / 他是 / 他的'},
     {c:'们',p:'men',type:'左右结构 · Trái-phải',st:5,ord:'亻(nhân) trái → 门(môn) phải',rad:'亻 (nhân – người)',mean:'(hậu tố chỉ số nhiều cho người/đại từ)',
      tip:'亻(người) + 门(cánh cửa) → nhiều NGƯỜI cùng qua một CỬA → biểu thị SỐ NHIỀU.',
      cf:'门 (mén – "cửa", thiếu bộ 亻 bên trái")',w:'他们 / 我们 / 你们'},
   ]},
  {n:26,zh:'她们',py:'tāmen',pos:'Đại từ',vn:'họ, chúng, bọn họ, các chị ấy, các em ấy... (nữ)',em:'👭',lesson:3,
   ex_zh:'她们都是小学生。',ex_py:'Tāmen dōu shì xiǎoxuéshēng.',ex_vn:'Các em ấy đều là học sinh tiểu học.',
   exList:[{zh:'她们都是小学生。',py:'Tāmen dōu shì xiǎoxuéshēng.',vn:'Các em ấy đều là học sinh tiểu học.'}],
   hanzi:[
     {c:'她',p:'tā',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 也(dã) phải',rad:'女 (nữ – phụ nữ)',mean:'cô ấy, chị ấy (ngôi thứ 3 nữ)',
      tip:'女(phụ nữ) + 也(cũng) → "người phụ nữ kia CŨNG NHƯ VẬY" → dùng chỉ NGÔI THỨ BA GIỐNG NỮ.',
      cf:'他 (tā – "anh ấy", bộ 亻 thay vì 女")',w:'她们 / 她是 / 她的'},
     {c:'们',p:'men',type:'左右结构 · Trái-phải',st:5,ord:'亻(nhân) trái → 门(môn) phải',rad:'亻 (nhân – người)',mean:'(hậu tố chỉ số nhiều cho người/đại từ)',
      tip:'亻(người) + 门(cánh cửa) → nhiều NGƯỜI cùng qua một CỬA → biểu thị SỐ NHIỀU.',
      cf:'门 (mén – "cửa", thiếu bộ 亻 bên trái")',w:'她们 / 我们 / 你们'},
   ]},
  {n:27,zh:'它们',py:'tāmen',pos:'Đại từ',vn:'chúng (đại từ nhân xưng ngôi thứ ba số nhiều, chỉ vật)',em:'📦',lesson:3,
   ex_zh:'它们都在桌子上。',ex_py:'Tāmen dōu zài zhuōzi shang.',ex_vn:'Chúng đều ở trên bàn.',
   exList:[{zh:'它们都在桌子上。',py:'Tāmen dōu zài zhuōzi shang.',vn:'Chúng đều ở trên bàn.'}],
   hanzi:[
     {c:'它',p:'tā',type:'上下结构 · Trên-dưới',st:5,ord:'冖(mái che) trên → 匕(chuỷ) dưới',rad:'宀 (miên – mái nhà)',mean:'nó (đại từ chỉ vật/con vật)',
      tip:'Chữ 它 vốn là hình con rắn nằm cuộn dưới mái nhà (宀) → về sau mượn làm đại từ chỉ NÓ (vật, con vật).',
      cf:'宅 (zhái – "nhà ở", cũng mang bộ 宀")',w:'它们 / 它是 / 它的'},
     {c:'们',p:'men',type:'左右结构 · Trái-phải',st:5,ord:'亻(nhân) trái → 门(môn) phải',rad:'亻 (nhân – người)',mean:'(hậu tố chỉ số nhiều cho người/đại từ)',
      tip:'亻(người) + 门(cánh cửa) → nhiều NGƯỜI cùng qua một CỬA → biểu thị SỐ NHIỀU, ở đây mở rộng dùng cho đại từ chỉ vật.',
      cf:'门 (mén – "cửa", thiếu bộ 亻 bên trái")',w:'它们 / 我们 / 你们'},
   ]},
  {n:28,zh:'晚',py:'wǎn',pos:'Tính từ',vn:'muộn, trễ',em:'🌙',lesson:3,
   ex_zh:'太晚了，睡觉吧。',ex_py:'Tài wǎn le, shuìjiào ba.',ex_vn:'Muộn quá rồi, đi ngủ thôi.',
   exList:[{zh:'太晚了，睡觉吧。',py:'Tài wǎn le, shuìjiào ba.',vn:'Muộn quá rồi, đi ngủ thôi.'}],
   hanzi:[
     {c:'晚',p:'wǎn',type:'左右结构 · Trái-phải',st:11,ord:'日(nhật) trái → 免(miễn) phải',rad:'日 (nhật – mặt trời)',mean:'muộn, tối',
      tip:'Bộ 日(mặt trời) đã lặn muộn → chỉ thời gian buổi TỐI, MUỘN.',
      cf:'免 (miǎn – "miễn trừ", thiếu bộ 日)',w:'太晚了 / 晚上'},
   ]},
];

var wuData = [
  {img:'/images/hsk1v3-bai-14/huoche.jpg',label:'火车',py:'huǒchē',letter:'A'},
  {img:'/images/hsk1v3-bai-14/kanjian.jpg',label:'看见',py:'kànjiàn',letter:'B'},
  {img:'/images/hsk1v3-bai-14/hanzi.jpg',label:'汉字',py:'Hànzì',letter:'C'},
  {img:'/images/hsk1v3-bai-14/ting.jpg',label:'听',py:'tīng',letter:'D'},
  {img:'/images/hsk1v3-bai-14/xiaoxuesheng.jpg',label:'小学生',py:'xiǎoxuéshēng',letter:'E'},
  {img:'/images/hsk1v3-bai-14/shuohua.jpg',label:'说话',py:'shuōhuà',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 14: Ngữ âm + Hán tự + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-14/wb-yuyin.mp3',
      blocks: [
        { type: 'pymatch', caption: 'Nghe âm tiết, ghép với từ đúng',
          items: [{py:'nǐ hǎo', hz:'你好'}, {py:'méi guānxi', hz:'没关系'}, {py:'nánpéngyou', hz:'男朋友'}, {py:'bú kèqi', hz:'不客气'}, {py:'nǚ\'ér', hz:'女儿'}, {py:'hǎowánr', hz:'好玩儿'}] },
        { type: 'tonemc', noBlank: true, caption: 'Nghe câu, chọn đây là câu trần thuật hay câu nghi vấn',
          items: [
            {before:'你是学生吗？', after:'', answer:'Câu nghi vấn', options:['Câu trần thuật','Câu nghi vấn']},
            {before:'你是哪国人？', after:'', answer:'Câu nghi vấn', options:['Câu trần thuật','Câu nghi vấn']},
            {before:'我叫李文。', after:'', answer:'Câu trần thuật', options:['Câu trần thuật','Câu nghi vấn']},
            {before:'今天我休息。', after:'', answer:'Câu trần thuật', options:['Câu trần thuật','Câu nghi vấn']},
            {before:'谁是老师？', after:'', answer:'Câu nghi vấn', options:['Câu trần thuật','Câu nghi vấn']},
            {before:'我想去超市买东西。', after:'', answer:'Câu trần thuật', options:['Câu trần thuật','Câu nghi vấn']}
          ] },
        { type: 'table', caption: 'Chữ Hán (汉字) — Cấu trúc hợp thể (tiếp)',
          rows: [
            ['上下结构 (trên-dưới)', '分 (fēn)'],
            ['上中下结构 (trên-giữa-dưới)', '爱 (ài)'],
            ['半包围结构 (bán bao vây)', '同 (tóng)'],
            ['全包围结构 (bao vây trọn)', '国 (guó)']
          ] },
        { type: 'table', caption: 'Ví dụ luyện viết từ',
          rows: [
            ['苹 (píng) → 苹果 (píngguǒ)', '爱 (ài) → 爱读书 (ài dúshū)'],
            ['病 (bìng) → 看病 (kànbìng)', '回 (huí) → 回家 (huíjiā)']
          ],
          note: 'Phần luyện viết tay theo từng nét cần thực hành trực tiếp trên giấy/vở theo mẫu trong sách.' }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-14/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-14-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-14-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-14-wb/q1c.jpg'}
            ], answer: 'C' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-14-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-14-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-14-wb/q2c.jpg'}
            ], answer: 'C' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-14-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-14-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-14-wb/q3c.jpg'}
            ], answer: 'B' },
            { n: 4, options: [
              {key:'A', text:'都写', py:'dōu xiě'},
              {key:'B', text:'听见了', py:'tīngjiàn le'},
              {key:'C', text:'都会写了', py:'dōu huì xiě le'}
            ], answer: 'C' },
            { n: 5, options: [
              {key:'A', text:'学习', py:'xuéxí'},
              {key:'B', text:'超市', py:'chāoshì'},
              {key:'C', text:'买面包', py:'mǎi miànbāo'}
            ], answer: 'B' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-14-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-14-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-14-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-14-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-14-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-14-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-14-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-14-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-14-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-14-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-14-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-14-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 9, options: [
              {key:'A', text:'下课后', py:'xiàkè hòu'},
              {key:'B', text:'上课前', py:'shàngkè qián'},
              {key:'C', text:'回家后', py:'huí jiā hòu'}
            ], answer: 'A' },
            { n: 10, options: [
              {key:'A', text:'小狗', py:'xiǎo gǒu'},
              {key:'B', text:'小猫', py:'xiǎo māo'},
              {key:'C', text:'小狗和小猫', py:'xiǎo gǒu hé xiǎo māo'}
            ], answer: 'A' }
          ],
          reading: [
            { n: 11, prompt: '王先生今天生病了，没来上班。', promptPy: 'Wáng xiānsheng jīntiān shēngbìng le, méi lái shàngbān.', options: [
              {key:'A', img:'/images/hsk1v3-bai-14-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-14-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-14-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-14-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 12, prompt: '火车上，有的人在读书，有的人在睡觉。', promptPy: 'Huǒchē shang, yǒude rén zài dúshū, yǒude rén zài shuìjiào.', options: [
              {key:'A', img:'/images/hsk1v3-bai-14-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-14-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-14-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-14-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 13, prompt: '喂，他们都来我家了，你也来吧。', promptPy: 'Wèi, tāmen dōu lái wǒ jiā le, nǐ yě lái ba.', options: [
              {key:'A', img:'/images/hsk1v3-bai-14-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-14-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-14-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-14-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 14, prompt: '谁去学校了？', promptPy: 'Shéi qù xuéxiào le?', options: [
              {key:'A', text:'是的，我睡了一觉。', py:'Shì de, wǒ shuìle yí jiào.'},
              {key:'B', text:'我们都去了。', py:'Wǒmen dōu qù le.'},
              {key:'C', text:'写字、看书、吃饭。', py:'Xiě zì, kàn shū, chī fàn.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'B' },
            { n: 15, prompt: '你下午没去医院吗？', promptPy: 'Nǐ xiàwǔ méi qù yīyuàn ma?', options: [
              {key:'A', text:'是的，我睡了一觉。', py:'Shì de, wǒ shuìle yí jiào.'},
              {key:'B', text:'我们都去了。', py:'Wǒmen dōu qù le.'},
              {key:'C', text:'写字、看书、吃饭。', py:'Xiě zì, kàn shū, chī fàn.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'A' },
            { n: 16, prompt: '你今天上午都忙了些什么？', promptPy: 'Nǐ jīntiān shàngwǔ dōu mángle xiē shénme?', options: [
              {key:'A', text:'是的，我睡了一觉。', py:'Shì de, wǒ shuìle yí jiào.'},
              {key:'B', text:'我们都去了。', py:'Wǒmen dōu qù le.'},
              {key:'C', text:'写字、看书、吃饭。', py:'Xiě zì, kàn shū, chī fàn.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'C' },
            { n: 17, prompt: '我喝了一杯（　）。', promptPy: 'Wǒ hēle yì bēi ( ).', options: [
              {key:'A', text:'都', py:'dōu'},
              {key:'B', text:'茶', py:'chá'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：上课了，请大家不要说话。\n女：好的，老师，我们（　）不说话了。', promptPy: 'Shàngkè le, qǐng dàjiā búyào shuōhuà. / Hǎo de, lǎoshī, wǒmen ( ) bù shuōhuà le.', options: [
              {key:'A', text:'都', py:'dōu'},
              {key:'B', text:'茶', py:'chá'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '服务员，我想问一下，我们的房间号是多少？\n★说话人想知道什么？', promptPy: 'Fúwùyuán, wǒ xiǎng wèn yíxià, wǒmen de fángjiānhào shì duōshao?', options: [
              {key:'A', text:'时间', py:'shíjiān'},
              {key:'B', text:'电话号', py:'diànhuàhào'},
              {key:'C', text:'房间号', py:'fángjiānhào'}
            ], answer: 'C' },
            { n: 20, prompt: '儿子和女儿都上小学了，他们会写很多字了。\n★说话人的两个孩子是：', promptPy: 'Érzi hé nǚ\'ér dōu shàng xiǎoxué le, tāmen huì xiě hěn duō zì le.', options: [
              {key:'A', text:'小学生', py:'xiǎoxuéshēng'},
              {key:'B', text:'中学生', py:'zhōngxuéshēng'},
              {key:'C', text:'大学生', py:'dàxuéshēng'}
            ], answer: 'A' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'白家月和陈天中谈论上次课外旅行 · Trên chuyến tàu',
   preQuiz:[
     {q:'陈天中（　）王老师。',opts:['正在看','没看见','看见了'],ans:1},
     {q:'陈天中在火车上（　）。',opts:['读书','找王老师','看了一个电影'],ans:2},
   ],
   lines:[
     {sp:0,zh:'你们上火车后看见王老师了吗？',py:'Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?',vn:'Sau khi lên tàu các bạn có nhìn thấy cô Vương không?'},
     {sp:1,zh:'没看见。中午车开后，有些人在看书，有些人睡觉了。',py:'Méi kànjiàn. Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kànshū, yǒuxiē rén shuìjiào le.',vn:'Không nhìn thấy đâu. Buổi trưa, sau khi tàu chạy, có một số người đọc sách, một số người ngủ.'},
     {sp:0,zh:'你呢？',py:'Nǐ ne?',vn:'Còn bạn thì sao?'},
     {sp:1,zh:'我看了一个电影。',py:'Wǒ kànle yí gè diànyǐng.',vn:'Mình đã xem một bộ phim.'},
   ]},
  {scene:'王一飞询问学生们的学习情况 · Hỏi bài trên lớp',
   preQuiz:[
     {q:'同学们（　）汉语了。',opts:['想说','不会说','都会说'],ans:2},
     {q:'陈天中（　）王老师在说什么。',opts:['听见了','没听见','不想听'],ans:1},
   ],
   lines:[
     {sp:0,zh:'你们会说汉语了，也会写汉字了吗？',py:'Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?',vn:'Các em đã biết nói tiếng Trung Quốc rồi, cũng đã biết viết chữ Hán rồi phải không?'},
     {sp:1,zh:'我们都会写了。',py:'Wǒmen dōu huì xiě le.',vn:'Chúng em đều biết viết rồi ạ.'},
     {sp:2,zh:'老师，我听不见。',py:'Lǎoshī, wǒ tīng bú jiàn.',vn:'Thưa cô, em không nghe thấy ạ.'},
     {sp:0,zh:'请大家不要说话！请听老师的问题：你们都会写哪些汉字了？',py:'Qǐng dàjiā búyào shuōhuà! Qǐng tīng lǎoshī de wèntí: Nǐmen dōu huì xiě nǎxiē Hànzì le?',vn:'Mọi người đừng nói chuyện! Hãy lắng nghe câu hỏi của cô: Các em đã biết viết những chữ Hán nào rồi?'},
     {sp:2,zh:'我会写这些字了，您看！',py:'Wǒ huì xiě zhèxiē zì le, nín kàn!',vn:'Cô xem này, em đã biết viết những chữ này rồi!'},
   ]},
  {scene:'刘明和王一雪谈论孩子的升学情况 · Con lên lớp mới',
   preQuiz:[
     {q:'明年刘明和王一雪的女儿（　）。',opts:['上小学','上中学','上大学'],ans:1},
     {q:'（　）孩子们都忙了。',opts:['上学','上学前','上学后'],ans:2},
   ],
   lines:[
     {sp:0,zh:'明年女儿上中学。',py:'Míngnián nǚ’ér shàng zhōngxué.',vn:'Sang năm con gái lên trung học.'},
     {sp:1,zh:'对。儿子也上小学了。',py:'Duì. Érzi yě shàng xiǎoxué le.',vn:'Đúng vậy. Con trai cũng lên tiểu học.'},
     {sp:0,zh:'我们家有了一个中学生。',py:'Wǒmen jiā yǒule yí gè zhōngxuéshēng.',vn:'Nhà mình có một học sinh trung học rồi.'},
     {sp:1,zh:'还有了一个小学生。',py:'Hái yǒule yí gè xiǎoxuéshēng.',vn:'Còn có thêm một học sinh tiểu học nữa.'},
     {sp:0,zh:'上学后，他们都忙了。',py:'Shàngxué hòu, tāmen dōu máng le.',vn:'Sau khi vào học, các con đều bận rộn cả.'},
     {sp:1,zh:'是的。太晚了，睡觉吧。',py:'Shì de. Tài wǎn le, shuìjiào ba.',vn:'Đúng vậy. Muộn quá rồi, đi ngủ thôi.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'火', right:'车'},
  {left:'说', right:'话'},
  {left:'听', right:'见'},
  {left:'中', right:'学'},
  {left:'小', right:'学'},
  {left:'上', right:'学'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'你们', blank:'上火车后', post:'看见王老师了吗？', hint:'(sau khi lên tàu)', ans:'上火车后'},
  {pre:'', blank:'我看了一个电影', post:'。', hint:'(đã xem một bộ phim)', ans:'我看了一个电影'},
  {pre:'你们会说汉语了，也', blank:'会写汉字了', post:'吗？', hint:'(cũng biết viết chữ Hán)', ans:'会写汉字了'},
  {pre:'请大家', blank:'不要说话', post:'！', hint:'(đừng nói chuyện)', ans:'不要说话'},
  {pre:'我会写', blank:'这些字了', post:'，您看！', hint:'(những chữ này rồi)', ans:'这些字了'},
  {pre:'明年女儿', blank:'上中学', post:'。', hint:'(lên trung học)', ans:'上中学'},
  {pre:'我们家', blank:'有了一个中学生', post:'。', hint:'(có một học sinh trung học)', ans:'有了一个中学生'},
  {pre:'上学后，他们', blank:'都忙了', post:'。', hint:'(đều bận rộn)', ans:'都忙了'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你们','上','火车','后','看见','王老师','了','吗','？'], ans:'你们上火车后看见王老师了吗？', audio:'你们上火车后看见王老师了吗？'},
  {words:['我','看','了','一个','电影','。'], ans:'我看了一个电影。', audio:'我看了一个电影。'},
  {words:['我们','都','会','写','了','。'], ans:'我们都会写了。', audio:'我们都会写了。'},
  {words:['请','大家','不要','说话','！'], ans:'请大家不要说话！', audio:'请大家不要说话！'},
  {words:['明年','女儿','上','中学','。'], ans:'明年女儿上中学。', audio:'明年女儿上中学。'},
  {words:['上学','后','，','他们','都','忙','了','。'], ans:'上学后，他们都忙了。', audio:'上学后，他们都忙了。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"我看了一个电影。" nghĩa là gì?', opts:['Tôi đã xem một bộ phim.', 'Tôi đang xem phim.', 'Tôi muốn xem phim.', 'Tôi không xem phim.'], ans:0},
  {q:'Trợ từ động thái "了(2)" đứng ở vị trí nào?', opts:['sau động từ, biểu thị hành động đã hoàn thành', 'cuối câu, biểu thị tình huống mới', 'trước động từ', 'sau tính từ'], ans:0},
  {q:'"我们都会写了。" nghĩa là gì?', opts:['Chúng tôi đều biết viết rồi.', 'Chúng tôi chưa biết viết.', 'Chỉ có một người biết viết.', 'Chúng tôi không muốn viết.'], ans:0},
  {q:'Phó từ phạm vi "都" có đặc điểm gì?', opts:['đối tượng được bao quát đứng trước 都', 'đối tượng được bao quát đứng sau 都', 'chỉ dùng trong câu hỏi', 'chỉ dùng với danh từ riêng'], ans:0},
  {q:'"上课、下课、睡觉" được gọi là loại từ gì?', opts:['từ ly hợp (离合词)', 'từ láy', 'từ mượn', 'lượng từ'], ans:0},
  {q:'"明年女儿上中学。" nghĩa là gì?', opts:['Sang năm con gái lên trung học.', 'Năm ngoái con gái học trung học.', 'Con gái không muốn học.', 'Con gái đã tốt nghiệp trung học.'], ans:0},
  {q:'"上学后，他们都忙了。" nghĩa là gì?', opts:['Sau khi vào học, các con đều bận rộn cả.', 'Trước khi vào học, các con rất rảnh.', 'Các con không thích đi học.', 'Các con vẫn chưa đi học.'], ans:0},
  {q:'Khi phủ định trợ từ động thái "了(2)", dùng từ nào và có giữ "了" không?', opts:['dùng "没", bỏ "了"', 'dùng "不", giữ "了"', 'dùng "没", giữ "了"', 'dùng "别", bỏ "了"'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："你昨天做什么了？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Hôm qua bạn đã làm gì?" Bạn trả lời thế nào?',
     hint: '我……了。', sample: '我看了一个电影。', sample_vn: 'Tôi đã xem một bộ phim.',
     note: 'Trợ từ động thái "了(2)" đặt sau động từ để nói về hành động đã hoàn thành.'},
    {q_zh: '老师问："你们都会写汉字了吗？" 你怎么回答？', q_vn: 'Cô giáo hỏi: "Các em đã biết viết chữ Hán chưa?" Bạn trả lời thế nào?',
     hint: '我们都……了。', sample: '我们都会写了。', sample_vn: 'Chúng em đều biết viết rồi ạ.',
     note: 'Phó từ "都" đặt sau đối tượng được nói tới (chúng em), trước động từ.'},
    {q_zh: '有人问你明年打算做什么，你怎么回答？', q_vn: 'Có người hỏi bạn năm sau định làm gì, bạn trả lời thế nào?',
     hint: '明年我……', sample: '明年我要上中学。', sample_vn: 'Sang năm tôi lên trung học.',
     note: '"明年" (sang năm) đặt đầu câu làm trạng ngữ chỉ thời gian.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Mình đã xem một bộ phim.', zh:'我看了一个电影。', py:'Wǒ kànle yí gè diànyǐng.'},
  {vi:'Chúng em đều biết viết rồi ạ.', zh:'我们都会写了。', py:'Wǒmen dōu huì xiě le.'},
  {vi:'Mọi người đừng nói chuyện!', zh:'请大家不要说话！', py:'Qǐng dàjiā búyào shuōhuà!'},
  {vi:'Sang năm con gái lên trung học.', zh:'明年女儿上中学。', py:'Míngnián nǚ’ér shàng zhōngxué.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Thưa cô, em không nghe thấy ạ.', zh:'老师，我听不见。', py:'Lǎoshī, wǒ tīng bú jiàn.'},
  {vi:'Các em đã biết viết những chữ Hán nào rồi?', zh:'你们都会写哪些汉字了？', py:'Nǐmen dōu huì xiě nǎxiē Hànzì le?'},
  {vi:'Con trai cũng lên tiểu học.', zh:'儿子也上小学了。', py:'Érzi yě shàng xiǎoxué le.'},
  {vi:'Muộn quá rồi, đi ngủ thôi.', zh:'太晚了，睡觉吧。', py:'Tài wǎn le, shuìjiào ba.'},
];
