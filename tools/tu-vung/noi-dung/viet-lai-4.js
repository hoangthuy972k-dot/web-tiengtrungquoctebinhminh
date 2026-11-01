// Viet lai cau luyen dich bai 4 thanh CAU GHEP co cap lien tu HSK 4.
// Keo lai tu bai 1-3: 印象, 性格, 适应, 聚会, 能力, 符合, 准时, 安排, 材料…
module.exports = {
  '提|1': {
    prompt: 'Mặc dù lương của anh ấy không thấp, nhưng anh ấy chưa bao giờ nhắc đến chuyện đó trước mặt đồng nghiệp.',
    answer: '尽管他的工资并不低，但他从来没在同事面前提过这件事。',
    pair: '尽管……但……',
    note: '从来没 + V + 过 — chưa từng; 并不 phản bác điều người ta tưởng.'
  },
  '份|1': {
    prompt: 'Bản khảo sát này theo kế hoạch ban đầu phải làm hai tuần, nhưng chúng tôi đã hoàn thành sớm.',
    answer: '这份调查按照原来的计划要用两周时间，可是我们提前完成了。',
    pair: '虽然……可是……',
    note: '按照 + 计划 — làm theo kế hoạch; 提前完成 là kết hợp cố định.'
  },
  '提前|0': {
    prompt: 'Vì cuộc họp chiều nay dời sớm một tiếng, nên tôi phải sắp xếp lại thời gian.',
    answer: '因为今天下午的会议提前了一个小时，所以我不得不重新安排时间。',
    pair: '因为……所以……',
    note: '重新 là từ bài 2, 安排 là từ bài 3 — ôn lại trong ngữ cảnh mới.'
  },
  '提前|1': {
    prompt: 'Anh cứ yên tâm, chỉ cần tài liệu chuẩn bị xong là tôi sẽ đưa anh trước 9 giờ sáng mai.',
    answer: '您放心，只要材料准备好，我就提前在明天9点前给您。',
    pair: '只要……就……',
    note: '您 là cách xưng hô lịch sự với cấp trên, khách hàng.'
  },
  '保证|1': {
    prompt: 'Anh yên tâm, bất kể việc nhiều đến đâu tôi cũng cam đoan sắp xếp ổn thỏa mọi thứ.',
    answer: '您放心，不管事情多少，我都保证把一切安排好。',
    pair: '不管……都……',
    note: '不管 + từ nghi vấn，都…… — bất kể thế nào cũng vậy.'
  },
  '提醒|0': {
    prompt: 'Mỗi sáng tôi đều ghi kế hoạch trong ngày vào sổ tay, như vậy vừa nhắc mình sắp xếp thời gian, vừa khỏi cuống quýt.',
    answer: '每天早上我都把当天计划写在笔记本上，这样又能提醒自己安排时间，又不会手忙脚乱。',
    pair: '又……又……',
    note: 'Câu chữ 把: 把 + tân ngữ + V + 在 + nơi chốn.'
  },
  '乱|1': {
    prompt: 'Việc càng nhiều tôi càng luống cuống, không biết nên làm cái nào trước.',
    answer: '事情越多，我就越手忙脚乱，不知道该先做哪个。',
    pair: '越……越……',
    note: '手忙脚乱 — thành ngữ bốn chữ, chỉ sự cuống quýt.'
  },
  '谈|0': {
    prompt: 'Không những chúng tôi đã đàm phán xong vụ làm ăn này, mà mọi người còn được thưởng nữa.',
    answer: '我们不但把这次生意谈成了，而且大家还拿到了奖金。',
    pair: '不但……而且……',
    note: '谈成 — bổ ngữ kết quả 成 nghĩa là "đạt tới thành công".'
  },
  '谈|1': {
    prompt: 'Chuyện gì khiến bạn vui thế, có phải việc làm ăn đã bàn xong rồi không?',
    answer: '什么事让你这么高兴啊，是不是生意已经谈成了？',
    pair: '是不是……？',
    note: 'Câu hỏi 是不是 — đoán và mong được xác nhận.'
  },
  '一切|1': {
    prompt: 'Cảm ơn mọi người, nhờ có sự giúp đỡ của mọi người mà mọi việc mới hoàn thành thuận lợi.',
    answer: '谢谢大家，只有大家的帮助，一切才能顺利完成。',
    pair: '只有……才……',
    note: '一切 chỉ sự việc nói chung, luôn đi với 都 / 才 ở vế sau.'
  },
  '顺利|0': {
    prompt: 'Cảm ơn mọi người đã nỗ lực mấy tháng qua, chỉ cần năm sau chúng ta tiếp tục cố gắng thì nhất định sẽ thuận lợi hơn.',
    answer: '感谢大家这几个月的努力，只要明年继续努力，工作就一定会更顺利。',
    pair: '只要……就……',
    note: '感谢 trang trọng hơn 谢谢 — dùng khi phát biểu trước tập thể.'
  },
  '感谢|1': {
    prompt: 'Tôi muốn cảm ơn tất cả những người ba tháng qua không những đã cùng tôi nỗ lực, mà còn giúp tôi rất nhiều.',
    answer: '我想感谢这三个月来不但和我一起努力，而且还帮了我很多的所有人。',
    pair: '不但……而且……',
    note: 'Định ngữ dài đứng trước 所有人 — đặc điểm của tiếng Trung.'
  },
  '消息|0': {
    prompt: 'Ngoài tin này ra, giám đốc Mã còn bảo tôi báo với mọi người một tin vui nữa.',
    answer: '除了这件事以外，马经理还让我告诉大家一个好消息。',
    pair: '除了……以外……还……',
    note: '让 + ai + V — câu kiêm ngữ, nghĩa là bảo ai làm gì.'
  },
  '消息|1': {
    prompt: 'Vừa nghe tin công ty phát thưởng là mọi người đều vui mừng khôn xiết.',
    answer: '大家一听到公司发奖金的消息，就都非常高兴。',
    pair: '一……就……',
    note: '一 + V + 就 — nghe xong là phản ứng ngay.'
  },
  '按时|1': {
    prompt: 'Chỉ cần thời tiết tốt là máy bay sẽ cất cánh đúng giờ lúc 10 giờ, mọi người đừng sốt ruột.',
    answer: '只要天气好，飞机10点就会按时起飞，请大家不要着急。',
    pair: '只要……就……',
    note: '按时 nhấn việc theo đúng quy định; 准时 (bài 3) nhấn đúng thời điểm.'
  },
  '奖金|1': {
    prompt: 'Vì công ty đã phát tiền thưởng, nên tôi thấy nỗ lực của mình rất đáng giá.',
    answer: '因为公司发了奖金，所以我觉得自己的努力很值得。',
    pair: '因为……所以……',
    note: '值得 — đáng, xứng đáng với công sức bỏ ra.'
  },
  '知识|0': {
    prompt: 'Mấy năm đầu đi làm, không những phải học cách trao đổi với đồng nghiệp, mà còn phải tích lũy kiến thức chuyên môn — những cái đó quan trọng hơn thu nhập nhiều.',
    answer: '工作的前几年，不但要学习与同事交流的方法，而且要积累专业知识，这些比收入重要得多。',
    pair: '不但……而且……',
    note: 'Ba từ bài 3 quay lại: 与, 专业, 收入.'
  },
  '不得不|0': {
    prompt: 'Rất nhiều khi, dù không muốn làm chúng ta vẫn buộc phải làm những công việc đó.',
    answer: '很多时候，即使我们不愿意，也不得不去做那些工作。',
    pair: '即使……也……',
    note: '即使……也…… — nhượng bộ việc giả định; 不得不 mang ý miễn cưỡng.'
  },
  '责任|1': {
    prompt: 'Hai người sống chung, không những phải hiểu nhau, mà còn phải có trách nhiệm với gia đình.',
    answer: '两个人在一起生活，不仅要互相理解，而且都要对家有责任心。',
    pair: '不仅……而且……',
    note: '互相理解 là từ bài 2 — 对 + N + 有责任心 là kết hợp cố định.'
  }
};
