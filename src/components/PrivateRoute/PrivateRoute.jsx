import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component, redirect = '/' }) => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return IsLoggedIn ? component : <Navigate to={redirect} />;
};

export default PrivateRoute;
