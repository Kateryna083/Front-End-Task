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
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
});

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}
