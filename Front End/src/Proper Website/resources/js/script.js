$(document).ready(function () {

    //    FOR FIXED NAVIGATION

    $('.js--section-features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
    });

    //    SCROLL BUTTONS
    $('.js--scroll-to-register').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-form').offset().top
        }, 1000);
    });

    $('.js--scroll-to-contacts').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--contact-list').offset().top
        }, 1000);
    });

    $('.js--reach-about').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section-features').offset().top
        }, 1000);
    });

    $('.js--reach-event').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--this-event').offset().top
        }, 1000);
    });
    
    $('.js--reach-mentor').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--this-mentors').offset().top
        }, 1000);
    });
   
    $('.js--reach-pictures').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--this-photo').offset().top
        }, 1000);
    });
    
    $('.js--reach-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--this-plan').offset().top
        }, 1000);
    });



});
