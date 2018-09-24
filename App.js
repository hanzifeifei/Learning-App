import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';

import db from './src/firebase';

import Login from './src/pages/Login';
import Register from './src/pages/Register';
import EmailLogin from './src/pages/EmailLogin';
import Landing from './src/pages/Landing';
import Home from './src/pages/Home';

const RootStack = createStackNavigator(
  {
    Login,
    Register,
    EmailLogin,
    Landing,
    Home,
  },
  {
    initialRouteName: 'Landing',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  }
});
