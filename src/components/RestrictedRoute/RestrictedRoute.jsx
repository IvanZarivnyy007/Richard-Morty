import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

const RestrictedRoute = ({ components, redirect = '/' }) => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return IsLoggedIn ? <NavLink to={redirect} /> : components;
};

export default RestrictedRoute;
