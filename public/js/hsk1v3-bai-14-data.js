// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 14: 我看了一个电影
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'上',py:'shàng',pos:'Động từ',vn:'lên (xe, tàu...)',em:'🚉',lesson:1,
   ex_zh:'你们上火车后看见王老师了吗？',ex_py:'Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?',ex_vn:'Sau khi lên tàu các bạn có nhìn thấy cô Vương không?',
   exList:[{zh:'你们上火车后看见王老师了吗？',py:'Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?',vn:'Sau khi lên tàu các bạn có nhìn thấy cô Vương không?'}]},
  {n:2,zh:'火车',py:'huǒchē',pos:'Danh từ',vn:'tàu, tàu hoả, xe lửa',em:'🚂',lesson:1,
   ex_zh:'你们上火车后看见王老师了吗？',ex_py:'Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?',ex_vn:'Sau khi lên tàu các bạn có nhìn thấy cô Vương không?',
   exList:[{zh:'你们上火车后看见王老师了吗？',py:'Nǐmen shàng huǒchē hòu kànjiàn Wáng lǎoshī le ma?',vn:'Sau khi lên tàu các bạn có nhìn thấy cô Vương không?'}]},
  {n:3,zh:'中午',py:'zhōngwǔ',pos:'Danh từ',vn:'buổi trưa',em:'🕛',lesson:1,
   ex_zh:'中午车开后，有些人在看书，有些人睡觉了。',ex_py:'Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kànshū, yǒuxiē rén shuìjiào le.',ex_vn:'Buổi trưa, sau khi tàu chạy, có một số người đọc sách, một số người ngủ.',
   exList:[{zh:'中午车开后，有些人在看书，有些人睡觉了。',py:'Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kànshū, yǒuxiē rén shuìjiào le.',vn:'Buổi trưa, sau khi tàu chạy, có một số người đọc sách, một số người ngủ.'}],
   hanzi:[
     {c:'中',p:'zhōng',type:'独体字 · Chữ đơn',st:4,ord:'丨(cổn) xuyên qua giữa 口(khẩu)',rad:'丨 (cổn – nét sổ)',mean:'giữa, trung tâm',
      tip:'Một nét thẳng xuyên qua giữa ô vuông → chỉ vị trí TRUNG TÂM, Ở GIỮA.',
      cf:'冲 (chōng – "xông tới")',w:'中午 / 中国'},
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
   exList:[{zh:'中午车开后，有些人在看书，有些人睡觉了。',py:'Zhōngwǔ chē kāi hòu, yǒuxiē rén zài kànshū, yǒuxiē rén shuìjiào le.',vn:'Buổi trưa, sau khi tàu chạy, có một số người đọc sách, một số người ngủ.'}]},
  {n:6,zh:'有的',py:'yǒude',pos:'Đại từ',vn:'có người, có cái',em:'▪️',lesson:1,
   ex_zh:'有的人在看书，有的人睡觉了。',ex_py:'Yǒude rén zài kànshū, yǒude rén shuìjiào le.',ex_vn:'Có người đọc sách, có người ngủ.',
   exList:[{zh:'有的人在看书，有的人睡觉了。',py:'Yǒude rén zài kànshū, yǒude rén shuìjiào le.',vn:'Có người đọc sách, có người ngủ.'}]},
  {n:7,zh:'了',py:'le',pos:'Trợ từ',vn:'(dùng sau động từ chỉ sự hoàn thành của động tác)',em:'✅',lesson:1,
   ex_zh:'我看了一个电影。',ex_py:'Wǒ kànle yí gè diànyǐng.',ex_vn:'Mình đã xem một bộ phim.',
   exList:[{zh:'我看了一个电影。',py:'Wǒ kànle yí gè diànyǐng.',vn:'Mình đã xem một bộ phim.'}]},
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
   exList:[{zh:'老师，我听不见。',py:'Lǎoshī, wǒ tīng bú jiàn.',vn:'Thưa cô, em không nghe thấy ạ.'}]},
  {n:11,zh:'不要',py:'búyào',pos:'Phó từ',vn:'đừng, không được',em:'🚫',lesson:2,
   ex_zh:'请大家不要说话！',ex_py:'Qǐng dàjiā búyào shuōhuà!',ex_vn:'Mọi người đừng nói chuyện!',
   exList:[{zh:'请大家不要说话！',py:'Qǐng dàjiā búyào shuōhuà!',vn:'Mọi người đừng nói chuyện!'}]},
  {n:12,zh:'说话',py:'shuōhuà',pos:'Động từ',vn:'nói chuyện',em:'💬',lesson:2,
   ex_zh:'请大家不要说话！',ex_py:'Qǐng dàjiā búyào shuōhuà!',ex_vn:'Mọi người đừng nói chuyện!',
   exList:[{zh:'请大家不要说话！',py:'Qǐng dàjiā búyào shuōhuà!',vn:'Mọi người đừng nói chuyện!'}]},
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
   exList:[{zh:'你们都会写哪些汉字了？',py:'Nǐmen dōu huì xiě nǎxiē Hànzì le?',vn:'Các em đã biết viết những chữ Hán nào rồi?'}]},
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
   exList:[{zh:'你们会说汉语了，也会写汉字了吗？',py:'Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?',vn:'Các em đã biết nói tiếng Trung Quốc rồi, cũng đã biết viết chữ Hán rồi phải không?'}]},
  {n:17,zh:'汉字',py:'Hànzì',pos:'Danh từ riêng',vn:'chữ Hán',em:'漢',lesson:2,
   ex_zh:'你们会说汉语了，也会写汉字了吗？',ex_py:'Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?',ex_vn:'Các em đã biết nói tiếng Trung Quốc rồi, cũng đã biết viết chữ Hán rồi phải không?',
   exList:[{zh:'你们会说汉语了，也会写汉字了吗？',py:'Nǐmen huì shuō Hànyǔ le, yě huì xiě Hànzì le ma?',vn:'Các em đã biết nói tiếng Trung Quốc rồi, cũng đã biết viết chữ Hán rồi phải không?'}]},
  {n:18,zh:'明年',py:'míngnián',pos:'Danh từ',vn:'sang năm, năm tới',em:'📆',lesson:3,
   ex_zh:'明年女儿上中学。',ex_py:'Míngnián nǚ’ér shàng zhōngxué.',ex_vn:'Sang năm con gái lên trung học.',
   exList:[{zh:'明年女儿上中学。',py:'Míngnián nǚ’ér shàng zhōngxué.',vn:'Sang năm con gái lên trung học.'}]},
  {n:19,zh:'上',py:'shàng',pos:'Động từ',vn:'lên, bắt đầu (làm gì đó vào thời gian cố định)',em:'⬆️',lesson:3,
   ex_zh:'明年女儿上中学。',ex_py:'Míngnián nǚ’ér shàng zhōngxué.',ex_vn:'Sang năm con gái lên trung học.',
   exList:[
     {zh:'明年女儿上中学。',py:'Míngnián nǚ’ér shàng zhōngxué.',vn:'Sang năm con gái lên trung học.'},
     {zh:'儿子也上小学了。',py:'Érzi yě shàng xiǎoxué le.',vn:'Con trai cũng lên tiểu học.'},
   ]},
  {n:20,zh:'中学',py:'zhōngxué',pos:'Danh từ',vn:'trường trung học, trung học',em:'🏫',lesson:3,
   ex_zh:'明年女儿上中学。',ex_py:'Míngnián nǚ’ér shàng zhōngxué.',ex_vn:'Sang năm con gái lên trung học.',
   exList:[{zh:'明年女儿上中学。',py:'Míngnián nǚ’ér shàng zhōngxué.',vn:'Sang năm con gái lên trung học.'}]},
  {n:21,zh:'小学',py:'xiǎoxué',pos:'Danh từ',vn:'trường tiểu học, tiểu học',em:'🏫',lesson:3,
   ex_zh:'儿子也上小学了。',ex_py:'Érzi yě shàng xiǎoxué le.',ex_vn:'Con trai cũng lên tiểu học.',
   exList:[{zh:'儿子也上小学了。',py:'Érzi yě shàng xiǎoxué le.',vn:'Con trai cũng lên tiểu học.'}]},
  {n:22,zh:'中学生',py:'zhōngxuéshēng',pos:'Danh từ',vn:'học sinh trung học, học sinh cấp hai',em:'🧑‍🎓',lesson:3,
   ex_zh:'我们家有了一个中学生。',ex_py:'Wǒmen jiā yǒule yí gè zhōngxuéshēng.',ex_vn:'Nhà mình có một học sinh trung học rồi.',
   exList:[{zh:'我们家有了一个中学生。',py:'Wǒmen jiā yǒule yí gè zhōngxuéshēng.',vn:'Nhà mình có một học sinh trung học rồi.'}]},
  {n:23,zh:'小学生',py:'xiǎoxuéshēng',pos:'Danh từ',vn:'học sinh tiểu học, học sinh cấp một',em:'🧒',lesson:3,
   ex_zh:'还有了一个小学生。',ex_py:'Hái yǒule yí gè xiǎoxuéshēng.',ex_vn:'Còn có thêm một học sinh tiểu học nữa.',
   exList:[{zh:'还有了一个小学生。',py:'Hái yǒule yí gè xiǎoxuéshēng.',vn:'Còn có thêm một học sinh tiểu học nữa.'}]},
  {n:24,zh:'上学',py:'shàngxué',pos:'Động từ',vn:'đi học, bắt đầu đi học',em:'🎒',lesson:3,
   ex_zh:'上学后，他们都忙了。',ex_py:'Shàngxué hòu, tāmen dōu máng le.',ex_vn:'Sau khi vào học, các con đều bận rộn cả.',
   exList:[{zh:'上学后，他们都忙了。',py:'Shàngxué hòu, tāmen dōu máng le.',vn:'Sau khi vào học, các con đều bận rộn cả.'}]},
  {n:25,zh:'他们',py:'tāmen',pos:'Đại từ',vn:'họ, chúng, bọn họ, các anh ấy, các em ấy...',em:'👬',lesson:3,
   ex_zh:'上学后，他们都忙了。',ex_py:'Shàngxué hòu, tāmen dōu máng le.',ex_vn:'Sau khi vào học, các con đều bận rộn cả.',
   exList:[{zh:'上学后，他们都忙了。',py:'Shàngxué hòu, tāmen dōu máng le.',vn:'Sau khi vào học, các con đều bận rộn cả.'}]},
  {n:26,zh:'她们',py:'tāmen',pos:'Đại từ',vn:'họ, chúng, bọn họ, các chị ấy, các em ấy... (nữ)',em:'👭',lesson:3,
   ex_zh:'她们都是小学生。',ex_py:'Tāmen dōu shì xiǎoxuéshēng.',ex_vn:'Các em ấy đều là học sinh tiểu học.',
   exList:[{zh:'她们都是小学生。',py:'Tāmen dōu shì xiǎoxuéshēng.',vn:'Các em ấy đều là học sinh tiểu học.'}]},
  {n:27,zh:'它们',py:'tāmen',pos:'Đại từ',vn:'chúng (đại từ nhân xưng ngôi thứ ba số nhiều, chỉ vật)',em:'📦',lesson:3,
   ex_zh:'它们都在桌子上。',ex_py:'Tāmen dōu zài zhuōzi shang.',ex_vn:'Chúng đều ở trên bàn.',
   exList:[{zh:'它们都在桌子上。',py:'Tāmen dōu zài zhuōzi shang.',vn:'Chúng đều ở trên bàn.'}]},
  {n:28,zh:'晚',py:'wǎn',pos:'Tính từ',vn:'muộn, trễ',em:'🌙',lesson:3,
   ex_zh:'太晚了，睡觉吧。',ex_py:'Tài wǎn le, shuìjiào ba.',ex_vn:'Muộn quá rồi, đi ngủ thôi.',
   exList:[{zh:'太晚了，睡觉吧。',py:'Tài wǎn le, shuìjiào ba.',vn:'Muộn quá rồi, đi ngủ thôi.'}],
   hanzi:[
     {c:'晚',p:'wǎn',type:'左右结构 · Trái-phải',st:11,ord:'日(nhật) trái → 免(miễn) phải',rad:'日 (nhật – mặt trời)',mean:'muộn, tối',
      tip:'Bộ 日(mặt trời) đã lặn muộn → chỉ thời gian buổi TỐI, MUỘN.',
      cf:'免 (miǎn – "miễn trừ", thiếu bộ 日)',w:'太晚了 / 晚上'},
   ]},
];

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
