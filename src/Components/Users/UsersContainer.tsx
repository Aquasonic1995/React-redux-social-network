import React from "react";
import {
    followToggle,
    setCurrentPage,
    setUsers,
    setUsersTotalCount,
    toggleFollowingProgress,
    toggleIsFetching,
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import axios from "axios";
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../API/API";



class UsersContainer extends React.Component<any,any> {
    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);

            });
    }

    onPageChanged = (pageNumber: any) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(data.items);
            });
    }


    render() {
        return<>
            { this.props.isFetching ? <Preloader /> : null }
        <Users
            totalUsersCount =  {this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            onPageChanged={this.onPageChanged}
            users={this.props.users}
            followToggle={this.props.followToggle}
            toggleFollowingProgress={this.props.toggleFollowingProgress}
            followingInProgress={this.props.followingInProgress}
        />
        </>
    }
}

let mapStateToProps =(state:any)=>{
    return{
        users:state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
}


export default connect(mapStateToProps,
    {followToggle, setUsers, setCurrentPage, setUsersTotalCount, toggleIsFetching, toggleFollowingProgress})(UsersContainer);
