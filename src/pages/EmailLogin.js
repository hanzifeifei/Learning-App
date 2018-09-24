import React, {Component} from 'react';
import {Alert, StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

import db from '../firebase';

export default class EmailLogin extends Component<Props> {

  constructor() {
    super();
    this.state  = {
      email : '',
      password : '',
    }
  }

  verifyLogin() {
    if(this.state.email == '') {
      Alert.alert(
        'Error',
        'Email was not entered!',
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      )
    }
    else if (this.state.password == '') {
      Alert.alert(
        'Error',
        'Password was not entered!',
        [
          {text: 'OK'},
        ],
        { cancelable: false }
      )
    } else {
      db.handleLogin(this.state, this.props.navigation)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
        <View style = {styles.row1}>
          <TextInput
            style={styles.inputMedium}
            placeholder="Email"
            onChangeText={(text) => this.setState({email : text})}
            keyboardType = 'email-address'
          />
        </View>
        <View style = {styles.row1}>
          <TextInput
            style={styles.inputMedium}
            placeholder="Password"
            onChangeText={(text) => this.setState({password : text})}
            secureTextEntry = {true}
          />
        </View>
        <TouchableOpacity
          onPress={this.verifyLogin.bind(this)}
          style = {styles.button}>
              <Image
                source={require('../../images/buttons/Confirm.png')}
              />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FAFAFA',
    paddingTop : 50,
    paddingBottom : 40,
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
    justifyContent : 'center',
    backgroundColor: '#00204E',
    paddingTop : 10,
    paddingBottom : 10,
    width : 250,
    height : 49,
    marginTop : 10,
    marginBottom : 10,
    borderRadius : 7,
  },
  row1 : {
    flexDirection : 'row',
    justifyContent : 'center',
    paddingBottom : 30,
  },
  inputMedium : {
    height: 40,
    width : 300,
    fontSize: 15,
    backgroundColor: '#FAFAFA',
    borderRadius : 7,
  }
});
