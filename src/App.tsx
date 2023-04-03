import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Navigation/Nav";
import Profile from "./Components/Profile/Profile";
import {Route, Routes, BrowserRouter} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/MessageItem/DialogsContainer";


function App(props:any) {
    return (

            <div className="App">
                <div className="app-wrapper">
                    <Header/>
                    <Nav/>
                    <Routes>
                        <Route path="/profile/*" element={<Profile   />}/>
                        <Route path="/dialogs/*" element={<DialogsContainer  />}/>
                    </Routes>

                </div>
            </div>


    );
}

export default App;
