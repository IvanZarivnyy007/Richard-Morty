import { NavLink } from 'react-router-dom';
import css from './AuthNaviration.module.css';

const AuthNaviration = ({}) => {
  return (
    <div className={css.container}>
      <NavLink to="/" className={css.navlink}>
        Home
      </NavLink>
      <div className={css.containerRegistration}>
        <NavLink to="/register" className={css.navlink}>
          Registration
        </NavLink>
        <NavLink to="/login" className={css.navlink}>
          Login
        </NavLink>
      </div>
    </div>
  );
};

export default AuthNaviration;
