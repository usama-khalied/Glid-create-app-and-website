const header = document.querySelector('header');
function changeBackground() {
    if(window.scrollY >= 80){
        header.style.backgroundColor="white";
    }
    else {
        header.style.backgroundColor="transparent";

    }
}
window.addEventListener("scroll", changeBackground);