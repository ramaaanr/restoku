import Swal from 'sweetalert2';
import FavoriteRestaurantsIdb from '../data/favorite-restaurants-idb';
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/template-creator';

/* eslint-disable no-underscore-dangle */
const favoriteButtonInitiator = {
  async init({ favoriteButton, restaurant }) {
    this._favoriteButton = favoriteButton;
    this._restaurant = restaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (await this._isRestaurantExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavoriteRestaurantsIdb.getRestaurant(id);
    return !!restaurant;
  },

  _renderFavorite() {
    this._favoriteButton.html(createFavoriteButtonTemplate());

    this._favoriteButton.on('click', async () => {
      await FavoriteRestaurantsIdb.putRestaurant(this._restaurant);
      Swal.fire({
        icon: 'success',
        title: 'Favorited',
        text: 'The restaurant has been added to your favourites',
      });
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favoriteButton.html(createFavoritedButtonTemplate());

    this._favoriteButton.on('click', async () => {
      await FavoriteRestaurantsIdb.deleteRestaurant(this._restaurant.id);
      Swal.fire({
        icon: 'success',
        title: 'Unfavorite',
        text: 'The restaurant has been removed in your favorites',
      });
      this._renderButton();
    });
  },
};

export default favoriteButtonInitiator;
