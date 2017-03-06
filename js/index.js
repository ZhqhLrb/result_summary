var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: false,
    height: window.innerHeight,
    initialSlide: 2,
    speed: 500,
});


function judgeWidth () {
    var dpr = window.dpr;
    var width = window.innerWidth;
    var title = $('.about-me-title');

    if (width <= 640) {
        title[0].style.marginTop = '.5rem';
        title[1].style.marginTop = '.5rem';
        title[2].style.marginTop = '.5rem';
    }
    
}

function $ (ele) {
    if (document.querySelectorAll(ele).length === 1) {
        return document.querySelector(ele);
    } else {
        return document.querySelectorAll(ele);
    }
}

judgeWidth();