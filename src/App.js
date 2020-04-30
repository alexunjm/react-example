import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Greeting = (props) => <h1>Welcome { props.name }</h1>

class Footer extends Component {
  render() {
    return <div>Made with love by {this.props.name}</div>
  }
}

function App() {
  const name = 'Alexander Jaramillo'
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <Greeting name={ name } />
      </header>
      <Footer name={ name } />
    </div>
  );
}

export default App;
