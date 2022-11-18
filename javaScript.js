

//start team/people section 
$(document).ready(function() {
    $("#newproducts-carousel").owlCarousel({
        dots:false,
        autoplay: true,
        loop:true,
        margin:20,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        // nav:true,
        responsive:{
            0:{
                items:1
            },
            451:{
              items:2
            },
            601:{
                items:3
            },
            1101:{
                items:4
            }
        }
      });
    });
    //End team/people section 