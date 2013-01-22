var mint = {};

mint.screens = [
    "home",
    "who-we-are",
    "mission",
    "leadership",
    "team",
    "core-services",
    "core-services-slider",
    "core-services-roundup",
    "our-process",
    "generations-gap",
    "clients",
    "portfolio",
    "video",
    "our-goal",
    "target-segment",
    "excitement",
    "gm-campus-fun",
    "gm-campus-cruze",
    "gm-campus-spark",
    "gm-campus-sonic",
    "win-win",
    "thank-you"
];

mint.screenCount = mint.screens.length;

$(document).ready(function () {

    $(".touchslider").touchSlider({
        duration:350,
        mouseTouch:true
    });

    set_slide_heights();

    $(window).bind('resize', set_slide_heights);

    skrollr.init({
        forceHeight:false,
        smoothScrolling:true,
        easing:{
            WTF:Math.random,
            inverted:function (p) {
                return 1 - p;
            }
        }
    });

    $("#teamJson").val(JSON.stringify(people));
});

function set_slide_heights() {
    var width = $(window).width();
    var height = $(window).height();
    var newHeight = parseInt(height) + 'px';
    $(".story").css('height', newHeight);
    
    var newPosition = width + 'px ' + height + 'px';
    $('.gm-slide').css('background-size', newPosition);

    $('.touchslider-item .inner').css('width', width + 'px');
    $('.touchslider-item .inner').height(height);
    $('.touchslider-viewport').height(height);
}