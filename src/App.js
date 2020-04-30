import React from 'react';
import logo from './logo.svg';
import './App.css';

const Greeting = (props) => <h1>Welcome { props.name }</h1>

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <Greeting name="Alexander Jaramillo" />
      </header>
    </div>
  );
}

export default App;
