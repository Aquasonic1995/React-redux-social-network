import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateMessageActionCreator} from "../../redux/dialogs-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state: any) => {
    return{
       dialogs:state.dialog,
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        onSendMessageClick: () => {
            dispatch(sendMessageActionCreator());
        },
        onMessageUpdate: (text: any) => {
            dispatch(updateMessageActionCreator(text));
        }

    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);