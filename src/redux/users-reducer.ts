import {usersAPI} from "../API/API";

const FOLLOW_TOGGLE = "FOLLOW_TOGGLE";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';
export const followToggleSuccess = (userId:any) => ({type: FOLLOW_TOGGLE, userId })
export const setUsers = (users:any) => ({type: SET_USERS, users })
export const setCurrentPage = (currentPage:any) => ({type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCount = (totalUsersCount:any) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const toggleIsFetching = (isFetching:any) => ({type: TOGGLE_IS_FETCHING, isFetching })
export const toggleFollowingProgress = (isFetching:any, userId:any) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId })


let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 56,
    currentPage: 2,
    isFetching:false,
    followingInProgress:[]
}

const usersReducer = (state = initialState, action:any )=> {
    switch (action.type) {
        case FOLLOW_TOGGLE :
            return {

                ...state,
                users: state.users.map((u:{id:any, followed:boolean}) => {
                    if (u.id === action.userId) {
                        return {...u, followed: !u.followed}
                    }
                    return u;

                })
            }

            case SET_USERS: {

            return { ...state, users: [...action.users ]}

        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.count}
        }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            }
        }
        default:
            return state;
    }
}
export const getUsers = (currentPage:any, pageSize:any) => {
    return (dispatch:any) => {
        dispatch(toggleIsFetching(true));

        usersAPI.getUsers(currentPage, pageSize).then(data => {
            dispatch(toggleIsFetching(false));
            dispatch(setCurrentPage(currentPage));
            dispatch(setUsers(data.items));
            dispatch(setUsersTotalCount(data.totalCount));
        });
    }
}
export const follow = (userId:any) => {
    return (dispatch:any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followToggleSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}
export const unfollow = (userId:any) => {
    return (dispatch:any) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(followToggleSuccess(userId));
                }
                dispatch(toggleFollowingProgress(false, userId));
            });
    }
}



export default usersReducer;