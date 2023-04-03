import React from "react";
import s from "./ProfileInfo.module.css"
import beach from "../../../images/beach.jpg"
const ProfileInfo = () => {
  return(
      <div className={s.profileInfo}>
        <img src={beach} alt={s.beach}/>
        <div className={s.avatar}>Avatar</div>
      </div>
  )
}
export default ProfileInfo;