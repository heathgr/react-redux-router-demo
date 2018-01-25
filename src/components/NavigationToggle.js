import React from 'react';

const NavigationToggle = ({ toggleNavigationVisibility, isNavigationVisible }) => (
  <div onClick={() => toggleNavigationVisibility()} className={`nav-toggle ${isNavigationVisible && 'nav-toggle--close'}`}>
    { !isNavigationVisible && <i class="fas fa-bars" /> }
    { isNavigationVisible && <i class="fas fa-times" /> }
  </div>
)

export default NavigationToggle;
