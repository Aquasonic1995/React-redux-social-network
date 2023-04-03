import React from "react";
import {addPostActionCreator, updatePostActionCreator} from "../../../redux/profile-reducer";
import NewPost from "./NewPost";
import {connect} from "react-redux";


const mapStateToProps = (state: any) => {
    return {
        profile:state.profile
    }
}
const mapDispatchToProps = (dispatch:any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onPostChange: (text: any) => {
            let action = updatePostActionCreator(text);
            dispatch(action);
        }
    }
}
const NewPostContainer = connect(mapStateToProps, mapDispatchToProps)(NewPost);

export default NewPostContainer