// Dữ liệu bản đồ cuộc đời — chỉnh sửa nội dung ở đây, không cần đụng tới style.css / app.js
//
// Cấu trúc kiểu sách 3 tầng: Phần -> Mục nhỏ -> Mục con
//   - part.sections   = các Mục nhỏ của Phần đó
//   - section.items   = các Mục con của Mục nhỏ đó
//
// group: "center" (3 chữ trong khung trung tâm) hoặc "pillar" (4 thành phần quanh khung)
// edge: chỉ dùng cho group "pillar" — vị trí quanh khung trung tâm (top | bottom | left | right)

const LIFE_MAP_DATA = {
  parts: [
    {
      id: "doclap",
      label: "Độc Lập",
      group: "center",
      sections: [
        { title: "Tự ra quyết định", items: [] },
        { title: "Tự chịu trách nhiệm", items: [] },
        { title: "Tự lực - không phụ thuộc người khác", items: [] }
      ]
    },
    {
      id: "tudo",
      label: "Tự Do",
      group: "center",
      sections: [
        { title: "Tự do về thời gian", items: [] },
        { title: "Tự do về tài chính", items: [] },
        { title: "Tự do tự chủ", items: [] }
      ]
    },
    {
      id: "hanhphuc",
      label: "Hạnh Phúc",
      group: "center",
      sections: [
        { title: "Yêu và được yêu", items: [] },
        { title: "Cho nhiều hơn nhận", items: [] },
        { title: "Nhu cầu ít hơn khát vọng", items: [] }
      ]
    },
    {
      id: "health",
      label: "Sức khỏe",
      group: "pillar",
      edge: "top",
      sections: [
        {
          title: "Thân thể",
          items: []
        },
        {
          title: "Tâm hồn",
          items: []
        },
        {
          title: "Trí Tuệ",
          items: []
        }
      ]
    },
    {
      id: "friends",
      label: "Bạn bè",
      group: "pillar",
      edge: "left",
      sections: [
        {
          title: "Kết nối",
          items: ["Chủ động liên lạc bạn bè thường xuyên", "Gặp gỡ định kỳ"]
        },
        {
          title: "Hỗ trợ",
          items: ["Sẵn sàng giúp đỡ khi bạn cần", "Không ngại nhờ giúp đỡ khi mình khó khăn"]
        },
        {
          title: "Mở rộng",
          items: ["Kết bạn mới có giá trị chung", "Tham gia cộng đồng phù hợp"]
        }
      ]
    },
    {
      id: "career",
      label: "Sự nghiệp",
      group: "pillar",
      edge: "right",
      sections: [
        {
          title: "Kỹ năng",
          items: ["Học kỹ năng mới mỗi năm", "Đọc sách chuyên môn thường xuyên"]
        },
        {
          title: "Mục tiêu công việc",
          items: ["Đạt các mốc thăng tiến đã đặt ra", "Hoàn thành dự án đúng hạn"]
        },
        {
          title: "Tài chính sự nghiệp",
          items: ["Tăng thu nhập bền vững", "Đầu tư phát triển bản thân"]
        }
      ]
    },
    {
      id: "family",
      label: "Gia đình",
      group: "pillar",
      edge: "bottom",
      sections: [
        {
          title: "Gia đình lớn",
          items: ["Ông, bà, bố, mẹ, cô, chú, bác, dì, anh, chị, em, họ hàng..."]
        },
        {
          title: "Gia đình nhỏ",
          items: ["Vợ", "Con"]
        }
      ]
    }
  ]
};
