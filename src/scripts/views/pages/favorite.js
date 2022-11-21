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
    document.querySelector('.restaurant-card-container').innerHTML = createLoading();
  },

  async afterRender() {
    await this.renderRestaurantItem();
    document.querySelector('.input-search').addEventListener('input', async () => {
      const search = document.querySelector('.input-search').value;
      await this.renderRestaurantItem(search);
    });
  },

  async renderRestaurantItem(search = '') {
    this.renderLoading();
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
      document.querySelector('.restaurant-card-container').innerHTML = createEmptyRestaurant();
    } else {
      document.querySelector('.restaurant-card-container').innerHTML = restaurantItems;
    }
  },
};

export default Favorite;
