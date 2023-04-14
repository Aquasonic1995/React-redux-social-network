import {authAPI} from "../API/API";

const SET_USER_DATA = 'SET_USER_DATA';

export type AuthInitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: boolean
}


let initialState:AuthInitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
};

const authReducer = (state = initialState, action:any):AuthInitialStateType => {
    switch (action.type) {
        case SET_USER_DATA:

            return {
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
}
export const setAuthUserData = (userId:any, email:any, login:any, isAuth:any) => ({type: SET_USER_DATA, payload:
        {userId, email, login, isAuth}  });

export const getAuthUserData = () => (dispatch:any) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, login, email} = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        });
}
export const login = (email:string, password:string, rememberMe:boolean) => (dispatch:any) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(getAuthUserData())
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