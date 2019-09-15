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


    var data = {
      name: firebase.auth().currentUser.displayName,
      humidity: this.state.humidity
    }

    console.log(firebase.auth().currentUser.userId);
    writeUserData(firebase.auth().currentUser.userId, data.name, data.humidity);

  }


  render(){
    return(
      <div className="app">
        {this.state.isSignedIn ?
          //This is the logged in screen
          <div>
            <div className = "SignIn"><h1>Signed In!</h1>
            <div className = "filler2"></div>
            <div className = "welcome"><h4> Welcome {firebase.auth().currentUser.displayName}</h4></div>
            <div className = "introText">
              <p>
                <span>This allows you to control your fan, and choose when you want it to turn on based on the comfort level (calculated from humidity and dew point). </span>
                <span>Please input the comfort level at which you want the fan to turn on. Below are examples of geologically preffered levels:</span>
                <span>Midwest - 14.4, Pacific Southwest - 10.2</span>
              </p>
              <div>
              <div className = "filler2"></div>
                <form>
                  <input type = "text" value={this.state.value} onChange={this.handleChange}>
                  </input><button className = "enterButton" onClick={this.DisplayNumber}>Enter</button>
                </form><div className = "humidityNumber">Selected Comfort Level: {this.state.humidity}</div><div className = "filler"></div>
              </div>
            </div>
            <div className = "exitButton"><button type="button" className="btn btn-primary" onClick={()=>firebase.auth().signOut()}>Sign Out</button></div>
            </div>
          </div>
          :
          //This is the log in screen
          <div className = "title"><h1>Welcome to TheFANtasticController</h1><StyledFirebaseAuth className="googleSignIn" uiConfig={this.uiConfig}
          firebaseAuth={firebase.auth()}
          /></div>
        }
      </div>
    )
  }
}

function writeUserData(userId, name, num) {
  firebase.database().ref('Users/' + userId).set({
    username: name,
    humidity : num
  });
}


export default FanProject;
