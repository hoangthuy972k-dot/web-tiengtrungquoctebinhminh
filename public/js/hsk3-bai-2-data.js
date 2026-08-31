// ══════════════════════════════════════════
// DATA — HSK3 Bài 2: 他什么时候回来 (When will he come back)
// Nguồn: PPT gốc HSK3 第2课《他什么时候回来》【Lucy制作】
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'腿',py:'tuǐ',pos:'Danh từ',vn:'chân, đùi',em:'🦵',lesson:1,
   explain:['Bộ phận cơ thể tính từ hông đến bàn chân (gồm đùi và cẳng chân), dùng để đứng và di chuyển.'],
   usage:'Danh từ chỉ bộ phận cơ thể, làm chủ ngữ hoặc định ngữ. Muốn nói bộ phận đó bị đau thì đặt 腿 TRƯỚC tính từ 疼: 腿 + 疼.',
   collo:['长腿','短腿','腿疼','我的腿'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì hôm qua đi bộ nhiều nên bây giờ chân tôi rất đau.',answer:'因为昨天走了很多路，所以我的腿现在很疼。',answerPy:'Yīnwèi zuótiān zǒule hěn duō lù, suǒyǐ wǒ de tuǐ xiànzài hěn téng.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Tuy chân anh ấy dài nhưng anh ấy chạy không nhanh.',answer:'虽然他的腿很长，但是他跑得不快。',answerPy:'Suīrán tā de tuǐ hěn cháng, dànshì tā pǎo de bú kuài.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:2,zh:'疼',py:'téng',pos:'Tính từ',vn:'đau, đau đớn',em:'🤕',lesson:1,
   explain:['Cảm giác khó chịu, nhức nhối ở một bộ phận cơ thể do bị thương, bệnh, hoặc mệt mỏi.'],
   usage:'Tính từ chỉ cảm giác, luôn đứng SAU danh từ chỉ bộ phận cơ thể: [bộ phận cơ thể] + 疼 (không đảo ngược thứ tự).',
   collo:['头疼','腿疼','肚子疼','脚疼'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì tôi đau đầu nên tôi không muốn đi làm hôm nay.',answer:'因为我头疼，所以我今天不想上班。',answerPy:'Yīnwèi wǒ tóuténg, suǒyǐ wǒ jīntiān bù xiǎng shàngbān.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bụng bạn còn đau thì bạn nên đi khám bác sĩ.',answer:'如果你的肚子还疼，你就应该去看医生。',answerPy:'Rúguǒ nǐ de dùzi hái téng, nǐ jiù yīnggāi qù kàn yīshēng.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:3,zh:'脚',py:'jiǎo',pos:'Danh từ',vn:'chân, bàn chân',em:'🦶',lesson:1,
   explain:['Phần dưới cùng của chân, tiếp xúc trực tiếp với mặt đất khi đứng/đi — khác với 腿 (chỉ toàn bộ chân từ hông trở xuống).'],
   usage:'Danh từ chỉ bộ phận cơ thể; lượng từ đi kèm là 只 (một chiếc) hoặc 双 (một đôi): 一只脚 / 一双脚.',
   collo:['左脚','右脚','一双脚','脚疼'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì giày mới hơi chật nên bàn chân tôi rất khó chịu.',answer:'因为新鞋有点儿小，所以我的脚很不舒服。',answerPy:'Yīnwèi xīn xié yǒudiǎnr xiǎo, suǒyǐ wǒ de jiǎo hěn bù shūfu.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Tuy bàn chân trái của tôi nhỏ nhưng bàn chân phải lại to hơn.',answer:'虽然我的左脚很小，但是右脚更大。',answerPy:'Suīrán wǒ de zuǒjiǎo hěn xiǎo, dànshì yòujiǎo gèng dà.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:4,zh:'树',py:'shù',pos:'Danh từ',vn:'cây',em:'🌳',lesson:1,
   explain:['Loài thực vật thân gỗ, có rễ, thân, cành, lá — thường mọc cao lớn ngoài trời.'],
   usage:'Danh từ; lượng từ CHUYÊN DÙNG là 棵 (không dùng 个): 一棵树, không nói 一个树.',
   collo:['大树','小树','一棵树','种树'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì trời nắng to nên chúng tôi ngồi nghỉ dưới một cái cây.',answer:'因为天气很热，所以我们坐在一棵树下休息。',answerPy:'Yīnwèi tiānqì hěn rè, suǒyǐ wǒmen zuò zài yì kē shù xià xiūxi.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu đằng kia có nhiều cây thì chúng ta nên qua đó chụp ảnh.',answer:'如果那边有很多树，我们就应该过去拍照。',answerPy:'Rúguǒ nàbiān yǒu hěn duō shù, wǒmen jiù yīnggāi guòqu pāizhào.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:5,zh:'容易',py:'róngyì',pos:'Tính từ',vn:'dễ, dễ dàng',em:'✅',lesson:1,
   explain:['Không tốn nhiều công sức, thời gian hay khó khăn để thực hiện hoặc hiểu.'],
   usage:'Tính từ song âm tiết. Khi làm vị ngữ cần có phó từ mức độ (很/太) đứng TRƯỚC: 很容易 (không nói trơn 容易). Khi bổ nghĩa cho động từ: 容易 + V = dễ làm gì (容易学).',
   collo:['很容易','太容易了','容易学','容易做'],
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
   checkList:[
     {promptLang:'vi',prompt:'Tuy bài kiểm tra này rất dễ nhưng vẫn có vài bạn làm sai.',answer:'虽然这次考试很容易，但是还有几个同学做错了。',answerPy:'Suīrán zhè cì kǎoshì hěn róngyì, dànshì hái yǒu jǐ ge tóngxué zuòcuò le.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
     {promptLang:'vi',prompt:'Vì công việc này rất dễ nên tôi làm xong rất nhanh.',answer:'因为这个工作很容易，所以我很快就做完了。',answerPy:'Yīnwèi zhège gōngzuò hěn róngyì, suǒyǐ wǒ hěn kuài jiù zuòwán le.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:6,zh:'难',py:'nán',pos:'Tính từ',vn:'khó',em:'❌',lesson:1,
   explain:['Cần nhiều công sức, khó thực hiện hoặc khó hiểu — trái nghĩa với 容易.'],
   usage:'Tính từ, cách dùng đối xứng với 容易: 很难 (làm vị ngữ); 难 + V = khó làm gì (难写, 难学).',
   collo:['很难','难写','难学','难做'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì bài này quá khó nên tôi phải hỏi thầy giáo.',answer:'因为这道题太难了，所以我得问老师。',answerPy:'Yīnwèi zhè dào tí tài nán le, suǒyǐ wǒ děi wèn lǎoshī.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu chữ Hán khó nhớ thì bạn nên viết nhiều lần.',answer:'如果汉字难记，你就应该多写几遍。',answerPy:'Rúguǒ Hànzì nán jì, nǐ jiù yīnggāi duō xiě jǐ biàn.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:7,zh:'太太',py:'tàitai',pos:'Danh từ',vn:'bà, vợ, phu nhân',em:'👩',lesson:2,
   explain:['1. Người vợ (cách nói lịch sự, trang trọng).','2. Cách xưng hô lịch sự với phụ nữ đã có chồng, đi kèm họ.'],
   usage:'Danh từ. Khi dùng làm cách xưng hô lịch sự, đặt SAU họ của người đó: Họ + 太太 (周太太 = bà Chu).',
   collo:['我太太','他太太','周太太','李太太'],
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
   checkList:[
     {promptLang:'vi',prompt:'Tuy vợ anh ấy rất bận nhưng cô ấy vẫn nấu cơm mỗi ngày.',answer:'虽然他太太很忙，但是她每天还是做饭。',answerPy:'Suīrán tā tàitai hěn máng, dànshì tā měitiān háishi zuò fàn.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
     {promptLang:'vi',prompt:'Vì bà Chu không có ở nhà nên tôi đã gọi điện cho bà ấy.',answer:'因为周太太不在家，所以我给她打了个电话。',answerPy:'Yīnwèi Zhōu tàitai bú zài jiā, suǒyǐ wǒ gěi tā dǎle ge diànhuà.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
   ]},

  {n:8,zh:'秘书',py:'mìshū',pos:'Danh từ',vn:'thư ký',em:'📋',lesson:2,
   explain:['Người phụ trách công việc văn phòng, giấy tờ, sắp xếp lịch làm việc cho cấp trên.'],
   usage:'Danh từ chức danh; đặt SAU họ để xưng hô: Họ + 秘书 (王秘书 = thư ký Vương).',
   collo:['王秘书','我的秘书','秘书处'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì giám đốc ra ngoài rồi nên thư ký bảo tôi chiều quay lại.',answer:'因为经理出去了，所以秘书让我下午再来。',answerPy:'Yīnwèi jīnglǐ chūqu le, suǒyǐ mìshū ràng wǒ xiàwǔ zài lái.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bạn muốn gặp giám đốc thì bạn nên hỏi thư ký trước.',answer:'如果你想见经理，你就应该先问秘书。',answerPy:'Rúguǒ nǐ xiǎng jiàn jīnglǐ, nǐ jiù yīnggāi xiān wèn mìshū.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:9,zh:'经理',py:'jīnglǐ',pos:'Danh từ',vn:'giám đốc, quản lý',em:'👔',lesson:2,
   explain:['Người đứng đầu, phụ trách quản lý, điều hành công việc của một công ty/bộ phận.'],
   usage:'Danh từ chức danh; đặt SAU họ để xưng hô: Họ + 经理 (张经理, 李经理).',
   collo:['张经理','李经理','总经理'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì giám đốc Lý rất bận nên anh ấy không thể gặp bạn hôm nay.',answer:'因为李经理很忙，所以他今天不能见你。',answerPy:'Yīnwèi Lǐ jīnglǐ hěn máng, suǒyǐ tā jīntiān bù néng jiàn nǐ.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Tuy giám đốc Trương đi ra ngoài nhưng chiều nay anh ấy sẽ về.',answer:'虽然张经理出去了，但是他今天下午会回来。',answerPy:'Suīrán Zhāng jīnglǐ chūqu le, dànshì tā jīntiān xiàwǔ huì huílai.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:10,zh:'办公室',py:'bàngōngshì',pos:'Danh từ',vn:'văn phòng',em:'🏢',lesson:2,
   explain:['Căn phòng dùng để làm việc, xử lý công việc hành chính, giấy tờ.'],
   usage:'Danh từ chỉ nơi chốn; thường đi cùng giới từ 在 khi nói làm gì TẠI văn phòng: 在 + 办公室 + Động từ.',
   collo:['在办公室','我的办公室','办公室主任'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì văn phòng của tôi ở tòa nhà số năm nên bạn dễ tìm thấy.',answer:'因为我的办公室在五号楼，所以你很容易找到。',answerPy:'Yīnwèi wǒ de bàngōngshì zài wǔ hào lóu, suǒyǐ nǐ hěn róngyì zhǎodào.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bạn có việc thì có thể đến văn phòng tìm tôi.',answer:'如果你有事，就可以去办公室找我。',answerPy:'Rúguǒ nǐ yǒu shì, jiù kěyǐ qù bàngōngshì zhǎo wǒ.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:11,zh:'周',py:'Zhōu',pos:'Danh từ riêng',vn:'họ Chu',em:'👨',lesson:2,
   explain:['Một họ (tên riêng) của người Trung Quốc, tương đương họ "Chu" trong tiếng Việt.'],
   usage:'Danh từ riêng, dùng làm họ đứng TRƯỚC tên hoặc chức danh: 周 + tên (周明) hoặc 周 + chức danh (周经理).',
   collo:['周明','周经理','周太太'],
   ex_zh:'请问周明在吗？',ex_py:'Qǐngwèn Zhōu Míng zài ma?',ex_vn:'Xin hỏi anh Chu Minh có ở đó không?',
   exList:[
     {zh:'请问周明在吗？',py:'Qǐngwèn Zhōu Míng zài ma?',vn:'Xin hỏi anh Chu Minh có ở đó không?'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì anh Chu không có ở văn phòng nên tôi đã gọi điện cho anh ấy.',answer:'因为周先生不在办公室，所以我给他打了个电话。',answerPy:'Yīnwèi Zhōu xiānsheng bú zài bàngōngshì, suǒyǐ wǒ gěi tā dǎle ge diànhuà.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu anh gặp anh Chu thì hãy nói tôi đang tìm anh ấy.',answer:'如果你见到周先生，就告诉他我在找他。',answerPy:'Rúguǒ nǐ jiàndào Zhōu xiānsheng, jiù gàosu tā wǒ zài zhǎo tā.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:12,zh:'周明',py:'Zhōu Míng',pos:'Danh từ riêng',vn:'tên người (Chu Minh)',em:'🙋',lesson:2,
   explain:['Tên đầy đủ (họ + tên) của một nhân vật trong bài hội thoại.'],
   usage:'Danh từ riêng chỉ tên người, dùng làm chủ ngữ hoặc tân ngữ trong câu như một danh từ bình thường.',
   ex_zh:'周经理出去了，不在办公室。',ex_py:'Zhōu jīnglǐ chūqu le, bú zài bàngōngshì.',ex_vn:'Giám đốc Chu ra ngoài rồi, không có ở văn phòng.',
   exList:[
     {zh:'周经理出去了，不在办公室。',py:'Zhōu jīnglǐ chūqu le, bú zài bàngōngshì.',vn:'Giám đốc Chu ra ngoài rồi, không có ở văn phòng.'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì anh Chu Minh ra ngoài giải quyết việc nên chiều nay mới về.',answer:'因为周明出去办事了，所以今天下午才回来。',answerPy:'Yīnwèi Zhōu Míng chūqu bànshì le, suǒyǐ jīntiān xiàwǔ cái huílai.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu anh Chu Minh về thì hãy bảo anh ấy gọi điện cho tôi.',answer:'如果周明回来了，就让他给我打电话。',answerPy:'Rúguǒ Zhōu Míng huílai le, jiù ràng tā gěi wǒ dǎ diànhuà.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:13,zh:'辆',py:'liàng',pos:'Lượng từ',vn:'chiếc (xe cộ)',em:'🚗',lesson:3,
   explain:['Lượng từ chuyên dùng để đếm số lượng xe cộ (ô tô, xe buýt, taxi...).'],
   usage:'Lượng từ, đứng giữa SỐ TỪ và DANH TỪ chỉ xe: [số từ] + 辆 + [xe] (一辆车, 几辆公共汽车).',
   collo:['一辆车','两辆','几辆','一辆出租车'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì trời mưa to nên tôi gọi một chiếc taxi để về nhà.',answer:'因为雨下得很大，所以我叫了一辆出租车回家。',answerPy:'Yīnwèi yǔ xià de hěn dà, suǒyǐ wǒ jiàole yí liàng chūzūchē huí jiā.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bạn không có xe thì chúng ta có thể đi chung một chiếc.',answer:'如果你没有车，我们就可以坐一辆车一起去。',answerPy:'Rúguǒ nǐ méiyǒu chē, wǒmen jiù kěyǐ zuò yí liàng chē yìqǐ qù.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:14,zh:'楼',py:'lóu',pos:'Danh từ',vn:'lầu, tòa nhà',em:'🏬',lesson:3,
   explain:['1. Tòa nhà nhiều tầng.','2. Tầng (lầu) trong một tòa nhà.'],
   usage:'Danh từ. Hỏi số tòa nhà dùng 几号楼; chỉ hướng lên/xuống tầng dùng 上楼/下楼, 楼上/楼下.',
   collo:['大楼','几号楼','上楼','下楼','楼上','楼下'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì thang máy hỏng nên chúng tôi phải đi bộ lên lầu.',answer:'因为电梯坏了，所以我们得走上楼。',answerPy:'Yīnwèi diàntī huài le, suǒyǐ wǒmen děi zǒushàng lóu.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bạn tìm không thấy phòng tôi thì cứ hỏi ở tòa nhà số ba.',answer:'如果你找不到我的房间，就在三号楼问一下。',answerPy:'Rúguǒ nǐ zhǎo bú dào wǒ de fángjiān, jiù zài sān hào lóu wèn yíxià.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:15,zh:'拿',py:'ná',pos:'Động từ',vn:'cầm, lấy',em:'🤲',lesson:3,
   explain:['Dùng tay giữ hoặc mang lấy một vật gì đó.'],
   usage:'Động từ, theo sau là tân ngữ chỉ vật được cầm/lấy: 拿 + [vật] (拿书, 拿钱, 拿伞).',
   collo:['拿书','拿钱','拿伞','拿东西'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì trời sắp mưa nên tôi lên lầu lấy một cái ô.',answer:'因为要下雨了，所以我上楼拿了一把伞。',answerPy:'Yīnwèi yào xiàyǔ le, suǒyǐ wǒ shànglóu nále yì bǎ sǎn.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bạn cần tiền thì cứ lấy trong túi tôi.',answer:'如果你需要钱，就在我包里拿吧。',answerPy:'Rúguǒ nǐ xūyào qián, jiù zài wǒ bāo lǐ ná ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:16,zh:'把',py:'bǎ',pos:'Lượng từ',vn:'cái, chiếc (đồ có tay cầm)',em:'🖐️',lesson:3,
   explain:['Lượng từ dùng cho các đồ vật có tay cầm hoặc dùng bằng tay (ô, dao, ghế, quạt...).'],
   usage:'Lượng từ, đứng giữa SỐ TỪ và DANH TỪ: [số từ] + 把 + [đồ vật] (一把伞, 一把椅子).',
   collo:['一把伞','一把椅子','一把刀','一把扇子'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì trên bàn có nhiều dao nên tôi không biết lấy chiếc nào.',answer:'因为桌子上有很多把刀，所以我不知道拿哪把。',answerPy:'Yīnwèi zhuōzi shang yǒu hěn duō bǎ dāo, suǒyǐ wǒ bù zhīdào ná nǎ bǎ.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu ghế không đủ thì chúng ta mua thêm vài chiếc.',answer:'如果椅子不够，我们就再买几把。',answerPy:'Rúguǒ yǐzi bú gòu, wǒmen jiù zài mǎi jǐ bǎ.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:17,zh:'伞',py:'sǎn',pos:'Danh từ',vn:'cái ô, dù',em:'☂️',lesson:3,
   explain:['Vật dụng có cán và phần vải xòe tròn, dùng để che mưa hoặc che nắng.'],
   usage:'Danh từ; lượng từ đi kèm là 把: 一把伞. Phân biệt 雨伞 (ô che mưa) và 太阳伞 (ô che nắng).',
   collo:['雨伞','太阳伞','一把伞'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì bên ngoài đang mưa nên tôi mượn bạn một cái ô.',answer:'因为外面正在下雨，所以我跟你借一把伞。',answerPy:'Yīnwèi wàimian zhèngzài xiàyǔ, suǒyǐ wǒ gēn nǐ jiè yì bǎ sǎn.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Nếu bạn quên mang ô thì bạn có thể bị ướt hết người.',answer:'如果你忘了带伞，你就可能全身都湿了。',answerPy:'Rúguǒ nǐ wàngle dài sǎn, nǐ jiù kěnéng quánshēn dōu shī le.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:18,zh:'胖',py:'pàng',pos:'Tính từ',vn:'béo, mập',em:'🐷',lesson:4,
   explain:['Có nhiều thịt/mỡ trên cơ thể, thân hình to lớn — trái nghĩa với 瘦 (gầy).'],
   usage:'Tính từ; làm vị ngữ với 很 (很胖); nói mức độ tăng cân dùng 胖 + 了 + số lượng: 胖了5公斤.',
   collo:['很胖','胖了','这么胖'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì gần đây ăn nhiều nên tôi béo lên vài cân.',answer:'因为最近吃得很多，所以我胖了几公斤。',answerPy:'Yīnwèi zuìjìn chī de hěn duō, suǒyǐ wǒ pàngle jǐ gōngjīn.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Tuy anh ấy ăn rất ít nhưng vẫn rất béo.',answer:'虽然他吃得很少，但是还是很胖。',answerPy:'Suīrán tā chī de hěn shǎo, dànshì háishi hěn pàng.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},

  {n:19,zh:'其实',py:'qíshí',pos:'Phó từ',vn:'thực ra, thật ra',em:'💬',lesson:4,
   explain:['Dùng để đính chính, bổ sung một sự thật khác với điều vừa nói/nghĩ trước đó.'],
   usage:'Phó từ, đứng ở ĐẦU CÂU hoặc NGAY SAU chủ ngữ, TRƯỚC động từ/tính từ: 其实 + [câu], hoặc [Chủ ngữ] + 其实 + [vị ngữ].',
   collo:['其实……','他其实……','其实很容易'],
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
   checkList:[
     {promptLang:'vi',prompt:'Mọi người nghĩ tôi rất bận, nhưng thực ra tôi có nhiều thời gian rảnh.',answer:'大家觉得我很忙，但其实我有很多空儿。',answerPy:'Dàjiā juéde wǒ hěn máng, dàn qíshí wǒ yǒu hěn duō kòngr.',
      note:'但其实…… đính chính lại điều mọi người nghĩ trước đó.'},
     {promptLang:'vi',prompt:'Câu hỏi này nhìn có vẻ khó, nhưng thực ra rất đơn giản.',answer:'这个问题看起来很难，但其实很简单。',answerPy:'Zhège wèntí kànqǐlai hěn nán, dàn qíshí hěn jiǎndān.',
      note:'V起来 + tính từ = nhìn/thấy có vẻ như thế nào; 但其实…… đính chính lại.'},
   ]},

  {n:20,zh:'瘦',py:'shòu',pos:'Tính từ',vn:'gầy, ốm',em:'📉',lesson:4,
   explain:['1. Ít thịt/mỡ trên cơ thể, thân hình nhỏ, mảnh — trái nghĩa 胖.','2. Quần áo bó sát, chật.'],
   usage:'Tính từ; làm vị ngữ với 很/有点儿: 很瘦, 有点儿瘦; nói mức độ giảm cân dùng 瘦 + 了: 瘦了.',
   collo:['很瘦','瘦了','有点儿瘦'],
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
   checkList:[
     {promptLang:'vi',prompt:'Vì cô ấy tập thể thao mỗi ngày nên bây giờ gầy hơn trước rất nhiều.',answer:'因为她每天运动，所以现在比以前瘦多了。',answerPy:'Yīnwèi tā měitiān yùndòng, suǒyǐ xiànzài bǐ yǐqián shòu duō le.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Tuy bộ quần áo này hơi chật nhưng tôi vẫn rất thích nó.',answer:'虽然这件衣服有点儿瘦，但是我还是很喜欢它。',answerPy:'Suīrán zhè jiàn yīfu yǒudiǎnr shòu, dànshì wǒ háishi hěn xǐhuan tā.',
      note:'虽然……但是…… diễn tả sự tương phản.'},
   ]},
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
   preQuiz:[
     {q:'说话人A现在怎么了？',opts:['腿疼，脚也疼','很饿','很渴'],ans:0},
     {q:'他们打算去哪儿休息一下？',opts:['树多的地方','山顶','车里'],ans:0},
     {q:'根据对话，上山和下山哪个更难？',opts:['下山更难','上山更难','一样难'],ans:0},
   ],
   lines:[
     {sp:0,zh:'休息一下吧。',py:'Xiūxi yíxià ba.',vn:'Nghỉ một chút đi.'},
     {sp:1,zh:'怎么了？',py:'Zěnme le?',vn:'Sao vậy?'},
     {sp:0,zh:'我现在腿也疼，脚也疼。',py:'Wǒ xiànzài tuǐ yě téng, jiǎo yě téng.',vn:'Bây giờ tôi vừa đau chân vừa đau bàn chân.'},
     {sp:1,zh:'好，那边树多，我们过去坐一下吧。',py:'Hǎo, nàbiān shù duō, wǒmen guòqu zuò yíxià ba.',vn:'Được, đằng kia nhiều cây, chúng ta qua đó ngồi một chút đi.'},
     {sp:0,zh:'上来的时候我怎么没觉得这么累？',py:'Shànglái de shíhou wǒ zěnme méi juéde zhème lèi?',vn:'Lúc lên núi sao tôi lại không thấy mệt thế này nhỉ?'},
     {sp:1,zh:'上山容易下山难，你不知道？',py:'Shàng shān róngyì xià shān nán, nǐ bù zhīdào?',vn:'Lên núi dễ xuống núi khó, bạn không biết à?'},
   ]},
  {scene:'在打电话 · Đang gọi điện thoại',
   preQuiz:[
     {q:'周经理现在在哪儿？',opts:['出去办事了','在办公室','在家里'],ans:0},
     {q:'周经理什么时候回来？',opts:['下午','晚上','明天'],ans:0},
     {q:'说话人希望周经理回来后做什么？',opts:['给他打电话','去他家','写信'],ans:0},
   ],
   lines:[
     {sp:0,zh:'喂，你好，请问周明在吗？',py:'Wèi, nǐ hǎo, qǐngwèn Zhōu Míng zài ma?',vn:'Alô, xin chào, cho hỏi anh Chu Minh có ở đó không?'},
     {sp:1,zh:'周经理出去了，不在办公室。',py:'Zhōu jīnglǐ chūqu le, bú zài bàngōngshì.',vn:'Giám đốc Chu ra ngoài rồi, không có ở văn phòng.'},
     {sp:0,zh:'他去哪儿了？什么时候回来？',py:'Tā qù nǎr le? Shénme shíhou huílai?',vn:'Anh ấy đi đâu rồi? Khi nào về?'},
     {sp:1,zh:'他出去办事了，下午回来。',py:'Tā chūqu bànshì le, xiàwǔ huílai.',vn:'Anh ấy ra ngoài giải quyết việc, chiều về.'},
     {sp:0,zh:'回来了就让他给我打个电话。',py:'Huílai le jiù ràng tā gěi wǒ dǎ ge diànhuà.',vn:'Về rồi thì bảo anh ấy gọi điện cho tôi.'},
     {sp:1,zh:'好的，他到了办公室我就告诉他。',py:'Hǎo de, tā dàole bàngōngshì wǒ jiù gàosu tā.',vn:'Vâng, anh ấy đến văn phòng là tôi báo ngay cho anh ấy.'},
   ]},
  {scene:'在楼门口送朋友 · Tiễn bạn ở cửa tòa nhà',
   preQuiz:[
     {q:'外面天气怎么样？',opts:['雨下得很大','很晴朗','刮大风'],ans:0},
     {q:'朋友打算怎么回去？',opts:['叫出租车','走路','骑自行车'],ans:0},
     {q:'说话人上楼去做什么？',opts:['拿伞','拿钱','拿手机'],ans:0},
   ],
   lines:[
     {sp:0,zh:'雨下得真大。你怎么回去？我送你吧。',py:'Yǔ xià de zhēn dà. Nǐ zěnme huíqu? Wǒ sòng nǐ ba.',vn:'Mưa to quá. Bạn về bằng gì? Để tôi đưa bạn về.'},
     {sp:1,zh:'没事，我出去叫辆出租车就行了。',py:'Méishì, wǒ chūqu jiào liàng chūzūchē jiù xíng le.',vn:'Không sao, tôi ra ngoài gọi một chiếc taxi là được rồi.'},
     {sp:0,zh:'那你等等，我上楼去给你拿把伞。',py:'Nà nǐ děngdeng, wǒ shànglóu qù gěi nǐ ná bǎ sǎn.',vn:'Vậy bạn đợi chút, tôi lên lầu lấy cho bạn một cái ô.'},
     {sp:1,zh:'好的。我跟你一起上去吧。',py:'Hǎo de. Wǒ gēn nǐ yìqǐ shàngqu ba.',vn:'Được. Tôi cùng lên với bạn nhé.'},
     {sp:0,zh:'你在这儿等吧，我拿了伞就下来。',py:'Nǐ zài zhèr děng ba, wǒ nále sǎn jiù xiàlai.',vn:'Bạn đợi ở đây đi, tôi lấy ô xong là xuống ngay.'},
   ]},
  {scene:'在家 · Ở nhà',
   preQuiz:[
     {q:'说话人B觉得说话人A为什么会胖？',opts:['吃了饭就睡觉，不出去走走','吃得太多','不吃早饭'],ans:0},
     {q:'说话人A说自己每天做什么运动？',opts:['做饭','跑步','游泳'],ans:0},
     {q:'说话人B相信说话人A真的有运动吗？',opts:['不相信','相信','不知道'],ans:0},
   ],
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
  {left:'脚',right:'疼'},
  {left:'一双',right:'脚'},
  {left:'很',right:'难'},
  {left:'一辆',right:'出租车'},
  {left:'张',right:'经理'},
  {left:'周',right:'太太'},
  {left:'一把',right:'椅子'},
  {left:'上',right:'楼'},
  {left:'因为他工作很忙，',right:'所以没有时间休息。'},
  {left:'虽然他很瘦，',right:'但是身体很好。'},
  {left:'如果你忙，',right:'就不用来了。'},
  {left:'秘书接了电话，',right:'就告诉经理。'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 2)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ (nghe rồi gõ lại
//    phần còn thiếu), vì trang không có giao diện chọn tranh/đúng-sai.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM (nghe hội
//    thoại, chọn A/B/C), giữ nguyên đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-2/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'女', pre:'', blank:'真没想到，你现在这么瘦', post:'！',
       py:'Zhēn méi xiǎngdào, nǐ xiànzài zhème shòu!', vn:'Thật không ngờ, bạn bây giờ gầy thế này!'},
      {speaker:'男', pre:'这几年我一直在运动，', blank:'每天都跑步', post:'，能不瘦吗？',
       py:'Zhè jǐ nián wǒ yìzhí zài yùndòng, měitiān dōu pǎobù, néng bú shòu ma?', vn:'Mấy năm nay tôi luôn vận động, ngày nào cũng chạy bộ, sao mà không gầy được?'},
    ]},
    {num:2, lines:[
      {speaker:'女', pre:'', blank:'周经理，您找我', post:'？',
       py:'Zhōu jīnglǐ, nín zhǎo wǒ?', vn:'Giám đốc Chu, ngài tìm em ạ?'},
      {speaker:'男', pre:'对，小方，你快上来，', blank:'来我办公室', post:'。',
       py:'Duì, Xiǎofāng, nǐ kuài shànglái, lái wǒ bàngōngshì.', vn:'Đúng rồi, Tiểu Phương, em lên nhanh đi, đến văn phòng của anh.'},
    ]},
    {num:3, lines:[
      {speaker:'男', pre:'', blank:'天气太冷了，回来时别坐公共汽车了', post:'。',
       py:'Tiānqì tài lěng le, huílai shí bié zuò gōnggòng qìchē le.', vn:'Trời lạnh quá, lúc về đừng đi xe buýt nữa.'},
      {speaker:'女', pre:'我叫到一辆出租车，', blank:'正准备上车呢', post:'。',
       py:'Wǒ jiàodào yí liàng chūzūchē, zhèng zhǔnbèi shàngchē ne.', vn:'Em gọi được một chiếc taxi rồi, đang chuẩn bị lên xe đây.'},
    ]},
    {num:4, lines:[
      {speaker:'男', pre:'', blank:'怎么下雨了？我没带伞', post:'。',
       py:'Zěnme xiàyǔ le? Wǒ méi dài sǎn.', vn:'Sao lại mưa rồi? Tôi không mang ô.'},
      {speaker:'女', pre:'', blank:'我也没带', post:'。',
       py:'Wǒ yě méi dài.', vn:'Tôi cũng không mang.'},
    ]},
    {num:5, lines:[
      {speaker:'男', pre:'', blank:'你怎么了？怎么不跑了', post:'？',
       py:'Nǐ zěnme le? Zěnme bù pǎo le?', vn:'Bạn sao vậy? Sao không chạy nữa?'},
      {speaker:'女', pre:'今天不知道怎么了，', blank:'脚一直疼', post:'。',
       py:'Jīntiān bù zhīdào zěnme le, jiǎo yìzhí téng.', vn:'Hôm nay không biết sao nữa, chân cứ đau mãi.'},
    ]},
    {num:6, lines:[
      {pre:'乐乐，你出来的时候带把伞，', blank:'外边下雨呢', post:'。',
       py:'Lèle, nǐ chūlai de shíhou dài bǎ sǎn, wàibian xiàyǔ ne.', vn:'Lạc Lạc, lúc con ra ngoài nhớ mang theo ô, bên ngoài đang mưa đấy.'},
    ]},
    {num:7, lines:[
      {pre:'王经理，您别着急，', blank:'我现在就上楼去', post:'。',
       py:'Wáng jīnglǐ, nín bié zháojí, wǒ xiànzài jiù shànglóu qù.', vn:'Giám đốc Vương, ngài đừng vội, em lên lầu ngay bây giờ đây.'},
    ]},
    {num:8, lines:[
      {pre:'你在这儿等我一下，', blank:'我上去拿了钱就下来', post:'。',
       py:'Nǐ zài zhèr děng wǒ yíxià, wǒ shàngqu nále qián jiù xiàlai.', vn:'Bạn đợi tôi ở đây một chút, tôi lên lấy tiền xong là xuống ngay.'},
    ]},
    {num:9, lines:[
      {pre:'我们快点儿进去喝杯热咖啡吧，', blank:'这儿太冷了', post:'。',
       py:'Wǒmen kuài diǎnr jìnqu hē bēi rè kāfēi ba, zhèr tài lěng le.', vn:'Chúng ta mau vào trong uống ly cà phê nóng đi, ở đây lạnh quá.'},
    ]},
    {num:10, lines:[
      {pre:'同学们，你们快过来，', blank:'到树下坐坐', post:'。',
       py:'Tóngxuémen, nǐmen kuài guòlai, dào shù xià zuòzuo.', vn:'Các bạn ơi, mọi người mau lại đây, đến ngồi dưới gốc cây một chút.'},
    ]},
  ],
  mc: [
    {num:11, options:['做饭','吃饭','打电话'], ans:1,
     lines:[
       {speaker:'女', pre:'饭', blank:'做好了', post:'，快过来吃。', py:'Fàn zuòhǎo le, kuài guòlai chī.', vn:'Cơm nấu xong rồi, mau lại ăn đi.'},
       {speaker:'男', pre:'好，我打了电话就', blank:'过去', post:'。', py:'Hǎo, wǒ dǎle diànhuà jiù guòqu.', vn:'Được, tôi gọi điện xong là qua ngay.'},
     ],
     explain:'女：饭做好了，快过来吃。男：好，我打了电话就过去。问：女的让男的做什么？ → 吃饭。'},
    {num:12, options:['公司','医院','学校'], ans:0,
     lines:[
       {speaker:'男', pre:'请问，方经理的办公室怎么', blank:'走', post:'？', py:'Qǐngwèn, Fāng jīnglǐ de bàngōngshì zěnme zǒu?', vn:'Xin hỏi, văn phòng giám đốc Phương đi thế nào ạ?'},
       {speaker:'女', pre:'他外出办事了，现在', blank:'不在', post:'。', py:'Tā wàichū bànshì le, xiànzài bú zài.', vn:'Anh ấy ra ngoài giải quyết việc rồi, bây giờ không có ở đây.'},
     ],
     explain:'男：请问，方经理的办公室怎么走？女：就在前边，右边第二个房间，1202。他外出办事了，现在不在。问：他们可能在哪儿？ → 公司 (vì hỏi thăm văn phòng của một giám đốc).'},
    {num:13, options:['老师和学生','丈夫和妻子','经理和秘书'], ans:1,
     lines:[
       {speaker:'女', pre:'每天坐车上班时间太长了，我们也', blank:'买辆车吧', post:'。', py:'Měitiān zuò chē shàngbān shíjiān tài cháng le, wǒmen yě mǎi liàng chē ba.', vn:'Ngày nào cũng đi xe đi làm mất nhiều thời gian quá, hay là mình cũng mua xe đi.'},
       {speaker:'男', pre:'行啊，买了车我就每天', blank:'送你上班', post:'。', py:'Xíng a, mǎile chē wǒ jiù měitiān sòng nǐ shàngbān.', vn:'Được thôi, mua xe xong là ngày nào anh cũng đưa em đi làm.'},
     ],
     explain:'女：每天坐车上班时间太长了，我们也买辆车吧。男：行啊，买了车我就每天送你上班。问：他们最可能是什么关系？ → 丈夫和妻子.'},
    {num:14, options:['喜欢看书','考得很好','喜欢玩儿电脑游戏'], ans:2,
     lines:[
       {speaker:'男', pre:'你考得真好，是怎么', blank:'学的', post:'？', py:'Nǐ kǎo de zhēn hǎo, shì zěnme xué de?', vn:'Bạn thi tốt thật đấy, học kiểu gì vậy?'},
       {speaker:'女', pre:'我每天学习，你到了家就玩儿电脑游戏、睡觉，', blank:'不看书', post:'，能学好吗？', py:'Wǒ měitiān xuéxí, nǐ dàole jiā jiù wánr diànnǎo yóuxì, shuìjiào, bú kàn shū, néng xuéhǎo ma?', vn:'Tôi ngày nào cũng học, còn bạn về đến nhà là chơi điện tử, ngủ, không đọc sách, sao mà học tốt được?'},
     ],
     explain:'男：你考得真好，是怎么学的？女：我每天学习，你到了家就玩儿电脑游戏、睡觉，不看书，能学好吗？问：关于男的，可以知道什么？ → 喜欢玩儿电脑游戏.'},
    {num:15, options:['运动一下','去办事','穿衣服'], ans:0,
     lines:[
       {speaker:'女', pre:'今晚你吃得太多了，', blank:'出去走走吧', post:'。', py:'Jīnwǎn nǐ chī de tài duō le, chūqu zǒuzou ba.', vn:'Tối nay bạn ăn nhiều quá, ra ngoài đi dạo một chút đi.'},
       {speaker:'男', pre:'行，我', blank:'穿了衣服', post:'就去。', py:'Xíng, wǒ chuānle yīfu jiù qù.', vn:'Được, tôi mặc quần áo xong là đi ngay.'},
     ],
     explain:'女：今晚你吃得太多了，出去走走吧。男：行，我穿了衣服就去。问：女的想让男的做什么？ → 运动一下.'},
    {num:16, options:['楼下','楼上','办公室'], ans:0,
     lines:[
       {speaker:'男', pre:'请问', blank:'王雨在吗', post:'？', py:'Qǐngwèn Wáng Yǔ zài ma?', vn:'Xin hỏi Vương Vũ có ở đó không?'},
       {speaker:'女', pre:'对不起，他不在，', blank:'下楼去送人了', post:'。', py:'Duìbuqǐ, tā bú zài, xiàlóu qù sòng rén le.', vn:'Xin lỗi, anh ấy không có ở đây, xuống lầu tiễn khách rồi.'},
       {speaker:'男', pre:'他', blank:'什么时候回来', post:'？', py:'Tā shénme shíhou huílai?', vn:'Khi nào anh ấy về?'},
       {speaker:'女', pre:'几分钟就回来，他送了人就', blank:'上来', post:'。', py:'Jǐ fēnzhōng jiù huílai, tā sòngle rén jiù shànglai.', vn:'Mấy phút nữa là về, tiễn khách xong là anh ấy lên ngay.'},
     ],
     explain:'男：请问王雨在吗？女：对不起，他不在，下楼去送人了。男：他什么时候回来？女：几分钟就回来，他送了人就上来。问：王雨现在可能在哪儿？ → 楼下.'},
    {num:17, options:['他拿东西','他没带手机','他要去办公楼打电话'], ans:0,
     lines:[
       {speaker:'女', pre:'大家', blank:'都到了吗', post:'？', py:'Dàjiā dōu dào le ma?', vn:'Mọi người đến đủ chưa?'},
       {speaker:'男', pre:'', blank:'王东还没到', post:'。', py:'Wáng Dōng hái méi dào.', vn:'Vương Đông vẫn chưa đến.'},
       {speaker:'女', pre:'', blank:'谁有他的电话', post:'？', py:'Shéi yǒu tā de diànhuà?', vn:'Ai có số điện thoại của anh ấy?'},
       {speaker:'男', pre:'我给他打电话了，他说去办公楼', blank:'拿了东西', post:'就过来。', py:'Wǒ gěi tā dǎ diànhuà le, tā shuō qù bàngōnglóu nále dōngxi jiù guòlai.', vn:'Tôi gọi điện cho anh ấy rồi, anh ấy nói đến tòa nhà văn phòng lấy đồ xong là qua ngay.'},
     ],
     explain:'女：大家都到了吗？男：王东还没到。女：谁有他的电话？男：我给他打电话了，他说去办公楼拿了东西就过来。问：王东为什么还没来？ → 他拿东西.'},
    {num:18, options:['已经到了','走北边的路','走得很快'], ans:1,
     lines:[
       {speaker:'女', pre:'我们真快，', blank:'30分钟就到了', post:'。', py:'Wǒmen zhēn kuài, sānshí fēnzhōng jiù dào le.', vn:'Chúng ta nhanh thật, 30 phút là đến rồi.'},
       {speaker:'男', pre:'是啊，', blank:'小方他们到哪儿了', post:'？', py:'Shì a, Xiǎofāng tāmen dào nǎr le?', vn:'Đúng vậy, Tiểu Phương họ đến đâu rồi?'},
       {speaker:'女', pre:'他们走', blank:'北边那条路', post:'，可能也快到了。', py:'Tāmen zǒu běibiān nà tiáo lù, kěnéng yě kuài dào le.', vn:'Họ đi con đường phía bắc, có lẽ cũng sắp đến rồi.'},
       {speaker:'男', pre:'那条路难走，可能要', blank:'50分钟', post:'。', py:'Nà tiáo lù nán zǒu, kěnéng yào wǔshí fēnzhōng.', vn:'Con đường đó khó đi, có lẽ phải mất 50 phút.'},
     ],
     explain:'女：我们真快，30分钟就到了。男：是啊，小方他们到哪儿了？女：他们走北边那条路，可能也快到了。男：那条路难走，可能要50分钟。问：关于小方他们，可以知道什么？ → 走北边的路.'},
    {num:19, options:['在楼上','在楼下','不知道在哪儿'], ans:0,
     lines:[
       {speaker:'男', pre:'你进来的时候', blank:'看见小白了吗', post:'？', py:'Nǐ jìnlai de shíhou kànjiàn Xiǎobái le ma?', vn:'Lúc bạn vào có thấy Tiểu Bạch không?'},
       {speaker:'女', pre:'', blank:'没看见', post:'。你找他有事？', py:'Méi kànjiàn. Nǐ zhǎo tā yǒu shì?', vn:'Không thấy. Bạn tìm cậu ấy có việc gì à?'},
       {speaker:'男', pre:'我让他下去', blank:'买午饭', post:'，还没回来。', py:'Wǒ ràng tā xiàqu mǎi wǔfàn, hái méi huílai.', vn:'Tôi bảo cậu ấy xuống mua cơm trưa, vẫn chưa về.'},
       {speaker:'女', pre:'', blank:'给他打个电话问问吧', post:'。', py:'Gěi tā dǎ ge diànhuà wènwen ba.', vn:'Gọi điện hỏi cậu ấy thử xem.'},
     ],
     explain:'男：你进来的时候看见小白了吗？女：没看见。你找他有事？男：我让他下去买午饭，还没回来。女：给他打个电话问问吧。问：他们在哪儿？ → 在楼上 (vì nói 小白 "下去" mua cơm, nghĩa là 2 người đang nói chuyện đang ở trên lầu).'},
    {num:20, options:['还没回家','不着急','很着急'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'你怎么还不吃饭', post:'？', py:'Nǐ zěnme hái bù chīfàn?', vn:'Sao bạn vẫn chưa ăn cơm vậy?'},
       {speaker:'女', pre:'', blank:'东东还没回来呢', post:'。', py:'Dōngdōng hái méi huílai ne.', vn:'Đông Đông vẫn chưa về mà.'},
       {speaker:'男', pre:'', blank:'你别着急', post:'，吃饭吧。', py:'Nǐ bié zháojí, chīfàn ba.', vn:'Bạn đừng vội, ăn cơm đi.'},
       {speaker:'女', pre:'都这么晚了，我', blank:'能不着急吗', post:'？', py:'Dōu zhème wǎn le, wǒ néng bù zháojí ma?', vn:'Muộn thế này rồi, tôi sao mà không sốt ruột được?'},
     ],
     explain:'男：你怎么还不吃饭？女：东东还没回来呢。男：你别着急，吃饭吧。女：都这么晚了，我能不着急吗？问：关于女的，可以知道什么？ → 很着急 (能不着急吗 = phản vấn, ý nghĩa thực chất là "rất sốt ruột").'},
  ],
};

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'我姐姐的',blank:'腿',post:'很长，跑步很快。',hint:'(chân, đùi)',ans:'腿'},
  {pre:'我这几天头很',blank:'疼',post:'，可能感冒了。',hint:'(đau)',ans:'疼'},
  {pre:'弟弟的',blank:'脚',post:'比我的大。',hint:'(bàn chân)',ans:'脚'},
  {pre:'因为院子里有一棵大',blank:'树',post:'，所以夏天很凉快。',hint:'(cây)',ans:'树'},
  {pre:'这次面试比我想的',blank:'容易',post:'多了。',hint:'(dễ)',ans:'容易'},
  {pre:'虽然这道题很',blank:'难',post:'，但是他还是做对了。',hint:'(khó)',ans:'难'},
  {pre:'那位',blank:'太太',post:'每天早上都去公园运动。',hint:'(bà, phu nhân)',ans:'太太'},
  {pre:'新来的',blank:'秘书',post:'工作很认真。',hint:'(thư ký)',ans:'秘书'},
  {pre:'因为',blank:'经理',post:'今天开会，所以见不到他。',hint:'(giám đốc)',ans:'经理'},
  {pre:'如果你找不到我，就来我',blank:'办公室',post:'找我吧。',hint:'(văn phòng)',ans:'办公室'},
  {pre:'停车场里有很多',blank:'辆',post:'车，找不到我的了。',hint:'(chiếc — xe cộ)',ans:'辆'},
  {pre:'我朋友住在这栋',blank:'楼',post:'的五层。',hint:'(tòa nhà)',ans:'楼'},
  {pre:'出门前，你别忘了',blank:'拿',post:'钥匙。',hint:'(cầm, lấy)',ans:'拿'},
  {pre:'大家都以为他很有钱，',blank:'其实',post:'他没有多少钱。',hint:'(thực ra)',ans:'其实'},
  {pre:'下雨了，你带',blank:'把',post:'伞出去吧。',hint:'(lượng từ — đồ có tay cầm)',ans:'把'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['因为','脚','很','疼','，','所以','他','不','想','走路','。'],ans:'因为脚很疼，所以他不想走路。',audio:'因为脚很疼，所以他不想走路。'},
  {words:['虽然','那','把','伞','很','小','，','但是','很','好用','。'],ans:'虽然那把伞很小，但是很好用。',audio:'虽然那把伞很小，但是很好用。'},
  {words:['如果','你','去','楼上','，','就','能','看到','经理','。'],ans:'如果你去楼上，就能看到经理。',audio:'如果你去楼上，就能看到经理。'},
  {words:['他','拿','了','伞','就','出去','了','。'],ans:'他拿了伞就出去了。',audio:'他拿了伞就出去了。'},
  {words:['秘书','到','了','办公室','就','开始','工作','。'],ans:'秘书到了办公室就开始工作。',audio:'秘书到了办公室就开始工作。'},
  {words:['他','每天','工作','这么','忙','，','能','不','瘦','吗','？'],ans:'他每天工作这么忙，能不瘦吗？',audio:'他每天工作这么忙，能不瘦吗？'},
  {words:['因为','这','棵','树','很','大','，','所以','夏天','很多','人','来','这儿','坐','。'],ans:'因为这棵树很大，所以夏天很多人来这儿坐。',audio:'因为这棵树很大，所以夏天很多人来这儿坐。'},
  {words:['虽然','找','工作','不','容易','，','但是','他','还是','找到','了','。'],ans:'虽然找工作不容易，但是他还是找到了。',audio:'虽然找工作不容易，但是他还是找到了。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'他去伞拿把了。',
   opts:['他去拿把伞了。','他去伞拿把了。','他把伞去拿了。','伞把他去拿了。'],ans:0,
   exp:'把 + danh từ (把伞) là một cụm từ liền, phải đứng NGUYÊN VẸN sau động từ 拿, không tách rời hay đảo vị trí.'},
  {wrong:'我明天回去学校。',
   opts:['我明天回学校去。','我明天回去学校。','我明天学校回去。','回我明天去学校。'],ans:0,
   exp:'Tân ngữ chỉ NƠI CHỐN (学校) phải đứng GIỮA động từ và 来/去: 回 + 学校 + 去, không đặt 去 trước tân ngữ nơi chốn.'},
  {wrong:'他拿伞了就走了。',
   opts:['他拿了伞就走了。','他拿伞了就走了。','他了拿伞就走了。','拿了他伞就走了。'],ans:0,
   exp:'了 phải đứng NGAY SAU động từ 拿, TRƯỚC tân ngữ 伞: 拿 + 了 + 伞, không đặt 了 sau tân ngữ.'},
  {wrong:'他吃了饭去就上班。',
   opts:['他吃了饭就去上班。','他吃了饭去就上班。','他就吃了饭去上班。','他吃就了饭去上班。'],ans:0,
   exp:'Cấu trúc V了……就V…… : 就 phải đứng NGAY TRƯỚC động từ thứ hai (去上班), không chen vào giữa hay đặt sai vị trí.'},
  {wrong:'经理到公司了就开会。',
   opts:['经理到了公司就开会。','经理到公司了就开会。','经理了到公司就开会。','到了经理公司就开会。'],ans:0,
   exp:'了 (biểu thị hành động hoàn thành) phải đứng ngay sau động từ 到, trước tân ngữ 公司: 到 + 了 + 公司.'},
  {wrong:'他每天都加班，能累不吗？',
   opts:['他每天都加班，能不累吗？','他每天都加班，能累不吗？','他每天都加班，不能累吗？','他每天都加班，累能不吗？'],ans:0,
   exp:'Trong câu phản vấn 能……吗, phó từ phủ định 不 phải đứng NGAY TRƯỚC tính từ/động từ: 能 + 不 + 累 + 吗, không đặt 不 sau tính từ.'},
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
  {vi:'Vì chân tôi bị đau nên hôm nay tôi không đi leo núi được.', zh:'因为我的腿疼，所以今天不能去爬山。', py:'Yīnwèi wǒ de tuǐ téng, suǒyǐ jīntiān bù néng qù páshān.'},
  {vi:'Tuy công việc thư ký không khó, nhưng cần phải rất cẩn thận.', zh:'虽然秘书的工作不难，但是要很小心。', py:'Suīrán mìshū de gōngzuò bù nán, dànshì yào hěn xiǎoxīn.'},
  {vi:'Nếu chiếc ô này bị hỏng thì bạn dùng cái của tôi đi.', zh:'如果这把伞坏了，你就用我的吧。', py:'Rúguǒ zhè bǎ sǎn huài le, nǐ jiù yòng wǒ de ba.'},
  {vi:'Vì anh ấy béo lên nhiều nên quần áo cũ đều mặc không vừa nữa.', zh:'因为他胖了很多，所以旧衣服都穿不下了。', py:'Yīnwèi tā pàngle hěn duō, suǒyǐ jiù yīfu dōu chuān bu xià le.'},
  {vi:'Tuy cô ấy gầy đi nhiều nhưng vẫn ăn rất khỏe.', zh:'虽然她瘦了很多，但是还是吃得很多。', py:'Suīrán tā shòule hěn duō, dànshì háishi chī de hěn duō.'},
  {vi:'Thư ký vừa lên lầu vừa gọi điện cho giám đốc.', zh:'秘书一边上楼，一边给经理打电话。', py:'Mìshū yìbiān shànglóu, yìbiān gěi jīnglǐ dǎ diànhuà.'},
  {vi:'Chỉ cần bạn mang theo ô thì dù trời mưa cũng không sao.', zh:'只要你带着伞，下雨就没关系。', py:'Zhǐyào nǐ dàizhe sǎn, xiàyǔ jiù méi guānxi.'},
  {vi:'Cây trong sân nhà tôi vừa cao vừa to, mùa hè rất mát.', zh:'我家院子里的树又高又大，夏天很凉快。', py:'Wǒ jiā yuànzi lǐ de shù yòu gāo yòu dà, xiàtiān hěn liángkuai.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Vì anh Chu họp đến rất muộn nên thư ký vẫn đang đợi anh ấy ở văn phòng.', zh:'因为周先生开会开到很晚，所以秘书还在办公室等他。', py:'Yīnwèi Zhōu xiānsheng kāihuì kāi dào hěn wǎn, suǒyǐ mìshū hái zài bàngōngshì děng tā.'},
  {vi:'Tuy chiếc xe đó không đắt nhưng lái rất tốt.', zh:'虽然那辆车不贵，但是很好开。', py:'Suīrán nà liàng chē bú guì, dànshì hěn hǎo kāi.'},
  {vi:'Nếu bà Chu gọi điện đến, bạn cứ nói với bà ấy là giám đốc mai sẽ về.', zh:'如果周太太打电话来，你就告诉她经理明天回来。', py:'Rúguǒ Zhōu tàitai dǎ diànhuà lái, nǐ jiù gàosu tā jīnglǐ míngtiān huílai.'},
  {vi:'Anh ấy vừa cầm được ô là lập tức ra cửa ngay.', zh:'他一拿到伞，就马上出门了。', py:'Tā yì nádào sǎn, jiù mǎshàng chūmén le.'},
  {vi:'Thư ký tuy rất bận nhưng văn phòng lúc nào cũng rất sạch sẽ.', zh:'秘书虽然很忙，但是办公室一直很干净。', py:'Mìshū suīrán hěn máng, dànshì bàngōngshì yìzhí hěn gānjìng.'},
  {vi:'Chỉ cần bạn nghỉ ngơi nhiều hơn thì chân sẽ đỡ đau hơn.', zh:'只要你多休息，腿就不会那么疼了。', py:'Zhǐyào nǐ duō xiūxi, tuǐ jiù bú huì nàme téng le.'},
  {vi:'Cái cây đó vừa to vừa già, đã ở đây một trăm năm rồi.', zh:'那棵树又大又老，已经在这儿一百年了。', py:'Nà kē shù yòu dà yòu lǎo, yǐjīng zài zhèr yìbǎi nián le.'},
  {vi:'Bạn mỗi ngày vừa bận chăm con vừa phải đi làm, sao mà không mệt được?', zh:'你每天忙着照顾孩子，还要上班，能不累吗？', py:'Nǐ měitiān mángzhe zhàogù háizi, hái yào shàngbān, néng bú lèi ma?'},
];
