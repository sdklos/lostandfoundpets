import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import EditPetContainer from './containers/EditPetContainer'
import NewPetContainer from './containers/NewPetContainer'
import PetsContainer from './containers/PetsContainer';
import PetContainer from './containers/PetContainer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

export default class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <Router>
        <div>
          <div className="App-header">
          <p className="App-title">
            Lost and Found Pets
          </p>
            <div className="navigation">
              <span><NavLink to="/" exact>Home</NavLink></span>
              <span><NavLink to="/add" exact>Add a Lost or Found Pet</NavLink></span>
            </div>
          </div>

          <Switch>
            <Route exact path="/" component={PetsContainer} />
            <Route exact path="/add" component={NewPetContainer} />
            <Route path="/pets/:id" component={PetContainer} />
          </Switch>
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}
