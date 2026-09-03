// ══════════════════════════════════════════
// DATA — HSK1 (3.0 Mới) Bài 9: 我明天上午在学校学习
// Nguồn: Giáo trình New HSK 1 (chuẩn 3.0) - Trung Việt, NXB Dân Trí
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'前边',py:'qiánbian',pos:'Danh từ',vn:'phía trước',em:'👉',lesson:1,
   ex_zh:'学校前边有一家电影院。',ex_py:'Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.',ex_vn:'Phía trước trường học có một rạp chiếu phim.',
   exList:[{zh:'学校前边有一家电影院。',py:'Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.',vn:'Phía trước trường học có một rạp chiếu phim.'}],
   hanzi:[
     {c:'前',p:'qián',type:'上下结构 · Trên-dưới',st:9,ord:'丷→一 (trên) → 月→刀 (dưới)',rad:'刀 (đao – con dao)',mean:'trước, phía trước',
      tip:'丷(mũi thuyền) + 一(mặt nước) + 月(thân thuyền, biến thể của 舟) + 刀(mái chèo đẩy đi) → hình ảnh thuyền tiến lên = TRƯỚC, phía TRƯỚC.',
      cf:'煎 (jiān – "chiên, rán", chứa 前 ở trên + 灬ở dưới)',w:'前边 / 以前 / 前天'},
     {c:'边',p:'bian',type:'半包围结构 · Bán bao vây',st:5,ord:'力(biến thể) trên phải → 辶(sước) bao dưới trái',rad:'辶 (sước – đi, chuyển động)',mean:'bên, phía, cạnh',
      tip:'辶(đi, chuyển động) bao lấy 力(sức lực) → đi tới BÊN CẠNH, ranh giới một khu vực = BÊN, PHÍA.',
      cf:'达 (dá – "đạt tới", cũng có bộ 辶")',w:'前边 / 外边 / 里边'},
   ]},
  {n:2,zh:'边',py:'bian',pos:'Hậu tố',vn:'phía, bên',em:'📐',lesson:1,
   ex_zh:'我们七点在电影院外边见，好吗？',ex_py:'Wǒmen qī diǎn zài diànyǐngyuàn wàibian jiàn, hǎo ma?',ex_vn:'Chúng mình gặp nhau lúc 7 giờ ở bên ngoài rạp chiếu phim, được không?',
   exList:[{zh:'我们七点在电影院外边见，好吗？',py:'Wǒmen qī diǎn zài diànyǐngyuàn wàibian jiàn, hǎo ma?',vn:'Chúng mình gặp nhau lúc 7 giờ ở bên ngoài rạp chiếu phim, được không?'}],
   hanzi:[
     {c:'边',p:'bian',type:'半包围结构 · Bán bao vây',st:5,ord:'力(biến thể) trên phải → 辶(sước) bao dưới trái',rad:'辶 (sước – đi, chuyển động)',mean:'bên, phía, cạnh',
      tip:'辶(đi, chuyển động) bao lấy 力(sức lực) → đi tới BÊN CẠNH, ranh giới một khu vực = BÊN, PHÍA.',
      cf:'达 (dá – "đạt tới", cũng có bộ 辶")',w:'外边 / 里边 / 那边'},
   ]},
  {n:3,zh:'家',py:'jiā',pos:'Lượng từ',vn:'cái, chiếc (dùng cho cửa hàng, cơ quan, doanh nghiệp)',em:'🏢',lesson:1,
   ex_zh:'学校前边有一家电影院。',ex_py:'Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.',ex_vn:'Phía trước trường học có một rạp chiếu phim.',
   exList:[{zh:'学校前边有一家电影院。',py:'Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.',vn:'Phía trước trường học có một rạp chiếu phim.'}],
   hanzi:[
     {c:'家',p:'jiā',type:'上下结构 · Trên-dưới',st:10,ord:'宀(miên) trên → 豕(thỉ) dưới',rad:'宀 (miên – mái nhà)',mean:'nhà, gia đình; cũng dùng làm lượng từ cho cửa hàng/cơ quan',
      tip:'宀(mái nhà) + 豕(con lợn) → thời xưa nuôi lợn dưới nhà sàn, biểu tượng của NHÀ; mượn nghĩa để đếm các "cơ sở" như cửa hàng, công ty.',
      cf:'豪 (háo – "hào hiệp")',w:'一家电影院 / 我家'},
   ]},
  {n:4,zh:'那个',py:'nàge',pos:'Đại từ',vn:'đó, cái đó',em:'👆',lesson:1,
   ex_zh:'我们晚上去那个电影院看电影吧。',ex_py:'Wǒmen wǎnshang qù nàge diànyǐngyuàn kàn diànyǐng ba.',ex_vn:'Tối chúng mình đến rạp chiếu phim đó xem phim nhé.',
   exList:[{zh:'我们晚上去那个电影院看电影吧。',py:'Wǒmen wǎnshang qù nàge diànyǐngyuàn kàn diànyǐng ba.',vn:'Tối chúng mình đến rạp chiếu phim đó xem phim nhé.'}],
   hanzi:[
     {c:'那',p:'nà',type:'左右结构 · Trái-phải',st:6,ord:'尹(biến thể) trái → 阝(ấp) phải',rad:'阝 (ấp – vùng đất, tai phải)',mean:'kia, đó, ấy',
      tip:'阝(biến thể của 邑 - vùng đất) chỉ một nơi, phần bên trái mượn âm đọc → chỉ vật/nơi ở KIA, ĐÓ (xa người nói).',
      cf:'哪 (nǎ – "nào?", thêm bộ 口, dùng để hỏi thay vì chỉ định")',w:'那个 / 那是 / 那里'},
     {c:'个',p:'gè',type:'独体字 · Chữ đơn',st:3,ord:'人(nhân) trên → 丨(nét sổ) dưới',rad:'人 (nhân – người)',mean:'cái, chiếc (lượng từ)',
      tip:'亻Người (人) đứng trên một nét sổ thẳng (丨) tượng trưng một CÁ THỂ đơn lẻ → dùng làm lượng từ đếm CÁI, CHIẾC chung chung.',
      cf:'介 (jiè – "giới thiệu", hình dạng gần giống")',w:'那个 / 一个 / 几个'},
   ]},
  {n:5,zh:'外边',py:'wàibian',pos:'Danh từ',vn:'phía ngoài, bên ngoài',em:'🌳',lesson:1,
   ex_zh:'我们七点在电影院外边见，好吗？',ex_py:'Wǒmen qī diǎn zài diànyǐngyuàn wàibian jiàn, hǎo ma?',ex_vn:'Chúng mình gặp nhau lúc 7 giờ ở bên ngoài rạp chiếu phim, được không?',
   exList:[{zh:'我们七点在电影院外边见，好吗？',py:'Wǒmen qī diǎn zài diànyǐngyuàn wàibian jiàn, hǎo ma?',vn:'Chúng mình gặp nhau lúc 7 giờ ở bên ngoài rạp chiếu phim, được không?'}],
   hanzi:[
     {c:'外',p:'wài',type:'左右结构 · Trái-phải',st:5,ord:'夕(tịch) trái → 卜(bốc) phải',rad:'夕 (tịch – buổi tối)',mean:'ngoài, bên ngoài',
      tip:'夕(buổi tối, trăng mờ) + 卜(bói toán) → xưa cho rằng bói vào ban đêm là điều khác thường, NGOÀI lệ thường → nghĩa BÊN NGOÀI.',
      cf:'多 (duō – "nhiều", cũng có bộ 夕")',w:'外边 / 外面 / 国外'},
     {c:'边',p:'bian',type:'半包围结构 · Bán bao vây',st:5,ord:'力(biến thể) trên phải → 辶(sước) bao dưới trái',rad:'辶 (sước – đi, chuyển động)',mean:'bên, phía, cạnh',
      tip:'辶(đi, chuyển động) bao lấy 力(sức lực) → đi tới BÊN CẠNH, ranh giới một khu vực = BÊN, PHÍA.',
      cf:'达 (dá – "đạt tới", cũng có bộ 辶")',w:'外边 / 前边 / 里边'},
   ]},
  {n:6,zh:'椅子',py:'yǐzi',pos:'Danh từ',vn:'ghế',em:'🪑',lesson:2,
   ex_zh:'椅子上有一本中文书，那是谁的书？',ex_py:'Yǐzi shang yǒu yì běn Zhōngwén shū, nà shì shéi de shū?',ex_vn:'Trên ghế có một quyển sách tiếng Trung, đó là sách của ai?',
   exList:[{zh:'椅子上有一本中文书，那是谁的书？',py:'Yǐzi shang yǒu yì běn Zhōngwén shū, nà shì shéi de shū?',vn:'Trên ghế có một quyển sách tiếng Trung, đó là sách của ai?'}],
   hanzi:[
     {c:'椅',p:'yǐ',type:'左右结构 · Trái-phải',st:12,ord:'木(mộc) trái → 奇(kỳ) phải',rad:'木 (mộc – gỗ, cây)',mean:'ghế',
      tip:'木(gỗ) + 奇(kỳ, gần âm "yǐ") → đồ vật làm bằng GỖ để ngồi dựa lưng = GHẾ.',
      cf:'倚 (yǐ – "dựa vào", cùng âm, bộ 亻thay vì 木")',w:'椅子 / 一把椅子'},
     {c:'子',p:'zi',type:'独体字 · Chữ đơn',st:3,ord:'了(biến thể) → 一(nét ngang cắt qua)',rad:'子 (tử – tự thành bộ)',mean:'con (danh từ); hậu tố danh từ',
      tip:'Hình vẽ đứa TRẺ sơ sinh quấn tã, hai tay dang ra → nghĩa gốc là CON; thường làm hậu tố danh từ không mang nghĩa riêng (như 椅子, 桌子).',
      cf:'孑 (jié – "cô độc", thiếu một nét móc so với 子")',w:'椅子 / 儿子 / 孩子'},
   ]},
  {n:7,zh:'上',py:'shang',pos:'Danh từ',vn:'trên, phía trên (dùng sau danh từ để chỉ vị trí)',em:'⬆️',lesson:2,
   ex_zh:'椅子上有一本中文书。',ex_py:'Yǐzi shang yǒu yì běn Zhōngwén shū.',ex_vn:'Trên ghế có một quyển sách tiếng Trung.',
   exList:[{zh:'椅子上有一本中文书。',py:'Yǐzi shang yǒu yì běn Zhōngwén shū.',vn:'Trên ghế có một quyển sách tiếng Trung.'}],
   hanzi:[
     {c:'上',p:'shang',type:'独体字 · Chữ đơn',st:3,ord:'丨(sổ) → 一(ngang ngắn, trên) → 一(ngang dài, nền dưới)',rad:'一 (nhất – một)',mean:'trên, phía trên',
      tip:'Một vạch ngắn đặt PHÍA TRÊN một đường ngang dài (đường chuẩn/mặt đất) → chỉ vị trí Ở TRÊN.',
      cf:'下 (xià – "dưới", ngược nghĩa, hình gần đối xứng")',w:'椅子上 / 上午 / 上课'},
   ]},
  {n:8,zh:'本',py:'běn',pos:'Lượng từ',vn:'quyển, cuốn',em:'📖',lesson:2,
   ex_zh:'这是我的第二本中文书。',ex_py:'Zhè shì wǒ de dì-èr běn Zhōngwén shū.',ex_vn:'Đây là quyển sách tiếng Trung thứ hai của mình.',
   exList:[{zh:'这是我的第二本中文书。',py:'Zhè shì wǒ de dì-èr běn Zhōngwén shū.',vn:'Đây là quyển sách tiếng Trung thứ hai của mình.'}],
   hanzi:[
     {c:'本',p:'běn',type:'独体字 · Chữ đơn',st:5,ord:'木(mộc) → 一(nét ngang chỉ gốc rễ)',rad:'木 (mộc – gỗ, cây)',mean:'gốc, rễ; lượng từ đếm sách vở',
      tip:'Thêm một nét ngang vào phần GỐC của chữ 木(cây) để chỉ rõ vị trí RỄ CÂY → nghĩa GỐC, CĂN BẢN; mượn làm lượng từ đếm sách.',
      cf:'未 (wèi – "chưa", nét ngang ngắn ở TRÊN thay vì dưới")',w:'一本书 / 课本 / 本子'},
   ]},
  {n:9,zh:'书',py:'shū',pos:'Danh từ',vn:'sách',em:'📚',lesson:2,
   ex_zh:'那是谁的书？',ex_py:'Nà shì shéi de shū?',ex_vn:'Đó là sách của ai?',
   exList:[{zh:'那是谁的书？',py:'Nà shì shéi de shū?',vn:'Đó là sách của ai?'}],
   hanzi:[
     {c:'书',p:'shū',type:'独体字 · Chữ đơn',st:4,ord:'ㄋ→乛→丨→丶',rad:'亅 (quyết, biến thể)',mean:'sách',
      tip:'Hình cuộn giấy/thẻ tre buộc lại thời cổ → SÁCH.',
      cf:'与 (yǔ – "và, cho")',w:'一本书 / 中文书'},
   ]},
  {n:10,zh:'那',py:'nà',pos:'Đại từ',vn:'kia, đó',em:'👉',lesson:2,
   ex_zh:'那是谁的书？',ex_py:'Nà shì shéi de shū?',ex_vn:'Đó là sách của ai?',
   exList:[{zh:'那是谁的书？',py:'Nà shì shéi de shū?',vn:'Đó là sách của ai?'}],
   hanzi:[
     {c:'那',p:'nà',type:'左右结构 · Trái-phải',st:6,ord:'尹(biến thể) trái → 阝(ấp) phải',rad:'阝 (ấp – vùng đất, tai phải)',mean:'kia, đó, ấy',
      tip:'阝(biến thể của 邑 - vùng đất) chỉ một nơi, phần bên trái mượn âm đọc → chỉ vật/nơi ở KIA, ĐÓ (xa người nói).',
      cf:'哪 (nǎ – "nào?", thêm bộ 口, dùng để hỏi thay vì chỉ định")',w:'那是 / 那个 / 那里'},
   ]},
  {n:11,zh:'第',py:'dì',pos:'Tiền tố',vn:'thứ (dùng biểu thị số thứ tự)',em:'🔢',lesson:2,
   ex_zh:'这是我的第二本中文书。',ex_py:'Zhè shì wǒ de dì-èr běn Zhōngwén shū.',ex_vn:'Đây là quyển sách tiếng Trung thứ hai của mình.',
   exList:[{zh:'这是我的第二本中文书。',py:'Zhè shì wǒ de dì-èr běn Zhōngwén shū.',vn:'Đây là quyển sách tiếng Trung thứ hai của mình.'}],
   hanzi:[
     {c:'第',p:'dì',type:'上下结构 · Trên-dưới',st:11,ord:'⺮(trúc, trên) → 弟(đệ, dưới)',rad:'竹 (trúc – tre)',mean:'thứ (tiền tố chỉ số thứ tự)',
      tip:'⺮(tre, dùng làm thẻ tre đánh số thời xưa) + 弟(em, chỉ thứ bậc trong nhà) → ghi THỨ TỰ trên thẻ tre = THỨ.',
      cf:'弟 (dì – "em trai", thiếu bộ ⺮ trên đầu")',w:'第一 / 第二本 / 第几'},
   ]},
  {n:12,zh:'学习',py:'xuéxí',pos:'Động từ',vn:'học, học tập',em:'📝',lesson:2,
   ex_zh:'我明天上午在学校学习。',ex_py:'Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.',ex_vn:'Sáng mai mình học ở trường.',
   exList:[{zh:'我明天上午在学校学习。',py:'Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.',vn:'Sáng mai mình học ở trường.'}],
   hanzi:[
     {c:'学',p:'xué',type:'上下结构 · Trên-dưới',st:8,ord:'⺍(biến thể của 爻) trên → 冖(mịch) giữa → 子(tử) dưới',rad:'子 (tử – con)',mean:'học, học tập',
      tip:'Phía trên tượng trưng tri thức đan xen (爻), 冖(mái che) như MÁI TRƯỜNG, bên dưới là 子(đứa trẻ) đang ngồi HỌC dưới mái trường.',
      cf:'觉 (jué/jiào – "cảm giác/ngủ", phần trên giống nhau")',w:'学习 / 学校 / 学生'},
     {c:'习',p:'xí',type:'独体字 · Chữ đơn',st:3,ord:'乙(nét gập, biến thể của 羽 lược giản) → 一(nét ngang nhỏ bên trong)',rad:'乙 (ất, biến thể của 羽)',mean:'luyện tập, ôn tập',
      tip:'Chữ giản thể lược từ 習 (trên là 羽-lông chim non tập bay, dưới là 白-tổ/mặt trời) → chim non vỗ cánh LUYỆN TẬP bay mỗi ngày = HỌC, LUYỆN TẬP.',
      cf:'刁 (diāo – "xảo trá", hình gần giống 习")',w:'学习 / 习惯 / 复习'},
   ]},
  {n:13,zh:'做',py:'zuò',pos:'Động từ',vn:'làm',em:'🔧',lesson:3,
   ex_zh:'明天星期六，你做什么？',ex_py:'Míngtiān xīngqīliù, nǐ zuò shénme?',ex_vn:'Mai là thứ Bảy rồi, em định làm gì?',
   exList:[
     {zh:'明天星期六，你做什么？',py:'Míngtiān xīngqīliù, nǐ zuò shénme?',vn:'Mai là thứ Bảy rồi, em định làm gì?'},
     {zh:'您星期六做什么？',py:'Nín xīngqīliù zuò shénme?',vn:'Thứ Bảy chị làm gì?'},
   ],
   hanzi:[
     {c:'做',p:'zuò',type:'左右结构 · Trái-phải',st:11,ord:'亻(nhân) trái → 故(biến thể) phải',rad:'亻 (nhân – người)',mean:'làm, chế biến, nấu',
      tip:'亻(người) đứng ra LÀM một việc gì đó cụ thể.',
      cf:'作 (zuò – "làm", nghĩa gần giống")',w:'做什么 / 做饭'},
   ]},
  {n:14,zh:'白天',py:'báitiān',pos:'Danh từ',vn:'ban ngày',em:'☀️',lesson:3,
   ex_zh:'我白天在家里读书，晚上和朋友们去外边唱歌。',ex_py:'Wǒ báitiān zài jiā li dúshū, wǎnshang hé péngyoumen qù wàibian chàng gē.',ex_vn:'Ban ngày em sẽ ở nhà đọc sách, buổi tối sẽ ra ngoài hát cùng bạn bè.',
   exList:[{zh:'我白天在家里读书，晚上和朋友们去外边唱歌。',py:'Wǒ báitiān zài jiā li dúshū, wǎnshang hé péngyoumen qù wàibian chàng gē.',vn:'Ban ngày em sẽ ở nhà đọc sách, buổi tối sẽ ra ngoài hát cùng bạn bè.'}],
   hanzi:[
     {c:'白',p:'bái',type:'独体字 · Chữ đơn',st:5,ord:'丿(phẩy) trên → 日(nhật, biến thể) dưới',rad:'白 (bạch – tự thành bộ)',mean:'trắng, sáng rõ; ban ngày',
      tip:'Như chữ 日(mặt trời) thêm một nét phẩy phía trên tượng trưng ÁNH SÁNG chiếu ra → nghĩa TRẮNG, SÁNG RÕ; có ánh sáng mặt trời nên 白天 = BAN NGÀY.',
      cf:'百 (bǎi – "trăm", thêm nét ngang trên đầu")',w:'白天 / 白色 / 明白'},
     {c:'天',p:'tiān',type:'独体字 · Chữ đơn',st:4,ord:'一(nét ngang trên, chỉ bầu trời) → 大(đại, người dang tay) dưới',rad:'大 (đại – to lớn)',mean:'trời, bầu trời; ngày',
      tip:'一(một vạch ngang chỉ khoảng KHÔNG bao la) đặt trên chữ 大(người dang rộng tay chân) → người đứng dưới bầu TRỜI rộng lớn = TRỜI; cũng dùng chỉ một NGÀY.',
      cf:'夭 (yāo – "chết yểu", nét 丿kéo dài lệch khác 天")',w:'白天 / 明天 / 天气'},
   ]},
  {n:15,zh:'读书',py:'dúshū',pos:'Động từ',vn:'đọc sách, xem sách',em:'📖',lesson:3,
   ex_zh:'我白天在家里读书。',ex_py:'Wǒ báitiān zài jiā li dúshū.',ex_vn:'Ban ngày em sẽ ở nhà đọc sách.',
   exList:[{zh:'我白天在家里读书。',py:'Wǒ báitiān zài jiā li dúshū.',vn:'Ban ngày em sẽ ở nhà đọc sách.'}],
   hanzi:[
     {c:'读',p:'dú',type:'左右结构 · Trái-phải',st:10,ord:'讠(ngôn) trái → 卖(mại) phải',rad:'讠 (ngôn – lời nói, biến thể của 言)',mean:'đọc',
      tip:'讠(lời nói, ngôn ngữ) + 卖(bán, gần âm "dú") → dùng LỜI để truyền đạt nội dung chữ viết = ĐỌC.',
      cf:'卖 (mài – "bán", thiếu bộ 讠")',w:'读书 / 读音 / 朗读'},
     {c:'书',p:'shū',type:'独体字 · Chữ đơn',st:4,ord:'ㄋ→乛→丨→丶',rad:'亅 (quyết, biến thể)',mean:'sách',
      tip:'Hình cuộn giấy/thẻ tre buộc lại thời cổ → SÁCH.',
      cf:'与 (yǔ – "và, cho")',w:'读书 / 一本书 / 中文书'},
   ]},
  {n:16,zh:'和',py:'hé',pos:'Giới từ',vn:'với, cùng',em:'🤝',lesson:3,
   ex_zh:'晚上和朋友们去外边唱歌。',ex_py:'Wǎnshang hé péngyoumen qù wàibian chàng gē.',ex_vn:'Buổi tối sẽ ra ngoài hát cùng bạn bè.',
   exList:[{zh:'晚上和朋友们去外边唱歌。',py:'Wǎnshang hé péngyoumen qù wàibian chàng gē.',vn:'Buổi tối sẽ ra ngoài hát cùng bạn bè.'}],
   hanzi:[
     {c:'和',p:'hé',type:'左右结构 · Trái-phải',st:8,ord:'禾(hòa) trái → 口(khẩu) phải',rad:'口 (khẩu – miệng)',mean:'và, cùng, với',
      tip:'禾(lúa, no đủ) + 口(miệng ăn) → mọi người hoà thuận, ghép nối các thứ VÀ, CÙNG nhau.',
      cf:'合 (hé – "hợp", nghĩa gần giống")',w:'我和朋友 / 爸爸和妈妈'},
   ]},
  {n:17,zh:'朋友',py:'péngyou',pos:'Danh từ',vn:'bạn, bạn bè',em:'🫂',lesson:3,
   ex_zh:'晚上和朋友们去外边唱歌。',ex_py:'Wǎnshang hé péngyoumen qù wàibian chàng gē.',ex_vn:'Buổi tối sẽ ra ngoài hát cùng bạn bè.',
   exList:[{zh:'晚上和朋友们去外边唱歌。',py:'Wǎnshang hé péngyoumen qù wàibian chàng gē.',vn:'Buổi tối sẽ ra ngoài hát cùng bạn bè.'}],
   hanzi:[
     {c:'朋',p:'péng',type:'左右结构 · Trái-phải',st:8,ord:'月(nguyệt) trái → 月(nguyệt) phải',rad:'月 (nguyệt – mặt trăng)',mean:'bạn bè',
      tip:'Hai chữ 月 (hình hai miếng ngọc quý xưa dùng làm tiền) đặt cạnh nhau → những người NGANG HÀNG, thân thiết = BẠN.',
      cf:'明 (míng – "sáng", gồm 日+月")',w:'朋友'},
     {c:'友',p:'yǒu',type:'半包围结构 · Bán bao vây',st:4,ord:'ナ(biến thể) → 又(hựu) dưới',rad:'又 (hựu – bàn tay)',mean:'bạn',
      tip:'Hai bàn tay 又 nắm lấy nhau → tình BẠN gắn kết.',
      cf:'反 (fǎn – "trái lại")',w:'朋友 / 女朋友'},
   ]},
  {n:18,zh:'唱',py:'chàng',pos:'Động từ',vn:'hát',em:'🎤',lesson:3,
   ex_zh:'你唱歌很好听。',ex_py:'Nǐ chàng gē hěn hǎotīng.',ex_vn:'Bạn hát rất hay.',
   exList:[{zh:'你唱歌很好听。',py:'Nǐ chàng gē hěn hǎotīng.',vn:'Bạn hát rất hay.'}],
   hanzi:[
     {c:'唱',p:'chàng',type:'左右结构 · Trái-phải',st:11,ord:'口(khẩu) trái → 昌(xương, 日+日) phải',rad:'口 (khẩu – miệng)',mean:'hát, xướng',
      tip:'口(miệng) + 昌(hưng thịnh, sáng rực, gồm hai chữ 日) → dùng MIỆNG cất lên tiếng vang rực rỡ = HÁT.',
      cf:'唯 (wéi – "chỉ, duy", cùng bộ 口 bên trái")',w:'唱歌 / 演唱'},
   ]},
  {n:19,zh:'歌',py:'gē',pos:'Danh từ',vn:'bài hát',em:'🎵',lesson:3,
   ex_zh:'你唱歌很好听。',ex_py:'Nǐ chàng gē hěn hǎotīng.',ex_vn:'Bạn hát rất hay.',
   exList:[{zh:'你唱歌很好听。',py:'Nǐ chàng gē hěn hǎotīng.',vn:'Bạn hát rất hay.'}],
   hanzi:[
     {c:'歌',p:'gē',type:'左右结构 · Trái-phải',st:14,ord:'哥(ca, 可+可) trái → 欠(khiếm) phải',rad:'欠 (khiếm – ngáp, thở ra)',mean:'bài hát, ca hát',
      tip:'哥(âm "ca", anh trai) + 欠(mở miệng thở ra, hà hơi) → mở miệng cất tiếng ngân nga = BÀI HÁT.',
      cf:'哥 (gē – "anh trai", thiếu bộ 欠 bên phải")',w:'唱歌 / 歌曲'},
   ]},
  {n:20,zh:'好听',py:'hǎotīng',pos:'Tính từ',vn:'hay, nghe hay',em:'👂',lesson:3,
   ex_zh:'你唱歌很好听。',ex_py:'Nǐ chàng gē hěn hǎotīng.',ex_vn:'Bạn hát rất hay.',
   exList:[{zh:'你唱歌很好听。',py:'Nǐ chàng gē hěn hǎotīng.',vn:'Bạn hát rất hay.'}],
   hanzi:[
     {c:'好',p:'hǎo',type:'左右结构 · Trái-phải',st:6,ord:'女(nữ) trái → 子(tử) phải',rad:'女 (nữ – phụ nữ)',mean:'tốt, hay, đẹp',
      tip:'女(người mẹ) + 子(đứa con) → mẹ bồng con là hình ảnh TỐT ĐẸP, hạnh phúc → nghĩa TỐT, HAY.',
      cf:'妈 (mā – "mẹ", cùng bộ 女 bên trái")',w:'好听 / 你好 / 好的'},
     {c:'听',p:'tīng',type:'左右结构 · Trái-phải',st:7,ord:'口(khẩu) trái → 斤(cân) phải',rad:'口 (khẩu – miệng)',mean:'nghe',
      tip:'口(miệng, nơi phát ra tiếng nói) + 斤(mượn âm, gần đọc "tīng") → tai lắng NGHE âm thanh phát ra từ miệng.',
      cf:'斤 (jīn – "cân, đơn vị khối lượng", thiếu bộ 口")',w:'好听 / 听说 / 听音乐'},
   ]},
  {n:21,zh:'电视',py:'diànshì',pos:'Danh từ',vn:'ti vi',em:'📺',lesson:3,
   ex_zh:'我在家里做饭、看电视，和孩子们、小狗玩。',ex_py:'Wǒ zài jiā li zuò fàn, kàn diànshì, hé háizimen, xiǎo gǒu wán.',ex_vn:'Em ở nhà nấu ăn, xem ti vi, chơi với các con và con chó nhỏ.',
   exList:[{zh:'我在家里做饭、看电视，和孩子们、小狗玩。',py:'Wǒ zài jiā li zuò fàn, kàn diànshì, hé háizimen, xiǎo gǒu wán.',vn:'Em ở nhà nấu ăn, xem ti vi, chơi với các con và con chó nhỏ.'}],
   hanzi:[
     {c:'电',p:'diàn',type:'独体字 · Chữ đơn',st:5,ord:'曰(khung trên, biến thể) → 乙(nét gập kéo dài dưới)',rad:'乙 (ất – nét gập)',mean:'điện',
      tip:'Chữ giản từ 電 (雨-mưa trên đầu + 申-tia chớp ngoằn ngoèo dưới) → tia CHỚP trong cơn mưa mang năng lượng mạnh = ĐIỆN.',
      cf:'由 (yóu – "từ, bởi", hình gần giống phần trên của 电")',w:'电视 / 电影 / 电话'},
     {c:'视',p:'shì',type:'左右结构 · Trái-phải',st:8,ord:'礻(kỳ, biến thể của 示, phần âm) trái → 见(kiến, phần nghĩa) phải',rad:'见 (kiến – nhìn, thấy)',mean:'nhìn, xem, thị giác',
      tip:'示(bày ra, phát âm gần "shì") + 见(nhìn thấy, mang nghĩa) → bộ 见 cho biết chữ này liên quan THỊ GIÁC, NHÌN, XEM.',
      cf:'祝 (zhù – "chúc", cùng có phần 礻bên trái nhưng khác bộ nghĩa")',w:'电视 / 视力'},
   ]},
  {n:22,zh:'狗',py:'gǒu',pos:'Danh từ',vn:'chó',em:'🐶',lesson:3,
   ex_zh:'我也有一只小狗。',ex_py:'Wǒ yě yǒu yì zhī xiǎo gǒu.',ex_vn:'Em cũng có một con chó nhỏ.',
   exList:[
     {zh:'我在家里做饭、看电视，和孩子们、小狗玩。',py:'Wǒ zài jiā li zuò fàn, kàn diànshì, hé háizimen, xiǎo gǒu wán.',vn:'Em ở nhà nấu ăn, xem ti vi, chơi với các con và con chó nhỏ.'},
     {zh:'我也有一只小狗。',py:'Wǒ yě yǒu yì zhī xiǎo gǒu.',vn:'Em cũng có một con chó nhỏ.'},
   ],
   hanzi:[
     {c:'狗',p:'gǒu',type:'左右结构 · Trái-phải',st:8,ord:'犭(khuyển) trái → 句(cú) phải',rad:'犭 (khuyển – thú vật, biến thể)',mean:'con chó',
      tip:'犭(loài thú) + 句(mượn âm) → CON CHÓ.',
      cf:'苟 (gǒu – "cẩu thả", cùng phần 句")',w:'小狗'},
   ]},
  {n:23,zh:'玩',py:'wán',pos:'Động từ',vn:'chơi',em:'🎮',lesson:3,
   ex_zh:'我在家里做饭、看电视，和孩子们、小狗玩。',ex_py:'Wǒ zài jiā li zuò fàn, kàn diànshì, hé háizimen, xiǎo gǒu wán.',ex_vn:'Em ở nhà nấu ăn, xem ti vi, chơi với các con và con chó nhỏ.',
   exList:[{zh:'我在家里做饭、看电视，和孩子们、小狗玩。',py:'Wǒ zài jiā li zuò fàn, kàn diànshì, hé háizimen, xiǎo gǒu wán.',vn:'Em ở nhà nấu ăn, xem ti vi, chơi với các con và con chó nhỏ.'}],
   hanzi:[
     {c:'玩',p:'wán',type:'左右结构 · Trái-phải',st:8,ord:'王(vương, biến thể của 玉) trái → 元(nguyên) phải',rad:'王 (vương – biến thể của 玉, ngọc)',mean:'chơi, đùa',
      tip:'王(bộ 玉 - ngọc quý) + 元(nguyên, mượn âm) → thời xưa trẻ con thích cầm NGỌC để nghịch, đùa CHƠI → nghĩa CHƠI, ĐÙA.',
      cf:'玉 (yù – "ngọc", không có phần 元 bên phải")',w:'玩 / 好玩 / 玩具'},
   ]},
];

var wuData = [
  {img:'/images/hsk1v3-bai-9/xiaogou.jpg',label:'小狗',py:'xiǎo gǒu',letter:'A'},
  {img:'/images/hsk1v3-bai-9/dianshi.jpg',label:'电视',py:'diànshì',letter:'B'},
  {img:'/images/hsk1v3-bai-9/xuexi.jpg',label:'学习',py:'xuéxí',letter:'C'},
  {img:'/images/hsk1v3-bai-9/wan.jpg',label:'玩',py:'wán',letter:'D'},
  {img:'/images/hsk1v3-bai-9/yizi.jpg',label:'椅子',py:'yǐzi',letter:'E'},
  {img:'/images/hsk1v3-bai-9/shu.jpg',label:'书',py:'shū',letter:'F'},
];

// ══════════════════════════════════════════
// LUYỆN TẬP SÁCH BÀI TẬP (New HSK Course 1 Workbook, Bài 9: Ngữ âm + Hán tự + Mô phỏng đề thi)
// ══════════════════════════════════════════
var wbData = {
  sections: [
    {
      title: 'Ngữ âm',
      audio: '/audio/hsk1v3-bai-9/wb-yuyin.mp3',
      blocks: [
        { type: 'wordlist', caption: 'Đánh dấu thanh điệu — nghe và đọc theo',
          items: ['hǎo', 'xiè', 'nín', 'zhōng', 'tóngxué', 'dàjiā', 'zàijiàn', 'rènshi'] },
        { type: 'tonemc', caption: 'Phân biệt thanh điệu — chọn âm tiết có thanh điệu KHÁC trong nhóm',
          items: [
            {before:'', after:'', answer:'xiǎo', options:['qián','xiǎo','nián']},
            {before:'', after:'', answer:'chàng', options:['chàng','shū','zhōng']},
            {before:'', after:'', answer:'xué', options:['gǒu','běn','xué']},
            {before:'', after:'', answer:'dì', options:['biān','gē','dì']}
          ] },
        { type: 'table', caption: 'Chữ Hán (汉字) — Cấu tạo và bút thuận (tiếp)',
          rows: [
            ['Nét mới', '撇 piě (phẩy trái), 捺 nà (phẩy phải), 点 diǎn (chấm), 提 tí (hất lên)'],
            ['Quy tắc bút thuận', '先撇后捺 (phẩy trái trước, phẩy phải sau) — ví dụ: 人; 从上到下 (trên trước dưới sau) — ví dụ: 文'],
            ['Ví dụ luyện viết', '个 (gè) → 那个 (nàge); 今 (jīn) → 今天 (jīntiān); 认 (rèn) → 认识 (rènshi); 打 (dǎ) → 打电话 (dǎ diànhuà)']
          ],
          note: 'Phần luyện viết tay theo từng nét (撇, 捺, 点, 提) cần thực hành trực tiếp trên giấy/vở theo mẫu trong sách.' }
      ]
    },
    {
      title: 'Mô phỏng đề thi',
      audio: '/audio/hsk1v3-bai-9/wb-mocktest.mp3',
      blocks: [
        { type: 'mocktest',
          listening: [
            { n: 1, options: [
              {key:'A', img:'/images/hsk1v3-bai-9-wb/q1a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-9-wb/q1b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-9-wb/q1c.jpg'}
            ], answer: 'B' },
            { n: 2, options: [
              {key:'A', img:'/images/hsk1v3-bai-9-wb/q2a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-9-wb/q2b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-9-wb/q2c.jpg'}
            ], answer: 'C' },
            { n: 3, options: [
              {key:'A', img:'/images/hsk1v3-bai-9-wb/q3a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-9-wb/q3b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-9-wb/q3c.jpg'}
            ], answer: 'A' },
            { n: 4, options: [
              {key:'A', text:'书', py:'shū'},
              {key:'B', text:'我的', py:'wǒ de'},
              {key:'C', text:'他的电脑', py:'tā de diànnǎo'}
            ], answer: 'B' },
            { n: 5, options: [
              {key:'A', text:'星期天', py:'Xīngqītiān'},
              {key:'B', text:'孩子们', py:'háizimen'},
              {key:'C', text:'去外边唱歌', py:'qù wàibian chàng gē'}
            ], answer: 'C' },
            { n: 6, options: [
              {key:'A', img:'/images/hsk1v3-bai-9-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-9-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-9-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-9-wb/q6to8_d.jpg'}
            ], answer: 'D' },
            { n: 7, options: [
              {key:'A', img:'/images/hsk1v3-bai-9-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-9-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-9-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-9-wb/q6to8_d.jpg'}
            ], answer: 'C' },
            { n: 8, options: [
              {key:'A', img:'/images/hsk1v3-bai-9-wb/q6to8_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-9-wb/q6to8_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-9-wb/q6to8_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-9-wb/q6to8_d.jpg'}
            ], answer: 'B' },
            { n: 9, options: [
              {key:'A', text:'上午 8:00', py:'shàngwǔ 8:00'},
              {key:'B', text:'上午 10:00', py:'shàngwǔ 10:00'},
              {key:'C', text:'晚上 8:00', py:'wǎnshang 8:00'}
            ], answer: 'A' },
            { n: 10, options: [
              {key:'A', text:'菜店', py:'càidiàn'},
              {key:'B', text:'书店', py:'shūdiàn'},
              {key:'C', text:'超市', py:'chāoshì'}
            ], answer: 'B' }
          ],
          reading: [
            { n: 11, prompt: '妹妹和小狗今天在家里玩。', promptPy: 'Mèimei hé xiǎo gǒu jīntiān zài jiā li wán.', options: [
              {key:'A', img:'/images/hsk1v3-bai-9-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-9-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-9-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-9-wb/q11to13_d.jpg'}
            ], answer: 'D' },
            { n: 12, prompt: '房间外有一只小猫。', promptPy: 'Fángjiān wài yǒu yì zhī xiǎo māo.', options: [
              {key:'A', img:'/images/hsk1v3-bai-9-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-9-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-9-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-9-wb/q11to13_d.jpg'}
            ], answer: 'C' },
            { n: 13, prompt: '这是我的第三个电脑。', promptPy: 'Zhè shì wǒ de dì-sān gè diànnǎo.', options: [
              {key:'A', img:'/images/hsk1v3-bai-9-wb/q11to13_a.jpg'},
              {key:'B', img:'/images/hsk1v3-bai-9-wb/q11to13_b.jpg'},
              {key:'C', img:'/images/hsk1v3-bai-9-wb/q11to13_c.jpg'},
              {key:'D', img:'/images/hsk1v3-bai-9-wb/q11to13_d.jpg'}
            ], answer: 'B' },
            { n: 14, prompt: '桌子上有什么？', promptPy: 'Zhuōzi shang yǒu shénme?', options: [
              {key:'A', text:'在家里。', py:'Zài jiā li.'},
              {key:'B', text:'我女朋友。', py:'Wǒ nǚpéngyou.'},
              {key:'C', text:'一只小猫。', py:'Yì zhī xiǎo māo.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'C' },
            { n: 15, prompt: '你今天下午在哪儿？', promptPy: 'Nǐ jīntiān xiàwǔ zài nǎr?', options: [
              {key:'A', text:'在家里。', py:'Zài jiā li.'},
              {key:'B', text:'我女朋友。', py:'Wǒ nǚpéngyou.'},
              {key:'C', text:'一只小猫。', py:'Yì zhī xiǎo māo.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'A' },
            { n: 16, prompt: '你和谁在超市呢？', promptPy: 'Nǐ hé shéi zài chāoshì ne?', options: [
              {key:'A', text:'在家里。', py:'Zài jiā li.'},
              {key:'B', text:'我女朋友。', py:'Wǒ nǚpéngyou.'},
              {key:'C', text:'一只小猫。', py:'Yì zhī xiǎo māo.'},
              {key:'D', text:'好的，谢谢！', py:'Hǎo de, xièxie!'}
            ], answer: 'B' },
            { n: 17, prompt: '我上午在学校（　），我们下午去看电影吧。', promptPy: 'Wǒ shàngwǔ zài xuéxiào ( ), wǒmen xiàwǔ qù kàn diànyǐng ba.', options: [
              {key:'A', text:'2:00', py:''},
              {key:'B', text:'上课', py:'shàngkè'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'B' },
            { n: 18, prompt: '男：我们下午几点在学校见？\n女：下午（　）吧。', promptPy: 'Wǒmen xiàwǔ jǐ diǎn zài xuéxiào jiàn? / Xiàwǔ ( ) ba.', options: [
              {key:'A', text:'2:00', py:''},
              {key:'B', text:'上课', py:'shàngkè'},
              {key:'C', text:'名字', py:'míngzi'}
            ], answer: 'A' },
            { n: 19, prompt: '我有一只小狗，很漂亮，它是我的好朋友。\n★说话人有几只小狗？', promptPy: 'Wǒ yǒu yì zhī xiǎo gǒu, hěn piàoliang, tā shì wǒ de hǎo péngyou.', options: [
              {key:'A', text:'一', py:'yī'},
              {key:'B', text:'四', py:'sì'},
              {key:'C', text:'十一', py:'shíyī'}
            ], answer: 'A' },
            { n: 20, prompt: '星期天中午妈妈在做饭，我和妹妹在房间里玩。\n★说话人和妹妹在哪儿？', promptPy: 'Xīngqītiān zhōngwǔ māma zài zuò fàn, wǒ hé mèimei zài fángjiān li wán.', options: [
              {key:'A', text:'外边', py:'wàibian'},
              {key:'B', text:'房间里', py:'fángjiān li'},
              {key:'C', text:'超市里', py:'chāoshì li'}
            ], answer: 'B' }
          ]
        }
      ]
    }
  ]
};

var dialogData = [
  {scene:'李文和白家月在校园里聊天儿 · Hẹn xem phim',
   preQuiz:[
     {q:'学校前边有什么？',opts:['一家超市','一家电影院','一个书店'],ans:1},
     {q:'他们几点在电影院外边见面？',opts:['六点','七点','八点'],ans:1},
   ],
   lines:[
     {sp:0,zh:'学校前边有一家电影院。',py:'Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.',vn:'Phía trước trường học có một rạp chiếu phim.'},
     {sp:1,zh:'对。我们晚上去那个电影院看电影吧。',py:'Duì. Wǒmen wǎnshang qù nàge diànyǐngyuàn kàn diànyǐng ba.',vn:'Đúng vậy. Tối chúng mình đến rạp chiếu phim đó xem phim nhé.'},
     {sp:0,zh:'好！我们七点在电影院外边见，好吗？',py:'Hǎo! Wǒmen qī diǎn zài diànyǐngyuàn wàibian jiàn, hǎo ma?',vn:'Được, chúng mình gặp nhau lúc 7 giờ ở bên ngoài rạp chiếu phim, được không?'},
     {sp:1,zh:'好的，晚上七点见！',py:'Hǎo de, wǎnshang qī diǎn jiàn!',vn:'Ừ, tối 7 giờ gặp nhau nhé.'},
   ]},
  {scene:'白家月和陈天中在教室里对话 · Sách của ai',
   preQuiz:[
     {q:'椅子上有（　）。',opts:['一本书','一只猫','一个手机'],ans:0},
     {q:'这是陈天中的（　）中文书。',opts:['第一本','第二本','第三本'],ans:1},
   ],
   lines:[
     {sp:0,zh:'椅子上有一本中文书，那是谁的书？',py:'Yǐzi shang yǒu yì běn Zhōngwén shū, nà shì shéi de shū?',vn:'Trên ghế có một quyển sách tiếng Trung, đó là sách của ai?'},
     {sp:1,zh:'是我的书，谢谢。这是我的第二本中文书。',py:'Shì wǒ de shū, xièxie. Zhè shì wǒ de dì-èr běn Zhōngwén shū.',vn:'Là sách của mình, cảm ơn bạn. Đây là quyển sách tiếng Trung thứ hai của mình.'},
     {sp:0,zh:'不客气。你明天上午在哪儿？',py:'Bú kèqi. Nǐ míngtiān shàngwǔ zài nǎr?',vn:'Đừng khách sáo nhé. Sáng mai bạn ở đâu?'},
     {sp:1,zh:'我明天上午在学校学习。',py:'Wǒ míngtiān shàngwǔ zài xuéxiào xuéxí.',vn:'Sáng mai mình học ở trường.'},
   ]},
  {scene:'王一雪和杨同乐在办公室谈论周末生活 · Cuối tuần làm gì',
   preQuiz:[
     {q:'杨同乐唱歌（　）。',opts:['不太好','不好听','很好听'],ans:2},
     {q:'王一雪家有一只（　）。',opts:['小猫','小狗','大狗'],ans:1},
   ],
   lines:[
     {sp:0,zh:'明天星期六，你做什么？',py:'Míngtiān xīngqīliù, nǐ zuò shénme?',vn:'Mai là thứ Bảy rồi, em định làm gì?'},
     {sp:1,zh:'我白天在家里读书，晚上和朋友们去外边唱歌。',py:'Wǒ báitiān zài jiā li dúshū, wǎnshang hé péngyoumen qù wàibian chàng gē.',vn:'Ban ngày em sẽ ở nhà đọc sách, buổi tối sẽ ra ngoài hát cùng bạn bè.'},
     {sp:0,zh:'你唱歌很好听。',py:'Nǐ chàng gē hěn hǎotīng.',vn:'Em hát rất hay.'},
     {sp:1,zh:'谢谢！您星期六做什么？',py:'Xièxie! Nín xīngqīliù zuò shénme?',vn:'Cảm ơn chị! Thứ Bảy chị làm gì?'},
     {sp:0,zh:'我在家里做饭、看电视，和孩子们、小狗玩。',py:'Wǒ zài jiā li zuò fàn, kàn diànshì, hé háizimen, xiǎo gǒu wán.',vn:'Chị ở nhà nấu ăn, xem ti vi, chơi với các con và con chó nhỏ của chị.'},
     {sp:1,zh:'我也有一只小狗。',py:'Wǒ yě yǒu yì zhī xiǎo gǒu.',vn:'Em cũng có một con chó nhỏ đấy.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'前', right:'边'},
  {left:'椅', right:'子'},
  {left:'读', right:'书'},
  {left:'朋', right:'友'},
  {left:'电', right:'视'},
  {left:'白', right:'天'},
];

// ══════════════════════════════════════════
// PHẦN 2 · NGHE — để trống, chờ tài liệu gốc giáo trình HSK1 3.0
// ══════════════════════════════════════════
var listenData = [];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'学校', blank:'前边', post:'有一家电影院。', hint:'(phía trước)', ans:'前边'},
  {pre:'我们晚上去那个电影院', blank:'看电影', post:'吧。', hint:'(xem phim)', ans:'看电影'},
  {pre:'我们七点在电影院', blank:'外边', post:'见，好吗？', hint:'(bên ngoài)', ans:'外边'},
  {pre:'椅子上有一本中文书，那是谁的', blank:'书', post:'？', hint:'(sách)', ans:'书'},
  {pre:'这是我的', blank:'第二本', post:'中文书。', hint:'(quyển thứ hai)', ans:'第二本'},
  {pre:'我明天上午在学校', blank:'学习', post:'。', hint:'(học tập)', ans:'学习'},
  {pre:'我白天在家里读书，晚上和朋友们去外边', blank:'唱歌', post:'。', hint:'(hát)', ans:'唱歌'},
  {pre:'我在家里做饭、看电视，和孩子们、小狗', blank:'玩', post:'。', hint:'(chơi)', ans:'玩'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['学校','前边','有','一家','电影院','。'], ans:'学校前边有一家电影院。', audio:'学校前边有一家电影院。'},
  {words:['我们','七点','在','电影院','外边','见','，','好吗','？'], ans:'我们七点在电影院外边见，好吗？', audio:'我们七点在电影院外边见，好吗？'},
  {words:['椅子','上','有','一本','中文书','。'], ans:'椅子上有一本中文书。', audio:'椅子上有一本中文书。'},
  {words:['我','明天','上午','在','学校','学习','。'], ans:'我明天上午在学校学习。', audio:'我明天上午在学校学习。'},
  {words:['你','唱歌','很','好听','。'], ans:'你唱歌很好听。', audio:'你唱歌很好听。'},
  {words:['我','也','有','一只','小狗','。'], ans:'我也有一只小狗。', audio:'我也有一只小狗。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · TRẮC NGHIỆM
// ══════════════════════════════════════════
var mcData = [
  {q:'"学校前边有一家电影院。" nghĩa là gì?', opts:['Phía trước trường học có một rạp chiếu phim.', 'Phía sau trường học có một hiệu sách.', 'Trong trường có một rạp chiếu phim.', 'Trường học ở gần rạp chiếu phim.'], ans:0},
  {q:'"那个电影院" nghĩa là gì?', opts:['rạp chiếu phim đó', 'rạp chiếu phim này', 'rạp chiếu phim nào', 'một rạp chiếu phim'], ans:0},
  {q:'"这是我的第二本中文书。" nghĩa là gì?', opts:['Đây là quyển sách tiếng Trung thứ hai của tôi.', 'Đây là quyển sách tiếng Trung đầu tiên của tôi.', 'Đây là hai quyển sách tiếng Trung của tôi.', 'Đây không phải sách tiếng Trung của tôi.'], ans:0},
  {q:'Từ "第" dùng để làm gì?', opts:['biểu thị số thứ tự', 'biểu thị số lượng', 'biểu thị phủ định', 'biểu thị nghi vấn'], ans:0},
  {q:'"你唱歌很好听。" nghĩa là gì?', opts:['Bạn hát rất hay.', 'Bạn hát không hay.', 'Bạn thích hát.', 'Bạn không thích hát.'], ans:0},
  {q:'Câu tồn hiện (存现句) thường dùng từ nào để biểu thị sự tồn tại?', opts:['有 hoặc 是', '能 hoặc 会', '的 hoặc 了', '吗 hoặc 呢'], ans:0},
  {q:'Khi thời gian và nơi chốn cùng làm trạng ngữ, thứ tự đúng là gì?', opts:['thời gian trước, nơi chốn sau', 'nơi chốn trước, thời gian sau', 'luôn đặt cuối câu', 'không có quy tắc cố định'], ans:0},
  {q:'"我也有一只小狗。" nghĩa là gì?', opts:['Tôi cũng có một con chó nhỏ.', 'Tôi không có chó.', 'Tôi muốn có một con chó.', 'Tôi có hai con chó.'], ans:0},
];

// ══════════════════════════════════════════
// PHẦN 4 · LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro: 'Nhấn 🔊 nghe câu hỏi/tình huống, rồi tự ghi âm câu trả lời của bạn dựa theo nội dung 3 bài khoá.',
  questions: [
    {q_zh: '有人问你："学校前边有什么？" 你怎么回答？', q_vn: 'Có người hỏi bạn: "Phía trước trường có gì?" Bạn trả lời thế nào?',
     hint: '学校前边有……', sample: '学校前边有一家电影院。', sample_vn: 'Phía trước trường học có một rạp chiếu phim.',
     note: 'Câu tồn hiện dùng "有" để nói về sự vật tồn tại ở một nơi chốn.'},
    {q_zh: '有人问你椅子上的书是谁的，你怎么回答？', q_vn: 'Có người hỏi bạn quyển sách trên ghế là của ai, bạn trả lời thế nào?',
     hint: '是我的……', sample: '是我的书，这是我的第二本中文书。', sample_vn: 'Là sách của mình, đây là quyển sách tiếng Trung thứ hai của mình.',
     note: '"第 + số từ + 量词" dùng để nói về số thứ tự, ví dụ 第二本.'},
    {q_zh: '朋友问你周末做什么，你怎么回答？', q_vn: 'Bạn của bạn hỏi cuối tuần bạn làm gì, bạn trả lời thế nào?',
     hint: '我白天……，晚上……', sample: '我白天在家里读书，晚上和朋友们去外边唱歌。', sample_vn: 'Ban ngày mình ở nhà đọc sách, buổi tối ra ngoài hát cùng bạn bè.',
     note: 'Có thể dùng hai vế "白天……，晚上……" để kể các hoạt động khác nhau trong ngày.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Phía trước trường học có một rạp chiếu phim.', zh:'学校前边有一家电影院。', py:'Xuéxiào qiánbian yǒu yì jiā diànyǐngyuàn.'},
  {vi:'Đây là quyển sách tiếng Trung thứ hai của tôi.', zh:'这是我的第二本中文书。', py:'Zhè shì wǒ de dì-èr běn Zhōngwén shū.'},
  {vi:'Bạn hát rất hay.', zh:'你唱歌很好听。', py:'Nǐ chàng gē hěn hǎotīng.'},
  {vi:'Tôi cũng có một con chó nhỏ.', zh:'我也有一只小狗。', py:'Wǒ yě yǒu yì zhī xiǎo gǒu.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Sáng mai bạn ở đâu?', zh:'你明天上午在哪儿？', py:'Nǐ míngtiān shàngwǔ zài nǎr?'},
  {vi:'Đó là sách của ai vậy?', zh:'那是谁的书？', py:'Nà shì shéi de shū?'},
  {vi:'Ban ngày tôi ở nhà đọc sách.', zh:'我白天在家里读书。', py:'Wǒ báitiān zài jiā li dúshū.'},
  {vi:'Cảm ơn bạn! Thứ Bảy bạn làm gì?', zh:'谢谢你！星期六你做什么？', py:'Xièxie nǐ! Xīngqīliù nǐ zuò shénme?'},
];
