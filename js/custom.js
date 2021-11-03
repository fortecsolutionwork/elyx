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