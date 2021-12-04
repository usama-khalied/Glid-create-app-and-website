const header = document.querySelector('header');
const nav = document.querySelector('nav');
function changeBackground() {
    if(window.scrollY >= 20){
        header.style.backgroundColor="white";
        header.style.top="0";
    }
    else {
        header.style.backgroundColor="transparent";
        // nav.style.margin="3rem 3rem";
        header.style.top="5.5rem";

    }
}
window.addEventListener("scroll", changeBackground);


// ---- swipper ---slider horezontal move

var swiper = new Swiper(".mySwiper", {
    direction: "horizontal",
    slidesPerView: 1,
    spaceBetween: 30,
    mousewheel: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });