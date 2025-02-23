const renderCart = goods => {
  const goodsWrap = document.querySelector('.cart-wrapper');
  const total = document.querySelector('.cart-total > span');

  goodsWrap.innerHTML = '';

  if(!goods || goods.length === 0) {
    const placeHolder = document.createElement('div');
    placeHolder.id = 'cart-empty'
    placeHolder.textContent = 'Ваша корзина пока пуста';
    goodsWrap.append(placeHolder);
    total.textContent = 0;
  } else {
      total.textContent = goods.reduce((acc, currentVal) => acc + currentVal.price, 0); 

      for (const {sale, title, img, price, id} of goods) {
      goodsWrap.insertAdjacentHTML('beforeend', `
          <div class="card" data-id="${id}">
            ${sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
            <div class="card-img-wrapper">
              <span class="card-img-top"
                style="background-image: url('${img}')"></span>
            </div>
            <div class="card-body justify-content-between">
              <div class="card-price">${price} ₽</div>
              <h5 class="card-title">${title}</h5>
              <button class="btn btn-primary">Убрать из корзины</button>
            </div>
          </div>
      `);
    }
  }
  
}

export default renderCart;