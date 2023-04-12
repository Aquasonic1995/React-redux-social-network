import React from "react";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { RootStateType } from "../../redux/redux-store";
import {DialogInitialStateType, DialogType, MessageType, sendMessageActionCreator} from "../../redux/dialogs-reducer";


type MapStateToPropsType = {
    dialogsData: Array<DialogType>;
    messagesData: Array<MessageType>;
};


type MapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void;
};

const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        dialogsData: state.dialog.dialogsData,
        messagesData: state.dialog.messagesData

    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(sendMessageActionCreator(newMessageBody));
        },
    };
};


type PropsFromHOC = {
    isAuth: boolean;
};
const connector = connect(mapStateToProps, mapDispatchToProps);

type DialogsProps = MapDispatchToPropsType & MapStateToPropsType & PropsFromHOC;

const DialogsContainer: React.FC<DialogsProps> = (props) => {
    return <Dialogs {...props} />;
};

export default compose(
    connector,
    withAuthRedirect
)(DialogsContainer);
