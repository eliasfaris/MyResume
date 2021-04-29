import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Clock from 'react-live-clock';
import './Student.css';


export default class Student extends Component {

  render() {


    function success() {
      var skills = document.getElementById('skills').value;
      var work = document.getElementById('work').value;
      var project = document.getElementById('projects').value;
      alert("Updated skills: " + skills)
      alert("Updated work experience: " + work)
      alert("Updated personal projects: " + project)
    }

    // console.log(skills);

    document.title = 'Student page'

    var CurrentDate = new Date().toLocaleDateString(); //Uses React's in built date function 

    return (
      <div>
        <br></br>
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
                  <br>
                  </br>
                  <center>
                    <button type="submit" class="btn btn-primary" onclick={success}>Save</button>
                  </center>

                </form>}
              </td>
            </tr>
          </table>
        </center>
      </div>



    );
  }

}
