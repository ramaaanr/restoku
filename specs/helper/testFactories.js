import FavoriteRestaurantsIdb from '../../src/scripts/data/favorite-restaurants-idb';
import likeButtonPresenter from '../../src/scripts/presenter/like-button-presenter';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await likeButtonPresenter.init({
    // eslint-disable-next-line no-undef
    favoriteButton: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantsIdb,
    restaurant,
  });
};

export {
  createLikeButtonPresenterWithRestaurant,
};
