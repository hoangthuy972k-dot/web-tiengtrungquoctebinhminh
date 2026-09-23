// Viet lai cac cau luyen dich cua bai 2 thanh CAU GHEP co cap lien tu HSK 4.
// Khoa: '汉字|chi so cau trong checkList'.
// Tu vung cua bai 1 (幽默, 性格, 熟悉, 俩, 重新, 快乐…) duoc dung lai co y de on.
module.exports = {
  '适应|1': {
    prompt: 'Cô ấy không những nhanh chóng thích nghi với công việc mới, mà quan hệ với đồng nghiệp cũng rất tốt.',
    answer: '她不但很快适应了新工作，而且跟同事们的关系也很好。',
    pair: '不但……而且……',
    note: '不但……而且…… — nối hai vế cùng chiều, vế sau nặng hơn vế trước.'
  },
  '交|0': {
    prompt: 'Người bạn tôi mới kết giao không những rất hóm hỉnh, mà tính cách cũng rất tốt.',
    answer: '我新交的朋友不仅很幽默，性格也很好。',
    pair: '不仅……也……',
    note: '不仅……也…… — cùng nghĩa với 不但……而且……, giọng văn nhẹ hơn. 幽默, 性格 là từ bài 1.'
  },
  '平时|1': {
    prompt: 'Ngày thường cô ấy rất ít ra ngoài, nhưng chỉ cần bạn bè rủ đi dạo phố là cô ấy đi ngay.',
    answer: '平时她很少出去，但只要朋友约她去逛街，她就一定去。',
    pair: '只要……就……',
    note: '只要……就…… — điều kiện đủ: chỉ cần có điều kiện này là có kết quả kia.'
  },
  '逛|1': {
    prompt: 'Ngày thường cô ấy vừa thích đi dạo công viên với bạn bè, vừa thích ở nhà đọc sách.',
    answer: '平时她又喜欢跟朋友一起逛公园，又喜欢在家看书。',
    pair: '又……又……',
    note: '又……又…… — hai tính chất/hành động cùng tồn tại ở một chủ thể.'
  },
  '短信|0': {
    prompt: 'Người bạn mới quen của anh ấy không những hay gửi tin nhắn hài hước, mà còn thường gọi điện hỏi thăm anh ấy.',
    answer: '他新交的朋友不但常常给他发幽默短信，而且还经常打电话关心他。',
    pair: '不但……而且……',
    note: 'Vế sau thêm 还 để nhấn mức độ tăng tiến.'
  },
  '正好|0': {
    prompt: 'Tôi vừa định gọi điện cho bạn thì bạn đã đến, đúng là đến rất đúng lúc.',
    answer: '我一想给你打电话，你就来了，真是来得正好。',
    pair: '一……就……',
    note: '一……就…… — việc trước vừa xảy ra thì việc sau xảy ra ngay.'
  },
  '联系|0': {
    prompt: 'Mặc dù đã lâu chúng tôi không liên lạc, nhưng hôm nay gặp lại vẫn thấy rất thân quen.',
    answer: '虽然我们好久没联系了，但是今天再见面还是觉得很熟悉。',
    pair: '虽然……但是……',
    note: '熟悉 là từ bài 1 — "quen thuộc", khác 认识 (quen biết).'
  },
  '差不多|0': {
    prompt: 'Hai chị em họ không những tính cách gần giống nhau, mà cả hai đều rất hóm hỉnh.',
    answer: '她们姐妹俩不仅性格差不多，而且都很幽默。',
    pair: '不仅……而且……',
    note: '俩 = 两个人, sau 俩 không dùng thêm lượng từ (✗ 俩个人).'
  },
  '麻烦|0': {
    prompt: 'Nếu bạn rảnh thì phiền bạn giúp tôi liên hệ với thầy Lý một chút nhé.',
    answer: '如果你有空的话，就麻烦你帮我联系一下李老师。',
    pair: '如果……就……',
    note: '如果……的话，就…… — giả thiết; 麻烦你 + V là cách nhờ vả lịch sự.'
  },
  '麻烦|1': {
    prompt: 'Việc này tuy nhìn thì đơn giản, nhưng làm rồi thì gần như ai cũng thấy phiền phức.',
    answer: '这件事虽然看起来很简单，但是做起来差不多谁都觉得麻烦。',
    pair: '虽然……但是……',
    note: '谁都 — đại từ nghi vấn dùng theo nghĩa phiếm chỉ: "ai cũng".'
  },
  '好像|0': {
    prompt: 'Tôi cứ nhìn thấy tấm ảnh này là lại như quay về những ngày vui vẻ đã qua.',
    answer: '我一看到这张照片，就好像重新回到了过去快乐的日子。',
    pair: '一……就……',
    note: '重新 là từ cùng bài — "lại một lần nữa từ đầu".'
  },
  '好像|1': {
    prompt: 'Vì anh ấy dường như không muốn nhắc lại chuyện cũ, nên chẳng ai trong chúng tôi hỏi thêm nữa.',
    answer: '因为他好像不想再提起过去的事，所以我们谁也没再问。',
    pair: '因为……所以……',
    note: '谁也没…… — phủ định phiếm chỉ: "chẳng ai …".'
  },
  '重新|0': {
    prompt: 'Mặc dù chúng tôi đã quen nhau nhiều năm, tôi vẫn mong được làm quen lại người bạn cũ này.',
    answer: '尽管我们认识很多年了，我还是希望能重新认识这个老朋友。',
    pair: '尽管……还是……',
    note: '尽管 nhượng bộ việc CÓ THẬT, khác 即使 (giả thiết việc chưa xảy ra).'
  },
  '真正|1': {
    prompt: 'Chỉ có người bạn chân chính mới kịp thời giúp bạn lúc bạn gặp khó khăn.',
    answer: '只有真正的朋友，才会在你遇到困难的时候及时帮助你。',
    pair: '只有……才……',
    note: '只有……才…… — điều kiện duy nhất, mạnh hơn 只要……就…….'
  },
  '友谊|1': {
    prompt: 'Cô ấy không những trân trọng tình bạn giữa hai chúng tôi, mà còn thường chủ động liên lạc với tôi.',
    answer: '她不但很珍惜我们俩的友谊，而且常常主动跟我联系。',
    pair: '不但……而且……',
    note: '跟……联系 — giới từ 跟 dẫn đối tượng liên lạc.'
  },
  '丰富|0': {
    prompt: 'Kết giao càng nhiều bạn bè, cuộc sống của chúng ta càng phong phú.',
    answer: '朋友交得越多，我们的生活就越丰富。',
    pair: '越……越……',
    note: '越 A 越 B — hai vế biến đổi cùng chiều.'
  },
  '周围|1': {
    prompt: 'Môi trường xung quanh trường tôi không những rất yên tĩnh, mà còn vô cùng sạch sẽ.',
    answer: '我们学校周围的环境不仅很安静，而且非常干净。',
    pair: '不仅……而且……',
    note: '地点 + 周围 — 周围 đứng SAU danh từ chỉ nơi chốn.'
  },
  '交流|1': {
    prompt: 'Chỉ cần thường xuyên trao đổi thì mọi người sẽ dễ hiểu nhau và dễ thành bạn bè hơn.',
    answer: '只要经常交流，人们就更容易互相了解，成为朋友。',
    pair: '只要……就……',
    note: '互相 + V song âm tiết (互相了解 / 互相理解 / 互相帮助).'
  },
  '镜子|1': {
    prompt: 'Mỗi sáng trước khi ra khỏi nhà cô ấy đều soi gương, vì cô ấy thấy gương chân thực như một người bạn vậy.',
    answer: '她每天早上出门以前都要照镜子，因为她觉得镜子像朋友一样真实。',
    pair: '像……一样……',
    note: '像 A 一样 + Adj — so sánh ngang bằng.'
  },
  '陪|1': {
    prompt: 'Nếu bạn có thời gian thì phiền bạn đi cùng tôi đến bệnh viện một chuyến nhé.',
    answer: '要是你有时间的话，就麻烦你陪我去一趟医院。',
    pair: '要是……就……',
    note: '要是 = 如果 nhưng thiên về khẩu ngữ; 一趟 là lượng từ động tác cho chuyến đi.'
  }
};
