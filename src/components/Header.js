import React from 'react';

const Header = ({ currentRoute }) => (
  <header>
    <h2>
      {currentRoute ? currentRoute.displayname : ''}
    </h2>
  </header>
);

export default Header;
