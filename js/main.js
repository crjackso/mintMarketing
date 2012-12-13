var App = {};
(function ($) {
    
    App.init = function () {
        var app = this;
        var frame = $('#frame');
        var viewport = Modernizr.touch ? frame : $($.browser.mozilla || $.browser.msie ? 'html' : 'body');
        var listener = Modernizr.touch ? viewport : $(window);              
        var people = new this.People(null, null);
        var statements = new this.Statements(viewport, listener);
        $('a[href^="http"]').click(function (e) {
            e.preventDefault();
            window.open($(this).attr('href'));
        });
        if (!Modernizr.touch) {
            // var map = new this.Map(viewport);
            // var parallax = new this.Parallax(viewport, listener, $('[data-parallax]'));
            // var infiniteScroll = new this.InfiniteScroll(viewport, listener);
        }
    }
})(jQuery);;

(function ($) {
    var randomImage;
    var zIndex = 0;
    App.RandomImage = function () {
        randomImage = this;
        this.container = $('#flickr');
        this.frame = this.container.find('.frame');
        this.heading = this.frame.find('.caption h1');
        this.link = this.frame.find('.caption a');
        this.items = null;
        this.currentItem = null;
        this.link.click(function (e) {
            e.stopPropagation();
        });
        this.container.click(this.newRandomPicture).trigger('click');
    }
    App.RandomImage.prototype.showImage = function (img, title) {
        randomImage.container.removeClass('loading');
        img.siblings('img').hide();
        img.show();
        img.css('zIndex', zIndex++);
        randomImage.centerImage(img);
        randomImage.frame.css('zIndex', zIndex++);
        randomImage.heading.text(title);
    }
    App.RandomImage.prototype.changePicture = function () {
        var r = this.currentItem;
        while (this.currentItem == r) {
            this.currentItem = Math.floor(Math.random() * randomImage.items.length);
        }
        var image = randomImage.items[this.currentItem];
        var url = 'http://farm' + image.farm + '.static.flickr.com/' + image.server + '/' + image.id + '_' + image.secret + '_b.jpg';
        var img = null;
        randomImage.container.find('img').each(function () {
            if ($(this).attr('src') == url) {
                img = $(this);
            }
        });
        if (img === null) {
            img = $('<img/>', {
                src: url
            });
            randomImage.container.prepend(img);
            img.load(function () {
                randomImage.centerImage($(this));
                randomImage.showImage(img, image.title);
            });
        } else {
            randomImage.showImage(img, image.title);
        }
    }
    App.RandomImage.prototype.centerImage = function (img) {
        img.css({
            marginLeft: -img.width() / 2,
            marginTop: -img.height() / 2
        });
    }
    App.RandomImage.prototype.newRandomPicture = function () {
        randomImage.container.addClass('loading');
        if (randomImage.items == null) {
            $.ajax({
                url: 'http://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos&api_key=e62c17928bcb5d21b0a48737c9bc5011&user_id=59035628@N04&format=json',
                dataType: 'jsonp',
                jsonpCallback: 'jsonFlickrApi',
                success: function (response) {
                    randomImage.items = response.photos.photo;
                    randomImage.changePicture();
                }
            });
        } else {
            randomImage.changePicture();
        }
    }
})(jQuery);;
(function ($) {
    var infiniteScroll;
    App.InfiniteScroll = function (viewport, listener) {
        infiniteScroll = this;
        this.viewport = viewport;
        this.content = viewport.find('#content');
        this.scrollY = 0;
        this.flipPicture = $('#flip-picture');
        this.currentPosition = 'top';
        this.widthClass = '';
        listener.scroll(this.onScroll);
        $(window).resize(this.onResize).trigger('resize');
    }
    App.InfiniteScroll.prototype.updateClass = function () {
        infiniteScroll.flipPicture.attr('class', infiniteScroll.widthClass + ' ' + infiniteScroll.currentPosition);
    }
    App.InfiniteScroll.prototype.onResize = function () {
        var size = infiniteScroll.viewport.width() <= 1440 ? 'small' : 'big'
        var height = size == 'small' ? 2629 : 3652;
        infiniteScroll.flipPicture.css('height', height / 2 + $(window).height() / 2);
        infiniteScroll.widthClass = size == 'small' ? 'w1440' : 'w2000';
        infiniteScroll.updateClass();
    }
    App.InfiniteScroll.prototype.onScroll = function () {
        infiniteScroll.checkWrap();
        infiniteScroll.updateFlipPicture();
    }
    App.InfiniteScroll.prototype.updateFlipPicture = function () {
        if (infiniteScroll.viewport.scrollTop() < infiniteScroll.content.outerHeight() / 2) {
            var newPosition = 'top';
        } else {
            var newPosition = 'bottom';
        }
        if (newPosition != infiniteScroll.currentPosition) {
            infiniteScroll.currentPosition = newPosition;
            if (newPosition == 'top') {
                var top = 0;
            } else {
                var top = infiniteScroll.content.outerHeight() - infiniteScroll.flipPicture.height();
            }
            infiniteScroll.updateClass();
            infiniteScroll.flipPicture.css({
                top: top
            });
        }
        infiniteScroll.flipPicture.show();
    }
    App.InfiniteScroll.prototype.checkWrap = function () {
        var delta = infiniteScroll.viewport.scrollTop() - infiniteScroll.scrollY;
        var y = infiniteScroll.scrollY = infiniteScroll.viewport.scrollTop();
        if (Math.abs(delta) < 1000) {
            if (y < 5 && delta < 0) {
                infiniteScroll.goToBottom();
            }
            if (y > infiniteScroll.content.outerHeight() - $(window).height() - 5 && delta > 0) {
                infiniteScroll.goToTop();
            }
        }
    }
    App.InfiniteScroll.prototype.goToTop = function () {
        infiniteScroll.viewport.scrollTop(5);
    }
    App.InfiniteScroll.prototype.goToBottom = function () {
        infiniteScroll.viewport.scrollTop(infiniteScroll.content.outerHeight() - 5);
    }
})(jQuery);;
(function ($) {
    var parallax;
    App.Parallax = function (viewport, listener, items) {
        parallax = this;
        this.viewport = viewport;
        this.items = items;
        items.each(function () {
            var item = $(this);
            var spacer = $('<div />');
            spacer.css({
                width: item.outerWidth(),
                height: item.outerHeight(),
                marginTop: item.css('margin-top'),
                marginBottom: item.css('margin-bottom')
            });
            spacer.insertAfter(item);
            item.data('y', item.offset().top);
            item.css('position', 'fixed');
        });
        listener.scroll(this.update).trigger('scroll');
    }
    App.Parallax.prototype.update = function () {
        var scroll = parallax.viewport.scrollTop();
        parallax.items.each(function () {
            var item = $(this);
            var parallax = item.data('parallax');
            var y = item.data('y');
            var offset = (y - scroll) * parallax;
            item.css('top', offset);
        });
    }
})(jQuery);;
(function ($) {
    var people;
    var settings = {
        speed: 250,
        easing: 'easeOutExpo'
    };
    var zIndex = 3;
    App.People = function (sharing, navigation) {
        people = this;
        this.section = $('#people');
        this.people = $('#people .person');
        this.navigation = navigation;
        this.sharing = sharing;
        this.people.each(function () {
            var person = $(this);
            person.data('background', person.find('.background'))
            person.data('details', person.find('.details'));
        });
        if (Modernizr.touch) {
            this.people.click(function (e) {
                e.preventDefault();
                people.close($(this).siblings('.open'));
                people.open($(this));
            });
        } else {
            this.people.hover(function () {
                people.open($(this));
            }, function () {
                people.close($(this));
            });
        }
    }
    App.People.prototype.open = function (items) {
        people.setStyle(items, true);
    }
    App.People.prototype.close = function (items) {
        people.setStyle(items, false);
    }
    App.People.prototype.setStyle = function (items, open) {
        return items.each(function () {
            var person = $(this);
            if (open) {
                person.css('zIndex', zIndex++);
                person.addClass('open');
            } else {
                person.removeClass('open');
            }
            if (Modernizr.opacity) {
                person.data('details').stop().fadeTo(settings.speed / 2, open ? 1 : 0);
                person.stop().fadeTo(settings.speed, 1);
                person.siblings().stop().fadeTo(settings.speed, open ? .3 : 1);
            } else {
                person.data('details')[open ? 'show' : 'hide']();
            }
            if (Modernizr.csstransforms) {
                var size = open ? 340 : 170;
                person.data('background').stop().animate({
                    width: size,
                    height: size,
                    top: open ? (person.hasClass('top') ? -180 : -140) : 0
                }, settings.speed, settings.easing);
            }
        });
    }
    App.People.prototype.goToSharing = function (person) {
        people.navigation.changePage(people.sharing.container);
        setTimeout(function () {
            people.sharing.changeAccount(person.index() + 1, true);
        }, 850);
    }
})(jQuery);;
(function ($) {
    var statements;
    var settings = {
        duration: 9000,
        range: 750
    };
    App.Statements = function (viewport, listener) {
        statements = this;
        this.interval = null;
        this.index = 0;
        this.container = $('#home .statements');
        this.viewport = viewport;
        this.items = this.container.find('.statement');
        this.items.not(':first-child').hide();
        this.container.mouseenter(statements.stopInterval);
        this.container.mouseleave(statements.startInterval);
        this.startInterval();
        listener.scroll(this.onScroll).trigger('scroll');
    }
    App.Statements.prototype.startInterval = function () {
        if (statements.interval !== null) {
            clearInterval(statements.interval);
            statements.interval = null;
        }
        statements.interval = setInterval(statements.changeStatement, settings.duration)
    }
    App.Statements.prototype.stopInterval = function () {
        clearInterval(statements.interval);
    }
    App.Statements.prototype.changeStatement = function () {
        statements.index = ++statements.index % statements.items.length;
        if (Modernizr.opacity) {
            statements.items.eq(statements.index - 1).delay(300).fadeToggle(1100);
            statements.items.eq(statements.index).fadeToggle(1300);
        } else {
            statements.items.eq(statements.index - 1).slideUp(250, 'easeOutCirc', function () {
                statements.items.eq(statements.index).delay(300).slideDown(250, 'easeOutCirc');
            });
        }
    }
    App.Statements.prototype.onScroll = function () {
        var target = statements.container.parent();
        var scroll = statements.viewport.scrollTop();
        var offset = target.data('y') - settings.range;
        var opacity = Math.min(1, Math.max(0.3, (scroll - offset) / ((offset + settings.range) - offset)));
        if (Modernizr.opacity) {
            target.css('opacity', opacity);
        }
    }
})(jQuery);

$(document).ready(function(){
  App.init();
});