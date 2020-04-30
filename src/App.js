import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Greeting = (props) => <h1>Welcome { props.name }</h1>

class Parameters extends Component {
  render() {
    const {
      array,
      boolean,
      fn,
      jsxSyntax,
      number,
      object,
      string,
      string2
    } = this.props

    return (
      <div>
        <p>array: {array.map(fn).join(', ')}</p>
        <p>boolean: {boolean ? 'TRUE': 'FALSE'}</p>
        <p>number: {number}</p>
        <p>object value: {object.key}</p>
        <p>string: {string2} {string}</p>
        {jsxSyntax}
      </div>
    )
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
      <Parameters
        array={[1, 2, 3]}
        boolean={true}
        number={4}
        object={{key: 'value', num: 5}}
        string={'my name is ' + name}
        string2='hello, '
        fn={(number) => number * 3}
        jsxSyntax={<strong>param component</strong>}
      />
    </div>
  );
}

export default App;
