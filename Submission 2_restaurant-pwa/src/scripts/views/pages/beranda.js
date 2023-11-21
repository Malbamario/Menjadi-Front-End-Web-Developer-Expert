import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Beranda = {
  set hero(hero) {
    this._hero = hero;
  },

  async render() {
    const header = document.querySelector('header');
    header.appendChild(this._hero);
    const restList = document.createElement('restaurant-list');
    restList.label = 'Explore The Restaurants';
    return [restList];
  },

  async afterRender() {
    const { restaurants } = await RestaurantDbSource.listAllResaturant();
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

export default Beranda;
