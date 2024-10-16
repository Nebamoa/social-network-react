import React from "react";
import h from "./Header.module.css";
import Preloader from "../common/preloader/preloader";
import { NavLink } from "react-router-dom";
const Header = (props) => {
  console.log(props.data)
  return (
    <header className={h.header}>
      <img src="https://img.freepik.com/free-vector/bird-colorful-logo-gradient-vector_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703203200&semt=sph"></img>
      <div className={h.loginBlock}>
        
        { props.isAuth ? <span className={h.loginText}>{props.data.login}</span> : <NavLink to={'login'} className={h.loginText}>{'Login'}</NavLink>}
      </div>
    </header>
  );
};

export default Header;
