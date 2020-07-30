
$(document).ready(function() {
    var scrollBarContent = $(".item-content");//For Content
    var scrollBarImage = $(".img");//For Image
    var scrollTop = $(".scrollTop");//For Top
     var toggle = $(".container"); //For navbar toggle slider
    var ImageNavbar =$(".ImageNavbar");//For ImageNavbar inside  Image

    $(toggle).css("display","none");//For navbar none
     
    
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
         if (topPos > 1050 && topPos < 1650) {
            $(toggle).css("background","rgba(102, 51, 153, 1.1)");
            $(toggle).slideDown('slow');
        }else if(topPos > 1800 && topPos < 3100){
            $(toggle).css("background","rgba(0, 0, 0, 0.1)");
            $(toggle).slideDown('slow');
        }else if(topPos > 3200 && topPos < 4000){
            $(toggle).css("background","brown");
            $(toggle).slideDown('slow');
        }else{
            $(toggle).slideUp('slow');
        }
    }); // scroll END
    
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos < 1000) {
        $(ImageNavbar).css("position", "fixed");

        } else {
          $(ImageNavbar).css("position", "static");
        }

    });

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


    //For Content
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 950) {
        $(scrollBarContent).css("opacity", "1");

        } else {
        $(scrollBarContent).css("opacity", "0");
        }

    }); // scroll END

    //For Image
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        if (topPos > 800) {
        $(scrollBarImage).css("opacity", "1");

        } else {
        $(scrollBarImage).css("opacity", "0");
        }

    }); // scroll END

})