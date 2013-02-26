/* IE PNG fix multiple filters */
(function ($) {
    if (!$) return;
    $.fn.extend({
        fixPNG: function (sizingMethod, forceBG) {
            if (!($.browser.msie)) return this;
            var emptyimg = "empty.gif"; //Path to empty 1x1px GIF goes here
            sizingMethod = sizingMethod || "scale"; //sizingMethod, defaults to scale (matches image dimensions)
            this.each(function () {
                var isImg = (forceBG) ? false : jQuery.nodeName(this, "img"),
    				imgname = (isImg) ? this.src : this.currentStyle.backgroundImage,
    				src = (isImg) ? imgname : imgname.substring(5, imgname.length - 2);
                this.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + src + "', sizingMethod='" + sizingMethod + "')";
                if (isImg) this.src = emptyimg;
                else this.style.backgroundImage = "url(" + emptyimg + ")";
            });
            return this;
        }
    });
})(jQuery);