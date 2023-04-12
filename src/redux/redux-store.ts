import { combineReducers, createStore, applyMiddleware } from "redux";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form';

// Define the types for the application state
type DialogsStateType = ReturnType<typeof dialogsReducer>;
type SidebarStateType = ReturnType<typeof sidebarReducer>;
type ProfileStateType = ReturnType<typeof profileReducer>;
type UsersStateType = ReturnType<typeof usersReducer>;
type AuthStateType = ReturnType<typeof authReducer>;

// Define the root state type
export interface RootStateType  {
    profile: ProfileStateType;
    dialog: DialogsStateType;
    sidebar: SidebarStateType;
    usersPage: UsersStateType;
    auth: AuthStateType;
    form: any; // You can define a type for form state if needed
};

// Combine reducers
const reducers = combineReducers({
    profile: profileReducer,
    dialog: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
});

// Define the store type
export type StoreType = ReturnType<typeof createStore>;

// Create the store with middleware
const store = createStore(reducers, applyMiddleware(thunk));

export default store;
