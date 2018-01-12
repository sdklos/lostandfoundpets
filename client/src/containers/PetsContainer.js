import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import { fetchPets } from '../actions';
import GetLocation from '../src/components/GetLocation'
import FilterPets from '../src/components/FilterPets'
import ShowPets from '../src/components/ShowPets'

class PetsContainer extends Component {

  componentDidMount() {
    this.props.fetchPets();
  }

  render() {

    return (
      <div>
        <h1>Search for Pets</h1>
        <GetLocation />
        <FilterPets />
        <ShowPets />
      </div>
    );
  }
};

const mapStateToProps = state => {
  return {
    pets: state.pets
    petId: state.petId
    location: state.location
    radius: state.radius
  };
}

export default connect(mapStateToProps, { fetchPets })(PetsPage);
