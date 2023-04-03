import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {

    _state: {
        profile:
            {newPostText: "IT",
                PostsData: [
                    {id: "1", name: "Post1", likesCount: 25000000000000000},
                    {id: "2", name: "Post2", likesCount: 6},
                    {id: "3", name: "Post3", likesCount: 5}],
            },


        dialog: {
            DialogsData: [{id: "1", name: "Anna"},
                {id: "2", name: "Irina"},
                {id: "3", name: "Rachel"}],
            MessagesData: [{id: "1", name: "Hello"},
                {id: "2", name: "How are you?"},
                {id: "3", name: "What are you doing right now?"}],
            newMessageText: ""
        },
        sidebar: {}
    },


    _callSubscriber() {
    },
    subscribe(observer: any) {
        this._callSubscriber = observer;
    },


    getState() {return this._state;},

    dispatch(action: any) {
        // this._state=store.this._state.bind(store)
        this._state.profile = profileReducer(this._state.profile, action);
        this._state.dialog = dialogsReducer(this._state.dialog, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber();
    },

}



export default store;