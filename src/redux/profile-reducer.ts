const ADD_POST = 'ADD-POST';
const UPDATE_POST = 'UPDATE-POST';

let initialState = {
    PostsData: [
        {id: "1", name: "Post1", likesCount: 25000000},
        {id: "2", name: "Post2", likesCount: 600000000},
        {id: "3", name: "Post3", likesCount: 5}
    ],
    newPostText: ''
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

export default profileReducer;