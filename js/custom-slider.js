var menu = [
    '<div class="item"><h3 class="title lng-custom-swiper-title-slide-one">Повний цикл</h3><p class="description lng-custom-swiper-description-slide-one">Замір -—> розрахунок виробу та обгворювання деталей -—> підготовка деталей —-> монтаж</p></div>',
    '<div class="item"><h3 class="title lng-custom-swiper-title-slide-two">Професіоналізм</h3><p class="description lng-custom-swiper-description-slide-two">Наші майстри вже працюють більше 20 років і мають чудовий досвід</p></div>',
    '<div class="item"><h3 class="title lng-custom-swiper-title-slide-three">Якість матеріалів</h3><p class="description lng-custom-swiper-description-slide-three">Ми працюємо з такими компаніями як "Віяр" "Берест" та "Лмастер"</p></div>',
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

