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
    "gm-campus-cruze",
    "gm-campus-spark",
    "gm-campus-sonic",
    "win-win",
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

    if (jQuery.support.opacity) {

        $('#gm-campus-cruze').bind('inview', function (event, isVisible) {
            if (!isVisible) {
                return;
            }
            $('#cruze-headlights').delay(1500).fadeIn(100, function() {
                $(this).fadeOut(400);
            });
        });

        $('#gm-campus-spark').bind('inview', function (event, isVisible) {
            if (!isVisible) {
                return;
            }
            $('#spark-headlights').delay(1500).fadeIn(100, function() {
                $(this).fadeOut(400);
            });
        });

        $('#gm-campus-sonic').bind('inview', function (event, isVisible) {
            if (!isVisible) {
                $('#sonic-map').css('top', '');
                return;
            }

            $('#sonic-headlights').delay(800).fadeIn(100, function() {
                $(this).fadeOut(400);
            });

//            $('.map').delay(1200).animate({
//                'top': '0'
//            }, 900);

            $('#sonic-cursor').delay(1500).stop()
                .css({ 'top': '10%', 'right': '-10%'})
                .animate({
                    top: '0%'
                    }, 200, function() {
                    $('#sonic-map-lit').show();
//                    $('#')
                });
        });
    }

    $("#teamJson").val(JSON.stringify(people));
});

function set_slide_heights() {
    var width = $(window).width();
    var height = $(window).height();
    var newHeight = parseInt(height) + 'px';
    $(".story").css('height', newHeight);
    
    var newPosition = width + 'px ' + height + 'px';
    $('.gm-slide').css('background-size', newPosition);
    $('.story').css('background-size', newPosition);

    $('.touchslider-item').css('width', width + 'px');
    $('.touchslider-item .inner').css('width', width + 'px');
    $('.touchslider-item .inner').height(height);
    $('.touchslider-viewport').height(height);


//    var ww = window.innerWidth;
//    var wh = window.innerHeight;
//    var aspect = Math.floor((ww / wh) * 100) / 100; // set to 2 decimal points
//    var landscape = aspect > 1 ? true : false;
//    var portrait = aspect < 1 ? true : false;
//    var orientation = (landscape == true && portrait == false) ? "Landscape" :(landscape == false && portrait == true) ? "Portrait" : "Square";

//    console.log(orientation + " " + aspect);

//    $('.story img').each(function () {
//        var image = $(this);
//        var originalWidth = image.width();
//        var newWidth = originalWidth * aspect;
//        image.css('width', newWidth);
//    });
}