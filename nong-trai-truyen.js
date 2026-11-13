// NOI DUNG cot truyen nong trai (thay co sua chu o day; may chu doc lai khi khoi dong lai).
// Luat cua co giao: loi ke + thoai la TIENG VIET. Tieng Trung chi xuat hien o cac "khoanh khac tieng Trung"
// ({ zh: kieu }) — cau va dap an do may chu LAY NGUYEN VAN tu bai em da hoc / duoc giao (hoi thoai, cau hoi cua bai),
// KHONG viet tieng Trung tu do vao day. Vi vay loi dan (t) phai viet sao cho cau nao cung hop
// ("Minh Minh nói gì đó, em nghe thử nhé…").
//
// Mot canh:  ['ma nhan vat', 'bieu cam', 'loi thoai']   bieu cam: '' (thuong) | 'vui' | 'ngac'
//            { zh: 'nghia' | 'dap' | 'xep', ai: 'ma nhan vat', t: 'loi dan' }
//               nghia = nghe/doc 1 cau roi chon nghia · dap = chon cau dap · xep = xep tu thanh cau
// Viec:      { ev: [su kien], n, mo }            dem su kien: thu (o ruong), nhat (san pham vat nuoi), choan, don, ban,
//                                                 cho (ban o Cho nong san), xg (chay 1 me nha may), pl (qua 1 tram ban do),
//                                                 tim (tha tim nha ban), quay (vong quay)
//            { giao: { ma hang: so }, mo }        mang hang trong kho cho nhan vat
//            { hoc: so sao hoc hom nay, mo }
//            them lv + thay: nong trai chua du cap lv thi dung viec "thay"
// Qua:       { xu, hat (hat giong), hatquy, tt: ma do trang tri doc quyen (khai bao o TT ben duoi) }
const NV = {
  ke: { ten: '', vn: 'Người kể chuyện' },
  lan: { ten: 'Bà Lan', zh: '兰奶奶', py: 'Lán nǎinai', vai: 'Bà chủ sạp ở chợ làng', tinh: 'Nói nhiều, thương trẻ con, mặc cả giỏi nhất làng.' },
  tu: { ten: 'Chú Tư', zh: '四叔', py: 'Sì shū', vai: 'Lái buôn', tinh: 'Buôn khắp vùng, hay khoe, tính tiền hay nhầm.' },
  mai: { ten: 'Cô Mai', zh: '梅老师', py: 'Méi lǎoshī', vai: 'Cô giáo làng', tinh: 'Dịu dàng nhưng nghiêm chuyện bài vở.' },
  minh: { ten: 'Minh Minh', zh: '明明', py: 'Míngming', vai: 'Bạn hàng xóm mới từ Trung Quốc sang', tinh: 'Nói chủ yếu tiếng Trung, rất mê gà.' },
  bach: { ten: 'Ông Bách', zh: '柏爷爷', py: 'Bǎi yéye', vai: 'Trưởng làng', tinh: 'Chậm rãi, hay kể chuyện xưa, hay quên.' },
};

// Do trang tri doc quyen cua tung chuong (hinh: public/images/farm/<ma>.svg — tools/ve-hinh-kinh-te.js)
const TT = {
  'tr-fengling': { zh: '风铃', py: 'fēnglíng', vn: 'Chuông gió hàng xóm', lv: 1, doc: 1, dep: 12 },
  'tr-zhulan': { zh: '竹篮', py: 'zhúlán', vn: 'Giỏ tre chợ phiên', lv: 1, doc: 1, dep: 12 },
  'tr-heiban': { zh: '黑板', py: 'hēibǎn', vn: 'Bảng đen lớp làng', lv: 1, doc: 1, dep: 15 },
  'tr-suanpan': { zh: '算盘', py: 'suànpán', vn: 'Bàn tính của chú Tư', lv: 1, doc: 1, dep: 15 },
  'tr-huoguo': { zh: '火锅', py: 'huǒguō', vn: 'Bàn lẩu đoàn viên', lv: 1, doc: 1, dep: 18 },
  'tr-yusan': { zh: '雨伞', py: 'yǔsǎn', vn: 'Chiếc ô đỏ', lv: 1, doc: 1, dep: 18 },
  'tr-zhenglong': { zh: '蒸笼', py: 'zhēnglóng', vn: 'Xửng hấp bánh', lv: 1, doc: 1, dep: 20 },
  'tr-caideng': { zh: '彩灯门', py: 'cǎidēng mén', vn: 'Cổng đèn hội làng', lv: 1, doc: 1, dep: 30 },
  'tr-heying': { zh: '合影', py: 'héyǐng', vn: 'Ảnh kỷ niệm cả làng', lv: 1, doc: 1, dep: 40 },
};

const MUA = {
  k: 'mua1', ten: 'Mùa 1 · Làng Tre Xanh', zh: '青竹村', py: 'Qīngzhú cūn',
  ky: 'tr-heying', // ky vat cuoi mua (len ke cup + do trang tri)
  chuong: [
    { ten: 'Người hàng xóm mới', tom: 'Căn nhà cạnh nông trại có người dọn đến.',
      mo: [
        ['ke', '', 'Sáng nay làng Tre Xanh xôn xao: căn nhà trống cạnh nông trại của em có người dọn đến!'],
        ['lan', 'vui', 'Ái chà, cháu chủ trại đây rồi! Nhà bên có cậu bé mới từ Trung Quốc sang, tên Minh Minh. Nó chưa nói được tiếng Việt đâu.'],
        { zh: 'nghia', ai: 'minh', t: 'Minh Minh rụt rè bước tới, nói một câu tiếng Trung. Em nghe thử xem bạn nói gì nhé…' },
        ['lan', '', 'Giỏi! Hiểu được nhau là thành hàng xóm rồi. Bà phải ra chợ đây — hai đứa làm quen đi nhé.'],
        { zh: 'dap', ai: 'minh', t: 'Minh Minh lại nói thêm một câu. Em đáp lại bạn thế nào?' },
        ['ke', '', 'Minh Minh cười toe. Hình như bạn ấy rất thích mấy ô ruộng của em.'],
      ],
      viec: [
        { ev: ['thu'], n: 2, mo: 'Thu hoạch 2 ô ruộng cho Minh Minh xem' },
        { giao: { lua: 2 }, ai: 'minh', mo: 'Tặng Minh Minh 2 lúa làm quà chào hàng xóm' },
      ],
      ket: [
        ['minh', 'vui', '(Minh Minh ôm bó lúa, cúi đầu cảm ơn rối rít.)'],
        { zh: 'nghia', ai: 'minh', t: 'Bạn ấy nói một câu nữa trước khi chạy về nhà…' },
        ['lan', 'vui', 'Thấy chưa: biết thêm một câu tiếng Trung là thêm một người bạn. Bà tặng cháu cái chuông gió, treo cho vui cửa vui nhà!'],
      ],
      qua: { xu: 20, hat: 3, tt: 'tr-fengling' } },

    { ten: 'Phiên chợ của bà Lan', tom: 'Mai là phiên chợ mà sạp bà Lan hết trứng.',
      mo: [
        ['lan', 'ngac', 'Chết thật! Mai là phiên chợ mà sạp bà hết sạch trứng. Gà nhà bà dạo này… đình công.'],
        ['tu', 'vui', 'Bà Lan cứ yên tâm, có Tư đây! Tư buôn khắp vùng, cái gì cũng có… trừ trứng.'],
        ['lan', '', 'Thế thì chú có cũng như không. Cháu ơi, gà nhà cháu còn đẻ đều không?'],
        { zh: 'nghia', ai: 'minh', t: 'Minh Minh đi ngang qua, chỉ vào chuồng gà và nói gì đó…' },
        ['tu', 'ngac', 'Thằng bé nói gì thế? Chú nghe như “giảm giá”… Không phải à? May mà có cháu dịch giúp.'],
      ],
      viec: [
        { ev: ['nhat'], n: 2, mo: 'Nhặt 2 sản phẩm của vật nuôi' },
        { giao: { trung: 2 }, ai: 'lan', mo: 'Mang 2 quả trứng cho bà Lan' },
      ],
      ket: [
        ['lan', 'vui', 'Trứng tươi quá! Phiên chợ mai bà bán đắt như tôm tươi cho xem.'],
        { zh: 'xep', ai: 'tu', t: 'Chú Tư muốn học một câu tiếng Trung để chào khách. Chú xếp mãi vẫn sai — em xếp lại giúp chú nhé.' },
        ['tu', 'vui', 'Hay! Mai chú nói câu này cả phiên chợ. Khách mà không hiểu thì… chú nói to hơn.'],
        ['lan', '', 'Cầm lấy cái giỏ tre này, bà tự đan đấy. Đựng trứng thì khỏi chê!'],
      ],
      qua: { xu: 25, tt: 'tr-zhulan' } },

    { ten: 'Lớp học dưới gốc đa', tom: 'Cô Mai mở lớp tiếng Trung cho cả làng.',
      mo: [
        ['mai', 'vui', 'Chào em! Cô là Mai, cô giáo của làng. Tối nay cô mở lớp tiếng Trung dưới gốc đa — cả làng đòi học để nói chuyện với Minh Minh đấy.'],
        ['bach', '', 'Ông cũng đi học. Tám mươi tuổi rồi, chữ nào ông cũng… quên rất nhanh.'],
        { zh: 'nghia', ai: 'mai', t: 'Cô Mai viết một câu lên bảng và hỏi cả lớp. Em giơ tay nhé!' },
        { zh: 'dap', ai: 'minh', t: 'Minh Minh làm trợ giảng, quay sang hỏi em một câu…' },
        ['mai', '', 'Tốt lắm. Nhưng học thì phải đều: hôm nay em học bài kiếm sao, rồi ghé Bản đồ phiêu lưu luyện một trạm nhé.'],
      ],
      viec: [
        { hoc: 10, mo: 'Học bài được 10 sao trong hôm nay' },
        { ev: ['pl'], n: 1, mo: 'Qua 1 trạm trên Bản đồ phiêu lưu' },
      ],
      ket: [
        ['bach', 'vui', 'Hôm nay ông nhớ được hẳn hai chữ! Mai chắc còn một.'],
        { zh: 'xep', ai: 'mai', t: 'Trước khi tan lớp, cô Mai cho cả lớp xếp một câu. Em làm mẫu nhé.' },
        ['mai', 'vui', 'Em học chăm thế này, cô tặng tấm bảng đen nhỏ — treo ở nông trại mà ôn bài.'],
      ],
      qua: { xu: 30, hat: 3, tt: 'tr-heiban' } },

    { ten: 'Chú Tư tính nhầm', tom: 'Đếm tiền ba lần ra ba số khác nhau.',
      mo: [
        ['tu', 'ngac', 'Nguy rồi nguy rồi! Chú bán một xe hàng mà đếm tiền ba lần ra ba số khác nhau!'],
        ['lan', 'vui', 'Chú Tư buôn giỏi nhất vùng — giỏi nhất khoản tính nhầm.'],
        ['tu', '', 'Bà đừng trêu. Cháu ơi, cháu buôn bán có sổ sách đàng hoàng, giúp chú một tay.'],
        { zh: 'nghia', ai: 'minh', t: 'Minh Minh nhìn đống tiền, lắc đầu và nói một câu…' },
        ['bach', '', 'Ngày xưa ông đi chợ chỉ mang ba quả trứng đổi một con dao. Chẳng nhầm bao giờ… vì có biết đếm đâu.'],
      ],
      viec: [
        { ev: ['don'], n: 1, mo: 'Giao 1 đơn hàng hằng ngày' },
        { ev: ['cho'], n: 1, mo: 'Bán 1 lần ở Chợ nông sản', lv: 3, thay: { ev: ['ban'], n: 1, mo: 'Bán 1 lần cho cửa hàng (trong Kho)' } },
      ],
      ket: [
        { zh: 'dap', ai: 'tu', t: 'Chú Tư tập nói chuyện với khách bằng tiếng Trung. Chú nói, em trả lời hộ khách nhé.' },
        ['tu', 'vui', 'Tính lại rồi: không thiếu đồng nào! Hoá ra lúc nãy chú đếm cả… cúc áo.'],
        ['tu', '', 'Cháu giữ cái bàn tính này. Chú dùng toàn ra số lạ, cháu dùng chắc hợp hơn.'],
      ],
      qua: { xu: 40, tt: 'tr-suanpan' } },

    { ten: 'Bữa cơm mời cả làng', tom: 'Nhà Minh Minh mời cả làng ăn lẩu.',
      mo: [
        ['minh', 'vui', '(Minh Minh chạy sang, tay cầm một tấm thiệp vẽ nồi lẩu to đùng.)'],
        { zh: 'nghia', ai: 'minh', t: 'Bạn ấy đọc to một câu trên tấm thiệp. Em nghe xem bạn nói gì…' },
        ['lan', '', 'Nhà Minh Minh mời cả làng ăn cơm! Nhưng bếp nhà mới còn thiếu đủ thứ.'],
        ['mai', '', 'Mỗi nhà góp một ít nhé. Em góp cà rốt với trứng được không?'],
        { zh: 'dap', ai: 'minh', t: 'Minh Minh hỏi em một câu trước khi về chuẩn bị…' },
      ],
      viec: [
        { giao: { carot: 3, trung: 2 }, ai: 'minh', mo: 'Góp 3 cà rốt và 2 trứng cho bữa cơm' },
        { ev: ['choan'], n: 1, mo: 'Cho vật nuôi ăn 1 lần' },
      ],
      ket: [
        ['bach', 'vui', 'Lẩu ngon quá! Ông ăn ba bát, quên luôn cả đau lưng.'],
        { zh: 'xep', ai: 'minh', t: 'Cuối bữa, Minh Minh muốn nói một câu với cả làng. Em giúp bạn xếp lại cho đúng nhé.' },
        ['lan', 'vui', 'Nhà Minh Minh gửi cháu bộ bàn lẩu nhỏ này làm kỷ niệm đấy.'],
      ],
      qua: { xu: 40, hat: 3, tt: 'tr-huoguo' } },

    { ten: 'Cơn mưa lớn', tom: 'Mây đen kéo về, cả làng chạy mưa.',
      mo: [
        ['bach', '', 'Mây đen kéo về rồi. Ông sống tám mươi năm, nhìn mây là biết: mưa to… hoặc không mưa.'],
        ['mai', 'ngac', 'Mưa thật kìa! Lúa ngoài ruộng mà không gặt kịp là ngập hết.'],
        { zh: 'nghia', ai: 'minh', t: 'Minh Minh chạy tới, vừa thở vừa nói…' },
        ['lan', '', 'Mỗi người một tay! Cháu gặt ruộng nhà mình trước, rồi xem các nhà khác có cần giúp không.'],
      ],
      viec: [
        { ev: ['thu'], n: 4, mo: 'Thu hoạch 4 ô ruộng trước cơn mưa' },
        { ev: ['tim', 'quay'], n: 1, mo: 'Sang thả tim cho nông trại 1 bạn (hoặc quay Vòng quay may mắn 1 lượt)' },
      ],
      ket: [
        { zh: 'dap', ai: 'bach', t: 'Tạnh mưa, ông Bách thử nói với em một câu tiếng Trung vừa học ở lớp cô Mai…' },
        ['bach', 'vui', 'Đấy, ông cũng nói được rồi nhé! Dù ông chưa hiểu cháu trả lời gì.'],
        ['minh', 'vui', '(Minh Minh che chung ô với em suốt đường về, rồi dúi luôn chiếc ô đỏ vào tay em.)'],
      ],
      qua: { xu: 45, tt: 'tr-yusan' } },

    { ten: 'Xưởng bánh của làng', tom: 'Sắp hội làng — phải có thật nhiều bánh.',
      mo: [
        ['lan', 'vui', 'Sắp đến hội làng rồi! Năm nay phải có bánh — thật nhiều bánh.'],
        ['tu', '', 'Chú nhận chở bánh đi bán. Chú hứa lần này đếm đúng.'],
        { zh: 'nghia', ai: 'mai', t: 'Cô Mai dán một tờ giấy viết tiếng Trung cho Minh Minh đọc. Em đọc thử xem…' },
        { zh: 'dap', ai: 'minh', t: 'Minh Minh xắn tay áo, quay sang nói với em…' },
        ['lan', '', 'Nhà nào có máy thì chạy máy, chưa có thì góp lúa. Mà nhớ học bài nữa đấy — làm bánh không được quên chữ!'],
      ],
      viec: [
        { ev: ['xg'], n: 1, mo: 'Chạy 1 mẻ hàng ở nhà máy', lv: 5, thay: { giao: { lua: 4 }, ai: 'lan', mo: 'Góp 4 lúa để làm bánh' } },
        { hoc: 15, mo: 'Học bài được 15 sao trong hôm nay' },
      ],
      ket: [
        ['tu', 'ngac', 'Bánh thơm quá… Chú ăn thử một cái — à nhầm, ba cái — để kiểm tra chất lượng.'],
        { zh: 'xep', ai: 'minh', t: 'Minh Minh viết nhãn dán lên hộp bánh. Em xếp chữ giúp bạn nhé.' },
        ['lan', 'vui', 'Xửng hấp này bà tặng cháu. Hấp bánh cũng được mà để trang trí cũng đẹp!'],
      ],
      qua: { xu: 50, hat: 3, tt: 'tr-zhenglong' } },

    { ten: 'Đêm hội làng', tom: 'Minh Minh lần đầu nói tiếng Việt trước cả làng.',
      mo: [
        ['bach', 'vui', 'Đêm nay hội làng! Ông đã tập bài phát biểu suốt một tuần. Dài lắm, các cháu chuẩn bị tinh thần.'],
        ['mai', '', 'Minh Minh cũng xin lên nói vài câu — lần đầu tiên bằng tiếng Việt đấy.'],
        { zh: 'nghia', ai: 'minh', t: 'Trước khi lên sân khấu, Minh Minh thì thầm với em bằng tiếng Trung…' },
        ['lan', '', 'Hội thì phải có quà quê. Cháu mang ít lúa với trứng ra góp mâm, rồi ôn một trạm cho đầu óc sáng láng nhé!'],
      ],
      viec: [
        { giao: { lua: 3, trung: 2 }, ai: 'lan', mo: 'Góp 3 lúa và 2 trứng cho mâm hội' },
        { ev: ['pl'], n: 1, mo: 'Qua 1 trạm trên Bản đồ phiêu lưu' },
      ],
      ket: [
        ['minh', 'vui', '“Cháu… chào… cả làng! Cháu… thích… gà!” — cả làng vỗ tay rào rào.'],
        { zh: 'dap', ai: 'minh', t: 'Xuống sân khấu, Minh Minh hỏi em một câu…' },
        { zh: 'xep', ai: 'mai', t: 'Cô Mai mời em xếp một câu tiếng Trung để khép lại đêm hội.' },
        ['bach', '', 'Ông tuyên bố: từ nay làng Tre Xanh có thêm một người con — và một chủ trại nói tiếng Trung giỏi nhất làng!'],
        ['lan', 'vui', 'Cả làng chụp chung một tấm ảnh nào! Cháu đứng giữa nhé. Một, hai, ba… cười lên!'],
      ],
      qua: { xu: 100, hatquy: 1, tt: 'tr-caideng', ky: 1 } },
  ],
};

module.exports = { NV, TT, MUA };
