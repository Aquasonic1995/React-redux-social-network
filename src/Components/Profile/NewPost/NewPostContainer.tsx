import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { RootStateType } from "../../../redux/redux-store";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import NewPost from "./NewPost";
import { addPostActionCreator, ProfileInitialStateType } from "../../../redux/profile-reducer";

type MapStateToPropsType = {
    profile: ProfileInitialStateType;
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        profile: state.profile,
    };
};

type MapDispatchToPropsType = {
    addPost: (newPostText: string) => void;
}

const mapDispatchToProps = (dispatch: any): MapDispatchToPropsType => {
    return {
        addPost: (newPostText: string) => {
            dispatch(addPostActionCreator(newPostText));
        },
    };
};
const connector = connect(mapStateToProps, mapDispatchToProps);





type PropsFromHOC = {
    isAuth: boolean;
};

type PostProps = MapStateToPropsType & MapDispatchToPropsType & PropsFromHOC

const NewPostContainer: React.FC<PostProps> = (props) => {
    return <NewPost {...props} />;
};

export default compose(connector, withAuthRedirect)(NewPostContainer);
