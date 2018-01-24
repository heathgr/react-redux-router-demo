const initialState = [
  {
    pathname: '/home',
    displayname: 'Home',
    component: 'Home',
  },
  {
    pathname: '/temperature',
    displayname: 'Temperature',
    component: 'Temperature'
  },
  {
    pathname: '/stocks',
    displayname: 'Stocks',
    component: 'Stocks',
  },
  {
    pathname: '/word-of-the-day',
    displayname: 'Word Of The Day',
    component: 'WordOfTheDay',
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
