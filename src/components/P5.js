import React, { Component } from 'react';

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthdate: '',
      age: null,
    };
  }

  calculateAge = () => {
    const birthdate = new Date(this.state.birthdate);
    const currentDate = new Date();
    const ageInMilliseconds = currentDate - birthdate;
    const ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);
    const age = Math.floor(ageInYears);
    this.setState({ age });
  };

  handleInputChange = (e) => {
    this.setState({ birthdate: e.target.value });
  };

  render() {
    return (
      <div>
        <h1>Age Calculator</h1>
        <h4>Enter your date of birth</h4>
        <div>
          <input
            type="date"
            value={this.state.birthdate}
            onChange={this.handleInputChange}
          />
          <br/>
          <button onClick={this.calculateAge}>Calculate Age</button>
        </div>
        <div>
          {this.state.age !== null && (
            <p>Your age is: {this.state.age} years</p>
          )}
        </div>
      </div>
    );
  }
}

export default AgeCalculator;
