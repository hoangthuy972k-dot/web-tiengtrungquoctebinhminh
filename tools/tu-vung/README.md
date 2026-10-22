# Soạn nội dung từ vựng HSK (搭配 · 句型 · luyện dịch)

Bộ công cụ này đã sinh ra toàn bộ phần **Từ mới** của HSK 4 (bài 1–20):
3060 hàng kết hợp từ, 1240 cấu trúc câu, 1042 câu luyện dịch.

## Vì sao cần công cụ, không gõ tay

Mỗi hàng 搭配 có ba cột: chữ Hán, **pinyin**, nghĩa tiếng Việt. Gõ tay
3000 dòng pinyin thì kiểu gì cũng sai dấu, mà học sinh đọc theo pinyin —
sai một dấu là dạy sai cách đọc.

Nên pinyin của **cụm từ ngắn** do máy ghép, còn pinyin của **câu** thì
viết tay. Ranh giới đó không tuỳ tiện: `pinyin.js` ghép theo cách khớp
từ dài nhất trong từ điển, chuẩn với cụm 2–5 chữ, nhưng gặp chữ đa âm
trong câu dài thì đọc sai — nó từng đọc 只有 thành *"zhī yǒu"* thay vì
*"zhǐyǒu"*. Một công cụ sai thanh điệu còn tệ hơn là không có công cụ.

## Các file

| File | Việc |
|---|---|
| `tao-tu-dien.js` | Quét mọi `public/js/*-data.js`, rút ra cặp 汉字 → pinyin, ghi ra `tu-dien.json` (~2100 mục) |
| `pinyin.js` | Ghép pinyin cho một cụm chữ Hán. Có xử lý biến điệu 不/一, gộp chữ lặp (慢慢 → mànmàn) và chuỗi số (二十 → èrshí). `ghepKiemTra()` còn cảnh báo chữ đa âm đứng lẻ để người soạn liếc lại |
| `khung-cau.js` | Nhận diện khung ngữ pháp HSK 4 trong một câu tiếng Trung (不但……而且……, 只有……才……, 当……的时候…). Dùng để gắn thẻ gợi ý lên ô luyện dịch |
| `ap-noi-dung.js` | Gắn nội dung đã soạn vào file dữ liệu bài học |
| `tinh-lai-khung.js` | Tính lại thẻ khung câu cho cả bài khi `khung-cau.js` đổi |
| `noi-dung/` | Nội dung từng bài do người soạn viết (xem dưới) |

## Soạn một bài mới

Ba file trong `noi-dung/`, đặt tên theo số bài:

- `bai-N.js` — mỗi từ một mục: 5 cụm 搭配 `[chữ Hán, nghĩa tiếng Việt]`
  và 2 cấu trúc `[công thức, nghĩa]`. **Không viết pinyin ở đây.**
- `viet-lai-N.js` — các câu luyện dịch viết lại thành câu ghép, kèm
  `pair` (khung câu) và `note`
- `pinyin-N.json` — pinyin **viết tay** cho đúng những câu đã viết lại

Rồi chạy:

```bash
node tools/tu-vung/ap-noi-dung.js 5          # chạy thử, không ghi
node tools/tu-vung/ap-noi-dung.js 5 --that   # ghi vào file bài học
node tools/tu-vung/tinh-lai-khung.js 5 --that
node tools/stamp-assets.js --that            # đóng dấu phiên bản
```

`ap-noi-dung.js` **từ chối ghi** nếu còn cụm nào thiếu pinyin (in ra `?`),
nên gặp chữ lạ thì bổ sung vào phần `BO_SUNG` trong `pinyin.js` rồi chạy
lại — không bao giờ để một hàng ra màn hình với pinyin thiếu.

## Hai phép kiểm tra đáng chạy sau khi soạn xong

1. **Đếm âm tiết so với đếm chữ Hán.** Lệch là dấu hiệu rơi hoặc thừa một
   âm. Chỉ có 儿 hoá được phép lệch (点儿 → diǎnr, 空儿 → kòngr).
2. **Tìm hai cụm khác nhau cùng một nghĩa tiếng Việt trong một ô.** Nó nói
   với học sinh rằng hai cụm dùng thay nhau được, trong khi thường thì
   không — 西红柿新鲜 là vị ngữ còn 新鲜的西红柿 là định ngữ, và đúng chỗ
   khác nhau đó mới là bài học.

Cả hai đều chạy được bằng mấy dòng Node đọc `vocabData`; xem lịch sử commit
của thư mục này để lấy nguyên văn.
