// Đề thi thử HSK 2 – Đề số 8 (đề thi thật H21330 của Hanban).
// Đáp án phần Nghe lấy từ bảng đáp án chính thức; đề gốc không kèm văn bản nghe.
window.EXAM_DATA = {
  id: 'hsk2-test-8',
  level: 'HSK 2',
  title: 'HSK 2 - Test 8',
  code: 'H21330',
  durationSec: 55 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk2-test-8/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk2-test-8.mp3',
      note: 'Bấm nút phát để nghe toàn bộ phần thi Nghe (mỗi câu đọc 2 lần, đúng như đề thi thật). Thanh audio luôn ghim ở đầu phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-pic',
          intro: 'Nghe mỗi câu và phán đoán câu nói có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: true },
            { n: 2, img: 'l1-q2.jpg', answer: true },
            { n: 3, img: 'l1-q3.jpg', answer: false },
            { n: 4, img: 'l1-q4.jpg', answer: true },
            { n: 5, img: 'l1-q5.jpg', answer: false },
            { n: 6, img: 'l1-q6.jpg', answer: false },
            { n: 7, img: 'l1-q7.jpg', answer: true },
            { n: 8, img: 'l1-q8.jpg', answer: false },
            { n: 9, img: 'l1-q9.jpg', answer: true },
            { n: 10, img: 'l1-q10.jpg', answer: false }
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
                { n: 12, answer: 'A' },
                { n: 13, answer: 'C' },
                { n: 14, answer: 'B' },
                { n: 15, answer: 'E' }
              ]
            },
            {
              range: [16, 20], pics: { A: 'l2b-A.jpg', B: 'l2b-B.jpg', C: 'l2b-C.jpg', D: 'l2b-D.jpg', E: 'l2b-E.jpg' },
              questions: [
                { n: 16, answer: 'A' },
                { n: 17, answer: 'D' },
                { n: 18, answer: 'C' },
                { n: 19, answer: 'E' },
                { n: 20, answer: 'B' }
              ]
            }
          ]
        },
        {
          name: 'Phần 3', range: [21, 30], type: 'mc',
          intro: 'Nghe hội thoại ngắn và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 21, options: [{ zh: '游泳', py: 'yóuyǒng' }, { zh: '踢足球', py: 'tī zúqiú' }, { zh: '买手表', py: 'mǎi shǒubiǎo' }], answer: 'A' },
            { n: 22, options: [{ zh: '看不懂', py: 'kànbudǒng' }, { zh: '不爱读', py: 'bú ài dú' }, { zh: '太忙了', py: 'tài máng le' }], answer: 'C' },
            { n: 23, options: [{ zh: '很热', py: 'hěn rè' }, { zh: '天阴了', py: 'tiān yīn le' }, { zh: '天晴了', py: 'tiān qíng le' }], answer: 'B' },
            { n: 24, options: [{ zh: '妈妈', py: 'māma' }, { zh: '孩子', py: 'háizi' }, { zh: '同学', py: 'tóngxué' }], answer: 'B' },
            { n: 25, options: [{ zh: '机场', py: 'jīchǎng' }, { zh: '汽车站', py: 'qìchēzhàn' }, { zh: '火车站', py: 'huǒchēzhàn' }], answer: 'C' },
            { n: 26, options: [{ zh: '很大', py: 'hěn dà' }, { zh: '很好吃', py: 'hěn hǎochī' }, { zh: '颜色不好', py: 'yánsè bù hǎo' }], answer: 'B' },
            { n: 27, options: [{ zh: '铅笔', py: 'qiānbǐ' }, { zh: '报纸', py: 'bàozhǐ' }, { zh: '面条儿', py: 'miàntiáor' }], answer: 'B' },
            { n: 28, options: [{ zh: '多休息', py: 'duō xiūxi' }, { zh: '少喝茶', py: 'shǎo hē chá' }, { zh: '多喝牛奶', py: 'duō hē niúnǎi' }], answer: 'A' },
            { n: 29, options: [{ zh: '走路', py: 'zǒulù' }, { zh: '开车', py: 'kāi chē' }, { zh: '坐出租车', py: 'zuò chūzūchē' }], answer: 'C' },
            { n: 30, options: [{ zh: '手机号', py: 'shǒujī hào' }, { zh: '有多少人', py: 'yǒu duōshao rén' }, { zh: '几点回家', py: 'jǐ diǎn huí jiā' }], answer: 'A' }
          ]
        },
        {
          name: 'Phần 4', range: [31, 35], type: 'mc',
          intro: 'Nghe hội thoại dài và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 31, options: [{ zh: '星期一', py: 'xīngqīyī' }, { zh: '星期六', py: 'xīngqīliù' }, { zh: '星期日', py: 'xīngqīrì' }], answer: 'C' },
            { n: 32, options: [{ zh: '宾馆', py: 'bīnguǎn' }, { zh: '商店', py: 'shāngdiàn' }, { zh: '教室', py: 'jiàoshì' }], answer: 'A' },
            { n: 33, options: [{ zh: '太小了', py: 'tài xiǎo le' }, { zh: '很不错', py: 'hěn búcuò' }, { zh: '东西贵', py: 'dōngxi guì' }], answer: 'B' },
            { n: 34, options: [{ zh: '弟弟', py: 'dìdi' }, { zh: '女儿', py: 'nǚ\'ér' }, { zh: '白老师', py: 'Bái lǎoshī' }], answer: 'C' },
            { n: 35, options: [{ zh: '跳舞', py: 'tiàowǔ' }, { zh: '听歌', py: 'tīng gē' }, { zh: '打电话', py: 'dǎ diànhuà' }], answer: 'A' }
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
                { n: 36, zh: '喂，姐，我下飞机了，你在哪儿？', py: 'Wéi, jiě, wǒ xià fēijī le, nǐ zài nǎr?', vn: 'Alô, chị, em xuống máy bay rồi, chị ở đâu?', answer: 'C' },
                { n: 37, zh: '票我都买好了，给你。', py: 'Piào wǒ dōu mǎihǎo le, gěi nǐ.', vn: 'Vé tôi mua xong hết rồi, đưa bạn.', answer: 'A' },
                { n: 38, zh: '你都看了几个小时了？快去睡觉吧。', py: 'Nǐ dōu kànle jǐ ge xiǎoshí le? Kuài qù shuìjiào ba.', vn: 'Anh xem mấy tiếng rồi đấy? Mau đi ngủ đi.', answer: 'E' },
                { n: 39, zh: '身体怎么样？什么时候能出院？', py: 'Shēntǐ zěnmeyàng? Shénme shíhou néng chūyuàn?', vn: 'Sức khoẻ thế nào? Bao giờ được xuất viện?', answer: 'F' },
                { n: 40, zh: '你坐着休息一下，我去洗衣服。', py: 'Nǐ zuòzhe xiūxi yíxià, wǒ qù xǐ yīfu.', vn: 'Em ngồi nghỉ một chút, anh đi giặt quần áo.', answer: 'B' }
              ]
            }
          ]
        },
        {
          name: 'Phần 2', range: [41, 45], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '一起', py: 'yìqǐ' }, { k: 'B', zh: '次', py: 'cì' }, { k: 'C', zh: '题', py: 'tí' },
            { k: 'D', zh: '对', py: 'duì' }, { k: 'E', zh: '贵', py: 'guì', used: true }, { k: 'F', zh: '可以', py: 'kěyǐ' }
          ],
          example: 'Ví dụ: 这儿的羊肉很好吃，但是也很（ E ）。',
          questions: [
            { n: 41, zh: '准备好了吗？我们（　）走了吗？', py: 'Zhǔnbèihǎo le ma? Wǒmen (　) zǒu le ma?', vn: 'Chuẩn bị xong chưa? Chúng ta (có thể) đi chưa?', answer: 'F' },
            { n: 42, zh: '和她在（　）的时候，他觉得很快乐。', py: 'Hé tā zài (　) de shíhou, tā juéde hěn kuàilè.', vn: 'Khi ở (cùng) cô ấy, anh ấy thấy rất vui.', answer: 'A' },
            { n: 43, zh: '你也是第一（　）来中国旅游？', py: 'Nǐ yě shì dì-yī (　) lái Zhōngguó lǚyóu?', vn: 'Bạn cũng là (lần) đầu đến Trung Quốc du lịch à?', answer: 'B' },
            { n: 44, zh: '长时间玩儿电脑（　）眼睛不好。', py: 'Cháng shíjiān wánr diànnǎo (　) yǎnjing bù hǎo.', vn: 'Chơi máy tính lâu không tốt (cho) mắt.', answer: 'D' },
            { n: 45, zh: '女：谢谢你，这个（　）我现在会做了。\n男：不客气，有不会的再来问我。', py: 'Nǚ: Xièxie nǐ, zhège (　) wǒ xiànzài huì zuò le.\nNán: Bú kèqi, yǒu bú huì de zài lái wèn wǒ.', vn: 'Nữ: Cảm ơn bạn, (bài) này giờ tôi làm được rồi. / Nam: Không có gì, có gì không biết cứ hỏi tôi.', answer: 'C' }
          ]
        },
        {
          name: 'Phần 3', range: [46, 50], type: 'judge-text',
          intro: 'Đọc câu và phán đoán câu ★ đúng (✓) hay sai (✗).',
          questions: [
            { n: 46, zh: '外面下雨了，路上不好走，你回去的时候慢点儿开，到家后给我们打个电话。', py: 'Wàimiàn xià yǔ le, lùshang bù hǎo zǒu, nǐ huíqu de shíhou màn diǎnr kāi, dào jiā hòu gěi wǒmen dǎ ge diànhuà.', vn: 'Bên ngoài mưa rồi, đường khó đi, lúc về bạn lái chậm thôi, về đến nhà gọi cho chúng tôi.', star: '外面雪下得很大。', starPy: 'Wàimiàn xuě xià de hěn dà.', starVn: 'Bên ngoài tuyết rơi rất to.', answer: false },
            { n: 47, zh: '小李学习不错，也很爱帮助人，大家都很喜欢他。', py: 'Xiǎo Lǐ xuéxí búcuò, yě hěn ài bāngzhù rén, dàjiā dōu hěn xǐhuan tā.', vn: 'Tiểu Lý học khá tốt, cũng rất thích giúp người, mọi người đều quý cậu ấy.', star: '小李喜欢帮助人。', starPy: 'Xiǎo Lǐ xǐhuan bāngzhù rén.', starVn: 'Tiểu Lý thích giúp đỡ người khác.', answer: true },
            { n: 48, zh: '中国人的名字是姓在前名在后，很多人的姓都是一个字，但也有两个字的。', py: 'Zhōngguórén de míngzi shì xìng zài qián míng zài hòu, hěn duō rén de xìng dōu shì yí ge zì, dàn yě yǒu liǎng ge zì de.', vn: 'Tên người Trung Quốc họ đứng trước tên đứng sau, họ của nhiều người chỉ một chữ, nhưng cũng có họ hai chữ.', star: '中国人的姓都是一个字的。', starPy: 'Zhōngguórén de xìng dōu shì yí ge zì de.', starVn: 'Họ của người Trung Quốc đều chỉ một chữ.', answer: false },
            { n: 49, zh: '我是去年9月来北京工作的，到现在已经快一年了。', py: 'Wǒ shì qùnián jiǔ yuè lái Běijīng gōngzuò de, dào xiànzài yǐjīng kuài yì nián le.', vn: 'Tôi đến Bắc Kinh làm việc từ tháng 9 năm ngoái, đến nay đã gần một năm.', star: '他来北京很多年了。', starPy: 'Tā lái Běijīng hěn duō nián le.', starVn: 'Anh ấy đến Bắc Kinh nhiều năm rồi.', answer: false },
            { n: 50, zh: '虽然这儿离我家不远，但是到我家的车不太多，所以我每次都要等20多分钟。', py: 'Suīrán zhèr lí wǒ jiā bù yuǎn, dànshì dào wǒ jiā de chē bú tài duō, suǒyǐ wǒ měi cì dōu yào děng èrshí duō fēnzhōng.', vn: 'Tuy chỗ này cách nhà tôi không xa, nhưng xe về nhà tôi không nhiều, nên lần nào tôi cũng phải đợi hơn 20 phút.', star: '从那儿去他家的车少。', starPy: 'Cóng nàr qù tā jiā de chē shǎo.', starVn: 'Xe từ đó về nhà anh ấy ít.', answer: true }
          ]
        },
        {
          name: 'Phần 4', range: [51, 60], type: 'sent-match',
          intro: 'Chọn câu trả lời/câu ghép phù hợp với mỗi câu.',
          groups: [
            {
              range: [51, 55],
              options: [
                { k: 'A', zh: '这是去饭店的路吗？', py: 'Zhè shì qù fàndiàn de lù ma?', vn: 'Đây là đường đến nhà hàng à?' },
                { k: 'B', zh: '这件衣服能不能再便宜一点儿？', py: 'Zhè jiàn yīfu néngbunéng zài piányi yìdiǎnr?', vn: 'Chiếc áo này có thể rẻ thêm chút được không?' },
                { k: 'C', zh: '是，她16岁了，现在比她爸爸还高呢。', py: 'Shì, tā shíliù suì le, xiànzài bǐ tā bàba hái gāo ne.', vn: 'Đúng, nó 16 tuổi rồi, giờ còn cao hơn cả bố nó.' },
                { k: 'D', zh: '你快来看，电视上这个小猫真有意思。', py: 'Nǐ kuài lái kàn, diànshìshang zhège xiǎo māo zhēn yǒuyìsi.', vn: 'Mau lại xem, con mèo nhỏ trên ti vi này thú vị thật.' },
                { k: 'E', zh: '他在哪儿呢？你看见他了吗？', py: 'Tā zài nǎr ne? Nǐ kànjiàn tā le ma?', vn: 'Anh ấy ở đâu? Bạn thấy anh ấy không?', used: true },
                { k: 'F', zh: '不是，一星期也就两三次。', py: 'Bú shì, yì xīngqī yě jiù liǎng sān cì.', vn: 'Không, một tuần cũng chỉ hai ba lần.' }
              ],
              example: 'Ví dụ: 他还在教室里学习。→ E',
              questions: [
                { n: 51, zh: '你在笑什么呢？', py: 'Nǐ zài xiào shénme ne?', vn: 'Bạn đang cười gì thế?', answer: 'D' },
                { n: 52, zh: '对，从这边走会近一些。', py: 'Duì, cóng zhèbian zǒu huì jìn yìxiē.', vn: 'Đúng, đi lối này sẽ gần hơn một chút.', answer: 'A' },
                { n: 53, zh: '最少150块钱。', py: 'Zuì shǎo yìbǎi wǔshí kuài qián.', vn: 'Ít nhất 150 tệ.', answer: 'B' },
                { n: 54, zh: '你每天早上都去跑步？', py: 'Nǐ měi tiān zǎoshang dōu qù pǎobù?', vn: 'Sáng nào bạn cũng đi chạy bộ à?', answer: 'F' },
                { n: 55, zh: '几年没见，没想到小晴都这么大了。', py: 'Jǐ nián méi jiàn, méi xiǎngdào Xiǎoqíng dōu zhème dà le.', vn: 'Mấy năm không gặp, không ngờ Tiểu Tình đã lớn thế này.', answer: 'C' }
              ]
            },
            {
              range: [56, 60],
              options: [
                { k: 'A', zh: '还没，昨天忙了一天，让他好好休息吧。', py: 'Hái méi, zuótiān mángle yì tiān, ràng tā hǎohao xiūxi ba.', vn: 'Chưa, hôm qua bận cả ngày, để nó nghỉ ngơi cho tốt.' },
                { k: 'B', zh: '对不起，我的表慢了10分钟，所以来晚了。', py: 'Duìbuqǐ, wǒ de biǎo mànle shí fēnzhōng, suǒyǐ láiwǎn le.', vn: 'Xin lỗi, đồng hồ của tôi chậm 10 phút nên đến muộn.' },
                { k: 'C', zh: '医院旁边新开了一家水果店。', py: 'Yīyuàn pángbiān xīn kāile yì jiā shuǐguǒdiàn.', vn: 'Cạnh bệnh viện mới mở một cửa hàng hoa quả.' },
                { k: 'D', zh: '你也认识小王？', py: 'Nǐ yě rènshi Xiǎo Wáng?', vn: 'Bạn cũng quen Tiểu Vương à?' },
                { k: 'E', zh: '是，我下个月就开始上班。', py: 'Shì, wǒ xià ge yuè jiù kāishǐ shàngbān.', vn: 'Đúng, tháng sau tôi bắt đầu đi làm.' }
              ],
              questions: [
                { n: 56, zh: '儿子起床了吗？', py: 'Érzi qǐchuáng le ma?', vn: 'Con trai dậy chưa?', answer: 'A' },
                { n: 57, zh: '这个西瓜就是在那儿买的。', py: 'Zhège xīguā jiù shì zài nàr mǎi de.', vn: 'Quả dưa hấu này mua ở đó đấy.', answer: 'C' },
                { n: 58, zh: '对，他是我哥哥的好朋友。', py: 'Duì, tā shì wǒ gēge de hǎo péngyou.', vn: 'Đúng, anh ấy là bạn thân của anh trai tôi.', answer: 'D' },
                { n: 59, zh: '没关系，电影还没开始呢。', py: 'Méiguānxi, diànyǐng hái méi kāishǐ ne.', vn: 'Không sao, phim vẫn chưa bắt đầu.', answer: 'B' },
                { n: 60, zh: '你想好了？真的要去那家公司？', py: 'Nǐ xiǎnghǎo le? Zhēnde yào qù nà jiā gōngsī?', vn: 'Bạn nghĩ kỹ rồi? Thật sự muốn đến công ty đó?', answer: 'E' }
              ]
            }
          ]
        }
      ]
    }
  ]
};
