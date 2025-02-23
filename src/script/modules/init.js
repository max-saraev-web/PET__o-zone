const init = () => {
  const cartCounter = document.querySelector('.counter');

  const cartGoods =
    localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : 
    [];

  cartCounter.textContent = cartGoods.length;
}

export default init;
