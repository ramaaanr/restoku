class SearchForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="search search-form">
          <input placeholder="find your restaurant..." type="text" class="input-search">
      </div>
    `;
  }
}

customElements.define('search-form', SearchForm);
