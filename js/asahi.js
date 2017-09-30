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
                console.log('不为空');
            }else{
                $('.partner form button').attr('disabled','disabled').addClass('disabled');
                return false;
            }
        }
    })
   

    function init() {
		findDimensions();
        //调用函数，获取数值
        // window.onresize = findDimensions;
        $(window).resize(function() {
            findDimensions();
        });
    }

    init();
})();