import AuthNaviration from '../AuthNavigation/AuthNaviration';
import UserNaviration from '../UserNavigation/UserNaviration';
import { selectLogedIn } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';
import css from './Navigation.module.css';

const Navigation = () => {
  const LogedIn = useSelector(selectLogedIn);
  return (
    <nav className={css.container}>
      {LogedIn ? <UserNaviration /> : <AuthNaviration />}
    </nav>
  );
};

export default Navigation;
