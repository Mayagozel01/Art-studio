var galleryTop = new Swiper('.gallery-top', {
  slidesPerView: 1,  
  loop: true,
  loopedSlides: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
  direction: 'vertical',
  slidesPerView: 4,
  slideToClickedSlide: true,
  scrollbar: true,
  spaceBetween: 10,
  loopedSlides: 50,
  loop: true,

});

galleryTop.controller.control = galleryThumbs;
galleryThumbs.controller.control = galleryTop;