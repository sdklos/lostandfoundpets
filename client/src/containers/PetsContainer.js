import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchPets } from '../actions/index';
import SearchByLocation from '../components/SearchByLocation.js'
import ShowPets from '../components/ShowPets.js'

class PetsContainer extends Component {
  componentDidMount(){
    this.props.fetchPets()
  }

  render() {
    return (
      <div>
        <h1>Search for Pets</h1>
        <SearchByLocation />
        <ShowPets pets={this.props.pets} />
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPets: fetchPets
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PetsContainer);
