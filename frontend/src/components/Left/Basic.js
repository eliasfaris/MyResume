import React, { useContext } from "react";
import Header from "./Header";
import Professional from "./Professional";
import Education from "./Education";
import Abilities from "./Abilities";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import myClasses from "./Left.module.css";
import logo from "../images/logo.png";
import { ResumeContext } from "../../contexts/ResumeContext";
import { makeStyles } from "@material-ui/core/styles";
import Volunteer from "./Volunteer";
import Projects from "./Projects";

const useStyles = makeStyles({
  recruiterBtn: {
    background: "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px #F2F3F4",
    color: "white",
    height: 30,
    textAlign: "center",
    fontSize: 15,
    marginTop: 15,
    marginRight: 20,
    fontWeight: 700,
  },

  headerLink: {
    color: "#0298B8 ",
  },
});
console.log(localStorage.getItem("userInfo"));
// this.onClick = this.onClick.bind(this);
// onClick = (e) => {
//   // this.props.login(this.state.username, this.state.password),
//   localStorage.setItem("userInfo", JSON.stringify(this.state.username));
// };

function Left() {
  const { control } = useContext(ResumeContext);
  const classes = useStyles();
  let recruiterPage;
  recruiterPage = (
    <button
      color="primary"
      // onClick={this.onClick}
      className={classes.recruiterBtn}
    >
      <a href="/recruiter">Recruiter Page </a>
    </button>
  );
  return (
    <div className="left">
      <div className={myClasses.headerLeft}>
        <div styles={{ flexGrow: 2 }}>
          <img src={logo} alt="logo" />
        </div>
        <div styles={{ flexGrow: 1 }}>{recruiterPage}</div>
        {/* <div styles={{ flexGrow: 1 }}>{expData}</div> */}
      </div>

      <div className="">
        <Router>
          <div className={myClasses.topLeft1}>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/student/header"
            >
              Header
            </Button>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/student/education"
            >
              Education
            </Button>

            <Button
              className={classes.headerLink}
              component={Link}
              to="/student/abilities"
            >
              Abilities
            </Button>
            <br></br>
          </div>
          <div className={myClasses.topLeft1}>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/student/projects"
            >
              Projects
            </Button>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/student/professional"
            >
              Experience
            </Button>
            <Button
              className={classes.headerLink}
              component={Link}
              to="/student/volunteer"
            >
              Volunteer
            </Button>
          </div>
          <div>
            <hr className={myClasses.hr} />
            <div className={myClasses.formsSection}>
              {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
              <Switch>
                <Route path="/student/header">
                  <Header />
                </Route>
                <Route path="/student/professional">
                  <Professional />
                </Route>
                <Route path="/student/education">
                  <Education />
                </Route>
                <Route path="/student/abilities">
                  <Abilities />
                </Route>
                <Route path="/student/volunteer">
                  <Volunteer />
                </Route>
                <Route path="/student/projects">
                  <Projects />
                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Left;
