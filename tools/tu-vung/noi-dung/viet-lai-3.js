// Viet lai cau luyen dich bai 3 thanh CAU GHEP co cap lien tu HSK 4.
// Tu vung bai 1-2 duoc keo lai: 适应, 聚会, 真正, 印象, 性格, 合适…
module.exports = {
  '挺|0': {
    prompt: 'Mấy hôm nay tuy khá lạnh, nhưng chỉ cần mặc thêm một chiếc áo khoác là đủ rồi.',
    answer: '这几天虽然挺冷的，但是只要多穿一件外套就够了。',
    pair: '虽然……但是……',
    note: '挺 + Adj + 的 — mức độ vừa phải, giọng khẩu ngữ.'
  },
  '紧张|0': {
    prompt: 'Mặc dù lần đầu gặp bạn gái anh ấy hồi hộp đến đỏ cả mặt lẫn tai, nhưng gặp vài lần rồi thì dần quen.',
    answer: '尽管第一次见女朋友时他紧张得脸和耳朵都红了，但见过几次以后他就慢慢适应了。',
    pair: '尽管……但……',
    note: '适应 là từ bài 2 — quen dần với hoàn cảnh mới.'
  },
  '能力|0': {
    prompt: 'Cô ấy không những năng lực đáp ứng yêu cầu của công việc này, mà tính cách cũng rất hợp.',
    answer: '她不但能力符合这份工作的要求，而且性格也很合适。',
    pair: '不但……而且……',
    note: '性格 là từ bài 1; 符合要求 là kết hợp cố định.'
  },
  '能力|1': {
    prompt: 'Chỉ cần bạn thật sự có năng lực, công ty sẽ cho bạn cơ hội.',
    answer: '只要你真正有能力，公司就会给你机会。',
    pair: '只要……就……',
    note: '真正 là từ bài 2 — "thật sự", nhấn mạnh tính chân thực.'
  },
  '招聘|0': {
    prompt: 'Nghe nói đợt tuyển dụng này không những nhiều cơ hội việc làm, mà thu nhập cũng khá.',
    answer: '听说这次招聘不仅提供的工作机会很多，而且收入也不错。',
    pair: '不仅……而且……',
    note: '招聘 (công ty tuyển) khác 应聘 (người xin việc).'
  },
  '提供|0': {
    prompt: 'Nếu hồ sơ của bạn chưa đủ, chúng tôi có thể cung cấp thêm cho bạn một số thông tin mới.',
    answer: '如果你的材料还不够，我们就可以另外为你提供一些新的信息。',
    pair: '如果……就……',
    note: '为 + ai + 提供 + N — cung cấp cái gì cho ai.'
  },
  '本来|1': {
    prompt: 'Lúc đầu tôi vốn chẳng có chút tự tin nào, nhưng càng chuẩn bị nhiều hồ sơ tôi lại càng tự tin.',
    answer: '我本来一点儿信心也没有，可是材料准备得越多，我就越有信心。',
    pair: '越……越……',
    note: '一点儿……也没有 — phủ định nhấn mạnh.'
  },
  '材料|1': {
    prompt: 'Ngoài những hồ sơ này ra, tôi còn chuẩn bị thêm một số tài liệu mới.',
    answer: '除了这些材料以外，我还另外准备了一些新材料。',
    pair: '除了……以外……还……',
    note: '除了……以外，还…… — bao gồm cả cái đã nêu (khác 除了……都……).'
  },
  '符合|0': {
    prompt: 'Bạn không những năng lực đạt yêu cầu, mà tính cách cũng rất hợp với công việc này.',
    answer: '你不仅能力符合要求，性格也很符合这份工作。',
    pair: '不仅……也……',
    note: '符合 mang tân ngữ trực tiếp: 符合要求 / 符合条件.'
  },
  '通知|0': {
    prompt: 'Thời gian cuộc họp vừa sắp xếp xong là tôi gửi mail báo cho họ ngay.',
    answer: '会议的时间一安排好，我就马上发邮件通知他们。',
    pair: '一……就……',
    note: '一 + V + 就 + V — việc trước vừa xong thì việc sau xảy ra ngay.'
  },
  '另外|0': {
    prompt: 'Công việc này không những thu nhập khá tốt, mà thời gian cũng sắp xếp khá hợp lý.',
    answer: '这份工作不但收入挺好的，而且时间也安排得比较合理。',
    pair: '不但……而且……',
    note: '安排得 + Adj — bổ ngữ trạng thái đánh giá cách sắp xếp.'
  },
  '另外|1': {
    prompt: 'Chiếc áo sơ mi này thì không sao, nhưng quần thì bạn đổi sang cái khác đi.',
    answer: '这件衬衫虽然没问题，但是裤子你还是换另外一条吧。',
    pair: '虽然……但是……',
    note: '另外 + 一 + lượng từ + N — một cái khác.'
  },
  '咱们|0': {
    prompt: 'Chỉ cần mai rảnh là chúng mình cùng đi xem hội chợ tuyển dụng nhé.',
    answer: '只要明天有空，咱们就一起去看看招聘会吧。',
    pair: '只要……就……',
    note: '咱们 bao gồm cả người nghe — dùng khi rủ rê.'
  },
  '咱们|1': {
    prompt: 'Ngoài hồ sơ ra, chúng mình còn phải chuẩn bị cả quần áo trang trọng nữa.',
    answer: '除了材料以外，咱们还得准备正式的衣服。',
    pair: '除了……以外……还……',
    note: '得 (děi) — phải, bắt buộc; đọc là děi chứ không phải de.'
  },
  '安排|0': {
    prompt: 'Chúng mình sắp xếp thời gian càng hợp lý thì lúc phỏng vấn càng đỡ hồi hộp.',
    answer: '咱们的时间安排得越合理，面试的时候就越不紧张。',
    pair: '越……越……',
    note: 'Hai vế 越 nằm ở hai mệnh đề khác nhau, vế sau thêm 就.'
  },
  '诚实|0': {
    prompt: 'Chỉ có thành thật trả lời mọi câu hỏi mới để lại được ấn tượng tốt cho nhà tuyển dụng.',
    answer: '只有诚实地回答所有问题，才能给招聘的人留下好印象。',
    pair: '只有……才……',
    note: '印象 là từ bài 1; 给……留下印象 là kết hợp cố định.'
  },
  '感觉|0': {
    prompt: 'Ấn tượng đầu tiên một khi đã để lại thì rất khó thay đổi, vì nó ảnh hưởng đến cảm nhận và đánh giá của bạn sau này.',
    answer: '第一印象一留下，就很难改变，因为它会影响你以后的感觉和判断。',
    pair: '一……就……',
    note: 'Ba từ cùng bài dùng chung một câu: 留, 改变, 感觉, 判断.'
  },
  '顾客|0': {
    prompt: 'Chỉ cần để lại ấn tượng tốt cho khách hàng thì công việc sau này sẽ thuận lợi hơn nhiều.',
    answer: '只要给顾客留下好印象，以后的工作就会顺利得多。',
    pair: '只要……就……',
    note: 'Adj + 得多 — hơn nhiều, so sánh chênh lệch lớn.'
  },
  '准时|1': {
    prompt: 'Cô ấy trước hết chuẩn bị xong hồ sơ, tiếp theo là đến phỏng vấn đúng giờ.',
    answer: '她首先准备好材料，其次准时去面试。',
    pair: '首先……其次……',
    note: '首先……其次…… — nêu thứ tự các việc, không phải thứ tự thời gian.'
  },
  '与|1': {
    prompt: 'Việc này không những liên quan đến năng lực của bạn, mà còn liên quan rất lớn đến ấn tượng đầu tiên.',
    answer: '这件事不但与你的能力有关，而且与你的第一印象也有很大关系。',
    pair: '不但……而且……',
    note: '与 = 和 / 跟 nhưng thiên về văn viết.'
  },
  '约会|1': {
    prompt: 'Mặc dù tối nay tôi còn có một cuộc hẹn, nhưng tôi vẫn sẽ đến buổi họp lớp đúng giờ.',
    answer: '尽管今天晚上我还有一个约会，但我还是会准时去参加同学聚会。',
    pair: '尽管……但……',
    note: '同学聚会 là từ bài 2 — ôn lại trong ngữ cảnh mới.'
  }
};
