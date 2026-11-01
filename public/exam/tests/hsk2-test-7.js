// Đề thi thử HSK 2 – Đề số 7 (đề thi thật H21329 của Hanban).
// Đáp án phần Nghe lấy từ bảng đáp án chính thức; đề gốc không kèm văn bản nghe.
window.EXAM_DATA = {
  id: 'hsk2-test-7',
  level: 'HSK 2',
  title: 'HSK 2 - Test 7',
  code: 'H21329',
  durationSec: 55 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk2-test-7/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk2-test-7.mp3',
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
            { n: 6, img: 'l1-q6.jpg', answer: true },
            { n: 7, img: 'l1-q7.jpg', answer: false },
            { n: 8, img: 'l1-q8.jpg', answer: true },
            { n: 9, img: 'l1-q9.jpg', answer: false },
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
                { n: 11, answer: 'A' },
                { n: 12, answer: 'B' },
                { n: 13, answer: 'F' },
                { n: 14, answer: 'C' },
                { n: 15, answer: 'E' }
              ]
            },
            {
              range: [16, 20], pics: { A: 'l2b-A.jpg', B: 'l2b-B.jpg', C: 'l2b-C.jpg', D: 'l2b-D.jpg', E: 'l2b-E.jpg' },
              questions: [
                { n: 16, answer: 'A' },
                { n: 17, answer: 'D' },
                { n: 18, answer: 'B' },
                { n: 19, answer: 'E' },
                { n: 20, answer: 'C' }
              ]
            }
          ]
        },
        {
          name: 'Phần 3', range: [21, 30], type: 'mc',
          intro: 'Nghe hội thoại ngắn và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 21, options: [{ zh: '很贵', py: 'hěn guì' }, { zh: '太小了', py: 'tài xiǎo le' }, { zh: '不太好吃', py: 'bú tài hǎochī' }], answer: 'C' },
            { n: 22, options: [{ zh: '走路', py: 'zǒulù' }, { zh: '坐船', py: 'zuò chuán' }, { zh: '坐出租车', py: 'zuò chūzūchē' }], answer: 'B' },
            { n: 23, options: [{ zh: '309', py: 'sān líng jiǔ' }, { zh: '406', py: 'sì líng liù' }, { zh: '503', py: 'wǔ líng sān' }], answer: 'A' },
            { n: 24, options: [{ zh: '跳舞', py: 'tiàowǔ' }, { zh: '学习汉语', py: 'xuéxí Hànyǔ' }, { zh: '买自行车', py: 'mǎi zìxíngchē' }], answer: 'A' },
            { n: 25, options: [{ zh: '多运动', py: 'duō yùndòng' }, { zh: '多休息', py: 'duō xiūxi' }, { zh: '多喝水', py: 'duō hē shuǐ' }], answer: 'B' },
            { n: 26, options: [{ zh: '教室', py: 'jiàoshì' }, { zh: '饭店', py: 'fàndiàn' }, { zh: '商店', py: 'shāngdiàn' }], answer: 'C' },
            { n: 27, options: [{ zh: '别说话', py: 'bié shuōhuà' }, { zh: '想去旅游', py: 'xiǎng qù lǚyóu' }, { zh: '工作不忙', py: 'gōngzuò bù máng' }], answer: 'B' },
            { n: 28, options: [{ zh: '她弟弟', py: 'tā dìdi' }, { zh: '她妹妹', py: 'tā mèimei' }, { zh: '她同学', py: 'tā tóngxué' }], answer: 'C' },
            { n: 29, options: [{ zh: '公司', py: 'gōngsī' }, { zh: '咖啡馆儿', py: 'kāfēiguǎnr' }, { zh: '电影院', py: 'diànyǐngyuàn' }], answer: 'B' },
            { n: 30, options: [{ zh: '没时间', py: 'méi shíjiān' }, { zh: '生病了', py: 'shēngbìng le' }, { zh: '去打球了', py: 'qù dǎ qiú le' }], answer: 'A' }
          ]
        },
        {
          name: 'Phần 4', range: [31, 35], type: 'mc',
          intro: 'Nghe hội thoại dài và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 31, options: [{ zh: '12:00', py: 'shí\'èr diǎn' }, { zh: '14:00', py: 'shísì diǎn' }, { zh: '16:00', py: 'shíliù diǎn' }], answer: 'C' },
            { n: 32, options: [{ zh: '晴天', py: 'qíngtiān' }, { zh: '有雨', py: 'yǒu yǔ' }, { zh: '会下雪', py: 'huì xià xuě' }], answer: 'C' },
            { n: 33, options: [{ zh: '医院后面', py: 'yīyuàn hòumiàn' }, { zh: '学校旁边', py: 'xuéxiào pángbiān' }, { zh: '药店前面', py: 'yàodiàn qiánmiàn' }], answer: 'B' },
            { n: 34, options: [{ zh: '女儿', py: 'nǚ\'ér' }, { zh: '妈妈', py: 'māma' }, { zh: '爸爸', py: 'bàba' }], answer: 'A' },
            { n: 35, options: [{ zh: '鱼', py: 'yú' }, { zh: '鸡蛋', py: 'jīdàn' }, { zh: '米饭', py: 'mǐfàn' }], answer: 'A' }
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
                { n: 36, zh: '欢迎您，请这边走。', py: 'Huānyíng nín, qǐng zhèbian zǒu.', vn: 'Hoan nghênh ông, mời đi lối này.', answer: 'A' },
                { n: 37, zh: '让我看看里面是什么东西。', py: 'Ràng wǒ kànkan lǐmiàn shì shénme dōngxi.', vn: 'Để tôi xem bên trong là gì.', answer: 'F' },
                { n: 38, zh: '这次考试她考得非常好。', py: 'Zhè cì kǎoshì tā kǎo de fēicháng hǎo.', vn: 'Kỳ thi lần này cô ấy thi rất tốt.', answer: 'E' },
                { n: 39, zh: '我妻子给我打了4个电话，我一个都没听到。', py: 'Wǒ qīzi gěi wǒ dǎle sì ge diànhuà, wǒ yí ge dōu méi tīngdào.', vn: 'Vợ tôi gọi cho tôi 4 cuộc, tôi không nghe được cuộc nào.', answer: 'C' },
                { n: 40, zh: '我这就穿好了，你再等一下。', py: 'Wǒ zhè jiù chuānhǎo le, nǐ zài děng yíxià.', vn: 'Tôi mặc xong ngay đây, bạn đợi thêm chút.', answer: 'B' }
              ]
            }
          ]
        },
        {
          name: 'Phần 2', range: [41, 45], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '回答', py: 'huídá' }, { k: 'B', zh: '件', py: 'jiàn' }, { k: 'C', zh: '姓', py: 'xìng' },
            { k: 'D', zh: '离', py: 'lí' }, { k: 'E', zh: '贵', py: 'guì', used: true }, { k: 'F', zh: '身体', py: 'shēntǐ' }
          ],
          example: 'Ví dụ: 这儿的羊肉很好吃，但是也很（ E ）。',
          questions: [
            { n: 41, zh: '你来（　）一下这个问题，好吗？', py: 'Nǐ lái (　) yíxià zhège wèntí, hǎo ma?', vn: 'Bạn (trả lời) câu hỏi này một chút, được không?', answer: 'A' },
            { n: 42, zh: '我觉得帮助人是一（　）很快乐的事情。', py: 'Wǒ juéde bāngzhù rén shì yí (　) hěn kuàilè de shìqing.', vn: 'Tôi thấy giúp người là một (việc) rất vui.', answer: 'B' },
            { n: 43, zh: '多吃水果对（　）好。', py: 'Duō chī shuǐguǒ duì (　) hǎo.', vn: 'Ăn nhiều hoa quả tốt cho (sức khoẻ).', answer: 'F' },
            { n: 44, zh: '我（　）王，叫王元元，大家可以叫我小王。', py: 'Wǒ (　) Wáng, jiào Wáng Yuányuan, dàjiā kěyǐ jiào wǒ Xiǎo Wáng.', vn: 'Tôi (họ) Vương, tên Vương Nguyên Nguyên, mọi người có thể gọi tôi là Tiểu Vương.', answer: 'C' },
            { n: 45, zh: '女：你家（　）学校远吗？\n男：不远，坐公共汽车15分钟就到了。', py: 'Nǚ: Nǐ jiā (　) xuéxiào yuǎn ma?\nNán: Bù yuǎn, zuò gōnggòngqìchē shíwǔ fēnzhōng jiù dào le.', vn: 'Nữ: Nhà bạn (cách) trường có xa không? / Nam: Không xa, đi xe buýt 15 phút là đến.', answer: 'D' }
          ]
        },
        {
          name: 'Phần 3', range: [46, 50], type: 'judge-text',
          intro: 'Đọc câu và phán đoán câu ★ đúng (✓) hay sai (✗).',
          questions: [
            { n: 46, zh: '天阴了，可能快下雨了，你还要出去跑步吗？', py: 'Tiān yīn le, kěnéng kuài xià yǔ le, nǐ hái yào chūqù pǎobù ma?', vn: 'Trời âm u rồi, có lẽ sắp mưa, bạn còn muốn ra ngoài chạy bộ không?', star: '外面已经下雨了。', starPy: 'Wàimiàn yǐjīng xià yǔ le.', starVn: 'Bên ngoài đã mưa rồi.', answer: false },
            { n: 47, zh: '爸爸明天早上9点下飞机，我们7点从家去机场就可以。', py: 'Bàba míngtiān zǎoshang jiǔ diǎn xià fēijī, wǒmen qī diǎn cóng jiā qù jīchǎng jiù kěyǐ.', vn: 'Sáng mai 9 giờ bố xuống máy bay, chúng ta 7 giờ từ nhà ra sân bay là được.', star: '他们明天早上要去机场。', starPy: 'Tāmen míngtiān zǎoshang yào qù jīchǎng.', starVn: 'Sáng mai họ sẽ ra sân bay.', answer: true },
            { n: 48, zh: '这本书我读过，写得很有意思，我两天就看完了，有时间你也看看吧。', py: 'Zhè běn shū wǒ dúguo, xiě de hěn yǒu yìsi, wǒ liǎng tiān jiù kànwán le, yǒu shíjiān nǐ yě kànkan ba.', vn: 'Cuốn sách này tôi đọc rồi, viết rất thú vị, tôi hai ngày là đọc xong, có thời gian bạn cũng đọc thử nhé.', star: '他觉得那本书不好看。', starPy: 'Tā juéde nà běn shū bù hǎokàn.', starVn: 'Anh ấy thấy cuốn sách đó không hay.', answer: false },
            { n: 49, zh: '我是第一次来这儿，这儿太漂亮了，真希望我们能多住几天再走。', py: 'Wǒ shì dì-yī cì lái zhèr, zhèr tài piàoliang le, zhēn xīwàng wǒmen néng duō zhù jǐ tiān zài zǒu.', vn: 'Tôi lần đầu đến đây, ở đây đẹp quá, thật mong chúng ta ở thêm vài ngày rồi mới đi.', star: '他很喜欢这里。', starPy: 'Tā hěn xǐhuan zhèli.', starVn: 'Anh ấy rất thích nơi này.', answer: true },
            { n: 50, zh: '先生，这个电脑是我们店里卖得最好的，有好几个颜色。您看看，您喜欢什么颜色的？', py: 'Xiānsheng, zhège diànnǎo shì wǒmen diànli mài de zuì hǎo de, yǒu hǎo jǐ ge yánsè. Nín kànkan, nín xǐhuan shénme yánsè de?', vn: 'Thưa ông, chiếc máy tính này bán chạy nhất cửa hàng chúng tôi, có mấy màu. Ông xem, ông thích màu gì?', star: '买这个电脑的人很少。', starPy: 'Mǎi zhège diànnǎo de rén hěn shǎo.', starVn: 'Người mua chiếc máy tính này rất ít.', answer: false }
          ]
        },
        {
          name: 'Phần 4', range: [51, 60], type: 'sent-match',
          intro: 'Chọn câu trả lời/câu ghép phù hợp với mỗi câu.',
          groups: [
            {
              range: [51, 55],
              options: [
                { k: 'A', zh: '我有点儿累，想早点儿睡觉。', py: 'Wǒ yǒu diǎnr lèi, xiǎng zǎo diǎnr shuìjiào.', vn: 'Tôi hơi mệt, muốn ngủ sớm một chút.' },
                { k: 'B', zh: '这个白色的手机不错，还很便宜，就几百块钱。', py: 'Zhège báisè de shǒujī búcuò, hái hěn piányi, jiù jǐ bǎi kuài qián.', vn: 'Chiếc điện thoại trắng này khá tốt, lại rẻ, chỉ vài trăm tệ.' },
                { k: 'C', zh: '小狗是去年哥哥送我的。', py: 'Xiǎo gǒu shì qùnián gēge sòng wǒ de.', vn: 'Con chó nhỏ là anh trai tặng tôi năm ngoái.' },
                { k: 'D', zh: '回家的票你买好了吗？', py: 'Huí jiā de piào nǐ mǎihǎo le ma?', vn: 'Vé về nhà bạn mua xong chưa?' },
                { k: 'E', zh: '他在哪儿呢？你看见他了吗？', py: 'Tā zài nǎr ne? Nǐ kànjiàn tā le ma?', vn: 'Anh ấy ở đâu? Bạn thấy anh ấy không?', used: true },
                { k: 'F', zh: '这本汉语书是谁的？怎么在我的桌子上？', py: 'Zhè běn Hànyǔ shū shì shéi de? Zěnme zài wǒ de zhuōzi shang?', vn: 'Cuốn sách tiếng Trung này của ai? Sao lại ở trên bàn tôi?' }
              ],
              example: 'Ví dụ: 他还在教室里学习。→ E',
              questions: [
                { n: 51, zh: '没有，我想下班后到火车站再看看。', py: 'Méiyǒu, wǒ xiǎng xiàbān hòu dào huǒchēzhàn zài kànkan.', vn: 'Chưa, tôi định tan làm ra ga tàu xem lại.', answer: 'D' },
                { n: 52, zh: '那时候它还不到一岁。', py: 'Nà shíhou tā hái bú dào yí suì.', vn: 'Lúc đó nó chưa đầy một tuổi.', answer: 'C' },
                { n: 53, zh: '上面有名字吗？', py: 'Shàngmiàn yǒu míngzi ma?', vn: 'Trên đó có tên không?', answer: 'F' },
                { n: 54, zh: '晚上我们去唱歌怎么样？', py: 'Wǎnshang wǒmen qù chànggē zěnmeyàng?', vn: 'Tối nay mình đi hát thế nào?', answer: 'A' },
                { n: 55, zh: '你少看了个零吧？那是6000多。', py: 'Nǐ shǎo kànle ge líng ba? Nà shì liùqiān duō.', vn: 'Bạn nhìn thiếu một số 0 rồi? Đó là hơn 6000.', answer: 'B' }
              ]
            },
            {
              range: [56, 60],
              options: [
                { k: 'A', zh: '我是4月1日到北京的，快三个月了。', py: 'Wǒ shì sì yuè yī rì dào Běijīng de, kuài sān ge yuè le.', vn: 'Tôi đến Bắc Kinh ngày 1 tháng 4, sắp ba tháng rồi.' },
                { k: 'B', zh: '再给我来一杯牛奶吧。', py: 'Zài gěi wǒ lái yì bēi niúnǎi ba.', vn: 'Cho tôi thêm một cốc sữa nữa.' },
                { k: 'C', zh: '我还没告诉她这件事。', py: 'Wǒ hái méi gàosu tā zhè jiàn shì.', vn: 'Tôi vẫn chưa nói với cô ấy chuyện này.' },
                { k: 'D', zh: '他在那儿和孩子们踢足球呢。', py: 'Tā zài nàr hé háizimen tī zúqiú ne.', vn: 'Anh ấy đang đá bóng với bọn trẻ ở đằng kia.' },
                { k: 'E', zh: '不客气，还有不懂的吗？', py: 'Bú kèqi, hái yǒu bù dǒng de ma?', vn: 'Không có gì, còn chỗ nào chưa hiểu không?' }
              ],
              questions: [
                { n: 56, zh: '这个字我会写了，谢谢老师。', py: 'Zhège zì wǒ huì xiě le, xièxie lǎoshī.', vn: 'Chữ này em viết được rồi, cảm ơn cô.', answer: 'E' },
                { n: 57, zh: '你来中国多长时间了？', py: 'Nǐ lái Zhōngguó duō cháng shíjiān le?', vn: 'Bạn đến Trung Quốc bao lâu rồi?', answer: 'A' },
                { n: 58, zh: '那个穿红衣服的就是我儿子。', py: 'Nàge chuān hóng yīfu de jiù shì wǒ érzi.', vn: 'Người mặc áo đỏ kia chính là con trai tôi.', answer: 'D' },
                { n: 59, zh: '因为我不知道怎么说。', py: 'Yīnwèi wǒ bù zhīdào zěnme shuō.', vn: 'Vì tôi không biết nói thế nào.', answer: 'C' },
                { n: 60, zh: '好的，这个有点儿热，你慢点儿喝。', py: 'Hǎode, zhège yǒu diǎnr rè, nǐ màn diǎnr hē.', vn: 'Được, cái này hơi nóng, bạn uống từ từ.', answer: 'B' }
              ]
            }
          ]
        }
      ]
    }
  ]
};
