interface IQuestion {
    title: string;
    answer: string;
}

export const facebookQuestions: IQuestion[] = [
    {
        title: 'Phần mềm Insa Facebook sẽ giúp tôi quản lý những gì?',
        answer: '<p>Phần mềm Insa sẽ giúp bạn những tính năng quản lý cơ bản như: quản lý hội thoại đến, đơn hàng, sản phẩm, khách hàng, nhân viên và các chi nhanh và báo cáo tình hình kinh doanh.</p> <p>Ngoài ra, Insa còn có thể cho phép bạn tạo một kịch bản bán hàng livestream lên đơn hàng tự động, phân loại khách hàng bằng nhãn hội thoại, cài đặt tin nhắn nhanh cho page hay ẩn bình luận chứa thông tin của khách hàng.</p>',
    },
    {
        title: 'Tôi có thể quản lý được bao nhiêu page trên Insa?',
        answer: 'Hiện tại, khi đăng ký gói Insa Vpage bạn có thể quản lý 6 fanpage cùng một lúc. Với giá 199,000VND/ tháng.',
    },
    {
        title: 'Tính năng nhãn hội thoại để làm gì?',
        answer: 'Nhãn hội thoại là nhãn được ghim vào mỗi cuộc hội thoại (tin nhắn, bình luận) với khách hàng để bạn dễ dàng phân loại khách hàng và quản lý tin nhắn đến. Ví dụ như: Khách đã chăm sóc, đã chốt đơn, Khách lẻ, khách sỉ,',
    },
    {
        title: 'Tại sao đã cài đặt ẩn bình luận nhưng bình luận trên fanpage vẫn còn?',
        answer: 'Chức năng ẩn bình luận chỉ có tác dụng kể từ sau thời điểm bạn cài đặt tính năng ẩn bình luận trong mục cài đặt khác. Ngoài ra, bình luận không thể ẩn đối với các user là bạn của người comment hoặc user là quản trị viên.',
    },
    {
        title: 'Kết nối hoặc ngắt kết nối với fanpage với Insa như thế nào?',
        answer: 'Để có thể kết nối với INSA thì tài khoản facecbook của bạn sẽ cần được phân quyền quản trị fanpage từ quyền biên tập viên trở lên. Tiếp đó bạn ấn nút kết nối và chọn fanpage bạn muốn kết nối (thêm fanpage). Trường hợp bạn muốn ngắt kết nối fanpage, hãy ấn vào nút xóa kết nối (bỏ tít chọn) với Insa.',
    },
    {
        title: 'Tính năng đơn nháp để làm gì?',
        answer: 'Những đơn hàng tự động tạo với những bình luận đúng cú pháp trong kịch bản livestream sẽ được lưu vào mục Đơn nháp. Bạn vào bổ sung thêm địa chỉ và phí vận chuyển và cập nhật lại đơn để hoàn tất đơn hàng.',
    },
    {
        title: 'Tại sao tôi không gửi tin nhắn phản hồi cho khách hàng được?',
        answer: 'Khi bạn thực hiện gửi tin nhắn phản hồi cho khách hàng, nhưng hệ thống không cho phép bạn gửi tin. Lỗi này do thực hiện theo quy định chống spam của Facebook: Khi bạn trả lời inbox khách hàng bằng phần mềm hỗ trợ như Insa, bạn chỉ được phép trả lời tin nhắn trong vòng 24h. Nếu qua ngày sau, khách hàng trả lời tin nhắn tiếp thì bạn mới được tiếp tục phản hồi tin nhắn đó. Nếu muốn trả lời nhiều hơn, vui lòng dùng fanpage trực tiếp.',
    },
    {
        title: 'Làm sao để hạn chế bị "cướp khách" và lộ thông tin khách hàng cho đối thủ?',
        answer: 'Insa hỗ trợ bạn hạn chế tối đa bị cướp khách và lộ thông tin của khách hàng như số điện thoại qua tính năng "Ẩn bình luận". Bạn có thể lựa chọn ẩn tất cả bình luận hoặc ẩn những bình luận có chứa số điện thoại. Ngoài ra, ngay trên livestream bạn cũng có thể chọn tính năng "Ẩn bình luận của khách hàng" để đảm bảo những bình luận của khách hàng không bị đối thủ nhìn thấy và cướp mất khách.',
    },
];

export const posQuestions: IQuestion[] = [
    {
        title: 'Những tính năng cần thiết của một phần mềm quản lý bán hàng tại cửa hàng tốt?',
        answer: 'Một phần mềm quản lý bán hàng tốt hiện nay có thể đáp ứng đầy đủ các nhu cầu của chủ cửa hàng khi bán hàng như: tính tiền tự động, in hóa đơn cho khách, quản lý xuất nhập tồn kho chính xác, báo cáo doanh thu, lãi lỗ chi tiết, bán hàng online trên Facebook và website nhanh chóng. Không chỉ vậy, nhiều phần mềm còn có thể hỗ trợ bạn chăm sóc khách hàng sau bán, quản lý được chuỗi cửa hàng và đại lý phân phối.',
    },
    {
        title: 'Những tính năng nổi bật của Insa Pos?',
        answer: `<ul>
            <li>Tạo hóa đơn và thanh toán nhanh chóng.</li>
            <li>Kết nối dễ dàng với các thiết bị bán hàng hiện đại như máy in hóa đơn, máy quét mã vạch,...</li>
            <li>Quản lý tồn kho, doanh thu chính xác của cửa hàng.</li>
            <li>Quảng lý đơn hàng online trên Facebook, Website, sàn TMĐT để đồng bộ kho hàng.</li>
            <li>Phù hợp với mọi loại hình kinh doanh.</li>
            <li>Hộ trợ kế toán tổng hợp cân đối ngân sách.</li>
            <li>Chăm sóc khách hàng thông qua Email và SMS.</li>
            <li>Quản lý đại lý và chuỗi phân phối của cửa hàng.</li>
        </ul>
        `,
    },
    {
        title: 'Tôi có được dùng thử trước khi mua phần mềm?',
        answer: 'Phần mềm Insa Pos sẽ miễn phí cho khách hàng 30 ngày dùng thử. Nhấn vào “dùng thử” và để lại thông tin để nhân viên tư vấn của INSA có thể hỗ trợ bạn quy trình để có thể trải nghiệm dùng thử.',
    },
    {
        title: 'Cửa hàng nhỏ có nên sử dụng phần mềm INSA Pos không?',
        answer: 'Phần mềm quản lý bán hàng của Insa được thiết kế để phù hợp với tất cả kiểu hệ thông và quy mô của cửa hàng. Bạn nên sử dụng phần mềm để có thể tối ưu được hiệu năng bán hàng tại cửa hàng. ',
    },
    {
        title: 'Phần mềm có giúp cửa hàng tăng lợi nhuận không?',
        answer: `
        <p>Phần mềm quản lý bán hàng INSA POS không trực tiếp giúp doanh nghiệp gia tăng doanh số nhưng đây sẽ là một công cụ hỗ trợ đắc lực cho cửa hàng của bạn tăng lợi nhuận bằng nhiều cách.</p>
        <ul>
            <li>Đầu tiên, bạn sẽ hạn chế được việc thuê nhiều nhân lực, thay vào đó Insa Pos sẽ hỗ trợ số lượng nhân viên ít của bạn nhưng làm việc năng suất và đạt hiệu quả cao. 
            <li>Thứ 2, phần mềm sẽ giúp nhân viên tăng tốc độ bán hàng, từ đó khiến khách hàng hài lòng, mua nhiều hơn. 
            <li>Đồng thời, chủ doanh nghiệp có thể dễ dàng kiểm soát chính xác về tình trạng hàng tồn kho, doanh thu và lợi nhuận của từng cửa hàng trong chuỗi hệ thống. Từ đó tránh các việc hao hụt hàng hóa và giúp bạn nhanh chóng triển khai chiến dịch marketing một cách hiệu quả hơn.
        </ul>
        `,
    },
    {
        title: 'Sử dụng phần mềm quản lý bán hàng INSA Pos có khó không?',
        answer: 'Phần mềm được thiết kế giao diện tối ưu, thân thiện và dễ dàng sử dụng nhất với người dùng. Đồng thời nhân viên tư vấn và nhân viên kỹ thuật của Insa sẽ đồng hành và hỗ trợ khách hàng trong suốt quá trình sử dụng.',
    },
];

export const shopeeQuestions: IQuestion[] = [
    {
        title: 'Tôi có thể kết nối bao nhiều gian hàng Shopee trên 1 tài khoản Insa không?',
        answer: 'Với khách hàng mua gói dịch vụ Insa Ecom sẽ được miễn phí kết nối .... gian hàng Shopee trên tài khoản Insa.',
    },
    {
        title: 'INSA có chức năng đẩy sản phẩm không?',
        answer: 'Phần mềm Insa sẽ giúp chủ shop tự động đẩy sản phẩm mà bạn muốn lên Top để bạn có thể tiết kiệm thời gian ngồi đẩy thủ công và không cần phải ngồi canh giờ để đẩy nữa.',
    },
    {
        title: 'Tôi có thể gửi nhắn tin cho khách hàng qua phần mềm Insa không?',
        answer: 'Bạn hoàn toàn có thể gửi tin nhắn cho khách hàng. Tuy nhiên bạn chỉ có thể gửi đồng loạt tin nhắn cho một nhóm khách hàng số lượng bất kỳ chứ không thể nhắn tin qua lại với 1 khách qua phần mềm Insa. Đặc biệt, phần mềm Insa còn hỗ trợ bạn có thể tìm kiếm một nhóm khách hàng tiềm năng và gửi tin nhắn đồng bộ cho cả nhóm khách hàng tiềm năng đấy. Để giới thiệu sản phẩm, khuyến mãi,... của cửa hàng.',
    },
    {
        title: 'Khi tôi ngắt kết nối gian hàng shopee với tài khoản Insa, đơn hàng đang giao dịch có bị ảnh hưởng gì không?',
        answer: 'Bạn đang liên kết gian hàng shopee trên phần mềm Insa, vì một lí do nào đó bạn muốn ngắt kết nối thì các đơn đang giao dịch sẽ không bị ảnh hưởng gì. Nhưng bạn lưu ý rằng là trạng thái đơn hàng lúc này trở đi sẽ không được đồng bộ nữa. Mọi liên kết, đồng bộ đơn hàng sẽ bị ngừng, những đơn hàng chưa hoàn thành, bạn phải vào từng đơn thủ công để cập nhật thông tin trạng thái đơn hàng.',
    },
    {
        title: 'Tôi có thể biết gì với tính năng Phân tích thị trường?',
        answer: 'Tính năng này cho phép bạn phân tích thị trường kinh doanh bao gồm: các từ khóa phổ biến, những sản phẩm phổ biến, các danh mục con và các cửa hàng phổ biến trong danh mục, thị trường đó.',
    },
    {
        title: 'Tôi có thể tìm kiếm khách hàng tiềm năng cho shop không?',
        answer: 'Phần mềm Insa hoàn toàn có thể giúp bạn tìm được một danh sách khách hàng tiềm năng của Shop. Nhờ công cụ tìm kiếm khách qua link sản phẩm, Insa có thể lọc được danh sách khách hàng đã từng mua hay quan tâm đến sản phẩm đó. Và giúp ban gửi tin nhắn giới thiệu shop đến danh sách khách hàng tiềm năng đấy.',
    },
    {
        title: 'Ai sẽ xem được thông tin gian hàng của tôi?',
        answer: 'Thông tin gian hàng chỉ có chủ tài khoản xem được. Khi được chủ tài khoản phân quyền và cung cấp mật khẩu, nhân viên mới có thể xem được thông tin theo đúng phân quyền đó.',
    },
    {
        title: 'Tôi lo lắng Khi sử dụng Insa để liên kết tất cả các shop trên Shopee thì khi sàn quét IP có ảnh hưởng đến shop của tôi không, liệu tôi có bị khóa shop không?',
        answer: 'Insa là phần mềm quản lý và phát triển bán hàng đa kênh đa sàn TMĐT. Đồng thời, Insa còn là đối tác chính kết nối API trực tiếp thông qua những điều khoản và sự đống ý từ các sàn. Việc bạn sử dụng Insa để liên kết & quản lý shop của mình là hoàn toàn hợp lệ. Nhưng mỗi sàn sẽ có những quy định riêng cho người bán, nhà bán hàng cần lưu ý nắm rõ quy định bán hàng của sàn để tránh trường hợp vi phạm quy định & dẫn đến trường hợp khóa shop. Về quy định bán hàng của sàn, nhà bán hàng vui lòng liên hệ trực tiếp với sàn để được hỗ trợ tốt nhất. ',
    },
];

export const websiteQuestions: IQuestion[] = [
    {
        title: 'Website bán hàng là gì?',
        answer: 'Website bán hàng được coi như là một cửa hàng của bạn trên nên tảng internet. Bạn có thể giới thiệu sản phẩm, dịch vụ của doanh nghiệp đến với khách hàng ngay trên Internet mà không cần đến trực tiếp của hàng của mình.',
    },
    {
        title: 'Tại sao tôi cần có Webste bán hàng riêng?',
        answer: `
        <ul>
            <li>Kênh giới thiệu sản phẩm</li>
            <li>Tận dụng các nguồn traffic khác</li>
            <li>Làm cho doanh nghiệp “tin cậy và chuyên nghiệp” hơn</li>
            <li>Kênh truyền thông chính thức với khách hàng</li>
            <li>Bán hàng tự động 24/7</li>
        </ul>
        `,
    },
    {
        title: 'Tôi không biết thiết kế và tạo ra Website như thế nào, vậy phải làm sao?',
        answer: 'Không sao, Insa Web sẽ giúp bạn. Bạn hoàn toàn có thể tự tạo cho mình một Website bán hàng cùng với Insa Web mà không cần biết về thiết kế hay lập trình. Insa Web sẽ tạo cho bạn một Website giao diện và bố cục thân thiện, nội dung đầy đủ cơ bản nhất.',
    },
    {
        title: 'Website của tôi trên Insa Web có chuẩn SEO không?',
        answer: 'Tất nhiên là Có. Website của bạn sẽ được Insa tối ưu cấu trúc và dữ liệu, giúp website dễ dàng được tìm thấy trên các công cụ tìm kiếm như Google, thu hút thêm lượt truy cập.',
    },
    {
        title: 'Những tính năng nổi bật của Insa Web?',
        answer: `
            <ul>
                <li>Giao diện thân thiện</li>
                <li>Dễ dàng sử dụng</li>
                <li>Website được tích hợp sẵn cổng thanh toán, cổng vận chuyển,…</li>
                <li>Hỗ trợ SMS, email marketing, liên kết với Google Analytics, Google Shopping,…</li>
                <li>Đảm bảo Web chuẩn SEO</li>
                <li>Cung cấp chứng chỉ SSL, mã hóa dữ liệu, chống hack an toàn tuyệt đối,…</li>
            </ul>
        `,
    },
    {
        title: 'Tôi có được dùng thử trước khi mua phần mềm?',
        answer: 'Phần mềm Insa WEB sẽ miễn phí cho khách hàng 7 ngày dùng thử. Nhấn vào “dùng thử” và để lại thông tin để nhân viên tư vấn của INSA có thể hỗ trợ bạn quy trình để có thể trải nghiệm dùng thử.',
    },
];
