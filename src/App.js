import React, {useState} from 'react';

//import Icon.js file
import Icon from "./Icon"

//import react-toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import reactstrap
import { Card, CardBody, Col, Row, Container, Button } from 'reactstrap'
import 'boostrap/dist/css/bootstrap.css';

//import local CSS
import './App.css';






























function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
