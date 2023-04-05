const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    PostsData: [
        {id: "1", name: "Post1", likesCount: 25000000},
        {id: "2", name: "Post2", likesCount: 600000000},
        {id: "3", name: "Post3", likesCount: 5}
    ],
    newPostText: '',
    profile:null
}
const profileReducer = (state: any = initialState, action: any) => {

    switch (action.type) {
        case ADD_POST :{


            const newPost = {
                id: "5",
                name: state.newPostText,
                likesCount: 0
            }
            return{
                ...state,
                newPostText:"",
                PostsData:[...state.PostsData, newPost]
            }
        }
            return state;
        case UPDATE_POST :{
            return{
                ...state,
                newPostText:action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {...state, profile: action.profile}
        }
        default:
            return state;
    }

}
export const addPostActionCreator = () => {
    return {type: ADD_POST}
}
export const updatePostActionCreator = (text: string) => {
    return {type: UPDATE_POST, newText: text}
}
export const setUserProfile = (profile:any) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;