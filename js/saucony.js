// ColorBox v1.3.19 - jQuery lightbox plugin
// (c) 2011 Jack Moore - jacklmoore.com
// License: http://www.opensource.org/licenses/mit-license.php
//(function(a,b,c){function Z(c,d,e){var g=b.createElement(c);return d&&(g.id=f+d),e&&(g.style.cssText=e),a(g)}function $(a){var b=y.length,c=(Q+a)%b;return c<0?b+c:c}function _(a,b){return Math.round((/%/.test(a)?(b==="x"?z.width():z.height())/100:1)*parseInt(a,10))}function ba(a){return K.photo||/\.(gif|png|jpe?g|bmp|ico)((#|\?).*)?$/i.test(a)}function bb(){var b;K=a.extend({},a.data(P,e));for(b in K)a.isFunction(K[b])&&b.slice(0,2)!=="on"&&(K[b]=K[b].call(P));K.rel=K.rel||P.rel||"nofollow",K.href=K.href||a(P).attr("href"),K.title=K.title||P.title,typeof K.href=="string"&&(K.href=a.trim(K.href))}function bc(b,c){a.event.trigger(b),c&&c.call(P)}function bd(){var a,b=f+"Slideshow_",c="click."+f,d,e,g;K.slideshow&&y[1]?(d=function(){F.text(K.slideshowStop).unbind(c).bind(j,function(){if(K.loop||y[Q+1])a=setTimeout(W.next,K.slideshowSpeed)}).bind(i,function(){clearTimeout(a)}).one(c+" "+k,e),r.removeClass(b+"off").addClass(b+"on"),a=setTimeout(W.next,K.slideshowSpeed)},e=function(){clearTimeout(a),F.text(K.slideshowStart).unbind([j,i,k,c].join(" ")).one(c,function(){W.next(),d()}),r.removeClass(b+"on").addClass(b+"off")},K.slideshowAuto?d():e()):r.removeClass(b+"off "+b+"on")}function be(b){U||(P=b,bb(),y=a(P),Q=0,K.rel!=="nofollow"&&(y=a("."+g).filter(function(){var b=a.data(this,e).rel||this.rel;return b===K.rel}),Q=y.index(P),Q===-1&&(y=y.add(P),Q=y.length-1)),S||(S=T=!0,r.show(),K.returnFocus&&a(P).blur().one(l,function(){a(this).focus()}),q.css({opacity:+K.opacity,cursor:K.overlayClose?"pointer":"auto"}).show(),K.w=_(K.initialWidth,"x"),K.h=_(K.initialHeight,"y"),W.position(),o&&z.bind("resize."+p+" scroll."+p,function(){q.css({width:z.width(),height:z.height(),top:z.scrollTop(),left:z.scrollLeft()})}).trigger("resize."+p),bc(h,K.onOpen),J.add(D).hide(),I.html(K.close).show()),W.load(!0))}function bf(){!r&&b.body&&(Y=!1,z=a(c),r=Z(X).attr({id:e,"class":n?f+(o?"IE6":"IE"):""}).hide(),q=Z(X,"Overlay",o?"position:absolute":"").hide(),s=Z(X,"Wrapper"),t=Z(X,"Content").append(A=Z(X,"LoadedContent","width:0; height:0; overflow:hidden"),C=Z(X,"LoadingOverlay").add(Z(X,"LoadingGraphic")),D=Z(X,"Title"),E=Z(X,"Current"),G=Z(X,"Next"),H=Z(X,"Previous"),F=Z(X,"Slideshow").bind(h,bd),I=Z(X,"Close")),s.append(Z(X).append(Z(X,"TopLeft"),u=Z(X,"TopCenter"),Z(X,"TopRight")),Z(X,!1,"clear:left").append(v=Z(X,"MiddleLeft"),t,w=Z(X,"MiddleRight")),Z(X,!1,"clear:left").append(Z(X,"BottomLeft"),x=Z(X,"BottomCenter"),Z(X,"BottomRight"))).find("div div").css({"float":"left"}),B=Z(X,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),J=G.add(H).add(E).add(F),a(b.body).append(q,r.append(s,B)))}function bg(){return r?(Y||(Y=!0,L=u.height()+x.height()+t.outerHeight(!0)-t.height(),M=v.width()+w.width()+t.outerWidth(!0)-t.width(),N=A.outerHeight(!0),O=A.outerWidth(!0),r.css({"padding-bottom":L,"padding-right":M}),G.click(function(){W.next()}),H.click(function(){W.prev()}),I.click(function(){W.close()}),q.click(function(){K.overlayClose&&W.close()}),a(b).bind("keydown."+f,function(a){var b=a.keyCode;S&&K.escKey&&b===27&&(a.preventDefault(),W.close()),S&&K.arrowKey&&y[1]&&(b===37?(a.preventDefault(),H.click()):b===39&&(a.preventDefault(),G.click()))}),a("."+g,b).live("click",function(a){a.which>1||a.shiftKey||a.altKey||a.metaKey||(a.preventDefault(),be(this))})),!0):!1}var d={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:undefined},e="colorbox",f="cbox",g=f+"Element",h=f+"_open",i=f+"_load",j=f+"_complete",k=f+"_cleanup",l=f+"_closed",m=f+"_purge",n=!a.support.opacity&&!a.support.style,o=n&&!c.XMLHttpRequest,p=f+"_IE6",q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X="div",Y;if(a.colorbox)return;a(bf),W=a.fn[e]=a[e]=function(b,c){var f=this;b=b||{},bf();if(bg()){if(!f[0]){if(f.selector)return f;f=a("<a/>"),b.open=!0}c&&(b.onComplete=c),f.each(function(){a.data(this,e,a.extend({},a.data(this,e)||d,b))}).addClass(g),(a.isFunction(b.open)&&b.open.call(f)||b.open)&&be(f[0])}return f},W.position=function(a,b){function i(a){u[0].style.width=x[0].style.width=t[0].style.width=a.style.width,t[0].style.height=v[0].style.height=w[0].style.height=a.style.height}var c=0,d=0,e=r.offset(),g=z.scrollTop(),h=z.scrollLeft();z.unbind("resize."+f),r.css({top:-9e4,left:-9e4}),K.fixed&&!o?(e.top-=g,e.left-=h,r.css({position:"fixed"})):(c=g,d=h,r.css({position:"absolute"})),K.right!==!1?d+=Math.max(z.width()-K.w-O-M-_(K.right,"x"),0):K.left!==!1?d+=_(K.left,"x"):d+=Math.round(Math.max(z.width()-K.w-O-M,0)/2),K.bottom!==!1?c+=Math.max(z.height()-K.h-N-L-_(K.bottom,"y"),0):K.top!==!1?c+=_(K.top,"y"):c+=Math.round(Math.max(z.height()-K.h-N-L,0)/2),r.css({top:e.top,left:e.left}),a=r.width()===K.w+O&&r.height()===K.h+N?0:a||0,s[0].style.width=s[0].style.height="9999px",r.dequeue().animate({width:K.w+O,height:K.h+N,top:c,left:d},{duration:a,complete:function(){i(this),T=!1,s[0].style.width=K.w+O+M+"px",s[0].style.height=K.h+N+L+"px",K.reposition&&setTimeout(function(){z.bind("resize."+f,W.position)},1),b&&b()},step:function(){i(this)}})},W.resize=function(a){S&&(a=a||{},a.width&&(K.w=_(a.width,"x")-O-M),a.innerWidth&&(K.w=_(a.innerWidth,"x")),A.css({width:K.w}),a.height&&(K.h=_(a.height,"y")-N-L),a.innerHeight&&(K.h=_(a.innerHeight,"y")),!a.innerHeight&&!a.height&&(A.css({height:"auto"}),K.h=A.height()),A.css({height:K.h}),W.position(K.transition==="none"?0:K.speed))},W.prep=function(b){function g(){return K.w=K.w||A.width(),K.w=K.mw&&K.mw<K.w?K.mw:K.w,K.w}function h(){return K.h=K.h||A.height(),K.h=K.mh&&K.mh<K.h?K.mh:K.h,K.h}if(!S)return;var c,d=K.transition==="none"?0:K.speed;A.remove(),A=Z(X,"LoadedContent").append(b),A.hide().appendTo(B.show()).css({width:g(),overflow:K.scrolling?"auto":"hidden"}).css({height:h()}).prependTo(t),B.hide(),a(R).css({"float":"none"}),o&&a("select").not(r.find("select")).filter(function(){return this.style.visibility!=="hidden"}).css({visibility:"hidden"}).one(k,function(){this.style.visibility="inherit"}),c=function(){function q(){n&&r[0].style.removeAttribute("filter")}var b,c,g=y.length,h,i="frameBorder",k="allowTransparency",l,o,p;if(!S)return;l=function(){clearTimeout(V),C.hide(),bc(j,K.onComplete)},n&&R&&A.fadeIn(100),D.html(K.title).add(A).show();if(g>1){typeof K.current=="string"&&E.html(K.current.replace("{current}",Q+1).replace("{total}",g)).show(),G[K.loop||Q<g-1?"show":"hide"]().html(K.next),H[K.loop||Q?"show":"hide"]().html(K.previous),K.slideshow&&F.show();if(K.preloading){b=[$(-1),$(1)];while(c=y[b.pop()])o=a.data(c,e).href||c.href,a.isFunction(o)&&(o=o.call(c)),ba(o)&&(p=new Image,p.src=o)}}else J.hide();K.iframe?(h=Z("iframe")[0],i in h&&(h[i]=0),k in h&&(h[k]="true"),h.name=f+ +(new Date),K.fastIframe?l():a(h).one("load",l),h.src=K.href,K.scrolling||(h.scrolling="no"),a(h).addClass(f+"Iframe").appendTo(A).one(m,function(){h.src="//about:blank"})):l(),K.transition==="fade"?r.fadeTo(d,1,q):q()},K.transition==="fade"?r.fadeTo(d,0,function(){W.position(0,c)}):W.position(d,c)},W.load=function(b){var c,d,e=W.prep;T=!0,R=!1,P=y[Q],b||bb(),bc(m),bc(i,K.onLoad),K.h=K.height?_(K.height,"y")-N-L:K.innerHeight&&_(K.innerHeight,"y"),K.w=K.width?_(K.width,"x")-O-M:K.innerWidth&&_(K.innerWidth,"x"),K.mw=K.w,K.mh=K.h,K.maxWidth&&(K.mw=_(K.maxWidth,"x")-O-M,K.mw=K.w&&K.w<K.mw?K.w:K.mw),K.maxHeight&&(K.mh=_(K.maxHeight,"y")-N-L,K.mh=K.h&&K.h<K.mh?K.h:K.mh),c=K.href,V=setTimeout(function(){C.show()},100),K.inline?(Z(X).hide().insertBefore(a(c)[0]).one(m,function(){a(this).replaceWith(A.children())}),e(a(c))):K.iframe?e(" "):K.html?e(K.html):ba(c)?(a(R=new Image).addClass(f+"Photo").error(function(){K.title=!1,e(Z(X,"Error").text("This image could not be loaded"))}).load(function(){var a;R.onload=null,K.scalePhotos&&(d=function(){R.height-=R.height*a,R.width-=R.width*a},K.mw&&R.width>K.mw&&(a=(R.width-K.mw)/R.width,d()),K.mh&&R.height>K.mh&&(a=(R.height-K.mh)/R.height,d())),K.h&&(R.style.marginTop=Math.max(K.h-R.height,0)/2+"px"),y[1]&&(K.loop||y[Q+1])&&(R.style.cursor="pointer",R.onclick=function(){W.next()}),n&&(R.style.msInterpolationMode="bicubic"),setTimeout(function(){e(R)},1)}),setTimeout(function(){R.src=c},1)):c&&B.load(c,K.data,function(b,c,d){e(c==="error"?Z(X,"Error").text("Request unsuccessful: "+d.statusText):a(this).contents())})},W.next=function(){!T&&y[1]&&(K.loop||y[Q+1])&&(Q=$(1),W.load())},W.prev=function(){!T&&y[1]&&(K.loop||Q)&&(Q=$(-1),W.load())},W.close=function(){S&&!U&&(U=!0,S=!1,bc(k,K.onCleanup),z.unbind("."+f+" ."+p),q.fadeTo(200,0),r.stop().fadeTo(300,0,function(){r.add(q).css({opacity:1,cursor:"auto"}).hide(),bc(m),A.remove(),setTimeout(function(){U=!1,bc(l,K.onClosed)},1)}))},W.remove=function(){a([]).add(r).add(q).remove(),r=null,a("."+g).removeData(e).removeClass(g).die()},W.element=function(){return a(P)},W.settings=d})(jQuery,document,this);

(function(a){function p(a){if((new Date).getTime()<d+c)return;d=(new Date).getTime();var b=f.offset()!=null?f.offset().left:0,i=f.offset()!=null?f.offset().top:0,j=a.pageX-b,k=a.pageY-i;if(j<0||j>f.width()||k<0||k>f.height())return;if(g==true){var l=window.orientation?(window.orientation+180)%360/90:2,m=a.accelerationIncludingGravity,n=l%2==0?-m.x:m.y,o=l%2==0?m.y:m.x;j=l>=2?n:-n;k=l>=2?o:-o;j=(j+h)/2;k=(k+h)/2;if(j<0){j=0}else if(j>h){j=h}if(k<0){k=0}else if(k>h){k=h}}var p=j/(g==true?h:f.width()),q=k/(g==true?h:f.height()),r,l;for(l=e.length;l--;){r=e[l];newX=r.startX+r.inversionFactor*r.xRange*p;newY=r.startY+r.inversionFactor*r.yRange*q;if(r.background){r.obj.css("background-position",newX+"px "+newY+"px")}else{r.obj.css("left",newX).css("top",newY)}}}function o(b){if((new Date).getTime()<d+c)return;if(n()){var e=b.accelerationIncludingGravity,f=e.x,o=e.y;if(k.xArray.length>=5){k.xArray.shift()}if(k.yArray.length>=5){k.yArray.shift()}k.xArray.push(f);k.yArray.push(o);k.xMotion=Math.round((m(k.xArray)-l(k.xArray))*1e3)/1e3;k.yMotion=Math.round((m(k.yArray)-l(k.yArray))*1e3)/1e3;if(k.xMotion>1.5||k.yMotion>1.5){if(h!=10){h=10}}if(k.xMotion>i||k.yMotion>i){j++}else{j=0}if(j>=5){g=true;a(document).unbind("mousemove.plax");a(window).bind("devicemotion",p(b))}else{g=false;a(window).unbind("devicemotion");a(document).bind("mousemove.plax",function(a){p(a)})}}}function n(){return window.DeviceMotionEvent!=undefined}function m(a){return Math.max.apply({},a)}function l(a){return Math.min.apply({},a)}var b=25,c=1/b*1e3,d=(new Date).getTime(),e=[],f=a(window),g=false,h=1,i=.05,j=0,k={xArray:[0,0,0,0,0],yArray:[0,0,0,0,0],xMotion:0,yMotion:0};a.fn.plaxify=function(b){return this.each(function(){var c=-1;var d={xRange:a(this).data("xrange")||0,yRange:a(this).data("yrange")||0,invert:a(this).data("invert")||false,background:a(this).data("background")||false};for(var f=0;f<e.length;f++){if(this===e[f].obj.get(0)){c=f}}for(var g in b){if(d[g]==0){d[g]=b[g]}}d.inversionFactor=d.invert?-1:1;d.obj=a(this);if(d.background){pos=(d.obj.css("background-position")||"0px 0px").split(/ /);if(pos.length!=2){return}x=pos[0].match(/^((-?\d+)\s*px|0+\s*%|left)$/);y=pos[1].match(/^((-?\d+)\s*px|0+\s*%|top)$/);if(!x||!y){return}d.startX=x[2]||0;d.startY=y[2]||0}else{var h=d.obj.position();d.obj.css({top:h.top,left:h.left,right:"",bottom:""});d.startX=this.offsetLeft;d.startY=this.offsetTop}d.startX-=d.inversionFactor*Math.floor(d.xRange/2);d.startY-=d.inversionFactor*Math.floor(d.yRange/2);if(c>=0){e.splice(c,1,d)}else{e.push(d)}})};a.plax={enable:function(b){a(document).bind("mousemove.plax",function(c){if(b){f=b.activityTarget||a(window)}p(c)});if(n()){window.ondevicemotion=function(a){o(a)}}},disable:function(){a(document).unbind("mousemove.plax");window.ondevicemotion=undefined}};if(typeof ender!=="undefined"){a.ender(a.fn,true)}})(function(){return typeof jQuery!=="undefined"?jQuery:ender}());

(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);

$(document).ready(function() {

    if( $('html').hasClass('lt-ie7') ) {
        $('#startScreen').hide();
        $('#chromeframe').height($(window).height());
    }

    /****************************************************************************************
     Process Window Scroll Movements
     ***************************************************************************************/
    var lastScrollTop = 0;
    $(window).scroll(function() {
        var wintop = $(window).scrollTop(), docheight = $(document).height(), winheight = $(window).height();

        // Save which direction we are going to a global
        if( lastScrollTop >= wintop ) scrollDirection = 'up';
        else scrollDirection = 'down';

        /********************************************
         Global Navigation Managment
         *******************************************/
        if( wintop >= winheight ) {
            pin_ShoeComponent($('#shoe-build-flexfilm-front'));
            pin_ShoeComponent($('#shoe-build-flexfilm-back'));
        }
        else {
            unpin_ShoeComponent($('#shoe-build-flexfilm-front'));
            unpin_ShoeComponent($('#shoe-build-flexfilm-back'));
        }
        if( wintop >= (winheight*2) ) {
            pin_ShoeComponent($('#shoe-build-upper-front'));
            pin_ShoeComponent($('#shoe-build-upper-back'));
        }
        else {
            unpin_ShoeComponent($('#shoe-build-upper-front'));
            unpin_ShoeComponent($('#shoe-build-upper-back'));
        }
        if( wintop >= (winheight*3) ) pin_ShoeComponent($('#shoe-build-progrid'));
        else unpin_ShoeComponent($('#shoe-build-progrid'));
        if( wintop >= (winheight*4) ) pin_ShoeComponent($('#shoe-build-midsole'));
        else unpin_ShoeComponent($('#shoe-build-midsole'));


        /***********************************************************
         Entering and Leaving Each Dynamic Shoe Screen
         **********************************************************/
        var cushion = 7; // Amount to cusion for browser sizing weirdness

        //Flexfilm
//        if(scrollDirection == 'down'	&& wintop >= winheight				&& lastScrollTop < winheight)				setup_flexfilm();
//        if(scrollDirection == 'down'	&& wintop >= winheight+cushion		&& lastScrollTop < winheight+cushion)		reset_flexfilm();
//        if(scrollDirection == 'up'		&& wintop <= winheight+cushion		&& lastScrollTop > winheight+cushion)		setup_flexfilm();
//        if(scrollDirection == 'up'		&& wintop < winheight				&& lastScrollTop >= winheight)				reset_flexfilm();
//
//        //Upper
//        if(scrollDirection == 'down'	&& wintop >= winheight*2			&& lastScrollTop < winheight*2)				setup_upper();
//        if(scrollDirection == 'down'	&& wintop >= winheight*2+cushion	&& lastScrollTop < winheight*2+cushion)		reset_upper();
//        if(scrollDirection == 'up'		&& wintop <= winheight*2+cushion	&& lastScrollTop > winheight*2+cushion)		setup_upper();
//        if(scrollDirection == 'up'		&& wintop < winheight*2				&& lastScrollTop >= winheight*2)			reset_upper();
//
//        //Powergrid
//        if(scrollDirection == 'down'	&& wintop >= winheight*3			&& lastScrollTop < winheight*3)				setup_progrid();
//        if(scrollDirection == 'down'	&& wintop >= winheight*3+cushion	&& lastScrollTop < winheight*3+cushion)		reset_progrid();
//        if(scrollDirection == 'up'		&& wintop <= winheight*3+cushion	&& lastScrollTop > winheight*3+cushion)		setup_progrid();
//        if(scrollDirection == 'up'		&& wintop < winheight*3				&& lastScrollTop >= winheight*3)			reset_progrid();
//
//        //Midsole
//        if(scrollDirection == 'down'	&& wintop >= winheight*4			&& lastScrollTop < winheight*4)				setup_midsole();
//        if(scrollDirection == 'down'	&& wintop >= winheight*4+cushion	&& lastScrollTop < winheight*4+cushion)		reset_midsole();
//        if(scrollDirection == 'up'		&& wintop <= winheight*4+cushion	&& lastScrollTop > winheight*4+cushion)		setup_midsole();
//        if(scrollDirection == 'up'		&& wintop < winheight*4				&& lastScrollTop >= winheight*4)			reset_midsole();
//
//        //Sole
//        if(scrollDirection == 'down'	&& wintop >= winheight*5			&& lastScrollTop < winheight*5)				{ setup_sole(); animate_to_sole(); }
//        if(scrollDirection == 'down'	&& wintop >= winheight*5+cushion	&& lastScrollTop < winheight*5+cushion)		reset_sole();
//        if(scrollDirection == 'up'		&& wintop <= winheight*5+cushion	&& lastScrollTop > winheight*5+cushion)		setup_sole();
//        if(scrollDirection == 'up'		&& wintop < winheight*5				&& lastScrollTop >= winheight*5)			{ animate_to_profile(); reset_sole(); }

        //Shoe Browser
        if(scrollDirection == 'down'	&& wintop >= winheight*6			&& lastScrollTop < winheight*6)				setup_shoeBrowser();
        if(scrollDirection == 'down'	&& wintop >= winheight*6+cushion	&& lastScrollTop < winheight*6+cushion)		reset_shoeBrowser();
        if(scrollDirection == 'up'		&& wintop <= winheight*6+cushion	&& lastScrollTop > winheight*6+cushion)		setup_shoeBrowser();
        if(scrollDirection == 'up'		&& wintop < winheight*6				&& lastScrollTop >= winheight*6)			reset_shoeBrowser();


        /********************************************
         Global Navigation Managment
         *******************************************/

        // Global Nav Show Hide
        if( wintop >= winheight && wintop < ((winheight*5) + (winheight/2)) ) $('#global_nav').removeClass('offscreen');
        else $('#global_nav').addClass('offscreen');

        // Current Navigation Item Highlight Indication
        if( wintop <= winheight*1.5 ) {
            $('#nav_flexfilm a').addClass('current');
        } else $('#nav_flexfilm a').removeClass('current');
        if( wintop > winheight*1.5 && wintop <= winheight*2.5 ) {
            if(!$('#nav_upper a').hasClass('current')) $('#nav_upper a').addClass('current');
        } else $('#nav_upper a').removeClass('current');
        if( wintop > winheight*2.5 && wintop <= winheight*3.5 ) {
            if(!$('#nav_progrid a').hasClass('current')) $('#nav_progrid a').addClass('current');
        } else $('#nav_progrid a').removeClass('current');
        if( wintop > winheight*3.5 && wintop <= winheight*4.5 ) {
            if(!$('#nav_midsole a').hasClass('current')) $('#nav_midsole a').addClass('current');
        } else $('#nav_midsole a').removeClass('current');
        if( wintop > winheight*4.5 && wintop <= winheight*5.5 ) {
            if(!$('#nav_sole a').hasClass('current')) $('#nav_sole a').addClass('current');
        } else $('#nav_sole a').removeClass('current');
        if( wintop > winheight*5.5 && wintop <= winheight*6.5 ) {
            if(!$('#nav_colors a').hasClass('current')) $('#nav_colors a').addClass('current');
        } else $('#nav_colors a').removeClass('current');

        // Records last scroll top for acertaining direction
        lastScrollTop = wintop;

        // Prevent scrolling when scroller is not ready
        if(scrollLocked) preventScroll();
    });

    /****************************************************************************************
     Process Window Resizing - Delay reaction until resize complete
     ***************************************************************************************/

    var rtime = new Date(1, 1, 2000, 12,00,00);
    var timeout = false;
    var delta = 200;
    $(window).resize(function() {
        rtime = new Date();
        if (timeout === false) {
            timeout = true;
            setTimeout(resizeend, delta);
        }
    });

    function resizeend() {
        if (new Date() - rtime < delta) {
            setTimeout(resizeend, delta);
        } else {
            timeout = false;
            sizeToWindow();
            performScroll(); // Reset Viewport
        }
    }

    /****************************************************************************************
     Button Click / Hover Actions
     ***************************************************************************************/
    $('#startBtn').click(function(){
        $('#startBtn').addClass('offscreen');
        scrollReady = true;
        currentScreen = 0;
        scrollNext();
    });

    function scrollToTop() {
        scrollReady = false;
        $("html,body").animate({scrollTop:"0px"}, 2500,
            function(){
                scrollReady = true;
                currentScreen = 0;
            });
    }

    $('.downBtn').click(clickScroll);
    
    function clickScroll(e)
    {
        e.preventDefault();
        var slideNumber = $(this).data('slide');
        currentScreen = parseInt(slideNumber);
        performScroll();
    }

    $('#scrollToTop').click(function(){
        scrollReady = false;
        $("html,body").animate({scrollTop:"0px"}, 2500,
            function(){
                scrollReady = true;
                currentScreen = 0;
            });
        return false;
    });

    // Nav Click Events
    $('#nav_flexfilm a').click(function(event){ event.preventDefault(); currentScreen = 1; performScroll(); });
    $('#nav_upper a').click(function(event){ event.preventDefault(); currentScreen = 2; performScroll(); });
    $('#nav_progrid a').click(function(event){ event.preventDefault(); currentScreen = 3; performScroll(); });
    $('#nav_midsole a').click(function(event){ event.preventDefault(); currentScreen = 4; performScroll(); });
    $('#nav_sole a').click(function(event){ event.preventDefault(); currentScreen = 5; performScroll(); });
    $('#nav_colors a').click(function(event){ event.preventDefault(); currentScreen = 6; performScroll(); });
    $('#nav_getyours a').click(function(event){ event.preventDefault(); currentScreen = 7; performScroll(); });

    $('.service').bind('inview', function(event, isVisible) {
        if (!isVisible) {
            $(this).css('opacity', 0);
            return;
        }

        var randomDelay = Math.random() * 600;
        $(this).delay(randomDelay).animate({ opacity: 1 }, 600);
    });

    // Ready to go
    $(window).load(function () {

        // Handle IE 6
        if( !$('html').hasClass('lt-ie7') )
        {
            // Show Hidden Elements
            $('#startScreenWrap').show();
            $('#startBtn').show();
            $('#contentWrap').show();
            $('#shoeBrowser').show();
            if($('#getYours').length > 0 ) $('#getYours').show();
            if($('#comingSoon').length > 0 ) $('#comingSoon').show();

            // Size Everything to Viewport
            sizeToWindow();


            // Ready for Scroll Handlers
            scrollReady = true;
            setupScrollHandler();
            setupKeyScrollHandler();
        }
    });

    scrollToTop();
});



var currentScreen = 0;
var scrollReady = false;
var scrollLocked = false;
var scrollDirection = 'down';
var MIN_HEIGHT = 600;
var screenHeight = $(window).height() > MIN_HEIGHT ? $(window).height() : MIN_HEIGHT;
var documentWrapWidth = 1100;
var shoeBuildLeftOffset = 190;
var shoeOffsetTop = 0;
var shoeOffsetLeft = 0;
var documentGutterWidth = (($(document).width() - documentWrapWidth) / 2);
var screenAnimationTime = 1000;
var screens = mint.screens;


// Perspective Background
var perspBgWidth = 2100;
var perspBgHeight = 1500;

// Shoe Builder Screens
var flexfilmSetupComplete = false;
var upperSetupComplete = false;
var progridSetupComplete = false;
var midsoleSetupComplete = false;
var soleSetupComplete = false;

// For Shoe Flip Animation
var anim;
var animationStep;

// Color Browser Menu
var shoeBrowserSetupComplete = false;
var shoeBrowserGender = 'm';
var colorBrowserMenuLeftOffset = 0; //documentGutterWidth + ((documentWrapWidth-$('#chooser_menu').width())/2);
var colorBrowserMenuItemWidth = 0;
var colorBrowserCurrentItem = 1;
var mens_bg_colors = new Array('#ba2c2c','#395bae','#afcf3b','#6a6a6a','#dd7d04','#e2cb04' );
var womens_bg_colors = new Array('#b93457','#2c92cc','#ca4b4f','#7e5193','#b93457','#e2cb04');
var shoeBrowserCount = 6;

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


/***********************************************************
 Sizes Site components based upon browswer window size
 **********************************************************/
function sizeToWindow() {

    // Extra 5 Added to height to account for odd window height rounding issue.
    screenHeight = (Math.ceil($(window).height()) > MIN_HEIGHT ? $(window).height() : MIN_HEIGHT) + 1;
    documentGutterWidth = ((Math.ceil($(document).width()) - documentWrapWidth) / 2);

    $('#startScreen').height(screenHeight);
    var startScreenWrapTop = ((screenHeight-$('#startScreenWrap').height())/2);
    if( startScreenWrapTop < 80 ) startScreenWrapTop = 80;
    var startScreenWrapLeft = ($(window).width()-1020)/2;
    if( startScreenWrapLeft < 75 ) startScreenWrapLeft = 75;
    $('#startScreenWrap').css('left',  startScreenWrapLeft + "px").css('top', startScreenWrapTop + "px");

    $('#shoeBrowser').height(screenHeight);
    $('#getYours .wrap').css('min-height',screenHeight+"px");
    $('#thanks .wrap').css('min-height',screenHeight+"px");
    $('#comingSoon .wrap').css('min-height',screenHeight+"px");
    $('#contentWrap section').height(screenHeight).width($(window).width());

    $('.shoe_part').css('top', ((screenHeight-$('.shoe_part').height())/2) + "px");
    $('.shoe_part').css('left',($(window).width()-$('.shoe_part').width())/2+"px");
    $('.shoe_shadow').css('top', ((screenHeight-$('.shoe_part').height())/2) + $('.shoe_part').height() + 30 + "px");
    $('.shoe_shadow').css('left',($(window).width()-$('.shoe_shadow').width())/2+"px");

    $('#chooser_menu').css('left', colorBrowserMenuLeftOffset + "px" );
    $('#chooser_selected').css('left', colorBrowserMenuLeftOffset + ((colorBrowserCurrentItem-1)*colorBrowserMenuItemWidth) + "px");


    $('.persp_background').css('top', ((screenHeight-perspBgHeight)/2) + "px");
    $('.persp_background').css('left', ($(window).width()-perspBgWidth)/2 + "px");
    $('.glow').css('top', ((screenHeight-perspBgHeight)/2) + "px");
    $('.glow').css('left', ($(window).width()-perspBgWidth)/2 + "px");


    shoeOffsetLeft = ($(window).width()-$('.shoe_part').width())/2;
    shoeOffsetTop = ((screenHeight-$('.shoe_part').height())/2);

    // Position Pop-Outs
    $('#flex_pop1').css('top', shoeOffsetTop + 150 + "px").css('left', shoeOffsetLeft + 35 + "px");
    $('#flex_pop2').css('top', shoeOffsetTop + 100 + "px").css('left', shoeOffsetLeft + 250 + "px");
    $('#upper_pop1').css('top', shoeOffsetTop + 160 + "px").css('left', shoeOffsetLeft + 85 + "px");
    $('#upper_pop2').css('top', shoeOffsetTop + 225 + "px").css('left', shoeOffsetLeft + 520 + "px");
    $('#progrid_pop1').css('top', shoeOffsetTop + 235 + "px").css('left', shoeOffsetLeft + 50 + "px");
    $('#midsole_pop1').css('top', shoeOffsetTop + 220 + "px").css('left', shoeOffsetLeft + 170 + "px");
    $('#sole_pop1').css('top', shoeOffsetTop + 100 + "px").css('left', shoeOffsetLeft + 130 + "px");
    $('#sole_pop2').css('top', shoeOffsetTop + 40 + "px").css('left', shoeOffsetLeft + 340 + "px");
    $('#sole_pop3').css('top', shoeOffsetTop + 200 + "px").css('left', shoeOffsetLeft + 400 + "px");

    // Shoe Build Section H1's
    var h1Offset = $(window).height()*.1;
    $('section h1').css('top', h1Offset + "px" );
    $('section h1').css('left', h1Offset + "px" );


    // Shoe Browser Sizing
    $('#scrollWrap').width($(window).width());
    $('#zebra_stripe').width($(window).width());

    var maxShoeScrollerHeight = 897;
    var minShoeScrollerHeight = 600;
    if($(window).height() > minShoeScrollerHeight ) {
        difference = $(window).height() - minShoeScrollerHeight;
        if( minShoeScrollerHeight + difference  < maxShoeScrollerHeight )
            $('#scrollWrap').height(minShoeScrollerHeight + difference);
        else {
            $('#scrollWrap').height($(window).height()).children("div[id!='zebra_stripe']").each(function() {
                $(this).css("top", ((parseInt(difference) / 4) + parseInt($(this).attr("data-top"))) + "px");
            });
            $('#zebra_stripe').height($(window).height()).find("div").height($(window).height());
        }
    }



    $('#shoe_display').css('right',(documentGutterWidth+90)+"px");

    if(shoeBrowserSetupComplete) {
        $('#genderNav').css('left', (documentGutterWidth+50)+"px");
    }
    else {
        $('#zebra_stripe').css('right', (-1*$('#zebra_stripe').width())+"px");
        $('#shoe_scroller').css('right', ($('#shoe_scroller').width()*-1) + "px" );
        $('#zebra_stipe').css('right', ($('#zebra_stipe').width()*-1) + "px" );
    }

    colorBrowserMenuLeftOffset = documentGutterWidth + ((documentWrapWidth-$('#chooser_menu').width())/2);
    colorBrowserMenuItemWidth = $('#chooser_menu ul li').width() + 14; // 14px right margin
    $('#chooser_menu').css('left', colorBrowserMenuLeftOffset + "px" );
    $('#chooser_selected').css('left', colorBrowserMenuLeftOffset + ((colorBrowserCurrentItem-1)*colorBrowserMenuItemWidth) + "px");

}



/****************************************************************************************
 Scroll Snapping for mousewheel and Up/Down Key Presses
 ***************************************************************************************/
function setupScrollHandler() {
    $("body").bind("mousewheel", function (delta, aS, aQ, deltaY) {
        delta.preventDefault();
        if (deltaY > 0) {
            scrollPrev();
        } else {
            if (deltaY < 0) {
                scrollNext();
            }
        }
        return false;
    });
}
function scrollNext() {
    if( currentScreen < screens.length-1 && scrollReady == true ) {
        currentScreen++;
        performScroll();
    }
}
function scrollPrev() {
    if( currentScreen > 0 && scrollReady == true ) {
        currentScreen--;
        performScroll();
    }
}
function performScroll() {
    scrollReady = false;
    var screen = screens[currentScreen];
    var newYPos = Math.ceil($('#'+screen).offset().top);
    $("html, body").animate(
        {scrollTop: newYPos },
        screenAnimationTime,
        'easeInOutExpo',
        function() { scrollReady = true;}
    );
}
function preventScroll() {
    var newYPos = Math.ceil($('#'+screens[currentScreen]).offset().top);
    $(window).scrollTop(newYPos);
}

// Binds Key Up / Key Down for Scrolling
function setupKeyScrollHandler() {
    $(document).bind("keyup", function (event) {
        if (event.keyCode == 40 || event.keyCode == 38) {
            event.preventDefault();
            if (event.keyCode == 40) {
                if (scrollReady == true) {
                    scrollNext();
                }
            } else {
                if (event.keyCode == 38) {
                    if (scrollReady == true) {
                        scrollPrev();
                    }
                }
            }
        }
    });
    $(document).bind("keydown", function (event) {
        if (event.keyCode == 40 || event.keyCode == 38 ) {
            event.preventDefault()
        }
    })
}
// Bind and unbind keys for form elements
function unbindKeys() {
    $(document).unbind("keyup");
    $(document).unbind("keydown");
}
$("input, textarea, select").live("focus", function () { unbindKeys(); });
$("input, textarea, select").live("blur", function () {setupKeyScrollHandler(); });





/***********************************************************
 Shoe Component Pinning
 **********************************************************/
function pin_ShoeComponent(component){ component.css('position','fixed'); }
function unpin_ShoeComponent(component){ component.css('position','absolute'); }



/***********************************************************
 Animates "selected" indicator for Shoe Color Browser
 **********************************************************/
function animateSelector(){
    oldLeft = parseInt($('#chooser_selected').css('left'));
    newLeft = colorBrowserMenuLeftOffset + ((colorBrowserCurrentItem-1)*colorBrowserMenuItemWidth);
    speed = Math.abs(newLeft-oldLeft)/colorBrowserMenuItemWidth;
    // tweaked as per tom's request - ss
    $('#chooser_selected').animate( { left: newLeft + "px" }, 200*speed );
}

/***********************************************************
 Individual Screen Setups
 **********************************************************/

function setup_flexfilm()
{
    if(!flexfilmSetupComplete){

        $('#video_flexfilm_1').css('left', "-185px").css('top', (shoeOffsetTop-20)+"px").css('opacity', '0');
        $('#video_flexfilm_1').animate(
            {left: '45px', opacity: '1'},
            800,
            function() { $('#video_flexfilm_1').plaxify({"xRange":60,"yRange":60});}
        );

        $('#video_lbl_flexfilm_1').css('left', "-185px").css('top', (shoeOffsetTop+80)+"px").css('opacity', '0');
        $('#video_lbl_flexfilm_1').animate(
            {left: '110px', opacity: '1'},
            500,
            function() { $('#video_lbl_flexfilm_1').plaxify({"xRange":100,"yRange":100});}
        );

        $('#detail_flexfilm_1').css('right', "-185px").css('top', (shoeOffsetTop+20)+"px").css('opacity', '0');
        $('#detail_flexfilm_1').animate(
            {right: '69px', opacity: '1'},
            700,
            function() { $('#detail_flexfilm_1').plaxify({"xRange":60,"yRange":60});}
        );

        $('#detail_lbl_flexfilm_1').css('right', "-185px").css('top', (shoeOffsetTop+149)+"px").css('opacity', '0');
        $('#detail_lbl_flexfilm_1').animate(
            {right: '145px', opacity: '1'},
            400,
            function() { $('#detail_lbl_flexfilm_1').plaxify({"xRange":100,"yRange":100});}
        );

        $('#detail_flexfilm_2').css('right', ($(window).width()-shoeOffsetLeft-760)+"px").css('bottom', "-185px").css('opacity', '0');
        $('#detail_flexfilm_2').animate(
            {bottom: ($(window).height()-shoeOffsetTop-440)+"px", opacity: '1'},
            800,
            function() { $('#detail_flexfilm_2').plaxify({"xRange":60,"yRange":60});}
        );

        $('#detail_lbl_flexfilm_2').css('right', ($(window).width()-shoeOffsetLeft-720)+"px").css('bottom', "-185px").css('opacity', '0');
        $('#detail_lbl_flexfilm_2').animate(
            {bottom: ($(window).height()-shoeOffsetTop-320)+"px", opacity: '1'},
            500,
            function() { $('#detail_lbl_flexfilm_2').plaxify({"xRange":100,"yRange":100});}
        );

        $('#detail_flexfilm_3').css('left', "-185px").css('top', (shoeOffsetTop-20)+"px").css('opacity', '0');
        $('#detail_flexfilm_3').animate(
            {left: '45px', opacity: '1'},
            800,
            function() { $('#detail_flexfilm_3').plaxify({"xRange":60,"yRange":60});}
        );

        $('#detail_lbl_flexfilm_3').css('left', "-185px").css('top', (shoeOffsetTop+80)+"px").css('opacity', '0');
        $('#detail_lbl_flexfilm_3').animate(
            {left: '110px', opacity: '1'},
            500,
            function() { $('#detail_lbl_flexfilm_3').plaxify({"xRange":100,"yRange":100});}
        );

        $('#quote_flexfilm_1').css('bottom', $('#quote_flexfilm_1').height()*-1+"px").css('left', (shoeOffsetLeft-40)+"px").css('opacity', '0');
        $('#quote_flexfilm_1').animate(
            {bottom: ($(window).height()-shoeOffsetTop-320)+"px", opacity: '0.8'},
            800,
            function() { $('#quote_flexfilm_1').plaxify({"xRange":200,"yRange":140});}
        );

        $('#quote_flexfilm_2').css('top', $('#quote_flexfilm_2').height()*-1+"px").css('right', ($(window).width()-shoeOffsetLeft-660)+"px").css('opacity', '0');
        $('#quote_flexfilm_2').animate(
            {top: (shoeOffsetTop)+"px", opacity: '0.45'},
            700,
            function() { $('#quote_flexfilm_2').plaxify({"xRange":120,"yRange":50});}
        );

        $('#flexfilm .line1').plaxify({"xRange":200,"yRange":100});
        $('#flexfilm .line2').plaxify({"xRange":140,"yRange":50});
        $('#flexfilm .line3').plaxify({"xRange":120,"yRange":40});
        $('#flexfilm .line4').plaxify({"xRange":100,"yRange":30});
        $('#flexfilm .line5').plaxify({"xRange":80,"yRange":20});
        $('#flexfilm .line6').plaxify({"xRange":60,"yRange":10});
        $('#flexfilm-bg').plaxify({"xRange":25,"yRange":25});
        $('#flexfilm-shoe-shadow').plaxify({"xRange":95,"yRange":95});

        flexfilmSetupComplete = true;
    }

    show_flexfilm_hotspots();

    $.plax.enable({ "activityTarget": $('#flexfilm')});
}
function reset_flexfilm()
{
    $.plax.disable();
    hide_flexfilm_hotspots();
}
function show_flexfilm_hotspots() {
    $('#flex_pop1').fadeIn('slow');
    $('#flex_pop2').fadeIn('slow');
}
function hide_flexfilm_hotspots() {
    $('#flex_pop1').animate({opacity: 0}, 'slow', function(){$(this).css('display', 'none').css('opacity','1')});
    $('#flex_pop2').animate({opacity: 0}, 'slow', function(){$(this).css('display', 'none').css('opacity','1')});
}


function setup_upper()
{
    if(!upperSetupComplete) {


        $('#video_upper_1').css('right', "-185px").css('top', (shoeOffsetTop+60)+"px").css('opacity', '0');
        $('#video_upper_1').animate(
            {right: ($(window).width()-shoeOffsetLeft-870)+"px", opacity: '1'},
            800,
            function() { $('#video_upper_1').plaxify({"xRange":60,"yRange":60}); }
        );

        $('#video_lbl_upper_1').css('right', "-185px").css('top', (shoeOffsetTop+90)+"px").css('opacity', '0');
        $('#video_lbl_upper_1').animate(
            {right: ($(window).width()-shoeOffsetLeft-810)+"px", opacity: '1'},
            600,
            function() { $('#video_lbl_upper_1').plaxify({"xRange":100,"yRange":100}); }
        );


        $('#detail_upper_1').css('left', "50px").css('top', "-185px").css('opacity', '0');
        $('#detail_upper_1').animate(
            {top: (shoeOffsetTop+10)+"px", opacity: '1'},
            800,
            function() { $('#detail_upper_1').plaxify({"xRange":60,"yRange":60}); }
        );

        $('#detail_lbl_upper_1').css('left', "80px").css('top', "-185px").css('opacity', '0');
        $('#detail_lbl_upper_1').animate(
            {top: (shoeOffsetTop+140)+"px", opacity: '1'},
            500,
            function() { $('#detail_lbl_upper_1').plaxify({"xRange":100,"yRange":100}); }
        );

        $('#detail_upper_2').css('left', "-185px").css('top', (shoeOffsetTop+250)+"px").css('opacity', '0');
        $('#detail_upper_2').animate(
            {left: '150px', opacity: '1'},
            800,
            function() { $('#detail_upper_2').plaxify({"xRange":60,"yRange":60}); }
        );

        $('#detail_lbl_upper_2').css('left', "-185px").css('top', (shoeOffsetTop+300)+"px").css('opacity', '0');
        $('#detail_lbl_upper_2').animate(
            {left: '180px', opacity: '1'},
            500,
            function() { $('#detail_lbl_upper_2').plaxify({"xRange":100,"yRange":100}); }
        );

        $('#quote_upper_1').css('top',$('#quote_upper_1').height()*-1+"px").css('left', (shoeOffsetLeft+200)+"px").css('opacity', '0');
        $('#quote_upper_1').animate(
            {top: (shoeOffsetTop+280)+"px", opacity: '0.6'},
            800,
            function() { $('#quote_upper_1').plaxify({"xRange":160,"yRange":90}); }
        );

        $('#quote_upper_2').css('right', $('#quote_upper_2').width()*-1+"px").css('top', (shoeOffsetTop-10)+"px").css('opacity', '0').css('z-index', '1500');
        $('#quote_upper_2').animate(
            {right: ($(window).width()-shoeOffsetLeft-700)+"px", opacity: '0.8'},
            600,
            function() { $('#quote_upper_2').plaxify({"xRange":80,"yRange":30}); }
        );

        $('#keyword_upper_1').css('bottom', $('#keyword_upper_1').height()*-1+"px").css('left', (shoeOffsetLeft+400)+"px").css('opacity', '0');
        $('#keyword_upper_1').animate(
            {bottom: ($(window).height()-shoeOffsetTop-580)+"px", opacity: '1'},
            650,
            function() { $('#keyword_upper_1').plaxify({"xRange":200,"yRange":50}); }
        );

        $('#upper .line1').plaxify({"xRange":200,"yRange":100});
        $('#upper .line2').plaxify({"xRange":140,"yRange":50});
        $('#upper .line3').plaxify({"xRange":120,"yRange":40});
        $('#upper .line4').plaxify({"xRange":100,"yRange":30});
        $('#upper .line5').plaxify({"xRange":80,"yRange":20});
        $('#upper .line6').plaxify({"xRange":60,"yRange":10});
        $('#upper-bg').plaxify({"xRange":25,"yRange":25});
        $('#upper-shoe-shadow').plaxify({"xRange":95,"yRange":95});

        upperSetupComplete = true;
    }

    show_upper_hotspots();
    $.plax.enable({ "activityTarget": $('#upper')});
}
function reset_upper()
{
    hide_upper_hotspots();
    $.plax.disable();
}
function show_upper_hotspots() {
    $('#upper_pop1').fadeIn('slow');
    $('#upper_pop2').fadeIn('slow');
}
function hide_upper_hotspots() {
    $('#upper_pop1').animate({opacity: 0}, 'slow', function(){$(this).css('display', 'none').css('opacity','1')});
    $('#upper_pop2').animate({opacity: 0}, 'slow', function(){$(this).css('display', 'none').css('opacity','1')});
}



function setup_progrid()
{
    if(!progridSetupComplete) {

        $('#video_progrid_1').css('left', "-185px").css('top', shoeOffsetTop+"px").css('opacity', '0');
        $('#video_progrid_1').animate(
            {left: '10px', opacity: '1'},
            800,
            function() { $('#video_progrid_1').plaxify({"xRange":60,"yRange":60}); }
        );

        $('#video_lbl_progrid_1').css('left', "-185px").css('top', (shoeOffsetTop+160)+"px").css('opacity', '0');
        $('#video_lbl_progrid_1').animate(
            {left: '90px', opacity: '1'},
            600,
            function() { $('#video_lbl_progrid_1').plaxify({"xRange":100,"yRange":100}); }
        );

        $('#detail_progrid_1').css('right', "-185px").css('top', (shoeOffsetTop+100)+"px").css('opacity', '0');
        $('#detail_progrid_1').animate(
            {right: ($(window).width()-shoeOffsetLeft-860)+"px", opacity: '1'},
            800,
            function() { $('#detail_progrid_1').plaxify({"xRange":60,"yRange":60}); }
        );

        $('#detail_lbl_progrid_1').css('right', "-185px").css('top', (shoeOffsetTop+130)+"px").css('opacity', '0');
        $('#detail_lbl_progrid_1').animate(
            {right: ($(window).width()-shoeOffsetLeft-820)+"px", opacity: '1'},
            900,
            function() { $('#detail_lbl_progrid_1').plaxify({"xRange":100,"yRange":100}); }
        );

        $('#quote_progrid_1').css('top', $('#quote_progrid_1').height()*-1+"px").css('left', (shoeOffsetLeft+430)+"px").css('opacity', '0');
        $('#quote_progrid_1').animate(
            {top: (shoeOffsetTop+30)+"px", opacity: '0.8'},
            700,
            function() { $('#quote_progrid_1').plaxify({"xRange":200,"yRange":140}); }
        );

        $('#quote_progrid_2').css('top',$('#quote_progrid_2').height()*-1+"px").css('left', (shoeOffsetLeft+40)+"px").css('opacity', '0');
        $('#quote_progrid_2').animate(
            {top: (shoeOffsetTop-50)+"px", opacity: '0.3'},
            400,
            function() { $('#quote_progrid_2').plaxify({"xRange":160,"yRange":90}); }
        );

        $('#keyword_progrid_1').css('bottom', $('#keyword_progrid_1').height()*-1+"px").css('left', (shoeOffsetLeft-180)+"px").css('opacity', '0');
        $('#keyword_progrid_1').animate(
            {bottom: ($(window).height()-shoeOffsetTop-550)+"px", opacity: '1'},
            600,
            function() { $('#keyword_progrid_1').plaxify({"xRange":180,"yRange":50}); }
        );

        $('#progrid .line1').plaxify({"xRange":200,"yRange":100});
        $('#progrid .line2').plaxify({"xRange":140,"yRange":50});
        $('#progrid .line3').plaxify({"xRange":120,"yRange":40});
        $('#progrid .line4').plaxify({"xRange":100,"yRange":30});
        $('#progrid .line5').plaxify({"xRange":80,"yRange":20});
        $('#progrid .line6').plaxify({"xRange":60,"yRange":10});
        $('#progrid-bg').plaxify({"xRange":25,"yRange":25});
        $('#progrid-shoe-shadow').plaxify({"xRange":95,"yRange":95});

        progridSetupComplete = true;
    }

    show_progrid_hotspots();
    $.plax.enable({ "activityTarget": $('#progrid')});
}
function reset_progrid()
{
    hide_progrid_hotspots();
    $.plax.disable();
}
function show_progrid_hotspots() {
    $('#progrid_pop1').fadeIn('slow');
}
function hide_progrid_hotspots() {
    $('#progrid_pop1').animate({opacity: 0}, 'slow', function(){$(this).css('display', 'none').css('opacity','1')});
}


function setup_midsole()
{
    if(!midsoleSetupComplete) {
        /*
         $('#video_midsole_1').css('left', "-185px").css('top', (shoeOffsetTop+170)+"px").css('opacity', '0');
         $('#video_midsole_1').animate(
         {left: (shoeOffsetLeft-250)+"px", opacity: '1'},
         800,
         function() { $('#video_midsole_1').plaxify({"xRange":60,"yRange":60}); }
         );

         $('#video_lbl_midsole_1').css('left', "-185px").css('top', (shoeOffsetTop+300)+"px").css('opacity', '0');
         $('#video_lbl_midsole_1').animate(
         {left: (shoeOffsetLeft-200)+"px", opacity: '1'},
         600,
         function() { $('#video_lbl_midsole_1').plaxify({"xRange":100,"yRange":100}); }
         );
         */

        $('#detail_midsole_1').css('right', "-185px").css('top', (shoeOffsetTop+80)+"px").css('opacity', '0');
        $('#detail_midsole_1').animate(
            {right: ($(window).width()-shoeOffsetLeft-900)+"px", opacity: '1'},
            800,
            function() { $('#detail_midsole_1').plaxify({"xRange":60,"yRange":60}); }
        );

        $('#detail_lbl_midsole_1').css('right', "-185px").css('top', (shoeOffsetTop+110)+"px").css('opacity', '0');
        $('#detail_lbl_midsole_1').animate(
            {right: ($(window).width()-shoeOffsetLeft-940)+"px", opacity: '1'},
            700,
            function() { $('#detail_lbl_midsole_1').plaxify({"xRange":100,"yRange":100}); }
        );

        $('#detail_midsole_2').css('left', "-185px").css('top', (shoeOffsetTop+70)+"px").css('opacity', '0');
        $('#detail_midsole_2').animate(
            {left: (shoeOffsetLeft-250)+"px", opacity: '1'},
            800,
            function() { $('#detail_midsole_2').plaxify({"xRange":60,"yRange":60}); }
        );

        $('#detail_lbl_midsole_2').css('left', "-185px").css('top', (shoeOffsetTop+200)+"px").css('opacity', '0');
        $('#detail_lbl_midsole_2').animate(
            {left: (shoeOffsetLeft-200)+"px", opacity: '1'},
            600,
            function() { $('#detail_lbl_midsole_2').plaxify({"xRange":100,"yRange":100}); }
        );

        $('#quote_midsole_1').css('top', $('#quote_midsole_1').height()*-1+"px").css('left', (shoeOffsetLeft+370)+"px").css('opacity', '0');
        $('#quote_midsole_1').animate(
            {top: (shoeOffsetTop-25)+"px", opacity: '0.8'},
            700,
            function() { $('#quote_midsole_1').plaxify({"xRange":160,"yRange":90}); }
        );

        $('#quote_midsole_2').css('bottom', $('#quote_midsole_2').height()*-1+"px").css('right', ($(window).width()-shoeOffsetLeft-780)+"px").css('opacity', '0');
        $('#quote_midsole_2').animate(
            {bottom: ($(window).height()-shoeOffsetTop-370)+"px", opacity: '0.3'},
            700,
            function() { $('#quote_midsole_2').plaxify({"xRange":190,"yRange":110}); }
        );

        $('#keyword_midsole_1').css('bottom', $('#keyword_midsole_1').height()*-1+"px").css('left', "0px").css('opacity', '0');
        $('#keyword_midsole_1').animate(
            {bottom: ($(window).height()-shoeOffsetTop-500)+"px", opacity: '1'},
            600,
            function() { $('#keyword_midsole_1').plaxify({"xRange":200,"yRange":50}); }
        );

        $('#midsole .line1').plaxify({"xRange":200,"yRange":100});
        $('#midsole .line2').plaxify({"xRange":140,"yRange":50});
        $('#midsole .line3').plaxify({"xRange":120,"yRange":40});
        $('#midsole .line4').plaxify({"xRange":100,"yRange":30});
        $('#midsole .line5').plaxify({"xRange":80,"yRange":20});
        $('#midsole .line6').plaxify({"xRange":60,"yRange":10});
        $('#midsole-bg').plaxify({"xRange":25,"yRange":25});
        $('#midsole-shoe-shadow').plaxify({"xRange":95,"yRange":95});

        midsoleSetupComplete = true;
    }

    show_midsole_hotspots();
    $.plax.enable({ "activityTarget": $('#midsole')});
}
function reset_midsole()
{
    hide_midsole_hotspots();
    $.plax.disable();
}
function show_midsole_hotspots() {
    $('#midsole_pop1').fadeIn('slow');
}
function hide_midsole_hotspots() {
    $('#midsole_pop1').animate({opacity: 0}, 'slow', function(){$(this).css('display', 'none').css('opacity','1')});
}



function setup_sole()
{
    if(!soleSetupComplete) {


        $('#video_sole_1').css('right', "-185px").css('top', (shoeOffsetTop+120)+"px").css('opacity', '0');
        $('#video_sole_1').animate(
            {right: ($(window).width()-shoeOffsetLeft-940)+"px", opacity: '1'},
            600,
            function() { $('#video_sole_1').plaxify({"xRange":60,"yRange":60}); }
        );

        $('#video_lbl_sole_1').css('right', "-125px").css('top', (shoeOffsetTop+150)+"px").css('opacity', '0');
        $('#video_lbl_sole_1').animate(
            {right: ($(window).width()-shoeOffsetLeft-940)+"px", opacity: '1'},
            600,
            function() { $('#video_lbl_sole_1').plaxify({"xRange":60,"yRange":60}); }
        );

        $('#detail_sole_1').css('right', "-185px").css('top', (shoeOffsetTop+60)+"px").css('opacity', '0');
        $('#detail_sole_1').animate(
            {right: ($(window).width()-shoeOffsetLeft-940)+"px", opacity: '1'},
            600,
            function() { $('#detail_sole_1').plaxify({"xRange":60,"yRange":60}); }
        );

        $('#detail_lbl_sole_1').css('right', "-185px").css('top',  (shoeOffsetTop+90)+"px").css('opacity', '0');
        $('#detail_lbl_sole_1').animate(
            {right:  ($(window).width()-shoeOffsetLeft-900)+"px", opacity: '1'},
            800,
            function() { $('#detail_lbl_sole_1').plaxify({"xRange":100,"yRange":100}); }
        );

        $('#detail_sole_2').css('left', "-185px").css('top', (shoeOffsetTop+20)+"px").css('opacity', '0');
        $('#detail_sole_2').animate(
            {left: '70px', opacity: '1'},
            800,
            function() { $('#detail_sole_2').plaxify({"xRange":60,"yRange":60}); }
        );

        $('#detail_lbl_sole_2').css('left', "-185px").css('top', (shoeOffsetTop+50)+"px").css('opacity', '0');
        $('#detail_lbl_sole_2').animate(
            {left: '100px', opacity: '1'},
            600,
            function() { $('#detail_lbl_sole_2').plaxify({"xRange":100,"yRange":100}); }
        );


        $('#quote_sole_1').css('bottom', $('#quote_sole_1').height()*-1+"px").css('left', (shoeOffsetLeft+520)+"px").css('opacity', '0');
        $('#quote_sole_1').animate(
            {bottom: ($(window).height()-shoeOffsetTop-500)+"px", opacity: '0.8'},
            500,
            function() { $('#quote_sole_1').plaxify({"xRange":200,"yRange":140}); }
        );

        $('#quote_sole_2').css('top', $('#quote_sole_2').height()*-1+"px").css('left', (shoeOffsetLeft+140)+"px").css('opacity', '0');
        $('#quote_sole_2').animate(
            {top: (shoeOffsetTop-60)+"px", opacity: '0.4'},
            400,
            function() { $('#quote_sole_2').plaxify({"xRange":60,"yRange":20}); }
        );

        $('#sole .line1').plaxify({"xRange":200,"yRange":100});
        $('#sole .line2').plaxify({"xRange":140,"yRange":50});
        $('#sole .line3').plaxify({"xRange":120,"yRange":40});
        $('#sole .line4').plaxify({"xRange":100,"yRange":30});
        $('#sole .line5').plaxify({"xRange":80,"yRange":20});
        $('#sole .line6').plaxify({"xRange":60,"yRange":10});
        $('#sole-bg').plaxify({"xRange":25,"yRange":25});
        $('#sole-shoe-shadow').plaxify({"xRange":95,"yRange":95});

        soleSetupComplete = true;
    }

    if(scrollDirection == 'up') show_sole_hotspots();
    $.plax.enable({ "activityTarget": $('#sole')});
}
function reset_sole()
{
    hide_sole_hotspots('slow');
    $.plax.disable();
}
function show_sole_hotspots() {
    $('#sole_pop1').fadeIn('slow');
    $('#sole_pop2').fadeIn('slow');
    $('#sole_pop3').fadeIn('slow');
}
function hide_sole_hotspots(speed) {
    $('#sole_pop1').animate({opacity: 0}, speed, function(){$(this).css('display', 'none').css('opacity','1')});
    $('#sole_pop2').animate({opacity: 0}, speed, function(){$(this).css('display', 'none').css('opacity','1')});
    $('#sole_pop3').animate({opacity: 0}, speed, function(){$(this).css('display', 'none').css('opacity','1')});
}
function animate_to_sole() {
    $('#shoe-build-sole img').addClass('hidden');;
    $('#shoe-build-sole img:first-child').removeClass('hidden');
    $('#shoe-build-flexfilm-front').hide();
    $('#shoe-build-flexfilm-back').hide();
    $('#shoe-build-upper-front').hide();
    $('#shoe-build-upper-back').hide();
    $('#shoe-build-progrid').hide();
    $('#shoe-build-midsole').hide();
    animationStep = 5;
    animationStepForward();
}
function animate_to_profile() {
    hide_sole_hotspots('fast');
    animationStep = 0;
    animationStepBackward();
}
function animationStepForward() {
    $('#shoe-build-sole img:not(.hidden)').addClass('hidden').next().removeClass('hidden');
    animationStep--;
    if(animationStep == 4 ) anim=setTimeout("animationStepForward()",600);
    else if(animationStep > 0 ) anim=setTimeout("animationStepForward()",18);
    else show_sole_hotspots();
}
function animationStepBackward() {
    $('#shoe-build-sole img:not(.hidden)').addClass('hidden').prev().removeClass('hidden');
    animationStep++;
    if(animationStep < 5 ) anim=setTimeout("animationStepBackward()",50);
    if(animationStep == 4 ) {
        $('#shoe-build-flexfilm-front').show();
        $('#shoe-build-flexfilm-back').show();
        $('#shoe-build-upper-front').show();
        $('#shoe-build-upper-back').show();
        $('#shoe-build-progrid').show();
        $('#shoe-build-midsole').show();
    }
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
//    animateSelector();
    $('#shoe_scroller div.shoe_container').addClass('hidden');

    $('#men-scroll-'+colorBrowserCurrentItem).removeClass('hidden');

    $('#shoe_display').stop().animate({'right':$(window).width() - 500+"px"}, 500, function() {
        $('#shoe_display div.shoe_container').addClass('hidden');
        var slideImage = $('#men-disp-'+colorBrowserCurrentItem);
        slideImage.removeClass('hidden');
        slideImage.height($(window).height());
        $('#shoe_display').css('display', 'block').css('right',"0px");
        $('#shoe_scroller').css('display','none');
    });

    // Set Shop Now Link
    var shopURL = shoeBrowserGender=='m' ? mens_urls[colorBrowserCurrentItem-1] : womens_urls[colorBrowserCurrentItem-1];
    if( shopURL.length > 0 ) $('p#shopNowLink').html('<a href="'+shopURL+'" target="_blank">SHOP NOW</a>');
    else $('p#shopNowLink').html('Available 7/1');

    $('#shoe_scroller').css('right', ($('#shoe_scroller').width()*-1) + "px" );
    $('#shoe_scroller').stop().css('display', 'block').animate({'right':(documentGutterWidth+50)+"px"}, 500);

//    var newColor = (shoeBrowserGender=='m' ? mens_bg_colors[colorBrowserCurrentItem-1]:womens_bg_colors[colorBrowserCurrentItem-1]);
//    $('#zebra_stripe').css('background-color',newColor);
//    $('#zebra_stripe .color_b').fadeOut('fast', function(){
//        $('#zebra_stripe .color_b').css('background-color',newColor).show();
//    });
}


/***********************************************************
 Helper Functions
 **********************************************************/
$.fn.makeFancy = function() {

    var formSelect = $(this);
    var newId = $(this).attr('id') + "_fancy";

    var selectBoxContainer = $('<div id="'+newId+'">').addClass('fancySelect').html('<div class="selectBox"></div>');

    var dropDown = $('<ul>').addClass('dropDown');
    var selectBox = selectBoxContainer.find('.selectBox');

    formSelect.find('option').each(function(i){
        var option = $(this);
        if(i==formSelect.prop('selectedIndex')) selectBox.html(option.text());
        if(option.data('skip')) return true;
        var li = $('<li>',{ html:	option.text() });
        li.click(function(){
            selectBox.html(option.text());
            dropDown.trigger('hide');
            formSelect.val(option.val());
            return false;
        });
        dropDown.append(li);
    });

    selectBoxContainer.append(dropDown.hide());
    formSelect.hide().after(selectBoxContainer);

    dropDown.on('show',function(){
        if(dropDown.is(':animated')) return false;
        selectBox.addClass('expanded');
        dropDown.slideDown();
    }).on('hide',function(){
            if(dropDown.is(':animated')) return false;
            selectBox.removeClass('expanded');
            dropDown.slideUp();
        }).on('toggle',function(){
            if(selectBox.hasClass('expanded')) dropDown.trigger('hide');
            else dropDown.trigger('show');
        });

    selectBox.on('click', function(){
        dropDown.trigger('toggle');
        return false;
    });

    $(document).click(function(){
        dropDown.trigger('hide');
    });
}
