import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from './components/Loader/Loader';
// import Layout from './components/Layout/Layout';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import RestrictedRoute from './components/RestrictedRoute/RestrictedRoute';
import Navigation from './components/Navigation/Navigation';

const Home = lazy(() => import('../src/pages/Home'));
const Episode = lazy(() => import('../src/pages/Episode'));
const Character = lazy(() => import('../src/pages/Character'));
const Location = lazy(() => import('../src/pages/Location'));
const Login = lazy(() => import('../src/pages/Login'));
const Registration = lazy(() => import('../src/pages/Registration'));

const App = () => {
  const location = useLocation();
  const pageName = location.pathname;
  const imgByPage = {
    '/': 'home-container',
    '/character': 'char-container',
    '/episode': 'epi-container',
    '/location': 'char-container',
  };

  return (
    // <Layout>
    <div className={imgByPage[pageName]}>
      <Navigation />
      <Suspense className="loader-one" fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />,
          <Route
            path="/character"
            element={
              <PrivateRoute component={<Character />} redirect="/login" />
            }
          />
          ,
          <Route
            path="/location"
            element={
              <PrivateRoute component={<Location />} redirect="/login" />
            }
          />
          ,
          <Route
            path="/episode"
            element={<PrivateRoute component={<Episode />} redirect="/login" />}
          />
          ,
          <Route
            path="/login"
            element={<RestrictedRoute components={<Login />} redirect="/" />}
          />
          ,
          <Route
            path="/register"
            element={
              <RestrictedRoute components={<Registration />} redirect="/" />
            }
          />
          ,
        </Routes>
      </Suspense>
      ;
    </div>
    // </Layout>
  );
};

export default App;
