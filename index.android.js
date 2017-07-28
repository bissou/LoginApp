/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-components';
import Login from './Login';
import MemberArea from './MemberArea';
import Meteor, { connectMeteor } from 'react-native-meteor';

export default class loginApp extends Component {
/*
   componentWillMount() {
    const url = 'http://localhost:3000/websocket';
    Meteor.connect(url);
   }
   getMeteorData() {
    return {
      user: Meteor.user(),
    };
   }*/

  render() {
    return (
 <Navigator initialRoute = {{id : 'Login'}}
    renderScene = {this.navigatorRenderScene} />


     // <Login />
    );
  }

  navigatorRenderScene(route,navigator)
  {
    _navigator = navigator;
     switch (route.id)
     {
       case 'Login' : 
          return (<Login navigator = {navigator}/>);
       case 'MemberArea':
       return (<MemberArea navigator={navigator}/>)   

     }


  }
}



AppRegistry.registerComponent('loginApp', () => loginApp);
