/* eslint-disable no-undef */
import DataSource from '../../data/data-source';
import UrlParser from '../../routes/url-parser';
import addReviewInitiator from '../../utils/add-review-initiator';
import favoriteButtonInitiator from '../../utils/favorite-button-initiator';
import {
  createCustomerReviewItem,
  createDetailListItem,
  createLoading,
  createRestaurantDetail,
} from '../templates/template-creator';

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
    $('.main-content-detail').html(createLoading());
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await DataSource.detailRestaurant(url.id);
    const detailContainer = $('.main-content-detail');
    detailContainer.html(createRestaurantDetail(restaurant));
    this.renderListItem('categories', restaurant.categories);
    this.renderListItem('foods', restaurant.menus.foods);
    this.renderListItem('drinks', restaurant.menus.drinks);

    this.renderReviewItems(restaurant.customerReviews);
    favoriteButtonInitiator.init({
      favoriteButton: $('.button-favorite'),
      restaurant,
    });

    addReviewInitiator.init({
      inputAuthor: $('.input-review-author'),
      inputReview: $('.input-review-text'),
      id: restaurant.id,
      buttonSubmit: $('.button-submit-review'),
      renderReviewItems: this.renderReviewItems,
    });
  },

  renderReviewItems(reviews) {
    // eslint-disable-next-line no-undef
    const customerReviewsContainer = $('.detail-customer-reviews-list');
    let reviewItems = '';
    reviews.forEach((review) => {
      reviewItems += createCustomerReviewItem(review);
    });
    customerReviewsContainer.html(reviewItems);
  },

  renderListItem(label, items) {
    const classLabel = {
      categories: '.detail-categories',
      foods: '.detail-foods',
      drinks: '.detail-drinks',
    };
    // eslint-disable-next-line no-undef
    const listContainer = $(classLabel[label]);
    let listItem = listContainer.html();
    items.forEach((item) => {
      listItem += createDetailListItem(item.name);
    });
    listContainer.html(listItem);
  },
};

export default Detail;
