const swiper = new Swiper('.slider__swiper', {
    slidesPerView: 1,
    spaceBetween: 35,
    loop: true,
    

    navigation: {
      nextEl: '.slider__button-next',
      prevEl: '.slider__button-prev',
    },
    breakpoints: {
        611: {
            slidesPerView: 3,
            spaceBetween: 35, 
        }
    }
  
  });

  const swiper2 = new Swiper('.new__slider-1', {
    slidesPerView: 1,
    spaceBetween: 15,
    loop: true,
    breakpoints: {
        611: {
            slidesPerView: 3,
            spaceBetween: 35, 
        }
    
    }
  });

  const swiper3 = new Swiper('.slider__swiper-2', {
    slidesPerView: 1,
    spaceBetween: 35,
    loop: true,
    breakpoints: {
        611: {
            slidesPerView: 3,
            spaceBetween: 35, 
        }
    
    },
    

    navigation: {
      nextEl: '.new__button-next-2',
      prevEl: '.new__button-prev-2',
    },
  
  });

  const swiper4 = new Swiper('.career__swiper', {
    slidesPerView: 1,
    spaceBetween: 35,
    direction: 'vertical',
    loop: true,
    breakpoints: {
        890: {
            slidesPerView: 3,
            spaceBetween: 35,
            direction: 'horizontal',
        },
        611: {
            direction: 'horizontal',
            slidesPerView: 1,
            spaceBetween: 35,
        },
        300: {
            direction: 'vertical',
            slidesPerView: 'auto',
            spaceBetween: 10,
        }
    
    },
    

    navigation: {
      nextEl: '.career__button-next',
      prevEl: '.career__button-prev',
    },
  
  });

  const swiper5 = new Swiper('.catalog__swiper-1', {
    slidesPerView: 'auto',
    spaceBetween: 35,
    breakpoints: {
    
    
    },
  
  });

  const swiper6 = new Swiper('.catalog__swiper-2', {
    slidesPerView: 'auto',
    spaceBetween: 35,
    breakpoints: {
    
    
    },
  
  });

  const swiper7 = new Swiper('.catalog__swiper-3', {
    slidesPerView: 'auto',
    spaceBetween: 35,
    breakpoints: {
    
    
    },
  
  });
