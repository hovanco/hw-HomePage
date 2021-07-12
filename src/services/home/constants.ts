interface IProduct {
    title: string;
    description: string;
    href: string;
    logo: string;
}
export const products: IProduct[] = [
    {
        title: 'Phần mềm bán hàng Facebook cho nhà kinh doanh online',
        description:
            'Chat với khách hàng, gửi tin nhắn tự động, lưu đơn hàng, thống kê sản phẩm và doanh thu, quản lý thông tin khách hàng. ',
        href: '/insa-facebook',
        logo: '/images/insa-facebook-lg.svg',
    },
    // {
    //     title: 'Phần mềm bán hàng Shopee cho cá nhân, doanh nghiệp',
    //     description:
    //         'Nghiên cứu thị trường và đối thủ dễ dàng, quản lý sản phẩm, đơn hàng, tin nhắn, khách hàng hiệu quả, gửi tin nhắn marketing.',
    //     href: '/insa-shopee',
    //     logo: '/images/insa-shopee-lg.svg',
    // },
    // {
    //     title: 'Thiết kế website bán hàng cho mọi lĩnh vực',
    //     description:
    //         'Sở hữu website bán hàng đầy đủ chức năng, giao diện tối ưu cho các thiết bị, tốc độ tải nhanh và chuẩn SEO',
    //     href: '/insa-website',
    //     logo: '/images/insa-website-lg.svg',
    // },
    {
        title: 'Phần mềm bán hàng tại siêu thị, cửa hàng, nhà hàng',
        description:
            'Order, tính tiền, in hóa đơn, quản lý sản phẩm, khuyến mãi, khách hàng, nhân viên, doanh thu, chi phí.',
        href: '/insa-pos',
        logo: '/images/insa-pos-lg.svg',
    },
];
