import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

import db from '../firebase';

export default class Home extends Component<Props> {

  handleLogOut() {
    db.logOut(this.props.navigation)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Home</Text>

        <TouchableOpacity
          onPress={this.handleLogOut.bind(this)}
          style = {styles.button}>
          <Text style = {styles.text}> Log Out </Text>
        </TouchableOpacity>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color : '#000',
    paddingBottom : 30,
    fontWeight: '200',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#00204E',
    paddingTop : 10,
    paddingBottom : 10,
    width : 250,
    height : 50,
    justifyContent : 'center',
    marginTop : 10,
    marginBottom : 10,
    borderRadius : 7,
  },
  text : {
    fontSize : 20,
    color : '#FAFAFA',
    fontWeight : '300',
  }
});
