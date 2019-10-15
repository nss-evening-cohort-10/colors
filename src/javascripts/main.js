// import arrayMethods from './arrayMethods';
import cardList from './components/cardList/cardList';
import c from './helpers/data/color';

import '../styles/main.scss';

const init = () => {
  // arrayMethods.init();
  const colors = c.getColors();
  cardList.cardListEvents();
  cardList.cardListBuilder(colors);
};

init();
