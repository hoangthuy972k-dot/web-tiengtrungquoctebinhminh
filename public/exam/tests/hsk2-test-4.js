// Đề thi thử HSK 2 – Đề số 4 (đề mẫu chính thức H21004 của Hanban).
window.EXAM_DATA = {
  id: 'hsk2-test-4',
  level: 'HSK 2',
  title: 'HSK 2 - Test 4',
  code: 'H21004',
  durationSec: 55 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk2-test-4/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk2-test-4.mp3',
      note: 'Bấm nút phát để nghe toàn bộ phần thi Nghe (mỗi câu đọc 2 lần, đúng như đề thi thật). Thanh audio luôn ghim ở đầu phần Nghe.',
      parts: [
        {
          name: 'Phần 1', range: [1, 10], type: 'judge-pic',
          intro: 'Nghe mỗi câu và phán đoán câu nói có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: false, script: '她在洗孩子的衣服。', scriptVn: 'Cô ấy đang giặt quần áo cho con. (hình là cầm giẻ lau, không giặt đồ)' },
            { n: 2, img: 'l1-q2.jpg', answer: true, script: '这次我们是第一！', scriptVn: 'Lần này chúng ta đứng nhất!' },
            { n: 3, img: 'l1-q3.jpg', answer: false, script: '她笑着说："明天见。"', scriptVn: 'Cô ấy cười nói: "Mai gặp." (hình cô gái không cười, đang nghe điện thoại)' },
            { n: 4, img: 'l1-q4.jpg', answer: true, script: '前面的人真多！', scriptVn: 'Phía trước đông người thật!' },
            { n: 5, img: 'l1-q5.jpg', answer: false, script: '我们跑步去学校吧。', scriptVn: 'Chúng ta chạy bộ đến trường nhé. (hình là đi xe đạp)' },
            { n: 6, img: 'l1-q6.jpg', answer: false, script: '给，喝杯茶。', scriptVn: 'Đây, uống chén trà. (hình là ăn mì)' },
            { n: 7, img: 'l1-q7.jpg', answer: false, script: '小姐，这里不能打电话。', scriptVn: 'Thưa cô, ở đây không được gọi điện thoại. (biển cấm đi bộ)' },
            { n: 8, img: 'l1-q8.jpg', answer: true, script: '你别睡了，快起床。', scriptVn: 'Đừng ngủ nữa, mau dậy đi.' },
            { n: 9, img: 'l1-q9.jpg', answer: true, script: '没错，现在是三点零五分。', scriptVn: 'Không sai, bây giờ là ba giờ năm phút.' },
            { n: 10, img: 'l1-q10.jpg', answer: true, script: '你想知道？好吧，那我告诉你。', scriptVn: 'Bạn muốn biết à? Được, vậy tôi nói cho bạn.' }
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
                { n: 11, answer: 'B', script: '女：谢谢你！谢谢你帮我找到了小狗。\n男：不客气。', scriptVn: 'Nữ: Cảm ơn anh! Cảm ơn anh giúp tôi tìm thấy con chó nhỏ. / Nam: Không có gì.' },
                { n: 12, answer: 'E', script: '男：你怎么了？\n女：没什么，今天的工作我没做好。', scriptVn: 'Nam: Em sao thế? / Nữ: Không có gì, công việc hôm nay em làm không tốt.' },
                { n: 13, answer: 'A', script: '女：我穿这件衣服怎么样？\n男：我觉得很漂亮。', scriptVn: 'Nữ: Em mặc bộ này thế nào? / Nam: Anh thấy rất đẹp.' },
                { n: 14, answer: 'F', script: '男：咖啡喝太多了对身体不好。\n女：我知道，我就每天上午喝两杯。', scriptVn: 'Nam: Uống nhiều cà phê quá không tốt cho sức khoẻ. / Nữ: Em biết, em chỉ uống hai cốc mỗi sáng thôi.' },
                { n: 15, answer: 'C', script: '女：你到哪儿了？\n男：我在公共汽车上呢，你再等我几分钟。', scriptVn: 'Nữ: Anh đến đâu rồi? / Nam: Anh đang trên xe buýt, em đợi anh vài phút nữa.' }
              ]
            },
            {
              range: [16, 20], pics: { A: 'l2b-A.jpg', B: 'l2b-B.jpg', C: 'l2b-C.jpg', D: 'l2b-D.jpg', E: 'l2b-E.jpg' },
              questions: [
                { n: 16, answer: 'B', script: '男：你生病了？\n女：没事儿，吃点儿药就好了。', scriptVn: 'Nam: Em ốm à? / Nữ: Không sao, uống chút thuốc là khỏi.' },
                { n: 17, answer: 'E', script: '女：张先生，您看一下，您的名字我没写错吧？\n男：没错。', scriptVn: 'Nữ: Ông Trương, ông xem, tên ông tôi viết không sai chứ? / Nam: Không sai.' },
                { n: 18, answer: 'D', script: '男：大家都准备好了吗？\n女：没问题，可以开始了。', scriptVn: 'Nam: Mọi người chuẩn bị xong chưa? / Nữ: Không vấn đề, có thể bắt đầu rồi.' },
                { n: 19, answer: 'C', script: '女：这些桌子和椅子是什么时候买的？\n男：今天中午。', scriptVn: 'Nữ: Những bàn ghế này mua lúc nào? / Nam: Trưa nay.' },
                { n: 20, answer: 'A', script: '男：他的舞跳得好不好？\n女：非常好，我喜欢。', scriptVn: 'Nam: Anh ấy nhảy có đẹp không? / Nữ: Rất đẹp, tôi thích.' }
              ]
            }
          ]
        },
        {
          name: 'Phần 3', range: [21, 30], type: 'mc',
          intro: 'Nghe hội thoại ngắn và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 21, options: [{ zh: '下雨', py: 'xià yǔ' }, { zh: '太忙了', py: 'tài máng le' }, { zh: '要考试了', py: 'yào kǎoshì le' }], answer: 'A', script: '女：昨天没踢足球？\n男：因为下雨，所以我们都没去。\n问：他们为什么没去踢足球？', scriptVn: 'Nữ: Hôm qua không đá bóng à? / Nam: Vì trời mưa nên bọn tôi đều không đi. / Hỏi: Vì sao họ không đi đá bóng?' },
            { n: 22, options: [{ zh: '今天', py: 'jīntiān' }, { zh: '明天', py: 'míngtiān' }, { zh: '后天', py: 'hòutiān' }], answer: 'B', script: '男：买到电影票了？今天晚上的？\n女：没有，是明天的。但是比今天的便宜四十块钱。\n问：他们什么时候去看电影？', scriptVn: 'Nam: Mua được vé xem phim rồi à? Tối nay? / Nữ: Không, vé ngày mai. Nhưng rẻ hơn hôm nay bốn mươi tệ. / Hỏi: Họ đi xem phim khi nào?' },
            { n: 23, options: [{ zh: '很高', py: 'hěn gāo' }, { zh: '做妈妈了', py: 'zuò māma le' }, { zh: '没男朋友', py: 'méi nánpéngyou' }], answer: 'B', script: '女：你姐姐真漂亮，我给她介绍个男朋友吧？\n男：我姐姐的儿子都两岁了。\n问：他姐姐怎么样？', scriptVn: 'Nữ: Chị bạn đẹp thật, tôi giới thiệu bạn trai cho chị ấy nhé? / Nam: Con trai chị tôi đã hai tuổi rồi. / Hỏi: Chị của anh ấy thế nào?' },
            { n: 24, options: [{ zh: '没开机', py: 'méi kāi jī' }, { zh: '找不到了', py: 'zhǎobúdào le' }, { zh: '快没电了', py: 'kuài méi diàn le' }], answer: 'C', script: '男：我的手机快没电了，这件事情晚上再说吧。\n女：也好，晚上等你电话。\n问：男的手机怎么了？', scriptVn: 'Nam: Điện thoại của tôi sắp hết pin, chuyện này tối nói tiếp nhé. / Nữ: Cũng được, tối đợi điện thoại của anh. / Hỏi: Điện thoại của người nam làm sao?' },
            { n: 25, options: [{ zh: '教室', py: 'jiàoshì' }, { zh: '公司', py: 'gōngsī' }, { zh: '医院', py: 'yīyuàn' }], answer: 'C', script: '女：你真的认识路？是不是走错了？\n男：没错，那个医院我去过好几次了，就在前面。\n问：他们要去哪儿？', scriptVn: 'Nữ: Anh thật sự biết đường à? Có phải đi nhầm không? / Nam: Không sai, bệnh viện đó tôi đến mấy lần rồi, ngay phía trước. / Hỏi: Họ đi đâu?' },
            { n: 26, options: [{ zh: '家里', py: 'jiā li' }, { zh: '商店', py: 'shāngdiàn' }, { zh: '饭馆儿', py: 'fànguǎnr' }], answer: 'A', script: '男：我回来了，给我做什么好吃的了？\n女：有你最爱吃的鱼。\n问：他们最可能在哪儿？', scriptVn: 'Nam: Anh về rồi, làm món gì ngon cho anh thế? / Nữ: Có cá anh thích ăn nhất. / Hỏi: Họ có thể đang ở đâu?' },
            { n: 27, options: [{ zh: '多运动', py: 'duō yùndòng' }, { zh: '少吃肉', py: 'shǎo chī ròu' }, { zh: '多吃水果', py: 'duō chī shuǐguǒ' }], answer: 'A', script: '女：爸，我现在七十公斤了。\n男：多少？七十公斤？那你真要多运动了。\n问：爸爸让女儿做什么？', scriptVn: 'Nữ: Bố, con bảy mươi ký rồi. / Nam: Bao nhiêu? Bảy mươi ký? Vậy con thật sự phải vận động nhiều rồi. / Hỏi: Bố bảo con gái làm gì?' },
            { n: 28, options: [{ zh: '在右边', py: 'zài yòubian' }, { zh: '有两张', py: 'yǒu liǎng zhāng' }, { zh: '还没看见', py: 'hái méi kànjiàn' }], answer: 'C', script: '男：看见没？那报纸就在电视旁边，左边。\n女：等一下，你这儿的东西太多了。\n问：女的是什么意思？', scriptVn: 'Nam: Thấy chưa? Tờ báo ngay cạnh ti vi, bên trái. / Nữ: Đợi chút, đồ của anh ở đây nhiều quá. / Hỏi: Người nữ có ý gì?' },
            { n: 29, options: [{ zh: '5分钟', py: 'wǔ fēnzhōng' }, { zh: '10分钟', py: 'shí fēnzhōng' }, { zh: '15分钟', py: 'shíwǔ fēnzhōng' }], answer: 'B', script: '女：你住哪儿？离学校远吗？\n男：离学校很近，从我家到学校也就十分钟的路。\n问：从他家到学校要多长时间？', scriptVn: 'Nữ: Bạn ở đâu? Cách trường có xa không? / Nam: Rất gần trường, từ nhà tôi đến trường chỉ mười phút đường. / Hỏi: Từ nhà anh ấy đến trường mất bao lâu?' },
            { n: 30, options: [{ zh: '菜', py: 'cài' }, { zh: '身体', py: 'shēntǐ' }, { zh: '茶馆儿', py: 'cháguǎnr' }], answer: 'C', script: '男：这个茶馆儿是什么时候开的？\n女：去年，那时候你还没来中国呢。\n问：他们在说什么？', scriptVn: 'Nam: Quán trà này mở khi nào? / Nữ: Năm ngoái, lúc đó anh còn chưa đến Trung Quốc. / Hỏi: Họ đang nói về gì?' }
          ]
        },
        {
          name: 'Phần 4', range: [31, 35], type: 'mc',
          intro: 'Nghe hội thoại dài và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 31, options: [{ zh: '机场', py: 'jīchǎng' }, { zh: '路上', py: 'lù shang' }, { zh: '飞机上', py: 'fēijī shang' }], answer: 'B', script: '男：你现在到哪儿了？\n女：正在去飞机场的路上，你已经到了吗？\n男：对，我下飞机了。你多长时间能到这儿？\n女：对不起，很快，十分钟就到。\n问：女的现在在哪里？', scriptVn: 'Nam: Em đến đâu rồi? / Nữ: Đang trên đường ra sân bay, anh đến rồi à? / Nam: Ừ, anh xuống máy bay rồi. Bao lâu nữa em tới? / Nữ: Xin lỗi, nhanh thôi, mười phút nữa. / Hỏi: Người nữ hiện đang ở đâu?' },
            { n: 32, options: [{ zh: '5点', py: 'wǔ diǎn' }, { zh: '6点', py: 'liù diǎn' }, { zh: '7点', py: 'qī diǎn' }], answer: 'A', script: '女：您还有什么问题吗？\n男：你们公司早上几点上班？\n女：九点。下午五点下班。\n男：好的，谢谢。\n问：这个公司几点下班？', scriptVn: 'Nữ: Ông còn câu hỏi gì không? / Nam: Công ty các bạn sáng mấy giờ làm việc? / Nữ: Chín giờ. Chiều năm giờ tan làm. / Nam: Được, cảm ơn. / Hỏi: Công ty này mấy giờ tan làm?' },
            { n: 33, options: [{ zh: '8月1号', py: 'bā yuè yī hào' }, { zh: '10月1号', py: 'shí yuè yī hào' }, { zh: '10月2号', py: 'shí yuè èr hào' }], answer: 'B', script: '男：九月去北京旅游最好，是吗？\n女：对，北京九月天气不冷也不热。\n男：我去玩儿两个星期，十月一号回来。\n女：那你要多休息，别太累了。\n问：男的哪天回来？', scriptVn: 'Nam: Tháng chín đi du lịch Bắc Kinh là tốt nhất phải không? / Nữ: Đúng, tháng chín Bắc Kinh không lạnh cũng không nóng. / Nam: Tôi đi chơi hai tuần, mùng 1 tháng 10 về. / Nữ: Vậy anh phải nghỉ ngơi nhiều, đừng mệt quá. / Hỏi: Người nam về ngày nào?' },
            { n: 34, options: [{ zh: '手表', py: 'shǒubiǎo' }, { zh: '电脑', py: 'diànnǎo' }, { zh: '自行车', py: 'zìxíngchē' }], answer: 'A', script: '女：生日快乐！这是送给你的。\n男：谢谢妈！是什么？\n女：你打开看看，希望你会喜欢。\n男：手表？太好了！\n问：妈妈送的是什么？', scriptVn: 'Nữ: Chúc mừng sinh nhật! Đây là quà tặng con. / Nam: Cảm ơn mẹ! Là gì thế? / Nữ: Con mở ra xem, mong con thích. / Nam: Đồng hồ? Tuyệt quá! / Hỏi: Mẹ tặng gì?' },
            { n: 35, options: [{ zh: '妻子', py: 'qīzi' }, { zh: '同学', py: 'tóngxué' }, { zh: '学生', py: 'xuésheng' }], answer: 'C', script: '男：请问，张老师在家吗？\n女：请进，你是？\n男：我叫李红，我是张老师的学生。\n女：请坐，他在房间里看书，我去叫他。\n问：谁找张老师？', scriptVn: 'Nam: Xin hỏi, thầy Trương có nhà không? / Nữ: Mời vào, cháu là? / Nam: Cháu tên Lý Hồng, là học sinh của thầy Trương. / Nữ: Mời ngồi, thầy đang đọc sách trong phòng, để cô gọi. / Hỏi: Ai tìm thầy Trương?' }
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
                { n: 36, zh: '不好意思，我还没学会游泳呢。', py: 'Bù hǎoyìsi, wǒ hái méi xuéhuì yóuyǒng ne.', vn: 'Ngại quá, tôi vẫn chưa học được bơi.', answer: 'E' },
                { n: 37, zh: '太好了！男朋友要和我一起去旅游了。', py: 'Tài hǎo le! Nánpéngyou yào hé wǒ yìqǐ qù lǚyóu le.', vn: 'Tuyệt quá! Bạn trai sẽ đi du lịch cùng tôi.', answer: 'A' },
                { n: 38, zh: '外面的雪真大，我们出去玩儿吧？', py: 'Wàimiàn de xuě zhēn dà, wǒmen chūqù wánr ba?', vn: 'Tuyết bên ngoài rơi to thật, mình ra ngoài chơi nhé?', answer: 'B' },
                { n: 39, zh: '喂，不要看报纸了，开始工作吧。', py: 'Wèi, bú yào kàn bàozhǐ le, kāishǐ gōngzuò ba.', vn: 'Này, đừng đọc báo nữa, bắt đầu làm việc đi.', answer: 'F' },
                { n: 40, zh: '你说什么？对不起，我没听懂。', py: 'Nǐ shuō shénme? Duìbuqǐ, wǒ méi tīng dǒng.', vn: 'Bạn nói gì? Xin lỗi, tôi không nghe hiểu.', answer: 'C' }
              ]
            }
          ]
        },
        {
          name: 'Phần 2', range: [41, 45], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '新', py: 'xīn' }, { k: 'B', zh: '百', py: 'bǎi' }, { k: 'C', zh: '小时', py: 'xiǎoshí' },
            { k: 'D', zh: '回答', py: 'huídá' }, { k: 'E', zh: '贵', py: 'guì', used: true }, { k: 'F', zh: '牛奶', py: 'niúnǎi' }
          ],
          example: 'Ví dụ: 这儿的羊肉很好吃，但是也很（ E ）。',
          questions: [
            { n: 41, zh: '别说话，听听她怎么（　）这个题。', py: 'Bié shuōhuà, tīngting tā zěnme (　) zhège tí.', vn: 'Đừng nói chuyện, nghe xem cô ấy (trả lời) câu này thế nào.', answer: 'D' },
            { n: 42, zh: '你好，这个篮球卖三（　）。', py: 'Nǐ hǎo, zhège lánqiú mài sān (　).', vn: 'Chào bạn, quả bóng rổ này bán ba (trăm).', answer: 'B' },
            { n: 43, zh: '喝（　）前，先吃个鸡蛋吧。', py: 'Hē (　) qián, xiān chī ge jīdàn ba.', vn: 'Trước khi uống (sữa), ăn quả trứng đã.', answer: 'F' },
            { n: 44, zh: '你知道吗？一年有8700多个（　）。', py: 'Nǐ zhīdào ma? Yì nián yǒu bāqiān qībǎi duō ge (　).', vn: 'Bạn biết không? Một năm có hơn 8700 (giờ).', answer: 'C' },
            { n: 45, zh: '女：你（　）买的车是什么颜色的？\n男：黑色的。', py: 'Nǚ: Nǐ (　) mǎi de chē shì shénme yánsè de?\nNán: Hēisè de.', vn: 'Nữ: Xe bạn (mới) mua màu gì? / Nam: Màu đen.', answer: 'A' }
          ]
        },
        {
          name: 'Phần 3', range: [46, 50], type: 'judge-text',
          intro: 'Đọc câu và phán đoán câu ★ đúng (✓) hay sai (✗).',
          questions: [
            { n: 46, zh: '唱歌是一件让人高兴的事情，每年生日我都会和朋友们去唱歌。', py: 'Chànggē shì yí jiàn ràng rén gāoxìng de shìqing, měi nián shēngrì wǒ dōu huì hé péngyoumen qù chànggē.', vn: 'Hát là một việc khiến người ta vui, sinh nhật hằng năm tôi đều đi hát với bạn bè.', star: '我爱唱歌。', starPy: 'Wǒ ài chànggē.', starVn: 'Tôi thích hát.', answer: true },
            { n: 47, zh: '你看，这就是我家的猫，眼睛漂亮不？它是我妹送给我们的。', py: 'Nǐ kàn, zhè jiù shì wǒ jiā de māo, yǎnjing piàoliang bu? Tā shì wǒ mèi sòng gěi wǒmen de.', vn: 'Bạn xem, đây là con mèo nhà tôi, mắt đẹp không? Nó là do em gái tôi tặng.', star: '猫是弟弟家的。', starPy: 'Māo shì dìdi jiā de.', starVn: 'Con mèo là của nhà em trai.', answer: false },
            { n: 48, zh: '中国人喜欢说"好好学习，天天向上"，意思是希望孩子们从小爱学习，多学东西。', py: 'Zhōngguórén xǐhuan shuō "hǎohao xuéxí, tiāntiān xiàngshàng", yìsi shì xīwàng háizimen cóng xiǎo ài xuéxí, duō xué dōngxi.', vn: 'Người Trung Quốc thích nói "học tập chăm chỉ, ngày ngày tiến bộ", ý là mong trẻ em từ nhỏ yêu học tập, học nhiều điều.', star: '中国人希望孩子多学习。', starPy: 'Zhōngguórén xīwàng háizi duō xuéxí.', starVn: 'Người Trung Quốc mong con trẻ học nhiều.', answer: true },
            { n: 49, zh: '你去过"一元店"吗？在这样的商店里，一块钱就可以买一件东西。', py: 'Nǐ qùguo "yì yuán diàn" ma? Zài zhèyàng de shāngdiàn li, yí kuài qián jiù kěyǐ mǎi yí jiàn dōngxi.', vn: 'Bạn từng đến "cửa hàng một tệ" chưa? Ở cửa hàng như vậy, một tệ là mua được một món đồ.', star: '"一元店"的东西很贵。', starPy: '"Yì yuán diàn" de dōngxi hěn guì.', starVn: 'Đồ ở "cửa hàng một tệ" rất đắt.', answer: false },
            { n: 50, zh: '水果中，我最爱吃苹果和西瓜。我每天都要吃一个苹果，医生说，多吃苹果对身体好。', py: 'Shuǐguǒ zhōng, wǒ zuì ài chī píngguǒ hé xīguā. Wǒ měi tiān dōu yào chī yí ge píngguǒ, yīshēng shuō, duō chī píngguǒ duì shēntǐ hǎo.', vn: 'Trong các loại hoa quả, tôi thích ăn táo và dưa hấu nhất. Ngày nào tôi cũng ăn một quả táo, bác sĩ nói ăn nhiều táo tốt cho sức khoẻ.', star: '我觉得西瓜很好吃。', starPy: 'Wǒ juéde xīguā hěn hǎochī.', starVn: 'Tôi thấy dưa hấu rất ngon.', answer: true }
          ]
        },
        {
          name: 'Phần 4', range: [51, 60], type: 'sent-match',
          intro: 'Chọn câu trả lời/câu ghép phù hợp với mỗi câu.',
          groups: [
            {
              range: [51, 55],
              options: [
                { k: 'A', zh: '那本书我已经看完了。', py: 'Nà běn shū wǒ yǐjīng kàn wán le.', vn: 'Cuốn sách đó tôi đã đọc xong rồi.' },
                { k: 'B', zh: '船快开了，你回去吧。', py: 'Chuán kuài kāi le, nǐ huíqù ba.', vn: 'Tàu sắp chạy rồi, bạn về đi.' },
                { k: 'C', zh: '我想买500斤大米，你们能帮我送一下吗？', py: 'Wǒ xiǎng mǎi wǔbǎi jīn dàmǐ, nǐmen néng bāng wǒ sòng yíxià ma?', vn: 'Tôi muốn mua 500 cân gạo, các bạn giao giúp tôi được không?' },
                { k: 'D', zh: '这两件我都喜欢。', py: 'Zhè liǎng jiàn wǒ dōu xǐhuan.', vn: 'Hai chiếc này tôi đều thích.' },
                { k: 'E', zh: '他在哪儿呢？你看见他了吗？', py: 'Tā zài nǎr ne? Nǐ kànjiàn tā le ma?', vn: 'Anh ấy ở đâu? Bạn thấy anh ấy không?', used: true },
                { k: 'F', zh: '服务员，我想要杯热水，谢谢你。', py: 'Fúwùyuán, wǒ xiǎng yào bēi rè shuǐ, xièxie nǐ.', vn: 'Phục vụ, cho tôi một cốc nước nóng, cảm ơn.' }
              ],
              example: 'Ví dụ: 他还在教室里学习。→ E',
              questions: [
                { n: 51, zh: '怎么这么快？有意思吗？', py: 'Zěnme zhème kuài? Yǒu yìsi ma?', vn: 'Sao nhanh thế? Có hay không?', answer: 'A' },
                { n: 52, zh: '你觉得红色的和白色的哪个好？', py: 'Nǐ juéde hóngsè de hé báisè de nǎge hǎo?', vn: 'Bạn thấy cái màu đỏ và cái màu trắng, cái nào đẹp?', answer: 'D' },
                { n: 53, zh: '好，再见，到了给我来个电话。', py: 'Hǎo, zàijiàn, dàole gěi wǒ lái ge diànhuà.', vn: 'Được, tạm biệt, đến nơi gọi cho tôi nhé.', answer: 'B' },
                { n: 54, zh: '可以，您住哪儿？', py: 'Kěyǐ, nín zhù nǎr?', vn: 'Được, ông ở đâu?', answer: 'C' },
                { n: 55, zh: '星期日，她和丈夫在饭店吃晚饭。', py: 'Xīngqīrì, tā hé zhàngfu zài fàndiàn chī wǎnfàn.', vn: 'Chủ nhật, cô ấy và chồng ăn tối ở nhà hàng.', answer: 'F' }
              ]
            },
            {
              range: [56, 60],
              options: [
                { k: 'A', zh: '就知道他姓张。', py: 'Jiù zhīdào tā xìng Zhāng.', vn: 'Chỉ biết ông ấy họ Trương.' },
                { k: 'B', zh: '没关系，你们坐出租车去吧。', py: 'Méi guānxi, nǐmen zuò chūzūchē qù ba.', vn: 'Không sao, các bạn đi taxi đi.' },
                { k: 'C', zh: '好的，谢谢你们。', py: 'Hǎo de, xièxie nǐmen.', vn: 'Được, cảm ơn các bạn.' },
                { k: 'D', zh: '哥，明天天气怎么样？是阴天？', py: 'Gē, míngtiān tiānqì zěnmeyàng? Shì yīntiān?', vn: 'Anh ơi, mai thời tiết thế nào? Trời âm u à?' },
                { k: 'E', zh: '同学们，今天我们开始学习第五课。', py: 'Tóngxuémen, jīntiān wǒmen kāishǐ xuéxí dì-wǔ kè.', vn: 'Các em, hôm nay chúng ta bắt đầu học bài thứ năm.' }
              ],
              questions: [
                { n: 56, zh: '那个医生没告诉我他的名字。', py: 'Nàge yīshēng méi gàosu wǒ tā de míngzi.', vn: 'Bác sĩ đó không nói cho tôi tên của ông ấy.', answer: 'A' },
                { n: 57, zh: '晴天，但是很冷，你出门多穿点儿。', py: 'Qíngtiān, dànshì hěn lěng, nǐ chū mén duō chuān diǎnr.', vn: 'Trời nắng nhưng rất lạnh, ra ngoài mặc thêm áo.', answer: 'D' },
                { n: 58, zh: '火车站离这儿很远。', py: 'Huǒchēzhàn lí zhèr hěn yuǎn.', vn: 'Ga tàu cách đây rất xa.', answer: 'B' },
                { n: 59, zh: '慢走，欢迎您下次再来。', py: 'Màn zǒu, huānyíng nín xià cì zài lái.', vn: 'Đi cẩn thận, hoan nghênh ông lần sau lại đến.', answer: 'C' },
                { n: 60, zh: '请你读一下这几个汉字。', py: 'Qǐng nǐ dú yíxià zhè jǐ ge Hànzì.', vn: 'Mời em đọc mấy chữ Hán này.', answer: 'E' }
              ]
            }
          ]
        }
      ]
    }
  ]
};
