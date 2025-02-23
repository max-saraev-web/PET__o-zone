import postData from "./postData";
import renderCart from "./renderCart";

const cart = () => {
  const cartBtn = document.querySelector('#cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = document.querySelector('.cart-close');
  const goodsWrap = document.querySelector('.goods');
  const cartCounter = cartBtn.querySelector('.counter');
  const cartWrap = document.querySelector('.cart-wrapper');
  const cartConfirm = document.querySelector('.cart-confirm');

  let isChanged = false;

  const openModal = () => {
    cartModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    renderCart(JSON.parse(localStorage.getItem('cart')));
  };

  const closeModal = () => {
    cartModal.style.display = '';
    document.body.style.overflow = 'scroll';
  };

  cartBtn.addEventListener('click', openModal);
  cartCloseBtn.addEventListener('click', closeModal);

  goodsWrap.addEventListener('click' , ev => {
    const target = ev.target;
    if (target.matches('.btn-primary')) {
      const goods = JSON.parse(localStorage.getItem('goods'));
      const id = target.closest('.card').dataset.id;
      const cart =
        localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :
        [];

      const goodItem = goods.find(elem => elem.id === id);
      if (!cart.find(elem => elem.id === id)) {
        isChanged = true;
        cart.push(goodItem);
      };

      localStorage.setItem('cart', JSON.stringify(cart));

      if (isChanged) {
        const counter = JSON.parse(localStorage.getItem('cart'));
        cartCounter.textContent = counter.length
        isChanged = false;
      }
    };
  }
  );

  cartWrap.addEventListener('click', ev => {
    const target = ev.target;
    if (target.matches('.btn-primary')) {
      const id = target.closest('.card').dataset.id;
      console.log(id);

      const cart = JSON.parse(localStorage.getItem('cart'));
      const toDel = cart.findIndex(elem => elem.id === id);
      cart.splice(toDel, 1);
      localStorage.setItem('cart', JSON.stringify(cart));
      renderCart(JSON.parse(localStorage.getItem('cart')));

      isChanged = true;
      if (isChanged) {
        const counter = JSON.parse(localStorage.getItem('cart'));
        cartCounter.textContent = counter.length
        isChanged = false;
      }
    }
  }
  );

  cartConfirm.addEventListener('click', ev => {
    const target = ev.target;
    console.log(target);
    const cart =
      localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) :
        [];

    postData(cart).then(() => {
      localStorage.removeItem('cart');
      renderCart([]);
      cartCounter.textContent = 0;
    }
    );
  }
  );
};

export default cart;
