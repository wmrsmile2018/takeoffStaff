import React, { Component } from 'react';
import { Switch, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';

import SignIn from './pages/signIn/index';
import Contacts from './pages/contacts/index';
import getHistory from './utils/history';

export class App extends Component {

  componentDidMount = () => {
    getHistory().push('/signin');
  }

  render() {
    return (
      <div className="App">
          <Switch>
            <Route exact path="/contacts" component={Contacts}/>
            <Route exact path="/signin" component={SignIn}/>
          </Switch>
      </div>
    )
  }
}
