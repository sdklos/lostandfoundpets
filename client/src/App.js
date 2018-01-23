import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';
import PetForm from './components/PetForm';
import EditPetContainer from './containers/EditPetContainer'
import PetsContainer from './containers/PetsContainer';
import PetShow from './components/PetShow';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class App extends Component {

  render() {
    return (
      <MuiThemeProvider>
      <Router>
        <div>
          <div className="App-header">
          <p className="App-title">
            Lost and Found Pets
          </p>
            <span><NavLink to="/" exact>Home</NavLink></span>
            <span><NavLink to="/add" exact>Add a Lost or Found Pet</NavLink></span>
          </div>

          <Switch>
            <Route exact path="/" component={PetsContainer} />
            <Route exact path="/add" component={PetForm} />
            <Route exact path="/pets/:id" component={PetShow} />
            <Route exact path="/pets/:id/edit" component={EditPetContainer} />
          </Switch>
        </div>
      </Router>
      </MuiThemeProvider>
    );
  }
}

export default App;
