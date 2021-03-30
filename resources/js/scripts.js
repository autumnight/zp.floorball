(function ($, undefined) {
    $(document).ready(function () {

        /*$('.slider-team').slick({
            dots: false,
            arrows: true,
            autoplaySpeed: 10000,
            autoplay: true,
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1
        });*/

        $('.slider-team').slick({

            dots: false,
            arrows: true,
            autoplaySpeed: 10000,
            autoplay: true,
            infinite: true,
            slidesToShow: 4,
            speed: 300,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 580,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });

    });

    var $page = $('html, body');

    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 800);
        return false;
    });

    $(".menu-icon-box").click(function(){
        $(".menu-box").toggleClass("open");
    });

    new WOW().init();
})(jQuery);
