import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { CssBaseline } from '@mui/material';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';

const Home = lazy(() => import('Pages/Home'));
const Contacts = lazy(() => import('Pages/Contacts'));
const Registration = lazy(() => import('Pages/Registration'));
const Login = lazy(() => import('Pages/Login'));
const NotFound = lazy(() => import('Pages/NotFound'));

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <CssBaseline>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={Registration}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={Login} redirectTo="/contacts" />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={Contacts} redirectTo="/login" />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </CssBaseline>
    </>
  );
}
