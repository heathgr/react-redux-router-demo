import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import Navigation from './Navigation';
import StatusBar from './StatusBar';
import {
  getRoutes,
  getCurrentRoute,
} from '../reducers/root';

const App = ({ routes, currentRoute }) => (
  <div className="App">
    <Content currentRoute={currentRoute} />
    <Navigation routes={routes} />
    <StatusBar currentRoute={currentRoute} />
  </div>
)

const stateToProps = (state) => ({
  routes: getRoutes(state),
  currentRoute: getCurrentRoute(state),
});

const dispatchToProps = {

};

export default connect(stateToProps, dispatchToProps)(App);
