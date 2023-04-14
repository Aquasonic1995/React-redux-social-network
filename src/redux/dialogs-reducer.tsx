const SEND_MESSAGE = 'SEND_MESSAGE';

export type DialogType = {
    id: string;
    name: string;
};

export type MessageType = {
    id: string;
    name: string;
};

export type DialogInitialStateType = {
    dialogsData: Array<DialogType>;
    messagesData: Array<MessageType>;
};

type ActionType = {
    type: typeof SEND_MESSAGE;
    newMessageBody: string;
};

export const sendMessageActionCreator = (newMessageBody: string) => ({
    type: SEND_MESSAGE,
    newMessageBody,
});

let initialState: DialogInitialStateType = {
    dialogsData: [
        { id: '1', name: 'Anna' },
        { id: '2', name: 'Irina' },
        { id: '3', name: 'Rachel' },
    ],
    messagesData: [
        { id: '1', name: 'Hello' },
        { id: '2', name: 'How are you?' },
        { id: '3', name: 'What are you doing right now?' },
    ],
};

const dialogsReducer = (state = initialState, action: ActionType):
    DialogInitialStateType => {
    switch (action.type) {
        case SEND_MESSAGE:
            let text = action.newMessageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, { id: '6', name: text }],
            };
        default:
            return state;
    }
};

export default dialogsReducer;
