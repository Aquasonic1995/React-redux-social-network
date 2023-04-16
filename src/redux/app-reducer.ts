
import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
type InitializeActionType = {
    type: typeof INITIALIZED_SUCCESS,
}
export type AppInitialStateType ={
    initialized:boolean
}

let initialState:AppInitialStateType = {
    initialized: false
};

const appReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }

        default:
            return state;
    }
}


export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch:any) => {
    let promise = dispatch(getAuthUserData());
    //dispatch(somethingelse());
    //dispatch(somethingelse());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });
}


export default appReducer;