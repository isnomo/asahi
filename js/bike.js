
    function bikelist(option) {
        var $bikeBanner = option.wall;
        var timejg = option.timer || 3000;
        var moveSpeed = option.speed || 300;
        var $boxTab = $bikeBanner.find('.box_tab');
        var $boxImg = $bikeBanner.find('.box_img');
        
        var size = $boxImg.find('ul').find('li').size();
        for (var i = 1; i <= size; i++) {
            $boxTab.append('<a href=""><span></span></a>')
        }

        $boxImg.find('ul').find('li').eq(0).show();
        $boxTab.find('a').eq(0).addClass('active');
        $boxTab.find('a').on('click', function () {
            event.preventDefault();
            $(this).addClass('active').siblings().removeClass('active');
            var index = $(this).index();
            i = index;
            $boxImg.find('ul').find('li').eq(index).stop().fadeIn(moveSpeed).siblings().stop().fadeOut(moveSpeed);
        });

        var i = 0;
        var time = setInterval(moveUp, timejg);

        function moveUp() {
            i++;
            if (i >= size) {
                i = 0;
            }

            $boxTab.find('a').eq(i).addClass('active').siblings().removeClass('active');
            $boxImg.find('ul').find('li').eq(i).fadeIn(moveSpeed).siblings().fadeOut(moveSpeed);
        }

        function moveDown() {
            i--;
            if (i < 0) {
                i = size - 1;
            }

            $boxTab.find('a').eq(i).addClass('active').siblings().removeClass('active');
            $boxImg.find('ul').find('li').eq(i).fadeIn(moveSpeed).siblings().fadeOut(moveSpeed);
        }


        var touch_px;
        var rate;
        var bannerBox = document.getElementsByClassName('box')[0];
        bannerBox.addEventListener('touchstart', function (ev) {
            var touch = ev.targetTouches[0];
            touch_px = touch.pageX;
            clearInterval(time);

        }, false);
        bannerBox.addEventListener('touchmove', function (ev) {
            var touch = ev.targetTouches[0];
            rate = touch_px - touch.pageX;
        }, false);
        bannerBox.addEventListener('touchend', function (ev) {
            if (rate > 50) {
                $(this).stop(true);
                moveUp();
                rate = 0;
            } else if (rate < -50) {
                $(this).stop(true);
                moveDown();
                rate = 0;
            }
        }, false);


        $bikeBanner.hover(function () {
            clearInterval(time);
        }, function () {
            time = setInterval(moveUp, timejg);
        });
    }
