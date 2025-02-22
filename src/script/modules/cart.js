const cart = () => {
  const cartBtn = document.querySelector('#cart');
  const cartModal = document.querySelector('.cart');
  const cartCloseBtn = document.querySelector('.cart-close');

  const openModal = () => {
    cartModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    cartModal.style.display = '';
    document.body.style.overflow = 'scroll';
  };

  cartBtn.addEventListener('click', openModal);
  cartCloseBtn.addEventListener('click', closeModal);
};

export default cart;
