// $(function () {
//     'use strict';

//     $(window).on('load', function () {
//         $('.main-load').fadeOut(700, function () {
//             $(this).remove();
//         });
//         new WOW().init();
//     });

// });
$(document).ready(function () {
    
        'use strict';
setTimeout(function(){ 
    $('.main-load').fadeOut(500,function(){
        $(this).remove();
    });

    $('body').addClass('t-auto');
    new WOW().init();
}, 1000);


    
    
    
    $('.currency button').click(function () {
        
        if($('.drop-menu').hasClass('drop-show')){
            $('.drop-menu').removeClass('drop-show');
            // $('.filter-ul .currency .account-b').removeClass('radus')
        } else{
            
            $(this).parents(".currency").children('.drop-menu').addClass('drop-show');
        }
    }) 
    
    $(document).click(function(){
        $('.drop-menu').removeClass('drop-show');
        $('.soc-drop').removeClass('trans-none');
        $('.filter-ul .currency .account-b').removeClass('radus')
    });
    $('.drop-menu , .currency button , .set-drop').click(function(e){
        e.stopPropagation();
    });
    
    
    $('.filter-ul .currency .account-b').click(function () {
        $(this).toggleClass('radus')
    })
    
    
    
    
    
    
    
    
    // toggler button animate
    var span = $('.navbar button span'),
        overlay = $('.main-nav .overlay'),
        collapse = $('.navbar-collapse'),
        navItem = $('.navbar-toggler, .nav-item'),
        button = $('.navbar button'),
        toggler = 'nav-toggler';
    button.click(function () {
        span.toggleClass('toggler');
        
    });

    
    overlay.click(function () {
        collapse.toggleClass('translate-right');
        overlay.toggleClass('translate-left');
        span.toggleClass(toggler);
    });
    navItem.click(function () {
        collapse.toggleClass('translate-right');
        overlay.toggleClass('translate-left');
        span.toggleClass(toggler);
    });
    
    //    nav fixed
//    $(window).scroll(function () {
//        if ($(window).scrollTop() > 300)
//            {
//                $('.main-nav').addClass('fixed');
//                
//            } else {
//                $('.main-nav').removeClass('fixed');
//            }
//    })

    $('.main-filter .grid').click(function () {
        
        $('.main-filter .home-boxes').removeClass('full-box');
        $(this).addClass('d-none');
        $('.main-filter .list').removeClass('d-none');
        $('.main-filter .home-boxes .row >a').addClass('col-md-4');
        
    })
    $('.main-filter .list').click(function () {
        
        $('.main-filter .home-boxes').addClass('full-box');
        $(this).addClass('d-none');
        $('.main-filter .grid').removeClass('d-none');
        $('.main-filter .home-boxes .row >a').removeClass('col-md-4');
        
    })
    
    
    
//    add post img remove
    $('.mainpost .post-imgs .imageslist .remove').click(function () {
//        $(this).parent().fadeOut()
        alert('dhjgf')
    })
    

    
//    post drop function
    $('.mainpost .post-type button').click(function () {
        $(this).children('i').toggleClass('rotate')
    })
    $('.mainpost .post-type label').click(function () {
        $('.mainpost .post-type .main span').text($(this).text());
        $('.mainpost .post-type .col-main').removeClass('show');
        $('.mainpost .post-type .main i').removeClass('rotate')
    })
    
    
    $('#t3').keyup(function(){
        
        var len = $(this).val().length;
        var max = 700;
        
        if(max > len){
            $('#enc').html('');
            $('#enc').text(len);
            $(this).css('borderColor', '#ddd');
            $('#valid').text('')
        }else{
            $('#enc').text(max);
            $(this).attr('maxlength', max).css('borderColor', 'red');
            $('#valid').text('الحد الاقصى ' + max + ' حرف')
        }
    });
    
//    seen password
    $('.login i').click(function () {
        
        if($('#toggle').is(':checked')){
            
            $('.pass').attr('type', 'password');
            
        } else {
            
            $('.pass').attr('type', 'text');
            
        }
    })

    // ADD PRODUCT TO FAVOURITE 
    $('.fav-box img').click(function(){
        $('.fav-box').toggleClass('addtofav');
    });

    // SHOW SELLER  NUMBER 
    $('.call-box').click(function(){
        $('.call-box').toggleClass('show-num ');
    });

    




    // PRODUCT SLIDER 
    $('.product-slider').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    //  RELATED PRODUCTS 
    $('.related-slider').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: ["<i class='fa fa-chevron-right'></i>", "<i class='fa fa-chevron-left'></i>"],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


    $('.mazad-count .increase-price').click(function(){
        var mazad_input = $(this).parent().find('input');
        $(mazad_input).val(+$(mazad_input).val() + 100) ;
        console.log(mazad_input.val());
    });

    $(document).on('click','#imageslist .remove',function(){
        $(this).parent('div').remove();
    });

});


    


























