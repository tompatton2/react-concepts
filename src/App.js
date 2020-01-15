import React from 'react';
import './App.css';
import Alert from './ui-components/Alert';

function App() {
  return (
  <>
    <div className="container">
      <Alert
        message="Hello World"
        type="success"
      />
    </div>
    <div className="container">
      <Alert
        message="Hello World"
        type="danger"
      />
    </div>
    <div className="container">
      <Alert
        message="Hello World"
        type="primary"
      />
    </div>
  </>
  );
}

export default App;
