import React from "react";
import Post from "../Posts/Post/Post";
import s from "../Profile.module.css";
const NewPost = (props: any) => {
    let PostsData = props.profile.PostsData;
    let posts = PostsData.map((p: { id: string; name: string; likesCount: number; })=> <Post name={p.name} likesCount={p.likesCount}/>)
    let newPostText = props.profile.newPostText;
    let newPostElement: any = React.createRef();
    let addPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.onPostChange(text);
    }
    return (<>
            <textarea onChange={onPostChange} ref={newPostElement} value={newPostText} cols={30}
                      rows={10}></textarea>
            <button onClick={addPost}>Add Post</button>
            <div> <h3>MyPosts</h3>
                <div className={s.posts}>
                    {posts}
                </div>
            </div>
        </>
    )
}
export default NewPost