import React, {Component} from "react";
import ControlledForm from "../components/ControlledForm";

//for instant validation
import serialize from "form-serialize";
import {validateForm} from "../helpers";

class ControlledFormContainer extends Component {
  constructor() {
    super();
    this.state = {
      success: false,
      errors: {},
      exampleEmail: "",
      examplePassword: "",
      exampleURL: ""
    };
  }

  onChangeInput = e => {
    e.preventDefault();

    this.setState({
      [e.target.name]: e.target.value
    });

    const form = document.getElementById("controlledform");
    console.log("form =>", form);
    const data = serialize(form, {hash: true});
    console.log("data =>", data);
    const errors = validateForm(data);

    this.setState({errors});
  }

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    this.formSuccess();
  };

  formSuccess = () => {
    this.setState(
      {
        success: true,
        errors: {},
        exampleEmail: "",
        examplePassword: "",
        exampleURL: ""
      },
      () => console.log("Success!")
    );
  };

  render() {
    return (
      <ControlledForm
        onSubmit={this.onSubmit}
        onChangeInput={this.onChangeInput}
        {...this.state}
      />
    );
  }
}

export default ControlledFormContainer;
