import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./Components/Navigation/Nav";

import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";
import ProfileContainer from "./Components/Profile/ProfileContainer";


function App() {
    return (

            <div className="App">
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Nav/>
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer   />}/>
                        <Route path="/dialogs/*" element={<DialogsContainer  />}/>
                        <Route path="/users/*" element={<UsersContainer  />}/>
                        <Route path="/login/*" element={<Login  />}/>
                    </Routes>

                </div>
            </div>


    );
}

export default App;
