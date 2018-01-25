import { NAVIGATION_TOGGLE_VISIBILITY } from '../actions/actions';

const initialState = {
  isNavigationVisible: false,
};

const ui = (state = initialState, action) => {
  switch (action.type) {
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
