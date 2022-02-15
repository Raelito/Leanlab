//Bloquear Scroll quando menu mobile estiver aberto
const menuToggle = document.getElementById("menu-botao");
const html = document.querySelector("html");
menuToggle.addEventListener("click", function () {
  html.classList.toggle("js-noScroll");
});

//SWIPER
var swiper = new Swiper(".js-cursos", {
  speed: 300,
  slidesPerView: 1,
  spaceBetween: 7,
  slidesPerGroup: 1,
  breakpoints: {
    375: {
      slidesPerView: 2,
      spaceBetween: 7,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
      slidesPerGroup: 3,
    },
  },

  navigation: {
    nextEl: ".cursos-button-next",
    prevEl: ".cursos-button-prev",
  },
});

var swiper = new Swiper(".js-testemunhos", {
  effect: "fade",
  slidesPerView: 1,
  paceBetween: 30,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".testemunhos-button-next",
    prevEl: ".testemunhos-button-prev",
  },
});

//GSAP
scrollTrigger: {
  gsap.to(".icone-flutuante.-n1", {
    scrollTrigger: { scrub: 1 }, //
    y: -200,
    toggleActions: "restart pause reverse",
  });
  gsap.to(".icone-flutuante.-n2", {
    scrollTrigger: { scrub: 1 },
    y: -320,
    toggleActions: "restart pause reverse",
  });
  gsap.to(".icone-flutuante.-n3", {
    scrollTrigger: { scrub: 1 },
    y: -350,
    toggleActions: "restart pause reverse",
  });
  gsap.to(".icone-flutuante.-n4", {
    scrollTrigger: { scrub: 1 },
    y: -400,
    toggleActions: "restart pause reverse",
  });
}
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".hero ",
  },
});

//AOS
AOS.init();
