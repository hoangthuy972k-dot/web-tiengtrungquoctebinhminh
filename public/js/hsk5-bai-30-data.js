// ══════════════════════════════════════════
// DATA — HSK5 Bài 30: 竞争让市场更高效 (Cạnh tranh khiến thị trường hiệu quả hơn)
// Unit 10 关注经济 · Nguồn: HSK标准教程5下 (tr. 104–111) + 练习册 bài 30
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TỪ VỰNG — đủ 36 từ của bảng 生词 (tr. 104–106)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'沙丁鱼',py:'shādīngyú',pos:'Danh từ',vn:'cá mòi',hv:'sa đinh ngư',em:'🐟',lesson:1,
   explain:['Loài cá biển nhỏ, sống thành đàn lớn, thịt béo — món ăn rất được người Tây Ban Nha ưa chuộng.','沙丁 là phiên âm của từ sardine + 鱼 (cá). Lượng từ: 条 (一条沙丁鱼); cá mòi đóng hộp: 沙丁鱼罐头.'],
   usage:'一条 / 几条 + 沙丁鱼; 吃 / 运输 / 卖 + 沙丁鱼; 沙丁鱼罐头 (cá mòi đóng hộp); 沙丁鱼的存活期.',
   collo:['吃沙丁鱼','一条沙丁鱼','沙丁鱼罐头','运输沙丁鱼'],
   ex_zh:'西班牙人特别喜欢吃沙丁鱼。',ex_py:'Xībānyárén tèbié xǐhuan chī shādīngyú.',ex_vn:'Người Tây Ban Nha đặc biệt thích ăn cá mòi.',
   exList:[
     {zh:'西班牙人特别喜欢吃沙丁鱼。',py:'Xībānyárén tèbié xǐhuan chī shādīngyú.',vn:'Người Tây Ban Nha đặc biệt thích ăn cá mòi.'},
     {zh:'如果上岸时沙丁鱼还活着，鱼的卖价可以涨很多倍。',py:'Rúguǒ shàng àn shí shādīngyú hái huózhe, yú de màijià kěyǐ zhǎng hěn duō bèi.',vn:'Nếu lúc lên bờ cá mòi vẫn còn sống, giá bán của cá có thể tăng lên gấp nhiều lần.'},
     {zh:'妈妈买了几盒沙丁鱼罐头，作为周末野餐的食物。',py:'Māma mǎile jǐ hé shādīngyú guàntou, zuòwéi zhōumò yěcān de shíwù.',vn:'Mẹ mua mấy hộp cá mòi đóng hộp làm đồ ăn cho buổi dã ngoại cuối tuần.'}
   ],
   colloFull:[
     {zh:'吃沙丁鱼',py:'chī shādīngyú',vn:'ăn cá mòi'},
     {zh:'一条沙丁鱼',py:'yì tiáo shādīngyú',vn:'một con cá mòi'},
     {zh:'沙丁鱼罐头',py:'shādīngyú guàntou',vn:'cá mòi đóng hộp'},
     {zh:'运输沙丁鱼',py:'yùnshū shādīngyú',vn:'vận chuyển cá mòi'},
     {zh:'沙丁鱼的存活期',py:'shādīngyú de cúnhuóqī',vn:'thời gian sống của cá mòi'}
   ],
   patterns:[
     {s:'一条 / 几条 + 沙丁鱼', m:'Đếm cá dùng lượng từ 条'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cá mòi vừa chết thì giá liền rẻ đi rất nhiều.',answer:'沙丁鱼一死，价格就便宜很多。',answerPy:'Shādīngyú yì sǐ, jiàgé jiù piányi hěn duō.',
      note:'一……就…… nối hai việc xảy ra liền nhau; 一 trước thanh 3 đọc yì.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Người Tây Ban Nha không chỉ thích ăn cá mòi, mà cũng thích ăn các loại hải sản khác.',answer:'西班牙人不仅喜欢吃沙丁鱼，也喜欢吃别的海鲜。',answerPy:'Xībānyárén bùjǐn xǐhuan chī shādīngyú, yě xǐhuan chī bié de hǎixiān.',
      note:'不仅……也……; ôn 海鲜 (bài 3).',pair:'不仅……也……'}
   ]},

  {n:2,zh:'运输',py:'yùnshū',pos:'Động từ',vn:'vận chuyển, vận tải',hv:'vận thâu',em:'🚚',lesson:1,
   explain:['Chở người hoặc hàng hóa từ nơi này đến nơi khác bằng xe, tàu, máy bay… Trang trọng hơn 送 / 拉.','Còn làm danh từ hoặc định ngữ: 交通运输 (giao thông vận tải), 运输公司 (công ty vận tải), 运输成本 (chi phí vận chuyển).'],
   usage:'运输 + hàng hóa (运输货物 / 运输沙丁鱼); 用 + phương tiện + 运输; 运输 + 公司 / 成本 / 工具; 运输成了问题.',
   collo:['运输货物','运输公司','交通运输','运输成本'],
   ex_zh:'沙丁鱼对离开大海后的环境极不适应，运输就成了问题。',ex_py:'Shādīngyú duì líkāi dàhǎi hòu de huánjìng jí bú shìyìng, yùnshū jiù chéngle wèntí.',ex_vn:'Cá mòi cực kỳ không thích nghi với môi trường sau khi rời biển, việc vận chuyển liền trở thành vấn đề.',
   exList:[
     {zh:'沙丁鱼对离开大海后的环境极不适应，运输就成了问题。',py:'Shādīngyú duì líkāi dàhǎi hòu de huánjìng jí bú shìyìng, yùnshū jiù chéngle wèntí.',vn:'Cá mòi cực kỳ không thích nghi với môi trường sau khi rời biển, việc vận chuyển liền trở thành vấn đề.'},
     {zh:'这些水果要用冷藏车运输，不然很快就会坏。',py:'Zhèxiē shuǐguǒ yào yòng lěngcángchē yùnshū, bùrán hěn kuài jiù huì huài.',vn:'Số hoa quả này phải vận chuyển bằng xe đông lạnh, nếu không sẽ hỏng rất nhanh.'},
     {zh:'网购越来越普遍，运输公司的生意也越来越好。',py:'Wǎnggòu yuè lái yuè pǔbiàn, yùnshū gōngsī de shēngyi yě yuè lái yuè hǎo.',vn:'Mua sắm trên mạng ngày càng phổ biến, việc làm ăn của các công ty vận tải cũng ngày càng tốt.'}
   ],
   colloFull:[
     {zh:'运输货物',py:'yùnshū huòwù',vn:'vận chuyển hàng hóa'},
     {zh:'运输公司',py:'yùnshū gōngsī',vn:'công ty vận tải'},
     {zh:'交通运输',py:'jiāotōng yùnshū',vn:'giao thông vận tải'},
     {zh:'运输成本',py:'yùnshū chéngběn',vn:'chi phí vận chuyển'},
     {zh:'冷藏运输',py:'lěngcáng yùnshū',vn:'vận chuyển đông lạnh'}
   ],
   patterns:[
     {s:'用 + phương tiện + 运输 + hàng hóa', m:'Vận chuyển cái gì bằng phương tiện gì'},
     {s:'运输 + 公司 / 成本 / 工具', m:'运输 làm định ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lô hàng này được vận chuyển đến bằng máy bay.',answer:'这批货是用飞机运输过来的。',answerPy:'Zhè pī huò shì yòng fēijī yùnshū guòlai de.',
      note:'是……的 nhấn mạnh phương thức (用飞机) của việc đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chỉ cần vận chuyển kịp thời, hoa quả sẽ không bị hỏng.',answer:'只要运输及时，水果就不会坏。',answerPy:'Zhǐyào yùnshū jíshí, shuǐguǒ jiù bú huì huài.',
      note:'运输 làm chủ ngữ; 只要……就…… (điều kiện đủ).',pair:'只要……就……'}
   ]},

  {n:3,zh:'岸',py:'àn',pos:'Danh từ',vn:'bờ (sông, biển…)',hv:'ngạn',em:'🏖️',lesson:1,
   explain:['Phần đất liền giáp với sông, hồ, biển: 河岸 (bờ sông), 海岸 (bờ biển).','上岸 = lên bờ (người, cá, thuyền từ dưới nước lên đất liền); 靠岸 = (tàu thuyền) cập bờ.'],
   usage:'上岸 / 靠岸 / 到岸; 河 / 海 / 湖 + 岸; 岸上 (trên bờ), 岸边 (bên bờ).',
   collo:['上岸','河岸','岸边','靠岸'],
   ex_zh:'鱼上岸后，过不了多久就会死去。',ex_py:'Yú shàng àn hòu, guò bu liǎo duō jiǔ jiù huì sǐqù.',ex_vn:'Cá lên bờ rồi thì chẳng bao lâu sẽ chết.',
   exList:[
     {zh:'鱼上岸后，过不了多久就会死去。',py:'Yú shàng àn hòu, guò bu liǎo duō jiǔ jiù huì sǐqù.',vn:'Cá lên bờ rồi thì chẳng bao lâu sẽ chết.'},
     {zh:'船慢慢地靠岸了，乘客们纷纷走了下来。',py:'Chuán mànmàn de kào àn le, chéngkèmen fēnfēn zǒule xiàlai.',vn:'Con thuyền từ từ cập bờ, hành khách lần lượt bước xuống.'},
     {zh:'傍晚，我们常常在湖岸边散步。',py:'Bàngwǎn, wǒmen chángcháng zài hú\'àn biān sànbù.',vn:'Chiều tối, chúng tôi thường đi dạo bên bờ hồ.'}
   ],
   colloFull:[
     {zh:'上岸',py:'shàng àn',vn:'lên bờ'},
     {zh:'河岸',py:'hé\'àn',vn:'bờ sông'},
     {zh:'岸边',py:'àn biān',vn:'bên bờ'},
     {zh:'靠岸',py:'kào àn',vn:'cập bờ'},
     {zh:'海岸',py:'hǎi\'àn',vn:'bờ biển'}
   ],
   patterns:[
     {s:'上岸 / 靠岸', m:'Lên bờ / (tàu) cập bờ'},
     {s:'河 / 海 / 湖 + 岸 (+ 边)', m:'Bờ sông / bờ biển / bờ hồ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cá mòi vừa lên bờ là chết ngay.',answer:'沙丁鱼一上岸就死了。',answerPy:'Shādīngyú yí shàng àn jiù sǐ le.',
      note:'一 + V (上岸) + 就……; 一 trước thanh 4 đọc yí.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Ngư dân đã chở cá lên bờ rồi.',answer:'渔民把鱼运上岸了。',answerPy:'Yúmín bǎ yú yùn shàng àn le.',
      note:'把 + tân ngữ + V + 上岸 (bổ ngữ xu hướng + nơi chốn).',pair:'把……'}
   ]},

  {n:4,zh:'商品',py:'shāngpǐn',pos:'Danh từ',vn:'hàng hóa',hv:'thương phẩm',em:'🛒',lesson:1,
   explain:['Sản phẩm làm ra để BÁN, trao đổi trên thị trường. 产品 (bài 11) là sản phẩm làm ra nói chung; khi đem bán thì gọi là 商品.','Hay đi với: 销售商品, 商品价格, 商品质量, 进口商品, 商品种类.'],
   usage:'作为商品销售; 商品 + 价格 / 质量 / 种类; 这种商品 / 一件商品.',
   collo:['作为商品销售','商品价格','商品质量','进口商品'],
   ex_zh:'而死掉的沙丁鱼口感很差，作为商品销售，价格就会便宜很多。',ex_py:'Ér sǐdiào de shādīngyú kǒugǎn hěn chà, zuòwéi shāngpǐn xiāoshòu, jiàgé jiù huì piányi hěn duō.',ex_vn:'Còn cá mòi đã chết thì ăn rất dở, đem bán làm hàng hóa thì giá sẽ rẻ đi nhiều.',
   exList:[
     {zh:'而死掉的沙丁鱼口感很差，作为商品销售，价格就会便宜很多。',py:'Ér sǐdiào de shādīngyú kǒugǎn hěn chà, zuòwéi shāngpǐn xiāoshòu, jiàgé jiù huì piányi hěn duō.',vn:'Còn cá mòi đã chết thì ăn rất dở, đem bán làm hàng hóa thì giá sẽ rẻ đi nhiều.'},
     {zh:'这种商品占的比例太高了。',py:'Zhè zhǒng shāngpǐn zhàn de bǐlì tài gāo le.',vn:'Loại hàng này chiếm tỷ lệ quá cao.'},
     {zh:'这家超市的商品种类很多，价格也不贵。',py:'Zhè jiā chāoshì de shāngpǐn zhǒnglèi hěn duō, jiàgé yě bú guì.',vn:'Siêu thị này có rất nhiều loại hàng, giá cả cũng không đắt.'}
   ],
   colloFull:[
     {zh:'作为商品销售',py:'zuòwéi shāngpǐn xiāoshòu',vn:'đem bán làm hàng hóa'},
     {zh:'商品价格',py:'shāngpǐn jiàgé',vn:'giá hàng hóa'},
     {zh:'商品质量',py:'shāngpǐn zhìliàng',vn:'chất lượng hàng hóa'},
     {zh:'进口商品',py:'jìnkǒu shāngpǐn',vn:'hàng nhập khẩu'},
     {zh:'商品种类',py:'shāngpǐn zhǒnglèi',vn:'chủng loại hàng hóa'}
   ],
   patterns:[
     {s:'作为商品 + 销售 / 出口', m:'Đem làm hàng hóa để bán / xuất khẩu (ôn 作为, bài 9)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hàng hóa của cửa hàng này không những rẻ, mà chất lượng cũng rất tốt.',answer:'这家店的商品不仅便宜，质量也很好。',answerPy:'Zhè jiā diàn de shāngpǐn bùjǐn piányi, zhìliàng yě hěn hǎo.',
      note:'不仅……也…… nêu hai ưu điểm của hàng hóa.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Tất cả hàng hóa đều đã bị bán hết rồi.',answer:'所有的商品都被卖完了。',answerPy:'Suǒyǒu de shāngpǐn dōu bèi màiwán le.',
      note:'Câu bị động 被 (không nêu người làm): 被 + V + bổ ngữ kết quả + 了.',pair:'被……'}
   ]},

  {n:5,zh:'延长',py:'yáncháng',pos:'Động từ',vn:'kéo dài',hv:'diên trường',em:'⏳',lesson:1,
   explain:['Làm cho thời gian hoặc độ dài dài thêm ra: 延长时间, 延长寿命, 延长公路.','Phân biệt: 推迟 là LÙI thời điểm về sau (cuộc họp lùi sang mai); 延长 là KÉO DÀI khoảng thời gian (họp thêm một tiếng).'],
   usage:'延长 + 时间 / 期限 / 寿命 / 存活期; 延长 + 了 + khoảng thời gian (延长了一个月); 适当延长.',
   collo:['延长时间','延长寿命','延长存活期','适当延长'],
   ex_zh:'为了延长沙丁鱼的存活期，减少经济损失，渔民们想了很多办法。',ex_py:'Wèile yáncháng shādīngyú de cúnhuóqī, jiǎnshǎo jīngjì sǔnshī, yúmínmen xiǎngle hěn duō bànfǎ.',ex_vn:'Để kéo dài thời gian sống của cá mòi, giảm tổn thất kinh tế, ngư dân đã nghĩ ra rất nhiều cách.',
   exList:[
     {zh:'为了延长沙丁鱼的存活期，减少经济损失，渔民们想了很多办法。',py:'Wèile yáncháng shādīngyú de cúnhuóqī, jiǎnshǎo jīngjì sǔnshī, yúmínmen xiǎngle hěn duō bànfǎ.',vn:'Để kéo dài thời gian sống của cá mòi, giảm tổn thất kinh tế, ngư dân đã nghĩ ra rất nhiều cách.'},
     {zh:'由于报名的考生太多，学校决定适当延长报名时间。',py:'Yóuyú bàomíng de kǎoshēng tài duō, xuéxiào juédìng shìdàng yáncháng bàomíng shíjiān.',vn:'Do thí sinh đăng ký quá đông, nhà trường quyết định kéo dài thời gian đăng ký một cách hợp lý.'},
     {zh:'考试周图书馆延长了开放时间，一直开到晚上十一点。',py:'Kǎoshì zhōu túshūguǎn yánchángle kāifàng shíjiān, yìzhí kāidào wǎnshang shíyī diǎn.',vn:'Tuần thi, thư viện kéo dài giờ mở cửa, mở đến tận 11 giờ đêm.'}
   ],
   colloFull:[
     {zh:'延长时间',py:'yáncháng shíjiān',vn:'kéo dài thời gian'},
     {zh:'延长寿命',py:'yáncháng shòumìng',vn:'kéo dài tuổi thọ'},
     {zh:'延长存活期',py:'yáncháng cúnhuóqī',vn:'kéo dài thời gian sống'},
     {zh:'适当延长',py:'shìdàng yáncháng',vn:'kéo dài một cách hợp lý'},
     {zh:'延长留学时间',py:'yáncháng liúxué shíjiān',vn:'kéo dài thời gian du học'}
   ],
   patterns:[
     {s:'延长 + 时间 / 期限 / 寿命', m:'Kéo dài cái gì'},
     {s:'延长 + 了 + khoảng thời gian', m:'Kéo dài thêm bao lâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì tuyết rơi quá dày, kỳ nghỉ đông được kéo dài thêm một tuần.',answer:'因为雪下得太大，寒假被延长了一个星期。',answerPy:'Yīnwèi xuě xià de tài dà, hánjià bèi yánchángle yí ge xīngqī.',
      note:'Câu bị động 被; khoảng thời gian đặt sau 延长了.',pair:'被……'},
     {promptLang:'vi',prompt:'Chỉ cần ăn uống lành mạnh, là có thể kéo dài tuổi thọ.',answer:'只要饮食健康，就能延长寿命。',answerPy:'Zhǐyào yǐnshí jiànkāng, jiù néng yáncháng shòumìng.',
      note:'延长寿命 là cụm hay gặp; 只要……就…….',pair:'只要……就……'}
   ]},

  {n:6,zh:'存活',py:'cúnhuó',pos:'Động từ',vn:'sống sót, tồn tại',hv:'tồn hoạt',em:'🌱',lesson:1,
   explain:['Sống sót, tiếp tục sống được (thường nói về sinh vật trong điều kiện khó khăn).','Hay dùng trong văn viết, văn khoa học: 存活期 (thời gian sống), 存活率 (tỷ lệ sống sót), 存活下来. Nói hằng ngày thường dùng 活.'],
   usage:'存活 + 下来; 存活期 / 存活率 / 存活的比例; 很难 / 无法 + 存活.',
   collo:['存活期','存活率','存活下来','存活的比例'],
   ex_zh:'沙丁鱼自然会不断地加速游动，从而保持了旺盛的生命力，存活的比例大大提高。',ex_py:'Shādīngyú zìrán huì búduàn de jiāsù yóudòng, cóng\'ér bǎochíle wàngshèng de shēngmìnglì, cúnhuó de bǐlì dàdà tígāo.',ex_vn:'Cá mòi tự nhiên sẽ không ngừng tăng tốc bơi, nhờ đó giữ được sức sống dồi dào, tỷ lệ sống sót tăng lên rất nhiều.',
   exList:[
     {zh:'沙丁鱼自然会不断地加速游动，从而保持了旺盛的生命力，存活的比例大大提高。',py:'Shādīngyú zìrán huì búduàn de jiāsù yóudòng, cóng\'ér bǎochíle wàngshèng de shēngmìnglì, cúnhuó de bǐlì dàdà tígāo.',vn:'Cá mòi tự nhiên sẽ không ngừng tăng tốc bơi, nhờ đó giữ được sức sống dồi dào, tỷ lệ sống sót tăng lên rất nhiều.'},
     {zh:'这种植物在沙漠里也能存活下来。',py:'Zhè zhǒng zhíwù zài shāmò li yě néng cúnhuó xiàlai.',vn:'Loài cây này ở sa mạc cũng có thể sống sót.'},
     {zh:'新种的小树存活率很高，几乎都活下来了。',py:'Xīn zhòng de xiǎo shù cúnhuólǜ hěn gāo, jīhū dōu huó xiàlai le.',vn:'Tỷ lệ sống của những cây non mới trồng rất cao, hầu như đều sống cả.'}
   ],
   colloFull:[
     {zh:'存活期',py:'cúnhuóqī',vn:'thời gian sống'},
     {zh:'存活率',py:'cúnhuólǜ',vn:'tỷ lệ sống sót'},
     {zh:'存活下来',py:'cúnhuó xiàlai',vn:'sống sót được'},
     {zh:'存活的比例',py:'cúnhuó de bǐlì',vn:'tỷ lệ sống sót'},
     {zh:'无法存活',py:'wúfǎ cúnhuó',vn:'không thể sống sót'}
   ],
   patterns:[
     {s:'存活 + 下来', m:'Sống sót được (qua điều kiện khó khăn)'},
     {s:'存活期 / 存活率', m:'Thời gian sống / tỷ lệ sống sót'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Loài cá này vừa rời khỏi nước là không thể sống sót.',answer:'这种鱼一离开水就无法存活。',answerPy:'Zhè zhǒng yú yì líkāi shuǐ jiù wúfǎ cúnhuó.',
      note:'无法 + 存活 (văn viết); 一……就…….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Tuy điều kiện rất gian khổ, nhưng chúng vẫn sống sót được.',answer:'虽然条件很艰苦，但是它们还是存活下来了。',answerPy:'Suīrán tiáojiàn hěn jiānkǔ, dànshì tāmen háishi cúnhuó xiàlai le.',
      note:'存活 + 下来; ôn 艰苦 (bài 10).',pair:'虽然……但是……'}
   ]},

  {n:7,zh:'改善',py:'gǎishàn',pos:'Động từ',vn:'cải thiện',hv:'cải thiện',em:'📈',lesson:1,
   explain:['Thay đổi tình trạng vốn có cho TỐT HƠN: 改善条件 / 环境 / 关系 / 生活.','Phân biệt: 改进 (bài 10) nhấn mạnh sửa phương pháp, kỹ thuật cho tiến bộ (改进方法); 改善 nhấn mạnh tình trạng, điều kiện, đời sống.'],
   usage:'改善 + 条件 / 环境 / 关系 / 管理 / 生活 / 质量 / 服务 (bảng 搭配 của sách); 得到改善; 不断改善.',
   collo:['改善条件','改善环境','改善关系','改善生活','得到改善'],
   ex_zh:'渔民们想了很多办法，但情况仍然没有得到太大的改善。',ex_py:'Yúmínmen xiǎngle hěn duō bànfǎ, dàn qíngkuàng réngrán méiyǒu dédào tài dà de gǎishàn.',ex_vn:'Ngư dân đã nghĩ ra rất nhiều cách, nhưng tình hình vẫn không được cải thiện là bao.',
   exList:[
     {zh:'渔民们想了很多办法，但情况仍然没有得到太大的改善。',py:'Yúmínmen xiǎngle hěn duō bànfǎ, dàn qíngkuàng réngrán méiyǒu dédào tài dà de gǎishàn.',vn:'Ngư dân đã nghĩ ra rất nhiều cách, nhưng tình hình vẫn không được cải thiện là bao.'},
     {zh:'笑能促进心肺活动，改善肌肉紧张状况。',py:'Xiào néng cùjìn xīnfèi huódòng, gǎishàn jīròu jǐnzhāng zhuàngkuàng.',vn:'Cười có thể thúc đẩy hoạt động của tim phổi, cải thiện tình trạng căng cơ.'},
     {zh:'这几年，农村的生活条件得到了很大的改善。',py:'Zhè jǐ nián, nóngcūn de shēnghuó tiáojiàn dédàole hěn dà de gǎishàn.',vn:'Mấy năm nay, điều kiện sống ở nông thôn đã được cải thiện rất nhiều.'}
   ],
   colloFull:[
     {zh:'改善条件',py:'gǎishàn tiáojiàn',vn:'cải thiện điều kiện'},
     {zh:'改善环境',py:'gǎishàn huánjìng',vn:'cải thiện môi trường'},
     {zh:'改善关系',py:'gǎishàn guānxi',vn:'cải thiện quan hệ'},
     {zh:'改善生活',py:'gǎishàn shēnghuó',vn:'cải thiện đời sống'},
     {zh:'得到改善',py:'dédào gǎishàn',vn:'được cải thiện'},
     {zh:'改善服务',py:'gǎishàn fúwù',vn:'cải thiện dịch vụ'}
   ],
   patterns:[
     {s:'改善 + 条件 / 环境 / 关系 / 生活', m:'Cải thiện cái gì'},
     {s:'……得到(了)改善', m:'(Tình trạng) được cải thiện'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để cải thiện điều kiện sống của gia đình, ngày nào anh ấy cũng làm việc đến rất khuya.',answer:'为了改善家里的生活条件，他每天都工作到很晚。',answerPy:'Wèile gǎishàn jiāli de shēnghuó tiáojiàn, tā měi tiān dōu gōngzuò dào hěn wǎn.',
      note:'为了 + mục đích đặt đầu câu; 改善 + 条件.',pair:'为了……'},
     {promptLang:'vi',prompt:'Quan hệ của hai người họ không những không được cải thiện, mà ngược lại ngày càng tệ.',answer:'他们俩的关系不但没有得到改善，反而越来越差了。',answerPy:'Tāmen liǎ de guānxi búdàn méiyǒu dédào gǎishàn, fǎn\'ér yuè lái yuè chà le.',
      note:'得到改善 (được cải thiện); 不但不 / 没……，反而…….',pair:'不但……反而……'}
   ]},

  {n:8,zh:'无意',py:'wúyì',pos:'Phó từ / Động từ',vn:'tình cờ, vô tình; không có ý định',hv:'vô ý',em:'🍀',lesson:1,
   explain:['Phó từ: KHÔNG CỐ Ý, tình cờ — hay dùng 无意中 / 无意地 + V (无意中发现, 无意中听到).','Động từ: không muốn, không có ý định — 无意 + V (我无意打扰您 = tôi không có ý làm phiền ngài). Trái nghĩa: 有意 / 故意.'],
   usage:'无意中 / 无意地 + 发现 / 看到 / 听到 / 知道 / 说出 / 提起 (bảng 搭配 của sách); 无意 + V (không định làm gì) — lời lẽ trang trọng, lịch sự.',
   collo:['无意中发现','无意中听到','无意伤害','无意打扰'],
   ex_zh:'后来一位渔民无意中发现了一种巧妙而实用的方法。',ex_py:'Hòulái yí wèi yúmín wúyì zhōng fāxiànle yì zhǒng qiǎomiào ér shíyòng de fāngfǎ.',ex_vn:'Sau đó một người đánh cá tình cờ phát hiện ra một phương pháp khéo léo mà thiết thực.',
   exList:[
     {zh:'后来一位渔民无意中发现了一种巧妙而实用的方法。',py:'Hòulái yí wèi yúmín wúyì zhōng fāxiànle yì zhǒng qiǎomiào ér shíyòng de fāngfǎ.',vn:'Sau đó một người đánh cá tình cờ phát hiện ra một phương pháp khéo léo mà thiết thực.'},
     {zh:'她在收拾花园时，无意地找到了这只耳环。',py:'Tā zài shōushi huāyuán shí, wúyì de zhǎodàole zhè zhī ěrhuán.',vn:'Khi dọn dẹp khu vườn, cô ấy tình cờ tìm thấy chiếc khuyên tai này.'},
     {zh:'我无意打扰您，不过我可以跟您谈一会儿吗？',py:'Wǒ wúyì dǎrǎo nín, búguò wǒ kěyǐ gēn nín tán yíhuìr ma?',vn:'Tôi không có ý làm phiền ngài, nhưng tôi có thể nói chuyện với ngài một lát được không?'}
   ],
   colloFull:[
     {zh:'无意中发现',py:'wúyì zhōng fāxiàn',vn:'tình cờ phát hiện'},
     {zh:'无意中听到',py:'wúyì zhōng tīngdào',vn:'tình cờ nghe được'},
     {zh:'无意伤害',py:'wúyì shānghài',vn:'không có ý làm tổn thương'},
     {zh:'无意打扰',py:'wúyì dǎrǎo',vn:'không có ý làm phiền'},
     {zh:'无意中说出',py:'wúyì zhōng shuōchū',vn:'vô tình nói ra'}
   ],
   patterns:[
     {s:'无意中 / 无意地 + V', m:'Tình cờ, vô tình làm gì (phó từ)'},
     {s:'无意 + V', m:'Không có ý định làm gì (động từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi tình cờ nghe được cuộc nói chuyện của họ, không phải cố ý đâu.',answer:'我是无意中听到他们的谈话的，不是故意的。',answerPy:'Wǒ shì wúyì zhōng tīngdào tāmen de tánhuà de, bú shì gùyì de.',
      note:'是……的 nhấn mạnh cách thức (无意中); 无意 trái nghĩa với 故意.',pair:'是……的'},
     {promptLang:'vi',prompt:'Anh ấy vô tình nói ra một bí mật mà ngay cả tôi cũng không biết.',answer:'他无意中说出了一个连我都不知道的秘密。',answerPy:'Tā wúyì zhōng shuōchūle yí ge lián wǒ dōu bù zhīdào de mìmì.',
      note:'无意中 + 说出; 连……都…… nằm trong định ngữ.',pair:'连……都……'}
   ]},

  {n:9,zh:'巧妙',py:'qiǎomiào',pos:'Tính từ',vn:'khéo léo, tài tình, hay',hv:'xảo diệu',em:'💡',lesson:1,
   explain:['(Phương pháp, kỹ thuật, cách làm) khéo léo, tài tình, hơn hẳn bình thường.','Hay đi với: 方法, 主意, 设计, 方式, 回答, 比喻, 处理, 发明 (bảng 搭配 của sách). Tả người khéo tay thì nói 手巧, không nói ✗ 他很巧妙.'],
   usage:'巧妙的 + 方法 / 主意 / 设计 / 回答; 巧妙地 + V (巧妙地回答, 巧妙地解决); 巧妙而实用.',
   collo:['巧妙的方法','巧妙的设计','巧妙的回答','巧妙地解决'],
   ex_zh:'后来一位渔民无意中发现了一种巧妙而实用的方法。',ex_py:'Hòulái yí wèi yúmín wúyì zhōng fāxiànle yì zhǒng qiǎomiào ér shíyòng de fāngfǎ.',ex_vn:'Sau đó một người đánh cá tình cờ phát hiện ra một phương pháp khéo léo mà thiết thực.',
   exList:[
     {zh:'后来一位渔民无意中发现了一种巧妙而实用的方法。',py:'Hòulái yí wèi yúmín wúyì zhōng fāxiànle yì zhǒng qiǎomiào ér shíyòng de fāngfǎ.',vn:'Sau đó một người đánh cá tình cờ phát hiện ra một phương pháp khéo léo mà thiết thực.'},
     {zh:'他巧妙地回答了记者的问题，大家都很佩服。',py:'Tā qiǎomiào de huídále jìzhě de wèntí, dàjiā dōu hěn pèifú.',vn:'Anh ấy trả lời câu hỏi của phóng viên rất khéo, ai cũng phục.'},
     {zh:'这座桥的设计非常巧妙，既美观又实用。',py:'Zhè zuò qiáo de shèjì fēicháng qiǎomiào, jì měiguān yòu shíyòng.',vn:'Thiết kế của cây cầu này vô cùng tài tình, vừa đẹp vừa thiết thực.'}
   ],
   colloFull:[
     {zh:'巧妙的方法',py:'qiǎomiào de fāngfǎ',vn:'phương pháp khéo léo'},
     {zh:'巧妙的设计',py:'qiǎomiào de shèjì',vn:'thiết kế tài tình'},
     {zh:'巧妙的回答',py:'qiǎomiào de huídá',vn:'câu trả lời khéo léo'},
     {zh:'巧妙地解决',py:'qiǎomiào de jiějué',vn:'giải quyết một cách khéo léo'},
     {zh:'巧妙的比喻',py:'qiǎomiào de bǐyù',vn:'phép so sánh hay'}
   ],
   patterns:[
     {s:'巧妙的 + N (方法 / 设计 / 主意)', m:'Cái gì đó khéo léo, tài tình'},
     {s:'巧妙地 + V', m:'Làm gì một cách khéo léo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Càng nghĩ tôi càng thấy phương pháp này rất khéo.',answer:'我越想越觉得这个方法很巧妙。',answerPy:'Wǒ yuè xiǎng yuè juéde zhège fāngfǎ hěn qiǎomiào.',
      note:'巧妙 tả phương pháp; 越……越…… (càng… càng…).',pair:'越……越……'},
     {promptLang:'vi',prompt:'Cái túi này không chỉ thiết kế khéo léo, mà giá cũng không đắt.',answer:'这个包不仅设计巧妙，价格也不贵。',answerPy:'Zhège bāo bùjǐn shèjì qiǎomiào, jiàgé yě bú guì.',
      note:'设计 + 巧妙 (chủ – vị); 不仅……也…….',pair:'不仅……也……'}
   ]},

  {n:10,zh:'实用',py:'shíyòng',pos:'Tính từ',vn:'thiết thực, tiện dụng',hv:'thực dụng',em:'🧰',lesson:1,
   explain:['Có giá trị sử dụng thực tế, dùng được vào việc: 这个包很实用 (cái túi này rất tiện dùng).','BẪY: "thực dụng" tiếng Việt thường để chê người chỉ biết lợi ích; 实用 tiếng Trung là KHEN đồ vật / phương pháp thiết thực, tiện dụng.'],
   usage:'实用 + 的 + 方法 / 经验 / 礼物; 很 / 非常 + 实用; 既美观又实用; 实用价值.',
   collo:['实用的方法','实用价值','既美观又实用','实用的经验'],
   ex_zh:'公司在产品包装、宣传推广和销售等方面积累了相当丰富、实用的经验。',ex_py:'Gōngsī zài chǎnpǐn bāozhuāng, xuānchuán tuīguǎng hé xiāoshòu děng fāngmiàn jīlěile xiāngdāng fēngfù, shíyòng de jīngyàn.',ex_vn:'Công ty đã tích lũy được kinh nghiệm khá phong phú, thiết thực trong các mặt như đóng gói sản phẩm, quảng bá và bán hàng.',
   exList:[
     {zh:'公司在产品包装、宣传推广和销售等方面积累了相当丰富、实用的经验。',py:'Gōngsī zài chǎnpǐn bāozhuāng, xuānchuán tuīguǎng hé xiāoshòu děng fāngmiàn jīlěile xiāngdāng fēngfù, shíyòng de jīngyàn.',vn:'Công ty đã tích lũy được kinh nghiệm khá phong phú, thiết thực trong các mặt như đóng gói sản phẩm, quảng bá và bán hàng.'},
     {zh:'后来一位渔民无意中发现了一种巧妙而实用的方法。',py:'Hòulái yí wèi yúmín wúyì zhōng fāxiànle yì zhǒng qiǎomiào ér shíyòng de fāngfǎ.',vn:'Sau đó một người đánh cá tình cờ phát hiện ra một phương pháp khéo léo mà thiết thực.'},
     {zh:'送礼物不一定要贵，实用最重要。',py:'Sòng lǐwù bù yídìng yào guì, shíyòng zuì zhòngyào.',vn:'Tặng quà không nhất thiết phải đắt, thiết thực là quan trọng nhất.'}
   ],
   colloFull:[
     {zh:'实用的方法',py:'shíyòng de fāngfǎ',vn:'phương pháp thiết thực'},
     {zh:'实用价值',py:'shíyòng jiàzhí',vn:'giá trị sử dụng'},
     {zh:'既美观又实用',py:'jì měiguān yòu shíyòng',vn:'vừa đẹp vừa tiện dụng'},
     {zh:'实用的经验',py:'shíyòng de jīngyàn',vn:'kinh nghiệm thiết thực'},
     {zh:'实用的礼物',py:'shíyòng de lǐwù',vn:'món quà thiết thực'}
   ],
   patterns:[
     {s:'既 + tính từ + 又实用', m:'Vừa … vừa thiết thực'},
     {s:'实用 + 的 + N', m:'Cái gì đó thiết thực, tiện dụng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cái điện thoại này tuy rẻ, nhưng rất tiện dụng.',answer:'这个手机虽然便宜，但是很实用。',answerPy:'Zhège shǒujī suīrán piányi, dànshì hěn shíyòng.',
      note:'很 + 实用 (tính từ làm vị ngữ).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Món quà mẹ tặng tôi vừa đẹp vừa thiết thực.',answer:'妈妈送我的礼物既漂亮又实用。',answerPy:'Māma sòng wǒ de lǐwù jì piàoliang yòu shíyòng.',
      note:'既……又…… nối hai tính từ.',pair:'既……又……'}
   ]},

  {n:11,zh:'天敌',py:'tiāndí',pos:'Danh từ',vn:'kẻ thù tự nhiên, thiên địch',hv:'thiên địch',em:'🦈',lesson:1,
   explain:['Loài động vật trong tự nhiên chuyên săn bắt, ăn thịt một loài khác: 猫是老鼠的天敌 (mèo là thiên địch của chuột).','Nghĩa bóng: "khắc tinh", đối thủ mà ai đó rất sợ.'],
   usage:'A 是 B 的天敌; 逃避 / 躲开 + 天敌; 天敌的威胁.',
   collo:['沙丁鱼的天敌','逃避天敌','躲开天敌','天敌的威胁'],
   ex_zh:'后来一位渔民把几条沙丁鱼的天敌鲇鱼放进装鱼的设备中。',ex_py:'Hòulái yí wèi yúmín bǎ jǐ tiáo shādīngyú de tiāndí niányú fàngjìn zhuāng yú de shèbèi zhōng.',ex_vn:'Sau đó một người đánh cá thả vài con cá nheo — kẻ thù tự nhiên của cá mòi — vào thiết bị chứa cá.',
   exList:[
     {zh:'后来一位渔民把几条沙丁鱼的天敌鲇鱼放进装鱼的设备中。',py:'Hòulái yí wèi yúmín bǎ jǐ tiáo shādīngyú de tiāndí niányú fàngjìn zhuāng yú de shèbèi zhōng.',vn:'Sau đó một người đánh cá thả vài con cá nheo — kẻ thù tự nhiên của cá mòi — vào thiết bị chứa cá.'},
     {zh:'为了逃避天敌，沙丁鱼自然会不断地加速游动。',py:'Wèile táobì tiāndí, shādīngyú zìrán huì búduàn de jiāsù yóudòng.',vn:'Để trốn tránh kẻ thù tự nhiên, cá mòi tự khắc sẽ không ngừng tăng tốc bơi.'},
     {zh:'我们人类也是通过竞争，躲开了很多天敌的威胁，才生存到今天的。',py:'Wǒmen rénlèi yě shì tōngguò jìngzhēng, duǒkāile hěn duō tiāndí de wēixié, cái shēngcún dào jīntiān de.',vn:'Loài người chúng ta cũng nhờ cạnh tranh, tránh được mối đe dọa của rất nhiều kẻ thù tự nhiên, mới tồn tại được đến ngày nay.'}
   ],
   colloFull:[
     {zh:'沙丁鱼的天敌',py:'shādīngyú de tiāndí',vn:'kẻ thù tự nhiên của cá mòi'},
     {zh:'逃避天敌',py:'táobì tiāndí',vn:'trốn tránh kẻ thù tự nhiên'},
     {zh:'躲开天敌',py:'duǒkāi tiāndí',vn:'tránh được kẻ thù tự nhiên'},
     {zh:'天敌的威胁',py:'tiāndí de wēixié',vn:'mối đe dọa của kẻ thù tự nhiên'},
     {zh:'猫是老鼠的天敌',py:'māo shì lǎoshǔ de tiāndí',vn:'mèo là thiên địch của chuột'}
   ],
   patterns:[
     {s:'A 是 B 的天敌', m:'A là kẻ thù tự nhiên của B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mèo là kẻ thù tự nhiên của chuột, chuột vừa thấy mèo là chạy.',answer:'猫是老鼠的天敌，老鼠一看见猫就跑。',answerPy:'Māo shì lǎoshǔ de tiāndí, lǎoshǔ yí kànjiàn māo jiù pǎo.',
      note:'A 是 B 的天敌; 一……就…….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Để trốn tránh kẻ thù, con thỏ chạy ngày càng nhanh.',answer:'为了逃避天敌，兔子跑得越来越快。',answerPy:'Wèile táobì tiāndí, tùzi pǎo de yuè lái yuè kuài.',
      note:'V + 得 + 越来越 + tính từ (bổ ngữ trạng thái).',pair:'越来越……'}
   ]},

  {n:12,zh:'鲇鱼',py:'niányú',pos:'Danh từ',vn:'cá nheo',hv:'niêm ngư',em:'🐡',lesson:1,
   explain:['Loài cá nước ngọt, đầu to, miệng rộng, có râu, không vảy, ăn thịt các loài cá nhỏ.','鲇鱼效应 (hiệu ứng cá nheo): đưa một "nhân tố cạnh tranh" vào để kích thích cả tập thể năng động hơn.'],
   usage:'一条鲇鱼; 鲇鱼效应; 把鲇鱼放进……; 鲇鱼是食肉鱼.',
   collo:['一条鲇鱼','鲇鱼效应','放进鲇鱼','鲇鱼是食肉鱼'],
   ex_zh:'因为鲇鱼是食肉鱼，无法和沙丁鱼和平共处。',ex_py:'Yīnwèi niányú shì shíròu yú, wúfǎ hé shādīngyú hépíng gòngchǔ.',ex_vn:'Vì cá nheo là loài cá ăn thịt, không thể chung sống hòa bình với cá mòi.',
   exList:[
     {zh:'因为鲇鱼是食肉鱼，无法和沙丁鱼和平共处。',py:'Yīnwèi niányú shì shíròu yú, wúfǎ hé shādīngyú hépíng gòngchǔ.',vn:'Vì cá nheo là loài cá ăn thịt, không thể chung sống hòa bình với cá mòi.'},
     {zh:'这在经济学上被称为“鲇鱼效应”。',py:'Zhè zài jīngjìxué shang bèi chēngwéi “niányú xiàoyìng”.',vn:'Điều này trong kinh tế học được gọi là “hiệu ứng cá nheo”.'},
     {zh:'公司请来一位能干的新经理，就像在鱼群里放进了一条鲇鱼。',py:'Gōngsī qǐngláile yí wèi nénggàn de xīn jīnglǐ, jiù xiàng zài yúqún li fàngjìnle yì tiáo niányú.',vn:'Công ty mời về một giám đốc mới giỏi giang, giống như thả một con cá nheo vào đàn cá.'}
   ],
   colloFull:[
     {zh:'一条鲇鱼',py:'yì tiáo niányú',vn:'một con cá nheo'},
     {zh:'鲇鱼效应',py:'niányú xiàoyìng',vn:'hiệu ứng cá nheo'},
     {zh:'放进鲇鱼',py:'fàngjìn niányú',vn:'thả cá nheo vào'},
     {zh:'鲇鱼是食肉鱼',py:'niányú shì shíròu yú',vn:'cá nheo là cá ăn thịt'},
     {zh:'鲇鱼的威胁',py:'niányú de wēixié',vn:'mối đe dọa của cá nheo'}
   ],
   patterns:[
     {s:'……被称为“鲇鱼效应”', m:'Cách gọi một hiện tượng trong kinh tế học'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người đánh cá đã thả mấy con cá nheo vào bể cá.',answer:'渔民把几条鲇鱼放进了鱼缸。',answerPy:'Yúmín bǎ jǐ tiáo niányú fàngjìnle yúgāng.',
      note:'把 + tân ngữ + 放进 + nơi chốn.',pair:'把……'},
     {promptLang:'vi',prompt:'Cá nheo vừa được thả vào, cá mòi liền bơi nhanh hẳn lên.',answer:'鲇鱼一放进去，沙丁鱼就加速游动起来。',answerPy:'Niányú yí fàng jìnqu, shādīngyú jiù jiāsù yóudòng qǐlai.',
      note:'一……就……; 起来 chỉ động tác bắt đầu.',pair:'一……就……'}
   ]},

  {n:13,zh:'设备',py:'shèbèi',pos:'Danh từ',vn:'thiết bị, dụng cụ',hv:'thiết bị',em:'⚙️',lesson:1,
   explain:['Máy móc, dụng cụ, đồ dùng được lắp đặt để phục vụ một mục đích: 实验设备, 教学设备, 装鱼的设备.','Là danh từ tập hợp; lượng từ 套 / 台 (一套设备). Hay đi với vị ngữ: 设备 + 落后 / 齐全 / 完好 (bảng 搭配 của sách).'],
   usage:'安装 / 更新 / 购买 + 设备; 设备 + 落后 / 齐全 / 完好; 一套设备.',
   collo:['安装设备','设备落后','设备齐全','一套设备'],
   ex_zh:'后来一位渔民把几条沙丁鱼的天敌鲇鱼放进装鱼的设备中。',ex_py:'Hòulái yí wèi yúmín bǎ jǐ tiáo shādīngyú de tiāndí niányú fàngjìn zhuāng yú de shèbèi zhōng.',ex_vn:'Sau đó một người đánh cá thả vài con cá nheo — kẻ thù tự nhiên của cá mòi — vào thiết bị chứa cá.',
   exList:[
     {zh:'后来一位渔民把几条沙丁鱼的天敌鲇鱼放进装鱼的设备中。',py:'Hòulái yí wèi yúmín bǎ jǐ tiáo shādīngyú de tiāndí niányú fàngjìn zhuāng yú de shèbèi zhōng.',vn:'Sau đó một người đánh cá thả vài con cá nheo — kẻ thù tự nhiên của cá mòi — vào thiết bị chứa cá.'},
     {zh:'我们学校新买了一套实验设备，同学们都很兴奋。',py:'Wǒmen xuéxiào xīn mǎile yí tào shíyàn shèbèi, tóngxuémen dōu hěn xīngfèn.',vn:'Trường chúng tôi mới mua một bộ thiết bị thí nghiệm, các bạn đều rất phấn khởi.'},
     {zh:'这家医院的设备齐全，医生的水平也很高。',py:'Zhè jiā yīyuàn de shèbèi qíquán, yīshēng de shuǐpíng yě hěn gāo.',vn:'Bệnh viện này thiết bị đầy đủ, trình độ bác sĩ cũng rất cao.'}
   ],
   colloFull:[
     {zh:'安装设备',py:'ānzhuāng shèbèi',vn:'lắp đặt thiết bị'},
     {zh:'设备落后',py:'shèbèi luòhòu',vn:'thiết bị lạc hậu'},
     {zh:'设备齐全',py:'shèbèi qíquán',vn:'thiết bị đầy đủ'},
     {zh:'一套设备',py:'yí tào shèbèi',vn:'một bộ thiết bị'},
     {zh:'实验设备',py:'shíyàn shèbèi',vn:'thiết bị thí nghiệm'}
   ],
   patterns:[
     {s:'设备 + 落后 / 齐全 / 完好', m:'Thiết bị lạc hậu / đầy đủ / còn tốt'},
     {s:'安装 / 更新 + 设备', m:'Lắp đặt / thay mới thiết bị'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công nhân đã lắp đặt xong thiết bị mới.',answer:'工人们把新设备安装好了。',answerPy:'Gōngrénmen bǎ xīn shèbèi ānzhuāng hǎo le.',
      note:'把 + 设备 + 安装好; ôn 安装 (bài 13).',pair:'把……'},
     {promptLang:'vi',prompt:'Thiết bị của bệnh viện này không những đầy đủ, mà cũng rất tiên tiến.',answer:'这家医院的设备不仅齐全，也很先进。',answerPy:'Zhè jiā yīyuàn de shèbèi bùjǐn qíquán, yě hěn xiānjìn.',
      note:'设备 + 齐全 (chủ – vị); 不仅……也…….',pair:'不仅……也……'}
   ]},

  {n:14,zh:'和平',py:'hépíng',pos:'Tính từ / Danh từ',vn:'hòa bình, êm dịu',hv:'hòa bình',em:'🕊️',lesson:1,
   explain:['Tính từ: êm dịu, không xung đột, không đánh nhau — 和平共处 (chung sống hòa bình).','Danh từ: hòa bình (trái với chiến tranh) — 世界和平, 热爱和平, 维护和平.'],
   usage:'和平共处; 和平地 + V; 世界和平 / 维护和平 / 热爱和平; 和平的生活.',
   collo:['和平共处','世界和平','热爱和平','和平的生活'],
   ex_zh:'因为鲇鱼是食肉鱼，无法和沙丁鱼和平共处。',ex_py:'Yīnwèi niányú shì shíròu yú, wúfǎ hé shādīngyú hépíng gòngchǔ.',ex_vn:'Vì cá nheo là loài cá ăn thịt, không thể chung sống hòa bình với cá mòi.',
   exList:[
     {zh:'因为鲇鱼是食肉鱼，无法和沙丁鱼和平共处。',py:'Yīnwèi niányú shì shíròu yú, wúfǎ hé shādīngyú hépíng gòngchǔ.',vn:'Vì cá nheo là loài cá ăn thịt, không thể chung sống hòa bình với cá mòi.'},
     {zh:'全世界的人民都希望世界和平。',py:'Quán shìjiè de rénmín dōu xīwàng shìjiè hépíng.',vn:'Nhân dân toàn thế giới đều mong thế giới hòa bình.'},
     {zh:'邻居之间应该和平共处，互相帮助。',py:'Línjū zhījiān yīnggāi hépíng gòngchǔ, hùxiāng bāngzhù.',vn:'Hàng xóm với nhau nên chung sống hòa thuận, giúp đỡ lẫn nhau.'}
   ],
   colloFull:[
     {zh:'和平共处',py:'hépíng gòngchǔ',vn:'chung sống hòa bình'},
     {zh:'世界和平',py:'shìjiè hépíng',vn:'hòa bình thế giới'},
     {zh:'热爱和平',py:'rè\'ài hépíng',vn:'yêu chuộng hòa bình'},
     {zh:'和平的生活',py:'hépíng de shēnghuó',vn:'cuộc sống hòa bình'},
     {zh:'维护和平',py:'wéihù hépíng',vn:'giữ gìn hòa bình'}
   ],
   patterns:[
     {s:'A 和 B 和平共处', m:'A và B chung sống hòa bình'},
     {s:'维护 / 热爱 + 和平', m:'和平 làm danh từ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy trước đây hai nước từng đánh nhau, nhưng bây giờ đã chung sống hòa bình rồi.',answer:'虽然两国以前打过仗，但是现在已经和平共处了。',answerPy:'Suīrán liǎng guó yǐqián dǎguo zhàng, dànshì xiànzài yǐjīng hépíng gòngchǔ le.',
      note:'和平共处 là cụm cố định; 打过仗 — li hợp từ chen 过.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần mọi người tôn trọng lẫn nhau, là có thể chung sống hòa bình.',answer:'只要大家互相尊重，就能和平共处。',answerPy:'Zhǐyào dàjiā hùxiāng zūnzhòng, jiù néng hépíng gòngchǔ.',
      note:'只要……就……; 和平 làm trạng ngữ cho 共处.',pair:'只要……就……'}
   ]},

  {n:15,zh:'构成',py:'gòuchéng',pos:'Động từ',vn:'tạo thành, hình thành, gây ra',hv:'cấu thành',em:'🧩',lesson:1,
   explain:['Tạo thành, hợp thành: 由……构成 (được tạo thành từ …).','Hay dùng trong cụm 对……构成威胁 (gây ra mối đe dọa đối với …) — tân ngữ thường là 威胁, 影响, 危险, 犯罪.'],
   usage:'对 + đối tượng + 构成威胁 / 影响; 由 + các thành phần + 构成; 构成 + 一个整体.',
   collo:['构成威胁','由……构成','构成整体'],
   ex_zh:'它会四处游动寻找小鱼吃，对沙丁鱼构成威胁。',ex_py:'Tā huì sìchù yóudòng xúnzhǎo xiǎo yú chī, duì shādīngyú gòuchéng wēixié.',ex_vn:'Nó sẽ bơi khắp nơi tìm cá nhỏ để ăn, gây ra mối đe dọa cho cá mòi.',
   exList:[
     {zh:'它会四处游动寻找小鱼吃，对沙丁鱼构成威胁。',py:'Tā huì sìchù yóudòng xúnzhǎo xiǎo yú chī, duì shādīngyú gòuchéng wēixié.',vn:'Nó sẽ bơi khắp nơi tìm cá nhỏ để ăn, gây ra mối đe dọa cho cá mòi.'},
     {zh:'我不觉得他可以对我构成威胁。',py:'Wǒ bù juéde tā kěyǐ duì wǒ gòuchéng wēixié.',vn:'Tôi không thấy anh ta có thể gây ra mối đe dọa gì cho tôi.'},
     {zh:'一个班集体是由每一个同学构成的。',py:'Yí ge bān jítǐ shì yóu měi yí ge tóngxué gòuchéng de.',vn:'Một tập thể lớp được tạo thành từ từng bạn học sinh.'}
   ],
   colloFull:[
     {zh:'构成威胁',py:'gòuchéng wēixié',vn:'gây ra mối đe dọa'},
     {zh:'由……构成',py:'yóu……gòuchéng',vn:'được tạo thành từ …'},
     {zh:'构成整体',py:'gòuchéng zhěngtǐ',vn:'tạo thành một tổng thể'},
     {zh:'对沙丁鱼构成威胁',py:'duì shādīngyú gòuchéng wēixié',vn:'đe dọa cá mòi'},
     {zh:'构成影响',py:'gòuchéng yǐngxiǎng',vn:'gây ảnh hưởng'}
   ],
   patterns:[
     {s:'对 + đối tượng + 构成威胁', m:'Gây ra mối đe dọa đối với ai / cái gì'},
     {s:'(是) 由 + thành phần + 构成(的)', m:'Được tạo thành từ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ta tuy rất mạnh, nhưng không gây ra được mối đe dọa nào cho chúng ta.',answer:'他虽然很强，但是对我们构成不了威胁。',answerPy:'Tā suīrán hěn qiáng, dànshì duì wǒmen gòuchéng bu liǎo wēixié.',
      note:'对 + người + 构成威胁; bổ ngữ khả năng 构成不了.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Đội bóng này là do học sinh lớp 10 tạo thành.',answer:'这支球队是由高一学生构成的。',answerPy:'Zhè zhī qiúduì shì yóu gāoyī xuésheng gòuchéng de.',
      note:'是 + 由……构成 + 的 — nhấn mạnh thành phần.',pair:'是……的'}
   ]},

  {n:16,zh:'逃避',py:'táobì',pos:'Động từ',vn:'chạy trốn, trốn tránh',hv:'đào tị',em:'🏃',lesson:1,
   explain:['Chạy trốn, né tránh điều mình không muốn hoặc không dám đối mặt: 逃避天敌, 逃避责任, 逃避现实.','Nói về con người thì mang sắc thái TIÊU CỰC (trốn trách nhiệm); đối lập với 面对 (đối mặt). Ôn 逃 (chạy trốn, bài 6).'],
   usage:'逃避 + 责任 / 现实 / 问题 / 困难 / 天敌; 不应该逃避; 总是逃避.',
   collo:['逃避责任','逃避现实','逃避问题','逃避天敌'],
   ex_zh:'为了逃避天敌，沙丁鱼自然会不断地加速游动。',ex_py:'Wèile táobì tiāndí, shādīngyú zìrán huì búduàn de jiāsù yóudòng.',ex_vn:'Để trốn tránh kẻ thù tự nhiên, cá mòi tự khắc sẽ không ngừng tăng tốc bơi.',
   exList:[
     {zh:'为了逃避天敌，沙丁鱼自然会不断地加速游动。',py:'Wèile táobì tiāndí, shādīngyú zìrán huì búduàn de jiāsù yóudòng.',vn:'Để trốn tránh kẻ thù tự nhiên, cá mòi tự khắc sẽ không ngừng tăng tốc bơi.'},
     {zh:'遇到困难不应该逃避，应该积极地面对。',py:'Yùdào kùnnan bù yīnggāi táobì, yīnggāi jījí de miànduì.',vn:'Gặp khó khăn không nên trốn tránh, mà nên tích cực đối mặt.'},
     {zh:'你总这么逃避也不是办法。',py:'Nǐ zǒng zhème táobì yě bú shì bànfǎ.',vn:'Cậu cứ trốn tránh mãi thế này cũng không phải là cách.'}
   ],
   colloFull:[
     {zh:'逃避责任',py:'táobì zérèn',vn:'trốn tránh trách nhiệm'},
     {zh:'逃避现实',py:'táobì xiànshí',vn:'trốn tránh hiện thực'},
     {zh:'逃避问题',py:'táobì wèntí',vn:'né tránh vấn đề'},
     {zh:'逃避天敌',py:'táobì tiāndí',vn:'trốn tránh kẻ thù tự nhiên'},
     {zh:'逃避困难',py:'táobì kùnnan',vn:'trốn tránh khó khăn'}
   ],
   patterns:[
     {s:'逃避 + 责任 / 现实 / 问题', m:'Trốn tránh điều gì'},
     {s:'不应该逃避，应该面对……', m:'Khuyên đối mặt thay vì trốn tránh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Gặp vấn đề mà trốn tránh thì không những không giải quyết được, ngược lại còn phiền phức hơn.',answer:'遇到问题，逃避不但解决不了，反而会更麻烦。',answerPy:'Yùdào wèntí, táobì búdàn jiějué bu liǎo, fǎn\'ér huì gèng máfan.',
      note:'逃避 làm chủ ngữ; 不但……反而…… (kết quả trái mong đợi).',pair:'不但……反而……'},
     {promptLang:'vi',prompt:'Cậu càng trốn tránh, vấn đề càng lớn.',answer:'你越逃避，问题就越大。',answerPy:'Nǐ yuè táobì, wèntí jiù yuè dà.',
      note:'越 A 越 B với hai chủ ngữ khác nhau.',pair:'越……越……'}
   ]},

  {n:17,zh:'不断',py:'búduàn',pos:'Phó từ',vn:'không ngừng, liên tục',hv:'bất đoạn',em:'🔄',lesson:1,
   explain:['Liên tục, không ngừng, không gián đoạn: 不断(地) + V (不断发展, 不断提高).','Hay đi với động từ chỉ sự thay đổi, phát triển: 发展, 改善, 追求, 调整, 积累, 投入, 成熟, 丰富, 优化 (bảng 搭配 của sách). 不 trước thanh 4 đọc bú.'],
   usage:'不断(地) + 发展 / 改善 / 提高 / 进步 / 调整; còn làm vị ngữ: 笑声不断, 接连不断.',
   collo:['不断发展','不断改善','不断提高','不断地加速'],
   ex_zh:'为了逃避天敌，沙丁鱼自然会不断地加速游动。',ex_py:'Wèile táobì tiāndí, shādīngyú zìrán huì búduàn de jiāsù yóudòng.',ex_vn:'Để trốn tránh kẻ thù tự nhiên, cá mòi tự khắc sẽ không ngừng tăng tốc bơi.',
   exList:[
     {zh:'为了逃避天敌，沙丁鱼自然会不断地加速游动。',py:'Wèile táobì tiāndí, shādīngyú zìrán huì búduàn de jiāsù yóudòng.',vn:'Để trốn tránh kẻ thù tự nhiên, cá mòi tự khắc sẽ không ngừng tăng tốc bơi.'},
     {zh:'随着经济不断发展，人们的生活越来越好。',py:'Suízhe jīngjì búduàn fāzhǎn, rénmen de shēnghuó yuè lái yuè hǎo.',vn:'Cùng với việc kinh tế không ngừng phát triển, cuộc sống của mọi người ngày càng tốt hơn.'},
     {zh:'只有不断学习，才能跟上时代的变化。',py:'Zhǐyǒu búduàn xuéxí, cái néng gēnshang shídài de biànhuà.',vn:'Chỉ có không ngừng học hỏi mới theo kịp sự thay đổi của thời đại.'}
   ],
   colloFull:[
     {zh:'不断发展',py:'búduàn fāzhǎn',vn:'không ngừng phát triển'},
     {zh:'不断改善',py:'búduàn gǎishàn',vn:'không ngừng cải thiện'},
     {zh:'不断提高',py:'búduàn tígāo',vn:'không ngừng nâng cao'},
     {zh:'不断地加速',py:'búduàn de jiāsù',vn:'không ngừng tăng tốc'},
     {zh:'不断追求',py:'búduàn zhuīqiú',vn:'không ngừng theo đuổi'}
   ],
   patterns:[
     {s:'不断(地) + V', m:'Không ngừng làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tiếng Trung của cô ấy không ngừng tiến bộ, nói ngày càng lưu loát.',answer:'她的汉语不断进步，说得越来越流利了。',answerPy:'Tā de Hànyǔ búduàn jìnbù, shuō de yuè lái yuè liúlì le.',
      note:'不断 + 进步 (ôn 进步, bài 24); 越来越 + tính từ + 了.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chỉ có không ngừng cố gắng mới có thể thực hiện được ước mơ.',answer:'只有不断努力，才能实现梦想。',answerPy:'Zhǐyǒu búduàn nǔlì, cái néng shíxiàn mèngxiǎng.',
      note:'只有……才…… (điều kiện duy nhất); ôn 实现 (bài 12), 梦想 (bài 21).',pair:'只有……才……'}
   ]},

  {n:18,zh:'旺盛',py:'wàngshèng',pos:'Tính từ',vn:'dồi dào, mạnh mẽ, tươi tốt',hv:'vượng thịnh',em:'🔥',lesson:1,
   explain:['(Sức sống, tinh lực, nhu cầu…) dồi dào, mạnh mẽ: 旺盛的生命力, 精力旺盛.','Còn tả cây cối tươi tốt, lửa cháy mạnh; trong kinh tế: 需求旺盛 (nhu cầu lớn, mạnh).'],
   usage:'旺盛的 + 生命力 / 精力; 精力 / 食欲 / 需求 + 旺盛; 长得很旺盛.',
   collo:['旺盛的生命力','精力旺盛','需求旺盛','食欲旺盛'],
   ex_zh:'沙丁鱼不断地加速游动，从而保持了旺盛的生命力。',ex_py:'Shādīngyú búduàn de jiāsù yóudòng, cóng\'ér bǎochíle wàngshèng de shēngmìnglì.',ex_vn:'Cá mòi không ngừng tăng tốc bơi, nhờ đó giữ được sức sống dồi dào.',
   exList:[
     {zh:'沙丁鱼不断地加速游动，从而保持了旺盛的生命力。',py:'Shādīngyú búduàn de jiāsù yóudòng, cóng\'ér bǎochíle wàngshèng de shēngmìnglì.',vn:'Cá mòi không ngừng tăng tốc bơi, nhờ đó giữ được sức sống dồi dào.'},
     {zh:'年轻人精力旺盛，熬一次夜好像没什么影响。',py:'Niánqīngrén jīnglì wàngshèng, áo yí cì yè hǎoxiàng méi shénme yǐngxiǎng.',vn:'Người trẻ tinh lực dồi dào, thức khuya một lần dường như chẳng ảnh hưởng gì.'},
     {zh:'春节前，市场对年货的需求很旺盛。',py:'Chūnjié qián, shìchǎng duì niánhuò de xūqiú hěn wàngshèng.',vn:'Trước Tết, nhu cầu hàng Tết trên thị trường rất lớn.'}
   ],
   colloFull:[
     {zh:'旺盛的生命力',py:'wàngshèng de shēngmìnglì',vn:'sức sống dồi dào'},
     {zh:'精力旺盛',py:'jīnglì wàngshèng',vn:'tinh lực dồi dào'},
     {zh:'需求旺盛',py:'xūqiú wàngshèng',vn:'nhu cầu mạnh'},
     {zh:'食欲旺盛',py:'shíyù wàngshèng',vn:'ăn ngon miệng'},
     {zh:'旺盛的精力',py:'wàngshèng de jīnglì',vn:'tinh lực dồi dào'}
   ],
   patterns:[
     {s:'旺盛的 + 生命力 / 精力', m:'旺盛 làm định ngữ'},
     {s:'精力 / 需求 + 旺盛', m:'旺盛 làm vị ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông tôi tuy đã 80 tuổi, nhưng tinh lực vẫn rất dồi dào.',answer:'爷爷虽然八十岁了，但是精力还很旺盛。',answerPy:'Yéye suīrán bāshí suì le, dànshì jīnglì hái hěn wàngshèng.',
      note:'精力 + 旺盛 là kết hợp quen thuộc nhất.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần nước và ánh nắng đầy đủ, cây sẽ mọc rất tươi tốt.',answer:'只要水和阳光充足，植物就会长得很旺盛。',answerPy:'Zhǐyào shuǐ hé yángguāng chōngzú, zhíwù jiù huì zhǎng de hěn wàngshèng.',
      note:'旺盛 tả cây cối tươi tốt; 长 đọc zhǎng.',pair:'只要……就……'}
   ]},

  {n:19,zh:'比例',py:'bǐlì',pos:'Danh từ',vn:'tỷ lệ',hv:'tỷ lệ',em:'📊',lesson:1,
   explain:['Quan hệ số lượng giữa một phần với tổng thể, hoặc giữa các phần với nhau: 男女比例 (tỷ lệ nam nữ).','Hay dùng: ……占的比例 + 大 / 小 / 高 / 低; 按比例 (theo tỷ lệ); 比例 + 提高 / 下降.'],
   usage:'……占的比例 + 大 / 高; 比例 + 提高 / 下降; 按……的比例; 男女比例.',
   collo:['存活的比例','占的比例','男女比例','按比例'],
   ex_zh:'这种商品占的比例太高了。',ex_py:'Zhè zhǒng shāngpǐn zhàn de bǐlì tài gāo le.',ex_vn:'Loại hàng này chiếm tỷ lệ quá cao.',
   exList:[
     {zh:'这种商品占的比例太高了。',py:'Zhè zhǒng shāngpǐn zhàn de bǐlì tài gāo le.',vn:'Loại hàng này chiếm tỷ lệ quá cao.'},
     {zh:'沙丁鱼保持了旺盛的生命力，存活的比例大大提高。',py:'Shādīngyú bǎochíle wàngshèng de shēngmìnglì, cúnhuó de bǐlì dàdà tígāo.',vn:'Cá mòi giữ được sức sống dồi dào, tỷ lệ sống sót tăng lên rất nhiều.'},
     {zh:'我们是理工科学校，男老师占的比例太大了。',py:'Wǒmen shì lǐgōngkē xuéxiào, nán lǎoshī zhàn de bǐlì tài dà le.',vn:'Trường chúng tôi là trường khối khoa học kỹ thuật, tỷ lệ giáo viên nam quá lớn.'}
   ],
   colloFull:[
     {zh:'存活的比例',py:'cúnhuó de bǐlì',vn:'tỷ lệ sống sót'},
     {zh:'占的比例',py:'zhàn de bǐlì',vn:'tỷ lệ chiếm'},
     {zh:'男女比例',py:'nán nǚ bǐlì',vn:'tỷ lệ nam nữ'},
     {zh:'按比例',py:'àn bǐlì',vn:'theo tỷ lệ'},
     {zh:'比例很高',py:'bǐlì hěn gāo',vn:'tỷ lệ rất cao'}
   ],
   patterns:[
     {s:'A 占的比例 + 大 / 高 / 小 / 低', m:'A chiếm tỷ lệ lớn / nhỏ'},
     {s:'按 + tỷ số + 的比例', m:'Theo tỷ lệ bao nhiêu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Lớp chúng tôi tỷ lệ nữ sinh ngày càng cao.',answer:'我们班女生的比例越来越高了。',answerPy:'Wǒmen bān nǚshēng de bǐlì yuè lái yuè gāo le.',
      note:'比例 dùng 高 / 低 hoặc 大 / 小, không dùng 多 / 少.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Hãy trộn nước với sữa theo tỷ lệ một – một.',answer:'请把水和牛奶按一比一的比例混合。',answerPy:'Qǐng bǎ shuǐ hé niúnǎi àn yī bǐ yī de bǐlì hùnhé.',
      note:'把 + tân ngữ + 按……的比例 + V; tỷ số 一比一 đọc yī bǐ yī.',pair:'把……'}
   ]},

  {n:20,zh:'感想',py:'gǎnxiǎng',pos:'Danh từ',vn:'cảm tưởng, cảm nghĩ',hv:'cảm tưởng',em:'💭',lesson:1,
   explain:['Những suy nghĩ, cảm nhận nảy sinh sau khi tiếp xúc hoặc trải qua một sự việc: 读后感想, 谈谈感想.','Phân biệt: 感想 là suy nghĩ nảy ra, có thể nói / viết ra (谈感想, 写感想); 体会 là sự hiểu biết thấm thía qua trải nghiệm (深刻的体会, 体会到……).'],
   usage:'有 / 谈 / 写 / 发表 + 感想; 有什么感想; 读后感想.',
   collo:['有什么感想','谈谈感想','写感想','读后感想'],
   ex_zh:'看到这里，你有什么感想和体会呢？',ex_py:'Kàndào zhèlǐ, nǐ yǒu shénme gǎnxiǎng hé tǐhuì ne?',ex_vn:'Đọc đến đây, bạn có cảm nghĩ và nhận thức gì?',
   exList:[
     {zh:'看到这里，你有什么感想和体会呢？',py:'Kàndào zhèlǐ, nǐ yǒu shénme gǎnxiǎng hé tǐhuì ne?',vn:'Đọc đến đây, bạn có cảm nghĩ và nhận thức gì?'},
     {zh:'来中国一年多了，你有什么感想？',py:'Lái Zhōngguó yì nián duō le, nǐ yǒu shénme gǎnxiǎng?',vn:'Đến Trung Quốc hơn một năm rồi, bạn có cảm nghĩ gì?'},
     {zh:'看完这部电影，老师让我们每人写一篇感想。',py:'Kànwán zhè bù diànyǐng, lǎoshī ràng wǒmen měi rén xiě yì piān gǎnxiǎng.',vn:'Xem xong bộ phim này, thầy giáo bảo mỗi người chúng tôi viết một bài cảm nghĩ.'}
   ],
   colloFull:[
     {zh:'有什么感想',py:'yǒu shénme gǎnxiǎng',vn:'có cảm nghĩ gì'},
     {zh:'谈谈感想',py:'tántan gǎnxiǎng',vn:'nói về cảm nghĩ'},
     {zh:'写感想',py:'xiě gǎnxiǎng',vn:'viết cảm nghĩ'},
     {zh:'读后感想',py:'dú hòu gǎnxiǎng',vn:'cảm nghĩ sau khi đọc'},
     {zh:'发表感想',py:'fābiǎo gǎnxiǎng',vn:'phát biểu cảm tưởng'}
   ],
   patterns:[
     {s:'对…… / ……以后 + 有什么感想？', m:'Hỏi cảm nghĩ sau một sự việc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tham quan bảo tàng xong, cô giáo bảo chúng tôi nói cảm nghĩ.',answer:'参观完博物馆以后，老师让我们谈谈感想。',answerPy:'Cānguānwán bówùguǎn yǐhòu, lǎoshī ràng wǒmen tántan gǎnxiǎng.',
      note:'让 + người + V (câu kiêm ngữ); 谈谈感想.',pair:'让……'},
     {promptLang:'vi',prompt:'Ngay cả thầy hiệu trưởng cũng đến nghe chúng tôi nói cảm tưởng.',answer:'连校长都来听我们谈感想了。',answerPy:'Lián xiàozhǎng dōu lái tīng wǒmen tán gǎnxiǎng le.',
      note:'连……都…… nhấn mạnh trường hợp đặc biệt.',pair:'连……都……'}
   ]},

  {n:21,zh:'体会',py:'tǐhuì',pos:'Danh từ / Động từ',vn:'nhận thức, sự hiểu biết (qua trải nghiệm); thấm thía',hv:'thể hội',em:'🧠',lesson:1,
   explain:['Danh từ: điều hiểu ra, thấm thía qua trải nghiệm thực tế — 我最大的体会是…… (điều tôi thấm thía nhất là…).','Động từ: cảm nhận sâu sắc, thấu hiểu — 体会到父母的辛苦. Hay đi với 深刻 (体会深刻 — bài tập 3 của sách).'],
   usage:'有体会 / 最大的体会 / 深刻的体会; 体会 + 到 + điều gì (động từ); 让……体会到…….',
   collo:['最大的体会','深刻的体会','体会到','有什么体会'],
   ex_zh:'我最大的体会就是中国太大了，要学的、要看的、要吃的太多了。',ex_py:'Wǒ zuì dà de tǐhuì jiù shì Zhōngguó tài dà le, yào xué de, yào kàn de, yào chī de tài duō le.',ex_vn:'Điều tôi thấm thía nhất là Trung Quốc quá rộng lớn, những thứ phải học, phải xem, phải ăn nhiều lắm.',
   exList:[
     {zh:'我最大的体会就是中国太大了，要学的、要看的、要吃的太多了。',py:'Wǒ zuì dà de tǐhuì jiù shì Zhōngguó tài dà le, yào xué de, yào kàn de, yào chī de tài duō le.',vn:'Điều tôi thấm thía nhất là Trung Quốc quá rộng lớn, những thứ phải học, phải xem, phải ăn nhiều lắm.'},
     {zh:'看到这里，你有什么感想和体会呢？',py:'Kàndào zhèlǐ, nǐ yǒu shénme gǎnxiǎng hé tǐhuì ne?',vn:'Đọc đến đây, bạn có cảm nghĩ và nhận thức gì?'},
     {zh:'让孩子体会到自己的意见受到尊重，这一点很重要。',py:'Ràng háizi tǐhuì dào zìjǐ de yìjiàn shòudào zūnzhòng, zhè yì diǎn hěn zhòngyào.',vn:'Để trẻ cảm nhận được ý kiến của mình được tôn trọng — điều này rất quan trọng.'}
   ],
   colloFull:[
     {zh:'最大的体会',py:'zuì dà de tǐhuì',vn:'điều thấm thía nhất'},
     {zh:'深刻的体会',py:'shēnkè de tǐhuì',vn:'nhận thức sâu sắc'},
     {zh:'体会到',py:'tǐhuì dào',vn:'cảm nhận được, thấm thía được'},
     {zh:'有什么体会',py:'yǒu shénme tǐhuì',vn:'có nhận thức gì'},
     {zh:'体会深刻',py:'tǐhuì shēnkè',vn:'thấm thía sâu sắc'}
   ],
   patterns:[
     {s:'体会到 + điều gì', m:'Thấm thía, cảm nhận được điều gì (động từ)'},
     {s:'……最大的体会是……', m:'Điều thấm thía nhất là … (danh từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tự nấu cơm một tuần rồi, tôi mới thấm thía được sự vất vả của mẹ.',answer:'自己做了一个星期的饭以后，我才体会到妈妈的辛苦。',answerPy:'Zìjǐ zuòle yí ge xīngqī de fàn yǐhòu, wǒ cái tǐhuì dào māma de xīnkǔ.',
      note:'体会到 + điều gì; ……以后，才…… (muộn hơn mong đợi).',pair:'……以后，才……'},
     {promptLang:'vi',prompt:'Trải nghiệm làm tình nguyện viên lần này đã cho tôi một nhận thức rất sâu sắc.',answer:'这次做志愿者的经历让我有了很深刻的体会。',answerPy:'Zhè cì zuò zhìyuànzhě de jīnglì ràng wǒ yǒule hěn shēnkè de tǐhuì.',
      note:'深刻的体会; 让 + người + V.',pair:'让……'}
   ]},

  {n:22,zh:'概念',py:'gàiniàn',pos:'Danh từ',vn:'khái niệm, ý niệm',hv:'khái niệm',em:'📘',lesson:1,
   explain:['Ý niệm khái quát về bản chất của sự vật: 基本概念, 经济学概念.','Hay đi với vị ngữ: 概念 + 明确 / 模糊 / 错误 / 复杂 (bảng 搭配 của sách); 对……没有概念 = không có chút khái niệm gì về ….'],
   usage:'一个概念; 概念 + 明确 / 模糊 / 抽象; 这个概念的核心是……; 对……没有概念.',
   collo:['概念明确','概念模糊','基本概念','没有概念'],
   ex_zh:'这个概念的核心是：一个市场如果能采取一种措施，刺激企业活跃起来，就能使企业获得足够的活力。',ex_py:'Zhège gàiniàn de héxīn shì: yí ge shìchǎng rúguǒ néng cǎiqǔ yì zhǒng cuòshī, cìjī qǐyè huóyuè qǐlai, jiù néng shǐ qǐyè huòdé zúgòu de huólì.',ex_vn:'Cốt lõi của khái niệm này là: một thị trường nếu có thể áp dụng một biện pháp kích thích doanh nghiệp trở nên năng động, thì có thể khiến doanh nghiệp có đủ sức sống.',
   exList:[
     {zh:'这个概念的核心是：一个市场如果能采取一种措施，刺激企业活跃起来，就能使企业获得足够的活力。',py:'Zhège gàiniàn de héxīn shì: yí ge shìchǎng rúguǒ néng cǎiqǔ yì zhǒng cuòshī, cìjī qǐyè huóyuè qǐlai, jiù néng shǐ qǐyè huòdé zúgòu de huólì.',vn:'Cốt lõi của khái niệm này là: một thị trường nếu có thể áp dụng một biện pháp kích thích doanh nghiệp trở nên năng động, thì có thể khiến doanh nghiệp có đủ sức sống.'},
     {zh:'这个概念太抽象了，你能举个例子吗？',py:'Zhège gàiniàn tài chōuxiàng le, nǐ néng jǔ ge lìzi ma?',vn:'Khái niệm này trừu tượng quá, bạn có thể lấy một ví dụ không?'},
     {zh:'他对钱一点儿概念也没有，工资一发就花光了。',py:'Tā duì qián yìdiǎnr gàiniàn yě méiyǒu, gōngzī yì fā jiù huāguāng le.',vn:'Anh ta chẳng có chút khái niệm gì về tiền, lương vừa phát là tiêu sạch.'}
   ],
   colloFull:[
     {zh:'概念明确',py:'gàiniàn míngquè',vn:'khái niệm rõ ràng'},
     {zh:'概念模糊',py:'gàiniàn móhu',vn:'khái niệm mơ hồ'},
     {zh:'基本概念',py:'jīběn gàiniàn',vn:'khái niệm cơ bản'},
     {zh:'没有概念',py:'méiyǒu gàiniàn',vn:'không có khái niệm'},
     {zh:'概念抽象',py:'gàiniàn chōuxiàng',vn:'khái niệm trừu tượng'}
   ],
   patterns:[
     {s:'概念 + 明确 / 模糊 / 抽象', m:'Khái niệm rõ ràng / mơ hồ / trừu tượng'},
     {s:'对 + N + 没有概念', m:'Không có khái niệm gì về …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khái niệm này ngay cả thầy giáo cũng giải thích không rõ.',answer:'这个概念连老师都解释不清楚。',answerPy:'Zhège gàiniàn lián lǎoshī dōu jiěshì bu qīngchu.',
      note:'Tân ngữ 这个概念 đưa lên đầu câu làm chủ đề; 连……都…….',pair:'连……都……'},
     {promptLang:'vi',prompt:'Chỉ cần khái niệm rõ ràng, làm bài sẽ không sai.',answer:'只要概念明确，做题就不会出错。',answerPy:'Zhǐyào gàiniàn míngquè, zuò tí jiù bú huì chūcuò.',
      note:'概念 + 明确 (bảng 搭配 của sách).',pair:'只要……就……'}
   ]},

  {n:23,zh:'核心',py:'héxīn',pos:'Danh từ',vn:'phần cốt lõi, nòng cốt',hv:'hạch tâm',em:'🎯',lesson:1,
   explain:['Phần trung tâm, quan trọng nhất của sự vật: 问题的核心, 核心技术, 核心人物.','Hay làm định ngữ: 核心 + 技术 / 部分 / 内容 / 竞争力; mẫu 以……为核心 (lấy … làm trung tâm).'],
   usage:'……的核心是……; 核心 + 技术 / 问题 / 内容 / 竞争力; 以……为核心.',
   collo:['概念的核心','核心技术','核心问题','核心竞争力'],
   ex_zh:'这个概念的核心是：一个市场如果能采取一种措施，刺激企业活跃起来，就能使企业获得足够的活力。',ex_py:'Zhège gàiniàn de héxīn shì: yí ge shìchǎng rúguǒ néng cǎiqǔ yì zhǒng cuòshī, cìjī qǐyè huóyuè qǐlai, jiù néng shǐ qǐyè huòdé zúgòu de huólì.',ex_vn:'Cốt lõi của khái niệm này là: một thị trường nếu có thể áp dụng một biện pháp kích thích doanh nghiệp trở nên năng động, thì có thể khiến doanh nghiệp có đủ sức sống.',
   exList:[
     {zh:'这个概念的核心是：一个市场如果能采取一种措施，刺激企业活跃起来，就能使企业获得足够的活力。',py:'Zhège gàiniàn de héxīn shì: yí ge shìchǎng rúguǒ néng cǎiqǔ yì zhǒng cuòshī, cìjī qǐyè huóyuè qǐlai, jiù néng shǐ qǐyè huòdé zúgòu de huólì.',vn:'Cốt lõi của khái niệm này là: một thị trường nếu có thể áp dụng một biện pháp kích thích doanh nghiệp trở nên năng động, thì có thể khiến doanh nghiệp có đủ sức sống.'},
     {zh:'掌握核心技术，企业才能在竞争中不落后。',py:'Zhǎngwò héxīn jìshù, qǐyè cái néng zài jìngzhēng zhōng bú luòhòu.',vn:'Nắm được công nghệ cốt lõi, doanh nghiệp mới không bị tụt lại trong cạnh tranh.'},
     {zh:'这篇文章的核心内容只有一句话：要不断学习。',py:'Zhè piān wénzhāng de héxīn nèiróng zhǐ yǒu yí jù huà: yào búduàn xuéxí.',vn:'Nội dung cốt lõi của bài viết này chỉ có một câu: phải không ngừng học hỏi.'}
   ],
   colloFull:[
     {zh:'概念的核心',py:'gàiniàn de héxīn',vn:'cốt lõi của khái niệm'},
     {zh:'核心技术',py:'héxīn jìshù',vn:'công nghệ cốt lõi'},
     {zh:'核心问题',py:'héxīn wèntí',vn:'vấn đề cốt lõi'},
     {zh:'核心竞争力',py:'héxīn jìngzhēnglì',vn:'năng lực cạnh tranh cốt lõi'},
     {zh:'核心内容',py:'héxīn nèiróng',vn:'nội dung cốt lõi'}
   ],
   patterns:[
     {s:'……的核心是……', m:'Cốt lõi của … là …'},
     {s:'核心 + 技术 / 问题 / 内容', m:'核心 làm định ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có nắm vững công nghệ cốt lõi, doanh nghiệp mới không bị tụt hậu.',answer:'只有掌握核心技术，企业才不会落后。',answerPy:'Zhǐyǒu zhǎngwò héxīn jìshù, qǐyè cái bú huì luòhòu.',
      note:'核心技术; 只有……才…… (điều kiện duy nhất).',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Cốt lõi của vấn đề này đã bị anh ấy tìm ra rồi.',answer:'这个问题的核心被他找到了。',answerPy:'Zhège wèntí de héxīn bèi tā zhǎodào le.',
      note:'Câu bị động 被 + người làm + V + 到 + 了.',pair:'被……'}
   ]},

  {n:24,zh:'刺激',py:'cìjī',pos:'Động từ',vn:'kích thích, thúc đẩy',hv:'thứ kích',em:'⚡',lesson:1,
   explain:['Động từ: tác động làm cho cơ thể, tinh thần hoặc sự vật phản ứng, hoạt động mạnh lên — 刺激食欲, 刺激经济, 刺激企业活跃起来.','Tính từ (khẩu ngữ): gây cảm giác mạnh — 过山车太刺激了! Danh từ: 受到刺激 (bị kích động, bị sốc).'],
   usage:'刺激 + 胃 / 大脑 / 生产 / 购买力 / 经济 (bảng 搭配 của sách); 刺激 + đối tượng + V (刺激企业活跃起来); 受到刺激; 很刺激.',
   collo:['刺激经济','刺激购买力','刺激大脑','刺激生产','受到刺激'],
   ex_zh:'必须采取措施刺激企业活跃起来。',ex_py:'Bìxū cǎiqǔ cuòshī cìjī qǐyè huóyuè qǐlai.',ex_vn:'Phải áp dụng biện pháp kích thích doanh nghiệp năng động lên.',
   exList:[
     {zh:'必须采取措施刺激企业活跃起来。',py:'Bìxū cǎiqǔ cuòshī cìjī qǐyè huóyuè qǐlai.',vn:'Phải áp dụng biện pháp kích thích doanh nghiệp năng động lên.'},
     {zh:'一个市场如果能采取一种措施，刺激企业活跃起来，就能使企业获得足够的活力。',py:'Yí ge shìchǎng rúguǒ néng cǎiqǔ yì zhǒng cuòshī, cìjī qǐyè huóyuè qǐlai, jiù néng shǐ qǐyè huòdé zúgòu de huólì.',vn:'Một thị trường nếu có thể áp dụng một biện pháp kích thích doanh nghiệp năng động lên, thì có thể khiến doanh nghiệp có đủ sức sống.'},
     {zh:'辣的东西会刺激胃，你最近少吃点儿吧。',py:'Là de dōngxi huì cìjī wèi, nǐ zuìjìn shǎo chī diǎnr ba.',vn:'Đồ cay sẽ kích thích dạ dày, dạo này cậu ăn ít thôi.'}
   ],
   colloFull:[
     {zh:'刺激经济',py:'cìjī jīngjì',vn:'kích thích kinh tế'},
     {zh:'刺激购买力',py:'cìjī gòumǎilì',vn:'kích thích sức mua'},
     {zh:'刺激大脑',py:'cìjī dànǎo',vn:'kích thích não bộ'},
     {zh:'刺激生产',py:'cìjī shēngchǎn',vn:'thúc đẩy sản xuất'},
     {zh:'受到刺激',py:'shòudào cìjī',vn:'bị kích động, bị sốc'},
     {zh:'刺激胃',py:'cìjī wèi',vn:'kích thích dạ dày'}
   ],
   patterns:[
     {s:'刺激 + 经济 / 生产 / 购买力', m:'Kích thích, thúc đẩy cái gì'},
     {s:'刺激 + đối tượng + V (活跃起来)', m:'Kích thích ai / cái gì làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để kích thích kinh tế, chính phủ đã áp dụng rất nhiều biện pháp.',answer:'为了刺激经济，政府采取了很多措施。',answerPy:'Wèile cìjī jīngjì, zhèngfǔ cǎiqǔle hěn duō cuòshī.',
      note:'刺激经济; 采取措施 (áp dụng biện pháp).',pair:'为了……'},
     {promptLang:'vi',prompt:'Tàu lượn siêu tốc càng chơi càng thấy kích thích.',answer:'过山车越玩越觉得刺激。',answerPy:'Guòshānchē yuè wán yuè juéde cìjī.',
      note:'刺激 làm tính từ (khẩu ngữ): gây cảm giác mạnh.',pair:'越……越……'}
   ]},

  {n:25,zh:'活力',py:'huólì',pos:'Danh từ',vn:'sức sống, sinh khí',hv:'hoạt lực',em:'💪',lesson:1,
   explain:['Sức sống mạnh mẽ, sự năng động, sinh khí: 充满活力, 企业的活力.','Dùng cho người, tổ chức, thành phố, nền kinh tế: 年轻人充满活力, 城市的活力, 增强企业的活力.'],
   usage:'充满 / 保持 / 失去 + 活力; 增强 / 提高 + ……的活力; 有活力; 足够的活力.',
   collo:['充满活力','企业活力','保持活力','足够的活力'],
   ex_zh:'因此，“鲇鱼效应”的确对挖掘员工潜力、提高企业活力具有积极的意义。',ex_py:'Yīncǐ, “niányú xiàoyìng” díquè duì wājué yuángōng qiánlì, tígāo qǐyè huólì jùyǒu jījí de yìyì.',ex_vn:'Vì vậy, “hiệu ứng cá nheo” quả thực có ý nghĩa tích cực đối với việc khai thác tiềm năng của nhân viên, nâng cao sức sống của doanh nghiệp.',
   exList:[
     {zh:'因此，“鲇鱼效应”的确对挖掘员工潜力、提高企业活力具有积极的意义。',py:'Yīncǐ, “niányú xiàoyìng” díquè duì wājué yuángōng qiánlì, tígāo qǐyè huólì jùyǒu jījí de yìyì.',vn:'Vì vậy, “hiệu ứng cá nheo” quả thực có ý nghĩa tích cực đối với việc khai thác tiềm năng của nhân viên, nâng cao sức sống của doanh nghiệp.'},
     {zh:'竞争可以增强企业的活力，能够推动经济和社会的发展。',py:'Jìngzhēng kěyǐ zēngqiáng qǐyè de huólì, nénggòu tuīdòng jīngjì hé shèhuì de fāzhǎn.',vn:'Cạnh tranh có thể tăng cường sức sống của doanh nghiệp, có thể thúc đẩy kinh tế và xã hội phát triển.'},
     {zh:'每天早上跑步，让我一整天都充满活力。',py:'Měi tiān zǎoshang pǎobù, ràng wǒ yì zhěng tiān dōu chōngmǎn huólì.',vn:'Sáng nào cũng chạy bộ khiến tôi tràn đầy sức sống cả ngày.'}
   ],
   colloFull:[
     {zh:'充满活力',py:'chōngmǎn huólì',vn:'tràn đầy sức sống'},
     {zh:'企业活力',py:'qǐyè huólì',vn:'sức sống của doanh nghiệp'},
     {zh:'保持活力',py:'bǎochí huólì',vn:'giữ được sức sống'},
     {zh:'足够的活力',py:'zúgòu de huólì',vn:'đủ sức sống'},
     {zh:'失去活力',py:'shīqù huólì',vn:'mất đi sức sống'}
   ],
   patterns:[
     {s:'充满 / 保持 / 失去 + 活力', m:'Tràn đầy / giữ / mất sức sống'},
     {s:'增强 / 提高 + ……的活力', m:'Tăng cường sức sống của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Từ khi có thêm mấy nhân viên trẻ, cả công ty ngày càng có sức sống.',answer:'自从来了几个年轻员工，整个公司越来越有活力了。',answerPy:'Zìcóng láile jǐ ge niánqīng yuángōng, zhěnggè gōngsī yuè lái yuè yǒu huólì le.',
      note:'有活力 (có sức sống); ôn 自从 (bài 22).',pair:'越来越……'},
     {promptLang:'vi',prompt:'Thành phố này không chỉ có lịch sử lâu đời, mà cũng tràn đầy sức sống.',answer:'这座城市不仅历史悠久，也充满活力。',answerPy:'Zhè zuò chéngshì bùjǐn lìshǐ yōujiǔ, yě chōngmǎn huólì.',
      note:'充满活力; ôn 悠久, 充满 (bài 5).',pair:'不仅……也……'}
   ]},

  {n:26,zh:'落后',py:'luòhòu',pos:'Động từ / Tính từ',vn:'tụt lại đằng sau; lạc hậu',hv:'lạc hậu',em:'🐢',lesson:1,
   explain:['Động từ: tụt lại phía sau, bị bỏ lại — 落后于…… (tụt sau …), 落后两分 (thua hai điểm).','Tính từ: lạc hậu, kém phát triển — 落后地区, 设备落后, 观念落后. Trái nghĩa: 先进 / 领先.'],
   usage:'落后于 + đối tượng; 落后 + số lượng (落后两个球); 落后的地区 / 设备 / 观念; 不至于落后.',
   collo:['落后于','落后地区','设备落后','不至于落后'],
   ex_zh:'中国各地区经济发展水平不平衡，中西部落后于东南沿海地区。',ex_py:'Zhōngguó gè dìqū jīngjì fāzhǎn shuǐpíng bù pínghéng, zhōng-xībù luòhòu yú dōngnán yánhǎi dìqū.',ex_vn:'Trình độ phát triển kinh tế giữa các vùng của Trung Quốc không đồng đều, miền Trung và miền Tây tụt hậu so với vùng duyên hải Đông Nam.',
   exList:[
     {zh:'中国各地区经济发展水平不平衡，中西部落后于东南沿海地区。',py:'Zhōngguó gè dìqū jīngjì fāzhǎn shuǐpíng bù pínghéng, zhōng-xībù luòhòu yú dōngnán yánhǎi dìqū.',vn:'Trình độ phát triển kinh tế giữa các vùng của Trung Quốc không đồng đều, miền Trung và miền Tây tụt hậu so với vùng duyên hải Đông Nam.'},
     {zh:'正因为那里是落后地区，才需要大家去建设。',py:'Zhèng yīnwèi nàlǐ shì luòhòu dìqū, cái xūyào dàjiā qù jiànshè.',vn:'Chính vì nơi đó là vùng lạc hậu, nên mới cần mọi người đến xây dựng.'},
     {zh:'企业要在市场中积极参与竞争，才不至于落后。',py:'Qǐyè yào zài shìchǎng zhōng jījí cānyù jìngzhēng, cái bú zhìyú luòhòu.',vn:'Doanh nghiệp phải tích cực tham gia cạnh tranh trên thị trường thì mới không đến nỗi bị tụt lại.'}
   ],
   colloFull:[
     {zh:'落后于',py:'luòhòu yú',vn:'tụt hậu so với'},
     {zh:'落后地区',py:'luòhòu dìqū',vn:'vùng lạc hậu, kém phát triển'},
     {zh:'设备落后',py:'shèbèi luòhòu',vn:'thiết bị lạc hậu'},
     {zh:'不至于落后',py:'bú zhìyú luòhòu',vn:'không đến nỗi tụt lại'},
     {zh:'落后两个球',py:'luòhòu liǎng ge qiú',vn:'bị dẫn hai bàn'}
   ],
   patterns:[
     {s:'A 落后于 B', m:'A tụt lại sau B (văn viết)'},
     {s:'落后 + số lượng', m:'Kém bao nhiêu (điểm, bàn…)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy đội chúng tôi đang bị dẫn hai bàn, nhưng không ai bỏ cuộc.',answer:'虽然我们队落后两个球，但是没有人放弃。',answerPy:'Suīrán wǒmen duì luòhòu liǎng ge qiú, dànshì méiyǒu rén fàngqì.',
      note:'落后 + số lượng (động từ).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần không ngừng học tập, sẽ không bị tụt hậu.',answer:'只要不断学习，就不会落后。',answerPy:'Zhǐyào búduàn xuéxí, jiù bú huì luòhòu.',
      note:'Ôn 不断 cùng bài; 只要……就…….',pair:'只要……就……'}
   ]},

  {n:27,zh:'本质',py:'běnzhì',pos:'Danh từ',vn:'bản chất',hv:'bản chất',em:'🔍',lesson:1,
   explain:['Thuộc tính căn bản, bên trong của sự vật, quyết định sự vật ấy là gì — đối lập với 现象 / 表面.','Hay dùng: 从本质上说 / 看 (xét về bản chất), 问题的本质, 看清本质. Phân biệt: 根本 là phó từ "hoàn toàn, căn bản" (根本不知道); 本质 là danh từ, không đứng trước động từ làm trạng ngữ phủ định.'],
   usage:'从本质上说 / 看; ……的本质; 看清 / 抓住 + 本质; 本质上 + 不同.',
   collo:['从本质上说','问题的本质','看清本质','本质的区别'],
   ex_zh:'从本质上说，“鲇鱼效应”使得企业和员工产生一种危机感，其实就是一种压力效应。',ex_py:'Cóng běnzhì shang shuō, “niányú xiàoyìng” shǐde qǐyè hé yuángōng chǎnshēng yì zhǒng wēijīgǎn, qíshí jiù shì yì zhǒng yālì xiàoyìng.',ex_vn:'Xét về bản chất, “hiệu ứng cá nheo” khiến doanh nghiệp và nhân viên nảy sinh cảm giác nguy cơ, thực ra chính là một loại hiệu ứng áp lực.',
   exList:[
     {zh:'从本质上说，“鲇鱼效应”使得企业和员工产生一种危机感，其实就是一种压力效应。',py:'Cóng běnzhì shang shuō, “niányú xiàoyìng” shǐde qǐyè hé yuángōng chǎnshēng yì zhǒng wēijīgǎn, qíshí jiù shì yì zhǒng yālì xiàoyìng.',vn:'Xét về bản chất, “hiệu ứng cá nheo” khiến doanh nghiệp và nhân viên nảy sinh cảm giác nguy cơ, thực ra chính là một loại hiệu ứng áp lực.'},
     {zh:'看问题不能只看表面，要看清它的本质。',py:'Kàn wèntí bù néng zhǐ kàn biǎomiàn, yào kànqīng tā de běnzhì.',vn:'Nhìn nhận vấn đề không thể chỉ nhìn bề ngoài, phải nhìn rõ bản chất của nó.'},
     {zh:'这两种方法看起来差不多，其实有本质的区别。',py:'Zhè liǎng zhǒng fāngfǎ kàn qilai chàbuduō, qíshí yǒu běnzhì de qūbié.',vn:'Hai phương pháp này trông thì na ná nhau, thật ra có sự khác biệt về bản chất.'}
   ],
   colloFull:[
     {zh:'从本质上说',py:'cóng běnzhì shang shuō',vn:'xét về bản chất'},
     {zh:'问题的本质',py:'wèntí de běnzhì',vn:'bản chất của vấn đề'},
     {zh:'看清本质',py:'kànqīng běnzhì',vn:'nhìn rõ bản chất'},
     {zh:'本质的区别',py:'běnzhì de qūbié',vn:'khác biệt về bản chất'},
     {zh:'抓住本质',py:'zhuāzhù běnzhì',vn:'nắm được bản chất'}
   ],
   patterns:[
     {s:'从本质上说 / 看，……', m:'Xét về bản chất thì …'},
     {s:'看清 / 抓住 + ……的本质', m:'Nhìn rõ / nắm được bản chất của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hai cách này tuy trông giống nhau, nhưng về bản chất hoàn toàn khác nhau.',answer:'这两个办法虽然看起来一样，但是本质上完全不同。',answerPy:'Zhè liǎng ge bànfǎ suīrán kàn qilai yíyàng, dànshì běnzhì shang wánquán bù tóng.',
      note:'本质上 = về bản chất (đối lập với 看起来 — bề ngoài).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Bản chất của vấn đề đã bị anh ấy nhìn ra rồi.',answer:'问题的本质被他看出来了。',answerPy:'Wèntí de běnzhì bèi tā kàn chulai le.',
      note:'Câu bị động 被; bổ ngữ xu hướng 出来.',pair:'被……'}
   ]},

  {n:28,zh:'员工',py:'yuángōng',pos:'Danh từ',vn:'công nhân viên, nhân viên',hv:'viên công',em:'👷',lesson:1,
   explain:['Người làm việc trong một cơ quan, công ty, xí nghiệp: 公司员工, 新员工, 全体员工.','Hay đi đôi với 企业 / 公司: 企业和员工. Không dùng để gọi trực tiếp người khác (không nói ✗ 员工，你好).'],
   usage:'公司 / 企业 + 员工; 新员工 / 老员工 / 全体员工; 培训 / 招聘 + 员工; 员工的潜力.',
   collo:['企业和员工','新员工','全体员工','培训员工'],
   ex_zh:'从本质上说，“鲇鱼效应”使得企业和员工产生一种危机感。',ex_py:'Cóng běnzhì shang shuō, “niányú xiàoyìng” shǐde qǐyè hé yuángōng chǎnshēng yì zhǒng wēijīgǎn.',ex_vn:'Xét về bản chất, “hiệu ứng cá nheo” khiến doanh nghiệp và nhân viên nảy sinh cảm giác nguy cơ.',
   exList:[
     {zh:'从本质上说，“鲇鱼效应”使得企业和员工产生一种危机感。',py:'Cóng běnzhì shang shuō, “niányú xiàoyìng” shǐde qǐyè hé yuángōng chǎnshēng yì zhǒng wēijīgǎn.',vn:'Xét về bản chất, “hiệu ứng cá nheo” khiến doanh nghiệp và nhân viên nảy sinh cảm giác nguy cơ.'},
     {zh:'公司每年都会培训新员工。',py:'Gōngsī měi nián dōu huì péixùn xīn yuángōng.',vn:'Năm nào công ty cũng đào tạo nhân viên mới.'},
     {zh:'全体员工都参加了这次年会。',py:'Quántǐ yuángōng dōu cānjiāle zhè cì niánhuì.',vn:'Toàn thể nhân viên đều tham gia buổi tiệc cuối năm lần này.'}
   ],
   colloFull:[
     {zh:'企业和员工',py:'qǐyè hé yuángōng',vn:'doanh nghiệp và nhân viên'},
     {zh:'新员工',py:'xīn yuángōng',vn:'nhân viên mới'},
     {zh:'全体员工',py:'quántǐ yuángōng',vn:'toàn thể nhân viên'},
     {zh:'培训员工',py:'péixùn yuángōng',vn:'đào tạo nhân viên'},
     {zh:'员工的潜力',py:'yuángōng de qiánlì',vn:'tiềm năng của nhân viên'}
   ],
   patterns:[
     {s:'公司 / 企业 + 员工', m:'Nhân viên của công ty / doanh nghiệp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty không những tăng lương cho nhân viên, mà cũng cải thiện môi trường làm việc.',answer:'公司不仅给员工涨了工资，也改善了工作环境。',answerPy:'Gōngsī bùjǐn gěi yuángōng zhǎngle gōngzī, yě gǎishànle gōngzuò huánjìng.',
      note:'给 + 员工 + 涨工资 (ôn 涨, bài 20); 改善环境.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Tất cả nhân viên mới đều được cử đi tham gia bồi dưỡng.',answer:'所有的新员工都被派去参加培训了。',answerPy:'Suǒyǒu de xīn yuángōng dōu bèi pài qù cānjiā péixùn le.',
      note:'被 + 派 (bài 15) + 去 + V; ôn 培训 (bài 24).',pair:'被……'}
   ]},

  {n:29,zh:'危机',py:'wēijī',pos:'Danh từ',vn:'sự khủng hoảng, tình thế nguy ngập',hv:'nguy cơ',em:'🚨',lesson:1,
   explain:['Tình trạng nguy hiểm, then chốt, có thể dẫn đến tai họa — KHỦNG HOẢNG: 经济危机, 金融危机.','危机感 = cảm giác nguy cơ, cảm giác bị đe dọa (thường là động lực để cố gắng). BẪY: "nguy cơ" tiếng Việt là khả năng xảy ra điều xấu (tiếng Trung: 风险 / 危险); 危机 chủ yếu là "khủng hoảng".'],
   usage:'经济 / 金融 / 信任 + 危机; 面临 / 出现 / 度过 + 危机; 产生 / 有 + 危机感.',
   collo:['经济危机','危机感','面临危机','度过危机'],
   ex_zh:'从本质上说，“鲇鱼效应”使得企业和员工产生一种危机感。',ex_py:'Cóng běnzhì shang shuō, “niányú xiàoyìng” shǐde qǐyè hé yuángōng chǎnshēng yì zhǒng wēijīgǎn.',ex_vn:'Xét về bản chất, “hiệu ứng cá nheo” khiến doanh nghiệp và nhân viên nảy sinh cảm giác nguy cơ.',
   exList:[
     {zh:'从本质上说，“鲇鱼效应”使得企业和员工产生一种危机感。',py:'Cóng běnzhì shang shuō, “niányú xiàoyìng” shǐde qǐyè hé yuángōng chǎnshēng yì zhǒng wēijīgǎn.',vn:'Xét về bản chất, “hiệu ứng cá nheo” khiến doanh nghiệp và nhân viên nảy sinh cảm giác nguy cơ.'},
     {zh:'那场经济危机让很多公司破产了。',py:'Nà chǎng jīngjì wēijī ràng hěn duō gōngsī pòchǎn le.',vn:'Cuộc khủng hoảng kinh tế đó đã khiến rất nhiều công ty phá sản.'},
     {zh:'有了危机感，他学习比以前努力多了。',py:'Yǒule wēijīgǎn, tā xuéxí bǐ yǐqián nǔlì duō le.',vn:'Có cảm giác nguy cơ rồi, cậu ấy học chăm hơn trước nhiều.'}
   ],
   colloFull:[
     {zh:'经济危机',py:'jīngjì wēijī',vn:'khủng hoảng kinh tế'},
     {zh:'危机感',py:'wēijīgǎn',vn:'cảm giác nguy cơ'},
     {zh:'面临危机',py:'miànlín wēijī',vn:'đứng trước khủng hoảng'},
     {zh:'度过危机',py:'dùguò wēijī',vn:'vượt qua khủng hoảng'},
     {zh:'金融危机',py:'jīnróng wēijī',vn:'khủng hoảng tài chính'}
   ],
   patterns:[
     {s:'面临 / 度过 + 危机', m:'Đứng trước / vượt qua khủng hoảng'},
     {s:'产生 + 危机感', m:'Nảy sinh cảm giác nguy cơ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy công ty đang đứng trước khủng hoảng, nhưng không có nhân viên nào muốn rời đi.',answer:'虽然公司面临危机，但是没有一个员工愿意离开。',answerPy:'Suīrán gōngsī miànlín wēijī, dànshì méiyǒu yí ge yuángōng yuànyì líkāi.',
      note:'面临危机; 没有一个…… = không một ai.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Có cảm giác nguy cơ rồi, cậu ấy càng học càng chăm.',answer:'有了危机感，他越学越努力。',answerPy:'Yǒule wēijīgǎn, tā yuè xué yuè nǔlì.',
      note:'危机感 là danh từ; 越……越…….',pair:'越……越……'}
   ]},

  {n:30,zh:'有利',py:'yǒulì',pos:'Tính từ',vn:'có lợi, có ích',hv:'hữu lợi',em:'✅',lesson:1,
   explain:['Có lợi, có ích: A 有利于 B (A có lợi cho B), 有利条件 (điều kiện thuận lợi).','Phủ định là 不利 (不利于……); mẫu khác: 对……有利. Hay đi với: 形势, 条件, 地位, 环境, 位置, 因素 (bảng 搭配 của sách).'],
   usage:'A 有利于 B; 对 + N + 有利 / 不利; 有利的 + 条件 / 形势 / 地位.',
   collo:['有利于','有利条件','对……有利','有利的形势'],
   ex_zh:'很多研究发现，适度的压力有利于我们保持良好的状态。',ex_py:'Hěn duō yánjiū fāxiàn, shìdù de yālì yǒulì yú wǒmen bǎochí liánghǎo de zhuàngtài.',ex_vn:'Nhiều nghiên cứu phát hiện, áp lực vừa phải có lợi cho việc chúng ta giữ được trạng thái tốt.',
   exList:[
     {zh:'很多研究发现，适度的压力有利于我们保持良好的状态。',py:'Hěn duō yánjiū fāxiàn, shìdù de yālì yǒulì yú wǒmen bǎochí liánghǎo de zhuàngtài.',vn:'Nhiều nghiên cứu phát hiện, áp lực vừa phải có lợi cho việc chúng ta giữ được trạng thái tốt.'},
     {zh:'高高的个子、漂亮的外表，都是他的有利条件。',py:'Gāogāo de gèzi, piàoliang de wàibiǎo, dōu shì tā de yǒulì tiáojiàn.',vn:'Dáng người cao ráo, vẻ ngoài ưa nhìn đều là điều kiện thuận lợi của anh ấy.'},
     {zh:'笑能促进心肺活动，对睡眠也是有利的。',py:'Xiào néng cùjìn xīnfèi huódòng, duì shuìmián yě shì yǒulì de.',vn:'Cười có thể thúc đẩy hoạt động của tim phổi, cũng có lợi cho giấc ngủ.'}
   ],
   colloFull:[
     {zh:'有利于',py:'yǒulì yú',vn:'có lợi cho'},
     {zh:'有利条件',py:'yǒulì tiáojiàn',vn:'điều kiện thuận lợi'},
     {zh:'对……有利',py:'duì……yǒulì',vn:'có lợi đối với …'},
     {zh:'有利的形势',py:'yǒulì de xíngshì',vn:'tình thế có lợi'},
     {zh:'不利于',py:'búlì yú',vn:'bất lợi cho'}
   ],
   patterns:[
     {s:'A 有利于 B / A 不利于 B', m:'A có lợi / bất lợi cho B'},
     {s:'A 对 B (是)有利的', m:'A có lợi đối với B'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'So với đọc sách điện tử, đọc sách giấy có lợi cho việc bảo vệ mắt hơn.',answer:'纸质阅读比电子阅读更有利于保护眼睛。',answerPy:'Zhǐzhì yuèdú bǐ diànzǐ yuèdú gèng yǒulì yú bǎohù yǎnjing.',
      note:'A 比 B 更 + 有利于……; 有利于 + cụm động từ.',pair:'比……'},
     {promptLang:'vi',prompt:'Chỉ cần ngủ đủ giấc, là có lợi cho sức khỏe.',answer:'只要睡眠充足，就有利于身体健康。',answerPy:'Zhǐyào shuìmián chōngzú, jiù yǒulì yú shēntǐ jiànkāng.',
      note:'有利于 + danh từ; 只要……就…….',pair:'只要……就……'}
   ]},

  {n:31,zh:'挖掘',py:'wājué',pos:'Động từ',vn:'khai thác, đào',hv:'oạt quật',em:'⛏️',lesson:1,
   explain:['Nghĩa gốc: đào (đất, mỏ, di vật) — 挖掘古墓 (khai quật mộ cổ).','Nghĩa bóng (hay dùng hơn): khai thác, tìm ra cái còn ẩn giấu — 挖掘潜力, 挖掘人才, 挖掘市场.'],
   usage:'挖掘 + 潜力 / 人才 / 资源 / 市场; 深入挖掘; 挖掘出……',
   collo:['挖掘潜力','挖掘人才','挖掘市场','深入挖掘'],
   ex_zh:'适度的压力更加有助于挖掘我们的潜力，从而提高个人的工作效率。',ex_py:'Shìdù de yālì gèngjiā yǒuzhù yú wājué wǒmen de qiánlì, cóng\'ér tígāo gèrén de gōngzuò xiàolǜ.',ex_vn:'Áp lực vừa phải càng giúp khai thác tiềm năng của chúng ta, từ đó nâng cao hiệu suất làm việc của mỗi người.',
   exList:[
     {zh:'适度的压力更加有助于挖掘我们的潜力，从而提高个人的工作效率。',py:'Shìdù de yālì gèngjiā yǒuzhù yú wājué wǒmen de qiánlì, cóng\'ér tígāo gèrén de gōngzuò xiàolǜ.',vn:'Áp lực vừa phải càng giúp khai thác tiềm năng của chúng ta, từ đó nâng cao hiệu suất làm việc của mỗi người.'},
     {zh:'因此，“鲇鱼效应”的确对挖掘员工潜力、提高企业活力具有积极的意义。',py:'Yīncǐ, “niányú xiàoyìng” díquè duì wājué yuángōng qiánlì, tígāo qǐyè huólì jùyǒu jījí de yìyì.',vn:'Vì vậy, “hiệu ứng cá nheo” quả thực có ý nghĩa tích cực đối với việc khai thác tiềm năng nhân viên, nâng cao sức sống doanh nghiệp.'},
     {zh:'好老师善于挖掘每个学生的优点。',py:'Hǎo lǎoshī shànyú wājué měi ge xuésheng de yōudiǎn.',vn:'Giáo viên giỏi biết cách tìm ra ưu điểm của từng học sinh.'}
   ],
   colloFull:[
     {zh:'挖掘潜力',py:'wājué qiánlì',vn:'khai thác tiềm năng'},
     {zh:'挖掘人才',py:'wājué réncái',vn:'phát hiện nhân tài'},
     {zh:'挖掘市场',py:'wājué shìchǎng',vn:'khai thác thị trường'},
     {zh:'深入挖掘',py:'shēnrù wājué',vn:'khai thác sâu'},
     {zh:'挖掘古墓',py:'wājué gǔmù',vn:'khai quật mộ cổ'}
   ],
   patterns:[
     {s:'挖掘 + 潜力 / 人才 / 市场', m:'Khai thác cái còn ẩn giấu (nghĩa bóng)'},
     {s:'挖掘出 + N', m:'Khai thác ra được …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để khai thác tiềm năng của nhân viên, công ty đã tổ chức rất nhiều hoạt động.',answer:'为了挖掘员工的潜力，公司组织了很多活动。',answerPy:'Wèile wājué yuángōng de qiánlì, gōngsī zǔzhīle hěn duō huódòng.',
      note:'挖掘潜力 là cụm cố định nhất của bài.',pair:'为了……'},
     {promptLang:'vi',prompt:'Chỉ có không ngừng thử sức mới khai thác được tiềm năng của bản thân.',answer:'只有不断尝试，才能挖掘出自己的潜力。',answerPy:'Zhǐyǒu búduàn chángshì, cái néng wājué chū zìjǐ de qiánlì.',
      note:'挖掘 + 出 (bổ ngữ kết quả); 只有……才…….',pair:'只有……才……'}
   ]},

  {n:32,zh:'潜力',py:'qiánlì',pos:'Danh từ',vn:'tiềm lực, tiềm năng',hv:'tiềm lực',em:'🌟',lesson:1,
   explain:['Năng lực, sức lực còn ẩn giấu, chưa phát huy ra: 有潜力, 发挥潜力, 挖掘潜力.','Dùng cho người, doanh nghiệp, thị trường: 这个孩子很有潜力, 市场潜力很大.'],
   usage:'有 / 很有 + 潜力; 挖掘 / 发挥 + 潜力; 潜力 + 很大; 市场潜力.',
   collo:['挖掘潜力','很有潜力','发挥潜力','市场潜力'],
   ex_zh:'适度的压力更加有助于挖掘我们的潜力。',ex_py:'Shìdù de yālì gèngjiā yǒuzhù yú wājué wǒmen de qiánlì.',ex_vn:'Áp lực vừa phải càng giúp khai thác tiềm năng của chúng ta.',
   exList:[
     {zh:'适度的压力更加有助于挖掘我们的潜力。',py:'Shìdù de yālì gèngjiā yǒuzhù yú wājué wǒmen de qiánlì.',vn:'Áp lực vừa phải càng giúp khai thác tiềm năng của chúng ta.'},
     {zh:'这个年轻人很有潜力，将来一定能成为优秀的运动员。',py:'Zhège niánqīngrén hěn yǒu qiánlì, jiānglái yídìng néng chéngwéi yōuxiù de yùndòngyuán.',vn:'Chàng trai này rất có tiềm năng, sau này chắc chắn sẽ trở thành một vận động viên xuất sắc.'},
     {zh:'中国农村市场的潜力很大。',py:'Zhōngguó nóngcūn shìchǎng de qiánlì hěn dà.',vn:'Tiềm năng của thị trường nông thôn Trung Quốc rất lớn.'}
   ],
   colloFull:[
     {zh:'挖掘潜力',py:'wājué qiánlì',vn:'khai thác tiềm năng'},
     {zh:'很有潜力',py:'hěn yǒu qiánlì',vn:'rất có tiềm năng'},
     {zh:'发挥潜力',py:'fāhuī qiánlì',vn:'phát huy tiềm năng'},
     {zh:'市场潜力',py:'shìchǎng qiánlì',vn:'tiềm năng thị trường'},
     {zh:'潜力很大',py:'qiánlì hěn dà',vn:'tiềm năng rất lớn'}
   ],
   patterns:[
     {s:'很有潜力 / 潜力很大', m:'Rất có tiềm năng (không nói ✗ 很潜力)'},
     {s:'挖掘 / 发挥 + ……的潜力', m:'Khai thác / phát huy tiềm năng của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cậu ấy mới học tiếng Trung một năm, nhưng rất có tiềm năng.',answer:'虽然他才学了一年汉语，但是很有潜力。',answerPy:'Suīrán tā cái xuéle yì nián Hànyǔ, dànshì hěn yǒu qiánlì.',
      note:'很 + 有潜力 (潜力 là danh từ, cần 有).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Áp lực vừa phải có thể khiến chúng ta phát huy được tiềm năng của mình.',answer:'适度的压力能让我们发挥出自己的潜力。',answerPy:'Shìdù de yālì néng ràng wǒmen fāhuī chū zìjǐ de qiánlì.',
      note:'让 + người + 发挥出 + 潜力.',pair:'让……'}
   ]},

  {n:33,zh:'决赛',py:'juésài',pos:'Động từ / Danh từ',vn:'thi đấu chung kết; trận chung kết',hv:'quyết tái',em:'🏆',lesson:1,
   explain:['Vòng thi đấu cuối cùng để quyết định thứ hạng: 进入决赛 (vào chung kết), 半决赛 (bán kết).','Sách ghi là động từ, nhưng trong câu hay dùng như danh từ: 参加决赛, 决赛时, 在决赛中. Ôn 入围 (bài 1) — lọt vào vòng trong.'],
   usage:'进入 / 参加 / 打进 + 决赛; 决赛 + 时 / 那天; 半决赛; 在决赛中.',
   collo:['进入决赛','参加决赛','半决赛','在决赛中'],
   ex_zh:'比如运动员每到参加比赛，尤其是决赛时，一定要将自己调整到接近最佳状态。',ex_py:'Bǐrú yùndòngyuán měi dào cānjiā bǐsài, yóuqí shì juésài shí, yídìng yào jiāng zìjǐ tiáozhěng dào jiējìn zuì jiā zhuàngtài.',ex_vn:'Chẳng hạn, vận động viên mỗi khi tham gia thi đấu, nhất là lúc chung kết, nhất định phải điều chỉnh bản thân đến gần trạng thái tốt nhất.',
   exList:[
     {zh:'比如运动员每到参加比赛，尤其是决赛时，一定要将自己调整到接近最佳状态。',py:'Bǐrú yùndòngyuán měi dào cānjiā bǐsài, yóuqí shì juésài shí, yídìng yào jiāng zìjǐ tiáozhěng dào jiējìn zuì jiā zhuàngtài.',vn:'Chẳng hạn, vận động viên mỗi khi tham gia thi đấu, nhất là lúc chung kết, nhất định phải điều chỉnh bản thân đến gần trạng thái tốt nhất.'},
     {zh:'我们班的篮球队终于进入了决赛。',py:'Wǒmen bān de lánqiúduì zhōngyú jìnrùle juésài.',vn:'Đội bóng rổ lớp chúng tôi cuối cùng đã vào chung kết.'},
     {zh:'在决赛中，她发挥得非常好，拿到了冠军。',py:'Zài juésài zhōng, tā fāhuī de fēicháng hǎo, nádàole guànjūn.',vn:'Trong trận chung kết, cô ấy thi đấu rất tốt và giành được chức vô địch.'}
   ],
   colloFull:[
     {zh:'进入决赛',py:'jìnrù juésài',vn:'vào chung kết'},
     {zh:'参加决赛',py:'cānjiā juésài',vn:'tham gia chung kết'},
     {zh:'半决赛',py:'bànjuésài',vn:'bán kết'},
     {zh:'在决赛中',py:'zài juésài zhōng',vn:'trong trận chung kết'},
     {zh:'决赛那天',py:'juésài nà tiān',vn:'hôm chung kết'}
   ],
   patterns:[
     {s:'进入 / 打进 + 决赛', m:'Vào chung kết'},
     {s:'在决赛中 / 决赛时', m:'Trong trận chung kết / lúc chung kết'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trong trận chung kết lần này, đội chúng tôi đã bị đội họ đánh bại.',answer:'在这次决赛中，我们队被他们打败了。',answerPy:'Zài zhè cì juésài zhōng, wǒmen duì bèi tāmen dǎbài le.',
      note:'在……中 làm trạng ngữ; câu bị động 被 + 打败.',pair:'被……'},
     {promptLang:'vi',prompt:'Chỉ cần thắng trận này, chúng ta là có thể vào chung kết.',answer:'只要赢了这场比赛，我们就能进入决赛。',answerPy:'Zhǐyào yíngle zhè chǎng bǐsài, wǒmen jiù néng jìnrù juésài.',
      note:'进入决赛; 只要……就…….',pair:'只要……就……'}
   ]},

  {n:34,zh:'接近',py:'jiējìn',pos:'Động từ',vn:'đến gần, tới gần; gần với',hv:'tiếp cận',em:'📏',lesson:1,
   explain:['Đến gần, tới gần (khoảng cách, thời gian, số lượng, trình độ, mục tiêu): 接近最佳状态, 接近一万人, 接近目标.','Còn chỉ chênh lệch không lớn: 水平很接近, 意见很接近. Phân biệt với 靠近: 靠近 chủ yếu dùng cho vị trí cụ thể, không dùng cho thời gian, số lượng, sự vật trừu tượng (xem 词语辨析).'],
   usage:'接近 + 目标 / 事实 / 水平 / 状态 / số lượng; A 和 B 很接近; 不容易接近 (khó gần — về tính cách).',
   collo:['接近最佳状态','接近事实','接近目标','水平接近'],
   ex_zh:'运动员决赛时一定要将自己调整到接近最佳状态。',ex_py:'Yùndòngyuán juésài shí yídìng yào jiāng zìjǐ tiáozhěng dào jiējìn zuì jiā zhuàngtài.',ex_vn:'Lúc chung kết, vận động viên nhất định phải điều chỉnh bản thân đến gần trạng thái tốt nhất.',
   exList:[
     {zh:'运动员决赛时一定要将自己调整到接近最佳状态。',py:'Yùndòngyuán juésài shí yídìng yào jiāng zìjǐ tiáozhěng dào jiējìn zuì jiā zhuàngtài.',vn:'Lúc chung kết, vận động viên nhất định phải điều chỉnh bản thân đến gần trạng thái tốt nhất.'},
     {zh:'他的这些话无意中接近了事实。',py:'Tā de zhèxiē huà wúyì zhōng jiējìnle shìshí.',vn:'Những lời này của anh ấy vô tình lại gần đúng với sự thật.'},
     {zh:'参加本届运动会的运动员人数接近一万人。',py:'Cānjiā běn jiè yùndònghuì de yùndòngyuán rénshù jiējìn yí wàn rén.',vn:'Số vận động viên tham gia đại hội thể thao lần này gần một vạn người.'}
   ],
   colloFull:[
     {zh:'接近最佳状态',py:'jiējìn zuì jiā zhuàngtài',vn:'gần trạng thái tốt nhất'},
     {zh:'接近事实',py:'jiējìn shìshí',vn:'gần với sự thật'},
     {zh:'接近目标',py:'jiējìn mùbiāo',vn:'đến gần mục tiêu'},
     {zh:'水平接近',py:'shuǐpíng jiējìn',vn:'trình độ ngang ngửa'},
     {zh:'接近一万人',py:'jiējìn yí wàn rén',vn:'gần một vạn người'}
   ],
   patterns:[
     {s:'接近 + 目标 / 水平 / số lượng', m:'Gần đạt tới … (dùng được cho trừu tượng, số lượng)'},
     {s:'A 和 B 很接近', m:'A và B chênh lệch không nhiều'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ cố gắng, chúng tôi đã ngày càng đến gần mục tiêu doanh số đặt ra đầu năm.',answer:'经过努力，我们已经越来越接近年初定下的销售目标了。',answerPy:'Jīngguò nǔlì, wǒmen yǐjīng yuè lái yuè jiējìn niánchū dìngxià de xiāoshòu mùbiāo le.',
      note:'接近 + mục tiêu (trừu tượng) — không dùng 靠近.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Anh ấy tính tình lạnh lùng, ngay cả đồng nghiệp cũng thấy anh ấy khó gần.',answer:'他性格很冷淡，连同事都觉得他不容易接近。',answerPy:'Tā xìnggé hěn lěngdàn, lián tóngshì dōu juéde tā bù róngyì jiējìn.',
      note:'不容易接近 = khó gần (tính cách).',pair:'连……都……'}
   ]},

  {n:35,zh:'佳',py:'jiā',pos:'Tính từ',vn:'tốt, đẹp, hay',hv:'giai',em:'👍',lesson:1,
   explain:['Tốt, đẹp, hay — từ văn viết, nghĩa như 好: 最佳 (tốt nhất), 佳作 (tác phẩm hay).','Thường dùng trong tổ hợp cố định: 最佳状态, 最佳时间, 最佳选择, 成绩不佳, 身体欠佳. Khẩu ngữ không nói ✗ 很佳 → 很好.'],
   usage:'最佳 + 状态 / 时间 / 选择 / 方案; 成绩 / 效果 / 状态 + 不佳.',
   collo:['最佳状态','最佳选择','效果不佳','最佳时间'],
   ex_zh:'运动员决赛时一定要将自己调整到接近最佳状态。',ex_py:'Yùndòngyuán juésài shí yídìng yào jiāng zìjǐ tiáozhěng dào jiējìn zuì jiā zhuàngtài.',ex_vn:'Lúc chung kết, vận động viên nhất định phải điều chỉnh bản thân đến gần trạng thái tốt nhất.',
   exList:[
     {zh:'运动员决赛时一定要将自己调整到接近最佳状态。',py:'Yùndòngyuán juésài shí yídìng yào jiāng zìjǐ tiáozhěng dào jiējìn zuì jiā zhuàngtài.',vn:'Lúc chung kết, vận động viên nhất định phải điều chỉnh bản thân đến gần trạng thái tốt nhất.'},
     {zh:'早上是背单词的最佳时间。',py:'Zǎoshang shì bèi dāncí de zuì jiā shíjiān.',vn:'Buổi sáng là thời gian tốt nhất để học thuộc từ mới.'},
     {zh:'这次比赛他状态不佳，只得了第五名。',py:'Zhè cì bǐsài tā zhuàngtài bù jiā, zhǐ déle dì-wǔ míng.',vn:'Trong cuộc thi lần này anh ấy phong độ không tốt, chỉ đạt hạng năm.'}
   ],
   colloFull:[
     {zh:'最佳状态',py:'zuì jiā zhuàngtài',vn:'trạng thái tốt nhất'},
     {zh:'最佳选择',py:'zuì jiā xuǎnzé',vn:'lựa chọn tốt nhất'},
     {zh:'效果不佳',py:'xiàoguǒ bù jiā',vn:'hiệu quả không tốt'},
     {zh:'最佳时间',py:'zuì jiā shíjiān',vn:'thời gian tốt nhất'},
     {zh:'成绩不佳',py:'chéngjì bù jiā',vn:'thành tích không tốt'}
   ],
   patterns:[
     {s:'最佳 + N', m:'… tốt nhất (văn viết)'},
     {s:'N + 不佳', m:'… không tốt'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy hôm nay phong độ không tốt, nhưng anh ấy vẫn giành hạng nhất.',answer:'虽然今天状态不佳，但是他还是得了第一名。',answerPy:'Suīrán jīntiān zhuàngtài bù jiā, dànshì tā háishi déle dì-yī míng.',
      note:'状态不佳 (văn viết) = 状态不好.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần điều chỉnh bản thân đến trạng thái tốt nhất, là có thể thi tốt.',answer:'只要把自己调整到最佳状态，就能考好。',answerPy:'Zhǐyào bǎ zìjǐ tiáozhěng dào zuì jiā zhuàngtài, jiù néng kǎohǎo.',
      note:'把 + 自己 + 调整到 + 最佳状态; 只要……就…….',pair:'只要……就……'}
   ]},

  {n:36,zh:'的确',py:'díquè',pos:'Phó từ',vn:'đích thực, quả thực',hv:'đích xác',em:'✔️',lesson:1,
   explain:['Phó từ: hoàn toàn đúng, quả thật, thật sự — khẳng định chắc chắn điều đã nói: 他的确是个好学生.','Có thể lặp thành 的的确确 để nhấn mạnh. Phân biệt: 的确 chỉ là phó từ; 确实 vừa là phó từ vừa là tính từ (消息确实吗? — không nói ✗ 消息的确吗?). 的 ở đây đọc dí.'],
   usage:'的确 + V / tính từ / 是……; 的的确确; 的确如此 (quả đúng như vậy).',
   collo:['的确如此','的确很巧妙','的的确确','的确是'],
   ex_zh:'因此，“鲇鱼效应”的确对挖掘员工潜力、提高企业活力具有积极的意义。',ex_py:'Yīncǐ, “niányú xiàoyìng” díquè duì wājué yuángōng qiánlì, tígāo qǐyè huólì jùyǒu jījí de yìyì.',ex_vn:'Vì vậy, “hiệu ứng cá nheo” quả thực có ý nghĩa tích cực đối với việc khai thác tiềm năng nhân viên, nâng cao sức sống doanh nghiệp.',
   exList:[
     {zh:'因此，“鲇鱼效应”的确对挖掘员工潜力、提高企业活力具有积极的意义。',py:'Yīncǐ, “niányú xiàoyìng” díquè duì wājué yuángōng qiánlì, tígāo qǐyè huólì jùyǒu jījí de yìyì.',vn:'Vì vậy, “hiệu ứng cá nheo” quả thực có ý nghĩa tích cực đối với việc khai thác tiềm năng nhân viên, nâng cao sức sống doanh nghiệp.'},
     {zh:'他的确是我所教过的学生中最聪明的。',py:'Tā díquè shì wǒ suǒ jiāoguo de xuésheng zhōng zuì cōngming de.',vn:'Cậu ấy quả thực là người thông minh nhất trong số những học sinh tôi từng dạy.'},
     {zh:'我听他说了他的想法，我觉得的确很巧妙。',py:'Wǒ tīng tā shuōle tā de xiǎngfǎ, wǒ juéde díquè hěn qiǎomiào.',vn:'Tôi đã nghe anh ấy nói ý tưởng của mình, tôi thấy quả thật rất khéo.'}
   ],
   colloFull:[
     {zh:'的确如此',py:'díquè rúcǐ',vn:'quả đúng như vậy'},
     {zh:'的确很巧妙',py:'díquè hěn qiǎomiào',vn:'quả thật rất khéo'},
     {zh:'的的确确',py:'dídíquèquè',vn:'quả thật, thật sự (nhấn mạnh)'},
     {zh:'的确是',py:'díquè shì',vn:'quả thật là'},
     {zh:'的确不错',py:'díquè búcuò',vn:'quả thật không tệ'}
   ],
   patterns:[
     {s:'Chủ ngữ + 的确 + V / tính từ', m:'Quả thực … (khẳng định)'},
     {s:'的的确确 + ……', m:'Nhấn mạnh hơn nữa'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Phương pháp này quả thực rất hay, ngay cả thầy giáo cũng khen.',answer:'这个方法的确很好，连老师都夸了。',answerPy:'Zhège fāngfǎ díquè hěn hǎo, lián lǎoshī dōu kuā le.',
      note:'的确 đứng sau chủ ngữ, trước vị ngữ; ôn 夸 (bài 19).',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tuy cậu ấy quả thực rất cố gắng, nhưng thành tích vẫn chưa tiến bộ.',answer:'虽然他的确很努力，但是成绩还没有进步。',answerPy:'Suīrán tā díquè hěn nǔlì, dànshì chéngjì hái méiyǒu jìnbù.',
      note:'的确 + 很努力; 虽然……但是…….',pair:'虽然……但是……'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ 课文 (tr. 104–106)
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 竞争让市场更高效',
  preQuiz:[
    {q:'西班牙人特别喜欢吃什么？',opts:['沙丁鱼','鲇鱼','牛肉'],ans:0},
    {q:'沙丁鱼的运输为什么成了问题？',opts:['路太远，运输时间太长','它们对离开大海后的环境极不适应','运输的费用太高'],ans:1},
    {q:'死掉的沙丁鱼卖得怎么样？',opts:['比活鱼贵很多','和活鱼的价格一样','口感很差，价格便宜很多'],ans:2},
    {q:'渔民们想了很多办法，是为了什么？',opts:['延长沙丁鱼的存活期，减少经济损失','多抓一些沙丁鱼','让沙丁鱼长得更大'],ans:0},
    {q:'那个巧妙而实用的方法是怎么被发现的？',opts:['一位经济学家研究出来的','一位渔民无意中发现的','一位企业经理想出来的'],ans:1},
    {q:'渔民把什么放进了装鱼的设备中？',opts:['更多的海水','小鱼爱吃的食物','几条鲇鱼'],ans:2},
    {q:'沙丁鱼为什么会不断地加速游动？',opts:['为了逃避天敌鲇鱼','为了寻找小鱼吃','因为设备里的水太冷'],ans:0},
    {q:'这个现象在经济学上被称为什么？',opts:['市场效应','鲇鱼效应','价格效应'],ans:1},
    {q:'“鲇鱼效应”这个概念的核心是什么？',opts:['让企业之间和平共处','减少市场上企业的数量','采取措施刺激企业活跃起来'],ans:2},
    {q:'从本质上说，“鲇鱼效应”是一种什么效应？',opts:['压力效应','运输效应','价格效应'],ans:0},
    {q:'研究发现，什么样的压力有利于我们保持良好的状态？',opts:['很大的压力','适度的压力','一点儿压力也没有'],ans:1},
    {q:'运动员比赛时如果不紧张、没压力感，会怎么样？',opts:['成绩会更好','比赛时会更快乐','不利于出成绩'],ans:2}
  ],
  lines:[
    {sp:0,zh:'西班牙人特别喜欢吃沙丁鱼。但沙丁鱼对离开大海后的环境极不适应，运输就成了问题。鱼上岸后，过不了多久就会死去。而死掉的沙丁鱼口感很差，作为商品销售，价格就会便宜很多。如果上岸时沙丁鱼还活着，鱼的卖价可以涨很多倍。',
     py:'Xībānyárén tèbié xǐhuan chī shādīngyú. Dàn shādīngyú duì líkāi dàhǎi hòu de huánjìng jí bú shìyìng, yùnshū jiù chéngle wèntí. Yú shàng àn hòu, guò bu liǎo duō jiǔ jiù huì sǐqù. Ér sǐdiào de shādīngyú kǒugǎn hěn chà, zuòwéi shāngpǐn xiāoshòu, jiàgé jiù huì piányi hěn duō. Rúguǒ shàng àn shí shādīngyú hái huózhe, yú de màijià kěyǐ zhǎng hěn duō bèi.',
     vn:'Người Tây Ban Nha đặc biệt thích ăn cá mòi. Nhưng cá mòi cực kỳ không thích nghi với môi trường sau khi rời khỏi biển, nên việc vận chuyển trở thành vấn đề. Cá lên bờ rồi thì chẳng bao lâu sẽ chết. Mà cá mòi đã chết thì ăn rất dở, đem bán làm hàng hóa thì giá sẽ rẻ đi nhiều. Nếu lúc lên bờ cá mòi vẫn còn sống, giá bán của cá có thể tăng lên gấp nhiều lần.'},
    {sp:0,zh:'为了延长沙丁鱼的存活期，减少经济损失，渔民们想了很多办法，但情况仍然没有得到太大的改善。后来一位渔民无意中发现了一种巧妙而实用的方法：把几条沙丁鱼的天敌鲇鱼放进装鱼的设备中。因为鲇鱼是食肉鱼，无法和沙丁鱼和平共处，它会四处游动寻找小鱼吃，对沙丁鱼构成威胁。为了逃避天敌，沙丁鱼自然会不断地加速游动，从而保持了旺盛的生命力，存活的比例大大提高。',
     py:'Wèile yáncháng shādīngyú de cúnhuóqī, jiǎnshǎo jīngjì sǔnshī, yúmínmen xiǎngle hěn duō bànfǎ, dàn qíngkuàng réngrán méiyǒu dédào tài dà de gǎishàn. Hòulái yí wèi yúmín wúyì zhōng fāxiànle yì zhǒng qiǎomiào ér shíyòng de fāngfǎ: bǎ jǐ tiáo shādīngyú de tiāndí niányú fàngjìn zhuāng yú de shèbèi zhōng. Yīnwèi niányú shì shíròu yú, wúfǎ hé shādīngyú hépíng gòngchǔ, tā huì sìchù yóudòng xúnzhǎo xiǎo yú chī, duì shādīngyú gòuchéng wēixié. Wèile táobì tiāndí, shādīngyú zìrán huì búduàn de jiāsù yóudòng, cóng\'ér bǎochíle wàngshèng de shēngmìnglì, cúnhuó de bǐlì dàdà tígāo.',
     vn:'Để kéo dài thời gian sống của cá mòi, giảm tổn thất kinh tế, ngư dân đã nghĩ ra rất nhiều cách, nhưng tình hình vẫn không được cải thiện là bao. Sau đó một người đánh cá tình cờ phát hiện ra một phương pháp khéo léo mà thiết thực: thả vài con cá nheo — kẻ thù tự nhiên của cá mòi — vào thiết bị chứa cá. Vì cá nheo là loài cá ăn thịt, không thể chung sống hòa bình với cá mòi, nó sẽ bơi khắp nơi tìm cá nhỏ để ăn, gây ra mối đe dọa cho cá mòi. Để trốn tránh kẻ thù, cá mòi tự khắc sẽ không ngừng tăng tốc bơi, nhờ đó giữ được sức sống dồi dào, tỷ lệ sống sót tăng lên rất nhiều.'},
    {sp:0,zh:'看到这里，你有什么感想和体会呢？其实，这在经济学上被称为“鲇鱼效应”。鲇鱼效应对于市场经济以及现代企业管理都有着重要的启发作用。这个概念的核心是：一个市场如果能采取一种措施，刺激企业活跃起来，就能使企业获得足够的活力，在市场中积极参与竞争而不至于落后，同时这样反过来又能促使市场更为高效。',
     py:'Kàndào zhèlǐ, nǐ yǒu shénme gǎnxiǎng hé tǐhuì ne? Qíshí, zhè zài jīngjìxué shang bèi chēngwéi “niányú xiàoyìng”. Niányú xiàoyìng duìyú shìchǎng jīngjì yǐjí xiàndài qǐyè guǎnlǐ dōu yǒuzhe zhòngyào de qǐfā zuòyòng. Zhège gàiniàn de héxīn shì: yí ge shìchǎng rúguǒ néng cǎiqǔ yì zhǒng cuòshī, cìjī qǐyè huóyuè qǐlai, jiù néng shǐ qǐyè huòdé zúgòu de huólì, zài shìchǎng zhōng jījí cānyù jìngzhēng ér bú zhìyú luòhòu, tóngshí zhèyàng fǎn guòlai yòu néng cùshǐ shìchǎng gèng wéi gāoxiào.',
     vn:'Đọc đến đây, bạn có cảm nghĩ và nhận thức gì? Thực ra, điều này trong kinh tế học được gọi là “hiệu ứng cá nheo”. Hiệu ứng cá nheo có tác dụng gợi mở quan trọng đối với kinh tế thị trường cũng như việc quản lý doanh nghiệp hiện đại. Cốt lõi của khái niệm này là: một thị trường nếu có thể áp dụng một biện pháp kích thích các doanh nghiệp trở nên năng động, thì có thể khiến doanh nghiệp có đủ sức sống, tích cực tham gia cạnh tranh trên thị trường mà không đến nỗi bị tụt lại; đồng thời, ngược lại, điều đó lại thúc đẩy thị trường hoạt động hiệu quả hơn.'},
    {sp:0,zh:'从本质上说，“鲇鱼效应”使得企业和员工产生一种危机感，其实就是一种压力效应。很多研究发现，适度的压力有利于我们保持良好的状态，更加有助于挖掘我们的潜力，从而提高个人的工作效率。比如运动员每到参加比赛，尤其是决赛时，一定要将自己调整到接近最佳状态，让自己感到适度的压力，如果他不紧张、没压力感，则不利于出成绩。因此，“鲇鱼效应”的确对挖掘员工潜力、提高企业活力具有积极的意义。',
     py:'Cóng běnzhì shang shuō, “niányú xiàoyìng” shǐde qǐyè hé yuángōng chǎnshēng yì zhǒng wēijīgǎn, qíshí jiù shì yì zhǒng yālì xiàoyìng. Hěn duō yánjiū fāxiàn, shìdù de yālì yǒulì yú wǒmen bǎochí liánghǎo de zhuàngtài, gèngjiā yǒuzhù yú wājué wǒmen de qiánlì, cóng\'ér tígāo gèrén de gōngzuò xiàolǜ. Bǐrú yùndòngyuán měi dào cānjiā bǐsài, yóuqí shì juésài shí, yídìng yào jiāng zìjǐ tiáozhěng dào jiējìn zuì jiā zhuàngtài, ràng zìjǐ gǎndào shìdù de yālì, rúguǒ tā bù jǐnzhāng, méi yālìgǎn, zé búlì yú chū chéngjì. Yīncǐ, “niányú xiàoyìng” díquè duì wājué yuángōng qiánlì, tígāo qǐyè huólì jùyǒu jījí de yìyì.',
     vn:'Xét về bản chất, “hiệu ứng cá nheo” khiến doanh nghiệp và nhân viên nảy sinh cảm giác nguy cơ, thực ra chính là một loại hiệu ứng áp lực. Nhiều nghiên cứu phát hiện, áp lực vừa phải có lợi cho việc chúng ta giữ được trạng thái tốt, càng giúp khai thác tiềm năng của chúng ta, từ đó nâng cao hiệu suất làm việc của mỗi người. Chẳng hạn, vận động viên mỗi khi tham gia thi đấu, nhất là lúc chung kết, nhất định phải điều chỉnh bản thân đến gần trạng thái tốt nhất, để bản thân cảm thấy áp lực vừa phải; nếu anh ta không căng thẳng, không có cảm giác áp lực, thì sẽ bất lợi cho việc đạt thành tích. Vì vậy, “hiệu ứng cá nheo” quả thực có ý nghĩa tích cực đối với việc khai thác tiềm năng của nhân viên, nâng cao sức sống của doanh nghiệp.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — 接近/靠近 lấy từ sách (tr. 108–109)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'接近 — 靠近',
   same:'Đều là động từ, đều có nghĩa "khoảng cách giữa hai bên gần, hoặc chuyển động về phía một mục tiêu làm khoảng cách nhỏ lại"; có lúc thay thế được cho nhau.',
   sameEx:{zh:'这个地方接近／靠近北极地区，夏季白天很长，天亮得也很早。',vn:'Nơi này gần vùng Bắc Cực, mùa hè ban ngày rất dài, trời cũng sáng rất sớm.'},
   items:[
     {word:'接近',points:[
       'Kết hợp được với người, sự vật, địa điểm cụ thể — và cả THỜI GIAN, SỐ LƯỢNG: 接近下午一点, 接近一万人.',
       'Kết hợp được với sự vật TRỪU TƯỢNG: 接近目标, 接近世界先进水平, 接近事实.',
       'Còn có nghĩa CHÊNH LỆCH KHÔNG LỚN: 水平很接近, 意见很接近.'
     ],ex:[{zh:'接近下午一点时，救护车终于赶到了。',vn:'Gần một giờ chiều, xe cứu thương cuối cùng cũng đến kịp.'},
          {zh:'他们俩的水平非常接近，这场比赛真不好说谁会赢。',vn:'Trình độ hai người họ rất sát nhau, trận đấu này thật khó nói ai sẽ thắng.'}]},
     {word:'靠近',points:[
       'Kết hợp được với người, sự vật, địa điểm CỤ THỂ; thường KHÔNG dùng cho thời gian, số lượng.',
       'Thường không kết hợp với sự vật trừu tượng (✗ 靠近目标).',
       'Không có nghĩa "chênh lệch không lớn".'
     ],ex:[{zh:'他们挤在靠近车窗的地方，脸对脸离得很近。',vn:'Họ chen nhau ở chỗ gần cửa sổ xe, mặt đối mặt sát rạt.'},
          {zh:'做这个动作时，大腿要尽量靠近胸部。',vn:'Khi làm động tác này, đùi phải cố gắng áp sát vào ngực.'}]}
   ],
   quiz:[
     {sentence:'做这个动作时，大腿要尽量＿＿胸部。',options:['接近','靠近'],answer:1,
      why:'Vị trí cụ thể của bộ phận cơ thể, di chuyển lại sát nhau → 靠近 (câu mẫu của sách, 接近 ✗).'},
     {sentence:'直到天快亮的时候，他的体温才＿＿正常。',options:['接近','靠近'],answer:0,
      why:'Nhiệt độ cơ thể là SỐ LƯỢNG / trạng thái → chỉ 接近.'},
     {sentence:'这项技术已＿＿世界先进水平。',options:['接近','靠近'],answer:0,
      why:'Trình độ (水平) là khái niệm trừu tượng → chỉ 接近.'},
     {sentence:'对于这个问题，几国的意见很＿＿。',options:['接近','靠近'],answer:0,
      why:'Chênh lệch không lớn (ý kiến gần nhau) → 接近; 靠近 không có nghĩa này.'}
   ],
   sgk:{
     chung:{t:'都是动词，都有“彼此间距离近或向一定目标运动，使彼此间距离变小”的意思，有时可以替换。',vn:'Đều là động từ, đều có nghĩa "khoảng cách giữa hai bên gần, hoặc chuyển động về phía một mục tiêu làm khoảng cách nhỏ lại", có lúc thay thế được cho nhau.',vd:'这个地方接近／靠近北极地区，夏季白天很长，天亮得也很早。',vdVn:'Nơi này gần vùng Bắc Cực, mùa hè ban ngày rất dài, trời cũng sáng rất sớm.'},
     khac:[
       {a:{t:'搭配的词语可以表示具体的人、事物、时间、地点和数量等。',vn:'Từ kết hợp có thể chỉ người, sự vật, thời gian, địa điểm và số lượng cụ thể.',vd:'接近下午一点时，救护车终于赶到了。',vdVn:'Gần một giờ chiều, xe cứu thương cuối cùng cũng đến kịp.'},
        b:{t:'搭配的词语可以表示具体的人、事物、地点，但一般不能用于时间、数量方面。',vn:'Từ kết hợp có thể chỉ người, sự vật, địa điểm cụ thể, nhưng thường không dùng cho thời gian, số lượng.',vd:'他们挤在靠近车窗的地方，脸对脸离得很近。',vdVn:'Họ chen nhau ở chỗ gần cửa sổ xe, mặt đối mặt sát rạt.'}},
       {a:{t:'还可以搭配表示抽象事物的词语。',vn:'Còn có thể kết hợp với từ chỉ sự vật trừu tượng.',vd:'经过努力，现在我们已越来越接近年初定下的销售目标了。',vdVn:'Nhờ cố gắng, giờ đây chúng tôi đã ngày càng đến gần mục tiêu doanh số đặt ra đầu năm.'},
        b:{t:'一般不能搭配表示抽象事物的词语。',vn:'Thường không kết hợp được với từ chỉ sự vật trừu tượng.'}},
       {a:{t:'还可以表示差距不大。',vn:'Còn có thể chỉ sự chênh lệch không lớn.',vd:'他们俩的水平非常接近，这场比赛真不好说谁会赢。',vdVn:'Trình độ hai người họ rất sát nhau, trận đấu này thật khó nói ai sẽ thắng.'},
        b:{t:'没有这个意思。',vn:'Không có nghĩa này.'}}
     ],
     lamThu:[
       {s:'做这个动作时，大腿要尽量＿＿胸部。',dap:[false,true],mau:true,
        giai:'Vị trí cụ thể (đùi — ngực) → 靠近 (câu mẫu của sách).'},
       {s:'直到天快亮的时候，他的体温才＿＿正常。',dap:[true,false],
        giai:'Nhiệt độ là số lượng / trạng thái → chỉ 接近.'},
       {s:'这项技术已＿＿世界先进水平。',dap:[true,false],
        giai:'Trình độ là sự vật trừu tượng → chỉ 接近.'},
       {s:'对于这个问题，几国的意见很＿＿。',dap:[true,false],
        giai:'Chỉ chênh lệch không lớn → chỉ 接近.'}
     ]
   }},

  {pair:'的确 — 确实',
   same:'Đều làm phó từ được, nghĩa là "quả thật, đúng là" — khẳng định chắc chắn điều mình nói.',
   sameEx:{zh:'这个办法的确／确实不错。',vn:'Cách này quả thật không tệ.'},
   items:[
     {word:'的确',points:[
       'Chỉ là PHÓ TỪ, đứng sau chủ ngữ, trước động từ / tính từ: 他的确是……, 的确很巧妙.',
       'Lặp lại được thành 的的确确 để nhấn mạnh.',
       'Không làm vị ngữ, không làm định ngữ: ✗ 消息的确吗？✗ 的确的消息.'
     ],ex:[{zh:'因此，“鲇鱼效应”的确对挖掘员工潜力、提高企业活力具有积极的意义。',vn:'Vì vậy, “hiệu ứng cá nheo” quả thực có ý nghĩa tích cực đối với việc khai thác tiềm năng nhân viên, nâng cao sức sống doanh nghiệp.'},
          {zh:'咱们总裁选择李阳负责的的确确有些冒险，因为他太年轻了。',vn:'Tổng giám đốc chọn Lý Dương phụ trách quả thật có phần mạo hiểm, vì cậu ấy còn quá trẻ.'}]},
     {word:'确实',points:[
       'Vừa là phó từ (确实不错), vừa là TÍNH TỪ: làm vị ngữ — 消息确实吗？ / 这个消息很确实.',
       'Làm được định ngữ: 确实的消息, 确实的数字 (con số chính xác).',
       'Lặp lại thành 确确实实.'
     ],ex:[{zh:'你听谁说刘方要结婚了？消息确实吗？',vn:'Cậu nghe ai nói Lưu Phương sắp cưới thế? Tin có chính xác không?'},
          {zh:'我们需要确实的数字，不能靠猜。',vn:'Chúng ta cần số liệu chính xác, không thể dựa vào đoán.'}]}
   ],
   quiz:[
     {sentence:'你听谁说刘方要结婚了？消息＿＿吗？',options:['的确','确实'],answer:1,
      why:'Làm vị ngữ (tính từ) → chỉ 确实 (bài tập 2 của sách). 的确 chỉ là phó từ.'},
     {sentence:'他＿＿是我所教过的学生中最聪明的。',options:['的确','确实'],answer:0,both:true,
      why:'Phó từ đứng trước 是 → cả hai đều được; câu của sách dùng 的确.'},
     {sentence:'我们需要＿＿的数字，不能靠猜。',options:['的确','确实'],answer:1,
      why:'Làm định ngữ (……的数字) → chỉ 确实.'},
     {sentence:'这个消息很＿＿，是经理亲口告诉我的。',options:['的确','确实'],answer:1,
      why:'Sau 很, làm vị ngữ → tính từ 确实. Không nói ✗ 很的确.'}
   ]},

  {pair:'体会 — 感想',
   same:'Đều là danh từ chỉ những gì nảy sinh trong lòng sau khi trải qua một sự việc; hay đi cùng nhau: 感想和体会.',
   sameEx:{zh:'看到这里，你有什么感想和体会呢？',vn:'Đọc đến đây, bạn có cảm nghĩ và nhận thức gì?'},
   items:[
     {word:'体会',points:[
       'Nhấn mạnh sự HIỂU BIẾT, nhận thức thấm thía có được qua trải nghiệm thực tế.',
       'Còn là ĐỘNG TỪ: 体会到……, 让孩子体会到…….',
       'Hay đi với 深刻: 体会很深刻 / 深刻的体会.'
     ],ex:[{zh:'让孩子体会到自己的意见受到尊重，这一点很重要。',vn:'Để trẻ cảm nhận được ý kiến của mình được tôn trọng — điều này rất quan trọng.'},
          {zh:'我最大的体会就是中国太大了。',vn:'Điều tôi thấm thía nhất là Trung Quốc quá rộng lớn.'}]},
     {word:'感想',points:[
       'Nhấn mạnh SUY NGHĨ, cảm nghĩ nảy ra sau khi tiếp xúc sự việc; nói / viết ra được.',
       'Chỉ là DANH TỪ, không mang tân ngữ: ✗ 感想到…….',
       'Hay đi với 谈, 写, 发表: 谈谈感想, 写一篇感想.'
     ],ex:[{zh:'来中国一年多了，你有什么感想？',vn:'Đến Trung Quốc hơn một năm rồi, bạn có cảm nghĩ gì?'},
          {zh:'看完这部电影，老师让我们每人写一篇感想。',vn:'Xem xong bộ phim này, thầy bảo mỗi người chúng tôi viết một bài cảm nghĩ.'}]}
   ],
   quiz:[
     {sentence:'让孩子＿＿到自己的意见受到尊重，这一点很重要。',options:['体会','感想'],answer:0,
      why:'Có 到 + tân ngữ → cần ĐỘNG TỪ → chỉ 体会 (bài tập 2 của sách).'},
     {sentence:'看完这部电影，老师让我们每人写一篇＿＿。',options:['体会','感想'],answer:1,
      why:'Viết một bài cảm nghĩ sau khi xem phim → 写感想.'},
     {sentence:'当了一年志愿者，我对“帮助别人就是帮助自己”这句话有了很深的＿＿。',options:['体会','感想'],answer:0,
      why:'Hiểu biết thấm thía qua trải nghiệm, đi với 很深 → 体会.'},
     {sentence:'参观结束后，请大家谈谈自己的＿＿。',options:['体会','感想'],answer:1,both:true,
      why:'谈谈 đi được với cả hai; nói cảm nghĩ ngay sau buổi tham quan thường dùng 感想.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'改善',hv:'cải thiện',vn:'cải thiện',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'设备',hv:'thiết bị',vn:'thiết bị',note:'Trùng khít.'},
    {zh:'和平',hv:'hòa bình',vn:'hòa bình',note:'Trùng khít. 和平共处 = chung sống hòa bình.'},
    {zh:'比例',hv:'tỷ lệ',vn:'tỷ lệ',note:'Trùng khít.'},
    {zh:'感想',hv:'cảm tưởng',vn:'cảm tưởng, cảm nghĩ',note:'Trùng khít: 谈谈感想 = phát biểu cảm tưởng.'},
    {zh:'概念',hv:'khái niệm',vn:'khái niệm',note:'Trùng khít.'},
    {zh:'本质',hv:'bản chất',vn:'bản chất',note:'Trùng khít: 从本质上说 = xét về bản chất.'},
    {zh:'潜力',hv:'tiềm lực',vn:'tiềm lực, tiềm năng',note:'Tiếng Việt hay nói "tiềm năng" hơn, nghĩa như nhau.'},
    {zh:'天敌',hv:'thiên địch',vn:'kẻ thù tự nhiên',note:'Trùng khít — tiếng Việt cũng nói "thiên địch" (nhất là trong nông nghiệp).'},
    {zh:'构成',hv:'cấu thành',vn:'cấu thành, tạo thành',note:'Trùng khít; thêm cụm 构成威胁 = gây ra mối đe dọa.'},
    {zh:'落后',hv:'lạc hậu',vn:'lạc hậu; tụt lại',note:'Trùng nghĩa "lạc hậu", thêm nghĩa động từ "tụt lại": 落后两个球 = bị dẫn hai bàn.'},
    {zh:'有利',hv:'hữu lợi',vn:'có lợi',note:'"Hữu lợi" có trong tiếng Việt; hằng ngày nói "có lợi".'},
    {zh:'活力',hv:'hoạt lực',vn:'sức sống',note:'Tiếng Việt hay nói "sinh lực, sức sống" hơn "hoạt lực".'},
    {zh:'商品',hv:'thương phẩm',vn:'hàng hóa',note:'"Thương phẩm" có trong văn bản kinh tế; hằng ngày nói "hàng hóa".'}
  ],
  idiom:[
    {zh:'和平共处',hv:'hòa bình cộng xử',vn:'chung sống hòa bình',note:'Trong bài: 鲇鱼……无法和沙丁鱼和平共处.'},
    {zh:'适者生存',hv:'thích giả sinh tồn',vn:'kẻ thích nghi mới tồn tại',note:'Tư tưởng của thuyết chọn lọc tự nhiên (bài nghe 11–12): 适应者才能够生存下来.'},
    {zh:'优胜劣汰',hv:'ưu thắng liệt thải',vn:'mạnh được yếu thua, tốt thì còn kém thì bị loại',note:'Nói về quy luật cạnh tranh của thị trường — đúng chủ đề bài.'}
  ],
  trap:[
    {zh:'无意',hv:'vô ý',vn:'tình cờ, không cố ý; không định',
     warn:'BẪY LỚN: "vô ý" tiếng Việt = không cẩn thận, sơ ý (tiếng Trung: 不小心). 无意中发现 là TÌNH CỜ phát hiện; 我无意打扰您 = tôi KHÔNG CÓ Ý làm phiền ngài.'},
    {zh:'实用',hv:'thực dụng',vn:'thiết thực, tiện dụng',
     warn:'"Thực dụng" tiếng Việt thường để chê người (sống thực dụng). 实用 là lời KHEN đồ vật / phương pháp: 这个包很实用 = cái túi này rất tiện dùng.'},
    {zh:'危机',hv:'nguy cơ',vn:'khủng hoảng',
     warn:'"Nguy cơ" tiếng Việt = khả năng xảy ra điều xấu (tiếng Trung: 风险 / 危险). 危机 thường là KHỦNG HOẢNG: 经济危机 = khủng hoảng kinh tế. Riêng 危机感 = cảm giác nguy cơ.'},
    {zh:'刺激',hv:'thứ kích',vn:'kích thích; gây cảm giác mạnh',
     warn:'Tiếng Việt nói "kích thích" (đảo thứ tự chữ). Chú ý thêm nghĩa khẩu ngữ: 过山车太刺激了 = tàu lượn quá cảm giác mạnh.'},
    {zh:'接近',hv:'tiếp cận',vn:'đến gần, gần với',
     warn:'"Tiếp cận" tiếng Việt hay là tiếp xúc, tìm cách đến (tiếp cận khách hàng). 接近 chủ yếu là GẦN VỚI: 接近一万人 = gần một vạn người, 水平很接近 = trình độ sát nhau.'},
    {zh:'体会',hv:'thể hội',vn:'thấm thía, nhận thức',
     warn:'"Thể hội" không dùng trong tiếng Việt. 体会 = điều thấm thía qua trải nghiệm; 体会到 = cảm nhận được.'},
    {zh:'巧妙',hv:'xảo diệu',vn:'khéo léo, tài tình',
     warn:'Chữ "xảo" tiếng Việt hay mang nghĩa xấu (xảo trá, xảo quyệt). 巧妙 là lời KHEN: 巧妙的方法 = phương pháp tài tình.'},
    {zh:'核心',hv:'hạch tâm',vn:'cốt lõi, nòng cốt',
     warn:'Tiếng Việt không nói "hạch tâm" mà nói "cốt lõi" / "hạt nhân": 核心技术 = công nghệ cốt lõi.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 (tr. 107–108) + bài tập 3 của sách (tr. 110)
// ══════════════════════════════════════════
var matchData = [
  {left:'改善',right:'关系'},
  {left:'刺激',right:'购买力'},
  {left:'有利的',right:'条件'},
  {left:'巧妙的',right:'回答'},
  {left:'不断',right:'积累'},
  {left:'无意中',right:'听到'},
  {left:'概念',right:'抽象'},
  {left:'设备',right:'笨重'},
  {left:'体会',right:'深刻'},
  {left:'效率',right:'惊人'},
  {left:'说话',right:'巧妙'},
  {left:'经济',right:'落后'},
  {left:'方法',right:'实用'},
  {left:'世界',right:'和平'},
  {left:'延长',right:'寿命'},
  {left:'逃避',right:'责任'},
  {left:'挖掘',right:'潜力'},
  {left:'构成',right:'威胁'},
  {left:'面临',right:'危机'},
  {left:'充满',right:'活力'},
  {left:'进入',right:'决赛'},
  {left:'最佳',right:'状态'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'西班牙人特别喜欢吃',blank:'沙丁鱼',post:'。',hint:'(cá mòi)',ans:'沙丁鱼'},
  {pre:'这些水果要用冷藏车',blank:'运输',post:'，不然很快就会坏。',hint:'(vận chuyển)',ans:'运输'},
  {pre:'船慢慢地靠',blank:'岸',post:'了，乘客们纷纷走了下来。',hint:'(bờ)',ans:'岸'},
  {pre:'这家超市的',blank:'商品',post:'种类很多，价格也不贵。',hint:'(hàng hóa)',ans:'商品'},
  {pre:'由于报名的考生太多，学校决定适当',blank:'延长',post:'报名时间。',hint:'(kéo dài)',ans:'延长'},
  {pre:'这种植物在沙漠里也能',blank:'存活',post:'下来。',hint:'(sống sót)',ans:'存活'},
  {pre:'这几年，农村的生活条件得到了很大的',blank:'改善',post:'。',hint:'(cải thiện)',ans:'改善'},
  {pre:'她在收拾花园时，',blank:'无意',post:'地找到了这只耳环。',hint:'(tình cờ)',ans:'无意'},
  {pre:'他',blank:'巧妙',post:'地回答了记者的问题，大家都很佩服。',hint:'(khéo léo)',ans:'巧妙'},
  {pre:'公司在产品包装、宣传推广和销售等方面积累了相当丰富、',blank:'实用',post:'的经验。',hint:'(thiết thực)',ans:'实用'},
  {pre:'猫是老鼠的',blank:'天敌',post:'，老鼠一看见猫就跑。',hint:'(kẻ thù tự nhiên)',ans:'天敌'},
  {pre:'这在经济学上被称为“',blank:'鲇鱼',post:'效应”。',hint:'(cá nheo)',ans:'鲇鱼'},
  {pre:'这家医院的',blank:'设备',post:'齐全，医生的水平也很高。',hint:'(thiết bị)',ans:'设备'},
  {pre:'全世界的人民都希望世界',blank:'和平',post:'。',hint:'(hòa bình)',ans:'和平'},
  {pre:'我不觉得他可以对我',blank:'构成',post:'威胁。',hint:'(gây ra, tạo thành)',ans:'构成'},
  {pre:'遇到困难不应该',blank:'逃避',post:'，应该积极地面对。',hint:'(trốn tránh)',ans:'逃避'},
  {pre:'随着经济',blank:'不断',post:'发展，人们的生活越来越好。',hint:'(không ngừng)',ans:'不断'},
  {pre:'年轻人精力',blank:'旺盛',post:'，熬一次夜好像没什么影响。',hint:'(dồi dào)',ans:'旺盛'},
  {pre:'我们是理工科学校，男老师占的',blank:'比例',post:'太大了。',hint:'(tỷ lệ)',ans:'比例'},
  {pre:'来中国一年多了，你有什么',blank:'感想',post:'？',hint:'(cảm nghĩ)',ans:'感想'},
  {pre:'我最大的',blank:'体会',post:'就是中国太大了，要学的东西太多了。',hint:'(điều thấm thía)',ans:'体会'},
  {pre:'这个',blank:'概念',post:'太抽象了，你能举个例子吗？',hint:'(khái niệm)',ans:'概念'},
  {pre:'掌握',blank:'核心',post:'技术，企业才能在竞争中不落后。',hint:'(cốt lõi)',ans:'核心'},
  {pre:'必须采取措施',blank:'刺激',post:'企业活跃起来。',hint:'(kích thích)',ans:'刺激'},
  {pre:'每天早上跑步，让我一整天都充满',blank:'活力',post:'。',hint:'(sức sống)',ans:'活力'},
  {pre:'中国各地区经济发展水平不平衡，中西部',blank:'落后',post:'于东南沿海地区。',hint:'(tụt lại, lạc hậu)',ans:'落后'},
  {pre:'看问题不能只看表面，要看清它的',blank:'本质',post:'。',hint:'(bản chất)',ans:'本质'},
  {pre:'公司每年都会培训新',blank:'员工',post:'。',hint:'(nhân viên)',ans:'员工'},
  {pre:'那场经济',blank:'危机',post:'让很多公司破产了。',hint:'(khủng hoảng)',ans:'危机'},
  {pre:'很多研究发现，适度的压力',blank:'有利',post:'于我们保持良好的状态。',hint:'(có lợi)',ans:'有利'},
  {pre:'好老师善于',blank:'挖掘',post:'每个学生的优点。',hint:'(khai thác, tìm ra)',ans:'挖掘'},
  {pre:'这个年轻人很有',blank:'潜力',post:'，将来一定能成为优秀的运动员。',hint:'(tiềm năng)',ans:'潜力'},
  {pre:'我们班的篮球队终于进入了',blank:'决赛',post:'。',hint:'(chung kết)',ans:'决赛'},
  {pre:'参加本届运动会的运动员人数',blank:'接近',post:'一万人。',hint:'(gần tới)',ans:'接近'},
  {pre:'早上是背单词的最',blank:'佳',post:'时间。',hint:'(tốt)',ans:'佳'},
  {pre:'他',blank:'的确',post:'是我所教过的学生中最聪明的。',hint:'(quả thực)',ans:'的确'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (无意 · 有利 · 的确) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['后来','一位渔民','无意中','发现了','一种','巧妙的','方法','。'],ans:'后来一位渔民无意中发现了一种巧妙的方法。',audio:'后来一位渔民无意中发现了一种巧妙的方法。'},
  {words:['他的','这些话','无意中','接近了','事实','。'],ans:'他的这些话无意中接近了事实。',audio:'他的这些话无意中接近了事实。'},
  {words:['我','无意','打扰您','，','只想','问一个问题','。'],ans:'我无意打扰您，只想问一个问题。',audio:'我无意打扰您，只想问一个问题。'},
  {words:['适度的','压力','有利于','我们','保持','良好的','状态','。'],ans:'适度的压力有利于我们保持良好的状态。',audio:'适度的压力有利于我们保持良好的状态。'},
  {words:['高高的个子','是','他的','有利','条件','。'],ans:'高高的个子是他的有利条件。',audio:'高高的个子是他的有利条件。'},
  {words:['经常','熬夜','不利于','身体','健康','。'],ans:'经常熬夜不利于身体健康。',audio:'经常熬夜不利于身体健康。'},
  {words:['他','的确','是','我教过的','学生中','最聪明的','。'],ans:'他的确是我教过的学生中最聪明的。',audio:'他的确是我教过的学生中最聪明的。'},
  {words:['我','觉得','这个方法','的确','很','巧妙','。'],ans:'我觉得这个方法的确很巧妙。',audio:'我觉得这个方法的确很巧妙。'},
  {words:['“鲇鱼效应”','的确','对','挖掘员工潜力','具有','积极的','意义','。'],ans:'“鲇鱼效应”的确对挖掘员工潜力具有积极的意义。',audio:'“鲇鱼效应”的确对挖掘员工潜力具有积极的意义。'},
  {words:['必须','采取措施','刺激','企业','活跃起来','。'],ans:'必须采取措施刺激企业活跃起来。',audio:'必须采取措施刺激企业活跃起来。'},
  {words:['这种','商品','占的','比例','太高了','。'],ans:'这种商品占的比例太高了。',audio:'这种商品占的比例太高了。'},
  {words:['为了','逃避','天敌','，','沙丁鱼','不断地','加速游动','。'],ans:'为了逃避天敌，沙丁鱼不断地加速游动。',audio:'为了逃避天敌，沙丁鱼不断地加速游动。'},
  {words:['学校','决定','适当','延长','报名时间','。'],ans:'学校决定适当延长报名时间。',audio:'学校决定适当延长报名时间。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'你听谁说刘方要结婚了？消息____吗？',opts:['的确','确实','真正','到底'],ans:1,
   exp:'Làm vị ngữ trong câu hỏi → cần TÍNH TỪ 确实 (bài tập 2 của sách). 的确 chỉ là phó từ, không đứng cuối làm vị ngữ.'},
  {wrong:'主任临时有点儿事，下午的会____到明天了。',opts:['延长','推迟','落后','逃避'],ans:1,
   exp:'Lùi thời điểm họp sang ngày mai → 推迟 (bài tập 2 của sách). 延长 là kéo dài khoảng thời gian.'},
  {wrong:'让孩子____到自己的意见受到尊重，这一点很重要。',opts:['感想','体会','概念','本质'],ans:1,
   exp:'Sau có 到 + tân ngữ → cần động từ 体会 (bài tập 2 của sách). 感想 chỉ là danh từ.'},
  {wrong:'他____就看不见这些美丽的花呀。',opts:['本质','根本','核心','潜力'],ans:1,
   exp:'Phó từ nhấn mạnh phủ định "hoàn toàn (không)" → 根本 (bài tập 2 của sách). 本质 là danh từ.'},
  {wrong:'做这个动作时，大腿要尽量____胸部。',opts:['接近','靠近','改善','构成'],ans:1,
   exp:'Vị trí cụ thể của bộ phận cơ thể → 靠近 (câu mẫu phần 词语辨析).'},
  {wrong:'直到天快亮的时候，他的体温才____正常。',opts:['靠近','接近','延长','刺激'],ans:1,
   exp:'Nhiệt độ là số lượng / trạng thái → 接近; 靠近 không dùng cho số lượng.'},
  {wrong:'考试周图书馆____了开放时间，一直开到晚上十一点。',opts:['延长','推迟','落后','存活'],ans:0,
   exp:'Mở cửa thêm đến 11 giờ đêm = KÉO DÀI thời gian → 延长. 推迟 là lùi giờ bắt đầu.'},
  {wrong:'遇到困难不应该____，应该积极地面对。',opts:['逃避','落后','刺激','构成'],ans:0,
   exp:'Đối lập với 面对 (đối mặt) → 逃避 (trốn tránh) — bài tập 1 của sách.'},
  {wrong:'中国各地区经济发展水平不平衡，中西部____于东南沿海地区。',opts:['接近','落后','有利','靠近'],ans:1,
   exp:'不平衡 (không đồng đều) → miền Trung, Tây TỤT SAU → 落后于 (bài tập 1 của sách).'},
  {wrong:'很多研究发现，适度的压力____于我们保持良好的状态。',opts:['有利','有用','实用','活力'],ans:0,
   exp:'Mẫu cố định A 有利于 B (注释 2 của sách).'},
  {wrong:'后来一位渔民____中发现了一种巧妙而实用的方法。',opts:['无意','故意','的确','不断'],ans:0,
   exp:'无意中 + 发现 = tình cờ phát hiện (注释 1). 故意 là cố ý, không đi với 中.'},
  {wrong:'因为鲇鱼是食肉鱼，无法和沙丁鱼____共处。',opts:['和平','实用','旺盛','巧妙'],ans:0,
   exp:'和平共处 = chung sống hòa bình (cụm cố định).'},
  {wrong:'它会四处游动寻找小鱼吃，对沙丁鱼____威胁。',opts:['构成','刺激','改善','挖掘'],ans:0,
   exp:'对……构成威胁 = gây ra mối đe dọa đối với ….'},
  {wrong:'一个市场如果能采取一种措施，____企业活跃起来，就能使企业获得足够的活力。',opts:['刺激','改善','延长','存活'],ans:0,
   exp:'刺激 + đối tượng + 活跃起来: kích thích cái gì trở nên năng động.'},
  {wrong:'适度的压力更加有助于____我们的潜力。',opts:['挖掘','改善','逃避','构成'],ans:0,
   exp:'挖掘潜力 = khai thác tiềm năng (cụm cố định).'},
  {wrong:'看问题不能只看表面，要看清它的____。',opts:['本质','比例','活力','设备'],ans:0,
   exp:'本质 (bản chất) đối lập với 表面 (bề ngoài).'},
  {wrong:'那场经济____让很多公司破产了。',opts:['危机','危险','感想','比例'],ans:0,
   exp:'经济危机 = khủng hoảng kinh tế. 危险 là nguy hiểm, không nói 经济危险.'},
  {wrong:'这个年轻人很有____，将来一定能成为优秀的运动员。',opts:['潜力','设备','比例','天敌'],ans:0,
   exp:'很有潜力 = rất có tiềm năng — nói về khả năng phát triển sau này.'},
  {wrong:'直到比赛结束前一分钟，我们队还____两个球。',opts:['落后','靠近','逃避','延长'],ans:0,
   exp:'落后 + số lượng = bị dẫn (thua) bao nhiêu.'},
  {wrong:'这座桥的设计非常____，既美观又实用。',opts:['巧妙','旺盛','和平','有利'],ans:0,
   exp:'巧妙 đi với 设计 (bảng 搭配 của sách): thiết kế tài tình.'},
  {wrong:'我听他说了他的想法，我觉得____很巧妙。',opts:['的确','确定','本质','无意'],ans:0,
   exp:'Phó từ khẳng định trước 很巧妙 → 的确 (bài nghe số 5).'},
  {wrong:'看到这里，你有什么____和体会呢？',opts:['感想','概念','比例','核心'],ans:0,
   exp:'感想和体会 (cảm nghĩ và nhận thức) — câu của bài khoá.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tớ không có ý làm phiền cậu ôn bài, nhưng bài vật lý này quả thật làm khó tớ rồi.',zh:'我无意打扰你复习，可是这道物理题的确把我难住了。',py:'Wǒ wúyì dǎrǎo nǐ fùxí, kěshì zhè dào wùlǐ tí díquè bǎ wǒ nánzhù le.',goiY:['无意 + V','可是','的确'],giai:'无意 + V là động từ "không có ý định làm gì" — không phải "vô ý" (sơ ý là 不小心); 的确 đứng trước cụm động từ để khẳng định "quả thật".'},
  {vi:'Chỉ cần cậu và bạn cùng bàn chủ động nói chuyện với nhau, quan hệ giữa hai người sẽ không ngừng được cải thiện.',zh:'只要你和同桌主动沟通，你们的关系就会不断改善。',py:'Zhǐyào nǐ hé tóngzhuō zhǔdòng gōutōng, nǐmen de guānxi jiù huì búduàn gǎishàn.',goiY:['只要……就……','主动沟通','不断改善'],giai:'只要 (điều kiện đủ) …… 就 (kết quả); 就 đứng sau chủ ngữ vế sau (你们的关系就会……). "Cải thiện quan hệ" dùng 改善, không dùng 提高.'},
  {vi:'Trước kỳ thi hơi hồi hộp một chút lại có lợi cho việc giữ phong độ tốt nhất, nên cậu không cần lo lắng quá.',zh:'考试前有一点儿紧张反而有利于保持最佳状态，所以你不必太担心。',py:'Kǎoshì qián yǒu yìdiǎnr jǐnzhāng fǎn\'ér yǒulì yú bǎochí zuìjiā zhuàngtài, suǒyǐ nǐ bú bì tài dānxīn.',goiY:['反而','有利于','最佳状态','所以'],giai:'A 有利于 B = A có lợi cho B (phủ định là 不利于, không nói 不有利); 反而 báo hiệu điều trái với suy nghĩ thông thường.'},
  {vi:'Cho dù trận chung kết bóng rổ lần này có thua, chúng ta cũng không được trốn tránh thất bại mà phải nghiêm túc rút ra bài học.',zh:'即使这次篮球决赛输了，我们也不能逃避失败，而要认真吸取教训。',py:'Jíshǐ zhè cì lánqiú juésài shū le, wǒmen yě bù néng táobì shībài, ér yào rènzhēn xīqǔ jiàoxun.',goiY:['即使……也……','决赛','逃避','吸取教训'],giai:'即使 nêu giả thiết (chưa chắc đã xảy ra), 也 đứng sau chủ ngữ vế sau; "trốn tránh" là 逃避, không dùng 逃跑 (bỏ chạy thật sự).'},
  {vi:'Sở dĩ cậu ấy tiến bộ nhanh như vậy là vì bạn mới chuyển đến học rất giỏi, thúc đẩy cậu ấy không ngừng khai thác tiềm năng của bản thân.',zh:'他之所以进步得这么快，是因为新来的同学成绩很好，刺激他不断挖掘自己的潜力。',py:'Tā zhīsuǒyǐ jìnbù de zhème kuài, shì yīnwèi xīn lái de tóngxué chéngjì hěn hǎo, cìjī tā búduàn wājué zìjǐ de qiánlì.',goiY:['之所以……是因为……','刺激','挖掘','潜力'],giai:'之所以 (kết quả) …… 是因为 (nguyên nhân): kết quả nói trước, ngược thứ tự 因为……所以……; "khai thác tiềm năng" là cụm cố định 挖掘 + 潜力; 刺激 + người + V = thúc đẩy ai làm gì.'},
  {vi:'Phần mềm học tập này không những được thiết kế rất khéo mà còn cực kỳ tiện dụng, thảo nào ngày càng nhiều người tải về.',zh:'这个学习软件不但设计得很巧妙，而且非常实用，难怪下载的人越来越多。',py:'Zhège xuéxí ruǎnjiàn búdàn shèjì de hěn qiǎomiào, érqiě fēicháng shíyòng, nánguài xiàzài de rén yuè lái yuè duō.',goiY:['不但……而且……','巧妙','实用','难怪'],giai:'不但……而且…… nối hai ưu điểm tăng tiến; 难怪 (thảo nào) đứng đầu vế kết quả sau khi đã nêu nguyên nhân.'},
  {vi:'Ngủ sớm dậy sớm có lợi cho việc duy trì sức lực dồi dào, nhưng một khi đã quen thức khuya thì rất khó sửa lại.',zh:'早睡早起有利于保持旺盛的精力，可是一旦养成了熬夜的习惯，就很难改过来了。',py:'Zǎo shuì zǎo qǐ yǒulì yú bǎochí wàngshèng de jīnglì, kěshì yídàn yǎngchéngle áoyè de xíguàn, jiù hěn nán gǎi guòlai le.',goiY:['有利于','旺盛','一旦……就……','熬夜'],giai:'一旦……就…… = "một khi… thì…" (điều kiện dẫn tới hậu quả khó thay đổi); 旺盛 đi với 精力 / 生命力, không đi với 身体.'},
  {vi:'Tớ tình cờ phát hiện ra rằng, thay vì một mình học vẹt thì chi bằng cùng bạn đặt câu hỏi cho nhau, cách này quả thật hiệu quả hơn.',zh:'我无意中发现，与其一个人死记硬背，不如和同学互相提问，这种方法的确更有效。',py:'Wǒ wúyì zhōng fāxiàn, yǔqí yí ge rén sǐjì-yìngbèi, bùrú hé tóngxué hùxiāng tíwèn, zhè zhǒng fāngfǎ díquè gèng yǒuxiào.',goiY:['无意中','与其……不如……','死记硬背','的确'],giai:'无意中 + V = "tình cờ" (việc đã xảy ra), khác 无意 + V = "không định"; 与其 A 不如 B: bỏ A, chọn B.'},
  {vi:'Nếu một lớp học thiếu sự cạnh tranh thì mọi người dễ mất đi sức sống, thậm chí ngay cả những bạn vốn học khá cũng sẽ dần dần tụt lại phía sau.',zh:'如果一个班级缺乏竞争，大家就容易失去活力，甚至连成绩原本不错的同学也会慢慢落后。',py:'Rúguǒ yí ge bānjí quēfá jìngzhēng, dàjiā jiù róngyì shīqù huólì, shènzhì lián chéngjì yuánběn búcuò de tóngxué yě huì mànmàn luòhòu.',goiY:['如果……就……','缺乏','甚至连……也……','落后'],giai:'甚至 đẩy ý lên mức cao hơn, kết hợp 连……也…… để nhấn mạnh "ngay cả… cũng…"; "tụt lại phía sau" là 落后, đứng cuối câu làm vị ngữ.'},
  {vi:'Thầy nói bản chất của thi cử không phải là để xếp hạng học sinh mà là giúp chúng ta phát hiện chỗ còn thiếu sót; chỉ khi đối diện đúng đắn với cảm giác khủng hoảng thì mới biến được áp lực thành động lực.',zh:'老师说，考试的本质不是给学生排名，而是帮我们发现不足；只有正确面对危机感，才能把压力变成动力。',py:'Lǎoshī shuō, kǎoshì de běnzhì bú shì gěi xuésheng páimíng, ér shì bāng wǒmen fāxiàn bùzú; zhǐyǒu zhèngquè miànduì wēijīgǎn, cái néng bǎ yālì biànchéng dònglì.',goiY:['本质','不是……而是……','只有……才……','危机感'],giai:'不是 A 而是 B phủ định A để khẳng định B; 只有……才…… nêu điều kiện duy nhất — không dùng 只有……就…….'}
];

// Chiều Trung → Việt — câu của bài khoá
var translateDataRev = [
  {vi:'Cá mòi hễ rời khỏi biển là rất khó sống sót, vì vậy việc vận chuyển trở thành vấn đề khiến ngư dân đau đầu nhất.',zh:'沙丁鱼一离开大海就很难存活，所以运输成了渔民最头疼的问题。',py:'Shādīngyú yì líkāi dàhǎi jiù hěn nán cúnhuó, suǒyǐ yùnshū chéngle yúmín zuì tóuténg de wèntí.',goiY:['一……就…… = hễ… là…','存活 = sống sót','运输 = vận chuyển'],giai:'一……就…… chỉ hai việc nối tiếp ngay (hễ… là…); 所以 dẫn ra hệ quả — 运输 ở đây là danh từ "việc vận chuyển".'},
  {vi:'Nếu lúc lên bờ cá mòi vẫn còn sống thì giá bán của loại hàng này có thể tăng lên gấp mấy lần.',zh:'如果上岸时沙丁鱼还活着，这种商品的卖价就能涨好几倍。',py:'Rúguǒ shàng àn shí shādīngyú hái huózhe, zhè zhǒng shāngpǐn de màijià jiù néng zhǎng hǎo jǐ bèi.',goiY:['如果……就…… = nếu… thì…','上岸 = lên bờ','商品 = hàng hoá'],giai:'如果……就…… là giả thiết – kết quả; 好几倍 = "gấp mấy lần" (好 nhấn mạnh số nhiều), không dịch là "tốt mấy lần".'},
  {vi:'Tuy ngư dân đã nghĩ ra rất nhiều cách để kéo dài thời gian sống của cá mòi, nhưng tình hình vẫn không được cải thiện là mấy.',zh:'渔民们虽然想了很多办法来延长沙丁鱼的存活期，但是情况仍然没有得到太大的改善。',py:'Yúmínmen suīrán xiǎngle hěn duō bànfǎ lái yáncháng shādīngyú de cúnhuóqī, dànshì qíngkuàng réngrán méiyǒu dédào tài dà de gǎishàn.',goiY:['虽然……但是…… = tuy… nhưng…','延长 = kéo dài','改善 = cải thiện'],giai:'虽然……但是…… là nhượng bộ (sự thật đã xảy ra); 没有得到太大的改善 dịch thoáng là "không được cải thiện là mấy".'},
  {vi:'Về sau một ngư dân tình cờ phát hiện ra rằng chỉ cần thả vài con cá nheo vào thiết bị chứa cá thì cá mòi có thể sống sót khi lên bờ.',zh:'后来一位渔民无意中发现，只要把几条鲇鱼放进装鱼的设备里，沙丁鱼就能活着上岸。',py:'Hòulái yí wèi yúmín wúyì zhōng fāxiàn, zhǐyào bǎ jǐ tiáo niányú fàngjìn zhuāng yú de shèbèi li, shādīngyú jiù néng huózhe shàng àn.',goiY:['无意中 = tình cờ','只要……就…… = chỉ cần… thì…','鲇鱼 = cá nheo','设备 = thiết bị'],giai:'无意中 + V là phó từ "tình cờ, không cố ý"; 只要……就…… nêu điều kiện đủ — vế sau là nội dung của 发现.'},
  {vi:'Do cá nheo là thiên địch của cá mòi, không thể chung sống hoà bình với chúng, nên để trốn tránh nguy hiểm, cá mòi đành phải không ngừng bơi nhanh hơn.',zh:'由于鲇鱼是沙丁鱼的天敌，无法跟它们和平共处，沙丁鱼为了逃避危险，只好不断地加速游动。',py:'Yóuyú niányú shì shādīngyú de tiāndí, wúfǎ gēn tāmen hépíng gòngchǔ, shādīngyú wèile táobì wēixiǎn, zhǐhǎo búduàn de jiāsù yóudòng.',goiY:['由于 = do, bởi vì','天敌 = thiên địch','和平共处 = chung sống hoà bình','只好 = đành phải'],giai:'由于 nêu nguyên nhân ở vế đầu; 只好 = "đành phải" (không còn cách nào khác) — không dịch thành "chỉ tốt".'},
  {vi:'Sự xuất hiện của cá nheo đe doạ cá mòi, nhưng ngược lại lại giúp chúng duy trì sức sống mạnh mẽ, nhờ đó tỉ lệ sống sót được nâng lên rất nhiều.',zh:'鲇鱼的出现对沙丁鱼构成了威胁，反而使它们保持了旺盛的生命力，从而大大提高了存活的比例。',py:'Niányú de chūxiàn duì shādīngyú gòuchéngle wēixié, fǎn\'ér shǐ tāmen bǎochíle wàngshèng de shēngmìnglì, cóng\'ér dàdà tígāole cúnhuó de bǐlì.',goiY:['构成……威胁 = gây ra mối đe doạ','反而 = ngược lại','从而 = nhờ đó, từ đó','比例 = tỉ lệ'],giai:'反而 chỉ kết quả trái với dự đoán (bị đe doạ mà lại sống khoẻ hơn); 从而 dẫn ra kết quả tiếp theo — dịch "nhờ đó / từ đó".'},
  {vi:'Đọc xong câu chuyện này, cảm nghĩ và điều thấm thía của mỗi người tuy khác nhau nhưng ai cũng cho rằng cách làm của người ngư dân quả thật rất gợi mở.',zh:'读完这个故事，每个人的感想和体会虽然不同，但都认为渔民的办法的确很有启发。',py:'Dúwán zhège gùshi, měi ge rén de gǎnxiǎng hé tǐhuì suīrán bù tóng, dàn dōu rènwéi yúmín de bànfǎ díquè hěn yǒu qǐfā.',goiY:['感想 = cảm nghĩ','体会 = điều thấm thía','虽然……但…… = tuy… nhưng…','的确 = quả thật'],giai:'虽然 đứng sau chủ ngữ (每个人的感想……虽然不同); 很有启发 dịch "rất gợi mở / rất đáng suy ngẫm", không dịch sát "có khởi phát".'},
  {vi:'Cốt lõi của khái niệm "hiệu ứng cá nheo" là: một khi thị trường áp dụng biện pháp kích thích doanh nghiệp, doanh nghiệp sẽ tràn đầy sức sống và không đến nỗi tụt hậu trong cạnh tranh.',zh:'“鲇鱼效应”这个概念的核心在于：一旦市场采取措施刺激企业，企业就会充满活力，在竞争中不至于落后。',py:'“Niányú xiàoyìng” zhège gàiniàn de héxīn zàiyú: yídàn shìchǎng cǎiqǔ cuòshī cìjī qǐyè, qǐyè jiù huì chōngmǎn huólì, zài jìngzhēng zhōng bú zhìyú luòhòu.',goiY:['核心在于 = cốt lõi nằm ở','一旦……就…… = một khi… thì…','不至于 = không đến nỗi'],giai:'一旦……就…… nêu điều kiện một khi xảy ra thì kéo theo kết quả; 不至于 + V = "không đến nỗi", dùng cho kết quả xấu tránh được.'},
  {vi:'Xét về bản chất, hiệu ứng cá nheo chính là một loại hiệu ứng áp lực: nó khiến nhân viên nảy sinh cảm giác khủng hoảng, từ đó tích cực khai thác tiềm năng của bản thân hơn.',zh:'从本质上说，鲇鱼效应就是一种压力效应：它让员工产生危机感，从而更积极地挖掘自己的潜力。',py:'Cóng běnzhì shang shuō, niányú xiàoyìng jiù shì yì zhǒng yālì xiàoyìng: tā ràng yuángōng chǎnshēng wēijīgǎn, cóng\'ér gèng jījí de wājué zìjǐ de qiánlì.',goiY:['从本质上说 = xét về bản chất','员工 = nhân viên','危机感 = cảm giác khủng hoảng','从而 = từ đó'],giai:'就是 ở đây khẳng định "chính là"; 让 + người + V là câu kiêm ngữ (khiến ai làm gì), 从而 nối kết quả tiếp theo.'},
  {vi:'Khi thi đấu trận chung kết, vận động viên nhất định phải điều chỉnh bản thân về trạng thái gần như tốt nhất; nếu không có chút áp lực nào thì ngược lại sẽ bất lợi cho việc đạt thành tích tốt.',zh:'运动员参加决赛时，一定要把自己调整到接近最佳的状态；如果一点儿压力都没有，反而不利于取得好成绩。',py:'Yùndòngyuán cānjiā juésài shí, yídìng yào bǎ zìjǐ tiáozhěng dào jiējìn zuìjiā de zhuàngtài; rúguǒ yìdiǎnr yālì dōu méiyǒu, fǎn\'ér búlì yú qǔdé hǎo chéngjì.',goiY:['决赛 = trận chung kết','接近最佳 = gần như tốt nhất','一点儿……都没有 = không có chút… nào','反而 = ngược lại'],giai:'把 + O + 调整到 + trạng thái (câu chữ 把 có bổ ngữ kết quả); 不利于 là phủ định của 有利于 — dịch "bất lợi cho".'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết (theo 命题写作 của sách: 竞争的利与弊)
// ══════════════════════════════════════════
var writingData = {
  words:['的确','有利','潜力','落后','逃避'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ nói về mặt lợi và mặt hại của cạnh tranh (竞争的利与弊) trong cuộc sống học sinh.',
  outline:[
    'Câu mở: nêu quan điểm — cạnh tranh quả thực có nhiều cái lợi (dùng 的确).',
    'Thân 1: mặt lợi — áp lực vừa phải có lợi, giúp khai thác tiềm năng; ví dụ trong lớp (dùng 有利于, 潜力, 落后).',
    'Thân 2: mặt hại — áp lực quá lớn khiến người ta căng thẳng (dùng 但是).',
    'Kết: thái độ đúng — không trốn tránh, học cách điều chỉnh tâm lý (dùng 逃避, 只要……就……).'
  ],
  model:{
    zh:'竞争的确有很多好处。适度的竞争有利于我们保持良好的状态，也能帮助我们挖掘自己的潜力。看到同学进步了，我就不想落后，学习更努力了。但是压力太大也会让人紧张。所以面对竞争，我们不应该逃避，只要调整好心态，就能把压力变成动力。',
    py:'Jìngzhēng díquè yǒu hěn duō hǎochu. Shìdù de jìngzhēng yǒulì yú wǒmen bǎochí liánghǎo de zhuàngtài, yě néng bāngzhù wǒmen wājué zìjǐ de qiánlì. Kàndào tóngxué jìnbù le, wǒ jiù bù xiǎng luòhòu, xuéxí gèng nǔlì le. Dànshì yālì tài dà yě huì ràng rén jǐnzhāng. Suǒyǐ miànduì jìngzhēng, wǒmen bù yīnggāi táobì, zhǐyào tiáozhěng hǎo xīntài, jiù néng bǎ yālì biànchéng dònglì.',
    vn:'Cạnh tranh quả thực có rất nhiều cái lợi. Cạnh tranh vừa phải có lợi cho việc chúng ta giữ được trạng thái tốt, cũng có thể giúp chúng ta khai thác tiềm năng của bản thân. Thấy bạn học tiến bộ, tôi liền không muốn bị tụt lại, học chăm hơn. Nhưng áp lực quá lớn cũng sẽ khiến người ta căng thẳng. Vì vậy khi đối mặt với cạnh tranh, chúng ta không nên trốn tránh; chỉ cần điều chỉnh tốt tâm lý, là có thể biến áp lực thành động lực.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '有利 đã đi kèm 于 (有利于……) hoặc dùng mẫu 对……有利 chưa?',
    '的确 có đứng sau chủ ngữ, trước vị ngữ không (không viết 很的确)?',
    'Có nói cả mặt lợi lẫn mặt hại của cạnh tranh không? Câu 只要 đã có 就 chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈竞争的利与弊。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'的确', loai:'phó từ', cach:'Chủ ngữ + 的确 + V / tính từ · 的确是…… · 的的确确',
     sai:[{re:'的确(的|吗)', sua:'确实的 / 确实吗', giai:'的确 chỉ là phó từ, không làm định ngữ, vị ngữ. Muốn nói "chính xác" dùng 确实: 确实的消息, 消息确实吗？'},
          {re:'很的确', sua:'的确很……', giai:'的确 đứng TRƯỚC 很: 的确很好, không nói 很的确.'}]},
    {tu:'有利', loai:'tính từ', cach:'A 有利于 B · 对 + N + 有利 · 有利的条件 / 形势',
     sai:[{re:'有利(我们|他们|你们|学生|身体|健康|学习)', sua:'有利于我们 / 对我们有利', giai:'有利 không mang tân ngữ trực tiếp; phải thêm 于: 有利于 + đối tượng, hoặc dùng 对……有利.'},
          {re:'不有利', sua:'不利于', giai:'Phủ định của 有利 là 不利 (不利于……), không nói 不有利.'}]},
    {tu:'潜力', loai:'danh từ', cach:'很有潜力 · 挖掘 / 发挥 + 潜力 · 潜力很大',
     sai:[{re:'很潜力', sua:'很有潜力', giai:'潜力 là danh từ, cần 有: 很有潜力.'},
          {re:'潜力(很|非常)?多', sua:'潜力很大', giai:'潜力 đo bằng 大 / 小, không dùng 多 / 少.'}]},
    {tu:'落后', loai:'động từ / tính từ', cach:'不想 / 不至于 + 落后 · 落后于 + N · 落后 + số lượng',
     sai:[{re:'落后给', sua:'落后于 / 比……落后', giai:'Tụt sau ai: 落后于 + đối tượng hoặc 比 + đối tượng + 落后; không nói 落后给.'}]},
    {tu:'逃避', loai:'động từ', cach:'逃避 + 责任 / 现实 / 问题 / 竞争 · 不应该逃避',
     sai:[{re:'逃避(家|学校|教室|这里|城市)', sua:'离开 / 逃离 + nơi chốn', giai:'逃避 đi với điều trừu tượng (责任, 现实, 问题, 竞争); rời khỏi một nơi dùng 离开 / 逃离.'},
          {re:'躲避责任', sua:'逃避责任', giai:'Cụm cố định là 逃避责任.', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'的确 + V / tính từ', nhan:'的确', vd:'竞争的确能让人进步。', khi:'Khẳng định quan điểm — câu mở.'},
    {ten:'A 有利于 B / A 不利于 B', nhan:'有利', vd:'适度的竞争有利于我们挖掘潜力。', khi:'Nêu mặt lợi và mặt hại — thân đoạn.'},
    {ten:'无意中 + V', nhan:'无意', vd:'我无意中发现，和同学比赛背单词，记得特别快。', khi:'Kể một trải nghiệm tình cờ làm ví dụ.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然竞争有压力，但是它能让我们不断进步。', khi:'Nêu cả hai mặt của vấn đề.'},
    {ten:'不仅……，也……', nhan:'不仅', vd:'竞争不仅能提高效率，也能增强活力。', khi:'Nêu hai lợi ích cùng lúc.'},
    {ten:'只要……，就……', nhan:'只要', vd:'只要调整好心态，就能把压力变成动力。', khi:'Câu KẾT — điều kiện đủ.'},
    {ten:'从本质上说，……', nhan:'本质', vd:'从本质上说，竞争就是一种压力。', khi:'Đưa ra nhận định khái quát.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['无意中','他的这些话','事实','接近了'],
     dap:'他的这些话无意中接近了事实。',
     vn:'Những lời này của anh ấy vô tình lại gần đúng với sự thật.',
     giai:'Câu 29 sách bài tập. Chủ ngữ 他的这些话 → trạng ngữ 无意中 → 接近了 + 事实.'},
    {manh:['刺激企业','必须','采取措施','活跃起来'],
     dap:'必须采取措施刺激企业活跃起来。',
     vn:'Phải áp dụng biện pháp kích thích doanh nghiệp năng động lên.',
     giai:'Câu 30 sách bài tập. 必须 → 采取措施 (cách làm) → 刺激企业 → 活跃起来 (kết quả).'},
    {manh:['比例','这种商品','太高了','占的'],
     dap:'这种商品占的比例太高了。',
     vn:'Loại hàng này chiếm tỷ lệ quá cao.',
     giai:'Câu 31 sách bài tập. 这种商品占的 làm định ngữ cho 比例 → vị ngữ 太高了.'},
    {manh:['有利于','适度的压力','保持良好的状态','我们'],
     dap:'适度的压力有利于我们保持良好的状态。',
     vn:'Áp lực vừa phải có lợi cho việc chúng ta giữ được trạng thái tốt.',
     giai:'Câu của bài khoá: A + 有利于 + (chủ thể + V + O).'},
    {manh:['的确','这个方法','实用','很'],
     dap:'这个方法的确很实用。',
     vn:'Phương pháp này quả thực rất thiết thực.',
     giai:'Phó từ 的确 đứng sau chủ ngữ, trước 很 + tính từ.'},
    {manh:['被','沙丁鱼','渔民','运上了岸'],
     dap:'沙丁鱼被渔民运上了岸。',
     vn:'Cá mòi được ngư dân chở lên bờ.',
     giai:'Câu 被 (ôn HSK 3–4): đối tượng + 被 + người làm + V + bổ ngữ.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 你喜欢竞争吗？
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (你喜欢竞争吗？). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 有利 · 潜力 · 挖掘 · 落后 · 逃避 · 的确 · 刺激 · 活力 · 危机.',
  questions:[
    {q_zh:'请列举一些生活中的实例，说明竞争给我们带来的好处。',
     q_vn:'Hãy nêu vài ví dụ trong đời sống để chứng minh những cái lợi mà cạnh tranh mang lại cho chúng ta.',
     hint:'Nêu 2 ví dụ: trong trường học và ngoài thị trường, dùng 比如 và 落后',
     sample:'比如在学校，同学之间比赛学习，大家都不想落后，所以学习更努力了。再比如商店之间有竞争，商品的价格就会便宜一些，服务也会更好。',
     sample_vn:'Chẳng hạn ở trường, các bạn thi đua học tập với nhau, ai cũng không muốn bị tụt lại nên học chăm hơn. Lại chẳng hạn các cửa hàng cạnh tranh nhau thì giá hàng sẽ rẻ hơn một chút, phục vụ cũng tốt hơn.',
     note:'Câu hỏi 列举实例 → phải có ví dụ CỤ THỂ, đừng nói chung chung.'},
    {q_zh:'你有过在竞争中失败的经历吗？说说它对你有何影响。',
     q_vn:'Em đã từng thất bại trong cạnh tranh chưa? Hãy kể xem nó ảnh hưởng đến em thế nào.',
     hint:'Kể một lần cụ thể, dùng 虽然……但是…… và 决赛',
     sample:'有。去年我参加汉语演讲比赛，没能进入决赛。虽然当时很难过，但是这次失败让我找到了自己的不足，后来我练习得更努力了。',
     sample_vn:'Có. Năm ngoái em tham gia cuộc thi hùng biện tiếng Trung, không vào được chung kết. Tuy lúc đó rất buồn, nhưng lần thất bại này giúp em nhận ra thiếu sót của mình, sau đó em luyện tập chăm chỉ hơn.',
     note:'有何影响 = 有什么影响 (văn viết); trả lời cả chuyện xảy ra và ảnh hưởng.'},
    {q_zh:'如果竞争是不可避免的，你认为应该如何面对？',
     q_vn:'Nếu cạnh tranh là điều không tránh khỏi, theo em nên đối mặt thế nào?',
     hint:'Dùng 逃避, 的确, 有利于',
     sample:'我认为不应该逃避。竞争的确会带来压力，但是适度的压力有利于挖掘我们的潜力。我们要调整好心态，把对手当作学习的榜样。',
     sample_vn:'Em cho rằng không nên trốn tránh. Cạnh tranh quả thực sẽ mang lại áp lực, nhưng áp lực vừa phải có lợi cho việc khai thác tiềm năng của chúng ta. Chúng ta phải điều chỉnh tốt tâm lý, coi đối thủ là tấm gương để học hỏi.',
     note:'Câu hỏi 你认为 → mở đầu bằng 我认为 / 我觉得.'},
    {q_zh:'你觉得你们班需要一条“鲇鱼”吗？为什么？',
     q_vn:'Em thấy lớp em có cần một “con cá nheo” không? Vì sao?',
     hint:'Trả lời thẳng + lý do, dùng 危机感 và 活力',
     sample:'我觉得需要。如果班里来了一个特别优秀的同学，大家就会有危机感，学习也会更有活力。',
     sample_vn:'Em thấy là cần. Nếu lớp có thêm một bạn đặc biệt giỏi, mọi người sẽ có cảm giác nguy cơ, việc học cũng sẽ sôi nổi hơn.',
     note:'Vận dụng khái niệm 鲇鱼效应 vào đời sống của chính mình.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 30.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第30课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'这么多家卖沙丁鱼的店，怎么只有那家特别贵？'},
            {sp:'男',zh:'只有他们知道怎么延长沙丁鱼的存活期。'}],
     q:'从对话中可以知道什么？',qvn:'Qua đoạn hội thoại có thể biết điều gì?',
     opts:['那家店的沙丁鱼最新鲜','那家店的服务最好','那家店离海边最近','那家店的沙丁鱼活得更久'],ans:3,
     why:'只有他们知道怎么延长沙丁鱼的存活期 → cá mòi của cửa hàng đó sống được lâu hơn, nên bán đắt.',
     words:['沙丁鱼','延长','存活']},

    {n:2,
     lines:[{sp:'男',zh:'你昨天的飞机几点到的？'},
            {sp:'女',zh:'别提了，快12点才到，晚点了4个小时。'}],
     q:'飞机本来应该几点到？',qvn:'Máy bay lẽ ra phải đến lúc mấy giờ?',
     opts:['12点左右','8点左右','4点左右','10点左右'],ans:1,
     why:'Gần 12 giờ mới đến, trễ 4 tiếng → giờ đúng lịch là khoảng 12 − 4 = 8 giờ.',
     words:[]},

    {n:3,
     lines:[{sp:'女',zh:'听说对方有个队员非常强，你有把握吗？'},
            {sp:'男',zh:'我不觉得他可以对我构成威胁。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['他没有把握','对方队员比他强','他很害怕对方','对方对他没有威胁'],ans:3,
     why:'我不觉得他可以对我构成威胁 = tôi không thấy anh ta đe dọa được tôi → anh ấy rất tự tin.',
     words:['构成']},

    {n:4,
     lines:[{sp:'男',zh:'你们今年不招聘男老师吗？'},
            {sp:'女',zh:'我们是理工科学校，男老师占的比例太大了。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['学校男老师太少','学校很需要男老师','今年不招男老师','学校不是理工科学校'],ans:2,
     why:'Tỷ lệ giáo viên nam đã quá lớn → năm nay không tuyển giáo viên nam.',
     words:['比例']},

    {n:5,
     lines:[{sp:'女',zh:'你觉得小张能办好这件事吗？'},
            {sp:'男',zh:'我听他说了他的想法，我觉得的确很巧妙。'}],
     q:'男的是什么态度？',qvn:'Người đàn ông có thái độ thế nào?',
     opts:['赞同','反对','怀疑','无所谓'],ans:0,
     why:'的确很巧妙 = quả thật rất khéo → khen, tán thành cách làm của Tiểu Trương.',
     words:['的确','巧妙']},

    {n:6,
     lines:[{sp:'男',zh:'那里是山区，条件那么差，你怎么会想到要去支教呢？'},
            {sp:'女',zh:'正因为那里是落后地区，才需要大家去建设。'}],
     q:'关于山区，下列哪项正确？',qvn:'Về vùng núi, điều nào sau đây đúng?',
     opts:['条件很好','不需要建设','比较落后','女的不想去'],ans:2,
     why:'那里是落后地区, 条件那么差 → vùng núi còn lạc hậu. (Ôn 支教, 建设 — bài 24.)',
     words:['落后']},

    {n:7,
     lines:[{sp:'女',zh:'我已经两个月没有跟他见面了，也不接他的电话。'},
            {sp:'男',zh:'你总这么逃避也不是办法。'},
            {sp:'女',zh:'可是我不知道该怎么跟他说……'},
            {sp:'男',zh:'不知道怎么说也得说啊，时间越久越麻烦。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['时间久了就好了','不用跟他说','应该跟他说清楚','应该先给他打电话'],ans:2,
     why:'逃避也不是办法; 不知道怎么说也得说 → nên nói rõ với anh ta, đừng trốn tránh nữa.',
     words:['逃避']},

    {n:8,
     lines:[{sp:'男',zh:'来中国一年多了，你有什么感想？'},
            {sp:'女',zh:'我最大的体会就是中国太大了，要学的、要看的、要吃的太多了，只待两年远远不够。'},
            {sp:'男',zh:'那你打算延长留学时间吗？'},
            {sp:'女',zh:'我正在考虑这个问题。'}],
     q:'关于女的，下列哪项正确？',qvn:'Về người phụ nữ, điều nào sau đây đúng?',
     opts:['已经在中国两年了','在考虑延长留学时间','觉得两年时间足够了','不喜欢中国菜'],ans:1,
     why:'打算延长留学时间吗？— 我正在考虑这个问题 → cô ấy đang cân nhắc kéo dài thời gian du học. Cô mới ở hơn một năm, thấy hai năm 远远不够.',
     words:['感想','体会','延长']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn em thi bị điểm kém, định giấu không cho bố mẹ biết.',
     a:{sp:'Bạn',zh:'这次考得太差了，我不想让爸妈知道……',vn:'Lần này thi tệ quá, mình không muốn bố mẹ biết…'},
     need:['Dùng 逃避','Khuyên bạn nói thật với bố mẹ'],
     sample:'逃避不是办法，你还是跟他们说清楚吧，他们会理解你的。',
     samplePy:'Táobì bú shì bànfǎ, nǐ háishi gēn tāmen shuō qīngchu ba, tāmen huì lǐjiě nǐ de.',
     sampleVn:'Trốn tránh không phải là cách, cậu cứ nói rõ với bố mẹ đi, họ sẽ hiểu cho cậu thôi.',
     tip:'逃避 làm chủ ngữ: 逃避不是办法 (giống bài nghe số 7).'},

    {scene:'Bạn em sợ áp lực nên định không tham gia cuộc thi hùng biện.',
     a:{sp:'Bạn',zh:'比赛压力太大了，我还是不参加了吧？',vn:'Thi áp lực quá, hay là mình không tham gia nữa nhỉ?'},
     need:['Dùng 有利于','Khuyên bạn cứ tham gia'],
     sample:'适度的压力有利于挖掘你的潜力，参加吧！不管结果怎么样，都是一次锻炼。',
     samplePy:'Shìdù de yālì yǒulì yú wājué nǐ de qiánlì, cānjiā ba! Bùguǎn jiéguǒ zěnmeyàng, dōu shì yí cì duànliàn.',
     sampleVn:'Áp lực vừa phải có lợi cho việc khai thác tiềm năng của cậu, tham gia đi! Dù kết quả thế nào cũng là một lần rèn luyện.',
     tip:'有利于 + cụm động từ; ôn 不管……都…….'},

    {scene:'Bạn cùng phòng làm hỏng tai nghe của em, rất lo em giận.',
     a:{sp:'Bạn',zh:'对不起，你的耳机被我弄坏了，我真不是故意的！',vn:'Xin lỗi, tai nghe của cậu bị mình làm hỏng rồi, mình thật sự không cố ý!'},
     need:['Dùng 无意','Tỏ ý thông cảm, không trách bạn'],
     sample:'没关系，我知道你是无意的，别放在心上。',
     samplePy:'Méi guānxi, wǒ zhīdào nǐ shì wúyì de, bié fàng zài xīn shang.',
     sampleVn:'Không sao, mình biết cậu không cố ý mà, đừng để bụng.',
     tip:'是无意的 = không cố ý (trái với 故意). Nhớ: 无意 KHÔNG phải "vô ý = sơ ý".'},

    {scene:'Mẹ hỏi em thấy nhà hàng mới mở gần nhà thế nào.',
     a:{sp:'Mẹ',zh:'你觉得新开的那家饭馆怎么样？',vn:'Con thấy nhà hàng mới mở kia thế nào?'},
     need:['Dùng 的确','Đánh giá cụ thể (món ăn, giá, phục vụ)'],
     sample:'那家饭馆的确不错，菜好吃，价格也不贵，服务员还特别热情。',
     samplePy:'Nà jiā fànguǎn díquè búcuò, cài hǎochī, jiàgé yě bú guì, fúwùyuán hái tèbié rèqíng.',
     sampleVn:'Nhà hàng đó quả thật không tệ, món ăn ngon, giá cũng không đắt, nhân viên còn đặc biệt nhiệt tình.',
     tip:'的确 đứng sau chủ ngữ, trước vị ngữ; ôn 热情 (bài 24).'},

    {scene:'Bạn thắc mắc vì sao siêu thị gần trường giảm giá liên tục.',
     a:{sp:'Bạn',zh:'学校旁边那家超市怎么天天打折啊？',vn:'Sao siêu thị cạnh trường ngày nào cũng giảm giá thế?'},
     need:['Dùng 落后','Giải thích nguyên nhân là cạnh tranh'],
     sample:'附近又开了两家超市，竞争很激烈，它不降价就会落后啊。',
     samplePy:'Fùjìn yòu kāile liǎng jiā chāoshì, jìngzhēng hěn jīliè, tā bú jiàngjià jiù huì luòhòu a.',
     sampleVn:'Gần đó lại mở thêm hai siêu thị, cạnh tranh rất gay gắt, nó không giảm giá thì sẽ bị tụt lại thôi.',
     tip:'Ôn 激烈 (bài 13); 不……就…… (nếu không … thì …).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Giám đốc phát biểu trong hội nghị doanh nghiệp.',
     a:'我们要采取有效措施，刺激企业活跃起来，不断提高市场竞争力。',b:'咱们得想想办法，让公司热闹起来。',better:'a',
     why:'Hội nghị chính thức cần văn phong trang trọng: 采取措施, 刺激……活跃起来, 不断提高. Câu b quá khẩu ngữ (咱们得, 热闹起来).'},

    {scene:'Em nhắn tin cho bạn thân ngay sau buổi thi.',
     a:'这次考试的难度的确超出了我的预期。',b:'这次考试真的太难了，我差点儿哭了！',better:'b',
     why:'Nhắn tin bạn thân thì nói tự nhiên, bộc lộ cảm xúc. Câu a (难度超出预期) giống báo cáo, nghe cứng.'},

    {scene:'Em viết báo cáo khoa học về thí nghiệm nuôi cá.',
     a:'鲇鱼的加入使沙丁鱼存活的比例大大提高。',b:'放了几条鲇鱼以后，沙丁鱼就不怎么死了。',better:'a',
     why:'Báo cáo khoa học dùng từ ngữ chính xác, văn viết: 使……存活的比例大大提高. Câu b là cách kể chuyện thường ngày.'},

    {scene:'Em an ủi em trai vừa thua một trận cờ.',
     a:'没事儿，你们俩水平差不多，下次加油！',b:'鉴于双方水平接近，此次失利实属正常。',better:'a',
     why:'An ủi người thân nên nói nhẹ nhàng, gần gũi. Câu b (鉴于, 此次失利实属正常) như bình luận viên, lạnh lùng.'},

    {scene:'Em gọi điện hỏi bài thầy giáo vào giờ nghỉ trưa.',
     a:'老师，我无意打扰您休息，只是有个问题想请教您。',b:'喂，老师，问你个事儿。',better:'a',
     why:'Nói với thầy cô, nhất là khi làm phiền giờ nghỉ, cần lịch sự: 无意打扰您, 请教您. Câu b suồng sã, dùng 你 thay vì 您.'},

    {scene:'Em giải thích khái niệm kinh tế trong bài thuyết trình trên lớp.',
     a:'“鲇鱼效应”指的是通过引入竞争者，使整体保持活力的现象。',b:'就是说放条鲇鱼进去，大家就都动起来了呗。',better:'a',
     why:'Thuyết trình cần định nghĩa rõ ràng, văn viết: 指的是……的现象. Câu b (呗, 动起来) chỉ hợp khi tán gẫu.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 110)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Sách chia 3 phần: 沙丁鱼的运输问题 → 如何提高沙丁鱼的存活率 → “鲇鱼效应”的启发. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Cá mòi & người Tây Ban Nha', cue:'西班牙人特别喜欢吃……，但沙丁鱼对……环境极不适应，运输……', words:['沙丁鱼','运输']},
    {step:'Cá chết thì rẻ', cue:'鱼上岸后……，死掉的沙丁鱼口感很差，作为商品销售……；活鱼的卖价可以涨……', words:['岸','商品']},
    {step:'Ngư dân tìm cách', cue:'为了延长……，减少经济损失，渔民们……，但情况没有得到……', words:['延长','存活','改善']},
    {step:'Phương pháp cá nheo', cue:'一位渔民无意中发现……：把……放进……；鲇鱼无法和沙丁鱼……，对沙丁鱼……', words:['无意','巧妙','实用','天敌','鲇鱼','设备','和平','构成']},
    {step:'Kết quả', cue:'为了逃避天敌，沙丁鱼……，保持了……，存活的比例……', words:['逃避','不断','旺盛','比例']},
    {step:'Hiệu ứng cá nheo', cue:'你有什么感想和体会？这个概念的核心是：……刺激企业活跃起来……而不至于……', words:['感想','体会','概念','核心','刺激','活力','落后']},
    {step:'Bản chất & ý nghĩa', cue:'从本质上说……危机感……；适度的压力有利于……；比如运动员决赛时……', words:['本质','员工','危机','有利','挖掘','潜力','决赛','接近','佳','的确']}
  ],
  checklist: [
    'Kể đủ ba phần của sách chưa: vấn đề vận chuyển → cách tăng tỷ lệ sống → gợi mở của “hiệu ứng cá nheo”?',
    'Có dùng được các từ khoá của sách không: 环境, 适应, 口感, 销售, 涨, 损失, 危机感, 状态?',
    'Có giải thích được VÌ SAO thả cá nheo vào thì cá mòi sống lâu hơn không?',
    'Có nói được bản chất của “hiệu ứng cá nheo” là một loại hiệu ứng áp lực không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 109) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['实用','接近','落后','逃避','延长'],
   cau:[
     {s:'遇到困难不应该＿＿，应该积极地面对。', dap:['逃避']},
     {s:'由于报名的考生太多，学校决定适当＿＿报名时间。', dap:['延长']},
     {s:'公司在产品包装、宣传推广和销售等方面积累了相当丰富、＿＿的经验。', dap:['实用']},
     {s:'中国各地区经济发展水平不平衡，中西部＿＿于东南沿海地区。', dap:['落后']},
     {s:'参加本届运动会的运动员人数＿＿一万人。', dap:['接近']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'你听谁说刘方要结婚了？消息＿＿吗？', opts:['的确','确实'], ans:1, giai:'Chỗ trống làm VỊ NGỮ trong câu hỏi → cần tính từ 确实 (消息确实吗 = tin có chính xác không). 的确 chỉ là phó từ, phải đứng trước động từ / tính từ.'},
     {s:'主任临时有点儿事，下午的会＿＿到明天了。', opts:['延长','推迟'], ans:1, giai:'Lùi thời điểm cuộc họp sang ngày mai → 推迟 (+ 到 + thời điểm mới). 延长 là kéo dài một khoảng thời gian (延长一个小时).'},
     {s:'让孩子＿＿到自己的意见受到尊重，这一点很重要。', opts:['体会','感想'], ans:0, giai:'Sau chỗ trống có 到 + tân ngữ → cần động từ: 体会到 = cảm nhận được. 感想 chỉ là danh từ.'},
     {s:'他＿＿就看不见这些美丽的花呀。', opts:['本质','根本'], ans:1, giai:'Cần phó từ nhấn mạnh phủ định "hoàn toàn (không)" → 根本 (根本就看不见). 本质 là danh từ "bản chất".'}
   ]}
];
