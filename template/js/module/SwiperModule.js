export default function SwiperModule() {
    var storySlider = new Swiper(".story-slider", {
        // freeMode: true,
        watchSlidesProgress: true,
        speed: 1200,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.story .swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        navigation: {
            nextEl: '.story .swiper-next',
            prevEl: '.story .swiper-prev',
        },
        // slidesPerGroup: 2,
        loop: true,
        spaceBetween: 32,
        // effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        breakpoints: {
            0: {
                slidesPerView: 1.2,
            },
            500: {
                slidesPerView: 2.2,

            },
            768: {
                slidesPerView: 3,

            },
            1200: {
                slidesPerView: 3,
            }
        }
    });
    const slidedbAll = document.querySelectorAll('.slidedb-slider-all')
    if (slidedbAll) {
        slidedbAll.forEach(item => {
            const slidedbMain = item.querySelector('.slidedb-slider-main')
            const swiperMain = slidedbMain.querySelector('.swiper')
            const nextMain = slidedbMain.querySelector('.swiper-next')
            const prevMain = slidedbMain.querySelector('.swiper-prev')
            const pagiMain = slidedbMain.querySelector('.swiper-pagination')



            const slidedbSub = item.querySelector('.slidedb-slider-sub')
            const swiperSub = slidedbSub.querySelector('.swiper')
            const nextSub = slidedbMain.querySelector('.swiper-next')
            const prevSub = slidedbMain.querySelector('.swiper-prev')
            const pagiSub = slidedbMain.querySelector('.swiper-pagination')


            var slidedbSubSlider = new Swiper(swiperSub, {
                // freeMode: true,
                watchSlidesProgress: true,
                // grabCursor: true,
                speed: 1200,
                // autoplay: {
                //     delay: 3000,
                // },
                centeredSlides: false,
                pagination: {
                    el: pagiSub,
                    type: "bullets",
                    clickable: true,
                },
                navigation: {
                    nextEl: nextSub,
                    prevEl: prevSub,
                },
                // slidesPerGroup: 2,
                loop: false,
                spaceBetween: 16,

                // effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                breakpoints: {
                    0: {
                        slidesPerView: 4,
                        spaceBetween: 8,

                    },
                    500: {
                        slidesPerView: 4,
                    },
                    1200: {
                        slidesPerView: 4,
                    },
                },
            });
            var slidedbMainSlider = new Swiper(swiperMain, {
                // freeMode: true,
                watchSlidesProgress: true,
                // grabCursor: true,
                speed: 1200,
                // autoplay: {
                //     delay: 3000,
                // },
                centeredSlides: false,
                pagination: {
                    el: pagiMain,
                    type: "bullets",
                    clickable: true,
                },
                navigation: {
                    nextEl: nextMain,
                    prevEl: prevMain,
                },
                // slidesPerGroup: 2,
                loop: true,
                spaceBetween: 0,
                slidesPerView: 1,

                effect: 'fade',
                fadeEffect: {
                    crossFade: true,
                },
                // breakpoints: {
                //   0: {
                //     slidesPerView: 1.2,
                //     spaceBetween: 10,
                //     centeredSlides: false,
                //   },
                //   500: {
                //     slidesPerView: 2,
                //     spaceBetween: 10,
                //   },
                //   768: {
                //     slidesPerView: 2.8,
                //   },
                //   1200: {
                //     slidesPerView: 1,
                //   },
                // },
                thumbs: {
                    swiper: slidedbSubSlider,
                },
            });
        })
    }


}