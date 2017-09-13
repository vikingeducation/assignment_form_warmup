import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      url: ''
    };
  }

  onChangeInput = e => {
    let text = e.target.value;

    this.setState({
      [e.target.name]: text
    });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Controlled Form</h2>
        </div>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required="required"
            onChange={this.onChangeInput}
            value={this.state.email}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            required="required"
            onChange={this.onChangeInput}
            value={this.state.password}
          />

          <label htmlFor="url">Url</label>
          <input
            type="url"
            id="url"
            name="url"
            required="required"
            onChange={this.onChangeInput}
            value={this.state.url}
          />

          <button>Submit</button>
        </form>
      </div>
    );
  }
}

export default App;
