# Bảng màu

Bảng màu gợi ý (điều chỉnh khi có thời gian lấy đúng mã màu từ ảnh gốc):

| Vai trò | Màu | Ghi chú |
|---|---|---|
| Nền chính | xanh rêu đậm (`#1E2B1F` tham khảo) | nền tối chủ đạo toàn trang |
| Nền khung trung tâm | xanh rêu đậm hơn/nhạt hơn 1 chút (`#243424` tham khảo) | tạo chiều sâu nhẹ, phân lớp với nền chính |
| Chữ chính | kem/trắng ngà (`#F4EFE2` tham khảo) | đảm bảo tương phản tốt trên nền tối, không dùng trắng tuyệt đối |
| Thương hiệu / chữ-nút | xanh lá sáng (`#8FC97A` tham khảo) | dùng cho tiêu đề mục tiêu, khung trung tâm, các chữ-nút |
| Nhấn phụ | cam/vàng ấm (`#E8A33D` tham khảo) | dùng cho số đếm, hover, điểm nhấn nhỏ |

**Chuẩn hoá & tái sử dụng**: mọi màu, khoảng cách, font-size định nghĩa bằng **CSS variables** trong 1 file style dùng chung (`:root { --color-primary: ...; ... }`), không hard-code lặp lại trong từng trang/component.
