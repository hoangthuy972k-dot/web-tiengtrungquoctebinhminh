// Noi dung TU MOI bai 4 HSK4 (chu de: cong viec — ke hoach, thuong, trach nhiem).
module.exports = {
  '提': {
    collo: [['别提了', 'thôi đừng nhắc nữa'], ['提工作', 'nhắc đến công việc'],
            ['提这件事', 'nhắc chuyện này'], ['提意见', 'góp ý'], ['提起', 'nhắc đến']],
    patterns: [['Sub + 提 + N', 'Ai đó nhắc đến chuyện gì'],
               ['别提了', 'Thôi đừng nhắc nữa (khẩu ngữ, ý ngán ngẩm)']]
  },
  '以为': {
    collo: [['我以为', 'tôi cứ tưởng'], ['还以为', 'còn tưởng là'],
            ['以为……没想到……', 'cứ tưởng… ai ngờ…'], ['本来以为', 'vốn cho rằng'],
            ['以为是', 'tưởng là']],
    patterns: [['Sub + 以为 + mệnh đề，其实/没想到 + mệnh đề', 'Cứ tưởng … thực ra / ai ngờ …'],
               ['以为 ≠ 认为', '以为 là nghĩ SAI; 认为 là quan điểm, không nhất thiết sai']]
  },
  '份': {
    collo: [['一份工作', 'một công việc'], ['那份材料', 'bản tài liệu đó'],
            ['这份调查', 'bản khảo sát này'], ['一份报纸', 'một tờ báo'],
            ['两份礼物', 'hai phần quà']],
    patterns: [['一 + 份 + 工作 / 材料 / 报纸', 'Lượng từ cho việc làm, tài liệu, báo'],
               ['✗ 一个工作 → ✓ 一份工作', 'Nói về việc làm thì dùng 份']]
  },
  '完全': {
    collo: [['完全不一样', 'hoàn toàn khác nhau'], ['完全明白', 'hiểu hoàn toàn'],
            ['完全适应', 'thích nghi hoàn toàn'], ['完全不是这样', 'hoàn toàn không phải vậy'],
            ['完全同意', 'hoàn toàn đồng ý']],
    patterns: [['完全 + V / Adj', 'Hoàn toàn …'],
               ['完全 + 不 + V / Adj', 'Hoàn toàn không …']]
  },
  '赚': {
    collo: [['赚钱', 'kiếm tiền'], ['赚得多', 'kiếm được nhiều'],
            ['太着急赚钱', 'quá vội kiếm tiền'], ['赚钱越来越难', 'kiếm tiền ngày càng khó'],
            ['赚了不少', 'kiếm được không ít']],
    patterns: [['Sub + 赚 + 钱', 'Ai đó kiếm tiền'],
               ['赚 + 得 + Adj', 'Kiếm được nhiều / ít thế nào']]
  },
  '调查': {
    collo: [['做调查', 'làm khảo sát'], ['那份调查', 'bản khảo sát đó'],
            ['调查结果', 'kết quả khảo sát'], ['根据调查', 'theo khảo sát'],
            ['调查完成', 'khảo sát hoàn thành']],
    patterns: [['做 / 完成 + 调查', 'Làm / hoàn thành cuộc khảo sát'],
               ['根据 + 调查，……', 'Theo khảo sát thì …']]
  },
  '原来': {
    collo: [['原来的计划', 'kế hoạch ban đầu'], ['原来是你啊', 'hóa ra là bạn'],
            ['原来最快', 'vốn là nhanh nhất'], ['原来的地方', 'chỗ cũ'],
            ['原来不知道', 'trước đây không biết']],
    patterns: [['原来的 + N', '… ban đầu, … vốn có'],
               ['原来 + mệnh đề (vỡ lẽ)', 'Hóa ra là … — vừa mới biết']]
  },
  '计划': {
    collo: [['原来的计划', 'kế hoạch ban đầu'], ['当天计划', 'kế hoạch trong ngày'],
            ['工作计划', 'kế hoạch công việc'], ['改变计划', 'thay đổi kế hoạch'],
            ['按照计划', 'theo kế hoạch']],
    patterns: [['按照 + 计划 + V', 'Làm theo kế hoạch'],
               ['Sub + 计划 + V (động từ)', 'Ai đó dự định làm gì']]
  },
  '提前': {
    collo: [['提前完成', 'hoàn thành sớm'], ['提前到', 'đến sớm'],
            ['提前一个小时', 'sớm hơn một tiếng'], ['提前准备', 'chuẩn bị trước'],
            ['提前通知', 'báo trước']],
    patterns: [['提前 + V', 'Làm gì sớm hơn dự định'],
               ['提前 + khoảng thời gian + V', 'Làm gì sớm hơn bao lâu']]
  },
  '保证': {
    collo: [['我保证', 'tôi cam đoan'], ['保证做完', 'bảo đảm làm xong'],
            ['保证质量', 'bảo đảm chất lượng'], ['保证按时', 'bảo đảm đúng hạn'],
            ['向您保证', 'cam đoan với anh']],
    patterns: [['Sub + 保证 + mệnh đề', 'Ai đó cam đoan rằng …'],
               ['向 + ai + 保证', 'Cam đoan với ai']]
  },
  '提醒': {
    collo: [['提醒自己', 'tự nhắc mình'], ['谢谢提醒', 'cảm ơn đã nhắc'],
            ['提醒他', 'nhắc anh ấy'], ['提醒一下', 'nhắc một tiếng'],
            ['提醒安排时间', 'nhắc sắp xếp thời gian']],
    patterns: [['提醒 + ai + V', 'Nhắc ai làm gì'],
               ['提醒 ≠ 告诉', '提醒 là nhắc việc người ta ĐÃ biết nhưng dễ quên']]
  },
  '乱': {
    collo: [['很乱', 'rất lộn xộn'], ['别乱', 'đừng làm loạn'],
            ['手忙脚乱', 'cuống quýt luống cuống'], ['房间很乱', 'phòng rất bừa bộn'],
            ['心里很乱', 'trong lòng rối bời']],
    patterns: [['N + 很 + 乱', 'Cái gì đó rất lộn xộn'],
               ['手忙脚乱 (thành ngữ)', 'Cuống quýt tay chân, luống cuống']]
  },
  '生意': {
    collo: [['做生意', 'làm ăn buôn bán'], ['谈生意', 'đàm phán việc kinh doanh'],
            ['生意好', 'buôn bán tốt'], ['生意谈成了', 'đàm phán xong việc kinh doanh'],
            ['小生意', 'việc buôn bán nhỏ']],
    patterns: [['做 / 谈 + 生意', 'Làm ăn / đàm phán kinh doanh'],
               ['生意 + 好 / 不好', 'Buôn bán được / ế ẩm']]
  },
  '谈': {
    collo: [['谈生意', 'bàn chuyện kinh doanh'], ['谈成了', 'bàn xong, thỏa thuận xong'],
            ['谈工作', 'bàn công việc'], ['跟他谈', 'nói chuyện với anh ấy'],
            ['谈一谈', 'trao đổi một chút']],
    patterns: [['跟 + ai + 谈 + N', 'Bàn với ai về việc gì'],
               ['谈 + 成 (bổ ngữ kết quả)', 'Bàn đến chỗ thành công']]
  },
  '并': {
    collo: [['并不容易', 'thật ra không dễ'], ['并没有', 'thật ra không hề'],
            ['并不是', 'hoàn toàn không phải'], ['并不知道', 'thật ra không biết'],
            ['并不喜欢', 'thật ra không thích']],
    patterns: [['并 + 不 / 没有 + V', 'Thật ra không … (phản bác điều người khác tưởng)'],
               ['✗ 并很容易 → ✓ 并不容易', '并 chỉ đứng trước phủ định 不 / 没']]
  },
  '积累': {
    collo: [['积累经验', 'tích lũy kinh nghiệm'], ['积累知识', 'tích lũy kiến thức'],
            ['多积累', 'tích lũy nhiều'], ['慢慢积累', 'tích lũy dần'],
            ['积累了很多', 'đã tích lũy được nhiều']],
    patterns: [['Sub + 积累 + 经验 / 知识', 'Ai đó tích lũy kinh nghiệm, kiến thức'],
               ['慢慢 / 一点一点 + 积累', 'Tích lũy dần dần']]
  },
  '经验': {
    collo: [['积累经验', 'tích lũy kinh nghiệm'], ['工作经验', 'kinh nghiệm làm việc'],
            ['有经验', 'có kinh nghiệm'], ['经验丰富', 'giàu kinh nghiệm'],
            ['交流经验', 'trao đổi kinh nghiệm']],
    patterns: [['Sub + 有 / 没有 + 经验', 'Ai đó có / không có kinh nghiệm'],
               ['经验 + 丰富', 'Kinh nghiệm phong phú — 丰富 là từ bài 2']]
  },
  '一切': {
    collo: [['一切顺利', 'mọi việc thuận lợi'], ['一切都会好的', 'rồi mọi chuyện sẽ ổn'],
            ['一切安排好了', 'mọi thứ đã sắp xếp xong'], ['一切正常', 'tất cả bình thường'],
            ['一切都变了', 'mọi thứ đã thay đổi']],
    patterns: [['一切 + 都 + V / Adj', 'Tất cả đều …'],
               ['一切 ≈ 所有的事情', 'Chỉ sự việc nói chung, không đếm được']]
  },
  '按照': {
    collo: [['按照计划', 'theo kế hoạch'], ['按照要求', 'theo yêu cầu'],
            ['按照经验', 'theo kinh nghiệm'], ['按照规定', 'theo quy định'],
            ['按照这个办法', 'theo cách này']],
    patterns: [['按照 + N + V', 'Làm theo cái gì'],
               ['✗ 按照他很努力 → ✓ 按照计划做', '按照 chỉ dẫn danh từ, không dẫn mệnh đề']]
  },
  '成功': {
    collo: [['取得成功', 'đạt được thành công'], ['成功地解决', 'giải quyết thành công'],
            ['谈成功', 'đàm phán thành công'], ['很成功', 'rất thành công'],
            ['成功的人', 'người thành công']],
    patterns: [['成功地 + V', 'Làm gì một cách thành công'],
               ['取得 + 成功 (danh từ)', 'Đạt được thành công']]
  },
  '顺利': {
    collo: [['一切顺利', 'mọi sự thuận lợi'], ['顺利地完成', 'hoàn thành thuận lợi'],
            ['很顺利', 'rất suôn sẻ'], ['工作顺利', 'công việc thuận lợi'],
            ['不太顺利', 'không được suôn sẻ lắm']],
    patterns: [['顺利地 + V', 'Làm gì một cách suôn sẻ'],
               ['N + 很 + 顺利', 'Việc gì đó rất thuận lợi']]
  },
  '感谢': {
    collo: [['非常感谢', 'vô cùng cảm ơn'], ['感谢大家', 'cảm ơn mọi người'],
            ['感谢帮助', 'cảm ơn sự giúp đỡ'], ['表示感谢', 'bày tỏ lòng cảm ơn'],
            ['感谢你的关心', 'cảm ơn sự quan tâm của bạn']],
    patterns: [['感谢 + ai + (的 + N)', 'Cảm ơn ai (vì điều gì)'],
               ['感谢 > 谢谢', '感谢 trang trọng hơn, dùng trong phát biểu']]
  },
  '消息': {
    collo: [['好消息', 'tin vui'], ['听到消息', 'nghe được tin'],
            ['告诉消息', 'báo tin'], ['坏消息', 'tin xấu'],
            ['一个消息', 'một tin']],
    patterns: [['听到 / 告诉 + 消息', 'Nghe được / báo tin'],
               ['好 / 坏 + 消息', 'Tin vui / tin xấu']]
  },
  '按时': {
    collo: [['按时完成', 'hoàn thành đúng hạn'], ['按时到', 'đến đúng giờ'],
            ['按时起飞', 'cất cánh đúng giờ'], ['按时吃药', 'uống thuốc đúng giờ'],
            ['按时上班', 'đi làm đúng giờ']],
    patterns: [['按时 + V', 'Làm gì đúng hạn, đúng giờ'],
               ['按时 ≈ 准时', '准时 nhấn đúng thời điểm, 按时 nhấn đúng quy định']]
  },
  '奖金': {
    collo: [['发奖金', 'phát tiền thưởng'], ['多发奖金', 'thưởng nhiều hơn'],
            ['三千元奖金', 'tiền thưởng ba nghìn tệ'], ['拿到奖金', 'nhận được thưởng'],
            ['工资和奖金', 'lương và thưởng']],
    patterns: [['发 / 拿到 + 奖金', 'Phát / nhận tiền thưởng'],
               ['số tiền + 奖金', 'Tiền thưởng bao nhiêu']]
  },
  '工资': {
    collo: [['工资比较低', 'lương khá thấp'], ['工资和奖金', 'lương và thưởng'],
            ['发工资', 'phát lương'], ['工资很高', 'lương rất cao'],
            ['一个月的工资', 'lương một tháng']],
    patterns: [['工资 + 高 / 低', 'Lương cao / thấp'],
               ['发 + 工资', 'Trả lương']]
  },
  '方法': {
    collo: [['好方法', 'cách hay'], ['找方法', 'tìm cách'],
            ['交流的方法', 'cách giao tiếp'], ['学习方法', 'phương pháp học'],
            ['用这个方法', 'dùng cách này']],
    patterns: [['V + 的 + 方法', 'Cách / phương pháp làm gì'],
               ['用 + 方法 + V', 'Dùng cách nào để làm gì']]
  },
  '知识': {
    collo: [['专业知识', 'kiến thức chuyên môn'], ['积累知识', 'tích lũy kiến thức'],
            ['学到知识', 'học được kiến thức'], ['知识丰富', 'kiến thức phong phú'],
            ['书上的知识', 'kiến thức trong sách']],
    patterns: [['积累 / 学到 + 知识', 'Tích lũy / học được kiến thức'],
               ['专业 + 知识', 'Kiến thức chuyên môn — 专业 là từ bài 3']]
  },
  '不得不': {
    collo: [['不得不去做', 'buộc phải làm'], ['不得不换', 'đành phải đổi'],
            ['不得不接受', 'buộc phải chấp nhận'], ['不得不走', 'đành phải đi'],
            ['不得不承认', 'buộc phải thừa nhận']],
    patterns: [['Sub + 不得不 + V', 'Ai đó buộc phải làm gì (không còn cách khác)'],
               ['不得不 ≠ 必须', '不得不 mang ý miễn cưỡng; 必须 là yêu cầu bắt buộc']]
  },
  '甚至': {
    collo: [['甚至可以', 'thậm chí có thể'], ['甚至是', 'thậm chí là'],
            ['甚至会', 'thậm chí sẽ'], ['甚至没有', 'thậm chí không có'],
            ['甚至忘了', 'thậm chí quên mất']],
    patterns: [['……，甚至 + mệnh đề', '…, thậm chí … (nêu mức cao nhất)'],
               ['不但……，甚至……', 'Không những …, thậm chí …']]
  },
  '责任': {
    collo: [['责任心', 'tinh thần trách nhiệm'], ['有责任', 'có trách nhiệm'],
            ['没有责任心', 'thiếu tinh thần trách nhiệm'], ['负责任', 'chịu trách nhiệm'],
            ['对家有责任', 'có trách nhiệm với gia đình']],
    patterns: [['对 + N + 有责任', 'Có trách nhiệm với cái gì'],
               ['有 / 没有 + 责任心', 'Có / thiếu tinh thần trách nhiệm']]
  }
};
