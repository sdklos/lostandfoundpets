import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import NewPetContainer from './containers/NewPetContainer';
import PetsContainer from './containers/PetsContainer';
import PetShow from './components/PetShow';

export default class App extends Component {
  render() {
    return (
      <div>
        <header>
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
          <Router>
            <Switch>
              <Route exact path="/" component={PetsContainer} />
              <Route exact path="/add" component={NewPetContainer} />
              <Route exact path="/pets/{this.props.petId}" render={PetShow} />
            </Switch>
          </Router>
        </body>

      </div>
    );
  }
}
