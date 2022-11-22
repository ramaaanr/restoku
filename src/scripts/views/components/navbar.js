class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <div class="heading">
          <a class="logo" href='/'>
            <img aria-label="logo-restoku" tabindex="0" src="public/icons/restoku_logo.png">
          </a>
          <button id="button-container" class="button-container">
            <img tabindex="0" aria-label="tombol-buka-menu-navigasi" src="public/icons/list.svg"
              alt="tombol-buka-menu-navigasi">
          </button>
        </div>
        <nav>
          <ul>
            <li class="nav-anchor"><a aria-label="navigasi pergi-ke-home" href="/">Home</a></li>
            <li class="nav-anchor"><a aria-label="navigasi pergi-ke-list-restaurant" href="#">Restaurant</a></li>
            <li class="nav-anchor"><a aria-label="navigasi pergi-ke-list-favorit" href="#/favorite">Favorite</a></li>
            <li class="nav-anchor"><a aria-label="navigasi pergi-ke-detail-pembuat"
                href="https://www.linkedin.com/in/rama-noor-rizki-404531232/" target="_blank">About
                Us</a></li>
          </ul>
        </nav>
      </header>
    `;
  }
}

customElements.define('nav-bar', NavBar);
