export const searchFilter = (goods, value) => {
  const val = value.toLowerCase();
  return goods.filter(item => {
    return item.title.toLowerCase().includes(val);
  })
};

export const categoryFilter = (goods, value) => goods.filter(item => item.category.includes(value));

export const priceFilter = (goods, min, max, sale) => {
  let filteredGoods = goods;

  if (sale) {
    filteredGoods = goods.filter(item => item.sale === true); 
  }

  return filteredGoods.filter(item => {
  if (min === '' && max === '') {
    return goods;
  } else if (min !== '' && max !== '') {
    return item.price >= +min && item.price <= +max;
  } else if (min !== '' && max === '') {
    return item.price >= +min;
  } else if (min === '' && max !== '') {
    return item.price <= +max;
  }
});
}