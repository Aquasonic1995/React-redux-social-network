import {profileAPI} from "../API/API";

const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    PostsData: [
        {id: "1", name: "Post1", likesCount: 25000000},
        {id: "2", name: "Post2", likesCount: 600000000},
        {id: "3", name: "Post3", likesCount: 5}
    ],
    newPostText: '',
    profile:null,
    status:"zxczxczxczxc"
}
const profileReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST :{
            const newPost = {
                id: "5",
                name: action.newPostText,
                likesCount: 0
            }
            return{
                ...state,
                newPostText:"",
                PostsData:[...state.PostsData, newPost]
            }
        }
            return state;
        case SET_STATUS: {debugger;
            return {
                ...state,
                status: action.status
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }

}
export const getUserProfile = (userId:any) => (dispatch:any) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
}
export const getStatus = (userId:any) => (dispatch:any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
}

export const updateStatus = (status:any) => (dispatch:any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
}
export const addPostActionCreator = (newPostText:any) => ({type: ADD_POST, newPostText})
export const setUserProfile = (profile:any) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status:any) => ({type: SET_STATUS, status})

export default profileReducer;