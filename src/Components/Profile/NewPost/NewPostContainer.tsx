import React from "react";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


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
const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer