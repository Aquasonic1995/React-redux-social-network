import React from "react";
import Post from "../Posts/Post/Post"; // Importing the Post component
import s from "../Profile.module.css"; // Importing the CSS module
import { useForm, SubmitHandler } from "react-hook-form";
import {Navigate} from "react-router-dom"; // Importing the useForm hook
export type PostProps = {
    profile:{
        PostsData: { id: string; name: string; likesCount:number }[];
    }
    addPost: (newPostText: string) => void;
    isAuth: boolean;
};
type PostFormValues = {
    newPostText: string
};
const NewPost: React.FC<PostProps> = (props) => {
    const { addPost, isAuth, profile} = props;
    const { register, handleSubmit, reset } = useForm<PostFormValues>(); // Destructuring the useForm hook and its methods.
    // const PostsData = props.profile.PostsData; // Getting the PostsData from props
    const posts = profile.PostsData.map((p: { id: string; name: string; likesCount: number; })=> <Post name={p.name} likesCount={p.likesCount}/>);
    // Mapping the PostsData to create Post components with their respective data

    const onSubmit: SubmitHandler<PostFormValues> = (data) => {
        addPost(data.newPostText);
        reset()
    }
    if (!isAuth) return <Navigate to={"/login"} />;
    return (
        <>
            <div>
                <h3>MyPosts</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <textarea {...register("newPostText")} />
                    </div>
                    <div>
                        <button type="submit">Add post</button>
                    </div>
                </form>
                <div className={s.posts}>{posts}</div>  {/*Rendering the Post components*/}
            </div>
        </>
    );
};

export default NewPost; // Exporting the NewPost component
