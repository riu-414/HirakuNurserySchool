'use strict'

// fade
{
  $(function() {
    $(window).scroll(function() {
      $('.fade').each(function() {
        let pos = $(this).offset().top;
        let scroll = $(window).scrollTop();
        let windowH = $(window).height();

        if (scroll > pos - windowH + 200) {
          $(this).addClass('active');
        }
      });
    })
  });
}

// hamburger
{
  $(function() {
    $('.hamburger').click(function() {
      $('.hamburger').toggleClass('open');
      $('.hamburger__menu').toggleClass('open');
      $('.header__sp').toggleClass('open');
      $('.header__sp--img-call').toggleClass('open');
      $('.body').toggleClass('open');
    })
  });
}

// swiper
{
  const swiper = new Swiper('.swiper', {
    loop: true,
    speed:2000,
    effect: 'fade',

    autoplay: {
      delay: 3000,
    },
  });
}

// faq
{
  $(function() {
    $('.faq__btn').click(function() {
      if ( $(this).hasClass('faq__open') ) {
        $(this).toggleClass('faq__open');
        $(this).next('.faq__menu').toggleClass('faq__open');
      } else {
        $('.faq__btn').removeClass('faq__open');
        $('.faq__menu').removeClass('faq__open');
        $(this).addClass('faq__open');
        $(this).next('.faq__menu').addClass('faq__open');
      }
    })
  });
}

