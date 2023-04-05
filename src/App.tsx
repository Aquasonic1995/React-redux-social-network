import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/HeaderContainer";
import Nav from "./Components/Navigation/Nav";
import ProfileContainer from "./Components/Profile/ProfileContainer"
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/MessageItem/DialogsContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";


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
                    </Routes>

                </div>
            </div>


    );
}

export default App;
