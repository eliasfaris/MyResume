import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Student from './student';
import Recruiter from './recruiter';
import Welcome from './welcome';
import Login from './accounts/Login';
import Register from './accounts/Register';
import PrivateRoute from './common/PrivateRoute';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar';
import store from '../store';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Alerts from './Alerts';

import { Provider } from 'react-redux';
import { loadUser } from '../actions/auth';




// Alert Options
const alertOptions = {
  timeout: 3000,
  position: 'top center',
};

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser()); //Loads the user for the application  
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <Fragment>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/student" component={Student} />
                <Route exact path="/recruiter" component={Recruiter} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </Fragment>
        </Router>
      </Provider>


    );
  }
}
ReactDOM.render(<App />, document.getElementById('app'));
