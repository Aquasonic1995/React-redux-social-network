import ava from "../../../../images/Ava.png"
import s from "./Post.module.css"
import React from "react";

const Post = (props:any) => {
    let  likes = " Likes count : " + props.likesCount;
  return(
      <div className={s.postWrapper}>{props.name}{likes}
          <img src= {ava} alt="ava"/>
      </div>
  )
}


export default Post;