/**
 * Parallax Scrolling Tutorial
 * For Smashing Magazine
 * July 2011
 *
 * Author: Richard Shepherd
 *            www.richardshepherd.com
 *            @richardshepherd
 */

// On your marks, get set...
$(document).ready(function () {

//    skrollr_init();

    $(".various").fancybox({
        maxWidth:800,
        maxHeight:600,
        fitToView:false,
        width:'70%',
        height:'70%',
        autoSize:false,
        closeClick:true,
        openEffect:'elastic',
        closeEffect:'elastic'
    });

    $('.nav-button').live('click', button_clicked);
    $('.green-button').live('click', button_clicked);

    $('#leadership-learn-more').live('click', on_gale_learn_more);
    $('#leadership-back').live('click', on_gale_back);

    mission_button_init();

//    skrollr.init({
//        forceHeight: false,
//        smoothScrolling: true,
//        easing:{
//            WTF:Math.random,
//            inverted:function (p) {
//                return 1 - p;
//            }
//        }
//    });

//    $('#team-transition').bind('inview', team_transition_in_view);
//    $('#leadership-transition').bind('inview', leadership_transition_in_view);
//    $('#leadership').bind('inview', leadership_in_view);
//    $('#leadership-bio').bind('inview', leadership_bio_in_view);
//    $('#mission-transition').bind('inview', mission_transition_in_view);

}); // document ready

function team_transition_in_view(event, visible){
    var gale_pic = $('#leadership-gale');

    if(visible === true)
        gale_pic.fadeOut(8000);
//        gale_pic.css('position', 'absolute');
}

function leadership_bio_in_view(event, visible) {
    var gale_pic = $('#leadership-gale');

    var already_in_view = gale_pic.css('display') == 'block';

    if (visible === true && !already_in_view)
        gale_pic.fadeIn(600);
}

function mission_transition_in_view(event, visible) {
    var gale_pic = $('#leadership-gale');

    if (visible === true)
        gale_pic.fadeOut(600);
}

function mission_button_init() {
    $(".hide-gale").click(function () {
//        $('#leadership-gale').fadeOut(600);
    });

    $('.show-gale').click(function () {
//        fade_in();
    });
}

function leadership_in_view(event, visible) {
    var gale_pic = $('#leadership-gale');

    var already_in_view = gale_pic.css('display') == 'block';

    if (!already_in_view && visible === true)
        fade_in();
}

function fade_in() {
    $('#leadership-gale').fadeIn(600);
}

function leadership_transition_in_view(event, visible) {

//    var show = false;
//    var elementId = event.currentTarget.id;
//    var asdf = event.delegateTarget.id;
//
//    if(elementId == 'leadership')
//        show = true;
//    if(elementId == 'leadership-bio')
//        show = true;

    var gale_pic = $('#leadership-gale');

//    var already_in_view = gale_pic.css('display') == 'block';

//    if(show && already_in_view)
//        return;

//    if (show) {
//        gale_pic.fadeIn(600);
//    } else {
//        gale_pic.fadeOut(600);
//    }

    if (visible === true)
        gale_pic.fadeOut(800);
//    else
//        gale_pic.fadeIn(800);
}

function on_gale_back() {
    $.scrollTo('#leadership', 800);
}

function on_gale_learn_more() {
    $('#leadership-bio').css('display', 'block');
    $('#leadership-gale')
        .css('position', 'fixed')
        .css('opacity', 1)
        .css('z-index', 1);
    $('#leadership-text')
        .css('position', 'fixed')
        .css('z-index', 1);
    $.scrollTo('#leadership-bio', 800);
}

function skrollr_init() {
    // Cache the Window object
    $window = $(window);

    // Cache the Y offset and the speed of each sprite
    $('[data-type]').each(function () {
        $(this).data('offsetY', parseInt($(this).attr('data-offsetY')));
        $(this).data('Xposition', $(this).attr('data-Xposition'));
        $(this).data('speed', $(this).attr('data-speed'));
    });

    // For each element that has a data-type attribute
    $('section[data-type="background"]').each(function () {

        // Store some variables based on where we are
        var $self = $(this),
            offsetCoords = $self.offset(),
            topOffset = offsetCoords.top;

        // When the window is scrolled...
        $(window).scroll(function () {

//            console.log($window.scrollTop());

            // If this section is in view
            if (($window.scrollTop() + $window.height()) > (topOffset) &&
                ( (topOffset + $self.height()) > $window.scrollTop() )) {

                // Scroll the background at var speed
                // the yPos is a negative value because we're scrolling it UP!
                var yPos = -($window.scrollTop() / $self.data('speed'));

                // If this element has a Y offset then add it on
                if ($self.data('offsetY')) {
                    yPos += $self.data('offsetY');
                }

                // Put together our final background position
                var coords = '50% ' + yPos + 'px';

                // Move the background
                $self.css({ backgroundPosition:coords });

                // Check for other sprites in this section
                $('[data-type="sprite"]', $self).each(function () {

                    // Cache the sprite
                    var $sprite = $(this);

                    // Use the same calculation to work out how far to scroll the sprite
                    var yPos = -($window.scrollTop() / $sprite.data('speed'));
                    var coords = $sprite.data('Xposition') + ' ' + (yPos + $sprite.data('offsetY')) + 'px';

                    $sprite.css({ backgroundPosition:coords });

                }); // sprites

                // Check for any Videos that need scrolling
                $('[data-type="video"]', $self).each(function () {

                    // Cache the video
                    var $video = $(this);

                    // There's some repetition going on here, so
                    // feel free to tidy this section up.
                    var yPos = -($window.scrollTop() / $video.data('speed'));
                    var coords = (yPos + $video.data('offsetY')) + 'px';

                    $video.css({ top:coords });

                }); // video

                $('[data-type="subymove"]', $self).each(function () {
                    // Cache the subdata
                    var $subdata = $(this);
                    // Use the same calculation to work out how far to scroll the subdata
                    var yPos = -($window.scrollTop() / $subdata.data('speed'));
                    var coords = $subdata.data('Xposition') + '% ' + (yPos + $subdata.data('offsetY')) + 'px';
                    $subdata.css({ backgroundPosition:coords });
                }); // subymove

                // Check for other xmove in this section
                $('div[data-type="subxmove"]', $self).each(function () {
                    // Cache the subdata
                    var $subdata = $(this);
                    // Use the same calculation to work out how far to scroll the subdata
                    var xPos = ($window.scrollTop() / $subdata.data('speed'));
                    var coords = (xPos + $subdata.data('Xposition')) + '% ' + ($subdata.data('offsetY')) + 'px';
                    $subdata.css({ backgroundPosition:coords });
                }); // subxmove

            }
            ; // in view

        }); // window scroll

    });	// each data-type
}

function button_clicked(element) {
    var nav_to = $(this).attr('href');

    $.scrollTo(nav_to, 1500);
}
