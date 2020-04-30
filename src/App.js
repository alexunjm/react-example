import React, { Component } from 'react';
import logo from './logo.svg';
import Session from './conditional-example/login';
import './App.css';

function App() {
  return (
    <div>
      <div className="logo-container">
        <img src={logo} className="logo" alt="logo" />
      </div>
      <Session />
    </div>
  );
}

export default App;
