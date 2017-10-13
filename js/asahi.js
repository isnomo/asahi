(function () {
    var winWidth = 0;
    var winHeight = 0;
    function findDimensions(){ //函数：获取尺寸
        //获取窗口宽度
        if (window.innerWidth)
            winWidth = window.innerWidth;
        else if ((document.body) && (document.body.clientWidth))
            winWidth = document.body.clientWidth;
        //获取窗口高度
        if (window.innerHeight)
            winHeight = window.innerHeight;
        else if ((document.body) && (document.body.clientHeight))
            winHeight = document.body.clientHeight;
        //通过深入Document内部对body进行检测，获取窗口大小
        if (document.documentElement && document.documentElement.clientHeight && document.documentElement.clientWidth) {
            winHeight = document.documentElement.clientHeight;
            winWidth = document.documentElement.clientWidth;
        }
        //结果输出至两个文本框
        console.log(winHeight);
        console.log(winWidth);
    
        if (winWidth < 768) {
            // $('.menu-wrap').css({'height' : winHeight-50,'margin-top':'50px' });
        }

    }

    function showImages() {
        var images = document.getElementsByClassName('isShow');
        for (var i = images.length - 1; i >= 0; i--) {
            var el = images[i];
            // imgShow();
            if (imgShow(el)) {
                el.style.transform = 'translate3d(0,0,0)';
                el.style.opacity = '1';
            }
        }
        function imgShow(el) {
            return ( window.innerHeight || document.documentElement.clientHeight ) - el.getBoundingClientRect().top > 30;
        }

    }

    $(window).scroll( function() {
        // showImages ();
        var toTop = $(this).scrollTop();

    })

    $(window).load(function () {
        // showImages ();
        
        $('.partner form input').keydown(function () {
            partnerBtn();
        });
        $('.partner form textarea').keydown(function () {
            partnerBtn();
        });

        function partnerBtn(){
            var ipt = $('.partner form input').val();
            var txtare = $('.partner form textarea').val();
            if(ipt != '' && txtare != ''){
                $('.partner form button').removeAttr('disabled').removeClass('disabled');
            }else{
                $('.partner form button').attr('disabled','disabled').addClass('disabled');
                return false;
            }
        }
        $('.video-up').click(function(){
            setTimeout(function(){
                var video = document.getElementById("modalPlay");
                video.play();
            }, 500);
            // setTimeout(function(){
            //     $('#modal-video .modal-header').fadeOut(300);
            // }, 1000);
        });

        $('#modal-video .close').click(function(){
            var video = document.getElementById("modalPlay");
            video.pause();
        });

    })

    $('.partner form button').click(function(){
        alert('暂未开放，敬请期待！');
    });

    // var isOff = true;
    $("header .logo-text ul li ").hover(function(){
        // if(isOff){
        //     $(this).find('.class').stop().slideDown(300);
        // }else{
        //     $(this).find('.class').stop().show();
        // }
        $(this).find('.class').stop().show();
    },function(){
        // if(!isOff){
        //     $(this).find('.class').stop().slideUp(300);
        // }else{
        //     $(this).find('.class').stop().hide();
        // }
        $(this).find('.class').stop().hide();
    });
    
    $("header .logo-text ul li .noClick").click(function(){
        event.preventDefault();
    });


    function init() {
		findDimensions();
        //调用函数，获取数值
        // window.onresize = findDimensions;
        $(window).resize(function() {
            findDimensions();
        });
        initEvents();

        if (window.devicePixelRatio > 1) {
            var images = $("img.retina");
            images.each(function(i) {
                var x1 = $(this).attr('src');
                var x2 = 'x2' + x1;
                $(this).attr('src', x2);
            });
        }
    }

    // 侧边栏按钮
    var isOpen = false;

    function initEvents() {
        $('#open-button').on('click',toggleMenu);	
    }
    function toggleMenu() {
        if( isOpen ) {
            $('html').removeClass('show-menu');
            $('#open-button').removeClass('btn-close');
        }else {
            $('html').addClass('show-menu');
            $('#open-button').addClass('btn-close');
        }
        isOpen = !isOpen;
    }
    $('.back-menu').on('click',function(){
        $('html').removeClass('show-menu');
        $('#open-button').removeClass('btn-close');
    });



    init();
})();