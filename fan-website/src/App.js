import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          What's good fam?
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
      </header>
    </div>


  );
}

export default App;
