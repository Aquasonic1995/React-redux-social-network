import React from "react";
import s from "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import NewPostContainer from "./NewPost/NewPostContainer";
type ProfileProps = {
    profile:any,
    status:string,
    updateStatus:any;
}
const Profile = ({profile, status,updateStatus}:ProfileProps) => {debugger;
   return(<main className={s.main}>
       <ProfileInfo profile = {profile} status={status} updateStatus={updateStatus}/>
       <div className={s.myPosts}>My posts
           <div className={s.newPost}>
               <NewPostContainer />
           </div>
       </div>
   </main>) ;
}
export default Profile;