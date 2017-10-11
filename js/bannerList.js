
function bannerListFn(option){
    var $bannerMaxWapDom = option.wall;
    var $imgBtnList = option.btnList;
    var timer = option.timer || 3000;
    var auto = option.auto || true;
    var hoverStop = option.hoverStop || false;

    var windowWidth=$(window).width();
    var windowHeight=$(window).height();
    var timeShow=0;
    var array=0;
    var timeOff=0;
    var imgPos=$bannerMaxWapDom.find("ul").find("li");
    
    var cloneOne=imgPos.first().clone();
    $bannerMaxWapDom.find("ul").append(cloneOne);
    $bannerMaxWapDom.find("li").width(windowWidth);

    var liWidth=imgPos.width();
    var liLength = $bannerMaxWapDom.find("li").length;

    
    $bannerMaxWapDom.find("ul").width( liWidth * liLength );

    setTimeout(function(i){
        timeShow++;
        (timeShow == 1) ? $bannerMaxWapDom.find("ul").fadeIn() : $bannerMaxWapDom.find("ul").hide();
    },20);

    function imgListBtn (){
        for (var i=0; i < liLength-1; i++ ){
            $imgBtnList.append("<span></span>");
        }

        $imgBtnList.children().eq(0).addClass("current");

        $imgBtnList.children().click(function(){
            clearInterval(timeOff);
            var index=$(this).index();
            array=index;
            bannerImgList(index);
            $imgBtnList.children().eq(array).addClass("current").siblings().removeClass("current");
            (auto) ? setTime() : setTime;
        });

    }

    imgListBtn();

    function bannerImgList(a){
        $bannerMaxWapDom.find("ul").animate({left: -a * windowWidth},600)
    }

    function setTime(){
        timeOff=setInterval(function(){
            array++;
            move();
        },timer)
    }

    (auto) ? setTime() : setTime;


    function move(){
        if (array == liLength){
            $bannerMaxWapDom.find("ul").css({left:0});
            array=1;
        }

        if (array == -1){
            $bannerMaxWapDom.find("ul").css({left:-liWidth*(liLength-1)});
            array=liLength-2
        }

        $bannerMaxWapDom.find("ul").stop(true).animate({
            left:-array*liWidth
        },500);

        (array == liLength-1) ? $imgBtnList.children().eq(0).addClass("current").siblings().removeClass("current") : $imgBtnList.children().eq(array).addClass("current").siblings().removeClass("current");


    }

    var touch_px;
    var rate;
    $bannerMaxWapDom[0].addEventListener('touchstart', function (ev) {
        // ev.preventDefault();
        var touch=ev.targetTouches[0];
        touch_px = touch.pageX;
        clearInterval(timeOff);

    },false);
    $bannerMaxWapDom[0].addEventListener('touchmove', function (ev) {
        // ev.preventDefault()
        var touch=ev.targetTouches[0];
        rate =  touch_px-touch.pageX;

    },false);
    $bannerMaxWapDom[0].addEventListener('touchend', function (ev) {
        if(rate > 50){
            $(this).stop(true);
            array++;
            move();
            rate = 0;
        }else if(rate < -50){
            $(this).stop(true);
            array--;
            move();
            rate = 0;
        }

        (auto) ? setTime() : setTime;

    },false);

    if(hoverStop){
        $bannerMaxWapDom.hover(function(){
            clearInterval(timeOff);
        },function(){(auto) ? setTime() : setTime;});
    }
    
}























