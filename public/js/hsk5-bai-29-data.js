// ══════════════════════════════════════════
// DATA — HSK5 Bài 29: 培养对手 (Đào tạo đối thủ)
// Unit 10 关注经济 · Nguồn: HSK标准教程5下 (tr. 96–103) + 练习册 bài 29
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'培养',py:'péiyǎng',pos:'Động từ',vn:'bồi dưỡng, đào tạo; vun đắp',hv:'bồi dưỡng',em:'🌱',lesson:1,
   explain:['Nuôi dưỡng, rèn luyện cho một người hoặc một khả năng phát triển dần: 培养人才, 培养能力.','Vun đắp dần một thứ trừu tượng: 培养感情, 培养兴趣, 培养习惯. Tên bài 培养对手 dùng theo nghĩa ẩn dụ: "nuôi" đối thủ.'],
   usage:'Bảng 词语搭配 của sách: 培养 + 能力 / 兴趣 / 感情 / 爱好. Tân ngữ thường là thứ trừu tượng hoặc là người (培养学生). Hay đi với câu 把: 把……培养好 / 培养成…….',
   collo:['培养能力','培养兴趣','培养感情','培养爱好'],
   ex_zh:'所以，为了保持目前这种经营的“生态平衡”，我要继续把对手培养好。',ex_py:'Suǒyǐ, wèile bǎochí mùqián zhè zhǒng jīngyíng de "shēngtài pínghéng", wǒ yào jìxù bǎ duìshǒu péiyǎng hǎo.',ex_vn:'Vì vậy, để giữ "cân bằng sinh thái" kinh doanh hiện nay, tôi phải tiếp tục "nuôi dưỡng" đối thủ cho tốt.',
   exList:[
     {zh:'所以，为了保持目前这种经营的“生态平衡”，我要继续把对手培养好。',py:'Suǒyǐ, wèile bǎochí mùqián zhè zhǒng jīngyíng de "shēngtài pínghéng", wǒ yào jìxù bǎ duìshǒu péiyǎng hǎo.',vn:'Vì vậy, để giữ "cân bằng sinh thái" kinh doanh hiện nay, tôi phải tiếp tục "nuôi dưỡng" đối thủ cho tốt.'},
     {zh:'你要先跟他们培养感情，然后再培养他们对钢琴的兴趣。',py:'Nǐ yào xiān gēn tāmen péiyǎng gǎnqíng, ránhòu zài péiyǎng tāmen duì gāngqín de xìngqù.',vn:'Chị phải vun đắp tình cảm với các em trước, rồi mới bồi dưỡng hứng thú với đàn piano cho chúng.'},
     {zh:'学校应该培养学生独立思考的能力。',py:'Xuéxiào yīnggāi péiyǎng xuésheng dúlì sīkǎo de nénglì.',vn:'Nhà trường nên bồi dưỡng cho học sinh năng lực suy nghĩ độc lập.'}
   ],
   colloFull:[
     {zh:'培养能力',py:'péiyǎng nénglì',vn:'bồi dưỡng năng lực'},
     {zh:'培养兴趣',py:'péiyǎng xìngqù',vn:'bồi dưỡng hứng thú'},
     {zh:'培养感情',py:'péiyǎng gǎnqíng',vn:'vun đắp tình cảm'},
     {zh:'培养爱好',py:'péiyǎng àihào',vn:'nuôi dưỡng sở thích'},
     {zh:'培养人才',py:'péiyǎng réncái',vn:'đào tạo nhân tài'}
   ],
   patterns:[
     {s:'培养 + 能力 / 兴趣 / 感情 / 习惯',m:'Bồi dưỡng năng lực / hứng thú / tình cảm / thói quen'},
     {s:'把 + N + 培养好 / 培养成……',m:'Đào tạo … cho tốt / đào tạo … thành …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Huấn luyện viên đã đào tạo anh ấy thành một vận động viên xuất sắc.',answer:'教练把他培养成了一名优秀的运动员。',answerPy:'Jiàoliàn bǎ tā péiyǎng chéngle yì míng yōuxiù de yùndòngyuán.',
      note:'把 + người + 培养成 + kết quả: nhấn mạnh người được đào tạo trở thành gì.',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần bồi dưỡng được hứng thú của trẻ, chúng sẽ tự giác học.',answer:'只要培养起孩子的兴趣，他们就会主动学习。',answerPy:'Zhǐyào péiyǎng qǐ háizi de xìngqù, tāmen jiù huì zhǔdòng xuéxí.',
      note:'培养兴趣 là cụm trong bảng 词语搭配. 只要 ở vế trước, 就 đứng trước động từ vế sau.',pair:'只要……就……'}
   ]},

  {n:2,zh:'对手',py:'duìshǒu',pos:'Danh từ',vn:'đối thủ, địch thủ',hv:'đối thủ',em:'🥊',lesson:1,
   explain:['Người hoặc bên cạnh tranh, thi đấu với mình: 竞争对手, 比赛对手.','Còn chỉ người ngang tài ngang sức: 他不是我的对手 = anh ta không địch nổi tôi.'],
   usage:'竞争对手 / 战胜对手 / 挤垮对手 / 强大的对手. Mẫu hay dùng: A 不是 B 的对手 (A kém B, không địch nổi B).',
   collo:['竞争对手','战胜对手','挤垮对手','强大的对手'],
   ex_zh:'可建伟不但没有去挤垮对手，反而还经常帮助三家书店搞一些营销活动。',ex_py:'Kě Jiànwěi búdàn méiyǒu qù jǐkuǎ duìshǒu, fǎn\'ér hái jīngcháng bāngzhù sān jiā shūdiàn gǎo yìxiē yíngxiāo huódòng.',ex_vn:'Nhưng Kiến Vĩ không những không chèn ép đối thủ, trái lại còn thường giúp ba hiệu sách ấy tổ chức một số hoạt động tiếp thị.',
   exList:[
     {zh:'可建伟不但没有去挤垮对手，反而还经常帮助三家书店搞一些营销活动。',py:'Kě Jiànwěi búdàn méiyǒu qù jǐkuǎ duìshǒu, fǎn\'ér hái jīngcháng bāngzhù sān jiā shūdiàn gǎo yìxiē yíngxiāo huódòng.',vn:'Nhưng Kiến Vĩ không những không chèn ép đối thủ, trái lại còn thường giúp ba hiệu sách ấy tổ chức một số hoạt động tiếp thị.'},
     {zh:'对手并不会妨碍我的发展，反而会促进经营。',py:'Duìshǒu bìng bú huì fáng\'ài wǒ de fāzhǎn, fǎn\'ér huì cùjìn jīngyíng.',vn:'Đối thủ chẳng những không cản trở sự phát triển của tôi, trái lại còn thúc đẩy việc kinh doanh.'},
     {zh:'下棋的时候，我从来没赢过爷爷，根本不是他的对手。',py:'Xiàqí de shíhou, wǒ cónglái méi yíngguo yéye, gēnběn bú shì tā de duìshǒu.',vn:'Khi chơi cờ, tôi chưa bao giờ thắng ông, hoàn toàn không phải đối thủ của ông.'}
   ],
   colloFull:[
     {zh:'竞争对手',py:'jìngzhēng duìshǒu',vn:'đối thủ cạnh tranh'},
     {zh:'战胜对手',py:'zhànshèng duìshǒu',vn:'chiến thắng đối thủ'},
     {zh:'挤垮对手',py:'jǐkuǎ duìshǒu',vn:'chèn ép đối thủ đến sập tiệm'},
     {zh:'强大的对手',py:'qiángdà de duìshǒu',vn:'đối thủ mạnh'},
     {zh:'培养对手',py:'péiyǎng duìshǒu',vn:'"nuôi dưỡng" đối thủ'}
   ],
   patterns:[
     {s:'A 不是 B 的对手',m:'A không địch nổi B'},
     {s:'战胜 / 挤垮 / 培养 + 对手',m:'Thắng / đè bẹp / "nuôi" đối thủ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa bao giờ thắng được anh ấy, tôi không phải đối thủ của anh ấy.',answer:'我从来没赢过他，我不是他的对手。',answerPy:'Wǒ cónglái méi yíngguo tā, wǒ bú shì tā de duìshǒu.',
      note:'从来没 + V + 过: chưa từng bao giờ. A 不是 B 的对手 = A kém B.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Đội chúng tôi đã bị một đối thủ rất mạnh đánh bại.',answer:'我们队被一个很强的对手打败了。',answerPy:'Wǒmen duì bèi yí ge hěn qiáng de duìshǒu dǎbài le.',
      note:'Câu 被: chủ ngữ là bên chịu thua, 被 + đối thủ + 打败了.',pair:'被'}
   ]},

  {n:3,zh:'公寓',py:'gōngyù',pos:'Danh từ',vn:'khu nhà ở, chung cư (căn hộ)',hv:'công ngụ',em:'🏢',lesson:1,
   explain:['Toà nhà gồm nhiều căn hộ để ở hoặc cho thuê; 公寓楼 = toà chung cư.','Ở các trường đại học Trung Quốc, 学生公寓 là khu ký túc xá sinh viên.'],
   usage:'Lượng từ theo bảng 词语搭配: 一套 / 一间 / 一所 + 公寓. 套 cho cả căn hộ, 间 cho một phòng, 所 cho cả toà nhà.',
   collo:['一套公寓','一间公寓','一所公寓','公寓楼'],
   ex_zh:'建伟在大学的一座公寓楼里开了一家书店。',ex_py:'Jiànwěi zài dàxué de yí zuò gōngyù lóu li kāile yì jiā shūdiàn.',ex_vn:'Kiến Vĩ mở một hiệu sách trong một toà chung cư của trường đại học.',
   exList:[
     {zh:'建伟在大学的一座公寓楼里开了一家书店。',py:'Jiànwěi zài dàxué de yí zuò gōngyù lóu li kāile yì jiā shūdiàn.',vn:'Kiến Vĩ mở một hiệu sách trong một toà chung cư của trường đại học.'},
     {zh:'我觉得这套公寓不错，大小合适，价钱便宜。',py:'Wǒ juéde zhè tào gōngyù búcuò, dàxiǎo héshì, jiàqian piányi.',vn:'Tôi thấy căn hộ này không tệ, rộng vừa phải, giá lại rẻ.'},
     {zh:'哥哥毕业以后在城里租了一间小公寓。',py:'Gēge bìyè yǐhòu zài chéng li zūle yì jiān xiǎo gōngyù.',vn:'Anh trai tốt nghiệp xong thì thuê một căn hộ nhỏ trong thành phố.'}
   ],
   colloFull:[
     {zh:'一套公寓',py:'yí tào gōngyù',vn:'một căn hộ'},
     {zh:'一间公寓',py:'yì jiān gōngyù',vn:'một phòng (căn hộ nhỏ)'},
     {zh:'一所公寓',py:'yì suǒ gōngyù',vn:'một toà chung cư'},
     {zh:'公寓楼',py:'gōngyù lóu',vn:'toà chung cư'},
     {zh:'学生公寓',py:'xuésheng gōngyù',vn:'ký túc xá sinh viên'}
   ],
   patterns:[
     {s:'一套 / 一间 / 一所 + 公寓',m:'Lượng từ của 公寓'},
     {s:'在 + 公寓楼里 + V',m:'Làm gì trong toà chung cư'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căn hộ này là tôi thuê từ năm ngoái.',answer:'这套公寓是我去年租的。',answerPy:'Zhè tào gōngyù shì wǒ qùnián zū de.',
      note:'是……的 nhấn mạnh thời gian của việc đã xảy ra. Lượng từ của căn hộ là 套.',pair:'是……的'},
     {promptLang:'vi',prompt:'Căn hộ ở thành phố lớn càng ngày càng đắt.',answer:'大城市的公寓越来越贵了。',answerPy:'Dà chéngshì de gōngyù yuè lái yuè guì le.',
      note:'越来越 + tính từ + 了: diễn tả sự thay đổi dần.',pair:'越来越……'}
   ]},

  {n:4,zh:'文具',py:'wénjù',pos:'Danh từ',vn:'đồ dùng văn phòng, văn phòng phẩm',hv:'văn cụ',em:'✏️',lesson:1,
   explain:['Đồ dùng để viết, học, làm việc: bút, thước, vở, tẩy, hộp bút….'],
   usage:'文具店 (cửa hàng văn phòng phẩm), 买 / 卖文具, 一套文具, 文具盒 (hộp bút). Tên từng loại: 铅笔, 橡皮, 尺子, 本子.',
   collo:['文具店','买文具','一套文具','卖文具'],
   ex_zh:'他开了一家书店，顺便卖点儿文具、电池、小日用品等。',ex_py:'Tā kāile yì jiā shūdiàn, shùnbiàn mài diǎnr wénjù, diànchí, xiǎo rìyòngpǐn děng.',ex_vn:'Anh ấy mở một hiệu sách, tiện thể bán thêm ít văn phòng phẩm, pin, đồ dùng lặt vặt hằng ngày.',
   exList:[
     {zh:'他开了一家书店，顺便卖点儿文具、电池、小日用品等。',py:'Tā kāile yì jiā shūdiàn, shùnbiàn mài diǎnr wénjù, diànchí, xiǎo rìyòngpǐn děng.',vn:'Anh ấy mở một hiệu sách, tiện thể bán thêm ít văn phòng phẩm, pin, đồ dùng lặt vặt hằng ngày.'},
     {zh:'开学前，妈妈带我去文具店买了一套新文具。',py:'Kāixué qián, māma dài wǒ qù wénjùdiàn mǎile yí tào xīn wénjù.',vn:'Trước khai giảng, mẹ đưa tôi đến cửa hàng văn phòng phẩm mua một bộ đồ dùng học tập mới.'},
     {zh:'学校门口那家文具店的东西又便宜又好。',py:'Xuéxiào ménkǒu nà jiā wénjùdiàn de dōngxi yòu piányi yòu hǎo.',vn:'Đồ ở cửa hàng văn phòng phẩm trước cổng trường vừa rẻ vừa tốt.'}
   ],
   colloFull:[
     {zh:'文具店',py:'wénjùdiàn',vn:'cửa hàng văn phòng phẩm'},
     {zh:'买文具',py:'mǎi wénjù',vn:'mua đồ dùng học tập'},
     {zh:'一套文具',py:'yí tào wénjù',vn:'một bộ đồ dùng học tập'},
     {zh:'卖文具',py:'mài wénjù',vn:'bán văn phòng phẩm'},
     {zh:'文具盒',py:'wénjùhé',vn:'hộp bút'}
   ],
   patterns:[
     {s:'文具店 / 文具盒',m:'Cửa hàng văn phòng phẩm / hộp bút'},
     {s:'顺便 + 卖 / 买 + 文具',m:'Tiện thể bán / mua văn phòng phẩm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi cứ vào cửa hàng văn phòng phẩm là muốn mua bút mới.',answer:'我一进文具店就想买新笔。',answerPy:'Wǒ yí jìn wénjùdiàn jiù xiǎng mǎi xīn bǐ.',
      note:'一 + V1 + 就 + V2: hễ … là …. Chú ý 一 trước thanh 4 đọc yí.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cửa hàng này không những bán sách mà còn bán văn phòng phẩm.',answer:'这家店不仅卖书，也卖文具。',answerPy:'Zhè jiā diàn bùjǐn mài shū, yě mài wénjù.',
      note:'不仅……也……: nối hai việc cùng chiều, vế sau bổ sung.',pair:'不仅……也……'}
   ]},

  {n:5,zh:'电池',py:'diànchí',pos:'Danh từ',vn:'pin',hv:'điện trì',em:'🔋',lesson:1,
   explain:['Pin, ắc quy — nguồn điện nhỏ cho điện thoại, đồng hồ, điều khiển….'],
   usage:'Lượng từ theo bảng 词语搭配: 一节 / 一块 + 电池. 节 cho pin tiểu (pin AA), 块 cho pin điện thoại, pin dạng tấm. 电池没电了 = hết pin.',
   collo:['一节电池','一块电池','手机电池','换电池'],
   ex_zh:'我的手机电池不行了，得去换一块。',ex_py:'Wǒ de shǒujī diànchí bù xíng le, děi qù huàn yí kuài.',ex_vn:'Pin điện thoại của tôi hỏng rồi, phải đi thay cục khác.',
   exList:[
     {zh:'我的手机电池不行了，得去换一块。',py:'Wǒ de shǒujī diànchí bù xíng le, děi qù huàn yí kuài.',vn:'Pin điện thoại của tôi hỏng rồi, phải đi thay cục khác.'},
     {zh:'妈，我出去买块电池。',py:'Mā, wǒ chūqu mǎi kuài diànchí.',vn:'Mẹ ơi, con ra ngoài mua cục pin.'},
     {zh:'这个遥控器要用两节电池。',py:'Zhège yáokòngqì yào yòng liǎng jié diànchí.',vn:'Cái điều khiển này phải dùng hai viên pin.'}
   ],
   colloFull:[
     {zh:'一节电池',py:'yì jié diànchí',vn:'một viên pin (pin tiểu)'},
     {zh:'一块电池',py:'yí kuài diànchí',vn:'một cục pin'},
     {zh:'手机电池',py:'shǒujī diànchí',vn:'pin điện thoại'},
     {zh:'换电池',py:'huàn diànchí',vn:'thay pin'},
     {zh:'电池没电了',py:'diànchí méi diàn le',vn:'pin hết điện rồi'}
   ],
   patterns:[
     {s:'一节 / 一块 + 电池',m:'Lượng từ của 电池'},
     {s:'电池没电了 / 换电池',m:'Hết pin / thay pin'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Pin điện thoại của tôi bị em trai tháo ra rồi.',answer:'我的手机电池被弟弟拆下来了。',answerPy:'Wǒ de shǒujī diànchí bèi dìdi chāi xiàlai le.',
      note:'Câu 被: vật chịu tác động (电池) làm chủ ngữ.',pair:'被'},
     {promptLang:'vi',prompt:'Bạn thay pin cho cái đồng hồ này giúp tôi nhé.',answer:'你帮我把这块表的电池换了吧。',answerPy:'Nǐ bāng wǒ bǎ zhè kuài biǎo de diànchí huàn le ba.',
      note:'Câu 把: 把 + 电池 + 换了 — xử lý một vật xác định.',pair:'把'}
   ]},

  {n:6,zh:'日用品',py:'rìyòngpǐn',pos:'Danh từ',vn:'đồ dùng hằng ngày',hv:'nhật dụng phẩm',em:'🧴',lesson:1,
   explain:['Đồ dùng trong sinh hoạt hằng ngày: kem đánh răng, khăn mặt, dầu gội, xà phòng, lược… (phần 热身 của sách).'],
   usage:'生活日用品, 小日用品, 买日用品, 日用品商店. Tiếng Việt cũng có từ "đồ nhật dụng".',
   collo:['小日用品','生活日用品','买日用品','日用品商店'],
   ex_zh:'牙膏、毛巾、洗发水都是常见的日用品。',ex_py:'Yágāo, máojīn, xǐfàshuǐ dōu shì chángjiàn de rìyòngpǐn.',ex_vn:'Kem đánh răng, khăn mặt, dầu gội đều là những đồ dùng hằng ngày thường gặp.',
   exList:[
     {zh:'牙膏、毛巾、洗发水都是常见的日用品。',py:'Yágāo, máojīn, xǐfàshuǐ dōu shì chángjiàn de rìyòngpǐn.',vn:'Kem đánh răng, khăn mặt, dầu gội đều là những đồ dùng hằng ngày thường gặp.'},
     {zh:'除了书，我还顺便卖点儿文具、电池、小日用品。',py:'Chúle shū, wǒ hái shùnbiàn mài diǎnr wénjù, diànchí, xiǎo rìyòngpǐn.',vn:'Ngoài sách, tôi còn tiện thể bán thêm ít văn phòng phẩm, pin, đồ dùng lặt vặt.'},
     {zh:'周末我去超市买了一些生活日用品。',py:'Zhōumò wǒ qù chāoshì mǎile yìxiē shēnghuó rìyòngpǐn.',vn:'Cuối tuần tôi đi siêu thị mua một ít đồ dùng sinh hoạt.'}
   ],
   colloFull:[
     {zh:'小日用品',py:'xiǎo rìyòngpǐn',vn:'đồ dùng lặt vặt hằng ngày'},
     {zh:'生活日用品',py:'shēnghuó rìyòngpǐn',vn:'đồ dùng sinh hoạt'},
     {zh:'买日用品',py:'mǎi rìyòngpǐn',vn:'mua đồ dùng hằng ngày'},
     {zh:'日用品商店',py:'rìyòngpǐn shāngdiàn',vn:'cửa hàng đồ dùng hằng ngày'},
     {zh:'常见的日用品',py:'chángjiàn de rìyòngpǐn',vn:'đồ dùng hằng ngày thường gặp'}
   ],
   patterns:[
     {s:'生活 / 小 + 日用品',m:'Đồ dùng sinh hoạt / đồ dùng lặt vặt'},
     {s:'A、B、C 都是日用品',m:'Liệt kê đồ dùng hằng ngày'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chưa bao giờ mua đồ dùng hằng ngày trên mạng.',answer:'我从来没在网上买过日用品。',answerPy:'Wǒ cónglái méi zài wǎng shang mǎiguo rìyòngpǐn.',
      note:'从来没 + (nơi chốn) + V + 过.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Giá đồ dùng hằng ngày càng ngày càng cao.',answer:'日用品的价格越来越高了。',answerPy:'Rìyòngpǐn de jiàgé yuè lái yuè gāo le.',
      note:'越来越 + tính từ + 了.',pair:'越来越……'}
   ]},

  {n:7,zh:'利润',py:'lìrùn',pos:'Danh từ',vn:'lợi nhuận, lãi',hv:'lợi nhuận',em:'💰',lesson:1,
   explain:['Số tiền lãi thu được sau khi trừ chi phí khi kinh doanh.'],
   usage:'利润高 / 低, 获得利润, 利润增长. Từ văn viết, dùng trong kinh doanh; khẩu ngữ hay nói 赚钱. Khác 利益 (lợi ích nói chung).',
   collo:['利润高','获得利润','利润增长','没有多少利润'],
   ex_zh:'虽然每件商品的利润都并不高，但他诚信经营，薄利多销。',ex_py:'Suīrán měi jiàn shāngpǐn de lìrùn dōu bìng bù gāo, dàn tā chéngxìn jīngyíng, bó lì duō xiāo.',ex_vn:'Tuy lợi nhuận trên mỗi món hàng đều không cao, nhưng anh kinh doanh trung thực, lãi ít bán nhiều.',
   exList:[
     {zh:'虽然每件商品的利润都并不高，但他诚信经营，薄利多销。',py:'Suīrán měi jiàn shāngpǐn de lìrùn dōu bìng bù gāo, dàn tā chéngxìn jīngyíng, bó lì duō xiāo.',vn:'Tuy lợi nhuận trên mỗi món hàng đều không cao, nhưng anh kinh doanh trung thực, lãi ít bán nhiều.'},
     {zh:'我们这个是薄利多销，本来就没有多少利润。',py:'Wǒmen zhège shì bó lì duō xiāo, běnlái jiù méiyǒu duōshao lìrùn.',vn:'Hàng chúng tôi là lãi ít bán nhiều, vốn dĩ đã chẳng có bao nhiêu lợi nhuận.'},
     {zh:'今年公司的利润比去年增长了百分之二十。',py:'Jīnnián gōngsī de lìrùn bǐ qùnián zēngzhǎngle bǎi fēn zhī èrshí.',vn:'Lợi nhuận của công ty năm nay tăng 20% so với năm ngoái.'}
   ],
   colloFull:[
     {zh:'利润高',py:'lìrùn gāo',vn:'lợi nhuận cao'},
     {zh:'获得利润',py:'huòdé lìrùn',vn:'thu được lợi nhuận'},
     {zh:'利润增长',py:'lìrùn zēngzhǎng',vn:'lợi nhuận tăng'},
     {zh:'没有多少利润',py:'méiyǒu duōshao lìrùn',vn:'chẳng có bao nhiêu lãi'},
     {zh:'提高利润',py:'tígāo lìrùn',vn:'nâng cao lợi nhuận'}
   ],
   patterns:[
     {s:'利润 + 高 / 低 / 增长',m:'Lợi nhuận cao / thấp / tăng'},
     {s:'获得 / 提高 + 利润',m:'Thu được / nâng cao lợi nhuận'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy lợi nhuận không cao nhưng cửa hàng này buôn bán rất đắt khách.',answer:'虽然利润不高，但是这家店的生意很好。',answerPy:'Suīrán lìrùn bù gāo, dànshì zhè jiā diàn de shēngyi hěn hǎo.',
      note:'Ý chính của bài khoá: 薄利多销 — lãi ít nhưng bán nhiều.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Lợi nhuận của công ty càng ngày càng cao.',answer:'公司的利润越来越高了。',answerPy:'Gōngsī de lìrùn yuè lái yuè gāo le.',
      note:'利润 đi với 高 / 低, không nói 利润很多.',pair:'越来越……'}
   ]},

  {n:8,zh:'诚信',py:'chéngxìn',pos:'Tính từ',vn:'trung thực, giữ chữ tín',hv:'thành tín',em:'🤝',lesson:1,
   explain:['Thành thật và giữ lời hứa — đức tính quan trọng nhất khi làm ăn.','Cũng dùng như danh từ: 讲诚信 (giữ chữ tín), 诚信问题.'],
   usage:'诚信经营 (kinh doanh trung thực), 做人要诚信, 讲诚信. Sách ghi là tính từ, nhưng trong thực tế dùng rất nhiều như danh từ.',
   collo:['诚信经营','讲诚信','做人要诚信','诚信问题'],
   ex_zh:'他诚信经营，薄利多销，使书店生意越来越红火。',ex_py:'Tā chéngxìn jīngyíng, bó lì duō xiāo, shǐ shūdiàn shēngyi yuè lái yuè hónghuo.',ex_vn:'Anh kinh doanh trung thực, lãi ít bán nhiều, khiến việc làm ăn của hiệu sách ngày càng phát đạt.',
   exList:[
     {zh:'他诚信经营，薄利多销，使书店生意越来越红火。',py:'Tā chéngxìn jīngyíng, bó lì duō xiāo, shǐ shūdiàn shēngyi yuè lái yuè hónghuo.',vn:'Anh kinh doanh trung thực, lãi ít bán nhiều, khiến việc làm ăn của hiệu sách ngày càng phát đạt.'},
     {zh:'做生意最重要的是讲诚信。',py:'Zuò shēngyi zuì zhòngyào de shì jiǎng chéngxìn.',vn:'Làm ăn điều quan trọng nhất là giữ chữ tín.'},
     {zh:'他是一个诚信的人，答应的事一定会做到。',py:'Tā shì yí ge chéngxìn de rén, dāying de shì yídìng huì zuòdào.',vn:'Anh ấy là người giữ chữ tín, việc đã hứa nhất định sẽ làm được.'}
   ],
   colloFull:[
     {zh:'诚信经营',py:'chéngxìn jīngyíng',vn:'kinh doanh trung thực'},
     {zh:'讲诚信',py:'jiǎng chéngxìn',vn:'giữ chữ tín'},
     {zh:'做人要诚信',py:'zuò rén yào chéngxìn',vn:'làm người phải trung thực'},
     {zh:'诚信问题',py:'chéngxìn wèntí',vn:'vấn đề chữ tín'},
     {zh:'诚信的商人',py:'chéngxìn de shāngrén',vn:'thương nhân giữ chữ tín'}
   ],
   patterns:[
     {s:'诚信 + 经营',m:'Kinh doanh trung thực'},
     {s:'讲 + 诚信 / 做人要诚信',m:'Giữ chữ tín / làm người phải trung thực'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần kinh doanh trung thực, khách hàng sẽ tin bạn.',answer:'只要诚信经营，客户就会相信你。',answerPy:'Zhǐyào chéngxìn jīngyíng, kèhù jiù huì xiāngxìn nǐ.',
      note:'诚信经营 là cụm của bài khoá. 客户 = khách hàng.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Anh ấy không những giữ chữ tín mà còn rất nhiệt tình.',answer:'他不仅讲诚信，也很热心。',answerPy:'Tā bùjǐn jiǎng chéngxìn, yě hěn rèxīn.',
      note:'讲诚信 (giữ chữ tín) + 热心 (từ mới cùng bài).',pair:'不仅……也……'}
   ]},

  {n:9,zh:'媒体',py:'méitǐ',pos:'Danh từ',vn:'phương tiện truyền thông, báo chí',hv:'môi thể',em:'📺',lesson:1,
   explain:['Các phương tiện truyền thông đại chúng: báo in, đài phát thanh, truyền hình, mạng internet.'],
   usage:'新闻媒体, 社交媒体 (mạng xã hội), 媒体报道 (báo chí đưa tin), 媒体采访. Hay làm định ngữ: 媒体的采访对象.',
   collo:['新闻媒体','社交媒体','媒体报道','媒体采访'],
   ex_zh:'书店生意越来越红火，甚至成为了媒体的采访对象。',ex_py:'Shūdiàn shēngyi yuè lái yuè hónghuo, shènzhì chéngwéile méitǐ de cǎifǎng duìxiàng.',ex_vn:'Việc làm ăn của hiệu sách ngày càng phát đạt, thậm chí còn trở thành đối tượng phỏng vấn của giới truyền thông.',
   exList:[
     {zh:'书店生意越来越红火，甚至成为了媒体的采访对象。',py:'Shūdiàn shēngyi yuè lái yuè hónghuo, shènzhì chéngwéile méitǐ de cǎifǎng duìxiàng.',vn:'Việc làm ăn của hiệu sách ngày càng phát đạt, thậm chí còn trở thành đối tượng phỏng vấn của giới truyền thông.'},
     {zh:'听说你那家书店开得挺红火的，最近都有媒体来采访你了。',py:'Tīngshuō nǐ nà jiā shūdiàn kāi de tǐng hónghuo de, zuìjìn dōu yǒu méitǐ lái cǎifǎng nǐ le.',vn:'Nghe nói hiệu sách của cậu làm ăn phát đạt lắm, gần đây còn có báo chí đến phỏng vấn cậu.'},
     {zh:'现在很多年轻人通过社交媒体了解新闻。',py:'Xiànzài hěn duō niánqīngrén tōngguò shèjiāo méitǐ liǎojiě xīnwén.',vn:'Ngày nay nhiều người trẻ tìm hiểu tin tức qua mạng xã hội.'}
   ],
   colloFull:[
     {zh:'新闻媒体',py:'xīnwén méitǐ',vn:'báo chí, cơ quan truyền thông'},
     {zh:'社交媒体',py:'shèjiāo méitǐ',vn:'mạng xã hội'},
     {zh:'媒体报道',py:'méitǐ bàodào',vn:'báo chí đưa tin'},
     {zh:'媒体采访',py:'méitǐ cǎifǎng',vn:'báo chí phỏng vấn'},
     {zh:'成为媒体的采访对象',py:'chéngwéi méitǐ de cǎifǎng duìxiàng',vn:'trở thành đối tượng phỏng vấn của truyền thông'}
   ],
   patterns:[
     {s:'新闻 / 社交 + 媒体',m:'Báo chí / mạng xã hội'},
     {s:'被媒体报道 / 媒体来采访',m:'Được báo chí đưa tin / báo chí đến phỏng vấn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chuyện này đã được nhiều báo chí đưa tin.',answer:'这件事被很多媒体报道了。',answerPy:'Zhè jiàn shì bèi hěn duō méitǐ bàodào le.',
      note:'被 + 媒体 + 报道: sự việc làm chủ ngữ.',pair:'被'},
     {promptLang:'vi',prompt:'Tin này là tôi đọc được trên mạng xã hội.',answer:'这个消息是我在社交媒体上看到的。',answerPy:'Zhège xiāoxi shì wǒ zài shèjiāo méitǐ shang kàndào de.',
      note:'是……的 nhấn mạnh nơi chốn (在社交媒体上).',pair:'是……的'}
   ]},

  {n:10,zh:'对象',py:'duìxiàng',pos:'Danh từ',vn:'đối tượng, mục tiêu; (khẩu ngữ) người yêu',hv:'đối tượng',em:'🎯',lesson:1,
   explain:['Người hoặc vật mà hành động hướng tới: 采访对象, 研究对象, 调查对象.','Khẩu ngữ: bạn trai / bạn gái, người yêu — 找对象 = tìm người yêu.'],
   usage:'Thường đứng sau một động từ làm định ngữ: 采访对象 / 研究对象 / 服务对象. Chú ý nghĩa khẩu ngữ 找对象, 谈对象 mà tiếng Việt "đối tượng" không có.',
   collo:['采访对象','研究对象','调查对象','找对象'],
   ex_zh:'书店生意越来越红火，甚至成为了媒体的采访对象。',ex_py:'Shūdiàn shēngyi yuè lái yuè hónghuo, shènzhì chéngwéile méitǐ de cǎifǎng duìxiàng.',ex_vn:'Việc làm ăn của hiệu sách ngày càng phát đạt, thậm chí còn trở thành đối tượng phỏng vấn của giới truyền thông.',
   exList:[
     {zh:'书店生意越来越红火，甚至成为了媒体的采访对象。',py:'Shūdiàn shēngyi yuè lái yuè hónghuo, shènzhì chéngwéile méitǐ de cǎifǎng duìxiàng.',vn:'Việc làm ăn của hiệu sách ngày càng phát đạt, thậm chí còn trở thành đối tượng phỏng vấn của giới truyền thông.'},
     {zh:'这次调查的对象是三百名中学生。',py:'Zhè cì diàochá de duìxiàng shì sānbǎi míng zhōngxuéshēng.',vn:'Đối tượng của cuộc điều tra lần này là ba trăm học sinh trung học.'},
     {zh:'姐姐都三十岁了，妈妈天天催她找对象。',py:'Jiějie dōu sānshí suì le, māma tiāntiān cuī tā zhǎo duìxiàng.',vn:'Chị gái đã ba mươi tuổi rồi, mẹ ngày nào cũng giục chị tìm người yêu.'}
   ],
   colloFull:[
     {zh:'采访对象',py:'cǎifǎng duìxiàng',vn:'đối tượng phỏng vấn'},
     {zh:'研究对象',py:'yánjiū duìxiàng',vn:'đối tượng nghiên cứu'},
     {zh:'调查对象',py:'diàochá duìxiàng',vn:'đối tượng điều tra'},
     {zh:'找对象',py:'zhǎo duìxiàng',vn:'tìm người yêu'},
     {zh:'服务对象',py:'fúwù duìxiàng',vn:'đối tượng phục vụ'}
   ],
   patterns:[
     {s:'V + 对象 (采访 / 研究 / 调查 / 服务)',m:'Đối tượng phỏng vấn / nghiên cứu / điều tra / phục vụ'},
     {s:'找对象 / 谈对象',m:'Tìm người yêu / đang yêu (khẩu ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh trai tôi vừa tốt nghiệp là mẹ đã giục anh ấy tìm người yêu.',answer:'哥哥一毕业，妈妈就催他找对象。',answerPy:'Gēge yí bìyè, māma jiù cuī tā zhǎo duìxiàng.',
      note:'Hai chủ ngữ khác nhau: 哥哥一……，妈妈就……. 找对象 là khẩu ngữ.',pair:'一……就……'},
     {promptLang:'vi',prompt:'Đối tượng điều tra lần này là do thầy giáo chọn.',answer:'这次的调查对象是老师选的。',answerPy:'Zhè cì de diàochá duìxiàng shì lǎoshī xuǎn de.',
      note:'是 + người + V + 的: nhấn mạnh người làm.',pair:'是……的'}
   ]},

  {n:11,zh:'营业',py:'yíngyè',pos:'Động từ',vn:'kinh doanh, buôn bán, mở cửa (phục vụ)',hv:'doanh nghiệp',em:'🏪',lesson:1,
   explain:['Cửa hàng, ngân hàng… mở cửa làm ăn, phục vụ khách: 正在营业, 停止营业.'],
   usage:'营业额 (doanh thu), 营业时间 (giờ mở cửa), 24小时营业. BẪY: âm Hán–Việt là "doanh nghiệp" nhưng nghĩa là "mở cửa kinh doanh"; "doanh nghiệp" tiếng Trung là 企业.',
   collo:['营业时间','营业额','24小时营业','停止营业'],
   ex_zh:'三家的营业额加起来还不如他一家高。',ex_py:'Sān jiā de yíngyè\'é jiā qǐlai hái bùrú tā yì jiā gāo.',ex_vn:'Doanh thu của cả ba hiệu cộng lại còn không bằng một mình hiệu của anh.',
   exList:[
     {zh:'三家的营业额加起来还不如他一家高。',py:'Sān jiā de yíngyè\'é jiā qǐlai hái bùrú tā yì jiā gāo.',vn:'Doanh thu của cả ba hiệu cộng lại còn không bằng một mình hiệu của anh.'},
     {zh:'这家超市24小时营业，半夜也能买东西。',py:'Zhè jiā chāoshì èrshísì xiǎoshí yíngyè, bànyè yě néng mǎi dōngxi.',vn:'Siêu thị này mở cửa 24 giờ, nửa đêm cũng mua được đồ.'},
     {zh:'春节期间，银行的营业时间有变化。',py:'Chūnjié qījiān, yínháng de yíngyè shíjiān yǒu biànhuà.',vn:'Trong dịp Tết, giờ làm việc của ngân hàng có thay đổi.'}
   ],
   colloFull:[
     {zh:'营业时间',py:'yíngyè shíjiān',vn:'giờ mở cửa'},
     {zh:'营业额',py:'yíngyè\'é',vn:'doanh thu'},
     {zh:'24小时营业',py:'èrshísì xiǎoshí yíngyè',vn:'mở cửa 24 giờ'},
     {zh:'停止营业',py:'tíngzhǐ yíngyè',vn:'ngừng kinh doanh'},
     {zh:'正常营业',py:'zhèngcháng yíngyè',vn:'mở cửa bình thường'}
   ],
   patterns:[
     {s:'营业 + 时间 / 额',m:'Giờ mở cửa / doanh thu'},
     {s:'(24小时 / 正常 / 停止) + 营业',m:'Mở cửa 24 giờ / bình thường / ngừng kinh doanh'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần cửa hàng còn mở cửa, chúng ta sẽ vào xem.',answer:'只要商店还在营业，我们就进去看看。',answerPy:'Zhǐyào shāngdiàn hái zài yíngyè, wǒmen jiù jìnqu kànkan.',
      note:'在营业 = đang mở cửa. 只要……就…… nêu điều kiện đủ.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Cửa hàng này không những mở cửa 24 giờ mà còn giao hàng tận nhà.',answer:'这家店不仅24小时营业，也送货上门。',answerPy:'Zhè jiā diàn bùjǐn èrshísì xiǎoshí yíngyè, yě sòng huò shàng mén.',
      note:'24小时营业 là cụm cố định. 送货上门 = giao hàng tận nhà.',pair:'不仅……也……'}
   ]},

  {n:12,zh:'额',py:'é',pos:'Danh từ',vn:'số lượng quy định, mức, ngạch',hv:'ngạch',em:'📊',lesson:1,
   explain:['Số lượng (tiền, người) đã được định sẵn: 名额 (suất), 金额 (số tiền), 营业额 (doanh thu).','Thường làm thành phần ghép phía sau, ít đứng một mình.'],
   usage:'Ghép sau danh từ / động từ: 营业额, 销售额, 金额, 名额, 数额. 超额完成 = hoàn thành vượt mức.',
   collo:['营业额','销售额','名额','金额'],
   ex_zh:'三家的营业额加起来还不如他一家高。',ex_py:'Sān jiā de yíngyè\'é jiā qǐlai hái bùrú tā yì jiā gāo.',ex_vn:'Doanh thu của cả ba hiệu cộng lại còn không bằng một mình hiệu của anh.',
   exList:[
     {zh:'三家的营业额加起来还不如他一家高。',py:'Sān jiā de yíngyè\'é jiā qǐlai hái bùrú tā yì jiā gāo.',vn:'Doanh thu của cả ba hiệu cộng lại còn không bằng một mình hiệu của anh.'},
     {zh:'这次去北京学习的名额只有五个。',py:'Zhè cì qù Běijīng xuéxí de míng\'é zhǐ yǒu wǔ ge.',vn:'Suất đi Bắc Kinh học lần này chỉ có năm suất.'},
     {zh:'今年的销售额比去年高了很多。',py:'Jīnnián de xiāoshòu\'é bǐ qùnián gāole hěn duō.',vn:'Doanh số năm nay cao hơn năm ngoái nhiều.'}
   ],
   colloFull:[
     {zh:'营业额',py:'yíngyè\'é',vn:'doanh thu'},
     {zh:'销售额',py:'xiāoshòu\'é',vn:'doanh số bán hàng'},
     {zh:'名额',py:'míng\'é',vn:'số suất, chỉ tiêu'},
     {zh:'金额',py:'jīn\'é',vn:'số tiền'},
     {zh:'超额完成',py:'chāo\'é wánchéng',vn:'hoàn thành vượt mức'}
   ],
   patterns:[
     {s:'营业 / 销售 + 额',m:'Doanh thu / doanh số'},
     {s:'名额 + 有限 / 只有……个',m:'Số suất có hạn / chỉ có … suất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Doanh thu của cửa hàng càng ngày càng cao.',answer:'这家店的营业额越来越高了。',answerPy:'Zhè jiā diàn de yíngyè\'é yuè lái yuè gāo le.',
      note:'营业额 đi với 高 / 低.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Suất đi du học đã bị bạn ấy giành mất rồi.',answer:'出国学习的名额被他抢走了。',answerPy:'Chūguó xuéxí de míng\'é bèi tā qiǎngzǒu le.',
      note:'名额 = suất, chỉ tiêu. Câu 被 + 抢走了.',pair:'被'}
   ]},

  {n:13,zh:'不如',py:'bùrú',pos:'Động từ',vn:'không bằng, thua kém; chi bằng',hv:'bất như',em:'⚖️',lesson:1,
   explain:['Động từ, biểu thị "so không bằng": A 不如 B (+ tính từ) = A kém B.','Còn dùng để đề nghị một lựa chọn tốt hơn: ……，不如…… = chi bằng, thà … còn hơn.'],
   usage:'A 不如 B + tính từ mang nghĩa tích cực (好, 高, 快). ✗ A 不如 B 差. Có thể kết thúc câu ngay sau B: 我的发音不如她. Không dùng chung với 比.',
   collo:['还不如','不如以前','求人不如求己','不如出去走走'],
   ex_zh:'三家的营业额加起来还不如他一家高。',ex_py:'Sān jiā de yíngyè\'é jiā qǐlai hái bùrú tā yì jiā gāo.',ex_vn:'Doanh thu của cả ba hiệu cộng lại còn không bằng một mình hiệu của anh.',
   exList:[
     {zh:'三家的营业额加起来还不如他一家高。',py:'Sān jiā de yíngyè\'é jiā qǐlai hái bùrú tā yì jiā gāo.',vn:'Doanh thu của cả ba hiệu cộng lại còn không bằng một mình hiệu của anh.'},
     {zh:'求人不如求己。',py:'Qiú rén bùrú qiú jǐ.',vn:'Nhờ người không bằng tự mình làm.'},
     {zh:'今天阳光真好，在房间睡觉不如出去走走。',py:'Jīntiān yángguāng zhēn hǎo, zài fángjiān shuìjiào bùrú chūqu zǒuzou.',vn:'Hôm nay nắng đẹp thật, ngủ trong phòng chi bằng ra ngoài đi dạo.'}
   ],
   colloFull:[
     {zh:'还不如',py:'hái bùrú',vn:'còn không bằng'},
     {zh:'不如以前',py:'bùrú yǐqián',vn:'không bằng trước đây'},
     {zh:'求人不如求己',py:'qiú rén bùrú qiú jǐ',vn:'nhờ người không bằng tự lo'},
     {zh:'不如出去走走',py:'bùrú chūqu zǒuzou',vn:'chi bằng ra ngoài đi dạo'},
     {zh:'不如他一家高',py:'bùrú tā yì jiā gāo',vn:'không cao bằng một mình hiệu của anh ấy'}
   ],
   patterns:[
     {s:'A + 不如 + B (+ Adj tích cực)',m:'A không bằng B'},
     {s:'……，不如 + đề nghị',m:'…, chi bằng …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi chạy còn thua cả em trai.',answer:'我跑得连弟弟都不如。',answerPy:'Wǒ pǎo de lián dìdi dōu bùrú.',
      note:'连 + B + 都不如: ngay cả B cũng không bằng — nhấn mạnh mức kém.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Tuy thành tích vẫn tốt nhưng sức khoẻ ông ấy không bằng trước đây nữa.',answer:'虽然成绩还不错，但是他的身体不如以前了。',answerPy:'Suīrán chéngjì hái búcuò, dànshì tā de shēntǐ bùrú yǐqián le.',
      note:'不如以前了: kết thúc câu ngay sau 以前, không cần tính từ.',pair:'虽然……但是……'}
   ]},

  {n:14,zh:'干脆',py:'gāncuì',pos:'Phó từ / Tính từ',vn:'dứt khoát, cứ (thế mà làm); thẳng thắn, gọn gàng',hv:'can thuý',em:'✂️',lesson:1,
   explain:['Phó từ (nghĩa trong bảng 生词): đơn giản, quả quyết mà làm luôn một việc — "thôi thì cứ…, dứt khoát…". Thường đưa ra một cách giải quyết triệt để hơn: 干脆放弃, 干脆把……挤垮.','Tính từ: nói năng, làm việc gọn gàng, dứt khoát, không do dự: 他这人很干脆, 答应得很干脆.'],
   usage:'Phó từ: 干脆 + V (đứng trước động từ, thường trước 把 / 不 / 别): 干脆不去了, 干脆把它卖了. Tính từ: 很干脆, V + 得很干脆, 干脆利落. Khẩu ngữ, rất hay dùng khi khuyên hoặc tự quyết.',
   collo:['干脆放弃','干脆不去了','答应得很干脆','说话干脆'],
   ex_zh:'这时，许多亲朋好友便建议他干脆把另三家书店挤垮，垄断这个市场。',ex_py:'Zhè shí, xǔduō qīnpéng hǎoyǒu biàn jiànyì tā gāncuì bǎ lìng sān jiā shūdiàn jǐkuǎ, lǒngduàn zhège shìchǎng.',ex_vn:'Lúc này, nhiều người thân bạn bè liền khuyên anh dứt khoát chèn cho ba hiệu sách kia sập tiệm, độc chiếm thị trường này.',
   exList:[
     {zh:'这时，许多亲朋好友便建议他干脆把另三家书店挤垮，垄断这个市场。',py:'Zhè shí, xǔduō qīnpéng hǎoyǒu biàn jiànyì tā gāncuì bǎ lìng sān jiā shūdiàn jǐkuǎ, lǒngduàn zhège shìchǎng.',vn:'Lúc này, nhiều người thân bạn bè liền khuyên anh dứt khoát chèn cho ba hiệu sách kia sập tiệm, độc chiếm thị trường này.'},
     {zh:'我已经试了六次了，还是不行，我看我干脆放弃好了。',py:'Wǒ yǐjīng shìle liù cì le, háishi bù xíng, wǒ kàn wǒ gāncuì fàngqì hǎo le.',vn:'Tôi đã thử sáu lần rồi mà vẫn không được, tôi thấy thôi dứt khoát bỏ cho xong.'},
     {zh:'我求他帮忙，他答应得很干脆。',py:'Wǒ qiú tā bāngmáng, tā dāying de hěn gāncuì.',vn:'Tôi nhờ anh ấy giúp, anh ấy nhận lời rất dứt khoát.'}
   ],
   colloFull:[
     {zh:'干脆放弃',py:'gāncuì fàngqì',vn:'dứt khoát bỏ luôn'},
     {zh:'干脆不去了',py:'gāncuì bú qù le',vn:'thôi không đi nữa'},
     {zh:'答应得很干脆',py:'dāying de hěn gāncuì',vn:'nhận lời rất dứt khoát'},
     {zh:'说话干脆',py:'shuōhuà gāncuì',vn:'nói năng dứt khoát'},
     {zh:'干脆利落',py:'gāncuì lìluo',vn:'gọn gàng dứt khoát'}
   ],
   patterns:[
     {s:'(……，) 干脆 + V / 把……V / 不 + V',m:'Thôi thì dứt khoát làm luôn …'},
     {s:'S + 很干脆 / V + 得很干脆',m:'(Người / cách làm) rất dứt khoát'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mưa to quá, chúng ta dứt khoát ở nhà xem phim đi.',answer:'雨太大了，我们干脆在家看电影吧。',answerPy:'Yǔ tài dà le, wǒmen gāncuì zài jiā kàn diànyǐng ba.',
      note:'干脆 đứng trước cụm động từ, đưa ra cách giải quyết gọn nhất. 太……了 nêu lý do.',pair:'太……了'},
     {promptLang:'vi',prompt:'Chiếc xe đạp cũ này sửa mấy lần vẫn hỏng, dứt khoát bán nó đi.',answer:'这辆旧自行车修了几次还是坏，干脆把它卖了吧。',answerPy:'Zhè liàng jiù zìxíngchē xiūle jǐ cì háishi huài, gāncuì bǎ tā mài le ba.',
      note:'干脆 + 把 + 它 + 卖了: 干脆 đứng TRƯỚC 把.',pair:'把'}
   ]},

  {n:15,zh:'挤',py:'jǐ',pos:'Động từ',vn:'ép, bóp, chen lấn; (tính từ) chật chội',hv:'tễ',em:'🚇',lesson:1,
   explain:['Dùng sức chen qua đám đông: 挤上车, 挤进去.','Bóp, nặn cho thứ gì đó ra khỏi lỗ nhỏ: 挤牙膏. Người / việc dồn sát vào nhau: 事情挤在一起. Còn có nghĩa chèn ép, loại trừ: 挤垮对手.','Tính từ: chỗ nhỏ mà người, vật nhiều — 车上太挤了.'],
   usage:'挤 + 上 / 进 / 出 / 满 / 垮 (bổ ngữ). Tính từ: 很挤, 太挤了, 挤得满头大汗. Phân biệt với 拥挤 (xem phần 词语辨析): 挤 thiên về động tác, khẩu ngữ; 拥挤 làm được chủ ngữ, tân ngữ.',
   collo:['挤公交车','挤牙膏','挤上车','挤垮对手','太挤了'],
   ex_zh:'坐车的人太多了，我挤了半天才挤上车。',ex_py:'Zuò chē de rén tài duō le, wǒ jǐle bàntiān cái jǐ shàng chē.',ex_vn:'Người đi xe đông quá, tôi chen mãi mới lên được xe.',
   exList:[
     {zh:'坐车的人太多了，我挤了半天才挤上车。',py:'Zuò chē de rén tài duō le, wǒ jǐle bàntiān cái jǐ shàng chē.',vn:'Người đi xe đông quá, tôi chen mãi mới lên được xe.'},
     {zh:'牙膏用完了，已经挤不出来了。',py:'Yágāo yòngwán le, yǐjīng jǐ bu chūlái le.',vn:'Kem đánh răng dùng hết rồi, bóp không ra nữa.'},
     {zh:'没办法，路上太堵，地铁又挤。',py:'Méi bànfǎ, lù shang tài dǔ, dìtiě yòu jǐ.',vn:'Hết cách, đường thì tắc quá, tàu điện ngầm lại chật.'}
   ],
   colloFull:[
     {zh:'挤公交车',py:'jǐ gōngjiāochē',vn:'chen chúc đi xe buýt'},
     {zh:'挤牙膏',py:'jǐ yágāo',vn:'bóp kem đánh răng'},
     {zh:'挤上车',py:'jǐ shàng chē',vn:'chen lên xe'},
     {zh:'挤垮对手',py:'jǐkuǎ duìshǒu',vn:'chèn cho đối thủ sập tiệm'},
     {zh:'太挤了',py:'tài jǐ le',vn:'chật quá'}
   ],
   patterns:[
     {s:'挤 + 上 / 进 / 出 / 满 / 垮',m:'Chen lên / chen vào / bóp ra / dồn kín / chèn sập'},
     {s:'N + 太挤了 / 挤得 + mức độ',m:'(Nơi nào) chật quá / chen đến mức …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tàu điện ngầm càng ngày càng chật.',answer:'地铁越来越挤了。',answerPy:'Dìtiě yuè lái yuè jǐ le.',
      note:'挤 làm tính từ sau 越来越.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Tuần này tất cả các bài kiểm tra đều bị dồn vào cùng một ngày.',answer:'这个星期所有的考试都被挤在同一天了。',answerPy:'Zhège xīngqī suǒyǒu de kǎoshì dōu bèi jǐ zài tóng yì tiān le.',
      note:'挤在 + thời gian: việc dồn vào cùng một lúc (nghĩa 4 trong bảng 辨析).',pair:'被'}
   ]},

  {n:16,zh:'垮',py:'kuǎ',pos:'Động từ',vn:'sập, sụp đổ, suy sụp',hv:'khoa',em:'🏚️',lesson:1,
   explain:['Sụp đổ, đổ sập (nhà, cầu); nghĩa bóng: thất bại hoàn toàn, suy sụp (công ty, sức khoẻ).','Rất hay làm bổ ngữ kết quả: 挤垮, 压垮, 累垮, 打垮.'],
   usage:'V + 垮: 挤垮对手 (chèn cho sập), 累垮了 (mệt gục), 压垮 (đè sập), 打垮 (đánh bại hoàn toàn). Dùng một mình: 房子垮了, 公司垮了.',
   collo:['挤垮','累垮了','压垮','公司垮了'],
   ex_zh:'可建伟不但没有去挤垮对手，反而还经常帮助三家书店。',ex_py:'Kě Jiànwěi búdàn méiyǒu qù jǐkuǎ duìshǒu, fǎn\'ér hái jīngcháng bāngzhù sān jiā shūdiàn.',ex_vn:'Nhưng Kiến Vĩ không những không chèn cho đối thủ sập tiệm, trái lại còn thường giúp đỡ ba hiệu sách ấy.',
   exList:[
     {zh:'可建伟不但没有去挤垮对手，反而还经常帮助三家书店。',py:'Kě Jiànwěi búdàn méiyǒu qù jǐkuǎ duìshǒu, fǎn\'ér hái jīngcháng bāngzhù sān jiā shūdiàn.',vn:'Nhưng Kiến Vĩ không những không chèn cho đối thủ sập tiệm, trái lại còn thường giúp đỡ ba hiệu sách ấy.'},
     {zh:'那两家店生意都那么差，你干吗不挤垮他们算了？',py:'Nà liǎng jiā diàn shēngyi dōu nàme chà, nǐ gànmá bù jǐkuǎ tāmen suàn le?',vn:'Hai cửa hàng kia làm ăn tệ thế, sao cậu không chèn cho sập luôn cho xong?'},
     {zh:'他每天工作十几个小时，身体终于累垮了。',py:'Tā měi tiān gōngzuò shí jǐ ge xiǎoshí, shēntǐ zhōngyú lèikuǎ le.',vn:'Anh ấy mỗi ngày làm việc mười mấy tiếng, cuối cùng cơ thể kiệt sức gục ngã.'}
   ],
   colloFull:[
     {zh:'挤垮',py:'jǐkuǎ',vn:'chèn ép cho sập'},
     {zh:'累垮了',py:'lèikuǎ le',vn:'mệt gục, kiệt sức'},
     {zh:'压垮',py:'yākuǎ',vn:'đè sập'},
     {zh:'公司垮了',py:'gōngsī kuǎ le',vn:'công ty sụp đổ'},
     {zh:'打垮对手',py:'dǎkuǎ duìshǒu',vn:'đánh bại hoàn toàn đối thủ'}
   ],
   patterns:[
     {s:'V (挤 / 累 / 压 / 打) + 垮',m:'… đến mức sụp đổ (bổ ngữ kết quả)'},
     {s:'N + 垮了',m:'… sập rồi / sụp đổ rồi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cửa hàng nhỏ đó đã bị siêu thị lớn chèn cho sập tiệm.',answer:'那家小店被大超市挤垮了。',answerPy:'Nà jiā xiǎo diàn bèi dà chāoshì jǐkuǎ le.',
      note:'被 + tác nhân + 挤垮了: 垮 là bổ ngữ kết quả.',pair:'被'},
     {promptLang:'vi',prompt:'Đừng học đến khuya quá, cẩn thận kẻo mệt gục đấy.',answer:'别学到太晚了，小心把身体累垮了。',answerPy:'Bié xué dào tài wǎn le, xiǎoxīn bǎ shēntǐ lèikuǎ le.',
      note:'把 + 身体 + 累垮了: kết quả xấu của việc làm quá sức.',pair:'把'}
   ]},

  {n:17,zh:'垄断',py:'lǒngduàn',pos:'Động từ',vn:'giữ độc quyền, lũng đoạn',hv:'lũng đoạn',em:'👑',lesson:1,
   explain:['Một doanh nghiệp / một người nắm giữ toàn bộ thị trường, không cho người khác cạnh tranh.','Cũng làm danh từ: 反垄断 (chống độc quyền), 形成垄断.'],
   usage:'垄断 + 市场 / 行业 / 资源. Nghĩa xấu: làm hại người tiêu dùng, khiến giá cao. Tiếng Việt "lũng đoạn" mang nghĩa rất tiêu cực (thao túng), 垄断 trong kinh tế học trung tính hơn — "độc quyền".',
   collo:['垄断市场','垄断行业','打破垄断','形成垄断'],
   ex_zh:'亲朋好友建议他干脆把另三家书店挤垮，垄断这个市场。',ex_py:'Qīnpéng hǎoyǒu jiànyì tā gāncuì bǎ lìng sān jiā shūdiàn jǐkuǎ, lǒngduàn zhège shìchǎng.',ex_vn:'Người thân bạn bè khuyên anh dứt khoát chèn cho ba hiệu sách kia sập, độc chiếm thị trường này.',
   exList:[
     {zh:'亲朋好友建议他干脆把另三家书店挤垮，垄断这个市场。',py:'Qīnpéng hǎoyǒu jiànyì tā gāncuì bǎ lìng sān jiā shūdiàn jǐkuǎ, lǒngduàn zhège shìchǎng.',vn:'Người thân bạn bè khuyên anh dứt khoát chèn cho ba hiệu sách kia sập, độc chiếm thị trường này.'},
     {zh:'一家公司垄断了市场，价格就很难降下来。',py:'Yì jiā gōngsī lǒngduànle shìchǎng, jiàgé jiù hěn nán jiàng xialai.',vn:'Một công ty độc chiếm thị trường thì giá cả rất khó giảm xuống.'},
     {zh:'新公司的出现打破了这个行业的垄断。',py:'Xīn gōngsī de chūxiàn dǎpòle zhège hángyè de lǒngduàn.',vn:'Sự xuất hiện của công ty mới đã phá vỡ thế độc quyền của ngành này.'}
   ],
   colloFull:[
     {zh:'垄断市场',py:'lǒngduàn shìchǎng',vn:'độc chiếm thị trường'},
     {zh:'垄断行业',py:'lǒngduàn hángyè',vn:'độc quyền một ngành'},
     {zh:'打破垄断',py:'dǎpò lǒngduàn',vn:'phá thế độc quyền'},
     {zh:'形成垄断',py:'xíngchéng lǒngduàn',vn:'hình thành độc quyền'},
     {zh:'反垄断',py:'fǎn lǒngduàn',vn:'chống độc quyền'}
   ],
   patterns:[
     {s:'垄断 + 市场 / 行业 / 资源',m:'Độc chiếm thị trường / ngành / tài nguyên'},
     {s:'打破 / 形成 + 垄断',m:'Phá vỡ / hình thành thế độc quyền'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thị trường này đã bị hai công ty lớn độc chiếm.',answer:'这个市场被两家大公司垄断了。',answerPy:'Zhège shìchǎng bèi liǎng jiā dà gōngsī lǒngduàn le.',
      note:'被 + chủ thể + 垄断了: thị trường làm chủ ngữ.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần có cạnh tranh thì không thể hình thành độc quyền.',answer:'只要有竞争，就不会形成垄断。',answerPy:'Zhǐyào yǒu jìngzhēng, jiù bú huì xíngchéng lǒngduàn.',
      note:'形成垄断: 垄断 làm danh từ.',pair:'只要……就……'}
   ]},

  {n:18,zh:'倒闭',py:'dǎobì',pos:'Động từ',vn:'đóng cửa hẳn, phá sản, sập tiệm',hv:'đảo bế',em:'🔒',lesson:1,
   explain:['Cửa hàng, công ty, nhà máy làm ăn thua lỗ đến mức phải đóng cửa, ngừng hoạt động hẳn.'],
   usage:'(公司 / 工厂 / 书店) + 倒闭. Hay đi với 快要 / 面临 / 差点儿: 快要倒闭的书店, 面临倒闭. Khác 关门: 关门 có thể chỉ đóng cửa cuối ngày; 倒闭 là không mở lại nữa.',
   collo:['快要倒闭','面临倒闭','公司倒闭','工厂倒闭'],
   ex_zh:'对于一家快要倒闭的书店，他还主动热心地借给其资金。',ex_py:'Duìyú yì jiā kuàiyào dǎobì de shūdiàn, tā hái zhǔdòng rèxīn de jiè gěi qí zījīn.',ex_vn:'Với một hiệu sách sắp phải đóng cửa, anh còn chủ động nhiệt tình cho họ vay vốn.',
   exList:[
     {zh:'对于一家快要倒闭的书店，他还主动热心地借给其资金。',py:'Duìyú yì jiā kuàiyào dǎobì de shūdiàn, tā hái zhǔdòng rèxīn de jiè gěi qí zījīn.',vn:'Với một hiệu sách sắp phải đóng cửa, anh còn chủ động nhiệt tình cho họ vay vốn.'},
     {zh:'由于经营不好，那家工厂去年倒闭了。',py:'Yóuyú jīngyíng bù hǎo, nà jiā gōngchǎng qùnián dǎobì le.',vn:'Do kinh doanh kém, nhà máy đó năm ngoái đã phá sản.'},
     {zh:'网上书店越来越多，很多小书店面临倒闭。',py:'Wǎng shang shūdiàn yuè lái yuè duō, hěn duō xiǎo shūdiàn miànlín dǎobì.',vn:'Hiệu sách trên mạng ngày càng nhiều, nhiều hiệu sách nhỏ đứng trước nguy cơ đóng cửa.'}
   ],
   colloFull:[
     {zh:'快要倒闭',py:'kuàiyào dǎobì',vn:'sắp phá sản'},
     {zh:'面临倒闭',py:'miànlín dǎobì',vn:'đứng trước nguy cơ phá sản'},
     {zh:'公司倒闭',py:'gōngsī dǎobì',vn:'công ty phá sản'},
     {zh:'工厂倒闭',py:'gōngchǎng dǎobì',vn:'nhà máy đóng cửa'},
     {zh:'差点儿倒闭',py:'chàdiǎnr dǎobì',vn:'suýt phá sản'}
   ],
   patterns:[
     {s:'(快要 / 面临 / 差点儿) + 倒闭',m:'Sắp / đứng trước / suýt phá sản'},
     {s:'快要倒闭的 + N',m:'… sắp đóng cửa (định ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy công ty suýt phá sản nhưng anh ấy chưa bao giờ bỏ cuộc.',answer:'虽然公司差点儿倒闭，但是他从来没放弃过。',answerPy:'Suīrán gōngsī chàdiǎnr dǎobì, dànshì tā cónglái méi fàngqìguo.',
      note:'差点儿倒闭 = suýt nữa phá sản (thực tế chưa).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Hiệu sách nhỏ trước cổng trường đã đóng cửa từ tháng trước.',answer:'学校门口的小书店是上个月倒闭的。',answerPy:'Xuéxiào ménkǒu de xiǎo shūdiàn shì shàng ge yuè dǎobì de.',
      note:'是……的 nhấn mạnh thời gian của việc đã xảy ra.',pair:'是……的'}
   ]},

  {n:19,zh:'热心',py:'rèxīn',pos:'Tính từ',vn:'nhiệt tình, sốt sắng',hv:'nhiệt tâm',em:'❤️',lesson:1,
   explain:['Có lòng nhiệt tình, sẵn lòng giúp người khác, hăng hái với việc chung.'],
   usage:'热心 + 地 + V (热心地帮助), 对 + việc / người + 很热心, 热心人 (người tốt bụng). Gần với 热情 nhưng 热心 nhấn mạnh sẵn lòng GIÚP, 热情 nhấn mạnh thái độ niềm nở.',
   collo:['热心地帮助','热心人','对工作很热心','热心公益'],
   ex_zh:'他还主动热心地借给其资金，想办法让他继续经营下去。',ex_py:'Tā hái zhǔdòng rèxīn de jiè gěi qí zījīn, xiǎng bànfǎ ràng tā jìxù jīngyíng xiaqu.',ex_vn:'Anh còn chủ động nhiệt tình cho họ vay vốn, tìm cách giúp hiệu sách tiếp tục kinh doanh.',
   exList:[
     {zh:'他还主动热心地借给其资金，想办法让他继续经营下去。',py:'Tā hái zhǔdòng rèxīn de jiè gěi qí zījīn, xiǎng bànfǎ ràng tā jìxù jīngyíng xiaqu.',vn:'Anh còn chủ động nhiệt tình cho họ vay vốn, tìm cách giúp hiệu sách tiếp tục kinh doanh.'},
     {zh:'嗯，房东看起来也很热心。',py:'Ǹg, fángdōng kàn qilai yě hěn rèxīn.',vn:'Ừ, chủ nhà trông cũng rất nhiệt tình.'},
     {zh:'我们班长是个热心人，谁有困难她都愿意帮忙。',py:'Wǒmen bānzhǎng shì ge rèxīn rén, shéi yǒu kùnnan tā dōu yuànyì bāngmáng.',vn:'Lớp trưởng lớp tôi là người tốt bụng, ai gặp khó khăn bạn ấy cũng sẵn lòng giúp.'}
   ],
   colloFull:[
     {zh:'热心地帮助',py:'rèxīn de bāngzhù',vn:'nhiệt tình giúp đỡ'},
     {zh:'热心人',py:'rèxīn rén',vn:'người nhiệt tình, tốt bụng'},
     {zh:'对工作很热心',py:'duì gōngzuò hěn rèxīn',vn:'rất nhiệt tình với công việc'},
     {zh:'热心公益',py:'rèxīn gōngyì',vn:'nhiệt tình với việc công ích'},
     {zh:'热心的邻居',py:'rèxīn de línjū',vn:'người hàng xóm nhiệt tình'}
   ],
   patterns:[
     {s:'热心地 + V',m:'Nhiệt tình làm gì'},
     {s:'对 + N + 很热心',m:'Rất nhiệt tình với …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hàng xóm nhà tôi không những nhiệt tình mà còn rất hài hước.',answer:'我家的邻居不仅很热心，也很幽默。',answerPy:'Wǒ jiā de línjū bùjǐn hěn rèxīn, yě hěn yōumò.',
      note:'Hai tính từ nối bằng 不仅……也…….',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Người đó nhiệt tình đưa tôi đến tận bến xe.',answer:'那个人热心地把我送到了车站。',answerPy:'Nà ge rén rèxīn de bǎ wǒ sòngdàole chēzhàn.',
      note:'热心地 + 把 + tân ngữ + V + 到 + nơi chốn.',pair:'把'}
   ]},

  {n:20,zh:'资金',py:'zījīn',pos:'Danh từ',vn:'tiền vốn, nguồn vốn',hv:'tư kim',em:'💵',lesson:1,
   explain:['Tiền dùng để kinh doanh, xây dựng, thực hiện một dự án.'],
   usage:'Bảng 词语搭配: 资金 + 不足 / 紧张 (thiếu vốn, vốn eo hẹp). Còn: 筹集资金 (huy động vốn), 提供资金, 资金支持. Văn viết, dùng trong kinh tế; khẩu ngữ hay nói 钱.',
   collo:['资金不足','资金紧张','提供资金','资金支持'],
   ex_zh:'对于一家快要倒闭的书店，他还主动热心地借给其资金。',ex_py:'Duìyú yì jiā kuàiyào dǎobì de shūdiàn, tā hái zhǔdòng rèxīn de jiè gěi qí zījīn.',ex_vn:'Với một hiệu sách sắp phải đóng cửa, anh còn chủ động nhiệt tình cho họ vay vốn.',
   exList:[
     {zh:'对于一家快要倒闭的书店，他还主动热心地借给其资金。',py:'Duìyú yì jiā kuàiyào dǎobì de shūdiàn, tā hái zhǔdòng rèxīn de jiè gěi qí zījīn.',vn:'Với một hiệu sách sắp phải đóng cửa, anh còn chủ động nhiệt tình cho họ vay vốn.'},
     {zh:'这次活动，学校为我们提供了资金支持。',py:'Zhè cì huódòng, xuéxiào wèi wǒmen tígōngle zījīn zhīchí.',vn:'Hoạt động lần này, nhà trường đã hỗ trợ kinh phí cho chúng tôi.'},
     {zh:'公司刚开始的时候资金很紧张。',py:'Gōngsī gāng kāishǐ de shíhou zījīn hěn jǐnzhāng.',vn:'Lúc công ty mới thành lập, vốn rất eo hẹp.'}
   ],
   colloFull:[
     {zh:'资金不足',py:'zījīn bùzú',vn:'thiếu vốn'},
     {zh:'资金紧张',py:'zījīn jǐnzhāng',vn:'vốn eo hẹp'},
     {zh:'提供资金',py:'tígōng zījīn',vn:'cung cấp vốn'},
     {zh:'资金支持',py:'zījīn zhīchí',vn:'hỗ trợ kinh phí'},
     {zh:'筹集资金',py:'chóují zījīn',vn:'huy động vốn'}
   ],
   patterns:[
     {s:'资金 + 不足 / 紧张',m:'Thiếu vốn / vốn eo hẹp (bảng 词语搭配)'},
     {s:'为 + ai + 提供资金 (支持)',m:'Cung cấp vốn / hỗ trợ kinh phí cho ai'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu không phải vì thiếu vốn, chúng tôi đã mở thêm một cửa hàng.',answer:'要不是资金不足，我们早就再开一家店了。',answerPy:'Yàobúshì zījīn bùzú, wǒmen zǎo jiù zài kāi yì jiā diàn le.',
      note:'资金不足 là cụm của bảng 词语搭配. 要不是 = nếu không phải vì.',pair:'要不是……'},
     {promptLang:'vi',prompt:'Kinh phí của hoạt động này là do nhà trường cung cấp.',answer:'这次活动的资金是学校提供的。',answerPy:'Zhè cì huódòng de zījīn shì xuéxiào tígōng de.',
      note:'是 + người + V + 的: nhấn mạnh ai cung cấp.',pair:'是……的'}
   ]},

  {n:21,zh:'傻',py:'shǎ',pos:'Tính từ',vn:'dại dột, ngốc nghếch, đần',hv:'xoạ',em:'🤪',lesson:1,
   explain:['Ngốc, kém thông minh; làm việc thiệt cho mình mà không biết tính toán.','Còn dùng thân mật, trách yêu: 傻孩子, 别说傻话.'],
   usage:'你怎么这么傻？(sao cậu dại thế?), 傻子 (thằng ngốc), 说傻话, 傻笑, 吓傻了 (sợ ngây người). Nói người khác 傻 có thể xúc phạm; dùng cẩn thận.',
   collo:['这么傻','说傻话','傻笑','吓傻了'],
   ex_zh:'有人问他：“你怎么这么傻？就让他们倒霉，不好吗？！”',ex_py:'Yǒu rén wèn tā: "Nǐ zěnme zhème shǎ? Jiù ràng tāmen dǎoméi, bù hǎo ma?!"',ex_vn:'Có người hỏi anh: "Sao anh dại thế? Cứ để bọn họ xui xẻo, chẳng tốt sao?!"',
   exList:[
     {zh:'有人问他：“你怎么这么傻？就让他们倒霉，不好吗？！”',py:'Yǒu rén wèn tā: "Nǐ zěnme zhème shǎ? Jiù ràng tāmen dǎoméi, bù hǎo ma?!"',vn:'Có người hỏi anh: "Sao anh dại thế? Cứ để bọn họ xui xẻo, chẳng tốt sao?!"'},
     {zh:'他乐观得有点儿过分了，整天笑得跟傻子似的。',py:'Tā lèguān de yǒudiǎnr guòfèn le, zhěngtiān xiào de gēn shǎzi shìde.',vn:'Nó lạc quan hơi quá mức, cả ngày cười như thằng ngốc.'},
     {zh:'傻孩子，别说傻话了，妈妈永远支持你。',py:'Shǎ háizi, bié shuō shǎhuà le, māma yǒngyuǎn zhīchí nǐ.',vn:'Con ngốc, đừng nói linh tinh nữa, mẹ luôn ủng hộ con.'}
   ],
   colloFull:[
     {zh:'这么傻',py:'zhème shǎ',vn:'dại thế này'},
     {zh:'说傻话',py:'shuō shǎhuà',vn:'nói điều ngốc nghếch'},
     {zh:'傻笑',py:'shǎxiào',vn:'cười ngây ngô'},
     {zh:'吓傻了',py:'xiàshǎ le',vn:'sợ đến ngây người'},
     {zh:'傻孩子',py:'shǎ háizi',vn:'đứa trẻ ngốc (trách yêu)'}
   ],
   patterns:[
     {s:'你怎么这么傻？',m:'Sao cậu dại thế? (trách)'},
     {s:'V + 傻了 / 跟傻子似的',m:'… đến ngây người / như thằng ngốc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn ấy bị câu hỏi của thầy làm cho ngẩn cả người.',answer:'他被老师的问题问傻了。',answerPy:'Tā bèi lǎoshī de wèntí wènshǎ le.',
      note:'V + 傻了 là bổ ngữ kết quả; câu 被.',pair:'被'},
     {promptLang:'vi',prompt:'Đến cả đứa trẻ con cũng không ngốc như vậy.',answer:'连小孩子都没有这么傻。',answerPy:'Lián xiǎo háizi dōu méiyǒu zhème shǎ.',
      note:'连……都……: nhấn mạnh; A 没有 B 这么 + tính từ.',pair:'连……都……'}
   ]},

  {n:22,zh:'倒霉',py:'dǎo méi',pos:'Tính từ',vn:'xui xẻo, đen đủi, bất hạnh',hv:'đảo môi',em:'🌧️',lesson:1,
   explain:['Gặp chuyện không may, xui xẻo (nói về NGƯỜI gặp chuyện).','Là từ li hợp: 倒了霉, 倒大霉 (xui tận mạng).'],
   usage:'真倒霉！(xui thật!), 倒霉的一天, 让 / 叫 + ai + 倒霉, 倒了大霉. Chỉ nói vận may của người; việc / đồ vật tồi tệ dùng 糟糕 (bài tập 2 của sách: 那个演出很糟糕).',
   collo:['真倒霉','倒霉的一天','倒了大霉','让他们倒霉'],
   ex_zh:'你怎么这么傻？就让他们倒霉，不好吗？！',ex_py:'Nǐ zěnme zhème shǎ? Jiù ràng tāmen dǎoméi, bù hǎo ma?!',ex_vn:'Sao anh dại thế? Cứ để bọn họ xui xẻo, chẳng tốt sao?!',
   exList:[
     {zh:'你怎么这么傻？就让他们倒霉，不好吗？！',py:'Nǐ zěnme zhème shǎ? Jiù ràng tāmen dǎoméi, bù hǎo ma?!',vn:'Sao anh dại thế? Cứ để bọn họ xui xẻo, chẳng tốt sao?!'},
     {zh:'真倒霉，刚出门就下雨了，我又没带伞。',py:'Zhēn dǎoméi, gāng chū mén jiù xià yǔ le, wǒ yòu méi dài sǎn.',vn:'Xui thật, vừa ra khỏi cửa thì trời mưa, tôi lại không mang ô.'},
     {zh:'今天是我最倒霉的一天，手机丢了，考试也没考好。',py:'Jīntiān shì wǒ zuì dǎoméi de yì tiān, shǒujī diū le, kǎoshì yě méi kǎohǎo.',vn:'Hôm nay là ngày xui xẻo nhất của tôi, mất điện thoại, thi cũng không tốt.'}
   ],
   colloFull:[
     {zh:'真倒霉',py:'zhēn dǎoméi',vn:'xui thật'},
     {zh:'倒霉的一天',py:'dǎoméi de yì tiān',vn:'một ngày xui xẻo'},
     {zh:'倒了大霉',py:'dǎole dà méi',vn:'xui tận mạng'},
     {zh:'让他们倒霉',py:'ràng tāmen dǎoméi',vn:'để bọn họ gặp xui'},
     {zh:'倒霉事',py:'dǎoméi shì',vn:'chuyện xui xẻo'}
   ],
   patterns:[
     {s:'真倒霉！/ 最倒霉的 + N',m:'Xui thật! / … xui nhất'},
     {s:'倒 + 了 / 大 + 霉',m:'Li hợp: 倒了霉, 倒大霉'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm qua tôi xui thật, xe đạp bị người ta lấy trộm mất.',answer:'我昨天真倒霉，自行车被人偷走了。',answerPy:'Wǒ zuótiān zhēn dǎoméi, zìxíngchē bèi rén tōuzǒu le.',
      note:'倒霉 nói về người gặp chuyện; câu 被 nêu chuyện xui.',pair:'被'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ gặp chuyện xui như thế.',answer:'我从来没遇到过这么倒霉的事。',answerPy:'Wǒ cónglái méi yùdàoguo zhème dǎoméi de shì.',
      note:'倒霉 làm định ngữ: 倒霉的事.',pair:'从来没……过'}
   ]},

  {n:23,zh:'生态',py:'shēngtài',pos:'Danh từ',vn:'sinh thái',hv:'sinh thái',em:'🌿',lesson:1,
   explain:['Trạng thái sinh tồn của sinh vật và mối quan hệ giữa sinh vật với môi trường.','Trong bài dùng ẩn dụ: "hệ sinh thái" của thị trường — các hiệu sách cùng tồn tại, kiềm chế lẫn nhau.'],
   usage:'生态平衡 (cân bằng sinh thái), 生态环境, 生态系统, 保护生态. Trong bài có ngoặc kép “生态平衡”, “生态” vì dùng nghĩa bóng.',
   collo:['生态平衡','生态环境','保护生态','生态系统'],
   ex_zh:'我是在保持这一地区图书市场的“生态平衡”。',ex_py:'Wǒ shì zài bǎochí zhè yí dìqū túshū shìchǎng de "shēngtài pínghéng".',ex_vn:'Tôi đang giữ "cân bằng sinh thái" cho thị trường sách của khu vực này.',
   exList:[
     {zh:'我是在保持这一地区图书市场的“生态平衡”。',py:'Wǒ shì zài bǎochí zhè yí dìqū túshū shìchǎng de "shēngtài pínghéng".',vn:'Tôi đang giữ "cân bằng sinh thái" cho thị trường sách của khu vực này.'},
     {zh:'还有一个很重要的原因，就是维持这种书店饱和的“生态”。',py:'Hái yǒu yí ge hěn zhòngyào de yuányīn, jiù shì wéichí zhè zhǒng shūdiàn bǎohé de "shēngtài".',vn:'Còn một lý do rất quan trọng, đó là duy trì "hệ sinh thái" bão hoà hiệu sách như thế này.'},
     {zh:'乱砍树木会破坏当地的生态环境。',py:'Luàn kǎn shùmù huì pòhuài dāngdì de shēngtài huánjìng.',vn:'Chặt cây bừa bãi sẽ phá hoại môi trường sinh thái địa phương.'}
   ],
   colloFull:[
     {zh:'生态平衡',py:'shēngtài pínghéng',vn:'cân bằng sinh thái'},
     {zh:'生态环境',py:'shēngtài huánjìng',vn:'môi trường sinh thái'},
     {zh:'保护生态',py:'bǎohù shēngtài',vn:'bảo vệ sinh thái'},
     {zh:'生态系统',py:'shēngtài xìtǒng',vn:'hệ sinh thái'},
     {zh:'破坏生态',py:'pòhuài shēngtài',vn:'phá hoại sinh thái'}
   ],
   patterns:[
     {s:'保持 / 破坏 + 生态平衡',m:'Giữ / phá vỡ cân bằng sinh thái'},
     {s:'生态 + 环境 / 系统',m:'Môi trường / hệ sinh thái'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Môi trường sinh thái ở đây ngày càng tốt.',answer:'这里的生态环境越来越好了。',answerPy:'Zhèlǐ de shēngtài huánjìng yuè lái yuè hǎo le.',
      note:'生态环境 là cụm cố định.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Cân bằng sinh thái của khu rừng này đã bị con người phá vỡ.',answer:'这片森林的生态平衡被人类破坏了。',answerPy:'Zhè piàn sēnlín de shēngtài pínghéng bèi rénlèi pòhuài le.',
      note:'Câu 被: 生态平衡 bị phá hoại.',pair:'被'}
   ]},

  {n:24,zh:'商业',py:'shāngyè',pos:'Danh từ',vn:'thương mại, thương nghiệp',hv:'thương nghiệp',em:'🏬',lesson:1,
   explain:['Hoạt động mua bán, buôn bán hàng hoá; ngành thương mại.'],
   usage:'商业领域, 商业中心 (trung tâm thương mại), 商业街, 商业活动, 商业竞争. Hay làm định ngữ trực tiếp không cần 的.',
   collo:['商业领域','商业中心','商业竞争','商业街'],
   ex_zh:'商业领域其实和自然界一样。',ex_py:'Shāngyè lǐngyù qíshí hé zìránjiè yíyàng.',ex_vn:'Lĩnh vực thương mại thật ra cũng giống như giới tự nhiên.',
   exList:[
     {zh:'商业领域其实和自然界一样。',py:'Shāngyè lǐngyù qíshí hé zìránjiè yíyàng.',vn:'Lĩnh vực thương mại thật ra cũng giống như giới tự nhiên.'},
     {zh:'为了在商业竞争中取得有利的地位，商家会想各种各样的办法。',py:'Wèile zài shāngyè jìngzhēng zhōng qǔdé yǒulì de dìwèi, shāngjiā huì xiǎng gè zhǒng gè yàng de bànfǎ.',vn:'Để giành vị thế có lợi trong cạnh tranh thương mại, các nhà buôn sẽ nghĩ đủ mọi cách.'},
     {zh:'周末我和朋友常去市中心的商业街逛逛。',py:'Zhōumò wǒ hé péngyou cháng qù shì zhōngxīn de shāngyè jiē guàngguang.',vn:'Cuối tuần tôi với bạn hay ra phố thương mại ở trung tâm thành phố dạo chơi.'}
   ],
   colloFull:[
     {zh:'商业领域',py:'shāngyè lǐngyù',vn:'lĩnh vực thương mại'},
     {zh:'商业中心',py:'shāngyè zhōngxīn',vn:'trung tâm thương mại'},
     {zh:'商业竞争',py:'shāngyè jìngzhēng',vn:'cạnh tranh thương mại'},
     {zh:'商业街',py:'shāngyè jiē',vn:'phố thương mại'},
     {zh:'商业活动',py:'shāngyè huódòng',vn:'hoạt động thương mại'}
   ],
   patterns:[
     {s:'商业 + N (领域 / 中心 / 竞争)',m:'… thương mại'},
     {s:'在商业竞争中 + V',m:'Trong cạnh tranh thương mại …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khu này không những là trung tâm thương mại mà còn là trung tâm văn hoá.',answer:'这个地区不仅是商业中心，也是文化中心。',answerPy:'Zhège dìqū bùjǐn shì shāngyè zhōngxīn, yě shì wénhuà zhōngxīn.',
      note:'商业中心 / 文化中心: danh từ làm định ngữ trực tiếp.',pair:'不仅……也……'},
     {promptLang:'vi',prompt:'Cạnh tranh thương mại càng ngày càng gay gắt.',answer:'商业竞争越来越激烈了。',answerPy:'Shāngyè jìngzhēng yuè lái yuè jīliè le.',
      note:'激烈 đi với 竞争.',pair:'越来越……'}
   ]},

  {n:25,zh:'领域',py:'lǐngyù',pos:'Danh từ',vn:'lĩnh vực, phạm vi',hv:'lĩnh vực',em:'🗂️',lesson:1,
   explain:['Phạm vi hoạt động của một ngành, một môn khoa học hay tư tưởng: 科学领域, 经济领域.'],
   usage:'在……领域 (里 / 中): 在医学领域, 在商业领域. 应用到……领域 (câu 31 sách bài tập: 这个理论已经被应用到商业领域).',
   collo:['商业领域','科学领域','在……领域','新领域'],
   ex_zh:'这一理论在商业领域同样适用。',ex_py:'Zhè yī lǐlùn zài shāngyè lǐngyù tóngyàng shìyòng.',ex_vn:'Lý thuyết này cũng áp dụng được trong lĩnh vực thương mại.',
   exList:[
     {zh:'这一理论在商业领域同样适用。',py:'Zhè yī lǐlùn zài shāngyè lǐngyù tóngyàng shìyòng.',vn:'Lý thuyết này cũng áp dụng được trong lĩnh vực thương mại.'},
     {zh:'这个理论已经被应用到商业领域。',py:'Zhège lǐlùn yǐjīng bèi yìngyòng dào shāngyè lǐngyù.',vn:'Lý thuyết này đã được ứng dụng vào lĩnh vực thương mại.'},
     {zh:'她是医学领域的专家。',py:'Tā shì yīxué lǐngyù de zhuānjiā.',vn:'Bà ấy là chuyên gia trong lĩnh vực y học.'}
   ],
   colloFull:[
     {zh:'商业领域',py:'shāngyè lǐngyù',vn:'lĩnh vực thương mại'},
     {zh:'科学领域',py:'kēxué lǐngyù',vn:'lĩnh vực khoa học'},
     {zh:'在……领域',py:'zài…… lǐngyù',vn:'trong lĩnh vực …'},
     {zh:'新领域',py:'xīn lǐngyù',vn:'lĩnh vực mới'},
     {zh:'医学领域的专家',py:'yīxué lǐngyù de zhuānjiā',vn:'chuyên gia ngành y'}
   ],
   patterns:[
     {s:'在 + N + 领域 (里)',m:'Trong lĩnh vực …'},
     {s:'被应用到 + N + 领域',m:'Được ứng dụng vào lĩnh vực …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công nghệ này đã được ứng dụng vào lĩnh vực giáo dục.',answer:'这项技术已经被应用到教育领域了。',answerPy:'Zhè xiàng jìshù yǐjīng bèi yìngyòng dào jiàoyù lǐngyù le.',
      note:'Theo mẫu câu 31 sách bài tập: 被应用到……领域.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần chăm chỉ, bạn sẽ có thể thành công trong lĩnh vực này.',answer:'只要努力，你就能在这个领域取得成功。',answerPy:'Zhǐyào nǔlì, nǐ jiù néng zài zhège lǐngyù qǔdé chénggōng.',
      note:'在……领域取得成功 = thành công trong lĩnh vực …; 就 đứng trước 能.',pair:'只要……就……'}
   ]},

  {n:26,zh:'适当',py:'shìdàng',pos:'Tính từ',vn:'thích hợp, thoả đáng, vừa phải',hv:'thích đáng',em:'👌',lesson:1,
   explain:['Vừa phải, thích hợp với hoàn cảnh, không nhiều quá cũng không ít quá.'],
   usage:'Hay đứng trước động từ làm trạng ngữ: 适当休息, 适当运动, 适当有一些…… Làm định ngữ: 适当的时候 / 方法 / 机会. Gần 合适 nhưng 合适 thường làm vị ngữ (这件衣服很合适), 适当 văn viết hơn và hay đứng trước động từ.',
   collo:['适当休息','适当运动','适当的时候','适当的方法'],
   ex_zh:'自然界中的生物，适当有一些“敌人”，会促使它们生长得更好。',ex_py:'Zìránjiè zhōng de shēngwù, shìdàng yǒu yìxiē "dírén", huì cùshǐ tāmen shēngzhǎng de gèng hǎo.',ex_vn:'Sinh vật trong tự nhiên có một ít "kẻ thù" vừa phải sẽ thúc đẩy chúng sinh trưởng tốt hơn.',
   exList:[
     {zh:'自然界中的生物，适当有一些“敌人”，会促使它们生长得更好。',py:'Zìránjiè zhōng de shēngwù, shìdàng yǒu yìxiē "dírén", huì cùshǐ tāmen shēngzhǎng de gèng hǎo.',vn:'Sinh vật trong tự nhiên có một ít "kẻ thù" vừa phải sẽ thúc đẩy chúng sinh trưởng tốt hơn.'},
     {zh:'考试前也要适当休息，别学得太累了。',py:'Kǎoshì qián yě yào shìdàng xiūxi, bié xué de tài lèi le.',vn:'Trước kỳ thi cũng phải nghỉ ngơi hợp lý, đừng học mệt quá.'},
     {zh:'我会在适当的时候把这件事告诉她。',py:'Wǒ huì zài shìdàng de shíhou bǎ zhè jiàn shì gàosu tā.',vn:'Tôi sẽ nói chuyện này cho cô ấy biết vào lúc thích hợp.'}
   ],
   colloFull:[
     {zh:'适当休息',py:'shìdàng xiūxi',vn:'nghỉ ngơi hợp lý'},
     {zh:'适当运动',py:'shìdàng yùndòng',vn:'vận động vừa phải'},
     {zh:'适当的时候',py:'shìdàng de shíhou',vn:'lúc thích hợp'},
     {zh:'适当的方法',py:'shìdàng de fāngfǎ',vn:'phương pháp thích hợp'},
     {zh:'适当有一些敌人',py:'shìdàng yǒu yìxiē dírén',vn:'có một ít kẻ thù vừa phải'}
   ],
   patterns:[
     {s:'适当 + V (休息 / 运动 / 调整)',m:'… một cách vừa phải'},
     {s:'在适当的时候 + V',m:'Vào lúc thích hợp thì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần vận động vừa phải mỗi ngày, sức khoẻ sẽ tốt lên.',answer:'只要每天适当运动，身体就会好起来。',answerPy:'Zhǐyào měi tiān shìdàng yùndòng, shēntǐ jiù huì hǎo qilai.',
      note:'适当 đứng trước động từ 运动 làm trạng ngữ.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tuy phải học nhiều nhưng cũng phải nghỉ ngơi hợp lý.',answer:'虽然学习任务很重，但是也要适当休息。',answerPy:'Suīrán xuéxí rènwu hěn zhòng, dànshì yě yào shìdàng xiūxi.',
      note:'适当休息 là cụm hay dùng khi khuyên nhủ.',pair:'虽然……但是……'}
   ]},

  {n:27,zh:'促使',py:'cùshǐ',pos:'Động từ',vn:'thúc đẩy, thúc giục (khiến cho)',hv:'xúc sử',em:'👉',lesson:1,
   explain:['Làm cho, khiến cho ai / cái gì đi đến một hành động hoặc kết quả nào đó.','Luôn có cấu trúc kiêm ngữ: 促使 + người / vật + V.'],
   usage:'Bảng 词语搭配: 促使 + 他成长 / 自己改正缺点 / 她努力学习. Sau tân ngữ bắt buộc có một động từ. Khác 促进: 促进 + danh từ (促进发展), không có động từ phía sau.',
   collo:['促使他成长','促使自己改正缺点','促使她努力学习','促使它们生长得更好'],
   ex_zh:'自然界中的生物，适当有一些“敌人”，会促使它们生长得更好。',ex_py:'Zìránjiè zhōng de shēngwù, shìdàng yǒu yìxiē "dírén", huì cùshǐ tāmen shēngzhǎng de gèng hǎo.',ex_vn:'Sinh vật trong tự nhiên có một ít "kẻ thù" vừa phải sẽ thúc đẩy chúng sinh trưởng tốt hơn.',
   exList:[
     {zh:'自然界中的生物，适当有一些“敌人”，会促使它们生长得更好。',py:'Zìránjiè zhōng de shēngwù, shìdàng yǒu yìxiē "dírén", huì cùshǐ tāmen shēngzhǎng de gèng hǎo.',vn:'Sinh vật trong tự nhiên có một ít "kẻ thù" vừa phải sẽ thúc đẩy chúng sinh trưởng tốt hơn.'},
     {zh:'最后老师的话促使他改变了主意。',py:'Zuìhòu lǎoshī de huà cùshǐ tā gǎibiànle zhǔyi.',vn:'Cuối cùng lời thầy giáo đã khiến cậu ấy thay đổi ý định.'},
     {zh:'那次失败促使她更加努力地学习。',py:'Nà cì shībài cùshǐ tā gèngjiā nǔlì de xuéxí.',vn:'Lần thất bại đó đã thúc đẩy cô ấy học hành chăm chỉ hơn.'}
   ],
   colloFull:[
     {zh:'促使他成长',py:'cùshǐ tā chéngzhǎng',vn:'thúc đẩy anh ấy trưởng thành'},
     {zh:'促使自己改正缺点',py:'cùshǐ zìjǐ gǎizhèng quēdiǎn',vn:'thúc giục bản thân sửa khuyết điểm'},
     {zh:'促使她努力学习',py:'cùshǐ tā nǔlì xuéxí',vn:'thúc đẩy cô ấy chăm chỉ học'},
     {zh:'促使它们生长得更好',py:'cùshǐ tāmen shēngzhǎng de gèng hǎo',vn:'khiến chúng sinh trưởng tốt hơn'},
     {zh:'促使他改变主意',py:'cùshǐ tā gǎibiàn zhǔyi',vn:'khiến anh ấy đổi ý'}
   ],
   patterns:[
     {s:'A + 促使 + B + V',m:'A khiến / thúc đẩy B làm gì (kiêm ngữ)'},
     {s:'促使 + 自己 + V',m:'Tự thúc giục mình làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chính cuốn sách này đã thúc đẩy tôi bắt đầu học tiếng Trung.',answer:'是这本书促使我开始学习汉语的。',answerPy:'Shì zhè běn shū cùshǐ wǒ kāishǐ xuéxí Hànyǔ de.',
      note:'促使 + 我 + 开始学习: sau tân ngữ phải có động từ. 是……的 nhấn mạnh nguyên nhân.',pair:'是……的'},
     {promptLang:'vi',prompt:'Lời phê bình của bố mẹ không những không làm tôi buồn mà còn thúc đẩy tôi sửa khuyết điểm.',answer:'父母的批评不仅没让我难过，也促使我改正了缺点。',answerPy:'Fùmǔ de pīpíng bùjǐn méi ràng wǒ nánguò, yě cùshǐ wǒ gǎizhèngle quēdiǎn.',
      note:'促使 + 我 + 改正缺点 (bảng 词语搭配).',pair:'不仅……也……'}
   ]},

  {n:28,zh:'生长',py:'shēngzhǎng',pos:'Động từ',vn:'sinh trưởng, mọc, lớn lên',hv:'sinh trưởng',em:'🌳',lesson:1,
   explain:['Sinh vật nảy sinh và lớn dần lên (thường nói về cây cối, động vật).','Cũng nói người sinh ra và lớn lên ở đâu: 生长在农村.'],
   usage:'植物生长, 生长得很快, 生长环境, 生长在…… Khác 成长: 成长 dùng cho người, nhấn mạnh trưởng thành về tinh thần (孩子成长); 生长 thiên về sinh học.',
   collo:['植物生长','生长得很快','生长环境','生长在农村'],
   ex_zh:'适当有一些“敌人”，会促使它们生长得更好。',ex_py:'Shìdàng yǒu yìxiē "dírén", huì cùshǐ tāmen shēngzhǎng de gèng hǎo.',ex_vn:'Có một ít "kẻ thù" vừa phải sẽ thúc đẩy chúng sinh trưởng tốt hơn.',
   exList:[
     {zh:'适当有一些“敌人”，会促使它们生长得更好。',py:'Shìdàng yǒu yìxiē "dírén", huì cùshǐ tāmen shēngzhǎng de gèng hǎo.',vn:'Có một ít "kẻ thù" vừa phải sẽ thúc đẩy chúng sinh trưởng tốt hơn.'},
     {zh:'植物的生长离不开阳光和水。',py:'Zhíwù de shēngzhǎng lí bu kāi yángguāng hé shuǐ.',vn:'Sự sinh trưởng của thực vật không thể thiếu ánh nắng và nước.'},
     {zh:'这种竹子生长得特别快，一天能长一米。',py:'Zhè zhǒng zhúzi shēngzhǎng de tèbié kuài, yì tiān néng zhǎng yì mǐ.',vn:'Loại tre này mọc cực nhanh, một ngày có thể cao thêm một mét.'}
   ],
   colloFull:[
     {zh:'植物生长',py:'zhíwù shēngzhǎng',vn:'thực vật sinh trưởng'},
     {zh:'生长得很快',py:'shēngzhǎng de hěn kuài',vn:'mọc rất nhanh'},
     {zh:'生长环境',py:'shēngzhǎng huánjìng',vn:'môi trường sinh trưởng'},
     {zh:'生长在农村',py:'shēngzhǎng zài nóngcūn',vn:'sinh ra và lớn lên ở nông thôn'},
     {zh:'生长得更好',py:'shēngzhǎng de gèng hǎo',vn:'sinh trưởng tốt hơn'}
   ],
   patterns:[
     {s:'N + 生长得 + 快 / 好',m:'… mọc nhanh / sinh trưởng tốt'},
     {s:'生长在 + nơi chốn',m:'Sinh ra, lớn lên ở …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cây ở ban công nhà tôi càng ngày càng mọc tốt.',answer:'我家阳台上的花草生长得越来越好了。',answerPy:'Wǒ jiā yángtái shang de huācǎo shēngzhǎng de yuè lái yuè hǎo le.',
      note:'生长得 + 越来越 + tính từ: bổ ngữ trạng thái.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Ông tôi sinh ra và lớn lên ở một làng nhỏ ven biển.',answer:'我爷爷是在海边的一个小村子里生长的。',answerPy:'Wǒ yéye shì zài hǎibiān de yí ge xiǎo cūnzi li shēngzhǎng de.',
      note:'是……的 nhấn mạnh nơi chốn.',pair:'是……的'}
   ]},

  {n:29,zh:'妨碍',py:'fáng\'ài',pos:'Động từ',vn:'gây trở ngại, cản trở, làm phiền',hv:'phương ngại',em:'🚧',lesson:1,
   explain:['Làm cho việc gì khó tiến hành thuận lợi; làm phiền người khác.'],
   usage:'Bảng 词语搭配: 妨碍 + 交通 / 你 / 别人学习. Lời lịch sự khi chào về: 不妨碍您休息了. Tân ngữ có thể là danh từ hoặc cụm "người + động từ" (妨碍别人学习).',
   collo:['妨碍交通','妨碍你','妨碍别人学习','妨碍我的发展'],
   ex_zh:'对手并不会妨碍我的发展，反而会促进经营，让我获得更多利益。',ex_py:'Duìshǒu bìng bú huì fáng\'ài wǒ de fāzhǎn, fǎn\'ér huì cùjìn jīngyíng, ràng wǒ huòdé gèng duō lìyì.',ex_vn:'Đối thủ chẳng những không cản trở sự phát triển của tôi, trái lại còn thúc đẩy kinh doanh, giúp tôi có thêm nhiều lợi ích.',
   exList:[
     {zh:'对手并不会妨碍我的发展，反而会促进经营，让我获得更多利益。',py:'Duìshǒu bìng bú huì fáng\'ài wǒ de fāzhǎn, fǎn\'ér huì cùjìn jīngyíng, ràng wǒ huòdé gèng duō lìyì.',vn:'Đối thủ chẳng những không cản trở sự phát triển của tôi, trái lại còn thúc đẩy kinh doanh, giúp tôi có thêm nhiều lợi ích.'},
     {zh:'太晚了，我先走了，不妨碍您休息。',py:'Tài wǎn le, wǒ xiān zǒu le, bù fáng\'ài nín xiūxi.',vn:'Muộn quá rồi, tôi xin về trước, không làm phiền bác nghỉ ngơi.'},
     {zh:'在图书馆里大声说话会妨碍别人学习。',py:'Zài túshūguǎn li dàshēng shuōhuà huì fáng\'ài biéren xuéxí.',vn:'Nói to trong thư viện sẽ làm phiền người khác học.'}
   ],
   colloFull:[
     {zh:'妨碍交通',py:'fáng\'ài jiāotōng',vn:'cản trở giao thông'},
     {zh:'妨碍你',py:'fáng\'ài nǐ',vn:'làm phiền bạn'},
     {zh:'妨碍别人学习',py:'fáng\'ài biéren xuéxí',vn:'làm phiền người khác học'},
     {zh:'妨碍我的发展',py:'fáng\'ài wǒ de fāzhǎn',vn:'cản trở sự phát triển của tôi'},
     {zh:'不妨碍您休息',py:'bù fáng\'ài nín xiūxi',vn:'không làm phiền bác nghỉ ngơi'}
   ],
   patterns:[
     {s:'妨碍 + N (交通 / 发展)',m:'Cản trở …'},
     {s:'妨碍 + người + V',m:'Làm phiền ai làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xe của anh đỗ ở đây sẽ cản trở giao thông, xin chuyển đi.',answer:'你的车停在这儿会妨碍交通，请把车开走。',answerPy:'Nǐ de chē tíng zài zhèr huì fáng\'ài jiāotōng, qǐng bǎ chē kāizǒu.',
      note:'妨碍交通 (bảng 词语搭配); 把 + 车 + 开走.',pair:'把'},
     {promptLang:'vi',prompt:'Chơi điện thoại trong giờ học không những ảnh hưởng đến mình mà còn làm phiền người khác.',answer:'上课玩手机不仅影响自己，也会妨碍别人学习。',answerPy:'Shàngkè wán shǒujī bùjǐn yǐngxiǎng zìjǐ, yě huì fáng\'ài biéren xuéxí.',
      note:'妨碍 + 别人 + 学习: tân ngữ là cụm người + động từ.',pair:'不仅……也……'}
   ]},

  {n:30,zh:'促进',py:'cùjìn',pos:'Động từ',vn:'đẩy mạnh, xúc tiến, thúc đẩy',hv:'xúc tiến',em:'📈',lesson:1,
   explain:['Làm cho sự vật phát triển nhanh hơn, tốt hơn.'],
   usage:'Bảng 词语搭配: 促进 + 经济发展 / 两国友谊 / 科技进步. Tân ngữ là danh từ (thường trừu tượng); sau tân ngữ không có động từ nữa — khác 促使 + người + V.',
   collo:['促进经济发展','促进两国友谊','促进科技进步','促进经营'],
   ex_zh:'对手并不会妨碍我的发展，反而会促进经营。',ex_py:'Duìshǒu bìng bú huì fáng\'ài wǒ de fāzhǎn, fǎn\'ér huì cùjìn jīngyíng.',ex_vn:'Đối thủ chẳng những không cản trở sự phát triển của tôi, trái lại còn thúc đẩy kinh doanh.',
   exList:[
     {zh:'对手并不会妨碍我的发展，反而会促进经营。',py:'Duìshǒu bìng bú huì fáng\'ài wǒ de fāzhǎn, fǎn\'ér huì cùjìn jīngyíng.',vn:'Đối thủ chẳng những không cản trở sự phát triển của tôi, trái lại còn thúc đẩy kinh doanh.'},
     {zh:'旅游业的发展促进了当地经济的发展。',py:'Lǚyóuyè de fāzhǎn cùjìnle dāngdì jīngjì de fāzhǎn.',vn:'Sự phát triển của ngành du lịch đã thúc đẩy kinh tế địa phương phát triển.'},
     {zh:'这次交流活动促进了两国学生之间的友谊。',py:'Zhè cì jiāoliú huódòng cùjìnle liǎng guó xuésheng zhījiān de yǒuyì.',vn:'Hoạt động giao lưu lần này đã thắt chặt tình hữu nghị giữa học sinh hai nước.'}
   ],
   colloFull:[
     {zh:'促进经济发展',py:'cùjìn jīngjì fāzhǎn',vn:'thúc đẩy kinh tế phát triển'},
     {zh:'促进两国友谊',py:'cùjìn liǎng guó yǒuyì',vn:'thắt chặt tình hữu nghị hai nước'},
     {zh:'促进科技进步',py:'cùjìn kējì jìnbù',vn:'thúc đẩy tiến bộ khoa học kỹ thuật'},
     {zh:'促进经营',py:'cùjìn jīngyíng',vn:'thúc đẩy kinh doanh'},
     {zh:'互相促进',py:'hùxiāng cùjìn',vn:'thúc đẩy lẫn nhau'}
   ],
   patterns:[
     {s:'促进 + N (发展 / 友谊 / 进步)',m:'Thúc đẩy … (tân ngữ danh từ)'},
     {s:'A 和 B 互相促进',m:'A và B thúc đẩy lẫn nhau'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Học tập và vui chơi có thể thúc đẩy lẫn nhau.',answer:'学习和玩儿是可以互相促进的。',answerPy:'Xuéxí hé wánr shì kěyǐ hùxiāng cùjìn de.',
      note:'是……的 nhấn mạnh quan điểm; 互相促进.',pair:'是……的'},
     {promptLang:'vi',prompt:'Chỉ cần giao lưu nhiều, tình hữu nghị hai nước sẽ càng được thắt chặt.',answer:'只要多交流，就能促进两国的友谊。',answerPy:'Zhǐyào duō jiāoliú, jiù néng cùjìn liǎng guó de yǒuyì.',
      note:'促进 + 友谊 (bảng 词语搭配).',pair:'只要……就……'}
   ]},

  {n:31,zh:'利益',py:'lìyì',pos:'Danh từ',vn:'lợi ích',hv:'lợi ích',em:'⚖️',lesson:1,
   explain:['Cái có lợi, điều tốt mà một người / tập thể nhận được (không chỉ tiền).'],
   usage:'获得利益, 个人利益, 集体利益, 经济利益, 为了……的利益. Khác 利润: 利润 chỉ tiền lãi cụ thể trong kinh doanh; 利益 rộng hơn, trừu tượng hơn.',
   collo:['获得利益','个人利益','集体利益','经济利益'],
   ex_zh:'对手反而会促进经营，让我获得更多利益。',ex_py:'Duìshǒu fǎn\'ér huì cùjìn jīngyíng, ràng wǒ huòdé gèng duō lìyì.',ex_vn:'Đối thủ trái lại còn thúc đẩy kinh doanh, giúp tôi có thêm nhiều lợi ích.',
   exList:[
     {zh:'对手反而会促进经营，让我获得更多利益。',py:'Duìshǒu fǎn\'ér huì cùjìn jīngyíng, ràng wǒ huòdé gèng duō lìyì.',vn:'Đối thủ trái lại còn thúc đẩy kinh doanh, giúp tôi có thêm nhiều lợi ích.'},
     {zh:'我们不能只考虑个人利益，也要考虑集体利益。',py:'Wǒmen bù néng zhǐ kǎolǜ gèrén lìyì, yě yào kǎolǜ jítǐ lìyì.',vn:'Chúng ta không thể chỉ nghĩ đến lợi ích cá nhân, mà còn phải nghĩ đến lợi ích tập thể.'},
     {zh:'这项合作对双方都有利益。',py:'Zhè xiàng hézuò duì shuāngfāng dōu yǒu lìyì.',vn:'Sự hợp tác này có lợi cho cả hai bên.'}
   ],
   colloFull:[
     {zh:'获得利益',py:'huòdé lìyì',vn:'thu được lợi ích'},
     {zh:'个人利益',py:'gèrén lìyì',vn:'lợi ích cá nhân'},
     {zh:'集体利益',py:'jítǐ lìyì',vn:'lợi ích tập thể'},
     {zh:'经济利益',py:'jīngjì lìyì',vn:'lợi ích kinh tế'},
     {zh:'更多利益',py:'gèng duō lìyì',vn:'nhiều lợi ích hơn'}
   ],
   patterns:[
     {s:'获得 / 保护 + 利益',m:'Thu được / bảo vệ lợi ích'},
     {s:'个人 / 集体 / 经济 + 利益',m:'Lợi ích cá nhân / tập thể / kinh tế'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy chưa bao giờ vì lợi ích cá nhân mà làm hại người khác.',answer:'他从来没为了个人利益伤害过别人。',answerPy:'Tā cónglái méi wèile gèrén lìyì shānghàiguo biéren.',
      note:'为了 + 利益 + V: vì lợi ích mà làm gì.',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Tuy lợi nhuận không cao nhưng lợi ích lâu dài rất lớn.',answer:'虽然利润不高，但是长远的利益很大。',answerPy:'Suīrán lìrùn bù gāo, dànshì chángyuǎn de lìyì hěn dà.',
      note:'So sánh 利润 (tiền lãi) và 利益 (lợi ích nói chung).',pair:'虽然……但是……'}
   ]},

  {n:32,zh:'合理',py:'hélǐ',pos:'Tính từ',vn:'hợp lý',hv:'hợp lý',em:'✅',lesson:1,
   explain:['Phù hợp với lẽ phải, với tình hình thực tế; không quá đáng.'],
   usage:'Bảng 词语搭配: 价格 / 收费 / 方法 / 建议 / 结构 / 设计 + 合理. Phủ định: 不合理. Làm định ngữ: 合理的要求 (câu 29 sách bài tập). Không nói 有理 thay cho 合理 khi nói về giá cả, cách sắp xếp.',
   collo:['价格合理','收费合理','合理的要求','安排得很合理'],
   ex_zh:'通过比较，学生们才知道我的书店服务好、品种优、价格合理。',ex_py:'Tōngguò bǐjiào, xuéshengmen cái zhīdào wǒ de shūdiàn fúwù hǎo, pǐnzhǒng yōu, jiàgé hélǐ.',ex_vn:'Qua so sánh, sinh viên mới biết hiệu sách của tôi phục vụ tốt, hàng tốt, giá cả hợp lý.',
   exList:[
     {zh:'通过比较，学生们才知道我的书店服务好、品种优、价格合理。',py:'Tōngguò bǐjiào, xuéshengmen cái zhīdào wǒ de shūdiàn fúwù hǎo, pǐnzhǒng yōu, jiàgé hélǐ.',vn:'Qua so sánh, sinh viên mới biết hiệu sách của tôi phục vụ tốt, hàng tốt, giá cả hợp lý.'},
     {zh:'对她的合理要求你不应该拒绝。',py:'Duì tā de hélǐ yāoqiú nǐ bù yīnggāi jùjué.',vn:'Với yêu cầu hợp lý của cô ấy, anh không nên từ chối.'},
     {zh:'阳台、卧室的整体感觉都不错，但是桌子摆这儿，明显不合理。',py:'Yángtái, wòshì de zhěngtǐ gǎnjué dōu búcuò, dànshì zhuōzi bǎi zhèr, míngxiǎn bù hélǐ.',vn:'Ban công, phòng ngủ nhìn chung đều ổn, nhưng kê bàn ở đây rõ ràng không hợp lý.'}
   ],
   colloFull:[
     {zh:'价格合理',py:'jiàgé hélǐ',vn:'giá cả hợp lý'},
     {zh:'收费合理',py:'shōufèi hélǐ',vn:'thu phí hợp lý'},
     {zh:'合理的要求',py:'hélǐ de yāoqiú',vn:'yêu cầu hợp lý'},
     {zh:'安排得很合理',py:'ānpái de hěn hélǐ',vn:'sắp xếp rất hợp lý'},
     {zh:'设计合理',py:'shèjì hélǐ',vn:'thiết kế hợp lý'}
   ],
   patterns:[
     {s:'价格 / 收费 / 方法 / 设计 + 合理',m:'… hợp lý (bảng 词语搭配)'},
     {s:'合理的 + N / V + 得很合理',m:'… hợp lý (định ngữ / bổ ngữ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căn phòng này tuy nhỏ nhưng thiết kế rất hợp lý.',answer:'这个房间虽然小，但是设计得很合理。',answerPy:'Zhège fángjiān suīrán xiǎo, dànshì shèjì de hěn hélǐ.',
      note:'V + 得很合理: bổ ngữ trạng thái.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chỉ cần yêu cầu hợp lý, công ty sẽ đồng ý.',answer:'只要要求合理，公司就会同意。',answerPy:'Zhǐyào yāoqiú hélǐ, gōngsī jiù huì tóngyì.',
      note:'要求 + 合理: tính từ làm vị ngữ.',pair:'只要……就……'}
   ]},

  {n:33,zh:'万一',py:'wànyī',pos:'Liên từ',vn:'ngộ nhỡ, lỡ như; (danh từ) điều bất trắc',hv:'vạn nhất',em:'⚠️',lesson:1,
   explain:['Liên từ: nêu một khả năng rất nhỏ, thường là chuyện ngoài ý muốn hoặc bất lợi — "lỡ như, ngộ nhỡ".','Danh từ: tình huống bất ngờ hiếm gặp, trong cụm cố định 以防万一 (để phòng bất trắc), 不怕一万，就怕万一.'],
   usage:'万一 + (chủ ngữ) + việc xấu，(那 / 就) + hậu quả. Chỉ dùng cho việc KHÔNG mong muốn; việc tốt dùng 如果. 万一 có thể đứng trước hoặc sau chủ ngữ. 一 cuối từ đọc thanh 1: wànyī.',
   collo:['万一下雨','以防万一','就怕万一','万一不小心'],
   ex_zh:'万一他们自己跑到其他图书市场去“货比三家”，那我的生意就完了。',ex_py:'Wànyī tāmen zìjǐ pǎodào qítā túshū shìchǎng qù "huò bǐ sān jiā", nà wǒ de shēngyi jiù wán le.',ex_vn:'Lỡ như họ tự chạy sang chợ sách khác để "so hàng ba nhà", thì việc làm ăn của tôi coi như xong.',
   exList:[
     {zh:'万一他们自己跑到其他图书市场去“货比三家”，那我的生意就完了。',py:'Wànyī tāmen zìjǐ pǎodào qítā túshū shìchǎng qù "huò bǐ sān jiā", nà wǒ de shēngyi jiù wán le.',vn:'Lỡ như họ tự chạy sang chợ sách khác để "so hàng ba nhà", thì việc làm ăn của tôi coi như xong.'},
     {zh:'拿把伞吧，万一下雨呢？',py:'Ná bǎ sǎn ba, wànyī xià yǔ ne?',vn:'Cầm theo cái ô đi, lỡ trời mưa thì sao?'},
     {zh:'不怕一万，就怕万一。',py:'Bú pà yíwàn, jiù pà wànyī.',vn:'Không sợ vạn lần, chỉ sợ một lần bất trắc (cẩn tắc vô áy náy).'}
   ],
   colloFull:[
     {zh:'万一下雨',py:'wànyī xià yǔ',vn:'lỡ trời mưa'},
     {zh:'以防万一',py:'yǐ fáng wànyī',vn:'để phòng bất trắc'},
     {zh:'就怕万一',py:'jiù pà wànyī',vn:'chỉ sợ điều bất trắc'},
     {zh:'万一不小心',py:'wànyī bù xiǎoxīn',vn:'lỡ không cẩn thận'},
     {zh:'万一迟到了',py:'wànyī chídào le',vn:'lỡ đến muộn'}
   ],
   patterns:[
     {s:'万一 + việc xấu，(那) + 就 + hậu quả',m:'Lỡ như … thì …'},
     {s:'……，以防万一',m:'…, để phòng bất trắc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mang theo hộ chiếu đi, lỡ như cần dùng thì sao?',answer:'把护照带上吧，万一要用呢？',answerPy:'Bǎ hùzhào dàishang ba, wànyī yào yòng ne?',
      note:'Câu 把 + lời nhắc; 万一……呢？ = lỡ … thì sao?',pair:'把'},
     {promptLang:'vi',prompt:'Chỉ cần xuất phát sớm một chút thì sẽ không sợ lỡ bị tắc đường.',answer:'只要早点儿出发，就不怕万一堵车了。',answerPy:'Zhǐyào zǎo diǎnr chūfā, jiù bú pà wànyī dǔchē le.',
      note:'万一 + việc không mong muốn (堵车).',pair:'只要……就……'}
   ]},

  {n:34,zh:'维持',py:'wéichí',pos:'Động từ',vn:'duy trì, giữ lại',hv:'duy trì',em:'🔗',lesson:1,
   explain:['Giữ cho một trạng thái tiếp tục tồn tại, không thay đổi (thường là giữ ở mức tối thiểu, cố gắng giữ).'],
   usage:'维持 + 秩序 / 生活 / 现状 / 关系 / 生态. Khác 保持: 维持 nhấn mạnh gắng gượng giữ cho khỏi mất (维持生活 = đủ sống qua ngày); 保持 là giữ trạng thái tốt (保持健康, 保持联系).',
   collo:['维持秩序','维持生活','维持现状','维持这种生态'],
   ex_zh:'还有一个很重要的原因，就是维持这种书店饱和的“生态”。',ex_py:'Hái yǒu yí ge hěn zhòngyào de yuányīn, jiù shì wéichí zhè zhǒng shūdiàn bǎohé de "shēngtài".',ex_vn:'Còn một lý do rất quan trọng, đó là duy trì "hệ sinh thái" bão hoà hiệu sách như thế này.',
   exList:[
     {zh:'还有一个很重要的原因，就是维持这种书店饱和的“生态”。',py:'Hái yǒu yí ge hěn zhòngyào de yuányīn, jiù shì wéichí zhè zhǒng shūdiàn bǎohé de "shēngtài".',vn:'Còn một lý do rất quan trọng, đó là duy trì "hệ sinh thái" bão hoà hiệu sách như thế này.'},
     {zh:'警察正在路口维持交通秩序。',py:'Jǐngchá zhèngzài lùkǒu wéichí jiāotōng zhìxù.',vn:'Cảnh sát đang giữ trật tự giao thông ở ngã tư.'},
     {zh:'他一个月的工资只够维持基本生活。',py:'Tā yí ge yuè de gōngzī zhǐ gòu wéichí jīběn shēnghuó.',vn:'Lương một tháng của anh ấy chỉ đủ duy trì cuộc sống cơ bản.'}
   ],
   colloFull:[
     {zh:'维持秩序',py:'wéichí zhìxù',vn:'giữ trật tự'},
     {zh:'维持生活',py:'wéichí shēnghuó',vn:'duy trì cuộc sống'},
     {zh:'维持现状',py:'wéichí xiànzhuàng',vn:'giữ nguyên hiện trạng'},
     {zh:'维持这种生态',py:'wéichí zhè zhǒng shēngtài',vn:'duy trì hệ sinh thái này'},
     {zh:'维持关系',py:'wéichí guānxi',vn:'duy trì mối quan hệ'}
   ],
   patterns:[
     {s:'维持 + 秩序 / 生活 / 现状',m:'Duy trì trật tự / cuộc sống / hiện trạng'},
     {s:'只够维持 + N',m:'Chỉ đủ duy trì …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trật tự trong lễ hội là do các tình nguyện viên giữ.',answer:'节日活动的秩序是志愿者们维持的。',answerPy:'Jiérì huódòng de zhìxù shì zhìyuànzhěmen wéichí de.',
      note:'维持秩序; 是……的 nhấn mạnh người làm.',pair:'是……的'},
     {promptLang:'vi',prompt:'Tình bạn của chúng tôi đã duy trì hơn mười năm, ngày càng thân thiết.',answer:'我们的友谊维持了十多年，感情越来越深。',answerPy:'Wǒmen de yǒuyì wéichíle shí duō nián, gǎnqíng yuè lái yuè shēn.',
      note:'维持 + 了 + thời lượng.',pair:'越来越……'}
   ]},

  {n:35,zh:'饱和',py:'bǎohé',pos:'Động từ',vn:'làm bão hoà, đạt mức bão hoà',hv:'bão hoà',em:'🧽',lesson:1,
   explain:['Thuật ngữ khoa học: dung dịch không hoà tan thêm được nữa.','Nghĩa rộng: đã đạt mức tối đa, không chứa thêm được nữa — 市场饱和 (thị trường bão hoà).'],
   usage:'市场已经饱和, 达到饱和, 饱和状态. Trong bài: 书店饱和的“生态” = khu này đã đủ hiệu sách, không còn chỗ cho người mới chen vào.',
   collo:['市场饱和','达到饱和','饱和状态','书店饱和'],
   ex_zh:'就是维持这种书店饱和的“生态”，避免更多、更强的对手来“插足”。',ex_py:'Jiù shì wéichí zhè zhǒng shūdiàn bǎohé de "shēngtài", bìmiǎn gèng duō, gèng qiáng de duìshǒu lái "chāzú".',ex_vn:'Đó là duy trì "hệ sinh thái" bão hoà hiệu sách như thế này, tránh để những đối thủ nhiều hơn, mạnh hơn "chen chân" vào.',
   exList:[
     {zh:'就是维持这种书店饱和的“生态”，避免更多、更强的对手来“插足”。',py:'Jiù shì wéichí zhè zhǒng shūdiàn bǎohé de "shēngtài", bìmiǎn gèng duō, gèng qiáng de duìshǒu lái "chāzú".',vn:'Đó là duy trì "hệ sinh thái" bão hoà hiệu sách như thế này, tránh để những đối thủ nhiều hơn, mạnh hơn "chen chân" vào.'},
     {zh:'这个城市的奶茶店太多了，市场已经饱和了。',py:'Zhège chéngshì de nǎichá diàn tài duō le, shìchǎng yǐjīng bǎohé le.',vn:'Thành phố này quán trà sữa nhiều quá, thị trường đã bão hoà rồi.'},
     {zh:'手机市场接近饱和，新品牌很难进入。',py:'Shǒujī shìchǎng jiējìn bǎohé, xīn pǐnpái hěn nán jìnrù.',vn:'Thị trường điện thoại gần bão hoà, thương hiệu mới rất khó chen vào.'}
   ],
   colloFull:[
     {zh:'市场饱和',py:'shìchǎng bǎohé',vn:'thị trường bão hoà'},
     {zh:'达到饱和',py:'dádào bǎohé',vn:'đạt mức bão hoà'},
     {zh:'饱和状态',py:'bǎohé zhuàngtài',vn:'trạng thái bão hoà'},
     {zh:'书店饱和',py:'shūdiàn bǎohé',vn:'hiệu sách đã đủ (bão hoà)'},
     {zh:'接近饱和',py:'jiējìn bǎohé',vn:'gần bão hoà'}
   ],
   patterns:[
     {s:'(市场) + 已经饱和了',m:'(Thị trường) đã bão hoà'},
     {s:'达到 / 接近 + 饱和',m:'Đạt / gần mức bão hoà'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thị trường này tuy đã bão hoà nhưng họ vẫn muốn thử.',answer:'这个市场虽然已经饱和了，但是他们还想试试。',answerPy:'Zhège shìchǎng suīrán yǐjīng bǎohé le, dànshì tāmen hái xiǎng shìshi.',
      note:'饱和 + 了: đã đạt mức bão hoà.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Quán cà phê ngày càng nhiều, thị trường sắp bão hoà rồi.',answer:'咖啡店越来越多，市场快要饱和了。',answerPy:'Kāfēi diàn yuè lái yuè duō, shìchǎng kuàiyào bǎohé le.',
      note:'快要……了: sắp ….',pair:'越来越……'}
   ]},

  {n:36,zh:'不见得',py:'bújiàndé',pos:'Phó từ',vn:'chưa chắc, không nhất thiết',hv:'bất kiến đắc',em:'🤔',lesson:1,
   explain:['Biểu thị phán đoán phủ định một cách nhẹ nhàng, dè dặt: chưa chắc đã …, không hẳn ….','Có thể đứng một mình để trả lời: 我看不见得 (tôi thấy chưa chắc).'],
   usage:'不见得 + V / Adj (đứng trước vị ngữ, hay đi với 就 / 会): 不见得是件好事, 不见得会来. 贵的不见得就好. Giọng nhẹ hơn 不一定 và mang ý phản bác ý kiến người khác.',
   collo:['不见得是件好事','我看不见得','不见得会来','不见得就好'],
   ex_zh:'我把其他三家都挤垮了，不见得是件好事。',ex_py:'Wǒ bǎ qítā sān jiā dōu jǐkuǎ le, bújiàndé shì jiàn hǎoshì.',ex_vn:'Tôi mà chèn cho ba hiệu kia sập hết thì chưa chắc đã là chuyện tốt.',
   exList:[
     {zh:'我把其他三家都挤垮了，不见得是件好事。',py:'Wǒ bǎ qítā sān jiā dōu jǐkuǎ le, bújiàndé shì jiàn hǎoshì.',vn:'Tôi mà chèn cho ba hiệu kia sập hết thì chưa chắc đã là chuyện tốt.'},
     {zh:'你们上次赢了，这次就肯定也能赢吗？我看不见得。',py:'Nǐmen shàng cì yíng le, zhè cì jiù kěndìng yě néng yíng ma? Wǒ kàn bújiàndé.',vn:'Lần trước các cậu thắng, lần này chắc chắn cũng thắng à? Tôi thấy chưa chắc.'},
     {zh:'大家都选的不见得就是最好的。',py:'Dàjiā dōu xuǎn de bújiàndé jiù shì zuì hǎo de.',vn:'Cái mọi người đều chọn chưa chắc đã là cái tốt nhất.'}
   ],
   colloFull:[
     {zh:'不见得是件好事',py:'bújiàndé shì jiàn hǎoshì',vn:'chưa chắc là chuyện tốt'},
     {zh:'我看不见得',py:'wǒ kàn bújiàndé',vn:'tôi thấy chưa chắc'},
     {zh:'不见得会来',py:'bújiàndé huì lái',vn:'chưa chắc sẽ đến'},
     {zh:'不见得就好',py:'bújiàndé jiù hǎo',vn:'chưa chắc đã tốt'},
     {zh:'不见得会妨碍',py:'bújiàndé huì fáng\'ài',vn:'chưa chắc sẽ cản trở'}
   ],
   patterns:[
     {s:'S + 不见得 + (就 / 会) + V / Adj',m:'… chưa chắc đã …'},
     {s:'我看不见得。',m:'Tôi thấy chưa chắc (trả lời, phản bác nhẹ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đối thủ chưa chắc sẽ cản trở sự phát triển của chúng ta.',answer:'对手不见得会妨碍我们的发展。',answerPy:'Duìshǒu bújiàndé huì fáng\'ài wǒmen de fāzhǎn.',
      note:'Câu 30 sách bài tập. 不见得 đứng trước 会 + V.',pair:'会'},
     {promptLang:'vi',prompt:'Tuy đồ đắt nhưng chưa chắc đã tốt.',answer:'东西虽然贵，但是不见得就好。',answerPy:'Dōngxi suīrán guì, dànshì bújiàndé jiù hǎo.',
      note:'不见得就 + Adj: phản bác quan niệm "đắt là tốt".',pair:'虽然……但是……'}
   ]},

  {n:37,zh:'建伟',py:'Jiànwěi',pos:'Danh từ riêng',vn:'Kiến Vĩ (tên người)',hv:'Kiến Vĩ',em:'👨‍💼',lesson:1,
   explain:['Nhân vật chính của bài khoá — chủ một hiệu sách trong trường đại học, người chọn cách "nuôi dưỡng" đối thủ.'],
   usage:'Tên riêng, không cần họ; trong bài: 建伟书店 (hiệu sách của Kiến Vĩ), 建伟说.',
   collo:['建伟书店','建伟说','如果我是建伟'],
   ex_zh:'建伟在大学的一座公寓楼里开了一家书店。',ex_py:'Jiànwěi zài dàxué de yí zuò gōngyù lóu li kāile yì jiā shūdiàn.',ex_vn:'Kiến Vĩ mở một hiệu sách trong một toà chung cư của trường đại học.',
   exList:[
     {zh:'建伟在大学的一座公寓楼里开了一家书店。',py:'Jiànwěi zài dàxué de yí zuò gōngyù lóu li kāile yì jiā shūdiàn.',vn:'Kiến Vĩ mở một hiệu sách trong một toà chung cư của trường đại học.'},
     {zh:'建伟成了这里的“书店老大”。',py:'Jiànwěi chéngle zhèlǐ de "shūdiàn lǎodà".',vn:'Kiến Vĩ đã trở thành "anh cả làng sách" ở đây.'}
   ],
   colloFull:[
     {zh:'建伟书店',py:'Jiànwěi shūdiàn',vn:'hiệu sách của Kiến Vĩ'},
     {zh:'建伟说',py:'Jiànwěi shuō',vn:'Kiến Vĩ nói'},
     {zh:'如果我是建伟',py:'rúguǒ wǒ shì Jiànwěi',vn:'nếu tôi là Kiến Vĩ'}
   ],
   patterns:[{s:'建伟 + 书店',m:'Tên riêng làm định ngữ: hiệu sách của Kiến Vĩ'}],
   checkList:[
     {promptLang:'vi',prompt:'Kiến Vĩ không những không chèn ép đối thủ mà còn cho họ vay vốn.',answer:'建伟不但没有挤垮对手，反而借给他们资金。',answerPy:'Jiànwěi búdàn méiyǒu jǐkuǎ duìshǒu, fǎn\'ér jiè gěi tāmen zījīn.',
      note:'不但不 / 没……，反而……: không những không … mà trái lại ….',pair:'不但……反而……'},
     {promptLang:'vi',prompt:'Hiệu sách của Kiến Vĩ là mở từ hơn một năm trước.',answer:'建伟的书店是一年多以前开的。',answerPy:'Jiànwěi de shūdiàn shì yì nián duō yǐqián kāi de.',
      note:'是……的 nhấn mạnh thời gian.',pair:'是……的'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ 课文 — 培养对手 (652字), tr. 96–98
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 培养对手',
  preQuiz:[
    {q:'建伟的书店开在哪儿？',opts:['大学的一座公寓楼里','市中心的商业街上','大学门口的超市旁边'],ans:0},
    {q:'建伟的书店除了书，还卖什么？',opts:['衣服和鞋','文具、电池、小日用品等','水果和饮料'],ans:1},
    {q:'建伟的书店生意为什么越来越红火？',opts:['因为书店很大','因为他垄断了市场','因为他诚信经营，薄利多销'],ans:2},
    {q:'另外三家书店的情况怎么样？',opts:['经营空间越来越小','生意比建伟的好','已经全部倒闭了'],ans:0},
    {q:'三家书店的营业额加起来怎么样？',opts:['比建伟一家高很多','还不如建伟一家高','和建伟一家一样高'],ans:1},
    {q:'亲朋好友给建伟什么建议？',opts:['把书店卖掉','和三家书店合作','把另三家书店挤垮，垄断市场'],ans:2},
    {q:'对于一家快要倒闭的书店，建伟做了什么？',opts:['主动热心地借给其资金','把它买了下来','让它早点儿关门'],ans:0},
    {q:'有人觉得建伟怎么样？',opts:['很聪明','很傻','很倒霉'],ans:1},
    {q:'建伟说他是在保持什么？',opts:['书店的利润','自己的名声','图书市场的“生态平衡”'],ans:2},
    {q:'建伟认为，自然界中的生物适当有一些“敌人”会怎么样？',opts:['会促使它们生长得更好','会妨碍它们的发展','会让它们很快死去'],ans:0},
    {q:'如果只有建伟一家书店，学生们会怎么想？',opts:['觉得他的书很便宜','价格再低也会认为他的书价高','觉得非常方便'],ans:1},
    {q:'建伟为什么说把其他三家都挤垮了不见得是件好事？',opts:['因为他会没有朋友','因为学生们会不高兴','因为可能会来一个比他更强的对手'],ans:2},
    {q:'建伟最后决定怎么做？',opts:['继续把对手培养好','把书店关掉','去别的地方开书店'],ans:0}
  ],
  lines:[
    {sp:0,zh:'建伟在大学的一座公寓楼里开了一家书店，顺便卖点儿文具、电池、小日用品等。一年多来，虽然每件商品的利润都并不高，但他诚信经营，薄利多销，使书店生意越来越红火，甚至成为了媒体的采访对象。这个大学里另外还有三家书店，由于受到了建伟书店的影响，这三家书店的经营空间越来越小，三家的营业额加起来还不如他一家高。建伟成了这里的“书店老大”。',
     py:'Jiànwěi zài dàxué de yí zuò gōngyù lóu li kāile yì jiā shūdiàn, shùnbiàn mài diǎnr wénjù, diànchí, xiǎo rìyòngpǐn děng. Yì nián duō lái, suīrán měi jiàn shāngpǐn de lìrùn dōu bìng bù gāo, dàn tā chéngxìn jīngyíng, bó lì duō xiāo, shǐ shūdiàn shēngyi yuè lái yuè hónghuo, shènzhì chéngwéile méitǐ de cǎifǎng duìxiàng. Zhège dàxué li lìngwài hái yǒu sān jiā shūdiàn, yóuyú shòudàole Jiànwěi shūdiàn de yǐngxiǎng, zhè sān jiā shūdiàn de jīngyíng kōngjiān yuè lái yuè xiǎo, sān jiā de yíngyè\'é jiā qilai hái bùrú tā yì jiā gāo. Jiànwěi chéngle zhèlǐ de "shūdiàn lǎodà".',
     vn:'Kiến Vĩ mở một hiệu sách trong một toà chung cư của trường đại học, tiện thể bán thêm ít văn phòng phẩm, pin, đồ dùng lặt vặt hằng ngày. Hơn một năm nay, tuy lợi nhuận trên mỗi món hàng đều không cao, nhưng anh kinh doanh trung thực, lãi ít bán nhiều, khiến việc làm ăn của hiệu sách ngày càng phát đạt, thậm chí còn trở thành đối tượng phỏng vấn của báo chí. Trong trường đại học này còn có ba hiệu sách khác; do bị hiệu sách của Kiến Vĩ ảnh hưởng, không gian kinh doanh của ba hiệu sách ấy ngày càng thu hẹp, doanh thu của cả ba cộng lại còn không bằng một mình hiệu của anh. Kiến Vĩ trở thành "anh cả làng sách" ở đây.'},
    {sp:0,zh:'这时，许多亲朋好友便建议他干脆把另三家书店挤垮，垄断这个市场。可建伟不但没有去挤垮对手，反而还经常帮助三家书店搞一些营销活动，对于一家快要倒闭的书店，他还主动热心地借给其资金，想办法让他继续经营下去。',
     py:'Zhè shí, xǔduō qīnpéng hǎoyǒu biàn jiànyì tā gāncuì bǎ lìng sān jiā shūdiàn jǐkuǎ, lǒngduàn zhège shìchǎng. Kě Jiànwěi búdàn méiyǒu qù jǐkuǎ duìshǒu, fǎn\'ér hái jīngcháng bāngzhù sān jiā shūdiàn gǎo yìxiē yíngxiāo huódòng, duìyú yì jiā kuàiyào dǎobì de shūdiàn, tā hái zhǔdòng rèxīn de jiè gěi qí zījīn, xiǎng bànfǎ ràng tā jìxù jīngyíng xiaqu.',
     vn:'Lúc này, nhiều người thân bạn bè liền khuyên anh dứt khoát chèn cho ba hiệu sách kia sập tiệm, độc chiếm thị trường này. Nhưng Kiến Vĩ không những không chèn ép đối thủ, trái lại còn thường giúp ba hiệu sách ấy tổ chức một số hoạt động tiếp thị; với một hiệu sách sắp phải đóng cửa, anh còn chủ động nhiệt tình cho họ vay vốn, tìm cách giúp hiệu sách tiếp tục kinh doanh.'},
    {sp:0,zh:'有人问他：“你怎么这么傻？就让他们倒霉，不好吗？！”',
     py:'Yǒu rén wèn tā: "Nǐ zěnme zhème shǎ? Jiù ràng tāmen dǎoméi, bù hǎo ma?!"',
     vn:'Có người hỏi anh: "Sao anh dại thế? Cứ để bọn họ xui xẻo, chẳng tốt sao?!"'},
    {sp:0,zh:'建伟说，我是在保持这一地区图书市场的“生态平衡”。商业领域其实和自然界一样，自然界中的生物，适当有一些“敌人”，会促使它们生长得更好；同样的，对手并不会妨碍我的发展，反而会促进经营，让我获得更多利益。一个原因是这样能创造让客户有所比较和优中选优的购物环境，通过比较，学生们才知道我的书店服务好、品种优、价格合理。如果只有我一家书店了，学生们没有了比较，价格定得再低也会认为我的书价高，万一他们自己跑到其他图书市场去“货比三家”，那我的生意就完了。还有一个很重要的原因，就是维持这种书店饱和的“生态”，避免更多、更强的对手来“插足”。我把其他三家都挤垮了，不见得是件好事，因为别人一看这么大的地方只有我一家书店，新的书店可能就会出现，弄不好来一个比我更强的对手。所以，为了保持目前这种经营的“生态平衡”，我要继续把对手培养好。',
     py:'Jiànwěi shuō, wǒ shì zài bǎochí zhè yí dìqū túshū shìchǎng de "shēngtài pínghéng". Shāngyè lǐngyù qíshí hé zìránjiè yíyàng, zìránjiè zhōng de shēngwù, shìdàng yǒu yìxiē "dírén", huì cùshǐ tāmen shēngzhǎng de gèng hǎo; tóngyàng de, duìshǒu bìng bú huì fáng\'ài wǒ de fāzhǎn, fǎn\'ér huì cùjìn jīngyíng, ràng wǒ huòdé gèng duō lìyì. Yí ge yuányīn shì zhèyàng néng chuàngzào ràng kèhù yǒu suǒ bǐjiào hé yōu zhōng xuǎn yōu de gòuwù huánjìng, tōngguò bǐjiào, xuéshengmen cái zhīdào wǒ de shūdiàn fúwù hǎo, pǐnzhǒng yōu, jiàgé hélǐ. Rúguǒ zhǐ yǒu wǒ yì jiā shūdiàn le, xuéshengmen méiyǒule bǐjiào, jiàgé dìng de zài dī yě huì rènwéi wǒ de shūjià gāo, wànyī tāmen zìjǐ pǎodào qítā túshū shìchǎng qù "huò bǐ sān jiā", nà wǒ de shēngyi jiù wán le. Hái yǒu yí ge hěn zhòngyào de yuányīn, jiù shì wéichí zhè zhǒng shūdiàn bǎohé de "shēngtài", bìmiǎn gèng duō, gèng qiáng de duìshǒu lái "chāzú". Wǒ bǎ qítā sān jiā dōu jǐkuǎ le, bújiàndé shì jiàn hǎoshì, yīnwèi biéren yí kàn zhème dà de dìfang zhǐ yǒu wǒ yì jiā shūdiàn, xīn de shūdiàn kěnéng jiù huì chūxiàn, nòng bu hǎo lái yí ge bǐ wǒ gèng qiáng de duìshǒu. Suǒyǐ, wèile bǎochí mùqián zhè zhǒng jīngyíng de "shēngtài pínghéng", wǒ yào jìxù bǎ duìshǒu péiyǎng hǎo.',
     vn:'Kiến Vĩ nói, tôi đang giữ "cân bằng sinh thái" cho thị trường sách của khu vực này. Lĩnh vực thương mại thật ra cũng giống giới tự nhiên: sinh vật trong tự nhiên có một ít "kẻ thù" vừa phải sẽ thúc đẩy chúng sinh trưởng tốt hơn; cũng vậy, đối thủ chẳng những không cản trở sự phát triển của tôi, trái lại còn thúc đẩy kinh doanh, giúp tôi có thêm nhiều lợi ích. Một lý do là làm như vậy có thể tạo ra môi trường mua sắm cho khách hàng có cái để so sánh, chọn cái tốt nhất trong những cái tốt; qua so sánh, sinh viên mới biết hiệu sách của tôi phục vụ tốt, hàng tốt, giá cả hợp lý. Nếu chỉ còn mỗi hiệu sách của tôi, sinh viên không còn gì để so sánh, thì giá có đặt thấp đến mấy họ cũng sẽ cho rằng sách của tôi đắt; lỡ như họ tự chạy sang chợ sách khác để "so hàng ba nhà", thì việc làm ăn của tôi coi như xong. Còn một lý do rất quan trọng nữa, đó là duy trì "hệ sinh thái" bão hoà hiệu sách như thế này, tránh để những đối thủ nhiều hơn, mạnh hơn "chen chân" vào. Tôi mà chèn cho ba hiệu kia sập hết thì chưa chắc đã là chuyện tốt, vì người khác vừa thấy một nơi rộng thế này mà chỉ có mỗi hiệu sách của tôi, hiệu sách mới có thể sẽ xuất hiện, không khéo lại đến một đối thủ mạnh hơn cả tôi. Vì vậy, để giữ "cân bằng sinh thái" kinh doanh như hiện nay, tôi phải tiếp tục "nuôi dưỡng" đối thủ cho tốt.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — 挤/拥挤 lấy từ sách (tr. 100–101)
// + 促进/促使 (bài tập 2 của sách, tr. 102), 利润/利益 (hai từ mới dễ nhầm)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'挤 — 拥挤',
   same:'Đều làm được ĐỘNG TỪ và TÍNH TỪ; nghĩa tính từ đều là chỗ nhỏ mà người hoặc vật nhiều (chật chội, đông đúc).',
   sameEx:{zh:'这么小的教室里放三十张桌子，太挤／拥挤了！',vn:'Phòng học nhỏ thế này mà kê ba mươi cái bàn, chật quá!'},
   items:[
     {word:'挤',points:[
       'Động từ: dùng sức CHEN qua đám đông (挤上车); bóp cho ra khỏi lỗ nhỏ (挤牙膏, 挤出眼泪).',
       'Người / việc dồn sát vào nhau, dồn vào cùng một khoảng thời gian (事情挤在一起); còn có nghĩa chèn ép, loại trừ (挤垮对手).',
       'Thường làm VỊ NGỮ, khẩu ngữ: 车上太挤了, 挤得满头大汗.'
     ],ex:[{zh:'坐车的人太多了，我挤了半天才挤上车。',vn:'Người đi xe đông quá, tôi chen mãi mới lên được xe.'},
          {zh:'牙膏用完了，已经挤不出来了。',vn:'Kem đánh răng dùng hết rồi, bóp không ra nữa.'}]},
     {word:'拥挤',points:[
       'Động từ: chỉ nhấn mạnh việc CHEN CHÚC dồn vào nhau (请不要拥挤).',
       'Không có nghĩa bóp, nặn, không có nghĩa dồn việc, chèn ép.',
       'Làm được CHỦ NGỮ, TÂN NGỮ, văn viết: 交通拥挤是个大问题.'
     ],ex:[{zh:'请先下后上，不要拥挤。',vn:'Xin xuống trước lên sau, đừng chen lấn.'},
          {zh:'交通拥挤是个大问题。',vn:'Tắc nghẽn giao thông là một vấn đề lớn.'}]}
   ],
   quiz:[
     {sentence:'所有的事都＿＿在这一个星期了。',options:['挤','拥挤'],answer:0,
      why:'Việc dồn vào cùng một khoảng thời gian → chỉ 挤 (câu mẫu có dấu ✓ của sách).'},
     {sentence:'由于人群＿＿，有人受了伤。',options:['挤','拥挤'],answer:1,
      why:'Văn viết, mô tả đám đông chen chúc nhau (人群拥挤) → 拥挤.'},
     {sentence:'他假装伤心，＿＿出了两滴眼泪。',options:['挤','拥挤'],answer:0,
      why:'Nặn / bóp cho thứ gì đó chảy ra (挤出眼泪) → chỉ 挤; 拥挤 không có nghĩa này.'},
     {sentence:'周末这家商场里虽然人很多，但并不＿＿。',options:['挤','拥挤'],answer:1,both:true,
      why:'Nghĩa tính từ "chật chội, đông đúc" — cả 挤 và 拥挤 đều được (并不挤 / 并不拥挤).'}
   ],
   sgk:{
     chung:{t:'都可以做动词和形容词，形容词的意思都是地方小而人或物多。',vn:'Đều có thể làm động từ và tính từ; nghĩa tính từ đều là chỗ nhỏ mà người hoặc vật nhiều.',vd:'这么小的教室里放三十张桌子，太挤／拥挤了！',vdVn:'Phòng học nhỏ thế này mà kê ba mươi cái bàn, chật quá!'},
     khac:[
       {a:{t:'动词，强调用力使自己从人群中通过。',vn:'Động từ, nhấn mạnh dùng sức để mình chen qua đám đông.',vd:'坐车的人太多了，我挤了半天才挤上车。',vdVn:'Người đi xe đông quá, tôi chen mãi mới lên được xe.'},
        b:{t:'动词，强调挤在一起。',vn:'Động từ, nhấn mạnh chen chúc dồn vào nhau.',vd:'请先下后上，不要拥挤。',vdVn:'Xin xuống trước lên sau, đừng chen lấn.'}},
       {a:{t:'一般做谓语。',vn:'Thường làm vị ngữ.',vd:'为了买到票，我挤得满头大汗！',vdVn:'Để mua được vé, tôi chen đến mồ hôi đầm đìa!'},
        b:{t:'可做主语或宾语。',vn:'Có thể làm chủ ngữ hoặc tân ngữ.',vd:'交通拥挤是个大问题。',vdVn:'Tắc nghẽn giao thông là một vấn đề lớn.'}},
       {a:{t:'动词，指用力使东西从小孔或小缝中出来。',vn:'Động từ, chỉ dùng sức làm cho vật từ lỗ nhỏ hoặc khe nhỏ thoát ra.',vd:'牙膏用完了，已经挤不出来了。',vdVn:'Kem đánh răng dùng hết rồi, bóp không ra nữa.'},
        b:{t:'没有这个意思。',vn:'Không có nghĩa này.'}},
       {a:{t:'动词，指人或物紧紧挨在一起，或事情集中在同一时间段里。',vn:'Động từ, chỉ người hoặc vật sát chặt vào nhau, hoặc công việc dồn vào cùng một khoảng thời gian.',vd:'如果你的生活先被不重要的事挤满了，那你就无法再装进更大、更重要的事了。',vdVn:'Nếu cuộc sống của bạn đã bị những việc không quan trọng chiếm đầy, thì bạn không thể chứa thêm những việc lớn hơn, quan trọng hơn nữa.'},
        b:{t:'没有这个意思。',vn:'Không có nghĩa này.'}},
       {a:{t:'有排挤的意思。',vn:'Có nghĩa chèn ép, loại trừ (排挤).',vd:'许多亲朋好友便建议他干脆把另三家书店挤垮，垄断这个市场。',vdVn:'Nhiều người thân bạn bè liền khuyên anh dứt khoát chèn cho ba hiệu sách kia sập, độc chiếm thị trường này.'},
        b:{t:'没有这个意思。',vn:'Không có nghĩa này.'}}
     ],
     lamThu:[
       {s:'所有的事都＿＿在这一个星期了。',dap:[true,false],mau:true,
        giai:'Việc dồn vào cùng một khoảng thời gian → chỉ 挤 (câu mẫu của sách).'},
       {s:'由于人群＿＿，有人受了伤。',dap:[false,true],
        giai:'Mô tả đám đông chen chúc, giọng văn viết → 人群拥挤.'},
       {s:'他假装伤心，＿＿出了两滴眼泪。',dap:[true,false],
        giai:'Nặn cho nước mắt chảy ra (挤出) → chỉ 挤.'},
       {s:'周末这家商场里虽然人很多，但并不＿＿。',dap:[true,true],
        giai:'Nghĩa tính từ "chật chội" — giống phần 共同点, cả hai đều được.'}
     ]
   }},

  {pair:'促进 — 促使',
   same:'Đều là ĐỘNG TỪ, đều có nghĩa "thúc đẩy", làm cho sự vật thay đổi theo hướng nào đó.',
   sameEx:{zh:'适当的竞争会促进经营，也会促使商家不断进步。',vn:'Cạnh tranh vừa phải sẽ thúc đẩy kinh doanh, cũng khiến các nhà buôn không ngừng tiến bộ.'},
   items:[
     {word:'促进',points:[
       'Làm cho sự vật PHÁT TRIỂN nhanh hơn, tốt hơn.',
       'Tân ngữ là DANH TỪ (thường trừu tượng): 促进经济发展 / 两国友谊 / 科技进步.',
       'Sau tân ngữ KHÔNG có động từ nữa.'
     ],ex:[{zh:'对手并不会妨碍我的发展，反而会促进经营。',vn:'Đối thủ chẳng những không cản trở sự phát triển của tôi, trái lại còn thúc đẩy kinh doanh.'},
          {zh:'旅游业的发展促进了当地经济的发展。',vn:'Sự phát triển của du lịch đã thúc đẩy kinh tế địa phương.'}]},
     {word:'促使',points:[
       'KHIẾN CHO ai / cái gì đi đến một hành động, kết quả.',
       'Cấu trúc kiêm ngữ: 促使 + người / vật + ĐỘNG TỪ (促使他改变主意).',
       'Thiếu động từ phía sau là sai: ✗ 促使经济.'
     ],ex:[{zh:'最后老师的话促使他改变了主意。',vn:'Cuối cùng lời thầy đã khiến cậu ấy thay đổi ý định.'},
          {zh:'适当有一些“敌人”，会促使它们生长得更好。',vn:'Có một ít "kẻ thù" vừa phải sẽ khiến chúng sinh trưởng tốt hơn.'}]}
   ],
   quiz:[
     {sentence:'最后老师的话＿＿他改变了主意。',options:['促进','促使'],answer:1,
      why:'Sau tân ngữ 他 còn động từ 改变 → cấu trúc kiêm ngữ → 促使 (bài tập 2 của sách).'},
     {sentence:'这次交流活动＿＿了两国学生之间的友谊。',options:['促进','促使'],answer:0,
      why:'Tân ngữ là danh từ 友谊, không có động từ phía sau → 促进.'},
     {sentence:'那次失败＿＿她更加努力地学习。',options:['促进','促使'],answer:1,
      why:'促使 + 她 + 学习: khiến cô ấy học chăm hơn.'},
     {sentence:'新技术的出现大大＿＿了经济的发展。',options:['促进','促使'],answer:0,
      why:'促进 + 发展 là kết hợp cố định (bảng 词语搭配).'}
   ]},

  {pair:'利润 — 利益',
   same:'Đều là DANH TỪ, đều liên quan đến cái "lợi" mà người ta thu được.',
   sameEx:{zh:'做生意不能只看利润，也要考虑客户的利益。',vn:'Làm ăn không thể chỉ nhìn lợi nhuận, còn phải nghĩ đến lợi ích của khách hàng.'},
   items:[
     {word:'利润',points:[
       'TIỀN LÃI cụ thể thu được sau khi trừ chi phí trong kinh doanh.',
       'Đi với 高 / 低 / 增长 / 提高: 利润不高.',
       'Chỉ dùng trong kinh doanh, sản xuất.'
     ],ex:[{zh:'虽然每件商品的利润都并不高，但他诚信经营。',vn:'Tuy lãi trên mỗi món hàng không cao, nhưng anh kinh doanh trung thực.'},
          {zh:'我们这个是薄利多销，本来就没有多少利润。',vn:'Hàng chúng tôi lãi ít bán nhiều, vốn chẳng có bao nhiêu lãi.'}]},
     {word:'利益',points:[
       'Mọi điều CÓ LỢI (tiền bạc, quyền lợi, tinh thần), phạm vi rộng hơn.',
       'Kết hợp: 个人利益 / 集体利益 / 国家利益 / 获得利益.',
       'Không nói 利益很高; không dùng để chỉ số tiền lãi cụ thể.'
     ],ex:[{zh:'对手反而会促进经营，让我获得更多利益。',vn:'Đối thủ trái lại còn thúc đẩy kinh doanh, giúp tôi có thêm nhiều lợi ích.'},
          {zh:'我们不能只考虑个人利益。',vn:'Chúng ta không thể chỉ nghĩ đến lợi ích cá nhân.'}]}
   ],
   quiz:[
     {sentence:'我们这个是薄利多销，本来就没有多少＿＿。',options:['利润','利益'],answer:0,
      why:'Tiền lãi cụ thể trong buôn bán (薄利多销) → 利润 (bài tập 1 của sách).'},
     {sentence:'我们不能只考虑个人＿＿，也要考虑集体＿＿。',options:['利润','利益'],answer:1,
      why:'个人利益 / 集体利益 — quyền lợi nói chung, không phải tiền lãi.'},
     {sentence:'今年公司的＿＿比去年增长了百分之二十。',options:['利润','利益'],answer:0,
      why:'Con số tiền lãi của công ty, đi với 增长 → 利润.'},
     {sentence:'这项合作对双方都有＿＿。',options:['利润','利益'],answer:1,
      why:'Có lợi cho cả hai bên (nói chung) → 有利益.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'利润',hv:'lợi nhuận',vn:'lợi nhuận',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'利益',hv:'lợi ích',vn:'lợi ích',note:'Trùng khít.'},
    {zh:'合理',hv:'hợp lý',vn:'hợp lý',note:'Trùng khít — 价格合理 = giá cả hợp lý.'},
    {zh:'生态',hv:'sinh thái',vn:'sinh thái',note:'Trùng khít — 生态平衡 = cân bằng sinh thái.'},
    {zh:'领域',hv:'lĩnh vực',vn:'lĩnh vực',note:'Trùng khít.'},
    {zh:'生长',hv:'sinh trưởng',vn:'sinh trưởng',note:'Trùng khít — dùng cho cây cối, sinh vật.'},
    {zh:'促进',hv:'xúc tiến',vn:'thúc đẩy, xúc tiến',note:'Như "xúc tiến thương mại" — 促进经济发展.'},
    {zh:'维持',hv:'duy trì',vn:'duy trì',note:'Trùng khít — 维持秩序 = duy trì trật tự.'},
    {zh:'饱和',hv:'bão hoà',vn:'bão hoà',note:'Trùng khít — 市场饱和 = thị trường bão hoà.'},
    {zh:'商业',hv:'thương nghiệp',vn:'thương mại',note:'"Thương nghiệp" — tiếng Việt nay hay nói "thương mại".'},
    {zh:'垄断',hv:'lũng đoạn',vn:'độc quyền',note:'Cùng gốc với "lũng đoạn", nhưng trong kinh tế nên dịch là "độc quyền".'},
    {zh:'诚信',hv:'thành tín',vn:'trung thực, giữ chữ tín',note:'"Thành" (thật lòng) + "tín" (chữ tín).'},
    {zh:'热心',hv:'nhiệt tâm',vn:'nhiệt tình',note:'Tiếng Việt cũng có "nhiệt tâm" — sốt sắng, hết lòng.'},
    {zh:'万一',hv:'vạn nhất',vn:'ngộ nhỡ, lỡ như',note:'"Một phần vạn" — khả năng rất nhỏ; tiếng Việt cũ cũng nói "vạn nhất".'}
  ],
  idiom:[
    {zh:'薄利多销',hv:'bạc lợi đa tiêu',vn:'lãi ít bán nhiều',note:'Thành ngữ kinh doanh trong bài: 薄 = mỏng (ít), 销 = tiêu thụ.'},
    {zh:'货比三家',hv:'hoá tỉ tam gia',vn:'so hàng ba nhà',note:'Mua gì cũng nên so sánh ở vài cửa hàng rồi mới quyết định.'},
    {zh:'优中选优',hv:'ưu trung tuyển ưu',vn:'chọn cái tốt nhất trong những cái tốt',note:'Cách nói trong bài: 让客户有所比较和优中选优.'},
    {zh:'不怕一万，就怕万一',hv:'bất phạ nhất vạn, tựu phạ vạn nhất',vn:'cẩn tắc vô áy náy',note:'Câu ví dụ của 万一 trong sách — không sợ 1 vạn lần bình thường, chỉ sợ 1 lần bất trắc.'},
    {zh:'适者生存',hv:'thích giả sinh tồn',vn:'kẻ thích nghi thì sống sót',note:'Thuyết của Darwin trong phần 运用: 能够适应环境的人才能够很好地存在.'}
  ],
  trap:[
    {zh:'营业',hv:'doanh nghiệp',vn:'mở cửa kinh doanh',
     warn:'BẪY: "doanh nghiệp" tiếng Việt là công ty (= 企业). 营业 là ĐỘNG TỪ: cửa hàng mở cửa bán — 24小时营业, 营业时间.'},
    {zh:'对象',hv:'đối tượng',vn:'đối tượng; người yêu',
     warn:'Khẩu ngữ 找对象 = tìm NGƯỜI YÊU, không phải "tìm đối tượng" theo nghĩa xấu như tiếng Việt ("đối tượng khả nghi").'},
    {zh:'干脆',hv:'can thuý',vn:'dứt khoát, thôi thì cứ',
     warn:'Âm Hán Việt không gợi nghĩa. 脆 = giòn → nói năng "giòn tan", gọn gàng → dứt khoát.'},
    {zh:'倒霉',hv:'đảo môi',vn:'xui xẻo',
     warn:'Không phải "đảo" (lật ngược) hay "mai" (mơ). Nhớ cả cụm: 真倒霉 = xui thật!'},
    {zh:'倒闭',hv:'đảo bế',vn:'phá sản, đóng cửa hẳn',
     warn:'倒 (đổ) + 闭 (đóng) = đổ và đóng cửa luôn. Khác 关门 (có thể chỉ đóng cửa cuối ngày).'},
    {zh:'公寓',hv:'công ngụ',vn:'chung cư, căn hộ',
     warn:'Không phải "công" (của nhà nước). 寓 = nơi ở trọ → 公寓 = toà nhà nhiều căn hộ để ở.'},
    {zh:'文具',hv:'văn cụ',vn:'văn phòng phẩm',
     warn:'Không phải "dụng cụ văn nghệ". 文具 = bút, thước, vở… đồ dùng học tập.'},
    {zh:'傻',hv:'xoạ',vn:'ngốc, dại',
     warn:'Không có từ Hán Việt tương ứng thông dụng. Nói người khác 傻 có thể xúc phạm; 你怎么这么傻 thường là trách yêu.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 của sách (tr. 100) + bài khoá
// ══════════════════════════════════════════
var matchData = [
  {left:'培养',right:'兴趣'},
  {left:'促使',right:'他成长'},
  {left:'妨碍',right:'交通'},
  {left:'促进',right:'两国友谊'},
  {left:'一套',right:'公寓'},
  {left:'一节',right:'电池'},
  {left:'资金',right:'紧张'},
  {left:'价格',right:'合理'},
  {left:'诚信',right:'经营'},
  {left:'垄断',right:'市场'},
  {left:'挤垮',right:'对手'},
  {left:'媒体的',right:'采访对象'},
  {left:'保持',right:'生态平衡'},
  {left:'维持',right:'秩序'},
  {left:'获得',right:'利益'},
  {left:'商业',right:'领域'},
  {left:'快要',right:'倒闭'},
  {left:'市场',right:'饱和'},
  {left:'热心地',right:'帮助'},
  {left:'适当',right:'休息'},
  {left:'营业',right:'时间'},
  {left:'以防',right:'万一'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'让他们俩在一起多待一会儿吧，',blank:'培养',post:'一下感情。',hint:'(vun đắp)',ans:'培养'},
  {pre:'我下棋从来没赢过爷爷，根本不是他的',blank:'对手',post:'。',hint:'(đối thủ)',ans:'对手'},
  {pre:'我觉得这套',blank:'公寓',post:'不错，大小合适，价钱便宜。',hint:'(căn hộ)',ans:'公寓'},
  {pre:'开学前，妈妈带我去买了一套新',blank:'文具',post:'。',hint:'(đồ dùng học tập)',ans:'文具'},
  {pre:'我的手机',blank:'电池',post:'不行了，得去换一块。',hint:'(pin)',ans:'电池'},
  {pre:'牙膏、毛巾、洗发水都是常见的',blank:'日用品',post:'。',hint:'(đồ dùng hằng ngày)',ans:'日用品'},
  {pre:'我们这个是薄利多销，本来就没有多少',blank:'利润',post:'。',hint:'(lợi nhuận)',ans:'利润'},
  {pre:'做生意最重要的是讲',blank:'诚信',post:'。',hint:'(chữ tín)',ans:'诚信'},
  {pre:'听说你的书店开得挺红火的，最近都有',blank:'媒体',post:'来采访你了。',hint:'(báo chí)',ans:'媒体'},
  {pre:'这次调查的',blank:'对象',post:'是三百名中学生。',hint:'(đối tượng)',ans:'对象'},
  {pre:'这家超市24小时',blank:'营业',post:'，半夜也能买东西。',hint:'(mở cửa bán hàng)',ans:'营业'},
  {pre:'这次去北京学习的名',blank:'额',post:'只有五个。',hint:'(suất)',ans:'额'},
  {pre:'三家的营业额加起来还',blank:'不如',post:'他一家高。',hint:'(không bằng)',ans:'不如'},
  {pre:'我已经试了六次了，还是不行，我看我',blank:'干脆',post:'放弃好了。',hint:'(dứt khoát)',ans:'干脆'},
  {pre:'坐车的人太多了，我',blank:'挤',post:'了半天才上了车。',hint:'(chen)',ans:'挤'},
  {pre:'他每天工作十几个小时，身体终于累',blank:'垮',post:'了。',hint:'(gục, sụp)',ans:'垮'},
  {pre:'一家公司',blank:'垄断',post:'了市场，价格就很难降下来。',hint:'(độc chiếm)',ans:'垄断'},
  {pre:'由于经营不好，那家工厂去年',blank:'倒闭',post:'了。',hint:'(phá sản)',ans:'倒闭'},
  {pre:'我们班长是个',blank:'热心',post:'人，谁有困难她都愿意帮忙。',hint:'(nhiệt tình)',ans:'热心'},
  {pre:'这次活动，学校为我们提供了',blank:'资金',post:'支持。',hint:'(kinh phí)',ans:'资金'},
  {pre:'你怎么这么',blank:'傻',post:'？就让他们倒霉，不好吗？',hint:'(dại)',ans:'傻'},
  {pre:'真',blank:'倒霉',post:'，刚出门就下雨了，我又没带伞。',hint:'(xui)',ans:'倒霉'},
  {pre:'乱砍树木会破坏当地的',blank:'生态',post:'环境。',hint:'(sinh thái)',ans:'生态'},
  {pre:'周末我和朋友常去市中心的',blank:'商业',post:'街逛逛。',hint:'(thương mại)',ans:'商业'},
  {pre:'这个理论已经被应用到商业',blank:'领域',post:'。',hint:'(lĩnh vực)',ans:'领域'},
  {pre:'考试前也要',blank:'适当',post:'休息，别学得太累了。',hint:'(hợp lý, vừa phải)',ans:'适当'},
  {pre:'最后老师的话',blank:'促使',post:'他改变了主意。',hint:'(khiến cho)',ans:'促使'},
  {pre:'植物的',blank:'生长',post:'离不开阳光和水。',hint:'(sinh trưởng)',ans:'生长'},
  {pre:'太晚了，我先走了，不',blank:'妨碍',post:'您休息。',hint:'(làm phiền)',ans:'妨碍'},
  {pre:'旅游业的发展',blank:'促进',post:'了当地经济的发展。',hint:'(thúc đẩy)',ans:'促进'},
  {pre:'我们不能只考虑个人',blank:'利益',post:'。',hint:'(lợi ích)',ans:'利益'},
  {pre:'对她的',blank:'合理',post:'要求你不应该拒绝。',hint:'(hợp lý)',ans:'合理'},
  {pre:'拿把伞吧，',blank:'万一',post:'下雨呢？',hint:'(lỡ như)',ans:'万一'},
  {pre:'警察正在路口',blank:'维持',post:'交通秩序。',hint:'(duy trì)',ans:'维持'},
  {pre:'这个城市的奶茶店太多了，市场已经',blank:'饱和',post:'了。',hint:'(bão hoà)',ans:'饱和'},
  {pre:'你们上次赢了，这次就肯定也能赢吗？我看',blank:'不见得',post:'。',hint:'(chưa chắc)',ans:'不见得'},
  {pre:'',blank:'建伟',post:'在大学的一座公寓楼里开了一家书店。',hint:'(tên nhân vật chính)',ans:'建伟'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (不如 · 干脆 · 万一) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['三家的','营业额','加起来','还不如','他一家','高','。'],ans:'三家的营业额加起来还不如他一家高。',audio:'三家的营业额加起来还不如他一家高。'},
  {words:['我的','发音','不如','她','。'],ans:'我的发音不如她。',audio:'我的发音不如她。'},
  {words:['在房间睡觉','不如','出去','走走','。'],ans:'在房间睡觉不如出去走走。',audio:'在房间睡觉不如出去走走。'},
  {words:['我看','我','干脆','放弃','好了','。'],ans:'我看我干脆放弃好了。',audio:'我看我干脆放弃好了。'},
  {words:['我求他帮忙','，','他','答应得','很干脆','。'],ans:'我求他帮忙，他答应得很干脆。',audio:'我求他帮忙，他答应得很干脆。'},
  {words:['他上周迟到','，','这周','干脆','不来了','。'],ans:'他上周迟到，这周干脆不来了。',audio:'他上周迟到，这周干脆不来了。'},
  {words:['拿把伞吧','，','万一','下雨','呢','？'],ans:'拿把伞吧，万一下雨呢？',audio:'拿把伞吧，万一下雨呢？'},
  {words:['你','小心一点','，','万一','受伤','就麻烦了','。'],ans:'你小心一点，万一受伤就麻烦了。',audio:'你小心一点，万一受伤就麻烦了。'},
  {words:['她','总是','带着','一把伞','，','以防万一','。'],ans:'她总是带着一把伞，以防万一。',audio:'她总是带着一把伞，以防万一。'},
  {words:['对她的','合理要求','你','不应该','拒绝','。'],ans:'对她的合理要求你不应该拒绝。',audio:'对她的合理要求你不应该拒绝。'},
  {words:['对手','不见得','会妨碍','我们的','发展','。'],ans:'对手不见得会妨碍我们的发展。',audio:'对手不见得会妨碍我们的发展。'},
  {words:['这个理论','已经','被应用到','商业领域','。'],ans:'这个理论已经被应用到商业领域。',audio:'这个理论已经被应用到商业领域。'},
  {words:['我','要继续','把对手','培养好','。'],ans:'我要继续把对手培养好。',audio:'我要继续把对手培养好。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'所有的事都____在这一个星期了。',opts:['挤','拥挤','垮','饱和'],ans:0,
   exp:'Việc dồn vào cùng một khoảng thời gian → 挤 (câu mẫu phần 做一做 của sách). 拥挤 không có nghĩa này.'},
  {wrong:'由于人群____，有人受了伤。',opts:['拥挤','挤垮','倒闭','饱和'],ans:0,
   exp:'人群拥挤 = đám đông chen chúc (văn viết). 挤垮 là chèn cho sập; 倒闭 dùng cho công ty.'},
  {wrong:'他假装伤心，____出了两滴眼泪。',opts:['挤','拥挤','促使','维持'],ans:0,
   exp:'Nặn cho nước mắt chảy ra → 挤出. 拥挤 không có nghĩa "bóp, nặn".'},
  {wrong:'最后老师的话____他改变了主意。',opts:['促使','促进','妨碍','培养'],ans:0,
   exp:'促使 + 他 + 改变 (kiêm ngữ, sau tân ngữ còn động từ). 促进 chỉ mang tân ngữ danh từ (bài tập 2 của sách).'},
  {wrong:'新技术的出现大大____了经济的发展。',opts:['促进','促使','维持','垄断'],ans:0,
   exp:'促进 + 发展 (bảng 词语搭配). 促使 phải có động từ sau tân ngữ.'},
  {wrong:'今年公司的____比去年增长了百分之二十。',opts:['利润','利益','资金','对象'],ans:0,
   exp:'Con số tiền lãi, đi với 增长 → 利润. 利益 là lợi ích nói chung.'},
  {wrong:'这项合作对双方都有____。',opts:['利益','利润','资金','营业'],ans:0,
   exp:'Có lợi cho cả hai bên (nói chung) → 利益.'},
  {wrong:'她的汉语说得很好，我的发音____她。',opts:['不如','没有','不见得','万一'],ans:0,
   exp:'A 不如 B có thể kết thúc câu ngay sau B. 没有 phải có tính từ phía sau (没有她好) — bài tập 2 của sách.'},
  {wrong:'我建议你别去看那个演出，我已经看过了，很____！',opts:['糟糕','倒霉','傻','热心'],ans:0,
   exp:'Buổi diễn DỞ → 糟糕 (nói về sự việc). 倒霉 chỉ vận xui của người — bài tập 2 của sách.'},
  {wrong:'阳台、卧室的整体感觉都不错。但是桌子摆这儿，明显不____。',opts:['合理','有理','适当地','干脆'],ans:0,
   exp:'Cách bố trí không hợp lý → 不合理. 有理 là "có lý" khi tranh luận (说得有理).'},
  {wrong:'我已经试了六次了，还是不行，我看我____放弃好了。',opts:['干脆','万一','不如','适当'],ans:0,
   exp:'Thôi thì dứt khoát bỏ luôn → 干脆 + V. Câu ví dụ của sách.'},
  {wrong:'拿把伞吧，____下雨呢？',opts:['万一','干脆','不见得','如果说'],ans:0,
   exp:'Lỡ như trời mưa (việc không mong muốn, khả năng nhỏ) → 万一.'},
  {wrong:'你们上次赢了，这次就肯定也能赢吗？我看____。',opts:['不见得','不如','干脆','万一'],ans:0,
   exp:'Phản bác nhẹ "chưa chắc" → 我看不见得 (bài tập 1 của sách).'},
  {wrong:'我觉得这____公寓不错，大小合适，价钱便宜。',opts:['套','节','块','张'],ans:0,
   exp:'Lượng từ của căn hộ: 一套公寓 (bảng 词语搭配). 节 / 块 dùng cho pin.'},
  {wrong:'这个遥控器要用两____电池。',opts:['节','套','所','间'],ans:0,
   exp:'Pin tiểu: 一节电池 (bảng 词语搭配).'},
  {wrong:'公司刚开始的时候资金很____。',opts:['紧张','合理','热心','饱和'],ans:0,
   exp:'资金 + 紧张 / 不足 = vốn eo hẹp (bảng 词语搭配).'},
  {wrong:'在图书馆里大声说话会____别人学习。',opts:['妨碍','促进','维持','培养'],ans:0,
   exp:'妨碍 + 别人学习 = làm phiền người khác học (bảng 词语搭配).'},
  {wrong:'学校应该____学生独立思考的能力。',opts:['培养','促使','维持','垄断'],ans:0,
   exp:'培养 + 能力 (bảng 词语搭配). 促使 cần động từ sau tân ngữ.'},
  {wrong:'我会在____的时候把这件事告诉她。',opts:['适当','合理','干脆','热心'],ans:0,
   exp:'在适当的时候 = vào lúc thích hợp. 合理 nói về giá cả, cách sắp xếp.'},
  {wrong:'警察正在路口____交通秩序。',opts:['维持','保持','促进','生长'],ans:0,
   exp:'维持秩序 là kết hợp cố định. 保持 đi với 联系 / 健康 / 安静.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Phát âm của tôi không bằng cô ấy.',zh:'我的发音不如她。',py:'Wǒ de fāyīn bùrú tā.'},
  {vi:'Hôm nay nắng đẹp thật, ngủ trong phòng chi bằng ra ngoài đi dạo.',zh:'今天阳光真好，在房间睡觉不如出去走走。',py:'Jīntiān yángguāng zhēn hǎo, zài fángjiān shuìjiào bùrú chūqu zǒuzou.'},
  {vi:'Tôi đã thử sáu lần rồi mà vẫn không được, thôi dứt khoát bỏ cho xong.',zh:'我已经试了六次了，还是不行，我看我干脆放弃好了。',py:'Wǒ yǐjīng shìle liù cì le, háishi bù xíng, wǒ kàn wǒ gāncuì fàngqì hǎo le.'},
  {vi:'Cầm theo cái ô đi, lỡ trời mưa thì sao?',zh:'拿把伞吧，万一下雨呢？',py:'Ná bǎ sǎn ba, wànyī xià yǔ ne?'},
  {vi:'Với yêu cầu hợp lý của cô ấy, bạn không nên từ chối.',zh:'对她的合理要求你不应该拒绝。',py:'Duì tā de hélǐ yāoqiú nǐ bù yīnggāi jùjué.'},
  {vi:'Đối thủ chưa chắc sẽ cản trở sự phát triển của chúng ta.',zh:'对手不见得会妨碍我们的发展。',py:'Duìshǒu bújiàndé huì fáng\'ài wǒmen de fāzhǎn.'},
  {vi:'Lý thuyết này đã được ứng dụng vào lĩnh vực thương mại.',zh:'这个理论已经被应用到商业领域。',py:'Zhège lǐlùn yǐjīng bèi yìngyòng dào shāngyè lǐngyù.'},
  {vi:'Cuối cùng lời thầy giáo đã khiến cậu ấy thay đổi ý định.',zh:'最后老师的话促使他改变了主意。',py:'Zuìhòu lǎoshī de huà cùshǐ tā gǎibiànle zhǔyi.'}
];

// Chiều Trung → Việt — câu của bài khoá
var translateDataRev = [
  {vi:'Tuy lợi nhuận trên mỗi món hàng đều không cao, nhưng anh kinh doanh trung thực, lãi ít bán nhiều.',zh:'虽然每件商品的利润都并不高，但他诚信经营，薄利多销。',py:'Suīrán měi jiàn shāngpǐn de lìrùn dōu bìng bù gāo, dàn tā chéngxìn jīngyíng, bó lì duō xiāo.'},
  {vi:'Doanh thu của cả ba hiệu cộng lại còn không bằng một mình hiệu của anh.',zh:'三家的营业额加起来还不如他一家高。',py:'Sān jiā de yíngyè\'é jiā qilai hái bùrú tā yì jiā gāo.'},
  {vi:'Nhiều người thân bạn bè liền khuyên anh dứt khoát chèn cho ba hiệu sách kia sập, độc chiếm thị trường này.',zh:'许多亲朋好友便建议他干脆把另三家书店挤垮，垄断这个市场。',py:'Xǔduō qīnpéng hǎoyǒu biàn jiànyì tā gāncuì bǎ lìng sān jiā shūdiàn jǐkuǎ, lǒngduàn zhège shìchǎng.'},
  {vi:'Với một hiệu sách sắp phải đóng cửa, anh còn chủ động nhiệt tình cho họ vay vốn.',zh:'对于一家快要倒闭的书店，他还主动热心地借给其资金。',py:'Duìyú yì jiā kuàiyào dǎobì de shūdiàn, tā hái zhǔdòng rèxīn de jiè gěi qí zījīn.'},
  {vi:'Sao anh dại thế? Cứ để bọn họ xui xẻo, chẳng tốt sao?!',zh:'你怎么这么傻？就让他们倒霉，不好吗？！',py:'Nǐ zěnme zhème shǎ? Jiù ràng tāmen dǎoméi, bù hǎo ma?!'},
  {vi:'Đối thủ chẳng những không cản trở sự phát triển của tôi, trái lại còn thúc đẩy kinh doanh.',zh:'对手并不会妨碍我的发展，反而会促进经营。',py:'Duìshǒu bìng bú huì fáng\'ài wǒ de fāzhǎn, fǎn\'ér huì cùjìn jīngyíng.'},
  {vi:'Lỡ như họ tự chạy sang chợ sách khác để "so hàng ba nhà", thì việc làm ăn của tôi coi như xong.',zh:'万一他们自己跑到其他图书市场去“货比三家”，那我的生意就完了。',py:'Wànyī tāmen zìjǐ pǎodào qítā túshū shìchǎng qù "huò bǐ sān jiā", nà wǒ de shēngyi jiù wán le.'},
  {vi:'Để giữ "cân bằng sinh thái" kinh doanh như hiện nay, tôi phải tiếp tục "nuôi dưỡng" đối thủ cho tốt.',zh:'为了保持目前这种经营的“生态平衡”，我要继续把对手培养好。',py:'Wèile bǎochí mùqián zhè zhǒng jīngyíng de "shēngtài pínghéng", wǒ yào jìxù bǎ duìshǒu péiyǎng hǎo.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết (theo 命题写作 của sách: 如果我是建伟)
// ══════════════════════════════════════════
var writingData = {
  words:['对手','利润','合理','万一','不见得'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ với chủ đề "Nếu tôi là Kiến Vĩ", nêu cách em sẽ đối xử với đối thủ cạnh tranh và lý do.',
  outline:[
    'Câu mở: nêu lựa chọn của em — nếu là Kiến Vĩ, em có chèn ép đối thủ không.',
    'Thân 1: điều quan trọng nhất khi kinh doanh (dùng 利润, 合理).',
    'Thân 2: vì sao không nên chèn cho đối thủ sập hết (dùng 不见得, 万一).',
    'Kết: bài học rút ra — cạnh tranh giúp cùng tiến bộ (dùng 对手).'
  ],
  model:{
    zh:'如果我是建伟，我也不会挤垮另外三家书店。虽然每本书的利润不高，但是只要服务好、价格合理，学生们自然会来买。把别的书店都挤垮了，不见得是件好事。万一来了一个更强的新书店，我的生意可能就完了。所以，我也会像建伟一样，跟对手一起进步。',
    py:'Rúguǒ wǒ shì Jiànwěi, wǒ yě bú huì jǐkuǎ lìngwài sān jiā shūdiàn. Suīrán měi běn shū de lìrùn bù gāo, dànshì zhǐyào fúwù hǎo, jiàgé hélǐ, xuéshengmen zìrán huì lái mǎi. Bǎ bié de shūdiàn dōu jǐkuǎ le, bújiàndé shì jiàn hǎoshì. Wànyī láile yí ge gèng qiáng de xīn shūdiàn, wǒ de shēngyi kěnéng jiù wán le. Suǒyǐ, wǒ yě huì xiàng Jiànwěi yíyàng, gēn duìshǒu yìqǐ jìnbù.',
    vn:'Nếu tôi là Kiến Vĩ, tôi cũng sẽ không chèn cho ba hiệu sách kia sập tiệm. Tuy lãi trên mỗi cuốn sách không cao, nhưng chỉ cần phục vụ tốt, giá cả hợp lý, sinh viên tự khắc sẽ đến mua. Chèn cho các hiệu sách khác sập hết chưa chắc đã là chuyện tốt. Lỡ như có một hiệu sách mới mạnh hơn mở ra, việc làm ăn của tôi có khi coi như xong. Vì vậy, tôi cũng sẽ giống Kiến Vĩ, cùng tiến bộ với đối thủ.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '万一 có đi với chuyện KHÔNG mong muốn không (không viết 万一考上了)?',
    '合理 có đi với 价格 / 要求 / 安排 chưa, phủ định là 不合理 (không phải 没合理)?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，以“如果我是建伟”为题，谈谈你会怎样对待竞争对手。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'对手', loai:'danh từ', cach:'竞争对手 · A 是 B 的对手 · A 不是 B 的对手 · 跟对手一起进步',
     sai:[{re:'(我|他|她|我们|他们)对手(他|她|我|你)', sua:'A 是 B 的对手 / A 和 B 是对手', giai:'对手 là danh từ, không làm động từ "đối đầu với". Viết: 我是他的对手 / 我们是对手.'},
          {re:'竞争对象', sua:'竞争对手', giai:'对象 là "đối tượng" (người được hướng tới, người yêu). Đối thủ cạnh tranh là 竞争对手.'}]},
    {tu:'利润', loai:'danh từ', cach:'利润 + 高 / 低 · 获得利润 · 没有多少利润',
     sai:[{re:'(个人|集体|国家|双方的)利润', sua:'个人 / 集体 / 国家利益', giai:'Quyền lợi nói chung dùng 利益; 利润 chỉ là tiền lãi trong kinh doanh.'},
          {re:'利润(很|非常|太)多', sua:'利润很高 / 利润很大', giai:'利润 thường đi với 高 / 低 (lãi cao / thấp); 利润很多 kém tự nhiên.', nhe:true}]},
    {tu:'合理', loai:'tính từ', cach:'价格 / 收费 / 安排 + 合理 · 合理的要求 · 不合理',
     sai:[{re:'价格(很|非常)?有理', sua:'价格合理', giai:'有理 là "có lý" khi tranh luận (说得有理). Giá cả, cách sắp xếp dùng 合理.'},
          {re:'没(有)?合理', sua:'不合理', giai:'合理 là tính từ, phủ định bằng 不: 不合理.'}]},
    {tu:'万一', loai:'liên từ', cach:'万一 + việc xấu，(那)就 + hậu quả · 以防万一',
     sai:[{re:'万一[^，。]{0,8}(成功|考上|赢了|中奖|得了第一)', sua:'如果 / 要是……', giai:'万一 chỉ dùng cho khả năng xấu, không mong muốn. Việc tốt dùng 如果 / 要是.'},
          {re:'万一[^。！？]*所以', sua:'万一……，(那)就……', giai:'Vế sau của 万一 dùng (那)就 / 怎么办, không dùng 所以.'}]},
    {tu:'不见得', loai:'phó từ', cach:'不见得 + (会 / 就) + V / Adj · 我看不见得',
     sai:[{re:'见不得', sua:'不见得', giai:'见不得 = không chịu nổi khi thấy …; "chưa chắc" là 不见得.'},
          {re:'不见得[^，。！？]{0,8}吗', sua:'不见得…… (câu trần thuật)', giai:'不见得 đã là phán đoán phủ định nhẹ, không dùng trong câu hỏi 吗.', nhe:true}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'A + 不如 + B (+ Adj)', nhan:'不如', vd:'三家的营业额加起来还不如他一家高。', khi:'So sánh em / cửa hàng của em với người khác.'},
    {ten:'……，不如……', nhan:'不如', vd:'与其挤垮对手，不如跟对手一起进步。', khi:'Câu KẾT — đưa ra lựa chọn tốt hơn.'},
    {ten:'干脆 + V', nhan:'干脆', vd:'有人建议我干脆把对手挤垮。', khi:'Kể lời khuyên "dứt khoát" của người khác.'},
    {ten:'万一……，(那)就……', nhan:'万一', vd:'万一来了一个更强的对手，我的生意就完了。', khi:'Nêu rủi ro có thể xảy ra.'},
    {ten:'……，不见得是件好事', nhan:'不见得', vd:'把对手都挤垮了，不见得是件好事。', khi:'Phản bác nhẹ nhàng một ý kiến.'},
    {ten:'虽然……但是只要……就……', nhan:'虽然', vd:'虽然利润不高，但是只要价格合理，客人就会来。', khi:'Nêu điều kiện thành công (ôn HSK 4).'},
    {ten:'不但不 / 没……，反而……', nhan:'反而', vd:'建伟不但没有挤垮对手，反而借给他们资金。', khi:'Kể việc làm trái với dự đoán (câu bài khoá, ôn HSK 4).'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (câu 29–31 của sách bài tập + câu bài khoá)
  sapXep:[
    {manh:['你不应该拒绝','对她的','合理要求'],
     dap:'对她的合理要求你不应该拒绝。',
     vn:'Với yêu cầu hợp lý của cô ấy, bạn không nên từ chối.',
     giai:'Đưa tân ngữ lên đầu bằng 对……: 对 + 她的合理要求 + 你不应该拒绝. Câu 29 sách bài tập.'},
    {manh:['会妨碍','对手','不见得','我们的发展'],
     dap:'对手不见得会妨碍我们的发展。',
     chap:['我们的发展不见得会妨碍对手。'],
     vn:'Đối thủ chưa chắc sẽ cản trở sự phát triển của chúng ta.',
     giai:'不见得 + 会 + V: phó từ đứng trước động từ năng nguyện. Sách bài tập chấp nhận cả cách đảo chủ ngữ (câu 30).'},
    {manh:['应用到','这个理论','已经被','商业领域'],
     dap:'这个理论已经被应用到商业领域。',
     vn:'Lý thuyết này đã được ứng dụng vào lĩnh vực thương mại.',
     giai:'Câu 被 không có tác nhân: chủ ngữ + 已经被 + V + 到 + nơi chốn. Câu 31 sách bài tập.'},
    {manh:['还不如','三家的营业额','他一家高','加起来'],
     dap:'三家的营业额加起来还不如他一家高。',
     vn:'Doanh thu của cả ba hiệu cộng lại còn không bằng một mình hiệu của anh.',
     giai:'A (三家的营业额加起来) + 还不如 + B (他一家) + 高.'},
    {manh:['干脆','建议他','亲朋好友','把书店卖了'],
     dap:'亲朋好友建议他干脆把书店卖了。',
     vn:'Người thân bạn bè khuyên anh ấy dứt khoát bán hiệu sách đi.',
     giai:'建议 + 他 + 干脆 + 把……V: 干脆 đứng trước 把.'},
    {manh:['那就麻烦了','万一','下雨了，'],
     dap:'万一下雨了，那就麻烦了。',
     vn:'Lỡ như trời mưa thì phiền đấy.',
     giai:'万一 + việc xấu，那就 + hậu quả.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 适者生存
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (适者生存 · cạnh tranh trong kinh doanh). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 对手 · 不如 · 干脆 · 万一 · 不见得 · 合理 · 促进 · 妨碍.',
  questions:[
    {q_zh:'课文中建伟面对不如自己的竞争对手和亲友的建议，他是怎么做的？',
     q_vn:'Trong bài, đứng trước những đối thủ kém mình và lời khuyên của người thân, Kiến Vĩ đã làm gì?',
     hint:'Tóm tắt lời khuyên (干脆……挤垮) rồi việc Kiến Vĩ làm (不但没有……反而……)',
     sample:'亲朋好友建议他干脆把另外三家书店挤垮，可是他不但没有这么做，反而经常帮他们搞营销活动，还借给一家快要倒闭的书店资金。',
     sample_vn:'Người thân bạn bè khuyên anh dứt khoát chèn cho ba hiệu sách kia sập, nhưng anh không những không làm vậy, trái lại còn thường giúp họ làm tiếp thị, còn cho một hiệu sắp phá sản vay vốn.',
     note:'Câu hỏi 1 của sách — trả lời bằng cấu trúc tương phản 不但没有……反而…… rất ăn điểm.'},
    {q_zh:'你同意他的做法吗？你认为他的说法有没有道理？',
     q_vn:'Em có đồng ý với cách làm của anh ấy không? Em thấy lời anh ấy nói có lý không?',
     hint:'Nêu quan điểm + 1–2 lý do, dùng 不见得 / 万一',
     sample:'我同意。只有一家书店，学生没有比较，不见得会觉得他的书便宜。万一来了一个更强的对手，他的生意就完了。所以我觉得他说得很有道理。',
     sample_vn:'Em đồng ý. Chỉ có một hiệu sách thì sinh viên không có gì để so sánh, chưa chắc đã thấy sách của anh rẻ. Lỡ có một đối thủ mạnh hơn đến, việc làm ăn của anh coi như xong. Nên em thấy anh nói rất có lý.',
     note:'Câu hỏi 2 của sách. Bố cục: quan điểm → lý do → kết luận.'},
    {q_zh:'如果你是建伟，你会怎么做？',
     q_vn:'Nếu em là Kiến Vĩ, em sẽ làm thế nào?',
     hint:'Nói lựa chọn của em, dùng 合理 / 不如',
     sample:'如果我是建伟，我会把价格定得合理一点儿，把服务做得更好。与其挤垮对手，不如跟对手一起进步。',
     sample_vn:'Nếu em là Kiến Vĩ, em sẽ đặt giá hợp lý hơn một chút, phục vụ tốt hơn. Thay vì chèn ép đối thủ, chi bằng cùng đối thủ tiến bộ.',
     note:'Câu hỏi 3 của sách. 与其……不如…… là cấu trúc HSK 5 rất hay dùng khi đưa ra lựa chọn.'},
    {q_zh:'在学习上，你觉得有一个“对手”是好事还是坏事？',
     q_vn:'Trong học tập, em thấy có một "đối thủ" là chuyện tốt hay xấu?',
     hint:'Liên hệ bản thân, dùng 促进 / 妨碍 / 促使',
     sample:'我觉得是好事。我们班有个同学数学比我好，她促使我每天多做几道题。适当的竞争不会妨碍友谊，反而能促进学习。',
     sample_vn:'Em thấy là chuyện tốt. Lớp em có một bạn giỏi toán hơn em, bạn ấy khiến em mỗi ngày làm thêm mấy bài. Cạnh tranh vừa phải không cản trở tình bạn, trái lại còn thúc đẩy việc học.',
     note:'Chuyển ý tưởng "nuôi đối thủ" của bài sang đời sống học sinh — ví dụ càng gần càng thuyết phục.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5下·练习册》bài 29.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第29课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'学校里有好几家小超市，你们怎么都喜欢去那家？'},
            {sp:'男',zh:'那家服务好，品种齐全，价格合理。'}],
     q:'下列哪项是那家超市的优点？',qvn:'Điều nào sau đây là ưu điểm của siêu thị đó?',
     opts:['离学校最近','价格合理','营业时间长','经常打折'],ans:1,
     why:'Người nam liệt kê ba ưu điểm: 服务好，品种齐全，价格合理. Chỉ "价格合理" có trong các lựa chọn.',
     words:['合理']},

    {n:2,
     lines:[{sp:'男',zh:'那两家店生意都那么差，你干吗不挤垮他们算了？'},
            {sp:'女',zh:'我把其他两家都挤垮了，不见得是件好事，因为别人一看这么大的地方只有我一家，新店就可能会出现。'}],
     q:'女的为什么不挤垮对手？',qvn:'Vì sao người phụ nữ không chèn ép đối thủ?',
     opts:['她没有足够的资金','那两家店生意很好','怕会出现新的对手','她想跟对手合作'],ans:2,
     why:'别人一看……只有我一家，新店就可能会出现 — sợ cửa hàng mới (đối thủ mới) xuất hiện. Đúng ý của Kiến Vĩ trong bài khoá.',
     words:['挤','垮','不见得']},

    {n:3,
     lines:[{sp:'女',zh:'真不知道怎么才能把这些孩子教好！'},
            {sp:'男',zh:'你要先跟他们培养感情，然后再培养他们对钢琴的兴趣。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['孩子们不喜欢钢琴','要先跟孩子们培养感情','这些孩子教不好','应该换一位老师'],ans:1,
     why:'先跟他们培养感情，然后再培养……兴趣 — trước hết phải vun đắp tình cảm với các em.',
     words:['培养']},

    {n:4,
     lines:[{sp:'男',zh:'我觉得这套公寓不错，大小合适，价钱便宜，下面还有个小商店，买东西很方便。'},
            {sp:'女',zh:'嗯，房东看起来也很热心。'}],
     q:'他们在谈论什么？',qvn:'Họ đang bàn về cái gì?',
     opts:['小商店','房东','价钱','公寓'],ans:3,
     why:'这套公寓不错 — cả đoạn nói về căn hộ; 商店, 房东, 价钱 chỉ là chi tiết của căn hộ.',
     words:['公寓','热心']},

    {n:5,
     lines:[{sp:'女',zh:'这产品挺好的，就是价格高了点儿。'},
            {sp:'男',zh:'我们的质量肯定没话说。您要多少？如果量大的话，可以打八折。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['质量一般','价格不能再低了','买得多可以打折','只能打九折'],ans:2,
     why:'如果量大的话，可以打八折 — mua nhiều thì được giảm 20%.',
     words:[]},

    {n:6,
     lines:[{sp:'男',zh:'合同里对付款方式是怎么约定的？'},
            {sp:'女',zh:'货到后银行转账付款，对方三天内开具发票。'}],
     q:'双方约定如何付款？',qvn:'Hai bên thoả thuận thanh toán thế nào?',
     opts:['货到前付现金','货到后银行转账','三天内付现金','先开发票再付款'],ans:1,
     why:'货到后银行转账付款 = hàng đến rồi chuyển khoản. "三天内" là thời hạn xuất hoá đơn — bẫy.',
     words:[]},

    {n:7,
     lines:[{sp:'女',zh:'今天来上班，真是累死我了！'},
            {sp:'男',zh:'太阳从西边出来了，你不是从不锻炼身体吗？'},
            {sp:'女',zh:'没办法，路上太堵，地铁又挤。'},
            {sp:'男',zh:'你也该动动了。'}],
     q:'女的今天最可能是怎么来的？',qvn:'Hôm nay người phụ nữ nhiều khả năng đến bằng cách nào?',
     opts:['坐地铁','走路','开车','打车'],ans:1,
     why:'路上太堵，地铁又挤 → không đi xe, không đi tàu điện; 累死我了 + 你不是从不锻炼身体吗 → cô ấy đi bộ (vận động).',
     words:['挤']},

    {n:8,
     lines:[{sp:'男',zh:'妈，我出去买块电池。'},
            {sp:'女',zh:'拿把伞吧。'},
            {sp:'男',zh:'天气这么好，要什么伞啊？'},
            {sp:'女',zh:'万一下雨呢？天气预报说今天有雨的。'}],
     q:'女的让男的干什么？',qvn:'Người mẹ bảo con trai làm gì?',
     opts:['带把伞','买电池','看天气预报','早点儿回来'],ans:0,
     why:'拿把伞吧……万一下雨呢？ — mẹ bảo mang ô. 买电池 là việc con tự định làm — bẫy.',
     words:['电池','万一']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn rủ em cuối tuần đi Vạn Lý Trường Thành, nhưng em nghe nói cuối tuần ở đó rất đông.',
     a:{sp:'Bạn',zh:'周末咱们去趟长城怎么样？',vn:'Cuối tuần mình đi Trường Thành một chuyến nhé?'},
     need:['Dùng 不如','Đề xuất thời gian khác'],
     sample:'周末人太多了，不如下周一请一天假再去吧。',
     samplePy:'Zhōumò rén tài duō le, bùrú xià zhōuyī qǐng yì tiān jià zài qù ba.',
     sampleVn:'Cuối tuần đông quá, chi bằng thứ hai tuần sau xin nghỉ một hôm rồi đi.',
     tip:'……，不如…… = chi bằng — đưa ra lựa chọn tốt hơn. Đây là bài 练一练 (1) của sách.'},

    {scene:'Bạn cùng lớp hỏi thành tích học kỳ này của em so với học kỳ trước.',
     a:{sp:'Bạn',zh:'与上学期相比，你这学期的成绩有进步吗？',vn:'So với học kỳ trước, học kỳ này thành tích của cậu có tiến bộ không?'},
     need:['Dùng 不如','Nói thật về kết quả'],
     sample:'没有进步，这学期的成绩还不如上学期呢。',
     samplePy:'Méiyǒu jìnbù, zhè xuéqī de chéngjì hái bùrú shàng xuéqī ne.',
     sampleVn:'Không tiến bộ, thành tích học kỳ này còn không bằng học kỳ trước ấy.',
     tip:'A 还不如 B: nhấn mạnh A còn kém hơn. Bài 练一练 (2) của sách.'},

    {scene:'Chị em than công việc vừa mệt vừa lương thấp.',
     a:{sp:'Chị',zh:'现在这工作真没意思，又累挣得又少！',vn:'Công việc bây giờ chán thật, vừa mệt vừa kiếm được ít!'},
     need:['Dùng 干脆','Đưa ra lời khuyên dứt khoát'],
     sample:'那你干脆换个工作吧，别再勉强自己了。',
     samplePy:'Nà nǐ gāncuì huàn ge gōngzuò ba, bié zài miǎnqiǎng zìjǐ le.',
     sampleVn:'Thế thì chị dứt khoát đổi việc đi, đừng gượng ép bản thân nữa.',
     tip:'干脆 + V + 吧: lời khuyên dứt khoát. Bài 练一练 của sách.'},

    {scene:'Trời trông rất đẹp, bạn bảo không cần mang ô.',
     a:{sp:'Bạn',zh:'天气看起来不错，不用带伞了。',vn:'Trời trông đẹp mà, không cần mang ô đâu.'},
     need:['Dùng 万一','Thuyết phục bạn mang ô'],
     sample:'还是带上吧，万一下雨呢？天气预报说下午有雨。',
     samplePy:'Háishi dàishang ba, wànyī xià yǔ ne? Tiānqì yùbào shuō xiàwǔ yǒu yǔ.',
     sampleVn:'Cứ mang theo đi, lỡ mưa thì sao? Dự báo thời tiết nói chiều có mưa.',
     tip:'万一……呢？ = lỡ … thì sao? Chỉ dùng cho chuyện không mong muốn. Bài 练一练 (3) của sách.'},

    {scene:'Bạn nói: đội bóng lớp mình lần trước thắng rồi, lần này chắc chắn cũng thắng.',
     a:{sp:'Bạn',zh:'我们班上次赢了，这次肯定也能赢！',vn:'Lớp mình lần trước thắng rồi, lần này chắc chắn cũng thắng!'},
     need:['Dùng 不见得','Nêu lý do'],
     sample:'我看不见得，这次的对手比上次强多了，我们还得好好练。',
     samplePy:'Wǒ kàn bújiàndé, zhè cì de duìshǒu bǐ shàng cì qiáng duō le, wǒmen hái děi hǎohāor liàn.',
     sampleVn:'Tớ thấy chưa chắc, đối thủ lần này mạnh hơn lần trước nhiều, bọn mình còn phải luyện kỹ.',
     tip:'我看不见得 = tôi thấy chưa chắc — phản bác nhẹ nhàng, lịch sự.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em ghé nhà cô giáo chơi, đã muộn, em muốn xin phép về.',
     a:'太晚了，我先走了，不妨碍您休息了。',b:'我走了啊，拜拜！',better:'a',
     why:'Với cô giáo (người lớn), câu a lịch sự, quan tâm đến người nghe (不妨碍您休息). Câu b quá xuề xoà, chỉ hợp với bạn bè.'},

    {scene:'Bạn thân rủ em đi xem một bộ phim mà em thấy rất dở.',
     a:'别去了，那部电影太没意思了，不如在家打游戏。',b:'该影片的艺术水平不如预期，建议您慎重考虑。',better:'a',
     why:'Với bạn thân, câu a tự nhiên (别去了, 太没意思了). Câu b giống lời bình phim trên báo (该影片, 慎重考虑), nói với bạn nghe rất kỳ.'},

    {scene:'Thông báo của siêu thị dán ở cửa ra vào.',
     a:'本店24小时营业，商品价格合理，欢迎光临。',b:'我们店一直开着，东西也不贵，来吧！',better:'a',
     why:'Thông báo công khai dùng văn viết: 本店, 24小时营业, 价格合理, 欢迎光临. Câu b là khẩu ngữ, như nói miệng với khách quen.'},

    {scene:'Em nhắc bạn cùng phòng mang ô khi ra ngoài.',
     a:'带把伞吧，万一下雨呢？',b:'为防止降雨带来不便，建议您随身携带雨具。',better:'a',
     why:'Với bạn cùng phòng, câu a ngắn gọn, tự nhiên. Câu b giống thông báo của đài khí tượng (为防止, 雨具, 随身携带).'},

    {scene:'Báo cáo kinh doanh của công ty gửi ban giám đốc.',
     a:'今年公司利润增长了百分之二十，主要原因是市场竞争促进了产品质量的提高。',b:'今年我们赚了不少钱，因为跟别人比着干，东西越做越好了。',better:'a',
     why:'Báo cáo cần từ ngữ văn viết, chính xác: 利润增长, 百分之二十, 市场竞争, 促进. Câu b là khẩu ngữ (赚了不少钱, 比着干).'},

    {scene:'Bạn nói với em: "Cái điện thoại đắt nhất chắc chắn là tốt nhất." Em không đồng ý.',
     a:'我看不见得，贵的不一定适合你。',b:'你说得完全不对！',better:'a',
     why:'Câu a phản bác nhẹ nhàng (不见得, 不一定), vẫn giữ hoà khí. Câu b đúng ngữ pháp nhưng quá gay gắt, dễ làm bạn phật lòng.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 102)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Hiệu sách của Kiến Vĩ (建伟书店的经营情况 ①)', cue:'建伟在大学的一座公寓楼里开了一家书店……，甚至成为了……', words:['建伟','公寓','文具','电池','日用品','利润','诚信','媒体','对象']},
    {step:'Ba hiệu sách kia (建伟书店的经营情况 ②)', cue:'这个大学里另外还有三家书店……，三家的营业额加起来……', words:['营业','额','不如']},
    {step:'Lời khuyên của người thân (亲友的建议)', cue:'这时，许多亲朋好友便建议他……；有人问他：“你怎么这么……？”', words:['干脆','挤','垮','垄断','倒闭','热心','资金','傻','倒霉']},
    {step:'Kiến Vĩ trả lời: "cân bằng sinh thái" (建伟的反应 ①)', cue:'建伟说，我是在保持……。商业领域其实和自然界一样……', words:['生态','商业','领域','适当','促使','生长','妨碍','促进','利益']},
    {step:'Hai lý do của Kiến Vĩ (建伟的反应 ②)', cue:'一个原因是……；还有一个很重要的原因……。所以……', words:['合理','万一','维持','饱和','不见得','对手','培养']}
  ],
  checklist: [
    'Kể đủ ba phần của sách chưa: tình hình kinh doanh của hiệu sách → lời khuyên của người thân → cách phản ứng của Kiến Vĩ?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có dùng các từ khoá sách cho: 公寓, 利润, 媒体, 不如, 干脆, 热心, 傻, 商业, 促使, 妨碍, 促进, 万一, 不见得 không?',
    'Có dùng đúng 不如 (还不如他一家高), 干脆 (干脆把……挤垮) và 万一 (万一……，那……就……) không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 101–102) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['电池','妨碍','利润','培养','资金','不见得'],
   cau:[
     {s:'太晚了，我先走了，不＿＿您休息。', dap:['妨碍']},
     {s:'我的手机＿＿不行了，得去换一块。', dap:['电池']},
     {s:'让他们俩在一起多待一会儿吧，＿＿一下感情。', dap:['培养']},
     {s:'我们这个是薄利多销，本来就没有多少＿＿。', dap:['利润']},
     {s:'你们上次赢了，这次就肯定也能赢吗？我看＿＿。', dap:['不见得']},
     {s:'这次活动，学校为我们提供了＿＿支持。', dap:['资金']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'她的汉语说得很好，我的发音＿＿她。', opts:['不如','没有'], ans:0, giai:'A 不如 B có thể kết thúc câu ngay sau B (= không bằng B). 没有 so sánh phải có tính từ phía sau: 我的发音没有她好.'},
     {s:'我建议你别去看那个演出，我已经看过了，很＿＿！', opts:['倒霉','糟糕'], ans:1, giai:'Buổi diễn DỞ, tệ → 糟糕 (nói về sự việc, chất lượng). 倒霉 chỉ vận xui của người gặp chuyện.'},
     {s:'最后老师的话＿＿他改变了主意。', opts:['促进','促使'], ans:1, giai:'Sau tân ngữ 他 còn động từ 改变 → cấu trúc kiêm ngữ 促使 + người + V. 促进 chỉ mang tân ngữ danh từ (促进发展).'},
     {s:'阳台、卧室的整体感觉都不错。但是桌子摆这儿，明显不＿＿。', opts:['合理','有理'], ans:0, giai:'Cách bố trí đồ đạc không hợp lý → 不合理. 有理 là "có lý" khi nói, lập luận (说得有理), không nói 不有理.'}
   ]},
  {kieu:'vitri', de:'给括号里的词选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
   cau:[
     {s:'听说展览馆最近A有个B小人书展，C我们周末去D看看吧。', tu:'不如', ans:'C', giai:'……，不如 + đề nghị: 不如 đứng đầu vế sau, trước chủ ngữ 我们 → 不如我们周末去看看吧.'},
     {s:'他A上周B迟到，C这周D不来了？！', tu:'干脆', ans:'D', giai:'干脆 (phó từ) đứng trước cụm động từ 不来了: 这周干脆不来了 = tuần này dứt khoát không đến luôn.'},
     {s:'A你B小心一点，C受伤就D麻烦了。', tu:'万一', ans:'C', giai:'万一 đứng đầu vế giả thiết xấu: 万一受伤就麻烦了 = lỡ bị thương thì phiền.'},
     {s:'大家A都选的B就C是D最好的。', tu:'不见得', ans:'B', giai:'不见得 đứng trước 就 + 是: 大家都选的不见得就是最好的 = cái mọi người đều chọn chưa chắc đã là tốt nhất.'}
   ]}
];
