$(document).ready(function () {

    if (window.location.protocol != 'http:') {
        return;
    }

    if (navigator.userAgent.match(/(iPod|iPhone|iPad)/i)) {
        $("body").queryLoader2({
            percentage: true,
            completeAnimation: "grow"
        });
    }
    else {
        window.addEventListener('DOMContentLoaded', function () {
            $("body").queryLoader2({
                percentage: true,
                completeAnimation: "grow"
            });
        });
    }
});
