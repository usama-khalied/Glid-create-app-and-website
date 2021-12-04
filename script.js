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
    slidesPerView: 5,
    duration : .1,
    spaceBetween: 5,
    mousewheel: true,
    autoplay : true,
 
    pagination: {
      el: ".swiper-pagination",
      clickable: false,
    },
  });

//   ---jquery--library
// $('.rightarrow, .leftarrow').hide();

// $('#scrolldiv_container').mouseenter(function(){
//     $('.rightarrow, .leftarrow').show();
//     clearInterval(siId);
// })
// $('#scrolldiv_container').mouseleave(function(){
//     $('.rightarrow, .leftarrow').hide();
//         si();
// });

// $('.rightarrow').click(function () {
//     var leftPos = $('#browser').scrollLeft();
//     <!--1000 * 6 (aantal slides - 1)-->
//     if (leftPos == 6000) {
//         $('#browser').animate({
//             scrollLeft: 0
//         }, 400);
//     } else {
//         $('#browser').animate({
//             scrollLeft: leftPos + 1000
//         }, 150);
//     }
// });

// $('.leftarrow').click(function () {
//     var leftPos = $('#browser').scrollLeft();
//     if (leftPos == 0) {
//         $('#browser').animate({
//             <!--1000 * 6 (aantal slides - 1)-->
//             scrollLeft: 6000
//         }, 400);
//     } else {
//         $('#browser').animate({
//             scrollLeft: leftPos - 1000
//         }, 150);
//     }
// }); 