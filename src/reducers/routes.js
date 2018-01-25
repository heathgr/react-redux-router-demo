import { GOT_APP_DATA } from '../actions/actions';

const initialState = [
  {
    pathname: '/home',
    displayname: 'Home',
    component: 'Home',
    service: 'getHomeData',
    icon: 'fa-home',
  },
  {
    pathname: '/temperature',
    displayname: 'Temperature',
    component: 'Temperature',
    service: 'getTempData',
    icon: 'fa-thermometer-half'
  },
  {
    pathname: '/stocks',
    displayname: 'Stocks',
    component: 'Stocks',
    service: 'getStockData',
    icon: 'fa-chart-line',
  },
]

const routes = (state = initialState, action) => {
  switch(action.type){
    case GOT_APP_DATA: {
      return state.map(
        (route) => {
          if (route.pathname === action.payload.route.pathname) {
            return {
              ...route,
              data: action.payload.data,
            }
          }

          return route;
        }
      )
    }
    default: {
      return state;
    }
  }
}

export default routes;
