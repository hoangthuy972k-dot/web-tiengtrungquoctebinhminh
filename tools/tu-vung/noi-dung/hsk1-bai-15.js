// Noi dung TU MOI HSK1 bai 15 (chu de: lam quen, di lai, nam thang).
module.exports = {
  '认识': {
    collo: [['认识你', 'quen biết bạn'], ['认识这个字', 'biết chữ này'],
            ['不认识', 'không quen, không biết'], ['认识一年了', 'quen nhau một năm rồi']],
    patterns: [['认识 + người / chữ', 'Quen ai, biết mặt chữ nào'],
               ['认识 (biết mặt, quen) khác 会 (học rồi nên làm được)']]
  },
  '年': {
    collo: [['一年', 'một năm'], ['今年', 'năm nay'],
            ['三年', 'ba năm'], ['学了一年', 'học được một năm']],
    patterns: [['số + 年', 'Bao nhiêu năm: 一年 — 年 tự làm lượng từ'],
               ['✗ 一个年 → ✓ 一年', '年 · 天 · 岁 đều không cần thêm 个']]
  },
  '大学': {
    collo: [['上大学', 'học đại học'], ['去大学', 'đến trường đại học'],
            ['大学的老师', 'giảng viên đại học'], ['中国大学', 'đại học Trung Quốc']],
    patterns: [['去 / 上 + 大学', 'Đi, học ở trường đại học'],
               ['大 + 学', 'Trường (学) bậc lớn (大) — khác 学校 nói chung']]
  },
  '饭店': {
    collo: [['去饭店', 'đến nhà hàng'], ['在饭店吃饭', 'ăn cơm ở nhà hàng'],
            ['这个饭店', 'nhà hàng này'], ['饭店的菜', 'món của nhà hàng']],
    patterns: [['在 + 饭店 + 吃饭', 'Ăn cơm ở nhà hàng'],
               ['饭 + 店', 'Tiệm (店) cơm (饭) — cùng kiểu với 商店']]
  },
  '出租车': {
    collo: [['坐出租车', 'đi taxi'], ['开出租车', 'lái taxi'],
            ['一个出租车', 'một chiếc taxi'], ['出租车上', 'trên taxi']],
    patterns: [['坐 + 出租车', 'Đi taxi — dùng 坐 như 坐车'],
               ['出租 + 车', 'Xe (车) cho thuê (出租)']]
  },
  '一起': {
    collo: [['一起去', 'cùng đi'], ['一起吃饭', 'cùng ăn cơm'],
            ['和我一起', 'cùng với tôi'], ['一起学习', 'cùng học']],
    patterns: [['和 + ai + 一起 + động từ', 'Cùng ai làm gì: 和我一起去'],
               ['一起 đứng TRƯỚC động từ, không đứng cuối câu']]
  },
  '高兴': {
    collo: [['很高兴', 'rất vui'], ['太高兴了', 'vui quá'],
            ['不高兴', 'không vui'], ['都很高兴', 'đều rất vui']],
    patterns: [['很高兴 + 认识你', 'Rất vui được làm quen — câu chào hỏi kinh điển'],
               ['高 + 兴', 'Hứng (兴) lên cao (高)']]
  },
  '听': {
    collo: [['听老师说', 'nghe thầy nói'], ['听电话', 'nghe điện thoại'],
            ['不听', 'không nghe'], ['听一听', 'nghe thử']],
    patterns: [['听 + người + 说', 'Nghe ai nói'],
               ['听 (nghe bằng tai) ≠ 看 (nhìn bằng mắt)']]
  },
  '飞机': {
    collo: [['坐飞机', 'đi máy bay'], ['一个飞机', 'một chiếc máy bay'],
            ['飞机上', 'trên máy bay'], ['坐飞机回中国', 'đi máy bay về Trung Quốc']],
    patterns: [['坐 + 飞机', 'Đi máy bay — cũng dùng 坐'],
               ['飞 + 机', 'Cỗ máy (机) biết bay (飞)']]
  }
};
