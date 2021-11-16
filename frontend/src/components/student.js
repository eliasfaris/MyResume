import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  BrowserRouter,
} from "react-router-dom";
import Clock from "react-live-clock";
import "./Student.css";
import Right from "./Right/Right";
import Basic from "../components/Left/Basic";
import ResumeContextProvider from "../contexts/ResumeContext";

export default class Student extends Component {
  render() {
    function success() {
      var skills = document.getElementById("skills").value;
      var work = document.getElementById("work").value;
      var project = document.getElementById("projects").value;
      alert("Updated skills: " + skills);
      alert("Updated work experience: " + work);
      alert("Updated personal projects: " + project);
    }

    // console.log(skills);

    document.title = "Student page";

    // var CurrentDate = new Date().toLocaleDateString(); //Uses React's in built date function
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
    return (
      <div className="app">
        <ResumeContextProvider>
          {Templates}
          <Basic />
          <Right />
        </ResumeContextProvider>

        {/* <br></br>
        <center>
          <table class="studentInfo">
            <tr>
              <th></th>

              <th></th>
            </tr>
            <tr>
              <td></td>
              <td>{
                <form>
                  <br></br>
                  <div class="student-input">
                    <h1 class="top">Elias Faris </h1>
                    <span class="input-group-addon">Skills</span>
                    <input id="skills" type="text" class="form-control" name="msg" placeholder="All Skills (ex. Python, JavaScript, ...)" />
                    <br></br>
                    <span class="input-group-addon">Work Experience</span>
                    <input id="work" type="text" class="form-control" name="msg" placeholder="Describe experiences. Separate each as a bullet point" />
                    <br></br>
                    <span class="input-group-addon">Personal Project</span>
                    <input id="project" type="text" class="form-control" name="msg" placeholder="Describe projects you've done. Separate each as a bullet point" />
                  </div>
                  <br></br>
                  <center>
                    <button type="submit" class="btn btn-primary" onclick={success}>Save</button>
                  </center>

                </form>}
              </td>
            </tr>
          </table>
        </center> */}
      </div>
    );
  }
}
