import Swiper from 'https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js';

const teamSwiper = new Swiper('.teamSwiper', {
    direction: 'vertical',
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints: {
        1100: {
            slidesPerView: 2,
            direction: 'horizontal'
        }
    }
});

const testimonialSwiper = new Swiper('.testimonialSwiper', {
    direction: 'vertical',
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
        el: '.swiper-pagination--testimonial',
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
            direction: 'horizontal'
        }
    }
});

const reviewSwiper = new Swiper('.reviewSwiper', {
    direction: 'vertical',
    loop: true,
    simulateTouch: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
        delay: 2000
    },
    pagination: {
        el: '.swiper-pagination--review',
    },
    breakpoints: {
        1100: {
            slidesPerView: 3,
            direction: 'horizontal'
        },
        1400: {
            slidesPerView: 4,
            direction: 'horizontal'
        }
    }
});