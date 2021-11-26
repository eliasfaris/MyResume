import React, { Component } from "react";
import { FormControl, TextField } from "@material-ui/core";
import "./styles.css";
import logo from "./images/logo.png";

export default class Recruiter extends Component {
  render() {
    document.title = "Recruiter Page";
    return (
      <div>
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
                <TextField
                  id="skills"
                  fullWidth
                  label="Major"
                  name="name"
                  variant="outlined"
                  style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />

                <br></br>

                <TextField
                  id="skills"
                  fullWidth
                  label="Skills (skill1, ...)"
                  name="name"
                  variant="outlined"
                  style={{ marginTop: 12, marginLeft: 8, marginRight: 8 }}
                />
                <br></br>
        
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
                  label="Courses (course1, ...)"
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
