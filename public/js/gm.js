var mint = {};

mint.screens = [
    "home",
    "who-we-are",
    "mission",
    "leadership",
    "team",
    "core-services",
    "core-services-roundup",
    "core-services-slider",
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

    window.audioPlayed = false;
    window.sonicHandled = false;
    set_slide_heights();

    $(window).bind('resize', set_slide_heights);
    $(window).scroll(function(){
       handleAnimations();
    });

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

        $('#gm-campus-spark').bind('inview', function (event, isVisible) {
            if (!isVisible) {
                return;
            }
            $('#spark-headlights').delay(1500).fadeIn(100, function() {
                $(this).fadeOut(400);
            });
        });
    }

    $('#excitement').bind('inview', function (event, isVisible) {
        if (isVisible && window.audioPlayed === false) {
            var audioControl = document.getElementById("crowd");
            audioControl.play();
            window.audioPlayed = true;
        }
    });

    function handleAnimations(){
        handleSonicAnimations();
        handleCruzeAnimations();
    }

    function handleCruzeAnimations(){
        var inView = $("#gm-campus-cruze").is(":within-viewport");

        if(!inView){
            return;
        }

        $('#cruze-headlights').delay(1500).fadeIn(100, function() {
            $(this).fadeOut(400);
        });

    }

    function handleSonicAnimations(){
        var inView = $("#gm-campus-sonic").is(":within-viewport");

        if(inView){
            $('#sonic-headlights').delay(800).fadeIn(100, function() {
                $(this).fadeOut(400);
            });
        }

        if(window.sonicHandled === true){
            return;
        }

        if(inView === false || !jQuery.support.opacity){
            $('#sonic-map-lit').hide();
            $('#sonic-map').css('top', '');
            $('#sonic-calendar').css('top', '-30%');
            $('#sonic-cursor').css({top: '10%', right: '-20%'});
            return;
        }
        window.sonicHandled = true;

        $('#sonic-cursor').delay(2500)
            .animate({
                top: '-3%',
                right: '20%'
            }, 1000, function() {
                $('#sonic-map-lit').show();
                $('#sonic-calendar').animate({
                    top: 0
                }, 1000);
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
    $('.story').css('background-size', newPosition);

    $('.touchslider-item').css('width', width + 'px');
    $('.touchslider-item .inner').css('width', width + 'px');
    $('.touchslider-item .inner').height(height);
    $('.touchslider-viewport').height(height);
    $('.full-height').height(height);
    $('.full-width').css('width', width + 'px');
    $('.leadership-slider').css('width', width + 'px');
}