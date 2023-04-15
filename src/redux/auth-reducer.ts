import {authAPI} from "../API/API";
const ERROR_MESSAGE = 'ERROR_MESSAGE';
const SET_USER_DATA = 'SET_USER_DATA';
export const setAuthUserData = (userId:any, email:any, login:any, isAuth:any) => ({type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}  });
export const errorAC = (error:any) => ({type: ERROR_MESSAGE, payload: {error}})
export type AuthInitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: boolean,
    error:string
}


let initialState:AuthInitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    error:''
};

const authReducer = (state = initialState, action:any):AuthInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload,
            }
        case ERROR_MESSAGE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export const getAuthUserData = () => (dispatch:any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}
export const login = (email:string, password:string,  rememberMe:boolean) => (dispatch:any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
            }
            else {
                let serverErrorMessageResponse = response.data.messages[0];
                dispatch (errorAC(serverErrorMessageResponse))
            }
        });
}

export const logout = () => (dispatch:any) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        });
}
export default authReducer;