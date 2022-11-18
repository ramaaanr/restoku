/* eslint-disable no-underscore-dangle */
const drawerInitiator = {
  init({ button, drawer }) {
    button.on('click', () => {
      this._toggleDrawer(button, drawer);
    });

    // eslint-disable-next-line no-undef
    document.querySelector('.nav-anchor').addEventListener('click', () => {
      this._toggleDrawer(button, drawer);
    });
  },

  _toggleDrawer(button, drawer) {
    drawer.toggleClass('open');
    button.toggleClass('hide');
  },
};

export default drawerInitiator;
