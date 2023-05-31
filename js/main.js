const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');

burgerBtn.addEventListener("click", () => {
    nav.classList.toggle('nav--active');
})

const navItems = [...document.querySelectorAll('.nav__item')];

navItems.forEach(item=>{
    item.addEventListener("click", ()=>{
        nav.classList.remove('nav--active');
    })
})