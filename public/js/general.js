var mint = {};

mint.screens = [
    "home",
    "who-we-are",
    "leadership",
    "team",
    "mission",
    "our-goal",
    "core-services",
    "core-services-roundup",
    "core-services-slider",
    "generations-gap",
    "clients",
    "portfolio",
    "video",
    "our-process",
    "thank-you"
];

mint.screenCount = mint.screens.length;

$(document).ready(function () {

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
    $('.story').css('background-size', newPosition);

    $('.touchslider-item').css('width', width + 'px');
    $('.touchslider-item .inner').css('width', width + 'px');
    $('.touchslider-item .inner').height(height);
    $('.touchslider-viewport').height(height);
    $('.full-height').height(height);
    $('.full-width').css('width', width + 'px');
    $('.leadership-slider').css('width', width + 'px');
}