# Quy cách soạn HSK 4 (3.0) — 新HSK教程4上

Mẫu chuẩn: **Bài 1** — `tools/hsk4v3/bai-1/tu.json` + `bai-1/bai.json`. Mỗi bài mới phải giống hệt cấu trúc, độ đầy đủ và giọng văn của Bài 1. Đọc kỹ hai file đó trước khi viết.

Cô giáo yêu cầu: lấy **toàn bộ** kiến thức trong SGK (từ mới, 4 bài khoá, 4 điểm ngữ pháp 小语讲堂, mọi bài tập 综合练习, 任务活动 nói + viết), **không bỏ sót** bài tập ngữ pháp nào; ảnh trong sách đưa vào (mặt nhân vật trong bong bóng hội thoại, tranh bài khoá, ảnh phần 热身, tranh bài tập 看图); giáo viên 10 năm kinh nghiệm, trực quan, dễ hiểu cho học sinh Việt.

## Nguồn

- Trang sách đã render: `<SP>/h4/sgk/pNNN.jpg` (scale 1.6, ~952×1348). **Trang sách N = PDF trang N+10.**
  Bài bắt đầu (trang sách): 1→001, 2→012, 3→023, 4→035, 5→047, 6→059, 7→071, 8→083, 9→095, 10→107 (bài 10 hết trang 119). Đọc bằng công cụ Read (ảnh).
- Đáp án: `<SP>/h4/da/p001.jpg` … `p025.jpg` (theo thứ tự bài, "第N课", "P<trang sách>"). Đáp án trắc nghiệm, chọn từ, hoàn thành đoạn văn **phải lấy đúng đáp án sách**; câu mở có "参考答案" → dùng làm câu mẫu (`mau`).
- `<SP>` = `C:/Users/Admin/AppData/Local/Temp/claude/C--Users-Admin-Desktop-New-folder/77e42dd0-944a-49fd-b74b-1161a192d845/scratchpad`

## Ảnh (cắt từ sách)

Công cụ (chạy trong `<SP>/h4`, đã có node_modules):
- Render trang độ phân giải cao: `node render.mjs "C:/Users/Admin/Desktop/HSK 3.0/file sách. file nghe/SGK 新HSK教程4上 Trung anh.pdf" hi <tuTrang> <denTrang> 2.6` → `hi/pNNN.jpg` (số = trang PDF). Mặt nhân vật phụ nhỏ: scale 6 vào thư mục `xhi`.
- Cắt: `node crop.mjs <src.jpg> <out.jpg|png> x y w h [maxW] [tron]` — x,y,w,h là **tỉ lệ 0..1** của ảnh nguồn (đo trên ảnh 1.6 là được vì là tỉ lệ). `tron=1` cắt tròn (PNG) cho mặt người.
- Kiểm tra bằng mắt: `node sheet.cjs <out.jpg> a.jpg b.jpg …` rồi Read ảnh. Cắt lệch thì sửa toạ độ và cắt lại — ảnh phải gọn trong khung, không dính viền xanh/chữ.
- Xuất webp vào web: `node towebp.cjs <vao> "C:/Users/Admin/Desktop/New folder/public/images/hsk4v3/bai-N/<ten>.webp" <maxW>` (ảnh 640, mặt người 120).
- Tên ảnh: `wu-A`…`wu-F` (ảnh 热身 theo **chữ cái đáp án** — xem đáp án sách cho biết ảnh nào là chữ nào), `kv-1`…`kv-4` (tranh bài khoá 1–4, nếu có), `bt-1`… (tranh bài tập 看图), mặt nhân vật phụ (vd `fangdong`, `gv`…).
- Nhân vật chính đã có sẵn, chỉ cần ghi tên: 小语 白家月 安妮 陈天中 李文 王一飞 王一雪 刘明 刘小雪 刘小明 杨同乐. Nhân vật khác trong bong bóng (老师, 房东, 医生…) → cắt mặt nhỏ trong bong bóng của sách → `{"ten":"房东","anh":"fangdong"}`. Câu nói chung của hai người → `{"ten":"白家月、陈天中","anh":"nv:chen"}` (dùng mặt một người).
- Bài khoá là đoạn văn (không phải hội thoại) → `"doan": true`, `"nguoi": ["小语"]`, mỗi câu một dòng `sp:0`.

## tu.json — mỗi từ mới (đúng thứ tự, đúng pinyin/từ loại của sách)

`zh, py, pos (tiếng Việt: Danh từ / Động từ / …), en, vn, hv (âm Hán Việt), em (1 emoji), k (số bài khoá 1–4), explain[1–2 câu], usage, ex[[zh,vn] ×2 — câu 1 lấy từ bài khoá có chứa từ, câu 2 tự đặt], collo[[zh,vn] ×4], pat[[mẫu, giải thích] ×1–2], check[[câu Việt, đáp án Trung, ghi chú, cấu trúc] ×2]`.
- **Ôn xoáy ốc (bắt buộc):** câu ví dụ/câu tự kiểm tra lồng ngữ pháp + từ của **bài trước** (HSK 3, và các bài HSK 4 (3.0) đã có) — ghi rõ trong ghi chú, vd “Ôn 随着 (Bài 1 · điểm 3)”.
- Ghi chú bẫy Hán Việt khi có (博士 = tiến sĩ, 教师 = giáo viên…). Từ đa nghĩa: nghĩa theo bài này (vd 当 = làm nghề).
- Chuỗi trong JSON **không dùng dấu " ASCII** — dùng “ ” hoặc 「 」.
- Chữ Hán chưa có phân tích → `node tools/hsk4v3/gan.js --kiem N` sẽ báo “thieu phan tich chu X” → thêm vào `tools/hsk4v3/chu-moi.json` (cùng định dạng các chữ đã có; **chỉ thêm khoá mới, không sửa khoá cũ**; file dùng chung nên sửa bằng Edit thêm từng dòng).

## bai.json

Giống Bài 1: `so, zh, py, vn, chuDe, icon, mucTieu[3 mục tiêu của sách, dịch Việt], wu[6], dialogs[4], nguphap[4], sgk[…], listen[3], match[≥8], fill[10], sort[6], mc[10], speaking{intro, questions[]}, translate[6], translateRev[5], writing{…}`.
- `dialogs[i]`: `tab` (nhãn ngắn tiếng Việt), `scene` ("中文地点 · mô tả tiếng Việt"), `anh`, `nguoi`, `preQuiz` (đúng 2 câu nghe/đọc nhanh của sách, `ans` theo đáp án), `lines` (đúng nguyên văn sách, có `vn` dịch tự nhiên), `hoi` (2 câu 根据课文内容回答问题 + câu trả lời mẫu), `kelai`/`kelaiMau` nếu sách có 复述.
- `nguphap[i]` (định dạng NGU_PHAP_TAB như Bài 1): `so, ten (tên tiếng Trung như sách), tenVn, cauTruc[], giaiThich` (dịch + giảng thêm cho người Việt, mẹo, phân biệt), `viDu` (3 ví dụ của sách + 1 ví dụ ôn bài cũ), `loi` [3 lỗi học sinh Việt hay mắc: [sai, vì sao, đúng]], `bt` **4 khối**: 1 Cơ học (5 `dien`), 2 Bán giao tiếp (`xep` + `dungsai`), 3 **Bài tập SGK** (đúng từng câu bài tập 小语讲堂 của sách → `vandung`, `mau` = 参考答案, `can` = từ bắt buộc), 4 Giao tiếp (`dich` + 1 `vandung` `tuDo`).
- `sgk`: mọi bài 综合练习 — 选词填空 → `kho` (`dapSgk:true`), 选择合适的内容完成短文 → `kho` (tu = các câu A–D, một cau nhiều ＿＿), 看图用词语造句 → `gx` có `anh`, các dạng khác: chọn dạng gần nhất trong `public/js/bai-tap-sgk.js` (ab, vitri, mr, gx, mp, bc, sx). Không bỏ bài nào.
- `speaking`: câu hỏi 热身 phần 2, câu hỏi đọc hiểu của cả 4 bài khoá, mọi bài 复述, hoạt động 角色扮演 (đề + bài mẫu dài).
- `writing`: `kieu:"sgk", soChu, tieuDe, nhanDe:"写作", huongDan{…}, de` (nguyên văn), `prompt` (dịch), `dan` (5 câu hỏi dàn ý + gợi ý), `tuNen`, `cauTruc` (5 mẫu có `vd`, `khi`), `checklist`, `model` (bài mẫu ≥ số chữ, dùng từ mới + ngữ pháp của bài).
- `listen`: 3 đoạn hội thoại ngắn **mới** (tình huống mới, dùng từ của bài) + 2 câu hỏi 3 lựa chọn mỗi đoạn.

## Kiểm tra

`node tools/hsk4v3/gan.js --kiem N` (không ghi file) phải báo **Không có lỗi** (đủ ảnh, đủ phân tích chữ). Không chạy `gan.js` không có `--kiem` (người điều phối chạy một lần cho tất cả). Không sửa file nào ngoài `tools/hsk4v3/bai-N/`, `public/images/hsk4v3/bai-N/` và thêm khoá vào `chu-moi.json`. Không commit.
