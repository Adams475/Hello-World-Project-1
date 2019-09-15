import React, { Component } from 'react';
import Home from './Home';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebase from 'firebase';
import './App.css';

class FanProject extends Component {
  state={
    isSignedIn: false
  }

  uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
    ],
    callbacks: {
      signInSuccess: () => false
    }
  }

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn:!!user})
    })
  }

  render(){
    return(
      <div className="app">
        {this.state.isSignedIn ?
          <div>
            <div className = "SignIn"><h1>Signed In!</h1>
              <div><button type="button" class="btn btn-primary" onClick={()=>firebase.auth().signOut()}>Sign Out</button></div>
            <div>Welcome {firebase.auth().currentUser.displayName}</div>
            </div>
          </div>
          :
          <StyledFirebaseAuth className="googleSignIn" uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
          />
        }
      </div>
    )
  }
}

export default FanProject;
