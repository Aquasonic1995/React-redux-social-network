import React from "react";
import {
    getUsers,
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";




class UsersContainer extends React.Component<any,any> {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);

    }

    onPageChanged = (pageNumber: any) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
            followingInProgress={this.props.followingInProgress}
            follow={this.props.follow}
            unfollow={this.props.unfollow}
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


export default compose(
    withAuthRedirect,
    connect(mapStateToProps,{follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })
)(UsersContainer)