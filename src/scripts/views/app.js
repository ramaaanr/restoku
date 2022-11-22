import UrlParser from '../routes/url-parser';
import drawerInitiator from '../utils/drawer-initiator';
import routes from '../routes/routes';
/* eslint-disable no-underscore-dangle */
class App {
  constructor({
    button, drawer, content,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  // eslint-disable-next-line class-methods-use-this
  _initialAppShell() {
    drawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
    });
  }

  // eslint-disable-next-line class-methods-use-this
  _skipContentListener() {
    // eslint-disable-next-line no-undef
    const skipToContent = document.querySelector('.skip-to-content');
    skipToContent.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#mainContent').focus();
    });
  }

  async renderPage() {
    window.scrollTo(0, 0);
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    this._skipContentListener();
  }
}

export default App;
