import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import Loader from './components/Loader/Loader';

const Home = lazy(() => import('./components/pages/Home'));
const Episode = lazy(() => import('./components/pages/Episode'));
const Character = lazy(() => import('./components/pages/Character'));
const Location = lazy(() => import('./components/pages/Location'));

const App = () => {
  return (
    <div>
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
