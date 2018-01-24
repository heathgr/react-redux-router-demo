import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import createHistory from 'history/createBrowserHistory'
import {
  ConnectedRouter,
  routerMiddleware as createRouterMiddleware
} from 'react-router-redux'
import App from './components/App';
import root from './reducers/root';
import start from './sagas/start';
import registerServiceWorker from './registerServiceWorker';

// setup saga middleware
const sagaMiddleware = createSagaMiddleware();

// setup react-router-redux middleware
const history = createHistory();
const routerMiddleware = createRouterMiddleware(history);

// an array of the redux middleware that will be used
const middleware = [
  sagaMiddleware,
  routerMiddleware,
];

// injects the redux dev tools into the middleware
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

// composed version of the middleware
const enhancer = composeEnhancers(
  applyMiddleware(...middleware)
);

const store = createStore(
  root,
  enhancer
);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
sagaMiddleware.run(start);
registerServiceWorker();
