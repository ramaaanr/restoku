import DataSource from '../../data/data-source';
import { createEmptyRestaurant, createLoading, createRestaurantItem } from '../templates/template-creator';
// Components
import '../components/hero-content';
import '../components/intro-content';
import '../components/search-form';

const Restaurant = {
  async render() {
    return `
      <hero-content></hero-content>
    
      <intro-content></intro-content>
    
      <section class="main-content-container" id="main-content-container">
        <div class="main-content-headline">
          <div class="main-content-box"></div>
          <h2 class="main-content-title" tabindex="0">Restaurant List</h2>
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
    document.querySelector('.input-search').addEventListener('input', async (event) => {
      event.preventDefault();
      const search = document.querySelector('.input-search').value;
      await this.renderRestaurantItem(search);
    });
  },

  async renderRestaurantItem(search = '') {
    const restaurants = await DataSource.restaurantList();
    console.log(restaurants);
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

export default Restaurant;
