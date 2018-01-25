const initialState = [
  {
    pathname: '/home',
    displayname: 'Home',
    component: 'Home',
    icon: 'fa-home',
  },
  {
    pathname: '/temperature',
    displayname: 'Temperature',
    component: 'Temperature',
    icon: 'fa-thermometer-half'
  },
  {
    pathname: '/stocks',
    displayname: 'Stocks',
    component: 'Stocks',
    icon: 'fa-chart-line',
  },
  {
    pathname: '/word-of-the-day',
    displayname: 'Word Of The Day',
    component: 'WordOfTheDay',
    icon: 'fa-font',
  },
]

const routes = (state = initialState, action) => {
  switch(action.type){
    default: {
      return state;
    }
  }
}

export default routes;
