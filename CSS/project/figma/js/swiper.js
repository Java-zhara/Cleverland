let catalogSlider = null;
const mediaQuerySize = 767;

function catalogSliderInit() {
  if (!catalogSlider) {
    catalogSlider = new Swiper(".image-slider", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },

      breakpoints: {
        320: {
          slidesPerView: 1,
        },
        600: {
          slidesPerView: 2,
        },
      },
    });
  }
}

function catalogSliderDestroy() {
  if (catalogSlider) {
    catalogSlider.destroy();
    catalogSlider = null;
  }
}

// Если ширина экрана меньше или равна mediaQuerySize(767)
if (window.innerWidth <= mediaQuerySize) {
  // Инициализировать слайдер
  catalogSliderInit();
} else {
  // Уничтожить слайдер
  catalogSliderDestroy();
}

// те же действия при изменении ширины экрана
window.addEventListener("resize", () => {
  if (window.innerWidth <= mediaQuerySize) {
    catalogSliderInit();
  } else {
    catalogSliderDestroy();
  }
});
