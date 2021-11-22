import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { login } from "../../actions/auth";

export class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.login(this.state.username, this.state.password),
      localStorage.setItem("userInfo", JSON.stringify(this.state.username));
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  shouldRefresh = () => {
    this.state = {
      refresh: false,
    };
  };

  shouldRefresh = () => {
    if (this.props.isAuthenticated) {
      console.log("hei?");
      window.location.reload();
    }
  };
  render() {
    document.title = "MyResume | Login";
    if (this.props.isAuthenticated) {
      // JSON.parse(localStorage.getItem("userInfo"));
      localStorage.setItem("currUser", this.state.username);
      return <Redirect to="/student" />;
    }
    const { username, password } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Login</h2>
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                onChange={this.onChange}
                value={username}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={this.onChange}
                value={password}
              />
            </div>

            <div className="form-group">
              <center>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </center>
            </div>
            <p>
              Don't have an account? <a href="/register">Register</a>
            </p>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
