
var _presentationManager = {};
var currentScreen = 0;
var scrollReady = false;
var scrollLocked = false;
var scrollDirection = 'down';
var screenAnimationTime = 1800;
var screens = mint.screens;

(function(a){function p(a){if((new Date).getTime()<d+c)return;d=(new Date).getTime();var b=f.offset()!=null?f.offset().left:0,i=f.offset()!=null?f.offset().top:0,j=a.pageX-b,k=a.pageY-i;if(j<0||j>f.width()||k<0||k>f.height())return;if(g==true){var l=window.orientation?(window.orientation+180)%360/90:2,m=a.accelerationIncludingGravity,n=l%2==0?-m.x:m.y,o=l%2==0?m.y:m.x;j=l>=2?n:-n;k=l>=2?o:-o;j=(j+h)/2;k=(k+h)/2;if(j<0){j=0}else if(j>h){j=h}if(k<0){k=0}else if(k>h){k=h}}var p=j/(g==true?h:f.width()),q=k/(g==true?h:f.height()),r,l;for(l=e.length;l--;){r=e[l];newX=r.startX+r.inversionFactor*r.xRange*p;newY=r.startY+r.inversionFactor*r.yRange*q;if(r.background){r.obj.css("background-position",newX+"px "+newY+"px")}else{r.obj.css("left",newX).css("top",newY)}}}function o(b){if((new Date).getTime()<d+c)return;if(n()){var e=b.accelerationIncludingGravity,f=e.x,o=e.y;if(k.xArray.length>=5){k.xArray.shift()}if(k.yArray.length>=5){k.yArray.shift()}k.xArray.push(f);k.yArray.push(o);k.xMotion=Math.round((m(k.xArray)-l(k.xArray))*1e3)/1e3;k.yMotion=Math.round((m(k.yArray)-l(k.yArray))*1e3)/1e3;if(k.xMotion>1.5||k.yMotion>1.5){if(h!=10){h=10}}if(k.xMotion>i||k.yMotion>i){j++}else{j=0}if(j>=5){g=true;a(document).unbind("mousemove.plax");a(window).bind("devicemotion",p(b))}else{g=false;a(window).unbind("devicemotion");a(document).bind("mousemove.plax",function(a){p(a)})}}}function n(){return window.DeviceMotionEvent!=undefined}function m(a){return Math.max.apply({},a)}function l(a){return Math.min.apply({},a)}var b=25,c=1/b*1e3,d=(new Date).getTime(),e=[],f=a(window),g=false,h=1,i=.05,j=0,k={xArray:[0,0,0,0,0],yArray:[0,0,0,0,0],xMotion:0,yMotion:0};a.fn.plaxify=function(b){return this.each(function(){var c=-1;var d={xRange:a(this).data("xrange")||0,yRange:a(this).data("yrange")||0,invert:a(this).data("invert")||false,background:a(this).data("background")||false};for(var f=0;f<e.length;f++){if(this===e[f].obj.get(0)){c=f}}for(var g in b){if(d[g]==0){d[g]=b[g]}}d.inversionFactor=d.invert?-1:1;d.obj=a(this);if(d.background){pos=(d.obj.css("background-position")||"0px 0px").split(/ /);if(pos.length!=2){return}x=pos[0].match(/^((-?\d+)\s*px|0+\s*%|left)$/);y=pos[1].match(/^((-?\d+)\s*px|0+\s*%|top)$/);if(!x||!y){return}d.startX=x[2]||0;d.startY=y[2]||0}else{var h=d.obj.position();d.obj.css({top:h.top,left:h.left,right:"",bottom:""});d.startX=this.offsetLeft;d.startY=this.offsetTop}d.startX-=d.inversionFactor*Math.floor(d.xRange/2);d.startY-=d.inversionFactor*Math.floor(d.yRange/2);if(c>=0){e.splice(c,1,d)}else{e.push(d)}})};a.plax={enable:function(b){a(document).bind("mousemove.plax",function(c){if(b){f=b.activityTarget||a(window)}p(c)});if(n()){window.ondevicemotion=function(a){o(a)}}},disable:function(){a(document).unbind("mousemove.plax");window.ondevicemotion=undefined}};if(typeof ender!=="undefined"){a.ender(a.fn,true)}})(function(){return typeof jQuery!=="undefined"?jQuery:ender}());

(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

mint.PresentationManager = function(){
    var self, _leadershipSlider, _activePortfolioSlide;
    self = this;

    self.keyCodes = {
        one: 49,
        two: 50,
        three: 51,
        four: 52,
        five: 53,
        six: 54,
        seven: 55,
        eight: 56,
        down: 40,
        up: 38,
        left: 37,
        right: 39,
        c: 67,
        d: 68,
        e: 69,
        s: 83
    };

    self.goToNextLeadershipSlide = function() {
        _leadershipSlider.goToNextSlide();
        return false;
    };

    self.goToPreviousLeadershipSlide = function(){
        _leadershipSlider.goToPrevSlide();
        return false;
    };

    self.goToNextServiceSlide = function(){
        $('#services-next').trigger('click');
        return false;
    };

    self.goToPreviousServiceSlide = function(){
        $('#services-prev').trigger('click');
        return false;
    };

    self.showServiceSlide = function(keyCode){
        var element;

        switch(keyCode){
            case self.keyCodes.c:
                element = $("a.services-nav-item:contains('Corporate Identity')");
                break;
            case self.keyCodes.d:
                element = $("a.services-nav-item:contains('Digital and Web')");
                break;
            case self.keyCodes.e:
                element = $("a.services-nav-item:contains('Experiential Marketing')");
                break;
            case self.keyCodes.s:
                element = $("a.services-nav-item:contains('Social Media')");
                break;
            default:
                break;
        }

        if (element) {
            element.click();
        }
    };

    self.showProcessColumn = function(keyCode){
        var element;

        switch(keyCode){
            case self.keyCodes.one:
                element = $(".process-column").filter(function() { return $.data(this, "index") == "1"; });
                break;
            case self.keyCodes.two:
                element = $(".process-column").filter(function() { return $.data(this, "index") == "2"; });
                break;
            case self.keyCodes.three:
                element = $(".process-column").filter(function() { return $.data(this, "index") == "3"; });
                break;
            case self.keyCodes.four:
                element = $(".process-column").filter(function() { return $.data(this, "index") == "4"; });
                break;
            default:
                break;
        }

        if(!element){
            return;
        }

        $(element).children('.our-process-div').slideDown();
    };

    self.handleTeamSlideKeyCode = function(keyCode){
        var element;
        var character = String.fromCharCode(keyCode);
        var num = parseInt(character);

        if(!num) {
            return;
        }

        element = $(".profile-box").children("a[data-index='" + num + "']");

        if(element){
           element.click();
        }
    };

    self.handlePortfolioSlideKeyCode = function(keyCode){
        var element;
        var character = String.fromCharCode(keyCode);
        var num = parseInt(character);

        if(num) {
            element = $("a.portfolio-prompt[data-index='" + num + "']");

            if(element){
                element.click();
            }
            return;
        }

        if(!$.inArray([self.keyCodes.left, self.keyCodes.right], keyCode)){
            return;
        }

        var sliderName = _activePortfolioSlide.attr('href').replace('#', '');

        if(keyCode == self.keyCodes.left){
            var prev = $('.' + sliderName + '-slider-prev');
            if (prev.length > 0) {
                prev.click();
            }
        }
        else if(keyCode == self.keyCodes.right){
            var next = $('.' + sliderName + '-slider-next');
            if (next.length > 0) {
                next.click();
            }
        }
    };

    function ourProcessInit(){
        $('.process-column').hover(function(){
            $(this).children('.our-process-div').slideDown();
        },function(){
            $(this).children('.our-process-div').slideUp();
        });
    }

    function registerMobileGestures(){
//        var hammertime = Hammer($('#skrollr-body'));

//        hammertime
//            .on("tap", function(e){
//                alert('tap');
//            })
//            .on("swipeup", function(e) {
//                alert('just swiped up');
//            })
//            .on("swipedown", function(e){
//                alert('just swiped down');
//            });
    }

    function teamModalInit() {
        $('a[rel=team]').each(function () {
            var id = $(this).data('person');
            var person = people[id];

            var source = $("#entry-template").html();
            var template = Handlebars.compile(source);

            var context = {};
            context = $.extend(context, person);

            var html = template(context);
            $('#teamMemberPlaceholder').append(html);
        });

        $('a[rel=team]').fancybox({
            type: 'inline',
            openEffect: 'elastic',
            minHeight: '55%',
            height: '55%',
            minWidth: '650px',
            padding: 0,
            arrows: false,
            width: 650,
            autoSize: false,
            autoResize: false,
            beforeClose: function () {
                scrollLocked = false;
            },
            afterShow: function () {
                scrollLocked = true;
            }
        });
    }

    function portfolioInit(){
        $('.portfolio-prompt').fancybox({
            minHeight: '95%',
            height: '95%',
            minWidth: '80%',
            width: '80%',
            openEffect: 'elastic',
            scrolling: 'no',
            closeEffect: 'elastic',
            beforeClose: function () { scrollLocked = false; },
            afterShow: function () {
                scrollLocked = true;
                _activePortfolioSlide = $(this);
            }
        });
    }

    self.init = function() {

        registerMobileGestures();

        _leadershipSlider = $('.leadership-slider').bxSlider({
            infiniteLoop: false,
            controls: false,
            hideControlOnEnd: true,
            slideMargin: 10,
            pager: false
        });

        $(".services").touchSlider({
            duration: 350,
            mouseTouch: true,
            namespace: 'services',
            next: "#services-next",
            prev: "#services-prev",
            margin: 0
        });

        $('.portfolio-mcdonalds-slider').touchSlider({
            duration: 350,
            mouseTouch: true,
            namespace: 'portfolio-mcdonalds-slider',
            margin: 0
        });

        $('#leadership-learn-more').click(function(){
            return self.goToNextLeadershipSlide();
        });

        $('#leadership-slider-prev').click(function(){
            return self.goToPreviousLeadershipSlide();
        });

        teamModalInit();
        ourProcessInit();
        portfolioInit();
        $('.popover-prompt').popover();
    };

    return self;
};

$(document).ready(function () {

    _presentationManager = new mint.PresentationManager();
    _presentationManager.init();

    /****************************************************************************************
    Process Window Scroll Movements
    ***************************************************************************************/
    var lastScrollTop = 0;
    $(window).scroll(function (e) {
        var wintop = $(window).scrollTop();
        // Save which direction we are going to a global
        if (lastScrollTop >= wintop) scrollDirection = 'up';
        else scrollDirection = 'down';

        // Records last scroll top for acertaining direction
        lastScrollTop = wintop;

        // Prevent scrolling when scroller is not ready
        if (scrollLocked === true) preventScroll();

        evaluateProcessSlide();
    });

    function evaluateProcessSlide(){
        var processInView = $("#our-process").is(":within-viewport");

        if(processInView){
            animateProcessSlide();
        }
        else{
            hideProcessColumns();
        }
    }

    function hideProcessColumns(){
        if(mint.screens[currentScreen] != 'our-process'){
            if(!jQuery.support.opacity){
                return;
            }
            $('.process-column').css('opacity', 0);
        }
    }

    function animateProcessSlide(){
        if(!jQuery.support.opacity){
            return;
        }
        $('.process-column').each(function(index, element){
            var index = parseInt($(this).data('index'));
            $(this).delay(index * 1000).animate({ opacity: 1 }, 500);
        });
    }

    /****************************************************************************************
    Process Window Resizing - Delay reaction until resize complete
    ***************************************************************************************/

    var rtime = new Date(1, 1, 2000, 12, 00, 00);
    var timeout = false;
    var delta = 200;
    var _processTransitioning = false;
    $(window).resize(function () {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            //            sizeToWindow();
            performScroll(); // Reset Viewport
        }
    }

    /****************************************************************************************
    Button Click / Hover Actions
    ***************************************************************************************/

    function scrollToTop() {
        scrollReady = false;
        $("html,body").animate({ scrollTop: "0px" }, 2500,
            function () {
                scrollReady = true;
                currentScreen = 0;
            });
    }

    $('.downBtn').click(clickScroll);

    function clickScroll(e) {
        e.preventDefault();
        var slideNumber = $(this).data('slide');
        currentScreen = parseInt(slideNumber);
        performScroll();
    }

    $('#scrollToTop').click(function () {
        scrollReady = false;
        $("html,body").animate({ scrollTop: "0px" }, 2500,
            function () {
                scrollReady = true;
                currentScreen = 0;
            });
        return false;
    });

    if (jQuery.support.opacity) {

        $('.service').bind('inview', function (event, isVisible) {
            if (!isVisible) {
                $(this).css('opacity', 0);
                return;
            }
            var randomDelay = Math.random() * 600;
            $(this).delay(randomDelay).animate({ opacity: 1 }, 600);
        });

        $('div.cloud').each(function (index, element) {
            $(element).bind('inview', function (event, isVisible) {

                if (!isVisible) {
                    $(this).css('opacity', 0);
                    return;
                }
                $(this).delay(index * 500).animate({ opacity: 1 }, 600);
            });
        });
    }

    $('#clients #client-text').bind('inview', function (event, isVisible) {
        if (!isVisible) {
            $(this).animate({ height: '30px' }, 100);
            return;
        }
        $(this).delay(400).animate({ height: '81px' }, 500);
    });

    $('#portfolio #portfolio-text').bind('inview', function (event, isVisible) {
        if (!isVisible) {
            $(this).animate({ height: '30px' }, 100);
            return;
        }
        $(this).delay(400).animate({ height: '81px' }, 500);
    });

    $('.play-video').fancybox({
        'autoDimensions': false,
        minWidth: '70%',
        minHeight: '55%',
        openEffect: 'fade',
        'transitionIn': 'elastic',
        scrolling: 'no',
        'transitionOut': 'fade',
        beforeClose: function () { scrollLocked = false; },
        'afterShow': function () { scrollLocked = true; }
    });

    $('.portfolio-philanthropy-slider').touchSlider({
        duration: 350,
        mouseTouch: true,
        namespace: 'portfolio-philanthropy-slider',
        margin: 0
    });

    $('.portfolio-fulton-slider').touchSlider({
        duration: 350,
        mouseTouch: true,
        namespace: 'portfolio-fulton-slider',
        margin: 0
    });

    $('.portfolio-savisa-slider').touchSlider({
        duration: 350,
        mouseTouch: true,
        namespace: 'portfolio-savisa-slider',
        margin: 0
    });

    $('.portfolio-peterson-slider').touchSlider({
        duration: 350,
        mouseTouch: true,
        namespace: 'portfolio-peterson-slider',
        margin: 0
    });

    $('.portfolio-gateway-slider').touchSlider({
        duration: 350,
        mouseTouch: true,
        namespace: 'portfolio-gateway-slider',
        margin: 0
    });

    $('#scrollToTop').click(function(){
        scrollReady = false;
        $("html,body").animate({scrollTop:"0px"}, 2500,
            function(){
                scrollReady = true;
                currentScreen = 0;
            });
        return false;
    });

    // Ready to go
    $(window).load(function () {

        // Handle IE 6
        if (!$('html').hasClass('lt-ie7')) {
            // Ready for Scroll Handlers
            scrollReady = true;
            setupScrollHandler();
            setupKeyScrollHandler();
        }
    });

    scrollToTop();
});

/****************************************************************************************
 Scroll Snapping for mousewheel and Up/Down Key Presses
 ***************************************************************************************/
function setupScrollHandler() {
    $("body").bind("mousewheel", function (delta, aS, aQ, deltaY) {

        if(scrollLocked){
            return;
        }

        delta.preventDefault();
        if (deltaY > 0) {
            scrollPrev();
        } else {
            if (deltaY < 0) {
                scrollNext();
            }
        }
        return false;
    });
}
function scrollNext() {
    if( currentScreen < screens.length-1 && scrollReady == true ) {
        currentScreen++;
        performScroll();
    }
}
function scrollPrev() {
    if( currentScreen > 0 && scrollReady == true ) {
        currentScreen--;
        performScroll();
    }
}
function performScroll() {
    scrollReady = false;
    var screen = screens[currentScreen];    
    var newYPos = Math.ceil($('#'+screen).offset().top);
    $("html, body").animate(
        {scrollTop: newYPos },
        screenAnimationTime,
        'easeInOutExpo',
        function() { scrollReady = true;}
    );
}
function preventScroll() {
    var newYPos = Math.ceil($('#'+screens[currentScreen]).offset().top);
    $(window).scrollTop(newYPos);
}

// Binds Key Up / Key Down for Scrolling
function setupKeyScrollHandler() {
    $(document).bind("keyup", function (event) {
        if (event.keyCode == _presentationManager.keyCodes.up || event.keyCode == _presentationManager.keyCodes.down) {
            event.preventDefault();
            if(scrollLocked) return;
            if (event.keyCode == _presentationManager.keyCodes.down) {
                if (scrollReady == true) {
                    scrollNext();
                }
            } else {
                if (event.keyCode == _presentationManager.keyCodes.up) {
                    if (scrollReady == true) {
                        scrollPrev();
                    }
                }
            }
        }

        if($("#leadership").is(":within-viewport")){
            if(event.keyCode == _presentationManager.keyCodes.right){
                _presentationManager.goToNextLeadershipSlide();
            }
            else if(event.keyCode == _presentationManager.keyCodes.left){
                _presentationManager.goToPreviousLeadershipSlide();
            }
        }

        if($('#core-services-slider').is(":within-viewport")){
            switch(parseInt(event.keyCode)){
                case _presentationManager.keyCodes.right:
                    _presentationManager.goToNextServiceSlide();
                    break;
                case _presentationManager.keyCodes.left:
                    _presentationManager.goToPreviousServiceSlide();
                    break;
                case _presentationManager.keyCodes.c:
                case _presentationManager.keyCodes.d:
                case _presentationManager.keyCodes.e:
                case _presentationManager.keyCodes.s:
                    _presentationManager.showServiceSlide(parseInt(event.keyCode));
                    break;
            }
        }

        if($('#our-process').is(":within-viewport")){
            if($.inArray(parseInt(event.keyCode), [49, 50, 51, 52]) != -1){
                _presentationManager.showProcessColumn(parseInt(event.keyCode));
            }
        }

        if($("#team").is(":within-viewport")){
            _presentationManager.handleTeamSlideKeyCode(event.keyCode);
        }

        if($("#portfolio").is(":within-viewport")){
            _presentationManager.handlePortfolioSlideKeyCode(event.keyCode);
        }
    });

    $(document).bind("keydown", function (event) {
        if (event.keyCode == _presentationManager.keyCodes.up || event.keyCode == _presentationManager.keyCodes.down) {
            event.preventDefault();
        }
    })
}

