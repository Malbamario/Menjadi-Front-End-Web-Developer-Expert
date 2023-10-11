// import './styles.css';

const hamburgerButtonElement = document.querySelector('#hamburger');
const list = document.querySelector('.nav__list');
const mainElement = document.querySelector('main');

list.classList.toggle('close');

hamburgerButtonElement.addEventListener('click', event => {
  if(list.classList.contains('close')){
    list.classList.remove('close');
    list.classList.toggle('open');
  } else if(list.classList.contains('open')){
    list.classList.remove('open');
    list.classList.toggle('close');
  }
  event.stopPropagation();
});
 
mainElement.addEventListener('click', event => {
  list.classList.remove('open');
  list.classList.toggle('close');
  event.stopPropagation();
})