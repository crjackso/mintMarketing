$(document).ready(function () {

    //    skrollr_init();

    set_slide_heights();

    init_local_scroll();

    $(".show-gale").fancybox({
        'autoDimensions': false,
        'width': '80%',
        height: '95%',
        autoHeight: false,
        autoWidth: false,
        minWidth: '80%',
        minHeight: '95%',
        openEffect: 'fade',
        'transitionIn': 'elastic',
        scrolling: 'no',
        'transitionOut': 'fade'
    });

    $('.various').fancybox({
        minHeight: '70%',
        minWidth: '50%',
        openEffect: 'fade',
        closeEffect: 'elastic'
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
            minHeight: '70%',
            openEffect: 'elastic'
        });
    });

//    $('.nav-button').live('click', navButtonClicked);
//    $('.green-button').live('click', navButtonClicked);
    $(window).bind('resize', set_slide_heights);

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

    $("#teamJson").val(JSON.stringify(people));

//    ieHack();
});

function init_local_scroll(){

    // Scroll initially if there's a hash (#something) in the url
    $.localScroll.hash({
        target: '#skrollr-body', // Could be a selector or a jQuery object too.
        queue:true,
        duration:1500
    });

    $.localScroll({
//        target: '#skrollr-body', // could be a selector or a jQuery object too.
        queue:true,
        duration:1000,
        hash:true,
        onBefore:function( e, anchor, $target ){
            // The 'this' is the settings object, can be modified
        },
        onAfter:function( anchor, settings ){
            // The 'this' contains the scrolled element (#content)
        }
    });
}

function ieHack() {
    var i;
    for (i in document.images) {
        if (document.images[i].src) {
            var imgSrc = document.images[i].src;
            if (imgSrc.substr(imgSrc.length - 4) === '.png' || imgSrc.substr(imgSrc.length - 4) === '.PNG') {
                document.images[i].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled='true',sizingMethod='crop',src='" + imgSrc + "')";
            }
        }
    }
}

function set_slide_heights() {
    var height = $(window).height();
    var newHeight = parseInt(height) + 'px';
    $(".story").css('height', newHeight);
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

function navButtonClicked(e) {
    var nav_to = $(this).attr('href');

    $.scrollTo(nav_to, 1500);
}
