import { NavLink } from 'react-router-dom';
import css from './UserNaviration';
import { fetchUserLogout } from './../../redux/auth/operations';
import { useDispatch } from 'react-redux';

const UserNaviration = ({}) => {
  const dipatch = useDispatch();

  const handleLogout = () => {
    dipatch(fetchUserLogout());
  };

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

      <div className={css.buttonLogout}>
        <button className={css.navlink} onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserNaviration;
