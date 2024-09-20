import { NavLink } from 'react-router-dom';
import css from './AuthNaviration.module.css';

const AuthNaviration = ({}) => {
  return (
    <div className={css.container}>
      <div className={css.containerHome}>
        <NavLink to="/" className={css.navlink}>
          Home
        </NavLink>
      </div>

      <div className={css.containerRegistration}>
        <NavLink to="/login" className={css.navlink}>
          Login
        </NavLink>
        <NavLink to="/register" className={css.navlink}>
          Registration
        </NavLink>
      </div>
    </div>
  );
};

export default AuthNaviration;
