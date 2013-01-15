
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
    "generations-gap"
];

mint.screenCount = mint.screens.length;

$(document).ready(function () {

    //    skrollr_init();

    $(".touchslider").touchSlider({
        duration:350,
        mouseTouch:true
    });

    set_slide_heights();

//    init_screen_scroll();
//    init_sauc_code();

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

var shoeBrowserSetupComplete = false;
var documentGutterWidth = (($(document).width() - documentWrapWidth) / 2);
var documentWrapWidth = 1100;
var colorBrowserMenuLeftOffset = 0; //documentGutterWidth + ((documentWrapWidth-$('#chooser_menu').width())/2);
var colorBrowserCurrentItem = 1;
var colorBrowserMenuItemWidth = 0;
var shoeBrowserCount = 6;
var shoeBrowserGender = 'm';
var mens_bg_colors = new Array('#ba2c2c','#395bae','#afcf3b','#6a6a6a','#dd7d04','#e2cb04' );
var womens_bg_colors = new Array('#b93457','#2c92cc','#ca4b4f','#7e5193','#b93457','#e2cb04');

var mens_urls = new Array(
    "http://www.saucony.com/store/SiteController/saucony/productdetails?stockNumber=20157-2&showDefaultOption=true&skuId=***4********20157-2*M080&productId=4-109350&searched=true&CID=LP-Kinvara3",
    "http://www.saucony.com/store/SiteController/saucony/productdetails?stockNumber=20157-1&showDefaultOption=true&skuId=***4********20157-1*M085&productId=4-109350&searched=true&CID=LP-Kinvara3",
    "http://www.saucony.com/store/SiteController/saucony/productdetails?stockNumber=20157-4&showDefaultOption=true&skuId=***4********20157-4*M090&productId=4-109350&searched=true&CID=LP-Kinvara3",
    "http://www.saucony.com/store/SiteController/saucony/productdetails?stockNumber=20157-3&showDefaultOption=true&skuId=***4********20157-3*M075&productId=4-109350&searched=true&CID=LP-Kinvara3",
    "http://www.saucony.com/store/SiteController/saucony/productdetails?stockNumber=20157-8&showDefaultOption=true&skuId=***4********20157-8*M095&productId=4-109350&searched=true&CID=LP-Kinvara3",
    "http://www.saucony.com/store/SiteController/saucony/productdetails?stockNumber=20157-7&showDefaultOption=true&skuId=***4********20157-7*M095&productId=4-109350&searched=true&CID=LP-Kinvara3");

var womens_urls = new Array(
    "http://www.saucony.com/store/SiteController/saucony/productdetails?stockNumber=10157-1&showDefaultOption=true&skuId=***4********10157-1*M050&productId=4-109360&searched=true&CID=LP-Kinvara3",
    "http://www.saucony.com/store/SiteController/saucony/productdetails?stockNumber=10157-3&showDefaultOption=true&skuId=***4********10157-3*M080&productId=4-109360&searched=true&CID=LP-Kinvara3",
    "http://www.saucony.com/store/SiteController/saucony/productdetails?stockNumber=10157-4&showDefaultOption=true&skuId=***4********10157-4*M060&productId=4-109360&searched=true&CID=LP-Kinvara3",
    "http://www.saucony.com/store/SiteController/saucony/productdetails?stockNumber=10157-5&showDefaultOption=true&skuId=***4********10157-5*M065&productId=4-109360&searched=true&CID=LP-Kinvara3",
    "http://www.saucony.com/store/SiteController/saucony/productdetails?stockNumber=10157-2&showDefaultOption=true&skuId=***4********10157-2*M060&productId=4-109360&searched=true&CID=LP-Kinvara3",
    "http://www.saucony.com/store/SiteController/saucony/productdetails?stockNumber=10157-6&showDefaultOption=true&skuId=***4********10157-6*M070&productId=4-109360&searched=true&CID=LP-Kinvara3");

function init_sauc_code(){
    $('#shoeScrollLeft').on('click', function(evt){
        colorBrowserCurrentItem--;
        if(colorBrowserCurrentItem < 1) colorBrowserCurrentItem = shoeBrowserCount;
        scroll_shoeBrowser();
    });

    $('#shoeScrollRight').on('click', function(evt){
        colorBrowserCurrentItem++;
        if(colorBrowserCurrentItem > shoeBrowserCount) colorBrowserCurrentItem = 1;
        scroll_shoeBrowser();
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
    var width = $(window).width();
    var height = $(window).height();
    var newHeight = parseInt(height) + 'px';
    $(".story").css('height', newHeight);


    // Shoe Browser Sizing
    $('#scrollWrap').width($(window).width());
    $('#zebra_stripe').width($(window).width());

    $('.touchslider-item img').css('width', width + 'px');
    $('.touchslider-item img').height(height);
    $('.touchslider-viewport').height(height - 20);
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

function init_screen_scroll(){
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();
        var cushion = 7; // Amount to cusion for browser sizing weirdness


        // Save which direction we are going to a global
        if( lastScrollTop >= wintop ) scrollDirection = 'up';
        else scrollDirection = 'down';

        //Shoe Browser
        if(scrollDirection == 'down'	&& wintop >= winheight*6			&& lastScrollTop < winheight*6)				setup_shoeBrowser();
        if(scrollDirection == 'down'	&& wintop >= winheight*6+cushion	&& lastScrollTop < winheight*6+cushion)		reset_shoeBrowser();
        if(scrollDirection == 'up'		&& wintop <= winheight*6+cushion	&& lastScrollTop > winheight*6+cushion)		setup_shoeBrowser();
        if(scrollDirection == 'up'		&& wintop < winheight*6				&& lastScrollTop >= winheight*6)			reset_shoeBrowser();

        // Records last scroll top for acertaining direction
        lastScrollTop = wintop;
    });
}

function setup_shoeBrowser()
{
    if( !shoeBrowserSetupComplete ) {
        $('#genderNav').animate({'left':(documentGutterWidth+50)+"px"}, 250 );
        scroll_shoeBrowser();

        $('#zebra_stripe').animate({'right':"0px"}, 350, function() {
            $('#shoeBrowser .scrollLeft').animate({'left':'0px'}, 250 );
            $('#shoeBrowser .scrollRight').animate({'right':'0px'}, 250 );

        });

        // Set Shop Now Link
        $('p#shopNowLink').html('<a href="'+mens_urls[0]+'" target="_blank">SHOP NOW</a>');

        shoeBrowserSetupComplete = true;
    }
}
function reset_shoeBrowser(){}

function scroll_shoeBrowser() {
    animateSelector();
    $('#shoe_scroller div.shoe_container').addClass('hidden');

    $('#'+(shoeBrowserGender=='m'?'men':'women')+'-scroll-'+colorBrowserCurrentItem).removeClass('hidden');

    $('#shoe_display').stop().animate({'right':$(window).width()+"px"}, 500, function() {
        $('#shoe_display div.shoe_container').addClass('hidden');
        $('#'+(shoeBrowserGender=='m'?'men':'women')+'-disp-'+colorBrowserCurrentItem).removeClass('hidden');
        $('#shoe_display').css('display', 'block').css('right',(documentGutterWidth+50)+"px");
        $('#shoe_scroller').css('display','none');
    });

    // Set Shop Now Link
    var shopURL = shoeBrowserGender=='m' ? mens_urls[colorBrowserCurrentItem-1] : womens_urls[colorBrowserCurrentItem-1];
    if( shopURL.length > 0 ) $('p#shopNowLink').html('<a href="'+shopURL+'" target="_blank">SHOP NOW</a>');
    else $('p#shopNowLink').html('Available 7/1');

    $('#shoe_scroller').css('right', ($('#shoe_scroller').width()*-1) + "px" );
    $('#shoe_scroller').stop().css('display', 'block').animate({'right':(documentGutterWidth+50)+"px"}, 500);

    var newColor = (shoeBrowserGender=='m' ? mens_bg_colors[colorBrowserCurrentItem-1]:womens_bg_colors[colorBrowserCurrentItem-1]);
    $('#zebra_stripe').css('background-color',newColor);
    $('#zebra_stripe .color_b').fadeOut('fast', function(){
        $('#zebra_stripe .color_b').css('background-color',newColor).show();
    });
}

/***********************************************************
 Animates "selected" indicator for Shoe Color Browser
 **********************************************************/
function animateSelector() {
    oldLeft = parseInt($('#chooser_selected').css('left'));
    newLeft = colorBrowserMenuLeftOffset + ((colorBrowserCurrentItem - 1) * colorBrowserMenuItemWidth);
    speed = Math.abs(newLeft - oldLeft) / colorBrowserMenuItemWidth;
    // tweaked as per tom's request - ss
    $('#chooser_selected').animate({ left:newLeft + "px" }, 200 * speed);
}