export const sendMessageActionCreator = () => {
    return {type: "ADD-MESSAGE"}
}
export const updateMessageActionCreator = (text: string) => {
    return {type: "UPDATE-MESSAGE",  text}
}
let initialState = {
    DialogsData:
        [{id: "1", name: "Anna"},
            {id: "2", name: "Irina"},
            {id: "3", name: "Rachel"}],
    MessagesData:
        [{id: "1", name: "Hello"},
            {id: "2", name: "How are you?"},
            {id: "3", name: "What are you doing right now?"}],
    newMessageText: ""
}
 const dialogsReducer = (state: any = initialState, action: any) => {
    debugger;
    switch (action.type) {
        case "ADD-MESSAGE" :
            let text = state.newMessageText;
            return {
                ...state,
                newMessageText: "",
                MessagesData: [...state.MessagesData, {id: 6, name:text}]
            }
        case "UPDATE-MESSAGE" :
            return {
                ...state,
                newMessageText :action.text 
            }
        default: return state;
    }
}
export default dialogsReducer;