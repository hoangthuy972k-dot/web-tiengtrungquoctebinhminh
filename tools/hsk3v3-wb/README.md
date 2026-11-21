# Luyện tập sách bài tập — HSK 3 (3.0)

Công cụ soạn phần "Luyện tập sách bài tập" (`var wbData` ở cuối `public/js/hsk3v3-bai-N-data.js`)
từ sách 新HSK教程3 学练手册 (New HSK Course 3 Workbook). Chỉ chạy lúc soạn bài, không dùng trên server.

Nguồn (máy cô giáo, chỉ đọc):
- Sách scan: `C:\Users\Admin\Desktop\HSK1 3.0\New HSK Course Workbook 3 (HSK3.0).pdf` — 187 trang, mỗi trang là 1 ảnh JPEG, không có lớp chữ.
- Đáp án: `C:\Users\Admin\Desktop\HSK1 3.0\HSK3--学练手册(习题答案).pdf` — có lớp chữ. Trang K = đáp án bài K (chỉ phần 模拟测练, câu 1–30); trang 19–20 = đề mô phỏng cuối sách.
- Không có file nghe sách bài tập và không có lời ghi âm (听力材料) trong cả hai file → phần Nghe (câu 1–10) chưa đưa lên.

## Cài một lần

```
cd tools/hsk3v3-wb && npm install      # sharp (cắt ảnh), pdfjs-dist (đọc chữ file đáp án)
cd tools/hsk4v3   && npm install       # pinyin-pro cho py.js (gan.js tự sinh pinyin)
```
`node_modules/` đã nằm trong .gitignore.

## Trang của từng bài (số trang PDF; trang sách = trang PDF − 5)

| Bài | Trang PDF | Trang sách | | Bài | Trang PDF | Trang sách |
|---|---|---|---|---|---|---|
| 1 | 6–15 | 001–010 | | 10 | 90–98 | 085–093 |
| 2 | 16–24 | 011–019 | | 11 | 99–107 | 094–102 |
| 3 | 25–33 | 020–028 | | 12 | 108–116 | 103–111 |
| 4 | 34–42 | 029–037 | | 13 | 117–125 | 112–120 |
| 5 | 43–51 | 038–046 | | 14 | 126–134 | 121–129 |
| 6 | 52–61 | 047–056 | | 15 | 135–143 | 130–138 |
| 7 | 62–70 | 057–065 | | 16 | 144–152 | 139–147 |
| 8 | 71–79 | 066–074 | | 17 | 153–161 | 148–156 |
| 9 | 80–89 | 075–084 | | 18 | 162–170 | 157–165 |

Đề mô phỏng HSK 3 (模拟测试): PDF 171 (bìa) – 186; 187 = bìa sau. Trang 1–5: bìa, lời dẫn, mục lục.

Bố cục một bài (bài 1): 小语讲堂 — 一、汉字 (形近字 + 多音字), 二、词语汇聚 (① bảng từ theo chủ đề + thẻ từ, ② cụm từ, ③ điền từ);
模拟测练 — 听力 1–10, 阅读 11–15 (ghép câu), 16–20 (chọn từ), 21–24 (đọc hiểu), 书写 25–27 (viết chữ theo pinyin), 28–30 (nhìn tranh dùng từ đặt câu).

## Quy trình cho bài N

`S` = một thư mục nháp ngoài repo (vd scratchpad).

1. Tách ảnh trang theo đúng thứ tự trang: `node trang.js "<sách.pdf>" S/trang` → `S/trang/p001.jpg …`
2. Xem lướt: `node bang.js S/trang 16 24 S/bang.jpg` (lưới ảnh nhỏ có số trang).
3. Đọc kỹ từng phần: `node cat.js S/trang/p016.jpg 0 0 100 52 S/v/p016a.jpg 1400` (toạ độ theo % trang: x y rộng cao).
4. Đáp án: `node text.mjs "<đáp án.pdf>" N`.
5. Gõ `bai-N/wb.js` (chép `bai-1/wb.js` làm mẫu). Ảnh cần cho câu hỏi: ghi vào `bai-N/anh.json` rồi
   `node cat.js --lo bai-N/anh.json S/trang` → `public/images/hsk3v3-bai-N-wb/*.webp` (rộng ≤ 520 px, < 80 KB).
6. `node gan.js N` — kiểm tra (đáp án nằm trong phương án, ảnh có thật, số câu liên tục, không có chữ CJK Ext-B) và tự điền
   pinyin còn thiếu → xem `bai-N/wbData.preview.js` (không commit). Pinyin tự sinh cần đọc lại; chỗ sai thì ghi `promptPy` / `py` trong wb.js.
7. `node gan.js N --that` — thay (hoặc thêm) khối wbData ở cuối file dữ liệu bài, giữ CRLF. Chạy lại bao nhiêu lần cũng được.
8. `node tools/stamp-assets.js --that` (đóng dấu ?v= cho trang bài). Chỉ giữ thay đổi ở `public/lessons/hsk3v3-bai-N.html`
   nếu công cụ đóng dấu cả trang của người khác đang sửa.
9. Thử: chạy server riêng (`PORT=3012 DATA_DIR=data-wb3 node server.js`), mở `/?hoc=hsk3v3-bai-N` → "Luyện tập sách bài tập".

## Quy ước

- Định dạng wbData giống HSK 2 (3.0); tab "Sách bài tập" của hsk3v3 đã có sẵn trong app.js (LEVEL_HUB_TABS), có wbData là hiện nội dung.
- Không có file nghe: `listening: []`, ghi `note` cho học sinh; đáp án nghe của sách để trong chú thích đầu wb.js (khi nào có audio thì thêm).
- Câu 28–30 (nhìn tranh, dùng từ đặt câu): `free: true, must: '<từ>', img, script: '<câu trong file đáp án>'`.
  Engine hiện ô viết cả câu, không chấm điểm; nộp bài thì báo câu có dùng từ đó chưa và hiện câu tham khảo.
- Phần 小语讲堂 không có trong file đáp án → tự giải, ghi chú `TU GIAI` ngay trong wb.js.
- Lời dẫn tiếng Việt ngắn; nội dung tiếng Trung chép đúng sách. Không dùng chữ CJK Extension B.
