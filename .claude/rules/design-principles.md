# Nguyên tắc thiết kế

Phong cách thiết kế lấy cảm hứng từ [www.suthatman.com_.png](../../www.suthatman.com_.png) về tinh thần hiện đại, tối giản, thân thiện — nhưng thể hiện qua **chữ và khoảng trắng** thay vì thẻ/khung bo hộp, để phù hợp với một bản đồ mục tiêu cá nhân nhìn phát hiểu ngay.

Đặc điểm cốt lõi cần giữ:

- **Không dùng bố cục dạng thẻ**: không bọc từng thành phần trong khung/card có viền, nền riêng, đổ bóng dày. Phân tách nội dung bằng khoảng trắng và cỡ chữ, không phải bằng hộp.
- **Chữ chính là nút bấm**: mọi nhãn có thể bấm — 4 thành phần quanh khung (Sức khỏe, Gia đình, Bạn bè, Sự nghiệp) **và** 3 chữ bên trong khung trung tâm (Độc Lập, Tự Do, Hạnh Phúc) — đều là **chữ dạng nút bấm**: đậm, có màu/hover/underline rõ ràng cho biết bấm được, click vào để đi tới danh sách chi tiết riêng của nhãn đó, không cần bọc trong khung pill hay card.
- **Số đếm module con**: mỗi nhãn bấm được (trừ 3 chữ trong khung trung tâm) hiển thị kèm số lượng mục bên trong (vd "Sức khỏe · 4") để biết có bao nhiêu nội dung đang chờ, nhưng **không dùng dấu tích/checkbox để theo dõi tiến độ hoàn thành** — trang này chỉ định hướng, không phải to-do list.
- **Khung sơ đồ trung tâm được phóng to**: đây là điểm nhấn thị giác chính, choán phần lớn màn hình. Bên trong khung, phía trên là tiêu đề nhỏ **"Mục tiêu cuộc đời"**, chính giữa là 3 chữ-nút lớn **Độc Lập · Tự Do · Hạnh Phúc**, xếp thẳng hàng một dòng, có viền mờ bao quanh khung.
- **3 chữ trung tâm mở pop-up**: click vào Độc Lập / Tự Do / Hạnh Phúc mở một pop-up chi tiết ngay trên trang (không điều hướng sang trang khác), nền phía sau làm mờ (backdrop blur). Bên trong pop-up, nội dung hiển thị dạng danh sách (accordion) — bấm vào Mục nhỏ để bung Mục con.
- **Nền tối xanh rêu đậm**: toàn trang dùng tông nền **xanh rêu đậm** (dark moss green) làm chủ đạo thay vì nền sáng — tạo cảm giác trầm, sâu, như bìa một cuốn sách. Chữ và nhãn phải dùng màu sáng (kem/trắng ngà) để đảm bảo tương phản đọc tốt trên nền tối.
- **Điểm nhấn màu có chủ đích**: 1 màu xanh lá sáng làm màu thương hiệu/chữ-nút (đủ nổi bật trên nền rêu đậm), 1 màu ấm (cam/vàng) làm màu nhấn phụ (số đếm, hover, điểm nhấn nhỏ) — dùng tiết kiệm, không phủ đầy trang.
- **Chữ rõ, phân cấp mạnh**: tiêu đề đậm cỡ lớn, mô tả phụ nhẹ nhàng cỡ nhỏ hơn, tương phản đủ để đọc nhanh trong vài giây.
- **Ưu tiên mobile-first**: bố cục cột dọc, cuộn dễ, vì đây là trang mở ra xem nhanh mỗi ngày kể cả trên điện thoại.

Xem thêm: [mandatory-rules.md](mandatory-rules.md), [color-palette.md](color-palette.md).
