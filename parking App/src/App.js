import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import NavLoginBar from './components/navbar.js'
import SideNav from './components/sideNav.js'
// import MenuIcon from './components/menuIcon.js'

import SigninComponent from './components/signinForm.js'
// import SignupComponent from './components/signupForm.js'




import * as firebase from 'firebase'


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBr7hxSzKSNVP30nv1y2H7gtuAwG_Tn6Us",
    authDomain: "parking-app-d5a76.firebaseapp.com",
    databaseURL: "https://parking-app-d5a76.firebaseio.com",
    projectId: "parking-app-d5a76",
    storageBucket: "parking-app-d5a76.appspot.com",
    messagingSenderId: "646651652442"
  };
  firebase.initializeApp(config);


class App extends Component {

  // showDiv(){
  //   document.getElementById("hiddenDiv").
  // }

  render() {
    return (
      <div >
        
          {/*<MenuIcon/>*/}
          <NavLoginBar/>
          <SideNav/>
          
            <SigninComponent/>
          
        
      </div>
    );
  }
}

export default App;
