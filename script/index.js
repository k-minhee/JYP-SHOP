/* swiper- bnr slide */
const bnrTotal = document.querySelector('.page_all')
const bnrCurrent = document.querySelector('.page_now')
const slideNum = document.querySelectorAll('.bnr_slide .swiper-slide')
const activeScrollbar = document.querySelector('.active-scrollbar')
console.log(slideNum)

bnrTotal.textContent = slideNum.length;

const bnrSwiper = new Swiper('.bnr_slide',{
    /* autoplay: {
        delay: 0,
    }, */
    speed: 4000,
    loop: true,
    on: {
        slideChange: function(){
            bnrCurrent.textContent = this.realIndex+1;
        },
        autoplayTimeLeft(type, time, progress) {
            if(progress === 1){
                activeScrollbar.style.width = '0%'
                activeScrollbar.style.transition = 'none' // 처음으로 다시 돌아가면 곧바로 짧아져야 하므로
            }else {
                activeScrollbar.style.width = '100%'
                activeScrollbar.style.transition = 'width 4s linear'
            }
        }
    },
    navigation: {
        prevEl: '.bnr_slide .swiper-button-prev',
        nextEl: '.bnr_slide .swiper-button-next',
    },
});

/* swiper - new_slide */
const newSwiper = new Swiper('.new_slide_wrapper .new_slide',{
    slidesPerView: 3,
    spaceBetween: 16,
})


