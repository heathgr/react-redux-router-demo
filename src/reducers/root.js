import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

const root = combineReducers({
  router,
});

export default root;
