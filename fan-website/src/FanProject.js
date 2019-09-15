import React, { Component } from 'react';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import * as firebase from 'firebase';
import './App.css';

class FanProject extends Component {
  state={
    isSignedIn: false,
    value: "",
    humidity: 0
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

  handleChange = (event) => {
    event.preventDefault();
    this.setState({value: event.target.value});
    console.log(this.state.humidity);
  }

  DisplayNumber = (event) =>{
    event.preventDefault();
    this.setState({value: event.target.value});
    this.state.humidity = this.state.value;
  }

  render(){
    return(
      <div className="app">
        {this.state.isSignedIn ?
          //This is the logged in screen
          <div>
            <div className = "SignIn"><h1>Signed In!</h1>

            <div className = "welcome"><h4> Welcome {firebase.auth().currentUser.displayName}</h4></div>
            <div className = "introText">
              <p>
                <span>This allows you to control your fan, and choose when you want it to turn on based on the humidity. </span>
                <span>Please input the humidity level at which you want the fan to turn on.</span>
              </p>
              <div>
                <form>
                  <input type = "text" value={this.state.value} onChange={this.handleChange}>
                  </input><button className = "enterButton" onClick={this.DisplayNumber}>Enter</button>
                </form><dev className = "humidityNumber">{this.state.humidity}</dev>
              </div>
            </div>
            <div className = "exitButton"><button type="button" className="btn btn-primary" onClick={()=>firebase.auth().signOut()}>Sign Out</button></div>
            </div>
          </div>
          :
          //This is the log in screen
          <div className = "title"><h1>Welcome to FanController</h1><StyledFirebaseAuth className="googleSignIn" uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
          /></div>
        }
      </div>
    )
  }
}

export default FanProject;
