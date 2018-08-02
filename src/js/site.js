$(".menu-toggle").on("click",function(e){
    e.preventDefault();
    $(".menu-toggle,#fancy-menu").toggleClass("active");
});
$(document).ready(function() {
    //carousels
    $('.owl-carousel.pointers').owlCarousel({
        loop: true,
        margin: 0,
        nav:false,
        responsiveClass: true,
        navText: ['<span class="arrow-button left">Previous</span>','<span class="arrow-button right">Previous</span>'],
        responsive: {
            0: {
                items: 1
            },
            
            1400: {
                items: 3,
                dots: false,
                loop: false
            }
        }
    });
    $('.owl-carousel.stats').owlCarousel({
        loop: true,
        margin: 0,
        nav:false,
        dots:true,
        responsiveClass: true,
        navText: ['<span class="arrow-button left">Previous</span>','<span class="arrow-button right">Previous</span>'],
        responsive: {
            0: {
                items: 1,
                nav:false
            },
            768:{
                items: 1,
                nav:true
            },
            1400: {
                items: 3,
                nav: true
            }
        }
    });
})
// sticki from css-tricks.com
$('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
    // On-page links
    if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
        && 
        location.hostname == this.hostname
    ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 1000, function() {
                // Callback after animation
                // Must change focus!
                var $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                return false;
                } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
                };
            });
        }
    }               
});

//popup video
var ytIframe = $('#popup iframe'),
    ytSrc = ytIframe.attr('src'),
    ytID = ytSrc.replace('https://www.youtube.com/embed/','');

$('.popup-close').on('click',function(e){ 
    e.preventDefault();
    $('#popup').hide();
    ytIframe.attr('src',ytSrc);

  }) 

  $('.video-button').on('click',function(e){ 
    e.preventDefault();
    $('#popup').show();
    ytIframe.attr('src',ytSrc+'?version=3&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;&amp;mute=1;&amp;playlist='+'&amp;loop=1');

  }) 
//   ?version=3&amp;rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1&amp;&amp;mute=1;&amp;playlist=D-UmfqFjpl0&amp;loop=1