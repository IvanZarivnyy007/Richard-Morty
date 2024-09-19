import AuthNaviration from '../AuthNavigation/AuthNaviration';
import UserNaviration from '../UserNavigation/UserNaviration';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';

const Navigation = () => {
  const IsLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.container}>
      {IsLoggedIn ? <UserNaviration /> : <AuthNaviration />}
    </nav>
  );
};

export default Navigation;
