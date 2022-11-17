/* eslint-disable no-undef */
import itActsAsFavoriteRestaurantModel from './contract/favoriteRestaurantContract';
import FavoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-idb';

xdescribe('Restaurant Idb Contract Test Implemementation', () => {
  afterEach(async () => {
    (await FavoriteRestaurantsIdb
      .getAllRestaurants())
      .forEach(async (restaurant) => {
        await FavoriteRestaurantsIdb.deleteRestaurant(restaurant.id);
      });
  });
  itActsAsFavoriteRestaurantModel(FavoriteRestaurantsIdb);
});
