class SearchForm extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <form class="search search-form">
          <input placeholder="find your restaurant..." type="text" class="input-search">
      </form>
    `;
  }
}

customElements.define('search-form', SearchForm);
