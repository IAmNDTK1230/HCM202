/**
 * Vercel Serverless Function: /api/generate-quiz
 * Chương 5 - Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc
 * và đoàn kết quốc tế.
 *
 * ENV:
 *   GEMINI_API_KEY   (khuyến nghị)
 *   hoặc OPENAI_API_KEY
 *
 * Frontend gửi:
 *   POST /api/generate-quiz
 *   { count: 10, questionType: "multiple_choice" | "fill_blank" }
 *
 * Response:
 *   { questions: [...] }
 */

const CHAPTER_5_SOURCE = `
CHƯƠNG 5: TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC
VÀ ĐOÀN KẾT QUỐC TẾ

PHẦN I. TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC

5.1.1. VAI TRÒ CỦA ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC

1) Đại đoàn kết toàn dân tộc là vấn đề có ý nghĩa chiến lược, quyết định thành công của cách mạng.
- Đại đoàn kết toàn dân tộc là chiến lược lâu dài, nhất quán của cách mạng Việt Nam.
- Trong từng giai đoạn cách mạng, chính sách và phương pháp tập hợp có thể điều chỉnh cho phù hợp với từng đối tượng, nhưng chủ trương đại đoàn kết toàn dân tộc không thay đổi.
- Đại đoàn kết là sức mạnh, là lực lượng để khắc phục khó khăn và giành thắng lợi.
- Tư tưởng được khái quát: “Đoàn kết, đoàn kết, đại đoàn kết; Thành công, thành công, đại thành công”.

2) Đại đoàn kết toàn dân tộc là mục tiêu, nhiệm vụ hàng đầu của cách mạng Việt Nam.
- Đại đoàn kết không chỉ là khẩu hiệu chiến lược mà còn là mục tiêu lâu dài của cách mạng.
- Vì Đảng là lực lượng lãnh đạo cách mạng nên đại đoàn kết toàn dân tộc phải là nhiệm vụ hàng đầu của Đảng.
- Nhiệm vụ đại đoàn kết phải được quán triệt trong đường lối, chủ trương, chính sách và hoạt động thực tiễn.
- Cách mạng là sự nghiệp của quần chúng, do quần chúng và vì quần chúng.
- Đảng có nhiệm vụ thức tỉnh, tập hợp, hướng dẫn quần chúng, chuyển nhu cầu tự phát thành hành động tự giác, có tổ chức.

5.1.2. LỰC LƯỢNG CỦA KHỐI ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC

1) Chủ thể của khối đại đoàn kết toàn dân tộc.
- Chủ thể là toàn thể nhân dân, tất cả những người Việt Nam yêu nước.
- Bao gồm các giai cấp, tầng lớp, ngành, giới, lứa tuổi, dân tộc, tôn giáo, đảng phái và người Việt Nam ở trong nước cũng như ở nước ngoài.
- Đại đoàn kết là tập hợp mọi người dân vào một khối thống nhất, cùng hướng tới mục tiêu chung.
- Không bỏ sót lực lượng nào nếu họ có lòng trung thành, sẵn sàng phục vụ Tổ quốc và không phản bội quyền lợi của nhân dân.
- Trong quá trình xây dựng khối đại đoàn kết, phải đứng vững trên lập trường giai cấp công nhân và giải quyết hài hòa quan hệ giai cấp - dân tộc.

2) Nền tảng của khối đại đoàn kết toàn dân tộc.
- Công nhân, nông dân và trí thức là lực lượng tạo nên nền tảng của khối đại đoàn kết.
- Nền tảng càng vững chắc thì khối đại đoàn kết càng có khả năng mở rộng.
- Đoàn kết và thống nhất trong Đảng là hạt nhân/điều kiện quan trọng cho đoàn kết ngoài xã hội.
- Đảng đoàn kết, dân tộc đoàn kết và sự gắn bó giữa Đảng với nhân dân tạo nên sức mạnh bên trong của cách mạng.

5.1.3. ĐIỀU KIỆN ĐỂ XÂY DỰNG KHỐI ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC

Có bốn điều kiện cơ bản:

1) Lấy lợi ích chung làm điểm quy tụ, đồng thời tôn trọng các lợi ích khác biệt chính đáng.
- Đoàn kết phải xuất phát từ mục tiêu vì nước, vì dân.
- Lợi ích tối cao của dân tộc và lợi ích căn bản của nhân dân lao động là mục tiêu phấn đấu.
- Cần xử lý tốt quan hệ lợi ích, tìm điểm tương đồng và lợi ích chung.

2) Kế thừa truyền thống yêu nước, nhân nghĩa, đoàn kết của dân tộc.
- Đây là giá trị bền vững được hình thành trong lịch sử dựng nước và giữ nước.
- Truyền thống là cội nguồn sức mạnh để dân tộc vượt qua khó khăn.

3) Có lòng khoan dung, độ lượng với con người.
- Trong mỗi cá nhân, cộng đồng đều có ưu điểm, khuyết điểm, mặt tốt và mặt chưa tốt.
- Cần trân trọng phần thiện, cảm hóa người lầm đường và mở rộng khả năng tập hợp lực lượng.
- Tinh thần khoan dung, độ lượng giúp tạo thành đại đoàn kết.

4) Có niềm tin vào nhân dân.
- Yêu dân, tin dân, dựa vào dân, sống và phấn đấu vì hạnh phúc của nhân dân là nguyên tắc quan trọng.
- Nhân dân là chỗ dựa vững chắc và nguồn sức mạnh của khối đại đoàn kết.
- Quan điểm gắn với nguyên lý “Cách mạng là sự nghiệp của quần chúng”.

5.1.4. HÌNH THỨC, NGUYÊN TẮC TỔ CHỨC CỦA KHỐI ĐẠI ĐOÀN KẾT
TOÀN DÂN TỘC - MẶT TRẬN DÂN TỘC THỐNG NHẤT

1) Mặt trận dân tộc thống nhất.
- Khối đại đoàn kết chỉ trở thành lực lượng to lớn khi được tập hợp, tổ chức thành một khối vững chắc.
- Mặt trận dân tộc thống nhất là nơi quy tụ các tổ chức và cá nhân yêu nước, tập hợp người Việt Nam ở trong nước và đồng bào ở nước ngoài.
- Trong lịch sử, Mặt trận có nhiều tên gọi phù hợp từng giai đoạn như Hội Phản đế đồng minh, Mặt trận Dân chủ Đông Dương, Mặt trận Việt Minh, Mặt trận Liên Việt, Mặt trận Dân tộc Giải phóng miền Nam Việt Nam, Liên minh các lực lượng dân tộc, dân chủ và hòa bình Việt Nam, Mặt trận Tổ quốc Việt Nam.
- Dù tên gọi thay đổi, bản chất là tổ chức chính trị - xã hội nhằm tập hợp đông đảo các giai cấp, tầng lớp, dân tộc, tôn giáo, đảng phái, tổ chức và cá nhân yêu nước vì mục tiêu chung.

2) Các nguyên tắc xây dựng và hoạt động của Mặt trận.
- Một: xây dựng trên nền tảng liên minh công nhân - nông dân - trí thức và đặt dưới sự lãnh đạo của Đảng.
- Hai: hoạt động theo nguyên tắc hiệp thương dân chủ.
- Ba: đoàn kết lâu dài, chặt chẽ, đoàn kết thật sự, chân thành, thân ái, giúp đỡ nhau cùng tiến bộ.
- Hiệp thương dân chủ nghĩa là các vấn đề của Mặt trận được bàn bạc công khai, cùng đi đến nhất trí, tôn trọng lợi ích chính đáng và tránh áp đặt.
- Phương châm “cầu đồng tồn dị”: lấy cái chung để hạn chế cái riêng, đồng thời đoàn kết và đấu tranh, học cái tốt, phê bình cái sai trên lập trường thân ái, vì nước, vì dân.
- Đảng vừa là thành viên vừa là lực lượng lãnh đạo Mặt trận; lãnh đạo thông qua đường lối và phương pháp cách mạng phù hợp.

5.1.5. PHƯƠNG THỨC XÂY DỰNG KHỐI ĐẠI ĐOÀN KẾT DÂN TỘC

1) Làm tốt công tác vận động quần chúng (dân vận).
- Tuyên truyền, giáo dục, hướng dẫn, giúp đỡ và vận động nhân dân.
- Giúp nhân dân hiểu quyền lợi, trách nhiệm và nghĩa vụ của công dân.
- Phương pháp vận động phải phù hợp tâm tư, nguyện vọng, trình độ, phong tục, tập quán và điều kiện cụ thể của từng địa phương, từng đối tượng.

2) Thành lập đoàn thể, tổ chức quần chúng phù hợp từng đối tượng.
- Các tổ chức như Công đoàn, Hội Nông dân, Đoàn Thanh niên, Hội Phụ nữ... giúp tập hợp, giáo dục và phát huy tính tích cực của các tầng lớp nhân dân.
- Tổ chức quần chúng phù hợp với giai cấp, dân tộc, tôn giáo, lứa tuổi, giới tính, vùng miền.

3) Các đoàn thể, tổ chức quần chúng được tập hợp và đoàn kết trong Mặt trận dân tộc thống nhất.
- Mặt trận càng rộng rãi, chặt chẽ và thống nhất thì khối đại đoàn kết toàn dân tộc càng mạnh và bền vững.
- Mặt trận và các đoàn thể là cầu nối gắn kết Đảng với nhân dân.

PHẦN II. TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐOÀN KẾT QUỐC TẾ

5.2.1. SỰ CẦN THIẾT PHẢI ĐOÀN KẾT QUỐC TẾ

1) Đoàn kết quốc tế nhằm kết hợp sức mạnh dân tộc với sức mạnh thời đại, tạo sức mạnh tổng hợp cho cách mạng.
- Đoàn kết quốc tế giúp tập hợp lực lượng bên ngoài, tranh thủ sự đồng tình, ủng hộ và giúp đỡ của bạn bè quốc tế.
- Sức mạnh dân tộc gồm sức mạnh vật chất và tinh thần, trước hết là chủ nghĩa yêu nước, ý thức tự lực tự cường, tinh thần đoàn kết và ý chí đấu tranh.
- Sức mạnh thời đại gồm sức mạnh của phong trào cách mạng thế giới và sức mạnh của chủ nghĩa Mác - Lênin được xác lập bởi thắng lợi của Cách mạng Tháng Mười Nga năm 1917.
- Các phong trào cách mạng nếu được liên kết và tập hợp có thể tạo nên sức mạnh to lớn.
- Đại đoàn kết toàn dân tộc phải gắn liền với đoàn kết quốc tế; đại đoàn kết toàn dân tộc là cơ sở cho thực hiện đoàn kết quốc tế.

2) Đoàn kết quốc tế nhằm góp phần cùng nhân dân thế giới thực hiện thắng lợi các mục tiêu cách mạng của thời đại.
- Chủ nghĩa yêu nước chân chính phải gắn với chủ nghĩa quốc tế vô sản.
- Đoàn kết quốc tế không chỉ vì thắng lợi của cách mạng mỗi nước mà còn vì sự nghiệp chung của nhân loại tiến bộ.
- Các mục tiêu được nêu gồm hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.
- Cần chống các khuynh hướng làm suy yếu đoàn kết quốc tế như chủ nghĩa cơ hội, chủ nghĩa vị kỷ dân tộc và chủ nghĩa sôvanh.

5.2.2. LỰC LƯỢNG ĐOÀN KẾT QUỐC TẾ VÀ HÌNH THỨC TỔ CHỨC

Các lực lượng đoàn kết quốc tế được thể hiện qua:
- Phong trào cộng sản và công nhân quốc tế.
- Các dân tộc trên thế giới đấu tranh vì độc lập, tự do và quyền bình đẳng.
- Các lực lượng tiến bộ trên thế giới, đặc biệt là lực lượng đấu tranh cho hòa bình và chống chiến tranh xâm lược.
- Đoàn kết với các dân tộc trên bán đảo Đông Dương; quan hệ đoàn kết Việt Nam - Lào - Campuchia.
- Đoàn kết với các dân tộc châu Á và châu Phi đấu tranh giành độc lập.
- Đoàn kết với các lực lượng dân chủ, nhân dân yêu chuộng hòa bình trên thế giới.

Một số hình thức/tầng mặt trận được giáo trình nêu:
1) Mặt trận đại đoàn kết dân tộc.
2) Mặt trận đoàn kết Việt Nam - Lào - Campuchia.
3) Mặt trận nhân dân Á - Phi đoàn kết với Việt Nam.
4) Mặt trận nhân dân thế giới đoàn kết với Việt Nam chống đế quốc xâm lược.

Hồ Chí Minh quan tâm xây dựng các quan hệ đoàn kết với Trung Quốc, các dân tộc châu Á và châu Phi; đồng thời tranh thủ sự đồng tình, ủng hộ của nhân dân yêu chuộng hòa bình ở Pháp, Mỹ và nhiều nơi khác.

5.2.3. NGUYÊN TẮC ĐOÀN KẾT QUỐC TẾ

1) Đoàn kết trên cơ sở thống nhất mục tiêu và lợi ích; có lý, có tình.
- Muốn đoàn kết quốc tế phải tìm ra điểm tương đồng về mục tiêu và lợi ích giữa các dân tộc, lực lượng tiến bộ và phong trào cách mạng.
- Với phong trào cộng sản và công nhân quốc tế: đoàn kết trên nền tảng chủ nghĩa Mác - Lênin và chủ nghĩa quốc tế vô sản, gắn độc lập dân tộc với chủ nghĩa xã hội.
- Với các dân tộc: đề cao độc lập, tự do, bình đẳng giữa các dân tộc; tôn trọng độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ và quyền tự quyết.
- Với lực lượng tiến bộ: giương cao ngọn cờ hòa bình, chống chiến tranh xâm lược; hòa bình phải gắn với công lý và tôn trọng độc lập, tự do.
- “Có lý, có tình” nhấn mạnh sự kết hợp giữa nguyên tắc, mục tiêu chung và thái độ nhân văn, tôn trọng lẫn nhau.

2) Đoàn kết trên cơ sở độc lập, tự chủ.
- Đoàn kết quốc tế nhằm tranh thủ đồng tình, ủng hộ, giúp đỡ để tăng thêm nội lực và tạo sức mạnh thực hiện nhiệm vụ cách mạng.
- Nội lực là nhân tố quyết định; nguồn lực ngoại sinh chỉ phát huy tác dụng thông qua nguồn lực nội sinh.
- Nêu cao tinh thần “Tự lực cánh sinh, dựa vào sức mình là chính”.
- Muốn tranh thủ sự ủng hộ quốc tế phải có đường lối độc lập, tự chủ và đúng đắn.
- Trong quan hệ giữa các Đảng, các Đảng dù lớn hay nhỏ đều độc lập và bình đẳng, đồng thời đoàn kết, nhất trí, giúp đỡ lẫn nhau.
- Quan điểm “thực lực là cái chiêng, ngoại giao là cái tiếng” nhấn mạnh vai trò của thực lực/nội lực trong quan hệ quốc tế.

PHẦN III. VẬN DỤNG TƯ TƯỞNG HỒ CHÍ MINH VỀ ĐẠI ĐOÀN KẾT
TOÀN DÂN TỘC VÀ ĐOÀN KẾT QUỐC TẾ TRONG GIAI ĐOẠN HIỆN NAY

5.3.1. QUÁN TRIỆT TƯ TƯỞNG HỒ CHÍ MINH TRONG HOẠCH ĐỊNH
CHỦ TRƯƠNG, ĐƯỜNG LỐI

- Khơi dậy và phát huy cao nhất sức mạnh dân tộc và sức mạnh quốc tế.
- Đặt lợi ích dân tộc, lợi ích đất nước lên hàng đầu làm cơ sở xây dựng chủ trương, chính sách.
- Từ lợi ích dân tộc mở rộng quan hệ hợp tác quốc tế, tranh thủ khả năng có thể để xây dựng và phát triển đất nước.
- Giáo trình nêu Nghị quyết số 07-NQ/TW ngày 3/11/1993 về đại đoàn kết dân tộc và tăng cường Mặt trận dân tộc thống nhất.
- Đại hội XI nhấn mạnh đại đoàn kết dân tộc là đường lối chiến lược của cách mạng Việt Nam, là động lực và nguồn lực lớn trong xây dựng và bảo vệ Tổ quốc.
- Đại hội XII nhấn mạnh xây dựng khối đại đoàn kết trên nền tảng liên minh công nhân - nông dân - trí thức dưới sự lãnh đạo của Đảng; lấy mục tiêu xây dựng nước Việt Nam hòa bình, độc lập, thống nhất, toàn vẹn lãnh thổ, dân giàu, nước mạnh, dân chủ, công bằng, văn minh làm điểm tương đồng; tôn trọng những khác biệt không trái lợi ích chung của quốc gia - dân tộc.
- Đoàn kết quốc tế được vận dụng qua mở rộng quan hệ đối ngoại, hội nhập quốc tế và tranh thủ hợp tác, giúp đỡ của cộng đồng quốc tế.

5.3.2. XÂY DỰNG KHỐI ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC
TRÊN NỀN TẢNG LIÊN MINH CÔNG - NÔNG - TRÍ DƯỚI SỰ LÃNH ĐẠO CỦA ĐẢNG

- Đại đoàn kết toàn dân tộc là quan điểm xuyên suốt trong đường lối chiến lược.
- Mặt trận dân tộc thống nhất càng rộng rãi thì liên minh công - nông - trí càng mạnh; liên minh được củng cố và sự lãnh đạo được tăng cường thì Mặt trận càng được mở rộng và sức mạnh đại đoàn kết càng tăng.
- Cần tuyên truyền để nhận thức sâu sắc sự cần thiết của đại đoàn kết.
- Tăng cường sự lãnh đạo của Đảng, quản lý của Nhà nước và thể chế hóa quan điểm, đường lối, chính sách.
- Giải quyết tốt quan hệ lợi ích giữa các giai cấp, tầng lớp; kết hợp hài hòa lợi ích cá nhân, tập thể và toàn xã hội.
- Tăng cường quan hệ mật thiết giữa nhân dân với Đảng, Nhà nước.
- Đấu tranh với các quan điểm sai trái, thù địch, phá hoại và chia rẽ khối đại đoàn kết.

5.3.3. ĐẠI ĐOÀN KẾT TOÀN DÂN TỘC PHẢI KẾT HỢP VỚI ĐOÀN KẾT QUỐC TẾ

- Kết hợp sức mạnh dân tộc với sức mạnh thời đại; kết hợp chủ nghĩa yêu nước với chủ nghĩa quốc tế; kết hợp lợi ích dân tộc với nghĩa vụ quốc tế.
- Nhận thức cách mạng Việt Nam là một bộ phận không thể tách rời của cách mạng thế giới.
- Tiếp tục đoàn kết, ủng hộ các phong trào cách mạng, xu hướng và trào lưu tiến bộ vì hòa bình, độc lập dân tộc, dân chủ và tiến bộ xã hội.
- Nêu cao độc lập tự chủ, tự lực tự cường; phát huy sức mạnh dân tộc và trên cơ sở sức mạnh bên trong tranh thủ sự đồng tình, ủng hộ từ bên ngoài.
- Giáo trình nêu các bài học vận dụng: xác định mục tiêu trong giai đoạn hiện nay; mở cửa và hội nhập quốc tế; là bạn của tất cả các nước, phấn đấu vì hòa bình, độc lập và phát triển; tham gia các vấn đề toàn cầu; kết hợp sức mạnh dân tộc với sức mạnh thời đại; xây dựng Đảng trong sạch, vững mạnh làm hạt nhân đoàn kết.
`;

const SYSTEM_PROMPT = `
Bạn là AI tạo câu hỏi ôn tập môn Tư tưởng Hồ Chí Minh.

Chỉ được tạo câu hỏi dựa trên CHƯƠNG 5 được cung cấp trong nguồn học liệu.

Không được tự ý đưa kiến thức ngoài nguồn, không suy diễn thêm sự kiện, số liệu hoặc quan điểm không có trong nguồn.

Mục tiêu:
- Tạo câu hỏi để sinh viên ôn Chương 5.
- Bao phủ cân đối 5.1, 5.2 và 5.3, không chỉ tập trung vào 5.2.3.
- Ưu tiên kiểm tra khái niệm, vai trò, lực lượng, điều kiện, nguyên tắc, phương thức, lực lượng đoàn kết quốc tế, hình thức tổ chức và vận dụng.
- Có thể hỏi phân biệt các khái niệm gần nhau.
- Không tạo câu hỏi mơ hồ.
- Không dùng đáp án kiểu "tất cả các đáp án trên" hoặc "cả A và B".
- Các phương án phải có độ dài tương đối cân bằng.
- Chỉ có một đáp án đúng.
- Nếu questionType = fill_blank thì câu hỏi phải có đáp án ngắn, rõ ràng và nằm trực tiếp trong nguồn.
- Nếu questionType = multiple_choice thì luôn có đúng 4 options.
- correct là chỉ số 0-based của đáp án đúng.
- explain phải giải thích ngắn gọn tại sao đáp án đúng, bám sát nguồn.

Định dạng JSON bắt buộc:

{
  "questions": [
    {
      "type": "multiple_choice",
      "topic": "5.1.1",
      "q": "...",
      "options": ["...", "...", "...", "..."],
      "correct": 0,
      "explain": "..."
    }
  ]
}

Với fill_blank:

{
  "questions": [
    {
      "type": "fill_blank",
      "topic": "5.2.3",
      "q": "...",
      "answer": "...",
      "acceptedAnswers": ["..."],
      "explain": "..."
    }
  ]
}

Quy tắc chất lượng:

1. Không lặp nguyên một câu hỏi trong cùng một lần tạo.
2. Không để đáp án đúng luôn ở cùng một vị trí.
3. Không lấy một câu trong nguồn rồi chỉ đổi vài từ thành câu hỏi khác.
4. Tránh câu hỏi chỉ kiểm tra tên mục nếu có thể hỏi nội dung của mục.
5. Với câu hỏi về lịch sử/hình thức tổ chức, chỉ dùng tên và mốc thời gian có trong nguồn.
6. Với phần 5.3, phải phân biệt:
   - vận dụng trong hoạch định chủ trương, đường lối
   - liên minh công - nông - trí dưới sự lãnh đạo của Đảng
   - kết hợp đại đoàn kết toàn dân tộc với đoàn kết quốc tế.
`;

function clampCount(value) {
  const n = Number(value);

  if (!Number.isFinite(n)) {
    return 10;
  }

  return Math.max(1, Math.min(50, Math.floor(n)));
}

function cleanJsonText(text) {
  let s = String(text || "").trim();

  s = s
    .replace(/^```json\s*/i, "")
    .replace(/^```\s*/i, "")
    .replace(/\s*```$/i, "")
    .trim();

  const start = s.indexOf("{");
  const end = s.lastIndexOf("}");

  if (start >= 0 && end > start) {
    s = s.slice(start, end + 1);
  }

  return s;
}

function validateQuestions(payload, requestedType, count) {
  if (!payload || !Array.isArray(payload.questions)) {
    throw new Error("AI không trả về mảng questions.");
  }

  const type =
    requestedType === "fill_blank"
      ? "fill_blank"
      : "multiple_choice";

  const seen = new Set();

  const questions = payload.questions
    .map((q) => {
      const base = {
        type,
        topic: String(q.topic || "Chương 5").trim(),
        q: String(q.q || q.question || "").trim(),
        explain: String(
          q.explain || q.explanation || ""
        ).trim()
      };

      if (!base.q) {
        return null;
      }

      /*
       * FILL BLANK
       */
      if (type === "fill_blank") {
        const answer = String(
          q.answer ||
          q.correctAnswer ||
          q.correct ||
          ""
        ).trim();

        const acceptedAnswers = Array.isArray(
          q.acceptedAnswers
        )
          ? q.acceptedAnswers
              .map((x) => String(x).trim())
              .filter(Boolean)
          : [];

        if (!answer) {
          return null;
        }

        const key = base.q.toLowerCase();

        if (seen.has(key)) {
          return null;
        }

        seen.add(key);

        return {
          ...base,
          answer,
          acceptedAnswers: acceptedAnswers.length
            ? acceptedAnswers
            : [answer]
        };
      }

      /*
       * MULTIPLE CHOICE
       */
      const options = Array.isArray(q.options)
        ? q.options
            .map((x) => String(x).trim())
            .filter(Boolean)
        : [];

      let correct = Number(q.correct);

      if (!Number.isInteger(correct)) {
        correct = Number(q.answerIndex);
      }

      if (
        options.length !== 4 ||
        !Number.isInteger(correct) ||
        correct < 0 ||
        correct > 3
      ) {
        return null;
      }

      const key = base.q.toLowerCase();

      if (seen.has(key)) {
        return null;
      }

      seen.add(key);

      return {
        ...base,
        options,
        correct
      };
    })
    .filter(Boolean);

  if (!questions.length) {
    throw new Error("Không có câu hỏi hợp lệ.");
  }

  return questions.slice(0, count);
}

async function callGemini({
  apiKey,
  count,
  questionType
}) {
  const prompt = `
${SYSTEM_PROMPT}

Số câu cần tạo: ${count}

Loại câu hỏi: ${questionType}

Hãy phân bổ câu hỏi tương đối đều giữa:

- 5.1.1 Vai trò
- 5.1.2 Lực lượng
- 5.1.3 Điều kiện
- 5.1.4 Mặt trận dân tộc thống nhất
- 5.1.5 Phương thức
- 5.2.1 Sự cần thiết đoàn kết quốc tế
- 5.2.2 Lực lượng và hình thức tổ chức
- 5.2.3 Nguyên tắc đoàn kết quốc tế
- 5.3.1, 5.3.2, 5.3.3 Vận dụng

NGUỒN HỌC LIỆU:

${CHAPTER_5_SOURCE}

Chỉ trả về JSON, không markdown, không lời dẫn.
`;

  const response = await fetch(
    "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
      encodeURIComponent(apiKey),
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json"
      },

      body: JSON.stringify({
        contents: [
          {
            role: "user",
            parts: [
              {
                text: prompt
              }
            ]
          }
        ],

        generationConfig: {
          temperature: 0.75,
          responseMimeType: "application/json"
        }
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.error?.message ||
      "Gemini API error"
    );
  }

  const text =
    data?.candidates?.[0]?.content?.parts
      ?.map((part) => part.text || "")
      .join("") || "";

  return JSON.parse(
    cleanJsonText(text)
  );
}

async function callOpenAI({
  apiKey,
  count,
  questionType
}) {
  const prompt = `
${SYSTEM_PROMPT}

Số câu cần tạo: ${count}

Loại câu hỏi: ${questionType}

NGUỒN HỌC LIỆU:

${CHAPTER_5_SOURCE}

Chỉ trả về JSON theo đúng schema đã yêu cầu.
`;

  const response = await fetch(
    "https://api.openai.com/v1/chat/completions",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`
      },

      body: JSON.stringify({
        model: "gpt-4o-mini",

        temperature: 0.75,

        response_format: {
          type: "json_object"
        },

        messages: [
          {
            role: "system",
            content: SYSTEM_PROMPT
          },

          {
            role: "user",
            content: prompt
          }
        ]
      })
    }
  );

  const data = await response.json();

  if (!response.ok) {
    throw new Error(
      data?.error?.message ||
      "OpenAI API error"
    );
  }

  const text =
    data?.choices?.[0]?.message?.content || "";

  return JSON.parse(
    cleanJsonText(text)
  );
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method Not Allowed"
    });
  }

  try {
    const {
      count = 10,
      questionType = "multiple_choice"
    } = req.body || {};

    const safeCount =
      clampCount(count);

    const safeType =
      questionType === "fill_blank"
        ? "fill_blank"
        : "multiple_choice";

    let raw;

    /*
     * Ưu tiên Gemini
     */
    if (process.env.GEMINI_API_KEY) {
      raw = await callGemini({
        apiKey: process.env.GEMINI_API_KEY,
        count: safeCount,
        questionType: safeType
      });
    }

    /*
     * Nếu không có Gemini thì dùng OpenAI
     */
    else if (process.env.OPENAI_API_KEY) {
      raw = await callOpenAI({
        apiKey: process.env.OPENAI_API_KEY,
        count: safeCount,
        questionType: safeType
      });
    }

    /*
     * Không có API key
     */
    else {
      return res.status(500).json({
        error:
          "Chưa cấu hình GEMINI_API_KEY hoặc OPENAI_API_KEY trên Vercel."
      });
    }

    /*
     * Kiểm tra dữ liệu AI trả về
     */
    const questions =
      validateQuestions(
        raw,
        safeType,
        safeCount
      );

    /*
     * Trả kết quả cho frontend
     */
    return res.status(200).json({
      questions,

      source:
        "Chương 5 - Tư tưởng Hồ Chí Minh về đại đoàn kết toàn dân tộc và đoàn kết quốc tế"
    });
  }

  catch (error) {
    console.error(
      "generate-quiz error:",
      error
    );

    return res.status(500).json({
      error:
        error?.message ||
        "Không thể tạo câu hỏi."
    });
  }
}