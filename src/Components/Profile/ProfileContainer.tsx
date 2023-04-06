import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getStatus, updateStatus} from "../../redux/profile-reducer";
import {Navigate, useParams} from 'react-router-dom';
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
export function withRouter(Children:any){
    return(props:any)=>{

        const match  = {params: useParams()};
        return <Children {...props}  match = {match}/>
    }
}


class ProfileContainer extends React.Component <any,any> {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 1049;
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    render() {debugger;
        if (!this.props.isAuth) return <Navigate to='/login' />
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatus} />
        )
    }
}

let mapStateToProps = (state:any) => ({
    profile: state.profile.profile,
    status: state.profile.status
});


export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
    withAuthRedirect, withRouter
)(ProfileContainer);

