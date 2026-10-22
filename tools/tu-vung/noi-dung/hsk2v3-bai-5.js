// Noi dung TU MOI HSK2 3.0 bai 5 (chu de: don khach, chuan bi qua, huong di len xuong).
module.exports = {
  '快': {
    collo: [['很快', 'rất nhanh'], ['快一点儿', 'nhanh lên chút'],
            ['快来', 'mau đến đây'], ['跑得很快', 'chạy rất nhanh']],
    patterns: [['快 + động từ', 'Mau lên, giục ai đó: 快来！'],
               ['快 ↔ 慢', 'Nhanh ↔ chậm']]
  },
  '下来': {
    collo: [['走下来', 'đi xuống đây'], ['拿下来', 'lấy xuống'],
            ['下来吧', 'xuống đây đi'], ['快下来', 'mau xuống đây']],
    patterns: [['động từ + 下来', 'Từ trên xuống, về phía người nói: 走下来'],
               ['下来 (xuống, gần mình) ↔ 下去 (xuống, xa mình)']]
  },
  '上来': {
    collo: [['走上来', 'đi lên đây'], ['拿上来', 'mang lên đây'],
            ['上来吧', 'lên đây đi'], ['快上来', 'mau lên đây']],
    patterns: [['động từ + 上来', 'Từ dưới lên, về phía người nói: 走上来'],
               ['上来 (lên, gần mình) ↔ 上去 (lên, xa mình)']]
  },
  '上去': {
    collo: [['走上去', 'đi lên đó'], ['拿上去', 'mang lên đó'],
            ['上去看看', 'lên đó xem'], ['上去吧', 'lên đó đi']],
    patterns: [['động từ + 上去', 'Từ dưới lên, ra xa người nói: 走上去'],
               ['上来 · 上去 · 下来 · 下去 — bốn hướng cơ bản']]
  },
  '下面': {
    collo: [['桌子下面', 'dưới bàn'], ['在下面', 'ở phía dưới'],
            ['下面有', 'phía dưới có'], ['楼下面', 'dưới nhà']],
    patterns: [['danh từ + 下面', 'Phía dưới cái gì: 桌子下面'],
               ['下面 ↔ 上面', 'Dưới ↔ trên — đều đứng SAU danh từ']]
  },
  '等': {
    collo: [['等一下', 'đợi một chút'], ['等一会儿', 'đợi một lát'],
            ['在车站等', 'đợi ở bến xe'], ['等你', 'đợi bạn']],
    patterns: [['等 + 一下 / 一会儿', 'Đợi một chút, đợi một lát'],
               ['等 + người', 'Đợi ai: 我等你']]
  },
  '一会儿': {
    collo: [['等一会儿', 'đợi một lát'], ['一会儿见', 'lát nữa gặp'],
            ['休息一会儿', 'nghỉ một lát'], ['看一会儿', 'xem một lát']],
    patterns: [['động từ + 一会儿', 'Làm gì một lát — thời gian ngắn'],
               ['一会儿 đứng SAU động từ, không đứng trước']]
  },
  '下去': {
    collo: [['走下去', 'đi xuống đó'], ['拿下去', 'mang xuống đó'],
            ['下去看看', 'xuống đó xem'], ['下去吧', 'xuống đó đi']],
    patterns: [['động từ + 下去', 'Từ trên xuống, ra xa người nói: 走下去'],
               ['下去 (xuống, xa mình) ↔ 下来 (xuống, gần mình)']]
  },
  '进来': {
    collo: [['进来吧', 'vào đi'], ['走进来', 'đi vào đây'],
            ['请进来', 'mời vào'], ['快进来', 'mau vào đi']],
    patterns: [['请 + 进来', 'Mời vào — câu lịch sự khi đón khách'],
               ['进来 (vào, gần mình) ↔ 进去 (vào, xa mình)']]
  },
  '爷爷': {
    collo: [['我爷爷', 'ông nội tôi'], ['爷爷奶奶', 'ông bà nội'],
            ['给爷爷的礼物', 'quà cho ông'], ['爷爷来了', 'ông đến rồi']],
    patterns: [['ai + 爷爷', 'Ông của ai — người thân hay bỏ 的'],
               ['爷爷 (ông nội) và 奶奶 (bà nội) — hay đi thành cặp']]
  },
  '奶奶': {
    collo: [['我奶奶', 'bà nội tôi'], ['爷爷奶奶', 'ông bà nội'],
            ['奶奶做的菜', 'món bà nấu'], ['给奶奶打电话', 'gọi điện cho bà']],
    patterns: [['ai + 奶奶', 'Bà của ai — người thân hay bỏ 的'],
               ['奶奶 + 做的 + N', 'Món bà làm']]
  },
  '礼物': {
    collo: [['送礼物', 'tặng quà'], ['买礼物', 'mua quà'],
            ['一个礼物', 'một món quà'], ['生日礼物', 'quà sinh nhật']],
    patterns: [['送 + 给 + người + 礼物', 'Tặng quà cho ai'],
               ['礼 + 物', 'Đồ vật (物) dùng làm lễ (礼)']]
  },
  '准备': {
    collo: [['准备礼物', 'chuẩn bị quà'], ['准备好了', 'chuẩn bị xong rồi'],
            ['准备考试', 'ôn thi'], ['准备一下', 'chuẩn bị một chút']],
    patterns: [['准备 + danh từ', 'Chuẩn bị cái gì: 准备礼物'],
               ['准备 + động từ', 'Định làm gì: 我准备去北京']]
  },
  '奶茶': {
    collo: [['喝奶茶', 'uống trà sữa'], ['一杯奶茶', 'một cốc trà sữa'],
            ['买奶茶', 'mua trà sữa'], ['好喝的奶茶', 'trà sữa ngon']],
    patterns: [['một + 杯 + 奶茶', 'Lượng từ 杯 cho đồ uống'],
               ['奶 + 茶', 'Trà (茶) pha sữa (奶)']]
  },
  '跟': {
    collo: [['跟我一起', 'cùng với tôi'], ['跟他说', 'nói với anh ấy'],
            ['跟朋友去', 'đi với bạn'], ['跟爷爷学', 'học từ ông']],
    patterns: [['跟 + ai + 一起 + động từ', 'Cùng ai làm gì: 跟我一起去'],
               ['跟 = 和 — 跟 thiên khẩu ngữ hơn']]
  },
  '走': {
    collo: [['走路', 'đi bộ'], ['快走', 'đi nhanh lên'],
            ['走过来', 'đi lại đây'], ['走吧', 'đi thôi']],
    patterns: [['走 + 过来 / 过去 / 上来 / 下去', 'Đi theo hướng nào'],
               ['走 (đi bộ, rời đi) khác 去 (đi đến một nơi)']]
  },
  '酒店': {
    collo: [['住酒店', 'ở khách sạn'], ['去酒店', 'đến khách sạn'],
            ['酒店里', 'trong khách sạn'], ['这家酒店', 'khách sạn này']],
    patterns: [['住 / 去 + 酒店', 'Ở, đến khách sạn'],
               ['酒 + 店', 'Tiệm (店) rượu (酒) — nay mang nghĩa khách sạn']]
  }
};
