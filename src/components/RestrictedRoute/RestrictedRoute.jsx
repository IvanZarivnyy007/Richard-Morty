import { useSelector } from 'react-redux';
import { selectLogedIn } from '../../redux/auth/selectors';
import { NavLink } from 'react-router-dom';

const RestrictedRoute = ({ components, redirect = '/' }) => {
  const LogedIn = useSelector(selectLogedIn);
  return LogedIn ? <NavLink to={redirect} /> : components;
};

export default RestrictedRoute;
