import React, { Component } from "react";

const validators = {
  name: /^[a-zA-Z]+$/,
  email: /^\w+@\w+\.\w+$/,
  phone: /^\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}$/
};
export default class SerializedForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: {
        text: "",
        isValid: false
      },
      email: {
        text: "",
        isValid: false
      },
      phone: {
        text: "",
        isValid: false
      }
    };
  }

  onChange = e => {
    // Get name.
    const name = e.target.name;
    this.setState({
      [name]: {
        text: e.target.value,
        isValid: validators[name].test(e.target.value)
      }
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const state = {};
    let isValid = true;
    for (let key in this.state) {
      const val = this.state[key].text;
      const valid = validators[key].test(val);
      if (isValid) {
        isValid = valid;
      }
      state[key] = {
        isValid: valid
      };
    }
    if (isValid) {
      //dispatch
    }
    this.setState(state);
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ margin: "5em" }}>
        Name:{" "}
        <input
          type="text"
          name="name"
          onChange={this.onChange}
          value={this.state.name.text}
        />{" "}
        <span>{this.state.name.isValid ? "Valid" : "Invalid"}</span>
        <br />
        Email:{" "}
        <input
          type="email"
          name="email"
          onChange={this.onChange}
          value={this.state.email.text}
        />
        <span>{this.state.email.isValid ? "Valid" : "Invalid"}</span>
        <br />
        Phone:{" "}
        <input
          type="phone"
          name="phone"
          onChange={this.onChange}
          value={this.state.phone.text}
        />
        <span>{this.state.phone.isValid ? "Valid" : "Invalid"}</span>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
