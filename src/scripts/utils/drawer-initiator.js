/* eslint-disable no-underscore-dangle */
const drawerInitiator = {
  init({ button, drawer }) {
    button.on('click', () => {
      this._toggleDrawer(button, drawer);
    });

    // eslint-disable-next-line no-undef
    $('.nav-anchor').on('click', () => {
      this._toggleDrawer(button, drawer);
    });
  },

  _toggleDrawer(button, drawer) {
    drawer.toggleClass('open');
    button.toggleClass('hide');
  },
};

export default drawerInitiator;
