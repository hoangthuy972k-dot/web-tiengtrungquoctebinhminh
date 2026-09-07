// Đề thi thử HSK 2 – Đề số 6 (đề mẫu chính thức H21006 của Hanban).
// File đề gốc không kèm văn bản nghe, nên phần Nghe chỉ có đáp án (không có lời thoại).
window.EXAM_DATA = {
  id: 'hsk2-test-6',
  level: 'HSK 2',
  title: 'HSK 2 - Test 6',
  code: 'H21006',
  durationSec: 55 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk2-test-6/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk2-test-6.mp3',
      note: 'Bấm nút phát để nghe toàn bộ phần thi Nghe (mỗi câu đọc 2 lần, đúng như đề thi thật). Thanh audio luôn ghim ở đầu phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-pic',
          intro: 'Nghe mỗi câu và phán đoán câu nói có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: false },
            { n: 2, img: 'l1-q2.jpg', answer: true },
            { n: 3, img: 'l1-q3.jpg', answer: true },
            { n: 4, img: 'l1-q4.jpg', answer: false },
            { n: 5, img: 'l1-q5.jpg', answer: false },
            { n: 6, img: 'l1-q6.jpg', answer: false },
            { n: 7, img: 'l1-q7.jpg', answer: false },
            { n: 8, img: 'l1-q8.jpg', answer: true },
            { n: 9, img: 'l1-q9.jpg', answer: true },
            { n: 10, img: 'l1-q10.jpg', answer: true }
          ]
        },
        {
          name: 'Phần 2', range: [11, 20], type: 'pic-match',
          intro: 'Nghe hội thoại và chọn hình phù hợp (A–F).',
          groups: [
            {
              range: [11, 15], pics: { A: 'l2a-A.jpg', B: 'l2a-B.jpg', C: 'l2a-C.jpg', D: 'l2a-D.jpg', E: 'l2a-E.jpg', F: 'l2a-F.jpg' },
              example: 'Ví dụ: 男：你喜欢什么运动？ 女：我最喜欢踢足球。→ D',
              questions: [
                { n: 11, answer: 'B' },
                { n: 12, answer: 'A' },
                { n: 13, answer: 'E' },
                { n: 14, answer: 'F' },
                { n: 15, answer: 'C' }
              ]
            },
            {
              range: [16, 20], pics: { A: 'l2b-A.jpg', B: 'l2b-B.jpg', C: 'l2b-C.jpg', D: 'l2b-D.jpg', E: 'l2b-E.jpg' },
              questions: [
                { n: 16, answer: 'A' },
                { n: 17, answer: 'B' },
                { n: 18, answer: 'E' },
                { n: 19, answer: 'D' },
                { n: 20, answer: 'C' }
              ]
            }
          ]
        },
        {
          name: 'Phần 3', range: [21, 30], type: 'mc',
          intro: 'Nghe hội thoại ngắn và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 21, options: [{ zh: '太贵了', py: 'tài guì le' }, { zh: '不好吃', py: 'bù hǎochī' }, { zh: '已经好了', py: 'yǐjīng hǎo le' }], answer: 'C' },
            { n: 22, options: [{ zh: '找人', py: 'zhǎo rén' }, { zh: '洗衣服', py: 'xǐ yīfu' }, { zh: '看电视', py: 'kàn diànshì' }], answer: 'A' },
            { n: 23, options: [{ zh: '阴', py: 'yīn' }, { zh: '晴', py: 'qíng' }, { zh: '下雨', py: 'xià yǔ' }], answer: 'B' },
            { n: 24, options: [{ zh: '学生', py: 'xuésheng' }, { zh: '妈妈', py: 'māma' }, { zh: '男朋友', py: 'nánpéngyou' }], answer: 'C' },
            { n: 25, options: [{ zh: '写字', py: 'xiě zì' }, { zh: '唱歌', py: 'chànggē' }, { zh: '跳舞', py: 'tiàowǔ' }], answer: 'B' },
            { n: 26, options: [{ zh: '白', py: 'Bái' }, { zh: '雪', py: 'Xuě' }, { zh: '张', py: 'Zhāng' }], answer: 'A' },
            { n: 27, options: [{ zh: '2007年', py: 'èr líng líng qī nián' }, { zh: '2008年', py: 'èr líng líng bā nián' }, { zh: '2009年', py: 'èr líng líng jiǔ nián' }], answer: 'C' },
            { n: 28, options: [{ zh: '800元', py: 'bābǎi yuán' }, { zh: '5000元', py: 'wǔqiān yuán' }, { zh: '5800元', py: 'wǔqiān bābǎi yuán' }], answer: 'C' },
            { n: 29, options: [{ zh: '坐船', py: 'zuò chuán' }, { zh: '坐飞机', py: 'zuò fēijī' }, { zh: '坐出租车', py: 'zuò chūzūchē' }], answer: 'A' },
            { n: 30, options: [{ zh: '医院', py: 'yīyuàn' }, { zh: '学校', py: 'xuéxiào' }, { zh: '饭馆儿', py: 'fànguǎnr' }], answer: 'B' }
          ]
        },
        {
          name: 'Phần 4', range: [31, 35], type: 'mc',
          intro: 'Nghe hội thoại dài và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 31, options: [{ zh: '椅子上', py: 'yǐzi shang' }, { zh: '桌子后面', py: 'zhuōzi hòumiàn' }, { zh: '桌子前面', py: 'zhuōzi qiánmiàn' }], answer: 'B' },
            { n: 32, options: [{ zh: '米饭', py: 'mǐfàn' }, { zh: '水果', py: 'shuǐguǒ' }, { zh: '羊肉', py: 'yángròu' }], answer: 'A' },
            { n: 33, options: [{ zh: '休息', py: 'xiūxi' }, { zh: '旅游', py: 'lǚyóu' }, { zh: '去看学生', py: 'qù kàn xuésheng' }], answer: 'B' },
            { n: 34, options: [{ zh: '哥哥', py: 'gēge' }, { zh: '妹妹', py: 'mèimei' }, { zh: '妻子', py: 'qīzi' }], answer: 'A' },
            { n: 35, options: [{ zh: '没意思', py: 'méi yìsi' }, { zh: '看书太少', py: 'kàn shū tài shǎo' }, { zh: '别看太快', py: 'bié kàn tài kuài' }], answer: 'C' }
          ]
        }
      ]
    },
    {
      id: 'read', name: 'Đọc', icon: 'book',
      parts: [
        {
          name: 'Phần 1', range: [36, 40], type: 'pic-match',
          intro: 'Chọn hình phù hợp với mỗi câu (A–F).',
          groups: [
            {
              range: [36, 40], pics: { A: 'r1-A.jpg', B: 'r1-B.jpg', C: 'r1-C.jpg', D: 'r1-D.jpg', E: 'r1-E.jpg', F: 'r1-F.jpg' },
              example: 'Ví dụ: 每个星期六，我都去打篮球。→ D',
              questions: [
                { n: 36, zh: '这张报纸上有我们公司的介绍。', py: 'Zhè zhāng bàozhǐ shang yǒu wǒmen gōngsī de jièshào.', vn: 'Trên tờ báo này có bài giới thiệu công ty chúng ta.', answer: 'E' },
                { n: 37, zh: '这样看书对眼睛不好。', py: 'Zhèyàng kàn shū duì yǎnjing bù hǎo.', vn: 'Đọc sách như thế này không tốt cho mắt.', answer: 'B' },
                { n: 38, zh: '服务员，你们这儿有什么好吃的菜？', py: 'Fúwùyuán, nǐmen zhèr yǒu shénme hǎochī de cài?', vn: 'Phục vụ, chỗ các bạn có món gì ngon?', answer: 'C' },
                { n: 39, zh: '你也爱跳舞？太好了。', py: 'Nǐ yě ài tiàowǔ? Tài hǎo le.', vn: 'Bạn cũng thích nhảy à? Tuyệt quá.', answer: 'F' },
                { n: 40, zh: '明天上午学校见，再见。', py: 'Míngtiān shàngwǔ xuéxiào jiàn, zàijiàn.', vn: 'Sáng mai gặp ở trường nhé, tạm biệt.', answer: 'A' }
              ]
            }
          ]
        },
        {
          name: 'Phần 2', range: [41, 45], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '大家', py: 'dàjiā' }, { k: 'B', zh: '知道', py: 'zhīdào' }, { k: 'C', zh: '手机', py: 'shǒujī' },
            { k: 'D', zh: '旁边', py: 'pángbiān' }, { k: 'E', zh: '贵', py: 'guì', used: true }, { k: 'F', zh: '离', py: 'lí' }
          ],
          example: 'Ví dụ: 这儿的羊肉很好吃，但是也很（ E ）。',
          questions: [
            { n: 41, zh: '孩子做错了事情，你要让他（　）错在哪儿了。', py: 'Háizi zuòcuòle shìqing, nǐ yào ràng tā (　) cuò zài nǎr le.', vn: 'Con làm sai việc, bạn phải để nó (biết) sai ở đâu.', answer: 'B' },
            { n: 42, zh: '她家（　）公司很近，每天中午都回家吃饭。', py: 'Tā jiā (　) gōngsī hěn jìn, měi tiān zhōngwǔ dōu huí jiā chī fàn.', vn: 'Nhà cô ấy (cách) công ty rất gần, trưa nào cũng về nhà ăn cơm.', answer: 'F' },
            { n: 43, zh: '我住345房间，就在你（　）。', py: 'Wǒ zhù sān sì wǔ fángjiān, jiù zài nǐ (　).', vn: 'Tôi ở phòng 345, ngay (bên cạnh) bạn.', answer: 'D' },
            { n: 44, zh: '他的回答很有意思，（　）都笑了。', py: 'Tā de huídá hěn yǒu yìsi, (　) dōu xiào le.', vn: 'Câu trả lời của anh ấy rất thú vị, (mọi người) đều cười.', answer: 'A' },
            { n: 45, zh: '女：这个（　）还有什么颜色的？\n男：还有红色和黑色的。', py: 'Nǚ: Zhège (　) hái yǒu shénme yánsè de?\nNán: Hái yǒu hóngsè hé hēisè de.', vn: 'Nữ: (Điện thoại) này còn màu gì nữa? / Nam: Còn màu đỏ và màu đen.', answer: 'C' }
          ]
        },
        {
          name: 'Phần 3', range: [46, 50], type: 'judge-text',
          intro: 'Đọc câu và phán đoán câu ★ đúng (✓) hay sai (✗).',
          questions: [
            { n: 46, zh: '我现在在出租车上，很快就到火车站了。你找我什么事？', py: 'Wǒ xiànzài zài chūzūchē shang, hěn kuài jiù dào huǒchēzhàn le. Nǐ zhǎo wǒ shénme shì?', vn: 'Giờ tôi đang trên taxi, sắp đến ga tàu rồi. Bạn tìm tôi có việc gì?', star: '他已经到火车站了。', starPy: 'Tā yǐjīng dào huǒchēzhàn le.', starVn: 'Anh ấy đã đến ga tàu rồi.', answer: false },
            { n: 47, zh: '一年有365天，每天都会有高兴的事，每天找一点儿快乐，我们就会有很多快乐。', py: 'Yì nián yǒu sānbǎi liùshíwǔ tiān, měi tiān dōu huì yǒu gāoxìng de shì, měi tiān zhǎo yìdiǎnr kuàilè, wǒmen jiù huì yǒu hěn duō kuàilè.', vn: 'Một năm có 365 ngày, ngày nào cũng có chuyện vui, mỗi ngày tìm một chút niềm vui, chúng ta sẽ có rất nhiều niềm vui.', star: '快乐就在我们身边。', starPy: 'Kuàilè jiù zài wǒmen shēn biān.', starVn: 'Niềm vui ở ngay bên cạnh chúng ta.', answer: true },
            { n: 48, zh: '那儿有一家新开的商店，我昨天去了一次，衣服很便宜，下班后我们去看看？', py: 'Nàr yǒu yì jiā xīn kāi de shāngdiàn, wǒ zuótiān qùle yí cì, yīfu hěn piányi, xiàbān hòu wǒmen qù kànkan?', vn: 'Ở đó có một cửa hàng mới mở, hôm qua tôi đi một lần, quần áo rất rẻ, tan làm mình đi xem nhé?', star: '她们正在买衣服。', starPy: 'Tāmen zhèngzài mǎi yīfu.', starVn: 'Họ đang mua quần áo.', answer: false },
            { n: 49, zh: '我喜欢喝咖啡，但是今天太晚了，给我来一杯牛奶好了，谢谢。', py: 'Wǒ xǐhuan hē kāfēi, dànshì jīntiān tài wǎn le, gěi wǒ lái yì bēi niúnǎi hǎo le, xièxie.', vn: 'Tôi thích uống cà phê, nhưng hôm nay muộn quá rồi, cho tôi một cốc sữa vậy, cảm ơn.', star: '她要喝咖啡。', starPy: 'Tā yào hē kāfēi.', starVn: 'Cô ấy muốn uống cà phê.', answer: false },
            { n: 50, zh: '对不起，那个人我也不认识，您可以问问小张，他在这儿工作的时间长，认识的人多。', py: 'Duìbuqǐ, nàge rén wǒ yě bú rènshi, nín kěyǐ wènwen Xiǎo Zhāng, tā zài zhèr gōngzuò de shíjiān cháng, rènshi de rén duō.', vn: 'Xin lỗi, người đó tôi cũng không quen, ông có thể hỏi Tiểu Trương, anh ấy làm ở đây lâu, quen nhiều người.', star: '小张可能认识那个人。', starPy: 'Xiǎo Zhāng kěnéng rènshi nàge rén.', starVn: 'Tiểu Trương có thể quen người đó.', answer: true }
          ]
        },
        {
          name: 'Phần 4', range: [51, 60], type: 'sent-match',
          intro: 'Chọn câu trả lời/câu ghép phù hợp với mỗi câu.',
          groups: [
            {
              range: [51, 55],
              options: [
                { k: 'A', zh: '坐公共汽车去，20分钟就能到。', py: 'Zuò gōnggòngqìchē qù, èrshí fēnzhōng jiù néng dào.', vn: 'Đi xe buýt, 20 phút là đến.' },
                { k: 'B', zh: '没问题，您有什么事？', py: 'Méi wèntí, nín yǒu shénme shì?', vn: 'Không vấn đề, ông có việc gì?' },
                { k: 'C', zh: '没关系，慢慢来。', py: 'Méi guānxi, mànman lái.', vn: 'Không sao, từ từ thôi.' },
                { k: 'D', zh: '今天玩儿得很高兴。谢谢。', py: 'Jīntiān wánr de hěn gāoxìng. Xièxie.', vn: 'Hôm nay chơi rất vui. Cảm ơn.' },
                { k: 'E', zh: '他在哪儿呢？你看见他了吗？', py: 'Tā zài nǎr ne? Nǐ kànjiàn tā le ma?', vn: 'Anh ấy ở đâu? Bạn thấy anh ấy không?', used: true },
                { k: 'F', zh: '那打电话告诉他别去踢足球了，明天再去。', py: 'Nà dǎ diànhuà gàosu tā bié qù tī zúqiú le, míngtiān zài qù.', vn: 'Vậy gọi điện bảo anh ấy đừng đi đá bóng nữa, mai đi.' }
              ],
              example: 'Ví dụ: 他还在教室里学习。→ E',
              questions: [
                { n: 51, zh: '不客气，欢迎您下次再来。', py: 'Bú kèqi, huānyíng nín xià cì zài lái.', vn: 'Không có gì, hoan nghênh ông lần sau lại đến.', answer: 'D' },
                { n: 52, zh: '一个星期了，弟弟还没学会游泳呢。', py: 'Yí ge xīngqī le, dìdi hái méi xuéhuì yóuyǒng ne.', vn: 'Một tuần rồi, em trai vẫn chưa học được bơi.', answer: 'C' },
                { n: 53, zh: '从这儿到机场远吗？', py: 'Cóng zhèr dào jīchǎng yuǎn ma?', vn: 'Từ đây đến sân bay có xa không?', answer: 'A' },
                { n: 54, zh: '我觉得今天天气不太好，很可能会下雨。', py: 'Wǒ juéde jīntiān tiānqì bú tài hǎo, hěn kěnéng huì xià yǔ.', vn: 'Tôi thấy hôm nay thời tiết không tốt lắm, rất có thể sẽ mưa.', answer: 'F' },
                { n: 55, zh: '喂？请问，你会说汉语吗？', py: 'Wéi? Qǐng wèn, nǐ huì shuō Hànyǔ ma?', vn: 'Alô? Xin hỏi, bạn biết nói tiếng Trung không?', answer: 'B' }
              ]
            },
            {
              range: [56, 60],
              options: [
                { k: 'A', zh: '别睡了，起床，我们去跑步。', py: 'Bié shuì le, qǐchuáng, wǒmen qù pǎobù.', vn: 'Đừng ngủ nữa, dậy đi, mình đi chạy bộ.' },
                { k: 'B', zh: '天气这么热，我们吃块儿西瓜吧。', py: 'Tiānqì zhème rè, wǒmen chī kuàir xīguā ba.', vn: 'Trời nóng thế này, mình ăn miếng dưa hấu đi.' },
                { k: 'C', zh: '那是我丈夫和女儿，我们准备一起去看电影。', py: 'Nà shì wǒ zhàngfu hé nǚ\'ér, wǒmen zhǔnbèi yìqǐ qù kàn diànyǐng.', vn: 'Đó là chồng và con gái tôi, chúng tôi định cùng đi xem phim.' },
                { k: 'D', zh: '这门课什么时候考试？', py: 'Zhè mén kè shénme shíhou kǎoshì?', vn: 'Môn này khi nào thi?' },
                { k: 'E', zh: '您是第一次来中国吗？', py: 'Nín shì dì-yī cì lái Zhōngguó ma?', vn: 'Ông đến Trung Quốc lần đầu à?' }
              ],
              questions: [
                { n: 56, zh: '不，我去年去过北京。', py: 'Bù, wǒ qùnián qùguo Běijīng.', vn: 'Không, năm ngoái tôi từng đến Bắc Kinh.', answer: 'E' },
                { n: 57, zh: '太冷了，明天再说吧。', py: 'Tài lěng le, míngtiān zài shuō ba.', vn: 'Lạnh quá, mai tính tiếp.', answer: 'A' },
                { n: 58, zh: '外面有两个人，是在等你吗？', py: 'Wàimiàn yǒu liǎng ge rén, shì zài děng nǐ ma?', vn: 'Bên ngoài có hai người, đang đợi bạn à?', answer: 'C' },
                { n: 59, zh: '听说是6月7号。', py: 'Tīngshuō shì liù yuè qī hào.', vn: 'Nghe nói là ngày 7 tháng 6.', answer: 'D' },
                { n: 60, zh: '你们要不要喝点儿茶？', py: 'Nǐmen yàobuyào hē diǎnr chá?', vn: 'Các bạn có muốn uống chút trà không?', answer: 'B' }
              ]
            }
          ]
        }
      ]
    }
  ]
};
