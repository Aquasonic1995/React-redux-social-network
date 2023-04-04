const FOLLOW_TOGGLE = "FOLLOW_TOGGLE";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const followToggleAC = (userId:any) => ({type: FOLLOW_TOGGLE, userId })
export const setUsersAC = (users:any) => ({type: SET_USERS, users })
export const setCurrentPageAC = (currentPage:any) => ({type: SET_CURRENT_PAGE, currentPage })
export const setUsersTotalCountAC = (totalUsersCount:any) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })

let initialState = {
    users:[],
    pageSize: 5,
    totalUsersCount: 56,
    currentPage: 2
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
        default:
            return state;
    }
}



export default usersReducer;