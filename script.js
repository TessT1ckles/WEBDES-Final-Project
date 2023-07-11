// HAMBURGER DROPDOWN MENU

const menuBurger = document.querySelector(".menuBgr");
const menuDown = document.querySelector(".menu-drop");

menuBurger.addEventListener("click", function() {
    menuDown.classList.toggle("show");
});


// HAMBURGER ICON ANIMATION

function bgrAnim(x) {
    x.classList.toggle("xmark");
}


// HOMEPAGE FADE IN

window.addEventListener('DOMContentLoaded', () => {
    const mainWel = document.querySelector('.main-wel');
    const mainGrid = document.querySelector('.main-grid');

    mainWel.style.opacity = '0';
    mainGrid.style.opacity = '0';

    setTimeout(() => {
        mainWel.style.transition = 'opacity 1s';
        mainGrid.style.transition = 'opacity 1s';

        mainWel.style.opacity = '1';
        mainGrid.style.opacity = '1';
    }, 500);
});

