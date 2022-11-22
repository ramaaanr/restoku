import FavoriteRestaurantsIdb from '../../src/scripts/data/favorite-restaurants-idb';
import likeButtonPresenter from '../../src/scripts/presenter/like-button-presenter';
import addReviewInitiator from '../../src/scripts/utils/add-review-initiator';

const createLikeButtonPresenterWithRestaurant = async (restaurant) => {
  await likeButtonPresenter.init({
    // eslint-disable-next-line no-undef
    favoriteButton: document.querySelector('#likeButtonContainer'),
    favoriteRestaurant: FavoriteRestaurantsIdb,
    restaurant,
  });
};

const createAddReviewInitiatorWithRestaurant = async (restaurant) => {
  await addReviewInitiator.init({
    inputAuthor: document.querySelector('.input-review-author'),
    inputReview: document.querySelector('.input-review-text'),
    id: restaurant.id,
    buttonSubmit: document.querySelector('.button-submit-review'),
  });
};

export {
  createLikeButtonPresenterWithRestaurant,
  createAddReviewInitiatorWithRestaurant,
};
