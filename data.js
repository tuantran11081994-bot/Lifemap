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
      // layout "venn": trang chi tiết của Phần này hiển thị dạng 3 vòng tròn lồng nhau
      // (thuyết con nhóm) thay vì danh sách thường — xem renderCareerVenn() trong app.js.
      layout: "venn",
      sections: [
        {
          title: "Việc tôi giỏi",
          items: ["Học kỹ năng mới mỗi năm", "Đọc sách chuyên môn thường xuyên"]
        },
        {
          title: "Việc tôi thích",
          items: []
        },
        {
          title: "Việc ra tiền (Cái XH cần)",
          items: [
            "Đạt các mốc thăng tiến đã đặt ra",
            "Hoàn thành dự án đúng hạn",
            "Tăng thu nhập bền vững",
            "Đầu tư phát triển bản thân"
          ]
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
