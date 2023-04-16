import React, { useEffect } from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile, getStatus, updateStatus, ProfileInitialStateType} from '../../redux/profile-reducer';
import {Navigate, useNavigate, useParams} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import {RootStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    profile:null,
    status:string,
    authorizedUserId: string
};
type MapDispatchToPropsType = {
    getUserProfile: (userId: string | null) => void,
    getStatus: (userId: string| null) => void,
    updateStatus: (status: string) => void
};
const mapStateToProps = (state:RootStateType):MapStateToPropsType => ({
    profile: state.profile.profile,
    status: state.profile.status,
    authorizedUserId: state.auth.userId,

});
const mapDispatchToProps: MapDispatchToPropsType = {
    getUserProfile,
    getStatus,
    updateStatus
};

type PropsFromHOC = {
    isAuth: boolean;
};
type ProfileProps = MapDispatchToPropsType & MapStateToPropsType & PropsFromHOC;
const connector = connect(mapStateToProps, mapDispatchToProps);
const ProfileContainer:React.FC<ProfileProps>= (props)=> {
    let { userId } = useParams();
    let navigate = useNavigate();

    useEffect(() =>{
        if (!userId) {
            userId = props.authorizedUserId;
            if (!userId) {
                navigate('/login')
            }
        }

        if (userId){
            props.getUserProfile(userId);
            props.getStatus(userId);
        }
    },[]);


    if (!props.isAuth) navigate('/login');

    return <Profile {...props} />;
};
export default compose
(connector, withAuthRedirect)(ProfileContainer);

