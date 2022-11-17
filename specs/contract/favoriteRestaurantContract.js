/* eslint-disable no-undef */
const itActsAsFavoriteRestaurantModel = (favoriteRestaurant) => {
  it('should return restaurants that have been added to the favorites list', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getRestaurant(1))
      .toEqual({ id: 1 });
    expect(await favoriteRestaurant.getRestaurant(2))
      .toEqual({ id: 2 });
    expect(await favoriteRestaurant.getRestaurant(3))
      .toEqual(undefined);
  });

  it('should not be able to add favorite restaurants if the data property is not correct', async () => {
    favoriteRestaurant.putRestaurant({ aPropery: 'property' });

    expect(await favoriteRestaurant.getAllRestaurants()).toEqual([]);
  });

  it('should restore all favorite data', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 1 },
        { id: 2 },
      ]);
  });

  it('should have removed favorite restaurant from the list', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('should have removed favorite restaurant from the list', async () => {
    favoriteRestaurant.putRestaurant({ id: 1 });
    favoriteRestaurant.putRestaurant({ id: 2 });
    favoriteRestaurant.putRestaurant({ id: 3 });

    await favoriteRestaurant.deleteRestaurant(1);

    expect(await favoriteRestaurant.getAllRestaurants())
      .toEqual([
        { id: 2 },
        { id: 3 },
      ]);
  });

  it('It should be able to search for favorite restaurant data', async () => {
    favoriteRestaurant.putRestaurant({ id: 1, title: 'film a' });
    favoriteRestaurant.putRestaurant({ id: 2, title: 'film b' });
    favoriteRestaurant.putRestaurant({ id: 3, title: 'film abc' });
    favoriteRestaurant.putRestaurant({ id: 4, title: 'ini mah film abcd' });

    expect(await favoriteRestaurant.searchRestaurants('film a'))
      .toEqual([
        { id: 1, title: 'film a' },
        { id: 3, title: 'film abc' },
        { id: 4, title: 'ini mah film abcd' },
      ]);
  });
};

export default itActsAsFavoriteRestaurantModel;
