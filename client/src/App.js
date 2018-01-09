import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <Router>
          <div>
            <Route exact path="/" render={() => <h1>Home</h1>} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
