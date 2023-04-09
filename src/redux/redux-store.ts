import {combineReducers, legacy_createStore, applyMiddleware} from "redux";
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth:authReducer,
    form: formReducer
});
let store = legacy_createStore(reducers, applyMiddleware(thunk));
export default store;