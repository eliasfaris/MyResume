import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Nav } from "react-bootstrap";
import PropTypes from "prop-types";
import { logout } from "../actions/auth";
import "./Navbar.css";

export class Navbar extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;

    const guestLinks = (
      <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
        <li className="nav-item">
          <Link to="/register" className="nav-link">
            Register
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </li>
      </ul>
    );
    const authLinks = (
      <ul className="navbar-nav logoutbtn">
        <span className="navbar-text mr-3">
          <strong>{user ? `Welcome ${user.username}` : ""}</strong>
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
      // <nav className="navbar navbar-expand-sm navbar-light bg-light">
      //   <div className="container">
      //     <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
      //       <a className="navbar-brand" href="/">
      //         MyResume
      //       </a>
      //       {/* <div>{isAuthenticated ? authLinks : guestLinks2}</div> */}
      //     </div>
      //     {isAuthenticated ? authLinks : null}
      //   </div>
      // </nav>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="MyResume">
          <a className="navbar-brand">MyResume</a>
          {/* <div>{isAuthenticated ? authLinks : guestLinks2}</div> */}
        </div>
        {isAuthenticated ? authLinks : null}
      </nav>
      // <nav class="navbar navbar-expand-lg navbar-light bg-light">
      //   <div class="MyResume">
      //     <a class="navbar-brand">MyResume</a>
      //   </div>

      //   <button class="logoutbtn">Logout</button>
      //   {/* <button
      //     class="navbar-toggler"
      //     type="button"
      //     data-toggle="collapse"
      //     data-target="#navbarNavDropdown"
      //     aria-controls="navbarNavDropdown"
      //     aria-expanded="false"
      //     aria-label="Toggle navigation"
      //   >
      //     <span class="navbar-toggler-icon"></span>
      //   </button> */}
      // </nav>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);
