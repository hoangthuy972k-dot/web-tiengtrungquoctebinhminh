// Đề thi thử HSK 1 – Đề số 1 (đề mẫu chính thức 样卷 H10000 của Hanban).
// Cấu trúc: 2 phần thi (Nghe 20 câu, Đọc 20 câu), tổng 40 câu, 40 phút.
// Điểm: mỗi phần thi tối đa 100 điểm (tính theo tỉ lệ câu đúng), tổng 200, đạt từ 120.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
  id: 'hsk1-test-1',
  level: 'HSK 1',
  title: 'HSK 1 - Test 1',
  code: 'H10000',
  durationSec: 40 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk1-test-1/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk1-test-1.mp3',
      note: 'Bấm nút loa cạnh mỗi câu để nghe riêng câu đó (mỗi câu đọc 2 lần như đề thật), hoặc bấm phát thanh audio để nghe liền cả phần.',
      parts: [
        {
          name: 'Phần 1', range: [1, 5], type: 'judge-pic',
          intro: 'Nghe cụm từ và phán đoán có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: false, audio: [117.4, 125.9], script: '坐出租车。', scriptVn: 'Đi taxi. (tranh là người đi xe đạp)' },
            { n: 2, img: 'l1-q2.jpg', answer: true, audio: [135.3, 142.2], script: '明天见！', scriptVn: 'Mai gặp lại!' },
            { n: 3, img: 'l1-q3.jpg', answer: true, audio: [151.6, 159.2], script: '12点。', scriptVn: '12 giờ.' },
            { n: 4, img: 'l1-q4.jpg', answer: false, audio: [168.6, 175.6], script: '喝水。', scriptVn: 'Uống nước. (tranh là cô gái đang ăn dưa hấu)' },
            { n: 5, img: 'l1-q5.jpg', answer: false, audio: [184.9, 192], script: '打电话。', scriptVn: 'Gọi điện thoại. (tranh là hai cô gái đang thì thầm)' }
          ]
        },
        {
          name: 'Phần 2', range: [6, 10], type: 'pic-mc',
          intro: 'Nghe câu nói và chọn hình phù hợp (A, B hoặc C).',
          questions: [
            { n: 6, pics: { A: 'l2-q6-A.jpg', B: 'l2-q6-B.jpg', C: 'l2-q6-C.jpg' }, answer: 'A', audio: [241.9, 252.7], script: '你的衣服很漂亮。', scriptVn: 'Quần áo của bạn đẹp quá.' },
            { n: 7, pics: { A: 'l2-q7-A.jpg', B: 'l2-q7-B.jpg', C: 'l2-q7-C.jpg' }, answer: 'C', audio: [267.2, 276.4], script: '他们在工作。', scriptVn: 'Họ đang làm việc.' },
            { n: 8, pics: { A: 'l2-q8-A.jpg', B: 'l2-q8-B.jpg', C: 'l2-q8-C.jpg' }, answer: 'B', audio: [290.9, 301.2], script: '我朋友是老师。', scriptVn: 'Bạn tôi là giáo viên.' },
            { n: 9, pics: { A: 'l2-q9-A.jpg', B: 'l2-q9-B.jpg', C: 'l2-q9-C.jpg' }, answer: 'C', audio: [315.9, 325.7], script: '李小姐，请坐。', scriptVn: 'Cô Lý, mời ngồi.' },
            { n: 10, pics: { A: 'l2-q10-A.jpg', B: 'l2-q10-B.jpg', C: 'l2-q10-C.jpg' }, answer: 'B', audio: [340.3, 353.3], script: '我儿子在大学读书。', scriptVn: 'Con trai tôi đang học đại học.' }
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
                { n: 11, answer: 'D', audio: [415.3, 434.9], script: '男：这个椅子多少钱？\n女：70块。', scriptVn: 'Nam: Cái ghế này bao nhiêu tiền? / Nữ: 70 tệ.' },
                { n: 12, answer: 'E', audio: [449.4, 470.9], script: '女：他会开车吗？\n男：会，他开车三年多了。', scriptVn: 'Nữ: Anh ấy biết lái xe không? / Nam: Biết, anh ấy lái xe hơn ba năm rồi.' },
                { n: 13, answer: 'B', audio: [485.5, 503.9], script: '男：你去哪儿了？\n女：我去买了些东西。', scriptVn: 'Nam: Em đi đâu thế? / Nữ: Em đi mua ít đồ.' },
                { n: 14, answer: 'A', audio: [518.4, 542], script: '女：今天我请你吃饭。\n男：太好了，我想吃中国菜。', scriptVn: 'Nữ: Hôm nay tôi mời bạn ăn cơm. / Nam: Tuyệt quá, tôi muốn ăn món Trung Quốc.' },
                { n: 15, answer: 'F', audio: [556.6, 576.3], script: '男：她们是谁？\n女：她们三个都是我的学生。', scriptVn: 'Nam: Các bạn ấy là ai? / Nữ: Cả ba bạn ấy đều là học sinh của tôi.' }
              ]
            }
          ]
        },
        {
          name: 'Phần 4', range: [16, 20], type: 'mc',
          intro: 'Nghe câu nói và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 16, options: [{ zh: '星期二', py: 'xīngqī\'èr' }, { zh: '星期三', py: 'xīngqīsān' }, { zh: '星期五', py: 'xīngqīwǔ' }], answer: 'B', audio: [648.1, 674.5], script: '明天是2月25日，星期三。\n问：明天是星期几？', scriptVn: 'Ngày mai là 25 tháng 2, thứ Tư. / Hỏi: Ngày mai là thứ mấy?' },
            { n: 17, options: [{ zh: '开车', py: 'kāi chē' }, { zh: '做饭', py: 'zuò fàn' }, { zh: '说汉语', py: 'shuō Hànyǔ' }], answer: 'C', audio: [690.1, 716.3], script: '我会说汉语，我能写一些汉字。\n问：他会什么？', scriptVn: 'Tôi biết nói tiếng Trung, tôi viết được một số chữ Hán. / Hỏi: Anh ấy biết làm gì?' },
            { n: 18, options: [{ zh: '老师', py: 'lǎoshī' }, { zh: '妈妈', py: 'māma' }, { zh: '朋友', py: 'péngyou' }], answer: 'A', audio: [731.9, 758.3], script: '下个月，我和王老师去北京。\n问：他和谁去北京？', scriptVn: 'Tháng sau, tôi và thầy Vương đi Bắc Kinh. / Hỏi: Anh ấy đi Bắc Kinh với ai?' },
            { n: 19, options: [{ zh: '4', py: 'sì' }, { zh: '7', py: 'qī' }, { zh: '10', py: 'shí' }], answer: 'A', audio: [774, 800.8], script: '我有一个女儿，今年四岁了。\n问：女儿几岁了？', scriptVn: 'Tôi có một con gái, năm nay bốn tuổi. / Hỏi: Con gái mấy tuổi?' },
            { n: 20, options: [{ zh: '很好', py: 'hěn hǎo' }, { zh: '很热', py: 'hěn rè' }, { zh: '很冷', py: 'hěn lěng' }], answer: 'C', audio: [816.5, 840.3], script: '昨天下雨了，很冷。\n问：昨天天气怎么样？', scriptVn: 'Hôm qua trời mưa, rất lạnh. / Hỏi: Thời tiết hôm qua thế nào?' }
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
            { n: 21, img: 'r1-q21.jpg', zh: '猫', py: 'māo', vn: 'con mèo (tranh: con chó)', answer: false },
            { n: 22, img: 'r1-q22.jpg', zh: '衣服', py: 'yīfu', vn: 'quần áo (tranh: chiếc áo phông đỏ)', answer: true },
            { n: 23, img: 'r1-q23.jpg', zh: '水果', py: 'shuǐguǒ', vn: 'hoa quả (tranh: các loại hoa quả)', answer: true },
            { n: 24, img: 'r1-q24.jpg', zh: '坐', py: 'zuò', vn: 'ngồi (tranh: người đàn ông ngồi trên ghế)', answer: true },
            { n: 25, img: 'r1-q25.jpg', zh: '米饭', py: 'mǐfàn', vn: 'cơm (tranh: bát mì)', answer: false }
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
                { n: 26, zh: '他在睡觉呢。', py: 'Tā zài shuìjiào ne.', vn: 'Anh ấy đang ngủ.', answer: 'F' },
                { n: 27, zh: '她明天坐火车去。', py: 'Tā míngtiān zuò huǒchē qù.', vn: 'Ngày mai cô ấy đi bằng tàu hỏa.', answer: 'C' },
                { n: 28, zh: '他在医院工作，是个医生。', py: 'Tā zài yīyuàn gōngzuò, shì ge yīshēng.', vn: 'Anh ấy làm việc ở bệnh viện, là bác sĩ.', answer: 'D' },
                { n: 29, zh: '我想喝一杯茶。', py: 'Wǒ xiǎng hē yì bēi chá.', vn: 'Tôi muốn uống một tách trà.', answer: 'B' },
                { n: 30, zh: '他们是同学。', py: 'Tāmen shì tóngxué.', vn: 'Họ là bạn cùng lớp.', answer: 'A' }
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
                { k: 'A', zh: '中国人。', py: 'Zhōngguórén.', vn: 'Người Trung Quốc.' },
                { k: 'B', zh: '7点了。', py: 'Qī diǎn le.', vn: '7 giờ rồi.' },
                { k: 'C', zh: '苹果。', py: 'Píngguǒ.', vn: 'Táo.' },
                { k: 'D', zh: '20块。', py: 'Èrshí kuài.', vn: '20 tệ.' },
                { k: 'E', zh: '坐出租车。', py: 'Zuò chūzūchē.', vn: 'Đi taxi.' },
                { k: 'F', zh: '好的，谢谢！', py: 'Hǎo de, xièxie!', vn: 'Vâng, cảm ơn!', used: true }
              ],
              example: 'Ví dụ: 你喝水吗？→ F',
              questions: [
                { n: 31, zh: '你怎么去那个饭店？', py: 'Nǐ zěnme qù nàge fàndiàn?', vn: 'Bạn đến khách sạn đó bằng cách nào?', answer: 'E' },
                { n: 32, zh: '现在几点了？', py: 'Xiànzài jǐ diǎn le?', vn: 'Bây giờ mấy giờ rồi?', answer: 'B' },
                { n: 33, zh: '你爱吃什么水果？', py: 'Nǐ ài chī shénme shuǐguǒ?', vn: 'Bạn thích ăn hoa quả gì?', answer: 'C' },
                { n: 34, zh: '这个小杯子多少钱？', py: 'Zhège xiǎo bēizi duōshao qián?', vn: 'Cái cốc nhỏ này bao nhiêu tiền?', answer: 'D' },
                { n: 35, zh: '你是哪国人？', py: 'Nǐ shì nǎ guó rén?', vn: 'Bạn là người nước nào?', answer: 'A' }
              ]
            }
          ]
        },
        {
          name: 'Phần 4', range: [36, 40], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '家', py: 'jiā' }, { k: 'B', zh: '火车站', py: 'huǒchēzhàn' }, { k: 'C', zh: '对不起', py: 'duìbuqǐ' },
            { k: 'D', zh: '名字', py: 'míngzi', used: true }, { k: 'E', zh: '看见', py: 'kànjiàn' }, { k: 'F', zh: '学习', py: 'xuéxí' }
          ],
          example: 'Ví dụ: 你叫什么（ D ）？',
          questions: [
            { n: 36, zh: '她上午在学校（　）。', py: 'Tā shàngwǔ zài xuéxiào (　).', vn: 'Buổi sáng cô ấy (học) ở trường.', answer: 'F' },
            { n: 37, zh: '我7点30分去（　），10点前回来。', py: 'Wǒ qī diǎn sānshí fēn qù (　), shí diǎn qián huílai.', vn: 'Tôi 7 giờ 30 đi (ga tàu hỏa), trước 10 giờ quay về.', answer: 'B' },
            { n: 38, zh: '喂，张先生在（　）吗？', py: 'Wéi, Zhāng xiānsheng zài (　) ma?', vn: 'Alô, ông Trương có ở (nhà) không?', answer: 'A' },
            { n: 39, zh: '女：（　），我今天不能和你去看医生了。\n男：没关系。', py: 'Nǚ: (　), wǒ jīntiān bù néng hé nǐ qù kàn yīshēng le.\nNán: Méi guānxi.', vn: 'Nữ: (Xin lỗi), hôm nay em không thể cùng anh đi khám bác sĩ được rồi. / Nam: Không sao.', answer: 'C' },
            { n: 40, zh: '男：你（　）爸爸的衣服了吗？\n女：在桌子后面。', py: 'Nán: Nǐ (　) bàba de yīfu le ma?\nNǚ: Zài zhuōzi hòumiàn.', vn: 'Nam: Em có (thấy) quần áo của bố không? / Nữ: Ở phía sau cái bàn.', answer: 'E' }
          ]
        }
      ]
    }
  ]
};
