import {combineReducers, legacy_createStore} from "redux";
import dialogsReducer from "./dialogs-reducer"
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
let reducers = combineReducers({
    profile:profileReducer,
    dialog:dialogsReducer,
    sidebar:sidebarReducer});
let store = legacy_createStore(reducers);
export default store;