var swiper = new Swiper('#sp-slider', {
  slidesPerView: 1,
  freeMode: false,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  centeredSlides: false,
  navigation: {
    nextEl: '.sp.swiper-button-next',
    prevEl: '.sp.swiper-button-prev',
  }
});

var swiper = new Swiper('#ba-testi', {
  slidesPerView: 1,
  spaceBetween: 30,
  freeMode: false,
  loop: false,
  centeredSlides: false,
  navigation: {
    nextEl: '.ba.swiper-button-next',
    prevEl: '.ba.swiper-button-prev',
  }
});

var swiper = new Swiper('#faq-slider', {
  slidesPerView: "auto",
  freeMode: false,
  loop: true,
  centeredSlides: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    480: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 4,
      freeMode: false,
    },
    1024: {
      slidesPerView: 4,
    },
    1200: {
      slidesPerView: 5,
      freeMode: false,
    },
  }
});

$('.product-slider').slick({
  arrows: true,
  autoplay: true,
  loop: true,
});

$('.for-app-btn, #app-download').on('click', function () {
  $('.for-app').addClass('overlay-show');
});
$('.btn-close-da').on('click', function () {
  $('.for-app').removeClass('overlay-show');
});

$('#popup-btn-1').on('click', function () {
  $('.popup-content-overlay').addClass('overlay-show');
  $('#facial').addClass('popup-show');
  $('body').addClass('no-scroll');
});
$('#popup-btn-2').on('click', function () {
  $('.popup-content-overlay').addClass('overlay-show');
  $('#st').addClass('popup-show');
  $('body').addClass('no-scroll');
});
$('#popup-btn-3').on('click', function () {
  $('.popup-content-overlay').addClass('overlay-show');
  $('#pt').addClass('popup-show');
  $('body').addClass('no-scroll');
});
$('#popup-btn-4').on('click', function () {
  $('.popup-content-overlay').addClass('overlay-show');
  $('#pp').addClass('popup-show');
  $('body').addClass('no-scroll');
});
$('#popup-btn-5').on('click', function () {
  $('.popup-content-overlay').addClass('overlay-show');
  $('#ll').addClass('popup-show');
  $('body').addClass('no-scroll');
});
$('#popup-btn-6').on('click', function () {
  $('.popup-content-overlay').addClass('overlay-show');
  $('#sr').addClass('popup-show');
  $('body').addClass('no-scroll');
});
$('#popup-btn-7').on('click', function () {
  $('.popup-content-overlay').addClass('overlay-show');
  $('#inject').addClass('popup-show');
  $('body').addClass('no-scroll');
});
$('#popup-btn-8').on('click', function () {
  $('.popup-content-overlay').addClass('overlay-show');
  $('#hr').addClass('popup-show');
  $('body').addClass('no-scroll');
});
$('#popup-product').on('click', function () {
  $('.popup-content-overlay').addClass('overlay-show');
  $('.product-popup').addClass('popup-show');
});
$('.btn-close').on('click', function () {
  $('.popup-content-overlay').removeClass('overlay-show');
  $('.popup-content').removeClass('popup-show');
  $('.product-popup').removeClass('popup-show');
  $('body').removeClass('no-scroll');
});
$('.nav-link.button, .fix-menu-link.button').on('click', function () {
  $('.for-app').addClass('overlay-show');
});
$('.btn-close-da').on('click', function () {
  $('.for-app').removeClass('overlay-show');
});

$('#hamburger-menu').on('click', function () {
  $('.menu-body').addClass('menu-body-show');
});
$('.btn-close-menu').on('click', function () {
  $('.menu-body').removeClass('menu-body-show');
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $(".nav-mobile").addClass("dark");
    $(".hamburger .line").addClass("white");
    $(".logo-fix").addClass("no-filter");
    $(".logo-mobile").addClass("white");
  } else {
    $(".nav-mobile").removeClass("dark");
    $(".hamburger .line").removeClass("white");
    $(".logo-fix").removeClass("no-filter");
    $(".logo-mobile").removeClass("white");
  }
});

$('.blog').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  autoplay: false,
  autoplaySpeed: 2000
});

$(window).on("scroll", function () {
  var scrollPos = $(window).scrollTop();
  if (scrollPos <= 50) {
    $(".nav-black-blog").addClass("hide-top");
  } else {
    $(".nav-black-blog").removeClass("hide-top");
  }
});

(function () {

  var doc = document.documentElement;
  var w = window;

  var prevScroll = w.scrollY || doc.scrollTop;
  var curScroll;
  var direction = 0;
  var prevDirection = 0;

  var header = document.getElementById('menu-black');

  var checkScroll = function () {

    /*
    ** Find the direction of scroll
    ** 0 - initial, 1 - up, 2 - down
    */

    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      //scrolled up
      direction = 2;
    }
    else if (curScroll < prevScroll) {
      //scrolled down
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  var toggleHeader = function (direction, curScroll) {
    if (direction === 2 && curScroll > 70) {

      //replace 52 with the height of your header in px

      header.classList.remove('hide');
      prevDirection = direction;
    }
    else if (direction === 1) {
      header.classList.add('hide');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);

})();

AOS.init({
  easing: 'ease-in-out-sine'
});

function onMouseWheel(e) {
  console.log(e);
  clearTimeout($.data(this, 'timer'));

  $(".swiper-wrapper").addClass('mousewheel');

  $.data(this, 'timer', setTimeout(function () {
    $(".swiper-wrapper").removeClass('mousewheel')

  }, 250));
};
window.addEventListener('mousewheel', onMouseWheel, false)
window.addEventListener('DOMMouseScroll', onMouseWheel, false)


$(document).ready(function () {
  var submitIcon = $('.searchbox-icon');
  var inputBox = $('.searchbox-input');
  var searchBox = $('.searchbox');
  var isOpen = false;
  submitIcon.click(function () {
    if (isOpen == false) {
      searchBox.addClass('searchbox-open');
      inputBox.focus();
      isOpen = true;
    } else {
      searchBox.removeClass('searchbox-open');
      inputBox.focusout();
      isOpen = false;
    }
  });
  submitIcon.mouseup(function () {
    return false;
  });
  searchBox.mouseup(function () {
    return false;
  });

});

$(function () {
  $(".searchbox-icon").click(function () {
    $(".box-icon").toggleClass("none");
  });
});



$('#close-step, #atc').on('click', function () {
  $('.popup-content-overlay').addClass('overlay-show');
  $('.popup-content').addClass('popup-show');
  $('.box-cart').addClass('cart-show');
});
$('#cancel-step, #close-cart').on('click', function () {
  $('.popup-content-overlay').removeClass('overlay-show');
  $('.box-cart').removeClass('cart-show');
});

$('#ing-popup').on('click', function () {
  $('.popup-content-overlay').addClass('overlay-show');
  $('.ingeredient-popup').addClass('popup-show');
});
$('.btn-close').on('click', function () {
  $('.popup-content-overlay').removeClass('overlay-show');
  $('.ingeredient-popup').removeClass('popup-show');
});

$(document).ready(function () {

  var quantitiy = 0;
  $('.quantity-right-plus').click(function (e) {

    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity = parseInt($('#quantity').val());

    // If is not undefined

    $('#quantity').val(quantity + 1);


    // Increment

  });

  $('.quantity-left-minus').click(function (e) {
    // Stop acting like a button
    e.preventDefault();
    // Get the field name
    var quantity = parseInt($('#quantity').val());

    // If is not undefined

    // Increment
    if (quantity > 0) {
      $('#quantity').val(quantity - 1);
    }
  });

});


jQuery().ready(function () {
  /* Custom select design */
  jQuery('.drop-down').append('<div class="button"></div>');
  jQuery('.drop-down').append('<ul class="select-list"></ul>');
  jQuery('.drop-down select option').each(function () {
    var bg = jQuery(this).css('background-image');
    jQuery('.select-list').append('<li class="clsAnchor"><span value="' + jQuery(this).val() + '" class="' + jQuery(this).attr('class') + '" style=background-image:' + bg + '>' + jQuery(this).text() + '</span></li>');
  });
  jQuery('.drop-down .button').html('<span class="selected-img" style=background-image:' + jQuery('.drop-down select').find(':selected').css('background-image') + '>' + jQuery('.drop-down select').find(':selected').text() + '</span>' + '<a href="javascript:void(0);" class="select-list-link"><img src="../img/chevron-down.svg"  class="arrow-flag"></a>');
  jQuery('.drop-down ul li').each(function () {
    if (jQuery(this).find('span').text() == jQuery('.drop-down select').find(':selected').text()) {
      jQuery(this).addClass('active');
    }
  });
  jQuery('.drop-down .select-list span').on('click', function () {
    var dd_text = jQuery(this).text();
    var dd_img = jQuery(this).css('background-image');
    var dd_val = jQuery(this).attr('value');
    jQuery('.drop-down .button').html('<span class="selected-img" style=background-image:' + dd_img + '>' + dd_text + '</span>' + '<a href="javascript:void(0);" class="select-list-link"><img src="../img/chevron-down.svg" class="arrow-flag"></a>');
    jQuery('.drop-down .select-list span').parent().removeClass('active');
    jQuery(this).parent().addClass('active');
    $('.drop-down select[name=options]').val(dd_val);
    $('.drop-down .select-list li').slideUp();
  });
  jQuery('.drop-down .button').on('click', 'a.select-list-link', function () {
    jQuery('.drop-down ul li').slideToggle();
  });
  /* End */
});

$(".link-item").hover(
  function () {
    $(".overlay-sb").addClass("showing");
  },
  function () {
    $(".overlay-sb").removeClass("showing");
  }
);
$(".sub-menu-item").hover(
  function () {
    $(".overlay-sb").addClass("showing");
  },
  function () {
    $(".overlay-sb").removeClass("showing");
  }
);
$('a[data-toggle="tab"]').on('click', function () {
  if ($(".nav-link").hasClass('active')) {
    $(".nav-link").removeClass('active');
  }
});

/*
$(document).ready(function () {

    var black_1 = $('.ingeredients'),
        black_1_gone = $('.history-section'),
        black_2 = $('.product-concern'),
        black_2_gone = $('.ps-blog');

    $(window).scroll(function () {
        var scroll = $(document).scrollTop(),
            section_1 = black_1.offset().top,
            section_2 = black_1_gone.offset().top,
            section_3 = black_2.offset().top,
            section_4 = black_2_gone.offset().top;

        if (scroll >= section_1) {
            $('.sticky-menu').addClass("dark");
        }
        if (scroll <= section_1) {
            $('.sticky-menu').removeClass("dark");
        }
        if (scroll >= section_1 && scroll < section_2) {
            $('.sticky-menu').addClass("dark");
        } else if (scroll > section_1 && scroll >= section_2) {
            $('.sticky-menu').removeClass("dark");
        }
        if (scroll >= section_3) {
            $('.sticky-menu').addClass("dark");
        }
        if (scroll >= section_3 && scroll < section_4) {
            $('.sticky-menu').addClass("dark");
        } else if (scroll > section_3 && scroll >= section_4) {
            $('.sticky-menu').removeClass("dark");
        }
    });

});
*/
