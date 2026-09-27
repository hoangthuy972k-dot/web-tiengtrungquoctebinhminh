// ══════════════════════════════════════════
// DATA — HSK5 Bài 16: 体重与节食 (Cân nặng và ăn kiêng)
// Unit 6 修身养性 · Nguồn: HSK标准教程5上 (tr. 146–153) + 练习册 bài 16
// ══════════════════════════════════════════

// ══════════════════════════════════════════
// TỪ VỰNG — đủ 41 từ của bảng 生词 (tr. 146–148)
// ══════════════════════════════════════════
var vocabData = [
  {
    n: 1, zh: '节食', py: 'jiéshí', pos: 'Động từ', vn: 'ăn kiêng', hv: 'tiết thực', em: '🥗', lesson: 1,
    explain: ['Chủ động ăn ít đi, hạn chế lượng thức ăn (thường để giảm cân).'],
    usage: 'Động từ không mang tân ngữ: 节食减肥, 靠节食减肥; thêm 者 thành 节食者 (người ăn kiêng). Không nói 节食晚饭.',
    collo: ['节食减肥', '靠节食', '节食者', '过度节食'],
    ex_zh: '很多女孩子靠节食减肥。', ex_py: 'Hěn duō nǚháizi kào jiéshí jiǎnféi.', ex_vn: 'Nhiều cô gái giảm cân bằng cách ăn kiêng.',
    exList: [
      {zh:'很多女孩子靠节食减肥。', py:'Hěn duō nǚháizi kào jiéshí jiǎnféi.', vn:'Nhiều cô gái giảm cân bằng cách ăn kiêng.'},
      {zh:'节食者的体重会在一周内上下波动。', py:'Jiéshízhě de tǐzhòng huì zài yì zhōu nèi shàngxià bōdòng.', vn:'Cân nặng của người ăn kiêng lên xuống trong vòng một tuần.'},
      {zh:'医生说，过度节食对身体没有好处。', py:'Yīshēng shuō, guòdù jiéshí duì shēntǐ méiyǒu hǎochù.', vn:'Bác sĩ nói ăn kiêng quá mức chẳng có lợi gì cho cơ thể.'}
    ],
    colloFull: [
      {zh:'节食减肥', py:'jiéshí jiǎnféi', vn:'ăn kiêng giảm cân'},
      {zh:'靠节食', py:'kào jiéshí', vn:'dựa vào ăn kiêng'},
      {zh:'节食者', py:'jiéshízhě', vn:'người ăn kiêng'},
      {zh:'过度节食', py:'guòdù jiéshí', vn:'ăn kiêng quá mức'},
      {zh:'开始节食', py:'kāishǐ jiéshí', vn:'bắt đầu ăn kiêng'}
    ],
    patterns: [{s:'靠 + 节食 + 减肥', m:'Giảm cân bằng cách ăn kiêng'}, {s:'节食 + 者', m:'Người ăn kiêng (者 = người, như 志愿者)'}],
    checkList: [
      {promptLang:'vi', prompt:'Tuy chị ấy ăn kiêng một tháng, nhưng cân nặng chẳng giảm chút nào.', answer:'虽然她节食了一个月，但是体重一点儿也没减轻。', answerPy:'Suīrán tā jiéshíle yí ge yuè, dànshì tǐzhòng yìdiǎnr yě méi jiǎnqīng.', note:'节食 + 了 + thời lượng; phủ định nhấn mạnh 一点儿也没.', pair:'虽然……但是……'},
      {promptLang:'vi', prompt:'Em gái ăn kiêng giảm cân, ngay cả bữa sáng cũng không ăn.', answer:'妹妹节食减肥，连早饭都不吃。', answerPy:'Mèimei jiéshí jiǎnféi, lián zǎofàn dōu bù chī.', note:'节食 không mang tân ngữ; muốn nói bỏ bữa nào thì dùng 不吃 + bữa đó.', pair:'连……都……'}
    ]
  },
  {
    n: 2, zh: '报道', py: 'bàodào', pos: 'Danh từ / Động từ', vn: 'bài báo, bản tin; đưa tin', hv: 'báo đạo', em: '📰', lesson: 1,
    explain: ['Danh từ: bài viết, bản tin trên báo, đài, mạng.', 'Động từ: đưa tin, đăng tin về một sự việc.'],
    usage: '据报道 (theo tin đưa) là cách mở đầu bản tin. Lượng từ: 一篇报道. Đừng nhầm với 报名 (đăng ký) và 报到 (trình diện).',
    collo: ['据报道', '新闻报道', '一篇报道', '报道新闻'],
    ex_zh: '据报道，医学专家进行了一项新研究。', ex_py: 'Jù bàodào, yīxué zhuānjiā jìnxíngle yí xiàng xīn yánjiū.', ex_vn: 'Theo tin đưa, các chuyên gia y học đã tiến hành một nghiên cứu mới.',
    exList: [
      {zh:'据报道，医学专家进行了一项新研究。', py:'Jù bàodào, yīxué zhuānjiā jìnxíngle yí xiàng xīn yánjiū.', vn:'Theo tin đưa, các chuyên gia y học đã tiến hành một nghiên cứu mới.'},
      {zh:'报纸上有一篇关于节食的报道。', py:'Bàozhǐ shang yǒu yì piān guānyú jiéshí de bàodào.', vn:'Trên báo có một bài viết về chuyện ăn kiêng.'},
      {zh:'电视台报道了这次比赛的结果。', py:'Diànshìtái bàodàole zhè cì bǐsài de jiéguǒ.', vn:'Đài truyền hình đã đưa tin kết quả trận đấu này.'}
    ],
    colloFull: [
      {zh:'据报道', py:'jù bàodào', vn:'theo tin đưa'},
      {zh:'新闻报道', py:'xīnwén bàodào', vn:'bản tin thời sự'},
      {zh:'一篇报道', py:'yì piān bàodào', vn:'một bài báo'},
      {zh:'报道新闻', py:'bàodào xīnwén', vn:'đưa tin'},
      {zh:'可靠的报道', py:'kěkào de bàodào', vn:'bài báo đáng tin cậy'}
    ],
    patterns: [{s:'据报道，……', m:'Theo tin đưa, … (mở đầu bản tin)'}, {s:'一篇关于……的报道', m:'Một bài báo về …'}],
    checkList: [
      {promptLang:'vi', prompt:'Bài báo này là do một học sinh cấp ba viết.', answer:'这篇报道是一个高中生写的。', answerPy:'Zhè piān bàodào shì yí ge gāozhōngshēng xiě de.', note:'Lượng từ 篇 cho bài viết; 是……的 nhấn mạnh người làm.', pair:'是……的'},
      {promptLang:'vi', prompt:'Tin này đã được các báo lớn đưa tin rồi.', answer:'这个消息已经被各大报纸报道了。', answerPy:'Zhège xiāoxi yǐjīng bèi gè dà bàozhǐ bàodào le.', note:'报道 làm động từ trong câu bị động 被.', pair:'被'}
    ]
  },
  {
    n: 3, zh: '营养', py: 'yíngyǎng', pos: 'Danh từ', vn: 'chất dinh dưỡng, dinh dưỡng', hv: 'dinh dưỡng', em: '🥦', lesson: 1,
    explain: ['Chất bổ mà cơ thể hấp thu từ thức ăn để sống và phát triển.'],
    usage: '营养 là DANH TỪ: 有营养 / 很有营养 / 缺乏营养 / 营养丰富 — không nói 很营养.',
    collo: ['营养摄入', '有营养', '缺乏营养', '营养丰富'],
    ex_zh: '牛奶很有营养，每天都应该喝一杯。', ex_py: 'Niúnǎi hěn yǒu yíngyǎng, měi tiān dōu yīnggāi hē yì bēi.', ex_vn: 'Sữa rất bổ, ngày nào cũng nên uống một cốc.',
    exList: [
      {zh:'人们在一周内的营养摄入会影响体重变化。', py:'Rénmen zài yì zhōu nèi de yíngyǎng shèrù huì yǐngxiǎng tǐzhòng biànhuà.', vn:'Lượng dinh dưỡng hấp thu trong một tuần sẽ ảnh hưởng đến sự thay đổi cân nặng.'},
      {zh:'牛奶很有营养，每天都应该喝一杯。', py:'Niúnǎi hěn yǒu yíngyǎng, měi tiān dōu yīnggāi hē yì bēi.', vn:'Sữa rất bổ, ngày nào cũng nên uống một cốc.'},
      {zh:'只吃水果会缺乏营养。', py:'Zhǐ chī shuǐguǒ huì quēfá yíngyǎng.', vn:'Chỉ ăn trái cây sẽ bị thiếu chất.'}
    ],
    colloFull: [
      {zh:'营养摄入', py:'yíngyǎng shèrù', vn:'lượng dinh dưỡng hấp thu'},
      {zh:'有营养', py:'yǒu yíngyǎng', vn:'bổ, có dinh dưỡng'},
      {zh:'缺乏营养', py:'quēfá yíngyǎng', vn:'thiếu dinh dưỡng'},
      {zh:'营养丰富', py:'yíngyǎng fēngfù', vn:'giàu dinh dưỡng'},
      {zh:'营养师', py:'yíngyǎngshī', vn:'chuyên gia dinh dưỡng'}
    ],
    patterns: [{s:'N + 很有营养', m:'… rất bổ (không nói 很营养)'}, {s:'缺乏 / 补充 + 营养', m:'Thiếu / bổ sung dinh dưỡng'}],
    checkList: [
      {promptLang:'vi', prompt:'Rau không những rẻ mà còn rất bổ.', answer:'蔬菜不仅便宜，而且很有营养。', answerPy:'Shūcài bùjǐn piányi, érqiě hěn yǒu yíngyǎng.', note:'很有营养 — 营养 là danh từ nên cần 有.', pair:'不仅……而且……'},
      {promptLang:'vi', prompt:'Chỉ cần ăn uống hợp lý là không phải lo thiếu dinh dưỡng.', answer:'只要饮食合理，就不用担心缺乏营养。', answerPy:'Zhǐyào yǐnshí hélǐ, jiù búyòng dānxīn quēfá yíngyǎng.', note:'缺乏营养: thiếu chất; 不用 đọc búyòng.', pair:'只要……就……'}
    ]
  },
  {
    n: 4, zh: '摄入', py: 'shèrù', pos: 'Động từ', vn: 'hấp thu, nạp vào (cơ thể)', hv: 'nhiếp nhập', em: '🍽️', lesson: 1,
    explain: ['Đưa thức ăn, chất dinh dưỡng vào cơ thể — từ ngữ khoa học, trang trọng.'],
    usage: 'Văn viết, bài khoa học: 摄入 + 营养 / 热量 / 盐 / 糖; làm danh từ: 营养摄入, 摄入量.',
    collo: ['摄入营养', '摄入热量', '摄入量', '过多摄入'],
    ex_zh: '每天摄入太多的糖对身体不好。', ex_py: 'Měi tiān shèrù tài duō de táng duì shēntǐ bù hǎo.', ex_vn: 'Mỗi ngày nạp quá nhiều đường không tốt cho cơ thể.',
    exList: [
      {zh:'每天摄入太多的糖对身体不好。', py:'Měi tiān shèrù tài duō de táng duì shēntǐ bù hǎo.', vn:'Mỗi ngày nạp quá nhiều đường không tốt cho cơ thể.'},
      {zh:'节食的人摄入的热量比较少。', py:'Jiéshí de rén shèrù de rèliàng bǐjiào shǎo.', vn:'Người ăn kiêng nạp vào ít calo hơn.'},
      {zh:'医生建议老人减少盐的摄入量。', py:'Yīshēng jiànyì lǎorén jiǎnshǎo yán de shèrùliàng.', vn:'Bác sĩ khuyên người già giảm lượng muối nạp vào.'}
    ],
    colloFull: [
      {zh:'摄入营养', py:'shèrù yíngyǎng', vn:'hấp thu dinh dưỡng'},
      {zh:'摄入热量', py:'shèrù rèliàng', vn:'nạp calo'},
      {zh:'摄入量', py:'shèrùliàng', vn:'lượng nạp vào'},
      {zh:'过多摄入', py:'guòduō shèrù', vn:'nạp vào quá nhiều'},
      {zh:'营养摄入', py:'yíngyǎng shèrù', vn:'sự hấp thu dinh dưỡng'}
    ],
    patterns: [{s:'摄入 + 营养 / 热量 / 糖 / 盐', m:'Nạp … vào cơ thể'}, {s:'减少 + N + 的摄入(量)', m:'Giảm lượng … nạp vào'}],
    checkList: [
      {promptLang:'vi', prompt:'Nếu nạp quá nhiều đường, cân nặng sẽ ngày càng tăng.', answer:'如果摄入太多的糖，体重就会越来越重。', answerPy:'Rúguǒ shèrù tài duō de táng, tǐzhòng jiù huì yuè lái yuè zhòng.', note:'摄入 + tân ngữ là thực phẩm/chất; 越来越 + Adj.', pair:'越来越'},
      {promptLang:'vi', prompt:'Khi ăn kiêng không những phải giảm calo, mà cũng phải nạp đủ dinh dưỡng.', answer:'节食的时候，不仅要减少热量，也要摄入足够的营养。', answerPy:'Jiéshí de shíhou, bùjǐn yào jiǎnshǎo rèliàng, yě yào shèrù zúgòu de yíngyǎng.', note:'摄入 + 足够的营养: nạp đủ chất.', pair:'不仅……也……'}
    ]
  },
  {
    n: 5, zh: '模式', py: 'móshì', pos: 'Danh từ', vn: 'kiểu, mô hình, khuôn mẫu', hv: 'mô thức', em: '🔁', lesson: 1,
    explain: ['Kiểu, khuôn mẫu cố định mà sự việc thường diễn ra theo.'],
    usage: 'Hay đi sau danh từ: 饮食模式, 生活模式, 教学模式, 补偿模式; 表现出……的模式.',
    collo: ['饮食模式', '生活模式', '补偿模式', '清晰的模式'],
    ex_zh: '人们的饮食模式会影响到他们的体重变化。', ex_py: 'Rénmen de yǐnshí móshì huì yǐngxiǎng dào tāmen de tǐzhòng biànhuà.', ex_vn: 'Kiểu ăn uống của con người sẽ ảnh hưởng đến sự thay đổi cân nặng của họ.',
    exList: [
      {zh:'人们的饮食模式会影响到他们的体重变化。', py:'Rénmen de yǐnshí móshì huì yǐngxiǎng dào tāmen de tǐzhòng biànhuà.', vn:'Kiểu ăn uống của con người sẽ ảnh hưởng đến sự thay đổi cân nặng của họ.'},
      {zh:'这些人的体重变化表现出清晰的模式。', py:'Zhèxiē rén de tǐzhòng biànhuà biǎoxiàn chū qīngxī de móshì.', vn:'Sự thay đổi cân nặng của những người này thể hiện một mô hình rõ ràng.'},
      {zh:'上大学以后，我的生活模式完全变了。', py:'Shàng dàxué yǐhòu, wǒ de shēnghuó móshì wánquán biàn le.', vn:'Lên đại học rồi, lối sống của tôi thay đổi hoàn toàn.'}
    ],
    colloFull: [
      {zh:'饮食模式', py:'yǐnshí móshì', vn:'kiểu ăn uống'},
      {zh:'生活模式', py:'shēnghuó móshì', vn:'lối sống'},
      {zh:'补偿模式', py:'bǔcháng móshì', vn:'kiểu bù trừ'},
      {zh:'清晰的模式', py:'qīngxī de móshì', vn:'mô hình rõ ràng'},
      {zh:'教学模式', py:'jiàoxué móshì', vn:'mô hình dạy học'}
    ],
    patterns: [{s:'N + 模式', m:'Kiểu / mô hình … (饮食模式, 生活模式)'}, {s:'表现出 + ……的模式', m:'Thể hiện ra một mô hình …'}],
    checkList: [
      {promptLang:'vi', prompt:'Cô giáo đã thay đổi hoàn toàn mô hình dạy học cũ.', answer:'老师把旧的教学模式完全改变了。', answerPy:'Lǎoshī bǎ jiù de jiàoxué móshì wánquán gǎibiàn le.', note:'教学模式 là tân ngữ đưa lên trước bằng 把.', pair:'把'},
      {promptLang:'vi', prompt:'Hễ đến cuối tuần là kiểu ăn uống của anh ấy lại thay đổi.', answer:'一到周末，他的饮食模式就变了。', answerPy:'Yí dào zhōumò, tā de yǐnshí móshì jiù biàn le.', note:'饮食模式: kiểu ăn uống — đúng như phát hiện trong bài.', pair:'一……就……'}
    ]
  },
  {
    n: 6, zh: '波动', py: 'bōdòng', pos: 'Động từ', vn: 'dao động, lên xuống thất thường', hv: 'ba động', em: '📈', lesson: 1,
    explain: ['Lên xuống, thay đổi không ổn định (như sóng nước).'],
    usage: 'Dùng cho giá cả, cân nặng, nhiệt độ, cảm xúc: 上下波动, 价格波动, 情绪波动. Làm danh từ: 波动模式.',
    collo: ['上下波动', '价格波动', '情绪波动', '波动很大'],
    ex_zh: '最近菜价波动很大，一会儿高一会儿低。', ex_py: 'Zuìjìn càijià bōdòng hěn dà, yíhuìr gāo yíhuìr dī.', ex_vn: 'Gần đây giá rau lên xuống rất mạnh, lúc cao lúc thấp.',
    exList: [
      {zh:'节食者的体重会在一周内上下波动。', py:'Jiéshízhě de tǐzhòng huì zài yì zhōu nèi shàngxià bōdòng.', vn:'Cân nặng của người ăn kiêng lên xuống trong vòng một tuần.'},
      {zh:'最近菜价波动很大，一会儿高一会儿低。', py:'Zuìjìn càijià bōdòng hěn dà, yíhuìr gāo yíhuìr dī.', vn:'Gần đây giá rau lên xuống rất mạnh, lúc cao lúc thấp.'},
      {zh:'考试前，她的情绪波动得很厉害。', py:'Kǎoshì qián, tā de qíngxù bōdòng de hěn lìhai.', vn:'Trước kỳ thi, tâm trạng cô ấy thất thường dữ dội.'}
    ],
    colloFull: [
      {zh:'上下波动', py:'shàngxià bōdòng', vn:'lên xuống'},
      {zh:'价格波动', py:'jiàgé bōdòng', vn:'giá cả dao động'},
      {zh:'情绪波动', py:'qíngxù bōdòng', vn:'tâm trạng thất thường'},
      {zh:'波动很大', py:'bōdòng hěn dà', vn:'dao động mạnh'},
      {zh:'体重波动', py:'tǐzhòng bōdòng', vn:'cân nặng dao động'}
    ],
    patterns: [{s:'N + (在……内) + 上下波动', m:'… lên xuống trong khoảng …'}, {s:'N + 波动很大 / 波动得很厉害', m:'… dao động mạnh'}],
    checkList: [
      {promptLang:'vi', prompt:'Tuy ngày nào cân nặng cũng dao động, nhưng bạn không cần lo.', answer:'虽然体重每天都会波动，但是你不用担心。', answerPy:'Suīrán tǐzhòng měi tiān dōu huì bōdòng, dànshì nǐ búyòng dānxīn.', note:'波动 là động từ nội động, không cần tân ngữ.', pair:'虽然……但是……'},
      {promptLang:'vi', prompt:'Giá xăng dao động ngày càng dữ dội.', answer:'油价波动得越来越厉害。', answerPy:'Yóujià bōdòng de yuè lái yuè lìhai.', note:'波动 + 得 + bổ ngữ trình độ.', pair:'越来越'}
    ]
  },
  {
    n: 7, zh: '总共', py: 'zǒnggòng', pos: 'Phó từ', vn: 'tổng cộng, cả thảy', hv: 'tổng cộng', em: '➕', lesson: 1,
    explain: ['Tính gộp tất cả lại.'],
    usage: '总共 + (有 / động từ) + số lượng: 总共有80名, 总共花了五千块; hỏi 总共多少钱?',
    collo: ['总共有', '总共花了', '总共多少钱', '总共三天'],
    ex_zh: '总共有80名成年人参与了这项研究。', ex_py: 'Zǒnggòng yǒu bāshí míng chéngniánrén cānyùle zhè xiàng yánjiū.', ex_vn: 'Tổng cộng có 80 người trưởng thành tham gia nghiên cứu này.',
    exList: [
      {zh:'总共有80名成年人参与了这项研究。', py:'Zǒnggòng yǒu bāshí míng chéngniánrén cānyùle zhè xiàng yánjiū.', vn:'Tổng cộng có 80 người trưởng thành tham gia nghiên cứu này.'},
      {zh:'这次旅行我们总共花了五千块钱。', py:'Zhè cì lǚxíng wǒmen zǒnggòng huāle wǔqiān kuài qián.', vn:'Chuyến du lịch này chúng tôi tiêu tổng cộng năm nghìn tệ.'},
      {zh:'您好，您总共消费了747元。', py:'Nín hǎo, nín zǒnggòng xiāofèile qībǎi sìshíqī yuán.', vn:'Xin chào, anh/chị đã tiêu tổng cộng 747 tệ.'}
    ],
    colloFull: [
      {zh:'总共有', py:'zǒnggòng yǒu', vn:'tổng cộng có'},
      {zh:'总共花了', py:'zǒnggòng huāle', vn:'tổng cộng đã tiêu'},
      {zh:'总共多少钱', py:'zǒnggòng duōshao qián', vn:'tất cả bao nhiêu tiền'},
      {zh:'总共三天', py:'zǒnggòng sān tiān', vn:'tổng cộng ba ngày'},
      {zh:'总共消费', py:'zǒnggòng xiāofèi', vn:'tiêu dùng tổng cộng'}
    ],
    patterns: [{s:'总共 + 有 / V + số lượng', m:'Tổng cộng có / đã … bao nhiêu'}, {s:'……总共 + 多少 + N？', m:'Tất cả bao nhiêu …?'}],
    checkList: [
      {promptLang:'vi', prompt:'Tổng cộng có mười miếng bánh, bị em trai ăn mất sáu miếng.', answer:'总共有十块蛋糕，被弟弟吃了六块。', answerPy:'Zǒnggòng yǒu shí kuài dàngāo, bèi dìdi chīle liù kuài.', note:'总共 đứng trước 有 + số lượng.', pair:'被'},
      {promptLang:'vi', prompt:'Lớp tôi tổng cộng có 40 người, chưa từng có ai đi muộn.', answer:'我们班总共有四十个人，从来没有人迟到过。', answerPy:'Wǒmen bān zǒnggòng yǒu sìshí ge rén, cónglái méiyǒu rén chídàoguo.', note:'总共有 + số + người.', pair:'从来没……过'}
    ]
  },
  {
    n: 8, zh: '参与', py: 'cānyù', pos: 'Động từ', vn: 'tham dự, tham gia (góp phần vào)', hv: 'tham dự', em: '🙋', lesson: 1,
    explain: ['Tham gia vào một công việc, kế hoạch, hoạt động và góp phần vào quá trình đó.'],
    usage: 'Trang trọng hơn 参加; tân ngữ thường trừu tượng: 参与研究, 参与管理, 参与讨论; nói được 参与程度.',
    collo: ['参与研究', '积极参与', '共同参与', '参与管理', '参与程度'],
    ex_zh: '学校鼓励学生积极参与班级管理。', ex_py: 'Xuéxiào gǔlì xuésheng jījí cānyù bānjí guǎnlǐ.', ex_vn: 'Nhà trường khuyến khích học sinh tích cực tham gia quản lý lớp.',
    exList: [
      {zh:'80名成年人参与了这项研究。', py:'Bāshí míng chéngniánrén cānyùle zhè xiàng yánjiū.', vn:'80 người trưởng thành đã tham gia nghiên cứu này.'},
      {zh:'学校鼓励学生积极参与班级管理。', py:'Xuéxiào gǔlì xuésheng jījí cānyù bānjí guǎnlǐ.', vn:'Nhà trường khuyến khích học sinh tích cực tham gia quản lý lớp.'},
      {zh:'这个计划是大家共同参与制定的。', py:'Zhège jìhuà shì dàjiā gòngtóng cānyù zhìdìng de.', vn:'Kế hoạch này là do mọi người cùng tham gia xây dựng.'}
    ],
    colloFull: [
      {zh:'参与研究', py:'cānyù yánjiū', vn:'tham gia nghiên cứu'},
      {zh:'积极参与', py:'jījí cānyù', vn:'tích cực tham gia'},
      {zh:'共同参与', py:'gòngtóng cānyù', vn:'cùng tham gia'},
      {zh:'参与管理', py:'cānyù guǎnlǐ', vn:'tham gia quản lý'},
      {zh:'参与程度', py:'cānyù chéngdù', vn:'mức độ tham gia'}
    ],
    patterns: [{s:'积极 / 共同 / 正式 + 参与 + N', m:'Tích cực / cùng / chính thức tham gia vào …'}, {s:'N + 的参与程度', m:'Mức độ tham gia của …'}],
    checkList: [
      {promptLang:'vi', prompt:'Chỉ cần mọi người cùng tham gia, hoạt động nhất định sẽ thành công.', answer:'只要大家共同参与，活动就一定会成功。', answerPy:'Zhǐyào dàjiā gòngtóng cānyù, huódòng jiù yídìng huì chénggōng.', note:'共同参与: cùng góp phần vào.', pair:'只要……就……'},
      {promptLang:'vi', prompt:'Không chỉ giáo viên, học sinh cũng tham gia quản lý lớp.', answer:'不仅老师，学生也参与班级管理。', answerPy:'Bùjǐn lǎoshī, xuésheng yě cānyù bānjí guǎnlǐ.', note:'参与 + 管理 (việc trừu tượng) — không dùng 参加管理.', pair:'不仅……也……'}
    ]
  },
  {
    n: 9, zh: '人员', py: 'rényuán', pos: 'Danh từ', vn: 'nhân viên, người (làm việc gì)', hv: 'nhân viên', em: '👩‍🔬', lesson: 1,
    explain: ['Những người đảm nhận một loại công việc nào đó — danh từ tập hợp.'],
    usage: 'Đứng sau từ chỉ công việc: 研究人员, 工作人员, 技术人员, 专业人员. Không nói 一个人员.',
    collo: ['研究人员', '工作人员', '技术人员', '专业人员'],
    ex_zh: '研究人员将这些人分为三种类型。', ex_py: 'Yánjiū rényuán jiāng zhèxiē rén fēnwéi sān zhǒng lèixíng.', ex_vn: 'Các nhà nghiên cứu chia những người này thành ba loại.',
    exList: [
      {zh:'研究人员将这些人分为三种类型。', py:'Yánjiū rényuán jiāng zhèxiē rén fēnwéi sān zhǒng lèixíng.', vn:'Các nhà nghiên cứu chia những người này thành ba loại.'},
      {zh:'非工作人员请勿入内。', py:'Fēi gōngzuò rényuán qǐng wù rù nèi.', vn:'Người không phận sự miễn vào.'},
      {zh:'有问题可以问那边的工作人员。', py:'Yǒu wèntí kěyǐ wèn nàbiān de gōngzuò rényuán.', vn:'Có vấn đề gì có thể hỏi nhân viên đằng kia.'}
    ],
    colloFull: [
      {zh:'研究人员', py:'yánjiū rényuán', vn:'nhà nghiên cứu'},
      {zh:'工作人员', py:'gōngzuò rényuán', vn:'nhân viên'},
      {zh:'技术人员', py:'jìshù rényuán', vn:'nhân viên kỹ thuật'},
      {zh:'专业人员', py:'zhuānyè rényuán', vn:'người có chuyên môn'},
      {zh:'医务人员', py:'yīwù rényuán', vn:'nhân viên y tế'}
    ],
    patterns: [{s:'研究 / 工作 / 技术 + 人员', m:'Nhân viên / người làm …'}, {s:'非 + 工作人员', m:'Người không phải nhân viên (biển báo)'}],
    checkList: [
      {promptLang:'vi', prompt:'Chiếc điện thoại bị mất đã được nhân viên tìm thấy.', answer:'丢的手机被工作人员找到了。', answerPy:'Diū de shǒujī bèi gōngzuò rényuán zhǎodào le.', note:'工作人员 = nhân viên (nói chung), đứng sau 被 làm người thực hiện.', pair:'被'},
      {promptLang:'vi', prompt:'Nhân viên y tế đã đưa ông cụ vào bệnh viện.', answer:'医务人员把老人送进了医院。', answerPy:'Yīwù rényuán bǎ lǎorén sòngjìnle yīyuàn.', note:'医务人员 — từ trong chủ đề 医务 của phần 扩展.', pair:'把'}
    ]
  },
  {
    n: 10, zh: '相对', py: 'xiāngduì', pos: 'Tính từ', vn: 'tương đối', hv: 'tương đối', em: '📐', lesson: 1,
    explain: ['So với cái khác mà nói, không tuyệt đối.', 'Làm trạng ngữ: khá, tương đối (相对便宜, 相对来说).'],
    usage: '相对 + N (相对体重); 相对 + Adj (相对便宜); 相对来说 / 相对而言 = nói một cách tương đối.',
    collo: ['相对体重', '相对来说', '相对便宜', '相对稳定'],
    ex_zh: '这家店的东西相对便宜一些。', ex_py: 'Zhè jiā diàn de dōngxi xiāngduì piányi yìxiē.', ex_vn: 'Đồ ở cửa hàng này tương đối rẻ hơn một chút.',
    exList: [
      {zh:'研究人员根据他们的相对体重变化将其分为三种类型。', py:'Yánjiū rényuán gēnjù tāmen de xiāngduì tǐzhòng biànhuà jiāng qí fēnwéi sān zhǒng lèixíng.', vn:'Các nhà nghiên cứu căn cứ vào sự thay đổi cân nặng tương đối của họ mà chia họ thành ba loại.'},
      {zh:'这家店的东西相对便宜一些。', py:'Zhè jiā diàn de dōngxi xiāngduì piányi yìxiē.', vn:'Đồ ở cửa hàng này tương đối rẻ hơn một chút.'},
      {zh:'相对来说，坐火车比坐飞机更舒服。', py:'Xiāngduì lái shuō, zuò huǒchē bǐ zuò fēijī gèng shūfu.', vn:'Nói một cách tương đối, đi tàu hoả thoải mái hơn đi máy bay.'}
    ],
    colloFull: [
      {zh:'相对体重', py:'xiāngduì tǐzhòng', vn:'cân nặng tương đối'},
      {zh:'相对来说', py:'xiāngduì lái shuō', vn:'nói một cách tương đối'},
      {zh:'相对便宜', py:'xiāngduì piányi', vn:'tương đối rẻ'},
      {zh:'相对稳定', py:'xiāngduì wěndìng', vn:'tương đối ổn định'},
      {zh:'相对而言', py:'xiāngduì ér yán', vn:'mà nói một cách tương đối'}
    ],
    patterns: [{s:'相对来说，……', m:'Nói một cách tương đối, … (so sánh)'}, {s:'相对 + Adj', m:'Tương đối …'}],
    checkList: [
      {promptLang:'vi', prompt:'Nói một cách tương đối, rau ở chợ rẻ hơn siêu thị.', answer:'相对来说，市场的菜比超市便宜。', answerPy:'Xiāngduì lái shuō, shìchǎng de cài bǐ chāoshì piányi.', note:'相对来说 đứng đầu câu, sau đó là câu so sánh 比.', pair:'比'},
      {promptLang:'vi', prompt:'Tuy thành phố này tương đối nhỏ, nhưng rất sạch sẽ.', answer:'虽然这个城市相对小一些，但是很干净。', answerPy:'Suīrán zhège chéngshì xiāngduì xiǎo yìxiē, dànshì hěn gānjìng.', note:'相对 + Adj + 一些: tương đối … hơn.', pair:'虽然……但是……'}
    ]
  },
  {
    n: 11, zh: '类型', py: 'lèixíng', pos: 'Danh từ', vn: 'loại, kiểu, loại hình', hv: 'loại hình', em: '🗂️', lesson: 1,
    explain: ['Nhóm, loại gồm những sự vật có đặc điểm chung.'],
    usage: '分为 + số + 种类型; 什么类型的 + N; 不同类型的 + N.',
    collo: ['三种类型', '分为……类型', '不同类型', '什么类型的'],
    ex_zh: '你喜欢什么类型的电影？', ex_py: 'Nǐ xǐhuan shénme lèixíng de diànyǐng?', ex_vn: 'Bạn thích thể loại phim nào?',
    exList: [
      {zh:'研究人员将他们分为三种类型。', py:'Yánjiū rényuán jiāng tāmen fēnwéi sān zhǒng lèixíng.', vn:'Các nhà nghiên cứu chia họ thành ba loại.'},
      {zh:'你喜欢什么类型的电影？', py:'Nǐ xǐhuan shénme lèixíng de diànyǐng?', vn:'Bạn thích thể loại phim nào?'},
      {zh:'不同类型的人适合不同的减肥方法。', py:'Bù tóng lèixíng de rén shìhé bù tóng de jiǎnféi fāngfǎ.', vn:'Mỗi kiểu người hợp với một cách giảm cân khác nhau.'}
    ],
    colloFull: [
      {zh:'三种类型', py:'sān zhǒng lèixíng', vn:'ba loại'},
      {zh:'分为……类型', py:'fēnwéi……lèixíng', vn:'chia thành … loại'},
      {zh:'不同类型', py:'bù tóng lèixíng', vn:'các loại khác nhau'},
      {zh:'什么类型的', py:'shénme lèixíng de', vn:'loại gì, kiểu nào'},
      {zh:'这种类型', py:'zhè zhǒng lèixíng', vn:'loại này'}
    ],
    patterns: [{s:'把 / 将 + N + 分为 + số + 种类型', m:'Chia … thành mấy loại'}, {s:'什么类型的 + N', m:'Loại … nào'}],
    checkList: [
      {promptLang:'vi', prompt:'Cô giáo chia các bài văn thành ba loại.', answer:'老师把作文分为三种类型。', answerPy:'Lǎoshī bǎ zuòwén fēnwéi sān zhǒng lèixíng.', note:'把 + N + 分为 + số + 种类型 (sách dùng 将, văn viết của 把).', pair:'把'},
      {promptLang:'vi', prompt:'Loại phim này tôi chưa từng xem.', answer:'这种类型的电影我从来没看过。', answerPy:'Zhè zhǒng lèixíng de diànyǐng wǒ cónglái méi kànguo.', note:'这种类型的 + N làm chủ đề đứng đầu câu.', pair:'从来没……过'}
    ]
  },
  {
    n: 12, zh: '称', py: 'chēng', pos: 'Động từ', vn: 'cân (đo trọng lượng)', hv: 'xưng', em: '⚖️', lesson: 1,
    explain: ['Đo trọng lượng bằng cân.', '(Nghĩa khác đã gặp: gọi là — 称为, 被称为.)'],
    usage: '称 + 体重 / 一下 / 一称; đọc chēng (thanh 1).',
    collo: ['称体重', '称一下', '称一称', '称过体重'],
    ex_zh: '他们每天起床之后称一下自己的体重。', ex_py: 'Tāmen měi tiān qǐchuáng zhīhòu chēng yíxià zìjǐ de tǐzhòng.', ex_vn: 'Mỗi ngày sau khi ngủ dậy họ cân một lần.',
    exList: [
      {zh:'他们每天起床之后称一下自己的体重。', py:'Tāmen měi tiān qǐchuáng zhīhòu chēng yíxià zìjǐ de tǐzhòng.', vn:'Mỗi ngày sau khi ngủ dậy họ cân một lần.'},
      {zh:'老板，帮我称一称这些苹果。', py:'Lǎobǎn, bāng wǒ chēng yi chēng zhèxiē píngguǒ.', vn:'Ông chủ ơi, cân giúp tôi chỗ táo này.'},
      {zh:'只有至少连续7天称过体重的人才会被纳入分析。', py:'Zhǐyǒu zhìshǎo liánxù qī tiān chēngguo tǐzhòng de rén cái huì bèi nàrù fēnxī.', vn:'Chỉ những ai đã cân liên tục ít nhất 7 ngày mới được đưa vào phân tích.'}
    ],
    colloFull: [
      {zh:'称体重', py:'chēng tǐzhòng', vn:'cân (người)'},
      {zh:'称一下', py:'chēng yíxià', vn:'cân thử'},
      {zh:'称一称', py:'chēng yi chēng', vn:'cân xem'},
      {zh:'称过体重', py:'chēngguo tǐzhòng', vn:'đã từng cân'},
      {zh:'称水果', py:'chēng shuǐguǒ', vn:'cân trái cây'}
    ],
    patterns: [{s:'称 + 一下 + N', m:'Cân thử …'}, {s:'在……之前 / 之后 + 称体重', m:'Cân trước / sau khi …'}],
    checkList: [
      {promptLang:'vi', prompt:'Mẹ vừa ngủ dậy là cân ngay.', answer:'妈妈一起床就称体重。', answerPy:'Māma yì qǐchuáng jiù chēng tǐzhòng.', note:'称体重: cân người — 称 là động từ.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Cô bán hàng cân táo xong rồi bỏ vào túi.', answer:'售货员把苹果称好，放进了袋子里。', answerPy:'Shòuhuòyuán bǎ píngguǒ chēnghǎo, fàngjìnle dàizi li.', note:'称好: cân xong (bổ ngữ kết quả 好).', pair:'把'}
    ]
  },
  {
    n: 13, zh: '可靠', py: 'kěkào', pos: 'Tính từ', vn: 'đáng tin cậy, chắc chắn', hv: 'khả kháo', em: '🤝', lesson: 1,
    explain: ['Có thể tin tưởng, dựa vào được (người, tin tức, số liệu, phương pháp).'],
    usage: 'Làm vị ngữ (他很可靠) hoặc định ngữ (可靠的朋友 / 消息 / 报道); danh từ hoá: 可靠性.',
    collo: ['可靠的朋友', '可靠的消息', '可靠性', '不太可靠'],
    ex_zh: '他办事很可靠，你放心吧。', ex_py: 'Tā bànshì hěn kěkào, nǐ fàngxīn ba.', ex_vn: 'Anh ấy làm việc rất đáng tin, bạn yên tâm đi.',
    exList: [
      {zh:'他办事很可靠，你放心吧。', py:'Tā bànshì hěn kěkào, nǐ fàngxīn ba.', vn:'Anh ấy làm việc rất đáng tin, bạn yên tâm đi.'},
      {zh:'这个消息可靠吗？你是从哪儿听说的？', py:'Zhège xiāoxi kěkào ma? Nǐ shì cóng nǎr tīngshuō de?', vn:'Tin này có chắc không? Bạn nghe ở đâu thế?'},
      {zh:'为了保证可靠性，研究人员跟踪调查了很长时间。', py:'Wèile bǎozhèng kěkàoxìng, yánjiū rényuán gēnzōng diàochále hěn cháng shíjiān.', vn:'Để bảo đảm độ tin cậy, các nhà nghiên cứu đã theo dõi điều tra rất lâu.'}
    ],
    colloFull: [
      {zh:'可靠的朋友', py:'kěkào de péngyou', vn:'người bạn đáng tin'},
      {zh:'可靠的消息', py:'kěkào de xiāoxi', vn:'tin chắc chắn'},
      {zh:'可靠性', py:'kěkàoxìng', vn:'độ tin cậy'},
      {zh:'不太可靠', py:'bú tài kěkào', vn:'không đáng tin lắm'},
      {zh:'质量可靠', py:'zhìliàng kěkào', vn:'chất lượng đáng tin'}
    ],
    patterns: [{s:'Sub + (很 / 不太) + 可靠', m:'… (rất / không mấy) đáng tin'}, {s:'可靠的 + 朋友 / 消息 / 报道 / 结论', m:'… đáng tin cậy'}],
    checkList: [
      {promptLang:'vi', prompt:'Tin này là do một người bạn đáng tin nói với tôi.', answer:'这个消息是一个可靠的朋友告诉我的。', answerPy:'Zhège xiāoxi shì yí ge kěkào de péngyou gàosu wǒ de.', note:'可靠的 + N làm định ngữ.', pair:'是……的'},
      {promptLang:'vi', prompt:'Tuy cách này rất đơn giản, nhưng không đáng tin lắm.', answer:'虽然这个方法很简单，但是不太可靠。', answerPy:'Suīrán zhège fāngfǎ hěn jiǎndān, dànshì bú tài kěkào.', note:'不太可靠: 不 đọc bú trước 太.', pair:'虽然……但是……'}
    ]
  },
  {
    n: 14, zh: '纳入', py: 'nàrù', pos: 'Động từ', vn: 'đưa vào, xếp vào', hv: 'nạp nhập', em: '📥', lesson: 1,
    explain: ['Đưa vào một phạm vi, kế hoạch, hệ thống — văn viết.'],
    usage: '被纳入 + 分析 / 计划 / 范围; 把 + N + 纳入 + ……. Hay dùng ở câu bị động.',
    collo: ['纳入分析', '纳入计划', '被纳入', '纳入范围'],
    ex_zh: '学校把游泳纳入了体育课。', ex_py: 'Xuéxiào bǎ yóuyǒng nàrùle tǐyùkè.', ex_vn: 'Nhà trường đã đưa bơi lội vào giờ thể dục.',
    exList: [
      {zh:'只有连续7天以上称过体重的人才会被纳入分析。', py:'Zhǐyǒu liánxù qī tiān yǐshàng chēngguo tǐzhòng de rén cái huì bèi nàrù fēnxī.', vn:'Chỉ những ai đã cân liên tục 7 ngày trở lên mới được đưa vào phân tích.'},
      {zh:'学校把游泳纳入了体育课。', py:'Xuéxiào bǎ yóuyǒng nàrùle tǐyùkè.', vn:'Nhà trường đã đưa bơi lội vào giờ thể dục.'},
      {zh:'这个问题已经被纳入明年的工作计划。', py:'Zhège wèntí yǐjīng bèi nàrù míngnián de gōngzuò jìhuà.', vn:'Vấn đề này đã được đưa vào kế hoạch công tác năm sau.'}
    ],
    colloFull: [
      {zh:'纳入分析', py:'nàrù fēnxī', vn:'đưa vào phân tích'},
      {zh:'纳入计划', py:'nàrù jìhuà', vn:'đưa vào kế hoạch'},
      {zh:'被纳入', py:'bèi nàrù', vn:'được đưa vào'},
      {zh:'纳入范围', py:'nàrù fànwéi', vn:'đưa vào phạm vi'},
      {zh:'纳入考试', py:'nàrù kǎoshì', vn:'đưa vào kỳ thi'}
    ],
    patterns: [{s:'N + 被纳入 + 分析 / 计划', m:'… được đưa vào …'}, {s:'把 + N + 纳入 + ……', m:'Đưa … vào …'}],
    checkList: [
      {promptLang:'vi', prompt:'Trường đã đưa tiếng Trung vào môn học bắt buộc.', answer:'学校把汉语纳入了必修课。', answerPy:'Xuéxiào bǎ Hànyǔ nàrùle bìxiūkè.', note:'把 + N + 纳入 + phạm vi.', pair:'把'},
      {promptLang:'vi', prompt:'Số liệu của anh ấy không được đưa vào phân tích.', answer:'他的数据没有被纳入分析。', answerPy:'Tā de shùjù méiyǒu bèi nàrù fēnxī.', note:'Phủ định câu bị động: 没有 đứng trước 被.', pair:'被'}
    ]
  },
  {
    n: 15, zh: '分析', py: 'fēnxī', pos: 'Động từ', vn: 'phân tích', hv: 'phân tích', em: '🔍', lesson: 1,
    explain: ['Chia sự việc thành từng phần để tìm hiểu bản chất, nguyên nhân.'],
    usage: '分析 + 情况 / 问题 / 原因 / 心理 / 语法 / 病句; làm danh từ: 进行分析, 纳入分析.',
    collo: ['分析原因', '分析问题', '分析情况', '分析病句'],
    ex_zh: '我们先来分析一下失败的原因。', ex_py: 'Wǒmen xiān lái fēnxī yíxià shībài de yuányīn.', ex_vn: 'Chúng ta hãy phân tích nguyên nhân thất bại trước đã.',
    exList: [
      {zh:'我们先来分析一下失败的原因。', py:'Wǒmen xiān lái fēnxī yíxià shībài de yuányīn.', vn:'Chúng ta hãy phân tích nguyên nhân thất bại trước đã.'},
      {zh:'老师帮我们分析了这个句子的语法。', py:'Lǎoshī bāng wǒmen fēnxīle zhège jùzi de yǔfǎ.', vn:'Thầy giúp chúng tôi phân tích ngữ pháp của câu này.'},
      {zh:'他很会分析别人的心理。', py:'Tā hěn huì fēnxī biérén de xīnlǐ.', vn:'Anh ấy rất giỏi phân tích tâm lý người khác.'}
    ],
    colloFull: [
      {zh:'分析原因', py:'fēnxī yuányīn', vn:'phân tích nguyên nhân'},
      {zh:'分析问题', py:'fēnxī wèntí', vn:'phân tích vấn đề'},
      {zh:'分析情况', py:'fēnxī qíngkuàng', vn:'phân tích tình hình'},
      {zh:'分析病句', py:'fēnxī bìngjù', vn:'phân tích câu sai'},
      {zh:'分析心理', py:'fēnxī xīnlǐ', vn:'phân tích tâm lý'}
    ],
    patterns: [{s:'分析 + 原因 / 问题 / 情况', m:'Phân tích …'}, {s:'对 + N + 进行分析', m:'Tiến hành phân tích …'}],
    checkList: [
      {promptLang:'vi', prompt:'Thầy giáo phân tích nguyên nhân thất bại rất rõ ràng.', answer:'老师把失败的原因分析得很清楚。', answerPy:'Lǎoshī bǎ shībài de yuányīn fēnxī de hěn qīngchu.', note:'把 + tân ngữ + 分析 + 得 + bổ ngữ trình độ.', pair:'把'},
      {promptLang:'vi', prompt:'Chỉ cần phân tích kỹ vấn đề là sẽ tìm ra cách giải quyết.', answer:'只要仔细分析问题，就能找到解决的办法。', answerPy:'Zhǐyào zǐxì fēnxī wèntí, jiù néng zhǎodào jiějué de bànfǎ.', note:'仔细 + 分析 + 问题.', pair:'只要……就……'}
    ]
  },
  {
    n: 16, zh: '志愿者', py: 'zhìyuànzhě', pos: 'Danh từ', vn: 'tình nguyện viên', hv: 'chí nguyện giả', em: '🙌', lesson: 1,
    explain: ['Người tự nguyện tham gia một việc (thường không nhận tiền).'],
    usage: '当 / 做志愿者; 志愿者活动; lượng từ trang trọng 名: 一名志愿者. 者 = người (như 节食者).',
    collo: ['当志愿者', '志愿者活动', '一名志愿者', '年轻的志愿者'],
    ex_zh: '暑假我去博物馆当了一个月的志愿者。', ex_py: 'Shǔjià wǒ qù bówùguǎn dāngle yí ge yuè de zhìyuànzhě.', ex_vn: 'Nghỉ hè tôi đến bảo tàng làm tình nguyện viên một tháng.',
    exList: [
      {zh:'对这些志愿者的跟踪调查时间最短为15天。', py:'Duì zhèxiē zhìyuànzhě de gēnzōng diàochá shíjiān zuì duǎn wéi shíwǔ tiān.', vn:'Thời gian theo dõi điều tra những tình nguyện viên này ngắn nhất là 15 ngày.'},
      {zh:'暑假我去博物馆当了一个月的志愿者。', py:'Shǔjià wǒ qù bówùguǎn dāngle yí ge yuè de zhìyuànzhě.', vn:'Nghỉ hè tôi đến bảo tàng làm tình nguyện viên một tháng.'},
      {zh:'这次运动会需要两百名志愿者。', py:'Zhè cì yùndònghuì xūyào liǎngbǎi míng zhìyuànzhě.', vn:'Hội thao lần này cần hai trăm tình nguyện viên.'}
    ],
    colloFull: [
      {zh:'当志愿者', py:'dāng zhìyuànzhě', vn:'làm tình nguyện viên'},
      {zh:'志愿者活动', py:'zhìyuànzhě huódòng', vn:'hoạt động tình nguyện'},
      {zh:'一名志愿者', py:'yì míng zhìyuànzhě', vn:'một tình nguyện viên'},
      {zh:'年轻的志愿者', py:'niánqīng de zhìyuànzhě', vn:'tình nguyện viên trẻ'},
      {zh:'大学生志愿者', py:'dàxuéshēng zhìyuànzhě', vn:'sinh viên tình nguyện'}
    ],
    patterns: [{s:'去 + nơi chốn + 当志愿者', m:'Đến … làm tình nguyện viên'}, {s:'số + 名 + 志愿者', m:'Lượng từ 名 đếm người (trang trọng)'}],
    checkList: [
      {promptLang:'vi', prompt:'Tôi chưa từng làm tình nguyện viên, năm nay muốn thử.', answer:'我从来没当过志愿者，今年想试试。', answerPy:'Wǒ cónglái méi dāngguo zhìyuànzhě, jīnnián xiǎng shìshi.', note:'当 + 志愿者: làm tình nguyện viên.', pair:'从来没……过'},
      {promptLang:'vi', prompt:'Không chỉ sinh viên, rất nhiều người già cũng làm tình nguyện viên.', answer:'不仅大学生，很多老人也当志愿者。', answerPy:'Bùjǐn dàxuéshēng, hěn duō lǎorén yě dāng zhìyuànzhě.', note:'志愿者 không phân biệt tuổi tác.', pair:'不仅……也……'}
    ]
  },
  {
    n: 17, zh: '跟踪', py: 'gēnzōng', pos: 'Động từ', vn: 'theo dõi, bám theo', hv: 'cân tung', em: '👣', lesson: 1,
    explain: ['Đi theo sát phía sau (người, xe).', 'Theo dõi liên tục một đối tượng trong thời gian dài (điều tra, nghiên cứu, đưa tin).'],
    usage: '跟踪调查, 跟踪报道, 跟踪研究; 被人跟踪 (bị bám theo).',
    collo: ['跟踪调查', '跟踪报道', '被人跟踪', '长期跟踪'],
    ex_zh: '记者对这件事进行了跟踪报道。', ex_py: 'Jìzhě duì zhè jiàn shì jìnxíngle gēnzōng bàodào.', ex_vn: 'Phóng viên đã đưa tin theo dõi sự việc này.',
    exList: [
      {zh:'对这些志愿者的跟踪调查时间最长为330天。', py:'Duì zhèxiē zhìyuànzhě de gēnzōng diàochá shíjiān zuì cháng wéi sānbǎi sānshí tiān.', vn:'Thời gian theo dõi điều tra những tình nguyện viên này dài nhất là 330 ngày.'},
      {zh:'记者对这件事进行了跟踪报道。', py:'Jìzhě duì zhè jiàn shì jìnxíngle gēnzōng bàodào.', vn:'Phóng viên đã đưa tin theo dõi sự việc này.'},
      {zh:'晚上回家时，她总觉得有人在跟踪她。', py:'Wǎnshang huí jiā shí, tā zǒng juéde yǒu rén zài gēnzōng tā.', vn:'Tối về nhà, cô ấy luôn cảm thấy có người bám theo mình.'}
    ],
    colloFull: [
      {zh:'跟踪调查', py:'gēnzōng diàochá', vn:'điều tra theo dõi'},
      {zh:'跟踪报道', py:'gēnzōng bàodào', vn:'đưa tin theo dõi'},
      {zh:'被人跟踪', py:'bèi rén gēnzōng', vn:'bị người bám theo'},
      {zh:'长期跟踪', py:'chángqī gēnzōng', vn:'theo dõi lâu dài'},
      {zh:'跟踪研究', py:'gēnzōng yánjiū', vn:'nghiên cứu theo dõi'}
    ],
    patterns: [{s:'对 + N + 进行跟踪调查', m:'Tiến hành điều tra theo dõi …'}, {s:'被 + người + 跟踪', m:'Bị ai bám theo'}],
    checkList: [
      {promptLang:'vi', prompt:'Tối qua cô ấy bị một người lạ bám theo.', answer:'昨天晚上她被一个陌生人跟踪了。', answerPy:'Zuótiān wǎnshang tā bèi yí ge mòshēngrén gēnzōng le.', note:'被 + người + 跟踪 + 了.', pair:'被'},
      {promptLang:'vi', prompt:'Kết luận này là do các nhà nghiên cứu theo dõi điều tra mười năm mới rút ra được.', answer:'这个结论是研究人员跟踪调查了十年得出来的。', answerPy:'Zhège jiélùn shì yánjiū rényuán gēnzōng diàochále shí nián dé chūlai de.', note:'跟踪调查 + 了 + thời lượng.', pair:'是……的'}
    ]
  },
  {
    n: 18, zh: '成果', py: 'chéngguǒ', pos: 'Danh từ', vn: 'thành quả, kết quả (tốt)', hv: 'thành quả', em: '🏆', lesson: 1,
    explain: ['Kết quả tốt đạt được sau công việc, học tập, nghiên cứu.'],
    usage: 'Mang nghĩa tích cực: 研究成果, 学习成果, 取得成果. Khác 结果 (kết quả nói chung, tốt xấu đều được; còn làm liên từ “kết cục là”).',
    collo: ['研究成果', '学习成果', '取得成果', '重大的成果'],
    ex_zh: '经过三年的努力，他们终于取得了重大的成果。', ex_py: 'Jīngguò sān nián de nǔlì, tāmen zhōngyú qǔdéle zhòngdà de chéngguǒ.', ex_vn: 'Sau ba năm cố gắng, cuối cùng họ đã đạt được thành quả to lớn.',
    exList: [
      {zh:'研究成果显示，这些人的体重变化表现出清晰的模式。', py:'Yánjiū chéngguǒ xiǎnshì, zhèxiē rén de tǐzhòng biànhuà biǎoxiàn chū qīngxī de móshì.', vn:'Kết quả nghiên cứu cho thấy sự thay đổi cân nặng của những người này có một mô hình rõ ràng.'},
      {zh:'经过三年的努力，他们终于取得了重大的成果。', py:'Jīngguò sān nián de nǔlì, tāmen zhōngyú qǔdéle zhòngdà de chéngguǒ.', vn:'Sau ba năm cố gắng, cuối cùng họ đã đạt được thành quả to lớn.'},
      {zh:'期末我们要向家长展示学习成果。', py:'Qīmò wǒmen yào xiàng jiāzhǎng zhǎnshì xuéxí chéngguǒ.', vn:'Cuối kỳ chúng tôi sẽ trình bày thành quả học tập với phụ huynh.'}
    ],
    colloFull: [
      {zh:'研究成果', py:'yánjiū chéngguǒ', vn:'thành quả nghiên cứu'},
      {zh:'学习成果', py:'xuéxí chéngguǒ', vn:'thành quả học tập'},
      {zh:'取得成果', py:'qǔdé chéngguǒ', vn:'đạt được thành quả'},
      {zh:'重大的成果', py:'zhòngdà de chéngguǒ', vn:'thành quả to lớn'},
      {zh:'劳动成果', py:'láodòng chéngguǒ', vn:'thành quả lao động'}
    ],
    patterns: [{s:'取得 + (重大的) + 成果', m:'Đạt được thành quả (to lớn)'}, {s:'研究成果显示，……', m:'Thành quả nghiên cứu cho thấy …'}],
    checkList: [
      {promptLang:'vi', prompt:'Chúng tôi đã nộp thành quả nghiên cứu cho thầy.', answer:'我们把研究成果交给了老师。', answerPy:'Wǒmen bǎ yánjiū chéngguǒ jiāo gěile lǎoshī.', note:'研究成果 là tân ngữ của 把.', pair:'把'},
      {promptLang:'vi', prompt:'Tuy thí nghiệm thất bại nhiều lần, nhưng cuối cùng họ vẫn đạt được thành quả.', answer:'虽然实验失败了很多次，但是他们最后还是取得了成果。', answerPy:'Suīrán shíyàn shībàile hěn duō cì, dànshì tāmen zuìhòu háishi qǔdéle chéngguǒ.', note:'取得 + 成果 là kết hợp cố định.', pair:'虽然……但是……'}
    ]
  },
  {
    n: 19, zh: '清晰', py: 'qīngxī', pos: 'Tính từ', vn: 'rõ ràng, rõ nét', hv: 'thanh tích', em: '🔎', lesson: 1,
    explain: ['Rõ, sắc nét, dễ nhận ra (hình ảnh, âm thanh, mạch suy nghĩ, mô hình).'],
    usage: 'Văn viết hơn 清楚: 声音清晰, 图像清晰, 思路清晰, 清晰的模式; 清晰地 + V.',
    collo: ['清晰的模式', '声音清晰', '思路清晰', '图像清晰'],
    ex_zh: '这张照片拍得很清晰。', ex_py: 'Zhè zhāng zhàopiàn pāi de hěn qīngxī.', ex_vn: 'Tấm ảnh này chụp rất nét.',
    exList: [
      {zh:'这些人的体重变化表现出清晰的模式。', py:'Zhèxiē rén de tǐzhòng biànhuà biǎoxiàn chū qīngxī de móshì.', vn:'Sự thay đổi cân nặng của những người này thể hiện một mô hình rõ ràng.'},
      {zh:'这张照片拍得很清晰。', py:'Zhè zhāng zhàopiàn pāi de hěn qīngxī.', vn:'Tấm ảnh này chụp rất nét.'},
      {zh:'他说话思路清晰，大家都听得懂。', py:'Tā shuōhuà sīlù qīngxī, dàjiā dōu tīng de dǒng.', vn:'Anh ấy nói năng mạch lạc, ai cũng hiểu.'}
    ],
    colloFull: [
      {zh:'清晰的模式', py:'qīngxī de móshì', vn:'mô hình rõ ràng'},
      {zh:'声音清晰', py:'shēngyīn qīngxī', vn:'âm thanh rõ'},
      {zh:'思路清晰', py:'sīlù qīngxī', vn:'mạch suy nghĩ mạch lạc'},
      {zh:'图像清晰', py:'túxiàng qīngxī', vn:'hình ảnh sắc nét'},
      {zh:'清晰地记得', py:'qīngxī de jìde', vn:'nhớ rõ ràng'}
    ],
    patterns: [{s:'N + (很 / 非常) + 清晰', m:'… rất rõ nét'}, {s:'清晰地 + V', m:'… một cách rõ ràng'}],
    checkList: [
      {promptLang:'vi', prompt:'Ảnh chụp bằng điện thoại mới ngày càng nét.', answer:'新手机拍的照片越来越清晰了。', answerPy:'Xīn shǒujī pāi de zhàopiàn yuè lái yuè qīngxī le.', note:'清晰 tả độ nét của hình ảnh.', pair:'越来越'},
      {promptLang:'vi', prompt:'Tấm ảnh nét như vậy là chụp bằng điện thoại đấy.', answer:'这么清晰的照片是用手机拍的。', answerPy:'Zhème qīngxī de zhàopiàn shì yòng shǒujī pāi de.', note:'这么 + 清晰 + 的 + N làm chủ ngữ.', pair:'是……的'}
    ]
  },
  {
    n: 20, zh: '即', py: 'jí', pos: 'Động từ / Phó từ', vn: 'tức là, nghĩa là; liền, ngay', hv: 'tức', em: '🟰', lesson: 1,
    explain: ['Động từ (văn viết) = 就是: tức là, nghĩa là — dùng để giải thích.', 'Phó từ (văn viết) = 就, 便: liền, ngay.'],
    usage: 'A，即 B (B giải thích A); 一 + V + 即 + V (一学即会, 一拍即合). Đừng nhầm với 既 jì (既……又……).',
    collo: ['即周末之后', '一学即会', '一拍即合', '不懂即问'],
    ex_zh: '他可聪明了，什么东西一学即会。', ex_py: 'Tā kě cōngming le, shénme dōngxi yì xué jí huì.', ex_vn: 'Cậu ấy thông minh lắm, cái gì học một lần là biết ngay.',
    exList: [
      {zh:'这些人的体重变化表现出清晰的模式，即周末之后体重升高。', py:'Zhèxiē rén de tǐzhòng biànhuà biǎoxiàn chū qīngxī de móshì, jí zhōumò zhīhòu tǐzhòng shēnggāo.', vn:'Sự thay đổi cân nặng của những người này có một mô hình rõ ràng, tức là sau cuối tuần cân nặng tăng lên.'},
      {zh:'“旦”是象形字，即太阳从地平线上升起。', py:'“Dàn” shì xiàngxíngzì, jí tàiyáng cóng dìpíngxiàn shang shēngqǐ.', vn:'“旦” là chữ tượng hình, tức là mặt trời mọc lên từ đường chân trời.'},
      {zh:'他可聪明了，什么东西一学即会。', py:'Tā kě cōngming le, shénme dōngxi yì xué jí huì.', vn:'Cậu ấy thông minh lắm, cái gì học một lần là biết ngay.'}
    ],
    colloFull: [
      {zh:'即周末之后', py:'jí zhōumò zhīhòu', vn:'tức là sau cuối tuần'},
      {zh:'一学即会', py:'yì xué jí huì', vn:'học là biết ngay'},
      {zh:'一拍即合', py:'yì pāi jí hé', vn:'vừa gặp đã ăn ý'},
      {zh:'不懂即问', py:'bù dǒng jí wèn', vn:'không hiểu là hỏi ngay'},
      {zh:'即可', py:'jí kě', vn:'là có thể'}
    ],
    patterns: [{s:'A，即 B', m:'A, tức là B (B giải thích A)'}, {s:'一 + V₁ + 即 + V₂', m:'Hễ … là … ngay (văn viết của 一……就……)'}],
    checkList: [
      {promptLang:'vi', prompt:'Ông ấy vừa đến Bắc Kinh là đi thăm Vạn Lý Trường Thành ngay.', answer:'他一到北京即去参观了长城。', answerPy:'Tā yí dào Běijīng jí qù cānguānle Chángchéng.', note:'即 = 就 trong văn viết; không dùng 即 và 就 cùng lúc.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Tôi sinh vào ngày 1 tháng 10, tức là ngày Quốc khánh.', answer:'我是十月一日，即国庆节那天出生的。', answerPy:'Wǒ shì shí yuè yī rì, jí Guóqìng Jié nà tiān chūshēng de.', note:'即 dẫn ra phần giải thích: 十月一日 chính là 国庆节.', pair:'是……的'}
    ]
  },
  {
    n: 21, zh: '升', py: 'shēng', pos: 'Động từ', vn: 'lên, tăng lên', hv: 'thăng', em: '⬆️', lesson: 1,
    explain: ['Chuyển động lên cao; tăng lên (nhiệt độ, cân nặng, giá cả, cấp học, chức vụ).'],
    usage: '升高, 升起, 上升 (≠ 下降); 升 + 学 / 级 / 职 (lên lớp, thăng chức).',
    collo: ['升高', '上升', '升起', '升职'],
    ex_zh: '太阳从东方升起来了。', ex_py: 'Tàiyáng cóng dōngfāng shēng qǐlai le.', ex_vn: 'Mặt trời đã mọc lên ở phía đông.',
    exList: [
      {zh:'周末之后体重升高，在工作日体重减轻。', py:'Zhōumò zhīhòu tǐzhòng shēnggāo, zài gōngzuòrì tǐzhòng jiǎnqīng.', vn:'Sau cuối tuần cân nặng tăng lên, trong ngày làm việc thì giảm xuống.'},
      {zh:'太阳从东方升起来了。', py:'Tàiyáng cóng dōngfāng shēng qǐlai le.', vn:'Mặt trời đã mọc lên ở phía đông.'},
      {zh:'这两天气温上升得很快。', py:'Zhè liǎng tiān qìwēn shàngshēng de hěn kuài.', vn:'Mấy hôm nay nhiệt độ tăng rất nhanh.'}
    ],
    colloFull: [
      {zh:'升高', py:'shēnggāo', vn:'tăng cao'},
      {zh:'上升', py:'shàngshēng', vn:'đi lên, tăng'},
      {zh:'升起', py:'shēngqǐ', vn:'mọc lên, kéo lên'},
      {zh:'升职', py:'shēngzhí', vn:'thăng chức'},
      {zh:'上升的趋势', py:'shàngshēng de qūshì', vn:'xu hướng tăng'}
    ],
    patterns: [{s:'N + 升高 / 上升', m:'… tăng lên (≠ 下降)'}, {s:'N + 从……升起', m:'… mọc lên / bay lên từ …'}],
    checkList: [
      {promptLang:'vi', prompt:'Cân nặng của anh ấy tăng ngày càng nhanh.', answer:'他的体重升得越来越快。', answerPy:'Tā de tǐzhòng shēng de yuè lái yuè kuài.', note:'升 + 得 + bổ ngữ trình độ.', pair:'越来越'},
      {promptLang:'vi', prompt:'Hễ đến mùa hè là nhiệt độ tăng lên.', answer:'一到夏天，气温就升高了。', answerPy:'Yí dào xiàtiān, qìwēn jiù shēnggāo le.', note:'升高: tăng cao (升 + bổ ngữ 高).', pair:'一……就……'}
    ]
  },
  {
    n: 22, zh: '达到', py: 'dádào', pos: 'Động từ', vn: 'đạt đến, đạt được', hv: 'đạt đáo', em: '🎯', lesson: 1,
    explain: ['Đạt tới một mức độ, mục đích, tiêu chuẩn — tân ngữ thường là thứ trừu tượng.'],
    usage: '达到 + 水平 / 程度 / 规模 / 目的 / 要求 / 最低点. Khác 到达 (đến nơi chốn: 到达北京).',
    collo: ['达到目的', '达到要求', '达到水平', '达到最低点'],
    ex_zh: '周五体重达到最低点。', ex_py: 'Zhōuwǔ tǐzhòng dádào zuì dī diǎn.', ex_vn: 'Thứ Sáu cân nặng xuống mức thấp nhất.',
    exList: [
      {zh:'周五体重达到最低点。', py:'Zhōuwǔ tǐzhòng dádào zuì dī diǎn.', vn:'Thứ Sáu cân nặng xuống mức thấp nhất.'},
      {zh:'许多人喜爱喝茶，几乎达到了不可一日无茶的程度。', py:'Xǔduō rén xǐ\'ài hē chá, jīhū dádàole bù kě yí rì wú chá de chéngdù.', vn:'Nhiều người mê uống trà, gần như đến mức không thể một ngày thiếu trà.'},
      {zh:'他的汉语已经达到了HSK五级水平。', py:'Tā de Hànyǔ yǐjīng dádàole HSK wǔ jí shuǐpíng.', vn:'Tiếng Trung của anh ấy đã đạt trình độ HSK 5.'}
    ],
    colloFull: [
      {zh:'达到目的', py:'dádào mùdì', vn:'đạt mục đích'},
      {zh:'达到要求', py:'dádào yāoqiú', vn:'đạt yêu cầu'},
      {zh:'达到水平', py:'dádào shuǐpíng', vn:'đạt trình độ'},
      {zh:'达到最低点', py:'dádào zuì dī diǎn', vn:'xuống mức thấp nhất'},
      {zh:'达到……的程度', py:'dádào……de chéngdù', vn:'đến mức …'}
    ],
    patterns: [{s:'达到 + 目的 / 要求 / 水平 / 程度', m:'Đạt mục đích / yêu cầu / trình độ / mức độ'}, {s:'达到……的程度', m:'Đến mức …'}],
    checkList: [
      {promptLang:'vi', prompt:'Chỉ cần ngày nào bạn cũng luyện tập là có thể đạt trình độ HSK 5.', answer:'只要你每天练习，就能达到HSK五级水平。', answerPy:'Zhǐyào nǐ měi tiān liànxí, jiù néng dádào HSK wǔ jí shuǐpíng.', note:'达到 + 水平 — không dùng 到达.', pair:'只要……就……'},
      {promptLang:'vi', prompt:'Tuy anh ấy rất cố gắng, nhưng vẫn chưa đạt yêu cầu của thầy.', answer:'虽然他很努力，但是还没达到老师的要求。', answerPy:'Suīrán tā hěn nǔlì, dànshì hái méi dádào lǎoshī de yāoqiú.', note:'还没达到: vẫn chưa đạt.', pair:'虽然……但是……'}
    ]
  },
  {
    n: 23, zh: '意外', py: 'yìwài', pos: 'Tính từ / Danh từ', vn: 'bất ngờ; tai nạn, điều bất trắc', hv: 'ý ngoại', em: '😲', lesson: 1,
    explain: ['Tính từ: ngoài dự tính, bất ngờ (意外的消息, 感到意外, 意外地发现).', 'Danh từ: chuyện không may xảy ra bất ngờ (发生意外, 出意外).'],
    usage: '感到很意外; 意外地 + V; 意外的 + 礼物 / 消息 / 机会 / 结果 / 发现; 出了意外.',
    collo: ['意外地发现', '感到意外', '意外的礼物', '发生意外'],
    ex_zh: '收到你的信，我感到很意外。', ex_py: 'Shōudào nǐ de xìn, wǒ gǎndào hěn yìwài.', ex_vn: 'Nhận được thư của bạn, tôi thấy rất bất ngờ.',
    exList: [
      {zh:'研究人员还意外地发现了一个新现象。', py:'Yánjiū rényuán hái yìwài de fāxiànle yí ge xīn xiànxiàng.', vn:'Các nhà nghiên cứu còn bất ngờ phát hiện một hiện tượng mới.'},
      {zh:'收到你的信，我感到很意外。', py:'Shōudào nǐ de xìn, wǒ gǎndào hěn yìwài.', vn:'Nhận được thư của bạn, tôi thấy rất bất ngờ.'},
      {zh:'开车要小心，千万别出意外。', py:'Kāichē yào xiǎoxīn, qiānwàn bié chū yìwài.', vn:'Lái xe phải cẩn thận, đừng để xảy ra chuyện gì.'}
    ],
    colloFull: [
      {zh:'意外地发现', py:'yìwài de fāxiàn', vn:'bất ngờ phát hiện'},
      {zh:'感到意外', py:'gǎndào yìwài', vn:'cảm thấy bất ngờ'},
      {zh:'意外的礼物', py:'yìwài de lǐwù', vn:'món quà bất ngờ'},
      {zh:'发生意外', py:'fāshēng yìwài', vn:'xảy ra tai nạn'},
      {zh:'意外的消息', py:'yìwài de xiāoxi', vn:'tin bất ngờ'}
    ],
    patterns: [{s:'意外地 + V', m:'Bất ngờ (mà) …'}, {s:'发生 / 出 + 意外', m:'Xảy ra chuyện không may'}],
    checkList: [
      {promptLang:'vi', prompt:'Món quà bất ngờ này là do bạn thân tặng tôi.', answer:'这个意外的礼物是好朋友送给我的。', answerPy:'Zhège yìwài de lǐwù shì hǎo péngyou sòng gěi wǒ de.', note:'意外的 + N: … bất ngờ.', pair:'是……的'},
      {promptLang:'vi', prompt:'Tôi chưa từng gặp chuyện bất ngờ như vậy.', answer:'我从来没遇到过这么意外的事。', answerPy:'Wǒ cónglái méi yùdàoguo zhème yìwài de shì.', note:'这么 + 意外 + 的 + N.', pair:'从来没……过'}
    ]
  },
  {
    n: 24, zh: '存在', py: 'cúnzài', pos: 'Động từ', vn: 'tồn tại, có', hv: 'tồn tại', em: '📍', lesson: 1,
    explain: ['Có thật, vẫn còn đó (vấn đề, khác biệt, nguy hiểm…).', 'Làm danh từ: sự tồn tại.'],
    usage: '存在 + (着) + 问题 / 差异 / 不同 / 危险 — văn viết, dùng thay cho 有.',
    collo: ['存在问题', '存在差异', '存在着不同', '存在危险'],
    ex_zh: '这个计划还存在一些问题。', ex_py: 'Zhège jìhuà hái cúnzài yìxiē wèntí.', ex_vn: 'Kế hoạch này vẫn còn một vài vấn đề.',
    exList: [
      {zh:'体重减轻者和体重增加者在体重波动模式上存在着明显不同。', py:'Tǐzhòng jiǎnqīngzhě hé tǐzhòng zēngjiāzhě zài tǐzhòng bōdòng móshì shang cúnzàizhe míngxiǎn bù tóng.', vn:'Người giảm cân và người tăng cân có sự khác nhau rõ rệt về kiểu dao động cân nặng.'},
      {zh:'这个计划还存在一些问题。', py:'Zhège jìhuà hái cúnzài yìxiē wèntí.', vn:'Kế hoạch này vẫn còn một vài vấn đề.'},
      {zh:'每个人的体重每天都会存在差异。', py:'Měi ge rén de tǐzhòng měi tiān dōu huì cúnzài chāyì.', vn:'Cân nặng của mỗi người mỗi ngày đều có chênh lệch.'}
    ],
    colloFull: [
      {zh:'存在问题', py:'cúnzài wèntí', vn:'có vấn đề'},
      {zh:'存在差异', py:'cúnzài chāyì', vn:'có sự khác biệt'},
      {zh:'存在着不同', py:'cúnzàizhe bù tóng', vn:'có sự khác nhau'},
      {zh:'存在危险', py:'cúnzài wēixiǎn', vn:'tiềm ẩn nguy hiểm'},
      {zh:'仍然存在', py:'réngrán cúnzài', vn:'vẫn tồn tại'}
    ],
    patterns: [{s:'A 和 B 在……上存在(着) + 差异 / 不同', m:'A và B khác nhau về mặt …'}, {s:'N + 还存在 + 问题', m:'… vẫn còn vấn đề'}],
    checkList: [
      {promptLang:'vi', prompt:'Tuy bài văn của em đã tốt hơn nhiều, nhưng vẫn còn một vài vấn đề.', answer:'虽然你的作文好多了，但是还存在一些问题。', answerPy:'Suīrán nǐ de zuòwén hǎo duō le, dànshì hái cúnzài yìxiē wèntí.', note:'还存在 + 问题 — văn viết của 还有问题.', pair:'虽然……但是……'},
      {promptLang:'vi', prompt:'Những vấn đề đang tồn tại đã bị mọi người phát hiện rồi.', answer:'存在的问题已经被大家发现了。', answerPy:'Cúnzài de wèntí yǐjīng bèi dàjiā fāxiàn le.', note:'存在的 + N làm chủ ngữ của câu bị động.', pair:'被'}
    ]
  },
  {
    n: 25, zh: '明显', py: 'míngxiǎn', pos: 'Tính từ', vn: 'rõ ràng, rõ rệt, dễ thấy', hv: 'minh hiển', em: '👀', lesson: 1,
    explain: ['Dễ nhìn thấy, dễ nhận ra (sự thay đổi, khác biệt, hiệu quả).'],
    usage: '明显的 + N (明显的变化); 明显 + V/Adj (明显提高, 明显减轻, 明显不同); 很明显，…… (rõ ràng là…).',
    collo: ['明显的变化', '明显提高', '明显不同', '很明显'],
    ex_zh: '调查结果显示，市民对电子阅读的兴趣明显提高了。', ex_py: 'Diàochá jiéguǒ xiǎnshì, shìmín duì diànzǐ yuèdú de xìngqù míngxiǎn tígāo le.', ex_vn: 'Kết quả điều tra cho thấy hứng thú của người dân với đọc sách điện tử đã tăng rõ rệt.',
    exList: [
      {zh:'他们在工作日的体重并无明显减轻。', py:'Tāmen zài gōngzuòrì de tǐzhòng bìng wú míngxiǎn jiǎnqīng.', vn:'Cân nặng của họ trong những ngày làm việc không hề giảm rõ rệt.'},
      {zh:'调查结果显示，市民对电子阅读的兴趣明显提高了。', py:'Diàochá jiéguǒ xiǎnshì, shìmín duì diànzǐ yuèdú de xìngqù míngxiǎn tígāo le.', vn:'Kết quả điều tra cho thấy hứng thú của người dân với đọc sách điện tử đã tăng rõ rệt.'},
      {zh:'很明显，他今天不高兴。', py:'Hěn míngxiǎn, tā jīntiān bù gāoxìng.', vn:'Rõ ràng là hôm nay anh ấy không vui.'}
    ],
    colloFull: [
      {zh:'明显的变化', py:'míngxiǎn de biànhuà', vn:'thay đổi rõ rệt'},
      {zh:'明显提高', py:'míngxiǎn tígāo', vn:'nâng cao rõ rệt'},
      {zh:'明显不同', py:'míngxiǎn bù tóng', vn:'khác nhau rõ rệt'},
      {zh:'很明显', py:'hěn míngxiǎn', vn:'rõ ràng là'},
      {zh:'效果明显', py:'xiàoguǒ míngxiǎn', vn:'hiệu quả rõ rệt'}
    ],
    patterns: [{s:'明显 + V / Adj (提高 / 减轻 / 不同)', m:'… rõ rệt'}, {s:'很明显，……', m:'Rõ ràng là …'}],
    checkList: [
      {promptLang:'vi', prompt:'Tiếng Trung của cậu ấy ngày càng tốt, tiến bộ rất rõ rệt.', answer:'他的汉语越来越好，进步很明显。', answerPy:'Tā de Hànyǔ yuè lái yuè hǎo, jìnbù hěn míngxiǎn.', note:'明显 làm vị ngữ: 进步很明显.', pair:'越来越'},
      {promptLang:'vi', prompt:'Tuy ăn kiêng một tuần, nhưng cân nặng không giảm rõ rệt.', answer:'虽然节食了一个星期，但是体重没有明显减轻。', answerPy:'Suīrán jiéshíle yí ge xīngqī, dànshì tǐzhòng méiyǒu míngxiǎn jiǎnqīng.', note:'明显 đứng trước động từ, không cần 的.', pair:'虽然……但是……'}
    ]
  },
  {
    n: 26, zh: '补偿', py: 'bǔcháng', pos: 'Động từ', vn: 'đền bù, bù đắp', hv: 'bổ thường', em: '🩹', lesson: 1,
    explain: ['Bù lại phần đã mất, đã thiếu (về vật chất, tinh thần hoặc cơ thể).'],
    usage: '补偿 + người / 损失; 给 + người + 补偿; làm danh từ: 补偿模式, 得到补偿, 作为补偿.',
    collo: ['补偿损失', '补偿模式', '得到补偿', '作为补偿'],
    ex_zh: '平时工作太忙，周末我想好好补偿一下家人。', ex_py: 'Píngshí gōngzuò tài máng, zhōumò wǒ xiǎng hǎohǎo bǔcháng yíxià jiārén.', ex_vn: 'Ngày thường bận quá, cuối tuần tôi muốn bù đắp cho gia đình.',
    exList: [
      {zh:'体重减轻者会表现出较强的补偿模式。', py:'Tǐzhòng jiǎnqīngzhě huì biǎoxiàn chū jiào qiáng de bǔcháng móshì.', vn:'Người giảm cân thể hiện một kiểu bù trừ khá mạnh.'},
      {zh:'公司应该补偿顾客的损失。', py:'Gōngsī yīnggāi bǔcháng gùkè de sǔnshī.', vn:'Công ty nên đền bù thiệt hại cho khách hàng.'},
      {zh:'平时工作太忙，周末我想好好补偿一下家人。', py:'Píngshí gōngzuò tài máng, zhōumò wǒ xiǎng hǎohǎo bǔcháng yíxià jiārén.', vn:'Ngày thường bận quá, cuối tuần tôi muốn bù đắp cho gia đình.'}
    ],
    colloFull: [
      {zh:'补偿损失', py:'bǔcháng sǔnshī', vn:'bồi thường thiệt hại'},
      {zh:'补偿模式', py:'bǔcháng móshì', vn:'kiểu bù trừ'},
      {zh:'得到补偿', py:'dédào bǔcháng', vn:'được đền bù'},
      {zh:'作为补偿', py:'zuòwéi bǔcháng', vn:'để bù lại'},
      {zh:'补偿家人', py:'bǔcháng jiārén', vn:'bù đắp cho gia đình'}
    ],
    patterns: [{s:'补偿 + 损失 / người', m:'Đền bù thiệt hại / bù đắp cho ai'}, {s:'……，作为补偿', m:'…, coi như để bù lại'}],
    checkList: [
      {promptLang:'vi', prompt:'Đồ bị làm hỏng rồi, công ty đã đền bù cho khách hàng.', answer:'东西被弄坏了，公司给了顾客补偿。', answerPy:'Dōngxi bèi nònghuài le, gōngsī gěile gùkè bǔcháng.', note:'给 + người + 补偿: 补偿 làm danh từ.', pair:'被'},
      {promptLang:'vi', prompt:'Tuy tôi đến muộn, nhưng tôi mời bạn ăn cơm để bù lại.', answer:'虽然我迟到了，但是我请你吃饭作为补偿。', answerPy:'Suīrán wǒ chídào le, dànshì wǒ qǐng nǐ chīfàn zuòwéi bǔcháng.', note:'作为补偿: coi như bù lại.', pair:'虽然……但是……'}
    ]
  },
  {
    n: 27, zh: '立即', py: 'lìjí', pos: 'Phó từ', vn: 'lập tức, ngay', hv: 'lập tức', em: '⚡', lesson: 1,
    explain: ['Ngay lập tức, không chậm trễ — văn viết, trang trọng hơn 马上.'],
    usage: 'Sub + 立即 + V; hay dùng trong văn bản, thông báo, mệnh lệnh. Gần nghĩa 立刻 (bài 2). Không nói việc SẮP xảy ra (马上就要……了).',
    collo: ['立即下降', '立即出发', '立即采取措施', '立即停止'],
    ex_zh: '接到通知后，请大家立即出发。', ex_py: 'Jiēdào tōngzhī hòu, qǐng dàjiā lìjí chūfā.', ex_vn: 'Sau khi nhận được thông báo, mời mọi người lập tức xuất phát.',
    exList: [
      {zh:'在周末之后体重立即下降。', py:'Zài zhōumò zhīhòu tǐzhòng lìjí xiàjiàng.', vn:'Sau cuối tuần cân nặng lập tức giảm xuống.'},
      {zh:'接到通知后，请大家立即出发。', py:'Jiēdào tōngzhī hòu, qǐng dàjiā lìjí chūfā.', vn:'Sau khi nhận được thông báo, mời mọi người lập tức xuất phát.'},
      {zh:'发现问题要立即采取措施。', py:'Fāxiàn wèntí yào lìjí cǎiqǔ cuòshī.', vn:'Phát hiện vấn đề thì phải lập tức áp dụng biện pháp.'}
    ],
    colloFull: [
      {zh:'立即下降', py:'lìjí xiàjiàng', vn:'lập tức giảm'},
      {zh:'立即出发', py:'lìjí chūfā', vn:'lập tức xuất phát'},
      {zh:'立即采取措施', py:'lìjí cǎiqǔ cuòshī', vn:'lập tức áp dụng biện pháp'},
      {zh:'立即停止', py:'lìjí tíngzhǐ', vn:'dừng ngay'},
      {zh:'立即回复', py:'lìjí huífù', vn:'trả lời ngay'}
    ],
    patterns: [{s:'Sub + 立即 + V', m:'… lập tức làm gì'}, {s:'一……，就立即……', m:'Vừa … là lập tức …'}],
    checkList: [
      {promptLang:'vi', prompt:'Vừa nhận được tin, anh ấy lập tức đến bệnh viện.', answer:'他一接到消息，就立即去了医院。', answerPy:'Tā yì jiēdào xiāoxi, jiù lìjí qùle yīyuàn.', note:'就 + 立即: hai việc nối liền nhau.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Bác sĩ bảo anh ấy bỏ thuốc lá ngay.', answer:'医生让他立即把烟戒了。', answerPy:'Yīshēng ràng tā lìjí bǎ yān jiè le.', note:'立即 đứng trước cụm 把.', pair:'把'}
    ]
  },
  {
    n: 28, zh: '趋势', py: 'qūshì', pos: 'Danh từ', vn: 'xu hướng, chiều hướng', hv: 'xu thế', em: '📉', lesson: 1,
    explain: ['Hướng phát triển, thay đổi của sự việc.'],
    usage: '上升的趋势 / 下降的趋势 / 发展趋势; 有……的趋势; 阻止这一趋势.',
    collo: ['上升趋势', '下降趋势', '发展趋势', '健康的趋势'],
    ex_zh: '近年来，网上购物的人有增加的趋势。', ex_py: 'Jìnnián lái, wǎngshang gòuwù de rén yǒu zēngjiā de qūshì.', ex_vn: 'Những năm gần đây, số người mua sắm trên mạng có xu hướng tăng.',
    exList: [
      {zh:'这一下降趋势直至周五结束。', py:'Zhè yī xiàjiàng qūshì zhízhì zhōuwǔ jiéshù.', vn:'Xu hướng giảm này kéo dài đến tận thứ Sáu.'},
      {zh:'应及时采取措施阻止这一上升趋势。', py:'Yīng jíshí cǎiqǔ cuòshī zǔzhǐ zhè yī shàngshēng qūshì.', vn:'Nên kịp thời áp dụng biện pháp ngăn chặn xu hướng tăng này.'},
      {zh:'近年来，网上购物的人有增加的趋势。', py:'Jìnnián lái, wǎngshang gòuwù de rén yǒu zēngjiā de qūshì.', vn:'Những năm gần đây, số người mua sắm trên mạng có xu hướng tăng.'}
    ],
    colloFull: [
      {zh:'上升趋势', py:'shàngshēng qūshì', vn:'xu hướng tăng'},
      {zh:'下降趋势', py:'xiàjiàng qūshì', vn:'xu hướng giảm'},
      {zh:'发展趋势', py:'fāzhǎn qūshì', vn:'xu hướng phát triển'},
      {zh:'健康的趋势', py:'jiànkāng de qūshì', vn:'xu hướng lành mạnh'},
      {zh:'有……的趋势', py:'yǒu……de qūshì', vn:'có xu hướng …'}
    ],
    patterns: [{s:'N + 有 + 上升 / 下降的趋势', m:'… có xu hướng tăng / giảm'}, {s:'阻止 + 这一趋势', m:'Ngăn chặn xu hướng này'}],
    checkList: [
      {promptLang:'vi', prompt:'Người học tiếng Trung ngày càng nhiều, đây là một xu hướng tốt.', answer:'学汉语的人越来越多，这是一个好的趋势。', answerPy:'Xué Hànyǔ de rén yuè lái yuè duō, zhè shì yí ge hǎo de qūshì.', note:'好的 / 健康的 + 趋势.', pair:'越来越'},
      {promptLang:'vi', prompt:'Xu hướng tăng này đã bị các chuyên gia phát hiện từ sớm.', answer:'这一上升趋势早就被专家发现了。', answerPy:'Zhè yī shàngshēng qūshì zǎo jiù bèi zhuānjiā fāxiàn le.', note:'这一 + 趋势 (văn viết): 一 đọc yī.', pair:'被'}
    ]
  },
  {
    n: 29, zh: '差异', py: 'chāyì', pos: 'Danh từ', vn: 'sự khác biệt, chênh lệch', hv: 'sai dị', em: '🔀', lesson: 1,
    explain: ['Chỗ khác nhau giữa các sự vật — văn viết, trang trọng hơn 区别, 不同.'],
    usage: '存在差异; A 和 B 之间的差异; 文化差异; 差异很大. Chữ 差 ở đây đọc chā.',
    collo: ['存在差异', '文化差异', '差异很大', '明显的差异'],
    ex_zh: '南方和北方的饮食习惯差异很大。', ex_py: 'Nánfāng hé běifāng de yǐnshí xíguàn chāyì hěn dà.', ex_vn: 'Thói quen ăn uống của miền Nam và miền Bắc khác nhau rất nhiều.',
    exList: [
      {zh:'体重增加者每天的体重都会存在差异。', py:'Tǐzhòng zēngjiāzhě měi tiān de tǐzhòng dōu huì cúnzài chāyì.', vn:'Cân nặng mỗi ngày của người tăng cân đều có chênh lệch.'},
      {zh:'南方和北方的饮食习惯差异很大。', py:'Nánfāng hé běifāng de yǐnshí xíguàn chāyì hěn dà.', vn:'Thói quen ăn uống của miền Nam và miền Bắc khác nhau rất nhiều.'},
      {zh:'到了国外，他才感受到了文化差异。', py:'Dàole guówài, tā cái gǎnshòu dàole wénhuà chāyì.', vn:'Ra nước ngoài rồi, anh ấy mới cảm nhận được sự khác biệt văn hoá.'}
    ],
    colloFull: [
      {zh:'存在差异', py:'cúnzài chāyì', vn:'có sự khác biệt'},
      {zh:'文化差异', py:'wénhuà chāyì', vn:'khác biệt văn hoá'},
      {zh:'差异很大', py:'chāyì hěn dà', vn:'khác nhau nhiều'},
      {zh:'明显的差异', py:'míngxiǎn de chāyì', vn:'khác biệt rõ rệt'},
      {zh:'缩小差异', py:'suōxiǎo chāyì', vn:'thu hẹp khác biệt'}
    ],
    patterns: [{s:'A 和 B + (之间) + 存在差异', m:'A và B có sự khác biệt'}, {s:'N + 差异很大', m:'… khác nhau rất nhiều'}],
    checkList: [
      {promptLang:'vi', prompt:'Tuy hai người là anh em sinh đôi, nhưng tính cách khác nhau rất nhiều.', answer:'虽然他们是双胞胎，但是性格差异很大。', answerPy:'Suīrán tāmen shì shuāngbāotāi, dànshì xìnggé chāyì hěn dà.', note:'N + 差异很大.', pair:'虽然……但是……'},
      {promptLang:'vi', prompt:'Sự khác biệt giữa thành phố và nông thôn ngày càng nhỏ.', answer:'城市和农村的差异越来越小。', answerPy:'Chéngshì hé nóngcūn de chāyì yuè lái yuè xiǎo.', note:'差异 dùng 大 / 小 để nói mức độ; 农村 là từ bài 2.', pair:'越来越'}
    ]
  },
  {
    n: 30, zh: '联合', py: 'liánhé', pos: 'Động từ / Tính từ', vn: 'liên kết, hợp sức; chung, liên hợp', hv: 'liên hợp', em: '🔗', lesson: 1,
    explain: ['Động từ: nhiều bên hợp sức lại làm một việc.', 'Tính từ: chung, do nhiều bên cùng làm (联合研究, 联合国).'],
    usage: 'A + 联合 + B + V; 联合起来; 联合举办. 联合国 = Liên Hợp Quốc.',
    collo: ['联合多所学校', '联合起来', '联合研究', '联合国'],
    ex_zh: '两个班联合起来办了一场晚会。', ex_py: 'Liǎng ge bān liánhé qǐlai bànle yì chǎng wǎnhuì.', ex_vn: 'Hai lớp hợp sức tổ chức một buổi dạ hội.',
    exList: [
      {zh:'这项研究是多所医学院校联合进行的。', py:'Zhè xiàng yánjiū shì duō suǒ yīxué yuànxiào liánhé jìnxíng de.', vn:'Nghiên cứu này do nhiều trường y liên kết thực hiện.'},
      {zh:'两个班联合起来办了一场晚会。', py:'Liǎng ge bān liánhé qǐlai bànle yì chǎng wǎnhuì.', vn:'Hai lớp hợp sức tổ chức một buổi dạ hội.'},
      {zh:'中国和越南的科学家进行了联合研究。', py:'Zhōngguó hé Yuènán de kēxuéjiā jìnxíngle liánhé yánjiū.', vn:'Các nhà khoa học Trung Quốc và Việt Nam đã tiến hành nghiên cứu chung.'}
    ],
    colloFull: [
      {zh:'联合多所学校', py:'liánhé duō suǒ xuéxiào', vn:'liên kết nhiều trường'},
      {zh:'联合起来', py:'liánhé qǐlai', vn:'hợp sức lại'},
      {zh:'联合研究', py:'liánhé yánjiū', vn:'nghiên cứu chung'},
      {zh:'联合国', py:'Liánhéguó', vn:'Liên Hợp Quốc'},
      {zh:'联合举办', py:'liánhé jǔbàn', vn:'cùng tổ chức'}
    ],
    patterns: [{s:'A + 联合 + B + V', m:'A liên kết với B làm …'}, {s:'N (nhiều bên) + 联合起来', m:'… hợp sức lại'}],
    checkList: [
      {promptLang:'vi', prompt:'Hoạt động lần này là do ba trường liên kết tổ chức.', answer:'这次活动是三所学校联合举办的。', answerPy:'Zhè cì huódòng shì sān suǒ xuéxiào liánhé jǔbàn de.', note:'联合 + 举办: cùng tổ chức; lượng từ 所 cho trường học.', pair:'是……的'},
      {promptLang:'vi', prompt:'Chỉ cần mọi người hợp sức lại, sẽ không có khó khăn nào không giải quyết được.', answer:'只要大家联合起来，就没有解决不了的困难。', answerPy:'Zhǐyào dàjiā liánhé qǐlai, jiù méiyǒu jiějué bu liǎo de kùnnan.', note:'联合起来: hợp sức lại.', pair:'只要……就……'}
    ]
  },
  {
    n: 31, zh: '个别', py: 'gèbié', pos: 'Tính từ', vn: 'riêng lẻ, riêng từng người; cá biệt, số rất ít', hv: 'cá biệt', em: '☝️', lesson: 1,
    explain: ['Đơn lẻ, riêng từng người / từng cái (个别谈话, 个别训练).', 'Rất ít, số ít (个别人, 个别地区).'],
    usage: '个别 + N (thường không cần 的): 个别人, 个别地区, 个别现象; 除了个别……以外，……都…….',
    collo: ['个别人', '个别地区', '个别谈话', '个别现象'],
    ex_zh: '天气预报说今晚有小到中雨，个别地区可能有大雨。', ex_py: 'Tiānqì yùbào shuō jīnwǎn yǒu xiǎo dào zhōng yǔ, gèbié dìqū kěnéng yǒu dà yǔ.', ex_vn: 'Dự báo thời tiết nói tối nay có mưa nhỏ đến vừa, một vài khu vực có thể mưa to.',
    exList: [
      {zh:'除了个别人以外，多数人体重的增加会从周六开始。', py:'Chúle gèbié rén yǐwài, duōshù rén tǐzhòng de zēngjiā huì cóng zhōuliù kāishǐ.', vn:'Ngoài một vài người cá biệt, cân nặng của đa số người bắt đầu tăng từ thứ Bảy.'},
      {zh:'天气预报说今晚有小到中雨，个别地区可能有大雨。', py:'Tiānqì yùbào shuō jīnwǎn yǒu xiǎo dào zhōng yǔ, gèbié dìqū kěnéng yǒu dà yǔ.', vn:'Dự báo thời tiết nói tối nay có mưa nhỏ đến vừa, một vài khu vực có thể mưa to.'},
      {zh:'他经常采取个别谈话的方式了解情况。', py:'Tā jīngcháng cǎiqǔ gèbié tánhuà de fāngshì liǎojiě qíngkuàng.', vn:'Anh ấy thường dùng cách nói chuyện riêng để nắm tình hình.'}
    ],
    colloFull: [
      {zh:'个别人', py:'gèbié rén', vn:'một vài người'},
      {zh:'个别地区', py:'gèbié dìqū', vn:'một số ít khu vực'},
      {zh:'个别谈话', py:'gèbié tánhuà', vn:'nói chuyện riêng'},
      {zh:'个别现象', py:'gèbié xiànxiàng', vn:'hiện tượng cá biệt'},
      {zh:'个别训练', py:'gèbié xùnliàn', vn:'luyện tập riêng'}
    ],
    patterns: [{s:'除了个别 + N + 以外，……都……', m:'Ngoài một vài … ra, … đều …'}, {s:'个别 + N', m:'… riêng lẻ / cá biệt'}],
    checkList: [
      {promptLang:'vi', prompt:'Ngoài vài bạn ra, cả lớp đều đến rồi.', answer:'除了个别同学以外，全班都来了。', answerPy:'Chúle gèbié tóngxué yǐwài, quán bān dōu lái le.', note:'个别 + N đứng ngay sau 除了.', pair:'除了……以外'},
      {promptLang:'vi', prompt:'Chữ Hán trong bài, ngoài vài chữ ra, tôi đều đã học qua.', answer:'课文里的汉字，除了个别字以外，我都学过。', answerPy:'Kèwén li de Hànzì, chúle gèbié zì yǐwài, wǒ dōu xuéguo.', note:'个别字: một vài chữ — không thêm 的.', pair:'V + 过'}
    ]
  },
  {
    n: 32, zh: '表明', py: 'biǎomíng', pos: 'Động từ', vn: 'cho thấy, chứng tỏ; bày tỏ rõ', hv: 'biểu minh', em: '📢', lesson: 1,
    explain: ['Cho thấy rõ (kết quả, số liệu cho thấy điều gì).', 'Bày tỏ rõ ràng (thái độ, lập trường).'],
    usage: '研究 / 调查 / 事实 + 表明 + mệnh đề; 表明 + 态度 / 身份.',
    collo: ['研究表明', '事实表明', '表明态度', '充分表明'],
    ex_zh: '研究表明，每天运动半小时对身体很有好处。', ex_py: 'Yánjiū biǎomíng, měi tiān yùndòng bàn xiǎoshí duì shēntǐ hěn yǒu hǎochù.', ex_vn: 'Nghiên cứu cho thấy mỗi ngày vận động nửa tiếng rất có lợi cho sức khoẻ.',
    exList: [
      {zh:'它表明人们的体重变化在一周内会显示出一种明显的规律。', py:'Tā biǎomíng rénmen de tǐzhòng biànhuà zài yì zhōu nèi huì xiǎnshì chū yì zhǒng míngxiǎn de guīlǜ.', vn:'Điều đó cho thấy sự thay đổi cân nặng trong một tuần có một quy luật rõ rệt.'},
      {zh:'研究表明，每天运动半小时对身体很有好处。', py:'Yánjiū biǎomíng, měi tiān yùndòng bàn xiǎoshí duì shēntǐ hěn yǒu hǎochù.', vn:'Nghiên cứu cho thấy mỗi ngày vận động nửa tiếng rất có lợi cho sức khoẻ.'},
      {zh:'开会时，他主动表明了自己的态度。', py:'Kāihuì shí, tā zhǔdòng biǎomíngle zìjǐ de tàidu.', vn:'Trong cuộc họp, anh ấy chủ động bày tỏ thái độ của mình.'}
    ],
    colloFull: [
      {zh:'研究表明', py:'yánjiū biǎomíng', vn:'nghiên cứu cho thấy'},
      {zh:'事实表明', py:'shìshí biǎomíng', vn:'thực tế chứng minh'},
      {zh:'表明态度', py:'biǎomíng tàidu', vn:'bày tỏ thái độ'},
      {zh:'充分表明', py:'chōngfèn biǎomíng', vn:'cho thấy đầy đủ'},
      {zh:'主动表明', py:'zhǔdòng biǎomíng', vn:'chủ động bày tỏ'}
    ],
    patterns: [{s:'研究 / 调查 + 表明，……', m:'Nghiên cứu / điều tra cho thấy …'}, {s:'表明 + 态度 / 身份', m:'Bày tỏ thái độ / cho biết thân phận'}],
    checkList: [
      {promptLang:'vi', prompt:'Nghiên cứu cho thấy người ngủ càng ít thì càng dễ béo.', answer:'研究表明，睡得越少的人越容易胖。', answerPy:'Yánjiū biǎomíng, shuì de yuè shǎo de rén yuè róngyì pàng.', note:'研究表明 + cả một mệnh đề phía sau.', pair:'越……越……'},
      {promptLang:'vi', prompt:'Anh ấy chưa bao giờ bày tỏ rõ thái độ của mình.', answer:'他从来没表明过自己的态度。', answerPy:'Tā cónglái méi biǎomíngguo zìjǐ de tàidu.', note:'表明 + 态度: bày tỏ thái độ.', pair:'从来没……过'}
    ]
  },
  {
    n: 33, zh: '临时', py: 'línshí', pos: 'Phó từ / Tính từ', vn: 'đến lúc (việc xảy ra) mới…; tạm thời, ngắn hạn', hv: 'lâm thời', em: '⏱️', lesson: 1,
    explain: ['Phó từ: đến lúc sự việc sắp xảy ra (mới quyết định, mới làm) — 临时决定, 临时通知.', 'Tính từ thuộc tính: tạm thời, ngắn hạn, không chính thức — 临时工作, 临时变化.'],
    usage: '临时 + V (临时决定 / 改变 / 取消); 临时(的) + N (临时工作, 临时的家). Không nói 很临时. Phân biệt với 暂时 ở phần 词语辨析.',
    collo: ['临时决定', '临时工作', '临时变化', '临时通知'],
    ex_zh: '早到了30分钟，所以我临时决定去旁边的书店看看。', ex_py: 'Zǎo dàole sānshí fēnzhōng, suǒyǐ wǒ línshí juédìng qù pángbiān de shūdiàn kànkan.', ex_vn: 'Đến sớm 30 phút nên tôi quyết định luôn vào hiệu sách bên cạnh xem.',
    exList: [
      {zh:'工作日和周末体重的临时变化应该被视为正常现象。', py:'Gōngzuòrì hé zhōumò tǐzhòng de línshí biànhuà yīnggāi bèi shìwéi zhèngcháng xiànxiàng.', vn:'Những thay đổi tạm thời của cân nặng giữa ngày làm việc và cuối tuần nên được coi là hiện tượng bình thường.'},
      {zh:'早到了30分钟，所以我临时决定去旁边的书店看看。', py:'Zǎo dàole sānshí fēnzhōng, suǒyǐ wǒ línshí juédìng qù pángbiān de shūdiàn kànkan.', vn:'Đến sớm 30 phút nên tôi quyết định luôn vào hiệu sách bên cạnh xem.'},
      {zh:'暑假我在一家咖啡店找了份临时工作。', py:'Shǔjià wǒ zài yì jiā kāfēidiàn zhǎole fèn línshí gōngzuò.', vn:'Nghỉ hè tôi tìm được một việc làm thời vụ ở quán cà phê.'}
    ],
    colloFull: [
      {zh:'临时决定', py:'línshí juédìng', vn:'quyết định vào phút chót'},
      {zh:'临时工作', py:'línshí gōngzuò', vn:'việc làm tạm thời'},
      {zh:'临时变化', py:'línshí biànhuà', vn:'thay đổi tạm thời'},
      {zh:'临时通知', py:'línshí tōngzhī', vn:'thông báo đột xuất'},
      {zh:'临时的家', py:'línshí de jiā', vn:'ngôi nhà tạm'}
    ],
    patterns: [{s:'临时 + 决定 / 改变 / 通知 + ……', m:'Đến lúc đó mới (quyết định / thay đổi / báo)'}, {s:'临时(的) + N', m:'… tạm thời, ngắn hạn'}],
    checkList: [
      {promptLang:'vi', prompt:'Cuộc họp bị huỷ đột xuất rồi.', answer:'会议被临时取消了。', answerPy:'Huìyì bèi línshí qǔxiāo le.', note:'临时 đứng trước động từ: đến lúc đó mới huỷ.', pair:'被'},
      {promptLang:'vi', prompt:'Quyết định này là anh ấy đưa ra vào phút chót.', answer:'这个决定是他临时做出的。', answerPy:'Zhège juédìng shì tā línshí zuòchū de.', note:'临时 + V: đến lúc sắp xảy ra mới làm.', pair:'是……的'}
    ]
  },
  {
    n: 34, zh: '现象', py: 'xiànxiàng', pos: 'Danh từ', vn: 'hiện tượng', hv: 'hiện tượng', em: '🌀', lesson: 1,
    explain: ['Biểu hiện bên ngoài của sự việc mà người ta nhìn thấy được.'],
    usage: '正常现象, 自然现象, 表面现象, 个别现象, 不良现象, 怪现象; 被视为……现象.',
    collo: ['正常现象', '自然现象', '表面现象', '个别现象', '不良现象'],
    ex_zh: '下雨、打雷都是自然现象。', ex_py: 'Xià yǔ, dǎléi dōu shì zìrán xiànxiàng.', ex_vn: 'Mưa, sấm sét đều là hiện tượng tự nhiên.',
    exList: [
      {zh:'周末体重增加应该被视为正常现象。', py:'Zhōumò tǐzhòng zēngjiā yīnggāi bèi shìwéi zhèngcháng xiànxiàng.', vn:'Cân nặng tăng vào cuối tuần nên được coi là hiện tượng bình thường.'},
      {zh:'下雨、打雷都是自然现象。', py:'Xià yǔ, dǎléi dōu shì zìrán xiànxiàng.', vn:'Mưa, sấm sét đều là hiện tượng tự nhiên.'},
      {zh:'我们不能只看表面现象。', py:'Wǒmen bù néng zhǐ kàn biǎomiàn xiànxiàng.', vn:'Chúng ta không thể chỉ nhìn hiện tượng bề ngoài.'}
    ],
    colloFull: [
      {zh:'正常现象', py:'zhèngcháng xiànxiàng', vn:'hiện tượng bình thường'},
      {zh:'自然现象', py:'zìrán xiànxiàng', vn:'hiện tượng tự nhiên'},
      {zh:'表面现象', py:'biǎomiàn xiànxiàng', vn:'hiện tượng bề ngoài'},
      {zh:'个别现象', py:'gèbié xiànxiàng', vn:'hiện tượng cá biệt'},
      {zh:'不良现象', py:'bùliáng xiànxiàng', vn:'hiện tượng xấu'}
    ],
    patterns: [{s:'N + 是 + 正常 / 自然 + 现象', m:'… là hiện tượng bình thường / tự nhiên'}, {s:'被视为 + ……现象', m:'Được coi là hiện tượng …'}],
    checkList: [
      {promptLang:'vi', prompt:'Tuy có vài bạn đi muộn, nhưng đó chỉ là hiện tượng cá biệt.', answer:'虽然有几个同学迟到，但是这只是个别现象。', answerPy:'Suīrán yǒu jǐ ge tóngxué chídào, dànshì zhè zhǐ shì gèbié xiànxiàng.', note:'个别现象: hiện tượng cá biệt (bảng 词语搭配).', pair:'虽然……但是……'},
      {promptLang:'vi', prompt:'Hiện tượng này là do các nhà khoa học phát hiện ra lần đầu vào năm 1998.', answer:'这种现象是科学家1998年第一次发现的。', answerPy:'Zhè zhǒng xiànxiàng shì kēxuéjiā yī jiǔ jiǔ bā nián dì-yī cì fāxiàn de.', note:'这种 + 现象; lượng từ 种.', pair:'是……的'}
    ]
  },
  {
    n: 35, zh: '非', py: 'fēi', pos: 'Động từ / Tiền tố / Phó từ', vn: 'không phải; phi-, không thuộc; nhất định phải', hv: 'phi', em: '🚫', lesson: 1,
    explain: ['Tiền tố: đặt trước danh từ, chỉ “không thuộc phạm vi này” (非工作人员, 非语言).', 'Động từ (văn viết) = 不是: 而非, 并非.', 'Phó từ: khăng khăng làm; 非……不可 = nhất định phải.'],
    usage: 'A，而非 B; 并非 + …; 非 + N; 非(要) + V + 不可.',
    collo: ['非工作人员', '而非', '并非', '非……不可'],
    ex_zh: '门口的牌子上写着：非工作人员请勿入内。', ex_py: 'Ménkǒu de páizi shang xiězhe: fēi gōngzuò rényuán qǐng wù rù nèi.', ex_vn: 'Tấm biển ở cửa ghi: Người không phận sự miễn vào.',
    exList: [
      {zh:'门口的牌子上写着：非工作人员请勿入内。', py:'Ménkǒu de páizi shang xiězhe: fēi gōngzuò rényuán qǐng wù rù nèi.', vn:'Tấm biển ở cửa ghi: Người không phận sự miễn vào.'},
      {zh:'成功有时候并非想象中那么难。', py:'Chénggōng yǒu shíhou bìngfēi xiǎngxiàng zhōng nàme nán.', vn:'Thành công đôi khi hoàn toàn không khó như tưởng tượng.'},
      {zh:'补办学生证的事非你本人去不可。', py:'Bǔbàn xuéshengzhèng de shì fēi nǐ běnrén qù bùkě.', vn:'Việc làm lại thẻ học sinh nhất định phải chính em đi.'}
    ],
    colloFull: [
      {zh:'非工作人员', py:'fēi gōngzuò rényuán', vn:'người không phận sự'},
      {zh:'而非', py:'ér fēi', vn:'chứ không phải'},
      {zh:'并非', py:'bìngfēi', vn:'hoàn toàn không phải'},
      {zh:'非……不可', py:'fēi……bùkě', vn:'nhất định phải'},
      {zh:'非专业人员', py:'fēi zhuānyè rényuán', vn:'người không chuyên'}
    ],
    patterns: [{s:'A，而非 B', m:'Là A chứ không phải B'}, {s:'非 + V + 不可', m:'Nhất định phải …'}],
    checkList: [
      {promptLang:'vi', prompt:'Mẹ nhất định bắt tôi ăn hết bát cơm này.', answer:'妈妈非让我把这碗饭吃完不可。', answerPy:'Māma fēi ràng wǒ bǎ zhè wǎn fàn chīwán bùkě.', note:'非 + (让 + người + V) + 不可.', pair:'把'},
      {promptLang:'vi', prompt:'Cậu ấy nhất định đòi đi, ngay cả bố mẹ cũng không cản được.', answer:'他非要去，连父母都拦不住。', answerPy:'Tā fēi yào qù, lián fùmǔ dōu lán bu zhù.', note:'非要 + V: khăng khăng đòi làm.', pair:'连……都……'}
    ]
  },
  {
    n: 36, zh: '就餐', py: 'jiùcān', pos: 'Động từ', vn: 'dùng bữa, đi ăn', hv: 'tựu xan', em: '🍴', lesson: 1,
    explain: ['Ăn cơm, dùng bữa — văn viết, trang trọng; hay gặp ở nhà hàng, thông báo.'],
    usage: 'Không mang tân ngữ: 在……就餐, 外出就餐, 就餐时间, 就餐环境. Nói chuyện hằng ngày dùng 吃饭.',
    collo: ['外出就餐', '就餐时间', '在餐厅就餐', '就餐环境'],
    ex_zh: '人们在周末会有更多的时间外出就餐。', ex_py: 'Rénmen zài zhōumò huì yǒu gèng duō de shíjiān wàichū jiùcān.', ex_vn: 'Vào cuối tuần người ta có nhiều thời gian ra ngoài ăn uống hơn.',
    exList: [
      {zh:'人们在周末会有更多的时间外出就餐。', py:'Rénmen zài zhōumò huì yǒu gèng duō de shíjiān wàichū jiùcān.', vn:'Vào cuối tuần người ta có nhiều thời gian ra ngoài ăn uống hơn.'},
      {zh:'学生的就餐时间是中午十二点。', py:'Xuésheng de jiùcān shíjiān shì zhōngwǔ shí\'èr diǎn.', vn:'Giờ ăn của học sinh là mười hai giờ trưa.'},
      {zh:'这家餐厅的就餐环境很不错。', py:'Zhè jiā cāntīng de jiùcān huánjìng hěn búcuò.', vn:'Không gian ăn uống của nhà hàng này rất được.'}
    ],
    colloFull: [
      {zh:'外出就餐', py:'wàichū jiùcān', vn:'ra ngoài ăn'},
      {zh:'就餐时间', py:'jiùcān shíjiān', vn:'giờ ăn'},
      {zh:'在餐厅就餐', py:'zài cāntīng jiùcān', vn:'dùng bữa ở nhà hàng'},
      {zh:'就餐环境', py:'jiùcān huánjìng', vn:'không gian ăn uống'},
      {zh:'就餐人数', py:'jiùcān rénshù', vn:'số người dùng bữa'}
    ],
    patterns: [{s:'在 + nơi chốn + 就餐', m:'Dùng bữa ở …'}, {s:'外出就餐', m:'Ra ngoài ăn (không ăn ở nhà)'}],
    checkList: [
      {promptLang:'vi', prompt:'Hễ đến cuối tuần là cả nhà tôi ra ngoài ăn.', answer:'一到周末，我们全家就外出就餐。', answerPy:'Yí dào zhōumò, wǒmen quánjiā jiù wàichū jiùcān.', note:'就餐 không mang tân ngữ.', pair:'一……就……'},
      {promptLang:'vi', prompt:'Hôm qua chúng tôi dùng bữa ở nhà hàng bên hồ.', answer:'我们昨天是在湖边的餐厅就餐的。', answerPy:'Wǒmen zuótiān shì zài húbiān de cāntīng jiùcān de.', note:'在 + nơi chốn + 就餐.', pair:'是……的'}
    ]
  },
  {
    n: 37, zh: '放纵', py: 'fàngzòng', pos: 'Động từ', vn: 'buông thả, không kiềm chế; nuông chiều', hv: 'phóng túng', em: '🍰', lesson: 1,
    explain: ['Không kiềm chế bản thân, muốn làm gì thì làm.', 'Để mặc, nuông chiều (放纵孩子).'],
    usage: '对 + N + 放纵 (对饮食放纵); 放纵自己; 放纵孩子. Mang sắc thái tiêu cực.',
    collo: ['放纵自己', '对饮食放纵', '放纵孩子', '稍微放纵'],
    ex_zh: '考完试以后，他放纵自己玩了一个星期游戏。', ex_py: 'Kǎowán shì yǐhòu, tā fàngzòng zìjǐ wánle yí ge xīngqī yóuxì.', ex_vn: 'Thi xong, cậu ấy buông thả bản thân chơi game cả tuần.',
    exList: [
      {zh:'周末对饮食稍微有些放纵影响不大。', py:'Zhōumò duì yǐnshí shāowēi yǒuxiē fàngzòng yǐngxiǎng bú dà.', vn:'Cuối tuần ăn uống hơi buông thả một chút thì ảnh hưởng không lớn.'},
      {zh:'考完试以后，他放纵自己玩了一个星期游戏。', py:'Kǎowán shì yǐhòu, tā fàngzòng zìjǐ wánle yí ge xīngqī yóuxì.', vn:'Thi xong, cậu ấy buông thả bản thân chơi game cả tuần.'},
      {zh:'父母不能太放纵孩子。', py:'Fùmǔ bù néng tài fàngzòng háizi.', vn:'Bố mẹ không nên quá nuông chiều con.'}
    ],
    colloFull: [
      {zh:'放纵自己', py:'fàngzòng zìjǐ', vn:'buông thả bản thân'},
      {zh:'对饮食放纵', py:'duì yǐnshí fàngzòng', vn:'ăn uống buông thả'},
      {zh:'放纵孩子', py:'fàngzòng háizi', vn:'nuông chiều con'},
      {zh:'稍微放纵', py:'shāowēi fàngzòng', vn:'buông thả một chút'},
      {zh:'放纵一下', py:'fàngzòng yíxià', vn:'xả hơi một chút'}
    ],
    patterns: [{s:'对 + N + (有些) 放纵', m:'Buông thả với …'}, {s:'放纵 + 自己 / 孩子', m:'Buông thả bản thân / nuông chiều con'}],
    checkList: [
      {promptLang:'vi', prompt:'Tuy cuối tuần có thể xả hơi một chút, nhưng đừng ăn quá nhiều.', answer:'虽然周末可以放纵一下，但是别吃得太多。', answerPy:'Suīrán zhōumò kěyǐ fàngzòng yíxià, dànshì bié chī de tài duō.', note:'放纵一下: buông thả một chút.', pair:'虽然……但是……'},
      {promptLang:'vi', prompt:'Chỉ cần buông thả bản thân một lần là rất khó dừng lại.', answer:'只要放纵自己一次，就很难停下来。', answerPy:'Zhǐyào fàngzòng zìjǐ yí cì, jiù hěn nán tíng xiàlai.', note:'放纵自己 + số lần.', pair:'只要……就……'}
    ]
  },
  {
    n: 38, zh: '苗条', py: 'miáotiáo', pos: 'Tính từ', vn: 'thon thả, mảnh mai', hv: 'miêu điều', em: '💃', lesson: 1,
    explain: ['(Dáng người, thường là phụ nữ) thon thả, mảnh mai, đẹp.'],
    usage: 'Tả dáng người: 身材苗条, 变苗条, 保持苗条. Không dùng cho đồ vật (cái cây mảnh dùng 细).',
    collo: ['身材苗条', '变苗条', '苗条的女孩', '保持苗条'],
    ex_zh: '她身材苗条，穿什么都好看。', ex_py: 'Tā shēncái miáotiáo, chuān shénme dōu hǎokàn.', ex_vn: 'Cô ấy dáng người thon thả, mặc gì cũng đẹp.',
    exList: [
      {zh:'想要变苗条的节食者应注意到这种变化规律。', py:'Xiǎng yào biàn miáotiáo de jiéshízhě yīng zhùyì dào zhè zhǒng biànhuà guīlǜ.', vn:'Những người ăn kiêng muốn có dáng thon nên chú ý đến quy luật thay đổi này.'},
      {zh:'她身材苗条，穿什么都好看。', py:'Tā shēncái miáotiáo, chuān shénme dōu hǎokàn.', vn:'Cô ấy dáng người thon thả, mặc gì cũng đẹp.'},
      {zh:'为了保持苗条，她每天晚上都去跑步。', py:'Wèile bǎochí miáotiáo, tā měi tiān wǎnshang dōu qù pǎobù.', vn:'Để giữ dáng thon, tối nào cô ấy cũng đi chạy bộ.'}
    ],
    colloFull: [
      {zh:'身材苗条', py:'shēncái miáotiáo', vn:'dáng người thon thả'},
      {zh:'变苗条', py:'biàn miáotiáo', vn:'trở nên thon thả'},
      {zh:'苗条的女孩', py:'miáotiáo de nǚhái', vn:'cô gái mảnh mai'},
      {zh:'保持苗条', py:'bǎochí miáotiáo', vn:'giữ dáng thon'},
      {zh:'越来越苗条', py:'yuè lái yuè miáotiáo', vn:'ngày càng thon'}
    ],
    patterns: [{s:'身材 + 苗条', m:'Dáng người thon thả'}, {s:'为了变苗条，……', m:'Để có dáng thon, …'}],
    checkList: [
      {promptLang:'vi', prompt:'Từ khi tập yoga, chị ấy ngày càng thon thả.', answer:'自从练瑜伽以后，她越来越苗条了。', answerPy:'Zìcóng liàn yújiā yǐhòu, tā yuè lái yuè miáotiáo le.', note:'越来越 + 苗条 + 了: thay đổi dần.', pair:'越来越'},
      {promptLang:'vi', prompt:'Để có dáng thon, cô ấy ngay cả bữa tối cũng không ăn.', answer:'为了变苗条，她连晚饭都不吃。', answerPy:'Wèile biàn miáotiáo, tā lián wǎnfàn dōu bù chī.', note:'变 + 苗条: trở nên thon thả.', pair:'连……都……'}
    ]
  },
  {
    n: 39, zh: '借口', py: 'jièkǒu', pos: 'Danh từ / Động từ', vn: 'cớ, lý do bịa; lấy cớ', hv: 'tá khẩu', em: '🙊', lesson: 1,
    explain: ['Danh từ: lý do đưa ra để che giấu lý do thật (找借口).', 'Động từ: lấy cớ (借口 + lý do, rồi làm gì).'],
    usage: '找借口 / 找个借口 / 以……为借口 / Sub + 借口 + lý do，V. Không nói 做借口.',
    collo: ['找借口', '一个借口', '以……为借口', '借口有事'],
    ex_zh: '他借口家里有事，提前离开了会场。', ex_py: 'Tā jièkǒu jiā li yǒu shì, tíqián líkāile huìchǎng.', ex_vn: 'Anh ấy lấy cớ nhà có việc, rời hội trường sớm.',
    exList: [
      {zh:'周末之后不要再找任何吃美食的借口。', py:'Zhōumò zhīhòu búyào zài zhǎo rènhé chī měishí de jièkǒu.', vn:'Sau cuối tuần đừng tìm bất cứ cái cớ nào để ăn đồ ngon nữa.'},
      {zh:'他借口家里有事，提前离开了会场。', py:'Tā jièkǒu jiā li yǒu shì, tíqián líkāile huìchǎng.', vn:'Anh ấy lấy cớ nhà có việc, rời hội trường sớm.'},
      {zh:'别找借口了，你就是不想去。', py:'Bié zhǎo jièkǒu le, nǐ jiù shì bù xiǎng qù.', vn:'Đừng kiếm cớ nữa, cậu chỉ là không muốn đi thôi.'}
    ],
    colloFull: [
      {zh:'找借口', py:'zhǎo jièkǒu', vn:'tìm cớ'},
      {zh:'一个借口', py:'yí ge jièkǒu', vn:'một cái cớ'},
      {zh:'以……为借口', py:'yǐ……wéi jièkǒu', vn:'lấy … làm cớ'},
      {zh:'借口有事', py:'jièkǒu yǒu shì', vn:'lấy cớ có việc'},
      {zh:'找任何借口', py:'zhǎo rènhé jièkǒu', vn:'tìm bất cứ cớ gì'}
    ],
    patterns: [{s:'找 + (个) + 借口 + V', m:'Tìm cớ để …'}, {s:'Sub + 借口 + lý do，V', m:'Ai đó lấy cớ … để …'}],
    checkList: [
      {promptLang:'vi', prompt:'Anh ấy lấy cớ bị ốm, ngay cả kỳ thi cũng không tham gia.', answer:'他借口生病，连考试都没参加。', answerPy:'Tā jièkǒu shēngbìng, lián kǎoshì dōu méi cānjiā.', note:'借口 làm động từ: 借口 + lý do.', pair:'连……都……'},
      {promptLang:'vi', prompt:'Hễ đi muộn là cậu ấy lại tìm cớ.', answer:'他一迟到就找借口。', answerPy:'Tā yì chídào jiù zhǎo jièkǒu.', note:'找 + 借口 — động từ đi kèm là 找.', pair:'一……就……'}
    ]
  },
  {
    n: 40, zh: '采取', py: 'cǎiqǔ', pos: 'Động từ', vn: 'áp dụng, dùng (biện pháp, cách)', hv: 'thái thủ', em: '🛠️', lesson: 1,
    explain: ['Chọn và dùng một biện pháp, phương pháp, thái độ, hành động.'],
    usage: '采取 + 措施 / 办法 / 方法 / 方式 / 行动 / 态度. Không đi với 意见 (nhận ý kiến dùng 采纳 / 接受).',
    collo: ['采取措施', '采取办法', '采取行动', '采取……的方式'],
    ex_zh: '医生决定采取中医的治疗方法。', ex_py: 'Yīshēng juédìng cǎiqǔ zhōngyī de zhìliáo fāngfǎ.', ex_vn: 'Bác sĩ quyết định áp dụng phương pháp điều trị Đông y.',
    exList: [
      {zh:'应及时采取措施阻止这一上升趋势。', py:'Yīng jíshí cǎiqǔ cuòshī zǔzhǐ zhè yī shàngshēng qūshì.', vn:'Nên kịp thời áp dụng biện pháp ngăn chặn xu hướng tăng này.'},
      {zh:'医生决定采取中医的治疗方法。', py:'Yīshēng juédìng cǎiqǔ zhōngyī de zhìliáo fāngfǎ.', vn:'Bác sĩ quyết định áp dụng phương pháp điều trị Đông y.'},
      {zh:'我们应该采取积极的态度面对困难。', py:'Wǒmen yīnggāi cǎiqǔ jījí de tàidu miànduì kùnnan.', vn:'Chúng ta nên giữ thái độ tích cực để đối mặt với khó khăn.'}
    ],
    colloFull: [
      {zh:'采取措施', py:'cǎiqǔ cuòshī', vn:'áp dụng biện pháp'},
      {zh:'采取办法', py:'cǎiqǔ bànfǎ', vn:'dùng cách'},
      {zh:'采取行动', py:'cǎiqǔ xíngdòng', vn:'hành động'},
      {zh:'采取……的方式', py:'cǎiqǔ……de fāngshì', vn:'dùng cách thức …'},
      {zh:'采取积极的态度', py:'cǎiqǔ jījí de tàidu', vn:'giữ thái độ tích cực'}
    ],
    patterns: [{s:'采取 + 措施 / 办法 / 行动', m:'Áp dụng biện pháp / dùng cách / hành động'}, {s:'及时采取措施 + V', m:'Kịp thời áp dụng biện pháp để …'}],
    checkList: [
      {promptLang:'vi', prompt:'Chỉ cần kịp thời áp dụng biện pháp là có thể ngăn chặn xu hướng này.', answer:'只要及时采取措施，就能阻止这一趋势。', answerPy:'Zhǐyào jíshí cǎiqǔ cuòshī, jiù néng zǔzhǐ zhè yī qūshì.', note:'采取 + 措施 là kết hợp cố định.', pair:'只要……就……'},
      {promptLang:'vi', prompt:'Tuy đã áp dụng nhiều cách, nhưng cân nặng vẫn không giảm.', answer:'虽然采取了很多办法，但是体重还是没有减轻。', answerPy:'Suīrán cǎiqǔle hěn duō bànfǎ, dànshì tǐzhòng háishi méiyǒu jiǎnqīng.', note:'采取 + 办法.', pair:'虽然……但是……'}
    ]
  },
  {
    n: 41, zh: '措施', py: 'cuòshī', pos: 'Danh từ', vn: 'biện pháp', hv: 'thố thi', em: '🛡️', lesson: 1,
    explain: ['Cách xử lý cụ thể được đưa ra để giải quyết một vấn đề.'],
    usage: '采取措施; 有效的措施; 安全措施; lượng từ 项 / 条: 一项措施.',
    collo: ['采取措施', '有效措施', '安全措施', '一项措施'],
    ex_zh: '学校采取了很多安全措施。', ex_py: 'Xuéxiào cǎiqǔle hěn duō ānquán cuòshī.', ex_vn: 'Nhà trường đã áp dụng nhiều biện pháp an toàn.',
    exList: [
      {zh:'学校采取了很多安全措施。', py:'Xuéxiào cǎiqǔle hěn duō ānquán cuòshī.', vn:'Nhà trường đã áp dụng nhiều biện pháp an toàn.'},
      {zh:'我们虽然还不能准确预报地震，但可以采取有效措施保护自己。', py:'Wǒmen suīrán hái bù néng zhǔnquè yùbào dìzhèn, dàn kěyǐ cǎiqǔ yǒuxiào cuòshī bǎohù zìjǐ.', vn:'Tuy chúng ta chưa thể dự báo động đất chính xác, nhưng có thể áp dụng biện pháp hữu hiệu để bảo vệ mình.'},
      {zh:'这些措施很有效，交通事故明显减少了。', py:'Zhèxiē cuòshī hěn yǒuxiào, jiāotōng shìgù míngxiǎn jiǎnshǎo le.', vn:'Những biện pháp này rất hiệu quả, tai nạn giao thông giảm rõ rệt.'}
    ],
    colloFull: [
      {zh:'采取措施', py:'cǎiqǔ cuòshī', vn:'áp dụng biện pháp'},
      {zh:'有效措施', py:'yǒuxiào cuòshī', vn:'biện pháp hiệu quả'},
      {zh:'安全措施', py:'ānquán cuòshī', vn:'biện pháp an toàn'},
      {zh:'一项措施', py:'yí xiàng cuòshī', vn:'một biện pháp'},
      {zh:'具体措施', py:'jùtǐ cuòshī', vn:'biện pháp cụ thể'}
    ],
    patterns: [{s:'采取 + (有效的) + 措施', m:'Áp dụng biện pháp (hiệu quả)'}, {s:'一项 / 一条 + 措施', m:'Lượng từ của 措施'}],
    checkList: [
      {promptLang:'vi', prompt:'Biện pháp này bị rất nhiều người phản đối.', answer:'这项措施被很多人反对。', answerPy:'Zhè xiàng cuòshī bèi hěn duō rén fǎnduì.', note:'这项 + 措施: lượng từ 项.', pair:'被'},
      {promptLang:'vi', prompt:'Nhà trường không những áp dụng biện pháp an toàn, mà còn mời cảnh sát đến giảng bài.', answer:'学校不仅采取了安全措施，也请警察来讲了课。', answerPy:'Xuéxiào bùjǐn cǎiqǔle ānquán cuòshī, yě qǐng jǐngchá lái jiǎngle kè.', note:'安全措施: biện pháp an toàn.', pair:'不仅……也……'}
    ]
  }
];


// ══════════════════════════════════════════
// BÀI KHOÁ 课文 — chép nguyên văn sách (tr. 146–148)
// ══════════════════════════════════════════
var dialogData = [{
  scene:'课文 · 体重与节食',
  preQuiz:[
    {q:'这项新研究是谁进行的？',opts:['医学专家','体育老师','报社记者'],ans:0},
    {q:'研究发现，节食者的体重有什么特点？',opts:['一直不变','在一周内上下波动','每天都在减轻'],ans:1},
    {q:'总共有多少名成年人参与了这项研究？',opts:['25名','62名','80名'],ans:2},
    {q:'研究人员根据什么把这些人分为三种类型？',opts:['相对体重变化','年龄','饮食习惯'],ans:0},
    {q:'这些成年人每天什么时候称体重？',opts:['晚饭以后','起床之后、早餐之前','睡觉之前'],ans:1},
    {q:'什么样的人才会被纳入分析？',opts:['年龄在25岁以下的人','体重增加的人','至少连续7天以上称过体重的人'],ans:2},
    {q:'对这些志愿者的跟踪调查时间最长是多少天？',opts:['330天','15天','7天'],ans:0},
    {q:'一周里哪一天体重最低？',opts:['周一','周五','周日'],ans:1},
    {q:'体重减轻者的波动模式是怎样的？',opts:['每天的体重都存在差异','工作日体重不变','周末之后体重立即下降，一直到周五'],ans:2},
    {q:'体重增加者在工作日的体重怎么样？',opts:['并无明显减轻','减轻得很快','周二开始下降'],ans:0},
    {q:'多数人体重的增加从哪天开始？',opts:['周二','周六','周五'],ans:1},
    {q:'为什么周末体重会增加？',opts:['周末运动太多','周末睡得太少','人们在周末有更多时间外出就餐'],ans:2},
    {q:'作者给节食者的建议是什么？',opts:['周末之后及时采取措施，不再找借口吃美食','周末完全不能吃美食','每天称三次体重'],ans:0}
  ],
  lines:[
    {sp:0,zh:'据报道，医学专家进行了一项新研究，研究发现：由于人们在一周内的营养摄入和饮食模式会影响到他们的体重变化，因此节食者的体重会在一周内上下波动。',
     py:'Jù bàodào, yīxué zhuānjiā jìnxíngle yí xiàng xīn yánjiū, yánjiū fāxiàn: yóuyú rénmen zài yì zhōu nèi de yíngyǎng shèrù hé yǐnshí móshì huì yǐngxiǎng dào tāmen de tǐzhòng biànhuà, yīncǐ jiéshízhě de tǐzhòng huì zài yì zhōu nèi shàngxià bōdòng.',
     vn:'Theo tin đưa, các chuyên gia y học đã tiến hành một nghiên cứu mới. Nghiên cứu phát hiện: do lượng dinh dưỡng hấp thu và kiểu ăn uống trong một tuần sẽ ảnh hưởng đến sự thay đổi cân nặng, nên cân nặng của người ăn kiêng sẽ lên xuống trong vòng một tuần.'},
    {sp:0,zh:'总共有80名年龄在25-62岁之间的成年人参与了这项研究。研究人员根据他们的相对体重变化将其分为三种类型：体重减轻者、体重增加者和体重保持者。这些成年人在每天起床之后、早餐之前称一下自己的体重，为了保证可靠性，只有那些至少连续7天以上称过体重的人才会被纳入分析。对这些志愿者的跟踪调查时间最短为15天，最长为330天。',
     py:'Zǒnggòng yǒu bāshí míng niánlíng zài èrshíwǔ dào liùshí\'èr suì zhījiān de chéngniánrén cānyùle zhè xiàng yánjiū. Yánjiū rényuán gēnjù tāmen de xiāngduì tǐzhòng biànhuà jiāng qí fēnwéi sān zhǒng lèixíng: tǐzhòng jiǎnqīngzhě, tǐzhòng zēngjiāzhě hé tǐzhòng bǎochízhě. Zhèxiē chéngniánrén zài měi tiān qǐchuáng zhīhòu, zǎocān zhīqián chēng yíxià zìjǐ de tǐzhòng, wèile bǎozhèng kěkàoxìng, zhǐyǒu nàxiē zhìshǎo liánxù qī tiān yǐshàng chēngguo tǐzhòng de rén cái huì bèi nàrù fēnxī. Duì zhèxiē zhìyuànzhě de gēnzōng diàochá shíjiān zuì duǎn wéi shíwǔ tiān, zuì cháng wéi sānbǎi sānshí tiān.',
     vn:'Tổng cộng có 80 người trưởng thành trong độ tuổi từ 25 đến 62 tham gia nghiên cứu này. Các nhà nghiên cứu căn cứ vào sự thay đổi cân nặng tương đối của họ mà chia họ thành ba loại: người giảm cân, người tăng cân và người giữ cân. Mỗi ngày, những người này tự cân sau khi ngủ dậy và trước bữa sáng; để bảo đảm độ tin cậy, chỉ những ai đã cân liên tục ít nhất 7 ngày trở lên mới được đưa vào phân tích. Thời gian theo dõi điều tra những tình nguyện viên này ngắn nhất là 15 ngày, dài nhất là 330 ngày.'},
    {sp:0,zh:'研究成果显示：这些人的体重变化表现出清晰的模式，即周末之后体重升高，在工作日体重减轻（周五达到最低点）。研究人员还意外地发现，体重减轻者和体重增加者在体重波动模式上存在着明显不同。体重减轻者会表现出较强的补偿模式，即在周末之后体重立即下降，这一下降趋势直至周五结束；而体重增加者每天的体重都会存在差异，他们在工作日的体重并无明显减轻。',
     py:'Yánjiū chéngguǒ xiǎnshì: zhèxiē rén de tǐzhòng biànhuà biǎoxiàn chū qīngxī de móshì, jí zhōumò zhīhòu tǐzhòng shēnggāo, zài gōngzuòrì tǐzhòng jiǎnqīng (zhōuwǔ dádào zuì dī diǎn). Yánjiū rényuán hái yìwài de fāxiàn, tǐzhòng jiǎnqīngzhě hé tǐzhòng zēngjiāzhě zài tǐzhòng bōdòng móshì shang cúnzàizhe míngxiǎn bù tóng. Tǐzhòng jiǎnqīngzhě huì biǎoxiàn chū jiào qiáng de bǔcháng móshì, jí zài zhōumò zhīhòu tǐzhòng lìjí xiàjiàng, zhè yī xiàjiàng qūshì zhízhì zhōuwǔ jiéshù; ér tǐzhòng zēngjiāzhě měi tiān de tǐzhòng dōu huì cúnzài chāyì, tāmen zài gōngzuòrì de tǐzhòng bìng wú míngxiǎn jiǎnqīng.',
     vn:'Kết quả nghiên cứu cho thấy: sự thay đổi cân nặng của những người này thể hiện một mô hình rõ ràng, tức là sau cuối tuần cân nặng tăng lên, còn trong những ngày làm việc thì giảm xuống (thứ Sáu xuống mức thấp nhất). Các nhà nghiên cứu còn bất ngờ phát hiện, người giảm cân và người tăng cân có sự khác nhau rõ rệt về kiểu dao động cân nặng. Người giảm cân thể hiện một kiểu bù trừ khá mạnh, tức là sau cuối tuần cân nặng lập tức giảm xuống, xu hướng giảm này kéo dài đến hết thứ Sáu; còn cân nặng mỗi ngày của người tăng cân đều chênh lệch nhau, trong những ngày làm việc cân nặng của họ không hề giảm rõ rệt.'},
    {sp:0,zh:'这项联合多所医学院校所做的研究发现，除了个别人以外，多数人体重的增加会从周六开始，而体重减轻则会从周二开始，特别是对于那些体重减轻者和体重保持者来说更是如此。它表明人们的体重变化在一周内会显示出一种明显的规律，工作日和周末体重的临时变化应该被视为正常现象，而非真正的体重增加，这是由于人们在周末会有更多的时间外出就餐。周末对饮食稍微有些放纵影响不大，但为了能成功减轻体重，想要变苗条的节食者应注意到这种变化规律，周末之后不要再找任何吃美食的借口，应及时采取措施阻止这一上升趋势。',
     py:'Zhè xiàng liánhé duō suǒ yīxué yuànxiào suǒ zuò de yánjiū fāxiàn, chúle gèbié rén yǐwài, duōshù rén tǐzhòng de zēngjiā huì cóng zhōuliù kāishǐ, ér tǐzhòng jiǎnqīng zé huì cóng zhōu\'èr kāishǐ, tèbié shì duìyú nàxiē tǐzhòng jiǎnqīngzhě hé tǐzhòng bǎochízhě lái shuō gèng shì rúcǐ. Tā biǎomíng rénmen de tǐzhòng biànhuà zài yì zhōu nèi huì xiǎnshì chū yì zhǒng míngxiǎn de guīlǜ, gōngzuòrì hé zhōumò tǐzhòng de línshí biànhuà yīnggāi bèi shìwéi zhèngcháng xiànxiàng, ér fēi zhēnzhèng de tǐzhòng zēngjiā, zhè shì yóuyú rénmen zài zhōumò huì yǒu gèng duō de shíjiān wàichū jiùcān. Zhōumò duì yǐnshí shāowēi yǒuxiē fàngzòng yǐngxiǎng bú dà, dàn wèile néng chénggōng jiǎnqīng tǐzhòng, xiǎng yào biàn miáotiáo de jiéshízhě yīng zhùyì dào zhè zhǒng biànhuà guīlǜ, zhōumò zhīhòu búyào zài zhǎo rènhé chī měishí de jièkǒu, yīng jíshí cǎiqǔ cuòshī zǔzhǐ zhè yī shàngshēng qūshì.',
     vn:'Nghiên cứu này do nhiều trường y liên kết thực hiện phát hiện rằng, ngoài một vài người cá biệt, cân nặng của đa số người bắt đầu tăng từ thứ Bảy, còn giảm thì bắt đầu từ thứ Ba — với người giảm cân và người giữ cân thì càng đúng như vậy. Điều đó cho thấy sự thay đổi cân nặng trong một tuần có một quy luật rõ rệt: những thay đổi tạm thời của cân nặng giữa ngày làm việc và cuối tuần nên được coi là hiện tượng bình thường, chứ không phải tăng cân thật sự; đó là do cuối tuần người ta có nhiều thời gian ra ngoài ăn uống hơn. Cuối tuần ăn uống hơi buông thả một chút cũng không ảnh hưởng mấy, nhưng để giảm cân thành công, những người ăn kiêng muốn có dáng thon cần chú ý đến quy luật thay đổi này: sau cuối tuần đừng tìm bất cứ cái cớ nào để ăn đồ ngon nữa, mà phải kịp thời áp dụng biện pháp ngăn chặn xu hướng tăng này.'}
  ]
}];

// ══════════════════════════════════════════
// PHÂN BIỆT TỪ GẦN NGHĨA 近义词辨析 — 临时/暂时 lấy từ sách (tr. 150–151)
// ══════════════════════════════════════════
var synonymData = [
  {pair:'临时 — 暂时',
   same:'Đều có nghĩa "trong thời gian ngắn".',
   sameEx:{zh:'没找到满意的房子前，我临时／暂时借住在朋友家里。',vn:'Trước khi tìm được nhà ưng ý, tôi tạm ở nhờ nhà bạn.'},
   items:[
     {word:'临时',points:[
       'Nghĩa "đến lúc sự việc sắp xảy ra (mới …)": 临时决定, 临时通知.',
       'Làm từ thuộc tính (định ngữ): ngắn hạn, không chính thức — 临时工作, 临时的家.',
       'Không chỉ "một khoảng thời gian gần đây".'
     ],ex:[{zh:'早到了30分钟，所以我临时决定去旁边的书店看看。',vn:'Đến sớm 30 phút nên tôi quyết định luôn vào hiệu sách bên cạnh xem.'},
          {zh:'麻烦你春节后帮刘方的女儿找份临时工作。',vn:'Phiền anh sau Tết tìm giúp con gái Lưu Phương một công việc tạm thời.'}]},
     {word:'暂时',points:[
       'Chỉ một khoảng thời gian gần đây không xác định: tạm thời, trước mắt.',
       'Hay đứng trước động từ / phủ định: 暂时不……, 暂时还……; làm định ngữ: 暂时的困难.',
       'Không có nghĩa "đến lúc đó mới …", không nói 暂时决定去 với nghĩa quyết định phút chót.'
     ],ex:[{zh:'这套房子我很喜欢，暂时还不打算卖掉。',vn:'Căn nhà này tôi rất thích, tạm thời chưa định bán.'},
          {zh:'这件事你暂时先不要告诉他。',vn:'Chuyện này tạm thời em đừng nói với anh ấy.'}]}
   ],
   quiz:[
     {sentence:'我们租下了一所房子作为＿＿的家。',options:['临时','暂时'],answer:0,
      why:'Làm định ngữ chỉ "ngắn hạn, không chính thức" → 临时的家. 暂时 không có cách dùng này.'},
     {sentence:'演出结束，我想＿＿休息一段时间，考虑一下明年的工作。',options:['临时','暂时'],answer:1,
      why:'"Tạm nghỉ một thời gian" — khoảng thời gian gần đây → 暂时.'},
     {sentence:'公司遇到一些＿＿的困难，我们正在积极想办法。',options:['临时','暂时'],answer:1,
      why:'Khó khăn trước mắt, sẽ qua → 暂时的困难.'},
     {sentence:'会议＿＿改到了下午，大家都没想到。',options:['临时','暂时'],answer:0,
      why:'Đến sát giờ mới đổi → 临时 (nghĩa "临到事情发生的时候").'}
   ],
   sgk:{
     chung:{t:'都有"短时间内"的意思。',vn:'Đều có nghĩa "trong thời gian ngắn".',vd:'没找到满意的房子前，我临时／暂时借住在朋友家里。',vdVn:'Trước khi tìm được nhà ưng ý, tôi tạm ở nhờ nhà bạn.'},
     khac:[
       {a:{t:'表示"临到事情发生的时候"。',vn:'Chỉ "khi sự việc sắp xảy ra" (đến lúc đó mới …).',vd:'早到了30分钟，所以我临时决定去旁边的书店看看。',vdVn:'Đến sớm 30 phút nên tôi quyết định luôn vào hiệu sách bên cạnh xem.'},
        b:{t:'没有这个意思。',vn:'Không có nghĩa này.'}},
       {a:{t:'没有这个意思。',vn:'Không có nghĩa này.'},
        b:{t:'表示不确指的较近的一段时间。',vn:'Chỉ một khoảng thời gian gần đây, không xác định.',vd:'这套房子我很喜欢，暂时还不打算卖掉。',vdVn:'Căn nhà này tôi rất thích, tạm thời chưa định bán.'}},
       {a:{t:'还可以做属性词，表示短期的、非正式的。',vn:'Còn làm từ thuộc tính: ngắn hạn, không chính thức.',vd:'麻烦你春节后帮刘方的女儿找份临时工作。',vdVn:'Phiền anh sau Tết tìm giúp con gái Lưu Phương một công việc tạm thời.'},
        b:{t:'没有这种用法。',vn:'Không có cách dùng này.'}}
     ],
     lamThu:[
       {s:'我们租下了一所房子作为＿＿的家。',dap:[true,false],mau:true,
        giai:'Định ngữ "ngắn hạn, không chính thức" → chỉ 临时 (câu mẫu của sách).'},
       {s:'演出结束，我想＿＿休息一段时间，考虑一下明年的工作。',dap:[false,true],
        giai:'Tạm nghỉ trong một khoảng thời gian gần đây → 暂时.'},
       {s:'公司遇到一些＿＿的困难，我们正在积极想办法。',dap:[false,true],
        giai:'Khó khăn trước mắt, rồi sẽ qua → 暂时的困难.'},
       {s:'这件事你＿＿先不要告诉他。',dap:[false,true],
        giai:'Tạm thời chưa nói (trong thời gian gần đây) → 暂时. 临时 không đứng trước phủ định theo nghĩa này.'}
     ]
   }},

  {pair:'参与 — 参加',
   same:'Đều là động từ, đều có nghĩa "tham gia".',
   sameEx:{zh:'80名成年人参与／参加了这项研究。',vn:'80 người trưởng thành đã tham gia nghiên cứu này.'},
   items:[
     {word:'参与',points:[
       'Trang trọng hơn; nhấn mạnh GÓP PHẦN vào quá trình (lên kế hoạch, bàn bạc, quản lý).',
       'Tân ngữ thường trừu tượng: 参与管理, 参与讨论, 参与制定.',
       'Danh từ hoá được: 参与程度, 积极的参与.'
     ],ex:[{zh:'研究发现，父亲对教育子女的参与程度越高，孩子就越聪明。',vn:'Nghiên cứu phát hiện, bố càng tham gia nhiều vào việc dạy con thì con càng thông minh.'},
          {zh:'教师要让学生主动参与班集体管理。',vn:'Giáo viên nên để học sinh chủ động tham gia quản lý tập thể lớp.'}]},
     {word:'参加',points:[
       'Thông dụng, khẩu ngữ; tân ngữ là hoạt động, tổ chức cụ thể.',
       'Hay đi với 比赛, 考试, 会议, 晚会, 婚礼, 工作.',
       'Không nói 参加程度.'
     ],ex:[{zh:'我明天要参加HSK考试。',vn:'Ngày mai tôi thi HSK.'},
          {zh:'你参加过学校的运动会吗？',vn:'Bạn đã từng tham gia hội thao của trường chưa?'}]}
   ],
   quiz:[
     {sentence:'研究发现，父亲对教育子女的＿＿程度越高，孩子就越聪明。',options:['参与','参加'],answer:0,
      why:'参与程度 là kết hợp cố định; không nói 参加程度.'},
     {sentence:'周六我要去＿＿表姐的婚礼。',options:['参与','参加'],answer:1,
      why:'Dự một sự kiện cụ thể (婚礼) → 参加.'},
     {sentence:'教师要让学生主动＿＿班集体管理。',options:['参与','参加'],answer:0,
      why:'Tham gia góp phần vào việc quản lý (trừu tượng) → 参与.'},
     {sentence:'明年你打算＿＿HSK五级考试吗？',options:['参与','参加'],answer:1,
      why:'Thi cử là hoạt động cụ thể → 参加考试.'}
   ]},

  {pair:'成果 — 结果',
   same:'Đều là danh từ, đều chỉ cái đạt được sau một quá trình.',
   sameEx:{zh:'研究成果／结果显示，人们的体重在一周内会上下波动。',vn:'Kết quả nghiên cứu cho thấy cân nặng lên xuống trong một tuần.'},
   items:[
     {word:'成果',points:[
       'Chỉ kết quả TỐT, có giá trị, do nỗ lực mà có.',
       'Hay đi với 取得, 研究, 学习, 劳动: 取得成果.',
       'Chỉ làm danh từ.'
     ],ex:[{zh:'经过三年的努力，他们终于取得了重大的成果。',vn:'Sau ba năm cố gắng, cuối cùng họ đã đạt được thành quả to lớn.'}]},
     {word:'结果',points:[
       'Kết quả nói chung, tốt xấu đều được: 考试结果, 比赛结果.',
       'Còn làm LIÊN TỪ "kết cục là, rốt cuộc" đứng đầu vế sau.',
       'Không đi với 取得 (không nói 取得结果 theo nghĩa thành quả).'
     ],ex:[{zh:'我本来想完成这个计划以后再去美国，结果现在那边有更重要的事，不得不提前去。',vn:'Tôi vốn định xong kế hoạch này rồi mới sang Mỹ, rốt cuộc bây giờ bên đó có việc quan trọng hơn nên đành đi sớm.'}]}
   ],
   quiz:[
     {sentence:'我本来想完成这个计划以后再去美国，＿＿现在那边有更重要的事，不得不提前去。',options:['成果','结果'],answer:1,
      why:'Đứng đầu vế sau làm liên từ "rốt cuộc" → chỉ 结果.'},
     {sentence:'经过三年的努力，他们终于取得了重大的＿＿。',options:['成果','结果'],answer:0,
      why:'取得 + kết quả tốt, có giá trị → 成果.'},
     {sentence:'比赛的＿＿让所有人都很失望。',options:['成果','结果'],answer:1,
      why:'Kết quả xấu (làm mọi người thất vọng) → 结果. 成果 luôn mang nghĩa tốt.'},
     {sentence:'期末我们要向家长展示这学期的学习＿＿。',options:['成果','结果'],answer:0,
      why:'Thành quả học tập để "trưng bày" → 学习成果.'}
   ]}
];

// ══════════════════════════════════════════
// BẮC CẦU HÁN–VIỆT
// ══════════════════════════════════════════
var hvBridgeData = {
  easy:[
    {zh:'营养',hv:'dinh dưỡng',vn:'dinh dưỡng',note:'Trùng khít — nhớ một lần là xong.'},
    {zh:'总共',hv:'tổng cộng',vn:'tổng cộng',note:'Trùng khít.'},
    {zh:'分析',hv:'phân tích',vn:'phân tích',note:'Trùng khít.'},
    {zh:'相对',hv:'tương đối',vn:'tương đối',note:'Trùng khít. 相对来说 = nói một cách tương đối.'},
    {zh:'现象',hv:'hiện tượng',vn:'hiện tượng',note:'Trùng khít.'},
    {zh:'存在',hv:'tồn tại',vn:'tồn tại, có',note:'Trùng khít — nhưng tiếng Trung dùng rộng hơn: 存在问题 = có vấn đề.'},
    {zh:'个别',hv:'cá biệt',vn:'riêng lẻ; số ít',note:'"Trường hợp cá biệt" — tiếng Việt dùng y hệt.'},
    {zh:'类型',hv:'loại hình',vn:'loại, kiểu',note:'"Loại hình" tiếng Việt cũng là kiểu, loại.'},
    {zh:'趋势',hv:'xu thế',vn:'xu hướng',note:'"Xu thế" = xu hướng — tiếng Việt dùng cả hai.'},
    {zh:'成果',hv:'thành quả',vn:'thành quả',note:'Trùng khít, luôn mang nghĩa tốt.'},
    {zh:'参与',hv:'tham dự',vn:'tham gia (góp phần)',note:'"Tham dự" — gần nghĩa, nhưng 参与 nhấn mạnh góp phần vào quá trình.'},
    {zh:'志愿者',hv:'chí nguyện giả',vn:'tình nguyện viên',note:'"Chí nguyện" = tự nguyện, "giả" = người (như 记者 ký giả) → người tình nguyện.'},
    {zh:'差异',hv:'sai dị',vn:'sự khác biệt',note:'"Dị" = khác (dị biệt) → chỗ khác nhau. Chú ý 差 đọc chā.'},
    {zh:'补偿',hv:'bổ thường',vn:'đền bù, bù đắp',note:'Gần "bồi thường" — "bổ" = bù, "thường" = trả lại.'}
  ],
  idiom:[
    {zh:'一拍即合',hv:'nhất phách tức hợp',vn:'vừa gặp đã ăn ý',note:'"Vỗ một cái là khớp ngay" — hai người hợp ý nhau tức thì. Ví dụ của mục 即 trong sách.'},
    {zh:'并非',hv:'tịnh phi',vn:'hoàn toàn không phải',note:'"Phi" = không phải (phi pháp, phi lý). 并 nhấn mạnh phủ định.'}
  ],
  trap:[
    {zh:'节食',hv:'tiết thực',vn:'ăn kiêng',
     warn:'"Tiết" = tiết chế, không phải "tiết" trong "chi tiết". 节食 = ăn ít lại để giảm cân, và KHÔNG mang tân ngữ.'},
    {zh:'临时',hv:'lâm thời',vn:'đến lúc mới …; tạm thời',
     warn:'BẪY: tiếng Việt "lâm thời" chỉ nghĩa tạm thời (chính phủ lâm thời). Tiếng Trung còn nghĩa "đến sát lúc mới …": 临时决定 = quyết định vào phút chót.'},
    {zh:'可靠',hv:'khả kháo',vn:'đáng tin cậy',
     warn:'Âm Hán–Việt không gợi nghĩa. 靠 = dựa → "có thể dựa vào" = đáng tin.'},
    {zh:'放纵',hv:'phóng túng',vn:'buông thả; nuông chiều',
     warn:'Tiếng Việt "phóng túng" nặng nề (sống trác táng). 放纵 nhẹ hơn nhiều: 周末对饮食放纵一下 = cuối tuần ăn uống thả cửa một chút.'},
    {zh:'借口',hv:'tá khẩu',vn:'cái cớ; lấy cớ',
     warn:'"Tá" = mượn → "mượn cái miệng" = viện cớ. Động từ đi kèm là 找借口, không nói 做借口.'},
    {zh:'称',hv:'xưng',vn:'cân (đo trọng lượng)',
     warn:'BẪY: "xưng" gợi nghĩa gọi, xưng hô (称为). Trong bài này 称 là CÂN: 称体重.'},
    {zh:'报道',hv:'báo đạo',vn:'bài báo; đưa tin',
     warn:'Đừng nhầm với 报到 (trình diện, nhập học) và 报名 (đăng ký) — ba từ cùng âm đầu bào.'}
  ]
};

// ══════════════════════════════════════════
// GHÉP TỪ — lấy theo bảng 词语搭配 của sách (tr. 150) + cụm trong bài
// ══════════════════════════════════════════
var matchData = [
  {left:'达到',right:'水平'},
  {left:'分析',right:'病句'},
  {left:'意外的',right:'礼物'},
  {left:'可靠的',right:'朋友'},
  {left:'上升的',right:'趋势'},
  {left:'自然',right:'现象'},
  {left:'主动',right:'表明'},
  {left:'积极',right:'参与'},
  {left:'采取',right:'措施'},
  {left:'跟踪',right:'调查'},
  {left:'外出',right:'就餐'},
  {left:'身材',right:'苗条'},
  {left:'找',right:'借口'},
  {left:'取得',right:'成果'},
  {left:'研究',right:'人员'},
  {left:'营养',right:'摄入'},
  {left:'饮食',right:'模式'},
  {left:'称',right:'体重'},
  {left:'纳入',right:'分析'},
  {left:'上下',right:'波动'}
];

// ══════════════════════════════════════════
// ĐIỀN TỪ
// ══════════════════════════════════════════
var fillData = [
  {pre:'很多女孩子靠',blank:'节食',post:'减肥，这样对身体不好。',hint:'(ăn kiêng)',ans:'节食'},
  {pre:'据',blank:'报道',post:'，医学专家进行了一项新研究。',hint:'(tin đưa)',ans:'报道'},
  {pre:'牛奶很有',blank:'营养',post:'，每天都应该喝一杯。',hint:'(dinh dưỡng)',ans:'营养'},
  {pre:'每天',blank:'摄入',post:'太多的糖对身体不好。',hint:'(nạp vào cơ thể)',ans:'摄入'},
  {pre:'上大学以后，我的生活',blank:'模式',post:'完全变了。',hint:'(kiểu, mô hình)',ans:'模式'},
  {pre:'节食者的体重会在一周内上下',blank:'波动',post:'。',hint:'(dao động)',ans:'波动'},
  {pre:'这次旅行我们',blank:'总共',post:'花了五千块钱。',hint:'(tổng cộng)',ans:'总共'},
  {pre:'学校鼓励学生积极',blank:'参与',post:'班级管理。',hint:'(tham gia, góp phần)',ans:'参与'},
  {pre:'有问题可以问那边的工作',blank:'人员',post:'。',hint:'(nhân viên)',ans:'人员'},
  {pre:'',blank:'相对',post:'来说，坐火车比坐飞机更舒服。',hint:'(tương đối)',ans:'相对'},
  {pre:'你喜欢什么',blank:'类型',post:'的电影？',hint:'(loại, thể loại)',ans:'类型'},
  {pre:'妈妈每天起床以后都要',blank:'称',post:'一下体重。',hint:'(cân)',ans:'称'},
  {pre:'他办事很',blank:'可靠',post:'，你放心吧。',hint:'(đáng tin cậy)',ans:'可靠'},
  {pre:'学校把游泳',blank:'纳入',post:'了体育课。',hint:'(đưa vào)',ans:'纳入'},
  {pre:'我们先来',blank:'分析',post:'一下失败的原因。',hint:'(phân tích)',ans:'分析'},
  {pre:'暑假我去博物馆当了一个月的',blank:'志愿者',post:'。',hint:'(tình nguyện viên)',ans:'志愿者'},
  {pre:'记者对这件事进行了',blank:'跟踪',post:'报道。',hint:'(theo dõi)',ans:'跟踪'},
  {pre:'经过三年的努力，他们终于取得了重大的',blank:'成果',post:'。',hint:'(thành quả)',ans:'成果'},
  {pre:'这张照片拍得很',blank:'清晰',post:'，连远处的字都看得见。',hint:'(rõ nét)',ans:'清晰'},
  {pre:'他可聪明了，什么东西一学',blank:'即',post:'会。',hint:'(liền, ngay — văn viết)',ans:'即'},
  {pre:'太阳从东方',blank:'升',post:'起来了。',hint:'(lên, mọc lên)',ans:'升'},
  {pre:'他的汉语已经',blank:'达到',post:'了HSK五级水平。',hint:'(đạt đến)',ans:'达到'},
  {pre:'收到你的信，我感到很',blank:'意外',post:'。',hint:'(bất ngờ)',ans:'意外'},
  {pre:'这个计划还',blank:'存在',post:'一些问题，需要再改一改。',hint:'(tồn tại, còn có)',ans:'存在'},
  {pre:'南方和北方的饮食习惯',blank:'差异',post:'很大。',hint:'(sự khác biệt)',ans:'差异'},
  {pre:'两个班',blank:'联合',post:'起来办了一场晚会。',hint:'(hợp sức)',ans:'联合'},
  {pre:'除了',blank:'个别',post:'同学以外，全班都来了。',hint:'(một vài, cá biệt)',ans:'个别'},
  {pre:'研究',blank:'表明',post:'，每天运动半小时对身体很有好处。',hint:'(cho thấy)',ans:'表明'},
  {pre:'门口的牌子上写着：',blank:'非',post:'工作人员请勿入内。',hint:'(không phải, phi-)',ans:'非'},
  {pre:'人们在周末会有更多的时间外出',blank:'就餐',post:'。',hint:'(dùng bữa)',ans:'就餐'},
  {pre:'她身材',blank:'苗条',post:'，穿什么都好看。',hint:'(thon thả)',ans:'苗条'},
  {pre:'别找',blank:'借口',post:'了，你就是不想去。',hint:'(cái cớ)',ans:'借口'}
];

// ══════════════════════════════════════════
// SẮP XẾP CÂU — mỗi điểm ngữ pháp (即 · 个别 · 非) ít nhất 2 câu
// ══════════════════════════════════════════
var sortData = [
  {words:['这些人的体重变化','表现出','清晰的模式','，','即','周末之后','体重升高','。'],ans:'这些人的体重变化表现出清晰的模式，即周末之后体重升高。',audio:'这些人的体重变化表现出清晰的模式，即周末之后体重升高。'},
  {words:['他可聪明了','，','什么东西','一学','即','会','。'],ans:'他可聪明了，什么东西一学即会。',audio:'他可聪明了，什么东西一学即会。'},
  {words:['不懂即问','是','他','最大的','优点','。'],ans:'不懂即问是他最大的优点。',audio:'不懂即问是他最大的优点。'},
  {words:['除了','个别人','以外','，','大家','都','来了','。'],ans:'除了个别人以外，大家都来了。',audio:'除了个别人以外，大家都来了。'},
  {words:['天气预报说','个别地区','可能','有','大雨','。'],ans:'天气预报说个别地区可能有大雨。',audio:'天气预报说个别地区可能有大雨。'},
  {words:['门口的牌子上','写着','：','非工作人员','请勿','入内','。'],ans:'门口的牌子上写着：非工作人员请勿入内。',audio:'门口的牌子上写着：非工作人员请勿入内。'},
  {words:['补办学生证的事','非','你本人','去','不可','。'],ans:'补办学生证的事非你本人去不可。',audio:'补办学生证的事非你本人去不可。'},
  {words:['成功有时候','并非','想象中','那么','难','。'],ans:'成功有时候并非想象中那么难。',audio:'成功有时候并非想象中那么难。'},
  {words:['研究人员','将','他们','分为','三种','类型','。'],ans:'研究人员将他们分为三种类型。',audio:'研究人员将他们分为三种类型。'},
  {words:['应','及时','采取措施','阻止','这一','上升趋势','。'],ans:'应及时采取措施阻止这一上升趋势。',audio:'应及时采取措施阻止这一上升趋势。'},
  {words:['周末','对饮食','稍微','有些放纵','影响不大','。'],ans:'周末对饮食稍微有些放纵影响不大。',audio:'周末对饮食稍微有些放纵影响不大。'},
  {words:['我们','把','研究成果','交给了','老师','。'],ans:'我们把研究成果交给了老师。',audio:'我们把研究成果交给了老师。'}
];

// ══════════════════════════════════════════
// CHỌN TỪ THÍCH HỢP
// ══════════════════════════════════════════
var errorFixMode = 'wordchoice';
var errorFixData = [
  {wrong:'调查结果显示，市民对电子阅读的兴趣____提高了。',opts:['明显','清楚','清晰','可靠'],ans:0,
   exp:'Đứng trước động từ 提高, chỉ mức thay đổi dễ thấy → 明显提高. 清楚, 清晰 tả độ rõ của âm thanh, hình ảnh, suy nghĩ; 可靠 là đáng tin.'},
  {wrong:'他们在工作日的体重并无____减轻。',opts:['明显','清晰','可靠','个别'],ans:0,
   exp:'并无明显减轻 = không hề giảm rõ rệt. 清晰 (rõ nét) không tả mức giảm của cân nặng.'},
  {wrong:'平时工作太忙，周末我想好好____一下家人。',opts:['补偿','摄入','纳入','放纵'],ans:0,
   exp:'Bù đắp cho gia đình vì ngày thường bận → 补偿. 摄入 (nạp vào cơ thể), 纳入 (đưa vào phạm vi), 放纵 (buông thả) sai nghĩa.'},
  {wrong:'接到通知后，请大家____出发。',opts:['立即','临时','相对','总共'],ans:0,
   exp:'Xuất phát ngay → 立即. 临时 là "đến lúc mới …", 相对 là tương đối, 总共 là tổng cộng.'},
  {wrong:'近年来，网上购物的人有增加的____。',opts:['趋势','模式','类型','差异'],ans:0,
   exp:'有……的趋势 = có xu hướng … là cụm cố định. 模式, 类型, 差异 không đi với 有增加的.'},
  {wrong:'早到了30分钟，所以我____决定去旁边的书店看看。',opts:['临时','暂时','总共','相对'],ans:0,
   exp:'Đến lúc đó mới quyết định → 临时决定 (câu của sách). 暂时 chỉ một khoảng thời gian gần đây, không có nghĩa này.'},
  {wrong:'这套房子我很喜欢，____还不打算卖掉。',opts:['暂时','临时','立即','总共'],ans:0,
   exp:'Trong thời gian gần đây, trước mắt → 暂时 (câu của sách). 临时 không đứng trước 还不 theo nghĩa này.'},
  {wrong:'下雨、打雷都是自然____。',opts:['现象','趋势','模式','措施'],ans:0,
   exp:'自然现象 = hiện tượng tự nhiên (bảng 词语搭配).'},
  {wrong:'考完试以后，他____自己玩了一个星期游戏。',opts:['放纵','补偿','采取','参与'],ans:0,
   exp:'Không kiềm chế bản thân → 放纵自己. 补偿自己 có thể nói nhưng không hợp với "chơi game cả tuần" mang ý tiêu cực.'},
  {wrong:'医生决定____中医的治疗方法。',opts:['采取','参与','达到','存在'],ans:0,
   exp:'采取 + 方法 / 措施 / 办法 (câu 30 sách bài tập).'},
  {wrong:'发现问题要及时采取有效的____。',opts:['措施','趋势','成果','模式'],ans:0,
   exp:'采取措施 là kết hợp cố định; 有效的措施 = biện pháp hiệu quả.'},
  {wrong:'研究发现，父亲对教育子女的____程度越高，孩子就越聪明。',opts:['参与','参加','纳入','联合'],ans:0,
   exp:'参与程度 = mức độ tham gia. Không nói 参加程度 (bài tập 2 của sách).'},
  {wrong:'我本来想完成这个计划以后再去美国，____现在那边有更重要的事，不得不提前去。',opts:['结果','成果','效果','后果'],ans:0,
   exp:'Làm liên từ "rốt cuộc" đầu vế sau → chỉ 结果. 成果 chỉ là danh từ (bài tập 2 của sách).'},
  {wrong:'关于空气质量问题，现在报纸、网络上相关的____特别多。',opts:['报道','报名','报到','波动'],ans:0,
   exp:'Bài viết trên báo, mạng → 报道. 报名 là đăng ký, 报到 là trình diện.'},
  {wrong:'只要每天坚持练习，你一定能____目的。',opts:['达到','到达','存在','升'],ans:0,
   exp:'达到 + 目的 / 水平 / 要求 (trừu tượng). 到达 đi với nơi chốn: 到达北京.'},
  {wrong:'我们的火车下午三点____北京。',opts:['到达','达到','升','纳入'],ans:0,
   exp:'Đến nơi chốn → 到达. 达到 chỉ đi với mức độ, mục đích — không nói 达到北京.'},
  {wrong:'这一下降____直至周五结束。',opts:['趋势','现象','措施','类型'],ans:0,
   exp:'下降趋势 = xu hướng giảm (câu trong bài khoá).'},
  {wrong:'他____家里有事，提前离开了会场。',opts:['借口','报道','采取','分析'],ans:0,
   exp:'借口 làm động từ: lấy cớ … (bài tập 1 của sách).'}
];

// ══════════════════════════════════════════
// DỊCH
// ══════════════════════════════════════════
var translateData = [
  {vi:'Ngoài một vài bạn nghỉ ốm ra, cả lớp đều đã tham gia hoạt động tình nguyện lần này.', zh:'除了个别同学因为生病请假以外，全班都参与了这次志愿者活动。', py:'Chúle gèbié tóngxué yīnwèi shēngbìng qǐngjià yǐwài, quán bān dōu cānyùle zhè cì zhìyuànzhě huódòng.', goiY:['除了……以外，……都……','个别','参与','志愿者'], giai:'个别 + N = "một số ít, cá biệt"; 除了……以外，……都…… là cấu trúc loại trừ ("ngoài… ra, … đều…"), vế sau bắt buộc có 都.'},
  {vi:'Điểm lần này đã tụt rõ rệt như vậy thì cậu nhất định phải nói chuyện nghiêm túc với bố mẹ một phen.', zh:'既然这次成绩下降得这么明显，你就非跟爸妈好好谈一谈不可了。', py:'Jìrán zhè cì chéngjì xiàjiàng de zhème míngxiǎn, nǐ jiù fēi gēn bà mā hǎohǎo tán yi tán bùkě le.', goiY:['既然……就……','非……不可','明显'], giai:'非 + V + 不可 = "nhất định phải…" (phủ định kép thành khẳng định mạnh), không dịch thành "không phải… không được"; 既然 nêu sự thật đã rõ.'},
  {vi:'Nghiên cứu cho thấy điểm số tốt hay kém không hẳn chỉ do năng khiếu quyết định, mà có quan hệ mật thiết với thói quen học tập.', zh:'研究表明，成绩好坏并非只取决于天赋，而是与学习习惯存在密切的关系。', py:'Yánjiū biǎomíng, chéngjì hǎohuài bìngfēi zhǐ qǔjué yú tiānfù, ér shì yǔ xuéxí xíguàn cúnzài mìqiè de guānxì.', goiY:['并非……而是……','表明','存在'], giai:'并非 (văn viết) = 并不是, đi với 而是 để phủ định A, khẳng định B; 取决于 = "do… quyết định".'},
  {vi:'Cách học của lớp tôi rất đặc biệt, tức là mỗi tuần ai cũng phải lần lượt lên bảng giảng giải một bài, vì vậy không ai dám lười biếng.', zh:'我们班的学习模式很特别，即每个人每周都要轮流上台讲一道题，所以大家都不敢偷懒。', py:'Wǒmen bān de xuéxí móshì hěn tèbié, jí měi ge rén měi zhōu dōu yào lúnliú shàngtái jiǎng yí dào tí, suǒyǐ dàjiā dōu bù gǎn tōulǎn.', goiY:['即','模式','轮流','所以'], giai:'即 (văn viết) = 就是 "tức là": vế sau giải thích cụ thể cho 模式 ở vế trước; 所以 nêu kết quả ở vế cuối.'},
  {vi:'Thi xong một cái là cậu ấy lấy cớ "thư giãn" để buông thả bản thân, kết quả càng chơi càng không dừng được, ngày nào cũng thức đến nửa đêm.', zh:'考试一结束，他就以“放松”为借口放纵自己，结果越玩越停不下来，天天熬到半夜。', py:'Kǎoshì yì jiéshù, tā jiù yǐ “fàngsōng” wéi jièkǒu fàngzòng zìjǐ, jiéguǒ yuè wán yuè tíng bu xiàlái, tiāntiān áo dào bànyè.', goiY:['以……为借口','放纵','越……越……','结果'], giai:'以 A 为借口 = "lấy A làm cớ"; 越……越…… diễn tả mức độ tăng theo; 结果 mở đầu vế nêu kết cục không mong muốn.'},
  {vi:'Học kỳ này điểm của tôi tuy có lên xuống, nhưng nhìn chung có xu hướng tăng, so với học kỳ trước thì tiến bộ đã khá rõ rệt.', zh:'这学期我的成绩虽然有所波动，但总体呈上升趋势，相对于上学期，进步已经相当明显了。', py:'Zhè xuéqī wǒ de chéngjì suīrán yǒusuǒ bōdòng, dàn zǒngtǐ chéng shàngshēng qūshì, xiāngduì yú shàng xuéqī, jìnbù yǐjīng xiāngdāng míngxiǎn le.', goiY:['虽然……但……','波动','趋势','相对于'], giai:'呈……趋势 = "có xu hướng…"; 虽然 có thể đứng sau chủ ngữ (我的成绩虽然……); 相对于 + mốc so sánh = "so với…".'},
  {vi:'Lỡ như hoạt động ngoài trời ngày mai bị huỷ đột xuất vì trời mưa, chúng ta phải lập tức có biện pháp khác, để khỏi khiến mọi người đi một chuyến công cốc.', zh:'万一明天的户外活动因为下雨临时取消，我们就得立即采取别的措施，免得大家白跑一趟。', py:'Wànyī míngtiān de hùwài huódòng yīnwèi xià yǔ línshí qǔxiāo, wǒmen jiù děi lìjí cǎiqǔ bié de cuòshī, miǎnde dàjiā bái pǎo yí tàng.', goiY:['万一……就……','免得','临时','采取'], giai:'万一 nêu khả năng xấu ít xảy ra (= "lỡ như"); 免得 (để khỏi) mở đầu vế cuối, nêu điều muốn tránh; 采取措施 = "áp dụng biện pháp".'},
  {vi:'Chỉ khi hình thành thói quen không hiểu là hỏi ngay, ta mới có thể kịp thời phát hiện và sửa những lỗ hổng kiến thức lẻ tẻ, từ đó tránh để cùng một lỗi lặp đi lặp lại.', zh:'只有养成不懂即问的习惯，才能及时发现并纠正个别知识漏洞，从而避免同样的错误一再出现。', py:'Zhǐyǒu yǎngchéng bù dǒng jí wèn de xíguàn, cái néng jíshí fāxiàn bìng jiūzhèng gèbié zhīshi lòudòng, cóng’ér bìmiǎn tóngyàng de cuòwù yízài chūxiàn.', goiY:['只有……才……','不懂即问','个别','从而'], giai:'即 ở đây = 就 (liền, ngay): 不懂即问 = "không hiểu là hỏi ngay"; 只有……才…… là điều kiện duy nhất; 从而 nêu kết quả tiếp theo ở vế cuối.'},
  {vi:'Thay vì ăn kiêng mù quáng để giảm cân, chi bằng sắp xếp lượng dinh dưỡng nạp vào cho hợp lý và kiên trì tập thể dục, nếu không cân nặng rất dễ tăng trở lại.', zh:'与其为了减肥而盲目节食，不如合理安排营养的摄入，并坚持运动，否则体重很容易出现反弹。', py:'Yǔqí wèile jiǎnféi ér mángmù jiéshí, bùrú hélǐ ānpái yíngyǎng de shèrù, bìng jiānchí yùndòng, fǒuzé tǐzhòng hěn róngyì chūxiàn fǎntán.', goiY:['与其……不如……','否则','节食','摄入'], giai:'与其 A 不如 B — chọn B; 为了……而…… nối mục đích với hành động; 否则 (nếu không) đưa ra hậu quả khi không làm theo B.'},
  {vi:'Sau khi phân tích điểm số, cô giáo phát hiện vấn đề của phần lớn mọi người đều nằm ở bài văn, tức là không hiểu rõ đề, vì vậy cô cho rằng nhất định phải dạy cho chúng tôi một buổi về viết văn.', zh:'老师分析成绩后发现，大部分人的问题都出在作文上，即审题不清，因此她认为非给我们上一次作文课不可。', py:'Lǎoshī fēnxī chéngjì hòu fāxiàn, dà bùfen rén de wèntí dōu chū zài zuòwén shang, jí shěn tí bù qīng, yīncǐ tā rènwéi fēi gěi wǒmen shàng yí cì zuòwénkè bùkě.', goiY:['即','因此','非……不可','分析'], giai:'即 mở đầu phần giải thích cụ thể cho 问题; 非 + V + 不可 = "nhất định phải…", đứng sau động từ tâm lý 认为.'}
];

// Chiều Trung → Việt — nội dung khác với chiều trên
var translateDataRev = [
  {vi:'Tuy sự thay đổi cân nặng của một vài tình nguyện viên có khác biệt so với số đông, nhưng xu hướng chung vẫn giống nhau.', zh:'虽然个别志愿者的体重变化跟大多数人存在差异，但总的趋势是一致的。', py:'Suīrán gèbié zhìyuànzhě de tǐzhòng biànhuà gēn dàduōshù rén cúnzài chāyì, dàn zǒng de qūshì shì yízhì de.', goiY:['虽然……但…… = tuy… nhưng…','个别 = cá biệt, một vài','差异 = sự khác biệt','趋势 = xu hướng'], giai:'个别 + N chỉ số ít, dịch "một vài/cá biệt"; 跟……存在差异 = "có khác biệt so với…".'},
  {vi:'Các nhà nghiên cứu bất ngờ phát hiện ra rằng những người giảm cân thành công không phải cuối tuần nhịn ăn nhịn uống, mà là sẽ lập tức "bù lại" vào các ngày làm việc.', zh:'研究人员意外地发现，减肥成功的人并非周末不吃不喝，而是会在工作日立即进行“补偿”。', py:'Yánjiū rényuán yìwài de fāxiàn, jiǎnféi chénggōng de rén bìngfēi zhōumò bù chī bù hē, ér shì huì zài gōngzuòrì lìjí jìnxíng “bǔcháng”.', goiY:['并非……而是…… = không phải… mà là…','意外 = bất ngờ','补偿 = bù đắp, bù lại'], giai:'并非 = 并不是 (văn viết); 进行 + động từ hai âm tiết (进行补偿) chỉ việc tiến hành, khi dịch có thể bỏ 进行 cho gọn.'},
  {vi:'Cân nặng thường xuống thấp nhất vào thứ Sáu, sang thứ Bảy và Chủ nhật lại tăng trở lại, có thể thấy chế độ ăn cuối tuần ảnh hưởng rất lớn đến cân nặng.', zh:'体重通常在周五达到最低点，到了周六和周日又会重新上升，可见周末的饮食对体重影响很大。', py:'Tǐzhòng tōngcháng zài zhōuwǔ dádào zuì dī diǎn, dàole zhōuliù hé zhōurì yòu huì chóngxīn shàngshēng, kějiàn zhōumò de yǐnshí duì tǐzhòng yǐngxiǎng hěn dà.', goiY:['可见 = có thể thấy','达到 = đạt tới','上升 = tăng lên'], giai:'达到最低点 dịch "xuống mức thấp nhất" (không dịch cứng "đạt tới điểm thấp nhất"); 可见 nêu kết luận rút ra từ số liệu.'},
  {vi:'Vì cuối tuần mọi người có nhiều thời gian ra ngoài ăn uống hơn, ăn uống cũng tương đối buông thả, nên cân nặng đương nhiên sẽ dao động rõ rệt.', zh:'因为人们在周末有更多时间外出就餐，饮食也相对放纵，所以体重自然会出现明显的波动。', py:'Yīnwèi rénmen zài zhōumò yǒu gèng duō shíjiān wàichū jiùcān, yǐnshí yě xiāngduì fàngzòng, suǒyǐ tǐzhòng zìrán huì chūxiàn míngxiǎn de bōdòng.', goiY:['因为……所以…… = vì… nên…','就餐 = dùng bữa, ăn uống','放纵 = buông thả','波动 = dao động'], giai:'相对 ở đây là phó từ = "tương đối, khá"; 出现波动 dịch gọn là "dao động/lên xuống".'},
  {vi:'Nghiên cứu phát hiện sự thay đổi cân nặng của những người này có một quy luật rõ ràng, tức là cân nặng tăng lên sau cuối tuần, rồi giảm dần vào các ngày làm việc.', zh:'研究发现，这些人的体重变化存在清晰的模式，即体重先在周末过后升高，然后在工作日逐渐下降。', py:'Yánjiū fāxiàn, zhèxiē rén de tǐzhòng biànhuà cúnzài qīngxī de móshì, jí tǐzhòng xiān zài zhōumò guòhòu shēnggāo, ránhòu zài gōngzuòrì zhújiàn xiàjiàng.', goiY:['即 = tức là','先……然后…… = trước… rồi…','清晰 = rõ ràng','模式 = mô hình, kiểu'], giai:'即 mở đầu phần giải thích cho 模式 ở vế trước; 先……然后…… sắp xếp hai giai đoạn theo thứ tự thời gian.'},
  {vi:'Theo tin đưa, các nhà nghiên cứu đã theo dõi cân nặng của 80 người trưởng thành, trong đó chỉ những người cân liên tục từ bảy ngày trở lên mới được đưa vào phân tích.', zh:'据报道，研究人员对八十名成年人的体重进行了跟踪，其中只有连续称重七天以上的人，才会被纳入分析。', py:'Jù bàodào, yánjiū rényuán duì bāshí míng chéngniánrén de tǐzhòng jìnxíngle gēnzōng, qízhōng zhǐyǒu liánxù chēng zhòng qī tiān yǐshàng de rén, cái huì bèi nàrù fēnxī.', goiY:['据报道 = theo tin đưa','只有……才…… = chỉ khi/chỉ những… mới…','纳入 = đưa vào','跟踪 = theo dõi'], giai:'只有……才…… nêu điều kiện bắt buộc; 称重 là "cân (trọng lượng)", 称 đọc chēng; 被纳入分析 = "được đưa vào phân tích".'},
  {vi:'Các nhà nghiên cứu chia những người tham gia thành ba nhóm theo mức thay đổi cân nặng; kết quả cho thấy dù thuộc nhóm nào, sau cuối tuần cân nặng cũng đều tăng lên đôi chút.', zh:'研究人员把参与者按体重变化分为三种类型，结果表明，无论属于哪一种类型，周末过后体重都会有所上升。', py:'Yánjiū rényuán bǎ cānyùzhě àn tǐzhòng biànhuà fēnwéi sān zhǒng lèixíng, jiéguǒ biǎomíng, wúlùn shǔyú nǎ yì zhǒng lèixíng, zhōumò guòhòu tǐzhòng dōu huì yǒusuǒ shàngshēng.', goiY:['无论……都…… = dù… đều…','类型 = loại, kiểu','表明 = cho thấy','有所 = có phần, đôi chút'], giai:'无论 + câu hỏi (哪一种) + 都……: dù thế nào kết quả cũng không đổi; 有所上升 = "có tăng đôi chút".'},
  {vi:'Đã biết việc tăng cân cuối tuần chỉ là hiện tượng tạm thời, thì người ăn kiêng không cần quá căng thẳng, điều quan trọng là phải kịp thời điều chỉnh vào các ngày trong tuần.', zh:'既然周末体重上升只是一种临时现象，节食者就没有必要过分紧张，关键是工作日要及时调整。', py:'Jìrán zhōumò tǐzhòng shàngshēng zhǐshì yì zhǒng línshí xiànxiàng, jiéshízhě jiù méiyǒu bìyào guòfèn jǐnzhāng, guānjiàn shì gōngzuòrì yào jíshí tiáozhěng.', goiY:['既然……就…… = đã… thì…','临时 = tạm thời','现象 = hiện tượng','必要 = cần thiết'], giai:'既然 nêu tiền đề đã được xác nhận (khác 如果 là giả thiết), dịch "đã… thì…"; 就 đứng sau chủ ngữ 节食者.'},
  {vi:'Những người muốn giữ dáng thon thả không nên lấy cuối tuần làm cái cớ để buông thả, mà nên áp dụng biện pháp, chẳng hạn hạn chế số lần ăn ngoài, để tránh cân nặng tăng liên tục.', zh:'想要保持苗条的人不应该把周末当作放纵的借口，而应该采取措施，比如控制就餐的次数，以免体重持续上升。', py:'Xiǎng yào bǎochí miáotiáo de rén bù yīnggāi bǎ zhōumò dàngzuò fàngzòng de jièkǒu, ér yīnggāi cǎiqǔ cuòshī, bǐrú kòngzhì jiùcān de cìshù, yǐmiǎn tǐzhòng chíxù shàngshēng.', goiY:['以免 = để tránh','借口 = cái cớ','采取措施 = áp dụng biện pháp'], giai:'把 A 当作 B = "coi A là B"; 以免 đứng đầu vế cuối, nêu điều cần tránh.'},
  {vi:'Nghiên cứu này do nhiều cơ quan phối hợp thực hiện; tuy tổng cộng chỉ có 80 người tham gia, nhưng vì dữ liệu khá đáng tin cậy nên thành quả của nó vẫn đáng để các chuyên gia dinh dưỡng tham khảo.', zh:'该研究由多家机构联合完成，虽然总共只有八十人参与，但由于数据相当可靠，其成果仍值得营养专家参考。', py:'Gāi yánjiū yóu duō jiā jīgòu liánhé wánchéng, suīrán zǒnggòng zhǐyǒu bāshí rén cānyù, dàn yóuyú shùjù xiāngdāng kěkào, qí chéngguǒ réng zhíde yíngyǎng zhuānjiā cānkǎo.', goiY:['虽然……但由于…… = tuy… nhưng do…','联合 = liên kết, phối hợp','可靠 = đáng tin cậy','成果 = thành quả'], giai:'Câu có hai lớp quan hệ: 虽然……但…… (nhượng bộ) lồng với 由于 (nguyên nhân); 其 = 它的 (văn viết), dịch "của nó".'}
];

// ══════════════════════════════════════════
// VIẾT ĐOẠN 80 CHỮ — dạng đề thi HSK 5 phần viết
// ══════════════════════════════════════════
var writingData = {
  words:['节食','营养','明显','借口','采取'],
  prompt:'Dùng 5 từ cho sẵn, viết một đoạn khoảng 80 chữ nêu ý kiến của em về việc ăn kiêng để giảm cân (theo đề 命题写作 của sách: 我支持(或反对)节食减肥的做法).',
  outline:[
    'Câu mở: nêu rõ em ủng hộ hay phản đối ăn kiêng giảm cân.',
    'Thân 1: kể một ví dụ (bản thân / người quen) ăn kiêng — dùng 节食, 明显, 营养.',
    'Thân 2: nêu cách giảm cân em cho là đúng — dùng 采取, 借口.',
    'Kết: rút ra lời khuyên ngắn gọn (只要……就……).'
  ],
  model:{
    zh:'我反对靠节食减肥。去年我姐姐为了变苗条，开始节食，每天只吃一点儿水果。一个月以后，她的体重虽然明显减轻了，但是因为缺乏营养，常常头晕，学习也受到了影响。后来她一停止节食，体重就又升了上去。我觉得减肥不能再找借口不运动，应该采取吃得健康、多运动的方法。只要坚持下去，就一定能成功。',
    py:'Wǒ fǎnduì kào jiéshí jiǎnféi. Qùnián wǒ jiějie wèile biàn miáotiáo, kāishǐ jiéshí, měi tiān zhǐ chī yìdiǎnr shuǐguǒ. Yí ge yuè yǐhòu, tā de tǐzhòng suīrán míngxiǎn jiǎnqīng le, dànshì yīnwèi quēfá yíngyǎng, chángcháng tóu yūn, xuéxí yě shòudàole yǐngxiǎng. Hòulái tā yì tíngzhǐ jiéshí, tǐzhòng jiù yòu shēngle shàngqu. Wǒ juéde jiǎnféi bù néng zài zhǎo jièkǒu bú yùndòng, yīnggāi cǎiqǔ chī de jiànkāng, duō yùndòng de fāngfǎ. Zhǐyào jiānchí xiàqu, jiù yídìng néng chénggōng.',
    vn:'Tôi phản đối giảm cân bằng cách ăn kiêng. Năm ngoái chị tôi muốn có dáng thon nên bắt đầu ăn kiêng, mỗi ngày chỉ ăn một ít trái cây. Một tháng sau, tuy cân nặng của chị giảm rõ rệt, nhưng vì thiếu dinh dưỡng nên chị thường chóng mặt, việc học cũng bị ảnh hưởng. Sau đó chị vừa ngừng ăn kiêng là cân nặng lại tăng lên. Tôi thấy giảm cân thì đừng tìm cớ để không vận động nữa, mà nên áp dụng cách ăn uống lành mạnh, vận động nhiều. Chỉ cần kiên trì thì nhất định sẽ thành công.'
  },
  checklist:[
    'Đã dùng đủ cả 5 từ cho sẵn chưa?',
    'Đủ khoảng 80 chữ chưa (đếm ô vuông, không đếm dấu câu)?',
    '节食 có bị gắn tân ngữ không (sai: 节食晚饭)? 营养 có đứng sau 很 mà thiếu 有 không (sai: 很营养)?',
    '采取 có đi với 措施 / 办法 / 方法 chứ không đi với 意见 / 建议 không?',
    'Mở đoạn lùi vào 2 ô, dấu câu chiếm một ô — đúng quy cách bài thi chưa?'
  ],

  // Đề đúng như câu 99 của đề thi (gửi kèm khi nhờ AI chấm)
  de:'请结合下列词语（要全部使用），写一篇80字左右的短文，谈谈你对节食减肥的看法。',

  // Cách dùng đúng của 5 từ cho sẵn — máy soát lỗi dựa vào đây
  // (re: mẫu câu SAI hay gặp; viết dạng chuỗi RegExp)
  tuDung:[
    {tu:'节食', loai:'động từ', cach:'靠节食减肥 · 开始节食 · 过度节食',
     sai:[{re:'节食(早饭|早餐|午饭|晚饭|晚餐|米饭|肉|甜食|零食)', sua:'节食，不吃晚饭', giai:'节食 là động từ KHÔNG mang tân ngữ. Muốn nói bỏ món gì: 节食，不吃……'},
          {re:'(很|非常|十分|特别)节食', sua:'严格地节食 / 节食节得很厉害', giai:'节食 là động từ, không đứng sau 很/非常.'}]},
    {tu:'营养', loai:'danh từ', cach:'很有营养 · 缺乏营养 · 营养丰富',
     sai:[{re:'(很|非常|十分|特别|太|最)营养', sua:'很有营养', giai:'营养 là DANH TỪ, không đứng ngay sau 很. Phải nói 很有营养.'},
          {re:'没营养的?(很|非常)', sua:'没有营养', giai:'Nói gọn: 这种食物没有营养.', nhe:true}]},
    {tu:'明显', loai:'tính từ', cach:'明显减轻 · 进步很明显 · 明显的变化',
     sai:[{re:'明显的(减轻|提高|增加|下降|减少|变好)', sua:'明显减轻 / 明显地减轻', giai:'明显 đứng trước động từ làm trạng ngữ: 明显减轻 (hoặc 明显地). 明显的 + DANH TỪ: 明显的变化.'},
          {re:'清楚(减轻|提高|增加|下降)', sua:'明显减轻', giai:'Mức thay đổi dễ thấy dùng 明显; 清楚 tả độ rõ của âm thanh, chữ viết, lời nói.', nhe:true}]},
    {tu:'借口', loai:'danh từ / động từ', cach:'找借口 · 一个借口 · 借口有事',
     sai:[{re:'(做|作|说|给)借口', sua:'找借口', giai:'Động từ đi với 借口 là 找: 找借口, 找个借口.'}]},
    {tu:'采取', loai:'động từ', cach:'采取措施 · 采取办法 · 采取……的方法',
     sai:[{re:'采取(意见|建议|想法)', sua:'采纳 / 接受意见', giai:'采取 đi với 措施, 办法, 方法, 行动, 态度. Nhận ý kiến dùng 采纳 hoặc 接受.'},
          {re:'采取(食物|营养|水果|药)', sua:'摄入营养 / 吃药', giai:'采取 không dùng cho việc ăn uống. Nạp dinh dưỡng: 摄入营养.'}]}
  ],

  // Cấu trúc của bài + cấu trúc HSK 4 nên dùng lại — gợi ý khi sửa bài
  cauTruc:[
    {ten:'靠 + cách thức + V', nhan:'靠', vd:'很多人靠节食减肥，但是这种方法并不健康。', khi:'Câu MỞ — nêu hiện tượng.'},
    {ten:'虽然……，但是……', nhan:'虽然', vd:'她的体重虽然明显减轻了，但是因为缺乏营养，常常头晕。', khi:'Nêu kết quả tốt rồi lật lại mặt xấu — thân đoạn.'},
    {ten:'一……就……', nhan:'一', vd:'她一停止节食，体重就又升了上去。', khi:'Kể hệ quả xảy ra ngay (bật cân).'},
    {ten:'A，即 B', nhan:'即', vd:'我建议大家采取健康的减肥方法，即少吃油、多运动。', khi:'Giải thích cụ thể "cách lành mạnh" là gì.'},
    {ten:'……，而非……', nhan:'而非', vd:'减肥的目的是健康，而非只是变苗条。', khi:'Phân biệt mục đích đúng / sai — rất hợp văn nghị luận.'},
    {ten:'只要……，就……', nhan:'只要', vd:'只要坚持下去，就一定能成功。', khi:'Câu KẾT — lời khuyên.'},
    {ten:'不仅……，也……', nhan:'不仅', vd:'运动不仅能减肥，也能让人心情变好。', khi:'Nêu thêm lợi ích.'}
  ],

  // 书写 第一部分 · 完成句子 — xếp các mảnh thành câu (đáp án đúng như đề thi)
  sapXep:[
    {manh:['总共','两百多人','这次','有','来报名'],
     dap:'这次总共有两百多人来报名。',
     vn:'Lần này tổng cộng có hơn hai trăm người đến đăng ký.',
     giai:'Câu 29 sách bài tập. 这次 (thời gian/chủ đề) → phó từ 总共 → 有 + số lượng + người → 来报名.'},
    {manh:['中医的','决定采取','医生','治疗方法'],
     dap:'医生决定采取中医的治疗方法。',
     vn:'Bác sĩ quyết định áp dụng phương pháp điều trị Đông y.',
     giai:'Câu 30 sách bài tập. Chủ ngữ 医生 → 决定采取 → định ngữ 中医的 → danh từ 治疗方法.'},
    {manh:['小刘','经理觉得','办事','不太可靠'],
     dap:'经理觉得小刘办事不太可靠。',
     vn:'Giám đốc thấy Tiểu Lưu làm việc không đáng tin lắm.',
     giai:'Câu 31 sách bài tập. 经理觉得 + mệnh đề (小刘 + 办事 + 不太可靠).'},
    {manh:['联合进行的','这项研究','是','多所医学院校'],
     dap:'这项研究是多所医学院校联合进行的。',
     vn:'Nghiên cứu này do nhiều trường y liên kết thực hiện.',
     giai:'Cấu trúc 是……的 (ôn HSK 3) nhấn mạnh người thực hiện: 是 + chủ thể + 联合进行的.'},
    {manh:['并非','周末体重的','临时变化','真正的体重增加'],
     dap:'周末体重的临时变化并非真正的体重增加。',
     vn:'Thay đổi tạm thời của cân nặng cuối tuần không phải là tăng cân thật sự.',
     giai:'并非 = 并不是, đứng giữa chủ ngữ và tân ngữ như 是.'},
    {manh:['意外地','研究人员','一个新现象','发现了'],
     dap:'研究人员意外地发现了一个新现象。',
     vn:'Các nhà nghiên cứu bất ngờ phát hiện một hiện tượng mới.',
     giai:'Trạng ngữ 意外地 đứng TRƯỚC động từ 发现了, sau chủ ngữ.'}
  ]
};

// ══════════════════════════════════════════
// LUYỆN NÓI — theo 话题讨论 của sách: 你认为节食是减肥的好方法吗？
// ══════════════════════════════════════════
var speakingData = {
  intro:'Bốn câu hỏi mở về chủ đề của bài (节食与减肥). Bấm nút loa nghe câu hỏi, rồi <b>tự ghi âm câu trả lời của mình trước</b> — đừng đọc theo câu mẫu. Cố gắng dùng được từ mới của bài: 节食 · 营养 · 明显 · 波动 · 借口 · 采取 · 措施 · 苗条.',
  questions:[
    {q_zh:'你有过节食减肥的经历吗？结果满意吗？',
     q_vn:'Em đã từng ăn kiêng giảm cân chưa? Kết quả có hài lòng không?',
     hint:'Kể thời gian + cách làm + kết quả, dùng 虽然……但是……',
     sample:'我有过。高二的时候，我每天不吃晚饭。虽然一个月后体重明显减轻了，但是我总觉得很累，一停止节食体重就又升上去了，所以我不太满意。',
     sample_vn:'Có. Hồi lớp 11 ngày nào tôi cũng bỏ bữa tối. Tuy một tháng sau cân nặng giảm rõ rệt nhưng tôi luôn thấy mệt, vừa ngừng ăn kiêng là cân lại tăng, nên tôi không hài lòng lắm.',
     note:'Câu hỏi 1 trong 话题讨论 của sách. Trả lời có câu chuyện cụ thể (thời gian, cách làm, kết quả) sẽ tự nhiên hơn "有/没有".'},
    {q_zh:'对于节食减肥失败的原因，你有什么分析或经验？',
     q_vn:'Về nguyên nhân ăn kiêng giảm cân thất bại, em có phân tích hay kinh nghiệm gì?',
     hint:'Nêu 2 nguyên nhân, dùng 一是……二是…… hoặc 不仅……也……',
     sample:'我觉得原因主要有两个：一是节食的人缺乏营养，身体受不了；二是很多人周末对饮食太放纵，总找借口吃美食。',
     sample_vn:'Tôi thấy nguyên nhân chủ yếu có hai: một là người ăn kiêng thiếu dinh dưỡng, cơ thể không chịu nổi; hai là nhiều người cuối tuần ăn uống quá buông thả, luôn tìm cớ ăn đồ ngon.',
     note:'Câu hỏi 2 của sách. Dùng 分析 và 原因 — đúng cụm 分析原因 trong bảng 词语搭配.'},
    {q_zh:'如果要节食，你建议应该怎么做？',
     q_vn:'Nếu phải ăn kiêng, em khuyên nên làm thế nào?',
     hint:'Đưa 2–3 lời khuyên, dùng 采取……措施 và 只要……就……',
     sample:'我建议采取比较健康的措施，比如少吃油和糖，多吃蔬菜，每天运动半小时。只要坚持下去，就不用饿肚子也能变苗条。',
     sample_vn:'Tôi khuyên nên áp dụng biện pháp lành mạnh hơn, ví dụ ăn ít dầu mỡ và đường, ăn nhiều rau, mỗi ngày vận động nửa tiếng. Chỉ cần kiên trì thì không cần nhịn đói cũng có thể thon thả.',
     note:'Câu hỏi 3 của sách. Lời khuyên nên cụ thể, có ví dụ (比如……).'},
    {q_zh:'课文说周末体重增加是正常现象。你周末的饮食和平时有什么不同？',
     q_vn:'Bài khoá nói cân nặng tăng vào cuối tuần là hiện tượng bình thường. Cuối tuần em ăn uống khác ngày thường thế nào?',
     hint:'So sánh ngày thường / cuối tuần, dùng 一到……就…… hoặc 比',
     sample:'平时我在学校食堂吃饭，比较简单。一到周末，爸爸妈妈就带我外出就餐，吃得比平时多多了，所以周一称体重的时候总会重一点儿。',
     sample_vn:'Ngày thường tôi ăn ở căng tin trường, khá đơn giản. Hễ đến cuối tuần là bố mẹ đưa tôi đi ăn ngoài, ăn nhiều hơn hẳn ngày thường, nên thứ Hai cân lúc nào cũng nặng hơn một chút.',
     note:'Liên hệ bài khoá: 外出就餐, 称体重. Câu so sánh 比 + 多多了 (ôn HSK 3).'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎧 NGHE THEO DẠNG ĐỀ HSK 5 — 听力 第一/第二部分
// Nguyên văn hội thoại lấy từ sách bài tập 《HSK标准教程5上·练习册》bài 16.
// Bốn lựa chọn do soạn lại cho khớp nguyên văn (sách chỉ in chữ cái đáp án).
// ══════════════════════════════════════════════════════════════
var listenExamData = {
  intro: 'Đề HSK 5 phần nghe chỉ phát <b>một lượt</b>. Vì vậy ở đây cũng vậy: bấm nút loa nghe, ' +
         'trả lời ngay, rồi mới mở nguyên văn ra đối chiếu. Đừng mở nguyên văn trước — mở trước là mất tác dụng.',
  source: 'Nguyên văn: 《HSK标准教程5·练习册》第16课 听力',
  items: [
    {n:1,
     lines:[{sp:'女',zh:'一到周一，我就发现这体重又上去不少，真没办法。'},
            {sp:'男',zh:'还说呢，周末又在家做什么好吃的了吧？'}],
     q:'男的是什么意思？',qvn:'Ý người đàn ông là gì?',
     opts:['女的周一吃得太多','女的周末吃多了','女的做饭很好吃','女的应该多运动'],ans:1,
     why:'还说呢 = còn phải nói à (trách nhẹ). Anh đoán cô cuối tuần ở nhà nấu món ngon → ăn nhiều nên thứ Hai tăng cân — đúng hiện tượng trong bài khoá.',
     words:[]},

    {n:2,
     lines:[{sp:'男',zh:'小明吃坏肚子了，又吐又拉。'},
            {sp:'女',zh:'那你赶紧带他去看急诊吧。'}],
     q:'小明怎么了？',qvn:'Tiểu Minh bị làm sao?',
     opts:['发烧了','肚子不舒服','摔伤了','感冒了'],ans:1,
     why:'吃坏肚子 = ăn phải đồ hỏng, đau bụng; 又吐又拉 = vừa nôn vừa đi ngoài. 急诊 (cấp cứu), 吐 là từ của phần 扩展 医务.',
     words:[]},

    {n:3,
     lines:[{sp:'男',zh:'昨天散步碰到你舅舅了。他气色不错，走起路来挺有精神的。'},
            {sp:'女',zh:'得谢谢您介绍了那位专家，吃了他开的汤药，我舅舅现在好多了。'}],
     q:'关于舅舅，可以知道什么？',qvn:'Về người cậu, có thể biết điều gì?',
     opts:['身体好多了','正在住院','是一位专家','不喜欢散步'],ans:0,
     why:'我舅舅现在好多了 + 气色不错，挺有精神 → sức khoẻ đã tốt hơn nhiều. "Chuyên gia" là người khám cho cậu, không phải cậu.',
     words:[]},

    {n:4,
     lines:[{sp:'男',zh:'最近，胃总不舒服，想去人民医院看看，又怕排队人多，挂不上号。'},
            {sp:'女',zh:'你可以预约呀，打个电话或上网都很方便。'}],
     q:'关于挂号，女的建议怎么办？',qvn:'Về việc lấy số khám, người phụ nữ khuyên làm thế nào?',
     opts:['早点儿去排队','去别的医院','提前预约','请别人帮忙'],ans:2,
     why:'你可以预约呀 — đặt hẹn trước qua điện thoại hoặc mạng. 挂号 (lấy số khám) là từ của phần 扩展 医务.',
     words:[]},

    {n:5,
     lines:[{sp:'男',zh:'刘大夫，手术做完都一个星期了，我什么时候可以出院？'},
            {sp:'女',zh:'昨天检查报告出来了，没问题。明天拆线，后天就可以办手续了。'}],
     q:'女的是什么意思？',qvn:'Ý người phụ nữ là gì?',
     opts:['手术还没做','检查报告有问题','男的后天可以出院','男的明天就能出院'],ans:2,
     why:'明天拆线 (mai cắt chỉ), 后天就可以办手续 (ngày kia làm thủ tục ra viện). Bẫy: 明天 là ngày cắt chỉ, không phải ngày ra viện.',
     words:[]},

    {n:6,
     lines:[{sp:'女',zh:'小李，你腿上的伤是怎么弄的？还在流血呢。'},
            {sp:'男',zh:'不要紧，打网球时不小心摔倒了，过几天就好了。'}],
     q:'小李的腿是怎么受伤的？',qvn:'Chân Tiểu Lý bị thương như thế nào?',
     opts:['打网球时摔倒了','跑步时摔倒了','被车撞了','骑车时摔倒了'],ans:0,
     why:'打网球时不小心摔倒了 — nghe rõ tên môn thể thao 网球.',
     words:[]},

    {n:7,
     lines:[{sp:'男',zh:'今天有客户来谈合同，恐怕我接不了孩子了。'},
            {sp:'女',zh:'不行，我下午有课，要4点才能完。'},
            {sp:'男',zh:'今天不是周三吗？他有篮球课，4点50才下课呢。'},
            {sp:'女',zh:'我怎么给忘了，那没问题了，我去吧。'}],
     q:'他们在商量什么事？',qvn:'Họ đang bàn chuyện gì?',
     opts:['谁去接孩子','什么时候开会','孩子上什么课','怎么谈合同'],ans:0,
     why:'Mở đầu: 恐怕我接不了孩子了; kết thúc: 我去吧 → hai người bàn xem ai đi đón con. Lớp bóng rổ chỉ là chi tiết.',
     words:[]},

    {n:8,
     lines:[{sp:'女',zh:'明明，你每天早上刷牙太快了，刷不干净。'},
            {sp:'男',zh:'我赶时间嘛，不然，上课要迟到了。'},
            {sp:'女',zh:'医生说，必须持续三分钟，三个面都刷到，才能保证所有牙齿都刷干净。'},
            {sp:'男',zh:'好吧，下次我注意。'}],
     q:'女的建议男的怎么刷牙？',qvn:'Người phụ nữ khuyên cậu bé đánh răng thế nào?',
     opts:['早上多刷一次','刷得快一点儿','每次刷三分钟','换一个牙刷'],ans:2,
     why:'必须持续三分钟 — phải kéo dài ba phút. Ngược với "刷得快".',
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
    {scene:'Bạn thân than thứ Hai nào cân cũng nặng hơn, sợ mình béo lên.',
     a:{sp:'Bạn',zh:'每到周一，我的体重就会重一点儿，是不是胖了？',vn:'Cứ thứ Hai là cân nặng của tớ lại tăng một chút, có phải tớ béo lên không?'},
     need:['Dùng 而非 hoặc 并非','Giải thích bằng nội dung bài khoá'],
     sample:'别担心，那只是周末的临时变化，而非真正的体重增加。',
     samplePy:'Bié dānxīn, nà zhǐ shì zhōumò de línshí biànhuà, ér fēi zhēnzhèng de tǐzhòng zēngjiā.',
     sampleVn:'Đừng lo, đó chỉ là thay đổi tạm thời của cuối tuần, chứ không phải tăng cân thật.',
     tip:'而非 là cách nói văn viết của 而不是: A，而非 B. Đừng viết 非真正的 thiếu 而 ở giữa hai vế.'},

    {scene:'Cô giáo chủ nhiệm hỏi sau chuyến dã ngoại cả lớp có ai bị ốm không.',
     a:{sp:'Cô',zh:'这次郊游回来，同学们身体都还好吧？',vn:'Đi dã ngoại về, các em đều khoẻ cả chứ?'},
     need:['Dùng 个别','Trả lời lễ phép với cô'],
     sample:'都挺好的，只有个别同学有点儿感冒，已经吃过药了。',
     samplePy:'Dōu tǐng hǎo de, zhǐyǒu gèbié tóngxué yǒudiǎnr gǎnmào, yǐjīng chīguo yào le.',
     sampleVn:'Đều khoẻ ạ, chỉ có vài bạn hơi cảm, đã uống thuốc rồi ạ.',
     tip:'个别 + danh từ (không cần 的): 个别同学. Đây đúng dạng bài 练一练 của sách: 完成对话 dùng 个别.'},

    {scene:'Em trai muốn tự đi làm lại thẻ học sinh hộ chị gái, nhưng trường yêu cầu chính chủ.',
     a:{sp:'Em trai',zh:'姐，你的学生证我帮你去补办吧？',vn:'Chị ơi, thẻ học sinh của chị để em đi làm lại giúp nhé?'},
     need:['Dùng 非……不可','Giải thích lý do'],
     sample:'谢谢你，不过学校说补办学生证非本人去不可。',
     samplePy:'Xièxie nǐ, búguò xuéxiào shuō bǔbàn xuéshengzhèng fēi běnrén qù bùkě.',
     sampleVn:'Cảm ơn em, nhưng trường bảo làm lại thẻ học sinh nhất định phải chính chủ đi.',
     tip:'非 + (người) + V + 不可 = nhất định phải. Đừng quên 不可 ở cuối.'},

    {scene:'Bạn cùng lớp hỏi vì sao gần đây em hiểu bài nhanh thế.',
     a:{sp:'Bạn',zh:'你最近怎么学得这么快？有什么好办法？',vn:'Dạo này sao cậu học nhanh thế? Có cách gì hay không?'},
     need:['Dùng 即','Giải thích "bí quyết" của mình'],
     sample:'我的办法很简单，即不懂就问，当天的问题当天解决。',
     samplePy:'Wǒ de bànfǎ hěn jiǎndān, jí bù dǒng jiù wèn, dàngtiān de wèntí dàngtiān jiějué.',
     sampleVn:'Cách của tớ đơn giản lắm, tức là không hiểu thì hỏi ngay, vấn đề hôm nào giải quyết hôm đó.',
     tip:'即 = 就是, dẫn ra phần giải thích cho 办法. Văn viết hơi trang trọng — nói với bạn có thể thay bằng 就是.'},

    {scene:'Mẹ thấy em bỏ bữa tối mấy hôm liền để giảm cân.',
     a:{sp:'Mẹ',zh:'你怎么又不吃晚饭？这样对身体不好。',vn:'Sao con lại không ăn tối? Thế không tốt cho sức khoẻ đâu.'},
     need:['Dùng 节食 hoặc 营养','Hứa sẽ đổi cách giảm cân'],
     sample:'妈，我知道了。只靠节食会缺乏营养，以后我好好吃饭，多运动。',
     samplePy:'Mā, wǒ zhīdào le. Zhǐ kào jiéshí huì quēfá yíngyǎng, yǐhòu wǒ hǎohāo chīfàn, duō yùndòng.',
     sampleVn:'Mẹ ơi, con biết rồi. Chỉ dựa vào ăn kiêng sẽ thiếu chất, từ giờ con ăn uống đàng hoàng và vận động nhiều hơn.',
     tip:'节食 không mang tân ngữ (không nói 节食晚饭). 缺乏营养 = thiếu chất.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🎯 NÓI SAO CHO HAY — 得体 / 语体
// ══════════════════════════════════════════════════════════════
var registerData = {
  intro: 'Ở đây <b>cả hai câu đều đúng ngữ pháp</b> — không có câu sai. Việc của em là chọn câu <b>PHÙ HỢP HƠN</b> với hoàn cảnh. ' +
         'Đây chính là chỗ HSK 5 khác hẳn HSK 3–4: không còn là đúng/sai, mà là hay/dở.',
  items: [
    {scene:'Em viết báo cáo khoa học nộp cho câu lạc bộ sinh học.',
     a:'研究表明，人们的体重在一周内会上下波动。',b:'我发现大家的体重一个星期里老是一会儿高一会儿低。',better:'a',
     why:'Báo cáo khoa học cần giọng văn viết: 研究表明, 上下波动. Câu b là khẩu ngữ (老是, 一会儿……一会儿……).'},

    {scene:'Em rủ bạn thân tối thứ Bảy đi ăn lẩu.',
     a:'周六晚上咱们一起吃火锅去吧！',b:'周六晚上我们一同外出就餐如何？',better:'a',
     why:'就餐, 如何 là từ trang trọng, hợp thông báo của nhà hàng. Nói với bạn thân dùng 吃火锅去吧 tự nhiên hơn.'},

    {scene:'Thông báo của căng tin trường dán ở cửa.',
     a:'今天中午食堂要打扫，大家别来吃了啊！',b:'今日中午食堂进行清洁，暂停就餐，请同学们谅解。',better:'b',
     why:'Thông báo chính thức: 今日, 暂停就餐, 请……谅解 — gọn và trang trọng. Câu a như nhắn tin.'},

    {scene:'Em giải thích với bà vì sao hôm nay cân nặng hơn hôm qua.',
     a:'奶奶，周末吃得多，体重高一点儿很正常，过两天就下来了。',b:'奶奶，工作日和周末体重的临时变化应该被视为正常现象。',better:'a',
     why:'Nói với bà cần lời lẽ giản dị, dễ hiểu. Câu b nguyên văn sách, đúng nhưng nghe như đọc báo cáo.'},

    {scene:'Em viết đoạn kết bài văn nghị luận "Tôi phản đối ăn kiêng".',
     a:'减肥的目的是健康，而非仅仅是变苗条。',b:'减肥是为了健康，不光是为了瘦。',better:'a',
     why:'Bài văn nghị luận dùng 而非, 仅仅 — cấu trúc văn viết của bài. Câu b đúng nhưng là khẩu ngữ (不光, 瘦).'},

    {scene:'Em muốn nhắn bạn thân đừng viện cớ bỏ buổi chạy bộ sáng mai.',
     a:'明天早上不许找借口，六点准时跑步！',b:'请勿以任何理由缺席明日清晨之跑步活动。',better:'a',
     why:'Với bạn thân dùng giọng thân mật: 不许找借口. Câu b dùng 请勿, 之, 明日清晨 — như văn bản hành chính, nghe buồn cười.'}
  ]
};

// ══════════════════════════════════════════════════════════════
// 🗣️ KỂ LẠI BÀI ĐỌC 复述 — theo đúng bài tập 4 của sách (tr. 152)
// ══════════════════════════════════════════════════════════════
var retellData = {
  intro: 'Đây là bài tập 4 trong giáo trình: <b>根据下面的提示词复述课文内容</b> — kể lại bài đọc bằng lời của chính em, ' +
         'KHÔNG đọc thuộc lòng. Nhìn dàn ý và các từ khoá bên dưới, bấm ghi âm rồi kể một mạch khoảng 1–2 phút.',
  outline: [
    {step:'Phát hiện mới', cue:'医学专家发现，由于营养摄入和饮食模式……，节食者的体重会……', words:['报道','营养','摄入','模式','节食','波动']},
    {step:'Cách nghiên cứu', cue:'总共有80名成年人参与，研究人员把他们分为……', words:['总共','参与','人员','相对','类型','称','可靠','纳入','志愿者','跟踪']},
    {step:'Mô hình chung', cue:'研究成果显示，周末之后……，在工作日……', words:['成果','清晰','即','升','达到']},
    {step:'Người giảm cân & người tăng cân', cue:'体重减轻者……立即下降；而体重增加者……', words:['意外','存在','明显','补偿','立即','趋势','差异']},
    {step:'Người giữ cân & quy luật', cue:'除了个别人以外……，这表明……是正常现象，而非……', words:['联合','个别','表明','临时','现象','非','就餐']},
    {step:'Lời khuyên', cue:'想变苗条的节食者应该……', words:['放纵','苗条','借口','采取','措施']}
  ],
  checklist: [
    'Kể đủ bốn phần như bảng của sách chưa: phát hiện mới → người giảm cân → người giữ cân → người tăng cân (và lời khuyên)?',
    'Có dùng được ít nhất 12 từ mới của bài không?',
    'Có dùng đúng 即 để giải thích "mô hình" và 而非 để nói "không phải tăng cân thật" không?',
    'Có nói được lời khuyên cuối (采取措施, 不要找借口) không?',
    'Có kể bằng LỜI MÌNH, hay đang đọc thuộc nguyên văn?'
  ]
};

// ══════════════════════════════════════════
// SGK · 练习 (Bài tập trong sách, trang 151–152) — trò "Bài tập SGK" ở bước Luyện tập
// ══════════════════════════════════════════
var sgkData = [
  {kieu:'kho', de:'选择合适的词语填空', vn:'Chọn từ thích hợp điền vào chỗ trống', tu:['总共','借口','达到','采取','可靠','参与'],
   cau:[
     {s:'教师要让学生主动＿＿班集体管理，锻炼他们的能力。', dap:['参与']},
     {s:'许多人喜爱喝茶，几乎＿＿不可一日无茶的程度。', dap:['达到']},
     {s:'听声音判断水瓶是否保温的方法并不＿＿。', dap:['可靠']},
     {s:'您好，您＿＿消费了747元。您刷卡还是付现金？', dap:['总共']},
     {s:'他＿＿家里有事，提前离开了会场。', dap:['借口']},
     {s:'我们虽然还不能准确预报地震，但可以＿＿有效措施，最大限度地保护我们的财产。', dap:['采取']}
   ]},
  {kieu:'ab', de:'选择正确答案', vn:'Chọn đáp án đúng',
   cau:[
     {s:'研究发现，父亲对教育子女的＿＿程度越高，孩子就越聪明。', opts:['参与','参加'], ans:0, giai:'参与程度 = mức độ tham gia (góp phần) — cụm cố định. Không nói 参加程度.'},
     {s:'调查结果显示，市民对电子阅读的兴趣＿＿提高了。', opts:['明显','清楚'], ans:0, giai:'Mức thay đổi dễ thấy, đứng trước động từ 提高 → 明显. 清楚 tả độ rõ của âm thanh, hình ảnh, lời nói.'},
     {s:'我本来想完成这个计划以后再去美国，＿＿现在那边有更重要的事，不得不提前去。', opts:['成果','结果'], ans:1, giai:'Đứng đầu vế sau làm liên từ "rốt cuộc, kết cục" → 结果. 成果 chỉ là danh từ, chỉ thành quả tốt.'},
     {s:'关于空气质量问题，现在报纸、网络上相关的＿＿特别多，大家讨论得也很热闹。', opts:['报道','报名'], ans:0, giai:'Bài viết, tin tức trên báo, mạng → 报道. 报名 là đăng ký.'}
   ]}
];
