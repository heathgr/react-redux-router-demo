const initialState = [
  {
    pathname: '/home',
    displayname: 'Home',
  },
  {
    pathname: '/tempurature',
    displayname: 'Tempurature',
  },
  {
    pathname: '/stocks',
    displayname: 'Stocks',
  },
  {
    pathname: '/word-of-the-day',
    displayname: 'Word Of The Day',
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
