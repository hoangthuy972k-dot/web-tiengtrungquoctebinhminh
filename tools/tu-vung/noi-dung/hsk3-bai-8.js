// Noi dung TU MOI HSK3 bai 8 (chu de: gap lai ban cu, thay doi, suc khoe).
module.exports = {
  '又': {
    collo: [['又迟到了', 'lại đến muộn rồi'], ['又下雨了', 'lại mưa rồi'],
            ['又去看了', 'lại đi xem nữa'], ['又忘了', 'lại quên mất'],
            ['又来了', 'lại đến rồi']],
    patterns: [['又 + V + 了', 'Lại … rồi — việc ĐÃ lặp lại'],
               ['又 (đã lặp) ≠ 再 (sẽ lặp): 又来了 / 明天再来']]
  },
  '满意': {
    collo: [['很满意', 'rất hài lòng'], ['不满意', 'không hài lòng'],
            ['对……满意', 'hài lòng với…'], ['满意的答案', 'câu trả lời vừa ý'],
            ['让人满意', 'khiến người ta hài lòng']],
    patterns: [['对 + N + 满意', 'Hài lòng với cái gì — bắt buộc có 对'],
               ['✗ 我满意这个房子 → ✓ 我对这个房子很满意']]
  },
  '电梯': {
    collo: [['坐电梯', 'đi thang máy'], ['等电梯', 'đợi thang máy'],
            ['没有电梯', 'không có thang máy'], ['电梯坏了', 'thang máy hỏng'],
            ['电梯在那边', 'thang máy ở đằng kia']],
    patterns: [['坐 + 电梯', 'Đi thang máy — dùng động từ 坐'],
               ['电 + 梯', 'Thang (梯) chạy điện (电)']]
  },
  '层': {
    collo: [['二十层', 'tầng hai mươi'], ['住几层', 'ở tầng mấy'],
            ['一层', 'tầng một'], ['上一层', 'lên một tầng'],
            ['这层楼', 'tầng lầu này']],
    patterns: [['số + 层', 'Tầng mấy — 住在六层'],
               ['层 (tầng) đi với 楼 (toà nhà, bài 2)']]
  },
  '害怕': {
    collo: [['很害怕', 'rất sợ'], ['别害怕', 'đừng sợ'],
            ['害怕狗', 'sợ chó'], ['不害怕', 'không sợ'],
            ['害怕一个人', 'sợ ở một mình']],
    patterns: [['Sub + 害怕 + N / V', 'Ai đó sợ cái gì, sợ làm gì'],
               ['别 + 害怕', 'Đừng sợ — lời trấn an']]
  },
  '熊猫': {
    collo: [['大熊猫', 'gấu trúc lớn'], ['看熊猫', 'xem gấu trúc'],
            ['一只熊猫', 'một con gấu trúc'], ['熊猫很可爱', 'gấu trúc rất dễ thương'],
            ['熊猫爱吃竹子', 'gấu trúc thích ăn trúc']],
    patterns: [['một + 只 + 熊猫', 'Lượng từ 只 cho con vật'],
               ['熊 + 猫', 'Gấu (熊) mèo (猫) — cách ghép rất dễ nhớ']]
  },
  '见面': {
    collo: [['跟朋友见面', 'gặp bạn'], ['再见面', 'gặp lại'],
            ['见个面', 'gặp một lát'], ['见过面', 'đã từng gặp'],
            ['见面的时候', 'lúc gặp nhau']],
    patterns: [['跟 + ai + 见面', 'Gặp ai — 见面 là từ ly hợp'],
               ['✗ 见面他 → ✓ 跟他见面', 'Chỗ này học sinh Việt hay sai']]
  },
  '安静': {
    collo: [['很安静', 'rất yên tĩnh'], ['安静的地方', 'nơi yên tĩnh'],
            ['喜欢安静', 'thích yên tĩnh'], ['安静一点儿', 'yên lặng một chút'],
            ['教室很安静', 'lớp học rất yên tĩnh']],
    patterns: [['安静的 + nơi chốn', 'Nơi yên tĩnh'],
               ['安静 ↔ 吵', 'Yên tĩnh ↔ ồn ào']]
  },
  '可乐': {
    collo: [['喝可乐', 'uống coca'], ['一杯可乐', 'một ly coca'],
            ['冰可乐', 'coca lạnh'], ['买可乐', 'mua coca'],
            ['可乐还是茶', 'coca hay trà']],
    patterns: [['một + 杯 + 可乐', 'Một ly coca'],
               ['可乐 là từ dịch âm của "cola"']]
  },
  '一会儿': {
    collo: [['等一会儿', 'đợi một lát'], ['一会儿就来', 'lát nữa đến ngay'],
            ['看一会儿', 'xem một lát'], ['休息一会儿', 'nghỉ một lát'],
            ['过一会儿', 'lát nữa']],
    patterns: [['V + 一会儿', 'Làm gì một lát'],
               ['一会儿 (một lát) ≠ 一点儿 (một chút về lượng)']]
  },
  '马上': {
    collo: [['马上回来', 'quay lại ngay'], ['马上就到', 'sắp đến rồi'],
            ['马上好', 'xong ngay'], ['马上出发', 'xuất phát ngay'],
            ['马上要下雨了', 'sắp mưa rồi']],
    patterns: [['马上 + 就 + V', 'Ngay lập tức sẽ …'],
               ['马上 (ngay) ≠ 突然 (bất ngờ, bài 6)']]
  },
  '洗手间': {
    collo: [['去洗手间', 'đi nhà vệ sinh'], ['在洗手间', 'ở nhà vệ sinh'],
            ['洗手间在哪儿', 'nhà vệ sinh ở đâu'], ['找洗手间', 'tìm nhà vệ sinh'],
            ['干净的洗手间', 'nhà vệ sinh sạch']],
    patterns: [['去 + 洗手间', 'Đi nhà vệ sinh'],
               ['洗手 + 间', 'Phòng (间) rửa tay (洗手) — cách nói lịch sự']]
  },
  '老': {
    collo: [['老朋友', 'bạn cũ'], ['老同学', 'bạn học cũ'],
            ['变老了', 'già đi rồi'], ['老人', 'người già'],
            ['老地方', 'chỗ cũ']],
    patterns: [['老 + 朋友 / 同学 (quen lâu)', '老朋友 là bạn lâu năm, không phải bạn già'],
               ['老 ↔ 年轻 / 新', 'Già ↔ trẻ; cũ ↔ mới']]
  },
  '几乎': {
    collo: [['几乎没有', 'hầu như không có'], ['几乎都', 'hầu như đều'],
            ['几乎一样', 'gần như giống nhau'], ['几乎忘了', 'suýt quên mất'],
            ['几乎每天', 'hầu như ngày nào cũng']],
    patterns: [['几乎 + 没有 / 都 + V', 'Hầu như không / hầu như đều …'],
               ['几乎 ≈ 差不多', '几乎 thiên về "sát đến mức đó"']]
  },
  '变化': {
    collo: [['变化很大', 'thay đổi rất nhiều'], ['没有变化', 'không thay đổi'],
            ['发生变化', 'xảy ra thay đổi'], ['变化太快', 'thay đổi quá nhanh'],
            ['城市的变化', 'sự thay đổi của thành phố']],
    patterns: [['N + 的变化 + 很大', 'Sự thay đổi của cái gì rất lớn'],
               ['变化 (danh từ) ≠ 变 (động từ): 变化很大 / 天气变了']]
  },
  '健康': {
    collo: [['很健康', 'rất khoẻ mạnh'], ['身体健康', 'sức khoẻ tốt'],
            ['健康最重要', 'sức khoẻ quan trọng nhất'], ['不健康', 'không lành mạnh'],
            ['注意健康', 'chú ý sức khoẻ']],
    patterns: [['身体 + 健康', 'Cơ thể khoẻ mạnh — lời chúc quen thuộc'],
               ['健康 (tính từ và danh từ): 很健康 / 注意健康']]
  },
  '重要': {
    collo: [['最重要', 'quan trọng nhất'], ['很重要', 'rất quan trọng'],
            ['重要的事', 'việc quan trọng'], ['不太重要', 'không quan trọng lắm'],
            ['对我很重要', 'rất quan trọng với tôi']],
    patterns: [['对 + ai + 很重要', 'Rất quan trọng đối với ai'],
               ['重要 (zhòngyào) — 重 ở đây đọc zhòng như 很重 (nặng)']]
  }
};
