import * as firebase from 'firebase';

export default class FirebaseDatabase {
  constructor() {
    firebase.initializeApp({
      apiKey: "AIzaSyDfdniUFdeUf1TXTBWov-cevEKg7bRG1xY",
      authDomain: "p2p-app-c07c9.firebaseapp.com",
      databaseURL: "https://p2p-app-c07c9.firebaseio.com",
      projectId: "p2p-app-c07c9",
      storageBucket: "p2p-app-c07c9.appspot.com",
      messagingSenderId: "934184481385"
    });
  }

  handleSignUp = (state, navigation) => {
    console.log("Signing Up!");
    firebase
      .auth()
      .createUserWithEmailAndPassword(state.email, state.password)
      .then(() => navigation.navigate('Home'))
      .catch(error => console.log(error))
  }

  handleLogin = (state, navigation) => {
    console.log("Logging In!");
  firebase
    .auth()
    .signInWithEmailAndPassword(state.email, state.password)
    .then(() => navigation.navigate('Home'))
    .catch(error => console.log(error))
  }

  logOut = (navigation) => {
    firebase
      .auth()
      .signOut()
      .then(() => navigation.navigate('Landing'))
      .catch(error => console.log(error))
  }

  checkStatus(){
    firebase.auth().onAuthStateChanged((user) => {
      if(user) {
        return true;
      } else {
        return false;
      }
    })
  }
}
