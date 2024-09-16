import { Route, Routes, useLocation } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('../src/pages/Home'));
const Episode = lazy(() => import('../src/pages/Episode'));
const Character = lazy(() => import('../src/pages/Character'));
const Location = lazy(() => import('../src/pages/Location'));

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
    <div className={imgByPage[pageName]}>
      <HeaderBar />
      <Suspense className="loader-one" fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />,
          <Route path="/character" element={<Character />} />,
          <Route path="/location" element={<Location />} />,
          <Route path="/episode" element={<Episode />} />,
        </Routes>
      </Suspense>
      ;
    </div>
  );
};

export default App;
