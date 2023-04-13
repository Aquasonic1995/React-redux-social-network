import s from "./Dialogs.module.css"
import React from "react";
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import { Navigate } from "react-router-dom";
import {useForm, SubmitHandler, SubmitErrorHandler} from "react-hook-form";
import {DialogType, MessageType} from "../../redux/dialogs-reducer";

type DialogsProps = {
        dialogsData: Array<DialogType>;
        messagesData:  Array<MessageType>;
    sendMessage: (newMessageBody: string) => void;
    isAuth: boolean;
};

type DialogsFormValues = {
    newMessageBody: string;
};

const Dialogs: React.FC<DialogsProps> = (props) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm<DialogsFormValues>();
    const { dialogsData, sendMessage, isAuth, messagesData } = props;

    const onSubmit: SubmitHandler<DialogsFormValues> = (data) => {
        sendMessage(data.newMessageBody);
        reset();
    };
    const onError :SubmitErrorHandler<DialogsFormValues>= errors => console.log(errors);

    const dialogItems = dialogsData.map((d: { id: string; name: string; }) => <DialogItem key={d.id} name={d.name} id={d.id} />);
    const messageItems = messagesData.map((m: { id: string; name: string; }) => <MessageItem key={m.id} name={m.name} id={m.id} />);
    if (!isAuth) return <Navigate to={"/login"} />;
    return (
        <div className={s.dialogs}>
            <div className={s.dialogues}>
                {dialogItems}
            </div>
            <div className={s.messages}>Messages
                {messageItems}
            </div>
            <form onSubmit={handleSubmit(onSubmit, onError)}>
                <div>
                    <textarea {...register("newMessageBody", { required:{ value:true, message :"ERROR"} , minLength: {value: 4, message: "Your message must be at least 4 characters long"} })} placeholder="Enter your message" />
                    {errors.newMessageBody && <div className={s.error}>{errors.newMessageBody.message}</div>}

                </div>
                <div>
                    <button type="submit">Send</button>
                </div>
            </form>
        </div>
    )
}

export default Dialogs;
