import React, { Component } from "react";
import { connect } from "react-redux";
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

    const authLinks = (
      <ul className="navbar-nav logoutbtn">
        <span className="navbar-text mr-3">
          <strong class="user">
            {user ? `Welcome ${user.username}!` : ""}
          </strong>
        </span>
        &nbsp;&nbsp;&nbsp;
        <li>
          <button class="navbar-brand1" onClick={this.props.logout}>
            Logout
          </button>
        </li>
      </ul>
    );
    return (
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="MyResume">
          <a className="navbar-brand">MyResume</a>
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
