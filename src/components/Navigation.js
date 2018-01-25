import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ routes }) => (
  <nav>
    <ul>
      {
        routes.map(
          (route) => (
            <li key={route.pathname}>
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
