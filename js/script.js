$(function () {

    // Banner slider 
    $('#banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 2000,
        dots: true,
    });

    // About Video 
    $('.venobox').venobox({
        framewidth: '800px',        // default: ''
        frameheight: '500px',       // default: ''
        border: '10px',             // default: '0'
        bgcolor: '#e23e38',         // default: '#fff'
        titleattr: 'data-title',    // default: 'title'
        numeratio: true,            // default: false
        infinigall: true            // default: false
    });

    

    // Testimonial slider 
    $('.sliding').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        speed: 2000,

        //Responsive//
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]
    });

    // CountertUp start
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

  

    // Our Partner slider 
   
    $('.partner_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        speed: 2000,
        prevArrow:'<i class="far fa-arrow-alt-circle-left preview"></i>',
        nextArrow:'<i class="far fa-arrow-alt-circle-right next"></i>',

        //Responsive//
         responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 576,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]
    });

    // sticky menu 

    var offset = $('.main_menu').offset().top;

    $(window).scroll(function(){
        var scrolling = $(this).scrollTop();
        if(scrolling>offset){
            $('.main_menu').addClass('menu_fix');
        }
        else{
            $('.main_menu').removeClass('menu_fix');
        }

    });

    
    // scroll top
    $('.scrollTop').click(function(){
        $('html,body').animate({
            scrollTop: 0,
        },2000);
    });

    $(window).scroll(function(){
        var scrolling2 = $(this).scrollTop();

        if(scrolling2>150){
            $('.scrollTop').fadeIn();
        }
        else{
            $('.scrollTop').fadeOut();
        }
    });

    $('.navbar-toggler').click(function(){
        $('.collapse').toggle(5000);
    });


    //animation scroll js
    var html_body = $('html, body');
    $('nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 50
                }, 2000,);
                return false;
            }
        }
    });
});
