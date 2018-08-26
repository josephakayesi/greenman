import React, {Component} from 'react';
import {AppRegistry} from 'react-native';
import {NativeRouter, Switch, Route} from 'react-router-native';

import LandingPage from './screens/LandingPage';
import Login from './screens/Login';
import SignUp from './screens/SignUp';


export default class App extends Component {
  render(){
    return(      
      <NativeRouter>
        <Switch>
          <Route exact path = "/" component = {LandingPage}/>
          <Route exact path = "/login" component={Login}/>   
          <Route exact path = "/signup" component = {SignUp}/>         
        </Switch>
      </NativeRouter>
              
    );
  }
}


AppRegistry.registerComponent('App', () => App);