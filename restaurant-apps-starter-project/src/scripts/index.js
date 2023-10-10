import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import './components/app-bar.js';

const appBar = document.createElement("app-bar");

const header = document.querySelector("header");
const main = document.querySelector("main");

header.appendChild(appBar);
