// ══════════════════════════════════════════
// DATA — HSK5 Bài 32: 身边的环保 (Bảo vệ môi trường quanh ta)
// Unit 11 观察社会 · Nguồn: HSK标准教程5下 (tr. 122–129) + 练习册 bài 32
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'消失',py:'xiāoshī',pos:'Động từ',vn:'biến mất',hv:'tiêu thất',em:'💨',lesson:1,
   explain:['Không còn nhìn thấy, không còn tồn tại nữa — dần dần mất đi.','Chủ ngữ là sự vật, hiện tượng: 动植物 / 声音 / 笑容 / 传统 + 消失. Không mang tân ngữ.'],
   usage:'消失了 / 正在消失 / 逐渐消失 / 从……中消失; danh từ hoá: 动植物的消失. Không nói ✗消失东西 — “làm mất đồ” là 丢.',
   collo:['正在消失','逐渐消失','消失得无影无踪','动植物的消失'],
   ex_zh:'地球上一半以上的动植物正在消失。',ex_py:'Dìqiú shang yíbàn yǐshàng de dòng-zhíwù zhèngzài xiāoshī.',ex_vn:'Hơn một nửa số động thực vật trên Trái Đất đang biến mất.',
   exList:[
     {zh:'地球上一半以上的动植物正在消失。',py:'Dìqiú shang yíbàn yǐshàng de dòng-zhíwù zhèngzài xiāoshī.',vn:'Hơn một nửa số động thực vật trên Trái Đất đang biến mất.'},
     {zh:'记录、保存将要消失的事物是摄影非常重要的作用。',py:'Jìlù, bǎocún jiāngyào xiāoshī de shìwù shì shèyǐng fēicháng zhòngyào de zuòyòng.',vn:'Ghi lại, lưu giữ những sự vật sắp biến mất là tác dụng vô cùng quan trọng của nhiếp ảnh.'},
     {zh:'听到这个好消息，她脸上的不安一下子就消失了。',py:'Tīngdào zhège hǎo xiāoxi, tā liǎn shang de bù\'ān yíxiàzi jiù xiāoshī le.',vn:'Nghe tin vui này, nỗi bất an trên mặt cô ấy lập tức biến mất.'}
   ],
   colloFull:[
     {zh:'正在消失',py:'zhèngzài xiāoshī',vn:'đang biến mất'},
     {zh:'逐渐消失',py:'zhújiàn xiāoshī',vn:'dần dần biến mất'},
     {zh:'消失得无影无踪',py:'xiāoshī de wúyǐng-wúzōng',vn:'biến mất không để lại dấu vết'},
     {zh:'动植物的消失',py:'dòng-zhíwù de xiāoshī',vn:'sự biến mất của động thực vật'},
     {zh:'笑容消失了',py:'xiàoróng xiāoshī le',vn:'nụ cười tắt hẳn'}
   ],
   patterns:[
     {s:'N + (正在 / 逐渐) + 消失',m:'… (đang / dần dần) biến mất'},
     {s:'从 + nơi chốn + 消失',m:'biến mất khỏi …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cá ở con sông này càng ngày càng ít, gần như sắp biến mất rồi.',answer:'这条河里的鱼越来越少，几乎快要消失了。',answerPy:'Zhè tiáo hé li de yú yuè lái yuè shǎo, jīhū kuàiyào xiāoshī le.',
      note:'越来越 + tính từ: thay đổi dần. 快要……了: sắp …; 消失 không mang tân ngữ.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Vừa nhìn thấy mẹ, nỗi sợ của đứa bé liền biến mất.',answer:'一看到妈妈，孩子的害怕就消失了。',answerPy:'Yí kàndào māma, háizi de hàipà jiù xiāoshī le.',
      note:'一……就……: hai việc nối tiếp ngay. 一 đọc yí trước thanh 4 (看).',pair:'一……就……'}
   ]},

  {n:2,zh:'洪水',py:'hóngshuǐ',pos:'Danh từ',vn:'nước lũ, lũ lụt',hv:'hồng thuỷ',em:'🌊',lesson:1,
   explain:['Nước lũ — nước sông dâng cao đột ngột do mưa lớn, gây ngập lụt.','Hay đi cùng 地震 (động đất) khi nói về thiên tai: 洪水、地震等自然灾害.'],
   usage:'发洪水 / 洪水来了 / 被洪水冲走 / 抗洪 (chống lũ). Lượng từ: 一场洪水 (场 đọc cháng).',
   collo:['发洪水','一场洪水','被洪水冲走','洪水、地震'],
   ex_zh:'比如洪水、地震等改变了它们生活的环境。',ex_py:'Bǐrú hóngshuǐ, dìzhèn děng gǎibiànle tāmen shēnghuó de huánjìng.',ex_vn:'Ví dụ lũ lụt, động đất… đã làm thay đổi môi trường sống của chúng.',
   exList:[
     {zh:'动植物的消失，部分原因是由于自然界的变化，比如洪水、地震等改变了它们生活的环境。',py:'Dòng-zhíwù de xiāoshī, bùfen yuányīn shì yóuyú zìránjiè de biànhuà, bǐrú hóngshuǐ, dìzhèn děng gǎibiànle tāmen shēnghuó de huánjìng.',vn:'Sự biến mất của động thực vật, một phần là do những thay đổi của giới tự nhiên, ví dụ lũ lụt, động đất… đã làm thay đổi môi trường sống của chúng.'},
     {zh:'去年夏天，这里发了一场大洪水。',py:'Qùnián xiàtiān, zhèli fāle yì cháng dà hóngshuǐ.',vn:'Mùa hè năm ngoái, ở đây xảy ra một trận lũ lớn.'},
     {zh:'洪水把村子里的很多房子都冲走了。',py:'Hóngshuǐ bǎ cūnzi li de hěn duō fángzi dōu chōngzǒu le.',vn:'Lũ cuốn trôi rất nhiều ngôi nhà trong làng.'}
   ],
   colloFull:[
     {zh:'发洪水',py:'fā hóngshuǐ',vn:'có lũ, xảy ra lũ'},
     {zh:'一场洪水',py:'yì cháng hóngshuǐ',vn:'một trận lũ'},
     {zh:'被洪水冲走',py:'bèi hóngshuǐ chōngzǒu',vn:'bị lũ cuốn trôi'},
     {zh:'洪水、地震',py:'hóngshuǐ, dìzhèn',vn:'lũ lụt, động đất'},
     {zh:'抗洪救灾',py:'kàng hóng jiù zāi',vn:'chống lũ cứu nạn'}
   ],
   patterns:[
     {s:'发 + 洪水',m:'xảy ra lũ'},
     {s:'被洪水 + V (冲走 / 冲坏)',m:'bị lũ cuốn trôi / làm hỏng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà của ông bà bị lũ cuốn trôi rồi.',answer:'爷爷奶奶的房子被洪水冲走了。',answerPy:'Yéye nǎinai de fángzi bèi hóngshuǐ chōngzǒu le.',
      note:'Câu 被: chủ ngữ là người / vật chịu tác động, 被 + tác nhân (洪水) + V + bổ ngữ.',pair:'被'},
     {promptLang:'vi',prompt:'Chỉ cần mưa to liên tục mấy ngày là ở đây sẽ có lũ.',answer:'只要连续下几天大雨，这里就会发洪水。',answerPy:'Zhǐyào liánxù xià jǐ tiān dàyǔ, zhèli jiù huì fā hóngshuǐ.',
      note:'只要……就……: điều kiện đủ. 连续 (bài 7) = liên tục; 发洪水 = có lũ.',pair:'只要……就……'}
   ]},

  {n:3,zh:'地震',py:'dìzhèn',pos:'Động từ / Danh từ',vn:'động đất',hv:'địa chấn',em:'🏚️',lesson:1,
   explain:['Mặt đất rung chuyển do vận động của vỏ Trái Đất — động đất.','Sách ghi là động từ (地震了！ = động đất rồi!) nhưng rất hay dùng như danh từ: 一次地震, 发生地震.'],
   usage:'发生地震 / 地震了 / 一次（场）大地震 / 在地震中. Hay đứng cạnh 洪水 khi kể thiên tai.',
   collo:['发生地震','一次地震','地震了','地震中'],
   ex_zh:'昨天夜里这里发生了一次小地震。',ex_py:'Zuótiān yèli zhèli fāshēngle yí cì xiǎo dìzhèn.',ex_vn:'Đêm qua ở đây xảy ra một trận động đất nhỏ.',
   exList:[
     {zh:'比如洪水、地震等改变了它们生活的环境。',py:'Bǐrú hóngshuǐ, dìzhèn děng gǎibiànle tāmen shēnghuó de huánjìng.',vn:'Ví dụ lũ lụt, động đất… đã làm thay đổi môi trường sống của chúng.'},
     {zh:'昨天夜里这里发生了一次小地震，很多人都被吓醒了。',py:'Zuótiān yèli zhèli fāshēngle yí cì xiǎo dìzhèn, hěn duō rén dōu bèi xiàxǐng le.',vn:'Đêm qua ở đây xảy ra một trận động đất nhỏ, nhiều người bị giật mình tỉnh giấc.'},
     {zh:'地震了！大家快从教室里出去！',py:'Dìzhèn le! Dàjiā kuài cóng jiàoshì li chūqu!',vn:'Động đất rồi! Mọi người mau ra khỏi lớp học!'}
   ],
   colloFull:[
     {zh:'发生地震',py:'fāshēng dìzhèn',vn:'xảy ra động đất'},
     {zh:'一次地震',py:'yí cì dìzhèn',vn:'một trận động đất'},
     {zh:'地震了',py:'dìzhèn le',vn:'động đất rồi'},
     {zh:'地震中',py:'dìzhèn zhōng',vn:'trong trận động đất'},
     {zh:'抗震救灾',py:'kàng zhèn jiù zāi',vn:'chống động đất, cứu nạn'}
   ],
   patterns:[
     {s:'(nơi nào) + 发生 + 地震',m:'(ở đâu) xảy ra động đất'},
     {s:'地震了！',m:'Động đất rồi! (dùng như động từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu xảy ra động đất thì đừng đi thang máy.',answer:'如果发生地震，就不要坐电梯。',answerPy:'Rúguǒ fāshēng dìzhèn, jiù búyào zuò diàntī.',
      note:'如果……就……: giả thiết – kết quả. 不 đọc bú trước 要 (thanh 4).',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Trận động đất năm ấy khiến rất nhiều người mất nhà cửa.',answer:'那次地震使很多人失去了家。',answerPy:'Nà cì dìzhèn shǐ hěn duō rén shīqùle jiā.',
      note:'A 使 B + V: A khiến B …; 地震 ở đây làm chủ ngữ như danh từ.',pair:'使'}
   ]},

  {n:4,zh:'破坏',py:'pòhuài',pos:'Động từ',vn:'phá hoại, tàn phá, làm hỏng',hv:'phá hoại',em:'💥',lesson:1,
   explain:['Làm hư hại, làm tổn hại (vật thể, môi trường) — phá hoại, tàn phá.','Nghĩa trừu tượng: làm hỏng quan hệ, trật tự, kế hoạch, hình ảnh: 破坏关系 / 破坏计划 / 破坏形象.'],
   usage:'破坏 + 设备 / 环境 / 秩序 / 关系 / 婚姻 / 家庭 / 计划 / 形象 / 和平 / 平衡 (bảng 搭配); danh từ hoá: 对……的破坏; 遭到破坏 / 被破坏.',
   collo:['破坏环境','破坏关系','破坏计划','对自然的破坏'],
   ex_zh:'但更大的原因则是人类对自然的破坏。',ex_py:'Dàn gèng dà de yuányīn zé shì rénlèi duì zìrán de pòhuài.',ex_vn:'Nhưng nguyên nhân lớn hơn lại là sự tàn phá thiên nhiên của con người.',
   exList:[
     {zh:'但更大的原因则是人类对自然的破坏。',py:'Dàn gèng dà de yuányīn zé shì rénlèi duì zìrán de pòhuài.',vn:'Nhưng nguyên nhân lớn hơn lại là sự tàn phá thiên nhiên của con người.'},
     {zh:'乱扔垃圾会破坏环境，也会破坏城市的形象。',py:'Luàn rēng lājī huì pòhuài huánjìng, yě huì pòhuài chéngshì de xíngxiàng.',vn:'Vứt rác bừa bãi sẽ phá hoại môi trường, cũng làm xấu hình ảnh của thành phố.'},
     {zh:'一场大雨破坏了我们周末去爬山的计划。',py:'Yì cháng dàyǔ pòhuàile wǒmen zhōumò qù pá shān de jìhuà.',vn:'Một trận mưa lớn đã phá hỏng kế hoạch leo núi cuối tuần của chúng tôi.'}
   ],
   colloFull:[
     {zh:'破坏环境',py:'pòhuài huánjìng',vn:'phá hoại môi trường'},
     {zh:'破坏关系',py:'pòhuài guānxi',vn:'làm rạn nứt quan hệ'},
     {zh:'破坏计划',py:'pòhuài jìhuà',vn:'phá hỏng kế hoạch'},
     {zh:'对自然的破坏',py:'duì zìrán de pòhuài',vn:'sự tàn phá thiên nhiên'},
     {zh:'破坏平衡',py:'pòhuài pínghéng',vn:'phá vỡ sự cân bằng'}
   ],
   patterns:[
     {s:'破坏 + 环境 / 关系 / 计划 / 形象',m:'phá hoại, làm hỏng …'},
     {s:'A 对 B 的破坏',m:'sự tàn phá của A đối với B (danh từ hoá)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Khu rừng bị phá hoại rất nghiêm trọng.',answer:'森林被破坏得很严重。',answerPy:'Sēnlín bèi pòhuài de hěn yánzhòng.',
      note:'被 + V + 得 + bổ ngữ trạng thái: bị … đến mức nào.',pair:'被'},
     {promptLang:'vi',prompt:'Chúng ta không những không được phá hoại môi trường, mà còn phải bảo vệ nó.',answer:'我们不仅不能破坏环境，还要保护它。',answerPy:'Wǒmen bùjǐn bù néng pòhuài huánjìng, hái yào bǎohù tā.',
      note:'不仅……还……: không những … mà còn …; vế sau tăng tiến.',pair:'不仅……还……'}
   ]},

  {n:5,zh:'砍',py:'kǎn',pos:'Động từ',vn:'chặt, chẻ, đốn',hv:'khảm',em:'🪓',lesson:1,
   explain:['Dùng dao, rìu chặt mạnh: 砍树 (đốn cây), 砍柴 (chặt củi).','Khẩu ngữ mở rộng: 砍价 = mặc cả, trả giá (chặt bớt giá).'],
   usage:'砍 + 树 / 柴 / 木头; hay có bổ ngữ kết quả: 砍光 / 砍倒 / 砍断; câu bị động: 被人砍光了.',
   collo:['砍树','砍光','砍柴','砍价'],
   ex_zh:'有些地区的森林已经几乎被人砍光了。',ex_py:'Yǒuxiē dìqū de sēnlín yǐjīng jīhū bèi rén kǎnguāng le.',ex_vn:'Rừng ở một số khu vực gần như đã bị người ta đốn sạch.',
   exList:[
     {zh:'有些地区的森林已经几乎被人砍光了。',py:'Yǒuxiē dìqū de sēnlín yǐjīng jīhū bèi rén kǎnguāng le.',vn:'Rừng ở một số khu vực gần như đã bị người ta đốn sạch.'},
     {zh:'爷爷年轻的时候每天都要上山砍柴。',py:'Yéye niánqīng de shíhou měi tiān dōu yào shàng shān kǎn chái.',vn:'Hồi trẻ, ngày nào ông cũng phải lên núi chặt củi.'},
     {zh:'在市场买东西，妈妈特别会砍价。',py:'Zài shìchǎng mǎi dōngxi, māma tèbié huì kǎnjià.',vn:'Mua đồ ở chợ, mẹ tôi rất giỏi mặc cả.'}
   ],
   colloFull:[
     {zh:'砍树',py:'kǎn shù',vn:'đốn cây'},
     {zh:'砍光',py:'kǎnguāng',vn:'chặt sạch'},
     {zh:'砍柴',py:'kǎn chái',vn:'chặt củi'},
     {zh:'砍价',py:'kǎnjià',vn:'mặc cả, trả giá'},
     {zh:'砍倒一棵树',py:'kǎndǎo yì kē shù',vn:'đốn đổ một cái cây'}
   ],
   patterns:[
     {s:'砍 + 光 / 倒 / 断',m:'chặt sạch / đổ / đứt (bổ ngữ kết quả)'},
     {s:'N + 被(人)砍光了',m:'… bị (người ta) chặt sạch rồi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cái cây to trước cổng trường bị chặt đổ rồi.',answer:'学校门口的那棵大树被砍倒了。',answerPy:'Xuéxiào ménkǒu de nà kē dà shù bèi kǎndǎo le.',
      note:'被 + V + bổ ngữ kết quả (倒); tác nhân có thể lược bỏ.',pair:'被'},
     {promptLang:'vi',prompt:'Đừng chặt sạch những cái cây này.',answer:'别把这些树砍光了。',answerPy:'Bié bǎ zhèxiē shù kǎnguāng le.',
      note:'把 + tân ngữ + V + bổ ngữ kết quả; 别……了: khuyên can.',pair:'把'}
   ]},

  {n:6,zh:'生存',py:'shēngcún',pos:'Động từ',vn:'sinh tồn, sống còn',hv:'sinh tồn',em:'🐟',lesson:1,
   explain:['Tồn tại, sống sót — duy trì được sự sống (sinh vật, loài, hoặc con người trong điều kiện khó khăn).','Trang trọng hơn 生活: 生活 là cuộc sống hằng ngày, 生存 là còn sống được hay không.'],
   usage:'适合……生存 / 在……中生存 / 无法生存 / 生存下去; làm định ngữ: 生存环境, 生存能力.',
   collo:['适合生存','生存环境','生存下去','生存能力'],
   ex_zh:'很多河流被污染，不再适合鱼类生存。',ex_py:'Hěn duō héliú bèi wūrǎn, bú zài shìhé yúlèi shēngcún.',ex_vn:'Nhiều dòng sông bị ô nhiễm, không còn thích hợp cho loài cá sinh sống nữa.',
   exList:[
     {zh:'很多河流被污染，不再适合鱼类生存。',py:'Hěn duō héliú bèi wūrǎn, bú zài shìhé yúlèi shēngcún.',vn:'Nhiều dòng sông bị ô nhiễm, không còn thích hợp cho loài cá sinh sống nữa.'},
     {zh:'没有水，人类就无法生存。',py:'Méiyǒu shuǐ, rénlèi jiù wúfǎ shēngcún.',vn:'Không có nước, loài người không thể sinh tồn.'},
     {zh:'这些动物的生存环境正在受到破坏。',py:'Zhèxiē dòngwù de shēngcún huánjìng zhèngzài shòudào pòhuài.',vn:'Môi trường sống của những loài động vật này đang bị phá hoại.'}
   ],
   colloFull:[
     {zh:'适合生存',py:'shìhé shēngcún',vn:'thích hợp để sinh sống'},
     {zh:'生存环境',py:'shēngcún huánjìng',vn:'môi trường sống'},
     {zh:'生存下去',py:'shēngcún xiàqu',vn:'tiếp tục tồn tại'},
     {zh:'生存能力',py:'shēngcún nénglì',vn:'khả năng sinh tồn'},
     {zh:'在沙漠中生存',py:'zài shāmò zhōng shēngcún',vn:'sinh tồn trong sa mạc'}
   ],
   patterns:[
     {s:'适合 + N + 生存',m:'thích hợp cho … sinh sống'},
     {s:'在 + môi trường + 中生存',m:'sinh tồn trong …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ở đây ngay cả cỏ cũng không sống nổi.',answer:'这里连草都无法生存。',answerPy:'Zhèli lián cǎo dōu wúfǎ shēngcún.',
      note:'连……都……: nhấn mạnh trường hợp cực đoan; 无法 = không thể.',pair:'连……都……'},
     {promptLang:'vi',prompt:'Nếu nước bị ô nhiễm thì cá sẽ không thể sinh tồn.',answer:'要是水被污染了，鱼就无法生存了。',answerPy:'Yàoshi shuǐ bèi wūrǎn le, yú jiù wúfǎ shēngcún le.',
      note:'要是……就……: giả thiết (khẩu ngữ hơn 如果). Ôn câu 被.',pair:'要是……就……'}
   ]},

  {n:7,zh:'沙漠',py:'shāmò',pos:'Danh từ',vn:'sa mạc',hv:'sa mạc',em:'🏜️',lesson:1,
   explain:['Vùng đất rộng phủ đầy cát, rất ít mưa, gần như không có cây cỏ.','Trong bài: 草原变为沙漠 — đồng cỏ biến thành sa mạc (hiện tượng sa mạc hoá, 沙漠化).'],
   usage:'变为 / 变成沙漠 / 在沙漠中 / 沙漠地区 / 一片沙漠 / 穿过沙漠.',
   collo:['变为沙漠','一片沙漠','沙漠地区','沙漠化'],
   ex_zh:'有的地区原本是草原，如今已变为沙漠。',ex_py:'Yǒude dìqū yuánběn shì cǎoyuán, rújīn yǐ biànwéi shāmò.',ex_vn:'Có những vùng vốn là đồng cỏ, nay đã biến thành sa mạc.',
   exList:[
     {zh:'有的地区原本是草原，如今已变为沙漠。',py:'Yǒude dìqū yuánběn shì cǎoyuán, rújīn yǐ biànwéi shāmò.',vn:'Có những vùng vốn là đồng cỏ, nay đã biến thành sa mạc.'},
     {zh:'在沙漠里旅行，一定要带够水。',py:'Zài shāmò li lǚxíng, yídìng yào dàigòu shuǐ.',vn:'Du lịch trong sa mạc nhất định phải mang đủ nước.'},
     {zh:'为了防止沙漠化，人们在这里种了很多树。',py:'Wèile fángzhǐ shāmòhuà, rénmen zài zhèli zhòngle hěn duō shù.',vn:'Để ngăn chặn sa mạc hoá, người ta đã trồng rất nhiều cây ở đây.'}
   ],
   colloFull:[
     {zh:'变为沙漠',py:'biànwéi shāmò',vn:'biến thành sa mạc'},
     {zh:'一片沙漠',py:'yí piàn shāmò',vn:'một vùng sa mạc'},
     {zh:'沙漠地区',py:'shāmò dìqū',vn:'vùng sa mạc'},
     {zh:'沙漠化',py:'shāmòhuà',vn:'sa mạc hoá'},
     {zh:'穿过沙漠',py:'chuānguò shāmò',vn:'băng qua sa mạc'}
   ],
   patterns:[
     {s:'A + 变为 / 变成 + 沙漠',m:'A biến thành sa mạc'},
     {s:'在沙漠里 / 中 + V',m:'làm gì trong sa mạc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nếu cứ chặt cây mãi, đồng cỏ ở đây sẽ biến thành sa mạc.',answer:'如果一直砍树，这里的草原就会变成沙漠。',answerPy:'Rúguǒ yìzhí kǎn shù, zhèli de cǎoyuán jiù huì biànchéng shāmò.',
      note:'如果……就会……: giả thiết – hệ quả. Ôn từ 砍 của bài.',pair:'如果……就……'},
     {promptLang:'vi',prompt:'Tôi chưa bao giờ đến sa mạc.',answer:'我从来没去过沙漠。',answerPy:'Wǒ cónglái méi qùguo shāmò.',
      note:'从来没 + V + 过: chưa từng bao giờ.',pair:'从来没……过'}
   ]},

  {n:8,zh:'公布',py:'gōngbù',pos:'Động từ',vn:'công bố',hv:'công bố',em:'📢',lesson:1,
   explain:['Công khai cho mọi người biết (kết quả, số liệu, danh sách, quy định…) — thường do cơ quan, tổ chức làm.','Tân ngữ là thông tin chính thức: 公布结果 / 数据 / 名单 / 成绩; kể chuyện riêng cho ai đó thì dùng 告诉.'],
   usage:'公布 + 结果 / 数据 / 名单 / 成绩 / 答案; 向社会公布; N + 于 + thời gian + 公布 (văn viết); ……公布的数据.',
   collo:['公布结果','公布数据','公布名单','公布成绩'],
   ex_zh:'比赛结果于四月十五日公布。',ex_py:'Bǐsài jiéguǒ yú sì yuè shíwǔ rì gōngbù.',ex_vn:'Kết quả cuộc thi được công bố vào ngày 15 tháng 4.',
   exList:[
     {zh:'从国际环保组织公布的数据可知，地球上一半以上的动植物正在消失。',py:'Cóng guójì huánbǎo zǔzhī gōngbù de shùjù kě zhī, dìqiú shang yíbàn yǐshàng de dòng-zhíwù zhèngzài xiāoshī.',vn:'Từ số liệu do các tổ chức bảo vệ môi trường quốc tế công bố có thể biết, hơn một nửa số động thực vật trên Trái Đất đang biến mất.'},
     {zh:'比赛结果于四月十五日公布。',py:'Bǐsài jiéguǒ yú sì yuè shíwǔ rì gōngbù.',vn:'Kết quả cuộc thi được công bố vào ngày 15 tháng 4.'},
     {zh:'期末考试的成绩什么时候公布？',py:'Qīmò kǎoshì de chéngjì shénme shíhou gōngbù?',vn:'Bao giờ công bố điểm thi cuối kỳ?'}
   ],
   colloFull:[
     {zh:'公布结果',py:'gōngbù jiéguǒ',vn:'công bố kết quả'},
     {zh:'公布数据',py:'gōngbù shùjù',vn:'công bố số liệu'},
     {zh:'公布名单',py:'gōngbù míngdān',vn:'công bố danh sách'},
     {zh:'公布成绩',py:'gōngbù chéngjì',vn:'công bố điểm, thành tích'},
     {zh:'向社会公布',py:'xiàng shèhuì gōngbù',vn:'công bố ra xã hội'}
   ],
   patterns:[
     {s:'公布 + 结果 / 数据 / 名单',m:'công bố …'},
     {s:'N + 于 + thời gian + 公布',m:'… được công bố vào … (văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Danh sách được công bố hôm qua.',answer:'名单是昨天公布的。',answerPy:'Míngdān shì zuótiān gōngbù de.',
      note:'是……的: nhấn mạnh thời gian của việc đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Nhà trường vừa công bố kết quả là mọi người liền lên mạng tra.',answer:'学校一公布结果，大家就上网查询。',answerPy:'Xuéxiào yì gōngbù jiéguǒ, dàjiā jiù shàngwǎng cháxún.',
      note:'一……就……; 查询 (bài 21) = tra cứu. 一 đọc yì trước thanh 1 (公).',pair:'一……就……'}
   ]},

  {n:9,zh:'数据',py:'shùjù',pos:'Danh từ',vn:'số liệu, dữ liệu',hv:'số cứ',em:'📊',lesson:1,
   explain:['Các con số thu được qua thống kê, đo đạc, điều tra — số liệu.','Trong tin học: dữ liệu (数据库 cơ sở dữ liệu, 大数据 dữ liệu lớn).'],
   usage:'公布 / 收集 / 分析 + 数据; 数据显示 / 数据表明……; 一组数据; 大数据.',
   collo:['公布数据','分析数据','数据显示','大数据'],
   ex_zh:'这些数据确实令人不安。',ex_py:'Zhèxiē shùjù quèshí lìng rén bù\'ān.',ex_vn:'Những số liệu này thật sự khiến người ta lo lắng.',
   exList:[
     {zh:'这些数据确实令人不安。',py:'Zhèxiē shùjù quèshí lìng rén bù\'ān.',vn:'Những số liệu này thật sự khiến người ta lo lắng.'},
     {zh:'数据显示，今年城市的空气质量有所改善。',py:'Shùjù xiǎnshì, jīnnián chéngshì de kōngqì zhìliàng yǒu suǒ gǎishàn.',vn:'Số liệu cho thấy năm nay chất lượng không khí của thành phố đã được cải thiện phần nào.'},
     {zh:'老师让我们先收集数据，再分析原因。',py:'Lǎoshī ràng wǒmen xiān shōují shùjù, zài fēnxī yuányīn.',vn:'Cô giáo bảo chúng tôi thu thập số liệu trước, rồi mới phân tích nguyên nhân.'}
   ],
   colloFull:[
     {zh:'公布数据',py:'gōngbù shùjù',vn:'công bố số liệu'},
     {zh:'分析数据',py:'fēnxī shùjù',vn:'phân tích số liệu'},
     {zh:'数据显示',py:'shùjù xiǎnshì',vn:'số liệu cho thấy'},
     {zh:'大数据',py:'dà shùjù',vn:'dữ liệu lớn'},
     {zh:'收集数据',py:'shōují shùjù',vn:'thu thập số liệu'}
   ],
   patterns:[
     {s:'数据显示 / 表明，……',m:'Số liệu cho thấy …'},
     {s:'收集 / 分析 / 公布 + 数据',m:'thu thập / phân tích / công bố số liệu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Số liệu cho thấy người đọc sách bằng điện thoại ngày càng nhiều.',answer:'数据显示，用手机看书的人越来越多。',answerPy:'Shùjù xiǎnshì, yòng shǒujī kàn shū de rén yuè lái yuè duō.',
      note:'数据显示 đứng đầu câu như “theo số liệu”; 越来越多 không thêm 很.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chỉ có số liệu chính xác thì kết luận mới đáng tin.',answer:'只有数据准确，结论才可靠。',answerPy:'Zhǐyǒu shùjù zhǔnquè, jiélùn cái kěkào.',
      note:'只有……才……: điều kiện duy nhất. 结论 (bài 7), 可靠 (bài 16).',pair:'只有……才……'}
   ]},

  {n:10,zh:'真实',py:'zhēnshí',pos:'Tính từ',vn:'chân thực, có thật',hv:'chân thực',em:'✅',lesson:1,
   explain:['Đúng với sự thật, không giả, không bịa — có thật, chân thực.','Hay làm định ngữ: 真实的故事 / 情况 / 感情 / 想法 (bảng 搭配 của sách).'],
   usage:'真实的 + 内容 / 故事 / 材料 / 消息 / 生活 / 经历 / 感情 / 看法 / 报道 / 原因; 很真实; 真实地 + 反映 / 表达.',
   collo:['真实的情况','真实的故事','真实的感情','真实地反映'],
   ex_zh:'这是真实的情况，一点儿也不夸张。',ex_py:'Zhè shì zhēnshí de qíngkuàng, yìdiǎnr yě bù kuāzhāng.',ex_vn:'Đây là tình hình có thật, không phóng đại chút nào.',
   exList:[
     {zh:'这是真实的情况，一点儿也不夸张。',py:'Zhè shì zhēnshí de qíngkuàng, yìdiǎnr yě bù kuāzhāng.',vn:'Đây là tình hình có thật, không phóng đại chút nào.'},
     {zh:'这部电影是根据一个真实的故事拍的。',py:'Zhè bù diànyǐng shì gēnjù yí ge zhēnshí de gùshi pāi de.',vn:'Bộ phim này được quay dựa trên một câu chuyện có thật.'},
     {zh:'作品充分地表达了作者内心真实的情感。',py:'Zuòpǐn chōngfèn de biǎodále zuòzhě nèixīn zhēnshí de qínggǎn.',vn:'Tác phẩm thể hiện trọn vẹn tình cảm chân thật trong lòng tác giả.'}
   ],
   colloFull:[
     {zh:'真实的情况',py:'zhēnshí de qíngkuàng',vn:'tình hình có thật'},
     {zh:'真实的故事',py:'zhēnshí de gùshi',vn:'câu chuyện có thật'},
     {zh:'真实的感情',py:'zhēnshí de gǎnqíng',vn:'tình cảm chân thật'},
     {zh:'真实地反映',py:'zhēnshí de fǎnyìng',vn:'phản ánh chân thực'},
     {zh:'真实的原因',py:'zhēnshí de yuányīn',vn:'nguyên nhân thực sự'}
   ],
   patterns:[
     {s:'真实的 + N',m:'… có thật, chân thực'},
     {s:'真实地 + 反映 / 表达 / 记录',m:'phản ánh / thể hiện / ghi lại một cách chân thực'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Câu chuyện này không những có thật mà còn rất cảm động.',answer:'这个故事不但很真实，而且很感人。',answerPy:'Zhège gùshi búdàn hěn zhēnshí, érqiě hěn gǎnrén.',
      note:'不但……而且……: tăng tiến. 不 đọc bú trước 但 (thanh 4).',pair:'不但……而且……'},
     {promptLang:'vi',prompt:'Bài báo này phản ánh chân thực cuộc sống của học sinh.',answer:'这篇报道真实地反映了学生的生活。',answerPy:'Zhè piān bàodào zhēnshí de fǎnyìngle xuésheng de shēnghuó.',
      note:'Tính từ + 地 + động từ: làm trạng ngữ. 反映 (bài 5), 报道 (bài 16).',pair:'Tính từ + 地 + V'}
   ]},

  {n:11,zh:'夸张',py:'kuāzhāng',pos:'Tính từ',vn:'phóng đại, cường điệu',hv:'khoa trương',em:'🎭',lesson:1,
   explain:['Nói hoặc làm quá mức sự thật — phóng đại, cường điệu.','Còn chỉ biện pháp tu từ phóng đại (夸张的手法) và cách diễn, động tác “lố”: 表演有点儿夸张.'],
   usage:'很 / 太 / 有点儿 + 夸张; 一点儿也不夸张; 夸张的 + 故事 / 剧情 / 形象 / 动作 / 语言 / 数量 (bảng 搭配); V + 得 + 太夸张了.',
   collo:['一点儿也不夸张','夸张的动作','说得太夸张','夸张的语言'],
   ex_zh:'他也承认女演员的表演有点儿夸张。',ex_py:'Tā yě chéngrèn nǚ yǎnyuán de biǎoyǎn yǒudiǎnr kuāzhāng.',ex_vn:'Anh ấy cũng thừa nhận màn diễn của nữ diễn viên hơi cường điệu.',
   exList:[
     {zh:'这是真实的情况，一点儿也不夸张。',py:'Zhè shì zhēnshí de qíngkuàng, yìdiǎnr yě bù kuāzhāng.',vn:'Đây là tình hình có thật, không phóng đại chút nào.'},
     {zh:'他也承认女演员的表演有点儿夸张。',py:'Tā yě chéngrèn nǚ yǎnyuán de biǎoyǎn yǒudiǎnr kuāzhāng.',vn:'Anh ấy cũng thừa nhận màn diễn của nữ diễn viên hơi cường điệu.'},
     {zh:'你说他一顿饭吃了十碗米饭？太夸张了吧！',py:'Nǐ shuō tā yí dùn fàn chīle shí wǎn mǐfàn? Tài kuāzhāng le ba!',vn:'Cậu bảo cậu ấy một bữa ăn mười bát cơm à? Phóng đại quá rồi đấy!'}
   ],
   colloFull:[
     {zh:'一点儿也不夸张',py:'yìdiǎnr yě bù kuāzhāng',vn:'không phóng đại chút nào'},
     {zh:'夸张的动作',py:'kuāzhāng de dòngzuò',vn:'động tác cường điệu'},
     {zh:'说得太夸张',py:'shuō de tài kuāzhāng',vn:'nói quá lên'},
     {zh:'夸张的语言',py:'kuāzhāng de yǔyán',vn:'ngôn ngữ phóng đại'},
     {zh:'夸张的剧情',py:'kuāzhāng de jùqíng',vn:'tình tiết (phim) cường điệu'}
   ],
   patterns:[
     {s:'……，一点儿也不夸张',m:'…, không hề phóng đại chút nào'},
     {s:'V + 得 + 太夸张了',m:'… quá lố, quá cường điệu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy kể chuyện lúc nào cũng phóng đại quá mức.',answer:'他讲故事总是讲得太夸张了。',answerPy:'Tā jiǎng gùshi zǒngshì jiǎng de tài kuāzhāng le.',
      note:'Động từ có tân ngữ + bổ ngữ trạng thái: lặp động từ — 讲故事讲得…….',pair:'V + 得 + bổ ngữ trạng thái'},
     {promptLang:'vi',prompt:'Nói cô ấy là học sinh giỏi nhất trường, không hề phóng đại chút nào.',answer:'说她是全校最好的学生，一点儿也不夸张。',answerPy:'Shuō tā shì quán xiào zuì hǎo de xuésheng, yìdiǎnr yě bù kuāzhāng.',
      note:'一点儿也不 + tính từ: phủ định hoàn toàn.',pair:'一点儿也不……'}
   ]},

  {n:12,zh:'资源',py:'zīyuán',pos:'Danh từ',vn:'tài nguyên',hv:'tư nguyên',em:'💧',lesson:1,
   explain:['Nguồn của cải thiên nhiên hoặc xã hội có thể khai thác, sử dụng: 水资源, 自然资源, 人力资源.','Chủ đề 扩展 của bài: 资源 gồm 金属、黄金、银、钢铁、煤炭、能源、原料….'],
   usage:'水资源 / 自然资源 / 人力资源; 资源 + 丰富 / 不足 / 宝贵 / 短缺; 开发 / 保护 / 浪费 / 节约 + 资源 (bảng 搭配).',
   collo:['水资源','资源丰富','节约资源','开发资源'],
   ex_zh:'水资源短缺问题就连科学家们也不知道该如何解决。',ex_py:'Shuǐ zīyuán duǎnquē wèntí jiù lián kēxuéjiāmen yě bù zhīdào gāi rúhé jiějué.',ex_vn:'Vấn đề thiếu hụt tài nguyên nước thì ngay cả các nhà khoa học cũng không biết nên giải quyết thế nào.',
   exList:[
     {zh:'水资源短缺问题就连科学家们也不知道该如何解决。',py:'Shuǐ zīyuán duǎnquē wèntí jiù lián kēxuéjiāmen yě bù zhīdào gāi rúhé jiějué.',vn:'Vấn đề thiếu hụt tài nguyên nước thì ngay cả các nhà khoa học cũng không biết nên giải quyết thế nào.'},
     {zh:'这个国家自然资源很丰富，但是需要好好保护。',py:'Zhège guójiā zìrán zīyuán hěn fēngfù, dànshì xūyào hǎohǎo bǎohù.',vn:'Đất nước này tài nguyên thiên nhiên rất phong phú, nhưng cần được bảo vệ cẩn thận.'},
     {zh:'用过的纸别扔，节约资源要从小事做起。',py:'Yòngguo de zhǐ bié rēng, jiéyuē zīyuán yào cóng xiǎo shì zuòqǐ.',vn:'Giấy đã dùng đừng vứt đi, tiết kiệm tài nguyên phải bắt đầu từ việc nhỏ.'}
   ],
   colloFull:[
     {zh:'水资源',py:'shuǐ zīyuán',vn:'tài nguyên nước'},
     {zh:'资源丰富',py:'zīyuán fēngfù',vn:'tài nguyên phong phú'},
     {zh:'节约资源',py:'jiéyuē zīyuán',vn:'tiết kiệm tài nguyên'},
     {zh:'开发资源',py:'kāifā zīyuán',vn:'khai thác tài nguyên'},
     {zh:'资源短缺',py:'zīyuán duǎnquē',vn:'thiếu hụt tài nguyên'}
   ],
   patterns:[
     {s:'资源 + 丰富 / 不足 / 短缺 / 宝贵',m:'tài nguyên phong phú / không đủ / thiếu hụt / quý giá'},
     {s:'开发 / 保护 / 浪费 / 节约 + 资源',m:'khai thác / bảo vệ / lãng phí / tiết kiệm tài nguyên'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tài nguyên nước tuy quý giá nhưng nhiều người vẫn đang lãng phí.',answer:'水资源虽然很宝贵，但是很多人还在浪费。',answerPy:'Shuǐ zīyuán suīrán hěn bǎoguì, dànshì hěn duō rén hái zài làngfèi.',
      note:'虽然……但是……: nhượng bộ; 宝贵 (bài 15).',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Chúng ta nên bảo vệ thật tốt tài nguyên thiên nhiên.',answer:'我们应该把自然资源保护好。',answerPy:'Wǒmen yīnggāi bǎ zìrán zīyuán bǎohù hǎo.',
      note:'把 + tân ngữ + V + 好 (bổ ngữ kết quả).',pair:'把'}
   ]},

  {n:13,zh:'车祸',py:'chēhuò',pos:'Danh từ',vn:'tai nạn giao thông',hv:'xa hoạ',em:'🚑',lesson:1,
   explain:['Tai nạn do xe cộ gây ra — tai nạn giao thông (khẩu ngữ, gọn hơn 交通事故).','Động từ đi kèm: 出车祸 (gặp tai nạn), 发生车祸, 死于车祸.'],
   usage:'出车祸 / 发生车祸 / 一场车祸 / 死于车祸 / 在车祸中受伤.',
   collo:['出车祸','发生车祸','一场车祸','死于车祸'],
   ex_zh:'下雨天路滑，开车要小心，很容易出车祸。',ex_py:'Xià yǔ tiān lù huá, kāichē yào xiǎoxīn, hěn róngyì chū chēhuò.',ex_vn:'Ngày mưa đường trơn, lái xe phải cẩn thận, rất dễ gặp tai nạn.',
   exList:[
     {zh:'每年死于与空气污染有关的疾病的人比死于车祸的还要多。',py:'Měi nián sǐ yú yǔ kōngqì wūrǎn yǒuguān de jíbìng de rén bǐ sǐ yú chēhuò de hái yào duō.',vn:'Mỗi năm, số người chết vì các bệnh liên quan đến ô nhiễm không khí còn nhiều hơn số người chết vì tai nạn giao thông.'},
     {zh:'下雨天路滑，开车要小心，很容易出车祸。',py:'Xià yǔ tiān lù huá, kāichē yào xiǎoxīn, hěn róngyì chū chēhuò.',vn:'Ngày mưa đường trơn, lái xe phải cẩn thận, rất dễ gặp tai nạn.'},
     {zh:'他在一场车祸中受了伤，住了两个月的院。',py:'Tā zài yì cháng chēhuò zhōng shòule shāng, zhùle liǎng ge yuè de yuàn.',vn:'Anh ấy bị thương trong một vụ tai nạn giao thông, phải nằm viện hai tháng.'}
   ],
   colloFull:[
     {zh:'出车祸',py:'chū chēhuò',vn:'gặp tai nạn giao thông'},
     {zh:'发生车祸',py:'fāshēng chēhuò',vn:'xảy ra tai nạn giao thông'},
     {zh:'一场车祸',py:'yì cháng chēhuò',vn:'một vụ tai nạn'},
     {zh:'死于车祸',py:'sǐ yú chēhuò',vn:'chết vì tai nạn giao thông'},
     {zh:'在车祸中受伤',py:'zài chēhuò zhōng shòushāng',vn:'bị thương trong tai nạn'}
   ],
   patterns:[
     {s:'出 / 发生 + 车祸',m:'gặp / xảy ra tai nạn giao thông'},
     {s:'死于 + 车祸 / 疾病',m:'chết vì … (于 văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì lái xe quá nhanh nên anh ấy gặp tai nạn.',answer:'因为车开得太快，所以他出了车祸。',answerPy:'Yīnwèi chē kāi de tài kuài, suǒyǐ tā chūle chēhuò.',
      note:'因为……所以……; 出车祸 — động từ là 出, không nói ✗有车祸了 trong câu này.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Chỉ cần tuân thủ luật giao thông là có thể giảm tai nạn.',answer:'只要遵守交通规则，就能减少车祸。',answerPy:'Zhǐyào zūnshǒu jiāotōng guīzé, jiù néng jiǎnshǎo chēhuò.',
      note:'只要……就……; 遵守 (bài 23), 规则 (bài 18).',pair:'只要……就……'}
   ]},

  {n:14,zh:'不安',py:'bù\'ān',pos:'Tính từ',vn:'lo lắng, bất an, không yên lòng',hv:'bất an',em:'😟',lesson:1,
   explain:['Trong lòng không yên, lo lắng — bất an.','Hay dùng: 令人不安 (khiến người ta lo), 感到不安, 心神不安 (练习 3). Lịch sự còn có nghĩa áy náy: 让您久等了，我很不安.'],
   usage:'感到 / 觉得 + 不安; 令人 / 让人 + 不安; 有些不安; 不安的心情; 心神不安. (安 thanh 1 nên 不 giữ nguyên bù.)',
   collo:['令人不安','感到不安','心神不安','不安的心情'],
   ex_zh:'这些数据确实令人不安。',ex_py:'Zhèxiē shùjù quèshí lìng rén bù\'ān.',ex_vn:'Những số liệu này thật sự khiến người ta lo lắng.',
   exList:[
     {zh:'这些数据确实令人不安。',py:'Zhèxiē shùjù quèshí lìng rén bù\'ān.',vn:'Những số liệu này thật sự khiến người ta lo lắng.'},
     {zh:'接到电话，她感到有些不安，急忙连夜赶回家中。',py:'Jiēdào diànhuà, tā gǎndào yǒuxiē bù\'ān, jímáng liányè gǎnhuí jiā zhōng.',vn:'Nhận được điện thoại, cô ấy thấy hơi bất an, vội vàng về nhà ngay trong đêm.'},
     {zh:'考试结果还没公布，他一整天都心神不安。',py:'Kǎoshì jiéguǒ hái méi gōngbù, tā yì zhěng tiān dōu xīnshén bù\'ān.',vn:'Kết quả thi chưa công bố, cả ngày cậu ấy cứ bồn chồn không yên.'}
   ],
   colloFull:[
     {zh:'令人不安',py:'lìng rén bù\'ān',vn:'khiến người ta lo lắng'},
     {zh:'感到不安',py:'gǎndào bù\'ān',vn:'cảm thấy bất an'},
     {zh:'心神不安',py:'xīnshén bù\'ān',vn:'bồn chồn không yên'},
     {zh:'不安的心情',py:'bù\'ān de xīnqíng',vn:'tâm trạng lo lắng'},
     {zh:'有些不安',py:'yǒuxiē bù\'ān',vn:'hơi bất an'}
   ],
   patterns:[
     {s:'令人 / 让人 + 不安',m:'khiến người ta lo lắng'},
     {s:'S + 感到 + (有些) 不安',m:'… cảm thấy (hơi) bất an'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con trai mãi chưa về nhà khiến mẹ rất bất an.',answer:'儿子一直没回家，让妈妈很不安。',answerPy:'Érzi yìzhí méi huí jiā, ràng māma hěn bù\'ān.',
      note:'让 + người + tính từ: khiến ai thế nào.',pair:'让 (khiến)'},
     {promptLang:'vi',prompt:'Tuy đã thi xong nhưng cậu ấy vẫn thấy hơi bất an.',answer:'虽然考完了，但是他还是感到有些不安。',answerPy:'Suīrán kǎowán le, dànshì tā háishi gǎndào yǒuxiē bù\'ān.',
      note:'虽然……但是……还是……: nhượng bộ; 有些 + tính từ = hơi ….',pair:'虽然……但是……'}
   ]},

  {n:15,zh:'工业',py:'gōngyè',pos:'Danh từ',vn:'công nghiệp',hv:'công nghiệp',em:'🏭',lesson:1,
   explain:['Ngành dùng máy móc để khai thác nguyên liệu và chế biến thành sản phẩm — công nghiệp.','Hay đi đôi với 农业: 工业农业生产 / 工农业.'],
   usage:'工业生产 / 工业城市 / 工业污染 / 工业发达 / 发展工业 / 重工业、轻工业.',
   collo:['工业生产','发展工业','工业污染','工业城市'],
   ex_zh:'一部分环境污染是由工业农业生产活动造成的。',ex_py:'Yí bùfen huánjìng wūrǎn shì yóu gōngyè nóngyè shēngchǎn huódòng zàochéng de.',ex_vn:'Một phần ô nhiễm môi trường là do hoạt động sản xuất công nghiệp, nông nghiệp gây ra.',
   exList:[
     {zh:'一部分环境污染是由工业农业生产活动造成的。',py:'Yí bùfen huánjìng wūrǎn shì yóu gōngyè nóngyè shēngchǎn huódòng zàochéng de.',vn:'Một phần ô nhiễm môi trường là do hoạt động sản xuất công nghiệp, nông nghiệp gây ra.'},
     {zh:'这座城市的工业很发达，但空气不太好。',py:'Zhè zuò chéngshì de gōngyè hěn fādá, dàn kōngqì bú tài hǎo.',vn:'Công nghiệp ở thành phố này rất phát triển, nhưng không khí không tốt lắm.'},
     {zh:'发展工业的同时，也要注意保护环境。',py:'Fāzhǎn gōngyè de tóngshí, yě yào zhùyì bǎohù huánjìng.',vn:'Song song với phát triển công nghiệp, cũng phải chú ý bảo vệ môi trường.'}
   ],
   colloFull:[
     {zh:'工业生产',py:'gōngyè shēngchǎn',vn:'sản xuất công nghiệp'},
     {zh:'发展工业',py:'fāzhǎn gōngyè',vn:'phát triển công nghiệp'},
     {zh:'工业污染',py:'gōngyè wūrǎn',vn:'ô nhiễm công nghiệp'},
     {zh:'工业城市',py:'gōngyè chéngshì',vn:'thành phố công nghiệp'},
     {zh:'工业发达',py:'gōngyè fādá',vn:'công nghiệp phát triển'}
   ],
   patterns:[
     {s:'工业 + 生产 / 污染 / 城市 / 区',m:'sản xuất / ô nhiễm / thành phố / khu công nghiệp'},
     {s:'工业 + 农业 → 工农业',m:'công – nông nghiệp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ô nhiễm công nghiệp ngày càng nghiêm trọng.',answer:'工业污染越来越严重了。',answerPy:'Gōngyè wūrǎn yuè lái yuè yánzhòng le.',
      note:'越来越 + tính từ + 了: thay đổi dần theo thời gian.',pair:'越来越……'},
     {promptLang:'vi',prompt:'Thành phố này không những công nghiệp phát triển mà nông nghiệp cũng rất tốt.',answer:'这个城市不仅工业发达，农业也很好。',answerPy:'Zhège chéngshì bùjǐn gōngyè fādá, nóngyè yě hěn hǎo.',
      note:'不仅……也……: hai ý song song tăng tiến; 发达 (bài 12).',pair:'不仅……也……'}
   ]},

  {n:16,zh:'农业',py:'nóngyè',pos:'Danh từ',vn:'nông nghiệp',hv:'nông nghiệp',em:'🌾',lesson:1,
   explain:['Ngành trồng trọt, chăn nuôi — nông nghiệp.','Đi đôi với 工业: 工业农业生产活动 (bài khoá).'],
   usage:'农业生产 / 发展农业 / 农业大国 / 现代农业 / 农业用水.',
   collo:['农业生产','发展农业','农业大国','现代农业'],
   ex_zh:'越南是一个农业大国，大米出口很多。',ex_py:'Yuènán shì yí ge nóngyè dàguó, dàmǐ chūkǒu hěn duō.',ex_vn:'Việt Nam là một nước nông nghiệp lớn, xuất khẩu gạo rất nhiều.',
   exList:[
     {zh:'一部分环境污染是由工业农业生产活动造成的。',py:'Yí bùfen huánjìng wūrǎn shì yóu gōngyè nóngyè shēngchǎn huódòng zàochéng de.',vn:'Một phần ô nhiễm môi trường là do hoạt động sản xuất công nghiệp, nông nghiệp gây ra.'},
     {zh:'越南是一个农业大国，大米出口很多。',py:'Yuènán shì yí ge nóngyè dàguó, dàmǐ chūkǒu hěn duō.',vn:'Việt Nam là một nước nông nghiệp lớn, xuất khẩu gạo rất nhiều.'},
     {zh:'现代农业离不开科学技术。',py:'Xiàndài nóngyè lí bu kāi kēxué jìshù.',vn:'Nông nghiệp hiện đại không thể tách rời khoa học kỹ thuật.'}
   ],
   colloFull:[
     {zh:'农业生产',py:'nóngyè shēngchǎn',vn:'sản xuất nông nghiệp'},
     {zh:'发展农业',py:'fāzhǎn nóngyè',vn:'phát triển nông nghiệp'},
     {zh:'农业大国',py:'nóngyè dàguó',vn:'nước nông nghiệp lớn'},
     {zh:'现代农业',py:'xiàndài nóngyè',vn:'nông nghiệp hiện đại'},
     {zh:'农业用水',py:'nóngyè yòngshuǐ',vn:'nước dùng cho nông nghiệp'}
   ],
   patterns:[
     {s:'农业 + 生产 / 大国 / 用水',m:'sản xuất / nước lớn / nước dùng … nông nghiệp'},
     {s:'发展 + 农业 / 工业',m:'phát triển nông nghiệp / công nghiệp'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nông nghiệp ở đây phát triển rất nhanh.',answer:'这里的农业发展得很快。',answerPy:'Zhèli de nóngyè fāzhǎn de hěn kuài.',
      note:'V + 得 + bổ ngữ trạng thái: đánh giá mức độ của hành động.',pair:'V + 得 + bổ ngữ trạng thái'},
     {promptLang:'vi',prompt:'Nếu không có nước thì nông nghiệp không thể phát triển.',answer:'如果没有水，农业就无法发展。',answerPy:'Rúguǒ méiyǒu shuǐ, nóngyè jiù wúfǎ fāzhǎn.',
      note:'如果……就……; 无法 + V = không thể ….',pair:'如果……就……'}
   ]},

  {n:17,zh:'生产',py:'shēngchǎn',pos:'Động từ',vn:'sản xuất',hv:'sinh sản',em:'⚙️',lesson:1,
   explain:['Làm ra sản phẩm, của cải bằng lao động, máy móc — sản xuất.','Âm Hán–Việt là “sinh sản” nhưng nghĩa thông dụng là SẢN XUẤT (xem Cầu nối Hán–Việt).'],
   usage:'生产 + 产品 / 汽车 / 粮食; 生产过程 / 生产活动 / 生产线; 恢复生产; 在生产中.',
   collo:['生产产品','生产过程','生产活动','恢复生产'],
   ex_zh:'这家工厂每年生产十万辆汽车。',ex_py:'Zhè jiā gōngchǎng měi nián shēngchǎn shíwàn liàng qìchē.',ex_vn:'Nhà máy này mỗi năm sản xuất một trăm nghìn chiếc ô tô.',
   exList:[
     {zh:'大型工厂生产过程中，有的会产生大量废水。',py:'Dàxíng gōngchǎng shēngchǎn guòchéng zhōng, yǒude huì chǎnshēng dàliàng fèishuǐ.',vn:'Trong quá trình sản xuất của các nhà máy lớn, có nơi sẽ thải ra lượng lớn nước thải.'},
     {zh:'这家工厂每年生产十万辆汽车。',py:'Zhè jiā gōngchǎng měi nián shēngchǎn shíwàn liàng qìchē.',vn:'Nhà máy này mỗi năm sản xuất một trăm nghìn chiếc ô tô.'},
     {zh:'记者了解到，现在受灾群众已逐步恢复了正常的生产生活。',py:'Jìzhě liǎojiě dào, xiànzài shòuzāi qúnzhòng yǐ zhúbù huīfùle zhèngcháng de shēngchǎn shēnghuó.',vn:'Phóng viên được biết, hiện nay người dân vùng bị thiên tai đã từng bước khôi phục sản xuất và sinh hoạt bình thường.'}
   ],
   colloFull:[
     {zh:'生产产品',py:'shēngchǎn chǎnpǐn',vn:'sản xuất sản phẩm'},
     {zh:'生产过程',py:'shēngchǎn guòchéng',vn:'quá trình sản xuất'},
     {zh:'生产活动',py:'shēngchǎn huódòng',vn:'hoạt động sản xuất'},
     {zh:'恢复生产',py:'huīfù shēngchǎn',vn:'khôi phục sản xuất'},
     {zh:'生产线',py:'shēngchǎnxiàn',vn:'dây chuyền sản xuất'}
   ],
   patterns:[
     {s:'生产 + sản phẩm',m:'sản xuất …'},
     {s:'(在) 生产过程中',m:'trong quá trình sản xuất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc điện thoại này được sản xuất ở Việt Nam.',answer:'这部手机是在越南生产的。',answerPy:'Zhè bù shǒujī shì zài Yuènán shēngchǎn de.',
      note:'是……的: nhấn mạnh nơi chốn của việc đã xảy ra.',pair:'是……的'},
     {promptLang:'vi',prompt:'Nhà máy đã sản xuất xong lô hàng này rồi.',answer:'工厂已经把这批货生产完了。',answerPy:'Gōngchǎng yǐjīng bǎ zhè pī huò shēngchǎn wán le.',
      note:'把 + tân ngữ + V + 完; 批 (bài 26) = lô, đợt.',pair:'把'}
   ]},

  {n:18,zh:'大型',py:'dàxíng',pos:'Tính từ',vn:'cỡ lớn, quy mô lớn',hv:'đại hình',em:'🏗️',lesson:1,
   explain:['Có quy mô, kích thước lớn — cỡ lớn. Cùng dãy: 中型 (cỡ vừa), 小型 (cỡ nhỏ).','Là tính từ phi vị ngữ: chỉ đứng trước danh từ (大型工厂); không nói ✗这个工厂很大型.'],
   usage:'大型 + 工厂 / 超市 / 活动 / 比赛 / 企业 / 设备 / 演出; 大型的 + N. Muốn làm vị ngữ thì nói 规模很大.',
   collo:['大型工厂','大型超市','大型活动','大型企业'],
   ex_zh:'我家附近新开了一家大型超市。',ex_py:'Wǒ jiā fùjìn xīn kāile yì jiā dàxíng chāoshì.',ex_vn:'Gần nhà tôi mới mở một siêu thị lớn.',
   exList:[
     {zh:'大型工厂生产过程中，有的会产生大量废水。',py:'Dàxíng gōngchǎng shēngchǎn guòchéng zhōng, yǒude huì chǎnshēng dàliàng fèishuǐ.',vn:'Trong quá trình sản xuất của các nhà máy lớn, có nơi sẽ thải ra lượng lớn nước thải.'},
     {zh:'周末学校要举办一场大型的环保活动。',py:'Zhōumò xuéxiào yào jǔbàn yì cháng dàxíng de huánbǎo huódòng.',vn:'Cuối tuần trường sẽ tổ chức một hoạt động bảo vệ môi trường quy mô lớn.'},
     {zh:'我家附近新开了一家大型超市。',py:'Wǒ jiā fùjìn xīn kāile yì jiā dàxíng chāoshì.',vn:'Gần nhà tôi mới mở một siêu thị lớn.'}
   ],
   colloFull:[
     {zh:'大型工厂',py:'dàxíng gōngchǎng',vn:'nhà máy lớn'},
     {zh:'大型超市',py:'dàxíng chāoshì',vn:'siêu thị lớn'},
     {zh:'大型活动',py:'dàxíng huódòng',vn:'hoạt động quy mô lớn'},
     {zh:'大型企业',py:'dàxíng qǐyè',vn:'doanh nghiệp lớn'},
     {zh:'大型演出',py:'dàxíng yǎnchū',vn:'buổi biểu diễn quy mô lớn'}
   ],
   patterns:[
     {s:'大型 / 中型 / 小型 + N',m:'… cỡ lớn / vừa / nhỏ'},
     {s:'✗ N + 很大型 → N + 规模很大',m:'大型 không làm vị ngữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy làm việc ở một doanh nghiệp lớn.',answer:'他在一家大型企业工作。',answerPy:'Tā zài yì jiā dàxíng qǐyè gōngzuò.',
      note:'在 + nơi chốn + V: nơi chốn đứng TRƯỚC động từ; 大型 đứng trước danh từ.',pair:'在 + nơi chốn + V'},
     {promptLang:'vi',prompt:'Trường vừa tổ chức một cuộc thi lớn, tất cả học sinh đều tham gia.',answer:'学校举办了一场大型比赛，所有学生都参加了。',answerPy:'Xuéxiào jǔbànle yì cháng dàxíng bǐsài, suǒyǒu xuésheng dōu cānjiā le.',
      note:'所有……都……: tất cả … đều ….',pair:'所有……都……'}
   ]},

  {n:19,zh:'工厂',py:'gōngchǎng',pos:'Danh từ',vn:'nhà máy, công xưởng',hv:'công xưởng',em:'🔩',lesson:1,
   explain:['Nơi có máy móc, công nhân để sản xuất hàng hoá — nhà máy, xưởng.','Lượng từ: 一家 / 一座 / 一个工厂; 厂 cũng dùng một mình: 厂长, 汽车厂.'],
   usage:'一家工厂 / 开工厂 / 在工厂工作 / 工厂排放废水、废气 / 大型工厂.',
   collo:['一家工厂','开工厂','在工厂工作','工厂排放'],
   ex_zh:'他高中毕业以后去了一家工厂工作。',ex_py:'Tā gāozhōng bìyè yǐhòu qùle yì jiā gōngchǎng gōngzuò.',ex_vn:'Tốt nghiệp cấp ba xong, anh ấy vào làm ở một nhà máy.',
   exList:[
     {zh:'大型工厂生产过程中，有的会产生大量废水。',py:'Dàxíng gōngchǎng shēngchǎn guòchéng zhōng, yǒude huì chǎnshēng dàliàng fèishuǐ.',vn:'Trong quá trình sản xuất của các nhà máy lớn, có nơi sẽ thải ra lượng lớn nước thải.'},
     {zh:'大部分污染物是城市周边地区工厂排放的废气。',py:'Dà bùfen wūrǎnwù shì chéngshì zhōubiān dìqū gōngchǎng páifàng de fèiqì.',vn:'Phần lớn chất ô nhiễm là khí thải do các nhà máy ở vùng ven thành phố thải ra.'},
     {zh:'他高中毕业以后去了一家工厂工作。',py:'Tā gāozhōng bìyè yǐhòu qùle yì jiā gōngchǎng gōngzuò.',vn:'Tốt nghiệp cấp ba xong, anh ấy vào làm ở một nhà máy.'}
   ],
   colloFull:[
     {zh:'一家工厂',py:'yì jiā gōngchǎng',vn:'một nhà máy'},
     {zh:'开工厂',py:'kāi gōngchǎng',vn:'mở nhà máy'},
     {zh:'在工厂工作',py:'zài gōngchǎng gōngzuò',vn:'làm việc ở nhà máy'},
     {zh:'工厂排放',py:'gōngchǎng páifàng',vn:'nhà máy thải ra'},
     {zh:'大型工厂',py:'dàxíng gōngchǎng',vn:'nhà máy lớn'}
   ],
   patterns:[
     {s:'一家 / 一座 + 工厂',m:'một nhà máy'},
     {s:'工厂 + 排放 + 废水 / 废气',m:'nhà máy thải nước thải / khí thải'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà máy đó bị đóng cửa vì làm ô nhiễm dòng sông.',answer:'那家工厂因为污染了河流，被关闭了。',answerPy:'Nà jiā gōngchǎng yīnwèi wūrǎnle héliú, bèi guānbì le.',
      note:'被 + V: bị …; 关闭 (bài 14) = đóng cửa.',pair:'被'},
     {promptLang:'vi',prompt:'Bố tôi làm ở nhà máy đã hơn hai mươi năm rồi.',answer:'我爸爸在工厂工作了二十多年了。',answerPy:'Wǒ bàba zài gōngchǎng gōngzuòle èrshí duō nián le.',
      note:'V + 了 + thời lượng + 了: việc kéo dài đến hiện tại và còn tiếp tục.',pair:'V了 + thời lượng + 了'}
   ]},

  {n:20,zh:'废',py:'fèi',pos:'Tính từ',vn:'thải, bỏ đi, phế',hv:'phế',em:'🗑️',lesson:1,
   explain:['Đã bỏ đi, không dùng được nữa — phế, thải.','Hay làm thành tố đứng trước danh từ: 废水 (nước thải), 废气 (khí thải), 废物 (chất thải), 废纸 (giấy vụn), 废电池 (pin thải).'],
   usage:'废 + 水 / 气 / 物 / 纸 / 电池; 废旧物品; thành ngữ 变废为宝 (biến phế liệu thành đồ quý).',
   collo:['废水','废气','废物','变废为宝'],
   ex_zh:'有的要大量燃烧煤炭，从而产生大量废气和废物。',ex_py:'Yǒude yào dàliàng ránshāo méitàn, cóng\'ér chǎnshēng dàliàng fèiqì hé fèiwù.',ex_vn:'Có nơi phải đốt một lượng lớn than đá, từ đó sinh ra nhiều khí thải và chất thải.',
   exList:[
     {zh:'有的要大量燃烧煤炭，从而产生大量废气和废物。',py:'Yǒude yào dàliàng ránshāo méitàn, cóng\'ér chǎnshēng dàliàng fèiqì hé fèiwù.',vn:'Có nơi phải đốt một lượng lớn than đá, từ đó sinh ra nhiều khí thải và chất thải.'},
     {zh:'用完的废电池不能随便扔。',py:'Yòngwán de fèi diànchí bù néng suíbiàn rēng.',vn:'Pin đã hết không được vứt tuỳ tiện.'},
     {zh:'我们把废纸收集起来，变废为宝。',py:'Wǒmen bǎ fèizhǐ shōují qǐlai, biàn fèi wéi bǎo.',vn:'Chúng tôi gom giấy vụn lại, biến đồ bỏ đi thành đồ có ích.'}
   ],
   colloFull:[
     {zh:'废水',py:'fèishuǐ',vn:'nước thải'},
     {zh:'废气',py:'fèiqì',vn:'khí thải'},
     {zh:'废物',py:'fèiwù',vn:'chất thải, phế liệu'},
     {zh:'变废为宝',py:'biàn fèi wéi bǎo',vn:'biến phế liệu thành đồ quý'},
     {zh:'废电池',py:'fèi diànchí',vn:'pin thải'}
   ],
   patterns:[
     {s:'废 + 水 / 气 / 物 / 纸',m:'nước thải / khí thải / chất thải / giấy vụn'},
     {s:'变废为宝',m:'biến đồ bỏ đi thành đồ có ích'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhà máy không được xả nước thải ra sông.',answer:'工厂不能把废水排到河里。',answerPy:'Gōngchǎng bù néng bǎ fèishuǐ páidào hé li.',
      note:'把 + tân ngữ + V + 到 + nơi chốn: đưa vật đến đâu.',pair:'把'},
     {promptLang:'vi',prompt:'Pin thải không những làm ô nhiễm đất mà còn làm ô nhiễm nước.',answer:'废电池不但会污染土地，而且会污染水。',answerPy:'Fèi diànchí búdàn huì wūrǎn tǔdì, érqiě huì wūrǎn shuǐ.',
      note:'不但……而且……: tăng tiến; hai vế cùng chủ ngữ thì chủ ngữ đứng trước 不但.',pair:'不但……而且……'}
   ]},

  {n:21,zh:'燃烧',py:'ránshāo',pos:'Động từ',vn:'cháy, đốt cháy',hv:'nhiên thiêu',em:'🔥',lesson:1,
   explain:['Vật chất bắt lửa và cháy, toả nhiệt và ánh sáng — cháy, đốt cháy.','Văn viết, khoa học hơn 烧; nghĩa bóng: 燃烧的激情 (nhiệt huyết bùng cháy).'],
   usage:'燃烧 + 煤炭 / 燃料 / 木头; 大量燃烧; 燃烧起来; N + 燃烧时 + 产生…….',
   collo:['燃烧煤炭','大量燃烧','燃烧起来','燃烧产生'],
   ex_zh:'木头燃烧时会产生很多烟。',ex_py:'Mùtou ránshāo shí huì chǎnshēng hěn duō yān.',ex_vn:'Gỗ khi cháy sẽ sinh ra rất nhiều khói.',
   exList:[
     {zh:'有的要大量燃烧煤炭，从而产生大量废气和废物。',py:'Yǒude yào dàliàng ránshāo méitàn, cóng\'ér chǎnshēng dàliàng fèiqì hé fèiwù.',vn:'Có nơi phải đốt một lượng lớn than đá, từ đó sinh ra nhiều khí thải và chất thải.'},
     {zh:'木头燃烧时会产生很多烟。',py:'Mùtou ránshāo shí huì chǎnshēng hěn duō yān.',vn:'Gỗ khi cháy sẽ sinh ra rất nhiều khói.'},
     {zh:'火很快就燃烧起来了，大家赶紧离开了房间。',py:'Huǒ hěn kuài jiù ránshāo qǐlai le, dàjiā gǎnjǐn líkāile fángjiān.',vn:'Lửa bùng lên rất nhanh, mọi người vội vàng rời khỏi phòng.'}
   ],
   colloFull:[
     {zh:'燃烧煤炭',py:'ránshāo méitàn',vn:'đốt than đá'},
     {zh:'大量燃烧',py:'dàliàng ránshāo',vn:'đốt với khối lượng lớn'},
     {zh:'燃烧起来',py:'ránshāo qǐlai',vn:'bùng cháy'},
     {zh:'燃烧产生',py:'ránshāo chǎnshēng',vn:'cháy sinh ra'},
     {zh:'燃烧的火焰',py:'ránshāo de huǒyàn',vn:'ngọn lửa đang cháy'}
   ],
   patterns:[
     {s:'燃烧 + nhiên liệu (煤炭 / 木头 / 汽油)',m:'đốt …'},
     {s:'N + 燃烧时 + 产生……',m:'… khi cháy sinh ra …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì đốt than đá sinh ra nhiều khí thải nên chúng ta nên ít dùng than.',answer:'因为燃烧煤炭会产生很多废气，所以我们应该少用煤炭。',answerPy:'Yīnwèi ránshāo méitàn huì chǎnshēng hěn duō fèiqì, suǒyǐ wǒmen yīnggāi shǎo yòng méitàn.',
      note:'因为……所以……; 少 + V = làm ít đi.',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Lửa vừa chạm vào gỗ là lập tức bùng cháy.',answer:'火一碰到木头就燃烧起来了。',answerPy:'Huǒ yí pèngdào mùtou jiù ránshāo qǐlai le.',
      note:'一……就……; V + 起来: bắt đầu và tiếp diễn. 碰 (bài 5).',pair:'一……就……'}
   ]},

  {n:22,zh:'煤炭',py:'méitàn',pos:'Danh từ',vn:'than đá',hv:'môi thán',em:'⚫',lesson:1,
   explain:['Than đá — nhiên liệu khoáng sản màu đen, đốt để sinh nhiệt, phát điện.','Thuộc nhóm từ chủ đề 资源 (扩展 của bài). Đốt than sinh nhiều khí thải, gây ô nhiễm.'],
   usage:'燃烧煤炭 / 使用煤炭 / 煤炭资源 / 煤炭工业 / 一吨煤炭.',
   collo:['燃烧煤炭','煤炭资源','使用煤炭','煤炭工业'],
   ex_zh:'这个地区煤炭资源很丰富。',ex_py:'Zhège dìqū méitàn zīyuán hěn fēngfù.',ex_vn:'Vùng này tài nguyên than đá rất phong phú.',
   exList:[
     {zh:'有的要大量燃烧煤炭，从而产生大量废气和废物。',py:'Yǒude yào dàliàng ránshāo méitàn, cóng\'ér chǎnshēng dàliàng fèiqì hé fèiwù.',vn:'Có nơi phải đốt một lượng lớn than đá, từ đó sinh ra nhiều khí thải và chất thải.'},
     {zh:'这个地区煤炭资源很丰富。',py:'Zhège dìqū méitàn zīyuán hěn fēngfù.',vn:'Vùng này tài nguyên than đá rất phong phú.'},
     {zh:'以前冬天，北方很多家庭都烧煤炭取暖。',py:'Yǐqián dōngtiān, běifāng hěn duō jiātíng dōu shāo méitàn qǔnuǎn.',vn:'Trước đây vào mùa đông, nhiều gia đình ở phương Bắc đốt than để sưởi ấm.'}
   ],
   colloFull:[
     {zh:'燃烧煤炭',py:'ránshāo méitàn',vn:'đốt than đá'},
     {zh:'煤炭资源',py:'méitàn zīyuán',vn:'tài nguyên than đá'},
     {zh:'使用煤炭',py:'shǐyòng méitàn',vn:'sử dụng than đá'},
     {zh:'煤炭工业',py:'méitàn gōngyè',vn:'công nghiệp than'},
     {zh:'一吨煤炭',py:'yì dūn méitàn',vn:'một tấn than'}
   ],
   patterns:[
     {s:'燃烧 / 使用 / 开采 + 煤炭',m:'đốt / dùng / khai thác than đá'},
     {s:'煤炭 + 资源 / 工业',m:'tài nguyên / công nghiệp than'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Than đá tuy rẻ nhưng gây ô nhiễm rất nghiêm trọng.',answer:'煤炭虽然便宜，但是污染很严重。',answerPy:'Méitàn suīrán piányi, dànshì wūrǎn hěn yánzhòng.',
      note:'Hai vế cùng chủ ngữ: chủ ngữ đứng TRƯỚC 虽然.',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Lượng than thành phố này đốt ngày càng ít.',answer:'这个城市烧的煤炭越来越少了。',answerPy:'Zhège chéngshì shāo de méitàn yuè lái yuè shǎo le.',
      note:'越来越 + tính từ + 了; cụm “这个城市烧的” làm định ngữ cho 煤炭.',pair:'越来越……'}
   ]},

  {n:23,zh:'密切',py:'mìqiè',pos:'Tính từ / Động từ',vn:'mật thiết, chặt chẽ; làm cho gắn bó',hv:'mật thiết',em:'🤝',lesson:1,
   explain:['① Quan hệ gần gũi, chặt chẽ — mật thiết: 关系密切, 密切相关. ② (Với vấn đề) chú ý kỹ, chu đáo, sát sao: 密切关注 / 密切观察.','③ Còn là ĐỘNG TỪ “làm cho gắn bó hơn”: 密切了两国人民之间的友谊 (xem phần ngữ pháp).'],
   usage:'关系密切 / 来往密切; 密切 + 相关 / 联系 / 配合 / 合作 / 注意 / 关注 (bảng 搭配); 密切了 + quan hệ, tình hữu nghị.',
   collo:['密切相关','关系密切','密切关注','密切配合'],
   ex_zh:'还有一部分污染和我们的日常生活密切相关。',ex_py:'Hái yǒu yí bùfen wūrǎn hé wǒmen de rìcháng shēnghuó mìqiè xiāngguān.',ex_vn:'Còn một phần ô nhiễm có liên quan mật thiết đến sinh hoạt hằng ngày của chúng ta.',
   exList:[
     {zh:'还有一部分污染和我们的日常生活密切相关。',py:'Hái yǒu yí bùfen wūrǎn hé wǒmen de rìcháng shēnghuó mìqiè xiāngguān.',vn:'Còn một phần ô nhiễm có liên quan mật thiết đến sinh hoạt hằng ngày của chúng ta.'},
     {zh:'刘医生密切地观察着李妈妈病情的发展。',py:'Liú yīshēng mìqiè de guānchá zhe Lǐ māma bìngqíng de fāzhǎn.',vn:'Bác sĩ Lưu theo dõi sát sao diễn biến bệnh tình của bà Lý.'},
     {zh:'参加了这次环保活动后，两人便有了共同语言，来往也比先前密切了。',py:'Cānjiāle zhè cì huánbǎo huódòng hòu, liǎng rén biàn yǒule gòngtóng yǔyán, láiwǎng yě bǐ xiānqián mìqiè le.',vn:'Sau khi tham gia hoạt động bảo vệ môi trường lần này, hai người có tiếng nói chung, qua lại cũng thân thiết hơn trước.'}
   ],
   colloFull:[
     {zh:'密切相关',py:'mìqiè xiāngguān',vn:'liên quan mật thiết'},
     {zh:'关系密切',py:'guānxi mìqiè',vn:'quan hệ mật thiết'},
     {zh:'密切关注',py:'mìqiè guānzhù',vn:'theo dõi sát sao'},
     {zh:'密切配合',py:'mìqiè pèihé',vn:'phối hợp chặt chẽ'},
     {zh:'密切联系',py:'mìqiè liánxì',vn:'liên hệ chặt chẽ'}
   ],
   patterns:[
     {s:'A 和 B 密切相关',m:'A và B liên quan mật thiết'},
     {s:'密切 + 关注 / 观察 / 配合',m:'theo dõi / quan sát / phối hợp chặt chẽ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Sức khoẻ có liên quan mật thiết với thói quen sinh hoạt.',answer:'健康和生活习惯密切相关。',answerPy:'Jiànkāng hé shēnghuó xíguàn mìqiè xiāngguān.',
      note:'A 和 B (密切) 相关 / 有关: A liên quan đến B.',pair:'和……有关 / 相关'},
     {promptLang:'vi',prompt:'Quan hệ của hai người họ càng ngày càng thân thiết.',answer:'他们两个人的关系越来越密切了。',answerPy:'Tāmen liǎng ge rén de guānxi yuè lái yuè mìqiè le.',
      note:'关系 + 密切: quan hệ mật thiết; 越来越 + tính từ + 了.',pair:'越来越……'}
   ]},

  {n:24,zh:'尾气',py:'wěiqì',pos:'Danh từ',vn:'khí thải (xe cộ)',hv:'vĩ khí',em:'🚗',lesson:1,
   explain:['Khí thải ra từ ống xả của ô tô, xe máy — khí thải xe.','Thường nói 汽车尾气; khác 废气 là khí thải nói chung (cả của nhà máy).'],
   usage:'汽车尾气 / 排放尾气 / 尾气污染 / 尾气排放标准.',
   collo:['汽车尾气','尾气污染','排放尾气','尾气排放'],
   ex_zh:'汽车尾气就是其中之一。',ex_py:'Qìchē wěiqì jiù shì qízhōng zhī yī.',ex_vn:'Khí thải ô tô chính là một trong số đó.',
   exList:[
     {zh:'还有一部分污染和我们的日常生活密切相关，汽车尾气就是其中之一。',py:'Hái yǒu yí bùfen wūrǎn hé wǒmen de rìcháng shēnghuó mìqiè xiāngguān, qìchē wěiqì jiù shì qízhōng zhī yī.',vn:'Còn một phần ô nhiễm liên quan mật thiết đến sinh hoạt hằng ngày của chúng ta, khí thải ô tô chính là một trong số đó.'},
     {zh:'另外，汽车尾气也是一大污染源。',py:'Lìngwài, qìchē wěiqì yě shì yí dà wūrǎnyuán.',vn:'Ngoài ra, khí thải ô tô cũng là một nguồn ô nhiễm lớn.'},
     {zh:'城市里的车越来越多，尾气污染也越来越严重。',py:'Chéngshì li de chē yuè lái yuè duō, wěiqì wūrǎn yě yuè lái yuè yánzhòng.',vn:'Xe trong thành phố ngày càng nhiều, ô nhiễm khí thải cũng ngày càng nghiêm trọng.'}
   ],
   colloFull:[
     {zh:'汽车尾气',py:'qìchē wěiqì',vn:'khí thải ô tô'},
     {zh:'尾气污染',py:'wěiqì wūrǎn',vn:'ô nhiễm khí thải'},
     {zh:'排放尾气',py:'páifàng wěiqì',vn:'xả khí thải'},
     {zh:'尾气排放',py:'wěiqì páifàng',vn:'việc xả khí thải'},
     {zh:'尾气排放标准',py:'wěiqì páifàng biāozhǔn',vn:'tiêu chuẩn khí thải'}
   ],
   patterns:[
     {s:'汽车 / 摩托车 + 尾气',m:'khí thải ô tô / xe máy'},
     {s:'减少 + 尾气排放',m:'giảm lượng khí thải'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để giảm khí thải ô tô, chúng tôi đạp xe đi học.',answer:'为了减少汽车尾气，我们骑自行车上学。',answerPy:'Wèile jiǎnshǎo qìchē wěiqì, wǒmen qí zìxíngchē shàngxué.',
      note:'为了 + mục đích, đứng đầu câu.',pair:'为了……'},
     {promptLang:'vi',prompt:'Khí thải xe máy làm không khí rất bẩn.',answer:'摩托车的尾气把空气弄得很脏。',answerPy:'Mótuōchē de wěiqì bǎ kōngqì nòng de hěn zāng.',
      note:'把 + tân ngữ + 弄得 + trạng thái: làm cho … thành ….',pair:'把'}
   ]},

  {n:25,zh:'幸运',py:'xìngyùn',pos:'Tính từ',vn:'may mắn',hv:'hạnh vận',em:'🍀',lesson:1,
   explain:['Gặp được điều tốt, thoát được điều xấu — may mắn.','Mở câu bằng “幸运的是，……” (điều may là …) để chuyển sang ý tích cực, như bài khoá.'],
   usage:'很幸运 / 幸运的是 / 幸运地 + V / 幸运儿 (người may mắn) / 幸运数字.',
   collo:['幸运的是','很幸运','幸运地','幸运儿'],
   ex_zh:'能遇到这么好的老师，我真幸运。',ex_py:'Néng yùdào zhème hǎo de lǎoshī, wǒ zhēn xìngyùn.',ex_vn:'Gặp được thầy giáo tốt như vậy, tôi thật may mắn.',
   exList:[
     {zh:'幸运的是，越来越多的人敏感地认识到了环境问题的严重。',py:'Xìngyùn de shì, yuè lái yuè duō de rén mǐngǎn de rènshi dàole huánjìng wèntí de yánzhòng.',vn:'Điều may mắn là ngày càng nhiều người nhạy bén nhận ra sự nghiêm trọng của vấn đề môi trường.'},
     {zh:'船翻了，他很幸运地抱住一根木头，游到一个小岛上。',py:'Chuán fān le, tā hěn xìngyùn de bàozhù yì gēn mùtou, yóudào yí ge xiǎo dǎo shang.',vn:'Thuyền bị lật, anh ấy may mắn ôm được một khúc gỗ, bơi vào một hòn đảo nhỏ.'},
     {zh:'能遇到这么好的老师，我真幸运。',py:'Néng yùdào zhème hǎo de lǎoshī, wǒ zhēn xìngyùn.',vn:'Gặp được thầy giáo tốt như vậy, tôi thật may mắn.'}
   ],
   colloFull:[
     {zh:'幸运的是',py:'xìngyùn de shì',vn:'điều may mắn là'},
     {zh:'很幸运',py:'hěn xìngyùn',vn:'rất may mắn'},
     {zh:'幸运地',py:'xìngyùn de',vn:'một cách may mắn'},
     {zh:'幸运儿',py:'xìngyùn\'ér',vn:'người may mắn'},
     {zh:'幸运数字',py:'xìngyùn shùzì',vn:'con số may mắn'}
   ],
   patterns:[
     {s:'幸运的是，……',m:'Điều may mắn là …'},
     {s:'(很) 幸运地 + V',m:'may mắn (làm được) …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu ấy may mắn được trường đại học tốt nhất nhận vào.',answer:'他很幸运地被最好的大学录取了。',answerPy:'Tā hěn xìngyùn de bèi zuì hǎo de dàxué lùqǔ le.',
      note:'Trạng ngữ (很幸运地) đứng TRƯỚC 被; 录取 (bài 23).',pair:'被'},
     {promptLang:'vi',prompt:'Tuy bị lạc đường nhưng may là gặp được một người tốt bụng.',answer:'虽然迷路了，但幸运的是遇到了一个好心人。',answerPy:'Suīrán mílù le, dàn xìngyùn de shì yùdàole yí ge hǎoxīnrén.',
      note:'幸运的是 chen vào vế 但 để nhấn điểm tích cực.',pair:'虽然……但是……'}
   ]},

  {n:26,zh:'敏感',py:'mǐngǎn',pos:'Tính từ',vn:'nhạy cảm, nhạy bén',hv:'mẫn cảm',em:'📡',lesson:1,
   explain:['Phản ứng nhanh, dễ cảm nhận những thay đổi bên ngoài — nhạy bén, nhạy cảm.','Còn chỉ vấn đề dễ gây tranh cãi, cần tế nhị: 敏感话题 (练习 3); cơ thể dễ phản ứng: 皮肤敏感.'],
   usage:'A 对 B 很敏感; 敏感地 + 认识到 / 发现; 敏感话题 / 敏感问题 / 敏感人群.',
   collo:['对……很敏感','敏感话题','敏感地认识到','敏感人群'],
   ex_zh:'家里的老人对空气污染比较敏感。',ex_py:'Jiā li de lǎorén duì kōngqì wūrǎn bǐjiào mǐngǎn.',ex_vn:'Người già trong nhà khá nhạy cảm với ô nhiễm không khí.',
   exList:[
     {zh:'越来越多的人敏感地认识到了环境问题的严重。',py:'Yuè lái yuè duō de rén mǐngǎn de rènshi dàole huánjìng wèntí de yánzhòng.',vn:'Ngày càng nhiều người nhạy bén nhận ra sự nghiêm trọng của vấn đề môi trường.'},
     {zh:'家里的老人对空气污染比较敏感，最近最好少出门。',py:'Jiā li de lǎorén duì kōngqì wūrǎn bǐjiào mǐngǎn, zuìjìn zuìhǎo shǎo chū mén.',vn:'Người già trong nhà khá nhạy cảm với ô nhiễm không khí, dạo này tốt nhất nên ít ra ngoài.'},
     {zh:'收入是个敏感话题，第一次见面最好别问。',py:'Shōurù shì ge mǐngǎn huàtí, dì-yī cì jiànmiàn zuìhǎo bié wèn.',vn:'Thu nhập là chủ đề nhạy cảm, lần đầu gặp mặt tốt nhất đừng hỏi.'}
   ],
   colloFull:[
     {zh:'对……很敏感',py:'duì……hěn mǐngǎn',vn:'rất nhạy cảm với …'},
     {zh:'敏感话题',py:'mǐngǎn huàtí',vn:'chủ đề nhạy cảm'},
     {zh:'敏感地认识到',py:'mǐngǎn de rènshi dào',vn:'nhạy bén nhận ra'},
     {zh:'敏感人群',py:'mǐngǎn rénqún',vn:'nhóm người nhạy cảm'},
     {zh:'皮肤敏感',py:'pífū mǐngǎn',vn:'da nhạy cảm'}
   ],
   patterns:[
     {s:'A 对 B 很敏感',m:'A rất nhạy cảm với B'},
     {s:'敏感 + 话题 / 问题 / 人群',m:'chủ đề / vấn đề / nhóm người nhạy cảm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Da của em gái rất nhạy cảm với ánh nắng.',answer:'妹妹的皮肤对阳光很敏感。',answerPy:'Mèimei de pífū duì yángguāng hěn mǐngǎn.',
      note:'对 + đối tượng + 很敏感: giới từ 对 đứng trước tính từ.',pair:'对……'},
     {promptLang:'vi',prompt:'Cô ấy nhạy cảm quá, ngay cả một câu đùa cũng làm cô ấy buồn.',answer:'她太敏感了，连一句玩笑都会让她不高兴。',answerPy:'Tā tài mǐngǎn le, lián yí jù wánxiào dōu huì ràng tā bù gāoxìng.',
      note:'连……都……: nhấn mạnh trường hợp nhỏ nhất.',pair:'连……都……'}
   ]},

  {n:27,zh:'自觉',py:'zìjué',pos:'Tính từ',vn:'tự giác, có ý thức',hv:'tự giác',em:'🙋',lesson:1,
   explain:['Tự mình nhận thức được và chủ động làm, không cần ai nhắc — tự giác.','Hay làm trạng ngữ với 地: 自觉地 + 工作 / 学习 / 遵守 / 爱护 (bảng 搭配).'],
   usage:'很自觉; 自觉地 + 工作 / 学习 / 运用 / 遵守 / 爱护 / 注意 / 养成(习惯); danh từ: 自觉性 (tính tự giác).',
   collo:['自觉地遵守','自觉地学习','很自觉','自觉性'],
   ex_zh:'父母不在家，他也能自觉地完成作业。',ex_py:'Fùmǔ bú zài jiā, tā yě néng zìjué de wánchéng zuòyè.',ex_vn:'Bố mẹ không ở nhà, cậu ấy vẫn tự giác làm xong bài tập.',
   exList:[
     {zh:'越来越多的人敏感地认识到了环境问题的严重，并自觉地投入到了保护地球的行动中。',py:'Yuè lái yuè duō de rén mǐngǎn de rènshi dàole huánjìng wèntí de yánzhòng, bìng zìjué de tóurù dàole bǎohù dìqiú de xíngdòng zhōng.',vn:'Ngày càng nhiều người nhạy bén nhận ra sự nghiêm trọng của vấn đề môi trường, và tự giác tham gia vào hành động bảo vệ Trái Đất.'},
     {zh:'父母不在家，他也能自觉地完成作业。',py:'Fùmǔ bú zài jiā, tā yě néng zìjué de wánchéng zuòyè.',vn:'Bố mẹ không ở nhà, cậu ấy vẫn tự giác làm xong bài tập.'},
     {zh:'大家都应该自觉地遵守交通规则。',py:'Dàjiā dōu yīnggāi zìjué de zūnshǒu jiāotōng guīzé.',vn:'Mọi người đều nên tự giác tuân thủ luật giao thông.'}
   ],
   colloFull:[
     {zh:'自觉地遵守',py:'zìjué de zūnshǒu',vn:'tự giác tuân thủ'},
     {zh:'自觉地学习',py:'zìjué de xuéxí',vn:'tự giác học tập'},
     {zh:'很自觉',py:'hěn zìjué',vn:'rất tự giác'},
     {zh:'自觉性',py:'zìjuéxìng',vn:'tính tự giác'},
     {zh:'自觉地爱护',py:'zìjué de àihù',vn:'tự giác giữ gìn'}
   ],
   patterns:[
     {s:'自觉地 + V',m:'tự giác làm …'},
     {s:'S + 很自觉',m:'… rất tự giác'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần mọi người đều tự giác phân loại rác thì thành phố sẽ sạch hơn.',answer:'只要大家都自觉地给垃圾分类，城市就会更干净。',answerPy:'Zhǐyào dàjiā dōu zìjué de gěi lājī fēnlèi, chéngshì jiù huì gèng gānjìng.',
      note:'只要……就……; 给垃圾分类 = phân loại rác.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Em trai học rất tự giác, chưa bao giờ phải để mẹ nhắc.',answer:'弟弟学习很自觉，从来没让妈妈提醒过。',answerPy:'Dìdi xuéxí hěn zìjué, cónglái méi ràng māma tíxǐng guo.',
      note:'从来没 + V + 过; 过 đặt sau động từ chính 提醒.',pair:'从来没……过'}
   ]},

  {n:28,zh:'设施',py:'shèshī',pos:'Danh từ',vn:'công trình, cơ sở vật chất, trang thiết bị',hv:'thiết thi',em:'🏟️',lesson:1,
   explain:['Hệ thống công trình, thiết bị được xây dựng để phục vụ một nhu cầu — cơ sở vật chất, công trình.','Khác 设备 (máy móc cụ thể): 设施 là cả hệ thống, công trình — 基础设施 (cơ sở hạ tầng), 体育设施, 环保设施 (练习 2).'],
   usage:'基础设施 / 环保设施 / 体育设施 / 公共设施; 设施 + 建成 / 完工 / 投入使用 / 完善 / 先进 / 落后 (bảng 搭配).',
   collo:['环保设施','基础设施','公共设施','设施完善'],
   ex_zh:'生产中，增加环保设施，减少污染物排放。',ex_py:'Shēngchǎn zhōng, zēngjiā huánbǎo shèshī, jiǎnshǎo wūrǎnwù páifàng.',ex_vn:'Trong sản xuất, tăng thêm công trình bảo vệ môi trường, giảm xả thải chất ô nhiễm.',
   exList:[
     {zh:'生产中，增加环保设施，减少污染物排放。',py:'Shēngchǎn zhōng, zēngjiā huánbǎo shèshī, jiǎnshǎo wūrǎnwù páifàng.',vn:'Trong sản xuất, tăng thêm công trình bảo vệ môi trường, giảm xả thải chất ô nhiễm.'},
     {zh:'那个城市的基础设施还不够完善。',py:'Nàge chéngshì de jīchǔ shèshī hái bú gòu wánshàn.',vn:'Cơ sở hạ tầng của thành phố đó vẫn chưa đủ hoàn thiện.'},
     {zh:'新学校的体育设施很先进，有游泳馆和网球场。',py:'Xīn xuéxiào de tǐyù shèshī hěn xiānjìn, yǒu yóuyǒngguǎn hé wǎngqiúchǎng.',vn:'Cơ sở thể thao của trường mới rất hiện đại, có bể bơi và sân tennis.'}
   ],
   colloFull:[
     {zh:'环保设施',py:'huánbǎo shèshī',vn:'công trình bảo vệ môi trường'},
     {zh:'基础设施',py:'jīchǔ shèshī',vn:'cơ sở hạ tầng'},
     {zh:'公共设施',py:'gōnggòng shèshī',vn:'công trình công cộng'},
     {zh:'设施完善',py:'shèshī wánshàn',vn:'cơ sở vật chất hoàn thiện'},
     {zh:'设施投入使用',py:'shèshī tóurù shǐyòng',vn:'công trình đưa vào sử dụng'}
   ],
   patterns:[
     {s:'基础 / 环保 / 体育 / 公共 + 设施',m:'cơ sở hạ tầng / công trình môi trường / thể thao / công cộng'},
     {s:'设施 + 完善 / 先进 / 落后',m:'cơ sở vật chất hoàn thiện / hiện đại / lạc hậu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công trình công cộng bị người ta phá hỏng rồi.',answer:'公共设施被人破坏了。',answerPy:'Gōnggòng shèshī bèi rén pòhuài le.',
      note:'被 + người + V; ôn 破坏 của bài.',pair:'被'},
     {promptLang:'vi',prompt:'Trường này tuy không lớn nhưng cơ sở vật chất rất hoàn thiện.',answer:'这所学校虽然不大，但是设施很完善。',answerPy:'Zhè suǒ xuéxiào suīrán bú dà, dànshì shèshī hěn wánshàn.',
      note:'虽然……但是……; 完善 (bài 21) đi rất tự nhiên với 设施.',pair:'虽然……但是……'}
   ]},

  {n:29,zh:'能源',py:'néngyuán',pos:'Danh từ',vn:'nguồn năng lượng, năng lượng',hv:'năng nguyên',em:'⚡',lesson:1,
   explain:['Nguồn cung cấp năng lượng: than, dầu, điện, gió, mặt trời… — năng lượng.','可再生能源 = năng lượng tái tạo (gió, mặt trời, nước); 新能源 = năng lượng mới; 清洁能源 = năng lượng sạch.'],
   usage:'节约能源 / 能源消费 / 能源结构 / 可再生能源 / 新能源 / 清洁能源 / 能源短缺.',
   collo:['节约能源','可再生能源','能源消费','新能源'],
   ex_zh:'为了节约能源，请大家都尽量使用节能电器。',ex_py:'Wèile jiéyuē néngyuán, qǐng dàjiā dōu jǐnliàng shǐyòng jiénéng diànqì.',ex_vn:'Để tiết kiệm năng lượng, mời mọi người cố gắng dùng thiết bị điện tiết kiệm năng lượng.',
   exList:[
     {zh:'调整能源消费结构，逐步向可再生能源转变。',py:'Tiáozhěng néngyuán xiāofèi jiégòu, zhúbù xiàng kě zàishēng néngyuán zhuǎnbiàn.',vn:'Điều chỉnh cơ cấu tiêu thụ năng lượng, từng bước chuyển sang năng lượng tái tạo.'},
     {zh:'为了节约能源，请大家都尽量使用节能电器。',py:'Wèile jiéyuē néngyuán, qǐng dàjiā dōu jǐnliàng shǐyòng jiénéng diànqì.',vn:'Để tiết kiệm năng lượng, mời mọi người cố gắng dùng thiết bị điện tiết kiệm năng lượng.'},
     {zh:'越来越多的人开始买新能源汽车。',py:'Yuè lái yuè duō de rén kāishǐ mǎi xīn néngyuán qìchē.',vn:'Ngày càng nhiều người bắt đầu mua ô tô chạy năng lượng mới.'}
   ],
   colloFull:[
     {zh:'节约能源',py:'jiéyuē néngyuán',vn:'tiết kiệm năng lượng'},
     {zh:'可再生能源',py:'kě zàishēng néngyuán',vn:'năng lượng tái tạo'},
     {zh:'能源消费',py:'néngyuán xiāofèi',vn:'tiêu thụ năng lượng'},
     {zh:'新能源',py:'xīn néngyuán',vn:'năng lượng mới'},
     {zh:'清洁能源',py:'qīngjié néngyuán',vn:'năng lượng sạch'}
   ],
   patterns:[
     {s:'节约 / 开发 / 使用 + 能源',m:'tiết kiệm / phát triển / sử dụng năng lượng'},
     {s:'可再生 / 新 / 清洁 + 能源',m:'năng lượng tái tạo / mới / sạch'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để tiết kiệm năng lượng, ra khỏi phòng phải tắt đèn.',answer:'为了节约能源，离开房间要关灯。',answerPy:'Wèile jiéyuē néngyuán, líkāi fángjiān yào guān dēng.',
      note:'为了 + mục đích đứng đầu câu, vế sau là hành động.',pair:'为了……'},
     {promptLang:'vi',prompt:'Năng lượng mặt trời không những sạch mà còn dùng không bao giờ hết.',answer:'太阳能这种能源不但很干净，而且用不完。',answerPy:'Tàiyángnéng zhè zhǒng néngyuán búdàn hěn gānjìng, érqiě yòng bu wán.',
      note:'不但……而且……; V + 不完: bổ ngữ khả năng phủ định.',pair:'不但……而且……'}
   ]},

  {n:30,zh:'逐步',py:'zhúbù',pos:'Phó từ',vn:'từng bước, dần dần',hv:'trục bộ',em:'🪜',lesson:1,
   explain:['Từng bước một, có kế hoạch, có trình tự — từng bước, dần dần.','Thường dùng cho việc do CON NGƯỜI chủ động làm (扩大, 恢复, 完善, 转变); không bổ nghĩa cho tính từ (✗天气逐步冷了). Xem phân biệt 逐步 — 逐渐 (bài 10).'],
   usage:'逐步 + 扩大 / 恢复 / 提高 / 完善 / 实现 / 转变 / 解决; 逐步向 + N + 转变.',
   collo:['逐步扩大','逐步恢复','逐步提高','逐步完善'],
   ex_zh:'云计算应用市场规模正在逐步扩大。',ex_py:'Yúnjìsuàn yìngyòng shìchǎng guīmó zhèngzài zhúbù kuòdà.',ex_vn:'Quy mô thị trường ứng dụng điện toán đám mây đang từng bước mở rộng.',
   exList:[
     {zh:'调整能源消费结构，逐步向可再生能源转变。',py:'Tiáozhěng néngyuán xiāofèi jiégòu, zhúbù xiàng kě zàishēng néngyuán zhuǎnbiàn.',vn:'Điều chỉnh cơ cấu tiêu thụ năng lượng, từng bước chuyển sang năng lượng tái tạo.'},
     {zh:'云计算应用市场规模正在逐步扩大。',py:'Yúnjìsuàn yìngyòng shìchǎng guīmó zhèngzài zhúbù kuòdà.',vn:'Quy mô thị trường ứng dụng điện toán đám mây đang từng bước mở rộng.'},
     {zh:'记者了解到，现在受灾群众已逐步恢复了正常的生产生活。',py:'Jìzhě liǎojiě dào, xiànzài shòuzāi qúnzhòng yǐ zhúbù huīfùle zhèngcháng de shēngchǎn shēnghuó.',vn:'Phóng viên được biết, hiện nay người dân vùng bị thiên tai đã từng bước khôi phục sản xuất và sinh hoạt bình thường.'}
   ],
   colloFull:[
     {zh:'逐步扩大',py:'zhúbù kuòdà',vn:'từng bước mở rộng'},
     {zh:'逐步恢复',py:'zhúbù huīfù',vn:'từng bước khôi phục'},
     {zh:'逐步提高',py:'zhúbù tígāo',vn:'từng bước nâng cao'},
     {zh:'逐步完善',py:'zhúbù wánshàn',vn:'từng bước hoàn thiện'},
     {zh:'逐步实现',py:'zhúbù shíxiàn',vn:'từng bước thực hiện'}
   ],
   patterns:[
     {s:'逐步 + V (扩大 / 恢复 / 提高 / 完善)',m:'từng bước …'},
     {s:'逐步向 + N + 转变',m:'từng bước chuyển sang …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần kiên trì, trình độ tiếng Trung của em sẽ từng bước nâng cao.',answer:'只要坚持下去，你的汉语水平就会逐步提高。',answerPy:'Zhǐyào jiānchí xiàqu, nǐ de Hànyǔ shuǐpíng jiù huì zhúbù tígāo.',
      note:'只要……就……; 逐步 đứng trước động từ 提高.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Nhà trường định từng bước thay hết thiết bị cũ bằng thiết bị mới.',answer:'学校打算逐步把旧设施都换成新的。',answerPy:'Xuéxiào dǎsuàn zhúbù bǎ jiù shèshī dōu huànchéng xīn de.',
      note:'Phó từ 逐步 đứng TRƯỚC 把; 把 A 换成 B = đổi A thành B.',pair:'把……换成……'}
   ]},

  {n:31,zh:'尽量',py:'jǐnliàng',pos:'Phó từ',vn:'cố gắng hết sức, càng … càng tốt',hv:'tận lượng',em:'💪',lesson:1,
   explain:['Cố gắng trong phạm vi có thể để đạt mức cao nhất — cố gắng hết mức.','Đứng trước động từ hoặc cụm 多 / 少 + V: 尽量多骑自行车, 尽量少吃油炸食品. Đọc jǐnliàng (thanh 3), khác 尽力 jìnlì.'],
   usage:'尽量 + V; 尽量 + 多 / 少 / 早 + V; 尽量不 + V; 我会尽量……的.',
   collo:['尽量减少','尽量多','尽量少','尽量早点儿'],
   ex_zh:'老年人要尽量少吃油炸食品。',ex_py:'Lǎoniánrén yào jǐnliàng shǎo chī yóuzhá shípǐn.',ex_vn:'Người cao tuổi nên cố gắng ăn ít đồ chiên rán.',
   exList:[
     {zh:'同时，尽量多骑自行车，多选择公共交通，少使用私家车。',py:'Tóngshí, jǐnliàng duō qí zìxíngchē, duō xuǎnzé gōnggòng jiāotōng, shǎo shǐyòng sījiāchē.',vn:'Đồng thời, cố gắng đi xe đạp nhiều hơn, chọn phương tiện công cộng nhiều hơn, dùng xe riêng ít đi.'},
     {zh:'老年人要尽量少吃油炸食品。',py:'Lǎoniánrén yào jǐnliàng shǎo chī yóuzhá shípǐn.',vn:'Người cao tuổi nên cố gắng ăn ít đồ chiên rán.'},
     {zh:'为了节约能源，请大家都尽量使用节能电器。',py:'Wèile jiéyuē néngyuán, qǐng dàjiā dōu jǐnliàng shǐyòng jiénéng diànqì.',vn:'Để tiết kiệm năng lượng, mời mọi người cố gắng dùng thiết bị điện tiết kiệm năng lượng.'}
   ],
   colloFull:[
     {zh:'尽量减少',py:'jǐnliàng jiǎnshǎo',vn:'cố gắng giảm bớt'},
     {zh:'尽量多',py:'jǐnliàng duō',vn:'cố gắng (làm) nhiều hơn'},
     {zh:'尽量少',py:'jǐnliàng shǎo',vn:'cố gắng (làm) ít đi'},
     {zh:'尽量早点儿',py:'jǐnliàng zǎo diǎnr',vn:'cố gắng sớm một chút'},
     {zh:'尽量不迟到',py:'jǐnliàng bù chídào',vn:'cố gắng không đến muộn'}
   ],
   patterns:[
     {s:'尽量 + (多 / 少) + V',m:'cố gắng (làm nhiều / ít) …'},
     {s:'我会尽量……的',m:'Tôi sẽ cố gắng … (hứa hẹn)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi sẽ cố gắng làm xong bài tập trước 9 giờ.',answer:'我会尽量在九点以前把作业做完。',answerPy:'Wǒ huì jǐnliàng zài jiǔ diǎn yǐqián bǎ zuòyè zuòwán.',
      note:'Thứ tự: 会 + 尽量 + thời gian + 把 + tân ngữ + V + 完.',pair:'把'},
     {promptLang:'vi',prompt:'Để giữ gìn sức khoẻ, bà cố gắng không ăn đồ ngọt.',answer:'为了保持健康，奶奶尽量不吃甜的东西。',answerPy:'Wèile bǎochí jiànkāng, nǎinai jǐnliàng bù chī tián de dōngxi.',
      note:'为了 + mục đích; 尽量不 + V = cố gắng không ….',pair:'为了……'}
   ]},

  {n:32,zh:'私人',py:'sīrén',pos:'Danh từ',vn:'riêng, cá nhân',hv:'tư nhân',em:'🔒',lesson:1,
   explain:['Thuộc về cá nhân, riêng tư — không phải của nhà nước hay tập thể. Sách ghi 私(人): chữ 私 cũng mang nghĩa này khi ghép từ — 私家车 (xe riêng), 私事 (việc riêng).','Hay làm định ngữ: 私人物品 / 私人时间 / 私人医生 / 私人企业.'],
   usage:'私人 + 物品 / 时间 / 生活 / 医生 / 企业 / 空间; 私 + 家车 / 事; 属于私人.',
   collo:['私人物品','私人时间','私家车','私人空间'],
   ex_zh:'这是我的私人物品，请不要随便动。',ex_py:'Zhè shì wǒ de sīrén wùpǐn, qǐng búyào suíbiàn dòng.',ex_vn:'Đây là đồ dùng cá nhân của tôi, xin đừng tự tiện động vào.',
   exList:[
     {zh:'同时，尽量多骑自行车，多选择公共交通，少使用私家车。',py:'Tóngshí, jǐnliàng duō qí zìxíngchē, duō xuǎnzé gōnggòng jiāotōng, shǎo shǐyòng sījiāchē.',vn:'Đồng thời, cố gắng đi xe đạp nhiều hơn, chọn phương tiện công cộng nhiều hơn, dùng xe riêng ít đi.'},
     {zh:'这是我的私人物品，请不要随便动。',py:'Zhè shì wǒ de sīrén wùpǐn, qǐng búyào suíbiàn dòng.',vn:'Đây là đồ dùng cá nhân của tôi, xin đừng tự tiện động vào.'},
     {zh:'周末是我的私人时间，我不想谈工作。',py:'Zhōumò shì wǒ de sīrén shíjiān, wǒ bù xiǎng tán gōngzuò.',vn:'Cuối tuần là thời gian riêng của tôi, tôi không muốn bàn chuyện công việc.'}
   ],
   colloFull:[
     {zh:'私人物品',py:'sīrén wùpǐn',vn:'đồ dùng cá nhân'},
     {zh:'私人时间',py:'sīrén shíjiān',vn:'thời gian riêng'},
     {zh:'私家车',py:'sījiāchē',vn:'xe riêng, xe cá nhân'},
     {zh:'私人空间',py:'sīrén kōngjiān',vn:'không gian riêng'},
     {zh:'私人医生',py:'sīrén yīshēng',vn:'bác sĩ riêng'}
   ],
   patterns:[
     {s:'私人 + N',m:'… riêng, … cá nhân'},
     {s:'私 + 家车 / 事',m:'xe riêng / việc riêng (私 dùng trong từ ghép)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đừng mang những đồ dùng cá nhân này đến trường.',answer:'别把这些私人物品带到学校来。',answerPy:'Bié bǎ zhèxiē sīrén wùpǐn dài dào xuéxiào lái.',
      note:'把 + tân ngữ + 带到 + nơi chốn + 来.',pair:'把'},
     {promptLang:'vi',prompt:'Xe riêng ngày càng nhiều, đường xá ngày càng tắc.',answer:'私家车越来越多，路上越来越堵了。',answerPy:'Sījiāchē yuè lái yuè duō, lù shang yuè lái yuè dǔ le.',
      note:'Hai vế 越来越 song song chỉ hai thay đổi đi cùng nhau.',pair:'越来越……'}
   ]},

  {n:33,zh:'尊敬',py:'zūnjìng',pos:'Động từ',vn:'kính trọng, tôn kính',hv:'tôn kính',em:'🙇',lesson:1,
   explain:['Coi trọng và kính mến (người lớn tuổi, người có đóng góp, người có địa vị) — kính trọng.','Làm định ngữ trong lời chào trang trọng: 尊敬的老师 / 尊敬的各位来宾. Xem phân biệt 尊敬 — 尊重 (练习 2).'],
   usage:'尊敬 + 老师 / 长辈 / 父母 / 老人; 令人尊敬 / 受到尊敬 / 值得尊敬; 尊敬的 + N (xưng hô trang trọng).',
   collo:['令人尊敬','尊敬老人','受到尊敬','尊敬的老师'],
   ex_zh:'这些为此付出努力的人们令人尊敬。',ex_py:'Zhèxiē wèi cǐ fùchū nǔlì de rénmen lìng rén zūnjìng.',ex_vn:'Những người đã bỏ công sức vì việc này thật đáng kính trọng.',
   exList:[
     {zh:'这些为此付出努力的人们令人尊敬。',py:'Zhèxiē wèi cǐ fùchū nǔlì de rénmen lìng rén zūnjìng.',vn:'Những người đã bỏ công sức vì việc này thật đáng kính trọng.'},
     {zh:'尊敬的各位老师、亲爱的同学们，大家好！',py:'Zūnjìng de gè wèi lǎoshī, qīn\'ài de tóngxuémen, dàjiā hǎo!',vn:'Kính thưa các thầy cô, các bạn học sinh thân mến, xin chào mọi người!'},
     {zh:'张老师对每个学生都很好，大家都很尊敬她。',py:'Zhāng lǎoshī duì měi ge xuésheng dōu hěn hǎo, dàjiā dōu hěn zūnjìng tā.',vn:'Cô Trương đối xử tốt với từng học sinh, mọi người đều rất kính trọng cô.'}
   ],
   colloFull:[
     {zh:'令人尊敬',py:'lìng rén zūnjìng',vn:'đáng kính trọng'},
     {zh:'尊敬老人',py:'zūnjìng lǎorén',vn:'kính trọng người già'},
     {zh:'受到尊敬',py:'shòudào zūnjìng',vn:'được kính trọng'},
     {zh:'尊敬的老师',py:'zūnjìng de lǎoshī',vn:'thầy cô kính mến'},
     {zh:'值得尊敬',py:'zhíde zūnjìng',vn:'đáng được kính trọng'}
   ],
   patterns:[
     {s:'令人 / 值得 + 尊敬',m:'đáng kính trọng'},
     {s:'尊敬的 + 各位 / 老师 / 来宾',m:'Kính thưa … (lời mở đầu phát biểu)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chúng ta không những phải kính trọng thầy cô mà còn phải kính trọng bố mẹ.',answer:'我们不仅要尊敬老师，还要尊敬父母。',answerPy:'Wǒmen bùjǐn yào zūnjìng lǎoshī, hái yào zūnjìng fùmǔ.',
      note:'不仅……还……; đối tượng của 尊敬 là người trên, người đáng kính.',pair:'不仅……还……'},
     {promptLang:'vi',prompt:'Công nhân vệ sinh dù gió hay mưa đều làm việc, thật đáng kính trọng.',answer:'清洁工人不管刮风还是下雨都在工作，真令人尊敬。',answerPy:'Qīngjié gōngrén bùguǎn guā fēng háishi xià yǔ dōu zài gōngzuò, zhēn lìng rén zūnjìng.',
      note:'不管……都……: bất kể điều kiện nào; 令人尊敬 = đáng kính.',pair:'不管……都……'}
   ]},

  {n:34,zh:'鼓舞',py:'gǔwǔ',pos:'Động từ',vn:'cổ vũ, khích lệ, làm phấn chấn',hv:'cổ vũ',em:'🎉',lesson:1,
   explain:['Làm cho tinh thần phấn chấn, thêm tự tin — cổ vũ. Chủ ngữ thường là SỰ VIỆC (thắng lợi, tin tốt, thành tích): 胜利鼓舞了大家.','Còn dùng như tính từ “phấn khởi” (令人鼓舞, 挺受鼓舞) và danh từ (极大的鼓舞). Phân biệt với 鼓励 ở phần 词语辨析.'],
   usage:'N (sự việc) + 鼓舞 + người; 令人鼓舞; 受到鼓舞; 给……很大的鼓舞; 鼓舞人心 (练习 3) / 鼓舞士气.',
   collo:['令人鼓舞','受到鼓舞','鼓舞人心','极大的鼓舞'],
   ex_zh:'谈判的成功给了他极大的鼓舞。',ex_py:'Tánpàn de chénggōng gěile tā jí dà de gǔwǔ.',ex_vn:'Thành công của cuộc đàm phán đã cổ vũ anh ấy rất lớn.',
   exList:[
     {zh:'这些为此付出努力的人们令人尊敬，取得的成绩也令人鼓舞。',py:'Zhèxiē wèi cǐ fùchū nǔlì de rénmen lìng rén zūnjìng, qǔdé de chéngjì yě lìng rén gǔwǔ.',vn:'Những người đã bỏ công sức vì việc này thật đáng kính trọng, thành quả đạt được cũng thật đáng phấn khởi.'},
     {zh:'谈判的成功给了他极大的鼓舞。',py:'Tánpàn de chénggōng gěile tā jí dà de gǔwǔ.',vn:'Thành công của cuộc đàm phán đã cổ vũ anh ấy rất lớn.'},
     {zh:'新产品的研制成功极大地鼓舞了科技人员。',py:'Xīn chǎnpǐn de yánzhì chénggōng jí dà de gǔwǔle kējì rényuán.',vn:'Việc nghiên cứu chế tạo thành công sản phẩm mới đã cổ vũ rất lớn cho các nhân viên khoa học kỹ thuật.'}
   ],
   colloFull:[
     {zh:'令人鼓舞',py:'lìng rén gǔwǔ',vn:'đáng phấn khởi'},
     {zh:'受到鼓舞',py:'shòudào gǔwǔ',vn:'được cổ vũ, phấn chấn'},
     {zh:'鼓舞人心',py:'gǔwǔ rénxīn',vn:'làm phấn chấn lòng người'},
     {zh:'极大的鼓舞',py:'jí dà de gǔwǔ',vn:'nguồn cổ vũ to lớn'},
     {zh:'鼓舞士气',py:'gǔwǔ shìqì',vn:'nâng cao sĩ khí'}
   ],
   patterns:[
     {s:'N (sự việc) + 鼓舞了 + người',m:'… đã cổ vũ …'},
     {s:'令人鼓舞 / 给……很大的鼓舞',m:'đáng phấn khởi / cổ vũ … rất nhiều'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tin chiến thắng khiến thầy trò toàn trường đều rất phấn khởi.',answer:'胜利的消息让全校师生都很受鼓舞。',answerPy:'Shènglì de xiāoxi ràng quán xiào shīshēng dōu hěn shòu gǔwǔ.',
      note:'让 + người + 很受鼓舞: khiến ai phấn khởi; chủ ngữ là SỰ VIỆC.',pair:'让 (khiến)'},
     {promptLang:'vi',prompt:'Chúng tôi được thành công của họ cổ vũ rất nhiều.',answer:'我们被他们的成功深深地鼓舞了。',answerPy:'Wǒmen bèi tāmen de chénggōng shēnshēn de gǔwǔ le.',
      note:'被 + sự việc + (trạng ngữ) + 鼓舞了.',pair:'被'}
   ]},

  {n:35,zh:'消极',py:'xiāojí',pos:'Tính từ',vn:'tiêu cực',hv:'tiêu cực',em:'😞',lesson:1,
   explain:['Thiếu tinh thần cố gắng, không chủ động, chán nản — tiêu cực. Trái nghĩa: 积极.','Còn chỉ tác dụng xấu, mặt trái: 消极影响 / 消极作用.'],
   usage:'态度消极 (练习 3) / 很消极 / 消极的 + 逃避 / 态度 / 情绪 / 影响; 消极对待.',
   collo:['态度消极','消极的逃避','消极影响','消极情绪'],
   ex_zh:'考试失败了也别太消极，下次再努力吧。',ex_py:'Kǎoshì shībài le yě bié tài xiāojí, xià cì zài nǔlì ba.',ex_vn:'Thi trượt cũng đừng quá tiêu cực, lần sau cố gắng tiếp nhé.',
   exList:[
     {zh:'房间脏了，消极的逃避和不符合实际的幻想都不能解决问题。',py:'Fángjiān zāng le, xiāojí de táobì hé bù fúhé shíjì de huànxiǎng dōu bù néng jiějué wèntí.',vn:'Căn phòng bẩn rồi, trốn tránh tiêu cực và ảo tưởng phi thực tế đều không giải quyết được vấn đề.'},
     {zh:'考试失败了也别太消极，下次再努力吧。',py:'Kǎoshì shībài le yě bié tài xiāojí, xià cì zài nǔlì ba.',vn:'Thi trượt cũng đừng quá tiêu cực, lần sau cố gắng tiếp nhé.'},
     {zh:'玩手机时间太长，会对学习产生消极影响。',py:'Wán shǒujī shíjiān tài cháng, huì duì xuéxí chǎnshēng xiāojí yǐngxiǎng.',vn:'Chơi điện thoại quá lâu sẽ gây ảnh hưởng tiêu cực đến việc học.'}
   ],
   colloFull:[
     {zh:'态度消极',py:'tàidu xiāojí',vn:'thái độ tiêu cực'},
     {zh:'消极的逃避',py:'xiāojí de táobì',vn:'trốn tránh tiêu cực'},
     {zh:'消极影响',py:'xiāojí yǐngxiǎng',vn:'ảnh hưởng tiêu cực'},
     {zh:'消极情绪',py:'xiāojí qíngxù',vn:'cảm xúc tiêu cực'},
     {zh:'消极对待',py:'xiāojí duìdài',vn:'đối phó một cách tiêu cực'}
   ],
   patterns:[
     {s:'消极 ↔ 积极',m:'tiêu cực ↔ tích cực'},
     {s:'对……产生消极影响',m:'gây ảnh hưởng tiêu cực đến …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy càng nghĩ càng tiêu cực.',answer:'他越想越消极。',answerPy:'Tā yuè xiǎng yuè xiāojí.',
      note:'越 + V + 越 + tính từ: càng … càng ….',pair:'越……越……'},
     {promptLang:'vi',prompt:'Dù gặp khó khăn gì, chúng ta cũng không nên đối phó một cách tiêu cực.',answer:'不管遇到什么困难，我们都不应该消极对待。',answerPy:'Bùguǎn yùdào shénme kùnnan, wǒmen dōu bù yīnggāi xiāojí duìdài.',
      note:'不管 + đại từ nghi vấn (什么) + ……，都……',pair:'不管……都……'}
   ]},

  {n:36,zh:'幻想',py:'huànxiǎng',pos:'Danh từ',vn:'ảo tưởng, mơ tưởng',hv:'ảo tưởng',em:'💭',lesson:1,
   explain:['Danh từ: ý nghĩ tưởng tượng xa rời thực tế, khó thành hiện thực — ảo tưởng, mộng tưởng.','Còn là động từ “mơ tưởng”: 他常幻想着自己有一天能成为导演 (练习 1). Sắc thái nhẹ hơn tiếng Việt “ảo tưởng”, có thể là ước mơ đẹp.'],
   usage:'不符合实际的幻想 / 抱幻想 / 放弃幻想 (练习 3) / 幻想破灭; 幻想着 + 自己…….',
   collo:['放弃幻想','不符合实际的幻想','抱什么幻想','幻想着'],
   ex_zh:'我劝你死了这条心吧，别再抱什么幻想了。',ex_py:'Wǒ quàn nǐ sǐle zhè tiáo xīn ba, bié zài bào shénme huànxiǎng le.',ex_vn:'Tôi khuyên cậu dứt khoát đi, đừng ôm ảo tưởng gì nữa.',
   exList:[
     {zh:'消极的逃避和不符合实际的幻想都不能解决问题。',py:'Xiāojí de táobì hé bù fúhé shíjì de huànxiǎng dōu bù néng jiějué wèntí.',vn:'Trốn tránh tiêu cực và ảo tưởng phi thực tế đều không giải quyết được vấn đề.'},
     {zh:'小时候，他常幻想着自己有一天也能成为一名导演。',py:'Xiǎoshíhou, tā cháng huànxiǎng zhe zìjǐ yǒu yì tiān yě néng chéngwéi yì míng dǎoyǎn.',vn:'Hồi nhỏ, cậu ấy thường mơ tưởng một ngày nào đó mình cũng trở thành đạo diễn.'},
     {zh:'我劝你死了这条心吧，别再抱什么幻想了。',py:'Wǒ quàn nǐ sǐle zhè tiáo xīn ba, bié zài bào shénme huànxiǎng le.',vn:'Tôi khuyên cậu dứt khoát đi, đừng ôm ảo tưởng gì nữa.'}
   ],
   colloFull:[
     {zh:'放弃幻想',py:'fàngqì huànxiǎng',vn:'từ bỏ ảo tưởng'},
     {zh:'不符合实际的幻想',py:'bù fúhé shíjì de huànxiǎng',vn:'ảo tưởng phi thực tế'},
     {zh:'抱什么幻想',py:'bào shénme huànxiǎng',vn:'ôm ảo tưởng gì'},
     {zh:'幻想着',py:'huànxiǎng zhe',vn:'đang mơ tưởng'},
     {zh:'幻想破灭',py:'huànxiǎng pòmiè',vn:'ảo tưởng tan vỡ'}
   ],
   patterns:[
     {s:'放弃 / 抱 + 幻想',m:'từ bỏ / ôm ấp ảo tưởng'},
     {s:'S + 幻想着 + 自己……',m:'… mơ tưởng mình …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hồi nhỏ, em thường mơ tưởng mình biết bay.',answer:'小时候，我常常幻想着自己会飞。',answerPy:'Xiǎoshíhou, wǒ chángcháng huànxiǎng zhe zìjǐ huì fēi.',
      note:'V + 着: trạng thái kéo dài; 幻想 dùng như động từ.',pair:'V + 着'},
     {promptLang:'vi',prompt:'Chỉ có từ bỏ ảo tưởng, chăm chỉ học hành thì mới thi đỗ được.',answer:'只有放弃幻想，努力学习，才能考上。',answerPy:'Zhǐyǒu fàngqì huànxiǎng, nǔlì xuéxí, cái néng kǎoshang.',
      note:'只有……才……: điều kiện duy nhất; 放弃幻想 (练习 3).',pair:'只有……才……'}
   ]},

  {n:37,zh:'贡献',py:'gòngxiàn',pos:'Danh từ / Động từ',vn:'sự đóng góp; cống hiến',hv:'cống hiến',em:'🎁',lesson:1,
   explain:['Danh từ: sự đóng góp, công lao — 做出贡献 / 有贡献 / 很大的贡献.','Động từ: cống hiến sức lực, của cải, tri thức cho tập thể, đất nước — 贡献力量 (练习 3) / 贡献自己的一生.'],
   usage:'做出 + 贡献; 对……有(很大的)贡献; 为……做贡献; 贡献 + 力量 / 青春 / 一生; 把……贡献给…….',
   collo:['做出贡献','贡献力量','对……有贡献','为……做贡献'],
   ex_zh:'咱们也为绿色出行做点儿贡献吧。',ex_py:'Zánmen yě wèi lǜsè chūxíng zuò diǎnr gòngxiàn ba.',ex_vn:'Chúng ta cũng góp một phần cho việc đi lại xanh đi.',
   exList:[
     {zh:'为保持它的卫生每一个人都应付出行动，做出贡献。',py:'Wèi bǎochí tā de wèishēng měi yí ge rén dōu yīng fùchū xíngdòng, zuòchū gòngxiàn.',vn:'Để giữ nó sạch sẽ, mỗi người đều nên hành động, đóng góp phần mình.'},
     {zh:'咱们也为绿色出行做点儿贡献吧。',py:'Zánmen yě wèi lǜsè chūxíng zuò diǎnr gòngxiàn ba.',vn:'Chúng ta cũng góp một phần cho việc đi lại xanh đi.'},
     {zh:'他把一生都贡献给了教育事业。',py:'Tā bǎ yìshēng dōu gòngxiàn gěile jiàoyù shìyè.',vn:'Ông ấy đã cống hiến cả đời cho sự nghiệp giáo dục.'}
   ],
   colloFull:[
     {zh:'做出贡献',py:'zuòchū gòngxiàn',vn:'có đóng góp'},
     {zh:'贡献力量',py:'gòngxiàn lìliang',vn:'góp sức'},
     {zh:'对……有贡献',py:'duì……yǒu gòngxiàn',vn:'có đóng góp cho …'},
     {zh:'为……做贡献',py:'wèi……zuò gòngxiàn',vn:'đóng góp cho …'},
     {zh:'很大的贡献',py:'hěn dà de gòngxiàn',vn:'đóng góp to lớn'}
   ],
   patterns:[
     {s:'为 + N + 做出贡献',m:'đóng góp cho …'},
     {s:'把 + … + 贡献给 + N',m:'cống hiến … cho …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông đã cống hiến cả tuổi trẻ cho đất nước.',answer:'爷爷把青春贡献给了国家。',answerPy:'Yéye bǎ qīngchūn gòngxiàn gěile guójiā.',
      note:'把 + tân ngữ + 贡献给了 + đối tượng.',pair:'把'},
     {promptLang:'vi',prompt:'Tuy việc tôi làm rất nhỏ nhưng cũng là một chút đóng góp cho môi trường.',answer:'虽然我做的事很小，但也是对环境的一点儿贡献。',answerPy:'Suīrán wǒ zuò de shì hěn xiǎo, dàn yě shì duì huánjìng de yìdiǎnr gòngxiàn.',
      note:'虽然……但……; 对……的贡献 = đóng góp cho ….',pair:'虽然……但是……'}
   ]},

  {n:38,zh:'命运',py:'mìngyùn',pos:'Danh từ',vn:'số phận, vận mệnh',hv:'mệnh vận',em:'🧭',lesson:1,
   explain:['Toàn bộ những gì xảy đến với một người, một dân tộc, loài người — số phận, vận mệnh.','Bài khoá nhấn mạnh: 命运由我们自己掌握 — số phận do chính ta nắm giữ, không phải trời định.'],
   usage:'改变命运 (练习 3) / 掌握命运 / 人类的命运 / 命运由……掌握 / 命运不好.',
   collo:['改变命运','掌握命运','人类的命运','命运由自己掌握'],
   ex_zh:'很多人相信，读书可以改变命运。',ex_py:'Hěn duō rén xiāngxìn, dú shū kěyǐ gǎibiàn mìngyùn.',ex_vn:'Nhiều người tin rằng học hành có thể thay đổi số phận.',
   exList:[
     {zh:'人类的命运由我们自己掌握，改变要靠我们自己。',py:'Rénlèi de mìngyùn yóu wǒmen zìjǐ zhǎngwò, gǎibiàn yào kào wǒmen zìjǐ.',vn:'Vận mệnh loài người do chính chúng ta nắm giữ, thay đổi phải dựa vào chính chúng ta.'},
     {zh:'很多人相信，读书可以改变命运。',py:'Hěn duō rén xiāngxìn, dú shū kěyǐ gǎibiàn mìngyùn.',vn:'Nhiều người tin rằng học hành có thể thay đổi số phận.'},
     {zh:'这部小说讲的是一个普通女孩的命运。',py:'Zhè bù xiǎoshuō jiǎng de shì yí ge pǔtōng nǚhái de mìngyùn.',vn:'Cuốn tiểu thuyết này kể về số phận của một cô gái bình thường.'}
   ],
   colloFull:[
     {zh:'改变命运',py:'gǎibiàn mìngyùn',vn:'thay đổi số phận'},
     {zh:'掌握命运',py:'zhǎngwò mìngyùn',vn:'nắm giữ vận mệnh'},
     {zh:'人类的命运',py:'rénlèi de mìngyùn',vn:'vận mệnh loài người'},
     {zh:'命运由自己掌握',py:'mìngyùn yóu zìjǐ zhǎngwò',vn:'số phận do mình nắm giữ'},
     {zh:'命运不好',py:'mìngyùn bù hǎo',vn:'số phận hẩm hiu'}
   ],
   patterns:[
     {s:'改变 / 掌握 + 命运',m:'thay đổi / nắm giữ số phận'},
     {s:'命运 + 由 + người + 掌握',m:'số phận do … nắm giữ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ có dựa vào chính mình mới có thể thay đổi số phận.',answer:'只有靠自己，才能改变命运。',answerPy:'Zhǐyǒu kào zìjǐ, cái néng gǎibiàn mìngyùn.',
      note:'只有……才……; 靠 (bài 1) = dựa vào.',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Số phận của anh ấy đã bị một trận lũ làm thay đổi.',answer:'他的命运被一场洪水改变了。',answerPy:'Tā de mìngyùn bèi yì cháng hóngshuǐ gǎibiàn le.',
      note:'被 + tác nhân + V + 了; ôn 洪水 của bài.',pair:'被'}
   ]},

  {n:39,zh:'掌握',py:'zhǎngwò',pos:'Động từ',vn:'nắm chắc, nắm vững, nắm giữ',hv:'chưởng ác',em:'🧠',lesson:1,
   explain:['Hiểu rõ và vận dụng thành thạo (kiến thức, kỹ năng) — nắm vững: 掌握技术 / 掌握一门语言.','Nắm quyền chủ động, kiểm soát: 掌握命运 / 掌握情况 (bảng 搭配). Phân biệt với 把握 (练习 2): 把握 còn là danh từ “sự chắc chắn” — 没把握.'],
   usage:'掌握 + 规律 / 方法 / 情况 / 信息 / 特点 / 命运 / 技术 / 知识 / 语言 (bảng 搭配); 熟练地掌握; 由……掌握.',
   collo:['掌握方法','掌握技术','掌握知识','掌握命运'],
   ex_zh:'学外语最重要的是掌握正确的学习方法。',ex_py:'Xué wàiyǔ zuì zhòngyào de shì zhǎngwò zhèngquè de xuéxí fāngfǎ.',ex_vn:'Học ngoại ngữ, quan trọng nhất là nắm được phương pháp học đúng.',
   exList:[
     {zh:'人类的命运由我们自己掌握。',py:'Rénlèi de mìngyùn yóu wǒmen zìjǐ zhǎngwò.',vn:'Vận mệnh loài người do chính chúng ta nắm giữ.'},
     {zh:'学外语最重要的是掌握正确的学习方法。',py:'Xué wàiyǔ zuì zhòngyào de shì zhǎngwò zhèngquè de xuéxí fāngfǎ.',vn:'Học ngoại ngữ, quan trọng nhất là nắm được phương pháp học đúng.'},
     {zh:'他熟练地掌握了三门外语。',py:'Tā shúliàn de zhǎngwòle sān mén wàiyǔ.',vn:'Anh ấy thành thạo ba ngoại ngữ.'}
   ],
   colloFull:[
     {zh:'掌握方法',py:'zhǎngwò fāngfǎ',vn:'nắm vững phương pháp'},
     {zh:'掌握技术',py:'zhǎngwò jìshù',vn:'nắm vững kỹ thuật'},
     {zh:'掌握知识',py:'zhǎngwò zhīshi',vn:'nắm vững kiến thức'},
     {zh:'掌握命运',py:'zhǎngwò mìngyùn',vn:'nắm giữ vận mệnh'},
     {zh:'掌握情况',py:'zhǎngwò qíngkuàng',vn:'nắm tình hình'}
   ],
   patterns:[
     {s:'掌握 + 知识 / 技术 / 方法 / 语言',m:'nắm vững …'},
     {s:'熟练地掌握 + N',m:'nắm vững … một cách thành thạo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ cần nắm được phương pháp thì học tiếng Trung sẽ không khó.',answer:'只要掌握了方法，学汉语就不难。',answerPy:'Zhǐyào zhǎngwòle fāngfǎ, xué Hànyǔ jiù bù nán.',
      note:'只要……就……; 掌握 + 方法.',pair:'只要……就……'},
     {promptLang:'vi',prompt:'Tôi vẫn chưa nắm vững những từ mới này.',answer:'我还没把这些生词掌握好。',answerPy:'Wǒ hái méi bǎ zhèxiē shēngcí zhǎngwò hǎo.',
      note:'Phủ định câu 把: 没 đứng TRƯỚC 把.',pair:'把'}
   ]}
];

// ══════════════════════════════════════════
// BÀI KHOÁ — 身边的环保 (737 chữ, tr. 122–124)
// ══════════════════════════════════════════
var dialogData = [
  {
    scene:'课文 · 身边的环保',
    preQuiz:[
      {q:'作者认为地球上的一点儿小污染怎么样？',opts:['没什么关系','会危害动植物和人类自身','只会危害动物'],ans:1},
      {q:'动植物消失的更大的原因是什么？',opts:['洪水、地震','自然界的变化','人类对自然的破坏'],ans:2},
      {q:'有些地区的森林怎么了？',opts:['几乎被人砍光了','变成了草原','被洪水冲走了'],ans:0},
      {q:'很多河流被污染以后，怎么样了？',opts:['变成了沙漠','不再适合鱼类生存','水越来越多了'],ans:1},
      {q:'根据国际环保组织公布的数据，地球上有多少动植物正在消失？',opts:['17%','一小部分','一半以上'],ans:2},
      {q:'目前世界上有百分之多少的人无法享用干净的饮用水？',opts:['17%','50%','70%'],ans:0},
      {q:'每年死于与空气污染有关的疾病的人怎么样？',opts:['比死于车祸的少','比死于车祸的还要多','和死于车祸的一样多'],ans:1},
      {q:'有的工厂大量燃烧煤炭，会产生什么？',opts:['可再生能源','干净的饮用水','大量废气和废物'],ans:2},
      {q:'和我们日常生活密切相关的污染，课文举了什么例子？',opts:['汽车尾气','工厂废水','洪水'],ans:0},
      {q:'在日常生活中，人们可以怎么做？',opts:['多使用私家车','尽量减少生活垃圾，做到垃圾分类','调整能源消费结构'],ans:1},
      {q:'作者认为我们应该把地球看作什么？',opts:['一个公园','一辆公共汽车','一个属于自己的大房间'],ans:2},
      {q:'作者认为人类的命运由谁掌握？',opts:['我们自己','科学家','国际环保组织'],ans:0}
    ],
    lines:[
      {
        sp:0,
        zh:'如果你觉得地球上的一点儿小污染没什么关系，那你可就大错特错了！环境污染会危害动物、植物以及人类自身。',
        py:'Rúguǒ nǐ juéde dìqiú shang de yìdiǎnr xiǎo wūrǎn méi shénme guānxi, nà nǐ kě jiù dàcuò-tècuò le! Huánjìng wūrǎn huì wēihài dòngwù, zhíwù yǐjí rénlèi zìshēn.',
        vn:'Nếu bạn cho rằng một chút ô nhiễm nhỏ trên Trái Đất chẳng sao cả, thì bạn đã sai hoàn toàn rồi! Ô nhiễm môi trường sẽ gây hại cho động vật, thực vật và cả chính loài người.'
      },
      {
        sp:0,
        zh:'有些生活在过去的动物，你今天再也看不到了，植物也面临着同样的危险。动植物的消失，部分原因是由于自然界的变化，比如洪水、地震等改变了它们生活的环境，但更大的原因则是人类对自然的破坏——有些地区的森林已经几乎被人砍光了，很多河流被污染，不再适合鱼类生存，有的地区原本是草原，如今已变为沙漠……从国际环保组织公布的数据可知，地球上一半以上的动植物正在消失，这是真实的情况，一点儿也不夸张。',
        py:'Yǒuxiē shēnghuó zài guòqù de dòngwù, nǐ jīntiān zài yě kàn bu dào le, zhíwù yě miànlínzhe tóngyàng de wēixiǎn. Dòng-zhíwù de xiāoshī, bùfen yuányīn shì yóuyú zìránjiè de biànhuà, bǐrú hóngshuǐ, dìzhèn děng gǎibiànle tāmen shēnghuó de huánjìng, dàn gèng dà de yuányīn zé shì rénlèi duì zìrán de pòhuài —— yǒuxiē dìqū de sēnlín yǐjīng jīhū bèi rén kǎnguāng le, hěn duō héliú bèi wūrǎn, bú zài shìhé yúlèi shēngcún, yǒude dìqū yuánběn shì cǎoyuán, rújīn yǐ biànwéi shāmò…… Cóng guójì huánbǎo zǔzhī gōngbù de shùjù kě zhī, dìqiú shang yíbàn yǐshàng de dòng-zhíwù zhèngzài xiāoshī, zhè shì zhēnshí de qíngkuàng, yìdiǎnr yě bù kuāzhāng.',
        vn:'Có những loài động vật từng sống trong quá khứ mà hôm nay bạn không bao giờ còn thấy được nữa, thực vật cũng đang đối mặt với nguy cơ tương tự. Sự biến mất của động thực vật, một phần là do những thay đổi của giới tự nhiên, ví dụ lũ lụt, động đất… đã làm thay đổi môi trường sống của chúng, nhưng nguyên nhân lớn hơn lại là sự tàn phá thiên nhiên của con người — rừng ở một số khu vực gần như đã bị đốn sạch, nhiều dòng sông bị ô nhiễm, không còn thích hợp cho loài cá sinh sống, có những vùng vốn là đồng cỏ nay đã biến thành sa mạc… Từ số liệu do các tổ chức bảo vệ môi trường quốc tế công bố có thể biết, hơn một nửa số động thực vật trên Trái Đất đang biến mất; đây là tình hình có thật, không phóng đại chút nào.'
      },
      {
        sp:0,
        zh:'人类自身也饱受污染的危害。有些地区地表水已污染，地下水又被过量使用，水资源短缺问题就连科学家们也不知道该如何解决，目前世界上有17%的人无法享用干净的饮用水，而每年死于与空气污染有关的疾病的人比死于车祸的还要多。这些数据确实令人不安。',
        py:'Rénlèi zìshēn yě bǎoshòu wūrǎn de wēihài. Yǒuxiē dìqū dìbiǎoshuǐ yǐ wūrǎn, dìxiàshuǐ yòu bèi guòliàng shǐyòng, shuǐ zīyuán duǎnquē wèntí jiù lián kēxuéjiāmen yě bù zhīdào gāi rúhé jiějué, mùqián shìjiè shang yǒu bǎi fēn zhī shíqī de rén wúfǎ xiǎngyòng gānjìng de yǐnyòngshuǐ, ér měi nián sǐ yú yǔ kōngqì wūrǎn yǒuguān de jíbìng de rén bǐ sǐ yú chēhuò de hái yào duō. Zhèxiē shùjù quèshí lìng rén bù\'ān.',
        vn:'Bản thân loài người cũng chịu đủ tác hại của ô nhiễm. Ở một số khu vực, nước mặt đã bị ô nhiễm, nước ngầm lại bị khai thác quá mức; vấn đề thiếu hụt tài nguyên nước thì ngay cả các nhà khoa học cũng không biết nên giải quyết thế nào. Hiện nay trên thế giới có 17% dân số không được dùng nước uống sạch, còn số người chết mỗi năm vì các bệnh liên quan đến ô nhiễm không khí còn nhiều hơn số người chết vì tai nạn giao thông. Những số liệu này thật sự khiến người ta lo lắng.'
      },
      {
        sp:0,
        zh:'一部分环境污染是由工业农业生产活动造成的，例如，大型工厂生产过程中，有的会产生大量废水；有的要大量燃烧煤炭，从而产生大量废气和废物。还有一部分污染和我们的日常生活密切相关，汽车尾气就是其中之一。此外，垃圾也会对环境造成严重的损害。',
        py:'Yí bùfen huánjìng wūrǎn shì yóu gōngyè nóngyè shēngchǎn huódòng zàochéng de, lìrú, dàxíng gōngchǎng shēngchǎn guòchéng zhōng, yǒude huì chǎnshēng dàliàng fèishuǐ; yǒude yào dàliàng ránshāo méitàn, cóng\'ér chǎnshēng dàliàng fèiqì hé fèiwù. Hái yǒu yí bùfen wūrǎn hé wǒmen de rìcháng shēnghuó mìqiè xiāngguān, qìchē wěiqì jiù shì qízhōng zhī yī. Cǐwài, lājī yě huì duì huánjìng zàochéng yánzhòng de sǔnhài.',
        vn:'Một phần ô nhiễm môi trường là do hoạt động sản xuất công nghiệp, nông nghiệp gây ra; ví dụ, trong quá trình sản xuất của các nhà máy lớn, có nơi thải ra lượng lớn nước thải; có nơi phải đốt một lượng lớn than đá, từ đó sinh ra nhiều khí thải và chất thải. Còn một phần ô nhiễm có liên quan mật thiết đến sinh hoạt hằng ngày của chúng ta, khí thải ô tô chính là một trong số đó. Ngoài ra, rác thải cũng gây tổn hại nghiêm trọng cho môi trường.'
      },
      {
        sp:0,
        zh:'幸运的是，越来越多的人敏感地认识到了环境问题的严重，并自觉地投入到了保护地球的行动中。生产中，增加环保设施，减少污染物排放，调整能源消费结构，逐步向可再生能源转变；而在日常生活中，改变生活习惯，尽量减少生活垃圾，做到垃圾分类。同时，尽量多骑自行车，多选择公共交通，少使用私家车。这些为此付出努力的人们令人尊敬，取得的成绩也令人鼓舞。',
        py:'Xìngyùn de shì, yuè lái yuè duō de rén mǐngǎn de rènshi dàole huánjìng wèntí de yánzhòng, bìng zìjué de tóurù dàole bǎohù dìqiú de xíngdòng zhōng. Shēngchǎn zhōng, zēngjiā huánbǎo shèshī, jiǎnshǎo wūrǎnwù páifàng, tiáozhěng néngyuán xiāofèi jiégòu, zhúbù xiàng kě zàishēng néngyuán zhuǎnbiàn; ér zài rìcháng shēnghuó zhōng, gǎibiàn shēnghuó xíguàn, jǐnliàng jiǎnshǎo shēnghuó lājī, zuòdào lājī fēnlèi. Tóngshí, jǐnliàng duō qí zìxíngchē, duō xuǎnzé gōnggòng jiāotōng, shǎo shǐyòng sījiāchē. Zhèxiē wèi cǐ fùchū nǔlì de rénmen lìng rén zūnjìng, qǔdé de chéngjì yě lìng rén gǔwǔ.',
        vn:'Điều may mắn là ngày càng nhiều người nhạy bén nhận ra sự nghiêm trọng của vấn đề môi trường, và tự giác tham gia vào hành động bảo vệ Trái Đất. Trong sản xuất thì tăng thêm công trình bảo vệ môi trường, giảm xả thải chất ô nhiễm, điều chỉnh cơ cấu tiêu thụ năng lượng, từng bước chuyển sang năng lượng tái tạo; còn trong đời sống hằng ngày thì thay đổi thói quen sinh hoạt, cố gắng giảm rác sinh hoạt, thực hiện phân loại rác. Đồng thời, cố gắng đi xe đạp nhiều hơn, chọn phương tiện công cộng nhiều hơn, dùng xe riêng ít đi. Những người bỏ công sức vì việc này thật đáng kính trọng, thành quả đạt được cũng thật đáng phấn khởi.'
      },
      {
        sp:0,
        zh:'地球是人类共同的家园，我们应该把它看作一个属于自己的大房间。房间脏了，消极的逃避和不符合实际的幻想都不能解决问题，为保持它的卫生每一个人都应付出行动，做出贡献。人类的命运由我们自己掌握，改变要靠我们自己。',
        py:'Dìqiú shì rénlèi gòngtóng de jiāyuán, wǒmen yīnggāi bǎ tā kànzuò yí ge shǔyú zìjǐ de dà fángjiān. Fángjiān zāng le, xiāojí de táobì hé bù fúhé shíjì de huànxiǎng dōu bù néng jiějué wèntí, wèi bǎochí tā de wèishēng měi yí ge rén dōu yīng fùchū xíngdòng, zuòchū gòngxiàn. Rénlèi de mìngyùn yóu wǒmen zìjǐ zhǎngwò, gǎibiàn yào kào wǒmen zìjǐ.',
        vn:'Trái Đất là mái nhà chung của loài người, chúng ta nên coi nó như một căn phòng lớn thuộc về chính mình. Căn phòng bẩn rồi, trốn tránh tiêu cực và ảo tưởng phi thực tế đều không giải quyết được vấn đề; để giữ nó sạch sẽ, mỗi người đều phải hành động, đóng góp phần mình. Vận mệnh loài người do chính chúng ta nắm giữ, thay đổi phải dựa vào chính chúng ta.'
      }
    ]
  }
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ — 鼓励/鼓舞 là cặp 词语辨析 của sách (tr. 126–127) + 2 cặp tự thêm
// ══════════════════════════════════════════
var synonymData = [
  {
    pair:'鼓励 — 鼓舞',
    same:'Đều là động từ, đều có nghĩa làm cho người ta phấn chấn, tăng thêm lòng tin — khích lệ, cổ vũ.',
    sameEx:{zh:'这次谈话，使刘洋受到极大的鼓励／鼓舞。',vn:'Cuộc nói chuyện lần này đã khích lệ Lưu Dương rất nhiều.'},
    items:[
      {
        word:'鼓励',
        points:[
          'Từ TRUNG TÍNH — dùng được cả cho việc xấu: 你怎么还鼓励他（吸烟）呢？',
          'Nhấn mạnh THÚC ĐẨY đối phương làm một việc gì; chủ ngữ thường là người hoặc tổ chức. Hay dùng dạng kiêm ngữ: 鼓励 + người + làm gì.',
          'Không có cách dùng như tính từ (✗令人十分鼓励).'
        ],
        ex:[
          {zh:'近些年，国家越来越鼓励大学生毕业后开办自己的公司。',vn:'Những năm gần đây, nhà nước ngày càng khuyến khích sinh viên sau khi tốt nghiệp mở công ty riêng.'},
          {zh:'吸烟有害健康，你不阻止他，怎么还鼓励呢？',vn:'Hút thuốc có hại cho sức khoẻ, cậu không ngăn cậu ấy lại, sao còn khuyến khích?'}
        ]
      },
      {
        word:'鼓舞',
        points:[
          'Từ mang nghĩa TỐT (褒义词).',
          'Nhấn mạnh việc CHỊU ẢNH HƯỞNG của điều gì mà tinh thần phấn chấn; chủ ngữ thường là SỰ VẬT, SỰ VIỆC (thắng lợi, thành tích, tin tốt).',
          'Còn là TÍNH TỪ: phấn khởi, phấn chấn — 令人十分鼓舞 / 挺受鼓舞的.'
        ],
        ex:[
          {zh:'新的胜利给了全体队员很大的鼓舞。',vn:'Chiến thắng mới đã cổ vũ rất lớn cho toàn đội.'},
          {zh:'年初制定的目标顺利实现，取得的成绩令人十分鼓舞。',vn:'Mục tiêu đặt ra đầu năm đã hoàn thành thuận lợi, thành tích đạt được thật khiến người ta phấn khởi.'}
        ]
      }
    ],
    quiz:[
      {sentence:'父母平时应＿＿孩子多参加体育活动。',options:['鼓励','鼓舞'],answer:0,why:'Người (bố mẹ) thúc đẩy con làm một việc → dạng kiêm ngữ 鼓励 + người + làm gì.'},
      {sentence:'听了他们的发言，我挺受＿＿的，对他们很有信心。',options:['鼓励','鼓舞'],answer:1,why:'Chịu ảnh hưởng mà phấn chấn, dùng như tính từ sau 挺受……的 → 鼓舞.'},
      {sentence:'吸烟有害健康，你不阻止他，怎么还＿＿呢？',options:['鼓励','鼓舞'],answer:0,why:'Việc XẤU (hút thuốc) → chỉ dùng từ trung tính 鼓励; 鼓舞 là từ nghĩa tốt.'},
      {sentence:'年初制定的目标顺利实现，取得的成绩令人十分＿＿。',options:['鼓励','鼓舞'],answer:1,why:'Làm tính từ sau 令人十分 → chỉ 鼓舞 có cách dùng này.'}
    ],
    sgk:{
      chung:{t:'都是动词，都有使人振作、增强信心的意思。',vn:'Đều là động từ, đều có nghĩa làm cho người ta phấn chấn, tăng thêm lòng tin.',vd:'这次谈话，使刘洋受到极大的鼓励／鼓舞。',vdVn:'Cuộc nói chuyện lần này đã khích lệ Lưu Dương rất nhiều.'},
      khac:[
        {
          a:{t:'中性词，可用在坏的方面。',vn:'Từ trung tính, có thể dùng cho mặt xấu.',vd:'吸烟有害健康，你不阻止他，怎么还鼓励呢？',vdVn:'Hút thuốc có hại cho sức khoẻ, cậu không ngăn cậu ấy lại, sao còn khuyến khích?'},
          b:{t:'褒义词。',vn:'Từ mang nghĩa tốt (nghĩa khen).',vd:'新产品的研制成功极大地鼓舞了科技人员。',vdVn:'Việc nghiên cứu chế tạo thành công sản phẩm mới đã cổ vũ rất lớn cho các nhân viên khoa học kỹ thuật.'}
        },
        {
          a:{t:'语义侧重激励对方从事某种活动，主语多是人或组织。常用“鼓励某人做某事”的兼语形式。',vn:'Nghĩa nhấn mạnh thúc đẩy đối phương làm một hoạt động nào đó, chủ ngữ phần lớn là người hoặc tổ chức. Thường dùng dạng câu kiêm ngữ “鼓励某人做某事”.',vd:'近些年，国家越来越鼓励大学生毕业后开办自己的公司。',vdVn:'Những năm gần đây, nhà nước ngày càng khuyến khích sinh viên sau khi tốt nghiệp mở công ty riêng.'},
          b:{t:'语义侧重受到某种影响而精神振奋，主语多是事物。',vn:'Nghĩa nhấn mạnh chịu một ảnh hưởng nào đó mà tinh thần phấn chấn, chủ ngữ phần lớn là sự vật.',vd:'新的胜利给了全体队员很大的鼓舞。',vdVn:'Chiến thắng mới đã cổ vũ rất lớn cho toàn đội.'}
        },
        {
          a:{t:'没有这个意思和用法。',vn:'Không có nghĩa và cách dùng này.'},
          b:{t:'还是形容词，形容兴奋、振作。',vn:'Còn là tính từ, tả sự hưng phấn, phấn chấn.',vd:'年初制定的目标顺利实现，取得的成绩令人十分鼓舞。',vdVn:'Mục tiêu đặt ra đầu năm đã hoàn thành thuận lợi, thành tích đạt được thật khiến người ta phấn khởi.'}
        }
      ],
      lamThu:[
        {s:'父母平时应＿＿孩子多参加体育活动。',dap:[true,false],mau:true,giai:'Bố mẹ thúc đẩy con làm việc → 鼓励 + người + làm gì.'},
        {s:'在工作中，管理者多＿＿员工，会提高员工的工作积极性。',dap:[true,false],giai:'Chủ ngữ là người (管理者), tác động trực tiếp tới nhân viên để họ làm việc tích cực hơn → 鼓励.'},
        {s:'听了他们的发言，我挺受＿＿的，对他们很有信心。',dap:[false,true],giai:'Tinh thần phấn chấn do chịu ảnh hưởng của bài phát biểu; 挺受……的 cần nghĩa tính từ → 鼓舞.'},
        {s:'感谢大家对我的肯定与＿＿。',dap:[true,false],giai:'Chủ thể là “mọi người” khuyến khích tôi tiếp tục cố gắng; 肯定与鼓励 là cụm quen dùng → 鼓励.'}
      ]
    }
  },
  {
    pair:'逐步 — 逐渐',
    same:'Đều là phó từ, đều có nghĩa “dần dần”, đứng trước động từ để chỉ sự thay đổi từ từ.',
    sameEx:{zh:'受灾群众已逐步／逐渐恢复了正常的生活。',vn:'Người dân vùng bị thiên tai đã dần dần khôi phục cuộc sống bình thường.'},
    items:[
      {
        word:'逐步',
        points:[
          'Nhấn mạnh TỪNG BƯỚC một, có kế hoạch, có trình tự — thường là việc con người chủ động làm.',
          'Hay đi với 扩大 / 完善 / 实现 / 解决 / 转变 / 推广.',
          'Không bổ nghĩa cho tính từ, không dùng cho biến đổi tự nhiên: ✗天气逐步冷了.'
        ],
        ex:[
          {zh:'调整能源消费结构，逐步向可再生能源转变。',vn:'Điều chỉnh cơ cấu tiêu thụ năng lượng, từng bước chuyển sang năng lượng tái tạo.'},
          {zh:'学校打算逐步完善各种体育设施。',vn:'Nhà trường dự định từng bước hoàn thiện các cơ sở thể thao.'}
        ]
      },
      {
        word:'逐渐',
        points:[
          'Nhấn mạnh sự thay đổi CHẬM, TỰ NHIÊN, liên tục — không cần kế hoạch.',
          'Dùng được cho hiện tượng tự nhiên và trước tính từ, động từ tâm lý: 天气逐渐冷了, 逐渐习惯了.',
          'Có thể thêm 地: 逐渐地 (bài 10).'
        ],
        ex:[
          {zh:'秋天到了，天气逐渐冷了起来。',vn:'Mùa thu đến, trời dần dần lạnh lên.'},
          {zh:'来中国半年以后，他逐渐习惯了这里的生活。',vn:'Sang Trung Quốc được nửa năm, cậu ấy dần quen với cuộc sống ở đây.'}
        ]
      }
    ],
    quiz:[
      {sentence:'秋天到了，天气＿＿冷了起来。',options:['逐步','逐渐'],answer:1,why:'Biến đổi tự nhiên, đứng trước tính từ 冷 → chỉ dùng 逐渐.'},
      {sentence:'政府计划用三年时间＿＿解决这个问题。',options:['逐步','逐渐'],answer:0,why:'Có kế hoạch, chia bước rõ ràng (计划用三年) → 逐步.'},
      {sentence:'只要坚持练习，你的口语水平会＿＿提高的。',options:['逐步','逐渐'],answer:0,both:true,why:'Sự tiến bộ vừa là quá trình tự nhiên vừa do cố gắng → cả 逐步 lẫn 逐渐 đều được.'},
      {sentence:'来北京以后，他＿＿适应了这里干燥的天气。',options:['逐步','逐渐'],answer:1,why:'Quen dần một cách tự nhiên với thời tiết, không theo kế hoạch → 逐渐.'}
    ]
  },
  {
    pair:'尊敬 — 尊重',
    same:'Đều là động từ, đều có nghĩa coi trọng người khác, đối xử có lễ độ.',
    sameEx:{zh:'我们应该尊敬／尊重老人。',vn:'Chúng ta nên kính trọng / tôn trọng người già.'},
    items:[
      {
        word:'尊敬',
        points:[
          'KÍNH TRỌNG, kính mến — thường là người dưới đối với người TRÊN (thầy cô, người già, người có công).',
          'Đối tượng chủ yếu là NGƯỜI.',
          'Làm định ngữ trong lời chào trang trọng: 尊敬的各位来宾; hay dùng 令人尊敬 / 值得尊敬.'
        ],
        ex:[
          {zh:'这些为此付出努力的人们令人尊敬。',vn:'Những người đã bỏ công sức vì việc này thật đáng kính trọng.'},
          {zh:'同学们都很尊敬张老师。',vn:'Các bạn học sinh đều rất kính trọng cô Trương.'}
        ]
      },
      {
        word:'尊重',
        points:[
          'TÔN TRỌNG — quan hệ ngang hàng, với bất kỳ ai, không nhất thiết là người trên.',
          'Đối tượng có thể là ý kiến, lựa chọn, sự thật, phong tục, quyền lợi: 尊重你的选择 / 尊重事实 / 尊重当地的风俗.',
          'Hay nói 互相尊重 (tôn trọng lẫn nhau).'
        ],
        ex:[
          {zh:'虽然我不同意你的看法，但我还是尊重你的选择。',vn:'Tuy tôi không đồng ý với quan điểm của bạn, nhưng tôi vẫn tôn trọng lựa chọn của bạn.'},
          {zh:'到了别的国家，要尊重当地的风俗。',vn:'Đến nước khác thì phải tôn trọng phong tục địa phương.'}
        ]
      }
    ],
    quiz:[
      {sentence:'虽然我不同意你的看法，但我还是＿＿你的选择。',options:['尊敬','尊重'],answer:1,why:'Đối tượng là “lựa chọn” (sự việc), không phải người trên → 尊重 (bài tập 2 của sách).'},
      {sentence:'＿＿的各位来宾，大家晚上好！',options:['尊敬','尊重'],answer:0,why:'Lời xưng hô trang trọng đầu bài phát biểu → 尊敬的…….'},
      {sentence:'朋友之间应该互相＿＿。',options:['尊敬','尊重'],answer:1,why:'Quan hệ ngang hàng, 互相尊重 → 尊重.'},
      {sentence:'我们从小就要学会＿＿老人。',options:['尊敬','尊重'],answer:0,both:true,why:'Đối tượng là người già: 尊敬老人 (kính trọng) và 尊重老人 (tôn trọng) đều được.'}
    ]
  }
];

// ══════════════════════════════════════════
// CẦU NỐI HÁN – VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'破坏',hv:'phá hoại',vn:'phá hoại, tàn phá',note:'Trùng khít.'},
    {zh:'生存',hv:'sinh tồn',vn:'sinh tồn',note:'Trùng khít.'},
    {zh:'沙漠',hv:'sa mạc',vn:'sa mạc',note:'Trùng khít.'},
    {zh:'公布',hv:'công bố',vn:'công bố',note:'Trùng khít.'},
    {zh:'真实',hv:'chân thực',vn:'chân thực, có thật',note:'Trùng khít.'},
    {zh:'工业',hv:'công nghiệp',vn:'công nghiệp',note:'Trùng khít.'},
    {zh:'农业',hv:'nông nghiệp',vn:'nông nghiệp',note:'Trùng khít.'},
    {zh:'不安',hv:'bất an',vn:'bất an, lo lắng',note:'Trùng khít.'},
    {zh:'敏感',hv:'mẫn cảm',vn:'nhạy cảm',note:'Tiếng Việt vẫn nói “mẫn cảm” (da mẫn cảm) — cùng nghĩa.'},
    {zh:'自觉',hv:'tự giác',vn:'tự giác',note:'Trùng khít.'},
    {zh:'尊敬',hv:'tôn kính',vn:'kính trọng',note:'Trùng khít.'},
    {zh:'鼓舞',hv:'cổ vũ',vn:'cổ vũ, khích lệ',note:'Trùng khít. Chú ý 鼓舞 nghiêng về “làm phấn chấn”, khác 鼓励 (khuyến khích).'},
    {zh:'消极',hv:'tiêu cực',vn:'tiêu cực',note:'Trùng khít — trái nghĩa 积极 (tích cực).'},
    {zh:'幻想',hv:'ảo tưởng',vn:'ảo tưởng, mơ tưởng',note:'Trùng âm; tiếng Trung nhẹ hơn, có thể là mơ ước đẹp.'},
    {zh:'贡献',hv:'cống hiến',vn:'cống hiến, đóng góp',note:'Trùng khít.'},
    {zh:'地震',hv:'địa chấn',vn:'động đất',note:'Tiếng Việt dùng “địa chấn” trong khoa học (địa chấn học), đời thường nói “động đất”.'},
    {zh:'洪水',hv:'hồng thuỷ',vn:'lũ lụt',note:'Như “nạn đại hồng thuỷ”.'}
  ],
  idiom:[
    {zh:'大错特错',hv:'đại thác đặc thác',vn:'sai hoàn toàn, sai bét',note:'“Thác” = sai (thác loạn), “đặc” = đặc biệt → sai to, sai đặc biệt.'},
    {zh:'变废为宝',hv:'biến phế vi bảo',vn:'biến đồ bỏ thành của quý',note:'“Phế” = bỏ đi (phế liệu), “bảo” = của quý (bảo vật).'},
    {zh:'其中之一',hv:'kỳ trung chi nhất',vn:'một trong số đó',note:'“Kỳ trung” = trong đó, “chi nhất” = cái một → một trong số.'},
    {zh:'一点一滴',hv:'nhất điểm nhất trích',vn:'từng chút một',note:'“Trích” = giọt (như “trích nhỏ giọt”) → từng chút từng giọt (背景分析 của sách).'}
  ],
  trap:[
    {zh:'资源',hv:'tư nguyên',vn:'tài nguyên',warn:'BẪY: 资 đọc “tư” (tư bản), không phải “tài” (财). Tiếng Việt nói “tài nguyên”, đừng đọc thành “tư nguyên”.'},
    {zh:'生产',hv:'sinh sản',vn:'sản xuất',warn:'BẪY lớn: “sinh sản” tiếng Việt là đẻ con, nhân giống (tiếng Trung 繁殖). 生产 thông dụng là SẢN XUẤT: 生产汽车.'},
    {zh:'夸张',hv:'khoa trương',vn:'phóng đại, cường điệu',warn:'Tiếng Việt “khoa trương” = phô trương, khoe mẽ. 夸张 tiếng Trung là PHÓNG ĐẠI, nói quá: 说得太夸张了 = nói quá lên.'},
    {zh:'设施',hv:'thiết thi',vn:'công trình, cơ sở vật chất',warn:'“Thiết thi” không có trong tiếng Việt; đừng nhầm với 设备 (thiết bị — máy móc cụ thể). 基础设施 = cơ sở hạ tầng.'},
    {zh:'能源',hv:'năng nguyên',vn:'nguồn năng lượng',warn:'“Năng lượng” tiếng Trung là 能量; 能源 là NGUỒN năng lượng (than, dầu, gió…).'},
    {zh:'命运',hv:'mệnh vận',vn:'vận mệnh, số phận',warn:'Tiếng Việt ĐẢO trật tự: “vận mệnh”. Viết tiếng Trung phải là 命运, không phải ✗运命.'},
    {zh:'私人',hv:'tư nhân',vn:'riêng, cá nhân',warn:'Tiếng Việt “tư nhân” chủ yếu nói kinh tế (doanh nghiệp tư nhân); 私人 rộng hơn: 私人时间 (thời gian riêng), 私人物品 (đồ cá nhân).'},
    {zh:'掌握',hv:'chưởng ác',vn:'nắm vững, nắm giữ',warn:'“Chưởng ác” không dùng trong tiếng Việt. 掌 = bàn tay (chưởng), 握 = nắm → nắm trong tay: 掌握知识 = nắm vững kiến thức.'},
    {zh:'尽量',hv:'tận lượng',vn:'cố gắng hết mức',warn:'Không liên quan “số lượng”: 尽 = hết (tận), 量 = sức chứa → làm hết mức có thể. Đọc jǐnliàng.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 (tr. 126), bài tập 3 (tr. 128) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'贡献',right:'力量'},
  {left:'放弃',right:'幻想'},
  {left:'改变',right:'命运'},
  {left:'鼓舞',right:'人心'},
  {left:'态度',right:'消极'},
  {left:'话题',right:'敏感'},
  {left:'联系',right:'密切'},
  {left:'心神',right:'不安'},
  {left:'破坏',right:'环境'},
  {left:'掌握',right:'知识'},
  {left:'真实的',right:'原因'},
  {left:'夸张的',right:'动作'},
  {left:'自觉地',right:'遵守'},
  {left:'死于',right:'车祸'},
  {left:'开发',right:'资源'},
  {left:'基础',right:'设施'},
  {left:'燃烧',right:'煤炭'},
  {left:'汽车',right:'尾气'},
  {left:'公布',right:'数据'},
  {left:'大型',right:'工厂'},
  {left:'可再生',right:'能源'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'记录、保存将要',blank:'消失',post:'的事物是摄影非常重要的作用。',hint:'(biến mất)',ans:'消失'},
  {pre:'去年夏天这里发了一场大',blank:'洪水',post:'，很多房子都被冲走了。',hint:'(lũ lụt)',ans:'洪水'},
  {pre:'昨天夜里发生了一次小',blank:'地震',post:'，很多人都被吓醒了。',hint:'(động đất)',ans:'地震'},
  {pre:'乱扔垃圾不但会',blank:'破坏',post:'环境，还会影响城市的形象。',hint:'(phá hoại)',ans:'破坏'},
  {pre:'有些地区的森林已经几乎被人',blank:'砍',post:'光了。',hint:'(chặt, đốn)',ans:'砍'},
  {pre:'很多河流被污染，不再适合鱼类',blank:'生存',post:'。',hint:'(sinh tồn)',ans:'生存'},
  {pre:'有的地区原本是草原，如今已变为',blank:'沙漠',post:'。',hint:'(sa mạc)',ans:'沙漠'},
  {pre:'大赛的作品将被放在网上，由网友打分，比赛结果于四月十五日',blank:'公布',post:'。',hint:'(công bố)',ans:'公布'},
  {pre:'',blank:'数据',post:'显示，今年城市的空气质量有所改善。',hint:'(số liệu)',ans:'数据'},
  {pre:'这部电影是根据一个',blank:'真实',post:'的故事拍的。',hint:'(có thật)',ans:'真实'},
  {pre:'你说他一顿饭吃了十碗米饭？太',blank:'夸张',post:'了吧！',hint:'(phóng đại)',ans:'夸张'},
  {pre:'我们应该节约水',blank:'资源',post:'，洗完手要关好水龙头。',hint:'(tài nguyên)',ans:'资源'},
  {pre:'下雨天路滑，开车要小心，很容易出',blank:'车祸',post:'。',hint:'(tai nạn giao thông)',ans:'车祸'},
  {pre:'接到电话，她感到有些',blank:'不安',post:'，急忙连夜赶回家中。',hint:'(lo lắng, bất an)',ans:'不安'},
  {pre:'这座城市的',blank:'工业',post:'很发达，但空气不太好。',hint:'(công nghiệp)',ans:'工业'},
  {pre:'越南是一个',blank:'农业',post:'大国，大米出口很多。',hint:'(nông nghiệp)',ans:'农业'},
  {pre:'这家工厂每年',blank:'生产',post:'十万辆汽车。',hint:'(sản xuất)',ans:'生产'},
  {pre:'我家附近新开了一家',blank:'大型',post:'超市，东西又多又便宜。',hint:'(cỡ lớn)',ans:'大型'},
  {pre:'他高中毕业以后去了一家',blank:'工厂',post:'工作。',hint:'(nhà máy)',ans:'工厂'},
  {pre:'工厂排放的',blank:'废',post:'水必须处理以后才能排到河里。',hint:'(thải — nước thải)',ans:'废'},
  {pre:'木头',blank:'燃烧',post:'时会产生很多烟。',hint:'(cháy)',ans:'燃烧'},
  {pre:'以前冬天，北方很多家庭都烧',blank:'煤炭',post:'取暖。',hint:'(than đá)',ans:'煤炭'},
  {pre:'还有一部分污染和我们的日常生活',blank:'密切',post:'相关。',hint:'(mật thiết)',ans:'密切'},
  {pre:'城市里的车越来越多，汽车',blank:'尾气',post:'污染也越来越严重。',hint:'(khí thải xe)',ans:'尾气'},
  {pre:'船翻了，他很',blank:'幸运',post:'地抱住一根木头，游到一个小岛上。',hint:'(may mắn)',ans:'幸运'},
  {pre:'家里的老人对空气污染比较',blank:'敏感',post:'，最近最好少出门。',hint:'(nhạy cảm)',ans:'敏感'},
  {pre:'父母不在家，他也能',blank:'自觉',post:'地完成作业。',hint:'(tự giác)',ans:'自觉'},
  {pre:'新学校的体育',blank:'设施',post:'很先进，有游泳馆和网球场。',hint:'(cơ sở vật chất)',ans:'设施'},
  {pre:'为了节约',blank:'能源',post:'，离开教室时要关灯。',hint:'(năng lượng)',ans:'能源'},
  {pre:'云计算应用市场规模正在',blank:'逐步',post:'扩大。',hint:'(từng bước)',ans:'逐步'},
  {pre:'老年人要',blank:'尽量',post:'少吃油炸食品。',hint:'(cố gắng hết mức)',ans:'尽量'},
  {pre:'这是我的',blank:'私人',post:'物品，请不要随便动。',hint:'(cá nhân, riêng)',ans:'私人'},
  {pre:'张老师对每个学生都很好，大家都很',blank:'尊敬',post:'她。',hint:'(kính trọng)',ans:'尊敬'},
  {pre:'谈判的成功给了他极大的',blank:'鼓舞',post:'。',hint:'(cổ vũ)',ans:'鼓舞'},
  {pre:'考试失败了也别太',blank:'消极',post:'，下次再努力吧。',hint:'(tiêu cực)',ans:'消极'},
  {pre:'小时候，他常',blank:'幻想',post:'着自己有一天也能成为一名导演。',hint:'(mơ tưởng)',ans:'幻想'},
  {pre:'咱们也为绿色出行做点儿',blank:'贡献',post:'吧。',hint:'(đóng góp)',ans:'贡献'},
  {pre:'很多人相信，读书可以改变',blank:'命运',post:'。',hint:'(số phận)',ans:'命运'},
  {pre:'学外语最重要的是',blank:'掌握',post:'正确的学习方法。',hint:'(nắm vững)',ans:'掌握'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU
// ══════════════════════════════════════════
var sortData = [
  {words:['刘医生','密切地','观察着','病人的','情况','。'],ans:'刘医生密切地观察着病人的情况。',audio:'刘医生密切地观察着病人的情况。'},
  {words:['两国','之间的','联系','越来越','密切了','。'],ans:'两国之间的联系越来越密切了。',audio:'两国之间的联系越来越密切了。'},
  {words:['老年人','要','尽量','少吃','油炸食品','。'],ans:'老年人要尽量少吃油炸食品。',audio:'老年人要尽量少吃油炸食品。'},
  {words:['我们','应该','尽量','多骑','自行车','。'],ans:'我们应该尽量多骑自行车。',audio:'我们应该尽量多骑自行车。'},
  {words:['为了节约能源','，','请大家','尽量','使用','节能电器','。'],ans:'为了节约能源，请大家尽量使用节能电器。',audio:'为了节约能源，请大家尽量使用节能电器。'},
  {words:['云计算','应用市场','规模','正在','逐步','扩大','。'],ans:'云计算应用市场规模正在逐步扩大。',audio:'云计算应用市场规模正在逐步扩大。'},
  {words:['受灾群众','已','逐步','恢复了','正常的','生活','。'],ans:'受灾群众已逐步恢复了正常的生活。',audio:'受灾群众已逐步恢复了正常的生活。'},
  {words:['我的','汉语水平','正在','逐步','提高','。'],ans:'我的汉语水平正在逐步提高。',audio:'我的汉语水平正在逐步提高。'},
  {words:['有些地区的','森林','已经几乎','被人','砍光了','。'],ans:'有些地区的森林已经几乎被人砍光了。',audio:'有些地区的森林已经几乎被人砍光了。'},
  {words:['这些','数据','确实','令人','不安','。'],ans:'这些数据确实令人不安。',audio:'这些数据确实令人不安。'},
  {words:['幸运的是','，','越来越多的人','认识到了','环境问题的','严重','。'],ans:'幸运的是，越来越多的人认识到了环境问题的严重。',audio:'幸运的是，越来越多的人认识到了环境问题的严重。'},
  {words:['人类的','命运','由我们自己','掌握','。'],ans:'人类的命运由我们自己掌握。',audio:'人类的命运由我们自己掌握。'},
  {words:['我们应该','把地球','看作','一个','属于自己的','大房间','。'],ans:'我们应该把地球看作一个属于自己的大房间。',audio:'我们应该把地球看作一个属于自己的大房间。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {
    wrong:'虽然我不同意你的看法，但我还是____你的选择。',
    opts:['尊敬','尊重','重视','珍惜'],
    ans:1,
    exp:'Đối tượng là “lựa chọn” (sự việc) và quan hệ ngang hàng → 尊重你的选择 (bài tập 2 của sách). 尊敬 dùng cho người trên (thầy cô, người già); 重视 là coi trọng việc gì; 珍惜 là trân trọng, quý (thời gian, cơ hội).'
  },
  {
    wrong:'作品充分地表达了作者内心____的情感。',
    opts:['真实','确实','实在','老实'],
    ans:0,
    exp:'Làm định ngữ: 真实的情感 = tình cảm chân thật (bài tập 2 của sách). 确实 / 实在 chủ yếu là phó từ “quả thật”; 老实 tả tính cách thật thà của người.'
  },
  {
    wrong:'那个城市的基础____还不够完善。',
    opts:['设备','设施','设计','措施'],
    ans:1,
    exp:'基础设施 = cơ sở hạ tầng (bài tập 2 của sách), đi với 完善 (bảng 搭配). 设备 là máy móc cụ thể; 设计 là thiết kế; 措施 (bài 16) là biện pháp — 采取措施.'
  },
  {
    wrong:'这次考试能否通过，我实在没什么____。',
    opts:['掌握','把握','握手','控制'],
    ans:1,
    exp:'没(有)把握 = không chắc chắn — ở đây 把握 là DANH TỪ (bài tập 2 của sách). 掌握 là động từ “nắm vững”, không nói 没什么掌握.'
  },
  {
    wrong:'父母平时应____孩子多参加体育活动。',
    opts:['鼓舞','鼓励','鼓掌','安慰'],
    ans:1,
    exp:'Người thúc đẩy người khác làm việc gì → 鼓励 + người + V (词语辨析 của bài). 鼓舞 chủ ngữ thường là sự việc; 鼓掌 là vỗ tay; 安慰 (bài 8) là an ủi.'
  },
  {
    wrong:'年初制定的目标顺利实现，取得的成绩令人十分____。',
    opts:['鼓励','鼓舞','支持','安慰'],
    ans:1,
    exp:'Dùng như tính từ sau 令人十分 → chỉ 鼓舞 (phấn khởi). 鼓励 / 支持 / 安慰 đều là động từ, không đứng sau 令人十分 theo cách này.'
  },
  {
    wrong:'秋天到了，天气____冷了起来。',
    opts:['逐步','逐渐','尽量','一再'],
    ans:1,
    exp:'Biến đổi TỰ NHIÊN, đứng trước tính từ 冷 → 逐渐 (bài 10). 逐步 dùng cho việc con người làm có kế hoạch; 尽量 là cố gắng; 一再 (bài 13) là hết lần này đến lần khác.'
  },
  {
    wrong:'老年人要____少吃油炸食品。',
    opts:['尽量','尽快','尽管','尽力'],
    ans:0,
    exp:'尽量 + 少 + V = cố gắng … ít đi (điểm ngữ pháp 2). 尽快 là càng nhanh càng tốt; 尽管 là mặc dù; 尽力 là dốc sức (尽力而为), không đi với 少吃.'
  },
  {
    wrong:'还有一部分污染和我们的日常生活____相关。',
    opts:['密切','亲切','亲密','仔细'],
    ans:0,
    exp:'密切相关 = liên quan mật thiết (điểm ngữ pháp 1). 亲切 là thân thiện (thái độ); 亲密 là thân mật (giữa người với người); 仔细 là tỉ mỉ.'
  },
  {
    wrong:'水____短缺问题就连科学家们也不知道该如何解决。',
    opts:['资源','资料','能源','来源'],
    ans:0,
    exp:'水资源 = tài nguyên nước. 资料 (bài 9) là tài liệu; 能源 là nguồn năng lượng; 来源 là nguồn gốc.'
  },
  {
    wrong:'调整____消费结构，逐步向可再生能源转变。',
    opts:['能源','能量','能力','动力'],
    ans:0,
    exp:'能源消费结构 = cơ cấu tiêu thụ năng lượng; vế sau có 可再生能源. 能量 là năng lượng (khái niệm vật lý); 能力 là năng lực; 动力 là động lực.'
  },
  {
    wrong:'船翻了，他很____地抱住一根木头，游到一个小岛上。',
    opts:['幸运','幸福','运气','愉快'],
    ans:0,
    exp:'幸运地 + V = may mắn làm được … (bài tập 1 của sách). 幸福 là hạnh phúc lâu dài; 运气 là danh từ (vận may); 愉快 là vui vẻ.'
  },
  {
    wrong:'比赛结果于四月十五日____。',
    opts:['公布','发表','发现','出版'],
    ans:0,
    exp:'公布结果 = công bố kết quả (bài tập 1 của sách). 发表 dùng cho bài viết, ý kiến (发表文章); 发现 là phát hiện; 出版 (bài 20) là xuất bản sách.'
  },
  {
    wrong:'收入是个____话题，第一次见面最好别问。',
    opts:['敏感','感动','感觉','灵敏'],
    ans:0,
    exp:'敏感话题 = chủ đề nhạy cảm (bài tập 3 của sách). 灵敏 là nhạy (máy móc, giác quan), không nói 灵敏话题; 感动 / 感觉 sai nghĩa.'
  },
  {
    wrong:'大家都应该____地遵守交通规则。',
    opts:['自觉','自然','自由','自信'],
    ans:0,
    exp:'自觉地遵守 = tự giác tuân thủ (bảng 搭配). 自然 là tự nhiên; 自由 (bài 18) là tự do; 自信 là tự tin.'
  },
  {
    wrong:'房间脏了，____的逃避不能解决问题。',
    opts:['消极','积极','消失','消费'],
    ans:0,
    exp:'Trốn tránh là thái độ tiêu cực → 消极的逃避. 积极 ngược nghĩa; 消失 là biến mất; 消费 (bài 8) là tiêu dùng.'
  },
  {
    wrong:'小时候，他常____着自己有一天也能成为一名导演。',
    opts:['幻想','思想','理想','感想'],
    ans:0,
    exp:'幻想 dùng như ĐỘNG TỪ: 幻想着 + điều mơ tưởng (bài tập 1 của sách). 理想 / 思想 / 感想 đều là danh từ, không đi với 着 như thế này.'
  },
  {
    wrong:'每个人都应该为保护环境做出____。',
    opts:['贡献','意义','价值','作用'],
    ans:0,
    exp:'做出贡献 = có đóng góp (bài khoá). Nói 发挥作用 chứ không nói 做出作用; 意义 / 价值 không đi với 做出.'
  },
  {
    wrong:'人类的____由我们自己掌握。',
    opts:['命运','运气','运动','幸运'],
    ans:0,
    exp:'掌握命运 = nắm giữ vận mệnh. 运气 là vận may nhất thời, không “nắm giữ” được; 运动 là thể thao; 幸运 là tính từ.'
  },
  {
    wrong:'他熟练地____了三门外语。',
    opts:['掌握','把握','握住','拿住'],
    ans:0,
    exp:'掌握 + 语言 / 知识 / 技术 (bảng 搭配). 把握 hay đi với 机会 / 时机 / 方向; 握住 / 拿住 là cầm chặt đồ vật.'
  },
  {
    wrong:'一部分环境污染是由工业农业____活动造成的。',
    opts:['生产','生活','产生','出产'],
    ans:0,
    exp:'生产活动 = hoạt động sản xuất. 产生 là “sinh ra” (产生废气), không làm định ngữ cho 活动; 出产 là (vùng đất) sản sinh ra sản vật.'
  },
  {
    wrong:'有的工厂要大量____煤炭，从而产生大量废气。',
    opts:['燃烧','点燃','着火','烧烤'],
    ans:0,
    exp:'大量燃烧煤炭 = đốt lượng lớn than. 点燃 là châm lửa (một lần); 着火 (bài 3) là bốc cháy, không mang tân ngữ; 烧烤 là nướng thịt.'
  },
  {
    wrong:'还有一部分污染和日常生活密切相关，汽车____就是其中之一。',
    opts:['尾气','空气','天气','力气'],
    ans:0,
    exp:'汽车尾气 = khí thải ô tô. 空气 là không khí; 天气 là thời tiết; 力气 là sức lực.'
  }
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Hơn một nửa số động thực vật trên Trái Đất đang biến mất.',zh:'地球上一半以上的动植物正在消失。',py:'Dìqiú shang yíbàn yǐshàng de dòng-zhíwù zhèngzài xiāoshī.'},
  {vi:'Những số liệu này thật sự khiến người ta lo lắng.',zh:'这些数据确实令人不安。',py:'Zhèxiē shùjù quèshí lìng rén bù\'ān.'},
  {vi:'Người già nên cố gắng ăn ít đồ chiên rán.',zh:'老年人要尽量少吃油炸食品。',py:'Lǎoniánrén yào jǐnliàng shǎo chī yóuzhá shípǐn.'},
  {vi:'Ô nhiễm không khí có liên quan mật thiết với khí thải ô tô.',zh:'空气污染和汽车尾气密切相关。',py:'Kōngqì wūrǎn hé qìchē wěiqì mìqiè xiāngguān.'},
  {vi:'Trình độ tiếng Trung của tôi đang từng bước nâng cao.',zh:'我的汉语水平正在逐步提高。',py:'Wǒ de Hànyǔ shuǐpíng zhèngzài zhúbù tígāo.'},
  {vi:'Thành tích đạt được thật khiến người ta phấn khởi.',zh:'取得的成绩令人鼓舞。',py:'Qǔdé de chéngjì lìng rén gǔwǔ.'},
  {vi:'Chúng ta nên tự giác phân loại rác.',zh:'我们应该自觉地进行垃圾分类。',py:'Wǒmen yīnggāi zìjué de jìnxíng lājī fēnlèi.'},
  {vi:'Vận mệnh của chúng ta do chính chúng ta nắm giữ.',zh:'我们的命运由我们自己掌握。',py:'Wǒmen de mìngyùn yóu wǒmen zìjǐ zhǎngwò.'}
];
var translateDataRev = [
  {
    vi:'Nếu bạn cho rằng một chút ô nhiễm nhỏ trên Trái Đất chẳng sao cả, thì bạn đã sai hoàn toàn rồi!',
    zh:'如果你觉得地球上的一点儿小污染没什么关系，那你可就大错特错了！',
    py:'Rúguǒ nǐ juéde dìqiú shang de yìdiǎnr xiǎo wūrǎn méi shénme guānxi, nà nǐ kě jiù dàcuò-tècuò le!'
  },
  {
    vi:'Ô nhiễm môi trường sẽ gây hại cho động vật, thực vật và cả chính loài người.',
    zh:'环境污染会危害动物、植物以及人类自身。',
    py:'Huánjìng wūrǎn huì wēihài dòngwù, zhíwù yǐjí rénlèi zìshēn.'
  },
  {
    vi:'Nhưng nguyên nhân lớn hơn lại là sự tàn phá thiên nhiên của con người.',
    zh:'但更大的原因则是人类对自然的破坏。',
    py:'Dàn gèng dà de yuányīn zé shì rénlèi duì zìrán de pòhuài.'
  },
  {
    vi:'Nhiều dòng sông bị ô nhiễm, không còn thích hợp cho loài cá sinh sống nữa.',
    zh:'很多河流被污染，不再适合鱼类生存。',
    py:'Hěn duō héliú bèi wūrǎn, bú zài shìhé yúlèi shēngcún.'
  },
  {
    vi:'Một phần ô nhiễm môi trường là do hoạt động sản xuất công nghiệp, nông nghiệp gây ra.',
    zh:'一部分环境污染是由工业农业生产活动造成的。',
    py:'Yí bùfen huánjìng wūrǎn shì yóu gōngyè nóngyè shēngchǎn huódòng zàochéng de.'
  },
  {
    vi:'Ngoài ra, rác thải cũng gây tổn hại nghiêm trọng cho môi trường.',
    zh:'此外，垃圾也会对环境造成严重的损害。',
    py:'Cǐwài, lājī yě huì duì huánjìng zàochéng yánzhòng de sǔnhài.'
  },
  {
    vi:'Đồng thời, cố gắng đi xe đạp nhiều hơn, chọn phương tiện công cộng nhiều hơn, dùng xe riêng ít đi.',
    zh:'同时，尽量多骑自行车，多选择公共交通，少使用私家车。',
    py:'Tóngshí, jǐnliàng duō qí zìxíngchē, duō xuǎnzé gōnggòng jiāotōng, shǎo shǐyòng sījiāchē.'
  },
  {
    vi:'Trái Đất là mái nhà chung của loài người, chúng ta nên coi nó như một căn phòng lớn thuộc về chính mình.',
    zh:'地球是人类共同的家园，我们应该把它看作一个属于自己的大房间。',
    py:'Dìqiú shì rénlèi gòngtóng de jiāyuán, wǒmen yīnggāi bǎ tā kànzuò yí ge shǔyú zìjǐ de dà fángjiān.'
  }
];

// ══════════════════════════════════════════
// LUYỆN VIẾT — 命题写作 “环保，可以这样开始” (tr. 129)
// ══════════════════════════════════════════
var writingData = {
  words:['尽量','逐步','资源','自觉','贡献'],
  prompt:'Dùng đủ 5 từ cho sẵn, viết một đoạn khoảng 80 chữ nói về việc bảo vệ môi trường có thể bắt đầu từ đâu: quan niệm sai thường gặp, vài việc nhỏ cụ thể em và mọi người làm được hằng ngày, và ý nghĩa của những việc nhỏ ấy.',
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，题目是“环保，可以这样开始”。',
  outline:[
    'Câu mở: nêu quan niệm sai “bảo vệ môi trường là việc lớn, xa vời” rồi phủ định (其实不然).',
    'Luận điểm: môi trường có thể bắt đầu từ việc nhỏ quanh ta — nêu 2–3 việc cụ thể (dùng 尽量, 资源, 自觉).',
    'Kết quả: chỉ cần mỗi người làm một chút, thói quen tốt sẽ dần hình thành (dùng 逐步).',
    'Kết: mỗi người đều có thể góp phần bảo vệ Trái Đất (dùng 贡献).'
  ],
  model:{
    zh:'很多人觉得环保是大事，离自己很远，其实不然。环保可以从身边的小事开始：出门尽量骑自行车，少坐私家车；用过的纸不要扔，节约资源；吃饭时自觉地把剩菜打包。只要每个人都做一点儿，好习惯就会逐步形成。我们每个人都能为保护地球做出贡献。',
    py:'Hěn duō rén juéde huánbǎo shì dà shì, lí zìjǐ hěn yuǎn, qíshí bù rán. Huánbǎo kěyǐ cóng shēnbiān de xiǎo shì kāishǐ: chū mén jǐnliàng qí zìxíngchē, shǎo zuò sījiāchē; yòngguo de zhǐ búyào rēng, jiéyuē zīyuán; chī fàn shí zìjué de bǎ shèngcài dǎbāo. Zhǐyào měi ge rén dōu zuò yìdiǎnr, hǎo xíguàn jiù huì zhúbù xíngchéng. Wǒmen měi ge rén dōu néng wèi bǎohù dìqiú zuòchū gòngxiàn.',
    vn:'Nhiều người nghĩ bảo vệ môi trường là việc lớn, xa vời với mình, thật ra không phải vậy. Bảo vệ môi trường có thể bắt đầu từ những việc nhỏ quanh ta: ra ngoài cố gắng đi xe đạp, ít đi ô tô riêng; giấy đã dùng đừng vứt, để tiết kiệm tài nguyên; ăn xong tự giác gói đồ ăn thừa mang về. Chỉ cần mỗi người làm một chút, thói quen tốt sẽ dần dần hình thành. Mỗi chúng ta đều có thể góp phần bảo vệ Trái Đất.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    'Có nêu ít nhất 2 việc làm CỤ THỂ (đi xe đạp, phân loại rác, tắt đèn…), hay chỉ hô khẩu hiệu “大家要保护环境”?',
    '尽量 có đứng ngay trước động từ / 多 + V / 少 + V không; 逐步 có đi với động từ (形成 / 改善 / 提高) chứ không đi với tính từ?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],
  tuDung:[
    {
      tu:'尽量',
      loai:'phó từ',
      cach:'尽量 + V · 尽量 + 多 / 少 + V · 尽量不 + V · 我会尽量……的',
      sai:[
        {re:'尽量(的|地)',sua:'尽量 + V',giai:'尽量 là phó từ, đứng thẳng trước động từ, không thêm 的 / 地.'},
        {re:'尽量(多|少)[。，！；]',sua:'尽量多 / 少 + V (尽量多骑车)',giai:'Sau 尽量多 / 尽量少 phải có động từ: 尽量少用塑料袋, không dừng ở 尽量少.',nhe:true}
      ]
    },
    {
      tu:'逐步',
      loai:'phó từ',
      cach:'逐步 + 形成 / 改善 / 提高 / 扩大 / 完善 · 逐步向……转变',
      sai:[
        {re:'逐步地?(冷|热|好|坏|大|多|少|高|低|干净|脏)',sua:'逐渐 + tính từ / 逐步 + 改善',giai:'逐步 không bổ nghĩa cho tính từ; biến đổi tự nhiên của trạng thái dùng 逐渐 (空气逐渐好了) hoặc 逐步 + động từ (空气逐步改善).'},
        {re:'逐步(习惯|喜欢|爱上|明白)',sua:'逐渐习惯 / 慢慢明白',giai:'Quen dần, hiểu dần là biến đổi tâm lý tự nhiên → 逐渐 / 慢慢.',nhe:true}
      ]
    },
    {
      tu:'资源',
      loai:'danh từ',
      cach:'节约 / 保护 / 浪费 + 资源 · 水资源 · 资源 + 丰富 / 不足 / 短缺 / 宝贵',
      sai:[
        {re:'节省资源|省资源',sua:'节约资源',giai:'Cụm quen dùng là 节约资源; 节省 hay đi với tiền, thời gian cụ thể (节省时间).'},
        {re:'资源(很|非常)?(多|少)',sua:'资源丰富 / 资源不足',giai:'Văn viết nói 资源丰富 / 资源不足 / 资源短缺 tự nhiên hơn 资源很多 / 很少.',nhe:true}
      ]
    },
    {
      tu:'自觉',
      loai:'tính từ',
      cach:'自觉地 + V (遵守 / 爱护 / 分类 / 打包) · 很自觉',
      sai:[
        {re:'自觉的(遵守|把|学习|爱护|完成|进行|打包|分类|关)',sua:'自觉地 + V',giai:'Làm trạng ngữ trước động từ phải dùng 地, không dùng 的.'},
        {re:'自觉(到|自己)',sua:'觉得 / 感到 / 意识到',giai:'Muốn nói “tự nhận thấy” thì dùng 意识到 / 感到; 自觉 ở đây là tính từ “tự giác”.',nhe:true}
      ]
    },
    {
      tu:'贡献',
      loai:'danh từ / động từ',
      cach:'为 + N + 做出贡献 · 对 + N + 有贡献 · 贡献 + 力量',
      sai:[
        {re:'(给|对)[^。，；]{0,8}做出?了?贡献',sua:'为……做出贡献 / 对……有贡献',giai:'做(出)贡献 đi với giới từ 为: 为保护地球做出贡献; 对 đi với 有贡献.'},
        {re:'做贡献了很多|贡献很多',sua:'做出了很大的贡献',giai:'Cụm quen dùng là 做出(了)很大的贡献 — 贡献 đi với 大.',nhe:true}
      ]
    }
  ],
  cauTruc:[
    {ten:'……，其实不然。',nhan:'其实',vd:'很多人觉得环保离自己很远，其实不然。',khi:'Câu MỞ: nêu quan niệm sai phổ biến rồi phủ định.'},
    {ten:'……可以从……开始',nhan:'从',vd:'环保可以从身边的小事开始。',khi:'Nêu luận điểm chính, bám sát đề “可以这样开始”.'},
    {ten:'尽量多 / 少 + V',nhan:'尽量',vd:'出门尽量多骑自行车，少坐私家车。',khi:'Đưa ra việc làm cụ thể (điểm ngữ pháp 2).'},
    {ten:'只要……，就……',nhan:'只要',vd:'只要每个人都做一点儿，环境就会越来越好。',khi:'Nêu điều kiện – kết quả, tăng sức thuyết phục (HSK 4).'},
    {ten:'…… + 逐步 + V (形成 / 改善)',nhan:'逐步',vd:'好习惯就会逐步形成。',khi:'Nói sự thay đổi từng bước (điểm ngữ pháp 3).'},
    {ten:'A 和 B 密切相关',nhan:'密切',vd:'环境问题和我们每个人都密切相关。',khi:'Nhấn mạnh mối liên hệ giữa môi trường và mỗi người (điểm ngữ pháp 1).'},
    {ten:'为……做出贡献',nhan:'贡献',vd:'我们每个人都能为保护地球做出贡献。',khi:'Câu KẾT: kêu gọi, quay về đề bài.'}
  ],
  sapXep:[
    {manh:['其实不然','很多人觉得','环保离自己很远'],dap:'很多人觉得环保离自己很远，其实不然。',vn:'Nhiều người nghĩ bảo vệ môi trường xa vời với mình, thật ra không phải vậy.',giai:'Quan niệm (很多人觉得……) đứng trước, lời phủ định 其实不然 đứng cuối.'},
    {manh:['开始','环保','从身边的小事','可以'],dap:'环保可以从身边的小事开始。',vn:'Bảo vệ môi trường có thể bắt đầu từ những việc nhỏ quanh ta.',giai:'Chủ ngữ + 可以 + 从……开始.'},
    {manh:['骑自行车','出门','尽量','多'],dap:'出门尽量多骑自行车。',vn:'Ra ngoài cố gắng đi xe đạp nhiều hơn.',giai:'尽量 + 多 + V: 尽量 đứng trước 多, 多 đứng ngay trước động từ.'},
    {manh:['把剩菜','自觉地','吃饭时','打包'],dap:'吃饭时自觉地把剩菜打包。',vn:'Ăn xong tự giác gói đồ ăn thừa mang về.',giai:'Thời gian + trạng ngữ (自觉地) + 把 + tân ngữ + V.'},
    {manh:['就会','好习惯','逐步形成','只要每个人都做一点儿'],dap:'只要每个人都做一点儿，好习惯就会逐步形成。',vn:'Chỉ cần mỗi người làm một chút, thói quen tốt sẽ dần dần hình thành.',giai:'只要…… ở vế trước; vế sau: chủ ngữ + 就会 + 逐步 + V.'},
    {manh:['做出贡献','为保护地球','我们每个人','都能'],dap:'我们每个人都能为保护地球做出贡献。',vn:'Mỗi chúng ta đều có thể góp phần bảo vệ Trái Đất.',giai:'Chủ ngữ + 都能 + 为 + mục tiêu + 做出贡献.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — 话题讨论 “环保” (tr. 129)
// ══════════════════════════════════════════
var speakingData = {
  intro:'Ba câu đầu là <b>话题讨论</b> của sách (tr. 129: 环保), câu 4 mở rộng. Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố dùng từ mới: 破坏 · 尽量 · 逐步 · 自觉 · 设施 · 资源 · 密切相关.',
  questions:[
    {
      q_zh:'说说你每天从身边观察到的不环保的行为。',
      q_vn:'Hãy kể những hành vi không bảo vệ môi trường mà hằng ngày em quan sát thấy quanh mình.',
      hint:'Kể 2–3 hành vi cụ thể (dùng 有的……有的……还有……), cuối cùng nhận xét (dùng 破坏)',
      sample:'我每天都能看到一些不环保的行为。比如，有的同学喝完饮料就把瓶子随手扔在地上；有的人离开教室不关灯、不关空调；还有人买东西总要很多塑料袋。这些事虽然小，但对环境的破坏很大。',
      sample_vn:'Ngày nào tôi cũng thấy một số hành vi không bảo vệ môi trường. Ví dụ, có bạn uống xong nước là tiện tay vứt chai xuống đất; có người ra khỏi lớp không tắt đèn, không tắt điều hoà; còn có người mua đồ lúc nào cũng lấy rất nhiều túi nilon. Những việc này tuy nhỏ nhưng tác hại với môi trường rất lớn.',
      note:'有的……有的……还有…… giúp liệt kê gọn; 随手 (bài 18) = tiện tay; 对……的破坏 = sự tàn phá đối với ….'
    },
    {
      q_zh:'结合自己的经历，谈谈你对环保的认识。',
      q_vn:'Kết hợp trải nghiệm của bản thân, hãy nói về nhận thức của em đối với việc bảo vệ môi trường.',
      hint:'Kể một trải nghiệm: trước đây em nghĩ gì — chuyện gì xảy ra — bây giờ em hiểu gì (dùng 密切相关)',
      sample:'以前我觉得环保是政府和工厂的事，跟我没什么关系。后来学校组织我们去河边捡垃圾，我看到河水又脏又臭，心里很不安。从那以后我才明白，环境和我们的生活密切相关，每个人都有责任。',
      sample_vn:'Trước đây tôi nghĩ bảo vệ môi trường là việc của chính phủ và nhà máy, chẳng liên quan gì đến tôi. Sau đó trường tổ chức cho chúng tôi ra bờ sông nhặt rác, tôi thấy nước sông vừa bẩn vừa hôi, trong lòng rất bất an. Từ đó tôi mới hiểu, môi trường liên quan mật thiết đến cuộc sống của chúng ta, ai cũng có trách nhiệm.',
      note:'Khung “以前……后来……从那以后我才明白……” kể sự thay đổi nhận thức rất tự nhiên; 才 nhấn mạnh “đến lúc đó mới”.'
    },
    {
      q_zh:'请介绍几件生活中我们可以做到的环保实事。',
      q_vn:'Hãy giới thiệu vài việc thiết thực bảo vệ môi trường mà chúng ta có thể làm trong cuộc sống.',
      hint:'Liệt kê theo 第一、第二、第三, cuối cùng dùng 只要……就…… và 逐步',
      sample:'我们能做的事其实很多：第一，尽量少用塑料袋，买东西自己带购物袋；第二，做到垃圾分类；第三，出门多坐公交车或者骑车。只要大家都自觉地去做，环境就会逐步改善。',
      sample_vn:'Những việc chúng ta làm được thật ra rất nhiều: thứ nhất, cố gắng dùng ít túi nilon, đi mua đồ tự mang túi; thứ hai, thực hiện phân loại rác; thứ ba, ra ngoài đi xe buýt hoặc đạp xe nhiều hơn. Chỉ cần mọi người đều tự giác làm, môi trường sẽ từng bước được cải thiện.',
      note:'Ôn cả hai điểm ngữ pháp 尽量 + 少 + V và 逐步 + 改善; 只要……就…… (HSK 4).'
    },
    {
      q_zh:'你们学校或者你家附近有哪些环保设施？你觉得还需要增加什么？',
      q_vn:'Trường em hoặc gần nhà em có những công trình bảo vệ môi trường nào? Em thấy còn cần thêm gì?',
      hint:'Kể cái đã có, rồi đề xuất cái cần thêm và lý do (dùng 设施, 资源, 既……也……)',
      sample:'我们学校有分类垃圾桶，还有太阳能热水器。不过我觉得还可以增加一些节水设施，比如会自动关水的水龙头。这样既能节约水资源，也能提醒大家保护环境。',
      sample_vn:'Trường tôi có thùng rác phân loại, còn có máy nước nóng năng lượng mặt trời. Nhưng tôi thấy còn có thể thêm một số thiết bị tiết kiệm nước, ví dụ vòi nước tự động khoá. Như vậy vừa tiết kiệm được tài nguyên nước, vừa nhắc mọi người bảo vệ môi trường.',
      note:'设施 là cả hệ thống, công trình — 环保设施 / 节水设施; 既……也……: vừa … vừa ….'
    }
  ]
};

// ══════════════════════════════════════════
// NGHE THEO ĐỀ — 练习册 bài 32, câu 1–8
// ══════════════════════════════════════════
var listenExamData = {
  intro:'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source:'Nguyên văn: 《HSK标准教程5·练习册》第32课 听力',
  items:[
    {
      n:1,
      lines:[{sp:'男',zh:'你能教教我怎么用这个程序吗？'},{sp:'女',zh:'这个没你想象的那么难，我这儿有本书，你一看就懂了。'}],
      q:'女的是什么意思？',
      qvn:'Ý của người phụ nữ là gì?',
      opts:['她也不会用这个程序','这个程序非常难','看看书就能学会','让男的去买一本书'],
      ans:2,
      why:'没你想象的那么难 + 你一看就懂了 = không khó như cậu nghĩ, đọc sách là hiểu ngay. Cô ấy CÓ sách sẵn, không bảo đi mua.',
      words:[]
    },
    {
      n:2,
      lines:[{sp:'女',zh:'明天去给老师拜年，是开车去吗？'},{sp:'男',zh:'老师家离地铁站很近，咱们也为绿色出行做点儿贡献吧。'}],
      q:'男的想怎么去老师家？',
      qvn:'Người đàn ông muốn đến nhà thầy giáo bằng cách nào?',
      opts:['开车去','打车去','坐地铁去','骑自行车去'],
      ans:2,
      why:'离地铁站很近 + 为绿色出行做点儿贡献 → đi tàu điện ngầm, không lái xe. Bẫy: người nữ hỏi 开车去吗.',
      words:['贡献']
    },
    {
      n:3,
      lines:[{sp:'男',zh:'明天学校组织春游，让我们带个塑料袋。'},{sp:'女',zh:'对，把吃剩下的垃圾都装好，不要随地乱丢啊。'}],
      q:'关于男的，下列哪项正确？',
      qvn:'Về người đàn ông, câu nào sau đây đúng?',
      opts:['明天要上课','明天要去春游','要去买塑料袋','喜欢乱丢垃圾'],
      ans:1,
      why:'学校组织春游 = trường tổ chức đi chơi xuân → ngày mai đi dã ngoại. Mang túi nilon để đựng rác, không phải đi mua túi.',
      words:[]
    },
    {
      n:4,
      lines:[{sp:'男',zh:'你说莉莉还会同意和我和好吗？'},{sp:'女',zh:'我劝你死了这条心吧，别再抱什么幻想了。'}],
      q:'对于莉莉，女的建议男的怎么做？',
      qvn:'Về chuyện Lili, người phụ nữ khuyên người đàn ông làm gì?',
      opts:['再去找她谈谈','耐心等她同意','放弃，别再抱幻想','给她打个电话道歉'],
      ans:2,
      why:'死了这条心 = dứt khoát từ bỏ ý định; 别再抱什么幻想了 = đừng ôm ảo tưởng nữa → khuyên buông bỏ.',
      words:['幻想']
    },
    {
      n:5,
      lines:[{sp:'女',zh:'这几天空气质量比较差，雾霾浓度很高。'},{sp:'男',zh:'家里的老人对空气污染比较敏感，最近最好少出门。'}],
      q:'男的建议老人怎么做？',
      qvn:'Người đàn ông khuyên người già nên làm gì?',
      opts:['多去医院检查','多开窗通风','最近少出门','戴口罩去锻炼'],
      ans:2,
      why:'对空气污染比较敏感，最近最好少出门 = nhạy cảm với ô nhiễm, dạo này tốt nhất ít ra ngoài.',
      words:['敏感']
    },
    {
      n:6,
      lines:[{sp:'男',zh:'李老先生的那台手术，尽量安排在上午做吧。'},{sp:'女',zh:'我也是这么想的，早上精神好，就排在明天第一台吧。'}],
      q:'关于李先生，从对话中可以知道什么？',
      qvn:'Về ông Lý, từ đoạn hội thoại có thể biết điều gì?',
      opts:['手术已经做完了','手术安排在明天上午','今天下午做手术','不想做手术'],
      ans:1,
      why:'尽量安排在上午 + 排在明天第一台 = xếp ca mổ đầu tiên sáng mai. 台 ở đây là lượng từ cho ca phẫu thuật.',
      words:['尽量']
    },
    {
      n:7,
      lines:[{sp:'男',zh:'我跟刘方打过招呼了，他会带你的。'},{sp:'女',zh:'谢谢领导关心，不明白的地方我一定请教。'},{sp:'男',zh:'这是公司四季度的销售报告，你拿回去看看。'},{sp:'女',zh:'好的，我好好学习学习，先熟悉一下业务。'}],
      q:'关于女的，下列哪项正确？',
      qvn:'Về người phụ nữ, câu nào sau đây đúng?',
      opts:['是刘方的领导','负责写销售报告','刚来公司不久','对业务很熟悉'],
      ans:2,
      why:'刘方会带你 (sẽ hướng dẫn cô) + 先熟悉一下业务 (làm quen nghiệp vụ trước) → là nhân viên mới. Báo cáo là cầm về đọc, không phải tự viết.',
      words:[]
    },
    {
      n:8,
      lines:[{sp:'女',zh:'复赛结果什么时候公布？'},{sp:'男',zh:'说是下个月5号前在比赛官方网站上查询。'},{sp:'女',zh:'还早呢，这两天可以放松一下了。'},{sp:'男',zh:'是的，耐心等待吧。'}],
      q:'复赛结果将通过什么方式公布？',
      qvn:'Kết quả vòng bán kết (vòng hai) sẽ được công bố bằng cách nào?',
      opts:['发短信','打电话通知','登在报纸上','在官方网站上公布'],
      ans:3,
      why:'在比赛官方网站上查询 = tra cứu trên trang web chính thức của cuộc thi.',
      words:['公布']
    }
  ]
};

// ══════════════════════════════════════════
// TÌNH HUỐNG
// ══════════════════════════════════════════
var situationData = {
  intro:'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items:[
    {
      scene:'Trường chỉ cách nhà hai cây số, nhưng bố muốn sáng nào cũng lái ô tô đưa em đi học.',
      a:{sp:'Bố',zh:'明天爸爸开车送你上学吧？',vn:'Mai bố lái xe đưa con đi học nhé?'},
      need:['Dùng 尽量'],
      sample:'不用了，爸爸。学校离家不远，我想尽量多骑自行车，少坐私家车，也为环保做点儿贡献。',
      samplePy:'Búyòng le, bàba. Xuéxiào lí jiā bù yuǎn, wǒ xiǎng jǐnliàng duō qí zìxíngchē, shǎo zuò sījiāchē, yě wèi huánbǎo zuò diǎnr gòngxiàn.',
      sampleVn:'Không cần đâu bố. Trường cách nhà không xa, con muốn cố gắng đạp xe nhiều hơn, ít đi ô tô riêng, cũng là góp chút sức bảo vệ môi trường.',
      tip:'尽量多 + V，少 + V — đúng mẫu câu bài khoá (điểm ngữ pháp 2).'
    },
    {
      scene:'Bạn thắc mắc vì sao sáng nào em cũng xem dự báo chất lượng không khí.',
      a:{sp:'Bạn',zh:'你怎么每天早上都看空气质量预报啊？',vn:'Sao sáng nào cậu cũng xem dự báo chất lượng không khí thế?'},
      need:['Dùng 密切','Dùng 敏感'],
      sample:'因为我奶奶对空气污染特别敏感，空气好不好和她的健康密切相关，所以我得每天看看。',
      samplePy:'Yīnwèi wǒ nǎinai duì kōngqì wūrǎn tèbié mǐngǎn, kōngqì hǎo bu hǎo hé tā de jiànkāng mìqiè xiāngguān, suǒyǐ wǒ děi měi tiān kànkan.',
      sampleVn:'Vì bà tớ đặc biệt nhạy cảm với ô nhiễm không khí, không khí tốt hay xấu liên quan mật thiết đến sức khoẻ của bà, nên ngày nào tớ cũng phải xem.',
      tip:'A 对 B 很敏感; A 和 B 密切相关 (điểm ngữ pháp 1).'
    },
    {
      scene:'Cô giáo hỏi em định cải thiện khả năng nói tiếng Trung thế nào.',
      a:{sp:'Cô giáo',zh:'你的汉语口语还不太流利，打算怎么提高呢？',vn:'Khẩu ngữ tiếng Trung của em còn chưa lưu loát lắm, em định nâng cao thế nào?'},
      need:['Dùng 逐步'],
      sample:'我打算每天先大声读课文，再找同学练习对话，逐步提高自己的口语水平。',
      samplePy:'Wǒ dǎsuàn měi tiān xiān dàshēng dú kèwén, zài zhǎo tóngxué liànxí duìhuà, zhúbù tígāo zìjǐ de kǒuyǔ shuǐpíng.',
      sampleVn:'Em định mỗi ngày đọc to bài khoá trước, rồi tìm bạn luyện hội thoại, từng bước nâng cao khả năng nói của mình.',
      tip:'Có kế hoạch, từng bước (先……再……) → 逐步 + 提高 (điểm ngữ pháp 3).'
    },
    {
      scene:'Bạn nản lòng: một mình mình phân loại rác thì chẳng thay đổi được gì.',
      a:{sp:'Bạn',zh:'就我一个人垃圾分类有什么用？别人都不做。',vn:'Một mình tớ phân loại rác thì có ích gì? Người khác đều không làm.'},
      need:['Dùng 自觉','Dùng 贡献'],
      sample:'别这么消极嘛！只要每个人都自觉地去做，环境就会变好。你做一点儿，也是对环境的一点儿贡献啊。',
      samplePy:'Bié zhème xiāojí ma! Zhǐyào měi ge rén dōu zìjué de qù zuò, huánjìng jiù huì biàn hǎo. Nǐ zuò yìdiǎnr, yě shì duì huánjìng de yìdiǎnr gòngxiàn a.',
      sampleVn:'Đừng tiêu cực thế chứ! Chỉ cần mỗi người đều tự giác làm, môi trường sẽ tốt lên. Cậu làm một chút cũng là góp một phần cho môi trường mà.',
      tip:'自觉地 + V; 对……的贡献; ôn 消极 và 只要……就…….'
    },
    {
      scene:'Bạn hỏi thăm vì nghe tin quê em năm nay bị lũ lớn.',
      a:{sp:'Bạn',zh:'听说你老家今年发洪水了，家里没事吧？',vn:'Nghe nói quê cậu năm nay bị lũ, nhà cậu không sao chứ?'},
      need:['Dùng 幸运的是'],
      sample:'洪水很大，村里很多农田都被淹了。幸运的是，我家的房子在山坡上，家里人都没事。',
      samplePy:'Hóngshuǐ hěn dà, cūn li hěn duō nóngtián dōu bèi yān le. Xìngyùn de shì, wǒ jiā de fángzi zài shānpō shang, jiā li rén dōu méi shì.',
      sampleVn:'Lũ to lắm, nhiều ruộng trong làng bị ngập hết. May mà nhà tớ ở trên sườn đồi, cả nhà đều không sao.',
      tip:'幸运的是，…… chuyển từ tin xấu sang tin tốt, như bài khoá; ôn 洪水 và câu 被.'
    }
  ]
};

// ══════════════════════════════════════════
// CHỌN VĂN PHONG
// ══════════════════════════════════════════
var registerData = {
  intro:'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items:[
    {
      scene:'Thông báo dán ở bảng tin của ban quản lý khu chung cư.',
      a:'请各位居民自觉做好垃圾分类，感谢您的配合。',
      b:'大家扔垃圾的时候分一下类啊，别乱扔。',
      better:'a',
      why:'Thông báo công cộng cần lịch sự, trang trọng: 各位居民, 自觉, 感谢您的配合. Câu b là khẩu ngữ, như hàng xóm nhắc nhau.'
    },
    {
      scene:'Em nhắn tin rủ bạn thân đạp xe đi chơi thay vì gọi taxi.',
      a:'为减少汽车尾气排放，建议选择绿色出行方式。',
      b:'别打车了，咱们骑车去吧，又环保又能锻炼！',
      better:'b',
      why:'Nhắn bạn thân nên tự nhiên, gần gũi: 咱们, 又……又……. Câu a như khẩu hiệu tuyên truyền.'
    },
    {
      scene:'Phát thanh viên đọc bản tin môi trường trên truyền hình.',
      a:'据环保部门公布的数据，本市空气质量正在逐步改善。',
      b:'听说咱们这儿的空气最近好多了。',
      better:'a',
      why:'Bản tin cần chính xác, có nguồn: 据……公布的数据, 逐步改善. Câu b là “nghe nói”, không hợp với tin tức.'
    },
    {
      scene:'Em an ủi bạn thân đang buồn vì thi trượt.',
      a:'面对失败，消极逃避不能解决问题，望你积极面对。',
      b:'别想太多了，一次没考好没关系，下次咱们一起复习！',
      better:'b',
      why:'An ủi bạn cần ấm áp, gần gũi. Câu a đúng ý nhưng giọng lên lớp, như văn bản (望你积极面对).'
    },
    {
      scene:'Lớp trưởng phát biểu khai mạc hoạt động bảo vệ môi trường trước toàn trường.',
      a:'尊敬的各位老师、亲爱的同学们：今天，我们在这里举行环保主题活动。',
      b:'老师们、同学们，今天咱们一块儿搞个环保活动啊。',
      better:'a',
      why:'Phát biểu trước toàn trường dùng lời chào trang trọng 尊敬的……、亲爱的……. Câu b quá suồng sã (一块儿, 搞个…啊).'
    },
    {
      scene:'Mẹ dặn con trước khi ra khỏi nhà vào ngày nhiều khói bụi.',
      a:'外面雾霾很重，能不出门就尽量别出门，出门记得戴口罩。',
      b:'鉴于空气污染严重，建议减少外出并采取防护措施。',
      better:'a',
      why:'Lời mẹ dặn con là khẩu ngữ, thân mật: 尽量别……, 记得……. Câu b như thông báo của cơ quan y tế (鉴于, 采取防护措施).'
    }
  ]
};

// ══════════════════════════════════════════
// KỂ LẠI BÀI KHOÁ — bài tập 4 (tr. 128)
// ══════════════════════════════════════════
var retellData = {
  intro:'Bài tập 4 của giáo trình (tr. 128): <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, KHÔNG đọc thuộc lòng. Sách chia 4 ý (污染对动植物的危害 · 污染对人类的危害 · 造成污染的原因 · 保护环境的措施); ở đây tách thành 6 bước. Nhìn dàn ý và từ khoá, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline:[
    {step:'Ô nhiễm nhỏ cũng nguy hại',cue:'觉得一点儿小污染没关系？大错特错…… 动植物正在消失…… 部分原因是洪水、地震等自然变化，更大的原因是人类的破坏',words:['消失','洪水','地震','破坏']},
    {step:'Rừng, sông, đồng cỏ bị huỷ hoại',cue:'森林几乎被人砍光…… 河流不再适合鱼类生存…… 草原变为沙漠…… 环保组织公布的数据：一半以上的动植物正在消失，真实，不夸张',words:['砍','生存','沙漠','公布','数据','真实','夸张']},
    {step:'Con người cũng chịu hại',cue:'地表水污染、地下水过量使用…… 水资源短缺…… 17%的人喝不上干净的水…… 死于空气污染疾病的人比死于车祸的还多…… 令人不安',words:['资源','车祸','不安']},
    {step:'Nguyên nhân gây ô nhiễm',cue:'工业农业生产…… 大型工厂产生废水，燃烧煤炭产生废气、废物…… 汽车尾气和日常生活密切相关…… 此外还有垃圾',words:['工业','农业','生产','大型','工厂','废','燃烧','煤炭','密切','尾气']},
    {step:'Những hành động bảo vệ môi trường',cue:'幸运的是，人们敏感地认识到问题，自觉行动…… 增加环保设施，逐步向可再生能源转变…… 尽量减少垃圾、少用私家车…… 令人尊敬，令人鼓舞',words:['幸运','敏感','自觉','设施','能源','逐步','尽量','私人','尊敬','鼓舞']},
    {step:'Lời kết: Trái Đất là căn phòng của mỗi người',cue:'把地球看作自己的大房间…… 消极逃避、不符合实际的幻想都没用…… 每个人都要付出行动、做出贡献…… 命运由我们自己掌握',words:['消极','幻想','贡献','命运','掌握']}
  ],
  checklist:[
    'Kể đủ bốn ý lớn của sách (hại động thực vật · hại con người · nguyên nhân · biện pháp) chưa, có câu kết “地球是我们的大房间” không?',
    'Có dùng được ít nhất 15 từ mới của bài không?',
    'Có dùng 密切相关, 尽量, 逐步 — ba điểm ngữ pháp của bài — đúng chỗ không?',
    'Nhắc được ít nhất 2 con số / sự thật của bài (一半以上的动植物, 17%的人…) chưa?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// BÀI TẬP SÁCH GIÁO KHOA (tr. 127–129) — bài 1, 2 + 扩展
// ══════════════════════════════════════════
var sgkData = [
  {
    kieu:'kho',
    de:'选择合适的词语填空',
    vn:'Chọn từ thích hợp điền vào chỗ trống',
    tu:['鼓舞','公布','消失','幻想','不安','幸运'],
    cau:[
      {s:'小时候，他常＿＿着自己有一天也能成为一名导演。',dap:['幻想']},
      {s:'船翻了，他很＿＿地抱住一根木头，游到一个小岛上。',dap:['幸运']},
      {s:'大赛的作品将被放在网上，由网友打分，比赛结果于四月十五日＿＿。',dap:['公布']},
      {s:'谈判的成功给了他极大的＿＿。',dap:['鼓舞']},
      {s:'接到电话，她感到有些＿＿，急忙连夜赶回家中。',dap:['不安']},
      {s:'记录、保存将要＿＿的事物是摄影非常重要的作用。',dap:['消失']}
    ]
  },
  {
    kieu:'ab',
    de:'选择正确答案',
    vn:'Chọn đáp án đúng',
    cau:[
      {s:'虽然我不同意你的看法，但我还是＿＿你的选择。',opts:['尊敬','尊重'],ans:1,giai:'Đối tượng là “lựa chọn” (sự việc), quan hệ ngang hàng → 尊重. 尊敬 dùng cho người trên (thầy cô, người già), không đi với 选择.'},
      {s:'作品充分地表达了作者内心＿＿的情感。',opts:['真实','确实'],ans:0,giai:'Cần tính từ làm định ngữ cho 情感 → 真实的情感. 确实 chủ yếu là phó từ “quả thật” (确实很好), không làm định ngữ kiểu này.'},
      {s:'那个城市的基础＿＿还不够完善。',opts:['设施','设备'],ans:0,giai:'基础设施 = cơ sở hạ tầng (đường sá, điện nước…), đi với 完善. 设备 là máy móc cụ thể, không nói 基础设备.'},
      {s:'这次考试能否通过，我实在没什么＿＿。',opts:['把握','掌握'],ans:0,giai:'没(什么)把握 = không chắc chắn lắm — 把握 là danh từ “sự chắc chắn”. 掌握 chỉ là động từ “nắm vững”, không đứng sau 没什么 như danh từ.'}
    ]
  },
  {
    kieu:'kho',
    de:'从上表中选择合适的词语填空（扩展 · 资源）',
    vn:'Chọn từ trong bảng từ vựng chủ đề “Tài nguyên” để điền vào chỗ trống',
    tu:['金属','黄金','银','钢铁','煤炭','能源','原料','资源'],
    cau:[
      {s:'这种管子是＿＿管，只是从表面上看像塑料。',dap:['金属']},
      {s:'“中国大妈”一词的产生充分证明中国是＿＿消费的大国。',dap:['黄金']},
      {s:'豆腐深受中国人的喜爱，制作它的主要＿＿就是黄豆。',dap:['原料']},
      {s:'从目前中国能源消费结构来看，＿＿依然占主导地位。',dap:['煤炭']}
    ]
  }
];
