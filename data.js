// Dữ liệu bản đồ cuộc đời — chỉnh sửa nội dung ở đây, không cần đụng tới style.css / app.js
//
// Cấu trúc kiểu sách 3 tầng: Phần -> Mục nhỏ -> Mục con
//   - part.sections   = các Mục nhỏ của Phần đó
//   - section.items   = các Mục con của Mục nhỏ đó
//   - section.detail  = (tuỳ chọn) khi Mục nhỏ không có Mục con mà có nội dung mô tả
//                        trực tiếp — mảng { label, text }, hiển thị dạng tab chi tiết
//                        (vd Mức độ / Vai Trò / Hành động) thay vì thông báo "chưa có nội dung"
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
                },
                {
                  title: "Chu kỳ sinh học đào thải & hấp thụ",
                  body: [
                    {
                      type: "paragraph",
                      text: "Mỗi cơ quan trong cơ thể có một khung giờ hoạt động mạnh nhất trong ngày. Vòng tròn dưới đây tóm tắt chu kỳ 24 giờ đó — theo chiều kim đồng hồ, mỗi múi tương ứng 2 giờ."
                    },
                    {
                      type: "clock",
                      segments: [
                        { time: "11:00–13:00", lines: ["Tim,", "não bộ"] },
                        { time: "13:00–15:00", lines: ["Ruột non"] },
                        { time: "15:00–17:00", lines: ["Bàng quang"] },
                        { time: "17:00–19:00", lines: ["Thận"] },
                        { time: "19:00–21:00", lines: ["Hệ", "tim mạch"] },
                        { time: "21:00–23:00", lines: ["Hệ miễn", "dịch"] },
                        { time: "23:00–01:00", lines: ["Túi mật,", "ống dẫn mật"] },
                        { time: "01:00–03:00", lines: ["Gan"] },
                        { time: "03:00–05:00", lines: ["Phổi"] },
                        { time: "05:00–07:00", lines: ["Ruột già"] },
                        { time: "07:00–09:00", lines: ["Dạ dày"] },
                        { time: "09:00–11:00", lines: ["Tùy tạng", "và lá lách"] }
                      ]
                    },
                    { type: "heading", text: "Chi tiết theo khung giờ" },
                    {
                      type: "list",
                      items: [
                        { label: "00:00 - 04:00", text: "Cơ thể tổng hợp tế bào máu mới từ tủy xương." },
                        { label: "01:00 - 03:00", text: "Gan hoạt động mạnh nhất." },
                        { label: "03:00 - 05:00", text: "Phổi hoạt động mạnh nhất." },
                        { label: "05:00 - 07:00", text: "Ruột già hoạt động mạnh nhất." },
                        { label: "07:00 - 09:00", text: "Dạ dày hấp thu tốt nhất." },
                        { label: "09:00 - 11:00", text: "Tùy tạng và lá lách hoạt động mạnh nhất." },
                        { label: "11:00 - 13:00", text: "Tim và não bộ hoạt động mạnh nhất." },
                        { label: "13:00 - 15:00", text: "Ruột non hấp thu mạnh nhất." },
                        { label: "15:00 - 17:00", text: "Bàng quang hoạt động mạnh nhất." },
                        { label: "17:00 - 19:00", text: "Thận hoạt động mạnh nhất." },
                        { label: "19:00 trở đi", text: "Cần giảm sự hấp thu và gia tăng sự thanh lọc đào thải." },
                        { label: "19:00 - 21:00", text: "Làm sạch hệ tuần hoàn, tim mạch." },
                        { label: "21:00 - 23:00", text: "Hệ thống miễn dịch hoạt động mạnh nhất." },
                        { label: "23:00 - 01:00", text: "Túi mật, ống dẫn mật hoạt động mạnh nhất." }
                      ]
                    }
                  ]
                },
                {
                  title: "Bảng tiêu chuẩn ăn chay thực dưỡng",
                  body: [
                    { type: "heading", text: "Tỷ lệ thành phần bữa ăn" },
                    {
                      type: "list",
                      items: [
                        { label: "Ngũ cốc", text: "50–60% khẩu phần." },
                        { label: "Rau củ quả", text: "25–30% khẩu phần." },
                        { label: "Súp (miso súp)", text: "5% khẩu phần." },
                        { label: "Các loại đậu và rong biển", text: "5–10% khẩu phần." }
                      ]
                    },
                    { type: "subheading", text: "Ngũ cốc" },
                    {
                      type: "list",
                      items: [
                        { label: "Thường ngày", text: "Gạo lứt, đại mạch, hạt kê, hạt bắp, lúa mì, lúa mạch, lúa mạch đen, kiều mạch..." },
                        { label: "Thỉnh thoảng", text: "Gạo nếp lứt, mì sợi nguyên cám không men, bánh mì nguyên cám, yến mạch cắt nhỏ, yến mạch cán, bột bắp, hạt pastar..." }
                      ]
                    },
                    { type: "subheading", text: "Rau củ quả" },
                    {
                      type: "list",
                      items: [
                        { label: "Thường ngày", text: "Rau cải xoăn, cải xoong, cải rổ, cải thảo, hành lá, bông cải, súp lơ, bắp cải, hành tây, bí, cà rốt, củ cải, củ cải trắng, củ sen, ngưu bàng..." },
                        { label: "Thỉnh thoảng", text: "Cần tây, lá thơm, dưa leo, nấm, xà lách, đậu nành, đậu tây..." }
                      ]
                    },
                    { type: "subheading", text: "Các loại đậu" },
                    {
                      type: "list",
                      items: [
                        { label: "Thường ngày", text: "Đậu đỏ, đậu răng ngựa, đậu lăng, đậu nành đen." },
                        { label: "Thỉnh thoảng", text: "Đậu nành, đậu thận, đậu Pinto, đậu khô nguyên cám, đậu bơ, đậu/cám, các sản phẩm từ đậu như đậu hủ, đậu hủ khô..." }
                      ]
                    },
                    { type: "subheading", text: "Rong biển" },
                    {
                      type: "paragraph",
                      text: "Tảo bẹ, rong biển khô, rong biển Nori, rong biển đen, rong biển sợi đen, rong biển Dulse, rong biển tím, đông sương, tảo nâu..."
                    },
                    { type: "subheading", text: "Các loại thực phẩm khác" },
                    {
                      type: "paragraph",
                      text: "Cá thịt trắng, các loại hạt rang, đậu phộng, các thức uống, chất tạo ngọt tự nhiên (mật lúa mạch hoặc siro gạo), các loại trái cây khô, tươi hoặc tự trồng."
                    },
                    { type: "heading", text: "Nhịn ăn dài ngày & phương pháp dưỡng sinh Ohsawa" },
                    {
                      type: "note",
                      text: "Nếu cần nhịn ăn dài ngày để cải thiện sức khỏe mà cơ thể đang quá suy nhược, nên thực hiện làm nhiều đợt ngắn ngày. Trong thời gian chuyển tiếp giữa các đợt nên ăn uống theo phương pháp dưỡng sinh (hợp lý và cân bằng Âm – Dương) kết hợp tập luyện để nâng thể trạng, tốt nhất là ăn theo công thức số 7 hoặc số 6."
                    },
                    { type: "subheading", text: "10 công thức ăn uống (phương pháp dưỡng sinh Ohsawa)" },
                    {
                      type: "table",
                      headers: ["Công thức", "Ngũ cốc (%)", "Rau củ (%)", "Súp (%)", "Thịt (%)", "Trái cây (%)", "Tráng miệng (%)"],
                      rows: [
                        ["7", "100", "", "", "", "", ""],
                        ["6", "90", "10", "", "", "", ""],
                        ["5", "80", "20", "", "", "", ""],
                        ["4", "70", "20", "10", "", "", ""],
                        ["3", "60", "30", "10", "", "", ""],
                        ["2", "50", "30", "10", "10", "", ""],
                        ["1", "40", "30", "10", "20", "", ""],
                        ["-1", "30", "30", "10", "20", "10", ""],
                        ["-2", "20", "30", "10", "25", "10", "5"],
                        ["-3", "10", "30", "10", "30", "15", "5"]
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Thức uống: uống vừa đủ, càng ít càng tốt. Trích: Minh triết trong ăn uống của phương Đông – Ngô Đức Vượng."
                    },
                    { type: "heading", text: "Công thức nước chanh mật ong mỗi sáng" },
                    {
                      type: "table",
                      headers: ["Nguyên liệu", "Tỉ lệ"],
                      rows: [
                        ["Chanh tươi (dùng cả vỏ cắt nhỏ hoặc ép nguyên trái, lấy cả hạt)", "1/2 trái"],
                        ["Mật ong (hoặc đường tự nhiên: đường thốt nốt, đường mía, mật mía...)", "Vừa đủ ngọt"],
                        ["Muối (muối hạt rang, muối hồng, muối hầm...)", "2–3 hạt"],
                        ["Gừng tươi (nên nướng hoặc nấu cùng nước để dương hoá)", "2–3 lát"],
                        ["Nước ấm (tốt nhất là nước kiềm)", "130ml"]
                      ]
                    },
                    {
                      type: "note",
                      text: "Nước chanh mật ong cân bằng âm dương ngũ hành sẽ có 5 vị (đắng, cay, mặn, chua, ngọt). Nên uống trước bữa sáng 30 phút, uống chậm và nhai kỹ tất cả gừng và vỏ chanh. Công thức có thể điều chỉnh theo cảm nhận mỗi người."
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
          items: [
            {
              title: "Học (Nạp kiến thức)",
              articles: [
                {
                  title: "Kỹ Năng Tự Học",
                  body: [
                    {
                      type: "paragraph",
                      text: "Chuyên đề 05 — Phương pháp Tự Học (ghi chép ngày 22-03-2025)."
                    },
                    { type: "heading", text: "I. Tổng quan" },
                    { type: "subheading", text: "1. Kiến thức tiền đề" },
                    {
                      type: "list",
                      items: [
                        { label: "Thành công", text: "Gồm 3 yếu tố: mục tiêu, tự phát triển, quan hệ với người khác." }
                      ]
                    },
                    { type: "paragraph", text: "Tự phát triển là một chuỗi quá trình:" },
                    {
                      type: "list",
                      items: [
                        "Tự phát triển",
                        "Người khác trang bị cho ta (đệ tử)",
                        "Người khác giúp đỡ (bạn)",
                        "Người khác thuê (làm thuê)"
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Tự học là một thành phần của \"tự phát triển\" — mà tự phát triển chính là sự vĩ đại của cả chuỗi phát triển đó."
                    },
                    {
                      type: "paragraph",
                      text: "Kết quả tự học cần đạt tối thiểu mức 3 trên cả 3 cột (3-3-3):"
                    },
                    {
                      type: "table",
                      headers: ["Kiến thức", "Kỹ Năng", "Thái độ"],
                      rows: [
                        ["1. Nhớ", "1. Bắt chước", "1. Nghe"],
                        ["2. Hiểu", "2. Làm được", "2. Đáp ứng"],
                        ["3. Vận dụng", "3. Thành thạo", "3. Có quan điểm riêng"],
                        ["4. Phân tích", "4. Phối hợp", "4. Chi phối quan điểm/giá trị"],
                        ["5. Tổng hợp/đánh giá", "5. Sáng tạo", "5. Đặc trưng hóa"],
                        ["6. Sáng tạo (Trí tuệ)", "—", "—"]
                      ]
                    },
                    {
                      type: "note",
                      text: "Mục tiêu tối thiểu là đạt mức 3 (3-3-3) trên cả 3 cột."
                    },
                    { type: "subheading", text: "4 mức người hướng dẫn" },
                    {
                      type: "list",
                      items: [
                        "Loại 1 — Nói cho ta hiểu: thầy bình thường.",
                        "Loại 2 — Nói mà ta bị thuyết phục: thầy giỏi.",
                        "Loại 3 — Nói có minh chứng giúp ta hưng phấn: thầy xuất sắc.",
                        "Loại 4 — Khơi cho ta động lực và cảm hứng: thầy thiên tài."
                      ]
                    },
                    { type: "subheading", text: "5 người thầy của bạn" },
                    { type: "paragraph", text: "Xét theo góc độ người thầy, có 5 nguồn học sau đây:" },
                    {
                      type: "list",
                      items: [
                        "Thầy trên bục giảng",
                        "Thầy Sách & Internet",
                        "Thầy là bạn bè",
                        "Thầy là chính mình (tự học)",
                        "Thầy là thần tượng"
                      ]
                    },
                    {
                      type: "note",
                      text: "Rất tiếc trong thực tế không phải ai cũng tự nhiên biết cách học — mỗi người cần tự tìm ra kỹ năng Tự Học riêng phù hợp với mình, ngoài 4 nguồn thầy còn lại."
                    },
                    {
                      type: "paragraph",
                      text: "Bản chất của tự học là điều chỉnh thông tin mình nhận được sao cho phù hợp với phong cách của chính mình. Khi điều chỉnh đúng, người học sẽ rất dễ tiếp cận và vận dụng ngay được kiến thức mới."
                    },
                    { type: "subheading", text: "3. Phong cách học" },
                    {
                      type: "paragraph",
                      text: "Mỗi người có phong cách học khác nhau, chia theo cách xử lý và tiếp nhận thông tin cá nhân:"
                    },
                    {
                      type: "list",
                      items: [
                        { label: "Trực quan", text: "Học qua tranh ảnh, sơ đồ tư duy, hình vẽ." },
                        { label: "Ngôn ngữ", text: "Đọc to, viết ra." },
                        { label: "Logic hóa", text: "Sắp xếp, suy luận theo trình tự, biến kiến thức thành tư duy của riêng mình." },
                        { label: "Thính giác", text: "Nghe giảng." },
                        { label: "Vận động", text: "Vận động thể chất, đóng vai, thực hành trực tiếp." }
                      ]
                    },
                    {
                      type: "note",
                      text: "Biết rõ phong cách học của bản thân giúp chọn đúng cách tiếp nhận kiến thức, học nhanh và nhớ lâu hơn."
                    },
                    { type: "heading", text: "II. Các bí quyết chuẩn bị cho việc Học (điều kiện cần)" },
                    {
                      type: "list",
                      items: [
                        "Động lực học",
                        "Tạo thói quen học chủ động",
                        "Có trách nhiệm với việc tự học",
                        "Học tập độc lập",
                        "Đối phó với căng thẳng",
                        "Không gian học",
                        "Quản trị thời gian"
                      ]
                    },
                    { type: "heading", text: "III. Các kỹ năng học (điều kiện đủ)" },
                    { type: "subheading", text: "1. Kỹ năng tìm kiếm thông tin" },
                    {
                      type: "list",
                      items: [
                        "Mọi thông tin tốt nhất đều được tìm thấy trong sách in của các thư viện lớn.",
                        "Tìm kiếm tài liệu bổ sung cho cuốn sách chính."
                      ]
                    },
                    { type: "subheading", text: "2. Kỹ năng đọc" },
                    {
                      type: "list",
                      items: [
                        { label: "Đọc thông minh", text: "Đọc lướt để nắm sơ qua nội dung, xem có phù hợp không." },
                        { label: "Đọc chủ động", text: "Tìm đọc những thông tin mình muốn." },
                        { label: "Kiểm soát tốc độ đọc", text: "Đọc lướt thì nhanh, đọc hiểu thì chậm." }
                      ]
                    },
                    { type: "subheading", text: "3. Kỹ năng nghe chủ động" },
                    {
                      type: "list",
                      items: [
                        "Nghe tập trung, nắm được các ý chính.",
                        "Hỏi lại người thầy để khui kiến thức."
                      ]
                    },
                    { type: "subheading", text: "4. Kỹ năng ghi chép" },
                    { type: "subheading", text: "5. Kỹ năng viết" },
                    { type: "heading", text: "Sự lặp lại" },
                    {
                      type: "paragraph",
                      text: "Lặp lại ngay lập tức, lặp lại liên tục, lặp lại đều đặn — đó là chìa khóa của việc tự học."
                    }
                  ]
                }
              ]
            },
            "Tư Duy (Dùng kiến thức)"
          ]
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
              label: "Vai Trò",
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
