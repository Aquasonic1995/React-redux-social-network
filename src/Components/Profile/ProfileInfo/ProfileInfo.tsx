import React from "react";
import s from "./ProfileInfo.module.css"
import beach from "../../../images/beach.jpg"
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus"
const ProfileInfo = (props:any) => {
    if (!props.profile) {
        return <Preloader />
    }

  return(
      <div className={s.profileInfo}>
        <img src={beach} alt={s.beach}/>
        <div className={s.avatar}>
            <img src={props.profile.photos.large} />
            Avatar</div>
          <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
      </div>
  )
}
export default ProfileInfo;