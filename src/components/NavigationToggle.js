import React from 'react';

const NavigationToggle = ({ toggleNavigationVisibility }) => (
  <div onClick={() => toggleNavigationVisibility()} className='nav-toggle'>T</div>
)

export default NavigationToggle;
