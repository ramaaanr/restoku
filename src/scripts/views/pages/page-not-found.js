// Components

const PageNotFound = {
  async render() {
    return `
      <section class="main-content-not-found" id="main-content-not-found">
        <h1>404</h1>
        <p>Page Not Found</p>
        <a href="/">Back to Home</a>
      </section>
    `;
  },

  async afterRender() {
    // TODO Nothing
  },
};

export default PageNotFound;
