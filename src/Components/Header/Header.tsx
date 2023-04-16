import logo from "../../images/Logo.png";
import React from "react";
import s from "./Header.module.css"
import {NavLink} from "react-router-dom";
type HeaderProps = {
    isAuth: boolean;
    login:any;
    logout: (dispatch:any) => void;
};

const Header = (props:HeaderProps) => {
    return( <header className={s.header}>
        <img src= {logo} alt="Logo"/>
        <div className={s.loginBlock}>
            { props.isAuth
                ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>
                : <NavLink to={'/login'}>Login</NavLink> }
        </div>
    </header>  )
  
}
export default Header;