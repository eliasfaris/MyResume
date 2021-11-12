import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect, Link } from "react-router-dom";
import Student from "./student";
import Recruiter from "./recruiter";
import Welcome from "./welcome";
import Login from "./accounts/Login";
import Register from "./accounts/Register";
import PrivateRoute from "./common/PrivateRoute";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import store from "../store";

//NEWLY ADDED
import Basic from "../components/Left/Basic";
import Right from "../components/Right/Right";
import "./styles.css";
import ResumeContextProvider from "../contexts/ResumeContext";
import myClasses from "./../components/Left/Left.module.css";
import logo from "../components/images/logo.png";
// import thumbn from "../../src/assets/templateA.png";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

//END NEWLY ADDED

import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import Alerts from "./Alerts";

import { Provider } from "react-redux";
import { loadUser } from "../actions/auth";

function Templates() {
  const useStyles = makeStyles({
    headerLink: {
      color: "#FF8E53 ",
      minWidth: 100,
      marginLeft: 30,
    },
  });

  const classes = useStyles();

  return (
    <div className="left">
      <div className={myClasses.headerLeft}>
        <Link to="/welcome" style={{ textAlign: "left" }}>
          <img src={logo} alt="logo" className={myClasses.img2} />
        </Link>
      </div>
      <hr className={myClasses.hr2} />
      <h2 className={myClasses.templatesH2}>Templates</h2>
      <div className={myClasses.cards}>
        <div className={myClasses.templateCard}>
          <Button
            className={classes.headerLink}
            component={Link}
            to="/student/header"
          >
            The Basic
          </Button>
        </div>
        {/* Placeholder for a second template */}
        {/* <div className={myClasses.templateCard}>
          <img src={thumbn} alt="thumbnail" className={myClasses.imgThumb} />
          <Button
            className={classes.headerLink}
            component={Link}
            to="/basic/header"
          >
            The Stylish
          </Button>
        </div> */}
      </div>
    </div>
  );
}

// Alert Options
// const alertOptions = {
//   timeout: 3000,
//   position: "top center",
// };

class App extends Component {
  // componentDidMount() {
  //   store.dispatch(loadUser()); //Loads the user for the application
  // }

  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <div className="app">
          <ResumeContextProvider>
            <BrowserRouter>
              <Switch>
                <Route path="/" component={Templates} exact />
                <Route path="/student" component={Basic} />
              </Switch>
            </BrowserRouter>
            <Right />
          </ResumeContextProvider>
        </div>
      </Provider>
      // <Provider store={store}>
      //   {/* <ResumeContextProvider> */}
      //   <Router>
      //     <Fragment>
      //       <Navbar />
      //       {/* <div className="container"> */}
      //         <Switch>
      //         <div className ="app">
      //         <ResumeContextProvider>
      //             <Route exact path="/welcome" component={Templates} exact />
      //            <Route exact path="/student" component={Basic} />
      //           <Right />
      //           </ResumeContextProvider>
      //           </div>
      //           <Route exact path="/recruiter" component={Recruiter} />
      //           <Route exact path="/register" component={Register} />
      //           <Route exact path="/login" component={Login} />
      //         </Switch>
      //     </Fragment>
      //   </Router>
      //    {/* <Right /> */}
      //   {/* </ResumeContextProvider> */}
      //   {/* </div> */}
      // </Provider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("app"));
