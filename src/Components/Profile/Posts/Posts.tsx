import React from "react";
import Post from "./Post/Post"


const Posts = (props:any) => {

  let  PostsData = props.postsData;
  let posts = PostsData.map((p: { id: string; name: string; likesCount: number; })=> <Post name={p.name} likesCount={p.likesCount}/>)

    return(
        <div> <h3>MyPosts</h3>
      {posts}
  </div>
    ) ;
}
export default Posts;