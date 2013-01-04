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

//    $("#leadership-learn-more").fancybox({
//        openEffect:'elastic',
//        fitToView: false,
//        width: '85%',
//        closeEffect: 'elastic'
//    });

//    $(".various2").fancybox({
//        maxWidth:800,
//        maxHeight:600,
//        fitToView:true,
//        width:'80%',
//        height:'80%',
//        autoSize:true,
//        closeClick:true,
//        openEffect:'elastic',
//        closeEffect:'elastic'
//    });

    $(".show-gale").fancybox({
        'autoDimensions'	: false,
        'width'         		: '80%',
        height: '95%',
        autoHeight: false,
        autoWidth: false,
        minWidth: '80%',
        minHeight: '95%',
        openEffect: 'elastic',
        'transitionIn'		: 'elastic',
        'transitionOut'		: 'fade'
    });

    $('.various').live('click', function(e){
        e.preventDefault();
        var id = $(this).attr('href').replace('#', '');
        var person = people[id];
        $("#flickrTemplate").tmpl(person).appendTo("#teamMemberPlaceholder");
    });

//    $(".various").fancybox({
//        ajax: {
//            data:
//        }

//        maxWidth:800,
//        maxHeight:800,
//        fitToView:true,
//        width:'70%',
//        height:'70%',
//        autoSize:false,
//        closeClick:true,
//        openEffect:'elastic',
//        closeEffect:'elastic'
//    });

    $('.nav-button').live('click', button_clicked);
    $('.green-button').live('click', button_clicked);

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
}); // document ready


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
