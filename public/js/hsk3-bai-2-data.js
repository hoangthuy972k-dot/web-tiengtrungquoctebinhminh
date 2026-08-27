// ══════════════════════════════════════════
// DATA — HSK3 Bài 2: 他什么时候回来 (When will he come back)
// Nguồn: PPT gốc HSK3 第2课《他什么时候回来》【Lucy制作】
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'腿',py:'tuǐ',pos:'Danh từ',vn:'chân, đùi',em:'🦵',lesson:1,
   ex_zh:'我的腿很长。',ex_py:'Wǒ de tuǐ hěn cháng.',ex_vn:'Chân tôi rất dài.',
   exList:[
     {zh:'我的腿很长。',py:'Wǒ de tuǐ hěn cháng.',vn:'Chân tôi rất dài.'},
     {zh:'我的小腿有点儿疼。',py:'Wǒ de xiǎotuǐ yǒudiǎnr téng.',vn:'Bắp chân tôi hơi đau.'},
     {zh:'我现在腿也疼，脚也疼。',py:'Wǒ xiànzài tuǐ yě téng, jiǎo yě téng.',vn:'Bây giờ tôi vừa đau chân vừa đau bàn chân.'},
   ],
   hanzi:[
     {c:'腿',p:'tuǐ',type:'左右结构 · Trái-phải',st:13,ord:'月 (nhục) trái → 退 (thoái) phải',rad:'月 (nhục – thân thể)',mean:'chân, đùi',
      tip:'月(bộ phận cơ thể) + 退(lùi lại) → bộ phận cơ thể dùng để BƯỚC LÙI/ĐI LẠI = CHÂN.',
      cf:'退 (tuì – "lùi lại", không có bộ 月")',w:'大腿 / 小腿 / 左腿 / 右腿'},
   ],
   check:{promptLang:'vi',prompt:'Chân tôi rất dài.',answer:'我的腿很长。',answerPy:'Wǒ de tuǐ hěn cháng.',
     note:'腿 chỉ phần chân từ hông đến mắt cá (đùi + cẳng chân), khác với 脚 (bàn chân).'}},

  {n:2,zh:'疼',py:'téng',pos:'Tính từ',vn:'đau, đau đớn',em:'🤕',lesson:1,
   ex_zh:'你哪儿疼？',ex_py:'Nǐ nǎr téng?',ex_vn:'Bạn đau ở đâu?',
   exList:[
     {zh:'你哪儿疼？',py:'Nǐ nǎr téng?',vn:'Bạn đau ở đâu?'},
     {zh:'我头疼。',py:'Wǒ tóu téng.',vn:'Tôi đau đầu.'},
     {zh:'我肚子疼，眼睛也疼。',py:'Wǒ dùzi téng, yǎnjīng yě téng.',vn:'Tôi đau bụng, mắt cũng đau.'},
   ],
   hanzi:[
     {c:'疼',p:'téng',type:'半包围结构 · Bán bao vây',st:10,ord:'疒 (nạch) bao → 冬 (đông) trong',rad:'疒 (nạch – bệnh tật)',mean:'đau, đau đớn',
      tip:'Bộ 疒(bệnh) + 冬(mùa đông) → mùa đông lạnh khiến cơ thể ĐAU NHỨC.',
      cf:'冷 (lěng – "lạnh", cũng liên quan mùa đông)',w:'头疼 / 腿疼 / 肚子疼 / 眼睛疼'},
   ],
   check:{promptLang:'vi',prompt:'Bạn đau ở đâu?',answer:'你哪儿疼？',answerPy:'Nǐ nǎr téng?',
     note:'疼 là tính từ chỉ cảm giác đau, đứng trực tiếp sau bộ phận cơ thể: 头疼/腿疼/脚疼.'}},

  {n:3,zh:'脚',py:'jiǎo',pos:'Danh từ',vn:'chân, bàn chân',em:'🦶',lesson:1,
   ex_zh:'我现在腿疼，脚也疼。',ex_py:'Wǒ xiànzài tuǐ téng, jiǎo yě téng.',ex_vn:'Bây giờ tôi đau chân, bàn chân cũng đau.',
   exList:[
     {zh:'我现在腿疼，脚也疼。',py:'Wǒ xiànzài tuǐ téng, jiǎo yě téng.',vn:'Bây giờ tôi đau chân, bàn chân cũng đau.'},
     {zh:'我的左脚，你的右脚。',py:'Wǒ de zuǒjiǎo, nǐ de yòujiǎo.',vn:'Chân trái của tôi, chân phải của bạn.'},
     {zh:'鞋太小了，我的脚不舒服。',py:'Xié tài xiǎo le, wǒ de jiǎo bù shūfu.',vn:'Giày quá nhỏ, chân tôi khó chịu.'},
   ],
   hanzi:[
     {c:'脚',p:'jiǎo',type:'左右结构 · Trái-phải',st:11,ord:'月 (nhục) trái → 却 (khước) phải',rad:'月 (nhục – thân thể)',mean:'chân, bàn chân',
      tip:'月(thân thể) + 却(ngược lại, trái lại) → bộ phận ở phía dưới cùng cơ thể = BÀN CHÂN.',
      cf:'却 (què – "lại, trái lại", không có bộ 月")',w:'左脚 / 右脚 / 一双脚'},
   ],
   check:{promptLang:'vi',prompt:'Giày quá nhỏ, chân tôi khó chịu.',answer:'鞋太小了，我的脚不舒服。',answerPy:'Xié tài xiǎo le, wǒ de jiǎo bù shūfu.',
     note:'脚 chỉ riêng bàn chân (phần tiếp đất khi đi), khác 腿 (chân/đùi nói chung).'}},

  {n:4,zh:'树',py:'shù',pos:'Danh từ',vn:'cây',em:'🌳',lesson:1,
   ex_zh:'这里有一棵树。',ex_py:'Zhèlǐ yǒu yì kē shù.',ex_vn:'Ở đây có một cây.',
   exList:[
     {zh:'这里有一棵树。',py:'Zhèlǐ yǒu yì kē shù.',vn:'Ở đây có một cây.'},
     {zh:'那里也有一棵树。',py:'Nàlǐ yě yǒu yì kē shù.',vn:'Ở đó cũng có một cây.'},
     {zh:'那边树多，我们过去坐一下吧。',py:'Nàbiān shù duō, wǒmen guòqu zuò yíxià ba.',vn:'Đằng kia nhiều cây, chúng ta qua đó ngồi một chút đi.'},
   ],
   hanzi:[
     {c:'树',p:'shù',type:'左右结构 · Trái-phải',st:9,ord:'木 (mộc) trái → 又 (hựu) phải',rad:'木 (mộc – gỗ, cây)',mean:'cây',
      tip:'Bộ 木(gỗ) đứng bên trái luôn liên quan đến CÂY CỐI, gỗ.',
      cf:'林 (lín – "rừng", hai chữ 木")',w:'大树 / 小树 / 一棵树'},
   ],
   check:{promptLang:'vi',prompt:'Ở đó cũng có một cây.',answer:'那里有一棵树。',answerPy:'Nàlǐ yǒu yì kē shù.',
     note:'Lượng từ của 树 là 棵: 一棵树 (một cây), không dùng 个.'}},

  {n:5,zh:'容易',py:'róngyì',pos:'Tính từ',vn:'dễ, dễ dàng',em:'✅',lesson:1,
   ex_zh:'学汉语很容易。',ex_py:'Xué Hànyǔ hěn róngyì.',ex_vn:'Học tiếng Trung rất dễ.',
   exList:[
     {zh:'学汉语很容易。',py:'Xué Hànyǔ hěn róngyì.',vn:'Học tiếng Trung rất dễ.'},
     {zh:'这个问题很容易。',py:'Zhège wèntí hěn róngyì.',vn:'Câu hỏi này rất dễ.'},
     {zh:'找到一个好工作不容易。',py:'Zhǎodào yí ge hǎo gōngzuò bù róngyì.',vn:'Tìm được một công việc tốt không dễ.'},
   ],
   hanzi:[
     {c:'容',p:'róng',type:'上下结构 · Trên-dưới',st:10,ord:'宀 (miên) trên → 谷 (cốc) dưới',rad:'宀 (miên – mái nhà)',mean:'chứa đựng, dung nạp',
      tip:'Mái nhà 宀 che thung lũng 谷 → có chỗ CHỨA ĐỰNG, DUNG NẠP; mọi việc DỄ hơn khi có chỗ dung thân.',
      cf:'客 (kè – "khách", cũng bộ 宀")',w:'容易 / 内容'},
     {c:'易',p:'yì',type:'独体字 · Chữ đơn',st:8,ord:'nét liền, không tách bộ',rad:'日 (nhật)',mean:'dễ; thay đổi',
      tip:'Chữ tượng hình cổ chỉ sự BIẾN ĐỔI linh hoạt → nghĩa mở rộng thành "DỄ DÀNG".',
      cf:'昜 (dạng cổ liên quan)',w:'容易 / 简易'},
   ],
   check:{promptLang:'vi',prompt:'Bài kiểm tra này rất dễ.',answer:'这次考试很容易。',answerPy:'Zhè cì kǎoshì hěn róngyì.',
     note:'容易 làm vị ngữ luôn cần phó từ mức độ (很/太) đứng trước: 很容易, không nói trơn "容易".'}},

  {n:6,zh:'难',py:'nán',pos:'Tính từ',vn:'khó',em:'❌',lesson:1,
   ex_zh:'写汉字很难。',ex_py:'Xiě Hànzì hěn nán.',ex_vn:'Viết chữ Hán rất khó.',
   exList:[
     {zh:'写汉字很难。',py:'Xiě Hànzì hěn nán.',vn:'Viết chữ Hán rất khó.'},
     {zh:'这道菜很难做。',py:'Zhè dào cài hěn nán zuò.',vn:'Món này khó làm.'},
     {zh:'上山容易下山难。',py:'Shàng shān róngyì xià shān nán.',vn:'Lên núi dễ, xuống núi khó.'},
   ],
   hanzi:[
     {c:'难',p:'nán',type:'左右结构 · Trái-phải',st:10,ord:'又 (hựu) trái → 隹 (chuy) phải',rad:'又 (hựu – bàn tay)',mean:'khó',
      tip:'Bộ 又(tay) cầm 隹(chim đuôi ngắn) → bắt chim bằng tay rất KHÓ.',
      cf:'难 và 准 (chuẩn) đều có 隹',w:'很难 / 难写 / 难学'},
   ],
   check:{promptLang:'vi',prompt:'Món này khó làm.',answer:'这道菜很难做。',answerPy:'Zhè dào cài hěn nán zuò.',
     note:'难/容易 + động từ (难做/容易学) = khó/dễ làm việc gì; ghi nhớ thành ngữ 上山容易下山难.'}},

  {n:7,zh:'太太',py:'tàitai',pos:'Danh từ',vn:'bà, vợ, phu nhân',em:'👩',lesson:2,
   ex_zh:'她是我的太太。',ex_py:'Tā shì wǒ de tàitai.',ex_vn:'Cô ấy là vợ tôi.',
   exList:[
     {zh:'她是我的太太。',py:'Tā shì wǒ de tàitai.',vn:'Cô ấy là vợ tôi.'},
     {zh:'周太太在办公室。',py:'Zhōu tàitai zài bàngōngshì.',vn:'Bà Chu ở văn phòng.'},
     {zh:'他太太很漂亮。',py:'Tā tàitai hěn piàoliang.',vn:'Vợ anh ấy rất đẹp.'},
   ],
   hanzi:[
     {c:'太',p:'tài',type:'独体字 · Chữ đơn',st:4,ord:'大 → 丶(chấm) dưới',rad:'大 (đại – to lớn)',mean:'quá, thái',
      tip:'To lớn 大 + thêm một chấm 丶bên dưới → "THÁI", ý mức độ cao/trang trọng; ghép với 太太 = cách gọi lịch sự người vợ.',
      cf:'犬 (quǎn – "con chó")',w:'太太 / 太大了'},
   ],
   check:{promptLang:'vi',prompt:'Vợ anh ấy rất đẹp.',answer:'他太太很漂亮。',answerPy:'Tā tàitai hěn piàoliang.',
     note:'太太 vừa là danh từ "vợ", vừa là cách xưng hô lịch sự kèm họ: 周太太, 李太太.'}},

  {n:8,zh:'秘书',py:'mìshū',pos:'Danh từ',vn:'thư ký',em:'📋',lesson:2,
   ex_zh:'这是我的秘书。',ex_py:'Zhè shì wǒ de mìshū.',ex_vn:'Đây là thư ký của tôi.',
   exList:[
     {zh:'这是我的秘书。',py:'Zhè shì wǒ de mìshū.',vn:'Đây là thư ký của tôi.'},
     {zh:'王秘书在办公室。',py:'Wáng mìshū zài bàngōngshì.',vn:'Thư ký Vương ở văn phòng.'},
     {zh:'刘秘书出去了。',py:'Liú mìshū chūqu le.',vn:'Thư ký Lưu ra ngoài rồi.'},
   ],
   hanzi:[
     {c:'秘',p:'mì',type:'左右结构 · Trái-phải',st:10,ord:'禾 (hoà) trái → 必 (tất) phải',rad:'禾 (hoà – lúa)',mean:'bí mật',
      tip:'Bộ 禾(lúa) + 必(tất nhiên) → giữ kín thông tin về mùa màng = BÍ MẬT; người giữ việc riêng cho sếp = thư ký.',
      cf:'密 (mì – "bí mật, kín đáo")',w:'秘书 / 秘密'},
   ],
   check:{promptLang:'vi',prompt:'Thư ký Vương ở văn phòng.',answer:'王秘书在办公室。',answerPy:'Wáng mìshū zài bàngōngshì.',
     note:'Họ + 秘书 (王秘书) là cách gọi tên chức danh, tương tự cách dùng 经理.'}},

  {n:9,zh:'经理',py:'jīnglǐ',pos:'Danh từ',vn:'giám đốc, quản lý',em:'👔',lesson:2,
   ex_zh:'这是我的经理。',ex_py:'Zhè shì wǒ de jīnglǐ.',ex_vn:'Đây là giám đốc của tôi.',
   exList:[
     {zh:'这是我的经理。',py:'Zhè shì wǒ de jīnglǐ.',vn:'Đây là giám đốc của tôi.'},
     {zh:'张经理在办公室。',py:'Zhāng jīnglǐ zài bàngōngshì.',vn:'Giám đốc Trương ở văn phòng.'},
     {zh:'李经理在哪儿？',py:'Lǐ jīnglǐ zài nǎr?',vn:'Giám đốc Lý ở đâu?'},
   ],
   hanzi:[
     {c:'经',p:'jīng',type:'左右结构 · Trái-phải',st:8,ord:'纟 (mịch) trái → 22 (kinh) phải',rad:'纟 (mịch – tơ, sợi)',mean:'kinh qua, quản lý',
      tip:'Bộ 纟(sợi tơ, dệt theo đường kinh tuyến) → mở rộng thành QUẢN LÝ có hệ thống, trải qua.',
      cf:'轻 (qīng – "nhẹ")',w:'经理 / 经过'},
     {c:'理',p:'lǐ',type:'左右结构 · Trái-phải',st:11,ord:'王 (vương) trái → 里 (lý) phải',rad:'王 (vương – ngọc)',mean:'lý lẽ, xử lý',
      tip:'Người thợ ngọc 王 xử lý đường vân trong viên ngọc 里 → LÝ LẼ, XỬ LÝ, QUẢN LÝ.',
      cf:'里 (lǐ – "bên trong")',w:'经理 / 道理 / 处理'},
   ],
   check:{promptLang:'vi',prompt:'Giám đốc Lý ở đâu?',answer:'李经理在哪儿？',answerPy:'Lǐ jīnglǐ zài nǎr?',
     note:'Họ + 经理 (张经理/李经理) dùng để xưng hô lịch sự với người giữ chức giám đốc.'}},

  {n:10,zh:'办公室',py:'bàngōngshì',pos:'Danh từ',vn:'văn phòng',em:'🏢',lesson:2,
   ex_zh:'我的办公室在这里。',ex_py:'Wǒ de bàngōngshì zài zhèlǐ.',ex_vn:'Văn phòng của tôi ở đây.',
   exList:[
     {zh:'我的办公室在这里。',py:'Wǒ de bàngōngshì zài zhèlǐ.',vn:'Văn phòng của tôi ở đây.'},
     {zh:'王秘书在办公室。',py:'Wáng mìshū zài bàngōngshì.',vn:'Thư ký Vương ở văn phòng.'},
     {zh:'我们经常在办公室吃午饭。',py:'Wǒmen jīngcháng zài bàngōngshì chī wǔfàn.',vn:'Chúng tôi thường ăn trưa ở văn phòng.'},
   ],
   hanzi:[
     {c:'办',p:'bàn',type:'独体字 · Chữ đơn (giản thể)',st:4,ord:'力 (lực) ở giữa hai chấm',rad:'力 (lực – sức lực)',mean:'làm, xử lý',
      tip:'Sức lực 力 ở giữa hai bên → dồn sức để LÀM VIỆC.',
      cf:'为 (wèi – "vì")',w:'办公室 / 办事'},
     {c:'室',p:'shì',type:'上下结构 · Trên-dưới',st:9,ord:'宀 (miên) trên → 至 (chí) dưới',rad:'宀 (miên – mái nhà)',mean:'căn phòng',
      tip:'Mái nhà 宀 nơi người ta đi đến 至 để dừng chân → CĂN PHÒNG.',
      cf:'到 (dào – cũng chứa 至")',w:'办公室 / 教室'},
   ],
   check:{promptLang:'vi',prompt:'Chúng tôi thường ăn trưa ở văn phòng.',answer:'我们经常在办公室吃午饭。',answerPy:'Wǒmen jīngcháng zài bàngōngshì chī wǔfàn.',
     note:'在 + 办公室 + động từ = làm gì đó TẠI văn phòng (giới từ 在 đứng trước địa điểm).'}},

  {n:11,zh:'周',py:'Zhōu',pos:'Danh từ riêng',vn:'họ Chu',em:'👨',lesson:2,
   ex_zh:'请问周明在吗？',ex_py:'Qǐngwèn Zhōu Míng zài ma?',ex_vn:'Xin hỏi anh Chu Minh có ở đó không?',
   exList:[
     {zh:'请问周明在吗？',py:'Qǐngwèn Zhōu Míng zài ma?',vn:'Xin hỏi anh Chu Minh có ở đó không?'},
   ]},

  {n:12,zh:'周明',py:'Zhōu Míng',pos:'Danh từ riêng',vn:'tên người (Chu Minh)',em:'🙋',lesson:2,
   ex_zh:'周经理出去了，不在办公室。',ex_py:'Zhōu jīnglǐ chūqu le, bú zài bàngōngshì.',ex_vn:'Giám đốc Chu ra ngoài rồi, không có ở văn phòng.',
   exList:[
     {zh:'周经理出去了，不在办公室。',py:'Zhōu jīnglǐ chūqu le, bú zài bàngōngshì.',vn:'Giám đốc Chu ra ngoài rồi, không có ở văn phòng.'},
   ]},

  {n:13,zh:'辆',py:'liàng',pos:'Lượng từ',vn:'chiếc (xe cộ)',em:'🚗',lesson:3,
   ex_zh:'这儿有一辆车。',ex_py:'Zhèr yǒu yí liàng chē.',ex_vn:'Ở đây có một chiếc xe.',
   exList:[
     {zh:'这儿有一辆车。',py:'Zhèr yǒu yí liàng chē.',vn:'Ở đây có một chiếc xe.'},
     {zh:'这儿有几辆公共汽车？',py:'Zhèr yǒu jǐ liàng gōnggòng qìchē?',vn:'Ở đây có mấy chiếc xe buýt?'},
     {zh:'我去叫辆出租车。',py:'Wǒ qù jiào liàng chūzūchē.',vn:'Tôi đi gọi một chiếc taxi.'},
   ],
   hanzi:[
     {c:'辆',p:'liàng',type:'左右结构 · Trái-phải',st:11,ord:'车 (xa) trái → 两 (lưỡng) phải',rad:'车 (xa – xe)',mean:'chiếc (xe)',
      tip:'Bộ 车(xe) + 两(hai, âm gần "lượng") → lượng từ CHUYÊN DÙNG để đếm XE CỘ.',
      cf:'两 (liǎng – "hai", không có bộ 车")',w:'一辆车 / 两辆 / 几辆'},
   ],
   check:{promptLang:'vi',prompt:'Ở đây có mấy chiếc xe buýt?',answer:'这儿有几辆公共汽车？',answerPy:'Zhèr yǒu jǐ liàng gōnggòng qìchē?',
     note:'辆 là lượng từ chuyên dùng cho xe cộ: 一辆车/一辆出租车/一辆公共汽车.'}},

  {n:14,zh:'楼',py:'lóu',pos:'Danh từ',vn:'lầu, tòa nhà',em:'🏬',lesson:3,
   ex_zh:'我在5号楼。',ex_py:'Wǒ zài wǔ hào lóu.',ex_vn:'Tôi ở tòa nhà số 5.',
   exList:[
     {zh:'我在5号楼。',py:'Wǒ zài wǔ hào lóu.',vn:'Tôi ở tòa nhà số 5.'},
     {zh:'你在几号楼？',py:'Nǐ zài jǐ hào lóu?',vn:'Bạn ở tòa nhà số mấy?'},
     {zh:'我上楼去给你拿把伞。',py:'Wǒ shànglóu qù gěi nǐ ná bǎ sǎn.',vn:'Tôi lên lầu lấy cho bạn một cái ô.'},
   ],
   hanzi:[
     {c:'楼',p:'lóu',type:'左右结构 · Trái-phải',st:13,ord:'木 (mộc) trái → 娄 (lũ) phải',rad:'木 (mộc – gỗ)',mean:'lầu, tòa nhà',
      tip:'Bộ gỗ 木 (nhà làm bằng gỗ thời xưa) + 娄(xếp lớp) → nhà xếp nhiều TẦNG = TÒA NHÀ, LẦU.',
      cf:'数 (shù – "số", cũng có phần giống 娄")',w:'大楼 / 楼上 / 楼下 / 上楼 / 下楼'},
   ],
   check:{promptLang:'vi',prompt:'Bạn ở tòa nhà số mấy?',answer:'你在几号楼？',answerPy:'Nǐ zài jǐ hào lóu?',
     note:'几号楼 = tòa nhà số mấy; còn có 楼上/楼下 (tầng trên/dưới) và 上楼/下楼 (lên/xuống lầu).'}},

  {n:15,zh:'拿',py:'ná',pos:'Động từ',vn:'cầm, lấy',em:'🤲',lesson:3,
   ex_zh:'你手里拿的是什么？',ex_py:'Nǐ shǒu lǐ ná de shì shénme?',ex_vn:'Cái bạn đang cầm trên tay là gì?',
   exList:[
     {zh:'你手里拿的是什么？',py:'Nǐ shǒu lǐ ná de shì shénme?',vn:'Cái bạn đang cầm trên tay là gì?'},
     {zh:'我去拿把伞。',py:'Wǒ qù ná bǎ sǎn.',vn:'Tôi đi lấy một cái ô.'},
     {zh:'别忘了拿你的伞。',py:'Bié wàngle ná nǐ de sǎn.',vn:'Đừng quên mang theo ô của bạn.'},
   ],
   hanzi:[
     {c:'拿',p:'ná',type:'上下结构 · Trên-dưới',st:10,ord:'合 (hợp) trên → 手 (thủ) dưới',rad:'手 (thủ – tay)',mean:'cầm, lấy',
      tip:'合(hợp lại) bàn 手(tay) → khép bàn tay lại để CẦM/LẤY một vật gì đó.',
      cf:'合 (hé – "hợp lại")',w:'拿书 / 拿钱 / 拿伞'},
   ],
   check:{promptLang:'vi',prompt:'Đừng quên mang theo ô của bạn.',answer:'别忘了拿你的伞。',answerPy:'Bié wàngle ná nǐ de sǎn.',
     note:'别忘了 + V = đừng quên làm gì; 拿 = cầm/lấy vật gì bằng tay.'}},

  {n:16,zh:'把',py:'bǎ',pos:'Lượng từ',vn:'cái, chiếc (đồ có tay cầm)',em:'🖐️',lesson:3,
   ex_zh:'我去拿把伞。',ex_py:'Wǒ qù ná bǎ sǎn.',ex_vn:'Tôi đi lấy một cái ô.',
   exList:[
     {zh:'我去拿把伞。',py:'Wǒ qù ná bǎ sǎn.',vn:'Tôi đi lấy một cái ô.'},
     {zh:'那儿有一把椅子。',py:'Nàr yǒu yì bǎ yǐzi.',vn:'Ở đó có một cái ghế.'},
     {zh:'这是一把刀，那是一把扇子。',py:'Zhè shì yì bǎ dāo, nà shì yì bǎ shànzi.',vn:'Đây là một con dao, kia là một cái quạt.'},
   ],
   hanzi:[
     {c:'把',p:'bǎ',type:'左右结构 · Trái-phải',st:7,ord:'扌 (thủ) trái → 巴 (ba) phải',rad:'扌 (thủ – bàn tay)',mean:'nắm giữ; lượng từ',
      tip:'Bộ tay 扌 + 巴(bám chặt) → dùng TAY nắm giữ; cũng là lượng từ cho đồ vật CÓ TAY CẦM.',
      cf:'巴 (bā – "bám, mong chờ")',w:'一把伞 / 一把椅子 / 一把刀'},
   ],
   check:{promptLang:'vi',prompt:'Tôi đi lấy một cái ô.',answer:'我去拿把伞。',answerPy:'Wǒ qù ná bǎ sǎn.',
     note:'把 là lượng từ cho đồ vật có tay cầm: 一把伞/一把椅子/一把刀/一把扇子.'}},

  {n:17,zh:'伞',py:'sǎn',pos:'Danh từ',vn:'cái ô, dù',em:'☂️',lesson:3,
   ex_zh:'外面下雨了，我去拿把伞。',ex_py:'Wàimian xiàyǔ le, wǒ qù ná bǎ sǎn.',ex_vn:'Bên ngoài mưa rồi, tôi đi lấy một cái ô.',
   exList:[
     {zh:'外面下雨了，我去拿把伞。',py:'Wàimian xiàyǔ le, wǒ qù ná bǎ sǎn.',vn:'Bên ngoài mưa rồi, tôi đi lấy một cái ô.'},
     {zh:'我上楼去给你拿把伞。',py:'Wǒ shànglóu qù gěi nǐ ná bǎ sǎn.',vn:'Tôi lên lầu lấy ô cho bạn.'},
     {zh:'太阳伞和雨伞不一样。',py:'Tàiyángsǎn hé yǔsǎn bù yíyàng.',vn:'Ô che nắng và ô che mưa không giống nhau.'},
   ],
   hanzi:[
     {c:'伞',p:'sǎn',type:'独体字 · Chữ đơn (tượng hình)',st:5,ord:'人 trên → nhiều nét dưới',rad:'人 (nhân)',mean:'cái ô, dù',
      tip:'Hình dáng ký tự trông giống một chiếc Ô đang xòe ra che mưa nắng.',
      cf:'企 (qǐ – cũng có bộ 人 phía trên)',w:'雨伞 / 太阳伞 / 一把伞'},
   ],
   check:{promptLang:'vi',prompt:'Tôi lên lầu lấy ô cho bạn.',answer:'我上楼去给你拿把伞。',answerPy:'Wǒ shànglóu qù gěi nǐ ná bǎ sǎn.',
     note:'雨伞 (ô che mưa) khác 太阳伞 (ô che nắng); lượng từ đi kèm là 把.'}},

  {n:18,zh:'胖',py:'pàng',pos:'Tính từ',vn:'béo, mập',em:'🐷',lesson:4,
   ex_zh:'他很胖，我很瘦。',ex_py:'Tā hěn pàng, wǒ hěn shòu.',ex_vn:'Anh ấy rất béo, tôi rất gầy.',
   exList:[
     {zh:'他很胖，我很瘦。',py:'Tā hěn pàng, wǒ hěn shòu.',vn:'Anh ấy rất béo, tôi rất gầy.'},
     {zh:'你看，我这么胖，怎么办呢？',py:'Nǐ kàn, wǒ zhème pàng, zěnme bàn ne?',vn:'Con xem, mẹ béo thế này, phải làm sao đây?'},
     {zh:'最近她吃得很多，胖了五公斤。',py:'Zuìjìn tā chī de hěn duō, pàngle wǔ gōngjīn.',vn:'Gần đây cô ấy ăn nhiều, béo lên 5 cân.'},
   ],
   hanzi:[
     {c:'胖',p:'pàng',type:'左右结构 · Trái-phải',st:9,ord:'月 (nhục) trái → 半 (bán) phải',rad:'月 (nhục – thịt)',mean:'béo, mập',
      tip:'Bộ thịt 月 + 半(nửa, ý nhiều thịt dư ra) → nhiều THỊT trên cơ thể = BÉO.',
      cf:'伴 (bàn – "bạn đồng hành", cũng có 半")',w:'很胖 / 胖了'},
   ],
   check:{promptLang:'vi',prompt:'Gần đây cô ấy ăn nhiều, béo lên 5 cân.',answer:'最近她吃得很多，胖了五公斤。',answerPy:'Zuìjìn tā chī de hěn duō, pàngle wǔ gōngjīn.',
     note:'胖 (béo) trái nghĩa với 瘦 (gầy); "V了 + số lượng" diễn tả mức độ thay đổi (胖了5公斤).'}},

  {n:19,zh:'其实',py:'qíshí',pos:'Phó từ',vn:'thực ra, thật ra',em:'💬',lesson:4,
   ex_zh:'他看起来很年轻，其实已经40岁了。',ex_py:'Tā kànqǐlai hěn niánqīng, qíshí yǐjīng sìshí suì le.',ex_vn:'Anh ấy trông rất trẻ, nhưng thực ra đã 40 tuổi rồi.',
   exList:[
     {zh:'他看起来很年轻，其实已经40岁了。',py:'Tā kànqǐlai hěn niánqīng, qíshí yǐjīng sìshí suì le.',vn:'Anh ấy trông rất trẻ, nhưng thực ra đã 40 tuổi rồi.'},
     {zh:'其实，我还没吃饭。',py:'Qíshí, wǒ hái méi chīfàn.',vn:'Thực ra, tôi vẫn chưa ăn cơm.'},
     {zh:'这个工作看起来很难，其实很容易。',py:'Zhège gōngzuò kànqǐlai hěn nán, qíshí hěn róngyì.',vn:'Công việc này nhìn thì khó, nhưng thực ra rất dễ.'},
   ],
   hanzi:[
     {c:'其',p:'qí',type:'独体字 · Chữ đơn (tượng hình)',st:8,ord:'nét liền, gốc là hình cái nia',rad:'八 (bát)',mean:'đó, cái đó',
      tip:'Vốn là hình vẽ cái nia sàng gạo cổ, sau mượn dùng làm đại từ chỉ định "đó, của nó".',
      cf:'期 (qī – "thời kỳ", cũng chứa 其")',w:'其实 / 其他'},
     {c:'实',p:'shí',type:'上下结构 · Trên-dưới (giản thể)',st:8,ord:'宀 (miên) trên → 头 (biến thể) dưới',rad:'宀 (miên – mái nhà)',mean:'thật, thực',
      tip:'Trong nhà 宀 có của cải THẬT SỰ → nghĩa THỰC, CHÂN THẬT.',
      cf:'买 (mǎi – hình dạng gần giống phần dưới)',w:'其实 / 事实 / 实在'},
   ],
   check:{promptLang:'vi',prompt:'Công việc này nhìn thì khó, nhưng thực ra rất dễ.',answer:'这个工作看起来很难，其实很容易。',answerPy:'Zhège gōngzuò kànqǐlai hěn nán, qíshí hěn róngyì.',
     note:'其实 thường đứng ở ĐẦU CÂU hoặc NGAY SAU chủ ngữ, dùng để đính chính một nhận định trước đó.'}},

  {n:20,zh:'瘦',py:'shòu',pos:'Tính từ',vn:'gầy, ốm',em:'📉',lesson:4,
   ex_zh:'我现在没以前那么胖了。',ex_py:'Wǒ xiànzài méi yǐqián nàme pàng le.',ex_vn:'Bây giờ tôi không còn béo như trước nữa.',
   exList:[
     {zh:'我现在没以前那么胖了。',py:'Wǒ xiànzài méi yǐqián nàme pàng le.',vn:'Bây giờ tôi không còn béo như trước nữa.'},
     {zh:'我比以前瘦。',py:'Wǒ bǐ yǐqián shòu.',vn:'Tôi gầy hơn trước.'},
     {zh:'这件衣服有点儿瘦。',py:'Zhè jiàn yīfu yǒudiǎnr shòu.',vn:'Bộ quần áo này hơi chật.'},
   ],
   hanzi:[
     {c:'瘦',p:'shòu',type:'半包围结构 · Bán bao vây',st:14,ord:'疒 (nạch) bao → 叟 (tẩu) trong',rad:'疒 (nạch – bệnh tật)',mean:'gầy, ốm',
      tip:'Bộ bệnh 疒 + 叟(ông già) → cơ thể như ông già ốm o = GẦY.',
      cf:'瘦 và 疼 đều mang bộ 疒 (liên quan cơ thể)',w:'很瘦 / 瘦了 / 有点儿瘦'},
   ],
   check:{promptLang:'vi',prompt:'Tôi gầy hơn trước.',answer:'我比以前瘦。',answerPy:'Wǒ bǐ yǐqián shòu.',
     note:'瘦 dùng cho người (gầy) hoặc quần áo (chật, bó sát): 有点儿瘦.'}},
];

const wuData = [
  {img:'🦶',label:'脚',py:'jiǎo',letter:'A'},
  {img:'🌳',label:'树',py:'shù',letter:'B'},
  {img:'👔',label:'经理',py:'jīnglǐ',letter:'C'},
  {img:'🏢',label:'办公室',py:'bàngōngshì',letter:'D'},
  {img:'🏬',label:'楼',py:'lóu',letter:'E'},
  {img:'☂️',label:'伞',py:'sǎn',letter:'F'},
];

var dialogData = [
  {scene:'下山的路上 · Trên đường xuống núi',
   lines:[
     {sp:0,zh:'休息一下吧。',py:'Xiūxi yíxià ba.',vn:'Nghỉ một chút đi.'},
     {sp:1,zh:'怎么了？',py:'Zěnme le?',vn:'Sao vậy?'},
     {sp:0,zh:'我现在腿也疼，脚也疼。',py:'Wǒ xiànzài tuǐ yě téng, jiǎo yě téng.',vn:'Bây giờ tôi vừa đau chân vừa đau bàn chân.'},
     {sp:1,zh:'好，那边树多，我们过去坐一下吧。',py:'Hǎo, nàbiān shù duō, wǒmen guòqu zuò yíxià ba.',vn:'Được, đằng kia nhiều cây, chúng ta qua đó ngồi một chút đi.'},
     {sp:0,zh:'上来的时候我怎么没觉得这么累？',py:'Shànglái de shíhou wǒ zěnme méi juéde zhème lèi?',vn:'Lúc lên núi sao tôi lại không thấy mệt thế này nhỉ?'},
     {sp:1,zh:'上山容易下山难，你不知道？',py:'Shàng shān róngyì xià shān nán, nǐ bù zhīdào?',vn:'Lên núi dễ xuống núi khó, bạn không biết à?'},
   ]},
  {scene:'在打电话 · Đang gọi điện thoại',
   lines:[
     {sp:0,zh:'喂，你好，请问周明在吗？',py:'Wèi, nǐ hǎo, qǐngwèn Zhōu Míng zài ma?',vn:'Alô, xin chào, cho hỏi anh Chu Minh có ở đó không?'},
     {sp:1,zh:'周经理出去了，不在办公室。',py:'Zhōu jīnglǐ chūqu le, bú zài bàngōngshì.',vn:'Giám đốc Chu ra ngoài rồi, không có ở văn phòng.'},
     {sp:0,zh:'他去哪儿了？什么时候回来？',py:'Tā qù nǎr le? Shénme shíhou huílai?',vn:'Anh ấy đi đâu rồi? Khi nào về?'},
     {sp:1,zh:'他出去办事了，下午回来。',py:'Tā chūqu bànshì le, xiàwǔ huílai.',vn:'Anh ấy ra ngoài giải quyết việc, chiều về.'},
     {sp:0,zh:'回来了就让他给我打个电话。',py:'Huílai le jiù ràng tā gěi wǒ dǎ ge diànhuà.',vn:'Về rồi thì bảo anh ấy gọi điện cho tôi.'},
     {sp:1,zh:'好的，他到了办公室我就告诉他。',py:'Hǎo de, tā dàole bàngōngshì wǒ jiù gàosu tā.',vn:'Vâng, anh ấy đến văn phòng là tôi báo ngay cho anh ấy.'},
   ]},
  {scene:'在楼门口送朋友 · Tiễn bạn ở cửa tòa nhà',
   lines:[
     {sp:0,zh:'雨下得真大。你怎么回去？我送你吧。',py:'Yǔ xià de zhēn dà. Nǐ zěnme huíqu? Wǒ sòng nǐ ba.',vn:'Mưa to quá. Bạn về bằng gì? Để tôi đưa bạn về.'},
     {sp:1,zh:'没事，我出去叫辆出租车就行了。',py:'Méishì, wǒ chūqu jiào liàng chūzūchē jiù xíng le.',vn:'Không sao, tôi ra ngoài gọi một chiếc taxi là được rồi.'},
     {sp:0,zh:'那你等等，我上楼去给你拿把伞。',py:'Nà nǐ děngdeng, wǒ shànglóu qù gěi nǐ ná bǎ sǎn.',vn:'Vậy bạn đợi chút, tôi lên lầu lấy cho bạn một cái ô.'},
     {sp:1,zh:'好的。我跟你一起上去吧。',py:'Hǎo de. Wǒ gēn nǐ yìqǐ shàngqu ba.',vn:'Được. Tôi cùng lên với bạn nhé.'},
     {sp:0,zh:'你在这儿等吧，我拿了伞就下来。',py:'Nǐ zài zhèr děng ba, wǒ nále sǎn jiù xiàlai.',vn:'Bạn đợi ở đây đi, tôi lấy ô xong là xuống ngay.'},
   ]},
  {scene:'在家 · Ở nhà',
   lines:[
     {sp:0,zh:'你看，我这么胖，怎么办呢？',py:'Nǐ kàn, wǒ zhème pàng, zěnme bàn ne?',vn:'Con xem, mẹ béo thế này, phải làm sao đây?'},
     {sp:1,zh:'你每天晚上吃了饭就睡觉，也不出去走走，能不胖吗？',py:'Nǐ měitiān wǎnshang chīle fàn jiù shuìjiào, yě bù chūqu zǒuzou, néng bú pàng ma?',vn:'Mẹ ngày nào cũng ăn cơm xong là đi ngủ, cũng không ra ngoài đi dạo, sao mà không béo được?'},
     {sp:0,zh:'其实我每天都运动。',py:'Qíshí wǒ měitiān dōu yùndòng.',vn:'Thật ra ngày nào mẹ cũng vận động đấy chứ.'},
     {sp:1,zh:'但是你一点儿也没瘦！你做什么运动了？',py:'Dànshì nǐ yìdiǎnr yě méi shòu! Nǐ zuò shénme yùndòng le?',vn:'Nhưng mẹ chẳng gầy đi tí nào! Mẹ vận động gì vậy?'},
     {sp:0,zh:'做饭啊。',py:'Zuò fàn a.',vn:'Nấu cơm chứ sao.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'腿',right:'疼'},
  {left:'一棵',right:'树'},
  {left:'很',right:'容易'},
  {left:'上山容易',right:'下山难'},
  {left:'一把',right:'伞'},
  {left:'一辆',right:'车'},
  {left:'王',right:'秘书'},
  {left:'李',right:'经理'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — tình huống MỚI dùng từ vựng bài học
// ══════════════════════════════════════════
var listenData = [
  {audio:'我今天腿疼，脚也疼，所以我们过去那边坐一下吧，那边树很多。',
   questions:[
     {q:'说话人现在怎么了？',opts:['腿疼，脚也疼','很胖','很忙','没有钱'],ans:0},
     {q:'他们打算做什么？',opts:['过去那边坐一下','回家睡觉','去公园运动','去买伞'],ans:0},
   ]},
  {audio:'喂，你好，请问王经理在吗？他出去办事了，下午回来，回来了就让他给我打个电话。',
   questions:[
     {q:'王经理现在在哪儿？',opts:['出去办事了','在办公室','在家里','在楼上'],ans:0},
     {q:'说话人希望秘书做什么？',opts:['让经理回来后打电话','让经理明天来','让经理买伞','让经理去楼上'],ans:0},
   ]},
  {audio:'外面下雨了，我去楼上拿把伞，你在这儿等我，我拿了伞就下来。',
   questions:[
     {q:'说话人要去做什么？',opts:['去楼上拿伞','去买东西','去办公室','去运动'],ans:0},
     {q:'他会怎么样？',opts:['拿了伞就下来','明天再下来','不下来了','忘记拿伞'],ans:0},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'我的',blank:'腿',post:'很长。',hint:'(chân, đùi)',ans:'腿'},
  {pre:'你哪儿',blank:'疼',post:'？',hint:'(đau)',ans:'疼'},
  {pre:'鞋太小了，我的',blank:'脚',post:'不舒服。',hint:'(bàn chân)',ans:'脚'},
  {pre:'那边',blank:'树',post:'多，我们过去坐一下吧。',hint:'(cây)',ans:'树'},
  {pre:'学汉语很',blank:'容易',post:'。',hint:'(dễ)',ans:'容易'},
  {pre:'写汉字很',blank:'难',post:'。',hint:'(khó)',ans:'难'},
  {pre:'她是我的',blank:'太太',post:'。',hint:'(vợ, bà)',ans:'太太'},
  {pre:'王',blank:'秘书',post:'在办公室。',hint:'(thư ký)',ans:'秘书'},
  {pre:'这儿有一',blank:'辆',post:'车。',hint:'(chiếc — xe cộ)',ans:'辆'},
  {pre:'你在几号',blank:'楼',post:'？',hint:'(tòa nhà)',ans:'楼'},
  {pre:'你手里',blank:'拿',post:'的是什么？',hint:'(cầm, lấy)',ans:'拿'},
  {pre:'他看起来很年轻，',blank:'其实',post:'已经40岁了。',hint:'(thực ra)',ans:'其实'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['我','现在','腿','也','疼','，','脚','也','疼','。'],ans:'我现在腿也疼，脚也疼。',audio:'我现在腿也疼，脚也疼。'},
  {words:['那边','树','多','，','我们','过去','坐','一下','吧','。'],ans:'那边树多，我们过去坐一下吧。',audio:'那边树多，我们过去坐一下吧。'},
  {words:['他','出去','办事','了','，','下午','回来','。'],ans:'他出去办事了，下午回来。',audio:'他出去办事了，下午回来。'},
  {words:['我','上楼','去','给','你','拿','把','伞','。'],ans:'我上楼去给你拿把伞。',audio:'我上楼去给你拿把伞。'},
  {words:['你','每天','晚上','吃','了','饭','就','睡觉','。'],ans:'你每天晚上吃了饭就睡觉。',audio:'你每天晚上吃了饭就睡觉。'},
  {words:['其实','我','每天','都','运动','。'],ans:'其实我每天都运动。',audio:'其实我每天都运动。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我去伞拿把。',
   opts:['我去拿把伞。','我去伞拿把。','我拿去把伞。','把伞我去拿。'],ans:0,
   exp:'把 + danh từ (把伞) là một cụm từ liền, phải đứng NGUYÊN VẸN sau động từ 拿, không tách rời.'},
  {wrong:'他回去家了。',
   opts:['他回家去了。','他回去家了。','他去回家了。','他家回去了。'],ans:0,
   exp:'Tân ngữ chỉ NƠI CHỐN (家) phải đứng GIỮA động từ và 来/去: 回 + 家 + 去, không đặt 去 trước 家.'},
  {wrong:'我拿了伞下来就。',
   opts:['我拿了伞就下来。','我拿了伞下来就。','我就拿了伞下来。','下来我拿了伞就。'],ans:0,
   exp:'Cấu trúc V了……就V…… : 就 phải đứng NGAY TRƯỚC động từ thứ hai (下来), không đặt sau nó.'},
  {wrong:'你每天晚上吃饭了就睡觉。',
   opts:['你每天晚上吃了饭就睡觉。','你每天晚上吃饭了就睡觉。','你每天晚上了吃饭就睡觉。','你每天晚上吃了就饭睡觉。'],ans:0,
   exp:'了 phải đứng NGAY SAU động từ 吃, trước tân ngữ 饭: 吃 + 了 + 饭, không đặt 了 sau tân ngữ.'},
  {wrong:'他到办公室了我就告诉他。',
   opts:['他到了办公室我就告诉他。','他到办公室了我就告诉他。','他了到办公室我就告诉他。','到了他办公室我就告诉他。'],ans:0,
   exp:'了 (biểu thị hành động hoàn thành) phải đứng ngay sau động từ 到, trước tân ngữ 办公室: 到 + 了 + 办公室.'},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI (dùng câu hỏi đọc-hiểu thật từ giáo trình)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'小丽现在怎么了？',
     q_vn:'Tiểu Lệ bây giờ thế nào?',
     hint:'腿也疼，脚也疼',
     sample:'小丽现在腿也疼，脚也疼。',
     sample_vn:'Tiểu Lệ bây giờ vừa đau chân vừa đau bàn chân.',
     note:'Dùng cấu trúc A也……，B也…… để liệt kê hai trạng thái xảy ra cùng lúc.'},
    {q_zh:'周经理去哪儿了？什么时候回来？',
     q_vn:'Giám đốc Chu đi đâu rồi? Khi nào về?',
     hint:'出去办事了，下午回来',
     sample:'周经理出去办事了，下午回来。',
     sample_vn:'Giám đốc Chu ra ngoài giải quyết việc, chiều về.',
     note:'出去 + 办事 = ra ngoài giải quyết công việc.'},
    {q_zh:'小丽怎么回去？',
     q_vn:'Tiểu Lệ về bằng cách nào?',
     hint:'叫辆出租车回去',
     sample:'小丽打算叫辆出租车回去。',
     sample_vn:'Tiểu Lệ định gọi một chiếc taxi để về.',
     note:'辆 là lượng từ cho xe cộ: 一辆车/一辆出租车.'},
    {q_zh:'周太太为什么这么胖？',
     q_vn:'Vì sao bà Chu lại béo như vậy?',
     hint:'每天晚上吃了饭就睡觉，也不出去走走',
     sample:'因为周太太每天晚上吃了饭就睡觉，也不出去走走。',
     sample_vn:'Vì bà Chu tối nào cũng ăn cơm xong là đi ngủ, cũng không ra ngoài đi dạo.',
     note:'Cấu trúc V了……就V…… diễn tả hai hành động liên tiếp xảy ra.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Chân tôi rất đau, chân cũng đau.', zh:'我的腿很疼，脚也疼。', py:'Wǒ de tuǐ hěn téng, jiǎo yě téng.'},
  {vi:'Học tiếng Trung rất dễ, nhưng viết chữ Hán rất khó.', zh:'学汉语很容易，但是写汉字很难。', py:'Xué Hànyǔ hěn róngyì, dànshì xiě Hànzì hěn nán.'},
  {vi:'Vợ tôi là thư ký, giám đốc của cô ấy rất bận.', zh:'我太太是秘书，她的经理很忙。', py:'Wǒ tàitai shì mìshū, tā de jīnglǐ hěn máng.'},
  {vi:'Văn phòng của tôi ở tòa nhà số năm.', zh:'我的办公室在五号楼。', py:'Wǒ de bàngōngshì zài wǔ hào lóu.'},
  {vi:'Bên ngoài có một chiếc xe, tôi đi lấy một cái ô rồi lên xe.', zh:'外边有一辆车，我去拿把伞就上车。', py:'Wàibian yǒu yí liàng chē, wǒ qù ná bǎ sǎn jiù shàng chē.'},
  {vi:'Trước đây anh ấy rất béo, bây giờ gầy hơn trước rồi.', zh:'以前他很胖，现在比以前瘦了。', py:'Yǐqián tā hěn pàng, xiànzài bǐ yǐqián shòu le.'},
  {vi:'Thật ra công việc này không khó, chỉ cần bạn cố gắng.', zh:'其实这个工作不难，只要你努力。', py:'Qíshí zhège gōngzuò bù nán, zhǐyào nǐ nǔlì.'},
  {vi:'Tôi tan làm xong là về nhà, về nhà xong là nấu cơm.', zh:'我下了班就回家，回了家就做饭。', py:'Wǒ xiàle bān jiù huí jiā, huíle jiā jiù zuò fàn.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Giám đốc Chu ra ngoài giải quyết việc rồi, chiều mới về.', zh:'周经理出去办事了，下午才回来。', py:'Zhōu jīnglǐ chūqu bànshì le, xiàwǔ cái huílai.'},
  {vi:'Anh ấy tối nào cũng ăn cơm xong là ngủ, không ra ngoài đi dạo, sao mà không béo được?', zh:'他每天晚上吃了饭就睡觉，不出去走走，能不胖吗？', py:'Tā měitiān wǎnshang chīle fàn jiù shuìjiào, bù chūqu zǒuzou, néng bú pàng ma?'},
  {vi:'Mưa to quá, tôi lên lầu lấy cho bạn một cái ô nhé.', zh:'雨下得真大，我上楼去给你拿把伞吧。', py:'Yǔ xià de zhēn dà, wǒ shànglóu qù gěi nǐ ná bǎ sǎn ba.'},
  {vi:'Cô thư ký nói giám đốc đến văn phòng là sẽ gọi điện ngay cho tôi.', zh:'秘书说经理到了办公室就会给我打电话。', py:'Mìshū shuō jīnglǐ dàole bàngōngshì jiù huì gěi wǒ dǎ diànhuà.'},
  {vi:'Bộ quần áo này hơi chật, tôi gầy đi rồi.', zh:'这件衣服有点儿瘦，我瘦了。', py:'Zhè jiàn yīfu yǒudiǎnr shòu, wǒ shòu le.'},
  {vi:'Ở đằng kia có nhiều cây, chúng ta đến đó ngồi nghỉ một chút đi, chân tôi đau chết đi được.', zh:'那边有很多树，我们过去坐一下吧，我的腿疼死了。', py:'Nàbiān yǒu hěn duō shù, wǒmen guòqu zuò yíxià ba, wǒ de tuǐ téngsǐle.'},
  {vi:'Tôi thấy công việc này nhìn thì khó, nhưng thực ra rất dễ.', zh:'我觉得这个工作看起来很难，其实很容易。', py:'Wǒ juéde zhège gōngzuò kànqǐlai hěn nán, qíshí hěn róngyì.'},
  {vi:'Anh muốn gọi một chiếc taxi về hay là để tôi đưa anh về?', zh:'你想叫辆出租车回去，还是让我送你回去？', py:'Nǐ xiǎng jiào liàng chūzūchē huíqu, háishi ràng wǒ sòng nǐ huíqu?'},
];
