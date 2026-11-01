// Đề thi thử HSK 1 – Đề số 2 (đề H10901 của Hanban).
// Cấu trúc: 2 phần thi (Nghe 20 câu, Đọc 20 câu), tổng 40 câu, 40 phút.
// Điểm: mỗi phần thi tối đa 100 điểm (tính theo tỉ lệ câu đúng), tổng 200, đạt từ 120.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
  id: 'hsk1-test-2',
  level: 'HSK 1',
  title: 'HSK 1 - Test 2',
  code: 'H10901',
  durationSec: 40 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk1-test-2/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk1-test-2.mp3',
      note: 'Bấm nút loa cạnh mỗi câu để nghe riêng câu đó (mỗi câu đọc 2 lần như đề thật), hoặc bấm phát thanh audio để nghe liền cả phần.',
      parts: [
        {
          name: 'Phần 1', range: [1, 5], type: 'judge-pic',
          intro: 'Nghe cụm từ và phán đoán có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: true, audio: [117.3, 124.7], script: '打电话。', scriptVn: 'Gọi điện thoại.' },
            { n: 2, img: 'l1-q2.jpg', answer: false, audio: [134.1, 142.1], script: '我和儿子。', scriptVn: 'Tôi và con trai. (tranh là mẹ và con gái)' },
            { n: 3, img: 'l1-q3.jpg', answer: false, audio: [151.6, 158.5], script: '开车。', scriptVn: 'Lái xe. (tranh là đi xe đạp)' },
            { n: 4, img: 'l1-q4.jpg', answer: false, audio: [167.9, 175.2], script: '吃米饭。', scriptVn: 'Ăn cơm. (tranh là uống sữa)' },
            { n: 5, img: 'l1-q5.jpg', answer: true, audio: [184.5, 191.7], script: '下雨了。', scriptVn: 'Trời mưa rồi.' }
          ]
        },
        {
          name: 'Phần 2', range: [6, 10], type: 'pic-mc',
          intro: 'Nghe câu nói và chọn hình phù hợp (A, B hoặc C).',
          questions: [
            { n: 6, pics: { A: 'l2-q6-A.jpg', B: 'l2-q6-B.jpg', C: 'l2-q6-C.jpg' }, answer: 'A', audio: [241.6, 252.6], script: '今天天气很冷。', scriptVn: 'Hôm nay trời rất lạnh.' },
            { n: 7, pics: { A: 'l2-q7-A.jpg', B: 'l2-q7-B.jpg', C: 'l2-q7-C.jpg' }, answer: 'A', audio: [267.1, 278.5], script: '现在是10点10分。', scriptVn: 'Bây giờ là 10 giờ 10 phút.' },
            { n: 8, pics: { A: 'l2-q8-A.jpg', B: 'l2-q8-B.jpg', C: 'l2-q8-C.jpg' }, answer: 'C', audio: [292.8, 303.6], script: '她后面有几个人。', scriptVn: 'Phía sau cô ấy có mấy người.' },
            { n: 9, pics: { A: 'l2-q9-A.jpg', B: 'l2-q9-B.jpg', C: 'l2-q9-C.jpg' }, answer: 'A', audio: [318.0, 328.7], script: '我今年十二岁了。', scriptVn: 'Năm nay tôi mười hai tuổi rồi.' },
            { n: 10, pics: { A: 'l2-q10-A.jpg', B: 'l2-q10-B.jpg', C: 'l2-q10-C.jpg' }, answer: 'C', audio: [342.9, 354.7], script: '他下个月去中国。', scriptVn: 'Tháng sau anh ấy đi Trung Quốc.' }
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
                { n: 11, answer: 'D', audio: [416.2, 439.0], script: '男：你看见我的小猫了吗？\n女：在那儿，在椅子上。', scriptVn: 'Nam: Bạn có thấy con mèo con của tôi không? / Nữ: Ở đằng kia, trên ghế ấy.' },
                { n: 12, answer: 'B', audio: [453.6, 475.5], script: '女：我们中午去买，好吗？\n男：你看，我没钱了。', scriptVn: 'Nữ: Trưa nay chúng mình đi mua nhé? / Nam: Bạn xem này, tôi hết tiền rồi.' },
                { n: 13, answer: 'A', audio: [490.1, 511.5], script: '男：你住在哪儿？\n女：我和妈妈都住在102。', scriptVn: 'Nam: Bạn sống ở đâu? / Nữ: Tôi và mẹ đều sống ở phòng 102.' },
                { n: 14, answer: 'E', audio: [526.2, 546.0], script: '女：这个汉字怎么读？\n男：对不起，我不会。', scriptVn: 'Nữ: Chữ Hán này đọc thế nào? / Nam: Xin lỗi, tôi không biết.' },
                { n: 15, answer: 'F', audio: [560.6, 576.8], script: '男：谢谢你们。\n女：不客气。再见。', scriptVn: 'Nam: Cảm ơn các bạn. / Nữ: Không có gì. Tạm biệt.' }
              ]
            }
          ]
        },
        {
          name: 'Phần 4', range: [16, 20], type: 'mc',
          intro: 'Nghe câu nói và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 16, options: [{ zh: '他的', py: 'tā de' }, { zh: '我的', py: 'wǒ de' }, { zh: '同学的', py: 'tóngxué de' }], answer: 'B', audio: [647.3, 670.5], script: '我的电脑在他的桌子上。\n问：那是谁的电脑？', scriptVn: 'Máy tính của tôi ở trên bàn của anh ấy. / Hỏi: Đó là máy tính của ai?' },
            { n: 17, options: [{ zh: '星期三', py: 'xīngqīsān' }, { zh: '星期五', py: 'xīngqīwǔ' }, { zh: '星期六', py: 'xīngqīliù' }], answer: 'B', audio: [685.0, 714.8], script: '今天星期四，我们明天去看电影。\n问：我们什么时候去看电影？', scriptVn: 'Hôm nay thứ Năm, ngày mai chúng tôi đi xem phim. / Hỏi: Khi nào chúng tôi đi xem phim? (ngày mai là thứ Sáu)' },
            { n: 18, options: [{ zh: '5', py: 'wǔ' }, { zh: '15', py: 'shíwǔ' }, { zh: '50', py: 'wǔshí' }], answer: 'C', audio: [729.3, 756.3], script: '他是老师，他有五十个学生。\n问：他有多少个学生？', scriptVn: 'Anh ấy là giáo viên, anh ấy có năm mươi học sinh. / Hỏi: Anh ấy có bao nhiêu học sinh?' },
            { n: 19, options: [{ zh: '茶', py: 'chá' }, { zh: '苹果', py: 'píngguǒ' }, { zh: '杯子', py: 'bēizi' }], answer: 'C', audio: [770.8, 797.1], script: '小姐，你好。你这儿有杯子吗？\n问：他想买什么？', scriptVn: 'Chào cô. Chỗ cô có cốc không? / Hỏi: Anh ấy muốn mua gì?' },
            { n: 20, options: [{ zh: '爱学习', py: 'ài xuéxí' }, { zh: '很漂亮', py: 'hěn piàoliang' }, { zh: '想回家', py: 'xiǎng huí jiā' }], answer: 'B', audio: [811.5, 834.7], script: '这是你的朋友吗？很漂亮！\n问：朋友怎么样？', scriptVn: 'Đây là bạn của cậu à? Xinh quá! / Hỏi: Người bạn thế nào?' }
          ]
        }
      ]
    },
    {
      id: 'read', name: 'Đọc', icon: 'book',
      parts: [
        {
          name: 'Phần 1', range: [21, 25], type: 'judge-pic',
          intro: 'Xem hình và từ, phán đoán từ có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 21, img: 'r1-q21.jpg', zh: '写', py: 'xiě', vn: 'viết (tranh: cậu bé đang viết bài)', answer: true },
            { n: 22, img: 'r1-q22.jpg', zh: '听', py: 'tīng', vn: 'nghe (tranh: cô gái đeo tai nghe)', answer: true },
            { n: 23, img: 'r1-q23.jpg', zh: '菜', py: 'cài', vn: 'món ăn (tranh: chén trà)', answer: false },
            { n: 24, img: 'r1-q24.jpg', zh: '他', py: 'tā', vn: 'anh ấy (tranh là một cô gái, phải dùng 她)', answer: false },
            { n: 25, img: 'r1-q25.jpg', zh: '狗', py: 'gǒu', vn: 'con chó (tranh: con chó)', answer: true }
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
                { n: 26, zh: '你好，我能吃一块儿吗？', py: 'Nǐ hǎo, wǒ néng chī yí kuàir ma?', vn: 'Chào bạn, tôi ăn một miếng được không?', answer: 'D' },
                { n: 27, zh: '她们在买衣服呢。', py: 'Tāmen zài mǎi yīfu ne.', vn: 'Họ (các cô ấy) đang mua quần áo.', answer: 'F' },
                { n: 28, zh: '天气太热了，多吃些水果。', py: 'Tiānqì tài rè le, duō chī xiē shuǐguǒ.', vn: 'Trời nóng quá, ăn nhiều hoa quả vào.', answer: 'C' },
                { n: 29, zh: '来，我们看看里面是什么东西。', py: 'Lái, wǒmen kànkan lǐmiàn shì shénme dōngxi.', vn: 'Nào, chúng mình xem bên trong là cái gì.', answer: 'A' },
                { n: 30, zh: '喂，你睡觉了吗？', py: 'Wéi, nǐ shuìjiào le ma?', vn: 'A lô, bạn ngủ chưa?', answer: 'B' }
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
                { k: 'A', zh: '医院。', py: 'Yīyuàn.', vn: 'Bệnh viện.' },
                { k: 'B', zh: '下雨了。', py: 'Xià yǔ le.', vn: 'Trời mưa.' },
                { k: 'C', zh: '我不认识她。', py: 'Wǒ bú rènshi tā.', vn: 'Tôi không quen cô ấy.' },
                { k: 'D', zh: '7岁。', py: 'Qī suì.', vn: '7 tuổi.' },
                { k: 'E', zh: '下个月。', py: 'Xià ge yuè.', vn: 'Tháng sau.' },
                { k: 'F', zh: '好的，谢谢！', py: 'Hǎo de, xièxie!', vn: 'Vâng, cảm ơn!', used: true }
              ],
              example: 'Ví dụ: 你喝水吗？→ F',
              questions: [
                { n: 31, zh: '那个人是谁？', py: 'Nàge rén shì shéi?', vn: 'Người kia là ai?', answer: 'C' },
                { n: 32, zh: '他女儿多大了？', py: 'Tā nǚ\'ér duō dà le?', vn: 'Con gái anh ấy bao nhiêu tuổi rồi?', answer: 'D' },
                { n: 33, zh: '你的同学在哪儿工作？', py: 'Nǐ de tóngxué zài nǎr gōngzuò?', vn: 'Bạn học của bạn làm việc ở đâu?', answer: 'A' },
                { n: 34, zh: '昨天上午天气怎么样？', py: 'Zuótiān shàngwǔ tiānqì zěnmeyàng?', vn: 'Sáng hôm qua thời tiết thế nào?', answer: 'B' },
                { n: 35, zh: '爸爸什么时候来北京呢？', py: 'Bàba shénme shíhou lái Běijīng ne?', vn: 'Bao giờ bố đến Bắc Kinh?', answer: 'E' }
              ]
            }
          ]
        },
        {
          name: 'Phần 4', range: [36, 40], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '坐', py: 'zuò' }, { k: 'B', zh: '前面', py: 'qiánmiàn' }, { k: 'C', zh: '没关系', py: 'méi guānxi' },
            { k: 'D', zh: '名字', py: 'míngzi', used: true }, { k: 'E', zh: '汉语', py: 'Hànyǔ' }, { k: 'F', zh: '月', py: 'yuè' }
          ],
          example: 'Ví dụ: 你叫什么（ D ）？',
          questions: [
            { n: 36, zh: '昨天是8（　）19日。', py: 'Zuótiān shì bā (　) shíjiǔ rì.', vn: 'Hôm qua là ngày 19 (tháng) 8.', answer: 'F' },
            { n: 37, zh: '那个饭馆儿在火车站（　）。', py: 'Nàge fànguǎnr zài huǒchēzhàn (　).', vn: 'Quán ăn đó ở (phía trước) ga tàu hỏa.', answer: 'B' },
            { n: 38, zh: '你会说（　）吗？', py: 'Nǐ huì shuō (　) ma?', vn: 'Bạn biết nói (tiếng Trung) không?', answer: 'E' },
            { n: 39, zh: '男：你好！王先生在吗？\n女：在，请（　），我去叫他。', py: 'Nán: Nǐ hǎo! Wáng xiānsheng zài ma?\nNǚ: Zài, qǐng (　), wǒ qù jiào tā.', vn: 'Nam: Chào chị! Ông Vương có ở đây không? / Nữ: Có, mời (ngồi), tôi đi gọi ông ấy.', answer: 'A' },
            { n: 40, zh: '女：对不起，我不会做饭。\n男：（　），我会。', py: 'Nǚ: Duìbuqǐ, wǒ bú huì zuò fàn.\nNán: (　), wǒ huì.', vn: 'Nữ: Xin lỗi, em không biết nấu cơm. / Nam: (Không sao), anh biết.', answer: 'C' }
          ]
        }
      ]
    }
  ]
};
