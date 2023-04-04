import {combineReducers, legacy_createStore} from "redux";
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

let reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});
let store = legacy_createStore(reducers);
export default store;