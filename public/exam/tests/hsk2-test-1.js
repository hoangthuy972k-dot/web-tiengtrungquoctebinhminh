// Đề thi thử HSK 2 – Đề số 1 (đề mẫu chính thức H20901 của Hanban).
// Cấu trúc: 2 phần thi (Nghe 35 câu, Đọc 25 câu), tổng 60 câu, 55 phút.
// Điểm: mỗi phần thi tối đa 100 điểm (tính theo tỉ lệ câu đúng), tổng 200, đạt từ 120.
window.EXAM_DATA = {
  id: 'hsk2-test-1',
  level: 'HSK 2',
  title: 'HSK 2 - Test 1',
  code: 'H20901',
  durationSec: 55 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk2-test-1/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk2-test-1.mp3',
      note: 'Bấm nút phát để nghe toàn bộ phần thi Nghe (mỗi câu đọc 2 lần, đúng như đề thi thật). Thanh audio luôn ghim ở đầu phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-pic',
          intro: 'Nghe mỗi câu và phán đoán câu nói có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: false, script: '我买了一个新电视。', scriptVn: 'Tôi mua một chiếc ti vi mới. (hình là máy tính xách tay)' },
            { n: 2, img: 'l1-q2.jpg', answer: true, script: '对不起，我错了。', scriptVn: 'Xin lỗi, tôi sai rồi.' },
            { n: 3, img: 'l1-q3.jpg', answer: false, script: '再见，欢迎您下次再来。', scriptVn: 'Tạm biệt, hoan nghênh lần sau lại đến. (hình là người đang uống trà)' },
            { n: 4, img: 'l1-q4.jpg', answer: false, script: '这是他给妻子买的。', scriptVn: 'Đây là thứ anh ấy mua cho vợ. (hình là cà vạt nam)' },
            { n: 5, img: 'l1-q5.jpg', answer: true, script: '女儿让我回家的时候买些鸡蛋。', scriptVn: 'Con gái bảo tôi lúc về nhà mua ít trứng gà.' },
            { n: 6, img: 'l1-q6.jpg', answer: true, script: '他回来的时候，我正在洗衣服呢。', scriptVn: 'Lúc anh ấy về, tôi đang giặt quần áo.' },
            { n: 7, img: 'l1-q7.jpg', answer: false, script: '服务员，请给我来一杯咖啡。', scriptVn: 'Phục vụ, cho tôi một cốc cà phê. (hình là chén trà)' },
            { n: 8, img: 'l1-q8.jpg', answer: true, script: '爸爸，你别走。', scriptVn: 'Bố ơi, bố đừng đi.' },
            { n: 9, img: 'l1-q9.jpg', answer: false, script: '王小姐的猫是黑色的。', scriptVn: 'Mèo của cô Vương màu đen. (hình là con chó)' },
            { n: 10, img: 'l1-q10.jpg', answer: true, script: '今天要做的事情真多。', scriptVn: 'Hôm nay việc phải làm nhiều thật.' }
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
                { n: 11, answer: 'F', script: '女：后面，最右边的是我，找到了吗？\n男：找到了，你旁边那个女孩子是谁？', scriptVn: 'Nữ: Phía sau, người ngoài cùng bên phải là tôi, tìm thấy chưa? / Nam: Thấy rồi, cô gái bên cạnh cậu là ai?' },
                { n: 12, answer: 'A', script: '男：生日快乐！这是我送给你的。\n女：谢谢你！', scriptVn: 'Nam: Chúc mừng sinh nhật! Đây là quà tôi tặng bạn. / Nữ: Cảm ơn bạn!' },
                { n: 13, answer: 'C', script: '女：谁来回答这个问题？\n男：老师，我！', scriptVn: 'Nữ: Ai trả lời câu hỏi này? / Nam: Thưa cô, em!' },
                { n: 14, answer: 'E', script: '男：再来点儿米饭吧，你吃得太少了。\n女：好的，你也吃。', scriptVn: 'Nam: Ăn thêm chút cơm đi, bạn ăn ít quá. / Nữ: Được, bạn cũng ăn đi.' },
                { n: 15, answer: 'B', script: '女：这几件怎么样？你试一试？\n男：好，我喜欢这个颜色的。', scriptVn: 'Nữ: Mấy bộ này thế nào? Anh thử xem? / Nam: Được, tôi thích màu này.' }
              ]
            },
            {
              range: [16, 20], pics: { A: 'l2b-A.jpg', B: 'l2b-B.jpg', C: 'l2b-C.jpg', D: 'l2b-D.jpg', E: 'l2b-E.jpg' },
              questions: [
                { n: 16, answer: 'B', script: '男：你那儿有今天的报纸吗？\n女：有。我现在很忙，你五分钟后再打，好吗？', scriptVn: 'Nam: Chỗ cô có báo hôm nay không? / Nữ: Có. Giờ tôi đang bận, năm phút nữa anh gọi lại nhé?' },
                { n: 17, answer: 'E', script: '女：告诉我，哪个最漂亮？\n男：我觉得都漂亮。', scriptVn: 'Nữ: Nói tôi nghe, cái nào đẹp nhất? / Nam: Tôi thấy cái nào cũng đẹp.' },
                { n: 18, answer: 'C', script: '男：您做什么工作？\n女：我是小学老师。', scriptVn: 'Nam: Cô làm nghề gì? / Nữ: Tôi là giáo viên tiểu học.' },
                { n: 19, answer: 'A', script: '女：现在是八点，不是七点。\n男：真的吗？我的手表慢了？', scriptVn: 'Nữ: Bây giờ là tám giờ, không phải bảy giờ. / Nam: Thật à? Đồng hồ của tôi chậm rồi?' },
                { n: 20, answer: 'D', script: '男：这是李小姐的电影票，你能帮我给她吗？\n女：没问题。', scriptVn: 'Nam: Đây là vé xem phim của cô Lý, cô đưa giúp tôi được không? / Nữ: Không vấn đề.' }
              ]
            }
          ]
        },
        {
          name: 'Phần 3', range: [21, 30], type: 'mc',
          intro: 'Nghe hội thoại ngắn và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 21, options: [{ zh: '牛奶', py: 'niúnǎi' }, { zh: '苹果', py: 'píngguǒ' }, { zh: '西瓜', py: 'xīguā' }], answer: 'C', script: '男：天气太热了，家里有西瓜吗？\n女：没了，我现在出去买吧。\n问：女的要去买什么？', scriptVn: 'Nam: Trời nóng quá, nhà có dưa hấu không? / Nữ: Hết rồi, giờ tôi đi mua. / Hỏi: Cô gái đi mua gì?' },
            { n: 22, options: [{ zh: '一次', py: 'yí cì' }, { zh: '两次', py: 'liǎng cì' }, { zh: '9次', py: 'jiǔ cì' }], answer: 'B', script: '女：您是第一次来我们这儿吗？\n男：不是，去年九月我来过一次。\n问：男的来过这里几次？', scriptVn: 'Nữ: Ông đến chỗ chúng tôi lần đầu à? / Nam: Không, tháng chín năm ngoái tôi đến một lần rồi. / Hỏi: Người nam đến đây mấy lần? (lần trước + lần này = hai lần)' },
            { n: 23, options: [{ zh: '学校', py: 'xuéxiào' }, { zh: '公司', py: 'gōngsī' }, { zh: '哥哥家', py: 'gēge jiā' }], answer: 'A', script: '男：你妹妹现在还住在学校里？\n女：对，她住学校里，上班很近。\n问：妹妹现在住哪儿？', scriptVn: 'Nam: Em gái cậu giờ vẫn ở trong trường à? / Nữ: Đúng, nó ở trong trường, đi làm rất gần. / Hỏi: Em gái hiện ở đâu?' },
            { n: 24, options: [{ zh: '想喝水', py: 'xiǎng hē shuǐ' }, { zh: '生病了', py: 'shēngbìng le' }, { zh: '不睡了', py: 'bú shuì le' }], answer: 'C', script: '女：今天你准备几点起床？\n男：我不睡了，现在就起。\n问：男的是什么意思？', scriptVn: 'Nữ: Hôm nay anh định mấy giờ dậy? / Nam: Anh không ngủ nữa, dậy ngay bây giờ. / Hỏi: Người nam có ý gì?' },
            { n: 25, options: [{ zh: '儿子', py: 'érzi' }, { zh: '妈妈', py: 'māma' }, { zh: '丈夫', py: 'zhàngfu' }], answer: 'A', script: '男：小刘，中午有人给我打电话吗？\n女：您儿子打了个电话，问您晚上在哪儿吃饭。\n问：电话是谁打的？', scriptVn: 'Nam: Tiểu Lưu, trưa nay có ai gọi cho tôi không? / Nữ: Con trai ông gọi, hỏi tối ông ăn cơm ở đâu. / Hỏi: Ai gọi điện?' },
            { n: 26, options: [{ zh: '太晚了', py: 'tài wǎn le' }, { zh: '小张不在', py: 'Xiǎo Zhāng bú zài' }, { zh: '不认识路', py: 'bú rènshi lù' }], answer: 'A', script: '女：今天太晚了，我们别去小张家了。\n男：好，明天再去吧。\n问：他们今天为什么不去小张家？', scriptVn: 'Nữ: Hôm nay muộn quá rồi, mình đừng đến nhà Tiểu Trương nữa. / Nam: Ừ, mai đi vậy. / Hỏi: Vì sao hôm nay họ không đến nhà Tiểu Trương?' },
            { n: 27, options: [{ zh: '两块钱', py: 'liǎng kuài qián' }, { zh: '三块钱', py: 'sān kuài qián' }, { zh: '4块钱', py: 'sì kuài qián' }], answer: 'B', script: '男：鱼真便宜，现在三块钱一斤了。\n女：我买两斤。\n问：鱼多少钱一斤？', scriptVn: 'Nam: Cá rẻ thật, giờ ba tệ một cân. / Nữ: Tôi mua hai cân. / Hỏi: Cá bao nhiêu tiền một cân?' },
            { n: 28, options: [{ zh: '晴天', py: 'qíngtiān' }, { zh: '阴天', py: 'yīntiān' }, { zh: '下雨了', py: 'xià yǔ le' }], answer: 'B', script: '女：你多穿件儿衣服，外面阴天，可能会下雨。\n男：没事儿，我很快就回来。\n问：现在天气怎么样？', scriptVn: 'Nữ: Anh mặc thêm áo đi, bên ngoài trời âm u, có thể mưa. / Nam: Không sao, anh về ngay. / Hỏi: Thời tiết bây giờ thế nào?' },
            { n: 29, options: [{ zh: '茶', py: 'chá' }, { zh: '菜', py: 'cài' }, { zh: '水果', py: 'shuǐguǒ' }], answer: 'C', script: '男：吃点儿水果吧？水果在桌子上。\n女：不，我想喝点儿茶。\n问：桌子上有什么？', scriptVn: 'Nam: Ăn chút hoa quả nhé? Hoa quả ở trên bàn. / Nữ: Không, tôi muốn uống chút trà. / Hỏi: Trên bàn có gì?' },
            { n: 30, options: [{ zh: '唱歌', py: 'chànggē' }, { zh: '跳舞', py: 'tiàowǔ' }, { zh: '上课', py: 'shàngkè' }], answer: 'C', script: '女：明天下午你去唱歌吗？\n男：我想去，但是我明天下午有课。\n问：男的明天下午做什么？', scriptVn: 'Nữ: Chiều mai anh đi hát không? / Nam: Tôi muốn đi, nhưng chiều mai tôi có tiết học. / Hỏi: Chiều mai người nam làm gì?' }
          ]
        },
        {
          name: 'Phần 4', range: [31, 35], type: 'mc',
          intro: 'Nghe hội thoại dài và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 31, options: [{ zh: '说得好', py: 'shuō de hǎo' }, { zh: '写得好', py: 'xiě de hǎo' }, { zh: '不会写', py: 'bú huì xiě' }], answer: 'A', script: '女：你学汉语多长时间了？\n男：快两年了。\n女：你说得很不错。\n男：听和说还可以，读和写不好。\n问：他的汉语怎么样？', scriptVn: 'Nữ: Anh học tiếng Trung bao lâu rồi? / Nam: Sắp hai năm. / Nữ: Anh nói khá tốt. / Nam: Nghe và nói tạm được, đọc và viết không tốt. / Hỏi: Tiếng Trung của anh ấy thế nào?' },
            { n: 32, options: [{ zh: '太高', py: 'tài gāo' }, { zh: '太贵', py: 'tài guì' }, { zh: '颜色不好', py: 'yánsè bù hǎo' }], answer: 'A', script: '女：这个椅子怎么样？\n男：颜色很好，但是，它太高了。\n女：没关系，前面还有几个。\n男：走，我们过去看看。\n问：他们为什么没买这个椅子？', scriptVn: 'Nữ: Cái ghế này thế nào? / Nam: Màu đẹp, nhưng nó cao quá. / Nữ: Không sao, phía trước còn mấy cái. / Nam: Đi, mình qua xem. / Hỏi: Vì sao họ không mua cái ghế này?' },
            { n: 33, options: [{ zh: '200多', py: 'liǎngbǎi duō' }, { zh: '2000多', py: 'liǎngqiān duō' }, { zh: '3000多', py: 'sānqiān duō' }], answer: 'B', script: '男：听说你们学校很大，老师很多。\n女：是的，我们有两百多个老师。\n男：那学生呢？\n女：学生有两千多人。\n问：这个学校有多少学生？', scriptVn: 'Nam: Nghe nói trường các bạn rất lớn, nhiều giáo viên. / Nữ: Đúng, chúng tôi có hơn hai trăm giáo viên. / Nam: Thế học sinh? / Nữ: Học sinh hơn hai nghìn người. / Hỏi: Trường này có bao nhiêu học sinh?' },
            { n: 34, options: [{ zh: '学校', py: 'xuéxiào' }, { zh: '医院', py: 'yīyuàn' }, { zh: '饭店', py: 'fàndiàn' }], answer: 'B', script: '女：吃药了吗？现在身体怎么样？\n男：吃了，现在好多了。\n女：什么时候可以出院？\n男：医生说下个星期。\n问：他们最可能在哪儿？', scriptVn: 'Nữ: Uống thuốc chưa? Giờ sức khoẻ thế nào? / Nam: Uống rồi, giờ đỡ nhiều. / Nữ: Bao giờ được xuất viện? / Nam: Bác sĩ nói tuần sau. / Hỏi: Họ có thể đang ở đâu?' },
            { n: 35, options: [{ zh: '13号', py: 'shísān hào' }, { zh: '14号', py: 'shísì hào' }, { zh: '15号', py: 'shíwǔ hào' }], answer: 'C', script: '男：请问，十四号到北京的车票还有吗？\n女：对不起，十四号的已经卖完了。\n男：那十五号早上的还有吗？\n女：有，您要几张？\n男：两张。\n问：男的买了哪天的票？', scriptVn: 'Nam: Xin hỏi, vé đi Bắc Kinh ngày 14 còn không? / Nữ: Xin lỗi, ngày 14 bán hết rồi. / Nam: Vậy sáng ngày 15 còn không? / Nữ: Còn, ông cần mấy vé? / Nam: Hai vé. / Hỏi: Người nam mua vé ngày nào?' }
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
                { n: 36, zh: '给您介绍一下，这是我们公司的李先生。', py: 'Gěi nín jièshào yíxià, zhè shì wǒmen gōngsī de Lǐ xiānsheng.', vn: 'Xin giới thiệu với ông, đây là ông Lý ở công ty chúng tôi.', answer: 'F' },
                { n: 37, zh: '看书时间长了，眼睛得休息休息。', py: 'Kàn shū shíjiān cháng le, yǎnjing děi xiūxi xiūxi.', vn: 'Đọc sách lâu rồi, mắt phải nghỉ ngơi một chút.', answer: 'E' },
                { n: 38, zh: '那是我孩子，她爱跳舞。', py: 'Nà shì wǒ háizi, tā ài tiàowǔ.', vn: 'Đó là con tôi, nó thích nhảy múa.', answer: 'C' },
                { n: 39, zh: '今天下雪了，天气很冷。', py: 'Jīntiān xià xuě le, tiānqì hěn lěng.', vn: 'Hôm nay có tuyết, trời rất lạnh.', answer: 'B' },
                { n: 40, zh: '因为我不会游泳，所以，小鱼，你好！', py: 'Yīnwèi wǒ bú huì yóuyǒng, suǒyǐ, xiǎoyú, nǐ hǎo!', vn: 'Vì tôi không biết bơi, cho nên, cá nhỏ ơi, chào cậu!', answer: 'A' }
              ]
            }
          ]
        },
        {
          name: 'Phần 2', range: [41, 45], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '完', py: 'wán' }, { k: 'B', zh: '进', py: 'jìn' }, { k: 'C', zh: '过', py: 'guo' },
            { k: 'D', zh: '千', py: 'qiān' }, { k: 'E', zh: '贵', py: 'guì', used: true }, { k: 'F', zh: '自行车', py: 'zìxíngchē' }
          ],
          example: 'Ví dụ: 这儿的羊肉很好吃，但是也很（ E ）。',
          questions: [
            { n: 41, zh: '这个船非常大，可以坐几（　）人。', py: 'Zhège chuán fēicháng dà, kěyǐ zuò jǐ (　) rén.', vn: 'Con thuyền này rất lớn, có thể chở mấy (nghìn) người.', answer: 'D' },
            { n: 42, zh: '请（　），这就是我的房间。', py: 'Qǐng (　), zhè jiù shì wǒ de fángjiān.', vn: 'Mời (vào), đây chính là phòng của tôi.', answer: 'B' },
            { n: 43, zh: '昨天的考试题太多，我没有做（　）。', py: 'Zuótiān de kǎoshì tí tài duō, wǒ méiyǒu zuò (　).', vn: 'Đề thi hôm qua nhiều quá, tôi làm không (xong).', answer: 'A' },
            { n: 44, zh: '我没去（　）中国，我希望今年能去中国旅游。', py: 'Wǒ méi qù (　) Zhōngguó, wǒ xīwàng jīnnián néng qù Zhōngguó lǚyóu.', vn: 'Tôi chưa (từng) đi Trung Quốc, tôi mong năm nay được đi du lịch Trung Quốc.', answer: 'C' },
            { n: 45, zh: '女：对不起，我不能和你一起去买（　）了。\n男：没关系，我知道你很忙。', py: 'Nǚ: Duìbuqǐ, wǒ bù néng hé nǐ yìqǐ qù mǎi (　) le.\nNán: Méi guānxi, wǒ zhīdào nǐ hěn máng.', vn: 'Nữ: Xin lỗi, tôi không thể đi mua (xe đạp) cùng bạn được nữa. / Nam: Không sao, tôi biết bạn rất bận.', answer: 'F' }
              ]
        },
        {
          name: 'Phần 3', range: [46, 50], type: 'judge-text',
          intro: 'Đọc câu và phán đoán câu ★ đúng (✓) hay sai (✗).',
          questions: [
            { n: 46, zh: '我上午去外面买了个新手机，九百多块钱，很便宜。', py: 'Wǒ shàngwǔ qù wàimiàn mǎile ge xīn shǒujī, jiǔbǎi duō kuài qián, hěn piányi.', vn: 'Sáng nay tôi ra ngoài mua một chiếc điện thoại mới, hơn chín trăm tệ, rất rẻ.', star: '那个手机不到一千元。', starPy: 'Nàge shǒujī bú dào yìqiān yuán.', starVn: 'Chiếc điện thoại đó chưa đến một nghìn tệ.', answer: true },
            { n: 47, zh: '时间过得真快，我来北京10年了。我女儿已经5岁多了，都开始学习写汉字了。', py: 'Shíjiān guò de zhēn kuài, wǒ lái Běijīng shí nián le. Wǒ nǚ\'ér yǐjīng wǔ suì duō le, dōu kāishǐ xuéxí xiě Hànzì le.', vn: 'Thời gian trôi nhanh thật, tôi đến Bắc Kinh 10 năm rồi. Con gái tôi đã hơn 5 tuổi, bắt đầu học viết chữ Hán rồi.', star: '我有两个孩子。', starPy: 'Wǒ yǒu liǎng ge háizi.', starVn: 'Tôi có hai đứa con.', answer: false },
            { n: 48, zh: '今天是7月12日，再有三天就是我爸爸的生日了。我想送他一个电脑。', py: 'Jīntiān shì qī yuè shí\'èr rì, zài yǒu sān tiān jiù shì wǒ bàba de shēngrì le. Wǒ xiǎng sòng tā yí ge diànnǎo.', vn: 'Hôm nay là 12 tháng 7, ba ngày nữa là sinh nhật bố tôi. Tôi muốn tặng bố một chiếc máy tính.', star: '7月15日是我的生日。', starPy: 'Qī yuè shíwǔ rì shì wǒ de shēngri.', starVn: 'Ngày 15 tháng 7 là sinh nhật của tôi.', answer: false },
            { n: 49, zh: '喂，姐，我的飞机是十点零七的，再有20分钟我就到机场了。我们下午见。', py: 'Wéi, jiě, wǒ de fēijī shì shí diǎn líng qī de, zài yǒu èrshí fēnzhōng wǒ jiù dào jīchǎng le. Wǒmen xiàwǔ jiàn.', vn: 'Alô, chị, máy bay của em lúc 10 giờ 07, 20 phút nữa em đến sân bay. Chiều gặp chị.', star: '我在去机场的路上。', starPy: 'Wǒ zài qù jīchǎng de lù shang.', starVn: 'Tôi đang trên đường ra sân bay.', answer: true },
            { n: 50, zh: '昨天和朋友们在外面玩儿了一个晚上，很累，但是很高兴。', py: 'Zuótiān hé péngyoumen zài wàimiàn wánrle yí ge wǎnshang, hěn lèi, dànshì hěn gāoxìng.', vn: 'Hôm qua đi chơi với bạn bè bên ngoài cả tối, rất mệt nhưng rất vui.', star: '昨天玩儿得不高兴。', starPy: 'Zuótiān wánr de bù gāoxìng.', starVn: 'Hôm qua chơi không vui.', answer: false }
          ]
        },
        {
          name: 'Phần 4', range: [51, 60], type: 'sent-match',
          intro: 'Chọn câu trả lời/câu ghép phù hợp với mỗi câu.',
          groups: [
            {
              range: [51, 55],
              options: [
                { k: 'A', zh: '它不认识你。', py: 'Tā bú rènshi nǐ.', vn: 'Nó không quen bạn.' },
                { k: 'B', zh: '很近，从这儿坐出租车，六七分钟就到了。', py: 'Hěn jìn, cóng zhèr zuò chūzūchē, liù-qī fēnzhōng jiù dào le.', vn: 'Rất gần, từ đây đi taxi sáu bảy phút là tới.' },
                { k: 'C', zh: '她三年的时间里，写了4本书。', py: 'Tā sān nián de shíjiān lǐ, xiěle sì běn shū.', vn: 'Trong ba năm, cô ấy viết 4 cuốn sách.' },
                { k: 'D', zh: '你比他大一岁。', py: 'Nǐ bǐ tā dà yí suì.', vn: 'Bạn lớn hơn anh ấy một tuổi.' },
                { k: 'E', zh: '他在哪儿呢？你看见他了吗？', py: 'Tā zài nǎr ne? Nǐ kànjiàn tā le ma?', vn: 'Anh ấy ở đâu? Bạn thấy anh ấy không?', used: true },
                { k: 'F', zh: '小刘叫我一起去跑步。', py: 'Xiǎo Liú jiào wǒ yìqǐ qù pǎobù.', vn: 'Tiểu Lưu rủ tôi đi chạy bộ cùng.' }
              ],
              example: 'Ví dụ: 他还在教室里学习。→ E',
              questions: [
                { n: 51, zh: '我们要向您学习！', py: 'Wǒmen yào xiàng nín xuéxí!', vn: 'Chúng tôi phải học tập cô!', answer: 'C' },
                { n: 52, zh: '火车站离这儿远吗？', py: 'Huǒchēzhàn lí zhèr yuǎn ma?', vn: 'Ga tàu cách đây có xa không?', answer: 'B' },
                { n: 53, zh: '已经快8点了，你还出去做什么？', py: 'Yǐjīng kuài bā diǎn le, nǐ hái chūqu zuò shénme?', vn: 'Sắp 8 giờ rồi, cậu còn ra ngoài làm gì?', answer: 'F' },
                { n: 54, zh: '小狗怎么了？为什么不吃东西？', py: 'Xiǎogǒu zěnme le? Wèi shénme bù chī dōngxi?', vn: 'Con chó nhỏ sao thế? Sao không ăn?', answer: 'A' },
                { n: 55, zh: '但是，你知道，你没有他高。', py: 'Dànshì, nǐ zhīdào, nǐ méiyǒu tā gāo.', vn: 'Nhưng bạn biết đấy, bạn không cao bằng anh ấy.', answer: 'D' }
              ]
            },
            {
              range: [56, 60],
              options: [
                { k: 'A', zh: '他是我弟弟的中学同学。', py: 'Tā shì wǒ dìdi de zhōngxué tóngxué.', vn: 'Anh ấy là bạn học cấp hai của em trai tôi.' },
                { k: 'B', zh: '谢谢您给我们的帮助！', py: 'Xièxie nín gěi wǒmen de bāngzhù!', vn: 'Cảm ơn sự giúp đỡ của cô dành cho chúng tôi!' },
                { k: 'C', zh: '他现在每天工作10个小时，星期六也不休息。', py: 'Tā xiànzài měi tiān gōngzuò shí ge xiǎoshí, xīngqīliù yě bù xiūxi.', vn: 'Giờ anh ấy mỗi ngày làm 10 tiếng, thứ Bảy cũng không nghỉ.' },
                { k: 'D', zh: '你们听懂我说的话了吗？', py: 'Nǐmen tīng dǒng wǒ shuō de huà le ma?', vn: 'Các em nghe hiểu lời cô nói chưa?' },
                { k: 'E', zh: '等一下。你怎么回来这么晚？', py: 'Děng yíxià. Nǐ zěnme huílai zhème wǎn?', vn: 'Đợi chút. Sao anh về muộn thế?' }
              ],
              questions: [
                { n: 56, zh: '大家好！我姓王，是新来的汉语老师。', py: 'Dàjiā hǎo! Wǒ xìng Wáng, shì xīn lái de Hànyǔ lǎoshī.', vn: 'Chào các em! Cô họ Vương, là giáo viên tiếng Trung mới.', answer: 'D' },
                { n: 57, zh: '这个月真的非常忙。', py: 'Zhège yuè zhēn de fēicháng máng.', vn: 'Tháng này thật sự rất bận.', answer: 'C' },
                { n: 58, zh: '开门，快开门。', py: 'Kāi mén, kuài kāi mén.', vn: 'Mở cửa, mau mở cửa.', answer: 'E' },
                { n: 59, zh: '她笑着对我说："不客气。"', py: 'Tā xiàozhe duì wǒ shuō: "Bú kèqi."', vn: 'Cô ấy cười nói với tôi: "Không có gì."', answer: 'B' },
                { n: 60, zh: '我的天！你们认识？这怎么可能？', py: 'Wǒ de tiān! Nǐmen rènshi? Zhè zěnme kěnéng?', vn: 'Trời ơi! Hai người quen nhau? Sao có thể thế được?', answer: 'A' }
              ]
            }
          ]
        }
      ]
    }
  ]
};
