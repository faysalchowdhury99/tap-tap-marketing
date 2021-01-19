// Mobile Menu
$(document).ready(function () {
  $("#nav-icon").click(function () {
    $(this).toggleClass("open");
  });
});

// Video Play OnClick
$(".play-icon").on("click", function () {
  $("video").css({
    "z-index": 1,
    opacity: 1,
  });
  $("video").trigger("play");
  $(".video-img").hide();
  $(this).hide();
});
$("video").on("click", function () {
  console.log("a");
});

// Swiper JS Testimonial Carousel
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-next",
    prevEl: ".swiper-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetweenSlides: 50,
    },
    768: {
      slidesPerView: 2,
      spaceBetweenSlides: 50,
    },
    992: {
      slidesPerView: 3,
      spaceBetweenSlides: 30,
    },
  },
});

// Back to top Button
var mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.opacity = "1";
  } else {
    mybutton.style.opacity = "0";
  }
}
mybutton.addEventListener("click", topFunction);
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
