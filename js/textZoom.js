function loading() {
    $('#logo').stop().delay(150).fadeOut(150, function () {
        $('#ball').stop().delay(150).animate({
            width: 0,
            height: 0,
            marginTop: 0,
            marginLeft: 0,
        }, {
            duration: 250,
            easing: 'easeInOutExpo',
            complete: function () {
                if (url != '#/') {
                    var lUrl = url.split("/");
                    if (lUrl[1] == 'line') cscrf = true;
                    else if (url == '#/realizzazione-siti-web-milano/') {
                        _gaq.push(['_trackPageview', 'realizzazione-siti-web-milano/']);
                        location.hash = '/';
                    } else if (lUrl.length == 4) portfolio(url);
                }
                $('.bg_black:first').css('overflow-y', 'hidden');
                $('body').css('overflow', 'auto');
                $('#loading').stop().delay(150).fadeOut(500, function () {
                    $('#home').fadeIn(250, function () {
                        $('#home_nav_1').fadeIn(100, function () {
                            $('#home_nav_2').fadeIn(100, function () {
                                $('#home_nav_3').fadeIn(100, function () {
                                    $('#awwwards').delay(100).fadeIn(100);
                                    $('#awwwards a').attr('target', '_blank');
                                    $('#layout > header').show();
                                    var scale = 3;
                                    var counter = 0;
                                    $('#home_text').find('img').each(function () {
                                        var obj = homeArray[counter];
                                        $(this).css({
                                            'height': (obj.h / scale) + 'px',
                                            'width': (obj.w / scale) + 'px',
                                            'margin-top': (obj.mT / scale) + 'px',
                                            'margin-left': (obj.mL / scale) + 'px',
                                        });
                                        counter++;
                                    });
                                    var counter = 0;
                                    $('#mission_pensiero_text').find('img').each(function () {
                                        var obj = missionPensieroArray[counter];
                                        $(this).css({
                                            'height': (obj.h / scale) + 'px',
                                            'width': (obj.w / scale) + 'px',
                                            'margin-top': (obj.mT / scale) + 'px',
                                            'margin-left': (obj.mL / scale) + 'px',
                                        });
                                        counter++;
                                    });
                                    var counter = 0;
                                    $('#mission_gioco_text').find('img').each(function () {
                                        var obj = missionGiocoArray[counter];
                                        $(this).css({
                                            'height': (obj.h / scale) + 'px',
                                            'width': (obj.w / scale) + 'px',
                                            'margin-top': (obj.mT / scale) + 'px',
                                            'margin-left': (obj.mL / scale) + 'px',
                                        });
                                        counter++;
                                    });
                                    var counter = 0;
                                    $('#mission_soluzioni_text').find('img').each(function () {
                                        var obj = missionSoluzioniArray[counter];
                                        $(this).css({
                                            'height': (obj.h / scale) + 'px',
                                            'width': (obj.w / scale) + 'px',
                                            'margin-top': (obj.mT / scale) + 'px',
                                            'margin-left': (obj.mL / scale) + 'px',
                                        });
                                        counter++;
                                    });
                                    scale = 1;
                                    if ($(window).height() < 800 && $(window).height() > 400) {
                                        scale = (800 / $(window).height());
                                    } else if ($(window).height() <= 400) {
                                        scale = 2;
                                    }
                                    var timeDuration = 750;
                                    var timeOut = 75;
                                    var counter = 0;
                                    $('#home_text').find('img').each(function () {
                                        var obj = homeArray[counter];
                                        $(this).delay(timeOut * (1 + counter)).animate({
                                            opacity: 1,
                                            height: (obj.h / scale) + 'px',
                                            width: (obj.w / scale) + 'px',
                                            marginTop: (obj.mT / scale) + 'px',
                                            marginLeft: (obj.mL / scale) + 'px',
                                        }, {
                                            duration: timeDuration,
                                            easing: 'easeInOutExpo'
                                        });
                                        counter++;
                                    });
                                });
                            });
                        });
                    });
                });
            }
        });
    });
}

$(window).scroll(function () {
    if ($('#loading').is(':visible')) {
        $(scrollCheck).animate({
            scrollTop: 0
        }, 0);
    }
    var scrollTop = $(window).scrollTop();
    var windowHeight = $(window).height();
    var timeDuration = 750;
    var timeOut = 75;
    var op = 0.05;
    var home = $('#home').offset().top;
    var mission = $('#mission').offset().top;
    var missionPensiero = $('#mission_pensiero_text').offset().top;
    var missionGioco = $('#mission_gioco_text').offset().top;
    var missionSoluzioni = $('#mission_soluzioni_text').offset().top;
    var portfolio = $('#portfolio').offset().top;
    var contatti = $('#contatti').offset().top;
    if (!missionPensieroCheck && !missionGiocoCheck && !missionSoluzioniCheck && (scrollTop >= (portfolio - 100))) {
        $('#mission img').stop().animate({
            opacity: op
        }, 100);
    }
    if (scrollTop <= $('#home').height()) {
        if ($('#home_text').is(":hidden")) {
            $('#home_text').show();
        }
    } else {
        $('#home_text').hide();
    }
    if (!loadAnCheck && !debug) {
        if (missionPensieroCheck && scrollTop >= (missionPensiero - windowHeight / 2)) {
            var counter = 0;
            $('#mission_pensiero_text').find('img').each(function () {
                var obj = missionPensieroArray[counter];
                $(this).delay(timeOut * (1 + counter)).animate({
                    opacity: 1,
                    height: obj.h + 'px',
                    width: obj.w + 'px',
                    marginTop: obj.mT + 'px',
                    marginLeft: obj.mL + 'px',
                }, {
                    duration: timeDuration,
                    easing: 'easeInOutExpo'
                });
                counter++;
            });
            setTimeout(function () {
                missionPensieroCheck = false;
            }, (missionPensieroArray.length * timeOut) + timeDuration);
        }
        if (!missionPensieroCheck && scrollTop >= (missionPensiero - windowHeight / 2) && scrollTop <= (missionGioco + windowHeight / 2)) {
            $('#mission_pensiero_text').find('img').each(function () {
                if (scrollTop <= ($(this).offset().top - 80)) {
                    $(this).stop().animate({
                        opacity: 1
                    }, 250);
                } else {
                    $(this).stop().animate({
                        opacity: op
                    }, 100);
                }
            });
        }
        if (missionGiocoCheck && scrollTop >= (missionGioco - windowHeight / 2)) {
            var counter = 0;
            $('#mission_gioco_text').find('img').each(function () {
                var obj = missionGiocoArray[counter];
                $(this).delay(timeOut * (1 + counter)).animate({
                    opacity: 1,
                    height: obj.h + 'px',
                    width: obj.w + 'px',
                    marginTop: obj.mT + 'px',
                    marginLeft: obj.mL + 'px',
                }, {
                    duration: timeDuration,
                    easing: 'easeInOutExpo'
                });
                counter++;
            });
            setTimeout(function () {
                missionGiocoCheck = false;
            }, (missionGiocoArray.length * timeOut) + timeDuration);
        }
        if (!missionGiocoCheck && scrollTop >= (missionGioco - windowHeight / 2) && scrollTop <= (missionSoluzioni + windowHeight / 2)) {
            $('#mission_gioco_text').find('img').each(function () {
                if (scrollTop <= ($(this).offset().top - 80)) {
                    $(this).stop().animate({
                        opacity: 1
                    }, 250);
                } else {
                    $(this).stop().animate({
                        opacity: op
                    }, 100);
                }
            });
        }
        if (scrollTop >= (missionSoluzioni - windowHeight / 2) && $('#mission_soluzioni_text img:last-child').css('opacity') == 0) {
            var counter = 0;
            $('#mission_soluzioni_text').find('img').each(function () {
                var obj = missionSoluzioniArray[counter];
                $(this).delay(timeOut * (1 + counter)).animate({
                    opacity: 1,
                    height: obj.h + 'px',
                    width: obj.w + 'px',
                    marginTop: obj.mT + 'px',
                    marginLeft: obj.mL + 'px',
                }, {
                    duration: timeDuration,
                    easing: 'easeInOutExpo'
                });
                counter++;
            });
            setTimeout(function () {
                missionSoluzioniCheck = false;
            }, (missionSoluzioniArray.length * timeOut) + timeDuration);
        }
        if (!missionSoluzioniCheck && scrollTop >= (missionSoluzioni - windowHeight / 2) && scrollTop <= (portfolio + windowHeight / 2)) {
            $('#mission_soluzioni_text').find('img').each(function () {
                if (scrollTop <= ($(this).offset().top - 80)) {
                    $(this).stop().animate({
                        opacity: 1
                    }, 250);
                } else {
                    $(this).stop().animate({
                        opacity: op
                    }, 100);
                }
            });
        }
    }
    if (scrollTop >= (portfolio - windowHeight / 4) && scrollTop <= (portfolio + $('#portfolio').height() + windowHeight / 2)) {
        if (scrollTop <= ($('#portfolio h2').offset().top - 100)) {
            $('#portfolio h2').stop().fadeTo(350, 1);
        } else {
            $('#portfolio h2').stop().fadeTo(175, op);
        }
        var counterFade = 0;
        $('.box').each(function () {
            if (scrollTop <= ($(this).offset().top - 100)) {
                $(this).stop().delay(timeOut * (1 + counterFade)).fadeTo(350, 1);
                $(this).find('a').css('cursor', 'pointer');
            } else {
                $(this).stop().delay(timeOut * (1 + counterFade)).fadeTo(175, op);
                $(this).find('a').css('cursor', 'default');
            }
            counterFade++;
        });
    } else {
        $('#portfolio h2, .box').stop().fadeTo(175, op);
    }
    if (scrollTop > (contatti - windowHeight * 1.5)) {
        if ($('#contatti_text').is(":hidden")) {
            $('#contatti_text').fadeIn(100);
            resizeContatti();
        }
    } else {
        $('#contatti_text').hide();
    }
    if (cscrf) {
        if (scrollTop > 0 && scrollTop < portfolio) {
            $('#mission_line').css("background", "url(img/mission_line.png) center " + (scrollTop * -2.0) + "px repeat-y");
        }
    }
});