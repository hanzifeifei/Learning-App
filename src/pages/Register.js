import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Image, TouchableOpacity, TextInput, ScrollView} from 'react-native';

import db from '../firebase';

export default class Register extends Component<Props> {

  constructor() {
    super();
    this.state  = {
      firstName : '',
      lastName : '',
      email : '',
      password : '',
      errorMessage : null,
    }
  }

  verifyClick() {
    if(this.state.email == '') {
      Alert.alert(
        'Error',
        'Email was not entered!',
        [
          {text: 'OK'},
        ]
      )
    }
    else if(this.state.password == '') {
      Alert.alert(
        'Error',
        'Password was not entered!',
        [
          {text: 'OK'},
        ]
      )
    }
    else if(this.state.firstName == '') {
      Alert.alert(
        'Error',
        'First Name was not entered!',
        [
          {text: 'OK'},
        ]
      )
    }
    else if(this.state.lastName == '') {
      Alert.alert(
        'Error',
        'Last Name was not entered!',
        [
          {text: 'OK'},
        ]
      )
    }
    else {
      db.handleSignUp(this.state, this.props.navigation);
    }
  }

  render() {
    return (
      <ScrollView>
        <View style = {styles.container}>
          <Text style={styles.welcome}>Register</Text>
          <View style = {styles.row}>
            <TextInput
              style={styles.inputSmall}
              placeholder="First Name"
              onChangeText={(firstName) => this.setState({firstName})}
              value={this.state.firstName}
            />
            <TextInput
              style={styles.inputSmall}
              placeholder="Last Name"
              onChangeText={(lastName) => this.setState({lastName})}
              value={this.state.lastName}
            />
          </View>
          <View style = {styles.row1}>
            <TextInput
              style={styles.inputMedium}
              placeholder="Email"
              onChangeText={(email) => this.setState({email})}
              keyboardType = 'email-address'
              value={this.state.email}
            />
          </View>
          <View style = {styles.row1}>
            <TextInput
              style={styles.inputMedium}
              placeholder="Password"
              onChangeText={(password) => this.setState({password})}
              secureTextEntry = {true}
              value={this.state.password}
            />
          </View>
          <TouchableOpacity
            onPress={this.verifyClick.bind(this)}
            style = {styles.button}>
                <Image
                  source={require('../../images/buttons/Confirm.png')}
                />
          </TouchableOpacity>

          <Text style = {styles.footer}> Or </Text>

          <TouchableOpacity
            onPress={this._onPressButton}
            style = {styles.facebookButton}>
                <Image
                  source={require('../../images/buttons/Facebook.png')}
                />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style = {styles.googleButton}>
                <Image
                  source={require('../../images/buttons/Google.png')}
                />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={this._onPressButton}
            style = {styles.weChatButton}>
                <Image
                  source={require('../../images/buttons/weChat.png')}
                />
          </TouchableOpacity>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingTop : 50,
    paddingBottom : 40,
  },
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    marginTop: 0,
    color : '#000',
    paddingBottom : 30,
    fontWeight: '200',
  },
  instructions: {
    textAlign: 'center',
    color: '#000',
    marginBottom: 5,
  },
  footer : {
    fontSize : 20,
    paddingTop : 20,
    paddingBottom : 20,
    fontWeight :  '200',
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
  row : {
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    paddingBottom : 20,
    paddingLeft : 20,
  },
  inputSmall : {
    height: 40,
    width : 150,
    fontSize: 15,
    backgroundColor: '#FAFAFA',
    borderRadius : 7,
    margin : 10,
  },
  row1 : {
    flexDirection : 'row',
    justifyContent : 'center',
    paddingBottom : 20,
  },
  inputMedium : {
    height: 40,
    width : 300,
    fontSize: 15,
    backgroundColor: '#FAFAFA',
    borderRadius : 7,
  },
  facebookButton : {
    alignItems: 'center',
    backgroundColor: '#3B5998',
    paddingTop : 10,
    paddingBottom : 10,
    width : 250,
    justifyContent : 'center',
    marginTop : 10,
    marginBottom : 10,
    borderRadius : 7,
  },
  googleButton : {
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingTop : 10,
    paddingBottom : 10,
    width : 250,
    justifyContent : 'center',
    marginTop : 10,
    marginBottom : 10,
    borderRadius : 7,
    borderWidth : 0.5,
    borderColor : '#979797'
  },
  weChatButton : {
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor: '#7bb32e',
    paddingTop : 10,
    paddingBottom : 10,
    width : 250,
    marginTop : 10,
    marginBottom : 10,
    borderRadius : 7,
  }
});
