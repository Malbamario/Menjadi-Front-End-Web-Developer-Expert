import './styles/main.css';

const hamburgerButtonElement = document.querySelector('#hamburger');
const list = document.querySelector('.nav__list');
const mainElement = document.querySelector('main');
 
hamburgerButtonElement.addEventListener('click', event => {
    console.log("test");
  list.classList.toggle('open');
  event.stopPropagation();
});
 
mainElement.addEventListener('click', event => {
  list.classList.remove('open');
  event.stopPropagation();
})

document.addEventListener("DOMContentLoaded", function() {
    if(window.innerWidth<375){
        list.style.left = "-375px";
        setTimeout(() => {
            list.style.left = "";
        }, 300);
    }
});

document.onload = () => {
    if(window.innerWidth<375){
        list.style.left = "";
    }
}

window.onresize = async ()=>{
    if(window.innerWidth<375){
        list.style.left = "-375px";
        setTimeout(() => {
            list.style.left = "";
        }, 300);
    }
}