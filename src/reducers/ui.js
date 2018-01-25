import {
  NAVIGATION_TOGGLE_VISIBILITY,
  LOCATION_CHANGE,
} from '../actions/actions';

const initialState = {
  isNavigationVisible: false,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
    case LOCATION_CHANGE: {
      return {
        ...state,
        isNavigationVisible: false,
      }
    }
    case NAVIGATION_TOGGLE_VISIBILITY: {
      return {
        ...state,
        isNavigationVisible: !state.isNavigationVisible,
      }
    }
    default: {
      return state;
    }
  }
}

export default ui;
