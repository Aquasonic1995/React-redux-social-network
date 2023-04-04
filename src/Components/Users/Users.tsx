import React from 'react';
import s from './users.module.css';

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
                        <img src={u.photos.small != null ? u.photos.small : u.userPhoto} className={s.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                props.followToggle(u.id)
                            }}>Unfollow</button>
                            : <button onClick={() => {
                                props.followToggle(u.id)
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
