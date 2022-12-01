$(function () {
    $('.topBanner i').on('click', function () {
        $('.topBanner').addClass('on');
    });

    $('.mainSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: false,
        pauseOnFocus: false,

    });


    $('.main_pro_slide').slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
    });

    $('.mainProduct .arrows .prev').on('click', function () {
        $('.main_pro_slide').slick('slickPrev')
    })

    $('.mainProduct .arrows .next').on('click', function () {
        $('.main_pro_slide').slick('slickNext')
    })

    $('.mainCustomer .tab_menu>li').on('click', function (event) {
        event.preventDefault();
        var _this = $(this);
        var idx = $(this).index();
        $(this).addClass('on').siblings().removeClass('on');
        $('.mainCustomer .tab_content>li').eq(idx).addClass('on').siblings().removeClass('on')
    });

    $('#f_link').on('change', function () {
        var link = $(this).val();
        link && window.open(link)
    })




});