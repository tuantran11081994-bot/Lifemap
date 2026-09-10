// Dữ liệu bản đồ cuộc đời — chỉnh sửa nội dung ở đây, không cần đụng tới style.css / app.js
//
// Cấu trúc kiểu sách 3 tầng: Phần -> Mục nhỏ -> Mục con
//   - part.sections   = các Mục nhỏ của Phần đó
//   - section.items   = các Mục con của Mục nhỏ đó
//   - section.detail  = (tuỳ chọn) khi Mục nhỏ không có Mục con mà có nội dung mô tả
//                        trực tiếp — mảng { label, text }, hiển thị dạng tab chi tiết
//                        (vd Mức độ / Định nghĩa / Hành động) thay vì thông báo "chưa có nội dung"
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
          items: ["Dinh dưỡng", "Tập luyện", "Nghỉ ngơi"]
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
          title: "Bè (bạn nhậu)",
          items: [],
          detail: [
            { label: "Mức độ", text: "Không quan trọng nhưng nên có." },
            {
              label: "Định nghĩa",
              text: "Đây là những người chỉ giúp tôi mua vui, nhậu nhẹt, giải trí."
            },
            {
              label: "Hành động",
              text: "Không giúp đỡ, không huấn luyện, không chia sẻ, chỉ nhậu thôi."
            }
          ]
        },
        {
          title: "Bạn",
          items: []
        },
        {
          title: "Đệ tử (Lãnh đạo con/Người kế nhiệm)",
          items: []
        },
        {
          title: "Chính mình",
          items: []
        },
        {
          title: "Thầy",
          items: []
        }
      ]
    },
    {
      id: "career",
      label: "Sự nghiệp",
      group: "pillar",
      edge: "right",
      // Phần này có 2 tab (part.tabs) thay vì 1 danh sách sections phẳng — xem renderTab()
      // trong app.js. Tab "connhim" dùng layout "venn" (3 vòng tròn lồng nhau, xem
      // renderCareerVenn()); mỗi section trong đó cần field "spot" để biết vẽ ở đâu:
      // "top" | "left" | "right" (3 vòng chính), "top-left" | "top-right" | "bottom"
      // (3 vùng giao đôi), "center" (vùng giao cả 3).
      tabs: [
        {
          id: "connhim",
          label: "Thuyết con nhím",
          layout: "venn",
          sections: [
            { title: "Việc tôi thích", items: [], spot: "top" },
            {
              title: "Việc tôi giỏi",
              items: ["Học kỹ năng mới mỗi năm", "Đọc sách chuyên môn thường xuyên"],
              spot: "left"
            },
            {
              title: "Việc xã hội cần",
              items: [
                "Đạt các mốc thăng tiến đã đặt ra",
                "Hoàn thành dự án đúng hạn",
                "Tăng thu nhập bền vững",
                "Đầu tư phát triển bản thân"
              ],
              spot: "right"
            },
            { title: "Hạnh phúc nhưng ít tiền", items: [], spot: "top-left" },
            { title: "Chỉ là giấc mơ", items: [], spot: "top-right" },
            { title: "Giàu có nhưng nhàm chán", items: [], spot: "bottom" },
            { title: "Nghề nghiệp lý tưởng", items: [], spot: "center" }
          ]
        },
        {
          id: "conduong",
          label: "Con đường Thành Công",
          sections: []
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
          title: "Bố mẹ",
          items: ["Nội", "Ngoại"]
        },
        {
          title: "Họ hàng thân thiết",
          items: []
        },
        {
          title: "Họ hàng không thân thiết",
          items: []
        },
        {
          title: "Gia đình nhỏ",
          items: ["Vợ", "Con"]
        }
      ]
    }
  ]
};
