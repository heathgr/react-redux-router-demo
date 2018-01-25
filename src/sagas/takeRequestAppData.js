import { call, takeEvery, put } from 'redux-saga/effects/';
import { get } from 'axios';
import { REQUST_APP_DATA, gotAppData } from '../actions/actions';

function getHomeData() {
  return true;
}

function* getStockData() {
  const result = yield get('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,goog,msft&types=quote');
  const { data } = result;
  const { AAPL } = data;
  const { FB } = data;
  const { GOOG } = data;
  const { MSFT } = data;

  return [AAPL, FB, GOOG, MSFT].map(
    company => ({
      symbol: company.quote.symbol,
      name: company.quote.companyName,
      price: company.quote.latestPrice,
      change: company.quote.change,
    })
  )
}

function* getTempData() {
  const result = yield get('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487610&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');

  return result.data.query.results.channel.item.condition.temp;
}

const services = {
  getHomeData,
  getStockData,
  getTempData,
}

function* handleRequestAppData(action) {
  const data = yield call(services[action.payload.service]);

  yield put(gotAppData(action.payload, data));
}

function* takeRequestAppData() {
  yield takeEvery(REQUST_APP_DATA, handleRequestAppData);
}

export default takeRequestAppData;
