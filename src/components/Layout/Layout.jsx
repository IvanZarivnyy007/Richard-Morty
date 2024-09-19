import { Suspense } from 'react';
import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <AppBar />
      </header>
      <Suspense className="loader-one" fallback={<Loader />}>
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
