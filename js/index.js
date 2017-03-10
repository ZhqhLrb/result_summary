var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    autoHeight: true,
    loop: false,
    height: window.innerHeight,
    initialSlide: 5,
    speed: 500,
    iOSEdgeSwipeDetection : true,
    iOSEdgeSwipeThreshold : 50,
    followFinger: true
});


function judgeWidth () {
    var width = window.innerWidth;
    var height = window.innerHight;
    var title = $('.about-me-title');
    var personalMajor = $('.personal-major');
    var classMajor = $('.class-major');
    var schoolAverage = $('.school-average');
    var majorHandle = $('.major-handle');
    var scoreBar = $('.pk-result-bar');
    var scores = $('.result-score');
    var pkItem = $('.pk-result');
    var pkName = $('.pk-name');

    if (width <= 320 || height <= 876) {
        title[0].style.marginTop = '.5rem';
        title[0].style.marginBottom = '.5rem';
        title[1].style.marginTop = '.5rem';
        title[1].style.marginBottom = '.5rem';
        title[2].style.marginTop = '.5rem';
        title[3].style.marginBottom = '.3rem';
        $('.rank')[0].style.marginBottom = '0';
        $('.rank')[1].style.marginBottom = '0';
        
        for (var i = 0; i < classMajor.length; i++) {
            classMajor[i].style.marginBottom = '0';
        }

        schoolAverage[0].style.marginBottom = '0.3rem';
        schoolAverage[1].style.marginBottom = '0.3rem';
        
        for (var i = 0; i < majorHandle.length; i++) {
            if (majorHandle[i].innerHTML.length > 4) {
                   majorHandle[i].innerHTML = majorHandle[i].innerHTML.slice(0, 3) + '…';
            }
        }

        $('.score-indroduce').style.marginBottom = '.25rem';
        
        for (var i = 0; i < pkItem.length; i++) {
            pkItem[i].style.marginBottom = '.1rem';
        }
    }

    for (var i = 0; i < majorHandle.length; i++) {
        if (majorHandle[i].innerHTML.length > 4) {
            if (i <= 1) {
                majorHandle[i].innerHTML = majorHandle[i].innerHTML.slice(0, 3) + '…';
            } else {
                majorHandle[i].innerHTML = majorHandle[i].innerHTML.slice(0, 4) + '…';
            }
        }
    }
    
    for (var i = 0; i < scoreBar.length; i++) {
        scoreBar[i].style.width = (parseInt(scores[i].innerHTML) / 100 * 506 / 75) + 'rem';
    }

    for (var i = 0; i < pkName.length; i++) {
        if (pkName[i].innerHTML.length > 3) {
            pkName[i].innerHTML = pkName[i].innerHTML.slice(0, 3) + '…';
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

function ajax (obj) {
    var def = {
        type    : 'GET',
        url     : '',
        data    : '',
        async   : true,
        success : function () {},
        error   : function () {
            console.log('error');
        }
    }

    for (var i in obj) {
        def[i] = obj[i];
    }

    def.type = def.type.toUpperCase();

    if (typeof def.data === 'object') {
        var arr= [];
        for (var key in def.data) {
            arr.push(key + '=' + def.data[key]);
        }
        def.data = arr.join('&');
    }

    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
    xhr.open(def.type, def.url, def.async);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var data = JSON.parse(xhr.responseText);
            def.success(data);
        } else if (xhr.readyState == 4 && xhr.status !== 200) {
            def.error();
        }
    }

    if (def.type === 'GET') {
        xhr.send(null);
    } else if (def.type === 'POST') {
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send(def.data);
    }
}


judgeWidth();