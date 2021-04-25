import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';


import PrivateRoute from './common/PrivateRoute';


import student from './Student';
import recruiter from './Recruiter';




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
        <AlertProvider template={AlertTemplate} {...alertOptions}>
          <Router> //Allows for having multiple pages within the application 
            <Fragment>
              <Navbar /> //Calls the Navbar component to display the naviagtion page on the application 
              <Alerts /> //Calls the Alert component to display error alerts  
              <div className="container">
                <Switch> 
                  <PrivateRoute exact path="/" component={Home} /> {/* Only accesible to authenticated users */} 
                  <Route exact path="/student" component={student} />
                  <Route exact path="/recruiter" component={recruiter} />
                  
                </Switch>
              </div>
            </Fragment>
          </Router>
        </AlertProvider>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
