import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import DetailHelper from '../../utils/detail-helper';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    const container = document.createElement('div');
    container.id = 'container-detail';
    container.className = 'container-detail';
    const likeButt = document.createElement('div');
    likeButt.id = 'likeButtonContainer';
    return [container, likeButt];
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { restaurant } = await RestaurantDbSource.detailRestaurant(url.id);
    const restaurantDetailElement = document.querySelector('#container-detail');

    restaurantDetailElement.innerHTML = createRestaurantDetailTemplate(restaurant);

    const reviewForm = document.querySelector('#review-form');
    reviewForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      const name = document.querySelector('#reviewer').value;
      const review = document.querySelector('#review-text').value;
      const list = document.querySelector('#list-review');
      const data = { id: url.id, name, review };
      const { customerReviews } = await RestaurantDbSource.detailRestaurant(data);
      list.innerHTML = DetailHelper.eachCustomersReview(customerReviews);
    });

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        description: restaurant.description,
        rating: restaurant.rating,
        city: restaurant.city,
      },
    });
  },
};

export default Detail;
