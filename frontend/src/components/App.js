import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Student from './student';
import Recruiter from './recruiter';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';




// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {

  render() {
    return (


      <Router>
        <Fragment>
          <Navbar />
          <div className="container">
            <Switch>

              <Route exact path="/student" component={Student} />
              <Route exact path="/recruiter" component={Recruiter} />

            </Switch>
          </div>
        </Fragment>
      </Router>


    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
