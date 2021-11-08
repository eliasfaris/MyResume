import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import Clock from 'react-live-clock';
import './Recruiter.css';

export default class Recruiter extends Component {
  

  render() {
    
    
    document.title = 'Recruiter Page'

    var CurrentDate = new Date().toLocaleDateString(); //Uses React's in built date function 

    return (
      <form>
            <br></br>
            <div class="recruiter-input">
            <span class="input-group-addon">Major</span>
              <input id="skills" type="text" class="form-control" name="msg" placeholder="What major are you looking for?"/>
              <br></br>
              <span class="input-group-addon">Skills</span>
              <input id="skills" type="text" class="form-control" name="msg" placeholder="All Skills (ex. Python, JavaScript, ...)"/>
              <br></br>
              <span class="input-group-addon">Graduation Year</span>
              <input id="grad-year" type="text" class="form-control" name="msg" placeholder="Enter graduation year of student. (ex. 2023)"/>
              <br></br>
            </div>
            <center>
                <button type="submit" class="btn btn-primary">Filter</button>
            </center>
          </form>
  

        
    );
  }

}
