import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <div className={css.container}>
      <NavLink to="/" className={css.navlink}>
        Home
      </NavLink>
      <NavLink to="/character" className={css.navlink}>
        Character
      </NavLink>
      <NavLink to="/location" className={css.navlink}>
        Location
      </NavLink>
      <NavLink to="/episode" className={css.navlink}>
        Episode
      </NavLink>
    </div>
  );
};

export default Navigation;
