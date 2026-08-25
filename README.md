# HanYu Vui - Website học tiếng Trung

Website học tiếng Trung (HSK 1-4 và YCT thiếu nhi) xây dựng bằng Node.js + Express, phục vụ giao diện tĩnh (HTML/CSS/JS) và có thể mở rộng thêm API sau này.

## Tính năng

- Trang chủ với banner giới thiệu và từ vựng ngẫu nhiên mỗi lần tải lại.
- Hệ thống kiến thức: thẻ danh mục HSK 1, HSK 2, HSK 3, HSK 4, YCT (số bài học / từ vựng / mô tả cấp độ).
- Bài tập thực hành với 5 dạng: trắc nghiệm nghĩa, trắc nghiệm Pinyin, trắc nghiệm Hán tự, điền từ vào chỗ trống, ghép câu — chọn được cấp độ luyện tập, chấm điểm và hiển thị Đúng/Sai ngay lập tức.
- Dashboard tiến độ: số từ vựng đã thuộc, chuỗi ngày học liên tiếp (streak), độ chính xác trung bình, số phiên đã hoàn thành — lưu trên `localStorage` (chế độ demo, chưa có tài khoản thật).
- Đăng nhập / Đăng ký dạng demo (chưa có backend xác thực thật, dữ liệu chỉ lưu trên trình duyệt).

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

Vì đây là chế độ demo dùng `localStorage`, không cần cấu hình database trên Hostinger ở bước này.
