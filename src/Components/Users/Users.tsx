import React from 'react';
import s from './users.module.css';
import {NavLink} from "react-router-dom";
import axios from "axios";
let Users = (props:any) =>{

        let pagesCount = Math.ceil (props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i=1; i <= pagesCount; i++) {
            if (pages.length < 45   )
            pages.push(i);
        }
    return <div>
        <div className = {s.wrapper}>

        { pages.map(p  => {
            return  <div className =  {props.currentPage === p ? s.selectedPage : ""}
                         onClick={(e) => { props.onPageChanged(p)}}>{p}</div>
        })}</div>
        {
            props.users.map((u:{id:any, photos:any, userPhoto:any, followed:boolean, name:any, status:any}) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small != null ? u.photos.small : u.userPhoto} className={s.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingInProgress.some((id: any) => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "cdeb2d03-8fb6-43f9-b42a-f68cc3f9b75a"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.followToggle(u.id);
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });



                            }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some((id: any) => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
                                    }
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.followToggle(u.id);
                                        }
                                        props.toggleFollowingProgress(false, u.id);
                                    });
                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}



export default Users;
