import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostContainer from "./NewPost/NewPostContainer";

const Profile = (props:any) => {
   return(<main className={s.main}>
       <ProfileInfo profile = {props.profile} status={props.status} updateStatus={props.updateStatus}/>
       <div className={s.myPosts}>My posts
           <div className={s.newPost}>
               <NewPostContainer/>
           </div>
       </div>
   </main>) ;
}
export default Profile;