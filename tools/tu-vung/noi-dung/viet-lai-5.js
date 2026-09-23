// Viet lai cau luyen dich bai 5 thanh CAU GHEP co cap lien tu HSK 4.
// Cach lam: GIU nguyen cau cu roi long cap lien tu vao, nen pinyin chi phai
// them dung phan moi — an toan hon la viet cau moi hoan toan.
module.exports = {
  '家具|0': {
    prompt: 'Trên mạng không những mua được sách, quần áo, mà còn mua được cả nội thất và điện thoại.',
    answer: '在网上不但可以买书、买衣服，而且还可以买家具、买手机。',
    pair: '不但……而且……',
    note: 'Vế sau thêm 还 để nhấn mức tăng tiến.'
  },
  '家具|1': {
    prompt: 'Món nội thất này không những chất lượng tốt, mà giá cả cũng phải chăng.',
    answer: '这个家具不但质量很好，而且价格也合适。',
    pair: '不但……而且……',
    note: '质量 và 价格 là cặp từ hay đi cùng nhau khi nói về hàng hóa.'
  },
  '打折|1': {
    prompt: 'Vì bây giờ đang đúng lúc chuyển mùa, nên rất nhiều cửa hàng đều giảm giá.',
    answer: '因为现在正是换季，所以好多商店都在打折。',
    pair: '因为……所以……',
    note: '在 + V — đang làm gì; 打折 là từ ly hợp: 打八折.'
  },
  '肯定|0': {
    prompt: 'Công viên đó có thể đóng cửa lúc 6 giờ, cũng có thể 6 rưỡi; bất kể là mấy giờ, chúng ta cứ đi sớm một chút.',
    answer: '那个公园可能六点关门，也可能六点半关门，不管是几点，我们都早点儿去吧。',
    pair: '不管……都……',
    note: '不管 + từ nghi vấn (几点)，都…… — bất kể thế nào cũng vậy.'
  },
  '肯定|1': {
    prompt: 'Bạn yên tâm, chỉ cần xuất phát sớm một chút là chúng ta chắc chắn không đến muộn.',
    answer: '你放心，只要早点儿出发，我们就肯定不会迟到。',
    pair: '只要……就……',
    note: '肯定 ở đây là phó từ — đứng trước động từ.'
  },
  '顺便|0': {
    prompt: 'Đã tiện đường ghé siêu thị thì chúng ta mua thêm hai chai rượu vang luôn đi.',
    answer: '既然顺便去超市，我们就多买两瓶葡萄酒吧。',
    pair: '既然……就……',
    note: '既然……就…… — đã có sự thật A rồi thì làm B.'
  },
  '顺便|1': {
    prompt: 'Vì trung tâm thương mại đúng lúc đang giảm giá tủ lạnh, nên chúng ta tiện thể mua một cái mới đi.',
    answer: '因为商场正好在打折冰箱，所以我们顺便买个新的吧。',
    pair: '因为……所以……',
    note: '正好 là từ bài 2 — vừa đúng dịp.'
  },
  '台|1': {
    prompt: 'Vì máy tính xách tay của tôi thật sự quá cũ rồi, nên tôi muốn đổi một cái mới, bạn giới thiệu giúp tôi được không?',
    answer: '因为我的笔记本电脑实在太旧了，所以我想换一台新的，你可以给我介绍一下吗？',
    pair: '因为……所以……',
    note: '一台 — lượng từ dành cho máy móc, thiết bị.'
  },
  '实在|1': {
    prompt: 'Tuy ai cũng nói kinh doanh dễ kiếm tiền, nhưng thật sự không đơn giản như tôi từng nghĩ.',
    answer: '虽然大家都说做生意容易赚钱，但是实在不像我原来想的那么简单。',
    pair: '虽然……但是……',
    note: '做生意, 赚钱, 原来 đều là từ bài 4 — ôn lại trong ngữ cảnh mua bán.'
  },
  '制冷|0': {
    prompt: 'Cái tủ lạnh này không những làm lạnh kém, mà tiếng ồn cũng rất to, chúng ta đổi cái mới đi.',
    answer: '这台冰箱不但制冷效果不太好，而且声音也很大，我们换个新的吧。',
    pair: '不但……而且……',
    note: 'Hai vế cùng nêu nhược điểm — nối bằng 不但……而且.'
  },
  '制冷|1': {
    prompt: 'Mùa hè càng nóng thì hiệu quả làm lạnh của máy lạnh càng quan trọng.',
    answer: '夏天越热，空调的制冷效果就越重要。',
    pair: '越……越……',
    note: 'Hai vế 越 ở hai mệnh đề, vế sau thêm 就.'
  },
  '效果|0': {
    prompt: 'Chỉ cần hiệu quả của cách này khá tốt là chúng ta có thể thử xem.',
    answer: '只要这个方法的效果不错，我们就可以试试看。',
    pair: '只要……就……',
    note: '方法 là từ bài 4; V + 试试看 — thử xem sao.'
  },
  '效果|1': {
    prompt: 'Cái tủ lạnh này không những chất lượng kém, mà hiệu quả làm lạnh cũng rất tệ.',
    answer: '这台冰箱不但质量不好，而且制冷效果也很差。',
    pair: '不但……而且……',
    note: '效果 đi với 好 / 差, không đi với 多 / 少.'
  },
  '现金|0': {
    prompt: 'Nếu tiền mặt tôi mang không đủ mua chiếc sô pha này thì tôi dùng thẻ tín dụng của bạn, được không?',
    answer: '如果我带的现金不够买这个沙发，我就用你的信用卡，好吗？',
    pair: '如果……就……',
    note: '不够 + V — không đủ để làm gì.'
  },
  '现金|1': {
    prompt: 'Cửa hàng này tuy không nhận tiền mặt, nhưng có thể quẹt thẻ hoặc thanh toán bằng điện thoại.',
    answer: '这家店虽然不收现金，但是可以刷卡或者用手机付款。',
    pair: '虽然……但是……',
    note: '或者 dùng trong câu trần thuật; 还是 dùng trong câu hỏi.'
  },
  '邀请|0': {
    prompt: 'Nếu muốn mời người khác đi ăn thì tốt nhất nên liên hệ trước vài ngày.',
    answer: '如果要邀请别人吃饭，就最好提前几天联系。',
    pair: '如果……就……',
    note: '提前 và 联系 là từ bài 4 và bài 2.'
  },
  '邀请|1': {
    prompt: 'Thầy Lý đã mời chúng mình đến nhà chơi thì chúng mình nên mang chút quà chứ nhỉ?',
    answer: '既然李老师邀请咱们去他家做客，咱们就该带点儿礼物吧？',
    pair: '既然……就……',
    note: '咱们 là từ bài 3 — bao gồm cả người nghe.'
  },
  '葡萄|0': {
    prompt: 'Vì thầy Lý rất thích rượu vang, nên chúng ta tiện thể mua cho thầy hai chai đi.',
    answer: '因为李老师很喜欢葡萄酒，所以我们顺便给他买两瓶吧。',
    pair: '因为……所以……',
    note: '给 + ai + V — làm gì cho ai.'
  },
  '葡萄|1': {
    prompt: 'Tuy mỗi ngày uống một chút rượu vang có lợi cho sức khỏe, nhưng không nên uống quá nhiều.',
    answer: '虽然每天喝一点儿葡萄酒对身体有好处，但是不应该喝太多。',
    pair: '虽然……但是……',
    note: '对 + N + 有好处 — có lợi cho cái gì.'
  },
  '艺术|0': {
    prompt: 'Chính vì vỏ chai rượu vang này làm đẹp như một tác phẩm nghệ thuật, nên trên tivi lúc nào cũng có quảng cáo của nó.',
    answer: '正因为这个葡萄酒瓶做得这么艺术，所以电视上经常有它的广告。',
    pair: '因为……所以……',
    note: '正因为 — nhấn mạnh đúng là vì lý do đó.'
  },
  '艺术|1': {
    prompt: 'Chiếc sô pha này không những thiết kế rất nghệ thuật, mà màu sắc cũng rất thịnh hành.',
    answer: '这个沙发不但设计得很艺术，而且颜色也很流行。',
    pair: '不但……而且……',
    note: 'V + 得 + 很艺术 — bổ ngữ trạng thái đánh giá cách làm.'
  },
  '广告|0': {
    prompt: 'Tuy quảng cáo chỉ giới thiệu ưu điểm, nhưng thực tế nhiều thứ không hề tốt như quảng cáo nói.',
    answer: '虽然广告只会介绍优点，但是实际上很多东西并不像广告上说的那么好。',
    pair: '虽然……但是……',
    note: '并不 là từ bài 4 — phản bác điều người ta tưởng.'
  },
  '味道|0': {
    prompt: 'Vì trên tivi thường có quảng cáo chai rượu vang này, nên tôi nghĩ mùi vị chắc là khá ngon.',
    answer: '因为电视上经常有这瓶葡萄酒的广告，所以我想味道应该不错。',
    pair: '因为……所以……',
    note: '应该 ở đây là phỏng đoán: "chắc là", không phải "nên".'
  },
  '优点|0': {
    prompt: 'Quảng cáo không những chỉ giới thiệu ưu điểm của sản phẩm, mà còn chẳng bao giờ nói đến khuyết điểm.',
    answer: '广告不但只介绍产品的优点，而且从来不说缺点。',
    pair: '不但……而且……',
    note: '从来不 + V — chưa bao giờ, không bao giờ.'
  },
  '优点|1': {
    prompt: 'Ưu điểm của chiếc sô pha này là không những giá cả phải chăng, mà chất lượng cũng có bảo đảm.',
    answer: '这个沙发的优点是不但价格合适，而且质量也有保证。',
    pair: '不但……而且……',
    note: '保证 là từ bài 4 — 质量有保证 là kết hợp cố định.'
  },
  '实际|0': {
    prompt: 'Tuy ai cũng nói kinh doanh dễ, nhưng thực tế không hề đơn giản như tôi từng nghĩ.',
    answer: '虽然大家都说做生意容易，但实际上并不像我原来想的那么简单。',
    pair: '虽然……但……',
    note: '实际上 nêu sự thật trái với điều người ta tưởng.'
  },
  '实际|1': {
    prompt: 'Các bạn lập kế hoạch không những phải gắn với thực tế, mà còn không thể chỉ nói suông trên giấy.',
    answer: '你们做计划不但应该联系实际，而且不能只在纸上说说。',
    pair: '不但……而且……',
    note: '计划 là từ bài 4; 联系实际 là kết hợp cố định.'
  },
  '考虑|0': {
    prompt: 'Mua đồ nội thất không những phải cân nhắc giá cả, mà còn phải cân nhắc cả chất lượng.',
    answer: '买家具不但要考虑价格，而且要考虑质量。',
    pair: '不但……而且……',
    note: 'Hai vế dùng cùng một động từ 考虑 — cấu trúc song song rất hay gặp.'
  },
  '考虑|1': {
    prompt: 'Chỉ sau khi cân nhắc nghiêm túc suốt một tối, tôi mới quyết định mua chiếc sô pha màu xanh này.',
    answer: '只有认真考虑了一个晚上，我才决定买这个蓝色的沙发。',
    pair: '只有……才……',
    note: '只有……才…… — điều kiện duy nhất mới dẫn đến kết quả.'
  },
  '样子|1': {
    prompt: 'Chiếc sô pha xanh này không những kiểu dáng rất thịnh hành, mà giá cả cũng phải chăng.',
    answer: '这个蓝色沙发不但样子很流行，而且价格也合适。',
    pair: '不但……而且……',
    note: '样子 + 流行 — nói về kiểu dáng hợp mốt.'
  },
  '年龄|1': {
    prompt: 'Bất kể người ở độ tuổi nào, tiêu chuẩn mua quần áo đều không giống nhau.',
    answer: '不管是什么年龄的人，买衣服的标准都不一样。',
    pair: '不管……都……',
    note: '不管 là từ bài 3 — ôn lại; 年龄 đi với 大 / 小 chứ không với 多 / 少.'
  },
  '尤其|0': {
    prompt: 'Tôi không những rất thích thể thao, mà còn đặc biệt thích đá bóng.',
    answer: '我不但特别喜欢运动，而且尤其喜欢踢足球。',
    pair: '不但……而且……',
    note: '尤其 đứng SAU chủ ngữ, trước động từ.'
  },
  '任何|0': {
    prompt: 'Chỉ cần có mạng là mọi người có thể mua bất cứ thứ gì mình thích vào bất cứ lúc nào, rất tiện.',
    answer: '只要有网络，人们就可以在任何时间买自己喜欢的任何东西，非常方便。',
    pair: '只要……就……',
    note: 'Sau 任何 không dùng 的: ✓ 任何人 / ✗ 任何的人.'
  },
  '寄|0': {
    prompt: 'Người bán không những có thể gửi hàng bạn mua đến bất kỳ địa chỉ nào, mà tốc độ cũng rất nhanh.',
    answer: '卖家不但可以把你买的东西寄到任何地址，而且速度也非常快。',
    pair: '不但……而且……',
    note: 'Câu chữ 把: 把 + tân ngữ + 寄到 + nơi chốn.'
  },
  '寄|1': {
    prompt: 'Tôi đã gửi tài liệu đến văn phòng bạn rồi, nếu nhận được thì báo tôi một tiếng nhé.',
    answer: '我已经把材料寄到你的办公室了，如果你收到了就告诉我一声。',
    pair: '如果……就……',
    note: '材料 là từ bài 3; 一声 — lượng từ cho một lời nhắn ngắn.'
  }
};
