$(document).ready(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 350) {
            $('#top-nav').addClass('nav-fixed-top');
        }

        if ($(window).scrollTop() < 351) {
            $('#top-nav').removeClass('nav-fixed-top');
        }
    });
});