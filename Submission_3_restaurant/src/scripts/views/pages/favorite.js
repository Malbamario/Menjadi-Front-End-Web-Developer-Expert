import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    const restList = document.createElement('restaurant-list');
    restList.label = 'Your Favorite Restaurants';
    return [restList];
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const container = document.querySelector('#postExplore');
    restaurants.forEach((restaurant) => {
      const list = document.createElement('li');
      const anchor = document.createElement('a');
      anchor.href = `/#/detail/${restaurant.id}`;
      const restaurantItem = createRestaurantItemTemplate(restaurant);
      anchor.appendChild(restaurantItem);
      list.appendChild(anchor);
      container.appendChild(list);
    });
  },
};

export default Favorite;
