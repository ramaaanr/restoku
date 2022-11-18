/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurant');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('like on restaurant', async ({ I }) => {
  // Favorite Page
  I.see('Restaurant List Are Empty', '.empty-container');

  // Restaurant Page
  I.amOnPage('/');
  I.see('Restaurant List', '.main-content-title');
  I.waitForElement('.restaurant-item');
  const firstRestaurantItem = locate('.restaurant-item .name').first();
  const firstRestaurantItemTitle = await I.grabTextFrom(firstRestaurantItem);
  I.click(firstRestaurantItem);

  // Detail Page
  I.waitForElement('#likeButtonContainer');
  I.click('#likeButtonContainer');

  // Favorite Page
  I.amOnPage('/#/favorite');
  I.waitForElement('.restaurant-item');
  const firstFavoritedRestaurantItem = locate('.restaurant-item .name').first();
  const firstFavoritedRestaurantItemTitle = await I.grabTextFrom(firstFavoritedRestaurantItem);

  assert.strictEqual(firstRestaurantItemTitle, firstFavoritedRestaurantItemTitle);
});
