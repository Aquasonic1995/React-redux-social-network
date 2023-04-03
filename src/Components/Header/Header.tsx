import logo from "./../../images/Logo.png"
import React from "react";
import s from "./Header.module.css"
const Header = () => {
    return( <header className={s.header}>
        <img src= {logo} alt="Logo"/>
    </header>  )
  
}
export default Header;