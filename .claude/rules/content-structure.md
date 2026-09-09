# Cấu trúc nội dung của bản đồ

Toàn bộ nội dung tổ chức theo kiểu **một cuốn sách phân cấp 3 tầng**: Phần → Mục nhỏ → Mục con.

- **Phần (tầng 1)** — 7 điểm vào bấm được trên bản đồ, chia làm 2 nhóm:
  - **Khung trung tâm**: tiêu đề "Mục tiêu cuộc đời", bên trong là 3 chữ-nút **Độc Lập · Tự Do · Hạnh Phúc** — mỗi chữ mở pop-up riêng (xem [design-principles.md](design-principles.md)) chứa danh sách (Mục nhỏ → Mục con) của giá trị đó.
  - **4 thành phần quanh khung trung tâm**: Sức khỏe, Gia đình, Bạn bè, Sự nghiệp — mỗi thành phần cũng là 1 chữ-nút dẫn vào trang danh sách riêng.
- **Mục nhỏ (tầng 2)**: mỗi Phần chứa nhiều Mục nhỏ (vd Phần "Sức khỏe" có các mục nhỏ như "Tập luyện", "Dinh dưỡng", "Giấc ngủ"...).
- **Mục con (tầng 3)**: mỗi Mục nhỏ chứa nhiều Mục con — tầng nội dung chi tiết nhất (hành động/ghi chú cụ thể).

Số đếm hiển thị cạnh mỗi nhãn Phần (trừ 3 chữ trong khung trung tâm) là tổng số Mục nhỏ bên trong Phần đó — chỉ để biết phạm vi nội dung, không phải chỉ số hoàn thành. Không dùng dấu tích/checkbox hoàn thành ở bất kỳ tầng nào.

Khi thêm tính năng mới, giữ đúng cấu trúc phân cấp "Phần → Mục nhỏ → Mục con" và đúng 7 điểm vào (3 chữ trung tâm + 4 thành phần quanh khung) này làm khung sườn chính, tránh phá vỡ bố cục đã chốt.
