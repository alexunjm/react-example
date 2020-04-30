import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Greeting = (props) => <h1>Welcome { props.name }</h1>

class Parameters extends Component {
  render() {
    return (
      <div>
        <p>array: {this.props.array.map(this.props.fn).join(', ')}</p>
        <p>boolean: {this.props.boolean ? 'TRUE': 'FALSE'}</p>
        <p>number: {this.props.number}</p>
        <p>object value: {this.props.object.key}</p>
        <p>string: {this.props.string}</p>
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
        fn={(number) => number * 3}
      />
    </div>
  );
}

export default App;
