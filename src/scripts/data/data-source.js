import API_ENDPOINT from '../globals/api-endpoint';

class DataSource {
  static async restaurantList() {
    const response = await fetch(API_ENDPOINT.RESTAURANT);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  // eslint-disable-next-line consistent-return
  static async addReview(review) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(review),
    };
    const response = await fetch(API_ENDPOINT.REVIEW, options);
    const responseJson = await response.json();
    if (responseJson.error) {
      throw new Error('The restaurant API is having problems, please try again!');
    } else {
      return responseJson.customerReviews;
    }
  }
}

export default DataSource;
