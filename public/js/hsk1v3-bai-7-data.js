// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 7: 我晚上六点半下班
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'现在',py:'xiànzài',pos:'Đại từ',vn:'bây giờ, hiện tại',em:'⏰',lesson:1,
   ex_zh:'现在几点？',ex_py:'Xiànzài jǐ diǎn?',ex_vn:'Bây giờ mấy giờ rồi?',
   exList:[{zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ mấy giờ rồi?'}],
   hanzi:[
     {c:'现',p:'xiàn',type:'左右结构 · Trái-phải',st:8,ord:'王(vương) trái → 见(kiến) phải',rad:'王 (vương – ngọc, biến thể của 玉)',mean:'hiện, bây giờ; xuất hiện',
      tip:'王(viên ngọc quý) + 见(nhìn thấy) → khi ngọc quý XUẤT HIỆN, ta nhìn thấy nó ngay lập tức → nghĩa HIỆN, ngay bây giờ.',
      cf:'规 (guī – "quy tắc, quy định", cũng chứa 见 bên phải, dễ nhầm)',w:'现在 / 出现 / 现金'},
     {c:'在',p:'zài',type:'半包围结构 · Bán bao vây',st:6,ord:'一/ナ(mái che) bao trên-trái → 土(thổ) bên trong-phải',rad:'土 (thổ – đất)',mean:'ở, tại; đang (diễn ra)',
      tip:'Phần bao ngoài như mái che nghiêng, bên trong là chữ 土(ĐẤT) → một vật đang ở trên mặt ĐẤT, tức đang tồn TẠI, ở một nơi nào đó.',
      cf:'存 (cún – "tồn tại, lưu trữ", nghĩa gần giống nhưng cấu trúc khác)',w:'现在 / 在家 / 在哪儿'},
   ]},
  {n:2,zh:'点',py:'diǎn',pos:'Lượng từ',vn:'giờ',em:'🕐',lesson:1,
   ex_zh:'早上八点四十。',ex_py:'Zǎoshang bā diǎn sìshí.',ex_vn:'8 giờ 40 sáng.',
   exList:[{zh:'早上八点四十。',py:'Zǎoshang bā diǎn sìshí.',vn:'8 giờ 40 sáng.'}],
   hanzi:[
     {c:'点',p:'diǎn',type:'上下结构 · Trên-dưới',st:9,ord:'占(chiếm) trên → 灬(hoả) dưới',rad:'灬 (hoả – lửa, biến thể của 火)',mean:'giờ (đồng hồ); điểm, chấm; một chút',
      tip:'占(chiếm giữ một vị trí) + 灬(bốn đốm lửa nhỏ) → như những đốm lửa nhỏ CHIẾM lấy từng ĐIỂM trên mặt đồng hồ để chỉ giờ.',
      cf:'店 (diàn – "cửa hàng", cũng có 占 nhưng bộ 广)',w:'点 / 几点 / 一点'},
   ]},
  {n:3,zh:'早上',py:'zǎoshang',pos:'Đại từ',vn:'buổi sáng, sáng sớm',em:'🌅',lesson:1,
   ex_zh:'早上八点四十。',ex_py:'Zǎoshang bā diǎn sìshí.',ex_vn:'8 giờ 40 sáng.',
   exList:[{zh:'早上八点四十。',py:'Zǎoshang bā diǎn sìshí.',vn:'8 giờ 40 sáng.'}],
   hanzi:[
     {c:'早',p:'zǎo',type:'上下结构 · Trên-dưới',st:6,ord:'日(nhật) trên → 十(thập) dưới',rad:'日 (nhật – mặt trời)',mean:'sớm',
      tip:'Mặt trời 日 mọc lên trên đỉnh chữ 十 (tượng trưng ngọn cây/cột mốc) → mặt trời vừa nhô lên là lúc trời còn SỚM.',
      cf:'旱 (hàn – "hạn hán", rất giống 早 nhưng nét dưới 日 dài hơn)',w:'早上 / 早饭 / 早安'},
     {c:'上',p:'shang',type:'独体字 · Chữ đơn',st:3,ord:'丨(sổ)+一(ngắn) phía trên → 一(ngang dài) đáy',rad:'上 (thượng – tự thành bộ)',mean:'trên; lên',
      tip:'Một vạch ngang dài tượng trưng mặt đất, với một nét vươn LÊN phía TRÊN nó → chỉ vị trí TRÊN, hướng đi LÊN.',
      cf:'下 (xià – "dưới", ngược nghĩa, hình dạng gần như đối xứng)',w:'早上 / 上午 / 上课'},
   ]},
  {n:4,zh:'上午',py:'shàngwǔ',pos:'Đại từ',vn:'buổi sáng',em:'🌤️',lesson:1,
   ex_zh:'我上午十点十分有课。',ex_py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',ex_vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.',
   exList:[{zh:'我上午十点十分有课。',py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.'}],
   hanzi:[
     {c:'上',p:'shàng',type:'独体字 · Chữ đơn',st:3,ord:'丨(sổ)+一(ngắn) phía trên → 一(ngang dài) đáy',rad:'上 (thượng – tự thành bộ)',mean:'trên; lên',
      tip:'Một vạch ngang dài tượng trưng mặt đất, với một nét vươn LÊN phía TRÊN nó → chỉ vị trí TRÊN, hướng đi LÊN.',
      cf:'下 (xià – "dưới", ngược nghĩa, hình dạng gần như đối xứng)',w:'上午 / 上课 / 上班'},
     {c:'午',p:'wǔ',type:'独体字 · Chữ đơn',st:4,ord:'丿(phẩy) → 一(ngang) → 十(thập, giao nét ở giữa)',rad:'十 (thập – số mười)',mean:'buổi trưa; (chi Ngọ)',
      tip:'Hình dáng như một cây gậy đứng thẳng khi mặt trời ở đỉnh đầu, bóng gậy ngắn nhất → chỉ giờ NGỌ, giữa buổi TRƯA.',
      cf:'牛 (niú – "con bò", rất giống 午 nhưng có thêm nét phẩy nhô lên phía trên-trái)',w:'上午 / 下午 / 中午'},
   ]},
  {n:5,zh:'分',py:'fēn',pos:'Lượng từ',vn:'phút',em:'⏱️',lesson:1,
   ex_zh:'我上午十点十分有课。',ex_py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',ex_vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.',
   exList:[{zh:'我上午十点十分有课。',py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.'}],
   hanzi:[
     {c:'分',p:'fēn',type:'上下结构 · Trên-dưới',st:4,ord:'八(bát) trên → 刀(đao) dưới',rad:'刀 (đao – dao)',mean:'phút; chia, phân chia',
      tip:'八(tách ra hai bên) + 刀(con dao) → dùng DAO CHIA tách một vật ra làm đôi → nghĩa CHIA, PHÂN, cũng dùng để chỉ đơn vị PHÚT nhỏ trong giờ.',
      cf:'今 (jīn – "hôm nay", nét trên gần giống 八 nhưng phần dưới khác hẳn)',w:'分钟 / 一分 / 十分'},
   ]},
  {n:6,zh:'课',py:'kè',pos:'Danh từ',vn:'tiết học, giờ học',em:'📖',lesson:1,
   ex_zh:'我上午十点十分有课。',ex_py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',ex_vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.',
   exList:[{zh:'我上午十点十分有课。',py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.'}],
   hanzi:[
     {c:'课',p:'kè',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 果(quả) phải',rad:'讠 (ngôn – lời nói, biến thể của 言)',mean:'tiết học, bài học, môn học',
      tip:'讠(lời nói, giảng dạy) + 果(quả, kết quả) → dùng LỜI NÓI giảng dạy để đạt được KẾT QUẢ học tập, đó là một TIẾT HỌC.',
      cf:'果 (guǒ – "quả, trái cây", là thành phần bên phải của 课 nhưng đứng riêng có nghĩa khác)',w:'上课 / 下课 / 课本'},
   ]},
  {n:7,zh:'下午',py:'xiàwǔ',pos:'Danh từ',vn:'buổi chiều',em:'🌇',lesson:1,
   ex_zh:'我们下午两点见吧。',ex_py:'Wǒmen xiàwǔ liǎng diǎn jiàn ba.',ex_vn:'Chúng ta hẹn gặp lúc 2 giờ chiều nhé.',
   exList:[
     {zh:'我们下午两点见吧。',py:'Wǒmen xiàwǔ liǎng diǎn jiàn ba.',vn:'Chúng ta hẹn gặp lúc 2 giờ chiều nhé.'},
     {zh:'下午我想去电影院看电影。',py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',vn:'Chiều nay mình muốn đi rạp xem phim.'},
   ],
   hanzi:[
     {c:'下',p:'xià',type:'独体字 · Chữ đơn',st:3,ord:'一(ngang, mặt đất) trên → 卜(chấm+sổ) dưới',rad:'下 (hạ – tự thành bộ)',mean:'dưới; xuống',
      tip:'Nét ngang tượng trưng mặt đất, với một dấu chấm/nét nhỏ nằm PHÍA DƯỚI nó → chỉ vị trí DƯỚI, hướng đi XUỐNG.',
      cf:'上 (shàng – "trên", ngược nghĩa, hình dạng gần như đối xứng)',w:'下午 / 下课 / 下班'},
     {c:'午',p:'wǔ',type:'独体字 · Chữ đơn',st:4,ord:'丿(phẩy) → 一(ngang) → 十(thập, giao nét ở giữa)',rad:'十 (thập – số mười)',mean:'buổi trưa; (chi Ngọ)',
      tip:'Hình dáng như một cây gậy đứng thẳng khi mặt trời ở đỉnh đầu, bóng gậy ngắn nhất → chỉ giờ NGỌ, giữa buổi TRƯA.',
      cf:'牛 (niú – "con bò", rất giống 午 nhưng có thêm nét phẩy nhô lên phía trên-trái)',w:'上午 / 下午 / 中午'},
   ]},
  {n:8,zh:'见',py:'jiàn',pos:'Động từ',vn:'gặp, gặp mặt',em:'🤝',lesson:1,
   ex_zh:'我们下午两点见吧。',ex_py:'Wǒmen xiàwǔ liǎng diǎn jiàn ba.',ex_vn:'Chúng ta hẹn gặp lúc 2 giờ chiều nhé.',
   exList:[{zh:'我们下午两点见吧。',py:'Wǒmen xiàwǔ liǎng diǎn jiàn ba.',vn:'Chúng ta hẹn gặp lúc 2 giờ chiều nhé.'}],
   hanzi:[
     {c:'见',p:'jiàn',type:'独体字 · Chữ đơn',st:4,ord:'目(mục) trên → 儿(nhân) dưới',rad:'见 (kiến – nhìn thấy)',mean:'gặp, thấy',
      tip:'Hình chữ giống con mắt 目 trên đôi chân 儿 → dùng MẮT để trông thấy, GẶP ai đó.',
      cf:'贝 (bèi – "vỏ sò", gần giống về nét nhưng nghĩa khác hẳn)',w:'见面 / 再见'},
   ]},
  {n:9,zh:'吧',py:'ba',pos:'Trợ từ',vn:'nhé (dùng cuối câu để đề nghị, gợi ý)',em:'💬',lesson:1,
   ex_zh:'我们下午两点见吧。',ex_py:'Wǒmen xiàwǔ liǎng diǎn jiàn ba.',ex_vn:'Chúng ta hẹn gặp lúc 2 giờ chiều nhé.',
   exList:[{zh:'我们下午两点见吧。',py:'Wǒmen xiàwǔ liǎng diǎn jiàn ba.',vn:'Chúng ta hẹn gặp lúc 2 giờ chiều nhé.'}],
   hanzi:[
     {c:'吧',p:'ba',type:'左右结构 · Trái-phải',st:7,ord:'口(khẩu) trái → 巴(ba) phải',rad:'口 (khẩu – miệng)',mean:'trợ từ cuối câu biểu thị đề nghị, bàn bạc',
      tip:'口(miệng, lời nói) + 巴(âm gợi đọc "ba") → buông nhẹ tiếng "ba" từ MIỆNG ở cuối câu để ĐỀ NGHỊ, giống như đang thuyết phục nhẹ nhàng.',
      cf:'巴 (bā – "mong, bám", là thành phần bên phải của 吧 nhưng đứng riêng)',w:'好吧 / 走吧 / 是吧'},
   ]},
  {n:10,zh:'电影院',py:'diànyǐngyuàn',pos:'Danh từ',vn:'rạp chiếu phim',em:'🎬',lesson:2,
   ex_zh:'下午我想去电影院看电影。',ex_py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',ex_vn:'Chiều nay mình muốn đi rạp xem phim.',
   exList:[{zh:'下午我想去电影院看电影。',py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',vn:'Chiều nay mình muốn đi rạp xem phim.'}],
   hanzi:[
     {c:'电',p:'diàn',type:'独体字 · Chữ đơn',st:5,ord:'冂(khung) trên → 日-like giữa → 乙(nét gập) kéo dài dưới',rad:'电 (điện – tự thành bộ)',mean:'điện',
      tip:'Hình ảnh giống một tia CHỚP ngoằn ngoèo lóe lên giữa khung trời → tượng trưng cho ĐIỆN, ánh chớp mang năng lượng.',
      cf:'由 (yóu – "nguyên do, từ", rất giống 电 nhưng không có nét gập kéo dài ở dưới cùng)',w:'电影 / 电视 / 电话'},
     {c:'影',p:'yǐng',type:'左右结构 · Trái-phải',st:15,ord:'景(cảnh) trái → 彡(sam) phải',rad:'彡 (sam – lông, vệt sáng)',mean:'bóng, hình bóng; phim ảnh',
      tip:'景(phong cảnh, ánh sáng) + 彡(ba nét vệt tượng trưng ánh sáng) → ánh sáng chiếu lên CẢNH vật tạo ra BÓNG, HÌNH ẢNH — cũng là nghĩa gốc của "phim".',
      cf:'景 (jǐng – "phong cảnh", là thành phần bên trái của 影 nhưng đứng riêng)',w:'电影 / 电影院 / 影子'},
     {c:'院',p:'yuàn',type:'左右结构 · Trái-phải',st:9,ord:'阝(phụ) trái → 完(hoàn) phải',rad:'阝 (phụ – gò đất, mô đất)',mean:'viện, sân (khuôn viên có tường bao)',
      tip:'阝(gò đất, tường bao quanh) + 完(hoàn thành, đầy đủ) → một khu đất được bao kín, có ĐẦY ĐỦ công trình bên trong → tạo thành một VIỆN.',
      cf:'完 (wán – "hoàn thành, xong", là thành phần bên phải của 院 nhưng đứng riêng)',w:'电影院 / 医院 / 院子'},
   ]},
  {n:11,zh:'看',py:'kàn',pos:'Động từ',vn:'xem, nhìn, đọc',em:'👀',lesson:2,
   ex_zh:'下午我想去电影院看电影。',ex_py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',ex_vn:'Chiều nay mình muốn đi rạp xem phim.',
   exList:[{zh:'下午我想去电影院看电影。',py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',vn:'Chiều nay mình muốn đi rạp xem phim.'}],
   hanzi:[
     {c:'看',p:'kàn',type:'上下结构 · Trên-dưới',st:9,ord:'手(thủ, biến thể) trên → 目(mục) dưới',rad:'目 (mục – mắt)',mean:'xem, nhìn, đọc',
      tip:'Bàn TAY (手) đặt che phía trên con MẮT (目) như đang che nắng để NHÌN xa hơn, XEM rõ hơn.',
      cf:'着 (zhe/zháo – trợ từ, cũng có 目 ở dưới nhưng phần trên khác)',w:'看电影 / 看书 / 看见'},
   ]},
  {n:12,zh:'电影',py:'diànyǐng',pos:'Danh từ',vn:'phim, điện ảnh',em:'🎞️',lesson:2,
   ex_zh:'下午我想去电影院看电影。',ex_py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',ex_vn:'Chiều nay mình muốn đi rạp xem phim.',
   exList:[{zh:'下午我想去电影院看电影。',py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.',vn:'Chiều nay mình muốn đi rạp xem phim.'}],
   hanzi:[
     {c:'电',p:'diàn',type:'独体字 · Chữ đơn',st:5,ord:'冂(khung) trên → 日-like giữa → 乙(nét gập) kéo dài dưới',rad:'电 (điện – tự thành bộ)',mean:'điện',
      tip:'Hình ảnh giống một tia CHỚP ngoằn ngoèo lóe lên giữa khung trời → tượng trưng cho ĐIỆN, ánh chớp mang năng lượng.',
      cf:'由 (yóu – "nguyên do, từ", rất giống 电 nhưng không có nét gập kéo dài ở dưới cùng)',w:'电影 / 电视 / 电话'},
     {c:'影',p:'yǐng',type:'左右结构 · Trái-phải',st:15,ord:'景(cảnh) trái → 彡(sam) phải',rad:'彡 (sam – lông, vệt sáng)',mean:'bóng, hình bóng; phim ảnh',
      tip:'景(phong cảnh, ánh sáng) + 彡(ba nét vệt tượng trưng ánh sáng) → ánh sáng chiếu lên CẢNH vật tạo ra BÓNG, HÌNH ẢNH — cũng là nghĩa gốc của "phim".',
      cf:'景 (jǐng – "phong cảnh", là thành phần bên trái của 影 nhưng đứng riêng)',w:'电影 / 电影院 / 影子'},
   ]},
  {n:13,zh:'事',py:'shì',pos:'Danh từ',vn:'việc, sự việc',em:'📋',lesson:2,
   ex_zh:'我不想去，下午还有事。',ex_py:'Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.',ex_vn:'Mình không muốn đi, chiều nay còn có việc.',
   exList:[{zh:'我不想去，下午还有事。',py:'Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.',vn:'Mình không muốn đi, chiều nay còn có việc.'}],
   hanzi:[
     {c:'事',p:'shì',type:'独体字 · Chữ đơn',st:8,ord:'一(ngang) trên → 口(khẩu) → 丨(sổ dài xuyên) → 亅(móc) dưới',rad:'事 (sự – tự thành bộ)',mean:'việc, sự việc, công việc',
      tip:'Hình ảnh như một bàn tay cầm bút ghi chép, nét sổ dài xuyên suốt tượng trưng dòng chữ ghi lại từng SỰ VIỆC, công VIỆC hằng ngày.',
      cf:'争 (zhēng – "tranh giành", hình dáng tổng thể khá giống 事 nhưng không có 口 ở giữa)',w:'事情 / 有事 / 没事'},
   ]},
  {n:14,zh:'上课',py:'shàngkè',pos:'Động từ',vn:'lên lớp, đi học',em:'🏫',lesson:2,
   ex_zh:'我明天下午两点还上课呢。',ex_py:'Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne.',ex_vn:'Chiều mai mình vẫn còn tiết học lúc 2 giờ.',
   exList:[{zh:'我明天下午两点还上课呢。',py:'Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne.',vn:'Chiều mai mình vẫn còn tiết học lúc 2 giờ.'}],
   hanzi:[
     {c:'上',p:'shàng',type:'独体字 · Chữ đơn',st:3,ord:'丨(sổ)+一(ngắn) phía trên → 一(ngang dài) đáy',rad:'上 (thượng – tự thành bộ)',mean:'trên; lên',
      tip:'Một vạch ngang dài tượng trưng mặt đất, với một nét vươn LÊN phía TRÊN nó → chỉ vị trí TRÊN, hướng đi LÊN.',
      cf:'下 (xià – "dưới", ngược nghĩa, hình dạng gần như đối xứng)',w:'上课 / 上午 / 上班'},
     {c:'课',p:'kè',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 果(quả) phải',rad:'讠 (ngôn – lời nói, biến thể của 言)',mean:'tiết học, bài học, môn học',
      tip:'讠(lời nói, giảng dạy) + 果(quả, kết quả) → dùng LỜI NÓI giảng dạy để đạt được KẾT QUẢ học tập, đó là một TIẾT HỌC.',
      cf:'果 (guǒ – "quả, trái cây", là thành phần bên phải của 课 nhưng đứng riêng có nghĩa khác)',w:'上课 / 下课 / 课本'},
   ]},
  {n:15,zh:'呢',py:'ne',pos:'Trợ từ',vn:'(đặt cuối câu, nhấn mạnh/duy trì ngữ khí trần thuật hoặc câu hỏi)',em:'❕',lesson:2,
   ex_zh:'我明天下午两点还上课呢。',ex_py:'Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne.',ex_vn:'Chiều mai mình vẫn còn tiết học lúc 2 giờ.',
   exList:[{zh:'我明天下午两点还上课呢。',py:'Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne.',vn:'Chiều mai mình vẫn còn tiết học lúc 2 giờ.'}],
   hanzi:[
     {c:'呢',p:'ne',type:'左右结构 · Trái-phải',st:8,ord:'口(khẩu) trái → 尼(ni) phải',rad:'口 (khẩu – miệng)',mean:'trợ từ cuối câu (hỏi, duy trì ngữ khí)',
      tip:'口(miệng, phát ra âm) + 尼(âm gợi đọc "ni/ne") → tiếng "ne" buông nhẹ từ MIỆNG ở cuối câu để hỏi hoặc nhấn mạnh.',
      cf:'尼 (ní – âm trong "尼龙 ni lông", là thành phần bên phải của 呢 nhưng đứng riêng)',w:'你呢 / 好呢 / 干什么呢'},
   ]},
  {n:16,zh:'半',py:'bàn',pos:'Số từ',vn:'một nửa, rưỡi',em:'🕧',lesson:2,
   ex_zh:'四点半下课。',ex_py:'Sì diǎn bàn xiàkè.',ex_vn:'4 giờ rưỡi tan học.',
   exList:[
     {zh:'四点半下课。',py:'Sì diǎn bàn xiàkè.',vn:'4 giờ rưỡi tan học.'},
     {zh:'我晚上六点半下班。',py:'Wǒ wǎnshang liù diǎn bàn xiàbān.',vn:'Tối nay mình 6 giờ rưỡi tan làm.'},
   ],
   hanzi:[
     {c:'半',p:'bàn',type:'独体字 · Chữ đơn',st:5,ord:'丷(bát) trên → 十(thập) → 一(ngang) kéo dài chia đôi',rad:'十 (thập – số mười)',mean:'một nửa, rưỡi',
      tip:'Chữ 八 (chia làm hai) phía trên trùm lên chữ 十 (số mười) bị chia đôi bởi một nét ngang → hình ảnh một vật được chia làm hai phần bằng nhau, tức MỘT NỬA.',
      cf:'平 (píng – "bằng phẳng, hòa bình", hình dáng gần giống 半 nhưng không có nét xuyên chia đôi)',w:'一半 / 点半 / 半年'},
   ]},
  {n:17,zh:'下课',py:'xiàkè',pos:'Động từ',vn:'tan học',em:'🔔',lesson:2,
   ex_zh:'四点半下课。',ex_py:'Sì diǎn bàn xiàkè.',ex_vn:'4 giờ rưỡi tan học.',
   exList:[{zh:'四点半下课。',py:'Sì diǎn bàn xiàkè.',vn:'4 giờ rưỡi tan học.'}],
   hanzi:[
     {c:'下',p:'xià',type:'独体字 · Chữ đơn',st:3,ord:'一(ngang, mặt đất) trên → 卜(chấm+sổ) dưới',rad:'下 (hạ – tự thành bộ)',mean:'dưới; xuống',
      tip:'Nét ngang tượng trưng mặt đất, với một dấu chấm/nét nhỏ nằm PHÍA DƯỚI nó → chỉ vị trí DƯỚI, hướng đi XUỐNG.',
      cf:'上 (shàng – "trên", ngược nghĩa, hình dạng gần như đối xứng)',w:'下课 / 下午 / 下班'},
     {c:'课',p:'kè',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 果(quả) phải',rad:'讠 (ngôn – lời nói, biến thể của 言)',mean:'tiết học, bài học, môn học',
      tip:'讠(lời nói, giảng dạy) + 果(quả, kết quả) → dùng LỜI NÓI giảng dạy để đạt được KẾT QUẢ học tập, đó là một TIẾT HỌC.',
      cf:'果 (guǒ – "quả, trái cây", là thành phần bên phải của 课 nhưng đứng riêng có nghĩa khác)',w:'下课 / 上课 / 课本'},
   ]},
  {n:18,zh:'在',py:'zài',pos:'Động từ',vn:'ở, tại',em:'📍',lesson:3,
   ex_zh:'我在家里呢。',ex_py:'Wǒ zài jiā li ne.',ex_vn:'Mình đang ở nhà.',
   exList:[{zh:'我在家里呢。',py:'Wǒ zài jiā li ne.',vn:'Mình đang ở nhà.'}],
   hanzi:[
     {c:'在',p:'zài',type:'半包围结构 · Bán bao vây',st:6,ord:'一/ナ(mái che) bao trên-trái → 土(thổ) bên trong-phải',rad:'土 (thổ – đất)',mean:'ở, tại; đang (diễn ra)',
      tip:'Phần bao ngoài như mái che nghiêng, bên trong là chữ 土(ĐẤT) → một vật đang ở trên mặt ĐẤT, tức đang tồn TẠI, ở một nơi nào đó.',
      cf:'存 (cún – "tồn tại, lưu trữ", nghĩa gần giống nhưng cấu trúc khác)',w:'在家 / 现在 / 在哪儿'},
   ]},
  {n:19,zh:'家',py:'jiā',pos:'Danh từ',vn:'nhà',em:'🏠',lesson:3,
   ex_zh:'我在家里呢。',ex_py:'Wǒ zài jiā li ne.',ex_vn:'Mình đang ở nhà.',
   exList:[{zh:'我在家里呢。',py:'Wǒ zài jiā li ne.',vn:'Mình đang ở nhà.'}],
   hanzi:[
     {c:'家',p:'jiā',type:'上下结构 · Trên-dưới',st:10,ord:'宀(miên) trên → 豕(thỉ) dưới',rad:'宀 (miên – mái nhà)',mean:'nhà',
      tip:'宀(mái nhà) + 豕(con lợn) → thời xưa nuôi lợn dưới mái nhà, tượng trưng cho một GIA ĐÌNH, một NHÀ.',
      cf:'豪 (háo – "hào phóng", cũng có 豕")',w:'我家 / 在家'},
   ]},
  {n:20,zh:'里',py:'li/lǐ',pos:'Danh từ',vn:'trong, bên trong',em:'📦',lesson:3,
   ex_zh:'我在家里呢。',ex_py:'Wǒ zài jiā li ne.',ex_vn:'Mình đang ở nhà.',
   exList:[{zh:'我在家里呢。',py:'Wǒ zài jiā li ne.',vn:'Mình đang ở nhà.'}],
   hanzi:[
     {c:'里',p:'lǐ',type:'上下结构 · Trên-dưới',st:7,ord:'田(điền) trên → 土(thổ) dưới',rad:'里 (lý – tự thành bộ)',mean:'trong, bên trong; dặm (đơn vị đo)',
      tip:'Hình ảnh một thửa RUỘNG (田) nằm trên nền ĐẤT (土) trong một xóm làng → biểu thị không gian BÊN TRONG một khu vực, một làng quê.',
      cf:'厘 (lí – "đơn vị đo lường nhỏ", chứa 里 bên trong nhưng thêm bộ 厂 phía ngoài)',w:'家里 / 哪里 / 这里'},
   ]},
  {n:21,zh:'晚上',py:'wǎnshang',pos:'Danh từ',vn:'buổi tối',em:'🌙',lesson:3,
   ex_zh:'我晚上六点半下班。',ex_py:'Wǒ wǎnshang liù diǎn bàn xiàbān.',ex_vn:'Tối nay mình 6 giờ rưỡi tan làm.',
   exList:[{zh:'我晚上六点半下班。',py:'Wǒ wǎnshang liù diǎn bàn xiàbān.',vn:'Tối nay mình 6 giờ rưỡi tan làm.'}],
   hanzi:[
     {c:'晚',p:'wǎn',type:'左右结构 · Trái-phải',st:11,ord:'日(nhật) trái → 免(miễn) phải',rad:'日 (nhật – mặt trời)',mean:'muộn, trễ; buổi tối',
      tip:'日(mặt trời) + 免(thoát khỏi, tránh) → khi mặt trời dần THOÁT khỏi bầu trời, lặn xuống, là lúc trời về MUỘN, bắt đầu buổi TỐI.',
      cf:'免 (miǎn – "miễn trừ", là thành phần bên phải của 晚 nhưng đứng riêng)',w:'晚上 / 晚饭 / 晚安'},
     {c:'上',p:'shang',type:'独体字 · Chữ đơn',st:3,ord:'丨(sổ)+一(ngắn) phía trên → 一(ngang dài) đáy',rad:'上 (thượng – tự thành bộ)',mean:'trên; lên',
      tip:'Một vạch ngang dài tượng trưng mặt đất, với một nét vươn LÊN phía TRÊN nó → chỉ vị trí TRÊN, hướng đi LÊN.',
      cf:'下 (xià – "dưới", ngược nghĩa, hình dạng gần như đối xứng)',w:'晚上 / 早上 / 上午'},
   ]},
  {n:22,zh:'医院',py:'yīyuàn',pos:'Danh từ',vn:'bệnh viện',em:'🏥',lesson:3,
   ex_zh:'我八点去医院上班。',ex_py:'Wǒ bā diǎn qù yīyuàn shàngbān.',ex_vn:'Mình 8 giờ đến bệnh viện làm việc.',
   exList:[{zh:'我八点去医院上班。',py:'Wǒ bā diǎn qù yīyuàn shàngbān.',vn:'Mình 8 giờ đến bệnh viện làm việc.'}],
   hanzi:[
     {c:'医',p:'yī',type:'半包围结构 · Bán bao vây',st:7,ord:'匚(phương, bao ngoài) → 矢(thỉ) bên trong',rad:'匚 (phương – hộp đựng)',mean:'y, chữa bệnh, thầy thuốc',
      tip:'匚(chiếc hộp đựng dụng cụ) chứa 矢(mũi tên, tượng trưng dụng cụ y tế thời xưa) → hộp đựng dụng cụ chữa bệnh của thầy Y.',
      cf:'巨 (jù – "to lớn", hình dáng bao ngoài gần giống nhưng bên trong khác)',w:'医院 / 医生 / 中医'},
     {c:'院',p:'yuàn',type:'左右结构 · Trái-phải',st:9,ord:'阝(phụ) trái → 完(hoàn) phải',rad:'阝 (phụ – gò đất, mô đất)',mean:'viện, sân (khuôn viên có tường bao)',
      tip:'阝(gò đất, tường bao quanh) + 完(hoàn thành, đầy đủ) → một khu đất được bao kín, có ĐẦY ĐỦ công trình bên trong → tạo thành một VIỆN.',
      cf:'完 (wán – "hoàn thành, xong", là thành phần bên phải của 院 nhưng đứng riêng)',w:'医院 / 电影院 / 院子'},
   ]},
  {n:23,zh:'上班',py:'shàngbān',pos:'Động từ',vn:'đi làm, vào ca',em:'💼',lesson:3,
   ex_zh:'我八点去医院上班。',ex_py:'Wǒ bā diǎn qù yīyuàn shàngbān.',ex_vn:'Mình 8 giờ đến bệnh viện làm việc.',
   exList:[
     {zh:'我八点去医院上班。',py:'Wǒ bā diǎn qù yīyuàn shàngbān.',vn:'Mình 8 giờ đến bệnh viện làm việc.'},
     {zh:'我晚上六点半下班。',py:'Wǒ wǎnshang liù diǎn bàn xiàbān.',vn:'Tối nay mình 6 giờ rưỡi tan làm.'},
   ],
   hanzi:[
     {c:'上',p:'shàng',type:'独体字 · Chữ đơn',st:3,ord:'丨(sổ)+一(ngắn) phía trên → 一(ngang dài) đáy',rad:'上 (thượng – tự thành bộ)',mean:'trên; lên',
      tip:'Một vạch ngang dài tượng trưng mặt đất, với một nét vươn LÊN phía TRÊN nó → chỉ vị trí TRÊN, hướng đi LÊN.',
      cf:'下 (xià – "dưới", ngược nghĩa, hình dạng gần như đối xứng)',w:'上班 / 上课 / 上午'},
     {c:'班',p:'bān',type:'左中右结构 · Trái-giữa-phải',st:10,ord:'王(vương) trái → 刂(đao) giữa → 王(vương) phải',rad:'王 (vương – ngọc, biến thể của 玉)',mean:'ca làm việc; lớp, nhóm; ban',
      tip:'Hai miếng NGỌC (王) được DAO (刂) cắt tách ra thành hai phần bằng nhau → chia thành từng NHÓM, từng CA làm việc, từng LỚP học.',
      cf:'斑 (bān – "đốm, vệt", gần đồng âm và rất giống hình, khác ở phần trên bên phải là 文 thay vì 刂+王)',w:'上班 / 下班 / 班车'},
   ]},
  {n:24,zh:'店',py:'diàn',pos:'Danh từ',vn:'cửa hàng, cửa tiệm',em:'🏪',lesson:3,
   ex_zh:'你去店里买些菜吧。',ex_py:'Nǐ qù diàn li mǎi xiē cài ba.',ex_vn:'Bạn ra cửa hàng mua ít thức ăn nhé.',
   exList:[{zh:'你去店里买些菜吧。',py:'Nǐ qù diàn li mǎi xiē cài ba.',vn:'Bạn ra cửa hàng mua ít thức ăn nhé.'}],
   hanzi:[
     {c:'店',p:'diàn',type:'半包围结构 · Bán bao vây',st:8,ord:'广(nghiễm) bao ngoài → 占(chiếm) bên trong',rad:'广 (nghiễm – mái nhà, mái che)',mean:'cửa hàng, cửa tiệm',
      tip:'广(mái nhà, mái che) + 占(chiếm giữ một chỗ) → một mái nhà được dùng để CHIẾM một vị trí kinh doanh, tức là một CỬA HÀNG.',
      cf:'点 (diǎn – "điểm, giờ", cũng chứa 占 nhưng bộ 灬 ở dưới thay vì 广 bao ngoài)',w:'商店 / 店里 / 饭店'},
   ]},
  {n:25,zh:'菜',py:'cài',pos:'Danh từ',vn:'thức ăn, món ăn, rau',em:'🥬',lesson:3,
   ex_zh:'你去店里买些菜吧。',ex_py:'Nǐ qù diàn li mǎi xiē cài ba.',ex_vn:'Bạn ra cửa hàng mua ít thức ăn nhé.',
   exList:[{zh:'你去店里买些菜吧。',py:'Nǐ qù diàn li mǎi xiē cài ba.',vn:'Bạn ra cửa hàng mua ít thức ăn nhé.'}],
   hanzi:[
     {c:'菜',p:'cài',type:'上下结构 · Trên-dưới',st:11,ord:'艹(thảo) trên → 采(thái) dưới',rad:'艹 (thảo – cỏ, cây cối)',mean:'rau, món ăn, thức ăn',
      tip:'艹(cây cỏ) + 采(hái, thu hoạch bằng tay) → hành động HÁI những cây CỎ, rau quả để làm thành món ăn, tức là RAU, THỨC ĂN.',
      cf:'采 (cǎi – "hái, thu thập", là thành phần dưới của 菜 nhưng đứng riêng không có 艹)',w:'菜店 / 买菜 / 做菜'},
   ]},
  {n:26,zh:'分钟',py:'fēnzhōng',pos:'Lượng từ',vn:'phút',em:'⏲️',lesson:3,
   ex_zh:'我十分钟后去。',ex_py:'Wǒ shí fēnzhōng hòu qù.',ex_vn:'10 phút nữa mình đi.',
   exList:[{zh:'我十分钟后去。',py:'Wǒ shí fēnzhōng hòu qù.',vn:'10 phút nữa mình đi.'}],
   hanzi:[
     {c:'分',p:'fēn',type:'上下结构 · Trên-dưới',st:4,ord:'八(bát) trên → 刀(đao) dưới',rad:'刀 (đao – dao)',mean:'phút; chia, phân chia',
      tip:'八(tách ra hai bên) + 刀(con dao) → dùng DAO CHIA tách một vật ra làm đôi → nghĩa CHIA, PHÂN, cũng dùng để chỉ đơn vị PHÚT nhỏ trong giờ.',
      cf:'今 (jīn – "hôm nay", nét trên gần giống 八 nhưng phần dưới khác hẳn)',w:'分钟 / 一分 / 十分'},
     {c:'钟',p:'zhōng',type:'左右结构 · Trái-phải',st:9,ord:'钅(kim) trái → 中(trung) phải',rad:'钅 (kim – kim loại, biến thể của 金)',mean:'đồng hồ, chuông; (đơn vị: phút)',
      tip:'钅(kim loại) + 中(ở giữa, trung tâm) → một vật bằng KIM LOẠI đặt Ở GIỮA phòng để báo giờ, đó là chiếc ĐỒNG HỒ, CHUÔNG.',
      cf:'种 (zhǒng/zhòng – "loại; trồng", rất giống 钟 nhưng bộ 禾(hoà – lúa) thay vì 钅(kim))',w:'分钟 / 钟表 / 一分钟'},
   ]},
  {n:27,zh:'后',py:'hòu',pos:'Danh từ',vn:'sau, sau đó',em:'⏭️',lesson:3,
   ex_zh:'我十分钟后去。',ex_py:'Wǒ shí fēnzhōng hòu qù.',ex_vn:'10 phút nữa mình đi.',
   exList:[{zh:'我十分钟后去。',py:'Wǒ shí fēnzhōng hòu qù.',vn:'10 phút nữa mình đi.'}],
   hanzi:[
     {c:'后',p:'hòu',type:'半包围结构 · Bán bao vây',st:6,ord:'厂(hán) bao ngoài trên-trái → 口(khẩu) bên trong-dưới',rad:'厂 (hán – vách núi, mái che)',mean:'sau, phía sau, sau đó',
      tip:'厂(vách đá, không gian phía sau) bao lấy 口(miệng, cửa vào) → cửa vào nằm khuất trong vách đá, ở phía SAU.',
      cf:'右 (yòu – "bên phải", phần trên gần giống 厂+ngang nhưng 口 nằm ở vị trí khác)',w:'后来 / 以后 / 分钟后'},
   ]},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 7: Ngữ âm + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-7/wb-yuyin.mp3',
      blocks: [
        { type: 'table', caption: 'Phân biệt thanh mẫu bật hơi và không bật hơi',
          rows: [
            ['gǔ / kǔ', 'zēng / cēng', 'bái / pái'],
            ['diān / tiān', 'zhǔn / chǔn', 'bēn / pēn'],
            ['dòng / tòng', 'zhí / chí', 'jǔ / qǔ'],
            ['jiǔ / qiǔ', 'zì / cì', 'guā / kuā']
          ],
          note: 'Tiếng Trung có 6 cặp thanh mẫu bật hơi/không bật hơi tương ứng: b–p, d–t, g–k, j–q, zh–ch, z–c.' },
        { type: 'table', caption: 'Phân biệt vận mẫu mũi trước (-n) và mũi sau (-ng)',
          rows: [
            ['pén / péng', 'gǎn / gǎng'],
            ['rǎn / rǎng', 'mén / méng'],
            ['nián / niáng', 'sēn / sēng'],
            ['jiàn / jiàng', 'zàn / zàng'],
            ['shěn / shěng', 'lín / líng'],
            ['huán / huáng', 'xiǎn / xiǎng'],
            ['fàn / fàng', 'bìn / bìng'],
            ['chēn / chēng', 'qīn / qīng']
          ],
          note: 'Vận mẫu mũi trước kết thúc bằng "-n", vận mẫu mũi sau kết thúc bằng "-ng".' },
        { type: 'table', caption: 'Giới thiệu chữ Hán (汉字)',
          rows: [],
          note: 'Chữ Hán bắt nguồn từ Trung Quốc cổ đại, là một trong những hệ chữ viết cổ nhất thế giới và là hệ chữ viết duy nhất được sử dụng liên tục, không gián đoạn từ xưa đến nay. Chữ Hán đã trải qua các dạng: giáp cốt văn, kim văn, triện thư, lệ thư, khải thư, thảo thư, hành thư — trong đó khải thư là chữ chuẩn ngày nay. Khoảng 90% chữ Hán hiện đại là chữ hình thanh (gồm phần biểu âm + phần biểu nghĩa/bộ thủ), giúp việc học dễ dàng hơn. Ví dụ: "材" — "才" gợi âm đọc, bộ "木" (mộc) cho biết liên quan đến gỗ; "花" — "化" gợi âm đọc, bộ "艹" (thảo) cho biết liên quan đến cây cỏ.' }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-7/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-7-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-7-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-7-wb/q1c.jpg'}
            ], answer: 'C' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-7-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-7-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-7-wb/q2c.jpg'}
            ], answer: 'A' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-7-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-7-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-7-wb/q3c.jpg'}
            ], answer: 'C' },
            { n: 4, options: [
              {key:'A', text:'10:00', py:''},
              {key:'B', text:'12:00', py:''},
              {key:'C', text:'12号', py:'shí\'èr hào'}
            ], answer: 'B' },
            { n: 5, options: [
              {key:'A', text:'8月', py:'bā yuè'},
              {key:'B', text:'三分钟', py:'sān fēnzhōng'},
              {key:'C', text:'7:10', py:''}
            ], answer: 'C' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-7-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-7-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-7-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-7-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-7-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-7-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-7-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-7-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-7-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-7-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-7-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-7-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 9, options: [
              {key:'A', text:'上课', py:'shàngkè'},
              {key:'B', text:'上班', py:'shàngbān'},
              {key:'C', text:'看电影', py:'kàn diànyǐng'}
            ], answer: 'A' },
            { n: 10, options: [
              {key:'A', text:'饭店', py:'fàndiàn'},
              {key:'B', text:'菜店', py:'càidiàn'},
              {key:'C', text:'超市', py:'chāoshì'}
            ], answer: 'C' }
          ],
          reading: [
            { n: 11, prompt: '我在上课呢。', promptPy: 'Wǒ zài shàngkè ne.', options: [
              {key:'A', img:'/images/hsk1v3-bai-7-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-7-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-7-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-7-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 12, prompt: '我下午有事，晚上7:00见吧。', promptPy: 'Wǒ xiàwǔ yǒu shì, wǎnshang 7:00 jiàn ba.', options: [
              {key:'A', img:'/images/hsk1v3-bai-7-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-7-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-7-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-7-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 13, prompt: '今天不上班，我去超市买东西。', promptPy: 'Jīntiān bú shàngbān, wǒ qù chāoshì mǎi dōngxi.', options: [
              {key:'A', img:'/images/hsk1v3-bai-7-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-7-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-7-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-7-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 14, prompt: '我们在哪儿见？', promptPy: 'Wǒmen zài nǎr jiàn?', options: [
              {key:'A', text:'早上七点半。', py:'Zǎoshang qī diǎn bàn.'},
              {key:'B', text:'对不起，我有课。', py:'Duìbuqǐ, wǒ yǒu kè.'},
              {key:'C', text:'电影院。', py:'Diànyǐngyuàn.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'C' },
            { n: 15, prompt: '现在几点？', promptPy: 'Xiànzài jǐ diǎn?', options: [
              {key:'A', text:'早上七点半。', py:'Zǎoshang qī diǎn bàn.'},
              {key:'B', text:'对不起，我有课。', py:'Duìbuqǐ, wǒ yǒu kè.'},
              {key:'C', text:'电影院。', py:'Diànyǐngyuàn.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'A' },
            { n: 16, prompt: '我们下午去超市吧。', promptPy: 'Wǒmen xiàwǔ qù chāoshì ba.', options: [
              {key:'A', text:'早上七点半。', py:'Zǎoshang qī diǎn bàn.'},
              {key:'B', text:'对不起，我有课。', py:'Duìbuqǐ, wǒ yǒu kè.'},
              {key:'C', text:'电影院。', py:'Diànyǐngyuàn.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'B' },
            { n: 17, prompt: '我们（　）12:00下课。', promptPy: 'Wǒmen ( ) 12:00 xiàkè.', options: [
              {key:'A', text:'医院', py:'yīyuàn'},
              {key:'B', text:'中午', py:'zhōngwǔ'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：你现在在哪儿？\n女：我在（　）呢。', promptPy: 'Nǐ xiànzài zài nǎr? / Wǒ zài ( ) ne.', options: [
              {key:'A', text:'医院', py:'yīyuàn'},
              {key:'B', text:'中午', py:'zhōngwǔ'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '我今天早上八点半上课，十点十分下课。\n★说话人今天几点下课？', promptPy: 'Wǒ jīntiān zǎoshang bā diǎn bàn shàngkè, shí diǎn shí fēn xiàkè.', options: [
              {key:'A', text:'8:30', py:''},
              {key:'B', text:'10:10', py:''},
              {key:'C', text:'10:20', py:''}
            ], answer: 'B' },
            { n: 20, prompt: '妈妈今天休息，下午想去菜店买些菜。\n★妈妈下午想去菜店买：', promptPy: 'Māma jīntiān xiūxi, xiàwǔ xiǎng qù càidiàn mǎi xiē cài.', options: [
              {key:'A', text:'菜', py:'cài'},
              {key:'B', text:'饺子', py:'jiǎozi'},
              {key:'C', text:'牛奶', py:'niúnǎi'}
            ], answer: 'A' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'白家月和安妮打电话 · Hỏi giờ, hẹn gặp',
   preQuiz:[
     {q:'现在几点？',opts:['早上七点','早上八点四十','上午十点'],ans:1},
     {q:'白家月上午几点有课？',opts:['九点','十点十分','十一点'],ans:1},
     {q:'她们约几点见面？',opts:['下午两点','下午三点','晚上八点'],ans:0},
   ],
   lines:[
     {sp:0,zh:'现在几点？',py:'Xiànzài jǐ diǎn?',vn:'Bây giờ mấy giờ rồi?'},
     {sp:1,zh:'早上八点四十。',py:'Zǎoshang bā diǎn sìshí.',vn:'8 giờ 40 sáng.'},
     {sp:0,zh:'我上午十点十分有课。',py:'Wǒ shàngwǔ shí diǎn shí fēn yǒu kè.',vn:'Sáng nay mình có tiết học lúc 10 giờ 10 phút.'},
     {sp:1,zh:'好的，我们下午两点见吧。',py:'Hǎo de, wǒmen xiàwǔ liǎng diǎn jiàn ba.',vn:'Được, chúng ta hẹn gặp lúc 2 giờ chiều nhé.'},
   ]},
  {scene:'李文约白家月xem phim · Rủ đi xem phim',
   preQuiz:[
     {q:'李文下午想去（　）。',opts:['超市','看电影','西安饭店'],ans:1},
     {q:'白家月明天下午还（　）。',opts:['上课','有事','去超市'],ans:0},
   ],
   lines:[
     {sp:0,zh:'下午我想去电影院看电影，你去吗？',py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng, nǐ qù ma?',vn:'Chiều nay mình muốn đi xem phim ở rạp chiếu phim. Bạn có đi không?'},
     {sp:1,zh:'我不想去，下午还有事。',py:'Wǒ bù xiǎng qù, xiàwǔ hái yǒu shì.',vn:'Mình không muốn đi. Chiều nay mình còn có việc.'},
     {sp:0,zh:'好的。明天呢？',py:'Hǎo de. Míngtiān ne?',vn:'Ừ. Vậy ngày mai thì sao?'},
     {sp:1,zh:'我明天下午两点还上课呢，四点半下课。',py:'Wǒ míngtiān xiàwǔ liǎng diǎn hái shàngkè ne, sì diǎn bàn xiàkè.',vn:'Chiều mai mình 2 giờ chiều vẫn còn phải lên lớp, 4 giờ rưỡi tan học.'},
   ]},
  {scene:'王一雪打电话给刘明 · Hẹn giờ tan làm',
   preQuiz:[
     {q:'刘明（　）呢。',opts:['上班','买菜','在家里'],ans:2},
     {q:'王一雪（　）下班。',opts:['五点','六点','六点半'],ans:2},
   ],
   lines:[
     {sp:0,zh:'喂，你在哪儿呢？',py:'Wèi, nǐ zài nǎr ne?',vn:'A lô, anh đang ở đâu thế?'},
     {sp:1,zh:'我在家里呢。',py:'Wǒ zài jiā li ne.',vn:'Anh đang ở nhà.'},
     {sp:0,zh:'我晚上六点半下班。',py:'Wǒ wǎnshang liù diǎn bàn xiàbān.',vn:'Em tan làm lúc 6 rưỡi tối.'},
     {sp:1,zh:'我八点去医院上班。',py:'Wǒ bā diǎn qù yīyuàn shàngbān.',vn:'8 giờ anh đến bệnh viện làm việc.'},
     {sp:0,zh:'好的，你去店里买些菜吧。',py:'Hǎo de, nǐ qù diàn li mǎi xiē cài ba.',vn:'Vâng, anh ra cửa hàng mua ít thức ăn nhé.'},
     {sp:1,zh:'好，我十分钟后去。',py:'Hǎo, wǒ shí fēnzhōng hòu qù.',vn:'Ừ, 10 phút nữa anh đi.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'电影', right:'院'},
  {left:'上', right:'课'},
  {left:'下', right:'课'},
  {left:'上', right:'班'},
  {left:'分', right:'钟'},
  {left:'现', right:'在'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ audio + tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'', blank:'现在', post:'几点？', hint:'(bây giờ)', ans:'现在'},
  {pre:'早上八点', blank:'四十', post:'。', hint:'(bốn mươi — phút)', ans:'四十'},
  {pre:'我上午十点十分', blank:'有课', post:'。', hint:'(có tiết học)', ans:'有课'},
  {pre:'好的，我们下午两点', blank:'见', post:'吧。', hint:'(gặp)', ans:'见'},
  {pre:'下午我想去电影院', blank:'看电影', post:'，你去吗？', hint:'(xem phim)', ans:'看电影'},
  {pre:'我明天下午两点还', blank:'上课', post:'呢。', hint:'(lên lớp)', ans:'上课'},
  {pre:'我', blank:'晚上六点半', post:'下班。', hint:'(6 giờ rưỡi tối)', ans:'晚上六点半'},
  {pre:'我', blank:'十分钟后', post:'去。', hint:'(sau 10 phút)', ans:'十分钟后'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['现在','几点','？'], ans:'现在几点？', audio:'现在几点？'},
  {words:['我们','下午','两点','见','吧','。'], ans:'我们下午两点见吧。', audio:'我们下午两点见吧。'},
  {words:['下午','我','想','去','电影院','看电影','。'], ans:'下午我想去电影院看电影。', audio:'下午我想去电影院看电影。'},
  {words:['我','明天','下午','两点','还','上课','呢','。'], ans:'我明天下午两点还上课呢。', audio:'我明天下午两点还上课呢。'},
  {words:['我','晚上','六点半','下班','。'], ans:'我晚上六点半下班。', audio:'我晚上六点半下班。'},
  {words:['你','去','店里','买','些','菜','吧','。'], ans:'你去店里买些菜吧。', audio:'你去店里买些菜吧。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"现在几点？" nghĩa là gì?', opts:['Bây giờ mấy giờ rồi?', 'Hôm nay thứ mấy?', 'Bạn đi đâu?', 'Ai gọi điện?'], ans:0},
  {q:'"十点十分" nghĩa là gì?', opts:['10 giờ 10 phút', '10 giờ', '10 giờ rưỡi', '1 giờ 10 phút'], ans:0},
  {q:'Trợ từ "吧" trong "我们下午两点见吧" dùng để làm gì?', opts:['đưa ra đề nghị, gợi ý', 'hỏi có/không', 'phủ định', 'chỉ quá khứ'], ans:0},
  {q:'"我不想去，下午还有事" nghĩa là gì?', opts:['Tôi không muốn đi, chiều còn có việc', 'Tôi muốn đi xem phim', 'Tôi rất bận rộn', 'Tôi sẽ đi'], ans:0},
  {q:'"四点半下课" nghĩa là gì?', opts:['4 giờ rưỡi tan học', '4 giờ tan học', '4 giờ 15 tan học', '4 giờ vào học'], ans:0},
  {q:'"我在家里呢" nghĩa là gì?', opts:['Tôi đang ở nhà', 'Tôi đang ở bệnh viện', 'Tôi đang đi làm', 'Tôi đang ở cửa hàng'], ans:0},
  {q:'"十分钟后去" nghĩa là gì?', opts:['10 phút nữa đi', 'Đã đi được 10 phút', '10 giờ thì đi', 'Không đi nữa'], ans:0},
  {q:'Phó từ, từ ngữ chỉ thời gian làm trạng ngữ thường đặt ở đâu?', opts:['trước động từ/tính từ', 'sau động từ/tính từ', 'luôn ở đầu câu', 'luôn ở cuối câu'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："现在几点？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Bây giờ mấy giờ rồi?" Bạn trả lời thế nào?',
     hint: '现在……点。', sample: '现在早上八点四十。', sample_vn: 'Bây giờ là 8 giờ 40 sáng.',
     note: 'Cấu trúc "现在 + giờ + 点(+分)" dùng để nói giờ hiện tại.'},
    {q_zh: '朋友约你下午一起去看电影，但你还有事，你怎么说？', q_vn: 'Bạn của bạn rủ chiều nay đi xem phim, nhưng bạn còn bận việc, bạn nói thế nào?',
     hint: '我不想去，……还有事。', sample: '我不想去，下午还有事。', sample_vn: 'Mình không muốn đi, chiều nay mình còn có việc.',
     note: 'Cấu trúc "不想 + động từ" dùng để từ chối một cách lịch sự.'},
    {q_zh: '有人问你几点上班/下班，你怎么回答？', q_vn: 'Có người hỏi bạn mấy giờ đi làm/tan làm, bạn trả lời thế nào?',
     hint: '我……点上班/下班。', sample: '我晚上六点半下班。', sample_vn: 'Tôi tan làm lúc 6 giờ rưỡi tối.',
     note: 'Từ chỉ thời gian (点/半) luôn đứng trước động từ 上班/下班 làm trạng ngữ.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Bây giờ mấy giờ rồi? — Bây giờ là 8 giờ 40 sáng.', zh:'现在几点？——现在早上八点四十。', py:'Xiànzài jǐ diǎn? — Xiànzài zǎoshang bā diǎn sìshí.'},
  {vi:'Chiều nay tôi muốn đi rạp chiếu phim xem phim.', zh:'下午我想去电影院看电影。', py:'Xiàwǔ wǒ xiǎng qù diànyǐngyuàn kàn diànyǐng.'},
  {vi:'Tôi tối nay 6 giờ rưỡi tan làm.', zh:'我晚上六点半下班。', py:'Wǒ wǎnshang liù diǎn bàn xiàbān.'},
  {vi:'Bạn ra cửa hàng mua ít rau đi.', zh:'你去店里买些菜吧。', py:'Nǐ qù diàn li mǎi xiē cài ba.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Chúng ta hẹn gặp nhau lúc 3 giờ chiều nhé.', zh:'我们下午三点见吧。', py:'Wǒmen xiàwǔ sān diǎn jiàn ba.'},
  {vi:'Sáng nay cô ấy không có tiết học.', zh:'她上午没有课。', py:'Tā shàngwǔ méiyǒu kè.'},
  {vi:'Mấy giờ bạn đi làm? — Tôi 8 giờ đến bệnh viện làm việc.', zh:'你几点上班？——我八点去医院上班。', py:'Nǐ jǐ diǎn shàngbān? — Wǒ bā diǎn qù yīyuàn shàngbān.'},
  {vi:'5 phút nữa tôi sẽ đến, bạn đợi tôi một chút.', zh:'我五分钟后去，你等我一下。', py:'Wǒ wǔ fēnzhōng hòu qù, nǐ děng wǒ yíxià.'},
];
