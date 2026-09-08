// Đề thi thử HSK 2 – Đề số 10 (đề thi thật H21332 của Hanban).
// Đáp án phần Nghe lấy từ bảng đáp án chính thức; đề gốc không kèm văn bản nghe.
window.EXAM_DATA = {
  id: 'hsk2-test-10',
  level: 'HSK 2',
  title: 'HSK 2 - Test 10',
  code: 'H21332',
  durationSec: 55 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk2-test-10/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk2-test-10.mp3',
      note: 'Bấm nút phát để nghe toàn bộ phần thi Nghe (mỗi câu đọc 2 lần, đúng như đề thi thật). Thanh audio luôn ghim ở đầu phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-pic',
          intro: 'Nghe mỗi câu và phán đoán câu nói có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: true },
            { n: 2, img: 'l1-q2.jpg', answer: false },
            { n: 3, img: 'l1-q3.jpg', answer: false },
            { n: 4, img: 'l1-q4.jpg', answer: true },
            { n: 5, img: 'l1-q5.jpg', answer: false },
            { n: 6, img: 'l1-q6.jpg', answer: false },
            { n: 7, img: 'l1-q7.jpg', answer: true },
            { n: 8, img: 'l1-q8.jpg', answer: true },
            { n: 9, img: 'l1-q9.jpg', answer: false },
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
                { n: 11, answer: 'F' },
                { n: 12, answer: 'E' },
                { n: 13, answer: 'B' },
                { n: 14, answer: 'C' },
                { n: 15, answer: 'A' }
              ]
            },
            {
              range: [16, 20], pics: { A: 'l2b-A.jpg', B: 'l2b-B.jpg', C: 'l2b-C.jpg', D: 'l2b-D.jpg', E: 'l2b-E.jpg' },
              questions: [
                { n: 16, answer: 'B' },
                { n: 17, answer: 'E' },
                { n: 18, answer: 'C' },
                { n: 19, answer: 'D' },
                { n: 20, answer: 'A' }
              ]
            }
          ]
        },
        {
          name: 'Phần 3', range: [21, 30], type: 'mc',
          intro: 'Nghe hội thoại ngắn và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 21, options: [{ zh: '看报纸', py: 'kàn bàozhǐ' }, { zh: '洗水果', py: 'xǐ shuǐguǒ' }, { zh: '玩儿电脑', py: 'wánr diànnǎo' }], answer: 'A' },
            { n: 22, options: [{ zh: '别说话', py: 'bié shuōhuà' }, { zh: '题很少', py: 'tí hěn shǎo' }, { zh: '准备好了', py: 'zhǔnbèihǎo le' }], answer: 'C' },
            { n: 23, options: [{ zh: '快乐', py: 'kuàilè' }, { zh: '身体好', py: 'shēntǐ hǎo' }, { zh: '爱读书', py: 'ài dú shū' }], answer: 'A' },
            { n: 24, options: [{ zh: '女医生', py: 'nǚ yīshēng' }, { zh: '小学生', py: 'xiǎoxuéshēng' }, { zh: '新同学', py: 'xīn tóngxué' }], answer: 'A' },
            { n: 25, options: [{ zh: '下雨了', py: 'xià yǔ le' }, { zh: '起晚了', py: 'qǐwǎn le' }, { zh: '天气太热', py: 'tiānqì tài rè' }], answer: 'B' },
            { n: 26, options: [{ zh: '商店', py: 'shāngdiàn' }, { zh: '医院', py: 'yīyuàn' }, { zh: '火车站', py: 'huǒchēzhàn' }], answer: 'A' },
            { n: 27, options: [{ zh: '猫', py: 'māo' }, { zh: '铅笔', py: 'qiānbǐ' }, { zh: '手表', py: 'shǒubiǎo' }], answer: 'B' },
            { n: 28, options: [{ zh: '今天', py: 'jīntiān' }, { zh: '明天', py: 'míngtiān' }, { zh: '后天', py: 'hòutiān' }], answer: 'B' },
            { n: 29, options: [{ zh: '56个', py: 'wǔshíliù ge' }, { zh: '500多', py: 'wǔbǎi duō' }, { zh: '1500多', py: 'yìqiān wǔbǎi duō' }], answer: 'B' },
            { n: 30, options: [{ zh: '茶馆儿', py: 'cháguǎnr' }, { zh: '电影院', py: 'diànyǐngyuàn' }, { zh: '咖啡馆儿', py: 'kāfēiguǎnr' }], answer: 'C' }
          ]
        },
        {
          name: 'Phần 4', range: [31, 35], type: 'mc',
          intro: 'Nghe hội thoại dài và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 31, options: [{ zh: '听不懂', py: 'tīngbudǒng' }, { zh: '考试多', py: 'kǎoshì duō' }, { zh: '很有意思', py: 'hěn yǒuyìsi' }], answer: 'C' },
            { n: 32, options: [{ zh: '米饭', py: 'mǐfàn' }, { zh: '鸡蛋', py: 'jīdàn' }, { zh: '面条儿', py: 'miàntiáor' }], answer: 'C' },
            { n: 33, options: [{ zh: '4天前', py: 'sì tiān qián' }, { zh: '6月2号', py: 'liù yuè èr hào' }, { zh: '下星期日', py: 'xià xīngqīrì' }], answer: 'B' },
            { n: 34, options: [{ zh: '他同学', py: 'tā tóngxué' }, { zh: '他弟弟', py: 'tā dìdi' }, { zh: '他妻子', py: 'tā qīzi' }], answer: 'A' },
            { n: 35, options: [{ zh: '走路', py: 'zǒulù' }, { zh: '开车', py: 'kāi chē' }, { zh: '坐飞机', py: 'zuò fēijī' }], answer: 'C' }
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
                { n: 36, zh: '儿子，跑慢点儿，等等我。', py: 'Érzi, pǎo màn diǎnr, děngdeng wǒ.', vn: 'Con trai, chạy chậm thôi, đợi bố với.', answer: 'B' },
                { n: 37, zh: '你怎么不进教室？想什么呢？', py: 'Nǐ zěnme bú jìn jiàoshì? Xiǎng shénme ne?', vn: 'Sao em không vào lớp? Đang nghĩ gì thế?', answer: 'A' },
                { n: 38, zh: '这件衣服能不能再便宜一些？', py: 'Zhè jiàn yīfu néngbunéng zài piányi yìxiē?', vn: 'Chiếc áo này có thể rẻ thêm chút được không?', answer: 'F' },
                { n: 39, zh: '右边高了，妈妈，你那边再往下一点儿。', py: 'Yòubian gāo le, māma, nǐ nàbian zài wǎng xià yìdiǎnr.', vn: 'Bên phải cao rồi, mẹ ơi, bên mẹ hạ xuống chút nữa.', answer: 'C' },
                { n: 40, zh: '这个药饭后吃，每天吃三次。', py: 'Zhège yào fàn hòu chī, měi tiān chī sān cì.', vn: 'Thuốc này uống sau bữa ăn, mỗi ngày ba lần.', answer: 'E' }
              ]
            }
          ]
        },
        {
          name: 'Phần 2', range: [41, 45], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '帮助', py: 'bāngzhù' }, { k: 'B', zh: '两', py: 'liǎng' }, { k: 'C', zh: '真', py: 'zhēn' },
            { k: 'D', zh: '懂', py: 'dǒng' }, { k: 'E', zh: '贵', py: 'guì', used: true }, { k: 'F', zh: '时间', py: 'shíjiān' }
          ],
          example: 'Ví dụ: 这儿的羊肉很好吃，但是也很（ E ）。',
          questions: [
            { n: 41, zh: '你快看，前面那个小狗（　）好玩儿。', py: 'Nǐ kuài kàn, qiánmiàn nàge xiǎo gǒu (　) hǎowánr.', vn: 'Mau nhìn kìa, con chó nhỏ phía trước (thật) đáng yêu.', answer: 'C' },
            { n: 42, zh: '要学会对（　）过你的人说"谢谢"。', py: 'Yào xuéhuì duì (　) guo nǐ de rén shuō "xièxie".', vn: 'Phải biết nói "cảm ơn" với người từng (giúp đỡ) mình.', answer: 'A' },
            { n: 43, zh: '没关系，有不（　）的问题，你可以再来问我。', py: 'Méiguānxi, yǒu bù (　) de wèntí, nǐ kěyǐ zài lái wèn wǒ.', vn: 'Không sao, có câu nào không (hiểu), bạn cứ đến hỏi tôi.', answer: 'D' },
            { n: 44, zh: '从我们学校到机场，坐出租车要（　）个多小时。', py: 'Cóng wǒmen xuéxiào dào jīchǎng, zuò chūzūchē yào (　) ge duō xiǎoshí.', vn: 'Từ trường chúng tôi đến sân bay, đi taxi mất hơn (hai) tiếng.', answer: 'B' },
            { n: 45, zh: '女：电视上说你那儿明天可能会有大雪。\n男：太好了！我们这儿很长（　）没有下雪了。', py: 'Nǚ: Diànshì shàng shuō nǐ nàr míngtiān kěnéng huì yǒu dà xuě.\nNán: Tài hǎo le! Wǒmen zhèr hěn cháng (　) méiyǒu xià xuě le.', vn: 'Nữ: Ti vi nói chỗ anh mai có thể có tuyết lớn. / Nam: Tuyệt quá! Chỗ tôi rất lâu (thời gian) rồi không có tuyết.', answer: 'F' }
          ]
        },
        {
          name: 'Phần 3', range: [46, 50], type: 'judge-text',
          intro: 'Đọc câu và phán đoán câu ★ đúng (✓) hay sai (✗).',
          questions: [
            { n: 46, zh: '这个房间是不错，但我一个人住大了点儿，也贵了些。我再看看别的吧。', py: 'Zhège fángjiān shì búcuò, dàn wǒ yí ge rén zhù dàle diǎnr, yě guìle xiē. Wǒ zài kànkan bié de ba.', vn: 'Phòng này thì tốt, nhưng tôi ở một mình thì hơi rộng, cũng hơi đắt. Tôi xem thêm phòng khác vậy.', star: '那个房间非常小。', starPy: 'Nàge fángjiān fēicháng xiǎo.', starVn: 'Phòng đó rất nhỏ.', answer: false },
            { n: 47, zh: '白老师说的那本汉语书，我跑了好几家书店都没有找到，你知道哪儿有卖的吗？', py: 'Bái lǎoshī shuō de nà běn Hànyǔ shū, wǒ pǎole hǎo jǐ jiā shūdiàn dōu méiyǒu zhǎodào, nǐ zhīdào nǎr yǒu mài de ma?', vn: 'Cuốn sách tiếng Trung thầy Bạch nói, tôi chạy mấy hiệu sách đều không tìm thấy, bạn biết chỗ nào bán không?', star: '他还没买到那本书。', starPy: 'Tā hái méi mǎidào nà běn shū.', starVn: 'Anh ấy vẫn chưa mua được cuốn sách đó.', answer: true },
            { n: 48, zh: '给你们介绍一下，这是我弟弟，比我小三岁，现在在医院上班。', py: 'Gěi nǐmen jièshào yíxià, zhè shì wǒ dìdi, bǐ wǒ xiǎo sān suì, xiànzài zài yīyuàn shàngbān.', vn: 'Giới thiệu với mọi người, đây là em trai tôi, kém tôi ba tuổi, hiện làm việc ở bệnh viện.', star: '他弟弟已经工作了。', starPy: 'Tā dìdi yǐjīng gōngzuò le.', starVn: 'Em trai anh ấy đã đi làm rồi.', answer: true },
            { n: 49, zh: '小李说他很快就忙完了，希望大家能等他几分钟，他会来宾馆找我们的。', py: 'Xiǎo Lǐ shuō tā hěn kuài jiù mángwán le, xīwàng dàjiā néng děng tā jǐ fēnzhōng, tā huì lái bīnguǎn zhǎo wǒmen de.', vn: 'Tiểu Lý nói anh ấy sắp xong việc, mong mọi người đợi vài phút, anh ấy sẽ đến khách sạn tìm chúng ta.', star: '小李让大家等着他。', starPy: 'Xiǎo Lǐ ràng dàjiā děngzhe tā.', starVn: 'Tiểu Lý bảo mọi người đợi mình.', answer: true },
            { n: 50, zh: '我是第一次来这儿，所以不知道这些事，谢谢您告诉我。', py: 'Wǒ shì dì-yī cì lái zhèr, suǒyǐ bù zhīdào zhèxiē shì, xièxie nín gàosu wǒ.', vn: 'Tôi lần đầu đến đây nên không biết những chuyện này, cảm ơn ông đã nói cho tôi.', star: '他去年来过这儿。', starPy: 'Tā qùnián láiguo zhèr.', starVn: 'Năm ngoái anh ấy từng đến đây.', answer: false }
          ]
        },
        {
          name: 'Phần 4', range: [51, 60], type: 'sent-match',
          intro: 'Chọn câu trả lời/câu ghép phù hợp với mỗi câu.',
          groups: [
            {
              range: [51, 55],
              options: [
                { k: 'A', zh: '你出门要多穿点儿衣服。', py: 'Nǐ chū mén yào duō chuān diǎnr yīfu.', vn: 'Ra ngoài bạn phải mặc thêm áo.' },
                { k: 'B', zh: '苹果洗好了，来吃一个吧。', py: 'Píngguǒ xǐhǎo le, lái chī yí ge ba.', vn: 'Táo rửa xong rồi, ăn một quả đi.' },
                { k: 'C', zh: '109块，有红和黑两个颜色。', py: 'Yìbǎi líng jiǔ kuài, yǒu hóng hé hēi liǎng ge yánsè.', vn: '109 tệ, có hai màu đỏ và đen.' },
                { k: 'D', zh: '快起床，你今天还要去上游泳课呢。', py: 'Kuài qǐchuáng, nǐ jīntiān hái yào qù shàng yóuyǒng kè ne.', vn: 'Mau dậy đi, hôm nay bạn còn phải đi học bơi.' },
                { k: 'E', zh: '他在哪儿呢？你看见他了吗？', py: 'Tā zài nǎr ne? Nǐ kànjiàn tā le ma?', vn: 'Anh ấy ở đâu? Bạn thấy anh ấy không?', used: true },
                { k: 'F', zh: '姐姐在说她旅游时见到的一个很有意思的人。', py: 'Jiějie zài shuō tā lǚyóu shí jiàndào de yí ge hěn yǒuyìsi de rén.', vn: 'Chị đang kể về một người rất thú vị chị gặp khi đi du lịch.' }
              ],
              example: 'Ví dụ: 他还在教室里学习。→ E',
              questions: [
                { n: 51, zh: '虽然晴天了，但外面还很冷。', py: 'Suīrán qíngtiān le, dàn wàimiàn hái hěn lěng.', vn: 'Tuy trời nắng rồi nhưng bên ngoài vẫn rất lạnh.', answer: 'A' },
                { n: 52, zh: '还有时间，我再睡5分钟。', py: 'Hái yǒu shíjiān, wǒ zài shuì wǔ fēnzhōng.', vn: 'Vẫn còn thời gian, tôi ngủ thêm 5 phút.', answer: 'D' },
                { n: 53, zh: '请问，这个椅子怎么卖？', py: 'Qǐngwèn, zhège yǐzi zěnme mài?', vn: 'Xin hỏi, cái ghế này bán thế nào?', answer: 'C' },
                { n: 54, zh: '谢谢，那我不客气了。', py: 'Xièxie, nà wǒ bú kèqi le.', vn: 'Cảm ơn, vậy tôi không khách sáo nữa.', answer: 'B' },
                { n: 55, zh: '什么事情这么好笑？', py: 'Shénme shìqing zhème hǎoxiào?', vn: 'Chuyện gì mà buồn cười thế?', answer: 'F' }
              ]
            },
            {
              range: [56, 60],
              options: [
                { k: 'A', zh: '他没说他什么时候回来。', py: 'Tā méi shuō tā shénme shíhou huílai.', vn: 'Anh ấy không nói bao giờ về.' },
                { k: 'B', zh: '我也不知道，我们去问问张老师吧。', py: 'Wǒ yě bù zhīdào, wǒmen qù wènwen Zhāng lǎoshī ba.', vn: 'Tôi cũng không biết, mình đi hỏi thầy Trương đi.' },
                { k: 'C', zh: '你家离公司远吗？', py: 'Nǐ jiā lí gōngsī yuǎn ma?', vn: 'Nhà bạn cách công ty có xa không?' },
                { k: 'D', zh: '下次吧，我今天累了，想早些休息。', py: 'Xià cì ba, wǒ jīntiān lèi le, xiǎng zǎo xiē xiūxi.', vn: 'Lần sau nhé, hôm nay tôi mệt rồi, muốn nghỉ sớm.' },
                { k: 'E', zh: '我们都觉得那儿非常漂亮。', py: 'Wǒmen dōu juéde nàr fēicháng piàoliang.', vn: 'Chúng tôi đều thấy nơi đó rất đẹp.' }
              ],
              questions: [
                { n: 56, zh: '这个字是"大"的意思吗？', py: 'Zhège zì shì "dà" de yìsi ma?', vn: 'Chữ này nghĩa là "to" à?', answer: 'B' },
                { n: 57, zh: '对不起，张先生有事出去了。', py: 'Duìbuqǐ, Zhāng xiānsheng yǒu shì chūqu le.', vn: 'Xin lỗi, ông Trương có việc ra ngoài rồi.', answer: 'A' },
                { n: 58, zh: '晚上一起去跳舞，怎么样？', py: 'Wǎnshang yìqǐ qù tiàowǔ, zěnmeyàng?', vn: 'Tối cùng đi nhảy nhé, thế nào?', answer: 'D' },
                { n: 59, zh: '我和我丈夫2008年去过一次北京。', py: 'Wǒ hé wǒ zhàngfu èr líng líng bā nián qùguo yí cì Běijīng.', vn: 'Tôi và chồng năm 2008 từng đến Bắc Kinh một lần.', answer: 'E' },
                { n: 60, zh: '很近，我每天都走着去上班。', py: 'Hěn jìn, wǒ měi tiān dōu zǒuzhe qù shàngbān.', vn: 'Rất gần, ngày nào tôi cũng đi bộ đi làm.', answer: 'C' }
              ]
            }
          ]
        }
      ]
    }
  ]
};
