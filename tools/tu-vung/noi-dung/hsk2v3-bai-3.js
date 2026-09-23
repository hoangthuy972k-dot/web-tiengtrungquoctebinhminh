// Noi dung TU MOI HSK2 3.0 bai 3 (chu de: viec nha, tu lam, tang qua).
module.exports = {
  '回来': {
    collo: [['回来了', 'về rồi'], ['几点回来', 'mấy giờ về'],
            ['已经回来了', 'đã về rồi'], ['不回来', 'không về']],
    patterns: [['几点 + 回来', 'Mấy giờ quay về'],
               ['回来 (về chỗ người nói) ↔ 回去 (về chỗ khác)']]
  },
  '这么': {
    collo: [['这么累', 'mệt thế này'], ['这么远', 'xa thế này'],
            ['这么多', 'nhiều thế này'], ['这么晚', 'muộn thế này']],
    patterns: [['这么 + tính từ', 'Đến mức này: 你这么累啊！'],
               ['这么 (gần, cái đang thấy) ↔ 那么 (xa, cái đã nhắc tới)']]
  },
  '完': {
    collo: [['吃完', 'ăn xong'], ['做完', 'làm xong'],
            ['洗完', 'rửa xong'], ['看完了', 'xem xong rồi']],
    patterns: [['động từ + 完', 'Làm xong việc gì — 完 là kết quả: 吃完饭'],
               ['完 đứng SAU động từ, không đứng trước']]
  },
  '一起': {
    collo: [['一起去', 'cùng đi'], ['和我一起', 'cùng với tôi'],
            ['一起吃饭', 'cùng ăn cơm'], ['一起做', 'cùng làm']],
    patterns: [['和 + ai + 一起 + động từ', 'Cùng ai làm gì: 和我一起去'],
               ['一起 đứng TRƯỚC động từ, không đứng cuối câu']]
  },
  '出去': {
    collo: [['出去玩儿', 'ra ngoài chơi'], ['出去吃饭', 'ra ngoài ăn'],
            ['想出去', 'muốn ra ngoài'], ['别出去', 'đừng ra ngoài']],
    patterns: [['出去 + động từ', 'Ra ngoài làm gì: 出去吃饭'],
               ['出去 (rời khỏi chỗ người nói) ↔ 回来 (quay về chỗ người nói)']]
  },
  '洗': {
    collo: [['洗手', 'rửa tay'], ['洗衣服', 'giặt quần áo'],
            ['洗完', 'rửa xong'], ['洗一下', 'rửa một chút']],
    patterns: [['洗 + đồ vật', 'Rửa, giặt cái gì: 洗手 · 洗衣服'],
               ['洗 có bộ 氵 (nước) bên trái — rửa thì cần nước']]
  },
  '自己': {
    collo: [['自己做', 'tự làm'], ['自己去', 'tự đi'],
            ['我自己', 'chính tôi'], ['自己的东西', 'đồ của mình']],
    patterns: [['Sub + 自己 + động từ', 'Tự mình làm gì: 我自己做'],
               ['自己的 + danh từ', 'Của chính mình: 自己的房间']]
  },
  '拿': {
    collo: [['拿过来', 'lấy lại đây'], ['拿一个', 'lấy một cái'],
            ['拿给我', 'đưa cho tôi'], ['拿着', 'cầm']],
    patterns: [['拿 + 过来 / 过去', 'Lấy lại đây, mang ra kia'],
               ['拿 có bộ 手 (tay) ở dưới — cầm bằng tay']]
  },
  '手': {
    collo: [['洗手', 'rửa tay'], ['两只手', 'hai bàn tay'],
            ['手上', 'trên tay'], ['手里', 'trong tay']],
    patterns: [['洗 + 手', 'Rửa tay — việc phải làm trước khi ăn'],
               ['手 là chữ tượng hình — các nét là ngón tay và cổ tay']]
  },
  '为什么': {
    collo: [['为什么不去', 'sao không đi'], ['为什么这么累', 'sao mệt thế'],
            ['为什么问', 'sao lại hỏi'], ['你为什么', 'sao bạn lại']],
    patterns: [['为什么 + động từ', 'Vì sao lại …: 你为什么不去？'],
               ['Câu đã có 为什么 thì KHÔNG thêm 吗']]
  },
  '不错': {
    collo: [['很不错', 'khá là ổn'], ['不错的东西', 'thứ khá tốt'],
            ['做得不错', 'làm khá tốt'], ['这个不错', 'cái này khá ổn']],
    patterns: [['Sub + 不错', 'Khá tốt, khá ổn — lời khen nhẹ nhàng'],
               ['不错 KHÔNG phải "không sai" mà là "khá tốt"']]
  },
  '送': {
    collo: [['送礼物', 'tặng quà'], ['送给他', 'tặng cho anh ấy'],
            ['送你回家', 'đưa bạn về nhà'], ['想送', 'muốn tặng']],
    patterns: [['送 + 给 + người', 'Tặng cho ai: 送给他一本书'],
               ['送 vừa là tặng, vừa là đưa tiễn: 送你回家']]
  },
  '回去': {
    collo: [['回去吧', 'về đi'], ['几点回去', 'mấy giờ về'],
            ['拿回去', 'mang về'], ['不回去', 'không về']],
    patterns: [['động từ + 回去', 'Mang về, đem về: 拿回去'],
               ['回去 (về chỗ khác) ↔ 回来 (về chỗ người nói)']]
  },
  '每': {
    collo: [['每天', 'mỗi ngày'], ['每个人', 'mỗi người'],
            ['每次', 'mỗi lần'], ['每年', 'mỗi năm']],
    patterns: [['每 + lượng từ + danh từ', 'Mỗi …: 每个人 · 每天'],
               ['每天 · 每年 không cần lượng từ, vì 天 và 年 tự làm lượng từ']]
  },
  '累': {
    collo: [['很累', 'rất mệt'], ['这么累', 'mệt thế này'],
            ['太累了', 'mệt quá'], ['不累', 'không mệt']],
    patterns: [['很 / 太 + 累 + 了', 'Rất mệt, mệt quá'],
               ['累 (mệt vì làm nhiều) khác 病 (mệt vì ốm)']]
  },
  '西安': {
    collo: [['去西安', 'đi Tây An'], ['西安的朋友', 'bạn ở Tây An'],
            ['从西安回来', 'từ Tây An về'], ['西安的东西', 'đồ ở Tây An']],
    patterns: [['去 / 回 + 西安', 'Đi, về Tây An'],
               ['西安 là một thành phố cổ nổi tiếng của Trung Quốc']]
  }
};
