class AppBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <nav>
            <div class="title">
                <img src="./images/icon/app-icon.png" alt="Malba Culinary Icon">
                <h1>Malba Culinary</h1>
            </div>
            <a id="hamburger" href="#" tabindex="1" aria-label="Menu">☰</a>
            <ul class="nav__list">
                <li><a href="#" tabindex="1">Home</a></li>
                <li><a href="#" tabindex="1">Favorite</a></li>
                <li><a href="https://www.linkedin.com/in/mario-bawu-17b222163/" target="_blank" tabindex="1">About</a></li>
            </ul>
        </nav>`;
        const hamburgerButtonElement = document.querySelector("#hamburger");
        const list = document.querySelector(".nav__list");
        const main = document.querySelector("main");

        list.classList.toggle("close");

        hamburgerButtonElement.addEventListener("click", (event) => {
            if (list.classList.contains("close")) {
                list.classList.remove("close");
                list.classList.toggle("open");
            } else if (list.classList.contains("open")) {
                list.classList.remove("open");
                list.classList.toggle("close");
            }
            event.stopPropagation();
        });

        main.addEventListener("click", (event) => {
            list.classList.remove("open");
            list.classList.toggle("close");
            event.stopPropagation();
        });
    }
}

customElements.define("app-bar", AppBar);
