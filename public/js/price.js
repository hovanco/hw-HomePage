$(document).ready(function () {
    const $input = $('.service-radio');
    const priceMonthOne = 199000,
        priceMonthAll = priceMonthOne * 2, // 499000,
        priceYearOne = priceMonthOne * 12,
        priceYearAll = priceMonthOne * 2 * 12;

    let arraysPackage = ['social', 'pos'];

    const notes = {
        omni: {
            month: 'Cung cấp nền tảng quản lý và bán hàng tổng thể từ online đến offline cho doanh nghiệp theo từng tháng.',
            year: 'Cung cấp đầy đủ và toàn diện nền tảng quản lý và bán hàng tổng thể từ online đến offline cho doanh nghiệp trong 1 năm.',
        },
        social: {
            month: 'Quản lý dễ dàng, thúc đẩy tăng trưởng kinh doanh - Gia tăng tần suất mua hàng từ khách hàng cũ ',
            year: 'Quản lý dễ dàng, thúc đẩy tăng trưởng kinh doanh - Gia tăng tần suất mua hàng từ khách hàng cũ ',
        },
        pos: {
            month: 'Hỗ trợ chủ doanh nghiệp có thể: tính tiền, in hóa đơn, mã vạch, quản lý kho, khuyến mại, kế toán, khách hàng, nhân viên, báo cáo,... theo tháng dành cho cửa hàng nhỏ mới kinh doanh.',
            year: 'Giúp chủ doanh nghiệp có thể đồng bộ kinh doanh từ Facebook đến hỗ trợ tại cửa hàng như: tính tiền, in hóa đơn, mã vạch, quản lý kho, khuyến mại, kế toán, khách hàng, nhân viên, báo cáo,... trong cả năm dành cho cửa hàng, chuỗi cửa hàng ',
        },

        ecom: {
            month: 'Đồng bộ sản phẩm tồn kho, đơn hàng với các sàn thương mại điện tử như Shopee, Lazada, Sendo, Tiki, ... trả phí định kỳ theo từng tháng',
            year: 'Đồng bộ sản phẩm tồn kho, đơn hàng với các sàn thương mại điện tử như Shopee, Lazada, Sendo, Tiki, ... trong 1 năm ',
        },
        web: {
            month: 'Thiết kế và lập trình Website một cách chuyên nghiệp sử dụng trả phí định kỳ theo từng tháng',
            year: 'Thiết kế và lập trình Website một cách chuyên nghiệp và sử dụng trong 1 năm.',
        },
    };

    $input.prop('checked', true);
    $input.data('storedValue', true);

    // package list
    $('ul.package-list li').click(function () {
        const $name = $(this).data('label');

        if ($name === 'all') {
            $input.prop('checked', true);
            $input.data('storedValue', true);
        } else {
            $input.filter(`[name!="${$name}"]`).prop('checked', false);
            $input.filter(`[name!="${$name}"]`).data('storedValue', false);

            $input.filter(`[name="${$name}"]`).prop('checked', true);
            $input.filter(`[name="${$name}"]`).data('storedValue', true);
        }

        calculatePrice((setNote = true));
    });

    // radio
    $input.click(function () {
        const $this = $(this);

        if ($input.filter(':checked').length <= 1) {
            return;
        }

        const previousValue = $this.data('storedValue');

        const packageName = $this.data('label');

        if (previousValue) {
            $this.prop('checked', !previousValue);
            $this.data('storedValue', !previousValue);

            arraysPackage = arraysPackage.filter((item) => item !== packageName);
        } else {
            $this.data('storedValue', true);
            arraysPackage = [...arraysPackage, packageName];
        }

        calculatePrice((setNote = false));
    });

    // calculate & set price
    function calculatePrice(setNote) {
        let priceMonth = 0,
            priceYear = 0,
            note = notes.omni;

        if ($input.filter(':checked').length === 2) {
            priceMonth = priceMonthAll;
            priceYear = priceYearAll;
        } else {
            $input.filter(':checked').each(function () {
                const $name = $(this).data('label');

                switch ($name) {
                    case 'ecom':
                        priceMonth += priceMonthOne;
                        priceYear += priceYearOne;
                        note = notes.ecom;
                        break;
                    case 'pos':
                        priceMonth += priceMonthOne;
                        priceYear += priceYearOne;
                        note = notes.pos;
                        break;
                    case 'social':
                        priceMonth += priceMonthOne;
                        priceYear += priceYearOne;
                        note = notes.social;
                        break;
                    case 'web':
                        priceMonth += priceMonthOne;
                        priceYear += priceYearOne;
                        note = notes.web;
                        break;
                    default:
                        note = notes.omni;
                        break;
                }
            });
        }

        $('#price-month').html(`${priceMonth.toLocaleString().replaceAll(',', '.')}<sup>đ</sup>`);
        $('#price-month-describe').html(
            `Thanh toán định kỳ hàng tháng ${priceMonth.toLocaleString().replaceAll(',', '.')}đ`,
        );

        $('#price-year').html(`${priceYear.toLocaleString().replaceAll(',', '.')}<sup>đ</sup>`);
        $('#price-year-describe').html(
            `Thanh toán định kỳ hàng năm ${priceYear.toLocaleString().replaceAll(',', '.')}đ`,
        );

        if (setNote) {
            $('.noteMonth').html(note.month);
            $('.noteYear').html(note.year);
        }
    }

    // price
    $('.package-detail').hide();
    const $packageTitle = $('.package').find('.package-title');

    $packageTitle.on('click', function () {
        const $this = $(this);
        $this.toggleClass('active');
        const $parent = $this.parents('.package');
        const $packageDetail = $parent.children('.package-detail');

        $parent.addClass('dads');
        $packageDetail.slideToggle();
    });

    // package select
    const $package = $('.package');
    const $packageSelectLabel = $('.package-select-label');
    const $packageList = $('.package-list');

    // $packageList.hide();

    let isActive = false;

    $packageSelectLabel.on('click', function (e) {
        isActive = true;
        $packageList.addClass('show');
    });

    $('html').click(function (event) {
        var $target = $(event.target);

        if ($target.parents('.package-select').length == 0) {
            // $packageList.slideUp();
            $packageList.removeClass('show');
        }
    });

    let package;

    $packageList.find('li').click(function () {
        const $this = $(this);
        const $labelText = $this.text().trim();
        $packageSelectLabel.text($labelText);
        $packageList.removeClass('show');

        const $dataPackage = $this.data('label');

        package = $dataPackage;

        if ($dataPackage === 'all') {
            $package.show();
        } else {
            $package.hide();
            $('.' + $dataPackage).show();
        }
    });

    $('.btn-buy-package').click(function () {
        const $this = $(this);
        const $period = $this.data('period');

        window.location.href = `${window.location.origin}/thanh-toan?packages=${arraysPackage.join(
            ',',
        )}&period=${$period}`;
    });
});
