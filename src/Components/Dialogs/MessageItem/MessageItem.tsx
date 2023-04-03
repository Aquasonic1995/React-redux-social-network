import React from "react";
import s from "./MessageItem.module.css";
const MessageItem = (props:any) => {

    return ( <div className={s.messageItem}>
            {props.name}</div>

    )
}
export default MessageItem