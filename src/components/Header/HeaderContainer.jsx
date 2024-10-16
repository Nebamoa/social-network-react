import React, { useEffect } from "react";
import h from "./Header.module.css";
import Header from "./Header";
import { connect } from "react-redux";
import { getUserData } from "../../redux/authReducer";
const HeaderContainer = (props) => {
  const { data, getUserData } = props;
  useEffect(() => {
    getUserData()
  }, [getUserData]);
  return ( <Header {...props} data={data} />)
};

const mapStateToProps = (state) => ({
  data: state.auth.data,
  isAuth: state.auth.isAuth
});

export default connect(mapStateToProps, {
  getUserData,
})(HeaderContainer);
