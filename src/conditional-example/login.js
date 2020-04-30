import React, { Component } from 'react';

class Login extends Component {
  render() {
    return <button>Login</button>
  }
}
class Panel extends Component {
  render() {
    return (
      <div>
        <p>Welcome</p>
        <button>Logout</button>
      </div>
    )
  }
}
export default class Session extends Component {

  constructor(props) {
    super(props)
    this.state = { notLogged: true }
  }

  render() {
    return this.state.notLogged ? <Login /> : <Panel />
  }
}