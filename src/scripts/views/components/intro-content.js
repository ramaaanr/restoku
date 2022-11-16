class IntroContent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="intro-container">
        <div class="intro-headline">
          <div class="intro-box"></div>
          <h2 tabindex="0" class="intro-title">Apa itu Restoku?</h2>
        </div>
        <p class="intro-tagline" tabindex="0">
          Restoku merupakan aplikasi berbasis web yang bertujuan memberikan layanan dalam pencarian
          restoran populer berdasarkan kriteria penggunanya
        </p>
      </section>
    `;
  }
}

customElements.define('intro-content', IntroContent);
