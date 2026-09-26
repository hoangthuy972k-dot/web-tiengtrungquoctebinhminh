// Đề thi thử HSK 1 – Đề số 5 (đề H11330 của Hanban).
// Cấu trúc: 2 phần thi (Nghe 20 câu, Đọc 20 câu), tổng 40 câu, 40 phút.
// Điểm: mỗi phần thi tối đa 100 điểm (tính theo tỉ lệ câu đúng), tổng 200, đạt từ 120.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
  id: 'hsk1-test-5',
  level: 'HSK 1',
  title: 'HSK 1 - Test 5',
  code: 'H11330',
  durationSec: 40 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk1-test-5/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk1-test-5.mp3',
      note: 'Bấm nút loa cạnh mỗi câu để nghe riêng câu đó (mỗi câu đọc 2 lần như đề thật), hoặc bấm phát thanh audio để nghe liền cả phần.',
      parts: [
        {
          name: 'Phần 1', range: [1, 5], type: 'judge-pic',
          intro: 'Nghe cụm từ và phán đoán có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: false, audio: [113.8, 121.5], script: '四岁。', scriptVn: 'Bốn tuổi. (tranh là một người đàn ông trưởng thành)' },
            { n: 2, img: 'l1-q2.jpg', answer: true, audio: [130.7, 138.5], script: '写字。', scriptVn: 'Viết chữ.' },
            { n: 3, img: 'l1-q3.jpg', answer: true, audio: [147.7, 156.2], script: '很冷。', scriptVn: 'Rất lạnh.' },
            { n: 4, img: 'l1-q4.jpg', answer: false, audio: [165.3, 174.4], script: '吃米饭。', scriptVn: 'Ăn cơm. (tranh là nải chuối)' },
            { n: 5, img: 'l1-q5.jpg', answer: true, audio: [183.6, 192.9], script: '没有钱。', scriptVn: 'Không có tiền.' }
          ]
        },
        {
          name: 'Phần 2', range: [6, 10], type: 'pic-mc',
          intro: 'Nghe câu nói và chọn hình phù hợp (A, B hoặc C).',
          questions: [
            { n: 6, pics: { A: 'l2-q6-A.jpg', B: 'l2-q6-B.jpg', C: 'l2-q6-C.jpg' }, answer: 'A', audio: [242.4, 254.9], script: '谢谢你请我喝茶。', scriptVn: 'Cảm ơn bạn đã mời tôi uống trà.' },
            { n: 7, pics: { A: 'l2-q7-A.jpg', B: 'l2-q7-B.jpg', C: 'l2-q7-C.jpg' }, answer: 'A', audio: [269.1, 281.9], script: '那是王小姐的狗。', scriptVn: 'Đó là con chó của cô Vương.' },
            { n: 8, pics: { A: 'l2-q8-A.jpg', B: 'l2-q8-B.jpg', C: 'l2-q8-C.jpg' }, answer: 'B', audio: [296.1, 307.9], script: '他在学习开车。', scriptVn: 'Anh ấy đang học lái xe.' },
            { n: 9, pics: { A: 'l2-q9-A.jpg', B: 'l2-q9-B.jpg', C: 'l2-q9-C.jpg' }, answer: 'C', audio: [322.1, 336.7], script: '这些东西都是你买的？', scriptVn: 'Những thứ này đều là bạn mua à?' },
            { n: 10, pics: { A: 'l2-q10-A.jpg', B: 'l2-q10-B.jpg', C: 'l2-q10-C.jpg' }, answer: 'C', audio: [351.0, 366.5], script: '喂，我十五分钟后回去。', scriptVn: 'A lô, mười lăm phút nữa tôi về.' }
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
                { n: 11, answer: 'F', audio: [429.5, 453.0], script: '男：你喜欢哪个电脑？\n女：这些我都喜欢。', scriptVn: 'Nam: Em thích cái máy tính nào? / Nữ: Mấy cái này em đều thích.' },
                { n: 12, answer: 'B', audio: [467.4, 486.4], script: '女：你那儿有多少个椅子？\n男：五个。', scriptVn: 'Nữ: Chỗ anh có bao nhiêu cái ghế? / Nam: Năm cái.' },
                { n: 13, answer: 'A', audio: [500.7, 526.4], script: '男：来，王医生，这块是你的。\n女：好，谢谢。', scriptVn: 'Nam: Nào, bác sĩ Vương, miếng này là của chị. / Nữ: Vâng, cảm ơn.' },
                { n: 14, answer: 'D', audio: [540.6, 569.8], script: '女：你一个人去中国？\n男：不，和我爸妈，我们三个人。', scriptVn: 'Nữ: Anh đi Trung Quốc một mình à? / Nam: Không, đi với bố mẹ anh, ba người chúng tôi.' },
                { n: 15, answer: 'E', audio: [584.2, 603.5], script: '男：在哪儿？\n女：在上面，看见了吗？', scriptVn: 'Nam: Ở đâu? / Nữ: Ở trên kia, thấy chưa?' }
              ]
            }
          ]
        },
        {
          name: 'Phần 4', range: [16, 20], type: 'mc',
          intro: 'Nghe câu nói và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 16, options: [{ zh: '星期二', py: 'xīngqī\'èr' }, { zh: '星期四', py: 'xīngqīsì' }, { zh: '星期六', py: 'xīngqīliù' }], answer: 'A', audio: [678.4, 702.7], script: '明天是9月8号，星期二。\n问：明天星期几？', scriptVn: 'Ngày mai là thứ Ba, ngày 8 tháng 9. / Hỏi: Ngày mai là thứ mấy?' },
            { n: 17, options: [{ zh: '读书', py: 'dú shū' }, { zh: '打电话', py: 'dǎ diànhuà' }, { zh: '看电视', py: 'kàn diànshì' }], answer: 'C', audio: [717.2, 741.3], script: '儿子在看电视呢，我去叫他。\n问：儿子在做什么？', scriptVn: 'Con trai đang xem tivi, để tôi đi gọi nó. / Hỏi: Con trai đang làm gì?' },
            { n: 18, options: [{ zh: '他同学', py: 'tā tóngxué' }, { zh: '他朋友', py: 'tā péngyou' }, { zh: '他的学生', py: 'tā de xuésheng' }], answer: 'B', audio: [755.6, 779.7], script: '这是我朋友，他是小学老师。\n问：谁是老师？', scriptVn: 'Đây là bạn tôi, anh ấy là giáo viên tiểu học. / Hỏi: Ai là giáo viên?' },
            { n: 19, options: [{ zh: '昨天', py: 'zuótiān' }, { zh: '中午', py: 'zhōngwǔ' }, { zh: '下午', py: 'xiàwǔ' }], answer: 'C', audio: [794.1, 821.0], script: '上午我不在家，你下午来，好吗？\n问：他什么时候在家？', scriptVn: 'Buổi sáng tôi không có nhà, chiều bạn đến nhé? / Hỏi: Khi nào anh ấy có nhà?' },
            { n: 20, options: [{ zh: '很小', py: 'hěn xiǎo' }, { zh: '很漂亮', py: 'hěn piàoliang' }, { zh: '太大了', py: 'tài dà le' }], answer: 'B', audio: [835.3, 861.2], script: '这个杯子很漂亮，我喜欢。\n问：那个杯子怎么样？', scriptVn: 'Cái cốc này rất đẹp, tôi thích. / Hỏi: Cái cốc đó thế nào?' }
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
            { n: 21, img: 'r1-q21.jpg', zh: '她', py: 'tā', vn: 'cô ấy (tranh là một chàng trai giơ ngón tay cái, phải dùng 他)', answer: false },
            { n: 22, img: 'r1-q22.jpg', zh: '听', py: 'tīng', vn: 'nghe (tranh: cô gái đeo tai nghe)', answer: true },
            { n: 23, img: 'r1-q23.jpg', zh: '衣服', py: 'yīfu', vn: 'quần áo (tranh là đôi giày da)', answer: false },
            { n: 24, img: 'r1-q24.jpg', zh: '对不起', py: 'duìbuqǐ', vn: 'xin lỗi (tranh là hai bố con vẫy tay chào)', answer: false },
            { n: 25, img: 'r1-q25.jpg', zh: '坐', py: 'zuò', vn: 'ngồi (tranh: người đàn ông ngồi trên ghế đọc báo)', answer: true }
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
                { n: 26, zh: '你今天做什么菜？', py: 'Nǐ jīntiān zuò shénme cài?', vn: 'Hôm nay em nấu món gì?', answer: 'B' },
                { n: 27, zh: '对不起，我想去睡觉了。', py: 'Duìbuqǐ, wǒ xiǎng qù shuìjiào le.', vn: 'Xin lỗi, tôi muốn đi ngủ rồi.', answer: 'D' },
                { n: 28, zh: '妈妈，你能看见我吗？', py: 'Māma, nǐ néng kànjiàn wǒ ma?', vn: 'Mẹ ơi, mẹ có nhìn thấy con không?', answer: 'A' },
                { n: 29, zh: '现在是13:17。', py: 'Xiànzài shì shísān diǎn shíqī.', vn: 'Bây giờ là 13 giờ 17.', answer: 'F' },
                { n: 30, zh: '不客气，你好点儿了吗？', py: 'Búkèqi, nǐ hǎo diǎnr le ma?', vn: 'Không có gì, bạn đỡ hơn chút nào chưa?', answer: 'C' }
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
                { k: 'A', zh: '坐出租车。', py: 'Zuò chūzūchē.', vn: 'Đi taxi.' },
                { k: 'B', zh: '下雨了。', py: 'Xià yǔ le.', vn: 'Trời mưa rồi.' },
                { k: 'C', zh: '桌子下面。', py: 'Zhuōzi xiàmiàn.', vn: 'Dưới gầm bàn.' },
                { k: 'D', zh: '没有。', py: 'Méiyǒu.', vn: 'Chưa.' },
                { k: 'E', zh: '苹果。', py: 'Píngguǒ.', vn: 'Táo.' },
                { k: 'F', zh: '好的，谢谢！', py: 'Hǎo de, xièxie!', vn: 'Vâng, cảm ơn!', used: true }
              ],
              example: 'Ví dụ: 你喝水吗？→ F',
              questions: [
                { n: 31, zh: '你爱吃什么水果？', py: 'Nǐ ài chī shénme shuǐguǒ?', vn: 'Bạn thích ăn hoa quả gì?', answer: 'E' },
                { n: 32, zh: '你们怎么去医院？', py: 'Nǐmen zěnme qù yīyuàn?', vn: 'Các bạn đến bệnh viện bằng gì?', answer: 'A' },
                { n: 33, zh: '北京今天天气怎么样？', py: 'Běijīng jīntiān tiānqì zěnmeyàng?', vn: 'Hôm nay thời tiết Bắc Kinh thế nào?', answer: 'B' },
                { n: 34, zh: '小猫在哪儿？', py: 'Xiǎo māo zài nǎr?', vn: 'Con mèo con ở đâu?', answer: 'C' },
                { n: 35, zh: '他女儿工作了吗？', py: 'Tā nǚ\'ér gōngzuò le ma?', vn: 'Con gái anh ấy đi làm chưa?', answer: 'D' }
              ]
            }
          ]
        },
        {
          name: 'Phần 4', range: [36, 40], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '没关系', py: 'méi guānxi' }, { k: 'B', zh: '说', py: 'shuō' }, { k: 'C', zh: '在', py: 'zài' },
            { k: 'D', zh: '名字', py: 'míngzi', used: true }, { k: 'E', zh: '不', py: 'bù' }, { k: 'F', zh: '学校', py: 'xuéxiào' }
          ],
          example: 'Ví dụ: 你叫什么（ D ）？',
          questions: [
            { n: 36, zh: '她今天怎么（　）高兴？', py: 'Tā jīntiān zěnme (　) gāoxìng?', vn: 'Sao hôm nay cô ấy (không) vui?', answer: 'E' },
            { n: 37, zh: '妈妈，我去（　）了，再见。', py: 'Māma, wǒ qù (　) le, zàijiàn.', vn: 'Mẹ ơi, con đi (học ở trường) đây, tạm biệt mẹ.', answer: 'F' },
            { n: 38, zh: '我（　）这里住了8年了。', py: 'Wǒ (　) zhèli zhùle bā nián le.', vn: 'Tôi đã sống (ở) đây 8 năm rồi.', answer: 'C' },
            { n: 39, zh: '女：这家饭店人太多了。\n男：（　），我们去前面那家，那儿人少。', py: 'Nǚ: Zhè jiā fàndiàn rén tài duō le.\nNán: (　), wǒmen qù qiánmiàn nà jiā, nàr rén shǎo.', vn: 'Nữ: Nhà hàng này đông người quá. / Nam: (Không sao), mình sang nhà hàng phía trước, chỗ đó ít người.', answer: 'A' },
            { n: 40, zh: '男：李先生会（　）汉语吗？\n女：会一点儿。', py: 'Nán: Lǐ xiānsheng huì (　) Hànyǔ ma?\nNǚ: Huì yìdiǎnr.', vn: 'Nam: Anh Lý có biết (nói) tiếng Trung không? / Nữ: Biết một chút.', answer: 'B' }
          ]
        }
      ]
    }
  ]
};
