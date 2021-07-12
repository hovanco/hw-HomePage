"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
exports.packagesFilter = exports.packages = exports.EBillingPaymentTypeName = exports.EBillingPaymentType = exports.BillingPricePerMonth = exports.AliasPackage = exports.ColorPackage = exports.BillingPeriods = exports.EBillingPackageType = void 0;
var EBillingPackageType;
(function (EBillingPackageType) {
    EBillingPackageType[EBillingPackageType["Trial"] = 1] = "Trial";
    EBillingPackageType[EBillingPackageType["Omni"] = 2] = "Omni";
    EBillingPackageType[EBillingPackageType["Pos"] = 4] = "Pos";
    EBillingPackageType[EBillingPackageType["Facebook"] = 8] = "Facebook";
    EBillingPackageType[EBillingPackageType["Shopee"] = 16] = "Shopee";
})(EBillingPackageType = exports.EBillingPackageType || (exports.EBillingPackageType = {}));
exports.BillingPeriods = {
    OneMonth: 1,
    SixMonths: 6,
    OneYear: 12,
};
exports.ColorPackage = (_a = {},
    _a[EBillingPackageType.Pos] = '#6c6fbf',
    _a[EBillingPackageType.Shopee] = '#f53d2d',
    _a[EBillingPackageType.Facebook] = '#1877F2',
    _a[EBillingPackageType.Omni] = '#0885fb',
    _a);
exports.AliasPackage = (_b = {},
    _b[EBillingPackageType.Pos] = 'INSA POS',
    _b[EBillingPackageType.Facebook] = 'INSA FACEBOOK',
    _b[EBillingPackageType.Trial] = 'INSA TRIAL',
    _b[EBillingPackageType.Shopee] = 'INSA SHOPEE',
    _b[EBillingPackageType.Omni] = 'OMNI',
    _b);
exports.BillingPricePerMonth = (_c = {},
    _c[EBillingPackageType.Pos] = 199000,
    _c[EBillingPackageType.Facebook] = 199000,
    _c[EBillingPackageType.Shopee] = 199000,
    _c[EBillingPackageType.Omni] = 499000,
    _c);
exports.EBillingPaymentType = {
    BankTransfer: 1,
    OnlinePayment: 2,
};
exports.EBillingPaymentTypeName = (_d = {},
    _d[exports.EBillingPaymentType.BankTransfer] = 'Chuyển khoản',
    _d[exports.EBillingPaymentType.OnlinePayment] = 'Thanh toán Online',
    _d);
exports.packages = [
    {
        type: 'pos',
        id: 1,
        code: EBillingPackageType.Pos,
        alias: 'INSA POS',
        package: 'Gói Insa POS',
        name: 'Phần mềm quản lý bán hàng',
        price: exports.BillingPricePerMonth[EBillingPackageType.Pos],
        unit: 'VNĐ/ THÁNG',
        color: exports.ColorPackage[EBillingPackageType.Pos],
        description: "S\u1EA3n ph\u1EA9m kh\u00F4ng gi\u1EDBi h\u1EA1n\n            1 C\u1EEDa h\u00E0ng\n            Qu\u1EA3n l\u00FD kho\n            Qu\u1EA3n l\u00FD nh\u00E2n vi\u00EAn\n            B\u00E1o c\u00E1o b\u00E1n h\u00E0ng\n            K\u1EBFt n\u1ED1i thi\u1EBFt b\u1ECB b\u00E1n h\u00E0ng",
        mostPopular: false,
        cycles: [
            {
                id: exports.BillingPeriods.OneMonth,
                name: '1 tháng',
                price: exports.BillingPricePerMonth[EBillingPackageType.Pos],
            },
            {
                id: exports.BillingPeriods.SixMonths,
                name: '6 tháng',
                price: exports.BillingPricePerMonth[EBillingPackageType.Pos] * 6,
            },
            {
                id: exports.BillingPeriods.OneYear,
                name: '12 tháng',
                price: exports.BillingPricePerMonth[EBillingPackageType.Pos] * 12,
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
        price: exports.BillingPricePerMonth[EBillingPackageType.Facebook],
        unit: 'VNĐ/ THÁNG',
        color: exports.ColorPackage[EBillingPackageType.Facebook],
        description: "S\u1EA3n ph\u1EA9m kh\u00F4ng gi\u1EDBi h\u1EA1n\n            B\u00E1n h\u00E0ng tr\u00EAn Facebook\n            Facebook chatbot marketing\n            T\u1EF1 \u0111\u1ED9ng ch\u1ED1t \u0111\u01A1n livestream\n            Qu\u1EA3n l\u00FD 5 fanpages, 15 users\n            B\u00E1o c\u00E1o b\u00E1n h\u00E0ng",
        mostPopular: false,
        cycles: [
            {
                id: exports.BillingPeriods.OneMonth,
                name: '1 tháng',
                price: exports.BillingPricePerMonth[EBillingPackageType.Facebook],
            },
            {
                id: exports.BillingPeriods.SixMonths,
                name: '6 tháng',
                price: exports.BillingPricePerMonth[EBillingPackageType.Facebook] * 6,
            },
            {
                id: exports.BillingPeriods.OneYear,
                name: '12 tháng',
                price: exports.BillingPricePerMonth[EBillingPackageType.Facebook] * 12,
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
        price: exports.BillingPricePerMonth[EBillingPackageType.Shopee],
        unit: 'VNĐ/ THÁNG',
        color: exports.ColorPackage[EBillingPackageType.Shopee],
        description: "S\u1EA3n ph\u1EA9m kh\u00F4ng gi\u1EDBi h\u1EA1n\n            1 website b\u00E1n h\u00E0ng\n            Dung l\u01B0\u1EE3ng 5G\n            Thanh to\u00E1n tr\u1EF1c tuy\u1EBFn\n            5 email t\u00EAn mi\u1EC1n\n            Kho \u1EE9ng d\u1EE5ng",
        mostPopular: false,
        cycles: [
            {
                id: exports.BillingPeriods.OneMonth,
                name: '1 tháng',
                price: exports.BillingPricePerMonth[EBillingPackageType.Shopee],
            },
            {
                id: exports.BillingPeriods.SixMonths,
                name: '6 tháng',
                price: exports.BillingPricePerMonth[EBillingPackageType.Shopee] * 6,
            },
            {
                id: exports.BillingPeriods.OneYear,
                name: '12 tháng',
                price: exports.BillingPricePerMonth[EBillingPackageType.Shopee] * 12,
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
        price: exports.BillingPricePerMonth[EBillingPackageType.Omni],
        unit: 'VNĐ/ THÁNG',
        color: exports.ColorPackage[EBillingPackageType.Omni],
        description: "S\u1EA3n ph\u1EA9m kh\u00F4ng gi\u1EDBi h\u1EA1n\n            1 c\u1EEDa h\u00E0ng\n            1 website b\u00E1n h\u00E0ng\n            B\u00E1n h\u00E0ng tr\u00EAn Facebook\n            B\u00E1o c\u00E1o b\u00E1n h\u00E0ng \u0111a k\u00EAnh\n            \u0110\u1ED3ng b\u1ED9 h\u00E0ng h\u00F3a l\u00EAn c\u00E1c k\u00EAnh",
        mostPopular: true,
        cycles: [
            {
                id: exports.BillingPeriods.OneMonth,
                name: '1 tháng',
                price: exports.BillingPricePerMonth[EBillingPackageType.Omni],
            },
            {
                id: exports.BillingPeriods.SixMonths,
                name: '6 tháng',
                price: exports.BillingPricePerMonth[EBillingPackageType.Omni] * 6,
            },
            {
                id: exports.BillingPeriods.OneYear,
                name: '12 tháng',
                price: exports.BillingPricePerMonth[EBillingPackageType.Omni] * 12,
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
exports.packagesFilter = exports.packages.filter(function (item) {
    if (typeof item.hidden === 'undefined') {
        return true;
    }
    return typeof item.hidden === 'boolean' && !item.hidden;
});
