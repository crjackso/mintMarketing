var mint = {};

mint.screens = [
    "home",
    "leadership",
    "team",
    "target-segment",
    "generations-gap",
    "thank-you"
];

mint.screenCount = mint.screens.length;

$(document).ready(function () {

    set_slide_heights();

    $(window).bind('resize', set_slide_heights);

    $(window).bind('keydown', onKeyDown);

    skrollr.init({
        forceHeight: false,
        smoothScrolling: true,
        easing: {
            WTF: Math.random,
            inverted: function (p) {
                return 1 - p;
            }
        }
    });

    function onKeyDown(e) {
        var array = ['a', 's', 'd', 'f'];
        var code = String.fromCharCode(e.keyCode).toLowerCase();
        var isSpecialKey = $.inArray(code, array);

        if (isSpecialKey == -1) {
            return;
        }

        $(String.format('div[data-key="{0}"]', code)).click();

        if (code == 's') {
            setTimeout(
                function() {
                    $("a[href='#ryan']").click();
                },
                2000);
            
        } else {
            $.fancybox.close();
        }
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