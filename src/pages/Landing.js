import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

export default class Landing extends Component<Props> {

  constructor() {
    super();
    this.state  = {
      email : '',
      password : '',
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to P2PIL</Text>
        <View style = {styles.content}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Login')}
            style = {styles.button}>

            <Text style = {styles.text}> Login </Text>

          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Register')}
            style = {styles.button}>

            <Text style = {styles.text}> Register </Text>

          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingTop : 50,
    paddingBottom : 40,
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 30,
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
    justifyContent : 'center',
    marginTop : 10,
    marginBottom : 10,
    borderRadius : 7,
  },
  text : {
    fontSize : 20,
    color : '#FAFAFA',
    fontWeight : '300',
  },
  content : {
    marginTop : 100,
  }
});
