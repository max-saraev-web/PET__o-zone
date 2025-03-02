import { searchFilter } from "./filters";
import getData from "./getData";
import renderGoods from "./renderGoods";

const search = () => {
  const search = document.querySelector('.search-wrapper_input');
  let final;

  search.addEventListener('input', ev => {
    const value = ev.target.value;

    clearInterval(final);
    final = setTimeout(() => {
      getData().then(data=> {
      renderGoods(searchFilter(data, value))
    });
    }, 2500
    )


    
  }
  );
};

export default search;