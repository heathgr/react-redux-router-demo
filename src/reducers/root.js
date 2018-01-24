import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import routes from './routes';

const root = combineReducers({
  routes,
  router,
});

export const getRoutes = (state) => state.routes;
export const getLocation = (state) => state.router.location;
export const getCurrentRoute = (state) => {
  const routes = getRoutes(state);
  const location = getLocation(state);
  console.log('a: ', routes, ' b: ', location);
  const currentRoute = routes.find(
    (route) => route.pathname === location.pathname
  );

  console.log('cr: ', currentRoute);
  return currentRoute;
}

export default root;
