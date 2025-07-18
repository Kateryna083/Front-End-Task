// const swiper = new Swiper(".swiper-container", {
//   loop: true,
//   navigation: {
//     nextEl: ".btn-go-right",
//     prevEl: ".btn-go-left",
//   },
//   slidesPerView: 1,
// });

const swiper = new Swiper(".swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true, // Якщо хочеш, щоб слайди крутились по колу
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction", // або "bullets", "progressbar"
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});
