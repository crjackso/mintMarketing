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
    $('.story').css('background-size', newPosition);

    $('.touchslider-item .inner').css('width', width + 'px');
    $('.touchslider-item .inner').height(height);
    $('.touchslider-viewport').height(height);



    var ww = window.innerWidth;
    var wh = window.innerHeight;
    var aspect = Math.floor((ww / wh) * 100) / 100; // set to 2 decimal points
    var landscape = aspect > 1 ? true : false;
    var portrait = aspect < 1 ? true : false;
    var orientation = (landscape == true && portrait == false) ? "Landscape" :(landscape == false && portrait == true) ? "Portrait" : "Square";

    console.log(orientation + " " + aspect);

//    $('.story img').each(function () {
//        var image = $(this);
//        var originalWidth = image.width();
//        var newWidth = originalWidth * aspect;
//        image.css('width', newWidth);
//    });
}