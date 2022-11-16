/* eslint-disable no-undef */
import 'regenerator-runtime'; /* for async await transpile */
import 'jquery';
import '../styles/main.scss';
import App from './views/app';
import swRegister from './utils/sw-register';
// Components
import './views/components/custom-footer';
import './views/components/navbar';

// eslint-disable-next-line no-unused-vars
const app = new App({
  button: $('.menu-open, .menu-close'),
  drawer: $('nav'),
  content: $('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
