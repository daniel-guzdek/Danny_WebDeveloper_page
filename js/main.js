const burger = document.querySelector('.burger-icon');
const burgerLines = document.querySelectorAll('.burger__line');
const menuMobile = document.querySelector('.menu__item-list');
let mql = window.matchMedia('(max-width: 767.97px)');

const checkBurger = () => {
  if(!mql.matches) {
    burger.classList.remove('open');
    menuMobile.classList.remove('menu__mobile--open');
  }
}

window.addEventListener('resize', checkBurger);

burger.addEventListener('click', ()=> {
  burger.classList.toggle('open');
  menuMobile.classList.toggle('menu__mobile--open');
});

// titles animation
const text = document.querySelector('.animated__title');
const strText = text.textContent;
console.log(strText);
const splitText = strText.split("");
text.textContent = "";

for(let i = 0; i<splitText.length; i++) {
  text.innerHTML += `<span class="animated_char">${splitText[i]}</span>`;
}

let char = 0;
let timer = setInterval(onTick, 100);

function onTick() {
  const span = document.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if(char === splitText.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

// reveal webside elements on event DOMContentLoaded
function reveal() {
  const reveals = document.querySelectorAll('.reveal');

  for(let i = 0; i < reveals.length; i++) {
    reveals[i].classList.add('active');
  }
}
window.addEventListener('DOMContentLoaded', reveal);

// reveal webside elements on event scroll
function revealOnScroll() {
  const reveals = document.querySelectorAll('.reveal-scroll');

  for(let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if(revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add('active');
    } else {
      reveals[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll', revealOnScroll);