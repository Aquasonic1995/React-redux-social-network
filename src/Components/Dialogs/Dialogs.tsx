import s from "./Dialogs.module.css"
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {Navigate} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
const Dialogs = (props: any) => {
    let state = props.dialogs;
    let DialogsData = state.DialogsData;
    let MessagesData = state.MessagesData;
    let dialogs = DialogsData.map((d: { id: string; name: string; }) => <DialogItem name={d.name} id={d.id}/>)
    let messages = MessagesData.map((m: { id: string; name: string; }) => <MessageItem name={m.name} id={m.id}/>)

    let addNewMessage = (values:any) => {
        props.sendMessage(values.newMessageBody);
    }
    if (!props.isAuth) return <Navigate to={"/login"} /> ;

    return (
        <div className={s.dialogs}>
            <div className={s.dialogues}>
                {dialogs}
            </div>
            <div className={s.messages}>Messages
                {messages}
            </div>
            <AddMessageFormRedux onSubmit={addNewMessage} />
        </div>
    )
}
const AddMessageForm = (props:any) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name="newMessageBody" placeholder="Enter your message" />
            </div>
            <div><button>Send</button></div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);
export default Dialogs;