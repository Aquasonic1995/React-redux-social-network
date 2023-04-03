import s from "./Dialogs.module.css"
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";

const Dialogs = (props: any) => {
    let state = props.dialogs;
    let DialogsData = state.DialogsData;
    let MessagesData = state.MessagesData;
    let newMessageText = state.newMessageText;
    let dialogs = DialogsData.map((d: { id: string; name: string; }) => <DialogItem name={d.name} id={d.id}/>)
    let messages = MessagesData.map((m: { id: string; name: string; }) => <MessageItem name={m.name} id={m.id}/>)
    let onSendMessageClick = () => {
        props.onSendMessageClick();
    };
    let onMessageUpdate = (e: any) => {
        let body = e.target.value;
        props.onMessageUpdate(body);
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogues}>
                {dialogs}
            </div>
            <div className={s.messages}>Messages
                {messages}
            </div>
            <div><textarea value={newMessageText} onChange={onMessageUpdate}></textarea>
                <button onClick={onSendMessageClick}>Send</button>
            </div>


        </div>
    )
}
export default Dialogs;