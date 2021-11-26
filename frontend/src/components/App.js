import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Student from "./student";
import Recruiter from "./recruiter";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
import Navbar from "./Navbar";
import store from "../store";
import "./styles.css";
import ResumeContextProvider from "../contexts/ResumeContext";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./Alerts";
import { Provider } from "react-redux";
import { loadUser } from "../actions/auth";

// Alert Options
const alertOptions = {
  timeout: 3000,
  position: "top center",
};

class App extends Component {
  componentDidMount() {
    store.dispatch(loadUser()); //Loads the user for the application
  }

  render() {
    return (
      <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Navbar />
          <Alerts />
          <BrowserRouter>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/recruiter" component={Recruiter} />
            </Switch>
            <ResumeContextProvider>
              <Switch>
                <PrivateRoute path="/student" component={Student} />
              </Switch>
            </ResumeContextProvider>
          </BrowserRouter>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
