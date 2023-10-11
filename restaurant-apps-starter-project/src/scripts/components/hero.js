class Hero extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <div class="overlay">
            <h1>Welcome to Malba Culinary</h1>
            <p>Find the home of your tounge</p>
        </div>
        `;
    }
}

customElements.define("custom-hero", Hero);