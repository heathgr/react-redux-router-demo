import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ routes, currentRoute, isNavigationVisible }) => (
  <nav className={isNavigationVisible ? 'nav--visible' : null }>
    <ul>
      {
        routes.map(
          (route) => (
            <li key={route.pathname} className={ route.pathname === currentRoute.pathname ? 'nav__li--active' : null}>
              <i className={`fas ${route.icon}`} />
              <Link to={route.pathname}>
                {route.displayname}
              </Link>
            </li>
          )
        )
      }
    </ul>
  </nav>
);

export default Navigation;
