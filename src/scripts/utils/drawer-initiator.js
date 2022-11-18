/* eslint-disable no-param-reassign */
/* eslint-disable no-underscore-dangle */
import { createButtonMenuOpen, createButtonMenuClose } from '../views/templates/template-creator';

const drawerInitiator = {
  init({ button, drawer }) {
    this._drawerClose = true;
    button.addEventListener('click', () => {
      this._toggleDrawer(button, drawer);
    });

    // eslint-disable-next-line no-undef
    document.querySelectorAll('.nav-anchor').forEach((nav) => {
      nav.addEventListener('click', () => {
        this._toggleDrawer(button, drawer);
      });
    });
  },

  _toggleDrawer(button, drawer) {
    if (this._drawerClose) {
      button.innerHTML = createButtonMenuClose();
      this._drawerClose = false;
      drawer.classList.add('open');
    } else {
      button.innerHTML = createButtonMenuOpen();
      this._drawerClose = true;
      drawer.classList.remove('open');
    }
  },

};

export default drawerInitiator;
