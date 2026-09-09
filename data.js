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
        {
          title: "Tài chính",
          items: [
            "Có quỹ dự phòng đủ 6 tháng chi tiêu",
            "Không nợ tiêu dùng",
            "Có ít nhất 1 nguồn thu nhập thụ động"
          ]
        },
        {
          title: "Tư duy",
          items: [
            "Tự ra quyết định, không phụ thuộc ý kiến người khác",
            "Chịu trách nhiệm với lựa chọn của mình",
            "Không so sánh cuộc đời mình với người khác"
          ]
        }
      ]
    },
    {
      id: "tudo",
      label: "Tự Do",
      group: "center",
      sections: [
        {
          title: "Thời gian",
          items: [
            "Tự chủ lịch làm việc của mình",
            "Có thời gian riêng mỗi ngày cho bản thân",
            "Không bị cuốn vào việc không quan trọng"
          ]
        },
        {
          title: "Không gian sống",
          items: [
            "Sống ở nơi mình chọn, không bị ràng buộc",
            "Có thể đi du lịch khi muốn",
            "Môi trường sống thoải mái, không gò bó"
          ]
        }
      ]
    },
    {
      id: "hanhphuc",
      label: "Hạnh Phúc",
      group: "center",
      sections: [
        {
          title: "Nội tâm",
          items: [
            "Biết ơn những gì đang có",
            "Bình an với chính mình",
            "Sống đúng giá trị bản thân tin tưởng"
          ]
        },
        {
          title: "Kết nối",
          items: [
            "Có những mối quan hệ chân thành",
            "Dành thời gian cho người mình yêu thương",
            "Cho đi và giúp đỡ người khác"
          ]
        }
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
          title: "Thời gian cùng nhau",
          items: ["Ăn tối cùng gia đình khi có thể", "Dành cuối tuần cho gia đình"]
        },
        {
          title: "Chăm sóc cha mẹ",
          items: ["Gọi điện thăm hỏi thường xuyên", "Hỗ trợ tài chính khi cần"]
        },
        {
          title: "Tổ ấm",
          items: ["Xây dựng không khí gia đình vui vẻ", "Giải quyết mâu thuẫn bằng thấu hiểu"]
        }
      ]
    }
  ]
};
