import React from "react";
import s from "./Nav.module.css"
import {NavLink} from "react-router-dom";
const Nav = () => {
    return (
        <nav className={s.navigation}>
            <div className={s.profile}> <NavLink to= "/profile">Profile</NavLink></div>
            <div className={s.messages}> <NavLink to= "/dialogs">Messages</NavLink></div>
            <div className={s.news}>News</div>
            <div className={s.music}>Music</div>
            <div className={s.settings}>Settings</div>
        </nav>);
}
export default Nav;