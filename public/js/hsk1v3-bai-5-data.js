// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 5: 今天我休息
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'今天',py:'jīntiān',pos:'Danh từ',vn:'hôm nay',em:'📅',lesson:1,
   ex_zh:'今天几号？',ex_py:'Jīntiān jǐ hào?',ex_vn:'Hôm nay ngày mấy?',
   exList:[
     {zh:'今天几号？',py:'Jīntiān jǐ hào?',vn:'Hôm nay ngày mấy?'},
     {zh:'今天9月8号。',py:'Jīntiān jiǔ yuè bā hào.',vn:'Hôm nay là ngày 8 tháng 9.'},
   ],
   hanzi:[
     {c:'今',p:'jīn',type:'上下结构 · Trên-dưới',st:4,ord:'𠆢(biến thể của 人) trên → 一 → 𠃌 nét gập dưới',rad:'人 (nhân – người)',mean:'nay, hiện tại, bây giờ',
      tip:'𠆢(người) đứng trên một vạch ngang 一 và nét gập 𠃌, như đang ở NGAY dưới một mái che → nghĩa HIỆN NAY, BÂY GIỜ.',
      cf:'令 (lìng – "ra lệnh", cũng có 𠆢 ở trên nhưng thêm một nét chấm bên dưới)',w:'今天 / 现在 / 至今'},
     {c:'天',p:'tiān',type:'上下结构 · Trên-dưới',st:4,ord:'一 (nét ngang trên) → 大 (người dang tay) dưới',rad:'大 (đại – lớn)',mean:'trời, ngày',
      tip:'Một nét NGANG (一) đặt trên chữ 大 (người dang rộng hai tay, nghĩa "to lớn") → người đứng dưới bầu TRỜI rộng lớn → nghĩa TRỜI, mở rộng thành NGÀY.',
      cf:'夫 (fū – "chồng, đàn ông", cũng gồm 大 và một nét ngang nhưng vị trí nét ngang khác)',w:'今天 / 明天 / 星期天'},
   ]},
  {n:2,zh:'号',py:'hào',pos:'Lượng từ',vn:'ngày, mùng',em:'🔢',lesson:1,
   ex_zh:'今天9月8号。',ex_py:'Jīntiān jiǔ yuè bā hào.',ex_vn:'Hôm nay là ngày 8 tháng 9.',
   exList:[
     {zh:'今天9月8号。',py:'Jīntiān jiǔ yuè bā hào.',vn:'Hôm nay là ngày 8 tháng 9.'},
   ],
   hanzi:[
     {c:'号',p:'hào',type:'上下结构 · Trên-dưới',st:5,ord:'口 (khẩu - miệng) trên → 丂 (biến thể) dưới',rad:'口 (khẩu – miệng)',mean:'số, ngày (trong tháng), hiệu, tên gọi',
      tip:'口 (miệng) hô to phía trên, 丂 (hơi vang) phía dưới → hình ảnh miệng HÔ, GỌI to số hiệu → nghĩa SỐ, NGÀY, TÊN HIỆU.',
      cf:'亏 (kuī – "thiệt hại, thua lỗ", phần dưới giống nhau nhưng không có bộ 口 phía trên)',w:'号码 / 几号 / 8号'},
   ]},
  {n:3,zh:'月',py:'yuè',pos:'Danh từ',vn:'tháng',em:'🌙',lesson:1,
   ex_zh:'今天9月8号。',ex_py:'Jīntiān jiǔ yuè bā hào.',ex_vn:'Hôm nay là ngày 8 tháng 9.',
   exList:[
     {zh:'今天9月8号。',py:'Jīntiān jiǔ yuè bā hào.',vn:'Hôm nay là ngày 8 tháng 9.'},
   ],
   hanzi:[
     {c:'月',p:'yuè',type:'独体字 · Chữ đơn (tượng hình)',st:4,ord:'ノ→冂→二',rad:'月 (nguyệt)',mean:'tháng, mặt trăng',
      tip:'Hình vẽ mặt trăng khuyết → NGUYỆT (mặt trăng), mở rộng nghĩa thành THÁNG (chu kỳ mặt trăng).',
      cf:'肉 (ròu – "thịt", dễ nhầm bộ 月 dạng nhục)',w:'九月 / 月亮'},
   ]},
  {n:4,zh:'日',py:'rì',pos:'Lượng từ',vn:'ngày',em:'☀️',lesson:1,
   ex_zh:'星期日',ex_py:'Xīngqīrì',ex_vn:'Chủ nhật',
   exList:[
     {zh:'星期日',py:'Xīngqīrì',vn:'Chủ nhật'},
   ],
   hanzi:[
     {c:'日',p:'rì',type:'独体字 · Chữ đơn (tượng hình)',st:4,ord:'囗 (khung ngoài) → 一 (nét ngang giữa)',rad:'日 (nhật – tự thành bộ)',mean:'ngày, mặt trời',
      tip:'Hình vuông có một nét ngang ở giữa, mô phỏng hình MẶT TRỜI nhìn từ xa (hình tròn được vuông hoá) → nghĩa MẶT TRỜI, mở rộng thành NGÀY.',
      cf:'曰 (yuē – "nói rằng", hình dẹt hơn, nét ngang không chạm hai bên)',w:'生日 / 星期日 / 日子'},
   ]},
  {n:5,zh:'星期',py:'xīngqī',pos:'Danh từ',vn:'thứ, tuần',em:'📆',lesson:1,
   ex_zh:'星期几？',ex_py:'Xīngqī jǐ?',ex_vn:'Hôm nay thứ mấy?',
   exList:[
     {zh:'星期几？',py:'Xīngqī jǐ?',vn:'Hôm nay thứ mấy?'},
   ],
   hanzi:[
     {c:'星',p:'xīng',type:'上下结构 · Trên-dưới',st:9,ord:'日 (nhật - ánh sáng) trên → 生 (sinh) dưới',rad:'日 (nhật – mặt trời/ánh sáng)',mean:'sao, ngôi sao',
      tip:'日 (đốm sáng nhỏ) phía trên chữ 生 (sinh ra, mọc lên) → những đốm sáng MỌC LÊN trên bầu trời đêm → nghĩa NGÔI SAO.',
      cf:'猩 (xīng – "tinh tinh", thêm bộ 犭bên trái, cùng âm và cùng có 星 bên phải)',w:'星期 / 明星 / 火星'},
     {c:'期',p:'qī',type:'左右结构 · Trái-phải',st:12,ord:'其 (kỳ - biểu âm) trái → 月 (nguyệt) phải',rad:'月 (nguyệt – mặt trăng/chu kỳ)',mean:'kỳ hạn, thời kỳ, tuần',
      tip:'其 (đó, ấy - biểu âm) đứng cạnh 月 (mặt trăng, biểu thị chu kỳ thời gian) → một chu kỳ MẶT TRĂNG lặp lại → nghĩa KỲ HẠN, TUẦN.',
      cf:'欺 (qī – "lừa dối", cũng có 其ở trái nhưng bên phải là 欠 chứ không phải 月)',w:'星期 / 学期 / 期末'},
   ]},
  {n:6,zh:'星期日',py:'Xīngqīrì',pos:'Danh từ',vn:'Chủ nhật',em:'🌞',lesson:1,
   ex_zh:'星期日。今天我休息。',ex_py:'Xīngqīrì. Jīntiān wǒ xiūxi.',ex_vn:'Chủ nhật. Hôm nay anh được nghỉ.',
   exList:[
     {zh:'星期日。今天我休息。',py:'Xīngqīrì. Jīntiān wǒ xiūxi.',vn:'Chủ nhật. Hôm nay anh được nghỉ.'},
   ],
   hanzi:[
     {c:'星',p:'xīng',type:'上下结构 · Trên-dưới',st:9,ord:'日 (nhật - ánh sáng) trên → 生 (sinh) dưới',rad:'日 (nhật – mặt trời/ánh sáng)',mean:'sao, ngôi sao',
      tip:'日 (đốm sáng nhỏ) phía trên chữ 生 (sinh ra, mọc lên) → những đốm sáng MỌC LÊN trên bầu trời đêm → nghĩa NGÔI SAO.',
      cf:'猩 (xīng – "tinh tinh", thêm bộ 犭bên trái, cùng âm và cùng có 星 bên phải)',w:'星期 / 明星 / 火星'},
     {c:'期',p:'qī',type:'左右结构 · Trái-phải',st:12,ord:'其 (kỳ - biểu âm) trái → 月 (nguyệt) phải',rad:'月 (nguyệt – mặt trăng/chu kỳ)',mean:'kỳ hạn, thời kỳ, tuần',
      tip:'其 (đó, ấy - biểu âm) đứng cạnh 月 (mặt trăng, biểu thị chu kỳ thời gian) → một chu kỳ MẶT TRĂNG lặp lại → nghĩa KỲ HẠN, TUẦN.',
      cf:'欺 (qī – "lừa dối", cũng có 其ở trái nhưng bên phải là 欠 chứ không phải 月)',w:'星期 / 学期 / 期末'},
     {c:'日',p:'rì',type:'独体字 · Chữ đơn (tượng hình)',st:4,ord:'囗 (khung ngoài) → 一 (nét ngang giữa)',rad:'日 (nhật – tự thành bộ)',mean:'ngày, mặt trời',
      tip:'Hình vuông có một nét ngang ở giữa, mô phỏng hình MẶT TRỜI nhìn từ xa → nghĩa MẶT TRỜI, mở rộng thành NGÀY; 星期日 nghĩa đen là "ngày của mặt trời" (Chủ nhật).',
      cf:'曰 (yuē – "nói rằng", hình dẹt hơn, nét ngang không chạm hai bên)',w:'星期日 / 生日 / 日子'},
   ]},
  {n:7,zh:'星期天',py:'Xīngqītiān',pos:'Danh từ',vn:'Chủ nhật',em:'🌞',lesson:2,
   ex_zh:'星期天我也做饭。',ex_py:'Xīngqītiān wǒ yě zuò fàn.',ex_vn:'Chủ nhật tôi cũng nấu ăn.',
   exList:[
     {zh:'星期天我也做饭。',py:'Xīngqītiān wǒ yě zuò fàn.',vn:'Chủ nhật tôi cũng nấu ăn.'},
   ],
   hanzi:[
     {c:'星',p:'xīng',type:'上下结构 · Trên-dưới',st:9,ord:'日 (nhật - ánh sáng) trên → 生 (sinh) dưới',rad:'日 (nhật – mặt trời/ánh sáng)',mean:'sao, ngôi sao',
      tip:'日 (đốm sáng nhỏ) phía trên chữ 生 (sinh ra, mọc lên) → những đốm sáng MỌC LÊN trên bầu trời đêm → nghĩa NGÔI SAO.',
      cf:'猩 (xīng – "tinh tinh", thêm bộ 犭bên trái, cùng âm và cùng có 星 bên phải)',w:'星期 / 明星 / 火星'},
     {c:'期',p:'qī',type:'左右结构 · Trái-phải',st:12,ord:'其 (kỳ - biểu âm) trái → 月 (nguyệt) phải',rad:'月 (nguyệt – mặt trăng/chu kỳ)',mean:'kỳ hạn, thời kỳ, tuần',
      tip:'其 (đó, ấy - biểu âm) đứng cạnh 月 (mặt trăng, biểu thị chu kỳ thời gian) → một chu kỳ MẶT TRĂNG lặp lại → nghĩa KỲ HẠN, TUẦN.',
      cf:'欺 (qī – "lừa dối", cũng có 其ở trái nhưng bên phải là 欠 chứ không phải 月)',w:'星期 / 学期 / 期末'},
     {c:'天',p:'tiān',type:'上下结构 · Trên-dưới',st:4,ord:'一 (nét ngang trên) → 大 (người dang tay) dưới',rad:'大 (đại – lớn)',mean:'trời, ngày',
      tip:'Một nét NGANG (一) đặt trên chữ 大 (người dang rộng hai tay) → người đứng dưới bầu TRỜI rộng lớn → nghĩa TRỜI, mở rộng thành NGÀY; 星期天 nghĩa đen là "ngày trời" (Chủ nhật).',
      cf:'夫 (fū – "chồng, đàn ông", cũng gồm 大 và một nét ngang nhưng vị trí khác)',w:'星期天 / 今天 / 明天'},
   ]},
  {n:8,zh:'休息',py:'xiūxi',pos:'Động từ',vn:'nghỉ, nghỉ ngơi',em:'😴',lesson:1,
   ex_zh:'今天我休息。',ex_py:'Jīntiān wǒ xiūxi.',ex_vn:'Hôm nay anh được nghỉ.',
   exList:[
     {zh:'今天我休息。',py:'Jīntiān wǒ xiūxi.',vn:'Hôm nay anh được nghỉ.'},
   ],
   hanzi:[
     {c:'休',p:'xiū',type:'左右结构 · Trái-phải',st:6,ord:'亻(nhân) trái → 木(mộc) phải',rad:'亻 (nhân – người)',mean:'nghỉ ngơi',
      tip:'亻(người) dựa vào 木(cây) → hình ảnh người ngồi tựa gốc cây để NGHỈ NGƠI.',
      cf:'体 (tǐ – "thân thể", cũng bộ 亻")',w:'休息 / 休假'},
     {c:'息',p:'xi',type:'上下结构 · Trên-dưới',st:10,ord:'自 (tự - mũi) trên → 心 (tâm) dưới',rad:'心 (tâm – trái tim, tấm lòng)',mean:'nghỉ, hơi thở, tin tức',
      tip:'自 (chỉ cái MŨI, nơi hít thở) đặt trên 心 (trái tim) → hơi thở đi từ mũi xuống tim, nhịp thở đều đặn khi NGHỈ NGƠI → nghĩa NGHỈ, HƠI THỞ.',
      cf:'自 (zì – "tự, bản thân", chính là phần trên của 息 nhưng đứng riêng lẻ mang nghĩa khác)',w:'休息 / 消息 / 信息'},
   ]},
  {n:9,zh:'会',py:'huì',pos:'Động từ năng nguyện',vn:'biết, có thể',em:'✅',lesson:2,
   ex_zh:'你会做饭吗？',ex_py:'Nǐ huì zuò fàn ma?',ex_vn:'Em có biết nấu ăn không?',
   exList:[
     {zh:'你会做饭吗？',py:'Nǐ huì zuò fàn ma?',vn:'Em có biết nấu ăn không?'},
     {zh:'我会做。',py:'Wǒ huì zuò.',vn:'Em biết.'},
   ],
   hanzi:[
     {c:'会',p:'huì',type:'上下结构 · Trên-dưới',st:6,ord:'𠆢(nhân, biến thể) trên → 云-dạng giản thể dưới',rad:'人 (nhân – người)',mean:'biết, có thể, hội, gặp gỡ',
      tip:'𠆢(người) đứng trên phần dưới giống mây 云 (tụ hội lại) → nhiều người TỤ HỘI, học hỏi lẫn nhau nên BIẾT làm việc gì đó → nghĩa BIẾT, CÓ THỂ, HỘI.',
      cf:'云 (yún – "mây, nói rằng", là phần dưới của 会 nhưng đứng riêng mang nghĩa khác)',w:'会说 / 开会 / 机会'},
   ]},
  {n:10,zh:'做饭',py:'zuò fàn',pos:'Cụm từ',vn:'nấu ăn',em:'🍳',lesson:2,
   ex_zh:'你会做饭吗？',ex_py:'Nǐ huì zuò fàn ma?',ex_vn:'Em có biết nấu ăn không?',
   exList:[
     {zh:'你会做饭吗？',py:'Nǐ huì zuò fàn ma?',vn:'Em có biết nấu ăn không?'},
     {zh:'星期天我也做饭。',py:'Xīngqītiān wǒ yě zuò fàn.',vn:'Chủ nhật tôi cũng nấu ăn.'},
   ],
   hanzi:[
     {c:'做',p:'zuò',type:'左右结构 · Trái-phải',st:11,ord:'亻 (nhân) trái → 古 (cổ) → 攵 (phốc) phải',rad:'亻 (nhân – người)',mean:'làm, chế tạo, nấu (thức ăn)',
      tip:'亻(người) đứng cạnh 故 (việc, công việc) → người bắt tay vào công việc, tự tay LÀM ra thứ gì đó → nghĩa LÀM, thường dùng cho 做饭, 做菜.',
      cf:'作 (zuò – cùng âm "làm", cũng bộ 亻, nhưng phải là 乍; 做 dùng cho hành động cụ thể như nấu ăn, 作 dùng trừu tượng hơn như sáng tác)',w:'做饭 / 做菜 / 做作业'},
     {c:'饭',p:'fàn',type:'左右结构 · Trái-phải',st:7,ord:'饣(thực, biến thể của 食) trái → 反 (phản) phải',rad:'饣 (thực – ăn, đồ ăn)',mean:'cơm, bữa ăn',
      tip:'饣(bộ ăn) đứng cạnh 反 (lật qua lật lại, biểu âm "fàn") → hành động XỚI, LẬT cơm trong bát khi ăn → nghĩa CƠM, BỮA ĂN.',
      cf:'饱 (bǎo – "no bụng", cũng bộ 饣, thêm phần 包)',w:'做饭 / 吃饭 / 米饭'},
   ]},
  {n:11,zh:'做',py:'zuò',pos:'Động từ',vn:'làm, nấu',em:'👨‍🍳',lesson:2,
   ex_zh:'你会做什么？',ex_py:'Nǐ huì zuò shénme?',ex_vn:'Em biết nấu món gì?',
   exList:[
     {zh:'你会做什么？',py:'Nǐ huì zuò shénme?',vn:'Em biết nấu món gì?'},
   ],
   hanzi:[
     {c:'做',p:'zuò',type:'左右结构 · Trái-phải',st:11,ord:'亻 (nhân) trái → 古 (cổ) → 攵 (phốc) phải',rad:'亻 (nhân – người)',mean:'làm, chế tạo, nấu (thức ăn)',
      tip:'亻(người) đứng cạnh 故 (việc, công việc) → người bắt tay vào công việc, tự tay LÀM ra thứ gì đó → nghĩa LÀM, thường dùng cho 做饭, 做菜.',
      cf:'作 (zuò – cùng âm "làm", cũng bộ 亻, nhưng phải là 乍; 做 dùng cho hành động cụ thể như nấu ăn, 作 dùng trừu tượng hơn như sáng tác)',w:'做饭 / 做菜 / 做作业'},
   ]},
  {n:12,zh:'面条儿',py:'miàntiáor',pos:'Danh từ',vn:'mì, mì sợi',em:'🍜',lesson:2,
   ex_zh:'我会做面条儿、饺子。',ex_py:'Wǒ huì zuò miàntiáor, jiǎozi.',ex_vn:'Em biết nấu mì, sủi cảo.',
   exList:[
     {zh:'我会做面条儿、饺子。',py:'Wǒ huì zuò miàntiáor, jiǎozi.',vn:'Em biết nấu mì, sủi cảo.'},
   ],
   hanzi:[
     {c:'面',p:'miàn',type:'独体字 · Chữ đơn (tượng hình)',st:9,ord:'一 → 丆 → 囗 bao quanh → các nét ngang bên trong (đường nét khuôn mặt)',rad:'面 (diện – tự thành bộ)',mean:'mặt, mặt phẳng; sợi (mì)',
      tip:'Hình vẽ khuôn MẶT người với đường viền ngoài và các nét bên trong tượng trưng cho mắt, mũi → nghĩa MẶT; mở rộng sang MẶT PHẲNG, rồi chỉ sợi mì dẹt, phẳng như MẶT (面条儿).',
      cf:'而 (ér – "mà, mà còn", phần trên cũng có nét ngang và nét dọc nhưng không có khung bao quanh đầy đủ)',w:'面条儿 / 见面 / 后面'},
     {c:'条',p:'tiáo',type:'上下结构 · Trên-dưới',st:7,ord:'夊(tuy, biến thể - bước chân) trên → 木 (mộc - cây) dưới',rad:'木 (mộc – cây, gỗ)',mean:'sợi, nhánh (lượng từ vật dài, mảnh)',
      tip:'Phần trên giống bước chân đi (夊), phần dưới là 木 (cây) → hình ảnh một CÀNH CÂY dài, mảnh, đung đưa → dùng làm lượng từ cho vật dài, mảnh như sợi mì, con đường.',
      cf:'各 (gè – "mỗi, từng", phần trên gần giống nhưng bên dưới là 口 chứ không phải 木)',w:'面条儿 / 一条 / 条件'},
     {c:'儿',p:'r',type:'独体字 · Chữ đơn',st:2,ord:'丿 → 乚 (đôi chân người)',rad:'儿 (nhi – tự thành bộ, chân người)',mean:'con, hậu tố nhi hoá (đọc lướt thành "r" khi ghép vần)',
      tip:'Hình vẽ đôi CHÂN của một đứa trẻ đang đi → nghĩa CON, TRẺ NHỎ; khi đứng sau âm tiết khác như 条, nó chỉ còn giữ lại âm cuốn lưỡi "r" gọi là nhi hoá, không tách thành âm tiết riêng (miàn-tiáor).',
      cf:'几 (jǐ – "mấy, bao nhiêu", hình dáng gần giống nhưng nét trên cong ở vị trí khác)',w:'面条儿 / 儿子 / 女儿'},
   ]},
  {n:13,zh:'饺子',py:'jiǎozi',pos:'Danh từ',vn:'sủi cảo',em:'🥟',lesson:2,
   ex_zh:'我会做面条儿、饺子。',ex_py:'Wǒ huì zuò miàntiáor, jiǎozi.',ex_vn:'Em biết nấu mì, sủi cảo.',
   exList:[
     {zh:'我会做面条儿、饺子。',py:'Wǒ huì zuò miàntiáor, jiǎozi.',vn:'Em biết nấu mì, sủi cảo.'},
   ],
   hanzi:[
     {c:'饺',p:'jiǎo',type:'左右结构 · Trái-phải',st:9,ord:'饣(thực) trái → 交 (giao) phải',rad:'饣 (thực – ăn, đồ ăn)',mean:'sủi cảo, bánh chẻo',
      tip:'饣(bộ ăn) đứng cạnh 交 (giao nhau, gấp chéo) → phần bột được GẤP CHÉO lại ôm lấy nhân bên trong khi làm món ăn → nghĩa SỦI CẢO.',
      cf:'较 (jiào – "so sánh", bộ 车 bên trái thay vì 饣, cùng có 交 bên phải)',w:'饺子 / 水饺 / 包饺子'},
     {c:'子',p:'zi',type:'独体字 · Chữ đơn (tượng hình)',st:3,ord:'了 (nét móc) → 一 ngang bên dưới',rad:'子 (tử – tự thành bộ)',mean:'con, hậu tố danh từ (đọc nhẹ)',
      tip:'Hình vẽ đứa TRẺ SƠ SINH quấn tã, hai tay dang ra → nghĩa CON, CON CÁI; khi đọc nhẹ (轻声), đứng sau danh từ chỉ là hậu tố không mang nghĩa riêng, như 饺子, 儿子.',
      cf:'了 (le – trợ từ hoàn thành, hình gần giống phần trên của 子 nhưng thiếu nét ngang)',w:'饺子 / 儿子 / 桌子'},
   ]},
  {n:14,zh:'一些',py:'yìxiē',pos:'Số lượng từ',vn:'một số, một vài',em:'🔸',lesson:2,
   ex_zh:'也会做一些菜。',ex_py:'Yě huì zuò yìxiē cài.',ex_vn:'Cũng biết chế biến một số món ăn khác.',
   exList:[
     {zh:'也会做一些菜。',py:'Yě huì zuò yìxiē cài.',vn:'Cũng biết chế biến một số món ăn khác.'},
   ],
   hanzi:[
     {c:'一',p:'yì',type:'独体字 · Chữ đơn',st:1,ord:'một nét ngang duy nhất',rad:'一 (nhất – tự thành bộ)',mean:'một, số 1',
      tip:'Một NÉT NGANG duy nhất tượng trưng cho số ĐẦU TIÊN, đơn giản nhất trong các con số. Trước âm tiết thanh 1 như 些 (xiē), "一" biến điệu đọc thành thanh 4: yì xiē.',
      cf:'丨 (gǔn – nét sổ, không phải chữ độc lập mang nghĩa, dễ nhầm hướng nét)',w:'一些 / 一个 / 星期一'},
     {c:'些',p:'xiē',type:'上下结构 · Trên-dưới',st:8,ord:'此 (thử - này) trên → 二 (nhị) dưới',rad:'二 (nhị – hai)',mean:'một vài, một số (số lượng không xác định)',
      tip:'此 (này, chỉ định) đặt trên 二 (số hai, tượng trưng số nhiều hơn một) → chỉ "những cái NÀY" với số lượng nhiều hơn một → nghĩa MỘT VÀI, MỘT SỐ.',
      cf:'此 (cǐ – "này, đây", chính là phần trên của 些 nhưng đứng riêng, không có 二 bên dưới)',w:'一些 / 这些 / 那些'},
   ]},
  {n:15,zh:'菜',py:'cài',pos:'Danh từ',vn:'món ăn, rau',em:'🥘',lesson:2,
   ex_zh:'也会做一些菜。',ex_py:'Yě huì zuò yìxiē cài.',ex_vn:'Cũng biết chế biến một số món ăn khác.',
   exList:[
     {zh:'也会做一些菜。',py:'Yě huì zuò yìxiē cài.',vn:'Cũng biết chế biến một số món ăn khác.'},
     {zh:'你会做这两个菜吗？',py:'Nǐ huì zuò zhè liǎng gè cài ma?',vn:'Bạn có biết làm hai món này không?'},
   ],
   hanzi:[
     {c:'菜',p:'cài',type:'上下结构 · Trên-dưới',st:11,ord:'艹 (thảo - cỏ) trên → 采 (thái - hái) dưới',rad:'艹 (thảo – cỏ, thực vật)',mean:'rau, món ăn',
      tip:'艹(cỏ cây) phía trên chữ 采 (hái, thu hoạch bằng tay từ cây) → hành động HÁI RAU CỎ từ cây → nghĩa RAU, mở rộng thành MÓN ĂN nói chung.',
      cf:'采 (cǎi – "hái, thu thập", chính là phần dưới của 菜 nhưng không có bộ 艹 phía trên)',w:'青菜 / 做菜 / 菜单'},
   ]},
  {n:16,zh:'下班',py:'xiàbān',pos:'Động từ',vn:'tan làm, tan ca',em:'🏁',lesson:3,
   ex_zh:'同乐，下班吗？',ex_py:'Tónglè, xiàbān ma?',ex_vn:'Đồng Lạc, tan làm chưa?',
   exList:[
     {zh:'同乐，下班吗？',py:'Tónglè, xiàbān ma?',vn:'Đồng Lạc, tan làm chưa?'},
     {zh:'下班。',py:'Xiàbān.',vn:'Tan làm rồi.'},
   ],
   hanzi:[
     {c:'下',p:'xià',type:'独体字 · Chữ đơn (chỉ sự)',st:3,ord:'一 (đường chuẩn) trên → 卜 (nét sổ + chấm) dưới, chỉ điểm ở dưới đường chuẩn',rad:'一 (nhất – đường chuẩn, số một)',mean:'dưới, xuống, lần (thứ)',
      tip:'Một nét ngang 一 làm ĐƯỜNG CHUẨN, một nét ngắn đặt PHÍA DƯỚI đường đó → chỉ vị trí ở DƯỚI, hướng ĐI XUỐNG, như 下班 (xuống ca, tan làm).',
      cf:'上 (shàng – "trên, lên", cùng kiểu chỉ sự nhưng nét ngắn đặt phía TRÊN đường chuẩn thay vì dưới)',w:'下班 / 下午 / 下雨'},
     {c:'班',p:'bān',type:'左中右结构 · Trái-giữa-phải',st:10,ord:'王 (ngọc) trái → 刂 (đao) giữa → 王 (ngọc) phải',rad:'王 (vương/ngọc – vua, ngọc)',mean:'ca (làm việc), lớp, nhóm',
      tip:'Hai chữ 王 (viên ngọc quý) đặt hai bên, ở giữa là 刂(con dao) dùng để CẮT, PHÂN CHIA ngọc thành từng phần đều nhau → nghĩa PHÂN thành từng NHÓM, từng CA làm việc, từng LỚP học.',
      cf:'斑 (bān – "đốm, vết", cũng có hai chữ 王 nhưng ở giữa là 文 chứ không phải 刂)',w:'下班 / 上班 / 班级'},
   ]},
  {n:17,zh:'新',py:'xīn',pos:'Tính từ',vn:'mới',em:'✨',lesson:3,
   ex_zh:'这是你的新电脑吗？',ex_py:'Zhè shì nǐ de xīn diànnǎo ma?',ex_vn:'Đây là máy tính mới của em à?',
   exList:[
     {zh:'这是你的新电脑吗？',py:'Zhè shì nǐ de xīn diànnǎo ma?',vn:'Đây là máy tính mới của em à?'},
   ],
   hanzi:[
     {c:'新',p:'xīn',type:'左右结构 · Trái-phải',st:13,ord:'亲 (thân) trái → 斤 (cân/rìu) phải',rad:'斤 (cân – cái rìu)',mean:'mới',
      tip:'亲 (cây non mới trồng, gần gũi) đứng cạnh 斤 (cái rìu, dùng để chặt, đẽo gỗ) → dùng rìu đẽo gỗ MỚI, tạo ra vật dụng MỚI → nghĩa MỚI.',
      cf:'亲 (qīn – "thân thiết, cha mẹ", chính là phần trái của 新 nhưng đứng riêng không có bộ 斤)',w:'新电脑 / 新年 / 新的'},
   ]},
  {n:18,zh:'电脑',py:'diànnǎo',pos:'Danh từ',vn:'máy tính, máy vi tính',em:'💻',lesson:3,
   ex_zh:'这是你的新电脑吗？',ex_py:'Zhè shì nǐ de xīn diànnǎo ma?',ex_vn:'Đây là máy tính mới của em à?',
   exList:[
     {zh:'这是你的新电脑吗？',py:'Zhè shì nǐ de xīn diànnǎo ma?',vn:'Đây là máy tính mới của em à?'},
   ],
   hanzi:[
     {c:'脑',p:'nǎo',type:'左右结构 · Trái-phải (giản thể)',st:10,ord:'月(nhục) trái → 恼(biến thể) phải',rad:'月 (nhục – cơ thể)',mean:'não, đầu óc',
      tip:'月(bộ phận cơ thể) + phần biểu âm → bộ phận suy nghĩ trong đầu = NÃO; máy tính = "điện não" (bộ não điện tử).',
      cf:'恼 (nǎo – "phiền não")',w:'电脑 / 头脑'},
     {c:'电',p:'diàn',type:'独体字 · Chữ đơn (tượng hình, biến thể của 申)',st:5,ord:'曰 (khung ngoài) → 乚 (nét móc xuyên qua, tia chớp)',rad:'电 (điện – tự thành bộ)',mean:'điện',
      tip:'Hình ảnh cách điệu của một TIA CHỚP xẹt ngang qua bầu trời (từ chữ 申 - tia sét) → nghĩa ĐIỆN; 电脑 (máy tính) nghĩa đen là "não điện".',
      cf:'由 (yóu – "từ, do", hình dáng gần giống nhưng nét sổ xuyên thẳng ra ngoài phía trên thay vì móc câu phía dưới)',w:'电脑 / 电话 / 电视'},
   ]},
  {n:19,zh:'真',py:'zhēn',pos:'Phó từ',vn:'thật, thực sự',em:'💯',lesson:3,
   ex_zh:'真好看！',ex_py:'Zhēn hǎokàn!',ex_vn:'Đẹp thật đấy!',
   exList:[
     {zh:'真好看！',py:'Zhēn hǎokàn!',vn:'Đẹp thật đấy!'},
   ],
   hanzi:[
     {c:'真',p:'zhēn',type:'上下结构 · Trên-dưới',st:10,ord:'十 → 目 (mắt) → 八 (đáy)',rad:'目 (mục – con mắt)',mean:'thật, chân thật',
      tip:'Bên trong có chữ 目 (con mắt) nhìn thẳng, phía trên có nét 十 như đang tập trung quan sát, phía dưới có 八 như đôi chân trụ vững → MẮT NHÌN THẬT KỸ, đứng vững để thấy điều CHÂN THẬT → nghĩa THẬT.',
      cf:'直 (zhí – "thẳng", cũng chứa 目 ở giữa nhưng phần dưới là 十, không có 八 tách hai bên)',w:'真好看 / 真的 / 认真'},
   ]},
  {n:20,zh:'好看',py:'hǎokàn',pos:'Tính từ',vn:'đẹp',em:'😍',lesson:3,
   ex_zh:'真好看！',ex_py:'Zhēn hǎokàn!',ex_vn:'Đẹp thật đấy!',
   exList:[
     {zh:'真好看！',py:'Zhēn hǎokàn!',vn:'Đẹp thật đấy!'},
   ],
   hanzi:[
     {c:'好',p:'hǎo',type:'左右结构 · Trái-phải',st:6,ord:'女 (nữ) trái → 子 (tử) phải',rad:'女 (nữ – phụ nữ)',mean:'tốt, đẹp, khoẻ',
      tip:'女 (người mẹ) bên cạnh 子 (đứa con) → hình ảnh MẸ và CON bên nhau, một cảnh tượng TỐT ĐẸP, hạnh phúc → nghĩa TỐT, ĐẸP.',
      cf:'如 (rú – "như, giống như", cũng có bộ 女 bên trái nhưng bên phải là 口 chứ không phải 子)',w:'好看 / 你好 / 很好'},
     {c:'看',p:'kàn',type:'上下结构 · Trên-dưới',st:9,ord:'手 (thủ, biến thể) trên → 目 (mục - mắt) dưới',rad:'目 (mục – con mắt)',mean:'xem, nhìn',
      tip:'Bàn TAY (手) che phía trên con MẮT (目) → động tác lấy tay che nắng để NHÌN XA cho rõ → nghĩa XEM, NHÌN.',
      cf:'着 (zhe/zháo – trợ từ/"chạm", phần trên cũng giống 手 biến thể nhưng bên dưới nối liền khác cấu trúc, dễ nhầm khi viết nhanh)',w:'好看 / 看书 / 看见'},
   ]},
  {n:21,zh:'喜欢',py:'xǐhuan',pos:'Động từ',vn:'thích',em:'😊',lesson:3,
   ex_zh:'我也很喜欢它。',ex_py:'Wǒ yě hěn xǐhuan tā.',ex_vn:'Em cũng rất thích nó.',
   exList:[
     {zh:'我也很喜欢它。',py:'Wǒ yě hěn xǐhuan tā.',vn:'Em cũng rất thích nó.'},
   ],
   hanzi:[
     {c:'喜',p:'xǐ',type:'上下结构 · Trên-dưới',st:12,ord:'士 → 冖 → 豆 (dạng cái trống) → 口 (miệng) dưới cùng',rad:'口 (khẩu – miệng)',mean:'vui mừng, thích',
      tip:'Phần trên tượng hình cái TRỐNG được đánh vang lên, phía dưới là 口 (miệng) đang CA HÁT → cảnh đánh trống, ca hát VUI MỪNG → nghĩa VUI, THÍCH.',
      cf:'嘉 (jiā – "tốt đẹp", cấu trúc phần trên khá giống 喜, dễ nhầm khi viết nhanh)',w:'喜欢 / 恭喜 / 欢喜'},
     {c:'欢',p:'huan',type:'左右结构 · Trái-phải',st:6,ord:'又 (hựu, giản thể) trái → 欠 (khiếm - ngáp/thở) phải',rad:'欠 (khiếm – hà hơi, thở dốc)',mean:'vui vẻ, hoan hỉ',
      tip:'又 (bàn tay, lặp lại động tác) đứng cạnh 欠 (miệng mở to như hà hơi, reo hò) → vỗ tay REO HÒ VUI VẺ → nghĩa VUI, dùng trong 喜欢 (thích).',
      cf:'汉 (hàn – "người Hán, chữ Hán", cũng có 又 bên phải nhưng bộ 氵bên trái thay vì 欠)',w:'喜欢 / 欢迎 / 欢乐'},
   ]},
  {n:22,zh:'它',py:'tā',pos:'Đại từ',vn:'nó',em:'📦',lesson:3,
   ex_zh:'我也很喜欢它。',ex_py:'Wǒ yě hěn xǐhuan tā.',ex_vn:'Em cũng rất thích nó.',
   exList:[
     {zh:'我也很喜欢它。',py:'Wǒ yě hěn xǐhuan tā.',vn:'Em cũng rất thích nó.'},
   ],
   hanzi:[
     {c:'它',p:'tā',type:'上下结构 · Trên-dưới',st:5,ord:'宀 (miên - mái nhà) trên → 匕 (chuỷ) dưới',rad:'宀 (miên – mái nhà)',mean:'nó (đại từ chỉ vật, con vật)',
      tip:'宀(mái nhà) che trên một hình 匕(giống con vật nhỏ cuộn mình) trú ẩn bên trong → nguyên nghĩa cổ chỉ con vật trong hang, sau dùng làm đại từ chỉ vật/con vật không phải người → nghĩa NÓ.',
      cf:'宅 (zhái – "nhà ở", cũng bộ 宀 trên nhưng bên dưới là 乇 khác 匕)',w:'喜欢它 / 它们 / 它是'},
   ]},
];

var wuData = [
  {img:'📅',label:'2025 年 5 月',py:'èr líng èr wǔ nián wǔ yuè',letter:'A'},
  {img:'🈷️',label:'星期一',py:'Xīngqīyī',letter:'B'},
  {img:'💻',label:'电脑',py:'diànnǎo',letter:'C'},
  {img:'🍳',label:'做饭',py:'zuò fàn',letter:'D'},
  {img:'😴',label:'休息',py:'xiūxi',letter:'E'},
  {img:'🥟',label:'饺子',py:'jiǎozi',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 5: Ngữ âm + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-5/wb-yuyin.mp3',
      blocks: [
        { type: 'table', caption: 'Biến điệu của "不" (bù)',
          rows: [
            ['不 (bù) + shì (是)', '→  bú + shì (不是)'],
            ['不 (bù) + huì (会)', '→  bú + huì (不会)'],
            ['不 (bù) + dà (大)', '→  bú + dà (不大)'],
            ['不 (bù) + duì (对)', '→  bú + duì (不对)']
          ],
          note: '"不 (bù)" khi đứng một mình hoặc đứng trước âm tiết thanh 1, 2, 3 thì không đổi thanh. Khi đứng trước âm tiết thanh 4 thì đọc thành thanh 2: 不 (bù) + thanh 4 → 不 (bú) + thanh 4.' },
        { type: 'table', caption: 'Biến điệu của "一" (yī) — trường hợp (1): trước thanh 1/2/3, đọc thành thanh 4',
          rows: [
            ['yī (一) + xiē (些)', '→  yì + xiē (一些)'],
            ['yī (一) + nián (年)', '→  yì + nián (一年)'],
            ['yī (一) + kǒu (口)', '→  yì + kǒu (一口)']
          ] },
        { type: 'table', caption: 'Biến điệu của "一" (yī) — trường hợp (2): trước thanh 4, đọc thành thanh 2',
          rows: [
            ['yī (一) + gè (个)', '→  yí + gè (一个)'],
            ['yī (一) + rì (日)', '→  yí + rì (一日)'],
            ['yī (一) + suì (岁)', '→  yí + suì (一岁)']
          ],
          note: '"一 (yī)" khi đứng một mình hoặc biểu thị số thứ tự thì không đổi thanh. Có 2 trường hợp cần biến điệu: trước thanh 1/2/3 đọc thành thanh 4; trước thanh 4 đọc thành thanh 2.' }
      ]
    },
    {
      title: 'Nghe và đọc luyện tập',
      audio: '/audio/hsk1v3-bai-5/wb-tingdu.mp3',
      blocks: [
        { type: 'tonemc', caption: 'Nghe và chọn âm tiết nghe được, đọc to',
          items: [
            {before:'', after:'', answer:'gē', options:['gē','kē']},
            {before:'', after:'', answer:'qiǎng', options:['jiǎng','qiǎng']},
            {before:'', after:'', answer:'sóng', options:['cóng','sóng']},
            {before:'', after:'', answer:'nìng', options:['nìng','lìng']},
            {before:'', after:'', answer:'jiā', options:['jiā','xiā']},
            {before:'', after:'', answer:'cuàn', options:['zuàn','cuàn']},
            {before:'', after:'', answer:'tōu', options:['tōu','gōu']},
            {before:'', after:'', answer:'shí', options:['zhí','shí']}
          ] },
        { type: 'wordlist', caption: 'Nghe và đọc theo, chú ý biến điệu của "不"',
          items: ['búyào', 'bú kèqi', 'bù hē', 'bù lái', 'bù lěng', 'bù zhīdào', 'bù xuéxí', 'bù hǎotīng'] },
        { type: 'wordlist', caption: 'Nghe và đọc theo, chú ý biến điệu của "一"',
          items: ['yìtiān', 'yì yuán', 'yìdiǎnr', 'yíbàn', 'yì chē', 'yì rén', 'yì wǎn', 'yíxià'] }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-5/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q1c.jpg'}
            ], answer: 'C' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q2c.jpg'}
            ], answer: 'A' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q3c.jpg'}
            ], answer: 'B' },
            { n: 4, options: [
              {key:'A', text:'我不会', py:'wǒ bú huì'},
              {key:'B', text:'我吃饺子', py:'wǒ chī jiǎozi'},
              {key:'C', text:'做面条儿', py:'zuò miàntiáor'}
            ], answer: 'A' },
            { n: 5, options: [
              {key:'A', text:'休息', py:'xiūxi'},
              {key:'B', text:'星期四', py:'Xīngqīsì'},
              {key:'C', text:'五口人', py:'wǔ kǒu rén'}
            ], answer: 'B' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-5-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-5-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-5-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 9, options: [
              {key:'A', text:'菜', py:'cài'},
              {key:'B', text:'饺子', py:'jiǎozi'},
              {key:'C', text:'面条儿', py:'miàntiáor'}
            ], answer: 'B' },
            { n: 10, options: [
              {key:'A', text:'4号', py:'sì hào'},
              {key:'B', text:'10号', py:'shí hào'},
              {key:'C', text:'14号', py:'shísì hào'}
            ], answer: 'B' }
          ],
          reading: [
            { n: 11, prompt: '王老师，再见。', promptPy: 'Wáng lǎoshī, zàijiàn.', options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-5-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 12, prompt: '今天我休息。', promptPy: 'Jīntiān wǒ xiūxi.', options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-5-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 13, prompt: '我有一个儿子，他今年7岁。', promptPy: 'Wǒ yǒu yí gè érzi, tā jīnnián 7 suì.', options: [
              {key:'A', img:'/images/hsk1v3-bai-5-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-5-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-5-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-5-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 14, prompt: '你去超市买什么？', promptPy: 'Nǐ qù chāoshì mǎi shénme?', options: [
              {key:'A', text:'好的，谢谢！', py:'Hǎo de, xièxie!'},
              {key:'B', text:'我不会。', py:'Wǒ bú huì.'},
              {key:'C', text:'面条儿。', py:'Miàntiáor.'},
              {key:'D', text:'5月6号。', py:'Wǔ yuè liù hào.'}
            ], answer: 'C' },
            { n: 15, prompt: '你会做饭吗？', promptPy: 'Nǐ huì zuò fàn ma?', options: [
              {key:'A', text:'好的，谢谢！', py:'Hǎo de, xièxie!'},
              {key:'B', text:'我不会。', py:'Wǒ bú huì.'},
              {key:'C', text:'面条儿。', py:'Miàntiáor.'},
              {key:'D', text:'5月6号。', py:'Wǔ yuè liù hào.'}
            ], answer: 'B' },
            { n: 16, prompt: '今天几号？', promptPy: 'Jīntiān jǐ hào?', options: [
              {key:'A', text:'好的，谢谢！', py:'Hǎo de, xièxie!'},
              {key:'B', text:'我不会。', py:'Wǒ bú huì.'},
              {key:'C', text:'面条儿。', py:'Miàntiáor.'},
              {key:'D', text:'5月6号。', py:'Wǔ yuè liù hào.'}
            ], answer: 'D' },
            { n: 17, prompt: '今天（　）号？', promptPy: 'Jīntiān ( ) hào?', options: [
              {key:'A', text:'几', py:'jǐ'},
              {key:'B', text:'好看', py:'hǎokàn'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 18, prompt: '男：你的新电脑真（　）！\n女：谢谢，我也很喜欢。', promptPy: 'Nǐ de xīn diànnǎo zhēn ( )! / Xièxie, wǒ yě hěn xǐhuan.', options: [
              {key:'A', text:'几', py:'jǐ'},
              {key:'B', text:'好看', py:'hǎokàn'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 19, prompt: '我非常喜欢我的中文名字。\n★说话人喜欢什么？', promptPy: 'Wǒ fēicháng xǐhuan wǒ de Zhōngwén míngzi.', options: [
              {key:'A', text:'新电脑', py:'xīn diànnǎo'},
              {key:'B', text:'中国菜', py:'Zhōngguó cài'},
              {key:'C', text:'中文名字', py:'Zhōngwén míngzi'}
            ], answer: 'C' },
            { n: 20, prompt: '今天8号，你几号休息？\n★说话人想知道什么？', promptPy: 'Jīntiān 8 hào, nǐ jǐ hào xiūxi?', options: [
              {key:'A', text:'今天几号', py:'jīntiān jǐ hào'},
              {key:'B', text:'哪天休息', py:'nǎ tiān xiūxi'},
              {key:'C', text:'星期几上班', py:'xīngqī jǐ shàngbān'}
            ], answer: 'B' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'刘明和王一雪聊天 · Hỏi ngày tháng',
   preQuiz:[
     {q:'今天几月几号？',opts:['9月8号','8月9号','9月18号'],ans:0},
     {q:'今天星期几？',opts:['星期一','星期日','星期六'],ans:1},
     {q:'今天男的要做什么？',opts:['休息','上班','做饭'],ans:0},
   ],
   lines:[
     {sp:1,zh:'今天几号？',py:'Jīntiān jǐ hào?',vn:'Hôm nay ngày mấy anh nhỉ?'},
     {sp:0,zh:'今天9月8号。',py:'Jīntiān jiǔ yuè bā hào.',vn:'Hôm nay là ngày 8 tháng 9.'},
     {sp:1,zh:'星期几？',py:'Xīngqī jǐ?',vn:'Thứ mấy vậy?'},
     {sp:0,zh:'星期日。今天我休息。',py:'Xīngqīrì. Jīntiān wǒ xiūxi.',vn:'Chủ nhật. Hôm nay anh được nghỉ.'},
   ]},
  {scene:'王一雪和杨同乐聊天 · Hỏi chuyện nấu ăn',
   preQuiz:[
     {q:'杨同乐会做饭吗？',opts:['会','不会','不知道'],ans:0},
     {q:'杨同乐会做什么菜？',opts:['面条儿、饺子','米饭、汤','水果沙拉'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你会做饭吗？',py:'Nǐ huì zuò fàn ma?',vn:'Em có biết nấu ăn không?'},
     {sp:1,zh:'我会做。',py:'Wǒ huì zuò.',vn:'Em biết.'},
     {sp:0,zh:'你会做什么？',py:'Nǐ huì zuò shénme?',vn:'Em biết nấu món gì?'},
     {sp:1,zh:'我会做面条儿、饺子，也会做一些菜。星期天我也做饭。',py:'Wǒ huì zuò miàntiáor, jiǎozi, yě huì zuò yìxiē cài. Xīngqītiān wǒ yě zuò fàn.',vn:'Em biết nấu mì, sủi cảo và biết chế biến một số món ăn khác. Chủ nhật em cũng nấu ăn.'},
   ]},
  {scene:'王一雪和杨同乐下班聊天 · Khen máy tính mới',
   preQuiz:[
     {q:'这台新电脑是谁的？',opts:['杨同乐的','王一雪的','别人的'],ans:0},
     {q:'王一雪觉得这台电脑怎么样？',opts:['真好看','不好看','太贵了'],ans:0},
   ],
   lines:[
     {sp:0,zh:'同乐，下班吗？',py:'Tónglè, xiàbān ma?',vn:'Đồng Lạc, em tan làm chưa?'},
     {sp:1,zh:'下班。',py:'Xiàbān.',vn:'Em tan làm rồi.'},
     {sp:0,zh:'这是你的新电脑吗？',py:'Zhè shì nǐ de xīn diànnǎo ma?',vn:'Đây là máy tính mới của em à?'},
     {sp:1,zh:'是的，是我的新电脑。',py:'Shì de, shì wǒ de xīn diànnǎo.',vn:'Đúng vậy, đây là máy tính mới của em.'},
     {sp:0,zh:'真好看！',py:'Zhēn hǎokàn!',vn:'Đẹp thật đấy!'},
     {sp:1,zh:'我也很喜欢它。',py:'Wǒ yě hěn xǐhuan tā.',vn:'Em cũng rất thích nó.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'星', right:'期'},
  {left:'休', right:'息'},
  {left:'做', right:'饭'},
  {left:'面', right:'条儿'},
  {left:'下', right:'班'},
  {left:'喜', right:'欢'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ audio + tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ (dựa theo bài tập tổng hợp thật trong sách)
// ══════════════════════════════════════════
var fillData = [
  {pre:'今天', blank:'6月22号', post:'。', hint:'(ngày tháng)', ans:'6月22号'},
  {pre:'杨同乐有一个', blank:'新', post:'电脑。', hint:'(mới)', ans:'新'},
  {pre:'王一雪：你会做这两个', blank:'菜', post:'吗？', hint:'(món ăn)', ans:'菜'},
  {pre:'你的电脑', blank:'真', post:'好看！', hint:'(thật, thực sự)', ans:'真'},
  {pre:'我也很', blank:'喜欢', post:'。', hint:'(thích)', ans:'喜欢'},
  {pre:'今天几号？今天9月8', blank:'号', post:'。', hint:'(mùng — lượng từ ngày)', ans:'号'},
  {pre:'你', blank:'会', post:'做饭吗？', hint:'(biết, có thể)', ans:'会'},
  {pre:'我会做面条儿、', blank:'饺子', post:'。', hint:'(sủi cảo)', ans:'饺子'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['今天','几','号','？'], ans:'今天几号？', audio:'今天几号？'},
  {words:['今天','我','休息','。'], ans:'今天我休息。', audio:'今天我休息。'},
  {words:['你','会','做饭','吗','？'], ans:'你会做饭吗？', audio:'你会做饭吗？'},
  {words:['我','会','做','面条儿','。'], ans:'我会做面条儿。', audio:'我会做面条儿。'},
  {words:['这','是','你','的','新','电脑','吗','？'], ans:'这是你的新电脑吗？', audio:'这是你的新电脑吗？'},
  {words:['我','也','很','喜欢','它','。'], ans:'我也很喜欢它。', audio:'我也很喜欢它。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'Trật tự diễn đạt ngày tháng trong tiếng Trung là gì?', opts:['Năm→Tháng→Ngày→Thứ', 'Thứ→Ngày→Tháng→Năm', 'Ngày→Tháng→Năm→Thứ', 'Không có trật tự cố định'], ans:0},
  {q:'"今天9月8号" là loại câu gì?', opts:['Câu vị ngữ danh từ (không cần 是)', 'Câu chữ 是 bắt buộc', 'Câu nghi vấn', 'Câu mệnh lệnh'], ans:0},
  {q:'"会" dùng để diễn đạt điều gì?', opts:['Biết/có khả năng làm gì đó nhờ học tập', 'Sự sở hữu', 'Sự tồn tại', 'Sự phủ định'], ans:0},
  {q:'"你会做饭吗？" — "会" ở đây có thể được thay bằng cách phủ định nào?', opts:['不会', '没会', '不是会', '没有会'], ans:0},
  {q:'"星期日" và "星期天" có nghĩa gì?', opts:['Cả hai đều là Chủ nhật', 'Thứ 7 và Chủ nhật', 'Khác nghĩa hoàn toàn', 'Thứ 2 và Chủ nhật'], ans:0},
  {q:'"面条儿" và "饺子" đều là gì?', opts:['Món ăn (mì và sủi cảo)', 'Ngày trong tuần', 'Đồ vật', 'Số đếm'], ans:0},
  {q:'"这是你的新电脑吗？" — từ nào là định ngữ chỉ tính chất "mới"?', opts:['新', '电脑', '你的', '这'], ans:0},
  {q:'Số "2" đọc là "两" khi nào?', opts:['Khi đứng trước lượng từ', 'Khi làm số thứ tự', 'Luôn luôn đọc là 两', 'Không bao giờ dùng 两'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："今天几号？星期几？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Hôm nay ngày mấy? Thứ mấy?" Bạn trả lời thế nào?',
     hint: '今天……月……号，星期……。', sample: '今天9月8号，星期日。', sample_vn: 'Hôm nay là ngày 8 tháng 9, Chủ nhật.',
     note: 'Câu vị ngữ danh từ dùng để nói ngày tháng: Chủ ngữ + (thời gian) không cần động từ 是.'},
    {q_zh: '朋友问你："你会做饭吗？" 你怎么回答？', q_vn: 'Bạn của bạn hỏi: "Bạn có biết nấu ăn không?" Bạn trả lời thế nào?',
     hint: '我会/不会做……。', sample: '我会做面条儿，不会做饺子。', sample_vn: 'Tôi biết nấu mì, không biết làm sủi cảo.',
     note: '会 + động từ diễn đạt khả năng làm việc gì đó nhờ học tập.'},
    {q_zh: '朋友有一样新东西，你想夸奖一下，你会怎么说？', q_vn: 'Bạn của bạn có một món đồ mới, bạn muốn khen, bạn sẽ nói gì?',
     hint: '真好看！我也很喜欢它。', sample: '真好看！我也很喜欢它。', sample_vn: 'Đẹp thật đấy! Tôi cũng rất thích nó.',
     note: '真 + tính từ dùng để nhấn mạnh cảm xúc thật sự.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Hôm nay ngày mấy? — Hôm nay là ngày 8 tháng 9, Chủ nhật.', zh:'今天几号？——今天9月8号，星期日。', py:'Jīntiān jǐ hào? — Jīntiān jiǔ yuè bā hào, Xīngqīrì.'},
  {vi:'Bạn có biết nấu ăn không? — Tôi biết, tôi biết nấu mì và sủi cảo.', zh:'你会做饭吗？——我会，我会做面条儿和饺子。', py:'Nǐ huì zuò fàn ma? — Wǒ huì, wǒ huì zuò miàntiáor hé jiǎozi.'},
  {vi:'Đây là máy tính mới của bạn à? — Đúng vậy, tôi rất thích nó.', zh:'这是你的新电脑吗？——是的，我很喜欢它。', py:'Zhè shì nǐ de xīn diànnǎo ma? — Shì de, wǒ hěn xǐhuan tā.'},
  {vi:'Hôm nay Chủ nhật, tôi được nghỉ, tôi cũng nấu ăn.', zh:'今天星期日，我休息，我也做饭。', py:'Jīntiān Xīngqīrì, wǒ xiūxi, wǒ yě zuò fàn.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Ngày mai là thứ mấy? — Ngày mai là thứ Hai, tôi phải đi làm.', zh:'明天星期几？——明天星期一，我要上班。', py:'Míngtiān xīngqī jǐ? — Míngtiān Xīngqīyī, wǒ yào shàngbān.'},
  {vi:'Tôi không biết nấu ăn, nhưng tôi rất thích ăn sủi cảo.', zh:'我不会做饭，但是我很喜欢吃饺子。', py:'Wǒ bú huì zuò fàn, dànshì wǒ hěn xǐhuan chī jiǎozi.'},
  {vi:'Máy tính mới của tôi thật đẹp, tôi rất thích nó.', zh:'我的新电脑真好看，我很喜欢它。', py:'Wǒ de xīn diànnǎo zhēn hǎokàn, wǒ hěn xǐhuan tā.'},
  {vi:'Hôm nay tôi tan làm rồi, ngày mai tôi được nghỉ.', zh:'今天我下班了，明天我休息。', py:'Jīntiān wǒ xiàbān le, míngtiān wǒ xiūxi.'},
];
