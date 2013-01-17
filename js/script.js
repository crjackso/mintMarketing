var mint = {};

mint.screens = [
    "my-first",
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
    "our-goal"
];

mint.screenCount = mint.screens.length;

$(document).ready(function () {

    $(".touchslider").touchSlider({
        duration:350,
        mouseTouch:true
    });

    set_slide_heights();

    $(".show-gale").fancybox({
        'autoDimensions':false,
        'width':'80%',
        height:'95%',
        autoHeight:false,
        autoWidth:false,
        minWidth:'80%',
        minHeight:'95%',
        openEffect:'fade',
        'transitionIn':'elastic',
        scrolling:'no',
        'transitionOut':'fade'
    });

    $('.various').fancybox({
        minHeight:'70%',
        minWidth:'50%',
        openEffect:'fade',
        closeEffect:'elastic'
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
            openEffect:'elastic'
        });
    });

    $(window).bind('resize', set_slide_heights);

//    skrollr.init({
//        forceHeight:false,
//        smoothScrolling:true,
//        easing:{
//            WTF:Math.random,
//            inverted:function (p) {
//                return 1 - p;
//            }
//        }
//    });

    $("#teamJson").val(JSON.stringify(people));
});

function set_slide_heights() {
    var width = $(window).width();
    var height = $(window).height();
    var newHeight = parseInt(height) + 'px';
    $(".story").css('height', newHeight);

    $('.touchslider-item img').css('width', width + 'px');
    $('.touchslider-item img').height(height);
    $('.touchslider-viewport').height(height - 20);
}