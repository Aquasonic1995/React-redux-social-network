import React from 'react';
import Profile from "./Profile";
import  axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import { useParams } from 'react-router-dom';
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
            userId = 2;
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data);
            });
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state:any) => ({
    profile: state.profile.profile
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);