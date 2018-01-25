import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import Navigation from './Navigation';
import Header from './Header';
import {
  getRoutes,
  getCurrentRoute,
} from '../reducers/root';

const App = ({ routes, currentRoute }) => (
  <div className="layout">
    <Content currentRoute={currentRoute} />
    <Navigation routes={routes} />
    <Header currentRoute={currentRoute} />
  </div>
)

const stateToProps = (state) => ({
  routes: getRoutes(state),
  currentRoute: getCurrentRoute(state),
});

const dispatchToProps = {

};

export default connect(stateToProps, dispatchToProps)(App);
