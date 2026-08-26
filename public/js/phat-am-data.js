// ══════════════════════════════════════════
// DATA — Phát âm (Pinyin fundamentals: initials, finals, tones)
// Standard Hanyu Pinyin inventory (21 initials, 34 finals, 4 tones + neutral)
// ══════════════════════════════════════════

const INITIALS = [
  { group: 'Âm hai môi · 双唇音', items: [
    { c: 'b', tip: 'Hai môi mím lại rồi bật hơi nhẹ ra, không rung dây thanh.', example: '爸爸 (bàba) — bố' },
    { c: 'p', tip: 'Giống "b" nhưng bật hơi MẠNH hơn.', example: '苹果 (píngguǒ) — táo' },
    { c: 'm', tip: 'Hai môi mím lại, hơi thoát ra qua mũi.', example: '妈妈 (māma) — mẹ' },
  ]},
  { group: 'Âm môi răng · 唇齿音', items: [
    { c: 'f', tip: 'Răng trên chạm nhẹ môi dưới, hơi ma sát thoát ra.', example: '饭 (fàn) — cơm' },
  ]},
  { group: 'Âm đầu lưỡi · 舌尖音', items: [
    { c: 'd', tip: 'Đầu lưỡi chạm lợi trên rồi bật hơi nhẹ ra.', example: '大 (dà) — to' },
    { c: 't', tip: 'Giống "d" nhưng bật hơi MẠNH hơn.', example: '他 (tā) — anh ấy' },
    { c: 'n', tip: 'Đầu lưỡi chạm lợi trên, hơi thoát qua mũi.', example: '你 (nǐ) — bạn' },
    { c: 'l', tip: 'Đầu lưỡi chạm lợi trên, hơi thoát ra hai bên lưỡi.', example: '老师 (lǎoshī) — giáo viên' },
  ]},
  { group: 'Âm cuống lưỡi · 舌根音', items: [
    { c: 'g', tip: 'Cuống lưỡi chạm ngạc mềm rồi bật hơi nhẹ.', example: '哥哥 (gēge) — anh trai' },
    { c: 'k', tip: 'Giống "g" nhưng bật hơi MẠNH hơn.', example: '看 (kàn) — nhìn' },
    { c: 'h', tip: 'Cuống lưỡi gần ngạc mềm, hơi ma sát thoát ra.', example: '好 (hǎo) — tốt' },
  ]},
  { group: 'Âm mặt lưỡi · 舌面音', items: [
    { c: 'j', tip: 'Mặt lưỡi chạm ngạc cứng, bật hơi nhẹ, môi bè.', example: '叫 (jiào) — gọi, tên là' },
    { c: 'q', tip: 'Giống "j" nhưng bật hơi MẠNH hơn.', example: '七 (qī) — bảy' },
    { c: 'x', tip: 'Mặt lưỡi gần ngạc cứng, hơi ma sát nhẹ nhàng.', example: '谢谢 (xièxie) — cảm ơn' },
  ]},
  { group: 'Âm uốn lưỡi · 翘舌音', items: [
    { c: 'zh', tip: 'Đầu lưỡi cong lên chạm ngạc cứng, bật hơi nhẹ.', example: '中国 (Zhōngguó) — Trung Quốc' },
    { c: 'ch', tip: 'Giống "zh" nhưng bật hơi MẠNH hơn.', example: '吃 (chī) — ăn' },
    { c: 'sh', tip: 'Đầu lưỡi cong lên gần ngạc cứng, hơi ma sát.', example: '谁 (shéi) — ai' },
    { c: 'r', tip: 'Đầu lưỡi cong lên, rung nhẹ, có tiếng.', example: '认识 (rènshi) — quen biết' },
  ]},
  { group: 'Âm đầu lưỡi trước · 舌尖前音', items: [
    { c: 'z', tip: 'Đầu lưỡi chạm mặt sau răng trên, bật hơi nhẹ.', example: '再见 (zàijiàn) — tạm biệt' },
    { c: 'c', tip: 'Giống "z" nhưng bật hơi MẠNH hơn.', example: '词 (cí) — từ ngữ' },
    { c: 's', tip: 'Đầu lưỡi gần mặt sau răng trên, hơi ma sát.', example: '四 (sì) — số bốn' },
  ]},
];

const FINALS = [
  { group: 'Nguyên âm đơn · 单韵母', items: [
    { c: 'a', tip: 'Miệng mở to, lưỡi hạ thấp — giống "a" tiếng Việt.', example: '妈 (mā) — mẹ' },
    { c: 'o', tip: 'Môi tròn, giống "ô" tiếng Việt.', example: '我 (wǒ) — tôi' },
    { c: 'e', tip: 'Miệng hé vừa, lưỡi rút về sau — gần "ơ" tiếng Việt.', example: '呢 (ne) — trợ từ' },
    { c: 'i', tip: 'Miệng hẹp, môi bè — giống "i" tiếng Việt.', example: '你 (nǐ) — bạn' },
    { c: 'u', tip: 'Môi tròn nhỏ, đẩy ra trước — giống "u" tiếng Việt.', example: '不 (bù) — không' },
    { c: 'ü', tip: 'Môi tròn như "u" nhưng lưỡi ở vị trí "i" — âm khó, tiếng Việt không có, cần luyện riêng.', example: '去 (qù) — đi' },
  ]},
  { group: 'Nguyên âm kép · 复韵母', items: [
    { c: 'ai', tip: 'Đọc "a" rồi lướt nhanh sang "i".', example: '爱 (ài) — yêu' },
    { c: 'ei', tip: 'Đọc "ê" rồi lướt nhanh sang "i".', example: '黑 (hēi) — đen' },
    { c: 'ao', tip: 'Đọc "a" rồi lướt nhanh sang "o/u".', example: '好 (hǎo) — tốt' },
    { c: 'ou', tip: 'Đọc "ô" rồi lướt nhanh sang "u".', example: '狗 (gǒu) — con chó' },
  ]},
  { group: 'Vận mẫu mũi trước · 前鼻韵母', items: [
    { c: 'an', tip: 'Đọc "a" rồi khép lưỡi lên để có âm mũi "n" ở cuối.', example: '看 (kàn) — nhìn' },
    { c: 'en', tip: 'Đọc "ơ" rồi khép lưỡi lên để có âm mũi "n" ở cuối.', example: '很 (hěn) — rất' },
    { c: 'in', tip: 'Đọc "i" rồi thêm âm mũi "n" nhẹ ở cuối.', example: '您 (nín) — ngài' },
    { c: 'uen (un)', tip: 'Đọc "u" rồi lướt sang "ơn" nhẹ — viết là "un" sau phụ âm đầu.', example: '春 (chūn) — mùa xuân' },
    { c: 'üan', tip: 'Đọc "ü" rồi thêm âm mũi "an" — chỉ đi sau j, q, x, y.', example: '元 (yuán) — đồng (tiền)' },
  ]},
  { group: 'Vận mẫu mũi sau · 后鼻韵母', items: [
    { c: 'ang', tip: 'Đọc "a" rồi khép lưỡi về sau để có âm mũi "ng".', example: '忙 (máng) — bận' },
    { c: 'eng', tip: 'Đọc "ơ" rồi khép lưỡi về sau để có âm mũi "ng".', example: '冷 (lěng) — lạnh' },
    { c: 'ing', tip: 'Đọc "i" rồi thêm âm mũi "ng" ở cuối.', example: '姓 (xìng) — họ (tên)' },
    { c: 'ong', tip: 'Đọc "ô" rồi thêm âm mũi "ng" ở cuối.', example: '红 (hóng) — màu đỏ' },
  ]},
  { group: 'Vận mẫu có âm đệm i · 齐齿呼', items: [
    { c: 'ia', tip: 'Lướt nhanh từ "i" sang "a".', example: '家 (jiā) — nhà' },
    { c: 'ie', tip: 'Lướt nhanh từ "i" sang "ê".', example: '姐姐 (jiějie) — chị gái' },
    { c: 'iao', tip: 'Lướt nhanh từ "i" qua "a" rồi sang "o".', example: '小 (xiǎo) — nhỏ' },
    { c: 'iou (iu)', tip: 'Lướt nhanh từ "i" sang "ơu" — viết là "iu" sau phụ âm đầu.', example: '六 (liù) — số sáu' },
    { c: 'ian', tip: 'Lướt từ "i" sang "en" — đọc gần như "iên".', example: '天 (tiān) — trời' },
    { c: 'iang', tip: 'Lướt từ "i" sang "ang".', example: '想 (xiǎng) — muốn, nghĩ' },
    { c: 'iong', tip: 'Lướt từ "i" sang "ong" — môi tròn dần.', example: '熊 (xióng) — con gấu' },
  ]},
  { group: 'Vận mẫu có âm đệm u · 合口呼', items: [
    { c: 'ua', tip: 'Lướt nhanh từ "u" sang "a".', example: '花 (huā) — bông hoa' },
    { c: 'uo', tip: 'Lướt nhanh từ "u" sang "ô".', example: '我 (wǒ) — tôi' },
    { c: 'uai', tip: 'Lướt từ "u" qua "a" rồi sang "i".', example: '快 (kuài) — nhanh' },
    { c: 'uei (ui)', tip: 'Lướt từ "u" sang "ây" — viết là "ui" sau phụ âm đầu.', example: '水 (shuǐ) — nước' },
    { c: 'uan', tip: 'Lướt từ "u" sang "an".', example: '碗 (wǎn) — cái bát' },
    { c: 'uang', tip: 'Lướt từ "u" sang "ang".', example: '床 (chuáng) — cái giường' },
    { c: 'ueng', tip: 'Lướt từ "u" sang "eng" — chỉ đứng một mình làm âm tiết (weng).', example: '翁 (wēng) — ông lão' },
  ]},
  { group: 'Vận mẫu có âm đệm ü · 撮口呼', items: [
    { c: 'üe', tip: 'Lướt nhanh từ "ü" sang "ê" — chỉ đi sau j, q, x, y, n, l.', example: '月 (yuè) — tháng, mặt trăng' },
    { c: 'ün', tip: 'Đọc "ü" rồi thêm âm mũi "n" — chỉ đi sau j, q, x, y.', example: '群 (qún) — đám, nhóm' },
  ]},
  { group: 'Vận mẫu đặc biệt · 特殊韵母', items: [
    { c: 'er', tip: 'Đọc "ơ" rồi cong lưỡi lên — âm tiết đặc biệt, đứng riêng một mình.', example: '儿子 (érzi) — con trai' },
  ]},
];

// 4 thanh điệu + thanh nhẹ, minh hoạ bằng âm tiết "ma" (ví dụ kinh điển phổ biến nhất khi dạy thanh điệu)
const TONES = [
  { mark: 'ˉ', syllable: 'mā', number: 1, name: 'Thanh 1 — ngang', tip: 'Đọc cao và đều, giữ nguyên độ cao từ đầu đến cuối, không lên không xuống.', example: '妈 (mā) — mẹ' },
  { mark: 'ˊ', syllable: 'má', number: 2, name: 'Thanh 2 — sắc (đi lên)', tip: 'Đọc từ độ cao trung bình rồi đi LÊN, giống giọng hỏi lại "Hả?" trong tiếng Việt.', example: '麻 (má) — vừng, gai dầu' },
  { mark: 'ˇ', syllable: 'mǎ', number: 3, name: 'Thanh 3 — hỏi (xuống rồi lên)', tip: 'Đọc từ độ cao trung bình XUỐNG thấp rồi nhích LÊN lại — giống dấu hỏi kéo dài.', example: '马 (mǎ) — con ngựa' },
  { mark: 'ˋ', syllable: 'mà', number: 4, name: 'Thanh 4 — huyền (đi xuống mạnh)', tip: 'Đọc từ độ cao nhất rơi THẲNG XUỐNG thấp nhất, dứt khoát, giống ra lệnh.', example: '骂 (mà) — mắng' },
  { mark: '', syllable: 'ma', number: 0, name: 'Thanh nhẹ', tip: 'Đọc nhẹ, ngắn, không nhấn — thường là trợ từ cuối câu.', example: '吗 (ma) — trợ từ hỏi' },
];
