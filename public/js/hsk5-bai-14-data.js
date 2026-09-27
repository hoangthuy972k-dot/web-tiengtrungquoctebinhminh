// ══════════════════════════════════════════
// DATA — HSK5 Bài 14: 北京的四合院 (Tứ hợp viện Bắc Kinh)
// Unit 5 放眼世界 · Nguồn: HSK标准教程5上 (tr. 126–134) + 练习册 bài 14
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TỪ VỰNG — đủ 41 từ của bảng 生词 + 1 专名 (tr. 126–128)
// ══════════════════════════════════════════
var vocabData = [
  {
    n: 1, zh: '四合院', py: 'sìhéyuàn', pos: 'Danh từ', vn: 'tứ hợp viện (nhà bốn dãy quây quanh một sân)', hv: 'tứ hợp viện', em: '🏯', lesson: 1,
    explain: ['Kiểu nhà truyền thống ở vùng Hoa Bắc: bốn dãy nhà ở bốn phía đông, tây, nam, bắc quây lại, ở giữa là một khoảng sân vuông.'],
    usage: 'Lượng từ: 一座四合院. Hay đi với 住在……里, 参观, 老北京.',
    collo: ['北京四合院', '一座四合院', '住在四合院里', '参观四合院'],
    ex_zh: '北京四合院十分具有代表性。', ex_py: 'Běijīng sìhéyuàn shífēn jùyǒu dàibiǎoxìng.', ex_vn: 'Tứ hợp viện Bắc Kinh rất tiêu biểu.',
    exList: [
      {zh:'北京四合院十分具有代表性。', py:'Běijīng sìhéyuàn shífēn jùyǒu dàibiǎoxìng.', vn:'Tứ hợp viện Bắc Kinh rất tiêu biểu.'},
      {zh:'我姥姥一辈子都住在四合院里。', py:'Wǒ lǎolao yíbèizi dōu zhù zài sìhéyuàn li.', vn:'Bà ngoại tôi cả đời sống trong tứ hợp viện.'},
      {zh:'去北京旅游的时候，我们参观了一座老四合院。', py:'Qù Běijīng lǚyóu de shíhou, wǒmen cānguānle yí zuò lǎo sìhéyuàn.', vn:'Khi đi du lịch Bắc Kinh, chúng tôi đã tham quan một toà tứ hợp viện cổ.'}
    ],
    colloFull: [
      {zh:'北京四合院', py:'Běijīng sìhéyuàn', vn:'tứ hợp viện Bắc Kinh'},
      {zh:'一座四合院', py:'yí zuò sìhéyuàn', vn:'một toà tứ hợp viện'},
      {zh:'住在四合院里', py:'zhù zài sìhéyuàn li', vn:'sống trong tứ hợp viện'},
      {zh:'参观四合院', py:'cānguān sìhéyuàn', vn:'tham quan tứ hợp viện'},
      {zh:'老四合院', py:'lǎo sìhéyuàn', vn:'tứ hợp viện cổ'}
    ],
    patterns: [
      {s:'一座 + 四合院', m:'Một toà tứ hợp viện (lượng từ 座 cho công trình kiến trúc)'},
      {s:'住在 + 四合院 + 里', m:'Sống trong tứ hợp viện'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Toà tứ hợp viện đó đã bị dỡ bỏ rồi.', answer:'那座四合院已经被拆了。', answerPy:'Nà zuò sìhéyuàn yǐjīng bèi chāi le.', note:'那 + 座 + 四合院; câu bị động 被 + V + 了.', pair:'被'},
      {promptLang:'vi', prompt:'Tôi chưa từng ở trong tứ hợp viện.', answer:'我从来没在四合院里住过。', answerPy:'Wǒ cónglái méi zài sìhéyuàn li zhùguo.', note:'从来没 + 在……里 + V + 过.', pair:'从来没……过'}
    ]
  },
  {
    n: 2, zh: '民居', py: 'mínjū', pos: 'Danh từ', vn: 'nhà ở của thường dân (nhà dân gian)', hv: 'dân cư', em: '🏘️', lesson: 1,
    explain: ['Nhà ở của người dân bình thường, mang nét kiến trúc riêng của từng vùng — khác với cung điện, chùa miếu.'],
    usage: 'Hay đi với tên vùng, dân tộc: 华北民居, 汉族民居, 传统民居.',
    collo: ['传统民居', '汉族民居', '华北民居', '民居建筑'],
    ex_zh: '四合院是中国华北地区民居中的一种组合建筑形式。', ex_py: 'Sìhéyuàn shì Zhōngguó Huáběi dìqū mínjū zhōng de yì zhǒng zǔhé jiànzhù xíngshì.', ex_vn: 'Tứ hợp viện là một kiểu kiến trúc tổ hợp trong nhà ở dân gian vùng Hoa Bắc, Trung Quốc.',
    exList: [
      {zh:'四合院是中国华北地区民居中的一种组合建筑形式。', py:'Sìhéyuàn shì Zhōngguó Huáběi dìqū mínjū zhōng de yì zhǒng zǔhé jiànzhù xíngshì.', vn:'Tứ hợp viện là một kiểu kiến trúc tổ hợp trong nhà ở dân gian vùng Hoa Bắc, Trung Quốc.'},
      {zh:'这个小镇保留了很多传统民居。', py:'Zhège xiǎozhèn bǎoliúle hěn duō chuántǒng mínjū.', vn:'Thị trấn nhỏ này còn giữ lại rất nhiều nhà dân truyền thống.'},
      {zh:'越来越多的游客来这里参观古老的民居。', py:'Yuè lái yuè duō de yóukè lái zhèli cānguān gǔlǎo de mínjū.', vn:'Ngày càng nhiều du khách đến đây tham quan những ngôi nhà dân cổ.'}
    ],
    colloFull: [
      {zh:'传统民居', py:'chuántǒng mínjū', vn:'nhà dân truyền thống'},
      {zh:'汉族民居', py:'Hànzú mínjū', vn:'nhà ở của người Hán'},
      {zh:'华北民居', py:'Huáběi mínjū', vn:'nhà dân vùng Hoa Bắc'},
      {zh:'民居建筑', py:'mínjū jiànzhù', vn:'kiến trúc nhà ở dân gian'},
      {zh:'古老的民居', py:'gǔlǎo de mínjū', vn:'ngôi nhà dân cổ'}
    ],
    patterns: [{s:'Vùng / dân tộc + 民居', m:'Nhà ở dân gian của vùng, dân tộc nào đó'}],
    checkList: [
      {promptLang:'vi', prompt:'Những ngôi nhà dân này được xây vào thời Minh.', answer:'这些民居是明朝建的。', answerPy:'Zhèxiē mínjū shì Míngcháo jiàn de.', note:'是 + thời gian + V + 的: nhấn mạnh thời điểm của việc đã xảy ra.', pair:'是……的'},
      {promptLang:'vi', prompt:'Nhà dân truyền thống ngày càng ít đi.', answer:'传统民居越来越少了。', answerPy:'Chuántǒng mínjū yuè lái yuè shǎo le.', note:'越来越 + Adj + 了: sự thay đổi dần.', pair:'越来越'}
    ]
  },
  {
    n: 3, zh: '组合', py: 'zǔhé', pos: 'Động từ / Danh từ', vn: 'kết hợp, ghép lại; tổ hợp', hv: 'tổ hợp', em: '🧩', lesson: 1,
    explain: ['Động từ: ghép nhiều bộ phận lại với nhau thành một chỉnh thể.', 'Danh từ: cái được ghép lại, một tổ hợp (một nhóm nhạc cũng gọi là 组合).'],
    usage: '组合 + 起来 / 到一起 / 成…… (theo bảng 词语搭配 của sách). Danh từ: 一种组合, 音乐组合.',
    collo: ['组合起来', '组合到一起', '组合成', '组合建筑', '音乐组合'],
    ex_zh: '这本书是由三个部分组合起来的。', ex_py: 'Zhè běn shū shì yóu sān ge bùfen zǔhé qǐlai de.', ex_vn: 'Cuốn sách này do ba phần ghép lại mà thành.',
    exList: [
      {zh:'这本书是由三个部分组合起来的。', py:'Zhè běn shū shì yóu sān ge bùfen zǔhé qǐlai de.', vn:'Cuốn sách này do ba phần ghép lại mà thành.'},
      {zh:'四合院是一种组合建筑形式。', py:'Sìhéyuàn shì yì zhǒng zǔhé jiànzhù xíngshì.', vn:'Tứ hợp viện là một kiểu kiến trúc tổ hợp.'},
      {zh:'请把这几个词组合成一个句子。', py:'Qǐng bǎ zhè jǐ ge cí zǔhé chéng yí ge jùzi.', vn:'Hãy ghép mấy từ này thành một câu.'}
    ],
    colloFull: [
      {zh:'组合起来', py:'zǔhé qǐlai', vn:'ghép lại'},
      {zh:'组合到一起', py:'zǔhé dào yìqǐ', vn:'ghép lại với nhau'},
      {zh:'组合成', py:'zǔhé chéng', vn:'ghép thành'},
      {zh:'组合建筑', py:'zǔhé jiànzhù', vn:'kiến trúc tổ hợp'},
      {zh:'音乐组合', py:'yīnyuè zǔhé', vn:'nhóm nhạc'}
    ],
    patterns: [
      {s:'把 A 和 B + 组合到一起', m:'Ghép A và B lại với nhau'},
      {s:'由…… + 组合起来', m:'Do … ghép lại mà thành'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Hãy ghép những bức ảnh này lại với nhau.', answer:'请把这些照片组合到一起。', answerPy:'Qǐng bǎ zhèxiē zhàopiàn zǔhé dào yìqǐ.', note:'把 + tân ngữ + 组合到一起.', pair:'把'},
      {promptLang:'vi', prompt:'Bài hát này là do một nhóm nhạc hát.', answer:'这首歌是一个音乐组合唱的。', answerPy:'Zhè shǒu gē shì yí ge yīnyuè zǔhé chàng de.', note:'组合 làm danh từ: nhóm nhạc; 是……的 nhấn mạnh người thực hiện.', pair:'是……的'}
    ]
  },
  {
    n: 4, zh: '建筑', py: 'jiànzhù', pos: 'Danh từ', vn: 'kiến trúc, công trình kiến trúc', hv: 'kiến trúc', em: '🏛️', lesson: 1,
    explain: ['Công trình được xây nên: nhà cửa, cầu, tháp…', 'Còn là ngành kiến trúc (建筑师 = kiến trúc sư); làm động từ “xây dựng” chỉ gặp trong văn viết.'],
    usage: 'Lượng từ: 一座建筑; 建筑 + 风格 / 形式 / 师; 标志性建筑 (công trình biểu tượng).',
    collo: ['古老的建筑', '建筑形式', '建筑风格', '标志性建筑', '建筑师'],
    ex_zh: '这就是我们家乡的标志性建筑。', ex_py: 'Zhè jiù shì wǒmen jiāxiāng de biāozhìxìng jiànzhù.', ex_vn: 'Đây chính là công trình biểu tượng của quê hương chúng tôi.',
    exList: [
      {zh:'这就是我们家乡的标志性建筑。', py:'Zhè jiù shì wǒmen jiāxiāng de biāozhìxìng jiànzhù.', vn:'Đây chính là công trình biểu tượng của quê hương chúng tôi.'},
      {zh:'这些建筑已经有三百多年历史了。', py:'Zhèxiē jiànzhù yǐjīng yǒu sānbǎi duō nián lìshǐ le.', vn:'Những công trình này đã có hơn ba trăm năm lịch sử.'},
      {zh:'我哥哥大学学的是建筑，现在是一名建筑师。', py:'Wǒ gēge dàxué xué de shì jiànzhù, xiànzài shì yì míng jiànzhùshī.', vn:'Anh trai tôi học ngành kiến trúc ở đại học, giờ là một kiến trúc sư.'}
    ],
    colloFull: [
      {zh:'古老的建筑', py:'gǔlǎo de jiànzhù', vn:'công trình cổ'},
      {zh:'建筑形式', py:'jiànzhù xíngshì', vn:'hình thức kiến trúc'},
      {zh:'建筑风格', py:'jiànzhù fēnggé', vn:'phong cách kiến trúc'},
      {zh:'标志性建筑', py:'biāozhìxìng jiànzhù', vn:'công trình biểu tượng'},
      {zh:'建筑师', py:'jiànzhùshī', vn:'kiến trúc sư'}
    ],
    patterns: [
      {s:'一座 + (Adj 的) + 建筑', m:'Một công trình kiến trúc …'},
      {s:'建筑 + 风格 / 形式', m:'Phong cách / hình thức kiến trúc'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Những công trình cổ này đã bị phá bỏ rồi.', answer:'这些古老的建筑被拆掉了。', answerPy:'Zhèxiē gǔlǎo de jiànzhù bèi chāidiào le.', note:'Câu bị động 被 + V + 掉了 (mất đi).', pair:'被'},
      {promptLang:'vi', prompt:'Không chỉ người Trung Quốc thích kiến trúc này, người nước ngoài cũng rất thích.', answer:'不仅中国人喜欢这种建筑，外国人也很喜欢。', answerPy:'Bùjǐn Zhōngguórén xǐhuan zhè zhǒng jiànzhù, wàiguórén yě hěn xǐhuan.', note:'这种 + 建筑: một loại kiến trúc; 不仅……也…… nối hai chủ ngữ.', pair:'不仅……也'}
    ]
  },
  {
    n: 5, zh: '形式', py: 'xíngshì', pos: 'Danh từ', vn: 'hình thức', hv: 'hình thức', em: '🔷', lesson: 1,
    explain: ['Hình dạng, cách thức bên ngoài của sự vật — thường đặt đối lập với 内容 (nội dung).'],
    usage: 'N + 形式: 建筑形式, 表现形式; 形式多样; 以……的形式 + V.',
    collo: ['建筑形式', '表现形式', '形式多样', '内容和形式', '以……的形式'],
    ex_zh: '相对而言，我觉得功能比形式重要。', ex_py: 'Xiāngduì ér yán, wǒ juéde gōngnéng bǐ xíngshì zhòngyào.', ex_vn: 'Nói một cách tương đối, tôi thấy chức năng quan trọng hơn hình thức.',
    exList: [
      {zh:'相对而言，我觉得功能比形式重要。', py:'Xiāngduì ér yán, wǒ juéde gōngnéng bǐ xíngshì zhòngyào.', vn:'Nói một cách tương đối, tôi thấy chức năng quan trọng hơn hình thức.'},
      {zh:'这次晚会的节目形式多样，大家都很喜欢。', py:'Zhè cì wǎnhuì de jiémù xíngshì duōyàng, dàjiā dōu hěn xǐhuan.', vn:'Tiết mục của buổi dạ hội lần này có hình thức đa dạng, ai cũng thích.'},
      {zh:'老师让我们以小组的形式完成作业。', py:'Lǎoshī ràng wǒmen yǐ xiǎozǔ de xíngshì wánchéng zuòyè.', vn:'Thầy bảo chúng tôi hoàn thành bài tập theo hình thức nhóm.'}
    ],
    colloFull: [
      {zh:'建筑形式', py:'jiànzhù xíngshì', vn:'hình thức kiến trúc'},
      {zh:'表现形式', py:'biǎoxiàn xíngshì', vn:'hình thức thể hiện'},
      {zh:'形式多样', py:'xíngshì duōyàng', vn:'hình thức đa dạng'},
      {zh:'内容和形式', py:'nèiróng hé xíngshì', vn:'nội dung và hình thức'},
      {zh:'以……的形式', py:'yǐ……de xíngshì', vn:'theo hình thức …'}
    ],
    patterns: [
      {s:'以 + N + 的形式 + V', m:'Làm việc gì theo hình thức …'},
      {s:'A 比 形式 + 重要', m:'So sánh: cái gì quan trọng hơn hình thức'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chỉ cần nội dung hay thì hình thức đơn giản một chút cũng không sao.', answer:'只要内容好，形式简单一点儿就没关系。', answerPy:'Zhǐyào nèiróng hǎo, xíngshì jiǎndān yìdiǎnr jiù méi guānxi.', note:'形式 đặt đối lập với 内容; 只要……就…… nêu điều kiện đủ.', pair:'只要……就'},
      {promptLang:'vi', prompt:'Tuy hình thức không mới nhưng nội dung rất thú vị.', answer:'虽然形式不新，但是内容很有意思。', answerPy:'Suīrán xíngshì bù xīn, dànshì nèiróng hěn yǒu yìsi.', note:'虽然……但是…… nối hai vế trái chiều: hình thức ↔ nội dung.', pair:'虽然……但是'}
    ]
  },
  {
    n: 6, zh: '所谓', py: 'suǒwèi', pos: 'Tính từ', vn: 'cái gọi là, thường gọi là', hv: 'sở vị', em: '💬', lesson: 1,
    explain: ['① Cái thường gọi là — dùng để đưa ra một từ ngữ cần giải thích.', '② Cái mà ai đó gọi là — thường có 的 và ngoặc kép, hàm ý không đồng ý, không thừa nhận.'],
    usage: '所谓 + từ cần giải thích，(就是)…… · ……所谓的“……” (hơi mỉa mai).',
    collo: ['所谓四合', '所谓的“新闻”', '所谓的专家', '这就是所谓的'],
    ex_zh: '很多时候，烦恼是自己找来的，这就是所谓的“自寻烦恼”。', ex_py: 'Hěn duō shíhou, fánnǎo shì zìjǐ zhǎolái de, zhè jiù shì suǒwèi de “zì xún fánnǎo”.', ex_vn: 'Nhiều khi phiền não là do mình tự tìm đến, đó chính là cái gọi là “tự chuốc phiền não”.',
    exList: [
      {zh:'很多时候，烦恼是自己找来的，这就是所谓的“自寻烦恼”。', py:'Hěn duō shíhou, fánnǎo shì zìjǐ zhǎolái de, zhè jiù shì suǒwèi de “zì xún fánnǎo”.', vn:'Nhiều khi phiền não là do mình tự tìm đến, đó chính là cái gọi là “tự chuốc phiền não”.'},
      {zh:'他所谓的“新闻”，其实我们早就知道了！', py:'Tā suǒwèi de “xīnwén”, qíshí wǒmen zǎo jiù zhīdao le!', vn:'Cái “tin mới” mà anh ta nói, thật ra chúng tôi biết từ lâu rồi!'},
      {zh:'现在市场上所谓的“健康食品”其实没有统一的标准。', py:'Xiànzài shìchǎng shang suǒwèi de “jiànkāng shípǐn” qíshí méiyǒu tǒngyī de biāozhǔn.', vn:'Cái gọi là “thực phẩm sức khoẻ” trên thị trường hiện nay thật ra không có tiêu chuẩn thống nhất.'}
    ],
    colloFull: [
      {zh:'所谓四合', py:'suǒwèi sìhé', vn:'cái gọi là “tứ hợp”'},
      {zh:'所谓的“新闻”', py:'suǒwèi de “xīnwén”', vn:'cái gọi là “tin mới” (mỉa mai)'},
      {zh:'所谓的专家', py:'suǒwèi de zhuānjiā', vn:'cái gọi là chuyên gia'},
      {zh:'这就是所谓的', py:'zhè jiù shì suǒwèi de', vn:'đây chính là cái gọi là'},
      {zh:'所谓……，就是……', py:'suǒwèi……, jiù shì……', vn:'cái gọi là … chính là …'}
    ],
    patterns: [
      {s:'所谓 + X，(就是)……', m:'Giải thích một từ ngữ: cái gọi là X là …'},
      {s:'Người + 所谓的“X”', m:'Cái X mà ai đó nói (không đồng ý, mỉa mai)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Cái gọi là “bạn tốt” của anh ta, ngay cả một lần cũng chưa giúp anh ta.', answer:'他所谓的“好朋友”，连一次忙都没帮过他。', answerPy:'Tā suǒwèi de “hǎo péngyou”, lián yí cì máng dōu méi bāngguo tā.', note:'所谓的“……” hàm ý mỉa mai; 连 + số lượng nhỏ + 都没…… nhấn mạnh.', pair:'连……都'},
      {promptLang:'vi', prompt:'Cái “tin mới” mà anh ta nói là do Tiểu Lý kể cho anh ta.', answer:'他所谓的“新闻”是小李告诉他的。', answerPy:'Tā suǒwèi de “xīnwén” shì Xiǎo Lǐ gàosu tā de.', note:'是 + người thực hiện + V + 的.', pair:'是……的'}
    ]
  },
  {
    n: 7, zh: '方', py: 'fāng', pos: 'Tính từ', vn: 'vuông', hv: 'phương', em: '⬛', lesson: 1,
    explain: ['Có hình vuông hoặc hình chữ nhật (bốn góc vuông).'],
    usage: 'Thường làm định ngữ: 方形, 方桌; làm vị ngữ: ……是方的. 长方形 = hình chữ nhật, 正方形 = hình vuông.',
    collo: ['方形', '方桌', '长方形', '正方形'],
    ex_zh: '四面房屋围在一起，中间形成一个方形的院子。', ex_py: 'Sìmiàn fángwū wéi zài yìqǐ, zhōngjiān xíngchéng yí ge fāngxíng de yuànzi.', ex_vn: 'Nhà cửa bốn phía quây lại với nhau, ở giữa tạo thành một khoảng sân vuông.',
    exList: [
      {zh:'四面房屋围在一起，中间形成一个方形的院子。', py:'Sìmiàn fángwū wéi zài yìqǐ, zhōngjiān xíngchéng yí ge fāngxíng de yuànzi.', vn:'Nhà cửa bốn phía quây lại với nhau, ở giữa tạo thành một khoảng sân vuông.'},
      {zh:'奶奶家有一张老式的方桌。', py:'Nǎinai jiā yǒu yì zhāng lǎoshì de fāngzhuō.', vn:'Nhà bà nội có một chiếc bàn vuông kiểu cũ.'},
      {zh:'这块蛋糕是方的，那块是圆的。', py:'Zhè kuài dàngāo shì fāng de, nà kuài shì yuán de.', vn:'Miếng bánh này hình vuông, miếng kia hình tròn.'}
    ],
    colloFull: [
      {zh:'方形', py:'fāngxíng', vn:'hình vuông'},
      {zh:'方桌', py:'fāngzhuō', vn:'bàn vuông'},
      {zh:'长方形', py:'chángfāngxíng', vn:'hình chữ nhật'},
      {zh:'正方形', py:'zhèngfāngxíng', vn:'hình vuông'},
      {zh:'方方正正', py:'fāngfāngzhèngzhèng', vn:'vuông vức'}
    ],
    patterns: [
      {s:'方 + N (方形 / 方桌)', m:'Vật hình vuông'},
      {s:'N + 是方的', m:'Cái gì có hình vuông'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Hãy cắt tờ giấy này thành hình vuông.', answer:'请把这张纸剪成方形。', answerPy:'Qǐng bǎ zhè zhāng zhǐ jiǎnchéng fāngxíng.', note:'把 + tân ngữ + V + 成 + kết quả.', pair:'把'},
      {promptLang:'vi', prompt:'Chiếc bàn vuông này là ông nội tự làm.', answer:'这张方桌是爷爷自己做的。', answerPy:'Zhè zhāng fāngzhuō shì yéye zìjǐ zuò de.', note:'Lượng từ 张 cho bàn; 是……的 nhấn mạnh người làm.', pair:'是……的'}
    ]
  },
  {
    n: 8, zh: '广泛', py: 'guǎngfàn', pos: 'Tính từ', vn: 'rộng rãi, rộng khắp', hv: 'quảng phiếm', em: '🌐', lesson: 1,
    explain: ['Phạm vi rộng, phổ biến khắp nơi, liên quan đến nhiều mặt.'],
    usage: 'Làm trạng ngữ: 广泛(地) + 调查 / 研究 / 应用 / 流行 / 分布 / 关注; làm vị ngữ: 兴趣 / 爱好 / 知识 / 内容 + 很广泛.',
    collo: ['分布广泛', '广泛调查', '广泛应用', '广泛关注', '兴趣广泛'],
    ex_zh: '四合院在中国汉族民居中历史最悠久，分布最广泛。', ex_py: 'Sìhéyuàn zài Zhōngguó Hànzú mínjū zhōng lìshǐ zuì yōujiǔ, fēnbù zuì guǎngfàn.', ex_vn: 'Trong nhà ở dân gian của người Hán, tứ hợp viện có lịch sử lâu đời nhất, phân bố rộng rãi nhất.',
    exList: [
      {zh:'四合院在中国汉族民居中历史最悠久，分布最广泛。', py:'Sìhéyuàn zài Zhōngguó Hànzú mínjū zhōng lìshǐ zuì yōujiǔ, fēnbù zuì guǎngfàn.', vn:'Trong nhà ở dân gian của người Hán, tứ hợp viện có lịch sử lâu đời nhất, phân bố rộng rãi nhất.'},
      {zh:'这个问题需要进行广泛调查，然后才能做出决定。', py:'Zhège wèntí xūyào jìnxíng guǎngfàn diàochá, ránhòu cái néng zuòchū juédìng.', vn:'Vấn đề này cần điều tra rộng rãi rồi mới đưa ra quyết định được.'},
      {zh:'他的兴趣爱好非常广泛，跟谁都能聊到一块儿。', py:'Tā de xìngqù àihào fēicháng guǎngfàn, gēn shéi dōu néng liáo dào yíkuàir.', vn:'Sở thích của anh ấy rất rộng, nói chuyện với ai cũng hợp.'}
    ],
    colloFull: [
      {zh:'分布广泛', py:'fēnbù guǎngfàn', vn:'phân bố rộng rãi'},
      {zh:'广泛调查', py:'guǎngfàn diàochá', vn:'điều tra rộng rãi'},
      {zh:'广泛应用', py:'guǎngfàn yìngyòng', vn:'ứng dụng rộng rãi'},
      {zh:'广泛关注', py:'guǎngfàn guānzhù', vn:'sự quan tâm rộng rãi'},
      {zh:'兴趣广泛', py:'xìngqù guǎngfàn', vn:'sở thích rộng'}
    ],
    patterns: [
      {s:'广泛(地) + V (调查 / 应用 / 关注)', m:'Làm việc gì trên phạm vi rộng'},
      {s:'兴趣 / 知识 + 很广泛', m:'Sở thích / kiến thức rộng'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chuyện này nhận được sự quan tâm rộng rãi, ngay cả báo nước ngoài cũng đưa tin.', answer:'这件事受到了广泛关注，连外国报纸都报道了。', answerPy:'Zhè jiàn shì shòudàole guǎngfàn guānzhù, lián wàiguó bàozhǐ dōu bàodào le.', note:'受到 + 广泛关注; 连……都…… nhấn mạnh mức độ.', pair:'连……都'},
      {promptLang:'vi', prompt:'Điện thoại thông minh được ứng dụng ngày càng rộng rãi.', answer:'智能手机的应用越来越广泛。', answerPy:'Zhìnéng shǒujī de yìngyòng yuè lái yuè guǎngfàn.', note:'广泛 làm vị ngữ sau 越来越.', pair:'越来越'}
    ]
  },
  {
    n: 9, zh: '样式', py: 'yàngshì', pos: 'Danh từ', vn: 'kiểu dáng, mẫu mã', hv: 'dạng thức', em: '👗', lesson: 1,
    explain: ['Hình dạng, kiểu mẫu bên ngoài của đồ vật, quần áo, nhà cửa…'],
    usage: '样式 + 好看 / 简单 / 新; 一套固定的样式; 各种样式的 + N.',
    collo: ['固定的样式', '样式好看', '各种样式', '衣服的样式'],
    ex_zh: '传统的北京四合院都有一套固定的样式。', ex_py: 'Chuántǒng de Běijīng sìhéyuàn dōu yǒu yí tào gùdìng de yàngshì.', ex_vn: 'Tứ hợp viện Bắc Kinh truyền thống đều có một kiểu dáng cố định.',
    exList: [
      {zh:'传统的北京四合院都有一套固定的样式。', py:'Chuántǒng de Běijīng sìhéyuàn dōu yǒu yí tào gùdìng de yàngshì.', vn:'Tứ hợp viện Bắc Kinh truyền thống đều có một kiểu dáng cố định.'},
      {zh:'这台空调功能倒是挺强大，但是样式不太适合我们家。', py:'Zhè tái kōngtiáo gōngnéng dàoshì tǐng qiángdà, dànshì yàngshì bú tài shìhé wǒmen jiā.', vn:'Cái điều hoà này chức năng thì mạnh đấy, nhưng kiểu dáng không hợp với nhà mình lắm.'},
      {zh:'北京四合院的样式很具有代表性。', py:'Běijīng sìhéyuàn de yàngshì hěn jùyǒu dàibiǎoxìng.', vn:'Kiểu dáng của tứ hợp viện Bắc Kinh rất tiêu biểu.'}
    ],
    colloFull: [
      {zh:'固定的样式', py:'gùdìng de yàngshì', vn:'kiểu dáng cố định'},
      {zh:'样式好看', py:'yàngshì hǎokàn', vn:'kiểu dáng đẹp'},
      {zh:'各种样式', py:'gè zhǒng yàngshì', vn:'đủ kiểu dáng'},
      {zh:'衣服的样式', py:'yīfu de yàngshì', vn:'kiểu dáng quần áo'},
      {zh:'样式简单', py:'yàngshì jiǎndān', vn:'kiểu dáng đơn giản'}
    ],
    patterns: [
      {s:'N + 的样式 + Adj', m:'Kiểu dáng của cái gì thế nào'},
      {s:'有一套固定的样式', m:'Có một kiểu mẫu cố định (câu trong bài)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Mẹ vừa nhìn thấy kiểu dáng chiếc áo này là thích ngay.', answer:'妈妈一看到这件衣服的样式就喜欢上了。', answerPy:'Māma yí kàndào zhè jiàn yīfu de yàngshì jiù xǐhuan shang le.', note:'一……就…… hai việc nối liền; 喜欢上 = bắt đầu thích.', pair:'一……就'},
      {promptLang:'vi', prompt:'Chỉ cần kiểu dáng đẹp là tôi mua.', answer:'只要样式好看，我就买。', answerPy:'Zhǐyào yàngshì hǎokàn, wǒ jiù mǎi.', note:'只要 + điều kiện，Sub + 就 + V.', pair:'只要……就'}
    ]
  },
  {
    n: 10, zh: '代表', py: 'dàibiǎo', pos: 'Danh từ / Động từ', vn: 'đại biểu; đại diện, tiêu biểu cho', hv: 'đại biểu', em: '🎖️', lesson: 1,
    explain: ['Động từ: thay mặt ai đó; hoặc thể hiện, tiêu biểu cho đặc điểm chung.', 'Danh từ: người đại diện, đại biểu (代表团 = đoàn đại biểu). 代表性 = tính tiêu biểu.'],
    usage: '代表 + người / tập thể + V; 可以代表 + 特点; 具有代表性; 学生代表.',
    collo: ['代表大家', '具有代表性', '学生代表', '代表团', '代表其主要特点'],
    ex_zh: '在各种各样的四合院中，北京四合院可以代表其主要特点。', ex_py: 'Zài gè zhǒng gè yàng de sìhéyuàn zhōng, Běijīng sìhéyuàn kěyǐ dàibiǎo qí zhǔyào tèdiǎn.', ex_vn: 'Trong muôn vàn kiểu tứ hợp viện, tứ hợp viện Bắc Kinh có thể đại diện cho những đặc điểm chủ yếu của nó.',
    exList: [
      {zh:'在各种各样的四合院中，北京四合院可以代表其主要特点。', py:'Zài gè zhǒng gè yàng de sìhéyuàn zhōng, Běijīng sìhéyuàn kěyǐ dàibiǎo qí zhǔyào tèdiǎn.', vn:'Trong muôn vàn kiểu tứ hợp viện, tứ hợp viện Bắc Kinh có thể đại diện cho những đặc điểm chủ yếu của nó.'},
      {zh:'这是我第一次负责接待这么大的一个代表团。', py:'Zhè shì wǒ dì-yī cì fùzé jiēdài zhème dà de yí ge dàibiǎotuán.', vn:'Đây là lần đầu tiên tôi phụ trách tiếp đón một đoàn đại biểu lớn như thế này.'},
      {zh:'我代表全班同学感谢老师。', py:'Wǒ dàibiǎo quán bān tóngxué gǎnxiè lǎoshī.', vn:'Em thay mặt cả lớp cảm ơn thầy cô.'}
    ],
    colloFull: [
      {zh:'代表大家', py:'dàibiǎo dàjiā', vn:'thay mặt mọi người'},
      {zh:'具有代表性', py:'jùyǒu dàibiǎoxìng', vn:'có tính tiêu biểu'},
      {zh:'学生代表', py:'xuésheng dàibiǎo', vn:'đại diện học sinh'},
      {zh:'代表团', py:'dàibiǎotuán', vn:'đoàn đại biểu'},
      {zh:'代表其主要特点', py:'dàibiǎo qí zhǔyào tèdiǎn', vn:'đại diện cho đặc điểm chủ yếu của nó'}
    ],
    patterns: [
      {s:'Sub + 代表 + tập thể + V', m:'Thay mặt ai làm gì'},
      {s:'……十分具有代表性', m:'… rất tiêu biểu'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Cậu ấy được bầu làm đại diện học sinh.', answer:'他被选为学生代表。', answerPy:'Tā bèi xuǎn wéi xuésheng dàibiǎo.', note:'被选为 + chức vụ: được bầu làm …', pair:'被'},
      {promptLang:'vi', prompt:'Cuộc họp lần này là tôi thay mặt lớp đi dự.', answer:'这次会议是我代表我们班参加的。', answerPy:'Zhè cì huìyì shì wǒ dàibiǎo wǒmen bān cānjiā de.', note:'是 + người + 代表……+ V + 的.', pair:'是……的'}
    ]
  },
  {
    n: 11, zh: '通常', py: 'tōngcháng', pos: 'Tính từ / Phó từ', vn: 'thường, thông thường', hv: 'thông thường', em: '🔄', lesson: 1,
    explain: ['Chỉ việc xảy ra theo QUY LUẬT, theo lệ thường (bình thường thì như vậy).', 'Làm định ngữ được: 通常的做法, 通常情况下; đứng được ở đầu câu.'],
    usage: '(Sub) + 通常 + V; 通常 + mệnh đề; 通常的 + N; 在通常情况下.',
    collo: ['通常情况下', '通常的做法', '周末通常', '通常是由……组成的'],
    ex_zh: '有钱人家的，通常是由好几座四合院并列组成的。', ex_py: 'Yǒu qián rénjiā de, tōngcháng shì yóu hǎo jǐ zuò sìhéyuàn bìngliè zǔchéng de.', ex_vn: 'Của nhà giàu thì thường do mấy toà tứ hợp viện nằm song song hợp thành.',
    exList: [
      {zh:'有钱人家的，通常是由好几座四合院并列组成的。', py:'Yǒu qián rénjiā de, tōngcháng shì yóu hǎo jǐ zuò sìhéyuàn bìngliè zǔchéng de.', vn:'Của nhà giàu thì thường do mấy toà tứ hợp viện nằm song song hợp thành.'},
      {zh:'我们通常的做法都是这样的。', py:'Wǒmen tōngcháng de zuòfǎ dōu shì zhèyàng de.', vn:'Cách làm thông thường của chúng tôi đều là như vậy.'},
      {zh:'在通常情况下，火车是不会晚点的。', py:'Zài tōngcháng qíngkuàng xià, huǒchē shì bú huì wǎndiǎn de.', vn:'Trong trường hợp bình thường, tàu hoả sẽ không bị trễ giờ.'}
    ],
    colloFull: [
      {zh:'通常情况下', py:'tōngcháng qíngkuàng xià', vn:'trong trường hợp thông thường'},
      {zh:'通常的做法', py:'tōngcháng de zuòfǎ', vn:'cách làm thông thường'},
      {zh:'周末通常', py:'zhōumò tōngcháng', vn:'cuối tuần thường'},
      {zh:'通常是由……组成的', py:'tōngcháng shì yóu……zǔchéng de', vn:'thường do … hợp thành'},
      {zh:'通常来说', py:'tōngcháng lái shuō', vn:'thông thường mà nói'}
    ],
    patterns: [
      {s:'Sub + 通常 + V', m:'Theo lệ thường ai đó làm gì'},
      {s:'通常的 + N', m:'Cái … thông thường (làm định ngữ — 常常 không làm được)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tôi thường vừa về đến nhà là làm bài tập ngay.', answer:'我通常一回到家就写作业。', answerPy:'Wǒ tōngcháng yì huídào jiā jiù xiě zuòyè.', note:'通常 nói thói quen có quy luật; 一……就…… hai việc nối liền.', pair:'一……就'},
      {promptLang:'vi', prompt:'Thông thường chỉ cần đặt trước là sẽ có chỗ.', answer:'通常只要提前预订，就会有座位。', answerPy:'Tōngcháng zhǐyào tíqián yùdìng, jiù huì yǒu zuòwèi.', note:'通常 đứng đầu câu bổ nghĩa cho cả mệnh đề (常常 không làm được).', pair:'只要……就'}
    ]
  },
  {
    n: 12, zh: '并列', py: 'bìngliè', pos: 'Động từ', vn: 'đặt song song, đứng ngang nhau', hv: 'tịnh liệt', em: '↔️', lesson: 1,
    explain: ['Xếp cạnh nhau, ngang hàng nhau, không phân chính phụ, trước sau.'],
    usage: '(由) + nhiều N + 并列组成; 并列第一 (đồng hạng nhất); 并列关系 (quan hệ đẳng lập).',
    collo: ['并列组成', '并列第一', '并列在一起', '并列关系'],
    ex_zh: '这次比赛，他们俩并列第一。', ex_py: 'Zhè cì bǐsài, tāmen liǎ bìngliè dì-yī.', ex_vn: 'Cuộc thi lần này, hai bạn ấy đồng hạng nhất.',
    exList: [
      {zh:'有钱人家的四合院，通常是由好几座四合院并列组成的。', py:'Yǒu qián rénjiā de sìhéyuàn, tōngcháng shì yóu hǎo jǐ zuò sìhéyuàn bìngliè zǔchéng de.', vn:'Tứ hợp viện của nhà giàu thường do mấy toà tứ hợp viện nằm song song hợp thành.'},
      {zh:'这次比赛，他们俩并列第一。', py:'Zhè cì bǐsài, tāmen liǎ bìngliè dì-yī.', vn:'Cuộc thi lần này, hai bạn ấy đồng hạng nhất.'},
      {zh:'这两个句子是并列关系。', py:'Zhè liǎng ge jùzi shì bìngliè guānxi.', vn:'Hai câu này có quan hệ đẳng lập.'}
    ],
    colloFull: [
      {zh:'并列组成', py:'bìngliè zǔchéng', vn:'nằm song song hợp thành'},
      {zh:'并列第一', py:'bìngliè dì-yī', vn:'đồng hạng nhất'},
      {zh:'并列在一起', py:'bìngliè zài yìqǐ', vn:'đặt song song với nhau'},
      {zh:'并列关系', py:'bìngliè guānxi', vn:'quan hệ đẳng lập'}
    ],
    patterns: [
      {s:'由 + nhiều N + 并列组成', m:'Do nhiều cái nằm song song hợp thành'},
      {s:'A 和 B + 并列第一', m:'A và B đồng hạng nhất'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Hai ngôi nhà này được xây song song với nhau.', answer:'这两座房子是并列建在一起的。', answerPy:'Zhè liǎng zuò fángzi shì bìngliè jiàn zài yìqǐ de.', note:'是……的 nhấn mạnh cách thức: 并列 + V.', pair:'是……的'},
      {promptLang:'vi', prompt:'Không chỉ đội chúng tôi được hạng nhất, lớp 2 cũng đồng hạng nhất.', answer:'不仅我们队得了第一，二班也并列第一。', answerPy:'Bùjǐn wǒmen duì déle dì-yī, èr bān yě bìngliè dì-yī.', note:'不仅……也…… nối hai chủ ngữ; 并列第一 = đồng hạng nhất.', pair:'不仅……也'}
    ]
  },
  {
    n: 13, zh: '组成', py: 'zǔchéng', pos: 'Động từ', vn: 'tạo thành, hợp thành', hv: 'tổ thành', em: '🧱', lesson: 1,
    explain: ['Các bộ phận, cá nhân hợp lại thành một chỉnh thể — nhấn vào kết quả tạo thành.'],
    usage: '由 + các bộ phận + 组成; A + 组成 + B; 组成部分 (bộ phận cấu thành).',
    collo: ['由……组成', '组成部分', '组成一个小组', '重要的组成部分'],
    ex_zh: '手机已经成为人们生活中的重要组成部分。', ex_py: 'Shǒujī yǐjīng chéngwéi rénmen shēnghuó zhōng de zhòngyào zǔchéng bùfen.', ex_vn: 'Điện thoại đã trở thành một phần quan trọng trong cuộc sống con người.',
    exList: [
      {zh:'手机已经成为人们生活中的重要组成部分。', py:'Shǒujī yǐjīng chéngwéi rénmen shēnghuó zhōng de zhòngyào zǔchéng bùfen.', vn:'Điện thoại đã trở thành một phần quan trọng trong cuộc sống con người.'},
      {zh:'我们班由三十个学生组成。', py:'Wǒmen bān yóu sānshí ge xuésheng zǔchéng.', vn:'Lớp chúng tôi gồm ba mươi học sinh.'},
      {zh:'我们五个人组成了一个学习小组。', py:'Wǒmen wǔ ge rén zǔchéngle yí ge xuéxí xiǎozǔ.', vn:'Năm người chúng tôi lập thành một nhóm học tập.'}
    ],
    colloFull: [
      {zh:'由……组成', py:'yóu……zǔchéng', vn:'do … hợp thành, gồm có …'},
      {zh:'组成部分', py:'zǔchéng bùfen', vn:'bộ phận cấu thành'},
      {zh:'组成一个小组', py:'zǔchéng yí ge xiǎozǔ', vn:'lập thành một nhóm'},
      {zh:'重要的组成部分', py:'zhòngyào de zǔchéng bùfen', vn:'bộ phận quan trọng'},
      {zh:'组成家庭', py:'zǔchéng jiātíng', vn:'lập gia đình'}
    ],
    patterns: [
      {s:'A + 由 + B + 组成', m:'A do B hợp thành / A gồm B'},
      {s:'……的重要组成部分', m:'Một phần quan trọng của …'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Đội bóng này gồm các học sinh lớp 10.', answer:'这支球队是由高一的学生组成的。', answerPy:'Zhè zhī qiúduì shì yóu gāoyī de xuésheng zǔchéng de.', note:'是 + 由……组成 + 的: khung hay gặp trong bài.', pair:'是……的'},
      {promptLang:'vi', prompt:'Người của chúng ta ngày càng đông, có thể lập thành hai đội rồi.', answer:'我们的人越来越多，可以组成两个队了。', answerPy:'Wǒmen de rén yuè lái yuè duō, kěyǐ zǔchéng liǎng ge duì le.', note:'组成 + số lượng + N.', pair:'越来越'}
    ]
  },
  {
    n: 14, zh: '长辈', py: 'zhǎngbèi', pos: 'Danh từ', vn: 'bề trên, bậc cha chú', hv: 'trưởng bối', em: '👴', lesson: 1,
    explain: ['Người thuộc vai trên trong gia đình, họ hàng (ông bà, cha mẹ, cô chú…) — đối lập với 晚辈 (con cháu).'],
    usage: '尊重 / 照顾 + 长辈; 长辈的 + N; 跟长辈说话要用“您”.',
    collo: ['尊重长辈', '家里的长辈', '长辈的卧室', '跟长辈说话'],
    ex_zh: '我很感激那位亲切的长辈曾经给我的帮助。', ex_py: 'Wǒ hěn gǎnjī nà wèi qīnqiè de zhǎngbèi céngjīng gěi wǒ de bāngzhù.', ex_vn: 'Tôi rất biết ơn sự giúp đỡ mà vị bề trên thân thiết ấy từng dành cho tôi.',
    exList: [
      {zh:'正房一般包括长辈的卧室和客厅。', py:'Zhèngfáng yìbān bāokuò zhǎngbèi de wòshì hé kètīng.', vn:'Chính phòng thường gồm phòng ngủ của bậc bề trên và phòng khách.'},
      {zh:'我很感激那位亲切的长辈曾经给我的帮助。', py:'Wǒ hěn gǎnjī nà wèi qīnqiè de zhǎngbèi céngjīng gěi wǒ de bāngzhù.', vn:'Tôi rất biết ơn sự giúp đỡ mà vị bề trên thân thiết ấy từng dành cho tôi.'},
      {zh:'跟长辈说话要用“您”。', py:'Gēn zhǎngbèi shuōhuà yào yòng “nín”.', vn:'Nói chuyện với bề trên phải dùng “您”.'}
    ],
    colloFull: [
      {zh:'尊重长辈', py:'zūnzhòng zhǎngbèi', vn:'kính trọng bề trên'},
      {zh:'家里的长辈', py:'jiā li de zhǎngbèi', vn:'người lớn trong nhà'},
      {zh:'长辈的卧室', py:'zhǎngbèi de wòshì', vn:'phòng ngủ của bề trên'},
      {zh:'跟长辈说话', py:'gēn zhǎngbèi shuōhuà', vn:'nói chuyện với bề trên'},
      {zh:'长辈和晚辈', py:'zhǎngbèi hé wǎnbèi', vn:'bề trên và con cháu'}
    ],
    patterns: [
      {s:'尊重 / 照顾 + 长辈', m:'Kính trọng / chăm sóc bề trên'},
      {s:'跟长辈 + V', m:'Làm gì với bề trên'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Anh ấy chưa từng cãi nhau với bề trên.', answer:'他从来没跟长辈吵过架。', answerPy:'Tā cónglái méi gēn zhǎngbèi chǎoguo jià.', note:'吵架 là ly hợp từ: 过 chen giữa — 吵过架.', pair:'从来没……过'},
      {promptLang:'vi', prompt:'Cô bé đem trái cây ngon nhất mời bề trên ăn trước.', answer:'她把最好吃的水果先给长辈吃。', answerPy:'Tā bǎ zuì hǎochī de shuǐguǒ xiān gěi zhǎngbèi chī.', note:'把 + tân ngữ + 给 + người + V.', pair:'把'}
    ]
  },
  {
    n: 15, zh: '具备', py: 'jùbèi', pos: 'Động từ', vn: 'có đủ, có (điều kiện, chức năng…)', hv: 'cụ bị', em: '✅', lesson: 1,
    explain: ['Có đủ những điều kiện, năng lực, chức năng… cần thiết — đi với danh từ trừu tượng.'],
    usage: '具备 + 条件 / 能力 / 功能 / 知识; 不具备……. Không nói ✗具备一辆车 (vật cụ thể dùng 有).',
    collo: ['具备条件', '具备能力', '具备……功能', '具备基本功能'],
    ex_zh: '现在的手机都具备很多功能，不再只是个打电话的工具。', ex_py: 'Xiànzài de shǒujī dōu jùbèi hěn duō gōngnéng, bú zài zhǐ shì ge dǎ diànhuà de gōngjù.', ex_vn: 'Điện thoại bây giờ đều có rất nhiều chức năng, không còn chỉ là công cụ gọi điện nữa.',
    exList: [
      {zh:'现在的手机都具备很多功能，不再只是个打电话的工具。', py:'Xiànzài de shǒujī dōu jùbèi hěn duō gōngnéng, bú zài zhǐ shì ge dǎ diànhuà de gōngjù.', vn:'Điện thoại bây giờ đều có rất nhiều chức năng, không còn chỉ là công cụ gọi điện nữa.'},
      {zh:'该产品已经具备了基本功能。', py:'Gāi chǎnpǐn yǐjīng jùbèile jīběn gōngnéng.', vn:'Sản phẩm này đã có đủ các chức năng cơ bản.'},
      {zh:'他已经具备了当老师的条件。', py:'Tā yǐjīng jùbèile dāng lǎoshī de tiáojiàn.', vn:'Anh ấy đã có đủ điều kiện để làm giáo viên.'}
    ],
    colloFull: [
      {zh:'具备条件', py:'jùbèi tiáojiàn', vn:'có đủ điều kiện'},
      {zh:'具备能力', py:'jùbèi nénglì', vn:'có đủ năng lực'},
      {zh:'具备……功能', py:'jùbèi……gōngnéng', vn:'có chức năng …'},
      {zh:'具备基本功能', py:'jùbèi jīběn gōngnéng', vn:'có đủ chức năng cơ bản'},
      {zh:'不具备', py:'bú jùbèi', vn:'không có đủ'}
    ],
    patterns: [
      {s:'具备 + 条件 / 能力 / 功能', m:'Có đủ điều kiện / năng lực / chức năng'},
      {s:'具备 + ……等功能的 + N', m:'Cái gì có các chức năng … (câu trong bài)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chỉ cần có đủ điều kiện là em có thể xin học bổng.', answer:'只要具备条件，你就可以申请奖学金。', answerPy:'Zhǐyào jùbèi tiáojiàn, nǐ jiù kěyǐ shēnqǐng jiǎngxuéjīn.', note:'具备 + 条件; 只要……就…….', pair:'只要……就'},
      {promptLang:'vi', prompt:'Chiếc điện thoại này không chỉ đẹp mà cũng có rất nhiều chức năng.', answer:'这部手机不仅好看，也具备很多功能。', answerPy:'Zhè bù shǒujī bùjǐn hǎokàn, yě jùbèi hěn duō gōngnéng.', note:'不仅……也…… nối hai ưu điểm.', pair:'不仅……也'}
    ]
  },
  {
    n: 16, zh: '日常', py: 'rìcháng', pos: 'Tính từ', vn: 'hằng ngày, thường ngày', hv: 'nhật thường', em: '📅', lesson: 1,
    explain: ['Thuộc về sinh hoạt thường ngày, bình thường.'],
    usage: 'Chủ yếu làm định ngữ: 日常 + 生活 / 工作 / 用品 / 用语 (theo bảng 词语搭配 của sách).',
    collo: ['日常生活', '日常工作', '日常用品', '日常用语', '日常起居'],
    ex_zh: '刚开始学中文的时候，我学的主要是一些日常用语。', ex_py: 'Gāng kāishǐ xué Zhōngwén de shíhou, wǒ xué de zhǔyào shì yìxiē rìcháng yòngyǔ.', ex_vn: 'Hồi mới bắt đầu học tiếng Trung, tôi chủ yếu học một số câu giao tiếp hằng ngày.',
    exList: [
      {zh:'刚开始学中文的时候，我学的主要是一些日常用语。', py:'Gāng kāishǐ xué Zhōngwén de shíhou, wǒ xué de zhǔyào shì yìxiē rìcháng yòngyǔ.', vn:'Hồi mới bắt đầu học tiếng Trung, tôi chủ yếu học một số câu giao tiếp hằng ngày.'},
      {zh:'正房具备日常起居、接待客人等功能。', py:'Zhèngfáng jùbèi rìcháng qǐjū, jiēdài kèrén děng gōngnéng.', vn:'Chính phòng có đủ các công năng sinh hoạt hằng ngày, tiếp khách…'},
      {zh:'我们的日常生活已经离不开手机了。', py:'Wǒmen de rìcháng shēnghuó yǐjīng lí bu kāi shǒujī le.', vn:'Cuộc sống hằng ngày của chúng ta đã không thể thiếu điện thoại.'}
    ],
    colloFull: [
      {zh:'日常生活', py:'rìcháng shēnghuó', vn:'cuộc sống hằng ngày'},
      {zh:'日常工作', py:'rìcháng gōngzuò', vn:'công việc hằng ngày'},
      {zh:'日常用品', py:'rìcháng yòngpǐn', vn:'đồ dùng hằng ngày'},
      {zh:'日常用语', py:'rìcháng yòngyǔ', vn:'câu giao tiếp hằng ngày'},
      {zh:'日常起居', py:'rìcháng qǐjū', vn:'sinh hoạt thường ngày'}
    ],
    patterns: [{s:'日常 + 生活 / 工作 / 用品 / 用语', m:'… hằng ngày (日常 đứng trước danh từ)'}],
    checkList: [
      {promptLang:'vi', prompt:'Siêu thị này bán đồ dùng hằng ngày, ngay cả kem đánh răng cũng có.', answer:'这家超市卖日常用品，连牙膏都有。', answerPy:'Zhè jiā chāoshì mài rìcháng yòngpǐn, lián yágāo dōu yǒu.', note:'日常用品 = đồ dùng hằng ngày; 连……都…….', pair:'连……都'},
      {promptLang:'vi', prompt:'Đồ dùng hằng ngày ngày càng đắt.', answer:'日常用品越来越贵了。', answerPy:'Rìcháng yòngpǐn yuè lái yuè guì le.', note:'越来越 + Adj + 了.', pair:'越来越'}
    ]
  },
  {
    n: 17, zh: '起居', py: 'qǐjū', pos: 'Danh từ', vn: 'sinh hoạt thường ngày (ăn ở, nghỉ ngơi)', hv: 'khởi cư', em: '🛏️', lesson: 1,
    explain: ['Sinh hoạt hằng ngày như thức dậy, đi ngủ, ăn ở, nghỉ ngơi.'],
    usage: '日常起居; 照顾……的起居; 起居有规律; 起居室 (phòng sinh hoạt chung).',
    collo: ['日常起居', '起居室', '照顾起居', '起居有规律'],
    ex_zh: '正房一般包括长辈的卧室和具备日常起居、接待客人等功能的客厅。', ex_py: 'Zhèngfáng yìbān bāokuò zhǎngbèi de wòshì hé jùbèi rìcháng qǐjū, jiēdài kèrén děng gōngnéng de kètīng.', ex_vn: 'Chính phòng thường gồm phòng ngủ của bậc bề trên và phòng khách có đủ công năng sinh hoạt hằng ngày, tiếp khách…',
    exList: [
      {zh:'正房一般包括长辈的卧室和具备日常起居、接待客人等功能的客厅。', py:'Zhèngfáng yìbān bāokuò zhǎngbèi de wòshì hé jùbèi rìcháng qǐjū, jiēdài kèrén děng gōngnéng de kètīng.', vn:'Chính phòng thường gồm phòng ngủ của bậc bề trên và phòng khách có đủ công năng sinh hoạt hằng ngày, tiếp khách…'},
      {zh:'姥姥年纪大了，妈妈每天照顾她的起居。', py:'Lǎolao niánjì dà le, māma měi tiān zhàogù tā de qǐjū.', vn:'Bà ngoại tuổi đã cao, ngày nào mẹ cũng chăm lo sinh hoạt cho bà.'},
      {zh:'医生说起居有规律，身体才会好。', py:'Yīshēng shuō qǐjū yǒu guīlǜ, shēntǐ cái huì hǎo.', vn:'Bác sĩ nói sinh hoạt có điều độ thì sức khoẻ mới tốt.'}
    ],
    colloFull: [
      {zh:'日常起居', py:'rìcháng qǐjū', vn:'sinh hoạt thường ngày'},
      {zh:'起居室', py:'qǐjūshì', vn:'phòng sinh hoạt chung'},
      {zh:'照顾起居', py:'zhàogù qǐjū', vn:'chăm lo sinh hoạt'},
      {zh:'起居有规律', py:'qǐjū yǒu guīlǜ', vn:'sinh hoạt điều độ'}
    ],
    patterns: [
      {s:'照顾 + người + 的起居', m:'Chăm lo sinh hoạt hằng ngày cho ai'},
      {s:'起居 + 有规律', m:'Sinh hoạt điều độ'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Sinh hoạt hằng ngày của ông nội đều do bố chăm lo.', answer:'爷爷的日常起居都是爸爸照顾的。', answerPy:'Yéye de rìcháng qǐjū dōu shì bàba zhàogù de.', note:'是 + người + V + 的: nhấn mạnh người làm.', pair:'是……的'},
      {promptLang:'vi', prompt:'Chỉ cần sinh hoạt điều độ, sức khoẻ sẽ tốt lên.', answer:'只要起居有规律，身体就会好起来。', answerPy:'Zhǐyào qǐjū yǒu guīlǜ, shēntǐ jiù huì hǎo qǐlai.', note:'起居有规律; Adj + 起来 = bắt đầu (tốt lên).', pair:'只要……就'}
    ]
  },
  {
    n: 18, zh: '接待', py: 'jiēdài', pos: 'Động từ', vn: 'tiếp đãi, tiếp đón', hv: 'tiếp đãi', em: '🤝', lesson: 1,
    explain: ['Tiếp đón, tiếp đãi khách, đoàn khách (thường mang tính chính thức).'],
    usage: '接待 + 客人 / 代表团 / 游客; 负责接待; 热情接待; 接待室.',
    collo: ['接待客人', '接待代表团', '负责接待', '接待室'],
    ex_zh: '这是我第一次负责接待这么大的一个代表团，有点儿紧张。', ex_py: 'Zhè shì wǒ dì-yī cì fùzé jiēdài zhème dà de yí ge dàibiǎotuán, yǒudiǎnr jǐnzhāng.', ex_vn: 'Đây là lần đầu tôi phụ trách tiếp đón một đoàn đại biểu lớn thế này, hơi hồi hộp.',
    exList: [
      {zh:'这是我第一次负责接待这么大的一个代表团，有点儿紧张。', py:'Zhè shì wǒ dì-yī cì fùzé jiēdài zhème dà de yí ge dàibiǎotuán, yǒudiǎnr jǐnzhāng.', vn:'Đây là lần đầu tôi phụ trách tiếp đón một đoàn đại biểu lớn thế này, hơi hồi hộp.'},
      {zh:'客厅是接待客人的地方。', py:'Kètīng shì jiēdài kèrén de dìfang.', vn:'Phòng khách là nơi tiếp khách.'},
      {zh:'这家饭店每年接待上万名游客。', py:'Zhè jiā fàndiàn měi nián jiēdài shàng wàn míng yóukè.', vn:'Khách sạn này mỗi năm đón hàng vạn du khách.'}
    ],
    colloFull: [
      {zh:'接待客人', py:'jiēdài kèrén', vn:'tiếp khách'},
      {zh:'接待代表团', py:'jiēdài dàibiǎotuán', vn:'tiếp đón đoàn đại biểu'},
      {zh:'负责接待', py:'fùzé jiēdài', vn:'phụ trách tiếp đón'},
      {zh:'接待室', py:'jiēdàishì', vn:'phòng tiếp khách'},
      {zh:'热情接待', py:'rèqíng jiēdài', vn:'tiếp đón nhiệt tình'}
    ],
    patterns: [
      {s:'负责 + 接待 + N', m:'Phụ trách tiếp đón ai'},
      {s:'受到 + 热情的接待', m:'Được tiếp đón nhiệt tình'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Khách được sắp xếp nghỉ ở phòng tiếp khách.', answer:'客人们被安排在接待室休息。', answerPy:'Kèrénmen bèi ānpái zài jiēdàishì xiūxi.', note:'被安排在 + nơi chốn + V.', pair:'被'},
      {promptLang:'vi', prompt:'Khách vừa đến là cô ấy ra tiếp đón ngay.', answer:'客人一到，她就出去接待了。', answerPy:'Kèrén yí dào, tā jiù chūqu jiēdài le.', note:'一 + V1，Sub + 就 + V2.', pair:'一……就'}
    ]
  },
  {
    n: 19, zh: '功能', py: 'gōngnéng', pos: 'Danh từ', vn: 'chức năng, công năng', hv: 'công năng', em: '⚙️', lesson: 1,
    explain: ['Tác dụng, khả năng mà một đồ vật, bộ phận, công trình làm được.'],
    usage: '有 / 具备 + ……(的)功能; 功能 + 强大 / 齐全 / 多; 基本功能. Nói vai trò của con người dùng 作用, không dùng 功能.',
    collo: ['具备……功能', '功能强大', '基本功能', '多功能'],
    ex_zh: '相对而言，我觉得功能比形式重要。', ex_py: 'Xiāngduì ér yán, wǒ juéde gōngnéng bǐ xíngshì zhòngyào.', ex_vn: 'Nói một cách tương đối, tôi thấy chức năng quan trọng hơn hình thức.',
    exList: [
      {zh:'这台空调功能倒是挺强大，价钱也便宜。', py:'Zhè tái kōngtiáo gōngnéng dàoshì tǐng qiángdà, jiàqian yě piányi.', vn:'Cái điều hoà này chức năng khá mạnh, giá lại rẻ.'},
      {zh:'相对而言，我觉得功能比形式重要。', py:'Xiāngduì ér yán, wǒ juéde gōngnéng bǐ xíngshì zhòngyào.', vn:'Nói một cách tương đối, tôi thấy chức năng quan trọng hơn hình thức.'},
      {zh:'这种手表有测量心跳的功能。', py:'Zhè zhǒng shǒubiǎo yǒu cèliáng xīntiào de gōngnéng.', vn:'Loại đồng hồ này có chức năng đo nhịp tim.'}
    ],
    colloFull: [
      {zh:'具备……功能', py:'jùbèi……gōngnéng', vn:'có chức năng …'},
      {zh:'功能强大', py:'gōngnéng qiángdà', vn:'chức năng mạnh'},
      {zh:'基本功能', py:'jīběn gōngnéng', vn:'chức năng cơ bản'},
      {zh:'多功能', py:'duō gōngnéng', vn:'đa chức năng'},
      {zh:'有……的功能', py:'yǒu……de gōngnéng', vn:'có chức năng …'}
    ],
    patterns: [
      {s:'N + 有 + V……的功能', m:'Cái gì có chức năng làm gì'},
      {s:'功能 + 比 + 形式 + 重要', m:'Chức năng quan trọng hơn hình thức'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chức năng của điện thoại ngày càng nhiều.', answer:'手机的功能越来越多了。', answerPy:'Shǒujī de gōngnéng yuè lái yuè duō le.', note:'功能 + 多: chức năng nhiều.', pair:'越来越'},
      {promptLang:'vi', prompt:'Tôi chưa từng dùng chức năng này.', answer:'我从来没用过这个功能。', answerPy:'Wǒ cónglái méi yòngguo zhège gōngnéng.', note:'从来没 + V + 过 + tân ngữ.', pair:'从来没……过'}
    ]
  },
  {
    n: 20, zh: '厢房', py: 'xiāngfáng', pos: 'Danh từ', vn: 'chái nhà, dãy nhà hai bên sân', hv: 'sương phòng', em: '🏠', lesson: 1,
    explain: ['Dãy nhà ở hai bên đông, tây của sân trong tứ hợp viện, nằm đối diện nhau, phía trước chính phòng (正房).'],
    usage: '东厢房 / 西厢房; 住在厢房; đối lập với 正房 (dãy nhà chính phía bắc).',
    collo: ['东厢房', '西厢房', '东西厢房', '住在厢房'],
    ex_zh: '院子的两边是东西厢房，是晚辈们生活的地方。', ex_py: 'Yuànzi de liǎngbiān shì dōng xī xiāngfáng, shì wǎnbèimen shēnghuó de dìfang.', ex_vn: 'Hai bên sân là dãy nhà chái đông và tây, là nơi sinh hoạt của lớp con cháu.',
    exList: [
      {zh:'院子的两边是东西厢房，是晚辈们生活的地方。', py:'Yuànzi de liǎngbiān shì dōng xī xiāngfáng, shì wǎnbèimen shēnghuó de dìfang.', vn:'Hai bên sân là dãy nhà chái đông và tây, là nơi sinh hoạt của lớp con cháu.'},
      {zh:'小时候，我和哥哥住在东厢房。', py:'Xiǎo shíhou, wǒ hé gēge zhù zài dōng xiāngfáng.', vn:'Hồi nhỏ, tôi với anh trai ở dãy chái phía đông.'},
      {zh:'在正房和厢房之间建有走廊。', py:'Zài zhèngfáng hé xiāngfáng zhījiān jiàn yǒu zǒuláng.', vn:'Giữa chính phòng và nhà chái có xây hành lang.'}
    ],
    colloFull: [
      {zh:'东厢房', py:'dōng xiāngfáng', vn:'chái đông'},
      {zh:'西厢房', py:'xī xiāngfáng', vn:'chái tây'},
      {zh:'东西厢房', py:'dōng xī xiāngfáng', vn:'hai dãy chái đông và tây'},
      {zh:'住在厢房', py:'zhù zài xiāngfáng', vn:'ở nhà chái'}
    ],
    patterns: [{s:'正房 ↔ 厢房', m:'Nhà chính (phía bắc) ↔ nhà chái (hai bên đông, tây)'}],
    checkList: [
      {promptLang:'vi', prompt:'Anh trai đã chuyển đồ đạc sang chái tây rồi.', answer:'哥哥把东西搬到西厢房去了。', answerPy:'Gēge bǎ dōngxi bāndào xī xiāngfáng qù le.', note:'把 + tân ngữ + 搬到 + nơi chốn + 去了.', pair:'把'},
      {promptLang:'vi', prompt:'Dãy chái đông là do ông nội xây năm đó.', answer:'东厢房是爷爷那年建的。', answerPy:'Dōng xiāngfáng shì yéye nà nián jiàn de.', note:'是……的 nhấn mạnh người và thời gian.', pair:'是……的'}
    ]
  },
  {
    n: 21, zh: '走廊', py: 'zǒuláng', pos: 'Danh từ', vn: 'hành lang, hàng hiên', hv: 'tẩu lang', em: '🚪', lesson: 1,
    explain: ['Lối đi có mái che nối giữa các dãy nhà, hoặc lối đi chung trong một toà nhà.'],
    usage: '在走廊里 / 上; 走廊尽头 (cuối hành lang); 教室外的走廊.',
    collo: ['在走廊里', '走廊尽头', '教室外的走廊', '长长的走廊'],
    ex_zh: '在正房和厢房之间建有走廊，可以供人行走和休息。', ex_py: 'Zài zhèngfáng hé xiāngfáng zhījiān jiàn yǒu zǒuláng, kěyǐ gōng rén xíngzǒu hé xiūxi.', ex_vn: 'Giữa chính phòng và nhà chái có xây hành lang để người ta đi lại và nghỉ ngơi.',
    exList: [
      {zh:'在正房和厢房之间建有走廊，可以供人行走和休息。', py:'Zài zhèngfáng hé xiāngfáng zhījiān jiàn yǒu zǒuláng, kěyǐ gōng rén xíngzǒu hé xiūxi.', vn:'Giữa chính phòng và nhà chái có xây hành lang để người ta đi lại và nghỉ ngơi.'},
      {zh:'下课的时候，不要在走廊里跑。', py:'Xià kè de shíhou, bú yào zài zǒuláng li pǎo.', vn:'Giờ ra chơi đừng chạy ngoài hành lang.'},
      {zh:'老师的办公室在走廊尽头。', py:'Lǎoshī de bàngōngshì zài zǒuláng jìntóu.', vn:'Phòng làm việc của thầy ở cuối hành lang.'}
    ],
    colloFull: [
      {zh:'在走廊里', py:'zài zǒuláng li', vn:'ở hành lang'},
      {zh:'走廊尽头', py:'zǒuláng jìntóu', vn:'cuối hành lang'},
      {zh:'教室外的走廊', py:'jiàoshì wài de zǒuláng', vn:'hành lang ngoài lớp học'},
      {zh:'长长的走廊', py:'chángcháng de zǒuláng', vn:'hành lang dài hun hút'}
    ],
    patterns: [{s:'在 + 走廊里 + V', m:'Làm gì ở hành lang'}],
    checkList: [
      {promptLang:'vi', prompt:'Cậu ấy bị thầy giáo gọi ra hành lang.', answer:'他被老师叫到走廊里去了。', answerPy:'Tā bèi lǎoshī jiàodào zǒuláng li qù le.', note:'被 + người + V + 到 + nơi chốn + 去了.', pair:'被'},
      {promptLang:'vi', prompt:'Vừa tan học, hành lang đã chật kín người.', answer:'一下课，走廊里就挤满了人。', answerPy:'Yí xià kè, zǒuláng li jiù jǐmǎnle rén.', note:'Câu tồn hiện: nơi chốn + V满了 + người.', pair:'一……就'}
    ]
  },
  {
    n: 22, zh: '空间', py: 'kōngjiān', pos: 'Danh từ', vn: 'không gian', hv: 'không gian', em: '🌌', lesson: 1,
    explain: ['Khoảng trống, chỗ để sinh hoạt, hoạt động; nghĩa bóng: khoảng tự do, cơ hội phát triển (个人空间, 发展空间).'],
    usage: '生活空间, 室外空间; 空间 + 大 / 小; 给 / 留 + ……空间.',
    collo: ['生活空间', '室外空间', '发展空间', '个人空间', '空间很大'],
    ex_zh: '院子是十分理想的室外生活空间。', ex_py: 'Yuànzi shì shífēn lǐxiǎng de shìwài shēnghuó kōngjiān.', ex_vn: 'Sân là không gian sinh hoạt ngoài trời vô cùng lý tưởng.',
    exList: [
      {zh:'院子是十分理想的室外生活空间。', py:'Yuànzi shì shífēn lǐxiǎng de shìwài shēnghuó kōngjiān.', vn:'Sân là không gian sinh hoạt ngoài trời vô cùng lý tưởng.'},
      {zh:'父母应该给孩子留一点儿个人空间。', py:'Fùmǔ yīnggāi gěi háizi liú yìdiǎnr gèrén kōngjiān.', vn:'Bố mẹ nên để cho con một chút không gian riêng.'},
      {zh:'这个房间不大，但空间利用得很好。', py:'Zhège fángjiān bú dà, dàn kōngjiān lìyòng de hěn hǎo.', vn:'Căn phòng này không lớn nhưng không gian được tận dụng rất tốt.'}
    ],
    colloFull: [
      {zh:'生活空间', py:'shēnghuó kōngjiān', vn:'không gian sinh hoạt'},
      {zh:'室外空间', py:'shìwài kōngjiān', vn:'không gian ngoài trời'},
      {zh:'发展空间', py:'fāzhǎn kōngjiān', vn:'dư địa phát triển'},
      {zh:'个人空间', py:'gèrén kōngjiān', vn:'không gian riêng'},
      {zh:'空间很大', py:'kōngjiān hěn dà', vn:'không gian rộng'}
    ],
    patterns: [
      {s:'给 + người + 留 + ……空间', m:'Để cho ai một khoảng không gian'},
      {s:'十分理想的 + ……空间', m:'Không gian … rất lý tưởng'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tuy phòng nhỏ nhưng không gian được tận dụng rất tốt.', answer:'虽然房间很小，但是空间利用得很好。', answerPy:'Suīrán fángjiān hěn xiǎo, dànshì kōngjiān lìyòng de hěn hǎo.', note:'V + 得 + 很好: bổ ngữ trình độ.', pair:'虽然……但是'},
      {promptLang:'vi', prompt:'Mẹ đã dọn đống đồ cũ đi, không gian rộng hơn nhiều.', answer:'妈妈把旧东西搬走了，空间大多了。', answerPy:'Māma bǎ jiù dōngxi bānzǒu le, kōngjiān dà duō le.', note:'把 + tân ngữ + V走了; Adj + 多了 = hơn nhiều.', pair:'把'}
    ]
  },
  {
    n: 23, zh: '种', py: 'zhòng', pos: 'Động từ', vn: 'trồng', hv: 'chủng', em: '🌱', lesson: 1,
    explain: ['Gieo hạt, trồng cây, trồng hoa, trồng rau.', 'Chú ý: 种 zhòng (trồng — động từ) khác 种 zhǒng (loại — lượng từ: 一种建筑).'],
    usage: '种 + 花 / 草 / 树 / 菜 / 竹子; 在 + nơi chốn + 种…….',
    collo: ['种花', '种草', '种树', '种竹子', '种菜'],
    ex_zh: '有的人家喜欢种草、养花、种竹子。', ex_py: 'Yǒu de rénjiā xǐhuan zhòng cǎo, yǎng huā, zhòng zhúzi.', ex_vn: 'Có nhà thích trồng cỏ, nuôi hoa, trồng trúc.',
    exList: [
      {zh:'有的人家喜欢种草、养花、种竹子。', py:'Yǒu de rénjiā xǐhuan zhòng cǎo, yǎng huā, zhòng zhúzi.', vn:'Có nhà thích trồng cỏ, nuôi hoa, trồng trúc.'},
      {zh:'爷爷在院子里种了很多菜。', py:'Yéye zài yuànzi li zhòngle hěn duō cài.', vn:'Ông nội trồng rất nhiều rau trong sân.'},
      {zh:'植树节那天，我们班去山上种树。', py:'Zhíshù Jié nà tiān, wǒmen bān qù shān shang zhòng shù.', vn:'Hôm Tết trồng cây, lớp chúng tôi lên núi trồng cây.'}
    ],
    colloFull: [
      {zh:'种花', py:'zhòng huā', vn:'trồng hoa'},
      {zh:'种草', py:'zhòng cǎo', vn:'trồng cỏ'},
      {zh:'种树', py:'zhòng shù', vn:'trồng cây'},
      {zh:'种竹子', py:'zhòng zhúzi', vn:'trồng trúc'},
      {zh:'种菜', py:'zhòng cài', vn:'trồng rau'}
    ],
    patterns: [
      {s:'在 + nơi chốn + 种 + N', m:'Trồng cái gì ở đâu'},
      {s:'种 zhòng (trồng) ≠ 种 zhǒng (loại)', m:'Cùng chữ, khác âm, khác nghĩa'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Cái cây này là ông nội trồng.', answer:'这棵树是爷爷种的。', answerPy:'Zhè kē shù shì yéye zhòng de.', note:'Lượng từ 棵 cho cây; 是……的 nhấn mạnh người làm.', pair:'是……的'},
      {promptLang:'vi', prompt:'Hoa tôi trồng bị em trai hái mất rồi.', answer:'我种的花被弟弟摘了。', answerPy:'Wǒ zhòng de huā bèi dìdi zhāi le.', note:'我种的花 làm chủ ngữ; 被 + người + V + 了.', pair:'被'}
    ]
  },
  {
    n: 24, zh: '竹子', py: 'zhúzi', pos: 'Danh từ', vn: 'cây trúc, cây tre', hv: 'trúc tử', em: '🎋', lesson: 1,
    explain: ['Loài cây thân rỗng có đốt, lá dài hẹp; ở Trung Quốc thường tượng trưng cho người ngay thẳng, thanh cao.'],
    usage: 'Lượng từ: 一棵 / 一根竹子, 一片竹子 (một rừng trúc); 种竹子; 用竹子做的 + N.',
    collo: ['种竹子', '一片竹子', '竹子做的', '熊猫吃竹子'],
    ex_zh: '熊猫最爱吃竹子。', ex_py: 'Xióngmāo zuì ài chī zhúzi.', ex_vn: 'Gấu trúc thích ăn tre nhất.',
    exList: [
      {zh:'有花，有竹子，而且我们还养了几条金鱼。', py:'Yǒu huā, yǒu zhúzi, érqiě wǒmen hái yǎngle jǐ tiáo jīnyú.', vn:'Có hoa, có trúc, mà chúng tôi còn nuôi mấy con cá vàng nữa.'},
      {zh:'熊猫最爱吃竹子。', py:'Xióngmāo zuì ài chī zhúzi.', vn:'Gấu trúc thích ăn tre nhất.'},
      {zh:'这个篮子是用竹子做的。', py:'Zhège lánzi shì yòng zhúzi zuò de.', vn:'Cái giỏ này làm bằng tre.'}
    ],
    colloFull: [
      {zh:'种竹子', py:'zhòng zhúzi', vn:'trồng trúc'},
      {zh:'一片竹子', py:'yí piàn zhúzi', vn:'một rừng trúc'},
      {zh:'竹子做的', py:'zhúzi zuò de', vn:'làm bằng tre'},
      {zh:'熊猫吃竹子', py:'xióngmāo chī zhúzi', vn:'gấu trúc ăn tre'}
    ],
    patterns: [{s:'N + 是用竹子做的', m:'Cái gì làm bằng tre'}],
    checkList: [
      {promptLang:'vi', prompt:'Chiếc ghế này là ông nội tự làm bằng tre.', answer:'这把椅子是爷爷用竹子自己做的。', answerPy:'Zhè bǎ yǐzi shì yéye yòng zhúzi zìjǐ zuò de.', note:'用 + nguyên liệu + V; 是……的 nhấn mạnh người và cách làm.', pair:'是……的'},
      {promptLang:'vi', prompt:'Gấu trúc vừa nhìn thấy tre là chạy ngay tới.', answer:'熊猫一看到竹子就跑过去了。', answerPy:'Xióngmāo yí kàndào zhúzi jiù pǎo guòqu le.', note:'一……就…… hai việc nối liền.', pair:'一……就'}
    ]
  },
  {
    n: 25, zh: '则', py: 'zé', pos: 'Liên từ / Lượng từ', vn: 'còn … thì (đối chiếu); thì (văn viết); mẩu, bài (tin, chuyện)', hv: 'tắc', em: '⚖️', lesson: 1,
    explain: ['Liên từ: “A……，(而) B 则……” — đối chiếu hai sự việc (còn B thì…).', 'Liên từ chỉ nhân quả, văn viết, bằng 就 trong khẩu ngữ: 有风则寒.', 'Lượng từ: đếm bài văn, mẩu tin ngắn: 一则新闻, 两则故事.'],
    usage: 'B + 则 + V (则 đứng SAU chủ ngữ của vế sau); 一 / 两 + 则 + 新闻 / 故事 / 广告.',
    collo: ['一则新闻', '两则成语故事', '有的……有的则……', '而……则……'],
    ex_zh: '有的人家喜欢种草、养花、种竹子，有的人家则喜欢用大盆养金鱼。', ex_py: 'Yǒu de rénjiā xǐhuan zhòng cǎo, yǎng huā, zhòng zhúzi, yǒu de rénjiā zé xǐhuan yòng dà pén yǎng jīnyú.', ex_vn: 'Có nhà thích trồng cỏ, nuôi hoa, trồng trúc, có nhà thì lại thích nuôi cá vàng trong chậu lớn.',
    exList: [
      {zh:'有的人家喜欢种草、养花、种竹子，有的人家则喜欢用大盆养金鱼。', py:'Yǒu de rénjiā xǐhuan zhòng cǎo, yǎng huā, zhòng zhúzi, yǒu de rénjiā zé xǐhuan yòng dà pén yǎng jīnyú.', vn:'Có nhà thích trồng cỏ, nuôi hoa, trồng trúc, có nhà thì lại thích nuôi cá vàng trong chậu lớn.'},
      {zh:'猫享受独处的快乐，而狗则是希望和别人分享快乐。', py:'Māo xiǎngshòu dúchǔ de kuàilè, ér gǒu zé shì xīwàng hé biérén fēnxiǎng kuàilè.', vn:'Mèo tận hưởng niềm vui ở một mình, còn chó thì mong được chia sẻ niềm vui với người khác.'},
      {zh:'今天的报纸上有一则非常重要的新闻。', py:'Jīntiān de bàozhǐ shang yǒu yì zé fēicháng zhòngyào de xīnwén.', vn:'Báo hôm nay có một mẩu tin rất quan trọng.'}
    ],
    colloFull: [
      {zh:'一则新闻', py:'yì zé xīnwén', vn:'một mẩu tin'},
      {zh:'两则成语故事', py:'liǎng zé chéngyǔ gùshi', vn:'hai câu chuyện thành ngữ'},
      {zh:'有的……有的则……', py:'yǒu de……yǒu de zé……', vn:'có cái … có cái thì …'},
      {zh:'而……则……', py:'ér……zé……', vn:'còn … thì …'},
      {zh:'欲速则不达', py:'yù sù zé bù dá', vn:'dục tốc bất đạt'}
    ],
    patterns: [
      {s:'A……，(而) B + 则 + ……', m:'Đối chiếu: A thế này, còn B thì thế kia'},
      {s:'一 / 两 + 则 + 新闻 / 故事', m:'Lượng từ cho mẩu tin, câu chuyện ngắn'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tuy hai anh em sống cùng nhau, nhưng anh thì thích yên tĩnh, còn em thì thích náo nhiệt.', answer:'虽然兄弟俩住在一起，但是哥哥喜欢安静，弟弟则喜欢热闹。', answerPy:'Suīrán xiōngdì liǎ zhù zài yìqǐ, dànshì gēge xǐhuan ānjìng, dìdi zé xǐhuan rènao.', note:'则 đứng sau chủ ngữ 弟弟 của vế đối chiếu.', pair:'虽然……但是'},
      {promptLang:'vi', prompt:'Ngay cả một mẩu tin nhỏ cậu ấy cũng đọc rất kỹ.', answer:'他连一则小新闻都看得很仔细。', answerPy:'Tā lián yì zé xiǎo xīnwén dōu kàn de hěn zǐxì.', note:'则 làm lượng từ: 一则新闻; 连……都…….', pair:'连……都'}
    ]
  },
  {
    n: 26, zh: '金鱼', py: 'jīnyú', pos: 'Danh từ', vn: 'cá vàng', hv: 'kim ngư', em: '🐠', lesson: 1,
    explain: ['Loài cá cảnh nhỏ, màu vàng đỏ, nuôi trong bể, chậu.'],
    usage: 'Lượng từ: 一条金鱼; 养金鱼; 金鱼缸 (bể cá vàng).',
    collo: ['养金鱼', '一条金鱼', '金鱼缸', '用大盆养金鱼'],
    ex_zh: '有的人家则喜欢用大盆养金鱼。', ex_py: 'Yǒu de rénjiā zé xǐhuan yòng dà pén yǎng jīnyú.', ex_vn: 'Có nhà thì lại thích nuôi cá vàng trong chậu lớn.',
    exList: [
      {zh:'有的人家则喜欢用大盆养金鱼。', py:'Yǒu de rénjiā zé xǐhuan yòng dà pén yǎng jīnyú.', vn:'Có nhà thì lại thích nuôi cá vàng trong chậu lớn.'},
      {zh:'我们家院子里还养了几条金鱼。', py:'Wǒmen jiā yuànzi li hái yǎngle jǐ tiáo jīnyú.', vn:'Trong sân nhà tôi còn nuôi mấy con cá vàng.'},
      {zh:'妹妹每天放学回家都要去看她的金鱼。', py:'Mèimei měi tiān fàngxué huí jiā dōu yào qù kàn tā de jīnyú.', vn:'Ngày nào đi học về em gái cũng phải ra ngắm đàn cá vàng của nó.'}
    ],
    colloFull: [
      {zh:'养金鱼', py:'yǎng jīnyú', vn:'nuôi cá vàng'},
      {zh:'一条金鱼', py:'yì tiáo jīnyú', vn:'một con cá vàng'},
      {zh:'金鱼缸', py:'jīnyúgāng', vn:'bể cá vàng'},
      {zh:'用大盆养金鱼', py:'yòng dà pén yǎng jīnyú', vn:'nuôi cá vàng trong chậu lớn'}
    ],
    patterns: [{s:'用 + dụng cụ + 养 + 金鱼', m:'Nuôi cá vàng bằng gì'}],
    checkList: [
      {promptLang:'vi', prompt:'Con cá vàng đó bị con mèo ăn mất rồi.', answer:'那条金鱼被猫吃了。', answerPy:'Nà tiáo jīnyú bèi māo chī le.', note:'Lượng từ 条 cho cá; 被 + tác nhân + V + 了.', pair:'被'},
      {promptLang:'vi', prompt:'Em gái vừa về đến nhà là cho cá vàng ăn ngay.', answer:'妹妹一回家就给金鱼喂食。', answerPy:'Mèimei yì huí jiā jiù gěi jīnyú wèishí.', note:'一……就…… hai việc nối liền.', pair:'一……就'}
    ]
  },
  {
    n: 27, zh: '创造', py: 'chuàngzào', pos: 'Động từ', vn: 'sáng tạo, tạo ra', hv: 'sáng tạo', em: '💡', lesson: 1,
    explain: ['Tạo ra cái mới, cái trước đó chưa có: của cải, kỷ lục, điều kiện, kỳ tích…'],
    usage: '创造 + 文字 / 历史 / 机会 / 条件 / 奇迹 / 美好生活 (theo bảng 词语搭配 của sách).',
    collo: ['创造机会', '创造条件', '创造奇迹', '创造历史', '创造美好生活'],
    ex_zh: '他白手起家，真是创造了一个奇迹。', ex_py: 'Tā báishǒu-qǐjiā, zhēn shì chuàngzàole yí ge qíjì.', ex_vn: 'Anh ấy tay trắng dựng nghiệp, thật sự đã tạo nên một kỳ tích.',
    exList: [
      {zh:'院子对创造生活情趣起了很大作用。', py:'Yuànzi duì chuàngzào shēnghuó qíngqù qǐle hěn dà zuòyòng.', vn:'Khoảng sân góp phần rất lớn vào việc tạo nên thú vui cuộc sống.'},
      {zh:'他白手起家，真是创造了一个奇迹。', py:'Tā báishǒu-qǐjiā, zhēn shì chuàngzàole yí ge qíjì.', vn:'Anh ấy tay trắng dựng nghiệp, thật sự đã tạo nên một kỳ tích.'},
      {zh:'父母努力工作，为我们创造了很好的学习条件。', py:'Fùmǔ nǔlì gōngzuò, wèi wǒmen chuàngzàole hěn hǎo de xuéxí tiáojiàn.', vn:'Bố mẹ làm việc chăm chỉ, tạo cho chúng tôi điều kiện học tập rất tốt.'}
    ],
    colloFull: [
      {zh:'创造机会', py:'chuàngzào jīhuì', vn:'tạo cơ hội'},
      {zh:'创造条件', py:'chuàngzào tiáojiàn', vn:'tạo điều kiện'},
      {zh:'创造奇迹', py:'chuàngzào qíjì', vn:'tạo nên kỳ tích'},
      {zh:'创造历史', py:'chuàngzào lìshǐ', vn:'làm nên lịch sử'},
      {zh:'创造美好生活', py:'chuàngzào měihǎo shēnghuó', vn:'tạo dựng cuộc sống tươi đẹp'}
    ],
    patterns: [
      {s:'为 + người + 创造 + 条件 / 机会', m:'Tạo điều kiện / cơ hội cho ai'},
      {s:'对创造…… + 起了很大作用', m:'Góp phần lớn vào việc tạo nên … (câu trong bài)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Kỷ lục này là do một vận động viên 18 tuổi lập nên.', answer:'这个纪录是一名十八岁的运动员创造的。', answerPy:'Zhège jìlù shì yì míng shíbā suì de yùndòngyuán chuàngzào de.', note:'创造纪录 = lập kỷ lục; 是……的 nhấn mạnh người làm.', pair:'是……的'},
      {promptLang:'vi', prompt:'Chỉ cần chịu cố gắng, chúng ta có thể tạo nên kỳ tích.', answer:'只要肯努力，我们就能创造奇迹。', answerPy:'Zhǐyào kěn nǔlì, wǒmen jiù néng chuàngzào qíjì.', note:'创造奇迹; 只要……就…….', pair:'只要……就'}
    ]
  },
  {
    n: 28, zh: '情趣', py: 'qíngqù', pos: 'Danh từ', vn: 'sự thú vị, cái thú (trong cuộc sống)', hv: 'tình thú', em: '🌸', lesson: 1,
    explain: ['Sự thú vị, cái hay, cái đẹp khiến cuộc sống có hương vị; cũng chỉ sở thích, gu tâm hồn của một người.'],
    usage: '生活情趣; 很有情趣; 增加 / 创造 + 情趣.',
    collo: ['生活情趣', '很有情趣', '创造生活情趣', '增加情趣'],
    ex_zh: '院子对创造生活情趣起了很大作用。', ex_py: 'Yuànzi duì chuàngzào shēnghuó qíngqù qǐle hěn dà zuòyòng.', ex_vn: 'Khoảng sân góp phần rất lớn vào việc tạo nên thú vui cuộc sống.',
    exList: [
      {zh:'院子对创造生活情趣起了很大作用。', py:'Yuànzi duì chuàngzào shēnghuó qíngqù qǐle hěn dà zuòyòng.', vn:'Khoảng sân góp phần rất lớn vào việc tạo nên thú vui cuộc sống.'},
      {zh:'姥姥养花、养鸟，生活很有情趣。', py:'Lǎolao yǎng huā, yǎng niǎo, shēnghuó hěn yǒu qíngqù.', vn:'Bà ngoại trồng hoa, nuôi chim, cuộc sống rất thú vị.'},
      {zh:'在阳台上种几盆花，能给生活增加不少情趣。', py:'Zài yángtái shang zhòng jǐ pén huā, néng gěi shēnghuó zēngjiā bù shǎo qíngqù.', vn:'Trồng vài chậu hoa ngoài ban công có thể làm cuộc sống thêm nhiều thú vị.'}
    ],
    colloFull: [
      {zh:'生活情趣', py:'shēnghuó qíngqù', vn:'thú vui cuộc sống'},
      {zh:'很有情趣', py:'hěn yǒu qíngqù', vn:'rất thú vị, rất có gu'},
      {zh:'创造生活情趣', py:'chuàngzào shēnghuó qíngqù', vn:'tạo nên thú vui cuộc sống'},
      {zh:'增加情趣', py:'zēngjiā qíngqù', vn:'thêm thú vị'}
    ],
    patterns: [
      {s:'N + 很有情趣', m:'Cái gì rất thú vị, có gu'},
      {s:'给 + 生活 + 增加情趣', m:'Làm cuộc sống thêm thú vị'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Nghỉ hưu rồi, cuộc sống của ông nội ngày càng thú vị.', answer:'退休以后，爷爷的生活越来越有情趣了。', answerPy:'Tuìxiū yǐhòu, yéye de shēnghuó yuè lái yuè yǒu qíngqù le.', note:'越来越 + 有情趣 + 了.', pair:'越来越'},
      {promptLang:'vi', prompt:'Tuy nhà không lớn nhưng mẹ bày biện rất có gu.', answer:'虽然家不大，但是妈妈布置得很有情趣。', answerPy:'Suīrán jiā bú dà, dànshì māma bùzhì de hěn yǒu qíngqù.', note:'V + 得 + 很有情趣: bổ ngữ trình độ.', pair:'虽然……但是'}
    ]
  },
  {
    n: 29, zh: '因而', py: 'yīn\'ér', pos: 'Liên từ', vn: 'do đó, vì vậy', hv: 'nhân nhi', em: '➡️', lesson: 1,
    explain: ['Nối vế chỉ KẾT QUẢ với vế nguyên nhân đứng trước; văn viết, nghĩa như 所以, 因此.'],
    usage: 'Nguyên nhân，因而 + kết quả. Không đi thành cặp 因为……因而 (dùng 因为……所以).',
    collo: ['因而最为人们所喜爱', '因而身体很好', '因而受到欢迎'],
    ex_zh: '他坚持锻炼，因而身体很好。', ex_py: 'Tā jiānchí duànliàn, yīn\'ér shēntǐ hěn hǎo.', ex_vn: 'Anh ấy kiên trì rèn luyện, vì thế sức khoẻ rất tốt.',
    exList: [
      {zh:'院子对创造生活情趣起了很大作用，因而最为人们所喜爱。', py:'Yuànzi duì chuàngzào shēnghuó qíngqù qǐle hěn dà zuòyòng, yīn\'ér zuì wéi rénmen suǒ xǐ\'ài.', vn:'Khoảng sân góp phần rất lớn vào việc tạo nên thú vui cuộc sống, vì thế được mọi người yêu thích nhất.'},
      {zh:'他坚持锻炼，因而身体很好。', py:'Tā jiānchí duànliàn, yīn\'ér shēntǐ hěn hǎo.', vn:'Anh ấy kiên trì rèn luyện, vì thế sức khoẻ rất tốt.'},
      {zh:'这家餐厅的菜又便宜又好吃，因而受到大家的欢迎。', py:'Zhè jiā cāntīng de cài yòu piányi yòu hǎochī, yīn\'ér shòudào dàjiā de huānyíng.', vn:'Món ăn ở nhà hàng này vừa rẻ vừa ngon, do đó được mọi người ưa chuộng.'}
    ],
    colloFull: [
      {zh:'因而最为人们所喜爱', py:'yīn\'ér zuì wéi rénmen suǒ xǐ\'ài', vn:'vì thế được mọi người yêu thích nhất'},
      {zh:'因而身体很好', py:'yīn\'ér shēntǐ hěn hǎo', vn:'vì thế sức khoẻ rất tốt'},
      {zh:'因而受到欢迎', py:'yīn\'ér shòudào huānyíng', vn:'do đó được ưa chuộng'},
      {zh:'因而引起了关注', py:'yīn\'ér yǐnqǐle guānzhù', vn:'do đó gây được sự chú ý'}
    ],
    patterns: [{s:'Nguyên nhân，因而 + kết quả', m:'…, do đó … (văn viết)'}],
    checkList: [
      {promptLang:'vi', prompt:'Anh ấy ngày nào cũng luyện nói, vì thế tiếng Trung ngày càng lưu loát.', answer:'他每天练习口语，因而汉语说得越来越流利。', answerPy:'Tā měi tiān liànxí kǒuyǔ, yīn\'ér Hànyǔ shuō de yuè lái yuè liúlì.', note:'因而 mở vế kết quả; V + 得 + 越来越 + Adj.', pair:'越来越'},
      {promptLang:'vi', prompt:'Cô ấy chưa từng đến Bắc Kinh, vì thế rất tò mò về tứ hợp viện.', answer:'她从来没去过北京，因而对四合院很好奇。', answerPy:'Tā cónglái méi qùguo Běijīng, yīn\'ér duì sìhéyuàn hěn hàoqí.', note:'Vế nguyên nhân + 因而 + kết quả.', pair:'从来没……过'}
    ]
  },
  {
    n: 30, zh: '为', py: 'wéi', pos: 'Giới từ', vn: 'bị, được (thường dùng với 所)', hv: 'vi', em: '🔁', lesson: 1,
    explain: ['Giới từ trong cấu trúc văn viết “为……所……”: dẫn ra người / vật gây ra hành động, nghĩa như 被.', 'Chú ý đọc wéi (thanh 2) — khác 为 wèi (vì, cho: 为人民服务).'],
    usage: 'A + 为 + B + 所 + V (A bị / được B …). Động từ thường hai âm tiết: 喜爱, 感动, 接受, 熟悉; riêng 为人所用.',
    collo: ['为人们所喜爱', '为他所感动', '为人所用', '为大家所熟悉'],
    ex_zh: '认识他的人，没有人不为他认真的工作态度所感动。', ex_py: 'Rènshi tā de rén, méiyǒu rén bù wéi tā rènzhēn de gōngzuò tàidu suǒ gǎndòng.', ex_vn: 'Những người quen biết anh ấy, không ai là không cảm động trước thái độ làm việc nghiêm túc của anh.',
    exList: [
      {zh:'认识他的人，没有人不为他认真的工作态度所感动。', py:'Rènshi tā de rén, méiyǒu rén bù wéi tā rènzhēn de gōngzuò tàidu suǒ gǎndòng.', vn:'Những người quen biết anh ấy, không ai là không cảm động trước thái độ làm việc nghiêm túc của anh.'},
      {zh:'有了科学，大自然就可以更好地为人所用。', py:'Yǒule kēxué, dàzìrán jiù kěyǐ gèng hǎo de wéi rén suǒ yòng.', vn:'Có khoa học, thiên nhiên có thể được con người sử dụng tốt hơn.'},
      {zh:'这首歌很快就为大家所熟悉。', py:'Zhè shǒu gē hěn kuài jiù wéi dàjiā suǒ shúxī.', vn:'Bài hát này rất nhanh đã được mọi người biết đến.'}
    ],
    colloFull: [
      {zh:'为人们所喜爱', py:'wéi rénmen suǒ xǐ\'ài', vn:'được mọi người yêu thích'},
      {zh:'为他所感动', py:'wéi tā suǒ gǎndòng', vn:'cảm động vì anh ấy'},
      {zh:'为人所用', py:'wéi rén suǒ yòng', vn:'được con người sử dụng'},
      {zh:'为大家所熟悉', py:'wéi dàjiā suǒ shúxī', vn:'được mọi người biết đến'}
    ],
    patterns: [
      {s:'A + 为 + B + 所 + V', m:'A bị / được B … (= A 被 B V, văn viết)'},
      {s:'A + 最 / 深 + 为 + B + 所 + V', m:'Phó từ đứng TRƯỚC 为'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Câu chuyện này được rất nhiều người biết đến. (văn viết)', answer:'这个故事为很多人所熟悉。', answerPy:'Zhège gùshi wéi hěn duō rén suǒ shúxī.', note:'为……所…… là dạng văn viết của câu bị động 被.', pair:'被'},
      {promptLang:'vi', prompt:'Ngay cả đối thủ cũng cảm động trước tinh thần của anh ấy.', answer:'连他的对手都为他的精神所感动。', answerPy:'Lián tā de duìshǒu dōu wéi tā de jīngshén suǒ gǎndòng.', note:'Người cảm động (对手) đứng trước 为; cái gây cảm động đứng sau 为.', pair:'连……都'}
    ]
  },
  {
    n: 31, zh: '关闭', py: 'guānbì', pos: 'Động từ', vn: 'đóng kín, đóng cửa', hv: 'quan bế', em: '🔒', lesson: 1,
    explain: ['Đóng (cửa, cửa sổ, thiết bị); cũng là đóng cửa ngừng hoạt động (nhà máy, cửa hàng, trang web). Trang trọng hơn 关.'],
    usage: '关闭 + 大门 / 门窗 / 手机 / 网站; 工厂 / 商店 + 被关闭了.',
    collo: ['关闭大门', '关闭门窗', '关闭手机', '工厂关闭'],
    ex_zh: '考试开始前，请大家关闭手机。', ex_py: 'Kǎoshì kāishǐ qián, qǐng dàjiā guānbì shǒujī.', ex_vn: 'Trước khi bắt đầu thi, mời mọi người tắt điện thoại.',
    exList: [
      {zh:'只要关闭起大门，四合院内便形成一个封闭式的小环境。', py:'Zhǐyào guānbì qǐ dàmén, sìhéyuàn nèi biàn xíngchéng yí ge fēngbìshì de xiǎo huánjìng.', vn:'Chỉ cần đóng cổng lớn lại, bên trong tứ hợp viện liền thành một môi trường nhỏ khép kín.'},
      {zh:'考试开始前，请大家关闭手机。', py:'Kǎoshì kāishǐ qián, qǐng dàjiā guānbì shǒujī.', vn:'Trước khi bắt đầu thi, mời mọi người tắt điện thoại.'},
      {zh:'因为污染严重，这家工厂被关闭了。', py:'Yīnwèi wūrǎn yánzhòng, zhè jiā gōngchǎng bèi guānbì le.', vn:'Vì ô nhiễm nghiêm trọng, nhà máy này đã bị đóng cửa.'}
    ],
    colloFull: [
      {zh:'关闭大门', py:'guānbì dàmén', vn:'đóng cổng lớn'},
      {zh:'关闭门窗', py:'guānbì ménchuāng', vn:'đóng cửa ra vào và cửa sổ'},
      {zh:'关闭手机', py:'guānbì shǒujī', vn:'tắt điện thoại'},
      {zh:'工厂关闭', py:'gōngchǎng guānbì', vn:'nhà máy đóng cửa'},
      {zh:'关闭起大门', py:'guānbì qǐ dàmén', vn:'đóng cổng lại'}
    ],
    patterns: [
      {s:'关闭 + 门窗 / 手机', m:'Đóng cửa / tắt máy (trang trọng)'},
      {s:'N + 被关闭了', m:'Bị đóng cửa (ngừng hoạt động)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Trước khi ra ngoài nhớ đóng hết cửa lại.', answer:'出门前记得把门窗都关闭好。', answerPy:'Chūmén qián jìde bǎ ménchuāng dōu guānbì hǎo.', note:'把 + tân ngữ + 都 + V + 好.', pair:'把'},
      {promptLang:'vi', prompt:'Cửa hàng này bị đóng cửa vì bán hàng giả.', answer:'这家商店因为卖假货被关闭了。', answerPy:'Zhè jiā shāngdiàn yīnwèi mài jiǎhuò bèi guānbì le.', note:'因为 + lý do đứng trước 被.', pair:'被'}
    ]
  },
  {
    n: 32, zh: '封闭', py: 'fēngbì', pos: 'Động từ', vn: 'khép kín, phong toả', hv: 'phong bế', em: '📦', lesson: 1,
    explain: ['Đóng kín hoàn toàn, không cho thông với bên ngoài; 封闭式 = kiểu khép kín.', 'Nghĩa bóng: khép mình, ít giao tiếp (自我封闭).'],
    usage: '封闭式 + 环境 / 管理 / 学校; 封闭 + 道路; 路被封闭了; 自我封闭.',
    collo: ['封闭式', '封闭式管理', '封闭的环境', '自我封闭'],
    ex_zh: '我们学校是封闭式管理，平时不能随便出去。', ex_py: 'Wǒmen xuéxiào shì fēngbìshì guǎnlǐ, píngshí bù néng suíbiàn chūqu.', ex_vn: 'Trường chúng tôi quản lý khép kín, ngày thường không được tuỳ tiện ra ngoài.',
    exList: [
      {zh:'只要关闭起大门，四合院内便形成一个封闭式的小环境。', py:'Zhǐyào guānbì qǐ dàmén, sìhéyuàn nèi biàn xíngchéng yí ge fēngbìshì de xiǎo huánjìng.', vn:'Chỉ cần đóng cổng lớn lại, bên trong tứ hợp viện liền thành một môi trường nhỏ khép kín.'},
      {zh:'我们学校是封闭式管理，平时不能随便出去。', py:'Wǒmen xuéxiào shì fēngbìshì guǎnlǐ, píngshí bù néng suíbiàn chūqu.', vn:'Trường chúng tôi quản lý khép kín, ngày thường không được tuỳ tiện ra ngoài.'},
      {zh:'因为下大雪，这条路被封闭了。', py:'Yīnwèi xià dà xuě, zhè tiáo lù bèi fēngbì le.', vn:'Vì tuyết rơi dày, con đường này đã bị phong toả.'}
    ],
    colloFull: [
      {zh:'封闭式', py:'fēngbìshì', vn:'kiểu khép kín'},
      {zh:'封闭式管理', py:'fēngbìshì guǎnlǐ', vn:'quản lý khép kín'},
      {zh:'封闭的环境', py:'fēngbì de huánjìng', vn:'môi trường khép kín'},
      {zh:'自我封闭', py:'zìwǒ fēngbì', vn:'tự khép mình'},
      {zh:'封闭道路', py:'fēngbì dàolù', vn:'phong toả đường'}
    ],
    patterns: [
      {s:'封闭式的 + N', m:'… kiểu khép kín'},
      {s:'N + 被封闭了', m:'Bị phong toả'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Đoạn đường này đã bị phong toả hai ngày rồi.', answer:'这段路已经被封闭两天了。', answerPy:'Zhè duàn lù yǐjīng bèi fēngbì liǎng tiān le.', note:'被 + V + thời lượng + 了.', pair:'被'},
      {promptLang:'vi', prompt:'Cậu ấy ngày càng khép mình, không muốn nói chuyện với ai.', answer:'他越来越封闭自己，跟谁都不想说话。', answerPy:'Tā yuè lái yuè fēngbì zìjǐ, gēn shéi dōu bù xiǎng shuōhuà.', note:'封闭自己 = tự khép mình; 谁都不…… = không … với ai cả.', pair:'越来越'}
    ]
  },
  {
    n: 33, zh: '打交道', py: 'dǎ jiāodào', pos: 'Động từ', vn: 'giao thiệp, tiếp xúc', hv: 'đả giao đạo', em: '🗣️', lesson: 1,
    explain: ['Tiếp xúc, qua lại, làm việc với ai hoặc với cái gì; khẩu ngữ.'],
    usage: '跟 / 与 / 和 + đối tượng + 打交道 (không nói ✗打交道他); là cụm ly hợp: 打过几次交道.',
    collo: ['跟……打交道', '与邻居打交道', '打过交道', '和电脑打交道'],
    ex_zh: '住在四合院里的人不常与周围的邻居打交道。', ex_py: 'Zhù zài sìhéyuàn li de rén bù cháng yǔ zhōuwéi de línjū dǎ jiāodào.', ex_vn: 'Người sống trong tứ hợp viện không hay giao thiệp với hàng xóm xung quanh.',
    exList: [
      {zh:'住在四合院里的人不常与周围的邻居打交道。', py:'Zhù zài sìhéyuàn li de rén bù cháng yǔ zhōuwéi de línjū dǎ jiāodào.', vn:'Người sống trong tứ hợp viện không hay giao thiệp với hàng xóm xung quanh.'},
      {zh:'我做销售工作，每天都要跟不同的人打交道。', py:'Wǒ zuò xiāoshòu gōngzuò, měi tiān dōu yào gēn bù tóng de rén dǎ jiāodào.', vn:'Tôi làm bán hàng, ngày nào cũng phải tiếp xúc với đủ loại người.'},
      {zh:'我跟他打过几次交道，觉得他很好相处。', py:'Wǒ gēn tā dǎguo jǐ cì jiāodào, juéde tā hěn hǎo xiāngchǔ.', vn:'Tôi đã tiếp xúc với anh ấy vài lần, thấy anh ấy rất dễ chịu.'}
    ],
    colloFull: [
      {zh:'跟……打交道', py:'gēn……dǎ jiāodào', vn:'giao thiệp với …'},
      {zh:'与邻居打交道', py:'yǔ línjū dǎ jiāodào', vn:'giao thiệp với hàng xóm'},
      {zh:'打过交道', py:'dǎguo jiāodào', vn:'đã từng tiếp xúc'},
      {zh:'和电脑打交道', py:'hé diànnǎo dǎ jiāodào', vn:'làm việc với máy tính'}
    ],
    patterns: [
      {s:'跟 / 与 + người + 打交道', m:'Giao thiệp với ai (đối tượng đứng TRƯỚC)'},
      {s:'打过 + số lần + 交道', m:'Đã tiếp xúc mấy lần (ly hợp)'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Tôi chưa từng tiếp xúc với người này.', answer:'我从来没跟这个人打过交道。', answerPy:'Wǒ cónglái méi gēn zhège rén dǎguo jiāodào.', note:'过 chen giữa 打 và 交道.', pair:'从来没……过'},
      {promptLang:'vi', prompt:'Tuy cậu ấy ít nói nhưng rất dễ giao thiệp.', answer:'虽然他话不多，但是很好打交道。', answerPy:'Suīrán tā huà bù duō, dànshì hěn hǎo dǎ jiāodào.', note:'很好 + V = rất dễ làm việc gì (好打交道).', pair:'虽然……但是'}
    ]
  },
  {
    n: 34, zh: '日子', py: 'rìzi', pos: 'Danh từ', vn: 'cuộc sống, những ngày tháng; ngày', hv: 'nhật tử', em: '🗓️', lesson: 1,
    explain: ['Cuộc sống, đời sống sinh hoạt (过日子 = sống qua ngày).', 'Ngày, hôm: 好日子, 重要的日子, 这些日子.'],
    usage: '过 + ……的日子; 重要的 / 幸福的 / 困难的 / 与世无争的 + 日子 (theo bảng 词语搭配 của sách).',
    collo: ['过日子', '幸福的日子', '困难的日子', '与世无争的日子', '重要的日子'],
    ex_zh: '在小院里，一家人过着与世无争的日子。', ex_py: 'Zài xiǎo yuàn li, yì jiā rén guòzhe yǔ shì wú zhēng de rìzi.', ex_vn: 'Trong khoảng sân nhỏ, cả nhà sống những ngày tháng không tranh giành với đời.',
    exList: [
      {zh:'在小院里，一家人过着与世无争的日子。', py:'Zài xiǎo yuàn li, yì jiā rén guòzhe yǔ shì wú zhēng de rìzi.', vn:'Trong khoảng sân nhỏ, cả nhà sống những ngày tháng không tranh giành với đời.'},
      {zh:'今天是我们家一个重要的日子——姥姥八十岁生日。', py:'Jīntiān shì wǒmen jiā yí ge zhòngyào de rìzi——lǎolao bāshí suì shēngrì.', vn:'Hôm nay là một ngày quan trọng của nhà tôi — sinh nhật tám mươi tuổi của bà ngoại.'},
      {zh:'在那段困难的日子里，是邻居们帮助了我们。', py:'Zài nà duàn kùnnan de rìzi li, shì línjūmen bāngzhùle wǒmen.', vn:'Trong quãng ngày khó khăn ấy, chính hàng xóm đã giúp đỡ chúng tôi.'}
    ],
    colloFull: [
      {zh:'过日子', py:'guò rìzi', vn:'sống qua ngày'},
      {zh:'幸福的日子', py:'xìngfú de rìzi', vn:'những ngày hạnh phúc'},
      {zh:'困难的日子', py:'kùnnan de rìzi', vn:'những ngày khó khăn'},
      {zh:'与世无争的日子', py:'yǔ shì wú zhēng de rìzi', vn:'cuộc sống không tranh giành với đời'},
      {zh:'重要的日子', py:'zhòngyào de rìzi', vn:'ngày quan trọng'}
    ],
    patterns: [
      {s:'过着 + ……的日子', m:'Đang sống cuộc sống thế nào'},
      {s:'日子 + 越过越好', m:'Cuộc sống ngày càng khấm khá'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Cuộc sống của gia đình họ ngày càng khá lên.', answer:'他们家的日子越来越好了。', answerPy:'Tāmen jiā de rìzi yuè lái yuè hǎo le.', note:'日子 = cuộc sống, không chỉ là "ngày".', pair:'越来越'},
      {promptLang:'vi', prompt:'Tuy những ngày ấy rất khó khăn, nhưng cả nhà sống rất vui.', answer:'虽然那些日子很困难，但是一家人过得很开心。', answerPy:'Suīrán nàxiē rìzi hěn kùnnan, dànshì yì jiā rén guò de hěn kāixīn.', note:'过 + 得 + 很开心: sống vui vẻ.', pair:'虽然……但是'}
    ]
  },
  {
    n: 35, zh: '充分', py: 'chōngfèn', pos: 'Tính từ', vn: 'đầy đủ, trọn vẹn; hết mức', hv: 'sung phân', em: '💯', lesson: 1,
    explain: ['Đầy đủ (lý do, sự chuẩn bị…).', 'Làm trạng ngữ: hết mức, triệt để — 充分享受, 充分利用.'],
    usage: '准备 / 理由 + 很充分; 充分的准备; 充分(地) + 利用 / 享受 / 发挥.',
    collo: ['准备充分', '理由充分', '充分享受', '充分利用', '充分的准备'],
    ex_zh: '考试前他做了充分的准备，所以一点儿也不紧张。', ex_py: 'Kǎoshì qián tā zuòle chōngfèn de zhǔnbèi, suǒyǐ yìdiǎnr yě bù jǐnzhāng.', ex_vn: 'Trước kỳ thi cậu ấy đã chuẩn bị đầy đủ, nên chẳng hồi hộp chút nào.',
    exList: [
      {zh:'在小院里，一家人充分享受家庭的乐趣。', py:'Zài xiǎo yuàn li, yì jiā rén chōngfèn xiǎngshòu jiātíng de lèqù.', vn:'Trong khoảng sân nhỏ, cả nhà tận hưởng trọn vẹn niềm vui gia đình.'},
      {zh:'考试前他做了充分的准备，所以一点儿也不紧张。', py:'Kǎoshì qián tā zuòle chōngfèn de zhǔnbèi, suǒyǐ yìdiǎnr yě bù jǐnzhāng.', vn:'Trước kỳ thi cậu ấy đã chuẩn bị đầy đủ, nên chẳng hồi hộp chút nào.'},
      {zh:'我们要充分利用课余时间多读书。', py:'Wǒmen yào chōngfèn lìyòng kèyú shíjiān duō dú shū.', vn:'Chúng ta phải tận dụng triệt để thời gian ngoài giờ học để đọc sách.'}
    ],
    colloFull: [
      {zh:'准备充分', py:'zhǔnbèi chōngfèn', vn:'chuẩn bị đầy đủ'},
      {zh:'理由充分', py:'lǐyóu chōngfèn', vn:'lý do xác đáng'},
      {zh:'充分享受', py:'chōngfèn xiǎngshòu', vn:'tận hưởng trọn vẹn'},
      {zh:'充分利用', py:'chōngfèn lìyòng', vn:'tận dụng triệt để'},
      {zh:'充分的准备', py:'chōngfèn de zhǔnbèi', vn:'sự chuẩn bị đầy đủ'}
    ],
    patterns: [
      {s:'充分(地) + 利用 / 享受', m:'Tận dụng / tận hưởng hết mức'},
      {s:'做(好)充分的准备', m:'Chuẩn bị đầy đủ'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Chỉ cần chuẩn bị đầy đủ thì sẽ không hồi hộp.', answer:'只要准备得充分，就不会紧张。', answerPy:'Zhǐyào zhǔnbèi de chōngfèn, jiù bú huì jǐnzhāng.', note:'V + 得 + 充分; 只要……就…….', pair:'只要……就'},
      {promptLang:'vi', prompt:'Lý do của cậu ấy không xác đáng, ngay cả thầy giáo cũng không tin.', answer:'他的理由不充分，连老师都不相信。', answerPy:'Tā de lǐyóu bù chōngfèn, lián lǎoshī dōu bù xiāngxìn.', note:'理由 + (不)充分.', pair:'连……都'}
    ]
  },
  {
    n: 36, zh: '令', py: 'lìng', pos: 'Động từ', vn: 'khiến, làm cho', hv: 'lệnh', em: '😮', lesson: 1,
    explain: ['Khiến cho ai có một cảm xúc, trạng thái nào đó; văn viết, nghĩa như 让, 使.', 'Hay đi với động từ / tính từ chỉ cảm xúc: 令人感动, 令人满意, 令人难忘.'],
    usage: '令 + người + cảm xúc (令人感到亲切). Không dùng 令 cho yêu cầu, nhờ vả, cho phép: ✗他令我把门关上 → 他让我把门关上.',
    collo: ['令人感动', '令人满意', '令人难忘', '令人感到亲切'],
    ex_zh: '他的故事令人感动。', ex_py: 'Tā de gùshi lìng rén gǎndòng.', ex_vn: 'Câu chuyện của anh ấy khiến người ta cảm động.',
    exList: [
      {zh:'在小院里，自然有一种令人感到自在亲切的气氛。', py:'Zài xiǎo yuàn li, zìrán yǒu yì zhǒng lìng rén gǎndào zìzai qīnqiè de qìfēn.', vn:'Trong khoảng sân nhỏ, tự nhiên có một bầu không khí khiến người ta thấy thoải mái, thân thuộc.'},
      {zh:'这次比赛的结果令大家都很满意。', py:'Zhè cì bǐsài de jiéguǒ lìng dàjiā dōu hěn mǎnyì.', vn:'Kết quả cuộc thi lần này khiến ai cũng hài lòng.'},
      {zh:'他的故事令人感动。', py:'Tā de gùshi lìng rén gǎndòng.', vn:'Câu chuyện của anh ấy khiến người ta cảm động.'}
    ],
    colloFull: [
      {zh:'令人感动', py:'lìng rén gǎndòng', vn:'khiến người ta cảm động'},
      {zh:'令人满意', py:'lìng rén mǎnyì', vn:'khiến người ta hài lòng'},
      {zh:'令人难忘', py:'lìng rén nánwàng', vn:'khiến người ta khó quên'},
      {zh:'令人感到亲切', py:'lìng rén gǎndào qīnqiè', vn:'khiến người ta thấy thân thuộc'},
      {zh:'令人吃惊', py:'lìng rén chījīng', vn:'khiến người ta sửng sốt'}
    ],
    patterns: [
      {s:'N + 令人 + cảm xúc', m:'Cái gì khiến người ta …'},
      {s:'令 ≠ 让 (yêu cầu)', m:'Bảo ai làm việc gì phải dùng 让'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Kết quả này khiến người ta sửng sốt, ngay cả thầy giáo cũng không ngờ.', answer:'这个结果令人吃惊，连老师都没想到。', answerPy:'Zhège jiéguǒ lìng rén chījīng, lián lǎoshī dōu méi xiǎngdào.', note:'令人 + cảm xúc; 连……都没…….', pair:'连……都'},
      {promptLang:'vi', prompt:'Thành phố này ngày càng khiến tôi hài lòng.', answer:'这座城市越来越令我满意了。', answerPy:'Zhè zuò chéngshì yuè lái yuè lìng wǒ mǎnyì le.', note:'越来越 đứng trước cả cụm 令 + người + cảm xúc.', pair:'越来越'}
    ]
  },
  {
    n: 37, zh: '亲切', py: 'qīnqiè', pos: 'Tính từ', vn: 'thân mật, thân thiết, gần gũi', hv: 'thân thiết', em: '🤗', lesson: 1,
    explain: ['Thân thiết, gần gũi, khiến người ta thấy ấm áp — dùng cho người, thái độ, giọng nói, cảm giác.'],
    usage: '感到 / 觉得 + 很亲切; 亲切的 + 长辈 / 笑容; 亲切地 + 说 / 问; 对 + người + 很亲切.',
    collo: ['感到亲切', '亲切的长辈', '亲切地问', '态度亲切'],
    ex_zh: '在国外听到有人说越南语，我感到特别亲切。', ex_py: 'Zài guówài tīngdào yǒu rén shuō Yuènányǔ, wǒ gǎndào tèbié qīnqiè.', ex_vn: 'Ở nước ngoài nghe thấy có người nói tiếng Việt, tôi thấy thân thương vô cùng.',
    exList: [
      {zh:'我很感激那位亲切的长辈曾经给我的帮助。', py:'Wǒ hěn gǎnjī nà wèi qīnqiè de zhǎngbèi céngjīng gěi wǒ de bāngzhù.', vn:'Tôi rất biết ơn sự giúp đỡ mà vị bề trên thân thiết ấy từng dành cho tôi.'},
      {zh:'在国外听到有人说越南语，我感到特别亲切。', py:'Zài guówài tīngdào yǒu rén shuō Yuènányǔ, wǒ gǎndào tèbié qīnqiè.', vn:'Ở nước ngoài nghe thấy có người nói tiếng Việt, tôi thấy thân thương vô cùng.'},
      {zh:'老师亲切地问我：“你是哪儿人？”', py:'Lǎoshī qīnqiè de wèn wǒ: “Nǐ shì nǎr rén?”', vn:'Thầy giáo ân cần hỏi tôi: “Em người ở đâu?”'}
    ],
    colloFull: [
      {zh:'感到亲切', py:'gǎndào qīnqiè', vn:'thấy thân thuộc'},
      {zh:'亲切的长辈', py:'qīnqiè de zhǎngbèi', vn:'bậc bề trên gần gũi'},
      {zh:'亲切地问', py:'qīnqiè de wèn', vn:'ân cần hỏi'},
      {zh:'态度亲切', py:'tàidu qīnqiè', vn:'thái độ thân thiện'},
      {zh:'亲切的笑容', py:'qīnqiè de xiàoróng', vn:'nụ cười thân thiện'}
    ],
    patterns: [
      {s:'Sub + 感到 / 觉得 + 很亲切', m:'Ai đó thấy thân thuộc, gần gũi'},
      {s:'亲切地 + V', m:'Làm gì một cách ân cần'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Vừa nghe giọng quê, tôi thấy thân thương ngay.', answer:'一听到家乡话，我就觉得很亲切。', answerPy:'Yì tīngdào jiāxiāng huà, wǒ jiù juéde hěn qīnqiè.', note:'觉得 + 很亲切 (không nói 我很亲切 khi muốn nói cảm giác).', pair:'一……就'},
      {promptLang:'vi', prompt:'Tuy là lần đầu gặp mặt nhưng cô ấy rất thân thiện với tôi.', answer:'虽然是第一次见面，但是她对我很亲切。', answerPy:'Suīrán shì dì-yī cì jiànmiàn, dànshì tā duì wǒ hěn qīnqiè.', note:'对 + người + 很亲切.', pair:'虽然……但是'}
    ]
  },
  {
    n: 38, zh: '劳动', py: 'láodòng', pos: 'Danh từ / Động từ', vn: 'lao động, công việc; làm việc (bằng chân tay)', hv: 'lao động', em: '🛠️', lesson: 1,
    explain: ['Danh từ: lao động, công việc (chân tay hoặc trí óc).', 'Động từ: làm việc, lao động (thường là việc chân tay).'],
    usage: '劳动人民; 参加劳动; 体力劳动 / 脑力劳动; 劳动节 (ngày Quốc tế Lao động 1/5).',
    collo: ['劳动人民', '参加劳动', '劳动节', '体力劳动'],
    ex_zh: '周末我们去农村参加劳动。', ex_py: 'Zhōumò wǒmen qù nóngcūn cānjiā láodòng.', ex_vn: 'Cuối tuần chúng tôi về nông thôn tham gia lao động.',
    exList: [
      {zh:'大杂院的住户多为普通劳动人民。', py:'Dàzáyuàn de zhùhù duō wéi pǔtōng láodòng rénmín.', vn:'Cư dân của khu nhà ở chung phần lớn là người lao động bình thường.'},
      {zh:'周末我们去农村参加劳动。', py:'Zhōumò wǒmen qù nóngcūn cānjiā láodòng.', vn:'Cuối tuần chúng tôi về nông thôn tham gia lao động.'},
      {zh:'劳动节放假，我们一家人去了北京。', py:'Láodòng Jié fàngjià, wǒmen yì jiā rén qùle Běijīng.', vn:'Nghỉ lễ Quốc tế Lao động, cả nhà tôi đã đi Bắc Kinh.'}
    ],
    colloFull: [
      {zh:'劳动人民', py:'láodòng rénmín', vn:'nhân dân lao động'},
      {zh:'参加劳动', py:'cānjiā láodòng', vn:'tham gia lao động'},
      {zh:'劳动节', py:'Láodòng Jié', vn:'ngày Quốc tế Lao động'},
      {zh:'体力劳动', py:'tǐlì láodòng', vn:'lao động chân tay'},
      {zh:'爱劳动', py:'ài láodòng', vn:'chăm làm'}
    ],
    patterns: [{s:'参加 + 劳动', m:'Tham gia lao động'}],
    checkList: [
      {promptLang:'vi', prompt:'Tôi chưa từng tham gia lao động ở nông thôn.', answer:'我从来没在农村参加过劳动。', answerPy:'Wǒ cónglái méi zài nóngcūn cānjiāguo láodòng.', note:'在 + nơi chốn đứng trước động từ; 过 sau 参加.', pair:'从来没……过'},
      {promptLang:'vi', prompt:'Những thành quả lao động này là cả lớp cùng tạo ra.', answer:'这些劳动成果是全班一起创造的。', answerPy:'Zhèxiē láodòng chéngguǒ shì quán bān yìqǐ chuàngzào de.', note:'劳动成果 = thành quả lao động; 是……的.', pair:'是……的'}
    ]
  },
  {
    n: 39, zh: '人民', py: 'rénmín', pos: 'Danh từ', vn: 'nhân dân', hv: 'nhân dân', em: '👥', lesson: 1,
    explain: ['Toàn thể dân chúng của một nước — từ trang trọng, dùng nhiều trong văn viết.', 'Khác 人们 (người ta, mọi người nói chung).'],
    usage: '劳动人民; 全国人民; 人民的生活; 为人民服务 (wèi — vì nhân dân).',
    collo: ['劳动人民', '人民的生活', '全国人民', '为人民服务'],
    ex_zh: '这些年，人民的生活越来越好了。', ex_py: 'Zhèxiē nián, rénmín de shēnghuó yuè lái yuè hǎo le.', ex_vn: 'Mấy năm nay, đời sống của nhân dân ngày càng tốt lên.',
    exList: [
      {zh:'大杂院的住户多为普通劳动人民。', py:'Dàzáyuàn de zhùhù duō wéi pǔtōng láodòng rénmín.', vn:'Cư dân của khu nhà ở chung phần lớn là người lao động bình thường.'},
      {zh:'这些年，人民的生活越来越好了。', py:'Zhèxiē nián, rénmín de shēnghuó yuè lái yuè hǎo le.', vn:'Mấy năm nay, đời sống của nhân dân ngày càng tốt lên.'},
      {zh:'全国人民都在关注这场比赛。', py:'Quánguó rénmín dōu zài guānzhù zhè chǎng bǐsài.', vn:'Nhân dân cả nước đều đang theo dõi trận đấu này.'}
    ],
    colloFull: [
      {zh:'劳动人民', py:'láodòng rénmín', vn:'nhân dân lao động'},
      {zh:'人民的生活', py:'rénmín de shēnghuó', vn:'đời sống nhân dân'},
      {zh:'全国人民', py:'quánguó rénmín', vn:'nhân dân cả nước'},
      {zh:'为人民服务', py:'wèi rénmín fúwù', vn:'phục vụ nhân dân'},
      {zh:'人民币', py:'rénmínbì', vn:'đồng Nhân dân tệ'}
    ],
    patterns: [{s:'全国 / 劳动 + 人民', m:'Nhân dân cả nước / nhân dân lao động'}],
    checkList: [
      {promptLang:'vi', prompt:'Công viên này là chính quyền xây cho nhân dân.', answer:'这个公园是政府为人民建的。', answerPy:'Zhège gōngyuán shì zhèngfǔ wèi rénmín jiàn de.', note:'为 wèi + người = cho ai (khác 为 wéi trong 为……所).', pair:'是……的'},
      {promptLang:'vi', prompt:'Không chỉ người Hà Nội quan tâm chuyện này, nhân dân cả nước cũng rất quan tâm.', answer:'不仅河内人关心这件事，全国人民也很关心。', answerPy:'Bùjǐn Hénèi rén guānxīn zhè jiàn shì, quánguó rénmín yě hěn guānxīn.', note:'不仅……也…… nối hai chủ ngữ.', pair:'不仅……也'}
    ]
  },
  {
    n: 40, zh: '矛盾', py: 'máodùn', pos: 'Danh từ / Tính từ', vn: 'sự mâu thuẫn; mâu thuẫn, giằng co', hv: 'mâu thuẫn', em: '⚔️', lesson: 1,
    explain: ['Danh từ: sự bất hoà, xung đột giữa người với người (闹矛盾 = xích mích).', 'Tính từ: trái ngược nhau; trong lòng giằng co, khó quyết (心里很矛盾).'],
    usage: '产生 / 有 / 闹 + 矛盾; 矛盾极了; 心里很矛盾 (theo bảng 词语搭配 của sách).',
    collo: ['闹矛盾', '产生矛盾', '有矛盾', '矛盾极了', '心里很矛盾'],
    ex_zh: '老人家里有两个儿子，他们俩常常闹矛盾。', ex_py: 'Lǎorén jiā li yǒu liǎng ge érzi, tāmen liǎ chángcháng nào máodùn.', ex_vn: 'Nhà ông cụ có hai người con trai, hai người thường xuyên xích mích.',
    exList: [
      {zh:'邻里之间有时虽然也有矛盾，但更多时候是互帮互助。', py:'Línlǐ zhījiān yǒushí suīrán yě yǒu máodùn, dàn gèng duō shíhou shì hù bāng hù zhù.', vn:'Hàng xóm với nhau tuy đôi khi cũng có mâu thuẫn, nhưng phần nhiều là giúp đỡ lẫn nhau.'},
      {zh:'老人家里有两个儿子，他们俩常常闹矛盾。', py:'Lǎorén jiā li yǒu liǎng ge érzi, tāmen liǎ chángcháng nào máodùn.', vn:'Nhà ông cụ có hai người con trai, hai người thường xuyên xích mích.'},
      {zh:'去还是不去？我心里矛盾极了。', py:'Qù háishi bú qù? Wǒ xīnli máodùn jí le.', vn:'Đi hay không đi? Trong lòng tôi giằng co kinh khủng.'}
    ],
    colloFull: [
      {zh:'闹矛盾', py:'nào máodùn', vn:'xích mích'},
      {zh:'产生矛盾', py:'chǎnshēng máodùn', vn:'nảy sinh mâu thuẫn'},
      {zh:'有矛盾', py:'yǒu máodùn', vn:'có mâu thuẫn'},
      {zh:'矛盾极了', py:'máodùn jí le', vn:'giằng co vô cùng'},
      {zh:'心里很矛盾', py:'xīnli hěn máodùn', vn:'trong lòng rất giằng co'}
    ],
    patterns: [
      {s:'A 跟 B + 闹矛盾', m:'A và B xích mích'},
      {s:'心里 + 很矛盾', m:'Trong lòng phân vân, giằng co'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Hai anh em chưa từng xích mích với nhau.', answer:'兄弟俩从来没闹过矛盾。', answerPy:'Xiōngdì liǎ cónglái méi nàoguo máodùn.', note:'闹过矛盾: 过 đứng sau 闹.', pair:'从来没……过'},
      {promptLang:'vi', prompt:'Tuy thỉnh thoảng có mâu thuẫn, nhưng hàng xóm vẫn giúp đỡ nhau.', answer:'虽然有时候有矛盾，但是邻居们还是互相帮助。', answerPy:'Suīrán yǒu shíhou yǒu máodùn, dànshì línjūmen háishi hùxiāng bāngzhù.', note:'Ý của đoạn cuối bài khoá.', pair:'虽然……但是'}
    ]
  },
  {
    n: 41, zh: '浓', py: 'nóng', pos: 'Tính từ', vn: 'đậm, đặc, dày; sâu sắc', hv: 'nùng', em: '☕', lesson: 1,
    explain: ['Đặc, đậm, dày (sương mù, trà, cà phê, mùi vị) — trái nghĩa 淡.', 'Mức độ sâu đậm (tình cảm, hứng thú): 浓浓的情感, 兴趣很浓.'],
    usage: '雾 / 茶 / 咖啡 + 很浓; 浓浓的 + 情感 / 香味; 对……的兴趣很浓.',
    collo: ['雾很浓', '浓茶', '浓浓的情感', '兴趣很浓'],
    ex_zh: '今天雾很浓，对面的建筑都看不清了。', ex_py: 'Jīntiān wù hěn nóng, duìmiàn de jiànzhù dōu kàn bu qīng le.', ex_vn: 'Hôm nay sương mù dày quá, toà nhà đối diện cũng không nhìn rõ.',
    exList: [
      {zh:'这种浓浓的情感是许多老北京人无法忘记的。', py:'Zhè zhǒng nóngnóng de qínggǎn shì xǔduō lǎo Běijīngrén wúfǎ wàngjì de.', vn:'Thứ tình cảm đậm đà ấy là điều nhiều người Bắc Kinh xưa không thể nào quên.'},
      {zh:'今天雾很浓，对面的建筑都看不清了。', py:'Jīntiān wù hěn nóng, duìmiàn de jiànzhù dōu kàn bu qīng le.', vn:'Hôm nay sương mù dày quá, toà nhà đối diện cũng không nhìn rõ.'},
      {zh:'晚上别喝太浓的茶，不然睡不着觉。', py:'Wǎnshang bié hē tài nóng de chá, bùrán shuì bu zháo jiào.', vn:'Buổi tối đừng uống trà quá đặc, không thì mất ngủ.'}
    ],
    colloFull: [
      {zh:'雾很浓', py:'wù hěn nóng', vn:'sương mù dày'},
      {zh:'浓茶', py:'nóng chá', vn:'trà đặc'},
      {zh:'浓浓的情感', py:'nóngnóng de qínggǎn', vn:'tình cảm đậm đà'},
      {zh:'兴趣很浓', py:'xìngqù hěn nóng', vn:'hứng thú rất lớn'},
      {zh:'浓浓的香味', py:'nóngnóng de xiāngwèi', vn:'mùi thơm nồng'}
    ],
    patterns: [
      {s:'浓浓的 + N', m:'… đậm đà (lặp lại để tả sinh động)'},
      {s:'雾 / 茶 + 很浓', m:'Sương dày / trà đặc'}
    ],
    checkList: [
      {promptLang:'vi', prompt:'Sương mù ngày càng dày, ngay cả biển báo bên đường cũng không nhìn rõ.', answer:'雾越来越浓，连路边的牌子都看不清了。', answerPy:'Wù yuè lái yuè nóng, lián lù biān de páizi dōu kàn bu qīng le.', note:'雾 + 浓; bổ ngữ khả năng 看不清.', pair:'越来越'},
      {promptLang:'vi', prompt:'Vừa mở cửa đã ngửi thấy mùi cà phê thơm nồng.', answer:'一开门就闻到了浓浓的咖啡香。', answerPy:'Yì kāi mén jiù wéndàole nóngnóng de kāfēi xiāng.', note:'浓浓的 + mùi hương.', pair:'一……就'}
    ]
  },
  {
    n: 42, zh: '华北', py: 'Huáběi', pos: 'Danh từ riêng', vn: 'Hoa Bắc (vùng phía bắc Trung Quốc)', hv: 'Hoa Bắc', em: '🗺️', lesson: 1,
    explain: ['Vùng phía bắc Trung Quốc, gồm Bắc Kinh, Thiên Tân, Hà Bắc, Sơn Tây, Nội Mông Cổ.'],
    usage: '华北地区; 华北平原; tương tự: 华南 (Hoa Nam), 华东 (Hoa Đông), 华中 (Hoa Trung).',
    collo: ['华北地区', '华北平原', '华北民居'],
    ex_zh: '四合院主要分布在中国华北地区。', ex_py: 'Sìhéyuàn zhǔyào fēnbù zài Zhōngguó Huáběi dìqū.', ex_vn: 'Tứ hợp viện chủ yếu phân bố ở vùng Hoa Bắc, Trung Quốc.',
    exList: [
      {zh:'四合院是中国华北地区民居中的一种组合建筑形式。', py:'Sìhéyuàn shì Zhōngguó Huáběi dìqū mínjū zhōng de yì zhǒng zǔhé jiànzhù xíngshì.', vn:'Tứ hợp viện là một kiểu kiến trúc tổ hợp trong nhà ở dân gian vùng Hoa Bắc, Trung Quốc.'},
      {zh:'四合院主要分布在中国华北地区。', py:'Sìhéyuàn zhǔyào fēnbù zài Zhōngguó Huáběi dìqū.', vn:'Tứ hợp viện chủ yếu phân bố ở vùng Hoa Bắc, Trung Quốc.'},
      {zh:'华北的冬天又冷又干燥。', py:'Huáběi de dōngtiān yòu lěng yòu gānzào.', vn:'Mùa đông ở Hoa Bắc vừa lạnh vừa hanh khô.'}
    ],
    colloFull: [
      {zh:'华北地区', py:'Huáběi dìqū', vn:'vùng Hoa Bắc'},
      {zh:'华北平原', py:'Huáběi píngyuán', vn:'đồng bằng Hoa Bắc'},
      {zh:'华北民居', py:'Huáběi mínjū', vn:'nhà dân vùng Hoa Bắc'},
      {zh:'华南', py:'Huánán', vn:'Hoa Nam'}
    ],
    patterns: [{s:'华 + 北 / 南 / 东 / 中', m:'Tên các vùng lớn của Trung Quốc'}],
    checkList: [
      {promptLang:'vi', prompt:'Ở vùng Hoa Bắc, tứ hợp viện ngày càng ít đi.', answer:'在华北地区，四合院越来越少了。', answerPy:'Zài Huáběi dìqū, sìhéyuàn yuè lái yuè shǎo le.', note:'在 + vùng + ，mệnh đề.', pair:'越来越'},
      {promptLang:'vi', prompt:'Bạn tôi là người Hoa Bắc, cậu ấy đến Việt Nam năm ngoái.', answer:'我朋友是华北人，他是去年来越南的。', answerPy:'Wǒ péngyou shì Huáběi rén, tā shì qùnián lái Yuènán de.', note:'是 + thời gian + V + 的.', pair:'是……的'}
    ]
  }
];

// ══════════════════════════════════════════
// BÀI KHOÁ — một bài liền, mỗi đoạn văn của sách là một dòng (617 chữ, tr. 126–128)
// ══════════════════════════════════════════
var dialogData = [
  {
    scene: '课文 · 北京的四合院',
    preQuiz: [
      {q:'四合院是中国哪个地区的民居？', opts:['华南地区', '华北地区', '华东地区'], ans:1},
      {q:'“四合”中的“合”是什么意思？', opts:['四面房屋围在一起', '四家人合住在一起', '四个院子并列在一起'], ans:0},
      {q:'在中国汉族民居中，四合院有什么特点？', opts:['规模最大，最复杂', '样式最新，最漂亮', '历史最悠久，分布最广泛'], ans:2},
      {q:'为什么人们一提到四合院，就会想到北京四合院？', opts:['北京四合院规模最大', '北京四合院有一套固定的样式，十分具有代表性', '北京四合院都是新建的'], ans:1},
      {q:'有钱人家的四合院通常是什么样的？', opts:['由好几座四合院并列组成', '只有一个院子', '没有厢房'], ans:0},
      {q:'四合院的大门一般开在哪儿？', opts:['正北面', '正南面', '东南角或西北角'], ans:2},
      {q:'正房一般包括什么？', opts:['晚辈们的卧室', '长辈的卧室和客厅', '厨房和走廊'], ans:1},
      {q:'东西厢房是谁生活的地方？', opts:['晚辈们', '客人', '长辈'], ans:0},
      {q:'正房和厢房之间的走廊有什么用？', opts:['放东西', '养金鱼', '供人行走和休息'], ans:2},
      {q:'院子对家里人有什么作用？', opts:['拉近人与自然的关系，让家里人交流感情', '让房子更便宜', '方便邻居来往'], ans:0},
      {q:'关闭起大门以后，四合院内会怎么样？', opts:['变得很热闹', '形成一个封闭式的小环境', '邻居常来打交道'], ans:1},
      {q:'什么是“大杂院”？', opts:['多户人家合住的一座四合院', '规模最大的四合院', '有钱人家的四合院'], ans:0},
      {q:'大杂院里的邻里关系怎么样？', opts:['从来没有矛盾', '谁也不理谁', '有时也有矛盾，但更多时候互帮互助'], ans:2}
    ],
    lines: [
      {
        sp: 0,
        zh: '四合院，是中国华北地区民居中的一种组合建筑形式。所谓四合，“四”指东、西、南、北四面，“合”就是四面房屋围在一起，中间形成一个方形的院子。四合院在中国汉族民居中历史最悠久，分布最广泛。不过，只要人们一提到四合院，便自然会想到北京四合院，这是因为传统的北京四合院都有一套固定的样式，十分具有代表性，在各种各样的四合院中，北京四合院可以代表其主要特点。',
        py: 'Sìhéyuàn, shì Zhōngguó Huáběi dìqū mínjū zhōng de yì zhǒng zǔhé jiànzhù xíngshì. Suǒwèi sìhé, “sì” zhǐ dōng, xī, nán, běi sìmiàn, “hé” jiù shì sìmiàn fángwū wéi zài yìqǐ, zhōngjiān xíngchéng yí ge fāngxíng de yuànzi. Sìhéyuàn zài Zhōngguó Hànzú mínjū zhōng lìshǐ zuì yōujiǔ, fēnbù zuì guǎngfàn. Búguò, zhǐyào rénmen yì tídào sìhéyuàn, biàn zìrán huì xiǎngdào Běijīng sìhéyuàn, zhè shì yīnwèi chuántǒng de Běijīng sìhéyuàn dōu yǒu yí tào gùdìng de yàngshì, shífēn jùyǒu dàibiǎoxìng, zài gè zhǒng gè yàng de sìhéyuàn zhōng, Běijīng sìhéyuàn kěyǐ dàibiǎo qí zhǔyào tèdiǎn.',
        vn: 'Tứ hợp viện là một kiểu kiến trúc tổ hợp trong nhà ở dân gian vùng Hoa Bắc, Trung Quốc. Cái gọi là “tứ hợp”: “tứ” chỉ bốn phía đông, tây, nam, bắc; “hợp” là nhà cửa bốn phía quây lại với nhau, ở giữa tạo thành một khoảng sân vuông. Trong nhà ở dân gian của người Hán, tứ hợp viện có lịch sử lâu đời nhất, phân bố rộng rãi nhất. Tuy vậy, hễ nhắc đến tứ hợp viện là người ta tự nhiên nghĩ ngay đến tứ hợp viện Bắc Kinh; đó là vì tứ hợp viện Bắc Kinh truyền thống đều có một kiểu dáng cố định, rất tiêu biểu — trong muôn vàn kiểu tứ hợp viện, tứ hợp viện Bắc Kinh có thể đại diện cho những đặc điểm chủ yếu của nó.'
      },
      {
        sp: 0,
        zh: '北京有各种规模的四合院。最简单的四合院只有一个院子，比较复杂的有两三个，而有钱人家的，通常是由好几座四合院并列组成的。大门一般开在东南角或西北角，院中的北房是正房，比其他房屋的规模大，一般包括长辈的卧室和具备日常起居、接待客人等功能的客厅。院子的两边是东西厢房，是晚辈们生活的地方。在正房和厢房之间建有走廊，可以供人行走和休息。院子是十分理想的室外生活空间。有的人家喜欢种草、养花、种竹子，有的人家则喜欢用大盆养金鱼。院子不仅拉近了人与自然的关系，也让家里人在此得到了感情的交流，对创造生活情趣起了很大作用，因而最为人们所喜爱。',
        py: 'Běijīng yǒu gè zhǒng guīmó de sìhéyuàn. Zuì jiǎndān de sìhéyuàn zhǐ yǒu yí ge yuànzi, bǐjiào fùzá de yǒu liǎng-sān ge, ér yǒu qián rénjiā de, tōngcháng shì yóu hǎo jǐ zuò sìhéyuàn bìngliè zǔchéng de. Dàmén yìbān kāi zài dōngnán jiǎo huò xīběi jiǎo, yuàn zhōng de běifáng shì zhèngfáng, bǐ qítā fángwū de guīmó dà, yìbān bāokuò zhǎngbèi de wòshì hé jùbèi rìcháng qǐjū, jiēdài kèrén děng gōngnéng de kètīng. Yuànzi de liǎngbiān shì dōng xī xiāngfáng, shì wǎnbèimen shēnghuó de dìfang. Zài zhèngfáng hé xiāngfáng zhījiān jiàn yǒu zǒuláng, kěyǐ gōng rén xíngzǒu hé xiūxi. Yuànzi shì shífēn lǐxiǎng de shìwài shēnghuó kōngjiān. Yǒu de rénjiā xǐhuan zhòng cǎo, yǎng huā, zhòng zhúzi, yǒu de rénjiā zé xǐhuan yòng dà pén yǎng jīnyú. Yuànzi bùjǐn lājìnle rén yǔ zìrán de guānxi, yě ràng jiā li rén zài cǐ dédàole gǎnqíng de jiāoliú, duì chuàngzào shēnghuó qíngqù qǐle hěn dà zuòyòng, yīn\'ér zuì wéi rénmen suǒ xǐ\'ài.',
        vn: 'Bắc Kinh có tứ hợp viện đủ mọi quy mô. Tứ hợp viện đơn giản nhất chỉ có một sân, loại phức tạp hơn có hai ba sân, còn của nhà giàu thì thường do mấy toà tứ hợp viện nằm song song hợp thành. Cổng lớn thường mở ở góc đông nam hoặc góc tây bắc; dãy nhà phía bắc trong sân là chính phòng, quy mô lớn hơn các dãy khác, thường gồm phòng ngủ của bậc bề trên và phòng khách có đủ công năng sinh hoạt hằng ngày, tiếp đãi khách khứa. Hai bên sân là dãy nhà chái đông và tây, là nơi sinh hoạt của lớp con cháu. Giữa chính phòng và nhà chái có xây hành lang để người ta đi lại và nghỉ ngơi. Sân là không gian sinh hoạt ngoài trời vô cùng lý tưởng. Có nhà thích trồng cỏ, nuôi hoa, trồng trúc, có nhà thì lại thích nuôi cá vàng trong chậu lớn. Khoảng sân không những kéo gần mối quan hệ giữa con người với thiên nhiên, mà còn giúp người trong nhà được giao lưu tình cảm tại đây, góp phần rất lớn vào việc tạo nên thú vui cuộc sống, vì thế được mọi người yêu thích nhất.'
      },
      {
        sp: 0,
        zh: '只要关闭起大门，四合院内便形成一个封闭式的小环境。住在四合院里的人不常与周围的邻居打交道。在小院里，一家人过着与世无争的日子，充分享受家庭的乐趣，自然有一种令人感到自在亲切的气氛。但也有多户合住一座四合院的情况，被称为“大杂院”，住户多为普通劳动人民。邻里之间有时虽然也有矛盾，但更多时候是互帮互助，不是亲人胜过亲人，这种浓浓的情感是许多老北京人无法忘记的。',
        py: 'Zhǐyào guānbì qǐ dàmén, sìhéyuàn nèi biàn xíngchéng yí ge fēngbìshì de xiǎo huánjìng. Zhù zài sìhéyuàn li de rén bù cháng yǔ zhōuwéi de línjū dǎ jiāodào. Zài xiǎo yuàn li, yì jiā rén guòzhe yǔ shì wú zhēng de rìzi, chōngfèn xiǎngshòu jiātíng de lèqù, zìrán yǒu yì zhǒng lìng rén gǎndào zìzai qīnqiè de qìfēn. Dàn yě yǒu duō hù hé zhù yí zuò sìhéyuàn de qíngkuàng, bèi chēngwéi “dàzáyuàn”, zhùhù duō wéi pǔtōng láodòng rénmín. Línlǐ zhījiān yǒushí suīrán yě yǒu máodùn, dàn gèng duō shíhou shì hù bāng hù zhù, bú shì qīnrén shèngguò qīnrén, zhè zhǒng nóngnóng de qínggǎn shì xǔduō lǎo Běijīngrén wúfǎ wàngjì de.',
        vn: 'Chỉ cần đóng cổng lớn lại, bên trong tứ hợp viện liền thành một môi trường nhỏ khép kín. Người sống trong tứ hợp viện không hay giao thiệp với hàng xóm xung quanh. Trong khoảng sân nhỏ, cả nhà sống những ngày tháng bình yên, không tranh giành với đời, tận hưởng trọn vẹn niềm vui gia đình, tự nhiên có một bầu không khí khiến người ta thấy thoải mái, thân thuộc. Nhưng cũng có trường hợp nhiều hộ ở chung một toà tứ hợp viện, được gọi là “đại tạp viện” (khu nhà nhiều hộ ở chung), cư dân phần lớn là người lao động bình thường. Hàng xóm với nhau tuy đôi khi cũng có mâu thuẫn, nhưng phần nhiều là giúp đỡ lẫn nhau, không phải người thân mà còn hơn cả người thân; thứ tình cảm đậm đà ấy là điều nhiều người Bắc Kinh xưa không thể nào quên.'
      }
    ]
  }
];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA — 通常/常常 lấy từ 词语辨析 của sách (tr. 131) + 2 cặp dễ nhầm trong bài
// ══════════════════════════════════════════
var synonymData = [
  {
    pair: '通常 — 常常',
    same: 'Đều chỉ hành động xảy ra THƯỜNG XUYÊN, có câu thay cho nhau được, nhưng ý nhấn mạnh khác nhau.',
    sameEx: {zh:'我通常／常常在学校外面那个超市买东西。', vn:'Tôi thường mua đồ ở siêu thị bên ngoài trường.'},
    items: [
      {
        word: '通常',
        points: ['Nhấn vào QUY LUẬT — theo lệ thường thì như vậy.', 'Là tính từ: làm ĐỊNH NGỮ được (通常的做法, 通常情况下).', 'Đứng được ở đầu câu, bổ nghĩa cho cả mệnh đề.'],
        ex: [
          {zh:'有钱人家的，通常是由好几座四合院并列组成的。', vn:'Của nhà giàu thì thường do mấy toà tứ hợp viện nằm song song hợp thành.'},
          {zh:'我们通常的做法都是这样的。', vn:'Cách làm thông thường của chúng tôi đều là như vậy.'}
        ]
      },
      {
        word: '常常',
        points: ['Nhấn vào SỐ LẦN — việc xảy ra nhiều lần, không cần có quy luật.', 'Là phó từ: KHÔNG làm định ngữ, không bổ nghĩa cho cả mệnh đề.', 'Dùng cả cho việc bất chợt, không theo lệ: 常常迟到, 常常生病.'],
        ex: [
          {zh:'他成绩很好，常常受到表扬。', vn:'Cậu ấy học giỏi, thường xuyên được khen.'},
          {zh:'他常常去上海出差，对上海很熟悉。', vn:'Anh ấy hay đi Thượng Hải công tác, rất thông thạo Thượng Hải.'}
        ]
      }
    ],
    quiz: [
      {sentence:'她＿＿在家帮妈妈干活儿。', options:['通常', '常常'], answer:1, why:'Nói việc làm NHIỀU LẦN, không phải một lệ cố định → 常常 (sách đánh dấu 通常 ×).'},
      {sentence:'＿＿除夕晚上都要放鞭炮、吃饺子。', options:['通常', '常常'], answer:0, why:'Đứng đầu câu nói một phong tục theo lệ → 通常. 常常 là phó từ, không bổ nghĩa cho cả mệnh đề; đêm giao thừa mỗi năm chỉ có một lần nên cũng không nói "nhiều lần".'},
      {sentence:'在＿＿情况下，火车是不会晚点的。', options:['通常', '常常'], answer:0, why:'Làm ĐỊNH NGỮ cho 情况 → chỉ 通常 (tính từ). 常常 không làm định ngữ.'},
      {sentence:'周末他＿＿去父母家过。', options:['通常', '常常'], answer:0, both:true, why:'Cuối tuần về nhà bố mẹ vừa là thói quen có quy luật (通常) vừa là việc lặp lại nhiều lần (常常) → cả hai đều được.'}
    ],
    sgk: {
      chung: {t:'都表示经常发生同样的动作行为，在有些句子里可以换用，但强调的意思不同。', vn:'Đều chỉ hành động giống nhau xảy ra thường xuyên, ở một số câu có thể thay nhau, nhưng ý nhấn mạnh khác nhau.', vd:'我通常／常常在学校外面那个超市买东西。', vdVn:'Tôi thường mua đồ ở siêu thị bên ngoài trường.'},
      khac: [
        {
          a: {t:'强调动作行为有规律。', vn:'Nhấn mạnh hành động có quy luật.', vd:'有钱人家的，通常是由好几座四合院并列组成的。', vdVn:'Của nhà giàu thì thường do mấy toà tứ hợp viện nằm song song hợp thành.'},
          b: {t:'强调动作行为多次出现。', vn:'Nhấn mạnh hành động xuất hiện nhiều lần.', vd:'他成绩很好，常常受到表扬。', vdVn:'Cậu ấy học giỏi, thường xuyên được khen.'}
        },
        {
          a: {t:'形容词，可以做定语。', vn:'Là tính từ, có thể làm định ngữ.', vd:'我们通常的做法都是这样的。', vdVn:'Cách làm thông thường của chúng tôi đều là như vậy.'},
          b: {t:'副词，不可以做定语或修饰小句。', vn:'Là phó từ, không thể làm định ngữ hay bổ nghĩa cho cả mệnh đề.', vd:'他常常去上海出差，对上海很熟悉。', vdVn:'Anh ấy hay đi Thượng Hải công tác, rất thông thạo Thượng Hải.'}
        }
      ],
      lamThu: [
        {s:'她＿＿在家帮妈妈干活儿。', dap:[false, true], mau:true, giai:'Việc lặp lại nhiều lần, không phải lệ cố định → chỉ 常常 (câu mẫu của sách).'},
        {s:'＿＿除夕晚上都要放鞭炮、吃饺子。', dap:[true, false], giai:'Phong tục theo lệ, từ đứng đầu câu bổ nghĩa cho cả mệnh đề → chỉ 通常.'},
        {s:'在＿＿情况下，火车是不会晚点的。', dap:[true, false], giai:'Làm định ngữ cho 情况 → chỉ 通常 (tính từ).'},
        {s:'周末他＿＿去父母家过。', dap:[true, true], giai:'Thói quen có quy luật (通常) hay việc lặp lại nhiều lần (常常) — cả hai đều hợp.'}
      ]
    }
  },
  {
    pair: '组成 — 组合',
    same: 'Đều là động từ, đều có nghĩa nhiều bộ phận hợp lại thành một chỉnh thể.',
    sameEx: {zh:'我们五个人组成了一个学习小组。／我们五个人组合成了一个学习小组。', vn:'Năm người chúng tôi lập thành một nhóm học tập.'},
    items: [
      {
        word: '组成',
        points: ['Nhấn vào KẾT QUẢ: các thành phần tạo nên một chỉnh thể.', 'Khung hay gặp: 由……组成; 组成部分 (bộ phận cấu thành).', 'Không đi với 起来 / 到一起.'],
        ex: [
          {zh:'我们班由三十个学生组成。', vn:'Lớp chúng tôi gồm ba mươi học sinh.'},
          {zh:'手机已经成为人们生活中的重要组成部分。', vn:'Điện thoại đã trở thành một phần quan trọng trong cuộc sống.'}
        ]
      },
      {
        word: '组合',
        points: ['Nhấn vào QUÁ TRÌNH ghép, sắp đặt các bộ phận lại với nhau.', 'Đi với bổ ngữ: 组合起来 / 组合到一起 / 组合成.', 'Còn là danh từ: một tổ hợp, nhóm nhạc (音乐组合).'],
        ex: [
          {zh:'这本书是由三个部分组合起来的。', vn:'Cuốn sách này do ba phần ghép lại mà thành.'},
          {zh:'请把这几个词组合成一个句子。', vn:'Hãy ghép mấy từ này thành một câu.'}
        ]
      }
    ],
    quiz: [
      {sentence:'手机已经成为人们生活中的重要＿＿部分。', options:['组成', '组合'], answer:0, why:'组成部分 (bộ phận cấu thành) là cụm cố định — bài tập 2 của sách.'},
      {sentence:'这本书是由三个部分＿＿起来的。', options:['组成', '组合'], answer:1, why:'Có bổ ngữ 起来 → 组合起来 (bài tập 1 của sách). 组成 không đi với 起来.'},
      {sentence:'我们班由三十个学生＿＿。', options:['组成', '组合'], answer:0, why:'由……组成 là khung cố định, kết thúc câu gọn; 组合 thường cần bổ ngữ phía sau.'},
      {sentence:'他把几个旧零件＿＿到一起，做成了一台收音机。', options:['组成', '组合'], answer:1, why:'Nhấn quá trình GHÉP các bộ phận + bổ ngữ 到一起 → 组合.'}
    ]
  },
  {
    pair: '令 — 让',
    same: 'Đều là động từ sai khiến, đều có nghĩa "khiến, làm cho" ai đó có cảm xúc nào đó. Khi nói cảm xúc thì thay cho nhau được.',
    sameEx: {zh:'这个消息令／让大家很高兴。', vn:'Tin này làm mọi người rất vui.'},
    items: [
      {
        word: '令',
        points: ['Văn viết, trang trọng.', 'Chủ yếu đi với cảm xúc, đánh giá: 令人感动, 令人满意, 令人难忘.', 'KHÔNG dùng cho yêu cầu, nhờ vả, cho phép.'],
        ex: [
          {zh:'在小院里，自然有一种令人感到自在亲切的气氛。', vn:'Trong khoảng sân nhỏ, tự nhiên có một bầu không khí khiến người ta thấy thoải mái, thân thuộc.'},
          {zh:'他的故事令人感动。', vn:'Câu chuyện của anh ấy khiến người ta cảm động.'}
        ]
      },
      {
        word: '让',
        points: ['Khẩu ngữ, dùng rất rộng.', 'Ngoài nghĩa "khiến", còn là bảo, yêu cầu, cho phép: 让我去, 让他进来.', 'Trong khẩu ngữ còn làm giới từ bị động: 杯子让他打破了.'],
        ex: [
          {zh:'是那位工程师让我把机器安装在这儿。', vn:'Là vị kỹ sư ấy bảo tôi lắp máy ở đây.'},
          {zh:'妈妈不让我晚上一个人出去。', vn:'Mẹ không cho tôi buổi tối ra ngoài một mình.'}
        ]
      }
    ],
    quiz: [
      {sentence:'是那位工程师＿＿我把机器安装在这儿。', options:['令', '让'], answer:1, why:'Bảo ai làm một việc cụ thể (yêu cầu) → 让. 令 chỉ dùng cho cảm xúc, đánh giá (bài tập 2 của sách).'},
      {sentence:'这次比赛的结果＿＿人满意。', options:['令', '让'], answer:0, both:true, why:'Cảm xúc hài lòng → cả hai đều được; 令人满意 là cách nói văn viết quen dùng hơn.'},
      {sentence:'妈妈不＿＿我晚上一个人出去。', options:['令', '让'], answer:1, why:'Nghĩa "cho phép / không cho phép" → chỉ 让.'},
      {sentence:'请＿＿我想一想再回答。', options:['令', '让'], answer:1, why:'Xin phép, nhờ vả → 让. Không nói ✗请令我…….'}
    ]
  }
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy: [
    {zh:'建筑', hv:'kiến trúc', vn:'kiến trúc', note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'形式', hv:'hình thức', vn:'hình thức', note:'Trùng khít.'},
    {zh:'空间', hv:'không gian', vn:'không gian', note:'Trùng khít.'},
    {zh:'创造', hv:'sáng tạo', vn:'sáng tạo, tạo ra', note:'Trùng khít.'},
    {zh:'矛盾', hv:'mâu thuẫn', vn:'mâu thuẫn', note:'Trùng khít — “mâu” là cái giáo, “thuẫn” là cái khiên.'},
    {zh:'劳动', hv:'lao động', vn:'lao động', note:'Trùng khít.'},
    {zh:'人民', hv:'nhân dân', vn:'nhân dân', note:'Trùng khít — nhưng ngược trật tự chữ: 人民 = nhân dân.'},
    {zh:'功能', hv:'công năng', vn:'chức năng', note:'“Công năng” tiếng Việt cũng dùng: công năng của căn phòng.'},
    {zh:'组合', hv:'tổ hợp', vn:'kết hợp, tổ hợp', note:'“Tổ hợp” như trong “tổ hợp môn thi”.'},
    {zh:'接待', hv:'tiếp đãi', vn:'tiếp đón', note:'“Tiếp đãi” tiếng Việt cũng là tiếp đón khách.'},
    {zh:'代表', hv:'đại biểu', vn:'đại diện, đại biểu', note:'“Đại biểu” = người thay mặt; 代表性 = tính tiêu biểu.'},
    {zh:'通常', hv:'thông thường', vn:'thường, thông thường', note:'Trùng khít.'},
    {zh:'并列', hv:'tịnh liệt', vn:'đặt song song', note:'“Tịnh” = cùng, ngang nhau; “liệt” = xếp hàng (như “liệt kê”).'},
    {zh:'封闭', hv:'phong bế', vn:'khép kín, phong toả', note:'“Phong” như trong “phong toả”, “bế” = đóng (như “bế mạc”).'}
  ],
  idiom: [
    {zh:'与世无争', hv:'dữ thế vô tranh', vn:'không tranh giành với đời', note:'Sống bình yên, không đua chen danh lợi.'},
    {zh:'互帮互助', hv:'hỗ bang hỗ trợ', vn:'giúp đỡ lẫn nhau', note:'“Hỗ” = lẫn nhau (như “hỗ trợ”).'},
    {zh:'各种各样', hv:'các chủng các dạng', vn:'đủ loại, muôn hình muôn vẻ', note:'Lặp 各 để nhấn mạnh sự đa dạng.'},
    {zh:'欲速则不达', hv:'dục tốc tắc bất đạt', vn:'dục tốc bất đạt', note:'Tiếng Việt có sẵn câu “dục tốc bất đạt” — chữ 则 chính là “tắc” (thì).'}
  ],
  trap: [
    {zh:'所谓', hv:'sở vị', vn:'cái gọi là', warn:'BẪY: dễ nhầm với 所以 (sở dĩ → “cho nên”). 所谓 = cái gọi là, thường có ngoặc kép theo sau.'},
    {zh:'日子', hv:'nhật tử', vn:'cuộc sống, ngày tháng', warn:'BẪY: không chỉ là “ngày” — 过日子 là sống qua ngày, 日子越过越好 là cuộc sống ngày càng khá.'},
    {zh:'打交道', hv:'đả giao đạo', vn:'giao thiệp, tiếp xúc', warn:'BẪY: 打 ở đây không phải “đánh”. Nhớ cả cụm: 跟……打交道 = giao thiệp với ai.'},
    {zh:'令', hv:'lệnh', vn:'khiến, làm cho', warn:'BẪY: “lệnh” gợi “ra lệnh”, nhưng trong bài 令 là “khiến cho” cảm xúc: 令人感动. Bảo ai làm việc gì thì dùng 让.'},
    {zh:'方', hv:'phương', vn:'vuông', warn:'BẪY: “phương” gợi “phương hướng”, nhưng ở đây 方 là tính từ “vuông”: 方形的院子.'},
    {zh:'种', hv:'chủng', vn:'trồng (zhòng)', warn:'BẪY ĐA ÂM: 种 zhòng = trồng (động từ); 种 zhǒng = loại (lượng từ). Bài này có cả hai: 种竹子 / 一种建筑形式.'},
    {zh:'为', hv:'vi', vn:'bị, được (wéi)', warn:'BẪY ĐA ÂM: trong 为……所…… đọc wéi (nghĩa như 被); 为人民服务 đọc wèi (vì, cho).'},
    {zh:'浓', hv:'nùng', vn:'đậm, đặc, dày', warn:'“Nùng” có trong “nồng nàn”, “nồng đậm” — đoán được nghĩa, nhưng nhớ 雾很浓 là sương mù DÀY.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP CỤM — theo bảng 词语搭配 của sách (tr. 130–131)
// ══════════════════════════════════════════
var matchData = [
  {left:'具备', right:'功能'},
  {left:'创造', right:'奇迹'},
  {left:'产生', right:'矛盾'},
  {left:'日常', right:'用语'},
  {left:'与世无争的', right:'日子'},
  {left:'广泛', right:'调查'},
  {left:'组合', right:'起来'},
  {left:'兴趣', right:'广泛'},
  {left:'准备', right:'充分'},
  {left:'接待', right:'客人'},
  {left:'关闭', right:'大门'},
  {left:'种', right:'竹子'},
  {left:'用大盆养', right:'金鱼'},
  {left:'令人', right:'感动'},
  {left:'跟邻居', right:'打交道'},
  {left:'尊重', right:'长辈'},
  {left:'劳动', right:'人民'},
  {left:'东西', right:'厢房'},
  {left:'封闭式的', right:'小环境'},
  {left:'浓浓的', right:'情感'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'北京的', blank:'四合院', post:'十分具有代表性。', hint:'(tứ hợp viện)', ans:'四合院'},
  {pre:'四合院是中国华北地区', blank:'民居', post:'中的一种组合建筑形式。', hint:'(nhà ở dân gian)', ans:'民居'},
  {pre:'这本书是由三个部分', blank:'组合', post:'起来的。', hint:'(ghép, kết hợp)', ans:'组合'},
  {pre:'这就是我们家乡的标志性', blank:'建筑', post:'。', hint:'(công trình kiến trúc)', ans:'建筑'},
  {pre:'相对而言，我觉得功能比', blank:'形式', post:'重要。', hint:'(hình thức)', ans:'形式'},
  {pre:'很多时候，烦恼是自己找来的，这就是', blank:'所谓', post:'的“自寻烦恼”。', hint:'(cái gọi là)', ans:'所谓'},
  {pre:'四面房屋围在一起，中间形成一个', blank:'方', post:'形的院子。', hint:'(vuông)', ans:'方'},
  {pre:'这个问题需要进行', blank:'广泛', post:'调查，然后才能做出决定。', hint:'(rộng rãi)', ans:'广泛'},
  {pre:'这台空调功能不错，但是', blank:'样式', post:'不太适合我们家的装修风格。', hint:'(kiểu dáng)', ans:'样式'},
  {pre:'在各种各样的四合院中，北京四合院可以', blank:'代表', post:'其主要特点。', hint:'(đại diện)', ans:'代表'},
  {pre:'有钱人家的四合院，', blank:'通常', post:'是由好几座四合院并列组成的。', hint:'(thông thường)', ans:'通常'},
  {pre:'这次比赛，他们俩', blank:'并列', post:'第一。', hint:'(ngang hàng, đồng)', ans:'并列'},
  {pre:'手机已经成为人们生活中的重要', blank:'组成', post:'部分。', hint:'(cấu thành)', ans:'组成'},
  {pre:'正房一般包括', blank:'长辈', post:'的卧室和客厅。', hint:'(bậc bề trên)', ans:'长辈'},
  {pre:'现在的手机都', blank:'具备', post:'很多功能，不再只是个打电话的工具。', hint:'(có đủ)', ans:'具备'},
  {pre:'刚开始学中文的时候，我学的主要是一些', blank:'日常', post:'用语。', hint:'(hằng ngày)', ans:'日常'},
  {pre:'这是我第一次负责', blank:'接待', post:'这么大的一个代表团。', hint:'(tiếp đón)', ans:'接待'},
  {pre:'这种手表有测量心跳的', blank:'功能', post:'。', hint:'(chức năng)', ans:'功能'},
  {pre:'院子的两边是东西', blank:'厢房', post:'，是晚辈们生活的地方。', hint:'(nhà chái)', ans:'厢房'},
  {pre:'下课的时候，不要在', blank:'走廊', post:'里跑。', hint:'(hành lang)', ans:'走廊'},
  {pre:'院子是十分理想的室外生活', blank:'空间', post:'。', hint:'(không gian)', ans:'空间'},
  {pre:'爷爷在院子里', blank:'种', post:'了很多菜。', hint:'(trồng)', ans:'种'},
  {pre:'熊猫最爱吃', blank:'竹子', post:'。', hint:'(tre, trúc)', ans:'竹子'},
  {pre:'猫享受独处的快乐，而狗', blank:'则', post:'是希望和别人分享快乐。', hint:'(còn … thì)', ans:'则'},
  {pre:'有的人家喜欢用大盆养', blank:'金鱼', post:'。', hint:'(cá vàng)', ans:'金鱼'},
  {pre:'他三年就打下这么大一片市场，真是', blank:'创造', post:'了一个奇迹。', hint:'(tạo ra)', ans:'创造'},
  {pre:'姥姥养花、养鸟，生活很有', blank:'情趣', post:'。', hint:'(thú vị, có gu)', ans:'情趣'},
  {pre:'他坚持锻炼，', blank:'因而', post:'身体很好。', hint:'(do đó)', ans:'因而'},
  {pre:'考试开始前，请大家', blank:'关闭', post:'手机。', hint:'(đóng, tắt)', ans:'关闭'},
  {pre:'住在四合院里的人不常与周围的邻居', blank:'打交道', post:'。', hint:'(giao thiệp)', ans:'打交道'},
  {pre:'在小院里，一家人过着与世无争的', blank:'日子', post:'。', hint:'(cuộc sống, ngày tháng)', ans:'日子'},
  {pre:'考试前他做了', blank:'充分', post:'的准备，所以一点儿也不紧张。', hint:'(đầy đủ)', ans:'充分'},
  {pre:'他的故事', blank:'令', post:'人感动。', hint:'(khiến)', ans:'令'},
  {pre:'在国外听到有人说越南语，我感到特别', blank:'亲切', post:'。', hint:'(thân thương)', ans:'亲切'},
  {pre:'大杂院的住户多为普通', blank:'劳动', post:'人民。', hint:'(lao động)', ans:'劳动'},
  {pre:'老人家里的两个儿子常常闹', blank:'矛盾', post:'。', hint:'(mâu thuẫn)', ans:'矛盾'},
  {pre:'今天雾很', blank:'浓', post:'，对面的建筑都看不清了。', hint:'(dày, đậm)', ans:'浓'},
  {pre:'四合院主要分布在中国', blank:'华北', post:'地区。', hint:'(Hoa Bắc)', ans:'华北'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (所谓 · 则 · 为……所…… · 起) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['这', '就是', '所谓的', '“自寻烦恼”', '。'], ans:'这就是所谓的“自寻烦恼”。', audio:'这就是所谓的“自寻烦恼”。'},
  {words:['所谓', '四合', '，', '“四”', '指', '东、西、南、北', '四面', '。'], ans:'所谓四合，“四”指东、西、南、北四面。', audio:'所谓四合，“四”指东、西、南、北四面。'},
  {words:['北京的冬天', '，', '有风', '则', '寒', '，', '无风', '则', '暖', '。'], ans:'北京的冬天，有风则寒，无风则暖。', audio:'北京的冬天，有风则寒，无风则暖。'},
  {words:['猫', '享受', '独处的快乐', '，', '而', '狗', '则', '希望', '和别人分享快乐', '。'], ans:'猫享受独处的快乐，而狗则希望和别人分享快乐。', audio:'猫享受独处的快乐，而狗则希望和别人分享快乐。'},
  {words:['大家', '都', '为', '他的精神', '所', '感动', '。'], ans:'大家都为他的精神所感动。', audio:'大家都为他的精神所感动。'},
  {words:['四合院', '最', '为', '人们', '所', '喜爱', '。'], ans:'四合院最为人们所喜爱。', audio:'四合院最为人们所喜爱。'},
  {words:['他', '拉起', '我的手', '，', '走', '进了', '教室', '。'], ans:'他拉起我的手，走进了教室。', audio:'他拉起我的手，走进了教室。'},
  {words:['只要', '关闭起', '大门', '，', '四合院内', '便', '形成', '一个', '封闭式的', '小环境', '。'], ans:'只要关闭起大门，四合院内便形成一个封闭式的小环境。', audio:'只要关闭起大门，四合院内便形成一个封闭式的小环境。'},
  {words:['我们', '要', '建立起', '一套', '有效的', '制度', '。'], ans:'我们要建立起一套有效的制度。', audio:'我们要建立起一套有效的制度。'},
  {words:['周末', '他', '通常', '去', '父母家', '过', '。'], ans:'周末他通常去父母家过。', audio:'周末他通常去父母家过。', alt:['他周末通常去父母家过。']},
  {words:['我们班', '由', '三十个', '学生', '组成', '。'], ans:'我们班由三十个学生组成。', audio:'我们班由三十个学生组成。'},
  {words:['我', '不常', '跟', '邻居', '打交道', '。'], ans:'我不常跟邻居打交道。', audio:'我不常跟邻居打交道。'},
  {words:['这次比赛的', '结果', '令', '大家', '都', '很', '满意', '。'], ans:'这次比赛的结果令大家都很满意。', audio:'这次比赛的结果令大家都很满意。'},
  {words:['现在的', '手机', '都', '具备', '很多', '功能', '。'], ans:'现在的手机都具备很多功能。', audio:'现在的手机都具备很多功能。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'正房是具备日常____、接待客人等功能的地方。', opts:['起居', '起来', '居民', '日子'], ans:0, exp:'日常起居 = sinh hoạt thường ngày (ăn ở, nghỉ ngơi) → 起居. 起来 là bổ ngữ; 居民 là cư dân; 日子 là cuộc sống, không đi sau 日常.'},
  {wrong:'认识他的人，没有人不____他认真的工作态度所感动。', opts:['为', '对', '让', '给'], ans:0, exp:'Khung cố định 为……所…… (văn viết, nghĩa như 被). 对, 让, 给 không kết hợp với 所 + V.'},
  {wrong:'只要关闭起大门，四合院内便形成一个____式的小环境。', opts:['封闭', '关闭', '亲切', '方'], ans:0, exp:'封闭式 = kiểu khép kín là cách nói cố định. 关闭 là hành động đóng cửa, không nói ✗关闭式.'},
  {wrong:'大杂院的住户多为普通劳动____。', opts:['人民', '人们', '人家', '人物'], ans:0, exp:'劳动人民 (nhân dân lao động) là cụm cố định. 人们 = người ta nói chung; 人家 = hộ gia đình; 人物 = nhân vật.'},
  {wrong:'在____情况下，火车是不会晚点的。', opts:['通常', '常常', '经常', '往往'], ans:0, exp:'Cần một từ làm ĐỊNH NGỮ cho 情况 → chỉ 通常 (tính từ). 常常, 经常, 往往 đều là phó từ.'},
  {wrong:'她____在家帮妈妈干活儿。', opts:['常常', '通常的', '日常', '平常的'], ans:0, exp:'Đứng trước động từ, nói việc lặp lại nhiều lần → phó từ 常常. 通常的, 平常的 có 的 chỉ đứng trước danh từ; 日常 cũng chỉ làm định ngữ.'},
  {wrong:'我们班由三十个学生____。', opts:['组成', '组合', '并列', '具备'], ans:0, exp:'由……组成 là khung cố định (gồm có). 组合 cần bổ ngữ phía sau (组合起来); 并列, 具备 không hợp nghĩa.'},
  {wrong:'他把几个旧零件____到一起，做成了一台收音机。', opts:['组合', '组成', '创造', '代表'], ans:0, exp:'Nhấn quá trình GHÉP bộ phận + bổ ngữ 到一起 → 组合. 组成 không đi với 到一起.'},
  {wrong:'是那位工程师____我把机器安装在这儿。', opts:['让', '令', '被', '为'], ans:0, exp:'Bảo ai làm một việc cụ thể → 让. 令 chỉ dùng cho cảm xúc (令人感动); 被, 为 là bị động, sai nghĩa.'},
  {wrong:'他的兴趣爱好非常____，跟谁都能聊到一块儿。', opts:['广泛', '广大', '充分', '宽'], ans:0, exp:'兴趣 / 爱好 + 广泛 (theo 词语搭配 của sách). 广大 đi với diện tích, quần chúng (广大群众); 充分 đi với 准备, 理由.'},
  {wrong:'他坚持锻炼，____身体很好。', opts:['因而', '反而', '然而', '但是'], ans:0, exp:'Vế sau là KẾT QUẢ của vế trước → 因而. 反而 (ngược lại), 然而 / 但是 (nhưng) đều mang ý trái ngược.'},
  {wrong:'他已经____了当老师的条件。', opts:['具备', '准备', '组成', '接待'], ans:0, exp:'具备 + 条件 = có đủ điều kiện. 准备 là chuẩn bị (không nói 准备了条件 với nghĩa "có đủ"); 组成, 接待 không hợp.'},
  {wrong:'父母努力工作，为我们____了很好的学习条件。', opts:['创造', '制造', '建筑', '组合'], ans:0, exp:'创造条件 = tạo điều kiện. 制造 dùng cho sản phẩm, hoặc việc xấu (制造麻烦); 建筑, 组合 không đi với 条件.'},
  {wrong:'我们要____利用课余时间多读书。', opts:['充分', '充满', '广泛', '浓'], ans:0, exp:'充分利用 = tận dụng triệt để. 充满 là động từ "tràn đầy" (充满希望); 广泛, 浓 không bổ nghĩa cho 利用.'},
  {wrong:'那位老人很____，总是笑着跟我们打招呼。', opts:['亲切', '亲人', '热闹', '封闭'], ans:0, exp:'Tả thái độ gần gũi, ấm áp của một người → 亲切. 亲人 là danh từ (người thân); 热闹 tả nơi chốn đông vui; 封闭 là khép kín.'},
  {wrong:'去还是不去？我心里____极了。', opts:['矛盾', '问题', '麻烦', '日子'], ans:0, exp:'心里很矛盾 / 矛盾极了 = trong lòng giằng co khó quyết. 问题, 麻烦, 日子 không làm vị ngữ kiểu 心里……极了.'},
  {wrong:'现在农村人的____越过越好了。', opts:['日子', '日常', '天气', '时间'], ans:0, exp:'日子越过越好 = cuộc sống ngày càng khấm khá (过日子). 日常 chỉ làm định ngữ; 天气, 时间 không đi với 过.'},
  {wrong:'晚上别喝太____的茶，不然睡不着觉。', opts:['浓', '深', '重', '厚'], ans:0, exp:'Trà, cà phê đặc → 浓茶. 深 dùng cho màu sắc, độ sâu; 重 là nặng; 厚 là dày (sách, quần áo).'},
  {wrong:'他____的“新闻”，其实我们早就知道了！', opts:['所谓', '所以', '称为', '通常'], ans:0, exp:'所谓的“……” = cái mà anh ta gọi là … (hàm ý mỉa mai). 所以 là “cho nên”; 称为 cần tân ngữ phía sau; 通常 không đi với 的 + ngoặc kép kiểu này.'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Tôi thích ôn bài trong không gian yên tĩnh, còn bạn cùng bàn thì quen vừa nghe nhạc vừa làm bài.', zh:'我喜欢在安静的空间里复习，同桌则习惯一边听音乐一边做题。', py:'Wǒ xǐhuan zài ānjìng de kōngjiān li fùxí, tóngzhuō zé xíguàn yìbiān tīng yīnyuè yìbiān zuò tí.', goiY:['则','一边……一边……','空间'], giai:'A……，B 则…… dùng để đối chiếu hai người/hai việc (= "còn … thì"); 则 đứng SAU chủ ngữ 同桌, không đứng đầu vế.'},
  {vi:'Tuy cốt truyện của bộ phim này rất đơn giản, nhưng cả lớp đều xúc động trước lòng hiếu thảo của nhân vật chính đối với người lớn trong nhà.', zh:'虽然这部电影的情节很简单，但是全班同学都为主人公对长辈的孝顺所感动。', py:'Suīrán zhè bù diànyǐng de qíngjié hěn jiǎndān, dànshì quán bān tóngxué dōu wéi zhǔréngōng duì zhǎngbèi de xiàoshùn suǒ gǎndòng.', goiY:['虽然……但是……','为……所……','长辈','孝顺'], giai:'为 + tác nhân + 所 + V là bị động văn viết (= 被……感动), 为 đọc wéi; dịch thuận là "xúc động trước…", không dịch "bị… làm cảm động".'},
  {vi:'Cái gọi là "học bá" thường không phải người chỉ biết học vẹt, mà là người biết sắp xếp thời gian hằng ngày một cách hợp lý.', zh:'所谓“学霸”，通常不是只会死读书的人，而是懂得合理安排日常时间的人。', py:'Suǒwèi “xuébà”, tōngcháng bú shì zhǐ huì sǐ dúshū de rén, ér shì dǒngde hélǐ ānpái rìcháng shíjiān de rén.', goiY:['所谓','不是……而是……','通常','日常'], giai:'所谓 + khái niệm, sau đó giải thích = "cái gọi là…"; 不是 A 而是 B — vế sau mở bằng 而是, không dùng 但是.'},
  {vi:'Chỉ cần đóng cửa phòng lại là cậu ấy có thể dồn hết tâm trí làm bài tập trong không gian nhỏ khép kín ấy, bên ngoài có ồn đến đâu cũng không ảnh hưởng được.', zh:'只要关闭起房门，他就能在封闭的小空间里全神贯注地写作业，外面再吵也影响不了他。', py:'Zhǐyào guānbì qǐ fángmén, tā jiù néng zài fēngbì de xiǎo kōngjiān li quánshén guànzhù de xiě zuòyè, wàimiàn zài chǎo yě yǐngxiǎng bu liǎo tā.', goiY:['只要……就……','关闭起','封闭','再……也……'], giai:'V + 起 (关闭起) nhấn hành động khép kín lại đã hoàn tất; 再 + tính từ + 也…… = "có… đến đâu cũng…"; 全神贯注 (dồn hết tâm trí) là trạng ngữ, cần 地.'},
  {vi:'Cái mà cậu ấy gọi là "chuẩn bị kỹ càng" thật ra chỉ là thức khuya lật sách giáo khoa một lượt vào đêm trước ngày thi, thảo nào lần này kết quả chẳng ra sao.', zh:'他所谓的“充分准备”，其实只是考试前一天熬夜把课本翻了一遍，难怪这次成绩这么不理想。', py:'Tā suǒwèi de “chōngfèn zhǔnbèi”, qíshí zhǐshì kǎoshì qián yì tiān áoyè bǎ kèběn fānle yí biàn, nánguài zhè cì chéngjì zhème bù lǐxiǎng.', goiY:['所谓的','充分','熬夜','难怪'], giai:'(Ai đó) 所谓的 "…" mang ý mỉa mai, không thừa nhận — dịch "cái mà … gọi là…"; 难怪 (thảo nào) mở đầu vế cuối, nêu kết quả mà giờ đã hiểu nguyên nhân.'},
  {vi:'Dù ở hoàn cảnh nào, cậu ấy nói chuyện cũng tỏ ra gần gũi, tự nhiên như vậy, nhờ thế nhanh chóng được các bạn mới đón nhận.', zh:'不管在什么场合，他说话都显得那么亲切自然，因而很快就为新同学所接受。', py:'Bùguǎn zài shénme chǎnghé, tā shuōhuà dōu xiǎnde nàme qīnqiè zìrán, yīn’ér hěn kuài jiù wéi xīn tóngxué suǒ jiēshòu.', goiY:['不管……都……','为……所……','亲切','因而'], giai:'不管 + câu hỏi (什么场合), vế sau bắt buộc có 都; 为新同学所接受 = 被新同学接受, dịch "được … đón nhận"; 因而 (vì thế) là văn viết của 所以.'},
  {vi:'Đã biết sau này khó tránh phải giao thiệp với đủ kiểu người, thì nên học cách bao dung lẫn nhau, đừng vì một chút xích mích nhỏ mà cãi nhau với bạn cùng phòng.', zh:'既然将来免不了要跟各种各样的人打交道，那就应该学会彼此包容，不要因为一点小矛盾就跟室友吵架。', py:'Jìrán jiānglái miǎn bu liǎo yào gēn gèzhǒng-gèyàng de rén dǎ jiāodao, nà jiù yīnggāi xuéhuì bǐcǐ bāoróng, búyào yīnwèi yìdiǎn xiǎo máodùn jiù gēn shìyǒu chǎojià.', goiY:['既然……就……','打交道','彼此','矛盾'], giai:'既然 nêu tiền đề đã rõ, vế sau 就 đưa ra lời khuyên; 打交道 là cụm động từ: 跟 + người + 打交道, không nói 打交道别人.'},
  {vi:'Học tập giống như chèo thuyền ngược dòng, không tiến ắt sẽ lùi; nếu những ngày nghỉ một chữ cũng không đọc, thì khai giảng rồi sẽ rất khó theo kịp tiến độ của thầy cô.', zh:'学习就像逆水行舟，不进则退，如果放假的日子里一点儿书都不看，开学后就很难跟上老师的进度。', py:'Xuéxí jiù xiàng nì shuǐ xíng zhōu, bú jìn zé tuì, rúguǒ fàngjià de rìzi li yìdiǎnr shū dōu bú kàn, kāixué hòu jiù hěn nán gēnshàng lǎoshī de jìndù.', goiY:['不进则退','如果……就……','日子'], giai:'则 ở đây là văn viết của 就, nối điều kiện với kết quả (不进则退 = không tiến thì lùi); vế 如果……就…… cụ thể hoá cho câu thành ngữ.'},
  {vi:'Từ khi cô chủ nhiệm lập ra nhóm học tập, mọi người không chỉ có đủ không gian để trao đổi, mà ngay cả bạn nhút nhát nhất cũng dần dần bắt đầu chủ động phát biểu.', zh:'自从班主任组织起学习小组，大家不仅有了充分交流的空间，甚至连最内向的同学也逐渐开始主动发言了。', py:'Zìcóng bānzhǔrèn zǔzhī qǐ xuéxí xiǎozǔ, dàjiā bùjǐn yǒule chōngfèn jiāoliú de kōngjiān, shènzhì lián zuì nèixiàng de tóngxué yě zhújiàn kāishǐ zhǔdòng fāyán le.', goiY:['自从……','组织起','不仅……甚至连……也……','逐渐'], giai:'V + 起 (组织起) nhấn việc gom mọi người lại thành một khối; 不仅……甚至连……也…… tăng tiến tới mức bất ngờ nhất — 连 đặt ngay trước người được nhấn mạnh.'},
  {vi:'Ngày nay điện thoại tuy có đủ loại chức năng, nhưng nếu suốt ngày bị nó điều khiển, đến thời gian trò chuyện với người nhà cũng không có, thì nó đã đánh mất ý nghĩa vốn có.', zh:'如今手机虽然具备各种功能，但如果整天为它所控制，连跟家人聊天的时间都没有，那就失去了本来的意义。', py:'Rújīn shǒujī suīrán jùbèi gè zhǒng gōngnéng, dàn rúguǒ zhěngtiān wéi tā suǒ kòngzhì, lián gēn jiārén liáotiān de shíjiān dōu méiyǒu, nà jiù shīqùle běnlái de yìyì.', goiY:['虽然……但……','为……所……','连……都……','具备'], giai:'为它所控制 = 被它控制 (bị động văn viết); 连……都…… nhấn mạnh mức độ cực đoan; cuối cùng 那就 kéo ra hệ quả của giả thiết 如果.'}
];
// Chiều Trung → Việt
var translateDataRev = [
  {vi:'Cái gọi là "tứ hợp viện" chính là kiểu nhà mà các dãy nhà ở bốn phía đông, tây, nam, bắc quây lại với nhau, ở giữa tạo thành một khoảng sân vuông.', zh:'所谓“四合院”，就是东、西、南、北四面的房屋围在一起，中间形成一个方形的院子。', py:'Suǒwèi “sìhéyuàn”, jiù shì dōng, xī, nán, běi sìmiàn de fángwū wéi zài yìqǐ, zhōngjiān xíngchéng yí ge fāngxíng de yuànzi.', goiY:['所谓……就是…… = cái gọi là… chính là…','四合院 = tứ hợp viện','方形 = hình vuông'], giai:'所谓 A，就是 B: đưa ra khái niệm rồi giải thích; 围在一起 = "quây lại với nhau", 形成 = "tạo thành".'},
  {vi:'Vì tứ hợp viện có lịch sử lâu đời nhất và phân bố rộng rãi nhất trong các kiểu nhà ở dân gian của người Hán, nên nó được xem là tiêu biểu cho nhà ở truyền thống Trung Quốc.', zh:'由于四合院在汉族民居中历史最悠久、分布最广泛，因而被看作是中国传统民居的代表。', py:'Yóuyú sìhéyuàn zài Hànzú mínjū zhōng lìshǐ zuì yōujiǔ, fēnbù zuì guǎngfàn, yīn’ér bèi kànzuò shì Zhōngguó chuántǒng mínjū de dàibiǎo.', goiY:['由于……因而…… = do… nên…','民居 = nhà ở dân gian','广泛 = rộng rãi','代表 = đại diện, tiêu biểu'], giai:'由于 nêu nguyên nhân, 因而 (văn viết của 所以) nêu kết quả; 被看作是 = "được xem là".'},
  {vi:'Các phòng trong tứ hợp viện được nối với nhau bằng hành lang, nên cho dù gặp trời mưa, người ta đi lại trong sân cũng không bị ướt.', zh:'四合院的各个房间由走廊连接起来，即使遇到下雨天，人们在院子里走动也不会被淋湿。', py:'Sìhéyuàn de gège fángjiān yóu zǒuláng liánjiē qǐlai, jíshǐ yùdào xiàyǔtiān, rénmen zài yuànzi li zǒudòng yě bú huì bèi línshī.', goiY:['即使……也…… = cho dù… cũng…','由 = bằng, do','走廊 = hành lang'], giai:'由 + phương tiện + 连接起来 = "được nối bằng…"; 即使 + giả thiết, 也 + kết quả không đổi.'},
  {vi:'Gian nhà chính rộng nhất, không chỉ là nơi sinh hoạt hằng ngày của người lớn tuổi trong nhà mà còn có chức năng tiếp đãi khách.', zh:'正房面积最大，不仅是长辈日常起居的地方，而且还具备接待客人的功能。', py:'Zhèngfáng miànjī zuì dà, bùjǐn shì zhǎngbèi rìcháng qǐjū de dìfang, érqiě hái jùbèi jiēdài kèrén de gōngnéng.', goiY:['不仅……而且…… = không chỉ… mà còn…','起居 = sinh hoạt hằng ngày','具备……功能 = có chức năng…','接待 = tiếp đãi'], giai:'不仅……而且还…… nêu hai công dụng theo mức tăng dần; 具备 + 功能/条件 = "có (đủ)…", dịch gọn là "có chức năng…".'},
  {vi:'Chỉ cần đóng cổng lớn lại, bên trong tứ hợp viện liền thành một thế giới nhỏ khép kín, cả nhà sống những ngày tháng yên bình trong đó.', zh:'只要关闭起大门，四合院内便形成一个封闭式的小环境，一家人在里面过着平静的日子。', py:'Zhǐyào guānbì qǐ dàmén, sìhéyuàn nèi biàn xíngchéng yí ge fēngbìshì de xiǎo huánjìng, yì jiā rén zài lǐmiàn guòzhe píngjìng de rìzi.', goiY:['只要……便…… = chỉ cần… là…','关闭起 = đóng lại','封闭 = khép kín'], giai:'便 là văn viết của 就, đi với 只要 thành "chỉ cần… là…"; 关闭起 = V + 起, nhấn việc đóng kín lại.'},
  {vi:'Có nhà trồng trúc trong sân, có nhà thì lại nuôi cá vàng; dù là cách nào thì cũng đều làm cuộc sống thường ngày thêm nhiều thú vị.', zh:'有的人家在院子里种竹子，有的人家则养金鱼，不管哪一种，都给日常生活增添了不少情趣。', py:'Yǒu de rénjiā zài yuànzi li zhòng zhúzi, yǒu de rénjiā zé yǎng jīnyú, bùguǎn nǎ yì zhǒng, dōu gěi rìcháng shēnghuó zēngtiānle bù shǎo qíngqù.', goiY:['……，……则…… = …, còn… thì…','不管……都…… = dù… đều…','情趣 = thú vui, niềm vui thú'], giai:'则 dùng để đối chiếu hai trường hợp (有的……有的……则……); 增添情趣 = "thêm thú vị", đừng dịch word-by-word "tăng thêm tình thú".'},
  {vi:'Gian nhà chính phía bắc do người lớn tuổi ở, còn các dãy nhà ngang hai bên đông tây là nơi sinh hoạt của con cháu; có thể thấy cách bố trí của tứ hợp viện cũng thể hiện truyền thống kính trọng người trên.', zh:'北面的正房由长辈居住，东西两边的厢房则是晚辈的起居空间，可见四合院的布局也体现了尊敬长辈的传统。', py:'Běimiàn de zhèngfáng yóu zhǎngbèi jūzhù, dōng xī liǎngbiān de xiāngfáng zé shì wǎnbèi de qǐjū kōngjiān, kějiàn sìhéyuàn de bùjú yě tǐxiànle zūnjìng zhǎngbèi de chuántǒng.', goiY:['则 = còn … thì','可见 = có thể thấy','厢房 = nhà ngang (hai bên sân)','起居 = sinh hoạt'], giai:'由 + người + V (由长辈居住) = "do ai ở"; 则 đối chiếu 正房 với 厢房; 可见 rút ra kết luận từ hai vế trước.'},
  {vi:'Vì mấy thế hệ cùng sống trong một khoảng sân, cùng lao động, cùng trải qua ngày tháng, nên giữa họ đã gây dựng nên tình thân sâu đậm.', zh:'因为几代人同住在一个院子里，一起劳动，一起过日子，所以彼此之间建立起了浓浓的亲情。', py:'Yīnwèi jǐ dài rén tóng zhù zài yí ge yuànzi li, yìqǐ láodòng, yìqǐ guò rìzi, suǒyǐ bǐcǐ zhījiān jiànlì qǐle nóngnóng de qīnqíng.', goiY:['因为……所以…… = vì… nên…','建立起 = gây dựng nên','浓浓的 = đậm đà, sâu đậm'], giai:'建立起 + tân ngữ: V + 起 biểu thị kết quả được dựng lên, hình thành; 浓浓的亲情 nên dịch "tình thân sâu đậm" thay vì "tình thân đặc".'},
  {vi:'Hàng xóm trong ngõ ngày nào cũng qua lại với nhau, cho dù có xích mích thì cũng nhanh chóng làm lành; thứ tình cảm gần gũi ấy đến nay vẫn được nhiều người Bắc Kinh xưa nhớ mãi.', zh:'胡同里的邻居们天天打交道，即使闹了矛盾也很快就和好，这种亲切的感情至今仍为许多老北京人所怀念。', py:'Hútòng li de línjūmen tiāntiān dǎ jiāodao, jíshǐ nàole máodùn yě hěn kuài jiù héhǎo, zhè zhǒng qīnqiè de gǎnqíng zhìjīn réng wéi xǔduō lǎo Běijīngrén suǒ huáiniàn.', goiY:['即使……也…… = cho dù… cũng…','打交道 = giao thiệp, qua lại','为……所…… = được/bị … (bị động văn viết)','至今 = đến nay'], giai:'为 + người + 所 + V là bị động văn viết, dịch thuận "được … nhớ mãi"; 即使……也…… nêu giả thiết, không dịch thành "tuy… nhưng…".'},
  {vi:'Sở dĩ tứ hợp viện được mọi người yêu thích không chỉ vì ở thoải mái, mà hơn nữa là vì khoảng sân đã tạo cho cả nhà một không gian gần gũi với thiên nhiên.', zh:'四合院之所以深受人们欢迎，不仅是因为住着舒适，更是因为院子为全家创造了一个亲近自然的空间。', py:'Sìhéyuàn zhīsuǒyǐ shēn shòu rénmen huānyíng, bùjǐn shì yīnwèi zhùzhe shūshì, gèng shì yīnwèi yuànzi wèi quán jiā chuàngzàole yí ge qīnjìn zìrán de kōngjiān.', goiY:['之所以……不仅是因为……更是因为…… = sở dĩ… không chỉ vì… mà còn vì…','创造 = tạo ra','空间 = không gian'], giai:'之所以 nêu kết quả trước, sau đó liệt kê hai nguyên nhân tăng dần (不仅是因为……更是因为……); 为 + người + 创造 = "tạo ra cho ai" (为 đọc wèi).'}
];


// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// ══════════════════════════════════════════
var writingData = {
  words:['建筑','样式','具备','通常','亲切'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ giới thiệu một công trình kiến trúc (một ngôi nhà) mà em có ấn tượng sâu sắc nhất.',
  outline:[
    'Câu mở: công trình em ấn tượng nhất là gì, ở đâu (dùng 建筑).',
    'Thân 1: tả kiểu dáng bên ngoài (dùng 样式) và công năng bên trong (dùng 具备……功能).',
    'Thân 2: thói quen của em / gia đình gắn với nơi đó (dùng 通常).',
    'Kết: cảm xúc của em với nơi ấy (dùng 亲切).'
  ],
  model:{
    zh:'我印象最深的建筑是奶奶家的老房子。它的样式很传统，前面有一个方形的小院子，院子里种着竹子。房子虽然不大，但是具备了做饭、休息、接待客人等各种功能。每到周末，我们通常都会回奶奶家吃饭，邻居们也常来聊天儿。一走进那个院子，我就觉得特别亲切。',
    py:'Wǒ yìnxiàng zuì shēn de jiànzhù shì nǎinai jiā de lǎo fángzi. Tā de yàngshì hěn chuántǒng, qiánmian yǒu yí ge fāngxíng de xiǎo yuànzi, yuànzi li zhòngzhe zhúzi. Fángzi suīrán bú dà, dànshì jùbèile zuò fàn, xiūxi, jiēdài kèrén děng gè zhǒng gōngnéng. Měi dào zhōumò, wǒmen tōngcháng dōu huì huí nǎinai jiā chī fàn, línjūmen yě cháng lái liáotiānr. Yì zǒujìn nàge yuànzi, wǒ jiù juéde tèbié qīnqiè.',
    vn:'Công trình tôi ấn tượng nhất là ngôi nhà cũ của bà nội. Kiểu dáng của nó rất truyền thống, phía trước có một khoảng sân nhỏ hình vuông, trong sân trồng trúc. Ngôi nhà tuy không lớn nhưng có đủ mọi công năng như nấu ăn, nghỉ ngơi, tiếp khách. Cứ đến cuối tuần, cả nhà tôi thường về nhà bà ăn cơm, hàng xóm cũng hay sang trò chuyện. Hễ bước vào khoảng sân ấy là tôi lại thấy vô cùng thân thương.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '具备 có đi với danh từ TRỪU TƯỢNG (功能, 条件, 能力) không — đừng viết 具备房子, 具备钱?',
    '通常 có dùng cho một thói quen có QUY LUẬT (每到周末……通常……) không, hay lại dùng cho một việc xảy ra một lần?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，介绍一座你印象最深的建筑。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'建筑', loai:'danh từ', cach:'一座建筑 · 古老的建筑 · 建筑风格 · 标志性建筑',
     sai:[{re:'建筑(了|着|过)', sua:'建了 / 盖了 / 修建了', giai:'Trong khẩu ngữ, 建筑 gần như chỉ dùng làm DANH TỪ (công trình). “Xây nhà” nói 建房子 / 盖房子, không nói 建筑了一座房子.'},
          {re:'(一|这|那|几)(个|间)建筑', sua:'一座建筑', giai:'Lượng từ chuẩn của 建筑 là 座 (一座建筑). 间 dùng cho phòng (一间屋子).', nhe:true}]},
    {tu:'样式', loai:'danh từ', cach:'样式很传统 · 新样式 · 衣服的样式 · 固定的样式',
     sai:[{re:'(他|她|你|我)的样式', sua:'他的样子', giai:'样式 là kiểu dáng của ĐỒ VẬT (quần áo, nhà cửa, đồ dùng). Dáng vẻ của NGƯỜI nói 样子: 他的样子很帅.'}]},
    {tu:'具备', loai:'động từ', cach:'具备……功能 · 具备条件 · 具备能力',
     sai:[{re:'具备了?[^，。]{0,4}(房子|汽车|钱|手机|电脑|衣服)', sua:'有……', giai:'具备 đi với danh từ TRỪU TƯỢNG (功能, 条件, 能力, 特点). Sở hữu đồ vật cụ thể chỉ cần 有.'},
          {re:'(很|非常|十分)具备', sua:'具备 / 完全具备', giai:'具备 là động từ, không đứng sau 很/非常. Muốn nhấn mạnh: 完全具备, 已经具备.'}]},
    {tu:'通常', loai:'tính từ / phó từ', cach:'通常 + V · 通常的做法 · 在通常情况下',
     sai:[{re:'通常[^，。]{0,8}(昨天|上次|那天|去年)', sua:'常常 / bỏ 通常', giai:'通常 nói một QUY LUẬT lặp lại, không dùng cho một việc xảy ra một lần trong quá khứ (昨天, 上次).'},
          {re:'通常地', sua:'通常', giai:'通常 đứng thẳng trước động từ, không thêm 地.'}]},
    {tu:'亲切', loai:'tính từ', cach:'觉得很亲切 · 亲切的笑容 · 对人很亲切',
     sai:[{re:'(关系|感情)(很|非常|十分|特别)?亲切', sua:'关系很亲密 / 感情很深', giai:'Quan hệ, tình cảm khăng khít nói 亲密 / 很深. 亲切 tả CẢM GIÁC gần gũi hoặc thái độ ấm áp (亲切的笑容, 感到很亲切).'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'所谓 A，就是……', nhan:'所谓', vd:'所谓四合院，就是四面房屋围在一起、中间有院子的房子。', khi:'Giải thích một khái niệm trước khi tả.'},
    {ten:'有的……，有的……则……', nhan:'则', vd:'有的人家喜欢种竹子，有的人家则喜欢养金鱼。', khi:'Đối chiếu hai cách, hai nhóm người khác nhau.'},
    {ten:'为 + người + 所 + V', nhan:'为', vd:'这座老房子最为我们全家人所喜爱。', khi:'Câu KẾT trang trọng kiểu văn viết (nghĩa như 被).'},
    {ten:'由……组成 / 组合起来', nhan:'组成', vd:'这座房子由一个院子和三间屋子组成。', khi:'Tả cấu trúc của công trình.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'房子虽然不大，但是具备了各种功能。', khi:'Nêu nhược điểm rồi lật lại ưu điểm — thân đoạn.'},
    {ten:'每到……，(通常)都……', nhan:'每到', vd:'每到周末，我们通常都会回奶奶家吃饭。', khi:'Kể thói quen có quy luật.'},
    {ten:'一……就……', nhan:'一', vd:'一走进那个院子，我就觉得特别亲切。', khi:'Câu KẾT nói cảm xúc.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (29–31 là đáp án của sách bài tập)
  sapXep:[
    {manh:['很具有','北京四合院的','代表性','样式'],
     dap:'北京四合院的样式很具有代表性。',
     vn:'Kiểu dáng của tứ hợp viện Bắc Kinh rất tiêu biểu.',
     giai:'Định ngữ 北京四合院的 + chủ ngữ 样式 → 很具有 + tân ngữ 代表性. (Câu 29 sách bài tập.)'},
    {manh:['基本功能','该产品','具备了','已经'],
     dap:'该产品已经具备了基本功能。',
     vn:'Sản phẩm này đã có đủ các chức năng cơ bản.',
     giai:'Chủ ngữ 该产品 → phó từ 已经 → 具备了 → tân ngữ 基本功能. 该 = “này” trong văn viết. (Câu 30.)'},
    {manh:['我很感激','曾经给我的帮助','那位','亲切的长辈'],
     dap:'我很感激那位亲切的长辈曾经给我的帮助。',
     vn:'Tôi rất biết ơn sự giúp đỡ mà vị bề trên thân thiện ấy từng dành cho tôi.',
     giai:'我很感激 + tân ngữ dài: 那位 + 亲切的长辈 + 曾经给我的 + 帮助. Lượng từ 位 đứng trước định ngữ 亲切的. (Câu 31.)'},
    {manh:['通常','有钱人家的四合院','由好几座院子','组成'],
     dap:'有钱人家的四合院通常由好几座院子组成。', chap:['通常有钱人家的四合院由好几座院子组成。'],
     vn:'Tứ hợp viện của nhà giàu thường do mấy toà sân hợp thành.',
     giai:'通常 đứng trước cụm 由……组成 (có thể đưa lên đầu câu vì là tính từ/phó từ chỉ quy luật).'},
    {manh:['所','院子','为人们','最','喜爱'],
     dap:'院子最为人们所喜爱。',
     vn:'Khoảng sân được mọi người yêu thích nhất.',
     giai:'Khung 为 + người + 所 + V; phó từ 最 đứng TRƯỚC 为 (最为人们所喜爱 — câu trong bài khoá).'},
    {manh:['常常','他们俩','矛盾','闹'],
     dap:'他们俩常常闹矛盾。',
     vn:'Hai người họ thường xuyên xích mích.',
     giai:'Chủ ngữ → phó từ 常常 → động từ 闹 → tân ngữ 矛盾 (闹矛盾 là cụm cố định).'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 讨论话题 của sách: 建筑与旅游
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (建筑与旅游). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 建筑 · 样式 · 代表 · 功能 · 空间 · 亲切 · 所谓 · 则.',
  questions:[
    {q_zh:'你最喜欢（或印象最深）的建筑是什么？你是怎么知道它的？',
     q_vn:'Công trình kiến trúc em thích nhất (hoặc ấn tượng nhất) là gì? Em biết đến nó như thế nào?',
     hint:'Tên công trình + ở đâu + biết qua đâu, dùng 是……的',
     sample:'我印象最深的建筑是会安古城的老房子。我是去年跟家人去旅游的时候知道的，那些房子的样式很有特点。',
     sample_vn:'Công trình tôi ấn tượng nhất là những ngôi nhà cổ ở phố cổ Hội An. Tôi biết đến khi đi du lịch cùng gia đình năm ngoái, kiểu dáng của những ngôi nhà ấy rất đặc sắc.',
     note:'Câu hỏi 你是怎么知道的 hợp với cấu trúc 是……的 (ôn HSK 3): 我是……的时候知道的.'},
    {q_zh:'请介绍一下你了解到的这座建筑的情况。',
     q_vn:'Hãy giới thiệu những gì em biết về công trình ấy.',
     hint:'Lịch sử + kiểu dáng + công năng, dùng 具备 / 由……组成',
     sample:'这些房子已经有两百多年历史了，一般由前后两部分组成，前面做生意，后面则是一家人生活的地方。',
     sample_vn:'Những ngôi nhà này đã có hơn hai trăm năm lịch sử, thường gồm hai phần trước và sau: phía trước để buôn bán, còn phía sau là nơi cả nhà sinh hoạt.',
     note:'Dùng 则 để đối chiếu hai phần (前面……，后面则……) giống như câu trong bài khoá.'},
    {q_zh:'通过旅行来了解各地的建筑，你有什么感受和收获？',
     q_vn:'Tìm hiểu kiến trúc các nơi qua du lịch, em có cảm nhận và thu hoạch gì?',
     hint:'Nêu 2 điều học được, dùng 不仅……也……',
     sample:'通过旅行，我不仅看到了很多美丽的建筑，也了解到了各地不同的历史和文化。',
     sample_vn:'Qua những chuyến đi, tôi không chỉ được ngắm nhiều công trình đẹp mà còn hiểu thêm lịch sử và văn hoá khác nhau của từng nơi.',
     note:'Lấy ý từ phần 背景分析: kiến trúc là “trí nhớ” của một đất nước, một thành phố.'},
    {q_zh:'你更喜欢住在四合院那样的老房子里，还是住在现代的公寓楼里？为什么？',
     q_vn:'Em thích sống trong nhà cổ kiểu tứ hợp viện hay trong chung cư hiện đại hơn? Vì sao?',
     hint:'Chọn một bên + 2 lý do, dùng 虽然……但是……',
     sample:'我更喜欢四合院。公寓楼虽然方便，但是邻居之间很少打交道；四合院里有院子，大家常常互帮互助，让人觉得很亲切。',
     sample_vn:'Tôi thích tứ hợp viện hơn. Chung cư tuy tiện lợi nhưng hàng xóm ít giao thiệp với nhau; tứ hợp viện có sân, mọi người hay giúp đỡ nhau, khiến người ta thấy rất gần gũi.',
     note:'So sánh hai bên rồi mới chốt ý — câu trả lời có bố cục được chấm cao hơn.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 14.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第14课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'你家院子里种了些什么？'},
            {sp:'男',zh:'有花，有竹子，而且我们还养了几条金鱼。'}],
     q:'他家院子里没有什么？',qvn:'Trong sân nhà anh ấy KHÔNG có gì?',
     opts:['花','草','竹子','金鱼'],ans:1,
     why:'Anh kể 花, 竹子 và 金鱼 — chỉ có 草 (cỏ) là không được nhắc đến. Câu hỏi phủ định 没有什么 phải nghe đủ danh sách rồi loại trừ.',
     words:['种','竹子','金鱼']},

    {n:2,
     lines:[{sp:'男',zh:'这就是我们家乡的标志性建筑。'},
            {sp:'女',zh:'那咱们在这儿合张影留作纪念吧，毕竟我来旅游了一趟。'}],
     q:'他们现在在哪儿？',qvn:'Bây giờ họ đang ở đâu?',
     opts:['男的的家乡','女的的家乡','照相馆里','学校门口'],ans:0,
     why:'我们家乡的标志性建筑 do người ĐÀN ÔNG nói → đang ở quê anh; người phụ nữ là khách (我来旅游了一趟). Bẫy: 合张影 (chụp ảnh chung) không có nghĩa là ở tiệm ảnh.',
     words:['建筑']},

    {n:3,
     lines:[{sp:'女',zh:'关于新产品，你有什么看法？'},
            {sp:'男',zh:'相对而言，如果定价不能太高的话，我觉得功能比形式重要。'}],
     q:'男的更重视什么？',qvn:'Người đàn ông coi trọng điều gì hơn?',
     opts:['形式','价格','样式','功能'],ans:3,
     why:'功能比形式重要 = chức năng quan trọng hơn hình thức. 价格 chỉ là điều kiện (如果定价不能太高), không phải điều anh coi trọng hơn.',
     words:['功能','形式']},

    {n:4,
     lines:[{sp:'男',zh:'这些建筑已经有三百多年历史了。'},
            {sp:'女',zh:'历史这么长，规模这么大，还能保存完好，真是太不容易了。'}],
     q:'女的觉得这些建筑怎么样？',qvn:'Người phụ nữ thấy những công trình này thế nào?',
     opts:['规模不大','历史不长','保存得很好','需要重新修建'],ans:2,
     why:'还能保存完好 = vẫn giữ được nguyên vẹn. Hai phương án đầu trái với 历史这么长, 规模这么大.',
     words:['建筑']},

    {n:5,
     lines:[{sp:'女',zh:'这就是你所谓的营销方案——出去发发小广告？'},
            {sp:'男',zh:'别小看小广告，它作用大着呢。'}],
     q:'听了男的的话，女的是什么反应？',qvn:'Nghe người đàn ông nói, người phụ nữ phản ứng thế nào?',
     opts:['怀疑小广告的作用','非常支持这个方案','想马上去发广告','觉得广告太贵了'],ans:0,
     why:'你所谓的…… mang giọng MỈA MAI, không tán thành (cách dùng thứ hai của 所谓). Người nam phải nói 别小看 → chứng tỏ cô đang coi thường, nghi ngờ tác dụng của tờ rơi.',
     words:['所谓']},

    {n:6,
     lines:[{sp:'男',zh:'这是我第一次负责接待这么大的一个代表团，有点儿紧张。'},
            {sp:'女',zh:'没事，大家都是这么过来的。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['她自己也很紧张','每个人一开始都会这样','男的不适合做接待','代表团的人不多'],ans:1,
     why:'大家都是这么过来的 = ai cũng từng trải qua như thế → lần đầu hồi hộp là bình thường, cô đang động viên.',
     words:['接待','代表']},

    {n:7,
     lines:[{sp:'女',zh:'您太客气了，出去旅行还想着给我们带礼物。'},
            {sp:'男',zh:'这是当地最有名的小吃，大家都尝尝。'},
            {sp:'女',zh:'您对济南印象怎么样？'},
            {sp:'男',zh:'历史悠久，风景优美，是个好地方。'}],
     q:'男的为什么要带礼物？',qvn:'Vì sao người đàn ông mang quà về?',
     opts:['今天是他的生日','想让大家尝尝当地的小吃','他对济南印象不好','想感谢大家的帮助'],ans:1,
     why:'这是当地最有名的小吃，大家都尝尝 — muốn mọi người nếm món ăn vặt nổi tiếng nhất ở đó. Anh khen Tế Nam (历史悠久，风景优美) nên phương án C sai.',
     words:[]},

    {n:8,
     lines:[{sp:'男',zh:'你觉得这台空调怎么样？'},
            {sp:'女',zh:'功能倒是挺强大，价钱也便宜。'},
            {sp:'男',zh:'那就买这个吧？'},
            {sp:'女',zh:'但是这个样式，好像不太适合我们家的装修风格。'}],
     q:'女的对什么不满意？',qvn:'Người phụ nữ không hài lòng điều gì?',
     opts:['功能','价钱','样式','质量'],ans:2,
     why:'Chữ 但是 báo hiệu điều không hài lòng: 这个样式……不太适合装修风格. 功能 và 价钱 cô đều khen.',
     words:['功能','样式']}
  ]
};

// ══════════════════════════════════════════════════════════════
// 💬 TÌNH HUỐNG — HOÀN THÀNH HỘI THOẠI (Cấp 2 · 半交际性练习)
// ══════════════════════════════════════════════════════════════
var situationData = {
  intro: 'Mỗi tình huống cho sẵn lời của người kia. Em viết lời đáp của mình, <b>bắt buộc dùng đúng từ/cấu trúc ghi ở ô yêu cầu</b>. ' +
         'Viết xong mới mở câu mẫu — câu mẫu chỉ là MỘT cách nói, em nói khác mà đúng yêu cầu vẫn được.',
  items: [
    {scene:'Một bạn Trung Quốc hỏi em về “nhà ống” — kiểu nhà rất phổ biến ở Việt Nam.',
     a:{sp:'Bạn',zh:'什么是“管状房”？',vn:'“Nhà ống” là gì vậy?'},
     need:['Dùng 所谓','Giải thích đặc điểm chính'],
     sample:'所谓“管状房”，就是又窄又长的房子，前面窄，后面很长，像一根管子。',
     samplePy:'Suǒwèi “guǎnzhuàngfáng”, jiù shì yòu zhǎi yòu cháng de fángzi, qiánmian zhǎi, hòumian hěn cháng, xiàng yì gēn guǎnzi.',
     sampleVn:'Cái gọi là “nhà ống” chính là loại nhà vừa hẹp vừa dài: mặt tiền hẹp, phía sau rất dài, giống như một cái ống.',
     tip:'所谓 + khái niệm, 就是 + lời giải thích — đúng như câu 所谓四合，“四”指…… trong bài.'},

    {scene:'Bạn hỏi em anh chị em trong nhà có sở thích giống nhau không.',
     a:{sp:'Bạn',zh:'你和你姐姐的爱好一样吗？',vn:'Cậu với chị gái có sở thích giống nhau không?'},
     need:['Dùng 则 để đối chiếu','Nêu sở thích của hai người'],
     sample:'不一样。我喜欢运动，周末常常去踢球；姐姐则喜欢安静，最爱在家看书。',
     samplePy:'Bù yíyàng. Wǒ xǐhuan yùndòng, zhōumò chángcháng qù tī qiú; jiějie zé xǐhuan ānjìng, zuì ài zài jiā kàn shū.',
     sampleVn:'Không giống. Tớ thích thể thao, cuối tuần hay đi đá bóng; còn chị tớ thì thích yên tĩnh, mê nhất là ở nhà đọc sách.',
     tip:'则 đứng SAU chủ ngữ của vế thứ hai (姐姐则……), không đứng đầu vế như 但是.'},

    {scene:'Cô giáo hỏi vì sao thầy chủ nhiệm cũ được cả trường yêu quý.',
     a:{sp:'Cô',zh:'为什么大家都那么喜欢王老师？',vn:'Vì sao mọi người đều quý thầy Vương như vậy?'},
     need:['Dùng 为……所……','Nêu một phẩm chất của thầy'],
     sample:'王老师对每个学生都非常亲切，认识他的人没有不为他的热情所感动的。',
     samplePy:'Wáng lǎoshī duì měi ge xuésheng dōu fēicháng qīnqiè, rènshi tā de rén méiyǒu bù wéi tā de rèqíng suǒ gǎndòng de.',
     sampleVn:'Thầy Vương rất gần gũi với từng học sinh, ai quen thầy cũng đều cảm động trước sự nhiệt tình của thầy.',
     tip:'为……所…… là văn viết, nghĩa như 被. Nói với thầy cô dùng được vì giọng trang trọng; 为 ở đây đọc wéi.'},

    {scene:'Bạn thấy em chuyển nhà lên chung cư, hỏi em có quen không.',
     a:{sp:'Bạn',zh:'住进楼房以后，你习惯吗？',vn:'Chuyển lên chung cư rồi, cậu quen chưa?'},
     need:['Dùng 打交道','Có ý so sánh với nhà cũ'],
     sample:'条件是好多了，但是关上门谁也不认识谁，不像以前那样常跟邻居打交道了。',
     samplePy:'Tiáojiàn shì hǎo duō le, dànshì guānshang mén shéi yě bú rènshi shéi, bú xiàng yǐqián nàyàng cháng gēn línjū dǎ jiāodào le.',
     sampleVn:'Điều kiện thì tốt hơn nhiều, nhưng đóng cửa lại là chẳng ai biết ai, không còn hay giao thiệp với hàng xóm như trước nữa.',
     tip:'跟 / 与 + người + 打交道 — người đứng TRƯỚC 打交道, không nói ✗打交道邻居.'},

    {scene:'Em rủ bạn cùng đi tham quan tứ hợp viện ở Bắc Kinh vào kỳ nghỉ.',
     a:{sp:'Bạn',zh:'四合院有什么好看的？',vn:'Tứ hợp viện thì có gì hay mà xem?'},
     need:['Dùng 具有代表性 hoặc 代表','Thuyết phục bạn'],
     sample:'四合院是北京最有代表性的民居，去北京不看四合院，就像去越南不吃河粉一样！',
     samplePy:'Sìhéyuàn shì Běijīng zuì yǒu dàibiǎoxìng de mínjū, qù Běijīng bú kàn sìhéyuàn, jiù xiàng qù Yuènán bù chī héfěn yíyàng!',
     sampleVn:'Tứ hợp viện là kiểu nhà dân tiêu biểu nhất của Bắc Kinh, đến Bắc Kinh mà không xem tứ hợp viện thì giống như sang Việt Nam mà không ăn phở vậy!',
     tip:'Cấu trúc so sánh 就像……一样 (ôn HSK 3) giúp lời thuyết phục sinh động hơn.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết bài giới thiệu tứ hợp viện cho tờ báo tường của trường.',
     a:'四合院在中国汉族民居中历史最悠久，分布最广泛。',b:'四合院老早就有了，到处都是。',better:'a',
     why:'Bài viết cần giọng VĂN VIẾT, chính xác: 历史悠久, 分布广泛. Câu b là khẩu ngữ (老早, 到处都是), nghe như nói chuyện phiếm.'},

    {scene:'Em nhắn tin cho bạn thân kể về chuyến đi Bắc Kinh.',
     a:'北京四合院最为游客所喜爱。',b:'北京的四合院超好玩儿，你一定得去看看！',better:'b',
     why:'Nhắn tin cho bạn thân dùng khẩu ngữ tự nhiên (超好玩儿, 一定得). 为……所…… là cấu trúc văn viết, dùng trong tin nhắn nghe rất gượng.'},

    {scene:'Hướng dẫn viên giới thiệu với đoàn khách du lịch.',
     a:'大家请看，院中的北房是正房，一般是长辈住的地方。',b:'你们看，北边那个大屋子是老人住的。',better:'a',
     why:'Hướng dẫn viên cần lịch sự (大家请看) và dùng thuật ngữ chính xác (正房, 长辈). Câu b quá suồng sã với khách.'},

    {scene:'Ở nhà, em hỏi mẹ có thể trồng gì ngoài ban công.',
     a:'妈，咱们阳台上种点儿竹子怎么样？',b:'母亲，请问我们能否在阳台上种植竹子？',better:'a',
     why:'Nói với mẹ ở nhà dùng khẩu ngữ thân mật: 妈, 咱们, 种点儿……怎么样. Câu b (母亲, 能否, 种植) trang trọng như văn bản, nghe xa cách.'},

    {scene:'Thông báo của ban quản lý khu chung cư dán ở thang máy.',
     a:'明天停水，别忘了存水啊！',b:'因管道维修，本小区明日上午停水，请各位住户提前做好准备。',better:'b',
     why:'Thông báo chính thức dùng giọng văn viết, đủ thông tin: 因……, 本小区, 住户, 做好准备. Câu a như lời nhắc của người nhà.'},

    {scene:'Em viết đoạn kết cho bài văn “Ngôi nhà của bà”.',
     a:'反正我觉得奶奶家挺好的。',b:'那个小院令我感到无比亲切，因而成了我心中最美的地方。',better:'b',
     why:'Đoạn kết bài văn nên dùng từ ngữ văn viết giàu cảm xúc: 令……感到……, 因而. Câu a (反正, 挺好的) khẩu ngữ, nhạt.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 133)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Tứ hợp viện là gì', cue:'四合院是……的一种……，所谓四合……', words:['四合院','华北','民居','组合','建筑','形式','所谓','方']},
    {step:'Vì sao là Bắc Kinh', cue:'四合院分布……，一提到四合院，人们就会想到……', words:['广泛','样式','代表']},
    {step:'Quy mô & chính phòng', cue:'北京有各种规模的四合院，有钱人家的……；北房是正房……', words:['通常','并列','组成','长辈','具备','日常','起居','接待','功能']},
    {step:'Nhà chái, hành lang, sân', cue:'院子的两边是……，正房和厢房之间……，院子里……', words:['厢房','走廊','空间','种','竹子','则','金鱼']},
    {step:'Tác dụng của sân', cue:'院子不仅……，也……，因而……', words:['创造','情趣','因而','为']},
    {step:'Môi trường khép kín', cue:'只要关闭起大门……，一家人过着……', words:['关闭','封闭','打交道','日子','充分','令','亲切']},
    {step:'Đại tạp viện', cue:'也有多户合住一座四合院的情况……', words:['劳动','人民','矛盾','浓']}
  ],
  checklist: [
    'Kể đủ ba phần của sách chưa: tứ hợp viện là gì → cấu trúc và công năng → quan hệ giữa người với người?',
    'Có dùng được ít nhất 12 từ mới của bài không?',
    'Có dùng 所谓 khi giải thích tên gọi và 则 khi đối chiếu hai kiểu nhà không?',
    'Có dùng được 为……所…… (最为人们所喜爱) và động từ + 起 (关闭起大门) không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 132) — trò "Bài tập SGK" ở bước Luyện tập
// (Bài 3 画线连接 và bài 4 复述 không thuộc 3 dạng này — bài 4 đã có ở phần Kể lại)
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['浓','广泛','具备','矛盾','日常','组合'],
   cau:[
     {s:'现在的手机都＿＿很多功能，不再只是个打电话的工具。', dap:['具备']},
     {s:'刚开始学中文的时候，我学的主要是一些＿＿用语。', dap:['日常']},
     {s:'今天雾很＿＿，对面的建筑都看不清了。', dap:['浓']},
     {s:'这个问题需要进行＿＿调查，然后才能做出决定。', dap:['广泛']},
     {s:'这本书是由三个部分＿＿起来的。', dap:['组合']},
     {s:'老人家里有两个儿子，他们俩常常闹＿＿。', dap:['矛盾']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'手机已经成为人们生活中的重要＿＿部分。', opts:['组成','组合'], ans:0, giai:'组成部分 (bộ phận cấu thành) là cụm cố định. 组合 nhấn vào việc ghép lại, hay đi với 起来 / 到一起.'},
     {s:'他的兴趣爱好非常＿＿，跟谁都能聊到一块儿。', opts:['广大','广泛'], ans:1, giai:'兴趣 / 爱好 + 广泛 (theo bảng 词语搭配). 广大 tả diện tích rộng lớn hoặc số đông (广大群众).'},
     {s:'他坚持锻炼，＿＿身体很好。', opts:['因而','反而'], ans:0, giai:'Vế sau là KẾT QUẢ của vế trước → 因而 (do đó). 反而 là “ngược lại”, dùng khi kết quả trái với mong đợi.'},
     {s:'是那位工程师＿＿我把机器安装在这儿。', opts:['令','让'], ans:1, giai:'Bảo ai làm một việc cụ thể → 让. 令 chủ yếu đi với cảm xúc (令人感动), không dùng để sai bảo.'}
   ]}
];
