import React, { Component } from "react";

import "./App.css";
import { emailValidation, passwordLengthValidation } from "./services";
import { RaisedButton, TextField } from "material-ui";
import swal from "sweetalert2";

export default class Form extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      url: ""
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
    const errors = [emailValidation(email), passwordLengthValidation(password)]
      .filter(error => !!error)
      .join(" ");

    !errors.length
      ? swal({
          title: "Success",
          type: "success"
        })
      : swal({
          title: "Errors",
          type: "error",
          html: `<div>${errors}</div>`
        });
  };

  render() {
    return (
      <form onSubmit={this.onSubmitForm}>
        <div>
          <TextField
            floatingLabelText="email"
            name="email"
            onChange={this.onChangeInput}
            value={this.state.email}
          />
          <br />
          <TextField
            floatingLabelText="password"
            name="password"
            type="password"
            onChange={this.onChangeInput}
            value={this.state.password}
          />
          <br />

          <TextField
            floatingLabelText="url"
            name="url"
            type="url"
            value={this.state.url}
            onChange={this.onChangeInput}
          />
          <br />
          <RaisedButton label="Submit" type="submit" secondary={true} />
        </div>
      </form>
    );
  }
}
