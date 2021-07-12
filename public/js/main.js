$(document).ready(function () {
    // header menu
    const $menuItem = $('.main-menu > li');

    $menuItem.each(function (index, el) {
        if ($(el).find('ul').length) {
            $(el).addClass('dropdown');
        }
    });

    $('.main-menu li').each(function (e) {
        $this = $(this);
        const $a = $this.children('a');
        const $aLink = $a.attr('href');
        $menuProduct = $('.menu-product');
        const productMenus = ['/insa-facebook', '/insa-pos', '/insa-shopee', '/insa-website'];

        if (productMenus.includes(window.location.pathname)) {
            $menuProduct.addClass('active');
        } else if (
            $aLink === window.location.pathname ||
            ($aLink === '/kham-pha' && window.location.pathname.includes('/kham-pha'))
        ) {
            $a.parent('li').addClass('active');
        }
    });

    $menuItem.click(function () {
        $(this).find('ul').toggleClass('show');
    });

    $('.toggle-menu').click(function () {
        const $nav = $('nav.nav');
        const $gray = $('.gray');

        $nav.toggleClass('show');

        if ($gray.length) {
            $gray.remove();
            $('body').removeClass('overflow-hidden');
        } else {
            $('body').append('<div class="gray"/>');
            $('body').addClass('overflow-hidden');
        }

        $('.gray').click(function () {
            $nav.removeClass('show');
            $(this).remove();
            $('body').removeClass('overflow-hidden');
        });

        $('.close-menu').click(function () {
            $nav.removeClass('show');
            $('.gray').remove('.gray');
            $('body').removeClass('overflow-hidden');
        });
    });

    // slider
    var responsive = [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 991,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ];

    $('.news_slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        dots: true,
        responsive: responsive,
    });

    $('.testimonial-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
    });

    // tab
    const $span = $('.home-tab_menu span');
    const $tabContent = $('.home-tab .tabContent');
    $discount = $('.discountLabel');
    $pricingDiscount = $('.pricingDiscount');

    const discountList = {
        oneMonth: '',
        sixMonth: '+1 tháng',
        twelveMonth: '+3 tháng',
    };

    $('.pricingDiscount').css({ opacity: 0 });

    $span.click(function () {
        const $this = $(this);
        $span.removeClass('active');
        $this.addClass('active');

        const $tab = $this.data('name');
        const $tabContentId = $('#' + $tab);

        $tabContent.removeClass('show');
        $tabContentId.addClass('show');

        const text = discountList[$tab];

        if ($tab === 'oneMonth') {
            $('.pricingDiscount').css({ opacity: 0 });
        } else {
            $('.pricingDiscount').css({ opacity: 1 });
        }

        const $discountLabel = $tabContentId.find('.discountLabel');
        $discountLabel.text(text);

        $pricingDiscount.text(text);
    });

    // question
    const $question = $('.questions .question');
    const $answer = $question.find('.answer');
    const $title = $question.find('.question-title');

    $answer.hide();

    $title.click(function (event) {
        event.stopImmediatePropagation();
        const $this = $(this);
        $title.removeClass('active');
        $this.toggleClass('active');

        const $answerContent = $this.data('answer') || '';

        $answer.slideUp();
        $this.next('.answer').html($answerContent).stop().slideToggle();
    });
});
