$( function(){
//Slider 
    "use strict";
    var windH  = $(window).height(),
        upperH = $('.upper-bar').innerHeight(),
        navH   = $('.navbar').innerHeight();

        $('.slider, .carousel-item').height(windH - (upperH + navH));
//shuffle work 
        $('.featured-work ul li').on('click', function(){
            $(this).addClass('active').siblings().removeClass('active');
            
            if($(this).data('class') === 'all') {
                $('.featured-work .shuffle .col-sm').css('opacity' , 1);
            } else { 

                $('.featured-work .shuffle .col-sm').css('opacity' , '.2');
                $($(this).data('class')).parent().css('opacity' , 1);
            }
        });
});