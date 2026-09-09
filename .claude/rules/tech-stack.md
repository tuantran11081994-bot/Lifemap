# Tech stack

- HTML/CSS/JavaScript thuần, không dùng framework hay build tool.
- Dữ liệu bản đồ (7 Phần × danh sách Mục nhỏ × danh sách Mục con) lưu trong 1 file JS/JSON riêng (`data.js`), tách khỏi phần hiển thị — để dễ cập nhật nội dung mà không đụng vào code giao diện. Số đếm hiển thị ở mỗi nhãn Phần được tính trực tiếp từ độ dài danh sách Mục nhỏ, không cần lưu trạng thái riêng.
- Không cần responsive framework ngoài (Bootstrap/Tailwind) trừ khi được yêu cầu — CSS thuần với biến (`:root`) là đủ và giữ trang nhẹ, tải nhanh.
