import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Login extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login</Text>
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
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('EmailLogin')}
          style = {styles.registerButton}>
              <Image
                source={require('../../images/buttons/E-Mail.png')}
              />
        </TouchableOpacity>
        <Text style = {styles.footer}> Dont have an account? </Text>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Register')}
          style = {styles.registerButton}>
          <Text style = {styles.text}> Register </Text>
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
  footer : {
    paddingTop : 50,
    fontWeight :  '200',
  },
  registerButton : {
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor: '#00204E',
    paddingTop : 10,
    paddingBottom : 10,
    width : 250,
    marginTop : 10,
    marginBottom : 10,
    borderRadius : 7,
  },
  text : {
    fontSize : 20,
    color : '#FAFAFA'
  },
  facebookButton : {
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor: '#3B5998',
    paddingTop : 10,
    paddingBottom : 10,
    width : 250,
    marginTop : 10,
    marginBottom : 10,
    borderRadius : 7,
  },
  googleButton : {
    alignItems: 'center',
    justifyContent : 'center',
    backgroundColor: '#FAFAFA',
    paddingTop : 10,
    paddingBottom : 10,
    width : 250,
    marginTop : 10,
    marginBottom : 10,
    borderRadius : 7,
    borderWidth : 0.5,
    borderColor : '#979797',
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
