import { searchFilter } from "./filters";
import getData from "./getData";
import renderGoods from "./renderGoods";

const search = () => {
  const search = document.querySelector('.search-wrapper_input');

  search.addEventListener('input', ev => {
    const value = ev.target.value;

    getData().then(data=> {
      renderGoods(searchFilter(data, value))
    });
  }
  );
};

export default search;