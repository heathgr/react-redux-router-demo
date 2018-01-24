import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({ routes }) => (
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
);

export default Navigation;
