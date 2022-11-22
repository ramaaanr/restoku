/* eslint-disable no-undef */
import { createAddReviewInitiatorWithRestaurant } from './helper/testFactories';

describe('Review a Restaurant', () => {
  const addReviewContainer = () => {
    document.body.innerHTML = '<div id="review-container"></div>';
  };

  const addFormInput = (name, review) => {
    const formInput = `
      <div tabindex="0" aria-label="Tambahkan Review Anda}" class="detail-customer-add-review-container">
        <form class="add-review-form">
          <p tabindex="0" aria-label="Silahkan masukan data hasil review anda terhadap restoran ini" class="add-review-headline">Add Your Review</p>
          <input value="${name}" tabindex="0" aria-label="Masukan Nama anda" class="input-review-author" type="text" placeholder="Input Author" />
          <input value="${review}" tabindex="0" aria-label="Masukan Review Anda" class="input-review-text" type="text" placeholder="Input Review" />
          <button tabindex="0" aria-label="Submit hasil review anda" class="button-submit-review" type="submit">Add Review</button>
        </form>
      </div>

      <div tabindex="0" aria-label="Customer Review" class="detail-customer-review">
        <li class="detail-label">Customer Review</li>
        <ul tabindex="0" aria-label="List customer review" class="detail-customer-reviews-list">
        </ul>
      </div>
    `;
    document.body.innerHTML += formInput;
  };

  beforeEach(() => {
    addReviewContainer();
  });

  it('should have restaurant review id, name, review value', async () => {
    addFormInput('test', 'test');
    createAddReviewInitiatorWithRestaurant({ id: 1 });

    expect(document.querySelector('.input-review-author').value).toBe('test');
    expect(document.querySelector('.input-review-text').value).toBe('test');
  });

  it('should have valid restaurant id', async () => {
    addFormInput('test-author', 'test-text');
    await createAddReviewInitiatorWithRestaurant({ id: ' ' });
    document.querySelector('.button-submit-review').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(document.querySelector('#swal2-html-container').textContent).toEqual('restaurant id not valid');
    }, 1000);
  });

  it('should contain name', async () => {
    addFormInput('', 'test-text');
    await createAddReviewInitiatorWithRestaurant({ id: 'w7jca3irwykfw1e867' });
    document.querySelector('.button-submit-review').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(document.querySelector('#swal2-html-container').textContent).toEqual('please re-enter the input correctly');
    }, 1000);
  });

  it('should contain review', async () => {
    addFormInput('test-name', '');
    await createAddReviewInitiatorWithRestaurant({ id: 'w7jca3irwykfw1e867' });
    document.querySelector('.button-submit-review').dispatchEvent(new Event('click'));
    setTimeout(() => {
      expect(document.querySelector('#swal2-html-container').textContent).toEqual('please re-enter the input correctly');
    }, 1000);
  });

  it('should succes', async () => {
    addFormInput('test-name', 'test-author');
    await createAddReviewInitiatorWithRestaurant({ id: 'w7jca3irwykfw1e867' });
    document.querySelector('.button-submit-review').dispatchEvent(new Event('click'));

    setTimeout(() => {
      expect(document.querySelectorAll('.customer-review-item .customer-review-name').slice(-1).textContent).toEqual('test-name');
      expect(document.querySelectorAll('.customer-review-item .customer-review-body').slice(-1).textContent).toEqual('test-author');
    }, 1000);
  });
});
