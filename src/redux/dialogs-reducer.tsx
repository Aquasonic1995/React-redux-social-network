const SEND_MESSAGE = 'SEND_MESSAGE';
export const sendMessageActionCreator = (newMessageBody:any) => ({type: SEND_MESSAGE, newMessageBody})
let initialState = {
    DialogsData:
        [{id: "1", name: "Anna"},
            {id: "2", name: "Irina"},
            {id: "3", name: "Rachel"}],
    MessagesData:
        [{id: "1", name: "Hello"},
            {id: "2", name: "How are you?"},
            {id: "3", name: "What are you doing right now?"}],
}
 const dialogsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
        case "SEND_MESSAGE" :
            let text = action.newMessageBody;
            return {
                ...state,
                MessagesData: [...state.MessagesData, {id: 6, name:text}]
            }
        default: return state;
    }
}
export default dialogsReducer;