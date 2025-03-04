/* swiper- bnr slide */
const bnrSlide = document.querySelectorAll('.bnr_slide > p')
const bnrTotal = document.querySelector('.all_page')
const bnrCurrent = document.querySelector('.page_now')
const activeScrollbar = document.querySelector('.active_scrollbar')
console.log(bnrSlide)

bnrTotal.textContent = `0${bnrSlide.length}`;

setInterval(() => {
	if(bnrSlide.length < 2){
        bnrSlide.display.transform = 'translateX = -'
    }
},1000);

/* const bnrSwiper = new Swiper('.bnr_slide',{
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
}); */


