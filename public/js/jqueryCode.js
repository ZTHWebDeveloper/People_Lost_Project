$(document).ready(function() {
    var scrollTop = $(".scrollTop");//For Top
    
    // JQUERY NAV TOGGLE
    $('#menu').bind('click',function(event){
        $('#mainnav ul').slideToggle();
    });

    $(window).resize(function(){  
        var w = $(window).width();  
        if(w > 768) {  
            $('#mainnav ul').removeAttr('style');  
        }  
    });

    //Jquery Register Form 

    $('.input').bind('click',function(event){
        $(this).animate({'fontSize':'1em'},'slow');
    });
      


    //Scoll Top
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 300) {
        $(scrollTop).css("opacity", "1");

        } else {
        $(scrollTop).css("opacity", "0");
        }

    }); // scroll END

    //Click event to scroll to top
    $(scrollTop).click(function() {
        $('html, body').animate({
        scrollTop: 0
        },2000);
        return false;

    }); // click() scroll top EMD
  });