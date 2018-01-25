import { fork } from 'redux-saga/effects/';
import takeLocationChange from './takeLocationChange';
import takeRequestAppData from './takeRequestAppData';

function* start() {
  yield fork(takeRequestAppData);
  yield fork(takeLocationChange);
}

export default start;
