import React from 'react';

const StatusBar = ({ currentRoute }) => (
  <div>{currentRoute ? currentRoute.displayname : ''}</div>
);

export default StatusBar;
