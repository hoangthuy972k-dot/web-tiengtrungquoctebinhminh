// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 8: 我爸爸也在医院工作
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'房间',py:'fángjiān',pos:'Danh từ',vn:'căn phòng',em:'🚪',lesson:1,
   ex_zh:'房间外有一只小猫。',ex_py:'Fángjiān wài yǒu yì zhī xiǎo māo.',ex_vn:'Ngoài phòng có một con mèo nhỏ.',
   exList:[{zh:'房间外有一只小猫。',py:'Fángjiān wài yǒu yì zhī xiǎo māo.',vn:'Ngoài phòng có một con mèo nhỏ.'}],
   hanzi:[
     {c:'房',p:'fáng',type:'上下结构 · Trên-dưới',st:8,ord:'户 (hộ) trên → 方 (phương) dưới',rad:'户 (hộ – cửa, nhà)',mean:'phòng, nhà',
      tip:'户(cửa nhà) + 方(phương hướng, âm đọc) → nơi có CỬA để bước vào, một PHÒNG riêng trong nhà → PHÒNG, NHÀ.',
      cf:'防 (fáng – "phòng ngừa", bộ 阝)',w:'房间 / 厨房 / 书房'},
     {c:'间',p:'jiān',type:'半包围结构 · Bán bao vây',st:7,ord:'门 (môn) bao ba mặt → 日 (nhật) ở giữa',rad:'门 (môn – cửa lớn, cổng)',mean:'gian, khoảng, giữa',
      tip:'门(cánh cổng) bao quanh 日(mặt trời) → ánh sáng lọt qua KHE giữa hai cánh cửa → GIAN, KHOẢNG GIỮA.',
      cf:'问 (wèn – "hỏi", cũng bộ 门 nhưng bên trong là 口)',w:'房间 / 中间 / 时间'},
   ]},
  {n:2,zh:'外',py:'wài',pos:'Danh từ',vn:'ngoài, bên ngoài',em:'🌳',lesson:1,
   ex_zh:'房间外有一只小猫。',ex_py:'Fángjiān wài yǒu yì zhī xiǎo māo.',ex_vn:'Ngoài phòng có một con mèo nhỏ.',
   exList:[
     {zh:'房间外有一只小猫。',py:'Fángjiān wài yǒu yì zhī xiǎo māo.',vn:'Ngoài phòng có một con mèo nhỏ.'},
     {zh:'我们去书店外吧。',py:'Wǒmen qù shūdiàn wài ba.',vn:'Chúng ta ra ngoài hiệu sách đi.'},
   ],
   hanzi:[
     {c:'外',p:'wài',type:'左右结构 · Trái-phải',st:5,ord:'夕 (tịch) trái → 卜 (bốc) phải',rad:'夕 (tịch – buổi tối)',mean:'ngoài, bên ngoài',
      tip:'夕(buổi tối) + 卜(bói toán, đoán việc) → ngày xưa xem bói thường làm NGOÀI trời vào buổi tối → NGOÀI, BÊN NGOÀI.',
      cf:'处 (chù – "nơi, chỗ")',w:'房间外 / 外面'},
   ]},
  {n:3,zh:'只',py:'zhī',pos:'Lượng từ',vn:'con (chim, chó, mèo...)',em:'🐾',lesson:1,
   ex_zh:'房间外有一只小猫。',ex_py:'Fángjiān wài yǒu yì zhī xiǎo māo.',ex_vn:'Ngoài phòng có một con mèo nhỏ.',
   exList:[{zh:'房间外有一只小猫。',py:'Fángjiān wài yǒu yì zhī xiǎo māo.',vn:'Ngoài phòng có một con mèo nhỏ.'}],
   hanzi:[
     {c:'只',p:'zhī',type:'上下结构 · Trên-dưới',st:5,ord:'口 (khẩu) trên → 八 (bát, biến thể) dưới',rad:'口 (khẩu – miệng)',mean:'lượng từ đếm con vật, chiếc; chỉ (phó từ)',
      tip:'口(miệng kêu) trên + 八(hình đôi cánh chia tách) dưới → hình con chim nhỏ đang đậu, dùng để đếm từng CON vật, CHIẾC đồ vật lẻ → CON, CHIẾC.',
      cf:'兄 (xiōng – "anh trai", cũng có 口 trên nhưng dưới là 儿)',w:'一只猫 / 只是 / 两只'},
   ]},
  {n:4,zh:'小',py:'xiǎo',pos:'Tính từ',vn:'nhỏ, bé',em:'🔹',lesson:1,
   ex_zh:'房间外有一只小猫。',ex_py:'Fángjiān wài yǒu yì zhī xiǎo māo.',ex_vn:'Ngoài phòng có một con mèo nhỏ.',
   exList:[{zh:'房间外有一只小猫。',py:'Fángjiān wài yǒu yì zhī xiǎo māo.',vn:'Ngoài phòng có một con mèo nhỏ.'}],
   hanzi:[
     {c:'小',p:'xiǎo',type:'独体字 · Chữ đơn',st:3,ord:'亅 (móc) giữa → 丶丶 (hai chấm) hai bên',rad:'小 (tiểu – tự thành bộ)',mean:'nhỏ, bé',
      tip:'Nét móc ở giữa như một vật bị tách ra hai mảnh nhỏ hai bên → NHỎ, BÉ.',
      cf:'少 (shǎo – "ít", thêm một nét phẩy so với 小)',w:'小猫 / 小心 / 多小'},
   ]},
  {n:5,zh:'猫',py:'māo',pos:'Danh từ',vn:'con mèo',em:'🐱',lesson:1,
   ex_zh:'这只小猫真漂亮！',ex_py:'Zhè zhī xiǎo māo zhēn piàoliang!',ex_vn:'Con mèo nhỏ này thật xinh đẹp!',
   exList:[
     {zh:'房间外有一只小猫。',py:'Fángjiān wài yǒu yì zhī xiǎo māo.',vn:'Ngoài phòng có một con mèo nhỏ.'},
     {zh:'这只小猫真漂亮！',py:'Zhè zhī xiǎo māo zhēn piàoliang!',vn:'Con mèo nhỏ này thật xinh đẹp!'},
   ],
   hanzi:[
     {c:'猫',p:'māo',type:'左右结构 · Trái-phải',st:11,ord:'犭(khuyển) trái → 苗(miêu) phải',rad:'犭 (khuyển – thú vật, biến thể)',mean:'con mèo',
      tip:'犭(loài thú) + 苗(mượn âm) → CON MÈO.',
      cf:'描 (miáo – "miêu tả")',w:'小猫'},
   ]},
  {n:6,zh:'没',py:'méi',pos:'Phó từ',vn:'không, chưa',em:'🚫',lesson:1,
   ex_zh:'我没看见，它在哪儿呢？',ex_py:'Wǒ méi kànjiàn, tā zài nǎr ne?',ex_vn:'Mình không nhìn thấy, nó ở đâu nhỉ?',
   exList:[{zh:'我没看见，它在哪儿呢？',py:'Wǒ méi kànjiàn, tā zài nǎr ne?',vn:'Mình không nhìn thấy, nó ở đâu nhỉ?'}],
   hanzi:[
     {c:'没',p:'méi',type:'左右结构 · Trái-phải',st:7,ord:'氵(thuỷ) trái → 殳(biến thể) phải',rad:'氵 (thuỷ – nước)',mean:'không, không có',
      tip:'氵(nước) + 殳(cây gậy khuấy) → nước bị khuấy tan biến mất → KHÔNG CÓ, CHƯA.',
      cf:'汉 (hàn – "Hán")',w:'没看见 / 没吃'},
   ]},
  {n:7,zh:'看见',py:'kànjiàn',pos:'Động từ',vn:'nhìn thấy, trông thấy',em:'👀',lesson:1,
   ex_zh:'我没看见，它在哪儿呢？',ex_py:'Wǒ méi kànjiàn, tā zài nǎr ne?',ex_vn:'Mình không nhìn thấy, nó ở đâu nhỉ?',
   exList:[{zh:'我没看见，它在哪儿呢？',py:'Wǒ méi kànjiàn, tā zài nǎr ne?',vn:'Mình không nhìn thấy, nó ở đâu nhỉ?'}],
   hanzi:[
     {c:'看',p:'kàn',type:'上下结构 · Trên-dưới',st:9,ord:'手 (thủ, biến thể) trên → 目 (mục) dưới',rad:'目 (mục – mắt)',mean:'xem, nhìn',
      tip:'手(bàn tay) che phía trên 目(mắt) → dùng tay che nắng để NHÌN cho rõ → XEM, NHÌN.',
      cf:'着 (zhe/zháo – trợ từ, cũng có 目 ở phía dưới)',w:'看见 / 看书 / 好看'},
     {c:'见',p:'jiàn',type:'上下结构 · Trên-dưới',st:4,ord:'目 (biến thể, con mắt) trên → 儿 (nhi) dưới',rad:'见 (kiến – tự thành bộ)',mean:'nhìn thấy, gặp',
      tip:'Trên là hình con MẮT (目 biến thể) mở to, dưới là 儿(người đang bước tới) → người mở mắt NHÌN THẤY sự vật, hoặc bước tới GẶP nhau.',
      cf:'贝 (bèi – "vỏ sò, tiền", hình dáng khá giống 见)',w:'看见 / 见面 / 再见'},
   ]},
  {n:8,zh:'桌子',py:'zhuōzi',pos:'Danh từ',vn:'bàn, cái bàn',em:'🪑',lesson:1,
   ex_zh:'它在桌子下呢。',ex_py:'Tā zài zhuōzi xià ne.',ex_vn:'Nó ở dưới bàn kìa.',
   exList:[{zh:'它在桌子下呢。',py:'Tā zài zhuōzi xià ne.',vn:'Nó ở dưới bàn kìa.'}],
   hanzi:[
     {c:'桌',p:'zhuō',type:'上下结构 · Trên-dưới',st:10,ord:'⺊ (biến thể, giống mặt bàn) trên → 木 (mộc) dưới',rad:'木 (mộc – gỗ, cây)',mean:'cái bàn',
      tip:'Phần trên tượng trưng cho mặt bàn phẳng, phần dưới là 木(gỗ) → chiếc BÀN đóng bằng GỖ, có mặt phẳng để đặt đồ → BÀN.',
      cf:'卓 (zhuó – "xuất sắc, kiệt xuất", phần trên giống nhau nhưng dưới là 十)',w:'桌子 / 书桌'},
     {c:'子',p:'zi',type:'独体字 · Chữ đơn',st:3,ord:'了 (biến thể) → 一 (ngang)',rad:'子 (tử – tự thành bộ)',mean:'con, hậu tố danh từ',
      tip:'Hình đứa TRẺ nhỏ với cái đầu to và hai tay dang rộng → CON, ĐỨA TRẺ; thường dùng làm hậu tố danh từ như 桌子, 房子.',
      cf:'孑 (jié – "cô độc, lẻ loi", thiếu một nét ngang so với 子)',w:'桌子 / 孩子 / 儿子'},
   ]},
  {n:9,zh:'下',py:'xià',pos:'Danh từ',vn:'dưới, bên dưới',em:'⬇️',lesson:1,
   ex_zh:'它在桌子下呢。',ex_py:'Tā zài zhuōzi xià ne.',ex_vn:'Nó ở dưới bàn kìa.',
   exList:[{zh:'它在桌子下呢。',py:'Tā zài zhuōzi xià ne.',vn:'Nó ở dưới bàn kìa.'}],
   hanzi:[
     {c:'下',p:'xià',type:'独体字 · Chữ đơn',st:3,ord:'一 (ngang, đường mốc) → 卜 (biến thể) dưới',rad:'一 (nhất – một, tự thành bộ)',mean:'dưới, bên dưới; xuống',
      tip:'Một nét NGANG làm đường mốc, nét chấm/móc nằm phía DƯỚI đường mốc đó → DƯỚI, BÊN DƯỚI, XUỐNG.',
      cf:'卡 (kǎ – "thẻ, card")',w:'下面 / 桌子下 / 下午'},
   ]},
  {n:10,zh:'漂亮',py:'piàoliang',pos:'Tính từ',vn:'đẹp, xinh đẹp',em:'✨',lesson:1,
   ex_zh:'这只小猫真漂亮！',ex_py:'Zhè zhī xiǎo māo zhēn piàoliang!',ex_vn:'Con mèo nhỏ này thật xinh đẹp!',
   exList:[{zh:'这只小猫真漂亮！',py:'Zhè zhī xiǎo māo zhēn piàoliang!',vn:'Con mèo nhỏ này thật xinh đẹp!'}],
   hanzi:[
     {c:'漂',p:'piào',type:'左右结构 · Trái-phải',st:14,ord:'氵 (thuỷ) trái → 票 (phiếu) phải',rad:'氵 (thuỷ – nước)',mean:'đẹp, xinh (trong 漂亮); trôi nổi',
      tip:'氵(nước) + 票(nhẹ như tờ vé bay) → vật nhẹ TRÔI NỔI thanh thoát trên mặt nước, trông thanh nhã → ĐẸP, XINH ĐẸP.',
      cf:'飘 (piāo – "bay phất phơ", cũng từ 票 nhưng đi với bộ 风)',w:'漂亮 / 漂洗'},
     {c:'亮',p:'liàng',type:'上下结构 · Trên-dưới',st:9,ord:'亠 (đầu) → 口 (khẩu) → 儿 (nhi) từ trên xuống',rad:'亠 (đầu – nắp, mái)',mean:'sáng, sáng rõ',
      tip:'Trên là mái nhà và cửa sổ (亠, 口), dưới là 儿(người) đứng nhìn ra luồng ÁNH SÁNG → SÁNG, SÁNG RÕ, RẠNG RỠ.',
      cf:'立 (lì – "đứng", phần trên có hình dáng gần giống 亮)',w:'漂亮 / 明亮 / 天亮'},
   ]},
  {n:11,zh:'在',py:'zài',pos:'Giới từ',vn:'ở, tại',em:'📍',lesson:2,
   ex_zh:'在学校书店前见吧。',ex_py:'Zài xuéxiào shūdiàn qián jiàn ba.',ex_vn:'Gặp nhau ở trước hiệu sách của trường nhé.',
   exList:[
     {zh:'在学校书店前见吧。',py:'Zài xuéxiào shūdiàn qián jiàn ba.',vn:'Gặp nhau ở trước hiệu sách của trường nhé.'},
     {zh:'我爸爸也在医院工作。',py:'Wǒ bàba yě zài yīyuàn gōngzuò.',vn:'Bố tôi cũng làm việc ở bệnh viện.'},
   ],
   hanzi:[
     {c:'在',p:'zài',type:'半包围结构 · Bán bao vây',st:6,ord:'才 (biến thể) trên trái bao → 土 (thổ) dưới phải',rad:'土 (thổ – đất)',mean:'ở, tại, đang (tồn tại)',
      tip:'才(mầm cây/bàn tay, biến thể) mọc che phía trên + 土(đất) → vật mọc lên và TỒN TẠI trên mặt ĐẤT → Ở, TẠI, ĐANG.',
      cf:'再 (zài – "lại, nữa", đồng âm nhưng khác nghĩa và khác bộ thủ)',w:'在家 / 在学校 / 现在'},
   ]},
  {n:12,zh:'学校',py:'xuéxiào',pos:'Danh từ',vn:'trường học',em:'🏫',lesson:2,
   ex_zh:'在学校书店前见吧。',ex_py:'Zài xuéxiào shūdiàn qián jiàn ba.',ex_vn:'Gặp nhau ở trước hiệu sách của trường nhé.',
   exList:[{zh:'在学校书店前见吧。',py:'Zài xuéxiào shūdiàn qián jiàn ba.',vn:'Gặp nhau ở trước hiệu sách của trường nhé.'}],
   hanzi:[
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'丷 (biến thể) → 冖 (mịch) → 子 (tử) từ trên xuống',rad:'子 (tử – con, trẻ em)',mean:'học',
      tip:'丷(tri thức toả ra hai bên) trên + 冖(mái trường) + 子(đứa trẻ) dưới → đứa trẻ ngồi trong mái trường tiếp thu tri thức → HỌC.',
      cf:'觉 (jué/jiào – "cảm giác/ngủ", phần trên có hình dáng gần giống)',w:'学校 / 学生 / 学习'},
     {c:'校',p:'xiào',type:'左右结构 · Trái-phải',st:10,ord:'木 (mộc) trái → 交 (giao) phải',rad:'木 (mộc – gỗ, cây)',mean:'trường học',
      tip:'木(gỗ, chỉ bàn ghế) + 交(giao lưu, gặp gỡ) → nơi học sinh GIAO LƯU, học tập bên bàn ghế GỖ → TRƯỜNG HỌC.',
      cf:'较 (jiào – "so sánh", cũng có 交 bên phải nhưng bộ 车)',w:'学校 / 校门'},
   ]},
  {n:13,zh:'书店',py:'shūdiàn',pos:'Danh từ',vn:'hiệu sách, nhà sách',em:'📚',lesson:2,
   ex_zh:'在学校书店前见吧。',ex_py:'Zài xuéxiào shūdiàn qián jiàn ba.',ex_vn:'Gặp nhau ở trước hiệu sách của trường nhé.',
   exList:[{zh:'在学校书店前见吧。',py:'Zài xuéxiào shūdiàn qián jiàn ba.',vn:'Gặp nhau ở trước hiệu sách của trường nhé.'}],
   hanzi:[
     {c:'书',p:'shū',type:'独体字 · Chữ đơn',st:4,ord:'𠃌 (biến thể) → 一 → 乙 nét cong móc',rad:'乙 (ất – biến thể, nét uốn)',mean:'sách; viết, thư',
      tip:'Hình cuộn giấy có nét bút cong lượn ghi chép chữ nghĩa lên trên → SÁCH, VIẾT, THƯ.',
      cf:'己 (jǐ – "bản thân, mình", nét cong có hình dáng gần giống)',w:'书店 / 看书 / 书包'},
     {c:'店',p:'diàn',type:'半包围结构 · Bán bao vây',st:8,ord:'广 (nghiễm) bao trên trái → 占 (chiếm) bên trong',rad:'广 (nghiễm – mái nhà, nhà rộng)',mean:'cửa hàng, tiệm',
      tip:'广(mái nhà rộng) bao che + 占(chiếm giữ một chỗ để buôn bán) → nơi CHIẾM một khoảng dưới MÁI NHÀ để bán hàng → CỬA HÀNG, TIỆM.',
      cf:'占 (zhàn – "chiếm giữ", thiếu bộ 广 so với 店)',w:'书店 / 饭店 / 商店'},
   ]},
  {n:14,zh:'前',py:'qián',pos:'Danh từ',vn:'trước, phía trước',em:'👉',lesson:2,
   ex_zh:'在学校书店前见吧。',ex_py:'Zài xuéxiào shūdiàn qián jiàn ba.',ex_vn:'Gặp nhau ở trước hiệu sách của trường nhé.',
   exList:[{zh:'在学校书店前见吧。',py:'Zài xuéxiào shūdiàn qián jiàn ba.',vn:'Gặp nhau ở trước hiệu sách của trường nhé.'}],
   hanzi:[
     {c:'前',p:'qián',type:'上下结构 · Trên-dưới',st:9,ord:'㸚(biến thể) trên → 刖(biến thể) dưới',rad:'⺈ (đao, biến thể)',mean:'trước, phía trước',
      tip:'Hình chiếc thuyền tiến về phía trước → TRƯỚC, PHÍA TRƯỚC.',
      cf:'煎 (jiān – "chiên, rán")',w:'前面 / 以前'},
   ]},
  {n:15,zh:'能',py:'néng',pos:'Động từ năng nguyện',vn:'có thể',em:'💪',lesson:2,
   ex_zh:'下午两点你能到吗？',ex_py:'Xiàwǔ liǎng diǎn nǐ néng dào ma?',ex_vn:'2 giờ chiều bạn đến được không?',
   exList:[
     {zh:'下午两点你能到吗？',py:'Xiàwǔ liǎng diǎn nǐ néng dào ma?',vn:'2 giờ chiều bạn đến được không?'},
     {zh:'我能到。',py:'Wǒ néng dào.',vn:'Mình đến được.'},
   ],
   hanzi:[
     {c:'能',p:'néng',type:'左右结构 · Trái-phải',st:10,ord:'厶+月 (trái) → 匕+匕 (phải)',rad:'月 (nhục – thịt, biến thể)',mean:'có thể, có năng lực',
      tip:'Chữ gốc vẽ hình con gấu (熊) với 月(thân thịt) và hai chân 匕匕 chắc khoẻ → con vật CÓ NĂNG LỰC làm được nhiều việc → CÓ THỂ.',
      cf:'熊 (xióng – "con gấu", chính là chữ gốc thêm bộ 灬)',w:'能到 / 可能 / 不能'},
   ]},
  {n:16,zh:'到',py:'dào',pos:'Động từ',vn:'đến',em:'🎯',lesson:2,
   ex_zh:'我能到。',ex_py:'Wǒ néng dào.',ex_vn:'Mình đến được.',
   exList:[{zh:'我能到。',py:'Wǒ néng dào.',vn:'Mình đến được.'}],
   hanzi:[
     {c:'到',p:'dào',type:'左右结构 · Trái-phải',st:8,ord:'至 (chí) trái → 刂 (đao, biến thể) phải',rad:'刂 (đao – dao, biến thể)',mean:'đến, tới',
      tip:'至(đến tận nơi, tới cùng) + 刂(dứt khoát như một nhát dao) → đi thẳng một mạch, dứt khoát ĐẾN nơi → ĐẾN, TỚI.',
      cf:'倒 (dào/dǎo – "đổ, ngã" hoặc "ngược lại", bộ 亻)',w:'能到 / 到家 / 到学校'},
   ]},
  {n:17,zh:'午饭',py:'wǔfàn',pos:'Danh từ',vn:'bữa trưa',em:'🍱',lesson:2,
   ex_zh:'我在学校吃午饭。',ex_py:'Wǒ zài xuéxiào chī wǔfàn.',ex_vn:'Mình ăn trưa ở trường.',
   exList:[{zh:'我在学校吃午饭。',py:'Wǒ zài xuéxiào chī wǔfàn.',vn:'Mình ăn trưa ở trường.'}],
   hanzi:[
     {c:'午',p:'wǔ',type:'独体字 · Chữ đơn',st:4,ord:'一 → 丿 → 十 (ngang, phẩy, sổ móc)',rad:'十 (thập – mười)',mean:'buổi trưa; ngôi Ngọ',
      tip:'Hình cái chày giã gạo dựng thẳng đứng vào lúc mặt trời lên đỉnh đầu → BUỔI TRƯA.',
      cf:'牛 (niú – "con bò", hình dáng gần giống 午 nhưng thêm một nét phẩy)',w:'午饭 / 上午 / 下午'},
     {c:'饭',p:'fàn',type:'左右结构 · Trái-phải',st:7,ord:'饣 (thực, biến thể) trái → 反 (phản) phải',rad:'饣 (thực – ăn uống, biến thể)',mean:'cơm, bữa ăn',
      tip:'饣(bộ ăn uống) + 反(lật qua lật lại, âm đọc) → thức ăn được xới lật trong bát → CƠM, BỮA ĂN.',
      cf:'饮 (yǐn – "uống", cũng bộ 饣 nhưng bên phải là 欠)',w:'午饭 / 吃饭 / 米饭'},
   ]},
  {n:18,zh:'饭',py:'fàn',pos:'Danh từ',vn:'cơm',em:'🍚',lesson:3,
   ex_zh:'小胡，还没吃饭呢？',ex_py:'Xiǎo Hú, hái méi chī fàn ne?',ex_vn:'Tiểu Hồ, em vẫn chưa ăn cơm à?',
   exList:[{zh:'小胡，还没吃饭呢？',py:'Xiǎo Hú, hái méi chī fàn ne?',vn:'Tiểu Hồ, em vẫn chưa ăn cơm à?'}],
   hanzi:[
     {c:'饭',p:'fàn',type:'左右结构 · Trái-phải',st:7,ord:'饣 (thực, biến thể) trái → 反 (phản) phải',rad:'饣 (thực – ăn uống, biến thể)',mean:'cơm, bữa ăn',
      tip:'饣(bộ ăn uống) + 反(lật qua lật lại, âm đọc) → thức ăn được xới lật trong bát → CƠM, BỮA ĂN.',
      cf:'饮 (yǐn – "uống", cũng bộ 饣 nhưng bên phải là 欠)',w:'午饭 / 吃饭 / 米饭'},
   ]},
  {n:19,zh:'大',py:'dà',pos:'Tính từ',vn:'lớn, to',em:'🐘',lesson:3,
   ex_zh:'大医院病人多，医生非常忙。',ex_py:'Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.',ex_vn:'Ở bệnh viện lớn, bệnh nhân rất đông, bác sĩ cực kỳ bận.',
   exList:[{zh:'大医院病人多，医生非常忙。',py:'Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.',vn:'Ở bệnh viện lớn, bệnh nhân rất đông, bác sĩ cực kỳ bận.'}],
   hanzi:[
     {c:'大',p:'dà',type:'独体字 · Chữ đơn',st:3,ord:'一→ノ→㇏',rad:'大 (đại – tự thành bộ)',mean:'to, lớn',
      tip:'Hình người dang rộng tay chân → TO LỚN.',
      cf:'太 (tài – "quá")',w:'大医院 / 多大'},
   ]},
  {n:20,zh:'病人',py:'bìngrén',pos:'Danh từ',vn:'bệnh nhân',em:'🤒',lesson:3,
   ex_zh:'大医院病人多，医生非常忙。',ex_py:'Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.',ex_vn:'Ở bệnh viện lớn, bệnh nhân rất đông, bác sĩ cực kỳ bận.',
   exList:[{zh:'大医院病人多，医生非常忙。',py:'Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.',vn:'Ở bệnh viện lớn, bệnh nhân rất đông, bác sĩ cực kỳ bận.'}],
   hanzi:[
     {c:'病',p:'bìng',type:'半包围结构 · Bán bao vây',st:10,ord:'疒 (nạch) bao trên trái → 丙 (bính) bên trong',rad:'疒 (nạch – bệnh tật, giường bệnh)',mean:'bệnh, ốm',
      tip:'疒(hình người nằm nghiêng trên giường vì mệt) + 丙(âm đọc) → người nằm liệt giường vì BỆNH → BỆNH, ỐM.',
      cf:'疾 (jí – "bệnh, nhanh", cũng mang bộ 疒)',w:'病人 / 生病 / 看病'},
     {c:'人',p:'rén',type:'独体字 · Chữ đơn',st:2,ord:'丿 (phẩy) → 乀 (mác)',rad:'人 (nhân – tự thành bộ)',mean:'người',
      tip:'Hình người đứng nghiêng, dang hai chân vững vàng → NGƯỜI.',
      cf:'入 (rù – "vào", nét phẩy đâm xuyên qua nét mác)',w:'病人 / 大人 / 中国人'},
   ]},
  {n:21,zh:'多',py:'duō',pos:'Tính từ',vn:'nhiều',em:'➕',lesson:3,
   ex_zh:'大医院病人多，医生非常忙。',ex_py:'Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.',ex_vn:'Ở bệnh viện lớn, bệnh nhân rất đông, bác sĩ cực kỳ bận.',
   exList:[{zh:'大医院病人多，医生非常忙。',py:'Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.',vn:'Ở bệnh viện lớn, bệnh nhân rất đông, bác sĩ cực kỳ bận.'}],
   hanzi:[
     {c:'多',p:'duō',type:'上下结构 · Trên-dưới',st:6,ord:'夕 (tịch) trên → 夕 (tịch) dưới',rad:'夕 (tịch – buổi tối)',mean:'nhiều',
      tip:'Hai chữ 夕(buổi tối) chồng lên nhau → đêm này qua đêm khác tích luỹ lại → NHIỀU.',
      cf:'夕 (xī – "buổi tối", chỉ bằng một nửa của 多)',w:'多少 / 很多 / 多大'},
   ]},
  {n:22,zh:'医生',py:'yīshēng',pos:'Danh từ',vn:'bác sĩ',em:'🩺',lesson:3,
   ex_zh:'你家有两个医生？',ex_py:'Nǐ jiā yǒu liǎng gè yīshēng?',ex_vn:'Nhà em có hai bác sĩ cơ à?',
   exList:[{zh:'你家有两个医生？',py:'Nǐ jiā yǒu liǎng gè yīshēng?',vn:'Nhà em có hai bác sĩ cơ à?'}],
   hanzi:[
     {c:'医',p:'yī',type:'半包围结构 · Bán bao vây',st:7,ord:'匚 (phương) bao trái/dưới → 矢 (thỉ) bên trong',rad:'匚 (phương – hộp, khung hở)',mean:'y, chữa bệnh, bác sĩ',
      tip:'匚(chiếc hộp) đựng 矢(mũi tên, tượng trưng dụng cụ chữa bệnh thời xưa) → hộp đựng DỤNG CỤ CHỮA BỆNH → Y, BÁC SĨ.',
      cf:'区 (qū – "khu vực", cũng mang bộ 匚)',w:'医生 / 医院 / 中医'},
     {c:'生',p:'shēng',type:'独体字 · Chữ đơn',st:5,ord:'丿 (phẩy) → 一 → 一 → 土 (biến thể)',rad:'生 (sinh – tự thành bộ)',mean:'sinh ra, sống, học trò',
      tip:'Hình cây non vừa nhú lên khỏi mặt đất → SINH RA, SỐNG.',
      cf:'牛 (niú – "con bò", phần trên có hình dáng gần giống 生)',w:'医生 / 学生 / 出生'},
   ]},
  {n:23,zh:'工作',py:'gōngzuò',pos:'Động từ',vn:'làm việc',em:'💼',lesson:3,
   ex_zh:'我爸爸也在医院工作，他也非常忙。',ex_py:'Wǒ bàba yě zài yīyuàn gōngzuò, tā yě fēicháng máng.',ex_vn:'Bố em cũng làm việc ở bệnh viện, ông ấy cũng bận lắm.',
   exList:[{zh:'我爸爸也在医院工作，他也非常忙。',py:'Wǒ bàba yě zài yīyuàn gōngzuò, tā yě fēicháng máng.',vn:'Bố em cũng làm việc ở bệnh viện, ông ấy cũng bận lắm.'}],
   hanzi:[
     {c:'工',p:'gōng',type:'独体字 · Chữ đơn',st:3,ord:'一 (ngang) → 丨 (sổ) → 一 (ngang)',rad:'工 (công – tự thành bộ)',mean:'công việc, thợ',
      tip:'Hình cây thước thợ dùng để đo đạc, dựng nhà → CÔNG VIỆC, THỢ.',
      cf:'土 (tǔ – "đất", nét ngang dưới dài hơn nét ngang trên)',w:'工作 / 工人 / 做工'},
     {c:'作',p:'zuò',type:'左右结构 · Trái-phải',st:7,ord:'亻 (nhân) trái → 乍 (sạ) phải',rad:'亻 (nhân – người, biến thể)',mean:'làm, sáng tác',
      tip:'亻(người) + 乍(vừa mới, đột nhiên) → người vừa bắt tay ngay vào LÀM việc → LÀM, SÁNG TÁC.',
      cf:'昨 (zuó – "hôm qua", cũng có 乍 bên phải nhưng bộ 日)',w:'工作 / 作业 / 写作'},
   ]},
];

var wuData = [
  {img:'/images/hsk1v3-bai-8/xiaomao.jpg',label:'小猫',py:'xiǎo māo',letter:'A'},
  {img:'/images/hsk1v3-bai-8/xuexiao.jpg',label:'学校',py:'xuéxiào',letter:'B'},
  {img:'/images/hsk1v3-bai-8/shudian.jpg',label:'书店',py:'shūdiàn',letter:'C'},
  {img:'/images/hsk1v3-bai-8/yisheng.jpg',label:'医生',py:'yīshēng',letter:'D'},
  {img:'/images/hsk1v3-bai-8/zhuozi.jpg',label:'桌子',py:'zhuōzi',letter:'E'},
  {img:'/images/hsk1v3-bai-8/fangjian.jpg',label:'房间',py:'fángjiān',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 8: Ngữ âm + Hán tự + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-8/wb-yuyin.mp3',
      blocks: [
        { type: 'tonemc', caption: 'Phân biệt âm tiết (1) — nghe và chọn, đọc to',
          items: [
            {before:'', after:'', answer:'nián', options:['lián','nián']},
            {before:'', after:'', answer:'rěn', options:['rěn','shěn']},
            {before:'', after:'', answer:'tiē', options:['diē','tiē']},
            {before:'', after:'', answer:'chǎn', options:['chǎn','chǎng']},
            {before:'', after:'', answer:'lüè', options:['liè','lüè']},
            {before:'', after:'', answer:'hún', options:['hún','fén']},
            {before:'', after:'', answer:'bīng', options:['bīn','bīng']},
            {before:'', after:'', answer:'kǒng', options:['gǒng','kǒng']}
          ] },
        { type: 'tonemc', caption: 'Phân biệt âm tiết (2) — nghe và chọn song âm tiết KHÔNG phải điệp âm (láy)',
          items: [
            {before:'', after:'', answer:'jiějie', options:['tīngting','tīnglì','jiějie']},
            {before:'', after:'', answer:'gèkè', options:['gēge','gègè','gèkè']},
            {before:'', after:'', answer:'kànjiàn', options:['kànkan','kànjiàn','xiǎngxiang']},
            {before:'', after:'', answer:'xièxie', options:['méiyǒu','mèimei','xièxie']}
          ] },
        { type: 'table', caption: 'Chữ Hán (汉字) — Cấu tạo và bút thuận',
          rows: [
            ['Nét cơ bản', 'ngang (一), sổ (｜) — ví dụ: 十 = ngang trước, sổ sau'],
            ['Bộ phận từ', 'nét → bộ phận (部件) → chữ hoàn chỉnh (整字)'],
            ['2 loại chữ hoàn chỉnh', 'chữ độc thể (独体字, 1 bộ phận) và chữ hợp thể (合体字, ≥2 bộ phận)'],
            ['Ví dụ luyện viết', '二 (èr) → 二十 (èrshí); 工 (gōng) → 工作 (gōngzuò)']
          ],
          note: 'Chữ Hán gồm 3 yếu tố hình - âm - nghĩa. Cấu trúc: nét bút → bộ phận → chữ hoàn chỉnh. Phần luyện viết tay theo từng nét cần thực hành trực tiếp trên giấy/vở theo mẫu trong sách.' }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-8/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-8-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-8-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-8-wb/q1c.jpg'}
            ], answer: 'C' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-8-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-8-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-8-wb/q2c.jpg'}
            ], answer: 'B' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-8-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-8-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-8-wb/q3c.jpg'}
            ], answer: 'A' },
            { n: 4, options: [
              {key:'A', text:'去学校', py:'qù xuéxiào'},
              {key:'B', text:'房间外', py:'fángjiān wài'},
              {key:'C', text:'在吃东西', py:'zài chī dōngxi'}
            ], answer: 'B' },
            { n: 5, options: [
              {key:'A', text:'我能到', py:'wǒ néng dào'},
              {key:'B', text:'我吃午饭', py:'wǒ chī wǔfàn'},
              {key:'C', text:'我不能工作', py:'wǒ bù néng gōngzuò'}
            ], answer: 'A' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-8-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-8-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-8-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-8-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-8-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-8-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-8-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-8-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-8-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-8-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-8-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-8-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 9, options: [
              {key:'A', text:'超市', py:'chāoshì'},
              {key:'B', text:'饭店', py:'fàndiàn'},
              {key:'C', text:'学校书店', py:'xuéxiào shūdiàn'}
            ], answer: 'C' },
            { n: 10, options: [
              {key:'A', text:'去学校', py:'qù xuéxiào'},
              {key:'B', text:'看电影', py:'kàn diànyǐng'},
              {key:'C', text:'去上班', py:'qù shàngbān'}
            ], answer: 'B' }
          ],
          reading: [
            { n: 11, prompt: '你的手机在桌子上呢。', promptPy: 'Nǐ de shǒujī zài zhuōzi shang ne.', options: [
              {key:'A', img:'/images/hsk1v3-bai-8-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-8-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-8-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-8-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 12, prompt: '我在学校吃午饭。', promptPy: 'Wǒ zài xuéxiào chī wǔfàn.', options: [
              {key:'A', img:'/images/hsk1v3-bai-8-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-8-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-8-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-8-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 13, prompt: '这个医院里病人多，医生工作很忙。', promptPy: 'Zhège yīyuàn li bìngrén duō, yīshēng gōngzuò hěn máng.', options: [
              {key:'A', img:'/images/hsk1v3-bai-8-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-8-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-8-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-8-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 14, prompt: '桌子上有什么？', promptPy: 'Zhuōzi shang yǒu shénme?', options: [
              {key:'A', text:'医院。', py:'Yīyuàn.'},
              {key:'B', text:'我老师。', py:'Wǒ lǎoshī.'},
              {key:'C', text:'饺子和面条儿。', py:'Jiǎozi hé miàntiáor.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'C' },
            { n: 15, prompt: '她是谁？', promptPy: 'Tā shì shéi?', options: [
              {key:'A', text:'医院。', py:'Yīyuàn.'},
              {key:'B', text:'我老师。', py:'Wǒ lǎoshī.'},
              {key:'C', text:'饺子和面条儿。', py:'Jiǎozi hé miàntiáor.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'B' },
            { n: 16, prompt: '你爸爸在哪儿工作？', promptPy: 'Nǐ bàba zài nǎr gōngzuò?', options: [
              {key:'A', text:'医院。', py:'Yīyuàn.'},
              {key:'B', text:'我老师。', py:'Wǒ lǎoshī.'},
              {key:'C', text:'饺子和面条儿。', py:'Jiǎozi hé miàntiáor.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'A' },
            { n: 17, prompt: '我的房间里（　）一只小猫。', promptPy: 'Wǒ de fángjiān li ( ) yì zhī xiǎo māo.', options: [
              {key:'A', text:'能', py:'néng'},
              {key:'B', text:'有', py:'yǒu'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：我们下午在书店见吧。\n女：好的，我7:00（　）到。', promptPy: 'Wǒmen xiàwǔ zài shūdiàn jiàn ba. / Hǎo de, wǒ 7:00 ( ) dào.', options: [
              {key:'A', text:'能', py:'néng'},
              {key:'B', text:'有', py:'yǒu'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '昨天爸爸在医院工作，哥哥在家里休息，没去书店。\n★说话人的哥哥昨天：', promptPy: 'Zuótiān bàba zài yīyuàn gōngzuò, gēge zài jiā li xiūxi, méi qù shūdiàn.', options: [
              {key:'A', text:'在家里', py:'zài jiā li'},
              {key:'B', text:'在书店', py:'zài shūdiàn'},
              {key:'C', text:'在医院工作', py:'zài yīyuàn gōngzuò'}
            ], answer: 'A' },
            { n: 20, prompt: '我喜欢吃米饭，我女朋友不喜欢。\n★说话人的女朋友不喜欢吃：', promptPy: 'Wǒ xǐhuan chī mǐfàn, wǒ nǚpéngyou bù xǐhuan.', options: [
              {key:'A', text:'米饭', py:'mǐfàn'},
              {key:'B', text:'包子', py:'bāozi'},
              {key:'C', text:'面条儿', py:'miàntiáor'}
            ], answer: 'A' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'白家月和陈天中在王一飞家做客 · Con mèo nhỏ',
   preQuiz:[
     {q:'房间外有一只什么？',opts:['小狗','小猫','小鸟'],ans:1},
     {q:'小猫在哪儿？',opts:['桌子上','桌子下','房间里'],ans:1},
   ],
   lines:[
     {sp:0,zh:'房间外有一只小猫。',py:'Fángjiān wài yǒu yì zhī xiǎo māo.',vn:'Ngoài phòng có một con mèo nhỏ.'},
     {sp:1,zh:'我没看见，它在哪儿呢？',py:'Wǒ méi kànjiàn, tā zài nǎr ne?',vn:'Mình không nhìn thấy, nó ở đâu nhỉ?'},
     {sp:0,zh:'它在桌子下呢。',py:'Tā zài zhuōzi xià ne.',vn:'Nó ở dưới bàn kìa.'},
     {sp:1,zh:'这只小猫真漂亮！',py:'Zhè zhī xiǎo māo zhēn piàoliang!',vn:'Con mèo nhỏ này thật xinh đẹp!'},
   ]},
  {scene:'白家月给李文打电话 · Hẹn gặp ở hiệu sách',
   preQuiz:[
     {q:'白家月和李文在（　）见。',opts:['家里','书店里','书店前'],ans:2},
     {q:'李文下午（　）能到。',opts:['两点','两点半','三点后'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我们在哪儿见呢？',py:'Wǒmen zài nǎr jiàn ne?',vn:'Chúng mình gặp nhau ở đâu nhỉ?'},
     {sp:1,zh:'在学校书店前见吧。',py:'Zài xuéxiào shūdiàn qián jiàn ba.',vn:'Ở trước cửa hiệu sách của trường nhé.'},
     {sp:0,zh:'好的。下午两点你能到吗？',py:'Hǎo de. Xiàwǔ liǎng diǎn nǐ néng dào ma?',vn:'Ừ. 2 giờ chiều bạn đến được không?'},
     {sp:1,zh:'我能到。我在学校吃午饭。',py:'Wǒ néng dào. Wǒ zài xuéxiào chī wǔfàn.',vn:'Mình đến được. Mình ăn trưa ở trường.'},
   ]},
  {scene:'刘明和胡医生在医院聊天儿 · Bố cũng là bác sĩ',
   preQuiz:[
     {q:'大医院里（　）。',opts:['人很少','病人多','医生不忙'],ans:1},
     {q:'胡医生家有（　）医生。',opts:['一个','两个','三个'],ans:1},
   ],
   lines:[
     {sp:0,zh:'小胡，还没吃饭呢？',py:'Xiǎo Hú, hái méi chī fàn ne?',vn:'Tiểu Hồ, em vẫn chưa ăn cơm à?'},
     {sp:1,zh:'没吃呢。',py:'Méi chī ne.',vn:'Em chưa ăn ạ.'},
     {sp:0,zh:'大医院病人多，医生非常忙。',py:'Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.',vn:'Ở bệnh viện lớn, bệnh nhân rất đông, bác sĩ cực kỳ bận.'},
     {sp:1,zh:'是的。我爸爸也在医院工作，他也非常忙。',py:'Shì de. Wǒ bàba yě zài yīyuàn gōngzuò, tā yě fēicháng máng.',vn:'Vâng. Bố em cũng làm việc ở bệnh viện, ông ấy cũng bận lắm.'},
     {sp:0,zh:'你家有两个医生？',py:'Nǐ jiā yǒu liǎng gè yīshēng?',vn:'Nhà em có hai bác sĩ cơ à?'},
     {sp:1,zh:'对。',py:'Duì.',vn:'Vâng.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'房', right:'间'},
  {left:'看', right:'见'},
  {left:'桌', right:'子'},
  {left:'学', right:'校'},
  {left:'书', right:'店'},
  {left:'医', right:'生'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'', blank:'房间外', post:'有一只小猫。', hint:'(ngoài phòng)', ans:'房间外'},
  {pre:'我没看见，它在', blank:'哪儿', post:'呢？', hint:'(ở đâu)', ans:'哪儿'},
  {pre:'它在', blank:'桌子下', post:'呢。', hint:'(dưới bàn)', ans:'桌子下'},
  {pre:'这只小猫真', blank:'漂亮', post:'！', hint:'(xinh đẹp)', ans:'漂亮'},
  {pre:'', blank:'在学校书店前', post:'见吧。', hint:'(ở trước hiệu sách trường)', ans:'在学校书店前'},
  {pre:'我', blank:'能到', post:'。我在学校吃午饭。', hint:'(có thể đến)', ans:'能到'},
  {pre:'大医院', blank:'病人多', post:'，医生非常忙。', hint:'(bệnh nhân đông)', ans:'病人多'},
  {pre:'我爸爸也在医院', blank:'工作', post:'，他也非常忙。', hint:'(làm việc)', ans:'工作'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['房间','外','有','一只','小猫','。'], ans:'房间外有一只小猫。', audio:'房间外有一只小猫。'},
  {words:['它','在','桌子','下','呢','。'], ans:'它在桌子下呢。', audio:'它在桌子下呢。'},
  {words:['我们','在','哪儿','见','呢','？'], ans:'我们在哪儿见呢？', audio:'我们在哪儿见呢？'},
  {words:['在','学校','书店','前','见','吧','。'], ans:'在学校书店前见吧。', audio:'在学校书店前见吧。'},
  {words:['大','医院','病人','多','，','医生','非常','忙','。'], ans:'大医院病人多，医生非常忙。', audio:'大医院病人多，医生非常忙。'},
  {words:['我','爸爸','也','在','医院','工作','。'], ans:'我爸爸也在医院工作。', audio:'我爸爸也在医院工作。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"房间外有一只小猫。" nghĩa là gì?', opts:['Ngoài phòng có một con mèo nhỏ.', 'Trong phòng có một con chó nhỏ.', 'Ngoài phòng có một con chim nhỏ.', 'Trong nhà có nhiều mèo.'], ans:0},
  {q:'Lượng từ "只" dùng để đếm loại danh từ nào?', opts:['động vật (con)', 'đồ vật phẳng', 'người', 'thời gian'], ans:0},
  {q:'"我没看见" nghĩa là gì?', opts:['Tôi không nhìn thấy', 'Tôi đã nhìn thấy', 'Tôi không muốn xem', 'Tôi đang tìm'], ans:0},
  {q:'Giới từ "在" trong "我在学校吃午饭" biểu thị điều gì?', opts:['vị trí diễn ra hành động', 'thời gian', 'đối tượng', 'nguyên nhân'], ans:0},
  {q:'"你能到吗？" nghĩa là gì?', opts:['Bạn có thể đến được không?', 'Bạn đã đến chưa?', 'Bạn muốn đến không?', 'Bạn đến khi nào?'], ans:0},
  {q:'"大医院病人多" nghĩa là gì?', opts:['Bệnh viện lớn có nhiều bệnh nhân', 'Bệnh viện lớn ít bệnh nhân', 'Bác sĩ ở bệnh viện lớn rất ít', 'Bệnh viện nhỏ đông người'], ans:0},
  {q:'"我爸爸也在医院工作" nghĩa là gì?', opts:['Bố tôi cũng làm việc ở bệnh viện', 'Bố tôi là bệnh nhân', 'Bố tôi không làm việc', 'Bố tôi ở nhà'], ans:0},
  {q:'Phương vị từ nào được giới thiệu trong bài này?', opts:['上、下、里、外、前、后', '左、右、东、西', '早、晚、今、明', '大、小、多、少'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："小猫在哪儿呢？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Con mèo ở đâu nhỉ?" Bạn trả lời thế nào?',
     hint: '它在……', sample: '它在桌子下呢。', sample_vn: 'Nó ở dưới bàn kìa.',
     note: 'Cấu trúc "在 + vị trí + 呢" dùng để nói vị trí hiện tại của một vật/người.'},
    {q_zh: '朋友约你见面，你想约在学校书店前，你怎么说？', q_vn: 'Bạn của bạn hẹn gặp mặt, bạn muốn hẹn ở trước hiệu sách trường, bạn nói thế nào?',
     hint: '在……见吧。', sample: '在学校书店前见吧。', sample_vn: 'Gặp nhau ở trước hiệu sách của trường nhé.',
     note: 'Giới từ "在" + nơi chốn đứng trước động từ 见, chỉ nơi diễn ra hành động.'},
    {q_zh: '有人问你："你能到吗？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Bạn đến được không?" Bạn trả lời thế nào?',
     hint: '我能/不能……', sample: '我能到，下午两点。', sample_vn: 'Mình đến được, 2 giờ chiều.',
     note: 'Động từ năng nguyện "能" đứng trước động từ, biểu thị có khả năng/điều kiện làm việc gì.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Ngoài phòng có một con mèo nhỏ. Nó ở dưới bàn.', zh:'房间外有一只小猫。它在桌子下呢。', py:'Fángjiān wài yǒu yì zhī xiǎo māo. Tā zài zhuōzi xià ne.'},
  {vi:'Chúng ta gặp nhau ở trước hiệu sách của trường nhé.', zh:'我们在学校书店前见吧。', py:'Wǒmen zài xuéxiào shūdiàn qián jiàn ba.'},
  {vi:'2 giờ chiều bạn đến được không? — Mình đến được.', zh:'下午两点你能到吗？——我能到。', py:'Xiàwǔ liǎng diǎn nǐ néng dào ma? — Wǒ néng dào.'},
  {vi:'Bệnh viện lớn có nhiều bệnh nhân, bác sĩ rất bận.', zh:'大医院病人多，医生非常忙。', py:'Dà yīyuàn bìngrén duō, yīshēng fēicháng máng.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Bố tôi cũng làm việc ở bệnh viện.', zh:'我爸爸也在医院工作。', py:'Wǒ bàba yě zài yīyuàn gōngzuò.'},
  {vi:'Bạn ăn trưa ở đâu?', zh:'你在哪儿吃午饭？', py:'Nǐ zài nǎr chī wǔfàn?'},
  {vi:'Con mèo này thật xinh đẹp!', zh:'这只小猫真漂亮！', py:'Zhè zhī xiǎo māo zhēn piàoliang!'},
  {vi:'Tôi hiện giờ có việc, không thể đi được.', zh:'我现在有事，不能去。', py:'Wǒ xiànzài yǒu shì, bù néng qù.'},
];
