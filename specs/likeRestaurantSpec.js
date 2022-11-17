/* eslint-disable no-undef */
import FavoriteRestaurantsIdb from '../src/scripts/data/favorite-restaurants-idb';
import * as TestFactories from './helper/testFactories';

xdescribe('Liking Restaurant', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the liked widget if the restaurant hasn\'t been liked yet', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="like-restaurant-button"]'),
    ).toBeTruthy();
  });

  it('should not show the liked widget if the restaurant has not been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    expect(
      document.querySelector('[aria-label="unlike-restaurant-button"]'),
    ).toBeFalsy();
  });

  it('should be able to use the favorite button and save data to the favorites list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    document.querySelector('#likeButtonContainer').dispatchEvent(new Event('click'));
    const restaurant = await FavoriteRestaurantsIdb.getRestaurant(1);

    expect(restaurant).toEqual({ id: 1 });
    FavoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should not add restaurant to favorites list when the data is already in favorites list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({ id: 1 });

    await FavoriteRestaurantsIdb.putRestaurant({ id: 1 });

    document.querySelector('#likeButtonContainer').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([{ id: 1 }]);

    FavoriteRestaurantsIdb.deleteRestaurant(1);
  });

  it('should not add restaurant to favorite list when the data does not have id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestaurant({});

    document.querySelector('#likeButtonContainer').dispatchEvent(new Event('click'));

    expect(await FavoriteRestaurantsIdb.getAllRestaurants()).toEqual([]);
  });
});
