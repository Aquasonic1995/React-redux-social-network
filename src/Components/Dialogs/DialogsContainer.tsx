import React from "react";
import Dialogs from "./Dialogs";
import {sendMessageActionCreator} from "../../redux/dialogs-reducer";
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
        sendMessage: (newMessageBody:any) => {
            dispatch(sendMessageActionCreator(newMessageBody));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);