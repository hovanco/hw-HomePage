export enum EBillingPackageType {
    Trial = 1 << 0,
    Omni = 1 << 1,
    Pos = 1 << 2,
    Facebook = 1 << 3,
    Shopee = 1 << 4,
}

export const BillingPeriods = {
    OneMonth: 1,
    SixMonths: 6,
    OneYear: 12,
};

export const ColorPackage = {
    [EBillingPackageType.Pos]: '#6c6fbf',
    [EBillingPackageType.Shopee]: '#f53d2d',
    [EBillingPackageType.Facebook]: '#1877F2',
    [EBillingPackageType.Omni]: '#0885fb',
};

export const AliasPackage = {
    [EBillingPackageType.Pos]: 'INSA POS',
    [EBillingPackageType.Facebook]: 'INSA FACEBOOK',
    [EBillingPackageType.Trial]: 'INSA TRIAL',
    [EBillingPackageType.Shopee]: 'INSA SHOPEE',
    [EBillingPackageType.Omni]: 'OMNI',
};

export const BillingPricePerMonth = {
    [EBillingPackageType.Pos]: 199000,
    [EBillingPackageType.Facebook]: 199000,
    [EBillingPackageType.Shopee]: 199000,
    [EBillingPackageType.Omni]: 499000,
};

export const EBillingPaymentType = {
    BankTransfer: 1,
    OnlinePayment: 2,
};

export const EBillingPaymentTypeName = {
    [EBillingPaymentType.BankTransfer]: 'Chuyển khoản',
    [EBillingPaymentType.OnlinePayment]: 'Thanh toán Online',
};

interface IFeature {
    label: string;
    year: string;
    month: string;
}

export interface IPackage {
    type: string;
    id: number;
    code: EBillingPackageType;
    alias: string;
    package: string;
    price: number;
    name: string;
    unit: string;
    color: string;
    description: string;
    mostPopular: boolean;
    cycles: any[];
    features: IFeature[];
    note: {
        month: string;
        year: string;
    };
    hidden?: boolean;
}

export const packages: IPackage[] = [
    {
        type: 'pos',
        id: 1,
        code: EBillingPackageType.Pos,
        alias: 'INSA POS',
        package: 'Gói Insa POS',
        name: 'Phần mềm quản lý bán hàng',
        price: BillingPricePerMonth[EBillingPackageType.Pos],
        unit: 'VNĐ/ THÁNG',
        color: ColorPackage[EBillingPackageType.Pos],
        description: `Sản phẩm không giới hạn
            1 Cửa hàng
            Quản lý kho
            Quản lý nhân viên
            Báo cáo bán hàng
            Kết nối thiết bị bán hàng`,
        mostPopular: false,
        cycles: [
            {
                id: BillingPeriods.OneMonth,
                name: '1 tháng',
                price: BillingPricePerMonth[EBillingPackageType.Pos],
            },
            {
                id: BillingPeriods.SixMonths,
                name: '6 tháng',
                price: BillingPricePerMonth[EBillingPackageType.Pos] * 6,
            },
            {
                id: BillingPeriods.OneYear,
                name: '12 tháng',
                price: BillingPricePerMonth[EBillingPackageType.Pos] * 12,
            },
        ],
        features: [
            {
                label: 'Quản lý đơn hàng',
                month: 'check',
                year: 'check',
            },
            {
                label: 'Quản lý kho',
                month: 'check',
                year: 'check',
            },
            {
                label: 'Đơn lý sản phẩm',
                month: 'check',
                year: 'check',
            },
        ],
        note: {
            month: 'Hỗ trợ chủ doanh nghiệp có thể: tính tiền, in hóa đơn, mã vạch, quản lý kho, khuyến mại, kế toán, khách hàng, nhân viên, báo cáo,... theo tháng dành cho cửa hàng nhỏ mới kinh doanh.',
            year: 'Giúp chủ doanh nghiệp có thể đồng bộ kinh doanh từ Facebook đến hỗ trợ tại cửa hàng như: tính tiền, in hóa đơn, mã vạch, quản lý kho, khuyến mại, kế toán, khách hàng, nhân viên, báo cáo,... trong cả năm dành cho cửa hàng, chuỗi cửa hàng ',
        },
    },
    {
        type: 'social',
        id: 2,
        code: EBillingPackageType.Facebook,
        alias: 'INSA FACEBOOK',
        package: 'Gói Insa facebook',
        name: 'Quản lý bán hàng online',
        price: BillingPricePerMonth[EBillingPackageType.Facebook],
        unit: 'VNĐ/ THÁNG',
        color: ColorPackage[EBillingPackageType.Facebook],
        description: `Sản phẩm không giới hạn
            Bán hàng trên Facebook
            Facebook chatbot marketing
            Tự động chốt đơn livestream
            Quản lý 5 fanpages, 15 users
            Báo cáo bán hàng`,
        mostPopular: false,
        cycles: [
            {
                id: BillingPeriods.OneMonth,
                name: '1 tháng',
                price: BillingPricePerMonth[EBillingPackageType.Facebook],
            },
            {
                id: BillingPeriods.SixMonths,
                name: '6 tháng',
                price: BillingPricePerMonth[EBillingPackageType.Facebook] * 6,
            },
            {
                id: BillingPeriods.OneYear,
                name: '12 tháng',
                price: BillingPricePerMonth[EBillingPackageType.Facebook] * 12,
            },
        ],
        features: [
            {
                label: 'Số fanpage',
                month: '5',
                year: '15',
            },
            {
                label: 'Quản trị viên',
                month: '2',
                year: '5',
            },
            {
                label: 'Đơn vị vận chuyển',
                month: '11',
                year: '11',
            },
            {
                label: 'Kịch bản livestream',
                month: '30',
                year: 'Không giới hạn',
            },
        ],
        note: {
            month: 'Quản lý dễ dàng, thúc đẩy tăng trưởng kinh doanh - Gia tăng tần suất mua hàng từ khách hàng cũ ',
            year: 'Quản lý dễ dàng, thúc đẩy tăng trưởng kinh doanh - Gia tăng tần suất mua hàng từ khách hàng cũ ',
        },
    },
    {
        type: 'ecom',
        id: 3,
        code: EBillingPackageType.Shopee,
        alias: 'INSA SHOPEE',
        package: 'Gói Insa shopee',
        name: 'Quản lý bán hàng shopee',
        price: BillingPricePerMonth[EBillingPackageType.Shopee],
        unit: 'VNĐ/ THÁNG',
        color: ColorPackage[EBillingPackageType.Shopee],
        description: `Sản phẩm không giới hạn
            1 website bán hàng
            Dung lượng 5G
            Thanh toán trực tuyến
            5 email tên miền
            Kho ứng dụng`,
        mostPopular: false,
        cycles: [
            {
                id: BillingPeriods.OneMonth,
                name: '1 tháng',
                price: BillingPricePerMonth[EBillingPackageType.Shopee],
            },
            {
                id: BillingPeriods.SixMonths,
                name: '6 tháng',
                price: BillingPricePerMonth[EBillingPackageType.Shopee] * 6,
            },
            {
                id: BillingPeriods.OneYear,
                name: '12 tháng',
                price: BillingPricePerMonth[EBillingPackageType.Shopee] * 12,
            },
        ],
        features: [
            {
                label: 'Gian hàng trên shopee',
                month: '2',
                year: '5',
            },
            {
                label: 'App chat đa sàn',
                month: 'check',
                year: 'check',
            },
            {
                label: 'Không giới hạn sản phẩm',
                month: 'check',
                year: 'check',
            },
        ],
        note: {
            month: 'Đồng bộ sản phẩm tồn kho, đơn hàng với các sàn thương mại điện tử như Shopee, Lazada, Sendo, Tiki, ... trả phí định kỳ theo từng tháng',
            year: 'Đồng bộ sản phẩm tồn kho, đơn hàng với các sàn thương mại điện tử như Shopee, Lazada, Sendo, Tiki, ... trong 1 năm ',
        },
        hidden: true,
    },
    {
        type: 'all',
        id: 4,
        code: EBillingPackageType.Omni,
        alias: 'OMNI',
        package: 'Gói OMNI',
        name: 'Quản lý và bán hàng đa kênh',
        price: BillingPricePerMonth[EBillingPackageType.Omni],
        unit: 'VNĐ/ THÁNG',
        color: ColorPackage[EBillingPackageType.Omni],
        description: `Sản phẩm không giới hạn
            1 cửa hàng
            1 website bán hàng
            Bán hàng trên Facebook
            Báo cáo bán hàng đa kênh
            Đồng bộ hàng hóa lên các kênh`,
        mostPopular: true,
        cycles: [
            {
                id: BillingPeriods.OneMonth,
                name: '1 tháng',
                price: BillingPricePerMonth[EBillingPackageType.Omni],
            },
            {
                id: BillingPeriods.SixMonths,
                name: '6 tháng',
                price: BillingPricePerMonth[EBillingPackageType.Omni] * 6,
            },
            {
                id: BillingPeriods.OneYear,
                name: '12 tháng',
                price: BillingPricePerMonth[EBillingPackageType.Omni] * 12,
            },
        ],
        features: [
            {
                label: 'Email với tên miền riêng',
                month: '-',
                year: '1',
            },
            {
                label: 'Tối ưu chuẩn Goolge SEO',
                month: 'check',
                year: 'check',
            },
            {
                label: 'Website chuyên nghiệp (bao gồm website bán hàng, doanh nghiệp, dịch vụ và blog)',
                month: 'check',
                year: 'check',
            },
        ],
        note: {
            month: 'Cung cấp nền tảng quản lý và bán hàng tổng thể từ online đến offline cho doanh nghiệp theo từng tháng.',
            year: 'Cung cấp đầy đủ và toàn diện nền tảng quản lý và bán hàng tổng thể từ online đến offline cho doanh nghiệp trong 1 năm.',
        },
    },
];

export const packagesFilter = packages.filter((item: IPackage) => {
    if (typeof item.hidden === 'undefined') {
        return true;
    }
    return typeof item.hidden === 'boolean' && !item.hidden;
});
