/* Mo ta tung bai HSK 5 — dung de sinh trang bang tools/build-hsk5-page.js
   Noi dung hoc (tu vung, bai doc, bai tap) nam o public/js/hsk5-bai-N-data.js  */
module.exports = {
  1: {
    zh: '爱的细节', py: 'Ài de xìjié', vn: 'Chi tiết của tình yêu',
    topic: 'Unit 1 了解生活 · Hôn nhân &amp; tình cảm vợ chồng',
    vocabCount: 38, dialogueCount: 6, synonymCount: 3,
    has: ['listenexam', 'register', 'situation', 'retell'],
    grammar: [
      {point: '如何',
       explain: '如何 là đại từ, dùng để hỏi CÁCH THỨC, nghĩa gần với 怎么 / 怎么样 nhưng thiên về VĂN VIẾT. Ngoài ra 如何 còn đặt ở CUỐI câu để hỏi tình hình hoặc xin ý kiến — vị trí mà 怎么 không dùng được.',
       rule: '① (该) <strong style="color:var(--sky-d)">如何</strong> + Động từ　② …… <strong style="color:var(--sky-d)">如何</strong>？(cuối câu)',
       examples: [
         {zh: '我们明天举行会议，讨论这个问题该如何解决。', py: 'Wǒmen míngtiān jǔxíng huìyì, tǎolùn zhège wèntí gāi rúhé jiějué.', vn: 'Ngày mai chúng ta họp, bàn xem vấn đề này nên giải quyết như thế nào.'},
         {zh: '评委叫第一对夫妻说说他俩是如何恩爱的。', py: 'Píngwěi jiào dì-yī duì fūqī shuōshuo tā liǎ shì rúhé ēn\'ài de.', vn: 'Giám khảo bảo cặp thứ nhất kể xem hai người đằm thắm ra sao.'},
         {zh: '最近身体如何？', py: 'Zuìjìn shēntǐ rúhé?', vn: 'Dạo này sức khoẻ ra sao?'}
       ],
       errors: [
         {wrong: '今天如何这么冷？', why: '如何 KHÔNG dùng để hỏi nguyên nhân, chỉ hỏi cách thức.', right: '今天怎么这么冷？'},
         {wrong: '最近身体怎么？', why: '怎么 không đứng cuối câu để hỏi tình hình — vị trí này phải dùng 如何.', right: '最近身体如何？'}
       ]},
      {point: '靠',
       explain: '靠 là động từ, nghĩa gốc: để một phần cơ thể tì lên người hoặc vật khác. Nghĩa mở rộng: nhờ vào, dựa vào ai đó.',
       rule: '<strong style="color:var(--sky-d)">靠着 / 靠在</strong> + nơi chốn　|　<strong style="color:var(--sky-d)">靠</strong> + người (dựa vào)',
       examples: [
         {zh: '王老师喜欢靠着桌子讲课。', py: 'Wáng lǎoshī xǐhuan kàozhe zhuōzi jiǎngkè.', vn: 'Thầy Vương thích tựa vào bàn để giảng bài.'},
         {zh: '男人的头靠在女人的肩膀上，睡着了。', py: 'Nánrén de tóu kào zài nǚrén de jiānbǎng shang, shuìzháo le.', vn: 'Đầu người đàn ông tựa lên vai người phụ nữ, ngủ thiếp đi.'},
         {zh: '在家靠父母，出门靠朋友。', py: 'Zài jiā kào fùmǔ, chūmén kào péngyou.', vn: 'Ở nhà nhờ cha mẹ, ra ngoài nhờ bạn bè.'}
       ],
       errors: [
         {wrong: '他的头靠女人的肩膀。', why: 'thiếu 在……上 — chỉ vị trí tì lên phải có kết cấu đầy đủ.', right: '他的头靠在女人的肩膀上。'}
       ]},
      {point: '居然',
       explain: '居然 là phó từ, biểu thị việc xảy ra NGOÀI DỰ LIỆU, không ngờ tới. Đứng sau chủ ngữ và trước động từ.',
       rule: 'Chủ ngữ + <strong style="color:var(--sky-d)">居然</strong> + Động từ / Cụm động từ',
       examples: [
         {zh: '这么简单的题，你居然也不会做？', py: 'Zhème jiǎndān de tí, nǐ jūrán yě bú huì zuò?', vn: 'Bài dễ thế này mà bạn lại không làm được à?'},
         {zh: '这个女人为了不影响丈夫睡觉，居然放弃这次机会！', py: 'Zhège nǚrén wèile bù yǐngxiǎng zhàngfu shuìjiào, jūrán fàngqì zhè cì jīhuì!', vn: 'Người phụ nữ này vì không muốn ảnh hưởng giấc ngủ của chồng mà lại từ bỏ cơ hội này!'},
         {zh: '她每天都努力复习，居然没有通过考试。', py: 'Tā měi tiān dōu nǔlì fùxí, jūrán méiyǒu tōngguò kǎoshì.', vn: 'Cô ấy ngày nào cũng ôn chăm chỉ, vậy mà lại không qua được kỳ thi.'}
       ],
       errors: [
         {wrong: '居然他放弃了这次机会。', why: '居然 là phó từ, phải đứng SAU chủ ngữ.', right: '他居然放弃了这次机会。'},
         {wrong: '今天天气很好，我居然去公园了。', why: 'đi công viên khi trời đẹp là chuyện bình thường — 居然 phải dùng cho việc TRÁI với dự đoán.', right: '今天下大雨，他居然还去公园了。'}
       ]}
    ]
  },

  2: {
    zh: '留串钥匙给父母', py: 'Liú chuàn yàoshi gěi fùmǔ', vn: 'Để lại cho bố mẹ một chùm chìa khoá',
    topic: 'Unit 1 了解生活 · Cha mẹ &amp; con cái',
    vocabCount: 38, dialogueCount: 5, synonymCount: 3,
    grammar: [
      {point: '以来',
       explain: '以来 chỉ khoảng thời gian tính từ một mốc trong quá khứ cho tới hiện tại. Luôn đứng SAU mốc thời gian hoặc sau động từ, không đứng trước. Vế sau thường có 一直.',
       rule: '[Mốc thời gian / Động từ] + <strong style="color:var(--sky-d)">以来</strong>，…… 一直 ……',
       examples: [
         {zh: '毕业以来，他一直在北京工作。', py: 'Bìyè yǐlái, tā yìzhí zài Běijīng gōngzuò.', vn: 'Từ khi tốt nghiệp đến nay, anh ấy luôn làm việc ở Bắc Kinh.'},
         {zh: '来到中国以来，我认识了很多朋友。', py: 'Láidào Zhōngguó yǐlái, wǒ rènshile hěn duō péngyou.', vn: 'Từ khi đến Trung Quốc, tôi đã quen nhiều bạn.'},
         {zh: '长年以来，父母很少离开老屋。', py: 'Chángnián yǐlái, fùmǔ hěn shǎo líkāi lǎowū.', vn: 'Bao năm nay, bố mẹ rất ít khi rời ngôi nhà cũ.'}
       ],
       errors: [
         {wrong: '以来去年，我一直很忙。', why: '以来 phải đứng SAU mốc thời gian, không đứng trước như “từ” trong tiếng Việt.', right: '去年以来，我一直很忙。'},
         {wrong: '明年以来我会更努力。', why: '以来 chỉ tính từ QUÁ KHỨ đến nay, không dùng cho tương lai.', right: '从明年起我会更努力。'}
       ]},
      {point: '临',
       explain: '临 chỉ thời điểm ngay sát TRƯỚC một việc sắp xảy ra. Đi với động từ một âm tiết, thường kèm 前 hoặc 的时候.',
       rule: '<strong style="color:var(--sky-d)">临</strong> + Động từ (1 âm tiết) + 前 / 的时候',
       examples: [
         {zh: '临走的时候，他给我打了电话。', py: 'Lín zǒu de shíhou, tā gěi wǒ dǎle diànhuà.', vn: 'Ngay trước lúc đi, anh ấy gọi điện cho tôi.'},
         {zh: '临考试前，他每天学习到很晚。', py: 'Lín kǎoshì qián, tā měi tiān xuéxí dào hěn wǎn.', vn: 'Ngay trước kỳ thi, ngày nào anh ấy cũng học đến khuya.'},
         {zh: '临走那天，父亲从老家赶来送我们。', py: 'Lín zǒu nà tiān, fùqīn cóng lǎojiā gǎnlái sòng wǒmen.', vn: 'Hôm sắp đi, bố từ quê vội lên tiễn chúng tôi.'}
       ],
       errors: [
         {wrong: '临睡觉前不应该看手机。', why: '临 đi với động từ MỘT âm tiết — 睡 chứ không phải 睡觉.', right: '临睡前不应该看手机。'}
       ]},
      {point: '立刻',
       explain: '立刻 là phó từ, chỉ việc xảy ra ngay lập tức sau một việc khác. Đứng SAU chủ ngữ, TRƯỚC động từ. Trang trọng hơn 马上 và không dùng cho việc sắp xảy ra trong tương lai.',
       rule: 'Chủ ngữ + <strong style="color:var(--sky-d)">立刻</strong> + Động từ',
       examples: [
         {zh: '温暖的气息立刻扑面而来。', py: 'Wēnnuǎn de qìxī lìkè pū miàn ér lái.', vn: 'Hơi ấm lập tức ùa vào mặt.'},
         {zh: '老师一进教室，学生们立刻安静下来。', py: 'Lǎoshī yí jìn jiàoshì, xuéshengmen lìkè ānjìng xiàlái.', vn: 'Thầy vừa vào lớp, học sinh lập tức im lặng.'},
         {zh: '听到这个消息，他立刻站了起来。', py: 'Tīngdào zhège xiāoxi, tā lìkè zhànle qǐlái.', vn: 'Nghe tin này, anh ấy lập tức đứng bật dậy.'}
       ],
       errors: [
         {wrong: '立刻他回答了我的问题。', why: '立刻 là phó từ, phải đứng SAU chủ ngữ.', right: '他立刻回答了我的问题。'},
         {wrong: '天阴了，立刻就要下雨了。', why: 'việc SẮP xảy ra thì dùng 马上, không dùng 立刻.', right: '天阴了，马上就要下雨了。'}
       ]}
    ]
  }
};
