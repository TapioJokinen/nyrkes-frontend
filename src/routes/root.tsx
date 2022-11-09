import React from 'react';

import { Outlet } from 'react-router-dom';

const Root = () => (
  <div>
    <p>You are on page &apos;/&apos;</p>
    <Outlet />
  </div>
);

export default Root;
