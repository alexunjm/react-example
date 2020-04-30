import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Greeting = (props) => <h2>Welcome { props.name }</h2>

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

class Title extends Component {
  render() {
    return <h1>{this.props.text}</h1>
  }
}

Title.defaultProps = {
  text: "React Components"
}

class Count extends Component {

  constructor() {
    super()
    this.state = { counter: this.props.initVal } // no funcionan las props
    setInterval(() => {
      this.setState({ counter: this.state.counter + 1 })
    }, 2000)
  }

  render() {
    return (
      <div>
        <h2>The counter is <PrintNumber number={this.state.counter} />. Changed each 2 secs</h2>
      </div>
    );
  }
}

class PrintNumber extends Component {
  render() {
    return <span>{this.props.number}</span>
  }
}

function App() {
  const name = 'Alexander Jaramillo'
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="logo" alt="logo" />
        <Title />
      </header>
      <Greeting name={ name } />
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
      <Count />
    </div>
  );
}

export default App;
