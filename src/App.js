import React, { Component } from 'react';
import './App.css';
import Alert from './ui-components/Alert';

class App extends Component {
  constructor() {
    super();

    this.state = {
      showAlert: true
    };

    this.toggleAlert = this.toggleAlert.bind(this);
  }

  toggleAlert() {
    this.setState({
      showAlert: !this.state.showAlert,
    });
  }

  render() {
    return (
    <>
      <div className="container">
        <Alert
          message="Hello World"
          type="danger"
          toggleAlert={this.toggleAlert}
          show={this.state.showAlert}
        />
      </div>
    </>
    );
  }
}

export default App;
