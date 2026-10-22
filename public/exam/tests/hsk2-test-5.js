// Đề thi thử HSK 2 – Đề số 5 (đề mẫu chính thức H21005 của Hanban).
window.EXAM_DATA = {
  id: 'hsk2-test-5',
  level: 'HSK 2',
  title: 'HSK 2 - Test 5',
  code: 'H21005',
  durationSec: 55 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk2-test-5/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk2-test-5.mp3',
      note: 'Bấm nút phát để nghe toàn bộ phần thi Nghe (mỗi câu đọc 2 lần, đúng như đề thi thật). Thanh audio luôn ghim ở đầu phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-pic',
          intro: 'Nghe mỗi câu và phán đoán câu nói có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: false, script: '我给女儿准备了牛奶和鸡蛋。', scriptVn: 'Tôi chuẩn bị sữa và trứng cho con gái. (hình là cốc cà phê)' },
            { n: 2, img: 'l1-q2.jpg', answer: true, script: '她快要做妈妈了。', scriptVn: 'Cô ấy sắp làm mẹ rồi.' },
            { n: 3, img: 'l1-q3.jpg', answer: true, script: '你的歌唱得真不错！', scriptVn: 'Bạn hát hay thật!' },
            { n: 4, img: 'l1-q4.jpg', answer: true, script: '你没笑，再来一张。', scriptVn: 'Bạn chưa cười, chụp thêm tấm nữa.' },
            { n: 5, img: 'l1-q5.jpg', answer: false, script: '中午我们吃羊肉吧。', scriptVn: 'Trưa nay mình ăn thịt dê nhé. (hình là làm cá)' },
            { n: 6, img: 'l1-q6.jpg', answer: false, script: '给您，这是今天的报纸。', scriptVn: 'Đưa ông, đây là báo hôm nay. (hình là quyển sách)' },
            { n: 7, img: 'l1-q7.jpg', answer: true, script: '学跳舞要慢慢来。', scriptVn: 'Học múa phải từ từ.' },
            { n: 8, img: 'l1-q8.jpg', answer: false, script: '这是你新买的手表？', scriptVn: 'Đây là đồng hồ đeo tay bạn mới mua à? (hình là đồng hồ treo tường)' },
            { n: 9, img: 'l1-q9.jpg', answer: false, script: '你来开车，我坐右边。', scriptVn: 'Bạn lái xe, tôi ngồi bên phải. (hình là xe đạp)' },
            { n: 10, img: 'l1-q10.jpg', answer: true, script: '下雪了，但不是很冷。', scriptVn: 'Tuyết rơi rồi, nhưng không lạnh lắm.' }
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
                { n: 11, answer: 'F', script: '女：谢谢你今天来帮我。\n男：不客气，今天我休息。', scriptVn: 'Nữ: Cảm ơn hôm nay anh đến giúp tôi. / Nam: Không có gì, hôm nay tôi nghỉ.' },
                { n: 12, answer: 'C', script: '男：你准备好了没有？\n女：我准备好了。', scriptVn: 'Nam: Bạn sẵn sàng chưa? / Nữ: Tôi sẵn sàng rồi.' },
                { n: 13, answer: 'E', script: '女：爸爸，生日快乐！\n男：谢谢你！这是你写的吗？真漂亮！', scriptVn: 'Nữ: Bố, chúc mừng sinh nhật! / Nam: Cảm ơn con! Con viết à? Đẹp thật!' },
                { n: 14, answer: 'B', script: '男：天气太热了，吃块儿西瓜吧。\n女：好的，谢谢。', scriptVn: 'Nam: Trời nóng quá, ăn miếng dưa hấu đi. / Nữ: Được, cảm ơn.' },
                { n: 15, answer: 'A', script: '女：我穿这件怎么样？\n男：我觉得那件红的比这件好。', scriptVn: 'Nữ: Tôi mặc cái này thế nào? / Nam: Tôi thấy cái màu đỏ kia đẹp hơn cái này.' }
              ]
            },
            {
              range: [16, 20], pics: { A: 'l2b-A.jpg', B: 'l2b-B.jpg', C: 'l2b-C.jpg', D: 'l2b-D.jpg', E: 'l2b-E.jpg' },
              questions: [
                { n: 16, answer: 'B', script: '男：这个手机多少钱？\n女：一千零九十，现在买还送您一个茶杯。', scriptVn: 'Nam: Điện thoại này bao nhiêu tiền? / Nữ: Một nghìn không trăm chín mươi, mua bây giờ còn được tặng một chén trà.' },
                { n: 17, answer: 'A', script: '女：这个题你不会做吗？\n男：是，我不知道怎么做，我没听懂。', scriptVn: 'Nữ: Bài này bạn không làm được à? / Nam: Ừ, tôi không biết làm, tôi không nghe hiểu.' },
                { n: 18, answer: 'D', script: '男：哪个是你弟弟？\n女：左边的那个，九号，看见了吗？', scriptVn: 'Nam: Người nào là em trai bạn? / Nữ: Người bên trái, số 9, thấy chưa?' },
                { n: 19, answer: 'C', script: '女：先生，您对这件事情怎么看？\n男：我现在不想回答。', scriptVn: 'Nữ: Thưa ông, ông nghĩ thế nào về chuyện này? / Nam: Bây giờ tôi không muốn trả lời.' },
                { n: 20, answer: 'E', script: '男：狗今天怎么不吃东西？\n女：它可能生病了。', scriptVn: 'Nam: Sao hôm nay chó không ăn gì? / Nữ: Có lẽ nó ốm rồi.' }
              ]
            }
          ]
        },
        {
          name: 'Phần 3', range: [21, 30], type: 'mc',
          intro: 'Nghe hội thoại ngắn và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 21, options: [{ zh: '路上', py: 'lù shang' }, { zh: '船上', py: 'chuán shang' }, { zh: '飞机上', py: 'fēijī shang' }], answer: 'A', script: '女：喂，你到电影院了没？\n男：我在路上，很快就到。你等我几分钟。\n问：男的现在在哪儿？', scriptVn: 'Nữ: Alô, anh đến rạp chiếu phim chưa? / Nam: Anh đang trên đường, sắp đến rồi. Em đợi anh vài phút. / Hỏi: Người nam đang ở đâu?' },
            { n: 22, options: [{ zh: '生病了', py: 'shēngbìng le' }, { zh: '很高兴', py: 'hěn gāoxìng' }, { zh: '有点儿忙', py: 'yǒu diǎnr máng' }], answer: 'C', script: '男：明天你去不去打球？\n女：这两天有点忙，不去了。\n问：女的这两天怎么样？', scriptVn: 'Nam: Mai cậu có đi chơi bóng không? / Nữ: Mấy hôm nay hơi bận, không đi. / Hỏi: Mấy hôm nay người nữ thế nào?' },
            { n: 23, options: [{ zh: '大一些', py: 'dà yìxiē' }, { zh: '小一些', py: 'xiǎo yìxiē' }, { zh: '高一些', py: 'gāo yìxiē' }], answer: 'A', script: '女：您看这个房间怎么样？\n男：还可以，有没有大一点儿的？\n问：男的想要什么样的房间？', scriptVn: 'Nữ: Ông thấy phòng này thế nào? / Nam: Cũng được, có phòng lớn hơn chút không? / Hỏi: Người nam muốn phòng thế nào?' },
            { n: 24, options: [{ zh: '姐姐的', py: 'jiějie de' }, { zh: '哥哥的', py: 'gēge de' }, { zh: '朋友的', py: 'péngyou de' }], answer: 'B', script: '男：桌子上的那本书是你的？\n女：不是，那是我哥的。\n问：那本书是谁的？', scriptVn: 'Nam: Cuốn sách trên bàn là của bạn à? / Nữ: Không, của anh trai tôi. / Hỏi: Cuốn sách là của ai?' },
            { n: 25, options: [{ zh: '医院', py: 'yīyuàn' }, { zh: '饭馆儿', py: 'fànguǎnr' }, { zh: '家里', py: 'jiā li' }], answer: 'C', script: '女：儿子，多吃菜。\n男：好，您做的菜比饭店的还好吃。\n问：他们最可能在哪儿？', scriptVn: 'Nữ: Con trai, ăn nhiều rau vào. / Nam: Vâng, mẹ nấu còn ngon hơn nhà hàng. / Hỏi: Họ có thể đang ở đâu?' },
            { n: 26, options: [{ zh: '65', py: 'liùshíwǔ' }, { zh: '70', py: 'qīshí' }, { zh: '75', py: 'qīshíwǔ' }], answer: 'B', script: '男：这个月我天天去游泳，我现在七十公斤。\n女：真的吗？少了五公斤？\n问：男的现在多少公斤？', scriptVn: 'Nam: Tháng này ngày nào tôi cũng đi bơi, giờ tôi bảy mươi ký. / Nữ: Thật à? Giảm năm ký rồi? / Hỏi: Người nam bây giờ bao nhiêu ký?' },
            { n: 27, options: [{ zh: '累了', py: 'lèi le' }, { zh: '没听懂', py: 'méi tīng dǒng' }, { zh: '不想休息', py: 'bù xiǎng xiūxi' }], answer: 'A', script: '女：走了这么长时间，真有点累了。\n男：我们去那边的椅子上坐坐吧。\n问：女的怎么了？', scriptVn: 'Nữ: Đi lâu thế này, hơi mệt thật. / Nam: Mình ra ghế bên kia ngồi một lát. / Hỏi: Người nữ làm sao?' },
            { n: 28, options: [{ zh: '女儿没来', py: 'nǚ\'ér méi lái' }, { zh: '女儿姓王', py: 'nǚ\'ér xìng Wáng' }, { zh: '女儿在那儿', py: 'nǚ\'ér zài nàr' }], answer: 'C', script: '男：王老师，您女儿已经这么大了？\n女：这是我的学生，我女儿在那儿。\n问：女的是什么意思？', scriptVn: 'Nam: Cô Vương, con gái cô đã lớn thế này rồi à? / Nữ: Đây là học sinh của tôi, con gái tôi ở đằng kia. / Hỏi: Người nữ có ý gì?' },
            { n: 29, options: [{ zh: '吃药', py: 'chī yào' }, { zh: '喝咖啡', py: 'hē kāfēi' }, { zh: '去上课', py: 'qù shàngkè' }], answer: 'B', script: '女：别看电脑了，喝杯咖啡吧。\n男：谢谢，你真好。\n问：女的让男的做什么？', scriptVn: 'Nữ: Đừng xem máy tính nữa, uống cốc cà phê đi. / Nam: Cảm ơn, em tốt thật. / Hỏi: Người nữ bảo người nam làm gì?' },
            { n: 30, options: [{ zh: '一起来的', py: 'yìqǐ lái de' }, { zh: '打过电话', py: 'dǎguo diànhuà' }, { zh: '看见车了', py: 'kànjiàn chē le' }], answer: 'C', script: '男：你怎么知道小王来了？\n女：我在门外看到他的自行车了。\n问：女的怎么知道小王来了？', scriptVn: 'Nam: Sao em biết Tiểu Vương đến rồi? / Nữ: Em thấy xe đạp của anh ấy ở ngoài cửa. / Hỏi: Sao người nữ biết Tiểu Vương đến?' }
          ]
        },
        {
          name: 'Phần 4', range: [31, 35], type: 'mc',
          intro: 'Nghe hội thoại dài và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 31, options: [{ zh: '200元', py: 'liǎngbǎi yuán' }, { zh: '300元', py: 'sānbǎi yuán' }, { zh: '400元', py: 'sìbǎi yuán' }], answer: 'B', script: '男：小姐，这个篮球多少钱？\n女：三百。\n男：有便宜一些的吗？\n女：没有了，这就是最便宜的。\n问：这个篮球卖多少钱？', scriptVn: 'Nam: Cô ơi, quả bóng rổ này bao nhiêu tiền? / Nữ: Ba trăm. / Nam: Có loại rẻ hơn không? / Nữ: Không, đây là loại rẻ nhất rồi. / Hỏi: Quả bóng rổ này bán bao nhiêu tiền?' },
            { n: 32, options: [{ zh: '学校', py: 'xuéxiào' }, { zh: '机场', py: 'jīchǎng' }, { zh: '商店', py: 'shāngdiàn' }], answer: 'A', script: '女：请问，第十中学怎么走？\n男：您向前走，就在路的右边。\n女：谢谢你，再见。\n男：不客气。\n问：女的要去哪儿？', scriptVn: 'Nữ: Xin hỏi, trường trung học số 10 đi thế nào? / Nam: Cô đi thẳng, ở ngay bên phải đường. / Nữ: Cảm ơn anh, tạm biệt. / Nam: Không có gì. / Hỏi: Người nữ muốn đi đâu?' },
            { n: 33, options: [{ zh: '要喝水', py: 'yào hē shuǐ' }, { zh: '要吃米饭', py: 'yào chī mǐfàn' }, { zh: '要吃苹果', py: 'yào chī píngguǒ' }], answer: 'C', script: '男：妈妈，你睡着了吗？\n女：不要说话了，快睡觉吧。\n男：我想吃个苹果再睡。\n女：苹果已经睡觉了。\n问：男的为什么不睡觉？', scriptVn: 'Nam: Mẹ ơi, mẹ ngủ chưa? / Nữ: Đừng nói nữa, mau ngủ đi. / Nam: Con muốn ăn quả táo rồi ngủ. / Nữ: Táo ngủ rồi. / Hỏi: Vì sao cậu bé không ngủ?' },
            { n: 34, options: [{ zh: '工作', py: 'gōngzuò' }, { zh: '学习', py: 'xuéxí' }, { zh: '运动', py: 'yùndòng' }], answer: 'A', script: '女：我们希望你下个星期就能来公司上班。\n男：好的，没问题。\n女：上班时间是上午九点到下午五点。\n男：谢谢，那星期一见。\n问：他们在说什么？', scriptVn: 'Nữ: Chúng tôi mong tuần sau anh có thể đến công ty làm việc. / Nam: Vâng, không vấn đề. / Nữ: Giờ làm là 9 giờ sáng đến 5 giờ chiều. / Nam: Cảm ơn, vậy thứ Hai gặp. / Hỏi: Họ đang nói về gì?' },
            { n: 35, options: [{ zh: '14号', py: 'shísì hào' }, { zh: '16号', py: 'shíliù hào' }, { zh: '17号', py: 'shíqī hào' }], answer: 'B', script: '男：今天的票还有吗？\n女：对不起，没有了。\n男：那我要两张明天的吧。\n女：好，给您，四月十七日的，两张。\n问：今天是几号？', scriptVn: 'Nam: Vé hôm nay còn không? / Nữ: Xin lỗi, hết rồi. / Nam: Vậy cho tôi hai vé ngày mai. / Nữ: Vâng, của ông đây, ngày 17 tháng 4, hai vé. / Hỏi: Hôm nay là ngày mấy? (mai là 17 → hôm nay 16)' }
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
                { n: 36, zh: '李老师，这个教室能坐多少人？', py: 'Lǐ lǎoshī, zhège jiàoshì néng zuò duōshao rén?', vn: 'Thầy Lý, phòng học này ngồi được bao nhiêu người?', answer: 'C' },
                { n: 37, zh: '你好，欢迎，非常欢迎。', py: 'Nǐ hǎo, huānyíng, fēicháng huānyíng.', vn: 'Xin chào, hoan nghênh, rất hoan nghênh.', answer: 'E' },
                { n: 38, zh: '她还没睡觉，正在床上看电视呢。', py: 'Tā hái méi shuìjiào, zhèng zài chuáng shang kàn diànshì ne.', vn: 'Cô ấy vẫn chưa ngủ, đang xem ti vi trên giường.', answer: 'B' },
                { n: 39, zh: '请告诉我您的电话是多少。', py: 'Qǐng gàosu wǒ nín de diànhuà shì duōshao.', vn: 'Xin cho tôi biết số điện thoại của ông.', answer: 'A' },
                { n: 40, zh: '同学们，请大家和我一起读。', py: 'Tóngxuémen, qǐng dàjiā hé wǒ yìqǐ dú.', vn: 'Các em, mời mọi người đọc cùng cô.', answer: 'F' }
              ]
            }
          ]
        },
        {
          name: 'Phần 2', range: [41, 45], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '认识', py: 'rènshi' }, { k: 'B', zh: '从', py: 'cóng' }, { k: 'C', zh: '鱼', py: 'yú' },
            { k: 'D', zh: '为什么', py: 'wèi shénme' }, { k: 'E', zh: '贵', py: 'guì', used: true }, { k: 'F', zh: '介绍', py: 'jièshào' }
          ],
          example: 'Ví dụ: 这儿的羊肉很好吃，但是也很（ E ）。',
          questions: [
            { n: 41, zh: '我妹妹的孩子最喜欢问（　）。', py: 'Wǒ mèimei de háizi zuì xǐhuan wèn (　).', vn: 'Con của em gái tôi thích hỏi (vì sao) nhất.', answer: 'D' },
            { n: 42, zh: '这个工作是朋友帮我（　）的。', py: 'Zhège gōngzuò shì péngyou bāng wǒ (　) de.', vn: 'Công việc này là bạn (giới thiệu) giúp tôi.', answer: 'F' },
            { n: 43, zh: '我已经（　）家里出来了，10分钟后到。', py: 'Wǒ yǐjīng (　) jiā li chūlai le, shí fēnzhōng hòu dào.', vn: 'Tôi đã (từ) nhà đi ra rồi, 10 phút nữa đến.', answer: 'B' },
            { n: 44, zh: '小猫你别叫了，这些（　）都是给你准备的。', py: 'Xiǎomāo nǐ bié jiào le, zhèxiē (　) dōu shì gěi nǐ zhǔnbèi de.', vn: 'Mèo con đừng kêu nữa, những con (cá) này đều chuẩn bị cho mày.', answer: 'C' },
            { n: 45, zh: '女：小王旁边那个女孩儿是谁？你（　）吗？\n男：是他女朋友。', py: 'Nǚ: Xiǎo Wáng pángbiān nàge nǚháir shì shéi? Nǐ (　) ma?\nNán: Shì tā nǚpéngyou.', vn: 'Nữ: Cô gái bên cạnh Tiểu Vương là ai? Bạn (quen) không? / Nam: Là bạn gái anh ấy.', answer: 'A' }
          ]
        },
        {
          name: 'Phần 3', range: [46, 50], type: 'judge-text',
          intro: 'Đọc câu và phán đoán câu ★ đúng (✓) hay sai (✗).',
          questions: [
            { n: 46, zh: '今天太累了，我不想做饭了，我们去外面吃吧，你想吃什么？', py: 'Jīntiān tài lèi le, wǒ bù xiǎng zuò fàn le, wǒmen qù wàimiàn chī ba, nǐ xiǎng chī shénme?', vn: 'Hôm nay mệt quá, tôi không muốn nấu cơm nữa, mình ra ngoài ăn đi, bạn muốn ăn gì?', star: '他们想在家吃饭。', starPy: 'Tāmen xiǎng zài jiā chī fàn.', starVn: 'Họ muốn ăn cơm ở nhà.', answer: false },
            { n: 47, zh: '不要在公共汽车上看书、看报纸，因为那样对眼睛不好。', py: 'Bú yào zài gōnggòngqìchē shang kàn shū, kàn bàozhǐ, yīnwèi nàyàng duì yǎnjing bù hǎo.', vn: 'Đừng đọc sách, đọc báo trên xe buýt, vì như vậy không tốt cho mắt.', star: '坐公共汽车对眼睛不好。', starPy: 'Zuò gōnggòngqìchē duì yǎnjing bù hǎo.', starVn: 'Đi xe buýt không tốt cho mắt.', answer: false },
            { n: 48, zh: '我从11岁开始踢足球，已经踢了10年了，我踢进了很多球，每次进球的时候我都非常快乐。', py: 'Wǒ cóng shíyī suì kāishǐ tī zúqiú, yǐjīng tīle shí nián le, wǒ tījìnle hěn duō qiú, měi cì jìn qiú de shíhou wǒ dōu fēicháng kuàilè.', vn: 'Tôi đá bóng từ năm 11 tuổi, đã đá 10 năm rồi, tôi ghi được nhiều bàn, mỗi lần ghi bàn tôi đều rất vui.', star: '他爱踢足球。', starPy: 'Tā ài tī zúqiú.', starVn: 'Anh ấy thích đá bóng.', answer: true },
            { n: 49, zh: '从学校到机场，坐出租车要一小时，我们10点的飞机，8点从学校走可以吗？', py: 'Cóng xuéxiào dào jīchǎng, zuò chūzūchē yào yì xiǎoshí, wǒmen shí diǎn de fēijī, bā diǎn cóng xuéxiào zǒu kěyǐ ma?', vn: 'Từ trường đến sân bay đi taxi mất một tiếng, máy bay của chúng ta lúc 10 giờ, 8 giờ đi từ trường được không?', star: '他们坐8点的飞机。', starPy: 'Tāmen zuò bā diǎn de fēijī.', starVn: 'Họ đi chuyến bay 8 giờ.', answer: false },
            { n: 50, zh: '我每天早上都要出去跑步。昨天是阴天，跑着跑着，开始下雨了。等我跑回家时，天晴了。', py: 'Wǒ měi tiān zǎoshang dōu yào chūqù pǎobù. Zuótiān shì yīn tiān, pǎozhe pǎozhe, kāishǐ xià yǔ le. Děng wǒ pǎohuí jiā shí, tiān qíng le.', vn: 'Sáng nào tôi cũng ra ngoài chạy bộ. Hôm qua trời âm u, đang chạy thì bắt đầu mưa. Đến khi tôi chạy về nhà thì trời quang.', star: '昨天下雨了。', starPy: 'Zuótiān xià yǔ le.', starVn: 'Hôm qua trời mưa.', answer: true }
          ]
        },
        {
          name: 'Phần 4', range: [51, 60], type: 'sent-match',
          intro: 'Chọn câu trả lời/câu ghép phù hợp với mỗi câu.',
          groups: [
            {
              range: [51, 55],
              options: [
                { k: 'A', zh: '我是新来的，所以您可能没见过我。', py: 'Wǒ shì xīn lái de, suǒyǐ nín kěnéng méi jiànguo wǒ.', vn: 'Tôi mới đến, nên có lẽ ông chưa gặp tôi.' },
                { k: 'B', zh: '怎么样？现在可以开始了吗？', py: 'Zěnmeyàng? Xiànzài kěyǐ kāishǐ le ma?', vn: 'Thế nào? Bây giờ bắt đầu được chưa?' },
                { k: 'C', zh: '明天要考试，考完试再去看吧。', py: 'Míngtiān yào kǎoshì, kǎowán shì zài qù kàn ba.', vn: 'Mai thi rồi, thi xong rồi đi xem.' },
                { k: 'D', zh: '这是我第二次来北京。', py: 'Zhè shì wǒ dì-èr cì lái Běijīng.', vn: 'Đây là lần thứ hai tôi đến Bắc Kinh.' },
                { k: 'E', zh: '他在哪儿呢？你看见他了吗？', py: 'Tā zài nǎr ne? Nǐ kànjiàn tā le ma?', vn: 'Anh ấy ở đâu? Bạn thấy anh ấy không?', used: true },
                { k: 'F', zh: '这件衣服的颜色，我不喜欢。', py: 'Zhè jiàn yīfu de yánsè, wǒ bù xǐhuan.', vn: 'Màu của chiếc áo này tôi không thích.' }
              ],
              example: 'Ví dụ: 他还在教室里学习。→ E',
              questions: [
                { n: 51, zh: '对不起，请等一下，王小姐还没到。', py: 'Duìbuqǐ, qǐng děng yíxià, Wáng xiǎojiě hái méi dào.', vn: 'Xin lỗi, xin đợi một chút, cô Vương chưa đến.', answer: 'B' },
                { n: 52, zh: '你是这里的服务员吗？', py: 'Nǐ shì zhèlǐ de fúwùyuán ma?', vn: 'Bạn là nhân viên phục vụ ở đây à?', answer: 'A' },
                { n: 53, zh: '晚上去不去看电影？', py: 'Wǎnshang qùbuqù kàn diànyǐng?', vn: 'Tối có đi xem phim không?', answer: 'C' },
                { n: 54, zh: '希望这次你能在这儿多住几天。', py: 'Xīwàng zhè cì nǐ néng zài zhèr duō zhù jǐ tiān.', vn: 'Mong lần này bạn ở đây thêm được vài ngày.', answer: 'D' },
                { n: 55, zh: '好，没关系，我们再去别的商店看看。', py: 'Hǎo, méi guānxi, wǒmen zài qù bié de shāngdiàn kànkan.', vn: 'Được, không sao, mình đi cửa hàng khác xem.', answer: 'F' }
              ]
            },
            {
              range: [56, 60],
              options: [
                { k: 'A', zh: '我也不知道，你问问小刘吧。', py: 'Wǒ yě bù zhīdào, nǐ wènwen xiǎo Liú ba.', vn: 'Tôi cũng không biết, bạn hỏi Tiểu Lưu xem.' },
                { k: 'B', zh: '这儿离火车站不远，很近。', py: 'Zhèr lí huǒchēzhàn bù yuǎn, hěn jìn.', vn: 'Chỗ này cách ga tàu không xa, rất gần.' },
                { k: 'C', zh: '妻子让他每天早上起床后喝一杯水。', py: 'Qīzi ràng tā měi tiān zǎoshang qǐchuáng hòu hē yì bēi shuǐ.', vn: 'Vợ bảo anh ấy mỗi sáng dậy uống một cốc nước.' },
                { k: 'D', zh: '我们玩儿得很高兴，还学会了一些汉语。', py: 'Wǒmen wánr de hěn gāoxìng, hái xuéhuìle yìxiē Hànyǔ.', vn: 'Chúng tôi chơi rất vui, còn học được một ít tiếng Trung.' },
                { k: 'E', zh: '他打我电话时，我正在洗水果。', py: 'Tā dǎ wǒ diànhuà shí, wǒ zhèngzài xǐ shuǐguǒ.', vn: 'Lúc anh ấy gọi cho tôi, tôi đang rửa hoa quả.' }
              ],
              questions: [
                { n: 56, zh: '那两个字是什么意思？', py: 'Nà liǎng ge zì shì shénme yìsi?', vn: 'Hai chữ đó nghĩa là gì?', answer: 'A' },
                { n: 57, zh: '就在前面，走七八分钟就到了。', py: 'Jiù zài qiánmiàn, zǒu qī bā fēnzhōng jiù dào le.', vn: 'Ở ngay phía trước, đi bảy tám phút là đến.', answer: 'B' },
                { n: 58, zh: '去年6月，我和丈夫去中国旅游了。', py: 'Qùnián liù yuè, wǒ hé zhàngfu qù Zhōngguó lǚyóu le.', vn: 'Tháng 6 năm ngoái, tôi và chồng đi du lịch Trung Quốc.', answer: 'D' },
                { n: 59, zh: '您找我什么事？', py: 'Nín zhǎo wǒ shénme shì?', vn: 'Ông tìm tôi có việc gì?', answer: 'E' },
                { n: 60, zh: '医生说这样对身体好。', py: 'Yīshēng shuō zhèyàng duì shēntǐ hǎo.', vn: 'Bác sĩ nói như vậy tốt cho sức khoẻ.', answer: 'C' }
              ]
            }
          ]
        }
      ]
    }
  ]
};
