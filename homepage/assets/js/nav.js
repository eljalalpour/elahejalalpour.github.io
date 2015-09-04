$(document).ready(function () {
    //change the integers below to match the height of your upper dive, which I called
    //banner.  Just add a 1 to the last number.  console.log($(window).scrollTop())
    //to figure out what the scroll position is when exactly you want to fix the nav
    //bar or div or whatever.  I stuck in the console.log for you.  Just remove when
    //you know the position.
    $(window).scroll(function () {

        console.log($(window).scrollTop());

        if ($(window).scrollTop() > 550) {
            $('#top-nav').addClass('navbar-fixed-top');
        }

        if ($(window).scrollTop() < 551) {
            $('#top-nav').removeClass('navbar-fixed-top');
        }
    });
});