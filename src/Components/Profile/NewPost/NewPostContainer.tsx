import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../../hoc/withAuthRedirect"
import {compose} from "redux";


const mapStateToProps = (state: any) => {
    return {
        profile:state.profile
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: (newPostText:any) => {
            dispatch(addPostActionCreator(newPostText));
        }
    }
}
export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(NewPost)

// export default NewPostContainer