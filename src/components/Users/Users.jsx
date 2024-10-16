import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { userAPI } from "../../api/api";
import { follow, unfollow } from "../../redux/usersReducer";

let Users = (props) => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
  let pages = [];
  for (let i = 1; i <= 10; i++) {
    //pagesCount
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((el) => {
          return (<span className={props.selectedPage === el && styles.selected}
              onClick={() => {
                props.onPageChanged(el);
              }}
            >
              {" "}
              {el}{" "}
            </span>
          );
        })}
      </div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <NavLink to={"/profile/" + u.id}>
                <img
                  src={u.photos.small != null ? u.photos.small : "nothing"}
                  className={styles.avatar}
                />
              </NavLink>
            </div>
            <div>
              {u.followed ? (
                <button
                disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.unfollow(u.id)
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button disabled={props.followingInProgress.some(id => id === u.id)}
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>

          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            {/* <span>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </span> */}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
