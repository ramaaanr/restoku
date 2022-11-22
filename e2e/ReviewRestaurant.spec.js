/* eslint-disable no-undef */

Feature('Customer Review');

Scenario('Review on a restaurant', async ({ I }) => {
  const date = +new Date();
  const name = `test-name-${date}`;
  const review = `test-review-${date}`;
  // Restaurant Page
  I.amOnPage('/');
  I.see('Restaurant List', '.main-content-title');
  I.waitForElement('.restaurant-item');
  const firstRestaurantItem = locate('.restaurant-item .name').first();
  I.click(firstRestaurantItem);

  // Detail Page
  I.waitForElement('.add-review-form');
  I.fillField('.input-review-author', name);
  I.fillField('.input-review-text', review);
  I.click('.button-submit-review');

  // const lastReviewBody = locate('.customer-review-body').last();
  // const lastReviewBodyText = await I.grabTextFrom(lastReviewBody);

  I.waitForElement('.swal2-popup', 5);
  I.click('.swal2-confirm');
  I.see(name, '.customer-review-name');
  I.see(review, '.customer-review-body');
});
