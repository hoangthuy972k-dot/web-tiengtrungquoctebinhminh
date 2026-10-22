// Noi dung TU MOI HSK3 bai 18 (chu de: hoi duong, dong vat, y kien va long tin).
module.exports = {
  '向': {
    collo: [['向你借钱', 'vay tiền bạn'], ['向左走', 'đi về bên trái'],
            ['向别人问路', 'hỏi đường người khác'], ['向前走', 'đi về phía trước'],
            ['向老师学习', 'học tập thầy cô']],
    patterns: [['向 + đối tượng + V', 'Hướng về ai mà làm gì: 向他借, 向我问'],
               ['向 (hướng của hành động) ≠ 往 (hướng di chuyển) — 向他笑 ✓ / 往他笑 ✗']]
  },
  '万': {
    collo: [['一万块', 'một vạn đồng'], ['两万人', 'hai vạn người'],
            ['十万', 'mười vạn'], ['花了三万', 'tiêu ba vạn'],
            ['一万多', 'hơn một vạn']],
    patterns: [['số + 万 + lượng từ', 'Bao nhiêu vạn — 一万块, 两万人'],
               ['百 → 千 → 万', 'Tiếng Trung đếm theo vạn, không theo "chục nghìn"']]
  },
  '只': {
    collo: [['一只猫', 'một con mèo'], ['两只小动物', 'hai con vật nhỏ'],
            ['一只小狗', 'một con chó nhỏ'], ['三只手表', 'ba cái đồng hồ'],
            ['那只狗', 'con chó kia']],
    patterns: [['số + 只 + động vật nhỏ', 'Lượng từ 只 cho chim, mèo, chó, gà'],
               ['只 (zhī, lượng từ) ≠ 只 (zhǐ, chỉ) — cùng chữ, khác âm khác nghĩa']]
  },
  '嘴': {
    collo: [['嘴很小', 'miệng rất nhỏ'], ['嘴像爸爸', 'miệng giống bố'],
            ['张开嘴', 'há miệng'], ['小小的嘴', 'cái miệng nho nhỏ'],
            ['嘴不舒服', 'miệng khó chịu']],
    patterns: [['bộ phận + 像 + ai', 'Bộ phận nào giống ai — 像 là từ bài 14'],
               ['嘴 (cái miệng) và 口 (miệng, ngụm — bài 17) — 嘴 thiên khẩu ngữ']]
  },
  '动物': {
    collo: [['喜欢动物', 'thích động vật'], ['动物园', 'sở thú'],
            ['别的动物', 'các động vật khác'], ['小动物', 'con vật nhỏ'],
            ['可爱的动物', 'con vật đáng yêu']],
    patterns: [['动物 + 园', 'Sở thú — vườn (园) thú (动物)'],
               ['动 + 物', 'Vật (物) biết cử động (动)']]
  },
  '段': {
    collo: [['一段时间', 'một khoảng thời gian'], ['这段话', 'đoạn lời này'],
            ['一段路', 'một đoạn đường'], ['那段日子', 'quãng ngày đó'],
            ['第一段', 'đoạn thứ nhất']],
    patterns: [['số + 段 + 时间 / 路 / 话', 'Lượng từ 段 cho khoảng thời gian, đoạn đường, đoạn văn'],
               ['一段时间 ≈ 一些日子', '段 nhấn một quãng liền mạch']]
  },
  '不但……而且……': {
    collo: [['不但……而且……', 'không những… mà còn…'], ['不但便宜而且新鲜', 'vừa rẻ vừa tươi'],
            ['不但会说而且说得好', 'không những biết nói mà còn nói hay'],
            ['不但很大', 'không những rất rộng'], ['而且有很多花', 'mà còn có nhiều hoa']],
    patterns: [['不但 A，而且 B', 'Không những A mà còn B — B mạnh hơn A'],
               ['Cùng chủ ngữ: 不但 đứng SAU chủ ngữ. Khác chủ ngữ: 不但 đứng TRƯỚC']]
  },
  '有名': {
    collo: [['很有名', 'rất nổi tiếng'], ['有名的画家', 'hoạ sĩ nổi tiếng'],
            ['在中国很有名', 'rất nổi tiếng ở Trung Quốc'], ['有名的地方', 'nơi nổi tiếng'],
            ['越来越有名', 'ngày càng nổi tiếng']],
    patterns: [['有名 + 的 + N', 'Cái gì nổi tiếng'],
               ['有 + 名', 'Có (有) tiếng tăm (名) — cùng kiểu 有意思, 有用']]
  },
  '同意': {
    collo: [['同意你的看法', 'đồng ý với ý kiến của bạn'], ['不同意', 'không đồng ý'],
            ['完全同意', 'hoàn toàn nhất trí'], ['爸爸妈妈同意', 'bố mẹ đồng ý'],
            ['同意去', 'đồng ý đi']],
    patterns: [['同意 + N / mệnh đề', 'Đồng ý điều gì'],
               ['同 + 意', 'Cùng (同) ý (意) — ghép nghĩa dễ nhớ']]
  },
  '相信': {
    collo: [['相信我', 'tin tôi'], ['不能相信', 'không thể tin'],
            ['相信他们会同意', 'tin họ sẽ đồng ý'], ['我相信', 'tôi tin rằng'],
            ['相信自己', 'tin vào bản thân']],
    patterns: [['相信 + ai / mệnh đề', 'Tin ai, tin rằng …'],
               ['相信 (tin là thật) ≠ 认为 (cho rằng, bài 16)']]
  },
  '关于': {
    collo: [['关于中国历史', 'về lịch sử Trung Quốc'], ['关于这次旅行', 'về chuyến đi này'],
            ['关于这个问题', 'về vấn đề này'], ['关于他的事', 'chuyện về anh ấy'],
            ['一本关于……的书', 'một quyển sách về…']],
    patterns: [['关于 + N + 的 + N', 'Sách, bài, tin về cái gì'],
               ['关于 đứng ĐẦU câu hoặc làm định ngữ; 对于 nhấn đối tượng tác động']]
  },
  '机会': {
    collo: [['有机会', 'có cơ hội'], ['一次机会', 'một lần cơ hội'],
            ['很少有机会', 'ít khi có cơ hội'], ['好机会', 'cơ hội tốt'],
            ['给我一次机会', 'cho tôi một cơ hội']],
    patterns: [['有 / 没有 + 机会 + V', 'Có, không có cơ hội làm gì'],
               ['机 + 会', 'Thời (机) cơ gặp được (会)']]
  },
  '国家': {
    collo: [['哪个国家', 'quốc gia nào'], ['别的国家', 'nước khác'],
            ['每个国家', 'mỗi quốc gia'], ['国家的文化', 'văn hoá của một nước'],
            ['来自这个国家', 'đến từ nước này']],
    patterns: [['从 + 哪个国家 + 来', 'Đến từ quốc gia nào'],
               ['国 + 家', 'Nước (国) và nhà (家) — nghĩa mở rộng thành quốc gia']]
  },
  '种': {
    collo: [['哪种水果', 'loại trái cây nào'], ['这种文化', 'loại văn hoá này'],
            ['两种茶', 'hai loại trà'], ['各种', 'các loại'],
            ['这种情况', 'tình huống loại này']],
    patterns: [['số / chỉ định + 种 + N', 'Lượng từ 种 — chủng loại: 这种, 哪种, 各种'],
               ['种 (zhǒng, loại) ≠ 种 (zhòng, trồng) — cùng chữ, khác âm']]
  },
  '特点': {
    collo: [['有特点', 'có nét riêng'], ['自己的特点', 'đặc điểm của mình'],
            ['这里的特点', 'đặc điểm nơi này'], ['文化特点', 'đặc điểm văn hoá'],
            ['特点是', 'đặc điểm là']],
    patterns: [['N + 的 + 特点', 'Đặc điểm của cái gì'],
               ['特 + 点', 'Điểm (点) riêng biệt (特)']]
  },
  '奇怪': {
    collo: [['觉得奇怪', 'thấy kỳ lạ'], ['很奇怪', 'rất lạ'],
            ['奇怪的声音', 'tiếng động lạ'], ['真奇怪', 'lạ thật'],
            ['奇怪地问', 'ngạc nhiên hỏi']],
    patterns: [['觉得 + 奇怪', 'Thấy lạ'],
               ['奇怪 + 地 + V', 'Làm gì một cách ngạc nhiên — 地 là từ cùng bài']]
  },
  '地': {
    collo: [['认真地学习', 'học một cách nghiêm túc'], ['慢慢地走', 'đi chầm chậm'],
            ['奇怪地问', 'ngạc nhiên hỏi'], ['高兴地说', 'vui vẻ nói'],
            ['努力地做', 'nỗ lực làm']],
    patterns: [['Adj + 地 + V', 'Trạng ngữ cách thức: 认真地学习, 高兴地说'],
               ['的 (trước danh từ) · 地 (trước động từ) · 得 (sau động từ)']]
  }
};
