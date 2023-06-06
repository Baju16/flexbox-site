const nav = document.querySelector('.nav');
const burgerBtn = document.querySelector('.burger-btn');
const navItems = [...document.querySelectorAll('.nav__item')];
const navBtnBars = document.querySelector('.burger-btn__bars');
const allSections = document.querySelectorAll('.section');
const footerYear = document.querySelector('.footer__year');

const handlNavItemsAnimation = () => {
    let delayTime = 0;
    navItems.forEach(item => {
        item.classList.toggle("nav-items-animation");
        navBtnBars.classList.remove('black-bars-color');
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

const handleCurrentYear = () =>{
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}

const handleObserver = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section=>{  

        if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black-bars-color');
        }else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 60){
            navBtnBars.classList.remove('black-bars-color');
        }
    })
}

window.addEventListener('scroll', handleObserver);

handleCurrentYear();

