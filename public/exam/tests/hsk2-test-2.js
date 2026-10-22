// Đề thi thử HSK 2 – Đề số 2 (đề mẫu chính thức H20902 của Hanban).
window.EXAM_DATA = {
  id: 'hsk2-test-2',
  level: 'HSK 2',
  title: 'HSK 2 - Test 2',
  code: 'H20902',
  durationSec: 55 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk2-test-2/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk2-test-2.mp3',
      note: 'Bấm nút phát để nghe toàn bộ phần thi Nghe (mỗi câu đọc 2 lần, đúng như đề thi thật). Thanh audio luôn ghim ở đầu phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-pic',
          intro: 'Nghe mỗi câu và phán đoán câu nói có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: false, script: '左边的大，右边的小。', scriptVn: 'Bên trái to, bên phải nhỏ. (hình: quả bên trái nhỏ, bên phải to)' },
            { n: 2, img: 'l1-q2.jpg', answer: true, script: '您好！见到您很高兴。', scriptVn: 'Xin chào! Rất vui được gặp ông.' },
            { n: 3, img: 'l1-q3.jpg', answer: false, script: '你看，女孩子也喜欢踢足球。', scriptVn: 'Bạn xem, con gái cũng thích đá bóng. (hình là bóng rổ)' },
            { n: 4, img: 'l1-q4.jpg', answer: true, script: '咖啡来了，要不要喝一杯？', scriptVn: 'Cà phê đến rồi, có muốn uống một cốc không?' },
            { n: 5, img: 'l1-q5.jpg', answer: true, script: '昨天是小李的生日，下班后我们去唱歌了。', scriptVn: 'Hôm qua là sinh nhật Tiểu Lý, tan làm chúng tôi đi hát.' },
            { n: 6, img: 'l1-q6.jpg', answer: true, script: '太好了，我找到这本书了。', scriptVn: 'Tốt quá, tôi tìm thấy cuốn sách này rồi.' },
            { n: 7, img: 'l1-q7.jpg', answer: false, script: '中午她给女儿买了一件衣服。', scriptVn: 'Buổi trưa cô ấy mua cho con gái một chiếc áo. (hình là đôi giày)' },
            { n: 8, img: 'l1-q8.jpg', answer: false, script: '他们四个人每天都一起吃饭。', scriptVn: 'Bốn người họ ngày nào cũng ăn cơm cùng nhau. (hình chỉ có ba người)' },
            { n: 9, img: 'l1-q9.jpg', answer: true, script: '对不起，我现在很忙，十分钟后我再给你打电话。', scriptVn: 'Xin lỗi, giờ tôi đang bận, mười phút nữa tôi gọi lại cho bạn.' },
            { n: 10, img: 'l1-q10.jpg', answer: false, script: '他们开着车出去了。', scriptVn: 'Họ lái xe ra ngoài rồi. (hình là hai người đi bộ mua sắm)' }
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
                { n: 11, answer: 'C', script: '女：是今天早上的报纸吗？\n男：不是，是昨天的，今天的还没到。', scriptVn: 'Nữ: Là báo sáng nay à? / Nam: Không, báo hôm qua, hôm nay chưa đến.' },
                { n: 12, answer: 'B', script: '男：你去洗洗手。\n女：好，今天晚上给我准备什么好吃的了？', scriptVn: 'Nam: Em đi rửa tay đi. / Nữ: Được, tối nay chuẩn bị món gì ngon cho em thế?' },
                { n: 13, answer: 'F', script: '女：车怎么了？\n男：没关系，可能出了点儿小问题。', scriptVn: 'Nữ: Xe sao thế? / Nam: Không sao, chắc có chút vấn đề nhỏ.' },
                { n: 14, answer: 'A', script: '男：现在雨已经不下了。\n女：是吗？我看看。', scriptVn: 'Nam: Bây giờ mưa tạnh rồi. / Nữ: Thật à? Để tôi xem.' },
                { n: 15, answer: 'E', script: '女：怎么样？漂亮吗？\n男：真漂亮！我觉得非常好。', scriptVn: 'Nữ: Thế nào? Đẹp không? / Nam: Đẹp thật! Tôi thấy rất tuyệt.' }
              ]
            },
            {
              range: [16, 20], pics: { A: 'l2b-A.jpg', B: 'l2b-B.jpg', C: 'l2b-C.jpg', D: 'l2b-D.jpg', E: 'l2b-E.jpg' },
              questions: [
                { n: 16, answer: 'E', script: '男：这个字是什么意思？\n女：在哪儿？', scriptVn: 'Nam: Chữ này nghĩa là gì? / Nữ: Ở đâu?' },
                { n: 17, answer: 'D', script: '女：这个药一天吃几次呢？\n男：医生说一天吃两次。', scriptVn: 'Nữ: Thuốc này một ngày uống mấy lần? / Nam: Bác sĩ nói một ngày uống hai lần.' },
                { n: 18, answer: 'B', script: '男：上午考得怎么样？\n女：别问了，很多题我都不会做。', scriptVn: 'Nam: Sáng nay thi thế nào? / Nữ: Đừng hỏi nữa, nhiều câu tôi không làm được.' },
                { n: 19, answer: 'C', script: '女：我想去北京旅游，北京哪儿最好玩儿？\n男：让我想想。', scriptVn: 'Nữ: Tôi muốn đi du lịch Bắc Kinh, Bắc Kinh chỗ nào vui nhất? / Nam: Để tôi nghĩ xem.' },
                { n: 20, answer: 'A', script: '男：今天还是阴天，这天气真冷。\n女：是，我穿了这么多，还觉得冷。', scriptVn: 'Nam: Hôm nay vẫn âm u, thời tiết lạnh thật. / Nữ: Ừ, tôi mặc nhiều thế này mà vẫn thấy lạnh.' }
              ]
            }
          ]
        },
        {
          name: 'Phần 3', range: [21, 30], type: 'mc',
          intro: 'Nghe hội thoại ngắn và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 21, options: [{ zh: '工作', py: 'gōngzuò' }, { zh: '打篮球', py: 'dǎ lánqiú' }, { zh: '看电视', py: 'kàn diànshì' }], answer: 'C', script: '女：你眼睛怎么这么红？没休息好？\n男：是，昨天晚上看电视看到十二点。\n问：男的昨天晚上做什么了？', scriptVn: 'Nữ: Sao mắt anh đỏ thế? Không nghỉ ngơi tốt à? / Nam: Ừ, tối qua xem ti vi đến mười hai giờ. / Hỏi: Tối qua người nam làm gì?' },
            { n: 22, options: [{ zh: '饭店', py: 'fàndiàn' }, { zh: '商店', py: 'shāngdiàn' }, { zh: '教室', py: 'jiàoshì' }], answer: 'A', script: '男：服务员，请给我来一杯热水。谢谢。\n女：好的，不客气。\n问：他们最可能在哪儿？', scriptVn: 'Nam: Phục vụ, cho tôi một cốc nước nóng. Cảm ơn. / Nữ: Vâng, không có gì. / Hỏi: Họ có thể đang ở đâu?' },
            { n: 23, options: [{ zh: '200多', py: 'liǎngbǎi duō' }, { zh: '2000多', py: 'liǎngqiān duō' }, { zh: '3000多', py: 'sānqiān duō' }], answer: 'B', script: '女：你知道你们学校有多少学生吗？\n男：知道，有两千多。\n问：这个学校有多少学生？', scriptVn: 'Nữ: Cậu biết trường cậu có bao nhiêu học sinh không? / Nam: Biết, hơn hai nghìn. / Hỏi: Trường này có bao nhiêu học sinh?' },
            { n: 24, options: [{ zh: '2007年', py: 'èr líng líng qī nián' }, { zh: '2008年', py: 'èr líng líng bā nián' }, { zh: '2009年', py: 'èr líng líng jiǔ nián' }], answer: 'B', script: '男：你是什么时候来这个公司的？\n女：我是去年2008年来的。\n问：女的是什么时候来这个公司的？', scriptVn: 'Nam: Cô vào công ty này khi nào? / Nữ: Tôi vào năm ngoái, năm 2008. / Hỏi: Người nữ vào công ty khi nào?' },
            { n: 25, options: [{ zh: '太累了', py: 'tài lèi le' }, { zh: '看过了', py: 'kànguo le' }, { zh: '有别的事', py: 'yǒu bié de shì' }], answer: 'B', script: '女：我们下午去看电影，好吗？\n男：我上个星期已经看过了，我们去游泳吧。\n问：男的为什么不去看电影？', scriptVn: 'Nữ: Chiều nay mình đi xem phim nhé? / Nam: Tuần trước anh xem rồi, mình đi bơi đi. / Hỏi: Vì sao người nam không đi xem phim?' },
            { n: 26, options: [{ zh: '鱼', py: 'yú' }, { zh: '西瓜', py: 'xīguā' }, { zh: '鸡蛋', py: 'jīdàn' }], answer: 'A', script: '男：你好，鱼怎么卖呢？\n女：很便宜，两块钱一斤。\n问：男的要买什么？', scriptVn: 'Nam: Chào chị, cá bán thế nào? / Nữ: Rẻ lắm, hai tệ một cân. / Hỏi: Người nam muốn mua gì?' },
            { n: 27, options: [{ zh: '机场', py: 'jīchǎng' }, { zh: '医院', py: 'yīyuàn' }, { zh: '火车站', py: 'huǒchēzhàn' }], answer: 'A', script: '女：张小姐的飞机快到了，我们还要多长时间？\n男：没问题，我们再有五分钟就到机场了。\n问：他们要去哪儿？', scriptVn: 'Nữ: Máy bay của cô Trương sắp đến rồi, mình còn bao lâu nữa? / Nam: Không sao, năm phút nữa là đến sân bay. / Hỏi: Họ đi đâu?' },
            { n: 28, options: [{ zh: '很便宜', py: 'hěn piányi' }, { zh: '颜色好', py: 'yánsè hǎo' }, { zh: '有点儿高', py: 'yǒudiǎnr gāo' }], answer: 'B', script: '男：这个椅子有点儿贵，但是颜色很不错。\n女：你喜欢？那就买它吧。\n问：男的觉得这个椅子怎么样？', scriptVn: 'Nam: Cái ghế này hơi đắt, nhưng màu rất đẹp. / Nữ: Anh thích à? Vậy mua nó đi. / Hỏi: Người nam thấy cái ghế thế nào?' },
            { n: 29, options: [{ zh: '7月8号', py: 'qī yuè bā hào' }, { zh: '8月7号', py: 'bā yuè qī hào' }, { zh: '8月17号', py: 'bā yuè shíqī hào' }], answer: 'B', script: '女：你准备哪天去中国？\n男：我买的机票是八月七号的。\n问：男的哪天去中国？', scriptVn: 'Nữ: Anh định ngày nào đi Trung Quốc? / Nam: Vé máy bay tôi mua là ngày 7 tháng 8. / Hỏi: Người nam đi Trung Quốc ngày nào?' },
            { n: 30, options: [{ zh: '爸爸', py: 'bàba' }, { zh: '妈妈', py: 'māma' }, { zh: '送牛奶的', py: 'sòng niúnǎi de' }], answer: 'C', script: '男：谁在门外？是你妈妈回来了？\n女：不是，是送牛奶的。\n问：谁在门外？', scriptVn: 'Nam: Ai ở ngoài cửa? Mẹ em về à? / Nữ: Không, là người giao sữa. / Hỏi: Ai ở ngoài cửa?' }
          ]
        },
        {
          name: 'Phần 4', range: [31, 35], type: 'mc',
          intro: 'Nghe hội thoại dài và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 31, options: [{ zh: '吃饭', py: 'chī fàn' }, { zh: '买菜', py: 'mǎi cài' }, { zh: '喝茶', py: 'hē chá' }], answer: 'A', script: '男：今天的羊肉做得很好吃，你怎么不吃了？\n女：少吃肉，多吃菜，对身体好。\n男：身体好还要多运动。\n女：那我们明天去跑步吧。\n问：他们在做什么？', scriptVn: 'Nam: Thịt dê hôm nay nấu ngon lắm, sao em không ăn nữa? / Nữ: Ăn ít thịt, ăn nhiều rau, tốt cho sức khoẻ. / Nam: Khoẻ còn phải vận động nhiều. / Nữ: Vậy mai mình đi chạy bộ. / Hỏi: Họ đang làm gì?' },
            { n: 32, options: [{ zh: '很远', py: 'hěn yuǎn' }, { zh: '很近', py: 'hěn jìn' }, { zh: '不太远', py: 'bú tài yuǎn' }], answer: 'C', script: '女：你家离学校远吗？\n男：不太远。\n女：你每天怎么去上学？\n男：有时候坐公共汽车，有时候走路去。\n问：男的家离学校远吗？', scriptVn: 'Nữ: Nhà cậu cách trường có xa không? / Nam: Không xa lắm. / Nữ: Hằng ngày cậu đi học thế nào? / Nam: Có lúc đi xe buýt, có lúc đi bộ. / Hỏi: Nhà người nam cách trường có xa không?' },
            { n: 33, options: [{ zh: '妻子', py: 'qīzi' }, { zh: '妹妹', py: 'mèimei' }, { zh: '女儿', py: 'nǚ\'ér' }], answer: 'C', script: '男：您从几岁开始学习跳舞？\n女：七岁。\n男：是吗？我女儿今年也七岁了。我希望她能和您学跳舞，可以吗？\n女：没问题，非常欢迎。\n问：男的想让谁学跳舞？', scriptVn: 'Nam: Cô học múa từ mấy tuổi? / Nữ: Bảy tuổi. / Nam: Vậy à? Con gái tôi năm nay cũng bảy tuổi. Tôi mong nó được học múa với cô, được không? / Nữ: Không vấn đề, rất hoan nghênh. / Hỏi: Người nam muốn ai học múa?' },
            { n: 34, options: [{ zh: '天晴了', py: 'tiān qíng le' }, { zh: '下雨了', py: 'xià yǔ le' }, { zh: '下雪了', py: 'xià xuě le' }], answer: 'C', script: '女：天快黑了，我要回去了。\n男：好的。外面正在下雪，您路上慢点儿。\n女：没关系。明天见。\n男：好的。再见。\n问：现在天气怎么样？', scriptVn: 'Nữ: Trời sắp tối rồi, tôi phải về. / Nam: Vâng. Bên ngoài đang có tuyết, cô đi đường cẩn thận. / Nữ: Không sao. Mai gặp. / Nam: Vâng. Tạm biệt. / Hỏi: Thời tiết bây giờ thế nào?' },
            { n: 35, options: [{ zh: '朋友要来', py: 'péngyou yào lái' }, { zh: '要去坐船', py: 'yào qù zuò chuán' }, { zh: '要去上课', py: 'yào qù shàngkè' }], answer: 'A', script: '男：你怎么九点就睡觉了？\n女：因为明天要早起。\n男：明天星期日，你起那么早做什么？\n女：我一个朋友明天要来，船七点就到。\n问：女的为什么要早起？', scriptVn: 'Nam: Sao chín giờ em đã đi ngủ? / Nữ: Vì mai phải dậy sớm. / Nam: Mai Chủ nhật, em dậy sớm thế làm gì? / Nữ: Một người bạn của em mai đến, tàu bảy giờ đã cập bến. / Hỏi: Vì sao người nữ phải dậy sớm?' }
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
                { n: 36, zh: '同学们，你们听懂了吗？', py: 'Tóngxuémen, nǐmen tīng dǒng le ma?', vn: 'Các em, các em nghe hiểu chưa?', answer: 'E' },
                { n: 37, zh: '里面有你最爱吃的水果。', py: 'Lǐmiàn yǒu nǐ zuì ài chī de shuǐguǒ.', vn: 'Bên trong có loại hoa quả bạn thích ăn nhất.', answer: 'A' },
                { n: 38, zh: '喂，儿子生病了，你什么时候能回来？', py: 'Wéi, érzi shēngbìng le, nǐ shénme shíhou néng huílai?', vn: 'Alô, con trai ốm rồi, bao giờ anh về được?', answer: 'F' },
                { n: 39, zh: '我来介绍一下，这是我丈夫。', py: 'Wǒ lái jièshào yíxià, zhè shì wǒ zhàngfu.', vn: 'Để tôi giới thiệu, đây là chồng tôi.', answer: 'C' },
                { n: 40, zh: '现在快6点了，我20分钟后去公司找你。', py: 'Xiànzài kuài liù diǎn le, wǒ èrshí fēnzhōng hòu qù gōngsī zhǎo nǐ.', vn: 'Giờ sắp 6 giờ rồi, 20 phút nữa tôi đến công ty tìm bạn.', answer: 'B' }
              ]
            }
          ]
        },
        {
          name: 'Phần 2', range: [41, 45], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '房间', py: 'fángjiān' }, { k: 'B', zh: '旁边', py: 'pángbiān' }, { k: 'C', zh: '认识', py: 'rènshi' },
            { k: 'D', zh: '完', py: 'wán' }, { k: 'E', zh: '贵', py: 'guì', used: true }, { k: 'F', zh: '等', py: 'děng' }
          ],
          example: 'Ví dụ: 这儿的羊肉很好吃，但是也很（ E ）。',
          questions: [
            { n: 41, zh: '这些题你什么时候能做（　）？', py: 'Zhèxiē tí nǐ shénme shíhou néng zuò (　)?', vn: 'Những bài này bao giờ bạn làm (xong)?', answer: 'D' },
            { n: 42, zh: '快点儿，大家都在（　）你吃饭呢。', py: 'Kuài diǎnr, dàjiā dōu zài (　) nǐ chī fàn ne.', vn: 'Nhanh lên, mọi người đang (đợi) bạn ăn cơm đấy.', answer: 'F' },
            { n: 43, zh: '别找了，手机在桌子上呢，电脑（　）。', py: 'Bié zhǎo le, shǒujī zài zhuōzi shang ne, diànnǎo (　).', vn: 'Đừng tìm nữa, điện thoại ở trên bàn, (bên cạnh) máy tính.', answer: 'B' },
            { n: 44, zh: '我来北京的第一天就（　）他了。', py: 'Wǒ lái Běijīng de dì-yī tiān jiù (　) tā le.', vn: 'Ngày đầu tiên đến Bắc Kinh tôi đã (quen) anh ấy rồi.', answer: 'C' },
            { n: 45, zh: '男：（　）里有人吗？\n女：请进，先生，您找谁？', py: 'Nán: (　) li yǒu rén ma?\nNǚ: Qǐng jìn, xiānsheng, nín zhǎo shéi?', vn: 'Nam: Trong (phòng) có ai không? / Nữ: Mời vào, thưa ông, ông tìm ai?', answer: 'A' }
          ]
        },
        {
          name: 'Phần 3', range: [46, 50], type: 'judge-text',
          intro: 'Đọc câu và phán đoán câu ★ đúng (✓) hay sai (✗).',
          questions: [
            { n: 46, zh: '我知道她的名字，她姓杨，叫杨笑笑，她姐姐是我同学。', py: 'Wǒ zhīdào tā de míngzi, tā xìng Yáng, jiào Yáng Xiàoxiao, tā jiějie shì wǒ tóngxué.', vn: 'Tôi biết tên cô ấy, cô ấy họ Dương, tên Dương Tiếu Tiếu, chị cô ấy là bạn học của tôi.', star: '我认识杨笑笑的姐姐。', starPy: 'Wǒ rènshi Yáng Xiàoxiao de jiějie.', starVn: 'Tôi quen chị của Dương Tiếu Tiếu.', answer: true },
            { n: 47, zh: '我的一个朋友正在找房子，希望住得离公司近一些，这样他每天早上就可以7点起床，比现在多睡一个小时。', py: 'Wǒ de yí ge péngyou zhèngzài zhǎo fángzi, xīwàng zhù de lí gōngsī jìn yìxiē, zhèyàng tā měi tiān zǎoshang jiù kěyǐ qī diǎn qǐchuáng, bǐ xiànzài duō shuì yí ge xiǎoshí.', vn: 'Một người bạn của tôi đang tìm nhà, mong ở gần công ty hơn một chút, như vậy mỗi sáng anh ấy có thể 7 giờ dậy, ngủ nhiều hơn bây giờ một tiếng.', star: '朋友现在每天7点起床。', starPy: 'Péngyou xiànzài měi tiān qī diǎn qǐchuáng.', starVn: 'Bạn tôi hiện nay mỗi ngày 7 giờ dậy.', answer: false },
            { n: 48, zh: '我喜欢猫，但是丈夫不喜欢，所以到现在家里也没有猫。我希望有一天能有一个小猫。', py: 'Wǒ xǐhuan māo, dànshì zhàngfu bù xǐhuan, suǒyǐ dào xiànzài jiā li yě méiyǒu māo. Wǒ xīwàng yǒu yì tiān néng yǒu yí ge xiǎomāo.', vn: 'Tôi thích mèo, nhưng chồng không thích, nên đến giờ nhà vẫn không có mèo. Tôi mong một ngày nào đó có được một con mèo con.', star: '我丈夫想要一个小猫。', starPy: 'Wǒ zhàngfu xiǎng yào yí ge xiǎomāo.', starVn: 'Chồng tôi muốn có một con mèo con.', answer: false },
            { n: 49, zh: '从我家到北京，坐火车就5个小时，比坐飞机便宜很多。所以，明天我准备坐火车去。', py: 'Cóng wǒ jiā dào Běijīng, zuò huǒchē jiù wǔ ge xiǎoshí, bǐ zuò fēijī piányi hěn duō. Suǒyǐ, míngtiān wǒ zhǔnbèi zuò huǒchē qù.', vn: 'Từ nhà tôi đến Bắc Kinh, đi tàu hoả chỉ 5 tiếng, rẻ hơn máy bay nhiều. Vì vậy mai tôi định đi tàu.', star: '我明天去北京。', starPy: 'Wǒ míngtiān qù Běijīng.', starVn: 'Ngày mai tôi đi Bắc Kinh.', answer: true },
            { n: 50, zh: '李哥，赵老师让我告诉你，你的电影票买到了。', py: 'Lǐ gē, Zhào lǎoshī ràng wǒ gàosu nǐ, nǐ de diànyǐngpiào mǎidào le.', vn: 'Anh Lý, thầy Triệu bảo tôi nói với anh, vé xem phim của anh mua được rồi.', star: '李哥正在看电影。', starPy: 'Lǐ gē zhèngzài kàn diànyǐng.', starVn: 'Anh Lý đang xem phim.', answer: false }
          ]
        },
        {
          name: 'Phần 4', range: [51, 60], type: 'sent-match',
          intro: 'Chọn câu trả lời/câu ghép phù hợp với mỗi câu.',
          groups: [
            {
              range: [51, 55],
              options: [
                { k: 'A', zh: '别笑了，我说的是真的。', py: 'Bié xiào le, wǒ shuō de shì zhēn de.', vn: 'Đừng cười nữa, tôi nói thật đấy.' },
                { k: 'B', zh: '还可以，不到300元。', py: 'Hái kěyǐ, bú dào sānbǎi yuán.', vn: 'Cũng được, chưa đến 300 tệ.' },
                { k: 'C', zh: '这儿有商店吗？我想去买点儿东西。', py: 'Zhèr yǒu shāngdiàn ma? Wǒ xiǎng qù mǎi diǎnr dōngxi.', vn: 'Ở đây có cửa hàng không? Tôi muốn đi mua chút đồ.' },
                { k: 'D', zh: '是吗？我的手表慢了？', py: 'Shì ma? Wǒ de shǒubiǎo màn le?', vn: 'Thật à? Đồng hồ của tôi chậm rồi?' },
                { k: 'E', zh: '他在哪儿呢？你看见他了吗？', py: 'Tā zài nǎr ne? Nǐ kànjiàn tā le ma?', vn: 'Anh ấy ở đâu? Bạn thấy anh ấy không?', used: true },
                { k: 'F', zh: '那我和你一起去。', py: 'Nà wǒ hé nǐ yìqǐ qù.', vn: 'Vậy tôi đi cùng bạn.' }
              ],
              example: 'Ví dụ: 他还在教室里学习。→ E',
              questions: [
                { n: 51, zh: '9点？现在已经9点25了。', py: 'Jiǔ diǎn? Xiànzài yǐjīng jiǔ diǎn èrshíwǔ le.', vn: '9 giờ? Bây giờ đã 9 giờ 25 rồi.', answer: 'D' },
                { n: 52, zh: '我家的狗喜欢吃苹果。', py: 'Wǒ jiā de gǒu xǐhuan chī píngguǒ.', vn: 'Con chó nhà tôi thích ăn táo.', answer: 'A' },
                { n: 53, zh: '你的自行车是白色的？真漂亮，贵吗？', py: 'Nǐ de zìxíngchē shì báisè de? Zhēn piàoliang, guì ma?', vn: 'Xe đạp của bạn màu trắng à? Đẹp thật, có đắt không?', answer: 'B' },
                { n: 54, zh: '鸡蛋吃完了，下午我再买一些。', py: 'Jīdàn chī wán le, xiàwǔ wǒ zài mǎi yìxiē.', vn: 'Trứng ăn hết rồi, chiều tôi mua thêm.', answer: 'F' },
                { n: 55, zh: '向前走，就在那儿。', py: 'Xiàng qián zǒu, jiù zài nàr.', vn: 'Đi thẳng về phía trước, ở ngay đó.', answer: 'C' }
              ]
            },
            {
              range: [56, 60],
              options: [
                { k: 'A', zh: '我从您这儿学了很多。', py: 'Wǒ cóng nín zhèr xuéle hěn duō.', vn: 'Tôi đã học được rất nhiều từ thầy.' },
                { k: 'B', zh: '新年快乐！', py: 'Xīnnián kuàilè!', vn: 'Chúc mừng năm mới!' },
                { k: 'C', zh: '我弟弟在北京大学读书，今年是第三年了。', py: 'Wǒ dìdi zài Běijīng Dàxué dú shū, jīnnián shì dì-sān nián le.', vn: 'Em trai tôi học ở Đại học Bắc Kinh, năm nay là năm thứ ba.' },
                { k: 'D', zh: '听说他病了，我们找时间去看看他吧。', py: 'Tīngshuō tā bìng le, wǒmen zhǎo shíjiān qù kànkan tā ba.', vn: 'Nghe nói anh ấy ốm, chúng ta tìm thời gian đi thăm anh ấy đi.' },
                { k: 'E', zh: '这个是下午送？送到哪儿？', py: 'Zhège shì xiàwǔ sòng? Sòng dào nǎr?', vn: 'Cái này giao buổi chiều à? Giao đến đâu?' }
              ],
              questions: [
                { n: 56, zh: '今天是1月1日。', py: 'Jīntiān shì yī yuè yī rì.', vn: 'Hôm nay là ngày 1 tháng 1.', answer: 'B' },
                { n: 57, zh: '等一下，我打电话问一下。', py: 'Děng yíxià, wǒ dǎ diànhuà wèn yíxià.', vn: 'Đợi chút, tôi gọi điện hỏi xem.', answer: 'E' },
                { n: 58, zh: '他会说汉语？', py: 'Tā huì shuō Hànyǔ?', vn: 'Anh ấy biết nói tiếng Trung à?', answer: 'C' },
                { n: 59, zh: '星期六怎么样？', py: 'Xīngqīliù zěnmeyàng?', vn: 'Thứ Bảy thì thế nào?', answer: 'D' },
                { n: 60, zh: '希望我的回答能对你有帮助。', py: 'Xīwàng wǒ de huídá néng duì nǐ yǒu bāngzhù.', vn: 'Mong câu trả lời của tôi giúp ích được cho bạn.', answer: 'A' }
              ]
            }
          ]
        }
      ]
    }
  ]
};
