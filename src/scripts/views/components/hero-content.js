class HeroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="hero">
        <h1 tabindex="0" class="hero-title">Ingin Makan,
          Tapi Bingung
          Mau Makan
          Dimana?</h1>
        <p tabindex="0" class="hero-tagline">Ada yang baru loh, dengan <span>Restoku</span> gaperlu bingung cari makan!
        </p>
      </div>
    `;
  }
}

customElements.define('hero-content', HeroContent);
