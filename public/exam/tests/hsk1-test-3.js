// Đề thi thử HSK 1 – Đề số 3 (đề H11005 của Hanban).
// Cấu trúc: 2 phần thi (Nghe 20 câu, Đọc 20 câu), tổng 40 câu, 40 phút.
// Điểm: mỗi phần thi tối đa 100 điểm (tính theo tỉ lệ câu đúng), tổng 200, đạt từ 120.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
  id: 'hsk1-test-3',
  level: 'HSK 1',
  title: 'HSK 1 - Test 3',
  code: 'H11005',
  durationSec: 40 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk1-test-3/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk1-test-3.mp3',
      note: 'Bấm nút loa cạnh mỗi câu để nghe riêng câu đó (mỗi câu đọc 2 lần như đề thật), hoặc bấm phát thanh audio để nghe liền cả phần.',
      parts: [
        {
          name: 'Phần 1', range: [1, 5], type: 'judge-pic',
          intro: 'Nghe cụm từ và phán đoán có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: true, audio: [110.9, 121.6], script: '一块苹果。', scriptVn: 'Một miếng táo.' },
            { n: 2, img: 'l1-q2.jpg', answer: true, audio: [130.8, 138.4], script: '写字。', scriptVn: 'Viết chữ.' },
            { n: 3, img: 'l1-q3.jpg', answer: false, audio: [147.6, 157.6], script: '开出租车。', scriptVn: 'Lái taxi. (tranh là chàng trai đi xe máy)' },
            { n: 4, img: 'l1-q4.jpg', answer: false, audio: [166.9, 174.3], script: '做饭。', scriptVn: 'Nấu cơm. (tranh là cô gái đang lấy quần áo ở máy giặt)' },
            { n: 5, img: 'l1-q5.jpg', answer: false, audio: [183.5, 191.8], script: '没关系。', scriptVn: 'Không sao. (tranh là chàng trai giơ ngón tay cái khen "tốt lắm")' }
          ]
        },
        {
          name: 'Phần 2', range: [6, 10], type: 'pic-mc',
          intro: 'Nghe câu nói và chọn hình phù hợp (A, B hoặc C).',
          questions: [
            { n: 6, pics: { A: 'l2-q6-A.jpg', B: 'l2-q6-B.jpg', C: 'l2-q6-C.jpg' }, answer: 'A', audio: [240.7, 255.1], script: '她喜欢上午喝杯茶。', scriptVn: 'Cô ấy thích uống một tách trà vào buổi sáng.' },
            { n: 7, pics: { A: 'l2-q7-A.jpg', B: 'l2-q7-B.jpg', C: 'l2-q7-C.jpg' }, answer: 'A', audio: [269.6, 286.4], script: '狗狗，你看，电脑里是什么？', scriptVn: 'Cún ơi, nhìn này, trong máy tính là gì thế?' },
            { n: 8, pics: { A: 'l2-q8-A.jpg', B: 'l2-q8-B.jpg', C: 'l2-q8-C.jpg' }, answer: 'B', audio: [300.8, 312.6], script: '我今年十六岁了。', scriptVn: 'Năm nay tôi mười sáu tuổi rồi.' },
            { n: 9, pics: { A: 'l2-q9-A.jpg', B: 'l2-q9-B.jpg', C: 'l2-q9-C.jpg' }, answer: 'B', audio: [327.1, 341.7], script: '这是小猫爱吃的东西。', scriptVn: 'Đây là món mèo con thích ăn.' },
            { n: 10, pics: { A: 'l2-q10-A.jpg', B: 'l2-q10-B.jpg', C: 'l2-q10-C.jpg' }, answer: 'C', audio: [356.0, 369.7], script: '这些书你都读了吗？', scriptVn: 'Những cuốn sách này bạn đọc hết rồi à?' }
          ]
        },
        {
          name: 'Phần 3', range: [11, 15], type: 'pic-match',
          intro: 'Nghe hội thoại và chọn hình phù hợp (A–F).',
          groups: [
            {
              range: [11, 15], pics: { A: 'l3-A.jpg', B: 'l3-B.jpg', C: 'l3-C.jpg', D: 'l3-D.jpg', E: 'l3-E.jpg', F: 'l3-F.jpg' },
              example: 'Ví dụ: 女：你好！ 男：你好！很高兴认识你。→ C',
              questions: [
                { n: 11, answer: 'A', audio: [431.9, 457.5], script: '男：能看见儿子在哪儿吗？\n女：在那儿，我看见他了。', scriptVn: 'Nam: Có nhìn thấy con trai ở đâu không? / Nữ: Ở đằng kia, em thấy nó rồi.' },
                { n: 12, answer: 'B', audio: [471.9, 491.0], script: '女：太漂亮了！谢谢你！\n男：不客气。', scriptVn: 'Nữ: Đẹp quá! Cảm ơn anh! / Nam: Không có gì.' },
                { n: 13, answer: 'D', audio: [505.3, 526.9], script: '男：现在几点了？\n女：现在六点三十五。', scriptVn: 'Nam: Bây giờ mấy giờ rồi? / Nữ: Bây giờ là sáu giờ ba mươi lăm.' },
                { n: 14, answer: 'E', audio: [541.3, 571.7], script: '女：喂，你好！是小李吗？\n男：小李？对不起，我不是小李。', scriptVn: 'Nữ: Alô, chào anh! Có phải Tiểu Lý không? / Nam: Tiểu Lý à? Xin lỗi, tôi không phải Tiểu Lý.' },
                { n: 15, answer: 'F', audio: [586.1, 611.8], script: '男：这上面没有我的名字。\n女：有，在这儿呢，下面。', scriptVn: 'Nam: Trên này không có tên anh. / Nữ: Có mà, ở đây này, phía dưới.' }
              ]
            }
          ]
        },
        {
          name: 'Phần 4', range: [16, 20], type: 'mc',
          intro: 'Nghe câu nói và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 16, options: [{ zh: '医生', py: 'yīshēng' }, { zh: '学生', py: 'xuésheng' }, { zh: '爸爸', py: 'bàba' }], answer: 'C', audio: [684.9, 714.0], script: '在飞机上，爸爸听见后面有人叫他。\n问：谁在飞机上？', scriptVn: 'Trên máy bay, bố nghe thấy phía sau có người gọi mình. / Hỏi: Ai ở trên máy bay?' },
            { n: 17, options: [{ zh: '9270' }, { zh: '2790' }, { zh: '7290' }], answer: 'B', audio: [728.5, 752.7], script: '我的电话是2790。\n问：他的电话是多少？', scriptVn: 'Số điện thoại của tôi là 2790. / Hỏi: Số điện thoại của anh ấy là bao nhiêu?' },
            { n: 18, options: [{ zh: '书', py: 'shū' }, { zh: '苹果', py: 'píngguǒ' }, { zh: '杯子', py: 'bēizi' }], answer: 'A', audio: [767.2, 789.1], script: '我要这几本书，多少钱？\n问：他在买什么？', scriptVn: 'Tôi lấy mấy cuốn sách này, bao nhiêu tiền? / Hỏi: Anh ấy đang mua gì?' },
            { n: 19, options: [{ zh: '北京', py: 'Běijīng' }, { zh: '饭馆儿', py: 'fànguǎnr' }, { zh: '火车站', py: 'huǒchēzhàn' }], answer: 'C', audio: [803.6, 839.0], script: '下午我们去火车站，有个朋友来北京住几天。\n问：他们下午去哪儿？', scriptVn: 'Chiều nay chúng tôi ra ga tàu hỏa, có một người bạn đến Bắc Kinh ở vài ngày. / Hỏi: Buổi chiều họ đi đâu?' },
            { n: 20, options: [{ zh: '1点', py: 'yī diǎn' }, { zh: '7点', py: 'qī diǎn' }, { zh: '11点', py: 'shíyī diǎn' }], answer: 'C', audio: [853.4, 884.2], script: '现在是11月11日11点11分。\n问：现在几点了？', scriptVn: 'Bây giờ là 11 giờ 11 phút ngày 11 tháng 11. / Hỏi: Bây giờ mấy giờ rồi?' }
          ]
        }
      ]
    },
    {
      id: 'read', name: 'Đọc', icon: 'book',
      parts: [
        {
          name: 'Phần 1', range: [21, 25], type: 'judge-pic',
          intro: 'Xem hình và phán đoán từ bên cạnh có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 21, img: 'r1-q21.jpg', zh: '先生', py: 'xiānsheng', vn: 'ông, anh (chỉ nam giới) (tranh: một cô gái)', answer: false },
            { n: 22, img: 'r1-q22.jpg', zh: '坐', py: 'zuò', vn: 'ngồi (tranh: người đàn ông đứng vươn tay tập thể dục)', answer: false },
            { n: 23, img: 'r1-q23.jpg', zh: '喝', py: 'hē', vn: 'uống (tranh: cô gái đang uống nước)', answer: true },
            { n: 24, img: 'r1-q24.jpg', zh: '衣服', py: 'yīfu', vn: 'quần áo (tranh: chiếc áo sơ mi kẻ sọc)', answer: true },
            { n: 25, img: 'r1-q25.jpg', zh: '请', py: 'qǐng', vn: 'mời (tranh: cô gái đưa tay làm động tác mời)', answer: true }
          ]
        },
        {
          name: 'Phần 2', range: [26, 30], type: 'pic-match',
          intro: 'Chọn hình phù hợp với mỗi câu (A–F).',
          groups: [
            {
              range: [26, 30], pics: { A: 'r2-A.jpg', B: 'r2-B.jpg', C: 'r2-C.jpg', D: 'r2-D.jpg', E: 'r2-E.jpg', F: 'r2-F.jpg' },
              example: 'Ví dụ: 我很喜欢这本书。→ E',
              questions: [
                { n: 26, zh: '我想睡觉了，再见。', py: 'Wǒ xiǎng shuìjiào le, zàijiàn.', vn: 'Tôi buồn ngủ rồi, tạm biệt.', answer: 'B' },
                { n: 27, zh: '这是我买的桌子和椅子。', py: 'Zhè shì wǒ mǎi de zhuōzi hé yǐzi.', vn: 'Đây là cái bàn và những cái ghế tôi mua.', answer: 'A' },
                { n: 28, zh: '他今天很不高兴。', py: 'Tā jīntiān hěn bù gāoxìng.', vn: 'Hôm nay anh ấy rất không vui.', answer: 'F' },
                { n: 29, zh: '现在十点多了。', py: 'Xiànzài shí diǎn duō le.', vn: 'Bây giờ đã hơn mười giờ rồi.', answer: 'C' },
                { n: 30, zh: '王小姐，是你的电话。', py: 'Wáng xiǎojiě, shì nǐ de diànhuà.', vn: 'Cô Vương, có điện thoại của cô.', answer: 'D' }
              ]
            }
          ]
        },
        {
          name: 'Phần 3', range: [31, 35], type: 'sent-match',
          intro: 'Chọn câu trả lời phù hợp với mỗi câu hỏi (A–F).',
          groups: [
            {
              range: [31, 35],
              options: [
                { k: 'A', zh: '一个星期。', py: 'Yí ge xīngqī.', vn: 'Một tuần.' },
                { k: 'B', zh: '明天中午。', py: 'Míngtiān zhōngwǔ.', vn: 'Trưa mai.' },
                { k: 'C', zh: '没有。', py: 'Méiyǒu.', vn: 'Không.' },
                { k: 'D', zh: '我女儿。', py: 'Wǒ nǚ\'ér.', vn: 'Con gái tôi.' },
                { k: 'E', zh: '84个。', py: 'Bāshísì ge.', vn: '84 người.' },
                { k: 'F', zh: '好的，谢谢！', py: 'Hǎo de, xièxie!', vn: 'Vâng, cảm ơn!', used: true }
              ],
              example: 'Ví dụ: 你喝水吗？→ F',
              questions: [
                { n: 31, zh: '谁会说汉语？', py: 'Shéi huì shuō Hànyǔ?', vn: 'Ai biết nói tiếng Trung?', answer: 'D' },
                { n: 32, zh: '你们学校有多少老师？', py: 'Nǐmen xuéxiào yǒu duōshao lǎoshī?', vn: 'Trường các bạn có bao nhiêu giáo viên?', answer: 'E' },
                { n: 33, zh: '昨天下雨了吗？', py: 'Zuótiān xià yǔ le ma?', vn: 'Hôm qua trời có mưa không?', answer: 'C' },
                { n: 34, zh: '他们什么时候回来？', py: 'Tāmen shénme shíhou huílai?', vn: 'Khi nào họ về?', answer: 'B' },
                { n: 35, zh: '你去北京学习几天？', py: 'Nǐ qù Běijīng xuéxí jǐ tiān?', vn: 'Bạn đi Bắc Kinh học mấy ngày?', answer: 'A' }
              ]
            }
          ]
        },
        {
          name: 'Phần 4', range: [36, 40], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '怎么样', py: 'zěnmeyàng' }, { k: 'B', zh: '认识', py: 'rènshi' }, { k: 'C', zh: '菜', py: 'cài' },
            { k: 'D', zh: '名字', py: 'míngzi', used: true }, { k: 'E', zh: '热', py: 'rè' }, { k: 'F', zh: '工作', py: 'gōngzuò' }
          ],
          example: 'Ví dụ: 你叫什么（ D ）？',
          questions: [
            { n: 36, zh: '我妈妈喜欢吃中国（　）。', py: 'Wǒ māma xǐhuan chī Zhōngguó (　).', vn: 'Mẹ tôi thích ăn (món ăn) Trung Quốc.', answer: 'C' },
            { n: 37, zh: '我朋友在前面那个商店（　）。', py: 'Wǒ péngyou zài qiánmiàn nàge shāngdiàn (　).', vn: 'Bạn tôi (làm việc) ở cửa hàng phía trước kia.', answer: 'F' },
            { n: 38, zh: '天气很冷，喝点儿（　）水吧。', py: 'Tiānqì hěn lěng, hē diǎnr (　) shuǐ ba.', vn: 'Trời lạnh lắm, uống chút nước (nóng) đi.', answer: 'E' },
            { n: 39, zh: '女：你们是怎么（　）的？\n男：她是我大学同学。', py: 'Nǚ: Nǐmen shì zěnme (　) de?\nNán: Tā shì wǒ dàxué tóngxué.', vn: 'Nữ: Hai người (quen) nhau thế nào? / Nam: Cô ấy là bạn đại học của anh.', answer: 'B' },
            { n: 40, zh: '男：昨天的电影（　）？\n女：我没去看电影，我在家看电视了。', py: 'Nán: Zuótiān de diànyǐng (　)?\nNǚ: Wǒ méi qù kàn diànyǐng, wǒ zài jiā kàn diànshì le.', vn: 'Nam: Bộ phim hôm qua (thế nào)? / Nữ: Em không đi xem phim, em ở nhà xem tivi.', answer: 'A' }
          ]
        }
      ]
    }
  ]
};
