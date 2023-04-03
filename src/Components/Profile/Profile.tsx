import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from "./Posts/Posts";
import NewPostContainer from "./NewPost/NewPostContainer";

const Profile = () => {
   return(<main className={s.main}>
       <ProfileInfo/>
       <div className={s.myPosts}>My posts
           <div className={s.newPost}>
               <NewPostContainer/>
           </div>
       </div>
   </main>) ;
}
export default Profile;