$(document).ready(function () {

    if (window.location.protocol != 'http:') {
        return;
    }

    $("body").queryLoader2({
        percentage: true,
        completeAnimation: "grow"
    });

//    window.addEventListener('DOMContentLoaded', function () {
//        $("body").queryLoader2({
//            percentage: true,
//            completeAnimation: "grow"
//        });
//    });
});
