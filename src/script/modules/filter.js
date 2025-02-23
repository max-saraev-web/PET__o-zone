import { priceFilter } from "./filters";
import getData from "./getData";
import renderGoods from "./renderGoods";

const filter = () => {
  const filter = document.querySelector('.filter');
  const min = filter.querySelector('#min');
  const max = filter.querySelector('#max');
  const checkbox = filter.querySelector('#discount-checkbox');

  let minVal = '';
  let maxVal = '';
  let checkboxVal;
  let isChecked = false;

  const filterGoods = () => {
    getData().then(data => renderGoods(priceFilter(data, minVal, maxVal, checkboxVal)));
  };

  filter.addEventListener('input', ev => {
    if (ev.target === min) minVal = ev.target.value;
    if (ev.target === max) maxVal = ev.target.value;
    filterGoods();
  });
  
  checkbox.addEventListener('change', ev => {
    const mark = filter.querySelector('.filter-check_checkmark');
    isChecked = !isChecked;
    if (isChecked) {
      checkboxVal = ev.target.value;
      mark.classList.add('checked');
      filterGoods();
    } else {
      checkboxVal = false;
      mark.classList.remove('checked');
      filterGoods();
    }
  });

}

export default filter;
