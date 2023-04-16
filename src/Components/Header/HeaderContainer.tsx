import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import Dialogs from "../Dialogs/Dialogs";
import {RootStateType} from "../../redux/redux-store";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStateToPropsType = {
    login: null
};
type MapDispatchToPropsType = {
    logout: (dispatch:any) => void;
};
type PropsFromHOC = {
    isAuth: boolean;
};
const mapStateToProps = (state: RootStateType): MapStateToPropsType => ({
    login: state.auth.login,
});




const connector = connect(mapStateToProps, {logout});
type HeaderProps = MapDispatchToPropsType & MapStateToPropsType & PropsFromHOC;

const HeaderContainer: React.FC<HeaderProps> = (props) => {
    return <Header {...props} />;
};
export default compose(
    connector,
    withAuthRedirect
)(HeaderContainer);
