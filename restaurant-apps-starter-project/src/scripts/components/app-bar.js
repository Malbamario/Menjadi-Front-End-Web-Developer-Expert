class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav>
            <div class="title">
                <img src="icon/app-icon.png" alt="Malba's Restaurant Icon">
                <h1>Malba's Restaurant</h1>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/mario-bawu-17b222163/" target="_blank">About</a></li>
            </ul>
        </nav>`;
    }
}

customElements.define("app-bar", AppBar);
