import { profileAPI } from "../API/API";

// Types
type PostsDataType = {
    id: string,
    name: string,
    likesCount: number
}



export type ProfileInitialStateType = {
    PostsData: Array<PostsDataType>,
    newPostText: string,
    profile: null ,
    status: string
}

// Action Types
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

type AddPostActionType = {
    type: typeof ADD_POST,
    newPostText: string
}

type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE,
    profile: any // replace 'any' with the actual type
}

type SetStatusActionType = {
    type: typeof SET_STATUS,
    status: string
}

type ProfileActionTypes =
    AddPostActionType
    | SetUserProfileActionType
    | SetStatusActionType;

// Initial State
let initialState: ProfileInitialStateType = {
    PostsData: [
        {id: "1", name: "Post1", likesCount: 25000000},
        {id: "2", name: "Post2", likesCount: 600000000},
        {id: "3", name: "Post3", likesCount: 5}
    ],
    newPostText: '',
    profile: null ,
    status:"zxczxczxczxc"
}

// Reducer
const profileReducer = (state = initialState, action: ProfileActionTypes): ProfileInitialStateType => {

    switch (action.type) {
        case ADD_POST:
            const newPost = {
                id: "5",
                name: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                newPostText: "",
                PostsData: [...state.PostsData, newPost]
            };
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            };
        case SET_USER_PROFILE:
            return {...state, profile: action.profile};
        default:
            return state;
    }
}

// Action Creators
export const addPostActionCreator = (newPostText: string): AddPostActionType => ({
    type: ADD_POST,
    newPostText
});

export const setUserProfile = (profile: any): SetUserProfileActionType => ({
    type: SET_USER_PROFILE,
    profile
});

export const setStatus = (status: string): SetStatusActionType => ({
    type: SET_STATUS,
    status
});

// Thunk Creators
export const getUserProfile = (userId: number) => (dispatch: any) => {
    profileAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    });
};

export const getStatus = (userId: number) => (dispatch: any) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatus(response.data));
        });
};

export const updateStatus = (status: string) => (dispatch: any) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        });
};

export default profileReducer;
