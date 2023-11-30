import API_ENDPOINT from '../../globals/api-endpoint';
import DetailHelper from '../../utils/detail-helper';

const createRestaurantDetailTemplate = (restaurant) => `
    <div class="wrapper">
        <div id="restaurantName" id="box1">
            <h1>${restaurant.name}</h1>
        </div>
        <img src="${API_ENDPOINT.IMAGE_LARGE(restaurant.pictureId)}" alt="" id="restaurant-img" class="detail-card">
        <div id="box3">
            <div class="detail-card">
                <i class="fa fa-location-dot" aria-hidden="true"></i>
                <p>${restaurant.address}, ${restaurant.city}</p>
            </div>
        </div>
        <div class="detail-card" id="box4">
            <h2>Deskripsi</h2>
            <p>${restaurant.description}</p>
        </div>

        <div id="box5">
            <div class="detail-card">
                <h2>Menu Makanan</h2>
                <ul class="list-menu">
                    ${DetailHelper.eachFoodsMenu(restaurant.menus)}
                </ul>
            </div>
        </div>
        <div id="box6">
            <div class="detail-card">
                <h2>Menu Minuman</h2>
                <ul class="list-menu">
                    ${DetailHelper.eachDrinksMenu(restaurant.menus)}
                </ul>
            </div>
        </div>
        <div id="box7">
            <div id="customerReview-box">
                <h2>Review Pelanggan</h2>
                <form action="" method="post" id="review-form" class="detail-card">
                    <input type="text" name="reviewer" id="reviewer" placeholder="Nama">
                    <input type="textarea" name="reviewIn" id="review-text" placeholder="Review">
                    <button type="submit">Submit</button>
                </form>
                <ul class="list-review" id="list-review">
                    ${DetailHelper.eachCustomersReview(restaurant)}
                </ul>
            </div>
        </div>
    </div>
`;

const createRestaurantItemTemplate = (restaurant) => {
  const item = document.createElement('restaurant-item');
  item.data = restaurant;
  item.thumbnail = API_ENDPOINT.IMAGE_SMALL(restaurant.pictureId);
  return item;
};

const createFoodItemTemplate = (food) => `
    <li class="menu-item">${food.name}</li>
`;

const createDrinkItemTemplate = (drink) => `
    <li class="menu-item">${drink.name}</li>
`;

const createCustomerReviewTemplate = (customerReview) => `
    <li class="item-list-review detail-card">
        <p class="reviewName">${customerReview.name}<span class="reviewDate"> &bull; ${customerReview.date}</span></p>
        <p class="reviewText">${customerReview.review}</p>
    </li>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantDetailTemplate,
  createRestaurantItemTemplate,
  createFoodItemTemplate,
  createDrinkItemTemplate,
  createCustomerReviewTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
