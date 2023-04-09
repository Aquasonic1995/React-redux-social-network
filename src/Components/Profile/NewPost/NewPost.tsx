import React from "react";
import Post from "../Posts/Post/Post";
import s from "../Profile.module.css";
import {Field, reduxForm} from "redux-form";

let AddNewPostForm = (props:any) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name="newPostText" component="textarea" />
        </div>
        <div>
            <button>Add post</button>
        </div>
    </form>;
}

let AddNewPostFormRedux = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm);

const NewPost = (props: any) => {
    let PostsData = props.profile.PostsData;
    let posts = PostsData.map((p: { id: string; name: string; likesCount: number; })=> <Post name={p.name} likesCount={p.likesCount}/>)
    let newPostText = props.profile.newPostText;
    let newPostElement: any = React.createRef();
    let onAddPost = (values:any) => {
        props.addPost(values.newPostText);
    }
    return (<>
            <div> <h3>MyPosts</h3>
                <AddNewPostFormRedux onSubmit={onAddPost} />
                <div className={s.posts}>
                    {posts}
                </div>
            </div>
        </>
    )
}
export default NewPost
