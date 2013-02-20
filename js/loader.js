$(document).ready(function () {

    if (window.location.protocol != 'http:') {
        return;
    }

    $("body").queryLoader2({
//            barColor: "#6e6d73",
//        backgroundColor: "#fff1b0",
        percentage: true,
//            barHeight: 30,
        completeAnimation: "grow"
    });
});
