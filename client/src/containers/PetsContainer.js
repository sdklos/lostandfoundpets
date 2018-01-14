import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/index';
import GetLocation from '../components/GetLocation.js'
import FilterPets from '../components/FilterPets.js'
import ShowPets from '../components/ShowPets.js'

class PetsContainer extends Component {
  render() {
    return (
      <div>
        <h1>Search for Pets</h1>

      </div>
    )}
};

export default PetsContainer
