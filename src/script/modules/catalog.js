import { categoryFilter } from "./filters";
import getData from "./getData";
import renderGoods from "./renderGoods";

const catalog = () => {
  const btn = document.querySelector('.catalog-button > button');
  const catalogModal = document.querySelector('.catalog');
  const catalogModalItems = document.querySelectorAll('.catalog li');

  let isOpen = false;

  btn.addEventListener('click', () => {
    isOpen = !isOpen;

    if (isOpen) {
      catalogModal.style.display = 'block';
    } else {
      catalogModal.style.display = '';
    }
  }
  );

  catalogModalItems.forEach(elem => {
    elem.addEventListener('click', () => {
      const text = elem.textContent;

      isOpen = !isOpen;
      catalogModal.style.display = '';

      getData().then((data) => {
        renderGoods(categoryFilter(data, text));
      }
    );
    }
    );
  }
  );
}

export default catalog;
