import React from 'react';
import logo from './logo.svg';
import './App.css';

function Greeting() {
  return <h1>Welcome</h1>
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <Greeting />
      </header>
    </div>
  );
}

export default App;
