const portfolioSliderSwiper = new Swiper('.portfolio-slider-swiper', {

    effect: "fade",
    loop: true,

    navigation: {
        nextEl: '.portfolio-slider-swiper-button-next',
        prevEl: '.portfolio-slider-swiper-button-prev',
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },

});




