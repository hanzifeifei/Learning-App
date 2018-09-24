import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity, TextInput} from 'react-native';

export default class App extends Component<Props> {

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Questionnaire</Text>

        <View style = {styles.row}>
          <TextInput
            style={styles.inputSmall}
            placeholder="First Name"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={styles.inputSmall}
            placeholder="Last Name"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View style = {styles.row}>
          <TextInput
            style={styles.inputSmall}
            placeholder="Email"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={styles.inputSmall}
            placeholder="Confirm Email"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <View style = {styles.row}>
          <TextInput
            style={styles.inputSmall}
            placeholder="Password"
            onChangeText={(text) => this.setState({text})}
          />
          <TextInput
            style={styles.inputSmall}
            placeholder="Confirm Password"
            onChangeText={(text) => this.setState({text})}
          />
        </View>
        <TouchableOpacity onPress={this._onPressButton}>
              <Image
                style={styles.button}
                source={require('../../images/buttons/Confirm.png')}
              />
        </TouchableOpacity>

        <Text style = {styles.footer}> Or </Text>

        <TouchableOpacity onPress={this._onPressButton}>
              <Image
                style={styles.button}
                source={require('../../images/buttons/Facebook.png')}
              />
        </TouchableOpacity>
        <TouchableOpacity onPress={this._onPressButton}>
              <Image
                style={styles.button}
                source={require('../../images/buttons/Google.png')}
              />

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
    backgroundColor: 'transparent',
    padding: 10
  },
  row : {
    flexDirection : 'row',
    justifyContent : 'space-evenly',
    paddingBottom : 20,
  },
  inputSmall : {
    height: 40,
    width : 150,
    fontSize: 15,
    backgroundColor: '#FAFAFA',
    borderRadius : 7,
    margin : 10,
  }
});
