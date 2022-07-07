export default function SwiperModule() {
    const swiper_ban = new Swiper(".swiper-ban", {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination"
        },
        speed: 1500,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000
        },
        // Navigation arrows
        navigation: {
            nextEl: ".home-banner .swiper-button-next",
            prevEl: ".home-banner .swiper-button-prev"
        }

        // And if we need scrollbar
    });
    const swiper_story = new Swiper(".swiper-story", {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination"
        },
        slidesPerView: 2,
        speed: 1500,
        effect: "slice",
        spaceBetween: 30,
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000
        },
        breakpoints: {
            // when window width is >= 320px
            // when window width is >= 640px
            0: {
                slidesPerView: 1
            },
            400: {
                slidesPerView: 1.2
            },
            650: {
                slidesPerView: 2
            }
        }
        // And if we need scrollbar
    });
    const swiper_ourproduct = new Swiper(".swiper-ourproduct", {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination"
        },
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        slidesPerView: "auto",
        speed: 1200,
        effect: "fade",
        fadeEffect: {
            crossFade: true
        },
        autoplay: {
            delay: 5000
        },
        // Navigation arrows
        navigation: {
            nextEl: ".ourproduct-img .swiper-button-next",
            prevEl: ".ourproduct-img .swiper-button-prev"
        }
    });
    const swiper_careers = new Swiper(".swiper-careers", {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
            el: ".swiper-pagination"
        },
        spaceBetween: 30,
        slidesPerView: 2,
        speed: 1300,
        effect: "slice",
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: ".careers-col-right .swiper-button-next",
            prevEl: ".careers-col-right .swiper-button-prev"
        },
        breakpoints: {
            // when window width is >= 320px
            // when window width is >= 640px
            0: {
                slidesPerView: 1
            },
            320: {
                slidesPerView: 1
            },
            550: {
                slidesPerView: 2
            }
        }
        // And if we need scrollbar
    });
}