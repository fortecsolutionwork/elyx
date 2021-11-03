// prelaoder
$(window).on('load', function () { // makes sure the whole site is loaded 
  $('#status').fadeOut(); // will first fade out the loading animation 
  $('.preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
  $('body').delay(350).css({ 'overflow': 'visible' });
})

// header

$(function () {
  $(window).on("scroll", function () {
    if ($(window).scrollTop() > 50) {
      $(".main_header").addClass("fixed");
    } else {
      $(".main_header").removeClass("fixed");
    }
  });
});

/* banner slider */
$('.banner_slider').slick({
dots: true,
infinite: true,
speed: 500,
fade: true,
cssEase: 'linear',
autoplay: true,
autoplaySpeed: 2000,
});

/* counter */
$('.timer').each(function() {
var $this = $(this), finalDate = $(this).data('countdown');
$this.countdown(finalDate, function(event) {
$this.html(event.strftime('<div><span>%D</span>Days</div> <div><span>%H</span>Hours</div> <div><span>%M</span>Minutes</div> <div><span>%S</span>Seconds</div>'));
});
});


$('.time_left span').each(function() {
    var $this = $(this), finalDate = $(this).data('countdown');
    $this.countdown(finalDate, function(event) {
      $this.html(event.strftime('%D:%H:%M:%S'));
    });
  });


/* testimonial Slider */
  $('.testimonials_slider').slick({
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 500,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
    });


    // hamburger menu
    $('.humburger-menu').click( function(){
      $('.list-inline').toggleClass('active');
      $(this).toggleClass('active');
    });