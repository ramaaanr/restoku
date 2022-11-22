import Detail from '../views/pages/detail';
import Favorite from '../views/pages/favorite';
import PageNotFound from '../views/pages/page-not-found';
import Restaurant from '../views/pages/restaurant';

const routes = {
  '/': Restaurant,
  '/restaurant': Restaurant,
  '/favorite': Favorite,
  '/detail/:id': Detail,
  '/page-not-found': PageNotFound,
};

export default routes;
