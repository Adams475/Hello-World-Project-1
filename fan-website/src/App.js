import React from 'react';
import logo from './logo.svg';
import './App.css';
import {base} from './base'
import {Component} from 'react'

class Appp extends Component{


  componentWillMount(){

  }

  componentWillUnmount(){

  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          What's good?
        </p>
        <h1>
        Header
        </h1>
        <a
          className="App-link"
          href="https://youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Go to this cool link here: (Youtube.com)
        </a>
        <a
          className="pizza"
          href="https://boredbutton.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Yo
        </a>
      </header>
    </div>


  );
}



export default App;
