# Công cụ dựng đề HSK 3.0 (trang /hsk30)

Dùng khi thêm đề mới từ sách scan (bộ 《HSK 3.0 轻松过》) hoặc khi có file nghe mới.
Các script được viết để chạy trong một thư mục làm việc riêng (không phải thư mục web):
chép cả thư mục này ra ngoài, cài `npm i jimp@0.22.12 ffmpeg-static@5`, rồi sửa các đường dẫn ở đầu mỗi file.

1. `tach-anh.js file.pdf img/<ten>` — tách ảnh từng trang của PDF scan.
2. `bang-trang.js` — ghép nhiều trang thành một ảnh để xem lướt.
3. Gõ lại đề theo `QUY-CACH.md` → `raw/<id>.json`.
4. Âm thanh: nén `ffmpeg -ac 1 -ar 22050 -b:a 48k` → `am/<ten>-48.mp3`; `moc-am.js am/<ten>.mp3 <soCau> > am/moc-<ten>.txt`.
5. `gen-de.js <id> <ten>` — kiểm tra, tính mốc từng câu, cắt ảnh, ghi `protected/hsk30/<id>/`.
6. `gan-trang-thi.js` — cập nhật nhóm "Đề HSK 3.0" trên trang /exam/.

`protected/hsk30/_cho-bang/hsk30-3-1.raw.json`: HSK 3 đề 1 đã gõ xong, chờ file nghe đúng
(file 三级试卷1-录音 hiện có bị phát lại từ đầu ở khoảng 15:44, thiếu câu 18–30).
