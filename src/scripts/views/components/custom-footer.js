class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer tabindex="0">
        <p>copyright © 2022 - RestoKu</p>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
