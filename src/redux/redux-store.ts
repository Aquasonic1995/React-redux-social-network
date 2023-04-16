import { combineReducers, createStore, applyMiddleware } from "redux";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import appReducer from "./app-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';


// Define the types for the application state
type DialogsStateType = ReturnType<typeof dialogsReducer>;
type SidebarStateType = ReturnType<typeof sidebarReducer>;
type ProfileStateType = ReturnType<typeof profileReducer>;
type UsersStateType = ReturnType<typeof usersReducer>;
type AuthStateType = ReturnType<typeof authReducer>;
type AppStateType = ReturnType<typeof appReducer>;

// Define the root state type
export interface RootStateType  {
    profile: ProfileStateType;
    dialog: DialogsStateType;
    sidebar: SidebarStateType;
    usersPage: UsersStateType;
    auth: AuthStateType;
    app:AppStateType;
};

// Combine reducers
const reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    app:appReducer
});

// Define the store type
export type StoreType = ReturnType<typeof createStore>;

// Create the store with middleware
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
