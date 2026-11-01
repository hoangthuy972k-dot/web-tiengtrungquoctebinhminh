// Đề thi thử HSK 1 – Đề số 4 (đề H11006 của Hanban).
// Cấu trúc: 2 phần thi (Nghe 20 câu, Đọc 20 câu), tổng 40 câu, 40 phút.
// Điểm: mỗi phần thi tối đa 100 điểm (tính theo tỉ lệ câu đúng), tổng 200, đạt từ 120.
// audio: [giây bắt đầu, giây kết thúc] của từng câu trong file nghe (mỗi câu đọc 2 lần).
window.EXAM_DATA = {
  id: 'hsk1-test-4',
  level: 'HSK 1',
  title: 'HSK 1 - Test 4',
  code: 'H11006',
  durationSec: 40 * 60,
  maxScore: 200,
  passScore: 120,
  img: '/exam/img/hsk1-test-4/',
  sections: [
    {
      id: 'listen', name: 'Nghe', icon: 'headphones',
      audio: '/audio/exam/hsk1-test-4.mp3',
      note: 'Bấm nút loa cạnh mỗi câu để nghe riêng câu đó (mỗi câu đọc 2 lần như đề thật), hoặc bấm phát thanh audio để nghe liền cả phần.',
      parts: [
        {
          name: 'Phần 1', range: [1, 5], type: 'judge-pic',
          intro: 'Nghe cụm từ và phán đoán có đúng với hình (✓) hay không (✗).',
          questions: [
            { n: 1, img: 'l1-q1.jpg', answer: false, audio: [112.5, 120.7], script: '对不起。', scriptVn: 'Xin lỗi. (tranh là chàng trai giơ tay làm dấu OK)' },
            { n: 2, img: 'l1-q2.jpg', answer: false, audio: [130.3, 137.8], script: '很热。', scriptVn: 'Rất nóng. (tranh là cô gái co ro vì lạnh)' },
            { n: 3, img: 'l1-q3.jpg', answer: true, audio: [147.4, 157.0], script: '一个杯子。', scriptVn: 'Một cái cốc.' },
            { n: 4, img: 'l1-q4.jpg', answer: false, audio: [166.7, 175.3], script: '吃米饭。', scriptVn: 'Ăn cơm. (tranh là cô gái đang ăn quả táo)' },
            { n: 5, img: 'l1-q5.jpg', answer: true, audio: [185.0, 193.7], script: '看不见。', scriptVn: 'Không nhìn thấy.' }
          ]
        },
        {
          name: 'Phần 2', range: [6, 10], type: 'pic-mc',
          intro: 'Nghe câu nói và chọn hình phù hợp (A, B hoặc C).',
          questions: [
            { n: 6, pics: { A: 'l2-q6-A.jpg', B: 'l2-q6-B.jpg', C: 'l2-q6-C.jpg' }, answer: 'A', audio: [243.9, 256.7], script: '小狗住在那里面。', scriptVn: 'Chú cún sống ở trong đó.' },
            { n: 7, pics: { A: 'l2-q7-A.jpg', B: 'l2-q7-B.jpg', C: 'l2-q7-C.jpg' }, answer: 'C', audio: [271.7, 283.8], script: '喂，十分钟后见。', scriptVn: 'Alô, mười phút nữa gặp nhé.' },
            { n: 8, pics: { A: 'l2-q8-A.jpg', B: 'l2-q8-B.jpg', C: 'l2-q8-C.jpg' }, answer: 'B', audio: [298.8, 311.7], script: '女儿爱吃我做的菜。', scriptVn: 'Con gái rất thích ăn món tôi nấu.' },
            { n: 9, pics: { A: 'l2-q9-A.jpg', B: 'l2-q9-B.jpg', C: 'l2-q9-C.jpg' }, answer: 'C', audio: [326.6, 337.6], script: '你喜欢哪块儿？', scriptVn: 'Bạn thích miếng nào?' },
            { n: 10, pics: { A: 'l2-q10-A.jpg', B: 'l2-q10-B.jpg', C: 'l2-q10-C.jpg' }, answer: 'A', audio: [352.5, 365.4], script: '做什么呢？吃点东西。', scriptVn: 'Đang làm gì thế? — Ăn chút gì đó.' }
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
                { n: 11, answer: 'E', audio: [426.7, 451.0], script: '男：这些衣服怎么样？\n女：都太大了，我不喜欢。', scriptVn: 'Nam: Mấy bộ quần áo này thế nào? / Nữ: Đều rộng quá, em không thích.' },
                { n: 12, answer: 'D', audio: [466.0, 487.3], script: '女：你看见我的书了吗？\n男：在电脑那儿。', scriptVn: 'Nữ: Anh có thấy sách của em không? / Nam: Ở chỗ máy tính ấy.' },
                { n: 13, answer: 'A', audio: [502.3, 525.2], script: '男：对不起，没有茶了。\n女：没关系，我喝水。', scriptVn: 'Nam: Xin lỗi, hết trà rồi. / Nữ: Không sao, em uống nước.' },
                { n: 14, answer: 'F', audio: [540.2, 563.3], script: '女：坐车时，我爱坐前面。\n男：我爱坐后面。', scriptVn: 'Nữ: Khi đi xe, em thích ngồi phía trước. / Nam: Anh thích ngồi phía sau.' },
                { n: 15, answer: 'B', audio: [578.3, 604.2], script: '男：那个饭馆人很少。\n女：好，那我们去那儿吃！', scriptVn: 'Nam: Quán ăn kia ít người lắm. / Nữ: Được, vậy mình đến đó ăn nhé!' }
              ]
            }
          ]
        },
        {
          name: 'Phần 4', range: [16, 20], type: 'mc',
          intro: 'Nghe câu nói và câu hỏi, chọn đáp án đúng.',
          questions: [
            { n: 16, options: [{ zh: '星期三', py: 'xīngqīsān' }, { zh: '星期五', py: 'xīngqīwǔ' }, { zh: '星期六', py: 'xīngqīliù' }], answer: 'B', audio: [676.7, 705.5], script: '今天是2010年8月7日，星期六。\n问：昨天星期几？', scriptVn: 'Hôm nay là thứ Bảy, ngày 7 tháng 8 năm 2010. / Hỏi: Hôm qua là thứ mấy?' },
            { n: 17, options: [{ zh: '桌子上', py: 'zhuōzi shang' }, { zh: '桌子下', py: 'zhuōzi xia' }, { zh: '椅子上', py: 'yǐzi shang' }], answer: 'A', audio: [720.5, 740.7], script: '桌子上的钱是你的吗？\n问：钱在哪儿呢？', scriptVn: 'Tiền trên bàn là của bạn à? / Hỏi: Tiền ở đâu?' },
            { n: 18, options: [{ zh: '上午', py: 'shàngwǔ' }, { zh: '中午', py: 'zhōngwǔ' }, { zh: '下午', py: 'xiàwǔ' }], answer: 'B', audio: [755.7, 781.4], script: '中午的时候，北京下小雨了。\n问：北京什么时候下雨了？', scriptVn: 'Lúc buổi trưa, Bắc Kinh có mưa nhỏ. / Hỏi: Bắc Kinh mưa lúc nào?' },
            { n: 19, options: [{ zh: '儿子的老师', py: 'érzi de lǎoshī' }, { zh: '儿子的学生', py: 'érzi de xuésheng' }, { zh: '儿子的同学', py: 'érzi de tóngxué' }], answer: 'C', audio: [796.4, 823.9], script: '我和儿子在饭店看见了他的同学。\n问：他们看见谁了？', scriptVn: 'Tôi và con trai gặp bạn học của nó ở nhà hàng. / Hỏi: Họ đã gặp ai?' },
            { n: 20, options: [{ zh: '学习', py: 'xuéxí' }, { zh: '开车', py: 'kāi chē' }, { zh: '打电话', py: 'dǎ diànhuà' }], answer: 'C', audio: [838.9, 863.3], script: '对不起，先生，这里不能打电话。\n问：这儿不能做什么？', scriptVn: 'Xin lỗi anh, ở đây không được gọi điện thoại. / Hỏi: Ở đây không được làm gì?' }
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
            { n: 21, img: 'r1-q21.jpg', zh: '高兴', py: 'gāoxìng', vn: 'vui (tranh: cô bé đang cười tươi)', answer: true },
            { n: 22, img: 'r1-q22.jpg', zh: '下午', py: 'xiàwǔ', vn: 'buổi chiều (tranh: cái đồng hồ chỉ khoảng 10 giờ)', answer: false },
            { n: 23, img: 'r1-q23.jpg', zh: '猫', py: 'māo', vn: 'con mèo (tranh: hai chú mèo con trong giỏ)', answer: true },
            { n: 24, img: 'r1-q24.jpg', zh: '医生', py: 'yīshēng', vn: 'bác sĩ (tranh: nữ bác sĩ đeo ống nghe)', answer: true },
            { n: 25, img: 'r1-q25.jpg', zh: '睡觉', py: 'shuìjiào', vn: 'ngủ (tranh: người đàn ông đang gọi điện thoại)', answer: false }
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
                { n: 26, zh: '10点了，我现在去学校。', py: 'Shí diǎn le, wǒ xiànzài qù xuéxiào.', vn: '10 giờ rồi, bây giờ tôi đến trường.', answer: 'D' },
                { n: 27, zh: '这个字我不会写。', py: 'Zhège zì wǒ bú huì xiě.', vn: 'Chữ này con không biết viết.', answer: 'C' },
                { n: 28, zh: '你能听见我说话吗？', py: 'Nǐ néng tīngjiàn wǒ shuōhuà ma?', vn: 'Bạn có nghe thấy tôi nói không?', answer: 'B' },
                { n: 29, zh: '怎么样？漂亮吗？', py: 'Zěnmeyàng? Piàoliang ma?', vn: 'Thế nào? Đẹp không?', answer: 'F' },
                { n: 30, zh: '他是坐火车来的。', py: 'Tā shì zuò huǒchē lái de.', vn: 'Anh ấy đến bằng tàu hỏa.', answer: 'A' }
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
                { k: 'A', zh: '苹果。', py: 'Píngguǒ.', vn: 'Táo.' },
                { k: 'B', zh: '我24岁。', py: 'Wǒ èrshísì suì.', vn: 'Tôi 24 tuổi.' },
                { k: 'C', zh: '王小姐。', py: 'Wáng xiǎojiě.', vn: 'Cô Vương.' },
                { k: 'D', zh: '火车站。', py: 'Huǒchēzhàn.', vn: 'Ga tàu hỏa.' },
                { k: 'E', zh: '坐出租车。', py: 'Zuò chūzūchē.', vn: 'Đi taxi.' },
                { k: 'F', zh: '好的，谢谢！', py: 'Hǎo de, xièxie!', vn: 'Vâng, cảm ơn!', used: true }
              ],
              example: 'Ví dụ: 你喝水吗？→ F',
              questions: [
                { n: 31, zh: '他爸爸在哪儿工作？', py: 'Tā bàba zài nǎr gōngzuò?', vn: 'Bố anh ấy làm việc ở đâu?', answer: 'D' },
                { n: 32, zh: '你想买什么？', py: 'Nǐ xiǎng mǎi shénme?', vn: 'Bạn muốn mua gì?', answer: 'A' },
                { n: 33, zh: '明天你怎么去医院？', py: 'Míngtiān nǐ zěnme qù yīyuàn?', vn: 'Ngày mai bạn đến bệnh viện bằng gì?', answer: 'E' },
                { n: 34, zh: '你今年多大了？', py: 'Nǐ jīnnián duō dà le?', vn: 'Năm nay bạn bao nhiêu tuổi?', answer: 'B' },
                { n: 35, zh: '谁会说汉语？', py: 'Shéi huì shuō Hànyǔ?', vn: 'Ai biết nói tiếng Trung?', answer: 'C' }
              ]
            }
          ]
        },
        {
          name: 'Phần 4', range: [36, 40], type: 'word-fill',
          intro: 'Chọn từ thích hợp điền vào chỗ trống.',
          words: [
            { k: 'A', zh: '回', py: 'huí' }, { k: 'B', zh: '朋友', py: 'péngyou' }, { k: 'C', zh: '多少', py: 'duōshao' },
            { k: 'D', zh: '名字', py: 'míngzi', used: true }, { k: 'E', zh: '谢谢', py: 'xièxie' }, { k: 'F', zh: '冷', py: 'lěng' }
          ],
          example: 'Ví dụ: 你叫什么（ D ）？',
          questions: [
            { n: 36, zh: '今天天气很（　）。', py: 'Jīntiān tiānqì hěn (　).', vn: 'Hôm nay trời rất (lạnh).', answer: 'F' },
            { n: 37, zh: '你家的电话是（　）呢？', py: 'Nǐ jiā de diànhuà shì (　) ne?', vn: 'Số điện thoại nhà bạn là (bao nhiêu)?', answer: 'C' },
            { n: 38, zh: '我认识她，她是我妈妈的（　）。', py: 'Wǒ rènshi tā, tā shì wǒ māma de (　).', vn: 'Tôi quen cô ấy, cô ấy là (bạn) của mẹ tôi.', answer: 'B' },
            { n: 39, zh: '女：（　）你请我看电影。\n男：不客气。再见，明天见。', py: 'Nǚ: (　) nǐ qǐng wǒ kàn diànyǐng.\nNán: Bú kèqi. Zàijiàn, míngtiān jiàn.', vn: 'Nữ: (Cảm ơn) anh đã mời em đi xem phim. / Nam: Không có gì. Tạm biệt, mai gặp nhé.', answer: 'E' },
            { n: 40, zh: '男：你什么时候（　）中国？\n女：9月。', py: 'Nán: Nǐ shénme shíhou (　) Zhōngguó?\nNǚ: Jiǔ yuè.', vn: 'Nam: Khi nào bạn (về) Trung Quốc? / Nữ: Tháng 9.', answer: 'A' }
          ]
        }
      ]
    }
  ]
};
