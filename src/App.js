import React from 'react';
import logo from './logo.svg';
import './App.css';

function Greeting(props) {
  return <h1>Welcome { props.name }</h1>
}

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <Greeting name="Alex" />
      </header>
    </div>
  );
}

export default App;
