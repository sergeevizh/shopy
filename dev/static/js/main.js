$(document).ready(function () {
  svg4everybody();
  $('img, a').on('dragstart', function (event) {
    event.preventDefault();
  });

  function add(item) {
    $(document).on('click', item, function () {
      $(this)
        .siblings()
        .removeClass('is-active');
      $(this).addClass('is-active');
    });
  }

  function toggle(selector) {
    $(document).on('click', selector, function () {
      $(this).toggleClass('is-active');
    });
  }
  const sliderDotsAddStyleLeft = function (params) {
    const container = $('.container');
    const dots = $('.slider-featured__dots');
    const posContainer = container.offset().left;
    const paddingContainer = parseInt(container.css('padding-left'));
    const halfHeigthDots = dots.height() / 2;
    dots.css({
      left: halfHeigthDots + paddingContainer + posContainer + `px`,
    });
  };

  const sliderFeatured = function () {
    const lineBg = $('.slider-featured__img');
    const slider = $('.slider-featured');
    let flag = true;
    const seconds = 6000;
    let timerItem;
    let timerBg;

    slider.slick({
      autoplay: true,
      infinite: true,
      pauseOnFocus: false,
      autoplaySpeed: seconds,
      cssEase: 'ease-in-out',
      slidesToScroll: 1,
      draggable: false,
      slidesToShow: 1,
      pauseOnHover: false,
      dots: true,
      dotsClass: 'slider-featured__dots',
      customPaging: function (slider, i) {
        return '<a class="slider-featured__dots__link"></a>';
      },
      arrows: false,
      responsive: [{
        breakpoint: 767.98,
        settings: {
          swipeToSlide: false,
          touchMove: false,
          draggable: false,
          swipe: false,
        },
      }, ],
    });

    $('.slider-featured__item').each(function (i, val) {
      if (i - 1 === 0 && flag === true) {
        $(this).addClass('slider-featured__item--active');
        lineBg.addClass('slider-featured__img--right');
        timerItem = setTimeout(() => {
          $(this).removeClass('slider-featured__item--active');
        }, seconds - 1400);
        timerBg = setTimeout(() => {
          lineBg.removeClass('slider-featured__img--right');
        }, seconds - 800);
        flag = false;
      }
    });

    slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
      const current = slick.$slides.get(currentSlide);
      $(current).addClass('slider-featured__item--active');
      lineBg.addClass('slider-featured__img--right');
      timerItem = setTimeout(() => {
        $(current).removeClass('slider-featured__item--active');
      }, seconds - 1400);
      timerBg = setTimeout(() => {
        lineBg.removeClass('slider-featured__img--right');
      }, seconds - 800);
    });

    $(document).on('click', '.slider-featured__dots__link', function (event) {
      clearTimeout(timerItem);
      clearTimeout(timerBg);
      lineBg.removeClass('slider-featured__img--right');
    });
  };

  const cards = function () {
    const colors = $('.card-prev__color');

    colors.each(function (i, val) {
      const dataColor = $(val).data('color');
      $(val).css('background-color', `${dataColor}`);
    });
    toggle('.new-arrivals__card__size');
    toggle('.card-prev__color');
    toggle('.new-arrivals__card__action');
  };

  const animLoadMoreBtn = function () {
    const rowArrivals = $('.new-arrivals__row');
    const rowProducts = $('.products__row');
    let clicked = true;

    $(document).on('click', '.load-more', function (e) {
      e.preventDefault();
      if (clicked) {
        clicked = false;
        $(this)
          .children(':first')
          .addClass('lds-ellipsis--infinite');
        if (rowArrivals) {
          setTimeout(() => {
            rowArrivals.append(
              '<div class="new-arrivals__item new-arrivals__item--anim"><div class="card-prev" title="Reebok Track Jacket"><a class="progressive replace card-prev__img" href="reebok-track-jacket.html" data-href="static/images/content/prev-product/img1.jpg"><img class="preview" src="static/images/content/prev-product/img1-mini.jpg" alt="Reebok Track Jacket" width="144" height="216"></a><div class="card-prev__header"><a class="card-prev__link" href="reebok-track-jacket.html"><h3 class="card-prev__title">Reebok Track Jacket</h3></a><span class="card-prev__price">100$</span></div><div class="card-prev__body"><div class="card-prev__block"><span class="card-prev__text">sizes</span><div class="size-product card-prev__size-product card-prev__size-product--small"><ul class="size-product__list"><li class="size-product__item"><span class="size-product__size">s</span></li><li class="size-product__item"><span class="size-product__size">m</span></li><li class="size-product__item"><span class="size-product__size">l</span></li><li class="size-product__item"><span class="size-product__size">xl</span></li></ul></div></div><ul class="card-prev__colors"><li class="card-prev__color" data-color="#e12e3f"></li><li class="card-prev__color" data-color="#34404b"></li><li class="card-prev__color" data-color="#3ab3ff"></li><li class="card-prev__color" data-color="#2fd967"></li></ul></div><div class="card-prev__footer"><div class="wishlist card-prev__wishlist"><ul class="wishlist__list wishlist__list--flex-end"><li class="wishlist__item" data-menu="share"><svg class="svg-sprite-icon icon-share icon"><use xlink:href="static/images/svg/symbol/sprite.svg#share"></use></svg></li><li class="wishlist__item" data-menu="buy"><svg class="svg-sprite-icon icon-buy icon"><use xlink:href="static/images/svg/symbol/sprite.svg#buy"></use></svg></li><li class="wishlist__item" data-menu="like"><svg class="svg-sprite-icon icon-like icon"><use xlink:href="static/images/svg/symbol/sprite.svg#like"></use></svg></li></ul></div></div></div></div><div class="new-arrivals__item new-arrivals__item--anim"><div class="card-prev" title="Reebok Track Jacket"><a class="progressive replace card-prev__img" href="reebok-track-jacket.html" data-href="static/images/content/prev-product/img2.jpg"><img class="preview" src="static/images/content/prev-product/img2-mini.jpg" alt="Reebok Track Jacket" width="144" height="216"></a><div class="card-prev__header"><a class="card-prev__link" href="reebok-track-jacket.html"><h3 class="card-prev__title">Reebok Track Jacket</h3></a><span class="card-prev__price">100$</span></div><div class="card-prev__body"><div class="card-prev__block"><span class="card-prev__text">sizes</span><div class="size-product card-prev__size-product card-prev__size-product--small"><ul class="size-product__list"><li class="size-product__item"><span class="size-product__size">s</span></li><li class="size-product__item"><span class="size-product__size">m</span></li><li class="size-product__item"><span class="size-product__size">l</span></li><li class="size-product__item"><span class="size-product__size">xl</span></li></ul></div></div><ul class="card-prev__colors"><li class="card-prev__color" data-color="#e12e3f"></li><li class="card-prev__color" data-color="#34404b"></li><li class="card-prev__color" data-color="#3ab3ff"></li><li class="card-prev__color" data-color="#2fd967"></li></ul></div><div class="card-prev__footer"><div class="wishlist card-prev__wishlist"><ul class="wishlist__list wishlist__list--flex-end"><li class="wishlist__item" data-menu="share"><svg class="svg-sprite-icon icon-share icon"><use xlink:href="static/images/svg/symbol/sprite.svg#share"></use></svg></li><li class="wishlist__item" data-menu="buy"><svg class="svg-sprite-icon icon-buy icon"><use xlink:href="static/images/svg/symbol/sprite.svg#buy"></use></svg></li><li class="wishlist__item" data-menu="like"><svg class="svg-sprite-icon icon-like icon"><use xlink:href="static/images/svg/symbol/sprite.svg#like"></use></svg></li></ul></div></div></div></div><div class="new-arrivals__item new-arrivals__item--anim"><div class="card-prev" title="Reebok Track Jacket"><a class="progressive replace card-prev__img" href="reebok-track-jacket.html" data-href="static/images/content/prev-product/img3.jpg"><img class="preview" src="static/images/content/prev-product/img3-mini.jpg" alt="Reebok Track Jacket" width="144" height="216"></a><div class="card-prev__header"><a class="card-prev__link" href="reebok-track-jacket.html"><h3 class="card-prev__title">Reebok Track Jacket</h3></a><span class="card-prev__price">100$</span></div><div class="card-prev__body"><div class="card-prev__block"><span class="card-prev__text">sizes</span><div class="size-product card-prev__size-product card-prev__size-product--small"><ul class="size-product__list"><li class="size-product__item"><span class="size-product__size">s</span></li><li class="size-product__item"><span class="size-product__size">m</span></li><li class="size-product__item"><span class="size-product__size">l</span></li><li class="size-product__item"><span class="size-product__size">xl</span></li></ul></div></div><ul class="card-prev__colors"><li class="card-prev__color" data-color="#e12e3f"></li><li class="card-prev__color" data-color="#34404b"></li><li class="card-prev__color" data-color="#3ab3ff"></li><li class="card-prev__color" data-color="#2fd967"></li></ul></div><div class="card-prev__footer"><div class="wishlist card-prev__wishlist"><ul class="wishlist__list wishlist__list--flex-end"><li class="wishlist__item" data-menu="share"><svg class="svg-sprite-icon icon-share icon"><use xlink:href="static/images/svg/symbol/sprite.svg#share"></use></svg></li><li class="wishlist__item" data-menu="buy"><svg class="svg-sprite-icon icon-buy icon"><use xlink:href="static/images/svg/symbol/sprite.svg#buy"></use></svg></li><li class="wishlist__item" data-menu="like"><svg class="svg-sprite-icon icon-like icon"><use xlink:href="static/images/svg/symbol/sprite.svg#like"></use></svg></li></ul></div></div></div></div><div class="new-arrivals__item new-arrivals__item--anim"><div class="card-prev" title="Reebok Track Jacket"><a class="progressive replace card-prev__img" href="reebok-track-jacket.html" data-href="static/images/content/prev-product/img4.jpg"><img class="preview" src="static/images/content/prev-product/img4-mini.jpg" alt="Reebok Track Jacket" width="144" height="216"></a><div class="card-prev__header"><a class="card-prev__link" href="reebok-track-jacket.html"><h3 class="card-prev__title">Reebok Track Jacket</h3></a><span class="card-prev__price">100$</span></div><div class="card-prev__body"><div class="card-prev__block"><span class="card-prev__text">sizes</span><div class="size-product card-prev__size-product card-prev__size-product--small"><ul class="size-product__list"><li class="size-product__item"><span class="size-product__size">s</span></li><li class="size-product__item"><span class="size-product__size">m</span></li><li class="size-product__item"><span class="size-product__size">l</span></li><li class="size-product__item"><span class="size-product__size">xl</span></li></ul></div></div><ul class="card-prev__colors"><li class="card-prev__color" data-color="#e12e3f"></li><li class="card-prev__color" data-color="#34404b"></li><li class="card-prev__color" data-color="#3ab3ff"></li><li class="card-prev__color" data-color="#2fd967"></li></ul></div><div class="card-prev__footer"><div class="wishlist card-prev__wishlist"><ul class="wishlist__list wishlist__list--flex-end"><li class="wishlist__item" data-menu="share"><svg class="svg-sprite-icon icon-share icon"><use xlink:href="static/images/svg/symbol/sprite.svg#share"></use></svg></li><li class="wishlist__item" data-menu="buy"><svg class="svg-sprite-icon icon-buy icon"><use xlink:href="static/images/svg/symbol/sprite.svg#buy"></use></svg></li><li class="wishlist__item" data-menu="like"><svg class="svg-sprite-icon icon-like icon"><use xlink:href="static/images/svg/symbol/sprite.svg#like"></use></svg></li></ul></div></div></div></div>'
            );
            $(this)
              .children(':first')
              .removeClass('lds-ellipsis--infinite');
            $('.card-prev__color').each(function (i, val) {
              const dataColor = $(val).data('color');
              $(val).css('background-color', `${dataColor}`);
            });

          }, 1000);
          setTimeout(() => {
            console.log('saaa');

            $('.new-arrivals__item').removeClass('new-arrivals__item--anim');
            clicked = true;
          }, 2000);
        }
        if (rowProducts) {
          setTimeout(() => {
            rowProducts.append(
              '<div class="products__item products__item--anim"><div class="card-prev" title="Reebok Track Jacket"><a class="progressive replace card-prev__img" href="reebok-track-jacket.html" data-href="static/images/content/prev-product/img1.jpg"><img class="preview" src="static/images/content/prev-product/img1-mini.jpg" alt="Reebok Track Jacket" width="144" height="216"></a><div class="card-prev__header"><a class="card-prev__link" href="reebok-track-jacket.html"><h3 class="card-prev__title">Reebok Track Jacket</h3></a><span class="card-prev__price">100$</span></div><div class="card-prev__body"><div class="card-prev__block"><span class="card-prev__text">sizes</span><div class="size-product card-prev__size-product card-prev__size-product--small"><ul class="size-product__list"><li class="size-product__item"><span class="size-product__size">s</span></li><li class="size-product__item"><span class="size-product__size">m</span></li><li class="size-product__item"><span class="size-product__size">l</span></li><li class="size-product__item"><span class="size-product__size">xl</span></li></ul></div></div><ul class="card-prev__colors"><li class="card-prev__color" data-color="#e12e3f"></li><li class="card-prev__color" data-color="#34404b"></li><li class="card-prev__color" data-color="#3ab3ff"></li><li class="card-prev__color" data-color="#2fd967"></li></ul></div><div class="card-prev__footer"><div class="wishlist card-prev__wishlist"><ul class="wishlist__list wishlist__list--flex-end"><li class="wishlist__item" data-menu="share"><svg class="svg-sprite-icon icon-share icon"><use xlink:href="static/images/svg/symbol/sprite.svg#share"></use></svg></li><li class="wishlist__item" data-menu="buy"><svg class="svg-sprite-icon icon-buy icon"><use xlink:href="static/images/svg/symbol/sprite.svg#buy"></use></svg></li><li class="wishlist__item" data-menu="like"><svg class="svg-sprite-icon icon-like icon"><use xlink:href="static/images/svg/symbol/sprite.svg#like"></use></svg></li></ul></div></div></div></div><div class="products__item products__item--anim"><div class="card-prev" title="Reebok Track Jacket"><a class="progressive replace card-prev__img" href="reebok-track-jacket.html" data-href="static/images/content/prev-product/img2.jpg"><img class="preview" src="static/images/content/prev-product/img2-mini.jpg" alt="Reebok Track Jacket" width="144" height="216"></a><div class="card-prev__header"><a class="card-prev__link" href="reebok-track-jacket.html"><h3 class="card-prev__title">Reebok Track Jacket</h3></a><span class="card-prev__price">100$</span></div><div class="card-prev__body"><div class="card-prev__block"><span class="card-prev__text">sizes</span><div class="size-product card-prev__size-product card-prev__size-product--small"><ul class="size-product__list"><li class="size-product__item"><span class="size-product__size">s</span></li><li class="size-product__item"><span class="size-product__size">m</span></li><li class="size-product__item"><span class="size-product__size">l</span></li><li class="size-product__item"><span class="size-product__size">xl</span></li></ul></div></div><ul class="card-prev__colors"><li class="card-prev__color" data-color="#e12e3f"></li><li class="card-prev__color" data-color="#34404b"></li><li class="card-prev__color" data-color="#3ab3ff"></li><li class="card-prev__color" data-color="#2fd967"></li></ul></div><div class="card-prev__footer"><div class="wishlist card-prev__wishlist"><ul class="wishlist__list wishlist__list--flex-end"><li class="wishlist__item" data-menu="share"><svg class="svg-sprite-icon icon-share icon"><use xlink:href="static/images/svg/symbol/sprite.svg#share"></use></svg></li><li class="wishlist__item" data-menu="buy"><svg class="svg-sprite-icon icon-buy icon"><use xlink:href="static/images/svg/symbol/sprite.svg#buy"></use></svg></li><li class="wishlist__item" data-menu="like"><svg class="svg-sprite-icon icon-like icon"><use xlink:href="static/images/svg/symbol/sprite.svg#like"></use></svg></li></ul></div></div></div></div><div class="products__item products__item--anim"><div class="card-prev" title="Reebok Track Jacket"><a class="progressive replace card-prev__img" href="reebok-track-jacket.html" data-href="static/images/content/prev-product/img3.jpg"><img class="preview" src="static/images/content/prev-product/img3-mini.jpg" alt="Reebok Track Jacket" width="144" height="216"></a><div class="card-prev__header"><a class="card-prev__link" href="reebok-track-jacket.html"><h3 class="card-prev__title">Reebok Track Jacket</h3></a><span class="card-prev__price">100$</span></div><div class="card-prev__body"><div class="card-prev__block"><span class="card-prev__text">sizes</span><div class="size-product card-prev__size-product card-prev__size-product--small"><ul class="size-product__list"><li class="size-product__item"><span class="size-product__size">s</span></li><li class="size-product__item"><span class="size-product__size">m</span></li><li class="size-product__item"><span class="size-product__size">l</span></li><li class="size-product__item"><span class="size-product__size">xl</span></li></ul></div></div><ul class="card-prev__colors"><li class="card-prev__color" data-color="#e12e3f"></li><li class="card-prev__color" data-color="#34404b"></li><li class="card-prev__color" data-color="#3ab3ff"></li><li class="card-prev__color" data-color="#2fd967"></li></ul></div><div class="card-prev__footer"><div class="wishlist card-prev__wishlist"><ul class="wishlist__list wishlist__list--flex-end"><li class="wishlist__item" data-menu="share"><svg class="svg-sprite-icon icon-share icon"><use xlink:href="static/images/svg/symbol/sprite.svg#share"></use></svg></li><li class="wishlist__item" data-menu="buy"><svg class="svg-sprite-icon icon-buy icon"><use xlink:href="static/images/svg/symbol/sprite.svg#buy"></use></svg></li><li class="wishlist__item" data-menu="like"><svg class="svg-sprite-icon icon-like icon"><use xlink:href="static/images/svg/symbol/sprite.svg#like"></use></svg></li></ul></div></div></div></div>'
            );
            $(this)
              .children(':first')
              .removeClass('lds-ellipsis--infinite');
            $('.card-prev__color').each(function (i, val) {
              const dataColor = $(val).data('color');
              $(val).css('background-color', `${dataColor}`);
            });

          }, 1000);
          setTimeout(() => {
            $('.products__item').removeClass('products__item--anim');
            clicked = true;
          }, 2000);
        }
      }
    });
  };

  const count = function () {
    $(document).on('click', '.plus', function () {
      var quantityNum = parseInt(
        $(this)
        .siblings('.quantity__count')
        .text()
      );
      if (quantityNum >= 1) {
        var btnMinus = $(this).siblings('.minus');
        $(this)
          .prev()
          .html(quantityNum + 1);
        btnMinus.removeClass('disable');
      }
    });

    $(document).on('click', '.minus', function (event) {
      var quantityNum = parseInt(
        $(this)
        .siblings('.quantity__count')
        .text()
      );

      if (quantityNum - 1 < 2) {
        $(this).addClass('disable');
      }
      $(this)
        .next()
        .html(quantityNum - 1);
    });
  };

  const sbSlide = function (params) {
    $(document).on('click', '.basket', function (params) {
      $('.header').addClass('slide-left');
      $('.content').addClass('slide-left');
      $('.footer').addClass('slide-left');

      $('.basket-user-menu')
        .addClass('basket-user-menu--is-active')
        .css({
          display: 'block',
        });
      $('.overlay').addClass('overlay--is-active');
      $('body').addClass('overflow');
    });
    $(document).on('click', '.overlay ', function (params) {
      $('.header').removeClass('slide-left');
      $('.content').removeClass('slide-left');
      $('.footer').removeClass('slide-left');
      $('.basket-user-menu').removeClass('basket-user-menu--is-active');
      setTimeout(() => {
        $('.overlay').removeClass('overlay--is-active');
        $('body').removeClass('overflow');
      }, 400);
    });
  };
  const removeItem = function (params) {
    $(document).on('click', '.btn-delete', function (params) {
      $(this)
        .closest('.product-selected')
        .addClass('product-selected--remove-item');
      setTimeout(() => {
        $(this)
          .closest('.product-selected')
          .remove();
      }, 600);
    });
  };
  const searchLine = function () {
    $('.search-button').click(function () {
      $('.search-line')
        .css({
          display: 'block',
        })
        .addClass('search-line--is-active');

      $('.header__logo').addClass('header--opacity');
      $('.header__nav-nav').addClass('header--opacity');
      $('.user-menu').addClass('header--opacity');
    });
  };

  const clickNoTarget = function () {
    $(document).mouseup(function (e) {
      var div = $('.form-search');
      if (
        !div.is(e.target) &&
        div.has(e.target).length === 0
      ) {
        $('.search-line').removeClass('search-line--is-active');
        $('.header__logo').removeClass('header--opacity');
        $('.header__nav-nav').removeClass('header--opacity');
        $('.user-menu').removeClass('header--opacity');
      }
    });
  };

  const modalOpen = function () {
    $(document).on('click', '.signup', function () {
      $('body').addClass('overflow');
      $('.overlay').addClass('overlay--is-active');
      setTimeout(() => {
        $('.modal-overlay').addClass('modal-overlay--is-active');
        $('.modal-signup').addClass('modal-signup--is-active');
      }, 100);
    });
    $(document).on('click', '.modal-overlay', function (e) {
      const div = $('.modal-signup');
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        $('.modal-signup').removeClass('modal-signup--is-active');

        setTimeout(() => {
          $('.overlay').removeClass('overlay--is-active');
          $('.modal-overlay').removeClass('modal-overlay--is-active');
          $('body').removeClass('overflow');
        }, 400);
      }
    });
  };

  const sliderBestSales = function () {
    $('.slider-best-sales').slick({
      infinite: false,
      slidesToScroll: 1,
      slidesToShow: 3,
      arrows: false,
      responsive: [{
          breakpoint: 767.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 479.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  };

  const sliderRelatedProducts = function () {
    $('.slider-related-products').slick({
      infinite: false,
      slidesToScroll: 1,
      slidesToShow: 4,
      arrows: false,
      responsive: [{
          breakpoint: 991.98,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 767.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 575.98,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 479.98,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],
    });
  };
  const sliderProductDetailsMain = function () {
    $('.product-details__main').slick({
      infinite: false,
      slidesToScroll: 1,
      slidesToShow: 1,
      arrows: false,
      fade: true,
      draggable: false,
      swipeToSlide: false,
      touchMove: false,
      swipe: false,
      asNavFor: '.product-details__nav',
    });
  };
  const sliderProductDetailsNav = function () {
    $('.product-details__nav').slick({
      infinite: false,
      slidesToScroll: 1,
      slidesToShow: 3,
      arrows: false,
      focusOnSelect: true,
      asNavFor: '.product-details__main',
    });
  };

  const clouseBtn = function () {
    $(document).on('click', '.close-btn', function () {
      $('.modal-signup').removeClass('modal-signup--is-active');
      $('.header').removeClass('slide-left');
      $('.content').removeClass('slide-left');
      $('.footer').removeClass('slide-left');
      $('.basket-user-menu').removeClass('basket-user-menu--is-active');
      setTimeout(() => {
        $('.overlay').removeClass('overlay--is-active');
        $('body').removeClass('overflow');
      }, 400);
    });
  };

  const rangeSlider = function () {
    var rangeSlider = $('.range-slider');
    var input0 = document.querySelector('.price-filtter__input-from');
    var input1 = document.querySelector('.price-filtter__input-to');
    var inputs = [input0, input1];
    for (let i = 0; i < rangeSlider.length; i++) {
      noUiSlider.create(rangeSlider[i], {
        start: [100, 1000],
        connect: true,
        tooltips: [
          wNumb({
            decimals: 0,
            suffix: '$',
          }),
          wNumb({
            decimals: 0,
            suffix: '$',
          }),
        ],
        range: {
          min: 0,
          max: 1200,
        },
      });
      rangeSlider[i].noUiSlider.on('update', function (values, handle) {
        inputs[handle].value = Math.round(values[handle]);
      });
      inputs.forEach(function (input, handle) {
        input.addEventListener('change', function () {
          rangeSlider[i].noUiSlider.setHandle(handle, this.value);
        });

        input.addEventListener('keydown', function (e) {
          var values = rangeSlider[i].noUiSlider.get();
          var value = Number(values[handle]);

          // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
          var steps = rangeSlider[i].noUiSlider.steps();

          // [down, up]
          var step = steps[handle];

          var position;

          // 13 is enter,
          // 38 is key up,
          // 40 is key down.
          switch (e.which) {
            case 13:
              rangeSlider[i].noUiSlider.setHandle(handle, this.value);
              break;

            case 38:
              // Get step to go increase slider value (up)
              position = step[1];

              // false = no step is set
              if (position === false) {
                position = 1;
              }

              // null = edge of slider
              if (position !== null) {
                rangeSlider[i].noUiSlider.setHandle(handle, value + position);
              }

              break;

            case 40:
              position = step[0];

              if (position === false) {
                position = 1;
              }

              if (position !== null) {
                rangeSlider[i].noUiSlider.setHandle(handle, value - position);
              }

              break;
          }
        });
      });
    }
  };

  const collapseSidebarLineMob = function () {
    $(document).on('click', '.sidebar__header--mob', function () {
      if (window.matchMedia('(max-width: 480px)').matches) {
        const line = $(this).closest('.sidebar__line--mob');
        if (!line.hasClass('is-active')) {
          line.addClass('is-active');
          const hHeader = $(this).outerHeight(true);
          const hBody = $(this)
            .siblings('.sidebar__body--mob')
            .outerHeight(true);
          line.css({
            height: hHeader + hBody + 'px',
          });
          return;
        }
        line.removeClass('is-active');
        line.height('');
      }
    });
  };

  add('.categories__item');
  toggle('.sizes__item');
  toggle('.brands__item');
  toggle('.wishlist__item');
  toggle('.size-product__item');



  sliderFeatured();
  sliderDotsAddStyleLeft();
  cards();
  animLoadMoreBtn();
  count();
  sbSlide();
  removeItem();
  searchLine();
  clickNoTarget();
  modalOpen();
  sliderBestSales();
  sliderRelatedProducts();
  sliderProductDetailsMain();
  sliderProductDetailsNav();
  clouseBtn();
  rangeSlider();
  collapseSidebarLineMob();
  $(window).on('resize', function (params) {
    svg4everybody({
      // nosvg: true, // shiv <svg> and <use> elements and use image fallbacks
      polyfill: true, // polyfill <use> elements for External Content
    });
    sliderDotsAddStyleLeft();
  });
});