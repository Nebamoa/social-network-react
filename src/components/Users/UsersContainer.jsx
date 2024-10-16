import React, { useEffect } from "react";
import { connect } from "react-redux";

import usersReducer, {
  follow,
  unfollow,
  setPage,
  toggleFollowingProgress,
  getUsers
} from "../../redux/usersReducer";
import Users from "./Users";
import Preloader from "../common/preloader/preloader";

import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";


const UsersContainer = (props) => {

  const {     
    users,
    pageSize,
    totalUsersCount,
    selectedPage,
    isFetching,
    followingInProgress,
    follow,
    unfollow,
    setPage,
    toggleFollowingProgress, 
    getUsers
  } = props;
  useEffect(() => {
    getUsers(selectedPage, pageSize)

  }, [selectedPage]);
  let onPageChanged = (pageNumber) => {
    setPage(pageNumber)
    getUsers(pageNumber, pageSize)
  };
  return (
    <>
      { isFetching ? <Preloader /> : null}
      <Users
        totalUsersCount={totalUsersCount}
        pageSize={pageSize}
        selectedPage={selectedPage}
        onPageChanged={onPageChanged}
        users={users}
        follow={follow}
        unfollow={unfollow}
        isFetching={isFetching}
        toggleFollowingProgress={toggleFollowingProgress}
        followingInProgress={followingInProgress}
      />
    </>
  );
};




const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    selectedPage: state.usersPage.selectedPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
  };
};



export default compose(
  connect(mapStateToProps,  
    {follow,
    unfollow,
    setPage,
    toggleFollowingProgress, 
    getUsers
  }),
  withAuthRedirect,
)(UsersContainer)


// class UsersContainer1 extends React.Component {

//   componentDidMount() {
//     this.props.getUsers(this.props.selectedPage, this.props.pageSize)
//   }

//   onPageChanged = (pageNumber) => {
//     this.props.setPage(pageNumber)
//     this.props.getUsers(pageNumber, this.props.pageSize)
//   };

//   render() {
//     return (
//       <>
//         { this.props.isFetching ? <Preloader /> : null}
//         <Users
//           totalUsersCount={this.props.totalUsersCount}
//           pageSize={this.props.pageSize}
//           selectedPage={this.props.selectedPage}
//           onPageChanged={this.onPageChanged}
//           users={this.props.users}
//           follow={this.props.follow}
//           unfollow={this.props.unfollow}
//           isFetching={this.props.isFetching}
//           toggleFollowingProgress={this.props.toggleFollowingProgress}
//           followingInProgress={this.props.followingInProgress}
//         />
//       </>
//     );
//   }
// }