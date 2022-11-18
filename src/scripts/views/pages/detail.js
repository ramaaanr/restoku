/* eslint-disable no-underscore-dangle */
/* eslint-disable no-undef */
import DataSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import addReviewInitiator from '../../utils/add-review-initiator';
import favoriteButtonPresenter from '../../presenter/like-button-presenter';

import {
  createDetailListItem,
  createLoading,
  createCustomerReviewItem,
  createRestaurantDetail,
} from '../templates/template-creator';
import FavoriteRestaurantsIdb from '../../data/favorite-restaurants-idb';

const Detail = {
  async render() {
    // eslint-disable-next-line no-unused-expressions
    return (
      `
        <div class="main-content-detail"></div>
      `
    );
  },

  async renderLoading() {
    document.querySelector('.main-content-detail').innerHTML = createLoading();
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.detailRestaurant(url.id);
    const detailContainer = document.querySelector('.main-content-detail');
    detailContainer.innerHTML = createRestaurantDetail(restaurant);
    this.renderListItem('categories', restaurant.categories);
    this.renderListItem('foods', restaurant.menus.foods);
    this.renderListItem('drinks', restaurant.menus.drinks);

    this._renderReviewItems(restaurant.customerReviews);
    favoriteButtonPresenter.init({
      favoriteButton: document.querySelector('#likeButtonContainer'),
      restaurant,
      favoriteRestaurant: FavoriteRestaurantsIdb,
    });

    addReviewInitiator.init({
      inputAuthor: document.querySelector('.input-review-author'),
      inputReview: document.querySelector('.input-review-text'),
      id: restaurant.id,
      buttonSubmit: document.querySelector('.button-submit-review'),
    });
  },

  // eslint-disable-next-line no-underscore-dangle
  async _renderReviewItems(reviews) {
    // eslint-disable-next-line no-undef
    const customerReviewsContainer = document.querySelector('.detail-customer-reviews-list');
    let reviewItems = '';
    reviews.forEach((review) => {
      reviewItems += createCustomerReviewItem(review);
    });
    customerReviewsContainer.innerHTML = reviewItems;
  },

  renderListItem(label, items) {
    const classLabel = {
      categories: '.detail-categories',
      foods: '.detail-foods',
      drinks: '.detail-drinks',
    };
    // eslint-disable-next-line no-undef
    const listContainer = document.querySelector(classLabel[label]);
    let listItem = listContainer.innerHTML;
    items.forEach((item) => {
      listItem += createDetailListItem(item.name);
    });
    listContainer.innerHTML = listItem;
  },
};

export default Detail;
