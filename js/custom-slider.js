var menu = [
    '<div class="item"><h3 class="title">Полный цикл</h3><p class="description">С другой стороны, граница обучения кадров играет определяющее значение.</p></div>',
    '<div class="item"><h3 class="title">Профессионализм</h3><p class="description">С другой стороны, граница обучения кадров играет определяющее значение.</p></div>',
    '<div class="item"><h3 class="title">Качество материалов</h3><p class="description">С другой стороны, граница обучения кадров играет определяющее значение.</p></div>',
]
var customSliderSwiper = new Swiper ('.custom-slider-swiper', {

    effect: "fade",
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },

    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
})

