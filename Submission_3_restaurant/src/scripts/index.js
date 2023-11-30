import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/responsive.css';
import './component/skip-to-content';
import './component/app-bar';
import './component/hero';
import './component/restaurant-item';
import './component/restaurant-list';
import App from './views/app';
import swRegister from './utils/sw-register';

const hero = document.createElement('hero-element');

const app = new App({
  button: document.querySelector('#hamburger'),
  drawer: document.querySelector('.nav__list, .close'),
  content: document.querySelector('#main-content'),
  hero,
});

const skipLink = document.querySelector('skip-to-content');
const mainContent = document.querySelector('#main-content');

skipLink.addEventListener('click', (event) => {
  event.preventDefault();
  skipLink.querySelector('a').blur();
  mainContent.scrollIntoView({ behavior: 'smooth' });
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
