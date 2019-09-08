  $(window).on("load",function() {
    setTimeout(function() {
      $('body').removeClass('body-overflow')
      $('.page-loader').fadeOut('slow', function() {
      });
    }, 1000);
  });

$(document).ready(function(){   

  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.js-scroller').fadeIn();
    } else {
        $('.js-scroller').fadeOut();
    }
  });

  $('.js-scroll').on('click', function(e) {
    e.preventDefault()

    $('html, body').animate(
      {
        scrollTop: $($(this).attr('href')).offset().top,
      },
      500,
      'linear'
    )
  })

  $('.js-check-theme').click(function() {
    if($(this).is(':checked'))
        $('body').addClass('body-theme-dark')
    else
        $('body').removeClass('body-theme-dark')
  });

  $(window).on("resize", function(){
    if(screen.width > 992){
      $('body').removeClass('body-menu-open');
      $('.header-nav-mobile').removeClass('header-nav-mobile--open');
      $('.js-hamburger').removeClass('is-active');
    }
  });

  if ($('.js-hamburger').length) {
    $('.js-hamburger').click(function(){
      var nav = $('.header-nav-mobile')
      $(this).toggleClass('is-active');
      nav.toggleClass('header-nav-mobile--open');
      $('body').toggleClass('body-menu-open');
    }); 
  };

  $('.nav-mobile-list a').not('.log').on('click', function(e) {
    e.preventDefault();
    $('.js-hamburger').trigger('click');
      $('html, body').animate({
          scrollTop: $($(this).attr('href')).offset().top,
      },900,'linear')
  });

  $('.header-nav-list a').not('.dropdown a').not('.header-nav-list-controls a').on('click', function(e) {
  e.preventDefault();
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top,
    },900,'linear')
  });

  $('.js-dropbtn').on('click', function(e) {
    e.preventDefault();
    $('.js-drop-content').toggle();
  }); 
  function wow() {
      new WOW().init();
  };
  wow();

});