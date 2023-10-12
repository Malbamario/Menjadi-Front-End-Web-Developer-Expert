import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.sass';
import './components/app-bar.js';
import './components/hero.js';
import './components/restaurant-list.js';
import './components/restaurant-item.js';
import data from './../public/data/DATA.json';

const appBar = document.createElement("app-bar");
const hero = document.createElement("custom-hero");
const restaurantList = document.createElement("restaurant-list");

const header = document.querySelector("header");
const main = document.querySelector("main");

restaurantList.data = data;

header.appendChild(appBar);
main.appendChild(hero);
main.appendChild(restaurantList);
