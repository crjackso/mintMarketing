
//(function(a){function p(a){if((new Date).getTime()<d+c)return;d=(new Date).getTime();var b=f.offset()!=null?f.offset().left:0,i=f.offset()!=null?f.offset().top:0,j=a.pageX-b,k=a.pageY-i;if(j<0||j>f.width()||k<0||k>f.height())return;if(g==true){var l=window.orientation?(window.orientation+180)%360/90:2,m=a.accelerationIncludingGravity,n=l%2==0?-m.x:m.y,o=l%2==0?m.y:m.x;j=l>=2?n:-n;k=l>=2?o:-o;j=(j+h)/2;k=(k+h)/2;if(j<0){j=0}else if(j>h){j=h}if(k<0){k=0}else if(k>h){k=h}}var p=j/(g==true?h:f.width()),q=k/(g==true?h:f.height()),r,l;for(l=e.length;l--;){r=e[l];newX=r.startX+r.inversionFactor*r.xRange*p;newY=r.startY+r.inversionFactor*r.yRange*q;if(r.background){r.obj.css("background-position",newX+"px "+newY+"px")}else{r.obj.css("left",newX).css("top",newY)}}}function o(b){if((new Date).getTime()<d+c)return;if(n()){var e=b.accelerationIncludingGravity,f=e.x,o=e.y;if(k.xArray.length>=5){k.xArray.shift()}if(k.yArray.length>=5){k.yArray.shift()}k.xArray.push(f);k.yArray.push(o);k.xMotion=Math.round((m(k.xArray)-l(k.xArray))*1e3)/1e3;k.yMotion=Math.round((m(k.yArray)-l(k.yArray))*1e3)/1e3;if(k.xMotion>1.5||k.yMotion>1.5){if(h!=10){h=10}}if(k.xMotion>i||k.yMotion>i){j++}else{j=0}if(j>=5){g=true;a(document).unbind("mousemove.plax");a(window).bind("devicemotion",p(b))}else{g=false;a(window).unbind("devicemotion");a(document).bind("mousemove.plax",function(a){p(a)})}}}function n(){return window.DeviceMotionEvent!=undefined}function m(a){return Math.max.apply({},a)}function l(a){return Math.min.apply({},a)}var b=25,c=1/b*1e3,d=(new Date).getTime(),e=[],f=a(window),g=false,h=1,i=.05,j=0,k={xArray:[0,0,0,0,0],yArray:[0,0,0,0,0],xMotion:0,yMotion:0};a.fn.plaxify=function(b){return this.each(function(){var c=-1;var d={xRange:a(this).data("xrange")||0,yRange:a(this).data("yrange")||0,invert:a(this).data("invert")||false,background:a(this).data("background")||false};for(var f=0;f<e.length;f++){if(this===e[f].obj.get(0)){c=f}}for(var g in b){if(d[g]==0){d[g]=b[g]}}d.inversionFactor=d.invert?-1:1;d.obj=a(this);if(d.background){pos=(d.obj.css("background-position")||"0px 0px").split(/ /);if(pos.length!=2){return}x=pos[0].match(/^((-?\d+)\s*px|0+\s*%|left)$/);y=pos[1].match(/^((-?\d+)\s*px|0+\s*%|top)$/);if(!x||!y){return}d.startX=x[2]||0;d.startY=y[2]||0}else{var h=d.obj.position();d.obj.css({top:h.top,left:h.left,right:"",bottom:""});d.startX=this.offsetLeft;d.startY=this.offsetTop}d.startX-=d.inversionFactor*Math.floor(d.xRange/2);d.startY-=d.inversionFactor*Math.floor(d.yRange/2);if(c>=0){e.splice(c,1,d)}else{e.push(d)}})};a.plax={enable:function(b){a(document).bind("mousemove.plax",function(c){if(b){f=b.activityTarget||a(window)}p(c)});if(n()){window.ondevicemotion=function(a){o(a)}}},disable:function(){a(document).unbind("mousemove.plax");window.ondevicemotion=undefined}};if(typeof ender!=="undefined"){a.ender(a.fn,true)}})(function(){return typeof jQuery!=="undefined"?jQuery:ender}());

//(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

$(document).ready(function() {

    /****************************************************************************************
     Process Window Scroll Movements
     ***************************************************************************************/
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();

        // Save which direction we are going to a global
        if( lastScrollTop >= wintop ) scrollDirection = 'up';
        else scrollDirection = 'down';

        // Records last scroll top for acertaining direction
        lastScrollTop = wintop;

        // Prevent scrolling when scroller is not ready
        if(scrollLocked) preventScroll();

        console.log($(window).scrollTop());
    });

    /****************************************************************************************
     Process Window Resizing - Delay reaction until resize complete
     ***************************************************************************************/

    var rtime = new Date(1, 1, 2000, 12,00,00);
    var timeout = false;
    var delta = 200;
    $(window).resize(function() {
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
    $('#startBtn').click(function(){
        $('#startBtn').addClass('offscreen');
        scrollReady = true;
        currentScreen = 0;
        scrollNext();
    });

    function scrollToTop() {
        scrollReady = false;
        $("html,body").animate({scrollTop:"0px"}, 2500,
            function(){
                scrollReady = true;
                currentScreen = 0;
            });
    }

    $('.downBtn').click(clickScroll);
    
    function clickScroll(e)
    {
        e.preventDefault();
        var slideNumber = $(this).data('slide');
        currentScreen = parseInt(slideNumber);
        performScroll();
    }

    $('#scrollToTop').click(function(){
        scrollReady = false;
        $("html,body").animate({scrollTop:"0px"}, 2500,
            function(){
                scrollReady = true;
                currentScreen = 0;
            });
        return false;
    });

    $('.service').bind('inview', function(event, isVisible) {
        if (!isVisible) {
            $(this).css('opacity', 0);
            return;
        }
        var randomDelay = Math.random() * 600;
        $(this).delay(randomDelay).animate({ opacity: 1 }, 600);
    });

    $('#clients #client-text').bind('inview', function(event, isVisible){
        if(!isVisible){
            $(this).animate({height: '30px' }, 100);
            return;
        }
        $(this).delay(400).animate({height: '81px'}, 500);
    });

    $('#portfolio #portfolio-text').bind('inview', function(event, isVisible){
        if(!isVisible){
            $(this).animate({height: '30px' }, 100);
            return;
        }
        $(this).delay(400).animate({height: '81px'}, 500);
    });

    $('img.boomer').bind('inview', function(event, isVisible){
        if(!isVisible){
            $(this).css('left', '1000px');
            return;
        }
        $(this).delay(100).animate({left: '0px'}, 400);
    });

    $('img.genY').bind('inview', function(event, isVisible){
        if(!isVisible){
            $(this).css('left', '1000px');
            return;
        }
        $(this).delay(300).animate({left: '0px'}, 500);
    });

    $('img.genX').bind('inview', function(event, isVisible){
        if(!isVisible){
            $(this).css('left', '500px');
            return;
        }
        $(this).delay(500).animate({left: '0px'}, 400);
    });

    $('img.genZ').bind('inview', function(event, isVisible){
        if(!isVisible){
            $(this).css('left', '1000px');
            return;
        }
        $(this).delay(700).animate({left: '0px'}, 400);
    });

    $('.play-video').fancybox({
        'autoDimensions': false,
//        autoHeight: false,
//        autoWidth: false,
        minWidth: '70%',
        minHeight: '65%',
        openEffect: 'fade',
        'transitionIn': 'elastic',
        scrolling: 'no',
        'transitionOut': 'fade',
        beforeClose: function(){ scrollLocked = false; },
        'afterShow': function() { scrollLocked = true; }
    });

    $('.various').live('click', function (e) {
        e.preventDefault();
        var id = $(this).data('person');
        var person = people[id];

        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);

        var context = {};
        context = $.extend(context, person);

        var html = template(context);
        $('#teamMemberPlaceholder').html(html);

        $(this).fancybox({
            minHeight:'70%',
            openEffect:'elastic',
            beforeClose: function(){ scrollLocked = false; },
            afterShow: function() { scrollLocked = true; }
        });
    });

    // Ready to go
    $(window).load(function () {

        // Handle IE 6
        if( !$('html').hasClass('lt-ie7') )
        {
            // Ready for Scroll Handlers
            scrollReady = true;
            setupScrollHandler();
            setupKeyScrollHandler();
        }
    });

    scrollToTop();
});



var currentScreen = 0;
var scrollReady = false;
var scrollLocked = false;
var scrollDirection = 'down';
var MIN_HEIGHT = 600;
var screenHeight = $(window).height() > MIN_HEIGHT ? $(window).height() : MIN_HEIGHT;
var documentWrapWidth = 1100;
var documentGutterWidth = (($(document).width() - documentWrapWidth) / 2);
var screenAnimationTime = 1000;
var screens = mint.screens;


/****************************************************************************************
 Scroll Snapping for mousewheel and Up/Down Key Presses
 ***************************************************************************************/
function setupScrollHandler() {
//    $("body").bind("mousewheel", function (delta, aS, aQ, deltaY) {
//        if(scrollLocked)
//            return;
//        delta.preventDefault();
//        if (deltaY > 0) {
//            scrollPrev();
//        } else {
//            if (deltaY < 0) {
//                scrollNext();
//            }
//        }
//        return false;
//    });
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
        if (event.keyCode == 40 || event.keyCode == 38) {
            event.preventDefault();
            if (event.keyCode == 40) {
                if (scrollReady == true) {
                    scrollNext();
                }
            } else {
                if (event.keyCode == 38) {
                    if (scrollReady == true) {
                        scrollPrev();
                    }
                }
            }
        }
    });
    $(document).bind("keydown", function (event) {
        if (event.keyCode == 40 || event.keyCode == 38 ) {
            event.preventDefault()
        }
    })
}
// Bind and unbind keys for form elements
function unbindKeys() {
    $(document).unbind("keyup");
    $(document).unbind("keydown");
}
$("input, textarea, select").live("focus", function () { unbindKeys(); });
$("input, textarea, select").live("blur", function () {setupKeyScrollHandler(); });


/***********************************************************
 Helper Functions
 **********************************************************/
$.fn.makeFancy = function() {

    var formSelect = $(this);
    var newId = $(this).attr('id') + "_fancy";

    var selectBoxContainer = $('<div id="'+newId+'">').addClass('fancySelect').html('<div class="selectBox"></div>');

    var dropDown = $('<ul>').addClass('dropDown');
    var selectBox = selectBoxContainer.find('.selectBox');

    formSelect.find('option').each(function(i){
        var option = $(this);
        if(i==formSelect.prop('selectedIndex')) selectBox.html(option.text());
        if(option.data('skip')) return true;
        var li = $('<li>',{ html:	option.text() });
        li.click(function(){
            selectBox.html(option.text());
            dropDown.trigger('hide');
            formSelect.val(option.val());
            return false;
        });
        dropDown.append(li);
    });

    selectBoxContainer.append(dropDown.hide());
    formSelect.hide().after(selectBoxContainer);

    dropDown.on('show',function(){
        if(dropDown.is(':animated')) return false;
        selectBox.addClass('expanded');
        dropDown.slideDown();
    }).on('hide',function(){
            if(dropDown.is(':animated')) return false;
            selectBox.removeClass('expanded');
            dropDown.slideUp();
        }).on('toggle',function(){
            if(selectBox.hasClass('expanded')) dropDown.trigger('hide');
            else dropDown.trigger('show');
        });

    selectBox.on('click', function(){
        dropDown.trigger('toggle');
        return false;
    });

    $(document).click(function(){
        dropDown.trigger('hide');
    });
}
