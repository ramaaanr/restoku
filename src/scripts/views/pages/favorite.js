/* eslint-disable no-undef */
import FavoriteRestaurantsIdb from '../../data/favorite-restaurants-idb';
import { createEmptyRestaurant, createLoading, createRestaurantItem } from '../templates/template-creator';
// component
import '../components/search-form';

const Favorite = {
  async render() {
    return `
      <section class="main-content-container" id="main-content-container">
        <div class="main-content-headline">
          <div class="main-content-box"></div>
          <h2 tabindex="0" >Favorite List</h2>
        </div>
    
        <search-form></search-form>
        <ul tabindex="0" aria-label="berikut-list-restaurant" class="restaurant-card-container">
    
        </ul>
      </section>
    `;
  },

  async renderLoading() {
    // eslint-disable-next-line no-undef
    $('.restaurant-card-container').html(createLoading());
  },

  async afterRender() {
    await this.renderRestaurantItem();
    // eslint-disable-next-line no-undef
    $('.input-search').on('input', async () => {
      // eslint-disable-next-line no-undef
      const search = $('.input-search').val();
      await this.renderRestaurantItem(search);
    });
  },

  async renderRestaurantItem(search = '') {
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants();
    let restaurantItems = '';
    let itemsEmpty = true;
    restaurants.forEach((restaurant) => {
      if (restaurant.name.toLowerCase().includes(search.toLowerCase())) {
        itemsEmpty = false;
        restaurantItems += createRestaurantItem(restaurant);
      }
    });
    if (itemsEmpty) {
      $('.restaurant-card-container').html(createEmptyRestaurant());
    } else {
      $('.restaurant-card-container').html(restaurantItems);
    }
  },
};

export default Favorite;
