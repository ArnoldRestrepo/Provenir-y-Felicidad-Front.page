$(function() {
    //Menu Responsive
    $(".hamburguesa").click(function(e) {
      e.preventDefault();
      $("#menu").fadeToggle("500", "swing");
    });

    //Scroll Top
    (function() {
        $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                scrollTop: target.offset().top - 65}, 1000);
                // return false;
                }
            }
        });
    })();

    // Cambiar Altura del menu cuando baja
    (function() {
      $(window).scroll(function(e) {
        e.stopPropagation();
        var i = 80,
            w = $(this).scrollTop(),
            n = $("nav");
        if (w >= i) {
          n.css("height","85").animate(3000);
        } else {
          n.css("height","100").animate(3000);
        }
      });
    })();

    $('.banner-imagenes').unslider({
      autoplay: true,
      // speed: 5000,
      delay: 4000,
      dots: true,
      nav: false
    });
    
    $('.banner-programas').unslider({
      autoplay: true,
      arrows: false,
      // speed: 5000,
      delay: 10000,
      dots: true,
      nav: false
    });

});