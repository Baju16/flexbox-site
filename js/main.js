const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');

const navItems = [...document.querySelectorAll('.nav__item')];

const handlNavItemsAnimation = () => {
    let delayTime = 0;
    navItems.forEach(item => {
        item.classList.toggle("nav-items-animation");
        item.style.animationDelay=`.${delayTime}s`;
        delayTime++;
    })
}

burgerBtn.addEventListener("click", () => {
    nav.classList.toggle('nav--active');
    handlNavItemsAnimation();
})

navItems.forEach(item=>{
    item.addEventListener("click", ()=>{
        nav.classList.remove('nav--active');
    })
})

