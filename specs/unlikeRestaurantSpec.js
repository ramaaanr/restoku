/* eslint-disable no-undef */
import FavoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-idb';
import * as TestFactories from './helper/testFactories';

xdescribe('Unliking A Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantsIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should show the unliked widget if the restaurant has been liked yet', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike-restaurant-button"]'),
    ).toBeTruthy();
  });

  it('should not show the unliked widget if the restaurant has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like-restaurant-button"]'),
    ).toBeFalsy();
  });

  it('should be able to use the unfavorite button and remove data to the favorites list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButtonContainer').dispatchEvent(new Event('click'));
    const restaurants = await FavoriteRestaurantsIdb.getAllRestaurants();

    expect(restaurants).toEqual([]);
  });

  it('should test', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantsIdb.deleteRestaurant(1);

    document.querySelector('[aria-label="unlike-restaurant-button').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });
});
