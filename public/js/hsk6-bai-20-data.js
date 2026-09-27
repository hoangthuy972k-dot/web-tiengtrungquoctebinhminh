// ══════════════════════════════════════════
// DATA — HSK6 Bài 20: 金鸡窝 (Ổ gà vàng)
// 第五单元 美丽家园 · Nguồn: HSK标准教程6上 (tr. 207–215) + đáp án sách
// Bài khoá: 金鸡窝 (831字) · 51 từ mới
// ══════════════════════════════════════════

var vocabData = [
  {n:1,zh:'窝',py:'wō',pos:'Danh từ',vn:'ổ, tổ (chim, thú, côn trùng); (lượng từ) một ổ, một lứa',hv:'oa',em:'🐣',lesson:1,
   explain:['Chỗ ở của chim, thú, côn trùng: 鸡窝 (ổ gà), 鸟窝 (tổ chim), 蚂蚁窝 (tổ kiến).','Còn làm lượng từ cho một lứa con vật sinh cùng lúc: 一窝小鸡, 一窝小狗; mở rộng: 被窝 (ổ chăn, chăn đắp).'],
   usage:'鸡 / 鸟 / 狗 + 窝; 一窝 + 小鸡 / 小狗; 出窝 = rời ổ; 被窝 = ổ chăn.',
   collo:['鸡窝','鸟窝','一窝小鸡','出窝'],
   ex_zh:'那石头中间凹陷，像个鸡窝。',ex_py:'Nà shítou zhōngjiān āoxiàn, xiàng ge jīwō.',ex_vn:'Hòn đá đó lõm ở giữa, trông như một cái ổ gà.',
   exList:[
     {zh:'宋家三祖爷早早下了地，突然看到了一窝小鸡。',py:'Sòng jiā Sān zǔyé zǎozǎo xiàle dì, tūrán kàndàole yì wō xiǎo jī.',vn:'Ông cụ Ba nhà họ Tống ra đồng từ sớm, bỗng thấy một ổ gà con.'},
     {zh:'屋檐下有个鸟窝，每天早上都能听到小鸟叫。',py:'Wūyán xià yǒu ge niǎowō, měitiān zǎoshang dōu néng tīngdào xiǎoniǎo jiào.',vn:'Dưới mái hiên có một tổ chim, sáng nào cũng nghe thấy chim non kêu.'},
     {zh:'天太冷了，我恨不得一整天都躲在被窝里。',py:'Tiān tài lěng le, wǒ hènbude yì zhěng tiān dōu duǒ zài bèiwō li.',vn:'Trời lạnh quá, tôi chỉ mong cả ngày được trốn trong chăn.'}
   ],
   colloFull:[
     {zh:'鸡窝',py:'jīwō',vn:'ổ gà'},
     {zh:'鸟窝',py:'niǎowō',vn:'tổ chim'},
     {zh:'一窝小鸡',py:'yì wō xiǎo jī',vn:'một ổ gà con'},
     {zh:'出窝',py:'chū wō',vn:'rời ổ'},
     {zh:'被窝',py:'bèiwō',vn:'ổ chăn, chăn đắp'}
   ],
   patterns:[
     {s:'N (con vật) + 窝',m:'Ổ / tổ của con vật'},
     {s:'一窝 + 小动物',m:'Một ổ, một lứa … (lượng từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Đàn gà con vừa thấy gà mẹ là lập tức chạy về ổ.',answer:'小鸡们一看见母鸡，就马上跑回了窝里。',answerPy:'Xiǎojīmen yí kànjiàn mǔjī, jiù mǎshàng pǎohuíle wō li.',
      note:'一……就……: vừa … là … (hai hành động nối tiếp ngay).',pair:'一……就……'},
     {promptLang:'vi',prompt:'Hàng xóm cho tôi một chú chó con, nghe nói cả lứa có sáu con.',answer:'邻居送给我一只小狗，听说那一窝一共有六只。',answerPy:'Línjū sòng gěi wǒ yì zhī xiǎogǒu, tīngshuō nà yì wō yígòng yǒu liù zhī.',
      note:'窝 làm lượng từ = một lứa; 送给 + người + vật.',pair:'听说……'}
   ]},

  {n:2,zh:'畔',py:'pàn',pos:'Danh từ',vn:'bờ, bên (sông, hồ, ao); bên cạnh',hv:'bạn',em:'🏞️',lesson:1,
   explain:['Bờ, ven (sông, hồ, ao): 湖畔, 河畔, 池塘畔 — văn viết, sắc thái trang nhã.','Còn nghĩa "bên cạnh": 耳畔 (bên tai) — 耳畔响起妈妈的声音.'],
   usage:'N (河 / 湖 / 池塘 / 江) + 畔; 在……畔; 耳畔. Khẩu ngữ thường nói 边: 湖边, 河边.',
   collo:['湖畔','河畔','池塘畔','耳畔'],
   ex_zh:'姥姥住的村东池塘畔有一块椭圆形的大石头。',ex_py:'Lǎolao zhù de cūn dōng chítáng pàn yǒu yí kuài tuǒyuánxíng de dà shítou.',ex_vn:'Bên bờ ao phía đông ngôi làng bà ngoại ở có một hòn đá lớn hình bầu dục.',
   exList:[
     {zh:'姥姥住的村东池塘畔有一块椭圆形的大石头。',py:'Lǎolao zhù de cūn dōng chítáng pàn yǒu yí kuài tuǒyuánxíng de dà shítou.',vn:'Bên bờ ao phía đông ngôi làng bà ngoại ở có một hòn đá lớn hình bầu dục.'},
     {zh:'周末我们常常在湖畔散步，看夕阳慢慢落下。',py:'Zhōumò wǒmen chángcháng zài húpàn sànbù, kàn xīyáng mànmàn luòxià.',vn:'Cuối tuần chúng tôi hay đi dạo bên hồ, ngắm hoàng hôn từ từ buông xuống.'},
     {zh:'离开家乡多年，妈妈的叮嘱仍常常在耳畔响起。',py:'Líkāi jiāxiāng duō nián, māma de dīngzhǔ réng chángcháng zài ěrpàn xiǎngqǐ.',vn:'Xa quê nhiều năm, lời dặn dò của mẹ vẫn thường vang lên bên tai.'}
   ],
   colloFull:[
     {zh:'湖畔',py:'húpàn',vn:'bên hồ'},
     {zh:'河畔',py:'hépàn',vn:'bờ sông'},
     {zh:'池塘畔',py:'chítáng pàn',vn:'bờ ao'},
     {zh:'耳畔',py:'ěrpàn',vn:'bên tai'},
     {zh:'江畔',py:'jiāngpàn',vn:'bờ sông (lớn)'}
   ],
   patterns:[
     {s:'河 / 湖 / 池塘 + 畔',m:'Bên bờ … (văn viết)'},
     {s:'在……畔 + V',m:'Làm gì ở bên bờ …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ngôi nhà nhỏ bên hồ ấy tuy cũ nhưng rất yên tĩnh.',answer:'湖畔的那座小房子虽然旧，但是非常安静。',answerPy:'Húpàn de nà zuò xiǎo fángzi suīrán jiù, dànshì fēicháng ānjìng.',
      note:'虽然……但是……: tuy … nhưng ….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Mỗi khi mệt mỏi, anh ấy lại ra bờ sông ngồi một lát.',answer:'每当累了的时候，他就会到河畔坐一会儿。',answerPy:'Měi dāng lèile de shíhou, tā jiù huì dào hépàn zuò yíhuìr.',
      note:'每当……的时候，就……: mỗi khi … thì ….',pair:'每当……就……'}
   ]},

  {n:3,zh:'椭圆',py:'tuǒyuán',pos:'Danh từ',vn:'hình bầu dục, hình elip',hv:'thoả viên',em:'🥚',lesson:1,
   explain:['Hình bầu dục, hình elip — tròn nhưng kéo dài ra một chiều, như quả trứng.','Hay dùng 椭圆形 (hình bầu dục) làm định ngữ: 椭圆形的石头 / 镜子 / 桌子.'],
   usage:'椭圆 + 形; 椭圆形的 + N; 呈椭圆形 (có dạng hình bầu dục — văn viết).',
   collo:['椭圆形','椭圆形的石头','椭圆形的脸','呈椭圆形'],
   ex_zh:'村东池塘畔有一块椭圆形的大石头。',ex_py:'Cūn dōng chítáng pàn yǒu yí kuài tuǒyuánxíng de dà shítou.',ex_vn:'Bên bờ ao phía đông làng có một hòn đá lớn hình bầu dục.',
   exList:[
     {zh:'地球绕太阳运行的轨道是一个椭圆。',py:'Dìqiú rào tàiyáng yùnxíng de guǐdào shì yí ge tuǒyuán.',vn:'Quỹ đạo Trái Đất chuyển động quanh Mặt Trời là một hình elip.'},
     {zh:'她的脸是椭圆形的，也就是人们常说的“鹅蛋脸”。',py:'Tā de liǎn shì tuǒyuánxíng de, yě jiù shì rénmen cháng shuō de "édàn liǎn".',vn:'Khuôn mặt cô ấy hình bầu dục, tức là kiểu người ta hay gọi là "mặt trái xoan".'},
     {zh:'这张椭圆形的餐桌既美观又节省空间。',py:'Zhè zhāng tuǒyuánxíng de cānzhuō jì měiguān yòu jiéshěng kōngjiān.',vn:'Chiếc bàn ăn hình bầu dục này vừa đẹp lại vừa tiết kiệm không gian.'}
   ],
   colloFull:[
     {zh:'椭圆形',py:'tuǒyuánxíng',vn:'hình bầu dục'},
     {zh:'椭圆形的石头',py:'tuǒyuánxíng de shítou',vn:'hòn đá hình bầu dục'},
     {zh:'椭圆形的脸',py:'tuǒyuánxíng de liǎn',vn:'khuôn mặt trái xoan'},
     {zh:'呈椭圆形',py:'chéng tuǒyuánxíng',vn:'có dạng hình bầu dục'},
     {zh:'椭圆轨道',py:'tuǒyuán guǐdào',vn:'quỹ đạo elip'}
   ],
   patterns:[
     {s:'椭圆形的 + N',m:'… hình bầu dục'},
     {s:'N + 呈椭圆形',m:'… có dạng hình bầu dục (văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc gương hình bầu dục này vừa đẹp vừa tiện dụng.',answer:'这面椭圆形的镜子既好看又实用。',answerPy:'Zhè miàn tuǒyuánxíng de jìngzi jì hǎokàn yòu shíyòng.',
      note:'既……又……: vừa … vừa …; lượng từ của 镜子 là 面.',pair:'既……又……'},
     {promptLang:'vi',prompt:'Nhìn từ trên cao xuống, cái hồ này có dạng hình bầu dục.',answer:'从高处往下看，这个湖呈椭圆形。',answerPy:'Cóng gāochù wǎng xià kàn, zhège hú chéng tuǒyuánxíng.',
      note:'从……往下看: nhìn từ … xuống; 呈 + hình dạng (văn viết).',pair:'从……往……'}
   ]},

  {n:4,zh:'外表',py:'wàibiǎo',pos:'Danh từ',vn:'bề ngoài, vẻ ngoài',hv:'ngoại biểu',em:'🪞',lesson:1,
   explain:['Mặt ngoài, bề ngoài của đồ vật: 金鸡窝外表有些古怪.','Vẻ bề ngoài của con người (dáng vẻ, ăn mặc) — thường đối lập với 内心 / 人品: 不能只看外表.'],
   usage:'N + 的外表; 外表 + 古怪 / 普通 / 漂亮; 从外表上看……; 不能只看外表.',
   collo:['外表古怪','从外表上看','只看外表','外表美观'],
   ex_zh:'金鸡窝外表有些古怪。',ex_py:'Jīnjīwō wàibiǎo yǒuxiē gǔguài.',ex_vn:'Bề ngoài của Ổ gà vàng hơi kỳ lạ.',
   exList:[
     {zh:'金鸡窝外表有些古怪，像件工艺品，很是美观别致。',py:'Jīnjīwō wàibiǎo yǒuxiē gǔguài, xiàng jiàn gōngyìpǐn, hěn shì měiguān biézhì.',vn:'Bề ngoài Ổ gà vàng hơi kỳ lạ, trông như một món đồ mỹ nghệ, rất đẹp và độc đáo.'},
     {zh:'交朋友不能只看外表，更重要的是看人品。',py:'Jiāo péngyou bù néng zhǐ kàn wàibiǎo, gèng zhòngyào de shì kàn rénpǐn.',vn:'Kết bạn không thể chỉ nhìn bề ngoài, quan trọng hơn là nhìn nhân cách.'},
     {zh:'从外表上看，这座房子很普通，里面却装修得十分豪华。',py:'Cóng wàibiǎo shang kàn, zhè zuò fángzi hěn pǔtōng, lǐmiàn què zhuāngxiū de shífēn háohuá.',vn:'Nhìn từ bề ngoài, căn nhà này rất bình thường, nhưng bên trong lại được trang hoàng vô cùng sang trọng.'}
   ],
   colloFull:[
     {zh:'外表古怪',py:'wàibiǎo gǔguài',vn:'bề ngoài kỳ lạ'},
     {zh:'从外表上看',py:'cóng wàibiǎo shang kàn',vn:'nhìn từ bề ngoài'},
     {zh:'只看外表',py:'zhǐ kàn wàibiǎo',vn:'chỉ nhìn bề ngoài'},
     {zh:'外表美观',py:'wàibiǎo měiguān',vn:'bề ngoài đẹp mắt'},
     {zh:'注重外表',py:'zhùzhòng wàibiǎo',vn:'chú trọng vẻ ngoài'}
   ],
   patterns:[
     {s:'从外表上看，……，(其实)……',m:'Nhìn bề ngoài thì …, (thực ra) …'},
     {s:'不能只看 + 外表',m:'Không thể chỉ nhìn bề ngoài'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy bề ngoài trông rất nghiêm khắc, thật ra lại là người rất dịu dàng.',answer:'他外表看起来很严厉，其实是一个非常温柔的人。',answerPy:'Tā wàibiǎo kàn qǐlái hěn yánlì, qíshí shì yí ge fēicháng wēnróu de rén.',
      note:'看起来……，其实……: trông thì …, thực ra …; 严厉 ôn bài 1.',pair:'看起来……其实……'},
     {promptLang:'vi',prompt:'Không phải ai có vẻ ngoài xinh đẹp cũng có tâm hồn đẹp.',answer:'并不是所有外表漂亮的人都有美好的心灵。',answerPy:'Bìng bú shì suǒyǒu wàibiǎo piàoliang de rén dōu yǒu měihǎo de xīnlíng.',
      note:'并不是所有……都……: không phải tất cả … đều …; 心灵 ôn bài 7.',pair:'并不是……'}
   ]},

  {n:5,zh:'镶嵌',py:'xiāngqiàn',pos:'Động từ',vn:'khảm, nạm, dát',hv:'tương khảm',em:'💎',lesson:1,
   explain:['Gắn, khảm một vật vào trong vật khác (thường là đá quý, vỏ trai, ngọc) để trang trí.','Cấu trúc: A 上镶嵌着 B (trên A có khảm B) / 把 B 镶嵌在 A 上; nghĩa bóng: hồ nước như viên ngọc khảm giữa núi.'],
   usage:'N (nơi) + 上 + 镶嵌着 + N; 把……镶嵌在……上; 镶嵌 + 宝石 / 钻石 / 贝壳.',
   collo:['镶嵌着宝石','镶嵌钻石','镶嵌在墙上','镶嵌工艺'],
   ex_zh:'红色的石头上面镶嵌着些不同色彩的小石头。',ex_py:'Hóngsè de shítou shàngmiàn xiāngqiànzhe xiē bùtóng sècǎi de xiǎo shítou.',ex_vn:'Trên hòn đá màu đỏ có khảm một số viên đá nhỏ nhiều màu sắc khác nhau.',
   exList:[
     {zh:'金鸡窝上面镶嵌着些不同色彩、不同形状的小石头。',py:'Jīnjīwō shàngmiàn xiāngqiànzhe xiē bùtóng sècǎi, bùtóng xíngzhuàng de xiǎo shítou.',vn:'Trên Ổ gà vàng có khảm một số viên đá nhỏ khác màu sắc, khác hình dạng.'},
     {zh:'这件首饰非常昂贵，上面镶满了钻石。',py:'Zhè jiàn shǒushi fēicháng ángguì, shàngmiàn xiāngmǎnle zuànshí.',vn:'Món trang sức này vô cùng đắt, trên đó khảm đầy kim cương.'},
     {zh:'从飞机上往下看，湖泊像一颗颗明珠镶嵌在群山之间。',py:'Cóng fēijī shang wǎng xià kàn, húpō xiàng yì kē kē míngzhū xiāngqiàn zài qúnshān zhī jiān.',vn:'Nhìn từ máy bay xuống, những hồ nước như từng viên ngọc sáng khảm giữa núi non trùng điệp.'}
   ],
   colloFull:[
     {zh:'镶嵌着宝石',py:'xiāngqiànzhe bǎoshí',vn:'có khảm đá quý'},
     {zh:'镶嵌钻石',py:'xiāngqiàn zuànshí',vn:'nạm kim cương'},
     {zh:'镶嵌在墙上',py:'xiāngqiàn zài qiáng shang',vn:'khảm trên tường'},
     {zh:'镶嵌工艺',py:'xiāngqiàn gōngyì',vn:'kỹ thuật khảm'},
     {zh:'镶嵌画',py:'xiāngqiànhuà',vn:'tranh khảm'}
   ],
   patterns:[
     {s:'A + 上镶嵌着 + B',m:'Trên A có khảm B'},
     {s:'把 B 镶嵌在 A 上',m:'Khảm B lên A'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên chiếc hộp gỗ này khảm rất nhiều vỏ sò nhỏ, là do bà ngoại tự tay làm.',answer:'这个木盒子上镶嵌着很多小贝壳，是姥姥亲手做的。',answerPy:'Zhège mù hézi shang xiāngqiànzhe hěn duō xiǎo bèiké, shì lǎolao qīnshǒu zuò de.',
      note:'是……的: nhấn mạnh người làm; 亲手 = tự tay.',pair:'是……的'},
     {promptLang:'vi',prompt:'Người thợ cẩn thận khảm viên đá quý lên chiếc nhẫn.',answer:'师傅小心翼翼地把宝石镶嵌在戒指上。',answerPy:'Shīfu xiǎoxīn-yìyì de bǎ bǎoshí xiāngqiàn zài jièzhi shang.',
      note:'把 + O + V + 在 + nơi chốn; 小心翼翼 ôn bài 3.',pair:'把……V在……'}
   ]},

  {n:6,zh:'坚硬',py:'jiānyìng',pos:'Tính từ',vn:'cứng, rắn',hv:'kiên ngạnh',em:'🪨',lesson:1,
   explain:['Rất cứng, rắn chắc, khó làm biến dạng (vật chất): 坚硬的石头, 外壳坚硬.','Văn viết hơn 硬; trái nghĩa: 柔软. Tả tính cách con người thì dùng 坚强, không dùng 坚硬.'],
   usage:'坚硬的 + N (石头 / 外壳 / 地面); N + 很 / 十分 + 坚硬; 或坚硬或不坚硬 (trong bài).',
   collo:['坚硬的石头','外壳坚硬','质地坚硬','坚硬的地面'],
   ex_zh:'上面镶嵌着些或坚硬或不十分坚硬的小石头。',ex_py:'Shàngmiàn xiāngqiànzhe xiē huò jiānyìng huò bù shífēn jiānyìng de xiǎo shítou.',ex_vn:'Trên đó khảm một số viên đá nhỏ, viên thì cứng, viên thì không cứng lắm.',
   exList:[
     {zh:'上面镶嵌着些不同形状、或坚硬或不十分坚硬的小石头。',py:'Shàngmiàn xiāngqiànzhe xiē bùtóng xíngzhuàng, huò jiānyìng huò bù shífēn jiānyìng de xiǎo shítou.',vn:'Trên đó khảm một số viên đá nhỏ khác hình dạng, viên thì cứng, viên thì không cứng lắm.'},
     {zh:'乌龟有坚硬的外壳，遇到危险就把头缩进去。',py:'Wūguī yǒu jiānyìng de wàiké, yùdào wēixiǎn jiù bǎ tóu suō jìnqù.',vn:'Rùa có lớp mai cứng, gặp nguy hiểm liền rụt đầu vào.'},
     {zh:'钻石是自然界中最坚硬的物质，况且非常稀少，所以价格昂贵。',py:'Zuànshí shì zìránjiè zhōng zuì jiānyìng de wùzhì, kuàngqiě fēicháng xīshǎo, suǒyǐ jiàgé ángguì.',vn:'Kim cương là chất cứng nhất trong tự nhiên, huống hồ lại vô cùng hiếm, cho nên giá rất đắt.'}
   ],
   colloFull:[
     {zh:'坚硬的石头',py:'jiānyìng de shítou',vn:'hòn đá cứng'},
     {zh:'外壳坚硬',py:'wàiké jiānyìng',vn:'vỏ ngoài cứng'},
     {zh:'质地坚硬',py:'zhìdì jiānyìng',vn:'chất liệu cứng'},
     {zh:'坚硬的地面',py:'jiānyìng de dìmiàn',vn:'mặt đất cứng'},
     {zh:'坚硬无比',py:'jiānyìng wúbǐ',vn:'cứng vô cùng'}
   ],
   patterns:[
     {s:'坚硬的 + N',m:'… cứng, rắn'},
     {s:'或 A 或 B',m:'Hoặc A hoặc B, cái thì A cái thì B (liệt kê, văn viết)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mặt đất mùa đông vừa cứng vừa lạnh, rất khó đào.',answer:'冬天的地面又坚硬又冰冷，很难挖。',answerPy:'Dōngtiān de dìmiàn yòu jiānyìng yòu bīnglěng, hěn nán wā.',
      note:'又……又……: vừa … vừa ….',pair:'又……又……'},
     {promptLang:'vi',prompt:'Vỏ quả óc chó tuy rất cứng, nhưng nhân bên trong lại rất thơm.',answer:'核桃的外壳虽然很坚硬，但里面的果仁却很香。',answerPy:'Hétao de wàiké suīrán hěn jiānyìng, dàn lǐmiàn de guǒrén què hěn xiāng.',
      note:'虽然……但……却……: tuy … nhưng lại ….',pair:'虽然……但是……'}
   ]},

  {n:7,zh:'工艺品',py:'gōngyìpǐn',pos:'Danh từ',vn:'hàng mỹ nghệ, đồ thủ công mỹ nghệ',hv:'công nghệ phẩm',em:'🏺',lesson:1,
   explain:['Đồ vật được làm khéo léo (thường bằng tay), có giá trị thẩm mỹ, dùng để trang trí, làm quà.','Hay gặp: 手工艺品 (đồ thủ công mỹ nghệ), 工艺品店, 竹 / 木 / 陶瓷工艺品.'],
   usage:'一件工艺品; 像件工艺品 (đẹp như đồ mỹ nghệ); 手工艺品; 制作工艺品.',
   collo:['一件工艺品','手工艺品','制作工艺品','工艺品店'],
   ex_zh:'金鸡窝像件工艺品，很是美观别致。',ex_py:'Jīnjīwō xiàng jiàn gōngyìpǐn, hěn shì měiguān biézhì.',ex_vn:'Ổ gà vàng trông như một món đồ mỹ nghệ, rất đẹp và độc đáo.',
   exList:[
     {zh:'金鸡窝像件工艺品，很是美观别致。',py:'Jīnjīwō xiàng jiàn gōngyìpǐn, hěn shì měiguān biézhì.',vn:'Ổ gà vàng trông như một món đồ mỹ nghệ, rất đẹp và độc đáo.'},
     {zh:'这些竹子做的工艺品是当地的特产，很受游客欢迎。',py:'Zhèxiē zhúzi zuò de gōngyìpǐn shì dāngdì de tèchǎn, hěn shòu yóukè huānyíng.',vn:'Những món đồ mỹ nghệ làm bằng tre này là đặc sản địa phương, rất được du khách ưa chuộng.'},
     {zh:'姥姥把旧布头缝成了一件件精致的手工艺品。',py:'Lǎolao bǎ jiù bùtóu féngchéngle yí jiàn jiàn jīngzhì de shǒugōngyìpǐn.',vn:'Bà ngoại khâu những mảnh vải vụn cũ thành từng món đồ thủ công tinh xảo.'}
   ],
   colloFull:[
     {zh:'一件工艺品',py:'yí jiàn gōngyìpǐn',vn:'một món đồ mỹ nghệ'},
     {zh:'手工艺品',py:'shǒugōngyìpǐn',vn:'đồ thủ công mỹ nghệ'},
     {zh:'制作工艺品',py:'zhìzuò gōngyìpǐn',vn:'làm đồ mỹ nghệ'},
     {zh:'工艺品店',py:'gōngyìpǐn diàn',vn:'cửa hàng đồ mỹ nghệ'},
     {zh:'陶瓷工艺品',py:'táocí gōngyìpǐn',vn:'đồ mỹ nghệ gốm sứ'}
   ],
   patterns:[
     {s:'像件工艺品',m:'Đẹp như một món đồ mỹ nghệ'},
     {s:'用 + vật liệu + 制作工艺品',m:'Dùng … làm đồ mỹ nghệ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Món đồ mỹ nghệ này làm tinh xảo vô cùng, tôi chẳng nỡ dùng.',answer:'这件工艺品做得精致极了，我都舍不得用。',answerPy:'Zhè jiàn gōngyìpǐn zuò de jīngzhì jí le, wǒ dōu shěbude yòng.',
      note:'V + 得 + adj + 极了; 舍不得 + V = không nỡ …; 精致 ôn bài 9.',pair:'……极了'},
     {promptLang:'vi',prompt:'Để kiếm thêm tiền, cô ấy tận dụng thời gian rảnh làm đồ thủ công mỹ nghệ bán trên mạng.',answer:'为了多挣点儿钱，她利用业余时间制作手工艺品在网上卖。',answerPy:'Wèile duō zhèng diǎnr qián, tā lìyòng yèyú shíjiān zhìzuò shǒugōngyìpǐn zài wǎngshang mài.',
      note:'为了……: để …; 利用 + thời gian + V.',pair:'为了……'}
   ]},

  {n:8,zh:'美观',py:'měiguān',pos:'Tính từ',vn:'đẹp, đẹp mắt',hv:'mỹ quan',em:'✨',lesson:1,
   explain:['Đẹp mắt (về hình thức của đồ vật, công trình, cách bày biện) — không dùng để khen người đẹp.','Hay đi kèm: 美观大方, 既美观又实用, 美观别致; dùng như danh từ: 影响美观 (ảnh hưởng mỹ quan).'],
   usage:'N (房屋 / 包装 / 设计) + 美观; 既美观又实用; 美观大方; 影响美观. Không nói 她很美观.',
   collo:['美观大方','既美观又实用','影响美观','美观别致'],
   ex_zh:'金鸡窝很是美观别致。',ex_py:'Jīnjīwō hěn shì měiguān biézhì.',ex_vn:'Ổ gà vàng rất đẹp và độc đáo.',
   exList:[
     {zh:'这套家具设计简单，既美观又实用。',py:'Zhè tào jiājù shèjì jiǎndān, jì měiguān yòu shíyòng.',vn:'Bộ đồ nội thất này thiết kế đơn giản, vừa đẹp vừa thực dụng.'},
     {zh:'墙上乱贴广告，严重影响了城市的美观。',py:'Qiáng shang luàn tiē guǎnggào, yánzhòng yǐngxiǎngle chéngshì de měiguān.',vn:'Dán quảng cáo bừa bãi lên tường ảnh hưởng nghiêm trọng đến mỹ quan đô thị.'},
     {zh:'这个礼品盒包装得美观大方，送人再合适不过了。',py:'Zhège lǐpǐnhé bāozhuāng de měiguān dàfang, sòng rén zài héshì búguò le.',vn:'Hộp quà này được gói đẹp mắt, trang nhã, đem tặng thì không gì hợp hơn.'}
   ],
   colloFull:[
     {zh:'美观大方',py:'měiguān dàfang',vn:'đẹp và trang nhã'},
     {zh:'既美观又实用',py:'jì měiguān yòu shíyòng',vn:'vừa đẹp vừa thực dụng'},
     {zh:'影响美观',py:'yǐngxiǎng měiguān',vn:'ảnh hưởng mỹ quan'},
     {zh:'美观别致',py:'měiguān biézhì',vn:'đẹp và độc đáo'},
     {zh:'外形美观',py:'wàixíng měiguān',vn:'hình dáng đẹp'}
   ],
   patterns:[
     {s:'既美观又实用',m:'Vừa đẹp vừa thực dụng'},
     {s:'影响 + (N的) + 美观',m:'Ảnh hưởng đến vẻ đẹp của …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Căn phòng này tuy không rộng, nhưng được bài trí rất đẹp mắt.',answer:'这个房间虽然不大，但布置得很美观。',answerPy:'Zhège fángjiān suīrán bú dà, dàn bùzhì de hěn měiguān.',
      note:'V + 得 + 很 + adj: bổ ngữ trạng thái.',pair:'V得……'},
     {promptLang:'vi',prompt:'Khi chọn quà, không những phải đẹp mà còn phải thực dụng.',answer:'挑选礼物的时候，不仅要美观，而且要实用。',answerPy:'Tiāoxuǎn lǐwù de shíhou, bùjǐn yào měiguān, érqiě yào shíyòng.',
      note:'不仅……而且……: không những … mà còn ….',pair:'不仅……而且……'}
   ]},

  {n:9,zh:'别致',py:'biézhì',pos:'Tính từ',vn:'độc đáo, mới lạ (đẹp và khác thường)',hv:'biệt trí',em:'🎀',lesson:1,
   explain:['Mới lạ, độc đáo, khác thường một cách đẹp mắt, gây ấn tượng (khen đồ vật, kiểu dáng, cách bài trí).','Hay gặp: 别致的设计 / 发型, 样式别致, 美观别致; luôn mang nghĩa khen.'],
   usage:'N (样式 / 设计 / 装修) + 别致; 别致的 + N; 很是别致.',
   collo:['样式别致','别致的设计','美观别致','别致的发型'],
   ex_zh:'这家咖啡馆的装修很别致。',ex_py:'Zhè jiā kāfēiguǎn de zhuāngxiū hěn biézhì.',ex_vn:'Cách trang trí của quán cà phê này rất độc đáo.',
   exList:[
     {zh:'金鸡窝像件工艺品，很是美观别致。',py:'Jīnjīwō xiàng jiàn gōngyìpǐn, hěn shì měiguān biézhì.',vn:'Ổ gà vàng trông như một món đồ mỹ nghệ, rất đẹp và độc đáo.'},
     {zh:'她的发型很别致，走在街上回头率特别高。',py:'Tā de fàxíng hěn biézhì, zǒu zài jiē shang huítóulǜ tèbié gāo.',vn:'Kiểu tóc của cô ấy rất độc đáo, đi trên phố người ngoái nhìn đặc biệt nhiều.'},
     {zh:'这座桥的设计非常别致，吸引了不少游客前来拍照。',py:'Zhè zuò qiáo de shèjì fēicháng biézhì, xīyǐnle bù shǎo yóukè qiánlái pāizhào.',vn:'Thiết kế của cây cầu này vô cùng độc đáo, thu hút không ít du khách đến chụp ảnh.'}
   ],
   colloFull:[
     {zh:'样式别致',py:'yàngshì biézhì',vn:'kiểu dáng độc đáo'},
     {zh:'别致的设计',py:'biézhì de shèjì',vn:'thiết kế độc đáo'},
     {zh:'美观别致',py:'měiguān biézhì',vn:'đẹp và độc đáo'},
     {zh:'别致的发型',py:'biézhì de fàxíng',vn:'kiểu tóc độc đáo'},
     {zh:'装修别致',py:'zhuāngxiū biézhì',vn:'trang trí độc đáo'}
   ],
   patterns:[
     {s:'N + 很是 + 别致',m:'… rất độc đáo (很是 = rất, văn viết)'},
     {s:'别致的 + 设计 / 装饰',m:'Thiết kế / trang trí độc đáo'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chiếc váy này kiểu dáng độc đáo, giá lại không đắt, chẳng trách bán chạy như vậy.',answer:'这条裙子样式别致，价格又不贵，难怪卖得这么好。',answerPy:'Zhè tiáo qúnzi yàngshì biézhì, jiàgé yòu bú guì, nánguài mài de zhème hǎo.',
      note:'难怪: chẳng trách, hèn gì (đã hiểu ra nguyên nhân).',pair:'难怪……'},
     {promptLang:'vi',prompt:'Tấm thiệp này tuy là tự làm, nhưng độc đáo hơn thiệp mua ở cửa hàng nhiều.',answer:'这张贺卡虽然是自己做的，却比商店里买的别致多了。',answerPy:'Zhè zhāng hèkǎ suīrán shì zìjǐ zuò de, què bǐ shāngdiàn li mǎi de biézhì duō le.',
      note:'A 比 B + adj + 多了: A … hơn B nhiều.',pair:'比……多了'}
   ]},

  {n:10,zh:'浸泡',py:'jìnpào',pos:'Động từ',vn:'ngâm, nhúng',hv:'tẩm phao',em:'🛁',lesson:1,
   explain:['Ngâm lâu một vật trong nước hoặc chất lỏng: 把脚浸泡在水里, 浸泡衣服, 浸泡种子.','Nghĩa bóng: đắm chìm lâu trong một môi trường (浸泡在书海里).'],
   usage:'把 + N + 浸泡在 + 水 / 液体 + 里; N + 浸泡 + thời lượng; 用 + chất lỏng + 浸泡.',
   collo:['浸泡在水里','浸泡衣服','浸泡一夜','用温水浸泡'],
   ex_zh:'我们小时候都喜欢坐在石头上，把脚浸泡在水里。',ex_py:'Wǒmen xiǎoshíhou dōu xǐhuan zuò zài shítou shang, bǎ jiǎo jìnpào zài shuǐ li.',ex_vn:'Hồi nhỏ chúng tôi đều thích ngồi trên hòn đá, ngâm chân xuống nước.',
   exList:[
     {zh:'我们小时候都喜欢坐在石头上，把脚浸泡在水里。',py:'Wǒmen xiǎoshíhou dōu xǐhuan zuò zài shítou shang, bǎ jiǎo jìnpào zài shuǐ li.',vn:'Hồi nhỏ chúng tôi đều thích ngồi trên hòn đá, ngâm chân xuống nước.'},
     {zh:'黄豆要先浸泡一夜，第二天才能磨豆浆。',py:'Huángdòu yào xiān jìnpào yí yè, dì-èr tiān cái néng mò dòujiāng.',vn:'Đậu nành phải ngâm trước một đêm, hôm sau mới xay sữa đậu được.'},
     {zh:'走了一天的路，晚上用热水浸泡一下双脚，别提多舒服了。',py:'Zǒule yì tiān de lù, wǎnshang yòng rèshuǐ jìnpào yíxià shuāng jiǎo, bié tí duō shūfu le.',vn:'Đi bộ cả ngày, tối ngâm hai chân vào nước nóng một lúc thì dễ chịu khỏi phải nói.'}
   ],
   colloFull:[
     {zh:'浸泡在水里',py:'jìnpào zài shuǐ li',vn:'ngâm trong nước'},
     {zh:'浸泡衣服',py:'jìnpào yīfu',vn:'ngâm quần áo'},
     {zh:'浸泡一夜',py:'jìnpào yí yè',vn:'ngâm một đêm'},
     {zh:'用温水浸泡',py:'yòng wēnshuǐ jìnpào',vn:'ngâm bằng nước ấm'},
     {zh:'浸泡种子',py:'jìnpào zhǒngzi',vn:'ngâm hạt giống'}
   ],
   patterns:[
     {s:'把 + N + 浸泡在 + ……里',m:'Ngâm … vào …'},
     {s:'N + 先浸泡 + thời lượng，再……',m:'Ngâm … trước bao lâu, rồi …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trước khi gieo, bà ngoại thường ngâm hạt giống trong nước ấm một ngày.',answer:'播种以前，姥姥常常把种子浸泡在温水里一天。',answerPy:'Bōzhǒng yǐqián, lǎolao chángcháng bǎ zhǒngzi jìnpào zài wēnshuǐ li yì tiān.',
      note:'把 + O + V在 + nơi + thời lượng; 种子 ôn bài 15.',pair:'把……V在……'},
     {promptLang:'vi',prompt:'Quần áo bẩn quá, cậu ngâm trước nửa tiếng rồi hẵng giặt.',answer:'衣服太脏了，你先浸泡半个小时再洗吧。',answerPy:'Yīfu tài zāng le, nǐ xiān jìnpào bàn ge xiǎoshí zài xǐ ba.',
      note:'先……再……: trước … rồi mới ….',pair:'先……再……'}
   ]},

  {n:11,zh:'责怪',py:'zéguài',pos:'Động từ',vn:'trách, trách móc, khiển trách',hv:'trách quái',em:'😠',lesson:1,
   explain:['Trách móc, cho là người khác có lỗi (thường vì chuyện đã xảy ra) — sắc thái cá nhân, không phải phê bình chính thức.','Hay dùng: 责怪 + người, 不要责怪自己, 互相责怪, 受到……的责怪.'],
   usage:'责怪 + người (+ lý do); 别 / 不要 + 责怪……; 受到责怪; 互相责怪.',
   collo:['责怪别人','责怪自己','互相责怪','受到责怪'],
   ex_zh:'老人们见了，就会责怪：“嗨，坐在金鸡窝上，想干吗呀！”',ex_py:'Lǎorénmen jiàn le, jiù huì zéguài: "Hēi, zuò zài Jīnjīwō shang, xiǎng gànmá ya!"',ex_vn:'Các cụ già thấy vậy sẽ trách: "Này, ngồi lên Ổ gà vàng định làm gì hả!"',
   exList:[
     {zh:'老人们见了，就会责怪：“嗨，坐在金鸡窝上，想干吗呀！”',py:'Lǎorénmen jiàn le, jiù huì zéguài: "Hēi, zuò zài Jīnjīwō shang, xiǎng gànmá ya!"',vn:'Các cụ già thấy vậy sẽ trách: "Này, ngồi lên Ổ gà vàng định làm gì hả!"'},
     {zh:'出了问题，大家不要互相责怪，还是先想想怎么解决吧。',py:'Chūle wèntí, dàjiā búyào hùxiāng zéguài, háishi xiān xiǎngxiang zěnme jiějué ba.',vn:'Có chuyện rồi, mọi người đừng trách móc lẫn nhau, hãy nghĩ xem giải quyết thế nào đã.'},
     {zh:'这不是你的错，你用不着责怪自己。',py:'Zhè bú shì nǐ de cuò, nǐ yòngbuzháo zéguài zìjǐ.',vn:'Đây không phải lỗi của cậu, cậu không cần tự trách mình.'}
   ],
   colloFull:[
     {zh:'责怪别人',py:'zéguài biérén',vn:'trách người khác'},
     {zh:'责怪自己',py:'zéguài zìjǐ',vn:'tự trách mình'},
     {zh:'互相责怪',py:'hùxiāng zéguài',vn:'trách móc lẫn nhau'},
     {zh:'受到责怪',py:'shòudào zéguài',vn:'bị trách'},
     {zh:'埋怨责怪',py:'mányuàn zéguài',vn:'oán trách'}
   ],
   patterns:[
     {s:'责怪 + người + (không) + V',m:'Trách ai (vì làm / không làm gì)'},
     {s:'别 / 不要 + 责怪 + 自己',m:'Đừng tự trách mình'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ không những không trách tôi, ngược lại còn an ủi tôi.',answer:'妈妈不但没有责怪我，反而还安慰了我。',answerPy:'Māma búdàn méiyǒu zéguài wǒ, fǎn\'ér hái ānwèile wǒ.',
      note:'不但没有……反而……: không những không … mà ngược lại ….',pair:'不但……反而……'},
     {promptLang:'vi',prompt:'Nếu sớm biết sẽ bị trách, lúc đầu tôi đã không nhận lời anh ta.',answer:'要是早知道会被责怪，当初我就不答应他了。',answerPy:'Yàoshi zǎo zhīdào huì bèi zéguài, dāngchū wǒ jiù bù dāying tā le.',
      note:'要是……就……: nếu … thì …; 当初 ôn bài 6.',pair:'要是……就……'}
   ]},

  {n:12,zh:'嗨',py:'hēi',pos:'Thán từ',vn:'này, ơ kìa (gọi, nhắc nhở, trách nhẹ)',hv:'hải',em:'🗣️',lesson:1,
   explain:['Thán từ dùng để gọi người, gây chú ý, nhắc nhở hoặc trách nhẹ: 嗨，坐在金鸡窝上，想干吗呀！','Khi biểu thị ngạc nhiên, tiếc nuối thường đọc hāi: 嗨，我怎么忘了！ Gần nghĩa 嘿 (bài 12).'],
   usage:'Đứng đầu câu, sau có dấu phẩy: 嗨，……！ Chỉ dùng trong khẩu ngữ.',
   collo:['嗨，你好','嗨，小心','嗨，干吗呢','嗨，快过来'],
   ex_zh:'嗨，坐在金鸡窝上，想干吗呀！',ex_py:'Hēi, zuò zài Jīnjīwō shang, xiǎng gànmá ya!',ex_vn:'Này, ngồi lên Ổ gà vàng định làm gì hả!',
   exList:[
     {zh:'嗨，坐在金鸡窝上，想干吗呀！',py:'Hēi, zuò zài Jīnjīwō shang, xiǎng gànmá ya!',vn:'Này, ngồi lên Ổ gà vàng định làm gì hả!'},
     {zh:'嗨，小心点儿，地上有水！',py:'Hēi, xiǎoxīn diǎnr, dì shang yǒu shuǐ!',vn:'Này, cẩn thận chút, dưới đất có nước!'},
     {zh:'嗨，你怎么又把钥匙忘在家里了？',py:'Hēi, nǐ zěnme yòu bǎ yàoshi wàng zài jiā li le?',vn:'Ơ kìa, sao cậu lại để quên chìa khoá ở nhà nữa rồi?'}
   ],
   colloFull:[
     {zh:'嗨，你好',py:'Hēi, nǐ hǎo',vn:'Này, chào cậu'},
     {zh:'嗨，小心',py:'Hēi, xiǎoxīn',vn:'Này, cẩn thận'},
     {zh:'嗨，干吗呢',py:'Hēi, gànmá ne',vn:'Này, đang làm gì đấy'},
     {zh:'嗨，快过来',py:'Hēi, kuài guòlái',vn:'Này, lại đây mau'},
     {zh:'嗨，别闹了',py:'Hēi, bié nào le',vn:'Này, đừng quậy nữa'}
   ],
   patterns:[
     {s:'嗨，+ lời gọi / nhắc nhở',m:'Này, … (gây chú ý)'},
     {s:'嗨，+ câu trách / câu hỏi ngạc nhiên',m:'Ơ kìa, … (trách nhẹ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Này, đừng ngồi lên hòn đá đó, nguy hiểm lắm!',answer:'嗨，别坐在那块石头上，太危险了！',answerPy:'Hēi, bié zuò zài nà kuài shítou shang, tài wēixiǎn le!',
      note:'别 + V: đừng …; 太……了: … quá.',pair:'太……了'},
     {promptLang:'vi',prompt:'Này, cậu đến rồi à? Mọi người đợi cậu nãy giờ đấy.',answer:'嗨，你来了？大家等你半天了。',answerPy:'Hēi, nǐ lái le? Dàjiā děng nǐ bàntiān le.',
      note:'V + 时量 + 了: đã … được bao lâu (vẫn đang tiếp diễn).',pair:'V + 时量 + 了'}
   ]},

  {n:13,zh:'祖父',py:'zǔfù',pos:'Danh từ',vn:'ông nội',hv:'tổ phụ',em:'👴',lesson:1,
   explain:['Ông nội (cha của cha) — văn viết; khẩu ngữ gọi 爷爷.','祖父的祖父 = ông nội của ông nội; 祖父母 = ông bà nội; 外祖父 = ông ngoại (khẩu ngữ 姥爷 / 外公).'],
   usage:'我的祖父; 祖父母; 外祖父; 祖父的祖父. Dùng trong văn viết, tiểu sử, lời giới thiệu trang trọng.',
   collo:['祖父母','外祖父','祖父的祖父','我的祖父'],
   ex_zh:'姥爷祖父的祖父宋家有几兄弟。',ex_py:'Lǎoye zǔfù de zǔfù Sòng jiā yǒu jǐ xiōngdì.',ex_vn:'Đời ông nội của ông nội ông ngoại, nhà họ Tống có mấy anh em.',
   exList:[
     {zh:'姥爷祖父的祖父宋家有几兄弟，大家起早贪黑，废寝忘食。',py:'Lǎoye zǔfù de zǔfù Sòng jiā yǒu jǐ xiōngdì, dàjiā qǐzǎo-tānhēi, fèiqǐn-wàngshí.',vn:'Đời ông nội của ông nội ông ngoại, nhà họ Tống có mấy anh em, ai nấy thức khuya dậy sớm, quên ăn quên ngủ.'},
     {zh:'我的祖父在将近三十岁时才找到第一份工作。',py:'Wǒ de zǔfù zài jiāngjìn sānshí suì shí cái zhǎodào dì-yī fèn gōngzuò.',vn:'Ông nội tôi gần ba mươi tuổi mới tìm được công việc đầu tiên.'},
     {zh:'祖父母年纪大了，我们每个周末都回去看望他们。',py:'Zǔfùmǔ niánjì dà le, wǒmen měi ge zhōumò dōu huíqù kànwàng tāmen.',vn:'Ông bà nội đã có tuổi, cuối tuần nào chúng tôi cũng về thăm ông bà.'}
   ],
   colloFull:[
     {zh:'祖父母',py:'zǔfùmǔ',vn:'ông bà nội'},
     {zh:'外祖父',py:'wàizǔfù',vn:'ông ngoại'},
     {zh:'祖父的祖父',py:'zǔfù de zǔfù',vn:'ông nội của ông nội'},
     {zh:'我的祖父',py:'wǒ de zǔfù',vn:'ông nội tôi'},
     {zh:'曾祖父',py:'zēngzǔfù',vn:'cụ ông (cha của ông nội)'}
   ],
   patterns:[
     {s:'祖父 = 爷爷 (văn viết)',m:'Ông nội'},
     {s:'外祖父 = 姥爷 / 外公',m:'Ông ngoại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông nội tôi cả đời cần kiệm, chưa bao giờ tiêu tiền bừa bãi.',answer:'我的祖父一辈子勤俭，从来没有乱花过钱。',answerPy:'Wǒ de zǔfù yíbèizi qínjiǎn, cónglái méiyǒu luàn huāguo qián.',
      note:'从来没(有) + V过: chưa bao giờ ….',pair:'从来没……过'},
     {promptLang:'vi',prompt:'Nghe nói ngôi nhà cũ này là do ông nội của ông nội tôi xây.',answer:'听说这座老房子是我祖父的祖父盖的。',answerPy:'Tīngshuō zhè zuò lǎo fángzi shì wǒ zǔfù de zǔfù gài de.',
      note:'是……的: nhấn mạnh người thực hiện.',pair:'是……的'}
   ]},

  {n:14,zh:'废寝忘食',py:'fèiqǐn-wàngshí',pos:'Thành ngữ',vn:'quên ăn quên ngủ',hv:'phế tẩm vong thực',em:'📚',lesson:1,
   explain:['Bỏ cả ngủ (废寝), quên cả ăn (忘食) — hết sức chuyên tâm, chăm chỉ làm việc / học tập.','Thường làm trạng ngữ (废寝忘食地 + V) hoặc bổ ngữ (V得废寝忘食); mang nghĩa khen.'],
   usage:'废寝忘食地 + 工作 / 学习 / 研究; 学习 / 忙 + 得 + 废寝忘食; 废寝忘食的精神.',
   collo:['废寝忘食地工作','废寝忘食地学习','忙得废寝忘食','废寝忘食的精神'],
   ex_zh:'大家起早贪黑，废寝忘食，日子过得还算富裕。',ex_py:'Dàjiā qǐzǎo-tānhēi, fèiqǐn-wàngshí, rìzi guò de hái suàn fùyù.',ex_vn:'Mọi người thức khuya dậy sớm, quên ăn quên ngủ, cuộc sống cũng coi như sung túc.',
   exList:[
     {zh:'大家起早贪黑，废寝忘食，勤劳加勤俭，日子过得还算富裕。',py:'Dàjiā qǐzǎo-tānhēi, fèiqǐn-wàngshí, qínláo jiā qínjiǎn, rìzi guò de hái suàn fùyù.',vn:'Mọi người thức khuya dậy sớm, quên ăn quên ngủ, đã cần cù lại tiết kiệm, cuộc sống cũng coi như sung túc.'},
     {zh:'他很珍惜这个机会，每天废寝忘食地工作。',py:'Tā hěn zhēnxī zhège jīhuì, měitiān fèiqǐn-wàngshí de gōngzuò.',vn:'Ông ấy rất trân trọng cơ hội này, ngày nào cũng làm việc quên ăn quên ngủ.'},
     {zh:'为了准备高考，她学习得废寝忘食，人都瘦了一圈。',py:'Wèile zhǔnbèi gāokǎo, tā xuéxí de fèiqǐn-wàngshí, rén dōu shòule yì quān.',vn:'Để chuẩn bị thi đại học, cô ấy học đến quên ăn quên ngủ, người gầy rộc đi.'}
   ],
   colloFull:[
     {zh:'废寝忘食地工作',py:'fèiqǐn-wàngshí de gōngzuò',vn:'làm việc quên ăn quên ngủ'},
     {zh:'废寝忘食地学习',py:'fèiqǐn-wàngshí de xuéxí',vn:'học quên ăn quên ngủ'},
     {zh:'忙得废寝忘食',py:'máng de fèiqǐn-wàngshí',vn:'bận đến quên ăn quên ngủ'},
     {zh:'废寝忘食的精神',py:'fèiqǐn-wàngshí de jīngshén',vn:'tinh thần quên ăn quên ngủ'},
     {zh:'研究得废寝忘食',py:'yánjiū de fèiqǐn-wàngshí',vn:'nghiên cứu đến quên ăn quên ngủ'}
   ],
   patterns:[
     {s:'废寝忘食地 + V',m:'Làm … quên ăn quên ngủ'},
     {s:'V + 得 + 废寝忘食',m:'… đến mức quên ăn quên ngủ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Để hoàn thành thí nghiệm, các nhà khoa học làm việc quên ăn quên ngủ suốt mấy tháng liền.',answer:'为了完成实验，科学家们接连几个月废寝忘食地工作。',answerPy:'Wèile wánchéng shíyàn, kēxuéjiāmen jiēlián jǐ ge yuè fèiqǐn-wàngshí de gōngzuò.',
      note:'接连 (bài 5) + thời lượng: liên tiếp …; 地 nối trạng ngữ với động từ.',pair:'为了……'},
     {promptLang:'vi',prompt:'Học tập quan trọng thật, nhưng quên ăn quên ngủ sẽ ảnh hưởng đến sức khỏe.',answer:'学习固然重要，但废寝忘食会影响身体健康。',answerPy:'Xuéxí gùrán zhòngyào, dàn fèiqǐn-wàngshí huì yǐngxiǎng shēntǐ jiànkāng.',
      note:'固然……但……: … thì đúng là …, nhưng … (bài 5).',pair:'固然……但……'}
   ]},

  {n:15,zh:'勤俭',py:'qínjiǎn',pos:'Tính từ',vn:'cần kiệm',hv:'cần kiệm',em:'🪙',lesson:1,
   explain:['Cần cù và tiết kiệm (勤 = chăm chỉ, 俭 = tiết kiệm).','Hay gặp: 勤俭节约, 勤俭持家 (cần kiệm lo liệu việc nhà); bài khoá: 勤劳加勤俭 (đã cần cù lại tiết kiệm).'],
   usage:'N (người) + 很 + 勤俭; 勤俭 + 持家 / 节约; 勤俭的 + 传统 / 作风.',
   collo:['勤俭节约','勤俭持家','勤俭的传统','勤劳加勤俭'],
   ex_zh:'加上祖母很勤俭，家里的日子渐渐富裕起来。',ex_py:'Jiāshang zǔmǔ hěn qínjiǎn, jiā li de rìzi jiànjiàn fùyù qǐlái.',ex_vn:'Thêm vào đó bà nội rất cần kiệm, cuộc sống trong nhà dần dần khấm khá lên.',
   exList:[
     {zh:'大家起早贪黑，勤劳加勤俭，日子过得还算富裕。',py:'Dàjiā qǐzǎo-tānhēi, qínláo jiā qínjiǎn, rìzi guò de hái suàn fùyù.',vn:'Mọi người thức khuya dậy sớm, đã cần cù lại tiết kiệm, cuộc sống cũng coi như sung túc.'},
     {zh:'加上祖母很勤俭，家里的日子渐渐富裕起来。',py:'Jiāshang zǔmǔ hěn qínjiǎn, jiā li de rìzi jiànjiàn fùyù qǐlái.',vn:'Thêm vào đó bà nội rất cần kiệm, cuộc sống trong nhà dần dần khấm khá lên.'},
     {zh:'勤俭节约是中华民族的传统美德。',py:'Qínjiǎn jiéyuē shì Zhōnghuá mínzú de chuántǒng měidé.',vn:'Cần kiệm tiết kiệm là mỹ đức truyền thống của dân tộc Trung Hoa.'}
   ],
   colloFull:[
     {zh:'勤俭节约',py:'qínjiǎn jiéyuē',vn:'cần kiệm tiết kiệm'},
     {zh:'勤俭持家',py:'qínjiǎn chíjiā',vn:'cần kiệm lo liệu việc nhà'},
     {zh:'勤俭的传统',py:'qínjiǎn de chuántǒng',vn:'truyền thống cần kiệm'},
     {zh:'勤劳加勤俭',py:'qínláo jiā qínjiǎn',vn:'đã cần cù lại tiết kiệm'},
     {zh:'勤俭朴素',py:'qínjiǎn pǔsù',vn:'cần kiệm, giản dị'}
   ],
   patterns:[
     {s:'勤俭 + 持家 / 节约',m:'Cần kiệm lo việc nhà / tiết kiệm'},
     {s:'勤劳加勤俭',m:'Đã cần cù lại tiết kiệm (bài khoá)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ tôi cần kiệm lo việc nhà, tuy thu nhập không cao nhưng cả nhà chưa bao giờ túng thiếu.',answer:'我妈妈勤俭持家，虽然收入不高，但全家人从来没缺过钱。',answerPy:'Wǒ māma qínjiǎn chíjiā, suīrán shōurù bù gāo, dàn quánjiārén cónglái méi quēguo qián.',
      note:'虽然……但……; 从来没 + V过 = chưa bao giờ ….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cho dù bây giờ cuộc sống sung túc rồi, chúng ta vẫn phải giữ truyền thống cần kiệm.',answer:'即使现在生活富裕了，我们也要保持勤俭的传统。',answerPy:'Jíshǐ xiànzài shēnghuó fùyù le, wǒmen yě yào bǎochí qínjiǎn de chuántǒng.',
      note:'即使……也……: cho dù … cũng ….',pair:'即使……也……'}
   ]},

  {n:16,zh:'富裕',py:'fùyù',pos:'Tính từ',vn:'giàu có, sung túc',hv:'phú dụ',em:'💰',lesson:1,
   explain:['(Tài sản, đời sống) dư dả, giàu có, sung túc.','Hay gặp: 日子 / 生活 + 富裕; 富裕起来 (giàu lên); 富裕的家庭 / 地区; 不富裕 (nói tế nhị: khá eo hẹp).'],
   usage:'生活 / 日子 + 富裕; 富裕起来; 过上富裕的生活; 富裕的 + N.',
   collo:['日子富裕','富裕起来','富裕的家庭','过上富裕的生活'],
   ex_zh:'大家勤劳加勤俭，日子过得还算富裕。',ex_py:'Dàjiā qínláo jiā qínjiǎn, rìzi guò de hái suàn fùyù.',ex_vn:'Mọi người đã cần cù lại tiết kiệm, cuộc sống cũng coi như sung túc.',
   exList:[
     {zh:'加上祖母很勤俭，家里的日子渐渐富裕起来。',py:'Jiāshang zǔmǔ hěn qínjiǎn, jiā li de rìzi jiànjiàn fùyù qǐlái.',vn:'Thêm vào đó bà nội rất cần kiệm, cuộc sống trong nhà dần dần khấm khá lên.'},
     {zh:'改革开放以后，这个小山村的农民渐渐富裕了起来。',py:'Gǎigé kāifàng yǐhòu, zhège xiǎo shāncūn de nóngmín jiànjiàn fùyùle qǐlái.',vn:'Sau cải cách mở cửa, nông dân của làng núi nhỏ này dần dần giàu lên.'},
     {zh:'他虽然出身于并不富裕的家庭，却从不自卑。',py:'Tā suīrán chūshēn yú bìng bú fùyù de jiātíng, què cóng bú zìbēi.',vn:'Anh ấy tuy xuất thân từ một gia đình chẳng mấy khá giả, nhưng chưa bao giờ tự ti.'}
   ],
   colloFull:[
     {zh:'日子富裕',py:'rìzi fùyù',vn:'cuộc sống sung túc'},
     {zh:'富裕起来',py:'fùyù qǐlái',vn:'giàu lên'},
     {zh:'富裕的家庭',py:'fùyù de jiātíng',vn:'gia đình giàu có'},
     {zh:'过上富裕的生活',py:'guòshang fùyù de shēnghuó',vn:'được sống cuộc sống sung túc'},
     {zh:'共同富裕',py:'gòngtóng fùyù',vn:'cùng nhau giàu có'}
   ],
   patterns:[
     {s:'(日子 / 生活) + 富裕起来',m:'(Cuộc sống) khấm khá lên'},
     {s:'过上 + 富裕的生活',m:'Được sống sung túc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Nhờ trồng chè, người dân trong làng ngày càng giàu lên.',answer:'靠种茶，村里的人越来越富裕了。',answerPy:'Kào zhòng chá, cūn li de rén yuè lái yuè fùyù le.',
      note:'靠 + V/N: nhờ vào …; 越来越 + adj: ngày càng ….',pair:'越来越……'},
     {promptLang:'vi',prompt:'Chỉ cần chịu khó làm việc, ai cũng có thể sống cuộc sống sung túc.',answer:'只要肯努力工作，每个人都能过上富裕的生活。',answerPy:'Zhǐyào kěn nǔlì gōngzuò, měi ge rén dōu néng guòshang fùyù de shēnghuó.',
      note:'只要……都 / 就……: chỉ cần … là ….',pair:'只要……就……'}
   ]},

  {n:17,zh:'农历',py:'nónglì',pos:'Danh từ',vn:'âm lịch',hv:'nông lịch',em:'🏮',lesson:1,
   explain:['Âm lịch — lịch truyền thống của Trung Quốc, dựa vào chu kỳ mặt trăng; đối lập với 公历 (dương lịch).','Hay gặp: 农历新年 (Tết âm lịch), 农历正月初一, 农历年将近 (Tết âm lịch sắp đến — bài khoá).'],
   usage:'农历 + tháng / ngày; 农历(新)年; 按农历过生日; 农历和公历.',
   collo:['农历新年','农历正月','按农历算','农历年将近'],
   ex_zh:'农历年将近，宋家三祖爷早早下了地。',ex_py:'Nónglì nián jiāngjìn, Sòng jiā Sān zǔyé zǎozǎo xiàle dì.',ex_vn:'Tết âm lịch sắp đến, ông cụ Ba nhà họ Tống đã ra đồng từ sớm.',
   exList:[
     {zh:'农历年将近，宋家三祖爷早早下了地，突然看到了一窝小鸡。',py:'Nónglì nián jiāngjìn, Sòng jiā Sān zǔyé zǎozǎo xiàle dì, tūrán kàndàole yì wō xiǎo jī.',vn:'Tết âm lịch sắp đến, ông cụ Ba nhà họ Tống ra đồng từ sớm, bỗng thấy một ổ gà con.'},
     {zh:'中秋节是农历八月十五，这一天人们要吃月饼、赏月。',py:'Zhōngqiūjié shì nónglì bā yuè shíwǔ, zhè yì tiān rénmen yào chī yuèbing, shǎng yuè.',vn:'Tết Trung thu là ngày rằm tháng Tám âm lịch, hôm đó mọi người ăn bánh trung thu, ngắm trăng.'},
     {zh:'我奶奶一直按农历过生日，所以每年的日子都不一样。',py:'Wǒ nǎinai yìzhí àn nónglì guò shēngrì, suǒyǐ měi nián de rìzi dōu bù yíyàng.',vn:'Bà tôi luôn tổ chức sinh nhật theo âm lịch, nên ngày mỗi năm đều khác nhau.'}
   ],
   colloFull:[
     {zh:'农历新年',py:'nónglì xīnnián',vn:'Tết âm lịch'},
     {zh:'农历正月',py:'nónglì zhēngyuè',vn:'tháng Giêng âm lịch'},
     {zh:'按农历算',py:'àn nónglì suàn',vn:'tính theo âm lịch'},
     {zh:'农历年将近',py:'nónglì nián jiāngjìn',vn:'Tết âm lịch sắp đến'},
     {zh:'农历和公历',py:'nónglì hé gōnglì',vn:'âm lịch và dương lịch'}
   ],
   patterns:[
     {s:'农历 + X月 + Y日 / 初Y',m:'Ngày … tháng … âm lịch'},
     {s:'按农历 + V',m:'Làm gì theo âm lịch'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Người Việt Nam cũng giống người Trung Quốc, đều ăn Tết theo âm lịch.',answer:'越南人跟中国人一样，也按农历过新年。',answerPy:'Yuènánrén gēn Zhōngguórén yíyàng, yě àn nónglì guò xīnnián.',
      note:'A 跟 B 一样: A giống B.',pair:'跟……一样'},
     {promptLang:'vi',prompt:'Tết âm lịch sắp đến rồi, nhà nào cũng bận dọn dẹp, sắm đồ Tết.',answer:'农历新年快到了，家家户户都忙着打扫卫生、买年货。',answerPy:'Nónglì xīnnián kuài dào le, jiājiā-hùhù dōu mángzhe dǎsǎo wèishēng, mǎi niánhuò.',
      note:'快……了: sắp … rồi; 忙着 + V: bận làm ….',pair:'快……了'}
   ]},

  {n:18,zh:'将近',py:'jiāngjìn',pos:'Phó từ',vn:'gần, sắp tới, xấp xỉ (thời gian, số lượng)',hv:'tương cận',em:'⏳',lesson:1,
   explain:['Gần đến, sắp tới (thời gian): 农历年将近, 将近下午四点时, 天将近黑了.','Gần đạt tới một con số (còn thiếu một chút): 将近 + số lượng — 将近十万字, 将近四千年. 将要 không có cách dùng này.'],
   usage:'将近 + từ thời gian / động từ / tính từ; 将近 + số lượng; N (thời gian) + 将近 (农历年将近).',
   collo:['将近半夜','将近一百人','将近十年','天将近黑了'],
   ex_zh:'中国有将近四千年的有文字记载的历史。',ex_py:'Zhōngguó yǒu jiāngjìn sìqiān nián de yǒu wénzì jìzǎi de lìshǐ.',ex_vn:'Trung Quốc có gần bốn nghìn năm lịch sử có văn tự ghi chép.',
   exList:[
     {zh:'他每天都学习到将近半夜，真令人佩服。',py:'Tā měitiān dōu xuéxí dào jiāngjìn bànyè, zhēn lìng rén pèifú.',vn:'Ngày nào anh ấy cũng học đến gần nửa đêm, thật khiến người ta khâm phục.'},
     {zh:'他们夫妻将近40岁才有了这个孩子，所以特别疼爱。',py:'Tāmen fūqī jiāngjìn sìshí suì cái yǒule zhège háizi, suǒyǐ tèbié téng\'ài.',vn:'Vợ chồng họ gần 40 tuổi mới có đứa con này, nên đặc biệt cưng chiều.'},
     {zh:'这本书将近十万字，不过我一天就看完了。',py:'Zhè běn shū jiāngjìn shíwàn zì, búguò wǒ yì tiān jiù kànwán le.',vn:'Cuốn sách này gần một trăm nghìn chữ, nhưng tôi đọc xong chỉ trong một ngày.'}
   ],
   colloFull:[
     {zh:'将近半夜',py:'jiāngjìn bànyè',vn:'gần nửa đêm'},
     {zh:'将近一百人',py:'jiāngjìn yìbǎi rén',vn:'gần một trăm người'},
     {zh:'将近十年',py:'jiāngjìn shí nián',vn:'gần mười năm'},
     {zh:'天将近黑了',py:'tiān jiāngjìn hēi le',vn:'trời sắp tối'},
     {zh:'农历年将近',py:'nónglì nián jiāngjìn',vn:'Tết âm lịch sắp đến'}
   ],
   patterns:[
     {s:'将近 + số lượng',m:'Gần …, xấp xỉ … (chưa tới hẳn)'},
     {s:'将近 + thời điểm / V',m:'Sắp đến …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Thầy ấy đã dạy ở trường này gần hai mươi năm, học sinh ai cũng kính trọng thầy.',answer:'他在这所学校教书将近二十年了，学生们都很尊敬他。',answerPy:'Tā zài zhè suǒ xuéxiào jiāoshū jiāngjìn èrshí nián le, xuéshengmen dōu hěn zūnjìng tā.',
      note:'V + O + 将近 + thời lượng + 了: đã … được gần bao lâu (vẫn đang tiếp diễn).',pair:'时量补语'},
     {promptLang:'vi',prompt:'Chúng tôi đợi gần một tiếng đồng hồ mà xe buýt vẫn chưa tới.',answer:'我们等了将近一个小时，公交车还是没来。',answerPy:'Wǒmen děngle jiāngjìn yí ge xiǎoshí, gōngjiāochē háishi méi lái.',
      note:'还是 + 没 + V: vẫn chưa ….',pair:'还是……'}
   ]},

  {n:19,zh:'况且',py:'kuàngqiě',pos:'Liên từ',vn:'hơn nữa, vả lại, huống hồ',hv:'huống thả',em:'➕',lesson:1,
   explain:['Đứng đầu phân câu sau, BỔ SUNG thêm một lý do mới ngoài lý do đã nêu (hơn nữa, vả lại) — điểm ngữ pháp 1.','Hay đi với 又 / 也 / 还: ……，况且……又 / 也……; dùng nhiều khi lập luận, thuyết phục.'],
   usage:'Lý do 1，况且 + lý do 2 (+ 又 / 也 / 还)，(kết luận). Không đứng ở phân câu đầu tiên.',
   collo:['况且又不贵','况且也不远','况且还下着雨','况且是周末'],
   ex_zh:'那小鸡仿佛刚出窝没几天，况且是乌黑乌黑的身子，可爱极了。',ex_py:'Nà xiǎo jī fǎngfú gāng chū wō méi jǐ tiān, kuàngqiě shì wūhēi wūhēi de shēnzi, kě\'ài jí le.',ex_vn:'Mấy con gà con ấy dường như mới rời ổ chưa được mấy ngày, hơn nữa lại có thân mình đen nhánh, đáng yêu vô cùng.',
   exList:[
     {zh:'这套房子交通方便，附近有书店，况且房租又不贵，真是再合适不过了。',py:'Zhè tào fángzi jiāotōng fāngbiàn, fùjìn yǒu shūdiàn, kuàngqiě fángzū yòu bú guì, zhēn shì zài héshì búguò le.',vn:'Căn nhà này giao thông thuận tiện, gần đó có hiệu sách, hơn nữa tiền thuê lại không đắt, thật là không gì hợp hơn.'},
     {zh:'上海那么大，况且你又不知道地址，怎么能找到他呢？',py:'Shànghǎi nàme dà, kuàngqiě nǐ yòu bù zhīdào dìzhǐ, zěnme néng zhǎodào tā ne?',vn:'Thượng Hải rộng như vậy, huống hồ cậu lại không biết địa chỉ, làm sao tìm được anh ấy?'},
     {zh:'父亲年龄大了，况且身体也不好，我不放心他一个人去旅行。',py:'Fùqīn niánlíng dà le, kuàngqiě shēntǐ yě bù hǎo, wǒ bú fàngxīn tā yí ge rén qù lǚxíng.',vn:'Bố đã lớn tuổi, vả lại sức khỏe cũng không tốt, tôi không yên tâm để ông đi du lịch một mình.'}
   ],
   colloFull:[
     {zh:'况且又不贵',py:'kuàngqiě yòu bú guì',vn:'hơn nữa lại không đắt'},
     {zh:'况且也不远',py:'kuàngqiě yě bù yuǎn',vn:'vả lại cũng không xa'},
     {zh:'况且还下着雨',py:'kuàngqiě hái xiàzhe yǔ',vn:'huống hồ trời còn đang mưa'},
     {zh:'况且是周末',py:'kuàngqiě shì zhōumò',vn:'hơn nữa lại là cuối tuần'},
     {zh:'况且时间也不早了',py:'kuàngqiě shíjiān yě bù zǎo le',vn:'vả lại cũng muộn rồi'}
   ],
   patterns:[
     {s:'……，况且 + (chủ ngữ) + 又 / 也 / 还……',m:'…, hơn nữa (lại) …'},
     {s:'lý do 1，况且 + lý do 2，kết luận',m:'Nêu hai lý do rồi rút ra kết luận'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm nay trời mưa to, vả lại cậu còn đang ốm, đừng ra ngoài nữa.',answer:'今天下大雨，况且你还生着病，就别出去了。',answerPy:'Jīntiān xià dàyǔ, kuàngqiě nǐ hái shēngzhe bìng, jiù bié chūqù le.',
      note:'况且 + 还: bổ sung lý do thứ hai; 别……了: đừng … nữa.',pair:'别……了'},
     {promptLang:'vi',prompt:'Công việc này tuy vất vả, nhưng tôi rất thích, vả lại lương cũng không thấp.',answer:'这份工作虽然辛苦，但是我很喜欢，况且工资也不低。',answerPy:'Zhè fèn gōngzuò suīrán xīnkǔ, dànshì wǒ hěn xǐhuan, kuàngqiě gōngzī yě bù dī.',
      note:'虽然……但是……，况且……也……: thêm một lý do nữa để giữ công việc.',pair:'虽然……但是……'}
   ]},

  {n:20,zh:'乌黑',py:'wūhēi',pos:'Tính từ',vn:'đen nhánh, đen thui, đen kịt',hv:'ô hắc',em:'🖤',lesson:1,
   explain:['Đen bóng, đen nhánh (tóc, mắt, lông) hoặc đen sẫm, đen kịt (mây, khói).','Là tính từ trạng thái (ôn bài 8: 通红, 雪白): không đi với 很; lặp theo kiểu ABAB: 乌黑乌黑的 (bài khoá).'],
   usage:'乌黑的 + N (头发 / 眼睛 / 云); 乌黑乌黑的 + N; N + 乌黑发亮. Không nói 很乌黑.',
   collo:['乌黑的头发','乌黑发亮','乌黑乌黑的','乌黑的眼睛'],
   ex_zh:'那小鸡是乌黑乌黑的身子，可爱极了。',ex_py:'Nà xiǎo jī shì wūhēi wūhēi de shēnzi, kě\'ài jí le.',ex_vn:'Mấy con gà con ấy thân mình đen nhánh, đáng yêu vô cùng.',
   exList:[
     {zh:'那小鸡仿佛刚出窝没几天，况且是乌黑乌黑的身子，可爱极了。',py:'Nà xiǎo jī fǎngfú gāng chū wō méi jǐ tiān, kuàngqiě shì wūhēi wūhēi de shēnzi, kě\'ài jí le.',vn:'Mấy con gà con ấy dường như mới rời ổ chưa được mấy ngày, hơn nữa lại có thân mình đen nhánh, đáng yêu vô cùng.'},
     {zh:'小女孩有一双乌黑的大眼睛，特别讨人喜欢。',py:'Xiǎo nǚhái yǒu yì shuāng wūhēi de dà yǎnjing, tèbié tǎo rén xǐhuan.',vn:'Cô bé có đôi mắt to đen láy, đặc biệt dễ thương.'},
     {zh:'姥姥年轻时有一头乌黑发亮的长发，如今已经满头白发了。',py:'Lǎolao niánqīng shí yǒu yì tóu wūhēi fāliàng de chángfà, rújīn yǐjīng mǎn tóu báifà le.',vn:'Hồi trẻ bà ngoại có mái tóc dài đen nhánh óng ả, giờ đây đã bạc trắng cả đầu.'}
   ],
   colloFull:[
     {zh:'乌黑的头发',py:'wūhēi de tóufa',vn:'mái tóc đen nhánh'},
     {zh:'乌黑发亮',py:'wūhēi fāliàng',vn:'đen bóng'},
     {zh:'乌黑乌黑的',py:'wūhēi wūhēi de',vn:'đen nhánh (nhấn mạnh)'},
     {zh:'乌黑的眼睛',py:'wūhēi de yǎnjing',vn:'đôi mắt đen láy'},
     {zh:'乌黑的浓烟',py:'wūhēi de nóngyān',vn:'khói đen kịt'}
   ],
   patterns:[
     {s:'乌黑乌黑的 + N',m:'… đen nhánh (lặp ABAB để nhấn mạnh)'},
     {s:'N + 乌黑发亮',m:'… đen bóng'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trời bỗng tối sầm lại, mây đen kịt kéo đến, xem chừng sắp mưa rồi.',answer:'天突然暗了下来，乌黑的云飘了过来，看样子要下雨了。',answerPy:'Tiān tūrán ànle xiàlái, wūhēi de yún piāole guòlái, kàn yàngzi yào xià yǔ le.',
      note:'看样子……: xem chừng …; 要……了: sắp … rồi.',pair:'要……了'},
     {promptLang:'vi',prompt:'Con chó con này toàn thân đen nhánh, chỉ có bốn cái chân là màu trắng.',answer:'这只小狗全身乌黑乌黑的，只有四只脚是白色的。',answerPy:'Zhè zhī xiǎogǒu quánshēn wūhēi wūhēi de, zhǐyǒu sì zhī jiǎo shì báisè de.',
      note:'乌黑乌黑的 làm vị ngữ, không thêm 很; 只有……是……: chỉ có … là ….',pair:'只有……'}
   ]},

  {n:21,zh:'跟随',py:'gēnsuí',pos:'Động từ',vn:'đi theo, theo sau',hv:'căn tuỳ',em:'🐥',lesson:1,
   explain:['Đi theo sau ai / con vật nào: 小鸡跟随着母鸡.','Nghĩa mở rộng: theo ai làm việc, học tập lâu dài: 跟随师傅学手艺. Văn viết hơn 跟.'],
   usage:'跟随 + (着) + người / con vật; 跟随 + người + V; 跟随……多年.',
   collo:['跟随着母鸡','跟随妈妈','跟随老师学习','跟随多年'],
   ex_zh:'那些小鸡跟随妈妈走来走去，可爱极了。',ex_py:'Nàxiē xiǎo jī gēnsuí māma zǒu lái zǒu qù, kě\'ài jí le.',ex_vn:'Những chú gà con ấy đi theo mẹ lăng xăng qua lại, đáng yêu vô cùng.',
   exList:[
     {zh:'小鸡跟随着母鸡，四处寻觅，像是在找食。',py:'Xiǎo jī gēnsuízhe mǔjī, sìchù xúnmì, xiàng shì zài zhǎo shí.',vn:'Gà con đi theo gà mẹ, tìm kiếm khắp nơi, như đang kiếm ăn.'},
     {zh:'他从十几岁起就跟随师傅学习雕刻，至今已经三十年了。',py:'Tā cóng shí jǐ suì qǐ jiù gēnsuí shīfu xuéxí diāokè, zhìjīn yǐjīng sānshí nián le.',vn:'Từ năm mười mấy tuổi ông ấy đã theo thầy học điêu khắc, đến nay đã ba mươi năm.'},
     {zh:'游客们跟随导游参观了故宫。',py:'Yóukèmen gēnsuí dǎoyóu cānguānle Gùgōng.',vn:'Du khách theo hướng dẫn viên tham quan Cố Cung.'}
   ],
   colloFull:[
     {zh:'跟随着母鸡',py:'gēnsuízhe mǔjī',vn:'đi theo gà mẹ'},
     {zh:'跟随妈妈',py:'gēnsuí māma',vn:'theo mẹ'},
     {zh:'跟随老师学习',py:'gēnsuí lǎoshī xuéxí',vn:'theo thầy học'},
     {zh:'跟随多年',py:'gēnsuí duō nián',vn:'theo nhiều năm'},
     {zh:'跟随导游',py:'gēnsuí dǎoyóu',vn:'theo hướng dẫn viên'}
   ],
   patterns:[
     {s:'跟随(着) + N',m:'Đi theo sau …'},
     {s:'跟随 + người + V',m:'Theo ai làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa ra khỏi ga, chúng tôi liền theo hướng dẫn viên lên xe khách.',answer:'一出车站，我们就跟随导游上了大巴。',answerPy:'Yì chū chēzhàn, wǒmen jiù gēnsuí dǎoyóu shàngle dàbā.',
      note:'一……就……: vừa … là ….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Con chó nhỏ ngày nào cũng theo sau chủ, chủ đi đâu nó theo đó.',answer:'小狗每天都跟随着主人，主人走到哪儿，它就跟到哪儿。',answerPy:'Xiǎogǒu měitiān dōu gēnsuízhe zhǔrén, zhǔrén zǒu dào nǎr, tā jiù gēn dào nǎr.',
      note:'Đại từ nghi vấn dùng liền nhau: 哪儿……哪儿…… (đâu … đấy).',pair:'哪儿……哪儿……'}
   ]},

  {n:22,zh:'寻觅',py:'xúnmì',pos:'Động từ',vn:'tìm kiếm',hv:'tầm mịch',em:'🔍',lesson:1,
   explain:['Tìm kiếm — văn viết, sắc thái văn chương hơn 寻找 / 找.','Thường là tìm cái khó thấy hoặc tìm lâu: 寻觅食物, 寻觅知音, 四处寻觅.'],
   usage:'寻觅 + N (食物 / 踪迹 / 知音 / 机会); 四处寻觅; 苦苦寻觅.',
   collo:['四处寻觅','寻觅食物','苦苦寻觅','寻觅知音'],
   ex_zh:'小鸡跟随着母鸡，四处寻觅，像是在找食。',ex_py:'Xiǎo jī gēnsuízhe mǔjī, sìchù xúnmì, xiàng shì zài zhǎo shí.',ex_vn:'Gà con đi theo gà mẹ, tìm kiếm khắp nơi, như đang kiếm ăn.',
   exList:[
     {zh:'那小鸡可爱极了，跟随着母鸡，四处寻觅，像是在找食。',py:'Nà xiǎo jī kě\'ài jí le, gēnsuízhe mǔjī, sìchù xúnmì, xiàng shì zài zhǎo shí.',vn:'Mấy con gà con ấy đáng yêu vô cùng, đi theo gà mẹ, tìm kiếm khắp nơi, như đang kiếm ăn.'},
     {zh:'他苦苦寻觅了多年，终于找到了失散的亲人。',py:'Tā kǔkǔ xúnmìle duō nián, zhōngyú zhǎodàole shīsàn de qīnrén.',vn:'Anh ấy khổ công tìm kiếm nhiều năm, cuối cùng đã tìm được người thân thất lạc.'},
     {zh:'人生难得遇到一个知音，很多人寻觅一辈子也找不到。',py:'Rénshēng nándé yùdào yí ge zhīyīn, hěn duō rén xúnmì yíbèizi yě zhǎo bu dào.',vn:'Đời người hiếm khi gặp được một tri âm, nhiều người tìm cả đời cũng không thấy.'}
   ],
   colloFull:[
     {zh:'四处寻觅',py:'sìchù xúnmì',vn:'tìm kiếm khắp nơi'},
     {zh:'寻觅食物',py:'xúnmì shíwù',vn:'kiếm thức ăn'},
     {zh:'苦苦寻觅',py:'kǔkǔ xúnmì',vn:'khổ công tìm kiếm'},
     {zh:'寻觅知音',py:'xúnmì zhīyīn',vn:'tìm tri âm'},
     {zh:'寻觅踪迹',py:'xúnmì zōngjì',vn:'tìm dấu vết'}
   ],
   patterns:[
     {s:'四处 / 到处 + 寻觅 + N',m:'Tìm kiếm … khắp nơi'},
     {s:'苦苦寻觅 + thời lượng',m:'Khổ công tìm kiếm bao lâu'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mùa đông tuyết rơi dày, chim chóc khó mà tìm được thức ăn.',answer:'冬天大雪纷飞，鸟儿们难以寻觅到食物。',answerPy:'Dōngtiān dàxuě fēnfēi, niǎormen nányǐ xúnmì dào shíwù.',
      note:'难以 + V (bài 14): khó mà ….',pair:'难以……'},
     {promptLang:'vi',prompt:'Dù phải tìm bao lâu, tôi cũng nhất định phải tìm ra con mèo bị lạc ấy.',answer:'不管要寻觅多久，我都一定要找到那只走丢的猫。',answerPy:'Bùguǎn yào xúnmì duō jiǔ, wǒ dōu yídìng yào zhǎodào nà zhī zǒudiū de māo.',
      note:'不管……都……: bất kể … đều ….',pair:'不管……都……'}
   ]},

  {n:23,zh:'颇',py:'pō',pos:'Phó từ',vn:'rất, khá, tương đối',hv:'phả',em:'📈',lesson:1,
   explain:['Phó từ văn viết, nghĩa "khá, rất" (≈ 很 / 相当): 颇感诧异, 颇有兴趣.','Hay đi với động từ tâm lý hoặc 有 / 受: 颇感 + adj / N, 颇有 + N (颇有道理), 颇受欢迎, 颇为 + adj hai âm tiết.'],
   usage:'颇 + 感 / 有 / 受 / 为 + …; 颇 + adj (văn viết). Không dùng trong khẩu ngữ thân mật.',
   collo:['颇感诧异','颇有道理','颇感兴趣','颇为满意'],
   ex_zh:'三祖爷颇感诧异。',ex_py:'Sān zǔyé pō gǎn chàyì.',ex_vn:'Ông cụ Ba lấy làm lạ lắm.',
   exList:[
     {zh:'三祖爷颇感诧异，大冬天的，这里离村子又远，分明不该有这么小的鸡仔呀！',py:'Sān zǔyé pō gǎn chàyì, dà dōngtiān de, zhèli lí cūnzi yòu yuǎn, fēnmíng bù gāi yǒu zhème xiǎo de jīzǎi ya!',vn:'Ông cụ Ba lấy làm lạ lắm: giữa mùa đông giá rét, chỗ này lại xa làng, rõ ràng không thể có gà con nhỏ như vậy!'},
     {zh:'他对中国京剧颇感兴趣，所以参加了一个京剧培训班。',py:'Tā duì Zhōngguó jīngjù pō gǎn xìngqù, suǒyǐ cānjiāle yí ge jīngjù péixùnbān.',vn:'Anh ấy khá hứng thú với Kinh kịch Trung Quốc, nên đã tham gia một lớp học Kinh kịch.'},
     {zh:'老师的这番话颇有道理，让我们深受启发。',py:'Lǎoshī de zhè fān huà pō yǒu dàolǐ, ràng wǒmen shēn shòu qǐfā.',vn:'Lời thầy nói rất có lý, khiến chúng tôi được gợi mở sâu sắc.'}
   ],
   colloFull:[
     {zh:'颇感诧异',py:'pō gǎn chàyì',vn:'lấy làm lạ lắm'},
     {zh:'颇有道理',py:'pō yǒu dàolǐ',vn:'khá có lý'},
     {zh:'颇感兴趣',py:'pō gǎn xìngqù',vn:'khá hứng thú'},
     {zh:'颇为满意',py:'pōwéi mǎnyì',vn:'khá hài lòng'},
     {zh:'颇受欢迎',py:'pō shòu huānyíng',vn:'khá được ưa chuộng'}
   ],
   patterns:[
     {s:'颇 + 感 + adj / N',m:'Cảm thấy khá … (văn viết)'},
     {s:'颇有 + N / 颇受 + N',m:'Khá có … / khá được …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cuốn tiểu thuyết này sau khi xuất bản được độc giả khá hoan nghênh.',answer:'这部小说出版后颇受读者欢迎。',answerPy:'Zhè bù xiǎoshuō chūbǎn hòu pō shòu dúzhě huānyíng.',
      note:'受……欢迎: được … hoan nghênh; 颇 thay 很 trong văn viết.',pair:'受……欢迎'},
     {promptLang:'vi',prompt:'Đối với kết quả kỳ thi lần này, bố mẹ tôi khá hài lòng.',answer:'对于这次的考试成绩，我父母颇为满意。',answerPy:'Duìyú zhè cì de kǎoshì chéngjì, wǒ fùmǔ pōwéi mǎnyì.',
      note:'对于……: đối với …; 颇为 + tính từ hai âm tiết.',pair:'对于……'}
   ]},

  {n:24,zh:'分明',py:'fēnmíng',pos:'Phó từ / Tính từ',vn:'rõ ràng là, rành rành; rõ ràng, rạch ròi',hv:'phân minh',em:'👁️',lesson:1,
   explain:['Phó từ: rõ ràng, hiển nhiên (sự thật rành rành, thường kèm ý trách hoặc thắc mắc): 他分明是喜欢你的，你怎么感觉不到呢？','Tính từ: rõ ràng, phân biệt rõ — 黑白分明, 爱憎分明, 四季分明. Gần nghĩa 明明 (bài 6).'],
   usage:'Chủ ngữ + 分明 + V / adj……，(怎么 / 却)……？; tính từ: 四季分明, 是非分明.',
   collo:['分明是','分明知道','四季分明','黑白分明'],
   ex_zh:'这里离村子又远，分明不该有这么小的鸡仔呀！',ex_py:'Zhèli lí cūnzi yòu yuǎn, fēnmíng bù gāi yǒu zhème xiǎo de jīzǎi ya!',ex_vn:'Chỗ này lại xa làng, rõ ràng không thể có gà con nhỏ như vậy!',
   exList:[
     {zh:'他分明是喜欢你的，你怎么感觉不到呢？',py:'Tā fēnmíng shì xǐhuan nǐ de, nǐ zěnme gǎnjué bu dào ne?',vn:'Rõ ràng là anh ấy thích cậu, sao cậu lại không cảm nhận được?'},
     {zh:'他分明朝你这个方向走来的，你怎么没看见他呢？',py:'Tā fēnmíng cháo nǐ zhège fāngxiàng zǒulái de, nǐ zěnme méi kànjiàn tā ne?',vn:'Rõ ràng anh ấy đi về phía cậu, sao cậu lại không nhìn thấy anh ấy?'},
     {zh:'这里四季分明，春天花开，秋天叶落，风景各不相同。',py:'Zhèli sìjì fēnmíng, chūntiān huā kāi, qiūtiān yè luò, fēngjǐng gè bù xiāngtóng.',vn:'Nơi đây bốn mùa rõ rệt, mùa xuân hoa nở, mùa thu lá rụng, phong cảnh mỗi mùa mỗi khác.'}
   ],
   colloFull:[
     {zh:'分明是',py:'fēnmíng shì',vn:'rõ ràng là'},
     {zh:'分明知道',py:'fēnmíng zhīdào',vn:'rõ ràng là biết'},
     {zh:'四季分明',py:'sìjì fēnmíng',vn:'bốn mùa rõ rệt'},
     {zh:'黑白分明',py:'hēibái fēnmíng',vn:'trắng đen rõ ràng'},
     {zh:'爱憎分明',py:'àizēng fēnmíng',vn:'yêu ghét rạch ròi'}
   ],
   patterns:[
     {s:'分明 + 是 / V……，(你)怎么……？',m:'Rõ ràng là …, sao lại …?'},
     {s:'N + 分明 (tính từ)',m:'… rõ ràng, rạch ròi'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Rõ ràng là cậu biết chuyện này, sao lại nói là không biết?',answer:'你分明知道这件事，为什么说不知道？',answerPy:'Nǐ fēnmíng zhīdào zhè jiàn shì, wèi shénme shuō bù zhīdào?',
      note:'分明 đứng trước động từ, vế sau là câu hỏi mang ý trách.',pair:'为什么……'},
     {promptLang:'vi',prompt:'Đây rõ ràng là lỗi của nó, vậy mà nó lại đổ trách nhiệm cho người khác.',answer:'这分明是他的错，他却把责任推给了别人。',answerPy:'Zhè fēnmíng shì tā de cuò, tā què bǎ zérèn tuī gěile biérén.',
      note:'分明……，却……: rõ ràng … vậy mà lại …; 把 + O + 推给 + người.',pair:'把……V给……'}
   ]},

  {n:25,zh:'隐蔽',py:'yǐnbì',pos:'Động từ / Tính từ',vn:'ẩn nấp, che giấu; kín đáo, khuất',hv:'ẩn tế',em:'🫣',lesson:1,
   explain:['Động từ: nấp, giấu mình để người khác không thấy: 小鸡想隐蔽自己.','Tính từ: kín đáo, khuất, khó phát hiện: 隐蔽的地方, 位置很隐蔽.'],
   usage:'隐蔽 + 自己; 隐蔽在 + nơi; 隐蔽的 + 地方 / 角落; N + 很隐蔽.',
   collo:['隐蔽自己','隐蔽的地方','隐蔽在草丛里','十分隐蔽'],
   ex_zh:'小鸡想隐蔽自己，跑着往干草丛里扎。',ex_py:'Xiǎo jī xiǎng yǐnbì zìjǐ, pǎozhe wǎng gāncǎocóng li zhā.',ex_vn:'Gà con muốn ẩn mình, chạy lủi vào bụi cỏ khô.',
   exList:[
     {zh:'三祖爷去捉小鸡，小鸡想隐蔽自己，跑着往干草丛里扎。',py:'Sān zǔyé qù zhuō xiǎo jī, xiǎo jī xiǎng yǐnbì zìjǐ, pǎozhe wǎng gāncǎocóng li zhā.',vn:'Ông cụ Ba đi bắt gà con, gà con muốn ẩn mình, chạy lủi vào bụi cỏ khô.'},
     {zh:'这家小饭馆的位置十分隐蔽，不熟悉的人很难找到。',py:'Zhè jiā xiǎo fànguǎn de wèizhi shífēn yǐnbì, bù shúxī de rén hěn nán zhǎodào.',vn:'Quán ăn nhỏ này nằm ở chỗ rất khuất, người không quen khó mà tìm thấy.'},
     {zh:'摄影师们隐蔽在树丛后面，耐心等待雪豹出现。',py:'Shèyǐngshīmen yǐnbì zài shùcóng hòumiàn, nàixīn děngdài xuěbào chūxiàn.',vn:'Các nhiếp ảnh gia nấp sau lùm cây, kiên nhẫn chờ báo tuyết xuất hiện.'}
   ],
   colloFull:[
     {zh:'隐蔽自己',py:'yǐnbì zìjǐ',vn:'ẩn mình'},
     {zh:'隐蔽的地方',py:'yǐnbì de dìfang',vn:'chỗ kín đáo'},
     {zh:'隐蔽在草丛里',py:'yǐnbì zài cǎocóng li',vn:'nấp trong bụi cỏ'},
     {zh:'十分隐蔽',py:'shífēn yǐnbì',vn:'rất kín đáo'},
     {zh:'隐蔽的角落',py:'yǐnbì de jiǎoluò',vn:'góc khuất'}
   ],
   patterns:[
     {s:'隐蔽在 + nơi chốn',m:'Nấp ở …'},
     {s:'N + 的位置很隐蔽',m:'Vị trí của … rất khuất'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Con mèo trốn vào một góc khuất, chúng tôi tìm mãi mới thấy.',answer:'小猫躲在一个隐蔽的角落里，我们找了半天才找到。',answerPy:'Xiǎomāo duǒ zài yí ge yǐnbì de jiǎoluò li, wǒmen zhǎole bàntiān cái zhǎodào.',
      note:'V了半天才……: … mãi mới …; 角落 ôn bài 11.',pair:'……才……'},
     {promptLang:'vi',prompt:'Để không bị động vật phát hiện, chúng tôi phải ẩn nấp thật kỹ.',answer:'为了不被动物发现，我们必须把自己隐蔽好。',answerPy:'Wèile bú bèi dòngwù fāxiàn, wǒmen bìxū bǎ zìjǐ yǐnbì hǎo.',
      note:'为了不被……: để không bị …; 把 + O + V好.',pair:'为了……'}
   ]},

  {n:26,zh:'扎',py:'zhā',pos:'Động từ',vn:'chui vào, lủi vào; đâm, châm',hv:'trát',em:'📌',lesson:1,
   explain:['Chui, lủi, lao vào (một chỗ): 往干草丛里扎, 扎进水里, 一头扎进书堆里.','Đâm, châm (vật nhọn): 手被扎破了, 扎针. Chú ý: đọc zā là "buộc" (扎辫子) — âm khác, nghĩa khác.'],
   usage:'往 + nơi + 里扎; 扎进 + nơi; 被 + vật nhọn + 扎(破)了; 扎针.',
   collo:['往草丛里扎','扎进水里','扎破了手','扎针'],
   ex_zh:'小鸡跑着往干草丛里扎。',ex_py:'Xiǎo jī pǎozhe wǎng gāncǎocóng li zhā.',ex_vn:'Gà con chạy lủi vào bụi cỏ khô.',
   exList:[
     {zh:'小鸡想隐蔽自己，跑着往干草丛里扎。',py:'Xiǎo jī xiǎng yǐnbì zìjǐ, pǎozhe wǎng gāncǎocóng li zhā.',vn:'Gà con muốn ẩn mình, chạy lủi vào bụi cỏ khô.'},
     {zh:'我的手也被扎破了，鲜血直流。',py:'Wǒ de shǒu yě bèi zhāpò le, xiānxuè zhí liú.',vn:'Tay tôi cũng bị đâm rách, máu tươi chảy ròng ròng.'},
     {zh:'一放暑假，他就一头扎进了图书馆，每天看书看到很晚。',py:'Yí fàng shǔjià, tā jiù yì tóu zhājìnle túshūguǎn, měitiān kàn shū kàn dào hěn wǎn.',vn:'Vừa nghỉ hè, cậu ấy liền lao đầu vào thư viện, ngày nào cũng đọc sách đến khuya.'}
   ],
   colloFull:[
     {zh:'往草丛里扎',py:'wǎng cǎocóng li zhā',vn:'lủi vào bụi cỏ'},
     {zh:'扎进水里',py:'zhājìn shuǐ li',vn:'lao xuống nước'},
     {zh:'扎破了手',py:'zhāpòle shǒu',vn:'bị đâm rách tay'},
     {zh:'扎针',py:'zhāzhēn',vn:'châm kim, tiêm'},
     {zh:'一头扎进',py:'yì tóu zhājìn',vn:'lao đầu vào'}
   ],
   patterns:[
     {s:'往 + nơi + 里扎',m:'Chui, lủi vào …'},
     {s:'被 + N + 扎破了',m:'Bị … đâm rách'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vừa nhìn thấy người lạ, con thỏ con liền chui tọt vào hang.',answer:'一看见陌生人，小兔子就往洞里扎。',answerPy:'Yí kànjiàn mòshēngrén, xiǎo tùzi jiù wǎng dòng li zhā.',
      note:'一……就……; 往……里扎 = chui vào ….',pair:'一……就……'},
     {promptLang:'vi',prompt:'Cẩn thận, đừng để gai hoa hồng đâm rách tay.',answer:'小心，别让玫瑰的刺把手扎破了。',answerPy:'Xiǎoxīn, bié ràng méigui de cì bǎ shǒu zhāpò le.',
      note:'别让 + N + 把……V破了: đừng để … làm ….',pair:'别让……'}
   ]},

  {n:27,zh:'砖',py:'zhuān',pos:'Danh từ',vn:'gạch',hv:'chuyên',em:'🧱',lesson:1,
   explain:['Gạch (khối đất nung dùng xây nhà, xây tường): 一块砖, 砖墙, 砖头.','Còn chỉ vật có hình khối như viên gạch: 茶砖 (trà bánh). Lượng từ: 块.'],
   usage:'一块砖; 砖 + 墙 / 房 / 头; 搬砖; 拣起一块砖.',
   collo:['一块砖','砖墙','砖头','搬砖'],
   ex_zh:'三祖爷顺手拣起一块砖撇过去。',ex_py:'Sān zǔyé shùnshǒu jiǎnqǐ yí kuài zhuān piě guòqù.',ex_vn:'Ông cụ Ba tiện tay nhặt một viên gạch ném qua.',
   exList:[
     {zh:'三祖爷顺手拣起一块砖撇过去，一下砸中了一只小鸡。',py:'Sān zǔyé shùnshǒu jiǎnqǐ yí kuài zhuān piě guòqù, yíxià zázhòngle yì zhī xiǎo jī.',vn:'Ông cụ Ba tiện tay nhặt một viên gạch ném qua, trúng ngay một con gà con.'},
     {zh:'这座老房子是用青砖盖的，已经有一百多年的历史了。',py:'Zhè zuò lǎo fángzi shì yòng qīngzhuān gài de, yǐjīng yǒu yìbǎi duō nián de lìshǐ le.',vn:'Ngôi nhà cổ này được xây bằng gạch xanh, đã có hơn một trăm năm lịch sử.'},
     {zh:'工地上的工人们一块一块地搬着砖，忙得满头大汗。',py:'Gōngdì shang de gōngrénmen yí kuài yí kuài de bānzhe zhuān, máng de mǎn tóu dà hàn.',vn:'Công nhân ở công trường chuyển từng viên gạch một, bận đến mồ hôi đầm đìa.'}
   ],
   colloFull:[
     {zh:'一块砖',py:'yí kuài zhuān',vn:'một viên gạch'},
     {zh:'砖墙',py:'zhuānqiáng',vn:'tường gạch'},
     {zh:'砖头',py:'zhuāntou',vn:'viên gạch, gạch vụn'},
     {zh:'搬砖',py:'bān zhuān',vn:'khuân gạch'},
     {zh:'青砖',py:'qīngzhuān',vn:'gạch xanh'}
   ],
   patterns:[
     {s:'一块 + 砖',m:'Một viên gạch'},
     {s:'用 + 砖 + 盖 / 砌',m:'Xây bằng gạch'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bức tường gạch này đã được xây hơn năm mươi năm rồi.',answer:'这面砖墙已经砌了五十多年了。',answerPy:'Zhè miàn zhuānqiáng yǐjīng qìle wǔshí duō nián le.',
      note:'已经……了: đã … rồi; số + 多 + 年: hơn … năm.',pair:'已经……了'},
     {promptLang:'vi',prompt:'Đừng tuỳ tiện ném gạch, lỡ đập trúng người khác thì làm sao?',answer:'别随便扔砖头，万一砸伤了别人怎么办？',answerPy:'Bié suíbiàn rēng zhuāntou, wànyī záshāngle biérén zěnme bàn?',
      note:'万一……怎么办: lỡ … thì làm sao.',pair:'万一……'}
   ]},

  {n:28,zh:'拣',py:'jiǎn',pos:'Động từ',vn:'nhặt, lượm; chọn, lựa',hv:'giản',em:'🤏',lesson:1,
   explain:['Nhặt, lượm lên (≈ 捡): 拣起一块砖, 拣个树枝.','Còn nghĩa "chọn, lựa" (≈ 挑): 拣重要的说, 挑肥拣瘦 (kén cá chọn canh).'],
   usage:'拣 + 起 / 起来 + N; 顺手拣起……; 拣 + adj + 的 + V (chọn cái … mà làm).',
   collo:['拣起来','顺手拣起','拣树枝','拣重要的说'],
   ex_zh:'三祖爷只好拣个树枝当拐杖拄着。',ex_py:'Sān zǔyé zhǐhǎo jiǎn ge shùzhī dàng guǎizhàng zhǔzhe.',ex_vn:'Ông cụ Ba đành nhặt một cành cây làm gậy chống.',
   exList:[
     {zh:'三祖爷顺手拣起一块砖撇过去。',py:'Sān zǔyé shùnshǒu jiǎnqǐ yí kuài zhuān piě guòqù.',vn:'Ông cụ Ba tiện tay nhặt một viên gạch ném qua.'},
     {zh:'时间不多了，你拣重要的说吧。',py:'Shíjiān bù duō le, nǐ jiǎn zhòngyào de shuō ba.',vn:'Không còn nhiều thời gian nữa, cậu chọn chuyện quan trọng mà nói thôi.'},
     {zh:'孩子们在海边拣贝壳，玩儿得开心极了。',py:'Háizimen zài hǎibiān jiǎn bèiké, wánr de kāixīn jí le.',vn:'Bọn trẻ nhặt vỏ sò ở bờ biển, chơi vui vô cùng.'}
   ],
   colloFull:[
     {zh:'拣起来',py:'jiǎn qǐlái',vn:'nhặt lên'},
     {zh:'顺手拣起',py:'shùnshǒu jiǎnqǐ',vn:'tiện tay nhặt lên'},
     {zh:'拣树枝',py:'jiǎn shùzhī',vn:'nhặt cành cây'},
     {zh:'拣重要的说',py:'jiǎn zhòngyào de shuō',vn:'chọn chuyện quan trọng mà nói'},
     {zh:'拣贝壳',py:'jiǎn bèiké',vn:'nhặt vỏ sò'}
   ],
   patterns:[
     {s:'顺手 + 拣起 + N',m:'Tiện tay nhặt …'},
     {s:'拣 + adj + 的 + V',m:'Chọn cái … mà làm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy thấy dưới đất có rác, liền tiện tay nhặt lên bỏ vào thùng rác.',answer:'他看见地上有垃圾，就顺手拣起来扔进了垃圾桶。',answerPy:'Tā kànjiàn dì shang yǒu lājī, jiù shùnshǒu jiǎn qǐlái rēngjìnle lājītǒng.',
      note:'V + 起来: bổ ngữ xu hướng (nhặt lên); V + 进: vào.',pair:'V起来'},
     {promptLang:'vi',prompt:'Ăn cơm đừng kén chọn, không thể chỉ chọn món mình thích mà ăn.',answer:'吃饭别挑食，不能只拣自己喜欢的吃。',answerPy:'Chīfàn bié tiāoshí, bù néng zhǐ jiǎn zìjǐ xǐhuan de chī.',
      note:'不能只……: không thể chỉ ….',pair:'不能只……'}
   ]},

  {n:29,zh:'撇',py:'piě',pos:'Động từ',vn:'quăng, ném (vung tay ném ngang)',hv:'phiết',em:'🥏',lesson:1,
   explain:['Quăng, ném (vung tay ném ngang ra xa): 拣起一块砖撇过去, 撇石子.','Đọc piě còn là nét phẩy (丿) của chữ Hán; 撇嘴 = bĩu môi. Đọc piē: bỏ lại, gạt bỏ (撇开, 撇下).'],
   usage:'撇 + 过去 / 出去 / 到……; 往 + nơi + 一撇; 撇嘴 / 撇了撇嘴.',
   collo:['撇过去','撇石子','撇到河里','撇了撇嘴'],
   ex_zh:'三祖爷顺手拣起一块砖撇过去，一下砸中了一只小鸡。',ex_py:'Sān zǔyé shùnshǒu jiǎnqǐ yí kuài zhuān piě guòqù, yíxià zázhòngle yì zhī xiǎo jī.',ex_vn:'Ông cụ Ba tiện tay nhặt một viên gạch ném qua, trúng ngay một con gà con.',
   exList:[
     {zh:'三祖爷顺手拣起一块砖撇过去，一下砸中了一只小鸡。',py:'Sān zǔyé shùnshǒu jiǎnqǐ yí kuài zhuān piě guòqù, yíxià zázhòngle yì zhī xiǎo jī.',vn:'Ông cụ Ba tiện tay nhặt một viên gạch ném qua, trúng ngay một con gà con.'},
     {zh:'孩子们比赛往河里撇石子，看谁的石子跳得远。',py:'Háizimen bǐsài wǎng hé li piě shízǐ, kàn shéi de shízǐ tiào de yuǎn.',vn:'Bọn trẻ thi ném thia lia xuống sông, xem hòn đá của ai nảy xa hơn.'},
     {zh:'他把手里的纸团往墙角一撇，生气地走了。',py:'Tā bǎ shǒu li de zhǐtuán wǎng qiángjiǎo yì piě, shēngqì de zǒu le.',vn:'Anh ta quăng cục giấy trong tay vào góc tường rồi bực bội bỏ đi.'}
   ],
   colloFull:[
     {zh:'撇过去',py:'piě guòqù',vn:'ném qua'},
     {zh:'撇石子',py:'piě shízǐ',vn:'ném thia lia'},
     {zh:'撇到河里',py:'piě dào hé li',vn:'ném xuống sông'},
     {zh:'撇了撇嘴',py:'piěle piě zuǐ',vn:'bĩu môi'},
     {zh:'往墙角一撇',py:'wǎng qiángjiǎo yì piě',vn:'quăng vào góc tường'}
   ],
   patterns:[
     {s:'拣起 + N + 撇过去',m:'Nhặt … ném qua'},
     {s:'把 + N + 往…… + 一撇',m:'Quăng … về phía …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cậu bé nhặt một hòn đá ném xuống ao, làm lũ vịt sợ chạy mất.',answer:'小男孩拣起一块石头往池塘里一撇，把鸭子吓跑了。',answerPy:'Xiǎo nánhái jiǎnqǐ yí kuài shítou wǎng chítáng li yì piě, bǎ yāzi xiàpǎo le.',
      note:'把 + O + V + bổ ngữ kết quả (吓跑): làm … sợ chạy mất.',pair:'把……V跑了'},
     {promptLang:'vi',prompt:'Nghe tôi nói xong, cô ấy bĩu môi, rõ ràng là không tin.',answer:'听我说完，她撇了撇嘴，分明是不相信。',answerPy:'Tīng wǒ shuōwán, tā piěle piě zuǐ, fēnmíng shì bù xiāngxìn.',
      note:'V了V: động từ lặp (động tác ngắn); 分明是 = rõ ràng là.',pair:'V了V'}
   ]},

  {n:30,zh:'砸',py:'zá',pos:'Động từ',vn:'đập, nện, ném trúng; (khẩu ngữ) làm hỏng',hv:'tạp',em:'🔨',lesson:1,
   explain:['Dùng vật nặng đập, nện; vật rơi / bị ném trúng: 砸中了一只小鸡, 砸核桃, 被石头砸伤.','Khẩu ngữ: làm hỏng, thất bại — 事情办砸了, 考砸了.'],
   usage:'砸 + 中 / 伤 / 坏 / 碎 + N; 被 + N + 砸 + 伤 / 坏; V + 砸了 (làm hỏng).',
   collo:['砸中','砸伤','砸核桃','考砸了'],
   ex_zh:'三祖爷拣起一块砖撇过去，一下砸中了一只小鸡。',ex_py:'Sān zǔyé jiǎnqǐ yí kuài zhuān piě guòqù, yíxià zázhòngle yì zhī xiǎo jī.',ex_vn:'Ông cụ Ba nhặt một viên gạch ném qua, trúng ngay một con gà con.',
   exList:[
     {zh:'小鸡被砸中后就地打了个滚，瞬间变成了一块金子。',py:'Xiǎo jī bèi zázhòng hòu jiùdì dǎle ge gǔn, shùnjiān biànchéngle yí kuài jīnzi.',vn:'Con gà con bị ném trúng liền lăn một vòng tại chỗ, trong chớp mắt biến thành một cục vàng.'},
     {zh:'一块石头从山上滚下来，差点儿砸伤了过路的人。',py:'Yí kuài shítou cóng shān shang gǔn xiàlái, chàdiǎnr záshāngle guòlù de rén.',vn:'Một hòn đá lăn từ trên núi xuống, suýt nữa đập trúng làm bị thương người đi đường.'},
     {zh:'这次考试我考砸了，真不知道怎么跟父母说。',py:'Zhè cì kǎoshì wǒ kǎozá le, zhēn bù zhīdào zěnme gēn fùmǔ shuō.',vn:'Kỳ thi lần này tôi làm hỏng bét rồi, thật không biết phải nói với bố mẹ thế nào.'}
   ],
   colloFull:[
     {zh:'砸中',py:'zázhòng',vn:'ném / đập trúng'},
     {zh:'砸伤',py:'záshāng',vn:'đập bị thương'},
     {zh:'砸核桃',py:'zá hétao',vn:'đập óc chó'},
     {zh:'考砸了',py:'kǎozá le',vn:'thi hỏng'},
     {zh:'办砸了',py:'bànzá le',vn:'làm hỏng việc'}
   ],
   patterns:[
     {s:'砸 + 中 / 伤 / 坏 + N',m:'Đập trúng / làm bị thương / làm hỏng …'},
     {s:'V + 砸了 (khẩu ngữ)',m:'Làm … hỏng bét'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy lỡ làm hỏng việc, sếp không những không trách mà ngược lại còn động viên anh ấy.',answer:'他不小心把事情办砸了，老板不但没责怪他，反而鼓励了他。',answerPy:'Tā bù xiǎoxīn bǎ shìqing bànzá le, lǎobǎn búdàn méi zéguài tā, fǎn\'ér gǔlìle tā.',
      note:'把 + O + V砸了; 不但没……反而…….',pair:'不但……反而……'},
     {promptLang:'vi',prompt:'Một quả táo từ trên cây rơi xuống, vừa khéo trúng đầu anh ấy.',answer:'一个苹果从树上掉下来，恰巧砸中了他的头。',answerPy:'Yí ge píngguǒ cóng shù shang diào xiàlái, qiàqiǎo zázhòngle tā de tóu.',
      note:'恰巧 (bài 4): vừa khéo; V + 下来: bổ ngữ xu hướng.',pair:'恰巧……'}
   ]},

  {n:31,zh:'膝盖',py:'xīgài',pos:'Danh từ',vn:'đầu gối',hv:'tất cái',em:'🦵',lesson:1,
   explain:['Đầu gối (khớp nối đùi và cẳng chân).','Hay gặp: 膝盖受伤 / 摔破了 / 疼; 在……膝盖下边 (phía dưới đầu gối — bài khoá).'],
   usage:'膝盖 + 疼 / 受伤 / 摔破了; 在 + người + 膝盖下边 / 上.',
   collo:['膝盖受伤','膝盖摔破了','膝盖疼','保护膝盖'],
   ex_zh:'老母鸡跳起来在三祖爷膝盖下边就是一口。',ex_py:'Lǎo mǔjī tiào qǐlái zài Sān zǔyé xīgài xiàbian jiù shì yì kǒu.',ex_vn:'Gà mẹ nhảy lên mổ ngay một phát vào dưới đầu gối ông cụ Ba.',
   exList:[
     {zh:'这时候，老母鸡急了，跳起来在三祖爷膝盖下边就是一口。',py:'Zhè shíhou, lǎo mǔjī jí le, tiào qǐlái zài Sān zǔyé xīgài xiàbian jiù shì yì kǒu.',vn:'Lúc ấy, gà mẹ cuống lên, nhảy lên mổ ngay một phát vào dưới đầu gối ông cụ Ba.'},
     {zh:'我从自行车上摔下来，膝盖摔破了，鲜血直流。',py:'Wǒ cóng zìxíngchē shang shuāi xiàlái, xīgài shuāipò le, xiānxuè zhí liú.',vn:'Tôi ngã từ xe đạp xuống, đầu gối trầy rách, máu chảy ròng ròng.'},
     {zh:'爷爷年纪大了，一到下雨天膝盖就疼。',py:'Yéye niánjì dà le, yí dào xià yǔ tiān xīgài jiù téng.',vn:'Ông nội có tuổi rồi, cứ đến ngày mưa là đầu gối lại đau.'}
   ],
   colloFull:[
     {zh:'膝盖受伤',py:'xīgài shòushāng',vn:'đầu gối bị thương'},
     {zh:'膝盖摔破了',py:'xīgài shuāipò le',vn:'đầu gối ngã trầy'},
     {zh:'膝盖疼',py:'xīgài téng',vn:'đau đầu gối'},
     {zh:'保护膝盖',py:'bǎohù xīgài',vn:'bảo vệ đầu gối'},
     {zh:'膝盖以下',py:'xīgài yǐxià',vn:'phần dưới đầu gối'}
   ],
   patterns:[
     {s:'膝盖 + 摔破 / 受伤 + 了',m:'Đầu gối bị trầy / bị thương'},
     {s:'一 + điều kiện + 膝盖就疼',m:'Cứ … là đầu gối đau'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chạy bộ mà không khởi động trước thì rất dễ làm đầu gối bị thương.',answer:'跑步前不做热身运动，很容易让膝盖受伤。',answerPy:'Pǎobù qián bú zuò rèshēn yùndòng, hěn róngyì ràng xīgài shòushāng.',
      note:'很容易 + V: rất dễ …; 让 + N + V: khiến ….',pair:'让……'},
     {promptLang:'vi',prompt:'Đầu gối cậu ấy bị thương, đành phải ngồi một bên xem các bạn đá bóng.',answer:'他的膝盖受伤了，只好坐在一边看同学们踢球。',answerPy:'Tā de xīgài shòushāng le, zhǐhǎo zuò zài yìbiān kàn tóngxuémen tī qiú.',
      note:'只好 + V: đành phải ….',pair:'只好……'}
   ]},

  {n:32,zh:'枝',py:'zhī',pos:'Danh từ',vn:'cành, nhánh (cây); (lượng từ) cành',hv:'chi',em:'🌿',lesson:1,
   explain:['Cành cây, nhánh: 树枝, 枝叶; 拣个树枝当拐杖.','Làm lượng từ cho hoa có cành, vật dài: 一枝花, 一枝笔 (cũng viết 支).'],
   usage:'树枝; 枝叶; 枝头; 一枝 + 花 / 笔; 折 + 树枝.',
   collo:['树枝','枝叶','一枝花','折树枝'],
   ex_zh:'三祖爷只好拣个树枝当拐杖拄着。',ex_py:'Sān zǔyé zhǐhǎo jiǎn ge shùzhī dàng guǎizhàng zhǔzhe.',ex_vn:'Ông cụ Ba đành nhặt một cành cây làm gậy chống.',
   exList:[
     {zh:'三祖爷只好拣个树枝当拐杖拄着，一瘸一拐地回了家。',py:'Sān zǔyé zhǐhǎo jiǎn ge shùzhī dàng guǎizhàng zhǔzhe, yì qué yì guǎi de huíle jiā.',vn:'Ông cụ Ba đành nhặt một cành cây làm gậy chống, khập khiễng đi về nhà.'},
     {zh:'春天到了，树枝上长出了嫩绿的新芽。',py:'Chūntiān dào le, shùzhī shang zhǎngchūle nènlǜ de xīnyá.',vn:'Mùa xuân đến, trên cành cây đã nhú những mầm non xanh mơn mởn.'},
     {zh:'请不要随意折公园里的树枝。',py:'Qǐng búyào suíyì zhé gōngyuán li de shùzhī.',vn:'Xin đừng tuỳ tiện bẻ cành cây trong công viên.'}
   ],
   colloFull:[
     {zh:'树枝',py:'shùzhī',vn:'cành cây'},
     {zh:'枝叶',py:'zhīyè',vn:'cành lá'},
     {zh:'一枝花',py:'yì zhī huā',vn:'một cành hoa'},
     {zh:'折树枝',py:'zhé shùzhī',vn:'bẻ cành cây'},
     {zh:'枝头',py:'zhītóu',vn:'đầu cành'}
   ],
   patterns:[
     {s:'拣 / 折 + 树枝',m:'Nhặt / bẻ cành cây'},
     {s:'一枝 + 花',m:'Một cành hoa (lượng từ)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trên đầu cành có mấy chú chim nhỏ đang hót líu lo.',answer:'枝头上有几只小鸟正叽叽喳喳地叫着。',answerPy:'Zhītóu shang yǒu jǐ zhī xiǎoniǎo zhèng jījizhāzhā de jiàozhe.',
      note:'正……着: đang …; 地 nối trạng ngữ với động từ.',pair:'正……着'},
     {promptLang:'vi',prompt:'Ngày Nhà giáo, tôi tặng cô giáo một cành hoa hồng.',answer:'教师节那天，我送给老师一枝玫瑰花。',answerPy:'Jiàoshī Jié nà tiān, wǒ sòng gěi lǎoshī yì zhī méiguihuā.',
      note:'送给 + người + vật; lượng từ 枝 cho hoa có cành.',pair:'送给……'}
   ]},

  {n:33,zh:'拐杖',py:'guǎizhàng',pos:'Danh từ',vn:'gậy chống, cái nạng',hv:'quải trượng',em:'🦯',lesson:1,
   explain:['Gậy chống khi đi (người già, người bị thương ở chân), nạng.','Hay gặp: 拄拐杖, 当拐杖, 一根拐杖; nghĩa bóng: chỗ dựa (把……当拐杖).'],
   usage:'一根拐杖; 拄着拐杖 + V; 拿 / 拣 + N + 当拐杖.',
   collo:['拄着拐杖','一根拐杖','当拐杖','离不开拐杖'],
   ex_zh:'三祖爷只好拣个树枝当拐杖拄着。',ex_py:'Sān zǔyé zhǐhǎo jiǎn ge shùzhī dàng guǎizhàng zhǔzhe.',ex_vn:'Ông cụ Ba đành nhặt một cành cây làm gậy chống.',
   exList:[
     {zh:'三祖爷路也走不动了，只好拣个树枝当拐杖拄着。',py:'Sān zǔyé lù yě zǒu bu dòng le, zhǐhǎo jiǎn ge shùzhī dàng guǎizhàng zhǔzhe.',vn:'Ông cụ Ba không bước nổi nữa, đành nhặt một cành cây làm gậy chống.'},
     {zh:'爷爷腿脚不好，出门离不开拐杖。',py:'Yéye tuǐjiǎo bù hǎo, chūmén lí bu kāi guǎizhàng.',vn:'Chân ông nội yếu, ra ngoài không thể thiếu gậy.'},
     {zh:'手术后，他拄了将近一个月的拐杖才能正常走路。',py:'Shǒushù hòu, tā zhǔle jiāngjìn yí ge yuè de guǎizhàng cái néng zhèngcháng zǒulù.',vn:'Sau ca phẫu thuật, anh ấy chống nạng gần một tháng mới đi lại bình thường được.'}
   ],
   colloFull:[
     {zh:'拄着拐杖',py:'zhǔzhe guǎizhàng',vn:'chống gậy'},
     {zh:'一根拐杖',py:'yì gēn guǎizhàng',vn:'một cây gậy'},
     {zh:'当拐杖',py:'dàng guǎizhàng',vn:'làm gậy chống'},
     {zh:'离不开拐杖',py:'lí bu kāi guǎizhàng',vn:'không rời được gậy'},
     {zh:'扔掉拐杖',py:'rēngdiào guǎizhàng',vn:'bỏ gậy (tự đi được)'}
   ],
   patterns:[
     {s:'拿 / 拣 + N + 当拐杖',m:'Lấy … làm gậy chống'},
     {s:'拄着拐杖 + V',m:'Chống gậy làm gì'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tuy đã hơn tám mươi tuổi, ông ấy vẫn không cần chống gậy.',answer:'虽然已经八十多岁了，他却还不用拐杖。',answerPy:'Suīrán yǐjīng bāshí duō suì le, tā què hái bú yòng guǎizhàng.',
      note:'虽然……却……: tuy … nhưng vẫn ….',pair:'虽然……但是……'},
     {promptLang:'vi',prompt:'Cuối cùng anh ấy đã có thể bỏ gậy, tự mình bước đi rồi.',answer:'他终于可以扔掉拐杖，自己走路了。',answerPy:'Tā zhōngyú kěyǐ rēngdiào guǎizhàng, zìjǐ zǒulù le.',
      note:'终于: cuối cùng (sau thời gian dài mong đợi); V + 掉: bỏ đi.',pair:'终于……'}
   ]},

  {n:34,zh:'拄',py:'zhǔ',pos:'Động từ',vn:'chống (gậy)',hv:'trụ',em:'🧓',lesson:1,
   explain:['Chống gậy / vật dài xuống đất để đỡ thân mình: 拄拐杖, 拄着棍子.','Thường dùng dạng 拄着 + N + V (vừa chống gậy vừa làm gì); trong bài: 拣个树枝当拐杖拄着.'],
   usage:'拄 + 拐杖 / 棍子 / 树枝; 拄着……走; N + 当拐杖拄着.',
   collo:['拄拐杖','拄着棍子','拄着走','当拐杖拄着'],
   ex_zh:'三祖爷拣个树枝当拐杖拄着，一瘸一拐地回了家。',ex_py:'Sān zǔyé jiǎn ge shùzhī dàng guǎizhàng zhǔzhe, yì qué yì guǎi de huíle jiā.',ex_vn:'Ông cụ Ba nhặt một cành cây làm gậy chống, khập khiễng đi về nhà.',
   exList:[
     {zh:'三祖爷只好拣个树枝当拐杖拄着，一瘸一拐地回了家。',py:'Sān zǔyé zhǐhǎo jiǎn ge shùzhī dàng guǎizhàng zhǔzhe, yì qué yì guǎi de huíle jiā.',vn:'Ông cụ Ba đành nhặt một cành cây làm gậy chống, khập khiễng đi về nhà.'},
     {zh:'奶奶拄着拐杖，慢慢地走到门口来迎接我们。',py:'Nǎinai zhǔzhe guǎizhàng, mànmàn de zǒudào ménkǒu lái yíngjiē wǒmen.',vn:'Bà nội chống gậy, chầm chậm ra tận cửa đón chúng tôi.'},
     {zh:'他腿受了伤，这几天只能拄着拐杖去上课。',py:'Tā tuǐ shòule shāng, zhè jǐ tiān zhǐ néng zhǔzhe guǎizhàng qù shàngkè.',vn:'Cậu ấy bị thương ở chân, mấy hôm nay chỉ có thể chống nạng đi học.'}
   ],
   colloFull:[
     {zh:'拄拐杖',py:'zhǔ guǎizhàng',vn:'chống gậy'},
     {zh:'拄着棍子',py:'zhǔzhe gùnzi',vn:'chống gậy gộc'},
     {zh:'拄着走',py:'zhǔzhe zǒu',vn:'chống mà đi'},
     {zh:'当拐杖拄着',py:'dàng guǎizhàng zhǔzhe',vn:'dùng làm gậy chống'},
     {zh:'拄着树枝',py:'zhǔzhe shùzhī',vn:'chống cành cây'}
   ],
   patterns:[
     {s:'拄着 + 拐杖 + V',m:'Chống gậy mà làm gì'},
     {s:'拿 + N + 当拐杖拄着',m:'Lấy … làm gậy chống'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Ông cụ chống gậy leo lên tận đỉnh núi, thật khiến người ta khâm phục.',answer:'老人拄着拐杖爬上了山顶，真令人佩服。',answerPy:'Lǎorén zhǔzhe guǎizhàng páshangle shāndǐng, zhēn lìng rén pèifú.',
      note:'V着 + V: làm gì trong trạng thái …; 令人 + V: khiến người ta ….',pair:'V着……V'},
     {promptLang:'vi',prompt:'Chân bị sưng, cậu ấy đành chống nạng đi từng bước một.',answer:'脚肿了，他只好拄着拐杖一步一步地走。',answerPy:'Jiǎo zhǒng le, tā zhǐhǎo zhǔzhe guǎizhàng yí bù yí bù de zǒu.',
      note:'一步一步地: từng bước một (lặp cụm số lượng, bài 14).',pair:'一……一……地'}
   ]},

  {n:35,zh:'瘸',py:'qué',pos:'Động từ',vn:'đi khập khiễng, cà nhắc, què',hv:'qua',em:'🩼',lesson:1,
   explain:['Chân bị tật hoặc bị thương nên đi không vững, đi khập khiễng: 腿瘸了, 瘸着腿.','Hay gặp trong cụm tượng hình 一瘸一拐 (khập khiễng, cà nhắc — bài khoá); 瘸子 = người què (khẩu ngữ, thiếu lịch sự).'],
   usage:'一瘸一拐地 + 走; 腿 / 脚 + 瘸了; 瘸着腿 + V.',
   collo:['一瘸一拐','腿瘸了','瘸着腿','走路一瘸一拐的'],
   ex_zh:'三祖爷一瘸一拐地回了家。',ex_py:'Sān zǔyé yì qué yì guǎi de huíle jiā.',ex_vn:'Ông cụ Ba khập khiễng đi về nhà.',
   exList:[
     {zh:'我只好推着自行车一瘸一拐地走回了家。',py:'Wǒ zhǐhǎo tuīzhe zìxíngchē yì qué yì guǎi de zǒuhuíle jiā.',vn:'Tôi đành dắt xe đạp, khập khiễng đi bộ về nhà.'},
     {zh:'他踢球时扭伤了脚，走路一瘸一拐的。',py:'Tā tī qiú shí niǔshāngle jiǎo, zǒulù yì qué yì guǎi de.',vn:'Cậu ấy bị trẹo chân khi đá bóng, đi đứng cà nhắc.'},
     {zh:'那只流浪狗的一条腿瘸了，看上去很可怜。',py:'Nà zhī liúlàng gǒu de yì tiáo tuǐ qué le, kàn shàngqù hěn kělián.',vn:'Con chó hoang ấy bị què một chân, trông rất đáng thương.'}
   ],
   colloFull:[
     {zh:'一瘸一拐',py:'yì qué yì guǎi',vn:'khập khiễng, cà nhắc'},
     {zh:'腿瘸了',py:'tuǐ qué le',vn:'chân bị què'},
     {zh:'瘸着腿',py:'quézhe tuǐ',vn:'lê cái chân què'},
     {zh:'走路一瘸一拐的',py:'zǒulù yì qué yì guǎi de',vn:'đi đứng cà nhắc'},
     {zh:'一瘸一拐地走',py:'yì qué yì guǎi de zǒu',vn:'đi khập khiễng'}
   ],
   patterns:[
     {s:'一瘸一拐地 + V',m:'Khập khiễng làm gì'},
     {s:'N + 走路一瘸一拐的',m:'… đi đứng cà nhắc'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hôm qua đá bóng bị thương, hôm nay cậu ấy khập khiễng đến trường.',answer:'昨天踢球受了伤，今天他一瘸一拐地来到了学校。',answerPy:'Zuótiān tī qiú shòule shāng, jīntiān tā yì qué yì guǎi de láidàole xuéxiào.',
      note:'一瘸一拐地 làm trạng ngữ, nhớ dùng 地.',pair:'……地 + V'},
     {promptLang:'vi',prompt:'Mặc dù chân bị què, ông ấy vẫn ngày nào cũng ra đồng làm việc.',answer:'尽管腿瘸了，他仍然每天下地干活儿。',answerPy:'Jǐnguǎn tuǐ qué le, tā réngrán měitiān xià dì gàn huór.',
      note:'尽管……仍然……: mặc dù … vẫn ….',pair:'尽管……仍然……'}
   ]},

  {n:36,zh:'挖掘',py:'wājué',pos:'Động từ',vn:'đào, đào bới, khai quật; khai thác (tiềm năng)',hv:'oạt quật',em:'⛏️',lesson:1,
   explain:['Đào (đất) để tìm hoặc lấy vật ở bên dưới: 在附近挖掘, 挖掘古墓, 挖掘文物.','Nghĩa bóng: khai thác, tìm ra cái còn ẩn giấu — 挖掘潜力, 挖掘人才.'],
   usage:'在 + nơi + 挖掘; 挖掘 + 文物 / 古墓; 挖掘 + 潜力 / 人才; 挖掘出来.',
   collo:['在附近挖掘','挖掘文物','挖掘潜力','挖掘人才'],
   ex_zh:'大家开始在附近挖掘，挖了个大坑。',ex_py:'Dàjiā kāishǐ zài fùjìn wājué, wāle ge dà kēng.',ex_vn:'Mọi người bắt đầu đào bới quanh đó, đào thành một cái hố lớn.',
   exList:[
     {zh:'大家开始在附近挖掘，挖了个大坑，结果还是没有看到鸡。',py:'Dàjiā kāishǐ zài fùjìn wājué, wāle ge dà kēng, jiéguǒ háishi méiyǒu kàndào jī.',vn:'Mọi người bắt đầu đào bới quanh đó, đào thành một cái hố lớn, rốt cuộc vẫn không thấy gà đâu.'},
     {zh:'考古学家在这里挖掘出了大量两千多年前的文物。',py:'Kǎogǔxuéjiā zài zhèli wājué chūle dàliàng liǎngqiān duō nián qián de wénwù.',vn:'Các nhà khảo cổ đã khai quật được ở đây một lượng lớn cổ vật từ hơn hai nghìn năm trước.'},
     {zh:'好老师善于挖掘每个学生的潜力。',py:'Hǎo lǎoshī shànyú wājué měi ge xuésheng de qiánlì.',vn:'Giáo viên giỏi luôn biết khơi dậy tiềm năng của mỗi học sinh.'}
   ],
   colloFull:[
     {zh:'在附近挖掘',py:'zài fùjìn wājué',vn:'đào bới quanh đó'},
     {zh:'挖掘文物',py:'wājué wénwù',vn:'khai quật cổ vật'},
     {zh:'挖掘潜力',py:'wājué qiánlì',vn:'khai thác tiềm năng'},
     {zh:'挖掘人才',py:'wājué réncái',vn:'phát hiện nhân tài'},
     {zh:'挖掘出来',py:'wājué chūlái',vn:'đào lên được'}
   ],
   patterns:[
     {s:'在 + nơi + 挖掘',m:'Đào bới ở …'},
     {s:'挖掘 + 潜力 / 人才',m:'Khai thác tiềm năng / phát hiện nhân tài'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Công ty này rất coi trọng việc phát hiện và bồi dưỡng những người trẻ có tài.',answer:'这家公司非常重视挖掘和培养有才华的年轻人。',answerPy:'Zhè jiā gōngsī fēicháng zhòngshì wājué hé péiyǎng yǒu cáihuá de niánqīngrén.',
      note:'重视 + V + 和 + V: coi trọng việc … và ….',pair:'重视……'},
     {promptLang:'vi',prompt:'Nếu không khai quật kịp thời, những cổ vật này sẽ bị hư hại nghiêm trọng.',answer:'如果不及时挖掘，这些文物就会受到严重破坏。',answerPy:'Rúguǒ bù jíshí wājué, zhèxiē wénwù jiù huì shòudào yánzhòng pòhuài.',
      note:'如果……就……; 受到 + 破坏 = bị phá hoại.',pair:'如果……就……'}
   ]},

  {n:37,zh:'坑',py:'kēng',pos:'Danh từ',vn:'hố, lỗ',hv:'khanh',em:'🕳️',lesson:1,
   explain:['Chỗ đất lõm sâu xuống, cái hố: 挖了个大坑, 掉进坑里.','Khẩu ngữ (động từ): lừa gạt, gài bẫy làm người khác thiệt — 坑人, 被坑了.'],
   usage:'一个坑; 挖坑; 掉进 + 坑里; 坑坑洼洼 (lồi lõm); 坑人 (lừa người).',
   collo:['挖了个大坑','掉进坑里','坑坑洼洼','坑人'],
   ex_zh:'我不小心掉进了一个大坑。',ex_py:'Wǒ bù xiǎoxīn diàojìnle yí ge dà kēng.',ex_vn:'Tôi không cẩn thận rơi xuống một cái hố lớn.',
   exList:[
     {zh:'上周的一个晚上，我骑着自行车回家，不小心掉进了一个大坑。',py:'Shàng zhōu de yí ge wǎnshang, wǒ qízhe zìxíngchē huí jiā, bù xiǎoxīn diàojìnle yí ge dà kēng.',vn:'Một buổi tối tuần trước, tôi đạp xe về nhà, không cẩn thận rơi xuống một cái hố lớn.'},
     {zh:'下过雨以后，这条土路坑坑洼洼的，很难走。',py:'Xiàguo yǔ yǐhòu, zhè tiáo tǔlù kēngkeng-wāwā de, hěn nán zǒu.',vn:'Sau cơn mưa, con đường đất này lồi lõm, rất khó đi.'},
     {zh:'这家店卖的东西又贵又差，简直是坑人。',py:'Zhè jiā diàn mài de dōngxi yòu guì yòu chà, jiǎnzhí shì kēng rén.',vn:'Đồ cửa hàng này bán vừa đắt vừa kém, đúng là lừa người.'}
   ],
   colloFull:[
     {zh:'挖了个大坑',py:'wāle ge dà kēng',vn:'đào một cái hố lớn'},
     {zh:'掉进坑里',py:'diàojìn kēng li',vn:'rơi xuống hố'},
     {zh:'坑坑洼洼',py:'kēngkeng-wāwā',vn:'lồi lõm, gồ ghề'},
     {zh:'坑人',py:'kēng rén',vn:'lừa người'},
     {zh:'填坑',py:'tián kēng',vn:'lấp hố'}
   ],
   patterns:[
     {s:'掉进 + (一个) + 坑里',m:'Rơi xuống hố'},
     {s:'N + 坑坑洼洼的',m:'… gồ ghề, lồi lõm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trồng cây thì trước hết phải đào hố, rồi mới đặt cây con vào.',answer:'种树要先挖个坑，再把树苗放进去。',answerPy:'Zhòng shù yào xiān wā ge kēng, zài bǎ shùmiáo fàng jìnqù.',
      note:'先……再……; 把 + O + 放进去.',pair:'先……再……'},
     {promptLang:'vi',prompt:'Trời tối quá, cậu đi cẩn thận nhé, kẻo rơi xuống hố.',answer:'天太黑了，你走路小心点儿，免得掉进坑里。',answerPy:'Tiān tài hēi le, nǐ zǒulù xiǎoxīn diǎnr, miǎnde diàojìn kēng li.',
      note:'免得 (bài 14): kẻo, để khỏi.',pair:'免得……'}
   ]},

  {n:38,zh:'发炎',py:'fāyán',pos:'Động từ',vn:'bị viêm, sưng tấy',hv:'phát viêm',em:'🤒',lesson:1,
   explain:['Bị viêm (vết thương, bộ phận cơ thể sưng, đỏ, đau): 伤口发炎, 嗓子发炎.','Hay đi với 一直, 又, 引起: 受伤的腿一直发炎 (bài khoá).'],
   usage:'N (伤口 / 嗓子 / 牙 / 眼睛) + 发炎(了); 一直发炎; 防止发炎.',
   collo:['伤口发炎','嗓子发炎','一直发炎','防止发炎'],
   ex_zh:'三祖爷受伤的腿一直发炎，疼得下不了床。',ex_py:'Sān zǔyé shòushāng de tuǐ yìzhí fāyán, téng de xià bu liǎo chuáng.',ex_vn:'Cái chân bị thương của ông cụ Ba cứ viêm mãi, đau đến không xuống giường được.',
   exList:[
     {zh:'三祖爷受伤的腿一直发炎，疼得下不了床。',py:'Sān zǔyé shòushāng de tuǐ yìzhí fāyán, téng de xià bu liǎo chuáng.',vn:'Cái chân bị thương của ông cụ Ba cứ viêm mãi, đau đến không xuống giường được.'},
     {zh:'伤口一定要保持干净，免得发炎。',py:'Shāngkǒu yídìng yào bǎochí gānjìng, miǎnde fāyán.',vn:'Vết thương nhất định phải giữ sạch sẽ, kẻo bị viêm.'},
     {zh:'我这几天嗓子发炎了，说话都很困难。',py:'Wǒ zhè jǐ tiān sǎngzi fāyán le, shuōhuà dōu hěn kùnnan.',vn:'Mấy hôm nay họng tôi bị viêm, nói chuyện cũng khó khăn.'}
   ],
   colloFull:[
     {zh:'伤口发炎',py:'shāngkǒu fāyán',vn:'vết thương bị viêm'},
     {zh:'嗓子发炎',py:'sǎngzi fāyán',vn:'viêm họng'},
     {zh:'一直发炎',py:'yìzhí fāyán',vn:'viêm mãi'},
     {zh:'防止发炎',py:'fángzhǐ fāyán',vn:'phòng ngừa viêm'},
     {zh:'发炎了',py:'fāyán le',vn:'bị viêm rồi'}
   ],
   patterns:[
     {s:'N (bộ phận) + 发炎了',m:'… bị viêm'},
     {s:'……，免得 / 防止 + 发炎',m:'…, kẻo / để phòng bị viêm'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vết thương của anh ấy vì không được xử lý kịp thời nên đã bị viêm.',answer:'他的伤口因为没有及时处理，所以发炎了。',answerPy:'Tā de shāngkǒu yīnwèi méiyǒu jíshí chǔlǐ, suǒyǐ fāyán le.',
      note:'因为……所以……: vì … nên ….',pair:'因为……所以……'},
     {promptLang:'vi',prompt:'Bác sĩ dặn tôi mấy ngày này vết thương không được dính nước, kẻo bị viêm.',answer:'医生嘱咐我这几天伤口不能沾水，免得发炎。',answerPy:'Yīshēng zhǔfù wǒ zhè jǐ tiān shāngkǒu bù néng zhān shuǐ, miǎnde fāyán.',
      note:'嘱咐 + người + V: dặn ai …; 免得: kẻo.',pair:'免得……'}
   ]},

  {n:39,zh:'咋',py:'zǎ',pos:'Đại từ',vn:'sao, thế nào, tại sao (khẩu ngữ)',hv:'trá',em:'🤔',lesson:1,
   explain:['Đại từ nghi vấn khẩu ngữ (phương ngữ miền Bắc Trung Quốc), bằng 怎么: 咋办 = 怎么办, 咋样 = 怎么样.','Hay dùng trong câu phản vấn: 一个身强力壮的小伙子，咋能光躺在床上呢？ (làm sao có thể …?). Không dùng trong văn viết trang trọng.'],
   usage:'咋 + V (咋办 / 咋说 / 咋能……呢？); ……，咋样？ (hỏi ý kiến); 咋了？ = 怎么了？',
   collo:['咋办','咋样','咋了','咋能……呢'],
   ex_zh:'一个身强力壮的小伙子，咋能光躺在床上呢？',ex_py:'Yí ge shēnqiáng-lìzhuàng de xiǎohuǒzi, zǎ néng guāng tǎng zài chuáng shang ne?',ex_vn:'Một chàng trai khoẻ mạnh cường tráng, sao có thể chỉ nằm lì trên giường được?',
   exList:[
     {zh:'一个身强力壮的小伙子，咋能光躺在床上呢？',py:'Yí ge shēnqiáng-lìzhuàng de xiǎohuǒzi, zǎ néng guāng tǎng zài chuáng shang ne?',vn:'Một chàng trai khoẻ mạnh cường tráng, sao có thể chỉ nằm lì trên giường được?'},
     {zh:'假期我们一起去欧洲玩儿一趟，咋样？',py:'Jiàqī wǒmen yìqǐ qù Ōuzhōu wánr yí tàng, zǎyàng?',vn:'Kỳ nghỉ chúng mình cùng đi châu Âu chơi một chuyến, thế nào?'},
     {zh:'你咋了？脸色这么难看。',py:'Nǐ zǎ le? Liǎnsè zhème nánkàn.',vn:'Cậu sao thế? Sắc mặt khó coi thế.'}
   ],
   colloFull:[
     {zh:'咋办',py:'zǎ bàn',vn:'làm sao đây'},
     {zh:'咋样',py:'zǎyàng',vn:'thế nào'},
     {zh:'咋了',py:'zǎ le',vn:'sao thế'},
     {zh:'咋能……呢',py:'zǎ néng……ne',vn:'sao có thể … được'},
     {zh:'咋回事',py:'zǎ huí shì',vn:'chuyện gì vậy'}
   ],
   patterns:[
     {s:'咋 = 怎么 (khẩu ngữ)',m:'Sao, thế nào'},
     {s:'……，咋能 + V + 呢？',m:'…, sao có thể … được? (phản vấn)'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Trời sắp mưa rồi mà chúng mình lại không mang ô, làm sao bây giờ?',answer:'天快下雨了，咱们又没带伞，咋办？',answerPy:'Tiān kuài xià yǔ le, zánmen yòu méi dài sǎn, zǎ bàn?',
      note:'快……了: sắp … rồi; 咋办 = 怎么办.',pair:'快……了'},
     {promptLang:'vi',prompt:'Cậu là lớp trưởng, sao có thể đến muộn được chứ?',answer:'你是班长，咋能迟到呢？',answerPy:'Nǐ shì bānzhǎng, zǎ néng chídào ne?',
      note:'Câu phản vấn 咋能……呢？ = lẽ ra không được ….',pair:'反问句'}
   ]},

  {n:40,zh:'侥幸',py:'jiǎoxìng',pos:'Tính từ',vn:'may, may mắn (nhờ ngẫu nhiên mà thoát / được lợi)',hv:'kiểu hạnh',em:'🍀',lesson:1,
   explain:['Nhờ ngẫu nhiên mà được lợi hoặc tránh được tai hoạ: 还算侥幸, 侥幸逃过一劫.','侥幸心理 = tâm lý cầu may (nghĩa xấu: trông vào vận may thay vì cố gắng). Khác 幸运: 幸运 là may mắn nói chung, không hàm ý "suýt nữa thì …".'],
   usage:'还算侥幸; 侥幸 + V (逃脱 / 通过 / 没……); 心存侥幸; 侥幸心理.',
   collo:['还算侥幸','侥幸心理','心存侥幸','侥幸逃脱'],
   ex_zh:'还算侥幸，金子换来的钱用完了，三祖爷的腿也好了。',ex_py:'Hái suàn jiǎoxìng, jīnzi huànlái de qián yòngwán le, Sān zǔyé de tuǐ yě hǎo le.',ex_vn:'Cũng coi như may, tiền đổi từ vàng vừa tiêu hết thì chân ông cụ Ba cũng khỏi.',
   exList:[
     {zh:'还算侥幸，金子换来的钱用完了，三祖爷的腿也好了。',py:'Hái suàn jiǎoxìng, jīnzi huànlái de qián yòngwán le, Sān zǔyé de tuǐ yě hǎo le.',vn:'Cũng coi như may, tiền đổi từ vàng vừa tiêu hết thì chân ông cụ Ba cũng khỏi.'},
     {zh:'手也被扎破了，鲜血直流，还算侥幸，骨头没事。',py:'Shǒu yě bèi zhāpò le, xiānxuè zhí liú, hái suàn jiǎoxìng, gǔtou méi shì.',vn:'Tay cũng bị đâm rách, máu chảy ròng ròng, cũng may là xương không sao.'},
     {zh:'考试前不复习，还抱着侥幸心理，结果当然考砸了。',py:'Kǎoshì qián bú fùxí, hái bàozhe jiǎoxìng xīnlǐ, jiéguǒ dāngrán kǎozá le.',vn:'Trước khi thi không ôn bài, lại còn ôm tâm lý cầu may, kết quả đương nhiên thi hỏng.'}
   ],
   colloFull:[
     {zh:'还算侥幸',py:'hái suàn jiǎoxìng',vn:'cũng coi như may'},
     {zh:'侥幸心理',py:'jiǎoxìng xīnlǐ',vn:'tâm lý cầu may'},
     {zh:'心存侥幸',py:'xīn cún jiǎoxìng',vn:'trong lòng cầu may'},
     {zh:'侥幸逃脱',py:'jiǎoxìng táotuō',vn:'may mắn thoát được'},
     {zh:'侥幸取胜',py:'jiǎoxìng qǔshèng',vn:'thắng nhờ may'}
   ],
   patterns:[
     {s:'……，还算侥幸，……',m:'…, cũng coi như may là …'},
     {s:'抱着 / 心存 + 侥幸心理',m:'Mang tâm lý cầu may'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Anh ấy lái xe quá nhanh, may mà không xảy ra tai nạn.',answer:'他开车开得太快了，侥幸没有出事故。',answerPy:'Tā kāichē kāi de tài kuài le, jiǎoxìng méiyǒu chū shìgù.',
      note:'V + O + V + 得 + bổ ngữ; 侥幸 + 没……: may mà không ….',pair:'V得……'},
     {promptLang:'vi',prompt:'Đừng ôm tâm lý cầu may, chỉ có cố gắng mới có thể thành công.',answer:'别抱侥幸心理，只有努力才能成功。',answerPy:'Bié bào jiǎoxìng xīnlǐ, zhǐyǒu nǔlì cái néng chénggōng.',
      note:'只有……才……: chỉ có … mới ….',pair:'只有……才……'}
   ]},

  {n:41,zh:'滋味',py:'zīwèi',pos:'Danh từ',vn:'mùi vị; cảm giác, nỗi (khi trải qua việc gì)',hv:'tư vị',em:'😣',lesson:1,
   explain:['Mùi vị (của thức ăn): 这道菜的滋味很特别.','Nghĩa bóng dùng nhiều hơn: cảm giác khi trải qua một việc — 尝到了……的滋味, 心里不是滋味 (trong lòng khó chịu, áy náy).'],
   usage:'尝到 + ……的滋味; 心里不是滋味; ……的滋味 + 不好受.',
   collo:['尝到滋味','心里不是滋味','失败的滋味','思念的滋味'],
   ex_zh:'三祖爷尝到了久病不愈的滋味。',ex_py:'Sān zǔyé chángdàole jiǔ bìng bú yù de zīwèi.',ex_vn:'Ông cụ Ba đã nếm trải cảm giác ốm lâu không khỏi.',
   exList:[
     {zh:'三祖爷尝到了久病不愈的滋味，后来逢人就说，真是得不偿失。',py:'Sān zǔyé chángdàole jiǔ bìng bú yù de zīwèi, hòulái féng rén jiù shuō, zhēn shì débùchángshī.',vn:'Ông cụ Ba đã nếm trải cảm giác ốm lâu không khỏi, về sau gặp ai cũng nói: thật là được chẳng bõ mất.'},
     {zh:'第一次离开家，我才真正尝到了想家的滋味。',py:'Dì-yī cì líkāi jiā, wǒ cái zhēnzhèng chángdàole xiǎng jiā de zīwèi.',vn:'Lần đầu xa nhà, tôi mới thực sự nếm trải nỗi nhớ nhà.'},
     {zh:'看到妈妈为我操劳，我心里很不是滋味。',py:'Kàndào māma wèi wǒ cāoláo, wǒ xīnli hěn bú shì zīwèi.',vn:'Thấy mẹ tất bật vất vả vì mình, trong lòng tôi rất áy náy.'}
   ],
   colloFull:[
     {zh:'尝到滋味',py:'chángdào zīwèi',vn:'nếm trải mùi vị'},
     {zh:'心里不是滋味',py:'xīnli bú shì zīwèi',vn:'trong lòng khó chịu, áy náy'},
     {zh:'失败的滋味',py:'shībài de zīwèi',vn:'mùi vị thất bại'},
     {zh:'思念的滋味',py:'sīniàn de zīwèi',vn:'nỗi nhớ nhung'},
     {zh:'滋味不好受',py:'zīwèi bù hǎoshòu',vn:'cảm giác khó chịu'}
   ],
   patterns:[
     {s:'尝到了 + ……的滋味',m:'Nếm trải cảm giác …'},
     {s:'心里(很)不是滋味',m:'Trong lòng khó chịu, áy náy'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Chỉ khi đã nếm mùi thất bại, người ta mới biết trân trọng thành công.',answer:'只有尝过失败的滋味，人们才懂得珍惜成功。',answerPy:'Zhǐyǒu chángguo shībài de zīwèi, rénmen cái dǒngde zhēnxī chénggōng.',
      note:'只有……才……: chỉ khi … mới ….',pair:'只有……才……'},
     {promptLang:'vi',prompt:'Bị bạn thân hiểu lầm, trong lòng tôi rất khó chịu.',answer:'被好朋友误会了，我心里很不是滋味。',answerPy:'Bèi hǎo péngyou wùhuì le, wǒ xīnli hěn bú shì zīwèi.',
      note:'被 + người + V: câu bị động.',pair:'被……'}
   ]},

  {n:42,zh:'逢',py:'féng',pos:'Động từ',vn:'gặp, gặp phải; mỗi khi đến (dịp)',hv:'phùng',em:'🤝',lesson:1,
   explain:['Gặp, gặp gỡ (văn viết): 逢人就说 (gặp ai cũng nói), 久别重逢 (gặp lại sau bao năm xa cách).','Mỗi khi đến dịp nào: 每逢 + 节日 — 每逢佳节倍思亲; 逢年过节 (mỗi dịp lễ Tết).'],
   usage:'逢人就 + V; 每逢 + thời điểm / dịp; 逢年过节; 重逢; 相逢.',
   collo:['逢人就说','每逢节日','逢年过节','久别重逢'],
   ex_zh:'三祖爷后来逢人就说，真是得不偿失。',ex_py:'Sān zǔyé hòulái féng rén jiù shuō, zhēn shì débùchángshī.',ex_vn:'Về sau ông cụ Ba gặp ai cũng nói, thật là được chẳng bõ mất.',
   exList:[
     {zh:'三祖爷后来逢人就说，早知道这样，宁肯当初不搭理那窝小鸡。',py:'Sān zǔyé hòulái féng rén jiù shuō, zǎo zhīdào zhèyàng, nìngkěn dāngchū bù dāli nà wō xiǎo jī.',vn:'Về sau ông cụ Ba gặp ai cũng nói: sớm biết thế này, thà lúc đầu đừng đoái hoài gì đến ổ gà con đó.'},
     {zh:'每逢春节，在外地工作的人都要赶回家和家人团圆。',py:'Měi féng Chūnjié, zài wàidì gōngzuò de rén dōu yào gǎn huí jiā hé jiārén tuányuán.',vn:'Mỗi dịp Tết đến, người làm ăn xa đều vội về nhà đoàn tụ với gia đình.'},
     {zh:'两个老同学二十年后久别重逢，激动得说不出话来。',py:'Liǎng ge lǎo tóngxué èrshí nián hòu jiǔbié chóngféng, jīdòng de shuō bu chū huà lái.',vn:'Hai người bạn học cũ gặp lại nhau sau hai mươi năm xa cách, xúc động đến không nói nên lời.'}
   ],
   colloFull:[
     {zh:'逢人就说',py:'féng rén jiù shuō',vn:'gặp ai cũng nói'},
     {zh:'每逢节日',py:'měi féng jiérì',vn:'mỗi dịp lễ'},
     {zh:'逢年过节',py:'féngnián-guòjié',vn:'mỗi dịp lễ Tết'},
     {zh:'久别重逢',py:'jiǔbié chóngféng',vn:'gặp lại sau bao năm xa cách'},
     {zh:'相逢',py:'xiāngféng',vn:'gặp nhau'}
   ],
   patterns:[
     {s:'逢人就 + V',m:'Gặp ai cũng …'},
     {s:'每逢 + dịp，……都……',m:'Mỗi khi đến … đều …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Cứ đến dịp lễ Tết, bà ngoại lại nấu cho chúng tôi rất nhiều món ngon.',answer:'逢年过节，姥姥都会给我们做很多好吃的。',answerPy:'Féngnián-guòjié, lǎolao dōu huì gěi wǒmen zuò hěn duō hǎochī de.',
      note:'给 + người + V: làm gì cho ai; 逢年过节 + 都: cứ đến dịp lễ Tết là ….',pair:'给……V'},
     {promptLang:'vi',prompt:'Từ khi tôi đỗ đại học, bố tôi gặp ai cũng khoe.',answer:'自从我考上大学，爸爸逢人就夸。',answerPy:'Zìcóng wǒ kǎoshang dàxué, bàba féng rén jiù kuā.',
      note:'自从……: từ khi …; 逢人就 + V.',pair:'自从……'}
   ]},

  {n:43,zh:'得不偿失',py:'débùchángshī',pos:'Thành ngữ',vn:'được chẳng bõ mất, lợi bất cập hại',hv:'đắc bất thường thất',em:'⚖️',lesson:1,
   explain:['Cái được không bù nổi cái mất (偿 = bù đắp) — làm một việc mà thiệt nhiều hơn lợi.','Hay làm vị ngữ: 真是得不偿失, 这样做得不偿失; trái nghĩa: 一举两得 (bài 9).'],
   usage:'……，(真是)得不偿失; 这样做 + 得不偿失; 为了……而……，得不偿失.',
   collo:['真是得不偿失','这样做得不偿失','未免得不偿失','得不偿失的事'],
   ex_zh:'三祖爷逢人就说，真是得不偿失。',ex_py:'Sān zǔyé féng rén jiù shuō, zhēn shì débùchángshī.',ex_vn:'Ông cụ Ba gặp ai cũng nói, thật là được chẳng bõ mất.',
   exList:[
     {zh:'三祖爷后来逢人就说，真是得不偿失。',py:'Sān zǔyé hòulái féng rén jiù shuō, zhēn shì débùchángshī.',vn:'Về sau ông cụ Ba gặp ai cũng nói, thật là được chẳng bõ mất.'},
     {zh:'为了省一点儿钱而买质量差的东西，结果很快就坏了，真是得不偿失。',py:'Wèile shěng yìdiǎnr qián ér mǎi zhìliàng chà de dōngxi, jiéguǒ hěn kuài jiù huài le, zhēn shì débùchángshī.',vn:'Vì muốn tiết kiệm chút tiền mà mua đồ kém chất lượng, kết quả hỏng ngay, thật là lợi bất cập hại.'},
     {zh:'为了赚钱而累垮身体，未免得不偿失。',py:'Wèile zhuànqián ér lèikuǎ shēntǐ, wèimiǎn débùchángshī.',vn:'Vì kiếm tiền mà làm kiệt quệ sức khỏe thì e rằng được chẳng bõ mất.'}
   ],
   colloFull:[
     {zh:'真是得不偿失',py:'zhēn shì débùchángshī',vn:'thật là được chẳng bõ mất'},
     {zh:'这样做得不偿失',py:'zhèyàng zuò débùchángshī',vn:'làm vậy lợi bất cập hại'},
     {zh:'未免得不偿失',py:'wèimiǎn débùchángshī',vn:'e là được chẳng bõ mất'},
     {zh:'得不偿失的事',py:'débùchángshī de shì',vn:'việc lợi bất cập hại'},
     {zh:'结果得不偿失',py:'jiéguǒ débùchángshī',vn:'rốt cuộc được không bù mất'}
   ],
   patterns:[
     {s:'为了 A 而 B，真是得不偿失',m:'Vì A mà B, thật là được chẳng bõ mất'},
     {s:'这样做 + 得不偿失',m:'Làm vậy thì lợi bất cập hại'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Vì chơi game mà bỏ bê việc học, thật là được chẳng bõ mất.',answer:'为了玩游戏而耽误学习，真是得不偿失。',answerPy:'Wèile wán yóuxì ér dānwu xuéxí, zhēn shì débùchángshī.',
      note:'为了……而……: vì … mà ….',pair:'为了……而……'},
     {promptLang:'vi',prompt:'Nếu vì một chút lợi nhỏ mà mất đi bạn bè thì chẳng phải là được không bõ mất sao?',answer:'如果为了一点儿小利益而失去朋友，岂不是得不偿失？',answerPy:'Rúguǒ wèile yìdiǎnr xiǎo lìyì ér shīqù péngyou, qǐ bú shì débùchángshī?',
      note:'岂不是……？: chẳng phải là … sao? (phản vấn).',pair:'岂不是……'}
   ]},

  {n:44,zh:'宁肯',py:'nìngkěn',pos:'Phó từ',vn:'thà, thà rằng',hv:'ninh khẳng',em:'🙅',lesson:1,
   explain:['Sau khi so sánh lợi hại, chọn một phương án (dù phải chịu thiệt) — "thà …" (= 宁可, 宁愿).','Hay đi với: 宁肯……也不…… (thà … chứ không …), 早知道这样，宁肯当初…… (sớm biết thế, thà lúc đầu …).'],
   usage:'宁肯 + A，也不 + B; 宁肯 + V (chấp nhận thiệt); 早知道这样，宁肯当初…….',
   collo:['宁肯……也不……','宁肯吃亏','宁肯少赚点儿','宁肯自己辛苦'],
   ex_zh:'早知道这样，宁肯当初不搭理那窝小鸡。',ex_py:'Zǎo zhīdào zhèyàng, nìngkěn dāngchū bù dāli nà wō xiǎo jī.',ex_vn:'Sớm biết thế này, thà lúc đầu đừng đoái hoài gì đến ổ gà con đó.',
   exList:[
     {zh:'为了安全，我宁肯绕远儿走大路。',py:'Wèile ānquán, wǒ nìngkěn rào yuǎnr zǒu dàlù.',vn:'Để an toàn, tôi thà đi vòng xa theo đường lớn.'},
     {zh:'他宁肯自己吃点儿亏，也不愿让朋友吃亏。',py:'Tā nìngkěn zìjǐ chī diǎnr kuī, yě bú yuàn ràng péngyou chī kuī.',vn:'Anh ấy thà mình chịu thiệt một chút, chứ không muốn để bạn bè chịu thiệt.'},
     {zh:'这家老店宁肯少赚点儿钱，也不用便宜的材料。',py:'Zhè jiā lǎodiàn nìngkěn shǎo zhuàn diǎnr qián, yě bú yòng piányi de cáiliào.',vn:'Tiệm lâu năm này thà kiếm ít tiền đi một chút, chứ không dùng nguyên liệu rẻ tiền.'}
   ],
   colloFull:[
     {zh:'宁肯……也不……',py:'nìngkěn……yě bù……',vn:'thà … chứ không …'},
     {zh:'宁肯吃亏',py:'nìngkěn chī kuī',vn:'thà chịu thiệt'},
     {zh:'宁肯少赚点儿',py:'nìngkěn shǎo zhuàn diǎnr',vn:'thà kiếm ít đi một chút'},
     {zh:'宁肯自己辛苦',py:'nìngkěn zìjǐ xīnkǔ',vn:'thà mình vất vả'},
     {zh:'宁肯不要',py:'nìngkěn bú yào',vn:'thà không lấy'}
   ],
   patterns:[
     {s:'宁肯 A，也不 B',m:'Thà A, chứ không B'},
     {s:'早知道……，宁肯当初……',m:'Sớm biết …, thà lúc đầu …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi thà đi bộ về nhà, chứ không muốn ngồi xe của anh ta.',answer:'我宁肯走路回家，也不想坐他的车。',answerPy:'Wǒ nìngkěn zǒulù huí jiā, yě bù xiǎng zuò tā de chē.',
      note:'宁肯……也不……: thà … chứ không … (= 宁可……也不…… đã học ở HSK 5).',pair:'宁可……也不……'},
     {promptLang:'vi',prompt:'Cậu ấy thà thức khuya làm xong bài tập, chứ không chịu chép bài của người khác.',answer:'他宁肯熬夜把作业做完，也不肯抄别人的。',answerPy:'Tā nìngkěn áoyè bǎ zuòyè zuòwán, yě bù kěn chāo biérén de.',
      note:'把 + O + V完; 不肯 = không chịu; 熬夜 (熬 bài 2).',pair:'把……V完'}
   ]},

  {n:45,zh:'告诫',py:'gàojiè',pos:'Động từ',vn:'khuyên răn, răn dạy, căn dặn',hv:'cáo giới',em:'☝️',lesson:1,
   explain:['Khuyên bảo, răn dạy để người khác cảnh giác, đừng phạm sai lầm — thường là người trên với người dưới, thế hệ trước với thế hệ sau.','Văn viết, trang trọng: 告诫 + người + (要 / 不要) + V; 父母的告诫; 再三告诫.'],
   usage:'告诫 + người + 不要 / 要 + V; ……的告诫; 再三告诫; 告诫后人.',
   collo:['告诫后人','再三告诫','告诫孩子','父母的告诫'],
   ex_zh:'三祖爷的故事告诫后人，做人不要欲望太多，不要贪婪。',ex_py:'Sān zǔyé de gùshi gàojiè hòurén, zuò rén búyào yùwàng tài duō, búyào tānlán.',ex_vn:'Câu chuyện của ông cụ Ba răn dạy đời sau: làm người đừng có quá nhiều dục vọng, đừng tham lam.',
   exList:[
     {zh:'三祖爷的故事告诫后人，做人不要欲望太多，不要贪婪。',py:'Sān zǔyé de gùshi gàojiè hòurén, zuò rén búyào yùwàng tài duō, búyào tānlán.',vn:'Câu chuyện của ông cụ Ba răn dạy đời sau: làm người đừng có quá nhiều dục vọng, đừng tham lam.'},
     {zh:'爸爸再三告诫我，开车的时候千万不要看手机。',py:'Bàba zàisān gàojiè wǒ, kāichē de shíhou qiānwàn búyào kàn shǒujī.',vn:'Bố dặn đi dặn lại tôi, khi lái xe tuyệt đối không được xem điện thoại.'},
     {zh:'我一直记着老师的告诫：做学问务必踏踏实实。',py:'Wǒ yìzhí jìzhe lǎoshī de gàojiè: zuò xuéwen wùbì tāta-shíshí.',vn:'Tôi luôn ghi nhớ lời răn của thầy: làm học vấn nhất định phải chắc chắn, thực tế.'}
   ],
   colloFull:[
     {zh:'告诫后人',py:'gàojiè hòurén',vn:'răn dạy đời sau'},
     {zh:'再三告诫',py:'zàisān gàojiè',vn:'khuyên răn nhiều lần'},
     {zh:'告诫孩子',py:'gàojiè háizi',vn:'răn dạy con cái'},
     {zh:'父母的告诫',py:'fùmǔ de gàojiè',vn:'lời răn của cha mẹ'},
     {zh:'严厉告诫',py:'yánlì gàojiè',vn:'nghiêm khắc răn đe'}
   ],
   patterns:[
     {s:'告诫 + người + (千万) 不要 + V',m:'Răn ai đừng …'},
     {s:'……的故事告诫(我们)……',m:'Câu chuyện … răn dạy (ta) …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Mẹ luôn răn tôi rằng, bất kể làm việc gì cũng không được bỏ dở giữa chừng.',answer:'妈妈总是告诫我，不管做什么事都不能半途而废。',answerPy:'Māma zǒngshì gàojiè wǒ, bùguǎn zuò shénme shì dōu bù néng bàntú\'érfèi.',
      note:'不管……都……; 半途而废 = bỏ dở giữa chừng.',pair:'不管……都……'},
     {promptLang:'vi',prompt:'Bác sĩ khuyên ông ấy phải bỏ thuốc lá, nếu không sức khỏe sẽ ngày càng tệ.',answer:'医生告诫他必须戒烟，否则身体会越来越差。',answerPy:'Yīshēng gàojiè tā bìxū jièyān, fǒuzé shēntǐ huì yuè lái yuè chà.',
      note:'否则: nếu không thì.',pair:'否则……'}
   ]},

  {n:46,zh:'欲望',py:'yùwàng',pos:'Danh từ',vn:'dục vọng, ham muốn',hv:'dục vọng',em:'🔥',lesson:1,
   explain:['Mong muốn, ham muốn có được hoặc đạt được điều gì (của cải, danh lợi, hiểu biết…).','Tự thân trung tính: 求知欲望 (ham muốn hiểu biết) là tốt; 欲望太多 / 太强 thì thành xấu. Hay đi với: 满足 / 控制 + 欲望.'],
   usage:'欲望 + 太多 / 强烈; 满足 / 控制 + 欲望; 购买欲望; 求知欲望.',
   collo:['欲望太多','满足欲望','控制欲望','购买欲望'],
   ex_zh:'做人不要欲望太多，不要贪婪。',ex_py:'Zuò rén búyào yùwàng tài duō, búyào tānlán.',ex_vn:'Làm người đừng có quá nhiều dục vọng, đừng tham lam.',
   exList:[
     {zh:'三祖爷的故事告诫后人，做人不要欲望太多。',py:'Sān zǔyé de gùshi gàojiè hòurén, zuò rén búyào yùwàng tài duō.',vn:'Câu chuyện của ông cụ Ba răn dạy đời sau: làm người đừng có quá nhiều dục vọng.'},
     {zh:'人的欲望是无穷的，学会控制欲望才能活得快乐。',py:'Rén de yùwàng shì wúqióng de, xuéhuì kòngzhì yùwàng cái néng huó de kuàilè.',vn:'Dục vọng của con người là vô tận, học được cách kiềm chế dục vọng mới có thể sống vui vẻ.'},
     {zh:'这个广告做得很成功，大大激发了消费者的购买欲望。',py:'Zhège guǎnggào zuò de hěn chénggōng, dàdà jīfāle xiāofèizhě de gòumǎi yùwàng.',vn:'Quảng cáo này làm rất thành công, kích thích mạnh mẽ ham muốn mua sắm của người tiêu dùng.'}
   ],
   colloFull:[
     {zh:'欲望太多',py:'yùwàng tài duō',vn:'quá nhiều dục vọng'},
     {zh:'满足欲望',py:'mǎnzú yùwàng',vn:'thoả mãn ham muốn'},
     {zh:'控制欲望',py:'kòngzhì yùwàng',vn:'kiềm chế dục vọng'},
     {zh:'购买欲望',py:'gòumǎi yùwàng',vn:'ham muốn mua sắm'},
     {zh:'求知欲望',py:'qiúzhī yùwàng',vn:'ham muốn hiểu biết'}
   ],
   patterns:[
     {s:'控制 / 满足 + 欲望',m:'Kiềm chế / thoả mãn dục vọng'},
     {s:'激发 + ……的 + 欲望',m:'Kích thích ham muốn …'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một đứa trẻ có ham muốn hiểu biết mạnh mẽ thì thường học rất nhanh.',answer:'一个求知欲望强烈的孩子往往学得很快。',answerPy:'Yí ge qiúzhī yùwàng qiángliè de háizi wǎngwǎng xué de hěn kuài.',
      note:'往往: thường thường (theo quy luật).',pair:'往往……'},
     {promptLang:'vi',prompt:'Dục vọng càng nhiều, con người càng khó cảm thấy hạnh phúc.',answer:'欲望越多，人就越难感到幸福。',answerPy:'Yùwàng yuè duō, rén jiù yuè nán gǎndào xìngfú.',
      note:'越……越……: càng … càng ….',pair:'越……越……'}
   ]},

  {n:47,zh:'贪婪',py:'tānlán',pos:'Tính từ',vn:'tham lam',hv:'tham lam',em:'🤑',lesson:1,
   explain:['Tham lam vô độ, muốn có thật nhiều mà không biết đủ (nghĩa xấu, văn viết hơn 贪心).','Trong văn chương còn dùng nghĩa "say sưa, hăm hở": 贪婪地吸着新鲜空气 (hít lấy hít để không khí trong lành), 贪婪地读书.'],
   usage:'N + 很 / 十分 + 贪婪; 贪婪的 + N (目光 / 本性); 贪婪地 + V.',
   collo:['不要贪婪','贪婪的目光','贪婪地吸','贪婪的本性'],
   ex_zh:'做人不要欲望太多，不要贪婪。',ex_py:'Zuò rén búyào yùwàng tài duō, búyào tānlán.',ex_vn:'Làm người đừng có quá nhiều dục vọng, đừng tham lam.',
   exList:[
     {zh:'做人不要贪婪。东西不是你的就不要去争夺。',py:'Zuò rén búyào tānlán. Dōngxi bú shì nǐ de jiù búyào qù zhēngduó.',vn:'Làm người đừng tham lam. Thứ gì không phải của mình thì đừng đi tranh giành.'},
     {zh:'那个商人贪婪地盯着桌上的金子，眼睛都亮了。',py:'Nàge shāngrén tānlán de dīngzhe zhuō shang de jīnzi, yǎnjing dōu liàng le.',vn:'Gã thương nhân nhìn chằm chằm đầy tham lam vào đống vàng trên bàn, mắt sáng rực lên.'},
     {zh:'一走出闷热的房间，他就贪婪地呼吸着山里的新鲜空气。',py:'Yì zǒuchū mēnrè de fángjiān, tā jiù tānlán de hūxīzhe shān li de xīnxiān kōngqì.',vn:'Vừa bước ra khỏi căn phòng oi bức, anh ấy liền hít lấy hít để không khí trong lành của núi rừng.'}
   ],
   colloFull:[
     {zh:'不要贪婪',py:'búyào tānlán',vn:'đừng tham lam'},
     {zh:'贪婪的目光',py:'tānlán de mùguāng',vn:'ánh mắt tham lam'},
     {zh:'贪婪地吸',py:'tānlán de xī',vn:'hít lấy hít để'},
     {zh:'贪婪的本性',py:'tānlán de běnxìng',vn:'bản tính tham lam'},
     {zh:'贪婪无比',py:'tānlán wúbǐ',vn:'tham lam vô độ'}
   ],
   patterns:[
     {s:'贪婪地 + V',m:'… một cách tham lam / say sưa'},
     {s:'贪婪的 + 目光 / 本性',m:'Ánh mắt / bản tính tham lam'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Hắn tham lam như vậy, sớm muộn gì cũng sẽ gặp hoạ.',answer:'他这么贪婪，早晚会惹祸的。',answerPy:'Tā zhème tānlán, zǎowǎn huì rě huò de.',
      note:'早晚 = sớm muộn; 惹祸 ôn bài 12; 会……的: chắc chắn sẽ ….',pair:'会……的'},
     {promptLang:'vi',prompt:'Trong truyện cổ tích, người anh tham lam cuối cùng đã mất hết tất cả.',answer:'在童话里，那个贪婪的哥哥最后失去了一切。',answerPy:'Zài tónghuà li, nàge tānlán de gēge zuìhòu shīqùle yíqiè.',
      note:'童话 ôn bài 16; 最后: cuối cùng.',pair:'最后……'}
   ]},

  {n:48,zh:'争夺',py:'zhēngduó',pos:'Động từ',vn:'tranh giành, giành giật',hv:'tranh đoạt',em:'🥊',lesson:1,
   explain:['Tranh nhau giành lấy cái mà người khác cũng muốn: 争夺财产, 争夺冠军, 争夺市场.','Mạnh hơn 争; thường hàm ý cạnh tranh gay gắt. Bài khoá: 东西不是你的就不要去争夺.'],
   usage:'争夺 + N (冠军 / 财产 / 市场 / 资源); 为了争夺……而……; 激烈争夺.',
   collo:['争夺冠军','争夺财产','争夺市场','激烈争夺'],
   ex_zh:'东西不是你的就不要去争夺，就是争来，也守不住。',ex_py:'Dōngxi bú shì nǐ de jiù búyào qù zhēngduó, jiùshì zhēnglái, yě shǒu bu zhù.',ex_vn:'Thứ gì không phải của mình thì đừng đi tranh giành, dù có giành được cũng không giữ nổi.',
   exList:[
     {zh:'东西不是你的就不要去争夺，就是争来，也守不住。',py:'Dōngxi bú shì nǐ de jiù búyào qù zhēngduó, jiùshì zhēnglái, yě shǒu bu zhù.',vn:'Thứ gì không phải của mình thì đừng đi tranh giành, dù có giành được cũng không giữ nổi.'},
     {zh:'两支球队将在今晚争夺冠军。',py:'Liǎng zhī qiúduì jiāng zài jīnwǎn zhēngduó guànjūn.',vn:'Hai đội bóng sẽ tranh chức vô địch vào tối nay.'},
     {zh:'父亲去世后，兄弟几个为了争夺财产闹得很不愉快。',py:'Fùqīn qùshì hòu, xiōngdì jǐ ge wèile zhēngduó cáichǎn nào de hěn bù yúkuài.',vn:'Sau khi cha mất, mấy anh em vì tranh giành tài sản mà làm ầm lên, rất không vui vẻ.'}
   ],
   colloFull:[
     {zh:'争夺冠军',py:'zhēngduó guànjūn',vn:'tranh chức vô địch'},
     {zh:'争夺财产',py:'zhēngduó cáichǎn',vn:'tranh giành tài sản'},
     {zh:'争夺市场',py:'zhēngduó shìchǎng',vn:'giành giật thị trường'},
     {zh:'激烈争夺',py:'jīliè zhēngduó',vn:'tranh giành quyết liệt'},
     {zh:'争夺资源',py:'zhēngduó zīyuán',vn:'tranh giành tài nguyên'}
   ],
   patterns:[
     {s:'为了 + 争夺 + N + 而……',m:'Vì tranh giành … mà …'},
     {s:'不是……的就不要去争夺',m:'Không phải của mình thì đừng tranh giành'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Các hãng điện thoại đang giành giật quyết liệt thị trường giới trẻ.',answer:'各家手机公司正在激烈地争夺年轻人市场。',answerPy:'Gè jiā shǒujī gōngsī zhèngzài jīliè de zhēngduó niánqīngrén shìchǎng.',
      note:'正在 + V: đang …; 激烈地 + V.',pair:'正在……'},
     {promptLang:'vi',prompt:'Hai đứa trẻ vì tranh một món đồ chơi mà cãi nhau ầm ĩ.',answer:'两个孩子为了争夺一个玩具吵得不可开交。',answerPy:'Liǎng ge háizi wèile zhēngduó yí ge wánjù chǎo de bùkě-kāijiāo.',
      note:'为了……; V得不可开交: … ầm ĩ không dứt ra được.',pair:'为了……'}
   ]},

  {n:49,zh:'贪污',py:'tānwū',pos:'Động từ',vn:'tham ô, tham nhũng',hv:'tham ô',em:'💸',lesson:1,
   explain:['Lợi dụng chức vụ để chiếm đoạt tài sản công (của nhà nước, tập thể).','Chủ thể thường là quan chức, cán bộ; hay đi với: 贪污公款, 贪污受贿, 贪污罪, 反贪污.'],
   usage:'贪污 + 公款 / 钱; 贪污受贿; 因贪污被……; 反对贪污.',
   collo:['贪污公款','贪污受贿','贪污罪','反贪污'],
   ex_zh:'宋家的子孙也有做了官的，但没有人敢贪污。',ex_py:'Sòng jiā de zǐsūn yě yǒu zuòle guān de, dàn méiyǒu rén gǎn tānwū.',ex_vn:'Con cháu nhà họ Tống cũng có người làm quan, nhưng không ai dám tham ô.',
   exList:[
     {zh:'宋家的子孙也有做了官的，但没有人敢贪污、贿赂、不择手段。',py:'Sòng jiā de zǐsūn yě yǒu zuòle guān de, dàn méiyǒu rén gǎn tānwū, huìlù, bùzé-shǒuduàn.',vn:'Con cháu nhà họ Tống cũng có người làm quan, nhưng không ai dám tham ô, hối lộ, bất chấp thủ đoạn.'},
     {zh:'那位官员因贪污公款被判了十年徒刑。',py:'Nà wèi guānyuán yīn tānwū gōngkuǎn bèi pànle shí nián túxíng.',vn:'Viên quan chức đó vì tham ô công quỹ mà bị kết án mười năm tù.'},
     {zh:'一个国家要想发展，就必须坚决反对贪污。',py:'Yí ge guójiā yào xiǎng fāzhǎn, jiù bìxū jiānjué fǎnduì tānwū.',vn:'Một quốc gia muốn phát triển thì phải kiên quyết chống tham nhũng.'}
   ],
   colloFull:[
     {zh:'贪污公款',py:'tānwū gōngkuǎn',vn:'tham ô công quỹ'},
     {zh:'贪污受贿',py:'tānwū shòuhuì',vn:'tham ô, nhận hối lộ'},
     {zh:'贪污罪',py:'tānwūzuì',vn:'tội tham ô'},
     {zh:'反贪污',py:'fǎn tānwū',vn:'chống tham nhũng'},
     {zh:'贪污腐败',py:'tānwū fǔbài',vn:'tham nhũng hủ bại'}
   ],
   patterns:[
     {s:'因 + 贪污 + (公款) + 被……',m:'Vì tham ô … mà bị …'},
     {s:'不敢 / 没有人敢 + 贪污',m:'Không (ai) dám tham ô'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Một khi phát hiện có cán bộ tham ô, nhất định phải xử lý nghiêm.',answer:'一旦发现有干部贪污，就一定要严肃处理。',answerPy:'Yídàn fāxiàn yǒu gànbù tānwū, jiù yídìng yào yánsù chǔlǐ.',
      note:'一旦……就……: một khi … thì ….',pair:'一旦……就……'},
     {promptLang:'vi',prompt:'Ông ấy làm quan mấy chục năm, chưa từng tham ô một đồng nào.',answer:'他当了几十年官，从来没有贪污过一分钱。',answerPy:'Tā dāngle jǐ shí nián guān, cónglái méiyǒu tānwūguo yì fēn qián.',
      note:'从来没有 + V过: chưa từng ….',pair:'从来没……过'}
   ]},

  {n:50,zh:'贿赂',py:'huìlù',pos:'Động từ / Danh từ',vn:'hối lộ, đút lót; của hối lộ',hv:'hối lộ',em:'🧧',lesson:1,
   explain:['Dùng tiền của, lợi ích để mua chuộc người có quyền làm việc có lợi cho mình.','Còn là danh từ (của hối lộ): 接受贿赂, 拒绝贿赂. Liên quan: 受贿 (nhận hối lộ), 行贿 (đưa hối lộ).'],
   usage:'贿赂 + người (官员 / 裁判); 接受 / 拒绝 + 贿赂; 用 + 钱 + 贿赂 + người.',
   collo:['贿赂官员','接受贿赂','拒绝贿赂','用钱贿赂'],
   ex_zh:'但没有人敢贪污、贿赂、不择手段。',ex_py:'Dàn méiyǒu rén gǎn tānwū, huìlù, bùzé-shǒuduàn.',ex_vn:'Nhưng không ai dám tham ô, hối lộ, bất chấp thủ đoạn.',
   exList:[
     {zh:'他因为拒绝了别人的贿赂，被大家称为“清官”。',py:'Tā yīnwèi jùjuéle biérén de huìlù, bèi dàjiā chēngwéi "qīngguān".',vn:'Ông ấy vì từ chối của đút lót của người khác nên được mọi người gọi là "quan thanh liêm".'},
     {zh:'那个商人想用钱贿赂检查人员，结果被当场抓住了。',py:'Nàge shāngrén xiǎng yòng qián huìlù jiǎnchá rényuán, jiéguǒ bèi dāngchǎng zhuāzhù le.',vn:'Gã thương nhân định dùng tiền đút lót nhân viên kiểm tra, kết quả bị bắt ngay tại chỗ.'},
     {zh:'比赛中有人贿赂裁判，这对其他队伍太不公平了。',py:'Bǐsài zhōng yǒu rén huìlù cáipàn, zhè duì qítā duìwu tài bù gōngpíng le.',vn:'Trong trận đấu có người hối lộ trọng tài, điều này quá bất công với các đội khác.'}
   ],
   colloFull:[
     {zh:'贿赂官员',py:'huìlù guānyuán',vn:'hối lộ quan chức'},
     {zh:'接受贿赂',py:'jiēshòu huìlù',vn:'nhận hối lộ'},
     {zh:'拒绝贿赂',py:'jùjué huìlù',vn:'từ chối hối lộ'},
     {zh:'用钱贿赂',py:'yòng qián huìlù',vn:'dùng tiền đút lót'},
     {zh:'贿赂裁判',py:'huìlù cáipàn',vn:'hối lộ trọng tài'}
   ],
   patterns:[
     {s:'用 + 钱 / 礼物 + 贿赂 + người',m:'Dùng … đút lót ai'},
     {s:'接受 / 拒绝 + 贿赂',m:'Nhận / từ chối hối lộ'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Bất kể người ta đưa bao nhiêu tiền, ông ấy cũng không nhận hối lộ.',answer:'无论别人给多少钱，他都不接受贿赂。',answerPy:'Wúlùn biérén gěi duōshao qián, tā dōu bù jiēshòu huìlù.',
      note:'无论……都……: bất kể … đều ….',pair:'无论……都……'},
     {promptLang:'vi',prompt:'Nó định đút lót thầy giáo để đổi lấy điểm cao, bị thầy nghiêm khắc từ chối.',answer:'他想贿赂老师换取高分，被老师严厉地拒绝了。',answerPy:'Tā xiǎng huìlù lǎoshī huànqǔ gāofēn, bèi lǎoshī yánlì de jùjué le.',
      note:'被 + người + V: bị động; 严厉 ôn bài 1.',pair:'被……'}
   ]},

  {n:51,zh:'不择手段',py:'bùzé-shǒuduàn',pos:'Thành ngữ',vn:'bất chấp thủ đoạn, không từ thủ đoạn nào',hv:'bất trạch thủ đoạn',em:'🐍',lesson:1,
   explain:['Để đạt mục đích thì dùng bất cứ thủ đoạn nào, kể cả xấu xa (择 = chọn; 手段 = thủ đoạn) — nghĩa xấu.','Hay dùng: 为了 + mục đích + (而)不择手段; 不择手段地 + V.'],
   usage:'为了……(而)不择手段; 不择手段地 + V (赚钱 / 往上爬); 不择手段的人.',
   collo:['为了赚钱不择手段','不择手段地赚钱','不择手段的人','为达目的不择手段'],
   ex_zh:'但没有人敢贪污、贿赂、不择手段，因为他们心里都有一个“金鸡窝”。',ex_py:'Dàn méiyǒu rén gǎn tānwū, huìlù, bùzé-shǒuduàn, yīnwèi tāmen xīnli dōu yǒu yí ge "Jīnjīwō".',ex_vn:'Nhưng không ai dám tham ô, hối lộ, bất chấp thủ đoạn, bởi trong lòng họ đều có một "Ổ gà vàng".',
   exList:[
     {zh:'但没有人敢贪污、贿赂、不择手段，因为他们心里都有一个“金鸡窝”。',py:'Dàn méiyǒu rén gǎn tānwū, huìlù, bùzé-shǒuduàn, yīnwèi tāmen xīnli dōu yǒu yí ge "Jīnjīwō".',vn:'Nhưng không ai dám tham ô, hối lộ, bất chấp thủ đoạn, bởi trong lòng họ đều có một "Ổ gà vàng".'},
     {zh:'有些商家为了赚钱不择手段，甚至卖假货。',py:'Yǒuxiē shāngjiā wèile zhuànqián bùzé-shǒuduàn, shènzhì mài jiǎhuò.',vn:'Một số nhà buôn vì kiếm tiền mà bất chấp thủ đoạn, thậm chí bán hàng giả.'},
     {zh:'为了赢得比赛而不择手段，就算赢了也不光彩。',py:'Wèile yíngdé bǐsài ér bùzé-shǒuduàn, jiùsuàn yíngle yě bù guāngcǎi.',vn:'Vì thắng cuộc thi mà bất chấp thủ đoạn thì dù có thắng cũng chẳng vẻ vang gì.'}
   ],
   colloFull:[
     {zh:'为了赚钱不择手段',py:'wèile zhuànqián bùzé-shǒuduàn',vn:'vì kiếm tiền mà bất chấp thủ đoạn'},
     {zh:'不择手段地赚钱',py:'bùzé-shǒuduàn de zhuànqián',vn:'kiếm tiền bằng mọi thủ đoạn'},
     {zh:'不择手段的人',py:'bùzé-shǒuduàn de rén',vn:'kẻ bất chấp thủ đoạn'},
     {zh:'为达目的不择手段',py:'wèi dá mùdì bùzé-shǒuduàn',vn:'để đạt mục đích thì không từ thủ đoạn'},
     {zh:'不择手段地往上爬',py:'bùzé-shǒuduàn de wǎng shàng pá',vn:'leo cao bằng mọi thủ đoạn'}
   ],
   patterns:[
     {s:'为了 + mục đích + (而)不择手段',m:'Vì … mà bất chấp thủ đoạn'},
     {s:'不择手段地 + V',m:'… bằng mọi thủ đoạn'}
   ],
   checkList:[
     {promptLang:'vi',prompt:'Tôi không thích kết bạn với kẻ bất chấp thủ đoạn.',answer:'我不喜欢跟不择手段的人交朋友。',answerPy:'Wǒ bù xǐhuan gēn bùzé-shǒuduàn de rén jiāo péngyou.',
      note:'跟 + người + 交朋友: kết bạn với ai.',pair:'跟……交朋友'},
     {promptLang:'vi',prompt:'Dù là vì mục đích gì, cũng không nên bất chấp thủ đoạn.',answer:'不管是为了什么目的，都不应该不择手段。',answerPy:'Bùguǎn shì wèile shénme mùdì, dōu bù yīnggāi bùzé-shǒuduàn.',
      note:'不管……都……: bất kể … đều ….',pair:'不管……都……'}
   ]}
];


// ══════════════════════════════════════════
// BÀI KHOÁ — chép nguyên văn sách (tr. 208–210), mỗi đoạn một dòng
// ══════════════════════════════════════════
var dialogData = [
  {scene:'课文 · 金鸡窝',
   preQuiz:[
     {q:'金鸡窝在哪儿？',opts:['村东池塘畔','姥姥家的院子里','山上的草丛里'],ans:0},
     {q:'村里人为什么叫那块石头“金鸡窝”？',opts:['因为它是金子做的','因为它中间凹陷，像个鸡窝','因为上面住着一只金鸡'],ans:1},
     {q:'孩子们坐在金鸡窝上玩儿时，老人们会怎么样？',opts:['夸他们勇敢','跟他们一起玩儿','责怪他们'],ans:2},
     {q:'宋家几兄弟的日子为什么过得还算富裕？',opts:['他们捡到了很多金子','他们都做了大官','他们勤劳又勤俭'],ans:2},
     {q:'三祖爷是什么时候看到那窝小鸡的？',opts:['农历年将近的时候','夏天的晚上','春天刚开始的时候'],ans:0},
     {q:'三祖爷为什么颇感诧异？',opts:['小鸡是金黄色的','大冬天的，离村子又远，不该有这么小的鸡仔','母鸡会说话'],ans:1},
     {q:'被砖砸中的小鸡变成了什么？',opts:['一块石头','一块金子','一只母鸡'],ans:1},
     {q:'三祖爷是怎么受伤的？',opts:['被砖砸伤了','掉进了大坑里','被老母鸡在膝盖下边咬了一口'],ans:2},
     {q:'大家在地里挖掘的结果怎么样？',opts:['没找到鸡，只挖出了一块大石头','找到了那窝小鸡','挖出了很多金子'],ans:0},
     {q:'三祖爷用那块金子做了什么？',opts:['盖了新房子','换了钱去看病','送给了村里人'],ans:1},
     {q:'三祖爷后来逢人就说什么？',opts:['真是得不偿失','金子越多越好','应该再去找那窝小鸡'],ans:0},
     {q:'宋家做官的子孙为什么没有人敢贪污？',opts:['因为他们的工资很高','因为怕被三祖爷责怪','因为他们心里都有一个“金鸡窝”'],ans:2}
   ],
   lines:[
    {sp:0,zh:'姥姥住的村东池塘畔有一块椭圆形的大石头。那石头中间凹陷，像个鸡窝，村里人叫它金鸡窝。',
     py:'Lǎolao zhù de cūn dōng chítáng pàn yǒu yí kuài tuǒyuánxíng de dà shítou. Nà shítou zhōngjiān āoxiàn, xiàng ge jīwō, cūn li rén jiào tā Jīnjīwō.',
     vn:'Bên bờ ao phía đông ngôi làng bà ngoại ở có một hòn đá lớn hình bầu dục. Hòn đá ấy lõm xuống ở giữa, trông như một cái ổ gà, người trong làng gọi nó là Ổ gà vàng.'},
    {sp:0,zh:'金鸡窝外表有些古怪，红色的石头，上面镶嵌着些不同色彩、不同形状、或坚硬或不十分坚硬的小石头，像件工艺品，很是美观别致。',
     py:'Jīnjīwō wàibiǎo yǒuxiē gǔguài, hóngsè de shítou, shàngmiàn xiāngqiànzhe xiē bùtóng sècǎi, bùtóng xíngzhuàng, huò jiānyìng huò bù shífēn jiānyìng de xiǎo shítou, xiàng jiàn gōngyìpǐn, hěn shì měiguān biézhì.',
     vn:'Bề ngoài Ổ gà vàng hơi kỳ lạ: một hòn đá màu đỏ, trên đó khảm những viên đá nhỏ khác màu sắc, khác hình dạng, viên thì cứng, viên thì không cứng lắm, trông như một món đồ mỹ nghệ, rất đẹp mắt và độc đáo.'},
    {sp:0,zh:'我们小时候都喜欢坐在石头上，把脚浸泡在水里。老人们见了，就会责怪：“嗨，坐在金鸡窝上，想干吗呀！”我被说得糊涂，就去问姥姥，这才得知那个久远的传说。',
     py:'Wǒmen xiǎoshíhou dōu xǐhuan zuò zài shítou shang, bǎ jiǎo jìnpào zài shuǐ li. Lǎorénmen jiàn le, jiù huì zéguài: "Hēi, zuò zài Jīnjīwō shang, xiǎng gànmá ya!" Wǒ bèi shuō de hútu, jiù qù wèn lǎolao, zhè cái dézhī nàge jiǔyuǎn de chuánshuō.',
     vn:'Hồi nhỏ, chúng tôi đều thích ngồi trên hòn đá, ngâm chân xuống nước. Các cụ già thấy vậy liền trách: "Này, ngồi lên Ổ gà vàng định làm gì hả!" Tôi bị nói đến ngơ ngác, bèn đi hỏi bà ngoại, lúc ấy mới biết được truyền thuyết xa xưa kia.'},
    {sp:0,zh:'姥爷祖父的祖父宋家有几兄弟，大家起早贪黑，废寝忘食，勤劳加勤俭，日子过得还算富裕。',
     py:'Lǎoye zǔfù de zǔfù Sòng jiā yǒu jǐ xiōngdì, dàjiā qǐzǎo-tānhēi, fèiqǐn-wàngshí, qínláo jiā qínjiǎn, rìzi guò de hái suàn fùyù.',
     vn:'Vào đời ông nội của ông nội ông ngoại, nhà họ Tống có mấy anh em, ai nấy đều thức khuya dậy sớm, quên ăn quên ngủ, đã cần cù lại tiết kiệm, nên cuộc sống cũng coi như sung túc.'},
    {sp:0,zh:'农历年将近，宋家三祖爷早早下了地，突然看到了一窝小鸡。那小鸡仿佛刚出窝没几天，况且是乌黑乌黑的身子，可爱极了，跟随着母鸡，四处寻觅，像是在找食。',
     py:'Nónglì nián jiāngjìn, Sòng jiā Sān zǔyé zǎozǎo xiàle dì, tūrán kàndàole yì wō xiǎo jī. Nà xiǎo jī fǎngfú gāng chū wō méi jǐ tiān, kuàngqiě shì wūhēi wūhēi de shēnzi, kě\'ài jí le, gēnsuízhe mǔjī, sìchù xúnmì, xiàng shì zài zhǎo shí.',
     vn:'Tết âm lịch sắp đến, ông cụ Ba nhà họ Tống ra đồng từ sớm, bỗng nhìn thấy một ổ gà con. Mấy con gà con ấy dường như mới rời ổ chưa được mấy ngày, hơn nữa thân mình lại đen nhánh, đáng yêu vô cùng; chúng theo sau gà mẹ, tìm kiếm khắp nơi, như đang kiếm ăn.'},
    {sp:0,zh:'三祖爷颇感诧异，大冬天的，这里离村子又远，分明不该有这么小的鸡仔呀！三祖爷去捉小鸡，小鸡想隐蔽自己，跑着往干草丛里扎。三祖爷顺手拣起一块砖撇过去，一下砸中了一只小鸡。小鸡就地打了个滚，瞬间变成了一块金子。这时候，老母鸡急了，跳起来在三祖爷膝盖下边就是一口，三祖爷疼得要命，哼哼着，路也走不动了，只好拣个树枝当拐杖拄着，一瘸一拐地回了家。',
     py:'Sān zǔyé pō gǎn chàyì, dà dōngtiān de, zhèli lí cūnzi yòu yuǎn, fēnmíng bù gāi yǒu zhème xiǎo de jīzǎi ya! Sān zǔyé qù zhuō xiǎo jī, xiǎo jī xiǎng yǐnbì zìjǐ, pǎozhe wǎng gāncǎocóng li zhā. Sān zǔyé shùnshǒu jiǎnqǐ yí kuài zhuān piě guòqù, yíxià zázhòngle yì zhī xiǎo jī. Xiǎo jī jiùdì dǎle ge gǔn, shùnjiān biànchéngle yí kuài jīnzi. Zhè shíhou, lǎo mǔjī jí le, tiào qǐlái zài Sān zǔyé xīgài xiàbian jiù shì yì kǒu, Sān zǔyé téng de yàomìng, hēnghengzhe, lù yě zǒu bu dòng le, zhǐhǎo jiǎn ge shùzhī dàng guǎizhàng zhǔzhe, yì qué yì guǎi de huíle jiā.',
     vn:'Ông cụ Ba lấy làm lạ lắm: giữa mùa đông giá rét, chỗ này lại cách xa làng, rõ ràng không thể có gà con nhỏ như vậy! Ông cụ Ba đi bắt gà con, gà con muốn ẩn mình, chạy lủi vào bụi cỏ khô. Ông tiện tay nhặt một viên gạch ném qua, trúng ngay một con. Con gà con lăn một vòng tại chỗ, trong chớp mắt biến thành một cục vàng. Lúc ấy, gà mẹ cuống lên, nhảy lên mổ ngay một phát vào dưới đầu gối ông cụ Ba. Ông đau muốn chết, rên hừ hừ, không bước nổi nữa, đành nhặt một cành cây làm gậy chống, khập khiễng đi về nhà.'},
    {sp:0,zh:'回到家，三祖爷把事情跟家里人一说，大家赶到地里，可怎么也找不着那窝鸡。大家开始在附近挖掘，挖了个大坑，结果还是没有看到鸡，只是挖出了那块像鸡窝一样的大石头。他们把那石头抬回村里，因为形状不规则，派不上什么用场，最后就扔在了池塘边。',
     py:'Huídào jiā, Sān zǔyé bǎ shìqing gēn jiā li rén yì shuō, dàjiā gǎndào dì li, kě zěnme yě zhǎo bu zháo nà wō jī. Dàjiā kāishǐ zài fùjìn wājué, wāle ge dà kēng, jiéguǒ háishi méiyǒu kàndào jī, zhǐshì wāchūle nà kuài xiàng jīwō yíyàng de dà shítou. Tāmen bǎ nà shítou táihuí cūn li, yīnwèi xíngzhuàng bù guīzé, pài bu shàng shénme yòngchǎng, zuìhòu jiù rēng zàile chítáng biān.',
     vn:'Về đến nhà, ông cụ Ba vừa kể chuyện cho người nhà nghe, mọi người liền chạy ra đồng, nhưng tìm thế nào cũng không thấy ổ gà ấy đâu. Mọi người bắt đầu đào bới quanh đó, đào thành một cái hố lớn, rốt cuộc vẫn không thấy gà, chỉ đào được hòn đá lớn trông như ổ gà kia. Họ khiêng hòn đá về làng, nhưng vì hình dạng không đều đặn, chẳng dùng được vào việc gì, cuối cùng đành vứt ở bờ ao.'},
    {sp:0,zh:'三祖爷受伤的腿一直发炎，疼得下不了床。一个身强力壮的小伙子，咋能光躺在床上呢？三祖爷只好用那金子换了钱去看病。还算侥幸，金子换来的钱用完了，三祖爷的腿也好了。三祖爷尝到了久病不愈的滋味，后来逢人就说，真是得不偿失，早知道这样，宁肯当初不搭理那窝小鸡。',
     py:'Sān zǔyé shòushāng de tuǐ yìzhí fāyán, téng de xià bu liǎo chuáng. Yí ge shēnqiáng-lìzhuàng de xiǎohuǒzi, zǎ néng guāng tǎng zài chuáng shang ne? Sān zǔyé zhǐhǎo yòng nà jīnzi huànle qián qù kànbìng. Hái suàn jiǎoxìng, jīnzi huànlái de qián yòngwán le, Sān zǔyé de tuǐ yě hǎo le. Sān zǔyé chángdàole jiǔ bìng bú yù de zīwèi, hòulái féng rén jiù shuō, zhēn shì débùchángshī, zǎo zhīdào zhèyàng, nìngkěn dāngchū bù dāli nà wō xiǎo jī.',
     vn:'Cái chân bị thương của ông cụ Ba cứ viêm mãi, đau đến không xuống giường nổi. Một chàng trai khoẻ mạnh cường tráng, sao có thể cứ nằm lì trên giường được? Ông cụ Ba đành đem cục vàng đổi lấy tiền đi chữa bệnh. Cũng coi như may, tiền đổi từ vàng vừa tiêu hết thì chân ông cũng khỏi. Ông cụ Ba đã nếm trải cảm giác ốm lâu không khỏi, về sau gặp ai cũng nói: thật là được chẳng bõ mất, sớm biết thế này, thà lúc đầu đừng đoái hoài gì đến ổ gà con ấy.'},
    {sp:0,zh:'三祖爷的故事告诫后人，做人不要欲望太多，不要贪婪。东西不是你的就不要去争夺，就是争来，也守不住。倒不如付出一分努力，得到一分收获，过平稳和顺的日子。',
     py:'Sān zǔyé de gùshi gàojiè hòurén, zuò rén búyào yùwàng tài duō, búyào tānlán. Dōngxi bú shì nǐ de jiù búyào qù zhēngduó, jiùshì zhēnglái, yě shǒu bu zhù. Dào bùrú fùchū yì fēn nǔlì, dédào yì fēn shōuhuò, guò píngwěn héshùn de rìzi.',
     vn:'Câu chuyện của ông cụ Ba răn dạy đời sau: làm người đừng có quá nhiều dục vọng, đừng tham lam. Thứ gì không phải của mình thì đừng đi tranh giành, dù có giành được cũng không giữ nổi. Chẳng thà bỏ ra một phần công sức, gặt hái một phần thành quả, sống những ngày bình ổn, êm ấm.'},
    {sp:0,zh:'后来，三祖爷的故事传了一代又一代，宋家的子孙也有做了官的，但没有人敢贪污、贿赂、不择手段，因为他们心里都有一个“金鸡窝”。',
     py:'Hòulái, Sān zǔyé de gùshi chuánle yí dài yòu yí dài, Sòng jiā de zǐsūn yě yǒu zuòle guān de, dàn méiyǒu rén gǎn tānwū, huìlù, bùzé-shǒuduàn, yīnwèi tāmen xīnli dōu yǒu yí ge "Jīnjīwō".',
     vn:'Về sau, câu chuyện của ông cụ Ba được truyền từ đời này sang đời khác; con cháu nhà họ Tống cũng có người làm quan, nhưng không ai dám tham ô, hối lộ, bất chấp thủ đoạn, bởi trong lòng họ đều có một "Ổ gà vàng".'}
   ]}
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析
// Cặp 将近—将要 lấy từ sách (tr. 212, 做一做 chọn từ điền trống theo đáp án sách); 分明—明明, 侥幸—幸运 tự thêm (分明, 侥幸 là từ của bài; 明明 ôn bài 6)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'将近 — 将要',
   same:'Đều là phó từ, đều có thể biểu thị sắp đến một thời điểm nào đó.',
   sameEx:{zh:'将近／将要毕业时，他还没找到工作。',vn:'Sắp tốt nghiệp rồi mà anh ấy vẫn chưa tìm được việc.'},
   items:[
     {word:'将近',points:[
       '将近 + từ chỉ thời gian / động từ / tính từ: biểu thị GẦN TỚI về mặt thời gian (将近下午四点, 天将近黑了).',
       '将近 + cụm số lượng: biểu thị số lượng SẮP ĐẠT TỚI, còn thiếu một chút (将近十万字, 将近四千年) — 将要 không có cách dùng này.',
       'Có thể đứng sau danh từ thời gian làm vị ngữ: 农历年将近 (bài khoá).'
     ],ex:[{zh:'将近下午四点时，下了一场大雨。',vn:'Gần bốn giờ chiều thì đổ một trận mưa to.'},
          {zh:'这本书将近十万字，不过我一天就看完了。',vn:'Cuốn sách này gần một trăm nghìn chữ, nhưng tôi đọc xong chỉ trong một ngày.'}]},
     {word:'将要',points:[
       '将要 + động từ / cụm động từ / (rất ít) tính từ: biểu thị không lâu nữa SẼ XẢY RA việc gì hoặc có thay đổi.',
       'Không đi với cụm số lượng (không nói 将要四千年), không đứng trước danh từ thời gian (không nói 将要半夜).',
       'Văn viết; khẩu ngữ hay dùng 快要 / 就要.'
     ],ex:[{zh:'下月三号学校将要举办毕业典礼。',vn:'Ngày mùng 3 tháng sau trường sẽ tổ chức lễ tốt nghiệp.'},
          {zh:'如果这次不成功，下次将要困难得多。',vn:'Nếu lần này không thành công, lần sau sẽ khó khăn hơn nhiều.'}]}
   ],
   quiz:[
     {sentence:'这座古桥已经有＿＿八百年的历史了。',options:['将近','将要'],answer:0,why:'Sau là cụm số lượng (八百年) → chỉ dùng 将近.'},
     {sentence:'飞机＿＿起飞，请大家系好安全带。',options:['将近','将要'],answer:1,why:'Việc sắp xảy ra (起飞) → 将要 + V.'},
     {sentence:'我们等了＿＿两个小时，他才来。',options:['将近','将要'],answer:0,why:'Cụm số lượng thời gian (两个小时) → 将近.'},
     {sentence:'她＿＿去国外留学，最近正忙着办签证。',options:['将近','将要'],answer:1,why:'Việc sẽ xảy ra trong tương lai gần → 将要 + V.'}
   ],
   sgk:{
     chung:{t:'都是副词，都可以表示快要到某个时间了。',vn:'Đều là phó từ, đều có thể biểu thị sắp đến một thời điểm nào đó.',vd:'将近／将要毕业时，他还没找到工作。',vdVn:'Sắp tốt nghiệp rồi mà anh ấy vẫn chưa tìm được việc.'},
     khac:[
       {a:{t:'将近+时间词语/动词/形容词，表示时间上接近。',vn:'将近 + từ chỉ thời gian / động từ / tính từ, biểu thị gần tới về mặt thời gian.',vd:'将近下午四点时，下了一场大雨。天将近黑了，他怎么还不回来？',vdVn:'Gần bốn giờ chiều thì đổ một trận mưa to. Trời sắp tối rồi, sao anh ấy vẫn chưa về?'},
        b:{t:'将要+动词/动词短语/形容词（极少情况），表示不久就要发生某事或产生变化。',vn:'将要 + động từ / cụm động từ / tính từ (rất ít khi), biểu thị không lâu nữa sẽ xảy ra việc gì hoặc có thay đổi.',vd:'下月三号学校将要举办毕业典礼。如果这次不成功，下次将要困难得多。',vdVn:'Ngày mùng 3 tháng sau trường sẽ tổ chức lễ tốt nghiệp. Nếu lần này không thành công, lần sau sẽ khó khăn hơn nhiều.'}},
       {a:{t:'将近+数量短语，表示数量上快要达到。',vn:'将近 + cụm số lượng, biểu thị số lượng sắp đạt tới.',vd:'这本书将近十万字，不过我一天就看完了。',vdVn:'Cuốn sách này gần một trăm nghìn chữ, nhưng tôi đọc xong chỉ trong một ngày.'},
        b:{t:'没有这个用法。',vn:'Không có cách dùng này.',vd:''}}
     ],
     deLam:'选择“将近”或“将要”填空 — Chọn 将近 hay 将要 điền vào chỗ trống',
     lamThu:[
       {s:'想到今后＿＿在这所名牌大学学习，我心中激动极了。',dap:[false,true],
        giai:'Việc sắp xảy ra trong tương lai (sẽ được học ở trường danh tiếng) → 将要 + V.'},
       {s:'中国有＿＿四千年的有文字记载的历史。',dap:[true,false],
        giai:'Phía sau là cụm số lượng (四千年) → chỉ dùng 将近 (gần bốn nghìn năm).'},
       {s:'他每天都学习到＿＿半夜，真令人佩服。',dap:[true,false],
        giai:'Gần tới một thời điểm (半夜 = nửa đêm) → 将近; 将要 không đứng trước danh từ thời gian.'},
       {s:'如果经济状况不改善，不少工人＿＿面临失业。',dap:[false,true],
        giai:'Điều sắp xảy ra nếu tình hình không cải thiện → 将要 + 面临 (động từ).'}
     ]
   }},

  {pair:'分明 — 明明',
   same:'Khi làm phó từ, cả hai đều biểu thị sự việc rõ ràng, hiển nhiên là như vậy; vế sau thường chuyển ý hoặc là câu hỏi mang ý trách.',
   sameEx:{zh:'他分明／明明知道答案，却故意不说。',vn:'Rõ ràng là anh ta biết đáp án, vậy mà cố tình không nói.'},
   items:[
     {word:'分明',points:[
       'Còn là TÍNH TỪ: rõ ràng, rạch ròi — 黑白分明, 四季分明, 爱憎分明 (明明 không có cách dùng này).',
       'Làm phó từ thì hơi văn viết hơn 明明; hay dùng 分明是…….',
       'Làm được vị ngữ: 这里四季分明.'
     ],ex:[{zh:'他分明是喜欢你的，你怎么感觉不到呢？',vn:'Rõ ràng là anh ấy thích cậu, sao cậu lại không cảm nhận được?'},
          {zh:'这里四季分明，风景各不相同。',vn:'Nơi đây bốn mùa rõ rệt, phong cảnh mỗi mùa mỗi khác.'}]},
     {word:'明明',points:[
       'Chỉ là PHÓ TỪ (bài 6): rõ ràng là …, vế sau thường có 却 / 可是 / 怎么 chuyển ý, mang giọng trách, bực.',
       'Dùng rất nhiều trong khẩu ngữ.',
       'Không làm vị ngữ, không nói 四季明明.'
     ],ex:[{zh:'明明是你的错，你怎么怪别人？',vn:'Rõ ràng là lỗi của cậu, sao lại trách người khác?'},
          {zh:'他明明在家，却说自己出去了。',vn:'Anh ta rõ ràng ở nhà, vậy mà lại nói mình ra ngoài rồi.'}]}
   ],
   quiz:[
     {sentence:'这个地方四季＿＿，春天特别美。',options:['分明','明明'],answer:0,why:'Làm vị ngữ với nghĩa "rõ rệt" (tính từ) → chỉ 分明.'},
     {sentence:'你＿＿看见了，为什么说没看见？',options:['分明','明明'],answer:1,both:true,why:'Phó từ + vế sau hỏi trách → cả hai đều được; khẩu ngữ hay dùng 明明.'},
     {sentence:'他是个爱憎＿＿的人，从不说假话。',options:['分明','明明'],answer:0,why:'爱憎分明 = yêu ghét rạch ròi (cụm cố định, tính từ).'},
     {sentence:'＿＿是他先动手的，他却说是我先打他。',options:['分明','明明'],answer:1,both:true,why:'Phó từ đầu câu + 却 chuyển ý → dùng được cả hai; 明明 khẩu ngữ hơn.'}
   ]},

  {pair:'侥幸 — 幸运',
   same:'Đều là tính từ, đều liên quan đến sự may mắn.',
   sameEx:{zh:'这次车祸他没受伤，真是侥幸／幸运。',vn:'Vụ tai nạn xe lần này anh ấy không bị thương, thật là may.'},
   items:[
     {word:'侥幸',points:[
       'Nhờ NGẪU NHIÊN mà tránh được tai hoạ hoặc đạt được điều vốn khó đạt — hàm ý "suýt nữa thì …".',
       'Hay đi với: 还算侥幸, 侥幸 + V (逃脱, 取胜, 没……).',
       '侥幸心理 = tâm lý cầu may (nghĩa xấu); không dùng để chúc mừng người khác.'
     ],ex:[{zh:'还算侥幸，骨头没事。',vn:'Cũng may là xương không sao.'},
          {zh:'他抱着侥幸心理，结果考砸了。',vn:'Cậu ta ôm tâm lý cầu may, kết quả thi hỏng.'}]},
     {word:'幸运',points:[
       'May mắn nói chung, nghĩa tích cực; còn làm danh từ: 带来幸运.',
       'Hay gặp: 幸运儿 (người may mắn), 幸运的是……, 很幸运能…….',
       'Không mang nghĩa "cầu may" xấu.'
     ],ex:[{zh:'我很幸运能遇到这么好的老师。',vn:'Tôi thật may mắn được gặp người thầy tốt như vậy.'},
          {zh:'幸运的是，我们赶上了最后一班车。',vn:'May mắn là chúng tôi đã kịp chuyến xe cuối.'}]}
   ],
   quiz:[
     {sentence:'能认识你这样的朋友，我真＿＿。',options:['侥幸','幸运'],answer:1,why:'May mắn nói chung, nghĩa tích cực → 幸运.'},
     {sentence:'考试前不复习，只抱着＿＿心理是不行的。',options:['侥幸','幸运'],answer:0,why:'侥幸心理 = tâm lý cầu may (cụm cố định).'},
     {sentence:'车撞在了树上，＿＿的是没有人受伤。',options:['侥幸','幸运'],answer:1,why:'幸运的是…… = may mắn là … (mở đầu mệnh đề).'},
     {sentence:'他在比赛中＿＿取胜，其实实力并不强。',options:['侥幸','幸运'],answer:0,why:'Thắng nhờ ngẫu nhiên, thực lực không mạnh → 侥幸取胜.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'椭圆',hv:'thoả viên',vn:'hình bầu dục, hình elip',note:'圆 = viên (tròn); 椭圆 = tròn dẹt → hình bầu dục.'},
    {zh:'外表',hv:'ngoại biểu',vn:'bề ngoài',note:'外 = ngoài, 表 = mặt → mặt ngoài; đối lập 内心.'},
    {zh:'工艺品',hv:'công nghệ phẩm',vn:'hàng mỹ nghệ',note:'"Công nghệ" ở đây là nghề thủ công khéo léo (工艺), không phải "công nghệ" kỹ thuật (技术).'},
    {zh:'美观',hv:'mỹ quan',vn:'đẹp mắt',note:'Trùng khít: "ảnh hưởng mỹ quan đô thị" = 影响城市美观.'},
    {zh:'勤俭',hv:'cần kiệm',vn:'cần kiệm',note:'Trùng khít — 勤俭节约 = cần kiệm tiết kiệm.'},
    {zh:'富裕',hv:'phú dụ',vn:'giàu có, sung túc',note:'富 = phú (giàu), 裕 = dư dả.'},
    {zh:'欲望',hv:'dục vọng',vn:'dục vọng, ham muốn',note:'Trùng khít; trong tiếng Trung sắc thái nhẹ hơn tiếng Việt (购买欲望 = ham muốn mua sắm).'},
    {zh:'贪婪',hv:'tham lam',vn:'tham lam',note:'Trùng khít hoàn toàn.'},
    {zh:'贪污',hv:'tham ô',vn:'tham ô, tham nhũng',note:'Trùng khít.'},
    {zh:'贿赂',hv:'hối lộ',vn:'hối lộ, đút lót',note:'Trùng khít.'},
    {zh:'争夺',hv:'tranh đoạt',vn:'tranh giành',note:'"Tranh đoạt" — giành giật cái người khác cũng muốn.'},
    {zh:'发炎',hv:'phát viêm',vn:'bị viêm',note:'炎 = viêm (nóng, sưng); 发 = phát ra.'},
    {zh:'挖掘',hv:'oạt quật',vn:'đào bới, khai quật',note:'掘 = quật (như "khai quật"); 挖掘潜力 = khai thác tiềm năng.'}
  ],
  idiom:[
    {zh:'废寝忘食',hv:'phế tẩm vong thực',vn:'quên ăn quên ngủ',note:'废 bỏ, 寝 ngủ, 忘 quên, 食 ăn — tiếng Việt đảo thành "quên ăn quên ngủ".'},
    {zh:'得不偿失',hv:'đắc bất thường thất',vn:'được chẳng bõ mất, lợi bất cập hại',note:'偿 = bù đắp (bồi thường): cái được không bù nổi cái mất.'},
    {zh:'不择手段',hv:'bất trạch thủ đoạn',vn:'bất chấp thủ đoạn',note:'择 = chọn (lựa chọn) → không chọn lựa thủ đoạn, việc gì cũng làm.'},
    {zh:'身强力壮',hv:'thân cường lực tráng',vn:'khoẻ mạnh cường tráng',note:'Trong bài khoá; cùng chữ 壮 với 健壮, 壮实 (phần 热身).'},
    {zh:'起早贪黑',hv:'khởi tảo tham hắc',vn:'thức khuya dậy sớm',note:'贪 ở đây là "ham" làm đến tối mịt, không phải tham lam.'}
  ],
  trap:[
    {zh:'滋味',hv:'tư vị',vn:'mùi vị; cảm giác (khi trải qua việc gì)',
     warn:'"Tư vị" trong tiếng Việt lại nghĩa là THIÊN VỊ (ăn ở tư vị). 滋味 = mùi vị, nỗi niềm: 尝到了……的滋味, 心里不是滋味.'},
    {zh:'分明',hv:'phân minh',vn:'rõ ràng là (phó từ); rõ ràng, rạch ròi',
     warn:'"Phân minh" tiếng Việt chỉ là "rạch ròi" (tính từ). Trong bài 分明 là PHÓ TỪ = rõ ràng là: 分明不该有这么小的鸡仔.'},
    {zh:'别致',hv:'biệt trí',vn:'độc đáo, mới lạ',
     warn:'Không liên quan "biệt thự" (别墅) hay "biệt ly". 别致 = khác thường một cách đẹp mắt.'},
    {zh:'祖父',hv:'tổ phụ',vn:'ông nội',
     warn:'"Tổ phụ" tiếng Việt thường hiểu là tổ tiên nói chung; 祖父 chỉ đúng ÔNG NỘI (爷爷). Ông ngoại là 外祖父 / 姥爷.'},
    {zh:'农历',hv:'nông lịch',vn:'âm lịch',
     warn:'Không phải "lịch nhà nông" nói chung — 农历 chính là ÂM LỊCH, đối lập 公历 (dương lịch).'},
    {zh:'责怪',hv:'trách quái',vn:'trách móc',
     warn:'怪 ở đây không phải "quái lạ" mà là "trách, oán" (như 怪我 = trách tôi). 责怪 = trách móc.'},
    {zh:'告诫',hv:'cáo giới',vn:'khuyên răn, răn dạy',
     warn:'诫 (bộ 讠) = răn, khác 戒 (戒烟 = cai thuốc). Viết 告戒 là sai.'}
  ]
};


// ══════════════════════════════════════════
// GHÉP TỪ — cụm trong bài khoá và phần 练习
// ══════════════════════════════════════════
var matchData = [
  {left:'椭圆形的',right:'大石头'},
  {left:'中间',right:'凹陷'},
  {left:'外表',right:'古怪'},
  {left:'镶嵌着',right:'小石头'},
  {left:'美观',right:'别致'},
  {left:'把脚',right:'浸泡在水里'},
  {left:'得知',right:'久远的传说'},
  {left:'起早',right:'贪黑'},
  {left:'废寝',right:'忘食'},
  {left:'勤劳加',right:'勤俭'},
  {left:'农历年',right:'将近'},
  {left:'乌黑乌黑的',right:'身子'},
  {left:'跟随着',right:'母鸡'},
  {left:'四处',right:'寻觅'},
  {left:'颇感',right:'诧异'},
  {left:'往干草丛里',right:'扎'},
  {left:'当拐杖',right:'拄着'},
  {left:'一瘸',right:'一拐'},
  {left:'挖了个',right:'大坑'},
  {left:'派不上',right:'用场'},
  {left:'尝到了',right:'久病不愈的滋味'},
  {left:'身强',right:'力壮'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'屋檐下有个鸟',blank:'窝',post:'，每天早上都能听到小鸟叫。',hint:'(ổ, tổ)',ans:'窝'},
  {pre:'周末我们常常在湖',blank:'畔',post:'散步，看夕阳慢慢落下。',hint:'(bờ, bên)',ans:'畔'},
  {pre:'地球绕太阳运行的轨道是一个',blank:'椭圆',post:'。',hint:'(hình elip)',ans:'椭圆'},
  {pre:'交朋友不能只看',blank:'外表',post:'，更重要的是看人品。',hint:'(bề ngoài)',ans:'外表'},
  {pre:'这件首饰非常昂贵，上面',blank:'镶嵌',post:'着很多钻石。',hint:'(khảm, nạm)',ans:'镶嵌'},
  {pre:'乌龟有',blank:'坚硬',post:'的外壳，遇到危险就把头缩进去。',hint:'(cứng, rắn)',ans:'坚硬'},
  {pre:'这些竹子做的',blank:'工艺品',post:'是当地的特产，很受游客欢迎。',hint:'(đồ mỹ nghệ)',ans:'工艺品'},
  {pre:'黄豆要先',blank:'浸泡',post:'一夜，第二天才能磨豆浆。',hint:'(ngâm)',ans:'浸泡'},
  {pre:'我的',blank:'祖父',post:'年轻时是个木匠，做的家具又结实又好看。',hint:'(ông nội)',ans:'祖父'},
  {pre:'为了准备高考，她每天',blank:'废寝忘食',post:'地学习，人都瘦了一圈。',hint:'(quên ăn quên ngủ)',ans:'废寝忘食'},
  {pre:'妈妈',blank:'勤俭',post:'持家，从来不乱花一分钱。',hint:'(cần kiệm)',ans:'勤俭'},
  {pre:'改革开放以后，这个小山村的农民渐渐',blank:'富裕',post:'了起来。',hint:'(giàu có, sung túc)',ans:'富裕'},
  {pre:'中秋节是',blank:'农历',post:'八月十五，这一天人们要吃月饼、赏月。',hint:'(âm lịch)',ans:'农历'},
  {pre:'这本书',blank:'将近',post:'十万字，不过我一天就看完了。',hint:'(gần, xấp xỉ)',ans:'将近'},
  {pre:'上海那么大，',blank:'况且',post:'你又不知道地址，怎么能找到他呢？',hint:'(huống hồ, hơn nữa)',ans:'况且'},
  {pre:'游客们',blank:'跟随',post:'导游参观了故宫。',hint:'(đi theo)',ans:'跟随'},
  {pre:'人生难得遇到一个知音，很多人',blank:'寻觅',post:'一辈子也找不到。',hint:'(tìm kiếm)',ans:'寻觅'},
  {pre:'他对中国京剧',blank:'颇',post:'感兴趣，所以参加了一个京剧培训班。',hint:'(khá, rất — văn viết)',ans:'颇'},
  {pre:'他',blank:'分明',post:'是喜欢你的，你怎么感觉不到呢？',hint:'(rõ ràng là)',ans:'分明'},
  {pre:'这家小饭馆的位置十分',blank:'隐蔽',post:'，不熟悉的人很难找到。',hint:'(kín đáo, khuất)',ans:'隐蔽'},
  {pre:'这座老房子是用青',blank:'砖',post:'盖的，已经有一百多年的历史了。',hint:'(gạch)',ans:'砖'},
  {pre:'我从自行车上摔下来，',blank:'膝盖',post:'摔破了，鲜血直流。',hint:'(đầu gối)',ans:'膝盖'},
  {pre:'爷爷腿脚不好，出门离不开',blank:'拐杖',post:'。',hint:'(gậy chống)',ans:'拐杖'},
  {pre:'考古学家在这里',blank:'挖掘',post:'出了大量两千多年前的文物。',hint:'(khai quật)',ans:'挖掘'},
  {pre:'种树要先挖个',blank:'坑',post:'，再把树苗放进去。',hint:'(hố)',ans:'坑'},
  {pre:'伤口一定要保持干净，免得',blank:'发炎',post:'。',hint:'(bị viêm)',ans:'发炎'},
  {pre:'考试前不复习，还抱着',blank:'侥幸',post:'心理，结果当然考砸了。',hint:'(cầu may)',ans:'侥幸'},
  {pre:'第一次离开家，我才真正尝到了想家的',blank:'滋味',post:'。',hint:'(mùi vị, cảm giác)',ans:'滋味'},
  {pre:'为了省一点儿钱而买质量差的东西，结果很快就坏了，真是',blank:'得不偿失',post:'。',hint:'(được chẳng bõ mất)',ans:'得不偿失'},
  {pre:'他',blank:'宁肯',post:'自己吃点儿亏，也不愿让朋友吃亏。',hint:'(thà)',ans:'宁肯'},
  {pre:'爸爸再三',blank:'告诫',post:'我，开车的时候千万不要看手机。',hint:'(khuyên răn)',ans:'告诫'},
  {pre:'这个广告做得很成功，大大激发了消费者的购买',blank:'欲望',post:'。',hint:'(ham muốn)',ans:'欲望'},
  {pre:'两支球队将在今晚',blank:'争夺',post:'冠军。',hint:'(tranh giành)',ans:'争夺'},
  {pre:'他因为拒绝了别人的',blank:'贿赂',post:'，被大家称为“清官”。',hint:'(của hối lộ)',ans:'贿赂'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (况且 · 大 · 倒不如) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['这套房子','交通方便','，','况且','房租','又不贵','，','真是','再合适不过了','。'],ans:'这套房子交通方便，况且房租又不贵，真是再合适不过了。',audio:'这套房子交通方便，况且房租又不贵，真是再合适不过了。'},
  {words:['上海那么大','，','况且','你','又不知道地址','，','怎么能','找到他呢','？'],ans:'上海那么大，况且你又不知道地址，怎么能找到他呢？',audio:'上海那么大，况且你又不知道地址，怎么能找到他呢？'},
  {words:['父亲年龄大了','，','况且','身体','也不好','，','我不放心','他一个人去旅行','。'],ans:'父亲年龄大了，况且身体也不好，我不放心他一个人去旅行。',audio:'父亲年龄大了，况且身体也不好，我不放心他一个人去旅行。'},
  {words:['大冬天的','，','这里','离村子又远','，','分明','不该有','这么小的鸡仔','。'],ans:'大冬天的，这里离村子又远，分明不该有这么小的鸡仔。',audio:'大冬天的，这里离村子又远，分明不该有这么小的鸡仔。'},
  {words:['大周末的','，','让人家','多睡','会儿吧','。'],ans:'大周末的，让人家多睡会儿吧。',audio:'大周末的，让人家多睡会儿吧。'},
  {words:['他','一大清早','就','不知道','忙什么去了','。'],ans:'他一大清早就不知道忙什么去了。',audio:'他一大清早就不知道忙什么去了。'},
  {words:['与其','一个人生气','，','倒不如','找个朋友','说出来','更好','。'],ans:'与其一个人生气，倒不如找个朋友说出来更好。',audio:'与其一个人生气，倒不如找个朋友说出来更好。'},
  {words:['东西不是你的','就不要去争夺','，','倒不如','付出一分努力','，','得到一分收获','。'],ans:'东西不是你的就不要去争夺，倒不如付出一分努力，得到一分收获。',audio:'东西不是你的就不要去争夺，倒不如付出一分努力，得到一分收获。'},
  {words:['与其说','这是一本像册','，','倒不如说','这是','他大半生的历史','。'],ans:'与其说这是一本像册，倒不如说这是他大半生的历史。',audio:'与其说这是一本像册，倒不如说这是他大半生的历史。'},
  {words:['他','宁肯','自己吃点儿亏','，','也不愿','让朋友吃亏','。'],ans:'他宁肯自己吃点儿亏，也不愿让朋友吃亏。',audio:'他宁肯自己吃点儿亏，也不愿让朋友吃亏。'},
  {words:['他们夫妻','将近40岁','才','有了','这个孩子','。'],ans:'他们夫妻将近40岁才有了这个孩子。',audio:'他们夫妻将近40岁才有了这个孩子。'},
  {words:['早知道这样','，','宁肯','当初','不搭理','那窝小鸡','。'],ans:'早知道这样，宁肯当初不搭理那窝小鸡。',audio:'早知道这样，宁肯当初不搭理那窝小鸡。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'这套家具设计简单，既____又实用。',opts:['美丽','美观','美好','美妙'],ans:1,
   exp:'美观 = đẹp mắt (đồ vật, thiết kế), hay đi trong cụm 既美观又实用. 美丽 thường tả người, phong cảnh; 美好 = tốt đẹp (cuộc sống, tương lai); 美妙 = tuyệt diệu (âm thanh, cảm giác).'},
  {wrong:'这家咖啡馆的装修很____，吸引了不少年轻人来拍照。',opts:['别致','别扭','特殊','特长'],ans:0,
   exp:'别致 = độc đáo, mới lạ (lời khen). 别扭 (bài 1) = gượng gạo, khó chịu; 特殊 = đặc thù (trung tính, không phải lời khen); 特长 (bài 9) = sở trường.'},
  {wrong:'出了问题，大家不要互相____，还是先想办法解决吧。',opts:['责任','奇怪','责怪','怪物'],ans:2,
   exp:'互相责怪 = trách móc lẫn nhau. 责任 = trách nhiệm (danh từ); 奇怪 = kỳ lạ; 怪物 = quái vật.'},
  {wrong:'____，小心点儿，地上有水！',opts:['嗯','哦','吧','嗨'],ans:3,
   exp:'嗨 đứng đầu câu để gọi, nhắc người khác chú ý. 嗯 = ừ (đồng ý); 哦 = ồ (chợt hiểu ra); 吧 là trợ từ cuối câu, không đứng đầu câu.'},
  {wrong:'小女孩有一双____的大眼睛，特别讨人喜欢。',opts:['黑暗','黑板','乌黑','天黑'],ans:2,
   exp:'乌黑的眼睛 = đôi mắt đen láy. 黑暗 = tối tăm (nơi chốn, xã hội); 黑板 = bảng đen; 天黑 = trời tối.'},
  {wrong:'小鸡想隐蔽自己，跑着往干草丛里____。',opts:['插','拔','扎','摘'],ans:2,
   exp:'往……里扎 = lủi, chui vào (bài khoá). 插 = cắm (插花); 拔 = nhổ; 摘 = hái.'},
  {wrong:'他看见地上有垃圾，就顺手____起来扔进了垃圾桶。',opts:['选','抬','拿手','拣'],ans:3,
   exp:'拣起来 = nhặt lên (≈ 捡). 选 = chọn (không mang nghĩa nhặt lên); 抬 = khiêng (vật nặng, thường nhiều người); 拿手 (bài 1) = sở trường.'},
  {wrong:'三祖爷顺手拣起一块砖____过去，一下砸中了一只小鸡。',opts:['撇','推','拉','搬'],ans:0,
   exp:'撇过去 = vung tay ném qua. 推 = đẩy; 拉 = kéo; 搬 = khuân, chuyển — đều không làm viên gạch "bay" trúng con gà.'},
  {wrong:'核桃的壳太坚硬了，得用锤子____开。',opts:['切','剪','砸','撕'],ans:2,
   exp:'Dùng búa (锤子) đập → 砸开. 切 = cắt bằng dao; 剪 = cắt bằng kéo; 撕 = xé bằng tay.'},
  {wrong:'春天到了，树____上长出了嫩绿的新芽。',opts:['叶','枝','根','皮'],ans:1,
   exp:'树枝 = cành cây, nơi mầm non nhú ra. 树叶 = lá; 树根 = rễ; 树皮 = vỏ cây.'},
  {wrong:'奶奶____着拐杖，慢慢地走到门口来迎接我们。',opts:['抬','拄','举','背'],ans:1,
   exp:'拄拐杖 = chống gậy (cụm cố định). 抬 = khiêng, nâng; 举 = giơ lên; 背 = cõng, đeo trên lưng.'},
  {wrong:'他踢球时扭伤了脚，走路一____一拐的。',opts:['瘸','跳','步','摇'],ans:0,
   exp:'一瘸一拐 = khập khiễng, cà nhắc (cụm cố định). 一跳一跳 / 一步一步 / 一摇一摆 là những cụm khác, không ghép với 拐.'},
  {wrong:'一个身强力壮的小伙子，____能光躺在床上呢？',opts:['啥','谁','咋','多'],ans:2,
   exp:'咋 = 怎么 (khẩu ngữ): 咋能……呢？ = sao có thể … được (phản vấn). 啥 (bài 5) = 什么; 谁 = ai; 多 hỏi mức độ.'},
  {wrong:'三祖爷尝到了久病不愈的滋味，后来____人就说，真是得不偿失。',opts:['对','向','给','逢'],ans:3,
   exp:'逢人就说 = gặp ai cũng nói (逢 = gặp). 对 / 向 / 给 là giới từ, không tạo được nghĩa "hễ gặp ai là …".'},
  {wrong:'做人不要欲望太多，不要____。',opts:['贪污','贪婪','贫穷','贪玩'],ans:1,
   exp:'贪婪 = tham lam (tính cách) — đúng mạch "dục vọng quá nhiều". 贪污 = tham ô (hành vi dùng chức quyền chiếm của công); 贫穷 = nghèo khổ; 贪玩 = ham chơi.'},
  {wrong:'那位官员因____公款被判了十年徒刑。',opts:['贪婪','贪心','贿赂','贪污'],ans:3,
   exp:'贪污公款 = tham ô công quỹ. 贪婪 / 贪心 là tính từ, không mang tân ngữ 公款; 贿赂 + người (hối lộ ai), không đi với 公款.'},
  {wrong:'有些商家为了赚钱____，甚至卖假货。',opts:['不择手段','得不偿失','废寝忘食','理所当然'],ans:0,
   exp:'不择手段 = bất chấp thủ đoạn (vì mục đích mà làm cả việc xấu như bán hàng giả). 得不偿失 = được chẳng bõ mất; 废寝忘食 = quên ăn quên ngủ (nghĩa khen); 理所当然 (bài 12) = đương nhiên.'},
  {wrong:'这套房子交通方便，____房租又不贵，我们就租下来吧。',opts:['因此','况且','然而','于是'],ans:1,
   exp:'况且 bổ sung thêm một lý do (tiền thuê lại không đắt), hay đi với 又 (điểm ngữ pháp 1). 因此 / 于是 nêu kết quả; 然而 nêu ý chuyển ngoặt.'},
  {wrong:'假期到处都是人山人海，与其出去玩儿，____在家看看书。',opts:['倒不如','不但','而且','何必'],ans:0,
   exp:'与其 A，倒不如 B = A chẳng bằng B, thà B còn hơn (điểm ngữ pháp 3). 不但 / 而且 biểu thị tăng tiến; 何必 = hà tất, cần gì.'},
  {wrong:'____周末的，让人家多睡会儿吧。',opts:['很','最','太','大'],ans:3,
   exp:'大 + thời gian / ngày lễ + 的 để nhấn mạnh (điểm ngữ pháp 2): 大周末的 = cuối tuần cơ mà. 很 / 最 / 太 là phó từ chỉ mức độ, không đứng trước danh từ thời gian.'}
];

// ══════════════════════════════════════════
// DỊCH — câu ghép, ôn từ HSK 6 bài 1–19 và HSK 4–5
// ══════════════════════════════════════════
var translateData = [
  {vi:'Căn phòng ký túc xá này tuy không rộng, nhưng được bài trí rất đẹp mắt và độc đáo.',zh:'这间宿舍虽然不大，但是布置得很美观别致。',py:'Zhè jiān sùshè suīrán bú dà, dànshì bùzhì de hěn měiguān biézhì.',goiY:['虽然……但是……','美观','别致'],giai:'虽然……但是…… nối hai vế đối lập; V得 + 很 + tính từ là bổ ngữ trạng thái; 美观别致 hay đi đôi (bài khoá).'},
  {vi:'Chỉ còn một tháng nữa là thi đại học, ngày nào cậu ấy cũng học quên ăn quên ngủ đến gần nửa đêm.',zh:'离高考只有一个月了，他每天都废寝忘食地学习到将近半夜。',py:'Lí gāokǎo zhǐyǒu yí ge yuè le, tā měitiān dōu fèiqǐn-wàngshí de xuéxí dào jiāngjìn bànyè.',goiY:['离……只有……了','废寝忘食','将近'],giai:'离 + sự kiện + 只有 + thời gian + 了: chỉ còn … nữa là …; 废寝忘食地 làm trạng ngữ (nhớ 地); 将近 + danh từ thời gian 半夜, không dùng 将要.'},
  {vi:'Cậu đừng tuỳ tiện trách người khác, huống hồ việc này vốn là do chính cậu làm hỏng.',zh:'你别随便责怪别人，况且这件事本来就是你自己办砸的。',py:'Nǐ bié suíbiàn zéguài biérén, kuàngqiě zhè jiàn shì běnlái jiù shì nǐ zìjǐ bànzá de.',goiY:['责怪','况且','砸'],giai:'况且 bổ sung một lý do mạnh hơn cho lời khuyên ở vế trước; 办砸 = làm hỏng việc (khẩu ngữ); 是……的 nhấn mạnh người làm.'},
  {vi:'Cuối tuần cơ mà, cậu đã ngồi trong phòng chơi điện thoại gần ba tiếng rồi, chẳng thà đi dạo bên hồ với ông còn hơn.',zh:'大周末的，你已经在房间里玩了将近三个小时手机了，倒不如陪爷爷去湖畔散散步。',py:'Dà zhōumò de, nǐ yǐjīng zài fángjiān li wánle jiāngjìn sān ge xiǎoshí shǒujī le, dào bùrú péi yéye qù húpàn sànsan bù.',goiY:['大……的','将近','倒不如','畔'],giai:'大周末的 nhấn mạnh "cuối tuần cơ mà" (điểm ngữ pháp 2); V了 + thời lượng + O + 了: đã … được bao lâu; 倒不如 nêu phương án nên chọn (điểm ngữ pháp 3).'},
  {vi:'Ông nội tôi cả đời cần kiệm, mặc dù bây giờ cuộc sống đã sung túc, ông vẫn không nỡ vứt những bộ quần áo cũ.',zh:'我祖父一辈子勤俭，尽管现在日子富裕了，他仍然舍不得扔掉旧衣服。',py:'Wǒ zǔfù yíbèizi qínjiǎn, jǐnguǎn xiànzài rìzi fùyù le, tā réngrán shěbude rēngdiào jiù yīfu.',goiY:['祖父','勤俭','尽管……仍然……','富裕'],giai:'尽管……仍然……: mặc dù (sự thật đã xảy ra) … vẫn …; 舍不得 + V = không nỡ ….'},
  {vi:'Đường núi vốn đã khó đi, huống hồ trời lại sắp tối, chúng ta chẳng thà nghỉ lại làng một đêm, mai hẵng đi tiếp.',zh:'山路本来就不好走，况且天将近黑了，我们倒不如在村里住一晚，明天再走。',py:'Shānlù běnlái jiù bù hǎo zǒu, kuàngqiě tiān jiāngjìn hēi le, wǒmen dào bùrú zài cūn li zhù yì wǎn, míngtiān zài zǒu.',goiY:['况且','将近','倒不如'],giai:'Hai lý do (本来……, 况且……) dẫn tới lựa chọn 倒不如……; 天将近黑了 = trời sắp tối (将近 + tính từ); 明天再走 = mai hẵng đi.'},
  {vi:'Một khi đã ôm tâm lý cầu may thì cậu sẽ không chịu cố gắng nữa, kết quả chắc chắn là được chẳng bõ mất.',zh:'一旦抱着侥幸心理，你就不肯再努力了，结果肯定会得不偿失。',py:'Yídàn bàozhe jiǎoxìng xīnlǐ, nǐ jiù bù kěn zài nǔlì le, jiéguǒ kěndìng huì débùchángshī.',goiY:['一旦……就……','侥幸','得不偿失'],giai:'一旦……就……: một khi … thì …; 侥幸心理 = tâm lý cầu may (không dịch là 幸运心理).'},
  {vi:'Mẹ luôn răn tôi rằng: vì điểm cao mà bất chấp thủ đoạn thì dù có thắng cũng chẳng vẻ vang gì.',zh:'妈妈总是告诫我，为了高分而不择手段，就算赢了也不光彩。',py:'Māma zǒngshì gàojiè wǒ, wèile gāofēn ér bùzé-shǒuduàn, jiùsuàn yíngle yě bù guāngcǎi.',goiY:['告诫','为了……而……','不择手段','就算……也……'],giai:'为了 A 而 B: vì A mà B (văn viết); 就算……也……: dù có … cũng … (giả thiết nhượng bộ).'},
  {vi:'Tôi thà nhường suất học bổng duy nhất ấy cho bạn cùng bàn có hoàn cảnh khó khăn hơn, chứ không muốn tranh giành với bạn ấy, dù sao làm người cũng không nên quá tham lam.',zh:'我宁肯把那唯一的奖学金名额让给家境更困难的同桌，也不愿意跟他争夺，毕竟做人不能太贪婪。',py:'Wǒ nìngkěn bǎ nà wéiyī de jiǎngxuéjīn míng\'é ràng gěi jiājìng gèng kùnnan de tóngzhuō, yě bú yuànyì gēn tā zhēngduó, bìjìng zuò rén bù néng tài tānlán.',goiY:['宁肯……也不……','争夺','毕竟','贪婪'],giai:'宁肯 A，也不 B = thà A chứ không B; 毕竟 nêu lý do gốc rễ ở vế cuối; 把……让给…… = nhường … cho ….'},
  {vi:'Không ít người vì dục vọng quá nhiều mà tham ô, nhận hối lộ, cuối cùng mất hết tất cả; có thể thấy, thứ không phải của mình thì dù có giành được cũng không giữ nổi.',zh:'不少人因为欲望太多而贪污受贿，最后失去了一切，可见，不是自己的东西，就是争来了也守不住。',py:'Bù shǎo rén yīnwèi yùwàng tài duō ér tānwū shòuhuì, zuìhòu shīqùle yíqiè, kějiàn, bú shì zìjǐ de dōngxi, jiùshì zhēnglái le yě shǒu bu zhù.',goiY:['欲望','因为……而……','贪污','可见'],giai:'因为……而……: vì … mà … (văn viết); 可见 rút ra kết luận; 就是……也…… = dù có … cũng … (giống câu trong bài khoá).'}
];

// Chiều Trung → Việt — bám ý bài khoá, nội dung khác chiều trên
var translateDataRev = [
  {vi:'Bề ngoài Ổ gà vàng hơi kỳ lạ, trông như một món đồ mỹ nghệ, rất đẹp mắt và độc đáo.',zh:'金鸡窝外表有些古怪，像件工艺品，很是美观别致。',py:'Jīnjīwō wàibiǎo yǒuxiē gǔguài, xiàng jiàn gōngyìpǐn, hěn shì měiguān biézhì.',goiY:['外表 = bề ngoài','工艺品 = đồ mỹ nghệ','美观别致 = đẹp và độc đáo'],giai:'很是 = rất (văn viết); 像件工艺品 lược 一 trước lượng từ 件 — dịch "trông như một món …".'},
  {vi:'Hồi nhỏ chúng tôi thích ngâm chân xuống nước, các cụ già thấy vậy liền trách chúng tôi.',zh:'我们小时候喜欢把脚浸泡在水里，老人们见了，就会责怪我们。',py:'Wǒmen xiǎoshíhou xǐhuan bǎ jiǎo jìnpào zài shuǐ li, lǎorénmen jiàn le, jiù huì zéguài wǒmen.',goiY:['浸泡 = ngâm','责怪 = trách','见了，就会…… = thấy là sẽ …'],giai:'把 + O + 浸泡在…… dịch gọn "ngâm … xuống nước"; 就会 chỉ phản ứng lặp lại theo thói quen — dịch "liền, thế nào cũng".'},
  {vi:'Tết âm lịch sắp đến, ông cụ Ba nhà họ Tống ra đồng từ sớm, bỗng nhìn thấy một ổ gà con.',zh:'农历年将近，宋家三祖爷早早下了地，突然看到了一窝小鸡。',py:'Nónglì nián jiāngjìn, Sòng jiā Sān zǔyé zǎozǎo xiàle dì, tūrán kàndàole yì wō xiǎo jī.',goiY:['农历年将近 = Tết âm lịch sắp đến','下了地 = ra đồng','一窝 = một ổ'],giai:'将近 đứng sau danh từ thời gian làm vị ngữ: 农历年将近; 下地 = ra đồng làm việc, không dịch "xuống đất".'},
  {vi:'Mấy con gà con ấy dường như mới rời ổ chưa được mấy ngày, hơn nữa thân mình lại đen nhánh, đáng yêu vô cùng.',zh:'那小鸡仿佛刚出窝没几天，况且是乌黑乌黑的身子，可爱极了。',py:'Nà xiǎo jī fǎngfú gāng chū wō méi jǐ tiān, kuàngqiě shì wūhēi wūhēi de shēnzi, kě\'ài jí le.',goiY:['仿佛 = dường như','况且 = hơn nữa','乌黑乌黑的 = đen nhánh'],giai:'况且 bổ sung thêm một lý do khiến gà con đáng yêu; 乌黑乌黑的 lặp ABAB để nhấn mạnh — dịch "đen nhánh", không thêm "rất".'},
  {vi:'Ông cụ Ba lấy làm lạ lắm: giữa mùa đông giá rét, chỗ này lại xa làng, rõ ràng không thể có gà con nhỏ như vậy!',zh:'三祖爷颇感诧异，大冬天的，这里离村子又远，分明不该有这么小的鸡仔呀！',py:'Sān zǔyé pō gǎn chàyì, dà dōngtiān de, zhèli lí cūnzi yòu yuǎn, fēnmíng bù gāi yǒu zhème xiǎo de jīzǎi ya!',goiY:['颇感诧异 = lấy làm lạ lắm','大冬天的 = giữa mùa đông giá rét','分明 = rõ ràng là'],giai:'大冬天的 nhấn mạnh thời điểm (điểm ngữ pháp 2) — dịch "giữa mùa đông giá rét", không dịch "mùa đông to"; 不该有 = lẽ ra không thể có.'},
  {vi:'Ông cụ Ba tiện tay nhặt một viên gạch ném qua, trúng ngay một con gà con, con gà con trong chớp mắt biến thành một cục vàng.',zh:'三祖爷顺手拣起一块砖撇过去，一下砸中了一只小鸡，小鸡瞬间变成了一块金子。',py:'Sān zǔyé shùnshǒu jiǎnqǐ yí kuài zhuān piě guòqù, yíxià zázhòngle yì zhī xiǎo jī, xiǎo jī shùnjiān biànchéngle yí kuài jīnzi.',goiY:['拣起 = nhặt lên','撇过去 = ném qua','砸中 = trúng','瞬间 = trong chớp mắt'],giai:'Chuỗi động tác liên tiếp — giữ nhịp ngắn; 一下 = ngay một phát; 瞬间 (bài 1) dịch "trong chớp mắt".'},
  {vi:'Gà mẹ mổ ngay một phát vào dưới đầu gối ông cụ Ba, ông đau muốn chết, đành nhặt một cành cây làm gậy chống, khập khiễng đi về nhà.',zh:'老母鸡在三祖爷膝盖下边就是一口，三祖爷疼得要命，只好拣个树枝当拐杖拄着，一瘸一拐地回了家。',py:'Lǎo mǔjī zài Sān zǔyé xīgài xiàbian jiù shì yì kǒu, Sān zǔyé téng de yàomìng, zhǐhǎo jiǎn ge shùzhī dàng guǎizhàng zhǔzhe, yì qué yì guǎi de huíle jiā.',goiY:['膝盖 = đầu gối','要命 = … muốn chết','拄 = chống','一瘸一拐 = khập khiễng'],giai:'就是一口 = "mổ ngay một phát" (就是 nhấn động tác dứt khoát); 疼得要命 (bài 9) dịch "đau muốn chết"; 当拐杖拄着 = làm gậy chống.'},
  {vi:'Cái chân bị thương của ông cụ Ba cứ viêm mãi; một chàng trai khoẻ mạnh cường tráng, sao có thể cứ nằm lì trên giường được?',zh:'三祖爷受伤的腿一直发炎，一个身强力壮的小伙子，咋能光躺在床上呢？',py:'Sān zǔyé shòushāng de tuǐ yìzhí fāyán, yí ge shēnqiáng-lìzhuàng de xiǎohuǒzi, zǎ néng guāng tǎng zài chuáng shang ne?',goiY:['发炎 = bị viêm','咋能……呢？= sao có thể … được?','光 = chỉ, cứ'],giai:'咋 = 怎么 (khẩu ngữ); câu phản vấn 咋能……呢？ ngụ ý "không thể cứ nằm mãi" — dịch "sao có thể … được?".'},
  {vi:'Về sau ông cụ Ba gặp ai cũng nói: thật là được chẳng bõ mất, sớm biết thế này, thà lúc đầu đừng đoái hoài gì đến ổ gà con ấy.',zh:'三祖爷后来逢人就说，真是得不偿失，早知道这样，宁肯当初不搭理那窝小鸡。',py:'Sān zǔyé hòulái féng rén jiù shuō, zhēn shì débùchángshī, zǎo zhīdào zhèyàng, nìngkěn dāngchū bù dāli nà wō xiǎo jī.',goiY:['逢人就说 = gặp ai cũng nói','得不偿失 = được chẳng bõ mất','宁肯 = thà'],giai:'早知道……，宁肯当初…… = sớm biết …, thà lúc đầu … (hối hận); 搭理 = để ý, đoái hoài.'},
  {vi:'Làm người đừng tham lam, thứ gì không phải của mình thì đừng đi tranh giành, dù có giành được cũng không giữ nổi; chẳng thà bỏ ra một phần công sức, gặt hái một phần thành quả.',zh:'做人不要贪婪，东西不是你的就不要去争夺，就是争来，也守不住，倒不如付出一分努力，得到一分收获。',py:'Zuò rén búyào tānlán, dōngxi bú shì nǐ de jiù búyào qù zhēngduó, jiùshì zhēnglái, yě shǒu bu zhù, dào bùrú fùchū yì fēn nǔlì, dédào yì fēn shōuhuò.',goiY:['贪婪 = tham lam','争夺 = tranh giành','就是……也…… = dù có … cũng …','倒不如 = chẳng thà'],giai:'就是……也……: giả thiết nhượng bộ; 倒不如 nêu lựa chọn tốt hơn sau khi so sánh (điểm ngữ pháp 3); 一分……一分…… dịch "một phần … một phần …".'}
];


// ══════════════════════════════════════════
// LUYỆN VIẾT — đề 运用 · 写一写 của sách (tr. 215): kể một câu chuyện tương tự, nhan đề 争来的东西守不住, ≥400 chữ
// ══════════════════════════════════════════
var writingData = {
  kieu:'sgk', soChu:400,
  de:'这篇课文告诉我们这样一个道理“做人不要欲望太多，不要贪婪。东西不是你的就不要去争夺，就是争来，也守不住。倒不如付出一分努力，得到一分收获。”在你们国家也有这样的传说或故事吗？请参照练习5讲一个类似的故事，可以从故事发生的时间、地点、背景、事情经过、给人的启发等几方面来讲述，请以“争来的东西守不住”为题，字数不少于400字。',
  prompt:'Bài khoá cho chúng ta một đạo lý: "Làm người đừng có quá nhiều dục vọng, đừng tham lam. Thứ gì không phải của mình thì đừng đi tranh giành, dù có giành được cũng không giữ nổi. Chẳng thà bỏ ra một phần công sức, gặt hái một phần thành quả." Ở nước em có truyền thuyết hay câu chuyện như vậy không? Hãy tham khảo bài tập 5, kể một câu chuyện tương tự, có thể kể theo các phương diện: thời gian, địa điểm, bối cảnh, diễn biến sự việc, bài học rút ra…; lấy nhan đề "争来的东西守不住" (Của giành được thì không giữ nổi), số chữ không ít hơn 400.',
  dan:[
    {hoi:'故事发生的时间、地点',goiY:'很久以前 / 从前……；在……的一个小村子里（参照练习5：时间）'},
    {hoi:'背景：故事里有哪些人物？他们的生活怎么样？',goiY:'……有兄弟两个 / 一家人；一个勤劳、勤俭，一个贪婪、欲望太多（参照练习5：背景、人物）'},
    {hoi:'事情经过：发生了什么事？结果怎么样？',goiY:'①遇到了……（好运、宝物） ②知足的人……，日子渐渐富裕起来 ③贪心的人想得到更多，于是…… ④结果……，一样也没守住（参照练习5：事情经过①—⑤）'},
    {hoi:'这个故事给人们的启发',goiY:'做人不要欲望太多，不要贪婪；东西不是你的就不要去争夺，就是争来，也守不住；倒不如……（参照练习5：这个故事给人们的启发）'}
  ],
  tuNen:['争夺','贪婪','欲望','宁肯','得不偿失','告诫','勤俭','富裕','况且','倒不如'],
  cauTruc:[
    {ten:'很久以前，在……，住着……', nhan:'Mở bài · thời gian, địa điểm', vd:'很久以前，在越南南部的一个小村子里，住着兄弟两个。', khi:'Câu mở đầu quen thuộc của truyện dân gian: nêu ngay thời gian, địa điểm, nhân vật.'},
    {ten:'A……，B却……', nhan:'Giới thiệu nhân vật đối lập', vd:'弟弟勤劳又勤俭，哥哥却又懒又贪婪。', khi:'Truyện kiểu "người hiền – kẻ tham" cần làm nổi sự đối lập ngay từ đầu (phần 背景).'},
    {ten:'有一天，……；没想到……', nhan:'Mở nút · biến cố', vd:'有一天，一只大鸟飞来吃杨桃，没想到它竟然开口说话了。', khi:'Chuyển sang phần 事情经过, dùng 有一天 / 没想到 báo hiệu biến cố.'},
    {ten:'……，况且……，(所以)……', nhan:'Giải thích lựa chọn bằng 况且', vd:'他觉得金子够用就好，况且袋子也装不下更多了。', khi:'Khi giải thích vì sao nhân vật tốt biết đủ — dùng điểm ngữ pháp 1.'},
    {ten:'……宁肯……，也要……', nhan:'Khắc hoạ lòng tham', vd:'哥哥宁肯把全部的房子和田地都给弟弟，也要换那棵杨桃树。', khi:'Cho thấy kẻ tham sẵn sàng đánh đổi mọi thứ để giành lấy thứ không phải của mình.'},
    {ten:'谁知……，结果……', nhan:'Cao trào · kết cục', vd:'谁知金子太重，大鸟没了力气，结果哥哥连人带金子一起掉进了大海。', khi:'Kể kết cục bất ngờ của nhân vật tham lam.'},
    {ten:'这个故事告诫我们：……，与其……，倒不如……', nhan:'Kết bài · bài học', vd:'这个故事告诫我们：与其贪心地争夺别人的东西，倒不如付出一分努力，得到一分收获。', khi:'Phần 给人的启发: dùng 告诫 và 倒不如 (điểm ngữ pháp 3) để chốt đúng ý của đề.'}
  ],
  checklist:[
    'Đã ghi nhan đề "争来的东西守不住" và viết đủ ít nhất 400 chữ Hán (không đếm dấu câu) chưa?',
    'Câu chuyện có đủ các phương diện đề yêu cầu: thời gian, địa điểm, bối cảnh (nhân vật), diễn biến, bài học không?',
    'Diễn biến có rõ ràng theo trình tự thời gian (有一天 → 第二天 → 后来 → 结果) và có kết cục cho nhân vật tham lam không?',
    'Đã dùng ít nhất 2 trong 3 điểm ngữ pháp của bài (况且 / 大……的 / 倒不如) và ít nhất 6 từ mới chưa?',
    'Đoạn kết có nêu được bài học giống tinh thần bài khoá (不要贪婪, 争来的东西守不住, 倒不如……) không?'
  ],
  model:{
    zh:'很久以前，在越南南部的一个小村子里，住着兄弟两个。父母去世后，贪婪的哥哥把房子、田地和牛都争夺了过去，只给弟弟留下一棵杨桃树。弟弟没有抱怨，他起早贪黑，勤劳又勤俭，日子虽然不富裕，却过得很踏实。有一年，杨桃树结满了果子。一天，一只大鸟飞来吃杨桃，弟弟心疼地说：“鸟儿啊，我们全家就靠这棵树生活呢！”没想到大鸟竟然开口说话了：“吃你一个果，还你一块金，缝个三尺袋，拿去装黄金。”第二天，弟弟跟随大鸟飞到了海上的一个小岛，岛上到处都是金子和宝石。弟弟只装满了那个小袋子就回家了，他觉得金子够用就好，况且袋子也装不下更多了。从此，他的日子渐渐富裕起来。哥哥知道后眼红极了，他宁肯把全部的房子和田地都给弟弟，也要换那棵杨桃树。大鸟又来了，哥哥偷偷缝了一个十二尺长的大袋子。到了岛上，他拼命往袋子里装金子，连衣服里都塞满了。谁知金子太重，大鸟飞到大海上空时没了力气，哥哥连人带金子一起掉进了大海。这个故事告诫我们：做人不要欲望太多，不要贪婪。哥哥争来的东西一样也没守住，真是得不偿失。与其贪心地争夺别人的东西，倒不如付出一分努力，得到一分收获，过平稳和顺的日子。',
    py:'Hěn jiǔ yǐqián, zài Yuènán nánbù de yí ge xiǎo cūnzi li, zhùzhe xiōngdì liǎng ge. Fùmǔ qùshì hòu, tānlán de gēge bǎ fángzi, tiándì hé niú dōu zhēngduóle guòqù, zhǐ gěi dìdi liúxià yì kē yángtáo shù. Dìdi méiyǒu bàoyuàn, tā qǐzǎo-tānhēi, qínláo yòu qínjiǎn, rìzi suīrán bú fùyù, què guò de hěn tāshi. Yǒu yì nián, yángtáo shù jiēmǎnle guǒzi. Yì tiān, yì zhī dà niǎo fēilái chī yángtáo, dìdi xīnténg de shuō: "Niǎor a, wǒmen quánjiā jiù kào zhè kē shù shēnghuó ne!" Méi xiǎngdào dà niǎo jìngrán kāikǒu shuōhuà le: "Chī nǐ yí ge guǒ, huán nǐ yí kuài jīn, féng ge sān chǐ dài, ná qù zhuāng huángjīn." Dì-èr tiān, dìdi gēnsuí dà niǎo fēidàole hǎi shang de yí ge xiǎo dǎo, dǎo shang dàochù dōu shì jīnzi hé bǎoshí. Dìdi zhǐ zhuāngmǎnle nàge xiǎo dàizi jiù huí jiā le, tā juéde jīnzi gòu yòng jiù hǎo, kuàngqiě dàizi yě zhuāng bu xià gèng duō le. Cóngcǐ, tā de rìzi jiànjiàn fùyù qǐlái. Gēge zhīdào hòu yǎnhóng jí le, tā nìngkěn bǎ quánbù de fángzi hé tiándì dōu gěi dìdi, yě yào huàn nà kē yángtáo shù. Dà niǎo yòu lái le, gēge tōutōu féngle yí ge shí\'èr chǐ cháng de dà dàizi. Dàole dǎo shang, tā pīnmìng wǎng dàizi li zhuāng jīnzi, lián yīfu li dōu sāimǎn le. Shéi zhī jīnzi tài zhòng, dà niǎo fēidào dàhǎi shàngkōng shí méile lìqi, gēge lián rén dài jīnzi yìqǐ diàojìnle dàhǎi. Zhège gùshi gàojiè wǒmen: zuò rén búyào yùwàng tài duō, búyào tānlán. Gēge zhēnglái de dōngxi yí yàng yě méi shǒuzhù, zhēn shì débùchángshī. Yǔqí tānxīn de zhēngduó biérén de dōngxi, dào bùrú fùchū yì fēn nǔlì, dédào yì fēn shōuhuò, guò píngwěn héshùn de rìzi.',
    vn:'Ngày xửa ngày xưa, ở một ngôi làng nhỏ miền Nam Việt Nam có hai anh em. Sau khi cha mẹ mất, người anh tham lam giành hết nhà cửa, ruộng vườn và trâu bò, chỉ để lại cho em một cây khế. Người em không oán trách, thức khuya dậy sớm, vừa chăm chỉ vừa tiết kiệm, cuộc sống tuy không sung túc nhưng rất yên ổn. Có một năm, cây khế sai trĩu quả. Một hôm, một con chim lớn bay đến ăn khế, người em xót xa nói: "Chim ơi, cả nhà tôi chỉ trông vào cây khế này thôi!" Không ngờ chim lớn cất tiếng: "Ăn một quả, trả cục vàng, may túi ba gang, mang đi mà đựng." Hôm sau, người em theo chim bay ra một hòn đảo giữa biển, trên đảo đâu đâu cũng là vàng bạc châu báu. Người em chỉ lấy đầy chiếc túi nhỏ rồi về, anh nghĩ vàng đủ dùng là được, hơn nữa túi cũng chẳng đựng thêm được nữa. Từ đó, cuộc sống của người em dần dần sung túc. Người anh biết chuyện thì thèm muốn vô cùng, thà đem toàn bộ nhà cửa ruộng vườn cho em cũng phải đổi lấy cây khế. Chim lại đến, người anh lén may một chiếc túi to dài mười hai gang. Đến đảo, hắn ra sức nhét vàng vào túi, đến cả trong áo cũng nhét đầy. Nào ngờ vàng quá nặng, chim bay đến giữa biển thì kiệt sức, người anh cùng cả túi vàng rơi tõm xuống biển. Câu chuyện răn dạy chúng ta: làm người đừng có quá nhiều dục vọng, đừng tham lam. Những thứ người anh giành được rốt cuộc chẳng giữ nổi thứ nào, thật là được chẳng bõ mất. Thay vì tham lam tranh giành của người khác, chẳng thà bỏ ra một phần công sức, gặt hái một phần thành quả, sống những ngày bình ổn, êm ấm.'
  }
};

// ══════════════════════════════════════════
// LUYỆN NÓI — đúng bảng 练习5 của sách: 根据提示，简述课文主要内容
// ══════════════════════════════════════════
var speakingData = {
  intro:'Đây là bảng bài tập 5 trong sách: <b>根据提示，简述课文主要内容</b> (dựa vào gợi ý, tóm tắt nội dung chính của bài khoá). Mỗi câu hỏi là một dòng của bảng (dòng "讲述一下那个久远的传说" được tách theo 4 ô nhỏ: 背景 · 时间 · 人物 · 事情经过), cột gợi ý giữ nguyên như sách. Bấm loa nghe câu hỏi, <b>tự ghi âm câu trả lời trước</b> rồi mới mở câu mẫu. Cố dùng đúng các từ trong gợi ý.',
  questions:[
    {q_zh:'姥姥村里的人把什么称为“金鸡窝”？描述一下金鸡窝的样子。',
     q_vn:'Người trong làng bà ngoại gọi cái gì là "Ổ gà vàng"? Hãy miêu tả hình dáng của Ổ gà vàng.',
     hint:'①大石头、凹陷、鸟窝 ②古怪、红色、镶嵌……小石头、像……、美观别致',
     sample:'姥姥村里的人把村东池塘畔的一块椭圆形大石头称为“金鸡窝”，因为那石头中间凹陷，像个鸡窝。金鸡窝外表有些古怪，是红色的，上面镶嵌着些不同色彩、不同形状的小石头，像件工艺品，很是美观别致。',
     sample_vn:'Người trong làng bà ngoại gọi hòn đá lớn hình bầu dục bên bờ ao phía đông làng là "Ổ gà vàng", vì hòn đá ấy lõm ở giữa, trông như một cái ổ gà. Bề ngoài Ổ gà vàng hơi kỳ lạ, màu đỏ, trên đó khảm những viên đá nhỏ khác màu sắc, khác hình dạng, trông như một món đồ mỹ nghệ, rất đẹp mắt và độc đáo.',
     note:'把 A 称为 B = gọi A là B; miêu tả theo trình tự: hình dạng → màu sắc → chi tiết (镶嵌着……) → cảm nhận (美观别致).'},
    {q_zh:'讲述一下那个久远的传说。（背景）',
     q_vn:'Hãy kể lại truyền thuyết xa xưa ấy. (Bối cảnh)',
     hint:'宋家几兄弟、起早贪黑、废寝忘食、勤劳勤俭、日子富裕',
     sample:'很久以前，姥爷祖父的祖父那一辈，宋家有几兄弟。大家起早贪黑，废寝忘食，勤劳加勤俭，所以日子过得还算富裕。',
     sample_vn:'Ngày xưa, vào đời ông nội của ông nội ông ngoại, nhà họ Tống có mấy anh em. Ai nấy thức khuya dậy sớm, quên ăn quên ngủ, đã cần cù lại tiết kiệm, nên cuộc sống cũng coi như sung túc.',
     note:'起早贪黑, 废寝忘食 là hai thành ngữ bốn chữ nói về sự chăm chỉ; 所以 nối nguyên nhân (勤劳加勤俭) với kết quả (日子富裕).'},
    {q_zh:'讲述一下那个久远的传说。（时间）',
     q_vn:'Hãy kể lại truyền thuyết xa xưa ấy. (Thời gian)',
     hint:'农历年将近',
     sample:'故事发生在农历年将近的时候，也就是快过春节了，正是大冬天。',
     sample_vn:'Câu chuyện xảy ra vào lúc Tết âm lịch sắp đến, tức là sắp ăn Tết, đang giữa mùa đông giá rét.',
     note:'将近 đứng sau danh từ thời gian làm vị ngữ: 农历年将近; 也就是…… để giải thích thêm; 大冬天 ôn điểm ngữ pháp 2.'},
    {q_zh:'讲述一下那个久远的传说。（人物）',
     q_vn:'Hãy kể lại truyền thuyết xa xưa ấy. (Nhân vật)',
     hint:'宋家三祖爷',
     sample:'故事的主人公是宋家三祖爷。他是宋家几兄弟中的一个，当时还是个身强力壮的小伙子。',
     sample_vn:'Nhân vật chính của câu chuyện là ông cụ Ba nhà họ Tống. Ông là một trong mấy anh em nhà họ Tống, lúc ấy còn là một chàng trai khoẻ mạnh cường tráng.',
     note:'主人公 = nhân vật chính; 当时还是…… = lúc ấy vẫn còn là ….'},
    {q_zh:'讲述一下那个久远的传说。（事情经过）',
     q_vn:'Hãy kể lại truyền thuyết xa xưa ấy. (Diễn biến sự việc)',
     hint:'①发现一窝小鸡 ②捉小鸡，小鸡变金子 ③三祖爷受伤 ④再次找小鸡，没找到，发现大石头 ⑤三祖爷治疗受伤的腿',
     sample:'三祖爷在地里发现了一窝乌黑的小鸡，他颇感诧异。他去捉小鸡，拣起一块砖撇过去，砸中了一只，那只小鸡瞬间变成了一块金子。老母鸡急了，在他膝盖下边咬了一口，他只好拄着树枝一瘸一拐地回了家。家里人赶到地里再找小鸡，怎么也没找到，只挖出了一块像鸡窝一样的大石头。后来三祖爷的腿一直发炎，他只好用金子换钱看病，钱用完了，腿也好了。',
     sample_vn:'Ông cụ Ba phát hiện một ổ gà con đen nhánh ngoài đồng, ông lấy làm lạ lắm. Ông đi bắt gà con, nhặt một viên gạch ném qua, trúng một con, con gà con ấy trong chớp mắt biến thành một cục vàng. Gà mẹ cuống lên, mổ một phát vào dưới đầu gối ông, ông đành chống cành cây khập khiễng về nhà. Người nhà chạy ra đồng tìm lại gà con, tìm thế nào cũng không thấy, chỉ đào được một hòn đá lớn trông như ổ gà. Về sau chân ông cụ Ba cứ viêm mãi, ông đành đem vàng đổi tiền chữa bệnh, tiền tiêu hết thì chân cũng khỏi.',
     note:'Kể đủ 5 bước theo trình tự thời gian; nối bằng 后来 / 结果 / 只好; chú ý động từ chuỗi 拣起……撇过去……砸中…….'},
    {q_zh:'这个故事给人们的启发',
     q_vn:'Câu chuyện này gợi cho mọi người điều gì?',
     hint:'不要欲望太多，不要贪婪',
     sample:'这个故事告诉我们，做人不要欲望太多，不要贪婪。东西不是自己的就不要去争夺，就是争来，也守不住，倒不如付出一分努力，得到一分收获。',
     sample_vn:'Câu chuyện này cho chúng ta biết: làm người đừng có quá nhiều dục vọng, đừng tham lam. Thứ gì không phải của mình thì đừng đi tranh giành, dù có giành được cũng không giữ nổi, chẳng thà bỏ ra một phần công sức, gặt hái một phần thành quả.',
     note:'Dùng 倒不如 (điểm ngữ pháp 3) để chốt lời khuyên; 就是……也…… = dù có … cũng ….'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 6 — 听力 (sách HSK 6 không có sách bài tập nghe)
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 6 phần nghe chỉ phát <b>một lượt</b>. Bấm nút loa nghe, trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. ' +
         'Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Soạn theo dạng đề HSK 6 · chủ đề bài 20',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你的膝盖怎么了？走路一瘸一拐的。'},
            {sp:'男',zh:'昨天晚上骑车回家，不小心掉进了路边的一个坑里。还算侥幸，骨头没事，只是摔破了点儿皮。'}],
     q:'关于男的，可以知道什么？',qvn:'Về người đàn ông, có thể biết điều gì?',
     opts:['骨头摔断了','掉进坑里受了点儿伤','被自行车撞了','一点儿也不能走路了'],ans:1,
     why:'掉进了路边的一个坑里 + 摔破了点儿皮 → bị thương nhẹ. 骨头没事 nên A sai; anh ấy vẫn đi được (一瘸一拐) nên D sai.',
     words:['膝盖','瘸','坑','侥幸']},

    {n:2,
     lines:[{sp:'男',zh:'这块石头上镶嵌着这么多彩色的小石子，真别致！是在哪儿买的？'},
            {sp:'女',zh:'哪儿是买的呀，是我爷爷在河边拣回来，自己一点儿一点儿做的。'}],
     q:'这块石头是怎么来的？',qvn:'Hòn đá này từ đâu mà có?',
     opts:['在商店买的','朋友送的','爷爷自己做的','从山上挖出来的'],ans:2,
     why:'哪儿是买的呀 phủ định việc mua; 是我爷爷在河边拣回来，自己……做的 → ông tự làm.',
     words:['镶嵌','别致','拣']},

    {n:3,
     lines:[{sp:'女',zh:'听说小王为了当上经理不择手段，连贿赂领导的事都做了。'},
            {sp:'男',zh:'是啊，结果被公司发现，直接开除了。真是得不偿失。'}],
     q:'小王现在怎么样？',qvn:'Tiểu Vương bây giờ thế nào?',
     opts:['当上了经理','被公司开除了','得到了奖励','自己辞职了'],ans:1,
     why:'结果被公司发现，直接开除了 → bị đuổi việc. 得不偿失 = được chẳng bõ mất.',
     words:['不择手段','贿赂','得不偿失']},

    {n:4,
     lines:[{sp:'男',zh:'大过年的，你怎么还在加班？'},
            {sp:'女',zh:'没办法，这个项目下周一就要交，况且老板也答应给我们双倍工资。'}],
     q:'女的为什么还在加班？',qvn:'Vì sao người phụ nữ vẫn đang tăng ca?',
     opts:['她喜欢工作','她不想回家','项目很急，况且有双倍工资','老板批评了她'],ans:2,
     why:'下周一就要交 (gấp) + 况且……双倍工资 (lý do bổ sung) → C. 大过年的 = Tết nhất cơ mà.',
     words:['况且']},

    {n:5,
     lines:[{sp:'女',zh:'这双鞋打折以后才一百块，要不要多买几双？'},
            {sp:'男',zh:'与其买一堆穿不了几次的便宜货，倒不如买一双质量好的，能穿好几年呢。'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['多买几双便宜的','一双也不买','只买打折的','买一双质量好的'],ans:3,
     why:'与其 A，倒不如 B → chọn B: 买一双质量好的. Anh ấy không phản đối mua, chỉ phản đối mua nhiều đồ rẻ kém chất lượng.',
     words:['倒不如']},

    {n:6,
     lines:[{sp:'男',zh:'我奶奶常常告诫我们，做人要勤俭，不要贪婪。她自己一辈子都舍不得乱花一分钱，衣服破了也是补一补接着穿。'}],
     q:'关于奶奶，下列哪项正确？',qvn:'Về người bà, câu nào dưới đây đúng?',
     opts:['生活很勤俭','非常富裕','喜欢买新衣服','对孙子很严厉'],ans:0,
     why:'舍不得乱花一分钱，衣服破了也是补一补接着穿 → rất cần kiệm. Bài không nói bà giàu hay nghiêm khắc.',
     words:['告诫','勤俭','贪婪']},

    {n:7,
     lines:[{sp:'女',zh:'很多国家都有类似“金鸡窝”这样的民间故事。故事里，勤劳善良的人往往得到好的回报，而贪婪的人总想争夺更多，最后却什么都守不住。这些故事一代又一代地传下来，告诫人们不要被欲望控制。'}],
     q:'这段话主要想告诉我们什么？',qvn:'Đoạn văn chủ yếu muốn nói với chúng ta điều gì?',
     opts:['不要被欲望控制','民间故事都很有趣','勤劳的人都很富裕','每个国家的故事都一样'],ans:0,
     why:'Câu chốt: 告诫人们不要被欲望控制. B, D không được nói tới; C nói quá (往往得到好的回报 ≠ 都很富裕).',
     words:['贪婪','争夺','告诫','欲望']},

    {n:8,
     lines:[{sp:'男',zh:'伤口发炎是很常见的问题。受伤以后，很多人抱着侥幸心理，觉得小伤口没关系，结果伤口一直发炎，疼得走不了路。其实，只要及时清洗伤口，保持干净，就能避免发炎。'}],
     q:'说话人认为怎样才能避免伤口发炎？',qvn:'Người nói cho rằng làm thế nào mới tránh được vết thương bị viêm?',
     opts:['多休息','吃好一点儿','拄着拐杖走路','及时清洗，保持干净'],ans:3,
     why:'只要及时清洗伤口，保持干净，就能避免发炎 → D. 侥幸心理 (coi thường vết thương nhỏ) là nguyên nhân khiến viêm.',
     words:['发炎','侥幸']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Bạn cùng lớp rủ em tối nay đi xem phim, trong khi mai là ngày thi.',
     a:{sp:'Bạn cùng lớp',zh:'今晚我们去看电影吧？新上映的那部特别好看！',vn:'Tối nay mình đi xem phim nhé? Phim mới chiếu hay lắm!'},
     need:['Dùng 况且'],
     sample:'今晚我不去了，明天就考试了，况且我还有两课没复习呢。',
     samplePy:'Jīnwǎn wǒ bú qù le, míngtiān jiù kǎoshì le, kuàngqiě wǒ hái yǒu liǎng kè méi fùxí ne.',
     sampleVn:'Tối nay tớ không đi đâu, mai thi rồi, vả lại tớ còn hai bài chưa ôn nữa.',
     tip:'Lý do 1 (明天就考试了) + 况且 + lý do 2 (还有……没复习), hay đi với 还 / 又 / 也.'},

    {scene:'Em trai muốn giành món đồ chơi của bạn nhỏ hàng xóm.',
     a:{sp:'Em trai',zh:'那个玩具是他的，可是我也想要，我要去抢过来！',vn:'Món đồ chơi đó là của bạn ấy, nhưng em cũng muốn, em sẽ đi giành lấy!'},
     need:['Dùng 争夺','Dùng 倒不如'],
     sample:'东西不是你的就不要去争夺，倒不如跟他商量一下，你们一起玩儿。',
     samplePy:'Dōngxi bú shì nǐ de jiù búyào qù zhēngduó, dào bùrú gēn tā shāngliang yíxià, nǐmen yìqǐ wánr.',
     sampleVn:'Đồ không phải của em thì đừng đi giành, chẳng thà em bàn với bạn ấy, hai đứa cùng chơi.',
     tip:'Mượn câu của bài khoá: 东西不是你的就不要去争夺; 倒不如 đưa ra phương án tốt hơn.'},

    {scene:'Bạn thấy em đi khập khiễng vào lớp.',
     a:{sp:'Bạn',zh:'你怎么走路一瘸一拐的？出什么事了？',vn:'Sao cậu đi khập khiễng thế? Có chuyện gì à?'},
     need:['Dùng 膝盖','Dùng 侥幸'],
     sample:'昨天打篮球摔了一跤，膝盖摔破了。还算侥幸，骨头没事，过几天就好了。',
     samplePy:'Zuótiān dǎ lánqiú shuāile yì jiāo, xīgài shuāipò le. Hái suàn jiǎoxìng, gǔtou méi shì, guò jǐ tiān jiù hǎo le.',
     sampleVn:'Hôm qua chơi bóng rổ bị ngã, trầy đầu gối. Cũng may là xương không sao, mấy hôm nữa là khỏi.',
     tip:'还算侥幸，…… = cũng may là … (giống 练习3 ②).'},

    {scene:'Chủ nhật, mẹ gọi em dậy lúc tám giờ sáng.',
     a:{sp:'Mẹ',zh:'快起床！都八点了，还睡？',vn:'Dậy mau! Tám giờ rồi mà còn ngủ à?'},
     need:['Dùng 大……的','Dùng 将近'],
     sample:'大星期天的，就让我多睡一会儿吧，我这一周每天都学习到将近半夜呢。',
     samplePy:'Dà xīngqītiān de, jiù ràng wǒ duō shuì yíhuìr ba, wǒ zhè yì zhōu měitiān dōu xuéxí dào jiāngjìn bànyè ne.',
     sampleVn:'Chủ nhật cơ mà, mẹ cho con ngủ thêm chút nữa đi, cả tuần nay ngày nào con cũng học đến gần nửa đêm đấy.',
     tip:'大 + ngày nghỉ + 的 nhấn mạnh "ngày này cơ mà" (điểm ngữ pháp 2); 将近 + 半夜.'},

    {scene:'Bạn cùng lớp rủ em bỏ tiền mua đáp án đề thi trên mạng.',
     a:{sp:'Bạn cùng lớp',zh:'听说花钱就能买到考试答案，你要不要一起买？',vn:'Nghe nói bỏ tiền ra là mua được đáp án đề thi, cậu có muốn mua cùng không?'},
     need:['Dùng 宁肯……也不……','Dùng 得不偿失'],
     sample:'我宁肯考得差一点儿，也不做这种事。万一被发现了，那可真是得不偿失。',
     samplePy:'Wǒ nìngkěn kǎo de chà yìdiǎnr, yě bú zuò zhè zhǒng shì. Wànyī bèi fāxiàn le, nà kě zhēn shì débùchángshī.',
     sampleVn:'Tớ thà thi kém một chút chứ không làm chuyện này. Lỡ bị phát hiện thì đúng là được chẳng bõ mất.',
     tip:'宁肯 A，也不 B = thà A chứ không B; 万一…… = lỡ mà ….'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'HSK 6 đòi hỏi phân biệt rõ khẩu ngữ và văn viết, lời thân mật và lời trang trọng.',
  items: [
    {scene:'Kể chuyện cổ tích cho em nhỏ 5 tuổi nghe trước khi ngủ.',
     a:'从前有个老爷爷，看见一窝小鸡，他去捉，小鸡一下子就变成金子啦！',b:'据传，宋氏先祖于农历年末偶遇雏鸡一窝，遂追捕之。',better:'a',
     why:'Kể cho trẻ nhỏ cần lời giản dị, sinh động (从前, 一下子, 啦). Câu b dùng văn ngôn (据传, 于, 遂, 之) — đúng nhưng trẻ không hiểu.'},

    {scene:'Bài phát biểu của hiệu trưởng về sự liêm chính trong lễ khai giảng.',
     a:'咱可千万别贪啊，拿了人家的钱，早晚得出事儿！',b:'我们应当牢记前人的告诫：欲望不可太多，更不可贪污、贿赂、不择手段。',better:'b',
     why:'Phát biểu trang trọng: 应当, 牢记, 告诫, 不可. Câu a (咱, 早晚得出事儿) là lời khuyên suồng sã giữa người quen.'},

    {scene:'Nhắn tin hỏi thăm bạn thân vừa bị ngã xe.',
     a:'你咋样了？膝盖还疼吗？要不要我给你带点儿药过去？',b:'获悉阁下不慎摔伤膝盖，特致慰问，望早日康复。',better:'a',
     why:'Với bạn thân, hỏi han gần gũi (咋样了, 要不要……) tự nhiên hơn. Câu b (获悉, 阁下, 特致慰问) như thư công vụ.'},

    {scene:'Bảng giới thiệu hiện vật trong bảo tàng.',
     a:'这块石头是红色的，上面有好多小石头，挺好看的。',b:'该石呈椭圆形，通体红色，表面镶嵌着多种色彩、形状各异的小石子，美观别致。',better:'b',
     why:'Văn thuyết minh cần chính xác, văn viết: 该, 呈椭圆形, 通体, 镶嵌, 各异. Câu a là lời nói miệng, chung chung (好多, 挺好看的).'},

    {scene:'Khuyên bạn thân đừng vay tiền để mua điện thoại đắt nhất.',
     a:'与其借钱买最贵的手机，倒不如先用着旧的，等攒够了钱再说。',b:'鉴于你目前经济状况欠佳，本人建议暂缓购置高档通讯设备。',better:'a',
     why:'Khuyên bạn thân nên dùng lời thân mật; 与其……倒不如…… vẫn tự nhiên trong khẩu ngữ. Câu b (鉴于, 本人, 暂缓购置) quá khách sáo, nghe như văn bản.'},

    {scene:'Báo cáo khảo cổ gửi viện nghiên cứu.',
     a:'我们挖啊挖，挖了个大坑，结果就挖出块大石头！',b:'经过为期两周的挖掘，考古人员在该区域发现了一块形状不规则的巨石。',better:'b',
     why:'Báo cáo khoa học cần thông tin cụ thể, văn viết: 经过为期……的挖掘, 该区域, 形状不规则. Câu a là lời kể vui, cảm tính.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC — theo bảng 练习5 của sách
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Dựa vào bảng bài tập 5 trong sách (<b>根据提示，简述课文主要内容</b>), kể tóm tắt bài khoá bằng lời của em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn câu hỏi và gợi ý từng dòng, bấm ghi âm rồi kể khoảng 2–3 phút.',
  outline: [
    {step:'姥姥村里的人把什么称为“金鸡窝”？描述一下金鸡窝的样子。', cue:'①大石头、凹陷、鸟窝 ②古怪、红色、镶嵌……小石头、像……、美观别致', words:['畔','椭圆','窝','外表','镶嵌','坚硬','工艺品','美观','别致']},
    {step:'讲述一下那个久远的传说。（背景）', cue:'宋家几兄弟、起早贪黑、废寝忘食、勤劳勤俭、日子富裕', words:['祖父','废寝忘食','勤俭','富裕']},
    {step:'讲述一下那个久远的传说。（时间）', cue:'农历年将近', words:['农历','将近']},
    {step:'讲述一下那个久远的传说。（人物）', cue:'宋家三祖爷', words:['祖父']},
    {step:'讲述一下那个久远的传说。（事情经过）', cue:'①发现一窝小鸡 ②捉小鸡，小鸡变金子 ③三祖爷受伤 ④再次找小鸡，没找到，发现大石头 ⑤三祖爷治疗受伤的腿', words:['窝','况且','乌黑','跟随','寻觅','颇','分明','隐蔽','扎','砖','拣','撇','砸','膝盖','枝','拐杖','拄','瘸','挖掘','坑','发炎','咋','侥幸','滋味']},
    {step:'这个故事给人们的启发', cue:'不要欲望太多，不要贪婪', words:['逢','得不偿失','宁肯','告诫','欲望','贪婪','争夺','贪污','贿赂','不择手段']}
  ],
  checklist: [
    'Ý 1 có nói rõ "Ổ gà vàng" là gì (hòn đá lớn lõm giữa như ổ gà) và tả đủ màu sắc, chi tiết khảm đá, cảm nhận 美观别致 không?',
    'Phần truyền thuyết có đủ bối cảnh (nhà họ Tống chăm chỉ, sung túc), thời gian (农历年将近) và nhân vật (三祖爷) không?',
    'Diễn biến có đủ 5 bước theo đúng thứ tự: thấy gà → gà hoá vàng → bị thương → đào được hòn đá → đổi vàng chữa chân không?',
    'Có dùng ít nhất 2 điểm ngữ pháp của bài (况且 / 大冬天的 / 倒不如) khi kể không?',
    'Phần cuối có nêu được bài học (不要欲望太多，不要贪婪) và vì sao con cháu họ Tống không ai dám tham ô không?'
  ]
};


// ══════════════════════════════════════════
// SGK · Bài tập trong sách (tr. 210–214) — đáp án theo đáp án sách
// (练一练 của "大" không có trong đáp án sách → đáp án tham khảo;
//  bài này không có 阅读语段·模仿造句 — 练习4 là 选择位置; 扩展 chỉ có bảng 词汇 làm quen, không có bài tập, không có 病句;
//  热身 không đưa vào)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'mr', de:'模仿例子，写出更多的词语', vn:'Bắt chước ví dụ, viết thêm các từ khác (có chữ được đánh dấu chấm)',
   vd:{tu:'欲望', chu:'望', ds:['愿望','希望','失望','盼望']},
   cau:[
     {tu:'富裕', chu:'富', dap:['富有','富翁','富商','丰富'], them:['富强','财富','富人','贫富','致富','富足'],
      giai:'富 = giàu, dồi dào (富裕 = giàu có; 富翁 = phú ông; 丰富 = phong phú; 财富 = của cải).'},
     {tu:'隐蔽', chu:'隐', dap:['隐藏','隐约','隐讳','隐忍'], them:['隐瞒','隐私','隐患','隐居','隐身'],
      giai:'隐 = ẩn, giấu, không lộ ra ngoài (隐藏 = cất giấu; 隐约 bài 3 = lờ mờ; 隐瞒 bài 2 = giấu giếm; 隐私 bài 5 = đời tư).'},
     {tu:'贪婪', chu:'贪', dap:['贪污','贪欲','贪心','贪图'], them:['贪玩','贪吃','贪财','贪睡','贪小便宜'],
      giai:'贪 = tham, ham muốn quá mức (贪心 = lòng tham; 贪图 = ham, tham; 贪玩 = ham chơi; 贪小便宜 = tham lợi nhỏ).'},
     {tu:'争夺', chu:'争', dap:['争取','争抢','争论','争吵'], them:['竞争','争先恐后','战争','争执','斗争','纷争'],
      giai:'争 = tranh, giành; cãi nhau (争取 = tranh thủ; 争论 = tranh luận; 争先恐后 bài 7 = tranh nhau lên trước).'}
   ]},

  {kieu:'gx', de:'用所给词语改写句子', vn:'Dùng từ cho sẵn viết lại câu', dapSgk:true,
   cau:[
     {s:'他们夫妻快到40岁才有了这个孩子，所以特别疼爱。', tu:'将近', dap:'他们夫妻将近40岁才有了这个孩子，所以特别疼爱。',
      giai:'快到40岁 → 将近40岁: 将近 + số lượng = gần tới (còn thiếu một chút).'},
     {s:'上海那么大，再说你又不知道地址，怎么能找到他呢？', tu:'况且', dap:'上海那么大，况且你又不知道地址，怎么能找到他呢？',
      giai:'再说 (khẩu ngữ) → 况且: đầu phân câu sau, bổ sung lý do; giữ 又.'},
     {s:'他对中国京剧非常感兴趣，所以参加了一个京剧培训班。', tu:'颇', dap:'他对中国京剧颇感兴趣，所以参加了一个京剧培训班。',
      giai:'非常感兴趣 → 颇感兴趣: 颇 là phó từ văn viết, hay đi với 感.'},
     {s:'很明显他是喜欢你的，你怎么感觉不到呢？', tu:'分明', dap:'他分明是喜欢你的，你怎么感觉不到呢？',
      giai:'很明显 (đầu câu) → 分明 đặt sau chủ ngữ, trước 是: 他分明是…….'},
     {s:'假期我们一起去欧洲玩儿一趟，怎么样？', tu:'咋', dap:'假期我们一起去欧洲玩儿一趟，咋样？',
      giai:'怎么样 → 咋样 (khẩu ngữ, phương ngữ miền Bắc).'},
     {s:'为了安全，我宁愿绕远儿走大路。', tu:'宁肯', dap:'为了安全，我宁肯绕远儿走大路。',
      giai:'宁愿 → 宁肯: đồng nghĩa, "thà"; 绕远儿 = đi đường vòng xa hơn.'}
   ]},

  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 1)', tu:['勤俭','将近','祖父','富裕','废寝忘食'],
   cau:[
     {s:'我的＿＿在＿＿三十岁时才找到第一份工作，他很珍惜这个机会，每天＿＿地工作。加上祖母很＿＿，家里的日子渐渐＿＿起来。',
      dap:['祖父','将近','废寝忘食','勤俭','富裕']}
   ]},
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống (đoạn 2)', tu:['坑','瘸','膝盖','扎','侥幸'],
   cau:[
     {s:'上周的一个晚上，我骑着自行车回家，不小心掉进了一个大＿＿，爬起来一看，原来是附近种树的人挖的。＿＿摔破了，手也被＿＿破了，鲜血直流，还算＿＿，骨头没事。我只好推着自行车一＿＿一拐地走回了家。',
      dap:['坑','膝盖','扎','侥幸','瘸']}
   ]},

  {kieu:'vitri', de:'为括号里的词语选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc (bài tập 4) — đáp án theo sách',
   cau:[
     {s:'A晴天，B你出门时C干吗要D带把雨伞呢？', tu:'大', ans:'A',
      giai:'大晴天 = trời nắng đẹp thế này (大 + thời tiết để nhấn mạnh, điểm ngữ pháp 2): 大晴天，你出门时干吗要带把雨伞呢？'},
     {s:'与其A一个人生气，B不如C找个朋友D说出来更好。', tu:'倒', ans:'B',
      giai:'与其……倒不如……: 倒 đứng ngay trước 不如 (điểm ngữ pháp 3).'},
     {s:'A父亲年龄大了，B身体也不好，C我不放心D他一个人去旅行。', tu:'况且', ans:'B',
      giai:'况且 đứng đầu phân câu thứ hai, bổ sung lý do (身体也不好) sau lý do thứ nhất (年龄大了).'},
     {s:'他A自己吃点儿亏，B也不愿C让朋友D吃亏。', tu:'宁肯', ans:'A',
      giai:'宁肯……也不…… = thà … chứ không …: 宁肯 đứng sau chủ ngữ 他, trước phương án được chọn (自己吃点儿亏).'},
     {s:'他A朝你这个方向B走来的，C你怎么D没看见他呢？', tu:'分明', ans:'A',
      giai:'分明 là phó từ, đứng sau chủ ngữ, trước vị ngữ: 他分明朝你这个方向走来的.'}
   ]},

  {kieu:'vitri', de:'为括号里的内容选择适当的位置（注释1 · 练一练）', vn:'Chọn vị trí thích hợp cho phần trong ngoặc (Chú thích 1 · 况且 · Luyện tập) — đáp án theo sách',
   cau:[
     {s:'A飞行员驾机到目的地时，B能见度不到500米，C大大低于规定标准，D只有4个马灯照明。', tu:'况且该机场没有夜航设备，', ans:'D',
      giai:'Hai lý do khiến hạ cánh khó khăn: tầm nhìn dưới 500 m (thấp hơn nhiều so với tiêu chuẩn) + sân bay không có thiết bị bay đêm, chỉ có 4 ngọn đèn bão → 况且 bổ sung lý do thứ hai ở D.'},
     {s:'这次假期我不想去旅行了，A一来假期短，B二来车票也不好买，C我想好好休息休息，复习复习功课，D也可以在近处玩儿玩儿。', tu:'况且假期过后就是考试，', ans:'C',
      giai:'Sau hai lý do 一来……二来……, 况且 bổ sung lý do thứ ba (sắp thi) rồi mới nói dự định 我想好好休息休息…….'},
     {s:'毕竟已年过50，A忙了整整三天，B他突然发现自己双腿已无法站稳，C头痛欲裂，D大家赶紧把他送到了医院。', tu:'况且他原本就有心脏病，', ans:'A/B',
      giai:'Đáp án sách: A hoặc B đều được. Ở A: 毕竟已年过50，况且他原本就有心脏病 — hai lý do (tuổi cao + bệnh tim) rồi mới kể hậu quả; ở B: bổ sung lý do sau 忙了整整三天. C, D đã là phần hậu quả nên không đặt 况且 được.'}
   ]},

  {kieu:'ab', de:'下面句子中，指出哪个句子中的“大”和上面讲的意思不一样（注释2 · 练一练）', vn:'Trong các câu dưới đây, câu nào có chữ 大 mang nghĩa khác với cách dùng vừa học (Chú thích 2 · Luyện tập). Sách không in đáp án — đây là đáp án tham khảo.',
   cau:[
     {s:'哪个句子中的“大”和“大冬天的”“大周末的”中的“大”意思不一样？', opts:['（1）大晴天的，带什么雨伞呀！','（2）大年初一的，也该好好休息休息啦。','（3）哥哥比弟弟大三岁。'], ans:2,
      giai:'(1)(2): 大 đứng trước từ chỉ thời tiết / ngày lễ + 的 để nhấn mạnh ("trời nắng thế này", "mùng Một Tết cơ mà"). (3): 大 là tính từ so sánh tuổi tác (lớn hơn ba tuổi) → nghĩa khác.'}
   ]},

  {kieu:'kho', de:'为句子选择适当的位置（注释3 · 练一练）', vn:'Chọn vế câu A/B/C điền vào chỗ trống thích hợp (Chú thích 3 · 倒不如 · Luyện tập). Đáp án sách: (1) B (2) C (3) A', tu:['与其说大海是一个安静的少女','与其天天为钱财奔忙','你有时间去批评人家'],
   cau:[
     {s:'＿＿，倒不如过清贫日子。', dap:['与其天天为钱财奔忙']},
     {s:'我渐渐开始明白，要想找出人家的漏洞太容易了，难的是建设一个新的东西出来。＿＿，倒不如好好琢磨自己能建设什么。', dap:['你有时间去批评人家']},
     {s:'走向大洋深处，我才发现，＿＿，倒不如说是一只凶猛的怪兽。在看似平静的海面下，时时充满着凶险、恐怖，充满着数不清的暗礁、险滩。', dap:['与其说大海是一个安静的少女']}
   ]}
];
