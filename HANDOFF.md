# Handoff — Life Map

Ghi lại trạng thái hiện tại để phiên sau (người hoặc AI) tiếp tục mà không mất ngữ cảnh.

## Trạng thái git hiện tại

- Nhánh `main`, đã đồng bộ với `origin/main`, không có commit/thay đổi nào bị treo ngoài file này.
- `thuyetconnhim.png` — vẫn là file ảnh chưa track (`git status` báo `??`). Chưa rõ mục đích cụ thể (có thể là ảnh tham khảo layout hoặc ảnh nguồn cho 1 bài viết `/dang-bai`) — chưa xoá, chưa add, cần hỏi lại nếu muốn xử lý.
- Trang đang live tại GitHub Pages: **https://tuantran11081994-bot.github.io/Lifemap/** (build từ nhánh `main`, thư mục gốc).

## Tổng quan tính năng hiện có (tech stack: HTML/CSS/JS thuần, không build tool)

- **7 điểm vào** (3 chữ trung tâm + 4 thành phần quanh khung) đúng theo [content-structure.md](.claude/rules/content-structure.md).
- **Số đếm**: chỉ hiển thị ở 4 nút thành phần trên trang chủ (`renderHome`), tính bằng `part.tabs ? part.tabs.length : part.sections.length` — tức đếm đúng số mục hiển thị ngay khi bấm vào Phần đó (không cộng dồn qua nhiều tầng). Mọi nơi khác (danh sách mục nhỏ, tab, sơ đồ con nhím, pop-up trung tâm) **không** còn số đếm.
- **Pop-up 3 chữ trung tâm** (`openModal` trong `app.js`): mỗi Mục nhỏ có thể có:
  - `note` (string) — hiện 1 dòng chữ nhỏ diễn giải khi bấm mở, không nhãn.
  - `detail` (mảng `{ label, text }`) — hiện nhiều trường có nhãn in hoa (hiện chỉ dùng cho "Bè (bạn nhậu)" trong Bạn bè). Hai quy ước tách biệt, không dùng chung code path.
- **Hệ thống bài viết** (`renderArticle`, mở từ 1 Mục con có `articles`):
  - Mục con giờ có thể là chuỗi thường (chưa có nội dung) hoặc object `{ title, articles: [{ title, body }] }`.
  - `body` là mảng block, các `type` hỗ trợ: `paragraph` (có thể thêm `italic: true`), `heading`, `subheading`, `list` (item là string hoặc `{ label, text }`), `note`, `table` (`headers` + `rows`), `clock` (đồng hồ sinh học 12 múi giờ), `flow` (sơ đồ các bước).
  - Bài viết mặc định **ẩn nội dung dưới mỗi tiêu đề** (lớn & nhỏ), bấm vào tiêu đề mới bung ra — thay cho mục lục riêng (`buildToggleSection`).
  - **Highlight**: bấm giữ/chọn dòng trong bài để tô sáng, lưu theo từng bài vào `localStorage` (`makeHighlightable`).
  - **Bảng ghi chú**: mỗi bài có bảng ghi chú tự do ở cuối, điền được, lưu `localStorage` theo từng bài (`renderArticleNotes`, nút "+ Thêm dòng").
- **Khôi phục route khi mở lại không có hash**: nếu URL không có `#...` (vd mở từ bookmark/home-screen icon), tự động khôi phục route đã lưu gần nhất trong `localStorage`; refresh bình thường trình duyệt đã tự giữ hash nên không cần cơ chế này (`saveCurrentRoute` / `restoreLastRouteIfNeeded`).
- **Skill `/dang-bai`** (`.claude/skills/dang-bai/SKILL.md`): quy trình dựng bài viết từ 1 bức ảnh chụp — giữ tiêu đề, tóm gọn diễn giải, không bịa nội dung, ẩn/hiện theo tiêu đề, bảng ghi chú, highlight — và luôn cho xem trước khi đăng.

## Quy ước khi thêm nội dung mới vào `data.js`

- Thêm diễn giải ngắn cho 1 Mục nhỏ trong pop-up trung tâm: `{ title: "...", items: [], note: "Câu diễn giải." }` — không cần sửa `app.js`/`style.css`.
- Thêm 1 bài viết mới dưới 1 Mục con: đổi Mục con từ chuỗi thành `{ title: "...", articles: [{ title: "...", body: [...] }] }`.
- **Lưu ý**: comment hướng dẫn ở đầu `data.js` (dòng 1–11) mới mô tả `items`/`detail`, **chưa liệt kê** `note` và dạng Mục con object có `articles` — nên cập nhật khi có dịp để tránh gây nhầm lẫn cho người đọc data.js sau này.

## Việc chưa làm / có thể cân nhắc tiếp theo

- Quyết định giữ/track hay xoá `thuyetconnhim.png`.
- Cập nhật comment hướng dẫn đầu `data.js` để liệt kê đủ các field đang dùng (`note`, item dạng object `{ title, articles }`).
