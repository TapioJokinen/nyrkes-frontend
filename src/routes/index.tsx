import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import RequireAuth from '../components/wrappers/RequireAuth';
import NotFound from './404';
import Login from './login';
import Root from './root';

const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<RequireAuth><Root /></RequireAuth>}>
        <Route path="home" element={<RequireAuth><p>Home sweet home</p></RequireAuth>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
