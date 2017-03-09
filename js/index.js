var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    autoHeight: true,
    loop: false,
    height: window.innerHeight,
    initialSlide: 4,
    speed: 500,
    iOSEdgeSwipeDetection : true,
    iOSEdgeSwipeThreshold : 30,
    followFinger: false
});


function judgeWidth () {
    var dpr = window.dpr;
    var width = window.innerWidth;
    var title = $('.about-me-title');
    var failMajor = $('.fail-major');

    if (width <= 640) {
        title[0].style.marginTop = '.5rem';
        title[1].style.marginTop = '.5rem';
        title[2].style.marginTop = '.5rem';
    }
    
    for (var i = 1; i < failMajor.length; i++) {
        if (failMajor[i].innerHTML.length > 4) {
            failMajor[i].innerHTML = failMajor[i].innerHTML.slice(0, 4) + '…';
        }
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