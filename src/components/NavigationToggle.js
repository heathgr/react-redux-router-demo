import React from 'react';

const NavigationToggle = ({ toggleNavigationVisibility, isNavigationVisible }) => (
  <div onClick={() => toggleNavigationVisibility()} className={`nav-toggle ${isNavigationVisible && 'nav-toggle--close'}`}>
    { !isNavigationVisible && <i className="fas fa-bars" /> }
    { isNavigationVisible && <i className="fas fa-times" /> }
  </div>
)

export default NavigationToggle;
