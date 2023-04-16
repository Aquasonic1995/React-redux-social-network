import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import DialogsContainer from './Components/Dialogs/DialogsContainer';
import UsersContainer from './Components/Users/UsersContainer';
import HeaderContainer from './Components/Header/HeaderContainer';
import Login from './Components/Login/Login';
import ProfileContainer from './Components/Profile/ProfileContainer';
import {AppInitialStateType, initializeApp} from './redux/app-reducer';
import Preloader from './Components/common/Preloader/Preloader';
import Nav from "./Components/Navigation/Nav";
import {RootStateType} from "./redux/redux-store";

type Props = {
    initializeApp: any;
    initialized: boolean;
};

const App = ({ initialized, initializeApp }: Props) => {
    const navigate = useNavigate();

    useEffect(( ) => {
        initializeApp();
    }, [ ] )
    if (!initialized) {
        return <Preloader />;
    }

    return (
        <div className="App">
            <div className="app-wrapper">
                <HeaderContainer />
                <Nav />
                <Routes>
                    <Route path="/profile/:userId?" element={<ProfileContainer />} />
                    <Route path="/dialogs/*" element={<DialogsContainer />} />
                    <Route path="/users/*" element={<UsersContainer />} />
                    <Route path="/login/*" element={<Login />} />
                </Routes>
            </div>
        </div>
    );
};

const mapStateToProps = (state: RootStateType) => ({
    initialized: state.app.initialized,
});

export default compose(connect(mapStateToProps, { initializeApp }))(App);
