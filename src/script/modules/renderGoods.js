const renderGoods = goods => {

const goodsWrap = document.querySelector('.goods');

localStorage.setItem('goods', JSON.stringify(goods));

goodsWrap.innerHTML = '';

for (const {sale, title, img, price, id} of goods) {
    goodsWrap.insertAdjacentHTML('beforeend', `
      <div class="col-12 col-md-6 col-lg-4 col-xl-3">
        <div class="card" data-id="${id}">
          ${sale ? '<div class="card-sale">🔥Hot Sale🔥</div>' : ''}
          <div class="card-img-wrapper">
            <span class="card-img-top"
              style="background-image: url('${img}')"></span>
          </div>
          <div class="card-body justify-content-between">
            <div class="card-price">${price} ₽</div>
            <h5 class="card-title">${title}</h5>
            <button class="btn btn-primary">В корзину</button>
          </div>
        </div>
      </div>
    `);
  }
};

export default renderGoods;
