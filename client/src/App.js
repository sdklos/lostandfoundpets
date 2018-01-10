import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import NavBar from '../src/components/NavBar';
import NewPet from '../src/components/NewPet';
import PetsPage from '../src/containers/PetsContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <NavBar />
              <p className="App-title">
                Lost and Found Pets
              </p>
            </div>
          </Router>
        </header>
        <body>
          <Route exact path="/" render={PetsContainer} />
          <Route exact path="/add" render={NewPet} />
        </body>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { pets: state.pets };
};

export default connect(mapStateToProps)(App);
