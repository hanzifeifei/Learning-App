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

  // signInUserFacebook = (navigation) => {
  //   var provider = new firebase.auth.FacebookAuthProvider();
  //   firebase.auth().signInWithRedirect(provider);
  //   firebase.auth().getRedirectResult().then(function(result) {
  //     if (result.credential) {
  //       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
  //       var token = result.credential.accessToken;
  //       // ...
  //     }
  //     // The signed-in user info.
  //     var user = result.user;
  //     console.log(user);
  //     navigation.navigate('Home');
  //   }).catch(function(error) {
  //     // Handle Errors here.
  //     var errorCode = error.code;
  //     var errorMessage = error.message;
  //     // The email of the user's account used.
  //     var email = error.email;
  //     // The firebase.auth.AuthCredential type that was used.
  //     var credential = error.credential;
  //     // ...
  //     console.log(error);
  //   });
  //   return user;
  // };
}
