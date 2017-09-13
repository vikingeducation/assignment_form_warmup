import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { emailValidation } from './services';
import swal from 'sweetalert2';

console.log(emailValidation);

class App extends Component {
  constructor() {
    super();

    this.state = {
      email: 'awillenrbink@gmail.com',
      password: 'password',
      url:
        'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions'
    };
  }

  onChangeInput = e => {
    let text = e.target.value;

    this.setState({
      [e.target.name]: text
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { email, password, url } = this.state;
    console.log('email: ', email);
    let result = emailValidation(email);
    console.log('result: ', result);
    !result.length
      ? alert('you made it')
      : swal({
          title: 'Errors',
          type: 'error',
          html: `${result[0]}`
        });
  };

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Controlled Form</h2>
        </div>
        <form onSubmit={this.onSubmitForm}>
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
