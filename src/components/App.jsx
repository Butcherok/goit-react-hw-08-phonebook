import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from 'components/Layout/Layout';
import { CssBaseline } from '@mui/material';
import { refreshUser } from 'redux/auth/operations';
import { useDispatch } from 'react-redux';

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
            <Route path="contacts" element={<Contacts />} />
            <Route path="register" element={<Registration />} />
            <Route path="login" element={<Login />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </CssBaseline>
    </>
  );
}