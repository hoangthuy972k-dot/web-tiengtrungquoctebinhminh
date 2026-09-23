// Noi dung TU MOI HSK3 bai 6 (chu de: tim do, nho giup, thoi quen sinh hoat).
module.exports = {
  '眼镜': {
    collo: [['一副眼镜', 'một cặp kính'], ['戴眼镜', 'đeo kính'],
            ['找眼镜', 'tìm kính'], ['戴眼镜的人', 'người đeo kính'],
            ['忘了戴眼镜', 'quên đeo kính']],
    patterns: [['một + 副 + 眼镜', 'Lượng từ 副 cho vật đi thành bộ'],
               ['✗ 穿眼镜 → ✓ 戴眼镜', '穿 cho quần áo giày, 戴 cho kính mũ đồng hồ']]
  },
  '突然': {
    collo: [['突然生病', 'bỗng nhiên bị ốm'], ['突然找不到', 'bỗng dưng không tìm thấy'],
            ['突然不下了', 'bỗng ngừng rơi'], ['突然想起来', 'chợt nhớ ra'],
            ['天突然黑了', 'trời bỗng tối']],
    patterns: [['Sub + 突然 + V', 'Ai đó bỗng nhiên …'],
               ['突然 (bất ngờ) khác 马上 (ngay lập tức)']]
  },
  '离开': {
    collo: [['离开家', 'rời nhà'], ['离开学校', 'rời trường'],
            ['离不开', 'không rời được'], ['离开这儿', 'rời khỏi đây'],
            ['已经离开了', 'đã đi rồi']],
    patterns: [['离开 + nơi chốn', 'Rời khỏi đâu'],
               ['离开 + 不了 / 离不开', 'Không rời được — bổ ngữ khả năng']]
  },
  '清楚': {
    collo: [['看得清楚', 'nhìn thấy rõ'], ['看不清楚', 'nhìn không rõ'],
            ['说清楚', 'nói cho rõ'], ['听清楚', 'nghe rõ'],
            ['很清楚', 'rất rõ ràng']],
    patterns: [['V + 得 / 不 + 清楚', 'Nhìn, nghe rõ / không rõ — bổ ngữ khả năng'],
               ['V + 清楚', 'Làm gì cho rõ — 清楚 là bổ ngữ kết quả']]
  },
  '刚才': {
    collo: [['刚才还在', 'vừa nãy còn ở đây'], ['刚才说什么', 'vừa nãy nói gì'],
            ['刚才有人找你', 'vừa nãy có người tìm bạn'], ['刚才放在桌子上', 'vừa nãy để trên bàn'],
            ['刚才的事', 'chuyện vừa nãy']],
    patterns: [['刚才 + Sub + V', 'Vừa nãy ai đó …'],
               ['刚才 (danh từ chỉ lúc nãy) ≠ 刚 (phó từ, vừa mới)']]
  },
  '帮忙': {
    collo: [['帮个忙', 'giúp một tay'], ['请你帮忙', 'nhờ bạn giúp'],
            ['过来帮忙', 'qua giúp'], ['帮了我一个忙', 'đã giúp tôi một việc'],
            ['需要帮忙吗', 'cần giúp không']],
    patterns: [['帮 + 个 + 忙', '帮忙 là từ ly hợp: 帮个忙 ✓ / 帮忙我 ✗'],
               ['帮 + ai + 的忙', 'Giúp ai — 帮我的忙']]
  },
  '特别': {
    collo: [['特别难', 'đặc biệt khó'], ['特别高兴', 'vô cùng vui'],
            ['特别喜欢', 'rất thích'], ['特别的礼物', 'món quà đặc biệt'],
            ['没什么特别', 'chẳng có gì đặc biệt']],
    patterns: [['特别 + Adj / V (phó từ)', 'Rất, vô cùng …'],
               ['特别的 + N (tính từ)', '… đặc biệt, riêng biệt']]
  },
  '讲': {
    collo: [['讲明白', 'giảng cho rõ'], ['讲故事', 'kể chuyện'],
            ['给你讲讲', 'giảng cho bạn nghe'], ['老师讲课', 'thầy giảng bài'],
            ['讲不明白', 'giảng không rõ']],
    patterns: [['讲 + 给 + ai + 听', 'Kể, giảng cho ai nghe'],
               ['讲 ≈ 说', '讲 nhấn việc trình bày có nội dung: 讲课, 讲故事']]
  },
  '明白': {
    collo: [['听明白', 'nghe hiểu'], ['我明白了', 'tôi hiểu rồi'],
            ['讲不明白', 'giảng không rõ'], ['不明白', 'không hiểu'],
            ['明白他的意思', 'hiểu ý anh ấy']],
    patterns: [['V + 明白', 'Làm gì đến chỗ hiểu — 明白 là bổ ngữ kết quả'],
               ['明白 ≈ 懂', '明白 nhấn việc vỡ lẽ ra; 懂 nhấn việc nắm được']]
  },
  '锻炼': {
    collo: [['锻炼身体', 'rèn luyện sức khoẻ'], ['去锻炼', 'đi tập'],
            ['每天锻炼', 'tập mỗi ngày'], ['锻炼完了', 'tập xong rồi'],
            ['爱锻炼', 'thích tập thể dục']],
    patterns: [['锻炼 + 身体', 'Rèn luyện sức khoẻ — kết hợp cố định'],
               ['锻 + 炼', 'Rèn (锻) luyện (炼) — vốn là nghề rèn kim loại']]
  },
  '音乐': {
    collo: [['听音乐', 'nghe nhạc'], ['音乐会', 'buổi hoà nhạc'],
            ['喜欢音乐', 'thích âm nhạc'], ['音乐很好听', 'nhạc rất hay'],
            ['一边听音乐一边看书', 'vừa nghe nhạc vừa đọc sách']],
    patterns: [['听 + 音乐', 'Nghe nhạc'],
               ['音乐 + 会', 'Buổi (会) hoà nhạc (音乐)']]
  },
  '公园': {
    collo: [['去公园', 'đi công viên'], ['公园里', 'trong công viên'],
            ['在公园走走', 'đi dạo trong công viên'], ['公园很大', 'công viên rất rộng'],
            ['家附近的公园', 'công viên gần nhà']],
    patterns: [['在 + 公园 + 里', 'Trong công viên'],
               ['公 + 园', 'Vườn (园) công cộng (公)']]
  },
  '聊天(儿)': {
    collo: [['跟朋友聊天儿', 'tán gẫu với bạn'], ['聊聊天儿', 'trò chuyện chút'],
            ['正在聊天儿', 'đang nói chuyện'], ['聊了半天天儿', 'nói chuyện cả buổi'],
            ['喜欢聊天儿', 'thích trò chuyện']],
    patterns: [['跟 + ai + 聊天儿', 'Trò chuyện với ai'],
               ['聊 + 了 + thời lượng + 天儿', '聊天儿 là từ ly hợp']]
  },
  '睡着': {
    collo: [['睡不着', 'không ngủ được'], ['睡着了', 'ngủ thiếp đi rồi'],
            ['睡得着', 'ngủ được'], ['很快就睡着了', 'nhanh chóng ngủ thiếp'],
            ['昨晚睡不着', 'tối qua mất ngủ']],
    patterns: [['睡 + 得 / 不 + 着', 'Ngủ được / không ngủ được — bổ ngữ khả năng'],
               ['睡着 (zháo, ngủ thiếp đi) ≠ 睡觉 (đi ngủ)']]
  },
  '更': {
    collo: [['更好', 'tốt hơn'], ['更漂亮', 'đẹp hơn'],
            ['更喜欢', 'thích hơn'], ['更重要', 'quan trọng hơn'],
            ['比以前更好', 'tốt hơn trước']],
    patterns: [['更 + Adj', 'Càng, hơn — dùng khi so với cái đã nói'],
               ['更 (hơn cái đã có) ≠ 最 (nhất)']]
  }
};
