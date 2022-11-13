import Greetings from "./Greetings";
import React from "react";
import './App.css';

class SimpleForm extends React.Component {
  state = {
    firstName: "",
    firstNameError: ""
  };

  validateName = name => {
    const regex = /[A-Za-z]{3,}/

    return !regex.test(name)
    ? "The name must contain at least three letters. Numbers and special characters are not allowed."
    : "";
  };

  onFirstNameBlur = () => {
    const { firstName } = this.state;

    const firstNameError = this.validateName( firstName )

    return this.setState({ firstNameError })
  };

  onFirstNameChange = event =>
    this.setState({
      firstName: event.target.value
    });

  render() {
    const { firstNameError, firstName } = this.state
    return (
      <div
        style={{
          margin: 50,
          padding: 10,
          width: 300,
          border: "1px solid black",
          backgroundColor: "black",
          color: "white"
        }}
      >
        <div>
          <label>
            First name:
            <input
              type="text"
              name="firstName"
              onChange={this.onFirstNameChange}
              onBlur={this.onFirstNameBlur}
            />
            {firstNameError && <div>{firstNameError}</div>}
          </label>
        </div>

        <Greetings
          firstName={firstName}
        />
      </div>
    );
  }
}

export default SimpleForm;
