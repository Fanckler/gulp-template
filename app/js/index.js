sayHello();

$(document).ready(function () {


    $('.slides__wrapper').slick({
        dots: true,
        infinite: true,
        speed: 500,
        //fade: true,
        arrows: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1
    });

});
