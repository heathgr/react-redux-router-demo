import React from 'react';
import { connect } from 'react-redux';
import Content from './Content';
import Navigation from './Navigation';
import NavigationToggle from './NavigationToggle';
import Header from './Header';
import {
  getRoutes,
  getCurrentRoute,
  getIsNavigationVisible,
} from '../reducers/root';
import {
  toggleNavigationVisibility,
} from '../actions/actions';

const App = ({
  routes,
  currentRoute,
  isNavigationVisible,
  toggleNavigationVisibility,
}) => (
  <div className="layout">
    <Content currentRoute={currentRoute} />
    <Navigation
      routes={routes}
      isNavigationVisible={isNavigationVisible}
      currentRoute={currentRoute}
    />
    <NavigationToggle
      isNavigationVisible={isNavigationVisible}
      toggleNavigationVisibility={toggleNavigationVisibility}
    />
    <Header currentRoute={currentRoute} />
  </div>
)

const stateToProps = (state) => ({
  routes: getRoutes(state),
  currentRoute: getCurrentRoute(state),
  isNavigationVisible: getIsNavigationVisible(state),
});

const dispatchToProps = {
  toggleNavigationVisibility,
};

export default connect(stateToProps, dispatchToProps)(App);
