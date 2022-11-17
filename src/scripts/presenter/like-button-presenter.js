import Swal from 'sweetalert2';
import { createLikeButtonTemplate, createUnlikeButtonTemplate } from '../views/templates/template-creator';

/* eslint-disable no-underscore-dangle */
const likeButtonPresenter = {
  async init({ favoriteButton, favoriteRestaurant, restaurant }) {
    this._favoriteButton = favoriteButton;
    this._restaurant = restaurant;
    this._favoriteRestaurant = favoriteRestaurant;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;

    if (!id) {
      Swal.fire({
        icon: 'error',
        title: 'Can\'t Add To Favorite',
        text: 'Restaurant don\'t have id',
      });
      return;
    }

    if (await this._isRestaurantExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await this._favoriteRestaurant.getRestaurant(id);
    return !!restaurant;
  },

  _renderLike() {
    this._favoriteButton.innerHTML = createLikeButtonTemplate();

    this._favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.putRestaurant(this._restaurant);
      Swal.fire({
        icon: 'success',
        title: 'Favorited',
        text: 'The restaurant has been added to your favourites',
      });
      this._renderButton();
    });
  },

  _renderLiked() {
    this._favoriteButton.innerHTML = createUnlikeButtonTemplate();

    this._favoriteButton.addEventListener('click', async () => {
      await this._favoriteRestaurant.deleteRestaurant(this._restaurant.id);
      Swal.fire({
        icon: 'success',
        title: 'Unfavorite',
        text: 'The restaurant has been removed in your favorites',
      });
      this._renderButton();
    });
  },
};

export default likeButtonPresenter;
