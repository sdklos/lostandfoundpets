import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import NavBar from '../src/components/NavBar';
import NewPetContainer from '../src/containers/NewPetContainer';
import PetsContainer from '../src/containers/PetsContainer';
import PetShow from '../src/components/PetShow';

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
          <Switch>
            <Route exact path="/" render={PetsContainer} />
            <Route exact path="/add" render={NewPet} />
            <Route exact path="/pets/{this.props.petId}" render={PetShow} />
          </Switch>
        </body>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { petId: state.selectedPetId };
};

export default connect(mapStateToProps)(App);
