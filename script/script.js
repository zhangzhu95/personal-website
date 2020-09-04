$(document).ready(function(){
    $('#menu-experience').click(() => {
        $('html, body').animate({
            scrollTop: $('.section-experience').offset().top
        }, 200);
    });  

    $('#menu-work').click(() => {
        $('html, body').animate({
            scrollTop: $('.section-work').offset().top
        }, 200);
    });

    $('#menu-testimonials').click(() => {
        $('html, body').animate({
            scrollTop: $('.section-testimonials').offset().top
        }, 200);
    });

    $('#menu-companies').click(() => {
        $('html, body').animate({
            scrollTop: $('.section-companies').offset().top
        }, 200);
    });
})