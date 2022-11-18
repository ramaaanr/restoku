/* eslint-disable no-undef */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

// Components
import './views/components/custom-footer';
import './views/components/navbar';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: document.querySelector('.menu-open, .menu-close'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
