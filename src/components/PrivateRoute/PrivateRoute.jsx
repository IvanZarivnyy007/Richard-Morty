import { useSelector } from 'react-redux';
import { selectLogedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component, redirect = '/' }) => {
  const LogedIn = useSelector(selectLogedIn);
  return LogedIn ? component : <Navigate to={redirect} />;
};

export default PrivateRoute;
