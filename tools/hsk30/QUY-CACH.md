# Quy cách gõ lại một đề HSK 3.0 (từ ảnh scan) → file `raw/<id>.json`

Thư mục làm việc: `C:\Users\Admin\AppData\Local\Temp\claude\C--Users-Admin-Desktop-New-folder\98710f22-a754-42bb-b704-742b35b75771\scratchpad\hsk30\`
(gọi tắt là `HSK30/`). Ảnh từng trang PDF đã tách sẵn trong `HSK30/img/<tên>/NNN_WxH.jpg` (NNN = số trang, W×H = kích thước GỐC).
Mẫu đã làm xong để tham khảo cách viết: `HSK30/de-hsk30-1-1.js` (HSK 1 đề 1 — xem cách ghi đề, lựa chọn, lời thoại, giải thích).

## Việc phải làm
1. Đọc các trang đề của đúng đề được giao (xem chân trang "全真模拟试卷 N – trang" để biết trang thuộc đề nào; bỏ qua trang trắng, trang bìa, trang "下面是阅读部分").
2. Gõ lại CHÍNH XÁC từng câu: chữ Hán, pinyin (nếu đề có pinyin — HSK 1, 2), mọi lựa chọn.
3. Đọc file đáp án và file lời thoại (听力文本) được giao; điền `dap` và `loiThoai` cho từng câu. Với HSK 3, 4 đọc thêm file 答案解析 (giải thích) được giao.
4. Viết `giai` bằng tiếng Việt cho MỌI câu (1–3 câu, ngắn gọn, đúng trọng tâm; nêu nghĩa câu then chốt + vì sao đáp án đúng; nếu có bẫy thì chỉ ra). HSK 3–4: dựa trên 解析 của sách, dịch/tóm lại sang tiếng Việt. Không bịa thông tin không có trong đề.
5. Với câu có ảnh: ghi hộp cắt ảnh trong `catAnh` bằng toạ độ **pixel GỐC** của trang (ảnh được hiển thị thu nhỏ — nhân toạ độ hiển thị với hệ số "Multiply coordinates by X" mà công cụ đọc ảnh báo). Hộp chỉ bao bức ảnh, KHÔNG lấy chữ cái A/B/C, số câu hay đường kẻ bảng; hơi rộng một chút cũng được (viền trắng sẽ tự cắt).
   Có thể dùng `node HSK30/cat-anh.js <cauhinh.json> <thuMucRa>` để tự kiểm tra: nó cắt ảnh và tạo `<thuMucRa>-kiem-tra.jpg` (lưới ảnh đã cắt) — mở xem để chắc chắn từng ảnh đúng. Định dạng cauhinh: `[{"trang":"img/<tên>/NNN_WxH.jpg","tiLe":1,"ten":"l1-1A","hop":[x1,y1,x2,y2]}]` (tiLe 1 = toạ độ gốc). Chạy từ thư mục `HSK30/`.
6. Tự kiểm tra trước khi xong: đủ số câu theo bảng 考试结构; mọi `dap` nằm trong các lựa chọn của câu; đáp án không trùng lựa chọn đã dùng cho câu 例如; lời thoại khớp nội dung đáp án (nếu không khớp thì ghi vào `ghiChu`).
7. Ghi file `HSK30/raw/<id>.json` (UTF-8, JSON hợp lệ — kiểm tra bằng `node -e "JSON.parse(require('fs').readFileSync('raw/<id>.json','utf8'))"`).

## Cấu trúc JSON
```json
{
  "id": "hsk30-2-1", "capDo": 2, "de": 1,
  "tenZh": "HSK 3.0（二级）全真模拟试卷 1",
  "pinyin": true,
  "sections": [
    { "id": "nghe", "ten": "Nghe", "tenZh": "听力", "phut": 17,
      "parts": [ PHAN, ... ] },
    { "id": "doc",  "ten": "Đọc",  "tenZh": "阅读", "phut": 25, "parts": [ ... ] },
    { "id": "viet", "ten": "Viết", "tenZh": "书写", "phut": 10, "parts": [ ... ] }
  ],
  "catAnh": [ { "ten": "l1-1A", "trang": "img/HSK2-5/007_2480x3439.jpg", "hop": [x1, y1, x2, y2] } ],
  "ghiChu": "điều còn nghi ngờ (nếu có), nếu không thì chuỗi rỗng"
}
```
(HSK 4 dùng tenZh "写作" cho phần Viết. `phut` lấy theo bảng 考试结构.)

PHAN (một 第X部分, hoặc một nhóm câu có chung hướng dẫn/lựa chọn):
```json
{ "ten": "Phần 1", "tenZh": "第一部分", "kieu": "...",
  "huongDan": "hướng dẫn tiếng Việt ngắn", "huongDanZh": "câu hướng dẫn tiếng Trung trên đề (nếu có)",
  "viDu": "Ví dụ: ... → đáp án", "viDuDung": "C",
  "chung": { "A": LUACHON, ... },
  "doan": { "57-58": { "zh": "đoạn văn chung cho nhiều câu", "py": "(nếu có)" } },
  "cau": [ CAU, ... ] }
```
- `chung`: chỉ khi các câu trong phần DÙNG CHUNG một bộ lựa chọn (6 ảnh A–F, 6 từ A–F, 5 câu trả lời A–E...). `viDuDung` = chữ cái đã dùng cho 例如 (nếu có).
- Nếu một 第X部分 có 2 nhóm câu dùng 2 bộ lựa chọn chung khác nhau (vd câu 6–10 một bộ ảnh, 11–15 một bộ ảnh khác), tách thành 2 PHAN (ten "Phần 2" cho cả hai, tenZh giữ nguyên).
- `doan`: đoạn văn đọc hiểu / đoạn điền dùng chung cho nhiều câu; câu nào thuộc đoạn thì ghi `"doanId"`.

`kieu` (chọn một):
- `"chon"` — câu trắc nghiệm, mỗi câu có bộ lựa chọn riêng (`cau[].chon`) hoặc dùng `chung`.
- `"bothu"` — (HSK 2 书写 phần 1) chọn bộ phận/bộ thủ A–F ghép thành chữ: `chung` = các bộ phận (ghi dạng chữ, vd "亻"; nếu không gõ được thì mô tả trong `ghiChu` và vẫn cắt ảnh hàng lựa chọn làm `chungAnh`), mỗi câu có `deAnh` (ảnh ô chữ bị thiếu, cắt từ trang) + `de` {zh: chữ hoàn chỉnh nếu biết, py: pinyin trên ô}.
- `"vietchu"` — viết chữ Hán vào chỗ trống theo pinyin: `de` {zh: câu có （　）, py: pinyin của chữ cần điền}, `dap`: chữ đúng (vd "茶").
- `"datcau"` — nhìn tranh, dùng từ cho sẵn đặt câu: `deAnh` (ảnh), `tu` (từ cho sẵn), `mau` (câu mẫu/范例 của sách nếu có — tìm trong file đáp án/解析; nếu sách không có thì tự viết một câu mẫu đúng trình độ và ghi rõ trong `ghiChu`), `dap` bỏ trống "".
- `"vanngan"` — (HSK 4 写作 phần 2) viết đoạn văn: `de` {zh: đề bài}, `deAnh` (nếu có ảnh), `soChu` (số chữ yêu cầu), `mau` (bài mẫu nếu có).

CAU:
```json
{ "n": 16, "dap": "B",
  "de":  { "zh": "câu/đoạn trên đề", "py": "pinyin (nếu có)" }      // hoặc { "dong": [ {"ai":"A","zh":"...","py":"..."}, ... ] } cho hội thoại A/B
  , "hoi": { "zh": "câu hỏi ★ (nếu có)", "py": "..." }
  , "chon": { "A": LUACHON, "B": ..., "C": ... }     // nếu không dùng `chung`
  , "doanId": "57-58"                                // nếu thuộc đoạn chung
  , "deAnh": "w-51.jpg"                              // ảnh đề (bothu / datcau)
  , "tu": "电话", "mau": "...", "soChu": 80           // datcau / vanngan
  , "loiThoai": "lời thoại phần Nghe — xuống dòng bằng \n, giữ 男：/女：/问：",
  "giai": "giải thích tiếng Việt" }
```
LUACHON: `{ "zh": "...", "py": "..." }` (chữ) hoặc `{ "anh": "l1-1A.jpg" }` (ảnh; tên trùng một `catAnh.ten` + ".jpg").
Câu Nghe KHÔNG ghi `de` (đề không in lời nghe), trừ khi trang đề có in câu hỏi.
Đặt tên ảnh: `l<phần>-<câu><chữ cái>` cho ảnh riêng từng câu (vd l1-3B), `l<phần>g<nhóm>-<chữ cái>` cho bộ ảnh chung (vd l2g1-A), `r1-A` cho phần Đọc, `w-<câu>` cho ảnh phần Viết.

## Lưu ý
- Gõ đúng dấu câu tiếng Trung（，。？！：“”）. Chỗ trống trong đề ghi là （　）.
- Pinyin phải có dấu thanh đúng như trên đề.
- Không viết gì vào thư mục dự án web; chỉ ghi vào `HSK30/raw/` (và thư mục kiểm tra ảnh trong `HSK30/`).
