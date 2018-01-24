import { call, takeEvery, select, put } from 'redux-saga/effects/';
import { replace } from 'react-router-redux';
import { getCurrentRoute, getDefaultRoute } from '../reducers/root';

function* handleLocationChange() {
  const currentRoute = yield select(getCurrentRoute);

  // if currentRoute is undefined then it is an invalid route
  // the invalid route gets rerouted to the default route
  if (!currentRoute) {
    const defaultRoute = yield select(getDefaultRoute);

    yield put(replace(defaultRoute.pathname));
  }
}

function* takeLocationChange() {
  yield call(handleLocationChange); // used to handle the initial route used when the page loads
  yield takeEvery('@@router/LOCATION_CHANGE', handleLocationChange);
}

export default takeLocationChange;
