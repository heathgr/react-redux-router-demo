import { call, takeEvery, select, put } from 'redux-saga/effects/';
import { replace } from 'react-router-redux';
import { getCurrentRoute, getDefaultRoute } from '../reducers/root';
import { requestAppData } from '../actions/actions';

function* handleLocationChange() {
  let currentRoute = yield select(getCurrentRoute);

  // if currentRoute is undefined then it is an invalid route
  // the invalid route gets rerouted to the default route
  if (!currentRoute) {
    currentRoute = yield select(getDefaultRoute);

    yield put(replace(currentRoute.pathname));
  }

  yield put(requestAppData(currentRoute));
}

function* takeLocationChange() {
  yield call(handleLocationChange); // used to handle the initial route used when the page loads
  yield takeEvery('@@router/LOCATION_CHANGE', handleLocationChange);
}

export default takeLocationChange;
