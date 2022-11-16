import React from 'react';

import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';

import RequireAuth from '../components/wrappers/RequireAuth';
import NotFound from './404';
import Home from './home';
import Login from './login';
import Root from './root';

const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<RequireAuth><Root /></RequireAuth>}>
        <Route path="home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="dashboard" element={<RequireAuth><p>Dashboard statistics!</p></RequireAuth>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
