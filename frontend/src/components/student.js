import React, { Component } from "react";
import { BrowserRouter as Link } from "react-router-dom";
import "./Student.css";
import Right from "./Right/Right";
import Basic from "../components/Left/Basic";
import ResumeContextProvider from "../contexts/ResumeContext";

export default class Student extends Component {
  render() {
    document.title = "Student page";
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
            <img src={logo} alt="logo" className={myClasses.img2} />
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
          </div>
        </div>
      );
    }
    return (
      <div className="app">
        <ResumeContextProvider>
          {Templates}
          <Basic />
          <Right />
        </ResumeContextProvider>
      </div>
    );
  }
}
