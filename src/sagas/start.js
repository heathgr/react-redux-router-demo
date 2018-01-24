import { fork } from 'redux-saga/effects/';
import takeLocationChange from './takeLocationChange';

function* start() {
  yield fork(takeLocationChange);
}

export default start;
