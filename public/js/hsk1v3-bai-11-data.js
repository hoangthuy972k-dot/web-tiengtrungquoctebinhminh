// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 11: 我读大学呢
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'时候',py:'shíhou',pos:'Danh từ',vn:'lúc, khi',em:'⏳',lesson:1,
   ex_zh:'喂，李文，你什么时候能到饭店？',ex_py:'Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?',ex_vn:'A lô, Lý Văn à, khi nào em có thể đến nhà hàng?',
   exList:[{zh:'喂，李文，你什么时候能到饭店？',py:'Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?',vn:'A lô, Lý Văn à, khi nào em có thể đến nhà hàng?'}],
   hanzi:[
     {c:'时',p:'shí',type:'左右结构 · Trái-phải',st:7,ord:'日(nhật) trái → 寸(thốn) phải',rad:'日 (nhật – mặt trời, ngày)',mean:'giờ, lúc, thời gian',
      tip:'日(mặt trời, chỉ ngày) + 寸(tấc, đo lường) → dùng mặt trời để ĐO thời gian trong NGÀY = GIỜ, LÚC.',
      cf:'村 (cūn – "làng thôn", cùng chứa 寸)',w:'时候 / 有时候 / 小时'},
     {c:'候',p:'hou',type:'左右结构 · Trái-phải',st:10,ord:'亻(nhân) trái → 𠊱(biến thể) phải',rad:'亻 (nhân – người)',mean:'chờ đợi; thời điểm, lúc',
      tip:'亻(người) đứng cạnh 侯(âm gợi "hầu") → NGƯỜI đứng đợi tại một THỜI ĐIỂM nào đó = CHỜ ĐỢI, LÚC.',
      cf:'侯 (hóu – "hầu tước", thiếu bộ 亻 bên trái)',w:'时候 / 问候 / 有时候'},
   ]},
  {n:2,zh:'饭店',py:'fàndiàn',pos:'Danh từ',vn:'nhà hàng, khách sạn',em:'🍽️',lesson:1,
   ex_zh:'你什么时候能到饭店？',ex_py:'Nǐ shénme shíhou néng dào fàndiàn?',ex_vn:'Khi nào em có thể đến nhà hàng?',
   exList:[{zh:'你什么时候能到饭店？',py:'Nǐ shénme shíhou néng dào fàndiàn?',vn:'Khi nào em có thể đến nhà hàng?'}],
   hanzi:[
     {c:'饭',p:'fàn',type:'左右结构 · Trái-phải',st:7,ord:'饣(thực) trái → 反(phản) phải',rad:'饣 (thực – ăn, đồ ăn)',mean:'cơm, bữa ăn',
      tip:'饣(bộ ăn) + 反(gợi âm "phàn") → thứ để ĂN trong mỗi bữa = CƠM.',
      cf:'饱 (bǎo – "no", cùng bộ 饣)',w:'米饭 / 饭店 / 吃饭'},
     {c:'店',p:'diàn',type:'半包围结构 · Bán bao vây',st:8,ord:'广(nghiễm) ngoài → 占(chiêm) trong',rad:'广 (nghiễm – mái nhà, mái che)',mean:'cửa hàng, tiệm, quán',
      tip:'广(mái nhà che) + 占(chiếm giữ một chỗ) → CHIẾM một khoảng dưới MÁI NHÀ để buôn bán = CỬA HÀNG.',
      cf:'占 (zhàn – "chiếm giữ", thiếu bộ 广 phía trên)',w:'饭店 / 商店 / 书店'},
   ]},
  {n:3,zh:'知道',py:'zhīdào',pos:'Động từ',vn:'biết, nhận ra',em:'💡',lesson:1,
   ex_zh:'还不知道，正在找呢。',ex_py:'Hái bù zhīdào, zhèngzài zhǎo ne.',ex_vn:'Cũng không biết ạ, em đang tìm đây.',
   exList:[{zh:'还不知道，正在找呢。',py:'Hái bù zhīdào, zhèngzài zhǎo ne.',vn:'Cũng không biết ạ, em đang tìm đây.'}],
   hanzi:[
     {c:'知',p:'zhī',type:'左右结构 · Trái-phải',st:8,ord:'矢(thỉ) trái → 口(khẩu) phải',rad:'矢 (thỉ – mũi tên)',mean:'biết',
      tip:'矢(mũi tên bắn trúng đích) + 口(miệng, nói ra) → nói trúng như tên bắn = hiểu rõ, BIẾT.',
      cf:'短 (duǎn – "ngắn", cũng chứa 矢)',w:'知道 / 不知道'},
     {c:'道',p:'dào',type:'半包围结构 · Bán bao vây',st:12,ord:'首(thủ) trên → 辶(sước) bao dưới-trái',rad:'辶 (sước – đi, bước đi)',mean:'đường, đạo lý; nói, biết',
      tip:'首(cái đầu, hướng) + 辶(bước đi) → đi theo hướng ĐẦU dẫn tới = con ĐƯỜNG, ĐẠO LÝ, và cũng là BIẾT rõ đường đi.',
      cf:'到 (dào – "đến", cùng âm nhưng khác bộ 刂)',w:'知道 / 道理 / 味道'},
   ]},
  {n:4,zh:'正在',py:'zhèngzài',pos:'Phó từ',vn:'đang (làm gì)',em:'⏱️',lesson:1,
   ex_zh:'还不知道，正在找呢。',ex_py:'Hái bù zhīdào, zhèngzài zhǎo ne.',ex_vn:'Cũng không biết ạ, em đang tìm đây.',
   exList:[{zh:'还不知道，正在找呢。',py:'Hái bù zhīdào, zhèngzài zhǎo ne.',vn:'Cũng không biết ạ, em đang tìm đây.'}],
   hanzi:[
     {c:'正',p:'zhèng',type:'独体字 · Chữ đơn',st:5,ord:'一(ngang) trên → 止(chỉ) dưới',rad:'止 (chỉ – dừng, chân)',mean:'ngay ngắn, chính xác; đang (phó từ)',
      tip:'一(vạch mốc chuẩn) + 止(dừng chân) → dừng chân đúng ngay vạch chuẩn = NGAY NGẮN, CHÍNH XÁC.',
      cf:'止 (zhǐ – "dừng lại", thiếu nét ngang phía trên)',w:'正在 / 正确 / 正常'},
     {c:'在',p:'zài',type:'半包围结构 · Bán bao vây',st:6,ord:'ナ(biến thể) bao ngoài → 土(thổ) trong',rad:'土 (thổ – đất)',mean:'ở, tại, đang (phó từ)',
      tip:'Mái che nghiêng (ナ) phủ trên chữ 土(đất) → nơi có ĐẤT có mái che là nơi con người sinh sống, tồn tại = Ở, TẠI, ĐANG.',
      cf:'左 (zuǒ – "bên trái", phần trên viết gần giống nhưng dưới là 工)',w:'正在 / 在家 / 你在哪里'},
   ]},
  {n:5,zh:'找',py:'zhǎo',pos:'Động từ',vn:'tìm, kiếm',em:'🔍',lesson:1,
   ex_zh:'还不知道，正在找呢。',ex_py:'Hái bù zhīdào, zhèngzài zhǎo ne.',ex_vn:'Cũng không biết ạ, em đang tìm đây.',
   exList:[{zh:'还不知道，正在找呢。',py:'Hái bù zhīdào, zhèngzài zhǎo ne.',vn:'Cũng không biết ạ, em đang tìm đây.'}],
   hanzi:[
     {c:'找',p:'zhǎo',type:'左右结构 · Trái-phải',st:7,ord:'扌(thủ) trái → 戈(qua) phải',rad:'扌 (thủ – tay)',mean:'tìm, kiếm',
      tip:'Bộ 扌(tay) → dùng tay lục lọi, TÌM KIẾM vật gì đó.',
      cf:'我 (wǒ – "tôi", cùng chứa 戈)',w:'找到 / 正在找'},
   ]},
  {n:6,zh:'开车',py:'kāichē',pos:'Động từ',vn:'lái xe (ô tô)',em:'🚗',lesson:1,
   ex_zh:'你开车没开车？',ex_py:'Nǐ kāichē méi kāichē?',ex_vn:'Em có lái xe không?',
   exList:[{zh:'你开车没开车？',py:'Nǐ kāichē méi kāichē?',vn:'Em có lái xe không?'}],
   hanzi:[
     {c:'开',p:'kāi',type:'独体字 · Chữ đơn',st:4,ord:'一(ngang) trên → 廾(hai tay) dưới',rad:'廾 (củng – hai tay nâng lên)',mean:'mở, bật, lái, khai',
      tip:'Hình thanh chắn ngang cửa được hai tay (廾) nâng lên → MỞ, BẬT, khởi động.',
      cf:'井 (jǐng – "giếng", hình dạng rất gần giống, thêm 1 chấm)',w:'开车 / 开门 / 打开'},
     {c:'车',p:'chē',type:'独体字 · Chữ đơn',st:4,ord:'一→𠃌→丨',rad:'车 (xa – tự thành bộ)',mean:'xe',
      tip:'Hình bánh xe nhìn từ trên xuống → XE.',
      cf:'东 (dōng – "phía đông", hình dạng gần giống")',w:'开车 / 坐车'},
   ]},
  {n:7,zh:'车',py:'chē',pos:'Danh từ',vn:'xe',em:'🚙',lesson:1,
   ex_zh:'我没开车，坐车呢。',ex_py:'Wǒ méi kāichē, zuò chē ne.',ex_vn:'Em không lái xe, đang đi taxi đây.',
   exList:[{zh:'我没开车，坐车呢。',py:'Wǒ méi kāichē, zuò chē ne.',vn:'Em không lái xe, đang đi taxi đây.'}],
   hanzi:[
     {c:'车',p:'chē',type:'独体字 · Tượng hình',st:4,ord:'一→𠃌→丨',rad:'车 (xa – tự thành bộ)',mean:'xe',
      tip:'Hình bánh xe nhìn từ trên xuống → XE.',
      cf:'东 (dōng – "phía đông", hình dạng gần giống")',w:'开车 / 坐车'},
   ]},
  {n:8,zh:'在',py:'zài',pos:'Phó từ',vn:'đang',em:'⏳',lesson:2,
   ex_zh:'你还在读大学吗？',ex_py:'Nǐ hái zài dú dàxué ma?',ex_vn:'Em vẫn đang học đại học à?',
   exList:[{zh:'你还在读大学吗？',py:'Nǐ hái zài dú dàxué ma?',vn:'Em vẫn đang học đại học à?'}],
   hanzi:[
     {c:'在',p:'zài',type:'半包围结构 · Bán bao vây',st:6,ord:'ナ(biến thể) bao ngoài → 土(thổ) trong',rad:'土 (thổ – đất)',mean:'ở, tại, đang (phó từ)',
      tip:'Mái che nghiêng (ナ) phủ trên chữ 土(đất) → nơi có ĐẤT có mái che là nơi con người sinh sống, tồn tại = Ở, TẠI, ĐANG.',
      cf:'左 (zuǒ – "bên trái", phần trên viết gần giống nhưng dưới là 工)',w:'正在 / 在家 / 你在哪里'},
   ]},
  {n:9,zh:'读',py:'dú',pos:'Động từ',vn:'học, đọc',em:'📖',lesson:2,
   ex_zh:'你还在读大学吗？',ex_py:'Nǐ hái zài dú dàxué ma?',ex_vn:'Em vẫn đang học đại học à?',
   exList:[{zh:'你还在读大学吗？',py:'Nǐ hái zài dú dàxué ma?',vn:'Em vẫn đang học đại học à?'}],
   hanzi:[
     {c:'读',p:'dú',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 卖(biến thể) phải',rad:'讠 (ngôn – lời nói)',mean:'đọc, học',
      tip:'讠(lời nói) + 卖(phát ra, bán) → phát ra tiếng từ chữ viết = ĐỌC.',
      cf:'卖 (mài – "bán")',w:'读大学 / 读书'},
   ]},
  {n:10,zh:'大学',py:'dàxué',pos:'Danh từ',vn:'đại học',em:'🎓',lesson:2,
   ex_zh:'对，我读大学呢，还是大学生。',ex_py:'Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.',ex_vn:'Đúng vậy, em đang học đại học, vẫn đang là sinh viên.',
   exList:[{zh:'对，我读大学呢，还是大学生。',py:'Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.',vn:'Đúng vậy, em đang học đại học, vẫn đang là sinh viên.'}],
   hanzi:[
     {c:'大',p:'dà',type:'独体字 · Chữ đơn',st:3,ord:'一(ngang) → 人(phẩy-mác, hình người dang tay)',rad:'大 (đại – tự thành bộ)',mean:'to, lớn',
      tip:'Hình người dang rộng hai tay hai chân → biểu thị TO LỚN.',
      cf:'太 (tài – "quá", thêm 1 chấm phía dưới)',w:'大学 / 大家 / 不大'},
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'⺍冖(biến thể) trên → 子(tử) dưới',rad:'子 (tử – con)',mean:'học',
      tip:'Trên là hình hai tay bắt chước, dưới là 子(đứa trẻ) → đứa trẻ dưới MÁI NHÀ được dạy dỗ, bắt chước làm theo = HỌC.',
      cf:'字 (zì – "chữ viết", cũng có 子 nhưng bộ trên là 宀)',w:'大学 / 大学生 / 学习'},
   ]},
  {n:11,zh:'大学生',py:'dàxuéshēng',pos:'Danh từ',vn:'sinh viên',em:'🧑‍🎓',lesson:2,
   ex_zh:'对，我读大学呢，还是大学生。',ex_py:'Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.',ex_vn:'Đúng vậy, em đang học đại học, vẫn đang là sinh viên.',
   exList:[{zh:'对，我读大学呢，还是大学生。',py:'Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.',vn:'Đúng vậy, em đang học đại học, vẫn đang là sinh viên.'}],
   hanzi:[
     {c:'大',p:'dà',type:'独体字 · Chữ đơn',st:3,ord:'一(ngang) → 人(phẩy-mác, hình người dang tay)',rad:'大 (đại – tự thành bộ)',mean:'to, lớn',
      tip:'Hình người dang rộng hai tay hai chân → biểu thị TO LỚN.',
      cf:'太 (tài – "quá", thêm 1 chấm phía dưới)',w:'大学 / 大家 / 不大'},
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'⺍冖(biến thể) trên → 子(tử) dưới',rad:'子 (tử – con)',mean:'học',
      tip:'Trên là hình hai tay bắt chước, dưới là 子(đứa trẻ) → đứa trẻ dưới MÁI NHÀ được dạy dỗ, bắt chước làm theo = HỌC.',
      cf:'字 (zì – "chữ viết", cũng có 子 nhưng bộ trên là 宀)',w:'大学 / 大学生 / 学习'},
     {c:'生',p:'shēng',type:'独体字 · Chữ đơn',st:5,ord:'丿→ 土(đất), hình cây non mọc từ đất',rad:'生 (sinh – tự thành bộ)',mean:'sinh ra, sống; học sinh, sinh viên',
      tip:'Hình cây non mọc lên khỏi mặt đất → biểu thị SINH RA, SỐNG.',
      cf:'主 (zhǔ – "chủ", hình dạng phần trên gần giống)',w:'大学生 / 学生 / 医生'},
   ]},
  {n:12,zh:'学',py:'xué',pos:'Động từ',vn:'học',em:'📝',lesson:2,
   ex_zh:'非常忙，我学医，我们的课很多。',ex_py:'Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.',ex_vn:'Bận lắm ạ, em học ngành y, chúng em có rất nhiều môn học.',
   exList:[{zh:'非常忙，我学医，我们的课很多。',py:'Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.',vn:'Bận lắm ạ, em học ngành y, chúng em có rất nhiều môn học.'}],
   hanzi:[
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'⺍冖(biến thể) trên → 子(tử) dưới',rad:'子 (tử – con)',mean:'học',
      tip:'Trên là hình hai tay bắt chước, dưới là 子(đứa trẻ) → đứa trẻ dưới MÁI NHÀ được dạy dỗ, bắt chước làm theo = HỌC.',
      cf:'字 (zì – "chữ viết", cũng có 子 nhưng bộ trên là 宀)',w:'学习 / 大学 / 学生'},
   ]},
  {n:13,zh:'医',py:'yī',pos:'Danh từ',vn:'y, y học, y khoa',em:'⚕️',lesson:2,
   ex_zh:'非常忙，我学医，我们的课很多。',ex_py:'Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.',ex_vn:'Bận lắm ạ, em học ngành y, chúng em có rất nhiều môn học.',
   exList:[{zh:'非常忙，我学医，我们的课很多。',py:'Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.',vn:'Bận lắm ạ, em học ngành y, chúng em có rất nhiều môn học.'}],
   hanzi:[
     {c:'医',p:'yī',type:'半包围结构 · Bán bao vây',st:7,ord:'匚(khuông) bao ngoài → 矢(thỉ) bên trong',rad:'匚 (khuông – vật đựng hình hộp)',mean:'y học, chữa bệnh, bác sĩ',
      tip:'匚(hộp đựng dụng cụ) + 矢(mũi tên, dụng cụ y tế thời xưa) → hộp đựng DỤNG CỤ chữa bệnh = Y HỌC.',
      cf:'区 (qū – "khu vực", cũng có bộ 匚)',w:'医生 / 学医 / 医院'},
   ]},
  {n:14,zh:'弟弟',py:'dìdi',pos:'Danh từ',vn:'em trai',em:'👦',lesson:3,
   ex_zh:'弟弟起床没起床呢？',ex_py:'Dìdi qǐchuáng méi qǐchuáng ne?',ex_vn:'Em trai đã thức dậy chưa?',
   exList:[{zh:'弟弟起床没起床呢？',py:'Dìdi qǐchuáng méi qǐchuáng ne?',vn:'Em trai đã thức dậy chưa?'}],
   hanzi:[
     {c:'弟',p:'dì',type:'独体字 · Chữ đơn',st:7,ord:'丷 trên → 弓(biến thể) giữa → 丨 nét sổ xuyên',rad:'弓 (cung – cây cung)',mean:'em trai',
      tip:'Hình sợi dây quấn quanh cây cung theo thứ tự trước sau, tượng trưng cho thứ bậc dưới trong nhà = EM TRAI.',
      cf:'第 (dì – "thứ tự", thêm bộ 竹 phía trên)',w:'弟弟 / 兄弟 / 弟子'},
   ]},
  {n:15,zh:'起床',py:'qǐchuáng',pos:'Động từ',vn:'thức dậy, ngủ dậy, dậy',em:'🛏️',lesson:3,
   ex_zh:'弟弟起床没起床呢？',ex_py:'Dìdi qǐchuáng méi qǐchuáng ne?',ex_vn:'Em trai đã thức dậy chưa?',
   exList:[{zh:'弟弟起床没起床呢？',py:'Dìdi qǐchuáng méi qǐchuáng ne?',vn:'Em trai đã thức dậy chưa?'}],
   hanzi:[
     {c:'起',p:'qǐ',type:'半包围结构 · Bán bao vây',st:10,ord:'走(tẩu) bao ngoài → 己(kỷ) bên trong',rad:'走 (tẩu – đi, chạy)',mean:'dậy, đứng lên, bắt đầu',
      tip:'走(đi, chạy) + 己(bản thân) → tự bản thân đứng lên để bước ĐI = DẬY, BẮT ĐẦU.',
      cf:'己 (jǐ – "bản thân", thiếu bộ 走 bên ngoài)',w:'起床 / 一起 / 起来'},
     {c:'床',p:'chuáng',type:'半包围结构 · Bán bao vây',st:7,ord:'广(nghiễm) ngoài → 木(mộc) trong',rad:'广 (nghiễm – mái nhà, mái che)',mean:'giường',
      tip:'广(mái nhà) + 木(gỗ) → đồ vật bằng GỖ đặt dưới MÁI NHÀ để nằm ngủ = GIƯỜNG.',
      cf:'庆 (qìng – "chúc mừng", cũng có bộ 广)',w:'起床 / 床上'},
   ]},
  {n:16,zh:'睡觉',py:'shuìjiào',pos:'Động từ',vn:'ngủ',em:'😴',lesson:3,
   ex_zh:'没起床呢，还在睡觉。',ex_py:'Méi qǐchuáng ne, hái zài shuìjiào.',ex_vn:'Chưa thức dậy ạ, em vẫn còn đang ngủ.',
   exList:[{zh:'没起床呢，还在睡觉。',py:'Méi qǐchuáng ne, hái zài shuìjiào.',vn:'Chưa thức dậy ạ, em vẫn còn đang ngủ.'}],
   hanzi:[
     {c:'睡',p:'shuì',type:'左右结构 · Trái-phải',st:13,ord:'目(mục) trái → 垂(thùy) phải',rad:'目 (mục – mắt)',mean:'ngủ',
      tip:'目(mắt) + 垂(rủ xuống) → mắt rủ xuống khép lại = NGỦ.',
      cf:'垂 (chuí – "rủ xuống")',w:'睡觉'},
     {c:'觉',p:'jiào',type:'上下结构 · Trên-dưới',st:9,ord:'⺍冖(biến thể) trên → 见(kiến) dưới',rad:'见 (kiến – nhìn thấy)',mean:'ngủ (đọc jiào); cảm giác, nhận ra (đọc jué)',
      tip:'Trên là hình con mắt lim dim, dưới là 见(nhìn thấy) → khi mắt khép lại không còn NHÌN THẤY gì nữa là lúc đi NGỦ.',
      cf:'学 (xué – "học", phần trên gần giống nhưng dưới là 子)',w:'睡觉 / 觉得 / 感觉'},
   ]},
  {n:17,zh:'睡',py:'shuì',pos:'Động từ',vn:'ngủ',em:'💤',lesson:3,
   ex_zh:'还睡呢？他今天去不去那里？',ex_py:'Hái shuì ne? Tā jīntiān qù bu qù nàlǐ?',ex_vn:'Vẫn còn ngủ à? Hôm nay em có đi đến đó không?',
   exList:[{zh:'还睡呢？他今天去不去那里？',py:'Hái shuì ne? Tā jīntiān qù bu qù nàlǐ?',vn:'Vẫn còn ngủ à? Hôm nay em có đi đến đó không?'}],
   hanzi:[
     {c:'睡',p:'shuì',type:'左右结构 · Trái-phải',st:13,ord:'目(mục) trái → 垂(thùy) phải',rad:'目 (mục – mắt)',mean:'ngủ',
      tip:'目(mắt) + 垂(rủ xuống) → mắt rủ xuống khép lại = NGỦ.',
      cf:'垂 (chuí – "rủ xuống")',w:'睡觉 / 午睡'},
   ]},
  {n:18,zh:'那里',py:'nàlǐ',pos:'Đại từ',vn:'ở kia, chỗ đó',em:'👉',lesson:3,
   ex_zh:'他今天去不去那里？',ex_py:'Tā jīntiān qù bu qù nàlǐ?',ex_vn:'Hôm nay em có đi đến đó không?',
   exList:[{zh:'他今天去不去那里？',py:'Tā jīntiān qù bu qù nàlǐ?',vn:'Hôm nay em có đi đến đó không?'}],
   hanzi:[
     {c:'那',p:'nà',type:'左右结构 · Trái-phải',st:6,ord:'𨙨(biến thể) trái → 阝(ấp) phải',rad:'阝 (ấp – thành ấp, bên phải)',mean:'đó, kia, ấy (chỉ định)',
      tip:'Bộ 阝(thành ấp) bên phải chỉ một nơi chốn được nhắc đến → dùng để chỉ nơi ĐÓ, KIA.',
      cf:'哪 (nǎ – "nào?", thêm bộ 口 bên trái)',w:'那里 / 那个 / 那些'},
     {c:'里',p:'lǐ',type:'上下结构 · Trên-dưới',st:7,ord:'田(điền) trên → 土(thổ) dưới',rad:'里 (lý – tự thành bộ)',mean:'bên trong, nơi chốn; dặm (đơn vị đo)',
      tip:'田(ruộng) trên 土(đất) dưới → nơi có ruộng đất là một chốn ở BÊN TRONG cộng đồng = NƠI, BÊN TRONG.',
      cf:'理 (lǐ – "lý lẽ", thêm bộ 王 bên trái)',w:'那里 / 哪里 / 里边'},
   ]},
  {n:19,zh:'哪里',py:'nǎlǐ',pos:'Đại từ',vn:'đâu, chỗ nào, nơi nào',em:'❓',lesson:3,
   ex_zh:'去哪里？',ex_py:'Qù nǎlǐ?',ex_vn:'Đi đâu ạ?',
   exList:[{zh:'去哪里？',py:'Qù nǎlǐ?',vn:'Đi đâu ạ?'}],
   hanzi:[
     {c:'哪',p:'nǎ',type:'左右结构 · Trái-phải',st:9,ord:'口(khẩu) trái → 那(biến thể) phải',rad:'口 (khẩu – miệng)',mean:'nào? (nghi vấn)',
      tip:'口(miệng, hỏi) + 那(cái đó, kia) → mở MIỆNG hỏi "cái đó là cái NÀO?" = NÀO?.',
      cf:'那 (nà – "đó, kia", thiếu bộ 口 bên trái)',w:'哪里 / 哪个 / 哪儿'},
     {c:'里',p:'lǐ',type:'上下结构 · Trên-dưới',st:7,ord:'田(điền) trên → 土(thổ) dưới',rad:'里 (lý – tự thành bộ)',mean:'bên trong, nơi chốn; dặm (đơn vị đo)',
      tip:'田(ruộng) trên 土(đất) dưới → nơi có ruộng đất là một chốn ở BÊN TRONG cộng đồng = NƠI, BÊN TRONG.',
      cf:'理 (lǐ – "lý lẽ", thêm bộ 王 bên trái)',w:'哪里 / 那里 / 里边'},
   ]},
  {n:20,zh:'昨天',py:'zuótiān',pos:'Danh từ',vn:'hôm qua',em:'📅',lesson:3,
   ex_zh:'我昨天问他，他对我说，他不去。',ex_py:'Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù.',ex_vn:'Hôm qua con hỏi em rồi, em nói với con là em không đi.',
   exList:[{zh:'我昨天问他，他对我说，他不去。',py:'Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù.',vn:'Hôm qua con hỏi em rồi, em nói với con là em không đi.'}],
   hanzi:[
     {c:'昨',p:'zuó',type:'左右结构 · Trái-phải',st:9,ord:'日(nhật) trái → 乍(sạ) phải',rad:'日 (nhật – mặt trời, ngày)',mean:'hôm qua, ngày trước',
      tip:'日(ngày) + 乍(vừa mới, chợt) → NGÀY vừa mới trôi qua = HÔM QUA.',
      cf:'作 (zuò – "làm", bộ 亻thay vì 日)',w:'昨天 / 昨晚'},
     {c:'天',p:'tiān',type:'独体字 · Chữ đơn',st:4,ord:'一(ngang) trên → 大(đại) dưới',rad:'大 (đại – to lớn)',mean:'trời, ngày',
      tip:'一(vạch chỉ khoảng không phía trên) + 大(người dang tay to lớn) → khoảng không bao la trên đầu người = TRỜI.',
      cf:'夫 (fū – "chồng, đàn ông", nét ngang cắt qua vị trí khác)',w:'昨天 / 天气 / 明天'},
   ]},
  {n:21,zh:'问',py:'wèn',pos:'Động từ',vn:'hỏi',em:'❔',lesson:3,
   ex_zh:'我昨天问他，他对我说，他不去。',ex_py:'Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù.',ex_vn:'Hôm qua con hỏi em rồi, em nói với con là em không đi.',
   exList:[{zh:'我昨天问他，他对我说，他不去。',py:'Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù.',vn:'Hôm qua con hỏi em rồi, em nói với con là em không đi.'}],
   hanzi:[
     {c:'问',p:'wèn',type:'半包围结构 · Bán bao vây',st:6,ord:'门(môn) ngoài → 口(khẩu) trong',rad:'门 (môn – cửa)',mean:'hỏi',
      tip:'门(cửa) + 口(miệng) → đứng trước cửa cất tiếng HỎI.',
      cf:'间 (jiān – "khoảng giữa")',w:'我问他 / 请问'},
   ]},
  {n:22,zh:'对',py:'duì',pos:'Giới từ',vn:'với, đối với',em:'↔️',lesson:3,
   ex_zh:'他对我说，他不去。',ex_py:'Tā duì wǒ shuō, tā bú qù.',ex_vn:'Em nói với con là em không đi.',
   exList:[{zh:'他对我说，他不去。',py:'Tā duì wǒ shuō, tā bú qù.',vn:'Em nói với con là em không đi.'}],
   hanzi:[
     {c:'对',p:'duì',type:'左右结构 · Trái-phải',st:5,ord:'又(biến thể) trái → 寸(thốn) phải',rad:'寸 (thốn – tấc, quy tắc)',mean:'đúng; đối với, với',
      tip:'Bên trái là hai bên đối diện nhau, bên phải 寸(quy tắc, chuẩn mực) → hai bên khớp ĐÚNG theo chuẩn mực = ĐÚNG, ĐỐI VỚI.',
      cf:'讨 (tǎo – "bàn luận, đòi", bộ 讠thay vì 又)',w:'对不起 / 他对我说 / 不对'},
   ]},
  {n:23,zh:'说',py:'shuō',pos:'Động từ',vn:'nói',em:'💬',lesson:3,
   ex_zh:'他对我说，他不去。',ex_py:'Tā duì wǒ shuō, tā bú qù.',ex_vn:'Em nói với con là em không đi.',
   exList:[{zh:'他对我说，他不去。',py:'Tā duì wǒ shuō, tā bú qù.',vn:'Em nói với con là em không đi.'}],
   hanzi:[
     {c:'说',p:'shuō',type:'左右结构 · Trái-phải',st:9,ord:'讠(ngôn) trái → 兑(đoài) phải',rad:'讠 (ngôn – lời nói)',mean:'nói',
      tip:'Bộ 讠(lời nói) → hành động dùng miệng phát ra lời = NÓI.',
      cf:'脱 (tuō – "cởi", bộ 月)',w:'他对我说 / 说汉语'},
   ]},
  {n:24,zh:'要',py:'yào',pos:'Động từ năng nguyện',vn:'cần, muốn, phải',em:'🙋',lesson:3,
   ex_zh:'他今天要和小朋友玩。',ex_py:'Tā jīntiān yào hé xiǎopéngyǒu wán.',ex_vn:'Hôm nay em muốn chơi với các bạn.',
   exList:[{zh:'他今天要和小朋友玩。',py:'Tā jīntiān yào hé xiǎopéngyǒu wán.',vn:'Hôm nay em muốn chơi với các bạn.'}],
   hanzi:[
     {c:'要',p:'yào',type:'上下结构 · Trên-dưới',st:9,ord:'覀(biến thể) → 女',rad:'西 (tây – biến thể)',mean:'muốn, cần, sẽ',
      tip:'Chữ cổ vốn là hình dáng cái lưng người phụ nữ chống nạnh, nay dùng làm trợ động từ MUỐN, CẦN.',
      cf:'腰 (yāo – "thắt lưng")',w:'要去 / 要不要'},
   ]},
  {n:25,zh:'小朋友',py:'xiǎopéngyǒu',pos:'Danh từ',vn:'bạn nhỏ',em:'🧒',lesson:3,
   ex_zh:'他今天要和小朋友玩。',ex_py:'Tā jīntiān yào hé xiǎopéngyǒu wán.',ex_vn:'Hôm nay em muốn chơi với các bạn.',
   exList:[{zh:'他今天要和小朋友玩。',py:'Tā jīntiān yào hé xiǎopéngyǒu wán.',vn:'Hôm nay em muốn chơi với các bạn.'}],
   hanzi:[
     {c:'小',p:'xiǎo',type:'独体字 · Chữ đơn',st:3,ord:'亅(sổ móc) giữa → 丶丶(hai chấm) hai bên',rad:'小 (tiểu – tự thành bộ)',mean:'nhỏ, bé',
      tip:'Hình một vật bị chẻ thành từng mảnh nhỏ hai bên → biểu thị NHỎ, BÉ.',
      cf:'少 (shǎo – "ít", thêm 1 nét phẩy")',w:'小朋友 / 小学 / 大小'},
     {c:'朋',p:'péng',type:'左右结构 · Trái-phải',st:8,ord:'月(nguyệt) trái → 月(nguyệt) phải',rad:'月 (nguyệt – mặt trăng, thịt)',mean:'bạn, bạn bè',
      tip:'Hai chữ 月 đứng song song như hai người sánh vai đồng hành → BẠN BÈ.',
      cf:'明 (míng – "sáng", bên trái là 日 chứ không phải 月)',w:'朋友 / 小朋友'},
     {c:'友',p:'yǒu',type:'上下结构 · Trên-dưới',st:4,ord:'丆(biến thể) trên → 又(hựu, bàn tay) dưới',rad:'又 (hựu – lại, bàn tay phải)',mean:'bạn, bạn bè',
      tip:'Hai bàn tay (丆 và 又) nắm lấy nhau → tình BẠN BÈ thân thiết.',
      cf:'有 (yǒu – "có", đồng âm hoàn toàn, phần trên dễ viết nhầm)',w:'朋友 / 小朋友 / 友好'},
   ]},
];

var wuData = [
  {img:'/images/hsk1v3-bai-11/kaiche.jpg',label:'开车',py:'kāichē',letter:'A'},
  {img:'/images/hsk1v3-bai-11/shuijiao.jpg',label:'睡觉',py:'shuìjiào',letter:'B'},
  {img:'/images/hsk1v3-bai-11/wen.jpg',label:'问',py:'wèn',letter:'C'},
  {img:'/images/hsk1v3-bai-11/fandian.jpg',label:'饭店',py:'fàndiàn',letter:'D'},
  {img:'/images/hsk1v3-bai-11/zhao.jpg',label:'找',py:'zhǎo',letter:'E'},
  {img:'/images/hsk1v3-bai-11/daxuesheng.jpg',label:'大学生',py:'dàxuéshēng',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 11: Ngữ âm + Hán tự + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-11/wb-yuyin.mp3',
      blocks: [
        { type: 'tonemc', caption: 'Đánh dấu thanh điệu — nghe và chọn thanh điệu đúng',
          items: [
            {before:'chang → ', after:'', answer:'chàng', options:['chāng','cháng','chǎng','chàng']},
            {before:'leng → ', after:'', answer:'lěng', options:['lēng','léng','lěng','lèng']},
            {before:'hui → ', after:'', answer:'huì', options:['huī','huí','huǐ','huì']},
            {before:'shuijiao → ', after:'', answer:'shuìjiào', options:['shuìjiào','shuījiào','shuìjiāo','shuījiāo']},
            {before:'pingguo → ', after:'', answer:'píngguǒ', options:['píngguǒ','pīngguǒ','píngguō','pīngguō']},
            {before:'jidan → ', after:'', answer:'jīdàn', options:['jīdàn','jídàn','jīdān','jídān']},
            {before:'daxuesheng → ', after:'', answer:'dàxuéshēng', options:['dàxuéshēng','dāxuéshēng','dàxuěshēng','dāxuěshēng']},
            {before:'dianyingyuan → ', after:'', answer:'diànyǐngyuàn', options:['diànyǐngyuàn','diānyǐngyuàn','diànyǐngyuán','diānyǐngyuán']}
          ] },
        { type: 'tonemc', caption: 'Phân biệt thanh điệu — chọn âm tiết có thanh điệu KHÁC trong nhóm',
          items: [
            {before:'', after:'', answer:'mǎi', options:['mǎi','néng','méi']},
            {before:'', after:'', answer:'rè', options:['xīn','zhēn','rè']},
            {before:'', after:'', answer:'xiàbān', options:['zuòfàn','zhèngzài','xiàbān']},
            {before:'', after:'', answer:'hǎotīng', options:['shíjiān','hǎotīng','míngtiān']},
            {before:'', after:'', answer:'zhōngxuéshēng', options:['Xīngqītiān','zhōngxuéshēng','chūzūchē']}
          ] },
        { type: 'table', caption: 'Chữ Hán (汉字) — Cấu tạo và bút thuận (tiếp)',
          rows: [
            ['Nét mới', '横钩 héngɡōu (ngang-móc), 竖钩 shùɡōu (sổ-móc), 斜钩 xiéɡōu (xiên-móc), 弯钩 wānɡōu (cong-móc), 卧钩 wòɡōu (nằm-móc)'],
            ['Quy tắc bút thuận', '先外后里，再封口 (ngoài trước trong sau, khép miệng cuối cùng) — ví dụ: 日'],
            ['Ví dụ luyện viết', '买 (mǎi) → 买卖 (mǎimai); 小 (xiǎo) → 小学 (xiǎoxué); 飞 (fēi) → 飞机 (fēijī); 狗 (gǒu) → 小狗 (xiǎo gǒu); 怎 (zěn) → 怎么样 (zěnmeyàng); 国 (guó) → 中国 (Zhōngguó)']
          ],
          note: 'Phần luyện viết tay theo từng nét cần thực hành trực tiếp trên giấy/vở theo mẫu trong sách.' }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-11/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-11-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-11-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-11-wb/q1c.jpg'}
            ], answer: 'C' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-11-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-11-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-11-wb/q2c.jpg'}
            ], answer: 'B' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-11-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-11-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-11-wb/q3c.jpg'}
            ], answer: 'C' },
            { n: 4, options: [
              {key:'A', text:'不吃午饭', py:'bù chī wǔfàn'},
              {key:'B', text:'在外边玩', py:'zài wàibian wán'},
              {key:'C', text:'水果便宜', py:'shuǐguǒ piányi'}
            ], answer: 'B' },
            { n: 5, options: [
              {key:'A', text:'能到', py:'néng dào'},
              {key:'B', text:'想去呢', py:'xiǎng qù ne'},
              {key:'C', text:'没到呢', py:'méi dào ne'}
            ], answer: 'C' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-11-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-11-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-11-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-11-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-11-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-11-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-11-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-11-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-11-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-11-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-11-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-11-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 9, options: [
              {key:'A', text:'超市', py:'chāoshì'},
              {key:'B', text:'外边', py:'wàibian'},
              {key:'C', text:'房间里', py:'fángjiān li'}
            ], answer: 'B' },
            { n: 10, options: [
              {key:'A', text:'学校后边', py:'xuéxiào hòubian'},
              {key:'B', text:'超市前边', py:'chāoshì qiánbian'},
              {key:'C', text:'超市后边', py:'chāoshì hòubian'}
            ], answer: 'C' }
          ],
          reading: [
            { n: 11, prompt: '妈妈正在做饭呢。', promptPy: 'Māma zhèngzài zuò fàn ne.', options: [
              {key:'A', img:'/images/hsk1v3-bai-11-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-11-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-11-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-11-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 12, prompt: '你今天不想去学校吗？', promptPy: 'Nǐ jīntiān bù xiǎng qù xuéxiào ma?', options: [
              {key:'A', img:'/images/hsk1v3-bai-11-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-11-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-11-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-11-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 13, prompt: '我和朋友们在外边玩呢。', promptPy: 'Wǒ hé péngyoumen zài wàibian wán ne.', options: [
              {key:'A', img:'/images/hsk1v3-bai-11-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-11-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-11-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-11-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 14, prompt: '你开车去吗？', promptPy: 'Nǐ kāichē qù ma?', options: [
              {key:'A', text:'不，我坐出租车。', py:'Bù, wǒ zuò chūzūchē.'},
              {key:'B', text:'非常忙。', py:'Fēicháng máng.'},
              {key:'C', text:'没有，我在开车呢。', py:'Méiyǒu, wǒ zài kāichē ne.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'A' },
            { n: 15, prompt: '你们学习忙不忙？', promptPy: 'Nǐmen xuéxí máng bu máng?', options: [
              {key:'A', text:'不，我坐出租车。', py:'Bù, wǒ zuò chūzūchē.'},
              {key:'B', text:'非常忙。', py:'Fēicháng máng.'},
              {key:'C', text:'没有，我在开车呢。', py:'Méiyǒu, wǒ zài kāichē ne.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'B' },
            { n: 16, prompt: '你在吃午饭吗？', promptPy: 'Nǐ zài chī wǔfàn ma?', options: [
              {key:'A', text:'不，我坐出租车。', py:'Bù, wǒ zuò chūzūchē.'},
              {key:'B', text:'非常忙。', py:'Fēicháng máng.'},
              {key:'C', text:'没有，我在开车呢。', py:'Méiyǒu, wǒ zài kāichē ne.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'C' },
            { n: 17, prompt: '弟弟没起床，还在（　）呢。', promptPy: 'Dìdi méi qǐchuáng, hái zài ( ) ne.', options: [
              {key:'A', text:'找', py:'zhǎo'},
              {key:'B', text:'睡觉', py:'shuìjiào'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：喂，你到没到饭店呢？\n女：没到呢，我正在（　）饭店在哪里呢。', promptPy: 'Wèi, nǐ dào méi dào fàndiàn ne? / Méi dào ne, wǒ zhèngzài ( ) fàndiàn zài nǎlǐ ne.', options: [
              {key:'A', text:'找', py:'zhǎo'},
              {key:'B', text:'睡觉', py:'shuìjiào'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '我姐姐今年20岁，正在读大学呢，她学医。\n★说话人的姐姐是：', promptPy: 'Wǒ jiějie jīnnián 20 suì, zhèngzài dú dàxué ne, tā xué yī.', options: [
              {key:'A', text:'老师', py:'lǎoshī'},
              {key:'B', text:'医生', py:'yīshēng'},
              {key:'C', text:'大学生', py:'dàxuéshēng'}
            ], answer: 'C' },
            { n: 20, prompt: '我明天有事，要去学校找老师，不知道老师在不在。\n★说话人明天要去学校见：', promptPy: 'Wǒ míngtiān yǒu shì, yào qù xuéxiào zhǎo lǎoshī, bù zhīdào lǎoshī zài bu zài.', options: [
              {key:'A', text:'朋友', py:'péngyou'},
              {key:'B', text:'学生', py:'xuéshēng'},
              {key:'C', text:'老师', py:'lǎoshī'}
            ], answer: 'C' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'王一飞给正在找饭店的李文打电话 · Tìm nhà hàng',
   preQuiz:[
     {q:'李文知道饭店在哪儿吗？',opts:['知道','还不知道','已经到了'],ans:1},
     {q:'李文开车了吗？',opts:['开车了','没开车，坐车','走路去的'],ans:1},
   ],
   lines:[
     {sp:0,zh:'喂，李文，你什么时候能到饭店？',py:'Wèi, Lǐ Wén, nǐ shénme shíhou néng dào fàndiàn?',vn:'A lô, Lý Văn à, khi nào em có thể đến nhà hàng?'},
     {sp:1,zh:'还不知道，正在找呢。它是不是在超市后边？',py:'Hái bù zhīdào, zhèngzài zhǎo ne. Tā shì bu shì zài chāoshì hòubian?',vn:'Cũng không biết ạ, em đang tìm đây. Nó có phải ở phía sau siêu thị không?'},
     {sp:0,zh:'是的。你开车没开车？',py:'Shì de. Nǐ kāichē méi kāichē?',vn:'Đúng rồi. Em có lái xe không?'},
     {sp:1,zh:'我没开车，坐车呢。',py:'Wǒ méi kāichē, zuò chē ne.',vn:'Em không lái xe, đang đi taxi đây.'},
   ]},
  {scene:'王一飞和李文在饭店见面后聊天儿 · Đang học đại học',
   preQuiz:[
     {q:'李文（　）读大学。',opts:['不','没','在'],ans:2},
     {q:'李文很忙，有很多（　）。',opts:['课','书','椅子'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你还在读大学吗？',py:'Nǐ hái zài dú dàxué ma?',vn:'Em vẫn đang học đại học à?'},
     {sp:1,zh:'对，我读大学呢，还是大学生。',py:'Duì, wǒ dú dàxué ne, hái shì dàxuéshēng.',vn:'Đúng vậy, em đang học đại học, vẫn đang là sinh viên.'},
     {sp:0,zh:'你们学习忙不忙？',py:'Nǐmen xuéxí máng bu máng?',vn:'Các em học có bận không?'},
     {sp:1,zh:'非常忙，我学医，我们的课很多。',py:'Fēicháng máng, wǒ xué yī, wǒmen de kè hěn duō.',vn:'Bận lắm ạ, em học ngành y, chúng em có rất nhiều môn học.'},
   ]},
  {scene:'刘明出门前和女儿刘小雪对话 · Em trai định làm gì',
   preQuiz:[
     {q:'弟弟正在（　）。',opts:['玩','起床','睡觉'],ans:2},
     {q:'爸爸问姐姐，弟弟（　）超市。',opts:['在','去','去不去'],ans:2},
   ],
   lines:[
     {sp:0,zh:'弟弟起床没起床呢？',py:'Dìdi qǐchuáng méi qǐchuáng ne?',vn:'Em trai đã thức dậy chưa?'},
     {sp:1,zh:'没起床呢，还在睡觉。',py:'Méi qǐchuáng ne, hái zài shuìjiào.',vn:'Chưa thức dậy ạ, em vẫn còn đang ngủ.'},
     {sp:0,zh:'还睡呢？他今天去不去那里？',py:'Hái shuì ne? Tā jīntiān qù bu qù nàlǐ?',vn:'Vẫn còn ngủ à? Hôm nay em có đi đến đó không?'},
     {sp:1,zh:'去哪里？',py:'Qù nǎlǐ?',vn:'Đi đâu ạ?'},
     {sp:0,zh:'去超市。',py:'Qù chāoshì.',vn:'Đi siêu thị.'},
     {sp:1,zh:'我昨天问他，他对我说，他不去，他今天要和小朋友玩。',py:'Wǒ zuótiān wèn tā, tā duì wǒ shuō, tā bú qù, tā jīntiān yào hé xiǎopéngyǒu wán.',vn:'Hôm qua con hỏi em rồi, em nói với con là em không đi, hôm nay em muốn chơi với các bạn.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'开', right:'车'},
  {left:'大学', right:'生'},
  {left:'起', right:'床'},
  {left:'睡', right:'觉'},
  {left:'小朋', right:'友'},
  {left:'昨', right:'天'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'你什么', blank:'时候', post:'能到饭店？', hint:'(lúc, khi)', ans:'时候'},
  {pre:'还不知道，', blank:'正在找', post:'呢。', hint:'(đang tìm)', ans:'正在找'},
  {pre:'你', blank:'开车没开车', post:'？', hint:'(có lái xe không)', ans:'开车没开车'},
  {pre:'你还', blank:'在读大学', post:'吗？', hint:'(đang học đại học)', ans:'在读大学'},
  {pre:'非常忙，我学医，我们的', blank:'课很多', post:'。', hint:'(nhiều môn học)', ans:'课很多'},
  {pre:'', blank:'弟弟起床没起床', post:'呢？', hint:'(em trai đã dậy chưa)', ans:'弟弟起床没起床'},
  {pre:'他今天', blank:'去不去', post:'那里？', hint:'(có đi không)', ans:'去不去'},
  {pre:'他今天', blank:'要和小朋友玩', post:'。', hint:'(muốn chơi với các bạn)', ans:'要和小朋友玩'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['你','什么','时候','能','到','饭店','？'], ans:'你什么时候能到饭店？', audio:'你什么时候能到饭店？'},
  {words:['我','没','开车','，','坐车','呢','。'], ans:'我没开车，坐车呢。', audio:'我没开车，坐车呢。'},
  {words:['你','还','在','读','大学','吗','？'], ans:'你还在读大学吗？', audio:'你还在读大学吗？'},
  {words:['我们','的','课','很多','。'], ans:'我们的课很多。', audio:'我们的课很多。'},
  {words:['弟弟','起床','没','起床','呢','？'], ans:'弟弟起床没起床呢？', audio:'弟弟起床没起床呢？'},
  {words:['他','今天','要','和','小朋友','玩','。'], ans:'他今天要和小朋友玩。', audio:'他今天要和小朋友玩。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"你什么时候能到饭店？" nghĩa là gì?', opts:['Khi nào bạn có thể đến nhà hàng?', 'Nhà hàng ở đâu?', 'Bạn có đến nhà hàng không?', 'Nhà hàng có ngon không?'], ans:0},
  {q:'"你开车没开车？" là dạng câu hỏi gì?', opts:['câu hỏi chính phản (正反问)', 'câu hỏi dùng 吗', 'câu hỏi dùng từ để hỏi', 'câu cảm thán'], ans:0},
  {q:'"你还在读大学吗？" nghĩa là gì?', opts:['Bạn vẫn đang học đại học à?', 'Bạn đã tốt nghiệp đại học chưa?', 'Bạn có muốn học đại học không?', 'Bạn học đại học nào?'], ans:0},
  {q:'Phó từ "正在" dùng để biểu thị điều gì?', opts:['hành động đang diễn ra', 'hành động đã hoàn thành', 'hành động sắp xảy ra', 'hành động phủ định'], ans:0},
  {q:'"弟弟起床没起床呢？" nghĩa là gì?', opts:['Em trai đã dậy chưa?', 'Em trai đi đâu rồi?', 'Em trai đang ăn gì?', 'Em trai bao nhiêu tuổi?'], ans:0},
  {q:'"他今天要和小朋友玩。" nghĩa là gì?', opts:['Hôm nay cậu ấy muốn chơi với các bạn.', 'Hôm nay cậu ấy phải đi học.', 'Hôm nay cậu ấy không muốn chơi.', 'Hôm nay cậu ấy đi làm.'], ans:0},
  {q:'Động từ năng nguyện "要" trong bài dùng để biểu thị điều gì?', opts:['mong muốn, dự định làm gì', 'khả năng làm gì', 'sự cho phép', 'sự phủ định'], ans:0},
  {q:'Câu hỏi chính phản với động từ dùng phó từ phủ định nào?', opts:['不/没', '不 (chỉ dùng 不)', '没 (chỉ dùng 没)', '别'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："你在做什么呢？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Bạn đang làm gì đấy?" Bạn trả lời thế nào?',
     hint: '我正在……呢。', sample: '我正在找饭店呢。', sample_vn: 'Tôi đang tìm nhà hàng đây.',
     note: 'Cấu trúc "正在 + động từ + 呢" dùng để nói về hành động đang diễn ra.'},
    {q_zh: '有人问你："你还在读大学吗？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Bạn vẫn đang học đại học à?" Bạn trả lời thế nào?',
     hint: '对，我……', sample: '对，我读大学呢，还是大学生。', sample_vn: 'Đúng vậy, tôi đang học đại học, vẫn đang là sinh viên.',
     note: 'Có thể trả lời khẳng định bằng "对" rồi nhắc lại nội dung câu hỏi.'},
    {q_zh: '朋友问你今天要做什么，你怎么回答？', q_vn: 'Bạn của bạn hỏi hôm nay bạn định làm gì, bạn trả lời thế nào?',
     hint: '我今天要……', sample: '我今天要和小朋友玩。', sample_vn: 'Hôm nay tôi muốn chơi với các bạn.',
     note: 'Động từ năng nguyện "要" đặt trước động từ để nói về dự định.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Khi nào bạn có thể đến nhà hàng?', zh:'你什么时候能到饭店？', py:'Nǐ shénme shíhou néng dào fàndiàn?'},
  {vi:'Tôi không lái xe, đang đi taxi đây.', zh:'我没开车，坐车呢。', py:'Wǒ méi kāichē, zuò chē ne.'},
  {vi:'Bạn vẫn đang học đại học à?', zh:'你还在读大学吗？', py:'Nǐ hái zài dú dàxué ma?'},
  {vi:'Hôm nay cậu ấy muốn chơi với các bạn.', zh:'他今天要和小朋友玩。', py:'Tā jīntiān yào hé xiǎopéngyǒu wán.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Các bạn học có bận không?', zh:'你们学习忙不忙？', py:'Nǐmen xuéxí máng bu máng?'},
  {vi:'Em trai đã dậy chưa?', zh:'弟弟起床没起床呢？', py:'Dìdi qǐchuáng méi qǐchuáng ne?'},
  {vi:'Đi đâu ạ?', zh:'去哪里？', py:'Qù nǎlǐ?'},
  {vi:'Hôm qua tôi hỏi anh ấy.', zh:'我昨天问他。', py:'Wǒ zuótiān wèn tā.'},
];
