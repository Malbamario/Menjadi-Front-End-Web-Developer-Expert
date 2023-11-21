class skipToContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = '<a href="" class="skip-to-content" tabindex="1">Skip To Content</a>';
  }
}

customElements.define('skip-to-content', skipToContent);
