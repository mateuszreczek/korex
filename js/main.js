const hamburger = document.querySelector('.hamburger');
const slideNav = document.querySelector('.navigation');
const showMenu = () => {
    if(slideNav.classList.contains('off')){
        slideNav.classList.remove('off');
    }else{
        slideNav.classList.add('off');
    }
}
hamburger.addEventListener('click', showMenu);