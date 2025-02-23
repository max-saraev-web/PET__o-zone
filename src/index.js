import './scss/style.scss';

import './index.html';
import cart from './script/modules/cart';
import load from './script/modules/load';
import search from './script/modules/search';
import catalog from './script/modules/catalog';
import filter from './script/modules/filter';
import init from './script/modules/init';

document.addEventListener('DOMContentLoaded', async () => {
    init();
    cart();
    load();
    search();
    catalog();
    filter();
  }
);