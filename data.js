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
        {
          title: "Tự ra quyết định",
          items: [],
          note: "Tôi là thuyền trưởng duy nhất lái con tàu cuộc đời mình."
        },
        {
          title: "Tự chịu trách nhiệm",
          items: [],
          note: "Mọi kết quả hiện tại đều là tấm gương phản chiếu hành động và phản ứng của chính tôi."
        },
        {
          title: "Tự lực - không phụ thuộc người khác",
          items: [],
          note: "Trân trọng mọi sự hỗ trợ xung quanh, nhưng luôn có đủ thực lực để tự bước đi một mình."
        }
      ]
    },
    {
      id: "tudo",
      label: "Tự Do",
      group: "center",
      sections: [
        {
          title: "Tự do về thời gian",
          items: [],
          note: "Làm điều mình muốn vào bất cứ lúc nào mình thích."
        },
        {
          title: "Tự do về tài chính",
          items: [],
          note: "Được sống theo phong cách mà mình muốn."
        },
        {
          title: "Tự do tự chủ",
          items: [],
          note: "Dám sống thật với chính mình và hoàn toàn làm chủ số phận của bản thân."
        }
      ]
    },
    {
      id: "hanhphuc",
      label: "Hạnh Phúc",
      group: "center",
      sections: [
        {
          title: "Yêu và được yêu",
          items: [],
          note: "Cấp độ cao nhất của cảm xúc."
        },
        {
          title: "Cho nhiều hơn nhận",
          items: [],
          note: "Sự cho đi là thước đo của nhân cách."
        },
        {
          title: "Nhu cầu ít hơn khát vọng",
          items: [],
          note: "Biết đủ về vật chất và danh vọng, nhưng luôn nuôi dưỡng hoài bão lớn."
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
          items: [
            {
              title: "Dinh dưỡng",
              articles: [
                {
                  title: "Quik Recomp",
                  body: [
                    {
                      type: "paragraph",
                      text: "Quik Recomp là hướng dẫn thiết lập dinh dưỡng nền tảng để giảm cân, giảm mỡ — không phải một chế độ ăn kiêng khắc nghiệt, mà là cách chọn thực phẩm và tính khẩu phần bền vững lâu dài."
                    },
                    { type: "heading", text: "I. Nhiệm vụ đầu tiên: loại bỏ" },
                    {
                      type: "list",
                      items: [
                        { label: "Đường", text: "Làm tăng insulin (hormone tích mỡ). Không cần bỏ vĩnh viễn, nhưng nên cắt hẳn trong 14 ngày đầu để giảm cân nhanh, hiệu quả." },
                        { label: "Chất cồn", text: "Ảnh hưởng tiêu hóa, trao đổi chất và là nguyên nhân lifestyle khiến thừa cân — cắt hẳn trong một thời gian." },
                        { label: "Thức ăn nhanh", text: "Đồ chế biến công nghiệp ảnh hưởng sức khỏe, hệ tiêu hóa và khiến tăng cân." },
                        { label: "Đồ ăn vặt", text: "Bữa ăn vặt làm tăng insulin, gây \"nghiện ăn\", khiến cơ thể không có thời gian đốt mỡ." },
                        { label: "Thuốc giảm cân, đốt mỡ", text: "Không có \"viên nhộng\" nào thực sự giúp đốt mỡ hay khỏe mạnh — thậm chí có thể hại gan và hệ tiêu hóa." }
                      ]
                    },
                    { type: "heading", text: "II. Thành phần bữa ăn" },
                    {
                      type: "paragraph",
                      text: "Sai lầm thường gặp là chia thức ăn theo macro (protein/carb/fat) thay vì theo thực phẩm thật. Một bữa ăn giảm cân đầy đủ dinh dưỡng cần 4 nhóm: Chất đạm — Chất béo — Tinh bột — Rau xanh."
                    },
                    {
                      type: "note",
                      text: "Hãy thêm tiền tố \"lành mạnh\" trước mỗi nhóm thực phẩm. 300 kcal từ một miếng gà rán rất khác 300 kcal từ một tô salad — quan trọng là chất lượng thực phẩm, không chỉ là con số calo."
                    },
                    { type: "heading", text: "III. Công thức thiết lập bữa ăn" },
                    { type: "paragraph", text: "Bước 1 — Tính DCI (Daily Calorie Intake) mục tiêu:" },
                    {
                      type: "list",
                      items: [
                        "Total DCI = TDEE − số calo muốn cắt giảm (20–25% TDEE)",
                        "Ví dụ: TDEE = 3000 kcal → DCI mục tiêu = 2500 kcal"
                      ]
                    },
                    { type: "paragraph", text: "Bước 2 — Chia khẩu phần theo tỷ lệ:" },
                    {
                      type: "list",
                      items: [
                        "Nguồn carb chính = 10% DCI",
                        "Nguồn protein chính = 70% DCI",
                        "Chất béo lành mạnh = 10% DCI",
                        "Rau xanh củ quả = 10% DCI"
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Ví dụ: DCI = 2000 kcal → carb cần ăn = 10% × 2000 = 200 kcal ≈ 120g gạo trắng. Tra thành phần dinh dưỡng theo từ khóa \"100g + tên thực phẩm (tiếng Anh) + calories\" — nguồn USDA (Mỹ) hiện chính xác và cập nhật nhất."
                    },
                    {
                      type: "note",
                      text: "Củ, quả và hạt không tính vào rau xanh mà tính vào tinh bột. Chất béo lành mạnh dùng để cân bằng với lượng chất béo bão hòa sẵn có trong thịt, cá."
                    },
                    { type: "heading", text: "IV. Ví dụ 1 ngày ăn" },
                    {
                      type: "list",
                      items: [
                        "Nguồn carb chính = 150g: 100g gạo trắng + 50g khoai lang (hoặc 50g gạo trắng + 100g bột đậu)",
                        "Nguồn protein chính = 280g: 100g thịt gà + 150g cá hồi + 2 trứng gà",
                        "Chất béo lành mạnh = 5g dầu olive + 5g kem dừa + 5g bơ tinh",
                        "Rau xanh = 500g"
                      ]
                    },
                    { type: "heading", text: "V. Mẹo nhớ nhanh (không cần công thức)" },
                    { type: "paragraph", text: "\"01 ngày tôi có thể ăn\":" },
                    {
                      type: "list",
                      items: [
                        "Dưới 250g thịt hoặc cá biển",
                        "4–5 quả trứng gà ta",
                        "Dưới 150g tinh bột",
                        "3–5 đĩa salad rau xanh",
                        "1–2 thìa MCT oil / dầu dừa / bơ tinh",
                        "Không ăn trái cây"
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Có thể quy đổi thức ăn theo vật chứa quen thuộc (bát, tô, chén) để dễ ước lượng — ví dụ: 1,5 bát cơm chất đạm, 1/2 bát tinh bột, 2 bát rau, 1 muỗng MCT oil, 1 tô rau. Nên lập sẵn bảng kế hoạch 3 bữa/ngày cho cả tuần để duy trì lâu dài."
                    },
                    { type: "heading", text: "VI. Chọn thực phẩm" },
                    {
                      type: "list",
                      items: [
                        { label: "Thịt & cá nguyên miếng", text: "Chọn phần ít mỡ nhất (thăn bò, thăn heo, ức gà, cá hồi, cá ngừ...). Không dùng xúc xích, thịt hộp, cá hộp chế biến công nghiệp." },
                        { label: "Trứng gà ta / nuôi thả", text: "2–4 quả/ngày, ưu tiên loại có Omega-3. Nên luộc lòng đào hoặc chiên ốp la thay vì chiên quá chín." },
                        { label: "Chất béo lành mạnh", text: "Cá hồi, cá ngừ, dầu cá, dầu olive nguyên chất, MCT oil, bơ, bơ tinh (ghee) — khoảng 5% DCI." },
                        { label: "Carb chính", text: "Ngoài gạo trắng có thể thay bằng diêm mạch, yến mạch, khoai lang, gạo lứt, quả hạch và hạt." },
                        { label: "Rau xanh", text: "Ưu tiên rau ít tinh bột: xà lách, cải xoăn, bông cải xanh, cà chua... Củ quả (cà rốt, củ cải, su hào) tính vào tinh bột, không tính vào rau xanh." },
                        { label: "Trái cây", text: "Không nên ăn nhiều vì dễ \"sình bụng\", khó tiêu. Nên ăn tráng miệng sau bữa chính, tránh nước ép riêng (mất chất xơ, calo cao) và tránh ăn quá no." }
                      ]
                    },
                    { type: "heading", text: "VII. Nên uống gì" },
                    {
                      type: "list",
                      items: [
                        { label: "Trà xanh", text: "Chống đói hiệu quả, giúp đầu óc tỉnh táo, tập trung." },
                        { label: "Cà phê không đường", text: "Tăng trao đổi chất, duy trì tỉnh táo — có thể thêm 1 thìa kem dừa hoặc bơ lạt, bơ tinh nếu cần. Không dùng nếu dị ứng caffeine." },
                        { label: "Nước khoáng", text: "Ưu tiên thay nước bình, nước vòi bằng nước có nhiều muối khoáng." },
                        { label: "Nước muối biển pha loãng", text: "Bù khoáng, đủ nước — pha 1–2g muối vào 3 lít nước uống hằng ngày." }
                      ]
                    },
                    { type: "heading", text: "VIII. Nên tránh gì" },
                    {
                      type: "list",
                      items: [
                        { label: "Thức ăn cay nóng", text: "Hại tiêu hóa, gan, thường chứa nhiều phụ gia thực phẩm." },
                        { label: "Chất điều vị nhân tạo", text: "Bột ngọt, tương ớt, mayonnaise... chứa đường hóa học và phụ gia không tốt." },
                        { label: "Các cây quả đậu", text: "Đậu nành, đậu đỏ, đậu phộng... chứa đường, khó tiêu, nhiều phytoestrogen có thể gây rối loạn hoóc-môn và tích mỡ." },
                        { label: "Dầu thực vật", text: "Dầu đậu nành, dầu hướng dương, bơ thực vật (margarine) — khi làm nóng dễ oxy hóa, sinh chất có hại." }
                      ]
                    },
                    {
                      type: "note",
                      text: "Đây là hướng dẫn nên tránh, hạn chế để khỏe mạnh và giảm cân, không phải sự cấm đoán tuyệt đối hay phải loại bỏ mãi mãi bất kỳ món ăn nào."
                    },
                    { type: "heading", text: "IX. Về chế độ ăn kiêng" },
                    {
                      type: "paragraph",
                      text: "Bất kỳ chế độ ăn kiêng nào theo được lâu dài đều có ích. Hầu hết các chế độ ăn kiêng chỉ giới hạn calo, tinh bột mà không giải quyết gốc rễ: cách chọn thực phẩm, cách sắp xếp lối sống và tập luyện đúng — nên dễ gây áp lực tinh thần, chán nản và khó duy trì."
                    },
                    {
                      type: "list",
                      items: [
                        "Muốn cơ thể khỏe mạnh → ăn thức ăn lành mạnh",
                        "Muốn giảm cân → làm theo các hướng dẫn ở trên",
                        "Muốn giảm mỡ tích trữ → ăn ít bữa lại để cơ thể có thời gian \"đốt mỡ\""
                      ]
                    },
                    { type: "heading", text: "X. Lịch trình một ngày" },
                    { type: "subheading", text: "Buổi sáng" },
                    {
                      type: "list",
                      items: [
                        { label: "Đo cân nặng", text: "Làm ngay sau khi thức dậy và vệ sinh cá nhân, chân trần, không mặc hoặc mặc ít quần áo khi cân." },
                        { label: "Pha bình nước \"đốt mỡ\"", text: "Mix #1: 1–2g muối biển + 1–2 thìa giấm táo hữu cơ + 2–3 lít nước. Mix #2: 1–2g muối + 3 lít nước suối." },
                        { label: "Đi bộ dưới ánh nắng", text: "10–15 phút ngoài trời có nắng, mang theo áo khoác và nước uống — giúp setup lại đồng hồ sinh học, khởi động trao đổi chất, \"đốt mỡ\"." },
                        { label: "Làm việc hàng ngày", text: "KHÔNG ăn sáng. Thực hiện các công việc thường ngày (đi học, đi làm, chăm sóc vườn...)." }
                      ]
                    },
                    {
                      type: "note",
                      text: "Nếu ăn sáng, lượng thức ăn (đặc biệt là mỡ) từ tối hôm trước còn chưa được cơ thể dùng hết. Ăn vào sẽ kích thích insulin, ngăn cơ thể \"đốt mỡ\" tích trữ để lấy năng lượng — điều này dễ xảy ra hơn với các hoạt động buổi sáng."
                    },
                    {
                      type: "paragraph",
                      text: "Trong 2–3 ngày đầu có thể thấy đói. Hãy uống nước hầm xương hoặc nước giấm táo hữu cơ pha muối biển, hoặc dùng các mẹo chống đói sau:"
                    },
                    {
                      type: "list",
                      items: [
                        { label: "Uống cà phê", text: "Giảm cảm giác đói, tăng trao đổi chất dẫn tới đốt nhiều calories hơn, tăng tỉnh táo và tập trung." },
                        { label: "Uống trà xanh", text: "Giảm ghrelin (hormone đói), tăng leptin (hormone no) khiến tinh thần thoải mái." },
                        { label: "Nhai kẹo gôm không đường", text: "Đánh lừa cảm giác đói bụng và tăng sự tập trung." },
                        { label: "Di chuyển nhiều hơn", text: "Ngồi lâu ảnh hưởng lưng dưới và tạo thói quen lười biếng, dễ căng thẳng dẫn tới đói bụng. Hãy đi lại nhiều hơn cùng ly cà phê/trà xanh ưa thích." }
                      ]
                    },
                    { type: "subheading", text: "Bữa ăn đầu tiên" },
                    {
                      type: "paragraph",
                      text: "Ăn sau 12 giờ kể từ bữa ăn cuối cùng hôm trước, theo đúng thành phần thức ăn đã thiết lập cho 1 ngày. Ăn bằng 1/2 hoặc ít hơn khẩu phần cả ngày."
                    },
                    {
                      type: "list",
                      items: [
                        "Ăn món ăn \"lành mạnh\" mà bạn thích",
                        "Uống nhiều nước trước, trong và sau khi ăn",
                        "Ăn thật nhiều rau xanh",
                        "Sau bữa ăn không nên ngồi xuống hoặc đi ngủ",
                        "Hãy đứng uống tiếp ly cà phê hoặc đi lại trò chuyện với bạn bè, đồng nghiệp"
                      ]
                    },
                    { type: "subheading", text: "Buổi tối" },
                    {
                      type: "paragraph",
                      text: "Bữa ăn thứ hai — ăn nốt khẩu phần còn lại của ngày."
                    },
                    {
                      type: "list",
                      items: [
                        "Không ăn quá trễ (sau 8 giờ tối) để tránh ảnh hưởng giấc ngủ",
                        "Ăn nhiều rau xanh hơn",
                        "Uống nước sau khi ăn xong",
                        "Ăn xong hãy rửa chén hoặc làm các công việc nhẹ nhàng"
                      ]
                    },
                    { type: "subheading", text: "Giấc ngủ" },
                    {
                      type: "list",
                      items: [
                        "Khi có dấu hiệu buồn ngủ (ngáp, mỏi mắt) hãy đi ngủ",
                        "Không dùng điện thoại, máy vi tính sau 11 giờ đêm",
                        "Có thể đọc sách",
                        "Đi ngủ sớm là một yếu tố tiên quyết cho việc giảm cân, khỏe mạnh"
                      ]
                    },
                    { type: "heading", text: "XI. Lưu ý ăn uống" },
                    { type: "subheading", text: "Chất đạm" },
                    {
                      type: "list",
                      items: [
                        "Ăn đủ chất đạm, chiếm 30–50% lượng thức ăn một ngày",
                        "2–3 quả trứng gà ta trong 1 tuần để có đủ chất đạm, vitamin và cholesterol cần thiết cho việc sản xuất hoóc-môn",
                        "Chất đạm từ thịt đỏ, cá biển, đậu nành không biến đổi gen có chất lượng tốt"
                      ]
                    },
                    { type: "subheading", text: "Chất béo lành mạnh" },
                    {
                      type: "list",
                      items: [
                        "Theo khuyến cáo của WHO, nên ăn 200g cá ngừ hoặc cá hồi 1 tuần để có đủ chất béo thiết yếu (Omega-3, Omega-6)",
                        "Cung cấp đủ Omega-3, Omega-6 từ nguồn tự nhiên: cá ngừ, cá hồi, MCT oil, trái bơ...",
                        "Có thể dùng viên dầu cá, liều lượng 1 viên = 1g (1000mg) mỗi ngày"
                      ]
                    },
                    {
                      type: "note",
                      text: "Các loại dầu thực vật chế biến công nghiệp (dầu đậu nành, dầu hướng dương, dầu bắp, dầu hạt cải, dầu mè, dầu cám gạo...) chứa chất béo chuyển đổi (trans fat) có hại và hàm lượng Omega-6 rất cao so với Omega-3, không tốt cho sức khỏe. Hãy chọn dầu ăn, chất béo tự nhiên như dầu dừa, dầu olive, dầu cọ, bơ sữa — tránh dầu thực vật, đặc biệt là lạm dụng."
                    },
                    { type: "subheading", text: "Tinh bột lành mạnh" },
                    {
                      type: "list",
                      items: [
                        "Ăn các loại tinh bột lành mạnh đến từ ngũ cốc nguyên hạt, không qua chế biến",
                        "Hạn chế ăn khoai tây chiên, snack, bỏng ngô",
                        "Chọn thực phẩm làm từ bột mì hay lúa mạch có dòng chữ \"Gluten-free\" và tốt nhất nên hạn chế ăn"
                      ]
                    },
                    { type: "subheading", text: "Vitamin và khoáng chất" },
                    {
                      type: "list",
                      items: [
                        "Cung cấp đủ các vitamin A, B, C, D, E, K bằng bữa ăn có đầy đủ chất đạm, chất béo lành mạnh, rau xanh và tinh bột lành mạnh",
                        "Vitamin D3, Vitamin E là hai loại thường bị thiếu hụt ở hầu hết người lớn — có thể dùng thực phẩm bổ sung (supplement) để bù đắp",
                        "Có thể tra cứu RDA (Recommended Daily Allowances) hay RAI (Recommended Adequate Intake) trên các trang của FDA, WHO..."
                      ]
                    },
                    { type: "subheading", text: "Nước và các chất điện giải" },
                    {
                      type: "list",
                      items: [
                        "3/4 cơ thể con người là dung dịch nước, các chất điện giải và rất nhiều thứ khác",
                        "Cung cấp 2–3 lít nước một ngày để giữ sức khỏe",
                        "Ưu tiên nước suối, nước khoáng thay vì nước máy/giếng chưa qua xử lý"
                      ]
                    },
                    { type: "heading", text: "XII. Các chỉ số mục tiêu" },
                    { type: "subheading", text: "% Body fat" },
                    {
                      type: "paragraph",
                      text: "Kết thúc phase #2, bạn có thể đạt được mức % Body fat khỏe mạnh:"
                    },
                    {
                      type: "list",
                      items: [
                        { label: "Thiết yếu", text: "Nam 2–5% · Nữ 10–13%" },
                        { label: "VĐV điền kinh", text: "Nam 6–13% · Nữ 14–20%" },
                        { label: "Fitness", text: "Nam 14–17% · Nữ 21–24%" },
                        { label: "Trung bình", text: "Nam 18–24% · Nữ 25–31%" },
                        { label: "Béo phì", text: "Nam >25% · Nữ >32%" }
                      ]
                    },
                    { type: "subheading", text: "FFMI (Fat Free Mass Index)" },
                    {
                      type: "list",
                      items: [
                        "Lưu ý sự tăng giảm của FFMI — đến phase #2, việc tập luyện cơ bắp có thể khiến FFMI duy trì hoặc tăng nhẹ, nhưng quan trọng là so sánh tương quan với % Body fat (mục tiêu chính của chương trình)",
                        "FFMI ở mức trên trung bình kèm % Body fat khỏe mạnh là đích đến cuối cùng"
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Hãy cập nhật Fitness Profile và các ghi chú thường xuyên để theo dõi sự thay đổi của các chỉ số thể chất quan trọng khác."
                    }
                  ]
                }
              ]
            },
            "Tập luyện",
            "Nghỉ ngơi"
          ]
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
          title: "Gia đình lớn",
          items: ["Bố mẹ - Nội", "Bố mẹ - Ngoại", "Họ hàng thân thiết", "Họ hàng không thân thiết"]
        },
        {
          title: "Gia đình nhỏ",
          items: ["Vợ", "Con"]
        }
      ]
    }
  ]
};
