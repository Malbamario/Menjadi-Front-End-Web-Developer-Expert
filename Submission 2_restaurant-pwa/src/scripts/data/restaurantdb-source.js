import API_ENDPOINT from '../globals/api-endpoint';
// import FavoriteRestaurantIdb from './favorite-restaurant-idb';

class RestaurantDbSource {
  static async listAllResaturant() {
    const response = await fetch(API_ENDPOINT.LIST);
    const responseJson = await response.json();
    // const restaurant = await FavoriteRestaurantIdb.getAllRestaurants();
    // console.log(restaurant);

    return responseJson;
  }

  static async detailRestaurant(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }

  static async restaurantReview(data) {
    const response = await API_ENDPOINT.REVIEW(data);
    return response.json();
  }
}

export default RestaurantDbSource;
