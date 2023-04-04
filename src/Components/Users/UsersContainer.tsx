import React from "react";
import {followToggleAC, setUsersAC, setUsersTotalCountAC, setCurrentPageAC} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import axios from "axios";

class UsersContainer extends React.Component<any,any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            });
    }

    onPageChanged = (pageNumber: any) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }


    render() {
        return <Users
            totalUsersCount =  {this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            followToggle={this.props.followToggle}
        />
    }
}

let mapStateToProps =(state:any)=>{
    return{
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage
    }
}


let mapDispatchToProps =(dispatch:any) =>{
    return{
        followToggle:(userId:any) =>{
            dispatch(followToggleAC(userId))
        },
        setUsers:(users:any)=>{
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber:any) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount:any) => {
            dispatch(setUsersTotalCountAC(totalCount))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
// export default UsersContainer;