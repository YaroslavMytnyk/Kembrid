const furnitureSliderSwiper = new Swiper('.furniture-slider-swiper', {
    effect: "fade",
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.furniture-slider-swiper-button-next',
        prevEl: '.furniture-slider-swiper-button-prev',
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },

});




