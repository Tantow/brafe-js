$(document).ready(function(){
    $('.intro').fadeIn(1000);
    $('.back-to-top').hide();
    $(window).scroll(function(){
        if ($(window).scrollTop() > $(window).height()) {
            $('.back-to-top').fadeIn();
        }else {
            $('.back-to-top').fadeOut();
        }
    });
    
    $('.back-to-top').click(function(){
        $('.back-to-top').fadeOut();
        $('html').animate({scrollTop: 0}, 500);
    })
});