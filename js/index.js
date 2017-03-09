var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    autoHeight: true,
    loop: false,
    height: window.innerHeight,
    initialSlide: 2,
    speed: 500,
    iOSEdgeSwipeDetection : true,
    iOSEdgeSwipeThreshold : 50,
    followFinger: true
});


function judgeWidth () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var title = $('.about-me-title');
    var classMajor = $('.class-major');
    var schoolAverage = $('.school-average');

    if (width <= 320 || height <= 876) {
        title[0].style.marginTop = '.5rem';
        title[1].style.marginTop = '.5rem';
        title[1].style.marginBottom = '.5rem';
        title[2].style.marginTop = '.5rem';
        for (var i = 0; i < classMajor.length; i++) {
            classMajor[i].style.marginBottom = '0';
        }
        schoolAverage[0].style.marginBottom = '0.3rem';
        schoolAverage[1].style.marginBottom = '0.3rem';
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