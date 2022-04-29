var myCarousel = document.querySelector("#carousel-slider");

var overlay = document.getElementById("preloader");
let date = new Date();
let year = date.getFullYear();
console.log(year);
$("#year").text(year);
function dnone() {
  $("#preloader").delay(3000).addClass("d-none");
}
$(document).ready(function () {
  $("#preloader").addClass("opacity-0", 2500);
  $("#preloader").fadeOut();
  $("#transition").fadeOut();
});
var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    960: {
      items: 5,
    },
    1200: {
      items: 6,
    },
  },
});

let nav = true;
$(".navbar-toggler").click(function () {
  $("#side-nav").slideToggle("slow", function () {
    if ($(this).is(":visible")) $(this).css("display", "flex");
  });

  nav = false;
});
var myCarousel = document.querySelector("#carousel-slider");
//   var carousel = new bootstrap.Carousel(myCarousel, {
//     interval: 5000,
//     wrap: true,
//     pause: false,
//   });
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: 3,
  loop: true,
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    425: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
var overlay = document.getElementById("preloader");
let date = new Date();
let year = date.getFullYear();
console.log(year);
$("#year").text(year);
function dnone() {
  $("#preloader").delay(3000).addClass("d-none");
}
$(document).ready(function () {
  $("#preloader").addClass("opacity-0", 2500);
  $("#preloader").fadeOut();
  $("#transition").fadeOut();
});
var owl = $(".owl-carousel");
owl.owlCarousel({
  loop: true,
  // margin: 10,
  dots: false,
  responsive: {
    0: {
      items: 2,
    },
    600: {
      items: 4,
    },
    960: {
      items: 5,
    },
    1200: {
      items: 6,
    },
  },
});
//   owl.on("mousewheel", ".owl-stage", function (e) {
//     if (e.deltaY > 0) {
//       owl.trigger("next.owl");
//     } else {
//       owl.trigger("prev.owl");
//     }
//     e.preventDefault();
//   });
