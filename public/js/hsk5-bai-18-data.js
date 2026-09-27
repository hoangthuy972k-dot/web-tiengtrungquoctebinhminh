// ══════════════════════════════════════════
// DATA — HSK5 Bài 18: 抽象艺术美不美？ (Nghệ thuật trừu tượng đẹp hay xấu?)
// Unit 6 修身养性 · Nguồn: HSK标准教程5上 (tr. 162–169) + 练习册 bài 18
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TỪ VỰNG — đủ 40 từ của bảng 生词 (tr. 162–164)
// ══════════════════════════════════════════
var vocabData = [
  {n:1, zh:'抽象', py:'chōuxiàng', pos:'Tính từ / Động từ', vn:'trừu tượng; trừu tượng hoá', hv:'trừu tượng', em:'🎨', lesson:1,
    explain:['Tính từ: không cụ thể, khó hình dung bằng giác quan (trái nghĩa: 具体).', 'Động từ: rút ra cái chung, cái bản chất từ nhiều sự vật cụ thể (trừu tượng hoá).'],
    usage:'Hay làm định ngữ: 抽象艺术, 抽象画, 抽象派; làm vị ngữ: 这个词太抽象了. Trái nghĩa: 具体.',
    collo:['抽象艺术', '抽象画', '抽象派', '比较抽象'],
    ex_zh:'对有些人来说，抽象艺术没有古典艺术那么容易欣赏。', ex_py:'Duì yǒuxiē rén lái shuō, chōuxiàng yìshù méiyǒu gǔdiǎn yìshù nàme róngyì xīnshǎng.', ex_vn:'Với một số người, nghệ thuật trừu tượng không dễ thưởng thức như nghệ thuật cổ điển.',
    exList:[
      {zh:'对有些人来说，抽象艺术没有古典艺术那么容易欣赏。', py:'Duì yǒuxiē rén lái shuō, chōuxiàng yìshù méiyǒu gǔdiǎn yìshù nàme róngyì xīnshǎng.', vn:'Với một số người, nghệ thuật trừu tượng không dễ thưởng thức như nghệ thuật cổ điển.'},
      {zh:'这个词的意思太抽象了，你能举个例子吗？', py:'Zhège cí de yìsi tài chōuxiàng le, nǐ néng jǔ ge lìzi ma?', vn:'Nghĩa của từ này trừu tượng quá, bạn lấy một ví dụ được không?'},
      {zh:'我们美术老师特别喜欢抽象画。', py:'Wǒmen měishù lǎoshī tèbié xǐhuan chōuxiànghuà.', vn:'Thầy dạy mỹ thuật của chúng tôi đặc biệt thích tranh trừu tượng.'}
    ],
    colloFull:[
      {zh:'抽象艺术', py:'chōuxiàng yìshù', vn:'nghệ thuật trừu tượng'},
      {zh:'抽象画', py:'chōuxiànghuà', vn:'tranh trừu tượng'},
      {zh:'抽象派', py:'chōuxiàngpài', vn:'trường phái trừu tượng'},
      {zh:'比较抽象', py:'bǐjiào chōuxiàng', vn:'khá trừu tượng'},
      {zh:'抽象的概念', py:'chōuxiàng de gàiniàn', vn:'khái niệm trừu tượng'}
    ],
    patterns:[{s:'抽象 + 艺术 / 画 / 派', m:'Nghệ thuật / tranh / trường phái trừu tượng'}, {s:'……太抽象了，举个例子吧', m:'… trừu tượng quá, lấy ví dụ đi (trái nghĩa: 具体)'}],
    checkList:[
      {promptLang:'vi', prompt:'Tuy tranh trừu tượng rất khó hiểu, nhưng tôi vẫn rất thích.', answer:'虽然抽象画很难看懂，但是我还是很喜欢。', answerPy:'Suīrán chōuxiànghuà hěn nán kàndǒng, dànshì wǒ háishi hěn xǐhuan.', note:'抽象画 = tranh trừu tượng; 抽象 đứng thẳng trước danh từ, không cần 的.', pair:'虽然……但是……'},
      {promptLang:'vi', prompt:'Nghệ thuật trừu tượng ngày càng được giới trẻ yêu thích.', answer:'抽象艺术越来越受年轻人欢迎了。', answerPy:'Chōuxiàng yìshù yuè lái yuè shòu niánqīngrén huānyíng le.', note:'受 + người + 欢迎 = được ai yêu thích.', pair:'越来越'}
    ]
  },
  {n:2, zh:'古典', py:'gǔdiǎn', pos:'Tính từ', vn:'cổ điển', hv:'cổ điển', em:'🏛️', lesson:1,
    explain:['Thuộc về truyền thống xưa, được coi là mẫu mực và có giá trị lâu dài.'],
    usage:'古典 + 音乐 / 文学 / 小说 / 戏剧 / 艺术 — thường làm định ngữ, không cần 的. Đối lập: 现代, 流行.',
    collo:['古典音乐', '古典文学', '古典小说', '古典艺术'],
    ex_zh:'我爷爷每天早上都听古典音乐。', ex_py:'Wǒ yéye měi tiān zǎoshang dōu tīng gǔdiǎn yīnyuè.', ex_vn:'Sáng nào ông tôi cũng nghe nhạc cổ điển.',
    exList:[
      {zh:'我爷爷每天早上都听古典音乐。', py:'Wǒ yéye měi tiān zǎoshang dōu tīng gǔdiǎn yīnyuè.', vn:'Sáng nào ông tôi cũng nghe nhạc cổ điển.'},
      {zh:'《红楼梦》是中国古典小说的代表作品。', py:'“Hónglóumèng” shì Zhōngguó gǔdiǎn xiǎoshuō de dàibiǎo zuòpǐn.', vn:'“Hồng lâu mộng” là tác phẩm tiêu biểu của tiểu thuyết cổ điển Trung Quốc.'},
      {zh:'抽象艺术没有古典艺术那么容易欣赏。', py:'Chōuxiàng yìshù méiyǒu gǔdiǎn yìshù nàme róngyì xīnshǎng.', vn:'Nghệ thuật trừu tượng không dễ thưởng thức như nghệ thuật cổ điển.'}
    ],
    colloFull:[
      {zh:'古典音乐', py:'gǔdiǎn yīnyuè', vn:'nhạc cổ điển'},
      {zh:'古典文学', py:'gǔdiǎn wénxué', vn:'văn học cổ điển'},
      {zh:'古典小说', py:'gǔdiǎn xiǎoshuō', vn:'tiểu thuyết cổ điển'},
      {zh:'古典艺术', py:'gǔdiǎn yìshù', vn:'nghệ thuật cổ điển'},
      {zh:'古典戏剧', py:'gǔdiǎn xìjù', vn:'kịch cổ điển'}
    ],
    patterns:[{s:'古典 + 音乐 / 文学 / 小说 / 戏剧', m:'… cổ điển (làm định ngữ trực tiếp)'}, {s:'A 没有 B 那么 + Adj', m:'A không … bằng B (câu trong bài: 抽象艺术没有古典艺术那么容易欣赏)'}],
    checkList:[
      {promptLang:'vi', prompt:'Tôi năm ngoái mới bắt đầu nghe nhạc cổ điển.', answer:'我是去年才开始听古典音乐的。', answerPy:'Wǒ shì qùnián cái kāishǐ tīng gǔdiǎn yīnyuè de.', note:'是……的 nhấn mạnh thời gian 去年; 古典音乐 không cần 的.', pair:'是……的'},
      {promptLang:'vi', prompt:'Anh ấy chưa bao giờ đọc tiểu thuyết cổ điển Trung Quốc.', answer:'他从来没看过中国古典小说。', answerPy:'Tā cónglái méi kànguo Zhōngguó gǔdiǎn xiǎoshuō.', note:'古典 + 小说: định ngữ trực tiếp.', pair:'从来没……过'}
    ]
  },
  {n:3, zh:'欣赏', py:'xīnshǎng', pos:'Động từ', vn:'thưởng thức; đánh giá cao', hv:'hân thưởng', em:'🖼️', lesson:1,
    explain:['Thưởng thức, ngắm nhìn cái đẹp (tranh, nhạc, phong cảnh…) và thấy thích thú.', 'Đánh giá cao, quý mến (một người, một phẩm chất).'],
    usage:'欣赏 + 艺术 / 音乐 / 风景 / 作品. 欣赏 + người = đánh giá cao ai; khi đó có thể có 很 / 非常 / 极其 đứng trước: 我很欣赏他.',
    collo:['欣赏音乐', '欣赏风景', '欣赏作品', '很欣赏他'],
    ex_zh:'周末我们去美术馆欣赏了一些名画。', ex_py:'Zhōumò wǒmen qù měishùguǎn xīnshǎngle yìxiē mínghuà.', ex_vn:'Cuối tuần chúng tôi đến bảo tàng mỹ thuật thưởng thức mấy bức danh hoạ.',
    exList:[
      {zh:'周末我们去美术馆欣赏了一些名画。', py:'Zhōumò wǒmen qù měishùguǎn xīnshǎngle yìxiē mínghuà.', vn:'Cuối tuần chúng tôi đến bảo tàng mỹ thuật thưởng thức mấy bức danh hoạ.'},
      {zh:'老板很欣赏他认真的工作态度。', py:'Lǎobǎn hěn xīnshǎng tā rènzhēn de gōngzuò tàidu.', vn:'Sếp rất đánh giá cao thái độ làm việc nghiêm túc của anh ấy.'},
      {zh:'我对这个人极其欣赏，我认为他很有才华。', py:'Wǒ duì zhège rén jíqí xīnshǎng, wǒ rènwéi tā hěn yǒu cáihuá.', vn:'Tôi vô cùng quý trọng người này, tôi cho rằng anh ấy rất có tài.'}
    ],
    colloFull:[
      {zh:'欣赏音乐', py:'xīnshǎng yīnyuè', vn:'thưởng thức âm nhạc'},
      {zh:'欣赏风景', py:'xīnshǎng fēngjǐng', vn:'ngắm phong cảnh'},
      {zh:'欣赏作品', py:'xīnshǎng zuòpǐn', vn:'thưởng thức tác phẩm'},
      {zh:'很欣赏他', py:'hěn xīnshǎng tā', vn:'rất quý trọng anh ấy'},
      {zh:'值得欣赏', py:'zhíde xīnshǎng', vn:'đáng để thưởng thức'}
    ],
    patterns:[{s:'欣赏 + 音乐 / 风景 / 作品', m:'Thưởng thức cái đẹp'}, {s:'(对 + người) + 很 / 非常 / 极其 + 欣赏', m:'Đánh giá cao, quý mến ai'}],
    checkList:[
      {promptLang:'vi', prompt:'Vừa lên đến đỉnh núi, chúng tôi liền ngồi xuống ngắm phong cảnh.', answer:'一爬到山顶，我们就坐下来欣赏风景。', answerPy:'Yì pádào shāndǐng, wǒmen jiù zuò xiàlai xīnshǎng fēngjǐng.', note:'欣赏风景 = ngắm cảnh (thưởng thức cái đẹp).', pair:'一……就……'},
      {promptLang:'vi', prompt:'Không chỉ thầy giáo đánh giá cao cậu ấy, các bạn cũng rất quý cậu ấy.', answer:'不仅老师很欣赏他，同学们也很喜欢他。', answerPy:'Bùjǐn lǎoshī hěn xīnshǎng tā, tóngxuémen yě hěn xǐhuan tā.', note:'很欣赏 + người = đánh giá cao ai.', pair:'不仅……也……'}
    ]
  },
  {n:4, zh:'布', py:'bù', pos:'Danh từ', vn:'vải', hv:'bố', em:'🧵', lesson:1,
    explain:['Vải — thứ dệt bằng bông, gai… dùng để may; trong hội hoạ có 画布 (vải vẽ, toan).'],
    usage:'Lượng từ: 一块布. Ghép: 画布, 布鞋, 布料. Chú ý: chữ 布 trong 布局 (bố cục) lại mang nghĩa “bố trí, sắp xếp”.',
    collo:['一块布', '画布', '布鞋', '棉布'],
    ex_zh:'这块布上只有一些不规则的色块，我看不出来画的是什么。', ex_py:'Zhè kuài bù shang zhǐ yǒu yìxiē bù guīzé de sèkuài, wǒ kàn bu chūlái huà de shì shénme.', ex_vn:'Trên tấm vải này chỉ có vài mảng màu lộn xộn, tôi không nhìn ra vẽ cái gì.',
    exList:[
      {zh:'这块布上只有一些不规则的色块，我看不出来画的是什么。', py:'Zhè kuài bù shang zhǐ yǒu yìxiē bù guīzé de sèkuài, wǒ kàn bu chūlái huà de shì shénme.', vn:'Trên tấm vải này chỉ có vài mảng màu lộn xộn, tôi không nhìn ra vẽ cái gì.'},
      {zh:'画布上那些不规则的色块、线条，实在看不出有什么意义。', py:'Huàbù shang nàxiē bù guīzé de sèkuài, xiàntiáo, shízài kàn bu chū yǒu shénme yìyì.', vn:'Những mảng màu, đường nét lộn xộn trên toan vẽ thật chẳng nhìn ra có ý nghĩa gì.'},
      {zh:'奶奶用一块旧布给我做了一个书包。', py:'Nǎinai yòng yí kuài jiù bù gěi wǒ zuòle yí ge shūbāo.', vn:'Bà nội dùng một tấm vải cũ may cho tôi một cái cặp sách.'}
    ],
    colloFull:[
      {zh:'一块布', py:'yí kuài bù', vn:'một tấm vải'},
      {zh:'画布', py:'huàbù', vn:'vải vẽ, toan'},
      {zh:'布鞋', py:'bùxié', vn:'giày vải'},
      {zh:'棉布', py:'miánbù', vn:'vải bông'},
      {zh:'布料', py:'bùliào', vn:'chất liệu vải'}
    ],
    patterns:[{s:'一块 + 布', m:'Một tấm vải'}, {s:'布 + 鞋 / 料 / 袋', m:'… bằng vải (làm định ngữ)'}],
    checkList:[
      {promptLang:'vi', prompt:'Tấm vải đó bị em gái tôi cắt thành mấy mảnh.', answer:'那块布被妹妹剪成了好几块。', answerPy:'Nà kuài bù bèi mèimei jiǎnchéngle hǎo jǐ kuài.', note:'那 + 块 + 布: chỉ thị từ + lượng từ + danh từ.', pair:'被'},
      {promptLang:'vi', prompt:'Mẹ trải tấm vải trắng lên bàn.', answer:'妈妈把一块白布铺在桌子上。', answerPy:'Māma bǎ yí kuài bái bù pū zài zhuōzi shang.', note:'铺 (trải) là từ của bài 2; 把 + 布 + 铺在 + nơi chốn.', pair:'把'}
    ]
  },
  {n:5, zh:'规则', py:'guīzé', pos:'Danh từ / Tính từ', vn:'quy tắc; đúng quy tắc, ngay ngắn', hv:'quy tắc', em:'📏', lesson:1,
    explain:['Danh từ: quy tắc, luật lệ mọi người phải tuân theo.', 'Tính từ: có quy luật, ngay ngắn, đều đặn — hay gặp ở dạng phủ định 不规则.'],
    usage:'Danh từ: 遵守规则, 比赛规则, 交通规则. Tính từ: 形状很规则, 不规则的色块.',
    collo:['交通规则', '比赛规则', '遵守规则', '不规则'],
    ex_zh:'过马路的时候，一定要遵守交通规则。', ex_py:'Guò mǎlù de shíhou, yídìng yào zūnshǒu jiāotōng guīzé.', ex_vn:'Khi qua đường nhất định phải tuân thủ luật giao thông.',
    exList:[
      {zh:'过马路的时候，一定要遵守交通规则。', py:'Guò mǎlù de shíhou, yídìng yào zūnshǒu jiāotōng guīzé.', vn:'Khi qua đường nhất định phải tuân thủ luật giao thông.'},
      {zh:'比赛开始前，裁判又讲了一遍比赛规则。', py:'Bǐsài kāishǐ qián, cáipàn yòu jiǎngle yí biàn bǐsài guīzé.', vn:'Trước khi trận đấu bắt đầu, trọng tài giảng lại luật thi đấu một lượt.'},
      {zh:'这块石头的形状很不规则。', py:'Zhè kuài shítou de xíngzhuàng hěn bù guīzé.', vn:'Hình dạng hòn đá này rất méo mó, không đều.'}
    ],
    colloFull:[
      {zh:'交通规则', py:'jiāotōng guīzé', vn:'luật giao thông'},
      {zh:'比赛规则', py:'bǐsài guīzé', vn:'luật thi đấu'},
      {zh:'遵守规则', py:'zūnshǒu guīzé', vn:'tuân thủ quy tắc'},
      {zh:'不规则', py:'bù guīzé', vn:'không đều, lộn xộn'},
      {zh:'游戏规则', py:'yóuxì guīzé', vn:'luật chơi'}
    ],
    patterns:[{s:'遵守 + (交通 / 比赛 / 游戏)规则', m:'Tuân thủ quy tắc (danh từ)'}, {s:'(不)规则的 + 形状 / 色块 / 线条', m:'Hình dạng… (không) đều đặn (tính từ)'}],
    checkList:[
      {promptLang:'vi', prompt:'Chỉ cần mọi người đều tuân thủ luật giao thông thì tai nạn sẽ ít đi nhiều.', answer:'只要大家都遵守交通规则，交通事故就会少很多。', answerPy:'Zhǐyào dàjiā dōu zūnshǒu jiāotōng guīzé, jiāotōng shìgù jiù huì shǎo hěn duō.', note:'遵守 + 规则: kết hợp cố định.', pair:'只要……就……'},
      {promptLang:'vi', prompt:'Ngay cả luật của trò chơi này anh ấy cũng chưa hiểu rõ.', answer:'他连这个游戏的规则都还没弄明白。', answerPy:'Tā lián zhège yóuxì de guīzé dōu hái méi nòng míngbai.', note:'游戏的规则 / 游戏规则 đều được.', pair:'连……都……'}
    ]
  },
  {n:6, zh:'派', py:'pài', pos:'Danh từ', vn:'phái, trường phái', hv:'phái', em:'🏷️', lesson:1,
    explain:['Phái, trường phái — nhóm người có cùng quan điểm, phong cách (trong nghệ thuật, học thuật…).', '(Động từ, nghĩa khác) cử, phái đi: 派人去.'],
    usage:'Đứng sau từ chỉ phong cách: 抽象派, 印象派, 古典派; 抽象派画家 = hoạ sĩ trường phái trừu tượng. Làm động từ: 派 + người + V (cử ai đi làm gì).',
    collo:['抽象派', '印象派', '学派', '派人'],
    ex_zh:'这些可都是抽象派大师的作品。', ex_py:'Zhèxiē kě dōu shì chōuxiàngpài dàshī de zuòpǐn.', ex_vn:'Đây toàn là tác phẩm của các bậc thầy trường phái trừu tượng đấy.',
    exList:[
      {zh:'这些可都是抽象派大师的作品。', py:'Zhèxiē kě dōu shì chōuxiàngpài dàshī de zuòpǐn.', vn:'Đây toàn là tác phẩm của các bậc thầy trường phái trừu tượng đấy.'},
      {zh:'抽象派画家的作品中经常见到好像随便洒上颜料而形成的画作。', py:'Chōuxiàngpài huàjiā de zuòpǐn zhōng jīngcháng jiàndào hǎoxiàng suíbiàn sǎshàng yánliào ér xíngchéng de huàzuò.', vn:'Trong tác phẩm của hoạ sĩ trường phái trừu tượng thường thấy những bức vẽ như được vẩy màu tuỳ ý mà thành.'},
      {zh:'公司派我去上海参加一个设计展览。', py:'Gōngsī pài wǒ qù Shànghǎi cānjiā yí ge shèjì zhǎnlǎn.', vn:'Công ty cử tôi đi Thượng Hải dự một triển lãm thiết kế.'}
    ],
    colloFull:[
      {zh:'抽象派', py:'chōuxiàngpài', vn:'trường phái trừu tượng'},
      {zh:'印象派', py:'yìnxiàngpài', vn:'trường phái ấn tượng'},
      {zh:'学派', py:'xuépài', vn:'trường phái học thuật'},
      {zh:'派人', py:'pài rén', vn:'cử người'},
      {zh:'两派意见', py:'liǎng pài yìjiàn', vn:'ý kiến của hai phe'}
    ],
    patterns:[{s:'Phong cách + 派 (+ 画家 / 大师)', m:'Trường phái … (抽象派画家: hoạ sĩ trường phái trừu tượng)'}, {s:'派 + người + V', m:'Cử ai đi làm gì (nghĩa động từ)'}],
    checkList:[
      {promptLang:'vi', prompt:'Bức tranh này là do một hoạ sĩ trường phái ấn tượng vẽ.', answer:'这幅画是一位印象派画家画的。', answerPy:'Zhè fú huà shì yí wèi yìnxiàngpài huàjiā huà de.', note:'印象派 + 画家: “phái” đứng trước danh từ chỉ người.', pair:'是……的'},
      {promptLang:'vi', prompt:'Người thích tác phẩm của trường phái trừu tượng ngày càng nhiều.', answer:'喜欢抽象派作品的人越来越多了。', answerPy:'Xǐhuan chōuxiàngpài zuòpǐn de rén yuè lái yuè duō le.', note:'抽象派作品 = tác phẩm trường phái trừu tượng.', pair:'越来越'}
    ]
  },
  {n:7, zh:'作品', py:'zuòpǐn', pos:'Danh từ', vn:'tác phẩm', hv:'tác phẩm', em:'🖌️', lesson:1,
    explain:['Tác phẩm — thành quả sáng tác văn học, nghệ thuật (tranh, sách, bài hát, phim…).'],
    usage:'Lượng từ tuỳ loại: 一件作品 (chung), 一幅作品 (tranh), 一部作品 (sách, phim). Ghép: 艺术作品, 文学作品, 代表作品, 设计作品.',
    collo:['艺术作品', '文学作品', '代表作品', '一幅作品'],
    ex_zh:'这次展览一共展出了一百多件艺术作品。', ex_py:'Zhè cì zhǎnlǎn yígòng zhǎnchūle yìbǎi duō jiàn yìshù zuòpǐn.', ex_vn:'Triển lãm lần này trưng bày tổng cộng hơn một trăm tác phẩm nghệ thuật.',
    exList:[
      {zh:'这次展览一共展出了一百多件艺术作品。', py:'Zhè cì zhǎnlǎn yígòng zhǎnchūle yìbǎi duō jiàn yìshù zuòpǐn.', vn:'Triển lãm lần này trưng bày tổng cộng hơn một trăm tác phẩm nghệ thuật.'},
      {zh:'在每一次测试中，志愿者普遍更喜欢的作品都是由人类艺术家挥笔完成的。', py:'Zài měi yí cì cèshì zhōng, zhìyuànzhě pǔbiàn gèng xǐhuan de zuòpǐn dōu shì yóu rénlèi yìshùjiā huībǐ wánchéng de.', vn:'Trong mỗi lần thử nghiệm, tác phẩm mà tình nguyện viên nhìn chung thích hơn đều do hoạ sĩ con người cầm bút hoàn thành.'},
      {zh:'鲁迅的代表作品你读过哪些？', py:'Lǔ Xùn de dàibiǎo zuòpǐn nǐ dúguo nǎxiē?', vn:'Tác phẩm tiêu biểu của Lỗ Tấn bạn đã đọc những cuốn nào?'}
    ],
    colloFull:[
      {zh:'艺术作品', py:'yìshù zuòpǐn', vn:'tác phẩm nghệ thuật'},
      {zh:'文学作品', py:'wénxué zuòpǐn', vn:'tác phẩm văn học'},
      {zh:'代表作品', py:'dàibiǎo zuòpǐn', vn:'tác phẩm tiêu biểu'},
      {zh:'一幅作品', py:'yì fú zuòpǐn', vn:'một bức tranh (tác phẩm)'},
      {zh:'设计作品', py:'shèjì zuòpǐn', vn:'tác phẩm thiết kế'}
    ],
    patterns:[{s:'Số + 件 / 部 / 幅 + 作品', m:'Lượng từ tuỳ loại tác phẩm'}, {s:'Người + 的 + 代表作品', m:'Tác phẩm tiêu biểu của ai'}],
    checkList:[
      {promptLang:'vi', prompt:'Tác phẩm của em được thầy giáo treo lên tường lớp học.', answer:'我的作品被老师挂在了教室的墙上。', answerPy:'Wǒ de zuòpǐn bèi lǎoshī guà zàile jiàoshì de qiáng shang.', note:'作品 làm chủ ngữ câu bị động.', pair:'被'},
      {promptLang:'vi', prompt:'Tuy tác phẩm này chưa hoàn thành, nhưng đã rất đẹp rồi.', answer:'虽然这幅作品还没完成，但是已经很美了。', answerPy:'Suīrán zhè fú zuòpǐn hái méi wánchéng, dànshì yǐjīng hěn měi le.', note:'Tranh thì dùng lượng từ 幅: 这幅作品.', pair:'虽然……但是……'}
    ]
  },
  {n:8, zh:'洒', py:'sǎ', pos:'Động từ', vn:'rắc, rải, vẩy; làm đổ, sánh ra', hv:'sái', em:'💦', lesson:1,
    explain:['Rắc, vẩy, rải (nước, bột, hạt nhỏ…) cho tản ra.', 'Chất lỏng, hạt… bị rơi vãi, đổ ra ngoài: 汤洒了.'],
    usage:'洒 + 水 / 颜料 / 盐; 把 + N + 洒在 + nơi chốn; 洒了一地. Đừng nhầm với 酒 jiǔ (rượu): 洒 = 氵+ 西, 酒 = 氵+ 酉.',
    collo:['洒水', '洒上颜料', '洒了一地', '洒在地上'],
    ex_zh:'他不小心把咖啡洒在了作业本上。', ex_py:'Tā bù xiǎoxīn bǎ kāfēi sǎ zàile zuòyèběn shang.', ex_vn:'Cậu ấy không cẩn thận làm đổ cà phê lên vở bài tập.',
    exList:[
      {zh:'他不小心把咖啡洒在了作业本上。', py:'Tā bù xiǎoxīn bǎ kāfēi sǎ zàile zuòyèběn shang.', vn:'Cậu ấy không cẩn thận làm đổ cà phê lên vở bài tập.'},
      {zh:'抽象画好像是随便洒上颜料而形成的。', py:'Chōuxiànghuà hǎoxiàng shì suíbiàn sǎshàng yánliào ér xíngchéng de.', vn:'Tranh trừu tượng trông như được vẩy màu tuỳ ý mà thành.'},
      {zh:'天太热了，工人们在路上洒水降温。', py:'Tiān tài rè le, gōngrénmen zài lù shang sǎ shuǐ jiàngwēn.', vn:'Trời nóng quá, công nhân tưới nước trên đường để hạ nhiệt.'}
    ],
    colloFull:[
      {zh:'洒水', py:'sǎ shuǐ', vn:'tưới nước, vẩy nước'},
      {zh:'洒上颜料', py:'sǎshàng yánliào', vn:'vẩy màu lên'},
      {zh:'洒了一地', py:'sǎle yí dì', vn:'đổ tung toé khắp sàn'},
      {zh:'洒在地上', py:'sǎ zài dì shang', vn:'đổ ra đất'},
      {zh:'汤洒了', py:'tāng sǎ le', vn:'canh bị sánh ra'}
    ],
    patterns:[{s:'把 + N + 洒在 + nơi chốn', m:'Làm đổ / rắc cái gì lên đâu'}, {s:'洒 + 上 / 满 + N', m:'Rắc lên / rắc đầy …'}],
    checkList:[
      {promptLang:'vi', prompt:'Em trai làm đổ sữa ra khắp sàn.', answer:'弟弟把牛奶洒了一地。', answerPy:'Dìdi bǎ niúnǎi sǎle yí dì.', note:'洒了一地 = đổ ra khắp mặt sàn.', pair:'把'},
      {promptLang:'vi', prompt:'Tôi vừa đi nhanh là canh trong bát sánh ra ngay.', answer:'我一走快，碗里的汤就洒出来了。', answerPy:'Wǒ yì zǒu kuài, wǎn li de tāng jiù sǎ chūlai le.', note:'洒 + 出来: chất lỏng tràn ra ngoài.', pair:'一……就……'}
    ]
  },
  {n:9, zh:'极其', py:'jíqí', pos:'Phó từ', vn:'vô cùng, hết sức', hv:'cực kỳ', em:'⚡', lesson:1,
    explain:['Phó từ, nghĩa là 非常 (vô cùng, hết sức), dùng nhiều trong văn viết.', 'Chỉ bổ nghĩa cho tính từ / động từ HAI âm tiết trở lên: 极其重要, 极其神秘 — không nói 极其丑, 极其好.'],
    usage:'极其 + tính từ / động từ song âm tiết. Văn viết, trang trọng; khẩu ngữ dùng 非常, 特别.',
    collo:['极其重要', '极其神秘', '极其少见', '极其欣赏'],
    ex_zh:'在中国，餐桌上放一把刀是极其少见的现象。', ex_py:'Zài Zhōngguó, cānzhuō shang fàng yì bǎ dāo shì jíqí shǎojiàn de xiànxiàng.', ex_vn:'Ở Trung Quốc, đặt một con dao trên bàn ăn là hiện tượng vô cùng hiếm thấy.',
    exList:[
      {zh:'在中国，餐桌上放一把刀是极其少见的现象。', py:'Zài Zhōngguó, cānzhuō shang fàng yì bǎ dāo shì jíqí shǎojiàn de xiànxiàng.', vn:'Ở Trung Quốc, đặt một con dao trên bàn ăn là hiện tượng vô cùng hiếm thấy.'},
      {zh:'这些画作在有人看来极其神秘甚至丑陋。', py:'Zhèxiē huàzuò zài yǒu rén kànlái jíqí shénmì shènzhì chǒulòu.', vn:'Những bức tranh ấy trong mắt một số người vô cùng bí ẩn, thậm chí xấu xí.'},
      {zh:'这次考试对我来说极其重要。', py:'Zhè cì kǎoshì duì wǒ lái shuō jíqí zhòngyào.', vn:'Kỳ thi này đối với tôi vô cùng quan trọng.'}
    ],
    colloFull:[
      {zh:'极其重要', py:'jíqí zhòngyào', vn:'vô cùng quan trọng'},
      {zh:'极其神秘', py:'jíqí shénmì', vn:'vô cùng bí ẩn'},
      {zh:'极其少见', py:'jíqí shǎojiàn', vn:'vô cùng hiếm thấy'},
      {zh:'极其欣赏', py:'jíqí xīnshǎng', vn:'vô cùng quý trọng'},
      {zh:'极其复杂', py:'jíqí fùzá', vn:'vô cùng phức tạp'}
    ],
    patterns:[{s:'极其 + Adj / V song âm tiết', m:'Vô cùng … (văn viết)'}, {s:'是 + 极其 + Adj + 的 + N', m:'Là … vô cùng … (极其少见的现象)'}],
    checkList:[
      {promptLang:'vi', prompt:'Món quà này là bố tự tay làm, đối với tôi vô cùng quý giá.', answer:'这个礼物是爸爸亲手做的，对我来说极其珍贵。', answerPy:'Zhège lǐwù shì bàba qīnshǒu zuò de, duì wǒ lái shuō jíqí zhēnguì.', note:'极其 + 珍贵 (hai âm tiết).', pair:'是……的'},
      {promptLang:'vi', prompt:'Tuy bài này vô cùng phức tạp, nhưng cậu ấy vẫn giải ra được.', answer:'虽然这道题极其复杂，但是他还是做出来了。', answerPy:'Suīrán zhè dào tí jíqí fùzá, dànshì tā háishi zuò chūlai le.', note:'极其 + 复杂; không nói 极其难 — nói 非常难.', pair:'虽然……但是……'}
    ]
  },
  {n:10, zh:'神秘', py:'shénmì', pos:'Tính từ', vn:'thần bí, huyền bí, bí ẩn', hv:'thần bí', em:'🔮', lesson:1,
    explain:['Bí ẩn, khó hiểu, khiến người ta tò mò mà không biết rõ.'],
    usage:'Làm vị ngữ (很神秘, 显得很神秘), định ngữ (神秘的人 / 地方 / 微笑). Lặp lại: 神神秘秘. Cụm: 神秘感.',
    collo:['神秘的地方', '神秘的微笑', '神秘感', '十分神秘'],
    ex_zh:'《蒙娜丽莎》神秘的微笑吸引了无数游客。', ex_py:'“Méngnàlìshā” shénmì de wēixiào xīyǐnle wúshù yóukè.', ex_vn:'Nụ cười bí ẩn của “Mona Lisa” đã thu hút vô số du khách.',
    exList:[
      {zh:'《蒙娜丽莎》神秘的微笑吸引了无数游客。', py:'“Méngnàlìshā” shénmì de wēixiào xīyǐnle wúshù yóukè.', vn:'Nụ cười bí ẩn của “Mona Lisa” đã thu hút vô số du khách.'},
      {zh:'宇宙对人类来说仍然是一个神秘的地方。', py:'Yǔzhòu duì rénlèi lái shuō réngrán shì yí ge shénmì de dìfang.', vn:'Vũ trụ đối với loài người vẫn là một nơi bí ẩn.'},
      {zh:'她说话总是神神秘秘的，谁也不知道她在想什么。', py:'Tā shuōhuà zǒngshì shénshenmìmì de, shéi yě bù zhīdào tā zài xiǎng shénme.', vn:'Cô ấy nói chuyện lúc nào cũng bí bí ẩn ẩn, chẳng ai biết cô ấy đang nghĩ gì.'}
    ],
    colloFull:[
      {zh:'神秘的地方', py:'shénmì de dìfang', vn:'nơi bí ẩn'},
      {zh:'神秘的微笑', py:'shénmì de wēixiào', vn:'nụ cười bí ẩn'},
      {zh:'神秘感', py:'shénmìgǎn', vn:'cảm giác bí ẩn'},
      {zh:'十分神秘', py:'shífēn shénmì', vn:'rất bí ẩn'},
      {zh:'神秘的礼物', py:'shénmì de lǐwù', vn:'món quà bí mật'}
    ],
    patterns:[{s:'神秘的 + N', m:'… bí ẩn'}, {s:'显得 / 看起来 + 很神秘', m:'Trông có vẻ bí ẩn'}],
    checkList:[
      {promptLang:'vi', prompt:'Món quà bí mật đó bị em gái tìm thấy rồi.', answer:'那份神秘的礼物被妹妹找到了。', answerPy:'Nà fèn shénmì de lǐwù bèi mèimei zhǎodào le.', note:'神秘的 + 礼物: tính từ song âm tiết làm định ngữ thường có 的.', pair:'被'},
      {promptLang:'vi', prompt:'Tôi chưa bao giờ đến một nơi bí ẩn như thế.', answer:'我从来没去过这么神秘的地方。', answerPy:'Wǒ cónglái méi qùguo zhème shénmì de dìfang.', note:'这么 + 神秘 + 的 + 地方.', pair:'从来没……过'}
    ]
  },
{n:11, zh:'丑陋', py:'chǒulòu', pos:'Tính từ', vn:'xấu xí', hv:'xú lậu', em:'👹', lesson:1,
    explain:['Xấu xí, khó coi (vẻ ngoài); cũng dùng cho hành vi, tâm địa xấu xa.', 'Sách ghi 丑(陋): 丑 một chữ là khẩu ngữ (长得丑), 丑陋 là văn viết.'],
    usage:'丑陋 thiên văn viết: 丑陋的外表, 丑陋的行为. Khẩu ngữ: 长得很丑. Nhớ: 极其 đi với 丑陋 (hai âm tiết), không đi với 丑.',
    collo:['丑陋的外表', '丑陋的行为', '长得丑', '美和丑'],
    ex_zh:'《丑小鸭》里的小鸭子因为长得丑，被大家笑话。', ex_py:'“Chǒu xiǎoyā” li de xiǎo yāzi yīnwèi zhǎng de chǒu, bèi dàjiā xiàohua.', ex_vn:'Trong “Vịt con xấu xí”, chú vịt con vì trông xấu nên bị mọi người chê cười.',
    exList:[
      {zh:'这些画作在有人看来极其神秘甚至丑陋。', py:'Zhèxiē huàzuò zài yǒu rén kànlái jíqí shénmì shènzhì chǒulòu.', vn:'Những bức tranh ấy trong mắt một số người vô cùng bí ẩn, thậm chí xấu xí.'},
      {zh:'《丑小鸭》里的小鸭子因为长得丑，被大家笑话。', py:'“Chǒu xiǎoyā” li de xiǎo yāzi yīnwèi zhǎng de chǒu, bèi dàjiā xiàohua.', vn:'Trong “Vịt con xấu xí”, chú vịt con vì trông xấu nên bị mọi người chê cười.'},
      {zh:'外表丑陋并不代表心灵丑陋。', py:'Wàibiǎo chǒulòu bìng bú dàibiǎo xīnlíng chǒulòu.', vn:'Vẻ ngoài xấu xí hoàn toàn không có nghĩa tâm hồn xấu xa.'}
    ],
    colloFull:[
      {zh:'丑陋的外表', py:'chǒulòu de wàibiǎo', vn:'vẻ ngoài xấu xí'},
      {zh:'丑陋的行为', py:'chǒulòu de xíngwéi', vn:'hành vi xấu xa'},
      {zh:'长得丑', py:'zhǎng de chǒu', vn:'trông xấu'},
      {zh:'美和丑', py:'měi hé chǒu', vn:'đẹp và xấu'},
      {zh:'丑小鸭', py:'chǒu xiǎoyā', vn:'vịt con xấu xí'}
    ],
    patterns:[{s:'丑陋的 + 外表 / 行为', m:'Vẻ ngoài / hành vi xấu xí (văn viết)'}, {s:'长得 + 丑', m:'Trông xấu (khẩu ngữ, dùng 丑 một chữ)'}],
    checkList:[
      {promptLang:'vi', prompt:'Chú vịt con ấy vì trông xấu nên bị mọi người chê cười.', answer:'那只小鸭子因为长得丑，被大家笑话。', answerPy:'Nà zhī xiǎo yāzi yīnwèi zhǎng de chǒu, bèi dàjiā xiàohua.', note:'Khẩu ngữ: 长得丑; văn viết: 外表丑陋.', pair:'被'},
      {promptLang:'vi', prompt:'Tuy vẻ ngoài xấu xí, nhưng anh ấy có tấm lòng rất lương thiện.', answer:'虽然他外表丑陋，但是心地非常善良。', answerPy:'Suīrán tā wàibiǎo chǒulòu, dànshì xīndì fēicháng shànliáng.', note:'丑陋 đối lập với 善良 (bên ngoài ↔ bên trong).', pair:'虽然……但是……'}
    ]
  },
  {n:12, zh:'自由', py:'zìyóu', pos:'Danh từ / Tính từ', vn:'sự tự do; tự do', hv:'tự do', em:'🕊️', lesson:1,
    explain:['Danh từ: sự tự do, quyền tự làm theo ý mình trong khuôn khổ pháp luật.', 'Tính từ: tự do, không bị gò bó.'],
    usage:'Danh từ: 追求自由, 对自由的赞美. Tính từ: 很自由, 自由活动, 自由地飞. Thành ngữ: 自由自在.',
    collo:['追求自由', '自由活动', '自由时间', '自由自在'],
    ex_zh:'下午是自由活动时间，大家可以随便逛逛。', ex_py:'Xiàwǔ shì zìyóu huódòng shíjiān, dàjiā kěyǐ suíbiàn guàngguang.', ex_vn:'Buổi chiều là thời gian hoạt động tự do, mọi người có thể tuỳ ý đi dạo.',
    exList:[
      {zh:'下午是自由活动时间，大家可以随便逛逛。', py:'Xiàwǔ shì zìyóu huódòng shíjiān, dàjiā kěyǐ suíbiàn guàngguang.', vn:'Buổi chiều là thời gian hoạt động tự do, mọi người có thể tuỳ ý đi dạo.'},
      {zh:'有人却从中感受到对自由、对生命的赞美。', py:'Yǒu rén què cóng zhōng gǎnshòu dào duì zìyóu, duì shēngmìng de zànměi.', vn:'Lại có người từ đó cảm nhận được sự ca ngợi tự do, ca ngợi sự sống.'},
      {zh:'每个人对抽象艺术可以有不同的解读，这既是挑战，也是自由。', py:'Měi ge rén duì chōuxiàng yìshù kěyǐ yǒu bù tóng de jiědú, zhè jì shì tiǎozhàn, yě shì zìyóu.', vn:'Mỗi người có thể hiểu nghệ thuật trừu tượng theo cách khác nhau — đó vừa là thách thức, vừa là tự do.'}
    ],
    colloFull:[
      {zh:'追求自由', py:'zhuīqiú zìyóu', vn:'theo đuổi tự do'},
      {zh:'自由活动', py:'zìyóu huódòng', vn:'hoạt động tự do'},
      {zh:'自由时间', py:'zìyóu shíjiān', vn:'thời gian tự do'},
      {zh:'自由自在', py:'zìyóu zìzài', vn:'tự do tự tại'},
      {zh:'自由地飞', py:'zìyóu de fēi', vn:'bay tự do'}
    ],
    patterns:[{s:'追求 / 热爱 + 自由', m:'Theo đuổi / yêu tự do (danh từ)'}, {s:'自由 + 活动 / 时间 / 选择', m:'… tự do (tính từ làm định ngữ)'}],
    checkList:[
      {promptLang:'vi', prompt:'Lên đại học rồi, thời gian tự do ngày càng nhiều.', answer:'上了大学，自由时间越来越多了。', answerPy:'Shàngle dàxué, zìyóu shíjiān yuè lái yuè duō le.', note:'自由时间: tính từ làm định ngữ, không cần 的.', pair:'越来越'},
      {promptLang:'vi', prompt:'Chỉ cần làm xong bài tập là có thể hoạt động tự do.', answer:'只要做完作业，就可以自由活动。', answerPy:'Zhǐyào zuòwán zuòyè, jiù kěyǐ zìyóu huódòng.', note:'自由 + 活动: “tự do” đứng trước động từ.', pair:'只要……就……'}
    ]
  },
  {n:13, zh:'设计', py:'shèjì', pos:'Động từ / Danh từ', vn:'thiết kế; bản thiết kế', hv:'thiết kế', em:'✏️', lesson:1,
    explain:['Động từ: lên kế hoạch, bản vẽ, phương án trước khi làm (thiết kế nhà, quần áo, thí nghiệm…).', 'Danh từ: bản thiết kế, phương án thiết kế.'],
    usage:'设计 + 实验 / 方案 / 服装 / 房子; 设计图, 设计师, 设计作品, 设计方案. 新设计的作品 = tác phẩm mới thiết kế.',
    collo:['设计图', '设计作品', '设计方案', '设计实验'],
    ex_zh:'研究者设计了一个有趣的实验。', ex_py:'Yánjiūzhě shèjìle yí ge yǒuqù de shíyàn.', ex_vn:'Nhà nghiên cứu đã thiết kế một thí nghiệm thú vị.',
    exList:[
      {zh:'研究者设计了一个有趣的实验。', py:'Yánjiūzhě shèjìle yí ge yǒuqù de shíyàn.', vn:'Nhà nghiên cứu đã thiết kế một thí nghiệm thú vị.'},
      {zh:'这是我新设计的作品，请您过目。', py:'Zhè shì wǒ xīn shèjì de zuòpǐn, qǐng nín guòmù.', vn:'Đây là tác phẩm tôi mới thiết kế, mời ông xem qua.'},
      {zh:'你们的设计方案我很满意。', py:'Nǐmen de shèjì fāng\'àn wǒ hěn mǎnyì.', vn:'Phương án thiết kế của các bạn tôi rất hài lòng.'}
    ],
    colloFull:[
      {zh:'设计图', py:'shèjìtú', vn:'bản vẽ thiết kế'},
      {zh:'设计作品', py:'shèjì zuòpǐn', vn:'tác phẩm thiết kế'},
      {zh:'设计方案', py:'shèjì fāng\'àn', vn:'phương án thiết kế'},
      {zh:'设计实验', py:'shèjì shíyàn', vn:'thiết kế thí nghiệm'},
      {zh:'服装设计', py:'fúzhuāng shèjì', vn:'thiết kế thời trang'}
    ],
    patterns:[{s:'设计 + 实验 / 方案 / 服装', m:'Thiết kế cái gì (động từ)'}, {s:'设计 + 图 / 师 / 作品 / 方案', m:'Bản vẽ / nhà / tác phẩm / phương án thiết kế'}],
    checkList:[
      {promptLang:'vi', prompt:'Bộ quần áo này là do chị tôi tự thiết kế.', answer:'这套衣服是姐姐自己设计的。', answerPy:'Zhè tào yīfu shì jiějie zìjǐ shèjì de.', note:'套 (bộ) là lượng từ của bài 2.', pair:'是……的'},
      {promptLang:'vi', prompt:'Bản vẽ thiết kế đó bị sếp trả lại rồi.', answer:'那份设计图被老板退回来了。', answerPy:'Nà fèn shèjìtú bèi lǎobǎn tuì huílai le.', note:'设计图: danh từ ghép.', pair:'被'}
    ]
  },
  {n:14, zh:'组', py:'zǔ', pos:'Danh từ / Lượng từ', vn:'tổ, nhóm; bộ, nhóm (lượng từ)', hv:'tổ', em:'👥', lesson:1,
    explain:['Danh từ: tổ, nhóm (người hoặc vật tập hợp lại).', 'Lượng từ: bộ, nhóm, tổ — cho những thứ hợp thành một nhóm: 一组照片, 一组学生.'],
    usage:'Lượng từ: 一组 + 学生 / 照片 / 服装 / 工具; 两两一组 = từng cặp một nhóm. Danh từ: 小组, 分组, 组长.',
    collo:['一组学生', '一组照片', '两两一组', '小组'],
    ex_zh:'老师把我们分成了四个小组。', ex_py:'Lǎoshī bǎ wǒmen fēnchéngle sì ge xiǎozǔ.', ex_vn:'Thầy chia chúng tôi thành bốn nhóm nhỏ.',
    exList:[
      {zh:'老师把我们分成了四个小组。', py:'Lǎoshī bǎ wǒmen fēnchéngle sì ge xiǎozǔ.', vn:'Thầy chia chúng tôi thành bốn nhóm nhỏ.'},
      {zh:'每个人会看到两两一组出现的一些图画。', py:'Měi ge rén huì kàndào liǎngliǎng yì zǔ chūxiàn de yìxiē túhuà.', vn:'Mỗi người sẽ xem một số bức tranh xuất hiện theo từng cặp.'},
      {zh:'这次展出的一组服装是由七套戏服组成的。', py:'Zhè cì zhǎnchū de yì zǔ fúzhuāng shì yóu qī tào xìfú zǔchéng de.', vn:'Bộ trang phục trưng bày lần này gồm bảy bộ đồ diễn.'}
    ],
    colloFull:[
      {zh:'一组学生', py:'yì zǔ xuésheng', vn:'một nhóm học sinh'},
      {zh:'一组照片', py:'yì zǔ zhàopiàn', vn:'một bộ ảnh'},
      {zh:'两两一组', py:'liǎngliǎng yì zǔ', vn:'từng cặp một nhóm'},
      {zh:'小组', py:'xiǎozǔ', vn:'nhóm nhỏ'},
      {zh:'一组工具', py:'yì zǔ gōngjù', vn:'một bộ dụng cụ'}
    ],
    patterns:[{s:'一组 + 学生 / 照片 / 服装 / 工具', m:'Một nhóm / bộ … (lượng từ)'}, {s:'把 + người + 分成 + Số + 组', m:'Chia … thành mấy nhóm'}],
    checkList:[
      {promptLang:'vi', prompt:'Thầy giáo chia chúng tôi thành ba nhóm.', answer:'老师把我们分成了三组。', answerPy:'Lǎoshī bǎ wǒmen fēnchéngle sān zǔ.', note:'分成 + Số + 组.', pair:'把'},
      {promptLang:'vi', prompt:'Bộ ảnh này là tôi chụp ở vịnh Hạ Long.', answer:'这组照片是我在下龙湾拍的。', answerPy:'Zhè zǔ zhàopiàn shì wǒ zài Xiàlóng Wān pāi de.', note:'一组照片 = một bộ ảnh (nhiều tấm liên quan nhau).', pair:'是……的'}
    ]
  },
  {n:15, zh:'幅', py:'fú', pos:'Lượng từ', vn:'bức, tấm (tranh, vải vóc…)', hv:'bức', em:'🖼️', lesson:1,
    explain:['Lượng từ dùng cho tranh, ảnh, bản đồ, vải vóc…: bức, tấm.'],
    usage:'一幅 + 画儿 / 作品 / 照片 / 地图. Nói về tranh nghệ thuật, 幅 trang trọng và chuẩn hơn 张.',
    collo:['一幅画儿', '一幅作品', '一幅地图', '这幅画'],
    ex_zh:'书房的墙上挂着一幅静物画。', ex_py:'Shūfáng de qiáng shang guàzhe yì fú jìngwùhuà.', ex_vn:'Trên tường thư phòng treo một bức tranh tĩnh vật.',
    exList:[
      {zh:'书房的墙上挂着一幅静物画。', py:'Shūfáng de qiáng shang guàzhe yì fú jìngwùhuà.', vn:'Trên tường thư phòng treo một bức tranh tĩnh vật.'},
      {zh:'每组中一幅出自著名抽象艺术家之手。', py:'Měi zǔ zhōng yì fú chūzì zhùmíng chōuxiàng yìshùjiā zhī shǒu.', vn:'Trong mỗi cặp, một bức là do tay một nghệ sĩ trừu tượng nổi tiếng vẽ.'},
      {zh:'说实话，这个画展我一幅也看不懂。', py:'Shuō shíhuà, zhège huàzhǎn wǒ yì fú yě kàn bu dǒng.', vn:'Nói thật, triển lãm tranh này tôi chẳng hiểu nổi bức nào.'}
    ],
    colloFull:[
      {zh:'一幅画儿', py:'yì fú huàr', vn:'một bức tranh'},
      {zh:'一幅作品', py:'yì fú zuòpǐn', vn:'một bức tranh (tác phẩm)'},
      {zh:'一幅地图', py:'yì fú dìtú', vn:'một tấm bản đồ'},
      {zh:'这幅画', py:'zhè fú huà', vn:'bức tranh này'},
      {zh:'一幅照片', py:'yì fú zhàopiàn', vn:'một tấm ảnh'}
    ],
    patterns:[{s:'一幅 + 画儿 / 作品 / 地图', m:'Một bức …'}, {s:'一幅也 + 不 / 没 + V', m:'Không … bức nào (nhấn mạnh phủ định)'}],
    checkList:[
      {promptLang:'vi', prompt:'Bức tranh này là ông nội vẽ năm 1980.', answer:'这幅画是爷爷1980年画的。', answerPy:'Zhè fú huà shì yéye yī jiǔ bā líng nián huà de.', note:'这 + 幅 + 画.', pair:'是……的'},
      {promptLang:'vi', prompt:'Mẹ treo bức tranh đó lên tường phòng khách.', answer:'妈妈把那幅画挂在了客厅的墙上。', answerPy:'Māma bǎ nà fú huà guà zàile kètīng de qiáng shang.', note:'那 + 幅 + 画; 把 + N + 挂在 + nơi chốn.', pair:'把'}
    ]
  },
  {n:16, zh:'出自', py:'chūzì', pos:'Động từ', vn:'xuất phát từ, đến từ', hv:'xuất tự', em:'📜', lesson:1,
    explain:['Xuất phát từ, bắt nguồn từ, do … làm ra (thường nói nguồn gốc của câu nói, tác phẩm).'],
    usage:'出自 + nguồn (sách, người, nơi): 出自《论语》; 出自 + ai + 之手 = do tay ai làm ra. Văn viết.',
    collo:['出自……之手', '出自《论语》', '出自内心', '出自传说'],
    ex_zh:'成语“画龙点睛”便出自关于他的传说。', ex_py:'Chéngyǔ “huà lóng diǎn jīng” biàn chūzì guānyú tā de chuánshuō.', ex_vn:'Thành ngữ “vẽ rồng điểm mắt” chính là bắt nguồn từ truyền thuyết về ông ấy.',
    exList:[
      {zh:'成语“画龙点睛”便出自关于他的传说。', py:'Chéngyǔ “huà lóng diǎn jīng” biàn chūzì guānyú tā de chuánshuō.', vn:'Thành ngữ “vẽ rồng điểm mắt” chính là bắt nguồn từ truyền thuyết về ông ấy.'},
      {zh:'这幅画出自一个十岁孩子之手。', py:'Zhè fú huà chūzì yí ge shí suì háizi zhī shǒu.', vn:'Bức tranh này do tay một đứa trẻ mười tuổi vẽ.'},
      {zh:'他的话出自内心，不是随便说说。', py:'Tā de huà chūzì nèixīn, bú shì suíbiàn shuōshuo.', vn:'Lời anh ấy xuất phát từ đáy lòng, không phải nói cho có.'}
    ],
    colloFull:[
      {zh:'出自……之手', py:'chūzì……zhī shǒu', vn:'do tay … làm ra'},
      {zh:'出自《论语》', py:'chūzì “Lúnyǔ”', vn:'trích từ “Luận ngữ”'},
      {zh:'出自内心', py:'chūzì nèixīn', vn:'xuất phát từ đáy lòng'},
      {zh:'出自传说', py:'chūzì chuánshuō', vn:'bắt nguồn từ truyền thuyết'},
      {zh:'出自名家', py:'chūzì míngjiā', vn:'do danh gia làm ra'}
    ],
    patterns:[{s:'A + 出自 + B + 之手', m:'A do tay B làm ra'}, {s:'成语 / 句子 + 出自 + 《sách》', m:'Thành ngữ / câu … trích từ …'}],
    checkList:[
      {promptLang:'vi', prompt:'Ngay cả thầy giáo cũng không biết câu này trích từ sách nào.', answer:'连老师都不知道这句话出自哪本书。', answerPy:'Lián lǎoshī dōu bù zhīdào zhè jù huà chūzì nǎ běn shū.', note:'出自 + nguồn: không cần thêm 从 hay 于.', pair:'连……都……'},
      {promptLang:'vi', prompt:'Tuy bức tranh này do tay một đứa trẻ vẽ, nhưng vẽ rất đẹp.', answer:'虽然这幅画出自孩子之手，但是画得非常好。', answerPy:'Suīrán zhè fú huà chūzì háizi zhī shǒu, dànshì huà de fēicháng hǎo.', note:'出自……之手: cấu trúc văn viết cố định.', pair:'虽然……但是……'}
    ]
  },
  {n:17, zh:'业余', py:'yèyú', pos:'Tính từ', vn:'ngoài giờ; nghiệp dư', hv:'nghiệp dư', em:'🎸', lesson:1,
    explain:['Ngoài giờ làm việc, học tập (thời gian rảnh).', 'Không chuyên nghiệp, nghiệp dư (trái nghĩa: 专业).'],
    usage:'业余 + 时间 / 爱好 / 水平 / 合唱团 / 乐队. Luôn cần danh từ đi sau: 业余爱好, không nói 我的业余是…. Trái nghĩa: 专业.',
    collo:['业余时间', '业余爱好', '业余水平', '业余合唱团'],
    ex_zh:'摄影只不过是我的业余爱好。', ex_py:'Shèyǐng zhǐ búguò shì wǒ de yèyú àihào.', ex_vn:'Nhiếp ảnh chỉ là sở thích ngoài giờ của tôi thôi.',
    exList:[
      {zh:'摄影只不过是我的业余爱好。', py:'Shèyǐng zhǐ búguò shì wǒ de yèyú àihào.', vn:'Nhiếp ảnh chỉ là sở thích ngoài giờ của tôi thôi.'},
      {zh:'我们只是一支业余的乐队，不够专业水平。', py:'Wǒmen zhǐ shì yì zhī yèyú de yuèduì, bú gòu zhuānyè shuǐpíng.', vn:'Chúng tôi chỉ là một ban nhạc nghiệp dư, chưa đủ trình độ chuyên nghiệp.'},
      {zh:'业余时间，他喜欢去公园画画儿。', py:'Yèyú shíjiān, tā xǐhuan qù gōngyuán huà huàr.', vn:'Lúc rảnh rỗi, anh ấy thích ra công viên vẽ tranh.'}
    ],
    colloFull:[
      {zh:'业余时间', py:'yèyú shíjiān', vn:'thời gian rảnh (ngoài giờ)'},
      {zh:'业余爱好', py:'yèyú àihào', vn:'sở thích ngoài giờ'},
      {zh:'业余水平', py:'yèyú shuǐpíng', vn:'trình độ nghiệp dư'},
      {zh:'业余合唱团', py:'yèyú héchàngtuán', vn:'dàn hợp xướng nghiệp dư'},
      {zh:'业余乐队', py:'yèyú yuèduì', vn:'ban nhạc nghiệp dư'}
    ],
    patterns:[{s:'业余 + 时间 / 爱好', m:'Thời gian / sở thích ngoài giờ'}, {s:'业余 ↔ 专业 + 水平 / 乐队', m:'Nghiệp dư ↔ chuyên nghiệp'}],
    checkList:[
      {promptLang:'vi', prompt:'Lúc rảnh anh ấy không chỉ vẽ tranh mà còn học đàn piano.', answer:'业余时间他不仅画画儿，也学钢琴。', answerPy:'Yèyú shíjiān tā bùjǐn huà huàr, yě xué gāngqín.', note:'业余时间 đứng đầu câu làm trạng ngữ thời gian.', pair:'不仅……也……'},
      {promptLang:'vi', prompt:'Tuy là ca sĩ nghiệp dư nhưng chị ấy hát rất hay.', answer:'虽然她是业余歌手，但是唱得非常好。', answerPy:'Suīrán tā shì yèyú gēshǒu, dànshì chàng de fēicháng hǎo.', note:'业余 + 歌手: nghiệp dư, trái với 专业.', pair:'虽然……但是……'}
    ]
  },
  {n:18, zh:'婴儿', py:'yīng\'ér', pos:'Danh từ', vn:'trẻ sơ sinh', hv:'anh nhi', em:'👶', lesson:1,
    explain:['Trẻ sơ sinh, em bé dưới một tuổi.'],
    usage:'婴儿 là từ văn viết, chính thức; khẩu ngữ hay nói 小宝宝. Ghép: 婴儿车, 婴儿床, 婴儿用品.',
    collo:['婴儿车', '婴儿床', '刚出生的婴儿', '照顾婴儿'],
    ex_zh:'刚出生的婴儿每天要睡十几个小时。', ex_py:'Gāng chūshēng de yīng\'ér měi tiān yào shuì shí jǐ ge xiǎoshí.', ex_vn:'Trẻ mới sinh mỗi ngày phải ngủ mười mấy tiếng.',
    exList:[
      {zh:'刚出生的婴儿每天要睡十几个小时。', py:'Gāng chūshēng de yīng\'ér měi tiān yào shuì shí jǐ ge xiǎoshí.', vn:'Trẻ mới sinh mỗi ngày phải ngủ mười mấy tiếng.'},
      {zh:'另一幅是业余爱好者、婴儿、黑猩猩或者大象的涂鸦。', py:'Lìng yì fú shì yèyú àihàozhě, yīng\'ér, hēixīngxing huòzhě dàxiàng de túyā.', vn:'Bức kia là nét vẽ nguệch ngoạc của người vẽ nghiệp dư, em bé, tinh tinh hoặc voi.'},
      {zh:'妈妈推着婴儿车在公园里散步。', py:'Māma tuīzhe yīng\'érchē zài gōngyuán li sànbù.', vn:'Mẹ đẩy xe em bé đi dạo trong công viên.'}
    ],
    colloFull:[
      {zh:'婴儿车', py:'yīng\'érchē', vn:'xe đẩy em bé'},
      {zh:'婴儿床', py:'yīng\'érchuáng', vn:'nôi, giường em bé'},
      {zh:'刚出生的婴儿', py:'gāng chūshēng de yīng\'ér', vn:'trẻ mới chào đời'},
      {zh:'照顾婴儿', py:'zhàogù yīng\'ér', vn:'chăm sóc em bé'},
      {zh:'婴儿用品', py:'yīng\'ér yòngpǐn', vn:'đồ dùng cho em bé'}
    ],
    patterns:[{s:'婴儿 + 车 / 床 / 用品', m:'Xe / giường / đồ dùng cho em bé'}, {s:'刚出生的 + 婴儿', m:'Trẻ mới chào đời'}],
    checkList:[
      {promptLang:'vi', prompt:'Em bé vừa khóc là mẹ liền bế lên ngay.', answer:'婴儿一哭，妈妈就马上把他抱起来。', answerPy:'Yīng\'ér yì kū, māma jiù mǎshàng bǎ tā bào qǐlai.', note:'婴儿 làm chủ ngữ vế trước.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Em bé bị tiếng sấm đánh thức.', answer:'婴儿被雷声吵醒了。', answerPy:'Yīng\'ér bèi léishēng chǎoxǐng le.', note:'吵醒 = làm ồn đến mức thức giấc.', pair:'被'}
    ]
  },
  {n:19, zh:'猩猩', py:'xīngxing', pos:'Danh từ', vn:'(con) đười ươi, tinh tinh', hv:'tinh tinh', em:'🦍', lesson:1,
    explain:['Đười ươi / tinh tinh — loài vượn lớn rất thông minh. 黑猩猩 = tinh tinh (lông đen), 大猩猩 = khỉ đột.'],
    usage:'Lượng từ: 一只猩猩. Trong bài dùng 黑猩猩 (tinh tinh).',
    collo:['黑猩猩', '大猩猩', '一只猩猩', '猩猩画画儿'],
    ex_zh:'动物园里的那只黑猩猩会用笔画画儿。', ex_py:'Dòngwùyuán li de nà zhī hēixīngxing huì yòng bǐ huà huàr.', ex_vn:'Con tinh tinh trong sở thú biết dùng bút vẽ tranh.',
    exList:[
      {zh:'动物园里的那只黑猩猩会用笔画画儿。', py:'Dòngwùyuán li de nà zhī hēixīngxing huì yòng bǐ huà huàr.', vn:'Con tinh tinh trong sở thú biết dùng bút vẽ tranh.'},
      {zh:'志愿者认为自己看到的是黑猩猩的随手涂鸦。', py:'Zhìyuànzhě rènwéi zìjǐ kàndào de shì hēixīngxing de suíshǒu túyā.', vn:'Tình nguyện viên cho rằng thứ mình đang xem là nét vẽ tiện tay của tinh tinh.'},
      {zh:'猩猩是一种非常聪明的动物。', py:'Xīngxing shì yì zhǒng fēicháng cōngming de dòngwù.', vn:'Đười ươi là loài động vật rất thông minh.'}
    ],
    colloFull:[
      {zh:'黑猩猩', py:'hēixīngxing', vn:'tinh tinh'},
      {zh:'大猩猩', py:'dàxīngxing', vn:'khỉ đột'},
      {zh:'一只猩猩', py:'yì zhī xīngxing', vn:'một con đười ươi'},
      {zh:'猩猩画画儿', py:'xīngxing huà huàr', vn:'đười ươi vẽ tranh'},
      {zh:'保护猩猩', py:'bǎohù xīngxing', vn:'bảo vệ đười ươi'}
    ],
    patterns:[{s:'黑 / 大 + 猩猩', m:'Tinh tinh / khỉ đột'}, {s:'一只 + 猩猩', m:'Lượng từ 只 cho con vật'}],
    checkList:[
      {promptLang:'vi', prompt:'Ngay cả tinh tinh cũng biết dùng bút vẽ tranh.', answer:'连黑猩猩都会用笔画画儿。', answerPy:'Lián hēixīngxing dōu huì yòng bǐ huà huàr.', note:'猩猩: chữ 猩 lặp lại, chữ sau đọc nhẹ.', pair:'连……都……'},
      {promptLang:'vi', prompt:'Bức tranh đó hoá ra là do một con tinh tinh vẽ.', answer:'那幅画原来是一只黑猩猩画的。', answerPy:'Nà fú huà yuánlái shì yì zhī hēixīngxing huà de.', note:'一只 + 黑猩猩.', pair:'是……的'}
    ]
  },
  {n:20, zh:'涂鸦', py:'túyā', pos:'Động từ', vn:'vẽ / viết nguệch ngoạc', hv:'đồ nha', em:'🖍️', lesson:1,
    explain:['Vẽ, viết nguệch ngoạc, bôi bậy; cũng dùng như danh từ: nét vẽ nguệch ngoạc, tranh graffiti.'],
    usage:'Động từ: 在墙上涂鸦. Danh từ: 孩子的涂鸦, 随手涂鸦, 涂鸦艺术.',
    collo:['随手涂鸦', '在墙上涂鸦', '孩子的涂鸦', '涂鸦艺术'],
    ex_zh:'学校不允许学生在墙上涂鸦。', ex_py:'Xuéxiào bù yǔnxǔ xuésheng zài qiáng shang túyā.', ex_vn:'Nhà trường không cho phép học sinh vẽ bậy lên tường.',
    exList:[
      {zh:'学校不允许学生在墙上涂鸦。', py:'Xuéxiào bù yǔnxǔ xuésheng zài qiáng shang túyā.', vn:'Nhà trường không cho phép học sinh vẽ bậy lên tường.'},
      {zh:'小时候我常常在课本上随手涂鸦。', py:'Xiǎoshíhou wǒ chángcháng zài kèběn shang suíshǒu túyā.', vn:'Hồi nhỏ tôi hay tiện tay vẽ nguệch ngoạc lên sách giáo khoa.'},
      {zh:'志愿者认为是黑猩猩的随手涂鸦，实际则是著名抽象艺术家的大作。', py:'Zhìyuànzhě rènwéi shì hēixīngxing de suíshǒu túyā, shíjì zé shì zhùmíng chōuxiàng yìshùjiā de dàzuò.', vn:'Tình nguyện viên tưởng là nét vẽ tiện tay của tinh tinh, nhưng thực ra lại là kiệt tác của nghệ sĩ trừu tượng nổi tiếng.'}
    ],
    colloFull:[
      {zh:'随手涂鸦', py:'suíshǒu túyā', vn:'tiện tay vẽ nguệch ngoạc'},
      {zh:'在墙上涂鸦', py:'zài qiáng shang túyā', vn:'vẽ bậy lên tường'},
      {zh:'孩子的涂鸦', py:'háizi de túyā', vn:'nét vẽ nguệch ngoạc của trẻ con'},
      {zh:'涂鸦艺术', py:'túyā yìshù', vn:'nghệ thuật graffiti'},
      {zh:'涂鸦墙', py:'túyāqiáng', vn:'bức tường graffiti'}
    ],
    patterns:[{s:'在 + nơi chốn + 涂鸦', m:'Vẽ nguệch ngoạc ở đâu (động từ)'}, {s:'……的 + (随手)涂鸦', m:'Nét vẽ nguệch ngoạc của … (danh từ)'}],
    checkList:[
      {promptLang:'vi', prompt:'Bức tường mới sơn đã bị ai đó vẽ bậy lên rồi.', answer:'新刷的墙被人涂鸦了。', answerPy:'Xīn shuā de qiáng bèi rén túyā le.', note:'涂鸦 làm động từ trong câu bị động.', pair:'被'},
      {promptLang:'vi', prompt:'Em trai vừa cầm bút lên là bắt đầu vẽ nguệch ngoạc khắp nơi.', answer:'弟弟一拿起笔就开始到处涂鸦。', answerPy:'Dìdi yì náqǐ bǐ jiù kāishǐ dàochù túyā.', note:'到处 + 涂鸦: vẽ bậy khắp nơi.', pair:'一……就……'}
    ]
  },
  {n:21, zh:'签', py:'qiān', pos:'Động từ', vn:'ký (tên)', hv:'thiêm', em:'✍️', lesson:1,
    explain:['Ký tên, ký kết: viết tên mình lên giấy tờ, tác phẩm để xác nhận.'],
    usage:'签名 / 签字 / 签合同 / 签上名字. 签名 còn là danh từ: chữ ký (没有签名 = không có chữ ký).',
    collo:['签名', '签字', '签合同', '签上名字'],
    ex_zh:'其中三分之一的画作作者没有签名。', ex_py:'Qízhōng sān fēn zhī yī de huàzuò zuòzhě méiyǒu qiānmíng.', ex_vn:'Trong đó một phần ba số tranh không có chữ ký của tác giả.',
    exList:[
      {zh:'其中三分之一的画作作者没有签名。', py:'Qízhōng sān fēn zhī yī de huàzuò zuòzhě méiyǒu qiānmíng.', vn:'Trong đó một phần ba số tranh không có chữ ký của tác giả.'},
      {zh:'考完试别忘了在试卷上签上自己的名字。', py:'Kǎowán shì bié wàngle zài shìjuàn shang qiānshàng zìjǐ de míngzi.', vn:'Thi xong đừng quên ký tên mình lên bài thi.'},
      {zh:'双方终于签了合同。', py:'Shuāngfāng zhōngyú qiānle hétong.', vn:'Cuối cùng hai bên đã ký hợp đồng.'}
    ],
    colloFull:[
      {zh:'签名', py:'qiānmíng', vn:'ký tên; chữ ký'},
      {zh:'签字', py:'qiānzì', vn:'ký tên'},
      {zh:'签合同', py:'qiān hétong', vn:'ký hợp đồng'},
      {zh:'签上名字', py:'qiānshàng míngzi', vn:'ký tên vào'},
      {zh:'请明星签名', py:'qǐng míngxīng qiānmíng', vn:'xin chữ ký ngôi sao'}
    ],
    patterns:[{s:'在 + giấy tờ + 上 + 签(上)名字', m:'Ký tên lên …'}, {s:'签 + 合同 / 字 / 名', m:'Ký hợp đồng / ký tên'}],
    checkList:[
      {promptLang:'vi', prompt:'Bạn đưa tờ phiếu này cho bố ký tên nhé.', answer:'你把这张表交给爸爸签个字吧。', answerPy:'Nǐ bǎ zhè zhāng biǎo jiāo gěi bàba qiān ge zì ba.', note:'签字 là động từ ly hợp: 签个字.', pair:'把'},
      {promptLang:'vi', prompt:'Hợp đồng này là hôm qua mới ký.', answer:'这份合同是昨天才签的。', answerPy:'Zhè fèn hétong shì zuótiān cái qiān de.', note:'签 + 合同; lượng từ 份.', pair:'是……的'}
    ]
  },
  {n:22, zh:'其余', py:'qíyú', pos:'Đại từ', vn:'cái còn lại, những cái khác', hv:'kỳ dư', em:'🧩', lesson:1,
    explain:['Đại từ: phần còn lại, những người / vật khác ngoài phần đã nói trước đó.'],
    usage:'其余 + (的) + N; 其余的 + 都…… . Thường đứng đầu vế sau, đối lập với phần đã nêu ở vế trước: 只有……，其余……',
    collo:['其余的同学', '其余的人', '其余的都', '其余时间'],
    ex_zh:'只有一个房间亮着灯，其余窗户都是黑的。', ex_py:'Zhǐ yǒu yí ge fángjiān liàngzhe dēng, qíyú chuānghu dōu shì hēi de.', ex_vn:'Chỉ có một phòng sáng đèn, các cửa sổ còn lại đều tối om.',
    exList:[
      {zh:'只有一个房间亮着灯，其余窗户都是黑的。', py:'Zhǐ yǒu yí ge fángjiān liàngzhe dēng, qíyú chuānghu dōu shì hēi de.', vn:'Chỉ có một phòng sáng đèn, các cửa sổ còn lại đều tối om.'},
      {zh:'其中三分之一的画作作者没有签名，而其余的则标明了身份。', py:'Qízhōng sān fēn zhī yī de huàzuò zuòzhě méiyǒu qiānmíng, ér qíyú de zé biāomíngle shēnfèn.', vn:'Trong đó một phần ba số tranh không có chữ ký, còn những bức còn lại thì ghi rõ thân phận tác giả.'},
      {zh:'怎么只有你们两个人？其余的同学呢？', py:'Zěnme zhǐ yǒu nǐmen liǎng ge rén? Qíyú de tóngxué ne?', vn:'Sao chỉ có hai em? Các bạn còn lại đâu?'}
    ],
    colloFull:[
      {zh:'其余的同学', py:'qíyú de tóngxué', vn:'những bạn còn lại'},
      {zh:'其余的人', py:'qíyú de rén', vn:'những người còn lại'},
      {zh:'其余的都', py:'qíyú de dōu', vn:'số còn lại đều'},
      {zh:'其余时间', py:'qíyú shíjiān', vn:'thời gian còn lại'},
      {zh:'其余部分', py:'qíyú bùfen', vn:'phần còn lại'}
    ],
    patterns:[{s:'只有 A……，其余(的) + 都……', m:'Chỉ A…, còn lại đều…'}, {s:'其余的 + N', m:'Những … còn lại'}],
    checkList:[
      {promptLang:'vi', prompt:'Cậu cầm hai cái vali này, hành lý còn lại đưa hết cho tôi.', answer:'你拿这两个箱子，把其余的行李交给我吧。', answerPy:'Nǐ ná zhè liǎng ge xiāngzi, bǎ qíyú de xíngli jiāo gěi wǒ ba.', note:'其余的 + 行李: phần còn lại sau khi đã tách ra hai cái vali.', pair:'把'},
      {promptLang:'vi', prompt:'Chỉ cần làm xong bài này, thời gian còn lại con có thể tự do sắp xếp.', answer:'只要做完这道题，其余的时间你就可以自由安排。', answerPy:'Zhǐyào zuòwán zhè dào tí, qíyú de shíjiān nǐ jiù kěyǐ zìyóu ānpái.', note:'其余的时间 = thời gian còn lại.', pair:'只要……就……'}
    ]
  },
  {n:23, zh:'身份', py:'shēnfèn', pos:'Danh từ', vn:'thân phận, địa vị', hv:'thân phận', em:'🪪', lesson:1,
    explain:['Thân phận, địa vị, tư cách của một người trong xã hội hoặc trong một tình huống (là ai, làm gì).'],
    usage:'身份证 (chứng minh thư); 标明 / 确认 / 隐藏 + 身份; 以 + ……的身份 + V (với tư cách …).',
    collo:['身份证', '标明身份', '确认身份', '以……的身份'],
    ex_zh:'坐飞机的时候一定要带身份证。', ex_py:'Zuò fēijī de shíhou yídìng yào dài shēnfènzhèng.', ex_vn:'Khi đi máy bay nhất định phải mang chứng minh thư.',
    exList:[
      {zh:'坐飞机的时候一定要带身份证。', py:'Zuò fēijī de shíhou yídìng yào dài shēnfènzhèng.', vn:'Khi đi máy bay nhất định phải mang chứng minh thư.'},
      {zh:'其余的画作则标明了作者的身份。', py:'Qíyú de huàzuò zé biāomíngle zuòzhě de shēnfèn.', vn:'Những bức còn lại thì ghi rõ thân phận của tác giả.'},
      {zh:'他以学生代表的身份在大会上发了言。', py:'Tā yǐ xuésheng dàibiǎo de shēnfèn zài dàhuì shang fāle yán.', vn:'Cậu ấy phát biểu tại đại hội với tư cách đại diện học sinh.'}
    ],
    colloFull:[
      {zh:'身份证', py:'shēnfènzhèng', vn:'chứng minh thư'},
      {zh:'标明身份', py:'biāomíng shēnfèn', vn:'ghi rõ thân phận'},
      {zh:'确认身份', py:'quèrèn shēnfèn', vn:'xác nhận thân phận'},
      {zh:'以……的身份', py:'yǐ……de shēnfèn', vn:'với tư cách …'},
      {zh:'隐藏身份', py:'yǐncáng shēnfèn', vn:'giấu thân phận'}
    ],
    patterns:[{s:'以 + ……的身份 + V', m:'Với tư cách … làm gì'}, {s:'确认 / 标明 + 身份', m:'Xác nhận / ghi rõ thân phận'}],
    checkList:[
      {promptLang:'vi', prompt:'Chứng minh thư của tôi bị trộm mất rồi.', answer:'我的身份证被偷了。', answerPy:'Wǒ de shēnfènzhèng bèi tōu le.', note:'身份证 = giấy chứng minh thân phận.', pair:'被'},
      {promptLang:'vi', prompt:'Chỉ cần mang theo chứng minh thư là vào được.', answer:'只要带着身份证，就能进去。', answerPy:'Zhǐyào dàizhe shēnfènzhèng, jiù néng jìnqu.', note:'带着 + 身份证.', pair:'只要……就……'}
    ]
  },
  {n:24, zh:'确认', py:'quèrèn', pos:'Động từ', vn:'xác nhận', hv:'xác nhận', em:'✅', lesson:1,
    explain:['Xác nhận, khẳng định chắc chắn một việc là đúng (sự thật, thông tin, thời gian, thân phận…).'],
    usage:'确认 + 身份 / 时间 / 信息; 无法确认 (không thể xác nhận); 再确认一下.',
    collo:['确认身份', '确认时间', '无法确认', '再确认一下'],
    ex_zh:'志愿者无法确认作者到底是谁。', ex_py:'Zhìyuànzhě wúfǎ quèrèn zuòzhě dàodǐ shì shéi.', ex_vn:'Tình nguyện viên không thể xác nhận tác giả rốt cuộc là ai.',
    exList:[
      {zh:'志愿者无法确认作者到底是谁。', py:'Zhìyuànzhě wúfǎ quèrèn zuòzhě dàodǐ shì shéi.', vn:'Tình nguyện viên không thể xác nhận tác giả rốt cuộc là ai.'},
      {zh:'出发前，请再确认一下航班时间。', py:'Chūfā qián, qǐng zài quèrèn yíxià hángbān shíjiān.', vn:'Trước khi xuất phát, xin hãy xác nhận lại giờ bay.'},
      {zh:'警察已经确认了他的身份。', py:'Jǐngchá yǐjīng quèrènle tā de shēnfèn.', vn:'Cảnh sát đã xác nhận thân phận của anh ta.'}
    ],
    colloFull:[
      {zh:'确认身份', py:'quèrèn shēnfèn', vn:'xác nhận thân phận'},
      {zh:'确认时间', py:'quèrèn shíjiān', vn:'xác nhận thời gian'},
      {zh:'无法确认', py:'wúfǎ quèrèn', vn:'không thể xác nhận'},
      {zh:'再确认一下', py:'zài quèrèn yíxià', vn:'xác nhận lại một chút'},
      {zh:'确认信息', py:'quèrèn xìnxī', vn:'xác nhận thông tin'}
    ],
    patterns:[{s:'确认 + 身份 / 时间 / 信息', m:'Xác nhận …'}, {s:'无法 + 确认 + (câu hỏi)', m:'Không thể xác nhận …'}],
    checkList:[
      {promptLang:'vi', prompt:'Anh ấy vừa xác nhận được thời gian là đặt vé ngay.', answer:'他一确认时间，就马上订了票。', answerPy:'Tā yí quèrèn shíjiān, jiù mǎshàng dìngle piào.', note:'确认 + 时间.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Tin này đã được nhà trường xác nhận.', answer:'这个消息已经被学校确认了。', answerPy:'Zhège xiāoxi yǐjīng bèi xuéxiào quèrèn le.', note:'确认 dùng được trong câu bị động.', pair:'被'}
    ]
  },
  {n:25, zh:'随手', py:'suíshǒu', pos:'Phó từ', vn:'tiện tay, thuận tay', hv:'tuỳ thủ', em:'👋', lesson:1,
    explain:['Phó từ: tiện tay, thuận tay — nhân lúc đang làm việc khác thì làm luôn một việc nhỏ, không suy nghĩ nhiều.'],
    usage:'随手 + V: 随手关门, 随手关灯, 随手放, 随手涂鸦. Khác 随便 (tuỳ ý, không theo quy định).',
    collo:['随手关门', '随手关灯', '随手一放', '随手涂鸦'],
    ex_zh:'出门的时候请随手关灯。', ex_py:'Chūmén de shíhou qǐng suíshǒu guān dēng.', ex_vn:'Khi ra ngoài xin tiện tay tắt đèn.',
    exList:[
      {zh:'出门的时候请随手关灯。', py:'Chūmén de shíhou qǐng suíshǒu guān dēng.', vn:'Khi ra ngoài xin tiện tay tắt đèn.'},
      {zh:'可能出门时我随手把钥匙放在门口的桌子上了。', py:'Kěnéng chūmén shí wǒ suíshǒu bǎ yàoshi fàng zài ménkǒu de zhuōzi shang le.', vn:'Có lẽ lúc ra khỏi nhà tôi tiện tay để chìa khoá trên cái bàn cạnh cửa rồi.'},
      {zh:'他随手在纸上画了几笔，没想到画得这么好。', py:'Tā suíshǒu zài zhǐ shang huàle jǐ bǐ, méi xiǎngdào huà de zhème hǎo.', vn:'Anh ấy tiện tay vẽ vài nét trên giấy, không ngờ lại đẹp đến thế.'}
    ],
    colloFull:[
      {zh:'随手关门', py:'suíshǒu guān mén', vn:'tiện tay đóng cửa'},
      {zh:'随手关灯', py:'suíshǒu guān dēng', vn:'tiện tay tắt đèn'},
      {zh:'随手一放', py:'suíshǒu yí fàng', vn:'tiện tay đặt đại xuống'},
      {zh:'随手涂鸦', py:'suíshǒu túyā', vn:'tiện tay vẽ nguệch ngoạc'},
      {zh:'随手扔垃圾', py:'suíshǒu rēng lājī', vn:'tiện tay vứt rác'}
    ],
    patterns:[{s:'随手 + V (关门 / 关灯 / 放)', m:'Tiện tay làm gì'}, {s:'随手 + 把 + N + V', m:'Tiện tay đem … (làm gì)'}],
    checkList:[
      {promptLang:'vi', prompt:'Tôi tiện tay để điện thoại lên bàn.', answer:'我随手把手机放在了桌子上。', answerPy:'Wǒ suíshǒu bǎ shǒujī fàng zàile zhuōzi shang.', note:'随手 đứng trước 把.', pair:'把'},
      {promptLang:'vi', prompt:'Chỉ cần mọi người đều tiện tay tắt đèn là tiết kiệm được rất nhiều điện.', answer:'只要大家都随手关灯，就能节约很多电。', answerPy:'Zhǐyào dàjiā dōu suíshǒu guān dēng, jiù néng jiéyuē hěn duō diàn.', note:'随手关灯: khẩu hiệu tiết kiệm điện rất quen thuộc.', pair:'只要……就……'}
    ]
  },
  {n:26, zh:'分辨', py:'fēnbiàn', pos:'Động từ', vn:'phân biệt', hv:'phân biện', em:'🔍', lesson:1,
    explain:['Phân biệt, nhận ra sự khác nhau giữa các sự vật (thật / giả, đúng / sai, màu sắc…).'],
    usage:'分辨 + 真假 / 是非 / 颜色 / 方向; 分辨出来 / 分辨不出来 — hay đi với bổ ngữ khả năng.',
    collo:['分辨真假', '分辨是非', '分辨不出来', '分辨颜色'],
    ex_zh:'也许有人认为，在这种情况下根本不可能分辨出来。', ex_py:'Yěxǔ yǒu rén rènwéi, zài zhè zhǒng qíngkuàng xià gēnběn bù kěnéng fēnbiàn chūlai.', ex_vn:'Có lẽ có người cho rằng trong tình huống này căn bản không thể phân biệt được.',
    exList:[
      {zh:'也许有人认为，在这种情况下根本不可能分辨出来。', py:'Yěxǔ yǒu rén rènwéi, zài zhè zhǒng qíngkuàng xià gēnběn bù kěnéng fēnbiàn chūlai.', vn:'Có lẽ có người cho rằng trong tình huống này căn bản không thể phân biệt được.'},
      {zh:'这对双胞胎长得太像了，我根本分辨不出来谁是哥哥。', py:'Zhè duì shuāngbāotāi zhǎng de tài xiàng le, wǒ gēnběn fēnbiàn bu chūlai shéi shì gēge.', vn:'Cặp song sinh này giống nhau quá, tôi hoàn toàn không phân biệt nổi ai là anh.'},
      {zh:'网上的消息很多，我们要学会分辨真假。', py:'Wǎngshang de xiāoxi hěn duō, wǒmen yào xuéhuì fēnbiàn zhēnjiǎ.', vn:'Tin tức trên mạng rất nhiều, chúng ta phải học cách phân biệt thật giả.'}
    ],
    colloFull:[
      {zh:'分辨真假', py:'fēnbiàn zhēnjiǎ', vn:'phân biệt thật giả'},
      {zh:'分辨是非', py:'fēnbiàn shìfēi', vn:'phân biệt đúng sai'},
      {zh:'分辨不出来', py:'fēnbiàn bu chūlai', vn:'không phân biệt nổi'},
      {zh:'分辨颜色', py:'fēnbiàn yánsè', vn:'phân biệt màu sắc'},
      {zh:'分辨方向', py:'fēnbiàn fāngxiàng', vn:'phân biệt phương hướng'}
    ],
    patterns:[{s:'分辨 + 真假 / 是非 / 颜色', m:'Phân biệt …'}, {s:'分辨得出来 / 分辨不出来', m:'Phân biệt được / không phân biệt được'}],
    checkList:[
      {promptLang:'vi', prompt:'Ngay cả mẹ cũng không phân biệt nổi hai chị em họ.', answer:'连妈妈都分辨不出来她们姐妹俩。', answerPy:'Lián māma dōu fēnbiàn bu chūlai tāmen jiěmèi liǎ.', note:'分辨不出来: bổ ngữ khả năng dạng phủ định.', pair:'连……都……'},
      {promptLang:'vi', prompt:'Tuy hai bức tranh rất giống nhau, nhưng chuyên gia vẫn phân biệt ra được.', answer:'虽然这两幅画很像，但是专家还是分辨出来了。', answerPy:'Suīrán zhè liǎng fú huà hěn xiàng, dànshì zhuānjiā háishi fēnbiàn chūlai le.', note:'分辨 + 出来: phân biệt ra được.', pair:'虽然……但是……'}
    ]
  },
  {n:27, zh:'挥', py:'huī', pos:'Động từ', vn:'vẫy, múa, vung', hv:'huy', em:'🙋', lesson:1,
    explain:['Vẫy, vung, múa (tay, cờ, bút…). 挥笔 = vung bút viết / vẽ một cách phóng khoáng.'],
    usage:'挥手 (vẫy tay), 挥笔 (vung bút), 挥手告别 (vẫy tay tạm biệt), 向 + người + 挥手.',
    collo:['挥手', '挥笔', '挥手告别', '挥动'],
    ex_zh:'火车开动了，他一直向我们挥手告别。', ex_py:'Huǒchē kāidòng le, tā yìzhí xiàng wǒmen huīshǒu gàobié.', ex_vn:'Tàu chuyển bánh, anh ấy cứ vẫy tay chào tạm biệt chúng tôi.',
    exList:[
      {zh:'火车开动了，他一直向我们挥手告别。', py:'Huǒchē kāidòng le, tā yìzhí xiàng wǒmen huīshǒu gàobié.', vn:'Tàu chuyển bánh, anh ấy cứ vẫy tay chào tạm biệt chúng tôi.'},
      {zh:'志愿者更喜欢的作品都是由人类艺术家挥笔完成的。', py:'Zhìyuànzhě gèng xǐhuan de zuòpǐn dōu shì yóu rénlèi yìshùjiā huībǐ wánchéng de.', vn:'Tác phẩm tình nguyện viên thích hơn đều do nghệ sĩ con người vung bút hoàn thành.'},
      {zh:'大师挥笔写下了四个大字。', py:'Dàshī huībǐ xiěxiàle sì ge dà zì.', vn:'Bậc thầy vung bút viết xuống bốn chữ lớn.'}
    ],
    colloFull:[
      {zh:'挥手', py:'huīshǒu', vn:'vẫy tay'},
      {zh:'挥笔', py:'huībǐ', vn:'vung bút'},
      {zh:'挥手告别', py:'huīshǒu gàobié', vn:'vẫy tay tạm biệt'},
      {zh:'挥动', py:'huīdòng', vn:'vung vẩy'},
      {zh:'挥旗子', py:'huī qízi', vn:'vẫy cờ'}
    ],
    patterns:[{s:'向 + người + 挥手', m:'Vẫy tay với ai'}, {s:'挥笔 + V (写 / 画 / 完成)', m:'Vung bút viết / vẽ'}],
    checkList:[
      {promptLang:'vi', prompt:'Vừa nhìn thấy tôi, cô ấy liền vẫy tay với tôi.', answer:'她一看见我，就向我挥手。', answerPy:'Tā yí kànjiàn wǒ, jiù xiàng wǒ huīshǒu.', note:'向 + người + 挥手.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Bốn chữ lớn này là do một bậc thầy thư pháp vung bút viết.', answer:'这四个大字是一位书法大师挥笔写的。', answerPy:'Zhè sì ge dà zì shì yí wèi shūfǎ dàshī huībǐ xiě de.', note:'挥笔 + 写: vung bút viết.', pair:'是……的'}
    ]
  },
  {n:28, zh:'可见', py:'kějiàn', pos:'Liên từ', vn:'có thể thấy rõ', hv:'khả kiến', em:'💡', lesson:1,
    explain:['Liên từ: (từ đó) có thể thấy — rút ra kết luận, phán đoán dựa vào tình hình đã nói ở vế trước.'],
    usage:'Mẫu: ……，(由此)可见…… . 可见 đứng đầu vế sau, tiếp theo là kết luận. Căn cứ phải nêu TRƯỚC.',
    collo:['由此可见', '可见情况不好', '可见他很用心', '可见……很重要'],
    ex_zh:'他已经住院好几天了，一直诊断不出是什么问题，可见情况不太好。', ex_py:'Tā yǐjīng zhùyuàn hǎo jǐ tiān le, yìzhí zhěnduàn bu chū shì shénme wèntí, kějiàn qíngkuàng bú tài hǎo.', ex_vn:'Anh ấy nằm viện mấy ngày rồi mà vẫn chưa chẩn đoán ra bệnh gì, có thể thấy tình hình không tốt lắm.',
    exList:[
      {zh:'他已经住院好几天了，一直诊断不出是什么问题，可见情况不太好。', py:'Tā yǐjīng zhùyuàn hǎo jǐ tiān le, yìzhí zhěnduàn bu chū shì shénme wèntí, kějiàn qíngkuàng bú tài hǎo.', vn:'Anh ấy nằm viện mấy ngày rồi mà vẫn chưa chẩn đoán ra bệnh gì, có thể thấy tình hình không tốt lắm.'},
      {zh:'由此可见，志愿者能够从画作中感知艺术家的用心。', py:'Yóucǐ kějiàn, zhìyuànzhě nénggòu cóng huàzuò zhōng gǎnzhī yìshùjiā de yòngxīn.', vn:'Từ đó có thể thấy, tình nguyện viên có thể cảm nhận được tâm huyết của nghệ sĩ qua bức tranh.'},
      {zh:'连这么简单的题你都不会，可见你上课没有认真听。', py:'Lián zhème jiǎndān de tí nǐ dōu bú huì, kějiàn nǐ shàngkè méiyǒu rènzhēn tīng.', vn:'Bài đơn giản thế này mà em cũng không làm được, rõ là em không chăm chú nghe giảng.'}
    ],
    colloFull:[
      {zh:'由此可见', py:'yóucǐ kějiàn', vn:'từ đó có thể thấy'},
      {zh:'可见情况不好', py:'kějiàn qíngkuàng bù hǎo', vn:'có thể thấy tình hình không tốt'},
      {zh:'可见他很用心', py:'kějiàn tā hěn yòngxīn', vn:'có thể thấy anh ấy rất tâm huyết'},
      {zh:'可见……很重要', py:'kějiàn……hěn zhòngyào', vn:'có thể thấy … rất quan trọng'},
      {zh:'可见他没准备', py:'kějiàn tā méi zhǔnbèi', vn:'rõ là anh ta không chuẩn bị'}
    ],
    patterns:[{s:'Sự việc，(由此)可见 + kết luận', m:'…, từ đó có thể thấy …'}, {s:'连……都……，可见……', m:'Ngay cả … cũng …, đủ thấy …'}],
    checkList:[
      {promptLang:'vi', prompt:'Bài dễ như vậy mà cậu ấy cũng làm sai, đủ thấy cậu ấy quá bất cẩn.', answer:'连这么容易的题他都做错了，可见他太粗心了。', answerPy:'Lián zhème róngyì de tí tā dōu zuòcuò le, kějiàn tā tài cūxīn le.', note:'Căn cứ (连……都……) nêu trước, kết luận sau 可见.', pair:'连……都……'},
      {promptLang:'vi', prompt:'Anh ấy hễ có thời gian là về thăm bố mẹ, có thể thấy anh ấy rất hiếu thảo.', answer:'他一有时间就去看父母，可见他很孝敬父母。', answerPy:'Tā yì yǒu shíjiān jiù qù kàn fùmǔ, kějiàn tā hěn xiàojìng fùmǔ.', note:'可见 + kết luận rút ra từ thói quen ở vế trước.', pair:'一……就……'}
    ]
  },
  {n:29, zh:'哪怕', py:'nǎpà', pos:'Liên từ', vn:'dù cho, cho dù', hv:'na phạ', em:'💪', lesson:1,
    explain:['Liên từ: dù cho, cho dù — nêu một giả thiết (thường là trường hợp cực đoan), vế kết quả vẫn không đổi. Nghĩa như 即使, khẩu ngữ hơn.'],
    usage:'哪怕……，也 / 都 / 还…… (vế sau thường có 也 / 都). Có thể đặt vế 哪怕 ở sau để bổ sung: ……，哪怕……',
    collo:['哪怕……也……', '哪怕一分钟', '哪怕再累', '哪怕熬夜'],
    ex_zh:'哪怕熬夜，我今天也得把这个计划做完。', ex_py:'Nǎpà áoyè, wǒ jīntiān yě děi bǎ zhège jìhuà zuòwán.', ex_vn:'Dù có phải thức khuya, hôm nay tôi cũng phải làm xong kế hoạch này.',
    exList:[
      {zh:'哪怕熬夜，我今天也得把这个计划做完。', py:'Nǎpà áoyè, wǒ jīntiān yě děi bǎ zhège jìhuà zuòwán.', vn:'Dù có phải thức khuya, hôm nay tôi cũng phải làm xong kế hoạch này.'},
      {zh:'哪怕是一分钟他也不愿意再等了。', py:'Nǎpà shì yì fēnzhōng tā yě bú yuànyì zài děng le.', vn:'Dù chỉ một phút anh ấy cũng không muốn chờ nữa.'},
      {zh:'志愿者能够感知艺术家的用心，哪怕他们不能够解释原因。', py:'Zhìyuànzhě nénggòu gǎnzhī yìshùjiā de yòngxīn, nǎpà tāmen bù nénggòu jiěshì yuányīn.', vn:'Tình nguyện viên có thể cảm nhận tâm huyết của nghệ sĩ, dù họ không giải thích được lý do.'}
    ],
    colloFull:[
      {zh:'哪怕……也……', py:'nǎpà……yě……', vn:'dù … cũng …'},
      {zh:'哪怕一分钟', py:'nǎpà yì fēnzhōng', vn:'dù chỉ một phút'},
      {zh:'哪怕再累', py:'nǎpà zài lèi', vn:'dù mệt đến đâu'},
      {zh:'哪怕熬夜', py:'nǎpà áoyè', vn:'dù phải thức khuya'},
      {zh:'哪怕下雨', py:'nǎpà xià yǔ', vn:'dù trời mưa'}
    ],
    patterns:[{s:'哪怕 + giả thiết，Chủ ngữ + 也 / 都 + V', m:'Dù … thì cũng …'}, {s:'Kết quả，哪怕 + giả thiết', m:'…, dù cho … (vế 哪怕 đặt sau để bổ sung)'}],
    checkList:[
      {promptLang:'vi', prompt:'Dù phải thức khuya, tôi cũng phải làm xong bài tập hôm nay.', answer:'哪怕熬夜，我也要把今天的作业做完。', answerPy:'Nǎpà áoyè, wǒ yě yào bǎ jīntiān de zuòyè zuòwán.', note:'哪怕 ở vế trước, 也 ở vế sau.', pair:'把'},
      {promptLang:'vi', prompt:'Dù mệt đến đâu, cô ấy cũng chưa bao giờ đi học muộn.', answer:'哪怕再累，她也从来没迟到过。', answerPy:'Nǎpà zài lèi, tā yě cónglái méi chídàoguo.', note:'哪怕再 + Adj = dù … đến đâu.', pair:'从来没……过'}
    ]
  },
  {n:30, zh:'元素', py:'yuánsù', pos:'Danh từ', vn:'yếu tố, nguyên tố', hv:'nguyên tố', em:'🧪', lesson:1,
    explain:['Yếu tố, thành phần cấu tạo nên một chỉnh thể (trong nghệ thuật, thiết kế…); trong hoá học là nguyên tố.'],
    usage:'画面元素, 设计元素, 中国元素, 化学元素. Hay đi với 加入 / 包含 / 调整.',
    collo:['画面元素', '中国元素', '设计元素', '化学元素'],
    ex_zh:'这件衣服的设计加入了很多中国元素。', ex_py:'Zhè jiàn yīfu de shèjì jiārùle hěn duō Zhōngguó yuánsù.', ex_vn:'Thiết kế của chiếc áo này đưa vào rất nhiều yếu tố Trung Hoa.',
    exList:[
      {zh:'这件衣服的设计加入了很多中国元素。', py:'Zhè jiàn yīfu de shèjì jiārùle hěn duō Zhōngguó yuánsù.', vn:'Thiết kế của chiếc áo này đưa vào rất nhiều yếu tố Trung Hoa.'},
      {zh:'志愿者同时欣赏原作和画面元素被调整后的画作。', py:'Zhìyuànzhě tóngshí xīnshǎng yuánzuò hé huàmiàn yuánsù bèi tiáozhěng hòu de huàzuò.', vn:'Tình nguyện viên cùng lúc xem bản gốc và bức tranh đã bị điều chỉnh các yếu tố trong khung hình.'},
      {zh:'水是由氢和氧两种元素组成的。', py:'Shuǐ shì yóu qīng hé yǎng liǎng zhǒng yuánsù zǔchéng de.', vn:'Nước được tạo thành từ hai nguyên tố hiđrô và ôxy.'}
    ],
    colloFull:[
      {zh:'画面元素', py:'huàmiàn yuánsù', vn:'yếu tố trong khung hình'},
      {zh:'中国元素', py:'Zhōngguó yuánsù', vn:'yếu tố Trung Hoa'},
      {zh:'设计元素', py:'shèjì yuánsù', vn:'yếu tố thiết kế'},
      {zh:'化学元素', py:'huàxué yuánsù', vn:'nguyên tố hoá học'},
      {zh:'加入元素', py:'jiārù yuánsù', vn:'đưa yếu tố vào'}
    ],
    patterns:[{s:'画面 / 设计 / 中国 + 元素', m:'Yếu tố …'}, {s:'加入 / 包含 + ……元素', m:'Đưa vào / bao gồm yếu tố …'}],
    checkList:[
      {promptLang:'vi', prompt:'Các yếu tố trong bức tranh đã bị nhà nghiên cứu điều chỉnh.', answer:'画面的元素被研究者调整了。', answerPy:'Huàmiàn de yuánsù bèi yánjiūzhě tiáozhěng le.', note:'元素 + 调整: kết hợp trong bài.', pair:'被'},
      {promptLang:'vi', prompt:'Thiết kế này không chỉ có yếu tố truyền thống, mà cũng có yếu tố hiện đại.', answer:'这个设计不仅有传统元素，也有现代元素。', answerPy:'Zhège shèjì bùjǐn yǒu chuántǒng yuánsù, yě yǒu xiàndài yuánsù.', note:'传统元素 ↔ 现代元素.', pair:'不仅……也……'}
    ]
  },
  {n:31, zh:'调整', py:'tiáozhěng', pos:'Động từ / Danh từ', vn:'điều chỉnh; sự điều chỉnh', hv:'điều chỉnh', em:'🔧', lesson:1,
    explain:['Động từ: điều chỉnh, sắp xếp lại cho hợp lý hơn (thời gian, giá cả, kế hoạch, tâm trạng…).', 'Danh từ: sự điều chỉnh (做一些调整).'],
    usage:'调整 + 时间 / 价格 / 计划 / 结构 / 市场 / 心态; 调整一下; 做(一些)调整. Chú ý: 调 ở đây đọc tiáo, không đọc diào.',
    collo:['调整时间', '调整价格', '调整计划', '调整心态'],
    ex_zh:'因为销售情况不太好，我们正准备调整产品价格。', ex_py:'Yīnwèi xiāoshòu qíngkuàng bú tài hǎo, wǒmen zhèng zhǔnbèi tiáozhěng chǎnpǐn jiàgé.', ex_vn:'Vì tình hình tiêu thụ không tốt lắm, chúng tôi đang chuẩn bị điều chỉnh giá sản phẩm.',
    exList:[
      {zh:'因为销售情况不太好，我们正准备调整产品价格。', py:'Yīnwèi xiāoshòu qíngkuàng bú tài hǎo, wǒmen zhèng zhǔnbèi tiáozhěng chǎnpǐn jiàgé.', vn:'Vì tình hình tiêu thụ không tốt lắm, chúng tôi đang chuẩn bị điều chỉnh giá sản phẩm.'},
      {zh:'主持人，你胸前的麦克风歪了，请调整一下。', py:'Zhǔchírén, nǐ xiōng qián de màikèfēng wāi le, qǐng tiáozhěng yíxià.', vn:'Anh dẫn chương trình ơi, micro trước ngực anh bị lệch rồi, chỉnh lại chút nhé.'},
      {zh:'考试前要调整好心态，别太紧张。', py:'Kǎoshì qián yào tiáozhěng hǎo xīntài, bié tài jǐnzhāng.', vn:'Trước khi thi phải điều chỉnh tâm lý cho tốt, đừng căng thẳng quá.'}
    ],
    colloFull:[
      {zh:'调整时间', py:'tiáozhěng shíjiān', vn:'điều chỉnh thời gian'},
      {zh:'调整价格', py:'tiáozhěng jiàgé', vn:'điều chỉnh giá'},
      {zh:'调整计划', py:'tiáozhěng jìhuà', vn:'điều chỉnh kế hoạch'},
      {zh:'调整心态', py:'tiáozhěng xīntài', vn:'điều chỉnh tâm lý'},
      {zh:'调整结构', py:'tiáozhěng jiégòu', vn:'điều chỉnh cơ cấu'}
    ],
    patterns:[{s:'调整 + 时间 / 价格 / 计划 / 结构', m:'Điều chỉnh …'}, {s:'调整一下 / 做一些调整', m:'Chỉnh lại một chút / có một vài điều chỉnh'}],
    checkList:[
      {promptLang:'vi', prompt:'Giờ học đã bị nhà trường điều chỉnh rồi.', answer:'上课时间被学校调整了。', answerPy:'Shàngkè shíjiān bèi xuéxiào tiáozhěng le.', note:'调整 + 时间.', pair:'被'},
      {promptLang:'vi', prompt:'Chúng ta nên điều chỉnh kế hoạch một chút.', answer:'我们应该把计划调整一下。', answerPy:'Wǒmen yīnggāi bǎ jìhuà tiáozhěng yíxià.', note:'把 + 计划 + 调整一下.', pair:'把'}
    ]
  },
  {n:32, zh:'位置', py:'wèizhì', pos:'Danh từ', vn:'vị trí', hv:'vị trí', em:'📍', lesson:1,
    explain:['Vị trí, chỗ mà người / vật chiếm; cũng chỉ địa vị, chức vị.'],
    usage:'……的位置; 位置变化; 换(个)位置; 地理位置; 找到自己的位置.',
    collo:['位置变化', '换个位置', '地理位置', '找到位置'],
    ex_zh:'我们换个位置坐吧，这儿看不清黑板。', ex_py:'Wǒmen huàn ge wèizhì zuò ba, zhèr kàn bu qīng hēibǎn.', ex_vn:'Chúng ta đổi chỗ ngồi đi, ở đây nhìn không rõ bảng.',
    exList:[
      {zh:'我们换个位置坐吧，这儿看不清黑板。', py:'Wǒmen huàn ge wèizhì zuò ba, zhèr kàn bu qīng hēibǎn.', vn:'Chúng ta đổi chỗ ngồi đi, ở đây nhìn không rõ bảng.'},
      {zh:'当看到画上物体位置变化后，大脑中有关含意和解释的区域活跃性下降了。', py:'Dāng kàndào huà shang wùtǐ wèizhì biànhuà hòu, dànǎo zhōng yǒuguān hányì hé jiěshì de qūyù huóyuèxìng xiàjiàng le.', vn:'Khi thấy vị trí các vật trong tranh thay đổi, mức độ hoạt động của vùng não liên quan đến ý nghĩa và sự lý giải giảm xuống.'},
      {zh:'这家酒店的地理位置很好，离海边只有五分钟。', py:'Zhè jiā jiǔdiàn de dìlǐ wèizhì hěn hǎo, lí hǎibiān zhǐ yǒu wǔ fēnzhōng.', vn:'Vị trí địa lý của khách sạn này rất tốt, cách bờ biển chỉ năm phút.'}
    ],
    colloFull:[
      {zh:'位置变化', py:'wèizhì biànhuà', vn:'vị trí thay đổi'},
      {zh:'换个位置', py:'huàn ge wèizhì', vn:'đổi chỗ'},
      {zh:'地理位置', py:'dìlǐ wèizhì', vn:'vị trí địa lý'},
      {zh:'找到位置', py:'zhǎodào wèizhì', vn:'tìm được chỗ'},
      {zh:'座位的位置', py:'zuòwèi de wèizhì', vn:'vị trí chỗ ngồi'}
    ],
    patterns:[{s:'……的位置 + 变化 / 很好', m:'Vị trí của …'}, {s:'换(个)位置', m:'Đổi chỗ'}],
    checkList:[
      {promptLang:'vi', prompt:'Em trai đã đổi vị trí của cái bàn.', answer:'弟弟把桌子的位置换了。', answerPy:'Dìdi bǎ zhuōzi de wèizhì huàn le.', note:'桌子的位置: vị trí của cái bàn.', pair:'把'},
      {promptLang:'vi', prompt:'Khách sạn này tuy vị trí không ở trung tâm, nhưng rất yên tĩnh.', answer:'这家酒店的位置虽然不在市中心，但是很安静。', answerPy:'Zhè jiā jiǔdiàn de wèizhì suīrán bú zài shì zhōngxīn, dànshì hěn ānjìng.', note:'虽然 có thể đứng sau chủ ngữ.', pair:'虽然……但是……'}
    ]
  },
  {n:33, zh:'含意', py:'hányì', pos:'Danh từ', vn:'hàm ý, ẩn ý', hv:'hàm ý', em:'💭', lesson:1,
    explain:['Hàm ý, ý nghĩa ẩn chứa bên trong (câu nói, tác phẩm, hành động).'],
    usage:'……的含意; 有……含意; 含意很深. Gần nghĩa: 含义 (cùng âm, dùng thay được), 意思 (khẩu ngữ).',
    collo:['深刻的含意', '这句话的含意', '有什么含意', '理解含意'],
    ex_zh:'这句话的含意很深，我想了很久才明白。', ex_py:'Zhè jù huà de hányì hěn shēn, wǒ xiǎngle hěn jiǔ cái míngbai.', ex_vn:'Hàm ý của câu này rất sâu, tôi nghĩ rất lâu mới hiểu.',
    exList:[
      {zh:'这句话的含意很深，我想了很久才明白。', py:'Zhè jù huà de hányì hěn shēn, wǒ xiǎngle hěn jiǔ cái míngbai.', vn:'Hàm ý của câu này rất sâu, tôi nghĩ rất lâu mới hiểu.'},
      {zh:'大脑中有关含意和解释的区域活跃性下降了。', py:'Dànǎo zhōng yǒuguān hányì hé jiěshì de qūyù huóyuèxìng xiàjiàng le.', vn:'Mức hoạt động của vùng não liên quan đến hàm ý và sự giải thích giảm xuống.'},
      {zh:'你知道这幅画里的那只鸟有什么含意吗？', py:'Nǐ zhīdào zhè fú huà li de nà zhī niǎo yǒu shénme hányì ma?', vn:'Bạn có biết con chim trong bức tranh này có hàm ý gì không?'}
    ],
    colloFull:[
      {zh:'深刻的含意', py:'shēnkè de hányì', vn:'hàm ý sâu sắc'},
      {zh:'这句话的含意', py:'zhè jù huà de hányì', vn:'hàm ý của câu này'},
      {zh:'有什么含意', py:'yǒu shénme hányì', vn:'có hàm ý gì'},
      {zh:'理解含意', py:'lǐjiě hányì', vn:'hiểu được hàm ý'},
      {zh:'含意很深', py:'hányì hěn shēn', vn:'hàm ý rất sâu'}
    ],
    patterns:[{s:'……的含意', m:'Hàm ý của …'}, {s:'有 + (什么 / 深刻的) + 含意', m:'Có hàm ý …'}],
    checkList:[
      {promptLang:'vi', prompt:'Ngay cả thầy giáo cũng không nói rõ được hàm ý của câu này.', answer:'连老师都说不清楚这句话的含意。', answerPy:'Lián lǎoshī dōu shuō bu qīngchu zhè jù huà de hányì.', note:'这句话的含意: hàm ý của câu.', pair:'连……都……'},
      {promptLang:'vi', prompt:'Tuy câu này rất ngắn, nhưng hàm ý rất sâu.', answer:'虽然这句话很短，但是含意很深。', answerPy:'Suīrán zhè jù huà hěn duǎn, dànshì hányì hěn shēn.', note:'含意 + 很深.', pair:'虽然……但是……'}
    ]
  },
  {n:34, zh:'区域', py:'qūyù', pos:'Danh từ', vn:'khu vực, vùng', hv:'khu vực', em:'🗺️', lesson:1,
    explain:['Khu vực, vùng — một phạm vi không gian nhất định (trên bản đồ, trong thành phố, trong não…).'],
    usage:'Văn viết, trang trọng; khẩu ngữ hay dùng 地区, 地方. Ghép: 吸烟区域, 安全区域, 区域经济, 大脑的某个区域.',
    collo:['这个区域', '吸烟区域', '区域经济', '大脑区域'],
    ex_zh:'这个区域禁止吸烟。', ex_py:'Zhège qūyù jìnzhǐ xīyān.', ex_vn:'Khu vực này cấm hút thuốc.',
    exList:[
      {zh:'这个区域禁止吸烟。', py:'Zhège qūyù jìnzhǐ xīyān.', vn:'Khu vực này cấm hút thuốc.'},
      {zh:'当看到画上物体位置变化后，大脑中有关含意和解释的区域活跃性下降了。', py:'Dāng kàndào huà shang wùtǐ wèizhì biànhuà hòu, dànǎo zhōng yǒuguān hányì hé jiěshì de qūyù huóyuèxìng xiàjiàng le.', vn:'Khi thấy vị trí các vật trong tranh thay đổi, mức độ hoạt động của vùng não liên quan đến ý nghĩa và sự lý giải giảm xuống.'},
      {zh:'这几年，这个区域的经济发展得很快。', py:'Zhè jǐ nián, zhège qūyù de jīngjì fāzhǎn de hěn kuài.', vn:'Mấy năm nay kinh tế khu vực này phát triển rất nhanh.'}
    ],
    colloFull:[
      {zh:'这个区域', py:'zhège qūyù', vn:'khu vực này'},
      {zh:'吸烟区域', py:'xīyān qūyù', vn:'khu vực hút thuốc'},
      {zh:'区域经济', py:'qūyù jīngjì', vn:'kinh tế vùng'},
      {zh:'大脑区域', py:'dànǎo qūyù', vn:'vùng não'},
      {zh:'安全区域', py:'ānquán qūyù', vn:'khu vực an toàn'}
    ],
    patterns:[{s:'吸烟 / 安全 / 大脑 + 区域', m:'Khu vực …'}, {s:'在 + 这个区域 + (里 / 内)', m:'Trong khu vực này'}],
    checkList:[
      {promptLang:'vi', prompt:'Người sống ở khu vực này ngày càng đông.', answer:'住在这个区域的人越来越多了。', answerPy:'Zhù zài zhège qūyù de rén yuè lái yuè duō le.', note:'这个区域 = khu vực này (trang trọng hơn 这个地方).', pair:'越来越'},
      {promptLang:'vi', prompt:'Chỉ cần ở trong khu vực an toàn thì sẽ không có nguy hiểm.', answer:'只要待在安全区域里，就不会有危险。', answerPy:'Zhǐyào dāi zài ānquán qūyù li, jiù bú huì yǒu wēixiǎn.', note:'安全区域: khu vực an toàn.', pair:'只要……就……'}
    ]
  },
  {n:35, zh:'活跃', py:'huóyuè', pos:'Tính từ / Động từ', vn:'sinh động, sôi nổi; làm sôi nổi', hv:'hoạt dược', em:'🎉', lesson:1,
    explain:['Tính từ: sôi nổi, sinh động, năng nổ (không khí, thị trường, con người, tư duy…).', 'Động từ: làm cho sôi nổi, đẩy mạnh: 活跃气氛, 活跃市场.'],
    usage:'Tính từ: 气氛很活跃, 他在班里很活跃. Động từ: 活跃 + 气氛 / 市场 / 经济. 活跃性 = mức độ hoạt động.',
    collo:['活跃气氛', '活跃市场', '活跃经济', '思想活跃'],
    ex_zh:'每次晚会他都是主持人，要靠他来活跃气氛。', ex_py:'Měi cì wǎnhuì tā dōu shì zhǔchírén, yào kào tā lái huóyuè qìfēn.', ex_vn:'Buổi dạ hội nào anh ấy cũng là người dẫn chương trình, phải nhờ anh ấy khuấy động bầu không khí.',
    exList:[
      {zh:'每次晚会他都是主持人，要靠他来活跃气氛。', py:'Měi cì wǎnhuì tā dōu shì zhǔchírén, yào kào tā lái huóyuè qìfēn.', vn:'Buổi dạ hội nào anh ấy cũng là người dẫn chương trình, phải nhờ anh ấy khuấy động bầu không khí.'},
      {zh:'她性格开朗，在班里很活跃。', py:'Tā xìnggé kāilǎng, zài bān li hěn huóyuè.', vn:'Cô ấy tính tình cởi mở, rất năng nổ trong lớp.'},
      {zh:'年轻人的思想比较活跃，敢于尝试新东西。', py:'Niánqīngrén de sīxiǎng bǐjiào huóyuè, gǎnyú chángshì xīn dōngxi.', vn:'Tư duy của người trẻ khá linh hoạt, dám thử những điều mới.'}
    ],
    colloFull:[
      {zh:'活跃气氛', py:'huóyuè qìfēn', vn:'khuấy động không khí'},
      {zh:'活跃市场', py:'huóyuè shìchǎng', vn:'làm sôi động thị trường'},
      {zh:'活跃经济', py:'huóyuè jīngjì', vn:'thúc đẩy kinh tế'},
      {zh:'思想活跃', py:'sīxiǎng huóyuè', vn:'tư duy linh hoạt'},
      {zh:'气氛活跃', py:'qìfēn huóyuè', vn:'không khí sôi nổi'}
    ],
    patterns:[{s:'活跃 + 气氛 / 市场 / 经济', m:'Làm sôi nổi … (động từ)'}, {s:'N + 很活跃', m:'… rất sôi nổi / năng nổ (tính từ)'}],
    checkList:[
      {promptLang:'vi', prompt:'Anh ấy vừa lên sân khấu là không khí sôi nổi hẳn lên.', answer:'他一上台，气氛就活跃起来了。', answerPy:'Tā yí shàngtái, qìfēn jiù huóyuè qǐlai le.', note:'活跃 + 起来: trở nên sôi nổi.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Cô ấy không chỉ học giỏi, mà cũng rất năng nổ trong lớp.', answer:'她不仅学习好，在班里也很活跃。', answerPy:'Tā bùjǐn xuéxí hǎo, zài bān li yě hěn huóyuè.', note:'活跃 làm vị ngữ tả người.', pair:'不仅……也……'}
    ]
  },
  {n:36, zh:'布局', py:'bùjú', pos:'Danh từ', vn:'bố cục', hv:'bố cục', em:'🧭', lesson:1,
    explain:['Bố cục, cách sắp xếp, phân bố các phần (của bức tranh, bài văn, căn nhà, thành phố…).'],
    usage:'……的布局; 布局合理 / 布局很好; 调整布局. Chú ý: 布 ở đây là “bố trí”, khác 布 (vải).',
    collo:['房间的布局', '布局合理', '文章的布局', '调整布局'],
    ex_zh:'这套房子的布局很合理，每个房间都很亮。', ex_py:'Zhè tào fángzi de bùjú hěn hélǐ, měi ge fángjiān dōu hěn liàng.', ex_vn:'Bố cục căn nhà này rất hợp lý, phòng nào cũng sáng.',
    exList:[
      {zh:'这套房子的布局很合理，每个房间都很亮。', py:'Zhè tào fángzi de bùjú hěn hélǐ, měi ge fángjiān dōu hěn liàng.', vn:'Bố cục căn nhà này rất hợp lý, phòng nào cũng sáng.'},
      {zh:'我们的大脑注意到了原作的布局。', py:'Wǒmen de dànǎo zhùyì dàole yuánzuò de bùjú.', vn:'Não chúng ta đã chú ý đến bố cục của bản gốc.'},
      {zh:'写作文以前，先想好文章的布局。', py:'Xiě zuòwén yǐqián, xiān xiǎnghǎo wénzhāng de bùjú.', vn:'Trước khi viết văn, hãy nghĩ kỹ bố cục bài văn trước.'}
    ],
    colloFull:[
      {zh:'房间的布局', py:'fángjiān de bùjú', vn:'bố cục căn phòng'},
      {zh:'布局合理', py:'bùjú hélǐ', vn:'bố cục hợp lý'},
      {zh:'文章的布局', py:'wénzhāng de bùjú', vn:'bố cục bài văn'},
      {zh:'调整布局', py:'tiáozhěng bùjú', vn:'điều chỉnh bố cục'},
      {zh:'城市布局', py:'chéngshì bùjú', vn:'bố cục thành phố'}
    ],
    patterns:[{s:'……的布局 + 合理 / 很好', m:'Bố cục của … hợp lý / tốt'}, {s:'调整 / 设计 + 布局', m:'Điều chỉnh / thiết kế bố cục'}],
    checkList:[
      {promptLang:'vi', prompt:'Bố cục phòng khách đã được mẹ điều chỉnh lại.', answer:'客厅的布局被妈妈重新调整了。', answerPy:'Kètīng de bùjú bèi māma chóngxīn tiáozhěng le.', note:'调整 + 布局: kết hợp tự nhiên.', pair:'被'},
      {promptLang:'vi', prompt:'Tuy căn phòng không lớn, nhưng bố cục rất hợp lý.', answer:'虽然房间不大，但是布局很合理。', answerPy:'Suīrán fángjiān bú dà, dànshì bùjú hěn hélǐ.', note:'布局 + 很合理.', pair:'虽然……但是……'}
    ]
  },
  {n:37, zh:'事实', py:'shìshí', pos:'Danh từ', vn:'sự thật', hv:'sự thực', em:'📰', lesson:1,
    explain:['Sự thật — điều đã thực sự xảy ra hoặc tồn tại.'],
    usage:'说出 / 接受 / 忽略 + 事实; 事实证明……; 事实上 (trên thực tế). Khác 实际: 实际 thường làm tính từ / trạng ngữ (实际情况, 实际上).',
    collo:['说出事实', '接受事实', '事实上', '事实证明'],
    ex_zh:'事实证明，他的办法是对的。', ex_py:'Shìshí zhèngmíng, tā de bànfǎ shì duì de.', ex_vn:'Sự thật chứng minh, cách của anh ấy là đúng.',
    exList:[
      {zh:'事实证明，他的办法是对的。', py:'Shìshí zhèngmíng, tā de bànfǎ shì duì de.', vn:'Sự thật chứng minh, cách của anh ấy là đúng.'},
      {zh:'我们的大脑可以感知其背后的用意，即使我们还没有清楚地感受到这个事实。', py:'Wǒmen de dànǎo kěyǐ gǎnzhī qí bèihòu de yòngyì, jíshǐ wǒmen hái méiyǒu qīngchu de gǎnshòu dào zhège shìshí.', vn:'Não chúng ta có thể cảm nhận dụng ý phía sau nó, dù chúng ta chưa cảm nhận rõ ràng sự thật này.'},
      {zh:'我认为你们其实忽略了一个十分重要的事实。', py:'Wǒ rènwéi nǐmen qíshí hūlüèle yí ge shífēn zhòngyào de shìshí.', vn:'Tôi cho rằng thực ra các anh đã bỏ qua một sự thật hết sức quan trọng.'}
    ],
    colloFull:[
      {zh:'说出事实', py:'shuōchū shìshí', vn:'nói ra sự thật'},
      {zh:'接受事实', py:'jiēshòu shìshí', vn:'chấp nhận sự thật'},
      {zh:'事实上', py:'shìshí shang', vn:'trên thực tế'},
      {zh:'事实证明', py:'shìshí zhèngmíng', vn:'sự thật chứng minh'},
      {zh:'忽略事实', py:'hūlüè shìshí', vn:'bỏ qua sự thật'}
    ],
    patterns:[{s:'事实证明，……', m:'Sự thật chứng minh …'}, {s:'接受 / 忽略 + (这个)事实', m:'Chấp nhận / bỏ qua sự thật'}],
    checkList:[
      {promptLang:'vi', prompt:'Tuy rất buồn, nhưng cô ấy vẫn chấp nhận sự thật này.', answer:'虽然很难过，但是她还是接受了这个事实。', answerPy:'Suīrán hěn nánguò, dànshì tā háishi jiēshòule zhège shìshí.', note:'接受 + 事实.', pair:'虽然……但是……'},
      {promptLang:'vi', prompt:'Sự thật cuối cùng cũng được mọi người biết đến.', answer:'事实终于被大家知道了。', answerPy:'Shìshí zhōngyú bèi dàjiā zhīdào le.', note:'事实 làm chủ ngữ câu bị động.', pair:'被'}
    ]
  },
  {n:38, zh:'目前', py:'mùqián', pos:'Danh từ', vn:'hiện nay, trước mắt', hv:'mục tiền', em:'⏱️', lesson:1,
    explain:['Danh từ thời gian: hiện nay, trước mắt — thường chỉ một khoảng thời gian tính đến lúc nói.'],
    usage:'目前 làm trạng ngữ (目前还……) hoặc định ngữ (目前的情况); 到目前为止. KHÔNG đi với từ chỉ thời gian cụ thể (không nói 目前是十点) — xem Phân biệt 目前 / 现在.',
    collo:['到目前为止', '目前的情况', '目前还', '目前的工作'],
    ex_zh:'到目前为止，事情还没有变化。', ex_py:'Dào mùqián wéizhǐ, shìqing hái méiyǒu biànhuà.', ex_vn:'Tính đến nay, sự việc vẫn chưa có gì thay đổi.',
    exList:[
      {zh:'到目前为止，事情还没有变化。', py:'Dào mùqián wéizhǐ, shìqing hái méiyǒu biànhuà.', vn:'Tính đến nay, sự việc vẫn chưa có gì thay đổi.'},
      {zh:'至少目前可以这么说，没有证据表明黑猩猩或儿童可以这样做。', py:'Zhìshǎo mùqián kěyǐ zhème shuō, méiyǒu zhèngjù biǎomíng hēixīngxing huò értóng kěyǐ zhèyàng zuò.', vn:'Ít nhất hiện nay có thể nói thế này: không có bằng chứng cho thấy tinh tinh hay trẻ em có thể làm được như vậy.'},
      {zh:'选择性失忆目前还无法治疗。', py:'Xuǎnzéxìng shīyì mùqián hái wúfǎ zhìliáo.', vn:'Chứng mất trí nhớ có chọn lọc hiện vẫn chưa thể chữa trị.'}
    ],
    colloFull:[
      {zh:'到目前为止', py:'dào mùqián wéizhǐ', vn:'tính đến nay'},
      {zh:'目前的情况', py:'mùqián de qíngkuàng', vn:'tình hình hiện nay'},
      {zh:'目前还', py:'mùqián hái', vn:'hiện vẫn'},
      {zh:'目前的工作', py:'mùqián de gōngzuò', vn:'công việc hiện tại'},
      {zh:'目前来看', py:'mùqián lái kàn', vn:'xét tình hình hiện nay'}
    ],
    patterns:[{s:'到目前为止，……', m:'Tính đến nay …'}, {s:'目前 + 还 + (没 / 无法)……', m:'Hiện nay vẫn chưa …'}],
    checkList:[
      {promptLang:'vi', prompt:'Tính đến nay, tôi vẫn chưa bao giờ ra nước ngoài.', answer:'到目前为止，我还从来没出过国。', answerPy:'Dào mùqián wéizhǐ, wǒ hái cónglái méi chūguo guó.', note:'到目前为止: khoảng thời gian từ trước tới lúc nói.', pair:'从来没……过'},
      {promptLang:'vi', prompt:'Hiện nay, người học tiếng Trung ngày càng nhiều.', answer:'目前，学汉语的人越来越多了。', answerPy:'Mùqián, xué Hànyǔ de rén yuè lái yuè duō le.', note:'目前 đứng đầu câu làm trạng ngữ.', pair:'越来越'}
    ]
  },
  {n:39, zh:'证据', py:'zhèngjù', pos:'Danh từ', vn:'chứng cứ, bằng chứng', hv:'chứng cứ', em:'🔎', lesson:1,
    explain:['Chứng cứ, bằng chứng — sự thật, đồ vật dùng để chứng minh một điều là đúng.'],
    usage:'有 / 没有 / 找到 + 证据; 证据表明 / 证明……; 可靠的证据; 证据不足.',
    collo:['可靠的证据', '找到证据', '证据表明', '没有证据'],
    ex_zh:'如果没有可靠的证据，你就不能这么说。', ex_py:'Rúguǒ méiyǒu kěkào de zhèngjù, nǐ jiù bù néng zhème shuō.', ex_vn:'Nếu không có bằng chứng đáng tin cậy, cậu không thể nói như vậy.',
    exList:[
      {zh:'如果没有可靠的证据，你就不能这么说。', py:'Rúguǒ méiyǒu kěkào de zhèngjù, nǐ jiù bù néng zhème shuō.', vn:'Nếu không có bằng chứng đáng tin cậy, cậu không thể nói như vậy.'},
      {zh:'没有证据表明黑猩猩或儿童可以这样做。', py:'Méiyǒu zhèngjù biǎomíng hēixīngxing huò értóng kěyǐ zhèyàng zuò.', vn:'Không có bằng chứng cho thấy tinh tinh hay trẻ em có thể làm như vậy.'},
      {zh:'警察终于找到了证据。', py:'Jǐngchá zhōngyú zhǎodàole zhèngjù.', vn:'Cảnh sát cuối cùng đã tìm được bằng chứng.'}
    ],
    colloFull:[
      {zh:'可靠的证据', py:'kěkào de zhèngjù', vn:'bằng chứng đáng tin cậy'},
      {zh:'找到证据', py:'zhǎodào zhèngjù', vn:'tìm được bằng chứng'},
      {zh:'证据表明', py:'zhèngjù biǎomíng', vn:'bằng chứng cho thấy'},
      {zh:'没有证据', py:'méiyǒu zhèngjù', vn:'không có bằng chứng'},
      {zh:'证据不足', py:'zhèngjù bùzú', vn:'không đủ chứng cứ'}
    ],
    patterns:[{s:'(没)有证据 + 表明 / 证明 + ……', m:'(Không) có bằng chứng cho thấy …'}, {s:'找到 / 提供 + 证据', m:'Tìm được / cung cấp bằng chứng'}],
    checkList:[
      {promptLang:'vi', prompt:'Chỉ cần có bằng chứng, cảnh sát sẽ bắt được hắn.', answer:'只要有证据，警察就能抓住他。', answerPy:'Zhǐyào yǒu zhèngjù, jǐngchá jiù néng zhuāzhù tā.', note:'有 + 证据.', pair:'只要……就……'},
      {promptLang:'vi', prompt:'Bằng chứng quan trọng nhất đã bị cảnh sát tìm ra.', answer:'最重要的证据被警察找到了。', answerPy:'Zuì zhòngyào de zhèngjù bèi jǐngchá zhǎodào le.', note:'证据 làm chủ ngữ câu bị động.', pair:'被'}
    ]
  },
  {n:40, zh:'话题', py:'huàtí', pos:'Danh từ', vn:'chủ đề, đề tài', hv:'thoại đề', em:'💬', lesson:1,
    explain:['Chủ đề, đề tài của cuộc nói chuyện, thảo luận.'],
    usage:'一个话题; 换个话题; 热门话题; 共同话题; ……是一个有趣的话题.',
    collo:['换个话题', '热门话题', '有趣的话题', '共同话题'],
    ex_zh:'我们的大脑究竟如何感知抽象艺术，是一个有趣的话题。', ex_py:'Wǒmen de dànǎo jiūjìng rúhé gǎnzhī chōuxiàng yìshù, shì yí ge yǒuqù de huàtí.', ex_vn:'Rốt cuộc não chúng ta cảm nhận nghệ thuật trừu tượng thế nào là một đề tài thú vị.',
    exList:[
      {zh:'我们的大脑究竟如何感知抽象艺术，是一个有趣的话题。', py:'Wǒmen de dànǎo jiūjìng rúhé gǎnzhī chōuxiàng yìshù, shì yí ge yǒuqù de huàtí.', vn:'Rốt cuộc não chúng ta cảm nhận nghệ thuật trừu tượng thế nào là một đề tài thú vị.'},
      {zh:'别说这个了，我们换个话题吧。', py:'Bié shuō zhège le, wǒmen huàn ge huàtí ba.', vn:'Đừng nói chuyện này nữa, chúng ta đổi đề tài đi.'},
      {zh:'我和他没有什么共同话题。', py:'Wǒ hé tā méiyǒu shénme gòngtóng huàtí.', vn:'Tôi với anh ấy chẳng có đề tài chung nào.'}
    ],
    colloFull:[
      {zh:'换个话题', py:'huàn ge huàtí', vn:'đổi đề tài'},
      {zh:'热门话题', py:'rèmén huàtí', vn:'đề tài nóng'},
      {zh:'有趣的话题', py:'yǒuqù de huàtí', vn:'đề tài thú vị'},
      {zh:'共同话题', py:'gòngtóng huàtí', vn:'đề tài chung'},
      {zh:'谈论话题', py:'tánlùn huàtí', vn:'bàn luận đề tài'}
    ],
    patterns:[{s:'换(个)话题', m:'Đổi đề tài'}, {s:'……是一个 + Adj + 的话题', m:'… là một đề tài …'}],
    checkList:[
      {promptLang:'vi', prompt:'Hai chúng tôi vừa gặp nhau là có chuyện nói mãi không hết.', answer:'我们俩一见面就有说不完的话题。', answerPy:'Wǒmen liǎ yí jiànmiàn jiù yǒu shuō bu wán de huàtí.', note:'说不完的话题 = đề tài nói không hết.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Trí tuệ nhân tạo đã trở thành đề tài ngày càng nóng.', answer:'人工智能成为了越来越热门的话题。', answerPy:'Réngōng zhìnéng chéngwéile yuè lái yuè rèmén de huàtí.', note:'热门话题 = đề tài nóng.', pair:'越来越'}
    ]
  }
];

// ══════════════════════════════════════════
// BÀI ĐỌC — một bài liền (file nghe 18-1), 6 đoạn như sách (tr. 162–164)
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 抽象艺术美不美？',
  preQuiz:[
    {q:'对有些人来说，抽象艺术和古典艺术比起来怎么样？',opts:['没有古典艺术那么容易欣赏','比古典艺术容易欣赏','和古典艺术一样容易欣赏'],ans:0},
    {q:'画布上那些不规则的色块、线条让有些人觉得怎么样？',opts:['非常漂亮','看不出有什么意义','很容易看懂'],ans:1},
    {q:'有人从抽象画中感受到了什么？',opts:['对金钱的追求','对历史的回忆','对自由、对生命的赞美'],ans:2},
    {q:'实验中，志愿者的任务是什么？',opts:['判断每组画作中自己更喜欢哪一幅','自己画一幅抽象画','给每幅画作签名'],ans:0},
    {q:'每组中的另一幅画是谁的涂鸦？',opts:['著名抽象艺术家','业余爱好者、婴儿、黑猩猩或者大象','研究者自己'],ans:1},
    {q:'有多少画作的作者没有签名？',opts:['一半','全部','三分之一'],ans:2},
    {q:'“令人头疼的是”后面说的是什么？',opts:['一些签名被故意弄错了','画作的数量太多了','志愿者看不清楚画'],ans:0},
    {q:'每一次测试的结果是什么？',opts:['志愿者根本分辨不出来','志愿者普遍更喜欢人类艺术家的作品','志愿者更喜欢黑猩猩的涂鸦'],ans:1},
    {q:'由此可见什么？',opts:['志愿者都是专业艺术家','志愿者都能解释喜欢的原因','志愿者能从画作中感知艺术家的用心'],ans:2},
    {q:'第二个实验中，志愿者同时欣赏的是什么？',opts:['原作和画面元素被调整后的画作','只有抽象画','自己画的画和大师的画'],ans:0},
    {q:'看到画上物体位置变化后，大脑中哪个区域的活跃性下降了？',opts:['有关颜色的区域','有关含意和解释的区域','有关声音的区域'],ans:1},
    {q:'至少目前可以怎么说？',opts:['黑猩猩也能感知画作的布局','儿童比大人更懂抽象艺术','没有证据表明黑猩猩或儿童可以这样做'],ans:2},
    {q:'作者认为，每个人对抽象艺术可以有不同的解读，这是什么？',opts:['既是挑战，也是自由','一个严重的错误','一件没有意义的事'],ans:0}
  ],
  lines:[
    {sp:0,zh:'对有些人来说，抽象艺术没有古典艺术那么容易欣赏，画布上那些不规则的色块、线条，实在看不出有什么意义。抽象派画家的作品中经常见到好像随便洒上颜料而形成的画作，在有人看来极其神秘甚至丑陋，有人却从中感受到对自由、对生命的赞美。',
     py:'Duì yǒuxiē rén lái shuō, chōuxiàng yìshù méiyǒu gǔdiǎn yìshù nàme róngyì xīnshǎng, huàbù shang nàxiē bù guīzé de sèkuài, xiàntiáo, shízài kàn bu chū yǒu shénme yìyì. Chōuxiàngpài huàjiā de zuòpǐn zhōng jīngcháng jiàndào hǎoxiàng suíbiàn sǎshàng yánliào ér xíngchéng de huàzuò, zài yǒu rén kànlái jíqí shénmì shènzhì chǒulòu, yǒu rén què cóng zhōng gǎnshòu dào duì zìyóu, duì shēngmìng de zànměi.',
     vn:'Với một số người, nghệ thuật trừu tượng không dễ thưởng thức như nghệ thuật cổ điển: những mảng màu, đường nét không theo quy tắc nào trên tấm vải vẽ thật sự chẳng nhìn ra có ý nghĩa gì. Trong tác phẩm của các hoạ sĩ trường phái trừu tượng thường gặp những bức tranh như thể được tạo thành bằng cách vẩy màu tuỳ tiện lên; trong mắt có người, chúng vô cùng bí ẩn, thậm chí xấu xí, nhưng có người lại cảm nhận được từ đó lời ca ngợi tự do, ca ngợi sự sống.'},
    {sp:0,zh:'研究者设计了一个有趣的实验。志愿者的任务很简单，每个人会看到两两一组出现的一些图画，每组中一幅出自著名抽象艺术家之手，另一幅是业余爱好者、婴儿、黑猩猩或者大象的涂鸦。志愿者必须判断每一组画作中自己更喜欢哪一幅。',
     py:'Yánjiūzhě shèjìle yí ge yǒuqù de shíyàn. Zhìyuànzhě de rènwu hěn jiǎndān, měi ge rén huì kàndào liǎngliǎng yì zǔ chūxiàn de yìxiē túhuà, měi zǔ zhōng yì fú chūzì zhùmíng chōuxiàng yìshùjiā zhī shǒu, lìng yì fú shì yèyú àihàozhě, yīng\'ér, hēixīngxing huòzhě dàxiàng de túyā. Zhìyuànzhě bìxū pànduàn měi yì zǔ huàzuò zhōng zìjǐ gèng xǐhuan nǎ yì fú.',
     vn:'Các nhà nghiên cứu đã thiết kế một thí nghiệm thú vị. Nhiệm vụ của tình nguyện viên rất đơn giản: mỗi người sẽ xem một số bức tranh xuất hiện theo từng cặp, trong mỗi cặp có một bức do một nghệ sĩ trừu tượng nổi tiếng vẽ, bức còn lại là nét vẽ nguệch ngoạc của người vẽ nghiệp dư, trẻ sơ sinh, tinh tinh hoặc voi. Tình nguyện viên phải xác định trong mỗi cặp tranh, mình thích bức nào hơn.'},
    {sp:0,zh:'其中三分之一的画作作者没有签名，而其余的则标明了身份。令人头疼的是，一些签名被故意弄错了，志愿者无法确认作者到底是谁，所以有可能志愿者认为自己看到的是黑猩猩的随手涂鸦，实际则是著名抽象艺术家的大作。',
     py:'Qízhōng sān fēn zhī yī de huàzuò zuòzhě méiyǒu qiānmíng, ér qíyú de zé biāomíngle shēnfèn. Lìng rén tóuténg de shì, yìxiē qiānmíng bèi gùyì nòngcuò le, zhìyuànzhě wúfǎ quèrèn zuòzhě dàodǐ shì shéi, suǒyǐ yǒu kěnéng zhìyuànzhě rènwéi zìjǐ kàndào de shì hēixīngxing de suíshǒu túyā, shíjì zé shì zhùmíng chōuxiàng yìshùjiā de dàzuò.',
     vn:'Trong đó, một phần ba số tranh không có chữ ký tác giả, số còn lại thì ghi rõ thân phận người vẽ. Điều khiến người ta đau đầu là một số chữ ký đã bị cố ý ghi sai, tình nguyện viên không thể xác nhận rốt cuộc tác giả là ai; vì vậy rất có thể tình nguyện viên tưởng mình đang xem nét vẽ tiện tay của một con tinh tinh, nhưng thực ra đó lại là kiệt tác của một nghệ sĩ trừu tượng nổi tiếng.'},
    {sp:0,zh:'也许有人认为，在这种情况下根本不可能分辨出来。然而在每一次测试中，志愿者普遍更喜欢的作品都是由人类艺术家挥笔完成的。由此可见，志愿者能够从画作中感知艺术家的用心，哪怕他们不能够解释原因。',
     py:'Yěxǔ yǒu rén rènwéi, zài zhè zhǒng qíngkuàng xià gēnběn bù kěnéng fēnbiàn chūlai. Rán\'ér zài měi yí cì cèshì zhōng, zhìyuànzhě pǔbiàn gèng xǐhuan de zuòpǐn dōu shì yóu rénlèi yìshùjiā huībǐ wánchéng de. Yóucǐ kějiàn, zhìyuànzhě nénggòu cóng huàzuò zhōng gǎnzhī yìshùjiā de yòngxīn, nǎpà tāmen bù nénggòu jiěshì yuányīn.',
     vn:'Có lẽ có người cho rằng trong tình huống này thì hoàn toàn không thể phân biệt được. Thế nhưng trong mỗi lần thử nghiệm, những tác phẩm mà tình nguyện viên nhìn chung thích hơn đều do nghệ sĩ con người vung bút hoàn thành. Từ đó có thể thấy, tình nguyện viên có thể cảm nhận được tâm huyết của người nghệ sĩ qua bức tranh, dù họ không giải thích được lý do.'},
    {sp:0,zh:'另一个实验是这样，志愿者同时欣赏原作和画面元素被调整后的画作，包括静物画和抽象画。结果，几乎每个人都更喜欢原作。研究者发现，当看到画上物体位置变化后，大脑中有关含意和解释的区域活跃性下降了。这表明，我们的大脑注意到了原作的布局，并且可以感知其背后的用意，即使我们还没有清楚地感受到这个事实。至少目前可以这么说，没有证据表明黑猩猩或儿童可以这样做。',
     py:'Lìng yí ge shíyàn shì zhèyàng, zhìyuànzhě tóngshí xīnshǎng yuánzuò hé huàmiàn yuánsù bèi tiáozhěng hòu de huàzuò, bāokuò jìngwùhuà hé chōuxiànghuà. Jiéguǒ, jīhū měi ge rén dōu gèng xǐhuan yuánzuò. Yánjiūzhě fāxiàn, dāng kàndào huà shang wùtǐ wèizhì biànhuà hòu, dànǎo zhōng yǒuguān hányì hé jiěshì de qūyù huóyuèxìng xiàjiàng le. Zhè biǎomíng, wǒmen de dànǎo zhùyì dàole yuánzuò de bùjú, bìngqiě kěyǐ gǎnzhī qí bèihòu de yòngyì, jíshǐ wǒmen hái méiyǒu qīngchu de gǎnshòu dào zhège shìshí. Zhìshǎo mùqián kěyǐ zhème shuō, méiyǒu zhèngjù biǎomíng hēixīngxing huò értóng kěyǐ zhèyàng zuò.',
     vn:'Một thí nghiệm khác như sau: tình nguyện viên cùng lúc xem bản gốc và bức tranh đã bị điều chỉnh các yếu tố trong khung hình, gồm cả tranh tĩnh vật lẫn tranh trừu tượng. Kết quả là hầu như ai cũng thích bản gốc hơn. Các nhà nghiên cứu phát hiện, khi nhìn thấy vị trí của các vật trong tranh thay đổi, mức độ hoạt động của vùng não liên quan đến ý nghĩa và sự lý giải giảm xuống. Điều này cho thấy não bộ của chúng ta đã chú ý đến bố cục của bản gốc và có thể cảm nhận được dụng ý phía sau nó, dù bản thân chúng ta chưa cảm nhận rõ ràng sự thật này. Ít nhất hiện nay có thể nói rằng: chưa có bằng chứng nào cho thấy tinh tinh hay trẻ nhỏ làm được như vậy.'},
    {sp:0,zh:'我们的大脑究竟如何感知抽象艺术，是一个有趣的话题。每个人对抽象艺术可以有不同的解读，这既是挑战，也是自由。',
     py:'Wǒmen de dànǎo jiūjìng rúhé gǎnzhī chōuxiàng yìshù, shì yí ge yǒuqù de huàtí. Měi ge rén duì chōuxiàng yìshù kěyǐ yǒu bù tóng de jiědú, zhè jì shì tiǎozhàn, yě shì zìyóu.',
     vn:'Rốt cuộc não bộ của chúng ta cảm nhận nghệ thuật trừu tượng như thế nào là một đề tài thú vị. Mỗi người có thể có cách hiểu khác nhau về nghệ thuật trừu tượng — đó vừa là thử thách, vừa là tự do.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 词语辨析 — 目前/现在 lấy từ sách (tr. 166–167)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'目前 — 现在',
   same:'Đều là danh từ chỉ thời gian, chỉ LÚC ĐANG NÓI, thường thay thế được cho nhau.',
   sameEx:{zh:'至少目前／现在可以这么说，没有证据表明黑猩猩或儿童可以这样做。',vn:'Ít nhất hiện nay / bây giờ có thể nói rằng chưa có bằng chứng cho thấy tinh tinh hay trẻ nhỏ làm được như vậy.'},
   items:[
     {word:'目前',points:[
       'Thiên về MỘT KHOẢNG thời gian tính từ trước cho đến nay.',
       'KHÔNG đi với từ chỉ thời gian cụ thể (không nói 目前是十点).',
       'Hay gặp: 到目前为止, 目前的情况, 目前还…… — giọng văn viết, trang trọng.'
     ],ex:[{zh:'到目前为止，事情还没有变化。',vn:'Cho đến nay, sự việc vẫn chưa có thay đổi gì.'},
          {zh:'选择性失忆目前还无法治疗。',vn:'Chứng mất trí nhớ có chọn lọc hiện nay vẫn chưa chữa được.'}]},
     {word:'现在',points:[
       'Chỉ được cả khoảng thời gian lẫn MỘT THỜI ĐIỂM (ngay lúc này).',
       'Có thể nhấn mạnh sự ĐỐI LẬP với trước kia: 现在的年轻人…… (khác hồi xưa).',
       'Đi được với từ chỉ thời gian cụ thể: 现在是上午十点.'
     ],ex:[{zh:'我现在就去。',vn:'Tôi đi ngay bây giờ.'},
          {zh:'现在是北京时间上午十点钟。',vn:'Bây giờ là 10 giờ sáng giờ Bắc Kinh.'}]}
   ],
   quiz:[
     {sentence:'我们很着急，你＿＿能过来一趟吗？',options:['目前','现在'],answer:1,
      why:'Nói về một thời điểm — ngay lúc này → chỉ 现在 (câu mẫu của sách).'},
     {sentence:'选择性失忆＿＿还无法治疗。',options:['目前','现在'],answer:0,both:true,
      why:'Một khoảng thời gian từ trước đến nay → cả hai đều được; 目前 giọng văn viết hơn.'},
     {sentence:'＿＿的年轻人，跟我们那时候真不一样！',options:['目前','现在'],answer:1,
      why:'Đối lập với trước kia (我们那时候) → chỉ 现在.'},
     {sentence:'调查显示，66.9%的女性对＿＿的工作不满意。',options:['目前','现在'],answer:0,both:true,
      why:'Công việc hiện tại — một khoảng thời gian → cả hai đều được.'}
   ],
   sgk:{
     chung:{t:'都是时间名词，指说话的这个时候，常可换用。',vn:'Đều là danh từ chỉ thời gian, chỉ lúc đang nói, thường thay thế được cho nhau.',vd:'至少目前／现在可以这么说，没有证据表明黑猩猩或儿童可以这样做。',vdVn:'Ít nhất hiện nay / bây giờ có thể nói rằng chưa có bằng chứng cho thấy tinh tinh hay trẻ nhỏ làm được như vậy.'},
     khac:[
       {a:{t:'一般侧重指从之前到现在为止的某段时间。',vn:'Thường thiên về một khoảng thời gian tính từ trước cho đến nay.',vd:'到目前为止，事情还没有变化。',vdVn:'Cho đến nay, sự việc vẫn chưa có thay đổi gì.'},
        b:{t:'可以侧重指某个时间段，也可以指某个时间点，还可以强调与以前的对比。',vn:'Có thể chỉ một khoảng thời gian, cũng có thể chỉ một thời điểm, còn có thể nhấn mạnh sự đối lập với trước kia.',vd:'我现在就去。',vdVn:'Tôi đi ngay bây giờ.'}},
       {a:{t:'不可与具体时间词连用。',vn:'Không dùng cùng từ chỉ thời gian cụ thể.'},
        b:{t:'可与具体时间词连用。',vn:'Dùng được cùng từ chỉ thời gian cụ thể.',vd:'现在是北京时间上午十点钟。',vdVn:'Bây giờ là 10 giờ sáng giờ Bắc Kinh.'}}
     ],
     lamThu:[
       {s:'我们很着急，你＿＿能过来一趟吗？',dap:[false,true],mau:true,
        giai:'Ngay lúc này (một thời điểm) → chỉ 现在 (câu mẫu của sách).'},
       {s:'选择性失忆＿＿还无法治疗。',dap:[true,true],
        giai:'Khoảng thời gian từ trước đến nay → cả 目前 và 现在 đều được.'},
       {s:'调查显示，66.9%的女性对＿＿的工作不满意。',dap:[true,true],
        giai:'目前的工作 / 现在的工作 đều chỉ công việc hiện tại → cả hai đều được.'},
       {s:'＿＿的年轻人，跟我们那时候真不一样！',dap:[false,true],
        giai:'Nhấn mạnh sự đối lập với trước kia (我们那时候) → chỉ 现在.'}
     ]
   }},

  {pair:'随手 — 随便',
   same:'Đều có chữ 随, đều làm trạng ngữ đứng trước động từ, nói về việc làm không suy tính nhiều.',
   sameEx:{zh:'他随手／随便在纸上画了几笔。',vn:'Anh ấy tiện tay / tuỳ ý vẽ vài nét lên giấy.'},
   items:[
     {word:'随手',points:[
       'Nghĩa: TIỆN TAY — nhân lúc đang làm việc khác thì làm luôn việc nhỏ này.',
       'Chỉ đứng trước động từ chỉ động tác bằng tay: 随手关门, 随手关灯, 随手放, 随手涂鸦.',
       'Không làm vị ngữ, không nói 很随手.'
     ],ex:[{zh:'出门的时候请随手关灯。',vn:'Khi ra ngoài xin tiện tay tắt đèn.'},
          {zh:'可能出门时我随手把钥匙放在门口的桌子上了。',vn:'Có lẽ lúc ra khỏi nhà tôi tiện tay để chìa khoá trên cái bàn ở cửa rồi.'}]},
     {word:'随便',points:[
       'Nghĩa: TUỲ Ý, TUỲ TIỆN, không theo quy tắc / không cẩn thận.',
       'Làm được trạng ngữ (随便洒上颜料), vị ngữ (他说话太随便了) và đứng một mình để trả lời (随便！ = sao cũng được).',
       'Đi được với 很 / 太: 太随便了.'
     ],ex:[{zh:'抽象画好像是随便洒上颜料而形成的。',vn:'Tranh trừu tượng dường như được tạo thành bằng cách vẩy màu tuỳ tiện.'},
          {zh:'——你想喝什么？——随便，都行。',vn:'— Bạn muốn uống gì? — Gì cũng được.'}]}
   ],
   quiz:[
     {sentence:'可能出门时我＿＿把钥匙放在门口的桌子上了。',options:['随手','随便'],answer:0,
      why:'Tiện tay đặt chìa khoá (động tác bằng tay, lúc đang ra cửa) → 随手 (bài tập của sách).'},
     {sentence:'——晚上吃什么？——＿＿，你决定吧。',options:['随手','随便'],answer:1,
      why:'Đứng một mình để trả lời "sao cũng được" → chỉ 随便.'},
     {sentence:'离开教室的时候，请＿＿关灯。',options:['随手','随便'],answer:0,
      why:'Nhân lúc ra khỏi phòng thì tắt đèn luôn → 随手关灯.'},
     {sentence:'他说话太＿＿了，常常得罪人。',options:['随手','随便'],answer:1,
      why:'Làm vị ngữ, đi với 太 → chỉ 随便. 随手 không làm vị ngữ.'}
   ]},

  {pair:'极其 — 非常',
   same:'Đều là phó từ chỉ mức độ rất cao, đứng trước tính từ hoặc động từ tâm lý.',
   sameEx:{zh:'这次考试对我来说极其／非常重要。',vn:'Kỳ thi này đối với tôi vô cùng quan trọng.'},
   items:[
     {word:'极其',points:[
       'Văn viết, trang trọng.',
       'CHỈ đứng trước tính từ / động từ HAI âm tiết trở lên: 极其重要, 极其少见, 极其神秘.',
       'Không lặp lại, không đứng trước từ một âm tiết (không nói 极其丑).'
     ],ex:[{zh:'在中国，餐桌上放一把刀是极其少见的现象。',vn:'Ở Trung Quốc, đặt một con dao trên bàn ăn là hiện tượng cực kỳ hiếm gặp.'},
          {zh:'这些画作在有人看来极其神秘甚至丑陋。',vn:'Trong mắt có người, những bức tranh này vô cùng bí ẩn, thậm chí xấu xí.'}]},
     {word:'非常',points:[
       'Dùng được cả khẩu ngữ và văn viết.',
       'Đứng được trước từ MỘT âm tiết: 非常丑, 非常好, 非常香.',
       'Có thể lặp lại để nhấn mạnh: 非常非常喜欢.'
     ],ex:[{zh:'那个人长得非常丑。',vn:'Người đó trông rất xấu.'},
          {zh:'今天天气非常好，我们去公园吧！',vn:'Hôm nay trời rất đẹp, chúng ta đi công viên đi!'}]}
   ],
   quiz:[
     {sentence:'那个人长得＿＿丑。',options:['极其','非常'],answer:1,
      why:'丑 là tính từ MỘT âm tiết → chỉ 非常 (bài tập của sách). Muốn dùng 极其 phải đổi thành 极其丑陋.'},
     {sentence:'在中国，餐桌上放一把刀是＿＿少见的现象。',options:['极其','非常'],answer:0,both:true,
      why:'少见 hai âm tiết → cả hai đều được; câu văn viết nên 极其 hợp hơn (câu của sách).'},
     {sentence:'妈妈做的菜＿＿香，我每次都吃两碗饭。',options:['极其','非常'],answer:1,
      why:'香 một âm tiết → chỉ 非常.'},
     {sentence:'妈妈，我今天考了一百分，＿＿开心！',options:['极其','非常'],answer:1,both:true,
      why:'Nói chuyện thân mật với mẹ → 非常 tự nhiên. 极其开心 đúng ngữ pháp nhưng giọng văn viết, nghe cứng.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'抽象',hv:'trừu tượng',vn:'trừu tượng',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'古典',hv:'cổ điển',vn:'cổ điển',note:'Trùng khít: 古典音乐 = nhạc cổ điển.'},
    {zh:'规则',hv:'quy tắc',vn:'quy tắc',note:'Trùng khít. Chú ý tiếng Trung còn làm tính từ: 不规则 = không đều, lộn xộn.'},
    {zh:'作品',hv:'tác phẩm',vn:'tác phẩm',note:'Trùng khít.'},
    {zh:'神秘',hv:'thần bí',vn:'thần bí, bí ẩn',note:'Trùng khít.'},
    {zh:'自由',hv:'tự do',vn:'tự do',note:'Trùng khít.'},
    {zh:'设计',hv:'thiết kế',vn:'thiết kế',note:'Trùng khít.'},
    {zh:'调整',hv:'điều chỉnh',vn:'điều chỉnh',note:'Trùng khít. Chú ý 调 đọc tiáo, không đọc diào.'},
    {zh:'位置',hv:'vị trí',vn:'vị trí',note:'Trùng khít.'},
    {zh:'区域',hv:'khu vực',vn:'khu vực',note:'Trùng khít.'},
    {zh:'证据',hv:'chứng cứ',vn:'chứng cứ, bằng chứng',note:'Trùng khít.'},
    {zh:'布局',hv:'bố cục',vn:'bố cục',note:'Trùng khít — và nhớ luôn 布 ở đây là "bố trí", không phải "vải".'},
    {zh:'身份',hv:'thân phận',vn:'thân phận; tư cách',note:'身份证 = giấy chứng minh thân phận → CMND / căn cước.'},
    {zh:'确认',hv:'xác nhận',vn:'xác nhận',note:'Trùng khít.'},
    {zh:'含意',hv:'hàm ý',vn:'hàm ý',note:'Trùng khít.'}
  ],
  idiom:[
    {zh:'画龙点睛',hv:'hoạ long điểm tinh',vn:'vẽ rồng điểm mắt — thêm chi tiết then chốt làm tác phẩm sống động',note:'Câu 31 sách bài tập: 成语“画龙点睛”便出自关于他的传说.'},
    {zh:'多才多艺',hv:'đa tài đa nghệ',vn:'đa tài đa nghệ',note:'Gặp trong bài nghe số 2: 真是多才多艺啊！'},
    {zh:'由此可见',hv:'do thử khả kiến',vn:'từ đó có thể thấy',note:'Mẫu câu kết luận của bài: 由此可见，……'},
    {zh:'自由自在',hv:'tự do tự tại',vn:'tự do tự tại, thong dong',note:'Tiếng Việt dùng y nguyên.'}
  ],
  trap:[
    {zh:'可见',hv:'khả kiến',vn:'có thể thấy (rằng)',
     warn:'BẪY: "khả kiến" tiếng Việt là "nhìn thấy được" (ánh sáng khả kiến). 可见 tiếng Trung chủ yếu là LIÊN TỪ rút kết luận: ……，可见…… = …, có thể thấy …'},
    {zh:'欣赏',hv:'hân thưởng',vn:'thưởng thức; đánh giá cao',
     warn:'Âm Hán–Việt "hân thưởng" ít dùng. Nhớ hai nghĩa: 欣赏音乐 (thưởng thức) và 很欣赏他 (đánh giá cao, quý).'},
    {zh:'随手',hv:'tuỳ thủ',vn:'tiện tay',
     warn:'Không phải "tuỳ ý" (đó là 随便). 随手 = TIỆN TAY: 随手关门.'},
    {zh:'活跃',hv:'hoạt dược',vn:'sôi nổi; làm sôi nổi',
     warn:'"Hoạt dược" không có trong tiếng Việt. 活跃 = sôi nổi, năng động: 活跃气氛 = khuấy động không khí.'},
    {zh:'目前',hv:'mục tiền',vn:'hiện nay',
     warn:'目 = mắt, 前 = trước → "trước mắt" = hiện nay. Không đi với giờ cụ thể (不说 目前是十点).'},
    {zh:'洒',hv:'sái',vn:'vẩy, rắc; làm đổ',
     warn:'Dễ nhầm với 酒 (rượu): 洒 = 氵+ 西, 酒 = 氵+ 酉. 把水洒了 = làm đổ nước.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — theo bảng 词语搭配 của sách (tr. 166) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'调整',right:'价格'},
  {left:'活跃',right:'气氛'},
  {left:'古典',right:'音乐'},
  {left:'交通',right:'规则'},
  {left:'设计',right:'方案'},
  {left:'业余',right:'爱好'},
  {left:'一组',right:'照片'},
  {left:'一幅',right:'画儿'},
  {left:'欣赏',right:'风景'},
  {left:'确认',right:'身份'},
  {left:'分辨',right:'真假'},
  {left:'挥手',right:'告别'},
  {left:'随手',right:'关灯'},
  {left:'签',right:'合同'},
  {left:'洒上',right:'颜料'},
  {left:'抽象派',right:'画家'},
  {left:'可靠的',right:'证据'},
  {left:'热门',right:'话题'},
  {left:'中国',right:'元素'},
  {left:'由此',right:'可见'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'对有些人来说，',blank:'抽象',post:'艺术没有古典艺术那么容易欣赏。',hint:'(trừu tượng)',ans:'抽象'},
  {pre:'我爷爷每天早上都听',blank:'古典',post:'音乐。',hint:'(cổ điển)',ans:'古典'},
  {pre:'周末我们去美术馆',blank:'欣赏',post:'了一些名画。',hint:'(thưởng thức)',ans:'欣赏'},
  {pre:'奶奶用一块旧',blank:'布',post:'给我做了一个书包。',hint:'(vải)',ans:'布'},
  {pre:'这些可都是抽象',blank:'派',post:'大师的作品。',hint:'(trường phái)',ans:'派'},
  {pre:'这次展览一共展出了一百多件艺术',blank:'作品',post:'。',hint:'(tác phẩm)',ans:'作品'},
  {pre:'他不小心把咖啡',blank:'洒',post:'在了作业本上。',hint:'(làm đổ, sánh ra)',ans:'洒'},
  {pre:'《蒙娜丽莎》',blank:'神秘',post:'的微笑吸引了无数游客。',hint:'(bí ẩn)',ans:'神秘'},
  {pre:'这些画作在有人看来极其神秘甚至',blank:'丑陋',post:'。',hint:'(xấu xí)',ans:'丑陋'},
  {pre:'下午是',blank:'自由',post:'活动时间，大家可以随便逛逛。',hint:'(tự do)',ans:'自由'},
  {pre:'这套衣服是姐姐自己',blank:'设计',post:'的。',hint:'(thiết kế)',ans:'设计'},
  {pre:'老师让我们两两一',blank:'组',post:'，互相检查作业。',hint:'(nhóm)',ans:'组'},
  {pre:'刚出生的',blank:'婴儿',post:'每天要睡十几个小时。',hint:'(trẻ sơ sinh)',ans:'婴儿'},
  {pre:'动物园里的那只黑',blank:'猩猩',post:'会用笔画画儿。',hint:'(tinh tinh)',ans:'猩猩'},
  {pre:'学校不允许学生在墙上',blank:'涂鸦',post:'。',hint:'(vẽ nguệch ngoạc)',ans:'涂鸦'},
  {pre:'考完试别忘了在试卷上',blank:'签',post:'上自己的名字。',hint:'(ký)',ans:'签'},
  {pre:'坐飞机的时候一定要带',blank:'身份',post:'证。',hint:'(thân phận)',ans:'身份'},
  {pre:'出发前，请再',blank:'确认',post:'一下航班时间。',hint:'(xác nhận)',ans:'确认'},
  {pre:'这对双胞胎长得太像了，我根本',blank:'分辨',post:'不出来谁是哥哥。',hint:'(phân biệt)',ans:'分辨'},
  {pre:'火车开动了，他一直向我们',blank:'挥',post:'手告别。',hint:'(vẫy)',ans:'挥'},
  {pre:'这件衣服的设计加入了很多中国',blank:'元素',post:'。',hint:'(yếu tố)',ans:'元素'},
  {pre:'我们换个',blank:'位置',post:'坐吧，这儿看不清黑板。',hint:'(vị trí, chỗ)',ans:'位置'},
  {pre:'这句话的',blank:'含意',post:'很深，我想了很久才明白。',hint:'(hàm ý)',ans:'含意'},
  {pre:'这个',blank:'区域',post:'禁止吸烟。',hint:'(khu vực)',ans:'区域'},
  {pre:'这套房子的',blank:'布局',post:'很合理，每个房间都很亮。',hint:'(bố cục)',ans:'布局'},
  {pre:'别说这个了，我们换个',blank:'话题',post:'吧。',hint:'(đề tài)',ans:'话题'},
  {pre:'警察终于找到了他偷东西的',blank:'证据',post:'。',hint:'(bằng chứng)',ans:'证据'},
  {pre:'摄影只不过是我的',blank:'业余',post:'爱好。',hint:'(ngoài giờ, nghiệp dư)',ans:'业余'},
  {pre:'考试前要',blank:'调整',post:'好心态，别太紧张。',hint:'(điều chỉnh)',ans:'调整'},
  {pre:'',blank:'事实',post:'证明，他的办法是对的。',hint:'(sự thật)',ans:'事实'},
  {pre:'只有一个房间亮着灯，',blank:'其余',post:'窗户都是黑的。',hint:'(còn lại)',ans:'其余'},
  {pre:'连这么简单的题你都不会，',blank:'可见',post:'你上课没有认真听。',hint:'(có thể thấy)',ans:'可见'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (极其 · 其余 · 可见) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['这是','一个','极其','重要的','决定','。'],ans:'这是一个极其重要的决定。',audio:'这是一个极其重要的决定。'},
  {words:['上海','给我','留下了','极其','深刻的','印象','。'],ans:'上海给我留下了极其深刻的印象。',audio:'上海给我留下了极其深刻的印象。'},
  {words:['怎么','只有','你们两个人','？','其余的','同学','呢','？'],ans:'怎么只有你们两个人？其余的同学呢？',audio:'怎么只有你们两个人？其余的同学呢？'},
  {words:['我','只认识','这两个字','，','其余的','都','不认识','。'],ans:'我只认识这两个字，其余的都不认识。',audio:'我只认识这两个字，其余的都不认识。'},
  {words:['连这么简单的题','你都不会','，','可见','你上课','没有认真听','。'],ans:'连这么简单的题你都不会，可见你上课没有认真听。',audio:'连这么简单的题你都不会，可见你上课没有认真听。'},
  {words:['由此','可见','，','志愿者','能够','感知','艺术家的用心','。'],ans:'由此可见，志愿者能够感知艺术家的用心。',audio:'由此可见，志愿者能够感知艺术家的用心。'},
  {words:['他','一有时间','就去看父母','，','可见','他','很孝敬父母','。'],ans:'他一有时间就去看父母，可见他很孝敬父母。',audio:'他一有时间就去看父母，可见他很孝敬父母。'},
  {words:['哪怕','熬夜','，','我今天','也得','把这个计划','做完','。'],ans:'哪怕熬夜，我今天也得把这个计划做完。',audio:'哪怕熬夜，我今天也得把这个计划做完。'},
  {words:['研究者','设计了','一个','有趣的','实验','。'],ans:'研究者设计了一个有趣的实验。',audio:'研究者设计了一个有趣的实验。'},
  {words:['一些签名','被','故意','弄错了','。'],ans:'一些签名被故意弄错了。',audio:'一些签名被故意弄错了。'},
  {words:['每个人','对抽象艺术','可以有','不同的','解读','。'],ans:'每个人对抽象艺术可以有不同的解读。',audio:'每个人对抽象艺术可以有不同的解读。'},
  {words:['我们的大脑','注意到了','原作的','布局','。'],ans:'我们的大脑注意到了原作的布局。',audio:'我们的大脑注意到了原作的布局。'},
  {words:['请','再','确认','一下','航班时间','。'],ans:'请再确认一下航班时间。',audio:'请再确认一下航班时间。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'那个人长得____丑。',opts:['极其','非常','其余','极了'],ans:1,
   exp:'丑 là tính từ MỘT âm tiết → dùng 非常. 极其 chỉ đi với từ hai âm tiết trở lên (极其丑陋). 极了 phải đứng SAU tính từ (丑极了).'},
  {wrong:'在中国，餐桌上放一把刀是____少见的现象。',opts:['其余','随手','极其','可见'],ans:2,
   exp:'Phó từ chỉ mức độ trước tính từ hai âm tiết 少见 → 极其 (câu của sách). 其余, 随手, 可见 không bổ nghĩa cho tính từ.'},
  {wrong:'上海给我留下了____深刻的印象。',opts:['极其','哪怕','随手','其余'],ans:0,
   exp:'极其 + tính từ hai âm tiết 深刻 (câu 29 sách bài tập).'},
  {wrong:'书房的墙上挂着一____静物画。',opts:['组','块','位','幅'],ans:3,
   exp:'Lượng từ của tranh → 幅 (一幅画). 组 là một nhóm, 块 dùng cho vải / đá, 位 dùng cho người.'},
  {wrong:'这次展出的一____服装是由七套戏服组成的。',opts:['幅','组','位','块'],ans:1,
   exp:'Nhiều bộ trang phục hợp thành MỘT NHÓM → 一组服装. 幅 dùng cho tranh, vải vóc.'},
  {wrong:'这幅画____一个十岁孩子之手。',opts:['出现','设计','出自','分辨'],ans:2,
   exp:'出自……之手 = do tay … làm ra. 出现 là "xuất hiện", không đi với 之手.'},
  {wrong:'成语“画龙点睛”便____关于他的传说。',opts:['出自','发明','设计','确认'],ans:0,
   exp:'Nguồn gốc của thành ngữ → 出自 + truyền thuyết / sách (câu 31 sách bài tập).'},
  {wrong:'可能出门时我____把钥匙放在门口的桌子上了。',opts:['按时','随手','到底','极其'],ans:1,
   exp:'Tiện tay đặt chìa khoá khi ra cửa → 随手. 按时 (đúng giờ), 到底 (rốt cuộc), 极其 (vô cùng) sai nghĩa.'},
  {wrong:'他____在纸上画了几笔，没想到画得这么好。',opts:['其余','可见','极其','随手'],ans:3,
   exp:'Tiện tay vẽ vài nét → 随手 + V.'},
  {wrong:'____熬夜，我今天也得把这个计划做完。',opts:['哪怕','虽然','因为','可见'],ans:0,
   exp:'Vế sau có 也 → 哪怕……也…… (dù cho). 虽然 đi với 但是; 因为 đi với 所以.'},
  {wrong:'____是一分钟他也不愿意再等了。',opts:['可见','其余','哪怕','虽然'],ans:2,
   exp:'哪怕 + điều kiện cực đoan (chỉ một phút) + 也…… (câu 30 sách bài tập).'},
  {wrong:'每次晚会他都是主持人，要靠他来____气氛。',opts:['调整','活跃','欣赏','确认'],ans:1,
   exp:'活跃气氛 = khuấy động không khí (bảng 词语搭配 của sách).'},
  {wrong:'她性格开朗，在班里很____。',opts:['业余','其余','活跃','抽象'],ans:2,
   exp:'Tả tính cách sôi nổi, năng động → 活跃 (làm tính từ).'},
  {wrong:'过马路的时候，一定要遵守交通____。',opts:['规则','布局','位置','元素'],ans:0,
   exp:'遵守 + 规则 (tuân thủ quy tắc). 交通规则 = luật giao thông.'},
  {wrong:'这块布上只有一些不____的色块，我看不出来画的是什么。',opts:['古典','业余','活跃','规则'],ans:3,
   exp:'不规则 = không theo quy tắc, lộn xộn (tính từ).'},
  {wrong:'到____为止，事情还没有任何变化。',opts:['以前','目前','将来','从前'],ans:1,
   exp:'到目前为止 = cho đến nay (khoảng thời gian từ trước tới giờ). 以前 / 将来 / 从前 không dùng trong khung 到……为止 với nghĩa này.'},
  {wrong:'我认为你们其实忽略了一个十分重要的____。',opts:['实际','事实','随手','其余'],ans:1,
   exp:'Làm tân ngữ, có định ngữ 重要的 → danh từ 事实. 实际 chủ yếu là tính từ (实际情况) hoặc trạng ngữ (实际上).'},
  {wrong:'我只认识这两个字，____的都不认识。',opts:['其中','其实','其余','极其'],ans:2,
   exp:'Phần CÒN LẠI ngoài hai chữ đã nói → 其余的. 其中 (trong đó), 其实 (thật ra), 极其 (vô cùng) sai nghĩa.'},
  {wrong:'他已经住院好几天了，一直诊断不出是什么问题，____情况不太好。',opts:['哪怕','即使','随手','可见'],ans:3,
   exp:'Từ căn cứ ở vế trước rút ra kết luận → 可见 (câu của sách).'},
  {wrong:'大师____笔写下了四个大字。',opts:['洒','挥','签','派'],ans:1,
   exp:'挥笔 = vung bút (viết / vẽ). 洒 là vẩy, 签 là ký, 派 là cử đi.'},
  {wrong:'我们只是一支____的乐队，不够专业水平。',opts:['古典','神秘','业余','规则'],ans:2,
   exp:'不够专业水平 → nghiệp dư → 业余 (đối lập với 专业).'},
  {wrong:'如果没有可靠的____，你就不能这么说。',opts:['话题','证据','元素','身份'],ans:1,
   exp:'可靠的证据 = bằng chứng đáng tin (bài tập của sách).'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Kỳ thi toán lần này cực kỳ quan trọng, vì vậy dù có phải thức khuya tôi cũng phải làm lại một lượt những câu đã sai.', zh:'这次数学考试极其重要，所以我哪怕熬夜也要把错题再做一遍。', py:'Zhè cì shùxué kǎoshì jíqí zhòngyào, suǒyǐ wǒ nǎpà áoyè yě yào bǎ cuòtí zài zuò yí biàn.', goiY:['极其','哪怕……也……','熬夜'], giai:'极其 + tính từ hai âm tiết (极其重要), không đứng trước từ một âm tiết; 哪怕 nêu tình huống xấu nhất, 也 giữ nguyên quyết tâm.'},
  {vi:'Cả lớp chỉ có tôi và bạn cùng bàn chọn môn Mỹ thuật, các bạn còn lại đều đăng ký vào đội bóng đá nghiệp dư.', zh:'全班只有我和同桌选了美术课，其余的同学都报名参加了业余足球队。', py:'Quán bān zhǐyǒu wǒ hé tóngzhuō xuǎnle měishù kè, qíyú de tóngxué dōu bàomíng cānjiāle yèyú zúqiú duì.', goiY:['只有……，其余的……都……','业余','美术'], giai:'Mẫu 只有 A，其余的 B 都…… = chỉ có A, còn lại B đều…; 其余 luôn chỉ phần còn lại của nhóm vừa nhắc tới, nên cần vế "chỉ có…" đứng trước.'},
  {vi:'Câu dễ thế này mà cậu cũng làm sai, chứng tỏ trước khi nộp bài cậu chẳng hề kiểm tra lại đáp án cẩn thận.', zh:'你连这么简单的题都做错了，可见你交卷前根本没有仔细确认答案。', py:'Nǐ lián zhème jiǎndān de tí dōu zuòcuò le, kějiàn nǐ jiāo juàn qián gēnběn méiyǒu zǐxì quèrèn dá\'àn.', goiY:['连……都……','可见','确认'], giai:'可见 đứng đầu vế sau, rút ra kết luận từ sự việc vừa nêu — "chứng tỏ, có thể thấy"; 确认 = xác nhận lại cho chắc, khác 确定 (quyết định dứt khoát).'},
  {vi:'Tuy bức tranh trừu tượng này trông như ai đó tiện tay vẽ nguệch ngoạc, nhưng thầy nói bố cục của nó đã được thiết kế rất công phu.', zh:'虽然这幅抽象画看起来像是随手涂鸦，但是老师说它的布局经过了精心设计。', py:'Suīrán zhè fú chōuxiàng huà kàn qilai xiàng shì suíshǒu túyā, dànshì lǎoshī shuō tā de bùjú jīngguòle jīngxīn shèjì.', goiY:['虽然……但是……','随手涂鸦','布局'], giai:'Lượng từ thường dùng cho tranh là 幅 (这幅画); 随手涂鸦 = tiện tay vẽ bậy, 随手 nhấn mạnh sự tuỳ tiện, không chủ ý.'},
  {vi:'Đã thích nhạc cổ điển đến vậy thì cậu nên tận dụng thời gian rảnh tự mình đến nhà hát nghe biểu diễn, chứ đừng chỉ nghe trên điện thoại.', zh:'既然你对古典音乐这么感兴趣，就应该利用业余时间亲自去音乐厅欣赏演出，而不是只在手机上听。', py:'Jìrán nǐ duì gǔdiǎn yīnyuè zhème gǎn xìngqù, jiù yīnggāi lìyòng yèyú shíjiān qīnzì qù yīnyuètīng xīnshǎng yǎnchū, ér bú shì zhǐ zài shǒujī shang tīng.', goiY:['既然……就……','业余时间','而不是'], giai:'既然 + sự thật đã biết, 就 + lời khuyên — đừng nhầm với 虽然; "chứ đừng…" dịch bằng 而不是 đặt ở vế cuối.'},
  {vi:'Lớp tôi mỗi khi thảo luận thì không khí luôn sôi nổi, dù là chủ đề cực kỳ trừu tượng, mọi người cũng đều thoải mái nói ra suy nghĩ của mình.', zh:'我们班讨论问题时气氛一向很活跃，哪怕是极其抽象的话题，大家也都能自由地说出自己的看法。', py:'Wǒmen bān tǎolùn wèntí shí qìfēn yíxiàng hěn huóyuè, nǎpà shì jíqí chōuxiàng de huàtí, dàjiā yě dōu néng zìyóu de shuōchū zìjǐ de kànfǎ.', goiY:['哪怕……也……','活跃','极其抽象'], giai:'活跃 = sôi nổi, thường đi với 气氛/思维; 哪怕是 + danh từ nêu trường hợp khó nhất, 也 + kết quả không đổi — không dùng 虽然 vì đây là giả định.'},
  {vi:'Cô chia chúng tôi thành bốn nhóm, mỗi nhóm chỉ một người phụ trách thiết kế áp phích, số còn lại thì chia nhau đi tìm tư liệu, nhờ vậy tiết kiệm được khá nhiều thời gian.', zh:'老师把我们分成四组，每组只有一个人负责设计海报，其余的人则分工去找资料，从而节省了不少时间。', py:'Lǎoshī bǎ wǒmen fēnchéng sì zǔ, měi zǔ zhǐyǒu yí ge rén fùzé shèjì hǎibào, qíyú de rén zé fēngōng qù zhǎo zīliào, cóng\'ér jiéshěngle bù shǎo shíjiān.', goiY:['其余的……则……','从而','设计'], giai:'其余的人则…… đối lập với vế trước (một người… còn lại thì…); 从而 mở ra kết quả đạt được nhờ cách làm ở trước — "nhờ đó".'},
  {vi:'Cậu ấy tiện tay ký tên lên vở bài tập, nét chữ vô cùng mờ nhạt; nếu không có mã số học sinh ghi bên cạnh thì thầy hoàn toàn không xác nhận được bài này là của ai.', zh:'他在作业本上随手签了个名，字迹极其模糊，要不是旁边写着学号，老师根本无法确认这份作业出自谁之手。', py:'Tā zài zuòyèběn shang suíshǒu qiānle ge míng, zìjì jíqí móhu, yào bú shì pángbiān xiězhe xuéhào, lǎoshī gēnběn wúfǎ quèrèn zhè fèn zuòyè chūzì shéi zhī shǒu.', goiY:['要不是……','出自……之手','随手'], giai:'要不是 A，B = nếu không nhờ có A thì đã B (giả định ngược với thực tế); 签名 là động từ ly hợp nên nói 签了个名.'},
  {vi:'Mặc dù hiện nay vẫn chưa có bằng chứng cho thấy chơi điện thoại nhất định ảnh hưởng đến việc học, nhưng người ngày nào cũng lướt video đến nửa đêm thì hôm sau lên lớp chắc chắn uể oải.', zh:'尽管目前还没有证据证明玩手机一定会影响成绩，但每天刷视频到半夜的人，第二天上课肯定没精神。', py:'Jǐnguǎn mùqián hái méiyǒu zhèngjù zhèngmíng wán shǒujī yídìng huì yǐngxiǎng chéngjì, dàn měi tiān shuā shìpín dào bànyè de rén, dì-èr tiān shàngkè kěndìng méi jīngshen.', goiY:['尽管……但……','目前','证据'], giai:'尽管 = mặc dù (sự thật), vế sau dùng 但/却; "chưa có bằng chứng cho thấy…" dịch là 没有证据证明……, không cần dịch chữ "thấy".'},
  {vi:'Cô giáo điều chỉnh vị trí của vài yếu tố trên tấm áp phích, tuy chúng tôi gần như không nhận ra điểm khác, nhưng cả tác phẩm trông dễ chịu hơn hẳn, chứng tỏ bố cục cực kỳ quan trọng.', zh:'老师调整了海报上几个元素的位置，虽然我们几乎分辨不出来，整幅作品却舒服多了，可见布局极其重要。', py:'Lǎoshī tiáozhěngle hǎibào shang jǐ ge yuánsù de wèizhi, suīrán wǒmen jīhū fēnbiàn bu chūlái, zhěng fú zuòpǐn què shūfu duō le, kějiàn bùjú jíqí zhòngyào.', goiY:['虽然……却……','分辨不出来','可见'], giai:'虽然 và 却 có thể nằm ở hai vế khác chủ ngữ; 却 phải đứng sau chủ ngữ (整幅作品却……), không đứng đầu vế như 但是.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Với một số người, nghệ thuật trừu tượng không dễ thưởng thức như nghệ thuật cổ điển, bởi những mảng màu không theo quy tắc kia chẳng nhìn ra có ý nghĩa gì.', zh:'对有些人来说，抽象艺术没有古典艺术那么容易欣赏，因为那些不规则的色块看不出有什么意义。', py:'Duì yǒuxiē rén lái shuō, chōuxiàng yìshù méiyǒu gǔdiǎn yìshù nàme róngyì xīnshǎng, yīnwèi nàxiē bù guīzé de sèkuài kàn bu chū yǒu shénme yìyì.', goiY:['A 没有 B 那么…… = A không … bằng B','不规则 = không theo quy tắc','因为 = bởi vì'], giai:'A 没有 B 那么 + tính từ là câu so sánh kém: "A không … bằng B"; 看不出有什么意义 nên dịch thoáng "chẳng nhìn ra ý nghĩa gì".'},
  {vi:'Trong mắt một số người, tác phẩm của trường phái trừu tượng vô cùng bí ẩn, thậm chí xấu xí, nhưng có người lại cảm nhận được từ đó sự ca ngợi tự do.', zh:'抽象派的作品在有人看来极其神秘甚至丑陋，有人却从中感受到对自由的赞美。', py:'Chōuxiàngpài de zuòpǐn zài yǒu rén kànlái jíqí shénmì shènzhì chǒulòu, yǒu rén què cóng zhōng gǎnshòu dào duì zìyóu de zànměi.', goiY:['在……看来 = trong mắt…','甚至 = thậm chí','却 = lại (trái ngược)'], giai:'有人……，有人却…… đối lập hai nhóm người: "có người… nhưng có người lại…"; 在有人看来 dịch là "trong mắt một số người", không dịch từng chữ.'},
  {vi:'Trong thí nghiệm chỉ có một phần ba số tranh không ký tên, còn những bức còn lại đều ghi rõ danh tính tác giả.', zh:'实验中只有三分之一的画作没有签名，而其余的则都标明了作者的身份。', py:'Shíyàn zhōng zhǐyǒu sān fēn zhī yī de huàzuò méiyǒu qiānmíng, ér qíyú de zé dōu biāomíngle zuòzhě de shēnfèn.', goiY:['其余的 = phần còn lại','而……则…… = còn … thì','身份 = danh tính'], giai:'而其余的则…… đối chiếu với phần vừa nêu: "còn phần còn lại thì…"; 身份 ở đây là danh tính tác giả, không dịch là "thân phận".'},
  {vi:'Vì một số chữ ký bị cố ý ghi sai, tình nguyện viên tưởng đó là nét vẽ nguệch ngoạc tiện tay của tinh tinh, nhưng thực tế lại có thể là tác phẩm của một hoạ sĩ nổi tiếng.', zh:'由于一些签名被故意弄错了，志愿者以为是猩猩的随手涂鸦，实际上却可能出自著名艺术家之手。', py:'Yóuyú yìxiē qiānmíng bèi gùyì nòngcuò le, zhìyuànzhě yǐwéi shì xīngxing de suíshǒu túyā, shíjì shang què kěnéng chūzì zhùmíng yìshùjiā zhī shǒu.', goiY:['由于 = do, vì','以为 = tưởng (nhầm)','出自……之手 = do … làm ra'], giai:'以为 là "tưởng" (thường là tưởng sai), khác 认为 "cho rằng"; 却 ở vế cuối cho thấy sự thật trái với điều họ tưởng.'},
  {vi:'Có lẽ có người cho rằng tình nguyện viên hoàn toàn không phân biệt được, thế nhưng trong mọi lần thử nghiệm, những tác phẩm mọi người thích hơn đều do hoạ sĩ con người vung bút tạo nên.', zh:'也许有人认为志愿者根本分辨不出来，然而在每一次测试中，大家更喜欢的都是人类艺术家挥笔完成的作品。', py:'Yěxǔ yǒu rén rènwéi zhìyuànzhě gēnběn fēnbiàn bu chūlái, rán\'ér zài měi yí cì cèshì zhōng, dàjiā gèng xǐhuan de dōu shì rénlèi yìshùjiā huībǐ wánchéng de zuòpǐn.', goiY:['然而 = thế nhưng','分辨不出来 = không phân biệt được','挥笔 = vung bút (vẽ)'], giai:'然而 là từ văn viết, nghĩa như 但是, mở ra kết quả trái với dự đoán; 人类艺术家 = hoạ sĩ là con người (đối lập với tinh tinh, em bé).'},
  {vi:'Từ đó có thể thấy, tình nguyện viên cảm nhận được tâm huyết của người hoạ sĩ qua bức tranh, dù họ không giải thích được lý do.', zh:'由此可见，志愿者能够从画作中感知艺术家的用心，哪怕他们不能够解释其中的原因。', py:'Yóu cǐ kějiàn, zhìyuànzhě nénggòu cóng huàzuò zhōng gǎnzhī yìshùjiā de yòngxīn, nǎpà tāmen bù nénggòu jiěshì qízhōng de yuányīn.', goiY:['由此可见 = từ đó có thể thấy','哪怕 = dù cho','感知 = cảm nhận'], giai:'哪怕 đặt ở vế sau là cách bổ sung nhượng bộ: "dù (họ) không…"; 用心 ở đây là danh từ "tâm huyết, dụng tâm", không phải "chăm chỉ".'},
  {vi:'Sau khi nhà nghiên cứu thay đổi vị trí các yếu tố trong tranh, hầu như ai cũng thích bản gốc hơn, hơn nữa vùng não liên quan đến ý nghĩa cũng hoạt động kém đi.', zh:'研究者调整了画面元素的位置后，几乎每个人都更喜欢原作，而且大脑中有关含意的区域活跃性下降了。', py:'Yánjiūzhě tiáozhěngle huàmiàn yuánsù de wèizhi hòu, jīhū měi ge rén dōu gèng xǐhuan yuánzuò, érqiě dànǎo zhōng yǒuguān hányì de qūyù huóyuèxìng xiàjiàng le.', goiY:['……后 = sau khi…','而且 = hơn nữa','活跃性下降 = mức độ hoạt động giảm'], giai:'Cụm dài 大脑中有关含意的区域 là chủ ngữ — tìm trung tâm ngữ 区域 trước ("vùng"), rồi mới thêm định ngữ "liên quan đến ý nghĩa trong não".'},
  {vi:'Não bộ chúng ta đã chú ý đến bố cục của bản gốc; cho dù bản thân ta chưa cảm nhận rõ sự thật này, não vẫn nhận ra được dụng ý phía sau.', zh:'我们的大脑注意到了原作的布局，即使我们还没有清楚地感受到这个事实，大脑也能感知其背后的用意。', py:'Wǒmen de dànǎo zhùyì dàole yuánzuò de bùjú, jíshǐ wǒmen hái méiyǒu qīngchu de gǎnshòu dào zhège shìshí, dànǎo yě néng gǎnzhī qí bèihòu de yòngyì.', goiY:['即使……也…… = cho dù… vẫn…','布局 = bố cục','其背后的用意 = dụng ý phía sau nó'], giai:'即使 nêu giả thiết/nhượng bộ, 也 giữ nguyên kết quả; 其 là đại từ văn viết, tương đương "của nó".'},
  {vi:'Ít nhất hiện nay có thể nói thế này: chưa có bằng chứng nào cho thấy tinh tinh hay trẻ sơ sinh cũng làm được như vậy, chứng tỏ khả năng cảm nhận nghệ thuật của con người vẫn rất đặc biệt.', zh:'至少目前可以这么说：没有证据表明猩猩或者婴儿也能这样做，可见人类对艺术的感知还是十分独特的。', py:'Zhìshǎo mùqián kěyǐ zhème shuō: méiyǒu zhèngjù biǎomíng xīngxing huòzhě yīng\'ér yě néng zhèyàng zuò, kějiàn rénlèi duì yìshù de gǎnzhī háishi shífēn dútè de.', goiY:['没有证据表明 = chưa có bằng chứng cho thấy','目前 = hiện nay','可见 = chứng tỏ'], giai:'没有证据表明…… là cách nói thận trọng của văn khoa học; 可见 ở đầu vế cuối rút ra kết luận, dịch "chứng tỏ / có thể thấy".'},
  {vi:'Rốt cuộc não bộ cảm nhận nghệ thuật trừu tượng như thế nào vẫn là một đề tài thú vị; tuy vậy mỗi người đều có thể có cách hiểu riêng, điều đó vừa là thách thức, vừa là sự tự do.', zh:'大脑究竟如何感知抽象艺术，仍是一个有趣的话题；不过每个人都可以有自己的解读，这既是挑战，也是自由。', py:'Dànǎo jiūjìng rúhé gǎnzhī chōuxiàng yìshù, réng shì yí ge yǒuqù de huàtí; búguò měi ge rén dōu kěyǐ yǒu zìjǐ de jiědú, zhè jì shì tiǎozhàn, yě shì zìyóu.', goiY:['究竟 = rốt cuộc','既是……也是…… = vừa là… vừa là…','解读 = cách hiểu, lý giải'], giai:'Vế đầu 大脑究竟如何感知抽象艺术 là câu hỏi gián tiếp làm chủ ngữ; 既是……也是…… nối hai mặt song song của cùng một sự việc.'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết (theo 命题写作 của sách: 我喜爱的艺术)
// ══════════════════════════════════════════
var writingData = {
  words:['欣赏','作品','极其','哪怕','可见'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ về một loại hình nghệ thuật em yêu thích.',
  outline:[
    'Câu mở: giới thiệu loại hình nghệ thuật em yêu thích nhất.',
    'Thân 1: lần đầu tiếp xúc — thưởng thức tác phẩm của ai, cảm nhận thế nào (dùng 欣赏, 作品, 极其).',
    'Thân 2: em đã kiên trì luyện tập ra sao (dùng 哪怕……也……).',
    'Kết: kết quả và bài học rút ra (dùng 可见).'
  ],
  model:{
    zh:'我最喜爱的艺术是书法。小时候，我第一次在爷爷的书房里欣赏他的书法作品，就觉得那些字极其优美。从那以后，哪怕学习再忙，我每天也要练半个小时字。现在我的字进步了很多，老师还把我的作品挂在了教室的墙上。可见，只要坚持下去，就一定会有收获。',
    py:'Wǒ zuì xǐ\'ài de yìshù shì shūfǎ. Xiǎoshíhou, wǒ dì-yī cì zài yéye de shūfáng li xīnshǎng tā de shūfǎ zuòpǐn, jiù juéde nàxiē zì jíqí yōuměi. Cóng nà yǐhòu, nǎpà xuéxí zài máng, wǒ měi tiān yě yào liàn bàn ge xiǎoshí zì. Xiànzài wǒ de zì jìnbùle hěn duō, lǎoshī hái bǎ wǒ de zuòpǐn guà zàile jiàoshì de qiáng shang. Kějiàn, zhǐyào jiānchí xiàqu, jiù yídìng huì yǒu shōuhuò.',
    vn:'Loại hình nghệ thuật tôi yêu thích nhất là thư pháp. Hồi nhỏ, lần đầu tiên tôi được thưởng thức các tác phẩm thư pháp của ông trong phòng sách, tôi đã thấy những con chữ ấy đẹp vô cùng. Từ đó trở đi, dù học hành bận đến đâu, ngày nào tôi cũng luyện chữ nửa tiếng. Bây giờ chữ của tôi đã tiến bộ nhiều, cô giáo còn treo tác phẩm của tôi lên tường lớp học. Có thể thấy, chỉ cần kiên trì thì nhất định sẽ có thu hoạch.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '极其 có đứng trước tính từ HAI âm tiết không (极其优美, không viết 极其美)?',
    'Câu có 哪怕 đã có 也 / 都 ở vế sau chưa?',
    '可见 có đứng SAU phần căn cứ, mở đầu phần kết luận không?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈你喜爱的一种艺术。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'欣赏', loai:'động từ', cach:'欣赏音乐 · 欣赏作品 · 欣赏风景 · 很欣赏 + người (đánh giá cao)',
     sai:[{re:'欣赏(一本|这本)?(书|报纸|新闻)(?![法画])', sua:'看书 / 读报 / 看新闻', giai:'Đọc sách, đọc báo dùng 看 / 读. 欣赏 dùng cho nghệ thuật, phong cảnh: 欣赏音乐, 欣赏作品.'},
          {re:'(很|非常|十分)欣赏(风景|音乐|作品|画)', sua:'欣赏风景 / 很欣赏他', giai:'Khi 欣赏 = thưởng thức (phong cảnh, âm nhạc) thì không thêm 很. 很欣赏 chỉ dùng khi = đánh giá cao một NGƯỜI / phẩm chất.', nhe:true}]},
    {tu:'作品', loai:'danh từ', cach:'一件作品 · 一幅作品 · 艺术作品 · 代表作品',
     sai:[{re:'一(个|本|张)作品', sua:'一件作品 / 一幅作品', giai:'Lượng từ của 作品: 件 (chung), 幅 (tranh), 部 (sách, phim). 一个作品 nghe khẩu ngữ, 一本作品 sai.', nhe:true}]},
    {tu:'极其', loai:'phó từ', cach:'极其 + tính từ / động từ HAI âm tiết: 极其优美 · 极其重要',
     sai:[{re:'极其(美|好|大|小|丑|多|少|快|慢|难|高|低|累|忙|香)(的|[，。！？])', sua:'极其 + từ hai âm tiết / 非常 + từ một âm tiết', giai:'极其 chỉ bổ nghĩa cho từ HAI âm tiết trở lên (极其优美, 极其丑陋). Từ một âm tiết dùng 非常: 非常美.'},
          {re:'(很|非常|太|十分|特别)极其', sua:'极其……', giai:'极其 đã là phó từ mức độ, không chồng thêm 很 / 非常.'}]},
    {tu:'哪怕', loai:'liên từ', cach:'哪怕……，也 / 都……',
     sai:[{re:'哪怕[^。！？]*但是', sua:'哪怕……，也……', giai:'哪怕 là giả thiết nhượng bộ, vế sau dùng 也 / 都, không dùng 但是 (đó là cặp 虽然……但是……).'},
          {re:'哪怕[^。！？也都还]*[。！？]', sua:'哪怕……，(主语)也……', giai:'Câu có 哪怕 cần 也 / 都 / 还 ở vế sau để hô ứng.', nhe:true}]},
    {tu:'可见', loai:'liên từ', cach:'……，(由此)可见……',
     sai:[{re:'可见(了|过)', sua:'看见了 / 看到了', giai:'可见 là liên từ rút kết luận, không mang 了 / 过. Muốn nói "đã nhìn thấy" dùng 看见了.'},
          {re:'(我|你|他|她|我们)可见', sua:'……，可见…… / 我发现……', giai:'可见 không có chủ ngữ người đứng trước. Muốn nói "tôi nhận ra" dùng 我发现 / 我看出来.'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'极其 + Adj hai âm tiết', nhan:'极其', vd:'那些字极其优美，我看了很久。', khi:'Tả cảm nhận mạnh, giọng văn viết.'},
    {ten:'……，(由此)可见……', nhan:'可见', vd:'他每天都练两个小时，可见他对书法有多热爱。', khi:'Câu KẾT — rút kết luận từ điều vừa kể.'},
    {ten:'哪怕……，也……', nhan:'哪怕', vd:'哪怕学习再忙，我每天也要练半个小时字。', khi:'Nói về sự kiên trì, quyết tâm.'},
    {ten:'……，其余的……都……', nhan:'其余', vd:'我只会弹几首简单的曲子，其余的都还不会。', khi:'Nói về phần còn lại, so sánh.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'虽然抽象画很难看懂，但是我越看越喜欢。', khi:'Nêu khó khăn rồi lật lại — thân đoạn.'},
    {ten:'只要……，就……', nhan:'只要', vd:'只要坚持下去，就一定会有收获。', khi:'Câu KẾT — rút ra bài học.'},
    {ten:'一……就……', nhan:'一', vd:'我一听到古典音乐，心里就特别平静。', khi:'Kể phản ứng ngay lập tức khi tiếp xúc với nghệ thuật.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['给我留下了','上海','极其深刻的','印象'],
     dap:'上海给我留下了极其深刻的印象。',
     vn:'Thượng Hải để lại cho tôi ấn tượng vô cùng sâu sắc.',
     giai:'Câu 29 sách bài tập. Chủ ngữ 上海 → 给我 → 留下了 → định ngữ 极其深刻的 → tân ngữ 印象.'},
    {manh:['他也','哪怕是','不愿意再等了','一分钟'],
     dap:'哪怕是一分钟他也不愿意再等了。',
     vn:'Dù chỉ một phút anh ấy cũng không muốn chờ thêm nữa.',
     giai:'Câu 30 sách bài tập. 哪怕是 + điều kiện cực đoan (一分钟) đứng đầu, vế sau 他也…….'},
    {manh:['出自','成语“画龙点睛”','便','关于他的传说'],
     dap:'成语“画龙点睛”便出自关于他的传说。',
     vn:'Thành ngữ "vẽ rồng điểm mắt" chính là xuất phát từ truyền thuyết về ông ấy.',
     giai:'Câu 31 sách bài tập. Chủ ngữ → phó từ 便 → động từ 出自 → nguồn gốc.'},
    {manh:['签名','没有','三分之一的画作','作者'],
     dap:'三分之一的画作作者没有签名。',
     vn:'Một phần ba số tranh không có chữ ký của tác giả.',
     giai:'Định ngữ 三分之一的画作 + chủ ngữ 作者 → 没有 → 签名.'},
    {manh:['可见','一有时间就去看父母，','他很孝敬父母','他'],
     dap:'他一有时间就去看父母，可见他很孝敬父母。',
     vn:'Hễ có thời gian là anh ấy về thăm bố mẹ, có thể thấy anh ấy rất hiếu thảo.',
     giai:'Căn cứ (一……就…… — ôn HSK 4) đứng TRƯỚC, 可见 + kết luận đứng SAU.'},
    {manh:['被','画面元素','调整了','研究者'],
     dap:'画面元素被研究者调整了。',
     vn:'Các yếu tố trong bức tranh đã bị nhà nghiên cứu điều chỉnh.',
     giai:'Câu 被 (ôn HSK 3–4): đối tượng chịu tác động + 被 + người làm + động từ + 了.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 艺术形式
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (艺术形式). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 抽象 · 欣赏 · 作品 · 极其 · 可见 · 哪怕 · 分辨 · 业余.',
  questions:[
    {q_zh:'文章中说“每个人对抽象艺术可以有不同的解读”，你同意这种说法吗？',
     q_vn:'Bài viết nói "mỗi người có thể có cách hiểu khác nhau về nghệ thuật trừu tượng", em có đồng ý không?',
     hint:'Nêu rõ đồng ý hay không + một lý do, dùng 虽然……但是……',
     sample:'我同意。虽然抽象画看起来没有什么规则，但是每个人的经历不一样，看到的东西也不一样。有人觉得它极其神秘，有人却感受到了自由。',
     sample_vn:'Tôi đồng ý. Tuy tranh trừu tượng trông như không theo quy tắc nào, nhưng trải nghiệm của mỗi người khác nhau nên thứ họ nhìn thấy cũng khác. Có người thấy nó vô cùng bí ẩn, có người lại cảm nhận được sự tự do.',
     note:'Câu hỏi 你同意吗 → câu đầu tiên phải trả lời thẳng 我同意 / 我不太同意, sau đó mới giải thích.'},
    {q_zh:'你对哪些艺术形式感兴趣？',
     q_vn:'Em quan tâm đến những loại hình nghệ thuật nào?',
     hint:'Kể 2–3 loại hình, dùng 不仅……也…… hoặc 其余',
     sample:'我不仅喜欢音乐，也喜欢摄影。业余时间我常常去公园拍照。其余的艺术形式，比如京剧，我还不太了解。',
     sample_vn:'Tôi không chỉ thích âm nhạc mà còn thích nhiếp ảnh. Thời gian rảnh tôi thường ra công viên chụp ảnh. Các loại hình nghệ thuật còn lại, ví dụ Kinh kịch, tôi vẫn chưa hiểu lắm.',
     note:'Dùng được 其余 ở đây rất tự nhiên: nói những thứ mình thích trước, 其余的 sau.'},
    {q_zh:'请介绍一种你最喜欢的艺术，并说说喜欢的理由或你对它的看法。',
     q_vn:'Hãy giới thiệu một loại hình nghệ thuật em thích nhất và nói lý do em thích hoặc quan điểm của em về nó.',
     hint:'Giới thiệu + 2 lý do, dùng 极其 và 哪怕',
     sample:'我最喜欢越南的水上木偶戏。它的故事极其有趣，音乐也很美。哪怕看过很多次，我每次去看也还是觉得很新鲜。',
     sample_vn:'Tôi thích nhất múa rối nước Việt Nam. Câu chuyện của nó vô cùng thú vị, âm nhạc cũng rất hay. Dù đã xem nhiều lần, lần nào đi xem tôi vẫn thấy rất mới mẻ.',
     note:'Giới thiệu nghệ thuật của Việt Nam bằng tiếng Trung là đề tài HSKK rất hay gặp — nên chuẩn bị sẵn.'},
    {q_zh:'你觉得自己能分辨出大师的作品和孩子的涂鸦吗？为什么？',
     q_vn:'Em có nghĩ mình phân biệt được tác phẩm của bậc thầy và nét vẽ nguệch ngoạc của trẻ con không? Vì sao?',
     hint:'Trả lời + dẫn kết quả thí nghiệm trong bài, dùng 可见',
     sample:'我觉得我分辨不出来。不过课文里的实验说，大部分人更喜欢艺术家的作品，可见我们的大脑能感知艺术家的用心。',
     sample_vn:'Tôi nghĩ mình không phân biệt được. Nhưng thí nghiệm trong bài nói phần lớn mọi người thích tác phẩm của nghệ sĩ hơn, có thể thấy não bộ của chúng ta cảm nhận được tâm huyết của người nghệ sĩ.',
     note:'Dẫn lại nội dung bài khoá làm bằng chứng — câu trả lời sẽ thuyết phục hơn.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 18.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第18课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你拍的这些人物照片，构图、光线都很专业，真让人佩服！'},
            {sp:'男',zh:'还差得远呢，摄影只不过是我的业余爱好。'}],
     q:'男的说话时，态度怎么样？',qvn:'Khi nói, thái độ của người đàn ông thế nào?',
     opts:['很骄傲','很生气','很失望','很谦虚'],ans:3,
     why:'还差得远呢 (còn kém xa lắm) + 只不过是业余爱好 → khiêm tốn khi được khen.',
     words:['业余']},

    {n:2,
     lines:[{sp:'男',zh:'小李会好多种乐器，弹钢琴、拉二胡，真是多才多艺啊！'},
            {sp:'女',zh:'她还是我们合唱团的领唱呢。'}],
     q:'关于小李，下列哪项正确？',qvn:'Về Tiểu Lý, phương án nào đúng?',
     opts:['会好几种乐器','是钢琴老师','不会唱歌','刚参加合唱团'],ans:0,
     why:'会好多种乐器 = biết chơi nhiều loại nhạc cụ. Cô ấy còn là người lĩnh xướng (领唱) nên chắc chắn biết hát.',
     words:[]},

    {n:3,
     lines:[{sp:'女',zh:'刘主任，这次的展览我们准备的作品很丰富。'},
            {sp:'男',zh:'你们的设计方案我很满意。看得出是下了很大功夫的，辛苦啦！'}],
     q:'他们谈论的是什么事？',qvn:'Họ đang bàn về việc gì?',
     opts:['一次考试','一个展览','一场演出','一部电影'],ans:1,
     why:'这次的展览 + 作品 + 设计方案 → đang bàn về một cuộc triển lãm.',
     words:['作品','设计']},

    {n:4,
     lines:[{sp:'男',zh:'你怎么还去电视台，你唱的那首歌昨天不是录完了吗？'},
            {sp:'女',zh:'导演来电话，说昨天漏了一段，让我再去补录一下。'}],
     q:'女的为什么要去电视台？',qvn:'Vì sao người phụ nữ phải đến đài truyền hình?',
     opts:['去见导演','要补录一段','去参加面试','去取东西'],ans:1,
     why:'昨天漏了一段，让我再去补录 — hôm qua thiếu một đoạn, phải thu bổ sung. Đạo diễn chỉ GỌI ĐIỆN, không phải đi gặp.',
     words:[]},

    {n:5,
     lines:[{sp:'女',zh:'听说这次来复试的考生，有一大半专业基础课考试都没通过。'},
            {sp:'男',zh:'你别在这儿制造紧张气氛，我对咱们儿子很有信心。'}],
     q:'说话的人是什么关系？',qvn:'Hai người nói chuyện có quan hệ gì?',
     opts:['夫妻','同学','师生','同事'],ans:0,
     why:'咱们儿子 = con trai chúng ta → hai người là vợ chồng.',
     words:[]},

    {n:6,
     lines:[{sp:'男',zh:'这是什么画展啊？说实话，我一幅也看不懂。'},
            {sp:'女',zh:'你不懂就别乱说，这可都是抽象派大师的作品。'}],
     q:'女的认为男的怎么样？',qvn:'Người phụ nữ cho rằng người đàn ông thế nào?',
     opts:['很懂艺术','很会画画儿','不懂抽象艺术','说话很客气'],ans:2,
     why:'你不懂就别乱说 — anh không hiểu thì đừng nói linh tinh → cô cho rằng anh không hiểu tranh trừu tượng.',
     words:['幅','抽象','派','作品']},

    {n:7,
     lines:[{sp:'男',zh:'妈，您要喝点儿什么？冰箱里有冷饮。'},
            {sp:'女',zh:'不着急，结婚证呢？快让我看看！'},
            {sp:'男',zh:'瞧把您急的，好像去登记结婚的是您不是我。'},
            {sp:'女',zh:'我这不是不放心吗？你快点儿！'}],
     q:'妈妈着急要做什么？',qvn:'Người mẹ sốt ruột muốn làm gì?',
     opts:['喝冷饮','看结婚证','去登记结婚','给儿子打电话'],ans:1,
     why:'结婚证呢？快让我看看！— mẹ muốn xem giấy đăng ký kết hôn. Người đi đăng ký là con trai, không phải mẹ.',
     words:[]},

    {n:8,
     lines:[{sp:'男',zh:'现在很多影院都有网站，上网就可以订票，还可以挑选座位。'},
            {sp:'女',zh:'那我怎么付钱呢？'},
            {sp:'男',zh:'你可以通过网银付，也可以到影院取票时付。'},
            {sp:'女',zh:'这还真方便，我也来试试。'}],
     q:'女的接下来想要做什么？',qvn:'Tiếp theo người phụ nữ muốn làm gì?',
     opts:['去影院买票','上网订票','去银行取钱','在家看电影'],ans:1,
     why:'我也来试试 = tôi cũng thử xem — thử cách đặt vé qua mạng mà người đàn ông vừa giới thiệu.',
     words:[]}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Đi xem triển lãm tranh trừu tượng, bạn em than không hiểu gì.',
     a:{sp:'Bạn',zh:'这些画我一幅也看不懂，有什么好看的？',vn:'Mấy bức tranh này tớ chẳng hiểu bức nào, có gì hay mà xem?'},
     need:['Dùng 极其','Khuyên bạn nhìn theo cách khác'],
     sample:'抽象画是极其自由的艺术，你别想它画的是什么，感受一下颜色就行了。',
     samplePy:'Chōuxiànghuà shì jíqí zìyóu de yìshù, nǐ bié xiǎng tā huà de shì shénme, gǎnshòu yíxià yánsè jiù xíng le.',
     sampleVn:'Tranh trừu tượng là nghệ thuật vô cùng tự do, cậu đừng nghĩ nó vẽ cái gì, cảm nhận màu sắc là được rồi.',
     tip:'极其 + từ HAI âm tiết (自由, 神秘, 重要). Đừng viết 极其好.'},

    {scene:'Cả lớp đi dã ngoại, cô giáo chỉ thấy có hai bạn ở điểm tập trung.',
     a:{sp:'Cô',zh:'怎么只有你们两个人？',vn:'Sao chỉ có hai em thế này?'},
     need:['Dùng 其余','Giải thích các bạn còn lại đang ở đâu'],
     sample:'老师，其余的同学去买水了，马上就回来。',
     samplePy:'Lǎoshī, qíyú de tóngxué qù mǎi shuǐ le, mǎshàng jiù huílai.',
     sampleVn:'Thưa cô, các bạn còn lại đi mua nước rồi, sẽ về ngay ạ.',
     tip:'其余的 + N chỉ phần còn lại ngoài phần đã nói (hai em). Câu của sách: 其余的同学呢？'},

    {scene:'Bạn em thấy một cậu bạn cùng lớp ngày nào cũng ở lại phòng vẽ đến tối.',
     a:{sp:'Bạn',zh:'小林每天放学都在画室画到很晚。',vn:'Ngày nào tan học Tiểu Lâm cũng ở phòng vẽ đến rất muộn.'},
     need:['Dùng 可见','Rút ra một kết luận về Tiểu Lâm'],
     sample:'可见他真的很喜欢画画儿，以后说不定能成为画家呢。',
     samplePy:'Kějiàn tā zhēn de hěn xǐhuan huà huàr, yǐhòu shuō bu dìng néng chéngwéi huàjiā ne.',
     sampleVn:'Có thể thấy cậu ấy thật sự rất thích vẽ, sau này biết đâu lại thành hoạ sĩ ấy chứ.',
     tip:'Căn cứ đã có trong lời bạn nói, em chỉ cần 可见 + kết luận.'},

    {scene:'Mai là ngày nộp bài dự thi vẽ, bạn khuyên em đi ngủ sớm.',
     a:{sp:'Bạn',zh:'都十二点了，你先睡吧，明天再画。',vn:'Mười hai giờ rồi, cậu ngủ trước đi, mai vẽ tiếp.'},
     need:['Dùng 哪怕……也……','Thể hiện quyết tâm'],
     sample:'不行，明天就要交了。哪怕熬夜，我今天也得把这幅画画完。',
     samplePy:'Bù xíng, míngtiān jiù yào jiāo le. Nǎpà áoyè, wǒ jīntiān yě děi bǎ zhè fú huà huàwán.',
     sampleVn:'Không được, mai là phải nộp rồi. Dù có phải thức khuya, hôm nay tớ cũng phải vẽ xong bức này.',
     tip:'Câu này gần giống bài tập 3 của sách: 哪怕熬夜，我今天也得把这个计划做完. Kết hợp thêm câu 把 (ôn HSK 3–4).'},

    {scene:'Em không tìm thấy chìa khoá, mẹ hỏi em để đâu.',
     a:{sp:'Mẹ',zh:'钥匙呢？你放哪儿了？',vn:'Chìa khoá đâu? Con để đâu rồi?'},
     need:['Dùng 随手','Đoán nơi mình có thể đã để'],
     sample:'我也不记得了，可能进门的时候随手放在鞋柜上了。',
     samplePy:'Wǒ yě bú jìde le, kěnéng jìnmén de shíhou suíshǒu fàng zài xiéguì shang le.',
     sampleVn:'Con cũng không nhớ nữa, có lẽ lúc vào nhà con tiện tay để trên tủ giày rồi.',
     tip:'随手 + động từ tay (放, 关, 拿). Đừng nhầm với 随便 (tuỳ tiện).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết bài giới thiệu triển lãm cho báo tường của trường.',
     a:'这些画可奇怪了，谁也看不懂。',b:'这些抽象派作品在有人看来极其神秘，有人却从中感受到了自由。',better:'b',
     why:'Bài viết cho báo tường cần giọng VĂN VIẾT: 极其, 在有人看来, 从中感受到. Câu a là khẩu ngữ (可奇怪了, 谁也看不懂).'},

    {scene:'Em nói chuyện với bạn thân trong phòng tranh.',
     a:'这幅画可真好看！',b:'此幅作品极其优美，令人赞叹。',better:'a',
     why:'Với bạn thân, nói tự nhiên: 这幅画可真好看！ Câu b dùng 此, 令人赞叹 — văn viết, nói ra nghe như đọc thuyết minh.'},

    {scene:'Em trình bày kết quả thí nghiệm trong bài thuyết trình môn Sinh học.',
     a:'由此可见，人的大脑能够感知作品的布局。',b:'所以说啊，咱们的脑子挺厉害的。',better:'a',
     why:'Thuyết trình dùng giọng trang trọng: 由此可见, 能够感知. Câu b khẩu ngữ (咱们, 脑子, 挺厉害).'},

    {scene:'Bạn hỏi em muốn ăn gì, em thấy món nào cũng được.',
     a:'我对食物没有特别的要求，请您决定。',b:'随便，你点吧！',better:'b',
     why:'Với bạn bè, 随便 là cách nói tự nhiên. Câu a dùng 您, 请……决定 — quá khách sáo.'},

    {scene:'Thông báo của câu lạc bộ mỹ thuật dán trên bảng tin.',
     a:'画室这周不开，大家别来了啊！',b:'因画室布局调整，本周暂停开放。',better:'b',
     why:'Thông báo chính thức: ngắn gọn, văn viết (因, 布局调整, 暂停开放). Câu a như nhắn tin cho bạn.'},

    {scene:'Em xin lỗi cô giáo vì nộp bài muộn.',
     a:'老师，对不起，我没按时交作业，下次一定注意。',b:'哎呀，忘了忘了，明天给你吧。',better:'a',
     why:'Với thầy cô phải lễ phép, nhận lỗi và hứa sửa. Câu b quá suồng sã, dùng 你 với cô giáo.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 168)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Mở đầu', cue:'对有些人来说，抽象艺术没有……那么容易欣赏', words:['抽象','古典','欣赏','布','规则']},
    {step:'Hai cách nhìn', cue:'抽象派的作品在有人看来……，有人却……', words:['派','作品','洒','极其','神秘','丑陋','自由']},
    {step:'Thí nghiệm 1', cue:'研究者设计了……，每组中一幅……，另一幅……', words:['设计','组','幅','出自','业余','婴儿','猩猩','涂鸦']},
    {step:'Chữ ký', cue:'三分之一没有签名，其余的……，一些签名被……', words:['签','其余','身份','确认','随手']},
    {step:'Kết quả', cue:'在每一次测试中……，由此可见……', words:['分辨','挥','可见','哪怕']},
    {step:'Thí nghiệm 2', cue:'志愿者同时欣赏原作和……，研究者发现……', words:['元素','调整','位置','含意','区域','活跃','布局','事实','目前','证据']},
    {step:'Tổng kết', cue:'我们的大脑究竟如何感知抽象艺术……', words:['话题','自由']}
  ],
  checklist: [
    'Kể đủ bốn phần của sách chưa: mở đầu → thí nghiệm 1 → thí nghiệm 2 → tổng kết?',
    'Có dùng được ít nhất 12 từ mới của bài không?',
    'Có dùng 可见 khi nêu kết luận của thí nghiệm 1 không?',
    'Có nói được ý chính của thí nghiệm 2 (大脑注意到了原作的布局) không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 167) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['幅','规则','活跃','调整','业余','证据'],
   cau:[
     {s:'书房的墙上挂着一＿＿静物画。', dap:['幅']},
     {s:'因为销售情况不太好，我们正准备＿＿产品价格。', dap:['调整']},
     {s:'这块布上只有一些不＿＿的色块，我看不出来画的是什么。', dap:['规则']},
     {s:'我们只是一支＿＿的乐队，不够专业水平。', dap:['业余']},
     {s:'每次晚会他都是主持人，要靠他来＿＿气氛。', dap:['活跃']},
     {s:'如果没有可靠的＿＿，你就不能这么说。', dap:['证据']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'那个人长得＿＿丑。', opts:['非常','极其'], ans:0, giai:'丑 là tính từ một âm tiết → 非常. 极其 chỉ đứng trước từ hai âm tiết trở lên (极其丑陋).'},
     {s:'这次展出的一＿＿服装是由七＿＿戏服组成的。', opts:['组 … 套','套 … 组'], ans:0, giai:'Nhiều bộ trang phục hợp thành một nhóm → 一组服装; mỗi bộ trang phục là 一套 → 七套戏服.'},
     {s:'可能出门时我＿＿把钥匙放在门口的桌子上了。', opts:['随便','随手'], ans:1, giai:'Nhân lúc ra cửa thì tiện tay đặt chìa khoá → 随手. 随便 là tuỳ tiện, không theo quy tắc.'},
     {s:'我认为你们其实忽略了一个十分重要的＿＿。', opts:['事实','实际'], ans:0, giai:'Làm tân ngữ của 忽略, có định ngữ 重要的 → danh từ 事实. 实际 chủ yếu là tính từ / trạng ngữ (实际情况, 实际上).'}
   ]},
  {kieu:'vitri', de:'给括号里的词选择适当的位置', vn:'Chọn vị trí thích hợp cho từ trong ngoặc',
   cau:[
     {s:'我A对这个人B欣赏，我C认为他D很有才华。', tu:'极其', ans:'B', giai:'Phó từ mức độ 极其 đứng ngay trước động từ hai âm tiết 欣赏: 对这个人极其欣赏.'},
     {s:'A这是我B新C的作品，请您过目D。', tu:'设计', ans:'C', giai:'新 + 设计 + 的 làm định ngữ cho 作品: 我新设计的作品.'},
     {s:'我只认识A这B两个字，C都不认识D。', tu:'其余', ans:'C', giai:'其余 chỉ phần còn lại ngoài hai chữ đã nói, làm chủ ngữ trước 都: ……，其余都不认识.'},
     {s:'A熬夜B，我C今天D也得把这个计划做完。', tu:'哪怕', ans:'A', giai:'哪怕 đứng đầu vế nhượng bộ: 哪怕熬夜，我今天也得……'}
   ]}
];
