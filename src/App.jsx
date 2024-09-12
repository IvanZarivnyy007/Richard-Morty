import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import HeaderBar from './components/HeaderBar/HeaderBar';
import BackgroundImage from './components/BackgroundImage/BackgroundImage';

// import { useDispatch } from 'react-redux';

const Home = lazy(() => import('./components/pages/Home'));
const Episode = lazy(() => import('./components/pages/Episode'));
const Character = lazy(() => import('./components/pages/Character'));
const Location = lazy(() => import('./components/pages/Location'));

const App = () => {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchGetCharacter());
  //   dispatch(fetchGetLocation());
  //   dispatch(fetchGetEpisode());
  // }, []);

  return (
    <div>
      <HeaderBar />
      <BackgroundImage />
      <Suspense fallback={<div>Loading...</div>}>
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
