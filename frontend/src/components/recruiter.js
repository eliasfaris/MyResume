import React, { Component, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Clock from "react-live-clock";
import { FormControl, Input, TextField } from "@material-ui/core";
import "./styles.css";
import logo from "./images/logo.png";

export default class Recruiter extends Component {
  render() {
    document.title = "Recruiter Page";
    return (
      <div>
        {/* <h1>Recruiter Page</h1> */}
        <div>
          <center>
            <img class="logos" src={logo} alt="logo" />
          </center>
        </div>
        <div className="middle">
          <div className="col-md-6 m-auto">
            <center>
              <FormControl>
                <br></br>
                {/* <span class="input-group-addon">* Major </span> */}
                <TextField
                  id="skills"
                  fullWidth
                  label="Major"
                  name="name"
                  variant="outlined"
                  style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />

                <br></br>
                {/* <span class="input-group-addon">* Skills</span> */}
                <TextField
                  id="skills"
                  fullWidth
                  label="Skills (skill1, ...)"
                  name="name"
                  variant="outlined"
                  style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
                <br></br>
                {/* <span class="input-group-addon">* Graduation Year</span> */}
                <TextField
                  id="skills"
                  fullWidth
                  label="Grad Year (MM/YYYY)"
                  name="name"
                  variant="outlined"
                  style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
                <br></br>
                <TextField
                  id="skills"
                  fullWidth
                  label="Courses (course 1, ...)"
                  name="name"
                  variant="outlined"
                  sx={{ width: "100ch" }}
                  style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
                <br></br>

                <center>
                  <button type="submit" class="btn btn-primary">
                    Filter
                  </button>
                </center>
              </FormControl>
            </center>
          </div>
        </div>
      </div>
    );
  }
}
