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
          items: [
            {
              title: "Loại bỏ 6 độc tố của Tâm Hồn",
              articles: [
                {
                  title: "Loại bỏ 6 độc tố của Tâm Hồn",
                  body: [
                {
                  type: "paragraph",
                  text: "Trong Phật giáo, lục độc (6 độc tố) là 6 trạng thái tâm bất thiện gốc rễ, làm ô nhiễm tâm hồn và là nguyên nhân sâu xa của mọi khổ đau: Tham, Sân, Si, Mạn, Nghi, Ác kiến."
                },
                { type: "heading", text: "I. Lục độc là gì?" },
                {
                  type: "list",
                  items: [
                    { label: "Tham", text: "Lòng ham muốn, chiếm giữ quá mức về vật chất, danh vọng, tình cảm." },
                    { label: "Sân", text: "Nóng giận, oán ghét, thù hận khi không được như ý." },
                    { label: "Si", text: "U mê, thiếu sáng suốt, không thấy rõ bản chất sự vật (vô minh)." },
                    { label: "Mạn", text: "Ngã mạn, tự cao, xem thường người khác." },
                    { label: "Nghi", text: "Hoài nghi, thiếu niềm tin đúng đắn vào chân lý, nhân quả." },
                    { label: "Ác kiến", text: "Tà kiến — nhận thức, quan điểm sai lệch về đạo lý, nhân quả." }
                  ]
                },
                { type: "heading", text: "II. Ảnh hưởng đến tâm hồn" },
                {
                  type: "list",
                  items: [
                    { label: "Che mờ trí tuệ", text: "Tâm mất sáng suốt, khó phân biệt đúng sai." },
                    { label: "Tạo nghiệp bất thiện", text: "Dẫn tới hành động, lời nói gây khổ cho mình và người khác." },
                    { label: "Mất bình an nội tâm", text: "Tâm luôn xáo động, lo âu, bất mãn, khó có hạnh phúc thật sự." },
                    { label: "Phá vỡ các mối quan hệ", text: "Gây xung đột, xa cách với người xung quanh." }
                  ]
                },
                {
                  type: "note",
                  text: "Lục độc không tồn tại độc lập — chúng nương vào nhau mà sinh khởi, gốc rễ sâu xa nhất là Si (vô minh)."
                },
                { type: "heading", text: "III. Cách loại bỏ" },
                {
                  type: "paragraph",
                  text: "Con đường loại bỏ lục độc trong Phật giáo xoay quanh Tam học: Giới – Định – Tuệ, kết hợp tu tập riêng cho từng độc tố."
                },
                {
                  type: "table",
                  headers: ["Độc tố", "Cách loại bỏ"],
                  rows: [
                    ["Tham", "Tập bố thí, buông xả; quán chiếu vô thường để bớt bám chấp."],
                    ["Sân", "Tu tập từ bi, nhẫn nhịn; quán chiếu để hiểu và cảm thông thay vì oán ghét."],
                    ["Si", "Học và thực hành giáo lý (văn – tư – tu) để mở trí tuệ."],
                    ["Mạn", "Giữ tâm khiêm hạ, thấy rõ ai cũng có sở đoản để bớt tự cao."],
                    ["Nghi", "Tìm hiểu giáo lý rõ ràng, thực hành và tự chứng nghiệm để có chánh tín."],
                    ["Ác kiến", "Học chánh kiến (nhân quả, vô thường, vô ngã) để sửa nhận thức sai lệch."]
                  ]
                },
                {
                  type: "note",
                  text: "Gốc rễ là tu tập Chánh niệm và Trí tuệ — khi thấy rõ bản chất vô thường, vô ngã của vạn pháp, lục độc sẽ tự nhiên suy yếu."
                }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "Trí Tuệ",
          flagged: true,
          items: [
            {
              title: "Học (hiểu mình)",
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
            {
              title: "Tư duy (Hiểu người)",
              articles: [
                {
                  title: "Kỹ Năng TƯ DUY",
                  body: [
                    {
                      type: "paragraph",
                      text: "Bài 01 — Tư Duy (ghi chép ngày 25-11-2023)."
                    },
                    { type: "heading", text: "Tổng quan" },
                    { type: "subheading", text: "Khái niệm" },
                    {
                      type: "list",
                      items: [
                        "Tư duy là hoạt động của tinh thần.",
                        "Thông minh là bản năng trời phú.",
                        "Thông minh giúp tư duy nhanh hơn chứ không thay thế được tư duy.",
                        "Tư duy chính là nhận thức ở cấp độ cao."
                      ]
                    },
                    { type: "paragraph", text: "Nhận thức có 6 cấp độ:" },
                    {
                      type: "list",
                      items: [
                        { label: "Cấp 1: Nhớ", text: "Nhắc lại được thông tin." },
                        { label: "Cấp 2: Hiểu", text: "Diễn giải được thông tin." },
                        { label: "Cấp 3: Vận dụng", text: "Đưa thông tin đã hiểu vào một tình huống thực tiễn." },
                        { label: "Cấp 4: Phân tích", text: "Chia nhỏ thông tin rồi chỉ ra mối liên hệ giữa chúng, so sánh, đối chiếu, lựa chọn rồi mới áp dụng." },
                        { label: "Cấp 5: Tổng hợp (Đánh giá)", text: "Đưa ra nhận định riêng dựa trên việc phân tích toàn bộ thông tin." },
                        { label: "Cấp 6: Sáng tạo", text: "Nhìn thông tin ở một hướng khác để đưa ra giải pháp hoàn toàn khác, tạo ra sự khác biệt." }
                      ]
                    },
                    {
                      type: "note",
                      text: "Nhận thức từ cấp độ 4 trở lên thì người ta gọi là tư duy."
                    },
                    { type: "subheading", text: "Nhận thức" },
                    {
                      type: "paragraph",
                      text: "Nhận thức là những hành động để tiếp thu kiến thức thông qua suy nghĩ, kinh nghiệm và các giác quan. Nhận thức chia làm 2 loại:"
                    },
                    {
                      type: "list",
                      items: [
                        { label: "Nhận thức cảm tính", text: "Cảm giác, Tri giác, Biểu tượng." },
                        { label: "Nhận thức lý tính", text: "Công cụ khái niệm, Công cụ phán đoán, Công cụ suy luận." }
                      ]
                    },
                    {
                      type: "note",
                      text: "Khi nhận thức chuyển sang lý tính thì khái niệm tư duy xuất hiện."
                    },
                    { type: "heading", text: "Các phương pháp tư duy" },
                    { type: "subheading", text: "1. Tư duy mà không tư duy gì cả" },
                    { type: "paragraph", text: "Tức là không có tư duy." },
                    { type: "subheading", text: "2. Tư duy kinh nghiệm" },
                    { type: "paragraph", text: "Đây là nguyên liệu của tư duy logic và tư duy sáng tạo." },
                    { type: "subheading", text: "3. Tư duy logic" },
                    { type: "paragraph", text: "Suy luận để đưa ra giải pháp." },
                    { type: "subheading", text: "4. Tư duy phản biện (tư duy logic bậc cao hay tư duy phân tích)" },
                    {
                      type: "paragraph",
                      text: "Nhìn vấn đề ở góc nhìn khác, độc đáo hơn, sáng tỏ hơn, rõ ràng và tỉ mỉ hơn. Nó là tư duy: Tại sao của Tại sao của Tại sao."
                    },
                    { type: "subheading", text: "5. Tư duy sáng tạo" },
                    {
                      type: "paragraph",
                      text: "Xét sự vật theo góc nhìn hoàn toàn mới, vượt ra khỏi mọi quy chuẩn, vượt ra khỏi mọi cái mình hoặc ai đó từng làm."
                    },
                    { type: "paragraph", italic: true, text: "7 nguyên tắc rèn luyện:" },
                    {
                      type: "list",
                      items: [
                        "Nhìn vấn đề khác đi mỗi ngày.",
                        "Luôn gắn mọi chuyện với thực tế.",
                        "Tập đi theo hướng khác, không đi theo hướng cũ.",
                        "Thư giãn thật tối đa khi mình sáng tạo.",
                        "Tập gạt mọi khó khăn và lo lắng sang một bên.",
                        "Bỏ tư tưởng ỷ lại.",
                        "Tập chọn góc nhìn."
                      ]
                    },
                    { type: "subheading", text: "6. Tư duy đột phá" },
                    {
                      type: "paragraph",
                      text: "Đây là tư duy bậc cao của tư duy sáng tạo. Nó là sáng tạo, sáng tạo của sáng tạo — nghĩa là tạo ra sự khác biệt, khác biệt của khác biệt."
                    },
                    { type: "paragraph", italic: true, text: "7 nguyên tắc của tư duy đột phá:" },
                    {
                      type: "list",
                      items: [
                        { label: "1. Nguyên tắc sự khác nhau độc đáo", text: "Mỗi vấn đề luôn khác nhau và khác nhau rất độc đáo." },
                        { label: "2. Nguyên tắc mục đích của mục đích", text: "Hãy liên tục mở rộng mục đích của mình, bỏ sức vào mục đích cần đạt chứ đừng tập trung vào mục tiêu trước mắt." },
                        { label: "3. Nguyên tắc giải pháp dài hạn", text: "Giải pháp hôm nay phải đảm bảo được sự thay đổi của môi trường tương lai, dùng cho 3-5 năm nữa." },
                        { label: "4. Nguyên tắc thiết lập hệ thống", text: "Giải pháp phải giải quyết được mọi biến số (nhân tố liên quan tới quyết định) một cách hài hoà." },
                        { label: "5. Nguyên tắc thu thập số liệu", text: "Thu thập thông tin cần thiết để quyết định tung giải pháp, chứ không phải thật nhiều thông tin." },
                        { label: "6. Nguyên tắc lôi kéo người tham gia", text: "Con người xung quanh bạn là nguồn thông tin lớn nhất — hãy cho họ tham gia, loại bỏ sự ngạo mạn của kẻ lãnh đạo." },
                        { label: "7. Nguyên tắc cải tiến liên tục", text: "Cải tiến việc đang làm, liên tục huấn luyện, lên kế hoạch dự phòng và xác lập tiêu chí cụ thể để đo hiệu quả." }
                      ]
                    },
                    {
                      type: "paragraph",
                      italic: true,
                      text: "1. Sự khác nhau độc đáo — tuyệt đối không tập trung phát minh lại cái bánh xe: bỏ ngay \"điều này đã đúng với tôi trong quá khứ\", \"đây là cách chúng tôi đang làm\", \"đối thủ áp dụng nó, ta áp dụng nhanh hơn sẽ thắng\". Hãy tìm sự khác biệt độc đáo của vấn đề, đặt câu hỏi: mục đích cuối cùng để xử lý vấn đề là gì, và điều kiện đi kèm để thực hiện nó."
                    },
                    {
                      type: "paragraph",
                      italic: true,
                      text: "2. Mục đích của mục đích — xác định nhu cầu và mục đích của người liên quan; mục đích tạo ra cơ hội chứ không phải để giải quyết vấn đề; liên tục tự hỏi: liệt kê hết mục đích chưa, đã mở chưa, mục đích lớn có xuất hiện không."
                    },
                    {
                      type: "paragraph",
                      italic: true,
                      text: "3. Giải pháp dài hạn — chỉ có nghĩ về tương lai thì mới có tính đột phá; mọi quy trình phải gắn với yếu tố tương lai. Cách tìm viễn cảnh tương lai: dùng kế hoạch viễn tưởng, phương pháp hình dung, viết ra kịch bản, đặt giả thiết."
                    },
                    {
                      type: "paragraph",
                      italic: true,
                      text: "4. Thiết lập hệ thống — hệ thống là một nhóm các nhân tố tồn tại liên quan tới một quyết định; cần thiết lập một ma trận hệ thống để nhìn hết các biến số."
                    },
                    {
                      type: "paragraph",
                      italic: true,
                      text: "5. Thu thập số liệu — thông tin phải có ý nghĩa cho vấn đề ở thì hiện tại và cần độ chính xác cao (thực tế gần như không thể)."
                    },
                    {
                      type: "paragraph",
                      italic: true,
                      text: "6. Lôi kéo người tham gia — một mình bạn không thể lấp hết các lỗ hổng kiến thức và chi tiết kỹ thuật; họ chính là người lên ý tưởng chứ không phải bạn. Tạo các cuộc nói chuyện không phải là họp (cà phê, ăn trưa...), liên tục khen họ, tìm mọi cách để họ tham gia."
                    },
                    {
                      type: "paragraph",
                      italic: true,
                      text: "7. Cải tiến liên tục — cải tiến cho lần tiếp theo, thậm chí thay đổi toàn bộ cho lần sau; sơ kết các hoạt động liên tục."
                    }
                  ]
                }
              ]
            },
            "Quy luật (Hiểu bối cảnh)"
          ]
        }
      ]
    },
    {
      id: "friends",
      label: "Mối quan hệ",
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
          items: [
            {
              title: "Cố Vấn",
              articles: [
                {
                  title: "Cố Vấn",
                  body: [
                    { type: "heading", text: "Những điều cần biết trước khi giúp đỡ người khác" },
                    {
                      type: "paragraph",
                      text: "Để có thành công lớn bắt buộc phải làm hành vi cho đi dưới dạng giúp đỡ hoặc trang bị. Hãy giúp đỡ người nhà, người có năng lực, những người bạn (đã chọn lọc theo tiêu chuẩn) trong cuộc đời này."
                    },
                    { type: "paragraph", text: "Lý do người ta không giúp đỡ người khác:" },
                    { type: "subheading", text: "1. Vì người ta không hiểu chính mình" },
                    {
                      type: "list",
                      items: [
                        { label: "Họ thiếu tự tin", text: "Người tự ti cho rằng mình là người tốt nếu mình không làm tổn thương người khác. Nhưng người thành công thì làm ngược lại, họ sẵn sàng giúp đỡ người khác với một cái giá là sự tổn thương nào đó." },
                        { label: "Vì cái tôi của họ", text: "Cái tôi của họ quá to. Họ nghĩ rằng những người khác tồn tại là để phục vụ họ, chứ họ không có nghĩa vụ ngược lại." },
                        { label: "Họ không có khả năng nhận thức", text: "Người lãnh đạo không thấy rằng bất cứ ai cũng đều mang trong mình hạt giống của thành công và họ cũng vậy. Khi nhận thức được điều này, lập tức người ta chỉ cần chăm sóc hạt giống đó, đồng thời tưới nước cho hạt giống của kẻ khác." },
                        { label: "Họ quan niệm về thành công bị sai", text: "Thành công chỉ được gọi là thành công nếu: khi bạn biết mục đích của chính bạn; phát huy được tiềm năng tối đa của mình; biết cách gieo hạt và làm cho họ phát huy được tiềm năng." },
                        { label: "Họ bị thiếu đào tạo", text: "Một số người không muốn giúp người khác vì họ rất muốn giúp nhưng không biết giúp thế nào, vì họ thiếu đào tạo về nghề giúp, đặc biệt là phải giúp để họ thành người." }
                      ]
                    },
                    { type: "subheading", text: "2. Vì người ta không hiểu người khác" },
                    {
                      type: "list",
                      items: [
                        "Việc giúp đỡ người khác giúp họ đẩy hết tiềm năng ra để đạt tới cái đích mà họ muốn để thành công.",
                        "Nghĩa là việc giúp đỡ người khác nó lớn hơn rất nhiều so với việc cung cấp kỹ năng cho họ, đó là giúp họ thành người.",
                        "Do đó linh hồn của hoạt động giúp đỡ là sự hiểu biết về con người chứ không phải là giỏi giang về chuyên môn."
                      ]
                    },
                    { type: "paragraph", text: "Hiểu con người là:" },
                    {
                      type: "list",
                      items: [
                        "Ai cũng muốn cảm thấy bản thân mình là người có giá trị. Một người sẽ không thành công nếu họ nghi ngờ bản thân mình. Ngược lại, khi họ nhận thức được họ có giá trị lúc đó là họ ở trạng thái sắp thành công. Hãy gia tăng lòng tự trọng cho họ, cho họ thấy họ quan trọng và có ích.",
                        "Ai cũng đều cần sự cho đi và đáp lại ở góc độ \"khích lệ\". Hãy cho họ sự đồng thuận thay vì chỉ trích. Hãy là kẻ ủng hộ trung thành nhất của họ.",
                        "Con người luôn có động lực hành động một cách tự nhiên. Hãy cho họ động lực bằng cách thúc đẩy họ và xoá toàn bộ cho họ các thất bại.",
                        "Trước khi tin vào khả năng lãnh đạo của một người, thì mọi người phải tin tưởng người đó trước đã. Do đó, hãy dùng kỹ năng cho họ tin mình đã.",
                        "Họ đã có động lực, đã tin tưởng mình, đã có tự trọng, thì bây giờ phải cung cấp cho họ một nguồn lực cần thiết: tài liệu, sách vở, băng đĩa, các mối quan hệ..."
                      ]
                    },
                    { type: "paragraph", text: "Hỗ trợ họ một số trở ngại trong quá trình vận dụng:" },
                    {
                      type: "list",
                      items: [
                        "Trở ngại vì hướng đi: sau khi được giúp đỡ về kỹ năng công việc, họ trở nên giỏi hơn thì lập tức họ đi sai đường.",
                        "Quan liêu: môi trường tệ hại, tệ hại nhất là yếu tố quan liêu.",
                        "Sự cô lập."
                      ]
                    },
                    { type: "paragraph", text: "Hãy giúp họ tránh:" },
                    {
                      type: "list",
                      items: ["Tham gia các hoạt động vô bổ.", "Giao tiếp kém.", "Không trung thực."]
                    },
                    {
                      type: "note",
                      text: "Con người sẽ thành công sau khi được giúp đỡ nếu giúp đỡ đúng, nhưng thành công sẽ không giữ được nếu không lặp lại sự giúp đỡ. Vì vậy buộc họ phải đi giúp người khác, quá trình phải lặp lại liên tục."
                    },
                    { type: "heading", text: "Phương pháp cố vấn" },
                    { type: "subheading", text: "1. Chọn người để giúp đỡ" },
                    {
                      type: "paragraph",
                      text: "Mệnh đề chắc nịch là bắt buộc phải giúp đỡ người khác. Giúp đỡ giống như đầu tư vào một dự án, có rủi ro, có thể thành công, có thể thất bại. Nhưng khả năng thất bại sẽ giảm đi rất nhiều nếu chọn đúng người."
                    },
                    { type: "paragraph", text: "Tiêu chuẩn của người được giúp đỡ bắt buộc phải có những điều sau:" },
                    {
                      type: "list",
                      items: [
                        { label: "Tiềm năng hành động", text: "Có khả năng khiến sự việc xảy ra, có thái độ lao động. Họ hiểu nguồn lực của họ, tìm cách gia tăng nguồn lực, tìm cơ hội ở nơi mọi người nghĩ rằng không có, luôn nhận ra triển vọng mà họ có thể có, họ không bào chữa, biến thứ tầm thường thành đặc biệt." },
                        { label: "Tính chủ động", text: "Có khả năng nhận biết và nắm bắt được cơ hội. Người giỏi chưa bao giờ ngồi chờ cơ hội cả, mà đi kiếm cơ hội là trách nhiệm của chính họ, thậm chí họ tạo ra cơ hội." },
                        { label: "Khả năng ảnh hưởng người khác", text: "Trả lời 3 câu hỏi: Ai ảnh hưởng họ? Họ ảnh hưởng ai? Sự ảnh hưởng của họ đang tăng hay giảm?" },
                        { label: "Khả năng gia tăng giá trị", text: "Gia tăng giá trị cho chính họ và cho ta." },
                        { label: "Khả năng thu hút người khác", text: "Biểu hiện: họ muốn được giúp đỡ, họ luôn muốn tái tạo lại mình, họ quan tâm tới thế mạnh của kẻ khác, họ muốn chia sẻ quyền lực, họ có thói quen đầu tư thời gian vào người khác." },
                        { label: "Khả năng truyền cảm hứng", text: "Biểu hiện: họ có nhiều ý tưởng, nếu ý tưởng sai họ tiếp tục sửa, họ trộn ý tưởng của người khác với của mình." },
                        { label: "Thái độ tích cực", text: "Thái độ quyết định quãng đường và tốc độ đi của cả nhóm." },
                        { label: "Sự kiên định với cam kết", text: "Cam kết với những điều đã nói, với mục tiêu đã đặt ra — được hiểu là vượt qua mọi chướng ngại để đạt mục tiêu." },
                        { label: "Lòng trung thành", text: "Biểu hiện: yêu quý bạn vô điều kiện, yêu cả ưu và nhược điểm; luôn nói tốt về bạn với người khác; họ cười và khóc cùng bạn; họ luôn tìm cách biến ước mơ của bạn thành ước mơ của mình." }
                      ]
                    },
                    { type: "subheading", text: "2. Quy trình cố vấn" },
                    {
                      type: "list",
                      items: [
                        { label: "Bước 1 — Chia sẻ ước mơ của mình", text: "Cho họ thấy đích đến của mình, lập tức họ sẽ có niềm tin." },
                        { label: "Bước 2 — Yêu cầu họ một sự cam kết", text: "Cam kết là làm bất chấp lời bào chữa. Họ có chấp nhận cái giá phải trả để đổi lấy thành công được không?" },
                        { label: "Bước 3 — Đặt mục tiêu phát triển", text: "Không có mục tiêu thì không có thành công." },
                        { label: "Bước 4 — Truyền đạt các nguyên tắc căn bản", text: "Những việc CẦN làm và những việc CẤM làm. Sau đó tập trung sinh lực cho việc cần làm." },
                        { label: "Bước 5 — Thực hiện quy trình 5 bước", text: "B1: Tôi làm mẫu, họ ngồi xem. B2: Tôi làm, họ hỗ trợ, tôi giải thích. B3: Họ làm, tôi hỗ trợ, tôi khuyến khích. B4: Họ tự làm, tôi quan sát và vỗ tay thôi. B5: Họ phải đi cố vấn cho người khác." },
                        { label: "Bước 6 — Cung cấp nguồn lực", text: "Cung cấp cho họ: Mục tiêu; Nguồn lực; Giải trình." },
                        { label: "Bước 7 — Giải trình và đánh giá tiến bộ", text: "Sau giải trình thì phải có hệ thống kiểm tra chặt chẽ, phản hồi thường xuyên để khuyến cáo họ những điều cần chú ý. Sau đó là các hoạt động đánh giá sự tiến bộ, đưa phản hồi góp ý, động viên, động viên và động viên liên tục." }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "Đệ tử (Lãnh đạo con/Người kế nhiệm)",
          items: [
            {
              title: "Trang Bị",
              articles: [
                {
                  title: "Trang Bị Huấn Luyện",
                  body: [
                    { type: "heading", text: "Tổng quan" },
                    { type: "subheading", text: "Vì sao phải bỏ sức, bỏ tiền để trang bị cho đệ tử?" },
                    {
                      type: "list",
                      items: [
                        "Vì chúng ta bị ảo tưởng rằng sẽ có những cá nhân xuất sắc.",
                        "Thực tế cuộc sống chứng minh, không thể có một cá nhân nào có thể một mình mà tạo ra một thứ gì đó có giá trị. Ngay cả khi có những người thành công rực rỡ và có vẻ như thành công đó là từ chính họ thì cũng không bao giờ có điều đó."
                      ]
                    },
                    { type: "heading", text: "Phương pháp trang bị — 5 bước" },
                    {
                      type: "list",
                      items: [
                        { label: "B1: Tôi là hình mẫu", text: "Mình thực hiện công việc, đầy đủ quy trình, tập trung vào các việc mà đệ tử đang thiếu. Đệ tử phải nhìn và làm theo đúng quy trình đó, cấm cãi, cấm hỏi." },
                        { label: "B2: Tôi hướng dẫn", text: "Tôi tiếp tục thực hiện công việc, đệ tử cùng làm với tôi, với tư cách kẻ hỗ trợ trong suốt quá trình chứ không phải từng việc. Tôi làm đến đâu sẽ giải thích tới đó, giải thích cả cách làm và tại sao phải làm." },
                        { label: "B3: Tôi theo dõi", text: "Đổi chỗ cho nhau, đệ tử trực tiếp làm, tôi hỗ trợ trên nền tảng sửa lỗi. Vừa sửa lỗi vừa khuyến khích đệ tử. Làm cho đến khi thành thạo." },
                        { label: "B4: Tôi khuyến khích", text: "Tôi không làm công việc ấy nữa, đệ tử tự làm 100%. Tôi chỉ khuyến khích họ với mục tiêu gia tăng sự tự tin cho họ." },
                        { label: "B5: Tôi nhân rộng", text: "Khi đệ tử đã đủ giỏi, bây giờ đến lượt họ có trách nhiệm phải huấn luyện người khác — nhân rộng sang thế hệ F2, và tôi được giải phóng." }
                      ]
                    },
                    { type: "heading", text: "10 tiêu chuẩn chọn người để trang bị" },
                    {
                      type: "list",
                      items: [
                        { label: "1. Nhân cách", text: "Là nhân tố quan trọng nhất. Tuyệt đối không được châm trước, không được phép có ngoại lệ." },
                        { label: "2. Sự ảnh hưởng", text: "Cần có khả năng thuyết phục người khác để họ đi cùng mình." },
                        { label: "3. Thái độ tích cực", text: "Đây là tài sản lớn nhất của mỗi người." },
                        { label: "4. Giỏi về con người", text: "Họ thực sự lo lắng cho người khác và luôn có thái độ sẵn lòng tương tác." },
                        { label: "5. Có năng khiếu", text: "Cần tìm kiếm người có năng khiếu ở dạng thô nhưng đang thiếu kỹ năng." },
                        { label: "6. Kinh nghiệm thực tế", text: "Toàn bộ tài năng của họ được biểu diễn dưới một công việc rất hiệu quả." },
                        { label: "7. Sự tự tin", text: "Người ta không bao giờ đi theo một người nếu người đó không tự tin." },
                        { label: "8. Tính kỷ luật", text: "Tất cả những người lãnh đạo vĩ đại đều có một thừa số chung là một kỷ luật đến khốc liệt." },
                        { label: "9. Giao tiếp hiệu quả", text: "Họ quan tâm thực sự tới người đối diện." },
                        { label: "10. Khát vọng cháy bỏng", text: "Không bao giờ hài lòng với tình trạng hiện tại." }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          title: "Chính mình",
          flagged: true,
          items: [
            {
              title: "Thái Độ",
              articles: [
                {
                  title: "Thái Độ",
                  body: [
                    {
                      type: "paragraph",
                      text: "Thái Độ được hiểu là cảm xúc bên trong được biểu đạt ra bên ngoài thông qua các hành vi cư xử. Nói một cách khác, Thái Độ chính là thế giới quan của mỗi người được bộc lộ qua các hành vi cư xử."
                    },
                    { type: "heading", text: "I. Nhóm thái độ tiêu cực" },
                    { type: "subheading", text: "1. Người thù địch" },
                    { type: "paragraph", text: "Thù địch ở mọi mặt:" },
                    {
                      type: "list",
                      items: [
                        "Khi tranh luận họ luôn phải đúng, mức thấp nhất là luôn khiêu khích.",
                        "Mọi lời nói đùa đều có hàm ý xấu xa, khiêu khích.",
                        "Luôn tham lam đòi sự chú ý từ người khác.",
                        "Lạc thú là chỉ trích người khác.",
                        "Rất thích nhìn người khác thất bại.",
                        "Cuộc sống của họ đầy rẫy những trận chiến, sự phản bội, sự ngược đãi, nhưng dường như đều bắt nguồn từ quá khứ của họ.",
                        "Họ luôn cảm thấy bị áp bức và phải tìm cách trả thù một cái gì đó.",
                        "Họ luôn có rắc rối vì có sự tức giận và thù địch thường xuyên.",
                        "Thái độ này hình thành từ nhỏ, càng lúc càng lớn và càng phát triển — do đó họ rất tinh vi trong mánh khóe kích động, liên tục trễ nải trong công việc, làm việc thì uể oải, tiếp xúc với người khác thì luôn tỏ ra thiếu thiện chí."
                      ]
                    },
                    {
                      type: "note",
                      text: "Nếu bạn ở loại này: hãy nhìn người khác với các ý nghĩ tốt đẹp (họ thật thông minh, họ quá giỏi, mình rất thích họ, họ thật đáng yêu). Nếu gặp kẻ có thái độ này: đừng phản ứng với sự thù địch của họ, hãy cố gắng duy trì trung lập rồi rút khỏi cuộc chơi, hoặc đập cho chết hẳn."
                    },
                    { type: "subheading", text: "2. Người lo lắng" },
                    {
                      type: "list",
                      items: [
                        "Là dạng người luôn nhìn mặt trái của vấn đề, họ luôn dự đoán mọi thứ là trở ngại và khó khăn trong bất cứ tình huống nào.",
                        "Họ luôn có thái độ chờ sự chỉ trích hoặc phản bội của người khác với họ.",
                        "Họ luôn lo lắng trước một bất thường nào đó, họ tưởng tượng ra vì sợ không kiểm soát được tình hình nếu nó xảy ra.",
                        "Trong quan hệ, họ chủ động kiểm soát một cách rất tinh vi tất cả các nghi thức và thói quen của người đối diện. Mọi việc phải làm theo ý họ.",
                        "Trong công việc, họ cầu toàn đến bệnh hoạn, do đó có nét của kẻ phá hoại, vì họ muốn mọi thứ đều đạt được hoàn hảo trong mọi chuyện.",
                        "Giao tiếp xã hội thì rất dễ cáu kỉnh một cách khác thường."
                      ]
                    },
                    {
                      type: "note",
                      text: "Nếu thấy mình có thái độ này: dồn năng lượng vào công việc, hướng chú ý ra bên ngoài, dẹp bỏ sự cầu toàn với những việc không cần thiết, đưa mình vào các nỗi sợ một cách chủ động chứ không phải bị thổi phồng. Nếu gặp loại này, hãy cố gắng không bị lây nhiễm và luôn cho họ một sự an ủi."
                    },
                    { type: "subheading", text: "3. Người né tránh" },
                    {
                      type: "list",
                      items: [
                        "Là người không tin vào năng lực của chính mình. Có biểu hiện nhìn thế giới qua ống kính của sự bất an, hoài nghi về năng lực và trí tuệ của chính họ.",
                        "Họ thể hiện sự bất an bằng cả ý thức và vô thức: tìm mọi lý do để thay đổi nghề nghiệp; bỏ việc; cắt đứt một mối quan hệ một cách bất thường; có tỉ lệ mắc bệnh tâm thần rất cao; dễ bị nghiện một cái gì đó; rất khó tận tâm với bất cứ điều gì và kèm theo vô vàn lý do.",
                        "Họ e sợ thành công vì thành công đi kèm với trách nhiệm.",
                        "Họ sợ thất bại và sự phán xét vì họ bị hở cái yếu ra.",
                        "Biểu hiện thường trực là họ tìm mọi cách để ngụy trang cho nguồn gốc của sự né tránh: tỏ ra coi thường thành công; coi thường những người tìm cách chứng tỏ bản thân; hay thể hiện lý tưởng cao quý, thậm chí lý tưởng không thể thực hiện được mà bản chất là che đậy cho sự né tránh.",
                        "Họ thường xuyên không làm gì cả và nếu có làm thì chỉ làm một việc duy nhất đó là liên tục bào chữa cho mình."
                      ]
                    },
                    {
                      type: "note",
                      text: "Nếu mình là loại này thì chỉ có một cách là tự sửa mình ngay lập tức bằng cách chủ động thất bại. Nếu thấy kẻ khác là loại này thì hãy cảnh giác cao độ khi làm đối tác với họ, vì họ là bậc thầy của né tránh và luôn chuồn đi rất đúng lúc."
                    },
                    { type: "subheading", text: "4. Người trầm cảm" },
                    {
                      type: "list",
                      items: [
                        "Là loại người bị lôi kéo vào sự u ám của cuộc sống này.",
                        "Đặc trưng của kẻ khi bé không nhận được sự yêu thương của cha mẹ, mà vẫn phải sống lệ thuộc vào cha mẹ.",
                        "Về khách quan thì ai cũng có nét trầm cảm ở một lúc nào đó. Để chống lại nó chỉ có cách tập trung vào công việc để tìm một thành công nho nhỏ nào đó, tìm cách lấy lại cân bằng, nâng mức năng lượng của mình lên.",
                        "Biểu hiện: luôn có thái độ tạm thời rút ra khỏi cuộc sống này, rút ra khỏi quan hệ với người khác để thoát được sự kiểm soát của mọi người, nhưng càng vậy thì lại càng trầm cảm.",
                        "Để cân bằng, họ có nhu cầu làm tổn thương người khác — rất thích khuyến khích những hành vi phản bội và chỉ trích.",
                        "Họ rất thích sự giúp đỡ của người khác vì bản chất họ bị nhạy cảm quá mức."
                      ]
                    },
                    {
                      type: "note",
                      text: "Nếu gặp loại này đừng cố gắng nâng đỡ họ mà hãy đồng tình với họ rồi khéo léo đưa họ vào các trải nghiệm tích cực."
                    },
                    { type: "subheading", text: "5. Người bực tức" },
                    {
                      type: "list",
                      items: [
                        "Là loại người khi còn nhỏ được chú ý quá nhiều, họ không bao giờ cảm thấy sự yêu thương từ người khác là đủ cả. Do đó, dù họ có tất cả nhưng vẫn luôn ở trạng thái bất mãn và thất vọng.",
                        "Họ chuyên đi tìm kiếm trên nét mặt của người khác các dấu hiệu coi thường họ.",
                        "Họ thấy mọi thứ đều liên quan đến họ.",
                        "Họ luôn sống bằng ảo giác không ai hơn họ, nếu có người hơn thì đó là sự bất công, sỉ nhục đối với họ.",
                        "Họ luôn thấy bất công, sau đó sẽ trả thù và tìm cách gây hấn.",
                        "Biểu hiện: luôn tỏ ra cao ngạo, đứng trên người khác, ngẩng đầu quá cao, luôn có nụ cười nhếch mép hoặc khinh khỉnh, đặc biệt rất thích tụ tập với những kẻ giống họ."
                      ]
                    },
                    { type: "heading", text: "II. Nhóm thái độ tích cực" },
                    { type: "subheading", text: "1. Cách nhìn thế giới: Không giới hạn" },
                    {
                      type: "list",
                      items: [
                        "Là cách nhìn thế giới, nhìn con người, sự vật, hiện tượng với sự tò mò và phương châm là không có gì là giới hạn cả.",
                        "Tìm cách khám phá mọi dạng kiến thức; tốt nhất là quay về với sự tò mò như trẻ con."
                      ]
                    },
                    { type: "note", text: "Thái độ không giới hạn được cụ thể hoá bằng khát vọng, sáng tạo, ham học hỏi và ý chí." },
                    { type: "subheading", text: "2. Cách nhìn vào nghịch cảnh: Vượt nghịch cảnh" },
                    {
                      type: "list",
                      items: [
                        "Cuộc sống luôn có các trở ngại, thất vọng, đau đớn và chia ly. Bạn phải vượt qua nó, hãy tự xem nghịch cảnh là một cơ hội để học hỏi. Nghịch cảnh trở thành một phương tiện để mình mạnh mẽ hơn.",
                        "Nếu có thái độ này thì vận mệnh tích cực của bạn bắt đầu xuất hiện rồi đó."
                      ]
                    },
                    { type: "subheading", text: "3. Cách nhìn bản thân: Sự lạc quan" },
                    {
                      type: "list",
                      items: [
                        "Khi bạn nhỏ tuổi, bạn có nhiều ước mơ rất táo bạo; khi lớn hơn, bạn bắt đầu mắc vào cái bệnh hoạn, đó là xuất hiện việc bạn tự đặt ra giới hạn cho chính mình.",
                        "Bỏ ngay thái độ lạnh lùng, mỉa mai, không tham vọng, không quá tích cực, luôn tỏ ra thờ ơ, tỏ ra nhún nhường một cách giả tạo, luôn cho rằng sự lạc quan là ngớ ngẩn.",
                        "Thay vào đó: tìm động năng cho chính mình, tức là tìm sự lạc quan, để vượt qua giới hạn."
                      ]
                    },
                    { type: "subheading", text: "4. Năng lượng, sức khoẻ: Phấn khích & Vui vẻ (Sự cởi mở)" },
                    {
                      type: "list",
                      items: [
                        "Bệnh từ tâm mà ra, mà ai cũng có bệnh.",
                        "Khi ta phấn khích với công việc, đột nhiên ta thấy một hiện tượng rất lạ đó là năng lượng của ta nhiều hơn, sức khỏe mau hồi phục hơn.",
                        "Ngược lại, khi ta chán nản, ta trở thành con mồi cho bệnh tật. Căng thẳng chính là con mồi thứ hai.",
                        "Do đó, thái độ phấn khích và cởi mở có vai trò đặc biệt với năng lượng và sức khoẻ của chúng ta. Nó giúp con người đẩy xa giới hạn chịu đựng mà chúng ta nghĩ là không thể."
                      ]
                    },
                    { type: "subheading", text: "5. Cách nhìn người khác: Khoan dung" },
                    {
                      type: "list",
                      items: [
                        "Đây là nhân tố phải khổ luyện nhiều nhất.",
                        "Đầu tiên phải loại bỏ suy nghĩ: khi người khác nói hay làm gì đó là họ đang nhắm tới bạn, đặc biệt là việc làm xấu.",
                        "Ngay cả khi người ta chỉ trích bạn thật thì bạn cũng hãy hiểu rằng lời chỉ trích đó có nguồn gốc từ kẻ khác, và bạn chỉ là mục tiêu chứ không phải họ nhắm tới bạn.",
                        "Nếu hiểu được 2 điều trên thì bạn sẽ có hiện tượng không thấy bực bội, biểu hiện là sự khoan dung. Sau khi khoan dung bạn sẽ có một vị thế cực tốt để xử lý vấn đề. Liên tục dùng nó sẽ tạo thói quen, thói quen này sẽ giúp bạn tương tác với xã hội tốt hơn và sẽ có độ hút người khác rất mạnh."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: "Lãnh Đạo 360",
              articles: [
                {
                  title: "Lãnh Đạo 360°",
                  body: [
                    { type: "heading", text: "Tổng quan" },
                    { type: "paragraph", text: "Người đứng đầu doanh nghiệp nên nhớ:" },
                    {
                      type: "list",
                      items: [
                        "Rất nhiều nhân sự cấp trung nản lòng vì lãnh đạo cấp cao (CEO) bất tài và vô dụng. Họ khát khao thành công nhưng CEO lại ngáng chân họ.",
                        "Bạn (CEO) là người duy nhất có quyền tạo ra văn hoá tích cực, đó là: lãnh đạo cấp trung được toàn quyền trong việc phát triển bản thân — nghĩa là bạn đang nuôi dưỡng 1 giàn lãnh đạo 360°."
                      ]
                    },
                    { type: "paragraph", text: "Là CEO, bạn phải cam kết 12 điều sau đây:" },
                    {
                      type: "list",
                      items: [
                        "Bạn phải đặt niềm tin vào con người: trân trọng con người là cái lõi của phát triển lãnh đạo cấp trung. Hãy tin người khác khi họ chưa đáng tin, bản chất là chúng ta đang cho họ vay lòng tin.",
                        "Bạn phải cam kết dành nguồn lực lớn nhất để phát triển con người.",
                        "Đánh giá rất cao vai trò của nhân viên.",
                        "Đưa hoạt động tìm kiếm lãnh đạo triển vọng thành hoạt động từng ngày.",
                        "Xây thói quen có sự ảnh hưởng đến hoạt động của người khác theo nghĩa tích cực.",
                        "Tạo điều kiện để họ gia tăng giá trị cho bạn.",
                        "Hiểu và tôn trọng nhân viên.",
                        "Khen thưởng sự chủ động của lãnh đạo cấp trung.",
                        "Tạo ra môi trường an toàn, mọi người có thể hỏi, chia sẻ, trao đổi ý tưởng và có cơ hội mạo hiểm.",
                        "Phải gieo bằng được vào đầu lãnh đạo cấp trung ý tưởng: cùng trưởng thành.",
                        "Đưa những lãnh đạo cấp trung có triển vọng vào ekip của mình.",
                        "Có thói quen phát triển 1 nhóm lãnh đạo để tập dần thói quen giải phóng lãnh đạo."
                      ]
                    },
                    { type: "heading", text: "Kỹ năng lãnh đạo 360°" },
                    { type: "subheading", text: "1. Lãnh đạo đối với cấp trên" },
                    {
                      type: "paragraph",
                      text: "Tìm cách lãnh đạo cấp trên một cách hiệu quả chứ tuyệt đối đừng nịnh bợ họ, khi đó mặc định họ sẽ để bạn thăng tiến."
                    },
                    { type: "paragraph", text: "Lãnh đạo cấp trên là thách thức lớn nhất đối với lãnh đạo cấp trung. Hãy tìm mọi cách gia tăng độ tin cậy cho họ, với 3 chiến lược sau:" },
                    {
                      type: "list",
                      items: ["Luôn ủng hộ cấp trên.", "Gia tăng giá trị cho tổ chức.", "Làm bật bản thân lên, hoàn thành xuất sắc công việc được giao."]
                    },
                    { type: "subheading", text: "Lãnh đạo bản thân thật xuất sắc" },
                    {
                      type: "paragraph",
                      text: "Ý nghĩa là tạo cho cấp trên lòng tin. Quản trị bản thân là hãy tự nói được mình. Tín hiệu là có Tự Trọng, có Kỷ Luật, có Chủ Đích (mục đích sống). Nó bao gồm các quản trị sau:"
                    },
                    {
                      type: "list",
                      items: [
                        { label: "Quản trị cảm xúc", text: "Chiếm ít nhất 75% thành công, là yếu tố quyết định của lòng tin. Biết khi nào thì trì hoãn công việc, khi nào bày tỏ, khi nào cần kiềm chế hay dùng cảm xúc để lay động lòng người. Quản trị cảm xúc tức là đặt cảm xúc của người khác lên trên hết, chứ không phải bản thân mình." },
                        { label: "Quản trị thời gian", text: "Đây là vấn đề khó với lãnh đạo cấp trung vì họ phải làm tất cả mọi việc. Nếu quản trị được thì họ là người tài." },
                        { label: "Quản trị ưu tiên", text: "Lãnh đạo cấp trung luôn ở trạng thái đuổi theo 2 con thỏ 1 lúc nên buộc phải có ưu tiên: 80% cho việc giỏi nhất, 15% cho việc đang học hỏi, 5% cho việc lặt vặt — những việc khác giao cho người khác." },
                        { label: "Quản trị năng lượng", text: "Hãy phân bổ năng lượng để đừng bị kiệt sức. Nếu công việc hiện tại không làm được thì tìm nơi khác mà làm." },
                        { label: "Quản trị suy nghĩ", text: "Kẻ thù lớn nhất của suy nghĩ chính là sự bận rộn. Tuyệt đối không làm cùng lúc quá 3 việc — 1 phút suy nghĩ tốt hơn 1 giờ làm việc không kế hoạch." },
                        { label: "Quản trị lời nói", text: "Chỉ nên nói những gì đáng nói và nói súc tích nhất có thể. Nếu không đáng nói thì tốt nhất là im lặng." },
                        { label: "Quản trị cuộc sống riêng", text: "Không có thành công nào trong sự nghiệp đáng để hy sinh gia đình. Nếu cuộc sống cá nhân là một mớ bòng bong thì kết quả cuối cùng luôn tồi tệ — nếu gia đình còn không tin tưởng thì đó là kẻ không đáng tin." }
                      ]
                    },
                    { type: "subheading", text: "Chia sẻ gánh nặng với cấp trên" },
                    {
                      type: "paragraph",
                      text: "Nếu bạn nâng được cấp trên lên thì đó là hành vi thiết thực nhất để nâng mình lên. Đừng bợ đỡ họ mà hãy giúp đỡ, chia sẻ và xây dựng với họ. Điều đó sẽ giúp bạn:"
                    },
                    {
                      type: "list",
                      items: ["Có tinh thần đồng đội.", "Tỏ được lòng biết ơn trong tập thể.", "Nỗ lực để được làm một thành viên của công ty.", "Được đặc biệt chú ý."]
                    },
                    {
                      type: "note",
                      text: "Giúp họ 1-2 lần: họ cảm ơn; giúp nhiều lần: họ sẽ nói tôi cần anh; giúp liên tục: họ sẽ nói hãy để tôi giúp anh. Chia sẻ gánh nặng với sếp là hành vi duy nhất để bạn có vị trí đặc biệt trong tim họ."
                    },
                    { type: "paragraph", text: "Cách để chia sẻ gánh nặng với sếp:" },
                    {
                      type: "list",
                      items: [
                        "Làm thật tốt công việc mình được giao (vĩ đại nhất).",
                        "Khi gặp rắc rối, hãy đưa ra giải pháp chứ đừng bình luận.",
                        "Chỉ nói những điều họ cần nghe, không phải những điều họ muốn nghe — muốn thành kẻ thân tín thì hãy nói sự thật, hãy dũng cảm, hãy nói cả tin tức xấu chứ không phải toàn tin vui.",
                        "Sẵn sàng làm việc thêm giờ: bạn sẽ nổi bật trước đám đông nếu làm nhiều hơn được yêu cầu.",
                        "Bảo vệ cấp trên bất cứ khi nào có thể: khi sếp đã ra quyết định thì tranh cãi chấm dứt, chỉ có thi hành, coi nó như quyết định của chính mình.",
                        "Đại diện cho lãnh đạo bất cứ khi nào có thể.",
                        "Luôn hỏi lãnh đạo xem bạn có thể giúp họ cái gì. Tiên đoán họ muốn gì và chủ động giúp."
                      ]
                    },
                    { type: "subheading", text: "Sẵn sàng làm việc mà người khác không làm" },
                    { type: "paragraph", text: "Ở đây chính là thái độ không nề hà. Những việc kẻ khác không muốn làm gồm:" },
                    {
                      type: "list",
                      items: [
                        "Những việc khó khăn, mang tính chất rắc rối.",
                        "Trả phí cho quyền lực: phải bỏ rất nhiều chi phí cơ hội, hy sinh nhiều mục tiêu cá nhân, đặt người khác lên trên mà không được kêu ca.",
                        "Những việc có tính chất thầm lặng, không được tôn vinh, khen thưởng.",
                        "Chinh phục những kẻ khó chịu: kẻ gây rối, kẻ phá hoại...",
                        "Việc có tỉ lệ mạo hiểm cao — hãy chấp nhận mạo hiểm.",
                        "Làm tốt hơn kỳ vọng.",
                        "Giúp đỡ người khác.",
                        "Những việc không thuộc trách nhiệm của mình — tình huống không có ai làm thì mình làm."
                      ]
                    },
                    { type: "subheading", text: "Làm nhiều hơn nhiệm vụ của lãnh đạo cấp trung" },
                    {
                      type: "paragraph",
                      text: "Tức là làm thêm cả nhiệm vụ của nhà quản trị. Quản trị là làm việc với quy trình, lãnh đạo là làm việc với con người. Lãnh đạo cấp trung phải vừa làm việc với con người, đồng thời tăng thêm hành vi quản trị quy trình:"
                    },
                    {
                      type: "list",
                      items: [
                        "Chú ý con người hơn dự án.",
                        "Chú ý sự chuyển động hơn là hoạt động duy trì.",
                        "Chú ý nghệ thuật hơn khoa học.",
                        "Chú ý liều lĩnh hơn thận trọng.",
                        "Chú ý hành động hơn phản ứng.",
                        "Chú ý mối quan hệ hơn điều lệ.",
                        "Chú ý bạn là ai nhiều hơn bạn làm gì."
                      ]
                    },
                    { type: "subheading", text: "Đầu tư vào mối quan hệ với sếp ngoài công việc" },
                    { type: "paragraph", text: "Hãy lắng nghe nhịp tim họ:" },
                    {
                      type: "list",
                      items: [
                        "Điều gì khiến họ cười, điều gì khiến họ sướng, điều gì khiến họ khóc.",
                        "Khi nào họ xúc động, khi nào họ hát vang, khi nào họ hài lòng.",
                        "Biết được những ưu tiên của họ.",
                        "Biết được mối quan tâm của họ và kết nối được nó.",
                        "Hiểu tính cách họ, điều chỉnh tính cách theo họ.",
                        "Chung sống với nhược điểm của sếp.",
                        "Tôn trọng gia đình của sếp."
                      ]
                    },
                    { type: "subheading", text: "Chuẩn bị thật kỹ mỗi lần gặp sếp" },
                    { type: "paragraph", text: "Thời gian của sếp là rất quý, do đó phải chuẩn bị thật chu đáo trước khi gặp họ. Chu đáo được hiểu là:" },
                    {
                      type: "list",
                      items: [
                        "Cứ mỗi 1 phút gặp sếp thì hãy chuẩn bị trước 10 phút.",
                        "Tuyệt đối đừng để sếp nghĩ dùm bạn: đừng hỏi liên tục mà không nghĩ.",
                        "Đã gặp sếp là phải mang theo ý tưởng và giải pháp.",
                        "Khi sếp yêu cầu nói thì đừng ứng khẩu, suy nghĩ thật kỹ rồi hãy nói.",
                        "Khi nói hãy nói bằng ngôn ngữ của sếp.",
                        "Đã nói thì phải diễn tả được điểm mấu chốt của vấn đề."
                      ]
                    },
                    { type: "subheading", text: "Biết tiến biết lùi đúng lúc" },
                    {
                      type: "list",
                      items: [
                        { label: "Khi nào nên tiến", text: "Những điều sếp không biết; những vấn đề mà thời gian xử lý sắp hết; những khó khăn có nguy cơ không hoàn thành; các cách có thể giúp sếp thắng ngay lập tức." },
                        { label: "Khi nào nên lùi", text: "Đừng hỏi sếp đã làm gì cho tôi, mà hãy hỏi tôi có thể làm gì cho sếp; không trình bày quan điểm riêng và muốn thắng họ; không nói những gì bị thúc ép; không nói điều không phù hợp với tâm trạng hiện tại của sếp; không yêu cầu vượt quá mối quan hệ với sếp." }
                      ]
                    },
                    { type: "subheading", text: "2. Lãnh đạo đối với người đồng cấp" },
                    {
                      type: "paragraph",
                      text: "Nếu bạn tìm cách chiến thắng đồng nghiệp bằng mọi cách, chắc chắn bạn sẽ phải trả giá. Hãy hoàn thiện mình chứ không phải cạnh tranh với họ."
                    },
                    {
                      type: "list",
                      items: [
                        { label: "Hãy chủ động làm bạn với họ", text: "Lắng nghe họ; chủ động tìm điểm chung ngoài công việc; dành thời gian ngoài giờ làm việc với họ; hãy hài hước với họ; nói ra sự thật mà người khác không bao giờ nói với họ." },
                        { label: "Tuyệt đối tránh đấu đá chính trị nội bộ", text: "Tránh ngồi lê đôi mách; tránh cãi nhau vặt; ủng hộ điều đúng; bảo vệ cái đúng chứ không phải quyền lực; hãy nói điều mình nghĩ và luôn nghĩ những điều mình nói." },
                        { label: "Mở rộng vòng tròn quan hệ", text: "Mở rộng số đồng cấp; mở rộng ra ngoài yếu tố chuyên môn; mở rộng ra ngoài vấn đề thế mạnh của mình và chấp nhận sự dạy dỗ của họ; mở rộng ra ngoài vùng thành kiến cá nhân." },
                        { label: "Sẵn sàng công nhận ý tưởng của người đồng cấp", text: "Đừng cố bảo vệ ý tưởng của mình mà hãy có thái độ chấp nhận ý tưởng của đồng cấp — lắng nghe, không để cái tôi làm lu mờ sự thiện chí, vứt bỏ tự ái vặt." },
                        { label: "Luôn tỏ ra mình là kẻ không hoàn hảo bằng cách thừa nhận khuyết điểm", text: "Liên tục xin lời khuyên từ họ; đừng lo lắng những gì người khác nghĩ về mình; tập bỏ qua tự ti và tự phụ; hoàn thành tốt nhiệm vụ mà cấp trên giao." }
                      ]
                    },
                    { type: "subheading", text: "3. Lãnh đạo đối với cấp dưới" },
                    {
                      type: "paragraph",
                      text: "Hãy bước chậm rãi qua khu vực làm việc của nhân viên: vì mình cần kết nối với họ, thể hiện sự quan tâm, hướng tới họ, hiểu về công việc và cuộc sống của họ."
                    },
                    {
                      type: "list",
                      items: [
                        "Coi mỗi người là điểm 10.",
                        "Nhìn họ như 1 người mà họ sẽ trở thành, tức là cho họ vay lòng tin.",
                        "Công nhận từng động tác mà họ làm tốt.",
                        "Tin vào điều tốt của nhân viên và liên tục cho họ cơ hội nhìn lại vấn đề nếu làm chưa tốt.",
                        "Phát triển từng nhân viên với tư cách họ là một con người.",
                        "Dành thời gian khám phá ước mơ của họ.",
                        "Dẫn dắt từng người theo cách riêng biệt và linh hoạt.",
                        "Gắn được mục tiêu cá nhân họ với mục tiêu của công ty.",
                        "Giúp nhân viên hiểu rõ chính mình: cho họ sự phản hồi tốt và xấu, khen và chê.",
                        "Hãy tuyên dương họ thật mạnh nếu họ làm những điều chính nghĩa.",
                        "Huấn luyện và phát triển họ liên tục."
                      ]
                    },
                    { type: "subheading", text: "Sử dụng người đúng sở trường" },
                    {
                      type: "paragraph",
                      text: "Hãy khám phá sở trường của họ rồi xếp họ vào công việc đúng sở trường đó, rồi tiếp tục trang bị cho họ kỹ năng để phát huy sở trường đó."
                    },
                    { type: "subheading", text: "Mình muốn nhân viên làm gì thì mình hãy làm gương" },
                    {
                      type: "list",
                      items: [
                        "Hành xử hàng ngày của lãnh đạo chính là định hình văn hoá công ty.",
                        "Thái độ của lãnh đạo định hình bầu không khí của công ty.",
                        "Giá trị của lãnh đạo định hình các quyết định.",
                        "Sự đầu tư của lãnh đạo sẽ định hình lợi nhuận của công ty.",
                        "Tính cách của lãnh đạo quyết định lòng tin của mọi người.",
                        "Đạo đức của lãnh đạo quyết định năng suất lao động.",
                        "Tiến bộ của lãnh đạo định hình tiềm năng của công ty."
                      ]
                    },
                    { type: "subheading", text: "Thưởng thành tích" },
                    {
                      type: "list",
                      items: [
                        "Khen có 2 kiểu: công khai và riêng tư.",
                        "Khen thôi là chưa đủ, phải cộng thêm vật chất nữa.",
                        "Không bao giờ được khen thưởng giống nhau.",
                        "Tăng lương là 1 kiểu khen, nhưng động lực lớn nhất lại là ở bổng lộc (yếu tố phi tiền).",
                        "Thăng chức là giải pháp thưởng thành tích cao nhất."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: "Giải Quyết Vấn Đề",
              articles: [
                {
                  title: "Giải Quyết Vấn Đề",
                  body: [
                    { type: "heading", text: "Tổng quan" },
                    { type: "subheading", text: "1. Vấn đề là cái gì?" },
                    {
                      type: "list",
                      items: [
                        "Ra quyết định là hành vi lựa chọn giữa 2 hay nhiều lựa chọn.",
                        "Còn giải quyết vấn đề là giải quyết một tình huống mà nó ngược với ý định và mong muốn của bạn.",
                        "Trước khi giải quyết một vấn đề thì khó khăn nhất là tìm ra đó là gì.",
                        "Quá trình đi tìm vấn đề thực sự là một kỹ năng cần rèn luyện, người ta gọi nó là \"nhận thức lại\"."
                      ]
                    },
                    { type: "paragraph", text: "Nhận thức lại là quá trình đi tìm vấn đề, có 2 cách:" },
                    {
                      type: "list",
                      items: [
                        { label: "Khám phá khung vấn đề", text: "Đào sâu vấn đề, nhìn nó một cách chi tiết, rồi tổng hợp lại thành bức tranh tổng thể, cuối cùng kết luận vấn đề thực sự là gì." },
                        { label: "Phá vỡ khung vấn đề", text: "Bỏ cái khung đó đi, tức là nghĩ khác đi." }
                      ]
                    },
                    { type: "note", text: "Cả 2 cách này đều dẫn tới một kết quả là đột phá trong giải quyết vấn đề." },
                    { type: "paragraph", text: "Để nhận thức lại vấn đề buộc bạn phải rèn luyện 4 điều sau, kết hợp cả 4 chắc chắn tìm ra vấn đề:" },
                    {
                      type: "list",
                      items: [
                        "Khi gặp vấn đề hãy đặt câu hỏi một cách rất cụ thể ở từng khía cạnh của vấn đề (tâm lý, động cơ, trình độ, kỹ thuật, kinh nghiệm).",
                        "Tìm cách thay đổi các giả định nhằm mục tiêu đi ra ngoài khung vấn đề.",
                        "Thu thập thật đủ số liệu.",
                        "Trực tiếp tham gia vào quá trình làm thực tế vấn đề đó luôn."
                      ]
                    },
                    { type: "subheading", text: "2. Các rào cản khi giải quyết vấn đề" },
                    {
                      type: "list",
                      items: [
                        "Có vài người không nhận ra là doanh nghiệp đang có vấn đề. Họ từ chối thừa nhận vấn đề vì nó làm xấu hình ảnh, hoặc khiến họ bất lợi. Tuyệt đối tôn trọng họ, đừng phán xét mà hãy đưa họ vào thế nhận thức ra vấn đề.",
                        "Vấn đề được nhận ra nhưng nó quá lớn để giải quyết ngay. Hãy chia nhỏ vấn đề để dễ quản lý hơn.",
                        "Cách tổ chức để giải quyết vấn đề không tốt. Hãy tập trung vào khâu tổ chức.",
                        "Giải quyết vấn đề quá vội vàng: hại nhiều hơn lợi, có thể khiến vấn đề leo thang đến mức không giải quyết nổi.",
                        "Vướng vào mục đích cá nhân của một ai đó: đã có cách giải quyết nhưng lại bị phụ thuộc vào một người khác. Hãy chọn người phù hợp để hợp tác.",
                        "Xuất hiện những người có tầm ảnh hưởng chi phối: kẻ nói nhiều, kẻ có thâm niên, kẻ có chuyên môn và uy tín. Hãy chọn giải pháp sao cho tiếng nói của những người này không thể lấn át được giải pháp của mình.",
                        "Thiếu hiểu biết vấn đề: hãy tìm đủ thông tin, làm rõ bối cảnh để kẻ đối diện bắt buộc phải hiểu vấn đề.",
                        "Kiến thức và kinh nghiệm của người đang giải quyết vấn đề: kẻ quá ít kinh nghiệm, hoặc kẻ quá nhiều kiến thức và kinh nghiệm.",
                        "Không chịu tham khảo ý kiến của người phù hợp, đặc biệt là những người trực tiếp bị ảnh hưởng bởi vấn đề.",
                        "Không có khả năng truyền đạt được giải pháp: phải truyền đạt đến với những người thực hiện và quan trọng nhất là những người chịu ảnh hưởng trực tiếp.",
                        "Cố giải quyết vấn đề theo cách nghĩ của kẻ nêu ra vấn đề chứ không phải của mình.",
                        "Thái độ của người giải quyết vấn đề: một thái độ tiêu cực thì không thể giải quyết được vấn đề. Kiên quyết chống lại thái độ này."
                      ]
                    },
                    { type: "subheading", text: "Kỹ năng giải quyết vấn đề" },
                    {
                      type: "list",
                      items: [
                        "Mục tiêu giải quyết vấn đề.",
                        "Thiết lập nhóm giải quyết.",
                        "Xác định chính xác vấn đề.",
                        "Đề xuất các phương án.",
                        "Đánh giá từng phương án.",
                        "Quyết định một phương án khả thi nhất so với mục tiêu."
                      ]
                    },
                    {
                      type: "note",
                      text: "Các bước 2, 3, 4 thuộc nhóm kỹ năng giải quyết vấn đề. Các bước 1, 5, 6 thuộc kỹ năng ra quyết định."
                    },
                    { type: "heading", text: "Mục 2 — Thiết lập nhóm làm việc" },
                    { type: "paragraph", text: "Người tham gia nhóm phải là người có hiểu biết, có kinh nghiệm, có quyền lợi; thuộc các nhóm sau:" },
                    {
                      type: "list",
                      items: [
                        "Người có quyền phân bổ nguồn lực và có tiếng nói quyết định.",
                        "Những người chịu ảnh hưởng trực tiếp từ vấn đề.",
                        "Các chuyên gia có kiến thức sâu rộng về vấn đề cần giải quyết.",
                        "Những người phản đối.",
                        "Người đề xướng."
                      ]
                    },
                    { type: "paragraph", text: "Sau khi có thành phần nhóm thì phải tạo luật chơi cho nhóm:" },
                    {
                      type: "list",
                      items: [
                        "Tinh thần của nhóm là mục tiêu chung.",
                        "Thống nhất về cách tiếp cận vấn đề.",
                        "Xung đột phải được giải quyết trên tinh thần xây dựng. Quan điểm nào cũng đều được ủng hộ, đều được chấp nhận."
                      ]
                    },
                    { type: "heading", text: "Mục 3 — Xác định chính xác vấn đề" },
                    { type: "paragraph", text: "Có 2 phương pháp: Tranh luận và tranh biện." },
                    {
                      type: "table",
                      headers: ["Tiêu chí", "Tranh biện", "Tranh luận"],
                      rows: [
                        ["Khái niệm", "Một cuộc thi", "Hợp tác để giải quyết vấn đề."],
                        ["Mục đích", "Thuyết phục và vận động hành lang", "Kiểm tra và đánh giá"],
                        ["Vai trò", "Người phát ngôn", "Người phản biện"],
                        ["Xu hướng hành vi", "Thuyết phục người khác; luôn luôn bảo vệ vị thế của mình; tìm bằng được kẻ thắng người thua.", "—"],
                        ["Quan điểm của thiểu số", "Thường bị bỏ qua", "Nhận được sự trân trọng và nuôi dưỡng"],
                        ["Kết quả", "Kẻ thắng người thua", "Sở hữu vấn đề của tập thể."]
                      ]
                    },
                    {
                      type: "note",
                      text: "Ở bất kỳ lĩnh vực nào thì tranh biện là phổ biến, biểu hiện là luôn gân cổ cãi nhau. Tranh luận cũng cần gân cổ nhưng khác hoàn toàn về mặt hiệu quả — mọi người có xu hướng cùng nhau tìm giải pháp tốt nhất và có quyền giữ mối quan tâm riêng của mình, khuyến khích người ta phản biện."
                    },
                    { type: "paragraph", text: "Để có thói quen tranh luận thì bắt buộc phải chú trọng tới 3 nhân tố sau:" },
                    {
                      type: "list",
                      items: [
                        "Đã xuất hiện bất đồng thì phải lập tức xử lý nó bằng thái độ xây dựng trước khi nói đến giải pháp cụ thể. Bất đồng khi tranh luận thường có 2 loại: cảm tính và lý tính — hãy tập trung vào lý tính vì nó mới tìm ra vấn đề và cách giải quyết. Để loại bỏ cảm tính thì chỉ có tập trung vào công việc, không bao giờ đụng vào vấn đề con người.",
                        "Phải xây dựng thói quen: đã tranh luận là phải thẳng thắn; nếu đụng chạm cá nhân thì phải lịch sự nhất có thể; liên tục đề nghị họ đổi vai trò với mình và ngược lại.",
                        "Sự lưu tâm: luôn cởi mở đón nhận ý tưởng mới và chấp nhận ý tưởng trái chiều; chăm chú lắng nghe trong suốt quá trình thảo luận, kiên nhẫn khi người ta trình bày, ghi chép và yêu cầu giải thích những điều mình muốn; nói một cách trung thực về phương án của mình, chỉ ra lập luận của mỗi thành viên ảnh hưởng tới ý tưởng của mình như thế nào."
                      ]
                    },
                    { type: "heading", text: "Mục 4 — Kỹ năng tìm phương án" },
                    {
                      type: "list",
                      items: [
                        "Sau khi đã tìm ra vấn đề, để có phương án giải quyết, người ta cũng dùng cả 2 phương pháp tranh biện và tranh luận trong thực tế, nhưng chỉ có tranh luận mới tìm ra được mà thôi.",
                        "Để tìm được phương án xử lý vấn đề cần có kỹ năng kết thúc cuộc họp một cách rõ ràng. Rất khó để biết khi nào cần chấm dứt các cuộc đối thoại, vì đều dễ lâm vào tình trạng tìm vấn đề loanh quanh — khi đó phải chấp nhận một sự không chắc chắn nào đó và lập tức đưa ra một phương án (với tư cách kẻ chủ tọa) kể cả chưa đủ dữ kiện."
                      ]
                    },
                    { type: "paragraph", text: "Để đánh giá các phương án cần xem xét các biến số sau:" },
                    {
                      type: "list",
                      items: [
                        { label: "Chi phí", text: "Tổng chi phí; mức độ tiết kiệm của dự án; các chi phí tiềm ẩn; chi phí phát sinh theo thời gian; chi phí so với ngân sách mình có." },
                        { label: "Lợi ích", text: "Chất lượng sản phẩm có tăng không? Độ thỏa mãn khách hàng thế nào? Lợi nhuận doanh nghiệp tăng bao nhiêu? Tác động tới hiệu quả làm việc của nhân viên ra sao?" },
                        { label: "Tác động tới lợi nhuận ròng", text: "Tỷ suất lợi nhuận ròng; thời gian cho kết quả đó; có phải vay nhiều không?" },
                        { label: "Tính khả thi", text: "Các trở ngại của phương án có vượt qua được không? Các chống đối từ mọi phía có hoà giải được không?" },
                        { label: "Các biến số vô hình", text: "Uy tín, danh tiếng có tăng không? Mức độ trung thành của khách hàng thế nào?" },
                        { label: "Thời gian", text: "Tổng thời gian thực hiện phương án? Các nhân tố nào tạo nên sự trì hoãn?" },
                        { label: "Các nguồn lực khác", text: "Để đảm bảo tính thực thi." },
                        { label: "Rủi ro", text: "Đo các rủi ro xem có chịu được nếu thực hiện." },
                        { label: "Pháp lý", text: "Có vi phạm pháp luật không?" }
                      ]
                    },
                    { type: "heading", text: "Giải quyết vấn đề cho cá nhân" },
                    { type: "paragraph", text: "Bất kỳ ai, ở bất kỳ đâu, bất cứ thời điểm nào đều có 3 nhóm vấn đề sau:" },
                    {
                      type: "list",
                      items: [
                        { label: "Nhóm 1 — Một nỗi đau không rõ ràng", text: "Ví dụ: sự nghiệp trì trệ, vợ có hiện tượng ngoại tình, cảm giác không ổn... Nguyên nhân của nỗi đau này thường không rõ ràng, nhưng bạn lại muốn có giải pháp rõ ràng — nếu có thì nó cũng thường không logic và không hiệu quả." },
                        { label: "Nhóm 2 — Một mục tiêu không sao đạt được", text: "Ví dụ: đặt mục tiêu lấy tiến sĩ trong 3 năm mà chẳng biết bắt đầu từ đâu; mục tiêu xây dựng hạnh phúc nhưng lại lệ thuộc vào đối phương." },
                        { label: "Nhóm 3 — Một giải pháp hiệu quả với người khác nhưng không hiệu quả với mình", text: "Thậm chí còn phát sinh thêm vấn đề." }
                      ]
                    },
                    { type: "paragraph", text: "Chú ý:" },
                    {
                      type: "list",
                      items: [
                        "Tất cả mọi người đều có vấn đề.",
                        "Vấn đề khó khăn là nguồn gốc của sự trưởng thành.",
                        "Nhờ giải quyết vấn đề khó khăn một cách liên tục thì mới có sự sáng tạo, và sáng tạo chỉ sinh ra trong khó khăn.",
                        "Vấn đề của tôi không phải là vấn đề của tôi: nghĩa là kẻ có vấn đề nghiêm trọng thật và kẻ luôn cho mọi vấn đề là nghiêm trọng là khác nhau.",
                        "Vấn đề mà tôi không thể giải quyết cho tôi, thì khi đó nó không còn là vấn đề của tôi nữa, mà nó là sự thật của cuộc đời.",
                        "Giải quyết vấn đề con người bao giờ cũng phức tạp và mất nhiều thời gian hơn giải quyết công việc.",
                        "Hãy luôn nghĩ về vấn đề một cách tích cực và cảm nhận nó, chắc chắn sẽ có giải pháp đúng đắn.",
                        "Hành động giải quyết vấn đề cá nhân chỉ đúng khi bạn có kế hoạch đúng."
                      ]
                    },
                    { type: "paragraph", text: "Các bước để giải quyết vấn đề:" },
                    {
                      type: "list",
                      items: [
                        "B1: Xác định chính xác vấn đề.",
                        "B2: Xử lý các vấn đề có tính ưu tiên.",
                        "B3: Tổng hợp các nguyên nhân gây ra vấn đề.",
                        "B4: Tổng hợp tất cả các phương án có thể giải quyết vấn đề.",
                        "B5: Ưu tiên phương pháp tốt nhất.",
                        "B6: Đưa ra các nguyên tắc sau khi giải quyết xong."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: "Làm Việc Nhóm",
              articles: [
                {
                  title: "Làm Việc Nhóm",
                  body: [
                    { type: "paragraph", text: "Quản trị nhóm (25/08/2024 – 12/02/2025)." },
                    { type: "heading", text: "Tổng quan" },
                    { type: "subheading", text: "1. Khái niệm" },
                    {
                      type: "list",
                      items: [
                        { label: "Mô hình phòng ban", text: "Nhà quản lý ra lệnh, nhân viên làm theo." },
                        { label: "Mô hình nhóm làm việc", text: "Được tập hợp bởi những người có kỹ năng bổ sung cho nhau, có trách nhiệm như nhau. Trưởng nhóm có chức năng cung cấp nguồn lực cho nhóm, huấn luyện thành viên, và phải liên kết, phối hợp với các phòng ban khác." }
                      ]
                    },
                    {
                      type: "note",
                      text: "Cả 2 mô hình vẫn tồn tại trong thực tế, chỉ hiệu quả ở một môi trường nào đó chứ không có mô hình nào toàn vẹn cả. Nhóm là một số người với các kỹ năng bổ sung cho nhau, cùng cam kết làm việc, chia sẻ trách nhiệm và quyền lợi chung với một kết quả cuối cùng là quyết định của cả nhóm."
                    },
                    { type: "subheading", text: "2. Vai trò của nhóm" },
                    {
                      type: "list",
                      items: [
                        "Tăng được năng suất.",
                        "Các quyết định mang tính toàn diện hơn và giảm thiểu được nhược điểm cá nhân.",
                        "Đem lại sự khiêm tốn.",
                        "Tạo ra môi trường học tập tốt hơn.",
                        "Tạo ra một sự tận tâm mà không cần động viên.",
                        "Tạo môi trường chia sẻ thông tin tuyệt vời."
                      ]
                    },
                    { type: "note", text: "Yếu tố cốt lõi của thành công đó là ý chí tập thể." },
                    { type: "paragraph", text: "Để tổ chức mô hình nhân sự phải cân nhắc mô hình phòng ban hay mô hình nhóm, dựa trên 3 khía cạnh:" },
                    {
                      type: "list",
                      items: [
                        "Tính phức tạp của vấn đề cao: bắt buộc làm mô hình nhóm.",
                        "Tính phụ thuộc lẫn nhau: làm việc nhóm rất quan trọng.",
                        "Các mục tiêu rất rõ ràng: chắc chắn phải có nhóm."
                      ]
                    },
                    {
                      type: "note",
                      text: "Không nhất thiết phải lập nhóm khi công việc có tính đơn giản, thường xuyên xảy ra, không có tính lệ thuộc. Khi có các vấn đề phức tạp, phụ thuộc, phải đạt mục tiêu thì nên có nhóm."
                    },
                    { type: "heading", text: "Thành lập và hoạt động nhóm" },
                    { type: "paragraph", text: "Có nhiều cách thành lập nhưng đều có các thừa số chung sau:" },
                    {
                      type: "list",
                      items: ["Nhà tài trợ.", "Trưởng nhóm.", "Thành viên nhóm.", "Người hướng dẫn."]
                    },
                    {
                      type: "note",
                      text: "Sau khi nhóm được thành lập thì phải có văn bản mang tính pháp lý, lập tức ra một bản tuyên bố nội dung hoạt động của nhóm, trong đó giải thích rõ ràng bản chất công việc và kỳ vọng của nhóm so với mục tiêu. Mọi thứ phải rất rõ ràng."
                    },
                    { type: "subheading", text: "Hoạt động nhóm" },
                    {
                      type: "list",
                      items: [
                        "Thống nhất cách ra quyết định.",
                        "Lên lịch trình công việc của nhóm.",
                        "Xây dựng các cơ chế kết hợp của nhóm.",
                        "Thiết lập các hành vi ứng xử."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: "Kỹ Năng Thuyết Trình",
              articles: [
                {
                  title: "Kỹ Năng Thuyết Trình",
                  body: [
                    {
                      type: "paragraph",
                      italic: true,
                      text: "\"Một mâu thuẫn xảy ra là: bạn là một nhà lãnh đạo thực thụ, bạn có vị thế, giỏi chuyên môn, nhưng khi bạn mở mồm nói thì không thu hút nổi ai nghe cả.\""
                    },
                    { type: "heading", text: "Ba nhân tố thuyết trình" },
                    {
                      type: "list",
                      items: [
                        { label: "1. Sự tín nhiệm", text: "Gồm 2 cấp: Cấp 1 — nội dung ý kiến của bạn phải được người đối diện nhìn nhận là đúng đắn. Cấp 2 — phẩm chất cá nhân của người nói, tức là người đối diện phải thấy bạn đáng tin cậy, trung thực, chân thành." },
                        { label: "2. Hiểu người nghe", text: "Người thuyết trình phải rất hiểu người bị thuyết trình." },
                        { label: "3. Lý lẽ vững chắc", text: "Ý kiến đưa ra phải đủ lý lẽ và vững chắc." }
                      ]
                    },
                    { type: "heading", text: "1. Chinh phục khối óc" },
                    { type: "paragraph", text: "Khối óc lập tức bị chinh phục bởi các nhân tố sau:" },
                    {
                      type: "list",
                      items: [
                        "Cấu trúc nói phải hợp lý: phù hợp với khả năng của người nghe, tùy chủ đề, tùy mẫu người nghe.",
                        "Bằng chứng đưa ra phải rất thuyết phục và cụ thể: dẫn chứng, số liệu thống kê, chứng nhận, các tài liệu.",
                        "Nhấn mạnh lợi ích mà người nghe đánh giá cao: lợi ích mà họ không có (tiền bạc, thời gian, danh tiếng, thương hiệu, tài sản); lợi ích rằng họ sẽ không mất bất cứ thứ gì đang có mà còn được hơn thế; nỗi sợ mất đi lớn hơn nhiều so với mong muốn có được một cái gì đó."
                      ]
                    },
                    { type: "heading", text: "2. Chinh phục trái tim" },
                    {
                      type: "list",
                      items: [
                        "Cảm xúc là yếu tố quyết định tới 95%, yếu tố logic chiếm phần rất nhỏ.",
                        "Nếu ta trình bày mà gợi được cảm xúc (thái độ nhẹ nhàng, đại từ trân trọng, ánh mắt dịu dàng) thì nó sẽ giúp người nghe dễ nhớ hơn, thúc đẩy hành vi rất nhanh, đặc biệt đề xuất của ta được chấp nhận một cách nhanh chóng mà không cần suy xét đúng sai trước.",
                        "Trái tim bị chinh phục nếu: mô tả vấn đề thật sống động; sử dụng phép ẩn dụ (mô tả sự vật dưới hình ảnh của một sự vật khác); dùng phương pháp so sánh; dùng phương pháp kể chuyện."
                      ]
                    },
                    { type: "heading", text: "3. Xử lý kẻ chống đối" },
                    {
                      type: "list",
                      items: [
                        "Nắm chắc động cơ của kẻ chống đối: không hiểu biết; mất quyền lợi; tiếp cận các góc nhìn khác nhau; thói quen; động cơ phá hoại.",
                        "Hiểu thật rõ cảm xúc của người chống đối.",
                        "Xây dựng lòng tin bằng cách lắng nghe thật chân thành để chứng tỏ mình hiểu họ, đánh giá cao họ, lập tức họ sẽ cởi mở, rồi mình có quyền hỏi và đáp.",
                        "Sau khi được giải đáp thì hãy diễn giải bằng cách thừa nhận những điều người ta phản đối.",
                        "Sau đó vừa giải thích vừa làm rõ vấn đề rồi hoá giải bằng được cái mà người chống đối muốn."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: "Hạ Gục Nhà Tuyển Dụng",
              articles: [
                {
                  title: "Hạ Gục Nhà Tuyển Dụng",
                  body: [
                    { type: "heading", text: "Tổng quan" },
                    { type: "subheading", text: "1. Thị trường sức lao động" },
                    {
                      type: "list",
                      items: [
                        "Kinh tế sơ khai là kinh tế tự cung tự cấp: nền kinh tế không có địa điểm để đổi; hàng hoá là vật phẩm; không hề có tiền tệ.",
                        "Nền kinh tế bắt đầu hiện đại, kinh tế trao đổi xuất hiện: sản phẩm làm ra để đổi chứ không phải để ăn. Vật phẩm đem đi đổi gọi là hàng hoá, lúc này có địa điểm đổi gọi là thị trường. Vật trung gian để đổi gọi là tiền."
                      ]
                    },
                    {
                      type: "note",
                      text: "Nền kinh tế hiện nay là nền kinh tế làm ra để đổi: gọi theo vật mang đi đổi thì là nền kinh tế hàng hoá, gọi theo địa điểm đổi thì là kinh tế thị trường, gọi theo vật trung gian là kinh tế tiền tệ."
                    },
                    { type: "paragraph", text: "Trong kinh tế thị trường thì lại có:" },
                    {
                      type: "list",
                      items: [
                        { label: "Thị trường yếu tố sản xuất", text: "Đầu vào của sản xuất, gồm: nguyên vật liệu; máy móc; người; khác." },
                        { label: "Thị trường hàng hoá", text: "Bán sản phẩm đầu ra." },
                        { label: "Thị trường tài chính", text: "Quyền sử dụng tiền." }
                      ]
                    },
                    {
                      type: "note",
                      text: "Kinh tế trao đổi có đặc trưng là mọi hành vi mua bán. Trong thị trường yếu tố sản xuất nó chứa đựng thị trường sức lao động (người) — nghĩa là đi xin việc được hiểu là đi bán mình, tuyển dụng là đi mua sức lao động."
                    },
                    { type: "subheading", text: "2. Người ứng viên phải chuẩn bị hành trang cho mình (giá trị của mình)" },
                    { type: "paragraph", text: "Hành trang về nhận thức:" },
                    {
                      type: "list",
                      items: [
                        "Nền kinh tế hiện nay là nền kinh tế hỗn loạn và khủng hoảng triền miên. Do đó năng lực quản trị sự nghiệp của một cá nhân được đặt lên hàng đầu với các hành vi: kỹ năng tìm kiếm việc làm; kỹ năng phát triển chính mình; kỹ năng giữ nghiệp.",
                        "Với một nền kinh tế hỗn loạn thế này thì không có gì là ổn định hết. Các doanh nghiệp sẵn sàng biến cuộc đời bạn thành một món hàng dùng một lần rồi vứt đi. Như vậy, bạn phải tự biến mình thành chuyên gia giải thoát cho chính mình.",
                        "Để giải thoát cho chính mình thì phải đặt quyền lợi tài chính của bạn lên hàng số 1 — nghĩa là bạn phải là kẻ chủ động tạo ra cái mà doanh nghiệp bắt buộc phải cần tới bạn, rồi bán nó với giá cao."
                      ]
                    },
                    { type: "paragraph", text: "Mà muốn có cái để bán thì:" },
                    {
                      type: "list",
                      items: [
                        { label: "Nghiên cứu và phát triển", text: "Phải có kỹ năng nghề nghiệp; giá trị nghề nghiệp; khả năng quản trị sự nghiệp." },
                        { label: "Lên chiến lược cho chính mình", text: "Tạo cho mình một sự nổi bật, một sự thu hút: chuyên môn, uy tín, hình ảnh cá nhân." },
                        { label: "Bán hàng", text: "Mở rộng vùng khách hàng tiềm năng (nhiều công ty phải cần đến mình) rồi áp dụng kỹ năng bán hàng: lên CV, chiến thuật bán, chiến thuật tìm việc, phỏng vấn..." }
                      ]
                    },
                    {
                      type: "note",
                      text: "Bạn chỉ có thể bán được bạn với giá cao nếu có các giá trị: khả năng vận hành trong sản xuất; khả năng giải quyết một vấn đề nhất định nào đó (dự báo, phòng ngừa, xử lý sự cố) — nghĩa là người ta tuyển một người về không phải để vận hành mà là để giải quyết vấn đề cho chuỗi kiếm tiền của họ."
                    },
                    {
                      type: "note",
                      text: "Kết luận: để quản trị sự nghiệp ta phải đóng gói các kỹ năng — tổng hợp các khả năng để giải quyết một vấn đề nào đó, sau đó lên một kế hoạch tấn công thông qua một CV hiệu quả nhất có thể, với một phân khúc thị trường mà bản thân ta phải chọn được."
                    },
                    { type: "subheading", text: "Hành trang về các kỹ năng và giá trị nghề nghiệp" },
                    { type: "paragraph", text: "Đây là nền tảng cho mọi sự nghiệp và phải chuẩn bị với một sức lao động cực lớn, gồm 3 nhóm:" },
                    {
                      type: "list",
                      items: [
                        { label: "Nhóm 1 — Kiến thức", text: "Các thao tác kỹ thuật sử dụng trong nghề nghiệp hiện tại, giúp vận hành công việc." },
                        { label: "Nhóm 2 — Kỹ năng", text: "Các kỹ năng dùng trong mọi nghề: hầu hết là các kỹ năng có tính phương pháp." },
                        { label: "Nhóm 3 — Thái độ", text: "Các giá trị nghề nghiệp là các niềm tin mà người lao động phải có, tương đương với yếu tố thái độ." }
                      ]
                    },
                    { type: "paragraph", text: "Các kỹ năng cần có:" },
                    {
                      type: "list",
                      items: [
                        { label: "1. Kỹ năng thao tác kỹ thuật", text: "Để vận hành công việc: thao tác công việc hàng ngày, giờ bắt buộc phải gắn với công nghệ." },
                        { label: "2. Kỹ năng giao tiếp", text: "Xử lý phần cảm xúc, thể hiện trình độ hiểu biết về con người — chiếm 80% thành công. Giao tiếp gồm 4 kỹ năng cơ bản (nói, nghe, viết, công nghệ) và 4 kỹ năng bổ trợ (trang phục, thái độ cư xử, ngôn ngữ cơ thể, chỉ số cảm xúc)." },
                        { label: "3. Kỹ năng giải quyết vấn đề", text: "Đây là kỹ năng mà bạn được trả nhiều tiền lương nhất. Phải tìm được vấn đề là gì, sau đó đề xuất phương án. Tư duy phản biện là công cụ để giải quyết vấn đề, đồng nghĩa với tư duy logic." },
                        { label: "4. Kỹ năng đa nhiệm", text: "Là kỹ năng được ưa chuộng nhất hiện nay — phản ứng với mọi kích thích để nhảy từ vấn đề này sang vấn đề khác rất nhanh. Cấu tạo gồm 3 kỹ năng: sắp xếp ưu tiên, tổ chức công việc, quản trị thời gian." },
                        { label: "5. Kỹ năng làm việc nhóm", text: "Phải có năng lực làm việc nhóm (năng lực tổ chức), gồm: cam kết (thành công của nhóm được đặt lên hàng đầu); các quy định dựa trên mục tiêu của nhóm; thông tin trong nhóm phải thông suốt; giữ mọi cam kết của nhóm; mọi lời khen là của nhóm, mọi phê bình là của tôi." },
                        { label: "6. Kỹ năng sáng tạo", text: "Là loại kỹ năng phức tạp nhất, phải nhuyễn 5 kỹ năng trên thì mới xuất hiện. Sáng tạo là phát triển một ý tưởng một cách khác biệt, sau đó biến nó thành hiện thực." },
                        { label: "7. Kỹ năng lãnh đạo", text: "Là kỹ năng phức tạp thứ nhì. Muốn làm lãnh đạo cần 2 phẩm chất: có đích để đi tới, và thuyết phục người khác cùng đi tới đích đó." }
                      ]
                    },
                    { type: "paragraph", text: "Các giá trị nghề nghiệp:" },
                    {
                      type: "list",
                      items: [
                        { label: "1. Động lực làm việc", text: "Thể hiện ở từng hành vi có tính cam kết, tính ham học hỏi, sự phát triển trong công việc, sẵn sàng đương đầu với khó khăn. Động lực chỉ xuất hiện nếu bạn có mục tiêu và sự tin tưởng về mục tiêu đó — có thể tự xây hoặc người khác giúp." },
                        { label: "2. Tính cam kết", text: "Tận tụy với công việc, làm việc không kể thời gian, không kể công việc đó có trong mô tả hay không, làm không màng tới quyền lợi cá nhân." },
                        { label: "3. Quyết tâm", text: "Đặc trưng là khả năng chịu đựng, không nản lòng, không bỏ cuộc — liên tục đưa ra các giải pháp để hoàn thành công việc chứ không phải từ bỏ." },
                        { label: "4. Lòng tự trọng", text: "Là sự liêm chính, đồng nghĩa với việc chịu trách nhiệm trong mọi việc." },
                        { label: "5. Năng suất", text: "Tức là làm đúng việc + biết cách làm tốt nhất." },
                        { label: "6. Tôn trọng hệ thống và quy trình", text: "Tính tuân thủ tổ chức, chấp hành mệnh lệnh như thể đó là quyết định của chính mình." }
                      ]
                    },
                    { type: "heading", text: "Kỹ năng hạ gục nhà tuyển dụng" },
                    { type: "subheading", text: "1. Viết CV" },
                    {
                      type: "list",
                      items: [
                        "Luôn luôn phải có một chức danh cho một công việc mục tiêu.",
                        "Luôn luôn phải có một lịch sử quá trình làm việc.",
                        "Bắt buộc phải có một mục liên quan tới năng lực cốt lõi.",
                        "Tuyệt đối không đề cập đến tiền lương trên CV.",
                        "Giữ hồ sơ của bạn có trọng tâm.",
                        "Hãy nhấn mạnh thành tựu của mình một cách trung thực."
                      ]
                    },
                    { type: "subheading", text: "2. Kỹ năng marketing bản thân" },
                    { type: "paragraph", text: "Bản chất là xây dựng danh tiếng, mà danh tiếng là giá trị thương hiệu." },
                    { type: "paragraph", text: "Xây dựng hình ảnh cần chú ý:" },
                    {
                      type: "list",
                      items: [
                        "Bỏ ngay những thứ có tính chất chụp giật.",
                        "Giá trị thương hiệu cần phù hợp với công việc mục tiêu.",
                        "Xây dựng thương hiệu cần có tính chất lâu dài."
                      ]
                    },
                    {
                      type: "paragraph",
                      text: "Những thứ nhà tuyển dụng muốn bạn vẽ ra: kỹ năng và giá trị nghề nghiệp (13 cái), hiệu suất cao, sự tin cậy, có tính chuyên nghiệp, phẩm chất đỉnh cao là cam kết, một chuyên gia tài giỏi bất chấp tính cách."
                    },
                    {
                      type: "note",
                      text: "Tất cả điều đó được tích vào CV như một lời khẳng định \"TÔI CÓ GIÁ TRỊ\". Hãy sử dụng các từ: Tôi có khả năng; Tôi có thể mang lại; Tôi có thể dành được; Tôi coi trọng..."
                    },
                    { type: "subheading", text: "3. Kỹ năng phỏng vấn" },
                    { type: "paragraph", text: "Bắt buộc phải tạo được ấn tượng đầu tiên:" },
                    {
                      type: "list",
                      items: [
                        "Sơ yếu lý lịch.",
                        "Túi đựng tài liệu, giấy và bút.",
                        "Thư giới thiệu.",
                        "Các câu hỏi để hỏi nhà tuyển dụng.",
                        "Luôn mỉm cười, không thể hiện căng thẳng.",
                        "Trang phục phù hợp.",
                        "Tác phong lịch sự, trân trọng.",
                        "Giọng điệu chào hỏi tự tin.",
                        "Phi ngôn ngữ."
                      ]
                    },
                    { type: "subheading", text: "4. Nắm được nhà tuyển dụng muốn gì" },
                    { type: "paragraph", text: "Người phỏng vấn cần tìm người giải quyết công việc cho họ, nhưng phải là người có năng lực phù hợp. Nên họ muốn:" },
                    {
                      type: "list",
                      items: [
                        "Một người có năng lực, nhưng bắt buộc phải phù hợp với công việc họ cần.",
                        "Người có khả năng dự đoán, xác định, ngăn chặn và giải quyết vấn đề trên cơ sở phối hợp với bộ phận khác.",
                        "Cách ứng xử chuyên nghiệp.",
                        "Nếu có động lực làm việc thì đó là ưu thế tuyệt đối.",
                        "Kỹ năng làm việc nhóm và khả năng lãnh đạo là ưu thế thứ nhì."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: "Nghệ Thuật Quyến Rũ",
              articles: [
                {
                  title: "Nghệ Thuật Quyến Rũ",
                  body: [
                    { type: "heading", text: "Vai trò và bản chất của quyến rũ" },
                    { type: "subheading", text: "1. Khái niệm" },
                    {
                      type: "list",
                      items: [
                        "Quyến rũ, xét theo gốc Latinh, là \"dẫn đi lầm đường lạc lối\".",
                        "Do vậy, quyến rũ là đỉnh cao của thuyết phục. Mà thuyết phục là đỉnh cao của giao tiếp. Mà giao tiếp là biểu hiện của hiểu con người. Mà hiểu người là nhân tố quyết định để thành công."
                      ]
                    },
                    { type: "subheading", text: "2. Bản chất và vai trò của quyến rũ" },
                    {
                      type: "list",
                      items: [
                        { label: "Giai đoạn 1", text: "Phụ nữ bắt đầu có quyền lực nhờ sử dụng tình dục như một thứ vũ khí điều khiển đàn ông. Do vậy, nghệ thuật quyến rũ sinh ra bởi phụ nữ." },
                        { label: "Giai đoạn 2", text: "Đàn ông bắt đầu học nghệ thuật quyến rũ của phụ nữ. Nhưng nó không chỉ dừng lại ở chuyện tình dục mà còn là thứ vũ khí mạnh hơn, dùng trong nhiều lĩnh vực hơn." },
                        { label: "Giai đoạn 3", text: "Quyến rũ có mặt ở khắp mọi nơi, tồn tại ở mọi hình thức có thể, dùng cho mọi chủ thể." }
                      ]
                    },
                    {
                      type: "note",
                      text: "Bản chất của nghệ thuật quyến rũ là: nó không hề ép buộc, không sỗ sàng trực tiếp, nó mềm dẻo hoàn toàn — dùng sự vui thú, khoái lạc làm mồi nhử cảm xúc, đẩy người khác vào thế ham muốn, bối rối và sẽ chịu sự áp đặt của ta."
                    },
                    { type: "subheading", text: "3. Phân tích bản chất của quyến rũ" },
                    { type: "paragraph", text: "Sở dĩ quyến rũ thành công vì bản chất con người có những đặc tính sau:" },
                    {
                      type: "list",
                      items: [
                        "Sự thiếu sáng suốt vì cảm xúc chi phối.",
                        "Sự khao khát có được tình yêu.",
                        "Mọi sự chống lại quyến rũ đều vô nghĩa, thậm chí càng chống càng bị mê hoặc.",
                        "Quyến rũ không thuần túy chỉ là vẻ bên ngoài mà nó là trò chơi của tâm lý.",
                        "Kẻ tin vào tình yêu, tin vào tình cảm lãng mạn, sự thiêng liêng, nhiệm màu của tình yêu là kẻ ngu xuẩn nhất trên đời.",
                        "Nếu quyến rũ những điều đúng thì ai cũng muốn làm nạn nhân của nó."
                      ]
                    },
                    { type: "heading", text: "Quá trình quyến rũ" },
                    {
                      type: "list",
                      items: [
                        "Đây là quá trình dồn toàn bộ sức lực để đi sâu vào tâm trí đối tượng — một quá trình khá dài.",
                        "Đòi sự kiên nhẫn; sự tập trung; từ bỏ thói quen ái kỷ."
                      ]
                    },
                    { type: "paragraph", text: "Khi đạt được nền tảng đó rồi thì bắt đầu ứng dụng những nguyên tắc:" },
                    {
                      type: "list",
                      items: [
                        "Dẹp ngay được ưu tư, dẹp được bất an khi người khác không quan tâm tới mình.",
                        "Hãy luôn bí ẩn vì con người có một đặc trưng đáng sợ nhất là họ luôn nhàm chán.",
                        "Luôn gây bất ngờ, thậm chí làm cho họ sốc.",
                        "Bắt đầu quay cho họ chóng mặt thì thôi: cho hy vọng rồi đẩy thất vọng, cứ thế lặp lại liên tục, chắc chắn họ sẽ gục ngã."
                      ]
                    },
                    { type: "heading", text: "9 mẫu quyến rũ" },
                    {
                      type: "paragraph",
                      text: "Để quyến rũ được kẻ khác thì cần 2 yếu tố: kẻ đi quyến rũ có sức mạnh và nghệ thuật quyến rũ đến đâu, và đối tượng bị quyến rũ có sức phòng vệ đến đâu. Hãy nhận diện tiềm năng lôi cuốn của chính mình bằng 9 mẫu sau:"
                    },
                    {
                      type: "list",
                      items: [
                        { label: "1. Mẫu Mỹ Nhân", text: "Gồm mỹ nhân ấn tượng và mỹ nhân gợi cảm — mẫu ai cũng mơ tưởng vì giúp họ thoát khỏi giới hạn thực tại, đẩy họ vào khu vực lạc thú. Đây là mẫu nguy hiểm nhất trong 9 mẫu nhưng cũng có sức quyến rũ mạnh nhất. Mỹ nhân nằm ở ngoại hình, ngoại hình đẹp nhất ở cơ thể, cơ thể đẹp nhất ở khuôn mặt, khuôn mặt đẹp nhất ở vẻ lạnh lùng." },
                        { label: "2. Mẫu Phóng Đãng", text: "Hiểu sự thiếu thốn và nhu cầu của người phụ nữ và cung cấp những điều ấy cho họ, không hề biết kiềm chế, làm tất cả cho tình yêu, cho người phụ nữ lạc thú mà cô ta thèm khát. Trơ trẽn, hóm hỉnh, thích mạo hiểm, làm những điều cấm kỵ — đó là lõi của sự quyến rũ. Đạt thành công nhanh nhất nhưng rất dễ bị trừng phạt trong thời đại hiện nay." },
                        { label: "3. Mẫu Người Tình Lý Tưởng", text: "Nền tảng quyến rũ là lấp vào những ước mơ bị tan vỡ — một chút lãng mạn, một chút phiêu lưu, đầy sự đồng cảm, đầy sự hấp dẫn. Biểu hiện: hiệp sĩ hào hoa, dâng hiến mọi thứ cho người mình yêu, mạnh mẽ, giàu có mà hiền hoà, tài ba. Đang có ưu thế nhất hiện nay, nhưng nếu có sai lầm bê bối thì mọi chuyện sẽ tồi tệ hơn so với kẻ khác." },
                        { label: "4. Mẫu Công Tử", text: "Vừa mang tính nam nhi, vừa mang tính nữ nhi — được quyền làm đẹp, bí ẩn, kích thích. Đặc điểm: khéo léo trong trang phục, độc đáo mà không khoa trương, có nét xấc xược, không quan tâm người khác nghĩ gì, sống để vui chơi chứ không hẳn có tính làm việc. Có sức ảnh hưởng với đám đông nhưng rất dễ bị ghen tị bởi người cùng giới." },
                        { label: "5. Mẫu Hồn Nhiên", text: "Không gò bó, ngay thẳng, thật thà, thoải mái, vui vẻ — khiến người khác có cảm tình ngay phút đầu, mong muốn bảo vệ hoặc giúp đỡ. Đặc tính: ngây thơ nhưng thực chất không hề ngây thơ; sự tinh quái (không biết sợ là gì); rất thần đồng khi vào lĩnh vực mạnh; vô tư, sẵn sàng trải nghiệm điều mạo hiểm mà không phòng thủ cho bản thân." },
                        { label: "6. Mẫu Đỏng Đảnh", text: "Có khả năng trì hoãn sự thoả mãn, làm cho nạn nhân phải phục tùng — mồi chài, đưa đẩy, hứa hẹn một phần thưởng nào đó để dẫn dụ, rồi không thoả mãn hoặc thoả mãn từ từ từng tí một khiến con mồi bối rối và quỳ dưới chân. Tinh hoa là đưa người khác vào bẫy cảm xúc rồi giam họ lại, sau đó sai khiến. Có khả năng làm cho người yêu thương mình trở nên căm phẫn." },
                        { label: "7. Mẫu Duyên Dáng", text: "Lôi cuốn mà không kèm tình dục — thay vì quan tâm tới mình thì tập trung chú ý đến mục tiêu, hiểu tâm hồn, nỗi đau, tâm trạng của con mồi. Khi gặp bất đồng không biện luận, không tranh cãi, không than phiền, tạo cảm giác thoải mái tuyệt đối. Càng gần họ ta càng lệ thuộc — họ đánh vào lòng tự trọng, cái tôi, sự ái kỷ của kẻ khác để chi phối hoàn toàn. Là loại quyến rũ mang tính lâu dài nhất, nhưng nếu lạm dụng quá đà sẽ đồng nghĩa với giả tạo, thảo mai." },
                        { label: "8. Mẫu Uy Lực", text: "Ẩn chứa sự tự tin, đầy sinh lực, ý thức làm việc có mục đích, trạng thái mãn nguyện trên khuôn mặt — cử chỉ phi thường, lời nói hùng hồn nhưng đầy bí ẩn, làm người khác bị lôi cuốn, bị quy phục. Họ có uy lực vì: thể hiện tính mục đích trong hành vi; bí ẩn (vừa vô sản lại vừa quý tộc, vừa tử tế vừa tàn nhẫn); thánh thiện; tài hùng biện; kịch tính trong hành vi; không gò bó, chấp nhận rủi ro; luôn nồng nhiệt; luôn bộc lộ điểm yếu; phiêu lưu; có sức hút, điển hình ở đôi mắt." },
                        { label: "9. Mẫu Ngôi Sao", text: "Tách biệt hẳn với người khác bằng một phong cách rất đặc biệt — muốn được ngắm nhưng lại muốn giữ khoảng cách, khiến người khác khao khát hơn. Ảnh hưởng ở chỗ gần với ước mơ của họ. Là loại khó nhất vì phải tạo một sức ảnh hưởng đủ lớn, sau đó là sự bí ẩn để kẻ khác đoán về mình. Quyến rũ rất nhanh vì thỏa mãn ước mơ của đối tượng, nhưng cũng rất nhanh chán — đây là mẫu quyến rũ không bền nhất." }
                      ]
                    },
                    { type: "heading", text: "Những mẫu người không bao giờ quyến rũ được người khác" },
                    { type: "paragraph", text: "Nhóm cặn bã, điểm chung là ích kỷ đến cùng cực:" },
                    {
                      type: "list",
                      items: ["Kẻ cục súc", "Kẻ gây nghẹt thở", "Kẻ dạy đời", "Kẻ keo kiệt", "Kẻ vụng về", "Kẻ ba hoa", "Kẻ phản ứng", "Kẻ thô lỗ"]
                    },
                    { type: "heading", text: "Những mẫu người chẳng làm gì cũng bị quyến rũ" },
                    { type: "paragraph", text: "Dân trí thấp, thiếu nghiêm trọng về phương diện cảm xúc nào đó — cho họ cái họ thiếu thì lập tức họ sẽ bị quyến rũ:" },
                    {
                      type: "list",
                      items: [
                        "Kẻ phóng đãng hoặc mỹ nhân hoàn lương: kẻ hết thời.",
                        "Người mơ mộng hão huyền: luôn luôn thất vọng với những gì mình có.",
                        "Kẻ được nuông chiều: mẫu con cưng cổ điển, lười biếng.",
                        "Kẻ lý tưởng.",
                        "Kẻ ngôi sao đi xuống.",
                        "Kẻ tập sự.",
                        "Kẻ chinh phục.",
                        "Kẻ sính của lạ.",
                        "Nữ hoàng sân khấu.",
                        "Kẻ giáo sư.",
                        "Loại giai nhân.",
                        "Đứa bé lớn.",
                        "Kẻ cứu nạn.",
                        "Kẻ trác táng.",
                        "Kẻ sính thần tượng.",
                        "Người duy cảm.",
                        "Lãnh tụ cô đơn.",
                        "Kẻ lưỡng tính."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: "Quản Trị Cảm Xúc",
              articles: [
                {
                  title: "Quản Trị Cảm Xúc",
                  body: [
                    {
                      type: "paragraph",
                      italic: true,
                      text: "\"Quản trị là thủ đoạn để đạt mục tiêu trên nền tảng nguồn lực hữu hạn.\""
                    },
                    { type: "heading", text: "Tổng quan" },
                    { type: "subheading", text: "1. Cảm xúc là gì?" },
                    {
                      type: "list",
                      items: [
                        "Là khái niệm mà ai cũng biết nhưng không thể định nghĩa được.",
                        "Cảm xúc được diễn tả là sự rung cảm khi gặp một con người hoặc sự vật nào đó.",
                        "Theo y học: phần vỏ não có 2 phần — trung tâm cảm xúc và phần não lý trí."
                      ]
                    },
                    { type: "subheading", text: "Thông minh cảm xúc" },
                    { type: "paragraph", text: "Được hiểu là:" },
                    {
                      type: "list",
                      items: [
                        "Nhận dạng được cảm xúc là gì.",
                        "Nhận diện được sự tác động của cảm xúc đó với những người và sự vật xung quanh.",
                        "Nhận ra rằng nếu cảm xúc được tích lũy bởi trải nghiệm và sự học thì thông minh cảm xúc sẽ biến thành năng lực cảm xúc."
                      ]
                    },
                    { type: "subheading", text: "Năng lực cảm xúc" },
                    { type: "paragraph", text: "Còn gọi là sự khôn ngoan, cấu tạo gồm:" },
                    {
                      type: "list",
                      items: [
                        "Sự thôi thúc: tự tạo động lực.",
                        "Năng lực tự điều chỉnh: tự kiểm soát được mình.",
                        "Sự tự nhận thức: sự tự học.",
                        "Khả năng nhận thức được năng lực cá nhân mình: hiểu mình là ai.",
                        "Khả năng xã hội: cách thức giải quyết các mối quan hệ xã hội.",
                        "Sự thấu cảm.",
                        "Khả năng giao tiếp."
                      ]
                    },
                    {
                      type: "note",
                      text: "Năng lực cảm xúc chiếm 75% thành công, thực tế có thể lên tới 96%. EQ chiếm vai trò quyết định trong mọi ngành. IQ kết hợp tốt với EQ sẽ nhân bội IQ, ngược lại nếu kết hợp không tốt thì sẽ âm bội."
                    },
                    { type: "subheading", text: "2. Những sai lầm khi hiểu về năng lực cảm xúc" },
                    {
                      type: "list",
                      items: [
                        "Sai lầm 1: người ta hiểu năng lực cảm xúc là sự tử tế, sự nhường nhịn. Thực tế nó là sự không hoàn hảo, chứa đựng sự thẳng thắn trong đó.",
                        "Sai lầm 2: năng lực cảm xúc là cho mọi người tự do. Hoàn toàn sai — nó phải được kiểm soát để bộc lộ thích hợp với mọi người xung quanh một cách hiệu quả.",
                        "Sai lầm 3: cảm xúc của nữ tốt hơn của nam là sai. Mỗi giới tính đều có những yếu tố nổi trội khác nhau.",
                        "Sai lầm 4: năng lực cảm xúc không lệ thuộc di truyền và chỉ phát triển trong thời niên thiếu — sai, nó được phát triển nếu được học hỏi, trải nghiệm.",
                        "Sai lầm 5: chỉ tập trung vào IQ mà bỏ qua EQ — năng lực cảm xúc giúp người ta muốn làm, còn IQ giúp người ta biết làm mà thôi.",
                        "Sai lầm 6: chỉ số IQ có xu hướng tăng, nhưng chỉ số EQ lại có xu hướng giảm.",
                        "Sai lầm 7: những giải pháp sai lầm với năng lực cảm xúc: triệt tiêu cảm xúc; bỏ mặc cảm xúc; xử lý cảm xúc tức thì, vội vàng."
                      ]
                    },
                    { type: "heading", text: "Các kỹ năng năng lực cảm xúc" },
                    { type: "subheading", text: "1. Tự nhận thức" },
                    {
                      type: "paragraph",
                      text: "Trong mọi quyết định của con người lúc nào cũng có yếu tố cảm xúc — một quyết định bao giờ cũng bắt đầu từ lý trí và đi kèm là cảm xúc. Tự nhận thức gồm 3 thành tố:"
                    },
                    {
                      type: "list",
                      items: [
                        { label: "Nhận thức cảm xúc", text: "Nhận thức được sự ảnh hưởng to lớn của cảm xúc đến kết quả cuối cùng của một quyết định." },
                        { label: "Luôn tự nhận thức mình là ai", text: "Điểm mạnh, điểm yếu của mình; đánh giá và rút kinh nghiệm từ trải nghiệm của bản thân; tiếp thu các phản hồi có tính xây dựng; có khả năng thể hiện mình." },
                        { label: "Sự tự tin", text: "Hiện diện với tâm thế của kẻ chủ động; nói ra được quan điểm của mình, quan điểm ấy khác biệt với kẻ khác và phải bảo vệ được nó; quyết đoán với các quyết định của mình, có cơ sở nên có thể bất chấp áp lực và sự rủi ro." }
                      ]
                    },
                    { type: "subheading", text: "2. Tự kiểm soát" },
                    {
                      type: "paragraph",
                      text: "Tự kiểm soát cảm xúc không chỉ đơn thuần là chịu đau và tìm giải pháp đối đầu với nó, mà còn cần:"
                    },
                    {
                      type: "list",
                      items: [
                        { label: "Xả stress", text: "Đẩy các hoạt động tích cực ra — ví dụ: tập thể dục, thiền, nghỉ ngơi, nhậu nhẹt. Nếu vẫn không được thì bỏ việc đi." },
                        { label: "Kiểm soát sự bốc đồng", text: "\"Một cú bốc đồng bằng một đời bốc cứt.\" Luôn luôn nhắc nhở mình hậu quả là rất lớn nếu bốc đồng." },
                        { label: "Sự đổi mới", text: "Năng lực thích nghi với môi trường — thay đổi là điều bắt buộc dù có muốn hay không. Do đó hãy loại bỏ sự sợ hãi, lo lắng, đồng thời vẽ ra viễn cảnh tươi đẹp nếu mình thay đổi." }
                      ]
                    },
                    { type: "subheading", text: "3. Tự tạo động lực cho mình" },
                    {
                      type: "list",
                      items: [
                        "Động lực ở đây là một luồng cảm xúc tích cực, liên tục, bên trong cơ thể mình.",
                        "Biểu hiện là bạn liên tục có cảm xúc thích, thích và thích từng ngày — nó hút ta làm việc, khiến ta sáng tạo.",
                        "Các hành vi cổ vũ tinh thần bên ngoài chỉ đóng vai trò phụ trợ mà thôi."
                      ]
                    },
                    { type: "paragraph", text: "Việc tự thổi động lực cần chú ý khảo sát những điều sau:" },
                    {
                      type: "list",
                      items: [
                        "Mục tiêu cuộc sống.",
                        "Tìm được một sự thử thách nào đó.",
                        "Sự khích lệ của công việc.",
                        "Sự tiếp tục được học hỏi.",
                        "Công việc và các hoạt động đem lại cho bạn sự tự hào hoặc có sự cộng tác với những người bạn yêu quý, rồi tiếp tục công việc ấy đem lại cho bạn một địa vị.",
                        "Tiền bạc."
                      ]
                    },
                    {
                      type: "note",
                      text: "Có tổng cộng 20 kỹ năng quản trị cảm xúc nhưng 3 kỹ năng trên là quan trọng nhất — hãy luyện thành thạo trước đã."
                    }
                  ]
                }
              ]
            }
          ]
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
              items: [],
              spot: "left"
            },
            {
              title: "Việc xã hội cần",
              items: [],
              spot: "right"
            },
            { title: "Hạnh phúc nhưng ít tiền", items: [], spot: "top-left" },
            { title: "Chỉ là giấc mơ", items: [], spot: "top-right" },
            { title: "Giàu có nhưng nhàm chán", items: [], spot: "bottom" },
            { title: "Nghề nghiệp lý tưởng", items: [], spot: "center" }
          ],
          // Bài viết đặt trực tiếp dưới sơ đồ, không qua mục con — xem renderTab() trong app.js.
          article: {
            title: "Thuyết Con Nhím là gì?",
            body: [
              {
                type: "paragraph",
                text: "Thuyết Con Nhím (Hedgehog Concept) là một khái niệm do Jim Collins đưa ra trong cuốn sách nổi tiếng \"Từ Tốt Đến Vĩ Đại\" (Good to Great, xuất bản năm 2001), sau khi nghiên cứu điều gì tạo nên sự khác biệt giữa các công ty chỉ \"tốt\" và các công ty thực sự \"vĩ đại\"."
              },
              { type: "heading", text: "I. Nguồn gốc: Con Nhím và Con Cáo" },
              {
                type: "list",
                items: [
                  "Ẩn dụ này bắt nguồn từ bài luận \"The Hedgehog and the Fox\" của nhà tư tưởng Isaiah Berlin, dựa trên một câu ngạn ngữ Hy Lạp cổ: \"Con cáo biết nhiều thứ, nhưng con nhím chỉ biết một thứ — mà là thứ lớn nhất.\"",
                  "Cáo là loài tinh ranh, biết rất nhiều mánh khóe, theo đuổi cùng lúc nhiều mục tiêu và chiến lược. Nhím thì chậm chạp, chỉ có một \"chiêu\" duy nhất: cuộn tròn lại xù gai — nhưng lại luôn thắng cáo, vì hiểu rõ và làm cực tốt đúng một điều đơn giản đó.",
                  "Jim Collins dùng ẩn dụ này để chỉ ra: các công ty vĩ đại không cố giỏi mọi mặt như cáo, mà tư duy đơn giản, tập trung như con nhím."
                ]
              },
              { type: "heading", text: "II. Ba vòng tròn của Khái niệm Con Nhím" },
              {
                type: "paragraph",
                text: "Khái niệm Con Nhím nằm ở giao điểm của 3 vòng tròn — trả lời 3 câu hỏi:"
              },
              {
                type: "list",
                items: [
                  { label: "Điều bạn đam mê", text: "Việc bạn thực sự say mê, sẵn sàng dốc hết tâm huyết để theo đuổi." },
                  {
                    label: "Điều bạn có thể giỏi nhất",
                    text: "Lĩnh vực bạn có tiềm năng làm xuất sắc hơn phần lớn người khác — không phải chỉ \"giỏi\", mà là thứ bạn có thể trở thành giỏi nhất."
                  },
                  {
                    label: "Động cơ kinh tế",
                    text: "Hoạt động tạo ra giá trị, thu nhập hoặc nguồn lực đủ để duy trì và phát triển bền vững lâu dài."
                  }
                ]
              },
              {
                type: "note",
                text: "Giao điểm của cả 3 vòng tròn chính là \"Khái niệm Con Nhím\" — kim chỉ nam để dồn toàn bộ nguồn lực vào đúng một hướng, thay vì dàn trải."
              },
              { type: "heading", text: "III. Vì sao phải tìm đúng giao điểm" },
              {
                type: "list",
                items: [
                  "Sự đơn giản của tư duy con nhím nằm ở chỗ: cái gì không nằm trong giao điểm 3 vòng tròn đều trở nên không quan trọng, có thể bỏ qua.",
                  "Nhờ vậy quyết định trở nên rõ ràng, dễ dàng hơn — không phải chọn giữa hàng chục hướng đi, mà chỉ cần hỏi: điều này có nằm trong giao điểm của tôi không?"
                ]
              },
              { type: "heading", text: "IV. Ứng dụng vào việc tìm kiếm sự nghiệp" },
              {
                type: "paragraph",
                text: "Thay vì tự hỏi một cách mơ hồ \"mình nên làm nghề gì?\", Thuyết Con Nhím giúp tách câu hỏi đó thành 3 câu hỏi độc lập, rõ ràng — rồi đi tìm giao điểm của cả 3, thay vì chọn nghề theo cảm tính hoặc theo số đông."
              },
              { type: "subheading", text: "5 bước áp dụng thực tế" },
              {
                type: "list",
                items: [
                  {
                    label: "Bước 1 — Tìm ra điều mình thích",
                    text: "Tự hỏi bản thân hứng thú đặc biệt với môn học/lĩnh vực nào, thích tìm hiểu về điều gì, và việc gì khiến mình làm mà quên cả thời gian."
                  },
                  {
                    label: "Bước 2 — Xác định năng lực vượt trội",
                    text: "Ghi lại những việc mình làm tốt hơn, nhanh hơn, dễ dàng hơn so với người xung quanh — và được người khác công nhận là giỏi, chứ không chỉ tự nhận thấy."
                  },
                  {
                    label: "Bước 3 — Khám phá nhu cầu xã hội",
                    text: "Tìm hiểu ngành nào đang cần nhân lực, xu hướng phát triển của thị trường lao động — vì nhu cầu này thay đổi theo từng giai đoạn, từng khu vực."
                  },
                  {
                    label: "Bước 4 — Tìm điểm giao thoa",
                    text: "Đối chiếu kết quả của 3 bước trên — nghề nghiệp nào nằm gần nhất với cả 3 vòng tròn chính là hướng đi lý tưởng."
                  },
                  {
                    label: "Bước 5 — Đánh giá và điều chỉnh định kỳ",
                    text: "Sau một thời gian theo đuổi, tự hỏi lại cả 3 câu hỏi: mình có còn thích công việc này không, có còn tiến bộ/giỏi thêm không, và thị trường có còn cần nữa không — để kịp thời điều chỉnh thay vì đi sai hướng quá lâu."
                  }
                ]
              },
              { type: "subheading", text: "Ví dụ minh hoạ" },
              {
                type: "paragraph",
                text: "Một bạn học tốt các môn khối A, thích tính toán và có khả năng phân tích số liệu nhanh — đây là dấu hiệu của \"điều mình giỏi\". Nếu bạn cũng thực sự hứng thú với những con số (không chỉ giỏi mà còn thích), và đúng lúc thị trường đang cần nhân sự phân tích tài chính, kế toán, kiểm toán (nhu cầu xã hội) — thì giao điểm của 3 vòng tròn gợi ý ngay các hướng đi như kế toán, kiểm toán hoặc phân tích tài chính."
              },
              {
                type: "note",
                text: "Thuyết con nhím không đòi hỏi câu trả lời hoàn hảo ngay từ đầu — đây là một quá trình liên tục thử, quan sát phản hồi thực tế và tinh chỉnh dần, đặc biệt qua Bước 5 (đánh giá định kỳ)."
              }
            ]
          }
        },
        {
          id: "conduong",
          label: "Con đường Thành Công",
          sections: [
            {
              title: "Các Nhân Tố Cốt Lõi Của Thành Công",
              items: [],
              articles: [
                {
                  title: "Các Nhân Tố Cốt Lõi Của Thành Công",
                  body: [
                    { type: "paragraph", text: "Chương 3 (23/12/2023 – 20/11/2024)." },
                    { type: "heading", text: "Mở đầu" },
                    {
                      type: "paragraph",
                      text: "Thượng đế cho mỗi người một tiềm năng bằng nhau, ẩn chứa bên trong, nhưng người ta không lôi nó ra được. Việc lôi tiềm năng ra là một hành trình trọn đời, được gọi là quá trình phát triển bản thân. Khi lôi nó ra, phải quản trị nó."
                    },
                    { type: "heading", text: "Các nhân tố để phát triển bản thân" },
                    { type: "subheading", text: "1. Phải có mục tiêu (Mục đích cuộc đời)" },
                    {
                      type: "list",
                      items: [
                        "Hãy tập trung cải thiện chính mình bằng 1 mục đích rất cụ thể.",
                        "Phát triển bản thân là hành trình trọn đời, vì vậy hãy kiên nhẫn.",
                        "Đừng cho rằng phát triển bản thân là theo tuổi đời.",
                        "Làm ngay được hiểu là làm ngay bây giờ, tuyệt đối không được nghĩ là tôi sẽ làm.",
                        "Đừng sợ sai lầm. Sai lầm là một bước của quá trình thành công. Hãy chủ động sai lầm.",
                        "Đừng tìm cách tốt nhất rồi mới bắt đầu, hãy bắt đầu rồi sẽ tìm được cách tốt nhất."
                      ]
                    },
                    { type: "note", text: "Nếu giải quyết được nhân tố này thì thành công nắm chắc 50%." },
                    { type: "subheading", text: "2. Phải hiểu chính mình (Chiếm 20% thành công)" },
                    {
                      type: "list",
                      items: [
                        "Hiểu mình là hiểu: Điểm Mạnh, Điểm Yếu, Sở Trường, Đam Mê.",
                        "Người hiểu mình là người biết mình cần làm gì và kiên quyết làm điều đó, họ đam mê và nỗ lực trên mọi mặt trận.",
                        "Để thành công thì hãy làm những việc mình thực sự thích và đam mê. Nếu chưa biết nó là gì thì hãy cứ tìm kiếm nó rồi bạn sẽ thấy."
                      ]
                    },
                    { type: "subheading", text: "3. Liên tục gia tăng giá trị bản thân (5% thành công)" },
                    {
                      type: "list",
                      items: [
                        "Đừng so sánh mình với người khác vì đó luôn là sự so sánh khập khiễng; hãy so sánh với chính bản thân mình ngày hôm qua; phủ định chính mình.",
                        "Nguyên tắc này về bản chất là để xây dựng sự tự tin một cách từ từ. Muốn làm điều đó thì hãy:"
                      ]
                    },
                    {
                      type: "list",
                      items: [
                        "Thực hành kỷ luật cho việc nhỏ nhất.",
                        "Liên tục ăn mừng chiến thắng với chính mình.",
                        "Chịu trách nhiệm cá nhân về chính cuộc sống của mình.",
                        "Mô tả mình bằng 1 từ duy nhất rồi điều chỉnh điều đó."
                      ]
                    },
                    { type: "subheading", text: "4. Nguyên tắc suy ngẫm (Tự kỷ ám thị)" },
                    {
                      type: "list",
                      items: [
                        "Hãy dành 1 khoảng thời gian để suy ngẫm trên con đường đi tìm thành công.",
                        "Hãy suy ngẫm có chủ đích thì mới rút ra được kinh nghiệm cần rút.",
                        "Nếu chịu suy ngẫm bạn sẽ thấy:"
                      ]
                    },
                    {
                      type: "list",
                      items: [
                        { label: "Tài sản lớn nhất", text: "Thái Độ." },
                        { label: "Trách nhiệm lớn nhất của một người", text: "Nỗ Lực; Tiền Bạc; Thời Gian." },
                        { label: "Điều tuyệt vời nhất với chính mình", text: "Gia Đình." },
                        { label: "Điều tệ nhất với chính mình", text: "Cũng là Gia Đình." },
                        { label: "Cảm xúc đáng giá nhất", text: "Tình Yêu (tổ quốc, gia đình, nam nữ, động vật...)." },
                        { label: "Cảm xúc tệ nhất", text: "Tự Thương Hại." },
                        { label: "Thói quen tốt nhất", text: "Kỷ Luật." },
                        { label: "Thói quen tệ nhất", text: "Thiếu Kiên Nhẫn." },
                        { label: "Điều thoả mãn nhất", text: "Giúp Đỡ Người Khác." },
                        { label: "Mọi người đánh giá cao nhất", text: "Sự Tự Tin." },
                        { label: "Mọi người đánh giá thấp nhất", text: "Sự Dối Trá." }
                      ]
                    },
                    { type: "subheading", text: "5. Nguyên tắc nhất quán (Kỷ luật)" },
                    {
                      type: "list",
                      items: [
                        "Kỷ luật là làm việc theo nguyên tắc của chính mình đặt ra.",
                        "Hãy lập tức thiết lập kỷ luật sau khi có động lực. Biểu hiện của kỷ luật là:"
                      ]
                    },
                    {
                      type: "list",
                      items: [
                        "Tuyệt đối không trì hoãn công việc.",
                        "Việc nhỏ nhất cũng làm tức thì.",
                        "Làm tuyệt đối phải chu đáo chứ không làm cho xong.",
                        "Đã làm thì không nói tiêu cực về công việc mình đang làm.",
                        "Không ghen tị với người khác mà hãy học họ.",
                        "Bỏ ngay thói quen bỏ dở công việc.",
                        "Tuyệt đối không né các cơ hội để hoàn thiện mình."
                      ]
                    },
                    {
                      type: "note",
                      text: "Nếu có mục tiêu thì sẽ có động lực, có động lực sẽ có kỷ luật, có kỷ luật sẽ có phát triển, đã phát triển thì sẽ có sáng tạo."
                    },
                    { type: "subheading", text: "6. Nguyên tắc môi trường" },
                    {
                      type: "list",
                      items: [
                        "Sự phát triển sẽ nở rộ trong môi trường thuận lợi.",
                        "Ở đời có một chân lý: khi bạn thay đổi chưa chắc đã phát triển, nhưng đã muốn phát triển thì chắc chắn phải thay đổi. Do vậy:"
                      ]
                    },
                    {
                      type: "list",
                      items: [
                        "Luôn đánh giá môi trường hiện tại, tránh các môi trường: lên vị trí dẫn đầu quá nhanh, không đủ thách thức, không còn vị trí nào mình muốn đạt đến nữa.",
                        "Hãy là trung bình cộng của 5 người bạn mình hay chơi nhất.",
                        "Ở môi trường mới, tiếp tục tiến lên và phải chấp nhận sự chỉ trích. Càng thành công sẽ càng bị chỉ trích."
                      ]
                    },
                    { type: "subheading", text: "7. Nguyên tắc thiết kế (Chiến lược)" },
                    {
                      type: "list",
                      items: [
                        "Bạn phải có năng lực lập kế hoạch để đạt mục tiêu đã đặt ra, nếu không bạn sẽ rơi vào bản thiết kế của kẻ khác.",
                        "Thiết kế cuộc sống quan trọng gấp triệu lần so với thiết kế nghề nghiệp. Cuộc sống là gốc. Bản thiết kế cuộc sống không có quyền làm lại lần thứ 2.",
                        "Sau khi thiết kế thì phải biến nó thành hiện thực bằng cách: đọc sách, học tập, lưu trữ, tư duy, làm các công việc hàng ngày, lặp lại liên tục như một bản năng."
                      ]
                    },
                    { type: "subheading", text: "8. Nguyên tắc nỗi đau" },
                    {
                      type: "list",
                      items: [
                        "Bạn muốn thành công thì bạn phải quản trị thật tốt các trải nghiệm xấu, các nỗi đau mà ta phải đối mặt.",
                        "Mỗi cách phản ứng với nỗi đau sẽ đem lại cho bạn một tương lai khác nhau.",
                        "Đừng ngây thơ nghĩ mình sẽ không bao giờ gặp đau đớn, vì không có ai là không có vấn đề; không ai thích khó khăn nhưng nó là tác nhân để phát triển — hãy chấp nhận nó; rất ít người có thể biến tiêu cực thành tích cực nên hãy chuẩn bị sẵn sàng.",
                        "Lên danh mục các nỗi đau để chuẩn bị:"
                      ]
                    },
                    {
                      type: "list",
                      items: [
                        { label: "Nỗi đau do thiếu kinh nghiệm", text: "Hãy kiên nhẫn." },
                        { label: "Nỗi đau do kém cỏi", text: "Hãy đánh giá lại năng lực rồi vươn lên." },
                        { label: "Nỗi đau của sự thất vọng", text: "Hãy hành động." },
                        { label: "Nỗi đau của xung đột", text: "Hãy đẩy năng lực lãnh đạo lên." },
                        { label: "Nỗi đau của sự thay đổi", text: "Hãy bắt đầu lại từ đầu." },
                        { label: "Nỗi đau do sức khoẻ", text: "Hãy thay đổi thói quen sinh hoạt." },
                        { label: "Nỗi đau do ra quyết định kém", text: "Hãy nâng sự mạo hiểm lên." },
                        { label: "Nỗi đau mất tiền", text: "Hãy bù đắp bằng sự cẩn thận đến triệt để." },
                        { label: "Nỗi đau mất một mối quan hệ", text: "Loại bỏ người xấu, xây dựng quan hệ với người tốt; điều chỉnh mình nếu mình có lỗi." },
                        { label: "Nỗi đau mình không phải số 1", text: "Hãy khiêm tốn lại." },
                        { label: "Nỗi đau của thiếu trách nhiệm", text: "Hãy kỷ luật mình thật kỹ." }
                      ]
                    },
                    { type: "subheading", text: "9. Nguyên tắc cái thang (Nhân cách)" },
                    {
                      type: "list",
                      items: [
                        "Nhân cách là nhân tố quyết định thành công (14 nguyên tắc còn lại chỉ đóng vai trò quan trọng).",
                        "Gọi là nguyên tắc cái thang vì để đạt được nó phải leo rất từ từ.",
                        "Bậc thang nhân cách gồm:"
                      ]
                    },
                    {
                      type: "list",
                      items: [
                        "Hãy làm điều tốt đã: đúng ở bên trong trước rồi mới làm những điều đúng ở bên ngoài.",
                        "Thực hiện nguyên tắc vàng: mình muốn được đối xử như nào thì phải đối xử với người khác như thế.",
                        "Coi trọng sự khiêm tốn cao hơn tất cả các nhân tố khác, vì khiêm tốn là biểu hiện cao nhất của tầm nhìn — ai cũng có điểm yếu, sẵn sàng phục vụ người khác bạn sẽ thắng.",
                        "Biết ơn.",
                        "Trung thực."
                      ]
                    },
                    { type: "note", text: "Hãy rèn luyện thật kỹ càng và đầy bản lĩnh." },
                    { type: "subheading", text: "10. Nguyên tắc liên tục" },
                    {
                      type: "list",
                      items: [
                        "Trong thực tế, hầu hết mọi người mới sử dụng được một phần tiềm năng rất nhỏ vì họ không hành động liên tục.",
                        "Một cuộc sống trung bình là đỉnh của đáy; là sự tầm thường; là sự né tránh của kẻ lười biếng; là kẻ bị lãng quên; là tội ác cực lớn với bản thân, gia đình và nhân loại.",
                        "Bắt buộc sự nỗ lực liên tục phải trở thành lối sống của bạn thì ắt sẽ thành công."
                      ]
                    },
                    { type: "subheading", text: "11. Nguyên tắc đánh đổi" },
                    {
                      type: "list",
                      items: [
                        "Để trưởng thành bạn buộc phải có phẩm chất từ bỏ.",
                        "Cuộc đời luôn phải đánh đổi một cái gì đó để đạt được một cái gì đó khác. Không người nào thành công mà không phải đánh đổi."
                      ]
                    },
                    {
                      type: "note",
                      text: "Chú ý: nỗi đau của việc đánh đổi thường kéo dài hơn niềm vui mà nó mang lại, vì vậy hãy lựa chọn vấn đề để đánh đổi, nhưng tuyệt đối không: đánh đổi hôn nhân lấy sự nghiệp; đánh đổi mối quan hệ, bạn bè, con cháu lấy danh tiếng hay tiền bạc; đánh đổi giá trị bản thân lấy bất cứ điều gì."
                    },
                    { type: "paragraph", text: "Những cái nên đánh đổi tức thì:" },
                    {
                      type: "list",
                      items: [
                        "Đổi tài chính lấy tiềm năng cho tương lai.",
                        "Đổi sự hài lòng để lấy sự phát triển bản thân.",
                        "Đổi cuộc sống gấp gáp lấy cuộc đời tươi đẹp (làm những việc mình giỏi, mình đam mê, làm với người phù hợp, kiểm soát lịch trình tối ưu).",
                        "Từ bỏ sự thêm vào để đổi lấy sự nhân lên."
                      ]
                    },
                    { type: "subheading", text: "12. Nguyên tắc tò mò (Phân tích, phản biện, hay nguyên tắc Tại sao)" },
                    {
                      type: "list",
                      items: [
                        "Tò mò là chìa khóa của sự phát triển. Nó tạo ra sự khao khát kiến thức, giúp ta vượt ra khỏi những khả năng bình thường, tạo ra sự khác biệt.",
                        "Hãy luôn đặt 2 chữ tại sao ở cửa miệng, cho nó thành từ yêu thích nhất.",
                        "Loại bỏ sự thiếu tự tin mà hãy mạnh dạn mà tò mò.",
                        "Luôn có tư duy của người mới bắt đầu.",
                        "Hãy tìm cái mới mỗi ngày.",
                        "Hãy tìm câu trả lời ở nhiều góc độ khác nhau của vấn đề.",
                        "Hãy tin rằng tò mò là vô hạn."
                      ]
                    },
                    { type: "subheading", text: "13. Nguyên tắc tìm người cố vấn" },
                    {
                      type: "list",
                      items: [
                        "Hãy tìm một kẻ cố vấn cho mình ở mỗi một thời điểm.",
                        "Cố vấn phải là người có trải nghiệm, có nhân cách, có tri thức và có thêm cả sự khôn ngoan."
                      ]
                    },
                    {
                      type: "paragraph",
                      italic: true,
                      text: "\"Muốn biết con đường phía trước như thế nào thì hãy hỏi những người đang quay về từ đó.\""
                    },
                    { type: "subheading", text: "14. Nguyên tắc mở rộng (Nguyên tắc không có giới hạn)" },
                    {
                      type: "list",
                      items: [
                        "Tiềm năng của con người là vô hạn, những người xuất sắc nhất thế giới chưa sử dụng quá 7% nguồn lực.",
                        "Đừng làm nhiều việc mà chỉ làm những việc có hiệu quả.",
                        "Luôn nghĩ tôi có thể làm được việc này bằng những cách nào, bỏ ngay cách nghĩ có làm được không.",
                        "Luôn nghĩ về nhiều cửa, nghĩa là có nhiều cách để thành công chứ không phải 1 cách."
                      ]
                    },
                    { type: "subheading", text: "15. Nguyên tắc đóng góp (Nguyên tắc vàng)" },
                    { type: "paragraph", text: "Hãy tìm mọi cách phát triển và giúp đỡ người khác:" },
                    {
                      type: "list",
                      items: [
                        "Làm gương cho họ.",
                        "Tạo sóng gió cho họ chứ không cho họ cái ao.",
                        "Bắt họ lựa chọn các đóng góp xứng đáng.",
                        "Mọi hành vi phải cụ thể của cụ thể.",
                        "Luyện khả năng biết ơn cho họ.",
                        "Tạo thói quen đặt mọi người lên trước.",
                        "Tập cho họ không bị ai chi phối hành vi.",
                        "Tuyệt đối không cho một kẻ nào sở hữu họ.",
                        "Giáo dục họ tập trung tối đa vào phát triển bản thân.",
                        "Tạo cho họ thói quen liên tục."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: "Đường Tới Thành Công",
              items: [],
              articles: [
                {
                  title: "Đường Tới Thành Công",
                  body: [
                    {
                      type: "paragraph",
                      text: "Chương 4 — Biển báo chỉ dẫn con đường đến thành công (24/12/2023 – 22/11/2024)."
                    },
                    { type: "heading", text: "15 biển báo chỉ dẫn" },
                    { type: "subheading", text: "1. Xác định cụ thể mục tiêu cuộc sống" },
                    {
                      type: "list",
                      items: [
                        "Mục tiêu đó phải được viết ra một cách xúc tích và được miêu tả cụ thể nhất có thể. Rồi phải thuộc lòng nó, ngày nào cũng đọc nó.",
                        "Mục tiêu được hiểu nôm na là bạn sẽ trở thành người thế nào trong tương lai, có 2 dạng: đích ước mơ (không dựa trên nguồn lực thực tế) và đích khát vọng (một phần của ước mơ, nhưng thực tế và dựa trên nguồn lực khả thi).",
                        "Khát vọng hướng con người hành động một cách vô thức, nó thôi thúc cảm xúc, thúc đẩy tư tưởng, chuyển sang hành động cụ thể, sau đó sẽ có sáng tạo và kết quả là thành công.",
                        "Khát vọng mà trở thành tính cách của ta thì thành công sẽ nối tiếp thành công.",
                        "Để có khát vọng phải tìm bằng được yếu tố khát khao vượt trội (dựa vào nguồn lực trội).",
                        "Mục tiêu cuộc đời của mỗi người là khác nhau và nó dựa vào nguồn lực và hệ giá trị cá nhân riêng."
                      ]
                    },
                    { type: "subheading", text: "2. Hãy tự tin" },
                    {
                      type: "list",
                      items: [
                        "Đẳng cấp cao nhất của tiềm năng.",
                        "Phải tin vào chính mình và làm cho người khác tin mình bằng cách làm mình xứng đáng với niềm tin đó.",
                        "Hãy bắt đầu xây dựng niềm tin với những người thân yêu nhất. Khi họ tin bạn, bạn sẽ tin chính mình.",
                        "Sau khi tin bản thân thì hãy tin người bên cạnh, vì thế giới sẽ thừa nhận bạn nếu bạn thừa nhận họ.",
                        "Để tự tin mà không cần người khác thì: luôn giúp đỡ người khác; bất cứ việc gì đến tay mình hãy toàn tâm toàn ý thực hiện bằng toàn bộ khả năng; đừng coi nhẹ bản thân; luôn đánh giá và kiểm soát bản thân, loại bỏ tự ti, tự mãn.",
                        "Khi đã hiểu mình thì cần làm chủ nó và đưa vào hoạt động thực tế.",
                        "Hãy tự tin từ những cái nhỏ trước. Đi từng bước, rồi thành công sẽ nối tiếp thành công.",
                        "Biến công việc thành niềm vui, không ghen tị với thành công của người khác.",
                        "Đừng quá quan tâm tới kết quả, vì kết quả trước sau gì cũng tới.",
                        "Hãy trở thành cấp trên hà khắc nhất của mình, tuyệt đối không chấp nhận sự thương hại của bất cứ kẻ nào."
                      ]
                    },
                    { type: "subheading", text: "3. Hãy chủ động" },
                    {
                      type: "list",
                      items: [
                        "Chủ động là làm theo ý chí của mình với những việc mà mình thấy nên làm, thấy đúng, nhưng ở tâm thế không để ai nhắc nhở.",
                        "Hãy tập nó từng ngày, ít nhất là 1 việc kể cả những việc bạn không được giao.",
                        "Phần thưởng của người chủ động là vô biên, kết quả là sẽ thành công."
                      ]
                    },
                    { type: "subheading", text: "4. Hãy sáng tạo" },
                    {
                      type: "list",
                      items: [
                        "Dấu hiệu thực sự của trí tuệ không phải là hiểu biết mà là khả năng sáng tạo.",
                        "Sáng tạo được hiểu là tạo ra sự khác biệt: hoàn thành công việc trong thời gian ngắn nhất mà đạt chất lượng tốt nhất.",
                        "Bất cứ điều gì giúp bạn tiết kiệm thời gian, công sức chính là biểu hiện đầu tiên của sáng tạo.",
                        "Xét về vai trò, sáng tạo là biến số kỹ năng lớn nhất trong tổng các kỹ năng để đi tìm thành công. Hãy tập trung rèn luyện nó."
                      ]
                    },
                    { type: "subheading", text: "5. Lòng nhiệt tình" },
                    {
                      type: "list",
                      items: [
                        "Lòng nhiệt tình chính là nhân tố cảm hứng, nó chính là những cảm xúc tích cực.",
                        "Ai cũng yêu mến những người nhiệt tình và vui vẻ.",
                        "Lòng nhiệt tình giúp công việc của bạn nhẹ nhàng hơn, ngắn hơn và lấy lòng được nhiều người.",
                        "Lòng nhiệt tình là: bận rộn với việc duy trì thành quả; không phí thời gian chê trách chính quyền, chỉ trích đồng nghiệp, cấp trên; luôn tích cực trong công việc; không kể lể, lòng vòng.",
                        "Người kết hợp lòng nhiệt tình với công việc thì luôn có chất lượng công việc tốt nhất cùng tiền lương hậu hĩnh nhất."
                      ]
                    },
                    { type: "subheading", text: "6. Hãy hành động" },
                    {
                      type: "list",
                      items: [
                        "Hành động là cách phác hoạ rõ nét nhất về con người mình.",
                        "Hạnh phúc đích thực mà một người thụ hưởng bắt nguồn từ chính những hành động anh ta làm cho người khác.",
                        "Thành công chỉ có nếu trên đường đi luôn giúp người khác gặt hái thành công.",
                        "Để thành công không nói mồm mà hãy hành động, kiên trì, nhẫn nại, bền bỉ mỗi ngày trên 1 nguyên tắc là luôn vì sự phát triển của kẻ bên cạnh."
                      ]
                    },
                    { type: "subheading", text: "7. Hãy tự chủ (Nguyên tắc dũng cảm)" },
                    {
                      type: "list",
                      items: [
                        "Đây là nguyên tắc của sự tự trọng, mà tự trọng là nguyên tắc hàng đầu của sự dũng cảm.",
                        "Tự chủ là làm theo ý chí của mình, tuyệt đối không làm theo ý chí của kẻ khác hoặc đám đông.",
                        "Không ai kiểm soát được người khác trước khi kiểm soát được bản thân.",
                        "Biểu hiện của kẻ kém tự chủ: yếu đuối, luôn bị ảnh hưởng bởi những lời phán xét của người xung quanh; bị lây nhiễm sự tiêu cực của người khác; nói xấu người khác; mất bình tĩnh khi bị đối xử tệ; không có khả năng tranh đấu, không có thành tựu gì.",
                        "Tự chủ là làm chủ được bản năng cơ bản của con người, điển hình là bản năng tức giận, bảo thủ và đa nghi."
                      ]
                    },
                    { type: "subheading", text: "8. Làm nhiều hơn mức được trả" },
                    {
                      type: "list",
                      items: [
                        "Người hạnh phúc không phải người được nhận nhiều hơn mà là người cho đi nhiều hơn.",
                        "Luôn sẵn lòng giúp đỡ người khác làm việc hiệu quả hơn, đó là phẩm chất đưa bạn lên những vị trí hàng đầu.",
                        "Khi bạn giúp đỡ người khác, bạn sẽ hút được thiện chí và sự hỗ trợ của người khác; họ sẽ cần bạn, bạn sẽ ảnh hưởng được họ và bạn sẽ nhận được những phần thưởng hậu hĩnh hơn rất nhiều."
                      ]
                    },
                    { type: "subheading", text: "9. Hãy giao tiếp thật tốt" },
                    {
                      type: "list",
                      items: [
                        "Giao tiếp cuốn hút là nhân tố số 1 để kéo cảm xúc của người khác, mà cảm xúc chi phối họ không dưới 75%.",
                        "Giao tiếp là trình độ sử dụng các công cụ: nói, nghe, viết, hành vi phi ngôn ngữ — cùng với nó là nội dung nói.",
                        "Giao tiếp cuốn hút giúp bạn có lợi thế cạnh tranh hơn so với kẻ khác, từ đó thành công sẽ đến."
                      ]
                    },
                    { type: "subheading", text: "10. Hãy hành động đúng đắn" },
                    {
                      type: "list",
                      items: [
                        "Nhanh thì rất tốt, nhưng đúng mới là tất cả để thành công.",
                        "Hãy làm những gì, nói những gì thật đúng đắn, thật đàng hoàng, xuất phát từ trái tim mình thì khi đó bạn mới có hi vọng nhận lại sự đền đáp từ người đối diện."
                      ]
                    },
                    { type: "subheading", text: "11. Hãy tập trung" },
                    {
                      type: "list",
                      items: [
                        "Trí óc con người là một tổ hợp chứa rất nhiều khuynh hướng đối nghịch, nhưng mỗi trí óc lại có một phẩm chất vượt trội. Do đó bắt buộc phải duy trì được sự tập trung trong trí não, nếu để sự loạn xạ chi phối thì tính phá hoại sẽ xảy ra.",
                        "Không nên tập trung: nghĩ ngợi về những rắc rối; nghĩ về sự ủ ê; nghĩ về những điều tiêu cực; nghĩ về khổ cực, đau đớn, nghèo đói, bệnh tật.",
                        "Hãy tập trung nghĩ về những điều tích cực, tập trung vào những ý nghĩ của chính mình chứ không phải kẻ khác."
                      ]
                    },
                    { type: "subheading", text: "12. Hãy kiên trì" },
                    {
                      type: "list",
                      items: [
                        "Kiên trì được hiểu là nghị lực và sự bền bỉ để chinh phục mọi thứ.",
                        "Chúng ta đều có rất nhiều ý tưởng, nhiều kế hoạch nhưng chẳng làm được gì, vì thiếu kiên trì.",
                        "Muốn thành công thì phải có tích lũy, mà tích lũy thì luôn đòi hỏi quá trình lâu dài. Nó đòi sự can đảm, tự tin, cần cù, kiên nhẫn.",
                        "Đây hoàn toàn không phải phẩm chất của thiên phú mà do rèn luyện mà có.",
                        "Sự kiên trì là để biến sự tập trung thành hiện thực."
                      ]
                    },
                    { type: "subheading", text: "13. Hãy học tập từ thất bại" },
                    {
                      type: "list",
                      items: [
                        "Không có thất bại nếu bạn tiếp tục cố gắng.",
                        "Mọi thất bại nếu biết khai thác thì đều là nền tảng để xây dựng thành công.",
                        "Thất bại dạy cho ta sự nhẫn nại, cho ta bài học quý giá, cho ta một sự chiêm nghiệm về bản thân, cho ta thấy những chân lý.",
                        "Kẻ tật nguyền về thể xác hoàn toàn có thể thành công, nhưng tật nguyền về tinh thần thì chắc chắn là thất bại, điển hình của kẻ đó là luôn đầu hàng trước thất bại."
                      ]
                    },
                    { type: "subheading", text: "14. Hãy có lòng khoan dung" },
                    {
                      type: "list",
                      items: [
                        "Hiệu quả giáo dục cao nhất chính là giáo dục lòng khoan dung. Khoan dung là đặc điểm phân biệt rõ nét nhất giữa người và vật.",
                        "Hành vi khoan dung: gia tăng giúp đỡ người khác; gieo vào người khác những điều tốt trước khi họ vươn lên được; làm chủ tính hẹp hòi; sẵn lòng hợp tác với người khác; gạt định kiến sang một bên; phụng sự người khác nếu có thể; xứng đáng với mọi người để có lòng tin; chấp nhận mọi trọng trách trong cuộc sống."
                      ]
                    },
                    { type: "subheading", text: "15. Biển báo cuối cùng — Quy tắc vàng" },
                    {
                      type: "list",
                      items: [
                        "Hãy nhớ: không có 1 vị trí nào có thể bền vững mãi, không có thành công nào có thể duy trì được nếu không dựa trên chân lý và công lý.",
                        "Nguyên tắc duy trì thành công dựa trên chân lý và công lý là: quy luật của sự sống sót là sự thích nghi; tiếp tục phải khổ luyện; tiếp tục phải đấu tranh; tiếp tục gạt bỏ sự sợ hãi; tiếp tục quyết tâm và gia tăng niềm tin; bắt buộc phải giữ được động cơ và hành động tốt; tiếp tục đẩy lòng khoan dung lên."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: "Các Nguyên Tắc Quyền Lực",
              items: [],
              articles: [
                {
                  title: "Các Nguyên Tắc Quyền Lực",
                  body: [
                    { type: "paragraph", text: "Chương 5 (23/03/2024 – 28/11/2024)." },
                    { type: "heading", text: "Tổng quan" },
                    {
                      type: "list",
                      items: [
                        "Trong thực tế không một ai chịu nổi cảm giác là mình không có một tí quyền lực nào, ai có quyền càng muốn nhiều quyền hơn. Đặc biệt không kẻ nào muốn nhường quyền cho kẻ khác.",
                        "Nhưng trong thế giới hiện nay, bạn sẽ lập tức chết nếu bạn lộ ra sự khao khát quyền lực ấy. Do đó người ta phải có nguyên tắc sao cho cái khát khao ấy có một vỏ bọc rất biết điều, rất vừa phải, nhưng đầy nghệ thuật ở bên trong.",
                        "Sản phẩm của nghề lãnh đạo chính là Quyền Lực.",
                        "Do đó khi làm lãnh đạo, bắt buộc phải đạt được chỉ số gia tăng quyền lực, nhưng phải giữ được quyền lực đó — người ta gọi đó là các nguyên tắc của quyền lực."
                      ]
                    },
                    {
                      type: "note",
                      text: "Thế giới ngày nay là trò chơi trăm mưu ngàn kế và mỗi người chúng ta kẹt cứng trong đó. Rút chân là bất lực mà chống lại thì khốn khổ. Thay vì đó hãy tập trung cho sự thành thạo trò chơi quyền lực này. Để làm chủ được cuộc chơi này thì cái lõi là: Kiên Nhẫn, Cảnh Giác, Nhận Diện Tình Huống, Kiên Định để đánh giá kẻ đối diện. Linh hồn của cuộc chơi là bắt buộc phải nhận ra được động cơ của kẻ đối diện."
                    },
                    { type: "heading", text: "24 nguyên tắc quyền lực" },
                    { type: "subheading", text: "1. Đừng chơi trội quan thầy" },
                    {
                      type: "list",
                      items: [
                        "Tức là đừng để cấp trên có cảm giác họ thua bạn. Trong quá trình ứng xử, đừng bộc lộ tài năng quá đà.",
                        "Mọi trường hợp không được làm họ bị lu mờ.",
                        "Hãy tán dương cấp trên, ngây ngô trước họ và hãy luôn xin ý kiến họ."
                      ]
                    },
                    { type: "subheading", text: "2. Đừng quá tin cậy bạn bè và hãy học cách sử dụng kẻ thù" },
                    {
                      type: "list",
                      items: [
                        "Hãy thận trọng tối đa với bạn bè. Họ rất dễ phản bội bạn vì lòng đố kỵ. Theo thời gian họ sẽ muốn nắm quyền lực càng nhiều càng tốt — bản chất là do chúng ta không hiểu họ như chúng ta tưởng. Hãy luôn có một khoảng ranh giới với bạn bè, đừng để nó bằng 0.",
                        "Mặt khác, hãy thu nhận một kẻ thù cũ, họ có khuynh hướng trung thành hơn bạn bè nhiều, vì kẻ thù sẽ rơi vào thế phải chứng minh họ tốt hơn nhiều so với bạn nghĩ."
                      ]
                    },
                    { type: "note", text: "Hãy e sợ thằng bạn nhiều hơn so với kẻ thù. Nếu không có kẻ thù thì tạo kẻ thù rồi kết thân với họ." },
                    { type: "subheading", text: "3. Che đậy chủ tâm" },
                    {
                      type: "list",
                      items: [
                        "Tuyệt đối không hở ra ý đồ của mình, làm người đối diện không đoán được.",
                        "Khi cởi mở bạn sẽ mua được trọn vẹn cảm xúc của người đối diện, nhưng thật thà là một con dao lưỡi cùn, cắt không đứt mà chảy máu rất nhiều. Trung thực đồng nghĩa với mất lòng. Khi họ đã biết mình rồi thì họ sẽ khinh thường mình.",
                        "Do đó bắt buộc phải rèn luyện để ngụy trang ý đồ: dùng vẻ bên ngoài để ngụy trang chủ ý của ta, hoặc luôn đem lại cho họ một sự thoả mãn."
                      ]
                    },
                    { type: "subheading", text: "4. Luôn nói ít hơn mức cần thiết" },
                    {
                      type: "list",
                      items: [
                        "Bạn định tạo ấn tượng với mọi người bằng lời nói, nhưng khi nói càng nhiều thì bạn càng có vẻ tầm thường đi và đau đớn nhất là bạn nói mất kiểm soát.",
                        "Người uy quyền là người khiến kẻ khác phải rụt rè e sợ nếu nói ít hơn mức cần thiết. Hãy nói một cách mơ hồ, bí ẩn và bỏ ngỏ.",
                        "Khi im lặng cần có sự đúng lúc và tinh tế, do họ có cảm giác bất an, họ sẽ phản ứng lại bằng cách không nói gì nữa."
                      ]
                    },
                    { type: "subheading", text: "5. Bảo vệ thanh danh và uy tín" },
                    {
                      type: "list",
                      items: [
                        "Thanh danh phải được hiểu là hòn đá tảng lớn nhất của uy quyền — chỉ cần có thanh danh là có thể hù dọa bất cứ ai và chắc chắn sẽ thắng họ.",
                        "Nhưng khi thanh danh bị hạ, bạn rất dễ bị tổn thương và lập tức bị tấn công tứ phía. Do đó hãy bảo vệ thanh danh một cách kỹ lưỡng.",
                        "Phải triệt tiêu những đòn bôi nhọ và đặc biệt phải đập nó trước khi nó xảy ra.",
                        "Bắn thủng uy tín của kẻ chuẩn bị gây ra sự bôi nhọ đó, sau đó để yên cho công luận xử họ."
                      ]
                    },
                    { type: "subheading", text: "6. Thu hút chú ý bằng mọi cách" },
                    {
                      type: "list",
                      items: [
                        "Mọi người luôn đánh giá mỗi vẻ bề ngoài, cái gì họ không thấy thì xem như không có giá trị. Vì vậy đừng để mình bị chìm ngập trong đám đông hoặc chôn vùi trong quên lãng.",
                        "Hãy nổi trội, biến mình thành thỏi nam châm hút sự chú ý. Tạo ra vẻ bề ngoài mạnh mẽ hơn, to lớn hơn, sâu sắc hơn, bí ẩn hơn.",
                        "Khôn ngoan nhất là hãy nổi bật bằng cách: gắn mình với 1 đức tính tốt; 1 hình ảnh nổi bật với xung quanh (tính cách vui vẻ, ham học hỏi, nhiệt tình); 1 tài lẻ nào đó; 1 sự ăn mặc lịch sự nào đó.",
                        "Sau đó liên tục điều chỉnh phương thức gây chú ý nếu không họ sẽ bị nhờn thuốc.",
                        "Giải pháp chống nhàm chán là sự bí ẩn, vì bí ẩn đồng nghĩa với thông minh, đồng nghĩa với sự thượng phong. Các hành vi bí ẩn đều phải điều độ và kiểm soát — nổi bật nhưng không chơi trội quan thầy."
                      ]
                    },
                    { type: "subheading", text: "7. Hãy thành công trên lưng người khác" },
                    {
                      type: "list",
                      items: [
                        "Hãy cố gắng dựa trên sự thông minh và khôn ngoan của người khác. Chúng ta sẽ tiết kiệm được thời gian, công sức, quan trọng nhất là ta sẽ có một vầng hào quang rất thần thánh về năng lực bản thân.",
                        "Người giúp ta sẽ bị lãng quên, còn ta sẽ được nhớ mãi. Nghĩa là đừng bao giờ cố gắng tự làm một điều gì đó nếu việc đó chắc chắn có người làm thay ta."
                      ]
                    },
                    { type: "subheading", text: "8. Nhử mồi dụ địch (Khích tướng)" },
                    {
                      type: "list",
                      items: [
                        "Khi khích được kẻ khác ra tay là ta đã nắm được quyền kiểm soát cuộc chơi.",
                        "Khi bị khích tướng, đối phương bắt buộc phải thay đổi kế hoạch ban đầu bằng một kế hoạch bộc phát, tào lao nào đó, và ta sẽ khai thác sự ngu xuẩn ấy."
                      ]
                    },
                    { type: "subheading", text: "9. Hành động chứ không lý luận" },
                    {
                      type: "list",
                      items: [
                        "Nếu bạn thắng ai đó bằng lý luận thì đều có tính tạm bợ và trả giá cực đắt. Nếu bạn thắng bằng hành động mà không kèm theo lời nói, bạn sẽ nhận được sự thuyết phục tuyệt đối, đồng thời nhận được sự nhất trí rất mạnh mẽ.",
                        "Hãy chứng minh, đừng giải thích.",
                        "Hãy luôn nhớ rằng chữ nghĩa rẻ như bèo, hành động mới có ý nghĩa và sức mạnh, nó sẽ bịt mọi lỗ mồm của kẻ đối diện.",
                        "Lời nói chỉ có giá trị trong 1 trường hợp là làm cho đối phương xao nhãng, ngụy trang được hành vi và che đậy được chủ tâm."
                      ]
                    },
                    { type: "subheading", text: "10. Tránh tuyệt đối kẻ xấu số" },
                    {
                      type: "list",
                      items: [
                        "Trạng thái cảm xúc của bạn sẽ bị nhiễm bệnh bởi những kẻ tiêu cực. Bạn tưởng mình cứu giúp được họ nhưng thực chất là đang thò chân vào tai hoạ. Những kẻ bất hạnh luôn mang cho bạn những điều bất hạnh.",
                        "Hãy quản trị cảm xúc bằng cách: cách ly những kẻ xấu số ngay lập tức, đồng thời tìm kiếm người vui vẻ, hăng hái, thông minh để hợp tác."
                      ]
                    },
                    { type: "note", text: "Chỉ nên cộng tác với người hạnh phúc và may mắn." },
                    { type: "subheading", text: "11. Hãy làm người khác lệ thuộc mình" },
                    {
                      type: "list",
                      items: [
                        "Nếu bạn khiến mọi người phải dựa vào bạn thì bạn càng rộng đường để thao tác quyền lực.",
                        "Để mình là người cần thiết với kẻ khác thì đừng bao giờ dạy họ đến mức họ có thể tự lập được. Hãy bắt họ lệ thuộc mình ở 1 khía cạnh nào đó thì bạn sẽ luôn có quyền lực.",
                        "Quyền lực tối thượng là quyền lực khiến người khác phải tuân thủ ý chí của ta, muốn có điều đó chỉ có 1 cách là tạo sự lệ thuộc cho họ.",
                        "Ở một chừng mực nào đó, hãy chủ động lệ thuộc người ta."
                      ]
                    },
                    { type: "subheading", text: "12. Nhân nghĩa có lựa chọn" },
                    {
                      type: "list",
                      items: [
                        "Nếu bạn trung thực và lương thiện, bạn sẽ che đậy được hàng chục hành động bất lương, vì bao dung và tốt bụng có 1 tác dụng vĩ đại là hạ thấp sự cảnh giác của người khác. Trung thực có lựa chọn là bạn đã khoét được 1 lỗ trên áo giáp của kẻ đối diện, để tha hồ đánh lừa và thao túng họ.",
                        "Cái cốt của lời hứa, hành vi tốt bụng, thanh lịch, lương thiện là đánh lạc hướng đối phương, làm đối phương mất nghi ngờ.",
                        "Nên áp dụng lương thiện nhưng có lựa chọn ở lần gặp đầu tiên, nó đem lại 1 sự ấn tượng rất khó phai.",
                        "Trong mọi cái tốt, đánh lừa tốt nhất là hào phóng. Vì khó có kẻ nào từ chối được tiền bạc, quà cáp, kể cả với địch thủ, bạn sẽ hoá giải được tất cả."
                      ]
                    },
                    { type: "subheading", text: "13. Hãy tạo động lực bằng tư lợi, đừng kêu gọi lòng thương" },
                    {
                      type: "list",
                      items: [
                        "Khi cần tới đồng minh, tuyệt đối đừng lôi kéo họ bằng ân tình của ta trong quá khứ, mà hãy nhả cho họ lợi ích nếu 2 bên cùng làm (tốt nhất là phóng đại lợi ích lên).",
                        "Cái gốc để tìm người hợp tác là quyền lợi. Chưa bao giờ là sự ân oán, nhân nghĩa mơ hồ."
                      ]
                    },
                    { type: "subheading", text: "14. Bên ngoài là bạn, bên trong là thông tin" },
                    {
                      type: "list",
                      items: [
                        "Thông tin của những kẻ địch thủ mang yếu tố quyết định, để làm được điều đó bạn phải có năng lực móc được thông tin ở bất cứ cuộc gặp gỡ nào.",
                        "Sau khi có bản năng điều tra thì bạn có thể gặp bất cứ người nào với mục tiêu tối thượng là lấy được thông tin. Mọi cuộc gặp gỡ là những cơ hội tốt nhất để có kết quả do thám."
                      ]
                    },
                    { type: "subheading", text: "15. Nhổ cỏ hãy nhổ tận gốc" },
                    {
                      type: "list",
                      items: [
                        "Kẻ thù luôn muốn hại ta, họ không muốn 1 điều gì khác ngoài khử ta. Nếu ta ở thế thắng và dừng lại ở mốc 3/4 vì yếu tố nhân đạo, điều này sẽ khiến họ thù ta hơn, và sau khi họ hồi phục thì bạn sẽ phải trả giá.",
                        "Do đó đã ra đòn thì hãy nghiền nát họ, hãy dập tắt mọi tia lửa hồng trong đống tro tàn. Hãy đánh tan không chỉ ở thể xác mà cả ở tinh thần."
                      ]
                    },
                    { type: "note", text: "Nguyên tắc này có thể bỏ qua nếu kẻ thù tự diệt nhau." },
                    { type: "subheading", text: "16. Đầu tư vào sự hiện diện" },
                    {
                      type: "list",
                      items: [
                        "Khi bạn đã có 1 vị trí trong tập thể, thi thoảng hãy ẩn mặt đi để mọi người bàn tán và trong vô thức họ sẽ ngưỡng mộ bạn. Sau đó bạn lại xuất hiện, nhưng phải xuất hiện đúng lúc đúng chỗ."
                      ]
                    },
                    { type: "subheading", text: "17. Thật giả khó lường" },
                    {
                      type: "list",
                      items: [
                        "Loài người là loài của thói quen, họ luôn muốn người khác làm những điều quen thuộc. Nếu ta nằm trong khuôn khổ đó thì họ luôn có thể làm chủ được tình hình.",
                        "Do đó, để đảm bảo quyền lực hãy chủ động làm đảo lộn mọi thứ: tạo ra dáng vẻ rất khó lường; xử sự không nhất quán; không biết mình hành động nhắm vào đâu.",
                        "Họ sẽ hụt hẫng và mỏi mệt, mọi hành vi dự đoán là vô phương."
                      ]
                    },
                    { type: "note", text: "Vai trò của nguyên tắc này: thấp thì là hù doạ; cao là khủng bố tinh thần. Lúc đó họ sẽ sợ bạn." },
                    { type: "subheading", text: "18. Đừng tự cô lập" },
                    {
                      type: "list",
                      items: [
                        "Ai cũng có xu hướng phòng thân, do đó họ xây pháo đài để đảm bảo an toàn cho mình, nhưng mô hình này \"an thì ít, nguy thì nhiều\", vì họ sẽ mất toàn bộ thông tin và trở thành con người lộ liễu, rất dễ bị bắn hạ.",
                        "Tốt nhất hãy trà trộn vào đám đông, vào những người xung quanh, sau đó kéo liên minh, khi đó đám đông sẽ là kẻ che chắn cho bạn trước mũi dùi của kẻ thù."
                      ]
                    },
                    { type: "subheading", text: "19. Có thể xúc phạm kẻ khác nhưng đừng xúc phạm nhầm người" },
                    { type: "paragraph", text: "Đừng xúc phạm những kẻ sau:" },
                    {
                      type: "list",
                      items: [
                        { label: "Kiêu căng và ngạo mạn", text: "Loại này sẽ trả thù bạn rất tàn bạo." },
                        { label: "Những kẻ mất tự tin đến vô phương cứu chữa", text: "Họ trả thù vặt, lâu dài và dai dẳng." },
                        { label: "Kẻ đa nghi", text: "Ít nguy hiểm hơn 2 loại trên và rất dễ bị lừa." },
                        { label: "Kẻ thù dai", text: "Họ rất lạnh lùng." },
                        { label: "Người thật thà, không thông minh", text: "Làm cho ta mất thời gian và tiền bạc." }
                      ]
                    },
                    { type: "subheading", text: "20. Đừng dấn thân với phe nào cả" },
                    {
                      type: "list",
                      items: [
                        "Chỉ có những loại ngu xuẩn mới nhanh nhảu kết bè tạo cánh. Đừng dấn thân với bất cứ phe nào cả, ngoại trừ phe của chính bạn.",
                        "Muốn vậy hãy rèn bản lĩnh và quản trị cảm xúc tốt hơn nữa.",
                        "Hãy luôn quan tâm đến mọi bên, hãy ủng hộ ý đúng.",
                        "Giữ quan điểm của mình là hình ảnh của bạn, quyền uy cũng từ đó mà ra."
                      ]
                    },
                    { type: "note", text: "Đây là 1 nguyên tắc khó áp dụng, nó cần tố chất hoặc sự phấn đấu của 1 người cụ thể nào đó." },
                    { type: "subheading", text: "21. Giả điên để hạ địch" },
                    {
                      type: "list",
                      items: [
                        "Về tâm lý không ai muốn mình bị xem là ngu hơn người khác, vì vậy mánh khoé của nguyên tắc này là hãy làm cho đối thủ thấy họ là kẻ khôn lanh hơn ta.",
                        "Nếu làm được thì họ không còn 1 chút nghi ngờ nào cả, họ chủ quan tuyệt đối. Lúc này xuống đòn họ không có cửa đỡ."
                      ]
                    },
                    { type: "subheading", text: "22. Dùng chiến thuật quy hàng, lập tức biến nhược thành cương" },
                    {
                      type: "list",
                      items: [
                        "Khi lực bạn yếu, ngu xuẩn nhất là khăng khăng chiến đấu bảo vệ danh dự. Tốt nhất hãy đầu hàng, sau đó đợi thời gian phục hồi, rồi quấy nhiễu, hành hạ cho đối phương tàn lụi dần.",
                        "Hãy cho họ sự khoái chí khi đánh bại ta."
                      ]
                    },
                    { type: "subheading", text: "23. Tập trung lực lượng" },
                    {
                      type: "list",
                      items: [
                        "Hãy duy trì sức mạnh và năng lực bằng cách tập trung vào điểm mạnh của mình.",
                        "Yếu tố tập trung đào sâu sẽ tạo nên tài trí, chứ không phải mở rộng nhưng nông cạn."
                      ]
                    },
                    { type: "subheading", text: "24. Đóng vai chiều thần hoàn hảo" },
                    { type: "paragraph", text: "Hãy học và ứng dụng quy tắc của kẻ chiều thần (cấp dưới):" },
                    {
                      type: "list",
                      items: [
                        "Đừng chơi nổi: không bao giờ nói về thành tựu của mình.",
                        "Có phong cách ung dung: đó là yếu tố biểu hiện bạn có cái tài tự nhiên.",
                        "Nịnh là cần thiết, nhưng vừa phải thôi, không tâng bốc quá lố.",
                        "Làm cấp dưới nhưng lại biết thu hút chú ý (chú ý không phải chơi nổi).",
                        "Thay đổi phong cách với từng người đối thoại.",
                        "Gặp cấp trên chỉ được báo tin vui.",
                        "Đừng tỏ ra thân mật với chúa, vì chúa cần bề tôi chứ không cần bạn.",
                        "Đừng bao giờ phê phán cấp trên một cách trực tiếp.",
                        "Đừng đòi hỏi quá nhiều đặc ân kể cả khi mình có công.",
                        "Không nói đùa về vẻ ngoài hay sở thích của sếp.",
                        "Đừng nhạo báng sếp mà hãy khen ngợi họ với 1 mức độ nào đó.",
                        "Ý thức được mọi hành vi đối với sếp.",
                        "Cố gắng làm nguồn vui của sếp — đây là yếu tố cảm xúc."
                      ]
                    }
                  ]
                }
              ]
            },
            {
              title: "Mật Mã Tài Lãnh Đạo",
              items: [],
              articles: [
                {
                  title: "Mật Mã Tài Lãnh Đạo",
                  body: [
                    { type: "heading", text: "Lãnh đạo" },
                    {
                      type: "paragraph",
                      text: "Lãnh đạo là năng lực gây ảnh hưởng. Mức độ gây ảnh hưởng của mỗi người là khác nhau, vì các yếu tố gây ảnh hưởng khác nhau."
                    },
                    { type: "note", text: "LÃNH ĐẠO = Tầm Nghĩ × Cảm Hứng × Động Lực" },
                    { type: "subheading", text: "5 cấp độ lãnh đạo" },
                    {
                      type: "list",
                      items: [
                        { label: "Cấp 1 — Lãnh đạo cưỡng bức (chức vụ)", text: "Hầu như không có ảnh hưởng với người khác. Họ chỉ có quyền pháp lý mà thôi. Nhân viên không tin họ, tránh mặt họ. Lãnh đạo hoàn toàn chỉ là danh hiệu." },
                        { label: "Cấp 2 — Lãnh đạo chấp nhận", text: "Người lãnh đạo bắt đầu được tin cậy. Nhân viên có xu hướng đồng ý với quyết định. Bắt đầu xuất hiện lòng tin, trung thành và sự hợp tác. Lãnh đạo tôn trọng nhân viên." },
                        { label: "Cấp 3 — Lãnh đạo kết quả (LĐ kính trọng)", text: "Đạt kết quả rất tốt trong công việc, quan hệ cá nhân giữa lãnh đạo và nhân viên rất tốt. Mật mã cấp 3 là họ hiện thực hoá được tầm nhìn. Kết quả: người lãnh đạo được yêu mến. Nhược điểm: nhóm sẽ tan rã nếu lãnh đạo rời đi." },
                        { label: "Cấp 4 — Lãnh đạo hiệu quả (LĐ trung thành)", text: "Đạt sự chấp nhận, kính trọng, nhưng tập trung phát triển con người. Họ huấn luyện và giao việc cho nhân viên, có đặc trưng bởi các hành vi cho đi, đặt sự phát triển người khác lên hàng đầu." },
                        { label: "Cấp 5 — Lãnh đạo đỉnh cao", text: "Lãnh đạo người khác hoàn toàn bằng hành vi, tạo tấm gương bằng hành vi của chính họ. Họ bỏ được cái tôi cá nhân, khiêm nhường, dồn toàn bộ sự thuận lợi cho người kế nhiệm." }
                      ]
                    },
                    { type: "note", text: "Tổng kết: Cấp 4 = Người Tài + Giúp Việc; Cấp 5 = Người Tài + Cộng Sự." },
                    { type: "heading", text: "5 mật mã tài lãnh đạo" },
                    { type: "subheading", text: "1. Hãy biến mình thành chiến lược gia" },
                    {
                      type: "paragraph",
                      text: "Bất cứ thời điểm nào cũng phải có song song 2 chiến lược: chiến lược hoạt động (tạo ra của cải tức thì) và chiến lược phát triển (sự chuẩn bị đặc biệt, gia tăng năng lực hàng ngày)."
                    },
                    { type: "paragraph", text: "Hãy loại bỏ các bẫy sau:" },
                    {
                      type: "list",
                      items: [
                        "Không được để chiến lược trở thành 1 bản hướng dẫn đại cương mà không có chỉ dẫn cụ thể.",
                        "Đừng lầm tưởng những con số dự báo tương lai của ngày hôm nay được gọi là chiến lược.",
                        "Đừng chạy theo kẻ đầu ngành mà tìm ra giá trị riêng rồi đánh theo lối đánh của mình.",
                        "Đừng để thành công trong quá khứ quyết định chiến lược tương lai của bạn.",
                        "Đừng tập trung vào các cải thiện nhỏ để tránh rủi ro trong tương lai."
                      ]
                    },
                    { type: "note", text: "Quy tắc căn bản nhất: đích đến phải thật rõ ràng." },
                    { type: "subheading", text: "2. Hiện thực hoá (Thực thi)" },
                    {
                      type: "paragraph",
                      text: "Thực thi được hiểu là: làm đúng việc (75%) và làm có hiệu suất (25%). Thực thi đảm bảo bạn chắc chắn sẽ tới đích, nó biến điều ta muốn thành hiện thực — yếu tố \"làm đúng việc\" là yếu tố quyết định."
                    },
                    {
                      type: "note",
                      text: "Thực thi mà không có chiến lược thì là \"mù quáng\", chiến lược mà không có thực thi thì là sự \"vô vọng\"."
                    },
                    { type: "paragraph", text: "5 nguyên tắc để đảm bảo thực thi thành công:" },
                    {
                      type: "list",
                      items: [
                        { label: "Nguyên tắc 1 — Thực thi theo ý tưởng của chiến lược", text: "Cần tạo yếu tố môi trường: người lãnh đạo trực tiếp tại trận địa bắt buộc phải giỏi; thuyết minh bằng được lợi ích của việc thay đổi; tìm được sự ủng hộ từ nhân viên; pháp lý hoá sự đồng thuận đã có; luôn theo dõi thật chặt và đánh giá liên tục quá trình thay đổi." },
                        { label: "Nguyên tắc 2 — Tuân thủ quyết định", text: "Một quyết định đã được tung ra từ người lãnh đạo nghĩa là nó chứa đựng chiến lược, lúc này không chấp nhận 1 sự phản kháng nào. Để cấp dưới tuân thủ, quyết định phải rất cụ thể qua việc trả lời: việc cần thực hiện là gì, ai là người ra quyết định, khi nào quyết định được đưa ra, làm thế nào để đảm bảo tính chính xác khi giải thích với nhân viên." },
                        { label: "Nguyên tắc 3 — Thực thi phải kèm theo giải trình", text: "Trách nhiệm giải trình đóng vai trò trung tâm của thực thi. Yêu cầu người thực hiện giải trình, kèm theo tiêu chuẩn và kết quả giải trình gồm: kết quả cuối cùng, quy trình, công khai, tầm quan trọng của từng thành tố." },
                        { label: "Nguyên tắc 4 — Xây dựng nhóm làm việc", text: "Mục tiêu nhóm phải rõ ràng; các quy trình làm việc, vai trò của từng người và quyền quyết định của nhóm phải rõ ràng ở văn bản; các mối quan hệ trong nhóm theo nguyên tắc lắng nghe, hiểu biết, hỗ trợ lẫn nhau — dùng đối thoại và tranh luận để giải quyết mâu thuẫn, tuyệt đối không dùng tranh biện; thái độ liên tục học hỏi lẫn nhau." },
                        { label: "Nguyên tắc 5 — Đảm bảo năng lực chuyên môn", text: "Năng lực chuyên môn mà không có thì lập tức nhóm đó trở thành sự phá hoại. Giao đúng việc, cho đúng người, đúng năng lực." }
                      ]
                    },
                    { type: "subheading", text: "3. Quản trị người tài" },
                    {
                      type: "paragraph",
                      text: "Quản trị nhân tài được hiểu là 1 chuỗi quy trình bắt đầu từ khâu tuyển, sau đó là quá trình sử dụng họ. Thực tế là lãnh đạo cấp 4 cần dùng ít nhất 30% thời gian cho người tài."
                    },
                    {
                      type: "list",
                      items: [
                        { label: "Giao tiếp, giao tiếp và giao tiếp", text: "Kết nối với họ thường xuyên theo nguyên tắc 2 chiều; họ có quyền được biết vì sao phải làm việc đó và lãnh đạo kỳ vọng gì; họ sẽ chấp nhận bạn nếu biết lý do thật và ý nghĩa công việc; bắt buộc phải chân thành và điều chỉnh công việc cho phù hợp." },
                        { label: "Chỉ dẫn phương hướng để kết nối họ với tổ chức", text: "Đảm bảo mục đích công ty phù hợp với mục đích của họ; cho họ cảm xúc đang là chuyên gia; cho phép họ có sự khác biệt trong cách hoàn thành công việc; cho họ niềm tin sẽ đạt được sự nghiệp của họ; tập trung đối xử với họ khác người khác; loại bỏ bằng được thành kiến." },
                        { label: "Bồi dưỡng và phát triển họ liên tục", text: "Nhận diện năng lực của họ rồi phát triển, đẩy mạnh bằng năng lực sở trường thông qua huấn luyện, cố vấn, tài trợ và phát triển; đưa họ vào công việc sở trường, phù hợp và chắc chắn đạt được xu hướng phát triển." },
                        { label: "Đáp ứng đầy đủ nguồn lực cho nhu cầu chính đáng của họ", text: "Chủ động nhận ra nhu cầu để đáp ứng; loại bỏ những công việc họ cho là vớ vẩn (chấm công, họp hành, thủ tục cồng kềnh); cho họ sự tự chủ, làm việc với tâm thế của kẻ cam kết, nhiều quyền kiểm soát hơn, thời gian để tái tạo cuộc sống." },
                        { label: "Tạo môi trường làm việc tích cực, điển hình là môi trường kỷ luật", text: "Hầu hết chúng ta đang sống trong môi trường tiêu cực: độc tài, khủng bố, hoài nghi, năng suất thấp. Hãy đẩy họ vào môi trường có cơ hội học tập, đề cao lòng dũng cảm, kiên trì, nhẫn nại; nhân viên được đối xử chân thành, tử tế; công lý dân chủ công bằng; chừng mực khoan dung khiêm tốn; vui chơi trong công việc; giải toả căng thẳng và nạp năng lượng cho họ." },
                        { label: "Chủ động tiếp cận họ", text: "Luôn hài hước; nhấn mạnh các yếu tố kỷ niệm của họ; các sự kiện họ muốn tham gia; các cuộc thi; chương trình khen thưởng và công nhận; giảm cái tôi của người lãnh đạo; các hoạt động có tính chất hỗ trợ." }
                      ]
                    },
                    { type: "subheading", text: "4. Phát triển người kế nhiệm" },
                    {
                      type: "paragraph",
                      text: "Lãnh đạo cấp 4 phải phát triển nguồn nhân sự cho công ty, có trách nhiệm phát triển nhân tài thay thế họ — là chuyên gia trong việc đầu tư vào nhân tài, vì nhân tài có sẵn gần như không có."
                    },
                    { type: "paragraph", text: "Để tìm kiếm người thừa kế cần làm 4 việc sau:" },
                    {
                      type: "list",
                      items: [
                        "Định hình bằng được thương hiệu của doanh nghiệp, đặc biệt là thương hiệu tuyển dụng.",
                        "Hỗ trợ họ quản trị bằng được sự nghiệp của họ: thái độ học hỏi, kỹ năng, kiến thức.",
                        "Cho họ tập lãnh đạo nhóm, nâng cấp lên bằng quản trị trực tiếp hoặc điều hành.",
                        "Yêu cầu họ liên tục cố vấn cho người khác, phán đoán tất cả các xu hướng và kịch bản trong tương lai."
                      ]
                    },
                    { type: "subheading", text: "5. Đầu tư vào bản thân" },
                    {
                      type: "list",
                      items: [
                        "Luôn luyện thói quen tư duy thông suốt: loại tư duy kết hợp tri thức với trực giác, giữa lý trí và cảm xúc.",
                        "Khi có tư duy thông suốt thì rất nhanh xác định được ưu tiên hành động, không hề ngại khó khăn, ra các quyết định rất quyết đoán, giữ được lòng can đảm và luôn tự tin.",
                        "Hãy tìm mọi cách để thấu hiểu chính mình.",
                        "Gia tăng khả năng chịu áp lực — chỉ có cách nâng cao ý chí chiến thắng từng ngày, gia tăng đam mê cá nhân, khát khao thành công đến tột cùng; biểu hiện là đứng dậy tức thì sau thất bại, rèn thái độ không sợ thất bại, cao nhất là che giấu được thất bại.",
                        "Rèn giũa khả năng học hỏi nhanh: khái quát quá khứ để tìm ra nguyên nhân thắng và thất bại, rồi tìm ra quy luật của nó.",
                        "Tự giao khoán việc cho mình với 1 áp lực cao.",
                        "Liên tục trao đổi ý tưởng với người khác để não phải vận động liên tục.",
                        "Tập thói quen xuất sắc trong quá trình làm việc.",
                        "Tránh xa các yếu tố cực đoan.",
                        "Xây dựng chu trình học tập suốt đời.",
                        "Giữ gìn sức khoẻ cơ bắp thật tốt."
                      ]
                    }
                  ]
                }
              ]
            }
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
          items: ["Bố mẹ - Nội", "Bố mẹ - Ngoại", "Họ hàng thân thiết", "Họ hàng không thân thiết"]
        },
        {
          title: "Gia đình nhỏ",
          flagged: true,
          items: ["Vợ", "Con"]
        }
      ]
    }
  ]
};
