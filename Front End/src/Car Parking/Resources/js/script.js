$(document).ready(function(){
    $('.slider').slick({
        autoplay:true,
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'dots'
        // this dots used for making here a ul and li 

    });
    let hamberger = document.querySelector('.hamberger');
    let times= document.querySelector('.times');
    let mobileNav= document.querySelector('.mobile-nav');

    hamberger.addEventListener('click',function(){
        mobileNav.classList.add('open');

    });
    times.addEventListener('click',function(){
        mobileNav.classList.remove('open');


    });

});