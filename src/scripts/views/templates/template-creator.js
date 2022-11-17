import CONFIG from '../../globals/config';

/* eslint-disable no-unused-expressions */
const createRestaurantItem = (restaurant) => `
    <li tabindex="0" aria-label="data restoran" class="card restaurant restaurant-item">
      <a href="#/detail/${restaurant.id}">
        <img tabindex="0" aria-label="gambar restoran" class="restaurant-picture" src="${CONFIG.BASE_IMAGE_MEDIUM_URL}${restaurant.pictureId}" alt="Gambar Restoran">
        <div class="restaurant-details">
          <h3 tabindex="0" aria-label="Nama Restoran yaitu ${restaurant.name}" class="name">${restaurant.name}</h3>
          <div class="info">
            <img src="public/icons/star-fill.svg" alt="">
            <span tabindex="0" aria-label="Rating Restoran yaitu bintang ${restaurant.rating}" class="rating">${restaurant.rating}</span>
          </div>
          <label tabindex="0" aria-label="Detail Restoran yaitu"></label>
          <p tabindex="0" class="description">
            ${restaurant.description}
          </p>
          <p tabindex="0" aria-label="Lokasi restoran yaitu kota ${restaurant.city}" class="city">${restaurant.city}</p>
        </div>
      </a>
    </li>
  `;

const createRestaurantDetail = (restaurant) => `
  <div class="main-content-detail-image" style="
    background: url('${CONFIG.BASE_IMAGE_LARGE_URL}${restaurant.pictureId}');
    background-position: center;
    background-size: cover;
    <button class="button-back">
      <a href="#">
        <img tabindex="0" aria-label="tombol-kembali" src=" public/icons/arrow-back.svg" alt="tombol-kembali">
      </a>
    </button>
    <div id="likeButtonContainer">
      
    </div>
  </div>

  <div class="main-content-detail-body">
    <div class="detail-title">
      <h2 tabindex="0" aria-label="Nama Restoran yaitu ${restaurant.name}">${restaurant.name}</h2>
    </div>
    <div class="detail-rating">
      <div class="rating-icon">
        <img src="public/icons/star-fill.svg" alt="">
      </div>
      <p tabindex="0" aria-label="Rating Restoran yaitu ${restaurant.rating}" class="rating-score">${restaurant.rating}</p>
    </div>
    <div tabindex="0" aria-label="Deskripsi Restoran yaitu" class="detail-deskripsi">
      <p tabindex="0">
        ${restaurant.description}
      </p>
    </div>
    <div class="detail-city">
      <p class="detail-label">City:</p>
      <p tabindex="0" aria-label="Lokasi Restoran di Kota ${restaurant.city}" class="detail-content">${restaurant.city}</p>
    </div>
    <div class="detail-address">
      <p class="detail-label">Address:</p>
      <p tabindex="0" aria-label="Lokasi Restoran beralamant di ${restaurant.address}" class="detail-content">${restaurant.address}</p>
    </div>
    <ul tabindex="0" aria-label="Kategori Restoran" class="detail-categories">
      <li class="detail-label">Categories:</li>
    </ul>
    <ul tabindex="0" aria-label="Daftar Menu yang dijual" class="detail-foods">
      <li tabindex="0" aria-label="Daftar Menu Makanan" class="detail-label">Foods:</li>
      </ul>
      <ul class="detail-drinks">
      <li tabindex="0" aria-label="Daftar Menu Minuman" class="detail-label">Drinks:</li>
    </ul>

    <div tabindex="0" aria-label="Tambahkan Review Anda}" class="detail-customer-add-review-container">
      <form class="add-review-form">
        <p tabindex="0" aria-label="Silahkan masukan data hasil review anda terhadap restoran ini" class="add-review-headline">Add Your Review</p>
        <input tabindex="0" aria-label="Masukan Nama anda" class="input-review-author" type="text" placeholder="Input Author" />
        <input tabindex="0" aria-label="Masukan Review Anda" class="input-review-text" type="text" placeholder="Input Review" />
        <button tabindex="0" aria-label="Submit hasil review anda" class="button-submit-review" type="submit">Add Review</button>
      </form>
    </div>

    <div tabindex="0" aria-label="Customer Review" class="detail-customer-review">
      <li class="detail-label">Customer Review</li>
      <ul tabindex="0" aria-label="List customer review" class="detail-customer-reviews-list">
      </ul>
    </div>
  </div>
`;

const createDetailListItem = (value) => `
  <li tabindex="0" aria-label="${value}" class="detail-list-item">${value}</li>
`;

const createCustomerReviewItem = (review) => `
  <li class="customer-review-item">
    <p tabindex="0" aria-label="Nama Reviewer yaitu ${review.name}" class="customer-review-name">${review.name}</p>
    <p tabindex="0" aria-label="Tanggal Review yaitu ${review.date}" class="customer-review-date">${review.date}</p>
    <p tabindex="0" aria-label="Hasil Review yaitu ${review.review}" class="customer-review-body">${review.review}</p>
  </li>
`;

const createLikeButtonTemplate = () => `
  <button tabindex="0" aria-label="like-restaurant-button" id="favoriteButton">
    <img src=" public/icons/favorite.svg" alt="tombol-restoran-favorite"></img>
  </button>
  `;

const createUnlikeButtonTemplate = () => `
  <button tabindex="0" aria-label="unlike-restaurant-button" id="favoritedButton">
    <img src=" public/icons/favorite-fill.svg" alt="tombol-restoran-favorited"></img>
  </button>
`;

const createLoading = () => `
  <div class="loading-container">
    <h1 tabindex="0" aria-label="sedang loading mohon tunggu..." >LOADING ...</h1>
  </div>
`;

const createEmptyRestaurant = () => `
  <div class='empty-container'>
    <h1 tabindex="0" aria-label="Restoran kosong">Restaurant List Is Empty</h1>
  </div>
`;

export {
  createRestaurantItem,
  createDetailListItem,
  createRestaurantDetail,
  createLikeButtonTemplate,
  createUnlikeButtonTemplate,
  createCustomerReviewItem,
  createLoading,
  createEmptyRestaurant,
};
