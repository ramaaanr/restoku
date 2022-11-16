class NavBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <header>
        <div class="heading">
          <div class="logo">
            <p aria-label="nama-aplikasi" tabindex="0">RestoKu</p>
          </div>
          <button id="button-open-menu" class="button-menu menu-open show">
            <img tabindex="0" aria-label="tombol-buka-menu-navigasi" src="public/icons/list.svg"
              alt="tombol-buka-menu-navigasi">
          </button>
          <button id="button-close-menu" class="button-menu menu-close show hide">
            <img tabindex="0" aria-label="tombol-tutup-menu-navigasi" src=" public/icons/x.svg"
              alt="tombol-tutup-menu-navigasi">
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
