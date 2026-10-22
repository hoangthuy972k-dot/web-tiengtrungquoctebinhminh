# HanYu Vui - Website học tiếng Trung

Website học tiếng Trung (HSK 1-4 và YCT thiếu nhi) xây dựng bằng Node.js + Express, phục vụ giao diện tĩnh (HTML/CSS/JS) và có thể mở rộng thêm API sau này.

## Tính năng

- Trang chủ với banner giới thiệu và từ vựng ngẫu nhiên mỗi lần tải lại.
- Hệ thống kiến thức: thẻ danh mục HSK 1, HSK 2, HSK 3, HSK 4, YCT (số bài học / từ vựng / mô tả cấp độ).
- Bài tập thực hành với 5 dạng: trắc nghiệm nghĩa, trắc nghiệm Pinyin, trắc nghiệm Hán tự, điền từ vào chỗ trống, ghép câu — chọn được cấp độ luyện tập, chấm điểm và hiển thị Đúng/Sai ngay lập tức.
- Dashboard tiến độ: số từ vựng đã thuộc, chuỗi ngày học liên tiếp (streak), độ chính xác trung bình, số phiên đã hoàn thành.
- Tài khoản học sinh thật: đăng ký/đăng nhập có backend xác thực (mật khẩu băm bằng `scrypt`), lưu trên server (`data/users.json`). Sau khi đăng nhập, phiên đăng nhập được giữ trong `localStorage` của trình duyệt nên học sinh không cần đăng nhập lại mỗi lần vào học (trừ khi tự đăng xuất hoặc xoá dữ liệu trình duyệt).
- Trang quản trị `/admin` (bảo vệ bằng mật khẩu riêng, xem mục bên dưới): xem số lượt truy cập trang (hôm nay / 7 ngày / 30 ngày / tổng), số người truy cập duy nhất, và với mỗi học sinh đã đăng ký — tổng thời gian học, hoạt động gần nhất, chuỗi ngày học, số câu đúng/tổng.

> Dữ liệu từ vựng/bài tập trong `public/js/data.js` hiện là **dữ liệu mẫu**. Thay thế bằng nội dung đầy đủ trước khi dùng chính thức.

## Chạy thử ở máy local

```bash
npm install
npm start
```

Mặc định server chạy ở `http://localhost:3000` (đổi cổng bằng biến môi trường `PORT`).

## Cấu trúc thư mục

```
server.js            Express server, phục vụ thư mục public/
public/
  index.html          Toàn bộ cấu trúc trang
  css/style.css        Design system + toàn bộ style
  js/data.js            Dữ liệu mẫu: cấp độ, từ vựng, bài tập
  js/app.js             Toàn bộ tương tác: tabs, quiz, dashboard, auth demo
```

## Triển khai lên Hostinger (gói hỗ trợ Node.js App)

1. Đăng nhập hPanel → chọn website → mục **Advanced / Website > Node.js**.
2. Tạo ứng dụng Node.js mới:
   - **Application root**: thư mục chứa mã nguồn (ví dụ `chinese-learning-website`).
   - **Application startup file**: `server.js`.
   - **Node.js version**: 18 trở lên.
3. Kết nối mã nguồn — hai cách:
   - **Qua Git**: trong hPanel chọn "Create from Git", dán URL repo GitHub, chọn nhánh (`main`), Hostinger sẽ tự pull code.
   - **Qua File Manager/FTP**: nén thư mục dự án (trừ `node_modules`) rồi tải lên đúng Application root, giải nén.
4. Trong giao diện Node.js App, bấm **NPM Install** để cài dependencies từ `package.json`.
5. Thiết lập biến môi trường nếu cần (ví dụ `PORT` thường do Hostinger tự cấp qua biến hệ thống — không hard-code cổng cố định).
6. Bấm **Restart/Start Application**.
7. Trỏ domain/subdomain của bạn vào Application URL được cấp, kiểm tra lại trang.

Dữ liệu tài khoản, điểm số, lượt truy cập và thời gian học được lưu trong file JSON ở thư mục `data/` ngay trên server (không cần database rời). Thư mục này **không** nằm trong Git — khi deploy qua Git, các lần `git pull` sau sẽ không đụng đến dữ liệu đã có sẵn trên server, miễn là Hostinger cập nhật code bằng cách pull vào đúng thư mục ứng dụng (không xoá sạch rồi tạo lại từ đầu). Nên định kỳ tải file `data/*.json` về máy để sao lưu.

### Xem thống kê truy cập & thời gian học (trang `/admin`)

1. Trong Node.js App trên hPanel, thêm biến môi trường `ADMIN_PASSWORD` với một mật khẩu mạnh do bạn tự đặt (khác với mật khẩu học sinh).
2. Khởi động lại ứng dụng.
3. Truy cập `https://<domain-của-bạn>/admin`, nhập đúng `ADMIN_PASSWORD` để xem: số lượt truy cập trang, số người truy cập duy nhất, và danh sách học sinh kèm tổng thời gian học/hoạt động gần nhất.

Trang này không có liên kết công khai trên site — chỉ ai biết đường dẫn và đúng mật khẩu mới xem được.
