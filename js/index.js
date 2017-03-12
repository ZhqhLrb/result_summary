var mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    autoHeight: true,
    loop: false,
    height: window.innerHeight,
    initialSlide: 0,
    speed: 500,
    iOSEdgeSwipeDetection : true,
    iOSEdgeSwipeThreshold : 50,
    followFinger: true
});

var u = navigator.userAgent;
var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);

function judgeWidth () {
    var width = window.innerWidth;
    var height = window.innerHeight;
    var title = $('.about-me-title');
    var personalMajor = $('.personal-major');
    var classMajor = $('.class-major');
    var schoolAverage = $('.school-average');
    var major = $('.major');
    var classSub = $('.major-name');
    var pkItem = $('.pk-result');
    var pkName = $('.pk-name');
    
    if (isiOS) {
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
            
            for (var i = 0; i < personalMajor.length; i++) {
                if (personalMajor[i].innerHTML.length > 10) {
                   personalMajor[i].innerHTML = personalMajor[i].innerHTML.slice(0, 12) + '…';
                }
            }

            for (var i = 0; i < classSub.length; i++) {
                if (classSub[i].innerHTML.length > 5) {
                   classSub[i].innerHTML = classSub[i].innerHTML.slice(0, 5) + '…';
                }
            }

            for (var i = 0; i < major.length; i++) {
                if (major[i].innerHTML.length > 4) {
                   major[i].innerHTML = major[i].innerHTML.slice(0, 4) + '…';
                }
            }


            $('.score-indroduce').style.marginBottom = '.25rem';
            
            for (var i = 0; i < pkItem.length; i++) {
                pkItem[i].style.marginBottom = '.1rem';
            }
        } else {
            for (var i = 0; i < personalMajor.length; i++) {
                if (personalMajor[i].innerHTML.length > 4) {
                   personalMajor[i].innerHTML = personalMajor[i].innerHTML.slice(0, 4) + '…';
                }
            }

            for (var i = 0; i < classSub.length; i++) {
                if (classSub[i].innerHTML.length > 5) {
                   classSub[i].innerHTML = classSub[i].innerHTML.slice(0, 5) + '…';
                }
            }

            for (var i = 0; i < major.length; i++) {
                if (major[i].innerHTML.length > 4) {
                   major[i].innerHTML = major[i].innerHTML.slice(0, 4) + '…';
                }
            }
        }
    } else {
        for (var i = 0; i < personalMajor.length; i++) {
            if (personalMajor[i].innerHTML.length > 4) {
               personalMajor[i].innerHTML = personalMajor[i].innerHTML.slice(0, 4) + '…';
            }
        }

        for (var i = 0; i < classSub.length; i++) {
            if (classSub[i].innerHTML.length > 5) {
               classSub[i].innerHTML = classSub[i].innerHTML.slice(0, 5) + '…';
            }
        }

        for (var i = 0; i < major.length; i++) {
            if (major[i].innerHTML.length > 4) {
               major[i].innerHTML = major[i].innerHTML.slice(0, 4) + '…';
            }
        }
    }
    for (var i = 0; i < pkName.length; i++) {
        if (pkName[i].innerHTML.length > 5) {
           pkName[i].innerHTML = pkName[i].innerHTML.slice(0, 5) + '…';
        }
    }
}

function pk () {
    var btn = $('.btn');
    var searchNum = $('.search-box');
    var pkResultPage = $('.swiper-slide')[5];
    var myStunum = document.head.stunum;
    btn.addEventListener('click', function () {
        ajax({
            type: 'post',
            url: 'http://hongyan.cqupt.edu.cn/MagicLoop/index.php?s=/addon/ScoreData/ScoreData/search',
            data: {
                'me_stunum': myStunum,
                'other_stunum': parseInt(searchNum.value)
            },
            success: function (res) {
                var opponentId = $('.opponent-id');
                var pkResult = $('.pk-container');
                if (res.status == 200) {
                    $('.warn-info').style.display = 'none';
                    pkResultPage.style.display = 'block';
                    mySwiper.appendSlide(pkResultPage);
                    opponentId.innerHTML = 'parseInt(searchNum.value)';
                    pkResult.innerHTML = '';
                    for (var i = 0; i < 6; i++) {
                        pkResult.innerHTML += `
                            <div class="pk-result">
                                <div class="pk-name">` + res.data[i].subject + `</div>
                                <div class="pk-item">
                                    <div class="pk-result-bar my-score-bar">
                                        <div class="result-score my-score">` + res.data[i]['me_score'] + `</div>
                                    </div>
                                    <div class="pk-result-bar opponent-score-bar">
                                        <div class="result-score opponent-score">` + res.data[i]['other_score'] + `</div>
                                    </div>
                                </div>
                            </div>
                        `;
                    }

                    var scoreBar = $('.pk-result-bar');
                    var scores = $('.result-score');

                    for (var i = 0; i < scoreBar.length; i++) {
                        scoreBar[i].style.width = 152 / 60 * parseInt(scores[i].innerHTML) / 75 * 1.8 + 'rem';
                    }
                    mySwiper.slideNext();
                } else {
                    if (pkResultPage.style.display == 'block') {
                        pkResultPage.style.display = 'none';
                        mySwiper.removeSlide([5]);
                    }
                    $('.warn-info').style.display = 'block';
                }
            }
        })
    })
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
pk();
init();