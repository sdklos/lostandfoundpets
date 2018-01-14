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
        <GetLocation />
        <FilterPets />
        <ShowPets />
      </div>
    )}
};

const mapStateToProps = state => {
  return {
    pets: state.pets,
    petId: state.petId,
    location: state.location,
    radius: state.radius
  };
}

export default connect(mapStateToProps)(PetsContainer);
