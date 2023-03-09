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
import Org from './org';
import Orgs from './orgs';
import Root from './root';

const RouterProvider = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route path="login" element={<Login />} />
      <Route path="/" element={<RequireAuth><Root /></RequireAuth>}>
        <Route path="home" element={<RequireAuth><Home /></RequireAuth>} />
        <Route path="calendar" element={<RequireAuth><p>Calendar comes here!</p></RequireAuth>} />
        <Route path="chat" element={<RequireAuth><p>Chat comes here!</p></RequireAuth>} />
        <Route path="orgs" element={<RequireAuth><Orgs /></RequireAuth>} />
        <Route path="orgs/:orgSlug" element={<RequireAuth><Org /></RequireAuth>} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default RouterProvider;
