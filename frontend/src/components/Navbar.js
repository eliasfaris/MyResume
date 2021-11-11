import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import "./Navbar.css";
import logo from "../components/images/logo2.png";



export class Navbar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    // const sjsulogo = (
    //   <div class = "logo" styles={{ flexGrow: 2 }}>
        
    //      <img src={logo} alt="logo" />
    //    </div>
    // );

    const authLinks = (
      <ul  className="navbar-nav logoutbtn">
        <span className="navbar-text mr-3">
          <strong class = "user">{user ? `Welcome ${user.username}!` : ""}</strong>
        </span>
        &nbsp;&nbsp;&nbsp;
        {/* <Nav.Link href="/testing">Testing</Nav.Link> */}
        <li>
          <button class="navbar-brand" onClick={this.props.logout}>
            Logout
          </button>
        </li>
      </ul>
    );
    const guestLinks2 = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/register" className="nav-link"></Link>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
         {/* {sjsulogo} */}
        <div className="MyResume">
          <a className="navbar-brand">MyResume</a>
          {/* <div>{isAuthenticated ? authLinks : guestLinks2}</div> */}
        </div>
        {isAuthenticated ? authLinks : null}
      </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
