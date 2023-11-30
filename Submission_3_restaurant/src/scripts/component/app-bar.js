class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
            <div class="title">
                <img src="./app-icon.png" alt="Malba Culinary Icon">
                <h1>Malba Culinary</h1>
            </div>
            <button id="hamburger" tabindex="1" aria-label="Menu">☰</button>
            <ul class="nav__list close">
                <li><a href="#" tabindex="1">Home</a></li>
                <li><a href="#/favorite" tabindex="1">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/malba-mario/" target="_blank" tabindex="1">About</a></li>
            </ul>
        </nav>`;
  }
}

customElements.define('app-bar', AppBar);
