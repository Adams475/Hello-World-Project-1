import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counters from './components/counters';
import FanProject from './FanProject'
import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyAoBh1zDH53DybpuOd0WUC5sHwA0iYXwP4",
    authDomain: "fan-website-29409.firebaseapp.com",
    databaseURL: "https://fan-website-29409.firebaseio.com",
    projectId: "fan-website-29409",
    storageBucket: "fan-website-29409.appspot.com",
    messagingSenderId: "789021120766",
    appId: "1:789021120766:web:01a8ae1ab2499f1335edaf"
  };

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<FanProject />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
