import React from "react";
import s from "./ProfileInfo.module.css"
import beach from "../../../images/beach.jpg"
import Preloader from "../../common/Preloader/Preloader";
const ProfileInfo = (props:any) => {   debugger;
    if (!props.profile) {
        return <Preloader />
    }

  return(
      <div className={s.profileInfo}>
        <img src={beach} alt={s.beach}/>
        <div className={s.avatar}>
            <img src={props.profile.photos.large} />
            Avatar</div>
      </div>
  )
}
export default ProfileInfo;