import './scss/style.scss';

import './index.html';
import cart from './script/modules/cart';
import load from './script/modules/load';
import search from './script/modules/search';
import catalog from './script/modules/catalog';

document.addEventListener('DOMContentLoaded', async () => {
    cart();
    load();
    search();
    catalog();
  }
);