jQuery(document).ready(function () {
    "use strict";

    var subOpen = 0,
        activeSubIndex = 0,
        keyboardPlace = 0,
        eq = 0,
        inView = 0,
        activeSlide = $('#title-page'),
        $window = $(window),
        $body = $('body'),
        $scroll = ($.browser.mozilla || $.browser.msie) ? $('html') : $body,
        $slides = $("#scrollr-body .page"),
        staticPos = 0,
        destinations = [ // Startposition of each "page"
            0,
            1000,
            2000,
            3000,
            5520,
            6520,
            7520,
            9660,
            10660,
            11660,
            12660,
            13660,
            15000
        ],
        destinationslength = destinations.length,
        leftOver = $window.height() - 1000,
        bodyHeight = destinations[12] + leftOver,
        isIpad = (function () {
            return $("#mobileonly").css("visibility") === "visible";
        }());

    console.log("slides count: " + $slides.size());
    /**
     *  Window resize
     */
    $window.bind('resize', function () {
        setBodyHeight();
    });

    function setBodyHeight() {
        leftOver = $window.height() - 1000;

        if ((bodyHeight + leftOver) > 1000) {
            $body.height(bodyHeight + leftOver);
        }
    }

    /**
     *  Window scroll
     */
    function animateMain(e) {
        var scrollTop = $(e.target).scrollTop(),
            height = null,
            margintop = null,
            x = null;

        if (isIpad) {
            return;
        } // Don't do this on pads.

        if (subOpen === 1) {
            $scroll.css({
                scrollTop: '1000px'
            });

            return;
            e.preventDefault();
        }

        for (x = -1; x < destinationslength; ++x) {
            if (scrollTop >= (destinations[x] + 1) && scrollTop <= destinations[(x + 1)]) {
                eq = x;
                activeSlide = $slides.eq(x);
                break;
            }
        }

        $(activeSlide).stop().css({
            'margin-top': (-scrollTop + destinations[eq]) + 'px'
        });

//        $slides.eq(eq + 1).css({
//            'margin-top': '0px'
//        });

//        $slides.slice(0, eq).each(function (i) {
//            $(this).css('margin-top', -(destinations[i + 1] - destinations[i]) + 'px');
//        });
//
//        height = $(activeSlide).height();
//        margintop = $(activeSlide).css('marginTop').replace('px', '');

//        if ((height - Math.abs(margintop)) < 500) {
//            inView = eq + 1;
//        }
//
//        $slides.slice(eq + 1, 12).hide();
//        $slides.eq(eq + 1).show();
    }

    $window.bind('scroll', function (e) {
        animateMain(e);
    });

    /**
     *  Sub page scroll
     */
    function animateSub(e, index) {
        var scrollTop = $window.scrollTop();

        $slides.eq(activeSubIndex).css({
            'margin-top': -scrollTop + 'px'
        });
    }

    function showSub(e) {
        if (isIpad) {
            e.preventDefault();
            return;
        }

        activeSubIndex = $slides.index($(this).parents('article'));

        $scroll.stop().animate({
            scrollTop: destinations[activeSubIndex]
        }, 200, 'easeOutQuint', function () {
            subOpen = 1;

            staticPos = destinations[activeSubIndex];
            bodyHeight = 864;

            $window.unbind('scroll').bind('scroll', function (e) {
                animateSub(e);
            });

            $body.height(bodyHeight);
            $window.scrollTop(0);

            $slides.eq(activeSubIndex).find(".sub-container:eq(0)").addClass("activesub").stop().animate({
                left: '0%'
            }, 600, 'easeInOutQuint', function () {});
        });

        e.preventDefault();
    }

    /**
     *  Open sub pages
     */
    $("a.to-sub").click(showSub);
    $("img.to-sub").click(showSub);

    /**
     *  Close subpages
     */
    $('a.close-sub').bind('click', function (e) {
        subOpen = 0;
        var that = $(this);

        that.parents(".sub-container").removeClass("activesub");

        $scroll.stop().animate({
            scrollTop: 0
        }, 200, 'easeOutQuint', function () {

            that.parents('.sub-container').stop().animate({
                left: '100%'
            }, 450, 'easeInOutQuint', function () {

                bodyHeight = destinations[11];
                $body.height(bodyHeight + leftOver);

                $window.scrollTop(staticPos);

                $("#toc").stop().fadeIn(300); // Show TOC

                $window.unbind('scroll');
                $window.bind('scroll', function (e) {

                    animateMain(e);

                });

            });
        });

        e.preventDefault();

    });

    /**
     *  Navigation sub pages
     */
    $("a.next:not('.to-sub')").bind('click', function (e) {
        var that = $(this);

        that.parents(".sub-container").removeClass("activesub").next().addClass("activesub");

        $scroll.stop().animate({
            scrollTop: 0
        }, 200, 'easeOutQuint', function () {
            that.parents(".sub-container").next().stop().animate({
                left: '0%'
            }, 600, 'easeInOutQuint', function () {});
        });

        e.preventDefault();
    });

    /**
     *  To previous
     */
    $("a.prev:not('.close-sub')").bind('click', function (e) {
        var that = $(e.target);

        that.parents(".sub-container").removeClass("activesub").prev().addClass("activesub");

        $scroll.stop().animate({
            scrollTop: 0
        }, 200, 'easeOutQuint', function () {
            that.parents(".sub-container").stop().animate({
                left: '100%'
            }, 600, 'easeInOutQuint', function () {});
        });

        e.preventDefault();
    });

    /**
     *  Close all sub pages
     */
    $("a.close-all").bind('click', function (e) {
        var that = $(e.target);
        $(".activesub").removeClass("activesub");

        that.parents(".page").find(".sub-page:not(:eq(0))").animate({
            left: '100%'
        }, 450, 'easeOutQuart', function () {});

        $("#leadership .sub-page").eq(0).find("a.close-sub").click();

        e.preventDefault();
    });

    /**
     * Table of content
     */
    $("#flerp").bind('click', function (e) {
        if ($("#toc").is(".closed")) {
            $("#toc").animate({
                marginTop: '0px'
            }, 450, 'easeOutQuart', function () {
                $(this).removeClass("closed");
            });
        } else {
            $("#toc").animate({
                marginTop: '-500px'
            }, 450, 'easeOutQuart', function () {
                $(this).addClass("closed");
            });
        }

        e.preventDefault();
    });

    $("#toc a:not('#flerp, .outgoing')").bind('click', function (e) {
        var clickedIndex = $("#toc a:not('#flerp')").index(this);

        $("#toc").animate({
            marginTop: '-500px'
        }, 450, 'easeOutQuart', function () {
            $(this).addClass("closed");

            scrollTo(clickedIndex);
        });

        e.preventDefault();
    });

    /**
     *  Keyboard navigation
     */
    $(document).bind('keydown', onKeydown);

    function onKeydown(e) {
        var key = e.charCode ? e.charCode : e.keyCode ? e.keyCode : 0;

        switch (key) {
            case 38: // Up
                keyboardPlace--;

                if (keyboardPlace < 0) {
                    keyboardPlace = 0;
                }
                moveOnKey('up');
                e.preventDefault();

                break;

            case 40: // Down
                keyboardPlace++;

                if (keyboardPlace >= destinations.length - 1) {
                    keyboardPlace = destinations.length - 1
                }
                moveOnKey('down');
                e.preventDefault();

                break;

            case 39: // Right

                if ($slides.eq(inView).has('.sub-container').length >= 1 && subOpen === 0) {
                    $('.page').eq(inView).find('a.to-sub').click();
                } else {
                    $slides.eq(inView).find(".activesub a.next").click();
                }
                e.preventDefault();

                break;

            case 37: // Left

                if (subOpen === 1) {
                    $slides.eq(inView).find(".activesub a.prev").click();
                }
                e.preventDefault();

                break;

            case 27: // ESC
                $slides.eq(inView).find(".activesub a.close-all").click();
                e.preventDefault();

                break;
        }
    }

    function moveOnKey($direction) {
        if ($direction === 'down') {
            scrollTo(keyboardPlace);
        }

        if ($direction === 'up') {
            scrollTo(keyboardPlace);
        }
    }

    function scrollTo(index) {
        if (index == 3) {
            $scroll.stop().animate({
                scrollTop: (destinations[index] + 750) + 'px'
            }, Math.abs($window.scrollTop() - destinations[index] - 750) * 0.6, 'easeInOutQuint');
        } else {
            $scroll.stop().animate({
                scrollTop: destinations[index] + 'px'
            }, Math.abs($window.scrollTop() - destinations[index]) * 0.6, 'easeInOutQuint');
        }
    }

    setBodyHeight();
});