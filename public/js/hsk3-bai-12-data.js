// ══════════════════════════════════════════
// DATA — HSK3 Bài 12: 把重要的东西放在我这儿吧 (Hãy để những đồ quan trọng ở chỗ tôi đi)
// Nguồn: HSK标准教程3 (Giáo trình chuẩn HSK 3 — nhantriviet.com)
// ══════════════════════════════════════════
var vocabData = [
  {n:1,zh:'太阳',py:'tàiyáng',pos:'Danh từ',vn:'mặt trời',em:'☀️',lesson:1,
   explain:['Ngôi sao trung tâm hệ mặt trời, mang lại ánh sáng và nhiệt cho Trái Đất.'],
   usage:'Danh từ; thường xuất hiện trong thành ngữ "太阳从西边出来" (mặt trời mọc từ hướng tây) diễn tả điều bất ngờ, khó tin.',
   collo:['太阳出来了','晒太阳','太阳从西边出来'],
   ex_zh:'今天太阳从西边出来了吗？',ex_py:'Jīntiān tàiyáng cóng xībian chūlai le ma?',ex_vn:'Hôm nay mặt trời mọc từ hướng tây à?',
   exList:[
     {zh:'今天太阳从西边出来了吗？',py:'Jīntiān tàiyáng cóng xībian chūlai le ma?',vn:'Hôm nay mặt trời mọc từ hướng tây à?'},
     {zh:'今天太阳不错，你带我出去吧。',py:'Jīntiān tàiyáng búcuò, nǐ dài wǒ chūqu ba.',vn:'Hôm nay trời nắng đẹp, bạn đưa mình ra ngoài đi.'},
     {zh:'真的吗？太阳从西边出来了？',py:'Zhēn de ma? Tàiyáng cóng xībian chūlai le?',vn:'Thật á? Mặt trời mọc từ hướng tây à?'},
   ],
   hanzi:[
     {c:'阳',p:'yáng',type:'左右结构 · Trái-phải',st:6,ord:'阝 trái → 日 phải',rad:'阝 (phụ – gò đất)',mean:'dương, mặt trời',
      tip:'阝(sườn núi) + 日(mặt trời) → phía sườn núi CÓ ÁNH NẮNG mặt trời chiếu tới → DƯƠNG, MẶT TRỜI.',
      cf:'阴 (yīn – "âm, mây", có 月 thay vì 日")',w:'太阳 / 阳光'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sao anh đi ngủ sớm thế?',answer:'你怎么这么早就要睡觉了？',answerPy:'Nǐ zěnme zhème zǎo jiù yào shuìjiào le?',
      note:'就 diễn tả hành động xảy ra sớm/nhanh (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Tám giờ vào học, cậu ấy chín giờ mới dậy.',answer:'八点上课，他九点才起床。',answerPy:'Bā diǎn shàngkè, tā jiǔ diǎn cái qǐchuáng.',
      note:'才 diễn tả hành động xảy ra muộn/chậm (điểm ngữ pháp bài này).'},
   ]},

  {n:2,zh:'西',py:'xī',pos:'Danh từ',vn:'phía tây, hướng tây',em:'🧭',lesson:1,
   explain:['Một trong bốn hướng chính, hướng mặt trời lặn.'],
   usage:'Danh từ chỉ phương hướng; thường ghép với 边/门: 西边, 西门.',
   collo:['西边','西门','从西边'],
   ex_zh:'今天太阳从西边出来了吗？',ex_py:'Jīntiān tàiyáng cóng xībian chūlai le ma?',ex_vn:'Hôm nay mặt trời mọc từ hướng tây à?',
   exList:[
     {zh:'今天太阳从西边出来了吗？',py:'Jīntiān tàiyáng cóng xībian chūlai le ma?',vn:'Hôm nay mặt trời mọc từ hướng tây à?'},
     {zh:'我快到西门了。',py:'Wǒ kuài dào xīmén le.',vn:'Tôi sắp đến cổng tây rồi.'},
     {zh:'出了西门，向左走两百米就能看见。',py:'Chūle xīmén, xiàng zuǒ zǒu liǎngbǎi mǐ jiù néng kànjiàn.',vn:'Ra khỏi cổng tây, đi sang trái 200 mét là thấy.'},
   ],
   hanzi:[
     {c:'西',p:'xī',type:'独体字 · Chữ đơn (tượng hình)',st:6,ord:'nét liền, hình cái tổ chim',rad:'西 (á)',mean:'phía tây',
      tip:'Chữ tượng hình cổ mô phỏng hình chim VỀ TỔ lúc mặt trời lặn (hướng tây) → PHÍA TÂY.',
      cf:'酉 (yǒu – "chi dậu", hình dáng gần giống")',w:'西边 / 西门 / 东西'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Xin hỏi, gần trường có ngân hàng Trung Quốc không?',answer:'请问，学校附近有中国银行吗？',answerPy:'Qǐngwèn, xuéxiào fùjìn yǒu Zhōngguó yínháng ma?',
      note:'附近 diễn tả khu vực lân cận (ôn lại 附近 đã học ở Bài 10).'},
     {promptLang:'vi',prompt:'Ra khỏi cổng tây, đi sang trái hai trăm mét là thấy.',answer:'出了西门，向左走两百米就能看见。',answerPy:'Chūle xīmén, xiàng zuǒ zǒu liǎngbǎi mǐ jiù néng kànjiàn.',
      note:'就 diễn tả hành động sẽ xảy ra nhanh chóng, thuận lợi.'},
   ]},

  {n:3,zh:'生气',py:'shēngqì',pos:'Động từ',vn:'giận, tức giận',em:'😠',lesson:1,
   explain:['Cảm thấy tức giận, không hài lòng về điều gì đó.'],
   usage:'Động từ ly hợp; thường dùng ở dạng mệnh lệnh: 别生气.',
   collo:['很生气','别生气','经理生气了'],
   ex_zh:'经理生气了，他告诉我，明天8点不到，以后就别来了。',ex_py:'Jīnglǐ shēngqì le, tā gàosu wǒ, míngtiān bā diǎn bú dào, yǐhòu jiù bié lái le.',ex_vn:'Giám đốc giận rồi, ông ấy bảo mình, mai không đến trước 8 giờ thì sau này đừng đến nữa.',
   exList:[
     {zh:'经理生气了，他告诉我，明天8点不到，以后就别来了。',py:'Jīnglǐ shēngqì le, tā gàosu wǒ, míngtiān bā diǎn bú dào, yǐhòu jiù bié lái le.',vn:'Giám đốc giận rồi, ông ấy bảo mình, mai không đến trước 8 giờ thì sau này đừng đến nữa.'},
     {zh:'别生气，我十分钟就到。',py:'Bié shēngqì, wǒ shí fēnzhōng jiù dào.',vn:'Đừng giận, mười phút nữa tôi đến ngay.'},
     {zh:'所以我有点儿生气，不是因为他们没带铅笔，是因为他们没有好的学习习惯。',py:'Suǒyǐ wǒ yǒudiǎnr shēngqì, bú shì yīnwèi tāmen méi dài qiānbǐ, shì yīnwèi tāmen méiyǒu hǎo de xuéxí xíguàn.',vn:'Nên tôi hơi tức giận, không phải vì các em không mang bút chì, mà vì các em không có thói quen học tập tốt.'},
   ],
   hanzi:[
     {c:'气',p:'qì',type:'独体字 · Chữ đơn',st:4,ord:'nét liền',rad:'气 (khí)',mean:'khí, hơi',
      tip:'Chữ tượng hình mô phỏng luồng KHÍ bốc lên → KHÍ, HƠI; 生气 = sinh ra luồng khí trong lòng = TỨC GIẬN.',
      cf:'汽 (qì – "hơi nước", có bộ 氵")',w:'生气 / 空气 / 天气'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì giám đốc giận rồi nên Tiểu Cương 8 giờ trước phải đến công ty.',answer:'因为经理生气了，所以小刚8点前要到公司。',answerPy:'Yīnwèi jīnglǐ shēngqì le, suǒyǐ Xiǎogāng bā diǎn qián yào dào gōngsī.',
      note:'因为……所以…… nêu nguyên nhân — kết quả.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn không đến muộn thì giám đốc sẽ không giận đâu.',answer:'只要你不迟到，经理就不会生气。',answerPy:'Zhǐyào nǐ bù chídào, jīnglǐ jiù bú huì shēngqì.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 迟到 đã học ở Bài 7).'},
   ]},

  {n:4,zh:'行李箱',py:'xínglixiāng',pos:'Danh từ',vn:'hành lý, vali',em:'🧳',lesson:2,
   explain:['Vật dụng dùng để đựng đồ khi đi du lịch, công tác.'],
   usage:'Danh từ; đi cùng động từ 放/拿: 放行李箱, 拿行李箱.',
   collo:['放到行李箱里','拿行李箱','一个行李箱'],
   ex_zh:'那我帮你把衣服放到行李箱里吧。',ex_py:'Nà wǒ bāng nǐ bǎ yīfu fàngdào xínglixiāng li ba.',ex_vn:'Vậy em giúp anh xếp quần áo vào vali nhé.',
   exList:[
     {zh:'那我帮你把衣服放到行李箱里吧。',py:'Nà wǒ bāng nǐ bǎ yīfu fàngdào xínglixiāng li ba.',vn:'Vậy em giúp anh xếp quần áo vào vali nhé.'},
     {zh:'你把护照放在行李箱里了吗？',py:'Nǐ bǎ hùzhào fàng zài xínglixiāng li le ma?',vn:'Bạn để hộ chiếu trong vali rồi à?'},
     {zh:'能帮我把这些行李箱放到上面吗？我搬不动。',py:'Néng bāng wǒ bǎ zhèxiē xínglixiāng fàngdào shàngmian ma? Wǒ bān bu dòng.',vn:'Giúp tôi để những cái vali này lên trên được không? Tôi khiêng không nổi.'},
   ],
   hanzi:[
     {c:'箱',p:'xiāng',type:'上下结构 · Trên-dưới',st:15,ord:'⺮ trên → 相 dưới',rad:'⺮ (trúc – tre)',mean:'hòm, rương',
      tip:'⺮(tre, vật liệu đan) + 相(cùng nhau, ý chỉ ghép lại) → vật đan bằng tre ghép lại thành HÒM, RƯƠNG.',
      cf:'相 (xiāng – "lẫn nhau", không có bộ ⺮")',w:'行李箱 / 箱子'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em giúp anh xếp quần áo vào vali nhé.',answer:'我帮你把衣服放到行李箱里吧。',answerPy:'Wǒ bāng nǐ bǎ yīfu fàngdào xínglixiāng li ba.',
      note:'把字句2: 把+B(衣服)+动词(放)+到+vị trí (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn không mang được vali thì tôi giúp bạn xách.',answer:'如果你拿不动行李箱，我就帮你拿。',answerPy:'Rúguǒ nǐ ná bu dòng xínglixiāng, wǒ jiù bāng nǐ ná.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:5,zh:'自己',py:'zìjǐ',pos:'Đại từ',vn:'tự mình, bản thân',em:'🙋',lesson:2,
   explain:['Chỉ chính bản thân người nói hoặc người được nhắc đến.'],
   usage:'Đại từ phản thân, đứng trước động từ hoặc sau danh từ: 自己 + V, [người] + 自己.',
   collo:['自己照顾自己','自己去','靠自己'],
   ex_zh:'你要自己照顾好自己。',ex_py:'Nǐ yào zìjǐ zhàogù hǎo zìjǐ.',ex_vn:'Em phải tự chăm sóc bản thân tốt nhé.',
   exList:[
     {zh:'你要自己照顾好自己。',py:'Nǐ yào zìjǐ zhàogù hǎo zìjǐ.',vn:'Em phải tự chăm sóc bản thân tốt nhé.'},
     {zh:'我还是自己打出租车去吧。',py:'Wǒ háishi zìjǐ dǎ chūzūchē qù ba.',vn:'Tôi tự bắt taxi đi thì hơn.'},
     {zh:'我很喜欢画画儿，但是没有人教过我，我都是自己学的。',py:'Wǒ hěn xǐhuan huà huàr, dànshì méiyǒu rén jiāoguo wǒ, wǒ dōu shì zìjǐ xué de.',vn:'Tôi rất thích vẽ tranh, nhưng chưa ai dạy tôi cả, tôi đều tự học đấy.'},
   ],
   hanzi:[
     {c:'己',p:'jǐ',type:'独体字 · Chữ đơn (tượng hình)',st:3,ord:'nét liền',rad:'己 (kỷ)',mean:'bản thân, mình',
      tip:'Chữ tượng hình mô phỏng sợi dây cuộn lại tự thân → BẢN THÂN; 自(chính mình)+己(bản thân) = TỰ MÌNH.',
      cf:'已 (yǐ – "đã", hình dáng gần giống")',w:'自己 / 自己的'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần bạn tự chăm sóc bản thân tốt thì tôi sẽ yên tâm.',answer:'只要你自己照顾好自己，我就放心了。',answerPy:'Zhǐyào nǐ zìjǐ zhàogù hǎo zìjǐ, wǒ jiù fàngxīn le.',
      note:'只要……就…… diễn tả điều kiện đủ (ôn lại 照顾/放心 đã học ở Bài 5, 9).'},
     {promptLang:'vi',prompt:'Nếu bạn không biết đường thì tự hỏi người khác đi.',answer:'如果你不认识路，就自己问问别人吧。',answerPy:'Rúguǒ nǐ bú rènshi lù, jiù zìjǐ wènwen biéren ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:6,zh:'包',py:'bāo',pos:'Danh từ',vn:'cặp, túi',em:'👜',lesson:2,
   explain:['Vật dụng dùng để đựng, mang theo đồ cá nhân.'],
   usage:'Danh từ; đi cùng động từ 放/拿: 放在包里.',
   collo:['放在包里','一个包','我的包'],
   ex_zh:'我已经把我的照片放在你的包里了。',ex_py:'Wǒ yǐjīng bǎ wǒ de zhàopiàn fàng zài nǐ de bāo li le.',ex_vn:'Em đã để ảnh của em vào túi của anh rồi đấy.',
   exList:[
     {zh:'我已经把我的照片放在你的包里了。',py:'Wǒ yǐjīng bǎ wǒ de zhàopiàn fàng zài nǐ de bāo li le.',vn:'Em đã để ảnh của em vào túi của anh rồi đấy.'},
     {zh:'没有，在我包里呢，这样拿着比较方便。',py:'Méiyǒu, zài wǒ bāo li ne, zhèyàng názhe bǐjiào fāngbiàn.',vn:'Không có, ở trong túi tôi đấy, cầm thế này tiện hơn.'},
     {zh:'我的包忘在出租车上了，钱包、手机和护照都在里面。',py:'Wǒ de bāo wàng zài chūzūchē shang le, qiánbāo, shǒujī hé hùzhào dōu zài lǐmiàn.',vn:'Túi của tôi để quên trên taxi rồi, ví tiền, điện thoại và hộ chiếu đều ở trong đó.'},
   ],
   hanzi:[
     {c:'包',p:'bāo',type:'半包围结构 · Bán bao vây',st:5,ord:'勹 bao ngoài → 巳 trong',rad:'勹 (bao)',mean:'gói, bọc',
      tip:'勹(hình người khom lưng ôm) + 巳(bào thai) → hình ảnh BỌC LẤY bên trong → GÓI, BỌC, mở rộng thành TÚI, CẶP.',
      cf:'饱 (bǎo – "no bụng", có bộ 饣")',w:'包 / 书包 / 面包'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Em đã để ảnh của em vào túi của anh rồi đấy.',answer:'我已经把我的照片放在你的包里了。',answerPy:'Wǒ yǐjīng bǎ wǒ de zhàopiàn fàng zài nǐ de bāo li le.',
      note:'把字句2: 把+B(照片)+动词(放)+在+vị trí (điểm ngữ pháp bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn tìm không thấy chìa khóa thì xem trong túi thử đi.',answer:'如果你找不到钥匙，就看看包里吧。',answerPy:'Rúguǒ nǐ zhǎo bu dào yàoshi, jiù kànkan bāo li ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 找不到 đã học ở Bài 6).'},
   ]},

  {n:7,zh:'发现',py:'fāxiàn',pos:'Động từ',vn:'phát hiện',em:'🔍',lesson:3,
   explain:['Nhận ra, tìm thấy điều gì đó chưa biết trước đó.'],
   usage:'Động từ, mang tân ngữ là mệnh đề hoặc danh từ: 发现 + [sự việc]; thường đi cùng 才.',
   collo:['才发现','发现问题','没有发现'],
   ex_zh:'来机场的路上我才发现忘带护照了。',ex_py:'Lái jīchǎng de lùshang wǒ cái fāxiàn wàng dài hùzhào le.',ex_vn:'Trên đường ra sân bay em mới phát hiện quên mang hộ chiếu.',
   exList:[
     {zh:'来机场的路上我才发现忘带护照了。',py:'Lái jīchǎng de lùshang wǒ cái fāxiàn wàng dài hùzhào le.',vn:'Trên đường ra sân bay em mới phát hiện quên mang hộ chiếu.'},
     {zh:'司机把我送到机场的时候，我才发现忘记带钱包了。',py:'Sījī bǎ wǒ sòngdào jīchǎng de shíhou, wǒ cái fāxiàn wàngjì dài qiánbāo le.',vn:'Lúc tài xế chở em đến sân bay, em mới phát hiện quên mang ví tiền.'},
     {zh:'我今天上午帮他洗衣服的时候，在他那条蓝色的裤子里找到了。',py:'Wǒ jīntiān shàngwǔ bāng tā xǐ yīfu de shíhou, zài tā nà tiáo lánsè de kùzi li zhǎodào le.',vn:'Sáng nay lúc tôi giặt đồ giúp bố, tôi tìm thấy nó trong cái quần xanh của bố.'},
   ],
   hanzi:[
     {c:'现',p:'xiàn',type:'左右结构 · Trái-phải',st:8,ord:'王 trái → 见 phải',rad:'王 (ngọc)',mean:'hiện ra, xuất hiện',
      tip:'王(ngọc, ánh sáng) + 见(nhìn thấy) → ánh sáng NGỌC hiện ra trước mắt = HIỆN RA; 发(phát ra)+现(hiện ra) = PHÁT HIỆN.',
      cf:'见 (jiàn – "nhìn thấy", không có bộ 王")',w:'发现 / 现在 / 出现'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên đường ra sân bay em mới phát hiện quên mang hộ chiếu.',answer:'来机场的路上我才发现忘带护照了。',answerPy:'Lái jīchǎng de lùshang wǒ cái fāxiàn wàng dài hùzhào le.',
      note:'才 diễn tả hành động xảy ra muộn/chậm (điểm ngữ pháp bài này, ôn lại 护照 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Nếu bạn phát hiện có vấn đề gì thì hãy nói cho tôi biết ngay.',answer:'如果你发现有问题，就马上告诉我吧。',answerPy:'Rúguǒ nǐ fāxiàn yǒu wèntí, jiù mǎshàng gàosu wǒ ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:8,zh:'护照',py:'hùzhào',pos:'Danh từ',vn:'hộ chiếu',em:'📔',lesson:3,
   explain:['Giấy tờ tùy thân dùng khi xuất nhập cảnh.'],
   usage:'Danh từ; đi cùng động từ 带/办: 带护照, 办护照.',
   collo:['带护照','办护照','忘带护照'],
   ex_zh:'来机场的路上我才发现忘带护照了。',ex_py:'Lái jīchǎng de lùshang wǒ cái fāxiàn wàng dài hùzhào le.',ex_vn:'Trên đường ra sân bay em mới phát hiện quên mang hộ chiếu.',
   exList:[
     {zh:'来机场的路上我才发现忘带护照了。',py:'Lái jīchǎng de lùshang wǒ cái fāxiàn wàng dài hùzhào le.',vn:'Trên đường ra sân bay em mới phát hiện quên mang hộ chiếu.'},
     {zh:'你把护照放在行李箱里了吗？',py:'Nǐ bǎ hùzhào fàng zài xínglixiāng li le ma?',vn:'Bạn để hộ chiếu trong vali rồi à?'},
     {zh:'爸爸找了很长时间都没找到他的护照。',py:'Bàba zhǎole hěn cháng shíjiān dōu méi zhǎodào tā de hùzhào.',vn:'Bố tìm mãi mà không thấy hộ chiếu của mình đâu.'},
   ],
   hanzi:[
     {c:'照',p:'zhào',type:'上下结构 · Trên-dưới',st:13,ord:'昭 trên → 灬 dưới',rad:'灬 (hỏa – lửa)',mean:'chiếu sáng; giấy tờ',
      tip:'昭(sáng rõ) + 灬(ánh sáng) → CHIẾU SÁNG, mở rộng nghĩa "soi rõ thân phận" = giấy tờ chứng minh; 护照 = giấy BẢO HỘ (护) khi đi lại.',
      cf:'招 (zhāo – "vẫy tay, chiêu mộ", có bộ 扌")',w:'护照 / 照片 / 拍照'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bạn để hộ chiếu trong vali rồi à?',answer:'你把护照放在行李箱里了吗？',answerPy:'Nǐ bǎ hùzhào fàng zài xínglixiāng li le ma?',
      note:'把字句2: 把+B(护照)+动词(放)+在+vị trí (ôn lại 行李箱 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn quên mang hộ chiếu thì không thể lên máy bay được.',answer:'如果你忘带护照，就不能上飞机了。',answerPy:'Rúguǒ nǐ wàng dài hùzhào, jiù bù néng shàng fēijī le.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:9,zh:'起飞',py:'qǐfēi',pos:'Động từ',vn:'cất cánh (máy bay)',em:'🛫',lesson:3,
   explain:['Máy bay rời khỏi mặt đất bay lên.'],
   usage:'Động từ, thường đi cùng chủ ngữ 飞机: 飞机起飞了.',
   collo:['飞机起飞','就要起飞','马上起飞'],
   ex_zh:'快点吧，飞机就要起飞了。',ex_py:'Kuài diǎn ba, fēijī jiù yào qǐfēi le.',ex_vn:'Nhanh lên đi, máy bay sắp cất cánh rồi.',
   exList:[
     {zh:'快点吧，飞机就要起飞了。',py:'Kuài diǎn ba, fēijī jiù yào qǐfēi le.',vn:'Nhanh lên đi, máy bay sắp cất cánh rồi.'},
     {zh:'对不起，先生，飞机马上就要起飞了，请您关上手机。',py:'Duìbuqǐ, xiānsheng, fēijī mǎshàng jiù yào qǐfēi le, qǐng nín guānshàng shǒujī.',vn:'Xin lỗi anh, máy bay sắp cất cánh rồi, mời anh tắt điện thoại.'},
     {zh:'来机场的路上我才发现忘带护照了。',py:'Lái jīchǎng de lùshang wǒ cái fāxiàn wàng dài hùzhào le.',vn:'Trên đường ra sân bay em mới phát hiện quên mang hộ chiếu.'},
   ],
   hanzi:[
     {c:'飞',p:'fēi',type:'独体字 · Chữ đơn (tượng hình)',st:3,ord:'nét liền, hình con chim bay',rad:'飞 (phi)',mean:'bay',
      tip:'Chữ giản thể mô phỏng đôi CÁNH đang BAY → BAY; 起(dấy lên)+飞(bay) = CẤT CÁNH.',
      cf:'非 (fēi – "không phải", hình dáng khác hẳn")',w:'起飞 / 飞机 / 飞'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Máy bay sắp cất cánh rồi, nhanh lên đi.',answer:'飞机就要起飞了，快点吧。',answerPy:'Fēijī jiù yào qǐfēi le, kuài diǎn ba.',
      note:'就要……了 diễn tả sự việc sắp xảy ra.'},
     {promptLang:'vi',prompt:'Chỉ cần bạn đến đúng giờ thì sẽ không lỡ chuyến bay.',answer:'只要你准时到，就不会错过飞机起飞了。',answerPy:'Zhǐyào nǐ zhǔnshí dào, jiù bú huì cuòguò fēijī qǐfēi le.',
      note:'只要……就…… diễn tả điều kiện đủ.'},
   ]},

  {n:10,zh:'司机',py:'sījī',pos:'Danh từ',vn:'tài xế',em:'🚕',lesson:3,
   explain:['Người điều khiển phương tiện giao thông.'],
   usage:'Danh từ; đứng làm chủ ngữ hoặc tân ngữ trong câu.',
   collo:['出租车司机','当司机','司机把我送到'],
   ex_zh:'司机把我送到机场的时候，我才发现忘记带钱包了。',ex_py:'Sījī bǎ wǒ sòngdào jīchǎng de shíhou, wǒ cái fāxiàn wàngjì dài qiánbāo le.',ex_vn:'Lúc tài xế chở em đến sân bay, em mới phát hiện quên mang ví tiền.',
   exList:[
     {zh:'司机把我送到机场的时候，我才发现忘记带钱包了。',py:'Sījī bǎ wǒ sòngdào jīchǎng de shíhou, wǒ cái fāxiàn wàngjì dài qiánbāo le.',vn:'Lúc tài xế chở em đến sân bay, em mới phát hiện quên mang ví tiền.'},
     {zh:'他是出租车司机。',py:'Tā shì chūzūchē sījī.',vn:'Anh ấy là tài xế taxi.'},
     {zh:'我让司机明天九点前到楼下等您。',py:'Wǒ ràng sījī míngtiān jiǔ diǎn qián dào lóuxià děng nín.',vn:'Tôi bảo tài xế ngày mai trước 9 giờ xuống dưới lầu đợi anh.'},
   ],
   hanzi:[
     {c:'司',p:'sī',type:'独体字 · Chữ đơn',st:5,ord:'nét liền',rad:'口 (khẩu)',mean:'quản lý, phụ trách',
      tip:'Chữ tượng hình mô phỏng người CẦM QUYỀN ra lệnh → QUẢN LÝ; 司机 = người ĐIỀU KHIỂN (机) máy móc/xe = TÀI XẾ.',
      cf:'同 (tóng – "giống nhau", hình dáng khác")',w:'司机 / 公司'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tài xế đưa tôi đến sân bay rồi.',answer:'司机把我送到机场了。',answerPy:'Sījī bǎ wǒ sòngdào jīchǎng le.',
      note:'把字句2: 把+B(我)+动词(送)+到+vị trí (ôn lại 机场 đã học ở Bài 2).'},
     {promptLang:'vi',prompt:'Nếu tài xế không đến thì chúng ta tự bắt taxi đi vậy.',answer:'如果司机不来，我们就自己打出租车去吧。',answerPy:'Rúguǒ sījī bù lái, wǒmen jiù zìjǐ dǎ chūzūchē qù ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 自己 vừa học trong bài này).'},
   ]},

  {n:11,zh:'教',py:'jiāo',pos:'Động từ',vn:'dạy',em:'👩‍🏫',lesson:4,
   explain:['Truyền đạt kiến thức, kỹ năng cho người khác.'],
   usage:'Động từ, mang hai tân ngữ: 教 + [người] + [môn/kỹ năng] (教学生画画儿).',
   collo:['教学生','教画画儿','教了十年'],
   ex_zh:'我是一个中学老师，教学生画画儿。',ex_py:'Wǒ shì yí ge zhōngxué lǎoshī, jiāo xuésheng huà huàr.',ex_vn:'Tôi là một giáo viên trung học, dạy học sinh vẽ tranh.',
   exList:[
     {zh:'我是一个中学老师，教学生画画儿。',py:'Wǒ shì yí ge zhōngxué lǎoshī, jiāo xuésheng huà huàr.',vn:'Tôi là một giáo viên trung học, dạy học sinh vẽ tranh.'},
     {zh:'那你教教我吧，我一直想学。',py:'Nà nǐ jiāojiao wǒ ba, wǒ yìzhí xiǎng xué.',vn:'Vậy bạn dạy mình đi, mình muốn học mãi rồi.'},
     {zh:'但是没有人教过我，我都是自己学的。',py:'Dànshì méiyǒu rén jiāoguo wǒ, wǒ dōu shì zìjǐ xué de.',vn:'Nhưng chưa ai dạy tôi cả, tôi đều tự học đấy.'},
   ],
   hanzi:[
     {c:'教',p:'jiāo',type:'左右结构 · Trái-phải',st:11,ord:'孝 trái → 攵 phải',rad:'攵 (phốc – gõ nhẹ)',mean:'dạy dỗ',
      tip:'孝(hiếu thảo, học theo bậc trên) + 攵(tác động, chỉ dạy) → truyền đạt điều hay lẽ phải cho con cháu = DẠY DỖ.',
      cf:'孝 (xiào – "hiếu thảo", không có bộ 攵")',w:'教 / 教书 / 教学生'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi dạy học sinh vẽ tranh.',answer:'我教学生画画儿。',answerPy:'Wǒ jiāo xuésheng huà huàr.',
      note:'教 + người + việc (画画儿) mang hai tân ngữ (ôn lại 画 sẽ học ngay bên dưới).'},
     {promptLang:'vi',prompt:'Nếu bạn muốn học vẽ thì tôi có thể dạy bạn.',answer:'如果你想学画画儿，我就可以教你。',answerPy:'Rúguǒ nǐ xiǎng xué huà huàr, wǒ jiù kěyǐ jiāo nǐ.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},

  {n:12,zh:'画',py:'huà',pos:'Động từ',vn:'vẽ; tranh',em:'🎨',lesson:4,
   explain:['Dùng bút vẽ nên hình ảnh; cũng dùng làm danh từ chỉ bức tranh.'],
   usage:'Động từ: 画 + [đối tượng] (画画儿); Danh từ: 一张画.',
   collo:['画画儿','一张画','画得好'],
   ex_zh:'我是一个中学老师，教学生画画儿。',ex_py:'Wǒ shì yí ge zhōngxué lǎoshī, jiāo xuésheng huà huàr.',ex_vn:'Tôi là một giáo viên trung học, dạy học sinh vẽ tranh.',
   exList:[
     {zh:'我是一个中学老师，教学生画画儿。',py:'Wǒ shì yí ge zhōngxué lǎoshī, jiāo xuésheng huà huàr.',vn:'Tôi là một giáo viên trung học, dạy học sinh vẽ tranh.'},
     {zh:'我很喜欢画画儿，你看这个小狗就是我画的，可爱吗？',py:'Wǒ hěn xǐhuan huà huàr, nǐ kàn zhège xiǎogǒu jiùshì wǒ huà de, kě\'ài ma?',vn:'Tôi rất thích vẽ tranh, bạn xem con chó nhỏ này chính là tôi vẽ đấy, đáng yêu không?'},
     {zh:'太阳是我画的，小猫是妹妹画的。',py:'Tàiyáng shì wǒ huà de, xiǎomāo shì mèimei huà de.',vn:'Mặt trời là tôi vẽ, con mèo nhỏ là em gái vẽ.'},
   ],
   hanzi:[
     {c:'画',p:'huà',type:'独体字 · Chữ đơn',st:8,ord:'nét liền',rad:'田 (điền)',mean:'vẽ, bức tranh',
      tip:'Chữ giản thể mô phỏng khung tranh với đường viền bao quanh hình ảnh bên trong → VẼ, BỨC TRANH.',
      cf:'面 (miàn – "mặt", hình dáng gần giống")',w:'画画儿 / 一张画 / 画家'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy cậu ấy không mang bút chì nhưng thầy giáo vẫn dạy cậu ấy vẽ.',answer:'虽然他没带铅笔，但是老师还是教了他画画儿。',answerPy:'Suīrán tā méi dài qiānbǐ, dànshì lǎoshī háishi jiāole tā huà huàr.',
      note:'虽然……但是…… diễn tả sự tương phản (ôn lại 教 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Bức tranh này bạn vẽ đẹp thật đấy.',answer:'这张画你画得真好看。',answerPy:'Zhè zhāng huà nǐ huà de zhēn hǎokàn.',
      note:'画 vừa làm danh từ (这张画) vừa làm động từ (画得好看).'},
   ]},

  {n:13,zh:'需要',py:'xūyào',pos:'Động từ',vn:'cần',em:'✅',lesson:4,
   explain:['Có nhu cầu, đòi hỏi điều gì đó.'],
   usage:'Động từ, mang tân ngữ là danh từ hoặc động từ: 需要 + [vật/việc] (需要带的东西, 需要休息).',
   collo:['需要带','需要休息','不需要'],
   ex_zh:'我都会把下次学生需要带的东西写在黑板上。',ex_py:'Wǒ dōu huì bǎ xià cì xuésheng xūyào dài de dōngxi xiě zài hēibǎn shang.',ex_vn:'Tôi đều viết những đồ học sinh cần mang cho lần sau lên bảng.',
   exList:[
     {zh:'我都会把下次学生需要带的东西写在黑板上。',py:'Wǒ dōu huì bǎ xià cì xuésheng xūyào dài de dōngxi xiě zài hēibǎn shang.',vn:'Tôi đều viết những đồ học sinh cần mang cho lần sau lên bảng.'},
     {zh:'我们需要换新的桌子和椅子。',py:'Wǒmen xūyào huàn xīn de zhuōzi hé yǐzi.',vn:'Chúng tôi cần đổi bàn ghế mới.'},
     {zh:'不需要，休息一下就好了。',py:'Bù xūyào, xiūxi yíxià jiù hǎo le.',vn:'Không cần đâu, nghỉ một chút là được rồi.'},
   ],
   hanzi:[
     {c:'需',p:'xū',type:'上下结构 · Trên-dưới',st:14,ord:'雨 trên → 而 dưới',rad:'雨 (vũ – mưa)',mean:'cần thiết',
      tip:'雨(mưa, ý chỉ điều tất yếu của tự nhiên) + 而(và) → điều TẤT YẾU cần có = CẦN THIẾT.',
      cf:'儒 (rú – "nho gia", có bộ 亻")',w:'需要 / 不需要'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng tôi cần đổi bàn ghế mới.',answer:'我们需要换新的桌子和椅子。',answerPy:'Wǒmen xūyào huàn xīn de zhuōzi hé yǐzi.',
      note:'需要 + V diễn tả nhu cầu (ôn lại 换 đã học ở Bài 10).'},
     {promptLang:'vi',prompt:'Nếu bạn cần giúp đỡ thì cứ nói với tôi nhé.',answer:'如果你需要帮忙，就跟我说吧。',answerPy:'Rúguǒ nǐ xūyào bāngmáng, jiù gēn wǒ shuō ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả (ôn lại 帮忙 đã học ở Bài 6).'},
   ]},

  {n:14,zh:'黑板',py:'hēibǎn',pos:'Danh từ',vn:'bảng đen',em:'⬛',lesson:4,
   explain:['Tấm bảng dùng để viết phấn trong lớp học.'],
   usage:'Danh từ; đi cùng động từ 写: 写在黑板上.',
   collo:['黑板上','写在黑板上','擦黑板'],
   ex_zh:'我都会把下次学生需要带的东西写在黑板上。',ex_py:'Wǒ dōu huì bǎ xià cì xuésheng xūyào dài de dōngxi xiě zài hēibǎn shang.',ex_vn:'Tôi đều viết những đồ học sinh cần mang cho lần sau lên bảng.',
   exList:[
     {zh:'我都会把下次学生需要带的东西写在黑板上。',py:'Wǒ dōu huì bǎ xià cì xuésheng xūyào dài de dōngxi xiě zài hēibǎn shang.',vn:'Tôi đều viết những đồ học sinh cần mang cho lần sau lên bảng.'},
     {zh:'黑板上的那个字怎么读？',py:'Hēibǎn shang de nàge zì zěnme dú?',vn:'Chữ đó trên bảng đọc thế nào?'},
     {zh:'我也不认识，我查一下字典，找到了告诉你。',py:'Wǒ yě bú rènshi, wǒ chá yíxià zìdiǎn, zhǎodàole gàosu nǐ.',vn:'Tôi cũng không biết, tôi tra từ điển chút, tìm được rồi báo bạn.'},
   ],
   hanzi:[
     {c:'黑',p:'hēi',type:'上下结构 · Trên-dưới',st:12,ord:'里 trên → 灬 dưới',rad:'灬 (hỏa – lửa)',mean:'màu đen',
      tip:'Hình ảnh khói LỬA ám lên cửa sổ tạo thành màu ĐEN → MÀU ĐEN.',
      cf:'墨 (mò – "mực", có bộ 土")',w:'黑板 / 黑色 / 黑夜'},
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi viết những đồ học sinh cần mang lên bảng.',answer:'我把学生需要带的东西写在黑板上。',answerPy:'Wǒ bǎ xuésheng xūyào dài de dōngxi xiě zài hēibǎn shang.',
      note:'把字句2: 把+B(东西)+动词(写)+在+vị trí (ôn lại 需要 vừa học trong bài này).'},
     {promptLang:'vi',prompt:'Nếu bạn không hiểu chữ trên bảng thì hỏi thầy giáo đi.',answer:'如果你看不懂黑板上的字，就问问老师吧。',answerPy:'Rúguǒ nǐ kàn bu dǒng hēibǎn shang de zì, jiù wènwen lǎoshī ba.',
      note:'如果……就…… diễn tả giả thiết — kết quả.'},
   ]},
];

const wuData = [
  {img:'☀️',label:'太阳',py:'tàiyáng',letter:'A'},
  {img:'🧳',label:'行李箱',py:'xínglixiāng',letter:'B'},
  {img:'📔',label:'护照',py:'hùzhào',letter:'C'},
  {img:'🎨',label:'画',py:'huà',letter:'D'},
  {img:'⬛',label:'黑板',py:'hēibǎn',letter:'E'},
  {img:'👜',label:'包',py:'bāo',letter:'F'},
];

var dialogData = [
  {scene:'在家 · Ở nhà (buổi tối)',
   preQuiz:[
     {q:'小刚为什么这么早就要睡觉？',opts:['明天8点就要到公司','太累了','要早起爬山'],ans:0},
     {q:'经理为什么生气？',opts:['小刚经常迟到','小刚工作不好','小刚请假'],ans:0},
     {q:'以前小刚几点睡觉？',opts:['12点以后','10点','晚上很早'],ans:0},
   ],
   lines:[
     {sp:1,zh:'今天太阳从西边出来了吗？',py:'Jīntiān tàiyáng cóng xībian chūlai le ma?',vn:'Hôm nay mặt trời mọc từ hướng tây à?'},
     {sp:0,zh:'怎么了？',py:'Zěnme le?',vn:'Sao thế?'},
     {sp:1,zh:'你怎么这么早就要睡觉了？以前都要12点以后才睡觉。',py:'Nǐ zěnme zhème zǎo jiù yào shuìjiào le? Yǐqián dōu yào shí\'èr diǎn yǐhòu cái shuìjiào.',vn:'Sao anh đi ngủ sớm thế? Trước đây toàn phải sau 12 giờ mới ngủ.'},
     {sp:0,zh:'我明天8点就要到公司。',py:'Wǒ míngtiān bā diǎn jiù yào dào gōngsī.',vn:'Mai anh phải đến công ty lúc 8 giờ.'},
     {sp:1,zh:'有事吗？',py:'Yǒu shì ma?',vn:'Có chuyện gì à?'},
     {sp:0,zh:'经理生气了，他告诉我，明天8点不到，以后就别来了。',py:'Jīnglǐ shēngqì le, tā gàosu wǒ, míngtiān bā diǎn bú dào, yǐhòu jiù bié lái le.',vn:'Giám đốc giận rồi, ông ấy bảo anh, mai không đến trước 8 giờ thì sau này đừng đến nữa.'},
   ]},
  {scene:'在家 · Ở nhà (chuẩn bị đi công tác)',
   preQuiz:[
     {q:'小刚明天要做什么？',opts:['跟周经理坐飞机去外地办事','去旅游','回老家'],ans:0},
     {q:'小刚要出差多久？',opts:['一个星期','三天','一个月'],ans:0},
     {q:'小丽把什么放在小刚的包里了？',opts:['自己的照片','钱','信'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我要跟周经理去外地办事，明天的飞机。',py:'Wǒ yào gēn Zhōu jīnglǐ qù wàidì bàn shì, míngtiān de fēijī.',vn:'Anh phải đi công tác nơi khác cùng giám đốc Chu, chuyến bay ngày mai.'},
     {sp:1,zh:'那我帮你把衣服放到行李箱里吧。什么时候回来？',py:'Nà wǒ bāng nǐ bǎ yīfu fàngdào xínglixiāng li ba. Shénme shíhou huílai?',vn:'Vậy em giúp anh xếp quần áo vào vali nhé. Khi nào về?'},
     {sp:0,zh:'一个星期就回来。',py:'Yí ge xīngqī jiù huílai.',vn:'Một tuần là về rồi.'},
     {sp:1,zh:'啊？一个星期以后才回来？',py:'Á? Yí ge xīngqī yǐhòu cái huílai?',vn:'Hả? Một tuần sau mới về á?'},
     {sp:0,zh:'你要自己照顾好自己，我已经给你准备好吃的和喝的了。',py:'Nǐ yào zìjǐ zhàogù hǎo zìjǐ, wǒ yǐjīng gěi nǐ zhǔnbèi hǎo chī de hé hē de le.',vn:'Em phải tự chăm sóc bản thân tốt nhé, anh đã chuẩn bị sẵn đồ ăn đồ uống cho em rồi.'},
     {sp:1,zh:'好吧。我已经把我的照片放在你的包里了。',py:'Hǎo ba. Wǒ yǐjīng bǎ wǒ de zhàopiàn fàng zài nǐ de bāo li le.',vn:'Được rồi. Em đã để ảnh của em vào túi của anh rồi đấy.'},
   ]},
  {scene:'在机场 · Ở sân bay',
   preQuiz:[
     {q:'小刚为什么来晚了？',opts:['忘带护照了','堵车了','起晚了'],ans:0},
     {q:'小刚还忘了带什么？',opts:['钱包','手机','衣服'],ans:0},
     {q:'周明建议小刚以后怎么做？',opts:['把重要的东西放在他那儿','自己多注意','换个包'],ans:0},
   ],
   lines:[
     {sp:0,zh:'你怎么才来？',py:'Nǐ zěnme cái lái?',vn:'Sao giờ mới đến vậy?'},
     {sp:1,zh:'对不起，周经理，来机场的路上我才发现忘带护照了。',py:'Duìbuqǐ, Zhōu jīnglǐ, lái jīchǎng de lùshang wǒ cái fāxiàn wàng dài hùzhào le.',vn:'Xin lỗi giám đốc Chu, trên đường ra sân bay em mới phát hiện quên mang hộ chiếu.'},
     {sp:0,zh:'快点吧，飞机就要起飞了。',py:'Kuài diǎn ba, fēijī jiù yào qǐfēi le.',vn:'Nhanh lên đi, máy bay sắp cất cánh rồi.'},
     {sp:1,zh:'您有钱吗？司机把我送到机场的时候，我才发现忘记带钱包了。',py:'Nín yǒu qián ma? Sījī bǎ wǒ sòngdào jīchǎng de shíhou, wǒ cái fāxiàn wàngjì dài qiánbāo le.',vn:'Anh có tiền không ạ? Lúc tài xế chở em đến sân bay, em mới phát hiện quên mang ví tiền.'},
     {sp:0,zh:'我看你还是把重要的东西放在我这儿吧。',py:'Wǒ kàn nǐ háishi bǎ zhòngyào de dōngxi fàngzài wǒ zhèr ba.',vn:'Tôi thấy cậu nên để những đồ quan trọng ở chỗ tôi thì hơn.'},
   ]},
  {scene:'độc bạch · Tự thuật (một giáo viên trung học)',
   preQuiz:[
     {q:'这个人的职业是什么？',opts:['中学老师','司机','医生'],ans:0},
     {q:'他每次下课前做什么？',opts:['把学生需要带的东西写在黑板上','布置作业','打扫教室'],ans:0},
     {q:'他为什么生气？',opts:['学生没有好的学习习惯','学生不听话','学生迟到'],ans:0},
   ],
   lines:[
     {sp:0,zh:'我是一个中学老师，教学生画画儿。',py:'Wǒ shì yí ge zhōngxué lǎoshī, jiāo xuésheng huà huàr.',vn:'Tôi là một giáo viên trung học, dạy học sinh vẽ tranh.'},
     {sp:0,zh:'每次下课前，我都会把下次学生需要带的东西写在黑板上，',py:'Měi cì xià kè qián, wǒ dōu huì bǎ xià cì xuésheng xūyào dài de dōngxi xiě zài hēibǎn shang,',vn:'Mỗi lần trước khi tan học, tôi đều viết lên bảng những đồ học sinh cần mang cho lần sau,'},
     {sp:0,zh:'但是每次上课时，总会有学生忘了拿铅笔，',py:'dànshì měi cì shàng kè shí, zǒng huì yǒu xuésheng wàngle ná qiānbǐ,',vn:'nhưng mỗi lần vào lớp, luôn có học sinh quên mang bút chì,'},
     {sp:0,zh:'所以我有点儿生气，不是因为他们没带铅笔，是因为他们没有好的学习习惯。',py:'suǒyǐ wǒ yǒudiǎnr shēngqì, bú shì yīnwèi tāmen méi dài qiānbǐ, shì yīnwèi tāmen méiyǒu hǎo de xuéxí xíguàn.',vn:'nên tôi hơi tức giận, không phải vì các em không mang bút chì, mà vì các em không có thói quen học tập tốt.'},
   ]},
];

// ══════════════════════════════════════════
// PHẦN 1 · GHÉP TỪ (Collocation)
// ══════════════════════════════════════════
var matchData = [
  {left:'太阳',right:'从西边出来'},
  {left:'经理',right:'生气了'},
  {left:'放到',right:'行李箱里'},
  {left:'照顾好',right:'自己'},
  {left:'忘带',right:'护照'},
  {left:'飞机',right:'起飞'},
  {left:'写在',right:'黑板上'},
  {left:'因为经理生气了，',right:'所以小刚8点前要到公司。'},
  {left:'虽然他没带铅笔，',right:'但是老师还是教了他画画儿。'},
  {left:'如果你把重要的东西放在我这儿，',right:'我就帮你收好。'},
  {left:'只要你自己照顾好自己，',right:'我就放心了。'},
];

// ══════════════════════════════════════════
// PHẦN 3a · ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'今天',blank:'太阳',post:'从西边出来了吗？',hint:'(mặt trời)',ans:'太阳'},
  {pre:'今天太阳从',blank:'西',post:'边出来了吗？',hint:'(phía tây)',ans:'西'},
  {pre:'经理',blank:'生气',post:'了。',hint:'(giận, tức giận)',ans:'生气'},
  {pre:'那我帮你把衣服放到',blank:'行李箱',post:'里吧。',hint:'(hành lý, vali)',ans:'行李箱'},
  {pre:'你要',blank:'自己',post:'照顾好自己。',hint:'(tự mình, bản thân)',ans:'自己'},
  {pre:'我已经把我的照片放在你的',blank:'包',post:'里了。',hint:'(cặp, túi)',ans:'包'},
  {pre:'来机场的路上我才',blank:'发现',post:'忘带护照了。',hint:'(phát hiện)',ans:'发现'},
  {pre:'来机场的路上我才发现忘带',blank:'护照',post:'了。',hint:'(hộ chiếu)',ans:'护照'},
  {pre:'快点吧，飞机就要',blank:'起飞',post:'了。',hint:'(cất cánh)',ans:'起飞'},
  {pre:'',blank:'司机',post:'把我送到机场的时候。',hint:'(tài xế)',ans:'司机'},
  {pre:'我',blank:'教',post:'学生画画儿。',hint:'(dạy)',ans:'教'},
  {pre:'我教学生',blank:'画',post:'画儿。',hint:'(vẽ)',ans:'画'},
  {pre:'下次学生',blank:'需要',post:'带的东西写在黑板上。',hint:'(cần)',ans:'需要'},
  {pre:'我把东西写在',blank:'黑板',post:'上。',hint:'(bảng đen)',ans:'黑板'},
];

// ══════════════════════════════════════════
// PHẦN 3b · SẮP XẾP
// ══════════════════════════════════════════
var sortData = [
  {words:['今天','太阳','从','西边','出来','了','吗','？'],ans:'今天太阳从西边出来了吗？',audio:'今天太阳从西边出来了吗？'},
  {words:['经理','生气','了','。'],ans:'经理生气了。',audio:'经理生气了。'},
  {words:['我','帮','你','把','衣服','放到','行李箱','里','吧','。'],ans:'我帮你把衣服放到行李箱里吧。',audio:'我帮你把衣服放到行李箱里吧。'},
  {words:['来','机场','的','路上','我','才','发现','忘','带','护照','了','。'],ans:'来机场的路上我才发现忘带护照了。',audio:'来机场的路上我才发现忘带护照了。'},
  {words:['因为','经理','生气','了','，','所以','小刚','8点','前','要','到','公司','。'],ans:'因为经理生气了，所以小刚8点前要到公司。',audio:'因为经理生气了，所以小刚8点前要到公司。'},
  {words:['虽然','他','没','带','铅笔','，','但是','老师','还是','教','了','他','画画儿','。'],ans:'虽然他没带铅笔，但是老师还是教了他画画儿。',audio:'虽然他没带铅笔，但是老师还是教了他画画儿。'},
  {words:['如果','你','把','重要','的','东西','放在','我','这儿','，','我','就','帮','你','收好','。'],ans:'如果你把重要的东西放在我这儿，我就帮你收好。',audio:'如果你把重要的东西放在我这儿，我就帮你收好。'},
  {words:['我','看','你','还是','把','重要','的','东西','放在','我','这儿','吧','。'],ans:'我看你还是把重要的东西放在我这儿吧。',audio:'我看你还是把重要的东西放在我这儿吧。'},
];

// ══════════════════════════════════════════
// PHẦN 3c · SỬA LỖI SAI
// ══════════════════════════════════════════
var errorFixData = [
  {wrong:'我早上五点起床就了。',
   opts:['我早上五点就起床了。','我早上五点起床就了。','我早上就五点起床了。','我早上五点了就起床。'],ans:0,
   exp:'就 (phó từ) phải đứng NGAY TRƯỚC động từ, không tách rời hoặc đặt sau 了.'},
  {wrong:'弟弟三个小时做才完作业。',
   opts:['弟弟三个小时才做完作业。','弟弟三个小时做才完作业。','弟弟才三个小时做完作业。','弟弟三个小时做完才作业。'],ans:0,
   exp:'才 phải đứng NGAY TRƯỚC động từ (做完), không chen vào giữa động từ và bổ ngữ.'},
  {wrong:'我把照片你的包在放了。',
   opts:['我把照片放在你的包里了。','我把照片你的包在放了。','我把照片放你的包在里了。','我照片把放在你的包里了。'],ans:0,
   exp:'Cấu trúc 把字句2: A+把+B+动词+在+vị trí, các thành phần phải đúng thứ tự, không đảo lộn.'},
  {wrong:'我朋友把书我借了。',
   opts:['我朋友把书借给我了。','我朋友把书我借了。','我朋友把书借我给了。','我把朋友书借给我了。'],ans:0,
   exp:'Cấu trúc A+把+B+动词+给+người: 给+người phải đứng sau động từ, diễn tả chuyển giao sự vật.'},
  {wrong:'司机把我到机场送了。',
   opts:['司机把我送到机场了。','司机把我到机场送了。','司机把我送机场到了。','把司机我送到机场了。'],ans:0,
   exp:'Động từ (送) phải đứng NGAY SAU 把+B(我), trước 到+vị trí, không đảo ngược thứ tự.'},
];

// ══════════════════════════════════════════
// LUYỆN NÓI
// ══════════════════════════════════════════
var speakingData = {
  intro:'Nhấn 🔊 để nghe câu hỏi, sau đó tự ghi âm câu trả lời của bạn dựa theo nội dung 4 bài khoá. Ghi âm xong mới nên xem câu trả lời mẫu để đối chiếu.',
  questions:[
    {q_zh:'小刚为什么这么早就要睡觉？经理为什么生气？',
     q_vn:'Vì sao Tiểu Cương đi ngủ sớm thế? Vì sao giám đốc giận?',
     hint:'明天8点就要到公司，因为经理告诉他8点不到以后别来了',
     sample:'小刚明天8点就要到公司，因为经理生气了，告诉他明天8点不到，以后就别来了。',
     sample_vn:'Tiểu Cương ngày mai 8 giờ phải đến công ty, vì giám đốc giận rồi, bảo cậu ấy mai không đến trước 8 giờ thì sau này đừng đến nữa.',
     note:'就 diễn tả hành động xảy ra sớm/nhanh (điểm ngữ pháp bài này).'},
    {q_zh:'小刚要去哪儿？小丽帮他做了什么？',
     q_vn:'Tiểu Cương định đi đâu? Tiểu Lệ giúp cậu ấy gì?',
     hint:'跟周经理去外地办事，帮他把衣服放到行李箱里，把照片放在他包里',
     sample:'小刚要跟周经理去外地办事，小丽帮他把衣服放到行李箱里，还把自己的照片放在他的包里了。',
     sample_vn:'Tiểu Cương phải đi công tác nơi khác cùng giám đốc Chu, Tiểu Lệ giúp cậu ấy xếp quần áo vào vali, còn để ảnh của mình vào túi của cậu ấy.',
     note:'把字句2: 把+B+động từ+到/在+vị trí (điểm ngữ pháp bài này).'},
    {q_zh:'小刚在去机场的路上才发现什么？',
     q_vn:'Tiểu Cương trên đường ra sân bay mới phát hiện điều gì?',
     hint:'忘带护照了，忘记带钱包了',
     sample:'小刚在去机场的路上才发现忘带护照了，司机送他到机场的时候，他才发现忘记带钱包了。',
     sample_vn:'Tiểu Cương trên đường ra sân bay mới phát hiện quên mang hộ chiếu, lúc tài xế chở đến sân bay, cậu ấy mới phát hiện quên mang ví tiền.',
     note:'才 diễn tả hành động xảy ra muộn/chậm.'},
    {q_zh:'这个老师为什么生气？他觉得真正的原因是什么？',
     q_vn:'Vì sao thầy giáo này tức giận? Thầy nghĩ nguyên nhân thực sự là gì?',
     hint:'学生总是忘了拿铅笔，真正原因是没有好的学习习惯',
     sample:'这个老师有点儿生气，因为学生总是忘了拿铅笔，但是他觉得真正的原因是学生没有好的学习习惯。',
     sample_vn:'Thầy giáo này hơi tức giận, vì học sinh luôn quên mang bút chì, nhưng thầy nghĩ nguyên nhân thực sự là học sinh không có thói quen học tập tốt.',
     note:'不是……是…… diễn tả sự phủ định và khẳng định nguyên nhân thực sự.'},
  ],
};

// ══════════════════════════════════════════
// LUYỆN DỊCH (Việt → Trung)
// ══════════════════════════════════════════
var translateData = [
  {vi:'Sao anh đi ngủ sớm thế?', zh:'你怎么这么早就要睡觉了？', py:'Nǐ zěnme zhème zǎo jiù yào shuìjiào le?'},
  {vi:'Em giúp anh xếp quần áo vào vali nhé.', zh:'我帮你把衣服放到行李箱里吧。', py:'Wǒ bāng nǐ bǎ yīfu fàngdào xínglixiāng li ba.'},
  {vi:'Em đã để ảnh của em vào túi của anh rồi đấy.', zh:'我已经把我的照片放在你的包里了。', py:'Wǒ yǐjīng bǎ wǒ de zhàopiàn fàng zài nǐ de bāo li le.'},
  {vi:'Trên đường ra sân bay em mới phát hiện quên mang hộ chiếu.', zh:'来机场的路上我才发现忘带护照了。', py:'Lái jīchǎng de lùshang wǒ cái fāxiàn wàng dài hùzhào le.'},
  {vi:'Máy bay sắp cất cánh rồi, nhanh lên đi.', zh:'飞机就要起飞了，快点吧。', py:'Fēijī jiù yào qǐfēi le, kuài diǎn ba.'},
  {vi:'Tôi thấy cậu nên để những đồ quan trọng ở chỗ tôi thì hơn.', zh:'我看你还是把重要的东西放在我这儿吧。', py:'Wǒ kàn nǐ háishi bǎ zhòngyào de dōngxi fàngzài wǒ zhèr ba.'},
  {vi:'Tôi dạy học sinh vẽ tranh.', zh:'我教学生画画儿。', py:'Wǒ jiāo xuésheng huà huàr.'},
  {vi:'Tôi viết những đồ học sinh cần mang lên bảng.', zh:'我把学生需要带的东西写在黑板上。', py:'Wǒ bǎ xuésheng xūyào dài de dōngxi xiě zài hēibǎn shang.'},
];

// ══════════════════════════════════════════
// LUYỆN DỊCH (Trung → Việt) — nội dung KHÁC với chiều Việt→Trung ở trên
// ══════════════════════════════════════════
var translateDataRev = [
  {vi:'Chỉ cần bạn tự chăm sóc bản thân tốt thì tôi sẽ yên tâm.', zh:'只要你自己照顾好自己，我就放心了。', py:'Zhǐyào nǐ zìjǐ zhàogù hǎo zìjǐ, wǒ jiù fàngxīn le.'},
  {vi:'Tuy cậu ấy không mang bút chì nhưng thầy giáo vẫn dạy cậu ấy vẽ.', zh:'虽然他没带铅笔，但是老师还是教了他画画儿。', py:'Suīrán tā méi dài qiānbǐ, dànshì lǎoshī háishi jiāole tā huà huàr.'},
  {vi:'Nếu bạn để đồ quan trọng ở chỗ tôi thì tôi sẽ giữ giúp bạn.', zh:'如果你把重要的东西放在我这儿，我就帮你收好。', py:'Rúguǒ nǐ bǎ zhòngyào de dōngxi fàng zài wǒ zhèr, wǒ jiù bāng nǐ shōuhǎo.'},
  {vi:'Bạn tôi cho tôi mượn sách rồi.', zh:'我朋友把书借给我了。', py:'Wǒ péngyou bǎ shū jiè gěi wǒ le.'},
  {vi:'Em trai không trả tiền lại cho anh trai.', zh:'弟弟没把钱还给哥哥。', py:'Dìdi méi bǎ qián huán gěi gēge.'},
  {vi:'Tài xế đưa tôi đến sân bay rồi.', zh:'司机把我送到机场了。', py:'Sījī bǎ wǒ sòngdào jīchǎng le.'},
  {vi:'Ngồi máy bay một tiếng là đến rồi.', zh:'坐飞机一个小时就到了。', py:'Zuò fēijī yí ge xiǎoshí jiù dào le.'},
  {vi:'Tám giờ vào học, cậu ấy chín giờ mới dậy.', zh:'八点上课，他九点才起床。', py:'Bā diǎn shàngkè, tā jiǔ diǎn cái qǐchuáng.'},
];

// ══════════════════════════════════════════
// LUYỆN NGHE — đề nghe THẬT từ HSK标准教程3 练习册 (sách bài tập Bài 12)
// Audio gốc duy nhất chứa đủ 20 câu (Phần 1+2+3+4 của đề gốc):
//  - Phần 1 (câu 1-5, gốc: nghe chọn tranh) + Phần 2 (câu 6-10, gốc: nghe
//    phán đoán đúng/sai) → gộp thành 10 câu ĐIỀN CHÍNH TẢ.
//  - Phần 3 (câu 11-15) + Phần 4 (câu 16-20) → 10 câu TRẮC NGHIỆM, kèm các
//    dòng nghe-điền-cụm-từ-ngắn trước khi chọn đáp án, giữ đúng như đề gốc.
// ══════════════════════════════════════════
var listenData = {
  type: 'workbook',
  audio: '/audio/hsk3-bai-12/listen-full.mp3',
  dictation: [
    {num:1, lines:[
      {speaker:'女1', pre:'', blank:'你的腿好点了吗', post:'？',
       py:'Nǐ de tuǐ hǎo diǎn le ma?', vn:'Chân bạn đỡ hơn chưa?'},
      {speaker:'女2', pre:'还有点儿疼。', blank:'今天太阳不错，你带我出去吧', post:'。',
       py:'Hái yǒudiǎnr téng. Jīntiān tàiyáng búcuò, nǐ dài wǒ chūqu ba.', vn:'Vẫn còn hơi đau. Hôm nay trời nắng đẹp, bạn đưa mình ra ngoài đi.'},
    ]},
    {num:2, lines:[
      {speaker:'女', pre:'', blank:'能帮我把这些行李箱放到上面吗？我搬不动', post:'。',
       py:'Néng bāng wǒ bǎ zhèxiē xínglixiāng fàngdào shàngmian ma? Wǒ bān bu dòng.', vn:'Giúp tôi để những cái vali này lên trên được không? Tôi khiêng không nổi.'},
      {speaker:'男', pre:'可以，', blank:'我来搬吧', post:'。',
       py:'Kěyǐ, wǒ lái bān ba.', vn:'Được, để tôi khiêng cho.'},
    ]},
    {num:3, lines:[
      {speaker:'女', pre:'对不起，先生，', blank:'飞机马上就要起飞了，请您关上手机', post:'。',
       py:'Duìbuqǐ, xiānsheng, fēijī mǎshàng jiù yào qǐfēi le, qǐng nín guānshàng shǒujī.', vn:'Xin lỗi anh, máy bay sắp cất cánh rồi, mời anh tắt điện thoại.'},
      {speaker:'男', pre:'', blank:'好的，我知道了', post:'。',
       py:'Hǎo de, wǒ zhīdào le.', vn:'Được ạ, tôi biết rồi.'},
    ]},
    {num:4, lines:[
      {speaker:'女', pre:'', blank:'黑板上的那个字怎么读', post:'？',
       py:'Hēibǎn shang de nàge zì zěnme dú?', vn:'Chữ đó trên bảng đọc thế nào?'},
      {speaker:'男', pre:'我也不认识，', blank:'我查一下字典，找到了告诉你', post:'。',
       py:'Wǒ yě bú rènshi, wǒ chá yíxià zìdiǎn, zhǎodàole gàosu nǐ.', vn:'Tôi cũng không biết, tôi tra từ điển chút, tìm được rồi báo bạn.'},
    ]},
    {num:5, lines:[
      {speaker:'女', pre:'', blank:'会议早就开始了，你怎么现在还没来', post:'？',
       py:'Huìyì zǎo jiù kāishǐ le, nǐ zěnme xiànzài hái méi lái?', vn:'Cuộc họp bắt đầu lâu rồi, sao giờ bạn vẫn chưa đến?'},
      {speaker:'男', pre:'别生气，', blank:'我十分钟就到', post:'。',
       py:'Bié shēngqì, wǒ shí fēnzhōng jiù dào.', vn:'Đừng giận, mười phút nữa tôi đến ngay.'},
    ]},
    {num:6, lines:[
      {pre:'我的包忘在出租车上了，', blank:'钱包、手机和护照都在里面', post:'。',
       py:'Wǒ de bāo wàng zài chūzūchē shang le, qiánbāo, shǒujī hé hùzhào dōu zài lǐmiàn.', vn:'Túi của tôi để quên trên taxi rồi, ví tiền, điện thoại và hộ chiếu đều ở trong đó.'},
    ]},
    {num:7, lines:[
      {pre:'我很喜欢画画儿，但是没有人教过我，我都是自己学的，', blank:'你看这个小狗就是我画的，可爱吗', post:'？',
       py:'Wǒ hěn xǐhuan huà huàr, dànshì méiyǒu rén jiāoguo wǒ, wǒ dōu shì zìjǐ xué de, nǐ kàn zhège xiǎogǒu jiùshì wǒ huà de, kě\'ài ma?', vn:'Tôi rất thích vẽ tranh, nhưng chưa ai dạy tôi cả, tôi đều tự học đấy, bạn xem con chó nhỏ này chính là tôi vẽ đấy, đáng yêu không?'},
    ]},
    {num:8, lines:[
      {pre:'老师，您昨天讲的那几个题，我今天就忘了，', blank:'您能再教我一次吗', post:'？',
       py:'Lǎoshī, nín zuótiān jiǎng de nà jǐ ge tí, wǒ jīntiān jiù wàng le, nín néng zài jiāo wǒ yí cì ma?', vn:'Thầy ơi, mấy câu thầy giảng hôm qua, hôm nay em quên mất rồi, thầy dạy lại em một lần được không?'},
    ]},
    {num:9, lines:[
      {pre:'爸爸找了很长时间都没找到他的护照，', blank:'我今天上午帮他洗衣服的时候，在他那条蓝色的裤子里找到了', post:'。',
       py:'Bàba zhǎole hěn cháng shíjiān dōu méi zhǎodào tā de hùzhào, wǒ jīntiān shàngwǔ bāng tā xǐ yīfu de shíhou, zài tā nà tiáo lánsè de kùzi li zhǎodào le.', vn:'Bố tìm mãi mà không thấy hộ chiếu của mình đâu, sáng nay lúc tôi giặt đồ giúp bố, tôi tìm thấy nó trong cái quần xanh của bố.'},
    ]},
    {num:10, lines:[
      {pre:'我们需要换新的桌子和椅子，', blank:'你什么时候有时间，跟我一起去看看', post:'？',
       py:'Wǒmen xūyào huàn xīn de zhuōzi hé yǐzi, nǐ shénme shíhou yǒu shíjiān, gēn wǒ yìqǐ qù kànkan?', vn:'Chúng ta cần đổi bàn ghế mới, khi nào bạn rảnh, cùng tôi đi xem thử nhé?'},
    ]},
  ],
  mc: [
    {num:11, options:['公园里边','公园西门','公园北门'], ans:1,
     lines:[
       {speaker:'女', pre:'喂，', blank:'我已经到公园西门了，你是在北门吗，我过去找你吧', post:'？', py:'Wéi, wǒ yǐjīng dào gōngyuán xīmén le, nǐ shì zài běimén ma, wǒ guòqu zhǎo nǐ ba?', vn:'Alo, tôi đã đến cổng tây công viên rồi, bạn ở cổng bắc à, tôi qua tìm bạn nhé?'},
       {speaker:'男', pre:'', blank:'你别过来了，我快到西门了', post:'。', py:'Nǐ bié guòlai le, wǒ kuài dào xīmén le.', vn:'Bạn đừng qua nữa, tôi sắp đến cổng tây rồi.'},
     ],
     explain:'女：喂，我已经到公园西门了，你是在北门吗，我过去找你吧？男：你别过来了，我快到西门了。问：女的现在在哪儿？ → 公园西门。'},
    {num:12, options:['太阳从西边出来','女的不可能每天跑步','明天要跑一千米'], ans:1,
     lines:[
       {speaker:'女', pre:'', blank:'我决定从明天开始每天跑一千米', post:'。', py:'Wǒ juédìng cóng míngtiān kāishǐ měitiān pǎo yìqiān mǐ.', vn:'Tôi quyết định từ mai mỗi ngày chạy một nghìn mét.'},
       {speaker:'男', pre:'', blank:'真的吗？太阳从西边出来了', post:'？', py:'Zhēn de ma? Tàiyáng cóng xībian chūlai le?', vn:'Thật á? Mặt trời mọc từ hướng tây à?'},
     ],
     explain:'女：我决定从明天开始每天跑一千米。男：真的吗？太阳从西边出来了？问：男的是什么意思？ → 女的不可能每天跑步。'},
    {num:13, options:['行李箱里','包里','手里'], ans:1,
     lines:[
       {speaker:'男', pre:'', blank:'你把护照放在行李箱里了吗', post:'？', py:'Nǐ bǎ hùzhào fàng zài xínglixiāng li le ma?', vn:'Bạn để hộ chiếu trong vali rồi à?'},
       {speaker:'女', pre:'没有，', blank:'在我包里呢，这样拿着比较方便', post:'。', py:'Méiyǒu, zài wǒ bāo li ne, zhèyàng názhe bǐjiào fāngbiàn.', vn:'Không có, ở trong túi tôi đấy, cầm thế này tiện hơn.'},
     ],
     explain:'男：你把护照放在行李箱里了吗？女：没有，在我包里呢，这样拿着比较方便。问：护照在哪儿？ → 包里。'},
    {num:14, options:['学校','银行','西门'], ans:1,
     lines:[
       {speaker:'女', pre:'请问，', blank:'学校附近有中国银行吗', post:'？', py:'Qǐngwèn, xuéxiào fùjìn yǒu Zhōngguó yínháng ma?', vn:'Xin hỏi, gần trường có ngân hàng Trung Quốc không?'},
       {speaker:'男', pre:'有，', blank:'出了西门，向左走两百米就能看见', post:'。', py:'Yǒu, chūle xīmén, xiàng zuǒ zǒu liǎngbǎi mǐ jiù néng kànjiàn.', vn:'Có, ra khỏi cổng tây, đi sang trái 200 mét là thấy.'},
     ],
     explain:'女：请问，学校附近有中国银行吗？男：有，出了西门，向左走两百米就能看见。问：女的要去哪儿？ → 银行。'},
    {num:15, options:['开车','打车','坐公共汽车'], ans:1,
     lines:[
       {speaker:'女', pre:'', blank:'火车站离这儿很远，坐车不太方便，我开车送你去', post:'。', py:'Huǒchēzhàn lí zhèr hěn yuǎn, zuò chē bú tài fāngbiàn, wǒ kāichē sòng nǐ qù.', vn:'Ga tàu cách đây xa lắm, đi xe không tiện lắm, tôi lái xe đưa bạn đi.'},
       {speaker:'男', pre:'不用了，谢谢您，', blank:'我还是自己打出租车去吧', post:'。', py:'Búyòng le, xièxie nín, wǒ háishi zìjǐ dǎ chūzūchē qù ba.', vn:'Không cần đâu, cảm ơn chị, tôi tự bắt taxi đi thì hơn.'},
     ],
     explain:'女：火车站离这儿很远，坐车不太方便，我开车送你去。男：不用了，谢谢您，我还是自己打出租车去吧。问：男的打算怎么去火车站？ → 打车。'},
    {num:16, options:['太阳','小猫','花儿'], ans:2,
     lines:[
       {speaker:'男', pre:'', blank:'这是你画的吗', post:'？', py:'Zhè shì nǐ huà de ma?', vn:'Đây là tranh bạn vẽ à?'},
       {speaker:'女', pre:'', blank:'太阳是我画的，小猫是妹妹画的', post:'。', py:'Tàiyáng shì wǒ huà de, xiǎomāo shì mèimei huà de.', vn:'Mặt trời là tôi vẽ, con mèo nhỏ là em gái vẽ.'},
       {speaker:'男', pre:'真好看，', blank:'画好了吗', post:'？', py:'Zhēn hǎokàn, huàhǎo le ma?', vn:'Đẹp thật đấy, vẽ xong chưa?'},
       {speaker:'女', pre:'还没有，', blank:'我想在这儿再画点儿花儿', post:'。', py:'Hái méiyǒu, wǒ xiǎng zài zhèr zài huà diǎnr huār.', vn:'Chưa xong, tôi muốn vẽ thêm chút hoa ở đây nữa.'},
     ],
     explain:'男：这是你画的吗？女：太阳是我画的，小猫是妹妹画的。男：真好看，画好了吗？女：还没有，我想在这儿再画点儿花儿。问：女的还准备画什么？ → 花儿。'},
    {num:17, options:['帮女的拿西瓜','想再吃点儿米饭','想吃点儿西瓜'], ans:2,
     lines:[
       {speaker:'女', pre:'', blank:'吃好了吗？要不要再来点儿米饭', post:'？', py:'Chīhǎo le ma? Yào bu yào zài lái diǎnr mǐfàn?', vn:'Ăn xong chưa? Có muốn ăn thêm chút cơm không?'},
       {speaker:'男', pre:'', blank:'不吃了。家里还有西瓜吗', post:'？', py:'Bù chī le. Jiā li hái yǒu xīguā ma?', vn:'Không ăn nữa. Nhà còn dưa hấu không?'},
       {speaker:'女', pre:'', blank:'还有半个，你自己拿吧', post:'。', py:'Hái yǒu bàn ge, nǐ zìjǐ ná ba.', vn:'Còn nửa quả, bạn tự lấy đi.'},
       {speaker:'男', pre:'', blank:'好的', post:'。', py:'Hǎo de.', vn:'Được.'},
     ],
     explain:'女：吃好了吗？要不要再来点儿米饭？男：不吃了。家里还有西瓜吗？女：还有半个，你自己拿吧。男：好的。问：关于男的，可以知道什么？ → 想吃点儿西瓜。'},
    {num:18, options:['去接人','坐火车','找司机'], ans:0,
     lines:[
       {speaker:'男', pre:'', blank:'喂，是小马吗', post:'？', py:'Wéi, shì Xiǎomǎ ma?', vn:'Alo, có phải Tiểu Mã không?'},
       {speaker:'女', pre:'', blank:'是我，周经理，您有什么事', post:'？', py:'Shì wǒ, Zhōu jīnglǐ, nín yǒu shénme shì?', vn:'Là em đây, giám đốc Chu, anh có việc gì ạ?'},
       {speaker:'男', pre:'', blank:'我明天十点要去火车站接个人', post:'。', py:'Wǒ míngtiān shí diǎn yào qù huǒchēzhàn jiē ge rén.', vn:'Ngày mai 10 giờ tôi phải ra ga tàu đón người.'},
       {speaker:'女', pre:'好的，我知道了，', blank:'我让司机明天九点前到楼下等您', post:'。', py:'Hǎo de, wǒ zhīdào le, wǒ ràng sījī míngtiān jiǔ diǎn qián dào lóuxià děng nín.', vn:'Vâng, em biết rồi, em bảo tài xế ngày mai trước 9 giờ xuống dưới lầu đợi anh.'},
     ],
     explain:'男：喂，是小马吗？女：是我，周经理，您有什么事？男：我明天十点要去火车站接个人。女：好的，我知道了，我让司机明天九点前到楼下等您。问：男的明天要做什么？ → 去接人。'},
    {num:19, options:['骑车去上课','教女的骑车','学骑自行车'], ans:1,
     lines:[
       {speaker:'女', pre:'', blank:'你会骑自行车吗', post:'？', py:'Nǐ huì qí zìxíngchē ma?', vn:'Bạn biết đi xe đạp không?'},
       {speaker:'男', pre:'', blank:'当然，我以前经常骑车去上课', post:'。', py:'Dāngrán, wǒ yǐqián jīngcháng qí chē qù shàngkè.', vn:'Đương nhiên, trước đây tôi thường đi xe đạp đến lớp.'},
       {speaker:'女', pre:'', blank:'那你教教我吧，我一直想学', post:'。', py:'Nà nǐ jiāojiao wǒ ba, wǒ yìzhí xiǎng xué.', vn:'Vậy bạn dạy tôi đi, tôi muốn học mãi rồi.'},
       {speaker:'男', pre:'', blank:'可以啊，你什么时候有时间', post:'？', py:'Kěyǐ a, nǐ shénme shíhou yǒu shíjiān?', vn:'Được đấy, bạn khi nào rảnh?'},
     ],
     explain:'女：你会骑自行车吗？男：当然，我以前经常骑车去上课。女：那你教教我吧，我一直想学。男：可以啊，你什么时候有时间？问：男的要做什么？ → 教女的骑车。'},
    {num:20, options:['来机场晚了','找不到护照了','忘了给女的打电话'], ans:0,
     lines:[
       {speaker:'女', pre:'', blank:'你怎么才来，都八点一刻了', post:'。', py:'Nǐ zěnme cái lái, dōu bā diǎn yí kè le.', vn:'Sao giờ bạn mới đến, đã 8 giờ 15 rồi.'},
       {speaker:'男', pre:'对不起，', blank:'来机场的路上才发现没带护照', post:'。', py:'Duìbuqǐ, lái jīchǎng de lùshang cái fāxiàn méi dài hùzhào.', vn:'Xin lỗi, trên đường ra sân bay mới phát hiện không mang hộ chiếu.'},
       {speaker:'女', pre:'', blank:'出门的时候你怎么不好好看看呢', post:'？', py:'Chūmén de shíhou nǐ zěnme bù hǎohāo kànkan ne?', vn:'Lúc ra khỏi nhà sao bạn không xem kỹ vậy?'},
       {speaker:'男', pre:'', blank:'你一直给我打电话，我很着急，就出了问题', post:'。', py:'Nǐ yìzhí gěi wǒ dǎ diànhuà, wǒ hěn zháojí, jiù chūle wèntí.', vn:'Bạn cứ gọi điện cho tôi mãi, tôi vội quá, nên mới xảy ra vấn đề.'},
     ],
     explain:'女：你怎么才来，都八点一刻了。男：对不起，来机场的路上才发现没带护照。女：出门的时候你怎么不好好看看呢？男：你一直给我打电话，我很着急，就出了问题。问：男的怎么了？ → 来机场晚了。'},
  ],
};
