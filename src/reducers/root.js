import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';
import routes from './routes';

const root = combineReducers({
  routes,
  router,
});

export const getRoutes = (state) => state.routes;
export const getDefaultRoute = (state) => state.routes[0];
export const getLocation = (state) => state.router.location;
export const getCurrentRoute = (state) => {
  const routes = getRoutes(state);
  const location = getLocation(state);
  const currentRoute = routes.find(
    (route) => route.pathname === location.pathname
  );

  return currentRoute;
}

export default root;
