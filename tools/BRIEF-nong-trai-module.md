# Viết một module mới cho Nông trại (/nong-trai) — hướng dẫn chung cho người làm

Repo: Node/Express (server.js), vanilla JS, không build. Nông trại = server `nong-trai.js` (+ các module `nong-trai-*.js`) và client `public/nong-trai.html` + `public/js/nong-trai.js` (+ `public/js/nong-trai-*.js`).

## Server
- Module mới là file gốc `nong-trai-<ten>.js` xuất `{ gan(app, d, h, chung) }`. Nó đã được nạp tự động ở cuối `nong-trai.js` (tìm `['nong-trai-thucung', 'nong-trai-chodem', ...]`).
- `h` (gọi là hKt trong nong-trai.js) có: `doc(uid)` / `ghi(uid, f)` (đọc/ghi nông trại của 1 em), `lanLuot(uid, fn)` (khoá theo em), `traLoi(res, promise)`, `loi(msg)`, `trangThai(uid, f)` (trạng thái gửi client), `lvTuXp`, `saoHoc`, `SP`, `CAY`, `CON`, `TT`, `LUONG`, `LUONG_PY`, `CATALOG` (gửi xuống client ở /api/farm?cat=1 — module có thể `Object.assign(h.CATALOG, {...})`), `tuHocCua(user)`, `taoCau`, `chamCau(q, body)`, `onCau`, `ketQuaCau(q)`, `phieuLuu.layCau(user, vung, n, {nghe})` (câu hỏi từ bài em học), `ghiNk`, `cungLop`, `taiCongDong`, `boNhoCongDong`, `suKien`, `HE_SO_CAY` / `HE_SO_BAN` (mảng hàm `fn(f, k) -> hệ số`), v.v. Đọc `nong-trai-lai.js` (mẫu gọn nhất: bảng dữ liệu + endpoint + 3 câu hỏi + chấm ở máy chủ) và `nong-trai-xuong.js`.
- Dữ liệu riêng của em lưu trong object nông trại `f` (vd. `f.pet = {...}`), ghi bằng `h.ghi`. Dữ liệu chung cả lớp/thị trấn: xem `nong-trai-chung.js` (docC/ghiC, KV `farm_chung`).
- QUY TẮC CỨNG: mọi câu hỏi / từ / câu tiếng Trung để học sinh trả lời phải lấy từ bài em ĐÃ HỌC hoặc được GIAO (`h.phieuLuu.layCau`, `h.tuHocCua`). Nội dung cố định của tính năng (tên đồ vật, câu lệnh…) phải là tiếng Trung chuẩn, có pinyin + nghĩa tiếng Việt.
- Đáp án giữ ở máy chủ; client chỉ nhận câu hỏi. Mọi phần thưởng có giới hạn mỗi ngày; không tạo "máy in xu".
- Sau khi sửa phải chạy `node tools/thu-kinh-te-nong-trai.js` (phải "Tat ca dung ✓") và `node tools/thu-cau-nong-trai.js`.

## Client
- File `public/js/nong-trai-<ten>.js` + `public/css/nong-trai-<ten>.css` ĐÃ có sẵn (rỗng) và đã gắn trong `public/nong-trai.html` — chỉ việc viết nội dung vào.
- API client: `window.NTX` (xem cuối `public/js/nong-trai.js`): `S` (S.st trạng thái, S.cat danh mục), `$`, `$all`, `esc`, `img(ten)`, `anh(ten)`, `goi(url, body)`, `lam(body, el)`, `bao(msg)`, `tieng(kieu)`, `doc(zh)`, `moBang(loai, tab)`, `dangKy(loai, ve)`, `veBang`, `bangDang`, `datTab`, `moBangNho(html)`, `nhanTrangThai`, `htmlKt/ganKt/danhDauKt/giaiKt/docKt/moLaiKt/giaiNghe/docKiem/mayKhongNghe` (hiện câu hỏi), `sauVe` / `nhip` / `sau` / `sauNoi` (móc), `fx`, `veBanDo`, `zSau`, `datTuManHinh`…
- Mẫu đầy đủ: `public/js/nong-trai-lai.js` (bảng riêng + nút trong "⋯ Thêm" chèn bằng JS + luồng 3 câu hỏi + màn kết quả).
- Nông trại có góc nhìn 3D xoay (`S.ng`, `S.xoay`): đồ đứng trên ruộng dùng lớp `.nt-dung` / biến `--xn` như `.nt-nv` (xem CSS `body.nt-ng .nt-nv`). Có "Chế độ nhẹ" `body.nt-nhe`: tắt hoạt ảnh trang trí của tính năng mới khi lớp này bật.

## Phong cách
- Font Be Vietnam Pro (Việt) + Noto Serif SC (Hán). Hình vẽ tay kiểu SVG viền đậm `#2b1d3a`, màu ấm như các hình trong `public/images/farm/`. KHÔNG vẽ bằng canvas tự sinh (cô giáo đã chê). Hình mới đặt trong `public/images/farm/`.
- Chữ Hán luôn kèm pinyin + nghĩa; bấm vào thì đọc to (`NTX.doc`).
- Điện thoại là thiết bị chính: nút ≥ 44px, không tràn ngang.

## Thử
- Chạy máy chủ riêng: `PORT=30xx DATA_DIR=data-<ten> NT_THU=1 node server.js` (chạy nền; data-*/ đã gitignore). `NT_THU=1` bật `POST /api/farm/_thu` (body `{xp, xu, kho, tui, hat, chin}`) để dựng nông trại thử.
- Tài khoản thử: `POST /api/auth/register {name, email: "...@local.test", password}`; cho em "đã học bài": `POST /api/scores/sync {"lessonScores":{"/lessons/hsk2v3-bai-3.html":{"mc":{"correct":10,"total":10,"score":100}}}}`.
- Ưu tiên thử bằng API (curl/node). Nếu mở trình duyệt: TẮT TIẾNG ngay (stub `speechSynthesis.speak`, `HTMLMediaElement.prototype.play`, `window.AudioContext`, `NhacNen.tat()`), chụp 1–2 ảnh để xem hình, rồi ĐÓNG tab. Cô giáo khó chịu khi máy phát tiếng.
- Không tạo tài khoản trên web thật. Dừng máy chủ, xoá thư mục data thử khi xong. KHÔNG commit, KHÔNG push.
- Chỉ sửa file của mình. Nếu buộc phải sửa file chung (nong-trai.js, public/js/nong-trai.js…), sửa tối thiểu, tương thích ngược, và báo lại.
