import { NavLink } from "react-router-dom";

import s from "./Navbar.module.css";

const navActive = ({ isActive }) => (isActive ? s.active : s.item);

const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to="/profile" className={navActive}>
          Profile
        </NavLink>
      </div>

      <div className={`${s.item} ${s.active}`}>
        <NavLink to="/dialogs" className={navActive}>
          Messages
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to="/users" className={navActive}>
          Users
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/news" className={navActive}>
          News
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/music" className={navActive}>
          Music
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to="/settings" className={navActive}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
