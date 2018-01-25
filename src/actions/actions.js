export const NAVIGATION_TOGGLE_VISIBILITY = 'NAVIGATION_TOGGLE_VISIBILITY';
export const REQUST_APP_DATA = 'REQUST_APP_DATA';
export const GOT_APP_DATA = 'GOT_APP_DATA';
export const LOCATION_CHANGE = '@@router/LOCATION_CHANGE';

export const toggleNavigationVisibility = () => ({
  type: NAVIGATION_TOGGLE_VISIBILITY,
});

export const requestAppData = (route) => ({
  type: REQUST_APP_DATA,
  payload: route,
});

export const gotAppData = (route, data) => ({
  type: GOT_APP_DATA,
  payload: {
    route,
    data,
  },
})
