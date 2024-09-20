import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';

const RestrictedRoute = ({ component, redirect = '/' }) => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return IsLoggedIn ? <Navigate to={redirect} /> : component;
};

export default RestrictedRoute;
