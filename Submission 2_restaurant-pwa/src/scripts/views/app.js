import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, drawer, content, hero,
  }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;
    this._hero = hero;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
      hero: this._hero,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    if (url === '/' || url === '/beranda') page.hero = this._hero;
    const hero = document.querySelector('#hero');
    if (hero !== null) {
      const header = document.querySelector('header');
      header.removeChild(hero);
    }
    this._content.replaceChildren(...(await page.render()));
    await page.afterRender();
  }
}

export default App;
