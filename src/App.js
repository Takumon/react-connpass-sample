import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

function App() {
  axios.get('https://connpass.com/api/v1/event/?keyword=python', {
    headers: {
      'User-Agent': 'Node/8.10',
      'Content-Type': 'application/json;charset=UTF-8',
      'Access-Control-Allow-Origin': '*',
    }})
  .then(res => {
    const events = res.data.events
    console.log('res')
    console.log(res)
  })
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
