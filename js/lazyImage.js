function lazyImage(options) {
    var lazyImages = [],
        delayTime = options.delayTime || 300,
        selector = options.selector || 'lazyimg',
        dataAtt = options.dataAtt || 'data-lazysrc',
        offsetScroll = options.offsetScroll || 100;
    loadImage();
    window.addEventListener('scroll', delayScroll, false);
    function delayScroll() {
        clearTimeout(delay);
        var delay = setTimeout(function () {
            loadImage();
        }, delayTime);
    }
    function loadImage() {
        var images = document.getElementsByClassName(selector);
        for(var i =0;i<images.length;i++){
            lazyImages.push(images[i]);
        }
        for (var i = lazyImages.length - 1; i >= 0; i--) {
            var el = lazyImages[i];
            if (isShow(el)) {
                // el.style.transform = 'translate3d(0,0,0)';
                // $(this).css({'transform':'translate3d(0,0,0)'});
                el.src = el.getAttribute(dataAtt);
                lazyImages.splice(i, 1);
            }
            // imgShow();
            // if (imgShow(el)) {
            //     console.log(1);
            //     el.style.transform = 'translate3d(0,0,0)';
            // }
        }
    }
    function isShow(el) {
        return el.getBoundingClientRect().top <  (document.body.scrollTop + ( window.innerHeight || document.documentElement.clientHeight ) + offsetScroll );
    }
    function imgShow(el) {
        // var el = document.getElementById('num');
        // var num = ( window.innerHeight || document.documentElement.clientHeight ) - el.getBoundingClientRect().top > 150;
        // console.log(num);
        return ( window.innerHeight || document.documentElement.clientHeight ) - el.getBoundingClientRect().top > 10;
    }
}