import { get } from 'axios';

function* axiosTest () {
  const data1 = yield get('https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20%3D%202487610&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys');
  console.log('d1: ', data1);
  const data2 = yield get('https://api.iextrading.com/1.0/stock/market/batch?symbols=aapl,fb,goog,msft&types=quote');
  console.log('d2: ', data2);
}

export default axiosTest;
